import ApiDomain from "@ovh-api/domain";
import Ovh from "@ovh-api/api";
import http from 'http';
import https, { RequestOptions } from 'https';
import chalk from 'chalk';
import os from 'os';

function help() {
    let version = '?';
    try {
        version = require('package.json').version;
    } catch (e) {
    }
    console.log(`ovh-dynhost2 V:${version}
    Options:
    -d [domain]               add domain to configure
    -u [url]                  add url used to find public IP
    -l, --local <localAdress> Local address to bind if you have mutiple gateway
    -t, --token <tokenfile>   save and reuse the certificat by storing them in a file
`);
    process.exit(1);
}

const program = {
    urls: [] as string[],
    domains: [] as string[],
    local: '',
    tokenfile: '',
}
let args = process.argv.splice(1);
while (args.length && !args[0].startsWith('-')) {
    args = args.splice(1);
}
let errCnt = 0;
for (let i = 0; i < args.length - 1; i++) {
    switch (args[i]) {
        case '-d':
            program.domains.push(args[++i])
            break;
        case '-u':
            program.urls.push(args[++i])
            break;
        case '-l':
        case '--local':
            program.local = args[++i];
            break;
        case '-t':
        case '--token':
            program.tokenfile = args[++i]
            break;
        default:
            console.error('unknown param:' + args[i])
            errCnt++;
    }
}

if (program.local && !program.local.match(/$(\d+\.){3}\d+$/)) {
    const netss = os.networkInterfaces();
    let nets = netss[program.local];
    if (nets) {
        nets = nets.filter(net => net.address)
        console.log(`Replacing local ${chalk.green(program.local)} by ${chalk.yellow(nets[0].address)}`);
        program.local = nets[0].address;
    }
}

if (errCnt || !args.length) {
    help();
}

export async function doGet(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const timeout = 5000;
        const data: string[] = [];
        const options: RequestOptions = {
            timeout,
        };
        if (program.local) {
            options.localAddress = program.local;
        }
        const req = https.get(url, options, (res: http.IncomingMessage) => {
            res.setEncoding('utf8');
            res.on('data', (chunk: string) => data.push(chunk));
            res.on('end', (error: string) => resolve(data.join('')));
        });
        req.on('error', (error: string) => {
            if (req.aborted)
                return reject('Timeout');
            return reject(error);
        });
        req.on('timeout', () => req.abort());
        // req.on('socket', (socket) => socket.setTimeout(timeout, () => { socket.destroy(); }));
    });
}

let lastIp = "";
export async function detectPublicIpFrom(urls: string[]) {
    if (lastIp) return lastIp;
    loop: while (urls.length) {
        const index = Math.floor(Math.random() * urls.length);
        const url = urls[index];
        try {
            // peak an ip resolver
            // discard it
            urls.splice(index, index);
            // download it
            console.log(`Detecting IP using ${chalk.green(url)}`);
            const text = await doGet(url);
            const matcher = text.match(/([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/);
            if (!matcher) continue;
            for (let i = 1; i < 5; i++) {
                if (Number(matcher[i]) > 255) continue loop;
            }
            lastIp = matcher[0];
            return lastIp;
        } catch (e) {
            console.error(url, e);
        }
    }
    throw "faild to detect IP";
}

async function main() {
    let { urls, domains, tokenfile } = program;

    if (domains.length === 0) {
        console.error("must provide at least one dyn domain, use -d parameter");
        return;
    }

    if (urls.length === 0) {
        urls.push("https://api.ipify.org");
        urls.push("https://ifconfig.co/ip");
        urls.push("https://ipinfo.io/ip");
        urls.push("https://myexternalip.com/raw");
    }

    if (!tokenfile) {
        tokenfile = "token.json";
        console.error(`Token file path ${chalk.redBright('not')} provided using ${chalk.green(tokenfile)}`);
    }
    let engine = new Ovh({
        certCache: tokenfile,
        accessRules:
            "GET /domain/zone/*/status, GET /domain/zone/*/dynHost/*, PUT /domain/zone/*/dynHost/record/*, POST /domain/zone/*/dynHost/record, POST /domain/zone/*/refresh"
    });
    let api = ApiDomain(engine);

    const ip = await detectPublicIpFrom(program.urls);

    for (const dom of domains) {
        let split = dom.split(".");
        let [service, subDomain] = ['', ''];
        for (let i = split.length - 2; i > 0; i--) {
            service = split.slice(i).join(".");
            subDomain = split.slice(0, i).join(".");
            try {
                const status = await api.zone.$(service).status.$get();
                if (status.errors && status.errors.length) {
                    console.log(`ERROR onto domain ${service}: ${status.errors.join(", ")}, fix it first.`);
                }
                if (status.warnings && status.warnings.length) {
                    console.log(`WARNING onto domain ${service}: ${status.warnings.join(", ")}.`);
                }
                break;
            } catch (e404) {
                continue;
            }
        }
        let recordApi = api.zone.$(service).dynHost.record;
        const subid = await recordApi.$get({ subDomain });

        if (!subid.length) {
            console.error(`${chalk.green(subDomain)}.${chalk.yellow(service)} do not exists creating it now.`);
            await recordApi.$post({ ip, subDomain });
            console.log(`Sucess ${chalk.green(subDomain)}.${chalk.yellow(service)} have IP: ${chalk.yellow(ip)}`);
        } else {
            const old = await recordApi.$(subid[0]).$get();
            if (old.ip != ip) {
                console.log(`Updating ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.whiteBright('from')} ${chalk.yellow(old.ip)} ${chalk.whiteBright('to')} ${chalk.yellow(ip)}`);
                await recordApi.$(subid[0]).$put({ ip });
                console.log(`Updating ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.green('done')}.`);
            } else {
                console.log(`No change ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.whiteBright('Keep IP')} ${chalk.yellow(old.ip)}`);
            }
        }
    }
}

main().catch(console.error)
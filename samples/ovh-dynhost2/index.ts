import ApiDomain from "@ovh-api/domain";
import Ovh from "@ovh-api/api";
import http from 'http';
import https, { RequestOptions } from 'https';
import chalk from 'chalk';
import os from 'os';
import { Curl } from 'node-libcurl';

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
    -i, --interface <inet>    interface to use
    -t, --token <tokenfile>   save and reuse the certificat by storing them in a file
    --curl                    use curl
    --timeout [timeout]       timeout to get ip address
`);
    process.exit(1);
}

const program = {
    urls: [] as string[],
    domains: [] as string[],
    local: '',
    tokenfile: '',
    interface: '',
    timeout: 2000,
    curl: false,
}
let args = process.argv.splice(1);
while (args.length && !args[0].startsWith('-')) {
    args = args.splice(1);
}
let errCnt = 0;
for (let i = 0; i < args.length - 1; i++) {
    switch (args[i]) {
        case '--timeout':
            program.timeout = Number(args[++i]);
            break;
        case '--interface':
            program.interface = args[++i];
            break;
        case '--curl':
            program.curl = true;
            break;
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
        const timeout = program.timeout;
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

export async function doCurl(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const curl = new Curl();
        curl.setOpt(Curl.option.URL, url);
        if (program.interface)
            curl.setOpt(Curl.option.INTERFACE, program.interface);
        curl.on('end', function (statusCode: number, data: string, headers: any) {
            if (statusCode >= 200 && statusCode < 300)
                resolve(data);
            else
                reject(data);
            curl.close();
        });
        curl.on('error', curl.close.bind(curl));
        curl.perform();
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
            urls.splice(index, 1);
            // download it
            console.log(`Detecting IP using ${chalk.green(url)} CURL:${program.curl}`);
            let text = '';
            if (!program.curl) {
                text = await doGet(url);
            } else {
                text = await doCurl(url);
            }
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
        console.error("warning: you should provide at least one dyn domain, use -d parameter");
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
    console.log(`Your IP is ${chalk.yellow(ip)}`);

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
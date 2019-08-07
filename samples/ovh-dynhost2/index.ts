import ApiDomain from "@ovh-api/domain";
import Ovh from "@ovh-api/api";
import fetch from "node-fetch";
//import program from "commander";

//function collect(val: string, acc: string[]) {
//    acc.push(val);
//    return acc;
//}

//program
//    .version("1.0.0")
//    .option("-d, --domain [domain]", "domain to configure", collect, [])
//    .option("-t, --test [url]", "url used to find public IP", collect, [])
//    .option("--token <tokenfile>", "save and reuse the certificat by storing them in a file")
//     .parse(process.argv);

function help() {
    console.log(`
    Options:
    -d [domain]              add domain to configure
    -u [url]                 add url used to find public IP
    -t, --token <tokenfile>  save and reuse the certificat by storing them in a file
`);
    process.exit(1);
}

const program = {
    urls: [] as string[],
    domains: [] as string[],
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
        case '-t':
        case '--token':
            program.tokenfile = args[++i]
            break;
        default:
            console.error('unknown param:' + args[i])
            errCnt++;
    }
}
if (errCnt || !args.length) {
    help();
}

let lastIp = "";
export async function detectPublicIpFrom(urls: string[]) {
    if (lastIp) return lastIp;
    loop: while (urls.length) {
        try {
            const index = Math.floor(Math.random() * urls.length);
            const url = urls[index];
            urls.splice(index, index);
            const resp = await fetch(url);
            const text = await resp.text();
            const matcher = text.match(/([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/);
            if (!matcher) continue;
            for (let i = 1; i < 5; i++) {
                if (Number(matcher[i]) > 255) continue loop;
            }
            lastIp = matcher[0];
            return lastIp;
        } catch { }
    }
    throw "faild to detec IP";
}

async function main() {
    let { urls, domains, tokenfile } = program;

    if (domains.length === 0) {
        console.error("must provide at least one dyn domain, use -d parameter");
        return;
    }

    if (urls.length === 0) {
        urls.push("https://ipinfo.io/ip");
        urls.push("http://myexternalip.com/raw");
    }

    if (!tokenfile) {
        tokenfile = "token.json";
        console.error(`token path not provided using ${tokenfile}`);
    }
    let engine = new Ovh({
        certCache: tokenfile,
        accessRules:
            "GET /domain/zone/*/status, GET /domain/zone/*/dynHost/*, PUT /domain/zone/*/dynHost/record/*, POST /domain/zone/*/refresh"
    });
    let api = ApiDomain(engine);

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

        const ip = await detectPublicIpFrom(program.urls);
        console.log("updating", subDomain, "from srv", service, ip);
        if (!subid.length) {
            console.error(`${subDomain} do not exists in ${service} creating it.`);
            await recordApi.$post({ ip, subDomain });
        } else {
            const old = await recordApi.$(subid[0]).$get();
            if (old.ip != ip) {
                await recordApi.$(subid[0]).$put({ ip });
                console.log(`updating ${subDomain} of ${service} to ${ip}.`);
            }
        }
    }
}

main()
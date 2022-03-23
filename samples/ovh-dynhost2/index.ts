import ApiDomain, { Domain, domain } from "@ovh-api/domain";
import Ovh from "@ovh-api/api";
import http from 'http';
import https from 'https';
import pc from "picocolors"
import { networkInterfaces, EOL } from 'os';
import fs from 'fs';
import { Command, Option } from "commander";
import pMap from 'p-map';
import child_process from 'child_process';
// import * as internalIP from 'internal-ip';

const program = new Command();

interface MyOption {
    /**
     * timeout to detect an IP
     */
    timeout: number;
    local?: string;
    verbose?: boolean;
    curl?: boolean;

    standard?: boolean;
    dynhost?: boolean;

    url?: string[];
    url4?: string[];
    url6?: string[];
    domain: string[];
    credential?: string;
    token?: string;
    ipv4?: boolean;
    ipv6?: boolean;
    /**
     * interface to bing to detect public IP
     */
    interface?: string;
}

class DynHost {
    private lastIp = { '4': '', '6': '' };
    private apiDomain?: Domain;
    private engine?: Ovh;
    private options: MyOption;

    constructor() {
        this.options = program.opts();
    }

    async doGet(url: string, ipVersion: 4 | 6): Promise<string> {
        return new Promise((resolve, reject) => {
            const timeout = Number(this.options.timeout);
            const data: string[] = [];
            const options: https.RequestOptions = {
                timeout,
            };
            if (this.options.local) {
                options.localAddress = this.options.local;
            }
            if (this.options.verbose)
                console.log(`https.get("${url}", ${JSON.stringify(this.options)})`)
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
            req.on('timeout', () => req.destroy());
            // req.on('socket', (socket) => socket.setTimeout(timeout, () => { socket.destroy(); }));
        });
    }

    async doCurl(url: string, ipVersion: 4 | 6): Promise<string> {
        let cmd = 'curl -s';
        if (this.options.interface) {
            cmd += ` --interface ${this.options.interface}`
        }
        if (ipVersion === 4)
            cmd += ' --ipv4';
        else
            cmd += ' --ipv6';

        cmd += ` "${url}"`;

        if (this.options.verbose) {
            console.log(cmd);
        }
        return child_process.execSync(cmd, { encoding: 'utf8' });
    }

    /**
     * extract an IP from a string;
     * @param text text to check
     * @returns an IP V4 or V6 or and empty string
     */
    extractIP(text: string): string {
        const matcherV6 = text.match(/([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}/);
        if (matcherV6) {
            return matcherV6[0];
        }
        console.log('no IP V6 in')
        console.log(text);
        const matcherV4 = text.match(/([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/);
        if (matcherV4) {
            for (let i = 1; i < 5; i++) {
                if (Number(matcherV4[i]) > 255) {
                    // invalid IP
                    return '';
                }
            }
            return matcherV4[0];
        }
        return '';
    }


    async detectPublicIpFrom(urls: string[], ipVersion: 4 | 6) {
        if (this.lastIp[ipVersion])
            return this.lastIp[ipVersion];
        while (urls.length) {
            const index = Math.floor(Math.random() * urls.length);
            const url = urls[index];
            try {
                // peak an ip resolver
                // discard it
                urls.splice(index, 1);
                // download it
                console.log(`Detecting IP using ${pc.green(url)} ${this.options.curl ? 'With CURL' : ''}`);
                let text = '';
                if (!this.options.curl) {
                    text = await this.doGet(url, ipVersion);
                } else {
                    text = await this.doCurl(url, ipVersion);
                }
                const ip = this.extractIP(text);
                if (!ip)
                    continue;
                if (ip.includes(':')) {
                    this.lastIp[6] = ip;
                } else {
                    this.lastIp[4] = ip;
                }
                if (this.lastIp[ipVersion])
                    return this.lastIp[ipVersion];
            } catch (e) {
                console.error(url, e);
            }
        }
        console.error(`failed to detect IPv${ipVersion}`);
        process.exit(-1)
    }

    async getApiDomain(): Promise<Domain> {
        if (this.apiDomain)
            return this.apiDomain;
        let token = this.options.token;

        if (!token) {
            token = "token.json";
            console.error(`Token file path ${pc.red(pc.bold('not'))} provided using ${pc.green(token)}`);
        }

        if (this.options.credential) {
            const [appKey, appSecret, consumerKey] = (this.options.credential as string).split(/:/);
            const tokenData = JSON.stringify({ appKey, appSecret, consumerKey }, null, 2) + EOL;
            await fs.promises.writeFile(token, tokenData, { encoding: 'utf-8' });
        }

        this.engine = new Ovh({
            certCache: token,
            accessRules: [
                'GET /domain/zone',
                'GET /domain/zone/*/status',
                'GET /domain/zone/*/dynHost/*',
                'DELETE /domain/zone/*/dynHost/*',
                'PUT /domain/zone/*/dynHost/record/*',
                'POST /domain/zone/*/dynHost/record',
                'POST /domain/zone/*/refresh',
                'GET /domain/zone/*/record',
                'DELETE /domain/zone/*/record/*',
                'POST /domain/zone/*/record',
                'PUT /domain/zone/*/record/*',
                'GET /domain/zone/*/record/*',
            ]
        });
        this.apiDomain = ApiDomain(this.engine);
        return this.apiDomain;
    }

    /**
     * split full domain name in subdomain + domain
     */
    async findDomain(dom: string): Promise<{ service: string, subDomain: string }> {
        const api = await this.getApiDomain();
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
        return { service, subDomain };
    }

    async dump() {
        const api = await this.getApiDomain();
        await api.zone.$get();
        if (this.engine) {
            const appKey = this.engine.appKey;
            const appSecret = this.engine.appSecret;
            const consumerKey = this.engine.consumerKey;
            console.log(`Reuse this credential with: --credential ${appKey}:${appSecret}:${consumerKey}`);
        }
    }

    async removeEntrys(service: string, entrys: domain.zone.Record[]): Promise<void> {
        for (const rec of entrys) {
            console.log(`Removing old ${pc.green(rec.subDomain)}.${pc.yellow(service)} Type ${pc.yellow(rec.fieldType)} TTL: ${pc.yellow(rec.ttl)}`);
            const api = await this.getApiDomain();
            await api.zone.$(service).record.$(rec.id).$delete();
        }
    }

    async updateIP(dom: string, ip: string): Promise<void> {
        const api = await this.getApiDomain();
        const { service, subDomain } = await this.findDomain(dom);
        const recordApiDyn = api.zone.$(service).dynHost.record;
        const subidDyn = await recordApiDyn.$get({ subDomain });
        const fieldType = ip.includes(':') ? 'AAAA' : 'A';

        /**
         * preload STD subdomain entry
         */
        // let stdRecords: domain.zone.Record[] = [];
        const record = api.zone.$(service).record;
        const stdRecordsCNAME: domain.zone.Record[] = await pMap(await record.$get({ subDomain, fieldType: "CNAME" }), (id) => record.$(id).$get(), { concurrency: 3 });

        await this.removeEntrys(service, stdRecordsCNAME);

        /**
         * implementation for standard DNS entry
         */
        if (this.options.standard || !this.options.dynhost) {
            // droping old created dynhost
            for (const subId of subidDyn) {
                console.log(`Removing dynHost ${pc.green(subDomain)}.${pc.yellow(service)} id: ${pc.yellow(subId)}`);
                await recordApiDyn.$(subId).$delete();
            }


            const entrys = await pMap(await record.$get({ subDomain, fieldType }), (id) => record.$(id).$get(), { concurrency: 3 });
            const [entry, ...other] = entrys;
            /**
             * keep only a single A entry
             **/
            await this.removeEntrys(service, other);

            if (!entry) {
                /**
                 * A entry is missing creating one
                 */
                console.error(`${pc.bold(pc.white(fieldType))} ${pc.green(subDomain)}.${pc.yellow(service)} do not exists, creating it ${pc.bold(pc.red('now'))}!`);
                await api.zone.$(service).record.$post({ fieldType, subDomain, target: ip, ttl: 60 });
                console.log(`${pc.bold(pc.green('Success'))} ${pc.green(subDomain)}.${pc.yellow(service)} ${pc.bold(pc.white('have IP'))}: ${pc.yellow(ip)}`);
                this.refreshSet.add(service);
            } else {
                /**
                 * check and update current A entry if needed
                 */
                if (entry.target != ip || entry.ttl != 60) {
                    console.log(`Updating ${pc.bold(pc.white(fieldType))}  ${pc.green(subDomain)}.${pc.yellow(service)} ${pc.bold(pc.white('from'))} ${pc.yellow(entry.target)} TTL:${entry.ttl} ${pc.bold(pc.white('to'))} ${pc.yellow(ip)} TTL:60`);
                    await api.zone.$(service).record.$(entrys[0].id).$put({ target: ip, ttl: 60 });
                    console.log(`Updating ${pc.green(subDomain)}.${pc.yellow(service)} ${pc.green('done')}.`);
                    this.refreshSet.add(service);
                } else {
                    console.log(`No change ${pc.green(subDomain)}.${pc.yellow(service)} ${pc.bold(pc.white('Keep IP'))} ${pc.yellow(entry.target)}`);
                }
            }
        } else {
            /**
             * implementation for dyn-host entry
             */
            const stdRecordsA: domain.zone.Record[] = await pMap(await record.$get({ subDomain, fieldType: "A" }), (id) => record.$(id).$get(), { concurrency: 3 });
            const stdRecordsAAAA: domain.zone.Record[] = await pMap(await record.$get({ subDomain, fieldType: "AAAA" }), (id) => record.$(id).$get(), { concurrency: 3 });

            await this.removeEntrys(service, stdRecordsA);
            await this.removeEntrys(service, stdRecordsAAAA);

            if (!subidDyn.length) {
                /**
                 * create a new dynHost entry
                 */
                console.error(`${pc.green(subDomain)}.${pc.yellow(service)} do not exists creating it now.`);
                await recordApiDyn.$post({ ip, subDomain });
                console.log(`${pc.bold(pc.green('Success'))} ${pc.green(subDomain)}.${pc.yellow(service)} ${pc.bold(pc.white('have IP'))}: ${pc.yellow(ip)}`);
                this.refreshSet.add(service);
            } else {
                /**
                 * check and update current DynHost entry if needed
                 */
                const old = await recordApiDyn.$(subidDyn[0]).$get();
                if (old.ip != ip) {
                    console.log(`Updating ${pc.green(subDomain)}.${pc.yellow(service)} ${pc.bold(pc.white('from'))} ${pc.yellow(old.ip)} ${pc.bold(pc.white('to'))} ${pc.yellow(ip)}`);
                    await recordApiDyn.$(subidDyn[0]).$put({ ip });
                    console.log(`Updating ${pc.green(subDomain)}.${pc.yellow(service)} ${pc.green('done')}.`);
                    this.refreshSet.add(service);
                } else {
                    console.log(`No change ${pc.green(subDomain)}.${pc.yellow(service)} ${pc.bold(pc.white('Keep IP'))} ${pc.yellow(old.ip)}`);
                }
            }
        }
    }

    private refreshSet = new Set<string>();

    async main() {
        let { domain, local } = this.options;

        if (local) {
            if (!local.match(/$(\d+\.){3}\d+$/)) {
                console.error(`invalid local value: '${local}' should be an IPv4`);
                process.exit(1);
            }
            const netss = networkInterfaces();
            let nets = netss[local];
            if (nets) {
                nets = nets.filter(net => net.address)
                console.log(`Replacing local ${pc.green(local)} by ${pc.yellow(nets[0].address)}`);
                local = nets[0].address;
            }
        }

        if (!domain || domain.length === 0) {
            console.error(`${pc.bold(pc.red('warning'))}: you should provide at least one dyn domain, use -d parameter`);
        }


        if (!this.options.ipv4 && !this.options.ipv6) {
            this.options.ipv4 = true;
        }

        this.refreshSet = new Set<string>();
        if (this.options.ipv4) {
            let url: string[] = [];
            if (this.options.url && this.options.url.length)
                url = [...url, ...this.options.url];
            if (this.options.url4 && this.options.url4.length)
                url = [...url, ...this.options.url4];
            if (url.length === 0) {
                url.push("https://api.ipify.org"); // V4
                // url.push("https://ifconfig.co/ip"); // V4 + V6
                url.push("https://ipinfo.io/ip"); // V4
                url.push("https://myexternalip.com/raw"); // V4
            }
            const ip = await this.detectPublicIpFrom(url, 4);
            console.log(`Your IP is ${pc.yellow(ip)}`);
            for (const dom of domain) {
                await this.updateIP(dom, ip);
            }
            /**
             * refresh altered zones
             */
        }

        if (this.options.ipv6) {
            let url: string[] = [];
            if (this.options.url && this.options.url.length)
                url = [...url, ...this.options.url];
            if (this.options.url6 && this.options.url6.length)
                url = [...url, ...this.options.url6];
            // url.push("https://ifconfig.co/ip"); // V4 + V6
            if (url.length === 0) {
                url.push("https://ds.ams2.test-ipv6.com/ip/");
                url.push("https://whatismyv6.com/"); // OK
                url.push("https://www.whatismyip.com/my-ip-information/");
                url.push("https://www.showmyip.com/");
            }
            const ip = await this.detectPublicIpFrom(url, 6);
            console.log(`Your IP is ${pc.yellow(ip)}`);
            for (const dom of domain) {
                await this.updateIP(dom, ip);
            }
            /**
             * refresh altered zones
             */
        }


        const api = await this.getApiDomain();
        for (const service of this.refreshSet) {
            await api.zone.$(service).refresh.$post();
            console.log(`Refresh ${pc.yellow(service)} Done`);
        }

    }
}
const packageData = fs.readFileSync('./package.json', {encoding: 'utf8'})
const { version } = JSON.parse(packageData);

// import { version } from './package.json';

const append = (value: string, previous: string[]) => { previous.push(value); return previous };
program.version(version)
    .description('create and update a dyn-host or standard DNS entry.');

program.option('-v, --verbose', 'verbose process');
program.option('-s, --standard', 'use standard DNS entry instead of dynhost');
program.option('--dynhost', 'use dynhost OVH feature, (do not Support ipV6)');

program.option('-d, --domain <domain>', 'add domain to configure', append, []);
program.option('-u, --url <url>', 'add url used to find public IP', append, []);
program.option('--url4 <url>', 'add url used to find public IPv4', append, []);
program.option('--url6 <url>', 'add url used to find public IPv6', append, []);

program.option('-l, --local <localAdress>', 'Local address to bind if you have mutiple gateway');
program.option('-i, --interface <inet>', 'interface to use');
program.option('-t, --token <tokenfile>', 'save and reuse the certificat by storing them in a file');
program.option('-c, --credential <credential>', 'provide a credential as {appKey}:{appSecret}:{consumerKey} to be store in token file');
program.option('--curl', 'use curl');
program.option('-4, --ipv4', 'update ipv4');
program.option('-6, --ipv6', 'update ipv6');

//program.option('--timeout <timeout>', 'timeout to get ip address', /\d+/, '2000');
const timeoutOpt = new Option('--timeout <timeout>', 'timeout to get ip address').default(2000);
timeoutOpt.argParser((value) => {
    const v = Number(value);
    if (v > 20 && v < 120000)
        return v;
    console.error('timeout is a time in millisec, it must be a value beetwen 20 and 120000. (20ms up to 2 minutes)');
    process.exit(-1);
})

program.addOption(timeoutOpt);

program.action(() => {
    new DynHost().main().catch(console.error);
})

program.command('dump')
    .description('dump compact credential for quick deploy')
    .action(() => {
        new DynHost().dump();
    });

// const ipV6 = internalIP.v6.sync();
program.parse();


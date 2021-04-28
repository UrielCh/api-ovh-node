import ApiDomain, { Domain, domain } from "@ovh-api/domain";
import Ovh from "@ovh-api/api";
import http from 'http';
import https, { RequestOptions } from 'https';
import chalk from 'chalk';
import os, { EOL } from 'os';
import { Curl } from 'node-libcurl';
import fs from 'fs';
import { Command, OptionValues } from "commander";

const program = new Command();

class DynHost {
    private lastIp = "";
    private apiDomain?: Domain;
    private engine?: Ovh;
    private options: OptionValues;

    constructor() {
        this.options = program.opts();
     }

    async doGet(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const timeout = Number(this.options.timeout);
            const data: string[] = [];
            const options: RequestOptions = {
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
            req.on('timeout', () => req.abort());
            // req.on('socket', (socket) => socket.setTimeout(timeout, () => { socket.destroy(); }));
        });
    }

    async doCurl(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const curl = new Curl();
            let cmd = `curl "${url}"`;
            curl.setOpt(Curl.option.URL, url);
            if (this.options.interface) {
                curl.setOpt(Curl.option.INTERFACE, this.options.interface);
                cmd += ` --interface ${this.options.interface}`
            }
            if (this.options.verbose) {
                console.log(cmd);
            }
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

    async detectPublicIpFrom(urls: string[]) {
        if (this.lastIp) return this.lastIp;
        loop: while (urls.length) {
            const index = Math.floor(Math.random() * urls.length);
            const url = urls[index];
            try {
                // peak an ip resolver
                // discard it
                urls.splice(index, 1);
                // download it
                console.log(`Detecting IP using ${chalk.green(url)} ${this.options.curl ? 'With CURL' : ''}`);
                let text = '';
                if (!this.options.curl) {
                    text = await this.doGet(url);
                } else {
                    text = await this.doCurl(url);
                }
                const matcher = text.match(/([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/);
                if (!matcher) continue;
                for (let i = 1; i < 5; i++) {
                    if (Number(matcher[i]) > 255) continue loop;
                }
                this.lastIp = matcher[0];
                return this.lastIp;
            } catch (e) {
                console.error(url, e);
            }
        }
        throw "faild to detect IP";
    }

    async getApiDomain(): Promise<Domain> {
        if (this.apiDomain)
            return this.apiDomain;
        let token = this.options.token;

        if (!token) {
            token = "token.json";
            console.error(`Token file path ${chalk.redBright('not')} provided using ${chalk.green(token)}`);
        }

        if (this.options.credential) {
            const [appKey, appSecret, consumerKey] = (this.options.credential as string).split(/:/);
            const tokenData = JSON.stringify({ appKey, appSecret, consumerKey }, null, 2) + EOL;
            await fs.promises.writeFile(token, tokenData, {encoding: 'utf-8'});
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

    async main() {
        let { url, domain, local } = this.options;

        if (local && !local.match(/$(\d+\.){3}\d+$/)) {
            const netss = os.networkInterfaces();
            let nets = netss[local];
            if (nets) {
                nets = nets.filter(net => net.address)
                console.log(`Replacing local ${chalk.green(local)} by ${chalk.yellow(nets[0].address)}`);
                local = nets[0].address;
            }
        }

        if (domain.length === 0) {
            console.error("warning: you should provide at least one dyn domain, use -d parameter");
        }

        if (url.length === 0) {
            url.push("https://api.ipify.org");
            url.push("https://ifconfig.co/ip");
            url.push("https://ipinfo.io/ip");
            url.push("https://myexternalip.com/raw");
        }
        const api = await this.getApiDomain();
        const ip = await this.detectPublicIpFrom(url);
        console.log(`Your IP is ${chalk.yellow(ip)}`);

        for (const dom of domain) {
            const { service, subDomain } = await this.findDomain(dom);

            const recordApiDyn = api.zone.$(service).dynHost.record;

            const subidDyn = await recordApiDyn.$get({ subDomain });
            const subidStds = await api.zone.$(service).record.$get({ subDomain });

            let records: domain.zone.Record[] = [];
            for (const id of subidStds) {
                records.push(await api.zone.$(service).record.$(id).$get());
            }
            records = records.filter(rec => (rec.fieldType === 'A' || rec.fieldType === 'AAAA' || rec.fieldType === 'CNAME'));

            if (this.options.standard) {
                for (const subId of subidDyn) {
                    console.log(`Removing dynHost ${chalk.green(subDomain)}.${chalk.yellow(service)} id: ${chalk.yellow(subId)}`);
                    await recordApiDyn.$(subId).$delete();
                }
                const cnames = records.filter(rec => rec.fieldType === 'CNAME' || rec.fieldType === 'AAAA');
                for (const rec of cnames) {
                    console.log(`Removing old ${chalk.green(subDomain)}.${chalk.yellow(service)} Type ${chalk.yellow(rec.fieldType)} TTL: ${chalk.yellow(rec.ttl)}`);
                    await api.zone.$(service).record.$(rec.id).$delete();
                }

                records = records.filter(rec => rec.fieldType === 'A');
                for (let i = 1; i < records.length; i++) {
                    const rec = records[i];
                    console.log(`Removing old ${chalk.green(subDomain)}.${chalk.yellow(service)} Type ${chalk.yellow(rec.fieldType)} TTL: ${chalk.yellow(rec.ttl)}`);
                    await api.zone.$(service).record.$(rec.id).$delete();
                }

                if (!records.length) {
                    console.error(`${chalk.green(subDomain)}.${chalk.yellow(service)} do not exists creating it now.`);
                    await api.zone.$(service).record.$post({ fieldType: 'A', subDomain, target: ip, ttl: 60 });
                    console.log(`Sucess ${chalk.green(subDomain)}.${chalk.yellow(service)} have IP: ${chalk.yellow(ip)}`);
                    await api.zone.$(service).refresh.$post();
                    console.log(`Refresh ${chalk.yellow(service)} Done`);
                } else {
                    const old = await api.zone.$(service).record.$(records[0].id).$get();
                    if (!old) {
                        console.error(`OVH internal Error can not retrive ${service} zone: ${records[0].id}`);
                        return;
                    }
                    if (old.target != ip || old.ttl != 60) {
                        console.log(`Updating ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.whiteBright('from')} ${chalk.yellow(old.target)} TTL:${old.ttl} ${chalk.whiteBright('to')} ${chalk.yellow(ip)} TTL:60`);
                        await api.zone.$(service).record.$(records[0].id).$put({ target: ip, ttl: 60 });
                        console.log(`Updating ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.green('done')}.`);
                        await api.zone.$(service).refresh.$post();
                        console.log(`Refresh ${chalk.yellow(service)} Done`);
                    } else {
                        console.log(`No change ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.whiteBright('Keep IP')} ${chalk.yellow(old.target)}`);
                    }
                }

            } else {
                for (const rec of records) {
                    console.log(`Removing old ${chalk.green(subDomain)}.${chalk.yellow(service)} Type ${chalk.yellow(rec.fieldType)} TTL: ${chalk.yellow(rec.ttl)}`);
                    await api.zone.$(service).record.$(rec.id).$delete();
                }

                if (!subidDyn.length) {
                    console.error(`${chalk.green(subDomain)}.${chalk.yellow(service)} do not exists creating it now.`);
                    await recordApiDyn.$post({ ip, subDomain });
                    console.log(`Sucess ${chalk.green(subDomain)}.${chalk.yellow(service)} have IP: ${chalk.yellow(ip)}`);
                    await api.zone.$(service).refresh.$post();
                    console.log(`Refresh ${chalk.yellow(service)} Done`);
                } else {
                    const old = await recordApiDyn.$(subidDyn[0]).$get();
                    if (old.ip != ip) {
                        console.log(`Updating ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.whiteBright('from')} ${chalk.yellow(old.ip)} ${chalk.whiteBright('to')} ${chalk.yellow(ip)}`);
                        await recordApiDyn.$(subidDyn[0]).$put({ ip });
                        console.log(`Updating ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.green('done')}.`);
                        await api.zone.$(service).refresh.$post();
                        console.log(`Refresh ${chalk.yellow(service)} Done`);
                    } else {
                        console.log(`No change ${chalk.green(subDomain)}.${chalk.yellow(service)} ${chalk.whiteBright('Keep IP')} ${chalk.yellow(old.ip)}`);
                    }
                }
            }
        }
    }
}
const { version } = require('./package.json');

const append = (value: string, previous: string[]) => { previous.push(value); return previous };
program.version(version)
    .description('create and update dyndnh host entry.');

program.option('-v, --verbose', 'verbose process');
program.option('-s, --standard', 'use standard DNS entry instead of dynhost', append, []);
program.option('-d, --domain <domain>', 'add domain to configure', append, []);
program.option('-u, --url <url>', 'add url used to find public IP', append, []);
program.option('-l, --local <localAdress>', 'Local address to bind if you have mutiple gateway');
program.option('-i, --interface <inet>', 'interface to use');
program.option('-t, --token <tokenfile>', 'save and reuse the certificat by storing them in a file');
program.option('-c, --credential <credential>', 'provide a credential as {appKey}:{appSecret}:{consumerKey} to be store in token file');
program.option('--curl', 'use curl');
program.option('--timeout <timeout>', 'timeout to get ip address', /\d+/, '2000');

program.action(() => new DynHost().main().catch(console.error))

program.command('dump')
    .description('dump compact credential for quick deploy')
    .action(() => {
        new DynHost().dump();
    });

program.parse();


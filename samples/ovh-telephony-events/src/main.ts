import { program } from 'commander'
import { IEvToken, IOvhEventListener } from './model';
import { createHandyClient, IHandyRedis } from 'handy-redis';
// import { createNodeRedisClient, WrappedNodeRedisClient } from 'handy-redis';
import { OvhEventListenerV1 } from './OvhEventListenerV1';
import { OvhEventListenerV2 } from './OvhEventListenerV2';
import { OvhEventTokenImporter } from './OvhEventTokenImporter';
import fetch from "node-fetch";
import debounce from 'debounce';
import fse from 'fs-extra';
import kleur from 'kleur';
import OvhApi from "@ovh-api/api";
import { myDebounce } from './myDebounce';

// sample exec line:
// ts-node main.ts --redis-host 127.0.0.1 --cache tokens.json --channel event-voip

interface ProgrameOptions {
    reset?: boolean;
    redisHost?: string;
    redisPort?: string;
    redisPassword?: string;
    channel?: string;
    cache?: string;
    certCache?: string;
    debounce?: string;
    v1?: boolean;
}


const { version } = require('../package.json');
program
    .version(version)
    .option('--reset', 'Reset all tokens')
    .option('--redis-host <host>', 'Store Even in Redis')
    .option('--redis-port <port>', 'Use non standatd port')
    .option('--redis-password <password>', 'Provide a redis password')
    .option('--channel <channel>', 'Channel key used in redis to push events')
    .option('--cache <cache.json>', 'Store and cache event tokens')
    .option('--cert-cache <cert-cache.json>', 'Store OVH cert used to generate event tokens')
    .option('--debounce <3000>', 'Debounce log in ms', /[0-9]+/, "3000")
    .option('--v1', 'Use api V1 (by default use V2)')
    .parse(process.argv);

function checkUpdate() {
    const { name } = require('../package.json');
    const versionQuery = fetch(`http://registry.npmjs.com/-/v1/search?text=${name}&size=1`);
    versionQuery.then(response => {
        response.json().then((data: any) => {
            if (data && data.objects && data.objects.length) {
                const npmVersion = data.objects[0].package.version as string;
                const vnpm = npmVersion.split('.')
                const vlocal = version.split('.');
                if (vnpm.length != vlocal.length) {
                    console.error(`failed to test version. ${npmVersion} Vs ${version}`);
                    console.error(`npm install -g ${name}@${npmVersion}`);
                    console.error('');
                    return;
                }
                for (let i = 0; i < vnpm.length; i++ ) {
                    const local = Number.parseInt(vlocal[i]);
                    const npm = Number.parseInt(vnpm[i]);
                    if (local == npm)
                        continue;
                    if (local > npm) {
                        console.log(`Developpement version ${kleur.bold().magenta(version)} not released yet`);
                        return;
                    }
                    console.log(`this version (${kleur.bold().red(version)}) is outdated consider upgrading latest (${kleur.bold().green(npmVersion)}).`);
                    const cmd = `npm install -g ${name}`
                    console.log(` ${kleur.yellow().bold(cmd)}`);
                }
            }
        }, () => { })
    }, () => { });
}

async function main() {
    checkUpdate();
    const options = program.opts<ProgrameOptions>();
    const engine = new OvhApi({
        accessRules: 'GET /me, GET /telephony, GET /telephony/*/eventToken, POST /telephony/*/eventToken, DELETE /telephony/*/eventToken',
        certCache: options.certCache,
    });

    const importer = new OvhEventTokenImporter(engine);
    if (options.reset) {
        if (options.cache) {
            console.log(`Try to deleting old token file ${options.cache}`);
            try {
                await fse.remove(options.cache)
            } catch (e) {
            }
            await importer.reset();
        }
        return "reset Done";
    }
    //let redis: WrappedNodeRedisClient | null = null;
    let redis: IHandyRedis | null = null;
    if (options.redisHost) {
        // redis = createNodeRedisClient({ host: options.redisHost, port: Number(options.redisPort) | 6379, password: options.redisPassword });
        redis = createHandyClient({ host: options.redisHost, port: Number(options.redisPort) | 6379, password: options.redisPassword });
    }
    const cachefile: string = options.cache || 'cache.json';
    const tokens: IEvToken[] = await importer.cacheFile(cachefile).load();

    let listener: IOvhEventListener;
    if (options.v1)
        listener = new OvhEventListenerV1(tokens);
    else
        listener = new OvhEventListenerV2(tokens);

    if (!options.channel) {
        options.channel = 'event-voip';
        if (redis)
            console.log(`--channel not provided, using default '${options.channel}'`);
    }
    if (redis)
        listener.redis(redis, options.channel)

    const logError = debounce((msg:any) => {
        console.error(msg)
    }, 2000, true);

    listener.on("error", (err) => {
        logError(err);
    })

    let nbEvent = 0;
    let actifBillings = new Set<String>();
    /**
     * simple activity viewer on screen
     * this log is debounce bay debounce ms to avoid flooding your log.
     */
    const logSentEvent = () => {
        const now = new Date();
        console.log(`${now.toISOString()} Sent ${nbEvent} event to ch: ${options.channel} grps: ${[...actifBillings].join(', ')} (nic: ${importer.nic})`);
        nbEvent = 0;
        actifBillings.clear();
        // fromtime = 0;
    };
    const logEvents = myDebounce(logSentEvent, Number(options.debounce))
    const logIdle1 = debounce(() => { console.error(`${new Date().toISOString()} WARNING no Activity in ${options.channel} (${importer.nic}) for more than 2 min`) }, 120000)
    const logIdle2 = debounce(() => { console.error(`${new Date().toISOString()} ERROR   no Activity in ${options.channel} (${importer.nic}) for more than 10 min, you may need to reset your tokens with OvhEventTokenImporter --reset`) }, 600000)
    logIdle1();
    logIdle2();
    listener.on('message', (ev) => {
        logIdle1();
        logIdle2();
        actifBillings.add(ev.token);
        nbEvent++;
        // if (!fromtime)
        //    fromtime = new Date().getTime();
        if (!redis) {
            console.log(ev);
        }
        logEvents();
    })
    await listener.listen();
    return 'ready';
}
main().then(console.log)

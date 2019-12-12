import program from 'commander'
import { IEvToken, IOvhEventListener } from './model';
import { createHandyClient, IHandyRedis } from 'handy-redis';
import { OvhEventListenerV1 } from './OvhEventListenerV1';
import { OvhEventListenerV2 } from './OvhEventListenerV2';
import { OvhEventTokenImporter } from './OvhEventTokenImporter';
import fetch from "node-fetch";
import debounce from 'debounce';
import fse from 'fs-extra';
import kleur from 'kleur';

const { name, version } = require('../package.json');

// sample exec line:
// ts-node main.ts --redis-host 127.0.0.1 --cache tokens.json --channel event-voip
program
    .version(version)
    .option('--reset', 'reset all tokens')
    .option('--redis-host <host>', 'store Even in Redis')
    .option('--redis-port <port>', 'use non standatd port')
    .option('--redis-password <password>', 'provide a redis password')
    .option('--channel <channel>', 'channel key used in redis to push events')
    .option('--cache <cacheFile.json>', 'store and cache tokens')
    .option('--debounce <3000>', 'debounce log in ms', /[0-9]+/, "3000")
    .option('--v1', 'use Api V1 (by default use V2)')
    .parse(process.argv);

export function myDebounce(
    delay: number,
    callback: () => any,
): () => any {
    let next: NodeJS.Timeout | null = null;
    return () => {
        if (next)
            return;
        next = setTimeout(() => {
            callback();
            next = null;
        }, delay)
    }
}

async function main() {
    const versionQuery = fetch(`http://registry.npmjs.com/-/v1/search?text=${name}&size=1`);
    versionQuery.then(response => {
        response.json().then((data) => {
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
                }
            }
        }, () => { })
    }, () => { });
    if (program['reset']) {
        if (program.cache) {
            console.log(`Try to deleting old token file ${program.cache}`);
            try {
                await fse.remove(program.cache)
            } catch (e) {
            }
            await new OvhEventTokenImporter().reset();
        }
        return "reset Done";
    }
    let redis: IHandyRedis | null = null;
    if (program['redisHost']) {
        redis = createHandyClient({ host: program['redisHost'], port: Number(program['redisPort']) | 6379, password: program['redisPassword'] });
    }
    const cachefile: string = program.cache;
    const tokens: IEvToken[] = await new OvhEventTokenImporter().cacheFile(cachefile).load();

    let listener: IOvhEventListener;
    if (program.v1)
        listener = new OvhEventListenerV1(tokens);
    else
        listener = new OvhEventListenerV2(tokens);

    if (!program.channel) {
        program.channel = 'event-voip';
        console.log(`--channel not provided, using default '${program.channel}'`);
    }
    if (redis)
        listener.redis(redis, program.channel)

    let nbEvent = 0;

    const log = () => {
        const now = new Date();
        console.log(`${now.toISOString()} Send ${nbEvent} event to ${program.channel}`);
        nbEvent = 0;
        // fromtime = 0;
    };
    const logEvents = myDebounce(program.debounce, log)
    const logIdle1 = debounce(() => { console.error('WARNING no Activity for more than 2 min') }, 120000)
    const logIdle2 = debounce(() => { console.error('ERROR   no Activity for more than 10 min, you may need to reset your tokens with OvhEventTokenImporter --reset') }, 600000)
    logIdle1();
    logIdle2();
    listener.on("message", (ev) => {
        logIdle1();
        logIdle2();
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

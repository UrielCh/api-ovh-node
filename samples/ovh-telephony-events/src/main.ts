import program from 'commander'
import { IEvToken, IOvhEventListener } from './model';
import { createHandyClient, IHandyRedis } from 'handy-redis';
import { OvhEventListenerV1 } from './OvhEventListenerV1';
import { OvhEventListenerV2 } from './OvhEventListenerV2';
import { OvhEventTokenImporter } from './OvhEventTokenImporter';

// sample exec line:
// ts-node main.ts --redis-host 127.0.0.1 --cache tokens.json --channel event-voip
program
    .version('1.0.0')
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

    let channel = program.channel || 'event-voip';

    if (redis)
        listener.redis(redis, channel)

    // let fromtime = 0;
    let nbEvent = 0;

    const log = () => {
        const now = new Date();
        console.log(`${now.toISOString()} Send ${nbEvent} event to ${channel}`);
        nbEvent = 0;
        // fromtime = 0;
    };
    const logEvents = myDebounce(program.debounce, log)
    listener.on("message", (ev) => {
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

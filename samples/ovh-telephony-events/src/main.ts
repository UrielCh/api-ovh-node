import program from 'commander'
import { IEvToken, IOvhEventListener } from './model';
import { createHandyClient, IHandyRedis } from 'handy-redis';
import { OvhEventListenerV1 } from './OvhEventListenerV1';
import { OvhEventListenerV2 } from './OvhEventListenerV2';
import { OvhEventTokenImporter } from './OvhEventTokenImporter';
// import { debounce } from 'debounce';
import { throttle, debounce } from 'throttle-debounce';

// sample exec line:
// ts-node main.ts --redis-host 127.0.0.1 --cache tokens.json --channel event-voip
program
    .version('1.0.0')
    .option('--redis-host <host>', 'store Even in Redis')
    .option('--redis-port <port>', 'use non standatd port')
    .option('--redis-password <password>', 'provide a redis password')
    .option('--channel <channel>', 'channel key used in redis to push events')
    .option('--cache <cacheFile.json>', 'store and cache tokens')
    .option('--v1', 'use Api V1 (by default use V2)')
    .parse(process.argv);

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

    let fromtime = 0;
    let nbEvent = 0;

    const log = () => {
        const now = new Date();
        const duration = (now.getTime() - fromtime) / 1000;
        console.log(`${now.toISOString()} Send ${nbEvent} event to ${channel} in ${duration.toFixed(1)} s`);
        nbEvent = 0;
    };
    //const logEvents = debounce(log, 500, true);
    //const logEvents = throttle(3000, log, true)
    const logEvents = debounce(5000, false, log)
    listener.on("message", (ev) => {
        if (!redis) {
            console.log(ev);
        } else {
            if (!nbEvent)
                fromtime = new Date().getTime();
            nbEvent++;    
            logEvents();
        }
    })
    await listener.listen();
}
main().then(console.log)

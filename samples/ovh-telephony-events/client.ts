import program from 'commander'
import { gToken, gTokenGroup, EventSession, VoipEventV2 } from './model';
import { createHandyClient, IHandyRedis } from 'handy-redis';
import { fdatasync } from 'fs';

program
    .version('1.0.0')
    .option('--redis-host <host>', 'store Even in Redis')
    .option('--redis-port <port>', 'use non standatd port')
    .option('--channel <channel>', 'channel key used in redis to push events')
    .parse(process.argv);

async function main() {
    let redisSub: IHandyRedis;
    let redis: IHandyRedis;

    const channel = program.channel || 'event-voip';
    if (program['redisHost']) {
        redisSub = createHandyClient({ host: program['redisHost'], port: Number(program['redisPort']) | 6379 });
        redis = createHandyClient({ host: program['redisHost'], port: Number(program['redisPort']) | 6379 });
    } else {
        redisSub = createHandyClient();
        redis = createHandyClient();
    }

    await redisSub.subscribe(channel);
    redisSub.redis.on('message', (channel, message) => {
        try {
            const event: VoipEventV2 = JSON.parse(message);
            delete event['date']; // == timestamp
            console.log(event.data);
            redis.rpush(`ev-${event.event}`, message);
        } catch { }
    })
}
main().then(console.log)

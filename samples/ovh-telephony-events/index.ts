import Ovh from '@ovh-api/api';
import Api from '@ovh-api/telephony';
import bluebird from 'bluebird';
import fetch from 'node-fetch'
import program from 'commander'
import { gToken, gTokenGroup, EventSession, VoipEventV2, VoipEventV1Root, VoipEventV1 } from './model';
import { createHandyClient, IHandyRedis } from 'handy-redis';
import fse from 'fs-extra';

// sample exec line:
// ts-node index.ts --redis-host 127.0.0.1 --cache tokens.json --channel event-voip
program
    .version('1.0.0')
    .option('--redis-host <host>', 'store Even in Redis')
    .option('--redis-port <port>', 'use non standatd port')
    .option('--redis-password <password>', 'provide a redis password')
    .option('--channel <channel>', 'channel key used in redis to push events')
    .option('--cache <cacheFile.json>', 'store and cache tokens')
    .option('--v1', 'use Api V1 (by default use V2)')
    .parse(process.argv);

const headers = { 'Content-Type': 'application/json', 'Accept': 'text/plain' };

async function feachToken(): Promise<gToken[]> {
    let tokens: gToken[] = []
    const ovh = new Ovh({ accessRules: 'GET /telephony, GET /telephony/*/eventToken, POST /telephony/*/eventToken' });
    const api = Api(ovh);
    const groups = await api.get('/telephony')();
    
    function addToken(billingAccount: string, token: string) {
        tokens.push({ billingAccount, token })
    }
    console.log(`Importing ${groups.length} token`)
    await bluebird.map(
        groups,
        (billingAccount, index, length) => api.get('/telephony/{billingAccount}/eventToken')({ billingAccount })
            .then(
                ({ token }) => addToken(billingAccount, token),
                // 404: The requested object (eventToken) does not exist
                (err) => api.post('/telephony/{billingAccount}/eventToken')({ billingAccount, expiration: 'unlimited' })
                    .then(token => addToken(billingAccount, token))
            ).catch((err) => { console.log(`Error with ${billingAccount} ${err}`) }),
        { concurrency: 5 }
    );
    return tokens;
}

async function loadTokens() {
    const cachefile: string = program.cache;
    if (!cachefile) {
        return await feachToken();
    }
    try {
        await fse.access(cachefile);
        return await fse.readJSON(cachefile);
    } catch {
        console.log(`cacheFile ${cachefile} do not Exists, creating a new one`);
        let tokens = await feachToken();
        await fse.writeJSON(cachefile, tokens);
        return tokens;
    }
}

async function listenV1(tokens: gToken[], redis: IHandyRedis | null) {
    const channel = program.channel || 'event-voip';
    const listen = tokens.map(async ({ billingAccount, token }) => {
        const url = `https://events.voip.ovh.net/?token=${token}`;
        while (true) {
            try {
                let response = await fetch(url, { method: 'GET', headers })
                let body = await response.text();
                let resp: VoipEventV1Root;
                try {
                    resp = JSON.parse(body);
                } catch (e1) {
                    console.log('fail to parse:' + body)
                    continue;
                }
                if (!resp.Events.length) {
                    //console.log(`resp ${resp.Session}: ${resp.Message}`)
                    continue;
                }
                let resp2: VoipEventV2[] = resp.Events.map((e: VoipEventV1) => {
                    const conv: VoipEventV2 = {
                        event: e.Event,
                        token: e.Token,
                        service: e.Service,
                        ressource: e.Ressource,
                        timestamp: e.Timestamp,
                        date: e.Date,
                        data: e.Data,
                        details: e.Details,
                    }
                    return conv;
                })
                if (resp2 && resp2.length) {
                    if (redis) {
                        console.log(`${(new Date()).toISOString()} Send ${resp2.length} event to ${channel}`);
                        for (const m of resp2) {
                            delete m['token']; // hide token
                            await redis.publish(channel, JSON.stringify(m));
                        }
                    } else {
                        console.log(resp);
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    })
    await Promise.all(listen);
}

async function listenV2(tokens: gToken[], redis: IHandyRedis | null) {
    const channel = program.channel || 'event-voip';
    let groups2: gTokenGroup[] = [];
    groups2.push({ groups: [], session: '' });
    for (let i = 0; i < tokens.length; i++) {
        let last = groups2[groups2.length - 1];
        if (last.groups.length >= 5) {
            last = { groups: [], session: '' };
            groups2.push(last);
        }
        last.groups.push(tokens[i]);
    }
    console.log(`${tokens.length} billingGroups grouped as ${groups2.length} groups`)
    for (const group of groups2) {
        const method = 'POST';
        let response = await fetch('https://events.voip.ovh.net/v2/session', { method, headers })
        let session: EventSession = await response.json();
        group.session = session.id;
        for (const g2 of group.groups) {
            const url = `https://events.voip.ovh.net/v2/session/${group.session}/subscribe/${g2.token}`;
            let response = await fetch(url, { method, headers })
            let resp = await response.text();
            // console.log(resp); // Successfully subscribed on token xxxxxx-xxx-xxxxx-xxxx-xxxxxxxxxxxx
        }
    }
    console.log(`Registred Ok on event Api V2`)
    const listen = groups2.map(async (group: gTokenGroup) => {
        const url = `https://events.voip.ovh.net/v2/session/${group.session}/events/poll`;
        while (true) {
            try {
                let response = await fetch(url, { method: 'GET', headers })
                let resp: VoipEventV2[] = await response.json();
                if (resp && resp.length) {
                    if (redis) {
                        console.log(`${(new Date()).toISOString()} Send ${resp.length} event to ${channel}`);
                        for (const m of resp) {
                            delete m['token']; // hide token
                            await redis.publish(channel, JSON.stringify(m));
                        }
                    } else {
                        console.log(resp);
                    }
                }
            } catch { }
        }
    })
    await Promise.all(listen);
}

async function main() {
    let redis: IHandyRedis | null = null;
    if (program['redisHost']) {
        redis = createHandyClient({ host: program['redisHost'], port: Number(program['redisPort']) | 6379, password: program['redisPassword'] });
    }
    const tokens: gToken[] = await loadTokens();
    if (program.v1) {
        await listenV1(tokens, redis);
    } else {
        await listenV2(tokens, redis);
    }
}
main().then(console.log)

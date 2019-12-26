import { EventEmitter } from "events";
import { IOvhEventListener, IEvToken, IVoipEvent, ErrorEvent } from "./model";
import { IHandyRedis } from "handy-redis";
import fetch from "node-fetch";
import debounce from 'debounce';
import bluebird from 'bluebird';

const headers = { 'Content-Type': 'application/json', 'Accept': 'text/plain' };

interface IEvTokenGroup {
    groups: IEvToken[];
    session: string;
}

/**
 * For API V2
 */
interface EventSession {
    id: string; // "BkfFH11M1cf7",
    creation: string, // "2019-06-07T11:40:16.036197406+02:00",
    lastUpdate: string, //"2019-06-07T11:40:16.03650895+02:00",
    lastConnection: string, //"2019-06-07T11:40:16.036199867+02:00"
}

function parseVerbose(text: string, source: string): any {
    try {
        return JSON.parse(text);
    } catch (e) {
        if (text.length > 200)
            text = text.substring(0, 198) + '...';
        const error = `source:${source} Failed to parse ${text}`;
        console.log(error);
        throw Error(error);
    }
}

export class OvhEventListenerV2 extends EventEmitter implements IOvhEventListener {
    private _redis: IHandyRedis | null;
    private tokens: IEvToken[];
    private channel: string;
    private logError = debounce(console.error, 1000, true);

    constructor(tokens: IEvToken[]) {
        super();
        this._redis = null
        this.tokens = tokens;
        this.channel = '';
    }

    public redis(redis: IHandyRedis, channel: string): OvhEventListenerV2 {
        this._redis = redis;
        this.channel = channel;
        return this;
    }

    public async listen() {

        return new Promise(async (resolve) => {
            let groups2: IEvTokenGroup[] = [];
            groups2.push({ groups: [], session: '' });
            for (let i = 0; i < this.tokens.length; i++) {
                let last = groups2[groups2.length - 1];
                if (last.groups.length >= 5) {
                    last = { groups: [], session: '' };
                    groups2.push(last);
                }
                last.groups.push(this.tokens[i]);
            }
            console.log(`${this.tokens.length} billingGroups grouped as ${groups2.length} groups`)
            for (const group of groups2) {
                const method = 'POST';
                const urlSes = 'https://events.voip.ovh.net/v2/session';
                let text = '';
                while (true) {
                    const response = await fetch(urlSes, { method, headers })
                    if (response.status === 200) {
                        text = await response.text();
                        break;
                    }
                    await this.handleError({
                        groups: group.groups.map(g => g.billingAccount).join(','),
                        url: urlSes,
                        status: response.status,
                        statusText: response.statusText
                    });
                }

                const session: EventSession = parseVerbose(text, urlSes);
                group.session = session.id;
                for (const g2 of group.groups) {
                    const url = `https://events.voip.ovh.net/v2/session/${group.session}/subscribe/${g2.token}`;
                    const response = await fetch(url, { method, headers })
                    if (response.status !== 200) {
                        await this.handleError({
                            groups: group.groups.map(g => g.billingAccount).join(','),
                            url,
                            status: response.status,
                            statusText: response.statusText
                        });
                    } else {
                        let resp = await response.text();
                        if (resp !== `Successfully subscribed on token ${g2.token}`) {
                            console.error('unexpected response from events.voip.ovh.net/v2/session:' + resp);
                        }
                    }
                }
            }
            console.log(`Registred Ok on event Api V2`)
            resolve();
            const listen = groups2.map(async (group: IEvTokenGroup) => {
                const url = `https://events.voip.ovh.net/v2/session/${group.session}/events/poll`;
                while (true) {
                    try {
                        const response = await fetch(url, { method: 'GET', headers })
                        if (response.status !== 200) {
                            await this.handleError({
                                groups: group.groups.map(g => g.billingAccount).join(','),
                                url,
                                status: response.status,
                                statusText: response.statusText
                            });
                        } else {
                            const text = await response.text();
                            const events: IVoipEvent[] = parseVerbose(text, url);
                            if (events && events.length) {
                                if (this.listenerCount("message") > 0) {
                                    for (const m of events) {
                                        delete m['token']; // hide token
                                        this.emit("message", m);
                                    }
                                }
                                if (this._redis) {
                                    // console.log(`${(new Date()).toISOString()} Send ${events.length} event to ${this.channel}`);
                                    for (const m of events) {
                                        delete m['token']; // hide token
                                        await this._redis.publish(this.channel, JSON.stringify(m));
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.error(e);
                    }
                }
            })
            await Promise.all(listen); // useless for now
        })
    }
    private async handleError(message: ErrorEvent) {
        const text = JSON.stringify(message)
        this.logError(`OVH is down ${text}`);
        this.emit('error', Error(text));
        if (this._redis) {
            await this._redis.publish(this.channel, text);
        }
        await bluebird.delay(200);
    }
}

import { VoipEventV1Root, IOvhEventListener, gToken, VoipEventV2, VoipEventV1 } from "./model";
import { EventEmitter } from "events";
import { IHandyRedis } from "handy-redis";

const headers = { 'Content-Type': 'application/json', 'Accept': 'text/plain' };

export class OvhEventListenerV1 extends EventEmitter implements IOvhEventListener {
    private _redis: IHandyRedis | null;
    private tokens: gToken[];
    private channel: string;
    constructor(tokens: gToken[]) {
        super();
        this._redis = null
        this.tokens = tokens
        this.channel = '';
    }

    public redis(redis: IHandyRedis, channel: string): OvhEventListenerV1 {
        this._redis = redis;
        this.channel = channel;
        return this;
    }

    public async listen() {
        const listen = this.tokens.map(async ({ billingAccount, token }) => {
            const url = `https://events.voip.ovh.net/?token=${token}`;
            while (true) {
                try {
                    const rawData = await this.get(url);
                    let events: VoipEventV2[] = rawData.Events.map((e: VoipEventV1) => {
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
                    if (events.length) {
                        if (this.listenerCount("message") > 0) {
                            for (const m of events) {
                                delete m['token']; // hide token
                                this.emit("message", m);
                            }
                        }
                        if (this._redis) {
                            console.log(`${(new Date()).toISOString()} Send ${events.length} event to ${this.channel}`);
                            for (const m of events) {
                                delete m['token']; // hide token
                                await this._redis.publish(this.channel, JSON.stringify(m));
                            }
                        }
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        })
        await Promise.all(listen);
    }

    private async get(url: string): Promise<VoipEventV1Root> {
        let response = await fetch(url, { method: 'GET', headers })
        let body = await response.text();
        let resp: VoipEventV1Root;
        try {
            resp = JSON.parse(body);
        } catch (e1) {
            console.log('fail to parse:' + body)
            resp = {
                Session: '',
                Message: '',
                Events: [],
            };
        }
        return resp;
    }
}

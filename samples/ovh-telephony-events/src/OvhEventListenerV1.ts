import { VoipEventV1Root, IOvhEventListener, IEvToken, IVoipEvent, VoipEventV1, ErrorEvent, IVoipEventQueues, IVoipEventSip } from "./model";
import { EventEmitter } from "events";
import { IHandyRedis } from "handy-redis";
import debounce from 'debounce';
import fetch from "node-fetch";
import Bluebird from "bluebird";

const headers = { 'Content-Type': 'application/json', 'Accept': 'text/plain' };

export class OvhEventListenerV1 extends EventEmitter implements IOvhEventListener {
    private _redis: IHandyRedis | null;
    private tokens: IEvToken[];
    private channel: string;
    private logError = debounce(console.error, 1000, true);
    
    constructor(tokens: IEvToken[]) {
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
        console.log(`Registring event Api V1`);
        const listen = this.tokens.map(async ({ billingAccount, token }) => {

            const get = async (url: string): Promise<VoipEventV1Root> => {
                const response = await fetch(url, { method: 'GET', headers })
                const { status } = response;
                if (status !== 200) {
                    console.error(`url: ${url} retun statusCode: ${status}`)
                    this.handleError({
                        groups: billingAccount,
                        url,
                        status: response.status,
                        statusText: response.statusText
                    });
                } else {
                    const body = await response.text();
                    try {
                        return JSON.parse(body) as VoipEventV1Root;
                    } catch (e1) {
                        console.error('url: ${url} Failed to parse:' + body)
                    }
                }
                return {
                    Session: '',
                    Message: '',
                    Events: [],
                } as VoipEventV1Root;
            }

            let session = '';
            const url = `https://events.voip.ovh.net/?token=${token}${session}`;
            while (true) {
                try {
                    const rawData = await get(url);
                    if (rawData.Session)
                        session = `&session=${rawData.Session}`;
                    const events: IVoipEvent[] = rawData.Events.map((e: VoipEventV1) => {
                        let conv: IVoipEvent;
                        if (e.Service === 'queues')
                            return {
                                event: e.Event,
                                token: e.Token,
                                service: e.Service,
                                ressource: e.Ressource,
                                timestamp: e.Timestamp,
                                date: e.Date,
                                data: e.Data,
                                details: e.Details,

                            } as IVoipEventQueues;
                        else if (e.Service === 'sip') {
                            return {
                                event: e.Event,
                                token: e.Token,
                                service: e.Service,
                                ressource: e.Ressource,
                                timestamp: e.Timestamp,
                                date: e.Date,
                                data: e.Data,
                                details: e.Details,

                            } as IVoipEventSip;
                        }
                        console.error('Uknown model ', event)
                        return null;
                    }).filter(a => a) as IVoipEvent[];
                    if (events.length) {
                        if (this.listenerCount("message") > 0) {
                            for (const m of events) {
                                m.token = billingAccount; // replace secret token with billinggroup
                                this.emit("message", m);
                            }
                        }
                        if (this._redis) {
                            for (const m of events) {
                                m.token = billingAccount; // replace secret token with billinggroup
                                await this._redis.publish(this.channel, JSON.stringify(m));
                            }
                        }
                    }
                } catch (e) {
                    console.error(e)
                }
            }
        })
        await Promise.all(listen);
    }
    /**
     * format and inject error in stream
     */
    private async handleError(message: ErrorEvent) {
        const text = JSON.stringify(message)
        this.logError(`OVH is down ${text}`);
        this.emit('error', Error(text));
        if (this._redis) {
            await this._redis.publish(this.channel, text);
        }
        await Bluebird.delay(200);
    }
}

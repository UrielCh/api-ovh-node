/**
 * Copyright (c) 2019 - Uriel Chemouni
 * Copyright (c) 2013 - 2016 OVH SAS
 * Copyright (c) 2012 - 2013 Vincent Giersch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Except as contained in this notice, the name of OVH and or its trademarks
 * shall not be used in advertising or otherwise to promote the sale, use or
 * other dealings in this Software without prior written authorization from OVH.
 */
import { IncomingMessage } from 'http';
import * as https from 'https';
import * as querystring from 'querystring';
import { createHash } from 'crypto';
import { RequestOptions } from 'http';
import { endpoints } from './endpoints';
import { writeFile, readFileSync } from 'fs';
import { EventEmitter } from 'events';
import { OvhRequestable, OvhParamType } from '@ovh-api/common';
import { Socket } from 'net';

export interface CredentialResp {
    consumerKey: string;
    state: "expired" | "pendingValidation" | "refused" | "validated";
    validationUrl: string;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IOvhError {
    method: HttpMethod;
    path: string;
    errorCode: 'INVALID_CREDENTIAL' | 'NOT_CREDENTIAL' | 'QUERY_TIME_OUT' | 'NOT_GRANTED_CALL' | 'HTTP_ERROR' | 'NETWORK_ERROR';
    httpCode: string;
    message: string;
}

export class OvhError extends Error implements IOvhError {
    method: HttpMethod;
    path: string;
    errorCode: 'INVALID_CREDENTIAL' | 'NOT_CREDENTIAL' | 'QUERY_TIME_OUT' | 'NOT_GRANTED_CALL' | 'HTTP_ERROR' | 'NETWORK_ERROR';
    httpCode: string;
    parent?: Error;

    constructor(m: IOvhError, parent?: Error) {
        super(m.message);
        this.method = m.method;
        this.path = m.path;
        this.errorCode = m.errorCode;
        this.httpCode = m.httpCode;
        this.parent = parent;
        if (this.parent) {
            if (this.parent.stack)
                this.stack = this.stack + '\nFrom previous ' + this.parent.stack.split('\n').slice(0, 2).join('\n') + '\n'
            else if (typeof this.parent == "string")
                this.stack = this.parent + '\n' + this.stack;
        }
        Object.setPrototypeOf(this, OvhError.prototype);
    }
}

export interface OvhParams {
    appKey?: string;
    appSecret?: string;
    consumerKey?: string;
    timeout?: number;
    /**
     * time offset from remote server
     */
    apiTimeDiff?: number;
    /**
     * entrypoint of ovg default entrypoint
     */
    endpoint?: string;
    host?: string;
    port?: string;
    apis?: string[];
    accessRules?: string[] | string;
    /**
     * certCache store ans use generated certificate in a file
     */
    certCache?: string;
    /**
     * time to wait in ms before a retry
     * default is 100 ms, the time to wait is multiplyed by the numbers of retries
     */
    retrySleep?: number;
    /**
     * maximum retry atempt after a recoverable error
     * default is 10 time;
     */
    maxRetry?: number;
    /**
     * save used query to customize accessRules
     */
    saveQuerys?: boolean;
}

interface AccessRule {
    method: HttpMethod;
    path: string;
}
/**
 * simple wait promise generator
 * @param duration wime to wait in ms
 */
const wait = (duration: number) => new Promise(resolve => setTimeout(() => (resolve()), duration));

export interface OvhApiEvent {
    /**
     * emit before each request (sent a single time in case of retry)
     */
    on(ev: 'request', listener: (params: { method: string, path: string, pathTemplate: string }) => void): this;
    once(ev: 'request', listener: (params: { method: string, path: string, pathTemplate: string }) => void): this;
    emit(ev: 'request', listener: (params: { method: string, path: string, pathTemplate: string }) => void): boolean;

    on(ev: 'debug', listener: (txt: string) => void): this;
    once(ev: 'debug', listener: (txt: string) => void): this;
    emit(ev: 'debug', listener: (txt: string) => void): boolean;
    /**
     * emited on OVH connexion error berore futher retry
     */
    on(ev: 'warning', listener: (params: { retryCnt: number, maxRetry: number, method: HttpMethod, path: string, statusCode: number, statusMessage: string }) => void): this;
    once(ev: 'warning', listener: (params: { retryCnt: number, maxRetry: number, method: HttpMethod, path: string, statusCode: number, statusMessage: string }) => void): this;
    emit(ev: 'warning', listener: (params: { retryCnt: number, maxRetry: number, method: HttpMethod, path: string, statusCode: number, statusMessage: string }) => void): boolean;
}

/**
 * Main ovh api connector
 */
export default class OvhApi extends EventEmitter implements OvhRequestable, OvhApiEvent {
    appKey: string;
    appSecret: string;
    consumerKey: string | null;
    timeout?: number;
    apiTimeDiff: number | null;
    host: string;
    port: number;
    basePath: string; // '/1.0'
    accessRules: string[];
    certCache: string;
    updatingCert: boolean;
    retrySleep: number = 100;
    maxRetry: number = 10;
    querySet: Set<string> | null;

    constructor(params: OvhParams) {
        super();
        // Application Name: api-ovh-node
        // Application Description: api-ovh-node default key
        this.appKey = params.appKey || 'bIYf2Ji3u5Qm93JZ';
        this.appSecret = params.appSecret || 'MGqfOgkblLhj1GOefKULD3ljnWitUwBW';
        this.consumerKey = params.consumerKey || null;
        this.timeout = params.timeout;
        this.apiTimeDiff = params.apiTimeDiff || null;
        this.certCache = params.certCache || '';
        this.retrySleep = (typeof params.retrySleep === 'number') ? params.retrySleep : 100;
        this.maxRetry = (typeof params.maxRetry === 'number') ? params.maxRetry : 10;
        if (params.saveQuerys) {
            this.querySet = new Set();
        } else {
            this.querySet = null;
        }
        this.updatingCert = false;
        if (params.accessRules) {
            if (typeof (params.accessRules) === 'string')
                this.accessRules = params.accessRules.split(/\s*[,;]\s*/);
            else
                this.accessRules = params.accessRules;
            // replace {variables} by *
            this.accessRules.map(rule => rule.replace(/{[^}]*}/g, '*'))
        } else {
            this.accessRules = ['GET /*', 'POST /*', 'PUT /*', 'DELETE /*'];
        }

        if (this.certCache) {
            let cached = '';
            try {
                cached = readFileSync(this.certCache, { encoding: 'utf-8' })
                let data = JSON.parse(cached);
                let { appKey, appSecret, consumerKey } = data;
                this.appKey = appKey;
                this.appSecret = appSecret;
                this.consumerKey = consumerKey;
            } catch { }
        }
        if (!params.appKey && !params.appSecret) {
            if (!this.consumerKey && !params.accessRules) {
                console.warn(`Initializing Api OVH without appKey / appSecret: using Default Certificat
provide an accessRules to choose the authorisation you need
by default I will ask for all rights`);
            }
        }

        // Custom configuration of the API endpoint
        let { host, port, endpoint } = params;
        if (host) {
            this.host = host;
            this.port = Number(port) || 443;
        } else {
            endpoint = endpoint || 'ovh-eu';
            let selected = endpoints[endpoint]
            if (!selected)
                throw new Error(`[OVH] Unknown API ${endpoint}`);
            this.host = selected.host;
            this.port = Number(selected.port) || 443;
        }
        // params.basePath || 
        this.basePath = '/1.0';
        // Declared used API, will be used to check the associated schema
        if (typeof (this.appKey) !== 'string' ||
            typeof (this.appSecret) !== 'string') {
            throw new Error('[OVH] You should precise an application key / secret');
        }
    }
    /**
     * conver 'GET PATH1', 'POST PATH2', ... to AccessRules
     * 
     * @param rules 
     */
    private toAccessRules(...rules: string[]): AccessRule[] {
        return <AccessRule[]>rules
            .map(s => s.split(/\s+/))
            .map(([method, path]) => ({ method, path }));
    }

    public getQuerySet(): string {
        if (this.querySet)
            return [...this.querySet].filter(a => a != 'GET /auth/time').join(', ');
        return 'please set saveQuerys to true to enable this feature';
    }
    /**
     * stat credential authentification
     * @param redirection optional redirecton for auth page.
     */
    public async queryForCredencial(redirection?: string): Promise<CredentialResp> {
        const method = 'POST';
        const path = '/auth/credential';
        try {
            const rules = {
                accessRules: this.toAccessRules.apply(this, this.accessRules),
                redirection: '',
            };
            if (redirection)
                rules.redirection = redirection;
            const resp = await this.request(method, path, rules);
            return resp as CredentialResp;
        } catch (e) {
            throw new OvhError({
                method,
                path,
                errorCode: 'HTTP_ERROR',
                httpCode: `${e}`,
                message: `failed to request a credential with rule ${JSON.stringify(this.accessRules)} ${e.message || e}`
            }, e);
        }
    }

    /**
     * Execute a request on the API
     *
     * @param {String} httpMethod: The HTTP method
     * @param {String} pathTemplate: The request path
     * @param {Object} params: The request parameters (passed as query string or
     *                         body params)
     * @param {Function} callback
     * @param {Object} refer: The parent proxied object
     */
    public async request(httpMethod: string, pathTemplate: string, params?: any): Promise<any> {
        // const ovhEngine = this;
        httpMethod = httpMethod.toUpperCase();
        /**
         * Time drift
         */
        if (this.apiTimeDiff === null && pathTemplate !== '/auth/time') {
            try {
                const time: number = await this.request('GET', '/auth/time', {})
                this.apiTimeDiff = time - Math.round(Date.now() / 1000);
            } catch (err) {
                throw new Error(`[OVH] Unable to fetch OVH API time ${err.message || err}`);
            }
        }
        /**
         * replace Path variable
         */
        let path = pathTemplate;
        let m: RegExpMatchArray | null = null;
        while (m = path.match(/{([^}]+)}/)) {
            let val = params[m[1]];
            if (val === undefined)
                return <Promise<any>>Promise.reject(Error(`${m[1]} param must be provide to ${pathTemplate}`));
            delete params[m[1]];
            path = path.replace(m[0], String(val));
        }
        /**
         * build Request
         */
        let options: RequestOptions = {
            host: this.host,
            port: this.port,
            method: httpMethod,
            path: this.basePath + path
        };

        if (this.querySet) {
            const template = path.split('/').map((e) => {
                if (!e.length)
                    return e;
                if (e.match(/\d/))
                    return '*'
                return e;
            }).join('/');
            this.querySet.add(`${httpMethod} ${template}`);
        }

        // Headers
        options.headers = {
            'Content-Type': 'application/json',
            'X-Ovh-Application': this.appKey,
        };

        /**
         * Remove undefined values
         */
        for (let k in params) {
            if (params.hasOwnProperty(k) && params[k] == null) {
                delete params[k];
            }
        }

        /**
         * Append parameters
         */
        let reqBody: string = '';
        if (typeof (params) === 'object' && Object.keys(params).length > 0) {
            if (httpMethod === 'PUT' || httpMethod === 'POST') {
                // Escape unicode
                reqBody = JSON
                    .stringify(params)
                    .replace(/[\u0080-\uFFFF]/g, (m) => '\\u' + ('0000' + m.charCodeAt(0).toString(16)).slice(-4));
                options.headers['Content-Length'] = reqBody.length;
            } else {
                options.path += `?${querystring.stringify(params)}`;
            }
        }

        /**
         * signe operation if non /auth service
         */
        if (path !== '/auth/credential' && path !== '/auth/time') {
            const XOvhTimestamp: number = Math.round(Date.now() / 1000) + Number(this.apiTimeDiff);
            options.headers['X-Ovh-Timestamp'] = XOvhTimestamp;

            // Sign request
            if (typeof (this.consumerKey) === 'string') {
                options.headers['X-Ovh-Consumer'] = this.consumerKey;
                options.headers['X-Ovh-Signature'] = this.signRequest(
                    httpMethod, `https://${options.host}${options.path}`,
                    reqBody, XOvhTimestamp
                );
            }
        }
        if (this.listenerCount('request')) {
            this.emit('request', { method: httpMethod, path, pathTemplate })
        }
        if (this.listenerCount('debug')) {
            this.emit('debug', `[OVH] API call: ${options.method} ${options.path} ${reqBody}`);
        }
        // retry the Query thith a new cert
        const waitForCertValidation = async (consumerKey: string, validationUrl: string) => new Promise(async (done) => {
            // set consumerKey
            this.consumerKey = consumerKey;
            console.log(`[OVH] MISSING_CREDENTIAL issue a new one: ${consumerKey}\nValidate this cert with this url to continue:\n${validationUrl}`)
            try {
                // try to open a brower, ignorring error
                // import open from 'open';
                const open = require('open');
                open(validationUrl).catch(() => { });
            } catch (e) {
                // exception if used in browser
                // Try to open a popup
                if (window)
                    window.open(validationUrl);
            }
            let pass = 0;

            await wait(2000);
            while (true) {
                try {
                    const req = await this.request('GET', '/auth/currentCredential');
                    const { status } = req;
                    if (status === 'validated') {
                        console.log('consumerKey Authorized!')
                        if (this.certCache) {
                            let { appKey, appSecret, consumerKey } = this;
                            writeFile(this.certCache, JSON.stringify({ appKey, appSecret, consumerKey }, null, 2), { encoding: 'utf-8', mode: 0o600 }, (err) => {
                                if (err)
                                    console.error(`Failed to write in ${this.certCache} ${err}`);
                                done();
                            });
                        } else
                            done();
                        return false;
                    }
                } catch ({ errorCode }) {
                    // errorCode:"INVALID_CREDENTIAL"
                    // httpCode:"403 Forbidden"
                    // message:"This credential is not valid"
                    if (++pass % 15 == 0) {
                        if (errorCode === 'MISSING_CREDENTIAL')
                            console.log(`waiting for cert validation here: ${validationUrl}`)
                        else
                            console.log(`\n${errorCode}: ${consumerKey} url:\n${validationUrl}`)
                    }
                    await wait(2000);
                }
            }
        });

        let retryCnt = -1;
        // Promisify https.request
        const t0 = new Date().getTime();

        const handleResponse = async (response: IncomingMessage, body: string) => {
            let responseData: any;
            const { statusCode, statusMessage } = response;
            if (body.length > 0) {
                try {
                    responseData = JSON.parse(body);
                } catch (e) {
                    throw new OvhError({
                        method: options.method as HttpMethod,
                        path: options.path as string,
                        errorCode: 'HTTP_ERROR',
                        httpCode: `${statusCode} ${statusMessage}`,
                        message: `[OVH] Unable to parse ${httpMethod} ${path} JSON reponse:${body}`
                    }, e);
                }
            } else {
                responseData = '';
            }

            if (this.listenerCount('debug')) {
                this.emit('debug', `[OVH] API response to ${httpMethod} ${path}: ${body}`);
            }
            if (statusCode === 200) {
                return responseData;
            }

            const error: IOvhError = <IOvhError>responseData;
            if (error.errorCode === 'INVALID_CREDENTIAL' || error.message === 'You must login first') {
                if (this.certCache && !this.updatingCert) {
                    this.updatingCert = true;
                    this.consumerKey = null;
                }
                if (this.consumerKey === null) {
                    let consumerKey, validationUrl;
                    try {
                        const resp = await this.queryForCredencial()
                        consumerKey = resp.consumerKey;
                        validationUrl = resp.validationUrl;
                    } catch (e) {
                        throw new OvhError({
                            method: options.method as HttpMethod,
                            path: options.path as string,
                            errorCode: 'HTTP_ERROR',
                            httpCode: `${statusCode} ${statusMessage}`,
                            message: `failed to request a credential with rule ${JSON.stringify(this.accessRules)} ${e.message || e}`
                        }, e);
                    }
                    await waitForCertValidation(consumerKey, validationUrl);
                    let resp = await this.request(httpMethod, path, params);
                    this.updatingCert = false;
                    return resp;
                }
                throw new OvhError(error);
            }
            if (!error.errorCode)
                error.errorCode = "HTTP_ERROR";
            if (!error.httpCode)
                error.httpCode = `${statusCode} ${statusMessage}`;
            error.method = options.method as HttpMethod;
            error.path = options.path as string;
            if (retryCnt > 0)
                error.message += ` after ${retryCnt} retries`;
            error.message += ` in ${((new Date().getTime() - t0)/1000).toFixed(1)} Sec.`;
            throw new OvhError(error);
        }

        const makeRequest = () => new Promise((resolve, reject) => {
            let req = https.request(options, (res: IncomingMessage) => {
                let body = '';
                res.on('data', (chunk) => body += chunk)
                    .on('end', async () => {
                        retryCnt++;
                        // 504 Gateway Time-out
                        // 408 Request Time-out
                        const { statusCode } = res;
                        if ((statusCode == 504 || statusCode == 408) && retryCnt <= this.maxRetry) {
                            this.emit('warning', { retryCnt: retryCnt, maxRetry: this.maxRetry, method: httpMethod, path, statusCode, statusMessage: res.statusMessage });
                            await wait(this.retrySleep * retryCnt);
                            makeRequest().then(resolve, reject);
                            return;
                        }
                        return handleResponse(res, body).then(resolve, reject)
                    })
            }).on('error', async (e) => {
                // network connextion error like read ECONNRESET
                retryCnt++;
                if (retryCnt <= this.maxRetry) {
                    this.emit('warning', { retryCnt: retryCnt, maxRetry: this.maxRetry, method: httpMethod, path, statusCode: 0, statusMessage: `${e}` });
                    await wait(retryCnt * this.retrySleep)
                    makeRequest().then(resolve, reject);
                    return;
                }
                let message = 'fail to etablish a valid connexion';
                if (retryCnt > 0)
                    message += ` after ${retryCnt} retries`;
                message += ` in ${((new Date().getTime() - t0)/1000).toFixed(1)} Sec.`;

                reject(new OvhError({
                    method: options.method as HttpMethod,
                    path: options.path as string,
                    httpCode: '',
                    errorCode: 'NETWORK_ERROR',
                    message
                }, e))
            });

            // mocked socket has no setTimeout
            if (typeof (this.timeout) === 'number') {
                const timeout = this.timeout;
                req.on('socket', (socket: Socket) => {
                    socket.setTimeout(timeout);
                    // TODO check socket within modern nodeJS
                    const events = (socket as any)._events;
                    if (events && events.timeout != null) {
                        socket.on('timeout', () => req.abort());
                    }
                });
            }
            if (reqBody != null) {
                req.write(reqBody);
            }
            req.end();
        });

        return makeRequest();// end return Query promise
    }

    /**
     * Execute a request on the API with promise
     *
     * @param {String} httpMethod: The HTTP method
     * @param {String} path: The request path
     * @param {Object} params: The request parameters (passed as query string or
     *                         body params)
     */
    public requestPromised(httpMethod: string, path: string, params?: OvhParamType) {
        return this.request(httpMethod, path, params);
    }

    /**
     * Signs an API request
     *
     * @param {String} httpMethod
     * @param {String} url
     * @param {String} body
     * @param {Number|String} timestamp
     * @return {String} The signature
     */
    private signRequest(httpMethod: string, url: string, body: string, timestamp: Number) {
        let s = [
            this.appSecret,
            this.consumerKey,
            httpMethod,
            url,
            body || '',
            String(timestamp)
        ];
        return '$1$' + createHash('sha1').update(s.join('+')).digest('hex');
    }
}

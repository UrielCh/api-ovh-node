/**
 * Copyright (c) 2019 - 2020 Uriel Chemouni
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
import { OvhRequestable, OvhParamType, ICacheOptions, ICacheSilot, CacheAction, SlotConstructor } from '@ovh-api/common';
import { Socket } from 'net';
import { HttpMethod, AccessRule, OvhCredentialNew, OvhCredential } from './OVHInterfaces';
import { CertMonitorProvider, stdOutCertMonitorProvider } from './certMonitor';
export { CertMonitorProvider, CertMonitor } from './certMonitor';
export { OvhCredentialNew } from './OVHInterfaces'
import { EOL } from 'os';
import { Cache } from './Cache';

/**
 * data used to create an Exception
 */
export interface IOvhError {
    method: HttpMethod;
    path: string;
    errorCode: 'INVALID_CREDENTIAL' | 'NOT_CREDENTIAL' | 'QUERY_TIME_OUT' | 'NOT_GRANTED_CALL' | 'HTTP_ERROR' | 'NETWORK_ERROR';
    httpCode: string;
    message: string;
}

/**
 * Api Class used for all errors
 */
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

export type OvhEntryPointEnum = 'ovh-eu' | 'ovh-us' | 'ovh-ca' | 'runabove-ca' | 'sys-eu' | 'sys-ca' | 'soyoustart-eu' | 'soyoustart-ca' | 'ks-eu' | 'ks-ca' | 'kimsufi-eu' | 'kimsufi-ca';

export interface OvhParams {
    /** 
     * appKey generated from https://eu.api.ovh.com/createApp/
     * use a built-in appKey by default for test and open environement
     * for production it's highly recomanded to generate your own.
     */
    appKey?: string;
    /** 
     * appSecret generated from https://eu.api.ovh.com/createApp/
     * use a built-in appSecret by default for test and open environement
     * for production it's highly recomanded to generate your own and to keep if secret.
     */
    appSecret?: string;
    /**
     * This OVH api can ask for it on demande whene used in a GUI, or you can provide it here for a server usage.
     */
    consumerKey?: string;
    /**
     * Define a setTimeout for all Api TCP connexions.
     */
    timeout?: number;
    /**
     * Time offset from remote server, default is autodetect.
     * you should not need to give a value here.
     */
    apiTimeDiff?: number;
    /**
     * Api Entrypoint, by default use 'ovh-eu'
     */
    endpoint?: OvhEntryPointEnum;
    /**
     * ovh api hostname if you do not want to use an official public entrypoint
     */
    host?: string;
    /**
     * ovh api port if you do not want to use an official public entrypoint
     */
    port?: string;
    /**
     * Explicite ask for given access rules, by default, get all access eqivalent to 'GET /*, POST /*, PUT /*, DELETE /*'
     * rules can be give as an array of rules, or as a string containing rules separeted by comma or semicolon
     */
    accessRules?: string[] | string;
    /**
     * certCache filename used to store generated certificate on disque.
     */
    certCache?: string;
    /**
     * time to wait in ms before a retry
     * default is 100 ms, the time to wait is multiplyed by the numbers of retries
     */
    retrySleep?: number;
    /**
     * Maximum retry atempt after a recoverable error
     * default is 10 time;
     */
    maxRetry?: number;
    /**
     * save all used query to customize futhers accessRules request.
     */
    saveQuerys?: boolean;
    /**
     * you can block automatic launch of a browser
     * default is true;
     */
    launchBrower?: boolean;
    /**
     * put here your logic to ask for a certificat validation
     * by default console.log validationUrl every 30 seconds
     */
    certMonitorProvider?: CertMonitorProvider;
    /**
     * overwrite cache Slot implementation.
     */
    slotClass?: SlotConstructor;
}

/**
 * simple wait promise generator
 * @param duration wime to wait in ms
 */
const wait = (duration: number) => new Promise(resolve => setTimeout(() => (resolve(0)), duration));

/**
 * Main ovh api connector
 */
export default class OvhApi extends EventEmitter implements OvhRequestable {
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
    launchBrower: boolean;
    certMonitorProvider: CertMonitorProvider;
    queryCache: Cache | null = null;
    slotClass?: SlotConstructor;

    constructor(params?: OvhParams) {
        super();
        params = params || {};
        // Application Name: api-ovh-node
        // Application Description: api-ovh-node default key
        this.appKey = params.appKey || 'bIYf2Ji3u5Qm93JZ';
        this.appSecret = params.appSecret || 'MGqfOgkblLhj1GOefKULD3ljnWitUwBW';
        this.consumerKey = params.consumerKey || null;
        this.timeout = params.timeout || 3 * 60_000; // default time out is 3 minutes
        this.apiTimeDiff = params.apiTimeDiff || null;
        this.certCache = params.certCache || '';
        this.retrySleep = (typeof params.retrySleep === 'number') ? params.retrySleep : 100;
        this.maxRetry = (typeof params.maxRetry === 'number') ? params.maxRetry : 10;
        this.launchBrower = (params.launchBrower === false) ? false : true;
        this.certMonitorProvider = params.certMonitorProvider || stdOutCertMonitorProvider;
        this.slotClass = params.slotClass || undefined;

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
     * emited before each request
     */
    on(ev: 'request', listener: (params: { method: string, path: string, pathTemplate: string }) => void): this;
    /**
     * emited verbose debug data
     */
    on(ev: 'debug', listener: (txt: string) => void): this;
    /**
     * emited on OVH connexion error before futher retries.
     */
    on(ev: 'warning', listener: (params: { retryCnt: number, maxRetry: number, method: HttpMethod, path: string, statusCode: number, statusMessage?: string, error?: Error }) => void): this;
    /**
     * non Http Warning message
     */
    on(ev: 'warningMsg', listener: (params: string) => void): this;
    on(ev: 'request' | 'debug' | 'warning' | 'warningMsg', listener: (...args: any[]) => void): this {
        return super.on(ev, listener);
    }

    /**
     * emited before each request
     */
    once(ev: 'request', listener: (params: { method: string, path: string, pathTemplate: string }) => void): this;
    /**
     * emited verbose debug data
     */
    once(ev: 'debug', listener: (txt: string) => void): this;
    /**
     * emited on OVH connexion error before futher retries.
     */
    once(ev: 'warning', listener: (params: { retryCnt: number, maxRetry: number, method: HttpMethod, path: string, statusCode: number, statusMessage?: string, error?: Error }) => void): this;
    /**
     * non Http Warning message
     */
    once(ev: 'warningMsg', listener: (params: string) => void): this;
    once(ev: 'request' | 'debug' | 'warning' | 'warningMsg', listener: (...args: any[]) => void): this {
        return super.once(ev, listener);
    }

    /**
     * emited before each request
     */
    emit(ev: 'request', params: { method: string, path: string, pathTemplate: string }): boolean;
    /**
     * emited verbose debug data
     */
    emit(ev: 'debug', txt: string): boolean;
    /**
     * emited on OVH connexion error before futher retries.
     */
    emit(ev: 'warning', params: { retryCnt: number, maxRetry: number, method: HttpMethod, path: string, statusCode: number, statusMessage?: string, error?: Error }): boolean;
    /**
     * non Http Warning message
     */
    emit(ev: 'warningMsg', params: string): boolean;
    emit(ev: 'request' | 'debug' | 'warning' | 'warningMsg', ...args: any[]): boolean {
        return super.emit(ev, ...args);
    }

    async cache(template: string, param?: ICacheOptions | CacheAction): Promise<any> {
        if (!this.queryCache) {
            this.queryCache = new Cache({ slotClass: this.slotClass });
        }
        param = param || { ttl: 3600 };
        if (typeof (param) === 'string') {
            if (param === 'disable') {

            } else if (param === 'flush') {
                this.queryCache.flush(template);
            }
        } else {
            this.queryCache.cache(template, param);
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
    public async queryForCredencial(redirection?: string): Promise<OvhCredentialNew> {
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
            return resp as OvhCredentialNew;
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
     * @param httpMethod: The HTTP method
     * @param pathTemplate: The request path
     * @param params: The request parameters (passed as query string or body params)
     */
    public request(httpMethod: string, pathTemplate: string, params?: any): Promise<any> {
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
        return this.doRequest(httpMethod, path, pathTemplate, params);
    }

    /**
     * Execute a request on the API
     *
     * @param method: The HTTP method
     * @param path: The request path
     * @param pathTemplate: The request path template
     * @param params: The request parameters (passed as query string or body params)
     */
    public async doRequest(httpMethod: string, path: string, pathTemplate: string, params?: { [key: string]: any }): Promise<any> {
        const method = httpMethod.toUpperCase() as HttpMethod;
        let size = 0;
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
        let cacheSilot: ICacheSilot | undefined;
        // httpMethod === 'GET' && this.queryCache
        if (this.queryCache) {
            cacheSilot = this.queryCache.silot(pathTemplate);
            if (cacheSilot && method === 'GET') {
                const value = await cacheSilot.get(path);
                if (value !== undefined)
                    return value;
            }
        }

        /**
         * build Request
         */
        let options: RequestOptions = {
            host: this.host,
            port: this.port,
            method,
            path: this.basePath + path,
            timeout: this.timeout,
        };

        if (this.querySet) {
            const template = path.split('/').map((e) => {
                if (!e.length)
                    return e;
                if (e.match(/\d/))
                    return '*'
                return e;
            }).join('/');
            this.querySet.add(`${method} ${template}`);
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
            if (method === 'PUT' || method === 'POST') {
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
                    method, `https://${options.host}${options.path}`,
                    reqBody, XOvhTimestamp
                );
            }
        }
        if (this.listenerCount('request')) {
            this.emit('request', { method, path, pathTemplate })
        }
        if (this.listenerCount('debug')) {
            this.emit('debug', `[OVH] API call: ${method} ${options.path} ${reqBody}`);
        }
        // retry the Query thith a new cert
        const waitForCertValidation = async (newCert: OvhCredentialNew) => new Promise(async (done) => {
            // set consumerKey
            const certMonitor = this.certMonitorProvider(this, newCert);
            const { consumerKey, validationUrl } = newCert;
            this.consumerKey = consumerKey;
            if (this.launchBrower)
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
                    const req = await this.request('GET', '/auth/currentCredential') as OvhCredential;
                    const { status } = req;
                    if (status === 'validated') {
                        if (this.certCache) {
                            const { appKey, appSecret, consumerKey } = this;
                            const { applicationId, creation, credentialId, expiration, rules } = req;
                            const jsonData = JSON.stringify({ applicationId, appKey, appSecret, consumerKey, credentialId, rules, creation, expiration }, null, 2) + EOL;
                            writeFile(this.certCache, jsonData, { encoding: 'utf-8', mode: 0o600 }, (err) => {
                                if (err)
                                    this.emit('warningMsg', `Failed to write in ${this.certCache} ${err}`);
                                done(0);
                            });
                        } else
                            done(0);
                        return false;
                    }
                } catch ({ errorCode }) {
                    await certMonitor.notValid(errorCode, ++pass);
                    await wait(2000);
                }
            }
        });

        let retryCnt = 1;
        // Promisify https.request
        const t0 = new Date().getTime();

        const handleResponse = async (response: IncomingMessage, body: string) => {
            let responseData: any;
            const { statusCode, statusMessage } = response;
            if (body.length > 0) {
                size = body.length;
                try {
                    responseData = JSON.parse(body);
                } catch (e) {
                    throw new OvhError({
                        method,
                        path: options.path as string,
                        errorCode: 'HTTP_ERROR',
                        httpCode: `${statusCode} ${statusMessage}`,
                        message: `[OVH] Unable to parse ${method} ${path} JSON reponse:${body}`
                    }, e);
                }
            } else {
                responseData = '';
            }

            if (this.listenerCount('debug')) {
                this.emit('debug', `[OVH] API response to ${method} ${path}: ${body}`);
            }
            if (statusCode >= 200 && statusCode < 300) {
                if (cacheSilot) {
                    if (method === 'GET')
                        await cacheSilot.store(path, responseData, size);
                    else {
                        await cacheSilot.discard(path);
                        if (method === 'DELETE') {
                            await cacheSilot.discard(path.replace(/\/[^/]+$/, ''));
                        }
                    }
                }
                return responseData;
            }

            const error: IOvhError = <IOvhError>responseData;
            if (error.errorCode === 'INVALID_CREDENTIAL' || error.message === 'You must login first') {
                if (this.certCache && !this.updatingCert) {
                    this.updatingCert = true;
                    this.consumerKey = null;
                }
                if (this.consumerKey === null) {
                    let newCert: OvhCredentialNew;
                    try {
                        newCert = await this.queryForCredencial()
                    } catch (e) {
                        throw new OvhError({
                            method,
                            path: options.path as string,
                            errorCode: 'HTTP_ERROR',
                            httpCode: `${statusCode} ${statusMessage}`,
                            message: `failed to request a credential with rule ${JSON.stringify(this.accessRules)} ${e.message || e}`
                        }, e);
                    }
                    await waitForCertValidation(newCert);
                    let resp = await this.request(method, path, params);
                    this.updatingCert = false;
                    return resp;
                }
                throw new OvhError(error);
            }
            if (!error.errorCode)
                error.errorCode = "HTTP_ERROR";
            if (!error.httpCode)
                error.httpCode = `${statusCode} ${statusMessage}`;
            error.method = method;
            error.path = options.path as string;
            if (retryCnt > 1)
                error.message += ` after ${retryCnt} retries`;
            error.message += ` in ${((new Date().getTime() - t0) / 1000).toFixed(1)} Sec.`;
            throw new OvhError(error);
        }
        const makeRequest = () => new Promise((resolve, reject) => {
            const { maxRetry } = this;
            let req = https.request(options, (res: IncomingMessage) => {
                let body = '';
                res.on('data', (chunk) => body += chunk)
                    .on('end', async () => {
                        // 504 Gateway Time-out
                        // 408 Request Time-out
                        let { statusCode } = res;
                        if (retryCnt <= maxRetry) {
                            /**
                             * Correct invalid return code 400 QUERY_TIME_OUT
                             * that can be sent by OVH
                             */
                            if ((statusCode == 400)) {
                                try {
                                    const responseErr: IOvhError = JSON.parse(body);
                                    if (responseErr.errorCode === "QUERY_TIME_OUT") {
                                        statusCode = 408;
                                    }
                                } catch (e) { }
                            }
                            if ((statusCode === 504 || statusCode === 408)) {
                                retryCnt++;
                                this.emit('warning', { retryCnt, maxRetry, method, path, statusCode, statusMessage: res.statusMessage });
                                await wait(this.retrySleep * retryCnt);
                                makeRequest().then(resolve, reject);
                                return;
                            }
                        }
                        return handleResponse(res, body).then(resolve, reject)
                    })
            }).on('timeout', () => {
                req.destroy(Error('timeout event triggered'));
            }).on('error', async (error: Error) => {
                // network connextion error like read ECONNRESET
                if (retryCnt <= this.maxRetry) {
                    const statusCode = 0;
                    retryCnt++;
                    this.emit('warning', { retryCnt, maxRetry, method, path, statusCode, error });
                    await wait(retryCnt * this.retrySleep)
                    makeRequest().then(resolve, reject);
                    return;
                }
                let message = 'fail to etablish a valid connexion';
                if (retryCnt > 1)
                    message += ` after ${retryCnt} retries`;
                message += ` in ${((new Date().getTime() - t0) / 1000).toFixed(1)} Sec.`;

                reject(new OvhError({
                    method,
                    path: options.path as string,
                    httpCode: '',
                    errorCode: 'NETWORK_ERROR',
                    message
                }, error))
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
     * @param {Object} params: The request parameters (passed as query string or body params)
     * 
     * @deprecated
     */
    public requestPromised(httpMethod: string, path: string, params?: OvhParamType): Promise<any> {
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
    private signRequest(httpMethod: string, url: string, body: string, timestamp: Number): string {
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

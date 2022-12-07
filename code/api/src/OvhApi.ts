/**
 * Copyright (c) 2019 - 2022 Uriel Chemouni
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
import * as querystring from 'querystring';
import { RequestOptions } from 'node:http';
import { endpoints } from './endpoints.js';
import { readFileSync } from 'node:fs';
import { EventEmitter } from 'node:events';
import { OvhRequestable, OvhParamType, ICacheOptions, ICacheSilot, CacheAction } from '@ovh-api/common';
import { HttpMethod, AccessRule, OvhCredentialNew } from './OVHInterfaces.js';
import { CertMonitorProvider, stdOutCertMonitorProvider } from './certMonitor.js';
import { Cache } from './Cache.js';
import { OvhParams, OvhParamsFull } from './OvhParams.js';
import { RequestContext } from './helper.js';
import { makeRequest } from './requestHandler.js';
import { OvhError } from './OvhError.js';
import * as path from 'node:path';
import * as os from 'node:os';
import * as fs from 'node:fs';
import * as crypto from 'node:crypto';
// import { createHash } from 'node:crypto';

/**
 * Main ovh api connector
 */
export default class OvhApi extends EventEmitter implements OvhRequestable {
    /**
     * fully filled configuration object
     */
    private data: OvhParamsFull;
    /**
     * always equals to '/1.0' for now
     */
    private basePath: string;
    /**
     * lock used durring cert updating avoiding mutiple certificate generation
     * TODO replace by promise
     */
    updatingCert: Promise<void> | null = null;
    updatingCertResolve: (() => void) | null = null;

    /**
     * cache of used Query
     */
    querySet: Set<string> | null;
    /**
     * caching object
     */
    queryCache: Cache | null = null;

    constructor(apiOptions = {} as OvhParams) {
        super();
        this.data = {
            // Application Name: api-ovh-node
            // Application Description: api-ovh-node default key
            appKey: apiOptions.appKey || 'bIYf2Ji3u5Qm93JZ',
            appSecret: apiOptions.appSecret || 'MGqfOgkblLhj1GOefKULD3ljnWitUwBW',
            consumerKey: apiOptions.consumerKey || '',
            timeout: apiOptions.timeout || 3 * 60000, // default time out is 3 minutes
            host: '',
            port: 0,
            accessRules: [] as string[],
            apiTimeDiff: apiOptions.apiTimeDiff || null,
            certCacheFile: apiOptions.certCacheFile || '',
            nichandle: apiOptions.nichandle || '',
            retrySleep: (typeof apiOptions.retrySleep === 'number') ? apiOptions.retrySleep : 100,
            maxRetry: (typeof apiOptions.maxRetry === 'number') ? apiOptions.maxRetry : 10,
            saveQuerys: apiOptions.saveQuerys || false,
            launchBrower: (apiOptions.launchBrower === false) ? false : true,
            certMonitorProvider: apiOptions.certMonitorProvider || stdOutCertMonitorProvider,
            slotClass: apiOptions.slotClass || undefined,
            endpoint: apiOptions.endpoint || 'ovh-eu',
            keepUnexpectedCredential: apiOptions.keepUnexpectedCredential || false,
            redirectUrl: apiOptions.redirectUrl || 'https://www.ovhcloud.com/',
        };
        this.querySet = apiOptions.saveQuerys ? new Set() : null;
        /**
         * fill accessRules
         */
        if (apiOptions.accessRules) {
            let accessRules: string[] = [];
            if (typeof (apiOptions.accessRules) === 'string')
                accessRules = apiOptions.accessRules.split(/\s*[,;]\s*/);
            else
                accessRules = apiOptions.accessRules;
            // replace {variables} by *
            accessRules = accessRules.map(rule => rule.replace(/{[^}]*}/g, '*'))
            if (apiOptions.nichandle) {
                let addingMe = true;
                for (let i = 0; i < accessRules.length; i++) {
                    const r = accessRules[i].toLocaleLowerCase();
                    if (r === 'get /*' || r === 'get /me') {
                        addingMe = false
                        break;
                    }
                }
                if (addingMe) {
                    accessRules.push('GET /me');
                }
            }
            this.data.accessRules = accessRules;
        } else {
            this.data.accessRules = ['GET /*', 'POST /*', 'PUT /*', 'DELETE /*'];
        }
        this.data.nichandle = this.data.nichandle.toLowerCase();
        // certCache renamed as certCacheFile, convert old name to new parameter name
        if (this.data.certCache) {
            this.data.certCacheFile = this.data.certCache;
        }
        /**
         * Certificat cache
         */
        if (this.data.certCacheFile || this.data.nichandle) {
            if (!this.data.certCacheFile) {
                this.data.certCacheFile = path.join(os.homedir(), '.ovh');
            }
            if (this.data.nichandle) {
                let stat: fs.Stats | null = null;
                try {
                    stat = fs.statSync(this.data.certCacheFile);
                } catch (e) {
                }
                if (!stat) {
                    try { fs.mkdirSync(this.data.certCacheFile); } catch (e) {
                        throw Error(`failed to create missing certCachedirectory: ${this.data.certCacheFile}`);
                    }
                } else if (!stat.isDirectory()) {
                    throw Error(`certCacheFile: ${this.data.certCacheFile} must be a directory`);
                }
                // replace directory by full path
                const hash = crypto.createHash('md5').update(this.data.accessRules.join('')).digest('hex').substring(0, 8);
                this.data.certCacheFile = path.join(this.data.certCacheFile, `token-${hash}-${this.data.nichandle}.json`);
            }
            let cached = '';
            try {
                cached = readFileSync(this.data.certCacheFile, { encoding: 'utf-8' })
                let data = JSON.parse(cached);
                let { appKey, appSecret, consumerKey } = data;
                this.data.appKey = appKey;
                this.data.appSecret = appSecret;
                this.data.consumerKey = consumerKey;
            } catch { }
        }

        /**
         * Warn default certificat
         */
        if (!apiOptions.appKey && !apiOptions.appSecret) {
            if (!this.data.consumerKey && !apiOptions.accessRules) {
                console.warn(`Initializing Api OVH without appKey / appSecret: using Default Certificat
 provide an accessRules to choose the authorisation you need
 by default I will ask for all rights`);
            }
        }

        /**
         * Custom configuration of the API endpoint
         */
        let { host, port } = apiOptions;
        if (host) {
            this.data.host = host;
            this.data.port = Number(port) || 443;
        } else {
            let selected = endpoints[this.data.endpoint]
            if (!selected)
                throw new Error(`[OVH] Unknown API ${this.data.endpoint}`);
            this.data.host = selected.host;
            this.data.port = Number(selected.port) || 443;
        }
        this.basePath = '/1.0';
        // Declared used API, will be used to check the associated schema
        if (typeof (this.data.appKey) !== 'string' ||
            typeof (this.data.appSecret) !== 'string') {
            throw new Error('[OVH] You should precise an application key / secret');
        }
    }

    get maxRetry(): number {
        return this.data.maxRetry;
    }
    get retrySleep(): number {
        return this.data.retrySleep;
    }
    get timeout(): number {
        return this.data.timeout;
    }
    get certMonitorProvider(): CertMonitorProvider {
        return this.data.certMonitorProvider;
    }
    get consumerKey(): string {
        return this.data.consumerKey;
    }
    set consumerKey(consumerKey: string) {
        this.data.consumerKey = consumerKey;
    }
    get launchBrower(): boolean {
        return this.data.launchBrower;
    }
    /**
     * @deplecated use certCacheFile
     */
    get certCache(): string {
        return this.data.certCacheFile;
    }
    get certCacheFile(): string {
        return this.data.certCacheFile;
    }
    get accessRules(): string[] {
        return this.data.accessRules as string[];
    }
    get appKey(): string {
        return this.data.appKey;
    }
    get appSecret(): string {
        return this.data.appSecret;
    }
    get nichandle(): string {
        return this.data.nichandle;
    }
    get keepUnexpectedCredential(): boolean {
        return this.data.keepUnexpectedCredential;
    }
    get redirectUrl(): string {
        return this.data.redirectUrl;
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
            this.queryCache = new Cache({ slotClass: this.data.slotClass });
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
        throw Error('Please set "saveQuerys" to true to enable this feature in OvhApi constructor.');
    }

    /**
     * stat credential authentification
     * @param redirection optional redirecton for auth page.
     */
    public async queryForCredencial(redirection: string): Promise<OvhCredentialNew> {
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
            const err = e as Error;
            throw new OvhError(this, {
                method,
                path,
                errorCode: 'HTTP_ERROR',
                httpCode: `${e}`,
                message: `failed to request a credential with rule ${JSON.stringify(this.data.accessRules)} ${err.message || err}`
            }, err);
        }
    }

    /**
     * Execute a request on the API
     *
     * @param httpMethod: The HTTP method
     * @param pathTemplate: The request path
     * @param params: The request parameters (passed as query string or body params)
     */
    public request<T>(httpMethod: string, pathTemplate: string, params?: any): Promise<T> {
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
        /**
         * Time drift
         */
        if (this.data.apiTimeDiff === null && pathTemplate !== '/auth/time') {
            try {
                const time = await this.request<number>('GET', '/auth/time', {});
                this.data.apiTimeDiff = time - Math.round(Date.now() / 1000);
            } catch (err) {
                throw new Error(`[OVH] Unable to fetch OVH API time ${(err as Error).message || err}`);
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
            // flush silot for PUT / POST / DELETE ?
        }

        /**
         * build Request
         */
        let options: RequestOptions = {
            host: this.data.host,
            port: this.data.port,
            method,
            path: this.basePath + path,
            timeout: this.timeout,
        };
        /**
         * fill QuerySet if enabled
         */
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
         * Signe all operation except /auth/time or /auth/credential
         */
        if (path !== '/auth/credential' && path !== '/auth/time') {
            const XOvhTimestamp: number = Math.round(Date.now() / 1000) + Number(this.data.apiTimeDiff);
            options.headers['X-Ovh-Timestamp'] = XOvhTimestamp;

            // Sign request
            if (this.data.consumerKey) {
                options.headers['X-Ovh-Consumer'] = this.data.consumerKey;
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
        const rqCtxt = new RequestContext(this, path, pathTemplate, options, reqBody, params);
        return makeRequest(rqCtxt);// end return Query promise
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
            this.data.appSecret,
            this.data.consumerKey,
            httpMethod,
            url,
            body || '',
            String(timestamp)
        ];
        return '$1$' + crypto.createHash('sha1').update(s.join('+')).digest('hex');
    }
}

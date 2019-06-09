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
import { Schema, API } from './schema';
import { RequestOptions } from 'http';
import { endpoints } from './endpoints';
import { OvhParamType, OvhRequestable } from '@ovh-api/common';

type DebugFnc = (...args: any[]) => any;

export interface OvhError {
    errorCode: 'INVALID_CREDENTIAL' | 'NOT_CREDENTIAL' | 'QUERY_TIME_OUT' | 'NOT_GRANTED_CALL';
    httpCode: string;
    message: string;
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
    debug?: boolean | DebugFnc,
    accessRules?: string[] | string;
}

interface CacheApi {
    _path: string;
    _api: API | undefined;
    [key: string]: API | string | CacheApi | undefined;
}

interface AccessRule {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
}

export default class OvhApi implements OvhRequestable {
    appKey: string;
    appSecret: string;
    consumerKey: string | null;
    timeout?: number;
    apiTimeDiff: number | null;
    host: string;
    port: number;
    basePath: string; // '/1.0'
    debug?: DebugFnc;
    warn: DebugFnc;
    usedApi: string[];
    apis: CacheApi;
    apisLoaded: boolean;
    accessRules: string[];

    constructor(params: OvhParams) {
        this.appKey = params.appKey || 'qCLhWaDgfbAkbuzN';
        this.appSecret = params.appSecret || '8moT8ezpp5kaK2mBSEyazP1oQfEvMPu0';
        this.consumerKey = params.consumerKey || null;
        this.timeout = params.timeout;
        this.apiTimeDiff = params.apiTimeDiff || null;
        this.warn = console.log;

        if (params.accessRules) {
            if (typeof (params.accessRules) === 'string')
                this.accessRules = params.accessRules.split(/\s*[,;]\s*/);
            else
                this.accessRules = params.accessRules;
        } else {
            this.accessRules = ['GET /*', 'POST /*', 'PUT /*', 'DELETE /*'];
        }

        if (!params.appKey && !params.appSecret) {
            if (!this.consumerKey && !params.accessRules) {
                this.warn(`Initializing Api OVH without appKey / appSecret: using Default Certificat
provide an accessRules to choose the authorisation you need
by default I will ask for all rights`);
            }
        }

        // Custom configuration of the API endpoint
        let { host, port, endpoint, debug } = params;
        if (host) {
            this.host = host;
            this.port = Number(port) || 443;
        } else {
            endpoint = endpoint || 'ovh-eu';
            let selected = endpoints[endpoint]
            if (!selected)
                throw new Error('[OVH] Unknown API ' + endpoint);
            this.host = selected.host;
            this.port = Number(selected.port) || 443;
        }
        // params.basePath || 
        this.basePath = '/1.0';

        if (typeof (debug) === 'function')
            this.debug = debug;
        if (debug)
            this.debug = console.log;
        else
            this.debug = undefined;
        // Declared used API, will be used to check the associated schema
        this.usedApi = params.apis || [];
        if (Array.isArray(this.usedApi) && this.usedApi.length > 0 && this.usedApi.indexOf('auth') < 0) {
            this.usedApi.push('auth');
        }
        this.apis = <CacheApi>{ _path: '' }
        this.apisLoaded = !this.usedApi.length;
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
    toAccessRules(...rules: string[]): AccessRule[] {
        return <AccessRule[]>rules
            .map(s => s.split(/\s+/))
            .map(([method, path]) => ({ method, path }));
    }

    /**
     * Recursively loads the schemas of the specified used APIs.
     *
     * @param {String} path
     */
    loadSchemas(path: string): Promise<any> {
        let request = { // https://eu.api.ovh.com/1.0/
            host: this.host, // eu.api.ovh.com
            port: this.port, // 443
            path: this.basePath + path // /1.0/
        };

        // Fetch only selected APIs
        if (path === '/') {
            return Promise.all(this.usedApi.map((apiName) => this.loadSchemas(`/${apiName}.json`)))
        }

        // Fetch all APIs
        return this.loadSchemasRequest(request).then((schema: Schema) => {
            schema.apis.map((api: API) => {
                let apiPath = api.path.split('/');
                this.addApi(apiPath, api, this.apis);
            });
        })
    }

    /**
     * Add a fetched schema to the loaded API list
     *
     * @param {Array} apiPath: Splited API path using '/'
     * @param {String} api: API Name
     */
    addApi(apiPath: string[], api: API, apis: CacheApi): void {
        let path = apiPath.shift();
        if (path === '') {
            return this.addApi(apiPath, api, apis);
        }
        if (!path)
            return;
        let selected: CacheApi;
        if (apis[path] == null) {
            selected = <CacheApi>{ _path: `${apis._path}/${path}` };
            apis[path] = selected;
        } else {
            selected = <CacheApi>apis[path];
        }
        if (apiPath.length > 0) {
            return this.addApi(apiPath, api, <CacheApi>apis[path]);
        }
        selected._api = <API>api;
    }

    /**
     * Fetch an API schema
     *
     * @param {Object} options: HTTP request options
     * @param {Function} callback
     */
    loadSchemasRequest(options: https.RequestOptions): Promise<Schema> {
        return new Promise((resolve, reject) => {
            https.get(options, (res) => {
                let body: string = '';
                res.on('data', (chunk: string) => body += chunk)
                    .on('end', () => {
                        if (res.statusCode !== 200) {
                            return reject(
                                Error(`[OVH] Unable to load schema ${options.path}, HTTP response code: ${res.statusCode}`));
                        }
                        try {
                            return resolve(<Schema>JSON.parse(body));
                        } catch (e) {
                            return reject(
                                Error(`[OVH] Unable to parse the schema: ${options.path}`));
                        }
                    });
            })
                .on('error', (err) => reject(`[OVH] Unable to fetch the schemas: ${err}`));
        })
    }

    /**
     * Generates warns from the loaded API schema when processing a request
     *
     * A warn is generated when the API schema is loaded and:
     *  - The API method does not exists
     *  - The API method is not available with the provided httpMethod
     *  - The API method is tagged as deprecated in the schema
     *
     * The function called can be customzied by providing a function using the
     * 'warn' parameter when instancing the module. Default function used is
     * 'console.warn'.
     *
     * @param {String} httpMethod
     * @param {String} pathStr
     */
    warnsRequest(httpMethod: string, pathStr: string) {
        let path: string[] = pathStr.split('/'),
            api = this.apis;

        while (path.length > 0) {
            let pElem: string = <string>path.shift();
            if (pElem === '') {
                continue;
            }

            if (api[pElem] != null) {
                api = <CacheApi>api[pElem];
                continue;
            }

            let keys: string[] | null = Object.keys(api);
            for (let i = 0; i < keys.length; ++i) {
                if (keys[i].charAt(0) === '{') {
                    api = <CacheApi>api[keys[i]];
                    keys = null;
                    break;
                }
            }

            if (keys) {
                return this.warn(`[OVH] Your call ${pathStr} was not found in the API schemas.`);
            }
        }

        if (!api._api || !api._api.operations) {
            return this.warn(`[OVH] Your call ${pathStr} was not found in the API schemas.`);
        }

        for (let i = 0; i < api._api.operations.length; ++i) {
            if (api._api.operations[i].httpMethod === httpMethod) {
                if (api._api.operations[i].apiStatus.value === 'DEPRECATED') {
                    let status = api._api.operations[i].apiStatus;
                    return this.warn(`[OVH] Your API call ${pathStr} is tagged DEPRECATED since ${status.deprecatedDate} and will deleted on ${status.deletionDate}.,
You can replace it with ${status.replacement}`);
                }

                if (typeof (this.consumerKey) !== 'string' && !api._api.operations[i].noAuthentication) {
                    return this.warn(`[OVH] The API call ${pathStr}requires an authentication with a consumer key.`
                    );
                }

                return true;
            }
        }

        return this.warn(
            '[OVH] The method ' + httpMethod + ' for the API call ' +
            pathStr + ' was not found in the API schemas.'
        );
    }

    /**
     * Execute a request on the API
     *
     * @param {String} httpMethod: The HTTP method
     * @param {String} path: The request path
     * @param {Object} params: The request parameters (passed as query string or
     *                         body params)
     * @param {Function} callback
     * @param {Object} refer: The parent proxied object
     */
    async request(httpMethod: string, path: string, params?: any): Promise<any> {
        const ovhEngine = this;

        // Schemas
        if (!ovhEngine.apisLoaded) {
            await ovhEngine.loadSchemas('/')
            ovhEngine.apisLoaded = true;
        }

        // Time drift
        if (ovhEngine.apiTimeDiff === null && path !== '/auth/time') {
            try {
                const time: number = await ovhEngine.request('GET', '/auth/time', {})
                ovhEngine.apiTimeDiff = time - Math.round(Date.now() / 1000);
            } catch (err) {
                throw '[OVH] Unable to fetch OVH API time' + err.message
            }

        }

        // Potential warnings
        if (Object.keys(ovhEngine.apis).length > 1) {
            ovhEngine.warnsRequest(httpMethod, path);
        }
        let path0 = path;
        let m: RegExpMatchArray | null = null;
        while (m = path.match(/{([^}]+)}/)) {
            let val = params[m[1]];
            if (val === undefined)
                return <Promise<any>>Promise.reject(`${m[1]} param must be provide to ${path0}`);
            delete params[m[1]];
            path = path.replace(m[0], String(val));
        }
        let options: RequestOptions = {
            host: ovhEngine.host,
            port: ovhEngine.port,
            method: httpMethod,
            path: ovhEngine.basePath + path
        };

        // Headers
        options.headers = {
            'Content-Type': 'application/json',
            'X-Ovh-Application': ovhEngine.appKey,
        };

        // Remove undefined values
        for (let k in params) {
            if (params.hasOwnProperty(k) && params[k] == null) {
                delete params[k];
            }
        }

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
        // signe operation if /auth service
        if (path !== '/auth/credential' && path !== '/auth/time') {
            const XOvhTimestamp: number = Math.round(Date.now() / 1000) + Number(ovhEngine.apiTimeDiff);
            options.headers['X-Ovh-Timestamp'] = XOvhTimestamp;

            // Sign request
            if (typeof (ovhEngine.consumerKey) === 'string') {
                options.headers['X-Ovh-Consumer'] = ovhEngine.consumerKey;
                options.headers['X-Ovh-Signature'] = ovhEngine.signRequest(
                    httpMethod, `https://${options.host}${options.path}`,
                    reqBody, XOvhTimestamp
                );
            }
        }

        if (ovhEngine.debug) {
            ovhEngine.debug(`[OVH] API call: ${options.method} ${options.path} ${reqBody}`);
        }
        // retry the Query thith a new cert
        const waitForCertValidation = async (consumerKey: string, validationUrl: string) => new Promise((done) => {
            // set consumerKey
            ovhEngine.consumerKey = consumerKey;
            console.log(`[OVH] MISSING_CREDENTIAL issue a new one: ${consumerKey}\nValidate this cert with this url to continue:\n${validationUrl}`)
            let pass = 0;
            const checkCert = () => ovhEngine.request('GET', '/auth/currentCredential')
                .then(({ status }) => {
                    if (status === 'validated') {
                        console.log('consumerKey Authorized!')
                        done();
                        return false;
                    }
                    setTimeout(checkCert, 2000);
                }, ({ errorCode }) => {
                    // errorCode:"INVALID_CREDENTIAL"
                    // httpCode:"403 Forbidden"
                    // message:"This credential is not valid"
                    setTimeout(checkCert, 2000);
                    if (++pass % 15 == 0) {
                        if (errorCode === 'MISSING_CREDENTIAL')
                            console.log(`waiting for cert validation here: ${validationUrl}`)
                        else
                            console.log(`\n${errorCode}: ${consumerKey} url:\n${validationUrl}`)
                    }
                })
            setTimeout(checkCert, 2000)
        });

        const handleResponse = async (res: IncomingMessage, body: string) => {
            let response;
            if (body.length > 0) {
                try {
                    response = JSON.parse(body);
                } catch (e) {
                    throw '[OVH] Unable to parse JSON reponse';
                }
            } else {
                response = null;
            }

            if (ovhEngine.debug) {
                ovhEngine.debug(`[OVH] API response to ${options.method} ${options.path}: ${body}`);
            }
            if (res.statusCode === 200) {
                return response;
            }

            const error: OvhError = <OvhError>response;
            if (error.errorCode === 'INVALID_CREDENTIAL' || error.message === 'You must login first') {
                if (ovhEngine.consumerKey === null) {
                    const rules = { accessRules: ovhEngine.toAccessRules.apply(this, ovhEngine.accessRules) };
                    let consumerKey, validationUrl;
                    try {
                        const credential = await ovhEngine.request('POST', '/auth/credential', rules);
                        consumerKey = credential['consumerKey'];
                        validationUrl = credential['validationUrl'];
                    } catch (e) {
                        throw `failed to request a credential with rule ${JSON.stringify(ovhEngine.accessRules)} ${e.message || e}`;
                    }
                    await waitForCertValidation(consumerKey, validationUrl);
                    return ovhEngine.request(httpMethod, path, params);
                }
                throw response;
            }
            if (response.errorCode)
                throw response;
            if (!response.message)
                throw 'ErrorCode ' + res.statusCode;
            throw res.statusCode + ': ' + response.message;
        }
        // Promisify https.request
        return new Promise((resolve, reject) => {
            let req = https.request(options, (res: IncomingMessage) => {
                let body = '';
                res.on('data', (chunk) => body += chunk)
                    .on('end', () => handleResponse(res, body).then(resolve, reject))
            }).on('error', (e) => reject(e.message || e));

            // mocked socket has no setTimeout
            if (typeof (ovhEngine.timeout) === 'number') {
                req.on('socket', (socket) => {
                    socket.setTimeout(ovhEngine.timeout);
                    if (socket._events.timeout != null) {
                        socket.on('timeout', () => req.abort());
                    }
                });
            }
            if (reqBody != null) {
                req.write(reqBody);
            }
            req.end();
        });// end return Query promise
    }

    /**
     * Execute a request on the API with promise
     *
     * @param {String} httpMethod: The HTTP method
     * @param {String} path: The request path
     * @param {Object} params: The request parameters (passed as query string or
     *                         body params)
     */
    requestPromised(httpMethod: string, path: string, params?: OvhParamType) {
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
    signRequest(httpMethod: string, url: string, body: string, timestamp: Number) {
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

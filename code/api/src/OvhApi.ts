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
import { endpoints } from './endpoints.js';
import { readFileSync } from 'node:fs';
import { EventEmitter } from 'node:events';
import type { OvhRequestable, OvhParamType, ICacheOptions, ICacheSilot, CacheAction } from '@ovh-api/common';
import type { HttpMethod, AccessRule, OvhCredentialNew, ApiRequestOptions, OvhCertSave } from './OVHInterfaces.js';
import { type CertMonitorProvider, stdOutCertMonitorProvider } from './certMonitor.js';
import { Cache } from './Cache.js';
import type { OvhParams, OvhParamsFull } from './OvhParams.js';
import { RequestContext } from './helper.js';
// import { makeRequest } from './requestFetch.js';
import { makeRequest } from './requestHandler.js';
import { OvhError } from './OvhError.js';
import * as path from 'node:path';
import * as os from 'node:os';
import * as fs from 'node:fs';
import * as crypto from 'node:crypto';
// import { createHash } from 'node:crypto';

const OpenPath = new Set([
    '/auth/credential',
    '/auth/time',
    '/analytics/capabilities/platforms',
    '/cdn/dedicated/pops',
    '/cdn/dedicated/pops/*',
    '/cloud/subsidiaryPrice',
    '/connectivity/eligibility/search/buildingDetails',
    '/connectivity/eligibility/search/buildings',
    '/connectivity/eligibility/search/buildingsByLine',
    '/connectivity/eligibility/search/cities',
    '/connectivity/eligibility/search/lines',
    '/connectivity/eligibility/search/meetings',
    '/connectivity/eligibility/search/streetNumbers',
    '/connectivity/eligibility/search/streets',
    '/connectivity/eligibility/test',
    '/connectivity/eligibility/test/address',
    '/connectivity/eligibility/test/building',
    '/connectivity/eligibility/test/line',
    '/connectivity/eligibility/test/otp',
    '/connectivity/maintenance/workPlanned/public',
    '/connectivity/monitoring/genericIncident/public',
    '/contact/form',
    '/contact/form/send',
    '/dedicated/installationTemplate',
    '/dedicated/installationTemplate/templateInfos',
    '/dedicated/installationTemplate/*',
    '/dedicated/server/availabilities',
    '/dedicated/server/availabilities/raw',
    '/dedicated/server/datacenter/availabilities',
    '/dedicated/server/datacenter/availabilities/raw',
    '/dedicated/server/osAvailabilities',
    '/dedicatedCloud/commercialRange',
    '/dedicatedCloud/commercialRange/*',
    '/domain/configurationRule',
    '/domain/data/claimNotice',
    '/domain/data/extension',
    '/email/domain/mailingListLimits',
    '/hosting/web/localSeo/directoriesList',
    '/hosting/web/localSeo/emailAvailability',
    '/hosting/web/localSeo/visibilityCheck',
    '/hosting/web/localSeo/visibilityCheckResult',
    '/hosting/web/moduleList',
    '/hosting/web/moduleList/{id}',
    '/hosting/web/offerCapabilities',
    '/ip/campus',
    '/me/passwordRecover',
    '/me/geolocation',
    '/newAccount',
    '/newAccount/area',
    '/newAccount/contracts',
    '/newAccount/corporationType',
    '/newAccount/countries',
    '/newAccount/creationRules',
    '/newAccount/legalform',
    '/newAccount/rules',
    '/nutanix/availableVersions',
    '/nutanix/requirements',
    '/order/cart/*',
    '/order/cart/*/analytics',
    '/order/cart/*/analytics/options',
    '/order/cart/*/anthos',
    '/order/cart/*/anthos/options',
    '/order/cart/*/baremetalServers',
    '/order/cart/*/baremetalServers/options',
    '/order/cart/*/bringYourOwnIp',
    '/order/cart/*/cdn',
    '/order/cart/*/cdn/options',
    '/order/cart/*/cephaas',
    '/order/cart/*/cephaas/options ',
    '/order/cart/*/cloud',
    '/order/cart/*/cloud/options',
    '/order/cart/*/cloudDB',
    '/order/cart/*/cloudweb',
    '/order/cart/*/cloudweb/options',
    '/order/cart/*/coupon',
    '/order/cart/*/csp2',
    '/order/cart/*/csp2/options',
    '/order/cart/*/dbaasTimeseries',
    '/order/cart/*/dedicated',
    '/order/cart/*/dedicated/options',
    '/order/cart/*/dedicatedCloud',
    '/order/cart/*/dedicatedCloud/options',
    '/order/cart/*/dedicatedDirectSales',
    '/order/cart/*/dedicatedDirectSales/options',
    '/order/cart/*/dedicatedLabs',
    '/order/cart/*/dedicatedLabs/options',
    '/order/cart/*/dedicatedLegacy',
    '/order/cart/*/dedicatedLegacy/options',
    '/order/cart/*/dedicatedPciVps',
    '/order/cart/*/dedicatedPciVps/options',
    '/order/cart/*/dedicatedReseller',
    '/order/cart/*/dedicatedReseller/options',
    '/order/cart/*/deskaas',
    '/order/cart/*/discover',
    '/order/cart/*/discover/options',
    '/order/cart/*/dns',
    '/order/cart/*/dns/options',
    '/order/cart/*/domain',
    '/order/cart/*/domain/options',
    '/order/cart/*/domainPacks',
    '/order/cart/*/domainRestore',
    '/order/cart/*/domainTransfer',
    '/order/cart/*/domainTransfer/options',
    '/order/cart/*/eco',
    '/order/cart/*/eco/options',
    '/order/cart/*/emailDomain',
    '/order/cart/*/emailpro',
    '/order/cart/*/emailpro/options',
    '/order/cart/*/exchange',
    '/order/cart/*/exchange/options',
    '/order/cart/*/exchangeEnterprise',
    '/order/cart/*/exchangeEnterprise/options',
    '/order/cart/*/hostingReseller',
    '/order/cart/*/ip',
    '/order/cart/*/ip/options',
    '/order/cart/*/ipLoadbalancing',
    '/order/cart/*/ipLoadbalancing/options',
    '/order/cart/*/ispPublic',
    '/order/cart/*/ispPublic/options',
    '/order/cart/*/ispReseller',
    '/order/cart/*/ispReseller/options',
    '/order/cart/*/item',
    '/order/cart/*/item/{itemId}',
    '/order/cart/*/item/{itemId}/configuration',
    '/order/cart/*/item/{itemId}/configuration/{configurationId}',
    '/order/cart/*/item/{itemId}/requiredConfiguration',
    '/order/cart/*/kubernetes',
    '/order/cart/*/kubernetes/options',
    '/order/cart/*/licenseCloudLinux',
    '/order/cart/*/licensecPanel',
    '/order/cart/*/licenseDirectadmin',
    '/order/cart/*/licensePlesk',
    '/order/cart/*/licensePlesk/options',
    '/order/cart/*/licenseSqlServer',
    '/order/cart/*/licenseVirtuozzo',
    '/order/cart/*/licenseWindows',
    '/order/cart/*/licenseWorklight',
    '/order/cart/*/logs',
    '/order/cart/*/logs/options',
    '/order/cart/*/managedServices',
    '/order/cart/*/managedServices/options',
    '/order/cart/*/metrics',
    '/order/cart/*/metrics/options',
    '/order/cart/*/microsoft',
    '/order/cart/*/microsoft/options',
    '/order/cart/*/nasha',
    '/order/cart/*/nasha/options',
    '/order/cart/*/netapp',
    '/order/cart/*/netapp/options',
    '/order/cart/*/nutanix',
    '/order/cart/*/nutanix/options',
    '/order/cart/*/office365',
    '/order/cart/*/office365/options',
    '/order/cart/*/office365Prepaid',
    '/order/cart/*/office365Prepaid/options',
    '/order/cart/*/officePrepaid',
    '/order/cart/*/officePrepaid/options',
    '/order/cart/*/otb',
    '/order/cart/*/otb/options',
    '/order/cart/*/ovhCloudConnect',
    '/order/cart/*/paasmon',
    '/order/cart/*/packsProfessionalServices',
    '/order/cart/*/packsProfessionalServices/options',
    '/order/cart/*/powerHosting',
    '/order/cart/*/privateCloud',
    '/order/cart/*/privateCloud/options',
    '/order/cart/*/privateCloudCDI',
    '/order/cart/*/privateCloudCDI/options',
    '/order/cart/*/privateCloudDC',
    '/order/cart/*/privateCloudDC/options',
    '/order/cart/*/privateCloudEnterprise',
    '/order/cart/*/privateCloudEnterprise/options',
    '/order/cart/*/privateCloudReseller',
    '/order/cart/*/privateCloudReseller/options',
    '/order/cart/*/privateCloudResellerEnterprise',
    '/order/cart/*/privateCloudResellerEnterprise/options',
    '/order/cart/*/privateCloudSDDC',
    '/order/cart/*/privateCloudSDDC/options',
    '/order/cart/*/privateSQL',
    '/order/cart/*/reseller',
    '/order/cart/*/sharepoint',
    '/order/cart/*/sharepoint/options',
    '/order/cart/*/sms',
    '/order/cart/*/sslComodo',
    '/order/cart/*/sslComodo/options',
    '/order/cart/*/sslGateway',
    '/order/cart/*/sslGateway/options',
    '/order/cart/*/summary',
    '/order/cart/*/support',
    '/order/cart/*/telephony',
    '/order/cart/*/telephony/options',
    '/order/cart/*/vco',
    '/order/cart/*/vdi',
    '/order/cart/*/vdi/options',
    '/order/cart/*/veeamcc',
    '/order/cart/*/veeamcc/options',
    '/order/cart/*/veeamEnterprise',
    '/order/cart/*/veeamEnterprise/options',
    '/order/cart/*/vps',
    '/order/cart/*/vps/options',
    '/order/cart/*/vrack',
    '/order/cart/*/vrackReseller',
    '/order/cart/*/webHosting',
    '/order/cart/*/webHosting/options',
    '/order/cart/*/webPaaS',
    '/order/cart/*/webPaaS/optionsPost',
    '/order/cart/*/xdsl',
    '/order/cart/*/xdsl/options',
    '/order/catalog/formatted',
    '/order/catalog/formatted/bringYourOwnIp',
    '/order/catalog/formatted/cloud',
    '/order/catalog/formatted/dedicated',
    '/order/catalog/formatted/deskaas',
    '/order/catalog/formatted/discover',
    '/order/catalog/formatted/ip',
    '/order/catalog/formatted/licenseCloudLinux',
    '/order/catalog/formatted/licensecPanel',
    '/order/catalog/formatted/licenseDirectadmin',
    '/order/catalog/formatted/licensePlesk',
    '/order/catalog/formatted/licenseSqlServer',
    '/order/catalog/formatted/licenseVirtuozzo',
    '/order/catalog/formatted/licenseWindows',
    '/order/catalog/formatted/licenseWorklight',
    '/order/catalog/formatted/logs',
    '/order/catalog/formatted/privateCloud',
    '/order/catalog/formatted/privateCloudCDI',
    '/order/catalog/formatted/privateCloudDC',
    '/order/catalog/formatted/privateCloudEnterprise',
    '/order/catalog/formatted/privateCloudSDDC',
    '/order/catalog/formatted/reseller',
    '/order/catalog/formatted/vps',
    '/order/catalog/public/anthos',
    '/order/catalog/public/baremetalServers',
    '/order/catalog/public/cloud',
    '/order/catalog/public/cloudDB',
    '/order/catalog/public/dns',
    '/order/catalog/public/domain',
    '/order/catalog/public/eco',
    '/order/catalog/public/emailDomain',
    '/order/catalog/public/emailpro',
    '/order/catalog/public/exchange',
    '/order/catalog/public/licensecPanel',
    '/order/catalog/public/logs',
    '/order/catalog/public/nasha',
    '/order/catalog/public/netapp',
    '/order/catalog/public/nutanix',
    '/order/catalog/public/office365Prepaid',
    '/order/catalog/public/officePrepaid',
    '/order/catalog/public/ovhCloudConnect',
    '/order/catalog/public/packsProfessionalServices',
    '/order/catalog/public/privateCloud',
    '/order/catalog/public/privateCloudEnterprise',
    '/order/catalog/public/privateSQL',
    '/order/catalog/public/telephony',
    '/order/catalog/public/vps',
    '/order/catalog/public/webHosting',
    '/order/catalog/public/webPaaS',
    '/sms/rates/destinations',
    '/sms/rates/packs',
    '/sslGateway/availableZones',
    '/sslGateway/eligibility',
    '/telephony/directories/availableZipCodes',
    '/telephony/directories/cities',
    '/telephony/fax/offers',
    '/telephony/line/offer/phones',
    '/telephony/line/offers',
    '/telephony/number/detailedZones',
    '/telephony/number/ranges',
    '/telephony/number/specificNumbers',
    '/telephony/number/zones',
    '/telephony/spare/brands',
    '/vps/datacenter',
    '/vps/order/rule/datacenter',
    '/vps/order/rule/osChoices',
    '/xdsl/eligibility/search/buildings',
    '/xdsl/eligibility/search/cities',
    '/xdsl/eligibility/search/fiberStreets',
    '/xdsl/eligibility/search/streetNumbers',
    '/xdsl/eligibility/test/fiber/building',
    '/xdsl/incidents',
    '/xdsl/incidents/*',
]);

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
    public readonly basePath: string;
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

    public get host(): string {
        return this.data.host;
    }

    public get port(): number {
        return this.data.port;
    }

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
            let data: OvhCertSave | null = null;
            try {
                const cached = readFileSync(this.data.certCacheFile, { encoding: 'utf-8' })
                data = JSON.parse(cached) as OvhCertSave;
            } catch { }
            if (data) {
                let { appKey, appSecret, consumerKey, rules } = data;
                if (rules) {
                    const savedRules = new Set(rules.map(r => `${r.method} ${r.path}`));
                    const reqRules = (this.data.accessRules as string[])
                    for (const r of reqRules) {
                        if (!savedRules.has(r))
                            throw Error(`saved credential in ${this.data.certCacheFile} do not contains rules: ${r}`);
                    }
                }
                this.data.appKey = appKey;
                this.data.appSecret = appSecret;
                this.data.consumerKey = consumerKey;
            }
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
         * fill QuerySet if enabled
         * used to list used entry point
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

        /**
         * build Request
         */
        let options: ApiRequestOptions = {
            host: this.host,
            port: this.port,
            method,
            path: this.basePath + path,
            timeout: this.timeout,
            headers: {
                'Content-Type': 'application/json',
                'X-Ovh-Application': this.appKey,
            } as { [key: string]: string }
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
                options.headers['Content-Length'] = reqBody.length.toString();
            } else {
                options.path += `?${querystring.stringify(params)}`;
            }
        }

        /**
         * Signe all operation except /auth/time or /auth/credential
         */
        // if (path !== '/auth/credential' && path !== '/auth/time') {
        if (!OpenPath.has(pathTemplate)) {
            const XOvhTimestamp: number = Math.round(Date.now() / 1000) + Number(this.data.apiTimeDiff);
            options.headers['X-Ovh-Timestamp'] = XOvhTimestamp.toString();

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

import OvhApi from ".";
import { HttpMethod, OvhCredential, OvhCredentialNew } from "./OVHInterfaces.js";
import * as fs from 'node:fs';
import { EOL } from 'node:os';
import { RequestOptions } from "node:https";
import { ICacheSilot } from "@ovh-api/common";
import { OvhError } from "./OvhError.js";
// import open from 'open';

/**
 * simple wait promise generator
 * @param duration wime to wait in ms
 */
export const wait = (duration: number) => new Promise(resolve => setTimeout(() => (resolve(null)), duration)) as Promise<null>;

/** 
 * store certificat in disk cache
 */
const saveCert = async (api: OvhApi, req: OvhCredential, consumerKey: string) => {
    const { certCache } = api;
    if (!certCache)
        return;
    const { appKey, appSecret } = api;
    const { applicationId, creation, credentialId, expiration, rules } = req;
    const jsonData = JSON.stringify({ applicationId, appKey, appSecret, consumerKey, credentialId, rules, creation, expiration }, null, 2) + EOL;
    try {
        await fs.promises.writeFile(certCache, jsonData, { encoding: 'utf-8', mode: 0o600 })
    } catch (err) {
        api.emit('warningMsg', `Failed to write in ${certCache} ${err}`);
    }

}

// retry the Query thith a new cert
// updateset consumerKey
export const waitForCertValidation = async (api: OvhApi, newCert: OvhCredentialNew): Promise<boolean> => {
    const certMonitor = api.certMonitorProvider(api, newCert);
    const { consumerKey, validationUrl } = newCert;
    api.consumerKey = consumerKey;
    if (api.launchBrower)
        try {
            // try to open a brower, ignoring error
            // import open from 'open';
            const open = require('open');
            await open(validationUrl, { wait: false });
        } catch (e) {
            // exception if used in browser
            // Try to open a popup
            try {
                if (window)
                    window.open(validationUrl);
            } catch (e) {
                // ESM Build crash on accessing non existing global
            }
        }
    let pass = 0;

    await wait(2000);
    while (true) {
        try {
            const req = await api.request<OvhCredential>('GET', '/auth/currentCredential');
            const { status } = req;
            if (status === 'validated') {
                if (api.nichandle) {
                    const { nichandle } = await api.request<{ nichandle: string }>('GET', '/me');
                    if (nichandle.toLowerCase() !== api.nichandle) {
                        if (!api.keepUnexpectedCredential) {
                            // no need to ask for extra auth to access logout fnc
                            await api.request('POST', '/auth/logout');
                        } else {
                            await saveCert(api, req, consumerKey);
                        }
                        throw Error(`Unexpected auth user you should login with ${api.nichandle} but you use ${nichandle}`);
                    }
                }
                await saveCert(api, req, consumerKey);
                return true;
            }
        } catch ({ errorCode }) {
            if (errorCode === 'QUERY_TIME_OUT') {
                return false;
            }
            await certMonitor.notValid(errorCode as string, ++pass);
            await wait(2000);
        }
    }
};

export class RequestContext {
    retryCnt = 1;
    maxRetry: number;
    retrySleep: number;
    timeout: number;
    t0 = new Date().getTime();
    // currently not working.
    certRenew = 0;
    // TODO fill silot
    public cacheSilot: ICacheSilot | undefined;

    get method(): HttpMethod {
        return this.options.method as HttpMethod;
    }

    // get path(): string {
    //     return this.options.path as string;
    // }

    constructor(public api: OvhApi, public path: string, public pathTemplate: string, public options: RequestOptions, public reqBody: string, public params?: { [key: string]: any }) {
        this.maxRetry = api.maxRetry;
        this.retrySleep = api.retrySleep;
        this.timeout = api.timeout;
    }

    emitDebug(body: string) {
        if (this.api.listenerCount('debug')) {
            this.api.emit('debug', `[OVH] API response to ${this.method} ${this.path}: ${body}`);
        }
    }

    emitWarn(statusCode: number, error?: Error) {
        const { retryCnt, maxRetry, method, path } = this;
        this.api.emit('warning', { retryCnt, maxRetry, method, path, statusCode, error });
    }

    async prepareRetry(statusCode: number, error?: Error): Promise<void> {
        this.emitWarn(statusCode, error);
        this.retryCnt++;
        await this.wait();
    }

    canRetry(): boolean {
        return this.retryCnt <= this.maxRetry;
    }

    canIssueNewCert(): boolean {
        return this.certRenew < 2;
    }

    certIssued(): void {
        this.certRenew++;
        if (this.api.updatingCertResolve) {
            this.api.updatingCert = null;
            // notify new issued cert
            this.api.updatingCertResolve();
        }
    }

    wait(): Promise<null> {
        return wait(this.retrySleep * this.retryCnt);
    }

    async renewCert(): Promise<void> {
        const { api } = this;
        if (!api.updatingCert) {
            api.updatingCert = new Promise((resolve) => { api.updatingCertResolve = resolve });
            let newCert: OvhCredentialNew;
            try {
                newCert = await api.queryForCredencial(this.api.redirectUrl)
            } catch (e) {
                const err = e as Error;
                // other unised headers: X-IPLB-Instance: number
                // X-Iplb-Request-Id: string
                // X-IPLB-Request-ID: string
                const XOvhQueryid = '';// `${response.headers['X-Ovh-Queryid']}`;
                throw new OvhError(
                    this.api,
                    {
                        method: this.method,
                        path: this.path,
                        errorCode: 'INVALID_CREDENTIAL',
                        httpCode: `Renew Cert failed after failed Query ${this.maxRetry} ${this.path}`,
                        message: `Renew Cert failed after failed Query ${this.maxRetry} ${this.path}`,
                        // httpCode: `${statusCode} ${statusMessage}`,
                        // message: `failed to request a credential with rule ${JSON.stringify(ctxt.api.accessRules)} ${err.message || err}`,
                    }, err, XOvhQueryid);
            }
            for (let i = 0; i < 3; i++) {
                if (await waitForCertValidation(api, newCert)) {
                    this.certIssued();
                    return;
                }
            }
            this.certIssued();
            throw new Error('All token renewal atemptes failed!');
        } else {
            await api.updatingCert;
        }
    }
}
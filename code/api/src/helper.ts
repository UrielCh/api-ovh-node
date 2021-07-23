import OvhApi from ".";
import { HttpMethod, OvhCredential, OvhCredentialNew } from "./OVHInterfaces";
import fs from 'fs';
import { EOL } from 'os';
import { RequestOptions } from "https";
import { ICacheSilot } from "@ovh-api/common";
import { OvhError } from "./OvhError";

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
export const waitForCertValidation = async (api: OvhApi, newCert: OvhCredentialNew): Promise<void> => {
    const certMonitor = api.certMonitorProvider(api, newCert);
    const { consumerKey, validationUrl } = newCert;
    api.consumerKey = consumerKey;
    if (api.launchBrower)
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
            const req = await api.request('GET', '/auth/currentCredential') as OvhCredential;
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
                return undefined;
            }
        } catch ({ errorCode }) {
            await certMonitor.notValid(errorCode, ++pass);
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

    get path(): string {
        return this.options.path as string;
    }

    constructor(public api: OvhApi, public options: RequestOptions, public reqBody: string, public params?: { [key: string]: any }) {
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
                newCert = await api.queryForCredencial()
            } catch (e) {
                // other unised headers: X-IPLB-Instance: number
                // X-Iplb-Request-Id: string
                // X-IPLB-Request-ID: string
                const XOvhQueryid = '';// `${response.headers['X-Ovh-Queryid']}`;
                throw new OvhError({
                    method: this.method,
                    path: this.path,
                    errorCode: 'INVALID_CREDENTIAL',
                    httpCode: `Renew Cert failed after failed Query ${this.maxRetry} ${this.path}`,
                    message: `Renew Cert failed after failed Query ${this.maxRetry} ${this.path}`,
                    // httpCode: `${statusCode} ${statusMessage}`,
                    // message: `failed to request a credential with rule ${JSON.stringify(ctxt.api.accessRules)} ${e.message || e}`,
                }, e, XOvhQueryid);
            }
            await waitForCertValidation(api, newCert);
            this.certIssued();
        } else {
            await api.updatingCert;
        }
    }
}
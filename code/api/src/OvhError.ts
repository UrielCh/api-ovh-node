import OvhApi from ".";
import { HttpMethod } from "./OVHInterfaces";


export type OvhErrorCode = 'INVALID_CREDENTIAL' | 'NOT_CREDENTIAL' | 'QUERY_TIME_OUT' | 'NOT_GRANTED_CALL' | 'HTTP_ERROR' | 'NETWORK_ERROR';

/**
 * data used to create an Exception
 */
 export interface IOvhError {
    method: HttpMethod;
    path: string;
    errorCode: OvhErrorCode;
    httpCode: string;
    message: string;
}

function improveErrorMessage(api: OvhApi, error: IOvhError) {
    let message = error.message;
    // if (error.errorCode === 'HTTP_ERROR') {
    //     error.message = `${error.httpCode} ${error.message}`;
    // }
    if (error.errorCode === 'NOT_GRANTED_CALL' && api) {
        message = `${message}\r\n\r\nAccessRules:\r\n${api.accessRules.join(', ')}`;
        if (api.certCacheFile)
            message += `\r\n\r\nCert available in: ${api.certCacheFile}`;
    }
    return message;
}

/**
 * Api Class used for all errors
 */
export class OvhError extends Error implements IOvhError {
    method: HttpMethod;
    path: string;
    errorCode: OvhErrorCode;
    httpCode: string;
    parent?: Error;
    XOvhQueryid?: string

    constructor(private _api: OvhApi, m: IOvhError, parent?: Error, XOvhQueryid?: string) {
        super(improveErrorMessage(_api, m));
        this.method = m.method;
        this.path = m.path;
        this.errorCode = m.errorCode;
        this.httpCode = m.httpCode;
        if (parent) {
            this.parent = parent;
            if (parent.stack)
                this.stack = this.stack + '\nFrom previous ' + parent.stack.split('\n').slice(0, 2).join('\n') + '\n'
            else if (typeof parent == "string")
                this.stack = parent + '\n' + this.stack;
        }
        if (XOvhQueryid)
            this.XOvhQueryid = XOvhQueryid;
        Object.setPrototypeOf(this, OvhError.prototype);
    }

    get api(): OvhApi {
        return this._api;
    }

    get certCacheFile(): string {
        return this.api.certCache;
    }

    get accessRules(): string[] {
        return this.api.accessRules;
    }
}

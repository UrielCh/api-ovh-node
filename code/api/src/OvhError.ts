import { HttpMethod } from "./OVHInterfaces";

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
    XOvhQueryid?: string

    constructor(m: IOvhError, parent?: Error, XOvhQueryid?: string) {
        super(m.message);
        this.method = m.method;
        this.path = m.path;
        this.errorCode = m.errorCode;
        this.httpCode = m.httpCode;
        // this.parent = parent;
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
}

export { CertMonitorProvider, CertMonitor } from './certMonitor.js';
export { OvhCredentialNew } from './OVHInterfaces.js'
import { RequestContext } from './helper.js';
import { IOvhError, OvhError } from './OvhError.js';

export const makeRequest = async (ctxt: RequestContext): Promise<any> => {
    const { api, timeout, method, options, reqBody, cacheSilot } = ctxt;
    const { headers, path } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    let statusCode = 0;
    let statusMessage = 'n/a';
    let error: IOvhError | null = null;
    // const id = setTimeout(() => controller.abort(), 1);
    try {
        const url = `https://${api.host}:${api.port}${path}`;
        const opt: RequestInit = {
            method, headers, cache: 'no-cache', redirect: 'manual',
            signal: controller.signal
        };
        clearTimeout(id);
        if (reqBody)
            opt.body = reqBody;
        const resp = await fetch(url, opt)
        const body = await resp.text();
        let responseData: any;
        statusCode = resp.status;
        statusMessage = resp.statusText;

        if (body && body.length > 0) {
            try {
                responseData = JSON.parse(body);
            } catch (e) {
                throw new OvhError(
                    ctxt.api,
                    {
                        method,
                        path: ctxt.path,
                        errorCode: 'HTTP_ERROR',
                        httpCode: `${statusCode} ${statusMessage}`,
                        message: `[OVH] Unable to parse ${method} ${path} JSON reponse:${responseData}`
                    }, e as Error);
            }
        } else {
            responseData = {};
        }
        // success
        if (statusCode && statusCode >= 200 && statusCode < 300) {
            if (cacheSilot) {
                if (method === 'GET')
                    await cacheSilot.store(path, responseData, body.length);
                else {
                    await cacheSilot.discard(path);
                    if (method === 'DELETE') {
                        await cacheSilot.discard(path.replace(/\/[^/]+$/, ''));
                    }
                }
            }
            return responseData;
        }

        error = responseData as IOvhError;
    } catch (e) {
        if ((e as Error).name === 'AbortError') {
            throw new OvhError(
                ctxt.api,
                {
                    method,
                    path: ctxt.path,
                    httpCode: '',
                    errorCode: 'QUERY_TIME_OUT',
                    message: (e as Error).message,
                }, e as Error)
        }
        debugger;
        console.log(e, 'ctxt.path:', ctxt.path); //   code: 'UND_ERR_SOCKET',
        throw new OvhError(
            ctxt.api,
            {
                method,
                path: ctxt.path,
                httpCode: '',
                errorCode: 'NETWORK_ERROR',
                message: (e as Error).message,
            }, e as Error)
    }
    if (!error) {
        // should not occure
        error = {
            method, path, errorCode: "HTTP_ERROR",
            httpCode: '',
            message: 'error',
        }
    }
    /**
     * Fist login
     */
    if (error.message === 'You must login first') {
        if (!ctxt.canIssueNewCert())
            throw new OvhError(ctxt.api, error);
        await ctxt.renewCert();
        // Restart restart reseting context, so retry count return to 0.
        // certRenew also
        // TODO fix certRenew should not be reset to 0
        return ctxt.api.doRequest(method, path, ctxt.pathTemplate, ctxt.params);
    }
    /**
     * login expiration
     */
    if (error.errorCode === 'INVALID_CREDENTIAL') {
        if (ctxt.path !== '/auth/currentCredential') {
            if (!ctxt.canIssueNewCert())
                throw new OvhError(ctxt.api, error);
            await ctxt.renewCert();
            // Restart restart reseting context, so retry count return to 0.
            // certRenew also
            // TODO fix certRenew should not be reset to 0
            return ctxt.api.doRequest(method, path, ctxt.pathTemplate, ctxt.params);
        }
    }
    if (!error.errorCode)
        error.errorCode = "HTTP_ERROR";
    if (!error.httpCode)
        error.httpCode = `${statusCode} ${statusMessage}`;
    error.method = method;
    error.path = ctxt.path;
    if (ctxt.retryCnt > 1)
        error.message += ` after ${ctxt.retryCnt} retries`;
    error.message += ` in ${((new Date().getTime() - ctxt.t0) / 1000).toFixed(1)} Sec.`;
    throw new OvhError(ctxt.api, error);
};

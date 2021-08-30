import { IncomingMessage } from 'http';
import * as https from 'https';
import { Socket } from 'net';
export { CertMonitorProvider, CertMonitor } from './certMonitor';
export { OvhCredentialNew } from './OVHInterfaces'
import { RequestContext } from './helper';
import { IOvhError, OvhError } from './OvhError';

// Promisify https.request
const handleResponse = async (ctxt: RequestContext, response: IncomingMessage, body: string) => {
    // security, should not occure
    let responseData: any;
    const { statusCode, statusMessage } = response;
    const { method, path, cacheSilot } = ctxt;
    let size = 0;
    if (body && body.length > 0) {
        size = body.length;
        try {
            responseData = JSON.parse(body);
        } catch (e) {
            throw new OvhError({
                method,
                path,
                errorCode: 'HTTP_ERROR',
                httpCode: `${statusCode} ${statusMessage}`,
                message: `[OVH] Unable to parse ${method} ${path} JSON reponse:${body}`
            }, e);
        }
    } else {
        responseData = {};
    }
    ctxt.emitDebug(body);
    if (statusCode && statusCode >= 200 && statusCode < 300) {
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

    let error: IOvhError = responseData as IOvhError;
    if (!error) {
        // should not occure
        error = {
            method, path, errorCode: "HTTP_ERROR",
            httpCode: '',
            message: 'error',
        }
    }
    if (error.errorCode === 'INVALID_CREDENTIAL' || error.message === 'You must login first') {
        if (ctxt.path !== '/auth/currentCredential') {
            if (!ctxt.canIssueNewCert())
                throw new OvhError(error);
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
    error.path = path;
    if (ctxt.retryCnt > 1)
        error.message += ` after ${ctxt.retryCnt} retries`;
    error.message += ` in ${((new Date().getTime() - ctxt.t0) / 1000).toFixed(1)} Sec.`;
    throw new OvhError(error);
}

export const makeRequest = (ctxt: RequestContext) => new Promise((resolve, reject) => {
    const { timeout, method, options } = ctxt;

    let req = https.request(options, (res: IncomingMessage) => {
        let body = '';
        res.on('data', (chunk) => body += chunk)
            .on('end', async () => {
                // 504 Gateway Time-out
                // 408 Request Time-out
                let { statusCode } = res;
                if (ctxt.canRetry()) {
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
                        await ctxt.prepareRetry(statusCode);
                        makeRequest(ctxt).then(resolve, reject);
                        return;
                    }
                }
                return handleResponse(ctxt, res, body).then(resolve, reject)
            })
    }).on('timeout', () => {
        req.destroy(Error('timeout event triggered'));
    }).on('error', async (error: Error) => {
        // network connextion error like read ECONNRESET
        if (ctxt.canRetry()) {
            await ctxt.prepareRetry(0, error);
            makeRequest(ctxt).then(resolve, reject);
            return;
        }
        let message = 'fail to etablish a valid connexion';
        if (ctxt.retryCnt > 1)
            message += ` after ${ctxt.retryCnt} retries`;
        message += ` in ${((new Date().getTime() - ctxt.t0) / 1000).toFixed(1)} Sec.`;

        reject(new OvhError({
            method,
            path: options.path as string,
            httpCode: '',
            errorCode: 'NETWORK_ERROR',
            message
        }, error))
    });

    // mocked socket has no setTimeout
    req.on('socket', (socket: Socket) => {
        socket.setTimeout(timeout);
        // TODO check socket within modern nodeJS
        const events = (socket as any)._events;
        if (events && events.timeout != null) {
            socket.on('timeout', () => req.abort());
        }
    });
    if (ctxt.reqBody) {
        req.write(ctxt.reqBody);
    }
    req.end();
});



/**
 * all type that should be sent as parameter to Ovh calls
 */
export type OvhParamType = { [key: string]: any; };

/**
 * contains `requestPromised`
 */
export interface OvhRequestable {
    /**
      * Execute a request on the API with promise
      *
      * @param httpMethod: The HTTP method GET POST PUT DELETE
      * @param path: The request path with {pathParams}
      * @param params: The request parameters (passed as query string or body params)
      */
     requestPromised(httpMethod: string, path: string, params?: OvhParamType): Promise<any>;
}
/**
 * common Getter part fot handlers
 * - $()
 * - $getv/$put()/$post()/$delete()
 * - path navigation
 */
const commonGet = (key: string, target: OvhProxyApi) => {
    if (key.startsWith('$')) {
        if (key == '$') {
            return (id: any) => {
                let child = new OvhProxyApi(target._ovhEngine, target._path + '/' + String(id));
                return new Proxy(child, handlerChild);
            }
        }
        let fnc = (params: any) => {
            let mtd = key.substring(1);
            return target._ovhEngine.requestPromised(mtd, target._path, params);
        }
        return fnc.bind(target._ovhEngine);
    }
    if (key.startsWith('_'))
        key = key.substring(1);
    let child = new OvhProxyApi(target._ovhEngine, target._path + '/' + key);
    return new Proxy(child, handlerChild);
}

/**
 * handler for all proxy level except the root one
 * handle:
 * - Object Field
 * - $()
 * - $getv/$put()/$post()/$delete()
 * - path navigation
 */
const handlerChild = <ProxyHandler<OvhProxyApi>>{
    construct(target: OvhProxyApi, argArray: any, newTarget?: any) {
        console.log(argArray);
        console.log(newTarget);
        return target;
    },
    get(target: OvhProxyApi, p: PropertyKey, receiver: any) {
        if (typeof p == 'symbol')
            return (<any>target)[p];
        let key = p.toString();
        switch (key) {
            case 'toString':
            case 'valueOf':
                return (<any>target)[p];
        }
        return commonGet(key, target);
    }
}
/**
 * handler for the first level of the proxy
 * handle:
 * - Object Field
 * - EventEmitter Field
 * - flat get/put/post/delete calls
 * - $()
 * - $get()/$put()/$post()/$delete()
 * - path navigation
 */
const handlerRoot = <ProxyHandler<OvhProxyApi>>{
    construct(target: OvhProxyApi, argArray: any, newTarget?: any) {
        console.log(argArray);
        console.log(newTarget);
        return target;
    },
    get(target: OvhProxyApi, p: PropertyKey, receiver: any) {
        if (typeof p == 'symbol')
            return (<any>target)[p];
        let key = p.toString();
        switch (key) {
            case 'toString':
            case 'valueOf':
                return (<any>target)[p];
            case 'addListener':
            case 'on':
            case 'once':
            case 'prependListener':
            case 'prependOnceListener':
            case 'removeListener':
            case 'off':
            case 'removeAllListeners':
            case 'setMaxListeners':
            case 'getMaxListeners':
            case 'listeners':
            case 'rawListeners':
            case 'emit':
            case 'eventNames':
            case 'listenerCount':
                return (<any>target)[p];
            case 'get':
            case 'put':
            case 'post':
            case 'delete':
                return (path: string) => (params: OvhParamType) => target._ovhEngine.requestPromised(key, path, params)
        }
        return commonGet(key, target);
    }
}

/**
 * for Ovh API 2.0 Proxy
 * Data cloned on each Proxy node call
 * maintains full PATH for OVH calls
 */
class OvhProxyApi {
    public _ovhEngine: OvhRequestable;
    public _path: string = '';
    constructor(ovhEngine: OvhRequestable, path: string) {
        this._ovhEngine = ovhEngine;
        this._path = path;
    }
    toString(): string {
        return 'current path:' + this._path
    }
}
/**
 * Build Ovh API 2.0 Proxy
 * 
 * @param ovhEngine 
 * @param path 
 */
export function buildOvhProxy(ovhEngine: OvhRequestable, path: string): any {
    return <any>new Proxy(new OvhProxyApi(ovhEngine, path), handlerRoot);
}

/**
 * Parent class of all Ovh Api helper
 * for retro-compatibility with API OVH 1.x
 */
export class OvhWrapper {
    /**
     * The Ovh Raw engine
     * can be the official ovh api or the new Typescript engine
     * ovh must implements `requestPromised`
     */
    private ovh: OvhRequestable;
    constructor(ovh: OvhRequestable) {
        this.ovh = ovh;
    }
    /**
     * Used to merged All Get Calls
     */
    protected get(path: string, params?: OvhParamType): Promise<any> {
        return this.ovh.requestPromised('GET', path, params)
    }

    /**
     * Used to merged All Put Calls
     */
    protected put(path: string, params?: OvhParamType): Promise<any> {
        return this.ovh.requestPromised('PUT', path, params)
    }

    /**
     * Used to merged All Post Calls
     */
    protected post(path: string, params?: OvhParamType): Promise<any> {
        return this.ovh.requestPromised('POST', path, params)
    }

    /**
     * Used to merged All Delete Calls
     */
    protected delete(path: string, params?: OvhParamType): Promise<any> {
        return this.ovh.requestPromised('DELETE', path, params)
    }
}
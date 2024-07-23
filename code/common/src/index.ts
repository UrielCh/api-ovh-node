/**
 * all type that should be sent as parameter to Ovh calls
 */
export type OvhParamType = { [key: string]: any; };

/**
 * Public interface of a silot
 * you can have one silot per Ovh API call
 */
export interface ICacheSilot {
    options: ICacheOptions;
    flush(): Promise<void>;
    store(path: string, value: any, size: number): Promise<boolean>;
    get(path: string): Promise<any | undefined>;
    discard(path: string): Promise<boolean>;
}

/**
 * constructor for a silot cache
 */
export type SlotConstructor = new (template: string, options: ICacheOptions) => ICacheSilot;

/**
 * params to configure cache
 */
export interface ICacheOptions {
    /**
     * Time to live in second
     */
    ttl?: number;
    /**
     * max memmory used to store your cache
     */
    size?: number;
    /**
     * max number of entry in your cache
     */
    count?: number
    /**
     * explicite silot construtor used to overwrite in memory default silotCache
     */
    silotClass?: SlotConstructor;
}

/**
 * 'flush' and 'disable' are the main action, other can be add later
 */
export type CacheAction = 'flush' | 'disable' | string;
/**
 * common interface used to call ovh engine
 */
export interface OvhRequestable {
    /**
     * Execute a request on the API with promise
     *
     * @param httpMethod: The HTTP method GET POST PUT DELETE
     * @param path: The request final path
     * @param pathTemplate: The request path with {pathParams}
     * @param params: The request parameters (passed as query string or body params)
     */
    doRequest(httpMethod: string, path: string, pathTemplate: string, params?: any): Promise<any>;

    /**
     * cache controle
     */
    cache(template: string, param: ICacheOptions | CacheAction): Promise<any>;
}

/**
 * common Getter part fot handlers
 * - $()
 * - $getv/$put()/$post()/$delete()/$cache()
 * - path navigation
 */
const commonGet = (key: string, target: OvhProxyApi) => {
    if (key.startsWith('$')) {
        // give parameter in path
        if (key === '$') {
            return (id: string | number) => {
                // escape '/' char
                const idStr = String(id).replace(/\//g, '%2F');
                const child = new OvhProxyApi(target._ovhEngine, `${target._path}/${idStr}`, `${target._model}/*`);
                return new Proxy(child, handlerChild);
            }
        }
        // $get $post $delete $put
        const fnc = (params: any) => {
            const mtd = key.substring(1);
            if (mtd === 'cache') {
                return target._ovhEngine.cache(target._model, params);
            } else {
                // get post put delete
                return target._ovhEngine.doRequest(mtd, target._path, target._model, params);
            }
        }
        return fnc.bind(target._ovhEngine);
    }
    if (key.startsWith('_'))
        key = key.substring(1);
    const child = new OvhProxyApi(target._ovhEngine, `${target._path}/${key}`, `${target._model}/${key}`);
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
        return target;
    },
    get(target: OvhProxyApi, p: PropertyKey, receiver: any) {
        if (typeof p === 'symbol')
            return (target as any)[p];
        const key = p.toString();
        switch (key) {
            case 'toString':
            case 'valueOf':
            case 'toLocaleString':
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
        if (typeof p === 'symbol')
            return (target as any)[p];
        let key = p.toString();
        switch (key) {
            // object
            case 'toString':
            case 'valueOf':
            case 'toLocaleString':
                // hasOwnProperty
                // isPrototypeOf
                // propertyIsEnumerable
                // constructor
                return target[p as 'toString' | 'valueOf' | 'toLocaleString'];
            // EventEmitter
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
                return (target as any)[p];
            // return (target as unknown as EventEmitter)[p as 'addListener' | 'on' | 'once' | 'prependListener' | 'prependOnceListener' | 'removeListener' | 'off' | 'removeAllListeners' | 'setMaxListeners' | 'getMaxListeners' | 'listeners' | 'rawListeners' | 'emit' | 'eventNames' | 'listenerCount'];
            // legacy method only in root level
            // @deprecated
            case 'get':
            case 'put':
            case 'post':
            case 'delete':
                // root level call do not have path parameter so pathTemplate == path
                return (path: string) => (params: OvhParamType) => target._ovhEngine.doRequest(key, path, path, params)
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
    public _path: string;
    public _model: string;
    constructor(ovhEngine: OvhRequestable, path: string, model?: string) {
        this._ovhEngine = ovhEngine;
        this._path = path;
        this._model = model || path;
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
    return new Proxy(new OvhProxyApi(ovhEngine, path), handlerRoot) as any;
}

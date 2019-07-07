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
    request(httpMethod: string, path: string, params?: OvhParamType): Promise<any>;
}

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
            return target._ovhEngine.request(mtd, target._path, params);
        }
        return fnc.bind(target._ovhEngine);
    }
    if (key.startsWith('_'))
        key = key.substring(1);
    let child = new OvhProxyApi(target._ovhEngine, target._path + '/' + key);
    return new Proxy(child, handlerChild);
}


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
                return (path: string) => (params: OvhParamType) => target._ovhEngine.request(key, path, params)
        }
        return commonGet(key, target);
    }
}

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

export function buildOvhProxy(ovhEngine: OvhRequestable, path: string): any {
    return <any>new Proxy(new OvhProxyApi(ovhEngine, path), handlerRoot);
}

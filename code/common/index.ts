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
 * Parent class of all Ovh Api helper
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

    protected get(path: string, params?: OvhParamType): Promise<any> {
        return this.ovh.requestPromised('GET', path, params)
    }

    protected put(path: string, params?: OvhParamType): Promise<any> {
        return this.ovh.requestPromised('PUT', path, params)
    }

    protected post(path: string, params?: OvhParamType): Promise<any> {
        return this.ovh.requestPromised('POST', path, params)
    }

    protected delete(path: string, params?: OvhParamType): Promise<any> {
        return this.ovh.requestPromised('DELETE', path, params)
    }
}

const handler = <ProxyHandler<OvhProxyApi>>{
    construct(target: OvhProxyApi, argArray: any, newTarget?: any) {
        console.log(argArray);
        console.log(newTarget);
        return target;
    },
    get(target: OvhProxyApi, p: PropertyKey, receiver: any) {
        let key = p.toString();
        if (key == 'toString' || key == 'valueOf' || typeof p == 'symbol')
            return (<any>target)[p];
        if (key.startsWith('$')) {
            let fnc = (params: any) => {
                let mtd = key.substring(1);
                return target._ovhEngine.requestPromised(mtd, target._path, params);
            }
            return fnc.bind(target._ovhEngine);
        }
        let child = new OvhProxyApi(target._ovhEngine, target._path + '/' + key);
        return new Proxy(child, handler);
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
    return <any>new Proxy(new OvhProxyApi(ovhEngine, path), handler);
}

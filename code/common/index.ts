/**
 * all type that should be sent as parameter to Ovh calls
 */
export type OvhParamType = { [key:string]: any; };

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
    requestPromised(httpMethod: string, path: string, params?: OvhParamType) : Promise<any>;
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

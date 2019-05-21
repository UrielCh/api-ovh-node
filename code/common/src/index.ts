export type OvhParamType = { [key:string]: string | number | undefined | boolean | string[] | boolean[] | number[]; };

export interface OvhApiCommon {
   /**
     * Execute a request on the API with promise
     *
     * @param httpMethod: The HTTP method GET POST PUT DELETE
     * @param path: The request path with {pathParams}
     * @param params: The request parameters (passed as query string or body params)
     */
    requestPromised(httpMethod: string, path: string, params?: OvhParamType) : Promise<any>;
}

export class ApiCommon {
    private ovh: OvhApiCommon;
    constructor(ovh: OvhApiCommon) {
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

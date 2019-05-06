export declare class ApiCommon {
    protected get(path: String, pathParams?: any, queryParams?: any): Promise<any>;
    protected put(path: String, pathParams?: any, queryParams?: any, bodyParams?: any): Promise<any>;
    protected post(path: String, pathParams?: any, queryParams?: any, bodyParams?: any): Promise<any>;
    protected delete(path: String, pathParams?: any, queryParams?: any, bodyParams?: any): Promise<any>;
}

export declare class ApiCommon {
    private ovh;
    constructor(config: {
        appKey: string;
        appSecret: string;
        consumerKey: string;
    });
    private replacePath;
    protected get(path: string, pathParams?: {
        [key: string]: string | Number;
    }, queryParams?: any): Promise<any>;
    protected put(path: string, pathParams?: {
        [key: string]: string | Number;
    }, bodyParams?: any): Promise<any>;
    protected post(path: string, pathParams?: {
        [key: string]: string | Number;
    }, bodyParams?: any): Promise<any>;
    protected delete(path: string, pathParams?: {
        [key: string]: string | Number;
    }, bodyParams?: any): Promise<any>;
}

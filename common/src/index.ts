//module.exports = () => {
//    console.log('core');
//};

export class ApiCommon {
    protected get(path: String, pathParams?: any, queryParams?: any) : Promise<any> {return Promise.resolve(1);}
    protected put(path: String, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return Promise.resolve(1);}
    protected post(path: String, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return Promise.resolve(1);}
    protected delete(path: String, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return Promise.resolve(1);}
}

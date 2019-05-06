//module.exports = () => {
//    console.log('core');
//};

export class ApiCommon {
    private ovh: any;
    constructor(config: {appKey: string, appSecret: string, consumerKey: string}) { 
        this.ovh = require('ovh')( {appKey: String, appSecret: String, consumerKey: String});
    }
    private replacePath(path: string, pathParams?:{ [key:string]:string; }) : string{
        // TODO add assert .match(/(\{[\w]+\})/g)
        if (!pathParams) 
            return path;
        for (const key of Object.keys(pathParams)) {
            const value:string = pathParams[key];
            path = path.replace(`{${key}}`, value);
        }
        return path;
    }

    protected get(path: string, pathParams?:{ [key:string]:string; }, queryParams?: any) : Promise<any> {
        path = this.replacePath(path, pathParams);
        return this.ovh.requestPromised('GET', path, queryParams)
    }

    protected put(path: string, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {
        path = this.replacePath(path, pathParams);
        return this.ovh.requestPromised('PUT', path, bodyParams)
    }

    protected post(path: string, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {
        path = this.replacePath(path, pathParams);
        return this.ovh.requestPromised('POST', path, bodyParams)
    }
    
    protected delete(path: string, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {
        path = this.replacePath(path, pathParams);
        return this.ovh.requestPromised('DELETE', path, bodyParams)
    }
}

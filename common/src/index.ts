//module.exports = () => {
//    console.log('core');
//};

export class ApiCommon {
    private ovh: any;
    constructor(config: { appKey: string, appSecret: string, consumerKey: string }) {
        this.ovh = require('ovh')(config);
    }
    private replacePath(path: string, pathParams?: { [key: string]: string | Number; }): string {
        // TODO add assert .match(/(\{[\w]+\})/g)
        if (!pathParams)
            return path;
        for (const key of Object.keys(pathParams)) {
            const value: string = String(pathParams[key]);
            path = path.replace(`{${key}}`, value);
        }
        return path;
    }

    protected get(path: string, pathParams?: { [key: string]: string | Number; }, queryParams?: { [key: string]: string | Number; }): Promise<any> {
        if (~path.indexOf('{')) {
            path = this.replacePath(path, pathParams);
        } else if (!queryParams) {
            queryParams = pathParams;
        }
        return this.ovh.requestPromised('GET', path, queryParams)
    }

    protected put(path: string, pathParams?: { [key: string]: string | Number; }, bodyParams?: { [key: string]: string | Number; }): Promise<any> {
        if (~path.indexOf('{')) {
            path = this.replacePath(path, pathParams);
        } else {
            if (!bodyParams)
                bodyParams = pathParams;
        }
        return this.ovh.requestPromised('PUT', path, bodyParams)
    }

    protected post(path: string, pathParams?: { [key: string]: string | Number; }, bodyParams?: { [key: string]: string | Number; }): Promise<any> {
        if (~path.indexOf('{')) {
            path = this.replacePath(path, pathParams);
        } else if (!bodyParams) {
            bodyParams = pathParams;
        }
        return this.ovh.requestPromised('POST', path, bodyParams)
    }

    protected delete(path: string, pathParams?: { [key: string]: string | Number; }, bodyParams?: { [key: string]: string | Number; }): Promise<any> {
        if (~path.indexOf('{')) {
            path = this.replacePath(path, pathParams);
        }
        else if (!bodyParams){
            bodyParams = pathParams;
        }
        return this.ovh.requestPromised('DELETE', path, bodyParams)
    }
}

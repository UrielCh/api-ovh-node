import { OvhEngine, OvhParamType } from "./OvhEngine";

export { OvhEngine, OvhParamType };

export class ApiCommon {
    private ovh: OvhEngine;
    constructor(ovh: OvhEngine) {
        this.ovh = ovh;
    }
    
    //private replacePath(path: string, pathParams?: { [key: string]: string | Number; }): string {
    //    // TODO add assert .match(/(\{[\w]+\})/g)
    //    if (!pathParams)
    //        return path;
    //    for (const key of Object.keys(pathParams)) {
    //        const value: string = String(pathParams[key]);
    //        path = path.replace(`{${key}}`, value);
    //    }
    //    return path;
    //}

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

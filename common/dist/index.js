"use strict";
//module.exports = () => {
//    console.log('core');
//};
Object.defineProperty(exports, "__esModule", { value: true });
class ApiCommon {
    constructor(config) {
        this.ovh = require('ovh')({ appKey: String, appSecret: String, consumerKey: String });
    }
    replacePath(path, pathParams) {
        // TODO add assert .match(/(\{[\w]+\})/g)
        if (!pathParams)
            return path;
        for (const key of Object.keys(pathParams)) {
            const value = pathParams[key];
            path = path.replace(`{${key}}`, value);
        }
        return path;
    }
    get(path, pathParams, queryParams) {
        path = this.replacePath(path, pathParams);
        return this.ovh.requestPromised('GET', path, queryParams);
    }
    put(path, pathParams, bodyParams) {
        path = this.replacePath(path, pathParams);
        return this.ovh.requestPromised('PUT', path, bodyParams);
    }
    post(path, pathParams, bodyParams) {
        path = this.replacePath(path, pathParams);
        return this.ovh.requestPromised('POST', path, bodyParams);
    }
    delete(path, pathParams, bodyParams) {
        path = this.replacePath(path, pathParams);
        return this.ovh.requestPromised('DELETE', path, bodyParams);
    }
}
exports.ApiCommon = ApiCommon;

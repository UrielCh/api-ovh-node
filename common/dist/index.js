"use strict";
//module.exports = () => {
//    console.log('core');
//};
Object.defineProperty(exports, "__esModule", { value: true });
class ApiCommon {
    get(path, pathParams, queryParams) { return Promise.resolve(1); }
    put(path, pathParams, queryParams, bodyParams) { return Promise.resolve(1); }
    post(path, pathParams, queryParams, bodyParams) { return Promise.resolve(1); }
    delete(path, pathParams, queryParams, bodyParams) { return Promise.resolve(1); }
}
exports.ApiCommon = ApiCommon;

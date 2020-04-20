"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("@ovh-api/api"));
const me_1 = __importStar(require("@ovh-api/me"));
const chai_1 = require("chai");
const config = {
    accessRules: 'GET /me',
    certCache: '../../tokenTest.json'
};
const ovhEngine = new api_1.default(config);
const api = me_1.default(ovhEngine);
const proxy = me_1.proxyMe(ovhEngine);
let lastEv = null;
let catchReq = (ev) => {
    let { method, path, pathTemplate } = ev;
    if (~path.indexOf('/auth/'))
        return;
    lastEv = ev;
    ovhEngine.off('request', catchReq);
};
describe('OvhMe', () => {
    it('retrive nichandler', async () => {
        ovhEngine.on('request', catchReq);
        let constact = await proxy.$get();
        chai_1.assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle proxy');
        chai_1.assert.deepEqual(lastEv, { method: 'GET', path: '/me', pathTemplate: '/me' }, 'last Event /me dyna call');
    }).timeout(60000);
    it('retrive nichandler second call', async () => {
        ovhEngine.on('request', catchReq);
        await proxy.$cache();
        let constact = await proxy.$get();
        chai_1.assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle proxy');
        chai_1.assert.deepEqual(lastEv, { method: 'GET', path: '/me', pathTemplate: '/me' }, 'last Event /me dyna call');
    }).timeout(60000);
    it('retrive nichandler with cache', async () => {
        ovhEngine.on('request', catchReq);
        let t1 = Date.now();
        let constact = await proxy.$get();
        t1 = Date.now() - t1;
        if (t1 > 10) {
            chai_1.assert(t1 < 10, 'cache should be used');
        }
        chai_1.assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle proxy');
        chai_1.assert.deepEqual(lastEv, { method: 'GET', path: '/me', pathTemplate: '/me' }, 'last Event /me dyna call');
    }).timeout(60000);
});

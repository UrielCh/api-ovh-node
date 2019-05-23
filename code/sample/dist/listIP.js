"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ip_1 = require("@ovh-api/ip");
const api_1 = __importDefault(require("@ovh-api/api"));
const ovh = new api_1.default({ accessRules: 'GET /ip' });
const api = new ip_1.ApiIp(ovh);
async function printIP() {
    const ips = await api.get('/ip');
    return ips;
}
printIP().then(console.log);
//# sourceMappingURL=listIP.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /ovhCloudConnect Models
 */
function proxyOvhCloudConnect(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/ovhCloudConnect');
}
exports.proxyOvhCloudConnect = proxyOvhCloudConnect;
exports.default = proxyOvhCloudConnect;

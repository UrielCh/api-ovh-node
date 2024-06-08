"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /veeamCloudConnect Models
 */
function proxyVeeamCloudConnect(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/veeamCloudConnect');
}
exports.proxyVeeamCloudConnect = proxyVeeamCloudConnect;
exports.default = proxyVeeamCloudConnect;

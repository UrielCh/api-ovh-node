"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /veeamCloudConnect Models
 */
function proxyVeeamCloudConnect(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/veeamCloudConnect');
}
exports.proxyVeeamCloudConnect = proxyVeeamCloudConnect;
exports.default = proxyVeeamCloudConnect;

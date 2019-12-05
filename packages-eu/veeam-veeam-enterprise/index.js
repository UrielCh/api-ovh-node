"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /veeam/veeamEnterprise Models
 */
function proxyVeeamVeeamEnterprise(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/veeam');
}
exports.proxyVeeamVeeamEnterprise = proxyVeeamVeeamEnterprise;
exports.default = proxyVeeamVeeamEnterprise;

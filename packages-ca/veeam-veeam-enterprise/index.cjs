"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /veeam/veeamEnterprise Models
 */
function proxyVeeamVeeamEnterprise(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/veeam');
}
exports.proxyVeeamVeeamEnterprise = proxyVeeamVeeamEnterprise;
exports.default = proxyVeeamVeeamEnterprise;

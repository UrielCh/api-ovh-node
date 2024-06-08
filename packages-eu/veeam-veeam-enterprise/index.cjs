const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /veeam/veeamEnterprise Models
 */
function proxyVeeamVeeamEnterprise(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/veeam');
}
exports.proxyVeeamVeeamEnterprise = proxyVeeamVeeamEnterprise;
exports.default = proxyVeeamVeeamEnterprise;

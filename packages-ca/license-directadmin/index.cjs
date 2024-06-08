const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/directadmin Models
 */
function proxyLicenseDirectadmin(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseDirectadmin = proxyLicenseDirectadmin;
exports.default = proxyLicenseDirectadmin;

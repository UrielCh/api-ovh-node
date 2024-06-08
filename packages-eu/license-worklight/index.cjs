const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/worklight Models
 */
function proxyLicenseWorklight(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseWorklight = proxyLicenseWorklight;
exports.default = proxyLicenseWorklight;

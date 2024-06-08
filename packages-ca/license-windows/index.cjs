const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/windows Models
 */
function proxyLicenseWindows(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseWindows = proxyLicenseWindows;
exports.default = proxyLicenseWindows;

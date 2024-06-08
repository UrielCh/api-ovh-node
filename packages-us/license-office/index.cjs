const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/office Models
 */
function proxyLicenseOffice(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseOffice = proxyLicenseOffice;
exports.default = proxyLicenseOffice;

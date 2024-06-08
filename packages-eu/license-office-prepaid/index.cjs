const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/officePrepaid Models
 */
function proxyLicenseOfficePrepaid(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseOfficePrepaid = proxyLicenseOfficePrepaid;
exports.default = proxyLicenseOfficePrepaid;

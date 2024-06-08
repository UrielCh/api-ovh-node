const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/cpanel Models
 */
function proxyLicenseCpanel(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseCpanel = proxyLicenseCpanel;
exports.default = proxyLicenseCpanel;

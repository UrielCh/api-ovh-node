const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/plesk Models
 */
function proxyLicensePlesk(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicensePlesk = proxyLicensePlesk;
exports.default = proxyLicensePlesk;

const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /nutanix Models
 */
function proxyNutanix(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/nutanix');
}
exports.proxyNutanix = proxyNutanix;
exports.default = proxyNutanix;

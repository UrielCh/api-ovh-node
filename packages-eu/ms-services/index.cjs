const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /msServices Models
 */
function proxyMsServices(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/msServices');
}
exports.proxyMsServices = proxyMsServices;
exports.default = proxyMsServices;

const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /storage Models
 */
function proxyStorage(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/storage');
}
exports.proxyStorage = proxyStorage;
exports.default = proxyStorage;

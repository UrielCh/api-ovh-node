const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /dedicatedCloud Models
 */
function proxyDedicatedCloud(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicatedCloud');
}
exports.proxyDedicatedCloud = proxyDedicatedCloud;
exports.default = proxyDedicatedCloud;

const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /dedicated/server Models
 */
function proxyDedicatedServer(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedServer = proxyDedicatedServer;
exports.default = proxyDedicatedServer;

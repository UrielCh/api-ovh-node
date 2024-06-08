const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /dedicated/cluster Models
 */
function proxyDedicatedCluster(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedCluster = proxyDedicatedCluster;
exports.default = proxyDedicatedCluster;

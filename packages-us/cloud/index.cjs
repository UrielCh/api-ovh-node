const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /cloud Models
 */
function proxyCloud(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/cloud');
}
exports.proxyCloud = proxyCloud;
exports.default = proxyCloud;

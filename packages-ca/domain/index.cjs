const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /domain Models
 */
function proxyDomain(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/domain');
}
exports.proxyDomain = proxyDomain;
exports.default = proxyDomain;

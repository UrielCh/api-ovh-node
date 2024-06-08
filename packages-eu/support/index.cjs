const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /support Models
 */
function proxySupport(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/support');
}
exports.proxySupport = proxySupport;
exports.default = proxySupport;

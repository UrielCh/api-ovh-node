const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /email/domain Models
 */
function proxyEmailDomain(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/email');
}
exports.proxyEmailDomain = proxyEmailDomain;
exports.default = proxyEmailDomain;

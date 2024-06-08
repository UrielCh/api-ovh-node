const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /auth Models
 */
function proxyAuth(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/auth');
}
exports.proxyAuth = proxyAuth;
exports.default = proxyAuth;

const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /pack/xdsl Models
 */
function proxyPackXdsl(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/pack');
}
exports.proxyPackXdsl = proxyPackXdsl;
exports.default = proxyPackXdsl;

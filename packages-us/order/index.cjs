const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /order Models
 */
function proxyOrder(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/order');
}
exports.proxyOrder = proxyOrder;
exports.default = proxyOrder;

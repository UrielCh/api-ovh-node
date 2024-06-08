const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /email/exchange Models
 */
function proxyEmailExchange(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/email');
}
exports.proxyEmailExchange = proxyEmailExchange;
exports.default = proxyEmailExchange;

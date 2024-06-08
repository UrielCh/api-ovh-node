const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /stack/mis Models
 */
function proxyStackMis(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/stack');
}
exports.proxyStackMis = proxyStackMis;
exports.default = proxyStackMis;

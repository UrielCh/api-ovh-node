const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /allDom Models
 */
function proxyAllDom(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/allDom');
}
exports.proxyAllDom = proxyAllDom;
exports.default = proxyAllDom;

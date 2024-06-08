const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /freefax Models
 */
function proxyFreefax(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/freefax');
}
exports.proxyFreefax = proxyFreefax;
exports.default = proxyFreefax;

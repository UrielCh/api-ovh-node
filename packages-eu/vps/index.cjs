const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /vps Models
 */
function proxyVps(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/vps');
}
exports.proxyVps = proxyVps;
exports.default = proxyVps;

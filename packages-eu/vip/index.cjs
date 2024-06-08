const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /vip Models
 */
function proxyVip(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/vip');
}
exports.proxyVip = proxyVip;
exports.default = proxyVip;

const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /ip Models
 */
function proxyIp(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/ip');
}
exports.proxyIp = proxyIp;
exports.default = proxyIp;

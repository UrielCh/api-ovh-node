const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /ipLoadbalancing Models
 */
function proxyIpLoadbalancing(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/ipLoadbalancing');
}
exports.proxyIpLoadbalancing = proxyIpLoadbalancing;
exports.default = proxyIpLoadbalancing;

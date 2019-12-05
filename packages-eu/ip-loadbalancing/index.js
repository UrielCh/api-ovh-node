"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /ipLoadbalancing Models
 */
function proxyIpLoadbalancing(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/ipLoadbalancing');
}
exports.proxyIpLoadbalancing = proxyIpLoadbalancing;
exports.default = proxyIpLoadbalancing;

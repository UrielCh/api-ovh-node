"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /supply/mondialRelay Models
 */
function proxySupplyMondialRelay(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/supply');
}
exports.proxySupplyMondialRelay = proxySupplyMondialRelay;
exports.default = proxySupplyMondialRelay;

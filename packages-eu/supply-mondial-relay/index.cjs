"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /supply/mondialRelay Models
 */
function proxySupplyMondialRelay(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/supply');
}
exports.proxySupplyMondialRelay = proxySupplyMondialRelay;
exports.default = proxySupplyMondialRelay;

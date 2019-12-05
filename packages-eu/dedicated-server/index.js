"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dedicated/server Models
 */
function proxyDedicatedServer(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedServer = proxyDedicatedServer;
exports.default = proxyDedicatedServer;

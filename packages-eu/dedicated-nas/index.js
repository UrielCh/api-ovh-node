"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dedicated/nas Models
 */
function proxyDedicatedNas(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedNas = proxyDedicatedNas;
exports.default = proxyDedicatedNas;

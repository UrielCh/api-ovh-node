"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dedicated/ceph Models
 */
function proxyDedicatedCeph(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedCeph = proxyDedicatedCeph;
exports.default = proxyDedicatedCeph;

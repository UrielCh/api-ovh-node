"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dedicatedCloud Models
 */
function proxyDedicatedCloud(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dedicatedCloud');
}
exports.proxyDedicatedCloud = proxyDedicatedCloud;
exports.default = proxyDedicatedCloud;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dedicated/housing Models
 */
function proxyDedicatedHousing(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedHousing = proxyDedicatedHousing;
exports.default = proxyDedicatedHousing;

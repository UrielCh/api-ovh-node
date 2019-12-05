"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /price Models
 */
function proxyPrice(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/price');
}
exports.proxyPrice = proxyPrice;
exports.default = proxyPrice;

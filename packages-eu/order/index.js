"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /order Models
 */
function proxyOrder(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/order');
}
exports.proxyOrder = proxyOrder;
exports.default = proxyOrder;

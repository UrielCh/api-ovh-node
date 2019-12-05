"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /email/exchange Models
 */
function proxyEmailExchange(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/email');
}
exports.proxyEmailExchange = proxyEmailExchange;
exports.default = proxyEmailExchange;

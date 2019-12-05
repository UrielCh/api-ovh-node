"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /vrack Models
 */
function proxyVrack(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/vrack');
}
exports.proxyVrack = proxyVrack;
exports.default = proxyVrack;

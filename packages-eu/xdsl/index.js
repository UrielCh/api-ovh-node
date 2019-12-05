"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /xdsl Models
 */
function proxyXdsl(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/xdsl');
}
exports.proxyXdsl = proxyXdsl;
exports.default = proxyXdsl;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /pack/xdsl Models
 */
function proxyPackXdsl(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/pack');
}
exports.proxyPackXdsl = proxyPackXdsl;
exports.default = proxyPackXdsl;

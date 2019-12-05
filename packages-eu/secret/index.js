"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /secret Models
 */
function proxySecret(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/secret');
}
exports.proxySecret = proxySecret;
exports.default = proxySecret;

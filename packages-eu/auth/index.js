"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /auth Models
 */
function proxyAuth(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/auth');
}
exports.proxyAuth = proxyAuth;
exports.default = proxyAuth;

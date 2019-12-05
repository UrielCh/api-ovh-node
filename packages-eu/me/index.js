"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /me Models
 */
function proxyMe(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/me');
}
exports.proxyMe = proxyMe;
exports.default = proxyMe;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /domain Models
 */
function proxyDomain(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/domain');
}
exports.proxyDomain = proxyDomain;
exports.default = proxyDomain;

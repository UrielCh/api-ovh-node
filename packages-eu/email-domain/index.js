"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /email/domain Models
 */
function proxyEmailDomain(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/email');
}
exports.proxyEmailDomain = proxyEmailDomain;
exports.default = proxyEmailDomain;

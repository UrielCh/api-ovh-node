"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /email/pro Models
 */
function proxyEmailPro(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/email');
}
exports.proxyEmailPro = proxyEmailPro;
exports.default = proxyEmailPro;

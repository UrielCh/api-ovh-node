"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /email/pro Models
 */
function proxyEmailPro(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/email');
}
exports.proxyEmailPro = proxyEmailPro;
exports.default = proxyEmailPro;

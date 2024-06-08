"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /me Models
 */
function proxyMe(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/me');
}
exports.proxyMe = proxyMe;
exports.default = proxyMe;

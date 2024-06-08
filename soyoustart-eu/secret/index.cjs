"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /secret Models
 */
function proxySecret(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/secret');
}
exports.proxySecret = proxySecret;
exports.default = proxySecret;

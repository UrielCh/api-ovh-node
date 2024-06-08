"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /domain Models
 */
function proxyDomain(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/domain');
}
exports.proxyDomain = proxyDomain;
exports.default = proxyDomain;

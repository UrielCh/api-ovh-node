"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /dedicated/nasha Models
 */
function proxyDedicatedNasha(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedNasha = proxyDedicatedNasha;
exports.default = proxyDedicatedNasha;

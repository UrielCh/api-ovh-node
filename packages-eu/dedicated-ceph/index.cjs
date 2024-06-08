"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /dedicated/ceph Models
 */
function proxyDedicatedCeph(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedCeph = proxyDedicatedCeph;
exports.default = proxyDedicatedCeph;

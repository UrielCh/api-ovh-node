"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /dedicated/housing Models
 */
function proxyDedicatedHousing(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedHousing = proxyDedicatedHousing;
exports.default = proxyDedicatedHousing;

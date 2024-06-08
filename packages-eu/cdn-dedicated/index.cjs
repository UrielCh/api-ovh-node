"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /cdn/dedicated Models
 */
function proxyCdnDedicated(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/cdn');
}
exports.proxyCdnDedicated = proxyCdnDedicated;
exports.default = proxyCdnDedicated;

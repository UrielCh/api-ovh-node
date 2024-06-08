"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/directadmin Models
 */
function proxyLicenseDirectadmin(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseDirectadmin = proxyLicenseDirectadmin;
exports.default = proxyLicenseDirectadmin;

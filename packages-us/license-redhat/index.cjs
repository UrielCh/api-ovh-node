"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/redhat Models
 */
function proxyLicenseRedhat(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseRedhat = proxyLicenseRedhat;
exports.default = proxyLicenseRedhat;

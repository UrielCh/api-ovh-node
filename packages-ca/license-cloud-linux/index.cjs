"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/cloudLinux Models
 */
function proxyLicenseCloudLinux(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseCloudLinux = proxyLicenseCloudLinux;
exports.default = proxyLicenseCloudLinux;

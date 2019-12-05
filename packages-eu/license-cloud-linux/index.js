"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /license/cloudLinux Models
 */
function proxyLicenseCloudLinux(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseCloudLinux = proxyLicenseCloudLinux;
exports.default = proxyLicenseCloudLinux;

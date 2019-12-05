"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /license/windows Models
 */
function proxyLicenseWindows(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseWindows = proxyLicenseWindows;
exports.default = proxyLicenseWindows;

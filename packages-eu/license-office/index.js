"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /license/office Models
 */
function proxyLicenseOffice(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseOffice = proxyLicenseOffice;
exports.default = proxyLicenseOffice;

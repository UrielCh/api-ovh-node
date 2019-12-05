"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /license/worklight Models
 */
function proxyLicenseWorklight(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseWorklight = proxyLicenseWorklight;
exports.default = proxyLicenseWorklight;

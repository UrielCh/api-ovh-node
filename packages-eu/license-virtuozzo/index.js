"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /license/virtuozzo Models
 */
function proxyLicenseVirtuozzo(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseVirtuozzo = proxyLicenseVirtuozzo;
exports.default = proxyLicenseVirtuozzo;

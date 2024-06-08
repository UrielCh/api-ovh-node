"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/virtuozzo Models
 */
function proxyLicenseVirtuozzo(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseVirtuozzo = proxyLicenseVirtuozzo;
exports.default = proxyLicenseVirtuozzo;

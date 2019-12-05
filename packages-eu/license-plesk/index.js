"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /license/plesk Models
 */
function proxyLicensePlesk(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicensePlesk = proxyLicensePlesk;
exports.default = proxyLicensePlesk;

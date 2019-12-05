"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /deskaas Models
 */
function proxyDeskaas(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/deskaas');
}
exports.proxyDeskaas = proxyDeskaas;
exports.default = proxyDeskaas;

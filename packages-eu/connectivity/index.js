"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /connectivity Models
 */
function proxyConnectivity(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/connectivity');
}
exports.proxyConnectivity = proxyConnectivity;
exports.default = proxyConnectivity;

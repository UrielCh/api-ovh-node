"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /vps Models
 */
function proxyVps(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/vps');
}
exports.proxyVps = proxyVps;
exports.default = proxyVps;

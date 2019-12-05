"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /ip Models
 */
function proxyIp(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/ip');
}
exports.proxyIp = proxyIp;
exports.default = proxyIp;

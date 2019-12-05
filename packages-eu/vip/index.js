"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /vip Models
 */
function proxyVip(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/vip');
}
exports.proxyVip = proxyVip;
exports.default = proxyVip;

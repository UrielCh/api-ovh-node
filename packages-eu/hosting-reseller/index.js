"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /hosting/reseller Models
 */
function proxyHostingReseller(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/hosting');
}
exports.proxyHostingReseller = proxyHostingReseller;
exports.default = proxyHostingReseller;

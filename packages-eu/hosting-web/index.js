"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /hosting/web Models
 */
function proxyHostingWeb(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/hosting');
}
exports.proxyHostingWeb = proxyHostingWeb;
exports.default = proxyHostingWeb;

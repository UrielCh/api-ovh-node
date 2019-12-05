"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /analytics Models
 */
function proxyAnalytics(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/analytics');
}
exports.proxyAnalytics = proxyAnalytics;
exports.default = proxyAnalytics;

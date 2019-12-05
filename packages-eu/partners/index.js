"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /partners Models
 */
function proxyPartners(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/partners');
}
exports.proxyPartners = proxyPartners;
exports.default = proxyPartners;

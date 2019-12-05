"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /support Models
 */
function proxySupport(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/support');
}
exports.proxySupport = proxySupport;
exports.default = proxySupport;

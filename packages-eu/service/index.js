"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /service Models
 */
function proxyService(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/service');
}
exports.proxyService = proxyService;
exports.default = proxyService;

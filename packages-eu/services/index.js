"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /services Models
 */
function proxyServices(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/services');
}
exports.proxyServices = proxyServices;
exports.default = proxyServices;

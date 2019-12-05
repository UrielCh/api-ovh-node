"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /msServices Models
 */
function proxyMsServices(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/msServices');
}
exports.proxyMsServices = proxyMsServices;
exports.default = proxyMsServices;

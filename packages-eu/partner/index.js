"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /partner Models
 */
function proxyPartner(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/partner');
}
exports.proxyPartner = proxyPartner;
exports.default = proxyPartner;

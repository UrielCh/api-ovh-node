"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /freefax Models
 */
function proxyFreefax(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/freefax');
}
exports.proxyFreefax = proxyFreefax;
exports.default = proxyFreefax;

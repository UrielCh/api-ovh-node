"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /allDom Models
 */
function proxyAllDom(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/allDom');
}
exports.proxyAllDom = proxyAllDom;
exports.default = proxyAllDom;

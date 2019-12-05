"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /stack/mis Models
 */
function proxyStackMis(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/stack');
}
exports.proxyStackMis = proxyStackMis;
exports.default = proxyStackMis;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /pack/siptrunk Models
 */
function proxyPackSiptrunk(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/pack');
}
exports.proxyPackSiptrunk = proxyPackSiptrunk;
exports.default = proxyPackSiptrunk;

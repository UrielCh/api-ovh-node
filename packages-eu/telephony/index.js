"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /telephony Models
 */
function proxyTelephony(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/telephony');
}
exports.proxyTelephony = proxyTelephony;
exports.default = proxyTelephony;

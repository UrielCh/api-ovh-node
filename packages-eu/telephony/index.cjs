"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /telephony Models
 */
function proxyTelephony(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/telephony');
}
exports.proxyTelephony = proxyTelephony;
exports.default = proxyTelephony;

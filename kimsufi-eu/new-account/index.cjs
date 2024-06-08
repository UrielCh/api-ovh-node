"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /newAccount Models
 */
function proxyNewAccount(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/newAccount');
}
exports.proxyNewAccount = proxyNewAccount;
exports.default = proxyNewAccount;

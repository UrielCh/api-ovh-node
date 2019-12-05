"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /newAccount Models
 */
function proxyNewAccount(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/newAccount');
}
exports.proxyNewAccount = proxyNewAccount;
exports.default = proxyNewAccount;

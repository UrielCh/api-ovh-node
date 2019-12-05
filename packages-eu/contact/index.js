"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /contact Models
 */
function proxyContact(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/contact');
}
exports.proxyContact = proxyContact;
exports.default = proxyContact;

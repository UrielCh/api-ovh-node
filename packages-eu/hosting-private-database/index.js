"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /hosting/privateDatabase Models
 */
function proxyHostingPrivateDatabase(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/hosting');
}
exports.proxyHostingPrivateDatabase = proxyHostingPrivateDatabase;
exports.default = proxyHostingPrivateDatabase;

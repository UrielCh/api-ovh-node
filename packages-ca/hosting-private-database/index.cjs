"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /hosting/privateDatabase Models
 */
function proxyHostingPrivateDatabase(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/hosting');
}
exports.proxyHostingPrivateDatabase = proxyHostingPrivateDatabase;
exports.default = proxyHostingPrivateDatabase;

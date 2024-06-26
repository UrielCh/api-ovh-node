"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /connectivity Models
 */
function proxyConnectivity(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/connectivity');
}
exports.proxyConnectivity = proxyConnectivity;
exports.default = proxyConnectivity;

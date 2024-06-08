"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /vrack Models
 */
function proxyVrack(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/vrack');
}
exports.proxyVrack = proxyVrack;
exports.default = proxyVrack;

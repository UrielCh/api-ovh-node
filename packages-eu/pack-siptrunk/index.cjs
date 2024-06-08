"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /pack/siptrunk Models
 */
function proxyPackSiptrunk(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/pack');
}
exports.proxyPackSiptrunk = proxyPackSiptrunk;
exports.default = proxyPackSiptrunk;

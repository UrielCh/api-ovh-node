"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /xdsl Models
 */
function proxyXdsl(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/xdsl');
}
exports.proxyXdsl = proxyXdsl;
exports.default = proxyXdsl;

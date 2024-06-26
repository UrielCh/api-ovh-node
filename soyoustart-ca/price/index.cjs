"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /price Models
 */
function proxyPrice(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/price');
}
exports.proxyPrice = proxyPrice;
exports.default = proxyPrice;

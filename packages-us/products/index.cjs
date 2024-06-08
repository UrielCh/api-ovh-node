"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /products Models
 */
function proxyProducts(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/products');
}
exports.proxyProducts = proxyProducts;
exports.default = proxyProducts;

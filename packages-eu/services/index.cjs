"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /services Models
 */
function proxyServices(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/services');
}
exports.proxyServices = proxyServices;
exports.default = proxyServices;

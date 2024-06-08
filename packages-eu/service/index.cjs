"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /service Models
 */
function proxyService(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/service');
}
exports.proxyService = proxyService;
exports.default = proxyService;

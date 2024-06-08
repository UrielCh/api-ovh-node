"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /partner Models
 */
function proxyPartner(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/partner');
}
exports.proxyPartner = proxyPartner;
exports.default = proxyPartner;

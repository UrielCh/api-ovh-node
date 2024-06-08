"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /startup Models
 */
function proxyStartup(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/startup');
}
exports.proxyStartup = proxyStartup;
exports.default = proxyStartup;

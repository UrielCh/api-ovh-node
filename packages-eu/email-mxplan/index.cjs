"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /email/mxplan Models
 */
function proxyEmailMxplan(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/email');
}
exports.proxyEmailMxplan = proxyEmailMxplan;
exports.default = proxyEmailMxplan;

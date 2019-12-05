"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /email/mxplan Models
 */
function proxyEmailMxplan(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/email');
}
exports.proxyEmailMxplan = proxyEmailMxplan;
exports.default = proxyEmailMxplan;

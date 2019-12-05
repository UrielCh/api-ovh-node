"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /kube Models
 */
function proxyKube(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/kube');
}
exports.proxyKube = proxyKube;
exports.default = proxyKube;

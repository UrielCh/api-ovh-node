"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /store Models
 */
function proxyStore(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/store');
}
exports.proxyStore = proxyStore;
exports.default = proxyStore;

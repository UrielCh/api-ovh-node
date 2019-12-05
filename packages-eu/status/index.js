"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /status Models
 */
function proxyStatus(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/status');
}
exports.proxyStatus = proxyStatus;
exports.default = proxyStatus;

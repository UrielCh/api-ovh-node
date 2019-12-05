"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /cloud Models
 */
function proxyCloud(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/cloud');
}
exports.proxyCloud = proxyCloud;
exports.default = proxyCloud;

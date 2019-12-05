"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /hpcspot Models
 */
function proxyHpcspot(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/hpcspot');
}
exports.proxyHpcspot = proxyHpcspot;
exports.default = proxyHpcspot;

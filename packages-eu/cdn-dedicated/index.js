"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /cdn/dedicated Models
 */
function proxyCdnDedicated(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/cdn');
}
exports.proxyCdnDedicated = proxyCdnDedicated;
exports.default = proxyCdnDedicated;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /saas/csp2 Models
 */
function proxySaasCsp2(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/saas');
}
exports.proxySaasCsp2 = proxySaasCsp2;
exports.default = proxySaasCsp2;

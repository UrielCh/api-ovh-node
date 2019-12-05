"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /ssl Models
 */
function proxySsl(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/ssl');
}
exports.proxySsl = proxySsl;
exports.default = proxySsl;

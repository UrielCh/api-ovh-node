"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /caas/containers Models
 */
function proxyCaasContainers(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/caas');
}
exports.proxyCaasContainers = proxyCaasContainers;
exports.default = proxyCaasContainers;

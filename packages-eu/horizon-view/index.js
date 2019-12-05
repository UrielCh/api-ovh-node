"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /horizonView Models
 */
function proxyHorizonView(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/horizonView');
}
exports.proxyHorizonView = proxyHorizonView;
exports.default = proxyHorizonView;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /router Models
 */
function proxyRouter(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/router');
}
exports.proxyRouter = proxyRouter;
exports.default = proxyRouter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dbaas/queue Models
 */
function proxyDbaasQueue(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dbaas');
}
exports.proxyDbaasQueue = proxyDbaasQueue;
exports.default = proxyDbaasQueue;

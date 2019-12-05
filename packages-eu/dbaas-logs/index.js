"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dbaas/logs Models
 */
function proxyDbaasLogs(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dbaas');
}
exports.proxyDbaasLogs = proxyDbaasLogs;
exports.default = proxyDbaasLogs;

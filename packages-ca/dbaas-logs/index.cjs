const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /dbaas/logs Models
 */
function proxyDbaasLogs(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dbaas');
}
exports.proxyDbaasLogs = proxyDbaasLogs;
exports.default = proxyDbaasLogs;

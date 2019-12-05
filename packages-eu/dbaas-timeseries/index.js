"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dbaas/timeseries Models
 */
function proxyDbaasTimeseries(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dbaas');
}
exports.proxyDbaasTimeseries = proxyDbaasTimeseries;
exports.default = proxyDbaasTimeseries;

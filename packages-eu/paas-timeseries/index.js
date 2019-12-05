"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /paas/timeseries Models
 */
function proxyPaasTimeseries(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/paas');
}
exports.proxyPaasTimeseries = proxyPaasTimeseries;
exports.default = proxyPaasTimeseries;

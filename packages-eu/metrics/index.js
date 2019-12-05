"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /metrics Models
 */
function proxyMetrics(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/metrics');
}
exports.proxyMetrics = proxyMetrics;
exports.default = proxyMetrics;

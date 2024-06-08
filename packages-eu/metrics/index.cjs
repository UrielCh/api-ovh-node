"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /metrics Models
 */
function proxyMetrics(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/metrics');
}
exports.proxyMetrics = proxyMetrics;
exports.default = proxyMetrics;

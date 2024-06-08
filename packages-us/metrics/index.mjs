import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /metrics Models
 */
export function proxyMetrics(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/metrics');
}
export default proxyMetrics;

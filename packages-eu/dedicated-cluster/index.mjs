import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /dedicated/cluster Models
 */
export function proxyDedicatedCluster(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedCluster;

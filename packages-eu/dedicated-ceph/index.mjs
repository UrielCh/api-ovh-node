import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /dedicated/ceph Models
 */
export function proxyDedicatedCeph(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedCeph;

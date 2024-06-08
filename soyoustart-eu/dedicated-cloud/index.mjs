import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /dedicatedCloud Models
 */
export function proxyDedicatedCloud(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicatedCloud');
}
export default proxyDedicatedCloud;

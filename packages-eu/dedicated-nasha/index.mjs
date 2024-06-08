import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /dedicated/nasha Models
 */
export function proxyDedicatedNasha(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedNasha;

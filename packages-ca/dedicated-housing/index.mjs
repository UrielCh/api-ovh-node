import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /dedicated/housing Models
 */
export function proxyDedicatedHousing(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedHousing;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /price Models
 */
export function proxyPrice(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/price');
}
export default proxyPrice;

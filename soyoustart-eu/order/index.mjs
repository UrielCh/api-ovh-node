import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /order Models
 */
export function proxyOrder(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/order');
}
export default proxyOrder;

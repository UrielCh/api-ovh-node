import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /xdsl Models
 */
export function proxyXdsl(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/xdsl');
}
export default proxyXdsl;

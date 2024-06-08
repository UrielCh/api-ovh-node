import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /vrack Models
 */
export function proxyVrack(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/vrack');
}
export default proxyVrack;

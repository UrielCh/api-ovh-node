import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /freefax Models
 */
export function proxyFreefax(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/freefax');
}
export default proxyFreefax;

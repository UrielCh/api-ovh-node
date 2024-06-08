import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /me Models
 */
export function proxyMe(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/me');
}
export default proxyMe;

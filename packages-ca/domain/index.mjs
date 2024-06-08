import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /domain Models
 */
export function proxyDomain(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/domain');
}
export default proxyDomain;

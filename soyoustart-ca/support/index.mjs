import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /support Models
 */
export function proxySupport(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/support');
}
export default proxySupport;

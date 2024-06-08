import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /services Models
 */
export function proxyServices(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/services');
}
export default proxyServices;

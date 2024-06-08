import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /service Models
 */
export function proxyService(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/service');
}
export default proxyService;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /partner Models
 */
export function proxyPartner(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/partner');
}
export default proxyPartner;

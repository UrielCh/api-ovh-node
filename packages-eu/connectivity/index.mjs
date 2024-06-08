import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /connectivity Models
 */
export function proxyConnectivity(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/connectivity');
}
export default proxyConnectivity;

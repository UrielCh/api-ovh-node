import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /vps Models
 */
export function proxyVps(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/vps');
}
export default proxyVps;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /vip Models
 */
export function proxyVip(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/vip');
}
export default proxyVip;

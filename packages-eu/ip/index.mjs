import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /ip Models
 */
export function proxyIp(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/ip');
}
export default proxyIp;

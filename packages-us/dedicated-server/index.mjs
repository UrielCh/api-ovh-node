import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /dedicated/server Models
 */
export function proxyDedicatedServer(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedServer;

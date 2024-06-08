import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /supply/mondialRelay Models
 */
export function proxySupplyMondialRelay(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/supply');
}
export default proxySupplyMondialRelay;

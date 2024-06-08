import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /ipLoadbalancing Models
 */
export function proxyIpLoadbalancing(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/ipLoadbalancing');
}
export default proxyIpLoadbalancing;

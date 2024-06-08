import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /pack/siptrunk Models
 */
export function proxyPackSiptrunk(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/pack');
}
export default proxyPackSiptrunk;

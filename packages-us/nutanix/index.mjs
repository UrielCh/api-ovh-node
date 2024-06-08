import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /nutanix Models
 */
export function proxyNutanix(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/nutanix');
}
export default proxyNutanix;

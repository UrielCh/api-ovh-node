import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /msServices Models
 */
export function proxyMsServices(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/msServices');
}
export default proxyMsServices;

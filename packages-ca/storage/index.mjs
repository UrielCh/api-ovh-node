import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /storage Models
 */
export function proxyStorage(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/storage');
}
export default proxyStorage;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /secret Models
 */
export function proxySecret(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/secret');
}
export default proxySecret;

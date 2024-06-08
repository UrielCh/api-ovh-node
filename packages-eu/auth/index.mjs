import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /auth Models
 */
export function proxyAuth(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/auth');
}
export default proxyAuth;

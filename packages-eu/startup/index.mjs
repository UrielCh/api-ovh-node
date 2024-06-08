import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /startup Models
 */
export function proxyStartup(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/startup');
}
export default proxyStartup;

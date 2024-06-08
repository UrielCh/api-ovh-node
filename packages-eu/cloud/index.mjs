import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /cloud Models
 */
export function proxyCloud(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/cloud');
}
export default proxyCloud;

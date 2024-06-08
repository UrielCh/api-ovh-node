import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /ovhCloudConnect Models
 */
export function proxyOvhCloudConnect(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/ovhCloudConnect');
}
export default proxyOvhCloudConnect;

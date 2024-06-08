import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /veeamCloudConnect Models
 */
export function proxyVeeamCloudConnect(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/veeamCloudConnect');
}
export default proxyVeeamCloudConnect;

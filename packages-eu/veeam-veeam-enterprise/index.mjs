import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /veeam/veeamEnterprise Models
 */
export function proxyVeeamVeeamEnterprise(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/veeam');
}
export default proxyVeeamVeeamEnterprise;

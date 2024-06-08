import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/directadmin Models
 */
export function proxyLicenseDirectadmin(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseDirectadmin;

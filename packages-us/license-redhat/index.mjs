import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/redhat Models
 */
export function proxyLicenseRedhat(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseRedhat;

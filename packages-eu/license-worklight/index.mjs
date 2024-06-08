import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/worklight Models
 */
export function proxyLicenseWorklight(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseWorklight;

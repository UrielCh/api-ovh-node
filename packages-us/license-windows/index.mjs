import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/windows Models
 */
export function proxyLicenseWindows(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseWindows;

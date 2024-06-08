import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/office Models
 */
export function proxyLicenseOffice(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseOffice;

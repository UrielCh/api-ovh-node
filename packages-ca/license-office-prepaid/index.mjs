import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/officePrepaid Models
 */
export function proxyLicenseOfficePrepaid(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseOfficePrepaid;

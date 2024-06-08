import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/cpanel Models
 */
export function proxyLicenseCpanel(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseCpanel;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/plesk Models
 */
export function proxyLicensePlesk(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicensePlesk;

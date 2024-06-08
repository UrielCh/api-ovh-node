import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/virtuozzo Models
 */
export function proxyLicenseVirtuozzo(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseVirtuozzo;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/cloudLinux Models
 */
export function proxyLicenseCloudLinux(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseCloudLinux;

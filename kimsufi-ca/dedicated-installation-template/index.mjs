import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /dedicated/installationTemplate Models
 */
export function proxyDedicatedInstallationTemplate(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedInstallationTemplate;

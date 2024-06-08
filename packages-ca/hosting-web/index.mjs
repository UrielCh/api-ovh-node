import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /hosting/web Models
 */
export function proxyHostingWeb(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/hosting');
}
export default proxyHostingWeb;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /hosting/privateDatabase Models
 */
export function proxyHostingPrivateDatabase(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/hosting');
}
export default proxyHostingPrivateDatabase;

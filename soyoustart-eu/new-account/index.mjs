import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /newAccount Models
 */
export function proxyNewAccount(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/newAccount');
}
export default proxyNewAccount;

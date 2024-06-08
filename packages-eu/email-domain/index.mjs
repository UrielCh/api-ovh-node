import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /email/domain Models
 */
export function proxyEmailDomain(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailDomain;

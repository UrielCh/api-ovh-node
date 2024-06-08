import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /email/exchange Models
 */
export function proxyEmailExchange(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailExchange;

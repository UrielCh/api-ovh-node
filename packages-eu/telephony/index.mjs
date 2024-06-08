import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /telephony Models
 */
export function proxyTelephony(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/telephony');
}
export default proxyTelephony;

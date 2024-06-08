import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /contact Models
 */
export function proxyContact(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/contact');
}
export default proxyContact;

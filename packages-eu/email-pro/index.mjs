import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /email/pro Models
 */
export function proxyEmailPro(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailPro;

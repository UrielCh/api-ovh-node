import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /stack/mis Models
 */
export function proxyStackMis(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/stack');
}
export default proxyStackMis;

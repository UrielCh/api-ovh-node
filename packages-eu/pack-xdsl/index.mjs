import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /pack/xdsl Models
 */
export function proxyPackXdsl(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/pack');
}
export default proxyPackXdsl;

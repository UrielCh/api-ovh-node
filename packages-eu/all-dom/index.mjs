import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /allDom Models
 */
export function proxyAllDom(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/allDom');
}
export default proxyAllDom;

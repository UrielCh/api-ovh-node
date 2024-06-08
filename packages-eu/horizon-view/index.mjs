import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /horizonView Models
 */
export function proxyHorizonView(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/horizonView');
}
export default proxyHorizonView;

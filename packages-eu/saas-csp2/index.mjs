import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /saas/csp2 Models
 */
export function proxySaasCsp2(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/saas');
}
export default proxySaasCsp2;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /cdn/dedicated Models
 */
export function proxyCdnDedicated(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/cdn');
}
export default proxyCdnDedicated;

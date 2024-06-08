import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /ssl Models
 */
export function proxySsl(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/ssl');
}
export default proxySsl;

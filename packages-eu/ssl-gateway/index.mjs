import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /sslGateway Models
 */
export function proxySslGateway(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/sslGateway');
}
export default proxySslGateway;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /webPaaS Models
 */
export function proxyWebPaaS(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/webPaaS');
}
export default proxyWebPaaS;

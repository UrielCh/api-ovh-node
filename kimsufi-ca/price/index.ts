import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /price Models
 */

/**
 * END API /price Models
 */
export function proxyPrice(ovhEngine: OvhRequestable): Price {
    return buildOvhProxy(ovhEngine, '/price');
}
export default proxyPrice;
/**
 * Api Proxy model
 */// Apis harmony

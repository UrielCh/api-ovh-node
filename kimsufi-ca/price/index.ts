import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /price Models
 * Source: https://ca.api.kimsufi.com/1.0/price.json
 */

/**
 * END API /price Models
 */
export function proxyPrice(ovhEngine: OvhRequestable): Price {
    return buildOvhProxy(ovhEngine, '/price');
}
export default proxyPrice;
/**
 * Api model for /price
 */

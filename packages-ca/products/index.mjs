import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /products Models
 */
export function proxyProducts(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/products');
}
export default proxyProducts;

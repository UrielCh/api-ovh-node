import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /overTheBox Models
 */
export function proxyOverTheBox(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/overTheBox');
}
export default proxyOverTheBox;

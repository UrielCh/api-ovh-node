import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /email/mxplan Models
 */
export function proxyEmailMxplan(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailMxplan;

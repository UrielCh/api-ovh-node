import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /sms Models
 */
export function proxySms(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/sms');
}
export default proxySms;

import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /dbaas/logs Models
 */
export function proxyDbaasLogs(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dbaas');
}
export default proxyDbaasLogs;

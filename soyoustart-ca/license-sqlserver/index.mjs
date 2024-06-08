import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /license/sqlserver Models
 */
export function proxyLicenseSqlserver(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseSqlserver;

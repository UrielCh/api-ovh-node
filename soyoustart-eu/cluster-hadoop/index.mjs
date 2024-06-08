import { buildOvhProxy } from '@ovh-api/common';

/**
 * END API /cluster/hadoop Models
 */
export function proxyClusterHadoop(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/cluster');
}
export default proxyClusterHadoop;

import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /secret Models
 * Source: https://eu.api.soyoustart.com/1.0/secret.json
 */
export namespace secret {
    /**
     * A secret
     * interface fullName: secret.Secret.Secret
     */
    export interface Secret {
        expiration: string;
        secret: string;
    }
}

/**
 * END API /secret Models
 */
export function proxySecret(ovhEngine: OvhRequestable): Secret {
    return buildOvhProxy(ovhEngine, '/secret');
}
export default proxySecret;
/**
 * Api model for /secret
 */
export interface Secret {
    retrieve: {
        /**
         * Retrieve a secret sent by email
         * POST /secret/retrieve
         */
        $post(params: { id: string }): Promise<secret.Secret>;
    }
}

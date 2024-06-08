import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /secret Models
 * Source: https://api.us.ovhcloud.com/1.0/secret.json
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

export declare function proxySecret(ovhEngine: OvhRequestable): Secret;
export default proxySecret;

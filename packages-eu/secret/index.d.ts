import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /secret Models
 */
export declare namespace secret {
    interface Secret {
        expiration: string;
        secret: string;
    }
}
/**
 * END API /secret Models
 */
export declare function proxySecret(ovhEngine: OvhRequestable): Secret;
export default proxySecret;
/**
 * Api Proxy model
 */ export interface Secret {
    retrieve: {
        $post(params: {
            id: string;
        }): Promise<secret.Secret>;
    };
    /**
     * Retrieve a secret sent by email
     * Retrieve a secret sent by email
     */
    post(path: '/secret/retrieve'): (params: {
        id: string;
    }) => Promise<secret.Secret>;
}

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /secret Models
 * Source: https://eu.api.ovh.com/1.0/secret.json
 */
export namespace secret {
    // interface fullName: secret.Secret.Secret
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
 * Api Proxy model
 */// Apis harmony
// path /secret
export interface Secret{
    retrieve: {
        // POST /secret/retrieve
        $post(params: {id: string}): Promise<secret.Secret>;
    }
// Api
  /**
   * Retrieve a secret sent by email
   * Retrieve a secret sent by email
   */
  post(path: '/secret/retrieve'): (params: {id: string}) => Promise<secret.Secret>;
}

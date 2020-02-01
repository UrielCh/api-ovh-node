import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /secret Models
 * Source: https://eu.api.kimsufi.com/1.0/secret.json
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
}

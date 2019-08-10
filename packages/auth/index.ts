import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /auth Models
 */
export namespace api {
    // interface fullName: api.Credential.Credential
    export interface Credential {
        applicationId: number;
        creation: string;
        credentialId: number;
        expiration?: string;
        lastUse?: string;
        ovhSupport: boolean;
        rules: authAccessRule[];
        status: authCredentialStateEnum;
    }
}
export namespace auth {
    // interface fullName: auth.AccessRule.AccessRule
    export interface AccessRule {
        method: authMethodEnum;
        path: string;
    }
    // interface fullName: auth.Credential.Credential
    export interface Credential {
        consumerKey: string;
        state: authCredentialStateEnum;
        validationUrl?: string;
    }
    // type fullname: auth.CredentialStateEnum
    export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"
    // type fullname: auth.MethodEnum
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}

/**
 * END API /auth Models
 */
export function proxyAuth(ovhEngine: OvhRequestable): Auth {
    return buildOvhProxy(ovhEngine, '/auth');
}
export default proxyAuth;
/**
 * Api Proxy model
 */// Apis harmony
// path /auth
export interface Auth{
    credential: {
        // POST /auth/credential
        $post(params: {accessRules: authAccessRule[], redirection?: string}): Promise<auth.Credential>;
    }
    currentCredential: {
        // GET /auth/currentCredential
        $get(): Promise<api.Credential>;
    }
    logout: {
        // POST /auth/logout
        $post(): Promise<void>;
    }
    time: {
        // GET /auth/time
        $get(): Promise<number>;
    }
// Api
  /**
   * Get the current credential details
   * Get the current credential details
   */
  get(path: '/auth/currentCredential'): () => Promise<api.Credential>;
  /**
   * Get the time of OVH servers
   * Get the current time of the OVH servers, since UNIX epoch
   */
  get(path: '/auth/time'): () => Promise<number>;
  /**
   * Operations with credentials
   * Request a new credential for your application
   */
  post(path: '/auth/credential'): (params: {accessRules: authAccessRule[], redirection?: string}) => Promise<auth.Credential>;
  /**
   * Expire current credential
   * Expire current credential
   */
  post(path: '/auth/logout'): () => Promise<void>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type authAccessRule = auth.AccessRule;
type authCredentialStateEnum = auth.CredentialStateEnum;
type authMethodEnum = auth.MethodEnum;

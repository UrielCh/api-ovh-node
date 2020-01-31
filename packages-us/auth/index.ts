import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /auth Models
 * Source: https://api.us.ovhcloud.com/1.0/auth.json
 */
export namespace api {
    // interface fullName: api.Credential.Credential
    export interface Credential {
        allowedIPs?: string[];
        applicationId: number;
        creation: string;
        credentialId: number;
        expiration?: string;
        lastUse?: string;
        ovhSupport: boolean;
        rules: auth.AccessRule[];
        status: auth.CredentialStateEnum;
    }
}
export namespace auth {
    // interface fullName: auth.AccessRule.AccessRule
    export interface AccessRule {
        method: http.MethodEnum;
        path: string;
    }
    // interface fullName: auth.Credential.Credential
    export interface Credential {
        consumerKey: string;
        state: auth.CredentialStateEnum;
        validationUrl?: string;
    }
    // type fullname: auth.CredentialStateEnum
    export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"
    // interface fullName: auth.Details.Details
    export interface Details {
        description?: string;
        method: auth.MethodEnum;
        roles?: string[];
        user?: string;
    }
    // type fullname: auth.MethodEnum
    export type MethodEnum = "account" | "provider" | "user"
    // type fullname: auth.ShouldDisplayMFAEnrollmentEnum
    export type ShouldDisplayMFAEnrollmentEnum = "false" | "forced" | "true"
}
export namespace http {
    // type fullname: http.MethodEnum
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
        $post(params: {accessRules: auth.AccessRule[], redirection?: string}): Promise<auth.Credential>;
    }
    currentCredential: {
        // GET /auth/currentCredential
        $get(): Promise<api.Credential>;
    }
    details: {
        // GET /auth/details
        $get(): Promise<auth.Details>;
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
   * Details about the current authentication
   * Details about the current authentication
   */
  get(path: '/auth/details'): () => Promise<auth.Details>;
  /**
   * Get the time of OVH servers
   * Get the current time of the OVH servers, since UNIX epoch
   */
  get(path: '/auth/time'): () => Promise<number>;
  /**
   * Operations with credentials
   * Request a new credential for your application
   */
  post(path: '/auth/credential'): (params: {accessRules: auth.AccessRule[], redirection?: string}) => Promise<auth.Credential>;
  /**
   * Expire current credential
   * Expire current credential
   */
  post(path: '/auth/logout'): () => Promise<void>;
}

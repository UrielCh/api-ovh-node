import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /auth Models
 * Source: https://eu.api.soyoustart.com/1.0/auth.json
 */
export namespace api {
    /**
     * API Credential
     * interface fullName: api.Credential.Credential
     */
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
    /**
     * Access rule required for the application
     * interface fullName: auth.AccessRule.AccessRule
     */
    export interface AccessRule {
        method: http.MethodEnum;
        path: string;
    }
    /**
     * Credential request to get access to the API
     * interface fullName: auth.Credential.Credential
     */
    export interface Credential {
        consumerKey: string;
        state: auth.CredentialStateEnum;
        validationUrl?: string;
    }
    /**
     * All states a Credential can be in
     * type fullname: auth.CredentialStateEnum
     */
    export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"
    /**
     * Details about the authentication used
     * interface fullName: auth.Details.Details
     */
    export interface Details {
        description?: string;
        method: auth.MethodEnum;
        roles?: string[];
        user?: string;
    }
    /**
     * All Authentication methods available
     * type fullname: auth.MethodEnum
     */
    export type MethodEnum = "account" | "provider" | "user"
}
export namespace http {
    /**
     * All HTTP methods available
     * type fullname: http.MethodEnum
     */
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
 * Api model for /auth
 */
export interface Auth {
    credential: {
        /**
         * Request a new credential for your application
         * POST /auth/credential
         */
        $post(params: { accessRules: auth.AccessRule[], redirection?: string }): Promise<auth.Credential>;
    }
    currentCredential: {
        /**
         * Get the current credential details
         * GET /auth/currentCredential
         */
        $get(): Promise<api.Credential>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    details: {
        /**
         * Details about the current authentication
         * GET /auth/details
         */
        $get(): Promise<auth.Details>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    logout: {
        /**
         * Expire current credential
         * POST /auth/logout
         */
        $post(): Promise<void>;
    }
    time: {
        /**
         * Get the current time of the OVH servers, since UNIX epoch
         * GET /auth/time
         */
        $get(): Promise<number>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
}

import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /auth Models
 * Source: https://ca.api.soyoustart.com/1.0/auth.json
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
     * Access rule allowed to an application
     * interface fullName: auth.AccessRule.AccessRule
     */
    export interface AccessRule {
        method: auth.HTTPMethodEnum;
        path: string;
    }
    /**
     * Access rule requested for the application
     * interface fullName: auth.AccessRuleRequest.AccessRuleRequest
     */
    export interface AccessRuleRequest {
        method: auth.HTTPMethodEnum;
        path: string;
    }
    /**
     * API Application
     * interface fullName: auth.ApiApplication.ApiApplication
     */
    export interface ApiApplication {
        applicationId: number;
        applicationKey: string;
        description: string;
        name: string;
        status: auth.ApplicationStatusEnum;
    }
    /**
     * API Credential
     * interface fullName: auth.ApiCredential.ApiCredential
     */
    export interface ApiCredential {
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
    /**
     * Credential request to get access to the API
     * interface fullName: auth.ApiCredentialRequest.ApiCredentialRequest
     */
    export interface ApiCredentialRequest {
        consumerKey: string;
        state: auth.CredentialStateEnum;
        validationUrl: string;
    }
    /**
     * Credential request to get access to the API
     * interface fullName: auth.ApiCredentialRequestParams.ApiCredentialRequestParams
     */
    export interface ApiCredentialRequestParams {
        accessRules: auth.AccessRuleRequest[];
        allowedIPs: string[];
        redirection?: string;
    }
    /**
     * All states an API Application can be in
     * type fullname: auth.ApplicationStatusEnum
     */
    export type ApplicationStatusEnum = "active" | "blocked" | "inactive" | "trusted"
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
        account: string;
        allowedRoutes?: auth.AccessRule[];
        description?: string;
        identities: string[];
        method: auth.MethodEnum;
        roles?: string[];
        user?: string;
    }
    /**
     * All HTTP methods available
     * type fullname: auth.HTTPMethodEnum
     */
    export type HTTPMethodEnum = "DELETE" | "GET" | "POST" | "PUT"
    /**
     * All authentication methods available
     * type fullname: auth.MethodEnum
     */
    export type MethodEnum = "account" | "oauth2_client_credentials" | "provider" | "user"
}
export namespace http {
    /**
     * All HTTP methods available
     * type fullname: http.MethodEnum
     */
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}
/**
 * Api model for /auth
 */
export interface Auth {
    credential: {
        /**
         * Request a new credential for your application
         * POST /auth/credential
         */
        $post(params: { accessRules: auth.AccessRuleRequest[], allowedIPs?: string[], redirection?: string }): Promise<auth.ApiCredentialRequest>;
    }
    currentCredential: {
        /**
         * Get the current credential details
         * GET /auth/currentCredential
         */
        $get(): Promise<auth.ApiCredential>;
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

export declare function proxyAuth(ovhEngine: OvhRequestable): Auth;
export default proxyAuth;

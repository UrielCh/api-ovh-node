
/**
 * uppercase supported Http methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * cert status enum
 */
export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"

/**
 * Used to map credential response
 * can be exported in case of server integration.
 */
export interface OvhCredentialNew {
    consumerKey: string;
    state: CredentialStateEnum;
    validationUrl: string;
}

/**
 * used to map OVH rules request
 */
export interface AccessRule {
    method: HttpMethod;
    path: string;
}
export interface OvhCredential {
    allowedIPs?: string[];
    applicationId: number;
    creation: string;
    credentialId: number;
    expiration?: string;
    lastUse?: string;
    ovhSupport: boolean;
    rules: AccessRule[];
    status: CredentialStateEnum;
}

/**
 * subset from import { RequestOptions } from 'node:http';
 */
export interface ApiRequestOptions {
    host: string;
    port: number;
    method: HttpMethod;
    path: string;
    timeout: number;
    headers: { [key: string]: string };
};

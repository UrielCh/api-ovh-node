import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /auth Models
 */
export declare namespace api {
    interface Credential {
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
export declare namespace auth {
    interface AccessRule {
        method: http.MethodEnum;
        path: string;
    }
    interface Credential {
        consumerKey: string;
        state: auth.CredentialStateEnum;
        validationUrl?: string;
    }
    type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated";
    interface Details {
        description?: string;
        method: auth.MethodEnum;
        roles?: string[];
        user?: string;
    }
    type MethodEnum = "account" | "provider" | "user";
}
export declare namespace http {
    type MethodEnum = "DELETE" | "GET" | "POST" | "PUT";
}
/**
 * END API /auth Models
 */
export declare function proxyAuth(ovhEngine: OvhRequestable): Auth;
export default proxyAuth;
/**
 * Api Proxy model
 */ export interface Auth {
    credential: {
        $post(params: {
            accessRules: auth.AccessRule[];
            redirection?: string;
        }): Promise<auth.Credential>;
    };
    currentCredential: {
        $get(): Promise<api.Credential>;
    };
    details: {
        $get(): Promise<auth.Details>;
    };
    logout: {
        $post(): Promise<void>;
    };
    time: {
        $get(): Promise<number>;
    };
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
    post(path: '/auth/credential'): (params: {
        accessRules: auth.AccessRule[];
        redirection?: string;
    }) => Promise<auth.Credential>;
    /**
     * Expire current credential
     * Expire current credential
     */
    post(path: '/auth/logout'): () => Promise<void>;
}

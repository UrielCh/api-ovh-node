import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace api {
    //api.Credential
    // fullName: api.Credential.Credential
    export interface Credential {
        applicationId?: number;
        creation?: string;
        credentialId?: number;
        expiration?: string;
        lastUse?: string;
        ovhSupport?: boolean;
        rules?: OVH.auth.AccessRule[];
        status?: OVH.auth.CredentialStateEnum;
    }
}
export namespace auth {
    //auth.AccessRule
    // fullName: auth.AccessRule.AccessRule
    export interface AccessRule {
        method?: OVH.auth.MethodEnum;
        path?: string;
    }
    //auth.Credential
    // fullName: auth.Credential.Credential
    export interface Credential {
        consumerKey?: string;
        state?: OVH.auth.CredentialStateEnum;
        validationUrl?: string;
    }
    //auth.CredentialStateEnum
    export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"
    //auth.MethodEnum
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}
// Apis harmony
// path /auth
export interface Auth {
    credential:  {
        // POST /auth/credential
        $post(body?: {accessRules: auth.AccessRule[], redirection?: string}): Promise<auth.Credential>;
    }
    currentCredential:  {
        // GET /auth/currentCredential
        $get(): Promise<api.Credential>;
    }
    logout:  {
        // POST /auth/logout
        $post(): Promise<void>;
    }
    time:  {
        // GET /auth/time
        $get(): Promise<number>;
    }
}
// Api
type PathsAuthGET = '/auth/currentCredential' |
  '/auth/time';

type PathsAuthPOST = '/auth/credential' |
  '/auth/logout';

export class ApiAuth extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Get the current credential details
   * Get the current credential details
   */
  public get(path: '/auth/currentCredential'): Promise<api.Credential>;
  /**
   * Get the time of OVH servers
   * Get the current time of the OVH servers, since UNIX epoch
   */
  public get(path: '/auth/time'): Promise<number>;
  public get(path: PathsAuthGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Operations with credentials
   * Request a new credential for your application
   */
  public post(path: '/auth/credential', params: {accessRules: OVH.auth.AccessRule[], redirection?: string}): Promise<auth.Credential>;
  /**
   * Expire current credential
   * Expire current credential
   */
  public post(path: '/auth/logout'): Promise<void>;
  public post(path: PathsAuthPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
import { ApiCommon } from '@ovh-api/common';
/**
 * API Credential
 */
export interface ApiCredential {
  /**
   */
  applicationId?: Number;
  /**
   */
  creation?: string;
  /**
   */
  credentialId?: Number;
  /**
   */
  expiration?: string;
  /**
   */
  lastUse?: string;
  /**
   * States whether this credential has been created by yourself or by the OVH support team
   *
   */
  ovhSupport?: boolean;
  /**
   */
  rules?: AuthAccessRule[];
  /**
   */
  status?: AuthCredentialStateEnum;
}
/**
 * Access rule required for the application
 */
export interface AuthAccessRule {
  /**
   */
  method?: AuthMethodEnum;
  /**
   */
  path?: string;
}
/**
 * Credential request to get access to the API
 */
export interface AuthCredential {
  /**
   */
  consumerKey?: string;
  /**
   */
  state?: AuthCredentialStateEnum;
  /**
   */
  validationUrl?: string;
}
/**
 * All states a Credential can be in
 */
export type AuthCredentialStateEnum = 'expired' | 'pendingValidation' | 'refused' | 'validated';
/**
 * All HTTP methods available
 */
export type AuthMethodEnum = 'DELETE' | 'GET' | 'POST' | 'PUT';
type PathsAuthGET = '/auth/currentCredential' | 
'/auth/time';

type PathsAuthPOST = '/auth/credential' | 
'/auth/logout';

export class ApiAuth extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Get the current credential details
  Get the current credential details
  **/
  public get(path: '/auth/currentCredential'): Promise<ApiCredential>;
  /**
  Get the time of OVH servers
  Get the current time of the OVH servers, since UNIX epoch
  **/
  public get(path: '/auth/time'): Promise<Number>;
  public get(path: PathsAuthGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Expire current credential
  Expire current credential
  **/
  public post(path: '/auth/logout'): Promise<void>;
  /**
  Operations with credentials
  Request a new credential for your application
  **/
  public post(path: '/auth/credential'): Promise<AuthCredential>;
  public post(path: PathsAuthPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

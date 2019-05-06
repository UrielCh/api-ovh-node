import { ApiCommon } from '@ovh-api/common';
/**
 * All states a Credential can be in
 */
export type AuthCredentialStateEnum = 'expired' | 'pendingValidation' | 'refused' | 'validated';
/**
 * Credential request to get access to the API
 */
export interface AuthCredential {
  /**
   */
  validationUrl?: string;
  /**
   */
  state?: AuthCredentialStateEnum;
  /**
   */
  consumerKey?: string;
}
/**
 * Access rule required for the application
 */
export interface AuthAccessRule {
  /**
   */
  path?: string;
  /**
   */
  method?: AuthMethodEnum;
}
/**
 * API Credential
 */
export interface ApiCredential {
  /**
   */
  lastUse?: Date;
  /**
   * States whether this credential has been created by yourself or by the OVH support team
   *
   */
  ovhSupport?: boolean;
  /**
   */
  credentialId?: Number;
  /**
   */
  rules?: AuthAccessRule[];
  /**
   */
  expiration?: Date;
  /**
   */
  applicationId?: Number;
  /**
   */
  creation?: Date;
  /**
   */
  status?: AuthCredentialStateEnum;
}
/**
 * All HTTP methods available
 */
export type AuthMethodEnum = 'DELETE' | 'GET' | 'POST' | 'PUT';
type PathscoreGET = '/auth/time' | 
'/auth/currentCredential';

type PathscorePOST = '/auth/logout' | 
'/auth/credential';

class Apicore extends ApiCommon {
  /**
  Get the time of OVH servers
  Get the current time of the OVH servers, since UNIX epoch
  **/
  public get(path: '/auth/time', pathParams: null, queryParams: null): Promise<Number>;
  /**
  Get the current credential details
  Get the current credential details
  **/
  public get(path: '/auth/currentCredential', pathParams: null, queryParams: null): Promise<ApiCredential>;
  public get(path: PathscoreGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Expire current credential
  Expire current credential
  **/
  public post(path: '/auth/logout', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Operations with credentials
  Request a new credential for your application
  **/
  public post(path: '/auth/credential', pathParams: null, queryParams: null, bodyParams: null): Promise<AuthCredential>;
  public post(path: PathscorePOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Type of the service
 */
export type MetricsApiOfferTypeEnum = 'cloud' | 'live';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * Status of of the service
 */
export type MetricsApiServiceStatusEnum = 'new' | 'alive' | 'disabled' | 'dead';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
}
/**
 * Structure holding the elements about a service
 */
export interface MetricsApiService {
  /**
   * Offer used for the service
   *
   */
  offer?: string;
  /**
   * Quota used for the service
   *
   */
  quota?: MetricsApiOption;
  /**
   * Name of a service
   *
   */
  name?: string;
  /**
   * Description of a service
   *
   */
  description?: string;
  /**
   * Type of the service: cloud or live
   *
   */
  type?: MetricsApiOfferTypeEnum;
  /**
   * Region holding the service
   *
   */
  region?: MetricsApiRegion;
  /**
   * Indicator if the service should be upgraded based on current quota and offer
   *
   */
  shouldUpgrade?: boolean;
  /**
   * Status of a service
   *
   */
  status?: MetricsApiServiceStatusEnum;
}
/**
 * Structure holding the elements about a region
 */
export interface MetricsApiRegion {
  /**
   * Name of a region
   *
   */
  name?: string;
  /**
   * Description of a region
   *
   */
  description?: string;
}
/**
 * Structure holding the options for a service
 */
export interface MetricsApiOption {
  /**
   * Monthly active device streams
   *
   */
  mads?: Number;
  /**
   * Daily data points
   *
   */
  ddp?: Number;
  /**
   * Time of last modification
   *
   */
  lastModification?: Date;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Description not available
 */
export type MetricsApiPermissionEnum = 'read' | 'write';
/**
 * Structure holding the elements about a token
 */
export interface MetricsApiToken {
  /**
   * Is your token revoked?
   *
   */
  isRevoked?: boolean;
  /**
   * Token creation date
   *
   */
  createdAt?: Date;
  /**
   * Token expiration date
   *
   */
  expiredAt?: Date;
  /**
   * The actual access token
   *
   */
  access?: string;
  /**
   * Description of the token
   *
   */
  description?: string;
  /**
   * Id of the token
   *
   */
  id?: string;
  /**
   * Token type: read or write
   *
   */
  type?: MetricsApiPermissionEnum;
  /**
   * Labels for the token if set
   *
   */
  labels?: MetricsApiLabel[];
}
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactAdmin?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  expiration?: Date;
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Structure holding the elements about a label
 */
export interface MetricsApiLabel {
  /**
   * Label value
   *
   */
  value?: string;
  /**
   * Label key
   *
   */
  key?: string;
}
/**
 * Structure holding the consumption
 */
export interface MetricsApiConsumption {
  /**
   * Current monthly active data streams
   *
   */
  mads?: Number;
  /**
   * Current Daily data points
   *
   */
  ddp?: Number;
}
type PathsmetricsGET = '/metrics/{serviceName}/consumption' | 
'/metrics/{serviceName}/serviceInfos' | 
'/metrics/{serviceName}/token/{tokenId}' | 
'/metrics/{serviceName}/token' | 
'/metrics/{serviceName}' | 
'/metrics';

type PathsmetricsPUT = '/metrics/{serviceName}/serviceInfos' | 
'/metrics/{serviceName}/token/{tokenId}' | 
'/metrics/{serviceName}' | 
'/metrics/{serviceName}/quota';

type PathsmetricsPOST = '/metrics/{serviceName}/confirmTermination' | 
'/metrics/{serviceName}/terminate' | 
'/metrics/{serviceName}/token' | 
'/metrics/{serviceName}/changeContact' | 
'/metrics/{serviceName}/lookup/token';

type PathsmetricsDELETE = '/metrics/{serviceName}/token/{tokenId}';

class Apimetrics extends ApiCommon {
  /**
  Missing description
  Get consumption for your service
  **/
  public get(path: '/metrics/{serviceName}/consumption', pathParams: {serviceName?: string}, queryParams: {duration?: Number}): Promise<MetricsApiConsumption>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/metrics/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Missing description
  Get a specific token
  **/
  public get(path: '/metrics/{serviceName}/token/{tokenId}', pathParams: {serviceName?: string, tokenId?: string}, queryParams: null): Promise<MetricsApiToken>;
  /**
  Missing description
  Get list of tokens
  **/
  public get(path: '/metrics/{serviceName}/token', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Get service
  **/
  public get(path: '/metrics/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<MetricsApiService>;
  /**
  Operations about the METRICS service
  List available services
  **/
  public get(path: '/metrics', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsmetricsGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/metrics/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Modify a token
  **/
  public put(path: '/metrics/{serviceName}/token/{tokenId}', pathParams: {serviceName?: string, tokenId?: string}, queryParams: null, bodyParams: null): Promise<MetricsApiToken>;
  /**
  Missing description
  Modify service
  **/
  public put(path: '/metrics/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<MetricsApiService>;
  /**
  Missing description
  Set overquota
  **/
  public put(path: '/metrics/{serviceName}/quota', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public put(path: PathsmetricsPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/metrics/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/metrics/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Missing description
  Create a token
  **/
  public post(path: '/metrics/{serviceName}/token', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<MetricsApiToken>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/metrics/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  Missing description
  Find TokenID for a specific token
  **/
  public post(path: '/metrics/{serviceName}/lookup/token', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string[]>;
  public post(path: PathsmetricsPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Missing description
  Revoke a token
  **/
  public delete(path: '/metrics/{serviceName}/token/{tokenId}', pathParams: {serviceName?: string, tokenId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathsmetricsDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

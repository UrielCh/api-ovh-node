import { ApiCommon } from '@ovh-api/common';
/**
 * Structure holding the consumption
 */
export interface MetricsApiConsumption {
  /**
   * Current Daily data points
   *
   */
  ddp?: Number;
  /**
   * Current monthly active data streams
   *
   */
  mads?: Number;
}
/**
 * Structure holding the elements about a label
 */
export interface MetricsApiLabel {
  /**
   * Label key
   *
   */
  key?: string;
  /**
   * Label value
   *
   */
  value?: string;
}
/**
 * Type of the service
 */
export type MetricsApiOfferTypeEnum = 'cloud' | 'live';
/**
 * Structure holding the options for a service
 */
export interface MetricsApiOption {
  /**
   * Daily data points
   *
   */
  ddp?: Number;
  /**
   * Time of last modification
   *
   */
  lastModification?: string;
  /**
   * Monthly active device streams
   *
   */
  mads?: Number;
}
/**
 * Description not available
 */
export type MetricsApiPermissionEnum = 'read' | 'write';
/**
 * Structure holding the elements about a region
 */
export interface MetricsApiRegion {
  /**
   * Description of a region
   *
   */
  description?: string;
  /**
   * Name of a region
   *
   */
  name?: string;
}
/**
 * Structure holding the elements about a service
 */
export interface MetricsApiService {
  /**
   * Description of a service
   *
   */
  description?: string;
  /**
   * Name of a service
   *
   */
  name?: string;
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
  /**
   * Type of the service: cloud or live
   *
   */
  type?: MetricsApiOfferTypeEnum;
}
/**
 * Status of of the service
 */
export type MetricsApiServiceStatusEnum = 'alive' | 'dead' | 'disabled' | 'new';
/**
 * Structure holding the elements about a token
 */
export interface MetricsApiToken {
  /**
   * The actual access token
   *
   */
  access?: string;
  /**
   * Token creation date
   *
   */
  createdAt?: string;
  /**
   * Description of the token
   *
   */
  description?: string;
  /**
   * Token expiration date
   *
   */
  expiredAt?: string;
  /**
   * Id of the token
   *
   */
  id?: string;
  /**
   * Is your token revoked?
   *
   */
  isRevoked?: boolean;
  /**
   * Labels for the token if set
   *
   */
  labels?: MetricsApiLabel[];
  /**
   * Token type: read or write
   *
   */
  type?: MetricsApiPermissionEnum;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsMetricsGET = '/metrics' | 
'/metrics/{serviceName}' | 
'/metrics/{serviceName}/consumption' | 
'/metrics/{serviceName}/serviceInfos' | 
'/metrics/{serviceName}/token' | 
'/metrics/{serviceName}/token/{tokenId}';

type PathsMetricsPUT = '/metrics/{serviceName}' | 
'/metrics/{serviceName}/quota' | 
'/metrics/{serviceName}/serviceInfos' | 
'/metrics/{serviceName}/token/{tokenId}';

type PathsMetricsPOST = '/metrics/{serviceName}/changeContact' | 
'/metrics/{serviceName}/confirmTermination' | 
'/metrics/{serviceName}/lookup/token' | 
'/metrics/{serviceName}/terminate' | 
'/metrics/{serviceName}/token';

type PathsMetricsDELETE = '/metrics/{serviceName}/token/{tokenId}';

export class ApiMetrics extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the METRICS service
  List available services
  **/
  public get(path: '/metrics'): Promise<string[]>;
  /**
  Missing description
  Get service
  **/
  public get(path: '/metrics/{serviceName}', pathParams: {serviceName: string}): Promise<MetricsApiService>;
  /**
  Missing description
  Get consumption for your service
  **/
  public get(path: '/metrics/{serviceName}/consumption', pathParams: {serviceName: string}, queryParams: {duration?: Number}): Promise<MetricsApiConsumption>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/metrics/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Missing description
  Get list of tokens
  **/
  public get(path: '/metrics/{serviceName}/token', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Get a specific token
  **/
  public get(path: '/metrics/{serviceName}/token/{tokenId}', pathParams: {serviceName: string, tokenId: string}): Promise<MetricsApiToken>;
  public get(path: PathsMetricsGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Missing description
  Modify service
  **/
  public put(path: '/metrics/{serviceName}', pathParams: {serviceName: string}): Promise<MetricsApiService>;
  /**
  Missing description
  Set overquota
  **/
  public put(path: '/metrics/{serviceName}/quota', pathParams: {serviceName: string}): Promise<string>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/metrics/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Missing description
  Modify a token
  **/
  public put(path: '/metrics/{serviceName}/token/{tokenId}', pathParams: {serviceName: string, tokenId: string}): Promise<MetricsApiToken>;
  public put(path: PathsMetricsPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/metrics/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/metrics/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  Missing description
  Find TokenID for a specific token
  **/
  public post(path: '/metrics/{serviceName}/lookup/token', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/metrics/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  Missing description
  Create a token
  **/
  public post(path: '/metrics/{serviceName}/token', pathParams: {serviceName: string}): Promise<MetricsApiToken>;
  public post(path: PathsMetricsPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Missing description
  Revoke a token
  **/
  public delete(path: '/metrics/{serviceName}/token/{tokenId}', pathParams: {serviceName: string, tokenId: string}): Promise<void>;
  public delete(path: PathsMetricsDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

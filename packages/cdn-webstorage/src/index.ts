import { ApiCommon } from '@ovh-api/common';
/**
 * Static CDN
 */
export interface CdnWebstorageAccount {
  /**
   */
  domain?: string;
  /**
   */
  server?: string;
  /**
   * value in Bytes
   *
   */
  storageLimit?: Number;
  /**
   * value in Bytes
   *
   */
  storageUsage?: Number;
}
/**
 * A structure with credentials for using openstack account
 */
export interface CdnWebstorageAccountCredentials {
  /**
   */
  endpoint?: string;
  /**
   */
  login?: string;
  /**
   */
  password?: string;
  /**
   */
  tenant?: string;
}
/**
 * A structure describing type of a stats hash
 */
export interface CdnWebstorageStatsDataType {
  /**
   */
  date?: string;
  /**
   */
  value?: Number;
}
/**
 * Period of the statistics
 */
export type CdnWebstorageStatsPeriodEnum = 'day' | 'month' | 'week';
/**
 * Type of statistics related to cache
 */
export type CdnWebstorageStatsTypeEnum = 'backend' | 'cdn' | 'quota';
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
type PathsCdnWebstorageGET = '/cdn/webstorage' | 
'/cdn/webstorage/{serviceName}' | 
'/cdn/webstorage/{serviceName}/credentials' | 
'/cdn/webstorage/{serviceName}/serviceInfos' | 
'/cdn/webstorage/{serviceName}/statistics';

type PathsCdnWebstoragePUT = '/cdn/webstorage/{serviceName}/serviceInfos';

export class ApiCdnWebstorage extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the CDNSTATIC service
  List available services
  **/
  public get(path: '/cdn/webstorage'): Promise<string[]>;
  /**
  Static CDN
  Get this object properties
  **/
  public get(path: '/cdn/webstorage/{serviceName}', pathParams: {serviceName: string}): Promise<CdnWebstorageAccount>;
  /**
  credentials operations
  Gives for customer credentials to accesss swift account
  **/
  public get(path: '/cdn/webstorage/{serviceName}/credentials', pathParams: {serviceName: string}): Promise<CdnWebstorageAccountCredentials>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cdn/webstorage/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  statistics operations
  Return stats about bandwidth consumption
  **/
  public get(path: '/cdn/webstorage/{serviceName}/statistics', pathParams: {serviceName: string}, queryParams: {period?: CdnWebstorageStatsPeriodEnum, type?: CdnWebstorageStatsTypeEnum}): Promise<CdnWebstorageStatsDataType[]>;
  public get(path: PathsCdnWebstorageGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cdn/webstorage/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsCdnWebstoragePUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
}

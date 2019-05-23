import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Static CDN
 */
export interface CdnWebstorageAccount {
  /**
   */
  domain: string;
  /**
   */
  server: string;
  /**
   * value in Bytes
   *
   */
  storageLimit: number;
  /**
   * value in Bytes
   *
   */
  storageUsage: number;
}
/**
 * A structure with credentials for using openstack account
 */
export interface CdnWebstorageAccountCredentials {
  /**
   */
  endpoint: string;
  /**
   */
  login: string;
  /**
   */
  password: string;
  /**
   */
  tenant: string;
}
/**
 * A structure describing type of a stats hash
 */
export interface CdnWebstorageStatsDataType {
  /**
   */
  date: string;
  /**
   */
  value: number;
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
  automatic: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: number;
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
  canDeleteAtExpiration: boolean;
  /**
   */
  contactAdmin: string;
  /**
   */
  contactBilling: string;
  /**
   */
  contactTech: string;
  /**
   */
  creation: string;
  /**
   */
  domain: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType: ServiceRenewalTypeEnum;
  /**
   */
  serviceId: number;
  /**
   */
  status: ServiceStateEnum;
}
type PathsCdnWebstorageGET = '/cdn/webstorage' | 
'/cdn/webstorage/{serviceName}' | 
'/cdn/webstorage/{serviceName}/credentials' | 
'/cdn/webstorage/{serviceName}/serviceInfos' | 
'/cdn/webstorage/{serviceName}/statistics';

type PathsCdnWebstoragePUT = '/cdn/webstorage/{serviceName}/serviceInfos';

export class ApiCdnWebstorage extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
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
  public get(path: '/cdn/webstorage/{serviceName}', params: {serviceName: string}): Promise<CdnWebstorageAccount>;
  /**
  credentials operations
  Gives for customer credentials to accesss swift account
  **/
  public get(path: '/cdn/webstorage/{serviceName}/credentials', params: {serviceName: string}): Promise<CdnWebstorageAccountCredentials>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cdn/webstorage/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  statistics operations
  Return stats about bandwidth consumption
  **/
  public get(path: '/cdn/webstorage/{serviceName}/statistics', params: {serviceName: string, period: CdnWebstorageStatsPeriodEnum, type: CdnWebstorageStatsTypeEnum}): Promise<CdnWebstorageStatsDataType[]>;
  public get(path: PathsCdnWebstorageGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cdn/webstorage/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsCdnWebstoragePUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
}
export default ApiCdnWebstorage;

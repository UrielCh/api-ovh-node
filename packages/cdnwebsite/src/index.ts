import { ApiCommon } from '@ovh-api/common';
/**
 * Website CDN
 */
export interface CdnWebsiteWebsite {
  /**
   */
  offer?: string;
  /**
   */
  anycast?: string;
  /**
   */
  service?: string;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * All states a CDN task can be in
 */
export type CdnWebsiteTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Value bandwidth or request
 */
export type CdnWebsiteStatsValueEnum = 'bandwidth' | 'request';
/**
 * A structure describing type of a stats hash
 */
export interface CdnWebsiteStatsDataType {
  /**
   */
  date?: Date;
  /**
   */
  value?: Number;
}
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
 * Period of the statistics
 */
export type CdnWebsiteStatsPeriodEnum = 'day' | 'month' | 'week';
/**
 * All function CDN task can be
 */
export type CdnWebsiteTaskFunctionEnum = 'flushAll' | 'installBackend' | 'removeBackend' | 'removeDomain' | 'removeZone';
/**
 * All states a status can be in
 */
export type CdnWebsiteBackendStatusEnum = 'creating' | 'error' | 'on' | 'removing';
/**
 * Task on CDN
 */
export interface CdnWebsiteTask {
  /**
   */
  function?: CdnWebsiteTaskFunctionEnum;
  /**
   */
  comment?: string;
  /**
   */
  taskId?: Number;
  /**
   */
  status?: CdnWebsiteTaskStateEnum;
}
/**
 * Domain on CDN
 */
export interface CdnWebsiteDomain {
  /**
   */
  domain?: string;
  /**
   */
  status?: CdnWebsiteDomainStatusEnum;
}
/**
 * Type of statistics related to cache
 */
export type CdnWebsiteStatsTypeEnum = 'backend' | 'cdn';
/**
 * Backend on zone
 */
export interface CdnWebsiteBackend {
  /**
   */
  ipv4?: string;
  /**
   */
  status?: CdnWebsiteBackendStatusEnum;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Zone on CDN
 */
export interface CdnWebsiteZone {
  /**
   */
  zone?: string;
  /**
   */
  status?: CdnWebsiteDomainZoneStatusEnum;
}
/**
 * All states a status can be in
 */
export type CdnWebsiteDomainStatusEnum = 'error' | 'on' | 'removing';
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
/**
 * All states a status can be in
 */
export type CdnWebsiteDomainZoneStatusEnum = 'error' | 'on' | 'removing';
type PathscdnwebsiteGET = '/cdn/website' | 
'/cdn/website/{serviceName}/serviceInfos' | 
'/cdn/website/{serviceName}/zone/domains' | 
'/cdn/website/{serviceName}/zone/domains/{domain}' | 
'/cdn/website/{serviceName}/zone/domains/{domain}/statistics' | 
'/cdn/website/{serviceName}/zone/domains/{domain}/tasks' | 
'/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}' | 
'/cdn/website/{serviceName}/zone' | 
'/cdn/website/{serviceName}/zone/tasks' | 
'/cdn/website/{serviceName}/zone/tasks/{taskId}' | 
'/cdn/website/{serviceName}/zone/backends' | 
'/cdn/website/{serviceName}/zone/backends/{ipv4}' | 
'/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}' | 
'/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks' | 
'/cdn/website/{serviceName}';

type PathscdnwebsitePUT = '/cdn/website/{serviceName}/serviceInfos';

type PathscdnwebsitePOST = '/cdn/website/{serviceName}/zone/domains' | 
'/cdn/website/{serviceName}/zone/domains/{domain}/flush' | 
'/cdn/website/{serviceName}/zone' | 
'/cdn/website/{serviceName}/zone/backends';

type PathscdnwebsiteDELETE = '/cdn/website/{serviceName}/zone/domains/{domain}' | 
'/cdn/website/{serviceName}/zone' | 
'/cdn/website/{serviceName}/zone/backends/{ipv4}';

class Apicdnwebsite extends ApiCommon {
  /**
  Operations about the CDNWEBSITE service
  List available services
  **/
  public get(path: '/cdn/website', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the cdn.website.Domain objects
  Domain associated to this zone
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Domain on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<CdnWebsiteDomain>;
  /**
  statistics operations
  Get statistics about request on CDN, bandwidth value in Bytes
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/statistics', pathParams: {serviceName?: string, domain?: string}, queryParams: {period?: CdnWebsiteStatsPeriodEnum, value?: CdnWebsiteStatsValueEnum, type?: CdnWebsiteStatsTypeEnum}): Promise<CdnWebsiteStatsDataType[]>;
  /**
  List the cdn.website.Task objects
  Task associated to this domain
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/tasks', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<Number[]>;
  /**
  Task on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}', pathParams: {serviceName?: string, domain?: string, taskId?: Number}, queryParams: null): Promise<CdnWebsiteTask>;
  /**
  Zone on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone', pathParams: {serviceName?: string}, queryParams: null): Promise<CdnWebsiteZone>;
  /**
  List the cdn.website.Task objects
  Task associated to this zone
  **/
  public get(path: '/cdn/website/{serviceName}/zone/tasks', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Task on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/tasks/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<CdnWebsiteTask>;
  /**
  List the cdn.website.Backend objects
  Backend associated to this zone
  **/
  public get(path: '/cdn/website/{serviceName}/zone/backends', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Backend on zone
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}', pathParams: {serviceName?: string, ipv4?: string}, queryParams: null): Promise<CdnWebsiteBackend>;
  /**
  Task on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}', pathParams: {serviceName?: string, ipv4?: string, taskId?: Number}, queryParams: null): Promise<CdnWebsiteTask>;
  /**
  List the cdn.website.Task objects
  Task associated to this backend
  **/
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks', pathParams: {serviceName?: string, ipv4?: string}, queryParams: null): Promise<Number[]>;
  /**
  Website CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<CdnWebsiteWebsite>;
  public get(path: PathscdnwebsiteGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cdn/website/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathscdnwebsitePUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  List the cdn.website.Domain objects
  Configure a domain on CDN
  **/
  public post(path: '/cdn/website/{serviceName}/zone/domains', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CdnWebsiteDomain>;
  /**
  flush operations
  Flush all cache
  **/
  public post(path: '/cdn/website/{serviceName}/zone/domains/{domain}/flush', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<CdnWebsiteTask>;
  /**
  Zone on CDN
  Configure a zone on CDN
  **/
  public post(path: '/cdn/website/{serviceName}/zone', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CdnWebsiteZone>;
  /**
  List the cdn.website.Backend objects
  Configure a backend on the zone
  **/
  public post(path: '/cdn/website/{serviceName}/zone/backends', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CdnWebsiteTask>;
  public post(path: PathscdnwebsitePOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Domain on CDN
  Remove a domain from the CDN
  **/
  public delete(path: '/cdn/website/{serviceName}/zone/domains/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<CdnWebsiteTask>;
  /**
  Zone on CDN
  Remove a zone from the CDN
  **/
  public delete(path: '/cdn/website/{serviceName}/zone', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CdnWebsiteTask>;
  /**
  Backend on zone
  Remove a backend from the zone
  **/
  public delete(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}', pathParams: {serviceName?: string, ipv4?: string}, queryParams: null, bodyParams: null): Promise<CdnWebsiteTask>;
  public delete(path: PathscdnwebsiteDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

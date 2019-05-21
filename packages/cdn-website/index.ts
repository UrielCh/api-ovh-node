import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
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
 * All states a status can be in
 */
export type CdnWebsiteBackendStatusEnum = 'creating' | 'error' | 'on' | 'removing';
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
 * All states a status can be in
 */
export type CdnWebsiteDomainStatusEnum = 'error' | 'on' | 'removing';
/**
 * All states a status can be in
 */
export type CdnWebsiteDomainZoneStatusEnum = 'error' | 'on' | 'removing';
/**
 * A structure describing type of a stats hash
 */
export interface CdnWebsiteStatsDataType {
  /**
   */
  date?: string;
  /**
   */
  value?: number;
}
/**
 * Period of the statistics
 */
export type CdnWebsiteStatsPeriodEnum = 'day' | 'month' | 'week';
/**
 * Type of statistics related to cache
 */
export type CdnWebsiteStatsTypeEnum = 'backend' | 'cdn';
/**
 * Value bandwidth or request
 */
export type CdnWebsiteStatsValueEnum = 'bandwidth' | 'request';
/**
 * Task on CDN
 */
export interface CdnWebsiteTask {
  /**
   */
  comment?: string;
  /**
   */
  function?: CdnWebsiteTaskFunctionEnum;
  /**
   */
  status?: CdnWebsiteTaskStateEnum;
  /**
   */
  taskId?: number;
}
/**
 * All function CDN task can be
 */
export type CdnWebsiteTaskFunctionEnum = 'flushAll' | 'installBackend' | 'removeBackend' | 'removeDomain' | 'removeZone';
/**
 * All states a CDN task can be in
 */
export type CdnWebsiteTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Website CDN
 */
export interface CdnWebsiteWebsite {
  /**
   */
  anycast?: string;
  /**
   */
  offer?: string;
  /**
   */
  service?: string;
}
/**
 * Zone on CDN
 */
export interface CdnWebsiteZone {
  /**
   */
  status?: CdnWebsiteDomainZoneStatusEnum;
  /**
   */
  zone?: string;
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
  possibleRenewPeriod?: number[];
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
  serviceId?: number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsCdnWebsiteGET = '/cdn/website' | 
'/cdn/website/{serviceName}' | 
'/cdn/website/{serviceName}/serviceInfos' | 
'/cdn/website/{serviceName}/zone' | 
'/cdn/website/{serviceName}/zone/backends' | 
'/cdn/website/{serviceName}/zone/backends/{ipv4}' | 
'/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks' | 
'/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}' | 
'/cdn/website/{serviceName}/zone/domains' | 
'/cdn/website/{serviceName}/zone/domains/{domain}' | 
'/cdn/website/{serviceName}/zone/domains/{domain}/statistics' | 
'/cdn/website/{serviceName}/zone/domains/{domain}/tasks' | 
'/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}' | 
'/cdn/website/{serviceName}/zone/tasks' | 
'/cdn/website/{serviceName}/zone/tasks/{taskId}';

type PathsCdnWebsitePUT = '/cdn/website/{serviceName}/serviceInfos';

type PathsCdnWebsitePOST = '/cdn/website/{serviceName}/zone' | 
'/cdn/website/{serviceName}/zone/backends' | 
'/cdn/website/{serviceName}/zone/domains' | 
'/cdn/website/{serviceName}/zone/domains/{domain}/flush';

type PathsCdnWebsiteDELETE = '/cdn/website/{serviceName}/zone' | 
'/cdn/website/{serviceName}/zone/backends/{ipv4}' | 
'/cdn/website/{serviceName}/zone/domains/{domain}';

export class ApiCdnWebsite extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the CDNWEBSITE service
  List available services
  **/
  public get(path: '/cdn/website'): Promise<string[]>;
  /**
  Website CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}', params: {serviceName: string}): Promise<CdnWebsiteWebsite>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  Zone on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone', params: {serviceName: string}): Promise<CdnWebsiteZone>;
  /**
  List the cdn.website.Backend objects
  Backend associated to this zone
  **/
  public get(path: '/cdn/website/{serviceName}/zone/backends', params: {serviceName: string}): Promise<string[]>;
  /**
  Backend on zone
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}', params: {serviceName: string, ipv4: string}): Promise<CdnWebsiteBackend>;
  /**
  List the cdn.website.Task objects
  Task associated to this backend
  **/
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks', params: {serviceName: string, ipv4: string}): Promise<number[]>;
  /**
  Task on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}', params: {serviceName: string, ipv4: string, taskId: number}): Promise<CdnWebsiteTask>;
  /**
  List the cdn.website.Domain objects
  Domain associated to this zone
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains', params: {serviceName: string}): Promise<string[]>;
  /**
  Domain on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}', params: {serviceName: string, domain: string}): Promise<CdnWebsiteDomain>;
  /**
  statistics operations
  Get statistics about request on CDN, bandwidth value in Bytes
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/statistics', params: {serviceName: string, domain: string, period: CdnWebsiteStatsPeriodEnum, type: CdnWebsiteStatsTypeEnum, value: CdnWebsiteStatsValueEnum}): Promise<CdnWebsiteStatsDataType[]>;
  /**
  List the cdn.website.Task objects
  Task associated to this domain
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/tasks', params: {serviceName: string, domain: string}): Promise<number[]>;
  /**
  Task on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}', params: {serviceName: string, domain: string, taskId: number}): Promise<CdnWebsiteTask>;
  /**
  List the cdn.website.Task objects
  Task associated to this zone
  **/
  public get(path: '/cdn/website/{serviceName}/zone/tasks', params: {serviceName: string}): Promise<number[]>;
  /**
  Task on CDN
  Get this object properties
  **/
  public get(path: '/cdn/website/{serviceName}/zone/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<CdnWebsiteTask>;
  public get(path: PathsCdnWebsiteGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cdn/website/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsCdnWebsitePUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Zone on CDN
  Configure a zone on CDN
  **/
  public post(path: '/cdn/website/{serviceName}/zone', params: {serviceName: string}): Promise<CdnWebsiteZone>;
  /**
  List the cdn.website.Backend objects
  Configure a backend on the zone
  **/
  public post(path: '/cdn/website/{serviceName}/zone/backends', params: {serviceName: string}): Promise<CdnWebsiteTask>;
  /**
  List the cdn.website.Domain objects
  Configure a domain on CDN
  **/
  public post(path: '/cdn/website/{serviceName}/zone/domains', params: {serviceName: string}): Promise<CdnWebsiteDomain>;
  /**
  flush operations
  Flush all cache
  **/
  public post(path: '/cdn/website/{serviceName}/zone/domains/{domain}/flush', params: {serviceName: string, domain: string}): Promise<CdnWebsiteTask>;
  public post(path: PathsCdnWebsitePOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Zone on CDN
  Remove a zone from the CDN
  **/
  public delete(path: '/cdn/website/{serviceName}/zone', params: {serviceName: string}): Promise<CdnWebsiteTask>;
  /**
  Backend on zone
  Remove a backend from the zone
  **/
  public delete(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}', params: {serviceName: string, ipv4: string}): Promise<CdnWebsiteTask>;
  /**
  Domain on CDN
  Remove a domain from the CDN
  **/
  public delete(path: '/cdn/website/{serviceName}/zone/domains/{domain}', params: {serviceName: string, domain: string}): Promise<CdnWebsiteTask>;
  public delete(path: PathsCdnWebsiteDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}

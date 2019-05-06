import { ApiCommon } from '@ovh-api/common';
/**
 * Anycast IP of a CDN customer
 */
export interface CdnanycastAnycast {
  /**
   */
  anycast?: string;
  /**
   */
  backendLimit?: Number;
  /**
   */
  backendUse?: Number;
  /**
   */
  cacheRuleLimitPerDomain?: Number;
  /**
   */
  lastQuotaOrder?: string;
  /**
   * URL for downloading daily log of your CDN
   *
   */
  logUrl?: string;
  /**
   */
  offer?: string;
  /**
   */
  quota?: Number;
  /**
   * The internal name of your CDN offer
   *
   */
  service?: string;
}
/**
 * Backend for a domain
 */
export interface CdnanycastBackend {
  /**
   */
  ip?: string;
}
/**
 * CacheRules for a domain
 */
export interface CdnanycastCacheRule {
  /**
   * Id for this cache rule
   *
   */
  cacheRuleId?: Number;
  /**
   */
  cacheType?: CdnanycastCacheRuleCacheTypeEnum;
  /**
   */
  domain?: string;
  /**
   */
  fileMatch?: string;
  /**
   */
  fileType?: CdnanycastCacheRuleFileTypeEnum;
  /**
   */
  status?: CdnanycastCacheRuleStatusEnum;
  /**
   */
  ttl?: Number;
}
/**
 * All type a cache can be in
 */
export type CdnanycastCacheRuleCacheTypeEnum = 'forceCache' | 'noCache';
/**
 * All states an anycast pool can be in
 */
export type CdnanycastCacheRuleFileTypeEnum = 'extension' | 'file' | 'folder';
/**
 * All states a status can be in
 */
export type CdnanycastCacheRuleStatusEnum = 'creating' | 'deleting' | 'error' | 'off' | 'on' | 'updating';
/**
 * Domain on CDN
 */
export interface CdnanycastDomain {
  /**
   */
  cacheRuleUse?: Number;
  /**
   */
  cname?: string;
  /**
   * Domain of this object
   *
   */
  domain?: string;
  /**
   */
  status?: CdnanycastDomainStatusEnum;
  /**
   */
  type?: CdnanycastDomainTypeEnum;
}
/**
 * All states a status can be in
 */
export type CdnanycastDomainStatusEnum = 'error' | 'off' | 'on' | 'removing';
/**
 * All type of Domain
 */
export type CdnanycastDomainTypeEnum = 'plain' | 'ssl';
/**
 * URL to real time logs
 */
export interface CdnanycastLogsURL {
  /**
   * URL expiration date
   *
   */
  expirationDate?: string;
  /**
   * URL to logs
   *
   */
  url?: string;
}
/**
 * CDN Pop
 */
export interface CdnanycastPop {
  /**
   */
  city?: string;
  /**
   */
  comment?: string;
  /**
   * Name of the pop
   *
   */
  name?: string;
  /**
   */
  status?: CdnanycastPopStatusEnum;
}
/**
 * All Pop status
 */
export type CdnanycastPopStatusEnum = 'down' | 'ok' | 'rerouted' | 'unknown';
/**
 * CDN Ssl
 */
export interface CdnanycastSsl {
  /**
   * Provider of the certificate installed on CDN
   *
   */
  certificateProvider?: string;
  /**
   */
  certificateValidFrom?: string;
  /**
   */
  certificateValidTo?: string;
  /**
   */
  cn?: string;
  /**
   */
  name?: string;
  /**
   */
  status?: CdnanycastSslStateEnum;
}
/**
 * All states a CDN SSL can be in
 */
export type CdnanycastSslStateEnum = 'checking' | 'creating' | 'error' | 'off' | 'on' | 'removing' | 'updating' | 'uploading';
/**
 * A structure describing type of a stats hash
 */
export interface CdnanycastStatsDataType {
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
export type CdnanycastStatsPeriodEnum = 'day' | 'month' | 'week';
/**
 * Type of statistics related to cache
 */
export type CdnanycastStatsTypeEnum = 'backend' | 'cdn' | 'threat';
/**
 * Value bandwidth or request
 */
export type CdnanycastStatsValueEnum = 'bandwidth' | 'request';
/**
 * Task on a CDN
 */
export interface CdnanycastTask {
  /**
   */
  comment?: string;
  /**
   */
  function?: CdnanycastTaskFunctionEnum;
  /**
   */
  status?: CdnanycastTaskStateEnum;
  /**
   */
  taskId?: Number;
}
/**
 * All function CDN task can be
 */
export type CdnanycastTaskFunctionEnum = 'flush' | 'flushAll' | 'generateSsl' | 'installSsl' | 'reinstallSsl' | 'removeDomain' | 'uninstallSsl' | 'updateCacheRule';
/**
 * All states a CDN task can be in
 */
export type CdnanycastTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
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
type PathsCdnDedicatedGET = '/cdn/dedicated/pops' | 
'/cdn/dedicated/pops/{name}' | 
'/cdn/dedicated' | 
'/cdn/dedicated/{serviceName}' | 
'/cdn/dedicated/{serviceName}/ssl/tasks' | 
'/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}' | 
'/cdn/dedicated/{serviceName}/ssl' | 
'/cdn/dedicated/{serviceName}/quota' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/statistics' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/backends' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/tasks' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}' | 
'/cdn/dedicated/{serviceName}/domains' | 
'/cdn/dedicated/{serviceName}/serviceInfos';

type PathsCdnDedicatedPUT = '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}' | 
'/cdn/dedicated/{serviceName}/serviceInfos';

type PathsCdnDedicatedPOST = '/cdn/dedicated/{serviceName}/ssl/update' | 
'/cdn/dedicated/{serviceName}/ssl' | 
'/cdn/dedicated/{serviceName}/changeContact' | 
'/cdn/dedicated/{serviceName}/logs' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/logs' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/backends' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/flush' | 
'/cdn/dedicated/{serviceName}/domains';

type PathsCdnDedicatedDELETE = '/cdn/dedicated/{serviceName}/ssl' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}';

export class ApiCdnDedicated extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  List the cdnanycast.Pop objects
  List of CDN Pops
  **/
  public get(path: '/cdn/dedicated/pops'): Promise<string[]>;
  /**
  CDN Pop
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/pops/{name}', pathParams: {name: string}): Promise<CdnanycastPop>;
  /**
  Operations about the CDNANYCAST service
  List available services
  **/
  public get(path: '/cdn/dedicated'): Promise<string[]>;
  /**
  Anycast IP of a CDN customer
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}', pathParams: {serviceName: string}): Promise<CdnanycastAnycast>;
  /**
  List the cdnanycast.Task objects
  Task associated to the ssl
  **/
  public get(path: '/cdn/dedicated/{serviceName}/ssl/tasks', pathParams: {serviceName: string}, queryParams: {function?: CdnanycastTaskFunctionEnum, status?: CdnanycastTaskStateEnum}): Promise<Number[]>;
  /**
  Task on a CDN
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<CdnanycastTask>;
  /**
  CDN Ssl
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/ssl', pathParams: {serviceName: string}): Promise<CdnanycastSsl>;
  /**
  quota operations
  Return quota history
  **/
  public get(path: '/cdn/dedicated/{serviceName}/quota', pathParams: {serviceName: string}, queryParams: {period?: CdnanycastStatsPeriodEnum}): Promise<CdnanycastStatsDataType[]>;
  /**
  statistics operations
  Return stats about a domain
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/statistics', pathParams: {serviceName: string, domain: string}, queryParams: {period?: CdnanycastStatsPeriodEnum, value?: CdnanycastStatsValueEnum, type?: CdnanycastStatsTypeEnum}): Promise<CdnanycastStatsDataType[]>;
  /**
  List the cdnanycast.CacheRule objects
  Cache rules associated to the domain
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules', pathParams: {serviceName: string, domain: string}, queryParams: {fileMatch?: string}): Promise<Number[]>;
  /**
  CacheRules for a domain
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', pathParams: {serviceName: string, domain: string, cacheRuleId: Number}): Promise<CdnanycastCacheRule>;
  /**
  List the cdnanycast.Task objects
  Task associated to the cache rule
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks', pathParams: {serviceName: string, domain: string, cacheRuleId: Number}): Promise<Number[]>;
  /**
  Task on a CDN
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}', pathParams: {serviceName: string, domain: string, cacheRuleId: Number, taskId: Number}): Promise<CdnanycastTask>;
  /**
  List the cdnanycast.Backend objects
  Backend associated to the domain
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends', pathParams: {serviceName: string, domain: string}): Promise<string[]>;
  /**
  Backend for a domain
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}', pathParams: {serviceName: string, domain: string, ip: string}): Promise<CdnanycastBackend>;
  /**
  Domain on CDN
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<CdnanycastDomain>;
  /**
  List the cdnanycast.Task objects
  Task associated to the domain
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/tasks', pathParams: {serviceName: string, domain: string}): Promise<Number[]>;
  /**
  Task on a CDN
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}', pathParams: {serviceName: string, domain: string, taskId: Number}): Promise<CdnanycastTask>;
  /**
  List the cdnanycast.Domain objects
  Domains associated to this anycast
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsCdnDedicatedGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  CacheRules for a domain
  Alter this object properties
  **/
  public put(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', pathParams: {serviceName: string, domain: string, cacheRuleId: Number}): Promise<void>;
  /**
  Domain on CDN
  Alter this object properties
  **/
  public put(path: '/cdn/dedicated/{serviceName}/domains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cdn/dedicated/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsCdnDedicatedPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  update operations
  Update an existing SSL with a custom certificate
  **/
  public post(path: '/cdn/dedicated/{serviceName}/ssl/update', pathParams: {serviceName: string}): Promise<CdnanycastTask>;
  /**
  CDN Ssl
  Add a SSL on CDN or Generate a Lets Encrypt certificate
  **/
  public post(path: '/cdn/dedicated/{serviceName}/ssl', pathParams: {serviceName: string}): Promise<CdnanycastSsl>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/cdn/dedicated/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  logs operations
  Generate URL to real time logs
  **/
  public post(path: '/cdn/dedicated/{serviceName}/logs', pathParams: {serviceName: string}): Promise<CdnanycastLogsURL>;
  /**
  List the cdnanycast.CacheRule objects
  Add a cache rule to a domain
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules', pathParams: {serviceName: string, domain: string}): Promise<CdnanycastCacheRule>;
  /**
  flush operations
  Flush the cache
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush', pathParams: {serviceName: string, domain: string, cacheRuleId: Number}): Promise<CdnanycastTask>;
  /**
  logs operations
  Generate URL to real time logs
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/logs', pathParams: {serviceName: string, domain: string}): Promise<CdnanycastLogsURL>;
  /**
  List the cdnanycast.Backend objects
  Add a backend IP
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends', pathParams: {serviceName: string, domain: string}): Promise<CdnanycastBackend>;
  /**
  flush operations
  Flush all cache
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/flush', pathParams: {serviceName: string, domain: string}): Promise<CdnanycastTask>;
  /**
  List the cdnanycast.Domain objects
  Add a domain on CDN
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains', pathParams: {serviceName: string}): Promise<CdnanycastDomain>;
  public post(path: PathsCdnDedicatedPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  CDN Ssl
  Remove SSL of the CDN
  **/
  public delete(path: '/cdn/dedicated/{serviceName}/ssl', pathParams: {serviceName: string}): Promise<CdnanycastTask>;
  /**
  CacheRules for a domain
  Remove cache rule
  **/
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', pathParams: {serviceName: string, domain: string, cacheRuleId: Number}): Promise<CdnanycastTask>;
  /**
  Backend for a domain
  Remove a backend IP
  **/
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}', pathParams: {serviceName: string, domain: string, ip: string}): Promise<string>;
  /**
  Domain on CDN
  Remove a domain from the CDN
  **/
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<CdnanycastTask>;
  public delete(path: PathsCdnDedicatedDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

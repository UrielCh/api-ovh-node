import { ApiCommon } from '@ovh-api/common';
/**
 * Region
 */
export interface DbaasQueueRegion {
  /**
   * Region name
   *
   */
  name?: string;
  /**
   * Region ID
   *
   */
  id?: string;
  /**
   * Region URL
   *
   */
  url?: string;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * KeyWithSecret
 */
export interface DbaasQueueKeyWithSecret {
  /**
   * Key name
   *
   */
  name?: string;
  /**
   * Human ID of the key's application
   *
   */
  humanAppId?: string;
  /**
   * Key secret
   *
   */
  secret?: string;
  /**
   * Key ID
   *
   */
  id?: string;
}
/**
 * Topic
 */
export interface DbaasQueueTopic {
  /**
   * Number of partitions
   *
   */
  partitions?: Number;
  /**
   * Replication factor
   *
   */
  replicationFactor?: Number;
  /**
   * Topic ID
   *
   */
  id?: string;
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
 * Key
 */
export interface DbaasQueueKey {
  /**
   * Key name
   *
   */
  name?: string;
  /**
   * Human ID of the key's application
   *
   */
  humanAppId?: string;
  /**
   * Key ID
   *
   */
  id?: string;
}
/**
 * UserWithPassword
 */
export interface DbaasQueueUserWithPassword {
  /**
   * User password
   *
   */
  password?: string;
  /**
   * List of roles this user belongs to
   *
   */
  roles?: string[];
  /**
   * User name
   *
   */
  name?: string;
  /**
   * User ID
   *
   */
  id?: string;
}
/**
 * App
 */
export interface DbaasQueueApp {
  /**
   * Human ID of the application
   *
   */
  humanId?: string;
  /**
   * Region ID of the application
   *
   */
  regionId?: string;
  /**
   * Application name
   *
   */
  name?: string;
  /**
   * Application ID
   *
   */
  id?: string;
  /**
   * Application status
   *
   */
  status?: DbaasQueueAppStatus;
}
/**
 * MetricsAccount
 */
export interface DbaasQueueMetricsAccount {
  /**
   * OpenTSDB host url
   *
   */
  host?: string;
  /**
   * Token for OpenTSDB metrics access
   *
   */
  token?: string;
}
/**
 * User
 */
export interface DbaasQueueUser {
  /**
   * List of roles this user belongs to
   *
   */
  roles?: string[];
  /**
   * User name
   *
   */
  name?: string;
  /**
   * User ID
   *
   */
  id?: string;
}
/**
 * AppStatus
 */
export type DbaasQueueAppStatus = 'not_configured' | 'active' | 'deleted';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Role
 */
export interface DbaasQueueRole {
  /**
   * List of topics with read access
   *
   */
  readAcl?: string[];
  /**
   * Automatically create non-existing topics on read & write operations
   *
   */
  autoCreateAcl?: boolean;
  /**
   * Role name
   *
   */
  name?: string;
  /**
   * List of topics with write access
   *
   */
  writeAcl?: string[];
}
/**
 * AppConfiguration
 */
export interface DbaasQueueAppConfiguration {
  /**
   * Application
   *
   */
  app?: DbaasQueueApp;
  /**
   * List of created roles
   *
   */
  roles?: DbaasQueueRole[];
  /**
   * Metrics account
   *
   */
  metricsAccount?: DbaasQueueMetricsAccount;
  /**
   * List of created users
   *
   */
  users?: DbaasQueueUserWithPassword[];
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
  contactBilling?: string;
  /**
   */
  engagedUpTo?: Date;
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
type PathsdbaasqueueGET = '/dbaas/queue' | 
'/dbaas/queue/{serviceName}/key/{keyId}' | 
'/dbaas/queue/{serviceName}/key' | 
'/dbaas/queue/{serviceName}/metrics/account' | 
'/dbaas/queue/{serviceName}/region' | 
'/dbaas/queue/{serviceName}/region/{regionId}' | 
'/dbaas/queue/{serviceName}/serviceInfos' | 
'/dbaas/queue/{serviceName}/role/{roleName}' | 
'/dbaas/queue/{serviceName}/role' | 
'/dbaas/queue/{serviceName}/user/{userId}' | 
'/dbaas/queue/{serviceName}/user/{userId}/roles' | 
'/dbaas/queue/{serviceName}/user' | 
'/dbaas/queue/{serviceName}' | 
'/dbaas/queue/{serviceName}/topic/{topicId}' | 
'/dbaas/queue/{serviceName}/topic';

type PathsdbaasqueuePUT = '/dbaas/queue/{serviceName}/serviceInfos' | 
'/dbaas/queue/{serviceName}';

type PathsdbaasqueuePOST = '/dbaas/queue/{serviceName}/user/{userId}/changePassword';

type PathsdbaasqueueDELETE = '/dbaas/queue/{serviceName}/topic/{topicId}';

class Apidbaasqueue extends ApiCommon {
  /**
  Operations about the PAAS_QUEUE service
  List available services
  **/
  public get(path: '/dbaas/queue', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Key
  Get a key
  **/
  public get(path: '/dbaas/queue/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, queryParams: null): Promise<DbaasQueueKey>;
  /**
  Key
  List all keys of the application
  **/
  public get(path: '/dbaas/queue/{serviceName}/key', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Metrics
  Get metrics account
  **/
  public get(path: '/dbaas/queue/{serviceName}/metrics/account', pathParams: {serviceName?: string}, queryParams: null): Promise<DbaasQueueMetricsAccount>;
  /**
  Region
  List all regions ID
  **/
  public get(path: '/dbaas/queue/{serviceName}/region', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Region
  Get one region
  **/
  public get(path: '/dbaas/queue/{serviceName}/region/{regionId}', pathParams: {serviceName?: string, regionId?: string}, queryParams: null): Promise<DbaasQueueRegion>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dbaas/queue/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Role
  Get a role
  **/
  public get(path: '/dbaas/queue/{serviceName}/role/{roleName}', pathParams: {serviceName?: string, roleName?: string}, queryParams: null): Promise<DbaasQueueRole>;
  /**
  Role
  List all roles of the application
  **/
  public get(path: '/dbaas/queue/{serviceName}/role', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  User
  Get a user
  **/
  public get(path: '/dbaas/queue/{serviceName}/user/{userId}', pathParams: {serviceName?: string, userId?: string}, queryParams: null): Promise<DbaasQueueUser>;
  /**
  User roles
  Get user roles
  **/
  public get(path: '/dbaas/queue/{serviceName}/user/{userId}/roles', pathParams: {serviceName?: string, userId?: string}, queryParams: null): Promise<string[]>;
  /**
  User
  List all users of the application
  **/
  public get(path: '/dbaas/queue/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  App
  Get an application
  **/
  public get(path: '/dbaas/queue/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DbaasQueueApp>;
  /**
  Topic
  Get a topic
  **/
  public get(path: '/dbaas/queue/{serviceName}/topic/{topicId}', pathParams: {serviceName?: string, topicId?: string}, queryParams: null): Promise<DbaasQueueTopic>;
  /**
  Topic
  List all topics of the application
  **/
  public get(path: '/dbaas/queue/{serviceName}/topic', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  public get(path: PathsdbaasqueueGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dbaas/queue/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  App
  Update an application
  **/
  public put(path: '/dbaas/queue/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasQueueApp>;
  public put(path: PathsdbaasqueuePUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  User
  Generate a new user password
  **/
  public post(path: '/dbaas/queue/{serviceName}/user/{userId}/changePassword', pathParams: {serviceName?: string, userId?: string}, queryParams: null, bodyParams: null): Promise<DbaasQueueUserWithPassword>;
  public post(path: PathsdbaasqueuePOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Topic
  Delete a topic
  **/
  public delete(path: '/dbaas/queue/{serviceName}/topic/{topicId}', pathParams: {serviceName?: string, topicId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathsdbaasqueueDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

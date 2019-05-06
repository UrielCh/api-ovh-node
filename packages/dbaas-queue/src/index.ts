import { ApiCommon } from '@ovh-api/common';
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
   * Application ID
   *
   */
  id?: string;
  /**
   * Application name
   *
   */
  name?: string;
  /**
   * Region ID of the application
   *
   */
  regionId?: string;
  /**
   * Application status
   *
   */
  status?: DbaasQueueAppStatus;
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
   * Metrics account
   *
   */
  metricsAccount?: DbaasQueueMetricsAccount;
  /**
   * List of created roles
   *
   */
  roles?: DbaasQueueRole[];
  /**
   * List of created users
   *
   */
  users?: DbaasQueueUserWithPassword[];
}
/**
 * AppStatus
 */
export type DbaasQueueAppStatus = 'active' | 'deleted' | 'not_configured';
/**
 * Key
 */
export interface DbaasQueueKey {
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
  /**
   * Key name
   *
   */
  name?: string;
}
/**
 * KeyWithSecret
 */
export interface DbaasQueueKeyWithSecret {
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
  /**
   * Key name
   *
   */
  name?: string;
  /**
   * Key secret
   *
   */
  secret?: string;
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
 * Region
 */
export interface DbaasQueueRegion {
  /**
   * Region ID
   *
   */
  id?: string;
  /**
   * Region name
   *
   */
  name?: string;
  /**
   * Region URL
   *
   */
  url?: string;
}
/**
 * Role
 */
export interface DbaasQueueRole {
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
   * List of topics with read access
   *
   */
  readAcl?: string[];
  /**
   * List of topics with write access
   *
   */
  writeAcl?: string[];
}
/**
 * Topic
 */
export interface DbaasQueueTopic {
  /**
   * Topic ID
   *
   */
  id?: string;
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
}
/**
 * User
 */
export interface DbaasQueueUser {
  /**
   * User ID
   *
   */
  id?: string;
  /**
   * User name
   *
   */
  name?: string;
  /**
   * List of roles this user belongs to
   *
   */
  roles?: string[];
}
/**
 * UserWithPassword
 */
export interface DbaasQueueUserWithPassword {
  /**
   * User ID
   *
   */
  id?: string;
  /**
   * User name
   *
   */
  name?: string;
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
type PathsDbaasQueueGET = '/dbaas/queue' | 
'/dbaas/queue/{serviceName}' | 
'/dbaas/queue/{serviceName}/key' | 
'/dbaas/queue/{serviceName}/key/{keyId}' | 
'/dbaas/queue/{serviceName}/metrics/account' | 
'/dbaas/queue/{serviceName}/region' | 
'/dbaas/queue/{serviceName}/region/{regionId}' | 
'/dbaas/queue/{serviceName}/role' | 
'/dbaas/queue/{serviceName}/role/{roleName}' | 
'/dbaas/queue/{serviceName}/serviceInfos' | 
'/dbaas/queue/{serviceName}/topic' | 
'/dbaas/queue/{serviceName}/topic/{topicId}' | 
'/dbaas/queue/{serviceName}/user' | 
'/dbaas/queue/{serviceName}/user/{userId}' | 
'/dbaas/queue/{serviceName}/user/{userId}/roles';

type PathsDbaasQueuePUT = '/dbaas/queue/{serviceName}' | 
'/dbaas/queue/{serviceName}/serviceInfos';

type PathsDbaasQueuePOST = '/dbaas/queue/{serviceName}/user/{userId}/changePassword';

type PathsDbaasQueueDELETE = '/dbaas/queue/{serviceName}/topic/{topicId}';

export class ApiDbaasQueue extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the PAAS_QUEUE service
  List available services
  **/
  public get(path: '/dbaas/queue'): Promise<string[]>;
  /**
  App
  Get an application
  **/
  public get(path: '/dbaas/queue/{serviceName}', pathParams: {serviceName: string}): Promise<DbaasQueueApp>;
  /**
  Key
  List all keys of the application
  **/
  public get(path: '/dbaas/queue/{serviceName}/key', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Key
  Get a key
  **/
  public get(path: '/dbaas/queue/{serviceName}/key/{keyId}', pathParams: {serviceName: string, keyId: string}): Promise<DbaasQueueKey>;
  /**
  Metrics
  Get metrics account
  **/
  public get(path: '/dbaas/queue/{serviceName}/metrics/account', pathParams: {serviceName: string}): Promise<DbaasQueueMetricsAccount>;
  /**
  Region
  List all regions ID
  **/
  public get(path: '/dbaas/queue/{serviceName}/region', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Region
  Get one region
  **/
  public get(path: '/dbaas/queue/{serviceName}/region/{regionId}', pathParams: {serviceName: string, regionId: string}): Promise<DbaasQueueRegion>;
  /**
  Role
  List all roles of the application
  **/
  public get(path: '/dbaas/queue/{serviceName}/role', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Role
  Get a role
  **/
  public get(path: '/dbaas/queue/{serviceName}/role/{roleName}', pathParams: {serviceName: string, roleName: string}): Promise<DbaasQueueRole>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dbaas/queue/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Topic
  List all topics of the application
  **/
  public get(path: '/dbaas/queue/{serviceName}/topic', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Topic
  Get a topic
  **/
  public get(path: '/dbaas/queue/{serviceName}/topic/{topicId}', pathParams: {serviceName: string, topicId: string}): Promise<DbaasQueueTopic>;
  /**
  User
  List all users of the application
  **/
  public get(path: '/dbaas/queue/{serviceName}/user', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  User
  Get a user
  **/
  public get(path: '/dbaas/queue/{serviceName}/user/{userId}', pathParams: {serviceName: string, userId: string}): Promise<DbaasQueueUser>;
  /**
  User roles
  Get user roles
  **/
  public get(path: '/dbaas/queue/{serviceName}/user/{userId}/roles', pathParams: {serviceName: string, userId: string}): Promise<string[]>;
  public get(path: PathsDbaasQueueGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  App
  Update an application
  **/
  public put(path: '/dbaas/queue/{serviceName}', pathParams: {serviceName: string}): Promise<DbaasQueueApp>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dbaas/queue/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsDbaasQueuePUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  User
  Generate a new user password
  **/
  public post(path: '/dbaas/queue/{serviceName}/user/{userId}/changePassword', pathParams: {serviceName: string, userId: string}): Promise<DbaasQueueUserWithPassword>;
  public post(path: PathsDbaasQueuePOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Topic
  Delete a topic
  **/
  public delete(path: '/dbaas/queue/{serviceName}/topic/{topicId}', pathParams: {serviceName: string, topicId: string}): Promise<void>;
  public delete(path: PathsDbaasQueueDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

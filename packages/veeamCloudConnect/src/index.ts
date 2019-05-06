import { ApiCommon } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
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
   * period of renew in month
   *
   */
  period?: Number;
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
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
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
/**
 * Veeam Cloud Connect account
 */
export interface VeeamCloudConnectAccount {
  /**
   * Datacenter where your Cloud is physically located
   *
   */
  location?: VeeamCloudConnectLocation;
  /**
   * Backuped VMs quantity on your account
   *
   */
  vmCount?: Number;
  /**
   * Your login in the Veeam Cloud Connect interface
   *
   */
  serviceName?: string;
  /**
   * The commercial offer linked to your veeam cloud connect
   *
   */
  productOffer?: VeeamCloudConnectOffer;
}
/**
 * Veeam Backup Repository
 */
export interface VeeamCloudConnectBackupRepository {
  /**
   * The quota used on this Backup repository
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * The quota allowed on this Backup repository
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * The usage in percent of this backup repository
   *
   */
  usage?: Number;
  /**
   * The inventory name of your backup repository
   *
   */
  inventoryName?: string;
  /**
   * The state of your backup repository
   *
   */
  state?: VeeamCloudConnectBackupRepositoryStateEnum;
  /**
   * The replication zone of your repository
   *
   */
  replicationZone?: VeeamCloudConnectLocation;
}
/**
 * All states a Cloud Tenant backup repository can be in
 */
export type VeeamCloudConnectBackupRepositoryStateEnum = 'configuring' | 'delivered' | 'disabled' | 'disabling' | 'error' | 'migrating' | 'removing';
/**
 * All Location where cloud can be physically located
 */
export type VeeamCloudConnectLocation = 'bhs1' | 'rbx2' | 'sbg1';
/**
 * All orderable Veeam Cloud Connect offers
 */
export type VeeamCloudConnectOffer = 'advanced' | 'demo' | 'starter';
/**
 * Operation with the Cloud Tenant Account
 */
export interface VeeamCloudConnectTask {
  /**
   * When was this Task done
   *
   */
  endDate?: Date;
  /**
   * Task name
   *
   */
  name?: string;
  /**
   * Current progress
   *
   */
  progress?: Number;
  /**
   * Current Task state
   *
   */
  state?: VeeamCloudConnectTaskStateEnum;
  /**
   */
  taskId?: Number;
  /**
   * When the task has been created
   *
   */
  startDate?: Date;
}
/**
 * All states a Cloud Tenant Task can be in
 */
export type VeeamCloudConnectTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'fixing' | 'problem' | 'toCreate' | 'todo' | 'unknown' | 'waitingTodo';
/**
 * Details about Veeam Cloud Connect offer
 */
export interface VeeamCloudConnectOfferCapabilities {
  /**
   * Is wan accelerator enabled
   *
   */
  wanAccelerator?: boolean;
  /**
   * Are data replicated over two storages
   *
   */
  replication?: boolean;
  /**
   * Is account allowed to add new repositories
   *
   */
  multiStorages?: boolean;
  /**
   * Max number of repositories you can add on your account
   *
   */
  maxStoragesCount?: Number;
  /**
   * Maximum quota you can apply on your repositories in GB
   *
   */
  maxQuota?: Number;
  /**
   * Included storage per vm
   *
   */
  vmCapacity?: Number;
  /**
   * Required usage on all repositories to add a new one (percent)
   *
   */
  minimumUsage?: Number;
  /**
   * Default quota applied on new repositories in GB
   *
   */
  defaultQuota?: Number;
}
type PathsveeamCloudConnectGET = '/veeamCloudConnect/{serviceName}/orderableUpgrade' | 
'/veeamCloudConnect/{serviceName}/task/{taskId}' | 
'/veeamCloudConnect/{serviceName}/task' | 
'/veeamCloudConnect/{serviceName}/capabilities' | 
'/veeamCloudConnect/{serviceName}' | 
'/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}' | 
'/veeamCloudConnect/{serviceName}/backupRepository' | 
'/veeamCloudConnect/{serviceName}/serviceInfos' | 
'/veeamCloudConnect';

type PathsveeamCloudConnectPUT = '/veeamCloudConnect/{serviceName}/serviceInfos';

type PathsveeamCloudConnectPOST = '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota' | 
'/veeamCloudConnect/{serviceName}/backupRepository';

type PathsveeamCloudConnectDELETE = '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}';

class ApiveeamCloudConnect extends ApiCommon {
  /**
  orderableUpgrade operations
  List the possible upgrades on your Veeam Cloud Connect account
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/orderableUpgrade', pathParams: {serviceName?: string}, queryParams: null): Promise<VeeamCloudConnectOffer[]>;
  /**
  Operation with the Cloud Tenant Account
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<VeeamCloudConnectTask>;
  /**
  List the veeamCloudConnect.Task objects
  Tasks associated with Cloud Tenant
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {name?: string, state?: VeeamCloudConnectTaskStateEnum}): Promise<Number[]>;
  /**
  capabilities operations
  Show capabilities of your current offer
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/capabilities', pathParams: {serviceName?: string}, queryParams: null): Promise<VeeamCloudConnectOfferCapabilities>;
  /**
  Veeam Cloud Connect account
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<VeeamCloudConnectAccount>;
  /**
  Veeam Backup Repository
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}', pathParams: {serviceName?: string, inventoryName?: string}, queryParams: null): Promise<VeeamCloudConnectBackupRepository>;
  /**
  List the veeamCloudConnect.BackupRepository objects
  Veeam Backup Repository linked to this Veeam Cloud Connect account
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/backupRepository', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Operations about the VEEAMCC service
  List available services
  **/
  public get(path: '/veeamCloudConnect', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsveeamCloudConnectGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/veeamCloudConnect/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsveeamCloudConnectPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  upgradeQuota operations
  Change your quota
  **/
  public post(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota', pathParams: {serviceName?: string, inventoryName?: string}, bodyParams: null): Promise<VeeamCloudConnectTask[]>;
  /**
  List the veeamCloudConnect.BackupRepository objects
  Add a new Backup Repository to your professional account
  **/
  public post(path: '/veeamCloudConnect/{serviceName}/backupRepository', pathParams: {serviceName?: string}, bodyParams: null): Promise<VeeamCloudConnectTask[]>;
  public post(path: PathsveeamCloudConnectPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Veeam Backup Repository
  Delete this backup Repository. 
  **/
  public delete(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}', pathParams: {serviceName?: string, inventoryName?: string}, bodyParams: null): Promise<VeeamCloudConnectTask[]>;
  public delete(path: PathsveeamCloudConnectDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

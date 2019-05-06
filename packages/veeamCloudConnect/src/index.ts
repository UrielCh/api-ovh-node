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
  creation?: Date;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  expiration?: Date;
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
   * The commercial offer linked to your veeam cloud connect
   *
   */
  productOffer?: VeeamCloudConnectOffer;
  /**
   * Your login in the Veeam Cloud Connect interface
   *
   */
  serviceName?: string;
  /**
   * Backuped VMs quantity on your account
   *
   */
  vmCount?: Number;
}
/**
 * Veeam Backup Repository
 */
export interface VeeamCloudConnectBackupRepository {
  /**
   * The inventory name of your backup repository
   *
   */
  inventoryName?: string;
  /**
   * The quota allowed on this Backup repository
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * The quota used on this Backup repository
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * The replication zone of your repository
   *
   */
  replicationZone?: VeeamCloudConnectLocation;
  /**
   * The state of your backup repository
   *
   */
  state?: VeeamCloudConnectBackupRepositoryStateEnum;
  /**
   * The usage in percent of this backup repository
   *
   */
  usage?: Number;
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
   * When the task has been created
   *
   */
  startDate?: Date;
  /**
   * Current Task state
   *
   */
  state?: VeeamCloudConnectTaskStateEnum;
  /**
   */
  taskId?: Number;
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
   * Default quota applied on new repositories in GB
   *
   */
  defaultQuota?: Number;
  /**
   * Maximum quota you can apply on your repositories in GB
   *
   */
  maxQuota?: Number;
  /**
   * Max number of repositories you can add on your account
   *
   */
  maxStoragesCount?: Number;
  /**
   * Required usage on all repositories to add a new one (percent)
   *
   */
  minimumUsage?: Number;
  /**
   * Is account allowed to add new repositories
   *
   */
  multiStorages?: boolean;
  /**
   * Are data replicated over two storages
   *
   */
  replication?: boolean;
  /**
   * Included storage per vm
   *
   */
  vmCapacity?: Number;
  /**
   * Is wan accelerator enabled
   *
   */
  wanAccelerator?: boolean;
}
type PathsVeeamCloudConnectGET = '/veeamCloudConnect' | 
'/veeamCloudConnect/{serviceName}' | 
'/veeamCloudConnect/{serviceName}/orderableUpgrade' | 
'/veeamCloudConnect/{serviceName}/task/{taskId}' | 
'/veeamCloudConnect/{serviceName}/task' | 
'/veeamCloudConnect/{serviceName}/capabilities' | 
'/veeamCloudConnect/{serviceName}/backupRepository' | 
'/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}' | 
'/veeamCloudConnect/{serviceName}/serviceInfos';

type PathsVeeamCloudConnectPUT = '/veeamCloudConnect/{serviceName}/serviceInfos';

type PathsVeeamCloudConnectPOST = '/veeamCloudConnect/{serviceName}/backupRepository' | 
'/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota';

type PathsVeeamCloudConnectDELETE = '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}';

export class ApiVeeamCloudConnect extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the VEEAMCC service
  List available services
  **/
  public get(path: '/veeamCloudConnect'): Promise<string[]>;
  /**
  Veeam Cloud Connect account
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}', pathParams: {serviceName: string}): Promise<VeeamCloudConnectAccount>;
  /**
  orderableUpgrade operations
  List the possible upgrades on your Veeam Cloud Connect account
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/orderableUpgrade', pathParams: {serviceName: string}): Promise<VeeamCloudConnectOffer[]>;
  /**
  Operation with the Cloud Tenant Account
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<VeeamCloudConnectTask>;
  /**
  List the veeamCloudConnect.Task objects
  Tasks associated with Cloud Tenant
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/task', pathParams: {serviceName: string}, queryParams: {name?: string, state?: VeeamCloudConnectTaskStateEnum}): Promise<Number[]>;
  /**
  capabilities operations
  Show capabilities of your current offer
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/capabilities', pathParams: {serviceName: string}): Promise<VeeamCloudConnectOfferCapabilities>;
  /**
  List the veeamCloudConnect.BackupRepository objects
  Veeam Backup Repository linked to this Veeam Cloud Connect account
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/backupRepository', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Veeam Backup Repository
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}', pathParams: {serviceName: string, inventoryName: string}): Promise<VeeamCloudConnectBackupRepository>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsVeeamCloudConnectGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/veeamCloudConnect/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsVeeamCloudConnectPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the veeamCloudConnect.BackupRepository objects
  Add a new Backup Repository to your professional account
  **/
  public post(path: '/veeamCloudConnect/{serviceName}/backupRepository', pathParams: {serviceName: string}): Promise<VeeamCloudConnectTask[]>;
  /**
  upgradeQuota operations
  Change your quota
  **/
  public post(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota', pathParams: {serviceName: string, inventoryName: string}): Promise<VeeamCloudConnectTask[]>;
  public post(path: PathsVeeamCloudConnectPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Veeam Backup Repository
  Delete this backup Repository. 
  **/
  public delete(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}', pathParams: {serviceName: string, inventoryName: string}): Promise<VeeamCloudConnectTask[]>;
  public delete(path: PathsVeeamCloudConnectDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

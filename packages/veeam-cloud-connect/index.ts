import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
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
  vmCount?: number;
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
  quota?: ComplexTypeUnitAndValue<number>;
  /**
   * The quota used on this Backup repository
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<number>;
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
  usage?: number;
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
  endDate?: string;
  /**
   * Task name
   *
   */
  name?: string;
  /**
   * Current progress
   *
   */
  progress?: number;
  /**
   * When the task has been created
   *
   */
  startDate?: string;
  /**
   * Current Task state
   *
   */
  state?: VeeamCloudConnectTaskStateEnum;
  /**
   */
  taskId?: number;
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
  defaultQuota?: number;
  /**
   * Maximum quota you can apply on your repositories in GB
   *
   */
  maxQuota?: number;
  /**
   * Max number of repositories you can add on your account
   *
   */
  maxStoragesCount?: number;
  /**
   * Required usage on all repositories to add a new one (percent)
   *
   */
  minimumUsage?: number;
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
  vmCapacity?: number;
  /**
   * Is wan accelerator enabled
   *
   */
  wanAccelerator?: boolean;
}
type PathsVeeamCloudConnectGET = '/veeamCloudConnect' | 
'/veeamCloudConnect/{serviceName}' | 
'/veeamCloudConnect/{serviceName}/backupRepository' | 
'/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}' | 
'/veeamCloudConnect/{serviceName}/capabilities' | 
'/veeamCloudConnect/{serviceName}/orderableUpgrade' | 
'/veeamCloudConnect/{serviceName}/serviceInfos' | 
'/veeamCloudConnect/{serviceName}/task' | 
'/veeamCloudConnect/{serviceName}/task/{taskId}';

type PathsVeeamCloudConnectPUT = '/veeamCloudConnect/{serviceName}/serviceInfos';

type PathsVeeamCloudConnectPOST = '/veeamCloudConnect/{serviceName}/backupRepository' | 
'/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota';

type PathsVeeamCloudConnectDELETE = '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}';

export class ApiVeeamCloudConnect extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
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
  public get(path: '/veeamCloudConnect/{serviceName}', params: {serviceName: string}): Promise<VeeamCloudConnectAccount>;
  /**
  List the veeamCloudConnect.BackupRepository objects
  Veeam Backup Repository linked to this Veeam Cloud Connect account
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/backupRepository', params: {serviceName: string}): Promise<string[]>;
  /**
  Veeam Backup Repository
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}', params: {serviceName: string, inventoryName: string}): Promise<VeeamCloudConnectBackupRepository>;
  /**
  capabilities operations
  Show capabilities of your current offer
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/capabilities', params: {serviceName: string}): Promise<VeeamCloudConnectOfferCapabilities>;
  /**
  orderableUpgrade operations
  List the possible upgrades on your Veeam Cloud Connect account
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/orderableUpgrade', params: {serviceName: string}): Promise<VeeamCloudConnectOffer[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the veeamCloudConnect.Task objects
  Tasks associated with Cloud Tenant
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/task', params: {serviceName: string, name?: string, state?: VeeamCloudConnectTaskStateEnum}): Promise<number[]>;
  /**
  Operation with the Cloud Tenant Account
  Get this object properties
  **/
  public get(path: '/veeamCloudConnect/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<VeeamCloudConnectTask>;
  public get(path: PathsVeeamCloudConnectGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/veeamCloudConnect/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsVeeamCloudConnectPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  List the veeamCloudConnect.BackupRepository objects
  Add a new Backup Repository to your professional account
  **/
  public post(path: '/veeamCloudConnect/{serviceName}/backupRepository', params: {serviceName: string}): Promise<VeeamCloudConnectTask[]>;
  /**
  upgradeQuota operations
  Change your quota
  **/
  public post(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota', params: {serviceName: string, inventoryName: string}): Promise<VeeamCloudConnectTask[]>;
  public post(path: PathsVeeamCloudConnectPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Veeam Backup Repository
  Delete this backup Repository. 
  **/
  public delete(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}', params: {serviceName: string, inventoryName: string}): Promise<VeeamCloudConnectTask[]>;
  public delete(path: PathsVeeamCloudConnectDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}

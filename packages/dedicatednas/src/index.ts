import { ApiCommon } from '@ovh-api/common';
/**
 * Define Acl for partition
 */
export interface DedicatedNasAccess {
  /**
   * the id of the access
   *
   */
  accessId?: Number;
  /**
   * the ip in root on storage
   *
   */
  ip?: string;
}
/**
 * Partition Protocol
 */
export type DedicatedStorageProtocolEnum = 'CIFS' | 'NFS' | 'NFS_CIFS';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * Storage partition
 */
export interface DedicatedNasPartition {
  /**
   * must be nfs cifs or both
   *
   */
  protocol?: DedicatedStorageProtocolEnum;
  /**
   * the given name of partition
   *
   */
  partitionName?: string;
  /**
   * Partition size
   *
   */
  size?: Number;
}
/**
 * Partition Quota
 */
export interface DedicatedNasQuota {
  /**
   * the uid to set quota on
   *
   */
  uid?: Number;
  /**
   * the size to set in MB
   *
   */
  size?: Number;
}
/**
 * Distincts task
 */
export type DedicatedStorageTaskFunctionEnum = 'backupRecursiveDestroy' | 'clusterLeclercAclUpdate' | 'clusterLeclercChangeServiceIp' | 'clusterLeclercCustomSnapCreate' | 'clusterLeclercCustomSnapDelete' | 'clusterLeclercDeleteSnapshotDirectory' | 'clusterLeclercDestroyNasContainer' | 'clusterLeclercPartitionAdd' | 'clusterLeclercPartitionDelete' | 'clusterLeclercPartitionUpdate' | 'clusterLeclercQuotaUpdate' | 'clusterLeclercSetupNasContainer' | 'clusterLeclercSnapshotUpdate' | 'clusterLeclercZfsOptions' | 'nasAclUpdate' | 'nasDeleteSnapshotDirectory' | 'nasPartitionAdd' | 'nasPartitionDelete' | 'nasPartitionUpdate' | 'nasQuotaUpdate' | 'remoteBackupRecursiveDestroy';
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
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Storage nas
 */
export interface DedicatedNasNas {
  /**
   * the size of the nas
   *
   */
  zpoolSize?: Number;
  /**
   * The storage mount path
   *
   */
  mountPath?: string;
  /**
   * True, if partition creation is allowed on this nas
   *
   */
  canCreatePartition?: boolean;
  /**
   * Access ip of nas
   *
   */
  ip?: string;
  /**
   * The name you give to the nas
   *
   */
  customName?: string;
  /**
   * area of nas
   *
   */
  datacenter?: string;
  /**
   * The storage service name
   *
   */
  serviceName?: string;
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
/**
 * Storage task
 */
export interface DedicatedNasTaskTask {
  /**
   * name of the partition
   *
   */
  partitionName?: string;
  /**
   * last modification of task
   *
   */
  lastUpdate?: Date;
  /**
   * Insertion of task in the todo
   *
   */
  todoDate?: Date;
  /**
   * information about operation
   *
   */
  details?: string;
  /**
   * Task type of operation
   *
   */
  operation?: DedicatedStorageTaskFunctionEnum;
  /**
   * the date when the task finished
   *
   */
  doneDate?: Date;
  /**
   * id of the task
   *
   */
  taskId?: Number;
  /**
   * The actual state of the task
   *
   */
  status?: DedicatedTaskStatusEnum;
  /**
   * the name of your service
   *
   */
  storageName?: string;
}
type PathsdedicatednasGET = '/dedicated/nas/{serviceName}/partition/{partitionName}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/access' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/quota' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}' | 
'/dedicated/nas/{serviceName}/partition' | 
'/dedicated/nas/{serviceName}/task/{taskId}' | 
'/dedicated/nas/{serviceName}/task' | 
'/dedicated/nas/{serviceName}/serviceInfos' | 
'/dedicated/nas/{serviceName}' | 
'/dedicated/nas';

type PathsdedicatednasPUT = '/dedicated/nas/{serviceName}/partition/{partitionName}' | 
'/dedicated/nas/{serviceName}/serviceInfos' | 
'/dedicated/nas/{serviceName}';

type PathsdedicatednasPOST = '/dedicated/nas/{serviceName}/partition/{partitionName}/access' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/quota' | 
'/dedicated/nas/{serviceName}/partition';

type PathsdedicatednasDELETE = '/dedicated/nas/{serviceName}/partition/{partitionName}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}';

class Apidedicatednas extends ApiCommon {
  /**
  Storage partition
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<DedicatedNasPartition>;
  /**
  authorizableIps operations
  Get all IPs that can be used in the ACL
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the dedicated.nas.Access objects
  get ACL for this partition
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<string[]>;
  /**
  Define Acl for partition
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}', pathParams: {serviceName?: string, partitionName?: string, ip?: string}, queryParams: null): Promise<DedicatedNasAccess>;
  /**
  List the dedicated.nas.Quota objects
  Get quota for this partition
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Partition Quota
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}', pathParams: {serviceName?: string, partitionName?: string, uid?: Number}, queryParams: null): Promise<DedicatedNasQuota>;
  /**
  List the dedicated.nas.Partition objects
  Get partition list
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Storage task
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nasTask.Task objects
  View task list
  **/
  public get(path: '/dedicated/nas/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {status?: DedicatedTaskStatusEnum, operation?: DedicatedStorageTaskFunctionEnum}): Promise<Number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Storage nas
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedNasNas>;
  /**
  Operations about the STORAGE service
  List available services
  **/
  public get(path: '/dedicated/nas', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsdedicatednasGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Storage partition
  Alter this object properties
  **/
  public put(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/nas/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Storage nas
  Alter this object properties
  **/
  public put(path: '/dedicated/nas/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsdedicatednasPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  List the dedicated.nas.Access objects
  Add an Acl to this  partition
  **/
  public post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nas.Quota objects
  Set a new quota
  **/
  public post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nas.Partition objects
  Create a  new partition
  **/
  public post(path: '/dedicated/nas/{serviceName}/partition', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedNasTaskTask>;
  public post(path: PathsdedicatednasPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Storage partition
  Delete this partition
  **/
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  Define Acl for partition
  Delete a given snapshot
  **/
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}', pathParams: {serviceName?: string, partitionName?: string, ip?: string}, queryParams: null, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  Partition Quota
  Delete a given quota
  **/
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}', pathParams: {serviceName?: string, partitionName?: string, uid?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedNasTaskTask>;
  public delete(path: PathsdedicatednasDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

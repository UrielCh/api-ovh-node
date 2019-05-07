import { ApiCommon } from '@ovh-api/common';
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
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
 * Storage nas
 */
export interface DedicatedNasNas {
  /**
   * True, if partition creation is allowed on this nas
   *
   */
  canCreatePartition?: boolean;
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
   * Access ip of nas
   *
   */
  ip?: string;
  /**
   * The storage mount path
   *
   */
  mountPath?: string;
  /**
   * The storage service name
   *
   */
  serviceName?: string;
  /**
   * the size of the nas
   *
   */
  zpoolSize?: Number;
}
/**
 * Storage partition
 */
export interface DedicatedNasPartition {
  /**
   * the given name of partition
   *
   */
  partitionName?: string;
  /**
   * must be nfs cifs or both
   *
   */
  protocol?: DedicatedStorageProtocolEnum;
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
   * the size to set in MB
   *
   */
  size?: Number;
  /**
   * the uid to set quota on
   *
   */
  uid?: Number;
}
/**
 * Storage task
 */
export interface DedicatedNasTaskTask {
  /**
   * information about operation
   *
   */
  details?: string;
  /**
   * the date when the task finished
   *
   */
  doneDate?: string;
  /**
   * last modification of task
   *
   */
  lastUpdate?: string;
  /**
   * Task type of operation
   *
   */
  operation?: DedicatedStorageTaskFunctionEnum;
  /**
   * name of the partition
   *
   */
  partitionName?: string;
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
  /**
   * id of the task
   *
   */
  taskId?: Number;
  /**
   * Insertion of task in the todo
   *
   */
  todoDate?: string;
}
/**
 * Partition Protocol
 */
export type DedicatedStorageProtocolEnum = 'CIFS' | 'NFS' | 'NFS_CIFS';
/**
 * Distincts task
 */
export type DedicatedStorageTaskFunctionEnum = 'backupRecursiveDestroy' | 'clusterLeclercAclUpdate' | 'clusterLeclercChangeServiceIp' | 'clusterLeclercCustomSnapCreate' | 'clusterLeclercCustomSnapDelete' | 'clusterLeclercDeleteSnapshotDirectory' | 'clusterLeclercDestroyNasContainer' | 'clusterLeclercPartitionAdd' | 'clusterLeclercPartitionDelete' | 'clusterLeclercPartitionUpdate' | 'clusterLeclercQuotaUpdate' | 'clusterLeclercSetupNasContainer' | 'clusterLeclercSnapshotUpdate' | 'clusterLeclercZfsOptions' | 'nasAclUpdate' | 'nasDeleteSnapshotDirectory' | 'nasPartitionAdd' | 'nasPartitionDelete' | 'nasPartitionUpdate' | 'nasQuotaUpdate' | 'remoteBackupRecursiveDestroy';
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
type PathsDedicatedNasGET = '/dedicated/nas' | 
'/dedicated/nas/{serviceName}' | 
'/dedicated/nas/{serviceName}/partition' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/access' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/quota' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}' | 
'/dedicated/nas/{serviceName}/serviceInfos' | 
'/dedicated/nas/{serviceName}/task' | 
'/dedicated/nas/{serviceName}/task/{taskId}';

type PathsDedicatedNasPUT = '/dedicated/nas/{serviceName}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}' | 
'/dedicated/nas/{serviceName}/serviceInfos';

type PathsDedicatedNasPOST = '/dedicated/nas/{serviceName}/partition' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/access' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/quota';

type PathsDedicatedNasDELETE = '/dedicated/nas/{serviceName}/partition/{partitionName}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}' | 
'/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}';

export class ApiDedicatedNas extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the STORAGE service
  List available services
  **/
  public get(path: '/dedicated/nas'): Promise<string[]>;
  /**
  Storage nas
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}', pathParams: {serviceName: string}): Promise<DedicatedNasNas>;
  /**
  List the dedicated.nas.Partition objects
  Get partition list
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Storage partition
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', pathParams: {serviceName: string, partitionName: string}): Promise<DedicatedNasPartition>;
  /**
  List the dedicated.nas.Access objects
  get ACL for this partition
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access', pathParams: {serviceName: string, partitionName: string}): Promise<string[]>;
  /**
  Define Acl for partition
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}', pathParams: {serviceName: string, partitionName: string, ip: string}): Promise<DedicatedNasAccess>;
  /**
  authorizableIps operations
  Get all IPs that can be used in the ACL
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps', pathParams: {serviceName: string, partitionName: string}): Promise<string[]>;
  /**
  List the dedicated.nas.Quota objects
  Get quota for this partition
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota', pathParams: {serviceName: string, partitionName: string}): Promise<Number[]>;
  /**
  Partition Quota
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}', pathParams: {serviceName: string, partitionName: string, uid: Number}): Promise<DedicatedNasQuota>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  List the dedicated.nasTask.Task objects
  View task list
  **/
  public get(path: '/dedicated/nas/{serviceName}/task', pathParams: {serviceName: string}, queryParams?: {operation?: DedicatedStorageTaskFunctionEnum, status?: DedicatedTaskStatusEnum}): Promise<Number[]>;
  /**
  Storage task
  Get this object properties
  **/
  public get(path: '/dedicated/nas/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<DedicatedNasTaskTask>;
  public get(path: PathsDedicatedNasGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Storage nas
  Alter this object properties
  **/
  public put(path: '/dedicated/nas/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Storage partition
  Alter this object properties
  **/
  public put(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', pathParams: {serviceName: string, partitionName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/nas/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsDedicatedNasPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the dedicated.nas.Partition objects
  Create a  new partition
  **/
  public post(path: '/dedicated/nas/{serviceName}/partition', pathParams: {serviceName: string}): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nas.Access objects
  Add an Acl to this  partition
  **/
  public post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access', pathParams: {serviceName: string, partitionName: string}): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nas.Quota objects
  Set a new quota
  **/
  public post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota', pathParams: {serviceName: string, partitionName: string}): Promise<DedicatedNasTaskTask>;
  public post(path: PathsDedicatedNasPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Storage partition
  Delete this partition
  **/
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', pathParams: {serviceName: string, partitionName: string}): Promise<DedicatedNasTaskTask>;
  /**
  Define Acl for partition
  Delete a given snapshot
  **/
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}', pathParams: {serviceName: string, partitionName: string, ip: string}): Promise<DedicatedNasTaskTask>;
  /**
  Partition Quota
  Delete a given quota
  **/
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}', pathParams: {serviceName: string, partitionName: string, uid: Number}): Promise<DedicatedNasTaskTask>;
  public delete(path: PathsDedicatedNasDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

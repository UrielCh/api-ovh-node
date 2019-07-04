import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace dedicated {
    //dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace nas {
        //dedicated.nas.Access
        // fullName: dedicated.nas.Access.Access
        export interface Access {
            accessId?: number;
            ip?: string;
        }
        //dedicated.nas.Nas
        // fullName: dedicated.nas.Nas.Nas
        export interface Nas {
            canCreatePartition?: boolean;
            customName?: string;
            datacenter?: string;
            ip?: string;
            mountPath?: string;
            serviceName?: string;
            zpoolSize?: number;
        }
        //dedicated.nas.Partition
        // fullName: dedicated.nas.Partition.Partition
        export interface Partition {
            partitionName?: string;
            protocol?: OVH.dedicated.storage.ProtocolEnum;
            size?: number;
        }
        //dedicated.nas.Quota
        // fullName: dedicated.nas.Quota.Quota
        export interface Quota {
            size?: number;
            uid?: number;
        }
    }
    export namespace nasTask {
        //dedicated.nasTask.Task
        // fullName: dedicated.nasTask.Task.Task
        export interface Task {
            details?: string;
            doneDate?: string;
            lastUpdate?: string;
            operation?: OVH.dedicated.storage.TaskFunctionEnum;
            partitionName?: string;
            status?: OVH.dedicated.TaskStatusEnum;
            storageName?: string;
            taskId?: number;
            todoDate?: string;
        }
    }
    export namespace storage {
        //dedicated.storage.ProtocolEnum
        export type ProtocolEnum = "CIFS" | "NFS" | "NFS_CIFS"
        //dedicated.storage.TaskFunctionEnum
        export type TaskFunctionEnum = "backupRecursiveDestroy" | "clusterLeclercAclUpdate" | "clusterLeclercChangeServiceIp" | "clusterLeclercCustomSnapCreate" | "clusterLeclercCustomSnapDelete" | "clusterLeclercDeleteSnapshotDirectory" | "clusterLeclercDestroyNasContainer" | "clusterLeclercPartitionAdd" | "clusterLeclercPartitionDelete" | "clusterLeclercPartitionUpdate" | "clusterLeclercQuotaUpdate" | "clusterLeclercSetupNasContainer" | "clusterLeclercSnapshotUpdate" | "clusterLeclercZfsOptions" | "nasAclUpdate" | "nasDeleteSnapshotDirectory" | "nasPartitionAdd" | "nasPartitionDelete" | "nasPartitionUpdate" | "nasQuotaUpdate" | "remoteBackupRecursiveDestroy"
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /dedicated
export interface Dedicated {
    nas:  {
        // GET /dedicated/nas
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /dedicated/nas/{serviceName}
            GET(): Promise<dedicated.nas.Nas>;
            // PUT /dedicated/nas/{serviceName}
            PUT(body?: {body: dedicated.nas.Nas}): Promise<void>;
            serviceInfos:  {
                // GET /dedicated/nas/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /dedicated/nas/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            task:  {
                // GET /dedicated/nas/{serviceName}/task
                GET(param?: {operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /dedicated/nas/{serviceName}/task/{taskId}
                    GET(): Promise<dedicated.nasTask.Task>;
                } | any
            }
            partition:  {
                // GET /dedicated/nas/{serviceName}/partition
                GET(): Promise<string[]>;
                // POST /dedicated/nas/{serviceName}/partition
                POST(body?: {partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number}): Promise<dedicated.nasTask.Task>;
                [keys: string]: {
                    // GET /dedicated/nas/{serviceName}/partition/{partitionName}
                    GET(): Promise<dedicated.nas.Partition>;
                    // PUT /dedicated/nas/{serviceName}/partition/{partitionName}
                    PUT(body?: {body: dedicated.nas.Partition}): Promise<void>;
                    // DELETE /dedicated/nas/{serviceName}/partition/{partitionName}
                    DELETE(): Promise<dedicated.nasTask.Task>;
                    quota:  {
                        // GET /dedicated/nas/{serviceName}/partition/{partitionName}/quota
                        GET(): Promise<number[]>;
                        // POST /dedicated/nas/{serviceName}/partition/{partitionName}/quota
                        POST(body?: {uid: number, size: number}): Promise<dedicated.nasTask.Task>;
                        [keys: string]: {
                            // GET /dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}
                            GET(): Promise<dedicated.nas.Quota>;
                            // DELETE /dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}
                            DELETE(): Promise<dedicated.nasTask.Task>;
                        } | any
                    }
                    access:  {
                        // GET /dedicated/nas/{serviceName}/partition/{partitionName}/access
                        GET(): Promise<string[]>;
                        // POST /dedicated/nas/{serviceName}/partition/{partitionName}/access
                        POST(body?: {ip: string}): Promise<dedicated.nasTask.Task>;
                        [keys: string]: {
                            // GET /dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}
                            GET(): Promise<dedicated.nas.Access>;
                            // DELETE /dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}
                            DELETE(): Promise<dedicated.nasTask.Task>;
                        } | any
                    }
                    authorizableIps:  {
                        // GET /dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps
                        GET(): Promise<string[]>;
                    }
                } | any
            }
        } | any
    }
}
// Api
type PathsDedicatedNasGET = '/dedicated/nas/{serviceName}/serviceInfos' |
  '/dedicated/nas/{serviceName}/task' |
  '/dedicated/nas/{serviceName}/task/{taskId}' |
  '/dedicated/nas/{serviceName}' |
  '/dedicated/nas/{serviceName}/partition' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/quota' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/access' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps' |
  '/dedicated/nas';

type PathsDedicatedNasPUT = '/dedicated/nas/{serviceName}/serviceInfos' |
  '/dedicated/nas/{serviceName}' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}';

type PathsDedicatedNasPOST = '/dedicated/nas/{serviceName}/partition' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/quota' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/access';

type PathsDedicatedNasDELETE = '/dedicated/nas/{serviceName}/partition/{partitionName}' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}' |
  '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}';

export class ApiDedicatedNas extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the STORAGE service
   * List available services
   */
  public get(path: '/dedicated/nas'): Promise<string[]>;
  /**
   * Storage nas
   * Get this object properties
   */
  public get(path: '/dedicated/nas/{serviceName}', params: {serviceName: string}): Promise<dedicated.nas.Nas>;
  /**
   * List the dedicated.nas.Partition objects
   * Get partition list
   */
  public get(path: '/dedicated/nas/{serviceName}/partition', params: {serviceName: string}): Promise<string[]>;
  /**
   * Storage partition
   * Get this object properties
   */
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', params: {serviceName: string, partitionName: string}): Promise<dedicated.nas.Partition>;
  /**
   * List the dedicated.nas.Access objects
   * get ACL for this partition
   */
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access', params: {serviceName: string, partitionName: string}): Promise<string[]>;
  /**
   * Define Acl for partition
   * Get this object properties
   */
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}', params: {serviceName: string, partitionName: string, ip: string}): Promise<dedicated.nas.Access>;
  /**
   * authorizableIps operations
   * Get all IPs that can be used in the ACL
   */
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps', params: {serviceName: string, partitionName: string}): Promise<string[]>;
  /**
   * List the dedicated.nas.Quota objects
   * Get quota for this partition
   */
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota', params: {serviceName: string, partitionName: string}): Promise<number[]>;
  /**
   * Partition Quota
   * Get this object properties
   */
  public get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}', params: {serviceName: string, partitionName: string, uid: string}): Promise<dedicated.nas.Quota>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/dedicated/nas/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the dedicated.nasTask.Task objects
   * View task list
   */
  public get(path: '/dedicated/nas/{serviceName}/task', params: {serviceName: string, operation?: OVH.dedicated.storage.TaskFunctionEnum, status?: OVH.dedicated.TaskStatusEnum}): Promise<number[]>;
  /**
   * Storage task
   * Get this object properties
   */
  public get(path: '/dedicated/nas/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<dedicated.nasTask.Task>;
  public get(path: PathsDedicatedNasGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Storage nas
   * Alter this object properties
   */
  public put(path: '/dedicated/nas/{serviceName}', params: {serviceName: string, canCreatePartition?: boolean, customName?: string, datacenter?: string, ip?: string, mountPath?: string, zpoolSize?: number}): Promise<void>;
  /**
   * Storage partition
   * Alter this object properties
   */
  public put(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', params: {serviceName: string, partitionName: string, protocol?: OVH.dedicated.storage.ProtocolEnum, size?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/dedicated/nas/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsDedicatedNasPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the dedicated.nas.Partition objects
   * Create a  new partition
   */
  public post(path: '/dedicated/nas/{serviceName}/partition', params: {serviceName: string, partitionName: string, protocol: OVH.dedicated.storage.ProtocolEnum, size: number}): Promise<dedicated.nasTask.Task>;
  /**
   * List the dedicated.nas.Access objects
   * Add an Acl to this  partition
   */
  public post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access', params: {serviceName: string, partitionName: string, ip: string}): Promise<dedicated.nasTask.Task>;
  /**
   * List the dedicated.nas.Quota objects
   * Set a new quota
   */
  public post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota', params: {serviceName: string, partitionName: string, size: number, uid: number}): Promise<dedicated.nasTask.Task>;
  public post(path: PathsDedicatedNasPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Storage partition
   * Delete this partition
   */
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}', params: {serviceName: string, partitionName: string}): Promise<dedicated.nasTask.Task>;
  /**
   * Define Acl for partition
   * Delete a given snapshot
   */
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}', params: {serviceName: string, partitionName: string, ip: string}): Promise<dedicated.nasTask.Task>;
  /**
   * Partition Quota
   * Delete a given quota
   */
  public delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}', params: {serviceName: string, partitionName: string, uid: string}): Promise<dedicated.nasTask.Task>;
  public delete(path: PathsDedicatedNasDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
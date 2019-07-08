import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicated/nas Models
 */
export namespace dedicated {
    //dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace nas {
        //dedicated.nas.Access
        // fullName: dedicated.nas.Access.Access
        export interface Access {
            accessId: number;
            ip: string;
        }
        //dedicated.nas.Nas
        // fullName: dedicated.nas.Nas.Nas
        export interface Nas {
            canCreatePartition: boolean;
            customName?: string;
            datacenter?: string;
            ip?: string;
            mountPath: string;
            serviceName: string;
            zpoolSize: number;
        }
        //dedicated.nas.Partition
        // fullName: dedicated.nas.Partition.Partition
        export interface Partition {
            partitionName: string;
            protocol: dedicated.storage.ProtocolEnum;
            size: number;
        }
        //dedicated.nas.Quota
        // fullName: dedicated.nas.Quota.Quota
        export interface Quota {
            size: number;
            uid: number;
        }
    }
    export namespace nasTask {
        //dedicated.nasTask.Task
        // fullName: dedicated.nasTask.Task.Task
        export interface Task {
            details?: string;
            doneDate?: string;
            lastUpdate?: string;
            operation: dedicated.storage.TaskFunctionEnum;
            partitionName?: string;
            status: dedicated.TaskStatusEnum;
            storageName?: string;
            taskId: number;
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
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
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
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}

/**
 * END API /dedicated/nas Models
 */
export function proxyDedicatedNas(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedNas;
/**
 * Api Proxy model
 */// Apis harmony
// path /dedicated
export interface Dedicated{
    nas: {
        // GET /dedicated/nas
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /dedicated/nas/{serviceName}
            $get(): Promise<dedicated.nas.Nas>;
            // PUT /dedicated/nas/{serviceName}
            $put(body?: {canCreatePartition?: boolean, customName?: string, datacenter?: string, ip?: string, mountPath?: string, serviceName?: string, zpoolSize?: number}): Promise<void>;
            partition: {
                // GET /dedicated/nas/{serviceName}/partition
                $get(): Promise<string[]>;
                // POST /dedicated/nas/{serviceName}/partition
                $post(body?: {partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number}): Promise<dedicated.nasTask.Task>;
                $(partitionName: string): {
                    // DELETE /dedicated/nas/{serviceName}/partition/{partitionName}
                    $delete(): Promise<dedicated.nasTask.Task>;
                    // GET /dedicated/nas/{serviceName}/partition/{partitionName}
                    $get(): Promise<dedicated.nas.Partition>;
                    // PUT /dedicated/nas/{serviceName}/partition/{partitionName}
                    $put(body?: {partitionName?: string, protocol?: dedicated.storage.ProtocolEnum, size?: number}): Promise<void>;
                    access: {
                        // GET /dedicated/nas/{serviceName}/partition/{partitionName}/access
                        $get(): Promise<string[]>;
                        // POST /dedicated/nas/{serviceName}/partition/{partitionName}/access
                        $post(body?: {ip: string}): Promise<dedicated.nasTask.Task>;
                        $(ip: string): {
                            // DELETE /dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}
                            $get(): Promise<dedicated.nas.Access>;
                        };
                    }
                    authorizableIps: {
                        // GET /dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps
                        $get(): Promise<string[]>;
                    }
                    quota: {
                        // GET /dedicated/nas/{serviceName}/partition/{partitionName}/quota
                        $get(): Promise<number[]>;
                        // POST /dedicated/nas/{serviceName}/partition/{partitionName}/quota
                        $post(body?: {size: number, uid: number}): Promise<dedicated.nasTask.Task>;
                        $(uid: number): {
                            // DELETE /dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}
                            $get(): Promise<dedicated.nas.Quota>;
                        };
                    }
                };
            }
            serviceInfos: {
                // GET /dedicated/nas/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dedicated/nas/{serviceName}/serviceInfos
                $put(body?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            task: {
                // GET /dedicated/nas/{serviceName}/task
                $get(param?: {operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /dedicated/nas/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.nasTask.Task>;
                };
            }
        };
    }
// Api
  /**
   * Operations about the STORAGE service
   * List available services
   */
  get(path: '/dedicated/nas'): () => Promise<string[]>;
  /**
   * Storage nas
   * Get this object properties
   */
  get(path: '/dedicated/nas/{serviceName}'): (params: {serviceName: string}) => Promise<dedicated.nas.Nas>;
  /**
   * List the dedicated.nas.Partition objects
   * Get partition list
   */
  get(path: '/dedicated/nas/{serviceName}/partition'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Storage partition
   * Get this object properties
   */
  get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}'): (params: {partitionName: string, serviceName: string}) => Promise<dedicated.nas.Partition>;
  /**
   * List the dedicated.nas.Access objects
   * get ACL for this partition
   */
  get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access'): (params: {partitionName: string, serviceName: string}) => Promise<string[]>;
  /**
   * Define Acl for partition
   * Get this object properties
   */
  get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}'): (params: {ip: string, partitionName: string, serviceName: string}) => Promise<dedicated.nas.Access>;
  /**
   * authorizableIps operations
   * Get all IPs that can be used in the ACL
   */
  get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps'): (params: {partitionName: string, serviceName: string}) => Promise<string[]>;
  /**
   * List the dedicated.nas.Quota objects
   * Get quota for this partition
   */
  get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota'): (params: {partitionName: string, serviceName: string}) => Promise<number[]>;
  /**
   * Partition Quota
   * Get this object properties
   */
  get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}'): (params: {partitionName: string, serviceName: string, uid: number}) => Promise<dedicated.nas.Quota>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dedicated/nas/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the dedicated.nasTask.Task objects
   * View task list
   */
  get(path: '/dedicated/nas/{serviceName}/task'): (params: {serviceName: string, operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}) => Promise<number[]>;
  /**
   * Storage task
   * Get this object properties
   */
  get(path: '/dedicated/nas/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<dedicated.nasTask.Task>;
  /**
   * Storage nas
   * Alter this object properties
   */
  put(path: '/dedicated/nas/{serviceName}'): (params: {serviceName: string, canCreatePartition?: boolean, customName?: string, datacenter?: string, ip?: string, mountPath?: string, zpoolSize?: number}) => Promise<void>;
  /**
   * Storage partition
   * Alter this object properties
   */
  put(path: '/dedicated/nas/{serviceName}/partition/{partitionName}'): (params: {partitionName: string, serviceName: string, protocol?: dedicated.storage.ProtocolEnum, size?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dedicated/nas/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * List the dedicated.nas.Partition objects
   * Create a  new partition
   */
  post(path: '/dedicated/nas/{serviceName}/partition'): (params: {serviceName: string, partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number}) => Promise<dedicated.nasTask.Task>;
  /**
   * List the dedicated.nas.Access objects
   * Add an Acl to this  partition
   */
  post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access'): (params: {partitionName: string, serviceName: string, ip: string}) => Promise<dedicated.nasTask.Task>;
  /**
   * List the dedicated.nas.Quota objects
   * Set a new quota
   */
  post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota'): (params: {partitionName: string, serviceName: string, size: number, uid: number}) => Promise<dedicated.nasTask.Task>;
  /**
   * Storage partition
   * Delete this partition
   */
  delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}'): (params: {partitionName: string, serviceName: string}) => Promise<dedicated.nasTask.Task>;
  /**
   * Define Acl for partition
   * Delete a given snapshot
   */
  delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}'): (params: {ip: string, partitionName: string, serviceName: string}) => Promise<dedicated.nasTask.Task>;
  /**
   * Partition Quota
   * Delete a given quota
   */
  delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}'): (params: {partitionName: string, serviceName: string, uid: number}) => Promise<dedicated.nasTask.Task>;
}
/**
 * classic Model
 */
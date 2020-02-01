import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicated/nas Models
 * Source: https://api.us.ovhcloud.com/1.0/dedicated/nas.json
 */
export namespace dedicated {
    // type fullname: dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace nas {
        // interface fullName: dedicated.nas.Access.Access
        export interface Access {
            accessId: number;
            ip: string;
        }
        // interface fullName: dedicated.nas.Nas.Nas
        export interface Nas {
            canCreatePartition: boolean;
            customName?: string;
            datacenter?: string;
            ip?: string;
            mountPath: string;
            serviceName: string;
            zpoolSize: number;
        }
        // interface fullName: dedicated.nas.Partition.Partition
        export interface Partition {
            partitionName: string;
            protocol: dedicated.storage.ProtocolEnum;
            size: number;
        }
        // interface fullName: dedicated.nas.Quota.Quota
        export interface Quota {
            size: number;
            uid: number;
        }
    }
    export namespace nasTask {
        // interface fullName: dedicated.nasTask.Task.Task
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
        // type fullname: dedicated.storage.ProtocolEnum
        export type ProtocolEnum = "CIFS" | "NFS" | "NFS_CIFS"
        // type fullname: dedicated.storage.TaskFunctionEnum
        export type TaskFunctionEnum = "backupRecursiveDestroy" | "clusterLeclercAclUpdate" | "clusterLeclercChangeServiceIp" | "clusterLeclercCustomSnapCreate" | "clusterLeclercCustomSnapDelete" | "clusterLeclercDeleteSnapshotDirectory" | "clusterLeclercDestroyNasContainer" | "clusterLeclercPartitionAdd" | "clusterLeclercPartitionDelete" | "clusterLeclercPartitionUpdate" | "clusterLeclercQuotaUpdate" | "clusterLeclercSetupNasContainer" | "clusterLeclercSnapshotUpdate" | "clusterLeclercZfsOptions" | "nasAclUpdate" | "nasDeleteSnapshotDirectory" | "nasPartitionAdd" | "nasPartitionDelete" | "nasPartitionUpdate" | "nasQuotaUpdate" | "remoteBackupRecursiveDestroy"
    }
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.Service.Service
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
            $put(params?: {canCreatePartition?: boolean, customName?: string, datacenter?: string, ip?: string, mountPath?: string, serviceName?: string, zpoolSize?: number}): Promise<void>;
            partition: {
                // GET /dedicated/nas/{serviceName}/partition
                $get(): Promise<string[]>;
                // POST /dedicated/nas/{serviceName}/partition
                $post(params: {partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number}): Promise<dedicated.nasTask.Task>;
                $(partitionName: string): {
                    // DELETE /dedicated/nas/{serviceName}/partition/{partitionName}
                    $delete(): Promise<dedicated.nasTask.Task>;
                    // GET /dedicated/nas/{serviceName}/partition/{partitionName}
                    $get(): Promise<dedicated.nas.Partition>;
                    // PUT /dedicated/nas/{serviceName}/partition/{partitionName}
                    $put(params?: {partitionName?: string, protocol?: dedicated.storage.ProtocolEnum, size?: number}): Promise<void>;
                    access: {
                        // GET /dedicated/nas/{serviceName}/partition/{partitionName}/access
                        $get(): Promise<string[]>;
                        // POST /dedicated/nas/{serviceName}/partition/{partitionName}/access
                        $post(params: {ip: string}): Promise<dedicated.nasTask.Task>;
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
                        $post(params: {size: number, uid: number}): Promise<dedicated.nasTask.Task>;
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
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            task: {
                // GET /dedicated/nas/{serviceName}/task
                $get(params?: {operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /dedicated/nas/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.nasTask.Task>;
                };
            }
        };
    }
}

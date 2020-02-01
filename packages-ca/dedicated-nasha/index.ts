import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicated/nasha Models
 * Source: https://ca.api.ovh.com/1.0/dedicated/nasha.json
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    // interface fullName: dedicated.NasHAAvailabilities.NasHAAvailabilities
    export interface NasHAAvailabilities {
        datacenters: dedicated.NasHAAvailabilityDatacenter[];
        offer: dedicated.NasHAOfferEnum;
    }
    // interface fullName: dedicated.NasHAAvailabilityDatacenter.NasHAAvailabilityDatacenter
    export interface NasHAAvailabilityDatacenter {
        availability: dedicated.NasHAAvailabilityEnum;
        datacenter: dedicated.NasHAZoneEnum;
    }
    // type fullname: dedicated.NasHAAvailabilityEnum
    export type NasHAAvailabilityEnum = "1H" | "240H" | "24H" | "72H" | "unknown"
    // type fullname: dedicated.NasHAOfferEnum
    export type NasHAOfferEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g"
    // type fullname: dedicated.NasHAZoneEnum
    export type NasHAZoneEnum = "bhs" | "rbx" | "sbg"
    // type fullname: dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
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
    export namespace nasha {
        // interface fullName: dedicated.nasha.Access.Access
        export interface Access {
            accessId: number;
            ip: string;
            type: dedicated.storage.AclTypeEnum;
        }
        // interface fullName: dedicated.nasha.Partition.Partition
        export interface Partition {
            partitionCapacity?: number;
            partitionName: string;
            protocol: dedicated.storage.ProtocolEnum;
            size: number;
            usedBySnapshots?: number;
        }
        // interface fullName: dedicated.nasha.Quota.Quota
        export interface Quota {
            size: number;
            uid: number;
        }
        // interface fullName: dedicated.nasha.Snapshot.Snapshot
        export interface Snapshot {
            snapshotType: dedicated.storage.SnapshotEnum;
        }
        // interface fullName: dedicated.nasha.Storage.Storage
        export interface Storage {
            canCreatePartition: boolean;
            customName?: string;
            datacenter?: string;
            ip?: string;
            monitored: boolean;
            serviceName: string;
            zpoolCapacity: number;
            zpoolSize: number;
        }
        // interface fullName: dedicated.nasha.Vrack.Vrack
        export interface Vrack {
            id: number;
            serviceIp: string;
            type: string;
            vrackName: string;
        }
        // interface fullName: dedicated.nasha.customSnap.customSnap
        export interface customSnap {
            expiration?: string;
            name: string;
        }
        // interface fullName: dedicated.nasha.options.options
        export interface options {
            atime: string;
            id: number;
            recordsize: string;
            sync: string;
        }
    }
    export namespace storage {
        // type fullname: dedicated.storage.AclTypeEnum
        export type AclTypeEnum = "readonly" | "readwrite"
        // type fullname: dedicated.storage.AtimeEnum
        export type AtimeEnum = "off" | "on"
        // type fullname: dedicated.storage.NasUsageTypeEnum
        export type NasUsageTypeEnum = "size" | "used" | "usedbysnapshots"
        // type fullname: dedicated.storage.PartitionUsageTypeEnum
        export type PartitionUsageTypeEnum = "size" | "used" | "usedbysnapshots"
        // type fullname: dedicated.storage.ProtocolEnum
        export type ProtocolEnum = "CIFS" | "NFS" | "NFS_CIFS"
        // type fullname: dedicated.storage.RecordSizeEnum
        export type RecordSizeEnum = "131072" | "16384" | "32768" | "4096" | "65536" | "8192"
        // type fullname: dedicated.storage.SnapshotEnum
        export type SnapshotEnum = "day-1" | "day-2" | "day-3" | "day-7" | "hour-1" | "hour-6"
        // type fullname: dedicated.storage.SyncEnum
        export type SyncEnum = "always" | "disabled" | "standard"
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
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
 * END API /dedicated/nasha Models
 */
export function proxyDedicatedNasha(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedNasha;
/**
 * Api Proxy model
 */// Apis harmony
// path /dedicated
export interface Dedicated {
    nasha: {
        // GET /dedicated/nasha
        $get(): Promise<string[]>;
        availabilities: {
            // GET /dedicated/nasha/availabilities
            $get(): Promise<dedicated.NasHAAvailabilities[]>;
        }
        $(serviceName: string): {
            // GET /dedicated/nasha/{serviceName}
            $get(): Promise<dedicated.nasha.Storage>;
            // PUT /dedicated/nasha/{serviceName}
            $put(params?: {canCreatePartition?: boolean, customName?: string, datacenter?: string, ip?: string, monitored?: boolean, serviceName?: string, zpoolCapacity?: number, zpoolSize?: number}): Promise<void>;
            confirmTermination: {
                // POST /dedicated/nasha/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            partition: {
                // GET /dedicated/nasha/{serviceName}/partition
                $get(): Promise<string[]>;
                // POST /dedicated/nasha/{serviceName}/partition
                $post(params: {partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number}): Promise<dedicated.nasTask.Task>;
                $(partitionName: string): {
                    // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
                    $delete(): Promise<dedicated.nasTask.Task>;
                    // GET /dedicated/nasha/{serviceName}/partition/{partitionName}
                    $get(): Promise<dedicated.nasha.Partition>;
                    // PUT /dedicated/nasha/{serviceName}/partition/{partitionName}
                    $put(params?: {partitionCapacity?: number, partitionName?: string, protocol?: dedicated.storage.ProtocolEnum, size?: number, usedBySnapshots?: number}): Promise<void>;
                    access: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access
                        $get(): Promise<string[]>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/access
                        $post(params: {ip: string, type?: dedicated.storage.AclTypeEnum}): Promise<dedicated.nasTask.Task>;
                        $(ip: string): {
                            // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
                            $get(): Promise<dedicated.nasha.Access>;
                        };
                    }
                    authorizableBlocks: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
                        $get(): Promise<string[]>;
                    }
                    authorizableIps: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
                        $get(): Promise<string[]>;
                    }
                    customSnapshot: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
                        $get(): Promise<string[]>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
                        $post(params: {expiration?: string, name: string}): Promise<dedicated.nasTask.Task>;
                        $(name: string): {
                            // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
                            $get(): Promise<dedicated.nasha.customSnap>;
                        };
                    }
                    options: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/options
                        $get(): Promise<dedicated.nasha.options>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/options
                        $post(params?: {atime?: dedicated.storage.AtimeEnum, recordsize?: dedicated.storage.RecordSizeEnum, sync?: dedicated.storage.SyncEnum}): Promise<dedicated.nasTask.Task>;
                    }
                    quota: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/quota
                        $get(): Promise<number[]>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/quota
                        $post(params: {size: number, uid: number}): Promise<dedicated.nasTask.Task>;
                        $(uid: number): {
                            // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}
                            $get(): Promise<dedicated.nasha.Quota>;
                        };
                    }
                    snapshot: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
                        $get(): Promise<dedicated.storage.SnapshotEnum[]>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
                        $post(params: {snapshotType: dedicated.storage.SnapshotEnum}): Promise<dedicated.nasTask.Task>;
                        $(snapshotType: dedicated.storage.SnapshotEnum): {
                            // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
                            $get(): Promise<dedicated.nasha.Snapshot>;
                        };
                    }
                    use: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/use
                        $get(params: {type: dedicated.storage.PartitionUsageTypeEnum}): Promise<complexType.UnitAndValue<number>>;
                    }
                };
            }
            serviceInfos: {
                // GET /dedicated/nasha/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dedicated/nasha/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            task: {
                // GET /dedicated/nasha/{serviceName}/task
                $get(params?: {operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /dedicated/nasha/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.nasTask.Task>;
                };
            }
            terminate: {
                // POST /dedicated/nasha/{serviceName}/terminate
                $post(): Promise<string>;
            }
            use: {
                // GET /dedicated/nasha/{serviceName}/use
                $get(params: {type: dedicated.storage.NasUsageTypeEnum}): Promise<complexType.UnitAndValue<number>>;
            }
            vrack: {
                // DELETE /dedicated/nasha/{serviceName}/vrack
                $delete(): Promise<dedicated.nasTask.Task>;
            }
        };
    }
}

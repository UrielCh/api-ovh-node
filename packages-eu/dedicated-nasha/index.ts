import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/nasha Models
 * Source: https://eu.api.ovh.com/1.0/dedicated/nasha.json
 */
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    /**
     * ovh Nas HA offer availabilities
     * interface fullName: dedicated.NasHAAvailabilities.NasHAAvailabilities
     */
    export interface NasHAAvailabilities {
        datacenters: dedicated.NasHAAvailabilityDatacenter[];
        offer: dedicated.NasHAOfferEnum;
    }
    /**
     * A structure describing the availability of offer for each datacenter
     * interface fullName: dedicated.NasHAAvailabilityDatacenter.NasHAAvailabilityDatacenter
     */
    export interface NasHAAvailabilityDatacenter {
        availability: dedicated.NasHAAvailabilityEnum;
        datacenter: dedicated.NasHAZoneEnum;
    }
    /**
     * The availability
     * type fullname: dedicated.NasHAAvailabilityEnum
     */
    export type NasHAAvailabilityEnum = "1H" | "240H" | "24H" | "72H" | "unknown"
    /**
     * ovh Nas HA offer
     * type fullname: dedicated.NasHAOfferEnum
     */
    export type NasHAOfferEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g"
    /**
     * Nas HA localization
     * type fullname: dedicated.NasHAZoneEnum
     */
    export type NasHAZoneEnum = "bhs" | "rbx" | "sbg"
    /**
     * different task status
     * type fullname: dedicated.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace nasTask {
        /**
         * Storage task
         * interface fullName: dedicated.nasTask.Task.Task
         */
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
        /**
         * Define Acl for partition
         * interface fullName: dedicated.nasha.Access.Access
         */
        export interface Access {
            accessId: number;
            ip: string;
            type: dedicated.storage.AclTypeEnum;
        }
        /**
         * Storage zpool partition
         * interface fullName: dedicated.nasha.Partition.Partition
         */
        export interface Partition {
            partitionCapacity?: number;
            partitionName: string;
            protocol: dedicated.storage.ProtocolEnum;
            size: number;
            usedBySnapshots?: number;
        }
        /**
         * Partition Quota
         * interface fullName: dedicated.nasha.Quota.Quota
         */
        export interface Quota {
            size: number;
            uid: number;
        }
        /**
         * Partition Snapshot
         * interface fullName: dedicated.nasha.Snapshot.Snapshot
         */
        export interface Snapshot {
            snapshotType: dedicated.storage.SnapshotEnum;
        }
        /**
         * Storage nas HA
         * interface fullName: dedicated.nasha.Storage.Storage
         */
        export interface Storage {
            canCreatePartition: boolean;
            customName?: string;
            datacenter?: string;
            diskType: dedicated.storage.DiskTypeEnum;
            ip?: string;
            monitored: boolean;
            serviceName: string;
            zpoolCapacity: number;
            zpoolSize: number;
        }
        /**
         * Partition Vrack
         * interface fullName: dedicated.nasha.Vrack.Vrack
         */
        export interface Vrack {
            id: number;
            serviceIp: string;
            type: string;
            vrackName: string;
        }
        /**
         * Custom Snapshot
         * interface fullName: dedicated.nasha.customSnap.customSnap
         */
        export interface customSnap {
            expiration?: string;
            name: string;
        }
        /**
         * Partition options
         * interface fullName: dedicated.nasha.options.options
         */
        export interface options {
            atime: string;
            id: number;
            recordsize: string;
            sync: string;
        }
    }
    export namespace storage {
        /**
         * Acl Type
         * type fullname: dedicated.storage.AclTypeEnum
         */
        export type AclTypeEnum = "readonly" | "readwrite"
        /**
         * Atime values
         * type fullname: dedicated.storage.AtimeEnum
         */
        export type AtimeEnum = "off" | "on"
        /**
         * the disk type of the nasHa
         * type fullname: dedicated.storage.DiskTypeEnum
         */
        export type DiskTypeEnum = "hdd" | "nvme" | "ssd"
        /**
         * Available types for NAS usage
         * type fullname: dedicated.storage.NasUsageTypeEnum
         */
        export type NasUsageTypeEnum = "size" | "used" | "usedbysnapshots"
        /**
         * Available types for NAS partition usage
         * type fullname: dedicated.storage.PartitionUsageTypeEnum
         */
        export type PartitionUsageTypeEnum = "size" | "used" | "usedbysnapshots"
        /**
         * Partition Protocol
         * type fullname: dedicated.storage.ProtocolEnum
         */
        export type ProtocolEnum = "CIFS" | "NFS" | "NFS_CIFS"
        /**
         * Recordsize values
         * type fullname: dedicated.storage.RecordSizeEnum
         */
        export type RecordSizeEnum = "131072" | "16384" | "32768" | "4096" | "65536" | "8192"
        /**
         * Partition snapshot allowed 
         * type fullname: dedicated.storage.SnapshotEnum
         */
        export type SnapshotEnum = "day-1" | "day-2" | "day-3" | "day-7" | "hour-1" | "hour-6"
        /**
         * Sync values
         * type fullname: dedicated.storage.SyncEnum
         */
        export type SyncEnum = "always" | "disabled" | "standard"
        /**
         * Distincts task
         * type fullname: dedicated.storage.TaskFunctionEnum
         */
        export type TaskFunctionEnum = "backupRecursiveDestroy" | "clusterLeclercAclUpdate" | "clusterLeclercChangeServiceIp" | "clusterLeclercCustomSnapCreate" | "clusterLeclercCustomSnapDelete" | "clusterLeclercDeleteSnapshotDirectory" | "clusterLeclercDestroyNasContainer" | "clusterLeclercPartitionAdd" | "clusterLeclercPartitionDelete" | "clusterLeclercPartitionUpdate" | "clusterLeclercQuotaUpdate" | "clusterLeclercSetupNasContainer" | "clusterLeclercSnapshotUpdate" | "clusterLeclercZfsOptions" | "nasAclUpdate" | "nasDeleteSnapshotDirectory" | "nasPartitionAdd" | "nasPartitionDelete" | "nasPartitionUpdate" | "nasQuotaUpdate" | "remoteBackupRecursiveDestroy"
    }
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
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
 * Api model for /dedicated/nasha
 */
export interface Dedicated {
    nasha: {
        /**
         * List available services
         * GET /dedicated/nasha
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        availabilities: {
            /**
             * Get availabilities of nasha offer
             * GET /dedicated/nasha/availabilities
             */
            $get(): Promise<dedicated.NasHAAvailabilities[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /dedicated/nasha/{serviceName}
             */
            $get(): Promise<dedicated.nasha.Storage>;
            /**
             * Alter this object properties
             * PUT /dedicated/nasha/{serviceName}
             */
            $put(params?: { canCreatePartition?: boolean, customName?: string, datacenter?: string, diskType?: dedicated.storage.DiskTypeEnum, ip?: string, monitored?: boolean, serviceName?: string, zpoolCapacity?: number, zpoolSize?: number }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /dedicated/nasha/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /dedicated/nasha/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            partition: {
                /**
                 * Get partition list
                 * GET /dedicated/nasha/{serviceName}/partition
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a new partition
                 * POST /dedicated/nasha/{serviceName}/partition
                 */
                $post(params: { partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number }): Promise<dedicated.nasTask.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(partitionName: string): {
                    /**
                     * Delete this partition
                     * DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
                     */
                    $delete(): Promise<dedicated.nasTask.Task>;
                    /**
                     * Get this object properties
                     * GET /dedicated/nasha/{serviceName}/partition/{partitionName}
                     */
                    $get(): Promise<dedicated.nasha.Partition>;
                    /**
                     * Alter this object properties
                     * PUT /dedicated/nasha/{serviceName}/partition/{partitionName}
                     */
                    $put(params?: { partitionCapacity?: number, partitionName?: string, protocol?: dedicated.storage.ProtocolEnum, size?: number, usedBySnapshots?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    access: {
                        /**
                         * get ACL for this partition
                         * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add a new ACL entry
                         * POST /dedicated/nasha/{serviceName}/partition/{partitionName}/access
                         */
                        $post(params: { ip: string, type?: dedicated.storage.AclTypeEnum }): Promise<dedicated.nasTask.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(ip: string): {
                            /**
                             * Delete an ACL entry
                             * DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
                             */
                            $delete(): Promise<dedicated.nasTask.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
                             */
                            $get(): Promise<dedicated.nasha.Access>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    authorizableBlocks: {
                        /**
                         * Get all RIPE/ARIN blocks that can be used in the ACL
                         * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    authorizableIps: {
                        /**
                         * Get all IPs that can be used in the ACL
                         * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    customSnapshot: {
                        /**
                         * Get custom snapshots for this partition
                         * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create a new snapshot
                         * POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
                         */
                        $post(params: { expiration?: string, name: string }): Promise<dedicated.nasTask.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(name: string): {
                            /**
                             * Delete a given snapshot
                             * DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
                             */
                            $delete(): Promise<dedicated.nasTask.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
                             */
                            $get(): Promise<dedicated.nasha.customSnap>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    options: {
                        /**
                         * Get this object properties
                         * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/options
                         */
                        $get(): Promise<dedicated.nasha.options>;
                        /**
                         * Setup options
                         * POST /dedicated/nasha/{serviceName}/partition/{partitionName}/options
                         */
                        $post(params?: { atime?: dedicated.storage.AtimeEnum, recordsize?: dedicated.storage.RecordSizeEnum, sync?: dedicated.storage.SyncEnum }): Promise<dedicated.nasTask.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    quota: {
                        /**
                         * Get quota for this partition
                         * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/quota
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Set a new quota
                         * POST /dedicated/nasha/{serviceName}/partition/{partitionName}/quota
                         */
                        $post(params: { size: number, uid: number }): Promise<dedicated.nasTask.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(uid: number): {
                            /**
                             * Delete a given quota
                             * DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}
                             */
                            $delete(): Promise<dedicated.nasTask.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}
                             */
                            $get(): Promise<dedicated.nasha.Quota>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    snapshot: {
                        /**
                         * Get scheduled snapshot types for this partition
                         * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
                         */
                        $get(): Promise<dedicated.storage.SnapshotEnum[]>;
                        /**
                         * Schedule a new snapshot type
                         * POST /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
                         */
                        $post(params: { snapshotType: dedicated.storage.SnapshotEnum }): Promise<dedicated.nasTask.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(snapshotType: dedicated.storage.SnapshotEnum): {
                            /**
                             * Delete a given snapshot
                             * DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
                             */
                            $delete(): Promise<dedicated.nasTask.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
                             */
                            $get(): Promise<dedicated.nasha.Snapshot>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    use: {
                        /**
                         * Return statistics about the partition
                         * GET /dedicated/nasha/{serviceName}/partition/{partitionName}/use
                         */
                        $get(params: { type: dedicated.storage.PartitionUsageTypeEnum }): Promise<complexType.UnitAndValue<number>>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /dedicated/nasha/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /dedicated/nasha/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * View task list
                 * GET /dedicated/nasha/{serviceName}/task
                 */
                $get(params?: { operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /dedicated/nasha/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<dedicated.nasTask.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /dedicated/nasha/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
            use: {
                /**
                 * Return statistics about the nas
                 * GET /dedicated/nasha/{serviceName}/use
                 */
                $get(params: { type: dedicated.storage.NasUsageTypeEnum }): Promise<complexType.UnitAndValue<number>>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            vrack: {
                /**
                 * Delete the vrack container
                 * DELETE /dedicated/nasha/{serviceName}/vrack
                 */
                $delete(): Promise<dedicated.nasTask.Task>;
            }
        };
    }
}

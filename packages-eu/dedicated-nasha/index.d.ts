import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dedicated/nasha Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace dedicated {
    interface NasHAAvailabilities {
        datacenters: dedicated.NasHAAvailabilityDatacenter[];
        offer: dedicated.NasHAOfferEnum;
    }
    interface NasHAAvailabilityDatacenter {
        availability: dedicated.NasHAAvailabilityEnum;
        datacenter: dedicated.NasHAZoneEnum;
    }
    type NasHAAvailabilityEnum = "1H" | "240H" | "24H" | "72H" | "unknown";
    type NasHAOfferEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g";
    type NasHAZoneEnum = "bhs" | "rbx" | "sbg";
    type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo";
    namespace nasTask {
        interface Task {
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
    namespace nasha {
        interface Access {
            accessId: number;
            ip: string;
            type: dedicated.storage.AclTypeEnum;
        }
        interface Partition {
            partitionCapacity?: number;
            partitionName: string;
            protocol: dedicated.storage.ProtocolEnum;
            size: number;
            usedBySnapshots?: number;
        }
        interface Quota {
            size: number;
            uid: number;
        }
        interface Snapshot {
            snapshotType: dedicated.storage.SnapshotEnum;
        }
        interface Storage {
            canCreatePartition: boolean;
            customName?: string;
            datacenter?: string;
            ip?: string;
            monitored: boolean;
            serviceName: string;
            zpoolCapacity: number;
            zpoolSize: number;
        }
        interface Vrack {
            id: number;
            serviceIp: string;
            type: string;
            vrackName: string;
        }
        interface customSnap {
            expiration?: string;
            name: string;
        }
        interface options {
            atime: string;
            id: number;
            recordsize: string;
            sync: string;
        }
    }
    namespace storage {
        type AclTypeEnum = "readonly" | "readwrite";
        type AtimeEnum = "off" | "on";
        type NasUsageTypeEnum = "size" | "used" | "usedbysnapshots";
        type PartitionUsageTypeEnum = "size" | "used" | "usedbysnapshots";
        type ProtocolEnum = "CIFS" | "NFS" | "NFS_CIFS";
        type RecordSizeEnum = "131072" | "16384" | "32768" | "4096" | "65536" | "8192";
        type SnapshotEnum = "day-1" | "day-2" | "day-3" | "day-7" | "hour-1" | "hour-6";
        type SyncEnum = "always" | "disabled" | "standard";
        type TaskFunctionEnum = "backupRecursiveDestroy" | "clusterLeclercAclUpdate" | "clusterLeclercChangeServiceIp" | "clusterLeclercCustomSnapCreate" | "clusterLeclercCustomSnapDelete" | "clusterLeclercDeleteSnapshotDirectory" | "clusterLeclercDestroyNasContainer" | "clusterLeclercPartitionAdd" | "clusterLeclercPartitionDelete" | "clusterLeclercPartitionUpdate" | "clusterLeclercQuotaUpdate" | "clusterLeclercSetupNasContainer" | "clusterLeclercSnapshotUpdate" | "clusterLeclercZfsOptions" | "nasAclUpdate" | "nasDeleteSnapshotDirectory" | "nasPartitionAdd" | "nasPartitionDelete" | "nasPartitionUpdate" | "nasQuotaUpdate" | "remoteBackupRecursiveDestroy";
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
    type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
}
export declare namespace services {
    interface Service {
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
export declare function proxyDedicatedNasha(ovhEngine: OvhRequestable): Dedicated;
export default proxyDedicatedNasha;
/**
 * Api Proxy model
 */ export interface Dedicated {
    nasha: {
        $get(): Promise<string[]>;
        availabilities: {
            $get(): Promise<dedicated.NasHAAvailabilities[]>;
        };
        $(serviceName: string): {
            $get(): Promise<dedicated.nasha.Storage>;
            $put(params?: {
                canCreatePartition?: boolean;
                customName?: string;
                datacenter?: string;
                ip?: string;
                monitored?: boolean;
                serviceName?: string;
                zpoolCapacity?: number;
                zpoolSize?: number;
            }): Promise<void>;
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            partition: {
                $get(): Promise<string[]>;
                $post(params: {
                    partitionName: string;
                    protocol: dedicated.storage.ProtocolEnum;
                    size: number;
                }): Promise<dedicated.nasTask.Task>;
                $(partitionName: string): {
                    $delete(): Promise<dedicated.nasTask.Task>;
                    $get(): Promise<dedicated.nasha.Partition>;
                    $put(params?: {
                        partitionCapacity?: number;
                        partitionName?: string;
                        protocol?: dedicated.storage.ProtocolEnum;
                        size?: number;
                        usedBySnapshots?: number;
                    }): Promise<void>;
                    access: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            ip: string;
                            type?: dedicated.storage.AclTypeEnum;
                        }): Promise<dedicated.nasTask.Task>;
                        $(ip: string): {
                            $delete(): Promise<dedicated.nasTask.Task>;
                            $get(): Promise<dedicated.nasha.Access>;
                        };
                    };
                    authorizableBlocks: {
                        $get(): Promise<string[]>;
                    };
                    authorizableIps: {
                        $get(): Promise<string[]>;
                    };
                    customSnapshot: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            expiration?: string;
                            name: string;
                        }): Promise<dedicated.nasTask.Task>;
                        $(name: string): {
                            $delete(): Promise<dedicated.nasTask.Task>;
                            $get(): Promise<dedicated.nasha.customSnap>;
                        };
                    };
                    options: {
                        $get(): Promise<dedicated.nasha.options>;
                        $post(params?: {
                            atime?: dedicated.storage.AtimeEnum;
                            recordsize?: dedicated.storage.RecordSizeEnum;
                            sync?: dedicated.storage.SyncEnum;
                        }): Promise<dedicated.nasTask.Task>;
                    };
                    quota: {
                        $get(): Promise<number[]>;
                        $post(params: {
                            size: number;
                            uid: number;
                        }): Promise<dedicated.nasTask.Task>;
                        $(uid: number): {
                            $delete(): Promise<dedicated.nasTask.Task>;
                            $get(): Promise<dedicated.nasha.Quota>;
                        };
                    };
                    snapshot: {
                        $get(): Promise<dedicated.storage.SnapshotEnum[]>;
                        $post(params: {
                            snapshotType: dedicated.storage.SnapshotEnum;
                        }): Promise<dedicated.nasTask.Task>;
                        $(snapshotType: dedicated.storage.SnapshotEnum): {
                            $delete(): Promise<dedicated.nasTask.Task>;
                            $get(): Promise<dedicated.nasha.Snapshot>;
                        };
                    };
                    use: {
                        $get(params: {
                            type: dedicated.storage.PartitionUsageTypeEnum;
                        }): Promise<complexType.UnitAndValue<number>>;
                    };
                };
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            task: {
                $get(params?: {
                    operation?: dedicated.storage.TaskFunctionEnum;
                    status?: dedicated.TaskStatusEnum;
                }): Promise<number[]>;
                $(taskId: number): {
                    $get(): Promise<dedicated.nasTask.Task>;
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
            use: {
                $get(params: {
                    type: dedicated.storage.NasUsageTypeEnum;
                }): Promise<complexType.UnitAndValue<number>>;
            };
            vrack: {
                $delete(): Promise<dedicated.nasTask.Task>;
            };
        };
    };
    /**
     * Operations about the STORAGE service
     * List available services
     */
    get(path: '/dedicated/nasha'): () => Promise<string[]>;
    /**
     * Storage nas HA
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<dedicated.nasha.Storage>;
    /**
     * List the dedicated.nasha.Partition objects
     * Get partition list
     */
    get(path: '/dedicated/nasha/{serviceName}/partition'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Storage zpool partition
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasha.Partition>;
    /**
     * List the dedicated.nasha.Access objects
     * get ACL for this partition
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Define Acl for partition
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}'): (params: {
        ip: string;
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasha.Access>;
    /**
     * authorizableBlocks operations
     * Get all RIPE/ARIN blocks that can be used in the ACL
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * authorizableIps operations
     * Get all IPs that can be used in the ACL
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * List the dedicated.nasha.customSnap objects
     * Get custom snapshots for this partition
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Custom Snapshot
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}'): (params: {
        name: string;
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasha.customSnap>;
    /**
     * Partition options
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/options'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasha.options>;
    /**
     * List the dedicated.nasha.Quota objects
     * Get quota for this partition
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Partition Quota
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}'): (params: {
        partitionName: string;
        serviceName: string;
        uid: number;
    }) => Promise<dedicated.nasha.Quota>;
    /**
     * List the dedicated.nasha.Snapshot objects
     * Get scheduled snapshot types for this partition
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.storage.SnapshotEnum[]>;
    /**
     * Partition Snapshot
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}'): (params: {
        partitionName: string;
        serviceName: string;
        snapshotType: dedicated.storage.SnapshotEnum;
    }) => Promise<dedicated.nasha.Snapshot>;
    /**
     * use operations
     * Return statistics about the partition
     */
    get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/use'): (params: {
        partitionName: string;
        serviceName: string;
        type: dedicated.storage.PartitionUsageTypeEnum;
    }) => Promise<complexType.UnitAndValue<number>>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the dedicated.nasTask.Task objects
     * View task list
     */
    get(path: '/dedicated/nasha/{serviceName}/task'): (params: {
        serviceName: string;
        operation?: dedicated.storage.TaskFunctionEnum;
        status?: dedicated.TaskStatusEnum;
    }) => Promise<number[]>;
    /**
     * Storage task
     * Get this object properties
     */
    get(path: '/dedicated/nasha/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * use operations
     * Return statistics about the nas
     */
    get(path: '/dedicated/nasha/{serviceName}/use'): (params: {
        serviceName: string;
        type: dedicated.storage.NasUsageTypeEnum;
    }) => Promise<complexType.UnitAndValue<number>>;
    /**
     * Get availabilities of nasha offer
     * Get availabilities of nasha offer
     */
    get(path: '/dedicated/nasha/availabilities'): () => Promise<dedicated.NasHAAvailabilities[]>;
    /**
     * Storage nas HA
     * Alter this object properties
     */
    put(path: '/dedicated/nasha/{serviceName}'): (params: {
        serviceName: string;
        canCreatePartition?: boolean;
        customName?: string;
        datacenter?: string;
        ip?: string;
        monitored?: boolean;
        zpoolCapacity?: number;
        zpoolSize?: number;
    }) => Promise<void>;
    /**
     * Storage zpool partition
     * Alter this object properties
     */
    put(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}'): (params: {
        partitionName: string;
        serviceName: string;
        partitionCapacity?: number;
        protocol?: dedicated.storage.ProtocolEnum;
        size?: number;
        usedBySnapshots?: number;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dedicated/nasha/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/dedicated/nasha/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/dedicated/nasha/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * List the dedicated.nasha.Partition objects
     * Create a new partition
     */
    post(path: '/dedicated/nasha/{serviceName}/partition'): (params: {
        serviceName: string;
        partitionName: string;
        protocol: dedicated.storage.ProtocolEnum;
        size: number;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * List the dedicated.nasha.Access objects
     * Add a new ACL entry
     */
    post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access'): (params: {
        partitionName: string;
        serviceName: string;
        ip: string;
        type?: dedicated.storage.AclTypeEnum;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * List the dedicated.nasha.customSnap objects
     * Create a new snapshot
     */
    post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot'): (params: {
        partitionName: string;
        serviceName: string;
        expiration?: string;
        name: string;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Partition options
     * Setup options
     */
    post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/options'): (params: {
        partitionName: string;
        serviceName: string;
        atime?: dedicated.storage.AtimeEnum;
        recordsize?: dedicated.storage.RecordSizeEnum;
        sync?: dedicated.storage.SyncEnum;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * List the dedicated.nasha.Quota objects
     * Set a new quota
     */
    post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota'): (params: {
        partitionName: string;
        serviceName: string;
        size: number;
        uid: number;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * List the dedicated.nasha.Snapshot objects
     * Schedule a new snapshot type
     */
    post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot'): (params: {
        partitionName: string;
        serviceName: string;
        snapshotType: dedicated.storage.SnapshotEnum;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/dedicated/nasha/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Storage zpool partition
     * Delete this partition
     */
    delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Define Acl for partition
     * Delete an ACL entry
     */
    delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}'): (params: {
        ip: string;
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Custom Snapshot
     * Delete a given snapshot
     */
    delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}'): (params: {
        name: string;
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Partition Quota
     * Delete a given quota
     */
    delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}'): (params: {
        partitionName: string;
        serviceName: string;
        uid: number;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Partition Snapshot
     * Delete a given snapshot
     */
    delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}'): (params: {
        partitionName: string;
        serviceName: string;
        snapshotType: dedicated.storage.SnapshotEnum;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Partition Vrack
     * Delete the vrack container
     */
    delete(path: '/dedicated/nasha/{serviceName}/vrack'): (params: {
        serviceName: string;
    }) => Promise<dedicated.nasTask.Task>;
}

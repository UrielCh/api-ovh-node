import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dedicated/nas Models
 */
export declare namespace dedicated {
    type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo";
    namespace nas {
        interface Access {
            accessId: number;
            ip: string;
        }
        interface Nas {
            canCreatePartition: boolean;
            customName?: string;
            datacenter?: string;
            ip?: string;
            mountPath: string;
            serviceName: string;
            zpoolSize: number;
        }
        interface Partition {
            partitionName: string;
            protocol: dedicated.storage.ProtocolEnum;
            size: number;
        }
        interface Quota {
            size: number;
            uid: number;
        }
    }
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
    namespace storage {
        type ProtocolEnum = "CIFS" | "NFS" | "NFS_CIFS";
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
 * END API /dedicated/nas Models
 */
export declare function proxyDedicatedNas(ovhEngine: OvhRequestable): Dedicated;
export default proxyDedicatedNas;
/**
 * Api Proxy model
 */ export interface Dedicated {
    nas: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<dedicated.nas.Nas>;
            $put(params?: {
                canCreatePartition?: boolean;
                customName?: string;
                datacenter?: string;
                ip?: string;
                mountPath?: string;
                serviceName?: string;
                zpoolSize?: number;
            }): Promise<void>;
            partition: {
                $get(): Promise<string[]>;
                $post(params: {
                    partitionName: string;
                    protocol: dedicated.storage.ProtocolEnum;
                    size: number;
                }): Promise<dedicated.nasTask.Task>;
                $(partitionName: string): {
                    $delete(): Promise<dedicated.nasTask.Task>;
                    $get(): Promise<dedicated.nas.Partition>;
                    $put(params?: {
                        partitionName?: string;
                        protocol?: dedicated.storage.ProtocolEnum;
                        size?: number;
                    }): Promise<void>;
                    access: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            ip: string;
                        }): Promise<dedicated.nasTask.Task>;
                        $(ip: string): {
                            $delete(): Promise<dedicated.nasTask.Task>;
                            $get(): Promise<dedicated.nas.Access>;
                        };
                    };
                    authorizableIps: {
                        $get(): Promise<string[]>;
                    };
                    quota: {
                        $get(): Promise<number[]>;
                        $post(params: {
                            size: number;
                            uid: number;
                        }): Promise<dedicated.nasTask.Task>;
                        $(uid: number): {
                            $delete(): Promise<dedicated.nasTask.Task>;
                            $get(): Promise<dedicated.nas.Quota>;
                        };
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
        };
    };
    /**
     * Operations about the STORAGE service
     * List available services
     */
    get(path: '/dedicated/nas'): () => Promise<string[]>;
    /**
     * Storage nas
     * Get this object properties
     */
    get(path: '/dedicated/nas/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<dedicated.nas.Nas>;
    /**
     * List the dedicated.nas.Partition objects
     * Get partition list
     */
    get(path: '/dedicated/nas/{serviceName}/partition'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Storage partition
     * Get this object properties
     */
    get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nas.Partition>;
    /**
     * List the dedicated.nas.Access objects
     * get ACL for this partition
     */
    get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Define Acl for partition
     * Get this object properties
     */
    get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}'): (params: {
        ip: string;
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nas.Access>;
    /**
     * authorizableIps operations
     * Get all IPs that can be used in the ACL
     */
    get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * List the dedicated.nas.Quota objects
     * Get quota for this partition
     */
    get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Partition Quota
     * Get this object properties
     */
    get(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}'): (params: {
        partitionName: string;
        serviceName: string;
        uid: number;
    }) => Promise<dedicated.nas.Quota>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dedicated/nas/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the dedicated.nasTask.Task objects
     * View task list
     */
    get(path: '/dedicated/nas/{serviceName}/task'): (params: {
        serviceName: string;
        operation?: dedicated.storage.TaskFunctionEnum;
        status?: dedicated.TaskStatusEnum;
    }) => Promise<number[]>;
    /**
     * Storage task
     * Get this object properties
     */
    get(path: '/dedicated/nas/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Storage nas
     * Alter this object properties
     */
    put(path: '/dedicated/nas/{serviceName}'): (params: {
        serviceName: string;
        canCreatePartition?: boolean;
        customName?: string;
        datacenter?: string;
        ip?: string;
        mountPath?: string;
        zpoolSize?: number;
    }) => Promise<void>;
    /**
     * Storage partition
     * Alter this object properties
     */
    put(path: '/dedicated/nas/{serviceName}/partition/{partitionName}'): (params: {
        partitionName: string;
        serviceName: string;
        protocol?: dedicated.storage.ProtocolEnum;
        size?: number;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dedicated/nas/{serviceName}/serviceInfos'): (params: {
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
     * List the dedicated.nas.Partition objects
     * Create a  new partition
     */
    post(path: '/dedicated/nas/{serviceName}/partition'): (params: {
        serviceName: string;
        partitionName: string;
        protocol: dedicated.storage.ProtocolEnum;
        size: number;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * List the dedicated.nas.Access objects
     * Add an Acl to this  partition
     */
    post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access'): (params: {
        partitionName: string;
        serviceName: string;
        ip: string;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * List the dedicated.nas.Quota objects
     * Set a new quota
     */
    post(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota'): (params: {
        partitionName: string;
        serviceName: string;
        size: number;
        uid: number;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Storage partition
     * Delete this partition
     */
    delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}'): (params: {
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Define Acl for partition
     * Delete a given snapshot
     */
    delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}'): (params: {
        ip: string;
        partitionName: string;
        serviceName: string;
    }) => Promise<dedicated.nasTask.Task>;
    /**
     * Partition Quota
     * Delete a given quota
     */
    delete(path: '/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}'): (params: {
        partitionName: string;
        serviceName: string;
        uid: number;
    }) => Promise<dedicated.nasTask.Task>;
}

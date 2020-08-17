import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/nas Models
 * Source: https://eu.api.soyoustart.com/1.0/dedicated/nas.json
 */
export namespace dedicated {
    /**
     * different task status
     * type fullname: dedicated.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace nas {
        /**
         * Define Acl for partition
         * interface fullName: dedicated.nas.Access.Access
         */
        export interface Access {
            accessId: number;
            ip: string;
        }
        /**
         * Storage nas
         * interface fullName: dedicated.nas.Nas.Nas
         */
        export interface Nas {
            canCreatePartition: boolean;
            customName?: string;
            datacenter?: string;
            ip?: string;
            mountPath: string;
            serviceName: string;
            zpoolSize: number;
        }
        /**
         * Storage partition
         * interface fullName: dedicated.nas.Partition.Partition
         */
        export interface Partition {
            partitionName: string;
            protocol: dedicated.storage.ProtocolEnum;
            size: number;
        }
        /**
         * Partition Quota
         * interface fullName: dedicated.nas.Quota.Quota
         */
        export interface Quota {
            size: number;
            uid: number;
        }
    }
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
    export namespace storage {
        /**
         * Partition Protocol
         * type fullname: dedicated.storage.ProtocolEnum
         */
        export type ProtocolEnum = "CIFS" | "NFS" | "NFS_CIFS"
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
 * END API /dedicated/nas Models
 */
export function proxyDedicatedNas(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedNas;
/**
 * Api model for /dedicated/nas
 */
export interface Dedicated {
    nas: {
        /**
         * List available services
         * GET /dedicated/nas
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /dedicated/nas/{serviceName}
             */
            $get(): Promise<dedicated.nas.Nas>;
            /**
             * Alter this object properties
             * PUT /dedicated/nas/{serviceName}
             */
            $put(params?: { canCreatePartition?: boolean, customName?: string, datacenter?: string, ip?: string, mountPath?: string, serviceName?: string, zpoolSize?: number }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            partition: {
                /**
                 * Get partition list
                 * GET /dedicated/nas/{serviceName}/partition
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a  new partition
                 * POST /dedicated/nas/{serviceName}/partition
                 */
                $post(params: { partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number }): Promise<dedicated.nasTask.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(partitionName: string): {
                    /**
                     * Delete this partition
                     * DELETE /dedicated/nas/{serviceName}/partition/{partitionName}
                     */
                    $delete(): Promise<dedicated.nasTask.Task>;
                    /**
                     * Get this object properties
                     * GET /dedicated/nas/{serviceName}/partition/{partitionName}
                     */
                    $get(): Promise<dedicated.nas.Partition>;
                    /**
                     * Alter this object properties
                     * PUT /dedicated/nas/{serviceName}/partition/{partitionName}
                     */
                    $put(params?: { partitionName?: string, protocol?: dedicated.storage.ProtocolEnum, size?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    access: {
                        /**
                         * get ACL for this partition
                         * GET /dedicated/nas/{serviceName}/partition/{partitionName}/access
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add an Acl to this  partition
                         * POST /dedicated/nas/{serviceName}/partition/{partitionName}/access
                         */
                        $post(params: { ip: string }): Promise<dedicated.nasTask.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(ip: string): {
                            /**
                             * Delete a given snapshot
                             * DELETE /dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}
                             */
                            $delete(): Promise<dedicated.nasTask.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}
                             */
                            $get(): Promise<dedicated.nas.Access>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    authorizableIps: {
                        /**
                         * Get all IPs that can be used in the ACL
                         * GET /dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    quota: {
                        /**
                         * Get quota for this partition
                         * GET /dedicated/nas/{serviceName}/partition/{partitionName}/quota
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Set a new quota
                         * POST /dedicated/nas/{serviceName}/partition/{partitionName}/quota
                         */
                        $post(params: { size: number, uid: number }): Promise<dedicated.nasTask.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(uid: number): {
                            /**
                             * Delete a given quota
                             * DELETE /dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}
                             */
                            $delete(): Promise<dedicated.nasTask.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}
                             */
                            $get(): Promise<dedicated.nas.Quota>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /dedicated/nas/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /dedicated/nas/{serviceName}/serviceInfos
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
                 * GET /dedicated/nas/{serviceName}/task
                 */
                $get(params?: { operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /dedicated/nas/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<dedicated.nasTask.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
}

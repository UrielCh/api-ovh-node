import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/ceph Models
 * Source: https://api.us.ovhcloud.com/1.0/dedicated/ceph.json
 */
export namespace dedicated {
    export namespace ceph {
        export namespace aclGet {
            /**
             * IP ACL
             * interface fullName: dedicated.ceph.aclGet.response.response
             */
            export interface response {
                family: dedicated.ceph.aclGet.response.familyEnum;
                id: number;
                netmask: string;
                network: string;
            }
            export namespace response {
                /**
                 * Family of IP ACL
                 * type fullname: dedicated.ceph.aclGet.response.familyEnum
                 */
                export type familyEnum = "IPV4" | "IPV6"
            }
        }
        export namespace aclList {
            /**
             * Structure holding IP ACLs
             * interface fullName: dedicated.ceph.aclList.response.response
             */
            export interface response {
                family: dedicated.ceph.aclList.response.familyEnum;
                id: number;
                netmask: string;
                network: string;
            }
            export namespace response {
                /**
                 * Family of IP ACL
                 * type fullname: dedicated.ceph.aclList.response.familyEnum
                 */
                export type familyEnum = "IPV4" | "IPV6"
            }
        }
        export namespace cephfsGet {
            /**
             * CephFS filesystem data
             * interface fullName: dedicated.ceph.cephfsGet.response.response
             */
            export interface response {
                enabled: boolean;
                fsName: string;
            }
        }
        export namespace cephfsList {
            /**
             * List of CephFS filesystems
             * interface fullName: dedicated.ceph.cephfsList.response.response
             */
            export interface response {
                enabled: boolean;
                fsName: string;
            }
        }
        export namespace clusterGet {
            /**
             * Details about ceph cluster
             * interface fullName: dedicated.ceph.clusterGet.response.response
             */
            export interface response {
                cephMons: string[];
                cephVersion: string;
                createDate: string;
                crushTunables: dedicated.ceph.clusterGet.response.crushTunablesEnum;
                label: string;
                region: string;
                serviceName: string;
                size: number;
                state: dedicated.ceph.clusterGet.response.stateEnum;
                status: dedicated.ceph.clusterGet.response.statusEnum;
                updateDate: string;
            }
            export namespace response {
                /**
                 * Tunables of cluster
                 * type fullname: dedicated.ceph.clusterGet.response.crushTunablesEnum
                 */
                export type crushTunablesEnum = "OPTIMAL" | "DEFAULT" | "LEGACY" | "BOBTAIL" | "ARGONAUT" | "FIREFLY" | "HAMMER" | "JEWEL"
                /**
                 * State of cluster
                 * type fullname: dedicated.ceph.clusterGet.response.stateEnum
                 */
                export type stateEnum = "ACTIVE" | "SUSPENDED"
                /**
                 * Status of cluster
                 * type fullname: dedicated.ceph.clusterGet.response.statusEnum
                 */
                export type statusEnum = "CREATING" | "INSTALLED" | "DELETING" | "DELETED" | "TASK_IN_PROGRESS"
            }
        }
        export namespace clusterHealth {
            /**
             * Health of ceph cluster
             * interface fullName: dedicated.ceph.clusterHealth.response.response
             */
            export interface response {
                availableBytes: number;
                healthy: boolean;
                serviceName: string;
                status: string;
                totalBytes: number;
                usedBytes: number;
            }
        }
        export namespace clusterUpdate {
            /**
             * Tunables of cluster
             * type fullname: dedicated.ceph.clusterUpdate.crushTunablesEnum
             */
            export type crushTunablesEnum = "OPTIMAL" | "DEFAULT" | "LEGACY" | "BOBTAIL" | "ARGONAUT" | "FIREFLY" | "HAMMER" | "JEWEL"
        }
        export namespace poolGet {
            /**
             * Ceph pool
             * interface fullName: dedicated.ceph.poolGet.response.response
             */
            export interface response {
                backup: boolean;
                minActiveReplicas: number;
                name: string;
                poolType: dedicated.ceph.poolGet.response.poolTypeEnum;
                replicaCount: number;
                serviceName: string;
            }
            export namespace response {
                /**
                 * Type of pool
                 * type fullname: dedicated.ceph.poolGet.response.poolTypeEnum
                 */
                export type poolTypeEnum = "REPLICATED" | "ERASURE_CODED"
            }
        }
        export namespace poolList {
            /**
             * List of cluster pools
             * interface fullName: dedicated.ceph.poolList.response.response
             */
            export interface response {
                backup: boolean;
                minActiveReplicas: number;
                name: string;
                poolType: dedicated.ceph.poolList.response.poolTypeEnum;
                replicaCount: number;
                serviceName: string;
            }
            export namespace response {
                /**
                 * Type of pool
                 * type fullname: dedicated.ceph.poolList.response.poolTypeEnum
                 */
                export type poolTypeEnum = "REPLICATED" | "ERASURE_CODED"
            }
        }
        export namespace taskGet {
            /**
             * list of task subtasks
             * interface fullName: dedicated.ceph.taskGet.response.response
             */
            export interface response {
                createDate: string;
                finishDate?: string;
                name: string;
                state?: dedicated.ceph.taskGet.response.stateEnum;
                type: string;
            }
            export namespace response {
                /**
                 * State of task
                 * type fullname: dedicated.ceph.taskGet.response.stateEnum
                 */
                export type stateEnum = "IN PROGRESS" | "DONE" | "FAILED"
            }
        }
        export namespace taskList {
            /**
             * List of active tasks
             * interface fullName: dedicated.ceph.taskList.response.response
             */
            export interface response {
                id: string;
                name: string;
            }
        }
        export namespace userGet {
            /**
             * Ceph user
             * interface fullName: dedicated.ceph.userGet.response.response
             */
            export interface response {
                key: string;
                mdsCaps: string;
                monCaps: string;
                name: string;
                osdCaps: string;
                serviceName: string;
            }
        }
        export namespace userList {
            /**
             * List of cluster users
             * interface fullName: dedicated.ceph.userList.response.response
             */
            export interface response {
                key: string;
                mdsCaps: string;
                monCaps: string;
                name: string;
                osdCaps: string;
                serviceName: string;
            }
        }
        export namespace userPoolPermList {
            /**
             * List of permissions
             * interface fullName: dedicated.ceph.userPoolPermList.response.response
             */
            export interface response {
                classRead: boolean;
                classWrite: boolean;
                execute: boolean;
                poolName: string;
                read: boolean;
                write: boolean;
            }
        }
        export namespace userPoolPermSetAll {
            /**
             * List of permissions
             * interface fullName: dedicated.ceph.userPoolPermSetAll.permissions.permissions
             */
            export interface permissions {
                classRead: boolean;
                classWrite: boolean;
                execute: boolean;
                poolName: string;
                read: boolean;
                write: boolean;
            }
        }
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
 * END API /dedicated/ceph Models
 */
export function proxyDedicatedCeph(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedCeph;
/**
 * Api model for /dedicated/ceph
 */
export interface Dedicated {
    ceph: {
        /**
         * List available services
         * GET /dedicated/ceph
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get cluster details
             * GET /dedicated/ceph/{serviceName}
             */
            $get(): Promise<dedicated.ceph.clusterGet.response>;
            /**
             * Update cluster details
             * PUT /dedicated/ceph/{serviceName}
             */
            $put(params: { crushTunables: dedicated.ceph.clusterUpdate.crushTunablesEnum, label: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            acl: {
                /**
                 * Get list of all IP ACLs in a cluster
                 * GET /dedicated/ceph/{serviceName}/acl
                 */
                $get(): Promise<dedicated.ceph.aclList.response[]>;
                /**
                 * Create one or more new IP ACLs
                 * POST /dedicated/ceph/{serviceName}/acl
                 */
                $post(params: { aclList: string[] }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(aclId: string): {
                    /**
                     * Delete single IP ACL
                     * DELETE /dedicated/ceph/{serviceName}/acl/{aclId}
                     */
                    $delete(): Promise<string>;
                    /**
                     * Get details about IP ACL
                     * GET /dedicated/ceph/{serviceName}/acl/{aclId}
                     */
                    $get(): Promise<dedicated.ceph.aclGet.response>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            cephfs: {
                /**
                 * List CephFS filestystems
                 * GET /dedicated/ceph/{serviceName}/cephfs
                 */
                $get(): Promise<dedicated.ceph.cephfsList.response[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(fsName: string): {
                    /**
                     * Purge CephFS filesystem
                     * DELETE /dedicated/ceph/{serviceName}/cephfs/{fsName}
                     */
                    $delete(): Promise<string>;
                    /**
                     * Get CephFS filestystem information
                     * GET /dedicated/ceph/{serviceName}/cephfs/{fsName}
                     */
                    $get(): Promise<dedicated.ceph.cephfsGet.response>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    disable: {
                        /**
                         * Disable CephFS filesystem
                         * POST /dedicated/ceph/{serviceName}/cephfs/{fsName}/disable
                         */
                        $post(): Promise<string>;
                    }
                    enable: {
                        /**
                         * Enable CephFS filesystem
                         * POST /dedicated/ceph/{serviceName}/cephfs/{fsName}/enable
                         */
                        $post(): Promise<string>;
                    }
                };
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /dedicated/ceph/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            health: {
                /**
                 * Get cluster health
                 * GET /dedicated/ceph/{serviceName}/health
                 */
                $get(): Promise<dedicated.ceph.clusterHealth.response>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            pool: {
                /**
                 * Get list of all pools in a cluster
                 * GET /dedicated/ceph/{serviceName}/pool
                 */
                $get(): Promise<dedicated.ceph.poolList.response[]>;
                /**
                 * Create a new ceph pool
                 * POST /dedicated/ceph/{serviceName}/pool
                 */
                $post(params: { poolName: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(poolName: string): {
                    /**
                     * Delete a single ceph pool
                     * DELETE /dedicated/ceph/{serviceName}/pool/{poolName}
                     */
                    $delete(): Promise<string>;
                    /**
                     * Get details about an existing ceph pool
                     * GET /dedicated/ceph/{serviceName}/pool/{poolName}
                     */
                    $get(): Promise<dedicated.ceph.poolGet.response>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /dedicated/ceph/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /dedicated/ceph/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * List tasks in progress
                 * GET /dedicated/ceph/{serviceName}/task
                 */
                $get(): Promise<dedicated.ceph.taskList.response[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: string): {
                    /**
                     * Get task details
                     * GET /dedicated/ceph/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<dedicated.ceph.taskGet.response[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /dedicated/ceph/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
            user: {
                /**
                 * Get list of all users in a cluster
                 * GET /dedicated/ceph/{serviceName}/user
                 */
                $get(): Promise<dedicated.ceph.userList.response[]>;
                /**
                 * Create a new ceph user
                 * POST /dedicated/ceph/{serviceName}/user
                 */
                $post(params: { userName: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(userName: string): {
                    /**
                     * Delete an existing single ceph user
                     * DELETE /dedicated/ceph/{serviceName}/user/{userName}
                     */
                    $delete(): Promise<string>;
                    /**
                     * Get details about a ceph user
                     * GET /dedicated/ceph/{serviceName}/user/{userName}
                     */
                    $get(): Promise<dedicated.ceph.userGet.response>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    pool: {
                        /**
                         * List user-pool permissions
                         * GET /dedicated/ceph/{serviceName}/user/{userName}/pool
                         */
                        $get(): Promise<dedicated.ceph.userPoolPermList.response[]>;
                        /**
                         * Create new user-pool permissions. All old permissions will be cleared
                         * POST /dedicated/ceph/{serviceName}/user/{userName}/pool
                         */
                        $post(params?: { permissions?: dedicated.ceph.userPoolPermSetAll.permissions[] }): Promise<string>;
                        /**
                         * Update user-pool permission for single pool
                         * PUT /dedicated/ceph/{serviceName}/user/{userName}/pool
                         */
                        $put(params: { classRead: boolean, classWrite: boolean, execute: boolean, poolName: string, read: boolean, write: boolean }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(poolName: string): {
                            /**
                             * Clear user-pool permission for single pool
                             * DELETE /dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}
                             */
                            $delete(): Promise<string>;
                        };
                    }
                };
            }
        };
    }
}

import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dedicated/ceph Models
 */
export declare namespace dedicated {
    namespace ceph {
        namespace aclGet {
            interface response {
                family: dedicated.ceph.aclGet.response.familyEnum;
                id: number;
                netmask: string;
                network: string;
            }
            namespace response {
                type familyEnum = "IPV4" | "IPV6";
            }
        }
        namespace aclList {
            interface response {
                family: dedicated.ceph.aclList.response.familyEnum;
                id: number;
                netmask: string;
                network: string;
            }
            namespace response {
                type familyEnum = "IPV4" | "IPV6";
            }
        }
        namespace clusterGet {
            interface response {
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
            namespace response {
                type crushTunablesEnum = "OPTIMAL" | "DEFAULT" | "LEGACY" | "BOBTAIL" | "ARGONAUT" | "FIREFLY" | "HAMMER" | "JEWEL";
                type stateEnum = "ACTIVE" | "SUSPENDED";
                type statusEnum = "CREATING" | "INSTALLED" | "DELETING" | "DELETED" | "TASK_IN_PROGRESS";
            }
        }
        namespace clusterHealth {
            interface response {
                availableBytes: number;
                healthy: boolean;
                serviceName: string;
                status: string;
                totalBytes: number;
                usedBytes: number;
            }
        }
        namespace clusterUpdate {
            type crushTunablesEnum = "OPTIMAL" | "DEFAULT" | "LEGACY" | "BOBTAIL" | "ARGONAUT" | "FIREFLY" | "HAMMER" | "JEWEL";
        }
        namespace poolGet {
            interface response {
                backup: boolean;
                minActiveReplicas: number;
                name: string;
                poolType: dedicated.ceph.poolGet.response.poolTypeEnum;
                replicaCount: number;
                serviceName: string;
            }
            namespace response {
                type poolTypeEnum = "REPLICATED" | "ERASURE_CODED";
            }
        }
        namespace poolList {
            interface response {
                backup: boolean;
                minActiveReplicas: number;
                name: string;
                poolType: dedicated.ceph.poolList.response.poolTypeEnum;
                replicaCount: number;
                serviceName: string;
            }
            namespace response {
                type poolTypeEnum = "REPLICATED" | "ERASURE_CODED";
            }
        }
        namespace taskGet {
            interface response {
                createDate: string;
                finishDate?: string;
                name: string;
                state?: dedicated.ceph.taskGet.response.stateEnum;
                type: string;
            }
            namespace response {
                type stateEnum = "IN PROGRESS" | "DONE" | "FAILED";
            }
        }
        namespace taskList {
            interface response {
                id: string;
                name: string;
            }
        }
        namespace userGet {
            interface response {
                key: string;
                mdsCaps: string;
                monCaps: string;
                name: string;
                osdCaps: string;
                serviceName: string;
            }
        }
        namespace userList {
            interface response {
                key: string;
                mdsCaps: string;
                monCaps: string;
                name: string;
                osdCaps: string;
                serviceName: string;
            }
        }
        namespace userPoolPermList {
            interface response {
                classRead: boolean;
                classWrite: boolean;
                execute: boolean;
                poolName: string;
                read: boolean;
                write: boolean;
            }
        }
        namespace userPoolPermSetAll {
            interface permissions {
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
 * END API /dedicated/ceph Models
 */
export declare function proxyDedicatedCeph(ovhEngine: OvhRequestable): Dedicated;
export default proxyDedicatedCeph;
/**
 * Api Proxy model
 */ export interface Dedicated {
    ceph: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<dedicated.ceph.clusterGet.response>;
            $put(params: {
                crushTunables: dedicated.ceph.clusterUpdate.crushTunablesEnum;
                label: string;
            }): Promise<string>;
            acl: {
                $get(): Promise<dedicated.ceph.aclList.response[]>;
                $post(params: {
                    aclList: string[];
                }): Promise<string>;
                $(aclId: string): {
                    $delete(): Promise<string>;
                    $get(): Promise<dedicated.ceph.aclGet.response>;
                };
            };
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
            health: {
                $get(): Promise<dedicated.ceph.clusterHealth.response>;
            };
            pool: {
                $get(): Promise<dedicated.ceph.poolList.response[]>;
                $post(params: {
                    poolName: string;
                }): Promise<string>;
                $(poolName: string): {
                    $delete(): Promise<string>;
                    $get(): Promise<dedicated.ceph.poolGet.response>;
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
                $get(): Promise<dedicated.ceph.taskList.response[]>;
                $(taskId: string): {
                    $get(): Promise<dedicated.ceph.taskGet.response[]>;
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
            user: {
                $get(): Promise<dedicated.ceph.userList.response[]>;
                $post(params: {
                    userName: string;
                }): Promise<string>;
                $(userName: string): {
                    $delete(): Promise<string>;
                    $get(): Promise<dedicated.ceph.userGet.response>;
                    pool: {
                        $get(): Promise<dedicated.ceph.userPoolPermList.response[]>;
                        $post(params?: {
                            permissions?: dedicated.ceph.userPoolPermSetAll.permissions[];
                        }): Promise<string>;
                        $put(params: {
                            classRead: boolean;
                            classWrite: boolean;
                            execute: boolean;
                            poolName: string;
                            read: boolean;
                            write: boolean;
                        }): Promise<string>;
                        $(poolName: string): {
                            $delete(): Promise<string>;
                        };
                    };
                };
            };
        };
    };
    /**
     * Operations about the CEPH service
     * List available services
     */
    get(path: '/dedicated/ceph'): () => Promise<string[]>;
    /**
     * dedicated.ceph.clusterGet
     * Get cluster details
     */
    get(path: '/dedicated/ceph/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<dedicated.ceph.clusterGet.response>;
    /**
     * dedicated.ceph.aclCreate
     * Get list of all IP ACLs in a cluster
     */
    get(path: '/dedicated/ceph/{serviceName}/acl'): (params: {
        serviceName: string;
    }) => Promise<dedicated.ceph.aclList.response[]>;
    /**
     * dedicated.ceph.aclDeleteSingle
     * Get details about IP ACL
     */
    get(path: '/dedicated/ceph/{serviceName}/acl/{aclId}'): (params: {
        aclId: string;
        serviceName: string;
    }) => Promise<dedicated.ceph.aclGet.response>;
    /**
     * dedicated.ceph.clusterHealth
     * Get cluster health
     */
    get(path: '/dedicated/ceph/{serviceName}/health'): (params: {
        serviceName: string;
    }) => Promise<dedicated.ceph.clusterHealth.response>;
    /**
     * dedicated.ceph.poolCreate
     * Get list of all pools in a cluster
     */
    get(path: '/dedicated/ceph/{serviceName}/pool'): (params: {
        serviceName: string;
    }) => Promise<dedicated.ceph.poolList.response[]>;
    /**
     * dedicated.ceph.poolDelete
     * Get details about an existing ceph pool
     */
    get(path: '/dedicated/ceph/{serviceName}/pool/{poolName}'): (params: {
        poolName: string;
        serviceName: string;
    }) => Promise<dedicated.ceph.poolGet.response>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dedicated/ceph/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * dedicated.ceph.taskList
     * List tasks in progress
     */
    get(path: '/dedicated/ceph/{serviceName}/task'): (params: {
        serviceName: string;
    }) => Promise<dedicated.ceph.taskList.response[]>;
    /**
     * dedicated.ceph.taskGet
     * Get task details
     */
    get(path: '/dedicated/ceph/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: string;
    }) => Promise<dedicated.ceph.taskGet.response[]>;
    /**
     * dedicated.ceph.userCreate
     * Get list of all users in a cluster
     */
    get(path: '/dedicated/ceph/{serviceName}/user'): (params: {
        serviceName: string;
    }) => Promise<dedicated.ceph.userList.response[]>;
    /**
     * dedicated.ceph.userDelete
     * Get details about a ceph user
     */
    get(path: '/dedicated/ceph/{serviceName}/user/{userName}'): (params: {
        serviceName: string;
        userName: string;
    }) => Promise<dedicated.ceph.userGet.response>;
    /**
     * dedicated.ceph.userPoolPermList
     * List user-pool permissions
     */
    get(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool'): (params: {
        serviceName: string;
        userName: string;
    }) => Promise<dedicated.ceph.userPoolPermList.response[]>;
    /**
     * dedicated.ceph.clusterGet
     * Update cluster details
     */
    put(path: '/dedicated/ceph/{serviceName}'): (params: {
        serviceName: string;
        crushTunables: dedicated.ceph.clusterUpdate.crushTunablesEnum;
        label: string;
    }) => Promise<string>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dedicated/ceph/{serviceName}/serviceInfos'): (params: {
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
     * dedicated.ceph.userPoolPermList
     * Update user-pool permission for single pool
     */
    put(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool'): (params: {
        serviceName: string;
        userName: string;
        classRead: boolean;
        classWrite: boolean;
        execute: boolean;
        poolName: string;
        read: boolean;
        write: boolean;
    }) => Promise<string>;
    /**
     * dedicated.ceph.aclCreate
     * Create one or more new IP ACLs
     */
    post(path: '/dedicated/ceph/{serviceName}/acl'): (params: {
        serviceName: string;
        aclList: string[];
    }) => Promise<string>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/dedicated/ceph/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/dedicated/ceph/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * dedicated.ceph.poolCreate
     * Create a new ceph pool
     */
    post(path: '/dedicated/ceph/{serviceName}/pool'): (params: {
        serviceName: string;
        poolName: string;
    }) => Promise<string>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/dedicated/ceph/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * dedicated.ceph.userCreate
     * Create a new ceph user
     */
    post(path: '/dedicated/ceph/{serviceName}/user'): (params: {
        serviceName: string;
        userName: string;
    }) => Promise<string>;
    /**
     * dedicated.ceph.userPoolPermList
     * Create new user-pool permissions. All old permissions will be cleared
     */
    post(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool'): (params: {
        serviceName: string;
        userName: string;
        permissions?: dedicated.ceph.userPoolPermSetAll.permissions[];
    }) => Promise<string>;
    /**
     * dedicated.ceph.aclDeleteSingle
     * Delete single IP ACL
     */
    delete(path: '/dedicated/ceph/{serviceName}/acl/{aclId}'): (params: {
        aclId: string;
        serviceName: string;
    }) => Promise<string>;
    /**
     * dedicated.ceph.poolDelete
     * Delete a single ceph pool
     */
    delete(path: '/dedicated/ceph/{serviceName}/pool/{poolName}'): (params: {
        poolName: string;
        serviceName: string;
    }) => Promise<string>;
    /**
     * dedicated.ceph.userDelete
     * Delete an existing single ceph user
     */
    delete(path: '/dedicated/ceph/{serviceName}/user/{userName}'): (params: {
        serviceName: string;
        userName: string;
    }) => Promise<string>;
    /**
     * dedicated.ceph.userPoolPermDelete
     * Clear user-pool permission for single pool
     */
    delete(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}'): (params: {
        poolName: string;
        serviceName: string;
        userName: string;
    }) => Promise<string>;
}

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicated/ceph Models
 */
export namespace dedicated {
    export namespace ceph {
        export namespace aclGet {
            // interface fullName: dedicated.ceph.aclGet.response.response
            export interface response {
                family: dedicated.ceph.aclGet.response.familyEnum;
                id: number;
                netmask: string;
                network: string;
            }
            export namespace response {
                // type fullname: dedicated.ceph.aclGet.response.familyEnum
                export type familyEnum = "IPV4" | "IPV6"
            }
        }
        export namespace aclList {
            // interface fullName: dedicated.ceph.aclList.response.response
            export interface response {
                family: dedicated.ceph.aclList.response.familyEnum;
                id: number;
                netmask: string;
                network: string;
            }
            export namespace response {
                // type fullname: dedicated.ceph.aclList.response.familyEnum
                export type familyEnum = "IPV4" | "IPV6"
            }
        }
        export namespace clusterGet {
            // interface fullName: dedicated.ceph.clusterGet.response.response
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
                // type fullname: dedicated.ceph.clusterGet.response.crushTunablesEnum
                export type crushTunablesEnum = "OPTIMAL" | "DEFAULT" | "LEGACY" | "BOBTAIL" | "ARGONAUT" | "FIREFLY" | "HAMMER" | "JEWEL"
                // type fullname: dedicated.ceph.clusterGet.response.stateEnum
                export type stateEnum = "ACTIVE" | "SUSPENDED"
                // type fullname: dedicated.ceph.clusterGet.response.statusEnum
                export type statusEnum = "CREATING" | "INSTALLED" | "DELETING" | "DELETED" | "TASK_IN_PROGRESS"
            }
        }
        export namespace clusterHealth {
            // interface fullName: dedicated.ceph.clusterHealth.response.response
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
            // type fullname: dedicated.ceph.clusterUpdate.crushTunablesEnum
            export type crushTunablesEnum = "OPTIMAL" | "DEFAULT" | "LEGACY" | "BOBTAIL" | "ARGONAUT" | "FIREFLY" | "HAMMER" | "JEWEL"
        }
        export namespace poolGet {
            // interface fullName: dedicated.ceph.poolGet.response.response
            export interface response {
                backup: boolean;
                minActiveReplicas: number;
                name: string;
                poolType: dedicated.ceph.poolGet.response.poolTypeEnum;
                replicaCount: number;
                serviceName: string;
            }
            export namespace response {
                // type fullname: dedicated.ceph.poolGet.response.poolTypeEnum
                export type poolTypeEnum = "REPLICATED" | "ERASURE_CODED"
            }
        }
        export namespace poolList {
            // interface fullName: dedicated.ceph.poolList.response.response
            export interface response {
                backup: boolean;
                minActiveReplicas: number;
                name: string;
                poolType: dedicated.ceph.poolList.response.poolTypeEnum;
                replicaCount: number;
                serviceName: string;
            }
            export namespace response {
                // type fullname: dedicated.ceph.poolList.response.poolTypeEnum
                export type poolTypeEnum = "REPLICATED" | "ERASURE_CODED"
            }
        }
        export namespace taskGet {
            // interface fullName: dedicated.ceph.taskGet.response.response
            export interface response {
                createDate: string;
                finishDate?: string;
                name: string;
                state?: dedicated.ceph.taskGet.response.stateEnum;
                type: string;
            }
            export namespace response {
                // type fullname: dedicated.ceph.taskGet.response.stateEnum
                export type stateEnum = "IN PROGRESS" | "DONE" | "FAILED"
            }
        }
        export namespace taskList {
            // interface fullName: dedicated.ceph.taskList.response.response
            export interface response {
                id: string;
                name: string;
            }
        }
        export namespace userGet {
            // interface fullName: dedicated.ceph.userGet.response.response
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
            // interface fullName: dedicated.ceph.userList.response.response
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
            // interface fullName: dedicated.ceph.userPoolPermList.response.response
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
            // interface fullName: dedicated.ceph.userPoolPermSetAll.permissions.permissions
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
 * END API /dedicated/ceph Models
 */
export function proxyDedicatedCeph(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedCeph;
/**
 * Api Proxy model
 */// Apis harmony
// path /dedicated
export interface Dedicated{
    ceph: {
        // GET /dedicated/ceph
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /dedicated/ceph/{serviceName}
            $get(): Promise<dedicated.ceph.clusterGet.response>;
            // PUT /dedicated/ceph/{serviceName}
            $put(params: {crushTunables: dedicated.ceph.clusterUpdate.crushTunablesEnum, label: string}): Promise<string>;
            acl: {
                // GET /dedicated/ceph/{serviceName}/acl
                $get(): Promise<dedicated.ceph.aclList.response[]>;
                // POST /dedicated/ceph/{serviceName}/acl
                $post(params: {aclList: string[]}): Promise<string>;
                $(aclId: string): {
                    // DELETE /dedicated/ceph/{serviceName}/acl/{aclId}
                    $delete(): Promise<string>;
                    // GET /dedicated/ceph/{serviceName}/acl/{aclId}
                    $get(): Promise<dedicated.ceph.aclGet.response>;
                };
            }
            changeContact: {
                // POST /dedicated/ceph/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination: {
                // POST /dedicated/ceph/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            health: {
                // GET /dedicated/ceph/{serviceName}/health
                $get(): Promise<dedicated.ceph.clusterHealth.response>;
            }
            pool: {
                // GET /dedicated/ceph/{serviceName}/pool
                $get(): Promise<dedicated.ceph.poolList.response[]>;
                // POST /dedicated/ceph/{serviceName}/pool
                $post(params: {poolName: string}): Promise<string>;
                $(poolName: string): {
                    // DELETE /dedicated/ceph/{serviceName}/pool/{poolName}
                    $delete(): Promise<string>;
                    // GET /dedicated/ceph/{serviceName}/pool/{poolName}
                    $get(): Promise<dedicated.ceph.poolGet.response>;
                };
            }
            serviceInfos: {
                // GET /dedicated/ceph/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dedicated/ceph/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            task: {
                // GET /dedicated/ceph/{serviceName}/task
                $get(): Promise<dedicated.ceph.taskList.response[]>;
                $(taskId: string): {
                    // GET /dedicated/ceph/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.ceph.taskGet.response[]>;
                };
            }
            terminate: {
                // POST /dedicated/ceph/{serviceName}/terminate
                $post(): Promise<string>;
            }
            user: {
                // GET /dedicated/ceph/{serviceName}/user
                $get(): Promise<dedicated.ceph.userList.response[]>;
                // POST /dedicated/ceph/{serviceName}/user
                $post(params: {userName: string}): Promise<string>;
                $(userName: string): {
                    // DELETE /dedicated/ceph/{serviceName}/user/{userName}
                    $delete(): Promise<string>;
                    // GET /dedicated/ceph/{serviceName}/user/{userName}
                    $get(): Promise<dedicated.ceph.userGet.response>;
                    pool: {
                        // GET /dedicated/ceph/{serviceName}/user/{userName}/pool
                        $get(): Promise<dedicated.ceph.userPoolPermList.response[]>;
                        // POST /dedicated/ceph/{serviceName}/user/{userName}/pool
                        $post(params?: {permissions?: dedicated.ceph.userPoolPermSetAll.permissions[]}): Promise<string>;
                        // PUT /dedicated/ceph/{serviceName}/user/{userName}/pool
                        $put(params: {classRead: boolean, classWrite: boolean, execute: boolean, poolName: string, read: boolean, write: boolean}): Promise<string>;
                        $(poolName: string): {
                            // DELETE /dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}
                            $delete(): Promise<string>;
                        };
                    }
                };
            }
        };
    }
// Api
  /**
   * Operations about the CEPH service
   * List available services
   */
  get(path: '/dedicated/ceph'): () => Promise<string[]>;
  /**
   * dedicated.ceph.clusterGet
   * Get cluster details
   */
  get(path: '/dedicated/ceph/{serviceName}'): (params: {serviceName: string}) => Promise<dedicated.ceph.clusterGet.response>;
  /**
   * dedicated.ceph.aclCreate
   * Get list of all IP ACLs in a cluster
   */
  get(path: '/dedicated/ceph/{serviceName}/acl'): (params: {serviceName: string}) => Promise<dedicated.ceph.aclList.response[]>;
  /**
   * dedicated.ceph.aclDeleteSingle
   * Get details about IP ACL
   */
  get(path: '/dedicated/ceph/{serviceName}/acl/{aclId}'): (params: {aclId: string, serviceName: string}) => Promise<dedicated.ceph.aclGet.response>;
  /**
   * dedicated.ceph.clusterHealth
   * Get cluster health
   */
  get(path: '/dedicated/ceph/{serviceName}/health'): (params: {serviceName: string}) => Promise<dedicated.ceph.clusterHealth.response>;
  /**
   * dedicated.ceph.poolCreate
   * Get list of all pools in a cluster
   */
  get(path: '/dedicated/ceph/{serviceName}/pool'): (params: {serviceName: string}) => Promise<dedicated.ceph.poolList.response[]>;
  /**
   * dedicated.ceph.poolDelete
   * Get details about an existing ceph pool
   */
  get(path: '/dedicated/ceph/{serviceName}/pool/{poolName}'): (params: {poolName: string, serviceName: string}) => Promise<dedicated.ceph.poolGet.response>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dedicated/ceph/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * dedicated.ceph.taskList
   * List tasks in progress
   */
  get(path: '/dedicated/ceph/{serviceName}/task'): (params: {serviceName: string}) => Promise<dedicated.ceph.taskList.response[]>;
  /**
   * dedicated.ceph.taskGet
   * Get task details
   */
  get(path: '/dedicated/ceph/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: string}) => Promise<dedicated.ceph.taskGet.response[]>;
  /**
   * dedicated.ceph.userCreate
   * Get list of all users in a cluster
   */
  get(path: '/dedicated/ceph/{serviceName}/user'): (params: {serviceName: string}) => Promise<dedicated.ceph.userList.response[]>;
  /**
   * dedicated.ceph.userDelete
   * Get details about a ceph user
   */
  get(path: '/dedicated/ceph/{serviceName}/user/{userName}'): (params: {serviceName: string, userName: string}) => Promise<dedicated.ceph.userGet.response>;
  /**
   * dedicated.ceph.userPoolPermList
   * List user-pool permissions
   */
  get(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool'): (params: {serviceName: string, userName: string}) => Promise<dedicated.ceph.userPoolPermList.response[]>;
  /**
   * dedicated.ceph.clusterGet
   * Update cluster details
   */
  put(path: '/dedicated/ceph/{serviceName}'): (params: {serviceName: string, crushTunables: dedicated.ceph.clusterUpdate.crushTunablesEnum, label: string}) => Promise<string>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dedicated/ceph/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * dedicated.ceph.userPoolPermList
   * Update user-pool permission for single pool
   */
  put(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool'): (params: {serviceName: string, userName: string, classRead: boolean, classWrite: boolean, execute: boolean, poolName: string, read: boolean, write: boolean}) => Promise<string>;
  /**
   * dedicated.ceph.aclCreate
   * Create one or more new IP ACLs
   */
  post(path: '/dedicated/ceph/{serviceName}/acl'): (params: {serviceName: string, aclList: string[]}) => Promise<string>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/dedicated/ceph/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/dedicated/ceph/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * dedicated.ceph.poolCreate
   * Create a new ceph pool
   */
  post(path: '/dedicated/ceph/{serviceName}/pool'): (params: {serviceName: string, poolName: string}) => Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/dedicated/ceph/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * dedicated.ceph.userCreate
   * Create a new ceph user
   */
  post(path: '/dedicated/ceph/{serviceName}/user'): (params: {serviceName: string, userName: string}) => Promise<string>;
  /**
   * dedicated.ceph.userPoolPermList
   * Create new user-pool permissions. All old permissions will be cleared
   */
  post(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool'): (params: {serviceName: string, userName: string, permissions?: dedicated.ceph.userPoolPermSetAll.permissions[]}) => Promise<string>;
  /**
   * dedicated.ceph.aclDeleteSingle
   * Delete single IP ACL
   */
  delete(path: '/dedicated/ceph/{serviceName}/acl/{aclId}'): (params: {aclId: string, serviceName: string}) => Promise<string>;
  /**
   * dedicated.ceph.poolDelete
   * Delete a single ceph pool
   */
  delete(path: '/dedicated/ceph/{serviceName}/pool/{poolName}'): (params: {poolName: string, serviceName: string}) => Promise<string>;
  /**
   * dedicated.ceph.userDelete
   * Delete an existing single ceph user
   */
  delete(path: '/dedicated/ceph/{serviceName}/user/{userName}'): (params: {serviceName: string, userName: string}) => Promise<string>;
  /**
   * dedicated.ceph.userPoolPermDelete
   * Clear user-pool permission for single pool
   */
  delete(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}'): (params: {poolName: string, serviceName: string, userName: string}) => Promise<string>;
}

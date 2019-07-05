import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace dedicated {
    export namespace ceph {
        export namespace aclGet {
            export namespace response {
                //dedicated.ceph.aclGet.response.familyEnum
                export type familyEnum = "IPV4" | "IPV6"
            }
        }
        export namespace aclList {
            export namespace response {
                //dedicated.ceph.aclList.response.familyEnum
                export type familyEnum = "IPV4" | "IPV6"
            }
        }
        export namespace clusterGet {
            export namespace response {
                //dedicated.ceph.clusterGet.response.crushTunablesEnum
                export type crushTunablesEnum = "OPTIMAL" | "DEFAULT" | "LEGACY" | "BOBTAIL" | "ARGONAUT" | "FIREFLY" | "HAMMER" | "JEWEL"
                //dedicated.ceph.clusterGet.response.stateEnum
                export type stateEnum = "ACTIVE" | "SUSPENDED"
                //dedicated.ceph.clusterGet.response.statusEnum
                export type statusEnum = "CREATING" | "INSTALLED" | "DELETING" | "DELETED" | "TASK_IN_PROGRESS"
            }
        }
        export namespace clusterUpdate {
            //dedicated.ceph.clusterUpdate.crushTunablesEnum
            export type crushTunablesEnum = "OPTIMAL" | "DEFAULT" | "LEGACY" | "BOBTAIL" | "ARGONAUT" | "FIREFLY" | "HAMMER" | "JEWEL"
        }
        //dedicated.ceph.permissions
        // fullName: dedicated.ceph.permissions.permissions
        export interface permissions {
            classRead?: boolean;
            classWrite?: boolean;
            execute?: boolean;
            poolName?: string;
            read?: boolean;
            write?: boolean;
        }
        export namespace poolGet {
            export namespace response {
                //dedicated.ceph.poolGet.response.poolTypeEnum
                export type poolTypeEnum = "REPLICATED" | "ERASURE_CODED"
            }
        }
        export namespace poolList {
            export namespace response {
                //dedicated.ceph.poolList.response.poolTypeEnum
                export type poolTypeEnum = "REPLICATED" | "ERASURE_CODED"
            }
        }
        //dedicated.ceph.response
        // fullName: dedicated.ceph.response.response
        export interface response {
            key?: string;
            mdsCaps?: string;
            monCaps?: string;
            name?: string;
            osdCaps?: string;
            serviceName?: string;
        }
        export namespace taskGet {
            export namespace response {
                //dedicated.ceph.taskGet.response.stateEnum
                export type stateEnum = "IN PROGRESS" | "DONE" | "FAILED"
            }
        }
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /dedicated
export interface Dedicated {
    ceph:  {
        // GET /dedicated/ceph
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /dedicated/ceph/{serviceName}
            $get(): Promise<dedicated.ceph.response>;
            // PUT /dedicated/ceph/{serviceName}
            $put(body?: {crushTunables: dedicated.ceph.clusterUpdate.crushTunablesEnum, label: string}): Promise<string>;
            acl:  {
                // GET /dedicated/ceph/{serviceName}/acl
                $get(): Promise<dedicated.ceph.response[]>;
                // POST /dedicated/ceph/{serviceName}/acl
                $post(body?: {aclList: string[]}): Promise<string>;
                [keys: string]: {
                    // DELETE /dedicated/ceph/{serviceName}/acl/{aclId}
                    $delete(): Promise<string>;
                    // GET /dedicated/ceph/{serviceName}/acl/{aclId}
                    $get(): Promise<dedicated.ceph.response>;
                } | any
            }
            changeContact:  {
                // POST /dedicated/ceph/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination:  {
                // POST /dedicated/ceph/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            health:  {
                // GET /dedicated/ceph/{serviceName}/health
                $get(): Promise<dedicated.ceph.response>;
            }
            pool:  {
                // GET /dedicated/ceph/{serviceName}/pool
                $get(): Promise<dedicated.ceph.response[]>;
                // POST /dedicated/ceph/{serviceName}/pool
                $post(body?: {poolName: string}): Promise<string>;
                [keys: string]: {
                    // DELETE /dedicated/ceph/{serviceName}/pool/{poolName}
                    $delete(): Promise<string>;
                    // GET /dedicated/ceph/{serviceName}/pool/{poolName}
                    $get(): Promise<dedicated.ceph.response>;
                } | any
            }
            serviceInfos:  {
                // GET /dedicated/ceph/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dedicated/ceph/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            task:  {
                // GET /dedicated/ceph/{serviceName}/task
                $get(): Promise<dedicated.ceph.response[]>;
                [keys: string]: {
                    // GET /dedicated/ceph/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.ceph.response[]>;
                } | any
            }
            terminate:  {
                // POST /dedicated/ceph/{serviceName}/terminate
                $post(): Promise<string>;
            }
            user:  {
                // GET /dedicated/ceph/{serviceName}/user
                $get(): Promise<dedicated.ceph.response[]>;
                // POST /dedicated/ceph/{serviceName}/user
                $post(body?: {userName: string}): Promise<string>;
                [keys: string]: {
                    // DELETE /dedicated/ceph/{serviceName}/user/{userName}
                    $delete(): Promise<string>;
                    // GET /dedicated/ceph/{serviceName}/user/{userName}
                    $get(): Promise<dedicated.ceph.response>;
                    pool:  {
                        // GET /dedicated/ceph/{serviceName}/user/{userName}/pool
                        $get(): Promise<dedicated.ceph.response[]>;
                        // POST /dedicated/ceph/{serviceName}/user/{userName}/pool
                        $post(body?: {permissions?: dedicated.ceph.permissions[]}): Promise<string>;
                        // PUT /dedicated/ceph/{serviceName}/user/{userName}/pool
                        $put(body?: {classRead: boolean, classWrite: boolean, execute: boolean, poolName: string, read: boolean, write: boolean}): Promise<string>;
                        [keys: string]: {
                            // DELETE /dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}
                            $delete(): Promise<string>;
                        } | any
                    }
                } | any
            }
        } | any
    }
}
// Api
type PathsDedicatedCephGET = '/dedicated/ceph' |
  '/dedicated/ceph/{serviceName}' |
  '/dedicated/ceph/{serviceName}/acl' |
  '/dedicated/ceph/{serviceName}/acl/{aclId}' |
  '/dedicated/ceph/{serviceName}/health' |
  '/dedicated/ceph/{serviceName}/pool' |
  '/dedicated/ceph/{serviceName}/pool/{poolName}' |
  '/dedicated/ceph/{serviceName}/serviceInfos' |
  '/dedicated/ceph/{serviceName}/task' |
  '/dedicated/ceph/{serviceName}/task/{taskId}' |
  '/dedicated/ceph/{serviceName}/user' |
  '/dedicated/ceph/{serviceName}/user/{userName}' |
  '/dedicated/ceph/{serviceName}/user/{userName}/pool';

type PathsDedicatedCephPUT = '/dedicated/ceph/{serviceName}' |
  '/dedicated/ceph/{serviceName}/serviceInfos' |
  '/dedicated/ceph/{serviceName}/user/{userName}/pool';

type PathsDedicatedCephPOST = '/dedicated/ceph/{serviceName}/acl' |
  '/dedicated/ceph/{serviceName}/changeContact' |
  '/dedicated/ceph/{serviceName}/confirmTermination' |
  '/dedicated/ceph/{serviceName}/pool' |
  '/dedicated/ceph/{serviceName}/terminate' |
  '/dedicated/ceph/{serviceName}/user' |
  '/dedicated/ceph/{serviceName}/user/{userName}/pool';

type PathsDedicatedCephDELETE = '/dedicated/ceph/{serviceName}/acl/{aclId}' |
  '/dedicated/ceph/{serviceName}/pool/{poolName}' |
  '/dedicated/ceph/{serviceName}/user/{userName}' |
  '/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}';

export class ApiDedicatedCeph extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the CEPH service
   * List available services
   */
  public get(path: '/dedicated/ceph'): Promise<string[]>;
  /**
   * dedicated.ceph.clusterGet
   * Get cluster details
   */
  public get(path: '/dedicated/ceph/{serviceName}', params: {serviceName: string}): Promise<dedicated.ceph.response>;
  /**
   * dedicated.ceph.aclCreate
   * Get list of all IP ACLs in a cluster
   */
  public get(path: '/dedicated/ceph/{serviceName}/acl', params: {serviceName: string}): Promise<dedicated.ceph.response[]>;
  /**
   * dedicated.ceph.aclDeleteSingle
   * Get details about IP ACL
   */
  public get(path: '/dedicated/ceph/{serviceName}/acl/{aclId}', params: {aclId: string, serviceName: string}): Promise<dedicated.ceph.response>;
  /**
   * dedicated.ceph.clusterHealth
   * Get cluster health
   */
  public get(path: '/dedicated/ceph/{serviceName}/health', params: {serviceName: string}): Promise<dedicated.ceph.response>;
  /**
   * dedicated.ceph.poolCreate
   * Get list of all pools in a cluster
   */
  public get(path: '/dedicated/ceph/{serviceName}/pool', params: {serviceName: string}): Promise<dedicated.ceph.response[]>;
  /**
   * dedicated.ceph.poolDelete
   * Get details about an existing ceph pool
   */
  public get(path: '/dedicated/ceph/{serviceName}/pool/{poolName}', params: {poolName: string, serviceName: string}): Promise<dedicated.ceph.response>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/dedicated/ceph/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * dedicated.ceph.taskList
   * List tasks in progress
   */
  public get(path: '/dedicated/ceph/{serviceName}/task', params: {serviceName: string}): Promise<dedicated.ceph.response[]>;
  /**
   * dedicated.ceph.taskGet
   * Get task details
   */
  public get(path: '/dedicated/ceph/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<dedicated.ceph.response[]>;
  /**
   * dedicated.ceph.userCreate
   * Get list of all users in a cluster
   */
  public get(path: '/dedicated/ceph/{serviceName}/user', params: {serviceName: string}): Promise<dedicated.ceph.response[]>;
  /**
   * dedicated.ceph.userDelete
   * Get details about a ceph user
   */
  public get(path: '/dedicated/ceph/{serviceName}/user/{userName}', params: {serviceName: string, userName: string}): Promise<dedicated.ceph.response>;
  /**
   * dedicated.ceph.userPoolPermList
   * List user-pool permissions
   */
  public get(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', params: {serviceName: string, userName: string}): Promise<dedicated.ceph.response[]>;
  public get(path: PathsDedicatedCephGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * dedicated.ceph.clusterGet
   * Update cluster details
   */
  public put(path: '/dedicated/ceph/{serviceName}', params: {serviceName: string, crushTunables: OVH.dedicated.ceph.clusterUpdate.crushTunablesEnum, label: string}): Promise<string>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/dedicated/ceph/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * dedicated.ceph.userPoolPermList
   * Update user-pool permission for single pool
   */
  public put(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', params: {serviceName: string, userName: string, classRead: boolean, classWrite: boolean, execute: boolean, poolName: string, read: boolean, write: boolean}): Promise<string>;
  public put(path: PathsDedicatedCephPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * dedicated.ceph.aclCreate
   * Create one or more new IP ACLs
   */
  public post(path: '/dedicated/ceph/{serviceName}/acl', params: {serviceName: string, aclList: string[]}): Promise<string>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/dedicated/ceph/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/dedicated/ceph/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * dedicated.ceph.poolCreate
   * Create a new ceph pool
   */
  public post(path: '/dedicated/ceph/{serviceName}/pool', params: {serviceName: string, poolName: string}): Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/dedicated/ceph/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * dedicated.ceph.userCreate
   * Create a new ceph user
   */
  public post(path: '/dedicated/ceph/{serviceName}/user', params: {serviceName: string, userName: string}): Promise<string>;
  /**
   * dedicated.ceph.userPoolPermList
   * Create new user-pool permissions. All old permissions will be cleared
   */
  public post(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', params: {serviceName: string, userName: string, permissions?: OVH.dedicated.ceph.permissions[]}): Promise<string>;
  public post(path: PathsDedicatedCephPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * dedicated.ceph.aclDeleteSingle
   * Delete single IP ACL
   */
  public delete(path: '/dedicated/ceph/{serviceName}/acl/{aclId}', params: {aclId: string, serviceName: string}): Promise<string>;
  /**
   * dedicated.ceph.poolDelete
   * Delete a single ceph pool
   */
  public delete(path: '/dedicated/ceph/{serviceName}/pool/{poolName}', params: {poolName: string, serviceName: string}): Promise<string>;
  /**
   * dedicated.ceph.userDelete
   * Delete an existing single ceph user
   */
  public delete(path: '/dedicated/ceph/{serviceName}/user/{userName}', params: {serviceName: string, userName: string}): Promise<string>;
  /**
   * dedicated.ceph.userPoolPermDelete
   * Clear user-pool permission for single pool
   */
  public delete(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}', params: {poolName: string, serviceName: string, userName: string}): Promise<string>;
  public delete(path: PathsDedicatedCephDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
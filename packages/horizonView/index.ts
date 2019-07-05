import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace horizonView {
    //horizonView.AccessPointTypeEnum
    export type AccessPointTypeEnum = "privateAccessPoint" | "publicAccessPoint"
    //horizonView.CustomerNetwork
    // fullName: horizonView.CustomerNetwork.CustomerNetwork
    export interface CustomerNetwork {
        customerNetworkId?: number;
        name?: string;
        network?: string;
    }
    //horizonView.CustomerNetworkPool
    // fullName: horizonView.CustomerNetworkPool.CustomerNetworkPool
    export interface CustomerNetworkPool {
        customerNetworkId?: number;
        name?: string;
        network?: string;
    }
    //horizonView.CustomerUser
    // fullName: horizonView.CustomerUser.CustomerUser
    export interface CustomerUser {
        email?: string;
        id?: number;
        username?: string;
    }
    //horizonView.Datacenter
    // fullName: horizonView.Datacenter.Datacenter
    export interface Datacenter {
        activeDirectoryIP?: string;
        adminDomain?: string;
        adminNetworkNextHop?: string;
        adminPrivateNetwork?: string;
        customerIntercoIP?: string;
        customerIntercoMask?: string;
        customerIntercoVlanId?: number;
        datacenterId?: number;
        name?: string;
        serviceName?: string;
    }
    //horizonView.DedicatedHorizon
    // fullName: horizonView.DedicatedHorizon.DedicatedHorizon
    export interface DedicatedHorizon {
        masterZone?: OVH.horizonView.Zone;
        privateCloudName?: string;
        privateCloudZone?: OVH.horizonView.Zone;
        publicUrl?: string;
        state?: OVH.horizonView.StateEnum;
        storageAccelerator?: boolean;
        version?: string;
    }
    //horizonView.DomainTrust
    // fullName: horizonView.DomainTrust.DomainTrust
    export interface DomainTrust {
        activeDirectoryIP?: string;
        dns1?: string;
        dns2?: string;
        domain?: string;
        domainTrustId?: number;
    }
    //horizonView.Pool
    // fullName: horizonView.Pool.Pool
    export interface Pool {
        accessPointId?: number;
        dhcpNetmask?: string;
        dhcpNetwork?: string;
        externalUrl?: string;
        intercoNextHop?: string;
        intercoPrivateNextHop?: string;
        portGroupId?: string;
        state?: OVH.horizonView.StateEnum;
        twoFA?: boolean;
        type?: OVH.horizonView.PoolType;
    }
    //horizonView.PoolType
    export type PoolType = "hybridPool" | "privatePool" | "publicPool"
    //horizonView.StateEnum
    export type StateEnum = "available" | "creating" | "delivered" | "disabled" | "error" | "reserved"
    //horizonView.Task
    // fullName: horizonView.Task.Task
    export interface Task {
        description?: string;
        lastModificationDate?: string;
        name?: string;
        progress?: number;
        state?: OVH.horizonView.TaskStateEnum;
        taskId?: number;
    }
    //horizonView.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    //horizonView.User
    // fullName: horizonView.User.User
    export interface User {
        username?: string;
    }
    //horizonView.Zone
    export type Zone = "Beauharnois" | "Roubaix" | "Strasbourg"
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
// path /horizonView
export interface HorizonView{
    // GET /horizonView
    $get(): Promise<string[]>;
    [keys: string]:{
        // GET /horizonView/{serviceName}
        $get(): Promise<horizonView.Datacenter>;
        accessPoint: {
            // GET /horizonView/{serviceName}/accessPoint
            $get(): Promise<number[]>;
            // POST /horizonView/{serviceName}/accessPoint
            $post(body?: {poolType: horizonView.PoolType, privateBlock?: string, privateVlan?: number, vrouterPoolPublicIp?: string}): Promise<horizonView.Task[]>;
            [keys: string]:{
                // DELETE /horizonView/{serviceName}/accessPoint/{accessPointId}
                $delete(): Promise<horizonView.Task[]>;
                // GET /horizonView/{serviceName}/accessPoint/{accessPointId}
                $get(): Promise<horizonView.Pool>;
                changeSessionTimeout: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout
                    $post(body?: {expiration: number, onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
                customerNetwork: {
                    // GET /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
                    $get(): Promise<number[]>;
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
                    $post(body?: {network: string}): Promise<horizonView.Task[]>;
                    [keys: string]:{
                        // DELETE /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
                        $delete(): Promise<horizonView.Task[]>;
                        // GET /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
                        $get(): Promise<horizonView.CustomerNetworkPool>;
                    } | any
                }
                disableTwoFA: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA
                    $post(): Promise<horizonView.Task>;
                }
                disableWindowsUsernameOption: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption
                    $post(body?: {onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
                enableTwoFA: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA
                    $post(body?: {onSingleAP?: horizonView.AccessPointTypeEnum, radiusIp: string, secret: string}): Promise<horizonView.Task>;
                }
                enableWindowsUsernameOption: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption
                    $post(body?: {onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
            } | any
        }
        confirmTermination: {
            // POST /horizonView/{serviceName}/confirmTermination
            $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        customerNetwork: {
            // GET /horizonView/{serviceName}/customerNetwork
            $get(): Promise<number[]>;
            // POST /horizonView/{serviceName}/customerNetwork
            $post(body?: {name: string, network: string}): Promise<horizonView.Task[]>;
            [keys: string]:{
                // DELETE /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
                $delete(): Promise<horizonView.Task[]>;
                // GET /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
                $get(): Promise<horizonView.CustomerNetwork>;
            } | any
        }
        dedicatedHorizon: {
            // GET /horizonView/{serviceName}/dedicatedHorizon
            $get(): Promise<horizonView.DedicatedHorizon>;
            customerUser: {
                // GET /horizonView/{serviceName}/dedicatedHorizon/customerUser
                $get(): Promise<string[]>;
                // POST /horizonView/{serviceName}/dedicatedHorizon/customerUser
                $post(body?: {email?: string, password?: string, username: string}): Promise<horizonView.Task[]>;
                [keys: string]:{
                    // DELETE /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
                    $delete(): Promise<horizonView.Task[]>;
                    // GET /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
                    $get(): Promise<horizonView.CustomerUser>;
                    changePassword: {
                        // POST /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword
                        $post(body?: {password?: string}): Promise<horizonView.Task>;
                    }
                } | any
            }
            disableStorageAccelerator: {
                // POST /horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator
                $post(): Promise<horizonView.Task>;
            }
            enableStorageAccelerator: {
                // POST /horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator
                $post(): Promise<horizonView.Task>;
            }
            task: {
                // GET /horizonView/{serviceName}/dedicatedHorizon/task
                $get(param?: {state?: horizonView.TaskStateEnum}): Promise<number[]>;
                [keys: string]:{
                    // GET /horizonView/{serviceName}/dedicatedHorizon/task/{taskId}
                    $get(): Promise<horizonView.Task>;
                } | any
            }
            user: {
                // GET /horizonView/{serviceName}/dedicatedHorizon/user
                $get(): Promise<horizonView.User>;
                changePassword: {
                    // POST /horizonView/{serviceName}/dedicatedHorizon/user/changePassword
                    $post(body?: {password?: string}): Promise<horizonView.Task>;
                }
                changeProperties: {
                    // POST /horizonView/{serviceName}/dedicatedHorizon/user/changeProperties
                    $post(body?: {email?: string}): Promise<horizonView.Task>;
                }
            }
        }
        domainTrust: {
            // GET /horizonView/{serviceName}/domainTrust
            $get(): Promise<number[]>;
            // POST /horizonView/{serviceName}/domainTrust
            $post(body?: {activeDirectoryIP: string, dns1?: string, dns2?: string, domain: string}): Promise<horizonView.Task[]>;
            [keys: string]:{
                // GET /horizonView/{serviceName}/domainTrust/{domainTrustId}
                $get(): Promise<horizonView.DomainTrust>;
                addChildDomain: {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain
                    $post(body?: {activeDirectoryIP: string, domain: string, passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
                }
                addDomainController: {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController
                    $post(body?: {domain: string, domainControllerIp: string}): Promise<horizonView.Task>;
                }
                addDomainUserOnComposer: {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer
                    $post(body?: {domain: string, password: string, username: string}): Promise<horizonView.Task>;
                }
                createTrust: {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust
                    $post(body?: {passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
                }
            } | any
        }
        serviceInfos: {
            // GET /horizonView/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /horizonView/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
        terminate: {
            // POST /horizonView/{serviceName}/terminate
            $post(): Promise<string>;
        }
    } | any
}
// Api
type PathsHorizonViewGET = '/horizonView' |
  '/horizonView/{serviceName}' |
  '/horizonView/{serviceName}/accessPoint' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}' |
  '/horizonView/{serviceName}/customerNetwork' |
  '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}' |
  '/horizonView/{serviceName}/dedicatedHorizon' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}' |
  '/horizonView/{serviceName}/dedicatedHorizon/task' |
  '/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}' |
  '/horizonView/{serviceName}/dedicatedHorizon/user' |
  '/horizonView/{serviceName}/domainTrust' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}' |
  '/horizonView/{serviceName}/serviceInfos';

type PathsHorizonViewPUT = '/horizonView/{serviceName}/serviceInfos';

type PathsHorizonViewPOST = '/horizonView/{serviceName}/accessPoint' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption' |
  '/horizonView/{serviceName}/confirmTermination' |
  '/horizonView/{serviceName}/customerNetwork' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword' |
  '/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator' |
  '/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator' |
  '/horizonView/{serviceName}/dedicatedHorizon/user/changePassword' |
  '/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties' |
  '/horizonView/{serviceName}/domainTrust' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust' |
  '/horizonView/{serviceName}/terminate';

type PathsHorizonViewDELETE = '/horizonView/{serviceName}/accessPoint/{accessPointId}' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}' |
  '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}';

export class ApiHorizonView extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the HORIZONVIEW service
   * List available services
   */
  public get(path: '/horizonView'): Promise<string[]>;
  /**
   * Cloud Desktop Infrastructure Datacenter
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}', params: {serviceName: string}): Promise<horizonView.Datacenter>;
  /**
   * List the horizonView.Pool objects
   * Pool associated with this Datacenter
   */
  public get(path: '/horizonView/{serviceName}/accessPoint', params: {serviceName: string}): Promise<number[]>;
  /**
   * All informations about access point
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}', params: {accessPointId: number, serviceName: string}): Promise<horizonView.Pool>;
  /**
   * List the horizonView.CustomerNetworkPool objects
   * You can reach from the Desktops your private network
   */
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork', params: {accessPointId: number, serviceName: string}): Promise<number[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}', params: {accessPointId: number, customerNetworkId: number, serviceName: string}): Promise<horizonView.CustomerNetworkPool>;
  /**
   * List the horizonView.CustomerNetwork objects
   * You can reach from the Desktops your private network
   */
  public get(path: '/horizonView/{serviceName}/customerNetwork', params: {serviceName: string}): Promise<number[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}', params: {customerNetworkId: number, serviceName: string}): Promise<horizonView.CustomerNetwork>;
  /**
   * Horizon View as a Service
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon', params: {serviceName: string}): Promise<horizonView.DedicatedHorizon>;
  /**
   * List the horizonView.CustomerUser objects
   * Account to access to your pool
   */
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser', params: {serviceName: string}): Promise<string[]>;
  /**
   * Horizon As A Service Customer  User
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}', params: {serviceName: string, username: string}): Promise<horizonView.CustomerUser>;
  /**
   * List the horizonView.Task objects
   * Tasks associated with this Dedicated Horizon
   */
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/task', params: {serviceName: string, state?: OVH.horizonView.TaskStateEnum}): Promise<number[]>;
  /**
   * Operation on a Horizon View component
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<horizonView.Task>;
  /**
   * Horizon As A Service User
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/user', params: {serviceName: string}): Promise<horizonView.User>;
  /**
   * List the horizonView.DomainTrust objects
   * List all Active Directories linked to your CDI Active Directory
   */
  public get(path: '/horizonView/{serviceName}/domainTrust', params: {serviceName: string}): Promise<number[]>;
  /**
   * List all Active Directories linked to your CDI Active Directory
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}', params: {domainTrustId: number, serviceName: string}): Promise<horizonView.DomainTrust>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  public get(path: PathsHorizonViewGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/horizonView/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsHorizonViewPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the horizonView.Pool objects
   * Add new access point to create a new network
   */
  public post(path: '/horizonView/{serviceName}/accessPoint', params: {serviceName: string, poolType: OVH.horizonView.PoolType, privateBlock?: string, privateVlan?: number, vrouterPoolPublicIp?: string}): Promise<horizonView.Task[]>;
  /**
   * changeSessionTimeout operations
   * Manage your session Timeout on Unified Access Gateway
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout', params: {accessPointId: number, serviceName: string, expiration: number, onSingleAP?: OVH.horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
  /**
   * List the horizonView.CustomerNetworkPool objects
   * Add a new network 
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork', params: {accessPointId: number, serviceName: string, network: string}): Promise<horizonView.Task[]>;
  /**
   * disableTwoFA operations
   * Disable two factor authentication on your pool
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA', params: {accessPointId: number, serviceName: string}): Promise<horizonView.Task>;
  /**
   * disableWindowsUsernameOption operations
   * Disable windows Username option on Unified Access Gateway
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption', params: {accessPointId: number, serviceName: string, onSingleAP?: OVH.horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
  /**
   * enableTwoFA operations
   * Enable two factor authentication on your pool
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA', params: {accessPointId: number, serviceName: string, onSingleAP?: OVH.horizonView.AccessPointTypeEnum, radiusIp: string, secret: string}): Promise<horizonView.Task>;
  /**
   * enableWindowsUsernameOption operations
   * Enable windows Username option on Unified Access Gateway
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption', params: {accessPointId: number, serviceName: string, onSingleAP?: OVH.horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/horizonView/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * List the horizonView.CustomerNetwork objects
   * Add a new network 
   */
  public post(path: '/horizonView/{serviceName}/customerNetwork', params: {serviceName: string, name: string, network: string}): Promise<horizonView.Task[]>;
  /**
   * List the horizonView.CustomerUser objects
   * Create a new customer user 
   */
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser', params: {serviceName: string, email?: string, password?: string, username: string}): Promise<horizonView.Task[]>;
  /**
   * changePassword operations
   * Change Horizon View Customer  user password
   */
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword', params: {serviceName: string, username: string, password?: string}): Promise<horizonView.Task>;
  /**
   * disableStorageAccelerator operations
   * Disable the View Storage Accelerator option on VCenter
   */
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator', params: {serviceName: string}): Promise<horizonView.Task>;
  /**
   * enableStorageAccelerator operations
   * Enable the View Storage Accelerator option on VCenter
   */
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator', params: {serviceName: string}): Promise<horizonView.Task>;
  /**
   * changePassword operations
   * Change Horizon View user password
   */
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/user/changePassword', params: {serviceName: string, password?: string}): Promise<horizonView.Task>;
  /**
   * changeProperties operations
   * Change horizon view user properties
   */
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties', params: {serviceName: string, email?: string}): Promise<horizonView.Task>;
  /**
   * List the horizonView.DomainTrust objects
   * Link your Active Directory to your CDI Active Directory
   */
  public post(path: '/horizonView/{serviceName}/domainTrust', params: {serviceName: string, activeDirectoryIP: string, dns1?: string, dns2?: string, domain: string}): Promise<horizonView.Task[]>;
  /**
   * addChildDomain operations
   * Add a child domain for this domain.
   */
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain', params: {domainTrustId: number, serviceName: string, activeDirectoryIP: string, domain: string, passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
  /**
   * addDomainController operations
   * Add a Domain Controller for this domain.
   */
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController', params: {domainTrustId: number, serviceName: string, domain: string, domainControllerIp: string}): Promise<horizonView.Task>;
  /**
   * addDomainUserOnComposer operations
   * Add a domain user to add your desktop in your Active Directory
   */
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer', params: {domainTrustId: number, serviceName: string, domain: string, password: string, username: string}): Promise<horizonView.Task>;
  /**
   * createTrust operations
   * Change Horizon View user password
   */
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust', params: {domainTrustId: number, serviceName: string, passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/horizonView/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsHorizonViewPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * All informations about access point
   * Delete this access point 
   */
  public delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}', params: {accessPointId: number, serviceName: string}): Promise<horizonView.Task[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Delete this Customer Network
   */
  public delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}', params: {accessPointId: number, customerNetworkId: number, serviceName: string}): Promise<horizonView.Task[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Delete this Customer Network
   */
  public delete(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}', params: {customerNetworkId: number, serviceName: string}): Promise<horizonView.Task[]>;
  /**
   * Horizon As A Service Customer  User
   * Delete this Customer User
   */
  public delete(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}', params: {serviceName: string, username: string}): Promise<horizonView.Task[]>;
  public delete(path: PathsHorizonViewDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
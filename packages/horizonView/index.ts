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
export interface HorizonView {
    // GET /horizonView
    GET(): Promise<string[]>;
    [keys: string]: {
        // GET /horizonView/{serviceName}
        GET(): Promise<horizonView.Datacenter>;
        accessPoint:  {
            // GET /horizonView/{serviceName}/accessPoint
            GET(): Promise<number[]>;
            // POST /horizonView/{serviceName}/accessPoint
            POST(body?: {poolType: horizonView.PoolType, privateVlan?: number, vrouterPoolPublicIp?: string, privateBlock?: string}): Promise<horizonView.Task[]>;
            [keys: string]: {
                // GET /horizonView/{serviceName}/accessPoint/{accessPointId}
                GET(): Promise<horizonView.Pool>;
                // DELETE /horizonView/{serviceName}/accessPoint/{accessPointId}
                DELETE(): Promise<horizonView.Task[]>;
                enableWindowsUsernameOption:  {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption
                    POST(body?: {onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
                customerNetwork:  {
                    // GET /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
                    GET(): Promise<number[]>;
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
                    POST(body?: {network: string}): Promise<horizonView.Task[]>;
                    [keys: string]: {
                        // GET /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
                        GET(): Promise<horizonView.CustomerNetworkPool>;
                        // DELETE /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
                        DELETE(): Promise<horizonView.Task[]>;
                    } | any
                }
                disableTwoFA:  {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA
                    POST(): Promise<horizonView.Task>;
                }
                enableTwoFA:  {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA
                    POST(body?: {radiusIp: string, secret: string, onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
                changeSessionTimeout:  {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout
                    POST(body?: {onSingleAP?: horizonView.AccessPointTypeEnum, expiration: number}): Promise<horizonView.Task>;
                }
                disableWindowsUsernameOption:  {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption
                    POST(body?: {onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
            } | any
        }
        confirmTermination:  {
            // POST /horizonView/{serviceName}/confirmTermination
            POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
        }
        dedicatedHorizon:  {
            // GET /horizonView/{serviceName}/dedicatedHorizon
            GET(): Promise<horizonView.DedicatedHorizon>;
            user:  {
                // GET /horizonView/{serviceName}/dedicatedHorizon/user
                GET(): Promise<horizonView.User>;
                changeProperties:  {
                    // POST /horizonView/{serviceName}/dedicatedHorizon/user/changeProperties
                    POST(body?: {email?: string}): Promise<horizonView.Task>;
                }
                changePassword:  {
                    // POST /horizonView/{serviceName}/dedicatedHorizon/user/changePassword
                    POST(body?: {password?: string}): Promise<horizonView.Task>;
                }
            }
            disableStorageAccelerator:  {
                // POST /horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator
                POST(): Promise<horizonView.Task>;
            }
            enableStorageAccelerator:  {
                // POST /horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator
                POST(): Promise<horizonView.Task>;
            }
            task:  {
                // GET /horizonView/{serviceName}/dedicatedHorizon/task
                GET(param?: {state?: horizonView.TaskStateEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /horizonView/{serviceName}/dedicatedHorizon/task/{taskId}
                    GET(): Promise<horizonView.Task>;
                } | any
            }
            customerUser:  {
                // GET /horizonView/{serviceName}/dedicatedHorizon/customerUser
                GET(): Promise<string[]>;
                // POST /horizonView/{serviceName}/dedicatedHorizon/customerUser
                POST(body?: {email?: string, username: string, password?: string}): Promise<horizonView.Task[]>;
                [keys: string]: {
                    // GET /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
                    GET(): Promise<horizonView.CustomerUser>;
                    // DELETE /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
                    DELETE(): Promise<horizonView.Task[]>;
                    changePassword:  {
                        // POST /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword
                        POST(body?: {password?: string}): Promise<horizonView.Task>;
                    }
                } | any
            }
        }
        customerNetwork:  {
            // GET /horizonView/{serviceName}/customerNetwork
            GET(): Promise<number[]>;
            // POST /horizonView/{serviceName}/customerNetwork
            POST(body?: {name: string, network: string}): Promise<horizonView.Task[]>;
            [keys: string]: {
                // GET /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
                GET(): Promise<horizonView.CustomerNetwork>;
                // DELETE /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
                DELETE(): Promise<horizonView.Task[]>;
            } | any
        }
        serviceInfos:  {
            // GET /horizonView/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /horizonView/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        terminate:  {
            // POST /horizonView/{serviceName}/terminate
            POST(): Promise<string>;
        }
        domainTrust:  {
            // GET /horizonView/{serviceName}/domainTrust
            GET(): Promise<number[]>;
            // POST /horizonView/{serviceName}/domainTrust
            POST(body?: {dns2?: string, domain: string, activeDirectoryIP: string, dns1?: string}): Promise<horizonView.Task[]>;
            [keys: string]: {
                // GET /horizonView/{serviceName}/domainTrust/{domainTrustId}
                GET(): Promise<horizonView.DomainTrust>;
                addDomainController:  {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController
                    POST(body?: {domainControllerIp: string, domain: string}): Promise<horizonView.Task>;
                }
                createTrust:  {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust
                    POST(body?: {passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
                }
                addChildDomain:  {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain
                    POST(body?: {passphrase: string, activeDirectoryIP: string, domain: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
                }
                addDomainUserOnComposer:  {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer
                    POST(body?: {domain: string, password: string, username: string}): Promise<horizonView.Task>;
                }
            } | any
        }
    } | any
}
// Api
type PathsHorizonViewGET = '/horizonView' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork' |
  '/horizonView/{serviceName}/accessPoint' |
  '/horizonView/{serviceName}' |
  '/horizonView/{serviceName}/dedicatedHorizon/user' |
  '/horizonView/{serviceName}/dedicatedHorizon/task' |
  '/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}' |
  '/horizonView/{serviceName}/dedicatedHorizon' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}' |
  '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}' |
  '/horizonView/{serviceName}/customerNetwork' |
  '/horizonView/{serviceName}/serviceInfos' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}' |
  '/horizonView/{serviceName}/domainTrust';

type PathsHorizonViewPUT = '/horizonView/{serviceName}/serviceInfos';

type PathsHorizonViewPOST = '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption' |
  '/horizonView/{serviceName}/accessPoint' |
  '/horizonView/{serviceName}/confirmTermination' |
  '/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties' |
  '/horizonView/{serviceName}/dedicatedHorizon/user/changePassword' |
  '/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator' |
  '/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword' |
  '/horizonView/{serviceName}/customerNetwork' |
  '/horizonView/{serviceName}/terminate' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain' |
  '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer' |
  '/horizonView/{serviceName}/domainTrust';

type PathsHorizonViewDELETE = '/horizonView/{serviceName}/accessPoint/{accessPointId}' |
  '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}' |
  '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}' |
  '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}';

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
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}', params: {serviceName: string, accessPointId: string}): Promise<horizonView.Pool>;
  /**
   * List the horizonView.CustomerNetworkPool objects
   * You can reach from the Desktops your private network
   */
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork', params: {serviceName: string, accessPointId: string}): Promise<number[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}', params: {serviceName: string, accessPointId: string, customerNetworkId: string}): Promise<horizonView.CustomerNetworkPool>;
  /**
   * List the horizonView.CustomerNetwork objects
   * You can reach from the Desktops your private network
   */
  public get(path: '/horizonView/{serviceName}/customerNetwork', params: {serviceName: string}): Promise<number[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Get this object properties
   */
  public get(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}', params: {serviceName: string, customerNetworkId: string}): Promise<horizonView.CustomerNetwork>;
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
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<horizonView.Task>;
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
  public get(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}', params: {serviceName: string, domainTrustId: string}): Promise<horizonView.DomainTrust>;
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
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout', params: {serviceName: string, accessPointId: string, expiration: number, onSingleAP?: OVH.horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
  /**
   * List the horizonView.CustomerNetworkPool objects
   * Add a new network 
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork', params: {serviceName: string, accessPointId: string, network: string}): Promise<horizonView.Task[]>;
  /**
   * disableTwoFA operations
   * Disable two factor authentication on your pool
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA', params: {serviceName: string, accessPointId: string}): Promise<horizonView.Task>;
  /**
   * disableWindowsUsernameOption operations
   * Disable windows Username option on Unified Access Gateway
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption', params: {serviceName: string, accessPointId: string, onSingleAP?: OVH.horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
  /**
   * enableTwoFA operations
   * Enable two factor authentication on your pool
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA', params: {serviceName: string, accessPointId: string, onSingleAP?: OVH.horizonView.AccessPointTypeEnum, radiusIp: string, secret: string}): Promise<horizonView.Task>;
  /**
   * enableWindowsUsernameOption operations
   * Enable windows Username option on Unified Access Gateway
   */
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption', params: {serviceName: string, accessPointId: string, onSingleAP?: OVH.horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
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
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain', params: {serviceName: string, domainTrustId: string, activeDirectoryIP: string, domain: string, passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
  /**
   * addDomainController operations
   * Add a Domain Controller for this domain.
   */
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController', params: {serviceName: string, domainTrustId: string, domain: string, domainControllerIp: string}): Promise<horizonView.Task>;
  /**
   * addDomainUserOnComposer operations
   * Add a domain user to add your desktop in your Active Directory
   */
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer', params: {serviceName: string, domainTrustId: string, domain: string, password: string, username: string}): Promise<horizonView.Task>;
  /**
   * createTrust operations
   * Change Horizon View user password
   */
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust', params: {serviceName: string, domainTrustId: string, passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
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
  public delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}', params: {serviceName: string, accessPointId: string}): Promise<horizonView.Task[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Delete this Customer Network
   */
  public delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}', params: {serviceName: string, accessPointId: string, customerNetworkId: string}): Promise<horizonView.Task[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Delete this Customer Network
   */
  public delete(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}', params: {serviceName: string, customerNetworkId: string}): Promise<horizonView.Task[]>;
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
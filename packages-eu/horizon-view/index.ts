import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /horizonView Models
 */
export namespace horizonView {
    // type fullname: horizonView.AccessPointTypeEnum
    export type AccessPointTypeEnum = "privateAccessPoint" | "publicAccessPoint"
    // interface fullName: horizonView.CustomerNetwork.CustomerNetwork
    export interface CustomerNetwork {
        customerNetworkId: number;
        name: string;
        network: string;
    }
    // interface fullName: horizonView.CustomerNetworkPool.CustomerNetworkPool
    export interface CustomerNetworkPool {
        customerNetworkId: number;
        name: string;
        network: string;
    }
    // interface fullName: horizonView.CustomerUser.CustomerUser
    export interface CustomerUser {
        email?: string;
        id: number;
        username: string;
    }
    // interface fullName: horizonView.Datacenter.Datacenter
    export interface Datacenter {
        activeDirectoryIP: string;
        adminDomain: string;
        adminNetworkNextHop: string;
        adminPrivateNetwork: string;
        customerIntercoIP: string;
        customerIntercoMask: string;
        customerIntercoVlanId: number;
        datacenterId: number;
        name: string;
        serviceName: string;
    }
    // interface fullName: horizonView.DedicatedHorizon.DedicatedHorizon
    export interface DedicatedHorizon {
        masterZone: horizonView.Zone;
        privateCloudName: string;
        privateCloudZone: horizonView.Zone;
        publicUrl: string;
        state: horizonView.StateEnum;
        storageAccelerator: boolean;
        version: string;
    }
    // interface fullName: horizonView.DomainTrust.DomainTrust
    export interface DomainTrust {
        activeDirectoryIP: string;
        dns1?: string;
        dns2?: string;
        domain: string;
        domainTrustId: number;
    }
    // interface fullName: horizonView.Pool.Pool
    export interface Pool {
        accessPointId: number;
        dhcpNetmask: string;
        dhcpNetwork: string;
        externalUrl: string;
        intercoNextHop?: string;
        intercoPrivateNextHop?: string;
        portGroupId: string;
        state: horizonView.StateEnum;
        twoFA: boolean;
        type: horizonView.PoolType;
    }
    // type fullname: horizonView.PoolType
    export type PoolType = "hybridPool" | "privatePool" | "publicPool"
    // type fullname: horizonView.StateEnum
    export type StateEnum = "available" | "creating" | "delivered" | "disabled" | "error" | "reserved"
    // interface fullName: horizonView.Task.Task
    export interface Task {
        description?: string;
        lastModificationDate?: string;
        name: string;
        progress: number;
        state: horizonView.TaskStateEnum;
        taskId: number;
    }
    // type fullname: horizonView.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    // interface fullName: horizonView.User.User
    export interface User {
        username: string;
    }
    // type fullname: horizonView.Zone
    export type Zone = "Beauharnois" | "Roubaix" | "Strasbourg"
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
 * END API /horizonView Models
 */
export function proxyHorizonView(ovhEngine: OvhRequestable): HorizonView {
    return buildOvhProxy(ovhEngine, '/horizonView');
}
export default proxyHorizonView;
/**
 * Api Proxy model
 */// Apis harmony
// path /horizonView
export interface HorizonView{
    // GET /horizonView
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /horizonView/{serviceName}
        $get(): Promise<horizonView.Datacenter>;
        accessPoint: {
            // GET /horizonView/{serviceName}/accessPoint
            $get(): Promise<number[]>;
            // POST /horizonView/{serviceName}/accessPoint
            $post(params: {poolType: horizonView.PoolType, privateBlock?: string, privateVlan?: number, vrouterPoolPublicIp?: string}): Promise<horizonView.Task[]>;
            $(accessPointId: number): {
                // DELETE /horizonView/{serviceName}/accessPoint/{accessPointId}
                $delete(): Promise<horizonView.Task[]>;
                // GET /horizonView/{serviceName}/accessPoint/{accessPointId}
                $get(): Promise<horizonView.Pool>;
                changeSessionTimeout: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout
                    $post(params: {expiration: number, onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
                customerNetwork: {
                    // GET /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
                    $get(): Promise<number[]>;
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
                    $post(params: {network: string}): Promise<horizonView.Task[]>;
                    $(customerNetworkId: number): {
                        // DELETE /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
                        $delete(): Promise<horizonView.Task[]>;
                        // GET /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
                        $get(): Promise<horizonView.CustomerNetworkPool>;
                    };
                }
                disableTwoFA: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA
                    $post(): Promise<horizonView.Task>;
                }
                disableWindowsUsernameOption: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption
                    $post(params?: {onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
                enableTwoFA: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA
                    $post(params: {onSingleAP?: horizonView.AccessPointTypeEnum, radiusIp: string, secret: string}): Promise<horizonView.Task>;
                }
                enableWindowsUsernameOption: {
                    // POST /horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption
                    $post(params?: {onSingleAP?: horizonView.AccessPointTypeEnum}): Promise<horizonView.Task>;
                }
            };
        }
        confirmTermination: {
            // POST /horizonView/{serviceName}/confirmTermination
            $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        customerNetwork: {
            // GET /horizonView/{serviceName}/customerNetwork
            $get(): Promise<number[]>;
            // POST /horizonView/{serviceName}/customerNetwork
            $post(params: {name: string, network: string}): Promise<horizonView.Task[]>;
            $(customerNetworkId: number): {
                // DELETE /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
                $delete(): Promise<horizonView.Task[]>;
                // GET /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
                $get(): Promise<horizonView.CustomerNetwork>;
            };
        }
        dedicatedHorizon: {
            // GET /horizonView/{serviceName}/dedicatedHorizon
            $get(): Promise<horizonView.DedicatedHorizon>;
            customerUser: {
                // GET /horizonView/{serviceName}/dedicatedHorizon/customerUser
                $get(): Promise<string[]>;
                // POST /horizonView/{serviceName}/dedicatedHorizon/customerUser
                $post(params: {email?: string, password?: string, username: string}): Promise<horizonView.Task[]>;
                $(username: string): {
                    // DELETE /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
                    $delete(): Promise<horizonView.Task[]>;
                    // GET /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
                    $get(): Promise<horizonView.CustomerUser>;
                    changePassword: {
                        // POST /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword
                        $post(params?: {password?: string}): Promise<horizonView.Task>;
                    }
                };
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
                $get(params?: {state?: horizonView.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /horizonView/{serviceName}/dedicatedHorizon/task/{taskId}
                    $get(): Promise<horizonView.Task>;
                };
            }
            user: {
                // GET /horizonView/{serviceName}/dedicatedHorizon/user
                $get(): Promise<horizonView.User>;
                changePassword: {
                    // POST /horizonView/{serviceName}/dedicatedHorizon/user/changePassword
                    $post(params?: {password?: string}): Promise<horizonView.Task>;
                }
                changeProperties: {
                    // POST /horizonView/{serviceName}/dedicatedHorizon/user/changeProperties
                    $post(params?: {email?: string}): Promise<horizonView.Task>;
                }
            }
        }
        domainTrust: {
            // GET /horizonView/{serviceName}/domainTrust
            $get(): Promise<number[]>;
            // POST /horizonView/{serviceName}/domainTrust
            $post(params: {activeDirectoryIP: string, dns1?: string, dns2?: string, domain: string}): Promise<horizonView.Task[]>;
            $(domainTrustId: number): {
                // GET /horizonView/{serviceName}/domainTrust/{domainTrustId}
                $get(): Promise<horizonView.DomainTrust>;
                addChildDomain: {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain
                    $post(params: {activeDirectoryIP: string, domain: string, passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
                }
                addDomainController: {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController
                    $post(params: {domain: string, domainControllerIp: string}): Promise<horizonView.Task>;
                }
                addDomainUserOnComposer: {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer
                    $post(params: {domain: string, password: string, username: string}): Promise<horizonView.Task>;
                }
                createTrust: {
                    // POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust
                    $post(params: {passphrase: string, serviceAccountPassword: string}): Promise<horizonView.Task>;
                }
            };
        }
        serviceInfos: {
            // GET /horizonView/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /horizonView/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        terminate: {
            // POST /horizonView/{serviceName}/terminate
            $post(): Promise<string>;
        }
    };
// Api
  /**
   * Operations about the HORIZONVIEW service
   * List available services
   */
  get(path: '/horizonView'): () => Promise<string[]>;
  /**
   * Cloud Desktop Infrastructure Datacenter
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}'): (params: {serviceName: string}) => Promise<horizonView.Datacenter>;
  /**
   * List the horizonView.Pool objects
   * Pool associated with this Datacenter
   */
  get(path: '/horizonView/{serviceName}/accessPoint'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * All informations about access point
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}'): (params: {accessPointId: number, serviceName: string}) => Promise<horizonView.Pool>;
  /**
   * List the horizonView.CustomerNetworkPool objects
   * You can reach from the Desktops your private network
   */
  get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork'): (params: {accessPointId: number, serviceName: string}) => Promise<number[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}'): (params: {accessPointId: number, customerNetworkId: number, serviceName: string}) => Promise<horizonView.CustomerNetworkPool>;
  /**
   * List the horizonView.CustomerNetwork objects
   * You can reach from the Desktops your private network
   */
  get(path: '/horizonView/{serviceName}/customerNetwork'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}'): (params: {customerNetworkId: number, serviceName: string}) => Promise<horizonView.CustomerNetwork>;
  /**
   * Horizon View as a Service
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/dedicatedHorizon'): (params: {serviceName: string}) => Promise<horizonView.DedicatedHorizon>;
  /**
   * List the horizonView.CustomerUser objects
   * Account to access to your pool
   */
  get(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Horizon As A Service Customer  User
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}'): (params: {serviceName: string, username: string}) => Promise<horizonView.CustomerUser>;
  /**
   * List the horizonView.Task objects
   * Tasks associated with this Dedicated Horizon
   */
  get(path: '/horizonView/{serviceName}/dedicatedHorizon/task'): (params: {serviceName: string, state?: horizonView.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Horizon View component
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<horizonView.Task>;
  /**
   * Horizon As A Service User
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/dedicatedHorizon/user'): (params: {serviceName: string}) => Promise<horizonView.User>;
  /**
   * List the horizonView.DomainTrust objects
   * List all Active Directories linked to your CDI Active Directory
   */
  get(path: '/horizonView/{serviceName}/domainTrust'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * List all Active Directories linked to your CDI Active Directory
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}'): (params: {domainTrustId: number, serviceName: string}) => Promise<horizonView.DomainTrust>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/horizonView/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/horizonView/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * List the horizonView.Pool objects
   * Add new access point to create a new network
   */
  post(path: '/horizonView/{serviceName}/accessPoint'): (params: {serviceName: string, poolType: horizonView.PoolType, privateBlock?: string, privateVlan?: number, vrouterPoolPublicIp?: string}) => Promise<horizonView.Task[]>;
  /**
   * changeSessionTimeout operations
   * Manage your session Timeout on Unified Access Gateway
   */
  post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout'): (params: {accessPointId: number, serviceName: string, expiration: number, onSingleAP?: horizonView.AccessPointTypeEnum}) => Promise<horizonView.Task>;
  /**
   * List the horizonView.CustomerNetworkPool objects
   * Add a new network 
   */
  post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork'): (params: {accessPointId: number, serviceName: string, network: string}) => Promise<horizonView.Task[]>;
  /**
   * disableTwoFA operations
   * Disable two factor authentication on your pool
   */
  post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA'): (params: {accessPointId: number, serviceName: string}) => Promise<horizonView.Task>;
  /**
   * disableWindowsUsernameOption operations
   * Disable windows Username option on Unified Access Gateway
   */
  post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption'): (params: {accessPointId: number, serviceName: string, onSingleAP?: horizonView.AccessPointTypeEnum}) => Promise<horizonView.Task>;
  /**
   * enableTwoFA operations
   * Enable two factor authentication on your pool
   */
  post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA'): (params: {accessPointId: number, serviceName: string, onSingleAP?: horizonView.AccessPointTypeEnum, radiusIp: string, secret: string}) => Promise<horizonView.Task>;
  /**
   * enableWindowsUsernameOption operations
   * Enable windows Username option on Unified Access Gateway
   */
  post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption'): (params: {accessPointId: number, serviceName: string, onSingleAP?: horizonView.AccessPointTypeEnum}) => Promise<horizonView.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/horizonView/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * List the horizonView.CustomerNetwork objects
   * Add a new network 
   */
  post(path: '/horizonView/{serviceName}/customerNetwork'): (params: {serviceName: string, name: string, network: string}) => Promise<horizonView.Task[]>;
  /**
   * List the horizonView.CustomerUser objects
   * Create a new customer user 
   */
  post(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser'): (params: {serviceName: string, email?: string, password?: string, username: string}) => Promise<horizonView.Task[]>;
  /**
   * changePassword operations
   * Change Horizon View Customer  user password
   */
  post(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword'): (params: {serviceName: string, username: string, password?: string}) => Promise<horizonView.Task>;
  /**
   * disableStorageAccelerator operations
   * Disable the View Storage Accelerator option on VCenter
   */
  post(path: '/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator'): (params: {serviceName: string}) => Promise<horizonView.Task>;
  /**
   * enableStorageAccelerator operations
   * Enable the View Storage Accelerator option on VCenter
   */
  post(path: '/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator'): (params: {serviceName: string}) => Promise<horizonView.Task>;
  /**
   * changePassword operations
   * Change Horizon View user password
   */
  post(path: '/horizonView/{serviceName}/dedicatedHorizon/user/changePassword'): (params: {serviceName: string, password?: string}) => Promise<horizonView.Task>;
  /**
   * changeProperties operations
   * Change horizon view user properties
   */
  post(path: '/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties'): (params: {serviceName: string, email?: string}) => Promise<horizonView.Task>;
  /**
   * List the horizonView.DomainTrust objects
   * Link your Active Directory to your CDI Active Directory
   */
  post(path: '/horizonView/{serviceName}/domainTrust'): (params: {serviceName: string, activeDirectoryIP: string, dns1?: string, dns2?: string, domain: string}) => Promise<horizonView.Task[]>;
  /**
   * addChildDomain operations
   * Add a child domain for this domain.
   */
  post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain'): (params: {domainTrustId: number, serviceName: string, activeDirectoryIP: string, domain: string, passphrase: string, serviceAccountPassword: string}) => Promise<horizonView.Task>;
  /**
   * addDomainController operations
   * Add a Domain Controller for this domain.
   */
  post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController'): (params: {domainTrustId: number, serviceName: string, domain: string, domainControllerIp: string}) => Promise<horizonView.Task>;
  /**
   * addDomainUserOnComposer operations
   * Add a domain user to add your desktop in your Active Directory
   */
  post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer'): (params: {domainTrustId: number, serviceName: string, domain: string, password: string, username: string}) => Promise<horizonView.Task>;
  /**
   * createTrust operations
   * Change Horizon View user password
   */
  post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust'): (params: {domainTrustId: number, serviceName: string, passphrase: string, serviceAccountPassword: string}) => Promise<horizonView.Task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/horizonView/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * All informations about access point
   * Delete this access point 
   */
  delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}'): (params: {accessPointId: number, serviceName: string}) => Promise<horizonView.Task[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Delete this Customer Network
   */
  delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}'): (params: {accessPointId: number, customerNetworkId: number, serviceName: string}) => Promise<horizonView.Task[]>;
  /**
   * You can reach from your virtual desktops, your customer network 
   * Delete this Customer Network
   */
  delete(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}'): (params: {customerNetworkId: number, serviceName: string}) => Promise<horizonView.Task[]>;
  /**
   * Horizon As A Service Customer  User
   * Delete this Customer User
   */
  delete(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}'): (params: {serviceName: string, username: string}) => Promise<horizonView.Task[]>;
}

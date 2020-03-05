import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /horizonView Models
 * Source: https://eu.api.kimsufi.com/1.0/horizonView.json
 */
export namespace horizonView {
    /**
     * Access Point type the customer can deploy
     * type fullname: horizonView.AccessPointTypeEnum
     */
    export type AccessPointTypeEnum = "privateAccessPoint" | "publicAccessPoint"
    /**
     * You can reach from your virtual desktops, your customer network 
     * interface fullName: horizonView.CustomerNetwork.CustomerNetwork
     */
    export interface CustomerNetwork {
        customerNetworkId: number;
        name: string;
        network: string;
    }
    /**
     * You can reach from your virtual desktops, your customer network 
     * interface fullName: horizonView.CustomerNetworkPool.CustomerNetworkPool
     */
    export interface CustomerNetworkPool {
        customerNetworkId: number;
        name: string;
        network: string;
    }
    /**
     * Horizon As A Service Customer  User
     * interface fullName: horizonView.CustomerUser.CustomerUser
     */
    export interface CustomerUser {
        email?: string;
        id: number;
        username: string;
    }
    /**
     * Cloud Desktop Infrastructure Datacenter
     * interface fullName: horizonView.Datacenter.Datacenter
     */
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
    /**
     * Horizon View as a Service
     * interface fullName: horizonView.DedicatedHorizon.DedicatedHorizon
     */
    export interface DedicatedHorizon {
        masterZone: horizonView.Zone;
        privateCloudName: string;
        privateCloudZone: horizonView.Zone;
        publicUrl: string;
        state: horizonView.StateEnum;
        storageAccelerator: boolean;
        version: string;
    }
    /**
     * List all Active Directories linked to your CDI Active Directory
     * interface fullName: horizonView.DomainTrust.DomainTrust
     */
    export interface DomainTrust {
        activeDirectoryIP: string;
        dns1?: string;
        dns2?: string;
        domain: string;
        domainTrustId: number;
    }
    /**
     * All informations about access point
     * interface fullName: horizonView.Pool.Pool
     */
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
    /**
     * Pool type the customer can deploy
     * type fullname: horizonView.PoolType
     */
    export type PoolType = "hybridPool" | "privatePool" | "publicPool"
    /**
     * All states a dedicated horizon  can be in
     * type fullname: horizonView.StateEnum
     */
    export type StateEnum = "available" | "creating" | "delivered" | "disabled" | "error" | "reserved"
    /**
     * Operation on a Horizon View component
     * interface fullName: horizonView.Task.Task
     */
    export interface Task {
        description?: string;
        lastModificationDate?: string;
        name: string;
        progress: number;
        state: horizonView.TaskStateEnum;
        taskId: number;
    }
    /**
     * All states a Horizon View  Task can be in
     * type fullname: horizonView.TaskStateEnum
     */
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    /**
     * Horizon As A Service User
     * interface fullName: horizonView.User.User
     */
    export interface User {
        username: string;
    }
    /**
     * All zones a Cloud Desktop Infrastructure can be in
     * type fullname: horizonView.Zone
     */
    export type Zone = "Beauharnois" | "Roubaix" | "Strasbourg"
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
 * END API /horizonView Models
 */
export function proxyHorizonView(ovhEngine: OvhRequestable): HorizonView {
    return buildOvhProxy(ovhEngine, '/horizonView');
}
export default proxyHorizonView;
/**
 * Api model for /horizonView
 */
export interface HorizonView {
    /**
     * List available services
     * GET /horizonView
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /horizonView/{serviceName}
         */
        $get(): Promise<horizonView.Datacenter>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        accessPoint: {
            /**
             * Pool associated with this Datacenter
             * GET /horizonView/{serviceName}/accessPoint
             */
            $get(): Promise<number[]>;
            /**
             * Add new access point to create a new network
             * POST /horizonView/{serviceName}/accessPoint
             */
            $post(params: { poolType: horizonView.PoolType, privateBlock?: string, privateVlan?: number, vrouterPoolPublicIp?: string }): Promise<horizonView.Task[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(accessPointId: number): {
                /**
                 * Delete this access point 
                 * DELETE /horizonView/{serviceName}/accessPoint/{accessPointId}
                 */
                $delete(): Promise<horizonView.Task[]>;
                /**
                 * Get this object properties
                 * GET /horizonView/{serviceName}/accessPoint/{accessPointId}
                 */
                $get(): Promise<horizonView.Pool>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changeSessionTimeout: {
                    /**
                     * Manage your session Timeout on Unified Access Gateway
                     * POST /horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout
                     */
                    $post(params: { expiration: number, onSingleAP?: horizonView.AccessPointTypeEnum }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                customerNetwork: {
                    /**
                     * You can reach from the Desktops your private network
                     * GET /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Add a new network 
                     * POST /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
                     */
                    $post(params: { network: string }): Promise<horizonView.Task[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(customerNetworkId: number): {
                        /**
                         * Delete this Customer Network
                         * DELETE /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
                         */
                        $delete(): Promise<horizonView.Task[]>;
                        /**
                         * Get this object properties
                         * GET /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
                         */
                        $get(): Promise<horizonView.CustomerNetworkPool>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                disableTwoFA: {
                    /**
                     * Disable two factor authentication on your pool
                     * POST /horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA
                     */
                    $post(): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                disableWindowsUsernameOption: {
                    /**
                     * Disable windows Username option on Unified Access Gateway
                     * POST /horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption
                     */
                    $post(params?: { onSingleAP?: horizonView.AccessPointTypeEnum }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                enableTwoFA: {
                    /**
                     * Enable two factor authentication on your pool
                     * POST /horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA
                     */
                    $post(params: { onSingleAP?: horizonView.AccessPointTypeEnum, radiusIp: string, secret: string }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                enableWindowsUsernameOption: {
                    /**
                     * Enable windows Username option on Unified Access Gateway
                     * POST /horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption
                     */
                    $post(params?: { onSingleAP?: horizonView.AccessPointTypeEnum }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /horizonView/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        customerNetwork: {
            /**
             * You can reach from the Desktops your private network
             * GET /horizonView/{serviceName}/customerNetwork
             */
            $get(): Promise<number[]>;
            /**
             * Add a new network 
             * POST /horizonView/{serviceName}/customerNetwork
             */
            $post(params: { name: string, network: string }): Promise<horizonView.Task[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(customerNetworkId: number): {
                /**
                 * Delete this Customer Network
                 * DELETE /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
                 */
                $delete(): Promise<horizonView.Task[]>;
                /**
                 * Get this object properties
                 * GET /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
                 */
                $get(): Promise<horizonView.CustomerNetwork>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        dedicatedHorizon: {
            /**
             * Get this object properties
             * GET /horizonView/{serviceName}/dedicatedHorizon
             */
            $get(): Promise<horizonView.DedicatedHorizon>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            customerUser: {
                /**
                 * Account to access to your pool
                 * GET /horizonView/{serviceName}/dedicatedHorizon/customerUser
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a new customer user 
                 * POST /horizonView/{serviceName}/dedicatedHorizon/customerUser
                 */
                $post(params: { email?: string, password?: string, username: string }): Promise<horizonView.Task[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(username: string): {
                    /**
                     * Delete this Customer User
                     * DELETE /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
                     */
                    $delete(): Promise<horizonView.Task[]>;
                    /**
                     * Get this object properties
                     * GET /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
                     */
                    $get(): Promise<horizonView.CustomerUser>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Change Horizon View Customer  user password
                         * POST /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword
                         */
                        $post(params?: { password?: string }): Promise<horizonView.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            disableStorageAccelerator: {
                /**
                 * Disable the View Storage Accelerator option on VCenter
                 * POST /horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator
                 */
                $post(): Promise<horizonView.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            enableStorageAccelerator: {
                /**
                 * Enable the View Storage Accelerator option on VCenter
                 * POST /horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator
                 */
                $post(): Promise<horizonView.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * Tasks associated with this Dedicated Horizon
                 * GET /horizonView/{serviceName}/dedicatedHorizon/task
                 */
                $get(params?: { state?: horizonView.TaskStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /horizonView/{serviceName}/dedicatedHorizon/task/{taskId}
                     */
                    $get(): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            user: {
                /**
                 * Get this object properties
                 * GET /horizonView/{serviceName}/dedicatedHorizon/user
                 */
                $get(): Promise<horizonView.User>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changePassword: {
                    /**
                     * Change Horizon View user password
                     * POST /horizonView/{serviceName}/dedicatedHorizon/user/changePassword
                     */
                    $post(params?: { password?: string }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                changeProperties: {
                    /**
                     * Change horizon view user properties
                     * POST /horizonView/{serviceName}/dedicatedHorizon/user/changeProperties
                     */
                    $post(params?: { email?: string }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
        }
        domainTrust: {
            /**
             * List all Active Directories linked to your CDI Active Directory
             * GET /horizonView/{serviceName}/domainTrust
             */
            $get(): Promise<number[]>;
            /**
             * Link your Active Directory to your CDI Active Directory
             * POST /horizonView/{serviceName}/domainTrust
             */
            $post(params: { activeDirectoryIP: string, dns1?: string, dns2?: string, domain: string }): Promise<horizonView.Task[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(domainTrustId: number): {
                /**
                 * Get this object properties
                 * GET /horizonView/{serviceName}/domainTrust/{domainTrustId}
                 */
                $get(): Promise<horizonView.DomainTrust>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                addChildDomain: {
                    /**
                     * Add a child domain for this domain.
                     * POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain
                     */
                    $post(params: { activeDirectoryIP: string, domain: string, passphrase: string, serviceAccountPassword: string }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                addDomainController: {
                    /**
                     * Add a Domain Controller for this domain.
                     * POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController
                     */
                    $post(params: { domain: string, domainControllerIp: string }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                addDomainUserOnComposer: {
                    /**
                     * Add a domain user to add your desktop in your Active Directory
                     * POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer
                     */
                    $post(params: { domain: string, password: string, username: string }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                createTrust: {
                    /**
                     * Change Horizon View user password
                     * POST /horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust
                     */
                    $post(params: { passphrase: string, serviceAccountPassword: string }): Promise<horizonView.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /horizonView/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /horizonView/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        terminate: {
            /**
             * Terminate your service
             * POST /horizonView/{serviceName}/terminate
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}

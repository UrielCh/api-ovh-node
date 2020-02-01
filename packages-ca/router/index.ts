import { buildOvhProxy, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /router Models
 * Source: https://ca.api.ovh.com/1.0/router.json
 */
export namespace router {
    /**
     * Network Dnat
     * interface fullName: router.Dnat.Dnat
     */
    export interface Dnat {
        destinationPort?: number;
        id: number;
        newDestinationNet: string;
        newDestinationPort?: number;
        protocol: router.ProtocolEnum;
        sourceNet?: string;
        status: router.StatusEnum;
    }
    /**
     * All states this object can be in
     * type fullname: router.IpStatusEnum
     */
    export type IpStatusEnum = "blacklisted" | "deleted" | "free" | "installing" | "ok" | "quarantined" | "removing" | "suspended"
    /**
     * Network
     * interface fullName: router.Network.Network
     */
    export interface Network {
        creationDate: string;
        description?: string;
        id: number;
        ipNet: string;
        status: router.IpStatusEnum;
        vlanTag?: number;
    }
    /**
     * Action to be taken against the Private Link request
     * type fullname: router.PrivLinkReqActionEnum
     */
    export type PrivLinkReqActionEnum = "accept" | "cancel" | "reject"
    /**
     * Request status of this private link (all links have to be accepted before being created)
     * type fullname: router.PrivLinkReqStatusEnum
     */
    export type PrivLinkReqStatusEnum = "accepted" | "cancelled" | "error" | "pending" | "rejected"
    /**
     * Private Link to another service
     * interface fullName: router.PrivateLink.PrivateLink
     */
    export interface PrivateLink {
        creationDate: string;
        id: number;
        name: string;
        peerServiceName: string;
        status: router.StatusEnum;
    }
    /**
     * Received Private Link requests
     * interface fullName: router.PrivateLinkRequest.PrivateLinkRequest
     */
    export interface PrivateLinkRequest {
        creationDate: string;
        status: router.PrivLinkReqStatusEnum;
    }
    /**
     * Outgoing routes configured inside a Private Link
     * interface fullName: router.PrivateLinkRoute.PrivateLinkRoute
     */
    export interface PrivateLinkRoute {
        creationDate: string;
        id: number;
        network: string;
        status: router.StatusEnum;
    }
    /**
     * Allowed protocols
     * type fullname: router.ProtocolEnum
     */
    export type ProtocolEnum = "any" | "tcp" | "udp"
    /**
     * Router
     * interface fullName: router.Router.Router
     */
    export interface Router {
        name: string;
        service: string;
        status: router.StatusEnum;
    }
    /**
     * Network Snat
     * interface fullName: router.Snat.Snat
     */
    export interface Snat {
        destinationNet?: string;
        destinationPort?: number;
        id: number;
        newSourceNet: string;
        newSourcePort?: number;
        protocol: router.ProtocolEnum;
        status: router.StatusEnum;
    }
    /**
     * All states this object can be in
     * type fullname: router.StatusEnum
     */
    export type StatusEnum = "creating" | "error" | "off" | "on" | "removing" | "suspended"
    /**
     * Task
     * interface fullName: router.Task.Task
     */
    export interface Task {
        creationDate: string;
        finishDate?: string;
        function: router.TaskFunctionEnum;
        id: number;
        status: router.TaskStatusEnum;
    }
    /**
     * All executable types of tasks
     * type fullname: router.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "addDnat" | "addDnatMaster" | "addNetwork" | "addNetworkMaster" | "addPrivateLink" | "addPrivateLinkMaster" | "addPrivateLinkRoute" | "addPrivateLinkRouteMaster" | "addSnat" | "addSnatMaster" | "delDnat" | "delDnatMaster" | "delNetwork" | "delNetworkMaster" | "delPrivateLink" | "delPrivateLinkMaster" | "delPrivateLinkRoute" | "delPrivateLinkRouteMaster" | "delSnat" | "delSnatMaster" | "vpnCreation" | "vpnDeletion" | "vpnSetConfig" | "vpnSetConfigMaster" | "vpnSetSecrets" | "vpnSetSecretsMaster"
    /**
     * All states a Task can be in
     * type fullname: router.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    /**
     * Virtual Private Network
     * interface fullName: router.Vpn.Vpn
     */
    export interface Vpn {
        clientIp?: string;
        clientPrivNet: string;
        id: number;
        serverIp: string;
        serverPrivNet: string;
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
 * END API /router Models
 */
export function proxyRouter(ovhEngine: OvhRequestable): Router {
    return buildOvhProxy(ovhEngine, '/router');
}
export default proxyRouter;
/**
 * Api model for /router
 */
export interface Router {
    /**
     * List available services
     * GET /router
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /router/{serviceName}
         */
        $get(): Promise<router.Router>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /router/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
        }
        network: {
            /**
             * Networks mounted on this Router
             * GET /router/{serviceName}/network
             */
            $get(): Promise<string[]>;
            /**
             * Add a network to your router
             * POST /router/{serviceName}/network
             */
            $post(params: { description: string, ipNet: string, vlanTag?: number }): Promise<router.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(ipNet: string): {
                /**
                 * Remove this network from your router
                 * DELETE /router/{serviceName}/network/{ipNet}
                 */
                $delete(): Promise<router.Task>;
                /**
                 * Get this object properties
                 * GET /router/{serviceName}/network/{ipNet}
                 */
                $get(): Promise<router.Network>;
                /**
                 * Alter this object properties
                 * PUT /router/{serviceName}/network/{ipNet}
                 */
                $put(params?: { creationDate?: string, description?: string, id?: number, ipNet?: string, status?: router.IpStatusEnum, vlanTag?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            };
        }
        privateLink: {
            /**
             * Private links set up on this router
             * GET /router/{serviceName}/privateLink
             */
            $get(): Promise<string[]>;
            /**
             * Add a new Private Link to your Router service
             * POST /router/{serviceName}/privateLink
             */
            $post(params: { name: string, peerServiceName: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(peerServiceName: string): {
                /**
                 * Remove an existing Private Link from your Router service
                 * DELETE /router/{serviceName}/privateLink/{peerServiceName}
                 */
                $delete(): Promise<router.Task>;
                /**
                 * Get this object properties
                 * GET /router/{serviceName}/privateLink/{peerServiceName}
                 */
                $get(): Promise<router.PrivateLink>;
                /**
                 * Alter this object properties
                 * PUT /router/{serviceName}/privateLink/{peerServiceName}
                 */
                $put(params?: { creationDate?: string, id?: number, name?: string, peerServiceName?: string, status?: router.StatusEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                request: {
                    /**
                     * Get this object properties
                     * GET /router/{serviceName}/privateLink/{peerServiceName}/request
                     */
                    $get(): Promise<router.PrivateLinkRequest>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    manage: {
                        /**
                         * Accept, reject or cancel a pending request
                         * POST /router/{serviceName}/privateLink/{peerServiceName}/request/manage
                         */
                        $post(params: { action: router.PrivLinkReqActionEnum }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                }
                route: {
                    /**
                     * Routes set up in a Private Link
                     * GET /router/{serviceName}/privateLink/{peerServiceName}/route
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Add a new outgoing route to your router
                     * POST /router/{serviceName}/privateLink/{peerServiceName}/route
                     */
                    $post(params: { network: string }): Promise<router.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(network: string): {
                        /**
                         * Delete an existing route from your router
                         * DELETE /router/{serviceName}/privateLink/{peerServiceName}/route/{network}
                         */
                        $delete(): Promise<router.Task>;
                        /**
                         * Get this object properties
                         * GET /router/{serviceName}/privateLink/{peerServiceName}/route/{network}
                         */
                        $get(): Promise<router.PrivateLinkRoute>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /router/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /router/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
        }
        task: {
            /**
             * Tasks for this Router
             * GET /router/{serviceName}/task
             */
            $get(params?: { function_?: router.TaskFunctionEnum, status?: router.TaskStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /router/{serviceName}/task/{id}
                 */
                $get(): Promise<router.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            };
        }
        terminate: {
            /**
             * Terminate your service
             * POST /router/{serviceName}/terminate
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
        }
        vpn: {
            /**
             * VPN associated with this Router
             * GET /router/{serviceName}/vpn
             */
            $get(): Promise<number[]>;
            /**
             * Add a VPN to your router
             * POST /router/{serviceName}/vpn
             */
            $post(params: { clientIp?: string, clientPrivNet: string, psk: string, serverPrivNet: string }): Promise<router.Vpn>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(id: number): {
                /**
                 * Delete a VPN from your router
                 * DELETE /router/{serviceName}/vpn/{id}
                 */
                $delete(): Promise<router.Task>;
                /**
                 * Get this object properties
                 * GET /router/{serviceName}/vpn/{id}
                 */
                $get(): Promise<router.Vpn>;
                /**
                 * Alter this object properties
                 * PUT /router/{serviceName}/vpn/{id}
                 */
                $put(params?: { clientIp?: string, clientPrivNet?: string, id?: number, serverIp?: string, serverPrivNet?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                setPsk: {
                    /**
                     * Change your VPN's PSK
                     * POST /router/{serviceName}/vpn/{id}/setPsk
                     */
                    $post(params: { psk: string }): Promise<router.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
            };
        }
    };
}

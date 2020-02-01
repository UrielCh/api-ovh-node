import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /router Models
 * Source: https://ca.api.ovh.com/1.0/router.json
 */
export namespace router {
    // interface fullName: router.Dnat.Dnat
    export interface Dnat {
        destinationPort?: number;
        id: number;
        newDestinationNet: string;
        newDestinationPort?: number;
        protocol: router.ProtocolEnum;
        sourceNet?: string;
        status: router.StatusEnum;
    }
    // type fullname: router.IpStatusEnum
    export type IpStatusEnum = "blacklisted" | "deleted" | "free" | "installing" | "ok" | "quarantined" | "removing" | "suspended"
    // interface fullName: router.Network.Network
    export interface Network {
        creationDate: string;
        description?: string;
        id: number;
        ipNet: string;
        status: router.IpStatusEnum;
        vlanTag?: number;
    }
    // type fullname: router.PrivLinkReqActionEnum
    export type PrivLinkReqActionEnum = "accept" | "cancel" | "reject"
    // type fullname: router.PrivLinkReqStatusEnum
    export type PrivLinkReqStatusEnum = "accepted" | "cancelled" | "error" | "pending" | "rejected"
    // interface fullName: router.PrivateLink.PrivateLink
    export interface PrivateLink {
        creationDate: string;
        id: number;
        name: string;
        peerServiceName: string;
        status: router.StatusEnum;
    }
    // interface fullName: router.PrivateLinkRequest.PrivateLinkRequest
    export interface PrivateLinkRequest {
        creationDate: string;
        status: router.PrivLinkReqStatusEnum;
    }
    // interface fullName: router.PrivateLinkRoute.PrivateLinkRoute
    export interface PrivateLinkRoute {
        creationDate: string;
        id: number;
        network: string;
        status: router.StatusEnum;
    }
    // type fullname: router.ProtocolEnum
    export type ProtocolEnum = "any" | "tcp" | "udp"
    // interface fullName: router.Router.Router
    export interface Router {
        name: string;
        service: string;
        status: router.StatusEnum;
    }
    // interface fullName: router.Snat.Snat
    export interface Snat {
        destinationNet?: string;
        destinationPort?: number;
        id: number;
        newSourceNet: string;
        newSourcePort?: number;
        protocol: router.ProtocolEnum;
        status: router.StatusEnum;
    }
    // type fullname: router.StatusEnum
    export type StatusEnum = "creating" | "error" | "off" | "on" | "removing" | "suspended"
    // interface fullName: router.Task.Task
    export interface Task {
        creationDate: string;
        finishDate?: string;
        function: router.TaskFunctionEnum;
        id: number;
        status: router.TaskStatusEnum;
    }
    // type fullname: router.TaskFunctionEnum
    export type TaskFunctionEnum = "addDnat" | "addDnatMaster" | "addNetwork" | "addNetworkMaster" | "addPrivateLink" | "addPrivateLinkMaster" | "addPrivateLinkRoute" | "addPrivateLinkRouteMaster" | "addSnat" | "addSnatMaster" | "delDnat" | "delDnatMaster" | "delNetwork" | "delNetworkMaster" | "delPrivateLink" | "delPrivateLinkMaster" | "delPrivateLinkRoute" | "delPrivateLinkRouteMaster" | "delSnat" | "delSnatMaster" | "vpnCreation" | "vpnDeletion" | "vpnSetConfig" | "vpnSetConfigMaster" | "vpnSetSecrets" | "vpnSetSecretsMaster"
    // type fullname: router.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    // interface fullName: router.Vpn.Vpn
    export interface Vpn {
        clientIp?: string;
        clientPrivNet: string;
        id: number;
        serverIp: string;
        serverPrivNet: string;
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
 * END API /router Models
 */
export function proxyRouter(ovhEngine: OvhRequestable): Router {
    return buildOvhProxy(ovhEngine, '/router');
}
export default proxyRouter;
/**
 * Api Proxy model
 */// Apis harmony
// path /router
export interface Router {
    // GET /router
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /router/{serviceName}
        $get(): Promise<router.Router>;
        confirmTermination: {
            // POST /router/{serviceName}/confirmTermination
            $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        network: {
            // GET /router/{serviceName}/network
            $get(): Promise<string[]>;
            // POST /router/{serviceName}/network
            $post(params: {description: string, ipNet: string, vlanTag?: number}): Promise<router.Task>;
            $(ipNet: string): {
                // DELETE /router/{serviceName}/network/{ipNet}
                $delete(): Promise<router.Task>;
                // GET /router/{serviceName}/network/{ipNet}
                $get(): Promise<router.Network>;
                // PUT /router/{serviceName}/network/{ipNet}
                $put(params?: {creationDate?: string, description?: string, id?: number, ipNet?: string, status?: router.IpStatusEnum, vlanTag?: number}): Promise<void>;
            };
        }
        privateLink: {
            // GET /router/{serviceName}/privateLink
            $get(): Promise<string[]>;
            // POST /router/{serviceName}/privateLink
            $post(params: {name: string, peerServiceName: string}): Promise<string>;
            $(peerServiceName: string): {
                // DELETE /router/{serviceName}/privateLink/{peerServiceName}
                $delete(): Promise<router.Task>;
                // GET /router/{serviceName}/privateLink/{peerServiceName}
                $get(): Promise<router.PrivateLink>;
                // PUT /router/{serviceName}/privateLink/{peerServiceName}
                $put(params?: {creationDate?: string, id?: number, name?: string, peerServiceName?: string, status?: router.StatusEnum}): Promise<void>;
                request: {
                    // GET /router/{serviceName}/privateLink/{peerServiceName}/request
                    $get(): Promise<router.PrivateLinkRequest>;
                    manage: {
                        // POST /router/{serviceName}/privateLink/{peerServiceName}/request/manage
                        $post(params: {action: router.PrivLinkReqActionEnum}): Promise<string>;
                    }
                }
                route: {
                    // GET /router/{serviceName}/privateLink/{peerServiceName}/route
                    $get(): Promise<string[]>;
                    // POST /router/{serviceName}/privateLink/{peerServiceName}/route
                    $post(params: {network: string}): Promise<router.Task>;
                    $(network: string): {
                        // DELETE /router/{serviceName}/privateLink/{peerServiceName}/route/{network}
                        $delete(): Promise<router.Task>;
                        // GET /router/{serviceName}/privateLink/{peerServiceName}/route/{network}
                        $get(): Promise<router.PrivateLinkRoute>;
                    };
                }
            };
        }
        serviceInfos: {
            // GET /router/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /router/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        task: {
            // GET /router/{serviceName}/task
            $get(params?: {function_?: router.TaskFunctionEnum, status?: router.TaskStatusEnum}): Promise<number[]>;
            $(id: number): {
                // GET /router/{serviceName}/task/{id}
                $get(): Promise<router.Task>;
            };
        }
        terminate: {
            // POST /router/{serviceName}/terminate
            $post(): Promise<string>;
        }
        vpn: {
            // GET /router/{serviceName}/vpn
            $get(): Promise<number[]>;
            // POST /router/{serviceName}/vpn
            $post(params: {clientIp?: string, clientPrivNet: string, psk: string, serverPrivNet: string}): Promise<router.Vpn>;
            $(id: number): {
                // DELETE /router/{serviceName}/vpn/{id}
                $delete(): Promise<router.Task>;
                // GET /router/{serviceName}/vpn/{id}
                $get(): Promise<router.Vpn>;
                // PUT /router/{serviceName}/vpn/{id}
                $put(params?: {clientIp?: string, clientPrivNet?: string, id?: number, serverIp?: string, serverPrivNet?: string}): Promise<void>;
                setPsk: {
                    // POST /router/{serviceName}/vpn/{id}/setPsk
                    $post(params: {psk: string}): Promise<router.Task>;
                }
            };
        }
    };
}

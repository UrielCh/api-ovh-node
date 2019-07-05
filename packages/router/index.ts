import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace router {
    //router.Dnat
    // fullName: router.Dnat.Dnat
    export interface Dnat {
        destinationPort?: number;
        id: number;
        newDestinationNet: string;
        newDestinationPort?: number;
        protocol: OVH.router.ProtocolEnum;
        sourceNet?: string;
        status: OVH.router.StatusEnum;
    }
    //router.IpStatusEnum
    export type IpStatusEnum = "blacklisted" | "deleted" | "free" | "installing" | "ok" | "quarantined" | "removing" | "suspended"
    //router.Network
    // fullName: router.Network.Network
    export interface Network {
        creationDate: string;
        description?: string;
        id: number;
        ipNet: string;
        status: OVH.router.IpStatusEnum;
        vlanTag?: number;
    }
    //router.PrivLinkReqActionEnum
    export type PrivLinkReqActionEnum = "accept" | "cancel" | "reject"
    //router.PrivLinkReqStatusEnum
    export type PrivLinkReqStatusEnum = "accepted" | "cancelled" | "error" | "pending" | "rejected"
    //router.PrivateLink
    // fullName: router.PrivateLink.PrivateLink
    export interface PrivateLink {
        creationDate: string;
        id: number;
        name: string;
        peerServiceName: string;
        status: OVH.router.StatusEnum;
    }
    //router.PrivateLinkRequest
    // fullName: router.PrivateLinkRequest.PrivateLinkRequest
    export interface PrivateLinkRequest {
        creationDate: string;
        status: OVH.router.PrivLinkReqStatusEnum;
    }
    //router.PrivateLinkRoute
    // fullName: router.PrivateLinkRoute.PrivateLinkRoute
    export interface PrivateLinkRoute {
        creationDate: string;
        id: number;
        network: string;
        status: OVH.router.StatusEnum;
    }
    //router.ProtocolEnum
    export type ProtocolEnum = "any" | "tcp" | "udp"
    //router.Router
    // fullName: router.Router.Router
    export interface Router {
        name: string;
        service: string;
        status: OVH.router.StatusEnum;
    }
    //router.Snat
    // fullName: router.Snat.Snat
    export interface Snat {
        destinationNet?: string;
        destinationPort?: number;
        id: number;
        newSourceNet: string;
        newSourcePort?: number;
        protocol: OVH.router.ProtocolEnum;
        status: OVH.router.StatusEnum;
    }
    //router.StatusEnum
    export type StatusEnum = "creating" | "error" | "off" | "on" | "removing" | "suspended"
    //router.Task
    // fullName: router.Task.Task
    export interface Task {
        creationDate: string;
        finishDate?: string;
        function: OVH.router.TaskFunctionEnum;
        id: number;
        status: OVH.router.TaskStatusEnum;
    }
    //router.TaskFunctionEnum
    export type TaskFunctionEnum = "addDnat" | "addDnatMaster" | "addNetwork" | "addNetworkMaster" | "addPrivateLink" | "addPrivateLinkMaster" | "addPrivateLinkRoute" | "addPrivateLinkRouteMaster" | "addSnat" | "addSnatMaster" | "delDnat" | "delDnatMaster" | "delNetwork" | "delNetworkMaster" | "delPrivateLink" | "delPrivateLinkMaster" | "delPrivateLinkRoute" | "delPrivateLinkRouteMaster" | "delSnat" | "delSnatMaster" | "vpnCreation" | "vpnDeletion" | "vpnSetConfig" | "vpnSetConfigMaster" | "vpnSetSecrets" | "vpnSetSecretsMaster"
    //router.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    //router.Vpn
    // fullName: router.Vpn.Vpn
    export interface Vpn {
        clientIp?: string;
        clientPrivNet: string;
        id: number;
        serverIp: string;
        serverPrivNet: string;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
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
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType: OVH.service.RenewalTypeEnum;
        serviceId: number;
        status: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /router
export interface Router{
    // GET /router
    $get(): Promise<string[]>;
    [keys: string]:{
        // GET /router/{serviceName}
        $get(): Promise<router.Router>;
        confirmTermination: {
            // POST /router/{serviceName}/confirmTermination
            $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        network: {
            // GET /router/{serviceName}/network
            $get(): Promise<string[]>;
            // POST /router/{serviceName}/network
            $post(body?: {description: string, ipNet: string, vlanTag?: number}): Promise<router.Task>;
            [keys: string]:{
                // DELETE /router/{serviceName}/network/{ipNet}
                $delete(): Promise<router.Task>;
                // GET /router/{serviceName}/network/{ipNet}
                $get(): Promise<router.Network>;
                // PUT /router/{serviceName}/network/{ipNet}
                $put(body?: {body: router.Network}): Promise<void>;
            } | any
        }
        privateLink: {
            // GET /router/{serviceName}/privateLink
            $get(): Promise<string[]>;
            // POST /router/{serviceName}/privateLink
            $post(body?: {name: string, peerServiceName: string}): Promise<string>;
            [keys: string]:{
                // DELETE /router/{serviceName}/privateLink/{peerServiceName}
                $delete(): Promise<router.Task>;
                // GET /router/{serviceName}/privateLink/{peerServiceName}
                $get(): Promise<router.PrivateLink>;
                // PUT /router/{serviceName}/privateLink/{peerServiceName}
                $put(body?: {body: router.PrivateLink}): Promise<void>;
                request: {
                    // GET /router/{serviceName}/privateLink/{peerServiceName}/request
                    $get(): Promise<router.PrivateLinkRequest>;
                    manage: {
                        // POST /router/{serviceName}/privateLink/{peerServiceName}/request/manage
                        $post(body?: {action: router.PrivLinkReqActionEnum}): Promise<string>;
                    }
                }
                route: {
                    // GET /router/{serviceName}/privateLink/{peerServiceName}/route
                    $get(): Promise<string[]>;
                    // POST /router/{serviceName}/privateLink/{peerServiceName}/route
                    $post(body?: {network: string}): Promise<router.Task>;
                    [keys: string]:{
                        // DELETE /router/{serviceName}/privateLink/{peerServiceName}/route/{network}
                        $delete(): Promise<router.Task>;
                        // GET /router/{serviceName}/privateLink/{peerServiceName}/route/{network}
                        $get(): Promise<router.PrivateLinkRoute>;
                    } | any
                }
            } | any
        }
        serviceInfos: {
            // GET /router/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /router/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
        task: {
            // GET /router/{serviceName}/task
            $get(param?: {function_?: router.TaskFunctionEnum, status?: router.TaskStatusEnum}): Promise<number[]>;
            [keys: string]:{
                // GET /router/{serviceName}/task/{id}
                $get(): Promise<router.Task>;
            } | any
        }
        terminate: {
            // POST /router/{serviceName}/terminate
            $post(): Promise<string>;
        }
        vpn: {
            // GET /router/{serviceName}/vpn
            $get(): Promise<number[]>;
            // POST /router/{serviceName}/vpn
            $post(body?: {clientIp?: string, clientPrivNet: string, psk: string, serverPrivNet: string}): Promise<router.Vpn>;
            [keys: string]:{
                // DELETE /router/{serviceName}/vpn/{id}
                $delete(): Promise<router.Task>;
                // GET /router/{serviceName}/vpn/{id}
                $get(): Promise<router.Vpn>;
                // PUT /router/{serviceName}/vpn/{id}
                $put(body?: {body: router.Vpn}): Promise<void>;
                setPsk: {
                    // POST /router/{serviceName}/vpn/{id}/setPsk
                    $post(body?: {psk: string}): Promise<router.Task>;
                }
            } | any
        }
    } | any
}
// Api
type PathsRouterGET = '/router' |
  '/router/{serviceName}' |
  '/router/{serviceName}/network' |
  '/router/{serviceName}/network/{ipNet}' |
  '/router/{serviceName}/privateLink' |
  '/router/{serviceName}/privateLink/{peerServiceName}' |
  '/router/{serviceName}/privateLink/{peerServiceName}/request' |
  '/router/{serviceName}/privateLink/{peerServiceName}/route' |
  '/router/{serviceName}/privateLink/{peerServiceName}/route/{network}' |
  '/router/{serviceName}/serviceInfos' |
  '/router/{serviceName}/task' |
  '/router/{serviceName}/task/{id}' |
  '/router/{serviceName}/vpn' |
  '/router/{serviceName}/vpn/{id}';

type PathsRouterPUT = '/router/{serviceName}/network/{ipNet}' |
  '/router/{serviceName}/privateLink/{peerServiceName}' |
  '/router/{serviceName}/serviceInfos' |
  '/router/{serviceName}/vpn/{id}';

type PathsRouterPOST = '/router/{serviceName}/confirmTermination' |
  '/router/{serviceName}/network' |
  '/router/{serviceName}/privateLink' |
  '/router/{serviceName}/privateLink/{peerServiceName}/request/manage' |
  '/router/{serviceName}/privateLink/{peerServiceName}/route' |
  '/router/{serviceName}/terminate' |
  '/router/{serviceName}/vpn' |
  '/router/{serviceName}/vpn/{id}/setPsk';

type PathsRouterDELETE = '/router/{serviceName}/network/{ipNet}' |
  '/router/{serviceName}/privateLink/{peerServiceName}' |
  '/router/{serviceName}/privateLink/{peerServiceName}/route/{network}' |
  '/router/{serviceName}/vpn/{id}';

export class ApiRouter extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the ROUTER service
   * List available services
   */
  public get(path: '/router'): Promise<string[]>;
  /**
   * Router
   * Get this object properties
   */
  public get(path: '/router/{serviceName}', params: {serviceName: string}): Promise<router.Router>;
  /**
   * List the router.Network objects
   * Networks mounted on this Router
   */
  public get(path: '/router/{serviceName}/network', params: {serviceName: string}): Promise<string[]>;
  /**
   * Network
   * Get this object properties
   */
  public get(path: '/router/{serviceName}/network/{ipNet}', params: {ipNet: string, serviceName: string}): Promise<router.Network>;
  /**
   * List the router.PrivateLink objects
   * Private links set up on this router
   */
  public get(path: '/router/{serviceName}/privateLink', params: {serviceName: string}): Promise<string[]>;
  /**
   * Private Link to another service
   * Get this object properties
   */
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}', params: {peerServiceName: string, serviceName: string}): Promise<router.PrivateLink>;
  /**
   * Received Private Link requests
   * Get this object properties
   */
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/request', params: {peerServiceName: string, serviceName: string}): Promise<router.PrivateLinkRequest>;
  /**
   * List the router.PrivateLinkRoute objects
   * Routes set up in a Private Link
   */
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/route', params: {peerServiceName: string, serviceName: string}): Promise<string[]>;
  /**
   * Outgoing routes configured inside a Private Link
   * Get this object properties
   */
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/route/{network}', params: {network: string, peerServiceName: string, serviceName: string}): Promise<router.PrivateLinkRoute>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/router/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the router.Task objects
   * Tasks for this Router
   */
  public get(path: '/router/{serviceName}/task', params: {serviceName: string, function_?: OVH.router.TaskFunctionEnum, status?: OVH.router.TaskStatusEnum}): Promise<number[]>;
  /**
   * Task
   * Get this object properties
   */
  public get(path: '/router/{serviceName}/task/{id}', params: {id: number, serviceName: string}): Promise<router.Task>;
  /**
   * List the router.Vpn objects
   * VPN associated with this Router
   */
  public get(path: '/router/{serviceName}/vpn', params: {serviceName: string}): Promise<number[]>;
  /**
   * Virtual Private Network
   * Get this object properties
   */
  public get(path: '/router/{serviceName}/vpn/{id}', params: {id: number, serviceName: string}): Promise<router.Vpn>;
  public get(path: PathsRouterGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Network
   * Alter this object properties
   */
  public put(path: '/router/{serviceName}/network/{ipNet}', params: {ipNet: string, serviceName: string, creationDate?: string, description?: string, id?: number, status?: OVH.router.IpStatusEnum, vlanTag?: number}): Promise<void>;
  /**
   * Private Link to another service
   * Alter this object properties
   */
  public put(path: '/router/{serviceName}/privateLink/{peerServiceName}', params: {peerServiceName: string, serviceName: string, creationDate?: string, id?: number, name?: string, status?: OVH.router.StatusEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/router/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Virtual Private Network
   * Alter this object properties
   */
  public put(path: '/router/{serviceName}/vpn/{id}', params: {id: number, serviceName: string, clientIp?: string, clientPrivNet?: string, serverIp?: string, serverPrivNet?: string}): Promise<void>;
  public put(path: PathsRouterPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/router/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * List the router.Network objects
   * Add a network to your router
   */
  public post(path: '/router/{serviceName}/network', params: {serviceName: string, description: string, ipNet: string, vlanTag?: number}): Promise<router.Task>;
  /**
   * List the router.PrivateLink objects
   * Add a new Private Link to your Router service
   */
  public post(path: '/router/{serviceName}/privateLink', params: {serviceName: string, name: string, peerServiceName: string}): Promise<string>;
  /**
   * manage operations
   * Accept, reject or cancel a pending request
   */
  public post(path: '/router/{serviceName}/privateLink/{peerServiceName}/request/manage', params: {peerServiceName: string, serviceName: string, action: OVH.router.PrivLinkReqActionEnum}): Promise<string>;
  /**
   * List the router.PrivateLinkRoute objects
   * Add a new outgoing route to your router
   */
  public post(path: '/router/{serviceName}/privateLink/{peerServiceName}/route', params: {peerServiceName: string, serviceName: string, network: string}): Promise<router.Task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/router/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * List the router.Vpn objects
   * Add a VPN to your router
   */
  public post(path: '/router/{serviceName}/vpn', params: {serviceName: string, clientIp?: string, clientPrivNet: string, psk: string, serverPrivNet: string}): Promise<router.Vpn>;
  /**
   * setPsk operations
   * Change your VPN's PSK
   */
  public post(path: '/router/{serviceName}/vpn/{id}/setPsk', params: {id: number, serviceName: string, psk: string}): Promise<router.Task>;
  public post(path: PathsRouterPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Network
   * Remove this network from your router
   */
  public delete(path: '/router/{serviceName}/network/{ipNet}', params: {ipNet: string, serviceName: string}): Promise<router.Task>;
  /**
   * Private Link to another service
   * Remove an existing Private Link from your Router service
   */
  public delete(path: '/router/{serviceName}/privateLink/{peerServiceName}', params: {peerServiceName: string, serviceName: string}): Promise<router.Task>;
  /**
   * Outgoing routes configured inside a Private Link
   * Delete an existing route from your router
   */
  public delete(path: '/router/{serviceName}/privateLink/{peerServiceName}/route/{network}', params: {network: string, peerServiceName: string, serviceName: string}): Promise<router.Task>;
  /**
   * Virtual Private Network
   * Delete a VPN from your router
   */
  public delete(path: '/router/{serviceName}/vpn/{id}', params: {id: number, serviceName: string}): Promise<router.Task>;
  public delete(path: PathsRouterDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
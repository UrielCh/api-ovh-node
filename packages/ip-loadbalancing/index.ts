import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /ipLoadbalancing Models
 */
export namespace ipLoadbalancing {
    //ipLoadbalancing.BackendCustomerServerStatusEnum
    export type BackendCustomerServerStatusEnum = "active" | "inactive"
    //ipLoadbalancing.BackendProbe
    // fullName: ipLoadbalancing.BackendProbe.BackendProbe
    export interface BackendProbe {
        forceSsl?: boolean;
        interval?: number;
        match?: ipLoadbalancing.ProbeExpectMatchEnum;
        method?: ipLoadbalancing.ProbeMethodEnum;
        negate?: boolean;
        pattern?: string;
        port?: number;
        type?: ipLoadbalancing.ProbeTypeEnum;
        url?: string;
    }
    //ipLoadbalancing.BalanceHTTPEnum
    export type BalanceHTTPEnum = "first" | "leastconn" | "roundrobin" | "source" | "uri"
    //ipLoadbalancing.BalanceTCPEnum
    export type BalanceTCPEnum = "first" | "leastconn" | "roundrobin" | "source"
    //ipLoadbalancing.DefinedFarm
    // fullName: ipLoadbalancing.DefinedFarm.DefinedFarm
    export interface DefinedFarm {
        id: number;
        type: string;
    }
    //ipLoadbalancing.DefinedFrontend
    // fullName: ipLoadbalancing.DefinedFrontend.DefinedFrontend
    export interface DefinedFrontend {
        id: number;
        type: string;
    }
    //ipLoadbalancing.DefinedRoute
    // fullName: ipLoadbalancing.DefinedRoute.DefinedRoute
    export interface DefinedRoute {
        displayName?: string;
        routeId: number;
        type: string;
    }
    //ipLoadbalancing.FarmAvailableProbe
    // fullName: ipLoadbalancing.FarmAvailableProbe.FarmAvailableProbe
    export interface FarmAvailableProbe {
        matches: string[];
        method?: string[];
        negatableMatches: string[];
        port: boolean;
        type: string;
        url: boolean;
    }
    //ipLoadbalancing.InstancesState
    // fullName: ipLoadbalancing.InstancesState.InstancesState
    export interface InstancesState {
        internalId: number;
        lastUpdateDate: string;
        state: string;
        zone: string;
    }
    //ipLoadbalancing.Ip
    // fullName: ipLoadbalancing.Ip.Ip
    export interface Ip {
        displayName?: string;
        ipLoadbalancing: string;
        ipv4?: string;
        ipv6?: string;
        metricsToken?: string;
        offer: string;
        orderableZone: ipLoadbalancing.OrderableZone[];
        serviceName: string;
        sslConfiguration?: ipLoadbalancing.SslConfigurationEnum;
        state: ipLoadbalancing.IpStateEnum;
        vrackEligibility: boolean;
        vrackName?: string;
        zone: string[];
    }
    //ipLoadbalancing.IpStateEnum
    export type IpStateEnum = "blacklisted" | "deleted" | "free" | "ok" | "quarantined" | "suspended"
    //ipLoadbalancing.NatIps
    // fullName: ipLoadbalancing.NatIps.NatIps
    export interface NatIps {
        ip: string[];
        zone: string;
    }
    //ipLoadbalancing.OrderableZone
    // fullName: ipLoadbalancing.OrderableZone.OrderableZone
    export interface OrderableZone {
        name: string;
        planCode: string;
    }
    //ipLoadbalancing.PendingChanges
    // fullName: ipLoadbalancing.PendingChanges.PendingChanges
    export interface PendingChanges {
        number: number;
        zone: string;
    }
    //ipLoadbalancing.ProbeExpectMatchEnum
    export type ProbeExpectMatchEnum = "contains" | "default" | "internal" | "matches" | "status"
    //ipLoadbalancing.ProbeMethodEnum
    export type ProbeMethodEnum = "GET" | "HEAD" | "OPTIONS" | "internal"
    //ipLoadbalancing.ProbeTypeEnum
    export type ProbeTypeEnum = "http" | "internal" | "mysql" | "oco" | "pgsql" | "smtp" | "tcp"
    //ipLoadbalancing.ProxyProtocolVersionEnum
    export type ProxyProtocolVersionEnum = "v1" | "v2" | "v2-ssl" | "v2-ssl-cn"
    export namespace Quota {
        //ipLoadbalancing.Quota.Quota
        // fullName: ipLoadbalancing.Quota.Quota.Quota
        export interface Quota {
            alert?: number;
            included?: number;
            lastUpdateDate?: string;
            resetDate?: string;
            total?: number;
            zone: string;
        }
    }
    export namespace QuotaHistory {
        //ipLoadbalancing.QuotaHistory.QuotaHistory
        // fullName: ipLoadbalancing.QuotaHistory.QuotaHistory.QuotaHistory
        export interface QuotaHistory {
            historizedDate: string;
            id: number;
            lastUpdateDate: string;
            resetDate: string;
            total: number;
            zone: string;
        }
    }
    //ipLoadbalancing.RouteAvailableAction
    // fullName: ipLoadbalancing.RouteAvailableAction.RouteAvailableAction
    export interface RouteAvailableAction {
        destination?: string;
        name: string;
        status?: number[];
        type: string;
    }
    //ipLoadbalancing.RouteAvailableRule
    // fullName: ipLoadbalancing.RouteAvailableRule.RouteAvailableRule
    export interface RouteAvailableRule {
        enum?: string[];
        hasSubField: boolean;
        matches: string[];
        name: string;
        pattern: string;
        type: string;
    }
    export namespace RouteHttp {
        //ipLoadbalancing.RouteHttp.RouteHttp
        // fullName: ipLoadbalancing.RouteHttp.RouteHttp.RouteHttp
        export interface RouteHttp {
            action: ipLoadbalancing.RouteHttpAction;
            displayName?: string;
            frontendId?: number;
            routeId: number;
            rules: ipLoadbalancing.RouteRule[];
            status: ipLoadbalancing.RouteStatusEnum;
            weight: number;
        }
    }
    //ipLoadbalancing.RouteHttpAction
    // fullName: ipLoadbalancing.RouteHttpAction.RouteHttpAction
    export interface RouteHttpAction {
        status?: number;
        target?: string;
        type: string;
    }
    //ipLoadbalancing.RouteRule
    // fullName: ipLoadbalancing.RouteRule.RouteRule
    export interface RouteRule {
        field: string;
        match: ipLoadbalancing.RouteRuleMatchesEnum;
        negate: boolean;
        pattern?: string;
        ruleId: number;
        subField?: string;
    }
    export namespace RouteRule {
        //ipLoadbalancing.RouteRule.RouteRule
        // fullName: ipLoadbalancing.RouteRule.RouteRule.RouteRule
        export interface RouteRule {
            displayName?: string;
            field: string;
            match: ipLoadbalancing.RouteRuleMatchesEnum;
            negate: boolean;
            pattern?: string;
            ruleId: number;
            subField?: string;
        }
    }
    //ipLoadbalancing.RouteRuleMatchesEnum
    export type RouteRuleMatchesEnum = "contains" | "endswith" | "exists" | "in" | "internal" | "is" | "matches" | "startswith"
    //ipLoadbalancing.RouteStatusEnum
    export type RouteStatusEnum = "creating" | "deleting" | "internal" | "ok" | "updating"
    export namespace RouteTcp {
        //ipLoadbalancing.RouteTcp.RouteTcp
        // fullName: ipLoadbalancing.RouteTcp.RouteTcp.RouteTcp
        export interface RouteTcp {
            action: ipLoadbalancing.RouteTcpAction;
            displayName?: string;
            frontendId?: number;
            routeId: number;
            rules: ipLoadbalancing.RouteRule[];
            status: ipLoadbalancing.RouteStatusEnum;
            weight: number;
        }
    }
    //ipLoadbalancing.RouteTcpAction
    // fullName: ipLoadbalancing.RouteTcpAction.RouteTcpAction
    export interface RouteTcpAction {
        target?: string;
        type: string;
    }
    //ipLoadbalancing.ServerState
    // fullName: ipLoadbalancing.ServerState.ServerState
    export interface ServerState {
        checkCode?: string;
        checkStatus?: string;
        checkTime?: string;
        instanceId: number;
        lastCheckContent?: string;
        status?: string;
    }
    export namespace Ssl {
        //ipLoadbalancing.Ssl.Ssl
        // fullName: ipLoadbalancing.Ssl.Ssl.Ssl
        export interface Ssl {
            displayName?: string;
            expireDate: string;
            fingerprint: string;
            id: number;
            san: string[];
            serial: string;
            subject: string;
            type?: ipLoadbalancing.SslTypeEnum;
        }
    }
    //ipLoadbalancing.SslConfigurationEnum
    export type SslConfigurationEnum = "intermediate" | "modern"
    //ipLoadbalancing.SslTypeEnum
    export type SslTypeEnum = "built" | "built_not_routed" | "custom"
    //ipLoadbalancing.Status
    // fullName: ipLoadbalancing.Status.Status
    export interface Status {
        farms: ipLoadbalancing.status.Component;
        frontends: ipLoadbalancing.status.Component;
        servers: ipLoadbalancing.status.Component;
        service: ipLoadbalancing.status.Service;
    }
    //ipLoadbalancing.StickinessHTTPEnum
    export type StickinessHTTPEnum = "cookie" | "sourceIp"
    //ipLoadbalancing.StickinessTCPEnum
    export type StickinessTCPEnum = "sourceIp"
    export namespace Task {
        //ipLoadbalancing.Task.Task
        // fullName: ipLoadbalancing.Task.Task.Task
        export interface Task {
            action: ipLoadbalancing.TaskActionEnum;
            creationDate: string;
            doneDate?: string;
            id: number;
            progress: number;
            status: ipLoadbalancing.TaskStatusEnum;
            zones: string[];
        }
    }
    //ipLoadbalancing.TaskActionEnum
    export type TaskActionEnum = "deleteIplb" | "deployIplb" | "install" | "installIplb" | "installZone" | "orderFreeCertificate" | "orderPaidCertificate" | "orderSsl" | "refreshIplb" | "releaseIplb" | "releaseIplbZone" | "reopenIplb" | "suspendIplb" | "suspendZone" | "switchToIplbNextGenerationApi" | "vrackAttach" | "vrackDetach"
    //ipLoadbalancing.TaskStatusEnum
    export type TaskStatusEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "todo"
    //ipLoadbalancing.VrackInformation
    // fullName: ipLoadbalancing.VrackInformation.VrackInformation
    export interface VrackInformation {
        state: ipLoadbalancing.VrackStateEnum;
        task: number[];
        vrackName?: string;
    }
    export namespace VrackNetwork {
        //ipLoadbalancing.VrackNetwork.VrackNetwork
        // fullName: ipLoadbalancing.VrackNetwork.VrackNetwork.VrackNetwork
        export interface VrackNetwork {
            displayName?: string;
            farmId: ipLoadbalancing.DefinedFarm[];
            natIp: string;
            subnet: string;
            vlan: number;
            vrackNetworkId: number;
        }
    }
    //ipLoadbalancing.VrackNetworkCreationRules
    // fullName: ipLoadbalancing.VrackNetworkCreationRules.VrackNetworkCreationRules
    export interface VrackNetworkCreationRules {
        minNatIps: number;
        remainingNetworks: number;
        vrackName: string;
    }
    //ipLoadbalancing.VrackStateEnum
    export type VrackStateEnum = "activating" | "active" | "deactivating" | "inactive"
    //ipLoadbalancing.VrackTransparentGateways
    // fullName: ipLoadbalancing.VrackTransparentGateways.VrackTransparentGateways
    export interface VrackTransparentGateways {
        address: string;
        gateway: string;
        vlan: number;
    }
    export namespace VrackTransparentIp {
        //ipLoadbalancing.VrackTransparentIp.VrackTransparentIp
        // fullName: ipLoadbalancing.VrackTransparentIp.VrackTransparentIp.VrackTransparentIp
        export interface VrackTransparentIp {
            address: string;
            farmId: number;
            id: number;
            serverId: number;
            slotId: number;
        }
    }
    export namespace Zone {
        //ipLoadbalancing.Zone.Zone
        // fullName: ipLoadbalancing.Zone.Zone.Zone
        export interface Zone {
            name: string;
            state: string;
        }
    }
    export namespace backendHttp {
        //ipLoadbalancing.backendHttp.BackendHttp
        // fullName: ipLoadbalancing.backendHttp.BackendHttp.BackendHttp
        export interface BackendHttp {
            balance?: ipLoadbalancing.BalanceHTTPEnum;
            displayName?: string;
            farmId: number;
            port?: number;
            probe?: ipLoadbalancing.BackendProbe;
            stickiness?: ipLoadbalancing.StickinessHTTPEnum;
            vrackNetworkId?: number;
            zone: string;
        }
    }
    export namespace backendHttpCustomerServer {
        //ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer
        // fullName: ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer.BackendHTTPServer
        export interface BackendHTTPServer {
            address: string;
            backendId: number;
            backup: boolean;
            chain?: string;
            cookie?: string;
            displayName?: string;
            port?: number;
            probe: boolean;
            proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum;
            serverId: number;
            serverState: ipLoadbalancing.ServerState[];
            ssl: boolean;
            status: ipLoadbalancing.BackendCustomerServerStatusEnum;
            weight?: number;
        }
    }
    export namespace backendTcp {
        //ipLoadbalancing.backendTcp.BackendTcp
        // fullName: ipLoadbalancing.backendTcp.BackendTcp.BackendTcp
        export interface BackendTcp {
            balance?: ipLoadbalancing.BalanceTCPEnum;
            displayName?: string;
            farmId: number;
            port?: number;
            probe?: ipLoadbalancing.BackendProbe;
            stickiness?: ipLoadbalancing.StickinessTCPEnum;
            vrackNetworkId?: number;
            zone: string;
        }
    }
    export namespace backendTcpCustomerServer {
        //ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer
        // fullName: ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer.BackendTCPServer
        export interface BackendTCPServer {
            address: string;
            backendId: number;
            backup: boolean;
            chain?: string;
            displayName?: string;
            port?: number;
            probe: boolean;
            proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum;
            serverId: number;
            serverState: ipLoadbalancing.ServerState[];
            ssl: boolean;
            status: ipLoadbalancing.BackendCustomerServerStatusEnum;
            weight?: number;
        }
    }
    export namespace backendUdp {
        //ipLoadbalancing.backendUdp.BackendUdp
        // fullName: ipLoadbalancing.backendUdp.BackendUdp.BackendUdp
        export interface BackendUdp {
            displayName?: string;
            farmId: number;
            port: number;
            vrackNetworkId?: number;
            zone: string;
        }
    }
    export namespace backendUdpCustomerServer {
        //ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer
        // fullName: ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer.BackendUDPServer
        export interface BackendUDPServer {
            address: string;
            backendId: number;
            displayName?: string;
            port?: number;
            serverId: number;
            status: ipLoadbalancing.BackendCustomerServerStatusEnum;
        }
    }
    export namespace frontendHttp {
        //ipLoadbalancing.frontendHttp.FrontendHttp
        // fullName: ipLoadbalancing.frontendHttp.FrontendHttp.FrontendHttp
        export interface FrontendHttp {
            allowedSource?: string[];
            dedicatedIpfo?: string[];
            defaultFarmId?: number;
            defaultSslId?: number;
            disabled: boolean;
            displayName?: string;
            frontendId: number;
            hsts: boolean;
            httpHeader?: string[];
            port: string;
            redirectLocation?: string;
            ssl: boolean;
            zone: string;
        }
    }
    export namespace frontendTcp {
        //ipLoadbalancing.frontendTcp.FrontendTcp
        // fullName: ipLoadbalancing.frontendTcp.FrontendTcp.FrontendTcp
        export interface FrontendTcp {
            allowedSource?: string[];
            dedicatedIpfo?: string[];
            defaultFarmId?: number;
            defaultSslId?: number;
            disabled: boolean;
            displayName?: string;
            frontendId: number;
            port: string;
            ssl: boolean;
            zone: string;
        }
    }
    export namespace frontendUdp {
        //ipLoadbalancing.frontendUdp.FrontendUdp
        // fullName: ipLoadbalancing.frontendUdp.FrontendUdp.FrontendUdp
        export interface FrontendUdp {
            dedicatedIpfo?: string[];
            defaultFarmId?: number;
            disabled: boolean;
            displayName?: string;
            frontendId: number;
            port: string;
            zone: string;
        }
    }
    export namespace status {
        //ipLoadbalancing.status.Component
        // fullName: ipLoadbalancing.status.Component.Component
        export interface Component {
            status: ipLoadbalancing.status.ComponentStatus;
            total: number;
        }
        //ipLoadbalancing.status.ComponentStatus
        // fullName: ipLoadbalancing.status.ComponentStatus.ComponentStatus
        export interface ComponentStatus {
            error: number;
            ok: number;
            unknown: number;
            warn: number;
        }
        //ipLoadbalancing.status.Enum
        export type Enum = "error" | "ok" | "unknown" | "warn"
        //ipLoadbalancing.status.Service
        // fullName: ipLoadbalancing.status.Service.Service
        export interface Service {
            status: ipLoadbalancing.status.Enum;
        }
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
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}

/**
 * END API /ipLoadbalancing Models
 */
export function proxyIpLoadbalancing(ovhEngine: OvhRequestable): IpLoadbalancing {
    return buildOvhProxy(ovhEngine, '/ipLoadbalancing');
}
export default proxyIpLoadbalancing;
/**
 * Api Proxy model
 */// Apis harmony
// path /ipLoadbalancing
export interface IpLoadbalancing{
    // GET /ipLoadbalancing
    $get(): Promise<string[]>;
    availableZones: {
        // GET /ipLoadbalancing/availableZones
        $get(): Promise<string[]>;
    }
    $(serviceName: string): {
        // GET /ipLoadbalancing/{serviceName}
        $get(): Promise<ipLoadbalancing.Ip>;
        // PUT /ipLoadbalancing/{serviceName}
        $put(body?: {displayName?: string, ipLoadbalancing?: string, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: string, orderableZone?: ipLoadbalancing.OrderableZone[], serviceName?: string, sslConfiguration?: ipLoadbalancing.SslConfigurationEnum, state?: ipLoadbalancing.IpStateEnum, vrackEligibility?: boolean, vrackName?: string, zone?: string[]}): Promise<void>;
        availableFarmProbes: {
            // GET /ipLoadbalancing/{serviceName}/availableFarmProbes
            $get(): Promise<ipLoadbalancing.FarmAvailableProbe[]>;
        }
        availableFarmType: {
            // GET /ipLoadbalancing/{serviceName}/availableFarmType
            $get(): Promise<string[]>;
        }
        availableFrontendType: {
            // GET /ipLoadbalancing/{serviceName}/availableFrontendType
            $get(): Promise<string[]>;
        }
        availableRouteActions: {
            // GET /ipLoadbalancing/{serviceName}/availableRouteActions
            $get(): Promise<ipLoadbalancing.RouteAvailableAction[]>;
        }
        availableRouteRules: {
            // GET /ipLoadbalancing/{serviceName}/availableRouteRules
            $get(): Promise<ipLoadbalancing.RouteAvailableRule[]>;
        }
        changeContact: {
            // POST /ipLoadbalancing/{serviceName}/changeContact
            $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        confirmTermination: {
            // POST /ipLoadbalancing/{serviceName}/confirmTermination
            $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        definedFarms: {
            // GET /ipLoadbalancing/{serviceName}/definedFarms
            $get(param?: {vrackNetworkId?: number}): Promise<ipLoadbalancing.DefinedFarm[]>;
        }
        definedFrontends: {
            // GET /ipLoadbalancing/{serviceName}/definedFrontends
            $get(): Promise<ipLoadbalancing.DefinedFrontend[]>;
        }
        definedRoutes: {
            // GET /ipLoadbalancing/{serviceName}/definedRoutes
            $get(): Promise<ipLoadbalancing.DefinedRoute[]>;
        }
        failover: {
            // GET /ipLoadbalancing/{serviceName}/failover
            $get(): Promise<string[]>;
        }
        freeCertificate: {
            // POST /ipLoadbalancing/{serviceName}/freeCertificate
            $post(body?: {fqdn: string[]}): Promise<ipLoadbalancing.Task.Task>;
        }
        http: {
            farm: {
                // GET /ipLoadbalancing/{serviceName}/http/farm
                $get(param?: {vrackNetworkId?: number, zone?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/farm
                $post(body?: {balance?: ipLoadbalancing.BalanceHTTPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone: string}): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
                $(farmId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    $get(): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    $put(body?: {balance?: ipLoadbalancing.BalanceHTTPEnum, displayName?: string, farmId?: number, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone?: string}): Promise<void>;
                    server: {
                        // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
                        $get(param?: {address?: string, cookie?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
                        $post(body?: {address: string, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
                        $(serverId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            $get(): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
                            // PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            $put(body?: {address?: string, backendId?: number, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, serverId?: number, serverState?: ipLoadbalancing.ServerState[], ssl?: boolean, status?: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}): Promise<void>;
                        };
                    }
                };
            }
            frontend: {
                // GET /ipLoadbalancing/{serviceName}/http/frontend
                $get(param?: {defaultFarmId?: number, port?: string, zone?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/frontend
                $post(body?: {allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], port: string, redirectLocation?: string, ssl?: boolean, zone: string}): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
                $(frontendId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    $get(): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    $put(body?: {allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, frontendId?: number, hsts?: boolean, httpHeader?: string[], port?: string, redirectLocation?: string, ssl?: boolean, zone?: string}): Promise<void>;
                };
            }
            route: {
                // GET /ipLoadbalancing/{serviceName}/http/route
                $get(param?: {frontendId?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/route
                $post(body?: {action: ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, weight?: number}): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
                $(routeId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    $get(): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    $put(body?: {action?: ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, routeId?: number, rules?: ipLoadbalancing.RouteRule[], status?: ipLoadbalancing.RouteStatusEnum, weight?: number}): Promise<void>;
                    rule: {
                        // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
                        $get(): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
                        $post(body?: {displayName?: string, field: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                        $(ruleId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            $get(): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                            // PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            $put(body?: {displayName?: string, field?: string, match?: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, ruleId?: number, subField?: string}): Promise<void>;
                        };
                    }
                };
            }
        }
        instancesState: {
            // GET /ipLoadbalancing/{serviceName}/instancesState
            $get(): Promise<ipLoadbalancing.InstancesState[]>;
        }
        natIp: {
            // GET /ipLoadbalancing/{serviceName}/natIp
            $get(): Promise<ipLoadbalancing.NatIps[]>;
        }
        pendingChanges: {
            // GET /ipLoadbalancing/{serviceName}/pendingChanges
            $get(): Promise<ipLoadbalancing.PendingChanges[]>;
        }
        quota: {
            // GET /ipLoadbalancing/{serviceName}/quota
            $get(): Promise<string[]>;
            $(zone: string): {
                // GET /ipLoadbalancing/{serviceName}/quota/{zone}
                $get(): Promise<ipLoadbalancing.Quota.Quota>;
                // PUT /ipLoadbalancing/{serviceName}/quota/{zone}
                $put(body?: {alert?: number, included?: number, lastUpdateDate?: string, resetDate?: string, total?: number, zone?: string}): Promise<void>;
            };
        }
        quotaHistory: {
            // GET /ipLoadbalancing/{serviceName}/quotaHistory
            $get(param?: {historizedDate_from?: string, historizedDate_to?: string, zone?: string}): Promise<number[]>;
            $(id: number): {
                // GET /ipLoadbalancing/{serviceName}/quotaHistory/{id}
                $get(): Promise<ipLoadbalancing.QuotaHistory.QuotaHistory>;
            };
        }
        refresh: {
            // POST /ipLoadbalancing/{serviceName}/refresh
            $post(body?: {zone?: string}): Promise<ipLoadbalancing.Task.Task>;
        }
        serviceInfos: {
            // GET /ipLoadbalancing/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /ipLoadbalancing/{serviceName}/serviceInfos
            $put(body?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        ssl: {
            // GET /ipLoadbalancing/{serviceName}/ssl
            $get(param?: {fingerprint?: string, serial?: string, type?: ipLoadbalancing.SslTypeEnum}): Promise<number[]>;
            // POST /ipLoadbalancing/{serviceName}/ssl
            $post(body?: {certificate: string, chain?: string, displayName?: string, key: string}): Promise<ipLoadbalancing.Ssl.Ssl>;
            $(id: number): {
                // DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
                $delete(): Promise<void>;
                // GET /ipLoadbalancing/{serviceName}/ssl/{id}
                $get(): Promise<ipLoadbalancing.Ssl.Ssl>;
                // PUT /ipLoadbalancing/{serviceName}/ssl/{id}
                $put(body?: {displayName?: string, expireDate?: string, fingerprint?: string, id?: number, san?: string[], serial?: string, subject?: string, type?: ipLoadbalancing.SslTypeEnum}): Promise<void>;
            };
        }
        status: {
            // GET /ipLoadbalancing/{serviceName}/status
            $get(): Promise<ipLoadbalancing.Status>;
        }
        task: {
            // GET /ipLoadbalancing/{serviceName}/task
            $get(param?: {action?: ipLoadbalancing.TaskActionEnum, creationDate_from?: string, creationDate_to?: string, doneDate_from?: string, doneDate_to?: string, status?: ipLoadbalancing.TaskStatusEnum}): Promise<number[]>;
            $(id: number): {
                // GET /ipLoadbalancing/{serviceName}/task/{id}
                $get(): Promise<ipLoadbalancing.Task.Task>;
            };
        }
        tcp: {
            farm: {
                // GET /ipLoadbalancing/{serviceName}/tcp/farm
                $get(param?: {vrackNetworkId?: number, zone?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/farm
                $post(body?: {balance?: ipLoadbalancing.BalanceTCPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone: string}): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
                $(farmId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    $get(): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    $put(body?: {balance?: ipLoadbalancing.BalanceTCPEnum, displayName?: string, farmId?: number, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone?: string}): Promise<void>;
                    server: {
                        // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
                        $get(param?: {address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
                        $post(body?: {address: string, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
                        $(serverId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            $get(): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
                            // PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            $put(body?: {address?: string, backendId?: number, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, serverId?: number, serverState?: ipLoadbalancing.ServerState[], ssl?: boolean, status?: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}): Promise<void>;
                        };
                    }
                };
            }
            frontend: {
                // GET /ipLoadbalancing/{serviceName}/tcp/frontend
                $get(param?: {defaultFarmId?: number, port?: string, zone?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/frontend
                $post(body?: {allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, port: string, ssl?: boolean, zone: string}): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
                $(frontendId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    $get(): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    $put(body?: {allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, frontendId?: number, port?: string, ssl?: boolean, zone?: string}): Promise<void>;
                };
            }
            route: {
                // GET /ipLoadbalancing/{serviceName}/tcp/route
                $get(param?: {frontendId?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/route
                $post(body?: {action: ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, weight?: number}): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
                $(routeId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    $get(): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    $put(body?: {action?: ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, routeId?: number, rules?: ipLoadbalancing.RouteRule[], status?: ipLoadbalancing.RouteStatusEnum, weight?: number}): Promise<void>;
                    rule: {
                        // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
                        $get(): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
                        $post(body?: {displayName?: string, field: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                        $(ruleId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            $get(): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                            // PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            $put(body?: {displayName?: string, field?: string, match?: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, ruleId?: number, subField?: string}): Promise<void>;
                        };
                    }
                };
            }
        }
        terminate: {
            // POST /ipLoadbalancing/{serviceName}/terminate
            $post(): Promise<string>;
        }
        udp: {
            farm: {
                // GET /ipLoadbalancing/{serviceName}/udp/farm
                $get(param?: {vrackNetworkId?: number, zone?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/udp/farm
                $post(body?: {displayName?: string, port: number, vrackNetworkId?: number, zone: string}): Promise<ipLoadbalancing.backendUdp.BackendUdp>;
                $(farmId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                    $get(): Promise<ipLoadbalancing.backendUdp.BackendUdp>;
                    // PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                    $put(body?: {displayName?: string, farmId?: number, port?: number, vrackNetworkId?: number, zone?: string}): Promise<void>;
                    server: {
                        // GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
                        $get(param?: {address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
                        $post(body?: {address: string, displayName?: string, port?: number, status: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
                        $(serverId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                            $get(): Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
                            // PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                            $put(body?: {address?: string, backendId?: number, displayName?: string, port?: number, serverId?: number, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<void>;
                        };
                    }
                };
            }
            frontend: {
                // GET /ipLoadbalancing/{serviceName}/udp/frontend
                $get(param?: {defaultFarmId?: number, port?: string, zone?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/udp/frontend
                $post(body?: {dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string, port: string, zone: string}): Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
                $(frontendId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                    $get(): Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
                    // PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                    $put(body?: {dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string, frontendId?: number, port?: string, zone?: string}): Promise<void>;
                };
            }
        }
        vrack: {
            network: {
                // GET /ipLoadbalancing/{serviceName}/vrack/network
                $get(param?: {subnet?: string, vlan?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/vrack/network
                $post(body?: {displayName?: string, farmId?: number[], natIp: string, subnet: string, vlan?: number}): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                $(vrackNetworkId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    $get(): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                    // PUT /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    $put(body?: {displayName?: string, farmId?: ipLoadbalancing.DefinedFarm[], natIp?: string, subnet?: string, vlan?: number, vrackNetworkId?: number}): Promise<void>;
                    updateFarmId: {
                        // POST /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
                        $post(body?: {farmId: number[]}): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                    }
                };
            }
            networkCreationRules: {
                // GET /ipLoadbalancing/{serviceName}/vrack/networkCreationRules
                $get(): Promise<ipLoadbalancing.VrackNetworkCreationRules>;
            }
            status: {
                // GET /ipLoadbalancing/{serviceName}/vrack/status
                $get(): Promise<ipLoadbalancing.VrackInformation>;
            }
        }
        zone: {
            // GET /ipLoadbalancing/{serviceName}/zone
            $get(): Promise<string[]>;
            $(name: string): {
                // GET /ipLoadbalancing/{serviceName}/zone/{name}
                $get(): Promise<ipLoadbalancing.Zone.Zone>;
                cancelTermination: {
                    // POST /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
                    $post(): Promise<void>;
                }
                terminate: {
                    // POST /ipLoadbalancing/{serviceName}/zone/{name}/terminate
                    $post(): Promise<void>;
                }
            };
        }
    };
// Api
  /**
   * Operations about the IPLB service
   * List available services
   */
  get(path: '/ipLoadbalancing'): () => Promise<string[]>;
  /**
   * Your IP load balancing
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}'): (params: {serviceName: string}) => Promise<ipLoadbalancing.Ip>;
  /**
   * availableFarmProbes operations
   * Available farm probes for health checks
   */
  get(path: '/ipLoadbalancing/{serviceName}/availableFarmProbes'): (params: {serviceName: string}) => Promise<ipLoadbalancing.FarmAvailableProbe[]>;
  /**
   * availableFarmType operations
   * Available farm types
   */
  get(path: '/ipLoadbalancing/{serviceName}/availableFarmType'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * availableFrontendType operations
   * Available frontend type
   */
  get(path: '/ipLoadbalancing/{serviceName}/availableFrontendType'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * availableRouteActions operations
   * Available route actions
   */
  get(path: '/ipLoadbalancing/{serviceName}/availableRouteActions'): (params: {serviceName: string}) => Promise<ipLoadbalancing.RouteAvailableAction[]>;
  /**
   * availableRouteRules operations
   * Available route match rules
   */
  get(path: '/ipLoadbalancing/{serviceName}/availableRouteRules'): (params: {serviceName: string}) => Promise<ipLoadbalancing.RouteAvailableRule[]>;
  /**
   * definedFarms operations
   * List of defined farms, and whether they are HTTP, TCP or UDP
   */
  get(path: '/ipLoadbalancing/{serviceName}/definedFarms'): (params: {serviceName: string, vrackNetworkId?: number}) => Promise<ipLoadbalancing.DefinedFarm[]>;
  /**
   * definedFrontends operations
   * List of defined frontends, and whether they are HTTP, TCP or UDP
   */
  get(path: '/ipLoadbalancing/{serviceName}/definedFrontends'): (params: {serviceName: string}) => Promise<ipLoadbalancing.DefinedFrontend[]>;
  /**
   * definedRoutes operations
   * List of defined routes, and whether they are HTTP or TCP
   */
  get(path: '/ipLoadbalancing/{serviceName}/definedRoutes'): (params: {serviceName: string}) => Promise<ipLoadbalancing.DefinedRoute[]>;
  /**
   * failover operations
   * List all failover ip routed to this IPLB
   */
  get(path: '/ipLoadbalancing/{serviceName}/failover'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * List the ipLoadbalancing.backendHttp.BackendHttp objects
   * HTTP Farm for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/farm'): (params: {serviceName: string, vrackNetworkId?: number, zone?: string}) => Promise<number[]>;
  /**
   * HTTP Farm
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}'): (params: {farmId: number, serviceName: string}) => Promise<ipLoadbalancing.backendHttp.BackendHttp>;
  /**
   * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects
   * HTTP Farm's Servers
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server'): (params: {farmId: number, serviceName: string, address?: string, cookie?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}) => Promise<number[]>;
  /**
   * HTTP Farm's Server
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string}) => Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
  /**
   * List the ipLoadbalancing.frontendHttp.FrontendHttp objects
   * HTTP frontends for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/frontend'): (params: {serviceName: string, defaultFarmId?: number, port?: string, zone?: string}) => Promise<number[]>;
  /**
   * Frontend HTTP
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string}) => Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
  /**
   * List the ipLoadbalancing.RouteHttp.RouteHttp objects
   * HTTP routes for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/route'): (params: {serviceName: string, frontendId?: number}) => Promise<number[]>;
  /**
   * HTTP Route
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}'): (params: {routeId: number, serviceName: string}) => Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects
   * HTTP routes for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule'): (params: {routeId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Rule of a route
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}'): (params: {routeId: number, ruleId: number, serviceName: string}) => Promise<ipLoadbalancing.RouteRule.RouteRule>;
  /**
   * instancesState operations
   * Get the effective state of your IPLB instances on IPLB servers
   */
  get(path: '/ipLoadbalancing/{serviceName}/instancesState'): (params: {serviceName: string}) => Promise<ipLoadbalancing.InstancesState[]>;
  /**
   * natIp operations
   * Ip subnet used by OVH to nat requests on your IPLB to your backends. You must ensure that your backends are not part of a network that overlap with this one
   */
  get(path: '/ipLoadbalancing/{serviceName}/natIp'): (params: {serviceName: string}) => Promise<ipLoadbalancing.NatIps[]>;
  /**
   * pendingChanges operations
   * List the pending changes on your Load Balancer configuration, per zone
   */
  get(path: '/ipLoadbalancing/{serviceName}/pendingChanges'): (params: {serviceName: string}) => Promise<ipLoadbalancing.PendingChanges[]>;
  /**
   * List the ipLoadbalancing.Quota.Quota objects
   * Available quota informations for current billing period per zone
   */
  get(path: '/ipLoadbalancing/{serviceName}/quota'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Quota informations for current billing period for this zone
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/quota/{zone}'): (params: {serviceName: string, zone: string}) => Promise<ipLoadbalancing.Quota.Quota>;
  /**
   * List the ipLoadbalancing.QuotaHistory.QuotaHistory objects
   * Quota history informations, per month
   */
  get(path: '/ipLoadbalancing/{serviceName}/quotaHistory'): (params: {serviceName: string, historizedDate_from?: string, historizedDate_to?: string, zone?: string}) => Promise<number[]>;
  /**
   * QuotaHistory
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/quotaHistory/{id}'): (params: {id: number, serviceName: string}) => Promise<ipLoadbalancing.QuotaHistory.QuotaHistory>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the ipLoadbalancing.Ssl.Ssl objects
   * Ssl for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/ssl'): (params: {serviceName: string, fingerprint?: string, serial?: string, type?: ipLoadbalancing.SslTypeEnum}) => Promise<number[]>;
  /**
   * Ssl
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/ssl/{id}'): (params: {id: number, serviceName: string}) => Promise<ipLoadbalancing.Ssl.Ssl>;
  /**
   * status operations
   * Get the global status of your IPLB
   */
  get(path: '/ipLoadbalancing/{serviceName}/status'): (params: {serviceName: string}) => Promise<ipLoadbalancing.Status>;
  /**
   * List the ipLoadbalancing.Task.Task objects
   * Task for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/task'): (params: {serviceName: string, action?: ipLoadbalancing.TaskActionEnum, creationDate_from?: string, creationDate_to?: string, doneDate_from?: string, doneDate_to?: string, status?: ipLoadbalancing.TaskStatusEnum}) => Promise<number[]>;
  /**
   * IP Load Balancing Operations
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/task/{id}'): (params: {id: number, serviceName: string}) => Promise<ipLoadbalancing.Task.Task>;
  /**
   * List the ipLoadbalancing.backendTcp.BackendTcp objects
   * TCP Farm for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/farm'): (params: {serviceName: string, vrackNetworkId?: number, zone?: string}) => Promise<number[]>;
  /**
   * TCP Farm
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}'): (params: {farmId: number, serviceName: string}) => Promise<ipLoadbalancing.backendTcp.BackendTcp>;
  /**
   * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects
   * TCP Farm's Servers
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server'): (params: {farmId: number, serviceName: string, address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}) => Promise<number[]>;
  /**
   * TCP Farm's Server
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string}) => Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
  /**
   * List the ipLoadbalancing.frontendTcp.FrontendTcp objects
   * TCP frontends for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/frontend'): (params: {serviceName: string, defaultFarmId?: number, port?: string, zone?: string}) => Promise<number[]>;
  /**
   * Frontend TCP
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string}) => Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
  /**
   * List the ipLoadbalancing.RouteTcp.RouteTcp objects
   * TCP routes for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/route'): (params: {serviceName: string, frontendId?: number}) => Promise<number[]>;
  /**
   * TCP Route
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}'): (params: {routeId: number, serviceName: string}) => Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects
   * HTTP routes for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule'): (params: {routeId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Rule of a route
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}'): (params: {routeId: number, ruleId: number, serviceName: string}) => Promise<ipLoadbalancing.RouteRule.RouteRule>;
  /**
   * List the ipLoadbalancing.backendUdp.BackendUdp objects
   * UDP Farm for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/udp/farm'): (params: {serviceName: string, vrackNetworkId?: number, zone?: string}) => Promise<number[]>;
  /**
   * UDP Farm
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}'): (params: {farmId: number, serviceName: string}) => Promise<ipLoadbalancing.backendUdp.BackendUdp>;
  /**
   * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects
   * UDP Farm's Servers
   */
  get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server'): (params: {farmId: number, serviceName: string, address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}) => Promise<number[]>;
  /**
   * UDP Farm's Server
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string}) => Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
  /**
   * List the ipLoadbalancing.frontendUdp.FrontendUdp objects
   * UDP frontends for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/udp/frontend'): (params: {serviceName: string, defaultFarmId?: number, port?: string, zone?: string}) => Promise<number[]>;
  /**
   * Frontend UDP
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string}) => Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
  /**
   * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects
   * Descriptions of private networks in the vRack attached to this Load Balancer
   */
  get(path: '/ipLoadbalancing/{serviceName}/vrack/network'): (params: {serviceName: string, subnet?: string, vlan?: number}) => Promise<number[]>;
  /**
   * Represents a private network in the vRack
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}'): (params: {serviceName: string, vrackNetworkId: number}) => Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
  /**
   * networkCreationRules operations
   * Rules to create a network attached to a vrack
   */
  get(path: '/ipLoadbalancing/{serviceName}/vrack/networkCreationRules'): (params: {serviceName: string}) => Promise<ipLoadbalancing.VrackNetworkCreationRules>;
  /**
   * status operations
   * Information about vRack for your Load Balancer
   */
  get(path: '/ipLoadbalancing/{serviceName}/vrack/status'): (params: {serviceName: string}) => Promise<ipLoadbalancing.VrackInformation>;
  /**
   * List the ipLoadbalancing.Zone.Zone objects
   * Zone for this iplb
   */
  get(path: '/ipLoadbalancing/{serviceName}/zone'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * IP Load Balancing Zone
   * Get this object properties
   */
  get(path: '/ipLoadbalancing/{serviceName}/zone/{name}'): (params: {name: string, serviceName: string}) => Promise<ipLoadbalancing.Zone.Zone>;
  /**
   * List of zone available for an IP load balancing
   * List of zone available for an IP load balancing
   */
  get(path: '/ipLoadbalancing/availableZones'): () => Promise<string[]>;
  /**
   * Your IP load balancing
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}'): (params: {serviceName: string, displayName?: string, ipLoadbalancing?: string, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: string, orderableZone?: ipLoadbalancing.OrderableZone[], sslConfiguration?: ipLoadbalancing.SslConfigurationEnum, state?: ipLoadbalancing.IpStateEnum, vrackEligibility?: boolean, vrackName?: string, zone?: string[]}) => Promise<void>;
  /**
   * HTTP Farm
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}'): (params: {farmId: number, serviceName: string, balance?: ipLoadbalancing.BalanceHTTPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone?: string}) => Promise<void>;
  /**
   * HTTP Farm's Server
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string, address?: string, backendId?: number, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, serverState?: ipLoadbalancing.ServerState[], ssl?: boolean, status?: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}) => Promise<void>;
  /**
   * Frontend HTTP
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], port?: string, redirectLocation?: string, ssl?: boolean, zone?: string}) => Promise<void>;
  /**
   * HTTP Route
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}'): (params: {routeId: number, serviceName: string, action?: ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, rules?: ipLoadbalancing.RouteRule[], status?: ipLoadbalancing.RouteStatusEnum, weight?: number}) => Promise<void>;
  /**
   * Rule of a route
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}'): (params: {routeId: number, ruleId: number, serviceName: string, displayName?: string, field?: string, match?: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}) => Promise<void>;
  /**
   * Quota informations for current billing period for this zone
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/quota/{zone}'): (params: {serviceName: string, zone: string, alert?: number, included?: number, lastUpdateDate?: string, resetDate?: string, total?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Ssl
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/ssl/{id}'): (params: {id: number, serviceName: string, displayName?: string, expireDate?: string, fingerprint?: string, san?: string[], serial?: string, subject?: string, type?: ipLoadbalancing.SslTypeEnum}) => Promise<void>;
  /**
   * TCP Farm
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}'): (params: {farmId: number, serviceName: string, balance?: ipLoadbalancing.BalanceTCPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone?: string}) => Promise<void>;
  /**
   * TCP Farm's Server
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string, address?: string, backendId?: number, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, serverState?: ipLoadbalancing.ServerState[], ssl?: boolean, status?: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}) => Promise<void>;
  /**
   * Frontend TCP
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, port?: string, ssl?: boolean, zone?: string}) => Promise<void>;
  /**
   * TCP Route
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}'): (params: {routeId: number, serviceName: string, action?: ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, rules?: ipLoadbalancing.RouteRule[], status?: ipLoadbalancing.RouteStatusEnum, weight?: number}) => Promise<void>;
  /**
   * Rule of a route
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}'): (params: {routeId: number, ruleId: number, serviceName: string, displayName?: string, field?: string, match?: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}) => Promise<void>;
  /**
   * UDP Farm
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}'): (params: {farmId: number, serviceName: string, displayName?: string, port?: number, vrackNetworkId?: number, zone?: string}) => Promise<void>;
  /**
   * UDP Farm's Server
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string, address?: string, backendId?: number, displayName?: string, port?: number, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}) => Promise<void>;
  /**
   * Frontend UDP
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string, dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string, port?: string, zone?: string}) => Promise<void>;
  /**
   * Represents a private network in the vRack
   * Alter this object properties
   */
  put(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}'): (params: {serviceName: string, vrackNetworkId: number, displayName?: string, farmId?: ipLoadbalancing.DefinedFarm[], natIp?: string, subnet?: string, vlan?: number}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/ipLoadbalancing/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/ipLoadbalancing/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * freeCertificate operations
   * Order a free certificate. We order and deliver it for you
   */
  post(path: '/ipLoadbalancing/{serviceName}/freeCertificate'): (params: {serviceName: string, fqdn: string[]}) => Promise<ipLoadbalancing.Task.Task>;
  /**
   * List the ipLoadbalancing.backendHttp.BackendHttp objects
   * Add a new HTTP Farm on your IP Load Balancing
   */
  post(path: '/ipLoadbalancing/{serviceName}/http/farm'): (params: {serviceName: string, balance?: ipLoadbalancing.BalanceHTTPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone: string}) => Promise<ipLoadbalancing.backendHttp.BackendHttp>;
  /**
   * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects
   * Add a server to an HTTP Farm
   */
  post(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server'): (params: {farmId: number, serviceName: string, address: string, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}) => Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
  /**
   * List the ipLoadbalancing.frontendHttp.FrontendHttp objects
   * Add a new http frontend on your IP Load Balancing
   */
  post(path: '/ipLoadbalancing/{serviceName}/http/frontend'): (params: {serviceName: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], port: string, redirectLocation?: string, ssl?: boolean, zone: string}) => Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
  /**
   * List the ipLoadbalancing.RouteHttp.RouteHttp objects
   * Add a new HTTP route to your frontend
   */
  post(path: '/ipLoadbalancing/{serviceName}/http/route'): (params: {serviceName: string, action: ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, weight?: number}) => Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects
   * Add a new rule to your route
   */
  post(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule'): (params: {routeId: number, serviceName: string, displayName?: string, field: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}) => Promise<ipLoadbalancing.RouteRule.RouteRule>;
  /**
   * refresh operations
   * Apply the configuration to your iplb
   */
  post(path: '/ipLoadbalancing/{serviceName}/refresh'): (params: {serviceName: string, zone?: string}) => Promise<ipLoadbalancing.Task.Task>;
  /**
   * List the ipLoadbalancing.Ssl.Ssl objects
   * Add a new custom SSL certificate on your IP Load Balancing
   */
  post(path: '/ipLoadbalancing/{serviceName}/ssl'): (params: {serviceName: string, certificate: string, chain?: string, displayName?: string, key: string}) => Promise<ipLoadbalancing.Ssl.Ssl>;
  /**
   * List the ipLoadbalancing.backendTcp.BackendTcp objects
   * Add a new TCP Farm on your IP Load Balancing
   */
  post(path: '/ipLoadbalancing/{serviceName}/tcp/farm'): (params: {serviceName: string, balance?: ipLoadbalancing.BalanceTCPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone: string}) => Promise<ipLoadbalancing.backendTcp.BackendTcp>;
  /**
   * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects
   * Add a server to a TCP Farm
   */
  post(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server'): (params: {farmId: number, serviceName: string, address: string, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}) => Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
  /**
   * List the ipLoadbalancing.frontendTcp.FrontendTcp objects
   * Add a new TCP frontend on your IP Load Balancing
   */
  post(path: '/ipLoadbalancing/{serviceName}/tcp/frontend'): (params: {serviceName: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, port: string, ssl?: boolean, zone: string}) => Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
  /**
   * List the ipLoadbalancing.RouteTcp.RouteTcp objects
   * Add a new TCP route to your frontend
   */
  post(path: '/ipLoadbalancing/{serviceName}/tcp/route'): (params: {serviceName: string, action: ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, weight?: number}) => Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects
   * Add a new rule to your route
   */
  post(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule'): (params: {routeId: number, serviceName: string, displayName?: string, field: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}) => Promise<ipLoadbalancing.RouteRule.RouteRule>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/ipLoadbalancing/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * List the ipLoadbalancing.backendUdp.BackendUdp objects
   * Add a new UDP Farm on your IP Load Balancing
   */
  post(path: '/ipLoadbalancing/{serviceName}/udp/farm'): (params: {serviceName: string, displayName?: string, port: number, vrackNetworkId?: number, zone: string}) => Promise<ipLoadbalancing.backendUdp.BackendUdp>;
  /**
   * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects
   * Add a server to an UDP Farm
   */
  post(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server'): (params: {farmId: number, serviceName: string, address: string, displayName?: string, port?: number, status: ipLoadbalancing.BackendCustomerServerStatusEnum}) => Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
  /**
   * List the ipLoadbalancing.frontendUdp.FrontendUdp objects
   * Add a new UDP frontend on your IP Load Balancing
   */
  post(path: '/ipLoadbalancing/{serviceName}/udp/frontend'): (params: {serviceName: string, dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string, port: string, zone: string}) => Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
  /**
   * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects
   * Add a description of a private network in the attached vRack
   */
  post(path: '/ipLoadbalancing/{serviceName}/vrack/network'): (params: {serviceName: string, displayName?: string, farmId?: number[], natIp: string, subnet: string, vlan?: number}) => Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
  /**
   * updateFarmId operations
   * Update farm attached to that vrack network id
   */
  post(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId'): (params: {serviceName: string, vrackNetworkId: number, farmId: number[]}) => Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
  /**
   * cancelTermination operations
   * Cancel the termination request of your service zone option
   */
  post(path: '/ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination'): (params: {name: string, serviceName: string}) => Promise<void>;
  /**
   * terminate operations
   * Terminate your service zone option
   */
  post(path: '/ipLoadbalancing/{serviceName}/zone/{name}/terminate'): (params: {name: string, serviceName: string}) => Promise<void>;
  /**
   * HTTP Farm
   * Delete an HTTP Farm
   */
  delete(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}'): (params: {farmId: number, serviceName: string}) => Promise<void>;
  /**
   * HTTP Farm's Server
   * Delete a server from an HTTP Farm
   */
  delete(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string}) => Promise<void>;
  /**
   * Frontend HTTP
   * Delete an HTTP frontend
   */
  delete(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string}) => Promise<void>;
  /**
   * HTTP Route
   * Delete this HTTP route
   */
  delete(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}'): (params: {routeId: number, serviceName: string}) => Promise<void>;
  /**
   * Rule of a route
   * Delete this rule from the route
   */
  delete(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}'): (params: {routeId: number, ruleId: number, serviceName: string}) => Promise<void>;
  /**
   * Ssl
   * Delete a custom SSL certificate
   */
  delete(path: '/ipLoadbalancing/{serviceName}/ssl/{id}'): (params: {id: number, serviceName: string}) => Promise<void>;
  /**
   * TCP Farm
   * Delete a TCP Farm
   */
  delete(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}'): (params: {farmId: number, serviceName: string}) => Promise<void>;
  /**
   * TCP Farm's Server
   * Delete a server from a TCP Farm
   */
  delete(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string}) => Promise<void>;
  /**
   * Frontend TCP
   * Delete an TCP frontend
   */
  delete(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string}) => Promise<void>;
  /**
   * TCP Route
   * Delete this TCP route
   */
  delete(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}'): (params: {routeId: number, serviceName: string}) => Promise<void>;
  /**
   * Rule of a route
   * Delete this rule from the route
   */
  delete(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}'): (params: {routeId: number, ruleId: number, serviceName: string}) => Promise<void>;
  /**
   * UDP Farm
   * Delete an UDP Farm
   */
  delete(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}'): (params: {farmId: number, serviceName: string}) => Promise<void>;
  /**
   * UDP Farm's Server
   * Delete a server from an UDP Farm
   */
  delete(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}'): (params: {farmId: number, serverId: number, serviceName: string}) => Promise<void>;
  /**
   * Frontend UDP
   * Delete an UDP frontend
   */
  delete(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}'): (params: {frontendId: number, serviceName: string}) => Promise<void>;
  /**
   * Represents a private network in the vRack
   * Delete this description of a private network in the vRack. It must not be used by any farm server
   */
  delete(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}'): (params: {serviceName: string, vrackNetworkId: number}) => Promise<void>;
}
/**
 * classic Model
 */
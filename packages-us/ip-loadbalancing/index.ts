import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /ipLoadbalancing Models
 * Source: https://api.us.ovhcloud.com/1.0/ipLoadbalancing.json
 */
export namespace ipLoadbalancing {
    // type fullname: ipLoadbalancing.BackendCustomerServerStatusEnum
    export type BackendCustomerServerStatusEnum = "active" | "inactive"
    // interface fullName: ipLoadbalancing.BackendProbe.BackendProbe
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
    // type fullname: ipLoadbalancing.BalanceHTTPEnum
    export type BalanceHTTPEnum = "first" | "leastconn" | "roundrobin" | "source" | "uri"
    // type fullname: ipLoadbalancing.BalanceTCPEnum
    export type BalanceTCPEnum = "first" | "leastconn" | "roundrobin" | "source"
    // interface fullName: ipLoadbalancing.DefinedFarm.DefinedFarm
    export interface DefinedFarm {
        id: number;
        type: string;
    }
    // interface fullName: ipLoadbalancing.DefinedFrontend.DefinedFrontend
    export interface DefinedFrontend {
        id: number;
        type: string;
    }
    // interface fullName: ipLoadbalancing.DefinedRoute.DefinedRoute
    export interface DefinedRoute {
        displayName?: string;
        routeId: number;
        type: string;
    }
    // interface fullName: ipLoadbalancing.FarmAvailableProbe.FarmAvailableProbe
    export interface FarmAvailableProbe {
        matches: string[];
        method?: string[];
        negatableMatches: string[];
        port: boolean;
        type: string;
        url: boolean;
    }
    // interface fullName: ipLoadbalancing.InstancesState.InstancesState
    export interface InstancesState {
        internalId: number;
        lastUpdateDate: string;
        state: string;
        zone: string;
    }
    // interface fullName: ipLoadbalancing.Ip.Ip
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
    // type fullname: ipLoadbalancing.IpStateEnum
    export type IpStateEnum = "blacklisted" | "deleted" | "free" | "ok" | "quarantined" | "suspended"
    // interface fullName: ipLoadbalancing.NatIps.NatIps
    export interface NatIps {
        ip: string[];
        zone: string;
    }
    // interface fullName: ipLoadbalancing.OrderableZone.OrderableZone
    export interface OrderableZone {
        name: string;
        planCode: string;
    }
    // interface fullName: ipLoadbalancing.PendingChanges.PendingChanges
    export interface PendingChanges {
        number: number;
        zone: string;
    }
    // type fullname: ipLoadbalancing.ProbeExpectMatchEnum
    export type ProbeExpectMatchEnum = "contains" | "default" | "internal" | "matches" | "status"
    // type fullname: ipLoadbalancing.ProbeMethodEnum
    export type ProbeMethodEnum = "GET" | "HEAD" | "OPTIONS" | "internal"
    // type fullname: ipLoadbalancing.ProbeTypeEnum
    export type ProbeTypeEnum = "http" | "internal" | "mysql" | "oco" | "pgsql" | "smtp" | "tcp"
    // type fullname: ipLoadbalancing.ProxyProtocolVersionEnum
    export type ProxyProtocolVersionEnum = "v1" | "v2" | "v2-ssl" | "v2-ssl-cn"
    export namespace Quota {
        // interface fullName: ipLoadbalancing.Quota.Quota.Quota
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
        // interface fullName: ipLoadbalancing.QuotaHistory.QuotaHistory.QuotaHistory
        export interface QuotaHistory {
            historizedDate: string;
            id: number;
            lastUpdateDate: string;
            resetDate: string;
            total: number;
            zone: string;
        }
    }
    // interface fullName: ipLoadbalancing.RouteAvailableAction.RouteAvailableAction
    export interface RouteAvailableAction {
        destination?: string;
        name: string;
        status?: number[];
        type: string;
    }
    // interface fullName: ipLoadbalancing.RouteAvailableRule.RouteAvailableRule
    export interface RouteAvailableRule {
        enum?: string[];
        hasSubField: boolean;
        matches: string[];
        name: string;
        pattern: string;
        type: string;
    }
    export namespace RouteHttp {
        // interface fullName: ipLoadbalancing.RouteHttp.RouteHttp.RouteHttp
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
    // interface fullName: ipLoadbalancing.RouteHttpAction.RouteHttpAction
    export interface RouteHttpAction {
        status?: number;
        target?: string;
        type: string;
    }
    // interface fullName: ipLoadbalancing.RouteRule.RouteRule
    export interface RouteRule {
        field: string;
        match: ipLoadbalancing.RouteRuleMatchesEnum;
        negate: boolean;
        pattern?: string;
        ruleId: number;
        subField?: string;
    }
    export namespace RouteRule {
        // interface fullName: ipLoadbalancing.RouteRule.RouteRule.RouteRule
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
    // type fullname: ipLoadbalancing.RouteRuleMatchesEnum
    export type RouteRuleMatchesEnum = "contains" | "endswith" | "exists" | "in" | "internal" | "is" | "matches" | "startswith"
    // type fullname: ipLoadbalancing.RouteStatusEnum
    export type RouteStatusEnum = "creating" | "deleting" | "internal" | "ok" | "updating"
    export namespace RouteTcp {
        // interface fullName: ipLoadbalancing.RouteTcp.RouteTcp.RouteTcp
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
    // interface fullName: ipLoadbalancing.RouteTcpAction.RouteTcpAction
    export interface RouteTcpAction {
        target?: string;
        type: string;
    }
    // interface fullName: ipLoadbalancing.ServerState.ServerState
    export interface ServerState {
        checkCode?: string;
        checkStatus?: string;
        checkTime?: string;
        instanceId: number;
        lastCheckContent?: string;
        status?: string;
    }
    export namespace Ssl {
        // interface fullName: ipLoadbalancing.Ssl.Ssl.Ssl
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
    // type fullname: ipLoadbalancing.SslConfigurationEnum
    export type SslConfigurationEnum = "intermediate" | "modern"
    // type fullname: ipLoadbalancing.SslTypeEnum
    export type SslTypeEnum = "built" | "built_not_routed" | "custom"
    // interface fullName: ipLoadbalancing.Status.Status
    export interface Status {
        farms: ipLoadbalancing.status.Component;
        frontends: ipLoadbalancing.status.Component;
        servers: ipLoadbalancing.status.Component;
        service: ipLoadbalancing.status.Service;
    }
    // type fullname: ipLoadbalancing.StickinessHTTPEnum
    export type StickinessHTTPEnum = "cookie" | "sourceIp"
    // type fullname: ipLoadbalancing.StickinessTCPEnum
    export type StickinessTCPEnum = "sourceIp"
    export namespace Task {
        // interface fullName: ipLoadbalancing.Task.Task.Task
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
    // type fullname: ipLoadbalancing.TaskActionEnum
    export type TaskActionEnum = "deleteIplb" | "deployIplb" | "install" | "installIplb" | "installZone" | "orderFreeCertificate" | "orderPaidCertificate" | "orderSsl" | "refreshIplb" | "releaseIplb" | "releaseIplbZone" | "reopenIplb" | "suspendIplb" | "suspendZone" | "switchToIplbNextGenerationApi" | "vrackAttach" | "vrackDetach"
    // type fullname: ipLoadbalancing.TaskStatusEnum
    export type TaskStatusEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "todo"
    // interface fullName: ipLoadbalancing.VrackInformation.VrackInformation
    export interface VrackInformation {
        state: ipLoadbalancing.VrackStateEnum;
        task: number[];
        vrackName?: string;
    }
    export namespace VrackNetwork {
        // interface fullName: ipLoadbalancing.VrackNetwork.VrackNetwork.VrackNetwork
        export interface VrackNetwork {
            displayName?: string;
            farmId: ipLoadbalancing.DefinedFarm[];
            natIp: string;
            subnet: string;
            vlan: number;
            vrackNetworkId: number;
        }
    }
    // interface fullName: ipLoadbalancing.VrackNetworkCreationRules.VrackNetworkCreationRules
    export interface VrackNetworkCreationRules {
        minNatIps: number;
        remainingNetworks: number;
        vrackName: string;
    }
    // type fullname: ipLoadbalancing.VrackStateEnum
    export type VrackStateEnum = "activating" | "active" | "deactivating" | "inactive"
    // interface fullName: ipLoadbalancing.VrackTransparentGateways.VrackTransparentGateways
    export interface VrackTransparentGateways {
        address: string;
        gateway: string;
        vlan: number;
    }
    export namespace VrackTransparentIp {
        // interface fullName: ipLoadbalancing.VrackTransparentIp.VrackTransparentIp.VrackTransparentIp
        export interface VrackTransparentIp {
            address: string;
            farmId: number;
            id: number;
            serverId: number;
            slotId: number;
        }
    }
    export namespace Zone {
        // interface fullName: ipLoadbalancing.Zone.Zone.Zone
        export interface Zone {
            name: string;
            state: string;
        }
    }
    export namespace backendHttp {
        // interface fullName: ipLoadbalancing.backendHttp.BackendHttp.BackendHttp
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
        // interface fullName: ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer.BackendHTTPServer
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
        // interface fullName: ipLoadbalancing.backendTcp.BackendTcp.BackendTcp
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
        // interface fullName: ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer.BackendTCPServer
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
    export namespace frontendHttp {
        // interface fullName: ipLoadbalancing.frontendHttp.FrontendHttp.FrontendHttp
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
        // interface fullName: ipLoadbalancing.frontendTcp.FrontendTcp.FrontendTcp
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
    export namespace status {
        // interface fullName: ipLoadbalancing.status.Component.Component
        export interface Component {
            status: ipLoadbalancing.status.ComponentStatus;
            total: number;
        }
        // interface fullName: ipLoadbalancing.status.ComponentStatus.ComponentStatus
        export interface ComponentStatus {
            error: number;
            ok: number;
            unknown: number;
            warn: number;
        }
        // type fullname: ipLoadbalancing.status.Enum
        export type Enum = "error" | "ok" | "unknown" | "warn"
        // interface fullName: ipLoadbalancing.status.Service.Service
        export interface Service {
            status: ipLoadbalancing.status.Enum;
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
export interface IpLoadbalancing {
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
        $put(params?: { displayName?: string, ipLoadbalancing?: string, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: string, orderableZone?: ipLoadbalancing.OrderableZone[], serviceName?: string, sslConfiguration?: ipLoadbalancing.SslConfigurationEnum, state?: ipLoadbalancing.IpStateEnum, vrackEligibility?: boolean, vrackName?: string, zone?: string[] }): Promise<void>;
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
        confirmTermination: {
            // POST /ipLoadbalancing/{serviceName}/confirmTermination
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
        }
        definedFarms: {
            // GET /ipLoadbalancing/{serviceName}/definedFarms
            $get(params?: { vrackNetworkId?: number }): Promise<ipLoadbalancing.DefinedFarm[]>;
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
            $post(params: { fqdn: string[] }): Promise<ipLoadbalancing.Task.Task>;
        }
        http: {
            farm: {
                // GET /ipLoadbalancing/{serviceName}/http/farm
                $get(params?: { vrackNetworkId?: number, zone?: string }): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/farm
                $post(params: { balance?: ipLoadbalancing.BalanceHTTPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone: string }): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
                $(farmId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    $get(): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    $put(params?: { balance?: ipLoadbalancing.BalanceHTTPEnum, displayName?: string, farmId?: number, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone?: string }): Promise<void>;
                    server: {
                        // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
                        $get(params?: { address?: string, cookie?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum }): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
                        $post(params: { address: string, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number }): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
                        $(serverId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            $get(): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
                            // PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            $put(params?: { address?: string, backendId?: number, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, serverId?: number, serverState?: ipLoadbalancing.ServerState[], ssl?: boolean, status?: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number }): Promise<void>;
                        };
                    }
                };
            }
            frontend: {
                // GET /ipLoadbalancing/{serviceName}/http/frontend
                $get(params?: { defaultFarmId?: number, port?: string, zone?: string }): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/frontend
                $post(params: { allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], port: string, redirectLocation?: string, ssl?: boolean, zone: string }): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
                $(frontendId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    $get(): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    $put(params?: { allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, frontendId?: number, hsts?: boolean, httpHeader?: string[], port?: string, redirectLocation?: string, ssl?: boolean, zone?: string }): Promise<void>;
                };
            }
            route: {
                // GET /ipLoadbalancing/{serviceName}/http/route
                $get(params?: { frontendId?: number }): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/route
                $post(params: { action: ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, weight?: number }): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
                $(routeId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    $get(): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    $put(params?: { action?: ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, routeId?: number, rules?: ipLoadbalancing.RouteRule[], status?: ipLoadbalancing.RouteStatusEnum, weight?: number }): Promise<void>;
                    rule: {
                        // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
                        $get(): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
                        $post(params: { displayName?: string, field: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string }): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                        $(ruleId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            $get(): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                            // PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            $put(params?: { displayName?: string, field?: string, match?: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, ruleId?: number, subField?: string }): Promise<void>;
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
                $put(params?: { alert?: number, included?: number, lastUpdateDate?: string, resetDate?: string, total?: number, zone?: string }): Promise<void>;
            };
        }
        quotaHistory: {
            // GET /ipLoadbalancing/{serviceName}/quotaHistory
            $get(params?: { historizedDate_from?: string, historizedDate_to?: string, zone?: string }): Promise<number[]>;
            $(id: number): {
                // GET /ipLoadbalancing/{serviceName}/quotaHistory/{id}
                $get(): Promise<ipLoadbalancing.QuotaHistory.QuotaHistory>;
            };
        }
        refresh: {
            // POST /ipLoadbalancing/{serviceName}/refresh
            $post(params?: { zone?: string }): Promise<ipLoadbalancing.Task.Task>;
        }
        serviceInfos: {
            // GET /ipLoadbalancing/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /ipLoadbalancing/{serviceName}/serviceInfos
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
        }
        ssl: {
            // GET /ipLoadbalancing/{serviceName}/ssl
            $get(params?: { fingerprint?: string, serial?: string, type?: ipLoadbalancing.SslTypeEnum }): Promise<number[]>;
            // POST /ipLoadbalancing/{serviceName}/ssl
            $post(params: { certificate: string, chain?: string, displayName?: string, key: string }): Promise<ipLoadbalancing.Ssl.Ssl>;
            $(id: number): {
                // DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
                $delete(): Promise<void>;
                // GET /ipLoadbalancing/{serviceName}/ssl/{id}
                $get(): Promise<ipLoadbalancing.Ssl.Ssl>;
                // PUT /ipLoadbalancing/{serviceName}/ssl/{id}
                $put(params?: { displayName?: string, expireDate?: string, fingerprint?: string, id?: number, san?: string[], serial?: string, subject?: string, type?: ipLoadbalancing.SslTypeEnum }): Promise<void>;
            };
        }
        status: {
            // GET /ipLoadbalancing/{serviceName}/status
            $get(): Promise<ipLoadbalancing.Status>;
        }
        task: {
            // GET /ipLoadbalancing/{serviceName}/task
            $get(params?: { action?: ipLoadbalancing.TaskActionEnum, creationDate_from?: string, creationDate_to?: string, doneDate_from?: string, doneDate_to?: string, status?: ipLoadbalancing.TaskStatusEnum }): Promise<number[]>;
            $(id: number): {
                // GET /ipLoadbalancing/{serviceName}/task/{id}
                $get(): Promise<ipLoadbalancing.Task.Task>;
            };
        }
        tcp: {
            farm: {
                // GET /ipLoadbalancing/{serviceName}/tcp/farm
                $get(params?: { vrackNetworkId?: number, zone?: string }): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/farm
                $post(params: { balance?: ipLoadbalancing.BalanceTCPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone: string }): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
                $(farmId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    $get(): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    $put(params?: { balance?: ipLoadbalancing.BalanceTCPEnum, displayName?: string, farmId?: number, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone?: string }): Promise<void>;
                    server: {
                        // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
                        $get(params?: { address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum }): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
                        $post(params: { address: string, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number }): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
                        $(serverId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            $get(): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
                            // PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            $put(params?: { address?: string, backendId?: number, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, serverId?: number, serverState?: ipLoadbalancing.ServerState[], ssl?: boolean, status?: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number }): Promise<void>;
                        };
                    }
                };
            }
            frontend: {
                // GET /ipLoadbalancing/{serviceName}/tcp/frontend
                $get(params?: { defaultFarmId?: number, port?: string, zone?: string }): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/frontend
                $post(params: { allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, port: string, ssl?: boolean, zone: string }): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
                $(frontendId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    $get(): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    $put(params?: { allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, frontendId?: number, port?: string, ssl?: boolean, zone?: string }): Promise<void>;
                };
            }
            route: {
                // GET /ipLoadbalancing/{serviceName}/tcp/route
                $get(params?: { frontendId?: number }): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/route
                $post(params: { action: ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, weight?: number }): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
                $(routeId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    $get(): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    $put(params?: { action?: ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, routeId?: number, rules?: ipLoadbalancing.RouteRule[], status?: ipLoadbalancing.RouteStatusEnum, weight?: number }): Promise<void>;
                    rule: {
                        // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
                        $get(): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
                        $post(params: { displayName?: string, field: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string }): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                        $(ruleId: number): {
                            // DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            $delete(): Promise<void>;
                            // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            $get(): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                            // PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            $put(params?: { displayName?: string, field?: string, match?: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, ruleId?: number, subField?: string }): Promise<void>;
                        };
                    }
                };
            }
        }
        terminate: {
            // POST /ipLoadbalancing/{serviceName}/terminate
            $post(): Promise<string>;
        }
        vrack: {
            network: {
                // GET /ipLoadbalancing/{serviceName}/vrack/network
                $get(params?: { subnet?: string, vlan?: number }): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/vrack/network
                $post(params: { displayName?: string, farmId?: number[], natIp: string, subnet: string, vlan?: number }): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                $(vrackNetworkId: number): {
                    // DELETE /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    $delete(): Promise<void>;
                    // GET /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    $get(): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                    // PUT /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    $put(params?: { displayName?: string, farmId?: ipLoadbalancing.DefinedFarm[], natIp?: string, subnet?: string, vlan?: number, vrackNetworkId?: number }): Promise<void>;
                    updateFarmId: {
                        // POST /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
                        $post(params: { farmId: number[] }): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
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
}

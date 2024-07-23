import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /ipLoadbalancing Models
 * Source: https://eu.api.ovh.com/1.0/ipLoadbalancing.json
 */
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
    }
}
export namespace ipLoadbalancing {
    /**
     * Possible values for server status
     * type fullname: ipLoadbalancing.BackendCustomerServerStatusEnum
     */
    export type BackendCustomerServerStatusEnum = "active" | "inactive"
    /**
     * Probe used to determine if a backend is alive and can handle requests
     * interface fullName: ipLoadbalancing.BackendProbe.BackendProbe
     */
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
    /**
     * Possible values for load balancing balance algorithm
     * type fullname: ipLoadbalancing.BalanceHTTPEnum
     */
    export type BalanceHTTPEnum = "first" | "leastconn" | "roundrobin" | "source" | "uri"
    /**
     * Possible values for load balancing balance algorithm
     * type fullname: ipLoadbalancing.BalanceTCPEnum
     */
    export type BalanceTCPEnum = "first" | "leastconn" | "roundrobin" | "source"
    /**
     * a list of { type => [ Farm ids ] }
     * interface fullName: ipLoadbalancing.DefinedFarm.DefinedFarm
     */
    export interface DefinedFarm {
        id: number;
        type: string;
    }
    /**
     * a list of {type=>[Frontend ids]}
     * interface fullName: ipLoadbalancing.DefinedFrontend.DefinedFrontend
     */
    export interface DefinedFrontend {
        id: number;
        type: string;
    }
    /**
     * Defined routes name, type and id. Typically used to generate autocomplete lists.
     * interface fullName: ipLoadbalancing.DefinedRoute.DefinedRoute
     */
    export interface DefinedRoute {
        displayName?: string;
        routeId: number;
        type: string;
    }
    /**
     * Available farm probes options
     * interface fullName: ipLoadbalancing.FarmAvailableProbe.FarmAvailableProbe
     */
    export interface FarmAvailableProbe {
        matches: string[];
        method?: string[];
        negatableMatches: string[];
        port: boolean;
        type: string;
        url: boolean;
    }
    export namespace Frontend {
        /**
         * Frontend
         * interface fullName: ipLoadbalancing.Frontend.Frontend.Frontend
         */
        export interface Frontend {
            allowedSource?: string[];
            dedicatedIpfo?: string[];
            defaultBackendId?: number;
            defaultSslId?: number;
            deniedSource?: string[];
            disabled: boolean;
            hsts: boolean;
            httpHeader?: string[];
            id: number;
            port: string;
            redirectLocation?: string;
            ssl: boolean;
            type: ipLoadbalancing.ProxyTypeEnum;
            zone: string;
        }
    }
    /**
     * A structure describing the current state of an IPLB instances
     * interface fullName: ipLoadbalancing.InstancesState.InstancesState
     */
    export interface InstancesState {
        internalId: number;
        lastUpdateDate: string;
        state: string;
        zone: string;
    }
    /**
     * Your IP load balancing
     * interface fullName: ipLoadbalancing.Ip.Ip
     */
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
    /**
     * Possible values for load balancing IP state
     * type fullname: ipLoadbalancing.IpStateEnum
     */
    export type IpStateEnum = "blacklisted" | "deleted" | "free" | "ok" | "quarantined" | "suspended"
    /**
     * Your IP load balancing
     * interface fullName: ipLoadbalancing.IpWithIAM.IpWithIAM
     */
    export interface IpWithIAM {
        displayName?: string;
        iam?: iam.ResourceMetadata;
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
    /**
     * a list of {zone, nat Ip}
     * interface fullName: ipLoadbalancing.NatIps.NatIps
     */
    export interface NatIps {
        ip: string[];
        zone: string;
    }
    /**
     * Possible values for OnMarkedDown type
     * type fullname: ipLoadbalancing.OnMarkedDownEnum
     */
    export type OnMarkedDownEnum = "shutdown-sessions"
    /**
     * Available additional zone to order for a Load Balancer
     * interface fullName: ipLoadbalancing.OrderableZone.OrderableZone
     */
    export interface OrderableZone {
        name: string;
        planCode: string;
    }
    /**
     * The pending changes for a Load Balancer zone
     * interface fullName: ipLoadbalancing.PendingChanges.PendingChanges
     */
    export interface PendingChanges {
        number: number;
        zone: string;
    }
    /**
     * List of possible probe result matches. "status" is only supported for HTTP probes
     * type fullname: ipLoadbalancing.ProbeExpectMatchEnum
     */
    export type ProbeExpectMatchEnum = "contains" | "default" | "internal" | "matches" | "status"
    /**
     * List of possible method for HTTP probes. Consider using HEAD to save bandwidth when possible.
     * type fullname: ipLoadbalancing.ProbeMethodEnum
     */
    export type ProbeMethodEnum = "GET" | "HEAD" | "OPTIONS" | "internal"
    /**
     * Possible values for farm probe
     * type fullname: ipLoadbalancing.ProbeTypeEnum
     */
    export type ProbeTypeEnum = "http" | "internal" | "mysql" | "oco" | "pgsql" | "smtp" | "tcp"
    /**
     * Possible values for proxy type
     * type fullname: ipLoadbalancing.ProxyProtocolVersionEnum
     */
    export type ProxyProtocolVersionEnum = "v1" | "v2" | "v2-ssl" | "v2-ssl-cn"
    /**
     * Possible values for proxy type
     * type fullname: ipLoadbalancing.ProxyTypeEnum
     */
    export type ProxyTypeEnum = "http" | "tcp"
    export namespace Quota {
        /**
         * Quota informations for current billing period for this zone
         * interface fullName: ipLoadbalancing.Quota.Quota.Quota
         */
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
        /**
         * QuotaHistory
         * interface fullName: ipLoadbalancing.QuotaHistory.QuotaHistory.QuotaHistory
         */
        export interface QuotaHistory {
            historizedDate: string;
            id: number;
            lastUpdateDate: string;
            resetDate: string;
            total: number;
            zone: string;
        }
    }
    /**
     * Available route actions options
     * interface fullName: ipLoadbalancing.RouteAvailableAction.RouteAvailableAction
     */
    export interface RouteAvailableAction {
        destination?: string;
        name: string;
        status?: number[];
        type: string;
    }
    /**
     * Match rule to combine to build routes
     * interface fullName: ipLoadbalancing.RouteAvailableRule.RouteAvailableRule
     */
    export interface RouteAvailableRule {
        enum?: string[];
        hasSubField: boolean;
        matches: string[];
        name: string;
        pattern: string;
        type: string;
    }
    export namespace RouteHttp {
        /**
         * HTTP Route
         * interface fullName: ipLoadbalancing.RouteHttp.RouteHttp.RouteHttp
         */
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
    /**
     * Action triggered when all rules from route match
     * interface fullName: ipLoadbalancing.RouteHttpAction.RouteHttpAction
     */
    export interface RouteHttpAction {
        status?: number;
        target?: string;
        type: string;
    }
    /**
     * Match rule to combine to build routes
     * interface fullName: ipLoadbalancing.RouteRule.RouteRule
     */
    export interface RouteRule {
        field: string;
        match: ipLoadbalancing.RouteRuleMatchesEnum;
        negate: boolean;
        pattern?: string;
        ruleId: number;
        subField?: string;
    }
    export namespace RouteRule {
        /**
         * Rule of a route
         * interface fullName: ipLoadbalancing.RouteRule.RouteRule.RouteRule
         */
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
    /**
     * List of possible route rule matches
     * type fullname: ipLoadbalancing.RouteRuleMatchesEnum
     */
    export type RouteRuleMatchesEnum = "contains" | "endswith" | "exists" | "in" | "internal" | "is" | "matches" | "startswith"
    /**
     * Route configuration status
     * type fullname: ipLoadbalancing.RouteStatusEnum
     */
    export type RouteStatusEnum = "creating" | "deleting" | "internal" | "ok" | "updating"
    export namespace RouteTcp {
        /**
         * TCP Route
         * interface fullName: ipLoadbalancing.RouteTcp.RouteTcp.RouteTcp
         */
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
    /**
     * Action triggered when all rules from route match
     * interface fullName: ipLoadbalancing.RouteTcpAction.RouteTcpAction
     */
    export interface RouteTcpAction {
        target?: string;
        type: string;
    }
    /**
     * Available servers states
     * interface fullName: ipLoadbalancing.ServerState.ServerState
     */
    export interface ServerState {
        checkCode?: string;
        checkStatus?: string;
        checkTime?: string;
        instanceId: number;
        lastCheckContent?: string;
        status?: string;
    }
    export namespace Ssl {
        /**
         * Ssl
         * interface fullName: ipLoadbalancing.Ssl.Ssl.Ssl
         */
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
    /**
     * Possible values for ssl ciphers
     * type fullname: ipLoadbalancing.SslConfigurationEnum
     */
    export type SslConfigurationEnum = "intermediate" | "modern"
    /**
     * Possible values for ssl type
     * type fullname: ipLoadbalancing.SslTypeEnum
     */
    export type SslTypeEnum = "built" | "built_not_routed" | "custom"
    /**
     * The global status of a Load Balancer
     * interface fullName: ipLoadbalancing.Status.Status
     */
    export interface Status {
        farms: ipLoadbalancing.status.Component;
        frontends: ipLoadbalancing.status.Component;
        servers: ipLoadbalancing.status.Component;
        service: ipLoadbalancing.status.Service;
    }
    /**
     * Possible values for HTTP backend stickiness
     * type fullname: ipLoadbalancing.StickinessHTTPEnum
     */
    export type StickinessHTTPEnum = "cookie" | "sourceIp"
    /**
     * Possible values for TCP backend stickiness
     * type fullname: ipLoadbalancing.StickinessTCPEnum
     */
    export type StickinessTCPEnum = "sourceIp"
    export namespace Task {
        /**
         * IP Load Balancing Operations
         * interface fullName: ipLoadbalancing.Task.Task.Task
         */
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
    /**
     * Possible task action
     * type fullname: ipLoadbalancing.TaskActionEnum
     */
    export type TaskActionEnum = "deleteIplb" | "deployIplb" | "install" | "installIplb" | "installZone" | "orderFreeCertificate" | "orderPaidCertificate" | "orderSsl" | "refreshIplb" | "releaseIplb" | "releaseIplbZone" | "reopenIplb" | "suspendIplb" | "suspendZone" | "switchToIplbNextGenerationApi" | "vrackAttach" | "vrackDetach"
    /**
     * Possible task status
     * type fullname: ipLoadbalancing.TaskStatusEnum
     */
    export type TaskStatusEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "todo"
    /**
     * Information about vRack for your Load Balancer
     * interface fullName: ipLoadbalancing.VrackInformation.VrackInformation
     */
    export interface VrackInformation {
        state: ipLoadbalancing.VrackStateEnum;
        task: number[];
        vrackName?: string;
    }
    export namespace VrackNetwork {
        /**
         * Represents a private network in the vRack
         * interface fullName: ipLoadbalancing.VrackNetwork.VrackNetwork.VrackNetwork
         */
        export interface VrackNetwork {
            displayName?: string;
            farmId: ipLoadbalancing.DefinedFarm[];
            natIp: string;
            subnet: string;
            vlan: number;
            vrackNetworkId: number;
        }
    }
    /**
     * Rules to create a new description of a private network in the vRack
     * interface fullName: ipLoadbalancing.VrackNetworkCreationRules.VrackNetworkCreationRules
     */
    export interface VrackNetworkCreationRules {
        minNatIps: number;
        remainingNetworks: number;
        vrackName: string;
    }
    /**
     * Possible values for load balancing vRack state
     * type fullname: ipLoadbalancing.VrackStateEnum
     */
    export type VrackStateEnum = "activating" | "active" | "deactivating" | "inactive"
    /**
     * Aims to help you configure needed transparent interfaces
     * interface fullName: ipLoadbalancing.VrackTransparentGateways.VrackTransparentGateways
     */
    export interface VrackTransparentGateways {
        address: string;
        gateway: string;
        vlan: number;
    }
    export namespace VrackTransparentIp {
        /**
         * Server's vrack transparent ip
         * interface fullName: ipLoadbalancing.VrackTransparentIp.VrackTransparentIp.VrackTransparentIp
         */
        export interface VrackTransparentIp {
            address: string;
            farmId: number;
            id: number;
            serverId: number;
            slotId: number;
        }
    }
    export namespace Zone {
        /**
         * IP Load Balancing Zone
         * interface fullName: ipLoadbalancing.Zone.Zone.Zone
         */
        export interface Zone {
            name: string;
            state: string;
        }
    }
    export namespace backendHttp {
        /**
         * HTTP Farm
         * interface fullName: ipLoadbalancing.backendHttp.BackendHttp.BackendHttp
         */
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
        /**
         * HTTP Farm's Server
         * interface fullName: ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer.BackendHTTPServer
         */
        export interface BackendHTTPServer {
            address: string;
            backendId: number;
            backup: boolean;
            chain?: string;
            cookie?: string;
            displayName?: string;
            onMarkedDown?: ipLoadbalancing.OnMarkedDownEnum;
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
        /**
         * TCP Farm
         * interface fullName: ipLoadbalancing.backendTcp.BackendTcp.BackendTcp
         */
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
        /**
         * TCP Farm's Server
         * interface fullName: ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer.BackendTCPServer
         */
        export interface BackendTCPServer {
            address: string;
            backendId: number;
            backup: boolean;
            chain?: string;
            displayName?: string;
            onMarkedDown?: ipLoadbalancing.OnMarkedDownEnum;
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
        /**
         * UDP Farm
         * interface fullName: ipLoadbalancing.backendUdp.BackendUdp.BackendUdp
         */
        export interface BackendUdp {
            displayName?: string;
            farmId: number;
            port: number;
            vrackNetworkId?: number;
            zone: string;
        }
    }
    export namespace backendUdpCustomerServer {
        /**
         * UDP Farm's Server
         * interface fullName: ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer.BackendUDPServer
         */
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
        /**
         * Frontend HTTP
         * interface fullName: ipLoadbalancing.frontendHttp.FrontendHttp.FrontendHttp
         */
        export interface FrontendHttp {
            allowedSource?: string[];
            dedicatedIpfo?: string[];
            defaultFarmId?: number;
            defaultSslId?: number;
            deniedSource?: string[];
            disabled: boolean;
            displayName?: string;
            frontendId: number;
            hsts: boolean;
            httpHeader?: string[];
            port: string;
            redirectLocation?: string;
            ssl: boolean;
            vrackNetworkId?: number;
            vrackVrouterId?: number;
            zone: string;
        }
    }
    export namespace frontendTcp {
        /**
         * Frontend TCP
         * interface fullName: ipLoadbalancing.frontendTcp.FrontendTcp.FrontendTcp
         */
        export interface FrontendTcp {
            allowedSource?: string[];
            dedicatedIpfo?: string[];
            defaultFarmId?: number;
            defaultSslId?: number;
            deniedSource?: string[];
            disabled: boolean;
            displayName?: string;
            frontendId: number;
            port: string;
            ssl: boolean;
            vrackNetworkId?: number;
            vrackVrouterId?: number;
            zone: string;
        }
    }
    export namespace frontendUdp {
        /**
         * Frontend UDP
         * interface fullName: ipLoadbalancing.frontendUdp.FrontendUdp.FrontendUdp
         */
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
        /**
         * The global status of a Load Balancer component
         * interface fullName: ipLoadbalancing.status.Component.Component
         */
        export interface Component {
            status: ipLoadbalancing.status.ComponentStatus;
            total: number;
        }
        /**
         * The statuses of a Load Balancer component
         * interface fullName: ipLoadbalancing.status.ComponentStatus.ComponentStatus
         */
        export interface ComponentStatus {
            error: number;
            ok: number;
            unknown: number;
            warn: number;
        }
        /**
         * Possible values for a Load Balancer status
         * type fullname: ipLoadbalancing.status.Enum
         */
        export type Enum = "error" | "ok" | "unknown" | "warn"
        /**
         * The status of a Load Balancer service
         * interface fullName: ipLoadbalancing.status.Service.Service
         */
        export interface Service {
            status: ipLoadbalancing.status.Enum;
        }
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
 * Api model for /ipLoadbalancing
 */
export interface IpLoadbalancing {
    /**
     * List of your load balancing IP
     * GET /ipLoadbalancing
     */
    $get(params?: { iamTags?: any }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): void;
    availableZones: {
        /**
         * List of zone available for an IP load balancing
         * GET /ipLoadbalancing/availableZones
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
    }
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /ipLoadbalancing/{serviceName}
         */
        $get(): Promise<ipLoadbalancing.Ip>;
        /**
         * Alter this object properties
         * PUT /ipLoadbalancing/{serviceName}
         */
        $put(params?: { displayName?: string, ipLoadbalancing?: string, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: string, orderableZone?: ipLoadbalancing.OrderableZone[], serviceName?: string, sslConfiguration?: ipLoadbalancing.SslConfigurationEnum, state?: ipLoadbalancing.IpStateEnum, vrackEligibility?: boolean, vrackName?: string, zone?: string[] }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        availableFarmProbes: {
            /**
             * Available farm probes for health checks
             * GET /ipLoadbalancing/{serviceName}/availableFarmProbes
             */
            $get(): Promise<ipLoadbalancing.FarmAvailableProbe[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        availableFarmType: {
            /**
             * Available farm types
             * GET /ipLoadbalancing/{serviceName}/availableFarmType
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        availableFrontendType: {
            /**
             * Available frontend type
             * GET /ipLoadbalancing/{serviceName}/availableFrontendType
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        availableRouteActions: {
            /**
             * Available route actions
             * GET /ipLoadbalancing/{serviceName}/availableRouteActions
             */
            $get(): Promise<ipLoadbalancing.RouteAvailableAction[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        availableRouteRules: {
            /**
             * Available route match rules
             * GET /ipLoadbalancing/{serviceName}/availableRouteRules
             */
            $get(): Promise<ipLoadbalancing.RouteAvailableRule[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /ipLoadbalancing/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        confirmTermination: {
            /**
             * Confirm service termination
             * POST /ipLoadbalancing/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
        }
        definedFarms: {
            /**
             * List of defined farms, and whether they are HTTP, TCP or UDP
             * GET /ipLoadbalancing/{serviceName}/definedFarms
             */
            $get(params?: { vrackNetworkId?: number }): Promise<ipLoadbalancing.DefinedFarm[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        definedFrontends: {
            /**
             * List of defined frontends, and whether they are HTTP, TCP or UDP
             * GET /ipLoadbalancing/{serviceName}/definedFrontends
             */
            $get(): Promise<ipLoadbalancing.DefinedFrontend[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        definedRoutes: {
            /**
             * List of defined routes, and whether they are HTTP or TCP
             * GET /ipLoadbalancing/{serviceName}/definedRoutes
             */
            $get(): Promise<ipLoadbalancing.DefinedRoute[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        failover: {
            /**
             * List all failover ip routed to this IPLB
             * GET /ipLoadbalancing/{serviceName}/failover
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        freeCertificate: {
            /**
             * Order a free certificate. We order and deliver it for you
             * POST /ipLoadbalancing/{serviceName}/freeCertificate
             */
            $post(params: { fqdn: string[] }): Promise<ipLoadbalancing.Task.Task>;
        }
        http: {
            farm: {
                /**
                 * HTTP Farm for this iplb
                 * GET /ipLoadbalancing/{serviceName}/http/farm
                 */
                $get(params?: { vrackNetworkId?: number, zone?: string }): Promise<number[]>;
                /**
                 * Add a new HTTP Farm on your IP Load Balancing
                 * POST /ipLoadbalancing/{serviceName}/http/farm
                 */
                $post(params: { balance?: ipLoadbalancing.BalanceHTTPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone: string }): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(farmId: number): {
                    /**
                     * Delete an HTTP Farm
                     * DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                     */
                    $get(): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                     */
                    $put(params?: { balance?: ipLoadbalancing.BalanceHTTPEnum, displayName?: string, farmId?: number, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    server: {
                        /**
                         * HTTP Farm's Servers
                         * GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
                         */
                        $get(params?: { address?: string, cookie?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum }): Promise<number[]>;
                        /**
                         * Add a server to an HTTP Farm
                         * POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
                         */
                        $post(params: { address: string, backup?: boolean, chain?: string, cookie?: string, displayName?: string, onMarkedDown?: ipLoadbalancing.OnMarkedDownEnum, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number }): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(serverId: number): {
                            /**
                             * Delete a server from an HTTP Farm
                             * DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                             */
                            $get(): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
                            /**
                             * Alter this object properties
                             * PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                             */
                            $put(params?: { address?: string, backendId?: number, backup?: boolean, chain?: string, cookie?: string, displayName?: string, onMarkedDown?: ipLoadbalancing.OnMarkedDownEnum, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, serverId?: number, serverState?: ipLoadbalancing.ServerState[], ssl?: boolean, status?: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        };
                    }
                };
            }
            frontend: {
                /**
                 * HTTP frontends for this iplb
                 * GET /ipLoadbalancing/{serviceName}/http/frontend
                 */
                $get(params?: { defaultFarmId?: number, defaultSslId?: number, port?: string, zone?: string }): Promise<number[]>;
                /**
                 * Add a new http frontend on your IP Load Balancing
                 * POST /ipLoadbalancing/{serviceName}/http/frontend
                 */
                $post(params: { allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, deniedSource?: string[], disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], port: string, redirectLocation?: string, ssl?: boolean, zone: string }): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(frontendId: number): {
                    /**
                     * Delete an HTTP frontend
                     * DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                     */
                    $get(): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                     */
                    $put(params?: { allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, deniedSource?: string[], disabled?: boolean, displayName?: string, frontendId?: number, hsts?: boolean, httpHeader?: string[], port?: string, redirectLocation?: string, ssl?: boolean, vrackNetworkId?: number, vrackVrouterId?: number, zone?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            route: {
                /**
                 * HTTP routes for this iplb
                 * GET /ipLoadbalancing/{serviceName}/http/route
                 */
                $get(params?: { frontendId?: number }): Promise<number[]>;
                /**
                 * Add a new HTTP route to your frontend
                 * POST /ipLoadbalancing/{serviceName}/http/route
                 */
                $post(params: { action: ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, weight?: number }): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(routeId: number): {
                    /**
                     * Delete this HTTP route
                     * DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
                     */
                    $get(): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
                     */
                    $put(params?: { action?: ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, routeId?: number, rules?: ipLoadbalancing.RouteRule[], status?: ipLoadbalancing.RouteStatusEnum, weight?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    rule: {
                        /**
                         * HTTP routes for this iplb
                         * GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Add a new rule to your route
                         * POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
                         */
                        $post(params: { displayName?: string, field: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string }): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(ruleId: number): {
                            /**
                             * Delete this rule from the route
                             * DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                             */
                            $get(): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                            /**
                             * Alter this object properties
                             * PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                             */
                            $put(params?: { displayName?: string, field?: string, match?: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, ruleId?: number, subField?: string }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        };
                    }
                };
            }
        }
        instancesState: {
            /**
             * Get the effective state of your IPLB instances on IPLB servers
             * GET /ipLoadbalancing/{serviceName}/instancesState
             */
            $get(): Promise<ipLoadbalancing.InstancesState[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        natIp: {
            /**
             * Ip subnet used by OVH to nat requests on your IPLB to your backends
             * GET /ipLoadbalancing/{serviceName}/natIp
             */
            $get(): Promise<ipLoadbalancing.NatIps[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        pendingChanges: {
            /**
             * List the pending changes on your Load Balancer configuration, per zone
             * GET /ipLoadbalancing/{serviceName}/pendingChanges
             */
            $get(): Promise<ipLoadbalancing.PendingChanges[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        quota: {
            /**
             * Available quota informations for current billing period per zone
             * GET /ipLoadbalancing/{serviceName}/quota
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(zone: string): {
                /**
                 * Get this object properties
                 * GET /ipLoadbalancing/{serviceName}/quota/{zone}
                 */
                $get(): Promise<ipLoadbalancing.Quota.Quota>;
                /**
                 * Alter this object properties
                 * PUT /ipLoadbalancing/{serviceName}/quota/{zone}
                 */
                $put(params?: { alert?: number, included?: number, lastUpdateDate?: string, resetDate?: string, total?: number, zone?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        quotaHistory: {
            /**
             * Quota history informations, per month
             * GET /ipLoadbalancing/{serviceName}/quotaHistory
             */
            $get(params?: { 'historizedDate.from'?: string, 'historizedDate.to'?: string, zone?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /ipLoadbalancing/{serviceName}/quotaHistory/{id}
                 */
                $get(): Promise<ipLoadbalancing.QuotaHistory.QuotaHistory>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        refresh: {
            /**
             * Apply the configuration to your iplb
             * POST /ipLoadbalancing/{serviceName}/refresh
             */
            $post(params?: { zone?: string }): Promise<ipLoadbalancing.Task.Task>;
        }
        serviceInfos: {
            /**
             * Get service information
             * GET /ipLoadbalancing/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /ipLoadbalancing/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        ssl: {
            /**
             * Ssl for this iplb
             * GET /ipLoadbalancing/{serviceName}/ssl
             */
            $get(params?: { expireDate?: string, fingerprint?: string, serial?: string, type?: ipLoadbalancing.SslTypeEnum }): Promise<number[]>;
            /**
             * Add a new custom SSL certificate on your IP Load Balancing
             * POST /ipLoadbalancing/{serviceName}/ssl
             */
            $post(params: { certificate: string, chain?: string, displayName?: string, key: string }): Promise<ipLoadbalancing.Ssl.Ssl>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(id: number): {
                /**
                 * Delete a custom SSL certificate
                 * DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /ipLoadbalancing/{serviceName}/ssl/{id}
                 */
                $get(): Promise<ipLoadbalancing.Ssl.Ssl>;
                /**
                 * Alter this object properties
                 * PUT /ipLoadbalancing/{serviceName}/ssl/{id}
                 */
                $put(params?: { displayName?: string, expireDate?: string, fingerprint?: string, id?: number, san?: string[], serial?: string, subject?: string, type?: ipLoadbalancing.SslTypeEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        status: {
            /**
             * Get the global status of your IPLB
             * GET /ipLoadbalancing/{serviceName}/status
             */
            $get(): Promise<ipLoadbalancing.Status>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        task: {
            /**
             * Task for this iplb
             * GET /ipLoadbalancing/{serviceName}/task
             */
            $get(params?: { action?: ipLoadbalancing.TaskActionEnum, 'creationDate.from'?: string, 'creationDate.to'?: string, 'doneDate.from'?: string, 'doneDate.to'?: string, status?: ipLoadbalancing.TaskStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /ipLoadbalancing/{serviceName}/task/{id}
                 */
                $get(): Promise<ipLoadbalancing.Task.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        tcp: {
            farm: {
                /**
                 * TCP Farm for this iplb
                 * GET /ipLoadbalancing/{serviceName}/tcp/farm
                 */
                $get(params?: { vrackNetworkId?: number, zone?: string }): Promise<number[]>;
                /**
                 * Add a new TCP Farm on your IP Load Balancing
                 * POST /ipLoadbalancing/{serviceName}/tcp/farm
                 */
                $post(params: { balance?: ipLoadbalancing.BalanceTCPEnum, displayName?: string, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone: string }): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(farmId: number): {
                    /**
                     * Delete a TCP Farm
                     * DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                     */
                    $get(): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                     */
                    $put(params?: { balance?: ipLoadbalancing.BalanceTCPEnum, displayName?: string, farmId?: number, port?: number, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    server: {
                        /**
                         * TCP Farm's Servers
                         * GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
                         */
                        $get(params?: { address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum }): Promise<number[]>;
                        /**
                         * Add a server to a TCP Farm
                         * POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
                         */
                        $post(params: { address: string, backup?: boolean, chain?: string, displayName?: string, onMarkedDown?: ipLoadbalancing.OnMarkedDownEnum, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number }): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(serverId: number): {
                            /**
                             * Delete a server from a TCP Farm
                             * DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                             */
                            $get(): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
                            /**
                             * Alter this object properties
                             * PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                             */
                            $put(params?: { address?: string, backendId?: number, backup?: boolean, chain?: string, displayName?: string, onMarkedDown?: ipLoadbalancing.OnMarkedDownEnum, port?: number, probe?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, serverId?: number, serverState?: ipLoadbalancing.ServerState[], ssl?: boolean, status?: ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        };
                    }
                };
            }
            frontend: {
                /**
                 * TCP frontends for this iplb
                 * GET /ipLoadbalancing/{serviceName}/tcp/frontend
                 */
                $get(params?: { defaultFarmId?: number, defaultSslId?: number, port?: string, zone?: string }): Promise<number[]>;
                /**
                 * Add a new TCP frontend on your IP Load Balancing
                 * POST /ipLoadbalancing/{serviceName}/tcp/frontend
                 */
                $post(params: { allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, deniedSource?: string[], disabled?: boolean, displayName?: string, port: string, ssl?: boolean, zone: string }): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(frontendId: number): {
                    /**
                     * Delete an TCP frontend
                     * DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                     */
                    $get(): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                     */
                    $put(params?: { allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, deniedSource?: string[], disabled?: boolean, displayName?: string, frontendId?: number, port?: string, ssl?: boolean, vrackNetworkId?: number, vrackVrouterId?: number, zone?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            route: {
                /**
                 * TCP routes for this iplb
                 * GET /ipLoadbalancing/{serviceName}/tcp/route
                 */
                $get(params?: { frontendId?: number }): Promise<number[]>;
                /**
                 * Add a new TCP route to your frontend
                 * POST /ipLoadbalancing/{serviceName}/tcp/route
                 */
                $post(params: { action: ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, weight?: number }): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(routeId: number): {
                    /**
                     * Delete this TCP route
                     * DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                     */
                    $get(): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                     */
                    $put(params?: { action?: ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, routeId?: number, rules?: ipLoadbalancing.RouteRule[], status?: ipLoadbalancing.RouteStatusEnum, weight?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    rule: {
                        /**
                         * HTTP routes for this iplb
                         * GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Add a new rule to your route
                         * POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
                         */
                        $post(params: { displayName?: string, field: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string }): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(ruleId: number): {
                            /**
                             * Delete this rule from the route
                             * DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                             */
                            $get(): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                            /**
                             * Alter this object properties
                             * PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                             */
                            $put(params?: { displayName?: string, field?: string, match?: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, ruleId?: number, subField?: string }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        };
                    }
                };
            }
        }
        terminate: {
            /**
             * Ask for the termination of your service
             * POST /ipLoadbalancing/{serviceName}/terminate
             */
            $post(): Promise<string>;
        }
        udp: {
            farm: {
                /**
                 * UDP Farm for this iplb
                 * GET /ipLoadbalancing/{serviceName}/udp/farm
                 */
                $get(params?: { vrackNetworkId?: number, zone?: string }): Promise<number[]>;
                /**
                 * Add a new UDP Farm on your IP Load Balancing
                 * POST /ipLoadbalancing/{serviceName}/udp/farm
                 */
                $post(params: { displayName?: string, port: number, vrackNetworkId?: number, zone: string }): Promise<ipLoadbalancing.backendUdp.BackendUdp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(farmId: number): {
                    /**
                     * Delete an UDP Farm
                     * DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                     */
                    $get(): Promise<ipLoadbalancing.backendUdp.BackendUdp>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                     */
                    $put(params?: { displayName?: string, farmId?: number, port?: number, vrackNetworkId?: number, zone?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    server: {
                        /**
                         * UDP Farm's Servers
                         * GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
                         */
                        $get(params?: { address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum }): Promise<number[]>;
                        /**
                         * Add a server to an UDP Farm
                         * POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
                         */
                        $post(params: { address: string, displayName?: string, port?: number, status: ipLoadbalancing.BackendCustomerServerStatusEnum }): Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(serverId: number): {
                            /**
                             * Delete a server from an UDP Farm
                             * DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                             */
                            $get(): Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
                            /**
                             * Alter this object properties
                             * PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                             */
                            $put(params?: { address?: string, backendId?: number, displayName?: string, port?: number, serverId?: number, status?: ipLoadbalancing.BackendCustomerServerStatusEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        };
                    }
                };
            }
            frontend: {
                /**
                 * UDP frontends for this iplb
                 * GET /ipLoadbalancing/{serviceName}/udp/frontend
                 */
                $get(params?: { defaultFarmId?: number, port?: string, zone?: string }): Promise<number[]>;
                /**
                 * Add a new UDP frontend on your IP Load Balancing
                 * POST /ipLoadbalancing/{serviceName}/udp/frontend
                 */
                $post(params: { dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string, port: string, zone: string }): Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(frontendId: number): {
                    /**
                     * Delete an UDP frontend
                     * DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                     */
                    $get(): Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                     */
                    $put(params?: { dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string, frontendId?: number, port?: string, zone?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
        }
        vrack: {
            network: {
                /**
                 * Descriptions of private networks in the vRack attached to this Load Balancer
                 * GET /ipLoadbalancing/{serviceName}/vrack/network
                 */
                $get(params?: { subnet?: string, vlan?: number }): Promise<number[]>;
                /**
                 * Add a description of a private network in the attached vRack
                 * POST /ipLoadbalancing/{serviceName}/vrack/network
                 */
                $post(params: { displayName?: string, farmId?: number[], natIp: string, subnet: string, vlan?: number }): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(vrackNetworkId: number): {
                    /**
                     * Delete this description of a private network in the vRack. It must not be used by any farm server
                     * DELETE /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                     */
                    $get(): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                    /**
                     * Alter this object properties
                     * PUT /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                     */
                    $put(params?: { displayName?: string, farmId?: ipLoadbalancing.DefinedFarm[], natIp?: string, subnet?: string, vlan?: number, vrackNetworkId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    updateFarmId: {
                        /**
                         * Update farm attached to that vrack network id
                         * POST /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
                         */
                        $post(params: { farmId: number[] }): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                    }
                };
            }
            networkCreationRules: {
                /**
                 * Rules to create a network attached to a vrack
                 * GET /ipLoadbalancing/{serviceName}/vrack/networkCreationRules
                 */
                $get(): Promise<ipLoadbalancing.VrackNetworkCreationRules>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            status: {
                /**
                 * Information about vRack for your Load Balancer
                 * GET /ipLoadbalancing/{serviceName}/vrack/status
                 */
                $get(): Promise<ipLoadbalancing.VrackInformation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
        }
        zone: {
            /**
             * Zone for this iplb
             * GET /ipLoadbalancing/{serviceName}/zone
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(name: string): {
                /**
                 * Get this object properties
                 * GET /ipLoadbalancing/{serviceName}/zone/{name}
                 */
                $get(): Promise<ipLoadbalancing.Zone.Zone>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                cancelTermination: {
                    /**
                     * Cancel the termination request of your service zone option
                     * POST /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
                     */
                    $post(): Promise<void>;
                }
                terminate: {
                    /**
                     * Terminate your service zone option
                     * POST /ipLoadbalancing/{serviceName}/zone/{name}/terminate
                     */
                    $post(): Promise<void>;
                }
            };
        }
    };
}

export declare function proxyIpLoadbalancing(ovhEngine: OvhRequestable): IpLoadbalancing;
export default proxyIpLoadbalancing;

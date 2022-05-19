import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /ip Models
 * Source: https://ca.api.ovh.com/1.0/ip.json
 */
export namespace complexType {
    /**
     * Start and end points (inclusive) of a range
     * interface fullName: complexType.Range.Range
     */
    export interface Range<T> {
        from: T;
        to: T;
    }
}
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace dedicated {
    /**
     * ovh datacenter
     * type fullname: dedicated.DatacenterEnum
     */
    export type DatacenterEnum = "bhs1" | "bhs2" | "bhs3" | "bhs4" | "bhs5" | "bhs6" | "bhs7" | "bhs8" | "dc1" | "eri1" | "gra1" | "gra2" | "gra3" | "gsw" | "hil1" | "lim1" | "lim3" | "p19" | "rbx-hz" | "rbx1" | "rbx2" | "rbx3" | "rbx4" | "rbx5" | "rbx6" | "rbx7" | "rbx8" | "sbg1" | "sbg2" | "sbg3" | "sbg4" | "sbg5" | "sgp1" | "syd1" | "syd2" | "vin1" | "waw1"
}
export namespace ip {
    /**
     * Phishing URLs hosted on your IP
     * interface fullName: ip.Antiphishing.Antiphishing
     */
    export interface Antiphishing {
        creationDate: string;
        id: number;
        ipOnAntiphishing: string;
        state: ip.AntiphishingStateEnum;
        urlPhishing: string;
    }
    /**
     * Possible values for antiphishing state
     * type fullname: ip.AntiphishingStateEnum
     */
    export type AntiphishingStateEnum = "blocked" | "blocking" | "unblocked" | "unblocking"
    /**
     * ARP blocked IP information
     * interface fullName: ip.ArpBlockedIp.ArpBlockedIp
     */
    export interface ArpBlockedIp {
        blockedSince: string;
        ipBlocked: string;
        logs?: string;
        state: ip.ArpStateEnum;
        time: number;
    }
    /**
     * Possible values for IP state
     * type fullname: ip.ArpStateEnum
     */
    export type ArpStateEnum = "blocked" | "unblocking"
    /**
     * Blocked IP information
     * interface fullName: ip.BlockedIp.BlockedIp
     */
    export interface BlockedIp {
        blockedSince: string;
        ipBlocked: string;
        logs?: string;
        state: ip.BlockedIpStateEnum;
        time: number;
    }
    /**
     * Possible values for IP state
     * type fullname: ip.BlockedIpStateEnum
     */
    export type BlockedIpStateEnum = "blocked" | "unblocking"
    /**
     * Campus of an IP address
     * interface fullName: ip.Campus.Campus
     */
    export interface Campus {
        bringYourOwnIpSupportedRirForIp: string[];
        datacenters: dedicated.DatacenterEnum[];
        description: string;
        name: ip.CampusEnum;
    }
    /**
     * Possible values for IP campuses' names
     * type fullname: ip.CampusEnum
     */
    export type CampusEnum = "BHS" | "ERI" | "GRA" | "HIL" | "LIM" | "RBX" | "SBG" | "SGP" | "SY2" | "SYD" | "VIN" | "WAW"
    /**
     * A structure given service and its nexthops as a destination for failover ips
     * interface fullName: ip.Destination.Destination
     */
    export interface Destination {
        nexthop?: string[];
        service: string;
    }
    /**
     * A structure given all services allowed as a destination for this ip
     * interface fullName: ip.Destinations.Destinations
     */
    export interface Destinations {
        cloudProject?: ip.Destination[];
        dedicatedCloud?: ip.Destination[];
        dedicatedServer?: ip.Destination[];
        hostingReseller?: ip.Destination[];
        ipLoadbalancing?: ip.Destination[];
        vps?: ip.Destination[];
    }
    /**
     * Possible values for action
     * type fullname: ip.FirewallActionEnum
     */
    export type FirewallActionEnum = "deny" | "permit"
    /**
     * Your IP on firewall
     * interface fullName: ip.FirewallIp.FirewallIp
     */
    export interface FirewallIp {
        enabled: boolean;
        ipOnFirewall: string;
        state: ip.FirewallStateEnum;
    }
    /**
     * Rule on ip
     * interface fullName: ip.FirewallNetworkRule.FirewallNetworkRule
     */
    export interface FirewallNetworkRule {
        action: ip.FirewallActionEnum;
        creationDate: string;
        destination: string;
        destinationPort?: string;
        fragments?: boolean;
        protocol: ip.FirewallProtocolEnum;
        rule: string;
        sequence: number;
        source: string;
        sourcePort?: string;
        state: ip.FirewallRuleStateEnum;
        tcpOption?: string;
    }
    /**
     * Possible option for TCP
     * interface fullName: ip.FirewallOptionTCP.FirewallOptionTCP
     */
    export interface FirewallOptionTCP {
        fragments?: boolean;
        option?: ip.FirewallTCPOptionEnum;
    }
    /**
     * Possible values for protocol
     * type fullname: ip.FirewallProtocolEnum
     */
    export type FirewallProtocolEnum = "ah" | "esp" | "gre" | "icmp" | "ipv4" | "tcp" | "udp"
    /**
     * Possible values for firewall rule state
     * type fullname: ip.FirewallRuleStateEnum
     */
    export type FirewallRuleStateEnum = "creationPending" | "ok" | "removalPending"
    /**
     * Possible values for action
     * type fullname: ip.FirewallSequenceRangeEnum
     */
    export type FirewallSequenceRangeEnum = 0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    /**
     * Possible values for firewall ip state
     * type fullname: ip.FirewallStateEnum
     */
    export type FirewallStateEnum = "disableFirewallPending" | "enableFirewallPending" | "ok"
    /**
     * Possible values for TCP option - only for TCP protocol
     * type fullname: ip.FirewallTCPOptionEnum
     */
    export type FirewallTCPOptionEnum = "established" | "syn"
    /**
     * GAME Anti-DDoS
     * interface fullName: ip.GameMitigation.GameMitigation
     */
    export interface GameMitigation {
        firewallModeEnabled: boolean;
        ipOnGame: string;
        state: ip.GameMitigationStateEnum;
    }
    /**
     * Rule on ip:ports
     * interface fullName: ip.GameMitigationRule.GameMitigationRule
     */
    export interface GameMitigationRule {
        id: number;
        ports: complexType.Range<number>;
        protocol: ip.GameMitigationRuleProtocolEnum;
        state: ip.GameMitigationRuleStateEnum;
    }
    /**
     * Possible values for game rule protocol
     * type fullname: ip.GameMitigationRuleProtocolEnum
     */
    export type GameMitigationRuleProtocolEnum = "arkSurvivalEvolved" | "arma" | "gtaMultiTheftAutoSanAndreas" | "gtaSanAndreasMultiplayerMod" | "hl2Source" | "minecraftPocketEdition" | "minecraftQuery" | "mumble" | "other" | "rust" | "teamspeak2" | "teamspeak3" | "trackmaniaShootmania"
    /**
     * Possible values for game mitigation rule state
     * type fullname: ip.GameMitigationRuleStateEnum
     */
    export type GameMitigationRuleStateEnum = "createRulePending" | "deleteRulePending" | "ok"
    /**
     * Possible values for udp mitigation rule state
     * type fullname: ip.GameMitigationStateEnum
     */
    export type GameMitigationStateEnum = "firewallModeDisablePending" | "firewallModeEnablePending" | "ok"
    /**
     * Your IP
     * interface fullName: ip.Ip.Ip
     */
    export interface Ip {
        bringYourOwnIp: boolean;
        campus?: string;
        canBeTerminated: boolean;
        country?: coreTypes.CountryEnum;
        description?: string;
        ip: string;
        organisationId?: string;
        routedTo?: ip.RoutedTo;
        type: ip.IpTypeEnum;
    }
    /**
     * IP migration to OVH
     * interface fullName: ip.IpMigrationToken.IpMigrationToken
     */
    export interface IpMigrationToken {
        customerId: string;
        token: string;
    }
    /**
     * IP tasks
     * interface fullName: ip.IpTask.IpTask
     */
    export interface IpTask {
        comment?: string;
        destination?: ip.RoutedTo;
        doneDate?: string;
        function: ip.TaskFunctionEnum;
        lastUpdate?: string;
        startDate: string;
        status: ip.TaskStatusEnum;
        taskId: number;
    }
    /**
     * Possible values for ip type
     * type fullname: ip.IpTypeEnum
     */
    export type IpTypeEnum = "cdn" | "cloud" | "dedicated" | "failover" | "hosted_ssl" | "housing" | "loadBalancing" | "mail" | "overthebox" | "pcc" | "pci" | "private" | "vpn" | "vps" | "vrack" | "xdsl"
    /**
     * Additional available ports for ip loadbalancing
     * type fullname: ip.LoadBalancingAdditionalPortEnum
     */
    export type LoadBalancingAdditionalPortEnum = 3306 | 443 | 5432 | 80
    /**
     * Backends attached to your IP load balancing
     * interface fullName: ip.LoadBalancingBackendIp.LoadBalancingBackendIp
     */
    export interface LoadBalancingBackendIp {
        backend: string;
        mainBackendIp?: string;
        probe: ip.LoadBalancingBackendProbeEnum;
        weight: number;
        zone: ip.LoadBalancingZoneEnum;
    }
    /**
     * Possible values for your IP load balancing backend probe
     * type fullname: ip.LoadBalancingBackendProbeEnum
     */
    export type LoadBalancingBackendProbeEnum = "http" | "icmp" | "none" | "oco"
    /**
     * Your load balancing IP
     * interface fullName: ip.LoadBalancingIp.LoadBalancingIp
     */
    export interface LoadBalancingIp {
        ipLoadBalancing: string;
        serviceName: string;
        ssl: ip.LoadBalancingSslEnum;
        state: ip.LoadBalancingStateEnum;
        stickiness: ip.LoadBalancingStickinessEnum;
        zone: ip.LoadBalancingZoneEnum[];
    }
    export namespace LoadBalancingIp {
        /**
         * LoadBalancingPort mapping
         * interface fullName: ip.LoadBalancingIp.LoadBalancingPort.LoadBalancingPort
         */
        export interface LoadBalancingPort {
            dstPort: number;
            srcPort: ip.LoadBalancingAdditionalPortEnum;
        }
    }
    /**
     * Possible values for ssl state
     * type fullname: ip.LoadBalancingSslEnum
     */
    export type LoadBalancingSslEnum = "customer" | "none" | "ovh"
    /**
     * Possible values for load balancing IP state
     * type fullname: ip.LoadBalancingStateEnum
     */
    export type LoadBalancingStateEnum = "blacklisted" | "deleted" | "free" | "ok" | "quarantined" | "suspended"
    /**
     * Possible values for load balancing IP stickiness
     * type fullname: ip.LoadBalancingStickinessEnum
     */
    export type LoadBalancingStickinessEnum = "cookie" | "none" | "sourceIp"
    /**
     * List of tasks associated with your IP load balancing
     * interface fullName: ip.LoadBalancingTask.LoadBalancingTask
     */
    export interface LoadBalancingTask {
        action: ip.LoadBalancingTaskActionEnum;
        creationDate: string;
        id: number;
        status: string;
    }
    /**
     * Possible values for load balancing task action
     * type fullname: ip.LoadBalancingTaskActionEnum
     */
    export type LoadBalancingTaskActionEnum = "activateSsl" | "addBackend" | "addIpToBackend" | "announceIpLoadBalancing" | "backupStateSet" | "backupStateUnset" | "changeProbe" | "delBackend" | "desactivateSsl" | "removeIpFromBackend" | "setPortRedirection" | "setStickiness" | "setWeight" | "unannounceIpLoadBalancing" | "unsetPortRedirection"
    /**
     * Possible values for load balancing IP service location
     * type fullname: ip.LoadBalancingZoneEnum
     */
    export type LoadBalancingZoneEnum = "bhs" | "gra" | "rbx" | "sbg"
    /**
     * Mitigation attack on your ip
     * interface fullName: ip.MitigationAttack.MitigationAttack
     */
    export interface MitigationAttack {
        endDate?: string;
        idAttack: number;
        ipAttack: string;
        startDate: string;
    }
    /**
     * Detailed statistics about your traffic
     * interface fullName: ip.MitigationDetailedStats.MitigationDetailedStats
     */
    export interface MitigationDetailedStats {
        destPort?: number;
        fragments?: boolean;
        icmpCode?: number;
        icmpType?: number;
        in?: ip.MitigationTraffic;
        out?: ip.MitigationTraffic;
        protocol?: number;
        srcPort?: number;
        syn?: boolean;
    }
    /**
     * Your IP on mitigation
     * interface fullName: ip.MitigationIp.MitigationIp
     */
    export interface MitigationIp {
        auto: boolean;
        ipOnMitigation: string;
        permanent: boolean;
        state: ip.MitigationStateEnum;
    }
    /**
     * Mitigation profile for your ip
     * interface fullName: ip.MitigationProfile.MitigationProfile
     */
    export interface MitigationProfile {
        autoMitigationTimeOut: ip.MitigationProfileAutoMitigationTimeOutEnum;
        ipMitigationProfile: string;
        state: ip.MitigationProfileStateEnum;
    }
    /**
     * Possible values for auto mitigation timeout (minutes)
     * type fullname: ip.MitigationProfileAutoMitigationTimeOutEnum
     */
    export type MitigationProfileAutoMitigationTimeOutEnum = 0 | 15 | 1560 | 360 | 60
    /**
     * Possible values for mitigation profile state
     * type fullname: ip.MitigationProfileStateEnum
     */
    export type MitigationProfileStateEnum = "ok" | "tasksPending"
    /**
     * Possible values for mitigation state
     * type fullname: ip.MitigationStateEnum
     */
    export type MitigationStateEnum = "creationPending" | "ok" | "removalPending"
    /**
     * Traffic statistics in and out on a mitigated ip
     * interface fullName: ip.MitigationStats.MitigationStats
     */
    export interface MitigationStats {
        in?: ip.MitigationTraffic;
        out?: ip.MitigationTraffic;
        timestamp: number;
    }
    /**
     * Possible aggregation scale on statistics
     * type fullname: ip.MitigationStatsScaleEnum
     */
    export type MitigationStatsScaleEnum = "10s" | "1m" | "5m"
    /**
     * Traffic on mitigation
     * interface fullName: ip.MitigationTraffic.MitigationTraffic
     */
    export interface MitigationTraffic {
        bps: number;
        pps: number;
    }
    /**
     * Your reverse delegations on IPv6 subnet
     * interface fullName: ip.ReverseDelegation.ReverseDelegation
     */
    export interface ReverseDelegation {
        target: string;
    }
    /**
     * Your reverse records on IP
     * interface fullName: ip.ReverseIp.ReverseIp
     */
    export interface ReverseIp {
        ipReverse: string;
        reverse: string;
    }
    /**
     * IP block RIPE informations
     * interface fullName: ip.RipeInfos.RipeInfos
     */
    export interface RipeInfos {
        description?: string;
        netname?: string;
    }
    /**
     * Information about routing
     * interface fullName: ip.RoutedTo.RoutedTo
     */
    export interface RoutedTo {
        serviceName?: string;
    }
    /**
     * Your IP linked to service
     * interface fullName: ip.ServiceIp.ServiceIp
     */
    export interface ServiceIp {
        canBeTerminated: boolean;
        country?: coreTypes.CountryEnum;
        description?: string;
        ip: string;
        organisationId?: string;
        routedTo?: ip.RoutedTo;
        type: ip.IpTypeEnum;
    }
    /**
     * Your IP spam stats
     * interface fullName: ip.SpamIp.SpamIp
     */
    export interface SpamIp {
        date: string;
        ipSpamming: string;
        state: ip.SpamStateEnum;
        time: number;
    }
    /**
     * Possible values for spam state
     * type fullname: ip.SpamStateEnum
     */
    export type SpamStateEnum = "blockedForSpam" | "unblocked" | "unblocking"
    /**
     * Spam statistics about an IP address
     * interface fullName: ip.SpamStats.SpamStats
     */
    export interface SpamStats {
        averageSpamscore?: number;
        detectedSpams?: ip.SpamTarget[];
        numberOfSpams: number;
        timestamp: number;
        total: number;
    }
    /**
     * Spam's target information
     * interface fullName: ip.SpamTarget.SpamTarget
     */
    export interface SpamTarget {
        date: number;
        destinationIp: string;
        messageId: string;
        spamscore: number;
    }
    /**
     * different task operation
     * type fullname: ip.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "arinBlockReassign" | "changeRipeOrg" | "checkAndReleaseIp" | "genericMoveFloatingIp"
    /**
     * different task status
     * type fullname: ip.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
}
export namespace ipLoadbalancing {
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
     * Details about a non-expiring Service
     * interface fullName: services.NonExpiringService.NonExpiringService
     */
    export interface NonExpiringService {
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        serviceId: number;
        status: service.StateEnum;
    }
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
 * END API /ip Models
 */
export function proxyIp(ovhEngine: OvhRequestable): Ip {
    return buildOvhProxy(ovhEngine, '/ip');
}
export default proxyIp;
/**
 * Api model for /ip
 */
export interface Ip {
    /**
     * Your OVH IPs
     * GET /ip
     */
    $get(params?: { description?: string, ip?: string, 'routedTo.serviceName'?: string, type?: ip.IpTypeEnum }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    campus: {
        /**
         * Get IP campuses
         * GET /ip/campus
         */
        $get(): Promise<ip.Campus[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    loadBalancing: {
        /**
         * List available services
         * GET /ip/loadBalancing
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /ip/loadBalancing/{serviceName}
             */
            $get(): Promise<ip.LoadBalancingIp>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            allowedBackends: {
                /**
                 * List of backends you can attach to your IP
                 * GET /ip/loadBalancing/{serviceName}/allowedBackends
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            backend: {
                /**
                 * Backends for this IP load balancing
                 * GET /ip/loadBalancing/{serviceName}/backend
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a new backend on your IP load balancing
                 * POST /ip/loadBalancing/{serviceName}/backend
                 */
                $post(params: { ipBackend: string, probe: ip.LoadBalancingBackendProbeEnum, weight?: number }): Promise<ip.LoadBalancingTask>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(backend: string): {
                    /**
                     * Remove a backend IP
                     * DELETE /ip/loadBalancing/{serviceName}/backend/{backend}
                     */
                    $delete(): Promise<ip.LoadBalancingTask>;
                    /**
                     * Get this object properties
                     * GET /ip/loadBalancing/{serviceName}/backend/{backend}
                     */
                    $get(): Promise<ip.LoadBalancingBackendIp>;
                    /**
                     * Alter this object properties
                     * PUT /ip/loadBalancing/{serviceName}/backend/{backend}
                     */
                    $put(params?: { backend?: string, mainBackendIp?: string, probe?: ip.LoadBalancingBackendProbeEnum, weight?: number, zone?: ip.LoadBalancingZoneEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    backupState: {
                        /**
                         * Set or unset the backend as a backup of another backend. Requests will be directed to the backup only if the main backend is in probe fail
                         * POST /ip/loadBalancing/{serviceName}/backend/{backend}/backupState
                         */
                        $post(params: { backupStateSet: boolean, mainBackendIp?: string }): Promise<ip.LoadBalancingTask>;
                    }
                    setWeight: {
                        /**
                         * Set the weight of a backend. For instance, if backend A has a weight of 8 and backup B was a weight of 16, backend B will receive twice more connections as backend A. Backends must be on the same POP for the weight parameter to take effect between them.
                         * POST /ip/loadBalancing/{serviceName}/backend/{backend}/setWeight
                         */
                        $post(params: { weight: number }): Promise<ip.LoadBalancingTask>;
                    }
                };
            }
            importCustomSsl: {
                /**
                 * Import your own ssl certificate on your IP load balancing. Ssl option is needed to use this url.
                 * POST /ip/loadBalancing/{serviceName}/importCustomSsl
                 */
                $post(params: { certificate: string, chain?: string, key: string }): Promise<ip.LoadBalancingTask>;
            }
            internalNatIp: {
                /**
                 * Ip subnet used by OVH to nat requests on your ip lb to your backends. You must ensure that your backends are not part of a network that overlap with this one.
                 * GET /ip/loadBalancing/{serviceName}/internalNatIp
                 */
                $get(params: { zone: ip.LoadBalancingZoneEnum }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            portsRedirection: {
                /**
                 * Get all srcPort
                 * GET /ip/loadBalancing/{serviceName}/portsRedirection
                 */
                $get(): Promise<ip.LoadBalancingAdditionalPortEnum[]>;
                /**
                 * Add a new port redirection
                 * POST /ip/loadBalancing/{serviceName}/portsRedirection
                 */
                $post(params?: { dstPort?: number, srcPort?: ip.LoadBalancingAdditionalPortEnum }): Promise<ip.LoadBalancingTask>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(srcPort: ip.LoadBalancingAdditionalPortEnum): {
                    /**
                     * Delete a port redirection
                     * DELETE /ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}
                     */
                    $delete(): Promise<ip.LoadBalancingTask>;
                    /**
                     * Get the value for the given srcPort
                     * GET /ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}
                     */
                    $get(): Promise<ip.LoadBalancingIp.LoadBalancingPort>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            probeIp: {
                /**
                 * Ip subnet used to send probes to your backends
                 * GET /ip/loadBalancing/{serviceName}/probeIp
                 */
                $get(params: { zone: ip.LoadBalancingZoneEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            restoreSsl: {
                /**
                 * Restore OVH' ssl certificate on your IP load balancing. Ssl option is needed to use this url. (A DCV mail will be sent to postmaster@your-domain.abc)
                 * POST /ip/loadBalancing/{serviceName}/restoreSsl
                 */
                $post(): Promise<ip.LoadBalancingTask>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /ip/loadBalancing/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /ip/loadBalancing/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            stickiness: {
                /**
                 * Set Stickiness type. 'ipSource' will stick clients to a backend by their source ip, 'cookie' will stick them by inserting a cookie, 'none' is to set no stickiness
                 * POST /ip/loadBalancing/{serviceName}/stickiness
                 */
                $post(params: { stickiness: ip.LoadBalancingStickinessEnum }): Promise<ip.LoadBalancingTask>;
            }
            switchToIplbNextGenerationApi: {
                /**
                 * Switch to ipLoadbalancing next-gen API. Benefits : additionnals probes, DDOS protection.
                 * POST /ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi
                 */
                $post(): Promise<ipLoadbalancing.Task.Task>;
            }
            task: {
                /**
                 * Task list associated with this IP
                 * GET /ip/loadBalancing/{serviceName}/task
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /ip/loadBalancing/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<ip.LoadBalancingTask>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
    service: {
        /**
         * List available services
         * GET /ip/service
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /ip/service/{serviceName}
             */
            $get(): Promise<ip.ServiceIp>;
            /**
             * Alter this object properties
             * PUT /ip/service/{serviceName}
             */
            $put(params?: { canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, ip?: string, organisationId?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /ip/service/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /ip/service/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /ip/service/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.NonExpiringService>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /ip/service/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
    $(ip: string): {
        /**
         * Get this object properties
         * GET /ip/{ip}
         */
        $get(): Promise<ip.Ip>;
        /**
         * Alter this object properties
         * PUT /ip/{ip}
         */
        $put(params?: { bringYourOwnIp?: boolean, campus?: string, canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, ip?: string, organisationId?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        antihack: {
            /**
             * Anti-Hack blocked IP
             * GET /ip/{ip}/antihack
             */
            $get(params?: { state?: ip.BlockedIpStateEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipBlocked: string): {
                /**
                 * Get this object properties
                 * GET /ip/{ip}/antihack/{ipBlocked}
                 */
                $get(): Promise<ip.BlockedIp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                unblock: {
                    /**
                     * Unblock this IP
                     * POST /ip/{ip}/antihack/{ipBlocked}/unblock
                     */
                    $post(): Promise<void>;
                }
            };
        }
        arp: {
            /**
             * ARP blocked IP
             * GET /ip/{ip}/arp
             */
            $get(params?: { state?: ip.ArpStateEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipBlocked: string): {
                /**
                 * Get this object properties
                 * GET /ip/{ip}/arp/{ipBlocked}
                 */
                $get(): Promise<ip.ArpBlockedIp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                unblock: {
                    /**
                     * Unblock this IP
                     * POST /ip/{ip}/arp/{ipBlocked}/unblock
                     */
                    $post(): Promise<void>;
                }
            };
        }
        changeOrg: {
            /**
             * Change organisation of this IP
             * POST /ip/{ip}/changeOrg
             */
            $post(params: { organisation: string }): Promise<ip.IpTask>;
        }
        delegation: {
            /**
             * Reverse delegation on IPv6 subnet
             * GET /ip/{ip}/delegation
             */
            $get(): Promise<string[]>;
            /**
             * Add target for reverse delegation on IPv6 subnet
             * POST /ip/{ip}/delegation
             */
            $post(params: { target: string }): Promise<ip.ReverseDelegation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(target: string): {
                /**
                 * Delete a target for reverse delegation on IPv6 subnet
                 * DELETE /ip/{ip}/delegation/{target}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /ip/{ip}/delegation/{target}
                 */
                $get(): Promise<ip.ReverseDelegation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        firewall: {
            /**
             * Ip under firewall
             * GET /ip/{ip}/firewall
             */
            $get(params?: { enabled?: boolean, state?: ip.FirewallStateEnum }): Promise<string[]>;
            /**
             * AntiDDOS option. Add new IP on firewall
             * POST /ip/{ip}/firewall
             */
            $post(params: { ipOnFirewall: string }): Promise<ip.FirewallIp>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipOnFirewall: string): {
                /**
                 * AntiDDOS option. Delete IP and rules from firewall
                 * DELETE /ip/{ip}/firewall/{ipOnFirewall}
                 */
                $delete(): Promise<string>;
                /**
                 * Get this object properties
                 * GET /ip/{ip}/firewall/{ipOnFirewall}
                 */
                $get(): Promise<ip.FirewallIp>;
                /**
                 * Alter this object properties
                 * PUT /ip/{ip}/firewall/{ipOnFirewall}
                 */
                $put(params?: { enabled?: boolean, ipOnFirewall?: string, state?: ip.FirewallStateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                rule: {
                    /**
                     * Rules for this IP
                     * GET /ip/{ip}/firewall/{ipOnFirewall}/rule
                     */
                    $get(params?: { state?: ip.FirewallRuleStateEnum }): Promise<number[]>;
                    /**
                     * AntiDDOS option. Add new rule on your IP
                     * POST /ip/{ip}/firewall/{ipOnFirewall}/rule
                     */
                    $post(params: { action: ip.FirewallActionEnum, destinationPort?: number, protocol: ip.FirewallProtocolEnum, sequence: ip.FirewallSequenceRangeEnum, source?: string, sourcePort?: number, tcpOption?: ip.FirewallOptionTCP }): Promise<ip.FirewallNetworkRule>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(sequence: number): {
                        /**
                         * AntiDDOS option. Delete rule
                         * DELETE /ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}
                         */
                        $delete(): Promise<ip.FirewallNetworkRule>;
                        /**
                         * Get this object properties
                         * GET /ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}
                         */
                        $get(): Promise<ip.FirewallNetworkRule>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        game: {
            /**
             * Ip under game anti-ddos
             * GET /ip/{ip}/game
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipOnGame: string): {
                /**
                 * Get this object properties
                 * GET /ip/{ip}/game/{ipOnGame}
                 */
                $get(): Promise<ip.GameMitigation>;
                /**
                 * Alter this object properties
                 * PUT /ip/{ip}/game/{ipOnGame}
                 */
                $put(params?: { firewallModeEnabled?: boolean, ipOnGame?: string, state?: ip.GameMitigationStateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                rule: {
                    /**
                     * IDs of rules configured for this IP
                     * GET /ip/{ip}/game/{ipOnGame}/rule
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Add new rule on your IP
                     * POST /ip/{ip}/game/{ipOnGame}/rule
                     */
                    $post(params: { ports: complexType.Range<number>, protocol: ip.GameMitigationRuleProtocolEnum }): Promise<ip.GameMitigationRule>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete rule
                         * DELETE /ip/{ip}/game/{ipOnGame}/rule/{id}
                         */
                        $delete(): Promise<ip.GameMitigationRule>;
                        /**
                         * Get this object properties
                         * GET /ip/{ip}/game/{ipOnGame}/rule/{id}
                         */
                        $get(): Promise<ip.GameMitigationRule>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        license: {
            cloudLinux: {
                /**
                 * Cloud Linux licenses associated to this IP
                 * GET /ip/{ip}/license/cloudLinux
                 */
                $get(params?: { ipAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            cpanel: {
                /**
                 * Cpanel licenses associated to this IP
                 * GET /ip/{ip}/license/cpanel
                 */
                $get(params?: { ipAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            directadmin: {
                /**
                 * DirectAdmin licenses associated to this IP
                 * GET /ip/{ip}/license/directadmin
                 */
                $get(params?: { ipAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            plesk: {
                /**
                 * Plesk licenses associated to this IP
                 * GET /ip/{ip}/license/plesk
                 */
                $get(params?: { ipAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            sqlserver: {
                /**
                 * SQL Server licenses associated to this IP
                 * GET /ip/{ip}/license/sqlserver
                 */
                $get(params?: { ipAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            virtuozzo: {
                /**
                 * Virtuozzo licenses associated to this IP
                 * GET /ip/{ip}/license/virtuozzo
                 */
                $get(params?: { ipAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            windows: {
                /**
                 * Windows licenses associated to this IP
                 * GET /ip/{ip}/license/windows
                 */
                $get(params?: { ipAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            worklight: {
                /**
                 * WorkLight licenses associated to this IP
                 * GET /ip/{ip}/license/worklight
                 */
                $get(params?: { ipAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        migrationToken: {
            /**
             * Get this object properties
             * GET /ip/{ip}/migrationToken
             */
            $get(): Promise<ip.IpMigrationToken>;
            /**
             * Generate a migration token
             * POST /ip/{ip}/migrationToken
             */
            $post(params: { customerId: string }): Promise<ip.IpMigrationToken>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        mitigation: {
            /**
             * Ip under mitigation
             * GET /ip/{ip}/mitigation
             */
            $get(params?: { auto?: boolean, state?: ip.MitigationStateEnum }): Promise<string[]>;
            /**
             * AntiDDOS option. Add new IP on permanent mitigation
             * POST /ip/{ip}/mitigation
             */
            $post(params: { ipOnMitigation: string }): Promise<ip.MitigationIp>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipOnMitigation: string): {
                /**
                 * AntiDDOS option. Delete IP from mitigation
                 * DELETE /ip/{ip}/mitigation/{ipOnMitigation}
                 */
                $delete(): Promise<ip.MitigationIp>;
                /**
                 * Get this object properties
                 * GET /ip/{ip}/mitigation/{ipOnMitigation}
                 */
                $get(): Promise<ip.MitigationIp>;
                /**
                 * Alter this object properties
                 * PUT /ip/{ip}/mitigation/{ipOnMitigation}
                 */
                $put(params?: { auto?: boolean, ipOnMitigation?: string, permanent?: boolean, state?: ip.MitigationStateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                stats: {
                    /**
                     * AntiDDOS option. Get statistics about your traffic in and out during this mitigation
                     * GET /ip/{ip}/mitigation/{ipOnMitigation}/stats
                     */
                    $get(params: { from: string, scale: ip.MitigationStatsScaleEnum, to: string }): Promise<ip.MitigationStats[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                topStream: {
                    /**
                     * AntiDDOS option. Get top stream on your ip on a specific timestamp
                     * GET /ip/{ip}/mitigation/{ipOnMitigation}/topStream
                     */
                    $get(params: { date: string, scale: ip.MitigationStatsScaleEnum }): Promise<ip.MitigationDetailedStats[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        mitigationProfiles: {
            /**
             * Manage mitigation profile on your IPs
             * GET /ip/{ip}/mitigationProfiles
             */
            $get(): Promise<string[]>;
            /**
             * Create new profile for one of your ip
             * POST /ip/{ip}/mitigationProfiles
             */
            $post(params: { autoMitigationTimeOut: ip.MitigationProfileAutoMitigationTimeOutEnum, ipMitigationProfile: string }): Promise<ip.MitigationProfile>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipMitigationProfile: string): {
                /**
                 * Delete mitigation profile
                 * DELETE /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                 */
                $get(): Promise<ip.MitigationProfile>;
                /**
                 * Alter this object properties
                 * PUT /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                 */
                $put(params?: { autoMitigationTimeOut?: ip.MitigationProfileAutoMitigationTimeOutEnum, ipMitigationProfile?: string, state?: ip.MitigationProfileStateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        move: {
            /**
             * List services available as a destination
             * GET /ip/{ip}/move
             */
            $get(): Promise<ip.Destinations>;
            /**
             * Move this IP to another service
             * POST /ip/{ip}/move
             */
            $post(params: { nexthop?: string, to: string }): Promise<ip.IpTask>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        park: {
            /**
             * Park this IP
             * POST /ip/{ip}/park
             */
            $post(): Promise<ip.IpTask>;
        }
        phishing: {
            /**
             * Ip under anti-phishing
             * GET /ip/{ip}/phishing
             */
            $get(params?: { ipOnAntiphishing?: string, state?: ip.AntiphishingStateEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /ip/{ip}/phishing/{id}
                 */
                $get(): Promise<ip.Antiphishing>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        reverse: {
            /**
             * Reverse on your ip
             * GET /ip/{ip}/reverse
             */
            $get(): Promise<string[]>;
            /**
             * Add reverse on an ip
             * POST /ip/{ip}/reverse
             */
            $post(params: { ipReverse: string, reverse: string }): Promise<ip.ReverseIp>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipReverse: string): {
                /**
                 * Delete a reverse on one IP
                 * DELETE /ip/{ip}/reverse/{ipReverse}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /ip/{ip}/reverse/{ipReverse}
                 */
                $get(): Promise<ip.ReverseIp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        ripe: {
            /**
             * Get this object properties
             * GET /ip/{ip}/ripe
             */
            $get(): Promise<ip.RipeInfos>;
            /**
             * Alter this object properties
             * PUT /ip/{ip}/ripe
             */
            $put(params?: { description?: string, netname?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        spam: {
            /**
             * Ip spamming
             * GET /ip/{ip}/spam
             */
            $get(params?: { state?: ip.SpamStateEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipSpamming: string): {
                /**
                 * Get this object properties
                 * GET /ip/{ip}/spam/{ipSpamming}
                 */
                $get(): Promise<ip.SpamIp>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                stats: {
                    /**
                     * Get statistics about the email traffic
                     * GET /ip/{ip}/spam/{ipSpamming}/stats
                     */
                    $get(params: { from: string, to: string }): Promise<ip.SpamStats[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                unblock: {
                    /**
                     * Release the ip from anti-spam system
                     * POST /ip/{ip}/spam/{ipSpamming}/unblock
                     */
                    $post(): Promise<ip.SpamIp>;
                }
            };
        }
        task: {
            /**
             * IP tasks
             * GET /ip/{ip}/task
             */
            $get(params?: { function_?: ip.TaskFunctionEnum, status?: ip.TaskStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
                 * GET /ip/{ip}/task/{taskId}
                 */
                $get(): Promise<ip.IpTask>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        terminate: {
            /**
             * Delete a failover IP
             * POST /ip/{ip}/terminate
             */
            $post(): Promise<ip.IpTask>;
        }
    };
}

import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /ip Models
 * Source: https://eu.api.ovh.com/1.0/ip.json
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
    /**
     * Region names
     * type fullname: coreTypes.RegionCodenameEnum
     */
    export type RegionCodenameEnum = "ap-south-mum" | "ap-southeast-sgp" | "ap-southeast-syd" | "ca-east-bhs" | "ca-east-tor" | "eu-central-waw" | "eu-west-eri" | "eu-west-gra" | "eu-west-lim" | "eu-west-par" | "eu-west-rbx" | "eu-west-sbg" | "us-east-vin" | "us-west-hil"
}
export namespace dedicated {
    /**
     * ovh datacenter
     * type fullname: dedicated.DatacenterEnum
     */
    export type DatacenterEnum = "bhs1" | "bhs2" | "bhs3" | "bhs4" | "bhs5" | "bhs6" | "bhs7" | "bhs8" | "cch01" | "crx1" | "crx2" | "dc1" | "eri1" | "eri2" | "gra04" | "gra1" | "gra2" | "gra3" | "gsw" | "hil1" | "ieb01" | "lil1-int1" | "lim1" | "lim2" | "lim3" | "mr901" | "p19" | "rbx" | "rbx-hz" | "rbx1" | "rbx10" | "rbx2" | "rbx3" | "rbx4" | "rbx5" | "rbx6" | "rbx7" | "rbx8" | "rbx9" | "sbg1" | "sbg2" | "sbg3" | "sbg4" | "sbg5" | "sgp02" | "sgp1" | "syd03" | "syd1" | "syd2" | "vin1" | "waw1" | "ynm1" | "yyz01"
}
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
     * Preview of an IP aggregation on BYOIP Additional IPs
     * interface fullName: ip.ByoipAggregationPreview.ByoipAggregationPreview
     */
    export interface ByoipAggregationPreview {
        aggregationIp: string;
        childrenIps: string[];
    }
    /**
     * Preview of an IP slicing on BYOIP Additional IPs
     * interface fullName: ip.ByoipSlicingPreview.ByoipSlicingPreview
     */
    export interface ByoipSlicingPreview {
        childrenIps: string[];
        slicingSize: number;
    }
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
    export type CampusEnum = "BHS" | "ERI" | "GRA" | "HIL" | "LIM" | "RBX" | "SBG" | "SGP" | "SYD" | "VIN" | "WAW" | "YNM" | "YYZ"
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
    export type FirewallSequenceRangeEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
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
        maxRules: number;
        state: ip.GameMitigationStateEnum;
        supportedProtocols: ip.GameMitigationRuleProtocolEnum[];
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
    export type GameMitigationStateEnum = "cleanRulesPending" | "firewallModeDisablePending" | "firewallModeEnablePending" | "ok"
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
        isAdditionalIp: boolean;
        organisationId?: string;
        regions?: coreTypes.RegionCodenameEnum[];
        rir?: string;
        routedTo?: ip.RoutedTo;
        type: ip.IpTypeEnum;
        version: ip.IpVersionEnum;
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
     * Possible values for IP version
     * type fullname: ip.IpVersionEnum
     */
    export type IpVersionEnum = 4 | 6
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
    export type MitigationProfileAutoMitigationTimeOutEnum = 0 | 15 | 60 | 360 | 1560
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
     * Your IP linked to service
     * interface fullName: ip.ServiceIpWithIAM.ServiceIpWithIAM
     */
    export interface ServiceIpWithIAM {
        canBeTerminated: boolean;
        country?: coreTypes.CountryEnum;
        description?: string;
        iam?: iam.ResourceMetadata;
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
    export type TaskFunctionEnum = "arinBlockReassign" | "changeRipeOrg" | "checkAndReleaseIp" | "genericMoveFloatingIp" | "supernetByoipFailoverPartitioning"
    /**
     * different task status
     * type fullname: ip.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
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
 * Api model for /ip
 */
export interface Ip {
    /**
     * Your OVH IPs
     * GET /ip
     */
    $get(params?: { campus?: string, description?: string, ip?: string, isAdditionalIp?: boolean, 'routedTo.serviceName'?: string, type?: ip.IpTypeEnum, version?: ip.IpVersionEnum }): Promise<string[]>;
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
    service: {
        /**
         * Your ip services
         * GET /ip/service
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
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
                 * Confirm service termination
                 * POST /ip/service/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /ip/service/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /ip/service/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            terminate: {
                /**
                 * Ask for the termination of your service
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
        $put(params?: { bringYourOwnIp?: boolean, campus?: string, canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, ip?: string, isAdditionalIp?: boolean, organisationId?: string, regions?: coreTypes.RegionCodenameEnum[], rir?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum, version?: ip.IpVersionEnum }): Promise<void>;
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
        bringYourOwnIp: {
            aggregate: {
                /**
                 * Get available aggregation configurations for this BYOIP Additional IP and it's neighbor(s)
                 * GET /ip/{ip}/bringYourOwnIp/aggregate
                 */
                $get(): Promise<ip.ByoipAggregationPreview[]>;
                /**
                 * Aggregate a sliced BYOIP Additional IPs and it's neighbor(s) into a single bigger Additional IP parent
                 * POST /ip/{ip}/bringYourOwnIp/aggregate
                 */
                $post(params: { aggregationIp: string }): Promise<ip.IpTask>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            slice: {
                /**
                 * Get available slicing configurations for this BYOIP Additional IP
                 * GET /ip/{ip}/bringYourOwnIp/slice
                 */
                $get(): Promise<ip.ByoipSlicingPreview[]>;
                /**
                 * Slice a BYOIP Additional IP into smaller Additional IPs
                 * POST /ip/{ip}/bringYourOwnIp/slice
                 */
                $post(params: { slicingSize: number }): Promise<ip.IpTask>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
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
                $put(params?: { firewallModeEnabled?: boolean, ipOnGame?: string, maxRules?: number, state?: ip.GameMitigationStateEnum, supportedProtocols?: ip.GameMitigationRuleProtocolEnum[] }): Promise<void>;
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

export declare function proxyIp(ovhEngine: OvhRequestable): Ip;
export default proxyIp;

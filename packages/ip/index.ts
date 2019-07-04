import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.Range
    // fullName: complexType.Range.Range
    export interface Range<T> {
        from?: T;
        to?: T;
    }
}
export namespace coreTypes {
    //coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace ip {
    //ip.Antiphishing
    // fullName: ip.Antiphishing.Antiphishing
    export interface Antiphishing {
        creationDate?: string;
        id?: number;
        ipOnAntiphishing?: string;
        state?: OVH.ip.AntiphishingStateEnum;
        urlPhishing?: string;
    }
    //ip.AntiphishingStateEnum
    export type AntiphishingStateEnum = "blocked" | "blocking" | "unblocked" | "unblocking"
    //ip.ArpBlockedIp
    // fullName: ip.ArpBlockedIp.ArpBlockedIp
    export interface ArpBlockedIp {
        blockedSince?: string;
        ipBlocked?: string;
        logs?: string;
        state?: OVH.ip.ArpStateEnum;
        time?: number;
    }
    //ip.ArpStateEnum
    export type ArpStateEnum = "blocked" | "unblocking"
    //ip.BlockedIp
    // fullName: ip.BlockedIp.BlockedIp
    export interface BlockedIp {
        blockedSince?: string;
        ipBlocked?: string;
        logs?: string;
        state?: OVH.ip.BlockedIpStateEnum;
        time?: number;
    }
    //ip.BlockedIpStateEnum
    export type BlockedIpStateEnum = "blocked" | "unblocking"
    //ip.Destination
    // fullName: ip.Destination.Destination
    export interface Destination {
        nexthop?: string[];
        service?: string;
    }
    //ip.Destinations
    // fullName: ip.Destinations.Destinations
    export interface Destinations {
        cloudProject?: OVH.ip.Destination[];
        dedicatedCloud?: OVH.ip.Destination[];
        dedicatedServer?: OVH.ip.Destination[];
        hostingReseller?: OVH.ip.Destination[];
        ipLoadbalancing?: OVH.ip.Destination[];
        vps?: OVH.ip.Destination[];
    }
    //ip.FirewallActionEnum
    export type FirewallActionEnum = "deny" | "permit"
    //ip.FirewallIp
    // fullName: ip.FirewallIp.FirewallIp
    export interface FirewallIp {
        enabled?: boolean;
        ipOnFirewall?: string;
        state?: OVH.ip.FirewallStateEnum;
    }
    //ip.FirewallNetworkRule
    // fullName: ip.FirewallNetworkRule.FirewallNetworkRule
    export interface FirewallNetworkRule {
        action?: OVH.ip.FirewallActionEnum;
        creationDate?: string;
        destination?: string;
        destinationPort?: string;
        fragments?: boolean;
        protocol?: OVH.ip.FirewallProtocolEnum;
        rule?: string;
        sequence?: number;
        source?: string;
        sourcePort?: string;
        state?: OVH.ip.FirewallRuleStateEnum;
        tcpOption?: string;
    }
    //ip.FirewallOptionTCP
    // fullName: ip.FirewallOptionTCP.FirewallOptionTCP
    export interface FirewallOptionTCP {
        fragments?: boolean;
        option?: OVH.ip.FirewallTCPOptionEnum;
    }
    //ip.FirewallProtocolEnum
    export type FirewallProtocolEnum = "ah" | "esp" | "gre" | "icmp" | "ipv4" | "tcp" | "udp"
    //ip.FirewallRuleStateEnum
    export type FirewallRuleStateEnum = "creationPending" | "ok" | "removalPending"
    //ip.FirewallSequenceRangeEnum
    export type FirewallSequenceRangeEnum = 0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    //ip.FirewallStateEnum
    export type FirewallStateEnum = "disableFirewallPending" | "enableFirewallPending" | "ok"
    //ip.FirewallTCPOptionEnum
    export type FirewallTCPOptionEnum = "established" | "syn"
    //ip.GameMitigation
    // fullName: ip.GameMitigation.GameMitigation
    export interface GameMitigation {
        firewallModeEnabled?: boolean;
        ipOnGame?: string;
        state?: OVH.ip.GameMitigationStateEnum;
    }
    //ip.GameMitigationRule
    // fullName: ip.GameMitigationRule.GameMitigationRule
    export interface GameMitigationRule {
        id?: number;
        ports?: OVH.complexType.Range<number>;
        protocol?: OVH.ip.GameMitigationRuleProtocolEnum;
        state?: OVH.ip.GameMitigationRuleStateEnum;
    }
    //ip.GameMitigationRuleProtocolEnum
    export type GameMitigationRuleProtocolEnum = "arkSurvivalEvolved" | "arma" | "gtaMultiTheftAutoSanAndreas" | "gtaSanAndreasMultiplayerMod" | "hl2Source" | "minecraftPocketEdition" | "minecraftQuery" | "mumble" | "other" | "rust" | "teamspeak2" | "teamspeak3" | "trackmaniaShootmania"
    //ip.GameMitigationRuleStateEnum
    export type GameMitigationRuleStateEnum = "createRulePending" | "deleteRulePending" | "ok"
    //ip.GameMitigationStateEnum
    export type GameMitigationStateEnum = "firewallModeDisablePending" | "firewallModeEnablePending" | "ok"
    //ip.Ip
    // fullName: ip.Ip.Ip
    export interface Ip {
        canBeTerminated?: boolean;
        country?: OVH.coreTypes.CountryEnum;
        description?: string;
        ip?: string;
        organisationId?: string;
        routedTo?: OVH.ip.RoutedTo;
        type?: OVH.ip.IpTypeEnum;
    }
    //ip.IpMigrationToken
    // fullName: ip.IpMigrationToken.IpMigrationToken
    export interface IpMigrationToken {
        customerId?: string;
        token?: string;
    }
    //ip.IpTask
    // fullName: ip.IpTask.IpTask
    export interface IpTask {
        comment?: string;
        destination?: OVH.ip.RoutedTo;
        doneDate?: string;
        function?: OVH.ip.TaskFunctionEnum;
        lastUpdate?: string;
        startDate?: string;
        status?: OVH.ip.TaskStatusEnum;
        taskId?: number;
    }
    //ip.IpTypeEnum
    export type IpTypeEnum = "cdn" | "cloud" | "dedicated" | "failover" | "hosted_ssl" | "housing" | "loadBalancing" | "mail" | "overthebox" | "pcc" | "pci" | "private" | "vpn" | "vps" | "vrack" | "xdsl"
    //ip.LoadBalancingAdditionalPortEnum
    export type LoadBalancingAdditionalPortEnum = 3306 | 443 | 5432 | 80
    //ip.LoadBalancingBackendIp
    // fullName: ip.LoadBalancingBackendIp.LoadBalancingBackendIp
    export interface LoadBalancingBackendIp {
        backend?: string;
        mainBackendIp?: string;
        probe?: OVH.ip.LoadBalancingBackendProbeEnum;
        weight?: number;
        zone?: OVH.ip.LoadBalancingZoneEnum;
    }
    //ip.LoadBalancingBackendProbeEnum
    export type LoadBalancingBackendProbeEnum = "http" | "icmp" | "none" | "oco"
    //ip.LoadBalancingIp
    // fullName: ip.LoadBalancingIp.LoadBalancingIp
    export interface LoadBalancingIp {
        ipLoadBalancing?: string;
        serviceName?: string;
        ssl?: OVH.ip.LoadBalancingSslEnum;
        state?: OVH.ip.LoadBalancingStateEnum;
        stickiness?: OVH.ip.LoadBalancingStickinessEnum;
        zone?: OVH.ip.LoadBalancingZoneEnum[];
    }
    export namespace LoadBalancingIp {
        //ip.LoadBalancingIp.LoadBalancingPort
        // fullName: ip.LoadBalancingIp.LoadBalancingPort.LoadBalancingPort
        export interface LoadBalancingPort {
            dstPort?: number;
            srcPort?: OVH.ip.LoadBalancingAdditionalPortEnum;
        }
    }
    //ip.LoadBalancingSslEnum
    export type LoadBalancingSslEnum = "customer" | "none" | "ovh"
    //ip.LoadBalancingStateEnum
    export type LoadBalancingStateEnum = "blacklisted" | "deleted" | "free" | "ok" | "quarantined" | "suspended"
    //ip.LoadBalancingStickinessEnum
    export type LoadBalancingStickinessEnum = "cookie" | "none" | "sourceIp"
    //ip.LoadBalancingTask
    // fullName: ip.LoadBalancingTask.LoadBalancingTask
    export interface LoadBalancingTask {
        action?: OVH.ip.LoadBalancingTaskActionEnum;
        creationDate?: string;
        id?: number;
        status?: string;
    }
    //ip.LoadBalancingTaskActionEnum
    export type LoadBalancingTaskActionEnum = "activateSsl" | "addBackend" | "addIpToBackend" | "announceIpLoadBalancing" | "backupStateSet" | "backupStateUnset" | "changeProbe" | "delBackend" | "desactivateSsl" | "removeIpFromBackend" | "setPortRedirection" | "setStickiness" | "setWeight" | "unannounceIpLoadBalancing" | "unsetPortRedirection"
    //ip.LoadBalancingZoneEnum
    export type LoadBalancingZoneEnum = "bhs" | "gra" | "rbx" | "sbg"
    //ip.MitigationAttack
    // fullName: ip.MitigationAttack.MitigationAttack
    export interface MitigationAttack {
        endDate?: string;
        idAttack?: number;
        ipAttack?: string;
        startDate?: string;
    }
    //ip.MitigationDetailedStats
    // fullName: ip.MitigationDetailedStats.MitigationDetailedStats
    export interface MitigationDetailedStats {
        destPort?: number;
        fragments?: boolean;
        icmpCode?: number;
        icmpType?: number;
        in?: OVH.ip.MitigationTraffic;
        out?: OVH.ip.MitigationTraffic;
        protocol?: number;
        srcPort?: number;
        syn?: boolean;
    }
    //ip.MitigationIp
    // fullName: ip.MitigationIp.MitigationIp
    export interface MitigationIp {
        auto?: boolean;
        ipOnMitigation?: string;
        permanent?: boolean;
        state?: OVH.ip.MitigationStateEnum;
    }
    //ip.MitigationProfile
    // fullName: ip.MitigationProfile.MitigationProfile
    export interface MitigationProfile {
        autoMitigationTimeOut?: OVH.ip.MitigationProfileAutoMitigationTimeOutEnum;
        ipMitigationProfile?: string;
        state?: OVH.ip.MitigationProfileStateEnum;
    }
    //ip.MitigationProfileAutoMitigationTimeOutEnum
    export type MitigationProfileAutoMitigationTimeOutEnum = 0 | 15 | 1560 | 360 | 60
    //ip.MitigationProfileStateEnum
    export type MitigationProfileStateEnum = "ok" | "tasksPending"
    //ip.MitigationStateEnum
    export type MitigationStateEnum = "creationPending" | "ok" | "removalPending"
    //ip.MitigationStats
    // fullName: ip.MitigationStats.MitigationStats
    export interface MitigationStats {
        in?: OVH.ip.MitigationTraffic;
        out?: OVH.ip.MitigationTraffic;
        timestamp?: number;
    }
    //ip.MitigationStatsScaleEnum
    export type MitigationStatsScaleEnum = "10s" | "1m" | "5m"
    //ip.MitigationTraffic
    // fullName: ip.MitigationTraffic.MitigationTraffic
    export interface MitigationTraffic {
        bps?: number;
        pps?: number;
    }
    //ip.ReverseDelegation
    // fullName: ip.ReverseDelegation.ReverseDelegation
    export interface ReverseDelegation {
        target?: string;
    }
    //ip.ReverseIp
    // fullName: ip.ReverseIp.ReverseIp
    export interface ReverseIp {
        ipReverse?: string;
        reverse?: string;
    }
    //ip.RipeInfos
    // fullName: ip.RipeInfos.RipeInfos
    export interface RipeInfos {
        description?: string;
        netname?: string;
    }
    //ip.RoutedTo
    // fullName: ip.RoutedTo.RoutedTo
    export interface RoutedTo {
        serviceName?: string;
    }
    //ip.ServiceIp
    // fullName: ip.ServiceIp.ServiceIp
    export interface ServiceIp {
        canBeTerminated?: boolean;
        country?: OVH.coreTypes.CountryEnum;
        description?: string;
        ip?: string;
        organisationId?: string;
        routedTo?: OVH.ip.RoutedTo;
        type?: OVH.ip.IpTypeEnum;
    }
    //ip.SpamIp
    // fullName: ip.SpamIp.SpamIp
    export interface SpamIp {
        date?: string;
        ipSpamming?: string;
        state?: OVH.ip.SpamStateEnum;
        time?: number;
    }
    //ip.SpamStateEnum
    export type SpamStateEnum = "blockedForSpam" | "unblocked" | "unblocking"
    //ip.SpamStats
    // fullName: ip.SpamStats.SpamStats
    export interface SpamStats {
        averageSpamscore?: number;
        detectedSpams?: OVH.ip.SpamTarget[];
        numberOfSpams?: number;
        timestamp?: number;
        total?: number;
    }
    //ip.SpamTarget
    // fullName: ip.SpamTarget.SpamTarget
    export interface SpamTarget {
        date?: number;
        destinationIp?: string;
        messageId?: string;
        spamscore?: number;
    }
    //ip.TaskFunctionEnum
    export type TaskFunctionEnum = "arinBlockReassign" | "changeRipeOrg" | "checkAndReleaseIp" | "genericMoveFloatingIp"
    //ip.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
}
export namespace ipLoadbalancing {
    export namespace Task {
        //ipLoadbalancing.Task.Task
        // fullName: ipLoadbalancing.Task.Task.Task
        export interface Task {
            action?: OVH.ipLoadbalancing.TaskActionEnum;
            creationDate?: string;
            doneDate?: string;
            id?: number;
            progress?: number;
            status?: OVH.ipLoadbalancing.TaskStatusEnum;
            zones?: string[];
        }
    }
    //ipLoadbalancing.TaskActionEnum
    export type TaskActionEnum = "deleteIplb" | "deployIplb" | "install" | "installIplb" | "installZone" | "orderFreeCertificate" | "orderPaidCertificate" | "orderSsl" | "refreshIplb" | "releaseIplb" | "releaseIplbZone" | "reopenIplb" | "suspendIplb" | "suspendZone" | "switchToIplbNextGenerationApi" | "vrackAttach" | "vrackDetach"
    //ipLoadbalancing.TaskStatusEnum
    export type TaskStatusEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "todo"
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
    //services.NonExpiringService
    // fullName: services.NonExpiringService.NonExpiringService
    export interface NonExpiringService {
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /ip
export interface Ip {
    // GET /ip
    $get(param?: {type?: ip.IpTypeEnum, description?: string, ip?: string, routedTo_serviceName?: string}): Promise<string[]>;
    service:  {
        // GET /ip/service
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /ip/service/{serviceName}
            $get(): Promise<ip.ServiceIp>;
            // PUT /ip/service/{serviceName}
            $put(body?: {body: ip.ServiceIp}): Promise<void>;
            terminate:  {
                // POST /ip/service/{serviceName}/terminate
                $post(): Promise<string>;
            }
            serviceInfos:  {
                // GET /ip/service/{serviceName}/serviceInfos
                $get(): Promise<services.NonExpiringService>;
            }
            changeContact:  {
                // POST /ip/service/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination:  {
                // POST /ip/service/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
        } | any
    }
    loadBalancing:  {
        // GET /ip/loadBalancing
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /ip/loadBalancing/{serviceName}
            $get(): Promise<ip.LoadBalancingIp>;
            serviceInfos:  {
                // GET /ip/loadBalancing/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /ip/loadBalancing/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            probeIp:  {
                // GET /ip/loadBalancing/{serviceName}/probeIp
                $get(param?: {zone: ip.LoadBalancingZoneEnum}): Promise<string[]>;
            }
            restoreSsl:  {
                // POST /ip/loadBalancing/{serviceName}/restoreSsl
                $post(): Promise<ip.LoadBalancingTask>;
            }
            internalNatIp:  {
                // GET /ip/loadBalancing/{serviceName}/internalNatIp
                $get(param?: {zone: ip.LoadBalancingZoneEnum}): Promise<string>;
            }
            allowedBackends:  {
                // GET /ip/loadBalancing/{serviceName}/allowedBackends
                $get(): Promise<string[]>;
            }
            portsRedirection:  {
                // GET /ip/loadBalancing/{serviceName}/portsRedirection
                $get(): Promise<ip.LoadBalancingAdditionalPortEnum[]>;
                // POST /ip/loadBalancing/{serviceName}/portsRedirection
                $post(body?: {body: ip.LoadBalancingIp.LoadBalancingPort}): Promise<ip.LoadBalancingTask>;
                [keys: string]: {
                    // GET /ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}
                    $get(): Promise<ip.LoadBalancingIp.LoadBalancingPort>;
                    // DELETE /ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}
                    $delete(): Promise<ip.LoadBalancingTask>;
                } | any
            }
            task:  {
                // GET /ip/loadBalancing/{serviceName}/task
                $get(): Promise<number[]>;
                [keys: string]: {
                    // GET /ip/loadBalancing/{serviceName}/task/{taskId}
                    $get(): Promise<ip.LoadBalancingTask>;
                } | any
            }
            stickiness:  {
                // POST /ip/loadBalancing/{serviceName}/stickiness
                $post(body?: {stickiness: ip.LoadBalancingStickinessEnum}): Promise<ip.LoadBalancingTask>;
            }
            backend:  {
                // GET /ip/loadBalancing/{serviceName}/backend
                $get(): Promise<string[]>;
                // POST /ip/loadBalancing/{serviceName}/backend
                $post(body?: {ipBackend: string, probe: ip.LoadBalancingBackendProbeEnum, weight?: number}): Promise<ip.LoadBalancingTask>;
                [keys: string]: {
                    // GET /ip/loadBalancing/{serviceName}/backend/{backend}
                    $get(): Promise<ip.LoadBalancingBackendIp>;
                    // PUT /ip/loadBalancing/{serviceName}/backend/{backend}
                    $put(body?: {body: ip.LoadBalancingBackendIp}): Promise<void>;
                    // DELETE /ip/loadBalancing/{serviceName}/backend/{backend}
                    $delete(): Promise<ip.LoadBalancingTask>;
                    backupState:  {
                        // POST /ip/loadBalancing/{serviceName}/backend/{backend}/backupState
                        $post(body?: {backupStateSet: boolean, mainBackendIp?: string}): Promise<ip.LoadBalancingTask>;
                    }
                    setWeight:  {
                        // POST /ip/loadBalancing/{serviceName}/backend/{backend}/setWeight
                        $post(body?: {weight: number}): Promise<ip.LoadBalancingTask>;
                    }
                } | any
            }
            switchToIplbNextGenerationApi:  {
                // POST /ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi
                $post(): Promise<ipLoadbalancing.Task.Task>;
            }
            importCustomSsl:  {
                // POST /ip/loadBalancing/{serviceName}/importCustomSsl
                $post(body?: {certificate: string, chain?: string, key: string}): Promise<ip.LoadBalancingTask>;
            }
        } | any
    }
    [keys: string]: {
        // GET /ip/{ip}
        $get(): Promise<ip.Ip>;
        // PUT /ip/{ip}
        $put(body?: {body: ip.Ip}): Promise<void>;
        park:  {
            // POST /ip/{ip}/park
            $post(): Promise<ip.IpTask>;
        }
        changeOrg:  {
            // POST /ip/{ip}/changeOrg
            $post(body?: {organisation: string}): Promise<ip.IpTask>;
        }
        reverse:  {
            // GET /ip/{ip}/reverse
            $get(): Promise<string[]>;
            // POST /ip/{ip}/reverse
            $post(body?: {ipReverse: string, reverse: string}): Promise<ip.ReverseIp>;
            [keys: string]: {
                // GET /ip/{ip}/reverse/{ipReverse}
                $get(): Promise<ip.ReverseIp>;
                // DELETE /ip/{ip}/reverse/{ipReverse}
                $delete(): Promise<void>;
            } | any
        }
        mitigation:  {
            // GET /ip/{ip}/mitigation
            $get(param?: {auto?: boolean, state?: ip.MitigationStateEnum}): Promise<string[]>;
            // POST /ip/{ip}/mitigation
            $post(body?: {ipOnMitigation: string}): Promise<ip.MitigationIp>;
            [keys: string]: {
                // GET /ip/{ip}/mitigation/{ipOnMitigation}
                $get(): Promise<ip.MitigationIp>;
                // PUT /ip/{ip}/mitigation/{ipOnMitigation}
                $put(body?: {body: ip.MitigationIp}): Promise<void>;
                // DELETE /ip/{ip}/mitigation/{ipOnMitigation}
                $delete(): Promise<ip.MitigationIp>;
                topStream:  {
                    // GET /ip/{ip}/mitigation/{ipOnMitigation}/topStream
                    $get(param?: {date: string, scale: ip.MitigationStatsScaleEnum}): Promise<ip.MitigationDetailedStats[]>;
                }
                stats:  {
                    // GET /ip/{ip}/mitigation/{ipOnMitigation}/stats
                    $get(param?: {to: string, scale: ip.MitigationStatsScaleEnum, from: string}): Promise<ip.MitigationStats[]>;
                }
            } | any
        }
        game:  {
            // GET /ip/{ip}/game
            $get(): Promise<string[]>;
            [keys: string]: {
                // GET /ip/{ip}/game/{ipOnGame}
                $get(): Promise<ip.GameMitigation>;
                // PUT /ip/{ip}/game/{ipOnGame}
                $put(body?: {body: ip.GameMitigation}): Promise<void>;
                rule:  {
                    // GET /ip/{ip}/game/{ipOnGame}/rule
                    $get(): Promise<number[]>;
                    // POST /ip/{ip}/game/{ipOnGame}/rule
                    $post(body?: {ports: complexType.Range<number>, protocol: ip.GameMitigationRuleProtocolEnum}): Promise<ip.GameMitigationRule>;
                    [keys: string]: {
                        // GET /ip/{ip}/game/{ipOnGame}/rule/{id}
                        $get(): Promise<ip.GameMitigationRule>;
                        // DELETE /ip/{ip}/game/{ipOnGame}/rule/{id}
                        $delete(): Promise<ip.GameMitigationRule>;
                    } | any
                }
            } | any
        }
        license:  {
            directadmin:  {
                // GET /ip/{ip}/license/directadmin
                $get(param?: {ipAddress?: string}): Promise<string[]>;
            }
            cpanel:  {
                // GET /ip/{ip}/license/cpanel
                $get(param?: {ipAddress?: string}): Promise<string[]>;
            }
            cloudLinux:  {
                // GET /ip/{ip}/license/cloudLinux
                $get(param?: {ipAddress?: string}): Promise<string[]>;
            }
            virtuozzo:  {
                // GET /ip/{ip}/license/virtuozzo
                $get(param?: {ipAddress?: string}): Promise<string[]>;
            }
            windows:  {
                // GET /ip/{ip}/license/windows
                $get(param?: {ipAddress?: string}): Promise<string[]>;
            }
            worklight:  {
                // GET /ip/{ip}/license/worklight
                $get(param?: {ipAddress?: string}): Promise<string[]>;
            }
            sqlserver:  {
                // GET /ip/{ip}/license/sqlserver
                $get(param?: {ipAddress?: string}): Promise<string[]>;
            }
            plesk:  {
                // GET /ip/{ip}/license/plesk
                $get(param?: {ipAddress?: string}): Promise<string[]>;
            }
        }
        task:  {
            // GET /ip/{ip}/task
            $get(param?: {status?: ip.TaskStatusEnum, function_?: ip.TaskFunctionEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /ip/{ip}/task/{taskId}
                $get(): Promise<ip.IpTask>;
            } | any
        }
        delegation:  {
            // GET /ip/{ip}/delegation
            $get(): Promise<string[]>;
            // POST /ip/{ip}/delegation
            $post(body?: {target: string}): Promise<ip.ReverseDelegation>;
            [keys: string]: {
                // GET /ip/{ip}/delegation/{target}
                $get(): Promise<ip.ReverseDelegation>;
                // DELETE /ip/{ip}/delegation/{target}
                $delete(): Promise<void>;
            } | any
        }
        migrationToken:  {
            // GET /ip/{ip}/migrationToken
            $get(): Promise<ip.IpMigrationToken>;
            // POST /ip/{ip}/migrationToken
            $post(body?: {customerId: string}): Promise<ip.IpMigrationToken>;
        }
        move:  {
            // GET /ip/{ip}/move
            $get(): Promise<ip.Destinations>;
            // POST /ip/{ip}/move
            $post(body?: {nexthop?: string, to: string}): Promise<ip.IpTask>;
        }
        arp:  {
            // GET /ip/{ip}/arp
            $get(param?: {state?: ip.ArpStateEnum}): Promise<string[]>;
            [keys: string]: {
                // GET /ip/{ip}/arp/{ipBlocked}
                $get(): Promise<ip.ArpBlockedIp>;
                unblock:  {
                    // POST /ip/{ip}/arp/{ipBlocked}/unblock
                    $post(): Promise<void>;
                }
            } | any
        }
        mitigationProfiles:  {
            // GET /ip/{ip}/mitigationProfiles
            $get(): Promise<string[]>;
            // POST /ip/{ip}/mitigationProfiles
            $post(body?: {autoMitigationTimeOut: ip.MitigationProfileAutoMitigationTimeOutEnum, ipMitigationProfile: string}): Promise<ip.MitigationProfile>;
            [keys: string]: {
                // GET /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                $get(): Promise<ip.MitigationProfile>;
                // PUT /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                $put(body?: {body: ip.MitigationProfile}): Promise<void>;
                // DELETE /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                $delete(): Promise<void>;
            } | any
        }
        spam:  {
            // GET /ip/{ip}/spam
            $get(param?: {state?: ip.SpamStateEnum}): Promise<string[]>;
            [keys: string]: {
                // GET /ip/{ip}/spam/{ipSpamming}
                $get(): Promise<ip.SpamIp>;
                stats:  {
                    // GET /ip/{ip}/spam/{ipSpamming}/stats
                    $get(param?: {from: string, to: string}): Promise<ip.SpamStats[]>;
                }
                unblock:  {
                    // POST /ip/{ip}/spam/{ipSpamming}/unblock
                    $post(): Promise<ip.SpamIp>;
                }
            } | any
        }
        terminate:  {
            // POST /ip/{ip}/terminate
            $post(): Promise<ip.IpTask>;
        }
        ripe:  {
            // GET /ip/{ip}/ripe
            $get(): Promise<ip.RipeInfos>;
            // PUT /ip/{ip}/ripe
            $put(body?: {body: ip.RipeInfos}): Promise<void>;
        }
        antihack:  {
            // GET /ip/{ip}/antihack
            $get(param?: {state?: ip.BlockedIpStateEnum}): Promise<string[]>;
            [keys: string]: {
                // GET /ip/{ip}/antihack/{ipBlocked}
                $get(): Promise<ip.BlockedIp>;
                unblock:  {
                    // POST /ip/{ip}/antihack/{ipBlocked}/unblock
                    $post(): Promise<void>;
                }
            } | any
        }
        phishing:  {
            // GET /ip/{ip}/phishing
            $get(param?: {state?: ip.AntiphishingStateEnum, ipOnAntiphishing?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /ip/{ip}/phishing/{id}
                $get(): Promise<ip.Antiphishing>;
            } | any
        }
        firewall:  {
            // GET /ip/{ip}/firewall
            $get(param?: {enabled?: boolean, state?: ip.FirewallStateEnum}): Promise<string[]>;
            // POST /ip/{ip}/firewall
            $post(body?: {ipOnFirewall: string}): Promise<ip.FirewallIp>;
            [keys: string]: {
                // GET /ip/{ip}/firewall/{ipOnFirewall}
                $get(): Promise<ip.FirewallIp>;
                // PUT /ip/{ip}/firewall/{ipOnFirewall}
                $put(body?: {body: ip.FirewallIp}): Promise<void>;
                // DELETE /ip/{ip}/firewall/{ipOnFirewall}
                $delete(): Promise<string>;
                rule:  {
                    // GET /ip/{ip}/firewall/{ipOnFirewall}/rule
                    $get(param?: {state?: ip.FirewallRuleStateEnum}): Promise<number[]>;
                    // POST /ip/{ip}/firewall/{ipOnFirewall}/rule
                    $post(body?: {action: ip.FirewallActionEnum, destinationPort?: number, protocol: ip.FirewallProtocolEnum, sequence: ip.FirewallSequenceRangeEnum, source?: string, sourcePort?: number, tcpOption?: ip.FirewallOptionTCP}): Promise<ip.FirewallNetworkRule>;
                    [keys: string]: {
                        // GET /ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}
                        $get(): Promise<ip.FirewallNetworkRule>;
                        // DELETE /ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}
                        $delete(): Promise<ip.FirewallNetworkRule>;
                    } | any
                }
            } | any
        }
    } | any
}
// Api
type PathsIpGET = '/ip/service/{serviceName}/serviceInfos' |
  '/ip/service/{serviceName}' |
  '/ip/service' |
  '/ip/loadBalancing' |
  '/ip/loadBalancing/{serviceName}/serviceInfos' |
  '/ip/loadBalancing/{serviceName}/probeIp' |
  '/ip/loadBalancing/{serviceName}/internalNatIp' |
  '/ip/loadBalancing/{serviceName}/allowedBackends' |
  '/ip/loadBalancing/{serviceName}/portsRedirection' |
  '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}' |
  '/ip/loadBalancing/{serviceName}/task' |
  '/ip/loadBalancing/{serviceName}/task/{taskId}' |
  '/ip/loadBalancing/{serviceName}/backend' |
  '/ip/loadBalancing/{serviceName}/backend/{backend}' |
  '/ip/loadBalancing/{serviceName}' |
  '/ip' |
  '/ip/{ip}/reverse' |
  '/ip/{ip}/reverse/{ipReverse}' |
  '/ip/{ip}/mitigation/{ipOnMitigation}/topStream' |
  '/ip/{ip}/mitigation/{ipOnMitigation}' |
  '/ip/{ip}/mitigation/{ipOnMitigation}/stats' |
  '/ip/{ip}/mitigation' |
  '/ip/{ip}/game' |
  '/ip/{ip}/game/{ipOnGame}' |
  '/ip/{ip}/game/{ipOnGame}/rule' |
  '/ip/{ip}/game/{ipOnGame}/rule/{id}' |
  '/ip/{ip}/license/directadmin' |
  '/ip/{ip}/license/cpanel' |
  '/ip/{ip}/license/cloudLinux' |
  '/ip/{ip}/license/virtuozzo' |
  '/ip/{ip}/license/windows' |
  '/ip/{ip}/license/worklight' |
  '/ip/{ip}/license/sqlserver' |
  '/ip/{ip}/license/plesk' |
  '/ip/{ip}/task' |
  '/ip/{ip}/task/{taskId}' |
  '/ip/{ip}/delegation/{target}' |
  '/ip/{ip}/delegation' |
  '/ip/{ip}/migrationToken' |
  '/ip/{ip}' |
  '/ip/{ip}/move' |
  '/ip/{ip}/arp/{ipBlocked}' |
  '/ip/{ip}/arp' |
  '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' |
  '/ip/{ip}/mitigationProfiles' |
  '/ip/{ip}/spam' |
  '/ip/{ip}/spam/{ipSpamming}/stats' |
  '/ip/{ip}/spam/{ipSpamming}' |
  '/ip/{ip}/ripe' |
  '/ip/{ip}/antihack' |
  '/ip/{ip}/antihack/{ipBlocked}' |
  '/ip/{ip}/phishing' |
  '/ip/{ip}/phishing/{id}' |
  '/ip/{ip}/firewall' |
  '/ip/{ip}/firewall/{ipOnFirewall}/rule' |
  '/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}' |
  '/ip/{ip}/firewall/{ipOnFirewall}';

type PathsIpPUT = '/ip/service/{serviceName}' |
  '/ip/loadBalancing/{serviceName}/serviceInfos' |
  '/ip/loadBalancing/{serviceName}/backend/{backend}' |
  '/ip/{ip}/mitigation/{ipOnMitigation}' |
  '/ip/{ip}/game/{ipOnGame}' |
  '/ip/{ip}' |
  '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' |
  '/ip/{ip}/ripe' |
  '/ip/{ip}/firewall/{ipOnFirewall}';

type PathsIpPOST = '/ip/service/{serviceName}/terminate' |
  '/ip/service/{serviceName}/changeContact' |
  '/ip/service/{serviceName}/confirmTermination' |
  '/ip/loadBalancing/{serviceName}/restoreSsl' |
  '/ip/loadBalancing/{serviceName}/portsRedirection' |
  '/ip/loadBalancing/{serviceName}/stickiness' |
  '/ip/loadBalancing/{serviceName}/backend' |
  '/ip/loadBalancing/{serviceName}/backend/{backend}/backupState' |
  '/ip/loadBalancing/{serviceName}/backend/{backend}/setWeight' |
  '/ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi' |
  '/ip/loadBalancing/{serviceName}/importCustomSsl' |
  '/ip/{ip}/park' |
  '/ip/{ip}/changeOrg' |
  '/ip/{ip}/reverse' |
  '/ip/{ip}/mitigation' |
  '/ip/{ip}/game/{ipOnGame}/rule' |
  '/ip/{ip}/delegation' |
  '/ip/{ip}/migrationToken' |
  '/ip/{ip}/move' |
  '/ip/{ip}/arp/{ipBlocked}/unblock' |
  '/ip/{ip}/mitigationProfiles' |
  '/ip/{ip}/spam/{ipSpamming}/unblock' |
  '/ip/{ip}/terminate' |
  '/ip/{ip}/antihack/{ipBlocked}/unblock' |
  '/ip/{ip}/firewall' |
  '/ip/{ip}/firewall/{ipOnFirewall}/rule';

type PathsIpDELETE = '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}' |
  '/ip/loadBalancing/{serviceName}/backend/{backend}' |
  '/ip/{ip}/reverse/{ipReverse}' |
  '/ip/{ip}/mitigation/{ipOnMitigation}' |
  '/ip/{ip}/game/{ipOnGame}/rule/{id}' |
  '/ip/{ip}/delegation/{target}' |
  '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' |
  '/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}' |
  '/ip/{ip}/firewall/{ipOnFirewall}';

export class ApiIp extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * List the ip.Ip objects
   * Your OVH IPs
   */
  public get(path: '/ip', params: {description?: string, ip?: string, routedTo_serviceName?: string, type?: OVH.ip.IpTypeEnum}): Promise<string[]>;
  /**
   * Your IP
   * Get this object properties
   */
  public get(path: '/ip/{ip}', params: {ip: string}): Promise<ip.Ip>;
  /**
   * List the ip.BlockedIp objects
   * Anti-Hack blocked IP
   */
  public get(path: '/ip/{ip}/antihack', params: {ip: string, state?: OVH.ip.BlockedIpStateEnum}): Promise<string[]>;
  /**
   * Blocked IP information
   * Get this object properties
   */
  public get(path: '/ip/{ip}/antihack/{ipBlocked}', params: {ip: string, ipBlocked: string}): Promise<ip.BlockedIp>;
  /**
   * List the ip.ArpBlockedIp objects
   * ARP blocked IP
   */
  public get(path: '/ip/{ip}/arp', params: {ip: string, state?: OVH.ip.ArpStateEnum}): Promise<string[]>;
  /**
   * ARP blocked IP information
   * Get this object properties
   */
  public get(path: '/ip/{ip}/arp/{ipBlocked}', params: {ip: string, ipBlocked: string}): Promise<ip.ArpBlockedIp>;
  /**
   * List the ip.ReverseDelegation objects
   * Reverse delegation on IPv6 subnet
   */
  public get(path: '/ip/{ip}/delegation', params: {ip: string}): Promise<string[]>;
  /**
   * Your reverse delegations on IPv6 subnet
   * Get this object properties
   */
  public get(path: '/ip/{ip}/delegation/{target}', params: {ip: string, target: string}): Promise<ip.ReverseDelegation>;
  /**
   * List the ip.FirewallIp objects
   * Ip under firewall
   */
  public get(path: '/ip/{ip}/firewall', params: {ip: string, enabled?: boolean, state?: OVH.ip.FirewallStateEnum}): Promise<string[]>;
  /**
   * Your IP on firewall
   * Get this object properties
   */
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}', params: {ip: string, ipOnFirewall: string}): Promise<ip.FirewallIp>;
  /**
   * List the ip.FirewallNetworkRule objects
   * Rules for this IP
   */
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule', params: {ip: string, ipOnFirewall: string, state?: OVH.ip.FirewallRuleStateEnum}): Promise<number[]>;
  /**
   * Rule on ip
   * Get this object properties
   */
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}', params: {ip: string, ipOnFirewall: string, sequence: string}): Promise<ip.FirewallNetworkRule>;
  /**
   * List the ip.GameMitigation objects
   * Ip under game anti-ddos
   */
  public get(path: '/ip/{ip}/game', params: {ip: string}): Promise<string[]>;
  /**
   * GAME Anti-DDoS
   * Get this object properties
   */
  public get(path: '/ip/{ip}/game/{ipOnGame}', params: {ip: string, ipOnGame: string}): Promise<ip.GameMitigation>;
  /**
   * List the ip.GameMitigationRule objects
   * IDs of rules configured for this IP
   */
  public get(path: '/ip/{ip}/game/{ipOnGame}/rule', params: {ip: string, ipOnGame: string}): Promise<number[]>;
  /**
   * Rule on ip:ports
   * Get this object properties
   */
  public get(path: '/ip/{ip}/game/{ipOnGame}/rule/{id}', params: {ip: string, ipOnGame: string, id: string}): Promise<ip.GameMitigationRule>;
  /**
   * List the license.cloudLinux.CloudLinux objects
   * Cloud Linux licenses associated to this IP
   */
  public get(path: '/ip/{ip}/license/cloudLinux', params: {ip: string, ipAddress?: string}): Promise<string[]>;
  /**
   * List the license.cpanel.Cpanel objects
   * Cpanel licenses associated to this IP
   */
  public get(path: '/ip/{ip}/license/cpanel', params: {ip: string, ipAddress?: string}): Promise<string[]>;
  /**
   * List the license.directadmin.DirectAdmin objects
   * DirectAdmin licenses associated to this IP
   */
  public get(path: '/ip/{ip}/license/directadmin', params: {ip: string, ipAddress?: string}): Promise<string[]>;
  /**
   * List the license.plesk.Plesk objects
   * Plesk licenses associated to this IP
   */
  public get(path: '/ip/{ip}/license/plesk', params: {ip: string, ipAddress?: string}): Promise<string[]>;
  /**
   * List the license.sqlserver.SqlServer objects
   * SQL Server licenses associated to this IP
   */
  public get(path: '/ip/{ip}/license/sqlserver', params: {ip: string, ipAddress?: string}): Promise<string[]>;
  /**
   * List the license.virtuozzo.Virtuozzo objects
   * Virtuozzo licenses associated to this IP
   */
  public get(path: '/ip/{ip}/license/virtuozzo', params: {ip: string, ipAddress?: string}): Promise<string[]>;
  /**
   * List the license.windows.Windows objects
   * Windows licenses associated to this IP
   */
  public get(path: '/ip/{ip}/license/windows', params: {ip: string, ipAddress?: string}): Promise<string[]>;
  /**
   * List the license.worklight.WorkLight objects
   * WorkLight licenses associated to this IP
   */
  public get(path: '/ip/{ip}/license/worklight', params: {ip: string, ipAddress?: string}): Promise<string[]>;
  /**
   * IP migration to OVH
   * Get this object properties
   */
  public get(path: '/ip/{ip}/migrationToken', params: {ip: string}): Promise<ip.IpMigrationToken>;
  /**
   * List the ip.MitigationIp objects
   * Ip under mitigation
   */
  public get(path: '/ip/{ip}/mitigation', params: {ip: string, auto?: boolean, state?: OVH.ip.MitigationStateEnum}): Promise<string[]>;
  /**
   * Your IP on mitigation
   * Get this object properties
   */
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}', params: {ip: string, ipOnMitigation: string}): Promise<ip.MitigationIp>;
  /**
   * stats operations
   * AntiDDOS option. Get statistics about your traffic in and out during this mitigation
   */
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}/stats', params: {ip: string, ipOnMitigation: string, from: string, scale: OVH.ip.MitigationStatsScaleEnum, to: string}): Promise<ip.MitigationStats[]>;
  /**
   * topStream operations
   * AntiDDOS option. Get top stream on your ip on a specific timestamp
   */
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}/topStream', params: {ip: string, ipOnMitigation: string, date: string, scale: OVH.ip.MitigationStatsScaleEnum}): Promise<ip.MitigationDetailedStats[]>;
  /**
   * List the ip.MitigationProfile objects
   * Manage mitigation profile on your IPs
   */
  public get(path: '/ip/{ip}/mitigationProfiles', params: {ip: string}): Promise<string[]>;
  /**
   * Mitigation profile for your ip
   * Get this object properties
   */
  public get(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', params: {ip: string, ipMitigationProfile: string}): Promise<ip.MitigationProfile>;
  /**
   * move operations
   * List services available as a destination
   */
  public get(path: '/ip/{ip}/move', params: {ip: string}): Promise<ip.Destinations>;
  /**
   * List the ip.Antiphishing objects
   * Ip under anti-phishing
   */
  public get(path: '/ip/{ip}/phishing', params: {ip: string, ipOnAntiphishing?: string, state?: OVH.ip.AntiphishingStateEnum}): Promise<number[]>;
  /**
   * Phishing URLs hosted on your IP
   * Get this object properties
   */
  public get(path: '/ip/{ip}/phishing/{id}', params: {ip: string, id: string}): Promise<ip.Antiphishing>;
  /**
   * List the ip.ReverseIp objects
   * Reverse on your ip
   */
  public get(path: '/ip/{ip}/reverse', params: {ip: string}): Promise<string[]>;
  /**
   * Your reverse records on IP
   * Get this object properties
   */
  public get(path: '/ip/{ip}/reverse/{ipReverse}', params: {ip: string, ipReverse: string}): Promise<ip.ReverseIp>;
  /**
   * IP block RIPE informations
   * Get this object properties
   */
  public get(path: '/ip/{ip}/ripe', params: {ip: string}): Promise<ip.RipeInfos>;
  /**
   * List the ip.SpamIp objects
   * Ip spamming
   */
  public get(path: '/ip/{ip}/spam', params: {ip: string, state?: OVH.ip.SpamStateEnum}): Promise<string[]>;
  /**
   * Your IP spam stats
   * Get this object properties
   */
  public get(path: '/ip/{ip}/spam/{ipSpamming}', params: {ip: string, ipSpamming: string}): Promise<ip.SpamIp>;
  /**
   * stats operations
   * Get statistics about the email traffic
   */
  public get(path: '/ip/{ip}/spam/{ipSpamming}/stats', params: {ip: string, ipSpamming: string, from: string, to: string}): Promise<ip.SpamStats[]>;
  /**
   * List the ip.IpTask objects
   * IP tasks
   */
  public get(path: '/ip/{ip}/task', params: {ip: string, function_?: OVH.ip.TaskFunctionEnum, status?: OVH.ip.TaskStatusEnum}): Promise<number[]>;
  /**
   * IP tasks
   * Get this object properties
   */
  public get(path: '/ip/{ip}/task/{taskId}', params: {ip: string, taskId: string}): Promise<ip.IpTask>;
  /**
   * Operations about the IP service
   * List available services
   */
  public get(path: '/ip/loadBalancing'): Promise<string[]>;
  /**
   * Your load balancing IP
   * Get this object properties
   */
  public get(path: '/ip/loadBalancing/{serviceName}', params: {serviceName: string}): Promise<ip.LoadBalancingIp>;
  /**
   * allowedBackends operations
   * List of backends you can attach to your IP
   */
  public get(path: '/ip/loadBalancing/{serviceName}/allowedBackends', params: {serviceName: string}): Promise<string[]>;
  /**
   * List the ip.LoadBalancingBackendIp objects
   * Backends for this IP load balancing
   */
  public get(path: '/ip/loadBalancing/{serviceName}/backend', params: {serviceName: string}): Promise<string[]>;
  /**
   * Backends attached to your IP load balancing
   * Get this object properties
   */
  public get(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', params: {serviceName: string, backend: string}): Promise<ip.LoadBalancingBackendIp>;
  /**
   * internalNatIp operations
   * Ip subnet used by OVH to nat requests on your ip lb to your backends. You must ensure that your backends are not part of a network that overlap with this one.
   */
  public get(path: '/ip/loadBalancing/{serviceName}/internalNatIp', params: {serviceName: string, zone: OVH.ip.LoadBalancingZoneEnum}): Promise<string>;
  /**
   * List the portsRedirection objects
   * Get all srcPort
   */
  public get(path: '/ip/loadBalancing/{serviceName}/portsRedirection', params: {serviceName: string}): Promise<ip.LoadBalancingAdditionalPortEnum[]>;
  /**
   * Port redirections
   * Get the value for the given srcPort
   */
  public get(path: '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}', params: {serviceName: string, srcPort: string}): Promise<ip.LoadBalancingIp.LoadBalancingPort>;
  /**
   * probeIp operations
   * Ip subnet used to send probes to your backends
   */
  public get(path: '/ip/loadBalancing/{serviceName}/probeIp', params: {serviceName: string, zone: OVH.ip.LoadBalancingZoneEnum}): Promise<string[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/ip/loadBalancing/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the ip.LoadBalancingTask objects
   * Task list associated with this IP
   */
  public get(path: '/ip/loadBalancing/{serviceName}/task', params: {serviceName: string}): Promise<number[]>;
  /**
   * List of tasks associated with your IP load balancing
   * Get this object properties
   */
  public get(path: '/ip/loadBalancing/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<ip.LoadBalancingTask>;
  /**
   * Operations about the IP service
   * List available services
   */
  public get(path: '/ip/service'): Promise<string[]>;
  /**
   * Your IP linked to service
   * Get this object properties
   */
  public get(path: '/ip/service/{serviceName}', params: {serviceName: string}): Promise<ip.ServiceIp>;
  /**
   * Details about a non-expiring Service
   * Get this object properties
   */
  public get(path: '/ip/service/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.NonExpiringService>;
  public get(path: PathsIpGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your IP
   * Alter this object properties
   */
  public put(path: '/ip/{ip}', params: {ip: string, canBeTerminated?: boolean, country?: OVH.coreTypes.CountryEnum, description?: string, organisationId?: string, routedTo?: OVH.ip.RoutedTo, type?: OVH.ip.IpTypeEnum}): Promise<void>;
  /**
   * Your IP on firewall
   * Alter this object properties
   */
  public put(path: '/ip/{ip}/firewall/{ipOnFirewall}', params: {ip: string, ipOnFirewall: string, enabled?: boolean, state?: OVH.ip.FirewallStateEnum}): Promise<void>;
  /**
   * GAME Anti-DDoS
   * Alter this object properties
   */
  public put(path: '/ip/{ip}/game/{ipOnGame}', params: {ip: string, ipOnGame: string, firewallModeEnabled?: boolean, state?: OVH.ip.GameMitigationStateEnum}): Promise<void>;
  /**
   * Your IP on mitigation
   * Alter this object properties
   */
  public put(path: '/ip/{ip}/mitigation/{ipOnMitigation}', params: {ip: string, ipOnMitigation: string, auto?: boolean, permanent?: boolean, state?: OVH.ip.MitigationStateEnum}): Promise<void>;
  /**
   * Mitigation profile for your ip
   * Alter this object properties
   */
  public put(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', params: {ip: string, ipMitigationProfile: string, autoMitigationTimeOut?: OVH.ip.MitigationProfileAutoMitigationTimeOutEnum, state?: OVH.ip.MitigationProfileStateEnum}): Promise<void>;
  /**
   * IP block RIPE informations
   * Alter this object properties
   */
  public put(path: '/ip/{ip}/ripe', params: {ip: string, description?: string, netname?: string}): Promise<void>;
  /**
   * Backends attached to your IP load balancing
   * Alter this object properties
   */
  public put(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', params: {serviceName: string, backend: string, mainBackendIp?: string, probe?: OVH.ip.LoadBalancingBackendProbeEnum, weight?: number, zone?: OVH.ip.LoadBalancingZoneEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/ip/loadBalancing/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Your IP linked to service
   * Alter this object properties
   */
  public put(path: '/ip/service/{serviceName}', params: {serviceName: string, canBeTerminated?: boolean, country?: OVH.coreTypes.CountryEnum, description?: string, ip?: string, organisationId?: string, routedTo?: OVH.ip.RoutedTo, type?: OVH.ip.IpTypeEnum}): Promise<void>;
  public put(path: PathsIpPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * unblock operations
   * Unblock this IP
   */
  public post(path: '/ip/{ip}/antihack/{ipBlocked}/unblock', params: {ip: string, ipBlocked: string}): Promise<void>;
  /**
   * unblock operations
   * Unblock this IP
   */
  public post(path: '/ip/{ip}/arp/{ipBlocked}/unblock', params: {ip: string, ipBlocked: string}): Promise<void>;
  /**
   * changeOrg operations
   * Change organisation of this IP
   */
  public post(path: '/ip/{ip}/changeOrg', params: {ip: string, organisation: string}): Promise<ip.IpTask>;
  /**
   * List the ip.ReverseDelegation objects
   * Add target for reverse delegation on IPv6 subnet
   */
  public post(path: '/ip/{ip}/delegation', params: {ip: string, target: string}): Promise<ip.ReverseDelegation>;
  /**
   * List the ip.FirewallIp objects
   * AntiDDOS option. Add new IP on firewall
   */
  public post(path: '/ip/{ip}/firewall', params: {ip: string, ipOnFirewall: string}): Promise<ip.FirewallIp>;
  /**
   * List the ip.FirewallNetworkRule objects
   * AntiDDOS option. Add new rule on your IP
   */
  public post(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule', params: {ip: string, ipOnFirewall: string, action: OVH.ip.FirewallActionEnum, destinationPort?: number, protocol: OVH.ip.FirewallProtocolEnum, sequence: OVH.ip.FirewallSequenceRangeEnum, source?: string, sourcePort?: number, tcpOption?: OVH.ip.FirewallOptionTCP}): Promise<ip.FirewallNetworkRule>;
  /**
   * List the ip.GameMitigationRule objects
   * Add new rule on your IP
   */
  public post(path: '/ip/{ip}/game/{ipOnGame}/rule', params: {ip: string, ipOnGame: string, ports: OVH.complexType.Range<number>, protocol: OVH.ip.GameMitigationRuleProtocolEnum}): Promise<ip.GameMitigationRule>;
  /**
   * IP migration to OVH
   * Generate a migration token
   */
  public post(path: '/ip/{ip}/migrationToken', params: {ip: string, customerId: string}): Promise<ip.IpMigrationToken>;
  /**
   * List the ip.MitigationIp objects
   * AntiDDOS option. Add new IP on permanent mitigation
   */
  public post(path: '/ip/{ip}/mitigation', params: {ip: string, ipOnMitigation: string}): Promise<ip.MitigationIp>;
  /**
   * List the ip.MitigationProfile objects
   * Create new profile for one of your ip
   */
  public post(path: '/ip/{ip}/mitigationProfiles', params: {ip: string, autoMitigationTimeOut: OVH.ip.MitigationProfileAutoMitigationTimeOutEnum, ipMitigationProfile: string}): Promise<ip.MitigationProfile>;
  /**
   * move operations
   * Move this IP to another service
   */
  public post(path: '/ip/{ip}/move', params: {ip: string, nexthop?: string, to: string}): Promise<ip.IpTask>;
  /**
   * park operations
   * Park this IP
   */
  public post(path: '/ip/{ip}/park', params: {ip: string}): Promise<ip.IpTask>;
  /**
   * List the ip.ReverseIp objects
   * Add reverse on an ip
   */
  public post(path: '/ip/{ip}/reverse', params: {ip: string, ipReverse: string, reverse: string}): Promise<ip.ReverseIp>;
  /**
   * unblock operations
   * Release the ip from anti-spam system
   */
  public post(path: '/ip/{ip}/spam/{ipSpamming}/unblock', params: {ip: string, ipSpamming: string}): Promise<ip.SpamIp>;
  /**
   * terminate operations
   * Delete a failover IP
   */
  public post(path: '/ip/{ip}/terminate', params: {ip: string}): Promise<ip.IpTask>;
  /**
   * List the ip.LoadBalancingBackendIp objects
   * Add a new backend on your IP load balancing
   */
  public post(path: '/ip/loadBalancing/{serviceName}/backend', params: {serviceName: string, ipBackend: string, probe: OVH.ip.LoadBalancingBackendProbeEnum, weight?: number}): Promise<ip.LoadBalancingTask>;
  /**
   * backupState operations
   * Set or unset the backend as a backup of another backend. Requests will be directed to the backup only if the main backend is in probe fail
   */
  public post(path: '/ip/loadBalancing/{serviceName}/backend/{backend}/backupState', params: {serviceName: string, backend: string, backupStateSet: boolean, mainBackendIp?: string}): Promise<ip.LoadBalancingTask>;
  /**
   * setWeight operations
   * Set the weight of a backend. For instance, if backend A has a weight of 8 and backup B was a weight of 16, backend B will receive twice more connections as backend A. Backends must be on the same POP for the weight parameter to take effect between them.
   */
  public post(path: '/ip/loadBalancing/{serviceName}/backend/{backend}/setWeight', params: {serviceName: string, backend: string, weight: number}): Promise<ip.LoadBalancingTask>;
  /**
   * importCustomSsl operations
   * Import your own ssl certificate on your IP load balancing. Ssl option is needed to use this url.
   */
  public post(path: '/ip/loadBalancing/{serviceName}/importCustomSsl', params: {serviceName: string, certificate: string, chain?: string, key: string}): Promise<ip.LoadBalancingTask>;
  /**
   * List the portsRedirection objects
   * Add a new port redirection
   */
  public post(path: '/ip/loadBalancing/{serviceName}/portsRedirection', params: {serviceName: string, dstPort?: number, srcPort?: OVH.ip.LoadBalancingAdditionalPortEnum}): Promise<ip.LoadBalancingTask>;
  /**
   * restoreSsl operations
   * Restore OVH' ssl certificate on your IP load balancing. Ssl option is needed to use this url. (A DCV mail will be sent to postmaster@your-domain.abc)
   */
  public post(path: '/ip/loadBalancing/{serviceName}/restoreSsl', params: {serviceName: string}): Promise<ip.LoadBalancingTask>;
  /**
   * stickiness operations
   * Set Stickiness type. 'ipSource' will stick clients to a backend by their source ip, 'cookie' will stick them by inserting a cookie, 'none' is to set no stickiness
   */
  public post(path: '/ip/loadBalancing/{serviceName}/stickiness', params: {serviceName: string, stickiness: OVH.ip.LoadBalancingStickinessEnum}): Promise<ip.LoadBalancingTask>;
  /**
   * switchToIplbNextGenerationApi operations
   * Switch to ipLoadbalancing next-gen API. Benefits : additionnals probes, DDOS protection.
   */
  public post(path: '/ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi', params: {serviceName: string}): Promise<ipLoadbalancing.Task.Task>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/ip/service/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/ip/service/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/ip/service/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsIpPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Your reverse delegations on IPv6 subnet
   * Delete a target for reverse delegation on IPv6 subnet
   */
  public delete(path: '/ip/{ip}/delegation/{target}', params: {ip: string, target: string}): Promise<void>;
  /**
   * Your IP on firewall
   * AntiDDOS option. Delete IP and rules from firewall
   */
  public delete(path: '/ip/{ip}/firewall/{ipOnFirewall}', params: {ip: string, ipOnFirewall: string}): Promise<string>;
  /**
   * Rule on ip
   * AntiDDOS option. Delete rule
   */
  public delete(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}', params: {ip: string, ipOnFirewall: string, sequence: string}): Promise<ip.FirewallNetworkRule>;
  /**
   * Rule on ip:ports
   * Delete rule
   */
  public delete(path: '/ip/{ip}/game/{ipOnGame}/rule/{id}', params: {ip: string, ipOnGame: string, id: string}): Promise<ip.GameMitigationRule>;
  /**
   * Your IP on mitigation
   * AntiDDOS option. Delete IP from mitigation
   */
  public delete(path: '/ip/{ip}/mitigation/{ipOnMitigation}', params: {ip: string, ipOnMitigation: string}): Promise<ip.MitigationIp>;
  /**
   * Mitigation profile for your ip
   * Delete mitigation profile
   */
  public delete(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', params: {ip: string, ipMitigationProfile: string}): Promise<void>;
  /**
   * Your reverse records on IP
   * Delete a reverse on one IP
   */
  public delete(path: '/ip/{ip}/reverse/{ipReverse}', params: {ip: string, ipReverse: string}): Promise<void>;
  /**
   * Backends attached to your IP load balancing
   * Remove a backend IP
   */
  public delete(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', params: {serviceName: string, backend: string}): Promise<ip.LoadBalancingTask>;
  /**
   * Port redirections
   * Delete a port redirection
   */
  public delete(path: '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}', params: {serviceName: string, srcPort: string}): Promise<ip.LoadBalancingTask>;
  public delete(path: PathsIpDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
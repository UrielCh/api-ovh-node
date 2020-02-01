import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /ip Models
 * Source: https://eu.api.ovh.com/1.0/ip.json
 */
export namespace complexType {
    // interface fullName: complexType.Range.Range
    export interface Range<T> {
        from: T;
        to: T;
    }
}
export namespace coreTypes {
    // type fullname: coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace ip {
    // interface fullName: ip.Antiphishing.Antiphishing
    export interface Antiphishing {
        creationDate: string;
        id: number;
        ipOnAntiphishing: string;
        state: ip.AntiphishingStateEnum;
        urlPhishing: string;
    }
    // type fullname: ip.AntiphishingStateEnum
    export type AntiphishingStateEnum = "blocked" | "blocking" | "unblocked" | "unblocking"
    // interface fullName: ip.ArpBlockedIp.ArpBlockedIp
    export interface ArpBlockedIp {
        blockedSince: string;
        ipBlocked: string;
        logs?: string;
        state: ip.ArpStateEnum;
        time: number;
    }
    // type fullname: ip.ArpStateEnum
    export type ArpStateEnum = "blocked" | "unblocking"
    // interface fullName: ip.BlockedIp.BlockedIp
    export interface BlockedIp {
        blockedSince: string;
        ipBlocked: string;
        logs?: string;
        state: ip.BlockedIpStateEnum;
        time: number;
    }
    // type fullname: ip.BlockedIpStateEnum
    export type BlockedIpStateEnum = "blocked" | "unblocking"
    // interface fullName: ip.Destination.Destination
    export interface Destination {
        nexthop?: string[];
        service: string;
    }
    // interface fullName: ip.Destinations.Destinations
    export interface Destinations {
        cloudProject?: ip.Destination[];
        dedicatedCloud?: ip.Destination[];
        dedicatedServer?: ip.Destination[];
        hostingReseller?: ip.Destination[];
        ipLoadbalancing?: ip.Destination[];
        vps?: ip.Destination[];
    }
    // type fullname: ip.FirewallActionEnum
    export type FirewallActionEnum = "deny" | "permit"
    // interface fullName: ip.FirewallIp.FirewallIp
    export interface FirewallIp {
        enabled: boolean;
        ipOnFirewall: string;
        state: ip.FirewallStateEnum;
    }
    // interface fullName: ip.FirewallNetworkRule.FirewallNetworkRule
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
    // interface fullName: ip.FirewallOptionTCP.FirewallOptionTCP
    export interface FirewallOptionTCP {
        fragments?: boolean;
        option?: ip.FirewallTCPOptionEnum;
    }
    // type fullname: ip.FirewallProtocolEnum
    export type FirewallProtocolEnum = "ah" | "esp" | "gre" | "icmp" | "ipv4" | "tcp" | "udp"
    // type fullname: ip.FirewallRuleStateEnum
    export type FirewallRuleStateEnum = "creationPending" | "ok" | "removalPending"
    // type fullname: ip.FirewallSequenceRangeEnum
    export type FirewallSequenceRangeEnum = 0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    // type fullname: ip.FirewallStateEnum
    export type FirewallStateEnum = "disableFirewallPending" | "enableFirewallPending" | "ok"
    // type fullname: ip.FirewallTCPOptionEnum
    export type FirewallTCPOptionEnum = "established" | "syn"
    // interface fullName: ip.GameMitigation.GameMitigation
    export interface GameMitigation {
        firewallModeEnabled: boolean;
        ipOnGame: string;
        state: ip.GameMitigationStateEnum;
    }
    // interface fullName: ip.GameMitigationRule.GameMitigationRule
    export interface GameMitigationRule {
        id: number;
        ports: complexType.Range<number>;
        protocol: ip.GameMitigationRuleProtocolEnum;
        state: ip.GameMitigationRuleStateEnum;
    }
    // type fullname: ip.GameMitigationRuleProtocolEnum
    export type GameMitigationRuleProtocolEnum = "arkSurvivalEvolved" | "arma" | "gtaMultiTheftAutoSanAndreas" | "gtaSanAndreasMultiplayerMod" | "hl2Source" | "minecraftPocketEdition" | "minecraftQuery" | "mumble" | "other" | "rust" | "teamspeak2" | "teamspeak3" | "trackmaniaShootmania"
    // type fullname: ip.GameMitigationRuleStateEnum
    export type GameMitigationRuleStateEnum = "createRulePending" | "deleteRulePending" | "ok"
    // type fullname: ip.GameMitigationStateEnum
    export type GameMitigationStateEnum = "firewallModeDisablePending" | "firewallModeEnablePending" | "ok"
    // interface fullName: ip.Ip.Ip
    export interface Ip {
        canBeTerminated: boolean;
        country?: coreTypes.CountryEnum;
        description?: string;
        ip: string;
        organisationId?: string;
        routedTo?: ip.RoutedTo;
        type: ip.IpTypeEnum;
    }
    // interface fullName: ip.IpMigrationToken.IpMigrationToken
    export interface IpMigrationToken {
        customerId: string;
        token: string;
    }
    // interface fullName: ip.IpTask.IpTask
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
    // type fullname: ip.IpTypeEnum
    export type IpTypeEnum = "cdn" | "cloud" | "dedicated" | "failover" | "hosted_ssl" | "housing" | "loadBalancing" | "mail" | "overthebox" | "pcc" | "pci" | "private" | "vpn" | "vps" | "vrack" | "xdsl"
    // type fullname: ip.LoadBalancingAdditionalPortEnum
    export type LoadBalancingAdditionalPortEnum = 3306 | 443 | 5432 | 80
    // interface fullName: ip.LoadBalancingBackendIp.LoadBalancingBackendIp
    export interface LoadBalancingBackendIp {
        backend: string;
        mainBackendIp?: string;
        probe: ip.LoadBalancingBackendProbeEnum;
        weight: number;
        zone: ip.LoadBalancingZoneEnum;
    }
    // type fullname: ip.LoadBalancingBackendProbeEnum
    export type LoadBalancingBackendProbeEnum = "http" | "icmp" | "none" | "oco"
    // interface fullName: ip.LoadBalancingIp.LoadBalancingIp
    export interface LoadBalancingIp {
        ipLoadBalancing: string;
        serviceName: string;
        ssl: ip.LoadBalancingSslEnum;
        state: ip.LoadBalancingStateEnum;
        stickiness: ip.LoadBalancingStickinessEnum;
        zone: ip.LoadBalancingZoneEnum[];
    }
    export namespace LoadBalancingIp {
        // interface fullName: ip.LoadBalancingIp.LoadBalancingPort.LoadBalancingPort
        export interface LoadBalancingPort {
            dstPort: number;
            srcPort: ip.LoadBalancingAdditionalPortEnum;
        }
    }
    // type fullname: ip.LoadBalancingSslEnum
    export type LoadBalancingSslEnum = "customer" | "none" | "ovh"
    // type fullname: ip.LoadBalancingStateEnum
    export type LoadBalancingStateEnum = "blacklisted" | "deleted" | "free" | "ok" | "quarantined" | "suspended"
    // type fullname: ip.LoadBalancingStickinessEnum
    export type LoadBalancingStickinessEnum = "cookie" | "none" | "sourceIp"
    // interface fullName: ip.LoadBalancingTask.LoadBalancingTask
    export interface LoadBalancingTask {
        action: ip.LoadBalancingTaskActionEnum;
        creationDate: string;
        id: number;
        status: string;
    }
    // type fullname: ip.LoadBalancingTaskActionEnum
    export type LoadBalancingTaskActionEnum = "activateSsl" | "addBackend" | "addIpToBackend" | "announceIpLoadBalancing" | "backupStateSet" | "backupStateUnset" | "changeProbe" | "delBackend" | "desactivateSsl" | "removeIpFromBackend" | "setPortRedirection" | "setStickiness" | "setWeight" | "unannounceIpLoadBalancing" | "unsetPortRedirection"
    // type fullname: ip.LoadBalancingZoneEnum
    export type LoadBalancingZoneEnum = "bhs" | "gra" | "rbx" | "sbg"
    // interface fullName: ip.MitigationAttack.MitigationAttack
    export interface MitigationAttack {
        endDate?: string;
        idAttack: number;
        ipAttack: string;
        startDate: string;
    }
    // interface fullName: ip.MitigationDetailedStats.MitigationDetailedStats
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
    // interface fullName: ip.MitigationIp.MitigationIp
    export interface MitigationIp {
        auto: boolean;
        ipOnMitigation: string;
        permanent: boolean;
        state: ip.MitigationStateEnum;
    }
    // interface fullName: ip.MitigationProfile.MitigationProfile
    export interface MitigationProfile {
        autoMitigationTimeOut: ip.MitigationProfileAutoMitigationTimeOutEnum;
        ipMitigationProfile: string;
        state: ip.MitigationProfileStateEnum;
    }
    // type fullname: ip.MitigationProfileAutoMitigationTimeOutEnum
    export type MitigationProfileAutoMitigationTimeOutEnum = 0 | 15 | 1560 | 360 | 60
    // type fullname: ip.MitigationProfileStateEnum
    export type MitigationProfileStateEnum = "ok" | "tasksPending"
    // type fullname: ip.MitigationStateEnum
    export type MitigationStateEnum = "creationPending" | "ok" | "removalPending"
    // interface fullName: ip.MitigationStats.MitigationStats
    export interface MitigationStats {
        in?: ip.MitigationTraffic;
        out?: ip.MitigationTraffic;
        timestamp: number;
    }
    // type fullname: ip.MitigationStatsScaleEnum
    export type MitigationStatsScaleEnum = "10s" | "1m" | "5m"
    // interface fullName: ip.MitigationTraffic.MitigationTraffic
    export interface MitigationTraffic {
        bps: number;
        pps: number;
    }
    // interface fullName: ip.ReverseDelegation.ReverseDelegation
    export interface ReverseDelegation {
        target: string;
    }
    // interface fullName: ip.ReverseIp.ReverseIp
    export interface ReverseIp {
        ipReverse: string;
        reverse: string;
    }
    // interface fullName: ip.RipeInfos.RipeInfos
    export interface RipeInfos {
        description?: string;
        netname?: string;
    }
    // interface fullName: ip.RoutedTo.RoutedTo
    export interface RoutedTo {
        serviceName?: string;
    }
    // interface fullName: ip.ServiceIp.ServiceIp
    export interface ServiceIp {
        canBeTerminated: boolean;
        country?: coreTypes.CountryEnum;
        description?: string;
        ip: string;
        organisationId?: string;
        routedTo?: ip.RoutedTo;
        type: ip.IpTypeEnum;
    }
    // interface fullName: ip.SpamIp.SpamIp
    export interface SpamIp {
        date: string;
        ipSpamming: string;
        state: ip.SpamStateEnum;
        time: number;
    }
    // type fullname: ip.SpamStateEnum
    export type SpamStateEnum = "blockedForSpam" | "unblocked" | "unblocking"
    // interface fullName: ip.SpamStats.SpamStats
    export interface SpamStats {
        averageSpamscore?: number;
        detectedSpams?: ip.SpamTarget[];
        numberOfSpams: number;
        timestamp: number;
        total: number;
    }
    // interface fullName: ip.SpamTarget.SpamTarget
    export interface SpamTarget {
        date: number;
        destinationIp: string;
        messageId: string;
        spamscore: number;
    }
    // type fullname: ip.TaskFunctionEnum
    export type TaskFunctionEnum = "arinBlockReassign" | "changeRipeOrg" | "checkAndReleaseIp" | "genericMoveFloatingIp"
    // type fullname: ip.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
}
export namespace ipLoadbalancing {
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
    // interface fullName: services.NonExpiringService.NonExpiringService
    export interface NonExpiringService {
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        serviceId: number;
        status: service.StateEnum;
    }
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
 * END API /ip Models
 */
export function proxyIp(ovhEngine: OvhRequestable): Ip {
    return buildOvhProxy(ovhEngine, '/ip');
}
export default proxyIp;
/**
 * Api Proxy model
 */// Apis harmony
// path /ip
export interface Ip{
    // GET /ip
    $get(params?: {description?: string, ip?: string, routedTo_serviceName?: string, type?: ip.IpTypeEnum}): Promise<string[]>;
    loadBalancing: {
        // GET /ip/loadBalancing
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /ip/loadBalancing/{serviceName}
            $get(): Promise<ip.LoadBalancingIp>;
            allowedBackends: {
                // GET /ip/loadBalancing/{serviceName}/allowedBackends
                $get(): Promise<string[]>;
            }
            backend: {
                // GET /ip/loadBalancing/{serviceName}/backend
                $get(): Promise<string[]>;
                // POST /ip/loadBalancing/{serviceName}/backend
                $post(params: {ipBackend: string, probe: ip.LoadBalancingBackendProbeEnum, weight?: number}): Promise<ip.LoadBalancingTask>;
                $(backend: string): {
                    // DELETE /ip/loadBalancing/{serviceName}/backend/{backend}
                    $delete(): Promise<ip.LoadBalancingTask>;
                    // GET /ip/loadBalancing/{serviceName}/backend/{backend}
                    $get(): Promise<ip.LoadBalancingBackendIp>;
                    // PUT /ip/loadBalancing/{serviceName}/backend/{backend}
                    $put(params?: {backend?: string, mainBackendIp?: string, probe?: ip.LoadBalancingBackendProbeEnum, weight?: number, zone?: ip.LoadBalancingZoneEnum}): Promise<void>;
                    backupState: {
                        // POST /ip/loadBalancing/{serviceName}/backend/{backend}/backupState
                        $post(params: {backupStateSet: boolean, mainBackendIp?: string}): Promise<ip.LoadBalancingTask>;
                    }
                    setWeight: {
                        // POST /ip/loadBalancing/{serviceName}/backend/{backend}/setWeight
                        $post(params: {weight: number}): Promise<ip.LoadBalancingTask>;
                    }
                };
            }
            importCustomSsl: {
                // POST /ip/loadBalancing/{serviceName}/importCustomSsl
                $post(params: {certificate: string, chain?: string, key: string}): Promise<ip.LoadBalancingTask>;
            }
            internalNatIp: {
                // GET /ip/loadBalancing/{serviceName}/internalNatIp
                $get(params: {zone: ip.LoadBalancingZoneEnum}): Promise<string>;
            }
            portsRedirection: {
                // GET /ip/loadBalancing/{serviceName}/portsRedirection
                $get(): Promise<ip.LoadBalancingAdditionalPortEnum[]>;
                // POST /ip/loadBalancing/{serviceName}/portsRedirection
                $post(params?: {dstPort?: number, srcPort?: ip.LoadBalancingAdditionalPortEnum}): Promise<ip.LoadBalancingTask>;
                $(srcPort: ip.LoadBalancingAdditionalPortEnum): {
                    // DELETE /ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}
                    $delete(): Promise<ip.LoadBalancingTask>;
                    // GET /ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}
                    $get(): Promise<ip.LoadBalancingIp.LoadBalancingPort>;
                };
            }
            probeIp: {
                // GET /ip/loadBalancing/{serviceName}/probeIp
                $get(params: {zone: ip.LoadBalancingZoneEnum}): Promise<string[]>;
            }
            restoreSsl: {
                // POST /ip/loadBalancing/{serviceName}/restoreSsl
                $post(): Promise<ip.LoadBalancingTask>;
            }
            serviceInfos: {
                // GET /ip/loadBalancing/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /ip/loadBalancing/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            stickiness: {
                // POST /ip/loadBalancing/{serviceName}/stickiness
                $post(params: {stickiness: ip.LoadBalancingStickinessEnum}): Promise<ip.LoadBalancingTask>;
            }
            switchToIplbNextGenerationApi: {
                // POST /ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi
                $post(): Promise<ipLoadbalancing.Task.Task>;
            }
            task: {
                // GET /ip/loadBalancing/{serviceName}/task
                $get(): Promise<number[]>;
                $(taskId: number): {
                    // GET /ip/loadBalancing/{serviceName}/task/{taskId}
                    $get(): Promise<ip.LoadBalancingTask>;
                };
            }
        };
    }
    service: {
        // GET /ip/service
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /ip/service/{serviceName}
            $get(): Promise<ip.ServiceIp>;
            // PUT /ip/service/{serviceName}
            $put(params?: {canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, ip?: string, organisationId?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum}): Promise<void>;
            changeContact: {
                // POST /ip/service/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination: {
                // POST /ip/service/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /ip/service/{serviceName}/serviceInfos
                $get(): Promise<services.NonExpiringService>;
            }
            terminate: {
                // POST /ip/service/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
    $(ip: string): {
        // GET /ip/{ip}
        $get(): Promise<ip.Ip>;
        // PUT /ip/{ip}
        $put(params?: {canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, ip?: string, organisationId?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum}): Promise<void>;
        antihack: {
            // GET /ip/{ip}/antihack
            $get(params?: {state?: ip.BlockedIpStateEnum}): Promise<string[]>;
            $(ipBlocked: string): {
                // GET /ip/{ip}/antihack/{ipBlocked}
                $get(): Promise<ip.BlockedIp>;
                unblock: {
                    // POST /ip/{ip}/antihack/{ipBlocked}/unblock
                    $post(): Promise<void>;
                }
            };
        }
        arp: {
            // GET /ip/{ip}/arp
            $get(params?: {state?: ip.ArpStateEnum}): Promise<string[]>;
            $(ipBlocked: string): {
                // GET /ip/{ip}/arp/{ipBlocked}
                $get(): Promise<ip.ArpBlockedIp>;
                unblock: {
                    // POST /ip/{ip}/arp/{ipBlocked}/unblock
                    $post(): Promise<void>;
                }
            };
        }
        changeOrg: {
            // POST /ip/{ip}/changeOrg
            $post(params: {organisation: string}): Promise<ip.IpTask>;
        }
        delegation: {
            // GET /ip/{ip}/delegation
            $get(): Promise<string[]>;
            // POST /ip/{ip}/delegation
            $post(params: {target: string}): Promise<ip.ReverseDelegation>;
            $(target: string): {
                // DELETE /ip/{ip}/delegation/{target}
                $delete(): Promise<void>;
                // GET /ip/{ip}/delegation/{target}
                $get(): Promise<ip.ReverseDelegation>;
            };
        }
        firewall: {
            // GET /ip/{ip}/firewall
            $get(params?: {enabled?: boolean, state?: ip.FirewallStateEnum}): Promise<string[]>;
            // POST /ip/{ip}/firewall
            $post(params: {ipOnFirewall: string}): Promise<ip.FirewallIp>;
            $(ipOnFirewall: string): {
                // DELETE /ip/{ip}/firewall/{ipOnFirewall}
                $delete(): Promise<string>;
                // GET /ip/{ip}/firewall/{ipOnFirewall}
                $get(): Promise<ip.FirewallIp>;
                // PUT /ip/{ip}/firewall/{ipOnFirewall}
                $put(params?: {enabled?: boolean, ipOnFirewall?: string, state?: ip.FirewallStateEnum}): Promise<void>;
                rule: {
                    // GET /ip/{ip}/firewall/{ipOnFirewall}/rule
                    $get(params?: {state?: ip.FirewallRuleStateEnum}): Promise<number[]>;
                    // POST /ip/{ip}/firewall/{ipOnFirewall}/rule
                    $post(params: {action: ip.FirewallActionEnum, destinationPort?: number, protocol: ip.FirewallProtocolEnum, sequence: ip.FirewallSequenceRangeEnum, source?: string, sourcePort?: number, tcpOption?: ip.FirewallOptionTCP}): Promise<ip.FirewallNetworkRule>;
                    $(sequence: number): {
                        // DELETE /ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}
                        $delete(): Promise<ip.FirewallNetworkRule>;
                        // GET /ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}
                        $get(): Promise<ip.FirewallNetworkRule>;
                    };
                }
            };
        }
        game: {
            // GET /ip/{ip}/game
            $get(): Promise<string[]>;
            $(ipOnGame: string): {
                // GET /ip/{ip}/game/{ipOnGame}
                $get(): Promise<ip.GameMitigation>;
                // PUT /ip/{ip}/game/{ipOnGame}
                $put(params?: {firewallModeEnabled?: boolean, ipOnGame?: string, state?: ip.GameMitigationStateEnum}): Promise<void>;
                rule: {
                    // GET /ip/{ip}/game/{ipOnGame}/rule
                    $get(): Promise<number[]>;
                    // POST /ip/{ip}/game/{ipOnGame}/rule
                    $post(params: {ports: complexType.Range<number>, protocol: ip.GameMitigationRuleProtocolEnum}): Promise<ip.GameMitigationRule>;
                    $(id: number): {
                        // DELETE /ip/{ip}/game/{ipOnGame}/rule/{id}
                        $delete(): Promise<ip.GameMitigationRule>;
                        // GET /ip/{ip}/game/{ipOnGame}/rule/{id}
                        $get(): Promise<ip.GameMitigationRule>;
                    };
                }
            };
        }
        license: {
            cloudLinux: {
                // GET /ip/{ip}/license/cloudLinux
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
            cpanel: {
                // GET /ip/{ip}/license/cpanel
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
            directadmin: {
                // GET /ip/{ip}/license/directadmin
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
            plesk: {
                // GET /ip/{ip}/license/plesk
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
            sqlserver: {
                // GET /ip/{ip}/license/sqlserver
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
            virtuozzo: {
                // GET /ip/{ip}/license/virtuozzo
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
            windows: {
                // GET /ip/{ip}/license/windows
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
            worklight: {
                // GET /ip/{ip}/license/worklight
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
        }
        migrationToken: {
            // GET /ip/{ip}/migrationToken
            $get(): Promise<ip.IpMigrationToken>;
            // POST /ip/{ip}/migrationToken
            $post(params: {customerId: string}): Promise<ip.IpMigrationToken>;
        }
        mitigation: {
            // GET /ip/{ip}/mitigation
            $get(params?: {auto?: boolean, state?: ip.MitigationStateEnum}): Promise<string[]>;
            // POST /ip/{ip}/mitigation
            $post(params: {ipOnMitigation: string}): Promise<ip.MitigationIp>;
            $(ipOnMitigation: string): {
                // DELETE /ip/{ip}/mitigation/{ipOnMitigation}
                $delete(): Promise<ip.MitigationIp>;
                // GET /ip/{ip}/mitigation/{ipOnMitigation}
                $get(): Promise<ip.MitigationIp>;
                // PUT /ip/{ip}/mitigation/{ipOnMitigation}
                $put(params?: {auto?: boolean, ipOnMitigation?: string, permanent?: boolean, state?: ip.MitigationStateEnum}): Promise<void>;
                stats: {
                    // GET /ip/{ip}/mitigation/{ipOnMitigation}/stats
                    $get(params: {from: string, scale: ip.MitigationStatsScaleEnum, to: string}): Promise<ip.MitigationStats[]>;
                }
                topStream: {
                    // GET /ip/{ip}/mitigation/{ipOnMitigation}/topStream
                    $get(params: {date: string, scale: ip.MitigationStatsScaleEnum}): Promise<ip.MitigationDetailedStats[]>;
                }
            };
        }
        mitigationProfiles: {
            // GET /ip/{ip}/mitigationProfiles
            $get(): Promise<string[]>;
            // POST /ip/{ip}/mitigationProfiles
            $post(params: {autoMitigationTimeOut: ip.MitigationProfileAutoMitigationTimeOutEnum, ipMitigationProfile: string}): Promise<ip.MitigationProfile>;
            $(ipMitigationProfile: string): {
                // DELETE /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                $delete(): Promise<void>;
                // GET /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                $get(): Promise<ip.MitigationProfile>;
                // PUT /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
                $put(params?: {autoMitigationTimeOut?: ip.MitigationProfileAutoMitigationTimeOutEnum, ipMitigationProfile?: string, state?: ip.MitigationProfileStateEnum}): Promise<void>;
            };
        }
        move: {
            // GET /ip/{ip}/move
            $get(): Promise<ip.Destinations>;
            // POST /ip/{ip}/move
            $post(params: {nexthop?: string, to: string}): Promise<ip.IpTask>;
        }
        park: {
            // POST /ip/{ip}/park
            $post(): Promise<ip.IpTask>;
        }
        phishing: {
            // GET /ip/{ip}/phishing
            $get(params?: {ipOnAntiphishing?: string, state?: ip.AntiphishingStateEnum}): Promise<number[]>;
            $(id: number): {
                // GET /ip/{ip}/phishing/{id}
                $get(): Promise<ip.Antiphishing>;
            };
        }
        reverse: {
            // GET /ip/{ip}/reverse
            $get(): Promise<string[]>;
            // POST /ip/{ip}/reverse
            $post(params: {ipReverse: string, reverse: string}): Promise<ip.ReverseIp>;
            $(ipReverse: string): {
                // DELETE /ip/{ip}/reverse/{ipReverse}
                $delete(): Promise<void>;
                // GET /ip/{ip}/reverse/{ipReverse}
                $get(): Promise<ip.ReverseIp>;
            };
        }
        ripe: {
            // GET /ip/{ip}/ripe
            $get(): Promise<ip.RipeInfos>;
            // PUT /ip/{ip}/ripe
            $put(params?: {description?: string, netname?: string}): Promise<void>;
        }
        spam: {
            // GET /ip/{ip}/spam
            $get(params?: {state?: ip.SpamStateEnum}): Promise<string[]>;
            $(ipSpamming: string): {
                // GET /ip/{ip}/spam/{ipSpamming}
                $get(): Promise<ip.SpamIp>;
                stats: {
                    // GET /ip/{ip}/spam/{ipSpamming}/stats
                    $get(params: {from: string, to: string}): Promise<ip.SpamStats[]>;
                }
                unblock: {
                    // POST /ip/{ip}/spam/{ipSpamming}/unblock
                    $post(): Promise<ip.SpamIp>;
                }
            };
        }
        task: {
            // GET /ip/{ip}/task
            $get(params?: {function_?: ip.TaskFunctionEnum, status?: ip.TaskStatusEnum}): Promise<number[]>;
            $(taskId: number): {
                // GET /ip/{ip}/task/{taskId}
                $get(): Promise<ip.IpTask>;
            };
        }
        terminate: {
            // POST /ip/{ip}/terminate
            $post(): Promise<ip.IpTask>;
        }
    };
}

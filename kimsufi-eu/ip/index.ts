import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /ip Models
 * Source: https://eu.api.kimsufi.com/1.0/ip.json
 */
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
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
     * Your IP
     * interface fullName: ip.Ip.Ip
     */
    export interface Ip {
        canBeTerminated: boolean;
        country?: coreTypes.CountryEnum;
        description?: string;
        ip: string;
        organisationId?: string;
        routedTo?: ip.RoutedTo;
        type: ip.IpTypeEnum;
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
     * Traffic statistics in and out on a mitigated ip
     * interface fullName: ip.MitigationStats.MitigationStats
     */
    export interface MitigationStats {
        in?: ip.MitigationTraffic;
        out?: ip.MitigationTraffic;
        timestamp: number;
    }
    /**
     * Traffic on mitigation
     * interface fullName: ip.MitigationTraffic.MitigationTraffic
     */
    export interface MitigationTraffic {
        bps: number;
        pps: number;
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
export namespace service {
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
        $put(params?: { canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, ip?: string, organisationId?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum }): Promise<void>;
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
    };
}

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /ip Models
 * Source: https://ca.api.kimsufi.com/1.0/ip.json
 */
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
    // interface fullName: ip.MitigationAttack.MitigationAttack
    export interface MitigationAttack {
        endDate?: string;
        idAttack: number;
        ipAttack: string;
        startDate: string;
    }
    // interface fullName: ip.MitigationStats.MitigationStats
    export interface MitigationStats {
        in?: ip.MitigationTraffic;
        out?: ip.MitigationTraffic;
        timestamp: number;
    }
    // interface fullName: ip.MitigationTraffic.MitigationTraffic
    export interface MitigationTraffic {
        bps: number;
        pps: number;
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
export namespace service {
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
    service: {
        // GET /ip/service
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /ip/service/{serviceName}
            $get(): Promise<ip.ServiceIp>;
            // PUT /ip/service/{serviceName}
            $put(params?: {canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, ip?: string, organisationId?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum}): Promise<void>;
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
        license: {
            cloudLinux: {
                // GET /ip/{ip}/license/cloudLinux
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
            sqlserver: {
                // GET /ip/{ip}/license/sqlserver
                $get(params?: {ipAddress?: string}): Promise<string[]>;
            }
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
    };
// Api
  /**
   * List the ip.Ip objects
   * Your OVH IPs
   */
  get(path: '/ip'): (params?: {description?: string, ip?: string, routedTo_serviceName?: string, type?: ip.IpTypeEnum}) => Promise<string[]>;
  /**
   * Your IP
   * Get this object properties
   */
  get(path: '/ip/{ip}'): (params: {ip: string}) => Promise<ip.Ip>;
  /**
   * List the ip.BlockedIp objects
   * Anti-Hack blocked IP
   */
  get(path: '/ip/{ip}/antihack'): (params: {ip: string, state?: ip.BlockedIpStateEnum}) => Promise<string[]>;
  /**
   * Blocked IP information
   * Get this object properties
   */
  get(path: '/ip/{ip}/antihack/{ipBlocked}'): (params: {ip: string, ipBlocked: string}) => Promise<ip.BlockedIp>;
  /**
   * List the ip.ArpBlockedIp objects
   * ARP blocked IP
   */
  get(path: '/ip/{ip}/arp'): (params: {ip: string, state?: ip.ArpStateEnum}) => Promise<string[]>;
  /**
   * ARP blocked IP information
   * Get this object properties
   */
  get(path: '/ip/{ip}/arp/{ipBlocked}'): (params: {ip: string, ipBlocked: string}) => Promise<ip.ArpBlockedIp>;
  /**
   * List the license.cloudLinux.CloudLinux objects
   * Cloud Linux licenses associated to this IP
   */
  get(path: '/ip/{ip}/license/cloudLinux'): (params: {ip: string, ipAddress?: string}) => Promise<string[]>;
  /**
   * List the license.sqlserver.SqlServer objects
   * SQL Server licenses associated to this IP
   */
  get(path: '/ip/{ip}/license/sqlserver'): (params: {ip: string, ipAddress?: string}) => Promise<string[]>;
  /**
   * List the ip.Antiphishing objects
   * Ip under anti-phishing
   */
  get(path: '/ip/{ip}/phishing'): (params: {ip: string, ipOnAntiphishing?: string, state?: ip.AntiphishingStateEnum}) => Promise<number[]>;
  /**
   * Phishing URLs hosted on your IP
   * Get this object properties
   */
  get(path: '/ip/{ip}/phishing/{id}'): (params: {id: number, ip: string}) => Promise<ip.Antiphishing>;
  /**
   * List the ip.ReverseIp objects
   * Reverse on your ip
   */
  get(path: '/ip/{ip}/reverse'): (params: {ip: string}) => Promise<string[]>;
  /**
   * Your reverse records on IP
   * Get this object properties
   */
  get(path: '/ip/{ip}/reverse/{ipReverse}'): (params: {ip: string, ipReverse: string}) => Promise<ip.ReverseIp>;
  /**
   * IP block RIPE informations
   * Get this object properties
   */
  get(path: '/ip/{ip}/ripe'): (params: {ip: string}) => Promise<ip.RipeInfos>;
  /**
   * List the ip.SpamIp objects
   * Ip spamming
   */
  get(path: '/ip/{ip}/spam'): (params: {ip: string, state?: ip.SpamStateEnum}) => Promise<string[]>;
  /**
   * Your IP spam stats
   * Get this object properties
   */
  get(path: '/ip/{ip}/spam/{ipSpamming}'): (params: {ip: string, ipSpamming: string}) => Promise<ip.SpamIp>;
  /**
   * stats operations
   * Get statistics about the email traffic
   */
  get(path: '/ip/{ip}/spam/{ipSpamming}/stats'): (params: {ip: string, ipSpamming: string, from: string, to: string}) => Promise<ip.SpamStats[]>;
  /**
   * List the ip.IpTask objects
   * IP tasks
   */
  get(path: '/ip/{ip}/task'): (params: {ip: string, function_?: ip.TaskFunctionEnum, status?: ip.TaskStatusEnum}) => Promise<number[]>;
  /**
   * IP tasks
   * Get this object properties
   */
  get(path: '/ip/{ip}/task/{taskId}'): (params: {ip: string, taskId: number}) => Promise<ip.IpTask>;
  /**
   * Operations about the IP service
   * List available services
   */
  get(path: '/ip/service'): () => Promise<string[]>;
  /**
   * Your IP linked to service
   * Get this object properties
   */
  get(path: '/ip/service/{serviceName}'): (params: {serviceName: string}) => Promise<ip.ServiceIp>;
  /**
   * Details about a non-expiring Service
   * Get this object properties
   */
  get(path: '/ip/service/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.NonExpiringService>;
  /**
   * Your IP
   * Alter this object properties
   */
  put(path: '/ip/{ip}'): (params: {ip: string, canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, organisationId?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum}) => Promise<void>;
  /**
   * IP block RIPE informations
   * Alter this object properties
   */
  put(path: '/ip/{ip}/ripe'): (params: {ip: string, description?: string, netname?: string}) => Promise<void>;
  /**
   * Your IP linked to service
   * Alter this object properties
   */
  put(path: '/ip/service/{serviceName}'): (params: {serviceName: string, canBeTerminated?: boolean, country?: coreTypes.CountryEnum, description?: string, ip?: string, organisationId?: string, routedTo?: ip.RoutedTo, type?: ip.IpTypeEnum}) => Promise<void>;
  /**
   * unblock operations
   * Unblock this IP
   */
  post(path: '/ip/{ip}/antihack/{ipBlocked}/unblock'): (params: {ip: string, ipBlocked: string}) => Promise<void>;
  /**
   * unblock operations
   * Unblock this IP
   */
  post(path: '/ip/{ip}/arp/{ipBlocked}/unblock'): (params: {ip: string, ipBlocked: string}) => Promise<void>;
  /**
   * List the ip.ReverseIp objects
   * Add reverse on an ip
   */
  post(path: '/ip/{ip}/reverse'): (params: {ip: string, ipReverse: string, reverse: string}) => Promise<ip.ReverseIp>;
  /**
   * unblock operations
   * Release the ip from anti-spam system
   */
  post(path: '/ip/{ip}/spam/{ipSpamming}/unblock'): (params: {ip: string, ipSpamming: string}) => Promise<ip.SpamIp>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/ip/service/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/ip/service/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * Your reverse records on IP
   * Delete a reverse on one IP
   */
  delete(path: '/ip/{ip}/reverse/{ipReverse}'): (params: {ip: string, ipReverse: string}) => Promise<void>;
}

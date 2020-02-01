import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cdn/dedicated Models
 * Source: https://ca.api.ovh.com/1.0/cdn/dedicated.json
 */
export namespace cdnanycast {
    // interface fullName: cdnanycast.Anycast.Anycast
    export interface Anycast {
        anycast: string;
        backendLimit: number;
        backendUse: number;
        cacheRuleLimitPerDomain: number;
        lastQuotaOrder?: string;
        logUrl: string;
        offer?: string;
        quota: number;
        service: string;
    }
    // interface fullName: cdnanycast.Backend.Backend
    export interface Backend {
        ip: string;
    }
    // interface fullName: cdnanycast.CacheRule.CacheRule
    export interface CacheRule {
        cacheRuleId: number;
        cacheType: cdnanycast.CacheRuleCacheTypeEnum;
        domain: string;
        fileMatch: string;
        fileType: cdnanycast.CacheRuleFileTypeEnum;
        status: cdnanycast.CacheRuleStatusEnum;
        ttl: number;
    }
    // type fullname: cdnanycast.CacheRuleCacheTypeEnum
    export type CacheRuleCacheTypeEnum = "forceCache" | "noCache"
    // type fullname: cdnanycast.CacheRuleFileTypeEnum
    export type CacheRuleFileTypeEnum = "extension" | "file" | "folder"
    // type fullname: cdnanycast.CacheRuleStatusEnum
    export type CacheRuleStatusEnum = "creating" | "deleting" | "error" | "off" | "on" | "updating"
    // interface fullName: cdnanycast.Domain.Domain
    export interface Domain {
        cacheRuleUse: number;
        cname: string;
        domain: string;
        status: cdnanycast.DomainStatusEnum;
        type: cdnanycast.DomainTypeEnum;
    }
    // type fullname: cdnanycast.DomainStatusEnum
    export type DomainStatusEnum = "error" | "off" | "on" | "removing"
    // type fullname: cdnanycast.DomainTypeEnum
    export type DomainTypeEnum = "plain" | "ssl"
    // interface fullName: cdnanycast.LogsURL.LogsURL
    export interface LogsURL {
        expirationDate: string;
        url: string;
    }
    // interface fullName: cdnanycast.Pop.Pop
    export interface Pop {
        city: string;
        comment: string;
        name: string;
        status: cdnanycast.PopStatusEnum;
    }
    // type fullname: cdnanycast.PopStatusEnum
    export type PopStatusEnum = "down" | "ok" | "rerouted" | "unknown"
    // interface fullName: cdnanycast.Ssl.Ssl
    export interface Ssl {
        certificateProvider: string;
        certificateValidFrom?: string;
        certificateValidTo?: string;
        cn?: string;
        name: string;
        status: cdnanycast.SslStateEnum;
    }
    // type fullname: cdnanycast.SslStateEnum
    export type SslStateEnum = "checking" | "creating" | "error" | "off" | "on" | "removing" | "updating" | "uploading"
    // interface fullName: cdnanycast.StatsDataType.StatsDataType
    export interface StatsDataType {
        date: string;
        value?: number;
    }
    // type fullname: cdnanycast.StatsPeriodEnum
    export type StatsPeriodEnum = "day" | "month" | "week"
    // type fullname: cdnanycast.StatsTypeEnum
    export type StatsTypeEnum = "backend" | "cdn" | "threat"
    // type fullname: cdnanycast.StatsValueEnum
    export type StatsValueEnum = "bandwidth" | "request"
    // interface fullName: cdnanycast.Task.Task
    export interface Task {
        comment?: string;
        function: cdnanycast.TaskFunctionEnum;
        status: cdnanycast.TaskStateEnum;
        taskId: number;
    }
    // type fullname: cdnanycast.TaskFunctionEnum
    export type TaskFunctionEnum = "flush" | "flushAll" | "generateSsl" | "installSsl" | "reinstallSsl" | "removeDomain" | "uninstallSsl" | "updateCacheRule"
    // type fullname: cdnanycast.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
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
 * END API /cdn/dedicated Models
 */
export function proxyCdnDedicated(ovhEngine: OvhRequestable): Cdn {
    return buildOvhProxy(ovhEngine, '/cdn');
}
export default proxyCdnDedicated;
/**
 * Api Proxy model
 */// Apis harmony
// path /cdn
export interface Cdn{
    dedicated: {
        // GET /cdn/dedicated
        $get(): Promise<string[]>;
        pops: {
            // GET /cdn/dedicated/pops
            $get(): Promise<string[]>;
            $(name: string): {
                // GET /cdn/dedicated/pops/{name}
                $get(): Promise<cdnanycast.Pop>;
            };
        }
        $(serviceName: string): {
            // GET /cdn/dedicated/{serviceName}
            $get(): Promise<cdnanycast.Anycast>;
            domains: {
                // GET /cdn/dedicated/{serviceName}/domains
                $get(): Promise<string[]>;
                // POST /cdn/dedicated/{serviceName}/domains
                $post(params: {domain: string}): Promise<cdnanycast.Domain>;
                $(domain: string): {
                    // DELETE /cdn/dedicated/{serviceName}/domains/{domain}
                    $delete(): Promise<cdnanycast.Task>;
                    // GET /cdn/dedicated/{serviceName}/domains/{domain}
                    $get(): Promise<cdnanycast.Domain>;
                    // PUT /cdn/dedicated/{serviceName}/domains/{domain}
                    $put(params?: {cacheRuleUse?: number, cname?: string, domain?: string, status?: cdnanycast.DomainStatusEnum, type?: cdnanycast.DomainTypeEnum}): Promise<void>;
                    backends: {
                        // GET /cdn/dedicated/{serviceName}/domains/{domain}/backends
                        $get(): Promise<string[]>;
                        // POST /cdn/dedicated/{serviceName}/domains/{domain}/backends
                        $post(params: {ip: string}): Promise<cdnanycast.Backend>;
                        $(ip: string): {
                            // DELETE /cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}
                            $delete(): Promise<string>;
                            // GET /cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}
                            $get(): Promise<cdnanycast.Backend>;
                        };
                    }
                    cacheRules: {
                        // GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
                        $get(params?: {fileMatch?: string}): Promise<number[]>;
                        // POST /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
                        $post(params: {cacheType: cdnanycast.CacheRuleCacheTypeEnum, fileMatch: string, fileType: cdnanycast.CacheRuleFileTypeEnum, ttl: number}): Promise<cdnanycast.CacheRule>;
                        $(cacheRuleId: number): {
                            // DELETE /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                            $delete(): Promise<cdnanycast.Task>;
                            // GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                            $get(): Promise<cdnanycast.CacheRule>;
                            // PUT /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                            $put(params?: {cacheRuleId?: number, cacheType?: cdnanycast.CacheRuleCacheTypeEnum, domain?: string, fileMatch?: string, fileType?: cdnanycast.CacheRuleFileTypeEnum, status?: cdnanycast.CacheRuleStatusEnum, ttl?: number}): Promise<void>;
                            flush: {
                                // POST /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush
                                $post(): Promise<cdnanycast.Task>;
                            }
                            tasks: {
                                // GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks
                                $get(): Promise<number[]>;
                                $(taskId: number): {
                                    // GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}
                                    $get(): Promise<cdnanycast.Task>;
                                };
                            }
                        };
                    }
                    flush: {
                        // POST /cdn/dedicated/{serviceName}/domains/{domain}/flush
                        $post(): Promise<cdnanycast.Task>;
                    }
                    logs: {
                        // POST /cdn/dedicated/{serviceName}/domains/{domain}/logs
                        $post(): Promise<cdnanycast.LogsURL>;
                    }
                    statistics: {
                        // GET /cdn/dedicated/{serviceName}/domains/{domain}/statistics
                        $get(params: {period: cdnanycast.StatsPeriodEnum, type: cdnanycast.StatsTypeEnum, value: cdnanycast.StatsValueEnum}): Promise<cdnanycast.StatsDataType[]>;
                    }
                    tasks: {
                        // GET /cdn/dedicated/{serviceName}/domains/{domain}/tasks
                        $get(): Promise<number[]>;
                        $(taskId: number): {
                            // GET /cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}
                            $get(): Promise<cdnanycast.Task>;
                        };
                    }
                };
            }
            logs: {
                // POST /cdn/dedicated/{serviceName}/logs
                $post(): Promise<cdnanycast.LogsURL>;
            }
            quota: {
                // GET /cdn/dedicated/{serviceName}/quota
                $get(params: {period: cdnanycast.StatsPeriodEnum}): Promise<cdnanycast.StatsDataType[]>;
            }
            serviceInfos: {
                // GET /cdn/dedicated/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cdn/dedicated/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            ssl: {
                // DELETE /cdn/dedicated/{serviceName}/ssl
                $delete(): Promise<cdnanycast.Task>;
                // GET /cdn/dedicated/{serviceName}/ssl
                $get(): Promise<cdnanycast.Ssl>;
                // POST /cdn/dedicated/{serviceName}/ssl
                $post(params: {certificate?: string, chain?: string, key?: string, name: string}): Promise<cdnanycast.Ssl>;
                tasks: {
                    // GET /cdn/dedicated/{serviceName}/ssl/tasks
                    $get(params?: {function_?: cdnanycast.TaskFunctionEnum, status?: cdnanycast.TaskStateEnum}): Promise<number[]>;
                    $(taskId: number): {
                        // GET /cdn/dedicated/{serviceName}/ssl/tasks/{taskId}
                        $get(): Promise<cdnanycast.Task>;
                    };
                }
                update: {
                    // POST /cdn/dedicated/{serviceName}/ssl/update
                    $post(params: {certificate: string, chain?: string, key: string}): Promise<cdnanycast.Task>;
                }
            }
        };
    }
}

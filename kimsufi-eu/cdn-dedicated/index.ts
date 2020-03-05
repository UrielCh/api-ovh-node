import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /cdn/dedicated Models
 * Source: https://eu.api.kimsufi.com/1.0/cdn/dedicated.json
 */
export namespace cdnanycast {
    /**
     * Anycast IP of a CDN customer
     * interface fullName: cdnanycast.Anycast.Anycast
     */
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
    /**
     * Backend for a domain
     * interface fullName: cdnanycast.Backend.Backend
     */
    export interface Backend {
        ip: string;
    }
    /**
     * CacheRules for a domain
     * interface fullName: cdnanycast.CacheRule.CacheRule
     */
    export interface CacheRule {
        cacheRuleId: number;
        cacheType: cdnanycast.CacheRuleCacheTypeEnum;
        domain: string;
        fileMatch: string;
        fileType: cdnanycast.CacheRuleFileTypeEnum;
        status: cdnanycast.CacheRuleStatusEnum;
        ttl: number;
    }
    /**
     * All type a cache can be in
     * type fullname: cdnanycast.CacheRuleCacheTypeEnum
     */
    export type CacheRuleCacheTypeEnum = "forceCache" | "noCache"
    /**
     * All states an anycast pool can be in
     * type fullname: cdnanycast.CacheRuleFileTypeEnum
     */
    export type CacheRuleFileTypeEnum = "extension" | "file" | "folder"
    /**
     * All states a status can be in
     * type fullname: cdnanycast.CacheRuleStatusEnum
     */
    export type CacheRuleStatusEnum = "creating" | "deleting" | "error" | "off" | "on" | "updating"
    /**
     * Domain on CDN
     * interface fullName: cdnanycast.Domain.Domain
     */
    export interface Domain {
        cacheRuleUse: number;
        cname: string;
        domain: string;
        status: cdnanycast.DomainStatusEnum;
        type: cdnanycast.DomainTypeEnum;
    }
    /**
     * All states a status can be in
     * type fullname: cdnanycast.DomainStatusEnum
     */
    export type DomainStatusEnum = "error" | "off" | "on" | "removing"
    /**
     * All type of Domain
     * type fullname: cdnanycast.DomainTypeEnum
     */
    export type DomainTypeEnum = "plain" | "ssl"
    /**
     * URL to real time logs
     * interface fullName: cdnanycast.LogsURL.LogsURL
     */
    export interface LogsURL {
        expirationDate: string;
        url: string;
    }
    /**
     * CDN Pop
     * interface fullName: cdnanycast.Pop.Pop
     */
    export interface Pop {
        city: string;
        comment: string;
        name: string;
        status: cdnanycast.PopStatusEnum;
    }
    /**
     * All Pop status
     * type fullname: cdnanycast.PopStatusEnum
     */
    export type PopStatusEnum = "down" | "ok" | "rerouted" | "unknown"
    /**
     * CDN Ssl
     * interface fullName: cdnanycast.Ssl.Ssl
     */
    export interface Ssl {
        certificateProvider: string;
        certificateValidFrom?: string;
        certificateValidTo?: string;
        cn?: string;
        name: string;
        status: cdnanycast.SslStateEnum;
    }
    /**
     * All states a CDN SSL can be in
     * type fullname: cdnanycast.SslStateEnum
     */
    export type SslStateEnum = "checking" | "creating" | "error" | "off" | "on" | "removing" | "updating" | "uploading"
    /**
     * A structure describing type of a stats hash
     * interface fullName: cdnanycast.StatsDataType.StatsDataType
     */
    export interface StatsDataType {
        date: string;
        value?: number;
    }
    /**
     * Period of the statistics
     * type fullname: cdnanycast.StatsPeriodEnum
     */
    export type StatsPeriodEnum = "day" | "month" | "week"
    /**
     * Type of statistics related to cache
     * type fullname: cdnanycast.StatsTypeEnum
     */
    export type StatsTypeEnum = "backend" | "cdn" | "threat"
    /**
     * Value bandwidth or request
     * type fullname: cdnanycast.StatsValueEnum
     */
    export type StatsValueEnum = "bandwidth" | "request"
    /**
     * Task on a CDN
     * interface fullName: cdnanycast.Task.Task
     */
    export interface Task {
        comment?: string;
        function: cdnanycast.TaskFunctionEnum;
        status: cdnanycast.TaskStateEnum;
        taskId: number;
    }
    /**
     * All function CDN task can be
     * type fullname: cdnanycast.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "flush" | "flushAll" | "generateSsl" | "installSsl" | "reinstallSsl" | "removeDomain" | "uninstallSsl" | "updateCacheRule"
    /**
     * All states a CDN task can be in
     * type fullname: cdnanycast.TaskStateEnum
     */
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
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
 * END API /cdn/dedicated Models
 */
export function proxyCdnDedicated(ovhEngine: OvhRequestable): Cdn {
    return buildOvhProxy(ovhEngine, '/cdn');
}
export default proxyCdnDedicated;
/**
 * Api model for /cdn/dedicated
 */
export interface Cdn {
    dedicated: {
        /**
         * List available services
         * GET /cdn/dedicated
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        pops: {
            /**
             * List of CDN Pops
             * GET /cdn/dedicated/pops
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(name: string): {
                /**
                 * Get this object properties
                 * GET /cdn/dedicated/pops/{name}
                 */
                $get(): Promise<cdnanycast.Pop>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /cdn/dedicated/{serviceName}
             */
            $get(): Promise<cdnanycast.Anycast>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /cdn/dedicated/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            domains: {
                /**
                 * Domains associated to this anycast
                 * GET /cdn/dedicated/{serviceName}/domains
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a domain on CDN
                 * POST /cdn/dedicated/{serviceName}/domains
                 */
                $post(params: { domain: string }): Promise<cdnanycast.Domain>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domain: string): {
                    /**
                     * Remove a domain from the CDN
                     * DELETE /cdn/dedicated/{serviceName}/domains/{domain}
                     */
                    $delete(): Promise<cdnanycast.Task>;
                    /**
                     * Get this object properties
                     * GET /cdn/dedicated/{serviceName}/domains/{domain}
                     */
                    $get(): Promise<cdnanycast.Domain>;
                    /**
                     * Alter this object properties
                     * PUT /cdn/dedicated/{serviceName}/domains/{domain}
                     */
                    $put(params?: { cacheRuleUse?: number, cname?: string, domain?: string, status?: cdnanycast.DomainStatusEnum, type?: cdnanycast.DomainTypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    backends: {
                        /**
                         * Backend associated to the domain
                         * GET /cdn/dedicated/{serviceName}/domains/{domain}/backends
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add a backend IP
                         * POST /cdn/dedicated/{serviceName}/domains/{domain}/backends
                         */
                        $post(params: { ip: string }): Promise<cdnanycast.Backend>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(ip: string): {
                            /**
                             * Remove a backend IP
                             * DELETE /cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}
                             */
                            $delete(): Promise<string>;
                            /**
                             * Get this object properties
                             * GET /cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}
                             */
                            $get(): Promise<cdnanycast.Backend>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    cacheRules: {
                        /**
                         * Cache rules associated to the domain
                         * GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
                         */
                        $get(params?: { fileMatch?: string }): Promise<number[]>;
                        /**
                         * Add a cache rule to a domain
                         * POST /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
                         */
                        $post(params: { cacheType: cdnanycast.CacheRuleCacheTypeEnum, fileMatch: string, fileType: cdnanycast.CacheRuleFileTypeEnum, ttl: number }): Promise<cdnanycast.CacheRule>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(cacheRuleId: number): {
                            /**
                             * Remove cache rule
                             * DELETE /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                             */
                            $delete(): Promise<cdnanycast.Task>;
                            /**
                             * Get this object properties
                             * GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                             */
                            $get(): Promise<cdnanycast.CacheRule>;
                            /**
                             * Alter this object properties
                             * PUT /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                             */
                            $put(params?: { cacheRuleId?: number, cacheType?: cdnanycast.CacheRuleCacheTypeEnum, domain?: string, fileMatch?: string, fileType?: cdnanycast.CacheRuleFileTypeEnum, status?: cdnanycast.CacheRuleStatusEnum, ttl?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            flush: {
                                /**
                                 * Flush the cache
                                 * POST /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush
                                 */
                                $post(): Promise<cdnanycast.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            tasks: {
                                /**
                                 * Task associated to the cache rule
                                 * GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(taskId: number): {
                                    /**
                                     * Get this object properties
                                     * GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}
                                     */
                                    $get(): Promise<cdnanycast.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                    flush: {
                        /**
                         * Flush all cache
                         * POST /cdn/dedicated/{serviceName}/domains/{domain}/flush
                         */
                        $post(): Promise<cdnanycast.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    logs: {
                        /**
                         * Generate URL to real time logs
                         * POST /cdn/dedicated/{serviceName}/domains/{domain}/logs
                         */
                        $post(): Promise<cdnanycast.LogsURL>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    statistics: {
                        /**
                         * Return stats about a domain
                         * GET /cdn/dedicated/{serviceName}/domains/{domain}/statistics
                         */
                        $get(params: { period: cdnanycast.StatsPeriodEnum, type: cdnanycast.StatsTypeEnum, value: cdnanycast.StatsValueEnum }): Promise<cdnanycast.StatsDataType[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    tasks: {
                        /**
                         * Task associated to the domain
                         * GET /cdn/dedicated/{serviceName}/domains/{domain}/tasks
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(taskId: number): {
                            /**
                             * Get this object properties
                             * GET /cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}
                             */
                            $get(): Promise<cdnanycast.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            logs: {
                /**
                 * Generate URL to real time logs
                 * POST /cdn/dedicated/{serviceName}/logs
                 */
                $post(): Promise<cdnanycast.LogsURL>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            quota: {
                /**
                 * Return quota history
                 * GET /cdn/dedicated/{serviceName}/quota
                 */
                $get(params: { period: cdnanycast.StatsPeriodEnum }): Promise<cdnanycast.StatsDataType[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /cdn/dedicated/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /cdn/dedicated/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ssl: {
                /**
                 * Remove SSL of the CDN
                 * DELETE /cdn/dedicated/{serviceName}/ssl
                 */
                $delete(): Promise<cdnanycast.Task>;
                /**
                 * Get this object properties
                 * GET /cdn/dedicated/{serviceName}/ssl
                 */
                $get(): Promise<cdnanycast.Ssl>;
                /**
                 * Add a SSL on CDN or Generate a Lets Encrypt certificate
                 * POST /cdn/dedicated/{serviceName}/ssl
                 */
                $post(params: { certificate?: string, chain?: string, key?: string, name: string }): Promise<cdnanycast.Ssl>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                tasks: {
                    /**
                     * Task associated to the ssl
                     * GET /cdn/dedicated/{serviceName}/ssl/tasks
                     */
                    $get(params?: { function_?: cdnanycast.TaskFunctionEnum, status?: cdnanycast.TaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /cdn/dedicated/{serviceName}/ssl/tasks/{taskId}
                         */
                        $get(): Promise<cdnanycast.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                update: {
                    /**
                     * Update an existing SSL with a custom certificate
                     * POST /cdn/dedicated/{serviceName}/ssl/update
                     */
                    $post(params: { certificate: string, chain?: string, key: string }): Promise<cdnanycast.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
        };
    }
}

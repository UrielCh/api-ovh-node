import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cdn/dedicated Models
 */
export namespace cdnanycast {
    //cdnanycast.Anycast
    // fullName: cdnanycast.Anycast.Anycast
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
    //cdnanycast.Backend
    // fullName: cdnanycast.Backend.Backend
    export interface Backend {
        ip: string;
    }
    //cdnanycast.CacheRule
    // fullName: cdnanycast.CacheRule.CacheRule
    export interface CacheRule {
        cacheRuleId: number;
        cacheType: cdnanycast.CacheRuleCacheTypeEnum;
        domain: string;
        fileMatch: string;
        fileType: cdnanycast.CacheRuleFileTypeEnum;
        status: cdnanycast.CacheRuleStatusEnum;
        ttl: number;
    }
    //cdnanycast.CacheRuleCacheTypeEnum
    export type CacheRuleCacheTypeEnum = "forceCache" | "noCache"
    //cdnanycast.CacheRuleFileTypeEnum
    export type CacheRuleFileTypeEnum = "extension" | "file" | "folder"
    //cdnanycast.CacheRuleStatusEnum
    export type CacheRuleStatusEnum = "creating" | "deleting" | "error" | "off" | "on" | "updating"
    //cdnanycast.Domain
    // fullName: cdnanycast.Domain.Domain
    export interface Domain {
        cacheRuleUse: number;
        cname: string;
        domain: string;
        status: cdnanycast.DomainStatusEnum;
        type: cdnanycast.DomainTypeEnum;
    }
    //cdnanycast.DomainStatusEnum
    export type DomainStatusEnum = "error" | "off" | "on" | "removing"
    //cdnanycast.DomainTypeEnum
    export type DomainTypeEnum = "plain" | "ssl"
    //cdnanycast.LogsURL
    // fullName: cdnanycast.LogsURL.LogsURL
    export interface LogsURL {
        expirationDate: string;
        url: string;
    }
    //cdnanycast.Pop
    // fullName: cdnanycast.Pop.Pop
    export interface Pop {
        city: string;
        comment: string;
        name: string;
        status: cdnanycast.PopStatusEnum;
    }
    //cdnanycast.PopStatusEnum
    export type PopStatusEnum = "down" | "ok" | "rerouted" | "unknown"
    //cdnanycast.Ssl
    // fullName: cdnanycast.Ssl.Ssl
    export interface Ssl {
        certificateProvider: string;
        certificateValidFrom?: string;
        certificateValidTo?: string;
        cn?: string;
        name: string;
        status: cdnanycast.SslStateEnum;
    }
    //cdnanycast.SslStateEnum
    export type SslStateEnum = "checking" | "creating" | "error" | "off" | "on" | "removing" | "updating" | "uploading"
    //cdnanycast.StatsDataType
    // fullName: cdnanycast.StatsDataType.StatsDataType
    export interface StatsDataType {
        date: string;
        value?: number;
    }
    //cdnanycast.StatsPeriodEnum
    export type StatsPeriodEnum = "day" | "month" | "week"
    //cdnanycast.StatsTypeEnum
    export type StatsTypeEnum = "backend" | "cdn" | "threat"
    //cdnanycast.StatsValueEnum
    export type StatsValueEnum = "bandwidth" | "request"
    //cdnanycast.Task
    // fullName: cdnanycast.Task.Task
    export interface Task {
        comment?: string;
        function: cdnanycast.TaskFunctionEnum;
        status: cdnanycast.TaskStateEnum;
        taskId: number;
    }
    //cdnanycast.TaskFunctionEnum
    export type TaskFunctionEnum = "flush" | "flushAll" | "generateSsl" | "installSsl" | "reinstallSsl" | "removeDomain" | "uninstallSsl" | "updateCacheRule"
    //cdnanycast.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
            changeContact: {
                // POST /cdn/dedicated/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            domains: {
                // GET /cdn/dedicated/{serviceName}/domains
                $get(): Promise<string[]>;
                // POST /cdn/dedicated/{serviceName}/domains
                $post(params?: {domain: string}): Promise<cdnanycast.Domain>;
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
                        $post(params?: {ip: string}): Promise<cdnanycast.Backend>;
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
                        $post(params?: {cacheType: cdnanycast.CacheRuleCacheTypeEnum, fileMatch: string, fileType: cdnanycast.CacheRuleFileTypeEnum, ttl: number}): Promise<cdnanycast.CacheRule>;
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
                        $get(params?: {period: cdnanycast.StatsPeriodEnum, type: cdnanycast.StatsTypeEnum, value: cdnanycast.StatsValueEnum}): Promise<cdnanycast.StatsDataType[]>;
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
                $get(params?: {period: cdnanycast.StatsPeriodEnum}): Promise<cdnanycast.StatsDataType[]>;
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
                $post(params?: {certificate?: string, chain?: string, key?: string, name: string}): Promise<cdnanycast.Ssl>;
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
                    $post(params?: {certificate: string, chain?: string, key: string}): Promise<cdnanycast.Task>;
                }
            }
        };
    }
// Api
  /**
   * Operations about the CDNANYCAST service
   * List available services
   */
  get(path: '/cdn/dedicated'): () => Promise<string[]>;
  /**
   * Anycast IP of a CDN customer
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}'): (params: {serviceName: string}) => Promise<cdnanycast.Anycast>;
  /**
   * List the cdnanycast.Domain objects
   * Domains associated to this anycast
   */
  get(path: '/cdn/dedicated/{serviceName}/domains'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Domain on CDN
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}'): (params: {domain: string, serviceName: string}) => Promise<cdnanycast.Domain>;
  /**
   * List the cdnanycast.Backend objects
   * Backend associated to the domain
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends'): (params: {domain: string, serviceName: string}) => Promise<string[]>;
  /**
   * Backend for a domain
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}'): (params: {domain: string, ip: string, serviceName: string}) => Promise<cdnanycast.Backend>;
  /**
   * List the cdnanycast.CacheRule objects
   * Cache rules associated to the domain
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules'): (params: {domain: string, serviceName: string, fileMatch?: string}) => Promise<number[]>;
  /**
   * CacheRules for a domain
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}'): (params: {cacheRuleId: number, domain: string, serviceName: string}) => Promise<cdnanycast.CacheRule>;
  /**
   * List the cdnanycast.Task objects
   * Task associated to the cache rule
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks'): (params: {cacheRuleId: number, domain: string, serviceName: string}) => Promise<number[]>;
  /**
   * Task on a CDN
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}'): (params: {cacheRuleId: number, domain: string, serviceName: string, taskId: number}) => Promise<cdnanycast.Task>;
  /**
   * statistics operations
   * Return stats about a domain
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/statistics'): (params: {domain: string, serviceName: string, period: cdnanycast.StatsPeriodEnum, type: cdnanycast.StatsTypeEnum, value: cdnanycast.StatsValueEnum}) => Promise<cdnanycast.StatsDataType[]>;
  /**
   * List the cdnanycast.Task objects
   * Task associated to the domain
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/tasks'): (params: {domain: string, serviceName: string}) => Promise<number[]>;
  /**
   * Task on a CDN
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}'): (params: {domain: string, serviceName: string, taskId: number}) => Promise<cdnanycast.Task>;
  /**
   * quota operations
   * Return quota history
   */
  get(path: '/cdn/dedicated/{serviceName}/quota'): (params: {serviceName: string, period: cdnanycast.StatsPeriodEnum}) => Promise<cdnanycast.StatsDataType[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * CDN Ssl
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}/ssl'): (params: {serviceName: string}) => Promise<cdnanycast.Ssl>;
  /**
   * List the cdnanycast.Task objects
   * Task associated to the ssl
   */
  get(path: '/cdn/dedicated/{serviceName}/ssl/tasks'): (params: {serviceName: string, function_?: cdnanycast.TaskFunctionEnum, status?: cdnanycast.TaskStateEnum}) => Promise<number[]>;
  /**
   * Task on a CDN
   * Get this object properties
   */
  get(path: '/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<cdnanycast.Task>;
  /**
   * List the cdnanycast.Pop objects
   * List of CDN Pops
   */
  get(path: '/cdn/dedicated/pops'): () => Promise<string[]>;
  /**
   * CDN Pop
   * Get this object properties
   */
  get(path: '/cdn/dedicated/pops/{name}'): (params: {name: string}) => Promise<cdnanycast.Pop>;
  /**
   * Domain on CDN
   * Alter this object properties
   */
  put(path: '/cdn/dedicated/{serviceName}/domains/{domain}'): (params: {domain: string, serviceName: string, cacheRuleUse?: number, cname?: string, status?: cdnanycast.DomainStatusEnum, type?: cdnanycast.DomainTypeEnum}) => Promise<void>;
  /**
   * CacheRules for a domain
   * Alter this object properties
   */
  put(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}'): (params: {cacheRuleId: number, domain: string, serviceName: string, cacheType?: cdnanycast.CacheRuleCacheTypeEnum, fileMatch?: string, fileType?: cdnanycast.CacheRuleFileTypeEnum, status?: cdnanycast.CacheRuleStatusEnum, ttl?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/cdn/dedicated/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/cdn/dedicated/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * List the cdnanycast.Domain objects
   * Add a domain on CDN
   */
  post(path: '/cdn/dedicated/{serviceName}/domains'): (params: {serviceName: string, domain: string}) => Promise<cdnanycast.Domain>;
  /**
   * List the cdnanycast.Backend objects
   * Add a backend IP
   */
  post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends'): (params: {domain: string, serviceName: string, ip: string}) => Promise<cdnanycast.Backend>;
  /**
   * List the cdnanycast.CacheRule objects
   * Add a cache rule to a domain
   */
  post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules'): (params: {domain: string, serviceName: string, cacheType: cdnanycast.CacheRuleCacheTypeEnum, fileMatch: string, fileType: cdnanycast.CacheRuleFileTypeEnum, ttl: number}) => Promise<cdnanycast.CacheRule>;
  /**
   * flush operations
   * Flush the cache
   */
  post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush'): (params: {cacheRuleId: number, domain: string, serviceName: string}) => Promise<cdnanycast.Task>;
  /**
   * flush operations
   * Flush all cache
   */
  post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/flush'): (params: {domain: string, serviceName: string}) => Promise<cdnanycast.Task>;
  /**
   * logs operations
   * Generate URL to real time logs
   */
  post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/logs'): (params: {domain: string, serviceName: string}) => Promise<cdnanycast.LogsURL>;
  /**
   * logs operations
   * Generate URL to real time logs
   */
  post(path: '/cdn/dedicated/{serviceName}/logs'): (params: {serviceName: string}) => Promise<cdnanycast.LogsURL>;
  /**
   * CDN Ssl
   * Add a SSL on CDN or Generate a Lets Encrypt certificate
   */
  post(path: '/cdn/dedicated/{serviceName}/ssl'): (params: {serviceName: string, certificate?: string, chain?: string, key?: string, name: string}) => Promise<cdnanycast.Ssl>;
  /**
   * update operations
   * Update an existing SSL with a custom certificate
   */
  post(path: '/cdn/dedicated/{serviceName}/ssl/update'): (params: {serviceName: string, certificate: string, chain?: string, key: string}) => Promise<cdnanycast.Task>;
  /**
   * Domain on CDN
   * Remove a domain from the CDN
   */
  delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}'): (params: {domain: string, serviceName: string}) => Promise<cdnanycast.Task>;
  /**
   * Backend for a domain
   * Remove a backend IP
   */
  delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}'): (params: {domain: string, ip: string, serviceName: string}) => Promise<string>;
  /**
   * CacheRules for a domain
   * Remove cache rule
   */
  delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}'): (params: {cacheRuleId: number, domain: string, serviceName: string}) => Promise<cdnanycast.Task>;
  /**
   * CDN Ssl
   * Remove SSL of the CDN
   */
  delete(path: '/cdn/dedicated/{serviceName}/ssl'): (params: {serviceName: string}) => Promise<cdnanycast.Task>;
}
/**
 * classic Model
 */
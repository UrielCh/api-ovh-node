import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace cdnanycast {
    //cdnanycast.Anycast
    // fullName: cdnanycast.Anycast.Anycast
    export interface Anycast {
        anycast?: string;
        backendLimit?: number;
        backendUse?: number;
        cacheRuleLimitPerDomain?: number;
        lastQuotaOrder?: string;
        logUrl?: string;
        offer?: string;
        quota?: number;
        service?: string;
    }
    //cdnanycast.Backend
    // fullName: cdnanycast.Backend.Backend
    export interface Backend {
        ip?: string;
    }
    //cdnanycast.CacheRule
    // fullName: cdnanycast.CacheRule.CacheRule
    export interface CacheRule {
        cacheRuleId?: number;
        cacheType?: OVH.cdnanycast.CacheRuleCacheTypeEnum;
        domain?: string;
        fileMatch?: string;
        fileType?: OVH.cdnanycast.CacheRuleFileTypeEnum;
        status?: OVH.cdnanycast.CacheRuleStatusEnum;
        ttl?: number;
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
        cacheRuleUse?: number;
        cname?: string;
        domain?: string;
        status?: OVH.cdnanycast.DomainStatusEnum;
        type?: OVH.cdnanycast.DomainTypeEnum;
    }
    //cdnanycast.DomainStatusEnum
    export type DomainStatusEnum = "error" | "off" | "on" | "removing"
    //cdnanycast.DomainTypeEnum
    export type DomainTypeEnum = "plain" | "ssl"
    //cdnanycast.LogsURL
    // fullName: cdnanycast.LogsURL.LogsURL
    export interface LogsURL {
        expirationDate?: string;
        url?: string;
    }
    //cdnanycast.Pop
    // fullName: cdnanycast.Pop.Pop
    export interface Pop {
        city?: string;
        comment?: string;
        name?: string;
        status?: OVH.cdnanycast.PopStatusEnum;
    }
    //cdnanycast.PopStatusEnum
    export type PopStatusEnum = "down" | "ok" | "rerouted" | "unknown"
    //cdnanycast.Ssl
    // fullName: cdnanycast.Ssl.Ssl
    export interface Ssl {
        certificateProvider?: string;
        certificateValidFrom?: string;
        certificateValidTo?: string;
        cn?: string;
        name?: string;
        status?: OVH.cdnanycast.SslStateEnum;
    }
    //cdnanycast.SslStateEnum
    export type SslStateEnum = "checking" | "creating" | "error" | "off" | "on" | "removing" | "updating" | "uploading"
    //cdnanycast.StatsDataType
    // fullName: cdnanycast.StatsDataType.StatsDataType
    export interface StatsDataType {
        date?: string;
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
        function?: OVH.cdnanycast.TaskFunctionEnum;
        status?: OVH.cdnanycast.TaskStateEnum;
        taskId?: number;
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
}
export namespace services {
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
// path /cdn
export interface Cdn {
    dedicated:  {
        // GET /cdn/dedicated
        $get(): Promise<string[]>;
        pops:  {
            // GET /cdn/dedicated/pops
            $get(): Promise<string[]>;
            [keys: string]: {
                // GET /cdn/dedicated/pops/{name}
                $get(): Promise<cdnanycast.Pop>;
            } | any
        }
        [keys: string]: {
            // GET /cdn/dedicated/{serviceName}
            $get(): Promise<cdnanycast.Anycast>;
            changeContact:  {
                // POST /cdn/dedicated/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            domains:  {
                // GET /cdn/dedicated/{serviceName}/domains
                $get(): Promise<string[]>;
                // POST /cdn/dedicated/{serviceName}/domains
                $post(body?: {domain: string}): Promise<cdnanycast.Domain>;
                [keys: string]: {
                    // DELETE /cdn/dedicated/{serviceName}/domains/{domain}
                    $delete(): Promise<cdnanycast.Task>;
                    // GET /cdn/dedicated/{serviceName}/domains/{domain}
                    $get(): Promise<cdnanycast.Domain>;
                    // PUT /cdn/dedicated/{serviceName}/domains/{domain}
                    $put(body?: {body: cdnanycast.Domain}): Promise<void>;
                    backends:  {
                        // GET /cdn/dedicated/{serviceName}/domains/{domain}/backends
                        $get(): Promise<string[]>;
                        // POST /cdn/dedicated/{serviceName}/domains/{domain}/backends
                        $post(body?: {ip: string}): Promise<cdnanycast.Backend>;
                        [keys: string]: {
                            // DELETE /cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}
                            $delete(): Promise<string>;
                            // GET /cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}
                            $get(): Promise<cdnanycast.Backend>;
                        } | any
                    }
                    cacheRules:  {
                        // GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
                        $get(param?: {fileMatch?: string}): Promise<number[]>;
                        // POST /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
                        $post(body?: {cacheType: cdnanycast.CacheRuleCacheTypeEnum, fileMatch: string, fileType: cdnanycast.CacheRuleFileTypeEnum, ttl: number}): Promise<cdnanycast.CacheRule>;
                        [keys: string]: {
                            // DELETE /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                            $delete(): Promise<cdnanycast.Task>;
                            // GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                            $get(): Promise<cdnanycast.CacheRule>;
                            // PUT /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
                            $put(body?: {body: cdnanycast.CacheRule}): Promise<void>;
                            flush:  {
                                // POST /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush
                                $post(): Promise<cdnanycast.Task>;
                            }
                            tasks:  {
                                // GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks
                                $get(): Promise<number[]>;
                                [keys: string]: {
                                    // GET /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}
                                    $get(): Promise<cdnanycast.Task>;
                                } | any
                            }
                        } | any
                    }
                    flush:  {
                        // POST /cdn/dedicated/{serviceName}/domains/{domain}/flush
                        $post(): Promise<cdnanycast.Task>;
                    }
                    logs:  {
                        // POST /cdn/dedicated/{serviceName}/domains/{domain}/logs
                        $post(): Promise<cdnanycast.LogsURL>;
                    }
                    statistics:  {
                        // GET /cdn/dedicated/{serviceName}/domains/{domain}/statistics
                        $get(param?: {period: cdnanycast.StatsPeriodEnum, type: cdnanycast.StatsTypeEnum, value: cdnanycast.StatsValueEnum}): Promise<cdnanycast.StatsDataType[]>;
                    }
                    tasks:  {
                        // GET /cdn/dedicated/{serviceName}/domains/{domain}/tasks
                        $get(): Promise<number[]>;
                        [keys: string]: {
                            // GET /cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}
                            $get(): Promise<cdnanycast.Task>;
                        } | any
                    }
                } | any
            }
            logs:  {
                // POST /cdn/dedicated/{serviceName}/logs
                $post(): Promise<cdnanycast.LogsURL>;
            }
            quota:  {
                // GET /cdn/dedicated/{serviceName}/quota
                $get(param?: {period: cdnanycast.StatsPeriodEnum}): Promise<cdnanycast.StatsDataType[]>;
            }
            serviceInfos:  {
                // GET /cdn/dedicated/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cdn/dedicated/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            ssl:  {
                // DELETE /cdn/dedicated/{serviceName}/ssl
                $delete(): Promise<cdnanycast.Task>;
                // GET /cdn/dedicated/{serviceName}/ssl
                $get(): Promise<cdnanycast.Ssl>;
                // POST /cdn/dedicated/{serviceName}/ssl
                $post(body?: {certificate?: string, chain?: string, key?: string, name: string}): Promise<cdnanycast.Ssl>;
                tasks:  {
                    // GET /cdn/dedicated/{serviceName}/ssl/tasks
                    $get(param?: {function_?: cdnanycast.TaskFunctionEnum, status?: cdnanycast.TaskStateEnum}): Promise<number[]>;
                    [keys: string]: {
                        // GET /cdn/dedicated/{serviceName}/ssl/tasks/{taskId}
                        $get(): Promise<cdnanycast.Task>;
                    } | any
                }
                update:  {
                    // POST /cdn/dedicated/{serviceName}/ssl/update
                    $post(body?: {certificate: string, chain?: string, key: string}): Promise<cdnanycast.Task>;
                }
            }
        } | any
    }
}
// Api
type PathsCdnDedicatedGET = '/cdn/dedicated' |
  '/cdn/dedicated/pops' |
  '/cdn/dedicated/pops/{name}' |
  '/cdn/dedicated/{serviceName}' |
  '/cdn/dedicated/{serviceName}/domains' |
  '/cdn/dedicated/{serviceName}/domains/{domain}' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/backends' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/statistics' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/tasks' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}' |
  '/cdn/dedicated/{serviceName}/quota' |
  '/cdn/dedicated/{serviceName}/serviceInfos' |
  '/cdn/dedicated/{serviceName}/ssl' |
  '/cdn/dedicated/{serviceName}/ssl/tasks' |
  '/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}';

type PathsCdnDedicatedPUT = '/cdn/dedicated/{serviceName}/domains/{domain}' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' |
  '/cdn/dedicated/{serviceName}/serviceInfos';

type PathsCdnDedicatedPOST = '/cdn/dedicated/{serviceName}/changeContact' |
  '/cdn/dedicated/{serviceName}/domains' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/backends' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/flush' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/logs' |
  '/cdn/dedicated/{serviceName}/logs' |
  '/cdn/dedicated/{serviceName}/ssl' |
  '/cdn/dedicated/{serviceName}/ssl/update';

type PathsCdnDedicatedDELETE = '/cdn/dedicated/{serviceName}/domains/{domain}' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}' |
  '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' |
  '/cdn/dedicated/{serviceName}/ssl';

export class ApiCdnDedicated extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the CDNANYCAST service
   * List available services
   */
  public get(path: '/cdn/dedicated'): Promise<string[]>;
  /**
   * Anycast IP of a CDN customer
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}', params: {serviceName: string}): Promise<cdnanycast.Anycast>;
  /**
   * List the cdnanycast.Domain objects
   * Domains associated to this anycast
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains', params: {serviceName: string}): Promise<string[]>;
  /**
   * Domain on CDN
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}', params: {domain: string, serviceName: string}): Promise<cdnanycast.Domain>;
  /**
   * List the cdnanycast.Backend objects
   * Backend associated to the domain
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends', params: {domain: string, serviceName: string}): Promise<string[]>;
  /**
   * Backend for a domain
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}', params: {domain: string, ip: string, serviceName: string}): Promise<cdnanycast.Backend>;
  /**
   * List the cdnanycast.CacheRule objects
   * Cache rules associated to the domain
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules', params: {domain: string, serviceName: string, fileMatch?: string}): Promise<number[]>;
  /**
   * CacheRules for a domain
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', params: {cacheRuleId: number, domain: string, serviceName: string}): Promise<cdnanycast.CacheRule>;
  /**
   * List the cdnanycast.Task objects
   * Task associated to the cache rule
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks', params: {cacheRuleId: number, domain: string, serviceName: string}): Promise<number[]>;
  /**
   * Task on a CDN
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}', params: {cacheRuleId: number, domain: string, serviceName: string, taskId: number}): Promise<cdnanycast.Task>;
  /**
   * statistics operations
   * Return stats about a domain
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/statistics', params: {domain: string, serviceName: string, period: OVH.cdnanycast.StatsPeriodEnum, type: OVH.cdnanycast.StatsTypeEnum, value: OVH.cdnanycast.StatsValueEnum}): Promise<cdnanycast.StatsDataType[]>;
  /**
   * List the cdnanycast.Task objects
   * Task associated to the domain
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/tasks', params: {domain: string, serviceName: string}): Promise<number[]>;
  /**
   * Task on a CDN
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}', params: {domain: string, serviceName: string, taskId: number}): Promise<cdnanycast.Task>;
  /**
   * quota operations
   * Return quota history
   */
  public get(path: '/cdn/dedicated/{serviceName}/quota', params: {serviceName: string, period: OVH.cdnanycast.StatsPeriodEnum}): Promise<cdnanycast.StatsDataType[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * CDN Ssl
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}/ssl', params: {serviceName: string}): Promise<cdnanycast.Ssl>;
  /**
   * List the cdnanycast.Task objects
   * Task associated to the ssl
   */
  public get(path: '/cdn/dedicated/{serviceName}/ssl/tasks', params: {serviceName: string, function_?: OVH.cdnanycast.TaskFunctionEnum, status?: OVH.cdnanycast.TaskStateEnum}): Promise<number[]>;
  /**
   * Task on a CDN
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<cdnanycast.Task>;
  /**
   * List the cdnanycast.Pop objects
   * List of CDN Pops
   */
  public get(path: '/cdn/dedicated/pops'): Promise<string[]>;
  /**
   * CDN Pop
   * Get this object properties
   */
  public get(path: '/cdn/dedicated/pops/{name}', params: {name: string}): Promise<cdnanycast.Pop>;
  public get(path: PathsCdnDedicatedGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Domain on CDN
   * Alter this object properties
   */
  public put(path: '/cdn/dedicated/{serviceName}/domains/{domain}', params: {domain: string, serviceName: string, cacheRuleUse?: number, cname?: string, status?: OVH.cdnanycast.DomainStatusEnum, type?: OVH.cdnanycast.DomainTypeEnum}): Promise<void>;
  /**
   * CacheRules for a domain
   * Alter this object properties
   */
  public put(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', params: {cacheRuleId: number, domain: string, serviceName: string, cacheType?: OVH.cdnanycast.CacheRuleCacheTypeEnum, fileMatch?: string, fileType?: OVH.cdnanycast.CacheRuleFileTypeEnum, status?: OVH.cdnanycast.CacheRuleStatusEnum, ttl?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/cdn/dedicated/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsCdnDedicatedPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/cdn/dedicated/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * List the cdnanycast.Domain objects
   * Add a domain on CDN
   */
  public post(path: '/cdn/dedicated/{serviceName}/domains', params: {serviceName: string, domain: string}): Promise<cdnanycast.Domain>;
  /**
   * List the cdnanycast.Backend objects
   * Add a backend IP
   */
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends', params: {domain: string, serviceName: string, ip: string}): Promise<cdnanycast.Backend>;
  /**
   * List the cdnanycast.CacheRule objects
   * Add a cache rule to a domain
   */
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules', params: {domain: string, serviceName: string, cacheType: OVH.cdnanycast.CacheRuleCacheTypeEnum, fileMatch: string, fileType: OVH.cdnanycast.CacheRuleFileTypeEnum, ttl: number}): Promise<cdnanycast.CacheRule>;
  /**
   * flush operations
   * Flush the cache
   */
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush', params: {cacheRuleId: number, domain: string, serviceName: string}): Promise<cdnanycast.Task>;
  /**
   * flush operations
   * Flush all cache
   */
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/flush', params: {domain: string, serviceName: string}): Promise<cdnanycast.Task>;
  /**
   * logs operations
   * Generate URL to real time logs
   */
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/logs', params: {domain: string, serviceName: string}): Promise<cdnanycast.LogsURL>;
  /**
   * logs operations
   * Generate URL to real time logs
   */
  public post(path: '/cdn/dedicated/{serviceName}/logs', params: {serviceName: string}): Promise<cdnanycast.LogsURL>;
  /**
   * CDN Ssl
   * Add a SSL on CDN or Generate a Lets Encrypt certificate
   */
  public post(path: '/cdn/dedicated/{serviceName}/ssl', params: {serviceName: string, certificate?: string, chain?: string, key?: string, name: string}): Promise<cdnanycast.Ssl>;
  /**
   * update operations
   * Update an existing SSL with a custom certificate
   */
  public post(path: '/cdn/dedicated/{serviceName}/ssl/update', params: {serviceName: string, certificate: string, chain?: string, key: string}): Promise<cdnanycast.Task>;
  public post(path: PathsCdnDedicatedPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Domain on CDN
   * Remove a domain from the CDN
   */
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}', params: {domain: string, serviceName: string}): Promise<cdnanycast.Task>;
  /**
   * Backend for a domain
   * Remove a backend IP
   */
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}', params: {domain: string, ip: string, serviceName: string}): Promise<string>;
  /**
   * CacheRules for a domain
   * Remove cache rule
   */
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', params: {cacheRuleId: number, domain: string, serviceName: string}): Promise<cdnanycast.Task>;
  /**
   * CDN Ssl
   * Remove SSL of the CDN
   */
  public delete(path: '/cdn/dedicated/{serviceName}/ssl', params: {serviceName: string}): Promise<cdnanycast.Task>;
  public delete(path: PathsCdnDedicatedDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace cdn {
    export namespace website {
        //cdn.website.Backend
        // fullName: cdn.website.Backend.Backend
        export interface Backend {
            ipv4?: string;
            status?: OVH.cdn.website.BackendStatusEnum;
        }
        //cdn.website.BackendStatusEnum
        export type BackendStatusEnum = "creating" | "error" | "on" | "removing"
        //cdn.website.Domain
        // fullName: cdn.website.Domain.Domain
        export interface Domain {
            domain?: string;
            status?: OVH.cdn.website.DomainStatusEnum;
        }
        //cdn.website.DomainStatusEnum
        export type DomainStatusEnum = "error" | "on" | "removing"
        //cdn.website.DomainZoneStatusEnum
        export type DomainZoneStatusEnum = "error" | "on" | "removing"
        //cdn.website.StatsDataType
        // fullName: cdn.website.StatsDataType.StatsDataType
        export interface StatsDataType {
            date?: string;
            value?: number;
        }
        //cdn.website.StatsPeriodEnum
        export type StatsPeriodEnum = "day" | "month" | "week"
        //cdn.website.StatsTypeEnum
        export type StatsTypeEnum = "backend" | "cdn"
        //cdn.website.StatsValueEnum
        export type StatsValueEnum = "bandwidth" | "request"
        //cdn.website.Task
        // fullName: cdn.website.Task.Task
        export interface Task {
            comment?: string;
            function?: OVH.cdn.website.TaskFunctionEnum;
            status?: OVH.cdn.website.TaskStateEnum;
            taskId?: number;
        }
        //cdn.website.TaskFunctionEnum
        export type TaskFunctionEnum = "flushAll" | "installBackend" | "removeBackend" | "removeDomain" | "removeZone"
        //cdn.website.TaskStateEnum
        export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        //cdn.website.Website
        // fullName: cdn.website.Website.Website
        export interface Website {
            anycast?: string;
            offer?: string;
            service?: string;
        }
        //cdn.website.Zone
        // fullName: cdn.website.Zone.Zone
        export interface Zone {
            status?: OVH.cdn.website.DomainZoneStatusEnum;
            zone?: string;
        }
    }
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
    website:  {
        // GET /cdn/website
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /cdn/website/{serviceName}
            $get(): Promise<cdn.website.Website>;
            zone:  {
                // GET /cdn/website/{serviceName}/zone
                $get(): Promise<cdn.website.Zone>;
                // POST /cdn/website/{serviceName}/zone
                $post(body?: {zone: string}): Promise<cdn.website.Zone>;
                // DELETE /cdn/website/{serviceName}/zone
                $delete(): Promise<cdn.website.Task>;
                backends:  {
                    // GET /cdn/website/{serviceName}/zone/backends
                    $get(): Promise<string[]>;
                    // POST /cdn/website/{serviceName}/zone/backends
                    $post(body?: {ipv4: string}): Promise<cdn.website.Task>;
                    [keys: string]: {
                        // GET /cdn/website/{serviceName}/zone/backends/{ipv4}
                        $get(): Promise<cdn.website.Backend>;
                        // DELETE /cdn/website/{serviceName}/zone/backends/{ipv4}
                        $delete(): Promise<cdn.website.Task>;
                        tasks:  {
                            // GET /cdn/website/{serviceName}/zone/backends/{ipv4}/tasks
                            $get(): Promise<number[]>;
                            [keys: string]: {
                                // GET /cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}
                                $get(): Promise<cdn.website.Task>;
                            } | any
                        }
                    } | any
                }
                domains:  {
                    // GET /cdn/website/{serviceName}/zone/domains
                    $get(): Promise<string[]>;
                    // POST /cdn/website/{serviceName}/zone/domains
                    $post(body?: {domain: string}): Promise<cdn.website.Domain>;
                    [keys: string]: {
                        // GET /cdn/website/{serviceName}/zone/domains/{domain}
                        $get(): Promise<cdn.website.Domain>;
                        // DELETE /cdn/website/{serviceName}/zone/domains/{domain}
                        $delete(): Promise<cdn.website.Task>;
                        statistics:  {
                            // GET /cdn/website/{serviceName}/zone/domains/{domain}/statistics
                            $get(param?: {value: cdn.website.StatsValueEnum, period: cdn.website.StatsPeriodEnum, type: cdn.website.StatsTypeEnum}): Promise<cdn.website.StatsDataType[]>;
                        }
                        flush:  {
                            // POST /cdn/website/{serviceName}/zone/domains/{domain}/flush
                            $post(): Promise<cdn.website.Task>;
                        }
                        tasks:  {
                            // GET /cdn/website/{serviceName}/zone/domains/{domain}/tasks
                            $get(): Promise<number[]>;
                            [keys: string]: {
                                // GET /cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}
                                $get(): Promise<cdn.website.Task>;
                            } | any
                        }
                    } | any
                }
                tasks:  {
                    // GET /cdn/website/{serviceName}/zone/tasks
                    $get(): Promise<number[]>;
                    [keys: string]: {
                        // GET /cdn/website/{serviceName}/zone/tasks/{taskId}
                        $get(): Promise<cdn.website.Task>;
                    } | any
                }
            }
            serviceInfos:  {
                // GET /cdn/website/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cdn/website/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
}
// Api
type PathsCdnWebsiteGET = '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks' |
  '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}' |
  '/cdn/website/{serviceName}/zone/backends/{ipv4}' |
  '/cdn/website/{serviceName}/zone/backends' |
  '/cdn/website/{serviceName}/zone/domains' |
  '/cdn/website/{serviceName}/zone/domains/{domain}/statistics' |
  '/cdn/website/{serviceName}/zone/domains/{domain}' |
  '/cdn/website/{serviceName}/zone/domains/{domain}/tasks' |
  '/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}' |
  '/cdn/website/{serviceName}/zone/tasks/{taskId}' |
  '/cdn/website/{serviceName}/zone/tasks' |
  '/cdn/website/{serviceName}/zone' |
  '/cdn/website/{serviceName}' |
  '/cdn/website/{serviceName}/serviceInfos' |
  '/cdn/website';

type PathsCdnWebsitePUT = '/cdn/website/{serviceName}/serviceInfos';

type PathsCdnWebsitePOST = '/cdn/website/{serviceName}/zone/backends' |
  '/cdn/website/{serviceName}/zone/domains' |
  '/cdn/website/{serviceName}/zone/domains/{domain}/flush' |
  '/cdn/website/{serviceName}/zone';

type PathsCdnWebsiteDELETE = '/cdn/website/{serviceName}/zone/backends/{ipv4}' |
  '/cdn/website/{serviceName}/zone/domains/{domain}' |
  '/cdn/website/{serviceName}/zone';

export class ApiCdnWebsite extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the CDNWEBSITE service
   * List available services
   */
  public get(path: '/cdn/website'): Promise<string[]>;
  /**
   * Website CDN
   * Get this object properties
   */
  public get(path: '/cdn/website/{serviceName}', params: {serviceName: string}): Promise<cdn.website.Website>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/cdn/website/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Zone on CDN
   * Get this object properties
   */
  public get(path: '/cdn/website/{serviceName}/zone', params: {serviceName: string}): Promise<cdn.website.Zone>;
  /**
   * List the cdn.website.Backend objects
   * Backend associated to this zone
   */
  public get(path: '/cdn/website/{serviceName}/zone/backends', params: {serviceName: string}): Promise<string[]>;
  /**
   * Backend on zone
   * Get this object properties
   */
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}', params: {serviceName: string, ipv4: string}): Promise<cdn.website.Backend>;
  /**
   * List the cdn.website.Task objects
   * Task associated to this backend
   */
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks', params: {serviceName: string, ipv4: string}): Promise<number[]>;
  /**
   * Task on CDN
   * Get this object properties
   */
  public get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}', params: {serviceName: string, ipv4: string, taskId: string}): Promise<cdn.website.Task>;
  /**
   * List the cdn.website.Domain objects
   * Domain associated to this zone
   */
  public get(path: '/cdn/website/{serviceName}/zone/domains', params: {serviceName: string}): Promise<string[]>;
  /**
   * Domain on CDN
   * Get this object properties
   */
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}', params: {serviceName: string, domain: string}): Promise<cdn.website.Domain>;
  /**
   * statistics operations
   * Get statistics about request on CDN, bandwidth value in Bytes
   */
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/statistics', params: {serviceName: string, domain: string, period: OVH.cdn.website.StatsPeriodEnum, type: OVH.cdn.website.StatsTypeEnum, value: OVH.cdn.website.StatsValueEnum}): Promise<cdn.website.StatsDataType[]>;
  /**
   * List the cdn.website.Task objects
   * Task associated to this domain
   */
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/tasks', params: {serviceName: string, domain: string}): Promise<number[]>;
  /**
   * Task on CDN
   * Get this object properties
   */
  public get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}', params: {serviceName: string, domain: string, taskId: string}): Promise<cdn.website.Task>;
  /**
   * List the cdn.website.Task objects
   * Task associated to this zone
   */
  public get(path: '/cdn/website/{serviceName}/zone/tasks', params: {serviceName: string}): Promise<number[]>;
  /**
   * Task on CDN
   * Get this object properties
   */
  public get(path: '/cdn/website/{serviceName}/zone/tasks/{taskId}', params: {serviceName: string, taskId: string}): Promise<cdn.website.Task>;
  public get(path: PathsCdnWebsiteGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/cdn/website/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsCdnWebsitePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Zone on CDN
   * Configure a zone on CDN
   */
  public post(path: '/cdn/website/{serviceName}/zone', params: {serviceName: string, zone: string}): Promise<cdn.website.Zone>;
  /**
   * List the cdn.website.Backend objects
   * Configure a backend on the zone
   */
  public post(path: '/cdn/website/{serviceName}/zone/backends', params: {serviceName: string, ipv4: string}): Promise<cdn.website.Task>;
  /**
   * List the cdn.website.Domain objects
   * Configure a domain on CDN
   */
  public post(path: '/cdn/website/{serviceName}/zone/domains', params: {serviceName: string, domain: string}): Promise<cdn.website.Domain>;
  /**
   * flush operations
   * Flush all cache
   */
  public post(path: '/cdn/website/{serviceName}/zone/domains/{domain}/flush', params: {serviceName: string, domain: string}): Promise<cdn.website.Task>;
  public post(path: PathsCdnWebsitePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Zone on CDN
   * Remove a zone from the CDN
   */
  public delete(path: '/cdn/website/{serviceName}/zone', params: {serviceName: string}): Promise<cdn.website.Task>;
  /**
   * Backend on zone
   * Remove a backend from the zone
   */
  public delete(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}', params: {serviceName: string, ipv4: string}): Promise<cdn.website.Task>;
  /**
   * Domain on CDN
   * Remove a domain from the CDN
   */
  public delete(path: '/cdn/website/{serviceName}/zone/domains/{domain}', params: {serviceName: string, domain: string}): Promise<cdn.website.Task>;
  public delete(path: PathsCdnWebsiteDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
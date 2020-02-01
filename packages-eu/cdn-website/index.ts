import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cdn/website Models
 * Source: https://eu.api.ovh.com/1.0/cdn/website.json
 */
export namespace cdn {
    export namespace website {
        // interface fullName: cdn.website.Backend.Backend
        export interface Backend {
            ipv4: string;
            status: cdn.website.BackendStatusEnum;
        }
        // type fullname: cdn.website.BackendStatusEnum
        export type BackendStatusEnum = "creating" | "error" | "on" | "removing"
        // interface fullName: cdn.website.Domain.Domain
        export interface Domain {
            domain: string;
            status: cdn.website.DomainStatusEnum;
        }
        // type fullname: cdn.website.DomainStatusEnum
        export type DomainStatusEnum = "error" | "on" | "removing"
        // type fullname: cdn.website.DomainZoneStatusEnum
        export type DomainZoneStatusEnum = "error" | "on" | "removing"
        // interface fullName: cdn.website.StatsDataType.StatsDataType
        export interface StatsDataType {
            date: string;
            value: number;
        }
        // type fullname: cdn.website.StatsPeriodEnum
        export type StatsPeriodEnum = "day" | "month" | "week"
        // type fullname: cdn.website.StatsTypeEnum
        export type StatsTypeEnum = "backend" | "cdn"
        // type fullname: cdn.website.StatsValueEnum
        export type StatsValueEnum = "bandwidth" | "request"
        // interface fullName: cdn.website.Task.Task
        export interface Task {
            comment?: string;
            function: cdn.website.TaskFunctionEnum;
            status: cdn.website.TaskStateEnum;
            taskId: number;
        }
        // type fullname: cdn.website.TaskFunctionEnum
        export type TaskFunctionEnum = "flushAll" | "installBackend" | "removeBackend" | "removeDomain" | "removeZone"
        // type fullname: cdn.website.TaskStateEnum
        export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        // interface fullName: cdn.website.Website.Website
        export interface Website {
            anycast: string;
            offer: string;
            service: string;
        }
        // interface fullName: cdn.website.Zone.Zone
        export interface Zone {
            status: cdn.website.DomainZoneStatusEnum;
            zone: string;
        }
    }
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
 * END API /cdn/website Models
 */
export function proxyCdnWebsite(ovhEngine: OvhRequestable): Cdn {
    return buildOvhProxy(ovhEngine, '/cdn');
}
export default proxyCdnWebsite;
/**
 * Api Proxy model
 */// Apis harmony
// path /cdn
export interface Cdn {
    website: {
        // GET /cdn/website
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /cdn/website/{serviceName}
            $get(): Promise<cdn.website.Website>;
            serviceInfos: {
                // GET /cdn/website/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cdn/website/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            zone: {
                // DELETE /cdn/website/{serviceName}/zone
                $delete(): Promise<cdn.website.Task>;
                // GET /cdn/website/{serviceName}/zone
                $get(): Promise<cdn.website.Zone>;
                // POST /cdn/website/{serviceName}/zone
                $post(params: {zone: string}): Promise<cdn.website.Zone>;
                backends: {
                    // GET /cdn/website/{serviceName}/zone/backends
                    $get(): Promise<string[]>;
                    // POST /cdn/website/{serviceName}/zone/backends
                    $post(params: {ipv4: string}): Promise<cdn.website.Task>;
                    $(ipv4: string): {
                        // DELETE /cdn/website/{serviceName}/zone/backends/{ipv4}
                        $delete(): Promise<cdn.website.Task>;
                        // GET /cdn/website/{serviceName}/zone/backends/{ipv4}
                        $get(): Promise<cdn.website.Backend>;
                        tasks: {
                            // GET /cdn/website/{serviceName}/zone/backends/{ipv4}/tasks
                            $get(): Promise<number[]>;
                            $(taskId: number): {
                                // GET /cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}
                                $get(): Promise<cdn.website.Task>;
                            };
                        }
                    };
                }
                domains: {
                    // GET /cdn/website/{serviceName}/zone/domains
                    $get(): Promise<string[]>;
                    // POST /cdn/website/{serviceName}/zone/domains
                    $post(params: {domain: string}): Promise<cdn.website.Domain>;
                    $(domain: string): {
                        // DELETE /cdn/website/{serviceName}/zone/domains/{domain}
                        $delete(): Promise<cdn.website.Task>;
                        // GET /cdn/website/{serviceName}/zone/domains/{domain}
                        $get(): Promise<cdn.website.Domain>;
                        flush: {
                            // POST /cdn/website/{serviceName}/zone/domains/{domain}/flush
                            $post(): Promise<cdn.website.Task>;
                        }
                        statistics: {
                            // GET /cdn/website/{serviceName}/zone/domains/{domain}/statistics
                            $get(params: {period: cdn.website.StatsPeriodEnum, type: cdn.website.StatsTypeEnum, value: cdn.website.StatsValueEnum}): Promise<cdn.website.StatsDataType[]>;
                        }
                        tasks: {
                            // GET /cdn/website/{serviceName}/zone/domains/{domain}/tasks
                            $get(): Promise<number[]>;
                            $(taskId: number): {
                                // GET /cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}
                                $get(): Promise<cdn.website.Task>;
                            };
                        }
                    };
                }
                tasks: {
                    // GET /cdn/website/{serviceName}/zone/tasks
                    $get(): Promise<number[]>;
                    $(taskId: number): {
                        // GET /cdn/website/{serviceName}/zone/tasks/{taskId}
                        $get(): Promise<cdn.website.Task>;
                    };
                }
            }
        };
    }
}

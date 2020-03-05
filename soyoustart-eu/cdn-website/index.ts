import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /cdn/website Models
 * Source: https://eu.api.soyoustart.com/1.0/cdn/website.json
 */
export namespace cdn {
    export namespace website {
        /**
         * Backend on zone
         * interface fullName: cdn.website.Backend.Backend
         */
        export interface Backend {
            ipv4: string;
            status: cdn.website.BackendStatusEnum;
        }
        /**
         * All states a status can be in
         * type fullname: cdn.website.BackendStatusEnum
         */
        export type BackendStatusEnum = "creating" | "error" | "on" | "removing"
        /**
         * Domain on CDN
         * interface fullName: cdn.website.Domain.Domain
         */
        export interface Domain {
            domain: string;
            status: cdn.website.DomainStatusEnum;
        }
        /**
         * All states a status can be in
         * type fullname: cdn.website.DomainStatusEnum
         */
        export type DomainStatusEnum = "error" | "on" | "removing"
        /**
         * All states a status can be in
         * type fullname: cdn.website.DomainZoneStatusEnum
         */
        export type DomainZoneStatusEnum = "error" | "on" | "removing"
        /**
         * A structure describing type of a stats hash
         * interface fullName: cdn.website.StatsDataType.StatsDataType
         */
        export interface StatsDataType {
            date: string;
            value: number;
        }
        /**
         * Period of the statistics
         * type fullname: cdn.website.StatsPeriodEnum
         */
        export type StatsPeriodEnum = "day" | "month" | "week"
        /**
         * Type of statistics related to cache
         * type fullname: cdn.website.StatsTypeEnum
         */
        export type StatsTypeEnum = "backend" | "cdn"
        /**
         * Value bandwidth or request
         * type fullname: cdn.website.StatsValueEnum
         */
        export type StatsValueEnum = "bandwidth" | "request"
        /**
         * Task on CDN
         * interface fullName: cdn.website.Task.Task
         */
        export interface Task {
            comment?: string;
            function: cdn.website.TaskFunctionEnum;
            status: cdn.website.TaskStateEnum;
            taskId: number;
        }
        /**
         * All function CDN task can be
         * type fullname: cdn.website.TaskFunctionEnum
         */
        export type TaskFunctionEnum = "flushAll" | "installBackend" | "removeBackend" | "removeDomain" | "removeZone"
        /**
         * All states a CDN task can be in
         * type fullname: cdn.website.TaskStateEnum
         */
        export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        /**
         * Website CDN
         * interface fullName: cdn.website.Website.Website
         */
        export interface Website {
            anycast: string;
            offer: string;
            service: string;
        }
        /**
         * Zone on CDN
         * interface fullName: cdn.website.Zone.Zone
         */
        export interface Zone {
            status: cdn.website.DomainZoneStatusEnum;
            zone: string;
        }
    }
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
 * END API /cdn/website Models
 */
export function proxyCdnWebsite(ovhEngine: OvhRequestable): Cdn {
    return buildOvhProxy(ovhEngine, '/cdn');
}
export default proxyCdnWebsite;
/**
 * Api model for /cdn/website
 */
export interface Cdn {
    website: {
        /**
         * List available services
         * GET /cdn/website
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /cdn/website/{serviceName}
             */
            $get(): Promise<cdn.website.Website>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /cdn/website/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /cdn/website/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            zone: {
                /**
                 * Remove a zone from the CDN
                 * DELETE /cdn/website/{serviceName}/zone
                 */
                $delete(): Promise<cdn.website.Task>;
                /**
                 * Get this object properties
                 * GET /cdn/website/{serviceName}/zone
                 */
                $get(): Promise<cdn.website.Zone>;
                /**
                 * Configure a zone on CDN
                 * POST /cdn/website/{serviceName}/zone
                 */
                $post(params: { zone: string }): Promise<cdn.website.Zone>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                backends: {
                    /**
                     * Backend associated to this zone
                     * GET /cdn/website/{serviceName}/zone/backends
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Configure a backend on the zone
                     * POST /cdn/website/{serviceName}/zone/backends
                     */
                    $post(params: { ipv4: string }): Promise<cdn.website.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(ipv4: string): {
                        /**
                         * Remove a backend from the zone
                         * DELETE /cdn/website/{serviceName}/zone/backends/{ipv4}
                         */
                        $delete(): Promise<cdn.website.Task>;
                        /**
                         * Get this object properties
                         * GET /cdn/website/{serviceName}/zone/backends/{ipv4}
                         */
                        $get(): Promise<cdn.website.Backend>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        tasks: {
                            /**
                             * Task associated to this backend
                             * GET /cdn/website/{serviceName}/zone/backends/{ipv4}/tasks
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(taskId: number): {
                                /**
                                 * Get this object properties
                                 * GET /cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}
                                 */
                                $get(): Promise<cdn.website.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    };
                }
                domains: {
                    /**
                     * Domain associated to this zone
                     * GET /cdn/website/{serviceName}/zone/domains
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Configure a domain on CDN
                     * POST /cdn/website/{serviceName}/zone/domains
                     */
                    $post(params: { domain: string }): Promise<cdn.website.Domain>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(domain: string): {
                        /**
                         * Remove a domain from the CDN
                         * DELETE /cdn/website/{serviceName}/zone/domains/{domain}
                         */
                        $delete(): Promise<cdn.website.Task>;
                        /**
                         * Get this object properties
                         * GET /cdn/website/{serviceName}/zone/domains/{domain}
                         */
                        $get(): Promise<cdn.website.Domain>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        flush: {
                            /**
                             * Flush all cache
                             * POST /cdn/website/{serviceName}/zone/domains/{domain}/flush
                             */
                            $post(): Promise<cdn.website.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        statistics: {
                            /**
                             * Get statistics about request on CDN, bandwidth value in Bytes
                             * GET /cdn/website/{serviceName}/zone/domains/{domain}/statistics
                             */
                            $get(params: { period: cdn.website.StatsPeriodEnum, type: cdn.website.StatsTypeEnum, value: cdn.website.StatsValueEnum }): Promise<cdn.website.StatsDataType[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        tasks: {
                            /**
                             * Task associated to this domain
                             * GET /cdn/website/{serviceName}/zone/domains/{domain}/tasks
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(taskId: number): {
                                /**
                                 * Get this object properties
                                 * GET /cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}
                                 */
                                $get(): Promise<cdn.website.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    };
                }
                tasks: {
                    /**
                     * Task associated to this zone
                     * GET /cdn/website/{serviceName}/zone/tasks
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /cdn/website/{serviceName}/zone/tasks/{taskId}
                         */
                        $get(): Promise<cdn.website.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
        };
    }
}

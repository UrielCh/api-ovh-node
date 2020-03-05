import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dbaas/queue Models
 * Source: https://eu.api.soyoustart.com/1.0/dbaas/queue.json
 */
export namespace dbaas {
    export namespace queue {
        /**
         * App
         * interface fullName: dbaas.queue.App.App
         */
        export interface App {
            humanId: string;
            id: string;
            name: string;
            regionId: string;
            status: dbaas.queue.AppStatus;
        }
        /**
         * AppConfiguration
         * interface fullName: dbaas.queue.AppConfiguration.AppConfiguration
         */
        export interface AppConfiguration {
            app: dbaas.queue.App;
            metricsAccount: dbaas.queue.MetricsAccount;
            roles: dbaas.queue.Role[];
            users: dbaas.queue.UserWithPassword[];
        }
        /**
         * AppStatus
         * type fullname: dbaas.queue.AppStatus
         */
        export type AppStatus = "not_configured" | "active" | "deleted"
        /**
         * Key
         * interface fullName: dbaas.queue.Key.Key
         */
        export interface Key {
            humanAppId: string;
            id: string;
            name: string;
        }
        /**
         * KeyWithSecret
         * interface fullName: dbaas.queue.KeyWithSecret.KeyWithSecret
         */
        export interface KeyWithSecret {
            humanAppId: string;
            id: string;
            name: string;
            secret: string;
        }
        /**
         * MetricsAccount
         * interface fullName: dbaas.queue.MetricsAccount.MetricsAccount
         */
        export interface MetricsAccount {
            host: string;
            token: string;
        }
        /**
         * Region
         * interface fullName: dbaas.queue.Region.Region
         */
        export interface Region {
            id: string;
            name: string;
            url: string;
        }
        /**
         * Role
         * interface fullName: dbaas.queue.Role.Role
         */
        export interface Role {
            autoCreateAcl: boolean;
            name: string;
            readAcl: string[];
            writeAcl: string[];
        }
        /**
         * Topic
         * interface fullName: dbaas.queue.Topic.Topic
         */
        export interface Topic {
            id: string;
            partitions: number;
            replicationFactor: number;
        }
        /**
         * User
         * interface fullName: dbaas.queue.User.User
         */
        export interface User {
            id: string;
            name: string;
            roles: string[];
        }
        /**
         * UserWithPassword
         * interface fullName: dbaas.queue.UserWithPassword.UserWithPassword
         */
        export interface UserWithPassword {
            id: string;
            name: string;
            password: string;
            roles: string[];
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
 * END API /dbaas/queue Models
 */
export function proxyDbaasQueue(ovhEngine: OvhRequestable): Dbaas {
    return buildOvhProxy(ovhEngine, '/dbaas');
}
export default proxyDbaasQueue;
/**
 * Api model for /dbaas/queue
 */
export interface Dbaas {
    queue: {
        /**
         * List available services
         * GET /dbaas/queue
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get an application
             * GET /dbaas/queue/{serviceName}
             */
            $get(): Promise<dbaas.queue.App>;
            /**
             * Update an application
             * PUT /dbaas/queue/{serviceName}
             */
            $put(params: { name: string }): Promise<dbaas.queue.App>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            key: {
                /**
                 * List all keys of the application
                 * GET /dbaas/queue/{serviceName}/key
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(keyId: string): {
                    /**
                     * Get a key
                     * GET /dbaas/queue/{serviceName}/key/{keyId}
                     */
                    $get(): Promise<dbaas.queue.Key>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            metrics: {
                account: {
                    /**
                     * Get metrics account
                     * GET /dbaas/queue/{serviceName}/metrics/account
                     */
                    $get(): Promise<dbaas.queue.MetricsAccount>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            region: {
                /**
                 * List all regions ID
                 * GET /dbaas/queue/{serviceName}/region
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(regionId: string): {
                    /**
                     * Get one region
                     * GET /dbaas/queue/{serviceName}/region/{regionId}
                     */
                    $get(): Promise<dbaas.queue.Region>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            role: {
                /**
                 * List all roles of the application
                 * GET /dbaas/queue/{serviceName}/role
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(roleName: string): {
                    /**
                     * Get a role
                     * GET /dbaas/queue/{serviceName}/role/{roleName}
                     */
                    $get(): Promise<dbaas.queue.Role>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /dbaas/queue/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /dbaas/queue/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            topic: {
                /**
                 * List all topics of the application
                 * GET /dbaas/queue/{serviceName}/topic
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(topicId: string): {
                    /**
                     * Delete a topic
                     * DELETE /dbaas/queue/{serviceName}/topic/{topicId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get a topic
                     * GET /dbaas/queue/{serviceName}/topic/{topicId}
                     */
                    $get(): Promise<dbaas.queue.Topic>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            user: {
                /**
                 * List all users of the application
                 * GET /dbaas/queue/{serviceName}/user
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(userId: string): {
                    /**
                     * Get a user
                     * GET /dbaas/queue/{serviceName}/user/{userId}
                     */
                    $get(): Promise<dbaas.queue.User>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Generate a new user password
                         * POST /dbaas/queue/{serviceName}/user/{userId}/changePassword
                         */
                        $post(): Promise<dbaas.queue.UserWithPassword>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    roles: {
                        /**
                         * Get user roles
                         * GET /dbaas/queue/{serviceName}/user/{userId}/roles
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
        };
    }
}

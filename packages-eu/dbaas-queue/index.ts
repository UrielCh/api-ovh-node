import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dbaas/queue Models
 * Source: https://eu.api.ovh.com/1.0/dbaas/queue.json
 */
export namespace dbaas {
    export namespace queue {
        // interface fullName: dbaas.queue.App.App
        export interface App {
            humanId: string;
            id: string;
            name: string;
            regionId: string;
            status: dbaas.queue.AppStatus;
        }
        // interface fullName: dbaas.queue.AppConfiguration.AppConfiguration
        export interface AppConfiguration {
            app: dbaas.queue.App;
            metricsAccount: dbaas.queue.MetricsAccount;
            roles: dbaas.queue.Role[];
            users: dbaas.queue.UserWithPassword[];
        }
        // type fullname: dbaas.queue.AppStatus
        export type AppStatus = "not_configured" | "active" | "deleted"
        // interface fullName: dbaas.queue.Key.Key
        export interface Key {
            humanAppId: string;
            id: string;
            name: string;
        }
        // interface fullName: dbaas.queue.KeyWithSecret.KeyWithSecret
        export interface KeyWithSecret {
            humanAppId: string;
            id: string;
            name: string;
            secret: string;
        }
        // interface fullName: dbaas.queue.MetricsAccount.MetricsAccount
        export interface MetricsAccount {
            host: string;
            token: string;
        }
        // interface fullName: dbaas.queue.Region.Region
        export interface Region {
            id: string;
            name: string;
            url: string;
        }
        // interface fullName: dbaas.queue.Role.Role
        export interface Role {
            autoCreateAcl: boolean;
            name: string;
            readAcl: string[];
            writeAcl: string[];
        }
        // interface fullName: dbaas.queue.Topic.Topic
        export interface Topic {
            id: string;
            partitions: number;
            replicationFactor: number;
        }
        // interface fullName: dbaas.queue.User.User
        export interface User {
            id: string;
            name: string;
            roles: string[];
        }
        // interface fullName: dbaas.queue.UserWithPassword.UserWithPassword
        export interface UserWithPassword {
            id: string;
            name: string;
            password: string;
            roles: string[];
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
 * END API /dbaas/queue Models
 */
export function proxyDbaasQueue(ovhEngine: OvhRequestable): Dbaas {
    return buildOvhProxy(ovhEngine, '/dbaas');
}
export default proxyDbaasQueue;
/**
 * Api Proxy model
 */// Apis harmony
// path /dbaas
export interface Dbaas {
    queue: {
        // GET /dbaas/queue
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /dbaas/queue/{serviceName}
            $get(): Promise<dbaas.queue.App>;
            // PUT /dbaas/queue/{serviceName}
            $put(params: {name: string}): Promise<dbaas.queue.App>;
            key: {
                // GET /dbaas/queue/{serviceName}/key
                $get(): Promise<string[]>;
                $(keyId: string): {
                    // GET /dbaas/queue/{serviceName}/key/{keyId}
                    $get(): Promise<dbaas.queue.Key>;
                };
            }
            metrics: {
                account: {
                    // GET /dbaas/queue/{serviceName}/metrics/account
                    $get(): Promise<dbaas.queue.MetricsAccount>;
                }
            }
            region: {
                // GET /dbaas/queue/{serviceName}/region
                $get(): Promise<string[]>;
                $(regionId: string): {
                    // GET /dbaas/queue/{serviceName}/region/{regionId}
                    $get(): Promise<dbaas.queue.Region>;
                };
            }
            role: {
                // GET /dbaas/queue/{serviceName}/role
                $get(): Promise<string[]>;
                $(roleName: string): {
                    // GET /dbaas/queue/{serviceName}/role/{roleName}
                    $get(): Promise<dbaas.queue.Role>;
                };
            }
            serviceInfos: {
                // GET /dbaas/queue/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dbaas/queue/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            topic: {
                // GET /dbaas/queue/{serviceName}/topic
                $get(): Promise<string[]>;
                $(topicId: string): {
                    // DELETE /dbaas/queue/{serviceName}/topic/{topicId}
                    $delete(): Promise<void>;
                    // GET /dbaas/queue/{serviceName}/topic/{topicId}
                    $get(): Promise<dbaas.queue.Topic>;
                };
            }
            user: {
                // GET /dbaas/queue/{serviceName}/user
                $get(): Promise<string[]>;
                $(userId: string): {
                    // GET /dbaas/queue/{serviceName}/user/{userId}
                    $get(): Promise<dbaas.queue.User>;
                    changePassword: {
                        // POST /dbaas/queue/{serviceName}/user/{userId}/changePassword
                        $post(): Promise<dbaas.queue.UserWithPassword>;
                    }
                    roles: {
                        // GET /dbaas/queue/{serviceName}/user/{userId}/roles
                        $get(): Promise<string[]>;
                    }
                };
            }
        };
    }
}

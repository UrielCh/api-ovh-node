import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dbaas/queue Models
 */
export namespace dbaas {
    export namespace queue {
        // interface fullName: dbaas.queue.App.App
        export interface App {
            humanId: string;
            id: string;
            name: string;
            regionId: string;
            status: dbaasqueueAppStatus;
        }
        // interface fullName: dbaas.queue.AppConfiguration.AppConfiguration
        export interface AppConfiguration {
            app: dbaasqueueApp;
            metricsAccount: dbaasqueueMetricsAccount;
            roles: dbaasqueueRole[];
            users: dbaasqueueUserWithPassword[];
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
        renew?: serviceRenewType;
        renewalType: serviceRenewalTypeEnum;
        serviceId: number;
        status: serviceStateEnum;
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
export interface Dbaas{
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
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}): Promise<void>;
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
// Api
  /**
   * Operations about the PAAS_QUEUE service
   * List available services
   */
  get(path: '/dbaas/queue'): () => Promise<string[]>;
  /**
   * App
   * Get an application
   */
  get(path: '/dbaas/queue/{serviceName}'): (params: {serviceName: string}) => Promise<dbaas.queue.App>;
  /**
   * Key
   * List all keys of the application
   */
  get(path: '/dbaas/queue/{serviceName}/key'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Key
   * Get a key
   */
  get(path: '/dbaas/queue/{serviceName}/key/{keyId}'): (params: {keyId: string, serviceName: string}) => Promise<dbaas.queue.Key>;
  /**
   * Metrics
   * Get metrics account
   */
  get(path: '/dbaas/queue/{serviceName}/metrics/account'): (params: {serviceName: string}) => Promise<dbaas.queue.MetricsAccount>;
  /**
   * Region
   * List all regions ID
   */
  get(path: '/dbaas/queue/{serviceName}/region'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Region
   * Get one region
   */
  get(path: '/dbaas/queue/{serviceName}/region/{regionId}'): (params: {regionId: string, serviceName: string}) => Promise<dbaas.queue.Region>;
  /**
   * Role
   * List all roles of the application
   */
  get(path: '/dbaas/queue/{serviceName}/role'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Role
   * Get a role
   */
  get(path: '/dbaas/queue/{serviceName}/role/{roleName}'): (params: {roleName: string, serviceName: string}) => Promise<dbaas.queue.Role>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dbaas/queue/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Topic
   * List all topics of the application
   */
  get(path: '/dbaas/queue/{serviceName}/topic'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Topic
   * Get a topic
   */
  get(path: '/dbaas/queue/{serviceName}/topic/{topicId}'): (params: {serviceName: string, topicId: string}) => Promise<dbaas.queue.Topic>;
  /**
   * User
   * List all users of the application
   */
  get(path: '/dbaas/queue/{serviceName}/user'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * User
   * Get a user
   */
  get(path: '/dbaas/queue/{serviceName}/user/{userId}'): (params: {serviceName: string, userId: string}) => Promise<dbaas.queue.User>;
  /**
   * User roles
   * Get user roles
   */
  get(path: '/dbaas/queue/{serviceName}/user/{userId}/roles'): (params: {serviceName: string, userId: string}) => Promise<string[]>;
  /**
   * App
   * Update an application
   */
  put(path: '/dbaas/queue/{serviceName}'): (params: {serviceName: string, name: string}) => Promise<dbaas.queue.App>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dbaas/queue/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}) => Promise<void>;
  /**
   * User
   * Generate a new user password
   */
  post(path: '/dbaas/queue/{serviceName}/user/{userId}/changePassword'): (params: {serviceName: string, userId: string}) => Promise<dbaas.queue.UserWithPassword>;
  /**
   * Topic
   * Delete a topic
   */
  delete(path: '/dbaas/queue/{serviceName}/topic/{topicId}'): (params: {serviceName: string, topicId: string}) => Promise<void>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type dbaasqueueAppStatus = dbaas.queue.AppStatus;
type dbaasqueueApp = dbaas.queue.App;
type dbaasqueueMetricsAccount = dbaas.queue.MetricsAccount;
type dbaasqueueRole = dbaas.queue.Role;
type dbaasqueueUserWithPassword = dbaas.queue.UserWithPassword;
type serviceRenewType = service.RenewType;
type serviceRenewalTypeEnum = service.RenewalTypeEnum;
type serviceStateEnum = service.StateEnum;

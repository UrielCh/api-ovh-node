import { OvhWrapper, OvhRequestable, OvhParamType, buildOvhProxy } from '@ovh-api/common';

export namespace dbaas {
    export namespace queue {
        //dbaas.queue.App
        // fullName: dbaas.queue.App.App
        export interface App {
            humanId: string;
            id: string;
            name: string;
            regionId: string;
            status: dbaas.queue.AppStatus;
        }
        //dbaas.queue.AppConfiguration
        // fullName: dbaas.queue.AppConfiguration.AppConfiguration
        export interface AppConfiguration {
            app: dbaas.queue.App;
            metricsAccount: dbaas.queue.MetricsAccount;
            roles: dbaas.queue.Role[];
            users: dbaas.queue.UserWithPassword[];
        }
        //dbaas.queue.AppStatus
        export type AppStatus = "not_configured" | "active" | "deleted"
        //dbaas.queue.Key
        // fullName: dbaas.queue.Key.Key
        export interface Key {
            humanAppId: string;
            id: string;
            name: string;
        }
        //dbaas.queue.KeyWithSecret
        // fullName: dbaas.queue.KeyWithSecret.KeyWithSecret
        export interface KeyWithSecret {
            humanAppId: string;
            id: string;
            name: string;
            secret: string;
        }
        //dbaas.queue.MetricsAccount
        // fullName: dbaas.queue.MetricsAccount.MetricsAccount
        export interface MetricsAccount {
            host: string;
            token: string;
        }
        //dbaas.queue.Region
        // fullName: dbaas.queue.Region.Region
        export interface Region {
            id: string;
            name: string;
            url: string;
        }
        //dbaas.queue.Role
        // fullName: dbaas.queue.Role.Role
        export interface Role {
            autoCreateAcl: boolean;
            name: string;
            readAcl: string[];
            writeAcl: string[];
        }
        //dbaas.queue.Topic
        // fullName: dbaas.queue.Topic.Topic
        export interface Topic {
            id: string;
            partitions: number;
            replicationFactor: number;
        }
        //dbaas.queue.User
        // fullName: dbaas.queue.User.User
        export interface User {
            id: string;
            name: string;
            roles: string[];
        }
        //dbaas.queue.UserWithPassword
        // fullName: dbaas.queue.UserWithPassword.UserWithPassword
        export interface UserWithPassword {
            id: string;
            name: string;
            password: string;
            roles: string[];
        }
    }
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
export function proxyDbaasQueue(ovhEngine: OvhRequestable): Dbaas {
    return buildOvhProxy(ovhEngine, '/dbaas/queue');
}
// Apis harmony
// path /dbaas
export interface Dbaas{
    queue: {
        // GET /dbaas/queue
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /dbaas/queue/{serviceName}
            $get(): Promise<dbaas.queue.App>;
            // PUT /dbaas/queue/{serviceName}
            $put(body?: {name: string}): Promise<dbaas.queue.App>;
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
                $put(body?: {body: services.Service}): Promise<void>;
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
// Api
type PathsDbaasQueueGET = '/dbaas/queue' |
  '/dbaas/queue/{serviceName}' |
  '/dbaas/queue/{serviceName}/key' |
  '/dbaas/queue/{serviceName}/key/{keyId}' |
  '/dbaas/queue/{serviceName}/metrics/account' |
  '/dbaas/queue/{serviceName}/region' |
  '/dbaas/queue/{serviceName}/region/{regionId}' |
  '/dbaas/queue/{serviceName}/role' |
  '/dbaas/queue/{serviceName}/role/{roleName}' |
  '/dbaas/queue/{serviceName}/serviceInfos' |
  '/dbaas/queue/{serviceName}/topic' |
  '/dbaas/queue/{serviceName}/topic/{topicId}' |
  '/dbaas/queue/{serviceName}/user' |
  '/dbaas/queue/{serviceName}/user/{userId}' |
  '/dbaas/queue/{serviceName}/user/{userId}/roles';

type PathsDbaasQueuePUT = '/dbaas/queue/{serviceName}' |
  '/dbaas/queue/{serviceName}/serviceInfos';

type PathsDbaasQueuePOST = '/dbaas/queue/{serviceName}/user/{userId}/changePassword';

type PathsDbaasQueueDELETE = '/dbaas/queue/{serviceName}/topic/{topicId}';

export class ApiDbaasQueue extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the PAAS_QUEUE service
   * List available services
   */
  public get(path: '/dbaas/queue'): Promise<string[]>;
  /**
   * App
   * Get an application
   */
  public get(path: '/dbaas/queue/{serviceName}', params: {serviceName: string}): Promise<dbaas.queue.App>;
  /**
   * Key
   * List all keys of the application
   */
  public get(path: '/dbaas/queue/{serviceName}/key', params: {serviceName: string}): Promise<string[]>;
  /**
   * Key
   * Get a key
   */
  public get(path: '/dbaas/queue/{serviceName}/key/{keyId}', params: {keyId: string, serviceName: string}): Promise<dbaas.queue.Key>;
  /**
   * Metrics
   * Get metrics account
   */
  public get(path: '/dbaas/queue/{serviceName}/metrics/account', params: {serviceName: string}): Promise<dbaas.queue.MetricsAccount>;
  /**
   * Region
   * List all regions ID
   */
  public get(path: '/dbaas/queue/{serviceName}/region', params: {serviceName: string}): Promise<string[]>;
  /**
   * Region
   * Get one region
   */
  public get(path: '/dbaas/queue/{serviceName}/region/{regionId}', params: {regionId: string, serviceName: string}): Promise<dbaas.queue.Region>;
  /**
   * Role
   * List all roles of the application
   */
  public get(path: '/dbaas/queue/{serviceName}/role', params: {serviceName: string}): Promise<string[]>;
  /**
   * Role
   * Get a role
   */
  public get(path: '/dbaas/queue/{serviceName}/role/{roleName}', params: {roleName: string, serviceName: string}): Promise<dbaas.queue.Role>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/dbaas/queue/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Topic
   * List all topics of the application
   */
  public get(path: '/dbaas/queue/{serviceName}/topic', params: {serviceName: string}): Promise<string[]>;
  /**
   * Topic
   * Get a topic
   */
  public get(path: '/dbaas/queue/{serviceName}/topic/{topicId}', params: {serviceName: string, topicId: string}): Promise<dbaas.queue.Topic>;
  /**
   * User
   * List all users of the application
   */
  public get(path: '/dbaas/queue/{serviceName}/user', params: {serviceName: string}): Promise<string[]>;
  /**
   * User
   * Get a user
   */
  public get(path: '/dbaas/queue/{serviceName}/user/{userId}', params: {serviceName: string, userId: string}): Promise<dbaas.queue.User>;
  /**
   * User roles
   * Get user roles
   */
  public get(path: '/dbaas/queue/{serviceName}/user/{userId}/roles', params: {serviceName: string, userId: string}): Promise<string[]>;
  public get(path: PathsDbaasQueueGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * App
   * Update an application
   */
  public put(path: '/dbaas/queue/{serviceName}', params: {serviceName: string, name: string}): Promise<dbaas.queue.App>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/dbaas/queue/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsDbaasQueuePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * User
   * Generate a new user password
   */
  public post(path: '/dbaas/queue/{serviceName}/user/{userId}/changePassword', params: {serviceName: string, userId: string}): Promise<dbaas.queue.UserWithPassword>;
  public post(path: PathsDbaasQueuePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Topic
   * Delete a topic
   */
  public delete(path: '/dbaas/queue/{serviceName}/topic/{topicId}', params: {serviceName: string, topicId: string}): Promise<void>;
  public delete(path: PathsDbaasQueueDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
export default ApiDbaasQueue;

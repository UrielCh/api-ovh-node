import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dbaas/queue Models
 */
export declare namespace dbaas {
    namespace queue {
        interface App {
            humanId: string;
            id: string;
            name: string;
            regionId: string;
            status: dbaas.queue.AppStatus;
        }
        interface AppConfiguration {
            app: dbaas.queue.App;
            metricsAccount: dbaas.queue.MetricsAccount;
            roles: dbaas.queue.Role[];
            users: dbaas.queue.UserWithPassword[];
        }
        type AppStatus = "not_configured" | "active" | "deleted";
        interface Key {
            humanAppId: string;
            id: string;
            name: string;
        }
        interface KeyWithSecret {
            humanAppId: string;
            id: string;
            name: string;
            secret: string;
        }
        interface MetricsAccount {
            host: string;
            token: string;
        }
        interface Region {
            id: string;
            name: string;
            url: string;
        }
        interface Role {
            autoCreateAcl: boolean;
            name: string;
            readAcl: string[];
            writeAcl: string[];
        }
        interface Topic {
            id: string;
            partitions: number;
            replicationFactor: number;
        }
        interface User {
            id: string;
            name: string;
            roles: string[];
        }
        interface UserWithPassword {
            id: string;
            name: string;
            password: string;
            roles: string[];
        }
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
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
export declare function proxyDbaasQueue(ovhEngine: OvhRequestable): Dbaas;
export default proxyDbaasQueue;
/**
 * Api Proxy model
 */ export interface Dbaas {
    queue: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<dbaas.queue.App>;
            $put(params: {
                name: string;
            }): Promise<dbaas.queue.App>;
            key: {
                $get(): Promise<string[]>;
                $(keyId: string): {
                    $get(): Promise<dbaas.queue.Key>;
                };
            };
            metrics: {
                account: {
                    $get(): Promise<dbaas.queue.MetricsAccount>;
                };
            };
            region: {
                $get(): Promise<string[]>;
                $(regionId: string): {
                    $get(): Promise<dbaas.queue.Region>;
                };
            };
            role: {
                $get(): Promise<string[]>;
                $(roleName: string): {
                    $get(): Promise<dbaas.queue.Role>;
                };
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            topic: {
                $get(): Promise<string[]>;
                $(topicId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<dbaas.queue.Topic>;
                };
            };
            user: {
                $get(): Promise<string[]>;
                $(userId: string): {
                    $get(): Promise<dbaas.queue.User>;
                    changePassword: {
                        $post(): Promise<dbaas.queue.UserWithPassword>;
                    };
                    roles: {
                        $get(): Promise<string[]>;
                    };
                };
            };
        };
    };
    /**
     * Operations about the PAAS_QUEUE service
     * List available services
     */
    get(path: '/dbaas/queue'): () => Promise<string[]>;
    /**
     * App
     * Get an application
     */
    get(path: '/dbaas/queue/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<dbaas.queue.App>;
    /**
     * Key
     * List all keys of the application
     */
    get(path: '/dbaas/queue/{serviceName}/key'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Key
     * Get a key
     */
    get(path: '/dbaas/queue/{serviceName}/key/{keyId}'): (params: {
        keyId: string;
        serviceName: string;
    }) => Promise<dbaas.queue.Key>;
    /**
     * Metrics
     * Get metrics account
     */
    get(path: '/dbaas/queue/{serviceName}/metrics/account'): (params: {
        serviceName: string;
    }) => Promise<dbaas.queue.MetricsAccount>;
    /**
     * Region
     * List all regions ID
     */
    get(path: '/dbaas/queue/{serviceName}/region'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Region
     * Get one region
     */
    get(path: '/dbaas/queue/{serviceName}/region/{regionId}'): (params: {
        regionId: string;
        serviceName: string;
    }) => Promise<dbaas.queue.Region>;
    /**
     * Role
     * List all roles of the application
     */
    get(path: '/dbaas/queue/{serviceName}/role'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Role
     * Get a role
     */
    get(path: '/dbaas/queue/{serviceName}/role/{roleName}'): (params: {
        roleName: string;
        serviceName: string;
    }) => Promise<dbaas.queue.Role>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dbaas/queue/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Topic
     * List all topics of the application
     */
    get(path: '/dbaas/queue/{serviceName}/topic'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Topic
     * Get a topic
     */
    get(path: '/dbaas/queue/{serviceName}/topic/{topicId}'): (params: {
        serviceName: string;
        topicId: string;
    }) => Promise<dbaas.queue.Topic>;
    /**
     * User
     * List all users of the application
     */
    get(path: '/dbaas/queue/{serviceName}/user'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * User
     * Get a user
     */
    get(path: '/dbaas/queue/{serviceName}/user/{userId}'): (params: {
        serviceName: string;
        userId: string;
    }) => Promise<dbaas.queue.User>;
    /**
     * User roles
     * Get user roles
     */
    get(path: '/dbaas/queue/{serviceName}/user/{userId}/roles'): (params: {
        serviceName: string;
        userId: string;
    }) => Promise<string[]>;
    /**
     * App
     * Update an application
     */
    put(path: '/dbaas/queue/{serviceName}'): (params: {
        serviceName: string;
        name: string;
    }) => Promise<dbaas.queue.App>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dbaas/queue/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * User
     * Generate a new user password
     */
    post(path: '/dbaas/queue/{serviceName}/user/{userId}/changePassword'): (params: {
        serviceName: string;
        userId: string;
    }) => Promise<dbaas.queue.UserWithPassword>;
    /**
     * Topic
     * Delete a topic
     */
    delete(path: '/dbaas/queue/{serviceName}/topic/{topicId}'): (params: {
        serviceName: string;
        topicId: string;
    }) => Promise<void>;
}

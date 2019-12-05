import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /metrics Models
 */
export declare namespace metrics {
    interface LookupTokenCreation {
        accessToken: string;
    }
    interface QuotaUpdate {
        quota: number;
    }
    interface TokenCreation {
        description?: string;
        labels?: metrics.api.Label[];
        permission: metrics.api.PermissionEnum;
    }
    interface TokenUpdate {
        description?: string;
    }
    interface Update {
        description?: string;
    }
    namespace api {
        interface Consumption {
            ddp: number;
            mads: number;
        }
        interface Label {
            key: string;
            value: string;
        }
        type OfferTypeEnum = "cloud" | "live";
        interface Option {
            ddp: number;
            lastModification: string;
            mads: number;
        }
        type PermissionEnum = "read" | "write";
        interface Region {
            description: string;
            name: string;
        }
        interface Service {
            description: string;
            name: string;
            offer: string;
            quota: metrics.api.Option;
            region: metrics.api.Region;
            shouldUpgrade: boolean;
            status: metrics.api.ServiceStatusEnum;
            type: metrics.api.OfferTypeEnum;
        }
        type ServiceStatusEnum = "new" | "alive" | "disabled" | "dead";
        interface Token {
            access: string;
            createdAt: string;
            description: string;
            expiryAt: string;
            id: string;
            isRevoked: boolean;
            labels: metrics.api.Label[];
            permission: metrics.api.PermissionEnum;
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
    type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
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
 * END API /metrics Models
 */
export declare function proxyMetrics(ovhEngine: OvhRequestable): Metrics;
export default proxyMetrics;
/**
 * Api Proxy model
 */ export interface Metrics {
    $get(): Promise<string[]>;
    $(serviceName: string): {
        $get(): Promise<metrics.api.Service>;
        $put(params?: {
            description?: string;
        }): Promise<metrics.api.Service>;
        changeContact: {
            $post(params?: {
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
            }): Promise<number[]>;
        };
        confirmTermination: {
            $post(params: {
                commentary?: string;
                futureUse?: service.TerminationFutureUseEnum;
                reason?: service.TerminationReasonEnum;
                token: string;
            }): Promise<string>;
        };
        consumption: {
            $get(params?: {
                duration?: number;
            }): Promise<metrics.api.Consumption>;
        };
        lookup: {
            token: {
                $post(params: {
                    accessToken: string;
                }): Promise<string[]>;
            };
        };
        quota: {
            $put(params: {
                quota: number;
            }): Promise<string>;
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
        terminate: {
            $post(): Promise<string>;
        };
        token: {
            $get(): Promise<string[]>;
            $post(params: {
                description?: string;
                labels?: metrics.api.Label[];
                permission: metrics.api.PermissionEnum;
            }): Promise<metrics.api.Token>;
            $(tokenId: string): {
                $delete(): Promise<void>;
                $get(): Promise<metrics.api.Token>;
                $put(params?: {
                    description?: string;
                }): Promise<metrics.api.Token>;
            };
        };
    };
    /**
     * Operations about the METRICS service
     * List available services
     */
    get(path: '/metrics'): () => Promise<string[]>;
    /**
     * Operations about the METRICS service
     * Get service
     */
    get(path: '/metrics/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<metrics.api.Service>;
    /**
     * Metrics service consumption
     * Get consumption for your service
     */
    get(path: '/metrics/{serviceName}/consumption'): (params: {
        serviceName: string;
        duration?: number;
    }) => Promise<metrics.api.Consumption>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/metrics/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Metrics service token operations
     * Get list of tokens
     */
    get(path: '/metrics/{serviceName}/token'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Metrics service token operations
     * Get a specific token
     */
    get(path: '/metrics/{serviceName}/token/{tokenId}'): (params: {
        serviceName: string;
        tokenId: string;
    }) => Promise<metrics.api.Token>;
    /**
     * Operations about the METRICS service
     * Modify service
     */
    put(path: '/metrics/{serviceName}'): (params: {
        serviceName: string;
        description?: string;
    }) => Promise<metrics.api.Service>;
    /**
     * Metrics service quota management
     * Set overquota
     */
    put(path: '/metrics/{serviceName}/quota'): (params: {
        serviceName: string;
        quota: number;
    }) => Promise<string>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/metrics/{serviceName}/serviceInfos'): (params: {
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
     * Metrics service token operations
     * Modify a token
     */
    put(path: '/metrics/{serviceName}/token/{tokenId}'): (params: {
        serviceName: string;
        tokenId: string;
        description?: string;
    }) => Promise<metrics.api.Token>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/metrics/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/metrics/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * Look for service/token
     * Find TokenID for a specific token
     */
    post(path: '/metrics/{serviceName}/lookup/token'): (params: {
        serviceName: string;
        accessToken: string;
    }) => Promise<string[]>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/metrics/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Metrics service token operations
     * Create a token
     */
    post(path: '/metrics/{serviceName}/token'): (params: {
        serviceName: string;
        description?: string;
        labels?: metrics.api.Label[];
        permission: metrics.api.PermissionEnum;
    }) => Promise<metrics.api.Token>;
    /**
     * Metrics service token operations
     * Revoke a token
     */
    delete(path: '/metrics/{serviceName}/token/{tokenId}'): (params: {
        serviceName: string;
        tokenId: string;
    }) => Promise<void>;
}

import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /metrics Models
 * Source: https://eu.api.ovh.com/1.0/metrics.json
 */
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
    }
}
export namespace metrics {
    /**
     * Missing description
     * interface fullName: metrics.LookupTokenCreation.LookupTokenCreation
     */
    export interface LookupTokenCreation {
        accessToken: string;
    }
    /**
     * Missing description
     * interface fullName: metrics.QuotaUpdate.QuotaUpdate
     */
    export interface QuotaUpdate {
        quota: number;
    }
    /**
     * Missing description
     * interface fullName: metrics.TokenCreation.TokenCreation
     */
    export interface TokenCreation {
        description?: string;
        labels?: metrics.api.Label[];
        permission: metrics.api.PermissionEnum;
    }
    /**
     * Missing description
     * interface fullName: metrics.TokenUpdate.TokenUpdate
     */
    export interface TokenUpdate {
        description?: string;
    }
    /**
     * Missing description
     * interface fullName: metrics.Update.Update
     */
    export interface Update {
        description?: string;
    }
    export namespace api {
        /**
         * Structure holding the consumption
         * interface fullName: metrics.api.Consumption.Consumption
         */
        export interface Consumption {
            ddp: number;
            mads: number;
        }
        /**
         * Structure holding the elements about a label
         * interface fullName: metrics.api.Label.Label
         */
        export interface Label {
            key: string;
            value: string;
        }
        /**
         * Type of the service
         * type fullname: metrics.api.OfferTypeEnum
         */
        export type OfferTypeEnum = "cloud" | "live"
        /**
         * Structure holding the options for a service
         * interface fullName: metrics.api.Option.Option
         */
        export interface Option {
            ddp: number;
            lastModification: string;
            mads: number;
        }
        /**
         * Metrics service token permissions
         * type fullname: metrics.api.PermissionEnum
         */
        export type PermissionEnum = "read" | "write"
        /**
         * Structure holding the elements about a region
         * interface fullName: metrics.api.Region.Region
         */
        export interface Region {
            description: string;
            name: string;
        }
        /**
         * Structure holding the elements about a service
         * interface fullName: metrics.api.Service.Service
         */
        export interface Service {
            description: string;
            name: string;
            offer: string;
            quota: metrics.api.Option;
            region: metrics.api.Region;
            shouldUpgrade: boolean;
            status: metrics.api.ServiceStatusEnum;
            type: metrics.api.OfferTypeEnum;
        }
        /**
         * Status of of the service
         * type fullname: metrics.api.ServiceStatusEnum
         */
        export type ServiceStatusEnum = "alive" | "dead" | "disabled" | "new"
        /**
         * Structure holding the elements about a service
         * interface fullName: metrics.api.ServiceWithIAM.ServiceWithIAM
         */
        export interface ServiceWithIAM {
            description: string;
            iam?: iam.ResourceMetadata;
            name: string;
            offer: string;
            quota: metrics.api.Option;
            region: metrics.api.Region;
            shouldUpgrade: boolean;
            status: metrics.api.ServiceStatusEnum;
            type: metrics.api.OfferTypeEnum;
        }
        /**
         * Structure holding the elements about a token
         * interface fullName: metrics.api.Token.Token
         */
        export interface Token {
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
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
 * END API /metrics Models
 */
export function proxyMetrics(ovhEngine: OvhRequestable): Metrics {
    return buildOvhProxy(ovhEngine, '/metrics');
}
export default proxyMetrics;
/**
 * Api model for /metrics
 */
export interface Metrics {
    /**
     * List available services
     * GET /metrics
     */
    $get(params?: { iamTags?: any }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get service
         * GET /metrics/{serviceName}
         */
        $get(): Promise<metrics.api.Service>;
        /**
         * Modify service
         * PUT /metrics/{serviceName}
         */
        $put(params?: { description?: string }): Promise<metrics.api.Service>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /metrics/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        confirmTermination: {
            /**
             * Confirm service termination
             * POST /metrics/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
        }
        consumption: {
            /**
             * Get consumption for your service
             * GET /metrics/{serviceName}/consumption
             */
            $get(params?: { duration?: number }): Promise<metrics.api.Consumption>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        lookup: {
            token: {
                /**
                 * Find TokenID for a specific token
                 * POST /metrics/{serviceName}/lookup/token
                 */
                $post(params: { accessToken: string }): Promise<string[]>;
            }
        }
        quota: {
            /**
             * Set overquota
             * PUT /metrics/{serviceName}/quota
             */
            $put(params: { quota: number }): Promise<string>;
        }
        serviceInfos: {
            /**
             * Get service information
             * GET /metrics/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /metrics/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        terminate: {
            /**
             * Ask for the termination of your service
             * POST /metrics/{serviceName}/terminate
             */
            $post(): Promise<string>;
        }
        token: {
            /**
             * Get list of tokens
             * GET /metrics/{serviceName}/token
             */
            $get(): Promise<string[]>;
            /**
             * Create a token
             * POST /metrics/{serviceName}/token
             */
            $post(params: { description?: string, labels?: metrics.api.Label[], permission: metrics.api.PermissionEnum }): Promise<metrics.api.Token>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(tokenId: string): {
                /**
                 * Revoke a token
                 * DELETE /metrics/{serviceName}/token/{tokenId}
                 */
                $delete(): Promise<void>;
                /**
                 * Get a specific token
                 * GET /metrics/{serviceName}/token/{tokenId}
                 */
                $get(): Promise<metrics.api.Token>;
                /**
                 * Modify a token
                 * PUT /metrics/{serviceName}/token/{tokenId}
                 */
                $put(params?: { description?: string }): Promise<metrics.api.Token>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    };
}

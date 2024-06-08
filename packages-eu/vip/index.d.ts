import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /vip Models
 * Source: https://eu.api.ovh.com/1.0/vip.json
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
export namespace vip {
    /**
     * Vip Service
     * interface fullName: vip.SupportVip.SupportVip
     */
    export interface SupportVip {
        serviceName: string;
        universe: vip.UniverseEnum[];
    }
    /**
     * Vip Service
     * interface fullName: vip.SupportVipWithIAM.SupportVipWithIAM
     */
    export interface SupportVipWithIAM {
        iam?: iam.ResourceMetadata;
        serviceName: string;
        universe: vip.UniverseEnum[];
    }
    /**
     * Available universe for VIP service
     * type fullname: vip.UniverseEnum
     */
    export type UniverseEnum = "cloud" | "dedicated" | "telecom" | "web"
}
/**
 * Api model for /vip
 */
export interface Vip {
    /**
     * List available services
     * GET /vip
     */
    $get(params?: { iamTags?: any }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /vip/{serviceName}
         */
        $get(): Promise<vip.SupportVip>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        serviceInfos: {
            /**
             * Get service information
             * GET /vip/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /vip/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}

export declare function proxyVip(ovhEngine: OvhRequestable): Vip;
export default proxyVip;

import { buildOvhProxy } from '@ovh-api/common';
import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /allDom Models
 * Source: https://eu.api.ovh.com/1.0/allDom.json
 */
export namespace allDom {
    /**
     * AllDom administration
     * interface fullName: allDom.AllDom.AllDom
     */
    export interface AllDom {
        name: string;
        offer: domain.OfferEnum;
        type: allDom.TypeEnum;
    }
    /**
     * Domain name of a allDom
     * interface fullName: allDom.AllDomDomain.AllDomDomain
     */
    export interface AllDomDomain {
        domain: string;
    }
    /**
     * AllDom administration
     * interface fullName: allDom.AllDomWithIAM.AllDomWithIAM
     */
    export interface AllDomWithIAM {
        iam?: iam.ResourceMetadata;
        name: string;
        offer: domain.OfferEnum;
        type: allDom.TypeEnum;
    }
    /**
     * Type
     * type fullname: allDom.TypeEnum
     */
    export type TypeEnum = "french" | "french+international" | "international"
}
export namespace domain {
    /**
     * Offer
     * type fullname: domain.OfferEnum
     */
    export type OfferEnum = "diamond" | "gold" | "platinum"
}
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

/**
 * END API /allDom Models
 */
export function proxyAllDom(ovhEngine: OvhRequestable): AllDom {
    return buildOvhProxy(ovhEngine, '/allDom');
}
export default proxyAllDom;
/**
 * Api model for /allDom
 */
export interface AllDom {
    /**
     * List available services
     * GET /allDom
     */
    $get(params?: { iamTags?: any }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /allDom/{serviceName}
         */
        $get(): Promise<allDom.AllDom>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        domain: {
            /**
             * Domains attached to this allDom
             * GET /allDom/{serviceName}/domain
             */
            $get(params?: { domain?: string }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(domain: string): {
                /**
                 * Get this object properties
                 * GET /allDom/{serviceName}/domain/{domain}
                 */
                $get(): Promise<allDom.AllDomDomain>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        serviceInfos: {
            /**
             * Get service information
             * GET /allDom/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /allDom/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}

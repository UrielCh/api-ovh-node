import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /webPaaS Models
 * Source: https://eu.api.ovh.com/1.0/webPaaS.json
 */
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
export namespace webPaaS {
    /**
     * Valid addon offers faimly
     * type fullname: webPaaS.AddonFamilyEnum
     */
    export type AddonFamilyEnum = "storage" | "user_license" | "staging_environment"
    /**
     * Valid addon product name
     * type fullname: webPaaS.AddonProductNameEnum
     */
    export type AddonProductNameEnum = "additional-storage" | "additional-staging-environment" | "additional-user-license"
    /**
     * Capabilties Response
     * interface fullName: webPaaS.Capabilities.Capabilities
     */
    export interface Capabilities {
        regions: webPaaS.RegionEnum[];
        templates: webPaaS.Template[];
    }
    /**
     * Valid states of a subscription
     * type fullname: webPaaS.CustomerTypeEnum
     */
    export type CustomerTypeEnum = "OWNER" | "USER"
    /**
     * Valid offers by Web PaaS
     * type fullname: webPaaS.OfferEnum
     */
    export type OfferEnum = "start-1" | "start-2" | "start-4" | "start-8" | "start-16" | "develop-1" | "develop-2" | "develop-4" | "develop-8" | "develop-16" | "expand-1" | "expand-2" | "expand-4" | "expand-8" | "expand-16"
    /**
     * Supported regions for deployment
     * type fullname: webPaaS.RegionEnum
     */
    export type RegionEnum = "GRA7"
    /**
     * Valid states of a subscription
     * type fullname: webPaaS.StatusEnum
     */
    export type StatusEnum = "ACTIVE" | "PENDING" | "CANCELED" | "CANCELING" | "CANCELLATION_REQUESTED" | "TERMINATED" | "SUSPENDED" | "EXPIRED" | "ERROR" | "CLOSED" | "TO_SETTLE" | "SETTLING" | "SETTLED"
    /**
     * Storage Units
     * type fullname: webPaaS.StorageUnitEnum
     */
    export type StorageUnitEnum = "GB"
    /**
     * Partner subscription
     * interface fullName: webPaaS.Subscription.Subscription
     */
    export interface Subscription {
        addons: webPaaS.SubscriptionAddon[];
        createdAt: string;
        endDate?: string;
        metadata: webPaaS.SubscriptionMetadata;
        offer: webPaaS.OfferEnum;
        partnerProjectId?: string;
        projectName: string;
        serviceId: string;
        startDate?: string;
        status: webPaaS.StatusEnum;
    }
    /**
     * Subscription addon details
     * interface fullName: webPaaS.SubscriptionAddon.SubscriptionAddon
     */
    export interface SubscriptionAddon {
        planFamilyName: webPaaS.AddonFamilyEnum;
        productName: webPaaS.AddonProductNameEnum;
        serviceName: string;
    }
    /**
     * Subscription metadata
     * interface fullName: webPaaS.SubscriptionMetadata.SubscriptionMetadata
     */
    export interface SubscriptionMetadata {
        customer?: webPaaS.subscription.Customer;
        partnerConsole: string;
        project?: webPaaS.subscriptionMetadata.Project;
    }
    /**
     * Template details
     * interface fullName: webPaaS.Template.Template
     */
    export interface Template {
        description: string;
        features: string[];
        image: string;
        name: string;
        template: string;
    }
    export namespace subscription {
        /**
         * Customer Details
         * interface fullName: webPaaS.subscription.Customer.Customer
         */
        export interface Customer {
            accountName: string;
            customerId: string;
            customerType: webPaaS.CustomerTypeEnum;
        }
        export namespace project {
            /**
             * Add Customer details
             * interface fullName: webPaaS.subscription.project.AddCustomer.AddCustomer
             */
            export interface AddCustomer {
                accountName: string;
            }
        }
    }
    export namespace subscriptionMetadata {
        /**
         * Project Details
         * interface fullName: webPaaS.subscriptionMetadata.Project.Project
         */
        export interface Project {
            availableEnvironments: number;
            availableUserLicenses: number;
            environment: number;
            region: webPaaS.RegionEnum;
            renewDate?: string;
            storage?: number;
            storageUnit?: webPaaS.StorageUnitEnum;
            userLicenses?: number;
            vcpu: number;
        }
    }
}

/**
 * END API /webPaaS Models
 */
export function proxyWebPaaS(ovhEngine: OvhRequestable): WebPaaS {
    return buildOvhProxy(ovhEngine, '/webPaaS');
}
export default proxyWebPaaS;
/**
 * Api model for /webPaaS
 */
export interface WebPaaS {
    capabilities: {
        /**
         * List available regions and templates
         * GET /webPaaS/capabilities
         */
        $get(params: { planCode: webPaaS.OfferEnum }): Promise<webPaaS.Capabilities>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    subscription: {
        /**
         * List your subscriptions
         * GET /webPaaS/subscription
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get information about your subscription
             * GET /webPaaS/subscription/{serviceName}
             */
            $get(): Promise<webPaaS.Subscription>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /webPaaS/subscription/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /webPaaS/subscription/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /webPaaS/subscription/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /webPaaS/subscription/{serviceName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}

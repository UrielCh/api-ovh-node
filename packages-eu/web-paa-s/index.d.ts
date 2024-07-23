import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /webPaaS Models
 * Source: https://eu.api.ovh.com/1.0/webPaaS.json
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
    export type AddonFamilyEnum = "staging_environment" | "storage" | "user_license"
    /**
     * Valid addon product name
     * type fullname: webPaaS.AddonProductNameEnum
     */
    export type AddonProductNameEnum = "additional-staging-environment" | "additional-storage" | "additional-user-license"
    /**
     * addon status
     * type fullname: webPaaS.AddonStatusEnum
     */
    export type AddonStatusEnum = "ACTIVE" | "PENDING" | "SUSPENDED"
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
    export type OfferEnum = "develop-1" | "develop-16" | "develop-2" | "develop-4" | "develop-8" | "expand-1" | "expand-16" | "expand-2" | "expand-4" | "expand-8" | "start-1" | "start-16" | "start-2" | "start-4" | "start-8"
    /**
     * Supported regions for deployment
     * type fullname: webPaaS.RegionEnum
     */
    export type RegionEnum = "GRA7"
    /**
     * Valid states of a subscription
     * type fullname: webPaaS.StatusEnum
     */
    export type StatusEnum = "ACTIVE" | "CANCELED" | "CANCELING" | "CANCELLATION_REQUESTED" | "CLOSED" | "ERROR" | "EXPIRED" | "PENDING" | "SETTLED" | "SETTLING" | "SUSPENDED" | "TERMINATED" | "TO_SETTLE"
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
        quantity: number;
        serviceName: string;
        status: webPaaS.AddonStatusEnum;
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
     * Partner subscription
     * interface fullName: webPaaS.SubscriptionWithIAM.SubscriptionWithIAM
     */
    export interface SubscriptionWithIAM {
        addons: webPaaS.SubscriptionAddon[];
        createdAt: string;
        endDate?: string;
        iam?: iam.ResourceMetadata;
        metadata: webPaaS.SubscriptionMetadata;
        offer: webPaaS.OfferEnum;
        partnerProjectId?: string;
        projectName: string;
        serviceId: string;
        startDate?: string;
        status: webPaaS.StatusEnum;
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
            createdAt: string;
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
        $cache(param?: ICacheOptions | CacheAction): void;
    }
    subscription: {
        /**
         * List your subscriptions
         * GET /webPaaS/subscription
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        $(serviceName: string): {
            /**
             * Get information about your subscription
             * GET /webPaaS/subscription/{serviceName}
             */
            $get(): Promise<webPaaS.Subscription>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /webPaaS/subscription/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            customer: {
                /**
                 * List customers added to a project
                 * GET /webPaaS/subscription/{serviceName}/customer
                 */
                $get(): Promise<webPaaS.subscription.Customer[]>;
                /**
                 * Add customer to the project
                 * POST /webPaaS/subscription/{serviceName}/customer
                 */
                $post(params: { accountName: string }): Promise<webPaaS.subscription.Customer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(customerId: string): {
                    /**
                     * Remove customer from the project
                     * DELETE /webPaaS/subscription/{serviceName}/customer/{customerId}
                     */
                    $delete(): Promise<webPaaS.subscription.Customer>;
                    /**
                     * Get the customer details
                     * GET /webPaaS/subscription/{serviceName}/customer/{customerId}
                     */
                    $get(): Promise<webPaaS.subscription.Customer>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /webPaaS/subscription/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /webPaaS/subscription/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /webPaaS/subscription/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
}

export declare function proxyWebPaaS(ovhEngine: OvhRequestable): WebPaaS;
export default proxyWebPaaS;

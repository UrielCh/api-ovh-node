import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /saas/csp2 Models
 * Source: https://eu.api.ovh.com/1.0/saas/csp2.json
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
export namespace msServices {
    /**
     * Period of time used to determine license statistics
     * type fullname: msServices.LicensePeriodEnum
     */
    export type LicensePeriodEnum = "lastMonth" | "lastQuarter" | "lastWeek" | "lastYear"
}
export namespace saas {
    export namespace csp2 {
        /**
         * Billing statistics for the current period
         * interface fullName: saas.csp2.BillingStatistics.BillingStatistics
         */
        export interface BillingStatistics {
            endDate: string;
            lines: saas.csp2.BillingStatisticsLine[];
            startDate: string;
        }
        /**
         * Billing statistics line.
         * interface fullName: saas.csp2.BillingStatisticsLine.BillingStatisticsLine
         */
        export interface BillingStatisticsLine {
            licenceId: number;
            licenceName: string;
            peakCount: number;
        }
        /**
         * Office license's type
         * type fullname: saas.csp2.LicenseTypeEnum
         */
        export type LicenseTypeEnum = "ADDON" | "NON-SPECIFIC"
        /**
         * Office licence
         * interface fullName: saas.csp2.OfficeLicence.OfficeLicence
         */
        export interface OfficeLicence {
            id: number;
            licenceType: saas.csp2.LicenseTypeEnum;
            limit?: number;
            name: string;
            newSeatsAllowed: boolean;
            newSubscriptionsAllowed: boolean;
        }
        /**
         * Office subscription
         * interface fullName: saas.csp2.OfficeSubscription.OfficeSubscription
         */
        export interface OfficeSubscription {
            creationDate: string;
            id: number;
            lastUpdate?: string;
            licenseId: number;
            quantity: number;
            status: string;
            taskPendingId: number;
        }
        /**
         * Office task
         * interface fullName: saas.csp2.OfficeTask.OfficeTask
         */
        export interface OfficeTask {
            finishDate?: string;
            function: string;
            id: number;
            status: saas.csp2.TaskStatusEnum;
            todoDate: string;
        }
        /**
         * Office tenant
         * interface fullName: saas.csp2.OfficeTenant.OfficeTenant
         */
        export interface OfficeTenant {
            address: string;
            city: string;
            creationDate: string;
            displayName: string;
            email: string;
            firstName: string;
            lastName: string;
            mpnId?: string;
            mpnIssueFlag?: string;
            phone: string;
            serviceName: string;
            status: saas.csp2.ServiceStateEnum;
            zipCode: string;
        }
        /**
         * Office tenant
         * interface fullName: saas.csp2.OfficeTenantWithIAM.OfficeTenantWithIAM
         */
        export interface OfficeTenantWithIAM {
            address: string;
            city: string;
            creationDate: string;
            displayName: string;
            email: string;
            firstName: string;
            iam?: iam.ResourceMetadata;
            lastName: string;
            mpnId?: string;
            mpnIssueFlag?: string;
            phone: string;
            serviceName: string;
            status: saas.csp2.ServiceStateEnum;
            zipCode: string;
        }
        /**
         * Office tenant state
         * type fullname: saas.csp2.ServiceStateEnum
         */
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
        /**
         * License usage statistics.
         * interface fullName: saas.csp2.Statistics.Statistics
         */
        export interface Statistics {
            date: string;
            lines: saas.csp2.StatisticsLine[];
        }
        /**
         * License usage statistics line.
         * interface fullName: saas.csp2.StatisticsLine.StatisticsLine
         */
        export interface StatisticsLine {
            endOfDayCount: number;
            licenceId: number;
            licenceName: string;
            peakCount: number;
        }
        /**
         * Change subscription quantity
         * interface fullName: saas.csp2.SubscriptionChangeQuantityCreation.SubscriptionChangeQuantityCreation
         */
        export interface SubscriptionChangeQuantityCreation {
            quantity: number;
        }
        /**
         * Create subscription
         * interface fullName: saas.csp2.SubscriptionCreation.SubscriptionCreation
         */
        export interface SubscriptionCreation {
            licenseId: number;
            quantity: number;
        }
        /**
         * Create subscription order addon
         * interface fullName: saas.csp2.SubscriptionOrderAddonCreation.SubscriptionOrderAddonCreation
         */
        export interface SubscriptionOrderAddonCreation {
            licenseId: number;
            quantity: number;
        }
        /**
         * Office CSP2 task status
         * type fullname: saas.csp2.TaskStatusEnum
         */
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
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
 * Api model for /saas/csp2
 */
export interface Saas {
    csp2: {
        /**
         * List available services
         * GET /saas/csp2
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /saas/csp2/{serviceName}
             */
            $get(): Promise<saas.csp2.OfficeTenant>;
            /**
             * Alter this object properties
             * PUT /saas/csp2/{serviceName}
             */
            $put(params?: { address?: string, city?: string, creationDate?: string, displayName?: string, email?: string, firstName?: string, lastName?: string, mpnId?: string, mpnIssueFlag?: string, phone?: string, serviceName?: string, status?: saas.csp2.ServiceStateEnum, zipCode?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            billingPeriodPeaks: {
                /**
                 * Get the current billing period's usage peak for each subscription
                 * GET /saas/csp2/{serviceName}/billingPeriodPeaks
                 */
                $get(): Promise<saas.csp2.BillingStatistics>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            orderableLicenses: {
                /**
                 * Licenses available for order
                 * GET /saas/csp2/{serviceName}/orderableLicenses
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /saas/csp2/{serviceName}/orderableLicenses/{id}
                     */
                    $get(): Promise<saas.csp2.OfficeLicence>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /saas/csp2/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /saas/csp2/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            subscription: {
                /**
                 * Subscriptions associated to this office tenant
                 * GET /saas/csp2/{serviceName}/subscription
                 */
                $get(): Promise<number[]>;
                /**
                 * Add a subscription to this tenant
                 * POST /saas/csp2/{serviceName}/subscription
                 */
                $post(params: { licenseId: number, quantity: number }): Promise<saas.csp2.OfficeTask>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(id: number): {
                    /**
                     * Delete a subscription from this tenant
                     * DELETE /saas/csp2/{serviceName}/subscription/{id}
                     */
                    $delete(): Promise<saas.csp2.OfficeTask>;
                    /**
                     * Get this object properties
                     * GET /saas/csp2/{serviceName}/subscription/{id}
                     */
                    $get(): Promise<saas.csp2.OfficeSubscription>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    addonsSubscriptionIds: {
                        /**
                         * Addon subscriptions associated to this office subscription
                         * GET /saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    availableAddonLicenses: {
                        /**
                         * Gives a list of licenses ids that can be ordered as an addon for this subscription
                         * GET /saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    changeQuantity: {
                        /**
                         * Change the quantity of seats in the subscription
                         * POST /saas/csp2/{serviceName}/subscription/{id}/changeQuantity
                         */
                        $post(params: { quantity: number }): Promise<saas.csp2.OfficeTask>;
                    }
                    orderAddon: {
                        /**
                         * Creates a new subscription as an addon for this subscription
                         * POST /saas/csp2/{serviceName}/subscription/{id}/orderAddon
                         */
                        $post(params: { licenseId: number, quantity: number }): Promise<saas.csp2.OfficeTask>;
                    }
                };
            }
            task: {
                /**
                 * Pending tasks of this tenant
                 * GET /saas/csp2/{serviceName}/task
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /saas/csp2/{serviceName}/task/{id}
                     */
                    $get(): Promise<saas.csp2.OfficeTask>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            usageStatistics: {
                /**
                 * Get the usage statistics over the chosen period
                 * GET /saas/csp2/{serviceName}/usageStatistics
                 */
                $get(params: { timePeriod: msServices.LicensePeriodEnum }): Promise<saas.csp2.Statistics[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
        };
    }
}

export declare function proxySaasCsp2(ovhEngine: OvhRequestable): Saas;
export default proxySaasCsp2;

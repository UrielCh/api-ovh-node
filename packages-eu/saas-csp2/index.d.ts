import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /saas/csp2 Models
 */
export declare namespace msServices {
    type LicensePeriodEnum = "lastMonth" | "lastQuarter" | "lastWeek" | "lastYear";
}
export declare namespace saas {
    namespace csp2 {
        interface BillingStatistics {
            endDate: string;
            lines: saas.csp2.BillingStatisticsLine[];
            startDate: string;
        }
        interface BillingStatisticsLine {
            licenceId: number;
            licenceName: string;
            peakCount: number;
        }
        type LicenseTypeEnum = "ADDON" | "NON-SPECIFIC";
        interface OfficeLicence {
            id: number;
            licenceType: saas.csp2.LicenseTypeEnum;
            limit?: number;
            name: string;
            newSeatsAllowed: boolean;
            newSubscriptionsAllowed: boolean;
        }
        interface OfficeSubscription {
            creationDate: string;
            id: number;
            lastUpdate?: string;
            licenseId: number;
            quantity: number;
            status: string;
            taskPendingId: number;
        }
        interface OfficeTask {
            finishDate?: string;
            function: string;
            id: number;
            status: saas.csp2.TaskStatusEnum;
            todoDate: string;
        }
        interface OfficeTenant {
            address: string;
            city: string;
            creationDate: string;
            displayName: string;
            email: string;
            firstName: string;
            lastName: string;
            phone: string;
            serviceName: string;
            status: saas.csp2.ServiceStateEnum;
            zipCode: string;
        }
        type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended";
        interface Statistics {
            date: string;
            lines: saas.csp2.StatisticsLine[];
        }
        interface StatisticsLine {
            endOfDayCount: number;
            licenceId: number;
            licenceName: string;
            peakCount: number;
        }
        type SupportedServiceEnum = "Email" | "Intune" | "OfficeCommunicationsOnline";
        type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo";
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
 * END API /saas/csp2 Models
 */
export declare function proxySaasCsp2(ovhEngine: OvhRequestable): Saas;
export default proxySaasCsp2;
/**
 * Api Proxy model
 */ export interface Saas {
    csp2: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<saas.csp2.OfficeTenant>;
            $put(params?: {
                address?: string;
                city?: string;
                creationDate?: string;
                displayName?: string;
                email?: string;
                firstName?: string;
                lastName?: string;
                phone?: string;
                serviceName?: string;
                status?: saas.csp2.ServiceStateEnum;
                zipCode?: string;
            }): Promise<void>;
            billingPeriodPeaks: {
                $get(): Promise<saas.csp2.BillingStatistics>;
            };
            changeAdministratorPassword: {
                $post(params: {
                    newPassword: string;
                }): Promise<saas.csp2.OfficeTask>;
            };
            configureDomain: {
                $post(params: {
                    domain: string;
                    supportedServices: saas.csp2.SupportedServiceEnum[];
                }): Promise<saas.csp2.OfficeTask>;
            };
            orderableLicenses: {
                $get(): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<saas.csp2.OfficeLicence>;
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
            subscription: {
                $get(): Promise<number[]>;
                $post(params: {
                    licenseId: number;
                    quantity: number;
                }): Promise<saas.csp2.OfficeTask>;
                $(id: number): {
                    $delete(): Promise<saas.csp2.OfficeTask>;
                    $get(): Promise<saas.csp2.OfficeSubscription>;
                    addonsSubscriptionIds: {
                        $get(): Promise<number[]>;
                    };
                    availableAddonLicenses: {
                        $get(): Promise<number[]>;
                    };
                    changeQuantity: {
                        $post(params: {
                            quantity: number;
                        }): Promise<saas.csp2.OfficeTask>;
                    };
                    orderAddon: {
                        $post(params: {
                            licenseId: number;
                            quantity: number;
                        }): Promise<saas.csp2.OfficeTask>;
                    };
                };
            };
            task: {
                $get(): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<saas.csp2.OfficeTask>;
                };
            };
            usageStatistics: {
                $get(params: {
                    timePeriod: msServices.LicensePeriodEnum;
                }): Promise<saas.csp2.Statistics[]>;
            };
        };
    };
    /**
     * Operations about the CSP2 service
     * List available services
     */
    get(path: '/saas/csp2'): () => Promise<string[]>;
    /**
     * Office tenant
     * Get this object properties
     */
    get(path: '/saas/csp2/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<saas.csp2.OfficeTenant>;
    /**
     * billingPeriodPeaks operations
     * Get the curren billing period's usage peak for each subscription
     */
    get(path: '/saas/csp2/{serviceName}/billingPeriodPeaks'): (params: {
        serviceName: string;
    }) => Promise<saas.csp2.BillingStatistics>;
    /**
     * List the saas.csp2.OfficeLicence objects
     * Licenses available for order
     */
    get(path: '/saas/csp2/{serviceName}/orderableLicenses'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Office licence
     * Get this object properties
     */
    get(path: '/saas/csp2/{serviceName}/orderableLicenses/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<saas.csp2.OfficeLicence>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/saas/csp2/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the saas.csp2.OfficeSubscription objects
     * Subscriptions associated to this office tenant
     */
    get(path: '/saas/csp2/{serviceName}/subscription'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Office subscription
     * Get this object properties
     */
    get(path: '/saas/csp2/{serviceName}/subscription/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<saas.csp2.OfficeSubscription>;
    /**
     * addonsSubscriptionIds operations
     * Addon subscriptions associated to this office subscription
     */
    get(path: '/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * availableAddonLicenses operations
     * Gives a list of licenses ids that can be ordered as an addon for this subscription
     */
    get(path: '/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * List the saas.csp2.OfficeTask objects
     * Pending tasks of this tenant
     */
    get(path: '/saas/csp2/{serviceName}/task'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Office task
     * Get this object properties
     */
    get(path: '/saas/csp2/{serviceName}/task/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<saas.csp2.OfficeTask>;
    /**
     * usageStatistics operations
     * Get the usage statistics over the chose period
     */
    get(path: '/saas/csp2/{serviceName}/usageStatistics'): (params: {
        serviceName: string;
        timePeriod: msServices.LicensePeriodEnum;
    }) => Promise<saas.csp2.Statistics[]>;
    /**
     * Office tenant
     * Alter this object properties
     */
    put(path: '/saas/csp2/{serviceName}'): (params: {
        serviceName: string;
        address?: string;
        city?: string;
        creationDate?: string;
        displayName?: string;
        email?: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        status?: saas.csp2.ServiceStateEnum;
        zipCode?: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/saas/csp2/{serviceName}/serviceInfos'): (params: {
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
     * changeAdministratorPassword operations
     * Changes the tenant administrator's password
     */
    post(path: '/saas/csp2/{serviceName}/changeAdministratorPassword'): (params: {
        serviceName: string;
        newPassword: string;
    }) => Promise<saas.csp2.OfficeTask>;
    /**
     * configureDomain operations
     * Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records
     */
    post(path: '/saas/csp2/{serviceName}/configureDomain'): (params: {
        serviceName: string;
        domain: string;
        supportedServices: saas.csp2.SupportedServiceEnum[];
    }) => Promise<saas.csp2.OfficeTask>;
    /**
     * List the saas.csp2.OfficeSubscription objects
     * Add a subscription to this tenant
     */
    post(path: '/saas/csp2/{serviceName}/subscription'): (params: {
        serviceName: string;
        licenseId: number;
        quantity: number;
    }) => Promise<saas.csp2.OfficeTask>;
    /**
     * changeQuantity operations
     * Change the quantity of seats in the subscription
     */
    post(path: '/saas/csp2/{serviceName}/subscription/{id}/changeQuantity'): (params: {
        id: number;
        serviceName: string;
        quantity: number;
    }) => Promise<saas.csp2.OfficeTask>;
    /**
     * orderAddon operations
     * Creates a new subscription as an addon for this subscription
     */
    post(path: '/saas/csp2/{serviceName}/subscription/{id}/orderAddon'): (params: {
        id: number;
        serviceName: string;
        licenseId: number;
        quantity: number;
    }) => Promise<saas.csp2.OfficeTask>;
    /**
     * Office subscription
     * Delete a subscription from this tenant
     */
    delete(path: '/saas/csp2/{serviceName}/subscription/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<saas.csp2.OfficeTask>;
}

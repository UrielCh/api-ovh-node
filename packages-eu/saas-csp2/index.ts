import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /saas/csp2 Models
 * Source: https://eu.api.ovh.com/1.0/saas/csp2.json
 */
export namespace msServices {
    // type fullname: msServices.LicensePeriodEnum
    export type LicensePeriodEnum = "lastMonth" | "lastQuarter" | "lastWeek" | "lastYear"
}
export namespace saas {
    export namespace csp2 {
        // interface fullName: saas.csp2.BillingStatistics.BillingStatistics
        export interface BillingStatistics {
            endDate: string;
            lines: saas.csp2.BillingStatisticsLine[];
            startDate: string;
        }
        // interface fullName: saas.csp2.BillingStatisticsLine.BillingStatisticsLine
        export interface BillingStatisticsLine {
            licenceId: number;
            licenceName: string;
            peakCount: number;
        }
        // type fullname: saas.csp2.LicenseTypeEnum
        export type LicenseTypeEnum = "ADDON" | "NON-SPECIFIC"
        // interface fullName: saas.csp2.OfficeLicence.OfficeLicence
        export interface OfficeLicence {
            id: number;
            licenceType: saas.csp2.LicenseTypeEnum;
            limit?: number;
            name: string;
            newSeatsAllowed: boolean;
            newSubscriptionsAllowed: boolean;
        }
        // interface fullName: saas.csp2.OfficeSubscription.OfficeSubscription
        export interface OfficeSubscription {
            creationDate: string;
            id: number;
            lastUpdate?: string;
            licenseId: number;
            quantity: number;
            status: string;
            taskPendingId: number;
        }
        // interface fullName: saas.csp2.OfficeTask.OfficeTask
        export interface OfficeTask {
            finishDate?: string;
            function: string;
            id: number;
            status: saas.csp2.TaskStatusEnum;
            todoDate: string;
        }
        // interface fullName: saas.csp2.OfficeTenant.OfficeTenant
        export interface OfficeTenant {
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
        // type fullname: saas.csp2.ServiceStateEnum
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended" | "suspending"
        // interface fullName: saas.csp2.Statistics.Statistics
        export interface Statistics {
            date: string;
            lines: saas.csp2.StatisticsLine[];
        }
        // interface fullName: saas.csp2.StatisticsLine.StatisticsLine
        export interface StatisticsLine {
            endOfDayCount: number;
            licenceId: number;
            licenceName: string;
            peakCount: number;
        }
        // type fullname: saas.csp2.SupportedServiceEnum
        export type SupportedServiceEnum = "Email" | "Intune" | "OfficeCommunicationsOnline"
        // type fullname: saas.csp2.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    }
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.Service.Service
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
 * END API /saas/csp2 Models
 */
export function proxySaasCsp2(ovhEngine: OvhRequestable): Saas {
    return buildOvhProxy(ovhEngine, '/saas');
}
export default proxySaasCsp2;
/**
 * Api Proxy model
 */// Apis harmony
// path /saas
export interface Saas{
    csp2: {
        // GET /saas/csp2
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /saas/csp2/{serviceName}
            $get(): Promise<saas.csp2.OfficeTenant>;
            // PUT /saas/csp2/{serviceName}
            $put(params?: {address?: string, city?: string, creationDate?: string, displayName?: string, email?: string, firstName?: string, lastName?: string, phone?: string, serviceName?: string, status?: saas.csp2.ServiceStateEnum, zipCode?: string}): Promise<void>;
            billingPeriodPeaks: {
                // GET /saas/csp2/{serviceName}/billingPeriodPeaks
                $get(): Promise<saas.csp2.BillingStatistics>;
            }
            changeAdministratorPassword: {
                // POST /saas/csp2/{serviceName}/changeAdministratorPassword
                $post(params: {newPassword: string}): Promise<saas.csp2.OfficeTask>;
            }
            configureDomain: {
                // POST /saas/csp2/{serviceName}/configureDomain
                $post(params: {domain: string, supportedServices: saas.csp2.SupportedServiceEnum[]}): Promise<saas.csp2.OfficeTask>;
            }
            orderableLicenses: {
                // GET /saas/csp2/{serviceName}/orderableLicenses
                $get(): Promise<number[]>;
                $(id: number): {
                    // GET /saas/csp2/{serviceName}/orderableLicenses/{id}
                    $get(): Promise<saas.csp2.OfficeLicence>;
                };
            }
            serviceInfos: {
                // GET /saas/csp2/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /saas/csp2/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            subscription: {
                // GET /saas/csp2/{serviceName}/subscription
                $get(): Promise<number[]>;
                // POST /saas/csp2/{serviceName}/subscription
                $post(params: {licenseId: number, quantity: number}): Promise<saas.csp2.OfficeTask>;
                $(id: number): {
                    // DELETE /saas/csp2/{serviceName}/subscription/{id}
                    $delete(): Promise<saas.csp2.OfficeTask>;
                    // GET /saas/csp2/{serviceName}/subscription/{id}
                    $get(): Promise<saas.csp2.OfficeSubscription>;
                    addonsSubscriptionIds: {
                        // GET /saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds
                        $get(): Promise<number[]>;
                    }
                    availableAddonLicenses: {
                        // GET /saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses
                        $get(): Promise<number[]>;
                    }
                    changeQuantity: {
                        // POST /saas/csp2/{serviceName}/subscription/{id}/changeQuantity
                        $post(params: {quantity: number}): Promise<saas.csp2.OfficeTask>;
                    }
                    orderAddon: {
                        // POST /saas/csp2/{serviceName}/subscription/{id}/orderAddon
                        $post(params: {licenseId: number, quantity: number}): Promise<saas.csp2.OfficeTask>;
                    }
                };
            }
            task: {
                // GET /saas/csp2/{serviceName}/task
                $get(): Promise<number[]>;
                $(id: number): {
                    // GET /saas/csp2/{serviceName}/task/{id}
                    $get(): Promise<saas.csp2.OfficeTask>;
                };
            }
            usageStatistics: {
                // GET /saas/csp2/{serviceName}/usageStatistics
                $get(params: {timePeriod: msServices.LicensePeriodEnum}): Promise<saas.csp2.Statistics[]>;
            }
        };
    }
}

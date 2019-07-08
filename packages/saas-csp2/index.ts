import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /saas/csp2 Models
 */
export namespace msServices {
    //msServices.LicensePeriodEnum
    export type LicensePeriodEnum = "lastMonth" | "lastQuarter" | "lastWeek" | "lastYear"
}
export namespace saas {
    export namespace csp2 {
        //saas.csp2.BillingStatistics
        // fullName: saas.csp2.BillingStatistics.BillingStatistics
        export interface BillingStatistics {
            endDate: string;
            lines: saas.csp2.BillingStatisticsLine[];
            startDate: string;
        }
        //saas.csp2.BillingStatisticsLine
        // fullName: saas.csp2.BillingStatisticsLine.BillingStatisticsLine
        export interface BillingStatisticsLine {
            licenceId: number;
            licenceName: string;
            peakCount: number;
        }
        //saas.csp2.LicenseTypeEnum
        export type LicenseTypeEnum = "ADDON" | "NON-SPECIFIC"
        //saas.csp2.OfficeLicence
        // fullName: saas.csp2.OfficeLicence.OfficeLicence
        export interface OfficeLicence {
            id: number;
            licenceType: saas.csp2.LicenseTypeEnum;
            limit?: number;
            name: string;
        }
        //saas.csp2.OfficeSubscription
        // fullName: saas.csp2.OfficeSubscription.OfficeSubscription
        export interface OfficeSubscription {
            creationDate: string;
            id: number;
            lastUpdate?: string;
            licenseId: number;
            quantity: number;
            status: string;
            taskPendingId: number;
        }
        //saas.csp2.OfficeTask
        // fullName: saas.csp2.OfficeTask.OfficeTask
        export interface OfficeTask {
            finishDate?: string;
            function: string;
            id: number;
            status: saas.csp2.TaskStatusEnum;
            todoDate: string;
        }
        //saas.csp2.OfficeTenant
        // fullName: saas.csp2.OfficeTenant.OfficeTenant
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
        //saas.csp2.ServiceStateEnum
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended"
        //saas.csp2.Statistics
        // fullName: saas.csp2.Statistics.Statistics
        export interface Statistics {
            date: string;
            lines: saas.csp2.StatisticsLine[];
        }
        //saas.csp2.StatisticsLine
        // fullName: saas.csp2.StatisticsLine.StatisticsLine
        export interface StatisticsLine {
            endOfDayCount: number;
            licenceId: number;
            licenceName: string;
            peakCount: number;
        }
        //saas.csp2.SupportedServiceEnum
        export type SupportedServiceEnum = "Email" | "Intune" | "OfficeCommunicationsOnline"
        //saas.csp2.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
                $post(params?: {newPassword: string}): Promise<saas.csp2.OfficeTask>;
            }
            configureDomain: {
                // POST /saas/csp2/{serviceName}/configureDomain
                $post(params?: {domain: string, supportedServices: saas.csp2.SupportedServiceEnum[]}): Promise<saas.csp2.OfficeTask>;
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
                $post(params?: {licenseId: number, quantity: number}): Promise<saas.csp2.OfficeTask>;
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
                        $post(params?: {quantity: number}): Promise<saas.csp2.OfficeTask>;
                    }
                    orderAddon: {
                        // POST /saas/csp2/{serviceName}/subscription/{id}/orderAddon
                        $post(params?: {licenseId: number, quantity: number}): Promise<saas.csp2.OfficeTask>;
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
                $get(params?: {timePeriod: msServices.LicensePeriodEnum}): Promise<saas.csp2.Statistics[]>;
            }
        };
    }
// Api
  /**
   * Operations about the CSP2 service
   * List available services
   */
  get(path: '/saas/csp2'): () => Promise<string[]>;
  /**
   * Office tenant
   * Get this object properties
   */
  get(path: '/saas/csp2/{serviceName}'): (params: {serviceName: string}) => Promise<saas.csp2.OfficeTenant>;
  /**
   * billingPeriodPeaks operations
   * Get the curren billing period's usage peak for each subscription
   */
  get(path: '/saas/csp2/{serviceName}/billingPeriodPeaks'): (params: {serviceName: string}) => Promise<saas.csp2.BillingStatistics>;
  /**
   * List the saas.csp2.OfficeLicence objects
   * Licenses available for order
   */
  get(path: '/saas/csp2/{serviceName}/orderableLicenses'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Office licence
   * Get this object properties
   */
  get(path: '/saas/csp2/{serviceName}/orderableLicenses/{id}'): (params: {id: number, serviceName: string}) => Promise<saas.csp2.OfficeLicence>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/saas/csp2/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the saas.csp2.OfficeSubscription objects
   * Subscriptions associated to this office tenant
   */
  get(path: '/saas/csp2/{serviceName}/subscription'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Office subscription
   * Get this object properties
   */
  get(path: '/saas/csp2/{serviceName}/subscription/{id}'): (params: {id: number, serviceName: string}) => Promise<saas.csp2.OfficeSubscription>;
  /**
   * addonsSubscriptionIds operations
   * Addon subscriptions associated to this office subscription
   */
  get(path: '/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds'): (params: {id: number, serviceName: string}) => Promise<number[]>;
  /**
   * availableAddonLicenses operations
   * Gives a list of licenses ids that can be ordered as an addon for this subscription
   */
  get(path: '/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses'): (params: {id: number, serviceName: string}) => Promise<number[]>;
  /**
   * List the saas.csp2.OfficeTask objects
   * Pending tasks of this tenant
   */
  get(path: '/saas/csp2/{serviceName}/task'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Office task
   * Get this object properties
   */
  get(path: '/saas/csp2/{serviceName}/task/{id}'): (params: {id: number, serviceName: string}) => Promise<saas.csp2.OfficeTask>;
  /**
   * usageStatistics operations
   * Get the usage statistics over the chose period
   */
  get(path: '/saas/csp2/{serviceName}/usageStatistics'): (params: {serviceName: string, timePeriod: msServices.LicensePeriodEnum}) => Promise<saas.csp2.Statistics[]>;
  /**
   * Office tenant
   * Alter this object properties
   */
  put(path: '/saas/csp2/{serviceName}'): (params: {serviceName: string, address?: string, city?: string, creationDate?: string, displayName?: string, email?: string, firstName?: string, lastName?: string, phone?: string, status?: saas.csp2.ServiceStateEnum, zipCode?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/saas/csp2/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * changeAdministratorPassword operations
   * Changes the tenant administrator's password
   */
  post(path: '/saas/csp2/{serviceName}/changeAdministratorPassword'): (params: {serviceName: string, newPassword: string}) => Promise<saas.csp2.OfficeTask>;
  /**
   * configureDomain operations
   * Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records
   */
  post(path: '/saas/csp2/{serviceName}/configureDomain'): (params: {serviceName: string, domain: string, supportedServices: saas.csp2.SupportedServiceEnum[]}) => Promise<saas.csp2.OfficeTask>;
  /**
   * List the saas.csp2.OfficeSubscription objects
   * Add a subscription to this tenant
   */
  post(path: '/saas/csp2/{serviceName}/subscription'): (params: {serviceName: string, licenseId: number, quantity: number}) => Promise<saas.csp2.OfficeTask>;
  /**
   * changeQuantity operations
   * Change the quantity of seats in the subscription
   */
  post(path: '/saas/csp2/{serviceName}/subscription/{id}/changeQuantity'): (params: {id: number, serviceName: string, quantity: number}) => Promise<saas.csp2.OfficeTask>;
  /**
   * orderAddon operations
   * Creates a new subscription as an addon for this subscription
   */
  post(path: '/saas/csp2/{serviceName}/subscription/{id}/orderAddon'): (params: {id: number, serviceName: string, licenseId: number, quantity: number}) => Promise<saas.csp2.OfficeTask>;
  /**
   * Office subscription
   * Delete a subscription from this tenant
   */
  delete(path: '/saas/csp2/{serviceName}/subscription/{id}'): (params: {id: number, serviceName: string}) => Promise<saas.csp2.OfficeTask>;
}
/**
 * classic Model
 */
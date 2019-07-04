import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace msServices {
    //msServices.LicensePeriodEnum
    export type LicensePeriodEnum = "lastMonth" | "lastQuarter" | "lastWeek" | "lastYear"
}
export namespace saas {
    export namespace csp2 {
        //saas.csp2.BillingStatistics
        // fullName: saas.csp2.BillingStatistics.BillingStatistics
        export interface BillingStatistics {
            endDate?: string;
            lines?: OVH.saas.csp2.BillingStatisticsLine[];
            startDate?: string;
        }
        //saas.csp2.BillingStatisticsLine
        // fullName: saas.csp2.BillingStatisticsLine.BillingStatisticsLine
        export interface BillingStatisticsLine {
            licenceId?: number;
            licenceName?: string;
            peakCount?: number;
        }
        //saas.csp2.LicenseTypeEnum
        export type LicenseTypeEnum = "ADDON" | "NON-SPECIFIC"
        //saas.csp2.OfficeLicence
        // fullName: saas.csp2.OfficeLicence.OfficeLicence
        export interface OfficeLicence {
            id?: number;
            licenceType?: OVH.saas.csp2.LicenseTypeEnum;
            limit?: number;
            name?: string;
        }
        //saas.csp2.OfficeSubscription
        // fullName: saas.csp2.OfficeSubscription.OfficeSubscription
        export interface OfficeSubscription {
            creationDate?: string;
            id?: number;
            lastUpdate?: string;
            licenseId?: number;
            quantity?: number;
            status?: string;
            taskPendingId?: number;
        }
        //saas.csp2.OfficeTask
        // fullName: saas.csp2.OfficeTask.OfficeTask
        export interface OfficeTask {
            finishDate?: string;
            function?: string;
            id?: number;
            status?: OVH.saas.csp2.TaskStatusEnum;
            todoDate?: string;
        }
        //saas.csp2.OfficeTenant
        // fullName: saas.csp2.OfficeTenant.OfficeTenant
        export interface OfficeTenant {
            address?: string;
            city?: string;
            creationDate?: string;
            displayName?: string;
            email?: string;
            firstName?: string;
            lastName?: string;
            phone?: string;
            serviceName?: string;
            status?: OVH.saas.csp2.ServiceStateEnum;
            zipCode?: string;
        }
        //saas.csp2.ServiceStateEnum
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended"
        //saas.csp2.Statistics
        // fullName: saas.csp2.Statistics.Statistics
        export interface Statistics {
            date?: string;
            lines?: OVH.saas.csp2.StatisticsLine[];
        }
        //saas.csp2.StatisticsLine
        // fullName: saas.csp2.StatisticsLine.StatisticsLine
        export interface StatisticsLine {
            endOfDayCount?: number;
            licenceId?: number;
            licenceName?: string;
            peakCount?: number;
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
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /saas
export interface Saas {
    csp2:  {
        // GET /saas/csp2
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /saas/csp2/{serviceName}
            GET(): Promise<saas.csp2.OfficeTenant>;
            // PUT /saas/csp2/{serviceName}
            PUT(body?: {body: saas.csp2.OfficeTenant}): Promise<void>;
            orderableLicenses:  {
                // GET /saas/csp2/{serviceName}/orderableLicenses
                GET(): Promise<number[]>;
                [keys: string]: {
                    // GET /saas/csp2/{serviceName}/orderableLicenses/{id}
                    GET(): Promise<saas.csp2.OfficeLicence>;
                } | any
            }
            usageStatistics:  {
                // GET /saas/csp2/{serviceName}/usageStatistics
                GET(param?: {timePeriod: msServices.LicensePeriodEnum}): Promise<saas.csp2.Statistics[]>;
            }
            serviceInfos:  {
                // GET /saas/csp2/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /saas/csp2/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            task:  {
                // GET /saas/csp2/{serviceName}/task
                GET(): Promise<number[]>;
                [keys: string]: {
                    // GET /saas/csp2/{serviceName}/task/{id}
                    GET(): Promise<saas.csp2.OfficeTask>;
                } | any
            }
            changeAdministratorPassword:  {
                // POST /saas/csp2/{serviceName}/changeAdministratorPassword
                POST(body?: {newPassword: string}): Promise<saas.csp2.OfficeTask>;
            }
            configureDomain:  {
                // POST /saas/csp2/{serviceName}/configureDomain
                POST(body?: {supportedServices: saas.csp2.SupportedServiceEnum[], domain: string}): Promise<saas.csp2.OfficeTask>;
            }
            subscription:  {
                // GET /saas/csp2/{serviceName}/subscription
                GET(): Promise<number[]>;
                // POST /saas/csp2/{serviceName}/subscription
                POST(body?: {quantity: number, licenseId: number}): Promise<saas.csp2.OfficeTask>;
                [keys: string]: {
                    // GET /saas/csp2/{serviceName}/subscription/{id}
                    GET(): Promise<saas.csp2.OfficeSubscription>;
                    // DELETE /saas/csp2/{serviceName}/subscription/{id}
                    DELETE(): Promise<saas.csp2.OfficeTask>;
                    orderAddon:  {
                        // POST /saas/csp2/{serviceName}/subscription/{id}/orderAddon
                        POST(body?: {licenseId: number, quantity: number}): Promise<saas.csp2.OfficeTask>;
                    }
                    availableAddonLicenses:  {
                        // GET /saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses
                        GET(): Promise<number[]>;
                    }
                    changeQuantity:  {
                        // POST /saas/csp2/{serviceName}/subscription/{id}/changeQuantity
                        POST(body?: {quantity: number}): Promise<saas.csp2.OfficeTask>;
                    }
                    addonsSubscriptionIds:  {
                        // GET /saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds
                        GET(): Promise<number[]>;
                    }
                } | any
            }
            billingPeriodPeaks:  {
                // GET /saas/csp2/{serviceName}/billingPeriodPeaks
                GET(): Promise<saas.csp2.BillingStatistics>;
            }
        } | any
    }
}
// Api
type PathsSaasCsp2GET = '/saas/csp2/{serviceName}' |
  '/saas/csp2/{serviceName}/orderableLicenses/{id}' |
  '/saas/csp2/{serviceName}/orderableLicenses' |
  '/saas/csp2/{serviceName}/usageStatistics' |
  '/saas/csp2/{serviceName}/serviceInfos' |
  '/saas/csp2/{serviceName}/task' |
  '/saas/csp2/{serviceName}/task/{id}' |
  '/saas/csp2/{serviceName}/subscription' |
  '/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses' |
  '/saas/csp2/{serviceName}/subscription/{id}' |
  '/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds' |
  '/saas/csp2/{serviceName}/billingPeriodPeaks' |
  '/saas/csp2';

type PathsSaasCsp2PUT = '/saas/csp2/{serviceName}' |
  '/saas/csp2/{serviceName}/serviceInfos';

type PathsSaasCsp2POST = '/saas/csp2/{serviceName}/changeAdministratorPassword' |
  '/saas/csp2/{serviceName}/configureDomain' |
  '/saas/csp2/{serviceName}/subscription' |
  '/saas/csp2/{serviceName}/subscription/{id}/orderAddon' |
  '/saas/csp2/{serviceName}/subscription/{id}/changeQuantity';

type PathsSaasCsp2DELETE = '/saas/csp2/{serviceName}/subscription/{id}';

export class ApiSaasCsp2 extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the CSP2 service
   * List available services
   */
  public get(path: '/saas/csp2'): Promise<string[]>;
  /**
   * Office tenant
   * Get this object properties
   */
  public get(path: '/saas/csp2/{serviceName}', params: {serviceName: string}): Promise<saas.csp2.OfficeTenant>;
  /**
   * billingPeriodPeaks operations
   * Get the curren billing period's usage peak for each subscription
   */
  public get(path: '/saas/csp2/{serviceName}/billingPeriodPeaks', params: {serviceName: string}): Promise<saas.csp2.BillingStatistics>;
  /**
   * List the saas.csp2.OfficeLicence objects
   * Licenses available for order
   */
  public get(path: '/saas/csp2/{serviceName}/orderableLicenses', params: {serviceName: string}): Promise<number[]>;
  /**
   * Office licence
   * Get this object properties
   */
  public get(path: '/saas/csp2/{serviceName}/orderableLicenses/{id}', params: {serviceName: string, id: string}): Promise<saas.csp2.OfficeLicence>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/saas/csp2/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the saas.csp2.OfficeSubscription objects
   * Subscriptions associated to this office tenant
   */
  public get(path: '/saas/csp2/{serviceName}/subscription', params: {serviceName: string}): Promise<number[]>;
  /**
   * Office subscription
   * Get this object properties
   */
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}', params: {serviceName: string, id: string}): Promise<saas.csp2.OfficeSubscription>;
  /**
   * addonsSubscriptionIds operations
   * Addon subscriptions associated to this office subscription
   */
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds', params: {serviceName: string, id: string}): Promise<number[]>;
  /**
   * availableAddonLicenses operations
   * Gives a list of licenses ids that can be ordered as an addon for this subscription
   */
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses', params: {serviceName: string, id: string}): Promise<number[]>;
  /**
   * List the saas.csp2.OfficeTask objects
   * Pending tasks of this tenant
   */
  public get(path: '/saas/csp2/{serviceName}/task', params: {serviceName: string}): Promise<number[]>;
  /**
   * Office task
   * Get this object properties
   */
  public get(path: '/saas/csp2/{serviceName}/task/{id}', params: {serviceName: string, id: string}): Promise<saas.csp2.OfficeTask>;
  /**
   * usageStatistics operations
   * Get the usage statistics over the chose period
   */
  public get(path: '/saas/csp2/{serviceName}/usageStatistics', params: {serviceName: string, timePeriod: OVH.msServices.LicensePeriodEnum}): Promise<saas.csp2.Statistics[]>;
  public get(path: PathsSaasCsp2GET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Office tenant
   * Alter this object properties
   */
  public put(path: '/saas/csp2/{serviceName}', params: {serviceName: string, address?: string, city?: string, creationDate?: string, displayName?: string, email?: string, firstName?: string, lastName?: string, phone?: string, status?: OVH.saas.csp2.ServiceStateEnum, zipCode?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/saas/csp2/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsSaasCsp2PUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changeAdministratorPassword operations
   * Changes the tenant administrator's password
   */
  public post(path: '/saas/csp2/{serviceName}/changeAdministratorPassword', params: {serviceName: string, newPassword: string}): Promise<saas.csp2.OfficeTask>;
  /**
   * configureDomain operations
   * Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records
   */
  public post(path: '/saas/csp2/{serviceName}/configureDomain', params: {serviceName: string, domain: string, supportedServices: OVH.saas.csp2.SupportedServiceEnum[]}): Promise<saas.csp2.OfficeTask>;
  /**
   * List the saas.csp2.OfficeSubscription objects
   * Add a subscription to this tenant
   */
  public post(path: '/saas/csp2/{serviceName}/subscription', params: {serviceName: string, licenseId: number, quantity: number}): Promise<saas.csp2.OfficeTask>;
  /**
   * changeQuantity operations
   * Change the quantity of seats in the subscription
   */
  public post(path: '/saas/csp2/{serviceName}/subscription/{id}/changeQuantity', params: {serviceName: string, id: string, quantity: number}): Promise<saas.csp2.OfficeTask>;
  /**
   * orderAddon operations
   * Creates a new subscription as an addon for this subscription
   */
  public post(path: '/saas/csp2/{serviceName}/subscription/{id}/orderAddon', params: {serviceName: string, id: string, licenseId: number, quantity: number}): Promise<saas.csp2.OfficeTask>;
  public post(path: PathsSaasCsp2POST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Office subscription
   * Delete a subscription from this tenant
   */
  public delete(path: '/saas/csp2/{serviceName}/subscription/{id}', params: {serviceName: string, id: string}): Promise<saas.csp2.OfficeTask>;
  public delete(path: PathsSaasCsp2DELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/office Models
 */
export namespace license {
    export namespace office {
        //license.office.DomainStateEnum
        export type DomainStateEnum = "ok" | "unverified"
        //license.office.LicenceEnum
        export type LicenceEnum = "officeBusiness" | "officeProPlus"
        //license.office.OfficeDomain
        // fullName: license.office.OfficeDomain.OfficeDomain
        export interface OfficeDomain {
            domainName: string;
            status: license.office.DomainStateEnum;
            txtEntry: string;
        }
        //license.office.OfficeSubscription
        // fullName: license.office.OfficeSubscription.OfficeSubscription
        export interface OfficeSubscription {
            creationDate: string;
            id: number;
            lastUpdate?: string;
            licenseId: number;
            quantity: number;
            status: string;
            taskPendingId: number;
        }
        //license.office.OfficeTask
        // fullName: license.office.OfficeTask.OfficeTask
        export interface OfficeTask {
            finishDate?: string;
            function: string;
            id: number;
            status: license.office.TaskStatusEnum;
            todoDate: string;
        }
        //license.office.OfficeTenant
        // fullName: license.office.OfficeTenant.OfficeTenant
        export interface OfficeTenant {
            address: string;
            city: string;
            creationDate: string;
            displayName: string;
            firstName: string;
            lastName: string;
            phone: string;
            serviceType: license.office.ServiceTypeEnum;
            status: license.office.ServiceStateEnum;
            zipCode: string;
        }
        //license.office.OfficeUser
        // fullName: license.office.OfficeUser.OfficeUser
        export interface OfficeUser {
            activationEmail: string;
            deleteAtExpiration: boolean;
            firstName: string;
            isVirtual: boolean;
            lastName: string;
            licences: license.office.LicenceEnum[];
            status: license.office.UserStateEnum;
            taskPendingId: number;
        }
        //license.office.ServiceStateEnum
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended"
        //license.office.ServiceTypeEnum
        export type ServiceTypeEnum = "payAsYouGo" | "prepaid"
        //license.office.Statistic
        // fullName: license.office.Statistic.Statistic
        export interface Statistic {
            available: number;
            licenseId: number;
            used: number;
        }
        //license.office.Statistics
        // fullName: license.office.Statistics.Statistics
        export interface Statistics {
            date: string;
            lines: license.office.StatisticsLine[];
        }
        //license.office.StatisticsLine
        // fullName: license.office.StatisticsLine.StatisticsLine
        export interface StatisticsLine {
            endOfDayCount: number;
            licenceType: license.office.LicenceEnum;
            peakCount: number;
        }
        //license.office.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        //license.office.UserStateEnum
        export type UserStateEnum = "creating" | "deleting" | "ok"
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
 * END API /license/office Models
 */
export function proxyLicenseOffice(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseOffice;
/**
 * Api Proxy model
 */// Apis harmony
// path /license
export interface License{
    office: {
        // GET /license/office
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /license/office/{serviceName}
            $get(): Promise<license.office.OfficeTenant>;
            // PUT /license/office/{serviceName}
            $put(body?: {address?: string, city?: string, creationDate?: string, displayName?: string, firstName?: string, lastName?: string, phone?: string, serviceType?: license.office.ServiceTypeEnum, status?: license.office.ServiceStateEnum, zipCode?: string}): Promise<void>;
            domain: {
                // GET /license/office/{serviceName}/domain
                $get(): Promise<string[]>;
                $(domainName: string): {
                    // GET /license/office/{serviceName}/domain/{domainName}
                    $get(): Promise<license.office.OfficeDomain>;
                };
            }
            pendingTask: {
                // GET /license/office/{serviceName}/pendingTask
                $get(): Promise<number[]>;
                $(id: number): {
                    // GET /license/office/{serviceName}/pendingTask/{id}
                    $get(): Promise<license.office.OfficeTask>;
                };
            }
            serviceInfos: {
                // GET /license/office/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/office/{serviceName}/serviceInfos
                $put(body?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            usageStatistics: {
                // GET /license/office/{serviceName}/usageStatistics
                $get(param?: {from: string, to: string}): Promise<license.office.Statistics[]>;
            }
            user: {
                // GET /license/office/{serviceName}/user
                $get(param?: {activationEmail?: string, firstName?: string, lastName?: string, licences?: license.office.LicenceEnum[]}): Promise<string[]>;
                // POST /license/office/{serviceName}/user
                $post(body?: {domain: string, firstName?: string, lastName?: string, licence: license.office.LicenceEnum, login: string}): Promise<license.office.OfficeTask>;
                $(activationEmail: string): {
                    // DELETE /license/office/{serviceName}/user/{activationEmail}
                    $delete(): Promise<license.office.OfficeTask>;
                    // GET /license/office/{serviceName}/user/{activationEmail}
                    $get(): Promise<license.office.OfficeUser>;
                    // PUT /license/office/{serviceName}/user/{activationEmail}
                    $put(body?: {activationEmail?: string, deleteAtExpiration?: boolean, firstName?: string, isVirtual?: boolean, lastName?: string, licences?: license.office.LicenceEnum[], status?: license.office.UserStateEnum, taskPendingId?: number}): Promise<void>;
                    changePassword: {
                        // POST /license/office/{serviceName}/user/{activationEmail}/changePassword
                        $post(body?: {notifyEmail?: string, password?: string, shouldSendMail: boolean}): Promise<license.office.OfficeTask>;
                    }
                };
            }
        };
    }
// Api
  /**
   * Operations about the OFFICE service
   * List available services
   */
  get(path: '/license/office'): () => Promise<string[]>;
  /**
   * Office tenant
   * Get this object properties
   */
  get(path: '/license/office/{serviceName}'): (params: {serviceName: string}) => Promise<license.office.OfficeTenant>;
  /**
   * List the license.office.OfficeDomain objects
   * Domain associated to this office tenant
   */
  get(path: '/license/office/{serviceName}/domain'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Office domain
   * Get this object properties
   */
  get(path: '/license/office/{serviceName}/domain/{domainName}'): (params: {domainName: string, serviceName: string}) => Promise<license.office.OfficeDomain>;
  /**
   * List the license.office.OfficeTask objects
   * Tasks associated to this office tenant
   */
  get(path: '/license/office/{serviceName}/pendingTask'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Office task
   * Get this object properties
   */
  get(path: '/license/office/{serviceName}/pendingTask/{id}'): (params: {id: number, serviceName: string}) => Promise<license.office.OfficeTask>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/license/office/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * usageStatistics operations
   * Shows the subscriptions' usage statistics for the given time period
   */
  get(path: '/license/office/{serviceName}/usageStatistics'): (params: {serviceName: string, from: string, to: string}) => Promise<license.office.Statistics[]>;
  /**
   * List the license.office.OfficeUser objects
   * Accounts associated to this office tenant
   */
  get(path: '/license/office/{serviceName}/user'): (params: {serviceName: string, activationEmail?: string, firstName?: string, lastName?: string, licences?: license.office.LicenceEnum[]}) => Promise<string[]>;
  /**
   * Office user
   * Get this object properties
   */
  get(path: '/license/office/{serviceName}/user/{activationEmail}'): (params: {activationEmail: string, serviceName: string}) => Promise<license.office.OfficeUser>;
  /**
   * Office tenant
   * Alter this object properties
   */
  put(path: '/license/office/{serviceName}'): (params: {serviceName: string, address?: string, city?: string, creationDate?: string, displayName?: string, firstName?: string, lastName?: string, phone?: string, serviceType?: license.office.ServiceTypeEnum, status?: license.office.ServiceStateEnum, zipCode?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/license/office/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Office user
   * Alter this object properties
   */
  put(path: '/license/office/{serviceName}/user/{activationEmail}'): (params: {activationEmail: string, serviceName: string, deleteAtExpiration?: boolean, firstName?: string, isVirtual?: boolean, lastName?: string, licences?: license.office.LicenceEnum[], status?: license.office.UserStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * List the license.office.OfficeUser objects
   * Create new office user
   */
  post(path: '/license/office/{serviceName}/user'): (params: {serviceName: string, domain: string, firstName?: string, lastName?: string, licence: license.office.LicenceEnum, login: string}) => Promise<license.office.OfficeTask>;
  /**
   * changePassword operations
   * Change or reset  user's password
   */
  post(path: '/license/office/{serviceName}/user/{activationEmail}/changePassword'): (params: {activationEmail: string, serviceName: string, notifyEmail?: string, password?: string, shouldSendMail: boolean}) => Promise<license.office.OfficeTask>;
  /**
   * Office user
   * Delete existing office user
   */
  delete(path: '/license/office/{serviceName}/user/{activationEmail}'): (params: {activationEmail: string, serviceName: string}) => Promise<license.office.OfficeTask>;
}
/**
 * classic Model
 */
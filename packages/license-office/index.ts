import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
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
            status: OVH.license.office.DomainStateEnum;
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
            status: OVH.license.office.TaskStatusEnum;
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
            serviceType: OVH.license.office.ServiceTypeEnum;
            status: OVH.license.office.ServiceStateEnum;
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
            licences: OVH.license.office.LicenceEnum[];
            status: OVH.license.office.UserStateEnum;
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
            lines: OVH.license.office.StatisticsLine[];
        }
        //license.office.StatisticsLine
        // fullName: license.office.StatisticsLine.StatisticsLine
        export interface StatisticsLine {
            endOfDayCount: number;
            licenceType: OVH.license.office.LicenceEnum;
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
        renew?: OVH.service.RenewType;
        renewalType: OVH.service.RenewalTypeEnum;
        serviceId: number;
        status: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /license
export interface License{
    office: {
        // GET /license/office
        $get(): Promise<string[]>;
        [keys: string]:{
            // GET /license/office/{serviceName}
            $get(): Promise<license.office.OfficeTenant>;
            // PUT /license/office/{serviceName}
            $put(body?: {body: license.office.OfficeTenant}): Promise<void>;
            domain: {
                // GET /license/office/{serviceName}/domain
                $get(): Promise<string[]>;
                [keys: string]:{
                    // GET /license/office/{serviceName}/domain/{domainName}
                    $get(): Promise<license.office.OfficeDomain>;
                } | any
            }
            pendingTask: {
                // GET /license/office/{serviceName}/pendingTask
                $get(): Promise<number[]>;
                [keys: string]:{
                    // GET /license/office/{serviceName}/pendingTask/{id}
                    $get(): Promise<license.office.OfficeTask>;
                } | any
            }
            serviceInfos: {
                // GET /license/office/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/office/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
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
                [keys: string]:{
                    // DELETE /license/office/{serviceName}/user/{activationEmail}
                    $delete(): Promise<license.office.OfficeTask>;
                    // GET /license/office/{serviceName}/user/{activationEmail}
                    $get(): Promise<license.office.OfficeUser>;
                    // PUT /license/office/{serviceName}/user/{activationEmail}
                    $put(body?: {body: license.office.OfficeUser}): Promise<void>;
                    changePassword: {
                        // POST /license/office/{serviceName}/user/{activationEmail}/changePassword
                        $post(body?: {notifyEmail?: string, password?: string, shouldSendMail: boolean}): Promise<license.office.OfficeTask>;
                    }
                } | any
            }
        } | any
    }
}
// Api
type PathsLicenseOfficeGET = '/license/office' |
  '/license/office/{serviceName}' |
  '/license/office/{serviceName}/domain' |
  '/license/office/{serviceName}/domain/{domainName}' |
  '/license/office/{serviceName}/pendingTask' |
  '/license/office/{serviceName}/pendingTask/{id}' |
  '/license/office/{serviceName}/serviceInfos' |
  '/license/office/{serviceName}/usageStatistics' |
  '/license/office/{serviceName}/user' |
  '/license/office/{serviceName}/user/{activationEmail}';

type PathsLicenseOfficePUT = '/license/office/{serviceName}' |
  '/license/office/{serviceName}/serviceInfos' |
  '/license/office/{serviceName}/user/{activationEmail}';

type PathsLicenseOfficePOST = '/license/office/{serviceName}/user' |
  '/license/office/{serviceName}/user/{activationEmail}/changePassword';

type PathsLicenseOfficeDELETE = '/license/office/{serviceName}/user/{activationEmail}';

export class ApiLicenseOffice extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the OFFICE service
   * List available services
   */
  public get(path: '/license/office'): Promise<string[]>;
  /**
   * Office tenant
   * Get this object properties
   */
  public get(path: '/license/office/{serviceName}', params: {serviceName: string}): Promise<license.office.OfficeTenant>;
  /**
   * List the license.office.OfficeDomain objects
   * Domain associated to this office tenant
   */
  public get(path: '/license/office/{serviceName}/domain', params: {serviceName: string}): Promise<string[]>;
  /**
   * Office domain
   * Get this object properties
   */
  public get(path: '/license/office/{serviceName}/domain/{domainName}', params: {domainName: string, serviceName: string}): Promise<license.office.OfficeDomain>;
  /**
   * List the license.office.OfficeTask objects
   * Tasks associated to this office tenant
   */
  public get(path: '/license/office/{serviceName}/pendingTask', params: {serviceName: string}): Promise<number[]>;
  /**
   * Office task
   * Get this object properties
   */
  public get(path: '/license/office/{serviceName}/pendingTask/{id}', params: {id: number, serviceName: string}): Promise<license.office.OfficeTask>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/license/office/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * usageStatistics operations
   * Shows the subscriptions' usage statistics for the given time period
   */
  public get(path: '/license/office/{serviceName}/usageStatistics', params: {serviceName: string, from: string, to: string}): Promise<license.office.Statistics[]>;
  /**
   * List the license.office.OfficeUser objects
   * Accounts associated to this office tenant
   */
  public get(path: '/license/office/{serviceName}/user', params: {serviceName: string, activationEmail?: string, firstName?: string, lastName?: string, licences?: OVH.license.office.LicenceEnum[]}): Promise<string[]>;
  /**
   * Office user
   * Get this object properties
   */
  public get(path: '/license/office/{serviceName}/user/{activationEmail}', params: {activationEmail: string, serviceName: string}): Promise<license.office.OfficeUser>;
  public get(path: PathsLicenseOfficeGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Office tenant
   * Alter this object properties
   */
  public put(path: '/license/office/{serviceName}', params: {serviceName: string, address?: string, city?: string, creationDate?: string, displayName?: string, firstName?: string, lastName?: string, phone?: string, serviceType?: OVH.license.office.ServiceTypeEnum, status?: OVH.license.office.ServiceStateEnum, zipCode?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/license/office/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Office user
   * Alter this object properties
   */
  public put(path: '/license/office/{serviceName}/user/{activationEmail}', params: {activationEmail: string, serviceName: string, deleteAtExpiration?: boolean, firstName?: string, isVirtual?: boolean, lastName?: string, licences?: OVH.license.office.LicenceEnum[], status?: OVH.license.office.UserStateEnum, taskPendingId?: number}): Promise<void>;
  public put(path: PathsLicenseOfficePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the license.office.OfficeUser objects
   * Create new office user
   */
  public post(path: '/license/office/{serviceName}/user', params: {serviceName: string, domain: string, firstName?: string, lastName?: string, licence: OVH.license.office.LicenceEnum, login: string}): Promise<license.office.OfficeTask>;
  /**
   * changePassword operations
   * Change or reset  user's password
   */
  public post(path: '/license/office/{serviceName}/user/{activationEmail}/changePassword', params: {activationEmail: string, serviceName: string, notifyEmail?: string, password?: string, shouldSendMail: boolean}): Promise<license.office.OfficeTask>;
  public post(path: PathsLicenseOfficePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Office user
   * Delete existing office user
   */
  public delete(path: '/license/office/{serviceName}/user/{activationEmail}', params: {activationEmail: string, serviceName: string}): Promise<license.office.OfficeTask>;
  public delete(path: PathsLicenseOfficeDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
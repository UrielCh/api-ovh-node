import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/office Models
 * Source: https://eu.api.ovh.com/1.0/license/office.json
 */
export namespace license {
    export namespace office {
        // type fullname: license.office.DomainStateEnum
        export type DomainStateEnum = "ok" | "unverified"
        // type fullname: license.office.LicenceEnum
        export type LicenceEnum = "officeBusiness" | "officeProPlus"
        // interface fullName: license.office.OfficeDomain.OfficeDomain
        export interface OfficeDomain {
            domainName: string;
            status: license.office.DomainStateEnum;
            txtEntry: string;
        }
        // interface fullName: license.office.OfficeSubscription.OfficeSubscription
        export interface OfficeSubscription {
            creationDate: string;
            id: number;
            lastUpdate?: string;
            licenseId: number;
            quantity: number;
            status: string;
            taskPendingId: number;
        }
        // interface fullName: license.office.OfficeTask.OfficeTask
        export interface OfficeTask {
            finishDate?: string;
            function: string;
            id: number;
            status: license.office.TaskStatusEnum;
            todoDate: string;
        }
        // interface fullName: license.office.OfficeTenant.OfficeTenant
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
        // interface fullName: license.office.OfficeUser.OfficeUser
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
        // type fullname: license.office.ServiceStateEnum
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended"
        // type fullname: license.office.ServiceTypeEnum
        export type ServiceTypeEnum = "payAsYouGo" | "prepaid"
        // interface fullName: license.office.Statistic.Statistic
        export interface Statistic {
            available: number;
            licenseId: number;
            used: number;
        }
        // interface fullName: license.office.Statistics.Statistics
        export interface Statistics {
            date: string;
            lines: license.office.StatisticsLine[];
        }
        // interface fullName: license.office.StatisticsLine.StatisticsLine
        export interface StatisticsLine {
            endOfDayCount: number;
            licenceType: license.office.LicenceEnum;
            peakCount: number;
        }
        // type fullname: license.office.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        // type fullname: license.office.UserStateEnum
        export type UserStateEnum = "creating" | "deleting" | "ok"
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
export interface License {
    office: {
        // GET /license/office
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /license/office/{serviceName}
            $get(): Promise<license.office.OfficeTenant>;
            // PUT /license/office/{serviceName}
            $put(params?: { address?: string, city?: string, creationDate?: string, displayName?: string, firstName?: string, lastName?: string, phone?: string, serviceType?: license.office.ServiceTypeEnum, status?: license.office.ServiceStateEnum, zipCode?: string }): Promise<void>;
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
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
            usageStatistics: {
                // GET /license/office/{serviceName}/usageStatistics
                $get(params: { from: string, to: string }): Promise<license.office.Statistics[]>;
            }
            user: {
                // GET /license/office/{serviceName}/user
                $get(params?: { activationEmail?: string, firstName?: string, lastName?: string, licences?: license.office.LicenceEnum[] }): Promise<string[]>;
                // POST /license/office/{serviceName}/user
                $post(params: { domain: string, firstName?: string, lastName?: string, licence: license.office.LicenceEnum, login: string }): Promise<license.office.OfficeTask>;
                $(activationEmail: string): {
                    // DELETE /license/office/{serviceName}/user/{activationEmail}
                    $delete(): Promise<license.office.OfficeTask>;
                    // GET /license/office/{serviceName}/user/{activationEmail}
                    $get(): Promise<license.office.OfficeUser>;
                    // PUT /license/office/{serviceName}/user/{activationEmail}
                    $put(params?: { activationEmail?: string, deleteAtExpiration?: boolean, firstName?: string, isVirtual?: boolean, lastName?: string, licences?: license.office.LicenceEnum[], status?: license.office.UserStateEnum, taskPendingId?: number }): Promise<void>;
                    changePassword: {
                        // POST /license/office/{serviceName}/user/{activationEmail}/changePassword
                        $post(params: { notifyEmail?: string, password?: string, shouldSendMail: boolean }): Promise<license.office.OfficeTask>;
                    }
                };
            }
        };
    }
}

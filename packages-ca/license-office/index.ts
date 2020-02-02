import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/office Models
 * Source: https://ca.api.ovh.com/1.0/license/office.json
 */
export namespace license {
    export namespace office {
        /**
         * Office domain state
         * type fullname: license.office.DomainStateEnum
         */
        export type DomainStateEnum = "ok" | "unverified"
        /**
         * Office Licence
         * type fullname: license.office.LicenceEnum
         */
        export type LicenceEnum = "officeBusiness" | "officeProPlus"
        /**
         * Office domain
         * interface fullName: license.office.OfficeDomain.OfficeDomain
         */
        export interface OfficeDomain {
            domainName: string;
            status: license.office.DomainStateEnum;
            txtEntry: string;
        }
        /**
         * Office subscription
         * interface fullName: license.office.OfficeSubscription.OfficeSubscription
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
         * interface fullName: license.office.OfficeTask.OfficeTask
         */
        export interface OfficeTask {
            finishDate?: string;
            function: string;
            id: number;
            status: license.office.TaskStatusEnum;
            todoDate: string;
        }
        /**
         * Office tenant
         * interface fullName: license.office.OfficeTenant.OfficeTenant
         */
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
        /**
         * Office user
         * interface fullName: license.office.OfficeUser.OfficeUser
         */
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
        /**
         * Office tenant state
         * type fullname: license.office.ServiceStateEnum
         */
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended"
        /**
         * Type of service
         * type fullname: license.office.ServiceTypeEnum
         */
        export type ServiceTypeEnum = "payAsYouGo" | "prepaid"
        /**
         * License usage statistic.
         * interface fullName: license.office.Statistic.Statistic
         */
        export interface Statistic {
            available: number;
            licenseId: number;
            used: number;
        }
        /**
         * License usage statistics.
         * interface fullName: license.office.Statistics.Statistics
         */
        export interface Statistics {
            date: string;
            lines: license.office.StatisticsLine[];
        }
        /**
         * License usage statistics line.
         * interface fullName: license.office.StatisticsLine.StatisticsLine
         */
        export interface StatisticsLine {
            endOfDayCount: number;
            licenceType: license.office.LicenceEnum;
            peakCount: number;
        }
        /**
         * Exchange task status
         * type fullname: license.office.TaskStatusEnum
         */
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        /**
         * Office user  state
         * type fullname: license.office.UserStateEnum
         */
        export type UserStateEnum = "creating" | "deleting" | "ok"
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
 * END API /license/office Models
 */
export function proxyLicenseOffice(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseOffice;
/**
 * Api model for /license/office
 */
export interface License {
    office: {
        /**
         * List available services
         * GET /license/office
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /license/office/{serviceName}
             */
            $get(): Promise<license.office.OfficeTenant>;
            /**
             * Alter this object properties
             * PUT /license/office/{serviceName}
             */
            $put(params?: { address?: string, city?: string, creationDate?: string, displayName?: string, firstName?: string, lastName?: string, phone?: string, serviceType?: license.office.ServiceTypeEnum, status?: license.office.ServiceStateEnum, zipCode?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            domain: {
                /**
                 * Domain associated to this office tenant
                 * GET /license/office/{serviceName}/domain
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domainName: string): {
                    /**
                     * Get this object properties
                     * GET /license/office/{serviceName}/domain/{domainName}
                     */
                    $get(): Promise<license.office.OfficeDomain>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            pendingTask: {
                /**
                 * Tasks associated to this office tenant
                 * GET /license/office/{serviceName}/pendingTask
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /license/office/{serviceName}/pendingTask/{id}
                     */
                    $get(): Promise<license.office.OfficeTask>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /license/office/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /license/office/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            usageStatistics: {
                /**
                 * Shows the subscriptions' usage statistics for the given time period
                 * GET /license/office/{serviceName}/usageStatistics
                 */
                $get(params: { from: string, to: string }): Promise<license.office.Statistics[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            user: {
                /**
                 * Accounts associated to this office tenant
                 * GET /license/office/{serviceName}/user
                 */
                $get(params?: { activationEmail?: string, firstName?: string, lastName?: string, licences?: license.office.LicenceEnum[] }): Promise<string[]>;
                /**
                 * Create new office user
                 * POST /license/office/{serviceName}/user
                 */
                $post(params: { domain: string, firstName?: string, lastName?: string, licence: license.office.LicenceEnum, login: string }): Promise<license.office.OfficeTask>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(activationEmail: string): {
                    /**
                     * Delete existing office user
                     * DELETE /license/office/{serviceName}/user/{activationEmail}
                     */
                    $delete(): Promise<license.office.OfficeTask>;
                    /**
                     * Get this object properties
                     * GET /license/office/{serviceName}/user/{activationEmail}
                     */
                    $get(): Promise<license.office.OfficeUser>;
                    /**
                     * Alter this object properties
                     * PUT /license/office/{serviceName}/user/{activationEmail}
                     */
                    $put(params?: { activationEmail?: string, deleteAtExpiration?: boolean, firstName?: string, isVirtual?: boolean, lastName?: string, licences?: license.office.LicenceEnum[], status?: license.office.UserStateEnum, taskPendingId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Change or reset  user's password
                         * POST /license/office/{serviceName}/user/{activationEmail}/changePassword
                         */
                        $post(params: { notifyEmail?: string, password?: string, shouldSendMail: boolean }): Promise<license.office.OfficeTask>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
        };
    }
}

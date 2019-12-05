import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /license/office Models
 */
export declare namespace license {
    namespace office {
        type DomainStateEnum = "ok" | "unverified";
        type LicenceEnum = "officeBusiness" | "officeProPlus";
        interface OfficeDomain {
            domainName: string;
            status: license.office.DomainStateEnum;
            txtEntry: string;
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
            status: license.office.TaskStatusEnum;
            todoDate: string;
        }
        interface OfficeTenant {
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
        interface OfficeUser {
            activationEmail: string;
            deleteAtExpiration: boolean;
            firstName: string;
            isVirtual: boolean;
            lastName: string;
            licences: license.office.LicenceEnum[];
            status: license.office.UserStateEnum;
            taskPendingId: number;
        }
        type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended";
        type ServiceTypeEnum = "payAsYouGo" | "prepaid";
        interface Statistic {
            available: number;
            licenseId: number;
            used: number;
        }
        interface Statistics {
            date: string;
            lines: license.office.StatisticsLine[];
        }
        interface StatisticsLine {
            endOfDayCount: number;
            licenceType: license.office.LicenceEnum;
            peakCount: number;
        }
        type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo";
        type UserStateEnum = "creating" | "deleting" | "ok";
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
 * END API /license/office Models
 */
export declare function proxyLicenseOffice(ovhEngine: OvhRequestable): License;
export default proxyLicenseOffice;
/**
 * Api Proxy model
 */ export interface License {
    office: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<license.office.OfficeTenant>;
            $put(params?: {
                address?: string;
                city?: string;
                creationDate?: string;
                displayName?: string;
                firstName?: string;
                lastName?: string;
                phone?: string;
                serviceType?: license.office.ServiceTypeEnum;
                status?: license.office.ServiceStateEnum;
                zipCode?: string;
            }): Promise<void>;
            domain: {
                $get(): Promise<string[]>;
                $(domainName: string): {
                    $get(): Promise<license.office.OfficeDomain>;
                };
            };
            pendingTask: {
                $get(): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<license.office.OfficeTask>;
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
            usageStatistics: {
                $get(params: {
                    from: string;
                    to: string;
                }): Promise<license.office.Statistics[]>;
            };
            user: {
                $get(params?: {
                    activationEmail?: string;
                    firstName?: string;
                    lastName?: string;
                    licences?: license.office.LicenceEnum[];
                }): Promise<string[]>;
                $post(params: {
                    domain: string;
                    firstName?: string;
                    lastName?: string;
                    licence: license.office.LicenceEnum;
                    login: string;
                }): Promise<license.office.OfficeTask>;
                $(activationEmail: string): {
                    $delete(): Promise<license.office.OfficeTask>;
                    $get(): Promise<license.office.OfficeUser>;
                    $put(params?: {
                        activationEmail?: string;
                        deleteAtExpiration?: boolean;
                        firstName?: string;
                        isVirtual?: boolean;
                        lastName?: string;
                        licences?: license.office.LicenceEnum[];
                        status?: license.office.UserStateEnum;
                        taskPendingId?: number;
                    }): Promise<void>;
                    changePassword: {
                        $post(params: {
                            notifyEmail?: string;
                            password?: string;
                            shouldSendMail: boolean;
                        }): Promise<license.office.OfficeTask>;
                    };
                };
            };
        };
    };
    /**
     * Operations about the OFFICE service
     * List available services
     */
    get(path: '/license/office'): () => Promise<string[]>;
    /**
     * Office tenant
     * Get this object properties
     */
    get(path: '/license/office/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<license.office.OfficeTenant>;
    /**
     * List the license.office.OfficeDomain objects
     * Domain associated to this office tenant
     */
    get(path: '/license/office/{serviceName}/domain'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Office domain
     * Get this object properties
     */
    get(path: '/license/office/{serviceName}/domain/{domainName}'): (params: {
        domainName: string;
        serviceName: string;
    }) => Promise<license.office.OfficeDomain>;
    /**
     * List the license.office.OfficeTask objects
     * Tasks associated to this office tenant
     */
    get(path: '/license/office/{serviceName}/pendingTask'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Office task
     * Get this object properties
     */
    get(path: '/license/office/{serviceName}/pendingTask/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<license.office.OfficeTask>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/license/office/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * usageStatistics operations
     * Shows the subscriptions' usage statistics for the given time period
     */
    get(path: '/license/office/{serviceName}/usageStatistics'): (params: {
        serviceName: string;
        from: string;
        to: string;
    }) => Promise<license.office.Statistics[]>;
    /**
     * List the license.office.OfficeUser objects
     * Accounts associated to this office tenant
     */
    get(path: '/license/office/{serviceName}/user'): (params: {
        serviceName: string;
        activationEmail?: string;
        firstName?: string;
        lastName?: string;
        licences?: license.office.LicenceEnum[];
    }) => Promise<string[]>;
    /**
     * Office user
     * Get this object properties
     */
    get(path: '/license/office/{serviceName}/user/{activationEmail}'): (params: {
        activationEmail: string;
        serviceName: string;
    }) => Promise<license.office.OfficeUser>;
    /**
     * Office tenant
     * Alter this object properties
     */
    put(path: '/license/office/{serviceName}'): (params: {
        serviceName: string;
        address?: string;
        city?: string;
        creationDate?: string;
        displayName?: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        serviceType?: license.office.ServiceTypeEnum;
        status?: license.office.ServiceStateEnum;
        zipCode?: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/license/office/{serviceName}/serviceInfos'): (params: {
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
     * Office user
     * Alter this object properties
     */
    put(path: '/license/office/{serviceName}/user/{activationEmail}'): (params: {
        activationEmail: string;
        serviceName: string;
        deleteAtExpiration?: boolean;
        firstName?: string;
        isVirtual?: boolean;
        lastName?: string;
        licences?: license.office.LicenceEnum[];
        status?: license.office.UserStateEnum;
        taskPendingId?: number;
    }) => Promise<void>;
    /**
     * List the license.office.OfficeUser objects
     * Create new office user
     */
    post(path: '/license/office/{serviceName}/user'): (params: {
        serviceName: string;
        domain: string;
        firstName?: string;
        lastName?: string;
        licence: license.office.LicenceEnum;
        login: string;
    }) => Promise<license.office.OfficeTask>;
    /**
     * changePassword operations
     * Change or reset  user's password
     */
    post(path: '/license/office/{serviceName}/user/{activationEmail}/changePassword'): (params: {
        activationEmail: string;
        serviceName: string;
        notifyEmail?: string;
        password?: string;
        shouldSendMail: boolean;
    }) => Promise<license.office.OfficeTask>;
    /**
     * Office user
     * Delete existing office user
     */
    delete(path: '/license/office/{serviceName}/user/{activationEmail}'): (params: {
        activationEmail: string;
        serviceName: string;
    }) => Promise<license.office.OfficeTask>;
}

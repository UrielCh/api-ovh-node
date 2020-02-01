import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /msServices Models
 * Source: https://eu.api.ovh.com/1.0/msServices.json
 */
export namespace msServices {
    // interface fullName: msServices.Account.Account
    export interface Account {
        SAMAccountName?: string;
        creationDate?: string;
        displayName?: string;
        firstName?: string;
        guid?: string;
        id: number;
        initials?: string;
        lastLogoffDate?: string;
        lastLogonDate?: string;
        lastName?: string;
        lastUpdateDate?: string;
        passwordLastUpdate?: string;
        state: msServices.ObjectStateEnum;
        taskPendingId: number;
        userPrincipalName: string;
    }
    // interface fullName: msServices.ActiveDirectoryOrganizationalUnit.ActiveDirectoryOrganizationalUnit
    export interface ActiveDirectoryOrganizationalUnit {
        complexityEnabled: boolean;
        lockoutDuration: number;
        lockoutObservationWindow: number;
        lockoutThreshold?: number;
        maxPasswordAge?: number;
        minPasswordAge?: number;
        minPasswordLength?: number;
        name: string;
        officeTenantServiceName?: string;
        state: msServices.ServiceStateEnum;
        taskPendingId: number;
    }
    // interface fullName: msServices.ActiveDirectorySyncClientUrl.ActiveDirectorySyncClientUrl
    export interface ActiveDirectorySyncClientUrl {
        expiration: string;
        url: string;
    }
    // interface fullName: msServices.ExchangeInformation.ExchangeInformation
    export interface ExchangeInformation {
        accountLicense: msServices.ExchangeLicenceEnum;
        configured: boolean;
        creationDate?: string;
        currentUsage?: number;
        deleteAtExpiration?: boolean;
        deleteOutlookAtExpiration?: boolean;
        exchangeGuid?: string;
        expirationDate?: string;
        expirationOutlookDate?: string;
        hiddenFromGAL: boolean;
        id: number;
        litigation: boolean;
        litigationPeriod?: number;
        mailingFilter?: msServices.MailingFilterEnum[];
        numberOfAliases: number;
        outlookLicense: boolean;
        owaLimited: boolean;
        primaryEmailAddress: string;
        quota: number;
        renewOutlookPeriod?: msServices.RenewPeriodEnum;
        renewPeriod?: msServices.RenewPeriodEnum;
        spamAndVirusConfiguration: msServices.SpamAndVirusConfiguration;
        spamDetected: boolean;
        spamTicketNumber?: number;
        state: msServices.ObjectStateEnum;
        taskPendingId: number;
    }
    // type fullname: msServices.ExchangeLicenceEnum
    export type ExchangeLicenceEnum = "basic" | "enterprise" | "standard"
    // interface fullName: msServices.ExchangeService.ExchangeService
    export interface ExchangeService {
        displayName?: string;
        domain: string;
        hostname?: string;
        maxReceiveSize: number;
        maxSendSize: number;
        offer: msServices.ServiceOfferEnum;
        spamAndVirusConfiguration: msServices.SpamAndVirusConfiguration;
        sslExpirationDate?: string;
        state: msServices.ServiceStateEnum;
        taskPendingId: number;
    }
    // type fullname: msServices.LicensePeriodEnum
    export type LicensePeriodEnum = "lastMonth" | "lastQuarter" | "lastWeek" | "lastYear"
    // type fullname: msServices.MailingFilterEnum
    export type MailingFilterEnum = "vaderetro"
    // interface fullName: msServices.MfaInformation.MfaInformation
    export interface MfaInformation {
        activated: boolean;
        state: msServices.ObjectStateEnum;
        taskPendingId: number;
    }
    // type fullname: msServices.ObjectStateEnum
    export type ObjectStateEnum = "creating" | "deleting" | "modifying" | "ok" | "reopening" | "suspended" | "suspending"
    // type fullname: msServices.RenewPeriodEnum
    export type RenewPeriodEnum = "monthly" | "yearly"
    // type fullname: msServices.ServiceOfferEnum
    export type ServiceOfferEnum = "dedicated" | "dedicatedCluster" | "hosted" | "provider"
    // type fullname: msServices.ServiceStateEnum
    export type ServiceStateEnum = "creating" | "deleting" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
    // type fullname: msServices.SharepointAccountAccessRightsEnum
    export type SharepointAccountAccessRightsEnum = "administrator" | "user"
    // interface fullName: msServices.SharepointAccountLicense.SharepointAccountLicense
    export interface SharepointAccountLicense {
        license: msServices.SharepointLicenseEnum;
        licenseQuantity: number;
    }
    // interface fullName: msServices.SharepointDailyLicense.SharepointDailyLicense
    export interface SharepointDailyLicense {
        accountLicense: msServices.SharepointAccountLicense[];
        date: string;
    }
    // interface fullName: msServices.SharepointInformation.SharepointInformation
    export interface SharepointInformation {
        accessRights: msServices.SharepointAccountAccessRightsEnum;
        activeDirectoryAccountId: number;
        configured: boolean;
        currentUsage?: number;
        deleteAtExpiration?: boolean;
        id: number;
        license: msServices.SharepointLicenseEnum;
        officeLicense: boolean;
        quota: number;
        state: msServices.ObjectStateEnum;
        taskPendingId: number;
    }
    // type fullname: msServices.SharepointLicenseEnum
    export type SharepointLicenseEnum = "foundation" | "standard"
    // interface fullName: msServices.SharepointService.SharepointService
    export interface SharepointService {
        currentUsage?: number;
        displayName?: string;
        domain: string;
        farmUrl: string;
        offer: msServices.SharepointServiceOfferEnum;
        quota: number;
        state: msServices.ServiceStateEnum;
        taskPendingId: number;
        url?: string;
    }
    // interface fullName: msServices.SharepointServiceInfo.SharepointServiceInfo
    export interface SharepointServiceInfo {
        domain: string;
    }
    // type fullname: msServices.SharepointServiceOfferEnum
    export type SharepointServiceOfferEnum = "hosted" | "provider"
    // interface fullName: msServices.SpamAndVirusConfiguration.SpamAndVirusConfiguration
    export interface SpamAndVirusConfiguration {
        checkDKIM: boolean;
        checkSPF: boolean;
        deleteSpam: boolean;
        deleteVirus: boolean;
        putInJunk: boolean;
        tagSpam: boolean;
        tagVirus: boolean;
    }
    // interface fullName: msServices.SyncAccountLicense.SyncAccountLicense
    export interface SyncAccountLicense {
        license: msServices.SyncLicenseEnum;
        licenseQuantity: number;
    }
    // interface fullName: msServices.SyncDailyLicense.SyncDailyLicense
    export interface SyncDailyLicense {
        accountLicense: msServices.SyncAccountLicense[];
        date: string;
    }
    // interface fullName: msServices.SyncInformation.SyncInformation
    export interface SyncInformation {
        configured: boolean;
        license: msServices.SyncLicenseEnum;
        state: msServices.ObjectStateEnum;
        taskPendingId: number;
    }
    // type fullname: msServices.SyncLicenseEnum
    export type SyncLicenseEnum = "standard" | "standardFree"
    // interface fullName: msServices.SyncService.SyncService
    export interface SyncService {
        state: msServices.ServiceStateEnum;
        taskPendingId: number;
    }
    // interface fullName: msServices.Task.Task
    export interface Task {
        finishDate?: string;
        function: msServices.TaskFunctionEnum;
        id: number;
        status: msServices.TaskStatusEnum;
        todoDate: string;
    }
    // type fullname: msServices.TaskFunctionEnum
    export type TaskFunctionEnum = "activateADSync" | "activateSharepoint" | "addADAccount" | "addADOU" | "addADSyncAccount" | "addADUPNSuffix" | "alterMfaOnAllUsers" | "changeADPassword" | "changeADSyncPassword" | "deactivateADSync" | "delADOU" | "deleteADAccount" | "deleteADSyncAccount" | "deleteADUPNSuffix" | "disableADAccountMfa" | "disableADAccountMfaTemporary" | "enableADAccountMfa" | "enableADSyncAccount" | "generateADSyncClientUrl" | "resetADAccountMfa" | "setADAccount" | "setPasswordPolicy"
    // type fullname: msServices.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    // type fullname: msServices.UPNStateEnum
    export type UPNStateEnum = "creating" | "deleting" | "ok"
    // interface fullName: msServices.exchangeTask.exchangeTask
    export interface exchangeTask {
        finishDate?: string;
        function: string;
        id: number;
        status: msServices.TaskStatusEnum;
        todoDate: string;
    }
    // interface fullName: msServices.sharepointTask.sharepointTask
    export interface sharepointTask {
        finishDate?: string;
        function: string;
        id: number;
        status: msServices.TaskStatusEnum;
        todoDate: string;
    }
    // interface fullName: msServices.upnSuffix.upnSuffix
    export interface upnSuffix {
        cnameToCheck?: string;
        ownershipValidated: boolean;
        state: msServices.UPNStateEnum;
        suffix: string;
        taskPendingId: number;
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
 * END API /msServices Models
 */
export function proxyMsServices(ovhEngine: OvhRequestable): MsServices {
    return buildOvhProxy(ovhEngine, '/msServices');
}
export default proxyMsServices;
/**
 * Api Proxy model
 */// Apis harmony
// path /msServices
export interface MsServices{
    // GET /msServices
    $get(): Promise<string[]>;
    sharepoint: {
        // GET /msServices/sharepoint
        $get(): Promise<string[]>;
        $(domain: string): {
            // GET /msServices/sharepoint/{domain}
            $get(): Promise<msServices.SharepointServiceInfo>;
            serviceInfos: {
                // GET /msServices/sharepoint/{domain}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /msServices/sharepoint/{domain}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
    $(serviceName: string): {
        // GET /msServices/{serviceName}
        $get(): Promise<msServices.ActiveDirectoryOrganizationalUnit>;
        // PUT /msServices/{serviceName}
        $put(params?: {complexityEnabled?: boolean, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, minPasswordAge?: number, minPasswordLength?: number, name?: string, officeTenantServiceName?: string, state?: msServices.ServiceStateEnum, taskPendingId?: number}): Promise<void>;
        account: {
            // GET /msServices/{serviceName}/account
            $get(params?: {id?: number, userPrincipalName?: string}): Promise<string[]>;
            $(userPrincipalName: string): {
                // GET /msServices/{serviceName}/account/{userPrincipalName}
                $get(): Promise<msServices.Account>;
                // PUT /msServices/{serviceName}/account/{userPrincipalName}
                $put(params?: {SAMAccountName?: string, creationDate?: string, displayName?: string, firstName?: string, guid?: string, id?: number, initials?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, passwordLastUpdate?: string, state?: msServices.ObjectStateEnum, taskPendingId?: number, userPrincipalName?: string}): Promise<void>;
                changePassword: {
                    // POST /msServices/{serviceName}/account/{userPrincipalName}/changePassword
                    $post(params: {password: string}): Promise<msServices.Task>;
                }
                exchange: {
                    // GET /msServices/{serviceName}/account/{userPrincipalName}/exchange
                    $get(): Promise<msServices.ExchangeInformation>;
                    // PUT /msServices/{serviceName}/account/{userPrincipalName}/exchange
                    $put(params?: {accountLicense?: msServices.ExchangeLicenceEnum, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, deleteOutlookAtExpiration?: boolean, exchangeGuid?: string, expirationDate?: string, expirationOutlookDate?: string, hiddenFromGAL?: boolean, id?: number, litigation?: boolean, litigationPeriod?: number, mailingFilter?: msServices.MailingFilterEnum[], numberOfAliases?: number, outlookLicense?: boolean, owaLimited?: boolean, primaryEmailAddress?: string, quota?: number, renewOutlookPeriod?: msServices.RenewPeriodEnum, renewPeriod?: msServices.RenewPeriodEnum, spamAndVirusConfiguration?: msServices.SpamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: msServices.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
                    configure: {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/exchange/configure
                        $post(): Promise<msServices.exchangeTask>;
                    }
                }
                mfa: {
                    // DELETE /msServices/{serviceName}/account/{userPrincipalName}/mfa
                    $delete(): Promise<msServices.Task>;
                    // GET /msServices/{serviceName}/account/{userPrincipalName}/mfa
                    $get(): Promise<msServices.MfaInformation>;
                    // POST /msServices/{serviceName}/account/{userPrincipalName}/mfa
                    $post(): Promise<msServices.Task>;
                    disable: {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/disable
                        $post(params: {period: number}): Promise<msServices.Task>;
                    }
                    enable: {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/enable
                        $post(): Promise<msServices.Task>;
                    }
                    reset: {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/reset
                        $post(): Promise<msServices.Task>;
                    }
                }
                sharepoint: {
                    // GET /msServices/{serviceName}/account/{userPrincipalName}/sharepoint
                    $get(): Promise<msServices.SharepointInformation>;
                    // PUT /msServices/{serviceName}/account/{userPrincipalName}/sharepoint
                    $put(params?: {accessRights?: msServices.SharepointAccountAccessRightsEnum, activeDirectoryAccountId?: number, configured?: boolean, currentUsage?: number, deleteAtExpiration?: boolean, id?: number, license?: msServices.SharepointLicenseEnum, officeLicense?: boolean, quota?: number, state?: msServices.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
                    clearSpace: {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace
                        $post(): Promise<msServices.sharepointTask>;
                    }
                    configure: {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure
                        $post(): Promise<msServices.sharepointTask>;
                    }
                }
                sync: {
                    // DELETE /msServices/{serviceName}/account/{userPrincipalName}/sync
                    $delete(): Promise<msServices.Task>;
                    // GET /msServices/{serviceName}/account/{userPrincipalName}/sync
                    $get(): Promise<msServices.SyncInformation>;
                    // POST /msServices/{serviceName}/account/{userPrincipalName}/sync
                    $post(params: {license: msServices.SyncLicenseEnum}): Promise<msServices.Task>;
                    configure: {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/sync/configure
                        $post(): Promise<msServices.Task>;
                    }
                }
            };
        }
        createMfaOnAllUsers: {
            // POST /msServices/{serviceName}/createMfaOnAllUsers
            $post(): Promise<msServices.Task>;
        }
        exchange: {
            // GET /msServices/{serviceName}/exchange
            $get(): Promise<msServices.ExchangeService>;
            // PUT /msServices/{serviceName}/exchange
            $put(params?: {displayName?: string, domain?: string, hostname?: string, maxReceiveSize?: number, maxSendSize?: number, offer?: msServices.ServiceOfferEnum, spamAndVirusConfiguration?: msServices.SpamAndVirusConfiguration, sslExpirationDate?: string, state?: msServices.ServiceStateEnum, taskPendingId?: number}): Promise<void>;
            billingMigrated: {
                // GET /msServices/{serviceName}/exchange/billingMigrated
                $get(): Promise<boolean>;
            }
            task: {
                // GET /msServices/{serviceName}/exchange/task
                $get(): Promise<number[]>;
                $(id: number): {
                    // GET /msServices/{serviceName}/exchange/task/{id}
                    $get(): Promise<msServices.exchangeTask>;
                };
            }
        }
        removeMfaOnAllUsers: {
            // POST /msServices/{serviceName}/removeMfaOnAllUsers
            $post(): Promise<msServices.Task>;
        }
        sharepoint: {
            // GET /msServices/{serviceName}/sharepoint
            $get(): Promise<msServices.SharepointService>;
            // PUT /msServices/{serviceName}/sharepoint
            $put(params?: {currentUsage?: number, displayName?: string, domain?: string, farmUrl?: string, offer?: msServices.SharepointServiceOfferEnum, quota?: number, state?: msServices.ServiceStateEnum, taskPendingId?: number, url?: string}): Promise<void>;
            billingMigrated: {
                // GET /msServices/{serviceName}/sharepoint/billingMigrated
                $get(): Promise<boolean>;
            }
            license: {
                // GET /msServices/{serviceName}/sharepoint/license
                $get(params: {license?: msServices.SharepointLicenseEnum, period: msServices.LicensePeriodEnum}): Promise<msServices.SharepointDailyLicense[]>;
            }
            restoreAdminRights: {
                // POST /msServices/{serviceName}/sharepoint/restoreAdminRights
                $post(): Promise<msServices.sharepointTask>;
            }
            task: {
                // GET /msServices/{serviceName}/sharepoint/task
                $get(params?: {function_?: string, status?: msServices.TaskStatusEnum}): Promise<number[]>;
                $(id: number): {
                    // GET /msServices/{serviceName}/sharepoint/task/{id}
                    $get(): Promise<msServices.sharepointTask>;
                };
            }
        }
        sync: {
            // DELETE /msServices/{serviceName}/sync
            $delete(): Promise<msServices.Task>;
            // GET /msServices/{serviceName}/sync
            $get(): Promise<msServices.SyncService>;
            changePassword: {
                // POST /msServices/{serviceName}/sync/changePassword
                $post(params: {password: string}): Promise<msServices.Task>;
            }
            clientSoftwareURL: {
                // GET /msServices/{serviceName}/sync/clientSoftwareURL
                $get(): Promise<msServices.ActiveDirectorySyncClientUrl>;
                // POST /msServices/{serviceName}/sync/clientSoftwareURL
                $post(): Promise<msServices.Task>;
            }
            license: {
                // GET /msServices/{serviceName}/sync/license
                $get(params: {license?: msServices.SyncLicenseEnum, period: msServices.LicensePeriodEnum}): Promise<msServices.SyncDailyLicense[]>;
            }
        }
        task: {
            // GET /msServices/{serviceName}/task
            $get(params?: {function_?: msServices.TaskFunctionEnum, status?: msServices.TaskStatusEnum}): Promise<number[]>;
            $(id: number): {
                // GET /msServices/{serviceName}/task/{id}
                $get(): Promise<msServices.Task>;
            };
        }
        upnSuffix: {
            // GET /msServices/{serviceName}/upnSuffix
            $get(): Promise<string[]>;
            // POST /msServices/{serviceName}/upnSuffix
            $post(params: {suffix: string}): Promise<msServices.Task>;
            $(suffix: string): {
                // DELETE /msServices/{serviceName}/upnSuffix/{suffix}
                $delete(): Promise<msServices.Task>;
                // GET /msServices/{serviceName}/upnSuffix/{suffix}
                $get(): Promise<msServices.upnSuffix>;
            };
        }
    };
}

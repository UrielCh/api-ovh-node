import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace msServices {
    //msServices.Account
    // fullName: msServices.Account.Account
    export interface Account {
        SAMAccountName?: string;
        creationDate?: string;
        displayName?: string;
        firstName?: string;
        guid?: string;
        id?: number;
        initials?: string;
        lastLogoffDate?: string;
        lastLogonDate?: string;
        lastName?: string;
        lastUpdateDate?: string;
        passwordLastUpdate?: string;
        state?: OVH.msServices.ObjectStateEnum;
        taskPendingId?: number;
        userPrincipalName?: string;
    }
    //msServices.ActiveDirectoryOrganizationalUnit
    // fullName: msServices.ActiveDirectoryOrganizationalUnit.ActiveDirectoryOrganizationalUnit
    export interface ActiveDirectoryOrganizationalUnit {
        complexityEnabled?: boolean;
        lockoutDuration?: number;
        lockoutObservationWindow?: number;
        lockoutThreshold?: number;
        maxPasswordAge?: number;
        minPasswordAge?: number;
        minPasswordLength?: number;
        name?: string;
        officeTenantServiceName?: string;
        state?: OVH.msServices.ServiceStateEnum;
        taskPendingId?: number;
    }
    //msServices.ActiveDirectorySyncClientUrl
    // fullName: msServices.ActiveDirectorySyncClientUrl.ActiveDirectorySyncClientUrl
    export interface ActiveDirectorySyncClientUrl {
        expiration?: string;
        url?: string;
    }
    //msServices.ExchangeInformation
    // fullName: msServices.ExchangeInformation.ExchangeInformation
    export interface ExchangeInformation {
        accountLicense?: OVH.msServices.ExchangeLicenceEnum;
        configured?: boolean;
        creationDate?: string;
        currentUsage?: number;
        deleteAtExpiration?: boolean;
        deleteOutlookAtExpiration?: boolean;
        exchangeGuid?: string;
        expirationDate?: string;
        expirationOutlookDate?: string;
        hiddenFromGAL?: boolean;
        id?: number;
        litigation?: boolean;
        litigationPeriod?: number;
        mailingFilter?: OVH.msServices.MailingFilterEnum[];
        outlookLicense?: boolean;
        owaLimited?: boolean;
        primaryEmailAddress?: string;
        quota?: number;
        renewOutlookPeriod?: OVH.msServices.RenewPeriodEnum;
        renewPeriod?: OVH.msServices.RenewPeriodEnum;
        spamAndVirusConfiguration?: OVH.msServices.SpamAndVirusConfiguration;
        spamDetected?: boolean;
        spamTicketNumber?: number;
        state?: OVH.msServices.ObjectStateEnum;
        taskPendingId?: number;
    }
    //msServices.ExchangeLicenceEnum
    export type ExchangeLicenceEnum = "basic" | "enterprise" | "standard"
    //msServices.ExchangeService
    // fullName: msServices.ExchangeService.ExchangeService
    export interface ExchangeService {
        displayName?: string;
        domain?: string;
        hostname?: string;
        maxReceiveSize?: number;
        maxSendSize?: number;
        offer?: OVH.msServices.ServiceOfferEnum;
        spamAndVirusConfiguration?: OVH.msServices.SpamAndVirusConfiguration;
        sslExpirationDate?: string;
        state?: OVH.msServices.ServiceStateEnum;
        taskPendingId?: number;
    }
    //msServices.LicensePeriodEnum
    export type LicensePeriodEnum = "lastMonth" | "lastQuarter" | "lastWeek" | "lastYear"
    //msServices.MailingFilterEnum
    export type MailingFilterEnum = "vaderetro"
    //msServices.MfaInformation
    // fullName: msServices.MfaInformation.MfaInformation
    export interface MfaInformation {
        activated?: boolean;
        state?: OVH.msServices.ObjectStateEnum;
        taskPendingId?: number;
    }
    //msServices.ObjectStateEnum
    export type ObjectStateEnum = "creating" | "deleting" | "modifying" | "ok" | "reopening" | "suspended" | "suspending"
    //msServices.RenewPeriodEnum
    export type RenewPeriodEnum = "monthly" | "yearly"
    //msServices.ServiceOfferEnum
    export type ServiceOfferEnum = "dedicated" | "dedicatedCluster" | "hosted" | "provider"
    //msServices.ServiceStateEnum
    export type ServiceStateEnum = "creating" | "deleting" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
    //msServices.SharepointAccountAccessRightsEnum
    export type SharepointAccountAccessRightsEnum = "administrator" | "user"
    //msServices.SharepointAccountLicense
    // fullName: msServices.SharepointAccountLicense.SharepointAccountLicense
    export interface SharepointAccountLicense {
        license?: OVH.msServices.SharepointLicenseEnum;
        licenseQuantity?: number;
    }
    //msServices.SharepointDailyLicense
    // fullName: msServices.SharepointDailyLicense.SharepointDailyLicense
    export interface SharepointDailyLicense {
        accountLicense?: OVH.msServices.SharepointAccountLicense[];
        date?: string;
    }
    //msServices.SharepointInformation
    // fullName: msServices.SharepointInformation.SharepointInformation
    export interface SharepointInformation {
        accessRights?: OVH.msServices.SharepointAccountAccessRightsEnum;
        activeDirectoryAccountId?: number;
        configured?: boolean;
        currentUsage?: number;
        deleteAtExpiration?: boolean;
        id?: number;
        license?: OVH.msServices.SharepointLicenseEnum;
        officeLicense?: boolean;
        quota?: number;
        state?: OVH.msServices.ObjectStateEnum;
        taskPendingId?: number;
    }
    //msServices.SharepointLicenseEnum
    export type SharepointLicenseEnum = "foundation" | "standard"
    //msServices.SharepointService
    // fullName: msServices.SharepointService.SharepointService
    export interface SharepointService {
        currentUsage?: number;
        displayName?: string;
        domain?: string;
        farmUrl?: string;
        offer?: OVH.msServices.SharepointServiceOfferEnum;
        quota?: number;
        state?: OVH.msServices.ServiceStateEnum;
        taskPendingId?: number;
        url?: string;
    }
    //msServices.SharepointServiceInfo
    // fullName: msServices.SharepointServiceInfo.SharepointServiceInfo
    export interface SharepointServiceInfo {
        domain?: string;
    }
    //msServices.SharepointServiceOfferEnum
    export type SharepointServiceOfferEnum = "hosted" | "provider"
    //msServices.SpamAndVirusConfiguration
    // fullName: msServices.SpamAndVirusConfiguration.SpamAndVirusConfiguration
    export interface SpamAndVirusConfiguration {
        checkDKIM?: boolean;
        checkSPF?: boolean;
        deleteSpam?: boolean;
        deleteVirus?: boolean;
        putInJunk?: boolean;
        tagSpam?: boolean;
        tagVirus?: boolean;
    }
    //msServices.SyncAccountLicense
    // fullName: msServices.SyncAccountLicense.SyncAccountLicense
    export interface SyncAccountLicense {
        license?: OVH.msServices.SyncLicenseEnum;
        licenseQuantity?: number;
    }
    //msServices.SyncDailyLicense
    // fullName: msServices.SyncDailyLicense.SyncDailyLicense
    export interface SyncDailyLicense {
        accountLicense?: OVH.msServices.SyncAccountLicense[];
        date?: string;
    }
    //msServices.SyncInformation
    // fullName: msServices.SyncInformation.SyncInformation
    export interface SyncInformation {
        configured?: boolean;
        license?: OVH.msServices.SyncLicenseEnum;
        state?: OVH.msServices.ObjectStateEnum;
        taskPendingId?: number;
    }
    //msServices.SyncLicenseEnum
    export type SyncLicenseEnum = "standard" | "standardFree"
    //msServices.SyncService
    // fullName: msServices.SyncService.SyncService
    export interface SyncService {
        state?: OVH.msServices.ServiceStateEnum;
        taskPendingId?: number;
    }
    //msServices.Task
    // fullName: msServices.Task.Task
    export interface Task {
        finishDate?: string;
        function?: OVH.msServices.TaskFunctionEnum;
        id?: number;
        status?: OVH.msServices.TaskStatusEnum;
        todoDate?: string;
    }
    //msServices.TaskFunctionEnum
    export type TaskFunctionEnum = "activateADSync" | "activateSharepoint" | "addADAccount" | "addADOU" | "addADSyncAccount" | "addADUPNSuffix" | "changeADPassword" | "changeADSyncPassword" | "deactivateADSync" | "delADOU" | "deleteADAccount" | "deleteADSyncAccount" | "deleteADUPNSuffix" | "disableADAccountMfa" | "disableADAccountMfaTemporary" | "enableADAccountMfa" | "enableADSyncAccount" | "generateADSyncClientUrl" | "resetADAccountMfa" | "setADAccount" | "setPasswordPolicy"
    //msServices.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    //msServices.UPNStateEnum
    export type UPNStateEnum = "creating" | "deleting" | "ok"
    //msServices.exchangeTask
    // fullName: msServices.exchangeTask.exchangeTask
    export interface exchangeTask {
        finishDate?: string;
        function?: string;
        id?: number;
        status?: OVH.msServices.TaskStatusEnum;
        todoDate?: string;
    }
    //msServices.sharepointTask
    // fullName: msServices.sharepointTask.sharepointTask
    export interface sharepointTask {
        finishDate?: string;
        function?: string;
        id?: number;
        status?: OVH.msServices.TaskStatusEnum;
        todoDate?: string;
    }
    //msServices.upnSuffix
    // fullName: msServices.upnSuffix.upnSuffix
    export interface upnSuffix {
        cnameToCheck?: string;
        ownershipValidated?: boolean;
        state?: OVH.msServices.UPNStateEnum;
        suffix?: string;
        taskPendingId?: number;
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
// path /msServices
export interface MsServices {
    // GET /msServices
    GET(): Promise<string[]>;
    sharepoint:  {
        // GET /msServices/sharepoint
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /msServices/sharepoint/{domain}
            GET(): Promise<msServices.SharepointServiceInfo>;
            serviceInfos:  {
                // GET /msServices/sharepoint/{domain}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /msServices/sharepoint/{domain}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
    [keys: string]: {
        // GET /msServices/{serviceName}
        GET(): Promise<msServices.ActiveDirectoryOrganizationalUnit>;
        // PUT /msServices/{serviceName}
        PUT(body?: {body: msServices.ActiveDirectoryOrganizationalUnit}): Promise<void>;
        upnSuffix:  {
            // GET /msServices/{serviceName}/upnSuffix
            GET(): Promise<string[]>;
            // POST /msServices/{serviceName}/upnSuffix
            POST(body?: {suffix: string}): Promise<msServices.Task>;
            [keys: string]: {
                // GET /msServices/{serviceName}/upnSuffix/{suffix}
                GET(): Promise<msServices.upnSuffix>;
                // DELETE /msServices/{serviceName}/upnSuffix/{suffix}
                DELETE(): Promise<msServices.Task>;
            } | any
        }
        sync:  {
            // GET /msServices/{serviceName}/sync
            GET(): Promise<msServices.SyncService>;
            // DELETE /msServices/{serviceName}/sync
            DELETE(): Promise<msServices.Task>;
            changePassword:  {
                // POST /msServices/{serviceName}/sync/changePassword
                POST(body?: {password: string}): Promise<msServices.Task>;
            }
            clientSoftwareURL:  {
                // GET /msServices/{serviceName}/sync/clientSoftwareURL
                GET(): Promise<msServices.ActiveDirectorySyncClientUrl>;
                // POST /msServices/{serviceName}/sync/clientSoftwareURL
                POST(): Promise<msServices.Task>;
            }
            license:  {
                // GET /msServices/{serviceName}/sync/license
                GET(param?: {license?: msServices.SyncLicenseEnum, period: msServices.LicensePeriodEnum}): Promise<msServices.SyncDailyLicense[]>;
            }
        }
        sharepoint:  {
            // GET /msServices/{serviceName}/sharepoint
            GET(): Promise<msServices.SharepointService>;
            // PUT /msServices/{serviceName}/sharepoint
            PUT(body?: {body: msServices.SharepointService}): Promise<void>;
            license:  {
                // GET /msServices/{serviceName}/sharepoint/license
                GET(param?: {license?: msServices.SharepointLicenseEnum, period: msServices.LicensePeriodEnum}): Promise<msServices.SharepointDailyLicense[]>;
            }
            task:  {
                // GET /msServices/{serviceName}/sharepoint/task
                GET(param?: {status?: msServices.TaskStatusEnum, function_?: string}): Promise<number[]>;
                [keys: string]: {
                    // GET /msServices/{serviceName}/sharepoint/task/{id}
                    GET(): Promise<msServices.sharepointTask>;
                } | any
            }
            billingMigrated:  {
                // GET /msServices/{serviceName}/sharepoint/billingMigrated
                GET(): Promise<boolean>;
            }
            restoreAdminRights:  {
                // POST /msServices/{serviceName}/sharepoint/restoreAdminRights
                POST(): Promise<msServices.sharepointTask>;
            }
        }
        exchange:  {
            // GET /msServices/{serviceName}/exchange
            GET(): Promise<msServices.ExchangeService>;
            // PUT /msServices/{serviceName}/exchange
            PUT(body?: {body: msServices.ExchangeService}): Promise<void>;
            task:  {
                // GET /msServices/{serviceName}/exchange/task
                GET(): Promise<number[]>;
                [keys: string]: {
                    // GET /msServices/{serviceName}/exchange/task/{id}
                    GET(): Promise<msServices.exchangeTask>;
                } | any
            }
            billingMigrated:  {
                // GET /msServices/{serviceName}/exchange/billingMigrated
                GET(): Promise<boolean>;
            }
        }
        task:  {
            // GET /msServices/{serviceName}/task
            GET(param?: {status?: msServices.TaskStatusEnum, function_?: msServices.TaskFunctionEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /msServices/{serviceName}/task/{id}
                GET(): Promise<msServices.Task>;
            } | any
        }
        account:  {
            // GET /msServices/{serviceName}/account
            GET(param?: {id?: number, userPrincipalName?: string}): Promise<string[]>;
            [keys: string]: {
                // GET /msServices/{serviceName}/account/{userPrincipalName}
                GET(): Promise<msServices.Account>;
                // PUT /msServices/{serviceName}/account/{userPrincipalName}
                PUT(body?: {body: msServices.Account}): Promise<void>;
                sync:  {
                    // GET /msServices/{serviceName}/account/{userPrincipalName}/sync
                    GET(): Promise<msServices.SyncInformation>;
                    // POST /msServices/{serviceName}/account/{userPrincipalName}/sync
                    POST(body?: {license: msServices.SyncLicenseEnum}): Promise<msServices.Task>;
                    // DELETE /msServices/{serviceName}/account/{userPrincipalName}/sync
                    DELETE(): Promise<msServices.Task>;
                    configure:  {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/sync/configure
                        POST(): Promise<msServices.Task>;
                    }
                }
                mfa:  {
                    // GET /msServices/{serviceName}/account/{userPrincipalName}/mfa
                    GET(): Promise<msServices.MfaInformation>;
                    // POST /msServices/{serviceName}/account/{userPrincipalName}/mfa
                    POST(): Promise<msServices.Task>;
                    // DELETE /msServices/{serviceName}/account/{userPrincipalName}/mfa
                    DELETE(): Promise<msServices.Task>;
                    reset:  {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/reset
                        POST(): Promise<msServices.Task>;
                    }
                    enable:  {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/enable
                        POST(): Promise<msServices.Task>;
                    }
                    disable:  {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/disable
                        POST(body?: {period: number}): Promise<msServices.Task>;
                    }
                }
                changePassword:  {
                    // POST /msServices/{serviceName}/account/{userPrincipalName}/changePassword
                    POST(body?: {password: string}): Promise<msServices.Task>;
                }
                exchange:  {
                    // GET /msServices/{serviceName}/account/{userPrincipalName}/exchange
                    GET(): Promise<msServices.ExchangeInformation>;
                    // PUT /msServices/{serviceName}/account/{userPrincipalName}/exchange
                    PUT(body?: {body: msServices.ExchangeInformation}): Promise<void>;
                    configure:  {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/exchange/configure
                        POST(): Promise<msServices.exchangeTask>;
                    }
                }
                sharepoint:  {
                    // GET /msServices/{serviceName}/account/{userPrincipalName}/sharepoint
                    GET(): Promise<msServices.SharepointInformation>;
                    // PUT /msServices/{serviceName}/account/{userPrincipalName}/sharepoint
                    PUT(body?: {body: msServices.SharepointInformation}): Promise<void>;
                    clearSpace:  {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace
                        POST(): Promise<msServices.sharepointTask>;
                    }
                    configure:  {
                        // POST /msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure
                        POST(): Promise<msServices.sharepointTask>;
                    }
                }
            } | any
        }
    } | any
}
// Api
type PathsMsServicesGET = '/msServices' |
  '/msServices/sharepoint/{domain}/serviceInfos' |
  '/msServices/sharepoint/{domain}' |
  '/msServices/sharepoint' |
  '/msServices/{serviceName}/upnSuffix/{suffix}' |
  '/msServices/{serviceName}/upnSuffix' |
  '/msServices/{serviceName}/sync' |
  '/msServices/{serviceName}/sync/clientSoftwareURL' |
  '/msServices/{serviceName}/sync/license' |
  '/msServices/{serviceName}' |
  '/msServices/{serviceName}/sharepoint/license' |
  '/msServices/{serviceName}/sharepoint/task/{id}' |
  '/msServices/{serviceName}/sharepoint/task' |
  '/msServices/{serviceName}/sharepoint/billingMigrated' |
  '/msServices/{serviceName}/sharepoint' |
  '/msServices/{serviceName}/exchange/task/{id}' |
  '/msServices/{serviceName}/exchange/task' |
  '/msServices/{serviceName}/exchange' |
  '/msServices/{serviceName}/exchange/billingMigrated' |
  '/msServices/{serviceName}/task' |
  '/msServices/{serviceName}/task/{id}' |
  '/msServices/{serviceName}/account' |
  '/msServices/{serviceName}/account/{userPrincipalName}/sync' |
  '/msServices/{serviceName}/account/{userPrincipalName}/mfa' |
  '/msServices/{serviceName}/account/{userPrincipalName}/exchange' |
  '/msServices/{serviceName}/account/{userPrincipalName}' |
  '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint';

type PathsMsServicesPUT = '/msServices/sharepoint/{domain}/serviceInfos' |
  '/msServices/{serviceName}' |
  '/msServices/{serviceName}/sharepoint' |
  '/msServices/{serviceName}/exchange' |
  '/msServices/{serviceName}/account/{userPrincipalName}/exchange' |
  '/msServices/{serviceName}/account/{userPrincipalName}' |
  '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint';

type PathsMsServicesPOST = '/msServices/{serviceName}/upnSuffix' |
  '/msServices/{serviceName}/sync/changePassword' |
  '/msServices/{serviceName}/sync/clientSoftwareURL' |
  '/msServices/{serviceName}/sharepoint/restoreAdminRights' |
  '/msServices/{serviceName}/account/{userPrincipalName}/sync' |
  '/msServices/{serviceName}/account/{userPrincipalName}/sync/configure' |
  '/msServices/{serviceName}/account/{userPrincipalName}/mfa' |
  '/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset' |
  '/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable' |
  '/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable' |
  '/msServices/{serviceName}/account/{userPrincipalName}/changePassword' |
  '/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure' |
  '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace' |
  '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure';

type PathsMsServicesDELETE = '/msServices/{serviceName}/upnSuffix/{suffix}' |
  '/msServices/{serviceName}/sync' |
  '/msServices/{serviceName}/account/{userPrincipalName}/sync' |
  '/msServices/{serviceName}/account/{userPrincipalName}/mfa';

export class ApiMsServices extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the MSSERVICES service
   * List available services
   */
  public get(path: '/msServices'): Promise<string[]>;
  /**
   * Active Directory organizational unit
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}', params: {serviceName: string}): Promise<msServices.ActiveDirectoryOrganizationalUnit>;
  /**
   * List the msServices.Account objects
   * Accounts associated to this Active Directory service
   */
  public get(path: '/msServices/{serviceName}/account', params: {serviceName: string, id?: number, userPrincipalName?: string}): Promise<string[]>;
  /**
   * Active Directory Account
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.Account>;
  /**
   * Exchange mailbox information
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.ExchangeInformation>;
  /**
   * Multi Factor Authentication informations
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.MfaInformation>;
  /**
   * Sharepoint account information
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.SharepointInformation>;
  /**
   * Sync account information
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.SyncInformation>;
  /**
   * Exchange service
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/exchange', params: {serviceName: string}): Promise<msServices.ExchangeService>;
  /**
   * billingMigrated operations
   * Detects billing transition status for the service
   */
  public get(path: '/msServices/{serviceName}/exchange/billingMigrated', params: {serviceName: string}): Promise<boolean>;
  /**
   * List the msServices.exchangeTask objects
   * Pending actions
   */
  public get(path: '/msServices/{serviceName}/exchange/task', params: {serviceName: string}): Promise<number[]>;
  /**
   * Exchange task details
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/exchange/task/{id}', params: {serviceName: string, id: string}): Promise<msServices.exchangeTask>;
  /**
   * Sharepoint service
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/sharepoint', params: {serviceName: string}): Promise<msServices.SharepointService>;
  /**
   * billingMigrated operations
   * Detects billing transition status for the service
   */
  public get(path: '/msServices/{serviceName}/sharepoint/billingMigrated', params: {serviceName: string}): Promise<boolean>;
  /**
   * license operations
   * Get active licenses for specific period of time
   */
  public get(path: '/msServices/{serviceName}/sharepoint/license', params: {serviceName: string, license?: OVH.msServices.SharepointLicenseEnum, period: OVH.msServices.LicensePeriodEnum}): Promise<msServices.SharepointDailyLicense[]>;
  /**
   * List the msServices.sharepointTask objects
   * Pending actions
   */
  public get(path: '/msServices/{serviceName}/sharepoint/task', params: {serviceName: string, function_?: string, status?: OVH.msServices.TaskStatusEnum}): Promise<number[]>;
  /**
   * Sharepoint task details
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/sharepoint/task/{id}', params: {serviceName: string, id: string}): Promise<msServices.sharepointTask>;
  /**
   * Sync service
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/sync', params: {serviceName: string}): Promise<msServices.SyncService>;
  /**
   * Temporary link to ADSync software executable
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/sync/clientSoftwareURL', params: {serviceName: string}): Promise<msServices.ActiveDirectorySyncClientUrl>;
  /**
   * license operations
   * Get active licenses for specific period of time
   */
  public get(path: '/msServices/{serviceName}/sync/license', params: {serviceName: string, license?: OVH.msServices.SyncLicenseEnum, period: OVH.msServices.LicensePeriodEnum}): Promise<msServices.SyncDailyLicense[]>;
  /**
   * List the msServices.Task objects
   * Pending actions
   */
  public get(path: '/msServices/{serviceName}/task', params: {serviceName: string, function_?: OVH.msServices.TaskFunctionEnum, status?: OVH.msServices.TaskStatusEnum}): Promise<number[]>;
  /**
   * Active Directory task details
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/task/{id}', params: {serviceName: string, id: string}): Promise<msServices.Task>;
  /**
   * List the msServices.upnSuffix objects
   * active directory UPN suffix
   */
  public get(path: '/msServices/{serviceName}/upnSuffix', params: {serviceName: string}): Promise<string[]>;
  /**
   * Active Directory UPN Suffix
   * Get this object properties
   */
  public get(path: '/msServices/{serviceName}/upnSuffix/{suffix}', params: {serviceName: string, suffix: string}): Promise<msServices.upnSuffix>;
  /**
   * Operations about the SHAREPOINT service
   * List available services
   */
  public get(path: '/msServices/sharepoint'): Promise<string[]>;
  /**
   * Sharepoint service
   * Get this object properties
   */
  public get(path: '/msServices/sharepoint/{domain}', params: {domain: string}): Promise<msServices.SharepointServiceInfo>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/msServices/sharepoint/{domain}/serviceInfos', params: {domain: string}): Promise<services.Service>;
  public get(path: PathsMsServicesGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Active Directory organizational unit
   * Alter this object properties
   */
  public put(path: '/msServices/{serviceName}', params: {serviceName: string, complexityEnabled?: boolean, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, minPasswordAge?: number, minPasswordLength?: number, name?: string, officeTenantServiceName?: string, state?: OVH.msServices.ServiceStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Active Directory Account
   * Alter this object properties
   */
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}', params: {serviceName: string, userPrincipalName: string, SAMAccountName?: string, creationDate?: string, displayName?: string, firstName?: string, guid?: string, id?: number, initials?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, passwordLastUpdate?: string, state?: OVH.msServices.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Exchange mailbox information
   * Alter this object properties
   */
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange', params: {serviceName: string, userPrincipalName: string, accountLicense?: OVH.msServices.ExchangeLicenceEnum, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, deleteOutlookAtExpiration?: boolean, exchangeGuid?: string, expirationDate?: string, expirationOutlookDate?: string, hiddenFromGAL?: boolean, id?: number, litigation?: boolean, litigationPeriod?: number, mailingFilter?: OVH.msServices.MailingFilterEnum[], outlookLicense?: boolean, owaLimited?: boolean, primaryEmailAddress?: string, quota?: number, renewOutlookPeriod?: OVH.msServices.RenewPeriodEnum, renewPeriod?: OVH.msServices.RenewPeriodEnum, spamAndVirusConfiguration?: OVH.msServices.SpamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: OVH.msServices.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Sharepoint account information
   * Alter this object properties
   */
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint', params: {serviceName: string, userPrincipalName: string, accessRights?: OVH.msServices.SharepointAccountAccessRightsEnum, activeDirectoryAccountId?: number, configured?: boolean, currentUsage?: number, deleteAtExpiration?: boolean, id?: number, license?: OVH.msServices.SharepointLicenseEnum, officeLicense?: boolean, quota?: number, state?: OVH.msServices.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Exchange service
   * Alter this object properties
   */
  public put(path: '/msServices/{serviceName}/exchange', params: {serviceName: string, displayName?: string, domain?: string, hostname?: string, maxReceiveSize?: number, maxSendSize?: number, offer?: OVH.msServices.ServiceOfferEnum, spamAndVirusConfiguration?: OVH.msServices.SpamAndVirusConfiguration, sslExpirationDate?: string, state?: OVH.msServices.ServiceStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Sharepoint service
   * Alter this object properties
   */
  public put(path: '/msServices/{serviceName}/sharepoint', params: {serviceName: string, currentUsage?: number, displayName?: string, domain?: string, farmUrl?: string, offer?: OVH.msServices.SharepointServiceOfferEnum, quota?: number, state?: OVH.msServices.ServiceStateEnum, taskPendingId?: number, url?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/msServices/sharepoint/{domain}/serviceInfos', params: {domain: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsMsServicesPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changePassword operations
   * Change account password
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/changePassword', params: {serviceName: string, userPrincipalName: string, password: string}): Promise<msServices.Task>;
  /**
   * configure operations
   * Configure mailbox to be operational
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.exchangeTask>;
  /**
   * Multi Factor Authentication informations
   * Create Multi Factor Authentication for this account
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.Task>;
  /**
   * disable operations
   * Disable Multi Factor Authentication for a period of time
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable', params: {serviceName: string, userPrincipalName: string, period: number}): Promise<msServices.Task>;
  /**
   * enable operations
   * Enable Mfa (enabled by default when created)
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.Task>;
  /**
   * reset operations
   * Reset Multi Factor Authentication status for this account
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.Task>;
  /**
   * clearSpace operations
   * On-demand MySite clearance
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.sharepointTask>;
  /**
   * configure operations
   * Configure sharepoint account to be operational
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.sharepointTask>;
  /**
   * Sync account information
   * Create new sync account
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', params: {serviceName: string, userPrincipalName: string, license: OVH.msServices.SyncLicenseEnum}): Promise<msServices.Task>;
  /**
   * configure operations
   * Configure sync account to be operational
   */
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync/configure', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.Task>;
  /**
   * restoreAdminRights operations
   * Restore administrator rights
   */
  public post(path: '/msServices/{serviceName}/sharepoint/restoreAdminRights', params: {serviceName: string}): Promise<msServices.sharepointTask>;
  /**
   * changePassword operations
   * Change account password
   */
  public post(path: '/msServices/{serviceName}/sync/changePassword', params: {serviceName: string, password: string}): Promise<msServices.Task>;
  /**
   * Temporary link to ADSync software executable
   * Generate temporary link to ADSync software executable
   */
  public post(path: '/msServices/{serviceName}/sync/clientSoftwareURL', params: {serviceName: string}): Promise<msServices.Task>;
  /**
   * List the msServices.upnSuffix objects
   * Create new UPN suffix
   */
  public post(path: '/msServices/{serviceName}/upnSuffix', params: {serviceName: string, suffix: string}): Promise<msServices.Task>;
  public post(path: PathsMsServicesPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Multi Factor Authentication informations
   * Delete Multi Factor Authentication feature for this account
   */
  public delete(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.Task>;
  /**
   * Sync account information
   * Delete sync account
   */
  public delete(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', params: {serviceName: string, userPrincipalName: string}): Promise<msServices.Task>;
  /**
   * Sync service
   * Delete sync service
   */
  public delete(path: '/msServices/{serviceName}/sync', params: {serviceName: string}): Promise<msServices.Task>;
  /**
   * Active Directory UPN Suffix
   * Delete existing UPN suffix
   */
  public delete(path: '/msServices/{serviceName}/upnSuffix/{suffix}', params: {serviceName: string, suffix: string}): Promise<msServices.Task>;
  public delete(path: PathsMsServicesDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
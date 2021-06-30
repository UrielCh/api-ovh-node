import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /msServices Models
 * Source: https://ca.api.ovh.com/1.0/msServices.json
 */
export namespace email {
    export namespace exchange {
        /**
         * Country Code iso
         * type fullname: email.exchange.CountryCodeEnum
         */
        export type CountryCodeEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    }
}
export namespace msServices {
    /**
     * Active Directory Account
     * interface fullName: msServices.Account.Account
     */
    export interface Account {
        SAMAccountName?: string;
        city?: string;
        countryCode?: email.exchange.CountryCodeEnum;
        creationDate?: string;
        description?: string;
        displayName?: string;
        fax?: string;
        firstName?: string;
        guid?: string;
        id: number;
        initials?: string;
        jobDepartment?: string;
        jobTitle?: string;
        lastLogoffDate?: string;
        lastLogonDate?: string;
        lastName?: string;
        lastUpdateDate?: string;
        mobile?: string;
        office?: string;
        passwordLastUpdate?: string;
        phone?: string;
        postalCode?: string;
        region?: string;
        state: msServices.ObjectStateEnum;
        streetAddress?: string;
        taskPendingId: number;
        userPrincipalName: string;
    }
    /**
     * Active Directory organizational unit
     * interface fullName: msServices.ActiveDirectoryOrganizationalUnit.ActiveDirectoryOrganizationalUnit
     */
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
    /**
     * Temporary link to ADSync software executable
     * interface fullName: msServices.ActiveDirectorySyncClientUrl.ActiveDirectorySyncClientUrl
     */
    export interface ActiveDirectorySyncClientUrl {
        expiration: string;
        url: string;
    }
    /**
     * Exchange mailbox information
     * interface fullName: msServices.ExchangeInformation.ExchangeInformation
     */
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
    /**
     * Exchange account licence
     * type fullname: msServices.ExchangeLicenceEnum
     */
    export type ExchangeLicenceEnum = "basic" | "enterprise" | "standard"
    /**
     * Exchange service
     * interface fullName: msServices.ExchangeService.ExchangeService
     */
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
    /**
     * Period of time used to determine license statistics
     * type fullname: msServices.LicensePeriodEnum
     */
    export type LicensePeriodEnum = "lastMonth" | "lastQuarter" | "lastWeek" | "lastYear"
    /**
     * Mailing filter options availlable
     * type fullname: msServices.MailingFilterEnum
     */
    export type MailingFilterEnum = "vaderetro"
    /**
     * Multi Factor Authentication informations
     * interface fullName: msServices.MfaInformation.MfaInformation
     */
    export interface MfaInformation {
        activated: boolean;
        state: msServices.ObjectStateEnum;
        taskPendingId: number;
    }
    /**
     * Current object state
     * type fullname: msServices.ObjectStateEnum
     */
    export type ObjectStateEnum = "creating" | "deleting" | "modifying" | "ok" | "reopening" | "suspended" | "suspending"
    /**
     * Renew period
     * type fullname: msServices.RenewPeriodEnum
     */
    export type RenewPeriodEnum = "monthly" | "yearly"
    /**
     * Service Offer name
     * type fullname: msServices.ServiceOfferEnum
     */
    export type ServiceOfferEnum = "dedicated" | "dedicatedCluster" | "hosted" | "provider"
    /**
     * Service State
     * type fullname: msServices.ServiceStateEnum
     */
    export type ServiceStateEnum = "creating" | "deleting" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
    /**
     * Account access rights to the service
     * type fullname: msServices.SharepointAccountAccessRightsEnum
     */
    export type SharepointAccountAccessRightsEnum = "administrator" | "user"
    /**
     * Sharepoint account license
     * interface fullName: msServices.SharepointAccountLicense.SharepointAccountLicense
     */
    export interface SharepointAccountLicense {
        license: msServices.SharepointLicenseEnum;
        licenseQuantity: number;
    }
    /**
     * Sharepoint account license per day
     * interface fullName: msServices.SharepointDailyLicense.SharepointDailyLicense
     */
    export interface SharepointDailyLicense {
        accountLicense: msServices.SharepointAccountLicense[];
        date: string;
    }
    /**
     * Sharepoint account information
     * interface fullName: msServices.SharepointInformation.SharepointInformation
     */
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
    /**
     * Sharepoint account license
     * type fullname: msServices.SharepointLicenseEnum
     */
    export type SharepointLicenseEnum = "foundation" | "standard"
    /**
     * Sharepoint service
     * interface fullName: msServices.SharepointService.SharepointService
     */
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
    /**
     * Sharepoint service
     * interface fullName: msServices.SharepointServiceInfo.SharepointServiceInfo
     */
    export interface SharepointServiceInfo {
        domain: string;
    }
    /**
     * Sharepoint service offer name
     * type fullname: msServices.SharepointServiceOfferEnum
     */
    export type SharepointServiceOfferEnum = "hosted" | "provider"
    /**
     * Spam and Antivirus configuration
     * interface fullName: msServices.SpamAndVirusConfiguration.SpamAndVirusConfiguration
     */
    export interface SpamAndVirusConfiguration {
        checkDKIM: boolean;
        checkSPF: boolean;
        deleteSpam: boolean;
        deleteVirus: boolean;
        putInJunk: boolean;
        tagSpam: boolean;
        tagVirus: boolean;
    }
    /**
     * Sync account license
     * interface fullName: msServices.SyncAccountLicense.SyncAccountLicense
     */
    export interface SyncAccountLicense {
        license: msServices.SyncLicenseEnum;
        licenseQuantity: number;
    }
    /**
     * Sync account license per day
     * interface fullName: msServices.SyncDailyLicense.SyncDailyLicense
     */
    export interface SyncDailyLicense {
        accountLicense: msServices.SyncAccountLicense[];
        date: string;
    }
    /**
     * Sync account information
     * interface fullName: msServices.SyncInformation.SyncInformation
     */
    export interface SyncInformation {
        configured: boolean;
        license: msServices.SyncLicenseEnum;
        state: msServices.ObjectStateEnum;
        taskPendingId: number;
    }
    /**
     * Sync account license
     * type fullname: msServices.SyncLicenseEnum
     */
    export type SyncLicenseEnum = "standard" | "standardFree"
    /**
     * Sync service
     * interface fullName: msServices.SyncService.SyncService
     */
    export interface SyncService {
        state: msServices.ServiceStateEnum;
        taskPendingId: number;
    }
    /**
     * Active Directory task details
     * interface fullName: msServices.Task.Task
     */
    export interface Task {
        finishDate?: string;
        function: msServices.TaskFunctionEnum;
        id: number;
        status: msServices.TaskStatusEnum;
        todoDate: string;
    }
    /**
     * function enumeration for Active Directory task
     * type fullname: msServices.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "activateADSync" | "activateSharepoint" | "addADAccount" | "addADOU" | "addADSyncAccount" | "addADUPNSuffix" | "alterMfaOnAllUsers" | "changeADPassword" | "changeADSyncPassword" | "deactivateADSync" | "delADOU" | "deleteADAccount" | "deleteADSyncAccount" | "deleteADUPNSuffix" | "disableADAccountMfa" | "disableADAccountMfaTemporary" | "enableADAccountMfa" | "enableADSyncAccount" | "generateADSyncClientUrl" | "resetADAccountMfa" | "setADAccount" | "setPasswordPolicy"
    /**
     * ActiveDirectory task status
     * type fullname: msServices.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    /**
     * Active Directory UPN Suffix State
     * type fullname: msServices.UPNStateEnum
     */
    export type UPNStateEnum = "creating" | "deleting" | "ok"
    /**
     * Exchange task details
     * interface fullName: msServices.exchangeTask.exchangeTask
     */
    export interface exchangeTask {
        finishDate?: string;
        function: string;
        id: number;
        status: msServices.TaskStatusEnum;
        todoDate: string;
    }
    /**
     * Sharepoint task details
     * interface fullName: msServices.sharepointTask.sharepointTask
     */
    export interface sharepointTask {
        finishDate?: string;
        function: string;
        id: number;
        status: msServices.TaskStatusEnum;
        todoDate: string;
    }
    /**
     * Active Directory UPN Suffix
     * interface fullName: msServices.upnSuffix.upnSuffix
     */
    export interface upnSuffix {
        cnameToCheck?: string;
        ownershipValidated: boolean;
        state: msServices.UPNStateEnum;
        suffix: string;
        taskPendingId: number;
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
 * END API /msServices Models
 */
export function proxyMsServices(ovhEngine: OvhRequestable): MsServices {
    return buildOvhProxy(ovhEngine, '/msServices');
}
export default proxyMsServices;
/**
 * Api model for /msServices
 */
export interface MsServices {
    /**
     * List available services
     * GET /msServices
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    sharepoint: {
        /**
         * List available services
         * GET /msServices/sharepoint
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(domain: string): {
            /**
             * Get this object properties
             * GET /msServices/sharepoint/{domain}
             */
            $get(): Promise<msServices.SharepointServiceInfo>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /msServices/sharepoint/{domain}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /msServices/sharepoint/{domain}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /msServices/{serviceName}
         */
        $get(): Promise<msServices.ActiveDirectoryOrganizationalUnit>;
        /**
         * Alter this object properties
         * PUT /msServices/{serviceName}
         */
        $put(params?: { complexityEnabled?: boolean, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, minPasswordAge?: number, minPasswordLength?: number, name?: string, officeTenantServiceName?: string, state?: msServices.ServiceStateEnum, taskPendingId?: number }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        account: {
            /**
             * Accounts associated to this Active Directory service
             * GET /msServices/{serviceName}/account
             */
            $get(params?: { id?: number, userPrincipalName?: string }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(userPrincipalName: string): {
                /**
                 * Get this object properties
                 * GET /msServices/{serviceName}/account/{userPrincipalName}
                 */
                $get(): Promise<msServices.Account>;
                /**
                 * Alter this object properties
                 * PUT /msServices/{serviceName}/account/{userPrincipalName}
                 */
                $put(params?: { SAMAccountName?: string, city?: string, countryCode?: email.exchange.CountryCodeEnum, creationDate?: string, description?: string, displayName?: string, fax?: string, firstName?: string, guid?: string, id?: number, initials?: string, jobDepartment?: string, jobTitle?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, mobile?: string, office?: string, passwordLastUpdate?: string, phone?: string, postalCode?: string, region?: string, state?: msServices.ObjectStateEnum, streetAddress?: string, taskPendingId?: number, userPrincipalName?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changePassword: {
                    /**
                     * Change account password
                     * POST /msServices/{serviceName}/account/{userPrincipalName}/changePassword
                     */
                    $post(params: { password: string }): Promise<msServices.Task>;
                }
                exchange: {
                    /**
                     * Get this object properties
                     * GET /msServices/{serviceName}/account/{userPrincipalName}/exchange
                     */
                    $get(): Promise<msServices.ExchangeInformation>;
                    /**
                     * Alter this object properties
                     * PUT /msServices/{serviceName}/account/{userPrincipalName}/exchange
                     */
                    $put(params?: { accountLicense?: msServices.ExchangeLicenceEnum, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, deleteOutlookAtExpiration?: boolean, exchangeGuid?: string, expirationDate?: string, expirationOutlookDate?: string, hiddenFromGAL?: boolean, id?: number, litigation?: boolean, litigationPeriod?: number, mailingFilter?: msServices.MailingFilterEnum[], numberOfAliases?: number, outlookLicense?: boolean, owaLimited?: boolean, primaryEmailAddress?: string, quota?: number, renewOutlookPeriod?: msServices.RenewPeriodEnum, renewPeriod?: msServices.RenewPeriodEnum, spamAndVirusConfiguration?: msServices.SpamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: msServices.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    configure: {
                        /**
                         * Configure mailbox to be operational
                         * POST /msServices/{serviceName}/account/{userPrincipalName}/exchange/configure
                         */
                        $post(): Promise<msServices.exchangeTask>;
                    }
                }
                mfa: {
                    /**
                     * Delete Multi Factor Authentication feature for this account
                     * DELETE /msServices/{serviceName}/account/{userPrincipalName}/mfa
                     */
                    $delete(): Promise<msServices.Task>;
                    /**
                     * Get this object properties
                     * GET /msServices/{serviceName}/account/{userPrincipalName}/mfa
                     */
                    $get(): Promise<msServices.MfaInformation>;
                    /**
                     * Create Multi Factor Authentication for this account
                     * POST /msServices/{serviceName}/account/{userPrincipalName}/mfa
                     */
                    $post(): Promise<msServices.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    disable: {
                        /**
                         * Disable Multi Factor Authentication for a period of time
                         * POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/disable
                         */
                        $post(params: { period: number }): Promise<msServices.Task>;
                    }
                    enable: {
                        /**
                         * Enable Mfa (enabled by default when created)
                         * POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/enable
                         */
                        $post(): Promise<msServices.Task>;
                    }
                    reset: {
                        /**
                         * Reset Multi Factor Authentication status for this account
                         * POST /msServices/{serviceName}/account/{userPrincipalName}/mfa/reset
                         */
                        $post(): Promise<msServices.Task>;
                    }
                }
                sharepoint: {
                    /**
                     * Get this object properties
                     * GET /msServices/{serviceName}/account/{userPrincipalName}/sharepoint
                     */
                    $get(): Promise<msServices.SharepointInformation>;
                    /**
                     * Alter this object properties
                     * PUT /msServices/{serviceName}/account/{userPrincipalName}/sharepoint
                     */
                    $put(params?: { accessRights?: msServices.SharepointAccountAccessRightsEnum, activeDirectoryAccountId?: number, configured?: boolean, currentUsage?: number, deleteAtExpiration?: boolean, id?: number, license?: msServices.SharepointLicenseEnum, officeLicense?: boolean, quota?: number, state?: msServices.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    clearSpace: {
                        /**
                         * On-demand MySite clearance
                         * POST /msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace
                         */
                        $post(): Promise<msServices.sharepointTask>;
                    }
                    configure: {
                        /**
                         * Configure sharepoint account to be operational
                         * POST /msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure
                         */
                        $post(): Promise<msServices.sharepointTask>;
                    }
                }
                sync: {
                    /**
                     * Delete sync account
                     * DELETE /msServices/{serviceName}/account/{userPrincipalName}/sync
                     */
                    $delete(): Promise<msServices.Task>;
                    /**
                     * Get this object properties
                     * GET /msServices/{serviceName}/account/{userPrincipalName}/sync
                     */
                    $get(): Promise<msServices.SyncInformation>;
                    /**
                     * Create new sync account
                     * POST /msServices/{serviceName}/account/{userPrincipalName}/sync
                     */
                    $post(params: { license: msServices.SyncLicenseEnum }): Promise<msServices.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    configure: {
                        /**
                         * Configure sync account to be operational
                         * POST /msServices/{serviceName}/account/{userPrincipalName}/sync/configure
                         */
                        $post(): Promise<msServices.Task>;
                    }
                }
            };
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /msServices/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        createMfaOnAllUsers: {
            /**
             * Create Mfa on all accounts.
             * POST /msServices/{serviceName}/createMfaOnAllUsers
             */
            $post(): Promise<msServices.Task>;
        }
        exchange: {
            /**
             * Get this object properties
             * GET /msServices/{serviceName}/exchange
             */
            $get(): Promise<msServices.ExchangeService>;
            /**
             * Alter this object properties
             * PUT /msServices/{serviceName}/exchange
             */
            $put(params?: { displayName?: string, domain?: string, hostname?: string, maxReceiveSize?: number, maxSendSize?: number, offer?: msServices.ServiceOfferEnum, spamAndVirusConfiguration?: msServices.SpamAndVirusConfiguration, sslExpirationDate?: string, state?: msServices.ServiceStateEnum, taskPendingId?: number }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            billingMigrated: {
                /**
                 * Detects billing transition status for the service
                 * GET /msServices/{serviceName}/exchange/billingMigrated
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * Pending actions
                 * GET /msServices/{serviceName}/exchange/task
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /msServices/{serviceName}/exchange/task/{id}
                     */
                    $get(): Promise<msServices.exchangeTask>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        removeMfaOnAllUsers: {
            /**
             * Remove Mfa on all accounts.
             * POST /msServices/{serviceName}/removeMfaOnAllUsers
             */
            $post(): Promise<msServices.Task>;
        }
        sharepoint: {
            /**
             * Get this object properties
             * GET /msServices/{serviceName}/sharepoint
             */
            $get(): Promise<msServices.SharepointService>;
            /**
             * Alter this object properties
             * PUT /msServices/{serviceName}/sharepoint
             */
            $put(params?: { currentUsage?: number, displayName?: string, domain?: string, farmUrl?: string, offer?: msServices.SharepointServiceOfferEnum, quota?: number, state?: msServices.ServiceStateEnum, taskPendingId?: number, url?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            billingMigrated: {
                /**
                 * Detects billing transition status for the service
                 * GET /msServices/{serviceName}/sharepoint/billingMigrated
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            license: {
                /**
                 * Get active licenses for specific period of time
                 * GET /msServices/{serviceName}/sharepoint/license
                 */
                $get(params: { license?: msServices.SharepointLicenseEnum, period: msServices.LicensePeriodEnum }): Promise<msServices.SharepointDailyLicense[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            restoreAdminRights: {
                /**
                 * Restore administrator rights
                 * POST /msServices/{serviceName}/sharepoint/restoreAdminRights
                 */
                $post(): Promise<msServices.sharepointTask>;
            }
            task: {
                /**
                 * Pending actions
                 * GET /msServices/{serviceName}/sharepoint/task
                 */
                $get(params?: { function_?: string, status?: msServices.TaskStatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /msServices/{serviceName}/sharepoint/task/{id}
                     */
                    $get(): Promise<msServices.sharepointTask>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        sync: {
            /**
             * Delete sync service
             * DELETE /msServices/{serviceName}/sync
             */
            $delete(): Promise<msServices.Task>;
            /**
             * Get this object properties
             * GET /msServices/{serviceName}/sync
             */
            $get(): Promise<msServices.SyncService>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changePassword: {
                /**
                 * Change account password
                 * POST /msServices/{serviceName}/sync/changePassword
                 */
                $post(params: { password: string }): Promise<msServices.Task>;
            }
            clientSoftwareURL: {
                /**
                 * Get this object properties
                 * GET /msServices/{serviceName}/sync/clientSoftwareURL
                 */
                $get(): Promise<msServices.ActiveDirectorySyncClientUrl>;
                /**
                 * Generate temporary link to ADSync software executable
                 * POST /msServices/{serviceName}/sync/clientSoftwareURL
                 */
                $post(): Promise<msServices.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            license: {
                /**
                 * Get active licenses for specific period of time
                 * GET /msServices/{serviceName}/sync/license
                 */
                $get(params: { license?: msServices.SyncLicenseEnum, period: msServices.LicensePeriodEnum }): Promise<msServices.SyncDailyLicense[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        task: {
            /**
             * Pending actions
             * GET /msServices/{serviceName}/task
             */
            $get(params?: { function_?: msServices.TaskFunctionEnum, status?: msServices.TaskStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /msServices/{serviceName}/task/{id}
                 */
                $get(): Promise<msServices.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        upnSuffix: {
            /**
             * active directory UPN suffix
             * GET /msServices/{serviceName}/upnSuffix
             */
            $get(): Promise<string[]>;
            /**
             * Create new UPN suffix
             * POST /msServices/{serviceName}/upnSuffix
             */
            $post(params: { suffix: string }): Promise<msServices.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(suffix: string): {
                /**
                 * Delete existing UPN suffix
                 * DELETE /msServices/{serviceName}/upnSuffix/{suffix}
                 */
                $delete(): Promise<msServices.Task>;
                /**
                 * Get this object properties
                 * GET /msServices/{serviceName}/upnSuffix/{suffix}
                 */
                $get(): Promise<msServices.upnSuffix>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    };
}

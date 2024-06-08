import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /email/exchange Models
 * Source: https://ca.api.ovh.com/1.0/email/exchange.json
 */
export namespace email {
    export namespace exchange {
        /**
         * Exchange mailbox
         * interface fullName: email.exchange.Account.Account
         */
        export interface Account {
            SAMAccountName?: string;
            accountLicense: email.exchange.OvhLicenceEnum;
            city?: string;
            company?: string;
            configured: boolean;
            countryCode?: email.exchange.CountryCodeEnum;
            creationDate?: string;
            currentUsage?: number;
            customIsolationId?: number;
            deleteAtExpiration?: boolean;
            deleteOutlookAtExpiration?: boolean;
            description?: string;
            displayName?: string;
            domain: string;
            exchangeGuid?: string;
            expirationDate?: string;
            expirationOutlookDate?: string;
            fax?: string;
            firstName?: string;
            forwardingEmail?: string;
            guid?: string;
            hiddenFromGAL: boolean;
            id: number;
            initial?: string;
            jobDepartment?: string;
            jobTitle?: string;
            lastLogoffDate?: string;
            lastLogonDate?: string;
            lastName?: string;
            lastUpdateDate?: string;
            litigation: boolean;
            litigationPeriod?: number;
            login: string;
            mailSenderDisplay?: string;
            mailingFilter?: email.exchange.MailingFilterEnum[];
            mobile?: string;
            numberOfAliases: number;
            office?: string;
            outlookLicense: boolean;
            owaLimited: boolean;
            passwordLastUpdate?: string;
            phone?: string;
            postalCode?: string;
            primaryEmailAddress: string;
            quota: number;
            region?: string;
            renewOutlookPeriod?: email.exchange.renewPeriodEnum;
            renewPeriod?: email.exchange.renewPeriodEnum;
            sbrDestination?: string;
            sendConnectorId?: number;
            spamAndVirusConfiguration: email.exchange.spamAndVirusConfiguration;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: email.exchange.ObjectStateEnum;
            storeCopyOfEmail: boolean;
            streetAddress?: string;
            taskPendingId?: number;
        }
        /**
         * Exchange account license
         * interface fullName: email.exchange.AccountLicense.AccountLicense
         */
        export interface AccountLicense {
            license: email.exchange.OvhLicenceEnum;
            licenseQuantity: number;
        }
        /**
         * Activesync action
         * type fullname: email.exchange.ActiveSyncPolicyEnum
         */
        export type ActiveSyncPolicyEnum = "allow" | "block" | "quarantine"
        /**
         * Country Code iso
         * type fullname: email.exchange.CountryCodeEnum
         */
        export type CountryCodeEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
        /**
         * Exchange account license per day
         * interface fullName: email.exchange.DailyLicense.DailyLicense
         */
        export interface DailyLicense {
            accountLicense: email.exchange.AccountLicense[];
            date: string;
            outlookQuantity: number;
        }
        /**
         * Device ActiveSync state
         * type fullname: email.exchange.DeviceActiveSyncStateEnum
         */
        export type DeviceActiveSyncStateEnum = "allowed" | "blocked" | "deviceDiscovery" | "quarantined"
        /**
         * Disclaimer attributes list
         * type fullname: email.exchange.DisclaimerAttributeEnum
         */
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        /**
         * Exchange domain
         * interface fullName: email.exchange.Domain.Domain
         */
        export interface Domain {
            cnameToCheck?: string;
            dkimDiagnostics: email.exchange.DomainDkimDiagnostics;
            domainAliases: string[];
            domainValidated: boolean;
            expectedAutodiscoverSRV: string;
            expectedMX: string[];
            expectedSPF: string;
            isAliasDomain: boolean;
            main?: boolean;
            mxIsValid: boolean;
            mxRecord?: string[];
            mxRelay?: string;
            name: string;
            organization2010?: string;
            sbrDefault?: string;
            sendConnectorIdDefault?: number;
            spfIsValid: boolean;
            spfRecord?: string[];
            srvIsValid: boolean;
            srvRecord?: string[];
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
            type: email.exchange.DomainTypeEnum;
        }
        /**
         * DKIM diagnostics information for domain
         * interface fullName: email.exchange.DomainDkimDiagnostics.DomainDkimDiagnostics
         */
        export interface DomainDkimDiagnostics {
            errorCode?: number;
            message?: string;
            state: email.exchange.DomainDkimDiagnosticsStateEnum;
        }
        /**
         * Domain DKIM state
         * type fullname: email.exchange.DomainDkimDiagnosticsStateEnum
         */
        export type DomainDkimDiagnosticsStateEnum = "active" | "disabled" | "error" | "inProgress" | "toConfigure"
        /**
         * Domain type
         * type fullname: email.exchange.DomainTypeEnum
         */
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
        /**
         * Exchange service
         * interface fullName: email.exchange.ExchangeService.ExchangeService
         */
        export interface ExchangeService {
            adfsChangePassword: boolean;
            complexityEnabled: boolean;
            displayName?: string;
            domain: string;
            hostname?: string;
            lastUpdateDate?: string;
            lockoutDuration: number;
            lockoutObservationWindow: number;
            lockoutThreshold?: number;
            maxPasswordAge?: number;
            maxReceiveSize: number;
            maxSendSize: number;
            minPasswordAge?: number;
            minPasswordLength?: number;
            offer: email.exchange.ServiceOfferEnum;
            passwordHistoryCount?: number;
            spamAndVirusConfiguration: email.exchange.spamAndVirusConfiguration;
            sslExpirationDate?: string;
            state: email.exchange.ServiceStateEnum;
            taskPendingId: number;
            webUrl?: string;
        }
        /**
         * Exchange service
         * interface fullName: email.exchange.ExchangeServiceWithIAM.ExchangeServiceWithIAM
         */
        export interface ExchangeServiceWithIAM {
            adfsChangePassword: boolean;
            complexityEnabled: boolean;
            displayName?: string;
            domain: string;
            hostname?: string;
            iam?: iam.ResourceMetadata;
            lastUpdateDate?: string;
            lockoutDuration: number;
            lockoutObservationWindow: number;
            lockoutThreshold?: number;
            maxPasswordAge?: number;
            maxReceiveSize: number;
            maxSendSize: number;
            minPasswordAge?: number;
            minPasswordLength?: number;
            offer: email.exchange.ServiceOfferEnum;
            passwordHistoryCount?: number;
            spamAndVirusConfiguration: email.exchange.spamAndVirusConfiguration;
            sslExpirationDate?: string;
            state: email.exchange.ServiceStateEnum;
            taskPendingId: number;
            webUrl?: string;
        }
        /**
         * Export PST file request
         * interface fullName: email.exchange.Export.Export
         */
        export interface Export {
            creationDate: string;
            percentComplete: number;
            taskPendingId: number;
        }
        /**
         * Export PST file url
         * interface fullName: email.exchange.ExportUrl.ExportUrl
         */
        export interface ExportUrl {
            expiration: string;
            url: string;
        }
        /**
         * Outlook language
         * type fullname: email.exchange.LanguageEnum
         */
        export type LanguageEnum = "ar" | "bg" | "cz" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "id" | "in" | "it" | "ja" | "ko" | "kz" | "lt" | "lv" | "ms" | "nb" | "nl" | "pl" | "pt" | "pt-BR" | "ro" | "rs" | "ru" | "sk" | "sl" | "sv" | "th" | "tr" | "uk" | "vi" | "zh-CN"
        /**
         * Mailing filter options availlable
         * type fullname: email.exchange.MailingFilterEnum
         */
        export type MailingFilterEnum = "vaderetro"
        /**
         * Depart distribution group restriction status
         * type fullname: email.exchange.MailingListDepartRestrictionEnum
         */
        export type MailingListDepartRestrictionEnum = "closed" | "open"
        /**
         * Join distribution group restriction status
         * type fullname: email.exchange.MailingListJoinRestrictionEnum
         */
        export type MailingListJoinRestrictionEnum = "approvalRequired" | "closed" | "open"
        /**
         * Current object state
         * type fullname: email.exchange.ObjectStateEnum
         */
        export type ObjectStateEnum = "creating" | "deleting" | "internalMigration" | "ok" | "reopening" | "suspended" | "suspending"
        /**
         * Outlook url
         * interface fullName: email.exchange.OutlookUrl.OutlookUrl
         */
        export interface OutlookUrl {
            expiration: string;
            serial: string;
            url: string;
        }
        /**
         * Outlook version
         * type fullname: email.exchange.OutlookVersionEnum
         */
        export type OutlookVersionEnum = "mac_x86_2016" | "mac_x86_2019" | "mac_x86_2021" | "windows_x64_2016" | "windows_x64_2019" | "windows_x64_2021" | "windows_x86_2016" | "windows_x86_2019" | "windows_x86_2021"
        /**
         * Availability of outlook version
         * interface fullName: email.exchange.OutlookVersions.OutlookVersions
         */
        export interface OutlookVersions {
            outlookLanguage: email.exchange.LanguageEnum;
            outlookVersion: email.exchange.OutlookVersionEnum;
            status: boolean;
        }
        /**
         * custom exchange isolation field
         * type fullname: email.exchange.OvhCustomIsolationFieldEnum
         */
        export type OvhCustomIsolationFieldEnum = "company" | "country"
        /**
         * OVH licence account
         * type fullname: email.exchange.OvhLicenceEnum
         */
        export type OvhLicenceEnum = "basic" | "enterprise" | "standard"
        /**
         * Get public folder quota usage in total available space
         * interface fullName: email.exchange.PublicFolderQuota.PublicFolderQuota
         */
        export interface PublicFolderQuota {
            quotaLimit: number;
            quotaReserved: number;
            quotaUsed: number;
        }
        /**
         * Public folder right type
         * type fullname: email.exchange.PublicFolderRightTypeEnum
         */
        export type PublicFolderRightTypeEnum = "editor" | "none" | "reviewer"
        /**
         * Public folder type
         * type fullname: email.exchange.PublicFolderTypeEnum
         */
        export type PublicFolderTypeEnum = "calendar" | "contacts" | "plain" | "tasks"
        /**
         * Resource Type
         * type fullname: email.exchange.ResourceTypeEnum
         */
        export type ResourceTypeEnum = "equipment" | "room"
        /**
         * Exchange server
         * interface fullName: email.exchange.Server.Server
         */
        export interface Server {
            commercialVersion: email.exchange.exchangeCommercialVersionEnum;
            currentDiskUsage?: number;
            diskSize?: number;
            individual2010: boolean;
            ip: string;
            ipV6?: string;
            isAValid: boolean;
            isAaaaValid: boolean;
            isPtrV6Valid: boolean;
            isPtrValid: boolean;
            owaMfa: boolean;
            state: email.exchange.ServerStateEnum;
            taskPendingId: number;
            version?: number;
        }
        /**
         * Server State
         * type fullname: email.exchange.ServerStateEnum
         */
        export type ServerStateEnum = "configurationError" | "configurationPending" | "notConfigured" | "ok"
        /**
         * Service Offer name
         * type fullname: email.exchange.ServiceOfferEnum
         */
        export type ServiceOfferEnum = "dedicated" | "dedicatedCluster" | "hosted" | "provider"
        /**
         * Exchange Service State
         * type fullname: email.exchange.ServiceStateEnum
         */
        export type ServiceStateEnum = "inMaintenance" | "ok" | "suspended"
        /**
         * Get shared account quota usage in total available space
         * interface fullName: email.exchange.SharedAccountQuota.SharedAccountQuota
         */
        export interface SharedAccountQuota {
            quotaLimit: number;
            quotaReserved: number;
            quotaUsed: number;
            singleMailboxQuotaLimit: number;
        }
        /**
         * Level of access to calendar of Resource Mailbox
         * type fullname: email.exchange.ShowMeetingDetailsEnum
         */
        export type ShowMeetingDetailsEnum = "availabilityOnly" | "limitedDetails" | "reviewer"
        /**
         * Exchange task details
         * interface fullName: email.exchange.Task.Task
         */
        export interface Task {
            finishDate?: string;
            function: email.exchange.TaskFunctionEnum;
            id: number;
            status: email.exchange.TaskStatusEnum;
            todoDate: string;
        }
        /**
         * function enumeration for exchange task
         * type fullname: email.exchange.TaskFunctionEnum
         */
        export type TaskFunctionEnum = "activateSharepoint" | "addAccount" | "addAccountArchive" | "addAccountImpersonation" | "addActiveSyncMailNotification" | "addAlias" | "addDistributionGroup" | "addDistributionGroupManager" | "addDistributionGroupMember" | "addDistributionGroupSendAs" | "addDistributionGroupSendOnBehalfTo" | "addDomain" | "addDomainDisclaimer" | "addExchangeCustomIsolation" | "addExchangeDomainDKIM" | "addExchangeServiceAuthorizedIp" | "addExportPstRequest" | "addExternalContact" | "addFullAccess" | "addOutlookLicense" | "addPublicFolder" | "addPublicFolderPermission" | "addResourceAccount" | "addResourceDelegate" | "addSendAs" | "addSendConnector" | "addSendOnBehalfTo" | "addSharedAccount" | "addSharedAccountFullAccess" | "addSharedAccountSendAs" | "addSharedAccountSendOnBehalfTo" | "changeHostname" | "changePassword" | "clearDataOnDevice" | "cloneTemplateExchangePrivate" | "configureExchangeCustomer" | "configureExchangeOwaMfa" | "deleteAccount" | "deleteAccountArchive" | "deleteAccountImpersonation" | "deleteActiveSyncMailNotification" | "deleteAlias" | "deleteDistributionGroup" | "deleteDistributionGroupManager" | "deleteDistributionGroupMember" | "deleteDistributionGroupSendAs" | "deleteDistributionGroupSendOnBehalfTo" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExchangeCustomIsolation" | "deleteExchangeDomainDKIM" | "deleteExchangeService" | "deleteExchangeServiceAuthorizedIp" | "deleteExportPstRequest" | "deleteExternalContact" | "deleteFullAccess" | "deleteOutlookLicense" | "deletePublicFolder" | "deletePublicFolderPermission" | "deleteResourceAccount" | "deleteResourceDelegate" | "deleteSendAs" | "deleteSendConnector" | "deleteSendOnBehalfTo" | "deleteSharedAccount" | "deleteSharedAccountFullAccess" | "deleteSharedAccountSendAs" | "deleteSharedAccountSendOnBehalfTo" | "destroyPrivateVm" | "diagnoseAccount" | "disableExchangeDKIM" | "enableExchangeDKIM" | "expandDrive" | "generateOutlookUrl" | "generatePstUrl" | "installExchange" | "installSSL" | "maintenance" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationMailingList" | "migrationResourceAccount" | "migrationService" | "reOpenHostedAccount" | "reOpenOutlookLicense" | "reOpenPrivateAccount" | "reOpenPrivateVm" | "setAccount" | "setAccountArchive" | "setAlias" | "setDistributionGroup" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExchangeAccountProtocol" | "setExchangeServiceDevice" | "setExternalContact" | "setPublicFolder" | "setPublicFolderPermission" | "setResourceAccount" | "setSendConnector" | "setService" | "setSharedAccount" | "suspendAccount" | "suspendExchangeService" | "suspendHostedAccount" | "suspendOutlookLicense" | "suspendPrivateAccount" | "suspendPrivateVm" | "unsuspendAccount" | "unsuspendExchangeService" | "unsuspendHostedAccount" | "updateExchangeServiceDevice" | "upgrade2016"
        /**
         * Exchange task status
         * type fullname: email.exchange.TaskStatusEnum
         */
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        /**
         * Subscription state
         * type fullname: email.exchange.activeSyncNotificationStateEnum
         */
        export type activeSyncNotificationStateEnum = "creating" | "deleting" | "ok"
        /**
         * Authorized IP State
         * type fullname: email.exchange.authorizedIpStatusEnum
         */
        export type authorizedIpStatusEnum = "creating" | "deleting" | "ok"
        /**
         * Exchange organization disclaimer
         * interface fullName: email.exchange.disclaimer.disclaimer
         */
        export interface disclaimer {
            content: string;
            creationDate: string;
            name: string;
            outsideOnly: boolean;
            taskPendingId: number;
        }
        /**
         * DKIM for a domain
         * interface fullName: email.exchange.dkim.dkim
         */
        export interface dkim {
            cnameIsValid: boolean;
            customerRecord: string;
            header: string;
            lastUpdate?: string;
            recordType: string;
            selectorName: string;
            status: email.exchange.dkimStatusEnum;
            targetRecord?: string;
            taskPendingId?: number;
        }
        /**
         * dkim status
         * type fullname: email.exchange.dkimStatusEnum
         */
        export type dkimStatusEnum = "deleting" | "disabling" | "enabling" | "inProduction" | "ready" | "todo" | "waitingRecord"
        /**
         * Aliases on this mailbox
         * interface fullName: email.exchange.exchangeAccountAlias.exchangeAccountAlias
         */
        export interface exchangeAccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Exchange Account Archive
         * interface fullName: email.exchange.exchangeAccountArchive.exchangeAccountArchive
         */
        export interface exchangeAccountArchive {
            creationDate: string;
            currentUsage?: number;
            guid?: string;
            quota: number;
            state: email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        /**
         * Exchange Account Diagnosis
         * interface fullName: email.exchange.exchangeAccountDiagnosis.exchangeAccountDiagnosis
         */
        export interface exchangeAccountDiagnosis {
            canReceiveEmail: boolean;
            canSendEmail: boolean;
            connectiveOWA: boolean;
            isLocked: boolean;
            isMxValid: boolean;
            isSpammer: boolean;
            isSrvValid: boolean;
            isSuspended: boolean;
            lastCheck: string;
        }
        /**
         * Users having full access on this mailbox
         * interface fullName: email.exchange.exchangeAccountFullAccess.exchangeAccountFullAccess
         */
        export interface exchangeAccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Get user that has an impersonation right on all that mailboxes
         * interface fullName: email.exchange.exchangeAccountImpersonation.exchangeAccountImpersonation
         */
        export interface exchangeAccountImpersonation {
            creationDate: string;
            lastPasswordChange?: string;
            state: email.exchange.ObjectStateEnum;
            taskPendingId?: number;
            upn: string;
        }
        /**
         * Get protocol status on that mailbox
         * interface fullName: email.exchange.exchangeAccountProtocol.exchangeAccountProtocol
         */
        export interface exchangeAccountProtocol {
            IMAP: boolean;
            POP: boolean;
            activeSync: boolean;
            creationDate: string;
            lastUpdate?: string;
            taskPendingId: number;
            webMail: boolean;
        }
        /**
         * Users authorized to send mails from this mailbox
         * interface fullName: email.exchange.exchangeAccountSendAs.exchangeAccountSendAs
         */
        export interface exchangeAccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Get users authorized to Send On Behalf To mails from this mailbox
         * interface fullName: email.exchange.exchangeAccountSendOnBehalfTo.exchangeAccountSendOnBehalfTo
         */
        export interface exchangeAccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Exchange commercial version
         * type fullname: email.exchange.exchangeCommercialVersionEnum
         */
        export type exchangeCommercialVersionEnum = "2010" | "2013" | "2016" | "2019"
        /**
         * custom exchange isolation
         * interface fullName: email.exchange.exchangeCustomIsolation.exchangeCustomIsolation
         */
        export interface exchangeCustomIsolation {
            creationDate: string;
            isolationField: email.exchange.OvhCustomIsolationFieldEnum;
            isolationValue: string;
            name: string;
            status: email.exchange.ObjectStateEnum;
        }
        /**
         * Mailing list managers
         * interface fullName: email.exchange.exchangeDistributionGroupManager.exchangeDistributionGroupManager
         */
        export interface exchangeDistributionGroupManager {
            creationDate: string;
            managerAccountId: number;
            managerEmailAddress: string;
            taskPendingId: number;
        }
        /**
         * Mailing list members
         * interface fullName: email.exchange.exchangeDistributionGroupMember.exchangeDistributionGroupMember
         */
        export interface exchangeDistributionGroupMember {
            creationDate: string;
            memberAccountId?: number;
            memberContactId?: number;
            memberEmailAddress: string;
            taskPendingId: number;
        }
        /**
         * Get users authorized to Send On Behalf To mails from this mailbox
         * interface fullName: email.exchange.exchangeDistributionGroupSendAs.exchangeDistributionGroupSendAs
         */
        export interface exchangeDistributionGroupSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Get users authorized to Send On Behalf To mails from this mailing list
         * interface fullName: email.exchange.exchangeDistributionGroupSendOnBehalfTo.exchangeDistributionGroupSendOnBehalfTo
         */
        export interface exchangeDistributionGroupSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * External contact for this exchange service
         * interface fullName: email.exchange.exchangeExternalContact.exchangeExternalContact
         */
        export interface exchangeExternalContact {
            creationDate: string;
            displayName: string;
            externalEmailAddress: string;
            firstName?: string;
            hiddenFromGAL: boolean;
            id: number;
            initials?: string;
            lastName?: string;
            organization2010?: string;
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
        }
        /**
         * Get aliases on this mailingList
         * interface fullName: email.exchange.exchangeMailingListAlias.exchangeMailingListAlias
         */
        export interface exchangeMailingListAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Exchange organization public folder permission
         * interface fullName: email.exchange.exchangePublicFolderPermission.exchangePublicFolderPermission
         */
        export interface exchangePublicFolderPermission {
            accessRights: email.exchange.PublicFolderRightTypeEnum;
            allowedAccountId: number;
            creationDate: string;
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
        }
        /**
         * Resource accounts delegates
         * interface fullName: email.exchange.exchangeResourceAccountDelegate.exchangeResourceAccountDelegate
         */
        export interface exchangeResourceAccountDelegate {
            allowedAccountId: number;
            creationDate?: string;
            delegateEmailAddress: string;
            taskPendingId: number;
        }
        /**
         * Get email addresses subscribed to ActiveSync quarantine notifications
         * interface fullName: email.exchange.exchangeServiceActiveSyncNotification.exchangeServiceActiveSyncNotification
         */
        export interface exchangeServiceActiveSyncNotification {
            creationDate: string;
            notifiedAccountId: number;
            primaryEmailAddress: string;
            state: email.exchange.activeSyncNotificationStateEnum;
        }
        /**
         * Get authorized IPs for POP(s),IMAP(s), SMTP(s) and HTTP(s)
         * interface fullName: email.exchange.exchangeServiceAuthorizedIp.exchangeServiceAuthorizedIp
         */
        export interface exchangeServiceAuthorizedIp {
            HTTPS: boolean;
            IMAP: boolean;
            IMAPS: boolean;
            POP: boolean;
            POPS: boolean;
            SMTP: boolean;
            SMTPS: boolean;
            creationDate: string;
            displayName: string;
            ip: string;
            status: email.exchange.authorizedIpStatusEnum;
            updateDate?: string;
        }
        /**
         * Get the list of your ActiveSync devices registered on this Exchange service
         * interface fullName: email.exchange.exchangeServiceDevice.exchangeServiceDevice
         */
        export interface exchangeServiceDevice {
            IMEI: string;
            creationDate: string;
            deviceId: string;
            deviceModel: string;
            deviceState: email.exchange.DeviceActiveSyncStateEnum;
            guid: string;
            identity: string;
            lastUpdate?: string;
            taskPendingId: number;
        }
        /**
         * Protocol access policy for this Exchange service
         * interface fullName: email.exchange.exchangeServiceProtocol.exchangeServiceProtocol
         */
        export interface exchangeServiceProtocol {
            IMAP: boolean;
            POP: boolean;
            activeSync: boolean;
            activeSyncPolicy: email.exchange.ActiveSyncPolicyEnum;
            creationDate: string;
            lastUpdate?: string;
            taskPendingId: number;
            webMail: boolean;
        }
        /**
         * Aliases on this shared mailbox
         * interface fullName: email.exchange.exchangeSharedAccountAlias.exchangeSharedAccountAlias
         */
        export interface exchangeSharedAccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Users having full access on this shared mailbox
         * interface fullName: email.exchange.exchangeSharedAccountFullAccess.exchangeSharedAccountFullAccess
         */
        export interface exchangeSharedAccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Users authorized to send mails from this shared mailbox
         * interface fullName: email.exchange.exchangeSharedAccountSendAs.exchangeSharedAccountSendAs
         */
        export interface exchangeSharedAccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Get users authorized to Send On Behalf To mails from this shared mailbox
         * interface fullName: email.exchange.exchangeSharedAccountSendOnBehalfTo.exchangeSharedAccountSendOnBehalfTo
         */
        export interface exchangeSharedAccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Mailing list
         * interface fullName: email.exchange.mailingList.mailingList
         */
        export interface mailingList {
            company?: string;
            creationDate: string;
            departRestriction: email.exchange.MailingListDepartRestrictionEnum;
            displayName?: string;
            hiddenFromGAL: boolean;
            joinRestriction: email.exchange.MailingListJoinRestrictionEnum;
            lastUpdateDate?: string;
            mailingListAddress: string;
            maxReceiveSize?: number;
            maxSendSize?: number;
            senderAuthentification: boolean;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
        }
        /**
         * Password policy used for impersonated account
         * interface fullName: email.exchange.passwordPolicy.passwordPolicy
         */
        export interface passwordPolicy {
            complexityEnabled: boolean;
            lockoutDuration: number;
            lockoutThreshold: number;
            maxPasswordAge: number;
            minPasswordAge: number;
            minPasswordLength: number;
            passwordHistoryCount: number;
        }
        /**
         * Exchange organization public folder
         * interface fullName: email.exchange.publicFolder.publicFolder
         */
        export interface publicFolder {
            anonymousPermission: email.exchange.PublicFolderRightTypeEnum;
            creationDate?: string;
            defaultPermission: email.exchange.PublicFolderRightTypeEnum;
            hasSubFolders?: boolean;
            itemCount?: number;
            lastAccessTime?: string;
            lastModificationTime?: string;
            lastUserAccessTime?: string;
            lastUserModificationTime?: string;
            path: string;
            quota: number;
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
            totalItemSize?: number;
            type: email.exchange.PublicFolderTypeEnum;
        }
        /**
         * Renew period
         * type fullname: email.exchange.renewPeriodEnum
         */
        export type renewPeriodEnum = "monthly" | "yearly"
        /**
         * Exchange resource account
         * interface fullName: email.exchange.resourceAccount.resourceAccount
         */
        export interface resourceAccount {
            addOrganizerToSubject: boolean;
            allowConflict: boolean;
            bookingWindow: number;
            capacity: number;
            company?: string;
            creationDate?: string;
            deleteComments: boolean;
            deleteSubject: boolean;
            displayName: string;
            location: string;
            maximumDuration: number;
            resourceEmailAddress: string;
            showMeetingDetails: email.exchange.ShowMeetingDetailsEnum;
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
            type: email.exchange.ResourceTypeEnum;
        }
        /**
         * Exchange Send Connector
         * interface fullName: email.exchange.sendConnector.sendConnector
         */
        export interface sendConnector {
            creationDate: string;
            displayName: string;
            id?: number;
            lastUpdateDate?: string;
            maxSendSize: number;
            port: number;
            requireTLS: boolean;
            smartHost: string;
            smartHostAuthMechanism: email.exchange.smartHostAuthMechanismEnum;
            state: email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        /**
         * Exchange shared mailbox
         * interface fullName: email.exchange.sharedAccount.sharedAccount
         */
        export interface sharedAccount {
            creationDate?: string;
            currentUsage?: number;
            displayName?: string;
            firstName?: string;
            hiddenFromGAL: boolean;
            id: number;
            initials?: string;
            lastLogoffDate?: string;
            lastLogonDate?: string;
            lastName?: string;
            mailingFilter?: email.exchange.MailingFilterEnum[];
            quota: number;
            sharedEmailAddress: string;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
        }
        /**
         * Smart host authentication mechanism
         * type fullname: email.exchange.smartHostAuthMechanismEnum
         */
        export type smartHostAuthMechanismEnum = "basicAuth" | "basicAuthRequireTLS" | "none"
        /**
         * Spam and Antyvirus configuration
         * interface fullName: email.exchange.spamAndVirusConfiguration.spamAndVirusConfiguration
         */
        export interface spamAndVirusConfiguration {
            checkDKIM: boolean;
            checkSPF: boolean;
            deleteSpam: boolean;
            deleteVirus: boolean;
            putInJunk: boolean;
            tagSpam: boolean;
            tagVirus: boolean;
        }
    }
}
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
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
 * END API /email/exchange Models
 */
export function proxyEmailExchange(ovhEngine: OvhRequestable): Email {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailExchange;
/**
 * Api model for /email/exchange
 */
export interface Email {
    exchange: {
        /**
         * List available services
         * GET /email/exchange
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(organizationName: string | number): {
            service: {
                /**
                 * List available services
                 * GET /email/exchange/{organizationName}/service
                 */
                $get(params?: { iamTags?: any }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(exchangeService: string): {
                    /**
                     * Get this object properties
                     * GET /email/exchange/{organizationName}/service/{exchangeService}
                     */
                    $get(): Promise<email.exchange.ExchangeService>;
                    /**
                     * Alter this object properties
                     * PUT /email/exchange/{organizationName}/service/{exchangeService}
                     */
                    $put(params?: { adfsChangePassword?: boolean, complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: email.exchange.ServiceOfferEnum, passwordHistoryCount?: number, spamAndVirusConfiguration?: email.exchange.spamAndVirusConfiguration, sslExpirationDate?: string, state?: email.exchange.ServiceStateEnum, taskPendingId?: number, webUrl?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    account: {
                        /**
                         * Accounts associated to this exchange service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/account
                         */
                        $get(params?: { accountLicense?: email.exchange.OvhLicenceEnum, company?: string, id?: number, primaryEmailAddress?: string }): Promise<string[]>;
                        /**
                         * Create new mailbox in exchange server
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/account
                         */
                        $post(params: { city?: string, company?: string, countryCode?: email.exchange.CountryCodeEnum, description?: string, displayName?: string, domain: string, fax?: string, firstName?: string, forwardingEmail?: string, hiddenFromGAL?: boolean, initials?: string, jobDepartment?: string, jobTitle?: string, lastName?: string, license: email.exchange.OvhLicenceEnum, litigation?: boolean, litigationPeriod?: number, login: string, mailingFilter?: email.exchange.MailingFilterEnum[], mailSenderDisplay?: string, mobile?: string, office?: string, outlookLicense?: boolean, password: string, phone?: string, postalCode?: string, quota?: number, region?: string, SAMAccountName?: string, sbrDestination?: string, sendConnectorId?: number, spamAndVirusConfiguration?: email.exchange.spamAndVirusConfiguration, storeCopyOfEmail?: boolean, streetAddress?: string }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(primaryEmailAddress: string): {
                            /**
                             * Delete existing mailbox in exchange server
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                             */
                            $get(): Promise<email.exchange.Account>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                             */
                            $put(params?: { SAMAccountName?: string, accountLicense?: email.exchange.OvhLicenceEnum, city?: string, company?: string, configured?: boolean, countryCode?: email.exchange.CountryCodeEnum, creationDate?: string, currentUsage?: number, customIsolationId?: number, deleteAtExpiration?: boolean, deleteOutlookAtExpiration?: boolean, description?: string, displayName?: string, domain?: string, exchangeGuid?: string, expirationDate?: string, expirationOutlookDate?: string, fax?: string, firstName?: string, forwardingEmail?: string, guid?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, jobDepartment?: string, jobTitle?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, litigation?: boolean, litigationPeriod?: number, login?: string, mailSenderDisplay?: string, mailingFilter?: email.exchange.MailingFilterEnum[], mobile?: string, numberOfAliases?: number, office?: string, outlookLicense?: boolean, owaLimited?: boolean, passwordLastUpdate?: string, phone?: string, postalCode?: string, primaryEmailAddress?: string, quota?: number, region?: string, renewOutlookPeriod?: email.exchange.renewPeriodEnum, renewPeriod?: email.exchange.renewPeriodEnum, sbrDestination?: string, sendConnectorId?: number, spamAndVirusConfiguration?: email.exchange.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: email.exchange.ObjectStateEnum, storeCopyOfEmail?: boolean, streetAddress?: string, taskPendingId?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            alias: {
                                /**
                                 * Aliases associated to this mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Create new alias
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias
                                 */
                                $post(params: { alias: string }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(alias: string): {
                                    /**
                                     * Delete existing alias
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}
                                     */
                                    $get(): Promise<email.exchange.exchangeAccountAlias>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            archive: {
                                /**
                                 * Delete existing archive mailbox
                                 * DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                 */
                                $delete(): Promise<email.exchange.Task>;
                                /**
                                 * Get this object properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                 */
                                $get(): Promise<email.exchange.exchangeAccountArchive>;
                                /**
                                 * Create new archive mailbox
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                 */
                                $post(params?: { quota?: number }): Promise<email.exchange.Task>;
                                /**
                                 * Alter this object properties
                                 * PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                 */
                                $put(params?: { creationDate?: string, currentUsage?: number, guid?: string, quota?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            changePassword: {
                                /**
                                 * Change mailbox password
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword
                                 */
                                $post(params: { password: string }): Promise<email.exchange.Task>;
                            }
                            diagnostics: {
                                /**
                                 * Get this object properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics
                                 */
                                $get(): Promise<email.exchange.exchangeAccountDiagnosis>;
                                /**
                                 * Create new diagnosis request
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics
                                 */
                                $post(params: { password: string }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            export: {
                                /**
                                 * Remove request of PST file
                                 * DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                 */
                                $delete(): Promise<email.exchange.Task>;
                                /**
                                 * Get this object properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                 */
                                $get(): Promise<email.exchange.Export>;
                                /**
                                 * Request PST file for the account
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                 */
                                $post(): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            exportURL: {
                                /**
                                 * Get this object properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL
                                 */
                                $get(): Promise<email.exchange.ExportUrl>;
                                /**
                                 * Generate temporary url to PST file
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL
                                 */
                                $post(): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            fullAccess: {
                                /**
                                 * Full access granted users for this mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Allow full access to a user
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess
                                 */
                                $post(params: { allowedAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Revoke full access
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeAccountFullAccess>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            outlookURL: {
                                /**
                                 * Get this object properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL
                                 */
                                $get(): Promise<email.exchange.OutlookUrl>;
                                /**
                                 * Generate outlook url
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL
                                 */
                                $post(params: { language: email.exchange.LanguageEnum, version: email.exchange.OutlookVersionEnum }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            protocol: {
                                /**
                                 * Get this object properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol
                                 */
                                $get(): Promise<email.exchange.exchangeAccountProtocol>;
                                /**
                                 * Alter this object properties
                                 * PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol
                                 */
                                $put(params?: { IMAP?: boolean, POP?: boolean, activeSync?: boolean, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean }): Promise<void>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            sendAs: {
                                /**
                                 * Send as granted users for this mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Allow another user to send mails from this mailbox
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs
                                 */
                                $post(params: { allowAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Delete allowed user for sendAs
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeAccountSendAs>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            sendOnBehalfTo: {
                                /**
                                 * SendOnBehalfTo granted users for this mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Allow another user to Send On Behalf To mails from this mailbox
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo
                                 */
                                $post(params: { allowAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Delete allowed user for SendOnBehalfTo
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeAccountSendOnBehalfTo>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            tasks: {
                                /**
                                 * Pending task for this mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(id: number): {
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}
                                     */
                                    $get(): Promise<email.exchange.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            terminate: {
                                /**
                                 * Terminate account at expiration date
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate
                                 */
                                $post(): Promise<string>;
                            }
                        };
                    }
                    activateSharepoint: {
                        /**
                         * Activate Sharepoint infra connected to this exchange service
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint
                         */
                        $post(params: { primaryEmailAddress: string, subDomain: string }): Promise<email.exchange.Task>;
                    }
                    authorizedIp: {
                        /**
                         * Authorized IPs for POP(s),IMAP(s), SMTP(s) and HTTP(s)
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/authorizedIp
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Authorize new IP to access the service
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/authorizedIp
                         */
                        $post(params: { displayName?: string, HTTPS?: boolean, IMAP?: boolean, IMAPS?: boolean, IP: string, POP?: boolean, POPS?: boolean, SMTP?: boolean, SMTPS?: boolean }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(ip: string): {
                            /**
                             * Delete authorized IP
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/authorizedIp/{ip}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/authorizedIp/{ip}
                             */
                            $get(): Promise<email.exchange.exchangeServiceAuthorizedIp>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/authorizedIp/{ip}
                             */
                            $put(params?: { HTTPS?: boolean, IMAP?: boolean, IMAPS?: boolean, POP?: boolean, POPS?: boolean, SMTP?: boolean, SMTPS?: boolean, creationDate?: string, displayName?: string, ip?: string, status?: email.exchange.authorizedIpStatusEnum, updateDate?: string }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    changeHostname: {
                        /**
                         * Setting SSL hostname for Exchange private offer
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/changeHostname
                         */
                        $post(params: { dcvEmail: string, hostname: string, useDnsAssist: boolean }): Promise<email.exchange.Task>;
                    }
                    customIsolation: {
                        /**
                         * custom isolation for mailbox
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/customIsolation
                         */
                        $get(params?: { isolationField?: email.exchange.OvhCustomIsolationFieldEnum, isolationValue?: string, name?: string }): Promise<string[]>;
                        /**
                         * Create new custom isolation for mailbox
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/customIsolation
                         */
                        $post(params: { isolationField: email.exchange.OvhCustomIsolationFieldEnum, isolationValue: string, name: string }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(name: string): {
                            /**
                             * Delete existing custom isolation for mailbox
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/customIsolation/{name}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/customIsolation/{name}
                             */
                            $get(): Promise<email.exchange.exchangeCustomIsolation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    dcvEmails: {
                        /**
                         * Get DCV emails if your ssl will expire in next 30 days
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/dcvEmails
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    device: {
                        /**
                         * List of your ActiveSync devices registered on this Exchange service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/device
                         */
                        $get(params?: { deviceState?: email.exchange.DeviceActiveSyncStateEnum, identity?: string, IMEI?: string }): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(identity: string): {
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
                             */
                            $get(): Promise<email.exchange.exchangeServiceDevice>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
                             */
                            $put(params?: { IMEI?: string, creationDate?: string, deviceId?: string, deviceModel?: string, deviceState?: email.exchange.DeviceActiveSyncStateEnum, guid?: string, identity?: string, lastUpdate?: string, taskPendingId?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            clearDevice: {
                                /**
                                 * Executes a factory reset on the device
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice
                                 */
                                $post(): Promise<email.exchange.Task>;
                            }
                        };
                    }
                    domain: {
                        /**
                         * Domains associated to this service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/domain
                         */
                        $get(params?: { main?: boolean, state?: email.exchange.ObjectStateEnum }): Promise<string[]>;
                        /**
                         * Create new domain in exchange services
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/domain
                         */
                        $post(params: { autoEnableDKIM?: boolean, configureAutodiscover?: boolean, configureDKIM?: boolean, configureMx?: boolean, configureSPF?: boolean, main?: boolean, mxRelay?: string, name: string, organization2010?: string, sbrDefault?: string, sendConnectorIdDefault?: number, type: email.exchange.DomainTypeEnum }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(domainName: string): {
                            /**
                             * Delete existing domain in exchange services
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                             */
                            $get(): Promise<email.exchange.Domain>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                             */
                            $put(params?: { cnameToCheck?: string, dkimDiagnostics?: email.exchange.DomainDkimDiagnostics, domainAliases?: string[], domainValidated?: boolean, expectedAutodiscoverSRV?: string, expectedMX?: string[], expectedSPF?: string, isAliasDomain?: boolean, main?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, organization2010?: string, sbrDefault?: string, sendConnectorIdDefault?: number, spfIsValid?: boolean, spfRecord?: string[], srvIsValid?: boolean, srvRecord?: string[], state?: email.exchange.ObjectStateEnum, taskPendingId?: number, type?: email.exchange.DomainTypeEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            changeDefaultSBR: {
                                /**
                                 * Change default values of SBR used for all new created account on this domain
                                 * PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR
                                 */
                                $put(params?: { sbrDefault?: string, sendConnectorIdDefault?: number }): Promise<void>;
                            }
                            disclaimer: {
                                /**
                                 * Delete existing organization disclaimer
                                 * DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                 */
                                $delete(): Promise<email.exchange.Task>;
                                /**
                                 * Get this object properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                 */
                                $get(): Promise<email.exchange.disclaimer>;
                                /**
                                 * Create organization disclaimer of each email
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                 */
                                $post(params: { content: string, outsideOnly?: boolean }): Promise<email.exchange.Task>;
                                /**
                                 * Alter this object properties
                                 * PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                 */
                                $put(params?: { content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number }): Promise<void>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            disclaimerAttribute: {
                                /**
                                 * Get diclaimer attributes to substitute with Active Directory properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute
                                 */
                                $get(): Promise<email.exchange.DisclaimerAttributeEnum[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            dkim: {
                                /**
                                 * dkim associated to this domain
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Create DKIM selector on this domain
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
                                 */
                                $post(params: { autoEnableDKIM?: boolean, configureDkim?: boolean, selectorName: string }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(selectorName: string): {
                                    /**
                                     * Delete DKIM selector on this domain
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
                                     */
                                    $get(): Promise<email.exchange.dkim>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    disable: {
                                        /**
                                         * disable dkim signing
                                         * POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
                                         */
                                        $post(): Promise<email.exchange.Task>;
                                    }
                                    enable: {
                                        /**
                                         * enable dkim signing or switch selector used
                                         * POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
                                         */
                                        $post(): Promise<email.exchange.Task>;
                                    }
                                };
                            }
                            dkimSelector: {
                                /**
                                 * Get dkim selector list
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    externalContact: {
                        /**
                         * External contacts for this service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/externalContact
                         */
                        $get(params?: { displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string }): Promise<string[]>;
                        /**
                         * create new external contact
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/externalContact
                         */
                        $post(params: { displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, organization2010?: string }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(externalEmailAddress: string): {
                            /**
                             * delete external contact
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                             */
                            $get(): Promise<email.exchange.exchangeExternalContact>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                             */
                            $put(params?: { creationDate?: string, displayName?: string, externalEmailAddress?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, organization2010?: string, state?: email.exchange.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    impersonatedUser: {
                        /**
                         * Delete user with impersonation right on all mailboxes
                         * DELETE /email/exchange/{organizationName}/service/{exchangeService}/impersonatedUser
                         */
                        $delete(): Promise<email.exchange.Task>;
                        /**
                         * Get this object properties
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/impersonatedUser
                         */
                        $get(): Promise<email.exchange.exchangeAccountImpersonation>;
                        /**
                         * Create user with impersonation right on all mailboxes
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/impersonatedUser
                         */
                        $post(params: { password: string }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changePassword: {
                            /**
                             * Change user password
                             * POST /email/exchange/{organizationName}/service/{exchangeService}/impersonatedUser/changePassword
                             */
                            $post(params: { password: string }): Promise<email.exchange.Task>;
                        }
                    }
                    impersonationPasswordPolicy: {
                        /**
                         * Get configuration of password policy linked to impersonated account
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/impersonationPasswordPolicy
                         */
                        $get(): Promise<email.exchange.passwordPolicy>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    license: {
                        /**
                         * Get active licenses for specific period of time
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/license
                         */
                        $get(params?: { fromDate?: string, license?: email.exchange.OvhLicenceEnum, toDate?: string }): Promise<email.exchange.DailyLicense[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    mailingList: {
                        /**
                         * Mailing list for this service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList
                         */
                        $get(params?: { company?: string, mailingListAddress?: string }): Promise<string[]>;
                        /**
                         * Add mailing list
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList
                         */
                        $post(params: { company?: string, departRestriction: email.exchange.MailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction: email.exchange.MailingListJoinRestrictionEnum, mailingListAddress: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(mailingListAddress: string): {
                            /**
                             * Delete mailing list
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                             */
                            $get(): Promise<email.exchange.mailingList>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                             */
                            $put(params?: { company?: string, creationDate?: string, departRestriction?: email.exchange.MailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction?: email.exchange.MailingListJoinRestrictionEnum, lastUpdateDate?: string, mailingListAddress?: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean, spamDetected?: boolean, spamTicketNumber?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            alias: {
                                /**
                                 * Aliases associated to this mailingList
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Create new alias
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias
                                 */
                                $post(params: { alias: string }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(alias: string): {
                                    /**
                                     * Delete existing alias
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}
                                     */
                                    $get(): Promise<email.exchange.exchangeMailingListAlias>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            manager: {
                                account: {
                                    /**
                                     * Mailing list account manager
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account
                                     */
                                    $get(): Promise<number[]>;
                                    /**
                                     * Add new mailing list manager
                                     * POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account
                                     */
                                    $post(params: { managerAccountId: number }): Promise<email.exchange.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    $(managerAccountId: number): {
                                        /**
                                         * Delete mailing list manager
                                         * DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}
                                         */
                                        $delete(): Promise<email.exchange.Task>;
                                        /**
                                         * Get this object properties
                                         * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}
                                         */
                                        $get(): Promise<email.exchange.exchangeDistributionGroupManager>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    };
                                }
                            }
                            member: {
                                account: {
                                    /**
                                     * Mailing list account member
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account
                                     */
                                    $get(): Promise<number[]>;
                                    /**
                                     * Add new mailing list member
                                     * POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account
                                     */
                                    $post(params?: { memberAccountId?: number, memberContactId?: number }): Promise<email.exchange.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    $(memberAccountId: number): {
                                        /**
                                         * Delete mailing list member
                                         * DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}
                                         */
                                        $delete(): Promise<email.exchange.Task>;
                                        /**
                                         * Get this object properties
                                         * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}
                                         */
                                        $get(): Promise<email.exchange.exchangeDistributionGroupMember>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    };
                                }
                                contact: {
                                    /**
                                     * Mailing list contact member
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact
                                     */
                                    $get(): Promise<number[]>;
                                    /**
                                     * Add new mailing list member
                                     * POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact
                                     */
                                    $post(params?: { memberAccountId?: number, memberContactId?: number }): Promise<email.exchange.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    $(memberContactId: number): {
                                        /**
                                         * Delete mailing list member
                                         * DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}
                                         */
                                        $delete(): Promise<email.exchange.Task>;
                                        /**
                                         * Get this object properties
                                         * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}
                                         */
                                        $get(): Promise<email.exchange.exchangeDistributionGroupMember>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    };
                                }
                            }
                            sendAs: {
                                /**
                                 * sendAs
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Allow another user to Send aso mails from this mailing list
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs
                                 */
                                $post(params: { allowAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Delete allowed user for SendAs
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeDistributionGroupSendAs>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            sendOnBehalfTo: {
                                /**
                                 * sendOnBehalfTo
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Allow another user to Send aso mails from this mailing list
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo
                                 */
                                $post(params: { allowAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Delete allowed user for SendOnBehalfTo
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeDistributionGroupSendOnBehalfTo>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                    outlookAvailability: {
                        /**
                         * Show available outlooks
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability
                         */
                        $get(params?: { outlookLanguage?: email.exchange.LanguageEnum, outlookVersion?: email.exchange.OutlookVersionEnum }): Promise<email.exchange.OutlookVersions[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    protocol: {
                        /**
                         * Get this object properties
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/protocol
                         */
                        $get(): Promise<email.exchange.exchangeServiceProtocol>;
                        /**
                         * Alter this object properties
                         * PUT /email/exchange/{organizationName}/service/{exchangeService}/protocol
                         */
                        $put(params?: { IMAP?: boolean, POP?: boolean, activeSync?: boolean, activeSyncPolicy?: email.exchange.ActiveSyncPolicyEnum, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        activeSyncMailNotification: {
                            /**
                             * Exchange account id subscribed to ActiveSync quarantine notifications
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Subscribe new address to ActiveSync quarantine notifications
                             * POST /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification
                             */
                            $post(params: { notifiedAccountId: number }): Promise<email.exchange.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(notifiedAccountId: number): {
                                /**
                                 * Unubscribe address from ActiveSync quarantine notifications
                                 * DELETE /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}
                                 */
                                $delete(): Promise<email.exchange.Task>;
                                /**
                                 * Get this object properties
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}
                                 */
                                $get(): Promise<email.exchange.exchangeServiceActiveSyncNotification>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    publicFolder: {
                        /**
                         * Public folders associated to this service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder
                         */
                        $get(params?: { path?: string }): Promise<string[]>;
                        /**
                         * Create organization public folder
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/publicFolder
                         */
                        $post(params: { anonymousPermission?: email.exchange.PublicFolderRightTypeEnum, defaultPermission?: email.exchange.PublicFolderRightTypeEnum, path: string, quota: number, type: email.exchange.PublicFolderTypeEnum }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(path: string): {
                            /**
                             * Delete existing organization public folder
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                             */
                            $get(): Promise<email.exchange.publicFolder>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                             */
                            $put(params?: { anonymousPermission?: email.exchange.PublicFolderRightTypeEnum, creationDate?: string, defaultPermission?: email.exchange.PublicFolderRightTypeEnum, hasSubFolders?: boolean, itemCount?: number, lastAccessTime?: string, lastModificationTime?: string, lastUserAccessTime?: string, lastUserModificationTime?: string, path?: string, quota?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number, totalItemSize?: number, type?: email.exchange.PublicFolderTypeEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            permission: {
                                /**
                                 * Public folder permission
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Create public folder permission
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
                                 */
                                $post(params: { accessRights: email.exchange.PublicFolderRightTypeEnum, allowedAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Delete existing permission from public folder
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangePublicFolderPermission>;
                                    /**
                                     * Alter this object properties
                                     * PUT /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                     */
                                    $put(params?: { accessRights?: email.exchange.PublicFolderRightTypeEnum, allowedAccountId?: number, creationDate?: string, state?: email.exchange.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                    publicFolderQuota: {
                        /**
                         * Get public folder quota usage in total available space
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota
                         */
                        $get(): Promise<email.exchange.PublicFolderQuota>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    renewSSL: {
                        /**
                         * Renew SSL if it will expire in next 30 days
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/renewSSL
                         */
                        $post(params: { dcv: string }): Promise<email.exchange.Task>;
                    }
                    resourceAccount: {
                        /**
                         * Resource account associated to this service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
                         */
                        $get(params?: { company?: string, resourceEmailAddress?: string }): Promise<string[]>;
                        /**
                         * create new resource account in exchange server
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
                         */
                        $post(params: { addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity: number, company?: string, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress: string, showMeetingDetails?: email.exchange.ShowMeetingDetailsEnum, type: email.exchange.ResourceTypeEnum }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(resourceEmailAddress: string): {
                            /**
                             * delete existing resource account in exchange server
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                             */
                            $get(): Promise<email.exchange.resourceAccount>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                             */
                            $put(params?: { addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity?: number, company?: string, creationDate?: string, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress?: string, showMeetingDetails?: email.exchange.ShowMeetingDetailsEnum, state?: email.exchange.ObjectStateEnum, taskPendingId?: number, type?: email.exchange.ResourceTypeEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            delegate: {
                                /**
                                 * Resource account manager
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * add new resource account delegate in exchange server
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate
                                 */
                                $post(params: { allowedAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * delete existing resource account delegate in exchange server
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeResourceAccountDelegate>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                    sendConnector: {
                        /**
                         * List of your send connectors on this Exchange service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create new send connector
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector
                         */
                        $post(params: { displayName: string, maxSendSize?: number, password?: string, port?: number, requireTLS?: boolean, smartHost: string, smartHostAuthMechanism?: email.exchange.smartHostAuthMechanismEnum, user?: string }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Delete existing send connector
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}
                             */
                            $get(): Promise<email.exchange.sendConnector>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}
                             */
                            $put(params?: { creationDate?: string, displayName?: string, id?: number, lastUpdateDate?: string, maxSendSize?: number, port?: number, requireTLS?: boolean, smartHost?: string, smartHostAuthMechanism?: email.exchange.smartHostAuthMechanismEnum, state?: email.exchange.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            changeAuthentication: {
                                /**
                                 * Change authentication on send connector
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication
                                 */
                                $post(params?: { password?: string, smartHostAuthMechanism?: email.exchange.smartHostAuthMechanismEnum, user?: string }): Promise<email.exchange.Task>;
                            }
                        };
                    }
                    server: {
                        /**
                         * Get this object properties
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/server
                         */
                        $get(): Promise<email.exchange.Server>;
                        /**
                         * Alter this object properties
                         * PUT /email/exchange/{organizationName}/service/{exchangeService}/server
                         */
                        $put(params?: { commercialVersion?: email.exchange.exchangeCommercialVersionEnum, currentDiskUsage?: number, diskSize?: number, individual2010?: boolean, ip?: string, ipV6?: string, isAValid?: boolean, isAaaaValid?: boolean, isPtrV6Valid?: boolean, isPtrValid?: boolean, owaMfa?: boolean, state?: email.exchange.ServerStateEnum, taskPendingId?: number, version?: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    serviceInfos: {
                        /**
                         * Get service information
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/serviceInfos
                         */
                        $get(): Promise<services.Service>;
                        /**
                         * Update service information
                         * PUT /email/exchange/{organizationName}/service/{exchangeService}/serviceInfos
                         */
                        $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    sharedAccount: {
                        /**
                         * Shared accounts associated to this exchange service
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
                         */
                        $get(params?: { sharedEmailAddress?: string }): Promise<string[]>;
                        /**
                         * Create new shared mailbox in exchange server
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
                         */
                        $post(params: { displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, mailingFilter?: email.exchange.MailingFilterEnum[], quota: number, sharedEmailAddress: string }): Promise<email.exchange.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(sharedEmailAddress: string): {
                            /**
                             * Delete existing shared mailbox in exchange server
                             * DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                             */
                            $delete(): Promise<email.exchange.Task>;
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                             */
                            $get(): Promise<email.exchange.sharedAccount>;
                            /**
                             * Alter this object properties
                             * PUT /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                             */
                            $put(params?: { creationDate?: string, currentUsage?: number, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, mailingFilter?: email.exchange.MailingFilterEnum[], quota?: number, sharedEmailAddress?: string, spamDetected?: boolean, spamTicketNumber?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            alias: {
                                /**
                                 * Aliases associated to this mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/alias
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Create new alias
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/alias
                                 */
                                $post(params: { alias: string }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(alias: string): {
                                    /**
                                     * Delete existing alias
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/alias/{alias}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/alias/{alias}
                                     */
                                    $get(): Promise<email.exchange.exchangeSharedAccountAlias>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            fullAccess: {
                                /**
                                 * Full access granted users for this shared mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Allow full access to a user
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess
                                 */
                                $post(params: { allowedAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Revoke full access
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeSharedAccountFullAccess>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            sendAs: {
                                /**
                                 * Send as granted users for this shared mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Allow another user to send mails from this shared mailbox
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs
                                 */
                                $post(params: { allowAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Delete allowed user for sendAs
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeSharedAccountSendAs>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            sendOnBehalfTo: {
                                /**
                                 * SendOnBehalfTo granted users for this shared mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Allow another user to Send On Behalf To mails from this shared mailbox
                                 * POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo
                                 */
                                $post(params: { allowAccountId: number }): Promise<email.exchange.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(allowedAccountId: number): {
                                    /**
                                     * Delete allowed user for SendOnBehalfTo
                                     * DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                     */
                                    $delete(): Promise<email.exchange.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                     */
                                    $get(): Promise<email.exchange.exchangeSharedAccountSendOnBehalfTo>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            tasks: {
                                /**
                                 * Pending task for this mailbox
                                 * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(id: number): {
                                    /**
                                     * Get this object properties
                                     * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}
                                     */
                                    $get(): Promise<email.exchange.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                    sharedAccountQuota: {
                        /**
                         * Get shared account quota usage in total available space
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota
                         */
                        $get(): Promise<email.exchange.SharedAccountQuota>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    task: {
                        /**
                         * Pending actions
                         * GET /email/exchange/{organizationName}/service/{exchangeService}/task
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Get this object properties
                             * GET /email/exchange/{organizationName}/service/{exchangeService}/task/{id}
                             */
                            $get(): Promise<email.exchange.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    updateDeviceList: {
                        /**
                         * Update device list
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList
                         */
                        $post(): Promise<email.exchange.Task>;
                    }
                    updateFlagsOnAllAccounts: {
                        /**
                         * Update spam and virus flags on all active accounts
                         * POST /email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts
                         */
                        $post(): Promise<void>;
                    }
                };
            }
        };
    }
}

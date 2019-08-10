import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /email/exchange Models
 */
export namespace email {
    export namespace exchange {
        // interface fullName: email.exchange.Account.Account
        export interface Account {
            SAMAccountName?: string;
            accountLicense: emailexchangeOvhLicenceEnum;
            company?: string;
            configured: boolean;
            creationDate?: string;
            currentUsage?: number;
            deleteAtExpiration?: boolean;
            deleteOutlookAtExpiration?: boolean;
            displayName?: string;
            domain: string;
            exchangeGuid?: string;
            expirationDate?: string;
            expirationOutlookDate?: string;
            firstName?: string;
            guid?: string;
            hiddenFromGAL: boolean;
            id: number;
            initial?: string;
            lastLogoffDate?: string;
            lastLogonDate?: string;
            lastName?: string;
            lastUpdateDate?: string;
            litigation: boolean;
            litigationPeriod?: number;
            login: string;
            mailingFilter?: emailexchangeMailingFilterEnum[];
            outlookLicense: boolean;
            owaLimited: boolean;
            passwordLastUpdate?: string;
            primaryEmailAddress: string;
            quota: number;
            renewOutlookPeriod?: emailexchangerenewPeriodEnum;
            renewPeriod?: emailexchangerenewPeriodEnum;
            spamAndVirusConfiguration: emailexchangespamAndVirusConfiguration;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: emailexchangeObjectStateEnum;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.AccountLicense.AccountLicense
        export interface AccountLicense {
            license: emailexchangeOvhLicenceEnum;
            licenseQuantity: number;
        }
        // type fullname: email.exchange.ActiveSyncPolicyEnum
        export type ActiveSyncPolicyEnum = "allow" | "block" | "quarantine"
        // interface fullName: email.exchange.DailyLicense.DailyLicense
        export interface DailyLicense {
            accountLicense: emailexchangeAccountLicense[];
            date: string;
            outlookQuantity: number;
        }
        // type fullname: email.exchange.DeviceActiveSyncStateEnum
        export type DeviceActiveSyncStateEnum = "allowed" | "blocked" | "deviceDiscovery" | "quarantined"
        // type fullname: email.exchange.DisclaimerAttributeEnum
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        // interface fullName: email.exchange.Domain.Domain
        export interface Domain {
            cnameToCheck?: string;
            domainAliases: string[];
            domainValidated: boolean;
            isAliasDomain: boolean;
            main?: boolean;
            mxIsValid: boolean;
            mxRecord?: string[];
            mxRelay?: string;
            name: string;
            organization2010?: string;
            srvIsValid: boolean;
            srvRecord?: string[];
            state: emailexchangeObjectStateEnum;
            taskPendingId: number;
            type: emailexchangeDomainTypeEnum;
        }
        // type fullname: email.exchange.DomainTypeEnum
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
        // interface fullName: email.exchange.ExchangeService.ExchangeService
        export interface ExchangeService {
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
            offer: emailexchangeServiceOfferEnum;
            passwordHistoryCount?: number;
            spamAndVirusConfiguration: emailexchangespamAndVirusConfiguration;
            sslExpirationDate?: string;
            state: emailexchangeServiceStateEnum;
            taskPendingId: number;
            webUrl?: string;
        }
        // interface fullName: email.exchange.Export.Export
        export interface Export {
            creationDate: string;
            percentComplete: number;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.ExportUrl.ExportUrl
        export interface ExportUrl {
            expiration: string;
            url: string;
        }
        // type fullname: email.exchange.LanguageEnum
        export type LanguageEnum = "ar" | "bg" | "cz" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "in" | "it" | "ja" | "ko" | "kz" | "lt" | "lv" | "ms" | "nb" | "nl" | "pl" | "pt" | "pt-BR" | "ro" | "rs" | "ru" | "sk" | "sl" | "sv" | "th" | "tr" | "uk" | "vi" | "zh-CN"
        // type fullname: email.exchange.MailingFilterEnum
        export type MailingFilterEnum = "vaderetro"
        // type fullname: email.exchange.MailingListDepartRestrictionEnum
        export type MailingListDepartRestrictionEnum = "closed" | "open"
        // type fullname: email.exchange.MailingListJoinRestrictionEnum
        export type MailingListJoinRestrictionEnum = "approvalRequired" | "closed" | "open"
        // type fullname: email.exchange.ObjectStateEnum
        export type ObjectStateEnum = "creating" | "deleting" | "internalMigration" | "ok" | "reopening" | "suspended" | "suspending"
        // interface fullName: email.exchange.OutlookUrl.OutlookUrl
        export interface OutlookUrl {
            expiration: string;
            serial: string;
            url: string;
        }
        // type fullname: email.exchange.OutlookVersionEnum
        export type OutlookVersionEnum = "mac_x86_2011" | "mac_x86_2016" | "windows_x64_2013" | "windows_x64_2016" | "windows_x86_2013" | "windows_x86_2016"
        // interface fullName: email.exchange.OutlookVersions.OutlookVersions
        export interface OutlookVersions {
            outlookLanguage: emailexchangeLanguageEnum;
            outlookVersion: emailexchangeOutlookVersionEnum;
            status: boolean;
        }
        // type fullname: email.exchange.OvhLicenceEnum
        export type OvhLicenceEnum = "basic" | "enterprise" | "standard"
        // interface fullName: email.exchange.PublicFolderQuota.PublicFolderQuota
        export interface PublicFolderQuota {
            quotaLimit: number;
            quotaReserved: number;
            quotaUsed: number;
        }
        // type fullname: email.exchange.PublicFolderRightTypeEnum
        export type PublicFolderRightTypeEnum = "editor" | "none" | "reviewer"
        // type fullname: email.exchange.PublicFolderTypeEnum
        export type PublicFolderTypeEnum = "calendar" | "contacts" | "plain" | "tasks"
        // type fullname: email.exchange.ResourceTypeEnum
        export type ResourceTypeEnum = "equipment" | "room"
        // interface fullName: email.exchange.Server.Server
        export interface Server {
            commercialVersion: emailexchangeexchangeCommercialVersionEnum;
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
            state: emailexchangeServerStateEnum;
            taskPendingId: number;
            version?: number;
        }
        // type fullname: email.exchange.ServerStateEnum
        export type ServerStateEnum = "configurationPending" | "notConfigured" | "ok"
        // type fullname: email.exchange.ServiceOfferEnum
        export type ServiceOfferEnum = "dedicated" | "dedicatedCluster" | "hosted" | "provider"
        // type fullname: email.exchange.ServiceStateEnum
        export type ServiceStateEnum = "inMaintenance" | "ok" | "suspended"
        // interface fullName: email.exchange.SharedAccountQuota.SharedAccountQuota
        export interface SharedAccountQuota {
            quotaLimit: number;
            quotaReserved: number;
            quotaUsed: number;
        }
        // type fullname: email.exchange.ShowMeetingDetailsEnum
        export type ShowMeetingDetailsEnum = "availabilityOnly" | "limitedDetails" | "reviewer"
        // interface fullName: email.exchange.Task.Task
        export interface Task {
            finishDate?: string;
            function: emailexchangeTaskFunctionEnum;
            id: number;
            status: emailexchangeTaskStatusEnum;
            todoDate: string;
        }
        // type fullname: email.exchange.TaskFunctionEnum
        export type TaskFunctionEnum = "activateSharepoint" | "addAccount" | "addAccountArchive" | "addActiveSyncMailNotification" | "addAlias" | "addDistributionGroup" | "addDistributionGroupManager" | "addDistributionGroupMember" | "addDistributionGroupSendAs" | "addDistributionGroupSendOnBehalfTo" | "addDomain" | "addDomainDisclaimer" | "addExchangeServiceAuthorizedIp" | "addExportPstRequest" | "addExternalContact" | "addFullAccess" | "addOutlookLicense" | "addPublicFolder" | "addPublicFolderPermission" | "addResourceAccount" | "addResourceDelegate" | "addSendAs" | "addSendOnBehalfTo" | "addSharedAccount" | "addSharedAccountFullAccess" | "addSharedAccountSendAs" | "addSharedAccountSendOnBehalfTo" | "changeHostname" | "changePassword" | "clearDataOnDevice" | "cloneTemplateExchangePrivate" | "configureExchangeCustomer" | "deleteAccount" | "deleteAccountArchive" | "deleteActiveSyncMailNotification" | "deleteAlias" | "deleteDistributionGroup" | "deleteDistributionGroupManager" | "deleteDistributionGroupMember" | "deleteDistributionGroupSendAs" | "deleteDistributionGroupSendOnBehalfTo" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExchangeService" | "deleteExchangeServiceAuthorizedIp" | "deleteExportPstRequest" | "deleteExternalContact" | "deleteFullAccess" | "deleteOutlookLicense" | "deletePublicFolder" | "deletePublicFolderPermission" | "deleteResourceAccount" | "deleteResourceDelegate" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteSharedAccount" | "deleteSharedAccountFullAccess" | "deleteSharedAccountSendAs" | "deleteSharedAccountSendOnBehalfTo" | "destroyPrivateVm" | "diagnoseAccount" | "expandDrive" | "generateOutlookUrl" | "generatePstUrl" | "installExchange" | "installSSL" | "maintenance" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationMailingList" | "migrationResourceAccount" | "migrationService" | "reOpenHostedAccount" | "reOpenOutlookLicense" | "reOpenPrivateAccount" | "reOpenPrivateVm" | "setAccount" | "setAccountArchive" | "setAlias" | "setDistributionGroup" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExchangeAccountProtocol" | "setExchangeServiceDevice" | "setExternalContact" | "setPublicFolder" | "setPublicFolderPermission" | "setResourceAccount" | "setService" | "setSharedAccount" | "suspendAccount" | "suspendExchangeService" | "suspendHostedAccount" | "suspendOutlookLicense" | "suspendPrivateAccount" | "suspendPrivateVm" | "unsuspendAccount" | "unsuspendExchangeService" | "unsuspendHostedAccount" | "updateExchangeServiceDevice" | "upgrade2016"
        // type fullname: email.exchange.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        // type fullname: email.exchange.activeSyncNotificationStateEnum
        export type activeSyncNotificationStateEnum = "creating" | "deleting" | "ok"
        // type fullname: email.exchange.authorizedIpStatusEnum
        export type authorizedIpStatusEnum = "creating" | "deleting" | "ok"
        // interface fullName: email.exchange.disclaimer.disclaimer
        export interface disclaimer {
            content: string;
            creationDate: string;
            name: string;
            outsideOnly: boolean;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeAccountAlias.exchangeAccountAlias
        export interface exchangeAccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeAccountArchive.exchangeAccountArchive
        export interface exchangeAccountArchive {
            creationDate: string;
            currentUsage?: number;
            guid?: string;
            quota: number;
            state: emailexchangeObjectStateEnum;
            taskPendingId?: number;
        }
        // interface fullName: email.exchange.exchangeAccountDiagnosis.exchangeAccountDiagnosis
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
        // interface fullName: email.exchange.exchangeAccountFullAccess.exchangeAccountFullAccess
        export interface exchangeAccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeAccountProtocol.exchangeAccountProtocol
        export interface exchangeAccountProtocol {
            IMAP: boolean;
            POP: boolean;
            activeSync: boolean;
            creationDate: string;
            lastUpdate?: string;
            taskPendingId: number;
            webMail: boolean;
        }
        // interface fullName: email.exchange.exchangeAccountSendAs.exchangeAccountSendAs
        export interface exchangeAccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeAccountSendOnBehalfTo.exchangeAccountSendOnBehalfTo
        export interface exchangeAccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // type fullname: email.exchange.exchangeCommercialVersionEnum
        export type exchangeCommercialVersionEnum = "2010" | "2013" | "2016"
        // interface fullName: email.exchange.exchangeDistributionGroupManager.exchangeDistributionGroupManager
        export interface exchangeDistributionGroupManager {
            creationDate: string;
            managerAccountId: number;
            managerEmailAddress: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeDistributionGroupMember.exchangeDistributionGroupMember
        export interface exchangeDistributionGroupMember {
            creationDate: string;
            memberAccountId?: number;
            memberContactId?: number;
            memberEmailAddress: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeDistributionGroupSendAs.exchangeDistributionGroupSendAs
        export interface exchangeDistributionGroupSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeDistributionGroupSendOnBehalfTo.exchangeDistributionGroupSendOnBehalfTo
        export interface exchangeDistributionGroupSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeExternalContact.exchangeExternalContact
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
            state: emailexchangeObjectStateEnum;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeMailingListAlias.exchangeMailingListAlias
        export interface exchangeMailingListAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangePublicFolderPermission.exchangePublicFolderPermission
        export interface exchangePublicFolderPermission {
            accessRights: emailexchangePublicFolderRightTypeEnum;
            allowedAccountId: number;
            creationDate: string;
            state: emailexchangeObjectStateEnum;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeResourceAccountDelegate.exchangeResourceAccountDelegate
        export interface exchangeResourceAccountDelegate {
            allowedAccountId: number;
            creationDate?: string;
            delegateEmailAddress: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeServiceActiveSyncNotification.exchangeServiceActiveSyncNotification
        export interface exchangeServiceActiveSyncNotification {
            creationDate: string;
            notifiedAccountId: number;
            primaryEmailAddress: string;
            state: emailexchangeactiveSyncNotificationStateEnum;
        }
        // interface fullName: email.exchange.exchangeServiceAuthorizedIp.exchangeServiceAuthorizedIp
        export interface exchangeServiceAuthorizedIp {
            creationDate: string;
            ip: string;
            status: emailexchangeauthorizedIpStatusEnum;
        }
        // interface fullName: email.exchange.exchangeServiceDevice.exchangeServiceDevice
        export interface exchangeServiceDevice {
            IMEI: string;
            creationDate: string;
            deviceId: string;
            deviceModel: string;
            deviceState: emailexchangeDeviceActiveSyncStateEnum;
            guid: string;
            identity: string;
            lastUpdate?: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeServiceProtocol.exchangeServiceProtocol
        export interface exchangeServiceProtocol {
            IMAP: boolean;
            POP: boolean;
            activeSync: boolean;
            activeSyncPolicy: emailexchangeActiveSyncPolicyEnum;
            creationDate: string;
            lastUpdate?: string;
            taskPendingId: number;
            webMail: boolean;
        }
        // interface fullName: email.exchange.exchangeSharedAccountFullAccess.exchangeSharedAccountFullAccess
        export interface exchangeSharedAccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeSharedAccountSendAs.exchangeSharedAccountSendAs
        export interface exchangeSharedAccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.exchangeSharedAccountSendOnBehalfTo.exchangeSharedAccountSendOnBehalfTo
        export interface exchangeSharedAccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.mailingList.mailingList
        export interface mailingList {
            creationDate: string;
            departRestriction: emailexchangeMailingListDepartRestrictionEnum;
            displayName?: string;
            hiddenFromGAL: boolean;
            joinRestriction: emailexchangeMailingListJoinRestrictionEnum;
            lastUpdateDate?: string;
            mailingListAddress: string;
            maxReceiveSize?: number;
            maxSendSize?: number;
            senderAuthentification: boolean;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: emailexchangeObjectStateEnum;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.publicFolder.publicFolder
        export interface publicFolder {
            anonymousPermission: emailexchangePublicFolderRightTypeEnum;
            creationDate?: string;
            defaultPermission: emailexchangePublicFolderRightTypeEnum;
            hasSubFolders?: boolean;
            itemCount?: number;
            lastAccessTime?: string;
            lastModificationTime?: string;
            lastUserAccessTime?: string;
            lastUserModificationTime?: string;
            path: string;
            quota: number;
            state: emailexchangeObjectStateEnum;
            taskPendingId: number;
            totalItemSize?: number;
            type: emailexchangePublicFolderTypeEnum;
        }
        // type fullname: email.exchange.renewPeriodEnum
        export type renewPeriodEnum = "monthly" | "yearly"
        // interface fullName: email.exchange.resourceAccount.resourceAccount
        export interface resourceAccount {
            addOrganizerToSubject: boolean;
            allowConflict: boolean;
            bookingWindow: number;
            capacity: number;
            creationDate?: string;
            deleteComments: boolean;
            deleteSubject: boolean;
            displayName: string;
            location: string;
            maximumDuration: number;
            resourceEmailAddress: string;
            showMeetingDetails: emailexchangeShowMeetingDetailsEnum;
            state: emailexchangeObjectStateEnum;
            taskPendingId: number;
            type: emailexchangeResourceTypeEnum;
        }
        // interface fullName: email.exchange.sharedAccount.sharedAccount
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
            mailingFilter?: emailexchangeMailingFilterEnum[];
            quota: number;
            sharedEmailAddress: string;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: emailexchangeObjectStateEnum;
            taskPendingId: number;
        }
        // interface fullName: email.exchange.spamAndVirusConfiguration.spamAndVirusConfiguration
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
        renew?: serviceRenewType;
        renewalType: serviceRenewalTypeEnum;
        serviceId: number;
        status: serviceStateEnum;
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
 * Api Proxy model
 */// Apis harmony
// path /email
export interface Email{
    exchange: {
        // GET /email/exchange
        $get(): Promise<string[]>;
        $(organizationName: string | number): {
            service: {
                // GET /email/exchange/{organizationName}/service
                $get(): Promise<string[]>;
                $(exchangeService: string): {
                    // GET /email/exchange/{organizationName}/service/{exchangeService}
                    $get(): Promise<email.exchange.ExchangeService>;
                    // PUT /email/exchange/{organizationName}/service/{exchangeService}
                    $put(params?: {complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: emailexchangeServiceOfferEnum, passwordHistoryCount?: number, spamAndVirusConfiguration?: emailexchangespamAndVirusConfiguration, sslExpirationDate?: string, state?: emailexchangeServiceStateEnum, taskPendingId?: number, webUrl?: string}): Promise<void>;
                    account: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/account
                        $get(params?: {accountLicense?: emailexchangeOvhLicenceEnum, id?: number, primaryEmailAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/account
                        $post(params: {company?: string, displayName?: string, domain: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, license: emailexchangeOvhLicenceEnum, litigation?: boolean, litigationPeriod?: number, login: string, mailingFilter?: emailexchangeMailingFilterEnum[], outlookLicense?: boolean, password: string, SAMAccountName?: string, spamAndVirusConfiguration?: emailexchangespamAndVirusConfiguration}): Promise<email.exchange.Task>;
                        $(primaryEmailAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $get(): Promise<email.exchange.Account>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $put(params?: {SAMAccountName?: string, accountLicense?: emailexchangeOvhLicenceEnum, company?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, deleteOutlookAtExpiration?: boolean, displayName?: string, domain?: string, exchangeGuid?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, guid?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, litigation?: boolean, litigationPeriod?: number, login?: string, mailingFilter?: emailexchangeMailingFilterEnum[], outlookLicense?: boolean, owaLimited?: boolean, passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: number, renewOutlookPeriod?: emailexchangerenewPeriodEnum, renewPeriod?: emailexchangerenewPeriodEnum, spamAndVirusConfiguration?: emailexchangespamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number}): Promise<void>;
                            alias: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias
                                $get(): Promise<string[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias
                                $post(params: {alias: string}): Promise<email.exchange.Task>;
                                $(alias: string): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}
                                    $get(): Promise<email.exchange.exchangeAccountAlias>;
                                };
                            }
                            archive: {
                                // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                $delete(): Promise<email.exchange.Task>;
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                $get(): Promise<email.exchange.exchangeAccountArchive>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                $post(params?: {quota?: number}): Promise<email.exchange.Task>;
                                // PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                $put(params?: {creationDate?: string, currentUsage?: number, guid?: string, quota?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number}): Promise<void>;
                            }
                            changePassword: {
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword
                                $post(params: {password: string}): Promise<email.exchange.Task>;
                            }
                            diagnostics: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics
                                $get(): Promise<email.exchange.exchangeAccountDiagnosis>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics
                                $post(params: {password: string}): Promise<email.exchange.Task>;
                            }
                            export: {
                                // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                $delete(): Promise<email.exchange.Task>;
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                $get(): Promise<email.exchange.Export>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                $post(): Promise<email.exchange.Task>;
                            }
                            exportURL: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL
                                $get(): Promise<email.exchange.ExportUrl>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL
                                $post(): Promise<email.exchange.Task>;
                            }
                            fullAccess: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess
                                $post(params: {allowedAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeAccountFullAccess>;
                                };
                            }
                            outlookURL: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL
                                $get(): Promise<email.exchange.OutlookUrl>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL
                                $post(params: {language: emailexchangeLanguageEnum, version: emailexchangeOutlookVersionEnum}): Promise<email.exchange.Task>;
                            }
                            protocol: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol
                                $get(): Promise<email.exchange.exchangeAccountProtocol>;
                                // PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol
                                $put(params?: {IMAP?: boolean, POP?: boolean, activeSync?: boolean, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean}): Promise<void>;
                            }
                            sendAs: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs
                                $post(params: {allowAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeAccountSendAs>;
                                };
                            }
                            sendOnBehalfTo: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo
                                $post(params: {allowAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeAccountSendOnBehalfTo>;
                                };
                            }
                            tasks: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks
                                $get(): Promise<number[]>;
                                $(id: number): {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}
                                    $get(): Promise<email.exchange.Task>;
                                };
                            }
                            terminate: {
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate
                                $post(): Promise<string>;
                            }
                        };
                    }
                    activateSharepoint: {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint
                        $post(params: {primaryEmailAddress: string, subDomain: string}): Promise<email.exchange.Task>;
                    }
                    changeHostname: {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/changeHostname
                        $post(params: {dcvEmail: string, hostname: string, useDnsAssist: boolean}): Promise<email.exchange.Task>;
                    }
                    dcvEmails: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/dcvEmails
                        $get(): Promise<string[]>;
                    }
                    device: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/device
                        $get(params?: {deviceState?: emailexchangeDeviceActiveSyncStateEnum, identity?: string, IMEI?: string}): Promise<string[]>;
                        $(identity: string): {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
                            $get(): Promise<email.exchange.exchangeServiceDevice>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
                            $put(params?: {IMEI?: string, creationDate?: string, deviceId?: string, deviceModel?: string, deviceState?: emailexchangeDeviceActiveSyncStateEnum, guid?: string, identity?: string, lastUpdate?: string, taskPendingId?: number}): Promise<void>;
                            clearDevice: {
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice
                                $post(): Promise<email.exchange.Task>;
                            }
                        };
                    }
                    domain: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/domain
                        $get(params?: {main?: boolean, state?: emailexchangeObjectStateEnum}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/domain
                        $post(params: {configureAutodiscover?: boolean, configureMx?: boolean, main?: boolean, mxRelay?: string, name: string, organization2010?: string, type: emailexchangeDomainTypeEnum}): Promise<email.exchange.Task>;
                        $(domainName: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $get(): Promise<email.exchange.Domain>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $put(params?: {cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, main?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, organization2010?: string, srvIsValid?: boolean, srvRecord?: string[], state?: emailexchangeObjectStateEnum, taskPendingId?: number, type?: emailexchangeDomainTypeEnum}): Promise<void>;
                            disclaimer: {
                                // DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                $delete(): Promise<email.exchange.Task>;
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                $get(): Promise<email.exchange.disclaimer>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                $post(params: {content: string, outsideOnly?: boolean}): Promise<email.exchange.Task>;
                                // PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                $put(params?: {content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number}): Promise<void>;
                            }
                            disclaimerAttribute: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute
                                $get(): Promise<email.exchange.DisclaimerAttributeEnum[]>;
                            }
                        };
                    }
                    externalContact: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/externalContact
                        $get(params?: {displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/externalContact
                        $post(params: {displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, organization2010?: string}): Promise<email.exchange.Task>;
                        $(externalEmailAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                            $get(): Promise<email.exchange.exchangeExternalContact>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                            $put(params?: {creationDate?: string, displayName?: string, externalEmailAddress?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, organization2010?: string, state?: emailexchangeObjectStateEnum, taskPendingId?: number}): Promise<void>;
                        };
                    }
                    license: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/license
                        $get(params?: {fromDate?: string, license?: emailexchangeOvhLicenceEnum, toDate?: string}): Promise<email.exchange.DailyLicense[]>;
                    }
                    mailingList: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList
                        $get(params?: {mailingListAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList
                        $post(params: {departRestriction: emailexchangeMailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction: emailexchangeMailingListJoinRestrictionEnum, mailingListAddress: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean}): Promise<email.exchange.Task>;
                        $(mailingListAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $get(): Promise<email.exchange.mailingList>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $put(params?: {creationDate?: string, departRestriction?: emailexchangeMailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction?: emailexchangeMailingListJoinRestrictionEnum, lastUpdateDate?: string, mailingListAddress?: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean, spamDetected?: boolean, spamTicketNumber?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number}): Promise<void>;
                            alias: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias
                                $get(): Promise<string[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias
                                $post(params: {alias: string}): Promise<email.exchange.Task>;
                                $(alias: string): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}
                                    $get(): Promise<email.exchange.exchangeMailingListAlias>;
                                };
                            }
                            manager: {
                                account: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account
                                    $get(): Promise<number[]>;
                                    // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account
                                    $post(params: {managerAccountId: number}): Promise<email.exchange.Task>;
                                    $(managerAccountId: number): {
                                        // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}
                                        $delete(): Promise<email.exchange.Task>;
                                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}
                                        $get(): Promise<email.exchange.exchangeDistributionGroupManager>;
                                    };
                                }
                            }
                            member: {
                                account: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account
                                    $get(): Promise<number[]>;
                                    // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account
                                    $post(params?: {memberAccountId?: number, memberContactId?: number}): Promise<email.exchange.Task>;
                                    $(memberAccountId: number): {
                                        // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}
                                        $delete(): Promise<email.exchange.Task>;
                                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}
                                        $get(): Promise<email.exchange.exchangeDistributionGroupMember>;
                                    };
                                }
                                contact: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact
                                    $get(): Promise<number[]>;
                                    // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact
                                    $post(params?: {memberAccountId?: number, memberContactId?: number}): Promise<email.exchange.Task>;
                                    $(memberContactId: number): {
                                        // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}
                                        $delete(): Promise<email.exchange.Task>;
                                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}
                                        $get(): Promise<email.exchange.exchangeDistributionGroupMember>;
                                    };
                                }
                            }
                            sendAs: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs
                                $post(params: {allowAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeDistributionGroupSendAs>;
                                };
                            }
                            sendOnBehalfTo: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo
                                $post(params: {allowAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeDistributionGroupSendOnBehalfTo>;
                                };
                            }
                        };
                    }
                    outlookAvailability: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability
                        $get(params?: {outlookLanguage?: emailexchangeLanguageEnum, outlookVersion?: emailexchangeOutlookVersionEnum}): Promise<email.exchange.OutlookVersions[]>;
                    }
                    protocol: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/protocol
                        $get(): Promise<email.exchange.exchangeServiceProtocol>;
                        // PUT /email/exchange/{organizationName}/service/{exchangeService}/protocol
                        $put(params?: {IMAP?: boolean, POP?: boolean, activeSync?: boolean, activeSyncPolicy?: emailexchangeActiveSyncPolicyEnum, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean}): Promise<void>;
                        activeSyncMailNotification: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification
                            $get(): Promise<number[]>;
                            // POST /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification
                            $post(params: {notifiedAccountId: number}): Promise<email.exchange.Task>;
                            $(notifiedAccountId: number): {
                                // DELETE /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}
                                $delete(): Promise<email.exchange.Task>;
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}
                                $get(): Promise<email.exchange.exchangeServiceActiveSyncNotification>;
                            };
                        }
                    }
                    publicFolder: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder
                        $get(params?: {path?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/publicFolder
                        $post(params: {anonymousPermission?: emailexchangePublicFolderRightTypeEnum, defaultPermission?: emailexchangePublicFolderRightTypeEnum, path: string, quota: number, type: emailexchangePublicFolderTypeEnum}): Promise<email.exchange.Task>;
                        $(path: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $get(): Promise<email.exchange.publicFolder>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $put(params?: {anonymousPermission?: emailexchangePublicFolderRightTypeEnum, creationDate?: string, defaultPermission?: emailexchangePublicFolderRightTypeEnum, hasSubFolders?: boolean, itemCount?: number, lastAccessTime?: string, lastModificationTime?: string, lastUserAccessTime?: string, lastUserModificationTime?: string, path?: string, quota?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number, totalItemSize?: number, type?: emailexchangePublicFolderTypeEnum}): Promise<void>;
                            permission: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
                                $post(params: {accessRights: emailexchangePublicFolderRightTypeEnum, allowedAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangePublicFolderPermission>;
                                    // PUT /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $put(params?: {accessRights?: emailexchangePublicFolderRightTypeEnum, allowedAccountId?: number, creationDate?: string, state?: emailexchangeObjectStateEnum, taskPendingId?: number}): Promise<void>;
                                };
                            }
                        };
                    }
                    publicFolderQuota: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota
                        $get(): Promise<email.exchange.PublicFolderQuota>;
                    }
                    renewSSL: {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/renewSSL
                        $post(params: {dcv: string}): Promise<email.exchange.Task>;
                    }
                    resourceAccount: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
                        $get(params?: {resourceEmailAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
                        $post(params: {addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity: number, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress: string, showMeetingDetails?: emailexchangeShowMeetingDetailsEnum, type: emailexchangeResourceTypeEnum}): Promise<email.exchange.Task>;
                        $(resourceEmailAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $get(): Promise<email.exchange.resourceAccount>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $put(params?: {addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity?: number, creationDate?: string, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress?: string, showMeetingDetails?: emailexchangeShowMeetingDetailsEnum, state?: emailexchangeObjectStateEnum, taskPendingId?: number, type?: emailexchangeResourceTypeEnum}): Promise<void>;
                            delegate: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate
                                $post(params: {allowedAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeResourceAccountDelegate>;
                                };
                            }
                        };
                    }
                    server: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/server
                        $get(): Promise<email.exchange.Server>;
                        // PUT /email/exchange/{organizationName}/service/{exchangeService}/server
                        $put(params?: {commercialVersion?: emailexchangeexchangeCommercialVersionEnum, currentDiskUsage?: number, diskSize?: number, individual2010?: boolean, ip?: string, ipV6?: string, isAValid?: boolean, isAaaaValid?: boolean, isPtrV6Valid?: boolean, isPtrValid?: boolean, owaMfa?: boolean, state?: emailexchangeServerStateEnum, taskPendingId?: number, version?: number}): Promise<void>;
                    }
                    serviceInfos: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/serviceInfos
                        $get(): Promise<services.Service>;
                        // PUT /email/exchange/{organizationName}/service/{exchangeService}/serviceInfos
                        $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}): Promise<void>;
                    }
                    sharedAccount: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
                        $get(params?: {sharedEmailAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
                        $post(params: {displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, mailingFilter?: emailexchangeMailingFilterEnum[], quota: number, sharedEmailAddress: string}): Promise<email.exchange.Task>;
                        $(sharedEmailAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $get(): Promise<email.exchange.sharedAccount>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $put(params?: {creationDate?: string, currentUsage?: number, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, mailingFilter?: emailexchangeMailingFilterEnum[], quota?: number, sharedEmailAddress?: string, spamDetected?: boolean, spamTicketNumber?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number}): Promise<void>;
                            fullAccess: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess
                                $post(params: {allowedAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeSharedAccountFullAccess>;
                                };
                            }
                            sendAs: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs
                                $post(params: {allowAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeSharedAccountSendAs>;
                                };
                            }
                            sendOnBehalfTo: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo
                                $post(params: {allowAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeSharedAccountSendOnBehalfTo>;
                                };
                            }
                            tasks: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks
                                $get(): Promise<number[]>;
                                $(id: number): {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}
                                    $get(): Promise<email.exchange.Task>;
                                };
                            }
                        };
                    }
                    sharedAccountQuota: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota
                        $get(): Promise<email.exchange.SharedAccountQuota>;
                    }
                    task: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/task
                        $get(): Promise<number[]>;
                        $(id: number): {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/task/{id}
                            $get(): Promise<email.exchange.Task>;
                        };
                    }
                    updateDeviceList: {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList
                        $post(): Promise<email.exchange.Task>;
                    }
                    updateFlagsOnAllAccounts: {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts
                        $post(): Promise<void>;
                    }
                };
            }
        };
    }
// Api
  /**
   * Operations about the MSSERVICES service
   * List available services
   */
  get(path: '/email/exchange'): () => Promise<string[]>;
  /**
   * Operations about the EXCHANGE service
   * List available services
   */
  get(path: '/email/exchange/{organizationName}/service'): (params: {organizationName: string}) => Promise<string[]>;
  /**
   * Exchange service
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}'): (params: {exchangeService: string, organizationName: string}) => Promise<email.exchange.ExchangeService>;
  /**
   * List the email.exchange.Account objects
   * Accounts associated to this exchange service
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account'): (params: {exchangeService: string, organizationName: string, accountLicense?: emailexchangeOvhLicenceEnum, id?: number, primaryEmailAddress?: string}) => Promise<string[]>;
  /**
   * Exchange mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Account>;
  /**
   * List the email.exchange.exchangeAccountAlias objects
   * Aliases associated to this mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<string[]>;
  /**
   * Aliases on this mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}'): (params: {alias: string, exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.exchangeAccountAlias>;
  /**
   * Exchange Account Archive
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.exchangeAccountArchive>;
  /**
   * Exchange Account Diagnosis
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.exchangeAccountDiagnosis>;
  /**
   * Export PST file request
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Export>;
  /**
   * Export PST file url
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.ExportUrl>;
  /**
   * List the email.exchange.exchangeAccountFullAccess objects
   * Full access granted users for this mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<number[]>;
  /**
   * Users having full access on this mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.exchangeAccountFullAccess>;
  /**
   * Outlook url
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.OutlookUrl>;
  /**
   * Get protocol status on that mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.exchangeAccountProtocol>;
  /**
   * List the email.exchange.exchangeAccountSendAs objects
   * Send as granted users for this mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<number[]>;
  /**
   * Users authorized to send mails from this mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.exchangeAccountSendAs>;
  /**
   * List the email.exchange.exchangeAccountSendOnBehalfTo objects
   * SendOnBehalfTo granted users for this mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.exchangeAccountSendOnBehalfTo>;
  /**
   * List the email.exchange.Task objects
   * Pending task for this mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<number[]>;
  /**
   * Exchange task details
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}'): (params: {exchangeService: string, id: number, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * dcvEmails operations
   * Get DCV emails if your ssl will expire in next 30 days
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails'): (params: {exchangeService: string, organizationName: string}) => Promise<string[]>;
  /**
   * List the email.exchange.exchangeServiceDevice objects
   * List of your ActiveSync devices registered on this Exchange service
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/device'): (params: {exchangeService: string, organizationName: string, deviceState?: emailexchangeDeviceActiveSyncStateEnum, identity?: string, IMEI?: string}) => Promise<string[]>;
  /**
   * Get the list of your ActiveSync devices registered on this Exchange service
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}'): (params: {exchangeService: string, identity: string, organizationName: string}) => Promise<email.exchange.exchangeServiceDevice>;
  /**
   * List the email.exchange.Domain objects
   * Domains associated to this service
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain'): (params: {exchangeService: string, organizationName: string, main?: boolean, state?: emailexchangeObjectStateEnum}) => Promise<string[]>;
  /**
   * Exchange domain
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}'): (params: {domainName: string, exchangeService: string, organizationName: string}) => Promise<email.exchange.Domain>;
  /**
   * Exchange organization disclaimer
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer'): (params: {domainName: string, exchangeService: string, organizationName: string}) => Promise<email.exchange.disclaimer>;
  /**
   * disclaimerAttribute operations
   * Get diclaimer attributes to substitute with Active Directory properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute'): (params: {domainName: string, exchangeService: string, organizationName: string}) => Promise<email.exchange.DisclaimerAttributeEnum[]>;
  /**
   * List the email.exchange.exchangeExternalContact objects
   * External contacts for this service
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact'): (params: {exchangeService: string, organizationName: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}) => Promise<string[]>;
  /**
   * External contact for this exchange service
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}'): (params: {exchangeService: string, externalEmailAddress: string, organizationName: string}) => Promise<email.exchange.exchangeExternalContact>;
  /**
   * license operations
   * Get active licenses for specific period of time
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/license'): (params: {exchangeService: string, organizationName: string, fromDate?: string, license?: emailexchangeOvhLicenceEnum, toDate?: string}) => Promise<email.exchange.DailyLicense[]>;
  /**
   * List the email.exchange.mailingList objects
   * Mailing list for this service
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList'): (params: {exchangeService: string, organizationName: string, mailingListAddress?: string}) => Promise<string[]>;
  /**
   * Mailing list
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<email.exchange.mailingList>;
  /**
   * List the email.exchange.exchangeMailingListAlias objects
   * Aliases associated to this mailingList
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<string[]>;
  /**
   * Get aliases on this mailingList
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}'): (params: {alias: string, exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<email.exchange.exchangeMailingListAlias>;
  /**
   * List the email.exchange.exchangeDistributionGroupManager objects
   * Mailing list account manager
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<number[]>;
  /**
   * Mailing list managers
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}'): (params: {exchangeService: string, mailingListAddress: string, managerAccountId: number, organizationName: string}) => Promise<email.exchange.exchangeDistributionGroupManager>;
  /**
   * List the email.exchange.exchangeDistributionGroupMember objects
   * Mailing list account member
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<number[]>;
  /**
   * Mailing list members
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}'): (params: {exchangeService: string, mailingListAddress: string, memberAccountId: number, organizationName: string}) => Promise<email.exchange.exchangeDistributionGroupMember>;
  /**
   * List the email.exchange.exchangeDistributionGroupMember objects
   * Mailing list contact member
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<number[]>;
  /**
   * Mailing list members
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}'): (params: {exchangeService: string, mailingListAddress: string, memberContactId: number, organizationName: string}) => Promise<email.exchange.exchangeDistributionGroupMember>;
  /**
   * List the email.exchange.exchangeDistributionGroupSendAs objects
   * sendAs
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<email.exchange.exchangeDistributionGroupSendAs>;
  /**
   * List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects
   * sendOnBehalfTo
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailing list
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<email.exchange.exchangeDistributionGroupSendOnBehalfTo>;
  /**
   * outlookAvailability operations
   * Show available outlooks
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability'): (params: {exchangeService: string, organizationName: string, outlookLanguage?: emailexchangeLanguageEnum, outlookVersion?: emailexchangeOutlookVersionEnum}) => Promise<email.exchange.OutlookVersions[]>;
  /**
   * Protocol access policy for this Exchange service
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol'): (params: {exchangeService: string, organizationName: string}) => Promise<email.exchange.exchangeServiceProtocol>;
  /**
   * List the email.exchange.exchangeServiceActiveSyncNotification objects
   * Exchange account id subscribed to ActiveSync quarantine notifications
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification'): (params: {exchangeService: string, organizationName: string}) => Promise<number[]>;
  /**
   * Get email addresses subscribed to ActiveSync quarantine notifications
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}'): (params: {exchangeService: string, notifiedAccountId: number, organizationName: string}) => Promise<email.exchange.exchangeServiceActiveSyncNotification>;
  /**
   * List the email.exchange.publicFolder objects
   * Public folders associated to this service
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder'): (params: {exchangeService: string, organizationName: string, path?: string}) => Promise<string[]>;
  /**
   * Exchange organization public folder
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}'): (params: {exchangeService: string, organizationName: string, path: string}) => Promise<email.exchange.publicFolder>;
  /**
   * List the email.exchange.exchangePublicFolderPermission objects
   * Public folder permission
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission'): (params: {exchangeService: string, organizationName: string, path: string}) => Promise<number[]>;
  /**
   * Exchange organization public folder permission
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, path: string}) => Promise<email.exchange.exchangePublicFolderPermission>;
  /**
   * publicFolderQuota operations
   * Get public folder quota usage in total available space
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota'): (params: {exchangeService: string, organizationName: string}) => Promise<email.exchange.PublicFolderQuota>;
  /**
   * List the email.exchange.resourceAccount objects
   * Resource account associated to this service
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount'): (params: {exchangeService: string, organizationName: string, resourceEmailAddress?: string}) => Promise<string[]>;
  /**
   * Exchange resource account
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}'): (params: {exchangeService: string, organizationName: string, resourceEmailAddress: string}) => Promise<email.exchange.resourceAccount>;
  /**
   * List the email.exchange.exchangeResourceAccountDelegate objects
   * Resource account manager
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate'): (params: {exchangeService: string, organizationName: string, resourceEmailAddress: string}) => Promise<number[]>;
  /**
   * Resource accounts delegates
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, resourceEmailAddress: string}) => Promise<email.exchange.exchangeResourceAccountDelegate>;
  /**
   * Exchange server
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/server'): (params: {exchangeService: string, organizationName: string}) => Promise<email.exchange.Server>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos'): (params: {exchangeService: string, organizationName: string}) => Promise<services.Service>;
  /**
   * List the email.exchange.sharedAccount objects
   * Shared accounts associated to this exchange service
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress?: string}) => Promise<string[]>;
  /**
   * Exchange shared mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.sharedAccount>;
  /**
   * List the email.exchange.exchangeSharedAccountFullAccess objects
   * Full access granted users for this shared mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<number[]>;
  /**
   * Users having full access on this shared mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.exchangeSharedAccountFullAccess>;
  /**
   * List the email.exchange.exchangeSharedAccountSendAs objects
   * Send as granted users for this shared mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<number[]>;
  /**
   * Users authorized to send mails from this shared mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.exchangeSharedAccountSendAs>;
  /**
   * List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects
   * SendOnBehalfTo granted users for this shared mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this shared mailbox
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.exchangeSharedAccountSendOnBehalfTo>;
  /**
   * List the email.exchange.Task objects
   * Pending task for this mailbox
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<number[]>;
  /**
   * Exchange task details
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}'): (params: {exchangeService: string, id: number, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * sharedAccountQuota operations
   * Get shared account quota usage in total available space
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota'): (params: {exchangeService: string, organizationName: string}) => Promise<email.exchange.SharedAccountQuota>;
  /**
   * List the email.exchange.Task objects
   * Pending actions
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/task'): (params: {exchangeService: string, organizationName: string}) => Promise<number[]>;
  /**
   * Exchange task details
   * Get this object properties
   */
  get(path: '/email/exchange/{organizationName}/service/{exchangeService}/task/{id}'): (params: {exchangeService: string, id: number, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange service
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}'): (params: {exchangeService: string, organizationName: string, complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: emailexchangeServiceOfferEnum, passwordHistoryCount?: number, spamAndVirusConfiguration?: emailexchangespamAndVirusConfiguration, sslExpirationDate?: string, state?: emailexchangeServiceStateEnum, taskPendingId?: number, webUrl?: string}) => Promise<void>;
  /**
   * Exchange mailbox
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, SAMAccountName?: string, accountLicense?: emailexchangeOvhLicenceEnum, company?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, deleteOutlookAtExpiration?: boolean, displayName?: string, domain?: string, exchangeGuid?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, guid?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, litigation?: boolean, litigationPeriod?: number, login?: string, mailingFilter?: emailexchangeMailingFilterEnum[], outlookLicense?: boolean, owaLimited?: boolean, passwordLastUpdate?: string, quota?: number, renewOutlookPeriod?: emailexchangerenewPeriodEnum, renewPeriod?: emailexchangerenewPeriodEnum, spamAndVirusConfiguration?: emailexchangespamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * Exchange Account Archive
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, creationDate?: string, currentUsage?: number, guid?: string, quota?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * Get protocol status on that mailbox
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, IMAP?: boolean, POP?: boolean, activeSync?: boolean, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean}) => Promise<void>;
  /**
   * Get the list of your ActiveSync devices registered on this Exchange service
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}'): (params: {exchangeService: string, identity: string, organizationName: string, IMEI?: string, creationDate?: string, deviceId?: string, deviceModel?: string, deviceState?: emailexchangeDeviceActiveSyncStateEnum, guid?: string, lastUpdate?: string, taskPendingId?: number}) => Promise<void>;
  /**
   * Exchange domain
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}'): (params: {domainName: string, exchangeService: string, organizationName: string, cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, main?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, organization2010?: string, srvIsValid?: boolean, srvRecord?: string[], state?: emailexchangeObjectStateEnum, taskPendingId?: number, type?: emailexchangeDomainTypeEnum}) => Promise<void>;
  /**
   * Exchange organization disclaimer
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer'): (params: {domainName: string, exchangeService: string, organizationName: string, content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number}) => Promise<void>;
  /**
   * External contact for this exchange service
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}'): (params: {exchangeService: string, externalEmailAddress: string, organizationName: string, creationDate?: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, organization2010?: string, state?: emailexchangeObjectStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * Mailing list
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string, creationDate?: string, departRestriction?: emailexchangeMailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction?: emailexchangeMailingListJoinRestrictionEnum, lastUpdateDate?: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean, spamDetected?: boolean, spamTicketNumber?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * Protocol access policy for this Exchange service
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol'): (params: {exchangeService: string, organizationName: string, IMAP?: boolean, POP?: boolean, activeSync?: boolean, activeSyncPolicy?: emailexchangeActiveSyncPolicyEnum, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean}) => Promise<void>;
  /**
   * Exchange organization public folder
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}'): (params: {exchangeService: string, organizationName: string, path: string, anonymousPermission?: emailexchangePublicFolderRightTypeEnum, creationDate?: string, defaultPermission?: emailexchangePublicFolderRightTypeEnum, hasSubFolders?: boolean, itemCount?: number, lastAccessTime?: string, lastModificationTime?: string, lastUserAccessTime?: string, lastUserModificationTime?: string, quota?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number, totalItemSize?: number, type?: emailexchangePublicFolderTypeEnum}) => Promise<void>;
  /**
   * Exchange organization public folder permission
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, path: string, accessRights?: emailexchangePublicFolderRightTypeEnum, creationDate?: string, state?: emailexchangeObjectStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * Exchange resource account
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}'): (params: {exchangeService: string, organizationName: string, resourceEmailAddress: string, addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity?: number, creationDate?: string, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, showMeetingDetails?: emailexchangeShowMeetingDetailsEnum, state?: emailexchangeObjectStateEnum, taskPendingId?: number, type?: emailexchangeResourceTypeEnum}) => Promise<void>;
  /**
   * Exchange server
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/server'): (params: {exchangeService: string, organizationName: string, commercialVersion?: emailexchangeexchangeCommercialVersionEnum, currentDiskUsage?: number, diskSize?: number, individual2010?: boolean, ip?: string, ipV6?: string, isAValid?: boolean, isAaaaValid?: boolean, isPtrV6Valid?: boolean, isPtrValid?: boolean, owaMfa?: boolean, state?: emailexchangeServerStateEnum, taskPendingId?: number, version?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos'): (params: {exchangeService: string, organizationName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}) => Promise<void>;
  /**
   * Exchange shared mailbox
   * Alter this object properties
   */
  put(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string, creationDate?: string, currentUsage?: number, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, mailingFilter?: emailexchangeMailingFilterEnum[], quota?: number, spamDetected?: boolean, spamTicketNumber?: number, state?: emailexchangeObjectStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * List the email.exchange.Account objects
   * Create new mailbox in exchange server
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account'): (params: {exchangeService: string, organizationName: string, company?: string, displayName?: string, domain: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, license: emailexchangeOvhLicenceEnum, litigation?: boolean, litigationPeriod?: number, login: string, mailingFilter?: emailexchangeMailingFilterEnum[], outlookLicense?: boolean, password: string, SAMAccountName?: string, spamAndVirusConfiguration?: emailexchangespamAndVirusConfiguration}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeAccountAlias objects
   * Create new alias
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, alias: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange Account Archive
   * Create new archive mailbox
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, quota?: number}) => Promise<email.exchange.Task>;
  /**
   * changePassword operations
   * Change mailbox password
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, password: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange Account Diagnosis
   * Create new diagnosis request
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, password: string}) => Promise<email.exchange.Task>;
  /**
   * Export PST file request
   * Request PST file for the account
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Export PST file url
   * Generate temporary url to PST file
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeAccountFullAccess objects
   * Allow full access to a user
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, allowedAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * Outlook url
   * Generate outlook url
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, language: emailexchangeLanguageEnum, version: emailexchangeOutlookVersionEnum}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeAccountSendAs objects
   * Allow another user to send mails from this mailbox
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, allowAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeAccountSendOnBehalfTo objects
   * Allow another user to Send On Behalf To mails from this mailbox
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, allowAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * terminate operations
   * Terminate account at expiration date
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<string>;
  /**
   * activateSharepoint operations
   * Activate Sharepoint infra connected to this exchange service
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string, subDomain: string}) => Promise<email.exchange.Task>;
  /**
   * changeHostname operations
   * Setting SSL hostname for Exchange private offer
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/changeHostname'): (params: {exchangeService: string, organizationName: string, dcvEmail: string, hostname: string, useDnsAssist: boolean}) => Promise<email.exchange.Task>;
  /**
   * clearDevice operations
   * Executes a factory reset on the device. THIS OPERATION CANNOT BE REVERSED, ALL DATA ON THE DEVICE WILL BE LOST.
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice'): (params: {exchangeService: string, identity: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.Domain objects
   * Create new domain in exchange services
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain'): (params: {exchangeService: string, organizationName: string, configureAutodiscover?: boolean, configureMx?: boolean, main?: boolean, mxRelay?: string, name: string, organization2010?: string, type: emailexchangeDomainTypeEnum}) => Promise<email.exchange.Task>;
  /**
   * Exchange organization disclaimer
   * Create organization disclaimer of each email
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer'): (params: {domainName: string, exchangeService: string, organizationName: string, content: string, outsideOnly?: boolean}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeExternalContact objects
   * create new external contact
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact'): (params: {exchangeService: string, organizationName: string, displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, organization2010?: string}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.mailingList objects
   * Add mailing list
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList'): (params: {exchangeService: string, organizationName: string, departRestriction: emailexchangeMailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction: emailexchangeMailingListJoinRestrictionEnum, mailingListAddress: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeMailingListAlias objects
   * Create new alias
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string, alias: string}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupManager objects
   * Add new mailing list manager
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string, managerAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupMember objects
   * Add new mailing list member
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string, memberAccountId?: number, memberContactId?: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupMember objects
   * Add new mailing list member
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string, memberAccountId?: number, memberContactId?: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupSendAs objects
   * Allow another user to Send aso mails from this mailing list
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string, allowAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects
   * Allow another user to Send aso mails from this mailing list
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string, allowAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeServiceActiveSyncNotification objects
   * Subscribe new address to ActiveSync quarantine notifications
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification'): (params: {exchangeService: string, organizationName: string, notifiedAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.publicFolder objects
   * Create organization public folder
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder'): (params: {exchangeService: string, organizationName: string, anonymousPermission?: emailexchangePublicFolderRightTypeEnum, defaultPermission?: emailexchangePublicFolderRightTypeEnum, path: string, quota: number, type: emailexchangePublicFolderTypeEnum}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangePublicFolderPermission objects
   * Create public folder permission
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission'): (params: {exchangeService: string, organizationName: string, path: string, accessRights: emailexchangePublicFolderRightTypeEnum, allowedAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * renewSSL operations
   * Renew SSL if it will expire in next 30 days
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/renewSSL'): (params: {exchangeService: string, organizationName: string, dcv: string}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.resourceAccount objects
   * create new resource account in exchange server
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount'): (params: {exchangeService: string, organizationName: string, addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity: number, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress: string, showMeetingDetails?: emailexchangeShowMeetingDetailsEnum, type: emailexchangeResourceTypeEnum}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeResourceAccountDelegate objects
   * add new resource account delegate in exchange server
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate'): (params: {exchangeService: string, organizationName: string, resourceEmailAddress: string, allowedAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.sharedAccount objects
   * Create new shared mailbox in exchange server
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount'): (params: {exchangeService: string, organizationName: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, mailingFilter?: emailexchangeMailingFilterEnum[], quota: number, sharedEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeSharedAccountFullAccess objects
   * Allow full access to a user
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string, allowedAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeSharedAccountSendAs objects
   * Allow another user to send mails from this shared mailbox
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string, allowAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects
   * Allow another user to Send On Behalf To mails from this shared mailbox
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string, allowAccountId: number}) => Promise<email.exchange.Task>;
  /**
   * updateDeviceList operations
   * Update device list
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList'): (params: {exchangeService: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * updateFlagsOnAllAccounts operations
   * Update spam and virus flags on all active accounts
   */
  post(path: '/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts'): (params: {exchangeService: string, organizationName: string}) => Promise<void>;
  /**
   * Exchange mailbox
   * Delete existing mailbox in exchange server
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Aliases on this mailbox
   * Delete existing alias
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}'): (params: {alias: string, exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange Account Archive
   * Delete existing archive mailbox
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Export PST file request
   * Remove request of PST file
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export'): (params: {exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Users having full access on this mailbox
   * Revoke full access
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Users authorized to send mails from this mailbox
   * Delete allowed user for sendAs
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Delete allowed user for SendOnBehalfTo
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange domain
   * Delete existing domain in exchange services
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}'): (params: {domainName: string, exchangeService: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange organization disclaimer
   * Delete existing organization disclaimer
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer'): (params: {domainName: string, exchangeService: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * External contact for this exchange service
   * delete external contact
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}'): (params: {exchangeService: string, externalEmailAddress: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Mailing list
   * Delete mailing list
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}'): (params: {exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Get aliases on this mailingList
   * Delete existing alias
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}'): (params: {alias: string, exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Mailing list managers
   * Delete mailing list manager
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}'): (params: {exchangeService: string, mailingListAddress: string, managerAccountId: number, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Mailing list members
   * Delete mailing list member
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}'): (params: {exchangeService: string, mailingListAddress: string, memberAccountId: number, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Mailing list members
   * Delete mailing list member
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}'): (params: {exchangeService: string, mailingListAddress: string, memberContactId: number, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Delete allowed user for SendAs
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailing list
   * Delete allowed user for SendOnBehalfTo
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Get email addresses subscribed to ActiveSync quarantine notifications
   * Unubscribe address from ActiveSync quarantine notifications
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}'): (params: {exchangeService: string, notifiedAccountId: number, organizationName: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange organization public folder
   * Delete existing organization public folder
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}'): (params: {exchangeService: string, organizationName: string, path: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange organization public folder permission
   * Delete existing permission from public folder
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, path: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange resource account
   * delete existing resource account in exchange server
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}'): (params: {exchangeService: string, organizationName: string, resourceEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Resource accounts delegates
   * delete existing resource account delegate in exchange server
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, resourceEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Exchange shared mailbox
   * Delete existing shared mailbox in exchange server
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}'): (params: {exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Users having full access on this shared mailbox
   * Revoke full access
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Users authorized to send mails from this shared mailbox
   * Delete allowed user for sendAs
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this shared mailbox
   * Delete allowed user for SendOnBehalfTo
   */
  delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}'): (params: {allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string}) => Promise<email.exchange.Task>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type emailexchangeOvhLicenceEnum = email.exchange.OvhLicenceEnum;
type emailexchangeMailingFilterEnum = email.exchange.MailingFilterEnum;
type emailexchangerenewPeriodEnum = email.exchange.renewPeriodEnum;
type emailexchangespamAndVirusConfiguration = email.exchange.spamAndVirusConfiguration;
type emailexchangeObjectStateEnum = email.exchange.ObjectStateEnum;
type emailexchangeAccountLicense = email.exchange.AccountLicense;
type emailexchangeDomainTypeEnum = email.exchange.DomainTypeEnum;
type emailexchangeServiceOfferEnum = email.exchange.ServiceOfferEnum;
type emailexchangeServiceStateEnum = email.exchange.ServiceStateEnum;
type emailexchangeLanguageEnum = email.exchange.LanguageEnum;
type emailexchangeOutlookVersionEnum = email.exchange.OutlookVersionEnum;
type emailexchangeexchangeCommercialVersionEnum = email.exchange.exchangeCommercialVersionEnum;
type emailexchangeServerStateEnum = email.exchange.ServerStateEnum;
type emailexchangeTaskFunctionEnum = email.exchange.TaskFunctionEnum;
type emailexchangeTaskStatusEnum = email.exchange.TaskStatusEnum;
type emailexchangePublicFolderRightTypeEnum = email.exchange.PublicFolderRightTypeEnum;
type emailexchangeactiveSyncNotificationStateEnum = email.exchange.activeSyncNotificationStateEnum;
type emailexchangeauthorizedIpStatusEnum = email.exchange.authorizedIpStatusEnum;
type emailexchangeDeviceActiveSyncStateEnum = email.exchange.DeviceActiveSyncStateEnum;
type emailexchangeActiveSyncPolicyEnum = email.exchange.ActiveSyncPolicyEnum;
type emailexchangeMailingListDepartRestrictionEnum = email.exchange.MailingListDepartRestrictionEnum;
type emailexchangeMailingListJoinRestrictionEnum = email.exchange.MailingListJoinRestrictionEnum;
type emailexchangePublicFolderTypeEnum = email.exchange.PublicFolderTypeEnum;
type emailexchangeShowMeetingDetailsEnum = email.exchange.ShowMeetingDetailsEnum;
type emailexchangeResourceTypeEnum = email.exchange.ResourceTypeEnum;
type serviceRenewType = service.RenewType;
type serviceRenewalTypeEnum = service.RenewalTypeEnum;
type serviceStateEnum = service.StateEnum;

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /email/exchange Models
 * Source: https://eu.api.ovh.com/1.0/email/exchange.json
 */
export namespace email {
    export namespace exchange {
        // interface fullName: email.exchange.Account.Account
        export interface Account {
            SAMAccountName?: string;
            accountLicense: email.exchange.OvhLicenceEnum;
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
            mailingFilter?: email.exchange.MailingFilterEnum[];
            numberOfAliases: number;
            outlookLicense: boolean;
            owaLimited: boolean;
            passwordLastUpdate?: string;
            primaryEmailAddress: string;
            quota: number;
            renewOutlookPeriod?: email.exchange.renewPeriodEnum;
            renewPeriod?: email.exchange.renewPeriodEnum;
            spamAndVirusConfiguration: email.exchange.spamAndVirusConfiguration;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        // interface fullName: email.exchange.AccountLicense.AccountLicense
        export interface AccountLicense {
            license: email.exchange.OvhLicenceEnum;
            licenseQuantity: number;
        }
        // type fullname: email.exchange.ActiveSyncPolicyEnum
        export type ActiveSyncPolicyEnum = "allow" | "block" | "quarantine"
        // interface fullName: email.exchange.DailyLicense.DailyLicense
        export interface DailyLicense {
            accountLicense: email.exchange.AccountLicense[];
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
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
            type: email.exchange.DomainTypeEnum;
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
            offer: email.exchange.ServiceOfferEnum;
            passwordHistoryCount?: number;
            spamAndVirusConfiguration: email.exchange.spamAndVirusConfiguration;
            sslExpirationDate?: string;
            state: email.exchange.ServiceStateEnum;
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
            outlookLanguage: email.exchange.LanguageEnum;
            outlookVersion: email.exchange.OutlookVersionEnum;
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
            function: email.exchange.TaskFunctionEnum;
            id: number;
            status: email.exchange.TaskStatusEnum;
            todoDate: string;
        }
        // type fullname: email.exchange.TaskFunctionEnum
        export type TaskFunctionEnum = "activateSharepoint" | "addAccount" | "addAccountArchive" | "addActiveSyncMailNotification" | "addAlias" | "addDistributionGroup" | "addDistributionGroupManager" | "addDistributionGroupMember" | "addDistributionGroupSendAs" | "addDistributionGroupSendOnBehalfTo" | "addDomain" | "addDomainDisclaimer" | "addExchangeServiceAuthorizedIp" | "addExportPstRequest" | "addExternalContact" | "addFullAccess" | "addOutlookLicense" | "addPublicFolder" | "addPublicFolderPermission" | "addResourceAccount" | "addResourceDelegate" | "addSendAs" | "addSendOnBehalfTo" | "addSharedAccount" | "addSharedAccountFullAccess" | "addSharedAccountSendAs" | "addSharedAccountSendOnBehalfTo" | "changeHostname" | "changePassword" | "clearDataOnDevice" | "cloneTemplateExchangePrivate" | "configureExchangeCustomer" | "configureExchangeOwaMfa" | "deleteAccount" | "deleteAccountArchive" | "deleteActiveSyncMailNotification" | "deleteAlias" | "deleteDistributionGroup" | "deleteDistributionGroupManager" | "deleteDistributionGroupMember" | "deleteDistributionGroupSendAs" | "deleteDistributionGroupSendOnBehalfTo" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExchangeService" | "deleteExchangeServiceAuthorizedIp" | "deleteExportPstRequest" | "deleteExternalContact" | "deleteFullAccess" | "deleteOutlookLicense" | "deletePublicFolder" | "deletePublicFolderPermission" | "deleteResourceAccount" | "deleteResourceDelegate" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteSharedAccount" | "deleteSharedAccountFullAccess" | "deleteSharedAccountSendAs" | "deleteSharedAccountSendOnBehalfTo" | "destroyPrivateVm" | "diagnoseAccount" | "expandDrive" | "generateOutlookUrl" | "generatePstUrl" | "installExchange" | "installSSL" | "maintenance" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationMailingList" | "migrationResourceAccount" | "migrationService" | "reOpenHostedAccount" | "reOpenOutlookLicense" | "reOpenPrivateAccount" | "reOpenPrivateVm" | "setAccount" | "setAccountArchive" | "setAlias" | "setDistributionGroup" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExchangeAccountProtocol" | "setExchangeServiceDevice" | "setExternalContact" | "setPublicFolder" | "setPublicFolderPermission" | "setResourceAccount" | "setService" | "setSharedAccount" | "suspendAccount" | "suspendExchangeService" | "suspendHostedAccount" | "suspendOutlookLicense" | "suspendPrivateAccount" | "suspendPrivateVm" | "unsuspendAccount" | "unsuspendExchangeService" | "unsuspendHostedAccount" | "updateExchangeServiceDevice" | "upgrade2016"
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
            state: email.exchange.ObjectStateEnum;
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
        export type exchangeCommercialVersionEnum = "2010" | "2013" | "2016" | "2019"
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
            state: email.exchange.ObjectStateEnum;
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
            accessRights: email.exchange.PublicFolderRightTypeEnum;
            allowedAccountId: number;
            creationDate: string;
            state: email.exchange.ObjectStateEnum;
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
            state: email.exchange.activeSyncNotificationStateEnum;
        }
        // interface fullName: email.exchange.exchangeServiceAuthorizedIp.exchangeServiceAuthorizedIp
        export interface exchangeServiceAuthorizedIp {
            creationDate: string;
            ip: string;
            status: email.exchange.authorizedIpStatusEnum;
        }
        // interface fullName: email.exchange.exchangeServiceDevice.exchangeServiceDevice
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
        // interface fullName: email.exchange.exchangeServiceProtocol.exchangeServiceProtocol
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
        // interface fullName: email.exchange.publicFolder.publicFolder
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
            showMeetingDetails: email.exchange.ShowMeetingDetailsEnum;
            state: email.exchange.ObjectStateEnum;
            taskPendingId: number;
            type: email.exchange.ResourceTypeEnum;
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
            mailingFilter?: email.exchange.MailingFilterEnum[];
            quota: number;
            sharedEmailAddress: string;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: email.exchange.ObjectStateEnum;
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
 * Api Proxy model
 */// Apis harmony
// path /email
export interface Email {
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
                    $put(params?: {complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: email.exchange.ServiceOfferEnum, passwordHistoryCount?: number, spamAndVirusConfiguration?: email.exchange.spamAndVirusConfiguration, sslExpirationDate?: string, state?: email.exchange.ServiceStateEnum, taskPendingId?: number, webUrl?: string}): Promise<void>;
                    account: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/account
                        $get(params?: {accountLicense?: email.exchange.OvhLicenceEnum, id?: number, primaryEmailAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/account
                        $post(params: {company?: string, displayName?: string, domain: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, license: email.exchange.OvhLicenceEnum, litigation?: boolean, litigationPeriod?: number, login: string, mailingFilter?: email.exchange.MailingFilterEnum[], outlookLicense?: boolean, password: string, SAMAccountName?: string, spamAndVirusConfiguration?: email.exchange.spamAndVirusConfiguration}): Promise<email.exchange.Task>;
                        $(primaryEmailAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $get(): Promise<email.exchange.Account>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $put(params?: {SAMAccountName?: string, accountLicense?: email.exchange.OvhLicenceEnum, company?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, deleteOutlookAtExpiration?: boolean, displayName?: string, domain?: string, exchangeGuid?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, guid?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, litigation?: boolean, litigationPeriod?: number, login?: string, mailingFilter?: email.exchange.MailingFilterEnum[], numberOfAliases?: number, outlookLicense?: boolean, owaLimited?: boolean, passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: number, renewOutlookPeriod?: email.exchange.renewPeriodEnum, renewPeriod?: email.exchange.renewPeriodEnum, spamAndVirusConfiguration?: email.exchange.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
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
                                $put(params?: {creationDate?: string, currentUsage?: number, guid?: string, quota?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
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
                                $post(params: {language: email.exchange.LanguageEnum, version: email.exchange.OutlookVersionEnum}): Promise<email.exchange.Task>;
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
                        $get(params?: {deviceState?: email.exchange.DeviceActiveSyncStateEnum, identity?: string, IMEI?: string}): Promise<string[]>;
                        $(identity: string): {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
                            $get(): Promise<email.exchange.exchangeServiceDevice>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
                            $put(params?: {IMEI?: string, creationDate?: string, deviceId?: string, deviceModel?: string, deviceState?: email.exchange.DeviceActiveSyncStateEnum, guid?: string, identity?: string, lastUpdate?: string, taskPendingId?: number}): Promise<void>;
                            clearDevice: {
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice
                                $post(): Promise<email.exchange.Task>;
                            }
                        };
                    }
                    domain: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/domain
                        $get(params?: {main?: boolean, state?: email.exchange.ObjectStateEnum}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/domain
                        $post(params: {configureAutodiscover?: boolean, configureMx?: boolean, main?: boolean, mxRelay?: string, name: string, organization2010?: string, type: email.exchange.DomainTypeEnum}): Promise<email.exchange.Task>;
                        $(domainName: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $get(): Promise<email.exchange.Domain>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $put(params?: {cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, main?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, organization2010?: string, srvIsValid?: boolean, srvRecord?: string[], state?: email.exchange.ObjectStateEnum, taskPendingId?: number, type?: email.exchange.DomainTypeEnum}): Promise<void>;
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
                            $put(params?: {creationDate?: string, displayName?: string, externalEmailAddress?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, organization2010?: string, state?: email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
                        };
                    }
                    license: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/license
                        $get(params?: {fromDate?: string, license?: email.exchange.OvhLicenceEnum, toDate?: string}): Promise<email.exchange.DailyLicense[]>;
                    }
                    mailingList: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList
                        $get(params?: {mailingListAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList
                        $post(params: {departRestriction: email.exchange.MailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction: email.exchange.MailingListJoinRestrictionEnum, mailingListAddress: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean}): Promise<email.exchange.Task>;
                        $(mailingListAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $get(): Promise<email.exchange.mailingList>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $put(params?: {creationDate?: string, departRestriction?: email.exchange.MailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction?: email.exchange.MailingListJoinRestrictionEnum, lastUpdateDate?: string, mailingListAddress?: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean, spamDetected?: boolean, spamTicketNumber?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
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
                        $get(params?: {outlookLanguage?: email.exchange.LanguageEnum, outlookVersion?: email.exchange.OutlookVersionEnum}): Promise<email.exchange.OutlookVersions[]>;
                    }
                    protocol: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/protocol
                        $get(): Promise<email.exchange.exchangeServiceProtocol>;
                        // PUT /email/exchange/{organizationName}/service/{exchangeService}/protocol
                        $put(params?: {IMAP?: boolean, POP?: boolean, activeSync?: boolean, activeSyncPolicy?: email.exchange.ActiveSyncPolicyEnum, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean}): Promise<void>;
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
                        $post(params: {anonymousPermission?: email.exchange.PublicFolderRightTypeEnum, defaultPermission?: email.exchange.PublicFolderRightTypeEnum, path: string, quota: number, type: email.exchange.PublicFolderTypeEnum}): Promise<email.exchange.Task>;
                        $(path: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $get(): Promise<email.exchange.publicFolder>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $put(params?: {anonymousPermission?: email.exchange.PublicFolderRightTypeEnum, creationDate?: string, defaultPermission?: email.exchange.PublicFolderRightTypeEnum, hasSubFolders?: boolean, itemCount?: number, lastAccessTime?: string, lastModificationTime?: string, lastUserAccessTime?: string, lastUserModificationTime?: string, path?: string, quota?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number, totalItemSize?: number, type?: email.exchange.PublicFolderTypeEnum}): Promise<void>;
                            permission: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
                                $post(params: {accessRights: email.exchange.PublicFolderRightTypeEnum, allowedAccountId: number}): Promise<email.exchange.Task>;
                                $(allowedAccountId: number): {
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangePublicFolderPermission>;
                                    // PUT /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $put(params?: {accessRights?: email.exchange.PublicFolderRightTypeEnum, allowedAccountId?: number, creationDate?: string, state?: email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
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
                        $post(params: {addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity: number, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress: string, showMeetingDetails?: email.exchange.ShowMeetingDetailsEnum, type: email.exchange.ResourceTypeEnum}): Promise<email.exchange.Task>;
                        $(resourceEmailAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $get(): Promise<email.exchange.resourceAccount>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $put(params?: {addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity?: number, creationDate?: string, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress?: string, showMeetingDetails?: email.exchange.ShowMeetingDetailsEnum, state?: email.exchange.ObjectStateEnum, taskPendingId?: number, type?: email.exchange.ResourceTypeEnum}): Promise<void>;
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
                        $put(params?: {commercialVersion?: email.exchange.exchangeCommercialVersionEnum, currentDiskUsage?: number, diskSize?: number, individual2010?: boolean, ip?: string, ipV6?: string, isAValid?: boolean, isAaaaValid?: boolean, isPtrV6Valid?: boolean, isPtrValid?: boolean, owaMfa?: boolean, state?: email.exchange.ServerStateEnum, taskPendingId?: number, version?: number}): Promise<void>;
                    }
                    serviceInfos: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/serviceInfos
                        $get(): Promise<services.Service>;
                        // PUT /email/exchange/{organizationName}/service/{exchangeService}/serviceInfos
                        $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
                    }
                    sharedAccount: {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
                        $get(params?: {sharedEmailAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
                        $post(params: {displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, mailingFilter?: email.exchange.MailingFilterEnum[], quota: number, sharedEmailAddress: string}): Promise<email.exchange.Task>;
                        $(sharedEmailAddress: string): {
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $get(): Promise<email.exchange.sharedAccount>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $put(params?: {creationDate?: string, currentUsage?: number, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, mailingFilter?: email.exchange.MailingFilterEnum[], quota?: number, sharedEmailAddress?: string, spamDetected?: boolean, spamTicketNumber?: number, state?: email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
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
}

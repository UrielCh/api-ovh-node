import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace email {
    export namespace exchange {
        //email.exchange.Account
        // fullName: email.exchange.Account.Account
        export interface Account {
            SAMAccountName?: string;
            accountLicense?: OVH.email.exchange.OvhLicenceEnum;
            company?: string;
            configured?: boolean;
            creationDate?: string;
            currentUsage?: number;
            deleteAtExpiration?: boolean;
            deleteOutlookAtExpiration?: boolean;
            displayName?: string;
            domain?: string;
            exchangeGuid?: string;
            expirationDate?: string;
            expirationOutlookDate?: string;
            firstName?: string;
            guid?: string;
            hiddenFromGAL?: boolean;
            id?: number;
            initial?: string;
            lastLogoffDate?: string;
            lastLogonDate?: string;
            lastName?: string;
            lastUpdateDate?: string;
            litigation?: boolean;
            litigationPeriod?: number;
            login?: string;
            mailingFilter?: OVH.email.exchange.MailingFilterEnum[];
            outlookLicense?: boolean;
            owaLimited?: boolean;
            passwordLastUpdate?: string;
            primaryEmailAddress?: string;
            quota?: number;
            renewOutlookPeriod?: OVH.email.exchange.renewPeriodEnum;
            renewPeriod?: OVH.email.exchange.renewPeriodEnum;
            spamAndVirusConfiguration?: OVH.email.exchange.spamAndVirusConfiguration;
            spamDetected?: boolean;
            spamTicketNumber?: number;
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        //email.exchange.AccountLicense
        // fullName: email.exchange.AccountLicense.AccountLicense
        export interface AccountLicense {
            license?: OVH.email.exchange.OvhLicenceEnum;
            licenseQuantity?: number;
        }
        //email.exchange.ActiveSyncPolicyEnum
        export type ActiveSyncPolicyEnum = "allow" | "block" | "quarantine"
        //email.exchange.DailyLicense
        // fullName: email.exchange.DailyLicense.DailyLicense
        export interface DailyLicense {
            accountLicense?: OVH.email.exchange.AccountLicense[];
            date?: string;
            outlookQuantity?: number;
        }
        //email.exchange.DeviceActiveSyncStateEnum
        export type DeviceActiveSyncStateEnum = "allowed" | "blocked" | "deviceDiscovery" | "quarantined"
        //email.exchange.DisclaimerAttributeEnum
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        //email.exchange.Domain
        // fullName: email.exchange.Domain.Domain
        export interface Domain {
            cnameToCheck?: string;
            domainAliases?: string[];
            domainValidated?: boolean;
            isAliasDomain?: boolean;
            main?: boolean;
            mxIsValid?: boolean;
            mxRecord?: string[];
            mxRelay?: string;
            name?: string;
            organization2010?: string;
            srvIsValid?: boolean;
            srvRecord?: string[];
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
            type?: OVH.email.exchange.DomainTypeEnum;
        }
        //email.exchange.DomainTypeEnum
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
        //email.exchange.ExchangeService
        // fullName: email.exchange.ExchangeService.ExchangeService
        export interface ExchangeService {
            complexityEnabled?: boolean;
            displayName?: string;
            domain?: string;
            hostname?: string;
            lastUpdateDate?: string;
            lockoutDuration?: number;
            lockoutObservationWindow?: number;
            lockoutThreshold?: number;
            maxPasswordAge?: number;
            maxReceiveSize?: number;
            maxSendSize?: number;
            minPasswordAge?: number;
            minPasswordLength?: number;
            offer?: OVH.email.exchange.ServiceOfferEnum;
            passwordHistoryCount?: number;
            spamAndVirusConfiguration?: OVH.email.exchange.spamAndVirusConfiguration;
            sslExpirationDate?: string;
            state?: OVH.email.exchange.ServiceStateEnum;
            taskPendingId?: number;
            webUrl?: string;
        }
        //email.exchange.Export
        // fullName: email.exchange.Export.Export
        export interface Export {
            creationDate?: string;
            percentComplete?: number;
            taskPendingId?: number;
        }
        //email.exchange.ExportUrl
        // fullName: email.exchange.ExportUrl.ExportUrl
        export interface ExportUrl {
            expiration?: string;
            url?: string;
        }
        //email.exchange.LanguageEnum
        export type LanguageEnum = "ar" | "bg" | "cz" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "in" | "it" | "ja" | "ko" | "kz" | "lt" | "lv" | "ms" | "nb" | "nl" | "pl" | "pt" | "pt-BR" | "ro" | "rs" | "ru" | "sk" | "sl" | "sv" | "th" | "tr" | "uk" | "vi" | "zh-CN"
        //email.exchange.MailingFilterEnum
        export type MailingFilterEnum = "vaderetro"
        //email.exchange.MailingListDepartRestrictionEnum
        export type MailingListDepartRestrictionEnum = "closed" | "open"
        //email.exchange.MailingListJoinRestrictionEnum
        export type MailingListJoinRestrictionEnum = "approvalRequired" | "closed" | "open"
        //email.exchange.ObjectStateEnum
        export type ObjectStateEnum = "creating" | "deleting" | "internalMigration" | "ok" | "reopening" | "suspended" | "suspending"
        //email.exchange.OutlookUrl
        // fullName: email.exchange.OutlookUrl.OutlookUrl
        export interface OutlookUrl {
            expiration?: string;
            serial?: string;
            url?: string;
        }
        //email.exchange.OutlookVersionEnum
        export type OutlookVersionEnum = "mac_x86_2011" | "mac_x86_2016" | "windows_x64_2013" | "windows_x64_2016" | "windows_x86_2013" | "windows_x86_2016"
        //email.exchange.OutlookVersions
        // fullName: email.exchange.OutlookVersions.OutlookVersions
        export interface OutlookVersions {
            outlookLanguage?: OVH.email.exchange.LanguageEnum;
            outlookVersion?: OVH.email.exchange.OutlookVersionEnum;
            status?: boolean;
        }
        //email.exchange.OvhLicenceEnum
        export type OvhLicenceEnum = "basic" | "enterprise" | "standard"
        //email.exchange.PublicFolderQuota
        // fullName: email.exchange.PublicFolderQuota.PublicFolderQuota
        export interface PublicFolderQuota {
            quotaLimit?: number;
            quotaReserved?: number;
            quotaUsed?: number;
        }
        //email.exchange.PublicFolderRightTypeEnum
        export type PublicFolderRightTypeEnum = "editor" | "none" | "reviewer"
        //email.exchange.PublicFolderTypeEnum
        export type PublicFolderTypeEnum = "calendar" | "contacts" | "plain" | "tasks"
        //email.exchange.ResourceTypeEnum
        export type ResourceTypeEnum = "equipment" | "room"
        //email.exchange.Server
        // fullName: email.exchange.Server.Server
        export interface Server {
            commercialVersion?: OVH.email.exchange.exchangeCommercialVersionEnum;
            currentDiskUsage?: number;
            diskSize?: number;
            individual2010?: boolean;
            ip?: string;
            ipV6?: string;
            isAValid?: boolean;
            isAaaaValid?: boolean;
            isPtrV6Valid?: boolean;
            isPtrValid?: boolean;
            owaMfa?: boolean;
            state?: OVH.email.exchange.ServerStateEnum;
            taskPendingId?: number;
            version?: number;
        }
        //email.exchange.ServerStateEnum
        export type ServerStateEnum = "configurationPending" | "notConfigured" | "ok"
        //email.exchange.ServiceOfferEnum
        export type ServiceOfferEnum = "dedicated" | "dedicatedCluster" | "hosted" | "provider"
        //email.exchange.ServiceStateEnum
        export type ServiceStateEnum = "inMaintenance" | "ok" | "suspended"
        //email.exchange.SharedAccountQuota
        // fullName: email.exchange.SharedAccountQuota.SharedAccountQuota
        export interface SharedAccountQuota {
            quotaLimit?: number;
            quotaReserved?: number;
            quotaUsed?: number;
        }
        //email.exchange.ShowMeetingDetailsEnum
        export type ShowMeetingDetailsEnum = "availabilityOnly" | "limitedDetails" | "reviewer"
        //email.exchange.Task
        // fullName: email.exchange.Task.Task
        export interface Task {
            finishDate?: string;
            function?: OVH.email.exchange.TaskFunctionEnum;
            id?: number;
            status?: OVH.email.exchange.TaskStatusEnum;
            todoDate?: string;
        }
        //email.exchange.TaskFunctionEnum
        export type TaskFunctionEnum = "activateSharepoint" | "addAccount" | "addAccountArchive" | "addActiveSyncMailNotification" | "addAlias" | "addDistributionGroup" | "addDistributionGroupManager" | "addDistributionGroupMember" | "addDistributionGroupSendAs" | "addDistributionGroupSendOnBehalfTo" | "addDomain" | "addDomainDisclaimer" | "addExchangeServiceAuthorizedIp" | "addExportPstRequest" | "addExternalContact" | "addFullAccess" | "addOutlookLicense" | "addPublicFolder" | "addPublicFolderPermission" | "addResourceAccount" | "addResourceDelegate" | "addSendAs" | "addSendOnBehalfTo" | "addSharedAccount" | "addSharedAccountFullAccess" | "addSharedAccountSendAs" | "addSharedAccountSendOnBehalfTo" | "changeHostname" | "changePassword" | "clearDataOnDevice" | "cloneTemplateExchangePrivate" | "configureExchangeCustomer" | "deleteAccount" | "deleteAccountArchive" | "deleteActiveSyncMailNotification" | "deleteAlias" | "deleteDistributionGroup" | "deleteDistributionGroupManager" | "deleteDistributionGroupMember" | "deleteDistributionGroupSendAs" | "deleteDistributionGroupSendOnBehalfTo" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExchangeService" | "deleteExchangeServiceAuthorizedIp" | "deleteExportPstRequest" | "deleteExternalContact" | "deleteFullAccess" | "deleteOutlookLicense" | "deletePublicFolder" | "deletePublicFolderPermission" | "deleteResourceAccount" | "deleteResourceDelegate" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteSharedAccount" | "deleteSharedAccountFullAccess" | "deleteSharedAccountSendAs" | "deleteSharedAccountSendOnBehalfTo" | "destroyPrivateVm" | "diagnoseAccount" | "expandDrive" | "generateOutlookUrl" | "generatePstUrl" | "installExchange" | "installSSL" | "maintenance" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationMailingList" | "migrationResourceAccount" | "migrationService" | "reOpenHostedAccount" | "reOpenOutlookLicense" | "reOpenPrivateAccount" | "reOpenPrivateVm" | "setAccount" | "setAccountArchive" | "setAlias" | "setDistributionGroup" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExchangeAccountProtocol" | "setExchangeServiceDevice" | "setExternalContact" | "setPublicFolder" | "setPublicFolderPermission" | "setResourceAccount" | "setService" | "setSharedAccount" | "suspendAccount" | "suspendExchangeService" | "suspendHostedAccount" | "suspendOutlookLicense" | "suspendPrivateAccount" | "suspendPrivateVm" | "unsuspendAccount" | "unsuspendExchangeService" | "unsuspendHostedAccount" | "updateExchangeServiceDevice" | "upgrade2016"
        //email.exchange.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        //email.exchange.activeSyncNotificationStateEnum
        export type activeSyncNotificationStateEnum = "creating" | "deleting" | "ok"
        //email.exchange.authorizedIpStatusEnum
        export type authorizedIpStatusEnum = "creating" | "deleting" | "ok"
        //email.exchange.disclaimer
        // fullName: email.exchange.disclaimer.disclaimer
        export interface disclaimer {
            content?: string;
            creationDate?: string;
            name?: string;
            outsideOnly?: boolean;
            taskPendingId?: number;
        }
        //email.exchange.exchangeAccountAlias
        // fullName: email.exchange.exchangeAccountAlias.exchangeAccountAlias
        export interface exchangeAccountAlias {
            alias?: string;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeAccountArchive
        // fullName: email.exchange.exchangeAccountArchive.exchangeAccountArchive
        export interface exchangeAccountArchive {
            creationDate?: string;
            currentUsage?: number;
            guid?: string;
            quota?: number;
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        //email.exchange.exchangeAccountDiagnosis
        // fullName: email.exchange.exchangeAccountDiagnosis.exchangeAccountDiagnosis
        export interface exchangeAccountDiagnosis {
            canReceiveEmail?: boolean;
            canSendEmail?: boolean;
            connectiveOWA?: boolean;
            isLocked?: boolean;
            isMxValid?: boolean;
            isSpammer?: boolean;
            isSrvValid?: boolean;
            isSuspended?: boolean;
            lastCheck?: string;
        }
        //email.exchange.exchangeAccountFullAccess
        // fullName: email.exchange.exchangeAccountFullAccess.exchangeAccountFullAccess
        export interface exchangeAccountFullAccess {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeAccountProtocol
        // fullName: email.exchange.exchangeAccountProtocol.exchangeAccountProtocol
        export interface exchangeAccountProtocol {
            IMAP?: boolean;
            POP?: boolean;
            activeSync?: boolean;
            creationDate?: string;
            lastUpdate?: string;
            taskPendingId?: number;
            webMail?: boolean;
        }
        //email.exchange.exchangeAccountSendAs
        // fullName: email.exchange.exchangeAccountSendAs.exchangeAccountSendAs
        export interface exchangeAccountSendAs {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeAccountSendOnBehalfTo
        // fullName: email.exchange.exchangeAccountSendOnBehalfTo.exchangeAccountSendOnBehalfTo
        export interface exchangeAccountSendOnBehalfTo {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeCommercialVersionEnum
        export type exchangeCommercialVersionEnum = "2010" | "2013" | "2016"
        //email.exchange.exchangeDistributionGroupManager
        // fullName: email.exchange.exchangeDistributionGroupManager.exchangeDistributionGroupManager
        export interface exchangeDistributionGroupManager {
            creationDate?: string;
            managerAccountId?: number;
            managerEmailAddress?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeDistributionGroupMember
        // fullName: email.exchange.exchangeDistributionGroupMember.exchangeDistributionGroupMember
        export interface exchangeDistributionGroupMember {
            creationDate?: string;
            memberAccountId?: number;
            memberContactId?: number;
            memberEmailAddress?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeDistributionGroupSendAs
        // fullName: email.exchange.exchangeDistributionGroupSendAs.exchangeDistributionGroupSendAs
        export interface exchangeDistributionGroupSendAs {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeDistributionGroupSendOnBehalfTo
        // fullName: email.exchange.exchangeDistributionGroupSendOnBehalfTo.exchangeDistributionGroupSendOnBehalfTo
        export interface exchangeDistributionGroupSendOnBehalfTo {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeExternalContact
        // fullName: email.exchange.exchangeExternalContact.exchangeExternalContact
        export interface exchangeExternalContact {
            creationDate?: string;
            displayName?: string;
            externalEmailAddress?: string;
            firstName?: string;
            hiddenFromGAL?: boolean;
            id?: number;
            initials?: string;
            lastName?: string;
            organization2010?: string;
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        //email.exchange.exchangeMailingListAlias
        // fullName: email.exchange.exchangeMailingListAlias.exchangeMailingListAlias
        export interface exchangeMailingListAlias {
            alias?: string;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangePublicFolderPermission
        // fullName: email.exchange.exchangePublicFolderPermission.exchangePublicFolderPermission
        export interface exchangePublicFolderPermission {
            accessRights?: OVH.email.exchange.PublicFolderRightTypeEnum;
            allowedAccountId?: number;
            creationDate?: string;
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        //email.exchange.exchangeResourceAccountDelegate
        // fullName: email.exchange.exchangeResourceAccountDelegate.exchangeResourceAccountDelegate
        export interface exchangeResourceAccountDelegate {
            allowedAccountId?: number;
            creationDate?: string;
            delegateEmailAddress?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeServiceActiveSyncNotification
        // fullName: email.exchange.exchangeServiceActiveSyncNotification.exchangeServiceActiveSyncNotification
        export interface exchangeServiceActiveSyncNotification {
            creationDate?: string;
            notifiedAccountId?: number;
            primaryEmailAddress?: string;
            state?: OVH.email.exchange.activeSyncNotificationStateEnum;
        }
        //email.exchange.exchangeServiceAuthorizedIp
        // fullName: email.exchange.exchangeServiceAuthorizedIp.exchangeServiceAuthorizedIp
        export interface exchangeServiceAuthorizedIp {
            creationDate?: string;
            ip?: string;
            status?: OVH.email.exchange.authorizedIpStatusEnum;
        }
        //email.exchange.exchangeServiceDevice
        // fullName: email.exchange.exchangeServiceDevice.exchangeServiceDevice
        export interface exchangeServiceDevice {
            IMEI?: string;
            creationDate?: string;
            deviceId?: string;
            deviceModel?: string;
            deviceState?: OVH.email.exchange.DeviceActiveSyncStateEnum;
            guid?: string;
            identity?: string;
            lastUpdate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeServiceProtocol
        // fullName: email.exchange.exchangeServiceProtocol.exchangeServiceProtocol
        export interface exchangeServiceProtocol {
            IMAP?: boolean;
            POP?: boolean;
            activeSync?: boolean;
            activeSyncPolicy?: OVH.email.exchange.ActiveSyncPolicyEnum;
            creationDate?: string;
            lastUpdate?: string;
            taskPendingId?: number;
            webMail?: boolean;
        }
        //email.exchange.exchangeSharedAccountFullAccess
        // fullName: email.exchange.exchangeSharedAccountFullAccess.exchangeSharedAccountFullAccess
        export interface exchangeSharedAccountFullAccess {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeSharedAccountSendAs
        // fullName: email.exchange.exchangeSharedAccountSendAs.exchangeSharedAccountSendAs
        export interface exchangeSharedAccountSendAs {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.exchangeSharedAccountSendOnBehalfTo
        // fullName: email.exchange.exchangeSharedAccountSendOnBehalfTo.exchangeSharedAccountSendOnBehalfTo
        export interface exchangeSharedAccountSendOnBehalfTo {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.exchange.mailingList
        // fullName: email.exchange.mailingList.mailingList
        export interface mailingList {
            creationDate?: string;
            departRestriction?: OVH.email.exchange.MailingListDepartRestrictionEnum;
            displayName?: string;
            hiddenFromGAL?: boolean;
            joinRestriction?: OVH.email.exchange.MailingListJoinRestrictionEnum;
            lastUpdateDate?: string;
            mailingListAddress?: string;
            maxReceiveSize?: number;
            maxSendSize?: number;
            senderAuthentification?: boolean;
            spamDetected?: boolean;
            spamTicketNumber?: number;
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        //email.exchange.publicFolder
        // fullName: email.exchange.publicFolder.publicFolder
        export interface publicFolder {
            anonymousPermission?: OVH.email.exchange.PublicFolderRightTypeEnum;
            creationDate?: string;
            defaultPermission?: OVH.email.exchange.PublicFolderRightTypeEnum;
            hasSubFolders?: boolean;
            itemCount?: number;
            lastAccessTime?: string;
            lastModificationTime?: string;
            lastUserAccessTime?: string;
            lastUserModificationTime?: string;
            path?: string;
            quota?: number;
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
            totalItemSize?: number;
            type?: OVH.email.exchange.PublicFolderTypeEnum;
        }
        //email.exchange.renewPeriodEnum
        export type renewPeriodEnum = "monthly" | "yearly"
        //email.exchange.resourceAccount
        // fullName: email.exchange.resourceAccount.resourceAccount
        export interface resourceAccount {
            addOrganizerToSubject?: boolean;
            allowConflict?: boolean;
            bookingWindow?: number;
            capacity?: number;
            creationDate?: string;
            deleteComments?: boolean;
            deleteSubject?: boolean;
            displayName?: string;
            location?: string;
            maximumDuration?: number;
            resourceEmailAddress?: string;
            showMeetingDetails?: OVH.email.exchange.ShowMeetingDetailsEnum;
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
            type?: OVH.email.exchange.ResourceTypeEnum;
        }
        //email.exchange.sharedAccount
        // fullName: email.exchange.sharedAccount.sharedAccount
        export interface sharedAccount {
            creationDate?: string;
            currentUsage?: number;
            displayName?: string;
            firstName?: string;
            hiddenFromGAL?: boolean;
            id?: number;
            initials?: string;
            lastLogoffDate?: string;
            lastLogonDate?: string;
            lastName?: string;
            mailingFilter?: OVH.email.exchange.MailingFilterEnum[];
            quota?: number;
            sharedEmailAddress?: string;
            spamDetected?: boolean;
            spamTicketNumber?: number;
            state?: OVH.email.exchange.ObjectStateEnum;
            taskPendingId?: number;
        }
        //email.exchange.spamAndVirusConfiguration
        // fullName: email.exchange.spamAndVirusConfiguration.spamAndVirusConfiguration
        export interface spamAndVirusConfiguration {
            checkDKIM?: boolean;
            checkSPF?: boolean;
            deleteSpam?: boolean;
            deleteVirus?: boolean;
            putInJunk?: boolean;
            tagSpam?: boolean;
            tagVirus?: boolean;
        }
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
// path /email
export interface Email {
    exchange:  {
        // GET /email/exchange
        $get(): Promise<string[]>;
        [keys: string]: {
            service:  {
                // GET /email/exchange/{organizationName}/service
                $get(): Promise<string[]>;
                [keys: string]: {
                    // GET /email/exchange/{organizationName}/service/{exchangeService}
                    $get(): Promise<email.exchange.ExchangeService>;
                    // PUT /email/exchange/{organizationName}/service/{exchangeService}
                    $put(body?: {body: email.exchange.ExchangeService}): Promise<void>;
                    serviceInfos:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/serviceInfos
                        $get(): Promise<services.Service>;
                        // PUT /email/exchange/{organizationName}/service/{exchangeService}/serviceInfos
                        $put(body?: {body: services.Service}): Promise<void>;
                    }
                    updateDeviceList:  {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList
                        $post(): Promise<email.exchange.Task>;
                    }
                    changeHostname:  {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/changeHostname
                        $post(body?: {dcvEmail: string, hostname: string, useDnsAssist: boolean}): Promise<email.exchange.Task>;
                    }
                    device:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/device
                        $get(param?: {identity?: string, deviceState?: email.exchange.DeviceActiveSyncStateEnum, IMEI?: string}): Promise<string[]>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
                            $get(): Promise<email.exchange.exchangeServiceDevice>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
                            $put(body?: {body: email.exchange.exchangeServiceDevice}): Promise<void>;
                            clearDevice:  {
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice
                                $post(): Promise<email.exchange.Task>;
                            }
                        } | any
                    }
                    domain:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/domain
                        $get(param?: {main?: boolean, state?: email.exchange.ObjectStateEnum}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/domain
                        $post(body?: {configureAutodiscover?: boolean, configureMx?: boolean, main?: boolean, mxRelay?: string, name: string, organization2010?: string, type: email.exchange.DomainTypeEnum}): Promise<email.exchange.Task>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $get(): Promise<email.exchange.Domain>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $put(body?: {body: email.exchange.Domain}): Promise<void>;
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}
                            $delete(): Promise<email.exchange.Task>;
                            disclaimer:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                $get(): Promise<email.exchange.disclaimer>;
                                // PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                $put(body?: {body: email.exchange.disclaimer}): Promise<void>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                $post(body?: {content: string, outsideOnly?: boolean}): Promise<email.exchange.Task>;
                                // DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
                                $delete(): Promise<email.exchange.Task>;
                            }
                            disclaimerAttribute:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute
                                $get(): Promise<email.exchange.DisclaimerAttributeEnum[]>;
                            }
                        } | any
                    }
                    protocol:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/protocol
                        $get(): Promise<email.exchange.exchangeServiceProtocol>;
                        // PUT /email/exchange/{organizationName}/service/{exchangeService}/protocol
                        $put(body?: {body: email.exchange.exchangeServiceProtocol}): Promise<void>;
                        activeSyncMailNotification:  {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification
                            $get(): Promise<number[]>;
                            // POST /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification
                            $post(body?: {notifiedAccountId: number}): Promise<email.exchange.Task>;
                            [keys: string]: {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}
                                $get(): Promise<email.exchange.exchangeServiceActiveSyncNotification>;
                                // DELETE /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}
                                $delete(): Promise<email.exchange.Task>;
                            } | any
                        }
                    }
                    publicFolderQuota:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota
                        $get(): Promise<email.exchange.PublicFolderQuota>;
                    }
                    outlookAvailability:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability
                        $get(param?: {outlookVersion?: email.exchange.OutlookVersionEnum, outlookLanguage?: email.exchange.LanguageEnum}): Promise<email.exchange.OutlookVersions[]>;
                    }
                    mailingList:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList
                        $get(param?: {mailingListAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList
                        $post(body?: {departRestriction: email.exchange.MailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction: email.exchange.MailingListJoinRestrictionEnum, mailingListAddress: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean}): Promise<email.exchange.Task>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $get(): Promise<email.exchange.mailingList>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $put(body?: {body: email.exchange.mailingList}): Promise<void>;
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}
                            $delete(): Promise<email.exchange.Task>;
                            alias:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias
                                $get(): Promise<string[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias
                                $post(body?: {alias: string}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}
                                    $get(): Promise<email.exchange.exchangeMailingListAlias>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            member:  {
                                contact:  {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact
                                    $get(): Promise<number[]>;
                                    // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact
                                    $post(body?: {memberAccountId?: number, memberContactId?: number}): Promise<email.exchange.Task>;
                                    [keys: string]: {
                                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}
                                        $get(): Promise<email.exchange.exchangeDistributionGroupMember>;
                                        // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}
                                        $delete(): Promise<email.exchange.Task>;
                                    } | any
                                }
                                account:  {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account
                                    $get(): Promise<number[]>;
                                    // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account
                                    $post(body?: {memberAccountId?: number, memberContactId?: number}): Promise<email.exchange.Task>;
                                    [keys: string]: {
                                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}
                                        $get(): Promise<email.exchange.exchangeDistributionGroupMember>;
                                        // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}
                                        $delete(): Promise<email.exchange.Task>;
                                    } | any
                                }
                            }
                            manager:  {
                                account:  {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account
                                    $get(): Promise<number[]>;
                                    // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account
                                    $post(body?: {managerAccountId: number}): Promise<email.exchange.Task>;
                                    [keys: string]: {
                                        // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}
                                        $get(): Promise<email.exchange.exchangeDistributionGroupManager>;
                                        // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}
                                        $delete(): Promise<email.exchange.Task>;
                                    } | any
                                }
                            }
                            sendAs:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs
                                $post(body?: {allowAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeDistributionGroupSendAs>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            sendOnBehalfTo:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo
                                $post(body?: {allowAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeDistributionGroupSendOnBehalfTo>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                        } | any
                    }
                    server:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/server
                        $get(): Promise<email.exchange.Server>;
                        // PUT /email/exchange/{organizationName}/service/{exchangeService}/server
                        $put(body?: {body: email.exchange.Server}): Promise<void>;
                    }
                    publicFolder:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder
                        $get(param?: {path?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/publicFolder
                        $post(body?: {anonymousPermission?: email.exchange.PublicFolderRightTypeEnum, defaultPermission?: email.exchange.PublicFolderRightTypeEnum, path: string, quota: number, type: email.exchange.PublicFolderTypeEnum}): Promise<email.exchange.Task>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $get(): Promise<email.exchange.publicFolder>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $put(body?: {body: email.exchange.publicFolder}): Promise<void>;
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}
                            $delete(): Promise<email.exchange.Task>;
                            permission:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
                                $post(body?: {accessRights: email.exchange.PublicFolderRightTypeEnum, allowedAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangePublicFolderPermission>;
                                    // PUT /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $put(body?: {body: email.exchange.exchangePublicFolderPermission}): Promise<void>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                        } | any
                    }
                    account:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/account
                        $get(param?: {accountLicense?: email.exchange.OvhLicenceEnum, primaryEmailAddress?: string, id?: number}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/account
                        $post(body?: {company?: string, displayName?: string, domain: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, license: email.exchange.OvhLicenceEnum, litigation?: boolean, litigationPeriod?: number, login: string, mailingFilter?: email.exchange.MailingFilterEnum[], outlookLicense?: boolean, password: string, SAMAccountName?: string, spamAndVirusConfiguration?: email.exchange.spamAndVirusConfiguration}): Promise<email.exchange.Task>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $get(): Promise<email.exchange.Account>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $put(body?: {body: email.exchange.Account}): Promise<void>;
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            exportURL:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL
                                $get(): Promise<email.exchange.ExportUrl>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL
                                $post(): Promise<email.exchange.Task>;
                            }
                            changePassword:  {
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword
                                $post(body?: {password: string}): Promise<email.exchange.Task>;
                            }
                            export:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                $get(): Promise<email.exchange.Export>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                $post(): Promise<email.exchange.Task>;
                                // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export
                                $delete(): Promise<email.exchange.Task>;
                            }
                            fullAccess:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess
                                $post(body?: {allowedAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeAccountFullAccess>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            outlookURL:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL
                                $get(): Promise<email.exchange.OutlookUrl>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL
                                $post(body?: {language: email.exchange.LanguageEnum, version: email.exchange.OutlookVersionEnum}): Promise<email.exchange.Task>;
                            }
                            terminate:  {
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate
                                $post(): Promise<string>;
                            }
                            tasks:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks
                                $get(): Promise<number[]>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}
                                    $get(): Promise<email.exchange.Task>;
                                } | any
                            }
                            alias:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias
                                $get(): Promise<string[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias
                                $post(body?: {alias: string}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}
                                    $get(): Promise<email.exchange.exchangeAccountAlias>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            sendOnBehalfTo:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo
                                $post(body?: {allowAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeAccountSendOnBehalfTo>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            archive:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                $get(): Promise<email.exchange.exchangeAccountArchive>;
                                // PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                $put(body?: {body: email.exchange.exchangeAccountArchive}): Promise<void>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                $post(body?: {quota?: number}): Promise<email.exchange.Task>;
                                // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
                                $delete(): Promise<email.exchange.Task>;
                            }
                            sendAs:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs
                                $post(body?: {allowAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeAccountSendAs>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            diagnostics:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics
                                $get(): Promise<email.exchange.exchangeAccountDiagnosis>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics
                                $post(body?: {password: string}): Promise<email.exchange.Task>;
                            }
                            protocol:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol
                                $get(): Promise<email.exchange.exchangeAccountProtocol>;
                                // PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol
                                $put(body?: {body: email.exchange.exchangeAccountProtocol}): Promise<void>;
                            }
                        } | any
                    }
                    dcvEmails:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/dcvEmails
                        $get(): Promise<string[]>;
                    }
                    resourceAccount:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
                        $get(param?: {resourceEmailAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
                        $post(body?: {addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity: number, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress: string, showMeetingDetails?: email.exchange.ShowMeetingDetailsEnum, type: email.exchange.ResourceTypeEnum}): Promise<email.exchange.Task>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $get(): Promise<email.exchange.resourceAccount>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $put(body?: {body: email.exchange.resourceAccount}): Promise<void>;
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            delegate:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate
                                $post(body?: {allowedAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeResourceAccountDelegate>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                        } | any
                    }
                    task:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/task
                        $get(): Promise<number[]>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/task/{id}
                            $get(): Promise<email.exchange.Task>;
                        } | any
                    }
                    sharedAccount:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
                        $get(param?: {sharedEmailAddress?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
                        $post(body?: {displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, mailingFilter?: email.exchange.MailingFilterEnum[], quota: number, sharedEmailAddress: string}): Promise<email.exchange.Task>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $get(): Promise<email.exchange.sharedAccount>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $put(body?: {body: email.exchange.sharedAccount}): Promise<void>;
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                            sendOnBehalfTo:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo
                                $post(body?: {allowAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeSharedAccountSendOnBehalfTo>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            fullAccess:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess
                                $post(body?: {allowedAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeSharedAccountFullAccess>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            sendAs:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs
                                $get(): Promise<number[]>;
                                // POST /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs
                                $post(body?: {allowAccountId: number}): Promise<email.exchange.Task>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}
                                    $get(): Promise<email.exchange.exchangeSharedAccountSendAs>;
                                    // DELETE /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}
                                    $delete(): Promise<email.exchange.Task>;
                                } | any
                            }
                            tasks:  {
                                // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks
                                $get(): Promise<number[]>;
                                [keys: string]: {
                                    // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}
                                    $get(): Promise<email.exchange.Task>;
                                } | any
                            }
                        } | any
                    }
                    renewSSL:  {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/renewSSL
                        $post(body?: {dcv: string}): Promise<email.exchange.Task>;
                    }
                    updateFlagsOnAllAccounts:  {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts
                        $post(): Promise<void>;
                    }
                    externalContact:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/externalContact
                        $get(param?: {displayName?: string, lastName?: string, id?: number, externalEmailAddress?: string, firstName?: string}): Promise<string[]>;
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/externalContact
                        $post(body?: {displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, organization2010?: string}): Promise<email.exchange.Task>;
                        [keys: string]: {
                            // GET /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                            $get(): Promise<email.exchange.exchangeExternalContact>;
                            // PUT /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                            $put(body?: {body: email.exchange.exchangeExternalContact}): Promise<void>;
                            // DELETE /email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}
                            $delete(): Promise<email.exchange.Task>;
                        } | any
                    }
                    license:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/license
                        $get(param?: {toDate?: string, license?: email.exchange.OvhLicenceEnum, fromDate?: string}): Promise<email.exchange.DailyLicense[]>;
                    }
                    activateSharepoint:  {
                        // POST /email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint
                        $post(body?: {primaryEmailAddress: string, subDomain: string}): Promise<email.exchange.Task>;
                    }
                    sharedAccountQuota:  {
                        // GET /email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota
                        $get(): Promise<email.exchange.SharedAccountQuota>;
                    }
                } | any
            }
        } | any
    }
}
// Api
type PathsEmailExchangeGET = '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos' |
  '/email/exchange/{organizationName}/service/{exchangeService}/device' |
  '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain' |
  '/email/exchange/{organizationName}/service/{exchangeService}/protocol' |
  '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota' |
  '/email/exchange/{organizationName}/service/{exchangeService}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/server' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account' |
  '/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/task/{id}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/task' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks' |
  '/email/exchange/{organizationName}/service/{exchangeService}/externalContact' |
  '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/license' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota' |
  '/email/exchange/{organizationName}/service' |
  '/email/exchange';

type PathsEmailExchangePUT = '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos' |
  '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/protocol' |
  '/email/exchange/{organizationName}/service/{exchangeService}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/server' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}';

type PathsEmailExchangePOST = '/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList' |
  '/email/exchange/{organizationName}/service/{exchangeService}/changeHostname' |
  '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain' |
  '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs' |
  '/email/exchange/{organizationName}/service/{exchangeService}/renewSSL' |
  '/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts' |
  '/email/exchange/{organizationName}/service/{exchangeService}/externalContact' |
  '/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint';

type PathsEmailExchangeDELETE = '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' |
  '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}' |
  '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}';

export class ApiEmailExchange extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the MSSERVICES service
   * List available services
   */
  public get(path: '/email/exchange'): Promise<string[]>;
  /**
   * Operations about the EXCHANGE service
   * List available services
   */
  public get(path: '/email/exchange/{organizationName}/service', params: {organizationName: string}): Promise<string[]>;
  /**
   * Exchange service
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}', params: {organizationName: string, exchangeService: string}): Promise<email.exchange.ExchangeService>;
  /**
   * List the email.exchange.Account objects
   * Accounts associated to this exchange service
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account', params: {organizationName: string, exchangeService: string, accountLicense?: OVH.email.exchange.OvhLicenceEnum, id?: number, primaryEmailAddress?: string}): Promise<string[]>;
  /**
   * Exchange mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.Account>;
  /**
   * List the email.exchange.exchangeAccountAlias objects
   * Aliases associated to this mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<string[]>;
  /**
   * Aliases on this mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, alias: string}): Promise<email.exchange.exchangeAccountAlias>;
  /**
   * Exchange Account Archive
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.exchangeAccountArchive>;
  /**
   * Exchange Account Diagnosis
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.exchangeAccountDiagnosis>;
  /**
   * Export PST file request
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.Export>;
  /**
   * Export PST file url
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.ExportUrl>;
  /**
   * List the email.exchange.exchangeAccountFullAccess objects
   * Full access granted users for this mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<number[]>;
  /**
   * Users having full access on this mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeAccountFullAccess>;
  /**
   * Outlook url
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.OutlookUrl>;
  /**
   * Get protocol status on that mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.exchangeAccountProtocol>;
  /**
   * List the email.exchange.exchangeAccountSendAs objects
   * Send as granted users for this mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<number[]>;
  /**
   * Users authorized to send mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeAccountSendAs>;
  /**
   * List the email.exchange.exchangeAccountSendOnBehalfTo objects
   * SendOnBehalfTo granted users for this mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeAccountSendOnBehalfTo>;
  /**
   * List the email.exchange.Task objects
   * Pending task for this mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<number[]>;
  /**
   * Exchange task details
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, id: string}): Promise<email.exchange.Task>;
  /**
   * dcvEmails operations
   * Get DCV emails if your ssl will expire in next 30 days
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails', params: {organizationName: string, exchangeService: string}): Promise<string[]>;
  /**
   * List the email.exchange.exchangeServiceDevice objects
   * List of your ActiveSync devices registered on this Exchange service
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/device', params: {organizationName: string, exchangeService: string, deviceState?: OVH.email.exchange.DeviceActiveSyncStateEnum, identity?: string, IMEI?: string}): Promise<string[]>;
  /**
   * Get the list of your ActiveSync devices registered on this Exchange service
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}', params: {organizationName: string, exchangeService: string, identity: string}): Promise<email.exchange.exchangeServiceDevice>;
  /**
   * List the email.exchange.Domain objects
   * Domains associated to this service
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain', params: {organizationName: string, exchangeService: string, main?: boolean, state?: OVH.email.exchange.ObjectStateEnum}): Promise<string[]>;
  /**
   * Exchange domain
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', params: {organizationName: string, exchangeService: string, domainName: string}): Promise<email.exchange.Domain>;
  /**
   * Exchange organization disclaimer
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', params: {organizationName: string, exchangeService: string, domainName: string}): Promise<email.exchange.disclaimer>;
  /**
   * disclaimerAttribute operations
   * Get diclaimer attributes to substitute with Active Directory properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute', params: {organizationName: string, exchangeService: string, domainName: string}): Promise<email.exchange.DisclaimerAttributeEnum[]>;
  /**
   * List the email.exchange.exchangeExternalContact objects
   * External contacts for this service
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact', params: {organizationName: string, exchangeService: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}): Promise<string[]>;
  /**
   * External contact for this exchange service
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', params: {organizationName: string, exchangeService: string, externalEmailAddress: string}): Promise<email.exchange.exchangeExternalContact>;
  /**
   * license operations
   * Get active licenses for specific period of time
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/license', params: {organizationName: string, exchangeService: string, fromDate?: string, license?: OVH.email.exchange.OvhLicenceEnum, toDate?: string}): Promise<email.exchange.DailyLicense[]>;
  /**
   * List the email.exchange.mailingList objects
   * Mailing list for this service
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList', params: {organizationName: string, exchangeService: string, mailingListAddress?: string}): Promise<string[]>;
  /**
   * Mailing list
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', params: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<email.exchange.mailingList>;
  /**
   * List the email.exchange.exchangeMailingListAlias objects
   * Aliases associated to this mailingList
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias', params: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<string[]>;
  /**
   * Get aliases on this mailingList
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, alias: string}): Promise<email.exchange.exchangeMailingListAlias>;
  /**
   * List the email.exchange.exchangeDistributionGroupManager objects
   * Mailing list account manager
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account', params: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<number[]>;
  /**
   * Mailing list managers
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, managerAccountId: string}): Promise<email.exchange.exchangeDistributionGroupManager>;
  /**
   * List the email.exchange.exchangeDistributionGroupMember objects
   * Mailing list account member
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account', params: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<number[]>;
  /**
   * Mailing list members
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, memberAccountId: string}): Promise<email.exchange.exchangeDistributionGroupMember>;
  /**
   * List the email.exchange.exchangeDistributionGroupMember objects
   * Mailing list contact member
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact', params: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<number[]>;
  /**
   * Mailing list members
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, memberContactId: string}): Promise<email.exchange.exchangeDistributionGroupMember>;
  /**
   * List the email.exchange.exchangeDistributionGroupSendAs objects
   * sendAs
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs', params: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeDistributionGroupSendAs>;
  /**
   * List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects
   * sendOnBehalfTo
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo', params: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailing list
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeDistributionGroupSendOnBehalfTo>;
  /**
   * outlookAvailability operations
   * Show available outlooks
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability', params: {organizationName: string, exchangeService: string, outlookLanguage?: OVH.email.exchange.LanguageEnum, outlookVersion?: OVH.email.exchange.OutlookVersionEnum}): Promise<email.exchange.OutlookVersions[]>;
  /**
   * Protocol access policy for this Exchange service
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol', params: {organizationName: string, exchangeService: string}): Promise<email.exchange.exchangeServiceProtocol>;
  /**
   * List the email.exchange.exchangeServiceActiveSyncNotification objects
   * Exchange account id subscribed to ActiveSync quarantine notifications
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification', params: {organizationName: string, exchangeService: string}): Promise<number[]>;
  /**
   * Get email addresses subscribed to ActiveSync quarantine notifications
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}', params: {organizationName: string, exchangeService: string, notifiedAccountId: string}): Promise<email.exchange.exchangeServiceActiveSyncNotification>;
  /**
   * List the email.exchange.publicFolder objects
   * Public folders associated to this service
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder', params: {organizationName: string, exchangeService: string, path?: string}): Promise<string[]>;
  /**
   * Exchange organization public folder
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', params: {organizationName: string, exchangeService: string, path: string}): Promise<email.exchange.publicFolder>;
  /**
   * List the email.exchange.exchangePublicFolderPermission objects
   * Public folder permission
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission', params: {organizationName: string, exchangeService: string, path: string}): Promise<number[]>;
  /**
   * Exchange organization public folder permission
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', params: {organizationName: string, exchangeService: string, path: string, allowedAccountId: string}): Promise<email.exchange.exchangePublicFolderPermission>;
  /**
   * publicFolderQuota operations
   * Get public folder quota usage in total available space
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota', params: {organizationName: string, exchangeService: string}): Promise<email.exchange.PublicFolderQuota>;
  /**
   * List the email.exchange.resourceAccount objects
   * Resource account associated to this service
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount', params: {organizationName: string, exchangeService: string, resourceEmailAddress?: string}): Promise<string[]>;
  /**
   * Exchange resource account
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', params: {organizationName: string, exchangeService: string, resourceEmailAddress: string}): Promise<email.exchange.resourceAccount>;
  /**
   * List the email.exchange.exchangeResourceAccountDelegate objects
   * Resource account manager
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate', params: {organizationName: string, exchangeService: string, resourceEmailAddress: string}): Promise<number[]>;
  /**
   * Resource accounts delegates
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}', params: {organizationName: string, exchangeService: string, resourceEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeResourceAccountDelegate>;
  /**
   * Exchange server
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/server', params: {organizationName: string, exchangeService: string}): Promise<email.exchange.Server>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos', params: {organizationName: string, exchangeService: string}): Promise<services.Service>;
  /**
   * List the email.exchange.sharedAccount objects
   * Shared accounts associated to this exchange service
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount', params: {organizationName: string, exchangeService: string, sharedEmailAddress?: string}): Promise<string[]>;
  /**
   * Exchange shared mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<email.exchange.sharedAccount>;
  /**
   * List the email.exchange.exchangeSharedAccountFullAccess objects
   * Full access granted users for this shared mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<number[]>;
  /**
   * Users having full access on this shared mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeSharedAccountFullAccess>;
  /**
   * List the email.exchange.exchangeSharedAccountSendAs objects
   * Send as granted users for this shared mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<number[]>;
  /**
   * Users authorized to send mails from this shared mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeSharedAccountSendAs>;
  /**
   * List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects
   * SendOnBehalfTo granted users for this shared mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this shared mailbox
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.exchangeSharedAccountSendOnBehalfTo>;
  /**
   * List the email.exchange.Task objects
   * Pending task for this mailbox
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<number[]>;
  /**
   * Exchange task details
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, id: string}): Promise<email.exchange.Task>;
  /**
   * sharedAccountQuota operations
   * Get shared account quota usage in total available space
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota', params: {organizationName: string, exchangeService: string}): Promise<email.exchange.SharedAccountQuota>;
  /**
   * List the email.exchange.Task objects
   * Pending actions
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/task', params: {organizationName: string, exchangeService: string}): Promise<number[]>;
  /**
   * Exchange task details
   * Get this object properties
   */
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/task/{id}', params: {organizationName: string, exchangeService: string, id: string}): Promise<email.exchange.Task>;
  public get(path: PathsEmailExchangeGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Exchange service
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}', params: {organizationName: string, exchangeService: string, complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: OVH.email.exchange.ServiceOfferEnum, passwordHistoryCount?: number, spamAndVirusConfiguration?: OVH.email.exchange.spamAndVirusConfiguration, sslExpirationDate?: string, state?: OVH.email.exchange.ServiceStateEnum, taskPendingId?: number, webUrl?: string}): Promise<void>;
  /**
   * Exchange mailbox
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, SAMAccountName?: string, accountLicense?: OVH.email.exchange.OvhLicenceEnum, company?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, deleteOutlookAtExpiration?: boolean, displayName?: string, domain?: string, exchangeGuid?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, guid?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, litigation?: boolean, litigationPeriod?: number, login?: string, mailingFilter?: OVH.email.exchange.MailingFilterEnum[], outlookLicense?: boolean, owaLimited?: boolean, passwordLastUpdate?: string, quota?: number, renewOutlookPeriod?: OVH.email.exchange.renewPeriodEnum, renewPeriod?: OVH.email.exchange.renewPeriodEnum, spamAndVirusConfiguration?: OVH.email.exchange.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Exchange Account Archive
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, creationDate?: string, currentUsage?: number, guid?: string, quota?: number, state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Get protocol status on that mailbox
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, IMAP?: boolean, POP?: boolean, activeSync?: boolean, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean}): Promise<void>;
  /**
   * Get the list of your ActiveSync devices registered on this Exchange service
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}', params: {organizationName: string, exchangeService: string, identity: string, IMEI?: string, creationDate?: string, deviceId?: string, deviceModel?: string, deviceState?: OVH.email.exchange.DeviceActiveSyncStateEnum, guid?: string, lastUpdate?: string, taskPendingId?: number}): Promise<void>;
  /**
   * Exchange domain
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', params: {organizationName: string, exchangeService: string, domainName: string, cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, main?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, organization2010?: string, srvIsValid?: boolean, srvRecord?: string[], state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number, type?: OVH.email.exchange.DomainTypeEnum}): Promise<void>;
  /**
   * Exchange organization disclaimer
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', params: {organizationName: string, exchangeService: string, domainName: string, content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number}): Promise<void>;
  /**
   * External contact for this exchange service
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', params: {organizationName: string, exchangeService: string, externalEmailAddress: string, creationDate?: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, organization2010?: string, state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Mailing list
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, creationDate?: string, departRestriction?: OVH.email.exchange.MailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction?: OVH.email.exchange.MailingListJoinRestrictionEnum, lastUpdateDate?: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean, spamDetected?: boolean, spamTicketNumber?: number, state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Protocol access policy for this Exchange service
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol', params: {organizationName: string, exchangeService: string, IMAP?: boolean, POP?: boolean, activeSync?: boolean, activeSyncPolicy?: OVH.email.exchange.ActiveSyncPolicyEnum, creationDate?: string, lastUpdate?: string, taskPendingId?: number, webMail?: boolean}): Promise<void>;
  /**
   * Exchange organization public folder
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', params: {organizationName: string, exchangeService: string, path: string, anonymousPermission?: OVH.email.exchange.PublicFolderRightTypeEnum, creationDate?: string, defaultPermission?: OVH.email.exchange.PublicFolderRightTypeEnum, hasSubFolders?: boolean, itemCount?: number, lastAccessTime?: string, lastModificationTime?: string, lastUserAccessTime?: string, lastUserModificationTime?: string, quota?: number, state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number, totalItemSize?: number, type?: OVH.email.exchange.PublicFolderTypeEnum}): Promise<void>;
  /**
   * Exchange organization public folder permission
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', params: {organizationName: string, exchangeService: string, path: string, allowedAccountId: string, accessRights?: OVH.email.exchange.PublicFolderRightTypeEnum, creationDate?: string, state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Exchange resource account
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', params: {organizationName: string, exchangeService: string, resourceEmailAddress: string, addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity?: number, creationDate?: string, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, showMeetingDetails?: OVH.email.exchange.ShowMeetingDetailsEnum, state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number, type?: OVH.email.exchange.ResourceTypeEnum}): Promise<void>;
  /**
   * Exchange server
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/server', params: {organizationName: string, exchangeService: string, commercialVersion?: OVH.email.exchange.exchangeCommercialVersionEnum, currentDiskUsage?: number, diskSize?: number, individual2010?: boolean, ip?: string, ipV6?: string, isAValid?: boolean, isAaaaValid?: boolean, isPtrV6Valid?: boolean, isPtrValid?: boolean, owaMfa?: boolean, state?: OVH.email.exchange.ServerStateEnum, taskPendingId?: number, version?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos', params: {organizationName: string, exchangeService: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Exchange shared mailbox
   * Alter this object properties
   */
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, creationDate?: string, currentUsage?: number, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, mailingFilter?: OVH.email.exchange.MailingFilterEnum[], quota?: number, spamDetected?: boolean, spamTicketNumber?: number, state?: OVH.email.exchange.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  public put(path: PathsEmailExchangePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the email.exchange.Account objects
   * Create new mailbox in exchange server
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account', params: {organizationName: string, exchangeService: string, company?: string, displayName?: string, domain: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, license: OVH.email.exchange.OvhLicenceEnum, litigation?: boolean, litigationPeriod?: number, login: string, mailingFilter?: OVH.email.exchange.MailingFilterEnum[], outlookLicense?: boolean, password: string, SAMAccountName?: string, spamAndVirusConfiguration?: OVH.email.exchange.spamAndVirusConfiguration}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeAccountAlias objects
   * Create new alias
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, alias: string}): Promise<email.exchange.Task>;
  /**
   * Exchange Account Archive
   * Create new archive mailbox
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, quota?: number}): Promise<email.exchange.Task>;
  /**
   * changePassword operations
   * Change mailbox password
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, password: string}): Promise<email.exchange.Task>;
  /**
   * Exchange Account Diagnosis
   * Create new diagnosis request
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, password: string}): Promise<email.exchange.Task>;
  /**
   * Export PST file request
   * Request PST file for the account
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * Export PST file url
   * Generate temporary url to PST file
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeAccountFullAccess objects
   * Allow full access to a user
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: number}): Promise<email.exchange.Task>;
  /**
   * Outlook url
   * Generate outlook url
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, language: OVH.email.exchange.LanguageEnum, version: OVH.email.exchange.OutlookVersionEnum}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeAccountSendAs objects
   * Allow another user to send mails from this mailbox
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowAccountId: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeAccountSendOnBehalfTo objects
   * Allow another user to Send On Behalf To mails from this mailbox
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowAccountId: number}): Promise<email.exchange.Task>;
  /**
   * terminate operations
   * Terminate account at expiration date
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<string>;
  /**
   * activateSharepoint operations
   * Activate Sharepoint infra connected to this exchange service
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, subDomain: string}): Promise<email.exchange.Task>;
  /**
   * changeHostname operations
   * Setting SSL hostname for Exchange private offer
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/changeHostname', params: {organizationName: string, exchangeService: string, dcvEmail: string, hostname: string, useDnsAssist: boolean}): Promise<email.exchange.Task>;
  /**
   * clearDevice operations
   * Executes a factory reset on the device. THIS OPERATION CANNOT BE REVERSED, ALL DATA ON THE DEVICE WILL BE LOST.
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice', params: {organizationName: string, exchangeService: string, identity: string}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.Domain objects
   * Create new domain in exchange services
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain', params: {organizationName: string, exchangeService: string, configureAutodiscover?: boolean, configureMx?: boolean, main?: boolean, mxRelay?: string, name: string, organization2010?: string, type: OVH.email.exchange.DomainTypeEnum}): Promise<email.exchange.Task>;
  /**
   * Exchange organization disclaimer
   * Create organization disclaimer of each email
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', params: {organizationName: string, exchangeService: string, domainName: string, content: string, outsideOnly?: boolean}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeExternalContact objects
   * create new external contact
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact', params: {organizationName: string, exchangeService: string, displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, organization2010?: string}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.mailingList objects
   * Add mailing list
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList', params: {organizationName: string, exchangeService: string, departRestriction: OVH.email.exchange.MailingListDepartRestrictionEnum, displayName?: string, hiddenFromGAL?: boolean, joinRestriction: OVH.email.exchange.MailingListJoinRestrictionEnum, mailingListAddress: string, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeMailingListAlias objects
   * Create new alias
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias', params: {organizationName: string, exchangeService: string, mailingListAddress: string, alias: string}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupManager objects
   * Add new mailing list manager
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account', params: {organizationName: string, exchangeService: string, mailingListAddress: string, managerAccountId: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupMember objects
   * Add new mailing list member
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account', params: {organizationName: string, exchangeService: string, mailingListAddress: string, memberAccountId?: number, memberContactId?: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupMember objects
   * Add new mailing list member
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact', params: {organizationName: string, exchangeService: string, mailingListAddress: string, memberAccountId?: number, memberContactId?: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupSendAs objects
   * Allow another user to Send aso mails from this mailing list
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs', params: {organizationName: string, exchangeService: string, mailingListAddress: string, allowAccountId: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects
   * Allow another user to Send aso mails from this mailing list
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo', params: {organizationName: string, exchangeService: string, mailingListAddress: string, allowAccountId: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeServiceActiveSyncNotification objects
   * Subscribe new address to ActiveSync quarantine notifications
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification', params: {organizationName: string, exchangeService: string, notifiedAccountId: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.publicFolder objects
   * Create organization public folder
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder', params: {organizationName: string, exchangeService: string, anonymousPermission?: OVH.email.exchange.PublicFolderRightTypeEnum, defaultPermission?: OVH.email.exchange.PublicFolderRightTypeEnum, path: string, quota: number, type: OVH.email.exchange.PublicFolderTypeEnum}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangePublicFolderPermission objects
   * Create public folder permission
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission', params: {organizationName: string, exchangeService: string, path: string, accessRights: OVH.email.exchange.PublicFolderRightTypeEnum, allowedAccountId: number}): Promise<email.exchange.Task>;
  /**
   * renewSSL operations
   * Renew SSL if it will expire in next 30 days
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/renewSSL', params: {organizationName: string, exchangeService: string, dcv: string}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.resourceAccount objects
   * create new resource account in exchange server
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount', params: {organizationName: string, exchangeService: string, addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, capacity: number, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, resourceEmailAddress: string, showMeetingDetails?: OVH.email.exchange.ShowMeetingDetailsEnum, type: OVH.email.exchange.ResourceTypeEnum}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeResourceAccountDelegate objects
   * add new resource account delegate in exchange server
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate', params: {organizationName: string, exchangeService: string, resourceEmailAddress: string, allowedAccountId: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.sharedAccount objects
   * Create new shared mailbox in exchange server
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount', params: {organizationName: string, exchangeService: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, mailingFilter?: OVH.email.exchange.MailingFilterEnum[], quota: number, sharedEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeSharedAccountFullAccess objects
   * Allow full access to a user
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeSharedAccountSendAs objects
   * Allow another user to send mails from this shared mailbox
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowAccountId: number}): Promise<email.exchange.Task>;
  /**
   * List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects
   * Allow another user to Send On Behalf To mails from this shared mailbox
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowAccountId: number}): Promise<email.exchange.Task>;
  /**
   * updateDeviceList operations
   * Update device list
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList', params: {organizationName: string, exchangeService: string}): Promise<email.exchange.Task>;
  /**
   * updateFlagsOnAllAccounts operations
   * Update spam and virus flags on all active accounts
   */
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts', params: {organizationName: string, exchangeService: string}): Promise<void>;
  public post(path: PathsEmailExchangePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Exchange mailbox
   * Delete existing mailbox in exchange server
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * Aliases on this mailbox
   * Delete existing alias
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, alias: string}): Promise<email.exchange.Task>;
  /**
   * Exchange Account Archive
   * Delete existing archive mailbox
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * Export PST file request
   * Remove request of PST file
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * Users having full access on this mailbox
   * Revoke full access
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Users authorized to send mails from this mailbox
   * Delete allowed user for sendAs
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Delete allowed user for SendOnBehalfTo
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}', params: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Exchange domain
   * Delete existing domain in exchange services
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', params: {organizationName: string, exchangeService: string, domainName: string}): Promise<email.exchange.Task>;
  /**
   * Exchange organization disclaimer
   * Delete existing organization disclaimer
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', params: {organizationName: string, exchangeService: string, domainName: string}): Promise<email.exchange.Task>;
  /**
   * External contact for this exchange service
   * delete external contact
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', params: {organizationName: string, exchangeService: string, externalEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * Mailing list
   * Delete mailing list
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', params: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<email.exchange.Task>;
  /**
   * Get aliases on this mailingList
   * Delete existing alias
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, alias: string}): Promise<email.exchange.Task>;
  /**
   * Mailing list managers
   * Delete mailing list manager
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, managerAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Mailing list members
   * Delete mailing list member
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, memberAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Mailing list members
   * Delete mailing list member
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, memberContactId: string}): Promise<email.exchange.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Delete allowed user for SendAs
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailing list
   * Delete allowed user for SendOnBehalfTo
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}', params: {organizationName: string, exchangeService: string, mailingListAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Get email addresses subscribed to ActiveSync quarantine notifications
   * Unubscribe address from ActiveSync quarantine notifications
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}', params: {organizationName: string, exchangeService: string, notifiedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Exchange organization public folder
   * Delete existing organization public folder
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', params: {organizationName: string, exchangeService: string, path: string}): Promise<email.exchange.Task>;
  /**
   * Exchange organization public folder permission
   * Delete existing permission from public folder
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', params: {organizationName: string, exchangeService: string, path: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Exchange resource account
   * delete existing resource account in exchange server
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', params: {organizationName: string, exchangeService: string, resourceEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * Resource accounts delegates
   * delete existing resource account delegate in exchange server
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}', params: {organizationName: string, exchangeService: string, resourceEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Exchange shared mailbox
   * Delete existing shared mailbox in exchange server
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<email.exchange.Task>;
  /**
   * Users having full access on this shared mailbox
   * Revoke full access
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Users authorized to send mails from this shared mailbox
   * Delete allowed user for sendAs
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this shared mailbox
   * Delete allowed user for SendOnBehalfTo
   */
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}', params: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: string}): Promise<email.exchange.Task>;
  public delete(path: PathsEmailExchangeDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
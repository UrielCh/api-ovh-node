import { ApiCommon } from '@ovh-api/common';
/**
 * Exchange mailbox
 */
export interface EmailExchangeAccount {
  /**
   * SAM account name
   *
   */
  SAMAccountName?: string;
  /**
   * Exchange account type
   *
   */
  accountLicense?: EmailExchangeOvhLicenceEnum;
  /**
   * Company name
   *
   */
  company?: string;
  /**
   * Indicates if the account is configured
   *
   */
  configured?: boolean;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Mailbox usage
   *
   */
  currentUsage?: Number;
  /**
   * delete at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * delete outlook at expiration
   *
   */
  deleteOutlookAtExpiration?: boolean;
  /**
   * Account display name
   *
   */
  displayName?: string;
  /**
   * Email domain
   *
   */
  domain?: string;
  /**
   * exchangeGuid for manual configuration
   *
   */
  exchangeGuid?: string;
  /**
   * expiration date
   *
   */
  expirationDate?: string;
  /**
   * expiration date
   *
   */
  expirationOutlookDate?: string;
  /**
   * Account first name
   *
   */
  firstName?: string;
  /**
   * GUID for user in active directory
   *
   */
  guid?: string;
  /**
   * Hide account in Global Address List
   *
   */
  hiddenFromGAL?: boolean;
  /**
   * Account id
   *
   */
  id?: Number;
  /**
   * Account initials
   *
   */
  initial?: string;
  /**
   * Last logoff
   *
   */
  lastLogoffDate?: string;
  /**
   * Last logon
   *
   */
  lastLogonDate?: string;
  /**
   * Account last name
   *
   */
  lastName?: string;
  /**
   * Last update
   *
   */
  lastUpdateDate?: string;
  /**
   * Litigation hold feature enabled on this mailbox
   *
   */
  litigation?: boolean;
  /**
   * Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox.
   *
   */
  litigationPeriod?: Number;
  /**
   * Account login
   *
   */
  login?: string;
  /**
   * Enable or disable anti-virus and anti-spam
   *
   */
  mailingFilter?: EmailExchangeMailingFilterEnum[];
  /**
   * Outlook licence
   *
   */
  outlookLicense?: boolean;
  /**
   * OWA policy restriction is applied
   *
   */
  owaLimited?: boolean;
  /**
   * Time of account's password last update
   *
   */
  passwordLastUpdate?: string;
  /**
   * Default email for this mailbox
   *
   */
  primaryEmailAddress?: string;
  /**
   * Account maximum size
   *
   */
  quota?: Number;
  /**
   * change the renew period for outlook
   *
   */
  renewOutlookPeriod?: EmailExchangeRenewPeriodEnum;
  /**
   * change the renew period
   *
   */
  renewPeriod?: EmailExchangeRenewPeriodEnum;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: EmailExchangeSpamAndVirusConfiguration;
  /**
   * Account was sending spam
   *
   */
  spamDetected?: boolean;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: Number;
  /**
   * Account state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Pending task for this account
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange account license
 */
export interface EmailExchangeAccountLicense {
  /**
   */
  license?: EmailExchangeOvhLicenceEnum;
  /**
   */
  licenseQuantity?: Number;
}
/**
 * Activesync action
 */
export type EmailExchangeActiveSyncPolicyEnum = 'allow' | 'block' | 'quarantine';
/**
 * Exchange account license per day
 */
export interface EmailExchangeDailyLicense {
  /**
   */
  accountLicense?: EmailExchangeAccountLicense[];
  /**
   */
  date?: string;
  /**
   */
  outlookQuantity?: Number;
}
/**
 * Device ActiveSync state
 */
export type EmailExchangeDeviceActiveSyncStateEnum = 'allowed' | 'blocked' | 'deviceDiscovery' | 'quarantined';
/**
 * Disclaimer attributes list
 */
export type EmailExchangeDisclaimerAttributeEnum = 'City' | 'Company' | 'Country' | 'Department' | 'DisplayName' | 'Email' | 'FaxNumber' | 'FirstName' | 'HomePhoneNumber' | 'Initials' | 'LastName' | 'Manager' | 'MobileNumber' | 'Notes' | 'Office' | 'OtherFaxNumber' | 'OtherHomePhoneNumber' | 'OtherPhoneNumber' | 'PagerNumber' | 'PhoneNumber' | 'State' | 'Street' | 'Title' | 'UserLogonName' | 'ZipCode';
/**
 * Exchange domain
 */
export interface EmailExchangeDomain {
  /**
   * Cname that will be checked to prove the domain ownership
   *
   */
  cnameToCheck?: string;
  /**
   * List of aliases for this domain
   *
   */
  domainAliases?: string[];
  /**
   * Domain validation status
   *
   */
  domainValidated?: boolean;
  /**
   * Indicate if this domain is an alias for another domain
   *
   */
  isAliasDomain?: boolean;
  /**
   * If true this is an organization (Exchange 2010 only)
   *
   */
  main?: boolean;
  /**
   * If true your dns mx configuration is valid
   *
   */
  mxIsValid?: boolean;
  /**
   * Domain MX record configured in DNS
   *
   */
  mxRecord?: string[];
  /**
   * If specified, emails to not existing address will be redirected to that domain
   *
   */
  mxRelay?: string;
  /**
   * Domain name
   *
   */
  name?: string;
  /**
   * If specified, indicates to which organization this domain belongs (Exchange 2010 only)
   *
   */
  organization2010?: string;
  /**
   * If true your dns srv record is valid
   *
   */
  srvIsValid?: boolean;
  /**
   * Domain SRV record configured in DNS
   *
   */
  srvRecord?: string[];
  /**
   * Domain state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Pending taks id
   *
   */
  taskPendingId?: Number;
  /**
   * Domain type
   *
   */
  type?: EmailExchangeDomainTypeEnum;
}
/**
 * Domain type
 */
export type EmailExchangeDomainTypeEnum = 'authoritative' | 'nonAuthoritative';
/**
 * Exchange service
 */
export interface EmailExchangeExchangeService {
  /**
   * enable policy for strong and secure passwords
   *
   */
  complexityEnabled?: boolean;
  /**
   * service displayName
   *
   */
  displayName?: string;
  /**
   */
  domain?: string;
  /**
   */
  hostname?: string;
  /**
   * Update date
   *
   */
  lastUpdateDate?: string;
  /**
   * number of minutes account will remain locked if it occurs
   *
   */
  lockoutDuration?: Number;
  /**
   * number of minutes that must elapse after a failed logon to reset lockout trigger
   *
   */
  lockoutObservationWindow?: Number;
  /**
   * number of attempts before account to be locked
   *
   */
  lockoutThreshold?: Number;
  /**
   * maximum number of days that account's password is valid before expiration
   *
   */
  maxPasswordAge?: Number;
  /**
   * Maximum message size that You can receive in MB
   *
   */
  maxReceiveSize?: Number;
  /**
   * Maximum message size that You can send in MB
   *
   */
  maxSendSize?: Number;
  /**
   * minimum number of days before able to change account's password
   *
   */
  minPasswordAge?: Number;
  /**
   * minimum number of characters password must contain
   *
   */
  minPasswordLength?: Number;
  /**
   */
  offer?: EmailExchangeServiceOfferEnum;
  /**
   * number of historical password that cannot be reused
   *
   */
  passwordHistoryCount?: Number;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: EmailExchangeSpamAndVirusConfiguration;
  /**
   */
  sslExpirationDate?: string;
  /**
   */
  state?: EmailExchangeServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * URL for web interface
   *
   */
  webUrl?: string;
}
/**
 * Export PST file request
 */
export interface EmailExchangeExport {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Percentage of export PST request completion
   *
   */
  percentComplete?: Number;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Export PST file url
 */
export interface EmailExchangeExportUrl {
  /**
   * Url expiration date
   *
   */
  expiration?: string;
  /**
   * Export url
   *
   */
  url?: string;
}
/**
 * Outlook language
 */
export type EmailExchangeLanguageEnum = 'ar' | 'bg' | 'cz' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'fi' | 'fr' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'in' | 'it' | 'ja' | 'ko' | 'kz' | 'lt' | 'lv' | 'ms' | 'nb' | 'nl' | 'pl' | 'pt' | 'pt-BR' | 'ro' | 'rs' | 'ru' | 'sk' | 'sl' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh-CN';
/**
 * Mailing filter options availlable
 */
export type EmailExchangeMailingFilterEnum = 'vaderetro';
/**
 * Depart distribution group restriction status
 */
export type EmailExchangeMailingListDepartRestrictionEnum = 'closed' | 'open';
/**
 * Join distribution group restriction status
 */
export type EmailExchangeMailingListJoinRestrictionEnum = 'approvalRequired' | 'closed' | 'open';
/**
 * Current object state
 */
export type EmailExchangeObjectStateEnum = 'creating' | 'deleting' | 'internalMigration' | 'ok' | 'reopening' | 'suspended' | 'suspending';
/**
 * Outlook url
 */
export interface EmailExchangeOutlookUrl {
  /**
   * Url expiration date
   *
   */
  expiration?: string;
  /**
   * Serial number
   *
   */
  serial?: string;
  /**
   * Outlook url
   *
   */
  url?: string;
}
/**
 * Outlook version
 */
export type EmailExchangeOutlookVersionEnum = 'mac_x86_2011' | 'mac_x86_2016' | 'windows_x64_2013' | 'windows_x64_2016' | 'windows_x86_2013' | 'windows_x86_2016';
/**
 * Availability of outlook version
 */
export interface EmailExchangeOutlookVersions {
  /**
   */
  outlookLanguage?: EmailExchangeLanguageEnum;
  /**
   */
  outlookVersion?: EmailExchangeOutlookVersionEnum;
  /**
   */
  status?: boolean;
}
/**
 * OVH licence account
 */
export type EmailExchangeOvhLicenceEnum = 'basic' | 'enterprise' | 'standard';
/**
 * Get public folder quota usage in total available space
 */
export interface EmailExchangePublicFolderQuota {
  /**
   * total amount of space in MB for public folders within organization
   *
   */
  quotaLimit?: Number;
  /**
   * space in MB already reserved from the quota limit
   *
   */
  quotaReserved?: Number;
  /**
   * currently used space in MB within all public folders
   *
   */
  quotaUsed?: Number;
}
/**
 * Public folder right type
 */
export type EmailExchangePublicFolderRightTypeEnum = 'editor' | 'none' | 'reviewer';
/**
 * Public folder type
 */
export type EmailExchangePublicFolderTypeEnum = 'calendar' | 'contacts' | 'plain' | 'tasks';
/**
 * Resource Type
 */
export type EmailExchangeResourceTypeEnum = 'equipment' | 'room';
/**
 * Exchange server
 */
export interface EmailExchangeServer {
  /**
   * Exchange commercial version
   *
   */
  commercialVersion?: EmailExchangeExchangeCommercialVersionEnum;
  /**
   * Current disk usage in MB
   *
   */
  currentDiskUsage?: Number;
  /**
   * Total disk size in MB
   *
   */
  diskSize?: Number;
  /**
   * If true server is 2010 individual offer
   *
   */
  individual2010?: boolean;
  /**
   * ipV4
   *
   */
  ip?: string;
  /**
   * ipV6
   *
   */
  ipV6?: string;
  /**
   * If true your dns A record is valid
   *
   */
  isAValid?: boolean;
  /**
   * If true your dns AAAA record is valid
   *
   */
  isAaaaValid?: boolean;
  /**
   * If true your dns ptrV6 record is valid
   *
   */
  isPtrV6Valid?: boolean;
  /**
   * If true your dns ptr record is valid
   *
   */
  isPtrValid?: boolean;
  /**
   * Indicates if Multi Factor Authentication is activated on Outlook Web Access interface
   *
   */
  owaMfa?: boolean;
  /**
   * Server state
   *
   */
  state?: EmailExchangeServerStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * ExchangeServer version
   *
   */
  version?: Number;
}
/**
 * Server State
 */
export type EmailExchangeServerStateEnum = 'configurationPending' | 'notConfigured' | 'ok';
/**
 * Service Offer name
 */
export type EmailExchangeServiceOfferEnum = 'dedicated' | 'dedicatedCluster' | 'hosted' | 'provider';
/**
 * Exchange Service State
 */
export type EmailExchangeServiceStateEnum = 'inMaintenance' | 'ok' | 'suspended';
/**
 * Get shared account quota usage in total available space
 */
export interface EmailExchangeSharedAccountQuota {
  /**
   * total amount of space in MB for shared accounts within organization
   *
   */
  quotaLimit?: Number;
  /**
   * space in MB already reserved from the quota limit
   *
   */
  quotaReserved?: Number;
  /**
   * currently used space in KB within all shared accounts
   *
   */
  quotaUsed?: Number;
}
/**
 * Level of access to calendar of Resource Mailbox
 */
export type EmailExchangeShowMeetingDetailsEnum = 'availabilityOnly' | 'limitedDetails' | 'reviewer';
/**
 * Exchange task details
 */
export interface EmailExchangeTask {
  /**
   * Completion date
   *
   */
  finishDate?: string;
  /**
   * Function name
   *
   */
  function?: EmailExchangeTaskFunctionEnum;
  /**
   * Task id
   *
   */
  id?: Number;
  /**
   * Task status
   *
   */
  status?: EmailExchangeTaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate?: string;
}
/**
 * function enumeration for exchange task
 */
export type EmailExchangeTaskFunctionEnum = 'activateSharepoint' | 'addAccount' | 'addAccountArchive' | 'addActiveSyncMailNotification' | 'addAlias' | 'addDistributionGroup' | 'addDistributionGroupManager' | 'addDistributionGroupMember' | 'addDistributionGroupSendAs' | 'addDistributionGroupSendOnBehalfTo' | 'addDomain' | 'addDomainDisclaimer' | 'addExchangeServiceAuthorizedIp' | 'addExportPstRequest' | 'addExternalContact' | 'addFullAccess' | 'addOutlookLicense' | 'addPublicFolder' | 'addPublicFolderPermission' | 'addResourceAccount' | 'addResourceDelegate' | 'addSendAs' | 'addSendOnBehalfTo' | 'addSharedAccount' | 'addSharedAccountFullAccess' | 'addSharedAccountSendAs' | 'addSharedAccountSendOnBehalfTo' | 'changeHostname' | 'changePassword' | 'clearDataOnDevice' | 'cloneTemplateExchangePrivate' | 'configureExchangeCustomer' | 'deleteAccount' | 'deleteAccountArchive' | 'deleteActiveSyncMailNotification' | 'deleteAlias' | 'deleteDistributionGroup' | 'deleteDistributionGroupManager' | 'deleteDistributionGroupMember' | 'deleteDistributionGroupSendAs' | 'deleteDistributionGroupSendOnBehalfTo' | 'deleteDomain' | 'deleteDomainDisclaimer' | 'deleteExchangeService' | 'deleteExchangeServiceAuthorizedIp' | 'deleteExportPstRequest' | 'deleteExternalContact' | 'deleteFullAccess' | 'deleteOutlookLicense' | 'deletePublicFolder' | 'deletePublicFolderPermission' | 'deleteResourceAccount' | 'deleteResourceDelegate' | 'deleteSendAs' | 'deleteSendOnBehalfTo' | 'deleteSharedAccount' | 'deleteSharedAccountFullAccess' | 'deleteSharedAccountSendAs' | 'deleteSharedAccountSendOnBehalfTo' | 'destroyPrivateVm' | 'diagnoseAccount' | 'expandDrive' | 'generateOutlookUrl' | 'generatePstUrl' | 'installExchange' | 'installSSL' | 'maintenance' | 'migrationAccount' | 'migrationDisclaimer' | 'migrationExternalContact' | 'migrationHistory' | 'migrationMailingList' | 'migrationResourceAccount' | 'migrationService' | 'reOpenHostedAccount' | 'reOpenOutlookLicense' | 'reOpenPrivateAccount' | 'reOpenPrivateVm' | 'setAccount' | 'setAccountArchive' | 'setAlias' | 'setDistributionGroup' | 'setDns' | 'setDomain' | 'setDomainDisclaimer' | 'setExchangeAccountProtocol' | 'setExchangeServiceDevice' | 'setExternalContact' | 'setPublicFolder' | 'setPublicFolderPermission' | 'setResourceAccount' | 'setService' | 'setSharedAccount' | 'suspendAccount' | 'suspendExchangeService' | 'suspendHostedAccount' | 'suspendOutlookLicense' | 'suspendPrivateAccount' | 'suspendPrivateVm' | 'unsuspendAccount' | 'unsuspendExchangeService' | 'unsuspendHostedAccount' | 'updateExchangeServiceDevice' | 'upgrade2016';
/**
 * Exchange task status
 */
export type EmailExchangeTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Subscription state
 */
export type EmailExchangeActiveSyncNotificationStateEnum = 'creating' | 'deleting' | 'ok';
/**
 * Authorized IP State
 */
export type EmailExchangeAuthorizedIpStatusEnum = 'creating' | 'deleting' | 'ok';
/**
 * Exchange organization disclaimer
 */
export interface EmailExchangeDisclaimer {
  /**
   * Signature, added at the bottom of your organization emails
   *
   */
  content?: string;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Disclaimer name
   *
   */
  name?: string;
  /**
   * Activate the disclaimer only for external emails
   *
   */
  outsideOnly?: boolean;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Aliases on this mailbox
 */
export interface EmailExchangeExchangeAccountAlias {
  /**
   * Alias
   *
   */
  alias?: string;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange Account Archive
 */
export interface EmailExchangeExchangeAccountArchive {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Archive mailbox usage
   *
   */
  currentUsage?: Number;
  /**
   * GUID of archive mailbox
   *
   */
  guid?: string;
  /**
   * Archive mailbox maximum size in GB
   *
   */
  quota?: Number;
  /**
   * Archive mailbox state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Pending task for this archive mailbox
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange Account Diagnosis
 */
export interface EmailExchangeExchangeAccountDiagnosis {
  /**
   * Determines if ingoing message has been received
   *
   */
  canReceiveEmail?: boolean;
  /**
   * Determines if outgoing message has been delivered
   *
   */
  canSendEmail?: boolean;
  /**
   * Determines if possible to authenticate with credentials
   *
   */
  connectiveOWA?: boolean;
  /**
   * Determines if account is locked
   *
   */
  isLocked?: boolean;
  /**
   * Determines if MX record for account's domain is properly set
   *
   */
  isMxValid?: boolean;
  /**
   * Determines if account is flagged as spammer
   *
   */
  isSpammer?: boolean;
  /**
   * Determines if SRV (autodiscovery) record for account's domain is properly set
   *
   */
  isSrvValid?: boolean;
  /**
   * Determines if account is suspended
   *
   */
  isSuspended?: boolean;
  /**
   * Last performed diagnostics date
   *
   */
  lastCheck?: string;
}
/**
 * Users having full access on this mailbox
 */
export interface EmailExchangeExchangeAccountFullAccess {
  /**
   * Account id to give full access
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get protocol status on that mailbox
 */
export interface EmailExchangeExchangeAccountProtocol {
  /**
   * IMAP protocol enabled on that mailbox
   *
   */
  IMAP?: boolean;
  /**
   * POP protocol enabled on that mailbox
   *
   */
  POP?: boolean;
  /**
   * Mobile access enabled on that mailbox
   *
   */
  activeSync?: boolean;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Last update date
   *
   */
  lastUpdate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
  /**
   * Web mail enabled on that mailbox
   *
   */
  webMail?: boolean;
}
/**
 * Users authorized to send mails from this mailbox
 */
export interface EmailExchangeExchangeAccountSendAs {
  /**
   * Account id to give send as
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get users authorized to Send On Behalf To mails from this mailbox
 */
export interface EmailExchangeExchangeAccountSendOnBehalfTo {
  /**
   * Account id to give send on behalf to
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange commercial version
 */
export type EmailExchangeExchangeCommercialVersionEnum = '2010' | '2013' | '2016';
/**
 * Mailing list managers
 */
export interface EmailExchangeExchangeDistributionGroupManager {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Manager account id
   *
   */
  managerAccountId?: Number;
  /**
   * Member account primaryEmailAddress
   *
   */
  managerEmailAddress?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Mailing list members
 */
export interface EmailExchangeExchangeDistributionGroupMember {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Member account id
   *
   */
  memberAccountId?: Number;
  /**
   * Member account id
   *
   */
  memberContactId?: Number;
  /**
   * Member account primaryEmailAddress
   *
   */
  memberEmailAddress?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get users authorized to Send On Behalf To mails from this mailbox
 */
export interface EmailExchangeExchangeDistributionGroupSendAs {
  /**
   * Account id to give send on behalf to
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get users authorized to Send On Behalf To mails from this mailing list
 */
export interface EmailExchangeExchangeDistributionGroupSendOnBehalfTo {
  /**
   * Account id to give send on behalf to
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * External contact for this exchange service
 */
export interface EmailExchangeExchangeExternalContact {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Contact display name
   *
   */
  displayName?: string;
  /**
   * Contact email
   *
   */
  externalEmailAddress?: string;
  /**
   * Contact first name
   *
   */
  firstName?: string;
  /**
   * Hide the contact in Global Address List
   *
   */
  hiddenFromGAL?: boolean;
  /**
   * Contact id
   *
   */
  id?: Number;
  /**
   * Contact initals
   *
   */
  initials?: string;
  /**
   * Contact last name
   *
   */
  lastName?: string;
  /**
   * If specified, indicates to which organization this external contact belongs (Exchange 2010 only)
   *
   */
  organization2010?: string;
  /**
   * Contact state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get aliases on this mailingList
 */
export interface EmailExchangeExchangeMailingListAlias {
  /**
   * Alias
   *
   */
  alias?: string;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange organization public folder permission
 */
export interface EmailExchangeExchangePublicFolderPermission {
  /**
   * Access right set for the account
   *
   */
  accessRights?: EmailExchangePublicFolderRightTypeEnum;
  /**
   * Account id
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Resource accounts delegates
 */
export interface EmailExchangeExchangeResourceAccountDelegate {
  /**
   * delegate's account id
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Delegate account primaryEmailAddress
   *
   */
  delegateEmailAddress?: string;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get email addresses subscribed to ActiveSync quarantine notifications
 */
export interface EmailExchangeExchangeServiceActiveSyncNotification {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Notified Account Id
   *
   */
  notifiedAccountId?: Number;
  /**
   * Primary email address for notified account
   *
   */
  primaryEmailAddress?: string;
  /**
   * Email state
   *
   */
  state?: EmailExchangeActiveSyncNotificationStateEnum;
}
/**
 * Get authorized IPs for POP, IMAP and webmail
 */
export interface EmailExchangeExchangeServiceAuthorizedIp {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Authorized IP
   *
   */
  ip?: string;
  /**
   * Authorized IP status
   *
   */
  status?: EmailExchangeAuthorizedIpStatusEnum;
}
/**
 * Get the list of your ActiveSync devices registered on this Exchange service
 */
export interface EmailExchangeExchangeServiceDevice {
  /**
   * International Mobile Equipment Identity
   *
   */
  IMEI?: string;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Device Id
   *
   */
  deviceId?: string;
  /**
   * Model device
   *
   */
  deviceModel?: string;
  /**
   * Device State
   *
   */
  deviceState?: EmailExchangeDeviceActiveSyncStateEnum;
  /**
   * user guid
   *
   */
  guid?: string;
  /**
   * Exchange identity
   *
   */
  identity?: string;
  /**
   * Last update date
   *
   */
  lastUpdate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Protocol access policy for this Exchange service
 */
export interface EmailExchangeExchangeServiceProtocol {
  /**
   * IMAP protocol enabled on this Exchange service
   *
   */
  IMAP?: boolean;
  /**
   * POP protocol enabled on this Exchange service
   *
   */
  POP?: boolean;
  /**
   * ActiveSync protocol enabled on this Exchange service
   *
   */
  activeSync?: boolean;
  /**
   * ActiveSync policy to apply at device's first connection
   *
   */
  activeSyncPolicy?: EmailExchangeActiveSyncPolicyEnum;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Last update date
   *
   */
  lastUpdate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
  /**
   * Web mail protocol enabled on this Exchange service
   *
   */
  webMail?: boolean;
}
/**
 * Users having full access on this shared mailbox
 */
export interface EmailExchangeExchangeSharedAccountFullAccess {
  /**
   * Account id to give full access
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Users authorized to send mails from this shared mailbox
 */
export interface EmailExchangeExchangeSharedAccountSendAs {
  /**
   * Account id to give send as
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get users authorized to Send On Behalf To mails from this shared mailbox
 */
export interface EmailExchangeExchangeSharedAccountSendOnBehalfTo {
  /**
   * Account id to give send on behalf to
   *
   */
  allowedAccountId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Mailing list
 */
export interface EmailExchangeMailingList {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Depart restriction policy
   *
   */
  departRestriction?: EmailExchangeMailingListDepartRestrictionEnum;
  /**
   * Name displayed in Global Access List
   *
   */
  displayName?: string;
  /**
   * If true mailing list is hiddend in Global Address List
   *
   */
  hiddenFromGAL?: boolean;
  /**
   * Join restriction policy
   *
   */
  joinRestriction?: EmailExchangeMailingListJoinRestrictionEnum;
  /**
   * Update date
   *
   */
  lastUpdateDate?: string;
  /**
   * The mailing list address
   *
   */
  mailingListAddress?: string;
  /**
   * Maximum receive email size in MB
   *
   */
  maxReceiveSize?: Number;
  /**
   * Maximum send email size in MB
   *
   */
  maxSendSize?: Number;
  /**
   * If true sender has to authenticate
   *
   */
  senderAuthentification?: boolean;
  /**
   * Account was sending spam
   *
   */
  spamDetected?: boolean;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: Number;
  /**
   * Mailing list state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange organization public folder
 */
export interface EmailExchangePublicFolder {
  /**
   * Access right for the guest users
   *
   */
  anonymousPermission?: EmailExchangePublicFolderRightTypeEnum;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Default access right
   *
   */
  defaultPermission?: EmailExchangePublicFolderRightTypeEnum;
  /**
   * If true, this public folder has subfolders
   *
   */
  hasSubFolders?: boolean;
  /**
   * Number of items in public folder
   *
   */
  itemCount?: Number;
  /**
   * Time for which public folder was accessed for the last time
   *
   */
  lastAccessTime?: string;
  /**
   * Time for which public folder was modified for the last time
   *
   */
  lastModificationTime?: string;
  /**
   * Time for which public folder was accessed for the last time by the user
   *
   */
  lastUserAccessTime?: string;
  /**
   * Time for which public folder was modified for the last time by the user
   *
   */
  lastUserModificationTime?: string;
  /**
   * Path for public folder
   *
   */
  path?: string;
  /**
   * Quota for public folder in MB
   *
   */
  quota?: Number;
  /**
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Sum of all items in public folder in MB
   *
   */
  totalItemSize?: Number;
  /**
   * Type for public folder
   *
   */
  type?: EmailExchangePublicFolderTypeEnum;
}
/**
 * Renew period
 */
export type EmailExchangeRenewPeriodEnum = 'monthly' | 'yearly';
/**
 * Exchange resource account
 */
export interface EmailExchangeResourceAccount {
  /**
   * meeting organizer's name is used as the subject of the meeting request
   *
   */
  addOrganizerToSubject?: boolean;
  /**
   * resource can be scheduled by more than one person during the same time period
   *
   */
  allowConflict?: boolean;
  /**
   * maximum number of days in advance that the resource can be reserved
   *
   */
  bookingWindow?: Number;
  /**
   * number of the same equipment or capacity of a room
   *
   */
  capacity?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * remove any text in the message body of incoming meeting requests on resourceAccount
   *
   */
  deleteComments?: boolean;
  /**
   * remove email subject of incoming meeting requests on resourceAccount
   *
   */
  deleteSubject?: boolean;
  /**
   * name of resource
   *
   */
  displayName?: string;
  /**
   * resource location name
   *
   */
  location?: string;
  /**
   * maximum duration in minutes for meeting requests
   *
   */
  maximumDuration?: Number;
  /**
   * resource as email
   *
   */
  resourceEmailAddress?: string;
  /**
   * granted right on a calendar of that resourceAccount
   *
   */
  showMeetingDetails?: EmailExchangeShowMeetingDetailsEnum;
  /**
   * account state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * resource type
   *
   */
  type?: EmailExchangeResourceTypeEnum;
}
/**
 * Exchange shared mailbox
 */
export interface EmailExchangeSharedAccount {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Shared mailbox usage
   *
   */
  currentUsage?: Number;
  /**
   * Shared account display name
   *
   */
  displayName?: string;
  /**
   * Shared account first name
   *
   */
  firstName?: string;
  /**
   * Hide shared account in Global Address List
   *
   */
  hiddenFromGAL?: boolean;
  /**
   * Shared account id
   *
   */
  id?: Number;
  /**
   * Shared account initials
   *
   */
  initials?: string;
  /**
   * Last logoff
   *
   */
  lastLogoffDate?: string;
  /**
   * Last logon
   *
   */
  lastLogonDate?: string;
  /**
   * Shared account last name
   *
   */
  lastName?: string;
  /**
   * Enable or disable anti-virus and anti-spam
   *
   */
  mailingFilter?: EmailExchangeMailingFilterEnum[];
  /**
   * Shared account maximum size
   *
   */
  quota?: Number;
  /**
   * Default email for this shared mailbox
   *
   */
  sharedEmailAddress?: string;
  /**
   * Account was sending spam
   *
   */
  spamDetected?: boolean;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: Number;
  /**
   * Shared account state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Pending task for this shared account
   *
   */
  taskPendingId?: Number;
}
/**
 * Spam and Antyvirus configuration
 */
export interface EmailExchangeSpamAndVirusConfiguration {
  /**
   * Check DKIM of message
   *
   */
  checkDKIM?: boolean;
  /**
   * Check SPF of message
   *
   */
  checkSPF?: boolean;
  /**
   * If message is a spam delete it
   *
   */
  deleteSpam?: boolean;
  /**
   * If message is a virus delete it
   *
   */
  deleteVirus?: boolean;
  /**
   * If message is a spam or virus put in junk. Overridden by deleteSpam or deleteVirus
   *
   */
  putInJunk?: boolean;
  /**
   * If message is a spam change its subject
   *
   */
  tagSpam?: boolean;
  /**
   * If message is a virus change its subject
   *
   */
  tagVirus?: boolean;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsEmailExchangeGET = '/email/exchange' | 
'/email/exchange/{organizationName}/service' | 
'/email/exchange/{organizationName}/service/{exchangeService}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails' | 
'/email/exchange/{organizationName}/service/{exchangeService}/device' | 
'/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/license' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/server' | 
'/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota' | 
'/email/exchange/{organizationName}/service/{exchangeService}/task' | 
'/email/exchange/{organizationName}/service/{exchangeService}/task/{id}';

type PathsEmailExchangePUT = '/email/exchange/{organizationName}/service/{exchangeService}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol' | 
'/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/server' | 
'/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}';

type PathsEmailExchangePOST = '/email/exchange/{organizationName}/service/{exchangeService}/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate' | 
'/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint' | 
'/email/exchange/{organizationName}/service/{exchangeService}/changeHostname' | 
'/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission' | 
'/email/exchange/{organizationName}/service/{exchangeService}/renewSSL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList' | 
'/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts';

type PathsEmailExchangeDELETE = '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}';

export class ApiEmailExchange extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the MSSERVICES service
  List available services
  **/
  public get(path: '/email/exchange'): Promise<string[]>;
  /**
  Operations about the EXCHANGE service
  List available services
  **/
  public get(path: '/email/exchange/{organizationName}/service', pathParams: {organizationName: string}): Promise<string[]>;
  /**
  Exchange service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeExchangeService>;
  /**
  List the email.exchange.Account objects
  Accounts associated to this exchange service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account', pathParams: {organizationName: string, exchangeService: string}, queryParams: {id?: Number, primaryEmailAddress?: string, accountLicense?: EmailExchangeOvhLicenceEnum}): Promise<string[]>;
  /**
  Exchange mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeAccount>;
  /**
  List the email.exchange.exchangeAccountAlias objects
  Aliases associated to this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<string[]>;
  /**
  Aliases on this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, alias: string}): Promise<EmailExchangeExchangeAccountAlias>;
  /**
  Exchange Account Archive
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeExchangeAccountArchive>;
  /**
  Exchange Account Diagnosis
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeExchangeAccountDiagnosis>;
  /**
  Export PST file request
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeExport>;
  /**
  Export PST file url
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeExportUrl>;
  /**
  List the email.exchange.exchangeAccountFullAccess objects
  Full access granted users for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<Number[]>;
  /**
  Users having full access on this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeAccountFullAccess>;
  /**
  Outlook url
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeOutlookUrl>;
  /**
  Get protocol status on that mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeExchangeAccountProtocol>;
  /**
  List the email.exchange.exchangeAccountSendAs objects
  Send as granted users for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<Number[]>;
  /**
  Users authorized to send mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeAccountSendAs>;
  /**
  List the email.exchange.exchangeAccountSendOnBehalfTo objects
  SendOnBehalfTo granted users for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeAccountSendOnBehalfTo>;
  /**
  List the email.exchange.Task objects
  Pending task for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<Number[]>;
  /**
  Exchange task details
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, id: Number}): Promise<EmailExchangeTask>;
  /**
  dcvEmails operations
  Get DCV emails if your ssl will expire in next 30 days
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails', pathParams: {organizationName: string, exchangeService: string}): Promise<string[]>;
  /**
  List the email.exchange.exchangeServiceDevice objects
  List of your ActiveSync devices registered on this Exchange service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/device', pathParams: {organizationName: string, exchangeService: string}, queryParams: {identity?: string, IMEI?: string, deviceState?: EmailExchangeDeviceActiveSyncStateEnum}): Promise<string[]>;
  /**
  Get the list of your ActiveSync devices registered on this Exchange service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}', pathParams: {organizationName: string, exchangeService: string, identity: string}): Promise<EmailExchangeExchangeServiceDevice>;
  /**
  List the email.exchange.Domain objects
  Domains associated to this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain', pathParams: {organizationName: string, exchangeService: string}, queryParams: {main?: boolean, state?: EmailExchangeObjectStateEnum}): Promise<string[]>;
  /**
  Exchange domain
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', pathParams: {organizationName: string, exchangeService: string, domainName: string}): Promise<EmailExchangeDomain>;
  /**
  Exchange organization disclaimer
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', pathParams: {organizationName: string, exchangeService: string, domainName: string}): Promise<EmailExchangeDisclaimer>;
  /**
  disclaimerAttribute operations
  Get diclaimer attributes to substitute with Active Directory properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute', pathParams: {organizationName: string, exchangeService: string, domainName: string}): Promise<EmailExchangeDisclaimerAttributeEnum[]>;
  /**
  List the email.exchange.exchangeExternalContact objects
  External contacts for this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact', pathParams: {organizationName: string, exchangeService: string}, queryParams: {displayName?: string, id?: Number, externalEmailAddress?: string, firstName?: string, lastName?: string}): Promise<string[]>;
  /**
  External contact for this exchange service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', pathParams: {organizationName: string, exchangeService: string, externalEmailAddress: string}): Promise<EmailExchangeExchangeExternalContact>;
  /**
  license operations
  Get active licenses for specific period of time
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/license', pathParams: {organizationName: string, exchangeService: string}, queryParams: {fromDate?: string, license?: EmailExchangeOvhLicenceEnum, toDate?: string}): Promise<EmailExchangeDailyLicense[]>;
  /**
  List the email.exchange.mailingList objects
  Mailing list for this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList', pathParams: {organizationName: string, exchangeService: string}, queryParams: {mailingListAddress?: string}): Promise<string[]>;
  /**
  Mailing list
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<EmailExchangeMailingList>;
  /**
  List the email.exchange.exchangeMailingListAlias objects
  Aliases associated to this mailingList
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<string[]>;
  /**
  Get aliases on this mailingList
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, alias: string}): Promise<EmailExchangeExchangeMailingListAlias>;
  /**
  List the email.exchange.exchangeDistributionGroupManager objects
  Mailing list account manager
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<Number[]>;
  /**
  Mailing list managers
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, managerAccountId: Number}): Promise<EmailExchangeExchangeDistributionGroupManager>;
  /**
  List the email.exchange.exchangeDistributionGroupMember objects
  Mailing list account member
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<Number[]>;
  /**
  Mailing list members
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, memberAccountId: Number}): Promise<EmailExchangeExchangeDistributionGroupMember>;
  /**
  List the email.exchange.exchangeDistributionGroupMember objects
  Mailing list contact member
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<Number[]>;
  /**
  Mailing list members
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, memberContactId: Number}): Promise<EmailExchangeExchangeDistributionGroupMember>;
  /**
  List the email.exchange.exchangeDistributionGroupSendAs objects
  sendAs
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeDistributionGroupSendAs>;
  /**
  List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects
  sendOnBehalfTo
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this mailing list
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeDistributionGroupSendOnBehalfTo>;
  /**
  outlookAvailability operations
  Show available outlooks
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability', pathParams: {organizationName: string, exchangeService: string}, queryParams: {outlookVersion?: EmailExchangeOutlookVersionEnum, outlookLanguage?: EmailExchangeLanguageEnum}): Promise<EmailExchangeOutlookVersions[]>;
  /**
  Protocol access policy for this Exchange service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeExchangeServiceProtocol>;
  /**
  List the email.exchange.exchangeServiceActiveSyncNotification objects
  Exchange account id subscribed to ActiveSync quarantine notifications
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification', pathParams: {organizationName: string, exchangeService: string}): Promise<Number[]>;
  /**
  Get email addresses subscribed to ActiveSync quarantine notifications
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}', pathParams: {organizationName: string, exchangeService: string, notifiedAccountId: Number}): Promise<EmailExchangeExchangeServiceActiveSyncNotification>;
  /**
  List the email.exchange.publicFolder objects
  Public folders associated to this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder', pathParams: {organizationName: string, exchangeService: string}, queryParams: {path?: string}): Promise<string[]>;
  /**
  Exchange organization public folder
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', pathParams: {organizationName: string, exchangeService: string, path: string}): Promise<EmailExchangePublicFolder>;
  /**
  List the email.exchange.exchangePublicFolderPermission objects
  Public folder permission
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission', pathParams: {organizationName: string, exchangeService: string, path: string}): Promise<Number[]>;
  /**
  Exchange organization public folder permission
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, path: string, allowedAccountId: Number}): Promise<EmailExchangeExchangePublicFolderPermission>;
  /**
  publicFolderQuota operations
  Get public folder quota usage in total available space
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangePublicFolderQuota>;
  /**
  List the email.exchange.resourceAccount objects
  Resource account associated to this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount', pathParams: {organizationName: string, exchangeService: string}, queryParams: {resourceEmailAddress?: string}): Promise<string[]>;
  /**
  Exchange resource account
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', pathParams: {organizationName: string, exchangeService: string, resourceEmailAddress: string}): Promise<EmailExchangeResourceAccount>;
  /**
  List the email.exchange.exchangeResourceAccountDelegate objects
  Resource account manager
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate', pathParams: {organizationName: string, exchangeService: string, resourceEmailAddress: string}): Promise<Number[]>;
  /**
  Resource accounts delegates
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, resourceEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeResourceAccountDelegate>;
  /**
  Exchange server
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/server', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeServer>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos', pathParams: {organizationName: string, exchangeService: string}): Promise<ServicesService>;
  /**
  List the email.exchange.sharedAccount objects
  Shared accounts associated to this exchange service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount', pathParams: {organizationName: string, exchangeService: string}, queryParams: {sharedEmailAddress?: string}): Promise<string[]>;
  /**
  Exchange shared mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<EmailExchangeSharedAccount>;
  /**
  List the email.exchange.exchangeSharedAccountFullAccess objects
  Full access granted users for this shared mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<Number[]>;
  /**
  Users having full access on this shared mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeSharedAccountFullAccess>;
  /**
  List the email.exchange.exchangeSharedAccountSendAs objects
  Send as granted users for this shared mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<Number[]>;
  /**
  Users authorized to send mails from this shared mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeSharedAccountSendAs>;
  /**
  List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects
  SendOnBehalfTo granted users for this shared mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this shared mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeExchangeSharedAccountSendOnBehalfTo>;
  /**
  List the email.exchange.Task objects
  Pending task for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<Number[]>;
  /**
  Exchange task details
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string, id: Number}): Promise<EmailExchangeTask>;
  /**
  sharedAccountQuota operations
  Get shared account quota usage in total available space
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeSharedAccountQuota>;
  /**
  List the email.exchange.Task objects
  Pending actions
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/task', pathParams: {organizationName: string, exchangeService: string}): Promise<Number[]>;
  /**
  Exchange task details
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/task/{id}', pathParams: {organizationName: string, exchangeService: string, id: Number}): Promise<EmailExchangeTask>;
  public get(path: PathsEmailExchangeGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Exchange service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}', pathParams: {organizationName: string, exchangeService: string}): Promise<void>;
  /**
  Exchange mailbox
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<void>;
  /**
  Exchange Account Archive
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<void>;
  /**
  Get protocol status on that mailbox
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<void>;
  /**
  Get the list of your ActiveSync devices registered on this Exchange service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}', pathParams: {organizationName: string, exchangeService: string, identity: string}): Promise<void>;
  /**
  Exchange domain
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', pathParams: {organizationName: string, exchangeService: string, domainName: string}): Promise<void>;
  /**
  Exchange organization disclaimer
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', pathParams: {organizationName: string, exchangeService: string, domainName: string}): Promise<void>;
  /**
  External contact for this exchange service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', pathParams: {organizationName: string, exchangeService: string, externalEmailAddress: string}): Promise<void>;
  /**
  Mailing list
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<void>;
  /**
  Protocol access policy for this Exchange service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol', pathParams: {organizationName: string, exchangeService: string}): Promise<void>;
  /**
  Exchange organization public folder
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', pathParams: {organizationName: string, exchangeService: string, path: string}): Promise<void>;
  /**
  Exchange organization public folder permission
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, path: string, allowedAccountId: Number}): Promise<void>;
  /**
  Exchange resource account
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', pathParams: {organizationName: string, exchangeService: string, resourceEmailAddress: string}): Promise<void>;
  /**
  Exchange server
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/server', pathParams: {organizationName: string, exchangeService: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos', pathParams: {organizationName: string, exchangeService: string}): Promise<void>;
  /**
  Exchange shared mailbox
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<void>;
  public put(path: PathsEmailExchangePUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the email.exchange.Account objects
  Create new mailbox in exchange server
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeAccountAlias objects
  Create new alias
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Exchange Account Archive
  Create new archive mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  changePassword operations
  Change mailbox password
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Exchange Account Diagnosis
  Create new diagnosis request
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Export PST file request
  Request PST file for the account
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Export PST file url
  Generate temporary url to PST file
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeAccountFullAccess objects
  Allow full access to a user
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Outlook url
  Generate outlook url
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeAccountSendAs objects
  Allow another user to send mails from this mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeAccountSendOnBehalfTo objects
  Allow another user to Send On Behalf To mails from this mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  terminate operations
  Terminate account at expiration date
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<string>;
  /**
  activateSharepoint operations
  Activate Sharepoint infra connected to this exchange service
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  changeHostname operations
  Setting SSL hostname for Exchange private offer
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/changeHostname', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  clearDevice operations
  Executes a factory reset on the device. THIS OPERATION CANNOT BE REVERSED, ALL DATA ON THE DEVICE WILL BE LOST.
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice', pathParams: {organizationName: string, exchangeService: string, identity: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.Domain objects
  Create new domain in exchange services
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  Exchange organization disclaimer
  Create organization disclaimer of each email
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', pathParams: {organizationName: string, exchangeService: string, domainName: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeExternalContact objects
  create new external contact
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.mailingList objects
  Add mailing list
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeMailingListAlias objects
  Create new alias
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupManager objects
  Add new mailing list manager
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupMember objects
  Add new mailing list member
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupMember objects
  Add new mailing list member
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupSendAs objects
  Allow another user to Send aso mails from this mailing list
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects
  Allow another user to Send aso mails from this mailing list
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeServiceActiveSyncNotification objects
  Subscribe new address to ActiveSync quarantine notifications
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.publicFolder objects
  Create organization public folder
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangePublicFolderPermission objects
  Create public folder permission
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission', pathParams: {organizationName: string, exchangeService: string, path: string}): Promise<EmailExchangeTask>;
  /**
  renewSSL operations
  Renew SSL if it will expire in next 30 days
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/renewSSL', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.resourceAccount objects
  create new resource account in exchange server
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeResourceAccountDelegate objects
  add new resource account delegate in exchange server
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate', pathParams: {organizationName: string, exchangeService: string, resourceEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.sharedAccount objects
  Create new shared mailbox in exchange server
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeSharedAccountFullAccess objects
  Allow full access to a user
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeSharedAccountSendAs objects
  Allow another user to send mails from this shared mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects
  Allow another user to Send On Behalf To mails from this shared mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  updateDeviceList operations
  Update device list
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList', pathParams: {organizationName: string, exchangeService: string}): Promise<EmailExchangeTask>;
  /**
  updateFlagsOnAllAccounts operations
  Update spam and virus flags on all active accounts
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts', pathParams: {organizationName: string, exchangeService: string}): Promise<void>;
  public post(path: PathsEmailExchangePOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Exchange mailbox
  Delete existing mailbox in exchange server
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Aliases on this mailbox
  Delete existing alias
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, alias: string}): Promise<EmailExchangeTask>;
  /**
  Exchange Account Archive
  Delete existing archive mailbox
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Export PST file request
  Remove request of PST file
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Users having full access on this mailbox
  Revoke full access
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Users authorized to send mails from this mailbox
  Delete allowed user for sendAs
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, primaryEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Exchange domain
  Delete existing domain in exchange services
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', pathParams: {organizationName: string, exchangeService: string, domainName: string}): Promise<EmailExchangeTask>;
  /**
  Exchange organization disclaimer
  Delete existing organization disclaimer
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', pathParams: {organizationName: string, exchangeService: string, domainName: string}): Promise<EmailExchangeTask>;
  /**
  External contact for this exchange service
  delete external contact
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', pathParams: {organizationName: string, exchangeService: string, externalEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Mailing list
  Delete mailing list
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string}): Promise<EmailExchangeTask>;
  /**
  Get aliases on this mailingList
  Delete existing alias
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, alias: string}): Promise<EmailExchangeTask>;
  /**
  Mailing list managers
  Delete mailing list manager
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, managerAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Mailing list members
  Delete mailing list member
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, memberAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Mailing list members
  Delete mailing list member
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, memberContactId: Number}): Promise<EmailExchangeTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Delete allowed user for SendAs
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailing list
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, mailingListAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Get email addresses subscribed to ActiveSync quarantine notifications
  Unubscribe address from ActiveSync quarantine notifications
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}', pathParams: {organizationName: string, exchangeService: string, notifiedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Exchange organization public folder
  Delete existing organization public folder
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', pathParams: {organizationName: string, exchangeService: string, path: string}): Promise<EmailExchangeTask>;
  /**
  Exchange organization public folder permission
  Delete existing permission from public folder
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, path: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Exchange resource account
  delete existing resource account in exchange server
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', pathParams: {organizationName: string, exchangeService: string, resourceEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Resource accounts delegates
  delete existing resource account delegate in exchange server
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, resourceEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Exchange shared mailbox
  Delete existing shared mailbox in exchange server
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string}): Promise<EmailExchangeTask>;
  /**
  Users having full access on this shared mailbox
  Revoke full access
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Users authorized to send mails from this shared mailbox
  Delete allowed user for sendAs
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  /**
  Get users authorized to Send On Behalf To mails from this shared mailbox
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName: string, exchangeService: string, sharedEmailAddress: string, allowedAccountId: Number}): Promise<EmailExchangeTask>;
  public delete(path: PathsEmailExchangeDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

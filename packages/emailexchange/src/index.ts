import { ApiCommon } from '@ovh-api/common';
/**
 * Exchange server
 */
export interface EmailExchangeServer {
  /**
   * If true your dns ptrV6 record is valid
   *
   */
  isPtrV6Valid?: boolean;
  /**
   * ipV4
   *
   */
  ip?: string;
  /**
   * Indicates if Multi Factor Authentication is activated on Outlook Web Access interface
   *
   */
  owaMfa?: boolean;
  /**
   * ExchangeServer version
   *
   */
  version?: Number;
  /**
   * Exchange commercial version
   *
   */
  commercialVersion?: EmailExchangeExchangeCommercialVersionEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Total disk size in MB
   *
   */
  diskSize?: Number;
  /**
   * Current disk usage in MB
   *
   */
  currentDiskUsage?: Number;
  /**
   * ipV6
   *
   */
  ipV6?: string;
  /**
   * If true server is 2010 individual offer
   *
   */
  individual2010?: boolean;
  /**
   * If true your dns ptr record is valid
   *
   */
  isPtrValid?: boolean;
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
   * Server state
   *
   */
  state?: EmailExchangeServerStateEnum;
}
/**
 * Outlook language
 */
export type EmailExchangeLanguageEnum = 'ar' | 'bg' | 'cz' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'fi' | 'fr' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'in' | 'it' | 'ja' | 'ko' | 'kz' | 'lt' | 'lv' | 'ms' | 'nb' | 'nl' | 'pl' | 'pt' | 'pt-BR' | 'ro' | 'rs' | 'ru' | 'sk' | 'sl' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh-CN';
/**
 * Get authorized IPs for POP, IMAP and webmail
 */
export interface EmailExchangeExchangeServiceAuthorizedIp {
  /**
   * Authorized IP
   *
   */
  ip?: string;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Authorized IP status
   *
   */
  status?: EmailExchangeAuthorizedIpStatusEnum;
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
 * Exchange domain
 */
export interface EmailExchangeDomain {
  /**
   * Cname that will be checked to prove the domain ownership
   *
   */
  cnameToCheck?: string;
  /**
   * Domain SRV record configured in DNS
   *
   */
  srvRecord?: string[];
  /**
   * If true this is an organization (Exchange 2010 only)
   *
   */
  main?: boolean;
  /**
   * Indicate if this domain is an alias for another domain
   *
   */
  isAliasDomain?: boolean;
  /**
   * Domain validation status
   *
   */
  domainValidated?: boolean;
  /**
   * List of aliases for this domain
   *
   */
  domainAliases?: string[];
  /**
   * Domain MX record configured in DNS
   *
   */
  mxRecord?: string[];
  /**
   * Domain type
   *
   */
  type?: EmailExchangeDomainTypeEnum;
  /**
   * Pending taks id
   *
   */
  taskPendingId?: Number;
  /**
   * If true your dns srv record is valid
   *
   */
  srvIsValid?: boolean;
  /**
   * Domain name
   *
   */
  name?: string;
  /**
   * If specified, emails to not existing address will be redirected to that domain
   *
   */
  mxRelay?: string;
  /**
   * If true your dns mx configuration is valid
   *
   */
  mxIsValid?: boolean;
  /**
   * Domain state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * If specified, indicates to which organization this domain belongs (Exchange 2010 only)
   *
   */
  organization2010?: string;
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Outlook url
 */
export interface EmailExchangeOutlookUrl {
  /**
   * Serial number
   *
   */
  serial?: string;
  /**
   * Url expiration date
   *
   */
  expiration?: Date;
  /**
   * Outlook url
   *
   */
  url?: string;
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
  creationDate?: Date;
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
   * Account id
   *
   */
  allowedAccountId?: Number;
  /**
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Access right set for the account
   *
   */
  accessRights?: EmailExchangePublicFolderRightTypeEnum;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange Account Diagnosis
 */
export interface EmailExchangeExchangeAccountDiagnosis {
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
   * Last performed diagnostics date
   *
   */
  lastCheck?: Date;
  /**
   * Determines if ingoing message has been received
   *
   */
  canReceiveEmail?: boolean;
  /**
   * Determines if account is suspended
   *
   */
  isSuspended?: boolean;
  /**
   * Determines if outgoing message has been delivered
   *
   */
  canSendEmail?: boolean;
  /**
   * Determines if SRV (autodiscovery) record for account's domain is properly set
   *
   */
  isSrvValid?: boolean;
  /**
   * Determines if account is locked
   *
   */
  isLocked?: boolean;
  /**
   * Determines if possible to authenticate with credentials
   *
   */
  connectiveOWA?: boolean;
}
/**
 * Protocol access policy for this Exchange service
 */
export interface EmailExchangeExchangeServiceProtocol {
  /**
   * POP protocol enabled on this Exchange service
   *
   */
  POP?: boolean;
  /**
   * IMAP protocol enabled on this Exchange service
   *
   */
  IMAP?: boolean;
  /**
   * Web mail protocol enabled on this Exchange service
   *
   */
  webMail?: boolean;
  /**
   * ActiveSync protocol enabled on this Exchange service
   *
   */
  activeSync?: boolean;
  /**
   * Last update date
   *
   */
  lastUpdate?: Date;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * ActiveSync policy to apply at device's first connection
   *
   */
  activeSyncPolicy?: EmailExchangeActiveSyncPolicyEnum;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Public folder type
 */
export type EmailExchangePublicFolderTypeEnum = 'calendar' | 'contacts' | 'plain' | 'tasks';
/**
 * External contact for this exchange service
 */
export interface EmailExchangeExchangeExternalContact {
  /**
   * Contact last name
   *
   */
  lastName?: string;
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
   * Contact initals
   *
   */
  initials?: string;
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
   * Contact id
   *
   */
  id?: Number;
  /**
   * Contact state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * If specified, indicates to which organization this external contact belongs (Exchange 2010 only)
   *
   */
  organization2010?: string;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get email addresses subscribed to ActiveSync quarantine notifications
 */
export interface EmailExchangeExchangeServiceActiveSyncNotification {
  /**
   * Notified Account Id
   *
   */
  notifiedAccountId?: Number;
  /**
   * Email state
   *
   */
  state?: EmailExchangeActiveSyncNotificationStateEnum;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Primary email address for notified account
   *
   */
  primaryEmailAddress?: string;
}
/**
 * Mailing list members
 */
export interface EmailExchangeExchangeDistributionGroupMember {
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
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Member account id
   *
   */
  memberAccountId?: Number;
  /**
   * Pending task id
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
  expiration?: Date;
  /**
   * Export url
   *
   */
  url?: string;
}
/**
 * Exchange service
 */
export interface EmailExchangeExchangeService {
  /**
   * Maximum message size that You can receive in MB
   *
   */
  maxReceiveSize?: Number;
  /**
   * minimum number of days before able to change account's password
   *
   */
  minPasswordAge?: Number;
  /**
   * Update date
   *
   */
  lastUpdateDate?: Date;
  /**
   * service displayName
   *
   */
  displayName?: string;
  /**
   */
  sslExpirationDate?: Date;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * maximum number of days that account's password is valid before expiration
   *
   */
  maxPasswordAge?: Number;
  /**
   * enable policy for strong and secure passwords
   *
   */
  complexityEnabled?: boolean;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: EmailExchangeSpamAndVirusConfiguration;
  /**
   */
  offer?: EmailExchangeServiceOfferEnum;
  /**
   * Maximum message size that You can send in MB
   *
   */
  maxSendSize?: Number;
  /**
   */
  hostname?: string;
  /**
   * number of historical password that cannot be reused
   *
   */
  passwordHistoryCount?: Number;
  /**
   * number of attempts before account to be locked
   *
   */
  lockoutThreshold?: Number;
  /**
   * number of minutes account will remain locked if it occurs
   *
   */
  lockoutDuration?: Number;
  /**
   * minimum number of characters password must contain
   *
   */
  minPasswordLength?: Number;
  /**
   * URL for web interface
   *
   */
  webUrl?: string;
  /**
   */
  domain?: string;
  /**
   */
  state?: EmailExchangeServiceStateEnum;
  /**
   * number of minutes that must elapse after a failed logon to reset lockout trigger
   *
   */
  lockoutObservationWindow?: Number;
}
/**
 * Activesync action
 */
export type EmailExchangeActiveSyncPolicyEnum = 'allow' | 'block' | 'quarantine';
/**
 * Outlook version
 */
export type EmailExchangeOutlookVersionEnum = 'mac_x86_2011' | 'mac_x86_2016' | 'windows_x64_2013' | 'windows_x64_2016' | 'windows_x86_2013' | 'windows_x86_2016';
/**
 * Get shared account quota usage in total available space
 */
export interface EmailExchangeSharedAccountQuota {
  /**
   * currently used space in KB within all shared accounts
   *
   */
  quotaUsed?: Number;
  /**
   * space in MB already reserved from the quota limit
   *
   */
  quotaReserved?: Number;
  /**
   * total amount of space in MB for shared accounts within organization
   *
   */
  quotaLimit?: Number;
}
/**
 * Join distribution group restriction status
 */
export type EmailExchangeMailingListJoinRestrictionEnum = 'approvalRequired' | 'closed' | 'open';
/**
 * Level of access to calendar of Resource Mailbox
 */
export type EmailExchangeShowMeetingDetailsEnum = 'availabilityOnly' | 'limitedDetails' | 'reviewer';
/**
 * Service Offer name
 */
export type EmailExchangeServiceOfferEnum = 'dedicated' | 'dedicatedCluster' | 'hosted' | 'provider';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
}
/**
 * Renew period
 */
export type EmailExchangeRenewPeriodEnum = 'monthly' | 'yearly';
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Authorized IP State
 */
export type EmailExchangeAuthorizedIpStatusEnum = 'creating' | 'deleting' | 'ok';
/**
 * Exchange account license per day
 */
export interface EmailExchangeDailyLicense {
  /**
   */
  date?: Date;
  /**
   */
  outlookQuantity?: Number;
  /**
   */
  accountLicense?: EmailExchangeAccountLicense[];
}
/**
 * Exchange shared mailbox
 */
export interface EmailExchangeSharedAccount {
  /**
   * Shared account last name
   *
   */
  lastName?: string;
  /**
   * Account was sending spam
   *
   */
  spamDetected?: boolean;
  /**
   * Shared account display name
   *
   */
  displayName?: string;
  /**
   * Shared account initials
   *
   */
  initials?: string;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: Number;
  /**
   * Enable or disable anti-virus and anti-spam
   *
   */
  mailingFilter?: EmailExchangeMailingFilterEnum[];
  /**
   * Shared mailbox usage
   *
   */
  currentUsage?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Pending task for this shared account
   *
   */
  taskPendingId?: Number;
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
   * Last logoff
   *
   */
  lastLogoffDate?: Date;
  /**
   * Shared account state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Shared account id
   *
   */
  id?: Number;
  /**
   * Last logon
   *
   */
  lastLogonDate?: Date;
}
/**
 * Exchange task details
 */
export interface EmailExchangeTask {
  /**
   * Function name
   *
   */
  function?: EmailExchangeTaskFunctionEnum;
  /**
   * Creation date
   *
   */
  todoDate?: Date;
  /**
   * Completion date
   *
   */
  finishDate?: Date;
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
}
/**
 * Mailing list
 */
export interface EmailExchangeMailingList {
  /**
   * Maximum receive email size in MB
   *
   */
  maxReceiveSize?: Number;
  /**
   * Account was sending spam
   *
   */
  spamDetected?: boolean;
  /**
   * Name displayed in Global Access List
   *
   */
  displayName?: string;
  /**
   * Update date
   *
   */
  lastUpdateDate?: Date;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: Number;
  /**
   * If true sender has to authenticate
   *
   */
  senderAuthentification?: boolean;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Maximum send email size in MB
   *
   */
  maxSendSize?: Number;
  /**
   * The mailing list address
   *
   */
  mailingListAddress?: string;
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
   * Mailing list state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Depart restriction policy
   *
   */
  departRestriction?: EmailExchangeMailingListDepartRestrictionEnum;
}
/**
 * Exchange commercial version
 */
export type EmailExchangeExchangeCommercialVersionEnum = '2010' | '2013' | '2016';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  contactBilling?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactAdmin?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  expiration?: Date;
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Current object state
 */
export type EmailExchangeObjectStateEnum = 'creating' | 'deleting' | 'internalMigration' | 'ok' | 'reopening' | 'suspended' | 'suspending';
/**
 * Get protocol status on that mailbox
 */
export interface EmailExchangeExchangeAccountProtocol {
  /**
   * POP protocol enabled on that mailbox
   *
   */
  POP?: boolean;
  /**
   * IMAP protocol enabled on that mailbox
   *
   */
  IMAP?: boolean;
  /**
   * Web mail enabled on that mailbox
   *
   */
  webMail?: boolean;
  /**
   * Mobile access enabled on that mailbox
   *
   */
  activeSync?: boolean;
  /**
   * Last update date
   *
   */
  lastUpdate?: Date;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get public folder quota usage in total available space
 */
export interface EmailExchangePublicFolderQuota {
  /**
   * currently used space in MB within all public folders
   *
   */
  quotaUsed?: Number;
  /**
   * space in MB already reserved from the quota limit
   *
   */
  quotaReserved?: Number;
  /**
   * total amount of space in MB for public folders within organization
   *
   */
  quotaLimit?: Number;
}
/**
 * Mailing filter options availlable
 */
export type EmailExchangeMailingFilterEnum = 'vaderetro';
/**
 * Spam and Antyvirus configuration
 */
export interface EmailExchangeSpamAndVirusConfiguration {
  /**
   * If message is a virus change its subject
   *
   */
  tagVirus?: boolean;
  /**
   * If message is a spam change its subject
   *
   */
  tagSpam?: boolean;
  /**
   * Check DKIM of message
   *
   */
  checkDKIM?: boolean;
  /**
   * If message is a spam delete it
   *
   */
  deleteSpam?: boolean;
  /**
   * Check SPF of message
   *
   */
  checkSPF?: boolean;
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
}
/**
 * Export PST file request
 */
export interface EmailExchangeExport {
  /**
   * Percentage of export PST request completion
   *
   */
  percentComplete?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Public folder right type
 */
export type EmailExchangePublicFolderRightTypeEnum = 'editor' | 'none' | 'reviewer';
/**
 * function enumeration for exchange task
 */
export type EmailExchangeTaskFunctionEnum = 'activateSharepoint' | 'addAccount' | 'addAccountArchive' | 'addActiveSyncMailNotification' | 'addAlias' | 'addDistributionGroup' | 'addDistributionGroupManager' | 'addDistributionGroupMember' | 'addDistributionGroupSendAs' | 'addDistributionGroupSendOnBehalfTo' | 'addDomain' | 'addDomainDisclaimer' | 'addExchangeServiceAuthorizedIp' | 'addExportPstRequest' | 'addExternalContact' | 'addFullAccess' | 'addOutlookLicense' | 'addPublicFolder' | 'addPublicFolderPermission' | 'addResourceAccount' | 'addResourceDelegate' | 'addSendAs' | 'addSendOnBehalfTo' | 'addSharedAccount' | 'addSharedAccountFullAccess' | 'addSharedAccountSendAs' | 'addSharedAccountSendOnBehalfTo' | 'changeHostname' | 'changePassword' | 'clearDataOnDevice' | 'cloneTemplateExchangePrivate' | 'configureExchangeCustomer' | 'deleteAccount' | 'deleteAccountArchive' | 'deleteActiveSyncMailNotification' | 'deleteAlias' | 'deleteDistributionGroup' | 'deleteDistributionGroupManager' | 'deleteDistributionGroupMember' | 'deleteDistributionGroupSendAs' | 'deleteDistributionGroupSendOnBehalfTo' | 'deleteDomain' | 'deleteDomainDisclaimer' | 'deleteExchangeService' | 'deleteExchangeServiceAuthorizedIp' | 'deleteExportPstRequest' | 'deleteExternalContact' | 'deleteFullAccess' | 'deleteOutlookLicense' | 'deletePublicFolder' | 'deletePublicFolderPermission' | 'deleteResourceAccount' | 'deleteResourceDelegate' | 'deleteSendAs' | 'deleteSendOnBehalfTo' | 'deleteSharedAccount' | 'deleteSharedAccountFullAccess' | 'deleteSharedAccountSendAs' | 'deleteSharedAccountSendOnBehalfTo' | 'destroyPrivateVm' | 'diagnoseAccount' | 'expandDrive' | 'generateOutlookUrl' | 'generatePstUrl' | 'installExchange' | 'installSSL' | 'maintenance' | 'migrationAccount' | 'migrationDisclaimer' | 'migrationExternalContact' | 'migrationHistory' | 'migrationMailingList' | 'migrationResourceAccount' | 'migrationService' | 'reOpenHostedAccount' | 'reOpenOutlookLicense' | 'reOpenPrivateAccount' | 'reOpenPrivateVm' | 'setAccount' | 'setAccountArchive' | 'setAlias' | 'setDistributionGroup' | 'setDns' | 'setDomain' | 'setDomainDisclaimer' | 'setExchangeAccountProtocol' | 'setExchangeServiceDevice' | 'setExternalContact' | 'setPublicFolder' | 'setPublicFolderPermission' | 'setResourceAccount' | 'setService' | 'setSharedAccount' | 'suspendAccount' | 'suspendExchangeService' | 'suspendHostedAccount' | 'suspendOutlookLicense' | 'suspendPrivateAccount' | 'suspendPrivateVm' | 'unsuspendAccount' | 'unsuspendExchangeService' | 'unsuspendHostedAccount' | 'updateExchangeServiceDevice' | 'upgrade2016';
/**
 * Exchange resource account
 */
export interface EmailExchangeResourceAccount {
  /**
   * resource as email
   *
   */
  resourceEmailAddress?: string;
  /**
   * maximum duration in minutes for meeting requests
   *
   */
  maximumDuration?: Number;
  /**
   * name of resource
   *
   */
  displayName?: string;
  /**
   * remove any text in the message body of incoming meeting requests on resourceAccount
   *
   */
  deleteComments?: boolean;
  /**
   * resource type
   *
   */
  type?: EmailExchangeResourceTypeEnum;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * number of the same equipment or capacity of a room
   *
   */
  capacity?: Number;
  /**
   * meeting organizer's name is used as the subject of the meeting request
   *
   */
  addOrganizerToSubject?: boolean;
  /**
   * remove email subject of incoming meeting requests on resourceAccount
   *
   */
  deleteSubject?: boolean;
  /**
   * maximum number of days in advance that the resource can be reserved
   *
   */
  bookingWindow?: Number;
  /**
   * resource can be scheduled by more than one person during the same time period
   *
   */
  allowConflict?: boolean;
  /**
   * resource location name
   *
   */
  location?: string;
  /**
   * account state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * granted right on a calendar of that resourceAccount
   *
   */
  showMeetingDetails?: EmailExchangeShowMeetingDetailsEnum;
}
/**
 * Subscription state
 */
export type EmailExchangeActiveSyncNotificationStateEnum = 'creating' | 'deleting' | 'ok';
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Server State
 */
export type EmailExchangeServerStateEnum = 'configurationPending' | 'notConfigured' | 'ok';
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
   * Delegate account primaryEmailAddress
   *
   */
  delegateEmailAddress?: string;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange task status
 */
export type EmailExchangeTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Exchange Account Archive
 */
export interface EmailExchangeExchangeAccountArchive {
  /**
   * Archive mailbox maximum size in GB
   *
   */
  quota?: Number;
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
   * Archive mailbox state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Pending task for this archive mailbox
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange organization public folder
 */
export interface EmailExchangePublicFolder {
  /**
   * Time for which public folder was accessed for the last time
   *
   */
  lastAccessTime?: Date;
  /**
   * Time for which public folder was modified for the last time
   *
   */
  lastModificationTime?: Date;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Type for public folder
   *
   */
  type?: EmailExchangePublicFolderTypeEnum;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Number of items in public folder
   *
   */
  itemCount?: Number;
  /**
   * If true, this public folder has subfolders
   *
   */
  hasSubFolders?: boolean;
  /**
   * Path for public folder
   *
   */
  path?: string;
  /**
   * Access right for the guest users
   *
   */
  anonymousPermission?: EmailExchangePublicFolderRightTypeEnum;
  /**
   * Quota for public folder in MB
   *
   */
  quota?: Number;
  /**
   * Time for which public folder was modified for the last time by the user
   *
   */
  lastUserModificationTime?: Date;
  /**
   * Default access right
   *
   */
  defaultPermission?: EmailExchangePublicFolderRightTypeEnum;
  /**
   * Sum of all items in public folder in MB
   *
   */
  totalItemSize?: Number;
  /**
   * Time for which public folder was accessed for the last time by the user
   *
   */
  lastUserAccessTime?: Date;
  /**
   */
  state?: EmailExchangeObjectStateEnum;
}
/**
 * Mailing list managers
 */
export interface EmailExchangeExchangeDistributionGroupManager {
  /**
   * Member account primaryEmailAddress
   *
   */
  managerEmailAddress?: string;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
  /**
   * Manager account id
   *
   */
  managerAccountId?: Number;
}
/**
 * Exchange organization disclaimer
 */
export interface EmailExchangeDisclaimer {
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
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Signature, added at the bottom of your organization emails
   *
   */
  content?: string;
  /**
   * task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Get the list of your ActiveSync devices registered on this Exchange service
 */
export interface EmailExchangeExchangeServiceDevice {
  /**
   * Exchange identity
   *
   */
  identity?: string;
  /**
   * Last update date
   *
   */
  lastUpdate?: Date;
  /**
   * user guid
   *
   */
  guid?: string;
  /**
   * International Mobile Equipment Identity
   *
   */
  IMEI?: string;
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
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Device Id
   *
   */
  deviceId?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Exchange Service State
 */
export type EmailExchangeServiceStateEnum = 'inMaintenance' | 'ok' | 'suspended';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Exchange mailbox
 */
export interface EmailExchangeAccount {
  /**
   * Account last name
   *
   */
  lastName?: string;
  /**
   * Account was sending spam
   *
   */
  spamDetected?: boolean;
  /**
   * Outlook licence
   *
   */
  outlookLicense?: boolean;
  /**
   * Account display name
   *
   */
  displayName?: string;
  /**
   * Last update
   *
   */
  lastUpdateDate?: Date;
  /**
   * Time of account's password last update
   *
   */
  passwordLastUpdate?: Date;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: Number;
  /**
   * Account login
   *
   */
  login?: string;
  /**
   * Default email for this mailbox
   *
   */
  primaryEmailAddress?: string;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: EmailExchangeSpamAndVirusConfiguration;
  /**
   * OWA policy restriction is applied
   *
   */
  owaLimited?: boolean;
  /**
   * Hide account in Global Address List
   *
   */
  hiddenFromGAL?: boolean;
  /**
   * Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox.
   *
   */
  litigationPeriod?: Number;
  /**
   * Account maximum size
   *
   */
  quota?: Number;
  /**
   * Company name
   *
   */
  company?: string;
  /**
   * Account state
   *
   */
  state?: EmailExchangeObjectStateEnum;
  /**
   * Account id
   *
   */
  id?: Number;
  /**
   * expiration date
   *
   */
  expirationDate?: Date;
  /**
   * Indicates if the account is configured
   *
   */
  configured?: boolean;
  /**
   * change the renew period for outlook
   *
   */
  renewOutlookPeriod?: EmailExchangeRenewPeriodEnum;
  /**
   * delete at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * expiration date
   *
   */
  expirationOutlookDate?: Date;
  /**
   * Account initials
   *
   */
  initial?: string;
  /**
   * Enable or disable anti-virus and anti-spam
   *
   */
  mailingFilter?: EmailExchangeMailingFilterEnum[];
  /**
   * Mailbox usage
   *
   */
  currentUsage?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * delete outlook at expiration
   *
   */
  deleteOutlookAtExpiration?: boolean;
  /**
   * Pending task for this account
   *
   */
  taskPendingId?: Number;
  /**
   * Exchange account type
   *
   */
  accountLicense?: EmailExchangeOvhLicenceEnum;
  /**
   * Account first name
   *
   */
  firstName?: string;
  /**
   * change the renew period
   *
   */
  renewPeriod?: EmailExchangeRenewPeriodEnum;
  /**
   * Litigation hold feature enabled on this mailbox
   *
   */
  litigation?: boolean;
  /**
   * Email domain
   *
   */
  domain?: string;
  /**
   * Last logoff
   *
   */
  lastLogoffDate?: Date;
  /**
   * GUID for user in active directory
   *
   */
  guid?: string;
  /**
   * SAM account name
   *
   */
  SAMAccountName?: string;
  /**
   * Last logon
   *
   */
  lastLogonDate?: Date;
  /**
   * exchangeGuid for manual configuration
   *
   */
  exchangeGuid?: string;
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Resource Type
 */
export type EmailExchangeResourceTypeEnum = 'equipment' | 'room';
/**
 * Domain type
 */
export type EmailExchangeDomainTypeEnum = 'authoritative' | 'nonAuthoritative';
/**
 * Depart distribution group restriction status
 */
export type EmailExchangeMailingListDepartRestrictionEnum = 'closed' | 'open';
type PathsemailexchangeGET = '/email/exchange' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification' | 
'/email/exchange/{organizationName}/service/{exchangeService}/protocol' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/license' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/device' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact' | 
'/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability' | 
'/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute' | 
'/email/exchange/{organizationName}/service/{exchangeService}/task/{id}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/task' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias' | 
'/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails' | 
'/email/exchange/{organizationName}/service/{exchangeService}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/server' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}' | 
'/email/exchange/{organizationName}/service';

type PathsemailexchangePUT = '/email/exchange/{organizationName}/service/{exchangeService}/protocol' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/server' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}';

type PathsemailexchangePOST = '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission' | 
'/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact' | 
'/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' | 
'/email/exchange/{organizationName}/service/{exchangeService}/changeHostname' | 
'/email/exchange/{organizationName}/service/{exchangeService}/renewSSL' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias' | 
'/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts' | 
'/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo';

type PathsemailexchangeDELETE = '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}' | 
'/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}';

class Apiemailexchange extends ApiCommon {
  /**
  Operations about the MSSERVICES service
  List available services
  **/
  public get(path: '/email/exchange', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Get email addresses subscribed to ActiveSync quarantine notifications
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, notifiedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeServiceActiveSyncNotification>;
  /**
  List the email.exchange.exchangeServiceActiveSyncNotification objects
  Exchange account id subscribed to ActiveSync quarantine notifications
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<Number[]>;
  /**
  Protocol access policy for this Exchange service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<EmailExchangeExchangeServiceProtocol>;
  /**
  Resource accounts delegates
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, resourceEmailAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeResourceAccountDelegate>;
  /**
  List the email.exchange.exchangeResourceAccountDelegate objects
  Resource account manager
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate', pathParams: {organizationName?: string, exchangeService?: string, resourceEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Exchange resource account
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, resourceEmailAddress?: string}, queryParams: null): Promise<EmailExchangeResourceAccount>;
  /**
  List the email.exchange.resourceAccount objects
  Resource account associated to this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {resourceEmailAddress?: string}): Promise<string[]>;
  /**
  Outlook url
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<EmailExchangeOutlookUrl>;
  /**
  Get protocol status on that mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<EmailExchangeExchangeAccountProtocol>;
  /**
  Users having full access on this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeAccountFullAccess>;
  /**
  List the email.exchange.exchangeAccountFullAccess objects
  Full access granted users for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Exchange Account Archive
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<EmailExchangeExchangeAccountArchive>;
  /**
  List the email.exchange.exchangeAccountSendOnBehalfTo objects
  SendOnBehalfTo granted users for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeAccountSendOnBehalfTo>;
  /**
  List the email.exchange.exchangeAccountSendAs objects
  Send as granted users for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Users authorized to send mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeAccountSendAs>;
  /**
  Export PST file url
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<EmailExchangeExportUrl>;
  /**
  List the email.exchange.Task objects
  Pending task for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Exchange task details
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, id?: Number}, queryParams: null): Promise<EmailExchangeTask>;
  /**
  Export PST file request
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<EmailExchangeExport>;
  /**
  Exchange mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<EmailExchangeAccount>;
  /**
  List the email.exchange.exchangeAccountAlias objects
  Aliases associated to this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<string[]>;
  /**
  Aliases on this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, alias?: string}, queryParams: null): Promise<EmailExchangeExchangeAccountAlias>;
  /**
  Exchange Account Diagnosis
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null): Promise<EmailExchangeExchangeAccountDiagnosis>;
  /**
  List the email.exchange.Account objects
  Accounts associated to this exchange service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/account', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {accountLicense?: EmailExchangeOvhLicenceEnum, id?: Number, primaryEmailAddress?: string}): Promise<string[]>;
  /**
  license operations
  Get active licenses for specific period of time
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/license', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {fromDate?: Date, license?: EmailExchangeOvhLicenceEnum, toDate?: Date}): Promise<EmailExchangeDailyLicense[]>;
  /**
  publicFolderQuota operations
  Get public folder quota usage in total available space
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<EmailExchangePublicFolderQuota>;
  /**
  List the email.exchange.publicFolder objects
  Public folders associated to this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {path?: string}): Promise<string[]>;
  /**
  Exchange organization public folder
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', pathParams: {organizationName?: string, exchangeService?: string, path?: string}, queryParams: null): Promise<EmailExchangePublicFolder>;
  /**
  List the email.exchange.exchangePublicFolderPermission objects
  Public folder permission
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission', pathParams: {organizationName?: string, exchangeService?: string, path?: string}, queryParams: null): Promise<Number[]>;
  /**
  Exchange organization public folder permission
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, path?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangePublicFolderPermission>;
  /**
  Get the list of your ActiveSync devices registered on this Exchange service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}', pathParams: {organizationName?: string, exchangeService?: string, identity?: string}, queryParams: null): Promise<EmailExchangeExchangeServiceDevice>;
  /**
  List the email.exchange.exchangeServiceDevice objects
  List of your ActiveSync devices registered on this Exchange service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/device', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {deviceState?: EmailExchangeDeviceActiveSyncStateEnum, IMEI?: string, identity?: string}): Promise<string[]>;
  /**
  External contact for this exchange service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, externalEmailAddress?: string}, queryParams: null): Promise<EmailExchangeExchangeExternalContact>;
  /**
  List the email.exchange.exchangeExternalContact objects
  External contacts for this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {lastName?: string, firstName?: string, id?: Number, externalEmailAddress?: string, displayName?: string}): Promise<string[]>;
  /**
  outlookAvailability operations
  Show available outlooks
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {outlookLanguage?: EmailExchangeLanguageEnum, outlookVersion?: EmailExchangeOutlookVersionEnum}): Promise<EmailExchangeOutlookVersions[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the email.exchange.Domain objects
  Domains associated to this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {state?: EmailExchangeObjectStateEnum, main?: boolean}): Promise<string[]>;
  /**
  Exchange domain
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', pathParams: {organizationName?: string, exchangeService?: string, domainName?: string}, queryParams: null): Promise<EmailExchangeDomain>;
  /**
  Exchange organization disclaimer
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', pathParams: {organizationName?: string, exchangeService?: string, domainName?: string}, queryParams: null): Promise<EmailExchangeDisclaimer>;
  /**
  disclaimerAttribute operations
  Get diclaimer attributes to substitute with Active Directory properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute', pathParams: {organizationName?: string, exchangeService?: string, domainName?: string}, queryParams: null): Promise<EmailExchangeDisclaimerAttributeEnum[]>;
  /**
  Exchange task details
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/task/{id}', pathParams: {organizationName?: string, exchangeService?: string, id?: Number}, queryParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.Task objects
  Pending actions
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/task', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<Number[]>;
  /**
  sharedAccountQuota operations
  Get shared account quota usage in total available space
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<EmailExchangeSharedAccountQuota>;
  /**
  List the email.exchange.mailingList objects
  Mailing list for this service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {mailingListAddress?: string}): Promise<string[]>;
  /**
  List the email.exchange.exchangeDistributionGroupManager objects
  Mailing list account manager
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Mailing list managers
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, managerAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeDistributionGroupManager>;
  /**
  Mailing list
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null): Promise<EmailExchangeMailingList>;
  /**
  List the email.exchange.exchangeDistributionGroupMember objects
  Mailing list account member
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Mailing list members
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, memberAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeDistributionGroupMember>;
  /**
  List the email.exchange.exchangeDistributionGroupMember objects
  Mailing list contact member
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Mailing list members
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, memberContactId?: Number}, queryParams: null): Promise<EmailExchangeExchangeDistributionGroupMember>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeDistributionGroupSendAs>;
  /**
  List the email.exchange.exchangeDistributionGroupSendAs objects
  sendAs
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects
  sendOnBehalfTo
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this mailing list
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeDistributionGroupSendOnBehalfTo>;
  /**
  Get aliases on this mailingList
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, alias?: string}, queryParams: null): Promise<EmailExchangeExchangeMailingListAlias>;
  /**
  List the email.exchange.exchangeMailingListAlias objects
  Aliases associated to this mailingList
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null): Promise<string[]>;
  /**
  dcvEmails operations
  Get DCV emails if your ssl will expire in next 30 days
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<string[]>;
  /**
  Exchange service
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<EmailExchangeExchangeService>;
  /**
  Exchange server
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/server', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null): Promise<EmailExchangeServer>;
  /**
  List the email.exchange.sharedAccount objects
  Shared accounts associated to this exchange service
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: {sharedEmailAddress?: string}): Promise<string[]>;
  /**
  Exchange shared mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null): Promise<EmailExchangeSharedAccount>;
  /**
  Users having full access on this shared mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeSharedAccountFullAccess>;
  /**
  List the email.exchange.exchangeSharedAccountFullAccess objects
  Full access granted users for this shared mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Users authorized to send mails from this shared mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeSharedAccountSendAs>;
  /**
  List the email.exchange.exchangeSharedAccountSendAs objects
  Send as granted users for this shared mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this shared mailbox
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailExchangeExchangeSharedAccountSendOnBehalfTo>;
  /**
  List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects
  SendOnBehalfTo granted users for this shared mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the email.exchange.Task objects
  Pending task for this mailbox
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null): Promise<Number[]>;
  /**
  Exchange task details
  Get this object properties
  **/
  public get(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string, id?: Number}, queryParams: null): Promise<EmailExchangeTask>;
  /**
  Operations about the EXCHANGE service
  List available services
  **/
  public get(path: '/email/exchange/{organizationName}/service', pathParams: {organizationName?: string}, queryParams: null): Promise<string[]>;
  public get(path: PathsemailexchangeGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Protocol access policy for this Exchange service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange resource account
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, resourceEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Get protocol status on that mailbox
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange Account Archive
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange mailbox
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange organization public folder
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', pathParams: {organizationName?: string, exchangeService?: string, path?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange organization public folder permission
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, path?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Get the list of your ActiveSync devices registered on this Exchange service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}', pathParams: {organizationName?: string, exchangeService?: string, identity?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  External contact for this exchange service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, externalEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange domain
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', pathParams: {organizationName?: string, exchangeService?: string, domainName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange organization disclaimer
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', pathParams: {organizationName?: string, exchangeService?: string, domainName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Mailing list
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange service
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange server
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/server', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Exchange shared mailbox
  Alter this object properties
  **/
  public put(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsemailexchangePUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  List the email.exchange.exchangeServiceActiveSyncNotification objects
  Subscribe new address to ActiveSync quarantine notifications
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeResourceAccountDelegate objects
  add new resource account delegate in exchange server
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate', pathParams: {organizationName?: string, exchangeService?: string, resourceEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.resourceAccount objects
  create new resource account in exchange server
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Outlook url
  Generate outlook url
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  changePassword operations
  Change mailbox password
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeAccountFullAccess objects
  Allow full access to a user
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange Account Archive
  Create new archive mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeAccountSendOnBehalfTo objects
  Allow another user to Send On Behalf To mails from this mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeAccountSendAs objects
  Allow another user to send mails from this mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Export PST file url
  Generate temporary url to PST file
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Export PST file request
  Request PST file for the account
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeAccountAlias objects
  Create new alias
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange Account Diagnosis
  Create new diagnosis request
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  terminate operations
  Terminate account at expiration date
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the email.exchange.Account objects
  Create new mailbox in exchange server
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/account', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.publicFolder objects
  Create organization public folder
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangePublicFolderPermission objects
  Create public folder permission
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission', pathParams: {organizationName?: string, exchangeService?: string, path?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  clearDevice operations
  Executes a factory reset on the device. THIS OPERATION CANNOT BE REVERSED, ALL DATA ON THE DEVICE WILL BE LOST.
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice', pathParams: {organizationName?: string, exchangeService?: string, identity?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeExternalContact objects
  create new external contact
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  activateSharepoint operations
  Activate Sharepoint infra connected to this exchange service
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.Domain objects
  Create new domain in exchange services
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange organization disclaimer
  Create organization disclaimer of each email
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', pathParams: {organizationName?: string, exchangeService?: string, domainName?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  changeHostname operations
  Setting SSL hostname for Exchange private offer
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/changeHostname', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  renewSSL operations
  Renew SSL if it will expire in next 30 days
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/renewSSL', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.mailingList objects
  Add mailing list
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupManager objects
  Add new mailing list manager
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupMember objects
  Add new mailing list member
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupMember objects
  Add new mailing list member
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupSendAs objects
  Allow another user to Send aso mails from this mailing list
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects
  Allow another user to Send aso mails from this mailing list
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeMailingListAlias objects
  Create new alias
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  updateFlagsOnAllAccounts operations
  Update spam and virus flags on all active accounts
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  updateDeviceList operations
  Update device list
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.sharedAccount objects
  Create new shared mailbox in exchange server
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount', pathParams: {organizationName?: string, exchangeService?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeSharedAccountFullAccess objects
  Allow full access to a user
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeSharedAccountSendAs objects
  Allow another user to send mails from this shared mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects
  Allow another user to Send On Behalf To mails from this shared mailbox
  **/
  public post(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  public post(path: PathsemailexchangePOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Get email addresses subscribed to ActiveSync quarantine notifications
  Unubscribe address from ActiveSync quarantine notifications
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, notifiedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Resource accounts delegates
  delete existing resource account delegate in exchange server
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, resourceEmailAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange resource account
  delete existing resource account in exchange server
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, resourceEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Users having full access on this mailbox
  Revoke full access
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange Account Archive
  Delete existing archive mailbox
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Users authorized to send mails from this mailbox
  Delete allowed user for sendAs
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Export PST file request
  Remove request of PST file
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange mailbox
  Delete existing mailbox in exchange server
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Aliases on this mailbox
  Delete existing alias
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}', pathParams: {organizationName?: string, exchangeService?: string, primaryEmailAddress?: string, alias?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange organization public folder
  Delete existing organization public folder
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}', pathParams: {organizationName?: string, exchangeService?: string, path?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange organization public folder permission
  Delete existing permission from public folder
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, path?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  External contact for this exchange service
  delete external contact
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, externalEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange domain
  Delete existing domain in exchange services
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}', pathParams: {organizationName?: string, exchangeService?: string, domainName?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange organization disclaimer
  Delete existing organization disclaimer
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer', pathParams: {organizationName?: string, exchangeService?: string, domainName?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Mailing list managers
  Delete mailing list manager
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, managerAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Mailing list
  Delete mailing list
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Mailing list members
  Delete mailing list member
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, memberAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Mailing list members
  Delete mailing list member
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, memberContactId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Delete allowed user for SendAs
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailing list
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Get aliases on this mailingList
  Delete existing alias
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}', pathParams: {organizationName?: string, exchangeService?: string, mailingListAddress?: string, alias?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Exchange shared mailbox
  Delete existing shared mailbox in exchange server
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Users having full access on this shared mailbox
  Revoke full access
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Users authorized to send mails from this shared mailbox
  Delete allowed user for sendAs
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  /**
  Get users authorized to Send On Behalf To mails from this shared mailbox
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}', pathParams: {organizationName?: string, exchangeService?: string, sharedEmailAddress?: string, allowedAccountId?: Number}, queryParams: null, bodyParams: null): Promise<EmailExchangeTask>;
  public delete(path: PathsemailexchangeDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

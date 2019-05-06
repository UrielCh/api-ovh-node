import { ApiCommon } from '@ovh-api/common';
/**
 * Active Directory Account
 */
export interface MsServicesAccount {
  /**
   * Account last name
   *
   */
  lastName?: string;
  /**
   * Time of account's password last update
   *
   */
  passwordLastUpdate?: Date;
  /**
   * Last update
   *
   */
  lastUpdateDate?: Date;
  /**
   * Account initials
   *
   */
  initials?: string;
  /**
   * Account display name
   *
   */
  displayName?: string;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Pending task for this account
   *
   */
  taskPendingId?: Number;
  /**
   * Account first name
   *
   */
  firstName?: string;
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
   * Account state
   *
   */
  state?: MsServicesObjectStateEnum;
  /**
   * Account id
   *
   */
  id?: Number;
  /**
   * Last logon
   *
   */
  lastLogonDate?: Date;
  /**
   * User Principal Name
   *
   */
  userPrincipalName?: string;
}
/**
 * Active Directory organizational unit
 */
export interface MsServicesActiveDirectoryOrganizationalUnit {
  /**
   * Service name of the office tenant (/licence/office/{serviceName}) linked to this AD service
   *
   */
  officeTenantServiceName?: string;
  /**
   * Minimum lifespan of passwords, in days (0 = unlimited)
   *
   */
  minPasswordAge?: Number;
  /**
   * Maximum number of password tries before account locking
   *
   */
  lockoutThreshold?: Number;
  /**
   * Account lock time (in minutes) when too much passwords have been tried
   *
   */
  lockoutDuration?: Number;
  /**
   * Minimum number of characters passwords must contain
   *
   */
  minPasswordLength?: Number;
  /**
   * Name of the Active Directory organizational unit
   *
   */
  name?: string;
  /**
   * Current state of the Active Directory organizational unit
   *
   */
  state?: MsServicesServiceStateEnum;
  /**
   * Time (in minutes) before the password attempts counter is reset
   *
   */
  lockoutObservationWindow?: Number;
  /**
   * Flag indicating if passwords should be forced to follow Microsoft's password guidelines
   *
   */
  complexityEnabled?: boolean;
  /**
   * Maximum lifespan of passwords, in days
   *
   */
  maxPasswordAge?: Number;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Temporary link to ADSync software executable
 */
export interface MsServicesActiveDirectorySyncClientUrl {
  /**
   * Link expiration date
   *
   */
  expiration?: Date;
  /**
   * ADSync software executable link
   *
   */
  url?: string;
}
/**
 * Exchange mailbox information
 */
export interface MsServicesExchangeInformation {
  /**
   * Spam activity detected on this mailbox
   *
   */
  spamDetected?: boolean;
  /**
   * Outlook licence attached
   *
   */
  outlookLicense?: boolean;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: Number;
  /**
   * Primary address of the mailbox
   *
   */
  primaryEmailAddress?: string;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: MsServicesSpamAndVirusConfiguration;
  /**
   * OWA policy restriction is applied
   *
   */
  owaLimited?: boolean;
  /**
   * Visibility in Global Address List
   *
   */
  hiddenFromGAL?: boolean;
  /**
   * Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox.
   *
   */
  litigationPeriod?: Number;
  /**
   * Maximum mailbox usage in GB (overall size)
   *
   */
  quota?: Number;
  /**
   * Mailbox state
   *
   */
  state?: MsServicesObjectStateEnum;
  /**
   * Account id
   *
   */
  id?: Number;
  /**
   * Expiration date
   *
   */
  expirationDate?: Date;
  /**
   * Indicates if the account is configured
   *
   */
  configured?: boolean;
  /**
   * Frequency of Outlook license renewals
   *
   */
  renewOutlookPeriod?: MsServicesRenewPeriodEnum;
  /**
   * Delete mailbox at expiration date
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * Expiration date of Outlook license
   *
   */
  expirationOutlookDate?: Date;
  /**
   * Enable or disable anti-virus and anti-spam
   *
   */
  mailingFilter?: MsServicesMailingFilterEnum[];
  /**
   * Mailbox usage in KB
   *
   */
  currentUsage?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Delete Outlook license at expiration date
   *
   */
  deleteOutlookAtExpiration?: boolean;
  /**
   * Pending task id for this account
   *
   */
  taskPendingId?: Number;
  /**
   * Exchange account license
   *
   */
  accountLicense?: MsServicesExchangeLicenceEnum;
  /**
   * Frequency of mailbox license renewals
   *
   */
  renewPeriod?: MsServicesRenewPeriodEnum;
  /**
   * Litigation hold feature enabled on this mailbox
   *
   */
  litigation?: boolean;
  /**
   * Property needed for mailbox manual configuration (GUID)
   *
   */
  exchangeGuid?: string;
}
/**
 * Exchange account licence
 */
export type MsServicesExchangeLicenceEnum = 'basic' | 'enterprise' | 'standard';
/**
 * Exchange service
 */
export interface MsServicesExchangeService {
  /**
   * Exchange service offer
   *
   */
  offer?: MsServicesServiceOfferEnum;
  /**
   * Maximum allowable size of sent messages in MB
   *
   */
  maxSendSize?: Number;
  /**
   * Exchange service URL
   *
   */
  hostname?: string;
  /**
   * Maximum allowable size for received messages in MB
   *
   */
  maxReceiveSize?: Number;
  /**
   * Expiration date of SSL certificate
   *
   */
  sslExpirationDate?: Date;
  /**
   * Service family name displayed
   *
   */
  displayName?: string;
  /**
   * Exchange service name
   *
   */
  domain?: string;
  /**
   * Exchange service state
   *
   */
  state?: MsServicesServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: MsServicesSpamAndVirusConfiguration;
}
/**
 * Period of time used to determine license statistics
 */
export type MsServicesLicensePeriodEnum = 'lastMonth' | 'lastQuarter' | 'lastWeek' | 'lastYear';
/**
 * Mailing filter options availlable
 */
export type MsServicesMailingFilterEnum = 'vaderetro';
/**
 * Multi Factor Authentication informations
 */
export interface MsServicesMfaInformation {
  /**
   * Current status of Multi Factor Authentication feature
   *
   */
  state?: MsServicesObjectStateEnum;
  /**
   * Pending task for Multi Factor Authentication
   *
   */
  taskPendingId?: Number;
  /**
   * Indicates if Multi Factor Authentication is activated on this account
   *
   */
  activated?: boolean;
}
/**
 * Current object state
 */
export type MsServicesObjectStateEnum = 'creating' | 'deleting' | 'modifying' | 'ok' | 'reopening' | 'suspended' | 'suspending';
/**
 * Renew period
 */
export type MsServicesRenewPeriodEnum = 'monthly' | 'yearly';
/**
 * Service Offer name
 */
export type MsServicesServiceOfferEnum = 'dedicated' | 'dedicatedCluster' | 'hosted' | 'provider';
/**
 * Service State
 */
export type MsServicesServiceStateEnum = 'creating' | 'deleting' | 'inMaintenance' | 'ok' | 'suspended';
/**
 * Account access rights to the service
 */
export type MsServicesSharepointAccountAccessRightsEnum = 'administrator' | 'user';
/**
 * Sharepoint account license
 */
export interface MsServicesSharepointAccountLicense {
  /**
   */
  license?: MsServicesSharepointLicenseEnum;
  /**
   */
  licenseQuantity?: Number;
}
/**
 * Sharepoint account license per day
 */
export interface MsServicesSharepointDailyLicense {
  /**
   */
  date?: Date;
  /**
   */
  accountLicense?: MsServicesSharepointAccountLicense[];
}
/**
 * Sharepoint account information
 */
export interface MsServicesSharepointInformation {
  /**
   * Indicates if the account is configured
   *
   */
  configured?: boolean;
  /**
   * Sharepoint account license
   *
   */
  license?: MsServicesSharepointLicenseEnum;
  /**
   * delete at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * Active Directory Account id
   *
   */
  activeDirectoryAccountId?: Number;
  /**
   * OneDrive maximum size in byte
   *
   */
  quota?: Number;
  /**
   * OneDrive usage in byte
   *
   */
  currentUsage?: Number;
  /**
   * office license is available
   *
   */
  officeLicense?: boolean;
  /**
   * Sharepoint account id
   *
   */
  id?: Number;
  /**
   * The rights assigned to the sharepoint account
   *
   */
  accessRights?: MsServicesSharepointAccountAccessRightsEnum;
  /**
   * Sharepoint account state
   *
   */
  state?: MsServicesObjectStateEnum;
  /**
   * Pending task for this sharepoint account
   *
   */
  taskPendingId?: Number;
}
/**
 * Sharepoint account license
 */
export type MsServicesSharepointLicenseEnum = 'foundation' | 'standard';
/**
 * Sharepoint service
 */
export interface MsServicesSharepointService {
  /**
   * Sharepoint offer
   *
   */
  offer?: MsServicesSharepointServiceOfferEnum;
  /**
   * Sharepoint farm url
   *
   */
  farmUrl?: string;
  /**
   * Service family name displayed
   *
   */
  displayName?: string;
  /**
   * Internal service name
   *
   */
  domain?: string;
  /**
   * Shared space maximum size in byte
   *
   */
  quota?: Number;
  /**
   * Shared space usage in byte
   *
   */
  currentUsage?: Number;
  /**
   * Sharepoint service state
   *
   */
  state?: MsServicesServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Sharepoint url
   *
   */
  url?: string;
}
/**
 * Sharepoint service
 */
export interface MsServicesSharepointServiceInfo {
  /**
   * Internal service name
   *
   */
  domain?: string;
}
/**
 * Sharepoint service offer name
 */
export type MsServicesSharepointServiceOfferEnum = 'hosted' | 'provider';
/**
 * Spam and Antivirus configuration
 */
export interface MsServicesSpamAndVirusConfiguration {
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
 * Sync account license
 */
export interface MsServicesSyncAccountLicense {
  /**
   * the kind of license under which sync account is contracted
   *
   */
  license?: MsServicesSyncLicenseEnum;
  /**
   * number of license instances
   *
   */
  licenseQuantity?: Number;
}
/**
 * Sync account license per day
 */
export interface MsServicesSyncDailyLicense {
  /**
   * the date used to determine sync account license usage
   *
   */
  date?: Date;
  /**
   * sync account license usage
   *
   */
  accountLicense?: MsServicesSyncAccountLicense[];
}
/**
 * Sync account information
 */
export interface MsServicesSyncInformation {
  /**
   * Indicates if the account is configured
   *
   */
  configured?: boolean;
  /**
   * Sync account license
   *
   */
  license?: MsServicesSyncLicenseEnum;
  /**
   * Sync account state
   *
   */
  state?: MsServicesObjectStateEnum;
  /**
   * Pending task for this sync account
   *
   */
  taskPendingId?: Number;
}
/**
 * Sync account license
 */
export type MsServicesSyncLicenseEnum = 'standard' | 'standardFree';
/**
 * Sync service
 */
export interface MsServicesSyncService {
  /**
   * Exchange service state
   *
   */
  state?: MsServicesServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * Active Directory task details
 */
export interface MsServicesTask {
  /**
   * Function name
   *
   */
  function?: MsServicesTaskFunctionEnum;
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
  status?: MsServicesTaskStatusEnum;
}
/**
 * function enumeration for Active Directory task
 */
export type MsServicesTaskFunctionEnum = 'activateADSync' | 'activateSharepoint' | 'addADAccount' | 'addADOU' | 'addADSyncAccount' | 'addADUPNSuffix' | 'changeADPassword' | 'changeADSyncPassword' | 'deactivateADSync' | 'delADOU' | 'deleteADAccount' | 'deleteADSyncAccount' | 'deleteADUPNSuffix' | 'disableADAccountMfa' | 'disableADAccountMfaTemporary' | 'enableADAccountMfa' | 'enableADSyncAccount' | 'generateADSyncClientUrl' | 'resetADAccountMfa' | 'setADAccount' | 'setPasswordPolicy';
/**
 * ActiveDirectory task status
 */
export type MsServicesTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Active Directory UPN Suffix State
 */
export type MsServicesUPNStateEnum = 'creating' | 'deleting' | 'ok';
/**
 * Exchange task details
 */
export interface MsServicesExchangeTask {
  /**
   * Function name
   *
   */
  function?: string;
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
  status?: MsServicesTaskStatusEnum;
}
/**
 * Sharepoint task details
 */
export interface MsServicesSharepointTask {
  /**
   * Function name
   *
   */
  function?: string;
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
  status?: MsServicesTaskStatusEnum;
}
/**
 * Active Directory UPN Suffix
 */
export interface MsServicesUpnSuffix {
  /**
   * Ownership for upn suffix confirmed
   *
   */
  ownershipValidated?: boolean;
  /**
   * Cname record used for UPN suffix verification
   *
   */
  cnameToCheck?: string;
  /**
   * UPN suffix state
   *
   */
  state?: MsServicesUPNStateEnum;
  /**
   * UPN suffix
   *
   */
  suffix?: string;
  /**
   * Pending task for this upnSuffix
   *
   */
  taskPendingId?: Number;
}
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
   * period of renew in month
   *
   */
  period?: Number;
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
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
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
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactBilling?: string;
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
type PathsmsServicesGET = '/msServices/sharepoint/{domain}/serviceInfos' | 
'/msServices/sharepoint/{domain}' | 
'/msServices/sharepoint' | 
'/msServices/{serviceName}/upnSuffix/{suffix}' | 
'/msServices/{serviceName}/upnSuffix' | 
'/msServices/{serviceName}' | 
'/msServices/{serviceName}/sync/clientSoftwareURL' | 
'/msServices/{serviceName}/sync/license' | 
'/msServices/{serviceName}/sync' | 
'/msServices/{serviceName}/task' | 
'/msServices/{serviceName}/task/{id}' | 
'/msServices/{serviceName}/account' | 
'/msServices/{serviceName}/account/{userPrincipalName}' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sharepoint' | 
'/msServices/{serviceName}/account/{userPrincipalName}/exchange' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sync' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa' | 
'/msServices/{serviceName}/sharepoint/task/{id}' | 
'/msServices/{serviceName}/sharepoint/task' | 
'/msServices/{serviceName}/sharepoint' | 
'/msServices/{serviceName}/sharepoint/license' | 
'/msServices/{serviceName}/sharepoint/billingMigrated' | 
'/msServices/{serviceName}/exchange/task' | 
'/msServices/{serviceName}/exchange/task/{id}' | 
'/msServices/{serviceName}/exchange' | 
'/msServices/{serviceName}/exchange/billingMigrated' | 
'/msServices';

type PathsmsServicesPUT = '/msServices/sharepoint/{domain}/serviceInfos' | 
'/msServices/{serviceName}' | 
'/msServices/{serviceName}/account/{userPrincipalName}' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sharepoint' | 
'/msServices/{serviceName}/account/{userPrincipalName}/exchange' | 
'/msServices/{serviceName}/sharepoint' | 
'/msServices/{serviceName}/exchange';

type PathsmsServicesPOST = '/msServices/{serviceName}/upnSuffix' | 
'/msServices/{serviceName}/sync/clientSoftwareURL' | 
'/msServices/{serviceName}/sync/changePassword' | 
'/msServices/{serviceName}/account/{userPrincipalName}/changePassword' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace' | 
'/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sync/configure' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sync' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable' | 
'/msServices/{serviceName}/sharepoint/restoreAdminRights';

type PathsmsServicesDELETE = '/msServices/{serviceName}/upnSuffix/{suffix}' | 
'/msServices/{serviceName}/sync' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sync' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa';

class ApimsServices extends ApiCommon {
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/msServices/sharepoint/{domain}/serviceInfos', pathParams: {domain?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Sharepoint service
  Get this object properties
  **/
  public get(path: '/msServices/sharepoint/{domain}', pathParams: {domain?: string}, queryParams: null): Promise<MsServicesSharepointServiceInfo>;
  /**
  Operations about the SHAREPOINT service
  List available services
  **/
  public get(path: '/msServices/sharepoint', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Active Directory UPN Suffix
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/upnSuffix/{suffix}', pathParams: {serviceName?: string, suffix?: string}, queryParams: null): Promise<MsServicesUpnSuffix>;
  /**
  List the msServices.upnSuffix objects
  active directory UPN suffix
  **/
  public get(path: '/msServices/{serviceName}/upnSuffix', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Active Directory organizational unit
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<MsServicesActiveDirectoryOrganizationalUnit>;
  /**
  Temporary link to ADSync software executable
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/sync/clientSoftwareURL', pathParams: {serviceName?: string}, queryParams: null): Promise<MsServicesActiveDirectorySyncClientUrl>;
  /**
  license operations
  Get active licenses for specific period of time
  **/
  public get(path: '/msServices/{serviceName}/sync/license', pathParams: {serviceName?: string}, queryParams: {license?: MsServicesSyncLicenseEnum, period?: MsServicesLicensePeriodEnum}): Promise<MsServicesSyncDailyLicense[]>;
  /**
  Sync service
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/sync', pathParams: {serviceName?: string}, queryParams: null): Promise<MsServicesSyncService>;
  /**
  List the msServices.Task objects
  Pending actions
  **/
  public get(path: '/msServices/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {function?: MsServicesTaskFunctionEnum, status?: MsServicesTaskStatusEnum}): Promise<Number[]>;
  /**
  Active Directory task details
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/task/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<MsServicesTask>;
  /**
  List the msServices.Account objects
  Accounts associated to this Active Directory service
  **/
  public get(path: '/msServices/{serviceName}/account', pathParams: {serviceName?: string}, queryParams: {userPrincipalName?: string, id?: Number}): Promise<string[]>;
  /**
  Active Directory Account
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}', pathParams: {serviceName?: string, userPrincipalName?: string}, queryParams: null): Promise<MsServicesAccount>;
  /**
  Sharepoint account information
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint', pathParams: {serviceName?: string, userPrincipalName?: string}, queryParams: null): Promise<MsServicesSharepointInformation>;
  /**
  Exchange mailbox information
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange', pathParams: {serviceName?: string, userPrincipalName?: string}, queryParams: null): Promise<MsServicesExchangeInformation>;
  /**
  Sync account information
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', pathParams: {serviceName?: string, userPrincipalName?: string}, queryParams: null): Promise<MsServicesSyncInformation>;
  /**
  Multi Factor Authentication informations
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', pathParams: {serviceName?: string, userPrincipalName?: string}, queryParams: null): Promise<MsServicesMfaInformation>;
  /**
  Sharepoint task details
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/sharepoint/task/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<MsServicesSharepointTask>;
  /**
  List the msServices.sharepointTask objects
  Pending actions
  **/
  public get(path: '/msServices/{serviceName}/sharepoint/task', pathParams: {serviceName?: string}, queryParams: {function?: string, status?: MsServicesTaskStatusEnum}): Promise<Number[]>;
  /**
  Sharepoint service
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/sharepoint', pathParams: {serviceName?: string}, queryParams: null): Promise<MsServicesSharepointService>;
  /**
  license operations
  Get active licenses for specific period of time
  **/
  public get(path: '/msServices/{serviceName}/sharepoint/license', pathParams: {serviceName?: string}, queryParams: {license?: MsServicesSharepointLicenseEnum, period?: MsServicesLicensePeriodEnum}): Promise<MsServicesSharepointDailyLicense[]>;
  /**
  billingMigrated operations
  Detects billing transition status for the service
  **/
  public get(path: '/msServices/{serviceName}/sharepoint/billingMigrated', pathParams: {serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  List the msServices.exchangeTask objects
  Pending actions
  **/
  public get(path: '/msServices/{serviceName}/exchange/task', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Exchange task details
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/exchange/task/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<MsServicesExchangeTask>;
  /**
  Exchange service
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/exchange', pathParams: {serviceName?: string}, queryParams: null): Promise<MsServicesExchangeService>;
  /**
  billingMigrated operations
  Detects billing transition status for the service
  **/
  public get(path: '/msServices/{serviceName}/exchange/billingMigrated', pathParams: {serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  Operations about the MSSERVICES service
  List available services
  **/
  public get(path: '/msServices', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsmsServicesGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/msServices/sharepoint/{domain}/serviceInfos', pathParams: {domain?: string}, bodyParams: null): Promise<void>;
  /**
  Active Directory organizational unit
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Active Directory Account
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<void>;
  /**
  Sharepoint account information
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<void>;
  /**
  Exchange mailbox information
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<void>;
  /**
  Sharepoint service
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/sharepoint', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Exchange service
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/exchange', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsmsServicesPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the msServices.upnSuffix objects
  Create new UPN suffix
  **/
  public post(path: '/msServices/{serviceName}/upnSuffix', pathParams: {serviceName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  Temporary link to ADSync software executable
  Generate temporary link to ADSync software executable
  **/
  public post(path: '/msServices/{serviceName}/sync/clientSoftwareURL', pathParams: {serviceName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  changePassword operations
  Change account password
  **/
  public post(path: '/msServices/{serviceName}/sync/changePassword', pathParams: {serviceName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  changePassword operations
  Change account password
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/changePassword', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  configure operations
  Configure sharepoint account to be operational
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesSharepointTask>;
  /**
  clearSpace operations
  On-demand MySite clearance
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesSharepointTask>;
  /**
  configure operations
  Configure mailbox to be operational
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesExchangeTask>;
  /**
  configure operations
  Configure sync account to be operational
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync/configure', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  Sync account information
  Create new sync account
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  reset operations
  Reset Multi Factor Authentication status for this account
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  enable operations
  Enable Mfa (enabled by default when created)
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  Multi Factor Authentication informations
  Create Multi Factor Authentication for this account
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  disable operations
  Disable Multi Factor Authentication for a period of time
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  restoreAdminRights operations
  Restore administrator rights
  **/
  public post(path: '/msServices/{serviceName}/sharepoint/restoreAdminRights', pathParams: {serviceName?: string}, bodyParams: null): Promise<MsServicesSharepointTask>;
  public post(path: PathsmsServicesPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Active Directory UPN Suffix
  Delete existing UPN suffix
  **/
  public delete(path: '/msServices/{serviceName}/upnSuffix/{suffix}', pathParams: {serviceName?: string, suffix?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  Sync service
  Delete sync service
  **/
  public delete(path: '/msServices/{serviceName}/sync', pathParams: {serviceName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  Sync account information
  Delete sync account
  **/
  public delete(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  /**
  Multi Factor Authentication informations
  Delete Multi Factor Authentication feature for this account
  **/
  public delete(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', pathParams: {serviceName?: string, userPrincipalName?: string}, bodyParams: null): Promise<MsServicesTask>;
  public delete(path: PathsmsServicesDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

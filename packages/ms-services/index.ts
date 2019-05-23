import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Active Directory Account
 */
export interface MsServicesAccount {
  /**
   * SAM account name
   *
   */
  SAMAccountName?: string;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Account display name
   *
   */
  displayName?: string;
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
   * Account id
   *
   */
  id: number;
  /**
   * Account initials
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
   * Time of account's password last update
   *
   */
  passwordLastUpdate?: string;
  /**
   * Account state
   *
   */
  state: MsServicesObjectStateEnum;
  /**
   * Pending task for this account
   *
   */
  taskPendingId: number;
  /**
   * User Principal Name
   *
   */
  userPrincipalName: string;
}
/**
 * Active Directory organizational unit
 */
export interface MsServicesActiveDirectoryOrganizationalUnit {
  /**
   * Flag indicating if passwords should be forced to follow Microsoft's password guidelines
   *
   */
  complexityEnabled: boolean;
  /**
   * Account lock time (in minutes) when too much passwords have been tried
   *
   */
  lockoutDuration: number;
  /**
   * Time (in minutes) before the password attempts counter is reset
   *
   */
  lockoutObservationWindow: number;
  /**
   * Maximum number of password tries before account locking
   *
   */
  lockoutThreshold?: number;
  /**
   * Maximum lifespan of passwords, in days
   *
   */
  maxPasswordAge?: number;
  /**
   * Minimum lifespan of passwords, in days (0 = unlimited)
   *
   */
  minPasswordAge?: number;
  /**
   * Minimum number of characters passwords must contain
   *
   */
  minPasswordLength?: number;
  /**
   * Name of the Active Directory organizational unit
   *
   */
  name: string;
  /**
   * Service name of the office tenant (/licence/office/{serviceName}) linked to this AD service
   *
   */
  officeTenantServiceName?: string;
  /**
   * Current state of the Active Directory organizational unit
   *
   */
  state: MsServicesServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId: number;
}
/**
 * Temporary link to ADSync software executable
 */
export interface MsServicesActiveDirectorySyncClientUrl {
  /**
   * Link expiration date
   *
   */
  expiration: string;
  /**
   * ADSync software executable link
   *
   */
  url: string;
}
/**
 * Exchange mailbox information
 */
export interface MsServicesExchangeInformation {
  /**
   * Exchange account license
   *
   */
  accountLicense: MsServicesExchangeLicenceEnum;
  /**
   * Indicates if the account is configured
   *
   */
  configured: boolean;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Mailbox usage in KB
   *
   */
  currentUsage?: number;
  /**
   * Delete mailbox at expiration date
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * Delete Outlook license at expiration date
   *
   */
  deleteOutlookAtExpiration?: boolean;
  /**
   * Property needed for mailbox manual configuration (GUID)
   *
   */
  exchangeGuid?: string;
  /**
   * Expiration date
   *
   */
  expirationDate?: string;
  /**
   * Expiration date of Outlook license
   *
   */
  expirationOutlookDate?: string;
  /**
   * Visibility in Global Address List
   *
   */
  hiddenFromGAL: boolean;
  /**
   * Account id
   *
   */
  id: number;
  /**
   * Litigation hold feature enabled on this mailbox
   *
   */
  litigation: boolean;
  /**
   * Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox.
   *
   */
  litigationPeriod?: number;
  /**
   * Enable or disable anti-virus and anti-spam
   *
   */
  mailingFilter?: MsServicesMailingFilterEnum[];
  /**
   * Outlook licence attached
   *
   */
  outlookLicense: boolean;
  /**
   * OWA policy restriction is applied
   *
   */
  owaLimited: boolean;
  /**
   * Primary address of the mailbox
   *
   */
  primaryEmailAddress: string;
  /**
   * Maximum mailbox usage in GB (overall size)
   *
   */
  quota: number;
  /**
   * Frequency of Outlook license renewals
   *
   */
  renewOutlookPeriod?: MsServicesRenewPeriodEnum;
  /**
   * Frequency of mailbox license renewals
   *
   */
  renewPeriod?: MsServicesRenewPeriodEnum;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration: MsServicesSpamAndVirusConfiguration;
  /**
   * Spam activity detected on this mailbox
   *
   */
  spamDetected: boolean;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: number;
  /**
   * Mailbox state
   *
   */
  state: MsServicesObjectStateEnum;
  /**
   * Pending task id for this account
   *
   */
  taskPendingId: number;
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
   * Service family name displayed
   *
   */
  displayName?: string;
  /**
   * Exchange service name
   *
   */
  domain: string;
  /**
   * Exchange service URL
   *
   */
  hostname?: string;
  /**
   * Maximum allowable size for received messages in MB
   *
   */
  maxReceiveSize: number;
  /**
   * Maximum allowable size of sent messages in MB
   *
   */
  maxSendSize: number;
  /**
   * Exchange service offer
   *
   */
  offer: MsServicesServiceOfferEnum;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration: MsServicesSpamAndVirusConfiguration;
  /**
   * Expiration date of SSL certificate
   *
   */
  sslExpirationDate?: string;
  /**
   * Exchange service state
   *
   */
  state: MsServicesServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId: number;
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
   * Indicates if Multi Factor Authentication is activated on this account
   *
   */
  activated: boolean;
  /**
   * Current status of Multi Factor Authentication feature
   *
   */
  state: MsServicesObjectStateEnum;
  /**
   * Pending task for Multi Factor Authentication
   *
   */
  taskPendingId: number;
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
export type MsServicesServiceStateEnum = 'creating' | 'deleting' | 'inMaintenance' | 'ok' | 'reopening' | 'suspended' | 'suspending';
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
  license: MsServicesSharepointLicenseEnum;
  /**
   */
  licenseQuantity: number;
}
/**
 * Sharepoint account license per day
 */
export interface MsServicesSharepointDailyLicense {
  /**
   */
  accountLicense: MsServicesSharepointAccountLicense[];
  /**
   */
  date: string;
}
/**
 * Sharepoint account information
 */
export interface MsServicesSharepointInformation {
  /**
   * The rights assigned to the sharepoint account
   *
   */
  accessRights: MsServicesSharepointAccountAccessRightsEnum;
  /**
   * Active Directory Account id
   *
   */
  activeDirectoryAccountId: number;
  /**
   * Indicates if the account is configured
   *
   */
  configured: boolean;
  /**
   * OneDrive usage in byte
   *
   */
  currentUsage?: number;
  /**
   * delete at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * Sharepoint account id
   *
   */
  id: number;
  /**
   * Sharepoint account license
   *
   */
  license: MsServicesSharepointLicenseEnum;
  /**
   * office license is available
   *
   */
  officeLicense: boolean;
  /**
   * OneDrive maximum size in byte
   *
   */
  quota: number;
  /**
   * Sharepoint account state
   *
   */
  state: MsServicesObjectStateEnum;
  /**
   * Pending task for this sharepoint account
   *
   */
  taskPendingId: number;
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
   * Shared space usage in byte
   *
   */
  currentUsage?: number;
  /**
   * Service family name displayed
   *
   */
  displayName?: string;
  /**
   * Internal service name
   *
   */
  domain: string;
  /**
   * Sharepoint farm url
   *
   */
  farmUrl: string;
  /**
   * Sharepoint offer
   *
   */
  offer: MsServicesSharepointServiceOfferEnum;
  /**
   * Shared space maximum size in byte
   *
   */
  quota: number;
  /**
   * Sharepoint service state
   *
   */
  state: MsServicesServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId: number;
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
  domain: string;
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
   * Check DKIM of message
   *
   */
  checkDKIM: boolean;
  /**
   * Check SPF of message
   *
   */
  checkSPF: boolean;
  /**
   * If message is a spam delete it
   *
   */
  deleteSpam: boolean;
  /**
   * If message is a virus delete it
   *
   */
  deleteVirus: boolean;
  /**
   * If message is a spam or virus put in junk. Overridden by deleteSpam or deleteVirus
   *
   */
  putInJunk: boolean;
  /**
   * If message is a spam change its subject
   *
   */
  tagSpam: boolean;
  /**
   * If message is a virus change its subject
   *
   */
  tagVirus: boolean;
}
/**
 * Sync account license
 */
export interface MsServicesSyncAccountLicense {
  /**
   * the kind of license under which sync account is contracted
   *
   */
  license: MsServicesSyncLicenseEnum;
  /**
   * number of license instances
   *
   */
  licenseQuantity: number;
}
/**
 * Sync account license per day
 */
export interface MsServicesSyncDailyLicense {
  /**
   * sync account license usage
   *
   */
  accountLicense: MsServicesSyncAccountLicense[];
  /**
   * the date used to determine sync account license usage
   *
   */
  date: string;
}
/**
 * Sync account information
 */
export interface MsServicesSyncInformation {
  /**
   * Indicates if the account is configured
   *
   */
  configured: boolean;
  /**
   * Sync account license
   *
   */
  license: MsServicesSyncLicenseEnum;
  /**
   * Sync account state
   *
   */
  state: MsServicesObjectStateEnum;
  /**
   * Pending task for this sync account
   *
   */
  taskPendingId: number;
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
  state: MsServicesServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId: number;
}
/**
 * Active Directory task details
 */
export interface MsServicesTask {
  /**
   * Completion date
   *
   */
  finishDate?: string;
  /**
   * Function name
   *
   */
  function: MsServicesTaskFunctionEnum;
  /**
   * Task id
   *
   */
  id: number;
  /**
   * Task status
   *
   */
  status: MsServicesTaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate: string;
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
   * Completion date
   *
   */
  finishDate?: string;
  /**
   * Function name
   *
   */
  function: string;
  /**
   * Task id
   *
   */
  id: number;
  /**
   * Task status
   *
   */
  status: MsServicesTaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate: string;
}
/**
 * Sharepoint task details
 */
export interface MsServicesSharepointTask {
  /**
   * Completion date
   *
   */
  finishDate?: string;
  /**
   * Function name
   *
   */
  function: string;
  /**
   * Task id
   *
   */
  id: number;
  /**
   * Task status
   *
   */
  status: MsServicesTaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate: string;
}
/**
 * Active Directory UPN Suffix
 */
export interface MsServicesUpnSuffix {
  /**
   * Cname record used for UPN suffix verification
   *
   */
  cnameToCheck?: string;
  /**
   * Ownership for upn suffix confirmed
   *
   */
  ownershipValidated: boolean;
  /**
   * UPN suffix state
   *
   */
  state: MsServicesUPNStateEnum;
  /**
   * UPN suffix
   *
   */
  suffix: string;
  /**
   * Pending task for this upnSuffix
   *
   */
  taskPendingId: number;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: number;
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
  canDeleteAtExpiration: boolean;
  /**
   */
  contactAdmin: string;
  /**
   */
  contactBilling: string;
  /**
   */
  contactTech: string;
  /**
   */
  creation: string;
  /**
   */
  domain: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType: ServiceRenewalTypeEnum;
  /**
   */
  serviceId: number;
  /**
   */
  status: ServiceStateEnum;
}
type PathsMsServicesGET = '/msServices' | 
'/msServices/sharepoint' | 
'/msServices/sharepoint/{domain}' | 
'/msServices/sharepoint/{domain}/serviceInfos' | 
'/msServices/{serviceName}' | 
'/msServices/{serviceName}/account' | 
'/msServices/{serviceName}/account/{userPrincipalName}' | 
'/msServices/{serviceName}/account/{userPrincipalName}/exchange' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sharepoint' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sync' | 
'/msServices/{serviceName}/exchange' | 
'/msServices/{serviceName}/exchange/billingMigrated' | 
'/msServices/{serviceName}/exchange/task' | 
'/msServices/{serviceName}/exchange/task/{id}' | 
'/msServices/{serviceName}/sharepoint' | 
'/msServices/{serviceName}/sharepoint/billingMigrated' | 
'/msServices/{serviceName}/sharepoint/license' | 
'/msServices/{serviceName}/sharepoint/task' | 
'/msServices/{serviceName}/sharepoint/task/{id}' | 
'/msServices/{serviceName}/sync' | 
'/msServices/{serviceName}/sync/clientSoftwareURL' | 
'/msServices/{serviceName}/sync/license' | 
'/msServices/{serviceName}/task' | 
'/msServices/{serviceName}/task/{id}' | 
'/msServices/{serviceName}/upnSuffix' | 
'/msServices/{serviceName}/upnSuffix/{suffix}';

type PathsMsServicesPUT = '/msServices/sharepoint/{domain}/serviceInfos' | 
'/msServices/{serviceName}' | 
'/msServices/{serviceName}/account/{userPrincipalName}' | 
'/msServices/{serviceName}/account/{userPrincipalName}/exchange' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sharepoint' | 
'/msServices/{serviceName}/exchange' | 
'/msServices/{serviceName}/sharepoint';

type PathsMsServicesPOST = '/msServices/{serviceName}/account/{userPrincipalName}/changePassword' | 
'/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable' | 
'/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sync' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sync/configure' | 
'/msServices/{serviceName}/sharepoint/restoreAdminRights' | 
'/msServices/{serviceName}/sync/changePassword' | 
'/msServices/{serviceName}/sync/clientSoftwareURL' | 
'/msServices/{serviceName}/upnSuffix';

type PathsMsServicesDELETE = '/msServices/{serviceName}/account/{userPrincipalName}/mfa' | 
'/msServices/{serviceName}/account/{userPrincipalName}/sync' | 
'/msServices/{serviceName}/sync' | 
'/msServices/{serviceName}/upnSuffix/{suffix}';

export class ApiMsServices extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the MSSERVICES service
  List available services
  **/
  public get(path: '/msServices'): Promise<string[]>;
  /**
  Operations about the SHAREPOINT service
  List available services
  **/
  public get(path: '/msServices/sharepoint'): Promise<string[]>;
  /**
  Sharepoint service
  Get this object properties
  **/
  public get(path: '/msServices/sharepoint/{domain}', params: {domain: string}): Promise<MsServicesSharepointServiceInfo>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/msServices/sharepoint/{domain}/serviceInfos', params: {domain: string}): Promise<ServicesService>;
  /**
  Active Directory organizational unit
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}', params: {serviceName: string}): Promise<MsServicesActiveDirectoryOrganizationalUnit>;
  /**
  List the msServices.Account objects
  Accounts associated to this Active Directory service
  **/
  public get(path: '/msServices/{serviceName}/account', params: {serviceName: string, id?: number, userPrincipalName?: string}): Promise<string[]>;
  /**
  Active Directory Account
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesAccount>;
  /**
  Exchange mailbox information
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesExchangeInformation>;
  /**
  Multi Factor Authentication informations
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesMfaInformation>;
  /**
  Sharepoint account information
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesSharepointInformation>;
  /**
  Sync account information
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesSyncInformation>;
  /**
  Exchange service
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/exchange', params: {serviceName: string}): Promise<MsServicesExchangeService>;
  /**
  billingMigrated operations
  Detects billing transition status for the service
  **/
  public get(path: '/msServices/{serviceName}/exchange/billingMigrated', params: {serviceName: string}): Promise<boolean>;
  /**
  List the msServices.exchangeTask objects
  Pending actions
  **/
  public get(path: '/msServices/{serviceName}/exchange/task', params: {serviceName: string}): Promise<number[]>;
  /**
  Exchange task details
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/exchange/task/{id}', params: {serviceName: string, id: number}): Promise<MsServicesExchangeTask>;
  /**
  Sharepoint service
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/sharepoint', params: {serviceName: string}): Promise<MsServicesSharepointService>;
  /**
  billingMigrated operations
  Detects billing transition status for the service
  **/
  public get(path: '/msServices/{serviceName}/sharepoint/billingMigrated', params: {serviceName: string}): Promise<boolean>;
  /**
  license operations
  Get active licenses for specific period of time
  **/
  public get(path: '/msServices/{serviceName}/sharepoint/license', params: {serviceName: string, license?: MsServicesSharepointLicenseEnum, period: MsServicesLicensePeriodEnum}): Promise<MsServicesSharepointDailyLicense[]>;
  /**
  List the msServices.sharepointTask objects
  Pending actions
  **/
  public get(path: '/msServices/{serviceName}/sharepoint/task', params: {serviceName: string, function?: string, status?: MsServicesTaskStatusEnum}): Promise<number[]>;
  /**
  Sharepoint task details
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/sharepoint/task/{id}', params: {serviceName: string, id: number}): Promise<MsServicesSharepointTask>;
  /**
  Sync service
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/sync', params: {serviceName: string}): Promise<MsServicesSyncService>;
  /**
  Temporary link to ADSync software executable
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/sync/clientSoftwareURL', params: {serviceName: string}): Promise<MsServicesActiveDirectorySyncClientUrl>;
  /**
  license operations
  Get active licenses for specific period of time
  **/
  public get(path: '/msServices/{serviceName}/sync/license', params: {serviceName: string, license?: MsServicesSyncLicenseEnum, period: MsServicesLicensePeriodEnum}): Promise<MsServicesSyncDailyLicense[]>;
  /**
  List the msServices.Task objects
  Pending actions
  **/
  public get(path: '/msServices/{serviceName}/task', params: {serviceName: string, function?: MsServicesTaskFunctionEnum, status?: MsServicesTaskStatusEnum}): Promise<number[]>;
  /**
  Active Directory task details
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/task/{id}', params: {serviceName: string, id: number}): Promise<MsServicesTask>;
  /**
  List the msServices.upnSuffix objects
  active directory UPN suffix
  **/
  public get(path: '/msServices/{serviceName}/upnSuffix', params: {serviceName: string}): Promise<string[]>;
  /**
  Active Directory UPN Suffix
  Get this object properties
  **/
  public get(path: '/msServices/{serviceName}/upnSuffix/{suffix}', params: {serviceName: string, suffix: string}): Promise<MsServicesUpnSuffix>;
  public get(path: PathsMsServicesGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/msServices/sharepoint/{domain}/serviceInfos', params: {domain: string}): Promise<void>;
  /**
  Active Directory organizational unit
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
  Active Directory Account
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}', params: {serviceName: string, userPrincipalName: string}): Promise<void>;
  /**
  Exchange mailbox information
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange', params: {serviceName: string, userPrincipalName: string}): Promise<void>;
  /**
  Sharepoint account information
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint', params: {serviceName: string, userPrincipalName: string}): Promise<void>;
  /**
  Exchange service
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/exchange', params: {serviceName: string}): Promise<void>;
  /**
  Sharepoint service
  Alter this object properties
  **/
  public put(path: '/msServices/{serviceName}/sharepoint', params: {serviceName: string}): Promise<void>;
  public put(path: PathsMsServicesPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  changePassword operations
  Change account password
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/changePassword', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  configure operations
  Configure mailbox to be operational
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesExchangeTask>;
  /**
  Multi Factor Authentication informations
  Create Multi Factor Authentication for this account
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  disable operations
  Disable Multi Factor Authentication for a period of time
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  enable operations
  Enable Mfa (enabled by default when created)
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  reset operations
  Reset Multi Factor Authentication status for this account
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  clearSpace operations
  On-demand MySite clearance
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesSharepointTask>;
  /**
  configure operations
  Configure sharepoint account to be operational
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesSharepointTask>;
  /**
  Sync account information
  Create new sync account
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  configure operations
  Configure sync account to be operational
  **/
  public post(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync/configure', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  restoreAdminRights operations
  Restore administrator rights
  **/
  public post(path: '/msServices/{serviceName}/sharepoint/restoreAdminRights', params: {serviceName: string}): Promise<MsServicesSharepointTask>;
  /**
  changePassword operations
  Change account password
  **/
  public post(path: '/msServices/{serviceName}/sync/changePassword', params: {serviceName: string}): Promise<MsServicesTask>;
  /**
  Temporary link to ADSync software executable
  Generate temporary link to ADSync software executable
  **/
  public post(path: '/msServices/{serviceName}/sync/clientSoftwareURL', params: {serviceName: string}): Promise<MsServicesTask>;
  /**
  List the msServices.upnSuffix objects
  Create new UPN suffix
  **/
  public post(path: '/msServices/{serviceName}/upnSuffix', params: {serviceName: string}): Promise<MsServicesTask>;
  public post(path: PathsMsServicesPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Multi Factor Authentication informations
  Delete Multi Factor Authentication feature for this account
  **/
  public delete(path: '/msServices/{serviceName}/account/{userPrincipalName}/mfa', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  Sync account information
  Delete sync account
  **/
  public delete(path: '/msServices/{serviceName}/account/{userPrincipalName}/sync', params: {serviceName: string, userPrincipalName: string}): Promise<MsServicesTask>;
  /**
  Sync service
  Delete sync service
  **/
  public delete(path: '/msServices/{serviceName}/sync', params: {serviceName: string}): Promise<MsServicesTask>;
  /**
  Active Directory UPN Suffix
  Delete existing UPN suffix
  **/
  public delete(path: '/msServices/{serviceName}/upnSuffix/{suffix}', params: {serviceName: string, suffix: string}): Promise<MsServicesTask>;
  public delete(path: PathsMsServicesDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiMsServices;

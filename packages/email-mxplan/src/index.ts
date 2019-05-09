import { ApiCommon, OvhApi, OvhParamType } from '@ovh-api/common';
/**
 * Mailbox
 */
export interface EmailMxplanAccount {
  /**
   * SAM account name
   *
   */
  SAMAccountName?: string;
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
  currentUsage?: number;
  /**
   * delete at expiration
   *
   */
  deleteAtExpiration?: boolean;
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
   * Hide account in Global Address List
   *
   */
  hiddenFromGAL?: boolean;
  /**
   * Account id
   *
   */
  id?: number;
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
   * Account login
   *
   */
  login?: string;
  /**
   * Enable or disable anti-virus and anti-spam
   *
   */
  mailingFilter?: EmailProMailingFilterEnum[];
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
  quota?: number;
  /**
   * change the renew period
   *
   */
  renewPeriod?: EmailProRenewPeriodEnum;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: EmailProSpamAndVirusConfiguration;
  /**
   * Account was sending spam
   *
   */
  spamDetected?: boolean;
  /**
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: number;
  /**
   * Account state
   *
   */
  state?: EmailProObjectStateEnum;
  /**
   * Pending tasks for this account
   *
   */
  taskPendingId?: number;
}
/**
 * Aliases on this mailbox
 */
export interface EmailMxplanAccountAlias {
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
  taskPendingId?: number;
}
/**
 * Account Diagnosis
 */
export interface EmailMxplanAccountDiagnosis {
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
  connectiveWebmail?: boolean;
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
export interface EmailMxplanAccountFullAccess {
  /**
   * Account id to give full access
   *
   */
  allowedAccountId?: number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: number;
}
/**
 * Users authorized to send mails from this mailbox
 */
export interface EmailMxplanAccountSendAs {
  /**
   * Account id to give send as
   *
   */
  allowedAccountId?: number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: number;
}
/**
 * Get users authorized to Send On Behalf To mails from this mailbox
 */
export interface EmailMxplanAccountSendOnBehalfTo {
  /**
   * Account id to give send on behalf to
   *
   */
  allowedAccountId?: number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Pending task id
   *
   */
  taskPendingId?: number;
}
/**
 * Domain
 */
export interface EmailMxplanDomain {
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
  state?: EmailProObjectStateEnum;
  /**
   * Pending taks id
   *
   */
  taskPendingId?: number;
  /**
   * Domain type
   *
   */
  type?: EmailProDomainTypeEnum;
}
/**
 * External contact for this mxplan service
 */
export interface EmailMxplanExternalContact {
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
  id?: number;
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
   * Contact state
   *
   */
  state?: EmailProObjectStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: number;
}
/**
 * Server
 */
export interface EmailMxplanServer {
  /**
   * Current disk usage in MB
   *
   */
  currentDiskUsage?: number;
  /**
   * Total disk size in MB
   *
   */
  diskSize?: number;
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
   * Server state
   *
   */
  state?: EmailProServerStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: number;
  /**
   * Server version
   *
   */
  version?: number;
}
/**
 * MXPlan service
 */
export interface EmailMxplanService {
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
   * Domain name of your service
   *
   */
  domain?: string;
  /**
   * Hostname of your service
   *
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
  lockoutDuration?: number;
  /**
   * number of minutes that must elapse after a failed logon to reset lockout trigger
   *
   */
  lockoutObservationWindow?: number;
  /**
   * number of attempts before account to be locked
   *
   */
  lockoutThreshold?: number;
  /**
   * maximum number of days that account's password is valid before expiration
   *
   */
  maxPasswordAge?: number;
  /**
   * Maximum message size that You can receive in MB
   *
   */
  maxReceiveSize?: number;
  /**
   * Maximum message size that You can send in MB
   *
   */
  maxSendSize?: number;
  /**
   * minimum number of days before able to change account's password
   *
   */
  minPasswordAge?: number;
  /**
   * minimum number of characters password must contain
   *
   */
  minPasswordLength?: number;
  /**
   * Type of your offer
   *
   */
  offer?: EmailMxplanServiceOfferEnum;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: EmailProSpamAndVirusConfiguration;
  /**
   * State of your service
   *
   */
  state?: EmailProServiceStateEnum;
  /**
   * Task pending id
   *
   */
  taskPendingId?: number;
  /**
   * URL for web interface
   *
   */
  webUrl?: string;
}
/**
 * Service Offer name
 */
export type EmailMxplanServiceOfferEnum = 'MXPLAN';
/**
 * Disclaimer attributes list
 */
export type EmailProDisclaimerAttributeEnum = 'City' | 'Company' | 'Country' | 'Department' | 'DisplayName' | 'Email' | 'FaxNumber' | 'FirstName' | 'HomePhoneNumber' | 'Initials' | 'LastName' | 'Manager' | 'MobileNumber' | 'Notes' | 'Office' | 'OtherFaxNumber' | 'OtherHomePhoneNumber' | 'OtherPhoneNumber' | 'PagerNumber' | 'PhoneNumber' | 'State' | 'Street' | 'Title' | 'UserLogonName' | 'ZipCode';
/**
 * Domain type
 */
export type EmailProDomainTypeEnum = 'authoritative' | 'nonAuthoritative';
/**
 * Mailing filter options availlable
 */
export type EmailProMailingFilterEnum = 'vaderetro';
/**
 * Current object state
 */
export type EmailProObjectStateEnum = 'creating' | 'deleting' | 'ok' | 'reopening' | 'suspended' | 'suspending' | 'unknown';
/**
 * Server State
 */
export type EmailProServerStateEnum = 'configurationPending' | 'notConfigured' | 'ok';
/**
 * Service State
 */
export type EmailProServiceStateEnum = 'inMaintenance' | 'ok' | 'suspended';
/**
 * Organization task details
 */
export interface EmailProTask {
  /**
   * Completion date
   *
   */
  finishDate?: string;
  /**
   * Function name
   *
   */
  function?: EmailProTaskFunctionEnum;
  /**
   * Task id
   *
   */
  id?: number;
  /**
   * Task status
   *
   */
  status?: EmailProTaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate?: string;
}
/**
 * function enumeration for task
 */
export type EmailProTaskFunctionEnum = 'addAccount' | 'addAlias' | 'addDomain' | 'addDomainDisclaimer' | 'addExternalContact' | 'addFullAccess' | 'addSendAs' | 'addSendOnBehalfTo' | 'addServiceAuthorizedIp' | 'changeHostname' | 'changePassword' | 'configureCustomer' | 'deleteAccount' | 'deleteAlias' | 'deleteDomain' | 'deleteDomainDisclaimer' | 'deleteExternalContact' | 'deleteFullAccess' | 'deleteSendAs' | 'deleteSendOnBehalfTo' | 'deleteService' | 'deleteServiceAuthorizedIp' | 'diagnoseAccount' | 'expandDrive' | 'installServer' | 'maintenance' | 'migrateAccountViaOMM' | 'migrationAccount' | 'migrationDisclaimer' | 'migrationExternalContact' | 'migrationHistory' | 'migrationService' | 'reOpenAccount' | 'setAccount' | 'setAlias' | 'setDns' | 'setDomain' | 'setDomainDisclaimer' | 'setExternalContact' | 'setService' | 'suspendAccount' | 'suspendService' | 'unknown' | 'unsuspendAccount' | 'unsuspendService';
/**
 * Task status
 */
export type EmailProTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * disclaimer
 */
export interface EmailProDisclaimer {
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
  taskPendingId?: number;
}
/**
 * Renew period
 */
export type EmailProRenewPeriodEnum = 'monthly' | 'yearly';
/**
 * Spam and Antyvirus configuration
 */
export interface EmailProSpamAndVirusConfiguration {
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
type PathsEmailMxplanGET = '/email/mxplan' | 
'/email/mxplan/{service}' | 
'/email/mxplan/{service}/account' | 
'/email/mxplan/{service}/account/{email}' | 
'/email/mxplan/{service}/account/{email}/alias' | 
'/email/mxplan/{service}/account/{email}/alias/{alias}' | 
'/email/mxplan/{service}/account/{email}/diagnostic' | 
'/email/mxplan/{service}/account/{email}/fullAccess' | 
'/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/sendAs' | 
'/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/sendOnBehalfTo' | 
'/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/task' | 
'/email/mxplan/{service}/account/{email}/task/{id}' | 
'/email/mxplan/{service}/domain' | 
'/email/mxplan/{service}/domain/{domainName}' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimer' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute' | 
'/email/mxplan/{service}/externalContact' | 
'/email/mxplan/{service}/externalContact/{externalEmailAddress}' | 
'/email/mxplan/{service}/server' | 
'/email/mxplan/{service}/task' | 
'/email/mxplan/{service}/task/{id}';

type PathsEmailMxplanPUT = '/email/mxplan/{service}' | 
'/email/mxplan/{service}/account/{email}' | 
'/email/mxplan/{service}/domain/{domainName}' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimer' | 
'/email/mxplan/{service}/externalContact/{externalEmailAddress}';

type PathsEmailMxplanPOST = '/email/mxplan/{service}/account/{email}/alias' | 
'/email/mxplan/{service}/account/{email}/changePassword' | 
'/email/mxplan/{service}/account/{email}/diagnostic' | 
'/email/mxplan/{service}/account/{email}/fullAccess' | 
'/email/mxplan/{service}/account/{email}/sendAs' | 
'/email/mxplan/{service}/account/{email}/sendOnBehalfTo' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimer' | 
'/email/mxplan/{service}/externalContact' | 
'/email/mxplan/{service}/updateFlagsOnAllAccounts';

type PathsEmailMxplanDELETE = '/email/mxplan/{service}/account/{email}' | 
'/email/mxplan/{service}/account/{email}/alias/{alias}' | 
'/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimer' | 
'/email/mxplan/{service}/externalContact/{externalEmailAddress}';

export class ApiEmailMxplan extends ApiCommon {
  constructor(engine: OvhApi) {
    super(engine);
  }
  /**
  Operations about the MXPLAN service
  List available services
  **/
  public get(path: '/email/mxplan'): Promise<string[]>;
  /**
  MXPlan service
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}', params: {service: string}): Promise<EmailMxplanService>;
  /**
  List the email.mxplan.Account objects
  Accounts associated to this mxplan service
  **/
  public get(path: '/email/mxplan/{service}/account', params: {service: string, id?: number, primaryEmailAddress?: string}): Promise<string[]>;
  /**
  Mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}', params: {service: string, email: string}): Promise<EmailMxplanAccount>;
  /**
  List the email.mxplan.AccountAlias objects
  Aliases associated to this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/alias', params: {service: string, email: string}): Promise<string[]>;
  /**
  Aliases on this mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/alias/{alias}', params: {service: string, email: string, alias: string}): Promise<EmailMxplanAccountAlias>;
  /**
  Account Diagnosis
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/diagnostic', params: {service: string, email: string}): Promise<EmailMxplanAccountDiagnosis>;
  /**
  List the email.mxplan.AccountFullAccess objects
  Full access granted users for this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/fullAccess', params: {service: string, email: string}): Promise<number[]>;
  /**
  Users having full access on this mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: number}): Promise<EmailMxplanAccountFullAccess>;
  /**
  List the email.mxplan.AccountSendAs objects
  Send as granted users for this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/sendAs', params: {service: string, email: string}): Promise<number[]>;
  /**
  Users authorized to send mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: number}): Promise<EmailMxplanAccountSendAs>;
  /**
  List the email.mxplan.AccountSendOnBehalfTo objects
  SendOnBehalfTo granted users for this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo', params: {service: string, email: string}): Promise<number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: number}): Promise<EmailMxplanAccountSendOnBehalfTo>;
  /**
  List the email.pro.Task objects
  Pending task for this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/task', params: {service: string, email: string}): Promise<number[]>;
  /**
  Organization task details
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/task/{id}', params: {service: string, email: string, id: number}): Promise<EmailProTask>;
  /**
  List the email.mxplan.Domain objects
  Domains associated to this service
  **/
  public get(path: '/email/mxplan/{service}/domain', params: {service: string, state?: EmailProObjectStateEnum}): Promise<string[]>;
  /**
  Domain
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/domain/{domainName}', params: {service: string, domainName: string}): Promise<EmailMxplanDomain>;
  /**
  disclaimer
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string}): Promise<EmailProDisclaimer>;
  /**
  disclaimerAttribute operations
  Get diclaimer attributes to substitute with Active Directory properties
  **/
  public get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute', params: {service: string, domainName: string}): Promise<EmailProDisclaimerAttributeEnum[]>;
  /**
  List the email.mxplan.ExternalContact objects
  External contacts for this service
  **/
  public get(path: '/email/mxplan/{service}/externalContact', params: {service: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}): Promise<string[]>;
  /**
  External contact for this mxplan service
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string}): Promise<EmailMxplanExternalContact>;
  /**
  Server
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/server', params: {service: string}): Promise<EmailMxplanServer>;
  /**
  List the email.pro.Task objects
  Pending actions
  **/
  public get(path: '/email/mxplan/{service}/task', params: {service: string}): Promise<number[]>;
  /**
  Organization task details
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/task/{id}', params: {service: string, id: number}): Promise<EmailProTask>;
  public get(path: PathsEmailMxplanGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  MXPlan service
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}', params: {service: string}): Promise<void>;
  /**
  Mailbox
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}/account/{email}', params: {service: string, email: string}): Promise<void>;
  /**
  Domain
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}/domain/{domainName}', params: {service: string, domainName: string}): Promise<void>;
  /**
  disclaimer
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string}): Promise<void>;
  /**
  External contact for this mxplan service
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string}): Promise<void>;
  public put(path: PathsEmailMxplanPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  List the email.mxplan.AccountAlias objects
  Create new alias
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/alias', params: {service: string, email: string}): Promise<EmailProTask>;
  /**
  changePassword operations
  Change mailbox password
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/changePassword', params: {service: string, email: string}): Promise<EmailProTask>;
  /**
  Account Diagnosis
  Create new diagnosis request
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/diagnostic', params: {service: string, email: string}): Promise<EmailProTask>;
  /**
  List the email.mxplan.AccountFullAccess objects
  Allow full access to a user
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/fullAccess', params: {service: string, email: string}): Promise<EmailProTask>;
  /**
  List the email.mxplan.AccountSendAs objects
  Allow another user to send mails from this mailbox
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/sendAs', params: {service: string, email: string}): Promise<EmailProTask>;
  /**
  List the email.mxplan.AccountSendOnBehalfTo objects
  Allow another user to Send On Behalf To mails from this mailbox
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo', params: {service: string, email: string}): Promise<EmailProTask>;
  /**
  disclaimer
  Create organization disclaimer of each email
  **/
  public post(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string}): Promise<EmailProTask>;
  /**
  List the email.mxplan.ExternalContact objects
  create new external contact
  **/
  public post(path: '/email/mxplan/{service}/externalContact', params: {service: string}): Promise<EmailProTask>;
  /**
  updateFlagsOnAllAccounts operations
  Update spam and virus flags on all active accounts
  **/
  public post(path: '/email/mxplan/{service}/updateFlagsOnAllAccounts', params: {service: string}): Promise<void>;
  public post(path: PathsEmailMxplanPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Mailbox
  Delete existing mailbox in mxplan server
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}', params: {service: string, email: string}): Promise<EmailProTask>;
  /**
  Aliases on this mailbox
  Delete existing alias
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}/alias/{alias}', params: {service: string, email: string, alias: string}): Promise<EmailProTask>;
  /**
  Users having full access on this mailbox
  Revoke full access
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: number}): Promise<EmailProTask>;
  /**
  Users authorized to send mails from this mailbox
  Delete allowed user for sendAs
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: number}): Promise<EmailProTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: number}): Promise<EmailProTask>;
  /**
  disclaimer
  Delete existing organization disclaimer
  **/
  public delete(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string}): Promise<EmailProTask>;
  /**
  External contact for this mxplan service
  delete external contact
  **/
  public delete(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string}): Promise<EmailProTask>;
  public delete(path: PathsEmailMxplanDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}

import { ApiCommon } from '@ovh-api/common';
/**
 * Mailbox
 */
export interface EmailMxplanAccount {
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
   * Ticket number of spam detection
   *
   */
  spamTicketNumber?: Number;
  /**
   * Time of account's password last update
   *
   */
  passwordLastUpdate?: Date;
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
   * Account login
   *
   */
  login?: string;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: EmailProSpamAndVirusConfiguration;
  /**
   * Default email for this mailbox
   *
   */
  primaryEmailAddress?: string;
  /**
   * Hide account in Global Address List
   *
   */
  hiddenFromGAL?: boolean;
  /**
   * Account maximum size
   *
   */
  quota?: Number;
  /**
   * Account state
   *
   */
  state?: EmailProObjectStateEnum;
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
  mailingFilter?: EmailProMailingFilterEnum[];
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
   * Pending tasks for this account
   *
   */
  taskPendingId?: Number;
  /**
   * Account first name
   *
   */
  firstName?: string;
  /**
   * change the renew period
   *
   */
  renewPeriod?: EmailProRenewPeriodEnum;
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
   * SAM account name
   *
   */
  SAMAccountName?: string;
  /**
   * Last logon
   *
   */
  lastLogonDate?: Date;
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
  creationDate?: Date;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Account Diagnosis
 */
export interface EmailMxplanAccountDiagnosis {
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
  connectiveWebmail?: boolean;
}
/**
 * Users having full access on this mailbox
 */
export interface EmailMxplanAccountFullAccess {
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
 * Users authorized to send mails from this mailbox
 */
export interface EmailMxplanAccountSendAs {
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
 * Get users authorized to Send On Behalf To mails from this mailbox
 */
export interface EmailMxplanAccountSendOnBehalfTo {
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
 * Domain
 */
export interface EmailMxplanDomain {
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
   * Domain MX record configured in DNS
   *
   */
  mxRecord?: string[];
  /**
   * List of aliases for this domain
   *
   */
  domainAliases?: string[];
  /**
   * Domain type
   *
   */
  type?: EmailProDomainTypeEnum;
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
   * If true your dns mx configuration is valid
   *
   */
  mxIsValid?: boolean;
  /**
   * If specified, emails to not existing address will be redirected to that domain
   *
   */
  mxRelay?: string;
  /**
   * Domain state
   *
   */
  state?: EmailProObjectStateEnum;
}
/**
 * External contact for this mxplan service
 */
export interface EmailMxplanExternalContact {
  /**
   * Contact first name
   *
   */
  firstName?: string;
  /**
   * Contact last name
   *
   */
  lastName?: string;
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
   * Contact state
   *
   */
  state?: EmailProObjectStateEnum;
  /**
   * Contact id
   *
   */
  id?: Number;
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
 * Server
 */
export interface EmailMxplanServer {
  /**
   * Total disk size in MB
   *
   */
  diskSize?: Number;
  /**
   * If true your dns ptrV6 record is valid
   *
   */
  isPtrV6Valid?: boolean;
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
   * ipV4
   *
   */
  ip?: string;
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
   * Server state
   *
   */
  state?: EmailProServerStateEnum;
  /**
   * If true your dns AAAA record is valid
   *
   */
  isAaaaValid?: boolean;
  /**
   * Server version
   *
   */
  version?: Number;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
}
/**
 * MXPlan service
 */
export interface EmailMxplanService {
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
   * service displayName
   *
   */
  displayName?: string;
  /**
   * Update date
   *
   */
  lastUpdateDate?: Date;
  /**
   * Spam and Antivirus configuration
   *
   */
  spamAndVirusConfiguration?: EmailProSpamAndVirusConfiguration;
  /**
   * enable policy for strong and secure passwords
   *
   */
  complexityEnabled?: boolean;
  /**
   * maximum number of days that account's password is valid before expiration
   *
   */
  maxPasswordAge?: Number;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Type of your offer
   *
   */
  offer?: EmailMxplanServiceOfferEnum;
  /**
   * Maximum message size that You can send in MB
   *
   */
  maxSendSize?: Number;
  /**
   * Hostname of your service
   *
   */
  hostname?: string;
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
   * URL for web interface
   *
   */
  webUrl?: string;
  /**
   * minimum number of characters password must contain
   *
   */
  minPasswordLength?: Number;
  /**
   * Domain name of your service
   *
   */
  domain?: string;
  /**
   * State of your service
   *
   */
  state?: EmailProServiceStateEnum;
  /**
   * number of minutes that must elapse after a failed logon to reset lockout trigger
   *
   */
  lockoutObservationWindow?: Number;
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
   * Function name
   *
   */
  function?: EmailProTaskFunctionEnum;
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
  status?: EmailProTaskStatusEnum;
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
   * task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Signature, added at the bottom of your organization emails
   *
   */
  content?: string;
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
   * If message is a spam delete it
   *
   */
  deleteSpam?: boolean;
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
type PathsemailmxplanGET = '/email/mxplan/{service}' | 
'/email/mxplan/{service}/server' | 
'/email/mxplan/{service}/externalContact/{externalEmailAddress}' | 
'/email/mxplan/{service}/externalContact' | 
'/email/mxplan/{service}/account/{email}/alias/{alias}' | 
'/email/mxplan/{service}/account/{email}/alias' | 
'/email/mxplan/{service}/account/{email}' | 
'/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/fullAccess' | 
'/email/mxplan/{service}/account/{email}/task/{id}' | 
'/email/mxplan/{service}/account/{email}/task' | 
'/email/mxplan/{service}/account/{email}/diagnostic' | 
'/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/sendAs' | 
'/email/mxplan/{service}/account/{email}/sendOnBehalfTo' | 
'/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/mxplan/{service}/account' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimer' | 
'/email/mxplan/{service}/domain/{domainName}' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute' | 
'/email/mxplan/{service}/domain' | 
'/email/mxplan/{service}/task' | 
'/email/mxplan/{service}/task/{id}' | 
'/email/mxplan';

type PathsemailmxplanPUT = '/email/mxplan/{service}' | 
'/email/mxplan/{service}/externalContact/{externalEmailAddress}' | 
'/email/mxplan/{service}/account/{email}' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimer' | 
'/email/mxplan/{service}/domain/{domainName}';

type PathsemailmxplanPOST = '/email/mxplan/{service}/externalContact' | 
'/email/mxplan/{service}/account/{email}/alias' | 
'/email/mxplan/{service}/account/{email}/fullAccess' | 
'/email/mxplan/{service}/account/{email}/diagnostic' | 
'/email/mxplan/{service}/account/{email}/sendAs' | 
'/email/mxplan/{service}/account/{email}/changePassword' | 
'/email/mxplan/{service}/account/{email}/sendOnBehalfTo' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimer' | 
'/email/mxplan/{service}/updateFlagsOnAllAccounts';

type PathsemailmxplanDELETE = '/email/mxplan/{service}/externalContact/{externalEmailAddress}' | 
'/email/mxplan/{service}/account/{email}/alias/{alias}' | 
'/email/mxplan/{service}/account/{email}' | 
'/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}' | 
'/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/mxplan/{service}/domain/{domainName}/disclaimer';

class Apiemailmxplan extends ApiCommon {
  /**
  MXPlan service
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}', pathParams: {service?: string}, queryParams: null): Promise<EmailMxplanService>;
  /**
  Server
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/server', pathParams: {service?: string}, queryParams: null): Promise<EmailMxplanServer>;
  /**
  External contact for this mxplan service
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', pathParams: {service?: string, externalEmailAddress?: string}, queryParams: null): Promise<EmailMxplanExternalContact>;
  /**
  List the email.mxplan.ExternalContact objects
  External contacts for this service
  **/
  public get(path: '/email/mxplan/{service}/externalContact', pathParams: {service?: string}, queryParams: {id?: Number, displayName?: string, externalEmailAddress?: string, lastName?: string, firstName?: string}): Promise<string[]>;
  /**
  Aliases on this mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/alias/{alias}', pathParams: {service?: string, email?: string, alias?: string}, queryParams: null): Promise<EmailMxplanAccountAlias>;
  /**
  List the email.mxplan.AccountAlias objects
  Aliases associated to this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/alias', pathParams: {service?: string, email?: string}, queryParams: null): Promise<string[]>;
  /**
  Mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}', pathParams: {service?: string, email?: string}, queryParams: null): Promise<EmailMxplanAccount>;
  /**
  Users having full access on this mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailMxplanAccountFullAccess>;
  /**
  List the email.mxplan.AccountFullAccess objects
  Full access granted users for this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/fullAccess', pathParams: {service?: string, email?: string}, queryParams: null): Promise<Number[]>;
  /**
  Organization task details
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/task/{id}', pathParams: {service?: string, email?: string, id?: Number}, queryParams: null): Promise<EmailProTask>;
  /**
  List the email.pro.Task objects
  Pending task for this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/task', pathParams: {service?: string, email?: string}, queryParams: null): Promise<Number[]>;
  /**
  Account Diagnosis
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/diagnostic', pathParams: {service?: string, email?: string}, queryParams: null): Promise<EmailMxplanAccountDiagnosis>;
  /**
  Users authorized to send mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailMxplanAccountSendAs>;
  /**
  List the email.mxplan.AccountSendAs objects
  Send as granted users for this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/sendAs', pathParams: {service?: string, email?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the email.mxplan.AccountSendOnBehalfTo objects
  SendOnBehalfTo granted users for this mailbox
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo', pathParams: {service?: string, email?: string}, queryParams: null): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailMxplanAccountSendOnBehalfTo>;
  /**
  List the email.mxplan.Account objects
  Accounts associated to this mxplan service
  **/
  public get(path: '/email/mxplan/{service}/account', pathParams: {service?: string}, queryParams: {id?: Number, primaryEmailAddress?: string}): Promise<string[]>;
  /**
  disclaimer
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', pathParams: {service?: string, domainName?: string}, queryParams: null): Promise<EmailProDisclaimer>;
  /**
  Domain
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/domain/{domainName}', pathParams: {service?: string, domainName?: string}, queryParams: null): Promise<EmailMxplanDomain>;
  /**
  disclaimerAttribute operations
  Get diclaimer attributes to substitute with Active Directory properties
  **/
  public get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute', pathParams: {service?: string, domainName?: string}, queryParams: null): Promise<EmailProDisclaimerAttributeEnum[]>;
  /**
  List the email.mxplan.Domain objects
  Domains associated to this service
  **/
  public get(path: '/email/mxplan/{service}/domain', pathParams: {service?: string}, queryParams: {state?: EmailProObjectStateEnum}): Promise<string[]>;
  /**
  List the email.pro.Task objects
  Pending actions
  **/
  public get(path: '/email/mxplan/{service}/task', pathParams: {service?: string}, queryParams: null): Promise<Number[]>;
  /**
  Organization task details
  Get this object properties
  **/
  public get(path: '/email/mxplan/{service}/task/{id}', pathParams: {service?: string, id?: Number}, queryParams: null): Promise<EmailProTask>;
  /**
  Operations about the MXPLAN service
  List available services
  **/
  public get(path: '/email/mxplan', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsemailmxplanGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  MXPlan service
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}', pathParams: {service?: string}, bodyParams: null): Promise<void>;
  /**
  External contact for this mxplan service
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', pathParams: {service?: string, externalEmailAddress?: string}, bodyParams: null): Promise<void>;
  /**
  Mailbox
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}/account/{email}', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<void>;
  /**
  disclaimer
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<void>;
  /**
  Domain
  Alter this object properties
  **/
  public put(path: '/email/mxplan/{service}/domain/{domainName}', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsemailmxplanPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the email.mxplan.ExternalContact objects
  create new external contact
  **/
  public post(path: '/email/mxplan/{service}/externalContact', pathParams: {service?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  List the email.mxplan.AccountAlias objects
  Create new alias
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/alias', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  List the email.mxplan.AccountFullAccess objects
  Allow full access to a user
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/fullAccess', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  Account Diagnosis
  Create new diagnosis request
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/diagnostic', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  List the email.mxplan.AccountSendAs objects
  Allow another user to send mails from this mailbox
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/sendAs', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  changePassword operations
  Change mailbox password
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/changePassword', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  List the email.mxplan.AccountSendOnBehalfTo objects
  Allow another user to Send On Behalf To mails from this mailbox
  **/
  public post(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  disclaimer
  Create organization disclaimer of each email
  **/
  public post(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  updateFlagsOnAllAccounts operations
  Update spam and virus flags on all active accounts
  **/
  public post(path: '/email/mxplan/{service}/updateFlagsOnAllAccounts', pathParams: {service?: string}, bodyParams: null): Promise<void>;
  public post(path: PathsemailmxplanPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  External contact for this mxplan service
  delete external contact
  **/
  public delete(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', pathParams: {service?: string, externalEmailAddress?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  Aliases on this mailbox
  Delete existing alias
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}/alias/{alias}', pathParams: {service?: string, email?: string, alias?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  Mailbox
  Delete existing mailbox in mxplan server
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  Users having full access on this mailbox
  Revoke full access
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, bodyParams: null): Promise<EmailProTask>;
  /**
  Users authorized to send mails from this mailbox
  Delete allowed user for sendAs
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, bodyParams: null): Promise<EmailProTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, bodyParams: null): Promise<EmailProTask>;
  /**
  disclaimer
  Delete existing organization disclaimer
  **/
  public delete(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<EmailProTask>;
  public delete(path: PathsemailmxplanDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
/**
 * Mailbox
 */
export interface EmailProAccount {
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
  spamAndVirusConfiguration?: EmailProSpamAndVirusConfiguration;
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
export interface EmailProAccountAlias {
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
export interface EmailProAccountDiagnosis {
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
export interface EmailProAccountFullAccess {
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
export interface EmailProAccountSendAs {
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
export interface EmailProAccountSendOnBehalfTo {
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
 * Disclaimer attributes list
 */
export type EmailProDisclaimerAttributeEnum = 'City' | 'Company' | 'Country' | 'Department' | 'DisplayName' | 'Email' | 'FaxNumber' | 'FirstName' | 'HomePhoneNumber' | 'Initials' | 'LastName' | 'Manager' | 'MobileNumber' | 'Notes' | 'Office' | 'OtherFaxNumber' | 'OtherHomePhoneNumber' | 'OtherPhoneNumber' | 'PagerNumber' | 'PhoneNumber' | 'State' | 'Street' | 'Title' | 'UserLogonName' | 'ZipCode';
/**
 * Domain
 */
export interface EmailProDomain {
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
 * Domain type
 */
export type EmailProDomainTypeEnum = 'authoritative' | 'nonAuthoritative';
/**
 * External contact for this pro service
 */
export interface EmailProExternalContact {
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
 * Mailing filter options availlable
 */
export type EmailProMailingFilterEnum = 'vaderetro';
/**
 * Current object state
 */
export type EmailProObjectStateEnum = 'creating' | 'deleting' | 'ok' | 'reopening' | 'suspended' | 'suspending' | 'unknown';
/**
 * Server
 */
export interface EmailProServer {
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
 * Server State
 */
export type EmailProServerStateEnum = 'configurationPending' | 'notConfigured' | 'ok';
/**
 * Email pro service
 */
export interface EmailProService {
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
  spamAndVirusConfiguration?: EmailProSpamAndVirusConfiguration;
  /**
   * Task pending id
   *
   */
  taskPendingId?: Number;
  /**
   * Type of your offer
   *
   */
  offer?: EmailProServiceOfferEnum;
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
export type EmailProServiceOfferEnum = 'emailpro';
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
type PathsemailproGET = '/email/pro' | 
'/email/pro/{service}/serviceInfos' | 
'/email/pro/{service}/account/{email}/fullAccess' | 
'/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}' | 
'/email/pro/{service}/account/{email}/alias' | 
'/email/pro/{service}/account/{email}/alias/{alias}' | 
'/email/pro/{service}/account/{email}/sendAs' | 
'/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}/tasks' | 
'/email/pro/{service}/account/{email}/tasks/{id}' | 
'/email/pro/{service}/account/{email}/sendOnBehalfTo' | 
'/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}/diagnostics' | 
'/email/pro/{service}/account' | 
'/email/pro/{service}' | 
'/email/pro/{service}/externalContact/{externalEmailAddress}' | 
'/email/pro/{service}/externalContact' | 
'/email/pro/{service}/server' | 
'/email/pro/{service}/billingMigrated' | 
'/email/pro/{service}/billingPlan' | 
'/email/pro/{service}/domain' | 
'/email/pro/{service}/domain/{domainName}' | 
'/email/pro/{service}/domain/{domainName}/disclaimerAttribute' | 
'/email/pro/{service}/domain/{domainName}/disclaimer' | 
'/email/pro/{service}/task' | 
'/email/pro/{service}/task/{id}';

type PathsemailproPUT = '/email/pro/{service}/serviceInfos' | 
'/email/pro/{service}/account/{email}' | 
'/email/pro/{service}' | 
'/email/pro/{service}/externalContact/{externalEmailAddress}' | 
'/email/pro/{service}/domain/{domainName}' | 
'/email/pro/{service}/domain/{domainName}/disclaimer';

type PathsemailproPOST = '/email/pro/{service}/account/{email}/fullAccess' | 
'/email/pro/{service}/account/{email}/terminate' | 
'/email/pro/{service}/account/{email}/alias' | 
'/email/pro/{service}/account/{email}/sendAs' | 
'/email/pro/{service}/account/{email}/changePassword' | 
'/email/pro/{service}/account/{email}/sendOnBehalfTo' | 
'/email/pro/{service}/account/{email}/diagnostics' | 
'/email/pro/{service}/externalContact' | 
'/email/pro/{service}/updateFlagsOnAllAccounts' | 
'/email/pro/{service}/domain' | 
'/email/pro/{service}/domain/{domainName}/disclaimer';

type PathsemailproDELETE = '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}' | 
'/email/pro/{service}/account/{email}/alias/{alias}' | 
'/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/pro/{service}/externalContact/{externalEmailAddress}' | 
'/email/pro/{service}/domain/{domainName}' | 
'/email/pro/{service}/domain/{domainName}/disclaimer';

class Apiemailpro extends ApiCommon {
  /**
  Operations about the PROEMAIL service
  List available services
  **/
  public get(path: '/email/pro', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/serviceInfos', pathParams: {service?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the email.pro.AccountFullAccess objects
  Full access granted users for this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/fullAccess', pathParams: {service?: string, email?: string}, queryParams: null): Promise<Number[]>;
  /**
  Users having full access on this mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailProAccountFullAccess>;
  /**
  Mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}', pathParams: {service?: string, email?: string}, queryParams: null): Promise<EmailProAccount>;
  /**
  List the email.pro.AccountAlias objects
  Aliases associated to this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/alias', pathParams: {service?: string, email?: string}, queryParams: null): Promise<string[]>;
  /**
  Aliases on this mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/alias/{alias}', pathParams: {service?: string, email?: string, alias?: string}, queryParams: null): Promise<EmailProAccountAlias>;
  /**
  List the email.pro.AccountSendAs objects
  Send as granted users for this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/sendAs', pathParams: {service?: string, email?: string}, queryParams: null): Promise<Number[]>;
  /**
  Users authorized to send mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailProAccountSendAs>;
  /**
  List the email.pro.Task objects
  Pending task for this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/tasks', pathParams: {service?: string, email?: string}, queryParams: null): Promise<Number[]>;
  /**
  Organization task details
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/tasks/{id}', pathParams: {service?: string, email?: string, id?: Number}, queryParams: null): Promise<EmailProTask>;
  /**
  List the email.pro.AccountSendOnBehalfTo objects
  SendOnBehalfTo granted users for this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo', pathParams: {service?: string, email?: string}, queryParams: null): Promise<Number[]>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, queryParams: null): Promise<EmailProAccountSendOnBehalfTo>;
  /**
  Account Diagnosis
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/diagnostics', pathParams: {service?: string, email?: string}, queryParams: null): Promise<EmailProAccountDiagnosis>;
  /**
  List the email.pro.Account objects
  Accounts associated to this pro service
  **/
  public get(path: '/email/pro/{service}/account', pathParams: {service?: string}, queryParams: {primaryEmailAddress?: string, id?: Number}): Promise<string[]>;
  /**
  Email pro service
  Get this object properties
  **/
  public get(path: '/email/pro/{service}', pathParams: {service?: string}, queryParams: null): Promise<EmailProService>;
  /**
  External contact for this pro service
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', pathParams: {service?: string, externalEmailAddress?: string}, queryParams: null): Promise<EmailProExternalContact>;
  /**
  List the email.pro.ExternalContact objects
  External contacts for this service
  **/
  public get(path: '/email/pro/{service}/externalContact', pathParams: {service?: string}, queryParams: {externalEmailAddress?: string, id?: Number, lastName?: string, displayName?: string, firstName?: string}): Promise<string[]>;
  /**
  Server
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/server', pathParams: {service?: string}, queryParams: null): Promise<EmailProServer>;
  /**
  billingMigrated operations
  Detects billing transition status for the service
  **/
  public get(path: '/email/pro/{service}/billingMigrated', pathParams: {service?: string}, queryParams: null): Promise<boolean>;
  /**
  billingPlan operations
  Emailpro billing plan
  **/
  public get(path: '/email/pro/{service}/billingPlan', pathParams: {service?: string}, queryParams: null): Promise<string>;
  /**
  List the email.pro.Domain objects
  Domains associated to this service
  **/
  public get(path: '/email/pro/{service}/domain', pathParams: {service?: string}, queryParams: {state?: EmailProObjectStateEnum}): Promise<string[]>;
  /**
  Domain
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/domain/{domainName}', pathParams: {service?: string, domainName?: string}, queryParams: null): Promise<EmailProDomain>;
  /**
  disclaimerAttribute operations
  Get diclaimer attributes to substitute with Active Directory properties
  **/
  public get(path: '/email/pro/{service}/domain/{domainName}/disclaimerAttribute', pathParams: {service?: string, domainName?: string}, queryParams: null): Promise<EmailProDisclaimerAttributeEnum[]>;
  /**
  disclaimer
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/domain/{domainName}/disclaimer', pathParams: {service?: string, domainName?: string}, queryParams: null): Promise<EmailProDisclaimer>;
  /**
  List the email.pro.Task objects
  Pending actions
  **/
  public get(path: '/email/pro/{service}/task', pathParams: {service?: string}, queryParams: null): Promise<Number[]>;
  /**
  Organization task details
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/task/{id}', pathParams: {service?: string, id?: Number}, queryParams: null): Promise<EmailProTask>;
  public get(path: PathsemailproGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/serviceInfos', pathParams: {service?: string}, bodyParams: null): Promise<void>;
  /**
  Mailbox
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/account/{email}', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<void>;
  /**
  Email pro service
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}', pathParams: {service?: string}, bodyParams: null): Promise<void>;
  /**
  External contact for this pro service
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', pathParams: {service?: string, externalEmailAddress?: string}, bodyParams: null): Promise<void>;
  /**
  Domain
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/domain/{domainName}', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<void>;
  /**
  disclaimer
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/domain/{domainName}/disclaimer', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsemailproPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the email.pro.AccountFullAccess objects
  Allow full access to a user
  **/
  public post(path: '/email/pro/{service}/account/{email}/fullAccess', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  terminate operations
  Terminate account at expiration date
  **/
  public post(path: '/email/pro/{service}/account/{email}/terminate', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<string>;
  /**
  List the email.pro.AccountAlias objects
  Create new alias
  **/
  public post(path: '/email/pro/{service}/account/{email}/alias', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  List the email.pro.AccountSendAs objects
  Allow another user to send mails from this mailbox
  **/
  public post(path: '/email/pro/{service}/account/{email}/sendAs', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  changePassword operations
  Change mailbox password
  **/
  public post(path: '/email/pro/{service}/account/{email}/changePassword', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  List the email.pro.AccountSendOnBehalfTo objects
  Allow another user to Send On Behalf To mails from this mailbox
  **/
  public post(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  Account Diagnosis
  Create new diagnosis request
  **/
  public post(path: '/email/pro/{service}/account/{email}/diagnostics', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  List the email.pro.ExternalContact objects
  create new external contact
  **/
  public post(path: '/email/pro/{service}/externalContact', pathParams: {service?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  updateFlagsOnAllAccounts operations
  Update spam and virus flags on all active accounts
  **/
  public post(path: '/email/pro/{service}/updateFlagsOnAllAccounts', pathParams: {service?: string}, bodyParams: null): Promise<void>;
  /**
  List the email.pro.Domain objects
  Create new domain in pro services
  **/
  public post(path: '/email/pro/{service}/domain', pathParams: {service?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  disclaimer
  Create organization disclaimer of each email
  **/
  public post(path: '/email/pro/{service}/domain/{domainName}/disclaimer', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<EmailProTask>;
  public post(path: PathsemailproPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Users having full access on this mailbox
  Revoke full access
  **/
  public delete(path: '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, bodyParams: null): Promise<EmailProTask>;
  /**
  Mailbox
  Delete existing mailbox in pro server
  **/
  public delete(path: '/email/pro/{service}/account/{email}', pathParams: {service?: string, email?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  Aliases on this mailbox
  Delete existing alias
  **/
  public delete(path: '/email/pro/{service}/account/{email}/alias/{alias}', pathParams: {service?: string, email?: string, alias?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  Users authorized to send mails from this mailbox
  Delete allowed user for sendAs
  **/
  public delete(path: '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, bodyParams: null): Promise<EmailProTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', pathParams: {service?: string, email?: string, allowedAccountId?: Number}, bodyParams: null): Promise<EmailProTask>;
  /**
  External contact for this pro service
  delete external contact
  **/
  public delete(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', pathParams: {service?: string, externalEmailAddress?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  Domain
  Delete existing domain in pro services
  **/
  public delete(path: '/email/pro/{service}/domain/{domainName}', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<EmailProTask>;
  /**
  disclaimer
  Delete existing organization disclaimer
  **/
  public delete(path: '/email/pro/{service}/domain/{domainName}/disclaimer', pathParams: {service?: string, domainName?: string}, bodyParams: null): Promise<EmailProTask>;
  public delete(path: PathsemailproDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

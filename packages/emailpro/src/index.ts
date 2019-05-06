import { ApiCommon } from '@ovh-api/common';
/**
 * Mailbox
 */
export interface EmailProAccount {
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
  creationDate?: Date;
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
  expirationDate?: Date;
  /**
   * expiration date
   *
   */
  expirationOutlookDate?: Date;
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
  lastLogoffDate?: Date;
  /**
   * Last logon
   *
   */
  lastLogonDate?: Date;
  /**
   * Account last name
   *
   */
  lastName?: string;
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
   * Enable or disable anti-virus and anti-spam
   *
   */
  mailingFilter?: EmailProMailingFilterEnum[];
  /**
   * Time of account's password last update
   *
   */
  passwordLastUpdate?: Date;
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
  spamTicketNumber?: Number;
  /**
   * Account state
   *
   */
  state?: EmailProObjectStateEnum;
  /**
   * Pending tasks for this account
   *
   */
  taskPendingId?: Number;
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
  lastCheck?: Date;
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
  taskPendingId?: Number;
  /**
   * Domain type
   *
   */
  type?: EmailProDomainTypeEnum;
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
   * Creation date
   *
   */
  creationDate?: Date;
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
   * Contact state
   *
   */
  state?: EmailProObjectStateEnum;
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
  taskPendingId?: Number;
  /**
   * Server version
   *
   */
  version?: Number;
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
  lastUpdateDate?: Date;
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
   * Type of your offer
   *
   */
  offer?: EmailProServiceOfferEnum;
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
  taskPendingId?: Number;
  /**
   * URL for web interface
   *
   */
  webUrl?: string;
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
   * Completion date
   *
   */
  finishDate?: Date;
  /**
   * Function name
   *
   */
  function?: EmailProTaskFunctionEnum;
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
  /**
   * Creation date
   *
   */
  todoDate?: Date;
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
  creationDate?: Date;
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
  creation?: Date;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  expiration?: Date;
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
type PathsEmailproGET = '/email/pro/{service}/billingPlan' | 
'/email/pro/{service}/serviceInfos' | 
'/email/pro/{service}' | 
'/email/pro/{service}/domain/{domainName}/disclaimer' | 
'/email/pro/{service}/domain/{domainName}/disclaimerAttribute' | 
'/email/pro/{service}/domain/{domainName}' | 
'/email/pro/{service}/domain' | 
'/email/pro/{service}/task/{id}' | 
'/email/pro/{service}/task' | 
'/email/pro/{service}/account/{email}/diagnostics' | 
'/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}/sendAs' | 
'/email/pro/{service}/account/{email}/tasks' | 
'/email/pro/{service}/account/{email}/tasks/{id}' | 
'/email/pro/{service}/account/{email}' | 
'/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}/sendOnBehalfTo' | 
'/email/pro/{service}/account/{email}/alias' | 
'/email/pro/{service}/account/{email}/alias/{alias}' | 
'/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}/fullAccess' | 
'/email/pro/{service}/account' | 
'/email/pro/{service}/externalContact/{externalEmailAddress}' | 
'/email/pro/{service}/externalContact' | 
'/email/pro/{service}/billingMigrated' | 
'/email/pro/{service}/server' | 
'/email/pro';

type PathsEmailproPUT = '/email/pro/{service}/serviceInfos' | 
'/email/pro/{service}' | 
'/email/pro/{service}/domain/{domainName}/disclaimer' | 
'/email/pro/{service}/domain/{domainName}' | 
'/email/pro/{service}/account/{email}' | 
'/email/pro/{service}/externalContact/{externalEmailAddress}';

type PathsEmailproPOST = '/email/pro/{service}/domain/{domainName}/disclaimer' | 
'/email/pro/{service}/domain' | 
'/email/pro/{service}/account/{email}/diagnostics' | 
'/email/pro/{service}/account/{email}/terminate' | 
'/email/pro/{service}/account/{email}/sendAs' | 
'/email/pro/{service}/account/{email}/sendOnBehalfTo' | 
'/email/pro/{service}/account/{email}/alias' | 
'/email/pro/{service}/account/{email}/fullAccess' | 
'/email/pro/{service}/account/{email}/changePassword' | 
'/email/pro/{service}/externalContact' | 
'/email/pro/{service}/updateFlagsOnAllAccounts';

type PathsEmailproDELETE = '/email/pro/{service}/domain/{domainName}/disclaimer' | 
'/email/pro/{service}/domain/{domainName}' | 
'/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}' | 
'/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' | 
'/email/pro/{service}/account/{email}/alias/{alias}' | 
'/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}' | 
'/email/pro/{service}/externalContact/{externalEmailAddress}';

export class ApiEmailpro extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  billingPlan operations
  Emailpro billing plan
  **/
  public get(path: '/email/pro/{service}/billingPlan', pathParams: {service: string}): Promise<string>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/serviceInfos', pathParams: {service: string}): Promise<ServicesService>;
  /**
  Email pro service
  Get this object properties
  **/
  public get(path: '/email/pro/{service}', pathParams: {service: string}): Promise<EmailProService>;
  /**
  disclaimer
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/domain/{domainName}/disclaimer', pathParams: {service: string, domainName: string}): Promise<EmailProDisclaimer>;
  /**
  disclaimerAttribute operations
  Get diclaimer attributes to substitute with Active Directory properties
  **/
  public get(path: '/email/pro/{service}/domain/{domainName}/disclaimerAttribute', pathParams: {service: string, domainName: string}): Promise<EmailProDisclaimerAttributeEnum[]>;
  /**
  Domain
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/domain/{domainName}', pathParams: {service: string, domainName: string}): Promise<EmailProDomain>;
  /**
  List the email.pro.Domain objects
  Domains associated to this service
  **/
  public get(path: '/email/pro/{service}/domain', pathParams: {service: string}, queryParams: {state?: EmailProObjectStateEnum}): Promise<string[]>;
  /**
  Organization task details
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/task/{id}', pathParams: {service: string, id: Number}): Promise<EmailProTask>;
  /**
  List the email.pro.Task objects
  Pending actions
  **/
  public get(path: '/email/pro/{service}/task', pathParams: {service: string}): Promise<Number[]>;
  /**
  Account Diagnosis
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/diagnostics', pathParams: {service: string, email: string}): Promise<EmailProAccountDiagnosis>;
  /**
  Users authorized to send mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}', pathParams: {service: string, email: string, allowedAccountId: Number}): Promise<EmailProAccountSendAs>;
  /**
  List the email.pro.AccountSendAs objects
  Send as granted users for this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/sendAs', pathParams: {service: string, email: string}): Promise<Number[]>;
  /**
  List the email.pro.Task objects
  Pending task for this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/tasks', pathParams: {service: string, email: string}): Promise<Number[]>;
  /**
  Organization task details
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/tasks/{id}', pathParams: {service: string, email: string, id: Number}): Promise<EmailProTask>;
  /**
  Mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}', pathParams: {service: string, email: string}): Promise<EmailProAccount>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', pathParams: {service: string, email: string, allowedAccountId: Number}): Promise<EmailProAccountSendOnBehalfTo>;
  /**
  List the email.pro.AccountSendOnBehalfTo objects
  SendOnBehalfTo granted users for this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo', pathParams: {service: string, email: string}): Promise<Number[]>;
  /**
  List the email.pro.AccountAlias objects
  Aliases associated to this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/alias', pathParams: {service: string, email: string}): Promise<string[]>;
  /**
  Aliases on this mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/alias/{alias}', pathParams: {service: string, email: string, alias: string}): Promise<EmailProAccountAlias>;
  /**
  Users having full access on this mailbox
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}', pathParams: {service: string, email: string, allowedAccountId: Number}): Promise<EmailProAccountFullAccess>;
  /**
  List the email.pro.AccountFullAccess objects
  Full access granted users for this mailbox
  **/
  public get(path: '/email/pro/{service}/account/{email}/fullAccess', pathParams: {service: string, email: string}): Promise<Number[]>;
  /**
  List the email.pro.Account objects
  Accounts associated to this pro service
  **/
  public get(path: '/email/pro/{service}/account', pathParams: {service: string}, queryParams: {id?: Number, primaryEmailAddress?: string}): Promise<string[]>;
  /**
  External contact for this pro service
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', pathParams: {service: string, externalEmailAddress: string}): Promise<EmailProExternalContact>;
  /**
  List the email.pro.ExternalContact objects
  External contacts for this service
  **/
  public get(path: '/email/pro/{service}/externalContact', pathParams: {service: string}, queryParams: {externalEmailAddress?: string, firstName?: string, id?: Number, lastName?: string, displayName?: string}): Promise<string[]>;
  /**
  billingMigrated operations
  Detects billing transition status for the service
  **/
  public get(path: '/email/pro/{service}/billingMigrated', pathParams: {service: string}): Promise<boolean>;
  /**
  Server
  Get this object properties
  **/
  public get(path: '/email/pro/{service}/server', pathParams: {service: string}): Promise<EmailProServer>;
  /**
  Operations about the PROEMAIL service
  List available services
  **/
  public get(path: '/email/pro'): Promise<string[]>;
  public get(path: PathsEmailproGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/serviceInfos', pathParams: {service: string}): Promise<void>;
  /**
  Email pro service
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}', pathParams: {service: string}): Promise<void>;
  /**
  disclaimer
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/domain/{domainName}/disclaimer', pathParams: {service: string, domainName: string}): Promise<void>;
  /**
  Domain
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/domain/{domainName}', pathParams: {service: string, domainName: string}): Promise<void>;
  /**
  Mailbox
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/account/{email}', pathParams: {service: string, email: string}): Promise<void>;
  /**
  External contact for this pro service
  Alter this object properties
  **/
  public put(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', pathParams: {service: string, externalEmailAddress: string}): Promise<void>;
  public put(path: PathsEmailproPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  disclaimer
  Create organization disclaimer of each email
  **/
  public post(path: '/email/pro/{service}/domain/{domainName}/disclaimer', pathParams: {service: string, domainName: string}): Promise<EmailProTask>;
  /**
  List the email.pro.Domain objects
  Create new domain in pro services
  **/
  public post(path: '/email/pro/{service}/domain', pathParams: {service: string}): Promise<EmailProTask>;
  /**
  Account Diagnosis
  Create new diagnosis request
  **/
  public post(path: '/email/pro/{service}/account/{email}/diagnostics', pathParams: {service: string, email: string}): Promise<EmailProTask>;
  /**
  terminate operations
  Terminate account at expiration date
  **/
  public post(path: '/email/pro/{service}/account/{email}/terminate', pathParams: {service: string, email: string}): Promise<string>;
  /**
  List the email.pro.AccountSendAs objects
  Allow another user to send mails from this mailbox
  **/
  public post(path: '/email/pro/{service}/account/{email}/sendAs', pathParams: {service: string, email: string}): Promise<EmailProTask>;
  /**
  List the email.pro.AccountSendOnBehalfTo objects
  Allow another user to Send On Behalf To mails from this mailbox
  **/
  public post(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo', pathParams: {service: string, email: string}): Promise<EmailProTask>;
  /**
  List the email.pro.AccountAlias objects
  Create new alias
  **/
  public post(path: '/email/pro/{service}/account/{email}/alias', pathParams: {service: string, email: string}): Promise<EmailProTask>;
  /**
  List the email.pro.AccountFullAccess objects
  Allow full access to a user
  **/
  public post(path: '/email/pro/{service}/account/{email}/fullAccess', pathParams: {service: string, email: string}): Promise<EmailProTask>;
  /**
  changePassword operations
  Change mailbox password
  **/
  public post(path: '/email/pro/{service}/account/{email}/changePassword', pathParams: {service: string, email: string}): Promise<EmailProTask>;
  /**
  List the email.pro.ExternalContact objects
  create new external contact
  **/
  public post(path: '/email/pro/{service}/externalContact', pathParams: {service: string}): Promise<EmailProTask>;
  /**
  updateFlagsOnAllAccounts operations
  Update spam and virus flags on all active accounts
  **/
  public post(path: '/email/pro/{service}/updateFlagsOnAllAccounts', pathParams: {service: string}): Promise<void>;
  public post(path: PathsEmailproPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  disclaimer
  Delete existing organization disclaimer
  **/
  public delete(path: '/email/pro/{service}/domain/{domainName}/disclaimer', pathParams: {service: string, domainName: string}): Promise<EmailProTask>;
  /**
  Domain
  Delete existing domain in pro services
  **/
  public delete(path: '/email/pro/{service}/domain/{domainName}', pathParams: {service: string, domainName: string}): Promise<EmailProTask>;
  /**
  Users authorized to send mails from this mailbox
  Delete allowed user for sendAs
  **/
  public delete(path: '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}', pathParams: {service: string, email: string, allowedAccountId: Number}): Promise<EmailProTask>;
  /**
  Mailbox
  Delete existing mailbox in pro server
  **/
  public delete(path: '/email/pro/{service}/account/{email}', pathParams: {service: string, email: string}): Promise<EmailProTask>;
  /**
  Get users authorized to Send On Behalf To mails from this mailbox
  Delete allowed user for SendOnBehalfTo
  **/
  public delete(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', pathParams: {service: string, email: string, allowedAccountId: Number}): Promise<EmailProTask>;
  /**
  Aliases on this mailbox
  Delete existing alias
  **/
  public delete(path: '/email/pro/{service}/account/{email}/alias/{alias}', pathParams: {service: string, email: string, alias: string}): Promise<EmailProTask>;
  /**
  Users having full access on this mailbox
  Revoke full access
  **/
  public delete(path: '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}', pathParams: {service: string, email: string, allowedAccountId: Number}): Promise<EmailProTask>;
  /**
  External contact for this pro service
  delete external contact
  **/
  public delete(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', pathParams: {service: string, externalEmailAddress: string}): Promise<EmailProTask>;
  public delete(path: PathsEmailproDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Possible values for filter action
 */
export type DomainDomainFilterActionEnum = 'accept' | 'account' | 'delete' | 'redirect';
/**
 * Possible values for filter operation
 */
export type DomainDomainFilterOperandEnum = 'checkspf' | 'contains' | 'noContains';
/**
 * Possible values for MX filter
 */
export type DomainDomainMXFilterEnum = 'CUSTOM' | 'FULL_FILTERING' | 'NO_FILTERING' | 'REDIRECT' | 'SIMPLE_FILTERING';
/**
 * Possible values for mailing list language
 */
export type DomainDomainMlLanguageEnum = 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pl' | 'pt';
/**
 * Structure of mailinglist limits
 */
export interface DomainDomainMlLimits {
  /**
   * Maximum number of subscribers
   *
   */
  subscribers: number;
}
/**
 * Structure of imapCopy
 */
export interface DomainDomainMlOptionsStruct {
  /**
   * If true, messages are moderate
   *
   */
  moderatorMessage: boolean;
  /**
   * If true, enabled moderation for subscribe
   *
   */
  subscribeByModerator: boolean;
  /**
   * If true, just user can post
   *
   */
  usersPostOnly: boolean;
}
/**
 * Possible values for pop action task
 */
export type DomainDomainPopActionEnum = 'addAccount' | 'changeAccount' | 'changePassword' | 'deleteAccount' | 'internalMigration' | 'migration' | 'temporaryTask' | 'unknown';
/**
 * Values of quota account (pop, mailing list, redirection, responder and big pop)
 */
export interface DomainDomainQuota {
  /**
   * Maximum number of mailboxes
   *
   */
  account: number;
  /**
   * Maximum number of aliases
   *
   */
  alias: number;
  /**
   * Maximum number of mailing lists
   *
   */
  mailingList: number;
  /**
   * Maximum number of redirections
   *
   */
  redirection: number;
  /**
   * Maximum number of responders
   *
   */
  responder: number;
}
/**
 * Possible values for pop action task
 */
export type DomainDomainSpecialAccountActionEnum = 'add' | 'change' | 'delete';
/**
 * Possible type task
 */
export type DomainDomainSpecialAccountTypeEnum = '25g' | 'alias' | 'delete' | 'filter' | 'forward' | 'responder';
/**
 * Possible values for status domain
 */
export type DomainDomainStatusEnum = 'close' | 'ok' | 'readOnly' | 'unknown';
/**
 * Values of number account (account, mailing list, redirection and responder)
 */
export interface DomainDomainSummary {
  /**
   * Number of mailboxes
   *
   */
  account: number;
  /**
   * Number of mailing lists
   *
   */
  mailingList: number;
  /**
   * Number of redirections
   *
   */
  redirection: number;
  /**
   * Number of responders
   *
   */
  responder: number;
}
/**
 * Structure of usage account
 */
export interface DomainDomainUsageAccountStruct {
  /**
   * Timestamp
   *
   */
  date?: string;
  /**
   * Number of message in mailbox
   *
   */
  emailCount?: number;
  /**
   * Size of mailbox (bytes)
   *
   */
  quota?: number;
}
/**
 * Zone resource records
 */
export interface DomainZoneRecord {
  /**
   * Resource record Name
   *
   */
  fieldType: ZoneNamedResolutionFieldTypeEnum;
  /**
   * Id of the zone resource record
   *
   */
  id: number;
  /**
   * Resource record subdomain
   *
   */
  subDomain?: string;
  /**
   * Resource record target
   *
   */
  target: string;
  /**
   * Resource record ttl
   *
   */
  ttl?: number;
  /**
   * Resource record zone
   *
   */
  zone: string;
}
/**
 * Account List
 */
export interface EmailDomainAccount {
  /**
   * Name of account
   *
   */
  accountName: string;
  /**
   * Account description
   *
   */
  description: string;
  /**
   * Name of domain
   *
   */
  domain: string;
  /**
   * Email
   *
   */
  email: string;
  /**
   * If true your account is blocked
   *
   */
  isBlocked: boolean;
  /**
   * Size of your account in bytes
   *
   */
  size: number;
}
/**
 * Account List
 */
export interface EmailDomainAccountDelegated {
  /**
   * Name of account
   *
   */
  accountName: string;
  /**
   * List of allowed sizes for this account in bytes
   *
   */
  allowedAccountSize?: number[];
  /**
   * Account description
   *
   */
  description: string;
  /**
   * Name of domain
   *
   */
  domain: string;
  /**
   * Email
   *
   */
  email: string;
  /**
   * If true your account is blocked
   *
   */
  isBlocked: boolean;
  /**
   * Size of your account in bytes
   *
   */
  size: number;
}
/**
 * Email ACL
 */
export interface EmailDomainAcl {
  /**
   * OVH customer unique identifier
   *
   */
  accountId: string;
}
/**
 * Delegation List
 */
export interface EmailDomainDelegation {
  /**
   * OVH customer unique identifier
   *
   */
  accountId: string;
}
/**
 * Email diagnoses
 */
export interface EmailDomainDiagnose {
  /**
   * Creation date of diagnose
   *
   */
  date: string;
  /**
   * Function of diagnose
   *
   */
  function: EmailDomainDomainDiagnoseFunctionEnum;
  /**
   * Id of diagnose
   *
   */
  id: number;
  /**
   * Name of account
   *
   */
  name?: string;
  /**
   * Result of diagnose
   *
   */
  result?: EmailDomainDomainDiagnoseResultEnum;
  /**
   * Trace of diagnose
   *
   */
  trace?: EmailDomainDomainDiagnoseTraceStruct<EmailDomainDomainDiagnoseResultEnum>[];
}
/**
 * Function of diagnose
 */
export type EmailDomainDomainDiagnoseFunctionEnum = 'MX';
/**
 * Result of diagnose
 */
export type EmailDomainDomainDiagnoseResultEnum = 'CUSTOM' | 'DEPRECATED' | 'KO' | 'OK';
/**
 * Test and result, with proper test strings
 */
export interface EmailDomainDomainDiagnoseTraceStruct<T> {
  /**
   */
  result: T;
  /**
   */
  test: string;
}
/**
 * Domain service
 */
export interface EmailDomainDomainService {
  /**
   * List of allowed sizes for this domain in bytes
   *
   */
  allowedAccountSize?: number[];
  /**
   * Creation date of domain
   *
   */
  creationDate?: string;
  /**
   * Name of domain
   *
   */
  domain: string;
  /**
   * Filerz of domain
   *
   */
  filerz?: number;
  /**
   * Name of servicelinked with this domain
   *
   */
  linkTo?: string;
  /**
   * Name of new MXPlan service
   *
   */
  migratedMXPlanServiceName?: string;
  /**
   * Offer of email service
   *
   */
  offer?: string;
  /**
   * Domain Status
   *
   */
  status: DomainDomainStatusEnum;
}
/**
 * Filter List
 */
export interface EmailDomainFilter {
  /**
   * Action of filter
   *
   */
  action?: DomainDomainFilterActionEnum;
  /**
   * Action parameter of filter
   *
   */
  actionParam?: string;
  /**
   * If true filter is active
   *
   */
  active: boolean;
  /**
   * Domain name of filter
   *
   */
  domain: string;
  /**
   * Filter name
   *
   */
  name: string;
  /**
   * Account name of filter
   *
   */
  pop: string;
  /**
   * Priority of filter
   *
   */
  priority: number;
}
/**
 * Mailing List
 */
export interface EmailDomainMailingList {
  /**
   * Id of mailing list
   *
   */
  id: number;
  /**
   * Language of mailing list
   *
   */
  language?: DomainDomainMlLanguageEnum;
  /**
   * Name of mailing list
   *
   */
  name: string;
  /**
   * Subscribers number of mailing list
   *
   */
  nbSubscribers?: number;
  /**
   * Last update subscribers
   *
   */
  nbSubscribersUpdateDate?: string;
  /**
   * Options of mailing list
   *
   */
  options: DomainDomainMlOptionsStruct;
  /**
   * Owner email of mailing list
   *
   */
  ownerEmail: string;
  /**
   * Email to reply of mailing list
   *
   */
  replyTo: string;
}
/**
 * Migration account
 */
export interface EmailDomainMigrationAccount {
  /**
   * Destination account name
   *
   */
  destinationEmailAddress: string;
  /**
   * Account maximum size
   *
   */
  quota: number;
}
/**
 * Result code of check migration
 */
export type EmailDomainMigrationCheckCodeEnum = 'ACCOUNT_EMPTY' | 'ACCOUNT_INPROGRESS' | 'DELEGATION_EXIST' | 'DOMAIN_EMPTY' | 'FILTER_EXIST' | 'FORWARD_EXIST' | 'FORWARD_LOCAL' | 'MAILINGLIST_EXIST' | 'MAILINGLIST_INPROGRESS' | 'MAILPROXY_BAD_INFRA' | 'MAILPROXY_EMPTY' | 'MAILPROXY_INPROGRESS' | 'MAILPROXY_RESERVATION' | 'REDIRECTION_INPROGRESS' | 'RESPONDER_EXIST' | 'RESPONDER_INPROGRESS' | 'UNKNOW';
/**
 * Check Migration result
 */
export interface EmailDomainMigrationCheckResultStruct {
  /**
   * Result code of check migration
   *
   */
  code: EmailDomainMigrationCheckCodeEnum;
  /**
   * Details of result code
   *
   */
  details?: string;
}
/**
 * Check Migration result
 */
export interface EmailDomainMigrationCheckStruct {
  /**
   * List of aliases
   *
   */
  alias?: string[];
  /**
   * List of errors
   *
   */
  error?: EmailDomainMigrationCheckResultStruct[];
  /**
   * List of filters
   *
   */
  filter?: string[];
  /**
   * List of forwards
   *
   */
  forward?: string[];
  /**
   * List of warnings
   *
   */
  warning?: EmailDomainMigrationCheckResultStruct[];
}
/**
 * Migration service
 */
export interface EmailDomainMigrationService {
  /**
   * Admin contact of service
   *
   */
  contactAdmin: string;
  /**
   * Billing contact of service
   *
   */
  contactBilling: string;
  /**
   * Tech contact of service
   *
   */
  contactTech: string;
  /**
   * Creation date of service
   *
   */
  creation: string;
  /**
   * Service name allowed as migration destination
   *
   */
  destinationServiceName: string;
  /**
   * Expiration date of service
   *
   */
  expiration: string;
  /**
   * Offer type of service
   *
   */
  type: EmailDomainMigrationServiceType;
}
/**
 * Types of migration service
 */
export type EmailDomainMigrationServiceType = 'EMAIL PRO' | 'HOSTED EXCHANGE' | 'PRIVATE EXCHANGE' | 'PROVIDER EXCHANGE';
/**
 * Moderators List
 */
export interface EmailDomainModerator {
  /**
   */
  domain: string;
  /**
   */
  email: string;
  /**
   */
  mailinglist: string;
}
/**
 * Global Redirection
 */
export interface EmailDomainRedirectionGlobal {
  /**
   */
  from: string;
  /**
   */
  id: string;
  /**
   */
  to: string;
}
/**
 * Responder
 */
export interface EmailDomainResponder {
  /**
   * Name of account
   *
   */
  account: string;
  /**
   * Content of responder
   *
   */
  content: string;
  /**
   * If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address
   *
   */
  copy: boolean;
  /**
   * Account where copy emails
   *
   */
  copyTo?: string;
  /**
   * Date of start responder
   *
   */
  from?: string;
  /**
   * Date of end responder
   *
   */
  to?: string;
}
/**
 * Responder of account
 */
export interface EmailDomainResponderAccount {
  /**
   * Name of account
   *
   */
  account: string;
  /**
   * Content of responder
   *
   */
  content: string;
  /**
   * If true, emails will be copy to emailToCopy address
   *
   */
  copy: boolean;
  /**
   * Account where copy emails
   *
   */
  copyTo?: string;
  /**
   * Date of start responder
   *
   */
  from?: string;
  /**
   * Date of end responder
   *
   */
  to?: string;
}
/**
 * Rule List
 */
export interface EmailDomainRule {
  /**
   * Header to be filtered
   *
   */
  header: string;
  /**
   */
  id: number;
  /**
   * Rule of filter
   *
   */
  operand: DomainDomainFilterOperandEnum;
  /**
   * Rule parameter of filter
   *
   */
  value: string;
}
/**
 * Subscribers List
 */
export interface EmailDomainSubscriber {
  /**
   */
  domain: string;
  /**
   */
  email: string;
  /**
   */
  mailinglist: string;
}
/**
 * Task filter List
 */
export interface EmailDomainTaskFilter {
  /**
   * Account name of task
   *
   */
  account: string;
  /**
   * Action of task
   *
   */
  action: string;
  /**
   * Domain name of task
   *
   */
  domain: string;
  /**
   * Id of task
   *
   */
  id: number;
  /**
   * Creation date of task
   *
   */
  timestamp: string;
}
/**
 * Task Mailing List
 */
export interface EmailDomainTaskMl {
  /**
   */
  account: string;
  /**
   */
  action: string;
  /**
   */
  date: string;
  /**
   */
  domain: string;
  /**
   */
  id: number;
  /**
   */
  language: DomainDomainMlLanguageEnum;
}
/**
 * Task Pop List
 */
export interface EmailDomainTaskPop {
  /**
   * Action of task
   *
   */
  action: DomainDomainPopActionEnum;
  /**
   * Creation date of task
   *
   */
  date: string;
  /**
   * Domain name of task
   *
   */
  domain: string;
  /**
   * Id of task
   *
   */
  id: number;
  /**
   * Account name of task
   *
   */
  name: string;
}
/**
 * Task special account List
 */
export interface EmailDomainTaskSpecialAccount {
  /**
   * Account name of task
   *
   */
  account: string;
  /**
   * Action of task
   *
   */
  action: DomainDomainSpecialAccountActionEnum;
  /**
   * Creation date of task
   *
   */
  date: string;
  /**
   * Domain name of task
   *
   */
  domain: string;
  /**
   * Id of task
   *
   */
  id: number;
  /**
   * Type of action filter
   *
   */
  type: DomainDomainSpecialAccountTypeEnum;
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
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
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
/**
 * Resource record fieldType
 */
export type ZoneNamedResolutionFieldTypeEnum = 'A' | 'AAAA' | 'CAA' | 'CNAME' | 'DKIM' | 'DMARC' | 'LOC' | 'MX' | 'NAPTR' | 'NS' | 'PTR' | 'SPF' | 'SRV' | 'SSHFP' | 'TLSA' | 'TXT';
type PathsEmailDomainGET = '/email/domain' | 
'/email/domain/delegatedAccount' | 
'/email/domain/delegatedAccount/{email}' | 
'/email/domain/delegatedAccount/{email}/filter' | 
'/email/domain/delegatedAccount/{email}/filter/{name}' | 
'/email/domain/delegatedAccount/{email}/filter/{name}/rule' | 
'/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}' | 
'/email/domain/delegatedAccount/{email}/responder' | 
'/email/domain/mailingListLimits' | 
'/email/domain/{domain}' | 
'/email/domain/{domain}/account' | 
'/email/domain/{domain}/account/{accountName}' | 
'/email/domain/{domain}/account/{accountName}/delegation' | 
'/email/domain/{domain}/account/{accountName}/delegation/{accountId}' | 
'/email/domain/{domain}/account/{accountName}/filter' | 
'/email/domain/{domain}/account/{accountName}/filter/{name}' | 
'/email/domain/{domain}/account/{accountName}/filter/{name}/rule' | 
'/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}' | 
'/email/domain/{domain}/account/{accountName}/migrate' | 
'/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}' | 
'/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress' | 
'/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}' | 
'/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate' | 
'/email/domain/{domain}/account/{accountName}/usage' | 
'/email/domain/{domain}/acl' | 
'/email/domain/{domain}/acl/{accountId}' | 
'/email/domain/{domain}/dnsMXFilter' | 
'/email/domain/{domain}/dnsMXRecords' | 
'/email/domain/{domain}/mailingList' | 
'/email/domain/{domain}/mailingList/{name}' | 
'/email/domain/{domain}/mailingList/{name}/moderator' | 
'/email/domain/{domain}/mailingList/{name}/moderator/{email}' | 
'/email/domain/{domain}/mailingList/{name}/subscriber' | 
'/email/domain/{domain}/mailingList/{name}/subscriber/{email}' | 
'/email/domain/{domain}/quota' | 
'/email/domain/{domain}/recommendedDNSRecords' | 
'/email/domain/{domain}/redirection' | 
'/email/domain/{domain}/redirection/{id}' | 
'/email/domain/{domain}/responder' | 
'/email/domain/{domain}/responder/{account}' | 
'/email/domain/{domain}/serviceInfos' | 
'/email/domain/{domain}/summary' | 
'/email/domain/{domain}/task/account' | 
'/email/domain/{domain}/task/account/{id}' | 
'/email/domain/{domain}/task/filter' | 
'/email/domain/{domain}/task/filter/{id}' | 
'/email/domain/{domain}/task/mailinglist' | 
'/email/domain/{domain}/task/mailinglist/{id}' | 
'/email/domain/{domain}/task/redirection' | 
'/email/domain/{domain}/task/redirection/{id}' | 
'/email/domain/{domain}/task/responder' | 
'/email/domain/{domain}/task/responder/{id}';

type PathsEmailDomainPUT = '/email/domain/delegatedAccount/{email}' | 
'/email/domain/delegatedAccount/{email}/responder' | 
'/email/domain/{domain}/account/{accountName}' | 
'/email/domain/{domain}/mailingList/{name}' | 
'/email/domain/{domain}/responder/{account}' | 
'/email/domain/{domain}/serviceInfos';

type PathsEmailDomainPOST = '/email/domain/delegatedAccount/{email}/changePassword' | 
'/email/domain/delegatedAccount/{email}/filter' | 
'/email/domain/delegatedAccount/{email}/filter/{name}/changeActivity' | 
'/email/domain/delegatedAccount/{email}/filter/{name}/changePriority' | 
'/email/domain/delegatedAccount/{email}/filter/{name}/rule' | 
'/email/domain/delegatedAccount/{email}/responder' | 
'/email/domain/delegatedAccount/{email}/updateUsage' | 
'/email/domain/delegatedAccount/{email}/usage' | 
'/email/domain/{domain}/account' | 
'/email/domain/{domain}/account/{accountName}/changePassword' | 
'/email/domain/{domain}/account/{accountName}/delegation' | 
'/email/domain/{domain}/account/{accountName}/filter' | 
'/email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity' | 
'/email/domain/{domain}/account/{accountName}/filter/{name}/changePriority' | 
'/email/domain/{domain}/account/{accountName}/filter/{name}/rule' | 
'/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate' | 
'/email/domain/{domain}/account/{accountName}/updateUsage' | 
'/email/domain/{domain}/acl' | 
'/email/domain/{domain}/changeContact' | 
'/email/domain/{domain}/changeDnsMXFilter' | 
'/email/domain/{domain}/confirmTermination' | 
'/email/domain/{domain}/mailingList' | 
'/email/domain/{domain}/mailingList/{name}/changeOptions' | 
'/email/domain/{domain}/mailingList/{name}/moderator' | 
'/email/domain/{domain}/mailingList/{name}/sendListByEmail' | 
'/email/domain/{domain}/mailingList/{name}/subscriber' | 
'/email/domain/{domain}/migrateDelegationV3toV6' | 
'/email/domain/{domain}/redirection' | 
'/email/domain/{domain}/redirection/{id}/changeRedirection' | 
'/email/domain/{domain}/responder' | 
'/email/domain/{domain}/terminate';

type PathsEmailDomainDELETE = '/email/domain/delegatedAccount/{email}/filter/{name}' | 
'/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}' | 
'/email/domain/delegatedAccount/{email}/responder' | 
'/email/domain/{domain}/account/{accountName}' | 
'/email/domain/{domain}/account/{accountName}/delegation/{accountId}' | 
'/email/domain/{domain}/account/{accountName}/filter/{name}' | 
'/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}' | 
'/email/domain/{domain}/acl/{accountId}' | 
'/email/domain/{domain}/mailingList/{name}' | 
'/email/domain/{domain}/mailingList/{name}/moderator/{email}' | 
'/email/domain/{domain}/mailingList/{name}/subscriber/{email}' | 
'/email/domain/{domain}/redirection/{id}' | 
'/email/domain/{domain}/responder/{account}';

export class ApiEmailDomain extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the MX service
  List available services
  **/
  public get(path: '/email/domain'): Promise<string[]>;
  /**
  List the email.domain.AccountDelegated objects
  Delegated emails
  **/
  public get(path: '/email/domain/delegatedAccount'): Promise<string[]>;
  /**
  Account List
  Get this object properties
  **/
  public get(path: '/email/domain/delegatedAccount/{email}', params: {email: string}): Promise<EmailDomainAccountDelegated>;
  /**
  List the email.domain.Filter objects
  Get filters
  **/
  public get(path: '/email/domain/delegatedAccount/{email}/filter', params: {email: string}): Promise<string[]>;
  /**
  Filter List
  Get this object properties
  **/
  public get(path: '/email/domain/delegatedAccount/{email}/filter/{name}', params: {email: string, name: string}): Promise<EmailDomainFilter>;
  /**
  List the email.domain.Rule objects
  Get rules
  **/
  public get(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule', params: {email: string, name: string}): Promise<number[]>;
  /**
  Rule List
  Get this object properties
  **/
  public get(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}', params: {email: string, name: string, id: number}): Promise<EmailDomainRule>;
  /**
  Responder of account
  Get this object properties
  **/
  public get(path: '/email/domain/delegatedAccount/{email}/responder', params: {email: string}): Promise<EmailDomainResponderAccount>;
  /**
  Get limits of mailing list
  Get limits of mailing list
  **/
  public get(path: '/email/domain/mailingListLimits'): Promise<DomainDomainMlLimits>;
  /**
  Domain service
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}', params: {domain: string}): Promise<EmailDomainDomainService>;
  /**
  List the email.domain.Account objects
  Get accounts
  **/
  public get(path: '/email/domain/{domain}/account', params: {domain: string, accountName?: string, description?: string}): Promise<string[]>;
  /**
  Account List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}', params: {domain: string, accountName: string}): Promise<EmailDomainAccount>;
  /**
  List the email.domain.Delegation objects
  Get delegations
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/delegation', params: {domain: string, accountName: string}): Promise<string[]>;
  /**
  Delegation List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/delegation/{accountId}', params: {domain: string, accountName: string, accountId: string}): Promise<EmailDomainDelegation>;
  /**
  List the email.domain.Filter objects
  Get filters
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/filter', params: {domain: string, accountName: string}): Promise<string[]>;
  /**
  Filter List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}', params: {domain: string, accountName: string, name: string}): Promise<EmailDomainFilter>;
  /**
  List the email.domain.Rule objects
  Get rules
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule', params: {domain: string, accountName: string, name: string}): Promise<number[]>;
  /**
  Rule List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}', params: {domain: string, accountName: string, name: string, id: number}): Promise<EmailDomainRule>;
  /**
  List the email.domain.MigrationService objects
  Get migration service
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate', params: {domain: string, accountName: string, type?: EmailDomainMigrationServiceType}): Promise<string[]>;
  /**
  Migration service
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}', params: {domain: string, accountName: string, destinationServiceName: string}): Promise<EmailDomainMigrationService>;
  /**
  List the email.domain.MigrationAccount objects
  List of email address available for migration
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress', params: {domain: string, accountName: string, destinationServiceName: string, quota?: number}): Promise<string[]>;
  /**
  Migration account
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}', params: {domain: string, accountName: string, destinationServiceName: string, destinationEmailAddress: string}): Promise<EmailDomainMigrationAccount>;
  /**
  checkMigrate operations
  Check if it's possible to migrate
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate', params: {domain: string, accountName: string, destinationServiceName: string, destinationEmailAddress: string}): Promise<EmailDomainMigrationCheckStruct>;
  /**
  usage operations
  usage of account
  **/
  public get(path: '/email/domain/{domain}/account/{accountName}/usage', params: {domain: string, accountName: string}): Promise<DomainDomainUsageAccountStruct>;
  /**
  List the email.domain.Acl objects
  Get ACL on your domain
  **/
  public get(path: '/email/domain/{domain}/acl', params: {domain: string}): Promise<string[]>;
  /**
  Email ACL
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/acl/{accountId}', params: {domain: string, accountId: string}): Promise<EmailDomainAcl>;
  /**
  dnsMXFilter operations
  Domain MX filter
  **/
  public get(path: '/email/domain/{domain}/dnsMXFilter', params: {domain: string, subDomain?: string}): Promise<DomainDomainMXFilterEnum>;
  /**
  dnsMXRecords operations
  Domain MX records
  **/
  public get(path: '/email/domain/{domain}/dnsMXRecords', params: {domain: string, subDomain?: string}): Promise<string[]>;
  /**
  List the email.domain.MailingList objects
  Get mailing lists
  **/
  public get(path: '/email/domain/{domain}/mailingList', params: {domain: string, name?: string}): Promise<string[]>;
  /**
  Mailing List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/mailingList/{name}', params: {domain: string, name: string}): Promise<EmailDomainMailingList>;
  /**
  List the email.domain.Moderator objects
  List of moderators
  **/
  public get(path: '/email/domain/{domain}/mailingList/{name}/moderator', params: {domain: string, name: string, email?: string}): Promise<string[]>;
  /**
  Moderators List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/mailingList/{name}/moderator/{email}', params: {domain: string, name: string, email: string}): Promise<EmailDomainModerator>;
  /**
  List the email.domain.Subscriber objects
  List of subscribers
  **/
  public get(path: '/email/domain/{domain}/mailingList/{name}/subscriber', params: {domain: string, name: string, email?: string}): Promise<string[]>;
  /**
  Subscribers List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/mailingList/{name}/subscriber/{email}', params: {domain: string, name: string, email: string}): Promise<EmailDomainSubscriber>;
  /**
  quota operations
  List all quotas for this domain
  **/
  public get(path: '/email/domain/{domain}/quota', params: {domain: string}): Promise<DomainDomainQuota>;
  /**
  recommendedDNSRecords operations
  Recommended domain DNS records
  **/
  public get(path: '/email/domain/{domain}/recommendedDNSRecords', params: {domain: string}): Promise<DomainZoneRecord[]>;
  /**
  List the email.domain.RedirectionGlobal objects
  Get redirections
  **/
  public get(path: '/email/domain/{domain}/redirection', params: {domain: string, from?: string, to?: string}): Promise<string[]>;
  /**
  Global Redirection
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/redirection/{id}', params: {domain: string, id: string}): Promise<EmailDomainRedirectionGlobal>;
  /**
  List the email.domain.Responder objects
  Get responders
  **/
  public get(path: '/email/domain/{domain}/responder', params: {domain: string, account?: string}): Promise<string[]>;
  /**
  Responder
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/responder/{account}', params: {domain: string, account: string}): Promise<EmailDomainResponder>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/serviceInfos', params: {domain: string}): Promise<ServicesService>;
  /**
  summary operations
  Summary for this domain
  **/
  public get(path: '/email/domain/{domain}/summary', params: {domain: string}): Promise<DomainDomainSummary>;
  /**
  List the email.domain.TaskPop objects
  Get account tasks
  **/
  public get(path: '/email/domain/{domain}/task/account', params: {domain: string, name?: string}): Promise<number[]>;
  /**
  Task Pop List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/task/account/{id}', params: {domain: string, id: number}): Promise<EmailDomainTaskPop>;
  /**
  List the email.domain.TaskFilter objects
  Get filter tasks
  **/
  public get(path: '/email/domain/{domain}/task/filter', params: {domain: string, account?: string}): Promise<number[]>;
  /**
  Task filter List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/task/filter/{id}', params: {domain: string, id: number}): Promise<EmailDomainTaskFilter>;
  /**
  List the email.domain.TaskMl objects
  Get Mailing List tasks
  **/
  public get(path: '/email/domain/{domain}/task/mailinglist', params: {domain: string, account?: string}): Promise<number[]>;
  /**
  Task Mailing List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/task/mailinglist/{id}', params: {domain: string, id: number}): Promise<EmailDomainTaskMl>;
  /**
  List the email.domain.TaskSpecialAccount objects
  Get redirection tasks
  **/
  public get(path: '/email/domain/{domain}/task/redirection', params: {domain: string, account?: string}): Promise<number[]>;
  /**
  Task special account List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/task/redirection/{id}', params: {domain: string, id: number}): Promise<EmailDomainTaskSpecialAccount>;
  /**
  List the email.domain.TaskSpecialAccount objects
  Get responder tasks
  **/
  public get(path: '/email/domain/{domain}/task/responder', params: {domain: string, account?: string}): Promise<number[]>;
  /**
  Task special account List
  Get this object properties
  **/
  public get(path: '/email/domain/{domain}/task/responder/{id}', params: {domain: string, id: number}): Promise<EmailDomainTaskSpecialAccount>;
  public get(path: PathsEmailDomainGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Account List
  Alter this object properties
  **/
  public put(path: '/email/domain/delegatedAccount/{email}', params: {email: string}): Promise<void>;
  /**
  Responder of account
  Alter this object properties
  **/
  public put(path: '/email/domain/delegatedAccount/{email}/responder', params: {email: string}): Promise<void>;
  /**
  Account List
  Alter this object properties
  **/
  public put(path: '/email/domain/{domain}/account/{accountName}', params: {domain: string, accountName: string}): Promise<void>;
  /**
  Mailing List
  Alter this object properties
  **/
  public put(path: '/email/domain/{domain}/mailingList/{name}', params: {domain: string, name: string}): Promise<void>;
  /**
  Responder
  Alter this object properties
  **/
  public put(path: '/email/domain/{domain}/responder/{account}', params: {domain: string, account: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/email/domain/{domain}/serviceInfos', params: {domain: string}): Promise<void>;
  public put(path: PathsEmailDomainPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  changePassword operations
  Change mailbox password (length : [9;30], no space at begin and end, no accent)
  **/
  public post(path: '/email/domain/delegatedAccount/{email}/changePassword', params: {email: string}): Promise<EmailDomainTaskPop>;
  /**
  List the email.domain.Filter objects
  Create new filter for account
  **/
  public post(path: '/email/domain/delegatedAccount/{email}/filter', params: {email: string}): Promise<EmailDomainTaskFilter>;
  /**
  changeActivity operations
  Change filter activity
  **/
  public post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/changeActivity', params: {email: string, name: string}): Promise<EmailDomainTaskFilter>;
  /**
  changePriority operations
  Change filter priority
  **/
  public post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/changePriority', params: {email: string, name: string}): Promise<EmailDomainTaskFilter>;
  /**
  List the email.domain.Rule objects
  Create new rule for filter
  **/
  public post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule', params: {email: string, name: string}): Promise<EmailDomainTaskFilter>;
  /**
  Responder of account
  Create new responder in server
  **/
  public post(path: '/email/domain/delegatedAccount/{email}/responder', params: {email: string}): Promise<EmailDomainTaskSpecialAccount>;
  /**
  updateUsage operations
  Update usage of account
  **/
  public post(path: '/email/domain/delegatedAccount/{email}/updateUsage', params: {email: string}): Promise<void>;
  /**
  usage operations
  usage of account
  **/
  public post(path: '/email/domain/delegatedAccount/{email}/usage', params: {email: string}): Promise<DomainDomainUsageAccountStruct>;
  /**
  List the email.domain.Account objects
  Create new mailbox in server
  **/
  public post(path: '/email/domain/{domain}/account', params: {domain: string}): Promise<EmailDomainTaskPop>;
  /**
  changePassword operations
  Change mailbox password (length : [9;30], no space at begin and end, no accent)
  **/
  public post(path: '/email/domain/{domain}/account/{accountName}/changePassword', params: {domain: string, accountName: string}): Promise<EmailDomainTaskPop>;
  /**
  List the email.domain.Delegation objects
  Create delegation for this account
  **/
  public post(path: '/email/domain/{domain}/account/{accountName}/delegation', params: {domain: string, accountName: string}): Promise<string>;
  /**
  List the email.domain.Filter objects
  Create new filter for account
  **/
  public post(path: '/email/domain/{domain}/account/{accountName}/filter', params: {domain: string, accountName: string}): Promise<EmailDomainTaskFilter>;
  /**
  changeActivity operations
  Change filter activity
  **/
  public post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity', params: {domain: string, accountName: string, name: string}): Promise<EmailDomainTaskFilter>;
  /**
  changePriority operations
  Change filter priority
  **/
  public post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/changePriority', params: {domain: string, accountName: string, name: string}): Promise<EmailDomainTaskFilter>;
  /**
  List the email.domain.Rule objects
  Create new rule for filter
  **/
  public post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule', params: {domain: string, accountName: string, name: string}): Promise<EmailDomainTaskFilter>;
  /**
  migrate operations
  Migrate account to destination account
  **/
  public post(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate', params: {domain: string, accountName: string, destinationServiceName: string, destinationEmailAddress: string}): Promise<EmailDomainTaskPop>;
  /**
  updateUsage operations
  Update usage of account
  **/
  public post(path: '/email/domain/{domain}/account/{accountName}/updateUsage', params: {domain: string, accountName: string}): Promise<void>;
  /**
  List the email.domain.Acl objects
  Create new ACL
  **/
  public post(path: '/email/domain/{domain}/acl', params: {domain: string}): Promise<EmailDomainAcl>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/email/domain/{domain}/changeContact', params: {domain: string}): Promise<number[]>;
  /**
  changeDnsMXFilter operations
  Change MX filter, so change MX DNS records
  **/
  public post(path: '/email/domain/{domain}/changeDnsMXFilter', params: {domain: string}): Promise<void>;
  /**
  confirmTermination operations
  Confirm termination of your email service
  **/
  public post(path: '/email/domain/{domain}/confirmTermination', params: {domain: string}): Promise<string>;
  /**
  List the email.domain.MailingList objects
  Create new mailingList
  **/
  public post(path: '/email/domain/{domain}/mailingList', params: {domain: string}): Promise<EmailDomainTaskMl>;
  /**
  changeOptions operations
  Change mailing list options
  **/
  public post(path: '/email/domain/{domain}/mailingList/{name}/changeOptions', params: {domain: string, name: string}): Promise<EmailDomainTaskMl>;
  /**
  List the email.domain.Moderator objects
  Add moderator to mailing list
  **/
  public post(path: '/email/domain/{domain}/mailingList/{name}/moderator', params: {domain: string, name: string}): Promise<EmailDomainTaskMl>;
  /**
  sendListByEmail operations
  Send moderators list and subscribers list of this mailing list by email
  **/
  public post(path: '/email/domain/{domain}/mailingList/{name}/sendListByEmail', params: {domain: string, name: string}): Promise<EmailDomainTaskMl>;
  /**
  List the email.domain.Subscriber objects
  Add subscriber to mailing list
  **/
  public post(path: '/email/domain/{domain}/mailingList/{name}/subscriber', params: {domain: string, name: string}): Promise<EmailDomainTaskMl>;
  /**
  migrateDelegationV3toV6 operations
  Create delegation of domain with same nic than V3
  **/
  public post(path: '/email/domain/{domain}/migrateDelegationV3toV6', params: {domain: string}): Promise<void>;
  /**
  List the email.domain.RedirectionGlobal objects
  Create new redirection in server
  **/
  public post(path: '/email/domain/{domain}/redirection', params: {domain: string}): Promise<EmailDomainTaskSpecialAccount>;
  /**
  changeRedirection operations
  Change redirection
  **/
  public post(path: '/email/domain/{domain}/redirection/{id}/changeRedirection', params: {domain: string, id: string}): Promise<EmailDomainTaskSpecialAccount>;
  /**
  List the email.domain.Responder objects
  Create new responder in server
  **/
  public post(path: '/email/domain/{domain}/responder', params: {domain: string}): Promise<EmailDomainTaskSpecialAccount>;
  /**
  terminate operations
  Terminate your email service
  **/
  public post(path: '/email/domain/{domain}/terminate', params: {domain: string}): Promise<string>;
  public post(path: PathsEmailDomainPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Filter List
  Delete an existing filter
  **/
  public delete(path: '/email/domain/delegatedAccount/{email}/filter/{name}', params: {email: string, name: string}): Promise<EmailDomainTaskFilter[]>;
  /**
  Rule List
  Delete an existing filter
  **/
  public delete(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}', params: {email: string, name: string, id: number}): Promise<EmailDomainTaskFilter[]>;
  /**
  Responder of account
  Delete an existing responder in server
  **/
  public delete(path: '/email/domain/delegatedAccount/{email}/responder', params: {email: string}): Promise<EmailDomainTaskSpecialAccount>;
  /**
  Account List
  Delete an existing mailbox in server
  **/
  public delete(path: '/email/domain/{domain}/account/{accountName}', params: {domain: string, accountName: string}): Promise<EmailDomainTaskPop>;
  /**
  Delegation List
  Delete an existing delegation
  **/
  public delete(path: '/email/domain/{domain}/account/{accountName}/delegation/{accountId}', params: {domain: string, accountName: string, accountId: string}): Promise<string>;
  /**
  Filter List
  Delete an existing filter
  **/
  public delete(path: '/email/domain/{domain}/account/{accountName}/filter/{name}', params: {domain: string, accountName: string, name: string}): Promise<EmailDomainTaskFilter[]>;
  /**
  Rule List
  Delete an existing filter
  **/
  public delete(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}', params: {domain: string, accountName: string, name: string, id: number}): Promise<EmailDomainTaskFilter[]>;
  /**
  Email ACL
  Delete ACL
  **/
  public delete(path: '/email/domain/{domain}/acl/{accountId}', params: {domain: string, accountId: string}): Promise<void>;
  /**
  Mailing List
  Delete existing Mailing list
  **/
  public delete(path: '/email/domain/{domain}/mailingList/{name}', params: {domain: string, name: string}): Promise<EmailDomainTaskMl>;
  /**
  Moderators List
  Delete existing moderator
  **/
  public delete(path: '/email/domain/{domain}/mailingList/{name}/moderator/{email}', params: {domain: string, name: string, email: string}): Promise<EmailDomainTaskMl>;
  /**
  Subscribers List
  Delete existing subscriber
  **/
  public delete(path: '/email/domain/{domain}/mailingList/{name}/subscriber/{email}', params: {domain: string, name: string, email: string}): Promise<EmailDomainTaskMl>;
  /**
  Global Redirection
  Delete an existing redirection in server
  **/
  public delete(path: '/email/domain/{domain}/redirection/{id}', params: {domain: string, id: string}): Promise<EmailDomainTaskSpecialAccount>;
  /**
  Responder
  Delete an existing responder in server
  **/
  public delete(path: '/email/domain/{domain}/responder/{account}', params: {domain: string, account: string}): Promise<EmailDomainTaskSpecialAccount>;
  public delete(path: PathsEmailDomainDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}

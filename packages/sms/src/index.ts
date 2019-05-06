import { ApiCommon } from '@ovh-api/common';
/**
 * SMS senders
 */
export interface SmsSender {
  /**
   * Specify if the sender is custom or not
   *
   */
  referer?: SmsRefererSenderEnum;
  /**
   * The sms sender
   *
   */
  sender?: string;
  /**
   * Validation media identifier
   *
   */
  validationMedia?: string;
  /**
   * Sender description
   *
   */
  description?: string;
  /**
   * Message sent by the moderator
   *
   */
  comment?: string;
  /**
   * Specify the kind of sender
   *
   */
  type?: SmsTypeSenderEnum;
  /**
   * Sender status
   *
   */
  status?: SmsStatusSenderEnum;
}
/**
 * Operation on a SMS service
 */
export interface SmsTask {
  /**
   */
  function?: SmsTodoGeneralPublicFunctionsEnum;
  /**
   */
  step?: SmsTodoGeneralPublicStepsEnum;
  /**
   */
  taskId?: Number;
  /**
   */
  status?: TelephonyTaskStatusEnum;
}
/**
 * Export file format
 */
export type TelephonyContactsExportFormatsEnum = 'csv';
/**
 * A structure describing all information about an sms pack offer
 */
export interface SmsPackOffer {
  /**
   */
  quantity?: Number;
  /**
   */
  giftQuantity?: Number;
  /**
   */
  totalPrice?: Number;
  /**
   */
  smsQuantity?: Number;
  /**
   */
  price?: Number;
  /**
   */
  giftPrice?: Number;
  /**
   */
  language?: string;
  /**
   */
  countryDestination?: string;
}
/**
 * Response type
 */
export type SmsResponseTypeEnum = 'cgi' | 'none' | 'text';
/**
 * Sms template for moderation (Needed to send in US country)
 */
export interface SmsTemplateControl {
  /**
   * Template creation datetime
   *
   */
  datetime?: Date;
  /**
   * Specify the kind of template
   *
   */
  activity?: SmsTypeTemplateEnum;
  /**
   * Name of the template
   *
   */
  name?: string;
  /**
   * Template description
   *
   */
  description?: string;
  /**
   * Message sent by the moderator
   *
   */
  comment?: string;
  /**
   * Message pattern to be moderated. Use "#VALUE#" format for dynamic text area.
   *
   */
  message?: string;
  /**
   * Template status
   *
   */
  status?: SmsStatusSenderEnum;
}
/**
 * Current quota status
 */
export type SmsQuotaStatusUserEnum = 'active' | 'inactive';
/**
 * Way type
 */
export type SmsDocumentWayTypeEnum = 'incoming' | 'outgoing';
/**
 * Sms receivers preloaded
 */
export interface SmsReceiver {
  /**
   * Creation date of the document
   *
   */
  datetime?: Date;
  /**
   * Download file from URL before sending to contacts (works only with csvUrl and not document ID)
   *
   */
  autoUpdate?: boolean;
  /**
   * Is the object compatible with autoUpdate
   *
   */
  canAutoUpdate?: boolean;
  /**
   * Number of receiver records in the document
   *
   */
  records?: Number;
  /**
   * Description name of the document
   *
   */
  description?: string;
  /**
   * Slot number id
   *
   */
  slotId?: Number;
}
/**
 * Task status
 */
export type TelephonyTaskStatusEnum = 'doing' | 'done' | 'error' | 'pause' | 'todo';
/**
 * The tracking media response
 */
export interface SmsResponseTrackingOptions {
  /**
   */
  sender?: string;
  /**
   */
  media?: SmsResponseTrackingMediaEnum;
  /**
   */
  target?: string;
}
/**
 * All country suffixes accessible for sms services and "all" available
 */
export type SmsCountryEnum = 'ag' | 'ai' | 'all' | 'an' | 'ar' | 'at' | 'au' | 'aw' | 'ba' | 'bb' | 'be' | 'bg' | 'bh' | 'bm' | 'bo' | 'br' | 'bz' | 'ch' | 'cl' | 'cn' | 'co' | 'cr' | 'cu' | 'cy' | 'cz' | 'de' | 'dk' | 'dm' | 'dz' | 'ec' | 'ee' | 'eg' | 'es' | 'fi' | 'fr' | 'gb' | 'gd' | 'gp' | 'gr' | 'gy' | 'hk' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'in' | 'is' | 'it' | 'jm' | 'jo' | 'jp' | 'kr' | 'kw' | 'ky' | 'lb' | 'lc' | 'lt' | 'lu' | 'lv' | 'ma' | 'me' | 'mq' | 'ms' | 'mt' | 'my' | 'nc' | 'ng' | 'nl' | 'no' | 'nz' | 'pa' | 'pe' | 'pf' | 'ph' | 'pk' | 'pl' | 'pt' | 'py' | 're' | 'ro' | 'rs' | 'ru' | 'sa' | 'se' | 'sg' | 'si' | 'sk' | 'sr' | 'tc' | 'th' | 'tn' | 'tr' | 'tt' | 'tw' | 'ua' | 'uy' | 'vc' | 've' | 'vg' | 'vn' | 'za';
/**
 * All tyoplogy of senders
 */
export type SmsRefererSenderEnum = 'custom' | 'domain' | 'line' | 'nic' | 'owner' | 'virtual';
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
 * A structure describing all information about alert threshold informations
 */
export interface SmsAlertThreshold {
  /**
   */
  alertEmail?: string;
  /**
   */
  alertThreshold?: Number;
  /**
   */
  alertNumber?: string;
  /**
   */
  support?: SmsSupportEnum;
}
/**
 * All existing types for a given sender
 */
export type SmsTypeSenderEnum = 'alpha' | 'numeric' | 'virtual';
/**
 * The web access for your virtual number chat application
 */
export interface SmsChatAccess {
  /**
   */
  id?: Number;
  /**
   * The creation date of this access
   *
   */
  creationDate?: Date;
  /**
   * The url of the web access
   *
   */
  url?: string;
}
/**
 * A structure describing all information about quota informations
 */
export interface SmsQuota {
  /**
   */
  quotaLeft?: Number;
  /**
   */
  quotaStatus?: SmsQuotaStatusUserEnum;
}
/**
 * The referer of the available sender
 */
export type SmsSenderRefererEnum = 'domain' | 'nichandle';
/**
 * The ISO formated country code of the number
 */
export type SmsVirtualNumberIsoCountryCodeEnum = 'be' | 'ch' | 'de' | 'es' | 'fr' | 'uk';
/**
 * A structure describing all information about quota informations
 */
export interface SmsSmsSendingReport {
  /**
   */
  totalCreditsRemoved?: Number;
  /**
   */
  invalidReceivers?: string[];
  /**
   */
  ids?: Number[];
  /**
   */
  validReceivers?: string[];
}
/**
 * Pack quantity automatic recredit possibilities
 */
export type SmsPackQuantityAutomaticRecreditEnum = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000;
/**
 * SMS details
 */
export interface SmsAccount {
  /**
   */
  creditsLeft?: Number;
  /**
   * Credit threshold after which an automatic recredit is launched
   *
   */
  creditThresholdForAutomaticRecredit?: Number;
  /**
   */
  userQuantityWithQuota?: Number;
  /**
   */
  templates?: SmsTemplates;
  /**
   */
  name?: string;
  /**
   * URL called when state of a sent SMS changes
   *
   */
  callBack?: string;
  /**
   */
  description?: string;
  /**
   */
  automaticRecreditAmount?: SmsPackQuantityAutomaticRecreditEnum;
  /**
   * URL called when a STOP is received after a receiver replied stop to a SMS
   *
   */
  stopCallBack?: string;
  /**
   */
  smsResponse?: SmsResponse;
  /**
   */
  creditsHoldByQuota?: Number;
  /**
   */
  status?: SmsStatusAccountEnum;
}
/**
 * Home Location Register informations. Give informations about a given cellular phone.
 */
export interface SmsHlrLookupNumber {
  /**
   * Has the MSISDN been ported from its original network
   *
   */
  ported?: boolean;
  /**
   * Is the MSISDN valid
   *
   */
  valid?: boolean;
  /**
   * HLR creation datetime
   *
   */
  datetime?: Date;
  /**
   * Is the MSISDN currently roaming outside its natinal network
   *
   */
  roaming?: boolean;
  /**
   * HLR id
   *
   */
  id?: Number;
  /**
   * MSISDN
   *
   */
  msisdn?: string;
  /**
   * The {Mobile Country Code, Mobile Network Code} unique identifier
   *
   */
  operatorCode?: string;
  /**
   * Is the MSISDN currently reachable
   *
   */
  reachable?: boolean;
  /**
   * Status of the HLR request
   *
   */
  status?: SmsHlrStatuses;
}
/**
 * A structure describing all information about templates informations
 */
export interface SmsTemplates {
  /**
   */
  customizedEmailMode?: boolean;
  /**
   */
  emailBody?: string;
  /**
   */
  customizedSmsMode?: boolean;
  /**
   */
  smsBody?: string;
  /**
   */
  emailFrom?: string;
  /**
   */
  emailSubject?: string;
}
/**
 * All existing types for a given template
 */
export type SmsTypeTemplateEnum = 'alerting' | 'authentification' | 'transactional';
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * All typology of ptt duration
 */
export type SmsPttDurationTypeEnum = 'indeterminated' | 'permanent' | 'temporary';
/**
 * Operation on a telephony service
 */
export interface TelephonyTask {
  /**
   */
  serviceType?: string;
  /**
   * Action associated with the task
   *
   */
  action?: string;
  /**
   * Object potentially created at the end of the task
   *
   */
  objectCreated?: string;
  /**
   * Potential failure reason of the task
   *
   */
  message?: string;
  /**
   */
  taskId?: Number;
  /**
   * Status of the task
   *
   */
  status?: TelephonyTaskStatusEnum;
}
/**
 * Restriction type used by the operator to filter sms.
 */
export type SmsRestrictionCodeEnum = 'ALPHA' | 'BAD_DLR' | 'BLOCKED' | 'CODING' | 'DLR' | 'FLASHONLY' | 'MSISDN';
/**
 * Pack quantity levels
 */
export type SmsPackQuantityEnum = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000;
/**
 * The task step
 */
export type SmsTodoGeneralPublicStepsEnum = 'checkOrder' | 'createHlrs' | 'finishing' | 'sendMailReport' | 'starting' | 'waitForHlrs';
/**
 * The charset format
 */
export type SmsCharsetEnum = 'UTF-8';
/**
 * Virtual numbers
 */
export interface SmsVirtualNumberGenericService {
  /**
   * The virtual number
   *
   */
  number?: string;
  /**
   * The ISO formated country code of the number
   *
   */
  countryCode?: SmsVirtualNumberIsoCountryCodeEnum;
}
/**
 * A structure giving operation price and asynchronous task ID
 */
export interface SmsReceiversAsynchronousCleanReport {
  /**
   */
  totalCreditsRemoved?: Number;
  /**
   */
  taskId?: Number;
}
/**
 * All country prices accessible from a reference
 */
export type ReferenceCountryEnum = 'all' | 'ca' | 'cz' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'gb' | 'ie' | 'it' | 'lt' | 'ma' | 'nl' | 'pl' | 'pp' | 'pt' | 'qc' | 'ru' | 'sk' | 'sn' | 'tn' | 'we';
/**
 * Account status
 */
export type SmsStatusAccountEnum = 'disable' | 'enable';
/**
 * The task function
 */
export type SmsTodoGeneralPublicFunctionsEnum = 'cleanSmsReceivers';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * A structure describing how to manage an sms Response
 */
export interface SmsResponse {
  /**
   */
  trackingDefaultSmsSender?: string;
  /**
   */
  responseType?: SmsResponseTypeEnum;
  /**
   * Default url callback used for a given response.
   *
   */
  cgiUrl?: string;
  /**
   */
  trackingOptions?: SmsResponseTrackingOptions[];
  /**
   * Automatic notification sent by text in case of customer reply.
   *
   */
  text?: string;
}
/**
 * Sms job
 */
export interface SmsJob {
  /**
   */
  ptt?: Number;
  /**
   */
  messageLength?: Number;
  /**
   */
  receiver?: string;
  /**
   */
  deliveryReceipt?: Number;
  /**
   */
  credits?: Number;
  /**
   */
  sender?: string;
  /**
   */
  id?: Number;
  /**
   */
  numberOfSms?: Number;
  /**
   */
  differedDelivery?: Number;
  /**
   */
  message?: string;
  /**
   */
  creationDatetime?: Date;
}
/**
 * The sms class of sms sending job
 */
export type SmsClassEnum = 'flash' | 'phoneDisplay' | 'sim' | 'toolkit';
/**
 * Sms history of sms incoming received
 */
export interface SmsIncoming {
  /**
   */
  sender?: string;
  /**
   */
  credits?: Number;
  /**
   */
  id?: Number;
  /**
   */
  tag?: string;
  /**
   */
  message?: string;
  /**
   */
  creationDatetime?: Date;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * The tracking media response
 */
export type SmsResponseTrackingMediaEnum = 'email' | 'sms' | 'voice';
/**
 * A structure describing ptt details
 */
export interface SmsPttDetails {
  /**
   * Ptt volatility type
   *
   */
  duration?: SmsPttDurationTypeEnum;
  /**
   * Ptt short description
   *
   */
  description?: string;
  /**
   * Ptt informations
   *
   */
  comment?: string;
}
/**
 * All existing status for a given referer
 */
export type SmsStatusSenderEnum = 'disable' | 'enable' | 'refused' | 'waitingValidation';
/**
 * The media support used to be contacted in case of alert
 */
export type SmsSupportEnum = 'both' | 'mail' | 'sms';
/**
 * The priority of an sms sending
 */
export type SmsPriorityEnum = 'high' | 'low' | 'medium' | 'veryLow';
/**
 * Sms operator informations
 */
export interface SmsHlr {
  /**
   * The country
   *
   */
  country?: string;
  /**
   * The countryCode prefix number
   *
   */
  countryCode?: string;
  /**
   * The region
   *
   */
  region?: string;
  /**
   * The operator name
   *
   */
  operator?: string;
  /**
   * The network name
   *
   */
  network?: string;
}
/**
 * Phone book contact
 */
export interface SmsPhonebookContact {
  /**
   * Home mobile phone number of the contact
   *
   */
  homeMobile?: string;
  /**
   * Contact surname
   *
   */
  surname?: string;
  /**
   * Home landline phone number of the contact
   *
   */
  homePhone?: string;
  /**
   * Contact name
   *
   */
  name?: string;
  /**
   * Landline phone office number of the contact
   *
   */
  workPhone?: string;
  /**
   * Contact identifier
   *
   */
  id?: Number;
  /**
   * Mobile phone office number of the contact
   *
   */
  workMobile?: string;
  /**
   * Group name of the phonebook
   *
   */
  group?: string;
}
/**
 * Sms job
 */
export interface SmsVirtualNumberJob {
  /**
   */
  ptt?: Number;
  /**
   */
  deliveryReceipt?: Number;
  /**
   */
  receiver?: string;
  /**
   */
  messageLength?: Number;
  /**
   */
  credits?: Number;
  /**
   */
  differedDelivery?: Number;
  /**
   */
  numberOfSms?: Number;
  /**
   */
  id?: Number;
  /**
   */
  message?: string;
  /**
   */
  creationDatetime?: Date;
}
/**
 * File providing task status
 */
export type TelephonyPcsFileStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Virtual numbers
 */
export interface SmsVirtualNumber {
  /**
   * The virtual number
   *
   */
  number?: string;
  /**
   * The ISO formated country code of the number
   *
   */
  countryCode?: SmsVirtualNumberIsoCountryCodeEnum;
}
/**
 * Phone book
 */
export interface SmsPhonebook {
  /**
   * Phone key identifier between the phone and phonebooks
   *
   */
  phoneKey?: string;
  /**
   * Phonebook name
   *
   */
  name?: string;
  /**
   * Identifier of the phonebook
   *
   */
  bookKey?: string;
}
/**
 * Sms reach list
 */
export interface SmsException {
  /**
   * The substitution sender used to bypass operator filter
   *
   */
  substitution?: string;
  /**
   * The type of routing restriction imposed by the operator
   *
   */
  restrictionCode?: SmsRestrictionCodeEnum;
  /**
   * The list of operators impacted.
   *
   */
  operators?: string;
  /**
   * The exception message
   *
   */
  messages?: string[];
  /**
   * The abreviated country code.
   *
   */
  countrySuffixe?: string;
}
/**
 * Telephony API related file hosted
 */
export interface TelephonyPcsFile {
  /**
   */
  filename?: string;
  /**
   */
  urlExpirationDatetime?: Date;
  /**
   */
  url?: string;
  /**
   */
  status?: TelephonyPcsFileStatusEnum;
}
/**
 * The sms coding
 */
export type SmsCodingEnum = '7bit' | '8bit';
/**
 * The sms coding
 */
export type SmsHlrStatuses = 'doing' | 'done' | 'error' | 'todo';
/**
 * SMS blacklist
 */
export interface SmsBlacklist {
  /**
   * The sms number blacklisted
   *
   */
  number?: string;
  /**
   */
  dateCreation?: Date;
}
/**
 * SMS users
 */
export interface SmsUser {
  /**
   */
  password?: string;
  /**
   * URL called when state of a sent SMS changes
   *
   */
  callBack?: string;
  /**
   * URL called when a STOP is received after a receiver replied stop to a SMS
   *
   */
  stopCallBack?: string;
  /**
   */
  ipRestrictions?: string[];
  /**
   * The sms user login
   *
   */
  login?: string;
  /**
   */
  alertThresholdInformations?: SmsAlertThreshold;
  /**
   */
  quotaInformations?: SmsQuota;
}
/**
 * A structure describing all information about senders available
 */
export interface SmsSenderAvailable {
  /**
   */
  referer?: SmsSenderRefererEnum;
  /**
   */
  sender?: string;
}
/**
 * Sms history of sms outgoing sent
 */
export interface SmsOutgoing {
  /**
   */
  messageLength?: Number;
  /**
   */
  receiver?: string;
  /**
   */
  deliveryReceipt?: Number;
  /**
   * Tariff code applied on the sms
   *
   */
  tariffCode?: string;
  /**
   */
  numberOfSms?: Number;
  /**
   */
  message?: string;
  /**
   */
  creationDatetime?: Date;
  /**
   */
  ptt?: Number;
  /**
   */
  credits?: Number;
  /**
   */
  sender?: string;
  /**
   */
  id?: Number;
  /**
   */
  tag?: string;
  /**
   */
  differedDelivery?: Number;
}
type PathssmsGET = '/sms/ptts' | 
'/sms/{serviceName}/users/{login}/document' | 
'/sms/{serviceName}/users/{login}/receivers' | 
'/sms/{serviceName}/users/{login}/receivers/{slotId}' | 
'/sms/{serviceName}/users/{login}/receivers/{slotId}/csv' | 
'/sms/{serviceName}/users/{login}/incoming/{id}' | 
'/sms/{serviceName}/users/{login}/incoming' | 
'/sms/{serviceName}/users/{login}/jobs' | 
'/sms/{serviceName}/users/{login}/jobs/{id}' | 
'/sms/{serviceName}/users/{login}/outgoing' | 
'/sms/{serviceName}/users/{login}/outgoing/{id}' | 
'/sms/{serviceName}/users/{login}/outgoing/{id}/hlr' | 
'/sms/{serviceName}/users/{login}' | 
'/sms/{serviceName}/users' | 
'/sms/{serviceName}/exceptions' | 
'/sms/{serviceName}/sendersAvailableForValidation' | 
'/sms/{serviceName}/senders/{sender}' | 
'/sms/{serviceName}/senders' | 
'/sms/{serviceName}/outgoing/{id}/hlr' | 
'/sms/{serviceName}/outgoing/{id}' | 
'/sms/{serviceName}/outgoing' | 
'/sms/{serviceName}/seeOffers' | 
'/sms/{serviceName}/blacklists/{number}' | 
'/sms/{serviceName}/blacklists' | 
'/sms/{serviceName}/hlr' | 
'/sms/{serviceName}/hlr/{id}' | 
'/sms/{serviceName}/hlr/{id}/operator' | 
'/sms/{serviceName}/document' | 
'/sms/{serviceName}/task/{taskId}' | 
'/sms/{serviceName}/task' | 
'/sms/{serviceName}/templatesControl/{name}' | 
'/sms/{serviceName}/templatesControl' | 
'/sms/{serviceName}/phonebooks' | 
'/sms/{serviceName}/phonebooks/{bookKey}' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' | 
'/sms/{serviceName}/phonebooks/{bookKey}/export' | 
'/sms/{serviceName}/receivers' | 
'/sms/{serviceName}/receivers/{slotId}' | 
'/sms/{serviceName}/receivers/{slotId}/csv' | 
'/sms/{serviceName}/virtualNumbers' | 
'/sms/{serviceName}/virtualNumbers/{number}' | 
'/sms/{serviceName}/virtualNumbers/{number}/chatAccess' | 
'/sms/{serviceName}/virtualNumbers/{number}/incoming' | 
'/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/jobs' | 
'/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr' | 
'/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/outgoing' | 
'/sms/{serviceName}/serviceInfos' | 
'/sms/{serviceName}/jobs' | 
'/sms/{serviceName}/jobs/{id}' | 
'/sms/{serviceName}' | 
'/sms/{serviceName}/incoming/{id}' | 
'/sms/{serviceName}/incoming' | 
'/sms' | 
'/sms/virtualNumbers/{number}/serviceInfos' | 
'/sms/virtualNumbers/{number}' | 
'/sms/virtualNumbers';

type PathssmsPUT = '/sms/{serviceName}/users/{login}/receivers/{slotId}' | 
'/sms/{serviceName}/users/{login}' | 
'/sms/{serviceName}/senders/{sender}' | 
'/sms/{serviceName}/templatesControl/{name}' | 
'/sms/{serviceName}/phonebooks/{bookKey}' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' | 
'/sms/{serviceName}/receivers/{slotId}' | 
'/sms/{serviceName}/serviceInfos' | 
'/sms/{serviceName}' | 
'/sms/virtualNumbers/{number}/serviceInfos';

type PathssmsPOST = '/sms/{serviceName}/users/{login}/receivers' | 
'/sms/{serviceName}/users/{login}/receivers/{slotId}/clean' | 
'/sms/{serviceName}/users/{login}/jobs' | 
'/sms/{serviceName}/users' | 
'/sms/{serviceName}/senders/{sender}/validate' | 
'/sms/{serviceName}/senders' | 
'/sms/{serviceName}/transferCredits' | 
'/sms/{serviceName}/hlr' | 
'/sms/{serviceName}/templatesControl/{name}/relaunchValidation' | 
'/sms/{serviceName}/templatesControl' | 
'/sms/{serviceName}/phonebooks' | 
'/sms/{serviceName}/phonebooks/{bookKey}/import' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' | 
'/sms/{serviceName}/receivers' | 
'/sms/{serviceName}/receivers/{slotId}/clean' | 
'/sms/{serviceName}/virtualNumbers/{number}/chatAccess' | 
'/sms/{serviceName}/virtualNumbers/{number}/jobs' | 
'/sms/{serviceName}/jobs';

type PathssmsDELETE = '/sms/{serviceName}/users/{login}/receivers/{slotId}' | 
'/sms/{serviceName}/users/{login}/incoming/{id}' | 
'/sms/{serviceName}/users/{login}/jobs/{id}' | 
'/sms/{serviceName}/users/{login}/outgoing/{id}' | 
'/sms/{serviceName}/users/{login}' | 
'/sms/{serviceName}/senders/{sender}' | 
'/sms/{serviceName}/outgoing/{id}' | 
'/sms/{serviceName}/blacklists/{number}' | 
'/sms/{serviceName}/templatesControl/{name}' | 
'/sms/{serviceName}/phonebooks/{bookKey}' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' | 
'/sms/{serviceName}/receivers/{slotId}' | 
'/sms/{serviceName}/virtualNumbers/{number}/chatAccess' | 
'/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' | 
'/sms/{serviceName}/jobs/{id}' | 
'/sms/{serviceName}/incoming/{id}';

class Apisms extends ApiCommon {
  /**
  Get informations about the given ptt code
  Get informations about the given ptt code
  **/
  public get(path: '/sms/ptts', pathParams: null, queryParams: {ptt?: Number}): Promise<SmsPttDetails>;
  /**
  document operations
  Get the /me/document id generated
  **/
  public get(path: '/sms/{serviceName}/users/{login}/document', pathParams: {serviceName?: string, login?: string}, queryParams: {wayType?: SmsDocumentWayTypeEnum, 'creationDatetime.from'?: Date, tag?: string, 'creationDatetime.to'?: Date}): Promise<string>;
  /**
  List the sms.Receiver objects
  Receivers preloaded from text or csv document file
  **/
  public get(path: '/sms/{serviceName}/users/{login}/receivers', pathParams: {serviceName?: string, login?: string}, queryParams: null): Promise<Number[]>;
  /**
  Sms receivers preloaded
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', pathParams: {serviceName?: string, login?: string, slotId?: Number}, queryParams: null): Promise<SmsReceiver>;
  /**
  csv operations
  Get the document data container
  **/
  public get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/csv', pathParams: {serviceName?: string, login?: string, slotId?: Number}, queryParams: null): Promise<string>;
  /**
  Sms history of sms incoming received
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/incoming/{id}', pathParams: {serviceName?: string, login?: string, id?: Number}, queryParams: null): Promise<SmsIncoming>;
  /**
  List the sms.Incoming objects
  Sms received associated to the sms user
  **/
  public get(path: '/sms/{serviceName}/users/{login}/incoming', pathParams: {serviceName?: string, login?: string}, queryParams: {sender?: string, tag?: string}): Promise<Number[]>;
  /**
  List the sms.Job objects
  Sms in pending associated to the sms user
  **/
  public get(path: '/sms/{serviceName}/users/{login}/jobs', pathParams: {serviceName?: string, login?: string}, queryParams: null): Promise<Number[]>;
  /**
  Sms job
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/jobs/{id}', pathParams: {serviceName?: string, login?: string, id?: Number}, queryParams: null): Promise<SmsJob>;
  /**
  List the sms.Outgoing objects
  Sms sent associated to the sms user
  **/
  public get(path: '/sms/{serviceName}/users/{login}/outgoing', pathParams: {serviceName?: string, login?: string}, queryParams: {sender?: string, tag?: string, receiver?: string, differedDelivery?: Number, deliveryReceipt?: Number, ptt?: Number}): Promise<Number[]>;
  /**
  Sms history of sms outgoing sent
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}', pathParams: {serviceName?: string, login?: string, id?: Number}, queryParams: null): Promise<SmsOutgoing>;
  /**
  Sms operator informations
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}/hlr', pathParams: {serviceName?: string, login?: string, id?: Number}, queryParams: null): Promise<SmsHlr>;
  /**
  SMS users
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null): Promise<SmsUser>;
  /**
  List the sms.User objects
  Users associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/users', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  exceptions operations
  Describe filter exceptions in sms sending from a specific receiver.
  **/
  public get(path: '/sms/{serviceName}/exceptions', pathParams: {serviceName?: string}, queryParams: {receiver?: string}): Promise<SmsException[]>;
  /**
  sendersAvailableForValidation operations
  The senders that are attached to your personal informations or OVH services and that can be automatically validated
  **/
  public get(path: '/sms/{serviceName}/sendersAvailableForValidation', pathParams: {serviceName?: string}, queryParams: {referer?: SmsSenderRefererEnum}): Promise<SmsSenderAvailable[]>;
  /**
  SMS senders
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/senders/{sender}', pathParams: {serviceName?: string, sender?: string}, queryParams: null): Promise<SmsSender>;
  /**
  List the sms.Sender objects
  Senders allowed associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/senders', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Sms operator informations
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/outgoing/{id}/hlr', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SmsHlr>;
  /**
  Sms history of sms outgoing sent
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/outgoing/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SmsOutgoing>;
  /**
  List the sms.Outgoing objects
  Sms sent associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/outgoing', pathParams: {serviceName?: string}, queryParams: {sender?: string, ptt?: Number, 'creationDatetime.to'?: Date, 'creationDatetime.from'?: Date, tag?: string, receiver?: string, differedDelivery?: Number, deliveryReceipt?: Number}): Promise<Number[]>;
  /**
  seeOffers operations
  Describe SMS offers available.
  **/
  public get(path: '/sms/{serviceName}/seeOffers', pathParams: {serviceName?: string}, queryParams: {countryDestination?: SmsCountryEnum, countryCurrencyPrice?: ReferenceCountryEnum, quantity?: SmsPackQuantityEnum}): Promise<SmsPackOffer[]>;
  /**
  SMS blacklist
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/blacklists/{number}', pathParams: {serviceName?: string, number?: string}, queryParams: null): Promise<SmsBlacklist>;
  /**
  List the sms.Blacklist objects
  Numbers blacklisted associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/blacklists', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the sms.HlrLookupNumber objects
  Home Location Register informations. Give informations about a given cellular phone.
  **/
  public get(path: '/sms/{serviceName}/hlr', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Home Location Register informations. Give informations about a given cellular phone.
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/hlr/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SmsHlrLookupNumber>;
  /**
  Sms operator informations
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/hlr/{id}/operator', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SmsHlr>;
  /**
  document operations
  Get the /me/document id generated
  **/
  public get(path: '/sms/{serviceName}/document', pathParams: {serviceName?: string}, queryParams: {'creationDatetime.from'?: Date, wayType?: SmsDocumentWayTypeEnum, tag?: string, 'creationDatetime.to'?: Date}): Promise<string>;
  /**
  Operation on a SMS service
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<SmsTask>;
  /**
  List the sms.Task objects
  Operations on a SMS service
  **/
  public get(path: '/sms/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {status?: TelephonyTaskStatusEnum}): Promise<Number[]>;
  /**
  Sms template for moderation (Needed to send in US country)
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/templatesControl/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<SmsTemplateControl>;
  /**
  List the sms.TemplateControl objects
  Template pattern filled up for moderation (Needed to send in US country)
  **/
  public get(path: '/sms/{serviceName}/templatesControl', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the sms.Phonebook objects
  Return phonebooks associated to this account
  **/
  public get(path: '/sms/{serviceName}/phonebooks', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Phone book
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}', pathParams: {serviceName?: string, bookKey?: string}, queryParams: null): Promise<SmsPhonebook>;
  /**
  List the sms.PhonebookContact objects
  Phonebook contacts
  **/
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact', pathParams: {serviceName?: string, bookKey?: string}, queryParams: null): Promise<Number[]>;
  /**
  Phone book contact
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', pathParams: {serviceName?: string, bookKey?: string, id?: Number}, queryParams: null): Promise<SmsPhonebookContact>;
  /**
  export operations
  Export the phonebook's contacts
  **/
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/export', pathParams: {serviceName?: string, bookKey?: string}, queryParams: {format?: TelephonyContactsExportFormatsEnum}): Promise<TelephonyPcsFile>;
  /**
  List the sms.Receiver objects
  Receivers preloaded from text or csv document file
  **/
  public get(path: '/sms/{serviceName}/receivers', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Sms receivers preloaded
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/receivers/{slotId}', pathParams: {serviceName?: string, slotId?: Number}, queryParams: null): Promise<SmsReceiver>;
  /**
  csv operations
  Get the document data container
  **/
  public get(path: '/sms/{serviceName}/receivers/{slotId}/csv', pathParams: {serviceName?: string, slotId?: Number}, queryParams: null): Promise<string>;
  /**
  List the sms.VirtualNumber objects
  Virtual numbers associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Virtual numbers
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}', pathParams: {serviceName?: string, number?: string}, queryParams: null): Promise<SmsVirtualNumber>;
  /**
  The web access for your virtual number chat application
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', pathParams: {serviceName?: string, number?: string}, queryParams: null): Promise<SmsChatAccess>;
  /**
  List the sms.Incoming objects
  Sms received associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming', pathParams: {serviceName?: string, number?: string}, queryParams: {'creationDatetime.to'?: Date, sender?: string, 'creationDatetime.from'?: Date, tag?: string}): Promise<Number[]>;
  /**
  Sms history of sms incoming received
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}', pathParams: {serviceName?: string, number?: string, id?: Number}, queryParams: null): Promise<SmsIncoming>;
  /**
  List the sms.VirtualNumberJob objects
  Sms in pending associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs', pathParams: {serviceName?: string, number?: string}, queryParams: null): Promise<Number[]>;
  /**
  Sms job
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}', pathParams: {serviceName?: string, number?: string, id?: Number}, queryParams: null): Promise<SmsVirtualNumberJob>;
  /**
  Sms operator informations
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr', pathParams: {serviceName?: string, number?: string, id?: Number}, queryParams: null): Promise<SmsHlr>;
  /**
  Sms history of sms outgoing sent
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}', pathParams: {serviceName?: string, number?: string, id?: Number}, queryParams: null): Promise<SmsOutgoing>;
  /**
  List the sms.Outgoing objects
  Sms sent associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing', pathParams: {serviceName?: string, number?: string}, queryParams: {ptt?: Number, 'creationDatetime.to'?: Date, sender?: string, differedDelivery?: Number, deliveryReceipt?: Number, tag?: string, 'creationDatetime.from'?: Date, receiver?: string}): Promise<Number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the sms.Job objects
  Sms in pending associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/jobs', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Sms job
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/jobs/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SmsJob>;
  /**
  SMS details
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<SmsAccount>;
  /**
  Sms history of sms incoming received
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/incoming/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SmsIncoming>;
  /**
  List the sms.Incoming objects
  Sms received associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/incoming', pathParams: {serviceName?: string}, queryParams: {'creationDatetime.to'?: Date, tag?: string, 'creationDatetime.from'?: Date, sender?: string}): Promise<Number[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/sms', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/sms/virtualNumbers/{number}/serviceInfos', pathParams: {number?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Virtual numbers
  Get this object properties
  **/
  public get(path: '/sms/virtualNumbers/{number}', pathParams: {number?: string}, queryParams: null): Promise<SmsVirtualNumberGenericService>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/sms/virtualNumbers', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathssmsGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Sms receivers preloaded
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', pathParams: {serviceName?: string, login?: string, slotId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SMS users
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/users/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SMS senders
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/senders/{sender}', pathParams: {serviceName?: string, sender?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms template for moderation (Needed to send in US country)
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/templatesControl/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/phonebooks/{bookKey}', pathParams: {serviceName?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book contact
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', pathParams: {serviceName?: string, bookKey?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms receivers preloaded
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/receivers/{slotId}', pathParams: {serviceName?: string, slotId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SMS details
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/sms/virtualNumbers/{number}/serviceInfos', pathParams: {number?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathssmsPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  List the sms.Receiver objects
  Add a new document of csv receivers
  **/
  public post(path: '/sms/{serviceName}/users/{login}/receivers', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<SmsReceiver>;
  /**
  clean operations
  Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
  **/
  public post(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/clean', pathParams: {serviceName?: string, login?: string, slotId?: Number}, queryParams: null, bodyParams: null): Promise<SmsReceiversAsynchronousCleanReport>;
  /**
  List the sms.Job objects
  Add one or several sending jobs
  **/
  public post(path: '/sms/{serviceName}/users/{login}/jobs', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<SmsSmsSendingReport>;
  /**
  List the sms.User objects
  Create a new user for an sms account
  **/
  public post(path: '/sms/{serviceName}/users', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  validate operations
  Validate a given sender with an activation code.
  **/
  public post(path: '/sms/{serviceName}/senders/{sender}/validate', pathParams: {serviceName?: string, sender?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the sms.Sender objects
  Create the sms sender given
  **/
  public post(path: '/sms/{serviceName}/senders', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  transferCredits operations
  Credit transfer between two sms accounts.
  **/
  public post(path: '/sms/{serviceName}/transferCredits', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the sms.HlrLookupNumber objects
  Add one or several sending hlr lookup request
  **/
  public post(path: '/sms/{serviceName}/hlr', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<SmsSmsSendingReport>;
  /**
  relaunchValidation operations
  Attempt a new validation after moderation refusal
  **/
  public post(path: '/sms/{serviceName}/templatesControl/{name}/relaunchValidation', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the sms.TemplateControl objects
  Create the sms template control given
  **/
  public post(path: '/sms/{serviceName}/templatesControl', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the sms.Phonebook objects
  Add a phonebook. Return the bookKey.
  **/
  public post(path: '/sms/{serviceName}/phonebooks', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  import operations
  Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
  **/
  public post(path: '/sms/{serviceName}/phonebooks/{bookKey}/import', pathParams: {serviceName?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the sms.PhonebookContact objects
  Create a phonebook contact. Return identifier of the phonebook contact.
  **/
  public post(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact', pathParams: {serviceName?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<Number>;
  /**
  List the sms.Receiver objects
  Add a new document of csv receivers
  **/
  public post(path: '/sms/{serviceName}/receivers', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<SmsReceiver>;
  /**
  clean operations
  Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
  **/
  public post(path: '/sms/{serviceName}/receivers/{slotId}/clean', pathParams: {serviceName?: string, slotId?: Number}, queryParams: null, bodyParams: null): Promise<SmsReceiversAsynchronousCleanReport>;
  /**
  The web access for your virtual number chat application
  Create a new web access for this ressource
  **/
  public post(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', pathParams: {serviceName?: string, number?: string}, queryParams: null, bodyParams: null): Promise<SmsChatAccess>;
  /**
  List the sms.VirtualNumberJob objects
  Add one or several sending jobs
  **/
  public post(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs', pathParams: {serviceName?: string, number?: string}, queryParams: null, bodyParams: null): Promise<SmsSmsSendingReport>;
  /**
  List the sms.Job objects
  Add one or several sending jobs
  **/
  public post(path: '/sms/{serviceName}/jobs', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<SmsSmsSendingReport>;
  public post(path: PathssmsPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Sms receivers preloaded
  Delete the document from the slot
  **/
  public delete(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', pathParams: {serviceName?: string, login?: string, slotId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms history of sms incoming received
  Delete the sms incoming history given
  **/
  public delete(path: '/sms/{serviceName}/users/{login}/incoming/{id}', pathParams: {serviceName?: string, login?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms job
  Delete the sms job given (stop sending)
  **/
  public delete(path: '/sms/{serviceName}/users/{login}/jobs/{id}', pathParams: {serviceName?: string, login?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms history of sms outgoing sent
  Delete the sms outgoing history given
  **/
  public delete(path: '/sms/{serviceName}/users/{login}/outgoing/{id}', pathParams: {serviceName?: string, login?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SMS users
  Delete the sms user given
  **/
  public delete(path: '/sms/{serviceName}/users/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SMS senders
  Delete the sms sender given
  **/
  public delete(path: '/sms/{serviceName}/senders/{sender}', pathParams: {serviceName?: string, sender?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms history of sms outgoing sent
  Delete the sms outgoing history given
  **/
  public delete(path: '/sms/{serviceName}/outgoing/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SMS blacklist
  Delete the blacklisted sms number given
  **/
  public delete(path: '/sms/{serviceName}/blacklists/{number}', pathParams: {serviceName?: string, number?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms template for moderation (Needed to send in US country)
  Delete the sms template control
  **/
  public delete(path: '/sms/{serviceName}/templatesControl/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book
  Delete a phonebook
  **/
  public delete(path: '/sms/{serviceName}/phonebooks/{bookKey}', pathParams: {serviceName?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book contact
  Delete a phonebook contact
  **/
  public delete(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', pathParams: {serviceName?: string, bookKey?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms receivers preloaded
  Delete the document from the slot
  **/
  public delete(path: '/sms/{serviceName}/receivers/{slotId}', pathParams: {serviceName?: string, slotId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The web access for your virtual number chat application
  Delete the given web access
  **/
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', pathParams: {serviceName?: string, number?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms history of sms incoming received
  Delete the sms incoming history given
  **/
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}', pathParams: {serviceName?: string, number?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms job
  Delete the sms job given (stop sending)
  **/
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}', pathParams: {serviceName?: string, number?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms history of sms outgoing sent
  Delete the sms outgoing history given
  **/
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}', pathParams: {serviceName?: string, number?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms job
  Delete the sms job given (stop sending)
  **/
  public delete(path: '/sms/{serviceName}/jobs/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms history of sms incoming received
  Delete the sms incoming history given
  **/
  public delete(path: '/sms/{serviceName}/incoming/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathssmsDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

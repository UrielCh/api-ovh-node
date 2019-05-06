import { ApiCommon } from '@ovh-api/common';
/**
 * Consumption way type
 */
export type TelephonyFaxConsumptionWayTypeEnum = 'received' | 'sent';
/**
 * Internal and external numbers for voicemail service
 */
export interface TelephonyVoicemailNumbers {
  /**
   * The internal voicemail number
   *
   */
  internal?: string;
  /**
   * The external voicemail number
   *
   */
  external?: string;
}
/**
 * A ip value associated to a datetime
 */
export interface TelephonyDatetimeAndIpvalue {
  /**
   */
  datetime?: Date;
  /**
   */
  ip?: string;
}
/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingQueueLiveStatistics {
  /**
   * Total of calls answered
   *
   */
  callsAnswered?: Number;
  /**
   * Total call duration in seconds
   *
   */
  totalCallDuration?: Number;
  /**
   * Total of calls lost
   *
   */
  callsLost?: Number;
  /**
   * Total of calls
   *
   */
  callsTotal?: Number;
  /**
   * Last reset datetime of queue's statistics
   *
   */
  lastReset?: Date;
  /**
   * Total waiting duration in seconds
   *
   */
  totalWaitingDuration?: Number;
}
/**
 * Additional informations about the portability step
 */
export interface TelephonyPortabilityStepInfos {
  /**
   * The last portability due date that has been proposed
   *
   */
  lastProposedDate?: Date;
  /**
   * If the step status is "error", it is the reason
   *
   */
  reason?: string;
  /**
   * A code representing the reason
   *
   */
  reasonType?: string;
}
/**
 * Call delivery record of the previous month
 */
export interface TelephonyPreviousVoiceConsumption {
  /**
   */
  duration?: Number;
  /**
   * Information about hangup cause
   *
   */
  hangupNature?: string;
  /**
   */
  planType?: TelephonyVoiceConsumptionPlanTypeEnum;
  /**
   * Country suffix destination
   *
   */
  countrySuffix?: string;
  /**
   */
  called?: string;
  /**
   */
  wayType?: TelephonyVoiceConsumptionWayTypeEnum;
  /**
   */
  consumptionId?: Number;
  /**
   */
  calling?: string;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum;
  /**
   * Description of the destination
   *
   */
  designation?: string;
  /**
   */
  creationDatetime?: Date;
}
/**
 * List of possible step name
 */
export type TelephonyPortabilityStepNameEnum = 'acknowledgmentReceivedFromOperator' | 'belgiumPortabilityRequestCreated' | 'belgiumPortabilityRequestExecutionAcked' | 'belgiumPortabilityRequestExecutionAsked' | 'belgiumPortabilityRequestExecutionCompleted' | 'belgiumPortabilityRequestValidated' | 'belgiumPortabilityRequestWaitingUntilExec' | 'customerFormReceived' | 'customerFormSent' | 'customerFormValidated' | 'finalReportReceivedFromOperator' | 'intermediateReportReceivedFromOperator' | 'numberActivation' | 'requestSentToOperator' | 'sDASequenceReceivedFromOperator';
/**
 * Vxml services
 */
export interface TelephonyVxml {
  /**
   */
  offers?: string[];
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
}
/**
 * Voicemail configuration
 */
export type TelephonyServiceVoicemailMailOptionEnum = 'attachment' | 'simple';
/**
 * Policy of the time condition
 */
export type TelephonyTimeConditionsPolicyEnum = 'available' | 'slot1' | 'slot2' | 'slot3';
/**
 * Conference
 */
export interface TelephonyConference {
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  offers?: string[];
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
}
/**
 * Source of the diagnostic report
 */
export type TelephonyDiagnosticReportCategoryEnum = 'dpi' | 'signal';
/**
 * List public web access of your conference
 */
export interface TelephonyConferenceWebAccess {
  /**
   * The id of the conference web access
   *
   */
  id?: Number;
  /**
   * The type of the conference web access : read or write
   *
   */
  type?: TelephonyConferenceWebAccessTypeEnum;
  /**
   * The URL of the conference web access
   *
   */
  url?: string;
}
/**
 * Return merchandise authorisation type
 */
export type TelephonyRmaPublicTypeEnum = 'change to another phone/equipment (restitution first and shipping then)' | 'restitution but keep the service enable';
/**
 * Repartition of simultaneous channels packs for a trunk
 */
export interface TelephonyTrunkSimultaneousPacksRepartition {
  /**
   * The optimized quantity of channels to order
   *
   */
  optimizedChannelsQuantity?: Number;
  /**
   * The repartition of the packs
   *
   */
  packsRepartition?: TelephonyTrunkSimultaneousPack[];
  /**
   * The total price of the channels packs combination
   *
   */
  totalPrice?: OrderPrice;
}
/**
 * Offer change
 */
export interface TelephonyOfferChange {
  /**
   * The current offer will be replace by this one on the next renew.
   *
   */
  offer?: string;
}
/**
 * Specific number available
 */
export interface TelephonySpecificNumber {
  /**
   * The number
   *
   */
  number?: string;
  /**
   * Set if number is premium
   *
   */
  isPremium?: boolean;
}
/**
 * Line service
 */
export interface TelephonyLine {
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   * The line offers (Deprecated, prefer "name" in getPublicOffer)
   *
   */
  offers?: string[];
  /**
   * The line offers
   *
   */
  getPublicOffer?: TelephonyLineOffer;
  /**
   * Ability to manage SIP password on this service
   *
   */
  canChangePassword?: boolean;
  /**
   */
  simultaneousLines?: Number;
  /**
   * The infrastructure where is configured the line
   *
   */
  infrastructure?: string;
  /**
   */
  description?: string;
  /**
   * Is this line attached to a phone that belongs to another line?
   *
   */
  isAttachedToOtherLinesPhone?: boolean;
  /**
   */
  serviceName?: string;
  /**
   * Send notifications about Line's diagnosticReports
   *
   */
  notifications?: TelephonyLineNotificationsOptions;
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
 * Digit keys allowed to be pressed to disable call record
 */
export type TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * Relevant informations about reset code
 */
export interface TelephonyResetPhoneCodeInfo {
  /**
   * Key book url
   *
   */
  keyBook?: string;
  /**
   * Server url
   *
   */
  serverURL?: string;
  /**
   * Activation code
   *
   */
  activationCode?: string;
}
/**
 * Portability informations
 */
export interface TelephonyPortability {
  /**
   * The ID of the portability order
   *
   */
  orderId?: Number;
  /**
   * Customer informations about this portability
   *
   */
  customerInfos?: TelephonyPortabilityCustomerInfos;
  /**
   * The date when the portability will be done and when numbers will be ported
   *
   */
  desiredExecutionDate?: Date;
  /**
   * Codes representing the error in current portability
   *
   */
  errorCodes?: string[];
  /**
   * Country that defines the portability kind
   *
   */
  portabilityCountry?: TelephonyPortabilityCountryEnum;
  /**
   * The list of numbers that is going to be ported
   *
   */
  numbersList?: string[];
  /**
   * The ID of the portability
   *
   */
  id?: Number;
  /**
   * Show the redirection that will be configured when the portability will be done
   *
   */
  lineToRedirectTo?: string;
  /**
   * The billing account where the numbers will be inserted
   *
   */
  billingAccount?: string;
  /**
   * Indicates that portability is in error
   *
   */
  error?: boolean;
  /**
   * The portability's creation date
   *
   */
  creationDate?: Date;
  /**
   * The operator that currently holds the numbers
   *
   */
  operator?: string;
}
/**
 * Phone configuration property
 */
export interface TelephonyPhoneConfigurationProperty {
  /**
   * Default property value
   *
   */
  default?: string;
  /**
   * Provisioning level
   *
   */
  level?: TelephonyPhoneConfigurationLevelEnum;
  /**
   * Max string chars
   *
   */
  maxlength?: Number;
  /**
   * The property name
   *
   */
  name?: string;
  /**
   * Property description
   *
   */
  description?: string;
  /**
   * Range property value
   *
   */
  rangeValue?: ComplexTypeRange<Number>;
  /**
   * Provisioning type
   *
   */
  type?: TelephonyPhoneConfigurationTypeEnum;
  /**
   * Current property value
   *
   */
  value?: string;
  /**
   * Property value possibilities
   *
   */
  enum?: string[];
  /**
   * The property group
   *
   */
  group?: string;
}
/**
 * Phone book on group
 */
export interface TelephonyPhonebookMaster {
  /**
   * Phone book name
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
 * Informations related to a telephony service
 */
export interface TelephonyTelephonySearchService {
  /**
   * The service domain
   *
   */
  domain?: string;
  /**
   * The offer description
   *
   */
  type?: TelephonyTelephonySearchServiceTypeEnum;
  /**
   * The billing account of the service
   *
   */
  billingAccount?: string;
}
/**
 * Details for a channels pack
 */
export interface TelephonyTrunkSimultaneousPack {
  /**
   * The unit price of the channels pack
   *
   */
  unitPrice?: OrderPrice;
  /**
   * The quantity of packs present in the combination
   *
   */
  quantity?: Number;
  /**
   * The number of channels included in the pack
   *
   */
  channels?: Number;
}
/**
 * Previous repayment bill
 */
export interface TelephonyHistoryRepaymentConsumption {
  /**
   * date of the bill
   *
   */
  date?: Date;
  /**
   * the amout which is repayed
   *
   */
  price?: OrderPrice;
  /**
   * the number of the bill
   *
   */
  billingNumber?: string;
  /**
   * status of the bill
   *
   */
  status?: TelephonyBillStatusEnum;
}
/**
 * Voicemail configuration
 */
export interface TelephonyServiceVoicemailNotifications {
  /**
   */
  type?: TelephonyServiceVoicemailMailOptionEnum;
  /**
   */
  email?: string;
}
/**
 * All existing type of routing for a voicemail
 */
export type TelephonyVoicefaxRoutingEnum = 'fax' | 'voicemail';
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
 * Fax campaigns
 */
export interface TelephonyFaxCampaign {
  /**
   * The reference of the fax campaign
   *
   */
  reference?: string;
  /**
   * The count of failed faxes in the campaign
   *
   */
  countFailed?: Number;
  /**
   * The start date of the fax campaign
   *
   */
  dateStart?: Date;
  /**
   * The name of the fax campaign
   *
   */
  name?: string;
  /**
   * The total count of faxes in the campaign
   *
   */
  countTotal?: Number;
  /**
   * The id of the fax campaign
   *
   */
  id?: Number;
  /**
   * The end date of the fax campaign
   *
   */
  dateEnd?: Date;
  /**
   * The count of success faxes in the campaign
   *
   */
  countSuccess?: Number;
  /**
   * The status of the fax campaign
   *
   */
  status?: string;
}
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  value?: T;
  /**
   */
  key?: string;
}
/**
 * Easy hunting screen lists conditions options
 */
export interface TelephonyEasyHuntingScreenListsConditionsSettings {
  /**
   */
  status?: TelephonyEasyHuntingScreenListsConditionsStatusEnum;
}
/**
 * Trunk external displayed number validation
 */
export interface TelephonyTrunkExternalDisplayedNumberValidation {
  /**
   * Validation code to type during phone call
   *
   */
  validationCode?: string;
  /**
   * telephony.Task id of the validation phone call
   *
   */
  phoneCallTaskId?: Number;
}
/**
 * Calls queue
 */
export interface TelephonyOvhPabxHuntingQueue {
  /**
   * Follow the calls forwarding
   *
   */
  followCallForwards?: boolean;
  /**
   * Key to press to disable record
   *
   */
  recordDisablingDigit?: TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum;
  /**
   */
  queueId?: Number;
  /**
   * The id of the OvhPabxSound played to caller when on hold
   *
   */
  soundOnHold?: Number;
  /**
   * The maximum waiting time (in seconds) in the queue
   *
   */
  maxWaitTime?: Number;
  /**
   * The additionnal parameter of the on closure action
   *
   */
  actionOnClosureParam?: string;
  /**
   * The name of the queue
   *
   */
  description?: string;
  /**
   * Language of the sound played to the caller to inform that he can disable record
   *
   */
  recordDisablingLanguage?: TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum;
  /**
   * Allow the caller to disable call record by pressing a key
   *
   */
  askForRecordDisabling?: boolean;
  /**
   * Action executed when caller enters a full queue
   *
   */
  actionOnOverflow?: TelephonyOvhPabxQueueActionEnum;
  /**
   * The maximum of people waiting in the queue
   *
   */
  maxMember?: Number;
  /**
   * Enable record on calls in queue
   *
   */
  record?: boolean;
  /**
   * Action executed when there is no member in queue
   *
   */
  actionOnClosure?: TelephonyOvhPabxQueueActionEnum;
  /**
   * The calls dispatching strategy
   *
   */
  strategy?: TelephonyOvhPabxHuntingQueueStrategyEnum;
  /**
   * The additionnal parameter of the overflow action
   *
   */
  actionOnOverflowParam?: string;
}
/**
 * Call diagnostic analyze structure on sip signal
 */
export interface TelephonyCallDiagnosticSip {
  /**
   * Encoded json headers
   *
   */
  headers?: string;
  /**
   */
  response?: string;
  /**
   */
  requestMethod?: string;
  /**
   */
  timestamp?: string;
}
/**
 * Token associated to the service for live event
 */
export interface TelephonyEventToken {
  /**
   */
  token?: string;
}
/**
 * Detailed informations related to this number
 */
export interface TelephonyDetailedRateCodeInformation {
  /**
   * Repayment per minute
   *
   */
  repaymentPricePerMinuteWithoutTax?: OrderPrice;
  /**
   * Price in minute
   *
   */
  pricePerMinuteWithoutTax?: OrderPrice;
  /**
   * Effective datetime
   *
   */
  effectiveDatetime?: Date;
  /**
   * Cancelable datetime deadline for the new scheduled rateCode
   *
   */
  cancelLimitDatetime?: Date;
  /**
   * Price per call
   *
   */
  pricePerCallWithoutTax?: OrderPrice;
  /**
   * Repayment per call
   *
   */
  repaymentPricePerCallWithoutTax?: OrderPrice;
  /**
   * Scheduled rate code
   *
   */
  rateCode?: string;
  /**
   * Fees concerning rateCode update
   *
   */
  updateRateCodePriceWithoutTax?: OrderPrice;
}
/**
 * Available actions for overflow and on closure
 */
export type TelephonyOvhPabxQueueActionEnum = 'playback' | 'voicemail';
/**
 * All existing types
 */
export type TelephonyTypeServiceEnum = 'alias' | 'line';
/**
 * Type of the agent
 */
export type TelephonyOvhPabxHuntingAgentTypeEnum = 'external' | 'internal';
/**
 * Dialplan rule action
 */
export type TelephonyOvhPabxDialplanExtensionRuleActionEnum = 'bridge' | 'endless_playback' | 'hangup' | 'hunting' | 'ivr' | 'playback' | 'readDtmf' | 'setCallerName' | 'sleep' | 'tts' | 'voicemail';
/**
 * Available recipients method for fax campaign
 */
export type TelephonyFaxCampaignRecipientsTypeEnum = 'document' | 'list';
/**
 * Phone Configuration level enum
 */
export type TelephonyPhoneConfigurationLevelEnum = 'admin' | 'expert';
/**
 * Phone book contact
 */
export interface TelephonyPhonebookContact {
  /**
   * Contact surname
   *
   */
  surname?: string;
  /**
   * Home mobile phone number of the contact
   *
   */
  homeMobile?: string;
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
 * A geographic zone from a country
 */
export interface TelephonyNumberDetailedZone {
  /**
   * The number's range of this zone
   *
   */
  number?: string;
  /**
   * The zip code of the zone
   *
   */
  zipCode?: string;
  /**
   * The criteria that matched the searched value
   *
   */
  matchingCriteria?: TelephonyNumberDetailedZoneMatchingCriteriaEnum;
  /**
   * The country of the zone
   *
   */
  country?: TelephonyNumberCountryEnum;
  /**
   * The city of the zone
   *
   */
  city?: string;
  /**
   * The country code of the number's range
   *
   */
  prefix?: TelephonyNumberCountryCodeEnum;
  /**
   * The searched value
   *
   */
  askedCity?: string;
  /**
   * The type of number's range of this zone
   *
   */
  type?: TelephonyNumberDetailedZoneTypeEnum;
  /**
   * The number's range of this zone, in international format
   *
   */
  internationalNumber?: string;
  /**
   * The list of ZNE of this zone
   *
   */
  zneList?: string[];
}
/**
 * Represents a city
 */
export interface TelephonyCity {
  /**
   * The zip code of the city
   *
   */
  zipCode?: string;
  /**
   * The name of the city
   *
   */
  name?: string;
  /**
   * The identifier of the city
   *
   */
  administrationCode?: string;
}
/**
 * Number country code
 */
export type TelephonyNumberCountryCodeEnum = 32 | 33 | 34 | 39 | 41 | 44 | 49;
/**
 * Phone protocol
 */
export type TelephonyProtocolEnum = 'mgcp' | 'sip';
/**
 * Return merchandise authorisation type
 */
export type TelephonyRmaTypeEnum = 'after sale equipment service exchange' | 'after sale phone service exchange' | 'equipment restitution' | 'fast exchange' | 'old merchandise reception before exchange' | 'phone restitution' | 'resends due to shipping lost by the carrier' | 'resends due to shipping not withdraw' | 'specific return merchandise authorisation' | 'termination' | 'unknown';
/**
 * Screen list
 */
export interface TelephonyScreenList {
  /**
   */
  nature?: TelephonyScreenListNatureEnum;
  /**
   */
  callNumber?: string;
  /**
   */
  id?: Number;
  /**
   */
  type?: TelephonyScreenListTypeEnum;
  /**
   */
  status?: string;
}
/**
 * Possible parameters to provide to fix portability errors
 */
export interface TelephonyPortabilityFixErrorPossibleParameters {
  /**
   * Mandatory parameter list
   *
   */
  mandatoryParameters?: string[];
  /**
   * Optional parameter list
   *
   */
  optionalParameters?: string[];
}
/**
 * Represent the delay between two portability steps
 */
export interface TelephonyPortabilityStepDuration {
  /**
   * The delay's unit
   *
   */
  unit?: TelephonyPortabilityStepDurationUnitEnum;
  /**
   * The quantity of delay
   *
   */
  quantity?: Number;
}
/**
 * Informations related to phone capabilities
 */
export interface TelephonyLinePhone {
  /**
   * Phone protocol
   *
   */
  protocol?: TelephonyProtocolEnum;
  /**
   * Maximum number of lines managed by a phone
   *
   */
  maxline?: Number;
  /**
   * Telephony price
   *
   */
  price?: OrderPrice;
  /**
   * The phone description
   *
   */
  description?: string;
  /**
   * Brand name of the phone
   *
   */
  brand?: string;
}
/**
 * Informations about a SIP registration (i.e. IP, port, User-Agent...)
 */
export interface TelephonyRegistrationInformations {
  /**
   * SIP registration's date
   *
   */
  datetime?: Date;
  /**
   * SIP registration's local device port
   *
   */
  localPort?: Number;
  /**
   * SIP registration's port
   *
   */
  port?: Number;
  /**
   * SIP registration's domain
   *
   */
  domain?: string;
  /**
   * SIP registration's IP
   *
   */
  ip?: string;
  /**
   * SIP registration's local device IP
   *
   */
  localIp?: string;
  /**
   * SIP registration's User-Agent
   *
   */
  userAgent?: string;
}
/**
 * Timeout before unavailable action is triggered
 */
export type TelephonyTimeConditionsTimeoutEnum = 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 5 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90;
/**
 * Types of statistics available for a line.
 */
export type TelephonyLineStatisticsTypeEnum = 'maxDelay' | 'maxJitter' | 'rtpMos' | 'sumRtpLost';
/**
 * Status of the RMA step
 */
export type TelephonyRmaStepStatusEnum = 'done' | 'todo';
/**
 * Type of line blocking on outplan notification
 */
export type TelephonyOutplanNotificationBlockEnum = 'blockAllCalls' | 'blockIncomingCalls' | 'blockOutgoingCalls' | 'none';
/**
 * SS7 ISUP cause codes
 */
export type TelephonyCallDiagnosticCauseEnum = '1' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '1a' | '1b' | '1c' | '1d' | '1e' | '1f' | '2' | '22' | '26' | '27' | '28' | '29' | '2a' | '2b' | '2c' | '2e' | '2f' | '3' | '30' | '31' | '32' | '33' | '34' | '35' | '37' | '39' | '3a' | '3e' | '3f' | '4' | '41' | '42' | '45' | '46' | '4f' | '5' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '5a' | '5b' | '5f' | '6' | '60' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '6e' | '6f' | '7' | '7f' | '8' | '9';
/**
 * Redirect service
 */
export interface TelephonyRedirect {
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  destination?: string;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
}
/**
 * File providing task status
 */
export type TelephonyPcsFileStatusEnum = 'doing' | 'done' | 'error' | 'todo';
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
 * Return merchandise authorisation type
 */
export type TelephonyRmaReplaceTypeEnum = 'changePhone' | 'phoneRestitution' | 'undefined';
/**
 * Possible languages of the sound played to inform caller that he can disable call record
 */
export type TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum = 'english' | 'french';
/**
 * Available timeframes for statistics
 */
export type TelephonyStatisticsTimeframeEnum = 'daily' | 'hourly' | 'monthly' | 'weekly' | 'yearly';
/**
 * A value set tagged with its unit
 */
export interface ComplexTypeUnitAndValues<T> {
  /**
   */
  unit?: string;
  /**
   */
  values?: T[];
}
/**
 * Custom statuses of your callcenter agents
 */
export interface TelephonyOvhPabxCustomStatus {
  /**
   * The color (in hexadecimal) of the status that will be displayed on agent banner web application
   *
   */
  color?: string;
  /**
   * The name of the status (Pause, Mission, etc...)
   *
   */
  name?: string;
  /**
   * A short description of the status
   *
   */
  description?: string;
  /**
   */
  id?: Number;
}
/**
 * Termination reason
 */
export type TelephonyTerminationReasonEnum = 'addresseMove' | 'billingDifficulties' | 'cessationOfActivity' | 'missingOptions' | 'moveToCompetitor' | 'other' | 'plugAndPhoneDifficulties' | 'technicalDifficulties';
/**
 * Dialplan
 */
export interface TelephonyOvhPabxDialplan {
  /**
   * Reject (hangup) anonymous calls
   *
   */
  anonymousRejection?: boolean;
  /**
   * The timeout (in seconds) when bridging calls
   *
   */
  transferTimeout?: Number;
  /**
   * The presented number when bridging calls
   *
   */
  showCallerNumber?: TelephonyOvhPabxDialplanNumberPresentationEnum;
  /**
   */
  dialplanId?: Number;
  /**
   */
  lastUpdate?: Date;
  /**
   * The dialplan name
   *
   */
  name?: string;
}
/**
 * Return merchandise authorisation offer type
 */
export type TelephonyRmaOfferTypeEnum = 'deposit' | 'loan' | 'purchase';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  text?: string;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  value?: Number;
}
/**
 * Document linked to a portability
 */
export interface TelephonyPortabilityDocument {
  /**
   * URL to get document
   *
   */
  getUrl?: string;
  /**
   * Document size (in bytes)
   *
   */
  size?: Number;
  /**
   * URL to upload document
   *
   */
  putUrl?: string;
  /**
   * Name of the document
   *
   */
  name?: string;
  /**
   * Description of the document
   *
   */
  description?: string;
  /**
   * Identifier of the document
   *
   */
  documentId?: Number;
}
/**
 * Status of billing account
 */
export type TelephonyBillingAccountStatusEnum = 'closed' | 'deleted' | 'enabled' | 'expired';
/**
 * Intercom configuration
 */
export type TelephonyLineOptionIntercomEnum = 'no' | 'prefixed' | 'yes';
/**
 * MiniPabx
 */
export interface TelephonyMiniPabx {
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
}
/**
 * Conference report receiver
 */
export type TelephonyConferenceReportStatusEnum = 'customer' | 'none' | 'other';
/**
 * Call diagnostic analyze structure on metric performance values
 */
export interface TelephonyCallDiagnosticCallQuality {
  /**
   * Call identifier of the sip signal leg
   *
   */
  callId?: string;
  /**
   * The port source
   *
   */
  portSrc?: Number;
  /**
   * Destination port
   *
   */
  portDst?: Number;
  /**
   * The ip address destination
   *
   */
  ipDst?: string;
  /**
   * The ip address source
   *
   */
  ipSrc?: string;
  /**
   * The number of packet sent in the given direction flow
   *
   */
  packets?: Number;
  /**
   * The max delay between two packet in the given direction flow
   *
   */
  maxDelay?: Number;
  /**
   * Mean Opinion Score expressed in one number, from 1 to 5, 1 being the worst and 5 the best.
   *
   */
  mos?: Number;
  /**
   * Codec used in this direction flow
   *
   */
  codec?: TelephonyCallDiagnosticCodecEnum;
  /**
   * Variation in the delay of received packets. Smaller is better and less is more
   *
   */
  maxJitter?: Number;
  /**
   * Number of packet RTP lost in the direction flow
   *
   */
  rtpLost?: Number;
  /**
   * Identifier of the metric performance value
   *
   */
  flowId?: Number;
  /**
   * The creation timestamp of the given direction flow
   *
   */
  timestamp?: Date;
}
/**
 * Day of the week
 */
export type TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum = 'friday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday';
/**
 * Voicemail message
 */
export interface TelephonyVoicemailMessages {
  /**
   * Message duration (in seconds)
   *
   */
  duration?: Number;
  /**
   * Caller number in international format
   *
   */
  caller?: string;
  /**
   * Callee number in international format
   *
   */
  callee?: string;
  /**
   * Uniq voicemail message identifier
   *
   */
  id?: Number;
  /**
   * Voicemessage directory
   *
   */
  dir?: TelephonyVoicemailMessageFolderDirectoryEnum;
  /**
   * Message datetime creation
   *
   */
  creationDatetime?: Date;
}
/**
 * Billing progress status
 */
export type TelephonyBillStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Additional number
 */
export interface TelephonyNumber {
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   * Feature enabled on the number
   *
   */
  featureType?: TelephonyTypeEnum;
  /**
   * Description of the service
   *
   */
  description?: string;
  /**
   * Name of the service
   *
   */
  serviceName?: string;
  /**
   * Parent of the service (if it is part of a pool)
   *
   */
  partOfPool?: string;
}
/**
 * Consumption way type
 */
export type TelephonyVoiceConsumptionWayTypeEnum = 'incoming' | 'outgoing' | 'transfer';
/**
 * Relevant informations of the phone reset
 */
export interface TelephonyResetPhoneInfo {
  /**
   * Which way had been used to reset the phone
   *
   */
  resetPhoneMethod?: TelephonyResetPhoneMethodEnum;
  /**
   * Reset code informations
   *
   */
  resetCodeInfo?: TelephonyResetPhoneCodeInfo;
}
/**
 * expiration possibility
 */
export type TelephonyTokenExpirationEnum = '1 day' | '1 hour' | '30 days' | '5 minutes' | 'unlimited';
/**
 * List of possible status of a step
 */
export type TelephonyPortabilityStepStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'hold' | 'todo';
/**
 * Informations related to a line offer
 */
export interface TelephonyLineOffer {
  /**
   * Offer price per month
   *
   */
  price?: OrderPrice;
  /**
   * The offer name
   *
   */
  name?: string;
  /**
   * The offer description
   *
   */
  description?: string;
}
/**
 * Document suffix
 */
export type TelephonyBillDocument = 'csv' | 'pdf' | 'received.csv' | 'xml';
/**
 * Informations related to a line offer
 */
export interface TelephonyLineOffersAndContracts {
  /**
   * Informations related to a line offer
   *
   */
  offers?: TelephonyLineOffer[];
  /**
   * Informations related to a line contracts
   *
   */
  contracts?: OrderContract[];
}
/**
 * Easy/Mini PABX agent
 */
export interface TelephonyEasyMiniPabxHuntingAgent {
  /**
   * True if the agent is logged
   *
   */
  logged?: boolean;
  /**
   * The maxium ringing time
   *
   */
  noReplyTimer?: Number;
  /**
   * The phone number of the agent
   *
   */
  agentNumber?: string;
  /**
   * The position in the hunting
   *
   */
  position?: Number;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Calls dispatching startegy
 */
export type TelephonyOvhPabxHuntingQueueStrategyEnum = 'cumulationByAgentOrder' | 'longestHangupAgent' | 'longestIdleAgent' | 'random' | 'ringAll' | 'roundRobin' | 'sequentiallyByAgentOrder';
/**
 * IVR menu action
 */
export type TelephonyOvhPabxIvrMenuEntryActionEnum = 'bridge' | 'callcenter' | 'menuBack' | 'menuExit' | 'menuSub' | 'menuTop' | 'playback' | 'readDtmf' | 'setCallerName';
/**
 * Informations related to the rate code
 */
export interface TelephonyRateCodeInformation {
  /**
   * The Rsva rate code
   *
   */
  code?: string;
  /**
   * Price per minute
   *
   */
  pricePerMinuteWithoutTax?: OrderPrice;
  /**
   * Price per call
   *
   */
  pricePerCallWithoutTax?: OrderPrice;
}
/**
 * Previous tollfree bill
 */
export interface TelephonyHistoryTollfreeConsumption {
  /**
   * date of the bill
   *
   */
  date?: Date;
  /**
   * the amount which is paid by the called number
   *
   */
  price?: OrderPrice;
  /**
   * status of the bill
   *
   */
  status?: TelephonyBillStatusEnum;
}
/**
 * Screenlist condition
 */
export interface TelephonyEasyHuntingScreenListsConditions {
  /**
   * Type of screenlist
   *
   */
  screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
  /**
   * Screenlist based on the presented caller number
   *
   */
  callerIdNumber?: string;
  /**
   */
  conditionId?: Number;
  /**
   * Screenlist based on the destination number
   *
   */
  destinationNumber?: string;
}
/**
 * Whispering mode
 */
export type TelephonyOvhPabxWhisperingModeEnum = 'Whisper to agent only' | 'Whisper to all participants';
/**
 * Folder type
 */
export type TelephonyVoicemailMessageFolderDirectoryEnum = 'family' | 'friends' | 'inbox' | 'old' | 'urgent' | 'work';
/**
 * Detail of a fax campaign
 */
export interface TelephonyFaxCampaignDetail {
  /**
   */
  todo?: string[];
  /**
   */
  success?: string[];
  /**
   */
  failed?: string[];
}
/**
 * All existing properties of line or alias offer
 */
export type TelephonyPropertyEnum = 'xdsl';
/**
 * Events triggered by the line
 */
export interface TelephonyEvent {
  /**
   * Duration of the call
   *
   */
  duration?: Number;
  /**
   * Datetime call establishment
   *
   */
  dateTime?: Date;
  /**
   * Protocol (mgcp or sip)
   *
   */
  protocol?: TelephonyRealtimeEventProtocol;
  /**
   * Calling referer, could be the msisdn or the label name
   *
   */
  callingIdentifier?: string;
  /**
   * Type of event
   *
   */
  eventType?: TelephonyRealtimeEventType;
  /**
   * Uniq identifier of the call
   *
   */
  id?: string;
  /**
   * Called referer, could be the msisdn or the label name
   *
   */
  calledIdentifier?: string;
  /**
   * Incoming or outgoing call
   *
   */
  direction?: TelephonyRealtimeEventDirection;
}
/**
 * Fax ScreenLists
 */
export interface TelephonyFaxScreen {
  /**
   * List of numbers not allowed to send a fax
   *
   */
  blacklistedNumbers?: string[];
  /**
   * Which list is active (blackist, whitelist or none)
   *
   */
  filteringList?: TelephonyFaxScreenListTypeEnum;
  /**
   * List of logins (TSI or ID) allowed to send a fax
   *
   */
  whitelistedTSI?: string[];
  /**
   * Number of the fax service
   *
   */
  callNumber?: string;
  /**
   * Country code of the fax service
   *
   */
  countryCode?: string;
  /**
   * List of logins (TSI or ID) not allowed to send a fax
   *
   */
  blacklistedTSI?: string[];
  /**
   */
  serviceName?: string;
  /**
   * List of numbers allowed to send a fax
   *
   */
  whitelistedNumbers?: string[];
}
/**
 * Directory way type
 */
export interface TelephonyDirectoryWayType {
  /**
   */
  wayName?: string;
  /**
   */
  abbreviatedName?: string;
}
/**
 * OVH easy calls queues
 */
export interface TelephonyEasyHunting {
  /**
   * General type of the service
   *
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   * Max number of callers in queue
   *
   */
  queueSize?: Number;
  /**
   * The voicemail used by the EasyPABX
   *
   */
  voicemail?: string;
  /**
   * Tone played just before call is hang up
   *
   */
  toneOnClosing?: Number;
  /**
   * The presented number when bridging calls
   *
   */
  showCallerNumber?: TelephonyOvhPabxDialplanNumberPresentationEnum;
  /**
   * Max wait time when caller is in queue (in seconds)
   *
   */
  maxWaitTime?: Number;
  /**
   * Description of the service
   *
   */
  description?: string;
  /**
   */
  serviceName?: string;
  /**
   * Reject (hangup) anonymous calls
   *
   */
  anonymousRejection?: boolean;
  /**
   * Does the service have extended CCS options enabled?
   *
   */
  isCCS?: boolean;
  /**
   * Tone played when call is picked up
   *
   */
  toneOnOpening?: Number;
  /**
   * Feature of the service
   *
   */
  featureType?: TelephonyTypeEnum;
  /**
   * Tone played when caller is put on hold
   *
   */
  toneOnHold?: Number;
  /**
   * Enable/Disable the status change IVR on your callcenter. The IVR is enabled by default.
   *
   */
  statusIvrEnabled?: boolean;
  /**
   * The calls dispatching strategy
   *
   */
  strategy?: TelephonyOvhPabxHuntingQueueStrategyEnum;
}
/**
 * Consumption destination type
 */
export type TelephonyVoiceConsumptionDestinationTypeEnum = 'landline' | 'mobile' | 'special';
/**
 * Tones type
 */
export type TelephonyTonesOnHoldEnum = 'Custom sound' | 'None' | 'Predefined 1' | 'Predefined 2';
/**
 * The index interval
 */
export type TelephonyDiagnosticReportIndexEnum = '2 days ago' | '3 days ago' | 'today' | 'yesterday';
/**
 * Time zones available for scheduled events time definitions
 */
export type TelephonyTimeZone = 'Europe/Berlin' | 'Europe/Brussels' | 'Europe/London' | 'Europe/Madrid' | 'Europe/Paris' | 'Europe/Zurich';
/**
 * Billing Account
 */
export interface TelephonyBillingAccount {
  /**
   * Current outplan
   *
   */
  currentOutplan?: OrderPrice;
  /**
   * Allowed outplan
   *
   */
  allowedOutplan?: OrderPrice;
  /**
   * Is the billing account trusted
   *
   */
  trusted?: boolean;
  /**
   * Override number display for calls between services of your billing account
   *
   */
  overrideDisplayedNumber?: boolean;
  /**
   * Description of the billing account
   *
   */
  description?: string;
  /**
   * Security deposit amount
   *
   */
  securityDeposit?: OrderPrice;
  /**
   * Hide called numbers in end-of-month call details CSV
   *
   */
  hiddenExternalNumber?: boolean;
  /**
   * Name of the billing account
   *
   */
  billingAccount?: string;
  /**
   * Allowed threshold credit
   *
   */
  creditThreshold?: OrderPrice;
  /**
   * Current status of billing account
   *
   */
  status?: TelephonyBillingAccountStatusEnum;
}
/**
 * The PABX Text To Speech sounds
 */
export interface TelephonyOvhPabxTts {
  /**
   * The voice used to say text
   *
   */
  voice?: TelephonyOvhPabxTtsVoiceEnum;
  /**
   */
  id?: Number;
  /**
   * The text that will be played
   *
   */
  text?: string;
}
/**
 * Post-creation return information structure
 */
export interface TelephonyRmaReturn {
  /**
   * Voucher reference identifier of the return merchandise authorisation
   *
   */
  id?: string;
}
/**
 * Telephony service
 */
export interface TelephonyTelephonyGenericService {
  /**
   */
  serviceName?: string;
}
/**
 * IVR menu entry
 */
export interface TelephonyOvhPabxMenuEntry {
  /**
   * The DTMF that triggers the action
   *
   */
  dtmf?: string;
  /**
   * The action triggered by the DTMF
   *
   */
  action?: TelephonyOvhPabxIvrMenuEntryActionEnum;
  /**
   * The position of the entry in the menu
   *
   */
  position?: Number;
  /**
   * The additionnal parameter of the action
   *
   */
  actionParam?: string;
  /**
   */
  entryId?: Number;
}
/**
 * Voicemail Properties
 */
export interface TelephonyVoicemailProperties {
  /**
   * Sound ID of the temporary greeeting
   *
   */
  temporaryGreetingSoundId?: Number;
  /**
   * Quantity of unread voicemails
   *
   */
  unreadMessages?: Number;
  /**
   * Name of the voicemail panel announce file
   *
   */
  annouceMessage?: string;
  /**
   * Format of the voicemail audio file attached to emails
   *
   */
  audioFormat?: TelephonyServiceVoicemailAudioFormatEnum;
  /**
   * Email address from which emails will be sent
   *
   */
  fromEmail?: string;
  /**
   * Email addresses to notify when a new voicemail is left
   *
   */
  redirectionEmails?: TelephonyServiceVoicemailNotifications[];
  /**
   * Current voicemail version
   *
   */
  isNewVersion?: boolean;
  /**
   * Sound ID of the short greeting played before an automated message
   *
   */
  shortGreetingSoundId?: Number;
  /**
   * Don't allow callers to leave voicemails
   *
   */
  doNotRecord?: boolean;
  /**
   * Play the temporary greeting instead of the regular one
   *
   */
  temporaryGreetingActivated?: boolean;
  /**
   * Don't delete voicemails after they've been sent by email
   *
   */
  keepMessage?: boolean;
  /**
   * Name from which emails will be sent
   *
   */
  fromName?: string;
  /**
   * Type of the greeting to play
   *
   */
  greetingType?: TelephonyVoicemailGreetingEnum;
  /**
   * Force password request to access the voicemail panel
   *
   */
  forcePassword?: boolean;
  /**
   * Sound ID of the long greeeting
   *
   */
  fullGreetingSoundId?: Number;
}
/**
 * Return merchandise authorisation step
 */
export type TelephonyRmaStatusEnum = 'closed' | 'open' | 'received';
/**
 * Special number category
 */
export type TelephonyPortabilitySpecialNumberCategoryEnum = 'access' | 'adults' | 'announced' | 'be_adults' | 'be_content' | 'be_games' | 'be_general' | 'be_relaxing' | 'conferencing' | 'contentsAuto' | 'contentsManual' | 'directory' | 'games' | 'linking' | 'm2m' | 'relationship';
/**
 * IANA TimeZone names
 */
export type CoreTypesTimeZoneEnum = 'Africa/Abidjan' | 'Africa/Accra' | 'Africa/Addis_Ababa' | 'Africa/Algiers' | 'Africa/Asmara' | 'Africa/Bamako' | 'Africa/Bangui' | 'Africa/Banjul' | 'Africa/Bissau' | 'Africa/Blantyre' | 'Africa/Brazzaville' | 'Africa/Bujumbura' | 'Africa/Cairo' | 'Africa/Casablanca' | 'Africa/Ceuta' | 'Africa/Conakry' | 'Africa/Dakar' | 'Africa/Dar_es_Salaam' | 'Africa/Djibouti' | 'Africa/Douala' | 'Africa/El_Aaiun' | 'Africa/Freetown' | 'Africa/Gaborone' | 'Africa/Harare' | 'Africa/Johannesburg' | 'Africa/Juba' | 'Africa/Kampala' | 'Africa/Khartoum' | 'Africa/Kigali' | 'Africa/Kinshasa' | 'Africa/Lagos' | 'Africa/Libreville' | 'Africa/Lome' | 'Africa/Luanda' | 'Africa/Lubumbashi' | 'Africa/Lusaka' | 'Africa/Malabo' | 'Africa/Maputo' | 'Africa/Maseru' | 'Africa/Mbabane' | 'Africa/Mogadishu' | 'Africa/Monrovia' | 'Africa/Nairobi' | 'Africa/Ndjamena' | 'Africa/Niamey' | 'Africa/Nouakchott' | 'Africa/Ouagadougou' | 'Africa/Porto-Novo' | 'Africa/Sao_Tome' | 'Africa/Tripoli' | 'Africa/Tunis' | 'Africa/Windhoek' | 'America/Adak' | 'America/Anchorage' | 'America/Anguilla' | 'America/Antigua' | 'America/Araguaina' | 'America/Argentina/Buenos_Aires' | 'America/Argentina/Catamarca' | 'America/Argentina/Cordoba' | 'America/Argentina/Jujuy' | 'America/Argentina/La_Rioja' | 'America/Argentina/Mendoza' | 'America/Argentina/Rio_Gallegos' | 'America/Argentina/Salta' | 'America/Argentina/San_Juan' | 'America/Argentina/San_Luis' | 'America/Argentina/Tucuman' | 'America/Argentina/Ushuaia' | 'America/Aruba' | 'America/Asuncion' | 'America/Atikokan' | 'America/Bahia' | 'America/Bahia_Banderas' | 'America/Barbados' | 'America/Belem' | 'America/Belize' | 'America/Blanc-Sablon' | 'America/Boa_Vista' | 'America/Bogota' | 'America/Boise' | 'America/Cambridge_Bay' | 'America/Campo_Grande' | 'America/Cancun' | 'America/Caracas' | 'America/Cayenne' | 'America/Cayman' | 'America/Chicago' | 'America/Chihuahua' | 'America/Costa_Rica' | 'America/Creston' | 'America/Cuiaba' | 'America/Curacao' | 'America/Danmarkshavn' | 'America/Dawson' | 'America/Dawson_Creek' | 'America/Denver' | 'America/Detroit' | 'America/Dominica' | 'America/Edmonton' | 'America/Eirunepe' | 'America/El_Salvador' | 'America/Fortaleza' | 'America/Glace_Bay' | 'America/Godthab' | 'America/Goose_Bay' | 'America/Grand_Turk' | 'America/Grenada' | 'America/Guadeloupe' | 'America/Guatemala' | 'America/Guayaquil' | 'America/Guyana' | 'America/Halifax' | 'America/Havana' | 'America/Hermosillo' | 'America/Indiana/Indianapolis' | 'America/Indiana/Knox' | 'America/Indiana/Marengo' | 'America/Indiana/Petersburg' | 'America/Indiana/Tell_City' | 'America/Indiana/Vevay' | 'America/Indiana/Vincennes' | 'America/Indiana/Winamac' | 'America/Inuvik' | 'America/Iqaluit' | 'America/Jamaica' | 'America/Juneau' | 'America/Kentucky/Louisville' | 'America/Kentucky/Monticello' | 'America/Kralendijk' | 'America/La_Paz' | 'America/Lima' | 'America/Los_Angeles' | 'America/Lower_Princes' | 'America/Maceio' | 'America/Managua' | 'America/Manaus' | 'America/Marigot' | 'America/Martinique' | 'America/Matamoros' | 'America/Mazatlan' | 'America/Menominee' | 'America/Merida' | 'America/Metlakatla' | 'America/Mexico_City' | 'America/Miquelon' | 'America/Moncton' | 'America/Monterrey' | 'America/Montevideo' | 'America/Montserrat' | 'America/Nassau' | 'America/New_York' | 'America/Nipigon' | 'America/Nome' | 'America/Noronha' | 'America/North_Dakota/Beulah' | 'America/North_Dakota/Center' | 'America/North_Dakota/New_Salem' | 'America/Ojinaga' | 'America/Panama' | 'America/Pangnirtung' | 'America/Paramaribo' | 'America/Phoenix' | 'America/Port-au-Prince' | 'America/Port_of_Spain' | 'America/Porto_Velho' | 'America/Puerto_Rico' | 'America/Rainy_River' | 'America/Rankin_Inlet' | 'America/Recife' | 'America/Regina' | 'America/Resolute' | 'America/Rio_Branco' | 'America/Santa_Isabel' | 'America/Santarem' | 'America/Santiago' | 'America/Santo_Domingo' | 'America/Sao_Paulo' | 'America/Scoresbysund' | 'America/Sitka' | 'America/St_Barthelemy' | 'America/St_Johns' | 'America/St_Kitts' | 'America/St_Lucia' | 'America/St_Thomas' | 'America/St_Vincent' | 'America/Swift_Current' | 'America/Tegucigalpa' | 'America/Thule' | 'America/Thunder_Bay' | 'America/Tijuana' | 'America/Toronto' | 'America/Tortola' | 'America/Vancouver' | 'America/Whitehorse' | 'America/Winnipeg' | 'America/Yakutat' | 'America/Yellowknife' | 'Antarctica/Casey' | 'Antarctica/Davis' | 'Antarctica/DumontDUrville' | 'Antarctica/Macquarie' | 'Antarctica/Mawson' | 'Antarctica/McMurdo' | 'Antarctica/Palmer' | 'Antarctica/Rothera' | 'Antarctica/Syowa' | 'Antarctica/Troll' | 'Antarctica/Vostok' | 'Arctic/Longyearbyen' | 'Asia/Aden' | 'Asia/Almaty' | 'Asia/Amman' | 'Asia/Anadyr' | 'Asia/Aqtau' | 'Asia/Aqtobe' | 'Asia/Ashgabat' | 'Asia/Baghdad' | 'Asia/Bahrain' | 'Asia/Baku' | 'Asia/Bangkok' | 'Asia/Beirut' | 'Asia/Bishkek' | 'Asia/Brunei' | 'Asia/Chita' | 'Asia/Choibalsan' | 'Asia/Colombo' | 'Asia/Damascus' | 'Asia/Dhaka' | 'Asia/Dili' | 'Asia/Dubai' | 'Asia/Dushanbe' | 'Asia/Gaza' | 'Asia/Hebron' | 'Asia/Ho_Chi_Minh' | 'Asia/Hong_Kong' | 'Asia/Hovd' | 'Asia/Irkutsk' | 'Asia/Jakarta' | 'Asia/Jayapura' | 'Asia/Jerusalem' | 'Asia/Kabul' | 'Asia/Kamchatka' | 'Asia/Karachi' | 'Asia/Kathmandu' | 'Asia/Khandyga' | 'Asia/Kolkata' | 'Asia/Krasnoyarsk' | 'Asia/Kuala_Lumpur' | 'Asia/Kuching' | 'Asia/Kuwait' | 'Asia/Macau' | 'Asia/Magadan' | 'Asia/Makassar' | 'Asia/Manila' | 'Asia/Muscat' | 'Asia/Nicosia' | 'Asia/Novokuznetsk' | 'Asia/Novosibirsk' | 'Asia/Omsk' | 'Asia/Oral' | 'Asia/Phnom_Penh' | 'Asia/Pontianak' | 'Asia/Pyongyang' | 'Asia/Qatar' | 'Asia/Qyzylorda' | 'Asia/Rangoon' | 'Asia/Riyadh' | 'Asia/Sakhalin' | 'Asia/Samarkand' | 'Asia/Seoul' | 'Asia/Shanghai' | 'Asia/Singapore' | 'Asia/Srednekolymsk' | 'Asia/Taipei' | 'Asia/Tashkent' | 'Asia/Tbilisi' | 'Asia/Tehran' | 'Asia/Thimphu' | 'Asia/Tokyo' | 'Asia/Ulaanbaatar' | 'Asia/Urumqi' | 'Asia/Ust-Nera' | 'Asia/Vientiane' | 'Asia/Vladivostok' | 'Asia/Yakutsk' | 'Asia/Yekaterinburg' | 'Asia/Yerevan' | 'Atlantic/Azores' | 'Atlantic/Bermuda' | 'Atlantic/Canary' | 'Atlantic/Cape_Verde' | 'Atlantic/Faroe' | 'Atlantic/Madeira' | 'Atlantic/Reykjavik' | 'Atlantic/South_Georgia' | 'Atlantic/St_Helena' | 'Atlantic/Stanley' | 'Australia/Adelaide' | 'Australia/Brisbane' | 'Australia/Broken_Hill' | 'Australia/Currie' | 'Australia/Darwin' | 'Australia/Eucla' | 'Australia/Hobart' | 'Australia/Lindeman' | 'Australia/Lord_Howe' | 'Australia/Melbourne' | 'Australia/Perth' | 'Australia/Sydney' | 'Europe/Amsterdam' | 'Europe/Andorra' | 'Europe/Athens' | 'Europe/Belgrade' | 'Europe/Berlin' | 'Europe/Bratislava' | 'Europe/Brussels' | 'Europe/Bucharest' | 'Europe/Budapest' | 'Europe/Busingen' | 'Europe/Chisinau' | 'Europe/Copenhagen' | 'Europe/Dublin' | 'Europe/Gibraltar' | 'Europe/Guernsey' | 'Europe/Helsinki' | 'Europe/Isle_of_Man' | 'Europe/Istanbul' | 'Europe/Jersey' | 'Europe/Kaliningrad' | 'Europe/Kiev' | 'Europe/Lisbon' | 'Europe/Ljubljana' | 'Europe/London' | 'Europe/Luxembourg' | 'Europe/Madrid' | 'Europe/Malta' | 'Europe/Mariehamn' | 'Europe/Minsk' | 'Europe/Monaco' | 'Europe/Moscow' | 'Europe/Oslo' | 'Europe/Paris' | 'Europe/Podgorica' | 'Europe/Prague' | 'Europe/Riga' | 'Europe/Rome' | 'Europe/Samara' | 'Europe/San_Marino' | 'Europe/Sarajevo' | 'Europe/Simferopol' | 'Europe/Skopje' | 'Europe/Sofia' | 'Europe/Stockholm' | 'Europe/Tallinn' | 'Europe/Tirane' | 'Europe/Uzhgorod' | 'Europe/Vaduz' | 'Europe/Vatican' | 'Europe/Vienna' | 'Europe/Vilnius' | 'Europe/Volgograd' | 'Europe/Warsaw' | 'Europe/Zagreb' | 'Europe/Zaporozhye' | 'Europe/Zurich' | 'Indian/Antananarivo' | 'Indian/Chagos' | 'Indian/Christmas' | 'Indian/Cocos' | 'Indian/Comoro' | 'Indian/Kerguelen' | 'Indian/Mahe' | 'Indian/Maldives' | 'Indian/Mauritius' | 'Indian/Mayotte' | 'Indian/Reunion' | 'Pacific/Apia' | 'Pacific/Auckland' | 'Pacific/Bougainville' | 'Pacific/Chatham' | 'Pacific/Chuuk' | 'Pacific/Easter' | 'Pacific/Efate' | 'Pacific/Enderbury' | 'Pacific/Fakaofo' | 'Pacific/Fiji' | 'Pacific/Funafuti' | 'Pacific/Galapagos' | 'Pacific/Gambier' | 'Pacific/Guadalcanal' | 'Pacific/Guam' | 'Pacific/Honolulu' | 'Pacific/Johnston' | 'Pacific/Kiritimati' | 'Pacific/Kosrae' | 'Pacific/Kwajalein' | 'Pacific/Majuro' | 'Pacific/Marquesas' | 'Pacific/Midway' | 'Pacific/Nauru' | 'Pacific/Niue' | 'Pacific/Norfolk' | 'Pacific/Noumea' | 'Pacific/Pago_Pago' | 'Pacific/Palau' | 'Pacific/Pitcairn' | 'Pacific/Pohnpei' | 'Pacific/Port_Moresby' | 'Pacific/Rarotonga' | 'Pacific/Saipan' | 'Pacific/Tahiti' | 'Pacific/Tarawa' | 'Pacific/Tongatapu' | 'Pacific/Wake' | 'Pacific/Wallis';
/**
 * Start and end points (inclusive) of a range
 */
export interface ComplexTypeRange<T> {
  /**
   * Start point of the range
   *
   */
  from?: T;
  /**
   * End point of the range
   *
   */
  to?: T;
}
/**
 * French value added services subject to the RSVA reform (Référentiel des numéros SVA)
 */
export interface TelephonyRsva {
  /**
   */
  typology?: TelephonyPortabilitySpecialNumberCategoryEnum;
  /**
   */
  serviceName?: string;
}
/**
 * OVH calls queues and OVH IVRs (Interactive Voice Response)
 */
export interface TelephonyOvhPabx {
  /**
   * General type of the service
   *
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   * Does the service have extended CCS options enabled?
   *
   */
  isCCS?: boolean;
  /**
   * Feature of the service
   *
   */
  featureType?: TelephonyTypeEnum;
  /**
   * Description of the service
   *
   */
  description?: string;
  /**
   */
  serviceName?: string;
}
/**
 * Offer task types
 */
export type TelephonyOfferTaskTypeEnum = 'line' | 'offer' | 'option' | 'phone';
/**
 * Status of the agent
 */
export type TelephonyOvhPabxHuntingAgentStatusEnum = 'available' | 'loggedOut' | 'onBreak';
/**
 * Directory Informations
 */
export interface TelephonyDirectoryHeadingPJ {
  /**
   */
  directoryServiceCode?: Number;
  /**
   */
  notification?: string;
  /**
   */
  directoryServiceDescription?: string;
  /**
   */
  apeDescription?: string;
  /**
   */
  apeCode?: string;
}
/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingQueueLiveCalls {
  /**
   * Name or number of the agent who answered the call
   *
   */
  agent?: string;
  /**
   * Phone number of the caller (or anonymous if unknown)
   *
   */
  callerIdNumber?: string;
  /**
   * Whether or not the call is on hold
   *
   */
  onHold?: boolean;
  /**
   * Answer date of the call
   *
   */
  answered?: Date;
  /**
   * End date of the call
   *
   */
  end?: Date;
  /**
   * Name of the caller (or anonymous if unknown)
   *
   */
  callerIdName?: string;
  /**
   */
  id?: Number;
  /**
   * Current state of the call
   *
   */
  state?: TelephonyOvhPabxHuntingLiveCallsStateEnum;
  /**
   * Begin date of the call
   *
   */
  begin?: Date;
  /**
   * Name of the queue of the call
   *
   */
  queue?: string;
  /**
   * Phone number called (in case of an outgoing call)
   *
   */
  destinationNumber?: string;
}
/**
 * Abbreviated number
 */
export interface TelephonyAbbreviatedNumberGroup {
  /**
   * The abbreviated number which must start with "7" and must have a length of 3 or 4 digits
   *
   */
  abbreviatedNumber?: Number;
  /**
   */
  surname?: string;
  /**
   */
  name?: string;
  /**
   * The destination of the abbreviated number
   *
   */
  destinationNumber?: string;
}
/**
 * Details about simultaneous channels of this line
 */
export interface TelephonySimultaneousChannelsDetails {
  /**
   * Current quantity of simultaneous channels.
   *
   */
  current?: Number;
  /**
   * Extra quantity of simultaneous channels added to the line.
   *
   */
  extra?: Number;
  /**
   * Maximum quantity of simultaneous channels the line can have.
   *
   */
  maximum?: Number;
  /**
   * Basic quantity of simultaneous channels included in the line.
   *
   */
  basic?: Number;
  /**
   * Quantity of simultaneous channels going to be deleted at the end of the billing cycle.
   *
   */
  toBeDeleted?: Number;
}
/**
 * The possible criteria matching a searched value for a zone
 */
export type TelephonyNumberDetailedZoneMatchingCriteriaEnum = 'city' | 'internationalNumber' | 'number' | 'zne';
/**
 * The event type
 */
export type TelephonyRealtimeEventType = 'end_calling' | 'end_hold' | 'end_ringing' | 'start_calling' | 'start_hold' | 'start_ringing';
/**
 * Calls dispatching startegy
 */
export type TelephonyEasyMiniPabxHuntingStrategyEnum = 'cyclic' | 'leastIdleSinceLastCall' | 'linear' | 'mostIdleSinceLastCall' | 'mostIdleSinceLogging' | 'parallel' | 'random';
/**
 * Country that defines the portability kind
 */
export type TelephonyPortabilityCountryEnum = 'belgium' | 'france' | 'switzerland';
/**
 * Fax properties
 */
export interface TelephonyFaxProperties {
  /**
   */
  receiver?: string;
  /**
   */
  faxQuality?: TelephonyFaxQualityEnum;
  /**
   */
  rejectAnonymous?: boolean;
  /**
   */
  sender?: string;
  /**
   */
  callNumber?: string;
  /**
   */
  countryCode?: string;
  /**
   */
  redirectionEmail?: string[];
  /**
   */
  fromName?: string;
  /**
   */
  faxMaxCall?: TelephonyFaxSendingTries;
  /**
   */
  mailFormat?: TelephonyFaxMailFormatEnum;
  /**
   */
  faxTagLine?: string;
  /**
   */
  fromEmail?: string;
}
/**
 * 
 */
export interface TelephonyLineNotificationsOptions {
  /**
   * Error logging notifications options
   *
   */
  logs?: TelephonyLineNotificationsLogsOptions;
}
/**
 * Trunk service
 */
export interface TelephonyTrunk {
  /**
   * Type of the service
   *
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   * Description of the service
   *
   */
  description?: string;
  /**
   * Name of the service
   *
   */
  serviceName?: string;
}
/**
 * Available language for your conference
 */
export type TelephonyConferenceLanguageEnum = 'de' | 'en' | 'es' | 'fr' | 'it';
/**
 * Export file format
 */
export type TelephonyContactsExportFormatsEnum = 'csv';
/**
 * Easy hunting time conditions
 */
export interface TelephonyEasyHuntingTimeConditions {
  /**
   * The time of the day when the extension will start to be executed
   *
   */
  timeFrom?: Date;
  /**
   */
  conditionId?: Number;
  /**
   * The time of the day when the extension will stop to be executed
   *
   */
  timeTo?: Date;
  /**
   * The day of the week when the extension will be executed
   *
   */
  weekDay?: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum;
  /**
   * The policy of time condition
   *
   */
  policy?: TelephonyTimeConditionsPolicyEnum;
}
/**
 * The nature of the call forward
 */
export type TelephonyLineOptionForwardNatureTypeEnum = 'fax' | 'number' | 'voicemail';
/**
 * Line tones
 */
export interface TelephonyTones {
  /**
   * Tone played when callee is ending call
   *
   */
  endCall?: TelephonyTonesEnum;
  /**
   * Tone played when caller is put on hold
   *
   */
  onHold?: TelephonyTonesOnHoldEnum;
  /**
   * Ringback tone
   *
   */
  ringback?: TelephonyTonesEnum;
  /**
   * Tone played when caller is waiting in queue
   *
   */
  callWaiting?: TelephonyTonesEnum;
}
/**
 * Status of the agent
 */
export type TelephonyOvhPabxHuntingLiveAgentStatusEnum = 'inAQueueCall' | 'loggedOut' | 'onBreak' | 'receiving' | 'waiting';
/**
 * Telephony service
 */
export interface TelephonyTelephonyService {
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  offers?: string[];
  /**
   * The country of the number
   *
   */
  country?: TelephonyNumberCountryEnum;
  /**
   * Does this service have fax capabilities?
   *
   */
  hasFaxCapabilities?: boolean;
  /**
   */
  simultaneousLines?: Number;
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
  /**
   * Current outplan
   *
   */
  currentOutplan?: OrderPrice;
  /**
   * The service offers
   *
   */
  getPublicOffer?: TelephonyLineOffer;
  /**
   * The country code of the number
   *
   */
  countryCode?: TelephonyNumberCountryCodeEnum;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   * The identifier to use to port the number
   *
   */
  rio?: string;
  /**
   */
  properties?: TelephonyPropertyEnum[];
}
/**
 * Current Return Merchandise Authorisation
 */
export interface TelephonyRma {
  /**
   * Process determined for merchandise returned
   *
   */
  process?: TelephonyRmaReplaceTypeEnum;
  /**
   * Reception datetime of the return merchandise authorisation ticket
   *
   */
  receptionDatetime?: Date;
  /**
   * Offer type of the new merchandise in case of exchange
   *
   */
  offerTypeNew?: TelephonyRmaOfferTypeEnum;
  /**
   * Contact information related to the delivery shipping in case of exchange
   *
   */
  shippingContact?: TelephonyContact;
  /**
   * Typology process of merchandise return
   *
   */
  type?: TelephonyRmaTypeEnum;
  /**
   * New merchandise brand in case of exchange
   *
   */
  newMerchandise?: string;
  /**
   * Is the RMA cancellable?
   *
   */
  cancellable?: boolean;
  /**
   * Indicates the current status of the RMA with a list of steps
   *
   */
  steps?: TelephonyRmaStep[];
  /**
   * Merchandise reference
   *
   */
  equipmentReference?: string;
  /**
   * Creation datetime of the return merchandise authorisation ticket
   *
   */
  creationDatetime?: Date;
  /**
   * Return merchandise authorisation identifier
   *
   */
  id?: string;
  /**
   * Termination datetime of the return merchandise authorisation ticket
   *
   */
  terminationDatetime?: Date;
  /**
   * Offer type of the return merchandise
   *
   */
  offerTypeOld?: TelephonyRmaOfferTypeEnum;
  /**
   * Return merchandise authorisation step
   *
   */
  status?: TelephonyRmaStatusEnum;
}
/**
 * Previous billed consumptions
 */
export interface TelephonyHistoryConsumption {
  /**
   */
  date?: Date;
  /**
   */
  price?: OrderPrice;
  /**
   */
  priceOutplan?: OrderPrice;
  /**
   */
  status?: TelephonyBillStatusEnum;
}
/**
 * Nature of screen list
 */
export type TelephonyScreenListNatureEnum = 'fax' | 'international' | 'services' | 'special' | 'voicemail';
/**
 * Types of hangupCause for generated calls.
 */
export type TelephonyCallsGeneratorHangupCauseEnum = 'AccessInformationDiscarded' | 'AllottedTimeout' | 'AttendedTransfer' | 'BlindTransfer' | 'CallAwardedbeing' | 'ChannelTypeNotImplemented' | 'ChannelUnacceptable' | 'CodeSip403BearerCapabilityNotAuthorized' | 'CodeSip403IncomingCallsBarred' | 'CodeSip403OutgoingCallsBarred' | 'CodeSip404NoRouteToDestination' | 'CodeSip404NoRouteToSpecifiedTransitNetwork' | 'CodeSip404UnallocatedNumber' | 'CodeSip408NoUserResponding' | 'CodeSip410NumberChanged' | 'CodeSip410RedirectionToNewDestination' | 'CodeSip480NoAnswerFromUser' | 'CodeSip480NormalUnspecified' | 'CodeSip480SubscriberAbsent' | 'CodeSip483ExchangeRoutingError' | 'CodeSip484InvalidNumberFormatAddressIncomplete' | 'CodeSip486UserBusy' | 'CodeSip487OriginatorCancel' | 'CodeSip488IncompatibleDestination' | 'CodeSip488bearerCapabilityNotImplemented' | 'CodeSip501FacilitiesRejected' | 'CodeSip501RequestedFacilityNotImplemented' | 'CodeSip501ServiceOrOptionNotImplementedUnspecified' | 'CodeSip502DestinationOutOfOrder' | 'CodeSip503BearerCapabilityNotPresentlyAvailable' | 'CodeSip503NetworkOutOfOrder' | 'CodeSip503NoCircuitChannelAvailable' | 'CodeSip503RequestedCircuitOrChannelNotAvailable' | 'CodeSip503SwitchingEquipmentCongestion' | 'CodeSip503TemporaryFailure' | 'CodeSip504RecoveryOnTimerExpiry' | 'CodeSip603CallRejected' | 'Crash' | 'GatewayDown' | 'InformationElementOrParameterNonExistentOrNotImplemented' | 'InterworkingUnspecified' | 'InvalidCallReferenceValue' | 'InvalidInformationElementContents' | 'InvalidMessageUnspecified' | 'LoseRace' | 'ManagerRequest' | 'MandatoryInformationElementIsMissing' | 'MediaTimeout' | 'MessageNotCompatibleWithCallState' | 'MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented' | 'MessageTypeNonExistentOrNotImplemented' | 'NormalCallClearing' | 'ParameterNonExistentOrNotImplementedPassedOnNationalUse' | 'PickedOff' | 'PreEmpted' | 'ProgressTimeout' | 'ProtocolErrorUnspecified' | 'RequestedFacilityNotSubscribed' | 'ResponseToStatusInquiry' | 'ServiceOrOptionNotAvailableUnspecified' | 'SystemShutdown' | 'UnknownOrCallUnfinished' | 'UnspecifiedNoOtherCauseCodesApplicable' | 'UserChallenge' | 'UserNotRegistered';
/**
 * Task about getting entreprise informations
 */
export interface TelephonyEntrepriseNumberInformationsTask {
  /**
   * Informations about the enterprise
   *
   */
  informations?: TelephonyEntrepriseNumberInformations;
  /**
   * Task status
   *
   */
  status?: TelephonyTaskStatusEnum;
}
/**
 * Types of statistics available for a line.
 */
export type TelephonyLineNotificationsLogsFrequencyEnum = 'Never' | 'Once a day' | 'Twice a day';
/**
 * The language of the line
 */
export type TelephonyLineOptionLanguageEnum = 'Dutch' | 'English (UK)' | 'French' | 'French (BE)' | 'German' | 'Italian' | 'Spanish';
/**
 * Offer task actions
 */
export type TelephonyOfferTaskActionEnum = 'convertToAlias' | 'convertToSip' | 'migrateToNewVoicemail' | 'removeSimltaneousLines' | 'switchServer' | 'termination' | 'updateFirmware' | 'upgrade';
/**
 * Scheduler capable services
 */
export interface TelephonyScheduler {
  /**
   */
  timeZone?: TelephonyTimeZone;
  /**
   */
  serviceName?: string;
}
/**
 * The event protocol
 */
export type TelephonyRealtimeEventProtocol = 'mgcp' | 'sip';
/**
 * Task status
 */
export type TelephonyTaskStatusEnum = 'doing' | 'done' | 'error' | 'pause' | 'todo';
/**
 * Conference properties
 */
export interface TelephonyConferenceProperties {
  /**
   * Whether or not anonmyous participants are allowed
   *
   */
  anonymousRejection?: boolean;
  /**
   * The events channel hash
   *
   */
  eventsChannel?: string;
  /**
   * Whether or not conference is recorded
   *
   */
  recordStatus?: boolean;
  /**
   * Whether or not announce file is played before entrance
   *
   */
  announceFile?: boolean;
  /**
   * The announce file name
   *
   */
  announceFilename?: string;
  /**
   * The email address to send conference report to
   *
   */
  reportEmail?: string;
  /**
   * The conference pin number
   *
   */
  pin?: string;
  /**
   * Whether or not participants enter conference room muted
   *
   */
  enterMuted?: boolean;
  /**
   * The announce sound id
   *
   */
  announceSoundId?: Number;
  /**
   * The status of the reporting
   *
   */
  reportStatus?: TelephonyConferenceReportStatusEnum;
  /**
   * The conference sounds language
   *
   */
  language?: TelephonyConferenceLanguageEnum;
  /**
   * True if you want to receive a white-labelled mail report of your conference
   *
   */
  whiteLabelReport?: boolean;
}
/**
 * Types of dialplan available for callsGenerator.
 */
export type TelephonyCallsGeneratorDialplanEnum = 'PlayAudioFile' | 'PlayAudioFileAndTransferCall' | 'ReadText' | 'RequestAppointmentConfirmation' | 'RequestAppointmentConfirmationWithTransfer';
/**
 * Time conditions options
 */
export interface TelephonyTimeConditionOptions {
  /**
   * Action type executed when the first slot is used
   *
   */
  slot1Type?: TelephonyTimeConditionsSlotTypeEnum;
  /**
   * Action type executed when the unavailable slot is used
   *
   */
  unavailableType?: TelephonyTimeConditionsSlotTypeEnum;
  /**
   * Action type executed when the second slot is used
   *
   */
  slot2Type?: TelephonyTimeConditionsSlotTypeEnum;
  /**
   * Number associated to the third slot action
   *
   */
  slot3Number?: string;
  /**
   * Action type executed when the third slot is used
   *
   */
  slot3Type?: TelephonyTimeConditionsSlotTypeEnum;
  /**
   * Number associated to the first slot action
   *
   */
  slot1Number?: string;
  /**
   * Number associated to the second slot action
   *
   */
  slot2Number?: string;
  /**
   * Number associated to the unavailable slot action
   *
   */
  unavailableNumber?: string;
  /**
   * Timeout value of the time condition
   *
   */
  timeout?: TelephonyTimeConditionsTimeoutEnum;
  /**
   * Status of time conditions
   *
   */
  status?: TelephonyTimeConditionsGlobalStatusEnum;
}
/**
 * User of the click 2 call
 */
export interface TelephonyClick2CallUser {
  /**
   * Contact identifier
   *
   */
  id?: Number;
  /**
   * login of the click 2 call user
   *
   */
  login?: string;
  /**
   * Date when user was created
   *
   */
  creationDateTime?: Date;
}
/**
 * Temporary url informations
 */
export interface TelephonyTemporaryLogsLink {
  /**
   * Temporary url
   *
   */
  url?: string;
  /**
   * Temporary url expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * Scheculer category
 */
export type TelephonySchedulerCategoryEnum = 'holidays' | 'scheduler1' | 'scheduler2' | 'scheduler3';
/**
 * Informations related to associable phone capabilities
 */
export interface TelephonyLinePhoneAssociable {
  /**
   * Current lines configured on the phone
   *
   */
  associatedLines?: TelephonyLinePhoneAssociableConfiguredLines[];
  /**
   * Phone protocol
   *
   */
  protocol?: TelephonyProtocolEnum;
  /**
   * Maximum quantity of lines managed by the phone
   *
   */
  maxLines?: Number;
  /**
   * Brand name of the phone
   *
   */
  brand?: string;
}
/**
 * Voicemail audio format
 */
export type TelephonyServiceVoicemailAudioFormatEnum = 'aiff' | 'au' | 'flac' | 'mp3' | 'ogg' | 'wav';
/**
 * Information extraction status
 */
export type TelephonyCallDiagnosticStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Sounds attached to this telephony account
 */
export interface TelephonySound {
  /**
   * URL to get sound file
   *
   */
  getUrl?: string;
  /**
   * Sound filename
   *
   */
  filename?: string;
  /**
   * Sound file size (in bytes)
   *
   */
  size?: Number;
  /**
   * URL to upload sound file
   *
   */
  putUrl?: string;
  /**
   * Sound description
   *
   */
  description?: string;
  /**
   * Sound ID
   *
   */
  id?: Number;
  /**
   * Sound creation date
   *
   */
  creationDate?: Date;
}
/**
 * Type of screen list
 */
export type TelephonyScreenListTypeEnum = 'incomingBlackList' | 'incomingWhiteList' | 'outgoingBlackList' | 'outgoingWhiteList';
/**
 * Conference realtime informations structure
 */
export interface TelephonyConferenceInformations {
  /**
   * The current participants count in your conference room
   *
   */
  membersCount?: Number;
  /**
   * The date when the conference began
   *
   */
  dateStart?: Date;
  /**
   * Whether or not the conference room is locked
   *
   */
  locked?: boolean;
}
/**
 * Typology of number
 */
export type TelephonyNumberTypeEnum = 'geographic' | 'nogeographic' | 'special';
/**
 * Voicemail service
 */
export interface TelephonyVoicemail {
  /**
   */
  offers?: string[];
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
}
/**
 * Error logging notifications options
 */
export interface TelephonyLineNotificationsLogsOptions {
  /**
   * Email address where to send notifications
   *
   */
  email?: string;
  /**
   * Send a blank notification if there is no diagnosticReports entries for the period
   *
   */
  sendIfNull?: boolean;
  /**
   * Frequency at which the notifications will be send
   *
   */
  frequency?: TelephonyLineNotificationsLogsFrequencyEnum;
}
/**
 * Directory Informations
 */
export interface TelephonyDirectoryInfo {
  /**
   */
  directoryServiceCode?: string;
  /**
   */
  country?: string;
  /**
   */
  PJSocialNomination?: string;
  /**
   */
  occupation?: string;
  /**
   */
  wayName?: string;
  /**
   */
  gender?: NichandleGenderEnum;
  /**
   */
  city?: string;
  /**
   */
  siret?: string;
  /**
   */
  number?: string;
  /**
   */
  inseeCode?: Number;
  /**
   */
  wayType?: string;
  /**
   */
  ape?: string;
  /**
   */
  cedex?: string;
  /**
   */
  urbanDistrict?: string;
  /**
   */
  email?: string;
  /**
   */
  lineDescription?: string;
  /**
   */
  displaySearchReverse?: boolean;
  /**
   */
  address?: string;
  /**
   */
  displayFirstName?: boolean;
  /**
   */
  postBox?: string;
  /**
   */
  socialNomination?: string;
  /**
   */
  addressExtra?: string;
  /**
   */
  modificationType?: string;
  /**
   */
  wayNumber?: string;
  /**
   */
  displayUniversalDirectory?: boolean;
  /**
   */
  birthDate?: Date;
  /**
   */
  legalForm?: string;
  /**
   */
  socialNominationExtra?: string;
  /**
   */
  displayOnlyCity?: boolean;
  /**
   */
  firstName?: string;
  /**
   */
  modificationDate?: string;
  /**
   */
  areaCode?: Number;
  /**
   */
  wayNumberExtra?: string;
  /**
   */
  name?: string;
  /**
   */
  postCode?: string;
  /**
   */
  receivePJDirectory?: boolean;
  /**
   */
  displayMarketingDirectory?: boolean;
  /**
   */
  status?: string;
}
/**
 * The PABX records
 */
export interface TelephonyOvhPabxRecord {
  /**
   * The duration in seconds of the recorded call
   *
   */
  duration?: Number;
  /**
   * The agent number of the recorded call
   *
   */
  agent?: string;
  /**
   * The caller number of the recorded call
   *
   */
  callerIdNumber?: string;
  /**
   * The begin date of the recorded call
   *
   */
  callStart?: Date;
  /**
   * The record sound url
   *
   */
  fileUrl?: string;
  /**
   */
  id?: Number;
  /**
   * The caller name of the recorded call
   *
   */
  callerIdName?: string;
  /**
   * The end date of the recorded call
   *
   */
  callEnd?: Date;
  /**
   * The destination number of the recorded call
   *
   */
  destinationNumber?: string;
}
/**
 * Tones type
 */
export type TelephonyTonesEnum = 'Custom sound' | 'None';
/**
 * RMA step names
 */
export type TelephonyRmaStepNameEnum = 'dispatchJustification' | 'equipmentSending' | 'equipmentTesting' | 'opening' | 'parcelReception' | 'parcelValidation' | 'validation';
/**
 * Type of slot
 */
export type TelephonyTimeConditionsSlotTypeEnum = 'number' | 'voicemail';
/**
 * Number country
 */
export type TelephonyNumberCountryEnum = 'be' | 'ch' | 'de' | 'es' | 'fr' | 'gb' | 'it' | 'uk';
/**
 * Agent assigned to a queue
 */
export interface TelephonyOvhPabxHuntingAgentQueue {
  /**
   */
  queueId?: Number;
  /**
   */
  agentId?: Number;
  /**
   * The position in the queue
   *
   */
  position?: Number;
}
/**
 * Folder type
 */
export type TelephonyVoicemailMessageFolderGreetingEnum = 'busy' | 'greet' | 'temp' | 'unavail';
/**
 * Phone book
 */
export interface TelephonyPhonebook {
  /**
   * Set if phonebook is readonly
   *
   */
  isReadonly?: boolean;
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
 * Abbreviated number
 */
export interface TelephonyAbbreviatedNumber {
  /**
   * The abbreviated number which must start with "2" and must have a length of 3 or 4 digits
   *
   */
  abbreviatedNumber?: Number;
  /**
   */
  surname?: string;
  /**
   */
  name?: string;
  /**
   * The destination of the abbreviated number
   *
   */
  destinationNumber?: string;
}
/**
 * Call which are repayable
 */
export interface TelephonyRepaymentConsumption {
  /**
   * Duration of the call
   *
   */
  duration?: Number;
  /**
   * Called number of the call
   *
   */
  called?: string;
  /**
   */
  consumptionId?: Number;
  /**
   * Price repayed with the call
   *
   */
  price?: Number;
  /**
   */
  dialed?: string;
  /**
   * Calling number of the call
   *
   */
  calling?: string;
  /**
   * Is the call repayable right now
   *
   */
  repayable?: boolean;
  /**
   * the Datetime of the start of the call
   *
   */
  creationDatetime?: Date;
  /**
   * Calling number's operator
   *
   */
  operator?: string;
}
/**
 * List of possible duration unit. "NA" means that there is no defined duration
 */
export type TelephonyPortabilityStepDurationUnitEnum = 'NA' | 'day' | 'hour' | 'openday';
/**
 * All genders a person can choose
 */
export type NichandleGenderEnum = 'female' | 'male';
/**
 * Operation on a telephony offer
 */
export interface TelephonyOfferTask {
  /**
   * Planned execution date
   *
   */
  executionDate?: Date;
  /**
   * Actual action that will be executed
   *
   */
  action?: TelephonyOfferTaskActionEnum;
  /**
   * Type of operation that will be executed
   *
   */
  type?: TelephonyOfferTaskTypeEnum;
  /**
   */
  taskId?: Number;
  /**
   * Current status of the task
   *
   */
  status?: TelephonyTaskStatusEnum;
}
/**
 * Informations related to a telephone offer
 */
export interface TelephonyHardwareOffer {
  /**
   * Telephony price
   *
   */
  price?: OrderPrice;
  /**
   * The telephony name
   *
   */
  name?: string;
  /**
   * The telephony description
   *
   */
  description?: string;
  /**
   * An URL to telephony details
   *
   */
  url?: string;
}
/**
 * Customer informations about a portability
 */
export interface TelephonyPortabilityCustomerInfos {
  /**
   * ZIP code of the customer's address
   *
   */
  zip?: string;
  /**
   * Door of the customer's address
   *
   */
  door?: string;
  /**
   * Street name of the customer's address
   *
   */
  streetName?: string;
  /**
   * Stair of the customer's address
   *
   */
  stair?: string;
  /**
   * Street number of the customer's address
   *
   */
  streetNumber?: string;
  /**
   * City of the customer's address
   *
   */
  city?: string;
  /**
   * Name of the customer
   *
   */
  name?: string;
  /**
   * Floor of the customer's address
   *
   */
  floor?: string;
  /**
   * SIRET of the customer
   *
   */
  siret?: string;
  /**
   * Building of the customer's address
   *
   */
  building?: string;
}
/**
 * MiniPabx Hunting
 */
export interface TelephonyMiniPabxHunting {
  /**
   * Maximum numbers of callers in the queue
   *
   */
  queueSize?: Number;
  /**
   */
  pattern?: TelephonyEasyMiniPabxHuntingPatternEnum;
  /**
   * True if the tone on closure is enabled
   *
   */
  toneOnClosure?: boolean;
  /**
   * Sound ID of on-hold tone
   *
   */
  toneOnHoldSoundId?: Number;
  /**
   * Sound ID of ringback tone
   *
   */
  toneRingbackSoundId?: Number;
  /**
   * Number of simultaneous calls
   *
   */
  numberOfCalls?: Number;
  /**
   * The maximum waiting time in the calls queue
   *
   */
  onHoldTimer?: Number;
  /**
   */
  name?: string;
  /**
   * True if the tone on hold is enabled
   *
   */
  toneOnHold?: boolean;
  /**
   * Reject anonymous calls
   *
   */
  anonymousCallRejection?: boolean;
  /**
   */
  strategy?: TelephonyEasyMiniPabxHuntingStrategyEnum;
  /**
   * True if the ring back tone is enabled
   *
   */
  toneRingback?: boolean;
  /**
   * Sound ID of on-closure tone
   *
   */
  toneOnClosureSoundId?: Number;
}
/**
 * Informations related to a line offer
 */
export interface TelephonyAccessoryOffer {
  /**
   * Accessory price
   *
   */
  price?: OrderPrice;
  /**
   * The accessory name
   *
   */
  name?: string;
  /**
   * The accessory description
   *
   */
  description?: string;
  /**
   * An URL to accessory details
   *
   */
  url?: string;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Product type
 */
export type TelephonySipDomainProductTypeEnum = 'sip' | 'trunk';
/**
 * Line options
 */
export interface TelephonyLineOptions {
  /**
   */
  displayNumber?: string;
  /**
   * Nature of the forward when the line is unavailable
   *
   */
  forwardBackupNature?: TelephonyLineOptionForwardNatureTypeEnum;
  /**
   * Do not display your number
   *
   */
  identificationRestriction?: boolean;
  /**
   * Whether or not the line has restriction on outgoing calls
   *
   */
  callRestrictionOutgoing?: boolean;
  /**
   * Nature of the unconditional forward
   *
   */
  forwardUnconditionalNature?: TelephonyLineOptionForwardNatureTypeEnum;
  /**
   * Voicemail number to dial from any other line
   *
   */
  voicemailExternalNumber?: string;
  /**
   * The ip restrictions of your line
   *
   */
  ipRestrictions?: string[];
  /**
   * Language of the line
   *
   */
  language?: TelephonyLineOptionLanguageEnum;
  /**
   * Sound ID of ringback tone
   *
   */
  toneRingbackSoundId?: Number;
  /**
   * Nature of the forward when the line is busy
   *
   */
  forwardBusyNature?: TelephonyLineOptionForwardNatureTypeEnum;
  /**
   * Destination of the forward when the line is unavailable
   *
   */
  forwardBackupNumber?: string;
  /**
   */
  doNotDisturb?: boolean;
  /**
   * Nature of the forward on no-reply
   *
   */
  forwardNoReplyNature?: TelephonyLineOptionForwardNatureTypeEnum;
  /**
   * Enable or disable record of outgoing calls
   *
   */
  recordOutgoingCallsBeta?: boolean;
  /**
   * Enable calls forward when the line is unavailable
   *
   */
  forwardBackup?: boolean;
  /**
   * Intercom mode: takes automatically the call with the loudspeaker
   *
   */
  intercom?: TelephonyLineOptionIntercomEnum;
  /**
   * Enable calls forward when the line is busy
   *
   */
  forwardBusy?: boolean;
  /**
   * Destination of the forward on no-reply
   *
   */
  forwardNoReplyNumber?: string;
  /**
   * Whether or not the line has restriction on incoming calls
   *
   */
  callRestrictionIncoming?: boolean;
  /**
   * Sound ID of on-call-waiting tone
   *
   */
  toneOnCallWaitingSoundId?: Number;
  /**
   * Codecs preferences
   *
   */
  codecs?: string;
  /**
   * The default voicemail of the line. It can be the voicemail of any line of your account.
   *
   */
  defaultVoicemail?: string;
  /**
   */
  absentSubscriber?: boolean;
  /**
   * If the line receives a new call and the line is already in communication, this new call is dispatched once the current call is completed
   *
   */
  callWaiting?: boolean;
  /**
   * Sound ID of on-hold tone
   *
   */
  toneOnHoldSoundId?: Number;
  /**
   * Destination of the unconditional forward
   *
   */
  forwardUnconditionalNumber?: string;
  /**
   * Enable unconditional calls forward
   *
   */
  forwardUnconditional?: boolean;
  /**
   * Delay before forward on no-reply
   *
   */
  forwardNoReplyDelay?: Number;
  /**
   * The SIP domain of the line
   *
   */
  domain?: string;
  /**
   * Destination of the forward when the line is busy
   *
   */
  forwardBusyNumber?: string;
  /**
   * Enable calls forward on no-reply
   *
   */
  forwardNoReply?: boolean;
  /**
   * Voicemail short number to dial from the line
   *
   */
  voicemailInternalNumber?: string;
  /**
   * Reject anonymous calls
   *
   */
  anonymousCallRejection?: boolean;
  /**
   * Disallow outgoing calls password
   *
   */
  lockOutCallPassword?: string;
  /**
   * Disallow outgoing calls
   *
   */
  lockOutCall?: boolean;
}
/**
 * The web access for your cloudpabx
 */
export interface TelephonyBannerAccess {
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
 * Time conditions global status
 */
export type TelephonyTimeConditionsGlobalStatusEnum = 'deleted' | 'disabled' | 'enabled';
/**
 * Callback url for each event
 */
export interface TelephonyEventCallback {
  /**
   * Email notification address in case of url calling failure
   *
   */
  emailError?: string;
  /**
   * Url called for each event
   *
   */
  url?: string;
}
/**
 * DDI (direct dial-in) service
 */
export interface TelephonyDdi {
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   */
  destination?: string;
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
}
/**
 * 
 */
export interface TelephonyDefaultSipDomains {
  /**
   * Country
   *
   */
  country?: TelephonyNumberCountryEnum;
  /**
   * Current SIP domain
   *
   */
  currentDomain?: string;
  /**
   * List of available SIP domains
   *
   */
  list?: string[];
  /**
   * Type of the VoIP product concerned
   *
   */
  productType?: TelephonySipDomainProductTypeEnum;
}
/**
 * List of possible type of a telephony service
 */
export type TelephonyTelephonySearchServiceTypeEnum = 'alias' | 'line';
/**
 * Call diagnostic analyze structure call cdrs
 */
export interface TelephonyCallDiagnosticCdrs {
  /**
   * Basic information about call details record
   *
   */
  basic?: TelephonyCallDiagnosticCdrsBasic;
  /**
   * The timestamp of the call details record capture
   *
   */
  timestamp?: Date;
}
/**
 * A step in the portability process
 */
export interface TelephonyPortabilityStep {
  /**
   * The theoric delay between the previous step's done date and this step's done date
   *
   */
  duration?: TelephonyPortabilityStepDuration;
  /**
   * The name of the portability step
   *
   */
  name?: TelephonyPortabilityStepNameEnum;
  /**
   * A brief description of the step
   *
   */
  description?: string;
  /**
   * The date when this step was done
   *
   */
  doneDate?: Date;
  /**
   * Additional informations about the step
   *
   */
  infos?: TelephonyPortabilityStepInfos;
  /**
   * Indicates if the step is to do, currently doing or done
   *
   */
  status?: TelephonyPortabilityStepStatusEnum;
}
/**
 * Plug & Phone
 */
export interface TelephonyPhone {
  /**
   * Mac Address
   *
   */
  macAddress?: string;
  /**
   * The phone user password
   *
   */
  userPassword?: string;
  /**
   * Phone protocol
   *
   */
  protocol?: TelephonyProtocolEnum;
  /**
   * Maximum number of lines managed by a phone
   *
   */
  maxline?: Number;
  /**
   * Current phone properties
   *
   */
  phoneConfiguration?: TelephonyPhoneConfigurationProperty[];
  /**
   * The ip restriction of your MGCP phone
   *
   */
  mgcpIpRestriction?: string;
  /**
   * The phone description
   *
   */
  description?: string;
  /**
   * Brand name
   *
   */
  brand?: string;
}
/**
 * Calls agent
 */
export interface TelephonyOvhPabxHuntingAgent {
  /**
   * The number of the agent
   *
   */
  number?: string;
  /**
   * The id of the current break status of the agent
   *
   */
  breakStatus?: Number;
  /**
   */
  agentId?: Number;
  /**
   * The wrap up time (in seconds) after the calls
   *
   */
  wrapUpTime?: Number;
  /**
   * The maximum of simultaneous calls that the agent will receive from the hunting
   *
   */
  simultaneousLines?: Number;
  /**
   * The agent's description
   *
   */
  description?: string;
  /**
   * The agent's type
   *
   */
  type?: TelephonyOvhPabxHuntingAgentTypeEnum;
  /**
   * The waiting timeout (in seconds) before hangup an assigned called
   *
   */
  timeout?: Number;
  /**
   * The current status of the agent
   *
   */
  status?: TelephonyOvhPabxHuntingAgentStatusEnum;
}
/**
 * Number of tries when sending a fax
 */
export type TelephonyFaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * External displayed number linked to a trunk
 */
export interface TelephonyTrunkExternalDisplayedNumber {
  /**
   * Creation date
   *
   */
  createdAt?: Date;
  /**
   * External displayed number linked to a trunk
   *
   */
  number?: string;
  /**
   * Validation date
   *
   */
  validatedAt?: Date;
  /**
   * Validation status
   *
   */
  status?: TelephonyTrunkExternalDisplayedNumberStatusEnum;
}
/**
 * Call diagnostic analyze structure call cdrs
 */
export interface TelephonyCallDiagnosticCdrsBasic {
  /**
   * Hexadecimal SIP-to-SS7 ISUP cause codes
   *
   */
  cause?: TelephonyCallDiagnosticCauseEnum;
  /**
   * SS7 ISUP cause codes
   *
   */
  causeDescription?: string;
  /**
   * Release location type : forward if the calling hangup, backward if the caller hangup, else local
   *
   */
  releaseLocation?: TelephonyReleaseLocationEnum;
}
/**
 * Phone configuration type enum
 */
export type TelephonyPhoneConfigurationTypeEnum = 'boolean' | 'enum' | 'hidden' | 'ipv4' | 'numeric' | 'string';
/**
 * Status of the trunk's external displayed number
 */
export type TelephonyTrunkExternalDisplayedNumberStatusEnum = 'enabled' | 'refused' | 'toDelete' | 'waitingValidation';
/**
 * Type of screen list
 */
export type TelephonyScreenListChoosingEnum = 'blacklist' | 'disabled' | 'whitelist';
/**
 * Conference service
 */
export interface TelephonyConferenceParticipants {
  /**
   * The caller number of the participant
   *
   */
  callerNumber?: string;
  /**
   * Whether or not the participant can talk in the conference
   *
   */
  speak?: boolean;
  /**
   * The id of the participant
   *
   */
  id?: Number;
  /**
   * The arrival datetime of the participant in the conference.
   *
   */
  arrivalDateTime?: Date;
  /**
   * Whether or not the participant is talking
   *
   */
  talking?: boolean;
  /**
   * Whether or not the participant is active in the room
   *
   */
  floor?: boolean;
  /**
   * Whether or not the participant can hear the conference
   *
   */
  hear?: boolean;
  /**
   * The caller name of the participant
   *
   */
  callerName?: string;
  /**
   * The current level of the participant audio transmission
   *
   */
  energy?: Number;
}
/**
 * Reporting of the current diagnostic
 */
export interface TelephonyCallDiagnosticReporting {
  /**
   * The relevant informations in anormal behaviors
   *
   */
  message?: string;
}
/**
 * Time conditions capable services
 */
export interface TelephonyGenericScreen {
  /**
   */
  serviceName?: string;
}
/**
 * Consumption plan type
 */
export type TelephonyVoiceConsumptionPlanTypeEnum = 'outplan' | 'priceplan';
/**
 * Traffic extracts (SIP) of your line
 */
export interface TelephonyTrafficExtract {
  /**
   * The PCAP file size of the traffic extract
   *
   */
  fileSize?: Number;
  /**
   * The start date of the traffic extract
   *
   */
  dateStart?: Date;
  /**
   * The PCAP URL of the traffic extract
   *
   */
  fileUrl?: string;
  /**
   * The id of the traffic extract
   *
   */
  id?: Number;
  /**
   * The start date of the traffic extract
   *
   */
  dateEnd?: Date;
  /**
   * The status of the extract
   *
   */
  status?: TelephonyTaskStatusEnum;
}
/**
 * Tones type
 */
export type TelephonyTonesTypeEnum = 'callWaiting' | 'endCall' | 'onHold' | 'ringback';
/**
 * Displayed number
 */
export type TelephonyOvhPabxDialplanNumberPresentationEnum = 'alias' | 'both' | 'caller';
/**
 * Advanced diagnostic of the voice call
 */
export interface TelephonyCallDiagnostics {
  /**
   * Sip signal packets during the call and last registers
   *
   */
  sip?: TelephonyCallDiagnosticSip[];
  /**
   * The Call details records information
   *
   */
  cdrs?: TelephonyCallDiagnosticCdrs[];
  /**
   * The MOS call quality report
   *
   */
  callQuality?: TelephonyCallDiagnosticCallQuality[];
  /**
   * The relevant informations in anormal behaviors
   *
   */
  reporting?: TelephonyCallDiagnosticReporting[];
  /**
   * Todo if datas are being to be loaded in cache. done when datas are available
   *
   */
  status?: TelephonyCallDiagnosticStatusEnum;
}
/**
 * PABX Hunting
 */
export interface TelephonyOvhPabxHunting {
  /**
   * The templated url of your CRM, opened by the banner application of your cloudpabx
   *
   */
  crmUrlTemplate?: string;
  /**
   * Enable G729 codec on your callcenter
   *
   */
  g729?: boolean;
  /**
   * The name of your callcenter offer
   *
   */
  name?: string;
  /**
   * Enable/Disable the status change IVR on your callcenter. The IVR is enabled by default.
   *
   */
  statusIvrEnabled?: boolean;
}
/**
 * Action for list antihack
 */
export type TelephonyAntihackActionEnum = 'AUTHORIZE_ALL' | 'AUTHORIZE_ONE_NUMBER' | 'BLOCK_ALL' | 'BLOCK_ONE_NUMBER';
/**
 * EasyPabx
 */
export interface TelephonyEasyPabx {
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
}
/**
 * Contact informations structure
 */
export interface TelephonyContact {
  /**
   * Contact zip
   *
   */
  zip?: string;
  /**
   * Contact country
   *
   */
  country?: CoreTypesCountryEnum;
  /**
   * Contact firstname
   *
   */
  firstname?: string;
  /**
   * Contact address
   *
   */
  address?: string;
  /**
   * Contact city
   *
   */
  city?: string;
  /**
   * Contact phone
   *
   */
  phone?: string;
  /**
   * Contact name
   *
   */
  name?: string;
  /**
   * Contact organisation
   *
   */
  organisation?: string;
  /**
   */
  email?: string;
}
/**
 * Task informations about an entreprise
 */
export interface TelephonyEntrepriseNumberInformations {
  /**
   * Short version of the entreprise number (FR only)
   *
   */
  siren?: string;
  /**
   * Address of the entreprise
   *
   */
  address?: string;
  /**
   * Entreprise number
   *
   */
  entrepriseNumber?: string;
  /**
   * Entreprise's category code for directory services
   *
   */
  ape?: string;
  /**
   * Is this a valid entreprise number?
   *
   */
  isValid?: boolean;
  /**
   * Name of the entreprise
   *
   */
  name?: string;
  /**
   * Brand of the entreprise
   *
   */
  brand?: string;
}
/**
 * Time condition
 */
export interface TelephonyOvhPabxDialplanExtensionConditionTime {
  /**
   * The time of the day when the extension will start to be executed
   *
   */
  timeFrom?: Date;
  /**
   */
  conditionId?: Number;
  /**
   * The time of the day when the extension will stop to be executed
   *
   */
  timeTo?: Date;
  /**
   * The day of the week when the extension will be executed
   *
   */
  weekDay?: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum;
}
/**
 * Informations related to the current RMA step status
 */
export interface TelephonyRmaStep {
  /**
   * The name of the RMA step
   *
   */
  name?: TelephonyRmaStepNameEnum;
  /**
   * A brief description of the step
   *
   */
  description?: string;
  /**
   * The date when this step was done
   *
   */
  doneDate?: Date;
  /**
   * Additional informations about the step
   *
   */
  infos?: string;
  /**
   * Status of the step
   *
   */
  status?: TelephonyRmaStepStatusEnum;
}
/**
 * Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
 */
export interface TelephonyDiagnosticReport {
  /**
   * Identifier of the concerned leg
   *
   */
  callId?: string;
  /**
   * Datetime of the diagnostic
   *
   */
  datetime?: Date;
  /**
   * The level of the diagnostic
   *
   */
  level?: TelephonyDiagnosticReportLevelEnum;
  /**
   * Report of the diagnostic
   *
   */
  report?: string;
  /**
   * Name of the rule detected
   *
   */
  name?: string;
  /**
   * Explanation of the diagnostic
   *
   */
  description?: string;
  /**
   * Typology where the diagnostic arriving from
   *
   */
  category?: TelephonyDiagnosticReportCategoryEnum;
}
/**
 * Automatic Call made by Call Generator on this line
 */
export interface TelephonyCallsGenerated {
  /**
   * Generated call identifier
   *
   */
  identifier?: string;
  /**
   * call duration on seconds
   *
   */
  callDuration?: Number;
  /**
   * original call uuid if it's a transfer
   *
   */
  transferFrom?: string;
  /**
   * DTMF received during the call separate by commas
   *
   */
  dtmf?: string;
  /**
   * number called
   *
   */
  callee?: string;
  /**
   * billingNumber (service used)
   *
   */
  billingNumber?: string;
  /**
   * creation date of the call
   *
   */
  callCreatedDatetime?: Date;
  /**
   * unique call id
   *
   */
  uuid?: string;
  /**
   * hangup cause
   *
   */
  hangupCause?: TelephonyCallsGeneratorHangupCauseEnum;
  /**
   * answer date
   *
   */
  answerDatetime?: Date;
  /**
   * number where the call come from
   *
   */
  caller?: string;
  /**
   * Application and dialplan running for call
   *
   */
  application?: string;
  /**
   * hangup date
   *
   */
  hangupDatetime?: Date;
  /**
   * end status of application
   *
   */
  applicationResult?: string;
}
/**
 * Scheduled event
 */
export interface TelephonySchedulerEvent {
  /**
   * The unique ICS event identifier
   *
   */
  uid?: string;
  /**
   * The beginning date of the event
   *
   */
  dateStart?: Date;
  /**
   */
  description?: string;
  /**
   * The category of the event
   *
   */
  categories?: TelephonySchedulerCategoryEnum;
  /**
   * The ending date of the event
   *
   */
  dateEnd?: Date;
  /**
   */
  title?: string;
}
/**
 * Plug & Phone function key
 */
export interface TelephonyFunctionKey {
  /**
   * The default function used by the key
   *
   */
  default?: string;
  /**
   * The function active on the key
   *
   */
  function?: string;
  /**
   * The function parameter
   *
   */
  parameter?: string;
  /**
   * The number of the function key
   *
   */
  keyNum?: Number;
  /**
   * The key label
   *
   */
  label?: string;
  /**
   * The key type
   *
   */
  type?: string;
}
/**
 * The outplan notifications configured for your billing account
 */
export interface TelephonyConsumptionThreshold {
  /**
   * The notification percentage of maximum outplan
   *
   */
  percentage?: Number;
  /**
   * The blocking type of the associate lines
   *
   */
  block?: TelephonyOutplanNotificationBlockEnum;
  /**
   * The id of the notification
   *
   */
  id?: Number;
  /**
   * Override the nichandle email for this notification
   *
   */
  notifyEmail?: string;
}
/**
 * Available sending method for fax campaign
 */
export type TelephonyFaxCampaignSendTypeEnum = 'automatic' | 'manual' | 'scheduled';
/**
 * Forward type
 */
export type TelephonyTimeConditionsSettingsForwardTypeEnum = 'number' | 'voicemail';
/**
 * EasyPabx Hunting
 */
export interface TelephonyEasyPabxHunting {
  /**
   * The voicemail used by the EasyPABX
   *
   */
  voicemail?: string;
  /**
   * True if the tone on closure is enabled
   *
   */
  toneOnClosure?: boolean;
  /**
   * The maximum no-reply time before forwarding the call to the voicemail
   *
   */
  noReplyTimer?: Number;
  /**
   */
  pattern?: TelephonyEasyMiniPabxHuntingPatternEnum;
  /**
   * Number of simultaneous calls
   *
   */
  numberOfCalls?: Number;
  /**
   * Sound ID of ringback tone
   *
   */
  toneRingbackSoundId?: Number;
  /**
   * Sound ID of on-hold tone
   *
   */
  toneOnHoldSoundId?: Number;
  /**
   */
  name?: string;
  /**
   * True if the tone on hold is enabled
   *
   */
  toneOnHold?: boolean;
  /**
   */
  strategy?: TelephonyEasyMiniPabxHuntingStrategyEnum;
  /**
   * Reject anonymous calls
   *
   */
  anonymousCallRejection?: boolean;
  /**
   * True if the ring back tone is enabled
   *
   */
  toneRingback?: boolean;
  /**
   * Sound ID of on-closure tone
   *
   */
  toneOnClosureSoundId?: Number;
}
/**
 * List past conferences on your number
 */
export interface TelephonyConferenceHistory {
  /**
   * The duration of the conference in seconds
   *
   */
  duration?: Number;
  /**
   * The date the conference began
   *
   */
  dateBegin?: Date;
  /**
   * The count of unique participants of the conference
   *
   */
  countParticipants?: Number;
  /**
   * The audio record url if you set recording
   *
   */
  recordUrl?: string;
  /**
   * The date the conference end
   *
   */
  dateEnd?: Date;
  /**
   * The id of the conference history
   *
   */
  id?: Number;
  /**
   * The events of the conference (participants joining/left)
   *
   */
  events?: TelephonyConferenceHistoryEvent[];
  /**
   * The count of connections to the conference
   *
   */
  countConnections?: Number;
}
/**
 * How the phone had been reset
 */
export type TelephonyResetPhoneMethodEnum = 'code' | 'http';
/**
 * Webaccess type for your conference
 */
export type TelephonyConferenceWebAccessTypeEnum = 'read' | 'write';
/**
 * Available quality for fax documents
 */
export type TelephonyFaxQualityEnum = 'best' | 'high' | 'normal';
/**
 * Enumeration providing payload type to Name of RTP audio video profile
 */
export type TelephonyCallDiagnosticCodecEnum = 'G722' | 'G729' | 'PCMA' | 'PCMU';
/**
 * Calls dispatching pattern
 */
export type TelephonyEasyMiniPabxHuntingPatternEnum = 'all-at-once' | 'cumulated' | 'sequential';
/**
 * A zone type
 */
export type TelephonyNumberDetailedZoneTypeEnum = 'geographic' | 'non-geographic' | 'special';
/**
 * Fax service
 */
export interface TelephonyFax {
  /**
   */
  offers?: string[];
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  description?: string;
  /**
   */
  serviceName?: string;
  /**
   * Send notifications about Line's diagnosticReports
   *
   */
  notifications?: TelephonyLineNotificationsOptions;
}
/**
 * The PABX sounds
 */
export interface TelephonyOvhPabxSound {
  /**
   */
  soundId?: Number;
  /**
   * The sound filename
   *
   */
  name?: string;
}
/**
 * Dialplan extension
 */
export interface TelephonyOvhPabxDialplanExtension {
  /**
   * The type of the screenlist
   *
   */
  screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
  /**
   * The position of the extension in the dialplan (the extensions are executed following this order)
   *
   */
  position?: Number;
  /**
   * Additionnal conditions are used from this chosen scheduler category
   *
   */
  schedulerCategory?: TelephonySchedulerCategoryEnum;
  /**
   */
  extensionId?: Number;
  /**
   * True if the extension is enabled
   *
   */
  enabled?: boolean;
}
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
 * Format of the notification mail. "html" will include a preview image of the fax
 */
export type TelephonyFaxMailFormatEnum = 'html' | 'text';
/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingAgentLiveStatus {
  /**
   * The number of calls this agent took on the current day
   *
   */
  answeredCalls?: Number;
  /**
   * The total duration in seconds of the calls this agent took on the current day
   *
   */
  totalCallDuration?: Number;
  /**
   * Last status change date
   *
   */
  lastStatusChange?: Date;
  /**
   * Current status of the agent
   *
   */
  status?: TelephonyOvhPabxHuntingLiveAgentStatusEnum;
}
/**
 * Spare properties
 */
export interface SpareTelephonyTelephonySpare {
  /**
   * Mac address
   *
   */
  macAddress?: string;
  /**
   * Phone protocol
   *
   */
  protocol?: TelephonyProtocolEnum;
  /**
   * Phone brand model
   *
   */
  brand?: string;
}
/**
 * Call delivery record
 */
export interface TelephonyVoiceConsumption {
  /**
   * Information about hangup cause
   *
   */
  hangupNature?: string;
  /**
   */
  planType?: TelephonyVoiceConsumptionPlanTypeEnum;
  /**
   */
  called?: string;
  /**
   * Country suffix destination
   *
   */
  countrySuffix?: string;
  /**
   */
  creationDatetime?: Date;
  /**
   */
  duration?: Number;
  /**
   */
  wayType?: TelephonyVoiceConsumptionWayTypeEnum;
  /**
   */
  consumptionId?: Number;
  /**
   */
  dialed?: string;
  /**
   */
  calling?: string;
  /**
   */
  destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   * Description of the destination
   *
   */
  designation?: string;
}
/**
 * ScreenList capable services
 */
export interface TelephonyScreen {
  /**
   */
  incomingScreenList?: TelephonyScreenListChoosingEnum;
  /**
   */
  outgoingScreenList?: TelephonyScreenListChoosingEnum;
  /**
   */
  serviceName?: string;
}
/**
 * The call direction for a given event
 */
export type TelephonyRealtimeEventDirection = 'incoming' | 'outgoing';
/**
 * Credentials to access the web interface of the phone
 */
export interface TelephonyPhoneCredentials {
  /**
   * Password to access the web interface of the phone
   *
   */
  password?: string;
  /**
   * Username to access the web interface of the phone
   *
   */
  login?: string;
}
/**
 * Screenlist condition type
 */
export type TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum = 'destinationBlackList' | 'destinationWhiteList' | 'incomingBlackList' | 'incomingWhiteList';
/**
 * Dialplan rule
 */
export interface TelephonyOvhPabxDialplanExtensionRule {
  /**
   * If true, the rule will be executed only when the result of the conditions is false
   *
   */
  negativeAction?: boolean;
  /**
   * The action made by the rule
   *
   */
  action?: TelephonyOvhPabxDialplanExtensionRuleActionEnum;
  /**
   * The position of the rule in the extension (the rules are executed following this order)
   *
   */
  position?: Number;
  /**
   */
  ruleId?: Number;
  /**
   * The parameter of the chosen action
   *
   */
  actionParam?: string;
}
/**
 * Current lines configured on the phone
 */
export interface TelephonyLinePhoneAssociableConfiguredLines {
  /**
   * The line description
   *
   */
  description?: string;
  /**
   * Service name of the line
   *
   */
  serviceName?: string;
}
/**
 * Type of screen list
 */
export type TelephonyFaxScreenListTypeEnum = '' | 'blacklist' | 'no' | 'whitelist';
/**
 * IVR Menu
 */
export interface TelephonyOvhPabxMenu {
  /**
   * The text to speech sound played when the caller uses an invalid DTMF
   *
   */
  invalidSoundTts?: Number;
  /**
   * The name of the menu
   *
   */
  name?: string;
  /**
   */
  menuId?: Number;
  /**
   * The id of the OvhPabxSound played when the caller uses an invalid DTMF
   *
   */
  invalidSound?: Number;
  /**
   * The id of the OvhPabxSound played to greet
   *
   */
  greetSound?: Number;
  /**
   * The text to speech sound played to greet
   *
   */
  greetSoundTts?: Number;
}
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * Release location type : forward if the calling hangup, backward if the caller hangup, else local
 */
export type TelephonyReleaseLocationEnum = 'backward' | 'forward' | 'local';
/**
 * Screenlist condition
 */
export interface TelephonyOvhPabxDialplanExtensionConditionScreenList {
  /**
   * Type of screenlist
   *
   */
  screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
  /**
   * Screenlist based on the presented caller number
   *
   */
  callerIdNumber?: string;
  /**
   */
  conditionId?: Number;
  /**
   * Screenlist based on the destination number
   *
   */
  destinationNumber?: string;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * All existing types of line or alias
 */
export type TelephonyTypeEnum = 'cloudHunting' | 'cloudIvr' | 'conference' | 'contactCenterSolution' | 'contactCenterSolutionExpert' | 'ddi' | 'easyHunting' | 'easyPabx' | 'empty' | 'fax' | 'freefax' | 'mgcp' | 'miniPabx' | 'oldConference' | 'plugAndFax' | 'redirect' | 'sip' | 'svi' | 'voicefax' | 'voicemail' | 'vxml';
/**
 * A contract
 */
export interface OrderContract {
  /**
   */
  name?: string;
  /**
   */
  url?: string;
  /**
   */
  content?: string;
}
/**
 * State of the call
 */
export type TelephonyOvhPabxHuntingLiveCallsStateEnum = 'Answered' | 'Waiting';
/**
 * Greeting type
 */
export type TelephonyVoicemailGreetingEnum = 'default' | 'full' | 'short';
/**
 * Event of a conference (participant left/join)
 */
export interface TelephonyConferenceHistoryEvent {
  /**
   * The date of the conference event
   *
   */
  date?: Date;
  /**
   * The caller id of the participant
   *
   */
  callerid?: string;
  /**
   * The nature of the event : left/join
   *
   */
  type?: string;
}
/**
 * Screenlist condition type
 */
export type TelephonyEasyHuntingScreenListsConditionsStatusEnum = 'disabled' | 'incomingBlackList' | 'incomingWhiteList';
/**
 * Fax delivery record
 */
export interface TelephonyFaxConsumption {
  /**
   */
  pages?: Number;
  /**
   */
  called?: string;
  /**
   */
  wayType?: TelephonyFaxConsumptionWayTypeEnum;
  /**
   */
  consumptionId?: Number;
  /**
   */
  calling?: string;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  creationDatetime?: Date;
}
/**
 * A value associated to a timestamp
 */
export interface TelephonyTimestampAndValue {
  /**
   */
  value?: Number;
  /**
   */
  timestamp?: Number;
}
/**
 * Day of the time condition
 */
export type TelephonyTimeConditionsDayEnum = 'friday' | 'holiday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday';
/**
 * Voicemail greeting
 */
export interface TelephonyVoicemailGreetings {
  /**
   * Callee number in international format
   *
   */
  callee?: string;
  /**
   * Uniq customized greeting identifier
   *
   */
  id?: Number;
  /**
   * Customized greeting voicemail directory
   *
   */
  dir?: TelephonyVoicemailMessageFolderGreetingEnum;
}
/**
 * Level of the diagnostic report
 */
export type TelephonyDiagnosticReportLevelEnum = 'debug' | 'error' | 'info' | 'warn';
/**
 * The blocking mode of line calls
 */
export type TelephonyLineBlockingMode = 'both' | 'incoming' | 'outgoing';
/**
 * Time conditions
 */
export interface TelephonyTimeCondition {
  /**
   */
  hourEnd?: string;
  /**
   */
  hourBegin?: string;
  /**
   */
  id?: Number;
  /**
   */
  day?: TelephonyTimeConditionsDayEnum;
  /**
   */
  policy?: TelephonyTimeConditionsPolicyEnum;
  /**
   */
  status?: string;
}
/**
 * Voice to use for your text to speech
 */
export type TelephonyOvhPabxTtsVoiceEnum = 'Bruce' | 'Helene' | 'Jenny' | 'Loic';
/**
 * Easy hunting time conditions options
 */
export interface TelephonyEasyHuntingTimeConditionsSettings {
  /**
   * Action type executed when the first slot is used
   *
   */
  slot1Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
  /**
   * Action type executed when the unavailable slot is used
   *
   */
  unavailableType?: TelephonyTimeConditionsSettingsForwardTypeEnum;
  /**
   * Action type executed when the second slot is used
   *
   */
  slot2Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
  /**
   * Number associated to the third slot action
   *
   */
  slot3Number?: string;
  /**
   * Status of time conditions
   *
   */
  enable?: boolean;
  /**
   * Action type executed when the third slot is used
   *
   */
  slot3Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
  /**
   * Number associated to the first slot action
   *
   */
  slot1Number?: string;
  /**
   * Number associated to the second slot action
   *
   */
  slot2Number?: string;
  /**
   * Number associated to the unavailable slot action
   *
   */
  unavailableNumber?: string;
}
/**
 * Vxml Properties
 */
export interface TelephonyVxmlProperties {
  /**
   */
  urlRecord?: string;
  /**
   */
  url?: string;
}
type PathstelephonyGET = '/telephony/aliases' | 
'/telephony/aliases/{serviceName}/serviceInfos' | 
'/telephony/aliases/{serviceName}' | 
'/telephony/lines/{serviceName}' | 
'/telephony/lines/{serviceName}/serviceInfos' | 
'/telephony/lines' | 
'/telephony/searchServices' | 
'/telephony/directories/cities' | 
'/telephony/directories/availableZipCodes' | 
'/telephony' | 
'/telephony/fax/offers' | 
'/telephony/{billingAccount}/historyConsumption/{date}' | 
'/telephony/{billingAccount}/historyConsumption/{date}/file' | 
'/telephony/{billingAccount}/historyConsumption' | 
'/telephony/{billingAccount}/rsva' | 
'/telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes' | 
'/telephony/{billingAccount}/rsva/{serviceName}/currentRateCode' | 
'/telephony/{billingAccount}/rsva/{serviceName}' | 
'/telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode' | 
'/telephony/{billingAccount}/historyRepaymentConsumption' | 
'/telephony/{billingAccount}/historyRepaymentConsumption/{date}' | 
'/telephony/{billingAccount}/historyRepaymentConsumption/{date}/document' | 
'/telephony/{billingAccount}/task/{taskId}' | 
'/telephony/{billingAccount}/task' | 
'/telephony/{billingAccount}/trunk' | 
'/telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}' | 
'/telephony/{billingAccount}/trunk/{serviceName}' | 
'/telephony/{billingAccount}/allowedCreditThreshold' | 
'/telephony/{billingAccount}/redirect/{serviceName}' | 
'/telephony/{billingAccount}/redirect' | 
'/telephony/{billingAccount}/eventToken' | 
'/telephony/{billingAccount}/vxml/{serviceName}/settings' | 
'/telephony/{billingAccount}/vxml/{serviceName}' | 
'/telephony/{billingAccount}/vxml' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/functionKey' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials' | 
'/telephony/{billingAccount}/line/{serviceName}/phone' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook' | 
'/telephony/{billingAccount}/line/{serviceName}/trafficExtracts' | 
'/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs' | 
'/telephony/{billingAccount}/line/{serviceName}/options' | 
'/telephony/{billingAccount}/line/{serviceName}/options/availableCodecs' | 
'/telephony/{billingAccount}/line/{serviceName}/automaticCall' | 
'/telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser' | 
'/telephony/{billingAccount}/line/{serviceName}/tones' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/calls' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber' | 
'/telephony/{billingAccount}/line/{serviceName}/antihack' | 
'/telephony/{billingAccount}/line/{serviceName}/ips' | 
'/telephony/{billingAccount}/line/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/records' | 
'/telephony/{billingAccount}/line/{serviceName}' | 
'/telephony/{billingAccount}/line/{serviceName}/canChangePassword' | 
'/telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable' | 
'/telephony/{billingAccount}/line/{serviceName}/activateNewPhone' | 
'/telephony/{billingAccount}/line/{serviceName}/offer' | 
'/telephony/{billingAccount}/line/{serviceName}/listAssociablePhones' | 
'/telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines' | 
'/telephony/{billingAccount}/line/{serviceName}/availableSipDomains' | 
'/telephony/{billingAccount}/line/{serviceName}/statistics' | 
'/telephony/{billingAccount}/line/{serviceName}/lastRegistrations' | 
'/telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails' | 
'/telephony/{billingAccount}/line' | 
'/telephony/{billingAccount}/historyTollfreeConsumption' | 
'/telephony/{billingAccount}/historyTollfreeConsumption/{date}' | 
'/telephony/{billingAccount}/historyTollfreeConsumption/{date}/document' | 
'/telephony/{billingAccount}/portability' | 
'/telephony/{billingAccount}/portability/{id}/status' | 
'/telephony/{billingAccount}/portability/{id}/canBeCancelled' | 
'/telephony/{billingAccount}/portability/{id}/dateCanBeChanged' | 
'/telephony/{billingAccount}/portability/{id}/canBeExecuted' | 
'/telephony/{billingAccount}/portability/{id}' | 
'/telephony/{billingAccount}/portability/{id}/document/{documentId}' | 
'/telephony/{billingAccount}/portability/{id}/document' | 
'/telephony/{billingAccount}/portability/{id}/relaunch' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/sound' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/records' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}' | 
'/telephony/{billingAccount}/ovhPabx' | 
'/telephony/{billingAccount}/timeCondition' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/options' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}' | 
'/telephony/{billingAccount}' | 
'/telephony/{billingAccount}/voicemail' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings/routing' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download' | 
'/telephony/{billingAccount}/voicemail/{serviceName}' | 
'/telephony/{billingAccount}/outplanNotification/{id}' | 
'/telephony/{billingAccount}/outplanNotification' | 
'/telephony/{billingAccount}/oldPhone' | 
'/telephony/{billingAccount}/ddi' | 
'/telephony/{billingAccount}/ddi/{serviceName}' | 
'/telephony/{billingAccount}/fax' | 
'/telephony/{billingAccount}/fax/{serviceName}/settings' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/fax/{serviceName}' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns' | 
'/telephony/{billingAccount}/abbreviatedNumber' | 
'/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}' | 
'/telephony/{billingAccount}/easyPabx' | 
'/telephony/{billingAccount}/number/{serviceName}' | 
'/telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers' | 
'/telephony/{billingAccount}/number' | 
'/telephony/{billingAccount}/phonebook' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/export' | 
'/telephony/{billingAccount}/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/tones' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}' | 
'/telephony/{billingAccount}/miniPabx' | 
'/telephony/{billingAccount}/easyHunting' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/sound' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/records' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}' | 
'/telephony/{billingAccount}/offerTask' | 
'/telephony/{billingAccount}/offerTask/{taskId}' | 
'/telephony/{billingAccount}/serviceInfos' | 
'/telephony/{billingAccount}/amountSecurityDeposit' | 
'/telephony/{billingAccount}/conference' | 
'/telephony/{billingAccount}/conference/{serviceName}/informations' | 
'/telephony/{billingAccount}/conference/{serviceName}/histories/{id}' | 
'/telephony/{billingAccount}/conference/{serviceName}/histories' | 
'/telephony/{billingAccount}/conference/{serviceName}' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants' | 
'/telephony/{billingAccount}/conference/{serviceName}/settings' | 
'/telephony/{billingAccount}/conference/{serviceName}/webAccess' | 
'/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}' | 
'/telephony/{billingAccount}/billingAccountSite' | 
'/telephony/{billingAccount}/service' | 
'/telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes' | 
'/telephony/{billingAccount}/service/{serviceName}/directory' | 
'/telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode' | 
'/telephony/{billingAccount}/service/{serviceName}/offerTask' | 
'/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}' | 
'/telephony/{billingAccount}/service/{serviceName}/offerChanges' | 
'/telephony/{billingAccount}/service/{serviceName}/eventToken' | 
'/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption' | 
'/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}' | 
'/telephony/{billingAccount}/service/{serviceName}/offerChange' | 
'/telephony/{billingAccount}/service/{serviceName}/task/{taskId}' | 
'/telephony/{billingAccount}/service/{serviceName}/task' | 
'/telephony/{billingAccount}/service/{serviceName}/diagnosticReports' | 
'/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption' | 
'/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}' | 
'/telephony/{billingAccount}/service/{serviceName}/faxConsumption' | 
'/telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}' | 
'/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics' | 
'/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}' | 
'/telephony/{billingAccount}/service/{serviceName}/voiceConsumption' | 
'/telephony/{billingAccount}/service/{serviceName}' | 
'/telephony/{billingAccount}/screen/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}' | 
'/telephony/{billingAccount}/screen/{serviceName}' | 
'/telephony/{billingAccount}/screen' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' | 
'/telephony/{billingAccount}/scheduler/{serviceName}' | 
'/telephony/{billingAccount}/scheduler' | 
'/telephony/accessories' | 
'/telephony/currentOrderIds' | 
'/telephony/spare/{spare}/compatibleReplacement' | 
'/telephony/spare/{spare}' | 
'/telephony/spare/{spare}/serviceInfos' | 
'/telephony/spare/brands' | 
'/telephony/spare' | 
'/telephony/trunks/{serviceName}' | 
'/telephony/trunks/{serviceName}/serviceInfos' | 
'/telephony/trunks' | 
'/telephony/sounds' | 
'/telephony/sounds/{id}' | 
'/telephony/number/zones' | 
'/telephony/number/detailedZones' | 
'/telephony/number/ranges' | 
'/telephony/number/specificNumbers' | 
'/telephony/line/offers' | 
'/telephony/line/offer/phones' | 
'/telephony/availableDefaultSipDomains';

type PathstelephonyPUT = '/telephony/aliases/{serviceName}/serviceInfos' | 
'/telephony/lines/{serviceName}/serviceInfos' | 
'/telephony/{billingAccount}/rsva/{serviceName}' | 
'/telephony/{billingAccount}/redirect/{serviceName}' | 
'/telephony/{billingAccount}/vxml/{serviceName}/settings' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/line/{serviceName}/options' | 
'/telephony/{billingAccount}/line/{serviceName}/tones' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/line/{serviceName}' | 
'/telephony/{billingAccount}/portability/{id}/document/{documentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/options' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' | 
'/telephony/{billingAccount}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings' | 
'/telephony/{billingAccount}/voicemail/{serviceName}' | 
'/telephony/{billingAccount}/ddi/{serviceName}' | 
'/telephony/{billingAccount}/fax/{serviceName}/settings' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/fax/{serviceName}' | 
'/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}' | 
'/telephony/{billingAccount}/number/{serviceName}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/tones' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}' | 
'/telephony/{billingAccount}/offerTask/{taskId}' | 
'/telephony/{billingAccount}/serviceInfos' | 
'/telephony/{billingAccount}/conference/{serviceName}/settings' | 
'/telephony/{billingAccount}/service/{serviceName}/directory' | 
'/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}' | 
'/telephony/{billingAccount}/service/{serviceName}' | 
'/telephony/{billingAccount}/screen/{serviceName}' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' | 
'/telephony/{billingAccount}/scheduler/{serviceName}' | 
'/telephony/spare/{spare}/serviceInfos' | 
'/telephony/trunks/{serviceName}/serviceInfos' | 
'/telephony/sounds/{id}';

type PathstelephonyPOST = '/telephony/aliases/{serviceName}/changeContact' | 
'/telephony/lines/{serviceName}/changeContact' | 
'/telephony/setDefaultSipDomain' | 
'/telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode' | 
'/telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode' | 
'/telephony/{billingAccount}/historyRepaymentConsumption' | 
'/telephony/{billingAccount}/changeContact' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate' | 
'/telephony/{billingAccount}/redirect/{serviceName}/changeDestination' | 
'/telephony/{billingAccount}/eventToken' | 
'/telephony/{billingAccount}/cancelTermination' | 
'/telephony/{billingAccount}/vxml/{serviceName}/settings/logs' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/resetConfig' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/reboot' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook' | 
'/telephony/{billingAccount}/line/{serviceName}/trafficExtracts' | 
'/telephony/{billingAccount}/line/{serviceName}/automaticCall' | 
'/telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser' | 
'/telephony/{billingAccount}/line/{serviceName}/tones/toneUpload' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber' | 
'/telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines' | 
'/telephony/{billingAccount}/line/{serviceName}/associateDevice' | 
'/telephony/{billingAccount}/line/{serviceName}/antihack' | 
'/telephony/{billingAccount}/line/{serviceName}/click2Call' | 
'/telephony/{billingAccount}/line/{serviceName}/activateNewPhone' | 
'/telephony/{billingAccount}/line/{serviceName}/changePassword' | 
'/telephony/{billingAccount}/line/{serviceName}/block' | 
'/telephony/{billingAccount}/line/{serviceName}/unblock' | 
'/telephony/{billingAccount}/line/{serviceName}/dissociateDevice' | 
'/telephony/{billingAccount}/line/{serviceName}/convertToNumber' | 
'/telephony/{billingAccount}/portability/{id}/cancel' | 
'/telephony/{billingAccount}/portability/{id}/changeDate' | 
'/telephony/{billingAccount}/portability/{id}/document' | 
'/telephony/{billingAccount}/portability/{id}/relaunch' | 
'/telephony/{billingAccount}/portability/{id}/execute' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion' | 
'/telephony/{billingAccount}/outplanNotification' | 
'/telephony/{billingAccount}/ddi/{serviceName}/changeDestination' | 
'/telephony/{billingAccount}/fax/{serviceName}/settings/sendFax' | 
'/telephony/{billingAccount}/fax/{serviceName}/settings/changePassword' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists/reset' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns' | 
'/telephony/{billingAccount}/transferSecurityDeposit' | 
'/telephony/{billingAccount}/abbreviatedNumber' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/number/{serviceName}/changeFeatureType' | 
'/telephony/{billingAccount}/number/{serviceName}/convertToLine' | 
'/telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine' | 
'/telephony/{billingAccount}/phonebook' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/import' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions' | 
'/telephony/{billingAccount}/canTransferSecurityDeposit' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy' | 
'/telephony/{billingAccount}/conference/{serviceName}/announceUpload' | 
'/telephony/{billingAccount}/conference/{serviceName}/unlock' | 
'/telephony/{billingAccount}/conference/{serviceName}/lock' | 
'/telephony/{billingAccount}/conference/{serviceName}/webAccess' | 
'/telephony/{billingAccount}/billingAccountSite' | 
'/telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations' | 
'/telephony/{billingAccount}/service/{serviceName}/cancelTermination' | 
'/telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount' | 
'/telephony/{billingAccount}/service/{serviceName}/eventToken' | 
'/telephony/{billingAccount}/service/{serviceName}/offerChange' | 
'/telephony/{billingAccount}/screen/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events' | 
'/telephony/spare/{spare}/replace' | 
'/telephony/trunks/{serviceName}/changeContact' | 
'/telephony/sounds';

type PathstelephonyDELETE = '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}' | 
'/telephony/{billingAccount}/eventToken' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/line/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/portability/{id}/document/{documentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' | 
'/telephony/{billingAccount}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}' | 
'/telephony/{billingAccount}/outplanNotification/{id}' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}' | 
'/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}' | 
'/telephony/{billingAccount}/service/{serviceName}/eventToken' | 
'/telephony/{billingAccount}/service/{serviceName}/offerChange' | 
'/telephony/{billingAccount}/service/{serviceName}' | 
'/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' | 
'/telephony/spare/{spare}' | 
'/telephony/sounds/{id}';

class Apitelephony extends ApiCommon {
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony/aliases', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/aliases/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Telephony service
  Get this object properties
  **/
  public get(path: '/telephony/aliases/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<TelephonyTelephonyGenericService>;
  /**
  Telephony service
  Get this object properties
  **/
  public get(path: '/telephony/lines/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<TelephonyTelephonyGenericService>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/lines/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony/lines', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Search a service with its domain, to get its billing account and type
  Search a service with its domain, to get its billing account and type
  **/
  public get(path: '/telephony/searchServices', pathParams: null, queryParams: {axiom?: string}): Promise<TelephonyTelephonySearchService[]>;
  /**
  Get city informations from a zip code
  Get city informations from a zip code
  **/
  public get(path: '/telephony/directories/cities', pathParams: null, queryParams: {country?: TelephonyNumberCountryEnum, zipCode?: string}): Promise<TelephonyCity[]>;
  /**
  Get all zip codes compatible for a number
  Get all zip codes compatible for a number
  **/
  public get(path: '/telephony/directories/availableZipCodes', pathParams: null, queryParams: {number?: string, country?: TelephonyNumberCountryEnum}): Promise<string[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Get all available fax offer compatible
  Get all available fax offer compatible
  **/
  public get(path: '/telephony/fax/offers', pathParams: null, queryParams: {country?: TelephonyNumberCountryEnum}): Promise<TelephonyLineOffer[]>;
  /**
  Previous billed consumptions
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/historyConsumption/{date}', pathParams: {billingAccount?: string, date?: Date}, queryParams: null): Promise<TelephonyHistoryConsumption>;
  /**
  file operations
  Previous billed consumption files
  **/
  public get(path: '/telephony/{billingAccount}/historyConsumption/{date}/file', pathParams: {billingAccount?: string, date?: Date}, queryParams: {extension?: TelephonyBillDocument}): Promise<TelephonyPcsFile>;
  /**
  List the telephony.HistoryConsumption objects
  Previous billed consumptions
  **/
  public get(path: '/telephony/{billingAccount}/historyConsumption', pathParams: {billingAccount?: string}, queryParams: null): Promise<Date[]>;
  /**
  List the telephony.Rsva objects
  Service concerned by the french RSVA reform
  **/
  public get(path: '/telephony/{billingAccount}/rsva', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  allowedRateCodes operations
  Compatible rate codes related to this value added service
  **/
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyRateCodeInformation[]>;
  /**
  currentRateCode operations
  Current rate code related to this sva
  **/
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/currentRateCode', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyDetailedRateCodeInformation>;
  /**
  French value added services subject to the RSVA reform (Référentiel des numéros SVA)
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyRsva>;
  /**
  scheduledRateCode operations
  New scheduled rate code related to this sva
  **/
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyDetailedRateCodeInformation>;
  /**
  List the telephony.HistoryRepaymentConsumption objects
  Previous repayment bill
  **/
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption', pathParams: {billingAccount?: string}, queryParams: null): Promise<Date[]>;
  /**
  Previous repayment bill
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption/{date}', pathParams: {billingAccount?: string, date?: Date}, queryParams: null): Promise<TelephonyHistoryRepaymentConsumption>;
  /**
  document operations
  Get the csv document
  **/
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption/{date}/document', pathParams: {billingAccount?: string, date?: Date}, queryParams: null): Promise<TelephonyPcsFile>;
  /**
  Operation on a telephony service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/task/{taskId}', pathParams: {billingAccount?: string, taskId?: Number}, queryParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.Task objects
  Operations on a telephony billing account
  **/
  public get(path: '/telephony/{billingAccount}/task', pathParams: {billingAccount?: string}, queryParams: {action?: string, serviceType?: string, status?: TelephonyTaskStatusEnum}): Promise<Number[]>;
  /**
  List the telephony.Trunk objects
  Trunk associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/trunk', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  channelsPacksRepartition operations
  Determine the best channels packs combination for a given channel quantity
  **/
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {quantity?: Number}): Promise<TelephonyTrunkSimultaneousPacksRepartition>;
  /**
  List the telephony.TrunkExternalDisplayedNumber objects
  External displayed number linked to this trunk
  **/
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  External displayed number linked to a trunk
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}', pathParams: {billingAccount?: string, serviceName?: string, number?: string}, queryParams: null): Promise<TelephonyTrunkExternalDisplayedNumber>;
  /**
  Trunk service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyTrunk>;
  /**
  allowedCreditThreshold operations
  Get the allowed creditThreshold for this billing account
  **/
  public get(path: '/telephony/{billingAccount}/allowedCreditThreshold', pathParams: {billingAccount?: string}, queryParams: null): Promise<OrderPrice[]>;
  /**
  Redirect service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/redirect/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyRedirect>;
  /**
  List the telephony.Redirect objects
  Redirects associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/redirect', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/eventToken', pathParams: {billingAccount?: string}, queryParams: null): Promise<TelephonyEventToken>;
  /**
  Vxml Properties
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyVxmlProperties>;
  /**
  Vxml services
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/vxml/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyVxml>;
  /**
  List the telephony.Vxml objects
  Vxml numbers associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/vxml', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  Plug & Phone function key
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}', pathParams: {billingAccount?: string, serviceName?: string, keyNum?: Number}, queryParams: null): Promise<TelephonyFunctionKey>;
  /**
  availableFunction operations
  List the available functions for the key
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction', pathParams: {billingAccount?: string, serviceName?: string, keyNum?: Number}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.FunctionKey objects
  Plug & Phone function keys
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  supportsPhonebook operations
  Does the phone manages phonebooks?
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  List the telephony.Rma objects
  Return Merchandise Authorisation associated
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Current Return Merchandise Authorisation
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: string}, queryParams: null): Promise<TelephonyRma>;
  /**
  adminCredentials operations
  Returns the administration user and password of the phone if you are a VIP
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyPhoneCredentials>;
  /**
  Plug & Phone
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyPhone>;
  /**
  merchandiseAvailable operations
  List of available exchange merchandise brand
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyHardwareOffer[]>;
  /**
  List the telephony.PhonebookContact objects
  Phonebook contacts
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string}, queryParams: null): Promise<Number[]>;
  /**
  Phone book contact
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string, id?: Number}, queryParams: null): Promise<TelephonyPhonebookContact>;
  /**
  Phone book
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string}, queryParams: null): Promise<TelephonyPhonebook>;
  /**
  export operations
  Export the phonebook's contacts
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string}, queryParams: {format?: TelephonyContactsExportFormatsEnum}): Promise<TelephonyPcsFile>;
  /**
  List the telephony.Phonebook objects
  Return phonebooks associated
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.trafficExtract objects
  The traffic extracts (SIP only) of your line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Traffic extracts (SIP) of your line
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyTrafficExtract>;
  /**
  defaultCodecs operations
  Get the default codecs for this line if none are set
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string>;
  /**
  Line options
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyLineOptions>;
  /**
  availableCodecs operations
  List of codecs combinaisons available for this line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options/availableCodecs', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.CallsGenerated objects
  Automatic Calls made by Calls Generator on this line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Automatic Call made by Call Generator on this line
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}', pathParams: {billingAccount?: string, serviceName?: string, identifier?: string}, queryParams: null): Promise<TelephonyCallsGenerated>;
  /**
  User of the click 2 call
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyClick2CallUser>;
  /**
  List the telephony.Click2CallUser objects
  User which can use click 2 call on the line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Line tones
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/tones', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyTones>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  The current calls of your line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/calls', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Abbreviated number
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount?: string, serviceName?: string, abbreviatedNumber?: Number}, queryParams: null): Promise<TelephonyAbbreviatedNumber>;
  /**
  List the telephony.AbbreviatedNumber objects
  Abbreviated numbers for the line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  antihack operations
  Current list of numbers or short code numbers restricted by an auto antihack
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/antihack', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  ips operations
  Listing of last ips registry
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/ips', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyDatetimeAndIpvalue[]>;
  /**
  The PABX records
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/records/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxRecord>;
  /**
  List the telephony.OvhPabxRecord objects
  The recordings of your line outgoing calls
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/records', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Line service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyLine>;
  /**
  canChangePassword operations
  Ability to manage SIP password on this service
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/canChangePassword', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  phoneCanBeAssociable operations
  List the phones with Sip slot available
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyLinePhone[]>;
  /**
  activateNewPhone operations
  Check if there is a new phone to activate and if it's possible, in case of phone switch
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<void>;
  /**
  offer operations
  Return public offer property
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/offer', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyLineOffer>;
  /**
  listAssociablePhones operations
  List phones with available slots where this line can be attached
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/listAssociablePhones', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyLinePhoneAssociable[]>;
  /**
  maximumAvailableSimultaneousLines operations
  Get the maximum available simultaneous lines for this line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number>;
  /**
  availableSipDomains operations
  Listing of domains Sip availables
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/availableSipDomains', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  statistics operations
  Get statistics of the current line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/statistics', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {type?: TelephonyLineStatisticsTypeEnum, timeframe?: TelephonyStatisticsTimeframeEnum}): Promise<ComplexTypeUnitAndValues<TelephonyTimestampAndValue>>;
  /**
  lastRegistrations operations
  List the informations about the last registrations (i.e. IP, port, User-Agent...)
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/lastRegistrations', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyRegistrationInformations[]>;
  /**
  simultaneousChannelsDetails operations
  Details about simultaneous channels of this line.
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonySimultaneousChannelsDetails>;
  /**
  List the telephony.Line objects
  Lines associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/line', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.HistoryTollfreeConsumption objects
  Previous tollfree bill
  **/
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption', pathParams: {billingAccount?: string}, queryParams: null): Promise<Date[]>;
  /**
  Previous tollfree bill
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption/{date}', pathParams: {billingAccount?: string, date?: Date}, queryParams: null): Promise<TelephonyHistoryTollfreeConsumption>;
  /**
  document operations
  Get the csv document
  **/
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption/{date}/document', pathParams: {billingAccount?: string, date?: Date}, queryParams: null): Promise<TelephonyPcsFile>;
  /**
  List the telephony.Portability objects
  Current number portabilities for this billing account
  **/
  public get(path: '/telephony/{billingAccount}/portability', pathParams: {billingAccount?: string}, queryParams: null): Promise<Number[]>;
  /**
  status operations
  Indicates the current status of the portability, with a list of steps
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/status', pathParams: {billingAccount?: string, id?: Number}, queryParams: null): Promise<TelephonyPortabilityStep[]>;
  /**
  canBeCancelled operations
  Indicates whether or not the portability can be cancelled
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/canBeCancelled', pathParams: {billingAccount?: string, id?: Number}, queryParams: null): Promise<boolean>;
  /**
  dateCanBeChanged operations
  Indicates whether or not the portability date can be changed
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/dateCanBeChanged', pathParams: {billingAccount?: string, id?: Number}, queryParams: null): Promise<boolean>;
  /**
  canBeExecuted operations
  Indicates whether or not the portability can be executed
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/canBeExecuted', pathParams: {billingAccount?: string, id?: Number}, queryParams: null): Promise<boolean>;
  /**
  Portability informations
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}', pathParams: {billingAccount?: string, id?: Number}, queryParams: null): Promise<TelephonyPortability>;
  /**
  Document linked to a portability
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', pathParams: {billingAccount?: string, id?: Number, documentId?: Number}, queryParams: null): Promise<TelephonyPortabilityDocument>;
  /**
  List the telephony.PortabilityDocument objects
  Document linked to this portability
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/document', pathParams: {billingAccount?: string, id?: Number}, queryParams: null): Promise<Number[]>;
  /**
  relaunch operations
  Indicates whether or not error can be fixed and portability can be relaunched
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/relaunch', pathParams: {billingAccount?: string, id?: Number}, queryParams: null): Promise<TelephonyPortabilityFixErrorPossibleParameters>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Agent assigned to the queue
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, agentId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  Agent assigned to a queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, agentId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  Live calls of the queue
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueueLiveStatistics>;
  /**
  Calls queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueue>;
  /**
  List the telephony.OvhPabxHuntingQueue objects
  Calls queues
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  PABX Hunting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyOvhPabxHunting>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyEventToken>;
  /**
  Custom statuses of your callcenter agents
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxCustomStatus>;
  /**
  List the telephony.OvhPabxCustomStatus objects
  Custom statuses of your agents
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Agent assigned to the queues
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, queueId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  Agent assigned to a queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, queueId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<TelephonyEventToken>;
  /**
  Calls agent
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgent>;
  /**
  The web access for your cloudpabx
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<TelephonyBannerAccess>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  Current calls of the callcenter agent
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  List the telephony.OvhPabxHuntingAgent objects
  Calls agents
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the telephony.OvhPabxDialplanExtensionConditionScreenList objects
  Screenlist conditions checked when executing the extension
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Screenlist condition
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number, conditionId?: Number}, queryParams: null): Promise<TelephonyOvhPabxDialplanExtensionConditionScreenList>;
  /**
  Time condition
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number, conditionId?: Number}, queryParams: null): Promise<TelephonyOvhPabxDialplanExtensionConditionTime>;
  /**
  List the telephony.OvhPabxDialplanExtensionConditionTime objects
  Time conditions checked when executing the extension
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Dialplan extension
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null): Promise<TelephonyOvhPabxDialplanExtension>;
  /**
  Dialplan rule
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number, ruleId?: Number}, queryParams: null): Promise<TelephonyOvhPabxDialplanExtensionRule>;
  /**
  List the telephony.OvhPabxDialplanExtensionRule objects
  Rules contained in the extension
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  List the telephony.OvhPabxDialplanExtension objects
  Extensions contained in the dialplan
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Dialplan
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number}, queryParams: null): Promise<TelephonyOvhPabxDialplan>;
  /**
  List the telephony.OvhPabxDialplan objects
  Dialplans associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the telephony.OvhPabxMenu objects
  Menus associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  IVR menu entry
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', pathParams: {billingAccount?: string, serviceName?: string, menuId?: Number, entryId?: Number}, queryParams: null): Promise<TelephonyOvhPabxMenuEntry>;
  /**
  List the telephony.OvhPabxMenuEntry objects
  Menu entry
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry', pathParams: {billingAccount?: string, serviceName?: string, menuId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  IVR Menu
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', pathParams: {billingAccount?: string, serviceName?: string, menuId?: Number}, queryParams: null): Promise<TelephonyOvhPabxMenu>;
  /**
  The PABX sounds
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}', pathParams: {billingAccount?: string, serviceName?: string, soundId?: Number}, queryParams: null): Promise<TelephonyOvhPabxSound>;
  /**
  List the telephony.OvhPabxSound objects
  Sounds associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the telephony.OvhPabxRecord objects
  Records associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  The PABX records
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxRecord>;
  /**
  The PABX Text To Speech sounds
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxTts>;
  /**
  List the telephony.OvhPabxTts objects
  Text to Speech associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  OVH calls queues and OVH IVRs (Interactive Voice Response)
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyOvhPabx>;
  /**
  List the telephony.OvhPabx objects
  OVH calls queues and OVH IVRs (Interactive Voice Response) associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.GenericScreen objects
  Time conditions compatible numbers associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  Time conditions options
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/options', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyTimeConditionOptions>;
  /**
  List the telephony.TimeCondition objects
  Rules for time conditions for this service
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Time conditions
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyTimeCondition>;
  /**
  Time conditions capable services
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyGenericScreen>;
  /**
  Billing Account
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}', pathParams: {billingAccount?: string}, queryParams: null): Promise<TelephonyBillingAccount>;
  /**
  List the telephony.Voicemail objects
  Voicemails associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/voicemail', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.VoicemailGreetings objects
  Voicemail greeting message properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {dir?: TelephonyVoicemailMessageFolderGreetingEnum}): Promise<Number[]>;
  /**
  download operations
  Get a url to download the sound file
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: {format?: TelephonyServiceVoicemailAudioFormatEnum}): Promise<TelephonyPcsFile>;
  /**
  Voicemail greeting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyVoicemailGreetings>;
  /**
  voicemailNumbers operations
  Get number for internal and external voicemail
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyVoicemailNumbers>;
  /**
  routing operations
  Get the status of the voicemail. Available only if the line has fax capabilities
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/routing', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyVoicefaxRoutingEnum>;
  /**
  Voicemail Properties
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyVoicemailProperties>;
  /**
  List the telephony.VoicemailMessages objects
  Voicemail directory messages
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {dir?: TelephonyVoicemailMessageFolderDirectoryEnum}): Promise<Number[]>;
  /**
  Voicemail message
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyVoicemailMessages>;
  /**
  download operations
  Get a url to download the sound file
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: {format?: TelephonyServiceVoicemailAudioFormatEnum}): Promise<TelephonyPcsFile>;
  /**
  Voicemail service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyVoicemail>;
  /**
  The outplan notifications configured for your billing account
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/outplanNotification/{id}', pathParams: {billingAccount?: string, id?: Number}, queryParams: null): Promise<TelephonyConsumptionThreshold>;
  /**
  List the telephony.ConsumptionThreshold objects
  Outplan notifications configured for this billing account
  **/
  public get(path: '/telephony/{billingAccount}/outplanNotification', pathParams: {billingAccount?: string}, queryParams: null): Promise<Number[]>;
  /**
  oldPhone operations
  List old phones archived as they were not returned after an RMA
  **/
  public get(path: '/telephony/{billingAccount}/oldPhone', pathParams: {billingAccount?: string}, queryParams: null): Promise<TelephonyPhone[]>;
  /**
  List the telephony.Ddi objects
  DDIs (direct dial-in) associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/ddi', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  DDI (direct dial-in) service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ddi/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyDdi>;
  /**
  List the telephony.Fax objects
  Faxes associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/fax', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  Fax properties
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/settings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyFaxProperties>;
  /**
  Fax ScreenLists
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyFaxScreen>;
  /**
  Fax service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyFax>;
  /**
  Fax campaigns
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyFaxCampaign>;
  /**
  detail operations
  Detail of the fax recipients by status
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyFaxCampaignDetail>;
  /**
  List the telephony.FaxCampaign objects
  Fax campaigns of the associate fax
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the telephony.AbbreviatedNumberGroup objects
  Abbreviated numbers for the billing account
  **/
  public get(path: '/telephony/{billingAccount}/abbreviatedNumber', pathParams: {billingAccount?: string}, queryParams: null): Promise<Number[]>;
  /**
  Abbreviated number
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount?: string, abbreviatedNumber?: Number}, queryParams: null): Promise<TelephonyAbbreviatedNumberGroup>;
  /**
  EasyPabx Hunting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyEasyPabxHunting>;
  /**
  Line tones
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyTones>;
  /**
  Easy/Mini PABX agent
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount?: string, serviceName?: string, agentNumber?: string}, queryParams: null): Promise<TelephonyEasyMiniPabxHuntingAgent>;
  /**
  List the telephony.EasyMiniPabxHuntingAgent objects
  Hunting agents
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  EasyPabx
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyEasyPabx>;
  /**
  List the telephony.EasyPabx objects
  EasyPabx associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  Additional number
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/number/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyNumber>;
  /**
  convertToLineAvailableOffers operations
  Get the available line offers to schedule a conversion to line
  **/
  public get(path: '/telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyLineOffersAndContracts>;
  /**
  List the telephony.Number objects
  Additional numbers associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/number', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.PhonebookMaster objects
  Return phonebooks associated to this group
  **/
  public get(path: '/telephony/{billingAccount}/phonebook', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  Phone book contact
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount?: string, bookKey?: string, id?: Number}, queryParams: null): Promise<TelephonyPhonebookContact>;
  /**
  List the telephony.PhonebookContact objects
  Phonebook contacts
  **/
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact', pathParams: {billingAccount?: string, bookKey?: string}, queryParams: null): Promise<Number[]>;
  /**
  export operations
  Export the phonebook's contacts
  **/
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/export', pathParams: {billingAccount?: string, bookKey?: string}, queryParams: {format?: TelephonyContactsExportFormatsEnum}): Promise<TelephonyPcsFile>;
  /**
  Phone book on group
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}', pathParams: {billingAccount?: string, bookKey?: string}, queryParams: null): Promise<TelephonyPhonebookMaster>;
  /**
  Easy/Mini PABX agent
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount?: string, serviceName?: string, agentNumber?: string}, queryParams: null): Promise<TelephonyEasyMiniPabxHuntingAgent>;
  /**
  List the telephony.EasyMiniPabxHuntingAgent objects
  Hunting agents
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  MiniPabx Hunting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyMiniPabxHunting>;
  /**
  Line tones
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyTones>;
  /**
  MiniPabx
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyMiniPabx>;
  /**
  List the telephony.MiniPabx objects
  Miniabx associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.EasyHunting objects
  OVH easy calls queues associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.OvhPabxCustomStatus objects
  Custom statuses of your agents
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Custom statuses of your callcenter agents
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxCustomStatus>;
  /**
  List the telephony.OvhPabxHuntingAgent objects
  Calls agents
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  Current calls of the callcenter agent
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, queueId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  Agent assigned to a queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, queueId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Agent assigned to the queues
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<TelephonyEventToken>;
  /**
  Calls agent
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgent>;
  /**
  The web access for your cloudpabx
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null): Promise<TelephonyBannerAccess>;
  /**
  Calls queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueue>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueueLiveStatistics>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  Live calls of the queue
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Agent assigned to the queue
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Agent assigned to a queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, agentId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, agentId?: Number}, queryParams: null): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  List the telephony.OvhPabxHuntingQueue objects
  Calls queues
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyEventToken>;
  /**
  PABX Hunting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyOvhPabxHunting>;
  /**
  List the telephony.OvhPabxSound objects
  Sounds associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  The PABX sounds
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}', pathParams: {billingAccount?: string, serviceName?: string, soundId?: Number}, queryParams: null): Promise<TelephonyOvhPabxSound>;
  /**
  List the telephony.OvhPabxRecord objects
  Records associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  The PABX records
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyOvhPabxRecord>;
  /**
  Easy hunting time conditions options
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyEasyHuntingTimeConditionsSettings>;
  /**
  Easy hunting time conditions
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, conditionId?: Number}, queryParams: null): Promise<TelephonyEasyHuntingTimeConditions>;
  /**
  List the telephony.EasyHuntingTimeConditions objects
  Time conditions checked when a call is received
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {policy?: TelephonyTimeConditionsPolicyEnum}): Promise<Number[]>;
  /**
  List the telephony.EasyHuntingScreenListsConditions objects
  Screen lists conditions checked when a call is received
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<Number[]>;
  /**
  Screenlist condition
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, conditionId?: Number}, queryParams: null): Promise<TelephonyEasyHuntingScreenListsConditions>;
  /**
  Easy hunting screen lists conditions options
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyEasyHuntingScreenListsConditionsSettings>;
  /**
  OVH easy calls queues
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyEasyHunting>;
  /**
  List the telephony.OfferTask objects
  Operations on a telephony service's offer
  **/
  public get(path: '/telephony/{billingAccount}/offerTask', pathParams: {billingAccount?: string}, queryParams: {action?: TelephonyOfferTaskActionEnum, type?: TelephonyOfferTaskTypeEnum, status?: TelephonyTaskStatusEnum}): Promise<Number[]>;
  /**
  Operation on a telephony offer
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/offerTask/{taskId}', pathParams: {billingAccount?: string, taskId?: Number}, queryParams: null): Promise<TelephonyOfferTask>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/serviceInfos', pathParams: {billingAccount?: string}, queryParams: null): Promise<ServicesService>;
  /**
  amountSecurityDeposit operations
  Give all amounts availables for your billing account
  **/
  public get(path: '/telephony/{billingAccount}/amountSecurityDeposit', pathParams: {billingAccount?: string}, queryParams: null): Promise<OrderPrice[]>;
  /**
  List the telephony.Conference objects
  Conferences associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/conference', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  informations operations
  Get realtime conference informations
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/informations', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyConferenceInformations>;
  /**
  List past conferences on your number
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/histories/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyConferenceHistory>;
  /**
  List the telephony.ConferenceHistory objects
  List your past conferences for this number
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/histories', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Conference
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyConference>;
  /**
  Conference service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyConferenceParticipants>;
  /**
  List the telephony.ConferenceParticipants objects
  Current participants of the associate conference
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/participants', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Conference properties
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/settings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyConferenceProperties>;
  /**
  List the telephony.ConferenceWebAccess objects
  List your conference web access
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List public web access of your conference
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyConferenceWebAccess>;
  /**
  billingAccountSite operations
  Current billing account site (billing account features are overwritten by the site)
  **/
  public get(path: '/telephony/{billingAccount}/billingAccountSite', pathParams: {billingAccount?: string}, queryParams: null): Promise<string>;
  /**
  List the telephony.TelephonyService objects
  Services associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/service', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  getWayTypes operations
  Get all the way types availables
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyDirectoryWayType[]>;
  /**
  Directory Informations
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyDirectoryInfo>;
  /**
  getDirectoryServiceCode operations
  Get directory service code from an APE code ( principal activity of the firm code )
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {apeCode?: string}): Promise<TelephonyDirectoryHeadingPJ[]>;
  /**
  List the telephony.OfferTask objects
  Operations on a telephony service's offer
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {type?: TelephonyOfferTaskTypeEnum, action?: TelephonyOfferTaskActionEnum, status?: TelephonyTaskStatusEnum}): Promise<Number[]>;
  /**
  Operation on a telephony offer
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}', pathParams: {billingAccount?: string, serviceName?: string, taskId?: Number}, queryParams: null): Promise<TelephonyOfferTask>;
  /**
  offerChanges operations
  List all available offer changes compatibilities
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerChanges', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyLineOffer[]>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyEventToken>;
  /**
  List the telephony.RepaymentConsumption objects
  Call which could be repayable
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {'creationDatetime.from'?: Date, 'creationDatetime.to'?: Date}): Promise<Number[]>;
  /**
  Call which are repayable
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}', pathParams: {billingAccount?: string, serviceName?: string, consumptionId?: Number}, queryParams: null): Promise<TelephonyRepaymentConsumption>;
  /**
  Offer change
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyOfferChange>;
  /**
  Operation on a telephony service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/task/{taskId}', pathParams: {billingAccount?: string, serviceName?: string, taskId?: Number}, queryParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.Task objects
  Operations on a telephony service
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/task', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {action?: string, serviceType?: string, status?: TelephonyTaskStatusEnum}): Promise<Number[]>;
  /**
  diagnosticReports operations
  Get Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/diagnosticReports', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {dayInterval?: TelephonyDiagnosticReportIndexEnum}): Promise<TelephonyDiagnosticReport[]>;
  /**
  List the telephony.PreviousVoiceConsumption objects
  Call delivery records of the previous month.
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum, 'creationDatetime.from'?: Date, 'creationDatetime.to'?: Date, planType?: TelephonyVoiceConsumptionPlanTypeEnum, wayType?: TelephonyVoiceConsumptionWayTypeEnum}): Promise<Number[]>;
  /**
  Call delivery record of the previous month
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}', pathParams: {billingAccount?: string, serviceName?: string, consumptionId?: Number}, queryParams: null): Promise<TelephonyPreviousVoiceConsumption>;
  /**
  List the telephony.FaxConsumption objects
  Fax delivery records.
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/faxConsumption', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {'creationDatetime.from'?: Date, 'creationDatetime.to'?: Date, wayType?: TelephonyFaxConsumptionWayTypeEnum}): Promise<Number[]>;
  /**
  Fax delivery record
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}', pathParams: {billingAccount?: string, serviceName?: string, consumptionId?: Number}, queryParams: null): Promise<TelephonyFaxConsumption>;
  /**
  Advanced diagnostic of the voice call
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics', pathParams: {billingAccount?: string, serviceName?: string, consumptionId?: Number}, queryParams: null): Promise<TelephonyCallDiagnostics>;
  /**
  Call delivery record
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}', pathParams: {billingAccount?: string, serviceName?: string, consumptionId?: Number}, queryParams: null): Promise<TelephonyVoiceConsumption>;
  /**
  List the telephony.VoiceConsumption objects
  Call delivery records.
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {'creationDatetime.to'?: Date, wayType?: TelephonyVoiceConsumptionWayTypeEnum, planType?: TelephonyVoiceConsumptionPlanTypeEnum, destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum, 'creationDatetime.from'?: Date}): Promise<Number[]>;
  /**
  Telephony service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyTelephonyService>;
  /**
  List the telephony.ScreenList objects
  Rules for call filtering for this service
  **/
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Screen list
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null): Promise<TelephonyScreenList>;
  /**
  ScreenList capable services
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyScreen>;
  /**
  List the telephony.Screen objects
  Screenlist compatible numbers associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/screen', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  List the telephony.SchedulerEvent objects
  Custom events scheduled
  **/
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {categories?: TelephonySchedulerCategoryEnum, 'dateStart.to'?: Date, 'dateEnd.from'?: Date, 'dateStart.from'?: Date, 'dateEnd.to'?: Date}): Promise<string[]>;
  /**
  Scheduled event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', pathParams: {billingAccount?: string, serviceName?: string, uid?: string}, queryParams: null): Promise<TelephonySchedulerEvent>;
  /**
  Scheduler capable services
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null): Promise<TelephonyScheduler>;
  /**
  List the telephony.Scheduler objects
  Scheduled events
  **/
  public get(path: '/telephony/{billingAccount}/scheduler', pathParams: {billingAccount?: string}, queryParams: null): Promise<string[]>;
  /**
  Get all available accessories
  Get all available accessories
  **/
  public get(path: '/telephony/accessories', pathParams: null, queryParams: {country?: TelephonyNumberCountryEnum}): Promise<TelephonyAccessoryOffer[]>;
  /**
  Get current order ids
  Get current order ids
  **/
  public get(path: '/telephony/currentOrderIds', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  compatibleReplacement operations
  Return the list of phone domains compatible to be replaced
  **/
  public get(path: '/telephony/spare/{spare}/compatibleReplacement', pathParams: {spare?: string}, queryParams: null): Promise<string[]>;
  /**
  Spare properties
  Get this object properties
  **/
  public get(path: '/telephony/spare/{spare}', pathParams: {spare?: string}, queryParams: null): Promise<SpareTelephonyTelephonySpare>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/spare/{spare}/serviceInfos', pathParams: {spare?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Get all available spare brands
  Get all available spare brands
  **/
  public get(path: '/telephony/spare/brands', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony/spare', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Telephony service
  Get this object properties
  **/
  public get(path: '/telephony/trunks/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<TelephonyTelephonyGenericService>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/trunks/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony/trunks', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the telephony.Sound objects
  Sounds attached to this telephony account
  **/
  public get(path: '/telephony/sounds', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Sounds attached to this telephony account
  Get this object properties
  **/
  public get(path: '/telephony/sounds/{id}', pathParams: {id?: Number}, queryParams: null): Promise<TelephonySound>;
  /**
  Get all available geographic zone from a country
  Get all available geographic zone from a country
  **/
  public get(path: '/telephony/number/zones', pathParams: null, queryParams: {axiom?: string, country?: TelephonyNumberCountryEnum}): Promise<string[]>;
  /**
  Get all available geographic zone with some details, from a country
  Get all available geographic zone with some details, from a country
  **/
  public get(path: '/telephony/number/detailedZones', pathParams: null, queryParams: {country?: TelephonyNumberCountryEnum, axiom?: string}): Promise<TelephonyNumberDetailedZone[]>;
  /**
  Get all available special range from a country
  Get all available special range from a country
  **/
  public get(path: '/telephony/number/ranges', pathParams: null, queryParams: {country?: TelephonyNumberCountryEnum}): Promise<string[]>;
  /**
  Get all available specific number from a country
  Get all available specific number from a country
  **/
  public get(path: '/telephony/number/specificNumbers', pathParams: null, queryParams: {country?: TelephonyNumberCountryEnum, range?: string, type?: TelephonyNumberTypeEnum, zone?: string}): Promise<TelephonySpecificNumber[]>;
  /**
  Get all available line offer compatible
  Get all available line offer compatible
  **/
  public get(path: '/telephony/line/offers', pathParams: null, queryParams: {country?: TelephonyNumberCountryEnum}): Promise<TelephonyLineOffer[]>;
  /**
  Get all available phone brands compatible with lines
  Get all available phone brands compatible with lines
  **/
  public get(path: '/telephony/line/offer/phones', pathParams: null, queryParams: {offer?: string, country?: TelephonyNumberCountryEnum}): Promise<TelephonyLinePhone[]>;
  /**
  Get all available SIP domains by country
  Get all available SIP domains by country
  **/
  public get(path: '/telephony/availableDefaultSipDomains', pathParams: null, queryParams: {type?: TelephonySipDomainProductTypeEnum}): Promise<TelephonyDefaultSipDomains[]>;
  public get(path: PathstelephonyGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/aliases/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/lines/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  French value added services subject to the RSVA reform (Référentiel des numéros SVA)
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/rsva/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Redirect service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/redirect/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Vxml Properties
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Plug & Phone function key
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}', pathParams: {billingAccount?: string, serviceName?: string, keyNum?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Current Return Merchandise Authorisation
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Plug & Phone
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book contact
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Line options
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/options', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Line tones
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/tones', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Abbreviated number
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount?: string, serviceName?: string, abbreviatedNumber?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Line service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Document linked to a portability
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', pathParams: {billingAccount?: string, id?: Number, documentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Agent assigned to a queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Calls queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  PABX Hunting
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Agent assigned to a queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, queueId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Calls agent
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Time condition
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number, conditionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Dialplan extension
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Dialplan rule
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number, ruleId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Dialplan
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  IVR menu entry
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', pathParams: {billingAccount?: string, serviceName?: string, menuId?: Number, entryId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  IVR Menu
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', pathParams: {billingAccount?: string, serviceName?: string, menuId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The PABX Text To Speech sounds
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  OVH calls queues and OVH IVRs (Interactive Voice Response)
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Time conditions options
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/options', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Time conditions
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Billing Account
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Voicemail Properties
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Voicemail service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/voicemail/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  DDI (direct dial-in) service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ddi/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Fax properties
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}/settings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Fax ScreenLists
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Fax service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Abbreviated number
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount?: string, abbreviatedNumber?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  EasyPabx Hunting
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Line tones
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Easy/Mini PABX agent
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount?: string, serviceName?: string, agentNumber?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  EasyPabx
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Additional number
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/number/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book contact
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount?: string, bookKey?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book on group
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/phonebook/{bookKey}', pathParams: {billingAccount?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Easy/Mini PABX agent
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount?: string, serviceName?: string, agentNumber?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  MiniPabx Hunting
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Line tones
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  MiniPabx
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Agent assigned to a queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, queueId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Calls agent
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Calls queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Agent assigned to a queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  PABX Hunting
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Easy hunting time conditions options
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Easy hunting time conditions
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, conditionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Screenlist condition
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, conditionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Easy hunting screen lists conditions options
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  OVH easy calls queues
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Operation on a telephony offer
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/offerTask/{taskId}', pathParams: {billingAccount?: string, taskId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/serviceInfos', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Conference properties
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/conference/{serviceName}/settings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Directory Informations
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/service/{serviceName}/directory', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Operation on a telephony offer
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}', pathParams: {billingAccount?: string, serviceName?: string, taskId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Telephony service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/service/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  ScreenList capable services
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/screen/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Scheduled event
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', pathParams: {billingAccount?: string, serviceName?: string, uid?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Scheduler capable services
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/scheduler/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/spare/{spare}/serviceInfos', pathParams: {spare?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/trunks/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sounds attached to this telephony account
  Alter this object properties
  **/
  public put(path: '/telephony/sounds/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathstelephonyPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/telephony/aliases/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/telephony/lines/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  Get all available SIP domains by country
  Get all available SIP domains by country
  **/
  public post(path: '/telephony/setDefaultSipDomain', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  cancelScheduledRateCode operations
  Cancel a scheduled rate code update
  **/
  public post(path: '/telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  scheduleRateCode operations
  Schedule a new rate code for this sva
  **/
  public post(path: '/telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyDetailedRateCodeInformation>;
  /**
  List the telephony.HistoryRepaymentConsumption objects
  Ask for a new repayment
  **/
  public post(path: '/telephony/{billingAccount}/historyRepaymentConsumption', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<TelephonyHistoryRepaymentConsumption>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/telephony/{billingAccount}/changeContact', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  List the telephony.TrunkExternalDisplayedNumber objects
  External displayed number creation for a given trunk
  **/
  public post(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTrunkExternalDisplayedNumber>;
  /**
  validate operations
  Generate a phone call for validation. Returned validation code should be typed when asked.
  **/
  public post(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate', pathParams: {billingAccount?: string, serviceName?: string, number?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTrunkExternalDisplayedNumberValidation>;
  /**
  changeDestination operations
  Change the destination of the redirect
  **/
  public post(path: '/telephony/{billingAccount}/redirect/{serviceName}/changeDestination', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/eventToken', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  cancelTermination operations
  Cancel the billing account termination
  **/
  public post(path: '/telephony/{billingAccount}/cancelTermination', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  logs operations
  Generate a temporary url to retrieve device logs
  **/
  public post(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings/logs', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTemporaryLogsLink>;
  /**
  resetConfig operations
  Reinitialize the phone configuration
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/resetConfig', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyResetPhoneInfo>;
  /**
  reboot operations
  Create a task to reboot the phone
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/reboot', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.Rma objects
  Create a specific rma
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyRmaReturn>;
  /**
  changePhoneConfiguration operations
  Edit configuration of the phone remotely by provisioning
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  refreshScreen operations
  Create a task to refresh the screen of the MGCP phone
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.PhonebookContact objects
  Create a phonebook contact. Return identifier of the phonebook contact.
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<Number>;
  /**
  import operations
  Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.Phonebook objects
  Add a phonebook. Return the bookKey.
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the telephony.trafficExtract objects
  Launch a traffic extract on your line
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTrafficExtract>;
  /**
  List the telephony.CallsGenerated objects
  Make an automatic phone call. Return generated call identifier
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  cancelConvertToNumber operations
  Cancel a scheduled conversion to number
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  click2Call operations
  Make a phone call from the current line
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  changePassword operations
  Change the password of the click2call user
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.Click2CallUser objects
  Create a new user for click 2 call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number>;
  /**
  toneUpload operations
  Upload new tone file
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/tones/toneUpload', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.AbbreviatedNumber objects
  Create a new abbreviated number for the line
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyAbbreviatedNumber>;
  /**
  removeSimultaneousLines operations
  Remove extra simultaneous lines
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  associateDevice operations
  Associate a device to the current line with the device mac address
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/associateDevice', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  antihack operations
  Clean the antihack or add it on active filter screen list
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/antihack', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  click2Call operations
  Make a phone call from the current line
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2Call', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  activateNewPhone operations
  Allow to activate new phone, in case of phone switch
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  changePassword operations
  Change the SIP account password. It must be more than 7 and less than 21 alpha and numerical characters.
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/changePassword', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  block operations
  Block the line. By default it will block incoming and outgoing calls (except for emergency numbers)
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/block', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  unblock operations
  Unblock the line. It will remove any incoming and outboing block made earlier
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/unblock', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  dissociateDevice operations
  Dissociate a device from the current line with the device mac address
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/dissociateDevice', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  convertToNumber operations
  Schedule a conversion to number
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/convertToNumber', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOfferTask>;
  /**
  cancel operations
  Ask to cancel the portability
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/cancel', pathParams: {billingAccount?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  changeDate operations
  Ask to change the portability date
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/changeDate', pathParams: {billingAccount?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.PortabilityDocument objects
  Create a portability document
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/document', pathParams: {billingAccount?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyPortabilityDocument>;
  /**
  relaunch operations
  Fix error and relaunch portability
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/relaunch', pathParams: {billingAccount?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  execute operations
  Ask to execute the portability
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/execute', pathParams: {billingAccount?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Create a new skill for an agent (it adds the agent in a queue)
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingQueue objects
  Create a new queue
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxHuntingQueue>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the telephony.OvhPabxCustomStatus objects
  Create a new custom status
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxCustomStatus>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Create a new skill for an agent (it adds the agent in a queue)
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  The web access for your cloudpabx
  Create a new web access for this ressource
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyBannerAccess>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingAgent objects
  Create a new agent
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxHuntingAgent>;
  /**
  List the telephony.OvhPabxDialplanExtensionConditionScreenList objects
  Create a new screenlist condition for an extension
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxDialplanExtensionConditionScreenList>;
  /**
  List the telephony.OvhPabxDialplanExtensionConditionTime objects
  Create a new time condition for an extension
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxDialplanExtensionConditionTime>;
  /**
  List the telephony.OvhPabxDialplanExtensionRule objects
  Create a new rule for an extension
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxDialplanExtensionRule>;
  /**
  List the telephony.OvhPabxDialplanExtension objects
  Create a new extension for a dialplan
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxDialplanExtension>;
  /**
  List the telephony.OvhPabxDialplan objects
  Create a new dialplan
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxDialplan>;
  /**
  List the telephony.OvhPabxMenu objects
  Create a new menu
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxMenu>;
  /**
  List the telephony.OvhPabxMenuEntry objects
  Create a new menu entry
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry', pathParams: {billingAccount?: string, serviceName?: string, menuId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxMenuEntry>;
  /**
  soundUpload operations
  Upload new sound file
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxTts objects
  Create a new text to speech
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.TimeCondition objects
  Create a new time condition rule
  **/
  public post(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTimeCondition>;
  /**
  List the telephony.VoicemailGreetings objects
  Upload a new sound for a specific greeting. Return a task id.
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number>;
  /**
  move operations
  Move the message to another directory
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  changePassword operations
  Change the voicemail password. It must be 4 digit
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  changeRouting operations
  Disable/Enable voicemail. Available only if the line has fax capabilities
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  move operations
  Move the message to another directory
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  migrateOnNewVersion operations
  Change the voicemail on a new version to manager greetings, directories and extra settings.
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.ConsumptionThreshold objects
  Add an outplan notification on the billing account
  **/
  public post(path: '/telephony/{billingAccount}/outplanNotification', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<TelephonyConsumptionThreshold>;
  /**
  changeDestination operations
  Change the destination of the DDI
  **/
  public post(path: '/telephony/{billingAccount}/ddi/{serviceName}/changeDestination', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  sendFax operations
  Send a fax
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/settings/sendFax', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  changePassword operations
  Generates a new password for your fax account
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/settings/changePassword', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Fax ScreenLists
  Create a new fax ScreenLists
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyFaxScreen>;
  /**
  reset operations
  Reset a specifical fax screenList
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists/reset', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  start operations
  Start a fax campaign
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  stop operations
  Stop a fax campaign
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.FaxCampaign objects
  Create a new fax campaign
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyFaxCampaign>;
  /**
  transferSecurityDeposit operations
  Transfer security deposit between two billing accounts
  **/
  public post(path: '/telephony/{billingAccount}/transferSecurityDeposit', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.AbbreviatedNumberGroup objects
  Create a new abbreviated number for the billing account
  **/
  public post(path: '/telephony/{billingAccount}/abbreviatedNumber', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<TelephonyAbbreviatedNumberGroup>;
  /**
  toneUpload operations
  Upload new tone file
  **/
  public post(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.EasyMiniPabxHuntingAgent objects
  Create a new agent
  **/
  public post(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyEasyMiniPabxHuntingAgent>;
  /**
  changeFeatureType operations
  Change the feature type of the phone number
  **/
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/changeFeatureType', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  convertToLine operations
  Schedule a conversion to line
  **/
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/convertToLine', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOfferTask>;
  /**
  cancelConvertToLine operations
  Cancel a scheduled conversion to line
  **/
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.PhonebookMaster objects
  Add a phonebook on group. Return the bookKey.
  **/
  public post(path: '/telephony/{billingAccount}/phonebook', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the telephony.PhonebookContact objects
  Create a phonebook contact. Return identifier of the phonebook contact.
  **/
  public post(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact', pathParams: {billingAccount?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<Number>;
  /**
  import operations
  Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
  **/
  public post(path: '/telephony/{billingAccount}/phonebook/{bookKey}/import', pathParams: {billingAccount?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.EasyMiniPabxHuntingAgent objects
  Create a new agent
  **/
  public post(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyEasyMiniPabxHuntingAgent>;
  /**
  toneUpload operations
  Upload new tone file
  **/
  public post(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxCustomStatus objects
  Create a new custom status
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxCustomStatus>;
  /**
  List the telephony.OvhPabxHuntingAgent objects
  Create a new agent
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxHuntingAgent>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Create a new skill for an agent (it adds the agent in a queue)
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  The web access for your cloudpabx
  Create a new web access for this ressource
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyBannerAccess>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Create a new skill for an agent (it adds the agent in a queue)
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  List the telephony.OvhPabxHuntingQueue objects
  Create a new queue
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyOvhPabxHuntingQueue>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  soundUpload operations
  Upload new sound file
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.EasyHuntingTimeConditions objects
  Create a new time condition
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyEasyHuntingTimeConditions>;
  /**
  List the telephony.EasyHuntingScreenListsConditions objects
  Create a new screenlist condition for an extension
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyEasyHuntingScreenListsConditions>;
  /**
  canTransferSecurityDeposit operations
  Check if security deposit transfer is possible between two billing accounts
  **/
  public post(path: '/telephony/{billingAccount}/canTransferSecurityDeposit', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<boolean>;
  /**
  unmute operations
  Unmute a participant in your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  undeaf operations
  Make a participant undeaf your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  deaf operations
  Make a participant deaf in your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  kick operations
  Eject a participant from your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  mute operations
  Mute a participant in your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  energy operations
  Change a participant level of audio transmission
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  announceUpload operations
  Change the sound played at the beginning of the conference
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/announceUpload', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  unlock operations
  Lock the conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/unlock', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  lock operations
  Lock the conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/lock', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.ConferenceWebAccess objects
  Add a public web access to your conference
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyConferenceWebAccess>;
  /**
  billingAccountSite operations
  Used to overwrite current billing account feature by the billing account site
  **/
  public post(path: '/telephony/{billingAccount}/billingAccountSite', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  fetchEntrepriseInformations operations
  Get company entreprise informations by providing entreprise number
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyEntrepriseNumberInformationsTask>;
  /**
  cancelTermination operations
  Cancel the service termination
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/cancelTermination', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  changeOfBillingAccount operations
  Move a service of billing account. Source and destination nics should be the same.
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Offer change
  Add a new offer change
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.ScreenList objects
  Create a new screen list rule
  **/
  public post(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  importIcsCalendar operations
  Add scheduler events in ICS format
  **/
  public post(path: '/telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<TelephonyTask>;
  /**
  List the telephony.SchedulerEvent objects
  Add a scheduler event
  **/
  public post(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  replace operations
  Replace the phone by its spare. The broken phone became a spare if it was bought. An RMA is created if the broken phone is under securitydeposit.
  **/
  public post(path: '/telephony/spare/{spare}/replace', pathParams: {spare?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/telephony/trunks/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  List the telephony.Sound objects
  Create a new sound
  **/
  public post(path: '/telephony/sounds', pathParams: null, queryParams: null, bodyParams: null): Promise<TelephonySound>;
  public post(path: PathstelephonyPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  External displayed number linked to a trunk
  Delete an external displayed number for a given trunk
  **/
  public delete(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}', pathParams: {billingAccount?: string, serviceName?: string, number?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/eventToken', pathParams: {billingAccount?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Current Return Merchandise Authorisation
  Cancel the rma
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book contact
  Delete a phonebook contact
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book
  Delete a phonebook
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', pathParams: {billingAccount?: string, serviceName?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Traffic extracts (SIP) of your line
  Delete a traffic extract
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  User of the click 2 call
  Delete a click 2 call user
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Abbreviated number
  Delete the given abbreviated number
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount?: string, serviceName?: string, abbreviatedNumber?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The PABX records
  Delete the given record
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/records/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Document linked to a portability
  Delete the document
  **/
  public delete(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', pathParams: {billingAccount?: string, id?: Number, documentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Agent assigned to a queue
  Delete the given skill
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Calls queue
  Delete the given queue
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Custom statuses of your callcenter agents
  Delete the given custom status
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Agent assigned to a queue
  Delete the given skill
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, queueId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Calls agent
  Delete the given agent
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The web access for your cloudpabx
  Delete the given web access
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Screenlist condition
  Delete the given condition
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number, conditionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Time condition
  Delete the given condition
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number, conditionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Dialplan extension
  Delete the given extension
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Dialplan rule
  Delete the given rule
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number, extensionId?: Number, ruleId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Dialplan
  Delete the given dialplan
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', pathParams: {billingAccount?: string, serviceName?: string, dialplanId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  IVR menu entry
  Delete the given menu entry
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', pathParams: {billingAccount?: string, serviceName?: string, menuId?: Number, entryId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  IVR Menu
  Delete the given menu
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', pathParams: {billingAccount?: string, serviceName?: string, menuId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The PABX sounds
  Delete the given sound
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}', pathParams: {billingAccount?: string, serviceName?: string, soundId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The PABX records
  Delete the given record
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The PABX Text To Speech sounds
  Delete the given text to speech
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Time conditions
  Delete the given screen list
  **/
  public delete(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Billing Account
  Ask for a billing account termination.
  **/
  public delete(path: '/telephony/{billingAccount}', pathParams: {billingAccount?: string}, queryParams: {details?: string, reason?: TelephonyTerminationReasonEnum}, bodyParams: {details?: string, reason?: TelephonyTerminationReasonEnum}): Promise<void>;
  /**
  Voicemail greeting
  Delete the customized greeting
  **/
  public delete(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Voicemail message
  Delete the given voicemail message
  **/
  public delete(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The outplan notifications configured for your billing account
  Delete an outplan notification
  **/
  public delete(path: '/telephony/{billingAccount}/outplanNotification/{id}', pathParams: {billingAccount?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Fax ScreenLists
  Delete all fax screenLists
  **/
  public delete(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Fax campaigns
  Delete a fax campaign
  **/
  public delete(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Abbreviated number
  Delete the given abbreviated number
  **/
  public delete(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount?: string, abbreviatedNumber?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Easy/Mini PABX agent
  Delete the agent
  **/
  public delete(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount?: string, serviceName?: string, agentNumber?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book contact
  Delete a phonebook contact
  **/
  public delete(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount?: string, bookKey?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Phone book on group
  Delete a phonebook
  **/
  public delete(path: '/telephony/{billingAccount}/phonebook/{bookKey}', pathParams: {billingAccount?: string, bookKey?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Easy/Mini PABX agent
  Delete the agent
  **/
  public delete(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount?: string, serviceName?: string, agentNumber?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Custom statuses of your callcenter agents
  Delete the given custom status
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Agent assigned to a queue
  Delete the given skill
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number, queueId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Calls agent
  Delete the given agent
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The web access for your cloudpabx
  Delete the given web access
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount?: string, serviceName?: string, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Calls queue
  Delete the given queue
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Agent assigned to a queue
  Delete the given skill
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount?: string, serviceName?: string, queueId?: Number, agentId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The PABX sounds
  Delete the given sound
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}', pathParams: {billingAccount?: string, serviceName?: string, soundId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The PABX records
  Delete the given record
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Easy hunting time conditions
  Delete the given condition
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, conditionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Screenlist condition
  Delete the given condition
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', pathParams: {billingAccount?: string, serviceName?: string, conditionId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List public web access of your conference
  Delete a public web access to your conference
  **/
  public delete(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Offer change
  Delete the replacement offer scheduling
  **/
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Telephony service
  Ask for a service termination.
  **/
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}', pathParams: {billingAccount?: string, serviceName?: string}, queryParams: {reason?: TelephonyTerminationReasonEnum, details?: string}, bodyParams: {reason?: TelephonyTerminationReasonEnum, details?: string}): Promise<void>;
  /**
  Screen list
  Delete the given screen list
  **/
  public delete(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}', pathParams: {billingAccount?: string, serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Scheduled event
  Delete the given scheduler event
  **/
  public delete(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', pathParams: {billingAccount?: string, serviceName?: string, uid?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Spare properties
  Delete the spare as if it was not belonging to OVH anymore
  **/
  public delete(path: '/telephony/spare/{spare}', pathParams: {spare?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sounds attached to this telephony account
  Delete the sound
  **/
  public delete(path: '/telephony/sounds/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathstelephonyDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

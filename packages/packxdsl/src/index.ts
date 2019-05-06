import { ApiCommon } from '@ovh-api/common';
/**
 * Details of a Building
 */
export interface ConnectivityEligibilityBuilding {
  /**
   * Identifier which refer to a building uniquely
   *
   */
  reference?: string;
  /**
   * Stairs for this building
   *
   */
  stairs?: ConnectivityEligibilityBuildingStair[];
  /**
   * Building name
   *
   */
  name?: string;
  /**
   * Building NRO (Optical main distribution frame)
   *
   */
  nro?: string;
  /**
   * Building type
   *
   */
  type?: ConnectivityEligibilityBuildingTypeEnum;
}
/**
 * Stair details of a Building
 */
export interface ConnectivityEligibilityBuildingStair {
  /**
   * Stair identifier, "_NA_" if no identifier is available
   *
   */
  stair?: string;
  /**
   * List of floor indentifier, "_NA_" if no identifier is available
   *
   */
  floors?: string[];
}
/**
 * Building type
 */
export type ConnectivityEligibilityBuildingTypeEnum = 'BUILDING' | 'HOUSE';
/**
 * A contract
 */
export interface OrderContract {
  /**
   */
  name?: string;
  /**
   */
  content?: string;
  /**
   */
  url?: string;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  text?: string;
  /**
   */
  value?: Number;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
}
/**
 * Domain action
 */
export type PackXdslDomainActionEnum = 'create' | 'trade' | 'transfer';
/**
 * Exchange 2013 service
 */
export interface PackXdslExchangeAccountService {
  /**
   */
  exchangeService?: string;
  /**
   */
  organizationName?: string;
  /**
   */
  domain?: string;
}
/**
 * Exchange account service
 */
export interface PackXdslExchangeLiteService {
  /**
   */
  domain?: string;
}
/**
 * Hubic service
 */
export interface PackXdslHubic {
  /**
   * Human readable size of the hubic account
   *
   */
  size?: string;
  /**
   * Voucher to enter on HubiC website to activate the account
   *
   */
  voucher?: string;
  /**
   * Size of the hubic account in bytes
   *
   */
  bytes?: Number;
  /**
   */
  domain?: string;
  /**
   * Indicate if the voucher is used or not
   *
   */
  isUsed?: boolean;
}
/**
 * Pack of xDSL services
 */
export interface PackXdslPackAdsl {
  /**
   * Capabilities of the pack
   *
   */
  capabilities?: PackXdslPackCapabilities;
  /**
   * Price of the offer
   *
   */
  offerPrice?: OrderPrice;
  /**
   * Name of the offer
   *
   */
  offerDescription?: string;
  /**
   * Customer pack description
   *
   */
  description?: string;
  /**
   * Name of the xdsl pack
   *
   */
  packName?: string;
}
/**
 * Describe the capabilities of this pack
 */
export interface PackXdslPackCapabilities {
  /**
   * Whether or not this pack can move address
   *
   */
  canMoveAddress?: boolean;
  /**
   * Whether or not this pack is from an old offer
   *
   */
  isLegacyOffer?: boolean;
}
/**
 * Information about pack xdsl
 */
export interface PackXdslPackDetail {
  /**
   * Number of the line
   *
   */
  number?: string;
  /**
   * Name of the pack
   *
   */
  packname?: string;
  /**
   * Reference of the access
   *
   */
  accessname?: string;
  /**
   * Description of the access
   *
   */
  description?: string;
  /**
   * Type of the access
   *
   */
  type?: XdslDslTypeEnum;
}
/**
 * Details about the resiliation
 */
export interface PackXdslResiliationFollowUpDetail {
  /**
   * If the customer needs to return his modem
   *
   */
  needModemReturn?: boolean;
  /**
   * Date when the resiliation was asked
   *
   */
  registrationDate?: Date;
  /**
   * Date when the resiliation will take effect
   *
   */
  dateTodo?: Date;
  /**
   * Status of the resiliation
   *
   */
  status?: string;
}
/**
 * Reason of a resiliation
 */
export type PackXdslResiliationReasonEnum = 'addressMove' | 'billingProblems' | 'cessationOfActivity' | 'changeOfTerms' | 'ftth' | 'goToCompetitor' | 'other' | 'technicalProblems';
/**
 * Information about the reason for the resiliation
 */
export interface PackXdslResiliationSurvey {
  /**
   * Comment about this resiliation
   *
   */
  comment?: string;
  /**
   * Type of reason for the resiliation
   *
   */
  type?: PackXdslResiliationReasonEnum;
}
/**
 * Show the resiliation terms
 */
export interface PackXdslResiliationTerms {
  /**
   * List of available resiliation reasons
   *
   */
  resiliationReasons?: PackXdslResiliationReasonEnum[];
  /**
   * Minimum date at which the pack can be resiliated
   *
   */
  minResiliationDate?: Date;
  /**
   * Price due at resiliationDate
   *
   */
  due?: OrderPrice;
  /**
   * Date until which the customer is engaged
   *
   */
  engageDate?: Date;
  /**
   * Date at which the pack will be resiliated
   *
   */
  resiliationDate?: Date;
}
/**
 * Service link to the pack
 */
export interface PackXdslService {
  /**
   */
  domain?: string;
  /**
   */
  id?: Number;
  /**
   */
  type?: PackXdslServiceNameEnum;
}
/**
 * Informations about a service
 */
export interface PackXdslServiceInformation {
  /**
   */
  total?: Number;
  /**
   */
  inCreation?: Number;
  /**
   */
  name?: PackXdslServiceNameEnum;
  /**
   */
  used?: Number;
}
/**
 * Service name
 */
export type PackXdslServiceNameEnum = 'domain' | 'emailPro' | 'exchangeAccount' | 'exchangeIndividual' | 'exchangeLite' | 'exchangeOrganization' | 'hostedEmail' | 'hubic' | 'modem' | 'overTheBoxHardware' | 'overTheBoxService' | 'siteBuilderFull' | 'siteBuilderStart' | 'voipAlias' | 'voipBillingAccount' | 'voipEcoFax' | 'voipLine' | 'xdslAccess';
/**
 * Shipping address
 */
export interface PackXdslShippingAddress {
  /**
   */
  firstName?: string;
  /**
   */
  lastName?: string;
  /**
   */
  zipCode?: string;
  /**
   */
  shippingId?: string;
  /**
   */
  address?: string;
  /**
   */
  cityName?: string;
  /**
   */
  countryCode?: string;
}
/**
 * Allowed contexts when looking for shipping addresses
 */
export type PackXdslShippingAddressContextEnum = 'migration' | 'voipLine';
/**
 * SiteBuilder available domain infos
 */
export interface PackXdslSiteBuilderDomain {
  /**
   */
  defaultSubDomain?: string;
  /**
   */
  domain?: string;
}
/**
 * SiteBuilder template infos
 */
export interface PackXdslSiteBuilderTemplate {
  /**
   */
  reference?: string;
  /**
   */
  thumbImage?: string;
  /**
   */
  name?: string;
  /**
   */
  bkId?: Number;
  /**
   */
  id?: Number;
  /**
   */
  previewImg?: string;
}
/**
 * Describes the current status of a task
 */
export interface PackXdslTask {
  /**
   */
  updateDate?: Date;
  /**
   */
  function?: string;
  /**
   */
  id?: Number;
  /**
   */
  status?: PackXdslTaskStatusEnum;
}
/**
 * Status of a task.
 */
export type PackXdslTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'problem' | 'todo';
/**
 * Terms to unpack services
 */
export interface PackXdslUnpackTerms {
  /**
   * Tells whether or not the service can be unpacked
   *
   */
  isAllowed?: boolean;
  /**
   * Renew period in month of the service
   *
   */
  renewPeriod?: Number;
  /**
   * The price it will cost when it will be renew
   *
   */
  renewPrice?: OrderPrice;
  /**
   * Price bill on the unpack action
   *
   */
  price?: OrderPrice;
}
/**
 * Hardware for VoIP line
 */
export interface PackXdslVoIPHardware {
  /**
   */
  image?: string;
  /**
   */
  max?: Number;
  /**
   */
  name?: string;
  /**
   */
  deposit?: OrderPrice;
  /**
   */
  label?: string;
  /**
   */
  needShipping?: boolean;
  /**
   */
  url?: string;
}
/**
 * Represents an order of VoIP lines
 */
export interface PackXdslVoIPLineOrder {
  /**
   */
  orderUrl?: string;
  /**
   */
  orderId?: Number;
  /**
   * Whether or not this order need to be payed manually
   *
   */
  needPayment?: boolean;
  /**
   */
  taskIds?: Number[];
}
/**
 * VOIP line services
 */
export interface PackXdslVoipLineService {
  /**
   */
  domain?: string;
  /**
   */
  billingAccount?: string;
}
/**
 * The parameters needed to create a new landline
 */
export interface PackXdslAddressMoveCreation {
  /**
   * The address
   *
   */
  address?: XdslEligibilityAddress;
  /**
   * Data to book a meeting slot
   *
   */
  meeting?: XdslEligibilityBookMeetingSlot;
}
/**
 * Eligibility
 */
export interface PackXdslAddressMoveEligibility {
  /**
   * The available offers at this address
   *
   */
  offers?: PackXdslAddressMoveOffer[];
  /**
   * Tells if the current number portability can be kept after the address move. Null if no number were ported.
   *
   */
  keepCurrentPortability?: XdslEligibilityPortability;
}
/**
 * The parameters needed to activate the access on a landline
 */
export interface PackXdslAddressMoveLandline {
  /**
   * The unbundling of the landline
   *
   */
  unbundling?: XdslDeconsolidationEnum;
  /**
   * Whether or not tha lineNumber should be ported to OVH, if eligibile
   *
   */
  portLineNumber?: boolean;
  /**
   * A token to prove the ownership of the line number, needed to port the number
   *
   */
  rio?: string;
  /**
   * The number of the landline
   *
   */
  lineNumber?: string;
  /**
   * The status of the landline
   *
   */
  status?: XdslEligibilityLandlineStatusEnum;
}
/**
 * An offer
 */
export interface PackXdslAddressMoveOffer {
  /**
   * Address of the landline
   *
   */
  address?: XdslEligibilityAddress;
  /**
   * The download synchronisation in kbps
   *
   */
  syncDownload?: Number;
  /**
   * Whether this is a reseller offer or not
   *
   */
  reseller?: boolean;
  /**
   * DSL technology
   *
   */
  type?: XdslDslTypeEnum;
  /**
   * The estimated upload synchronisation in kbps
   *
   */
  estimatedUpload?: Number;
  /**
   * Available meeting slots for the creation of this offer.
   *
   */
  meetingSlots?: XdslEligibilityMeetingSlots;
  /**
   * Tells whether the tested number can be ported to OVH or not
   *
   */
  portability?: XdslEligibilityPortability;
  /**
   * The status of the landline
   *
   */
  lineStatus?: XdslEligibilityLandlineStatusEnum;
  /**
   * Status of the request
   *
   */
  provider?: XdslEligibilityProviderEnum;
  /**
   * The unbundling type
   *
   */
  unbundling?: XdslDeconsolidationEnum;
  /**
   * The upload synchronisation in kbps
   *
   */
  syncUpload?: Number;
  /**
   * The code of the offer
   *
   */
  offerCode?: string;
  /**
   * The price of this offer
   *
   */
  price?: OrderPrice;
  /**
   * The estimated download synchronisation in kbps
   *
   */
  estimatedDownload?: Number;
  /**
   * Detailed information about the sections between the DSLAM and the telephone jack
   *
   */
  lineSectionsLength?: XdslLineSectionLength[];
  /**
   * The NRA of the landline
   *
   */
  nra?: string;
}
/**
 * Migration offer
 */
export interface PackXdslMigrationMigrationOffer {
  /**
   * Name of the offer
   *
   */
  offerName?: string;
  /**
   * Mac address of the modem to be returned
   *
   */
  modemMacToReturn?: string;
  /**
   * Description of the offer
   *
   */
  description?: string;
  /**
   * List of number of months possible for engagement
   *
   */
  engagementMonths?: Number[];
  /**
   * List of contracts for this offer
   *
   */
  contracts?: OrderContract[];
  /**
   * Number of months of engagement
   *
   */
  engageMonths?: Number;
  /**
   * List of sub services to delete
   *
   */
  subServicesToDelete?: PackXdslMigrationSubServiceToDelete[];
  /**
   * URL of the offer
   *
   */
  url?: string;
  /**
   * Price for modem rental
   *
   */
  modemRental?: OrderPrice;
  /**
   * Installation fees
   *
   */
  installFees?: OrderPrice;
  /**
   * Price to make the migration
   *
   */
  due?: OrderPrice;
  /**
   * DEPRECATED - List of contracts
   *
   */
  contractList?: string[];
  /**
   * Price of the offer
   *
   */
  price?: OrderPrice;
  /**
   * Tells if the customer will have to change its modem
   *
   */
  needNewModem?: boolean;
  /**
   * Available options for the migration
   *
   */
  options?: PackXdslMigrationOfferAvailableOption[];
  /**
   * Price of the current offer
   *
   */
  currentOfferPrice?: OrderPrice;
  /**
   * Subscription price the first year
   *
   */
  firstYearPromo?: OrderPrice;
  /**
   * Tells if the offer needs a modem
   *
   */
  needModem?: boolean;
}
/**
 * List of available Migration offer
 */
export interface PackXdslMigrationMigrationOfferResponse {
  /**
   * Array of offers
   *
   */
  offers?: PackXdslMigrationMigrationOffer[];
  /**
   * Array of buildings
   *
   */
  buildings?: ConnectivityEligibilityBuilding[];
}
/**
 * Available option for the offer
 */
export interface PackXdslMigrationOfferAvailableOption {
  /**
   * Number of months paid for
   *
   */
  duration?: Number;
  /**
   * Price of an additional slot. You pay this price everytime the duration is expired
   *
   */
  optionalPrice?: OrderPrice;
  /**
   * Name of the option
   *
   */
  name?: string;
  /**
   * Number of optional slots that can be puchased
   *
   */
  optional?: Number;
  /**
   * Number of slots included by default in this offer
   *
   */
  included?: Number;
}
/**
 * Option of Offer
 */
export interface PackXdslMigrationOfferOption {
  /**
   * Number of slots, couting included slots
   *
   */
  quantity?: Number;
  /**
   * Name of the option
   *
   */
  name?: string;
}
/**
 * Option of Offer
 */
export interface PackXdslMigrationOfferServiceToDelete {
  /**
   * Type of the service
   *
   */
  service?: string;
  /**
   * Type of the service to delete
   *
   */
  type?: PackXdslServiceNameEnum;
}
/**
 * Sub service to delete
 */
export interface PackXdslMigrationSubServiceToDelete {
  /**
   * List of domains of sub services
   *
   */
  services?: string[];
  /**
   * Number of services to be deleted
   *
   */
  numberToDelete?: Number;
  /**
   * Type of service to be deleted
   *
   */
  type?: PackXdslServiceNameEnum;
}
/**
 * Informations about a promotion code
 */
export interface PackXdslPromotionCodeCapabilities {
  /**
   * Enum of the possible errors
   *
   */
  reasonCodes?: PackXdslPromotionCodeReasonCodes[];
  /**
   * Amount of the promotion code
   *
   */
  amount?: OrderPrice;
  /**
   * Number of months of engagement
   *
   */
  engagement?: Number;
  /**
   * True if the promotion code generation is available
   *
   */
  canGenerate?: boolean;
}
/**
 * Reasons why the promotion code can not be generated
 */
export type PackXdslPromotionCodeReasonCodes = 'noMoreAvailable' | 'offerNotCompatible' | 'serviceNotInOkState' | 'stillEngaged' | 'taskInProgress';
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
/**
 * Async task
 */
export interface XdslAsyncTask<T> {
  /**
   * Result of the call
   *
   */
  result?: T;
  /**
   * Error
   *
   */
  error?: string;
  /**
   * Status of the call
   *
   */
  status?: XdslAsyncTaskStatusEnum;
}
/**
 * AsyncTask status
 */
export type XdslAsyncTaskStatusEnum = 'error' | 'ok' | 'pending';
/**
 * Deconsolidation of the line.
 */
export type XdslDeconsolidationEnum = 'createNeighbour' | 'creation' | 'creationNeighbour' | 'partial' | 'total';
/**
 * Possible DSL technologies
 */
export type XdslDslTypeEnum = 'adsl' | 'ftth' | 'sdsl' | 'vdsl';
/**
 * 
 */
export interface XdslLineSectionLength {
  /**
   * The diameter of this section in millimeters
   *
   */
  diameter?: Number;
  /**
   * The length of this section in meters
   *
   */
  length?: Number;
}
/**
 * Represents an address
 */
export interface XdslEligibilityAddress {
  /**
   * Owner of the line, this information can be restricted
   *
   */
  owner?: string;
  /**
   * Identifier of the door, if any
   *
   */
  door?: string;
  /**
   * Identifier of the stair, if any
   *
   */
  stair?: string;
  /**
   * Number on the street
   *
   */
  streetNumber?: string;
  /**
   * Informations about the city
   *
   */
  city?: XdslEligibilityCity;
  /**
   * Informations about the street
   *
   */
  street?: XdslEligibilityStreet;
  /**
   * Identifier of the historical operator landmark, if any
   *
   */
  logo?: string;
  /**
   * Identifier of the floor, if any
   *
   */
  floor?: string;
  /**
   * Name of the residence, if any
   *
   */
  residence?: string;
  /**
   * Name of the building, if any
   *
   */
  building?: string;
}
/**
 * Parameters to book a time slot for a meeting
 */
export interface XdslEligibilityBookMeetingSlot {
  /**
   * The time slot to book, null if fakeMeeting is true
   *
   */
  meetingSlot?: XdslEligibilityMeetingSlot;
  /**
   * Whether or not to book a fake meeting slots (if no slots are available)
   *
   */
  fakeMeeting?: boolean;
  /**
   * The name of the customer
   *
   */
  name?: string;
}
/**
 * Represent a city
 */
export interface XdslEligibilityCity {
  /**
   * Zip code of the city
   *
   */
  zipCode?: string;
  /**
   * INSEE code of the city
   *
   */
  inseeCode?: string;
  /**
   * Name of the city
   *
   */
  name?: string;
  /**
   * Locality (subset of a city)
   *
   */
  locality?: string;
}
/**
 * A message and its code
 */
export interface XdslEligibilityCodeAndMessage {
  /**
   * A code identifying the message
   *
   */
  code?: string;
  /**
   * A message
   *
   */
  message?: string;
}
/**
 * Status of a landline
 */
export type XdslEligibilityLandlineStatusEnum = 'active' | 'inactive';
/**
 * Represents a time slot for a meeting
 */
export interface XdslEligibilityMeetingSlot {
  /**
   * The end of the time slot
   *
   */
  endDate?: Date;
  /**
   * The beginning of the time slot
   *
   */
  startDate?: Date;
  /**
   * An opaque string that represents an intervention unit
   *
   */
  uiCode?: string;
}
/**
 * List of available meeting time slots
 */
export interface XdslEligibilityMeetingSlots {
  /**
   * Whether or not it is possible to book a fake meeting
   *
   */
  canBookFakeMeeting?: boolean;
  /**
   * A time slot
   *
   */
  meetingSlots?: XdslEligibilityMeetingSlot[];
}
/**
 * Eligibility of the portability of the line number
 */
export interface XdslEligibilityPortability {
  /**
   * The reason(s) of the negative portability eligibility
   *
   */
  comments?: XdslEligibilityCodeAndMessage[];
  /**
   * Whether or not it is possible to port the line number. If false, commentList contains the reason(s)
   *
   */
  eligible?: boolean;
  /**
   * The special condition(s) of the portability
   *
   */
  warnings?: XdslEligibilityCodeAndMessage[];
  /**
   * Whether or not the portability is possible under condition. If true, warningList contains the reason(s)
   *
   */
  underCondition?: boolean;
}
/**
 * The providers
 */
export type XdslEligibilityProviderEnum = 'axione' | 'ft' | 'kosc' | 'ovh' | 'sfr';
/**
 * Represent a street
 */
export interface XdslEligibilityStreet {
  /**
   * Name of the street
   *
   */
  name?: string;
  /**
   * RIVOLI identifier of the street
   *
   */
  rivoliCode?: string;
}
/**
 * Details that the user used for his voucher
 */
export interface XdslHubicHubicDetailsResponse {
  /**
   * Mail used for the voucher
   *
   */
  email?: string;
}
type PathspackxdslGET = '/pack/xdsl/{packName}/hubic/services' | 
'/pack/xdsl/{packName}/hubic/services/{domain}' | 
'/pack/xdsl/{packName}/hubic/services/{domain}/details' | 
'/pack/xdsl/{packName}/siteBuilderFull/services' | 
'/pack/xdsl/{packName}/siteBuilderFull/options/templates' | 
'/pack/xdsl/{packName}/siteBuilderFull/options/domains' | 
'/pack/xdsl/{packName}/exchangeAccount/services/{domain}' | 
'/pack/xdsl/{packName}/exchangeAccount/services' | 
'/pack/xdsl/{packName}/resiliationFollowUp' | 
'/pack/xdsl/{packName}/services' | 
'/pack/xdsl/{packName}/exchangeIndividual/services' | 
'/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable' | 
'/pack/xdsl/{packName}/exchangeIndividual/options/domains' | 
'/pack/xdsl/{packName}/resiliationTerms' | 
'/pack/xdsl/{packName}/subServices' | 
'/pack/xdsl/{packName}/subServices/{domain}' | 
'/pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms' | 
'/pack/xdsl/{packName}/shippingAddresses' | 
'/pack/xdsl/{packName}/voipBillingAccount/services' | 
'/pack/xdsl/{packName}/voipEcofax/services' | 
'/pack/xdsl/{packName}' | 
'/pack/xdsl/{packName}/xdslAccess/services' | 
'/pack/xdsl/{packName}/tasks/{id}' | 
'/pack/xdsl/{packName}/tasks' | 
'/pack/xdsl/{packName}/domain/options/tlds' | 
'/pack/xdsl/{packName}/domain/services' | 
'/pack/xdsl/{packName}/hostedEmail/services' | 
'/pack/xdsl/{packName}/hostedEmail/options/domains' | 
'/pack/xdsl/{packName}/canCancelResiliation' | 
'/pack/xdsl/{packName}/voipLine/options/shippingAddresses' | 
'/pack/xdsl/{packName}/voipLine/options/hardwares' | 
'/pack/xdsl/{packName}/voipLine/services' | 
'/pack/xdsl/{packName}/voipLine/services/{domain}' | 
'/pack/xdsl/{packName}/exchangeOrganization/services' | 
'/pack/xdsl/{packName}/siteBuilderStart/options/domains' | 
'/pack/xdsl/{packName}/siteBuilderStart/options/templates' | 
'/pack/xdsl/{packName}/siteBuilderStart/services' | 
'/pack/xdsl/{packName}/serviceInfos' | 
'/pack/xdsl/{packName}/promotionCode/capabilities' | 
'/pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable' | 
'/pack/xdsl/{packName}/exchangeLite/services/{domain}' | 
'/pack/xdsl/{packName}/exchangeLite/services' | 
'/pack/xdsl/{packName}/emailPro/options/domains' | 
'/pack/xdsl/{packName}/emailPro/options/isEmailAvailable' | 
'/pack/xdsl/{packName}/emailPro/services' | 
'/pack/xdsl';

type PathspackxdslPUT = '/pack/xdsl/{packName}' | 
'/pack/xdsl/{packName}/serviceInfos';

type PathspackxdslPOST = '/pack/xdsl/{packName}/siteBuilderFull/services' | 
'/pack/xdsl/{packName}/exchangeIndividual/services' | 
'/pack/xdsl/{packName}/voipEcofax/services' | 
'/pack/xdsl/{packName}/resiliate' | 
'/pack/xdsl/{packName}/addressMove/move' | 
'/pack/xdsl/{packName}/addressMove/eligibility' | 
'/pack/xdsl/{packName}/domain/services' | 
'/pack/xdsl/{packName}/hostedEmail/services' | 
'/pack/xdsl/{packName}/voipLine/options/customShippingAddress' | 
'/pack/xdsl/{packName}/voipLine/services' | 
'/pack/xdsl/{packName}/cancelResiliation' | 
'/pack/xdsl/{packName}/siteBuilderStart/services' | 
'/pack/xdsl/{packName}/migration/servicesToDelete' | 
'/pack/xdsl/{packName}/migration/offers' | 
'/pack/xdsl/{packName}/migration/migrate' | 
'/pack/xdsl/{packName}/promotionCode/generate' | 
'/pack/xdsl/{packName}/changeContact' | 
'/pack/xdsl/{packName}/exchangeLite/services' | 
'/pack/xdsl/{packName}/emailPro/services';

class Apipackxdsl extends ApiCommon {
  /**
  List the pack.xdsl.Hubic objects
  Hubic perso services
  **/
  public get(path: '/pack/xdsl/{packName}/hubic/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  Hubic service
  Get this object properties
  **/
  public get(path: '/pack/xdsl/{packName}/hubic/services/{domain}', pathParams: {packName?: string, domain?: string}, queryParams: null): Promise<PackXdslHubic>;
  /**
  details operations
  Details associated to a voucher
  **/
  public get(path: '/pack/xdsl/{packName}/hubic/services/{domain}/details', pathParams: {packName?: string, domain?: string}, queryParams: null): Promise<XdslAsyncTask<XdslHubicHubicDetailsResponse>>;
  /**
  List the pack.xdsl.SiteBuilderFullService objects
  Sitebuilder full services
  **/
  public get(path: '/pack/xdsl/{packName}/siteBuilderFull/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  templates operations
  Get the available templates
  **/
  public get(path: '/pack/xdsl/{packName}/siteBuilderFull/options/templates', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslSiteBuilderTemplate[]>;
  /**
  domains operations
  Get the available domains
  **/
  public get(path: '/pack/xdsl/{packName}/siteBuilderFull/options/domains', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslSiteBuilderDomain[]>;
  /**
  Exchange 2013 service
  Get this object properties
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeAccount/services/{domain}', pathParams: {packName?: string, domain?: string}, queryParams: null): Promise<PackXdslExchangeAccountService>;
  /**
  List the pack.xdsl.ExchangeAccountService objects
  Exchange 2013 services
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeAccount/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  resiliationFollowUp operations
  Get information about the ongoing resiliation
  **/
  public get(path: '/pack/xdsl/{packName}/resiliationFollowUp', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslResiliationFollowUpDetail>;
  /**
  services operations
  Informations about the services included in the pack
  **/
  public get(path: '/pack/xdsl/{packName}/services', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslServiceInformation[]>;
  /**
  List the pack.xdsl.ExchangeIndividual objects
  Exchange services
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeIndividual/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  isEmailAvailable operations
  Check if the email address is available for service creation
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable', pathParams: {packName?: string}, queryParams: {email?: string}): Promise<boolean>;
  /**
  domains operations
  Get the available domains
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeIndividual/options/domains', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  resiliationTerms operations
  Get resiliation terms
  **/
  public get(path: '/pack/xdsl/{packName}/resiliationTerms', pathParams: {packName?: string}, queryParams: {resiliationDate?: Date}): Promise<PackXdslResiliationTerms>;
  /**
  List the pack.xdsl.Service objects
  List services contained in the pack
  **/
  public get(path: '/pack/xdsl/{packName}/subServices', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  Service link to the pack
  Get this object properties
  **/
  public get(path: '/pack/xdsl/{packName}/subServices/{domain}', pathParams: {packName?: string, domain?: string}, queryParams: null): Promise<PackXdslService>;
  /**
  keepServiceTerms operations
  Give the condition to unpack service from pack
  **/
  public get(path: '/pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms', pathParams: {packName?: string, domain?: string}, queryParams: null): Promise<PackXdslUnpackTerms>;
  /**
  shippingAddresses operations
  Allowed shipping addresses given a context
  **/
  public get(path: '/pack/xdsl/{packName}/shippingAddresses', pathParams: {packName?: string}, queryParams: {context?: PackXdslShippingAddressContextEnum}): Promise<PackXdslShippingAddress[]>;
  /**
  List the pack.xdsl.BillingAccountService objects
  VOIP billing accounts
  **/
  public get(path: '/pack/xdsl/{packName}/voipBillingAccount/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the pack.xdsl.VoipEcoFaxService objects
  VOIP ecofax service
  **/
  public get(path: '/pack/xdsl/{packName}/voipEcofax/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  Pack of xDSL services
  Get this object properties
  **/
  public get(path: '/pack/xdsl/{packName}', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslPackAdsl>;
  /**
  List the pack.xdsl.XdslAccessService objects
  xDSL access services
  **/
  public get(path: '/pack/xdsl/{packName}/xdslAccess/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  Describes the current status of a task
  Get this object properties
  **/
  public get(path: '/pack/xdsl/{packName}/tasks/{id}', pathParams: {packName?: string, id?: Number}, queryParams: null): Promise<PackXdslTask>;
  /**
  List the pack.xdsl.Task objects
  Tasks scheduled for this pack
  **/
  public get(path: '/pack/xdsl/{packName}/tasks', pathParams: {packName?: string}, queryParams: {status?: PackXdslTaskStatusEnum, function?: string}): Promise<Number[]>;
  /**
  tlds operations
  Get the available tlds for domain order
  **/
  public get(path: '/pack/xdsl/{packName}/domain/options/tlds', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the pack.xdsl.DomainService objects
  Domain services
  **/
  public get(path: '/pack/xdsl/{packName}/domain/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the pack.xdsl.HostedEmailService objects
  Hosted email services
  **/
  public get(path: '/pack/xdsl/{packName}/hostedEmail/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  domains operations
  Get the hostedemail available domains
  **/
  public get(path: '/pack/xdsl/{packName}/hostedEmail/options/domains', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  canCancelResiliation operations
  Check if the resiliation can be cancelled
  **/
  public get(path: '/pack/xdsl/{packName}/canCancelResiliation', pathParams: {packName?: string}, queryParams: null): Promise<boolean>;
  /**
  shippingAddresses operations
  Get available shipping addresses
  **/
  public get(path: '/pack/xdsl/{packName}/voipLine/options/shippingAddresses', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslShippingAddress[]>;
  /**
  hardwares operations
  Get available hardwares
  **/
  public get(path: '/pack/xdsl/{packName}/voipLine/options/hardwares', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslVoIPHardware[]>;
  /**
  List the pack.xdsl.VoipLineService objects
  VOIP line services
  **/
  public get(path: '/pack/xdsl/{packName}/voipLine/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  VOIP line services
  Get this object properties
  **/
  public get(path: '/pack/xdsl/{packName}/voipLine/services/{domain}', pathParams: {packName?: string, domain?: string}, queryParams: null): Promise<PackXdslVoipLineService>;
  /**
  List the pack.xdsl.ExchangeOrganizationService objects
  Exchange 2013 organization services
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeOrganization/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  domains operations
  Get the available domains
  **/
  public get(path: '/pack/xdsl/{packName}/siteBuilderStart/options/domains', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslSiteBuilderDomain[]>;
  /**
  templates operations
  Get the available templates
  **/
  public get(path: '/pack/xdsl/{packName}/siteBuilderStart/options/templates', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslSiteBuilderTemplate[]>;
  /**
  List the pack.xdsl.SiteBuilderStartService objects
  Sitebuilder start services
  **/
  public get(path: '/pack/xdsl/{packName}/siteBuilderStart/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/pack/xdsl/{packName}/serviceInfos', pathParams: {packName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  capabilities operations
  Get informations about the promotion code generation
  **/
  public get(path: '/pack/xdsl/{packName}/promotionCode/capabilities', pathParams: {packName?: string}, queryParams: null): Promise<PackXdslPromotionCodeCapabilities>;
  /**
  isEmailAvailable operations
  Check if the email address is available for service creation
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable', pathParams: {packName?: string}, queryParams: {email?: string}): Promise<boolean>;
  /**
  Exchange account service
  Get this object properties
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeLite/services/{domain}', pathParams: {packName?: string, domain?: string}, queryParams: null): Promise<PackXdslExchangeLiteService>;
  /**
  List the pack.xdsl.ExchangeLiteService objects
  Exchange lite services
  **/
  public get(path: '/pack/xdsl/{packName}/exchangeLite/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  domains operations
  List the available domains for the Email Pro service
  **/
  public get(path: '/pack/xdsl/{packName}/emailPro/options/domains', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  isEmailAvailable operations
  Check if the given email address is available for an Email Pro activation
  **/
  public get(path: '/pack/xdsl/{packName}/emailPro/options/isEmailAvailable', pathParams: {packName?: string}, queryParams: {email?: string}): Promise<boolean>;
  /**
  List the pack.xdsl.EmailProService objects
  List the Email Pro services
  **/
  public get(path: '/pack/xdsl/{packName}/emailPro/services', pathParams: {packName?: string}, queryParams: null): Promise<string[]>;
  /**
  Operations about the PACK service
  List available services
  **/
  public get(path: '/pack/xdsl', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathspackxdslGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Pack of xDSL services
  Alter this object properties
  **/
  public put(path: '/pack/xdsl/{packName}', pathParams: {packName?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/pack/xdsl/{packName}/serviceInfos', pathParams: {packName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathspackxdslPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the pack.xdsl.SiteBuilderFullService objects
  Activate a sitebuilder full service
  **/
  public post(path: '/pack/xdsl/{packName}/siteBuilderFull/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  List the pack.xdsl.ExchangeIndividual objects
  Activate an exchange service
  **/
  public post(path: '/pack/xdsl/{packName}/exchangeIndividual/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  List the pack.xdsl.VoipEcoFaxService objects
  Activate a voicefax service
  **/
  public post(path: '/pack/xdsl/{packName}/voipEcofax/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  resiliate operations
  Resiliate the pack
  **/
  public post(path: '/pack/xdsl/{packName}/resiliate', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslResiliationFollowUpDetail>;
  /**
  move operations
  Move the access to another address
  **/
  public post(path: '/pack/xdsl/{packName}/addressMove/move', pathParams: {packName?: string}, bodyParams: null): Promise<XdslAsyncTask<Number>>;
  /**
  eligibility operations
  Eligibility to move the access
  **/
  public post(path: '/pack/xdsl/{packName}/addressMove/eligibility', pathParams: {packName?: string}, bodyParams: null): Promise<XdslAsyncTask<PackXdslAddressMoveEligibility>>;
  /**
  List the pack.xdsl.DomainService objects
  Activate a domain service
  **/
  public post(path: '/pack/xdsl/{packName}/domain/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  List the pack.xdsl.HostedEmailService objects
  Activate an hosted email service
  **/
  public post(path: '/pack/xdsl/{packName}/hostedEmail/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  customShippingAddress operations
  Create a new shippingId to be used for voipLine service creation
  **/
  public post(path: '/pack/xdsl/{packName}/voipLine/options/customShippingAddress', pathParams: {packName?: string}, bodyParams: null): Promise<Number>;
  /**
  List the pack.xdsl.VoipLineService objects
  Activate a voip line service
  **/
  public post(path: '/pack/xdsl/{packName}/voipLine/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslVoIPLineOrder>;
  /**
  cancelResiliation operations
  Cancel the ongoing resiliation
  **/
  public post(path: '/pack/xdsl/{packName}/cancelResiliation', pathParams: {packName?: string}, bodyParams: null): Promise<void>;
  /**
  List the pack.xdsl.SiteBuilderStartService objects
  Activate a sitebuilder full service
  **/
  public post(path: '/pack/xdsl/{packName}/siteBuilderStart/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  servicesToDelete operations
  Calculate services to delete with new offer and options
  **/
  public post(path: '/pack/xdsl/{packName}/migration/servicesToDelete', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslMigrationSubServiceToDelete[]>;
  /**
  offers operations
  Get the possibilities of migration offers available
  **/
  public post(path: '/pack/xdsl/{packName}/migration/offers', pathParams: {packName?: string}, bodyParams: null): Promise<XdslAsyncTask<PackXdslMigrationMigrationOfferResponse>>;
  /**
  migrate operations
  Migrate to the selected offer
  **/
  public post(path: '/pack/xdsl/{packName}/migration/migrate', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  generate operations
  Creates a task to generate a new promotion code
  **/
  public post(path: '/pack/xdsl/{packName}/promotionCode/generate', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/pack/xdsl/{packName}/changeContact', pathParams: {packName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  List the pack.xdsl.ExchangeLiteService objects
  Activate a exchange lite service
  **/
  public post(path: '/pack/xdsl/{packName}/exchangeLite/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  /**
  List the pack.xdsl.EmailProService objects
  Activate an Email Pro service
  **/
  public post(path: '/pack/xdsl/{packName}/emailPro/services', pathParams: {packName?: string}, bodyParams: null): Promise<PackXdslTask>;
  public post(path: PathspackxdslPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

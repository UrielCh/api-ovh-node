import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit: string;
  /**
   */
  value: T;
}
/**
 * A value set tagged with its unit
 */
export interface ComplexTypeUnitAndValues<T> {
  /**
   */
  unit: string;
  /**
   */
  values: T[];
}
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * Ip versions
 */
export type CoreTypesIpVersionEnum = 'v4' | 'v6';
/**
 * Current object state
 */
export type EmailProObjectStateEnum = 'creating' | 'deleting' | 'ok' | 'reopening' | 'suspended' | 'suspending' | 'unknown';
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
  currencyCode: OrderCurrencyCodeEnum;
  /**
   */
  text: string;
  /**
   */
  value: number;
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
/**
 * Spare properties
 */
export interface SpareXdslXdslSpare {
  /**
   * Modem brand model
   *
   */
  brand: string;
  /**
   * Mac address
   *
   */
  macAddress: string;
}
/**
 * Contact informations structure
 */
export interface TelephonyContact {
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
   * Contact country
   *
   */
  country?: CoreTypesCountryEnum;
  /**
   */
  email?: string;
  /**
   * Contact firstname
   *
   */
  firstname?: string;
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
   * Contact phone
   *
   */
  phone?: string;
  /**
   * Contact zip
   *
   */
  zip?: string;
}
/**
 * Current Return Merchandise Authorisation
 */
export interface TelephonyRma {
  /**
   * Is the RMA cancellable?
   *
   */
  cancellable: boolean;
  /**
   * Creation datetime of the return merchandise authorisation ticket
   *
   */
  creationDatetime: string;
  /**
   * Merchandise reference
   *
   */
  equipmentReference: string;
  /**
   * Return merchandise authorisation identifier
   *
   */
  id: string;
  /**
   * New merchandise brand in case of exchange
   *
   */
  newMerchandise?: string;
  /**
   * Offer type of the new merchandise in case of exchange
   *
   */
  offerTypeNew?: TelephonyRmaOfferTypeEnum;
  /**
   * Offer type of the return merchandise
   *
   */
  offerTypeOld: TelephonyRmaOfferTypeEnum;
  /**
   * Process determined for merchandise returned
   *
   */
  process: TelephonyRmaReplaceTypeEnum;
  /**
   * Reception datetime of the return merchandise authorisation ticket
   *
   */
  receptionDatetime?: string;
  /**
   * Contact information related to the delivery shipping in case of exchange
   *
   */
  shippingContact: TelephonyContact;
  /**
   * Return merchandise authorisation step
   *
   */
  status: TelephonyRmaStatusEnum;
  /**
   * Indicates the current status of the RMA with a list of steps
   *
   */
  steps: TelephonyRmaStep[];
  /**
   * Termination datetime of the return merchandise authorisation ticket
   *
   */
  terminationDatetime?: string;
  /**
   * Typology process of merchandise return
   *
   */
  type: TelephonyRmaTypeEnum;
}
/**
 * Return merchandise authorisation offer type
 */
export type TelephonyRmaOfferTypeEnum = 'deposit' | 'loan' | 'purchase';
/**
 * Return merchandise authorisation type
 */
export type TelephonyRmaReplaceTypeEnum = 'changePhone' | 'phoneRestitution' | 'undefined';
/**
 * Return merchandise authorisation step
 */
export type TelephonyRmaStatusEnum = 'closed' | 'open' | 'received';
/**
 * Informations related to the current RMA step status
 */
export interface TelephonyRmaStep {
  /**
   * A brief description of the step
   *
   */
  description: string;
  /**
   * The date when this step was done
   *
   */
  doneDate?: string;
  /**
   * Additional informations about the step
   *
   */
  infos?: string;
  /**
   * The name of the RMA step
   *
   */
  name: TelephonyRmaStepNameEnum;
  /**
   * Status of the step
   *
   */
  status: TelephonyRmaStepStatusEnum;
}
/**
 * RMA step names
 */
export type TelephonyRmaStepNameEnum = 'dispatchJustification' | 'equipmentSending' | 'equipmentTesting' | 'opening' | 'parcelReception' | 'parcelValidation' | 'validation';
/**
 * Status of the RMA step
 */
export type TelephonyRmaStepStatusEnum = 'done' | 'todo';
/**
 * Return merchandise authorisation type
 */
export type TelephonyRmaTypeEnum = 'after sale equipment service exchange' | 'after sale phone service exchange' | 'equipment restitution' | 'fast exchange' | 'old merchandise reception before exchange' | 'phone restitution' | 'resends due to shipping lost by the carrier' | 'resends due to shipping not withdraw' | 'specific return merchandise authorisation' | 'termination' | 'unknown';
/**
 * XDSL Access
 */
export interface XdslAccess {
  /**
   */
  accessName: string;
  /**
   */
  accessType: XdslDslTypeEnum;
  /**
   */
  address: XdslAddressDetail;
  /**
   */
  capabilities: XdslAccessCapabilities;
  /**
   */
  description: string;
  /**
   */
  ipv6Enabled: boolean;
  /**
   * Rate limit on the LNS in kbps - Only available if canApplyLnsRateLimit capability is set to true - Must be a multiple of 64 - Min value 64 / Max value 100032
   *
   */
  lnsRateLimit?: number;
  /**
   * Whether or not this access is monitored
   *
   */
  monitoring: boolean;
  /**
   */
  nra: string;
  /**
   */
  pairsNumber: number;
  /**
   */
  role: XdslAccessRoleEnum;
  /**
   */
  status: XdslAccessStatusEnum;
}
/**
 * Describe the capabilities of the Access
 */
export interface XdslAccessCapabilities {
  /**
   */
  canApplyLnsRateLimit: boolean;
  /**
   */
  canChangeDslamProfile: boolean;
  /**
   */
  canChangeLns: boolean;
  /**
   */
  canGetRadiusConnectionLogs: boolean;
  /**
   */
  canResetDslamPort: boolean;
  /**
   */
  hasDslamPort: boolean;
}
/**
 * Diagnostic of the access
 */
export interface XdslAccessDiagnostic {
  /**
   * Available tests for this access
   *
   */
  capabilities: XdslAccessDiagnosticCapabilities;
  /**
   * Datime of the diagnostic
   *
   */
  diagnosticTime: string;
  /**
   * Is there an ongoing genericIncident on the access ?
   *
   */
  incident?: boolean;
  /**
   * Is the access active on its primary or secondary LNS
   *
   */
  isActiveOnLns?: boolean;
  /**
   * Is the modem connected ?
   *
   */
  isModemConnected?: boolean;
  /**
   * Test details by line
   *
   */
  lineDetails?: XdslLineDiagnostic[];
  /**
   * Does the access ping ?
   *
   */
  ping?: boolean;
  /**
   * Remaining number of diagnostic for this access
   *
   */
  remaining: number;
}
/**
 * Describe the capabilities of the access diagnostic
 */
export interface XdslAccessDiagnosticCapabilities {
  /**
   */
  incident: boolean;
  /**
   */
  isActiveOnLns: boolean;
  /**
   */
  isModemConnected: boolean;
  /**
   */
  lineTest: boolean;
  /**
   */
  ping: boolean;
  /**
   */
  proposedProfileId: boolean;
  /**
   */
  sync: boolean;
}
/**
 * Available access roles
 */
export type XdslAccessRoleEnum = 'backup' | 'main';
/**
 * Various types of statisctics available for the access.
 */
export type XdslAccessStatisticsTypeEnum = 'ping' | 'traffic:download' | 'traffic:upload';
/**
 * Status of the access
 */
export type XdslAccessStatusEnum = 'active' | 'cancelled' | 'close' | 'deleting' | 'doing' | 'migration' | 'slamming' | 'upgradeOffer';
/**
 * All components of an address
 */
export interface XdslAddressDetail {
  /**
   */
  building?: string;
  /**
   */
  city: string;
  /**
   */
  door?: string;
  /**
   */
  firstName: string;
  /**
   */
  floor?: string;
  /**
   * Identifier of the city
   *
   */
  inseeCode: string;
  /**
   */
  lastName: string;
  /**
   */
  numberStreet: string;
  /**
   */
  residence?: string;
  /**
   * Identifier of the street
   *
   */
  rivoliCode: string;
  /**
   */
  stairs?: string;
  /**
   */
  street: string;
  /**
   */
  zipCode: string;
}
/**
 * Spams detected from xdsl access
 */
export interface XdslAntiSpam {
  /**
   * Detection date
   *
   */
  date: string;
  /**
   * IP which spam
   *
   */
  ip: string;
  /**
   * Last spam detection date
   *
   */
  lastSpamDetected: string;
  /**
   * AntiSpam status
   *
   */
  status: XdslAntiSpamAntiSpamStatusEnum;
}
/**
 * Async task
 */
export interface XdslAsyncTask<T> {
  /**
   * Error
   *
   */
  error?: string;
  /**
   * Result of the call
   *
   */
  result?: T;
  /**
   * Status of the call
   *
   */
  status: XdslAsyncTaskStatusEnum;
}
/**
 * Async task array
 */
export interface XdslAsyncTaskArray<T> {
  /**
   * Error
   *
   */
  error?: string;
  /**
   * Result of the call
   *
   */
  result?: T[];
  /**
   * Status of the call
   *
   */
  status: XdslAsyncTaskStatusEnum;
}
/**
 * AsyncTask status
 */
export type XdslAsyncTaskStatusEnum = 'error' | 'ok' | 'pending';
/**
 * DHCP Configuration of the Modem
 */
export interface XdslDHCP {
  /**
   * The default gateway to be given to the clients
   *
   */
  defaultGateway: string;
  /**
   * Name of the DHCP
   *
   */
  dhcpName: string;
  /**
   * Domain name provided to the clients
   *
   */
  domainName: string;
  /**
   * Last address of the pool assigned by the DHCP
   *
   */
  endAddress: string;
  /**
   * Lease time in seconds of client assigned address (-1 means infinite)
   *
   */
  leaseTime: number;
  /**
   * Primary DNS servers to be given to the clients
   *
   */
  primaryDNS: string;
  /**
   * Secondary DNS servers to be given to the clients
   *
   */
  secondaryDNS?: string;
  /**
   * State of the DHCP server of the modem
   *
   */
  serverEnabled: boolean;
  /**
   * First address of the pool assigned by the DHCP
   *
   */
  startAddress: string;
  /**
   * The subnet mask given to the clients
   *
   */
  subnetMask: string;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: number;
}
/**
 * DHCP Static Address
 */
export interface XdslDHCPStaticAddress {
  /**
   * The IP address of the device
   *
   */
  IPAddress: string;
  /**
   * The MAC address of the device
   *
   */
  MACAddress: string;
  /**
   * Name of the DHCP Static lease
   *
   */
  name?: string;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: number;
}
/**
 * Deconsolidation of the line.
 */
export type XdslDeconsolidationEnum = 'createNeighbour' | 'creation' | 'creationNeighbour' | 'partial' | 'total';
/**
 * Show the deconsolidation terms
 */
export interface XdslDeconsolidationTerms {
  /**
   * Duration of month the access will be engaged
   *
   */
  engagement: number;
  /**
   * New abo price after the deconsolidation
   *
   */
  monthlyPrice: OrderPrice;
  /**
   * Price to pay
   *
   */
  price: OrderPrice;
}
/**
 * Describe device informations of a Modem
 */
export interface XdslDeviceModemInfo {
  /**
   * Modem brand
   *
   */
  brand: string;
  /**
   * Modem ip address
   *
   */
  ip: string;
  /**
   * Time of last information refresh
   *
   */
  lastUpdate: string;
  /**
   * Modem mac address
   *
   */
  macAddress: string;
  /**
   * Modem type of model
   *
   */
  model: string;
  /**
   * Organizational Unique Identifier
   *
   */
  oui: string;
  /**
   * Protocol used for connection
   *
   */
  overEthernet?: string;
  /**
   * login used for ppp protocol
   *
   */
  pppLogin?: string;
  /**
   * Modem serial key
   *
   */
  serial: string;
  /**
   * Software Version
   *
   */
  softVersion: string;
}
/**
 * Possible DSL technologies
 */
export type XdslDslTypeEnum = 'adsl' | 'ftth' | 'sdsl' | 'vdsl';
/**
 * Profile on the DSLAM
 */
export interface XdslDslamLineProfile {
  /**
   */
  id: number;
  /**
   */
  isCurrent: boolean;
  /**
   */
  name: string;
}
/**
 * Information about the port on the DSLAM
 */
export interface XdslDslamPort {
  /**
   * Last time the port lost the synchronization
   *
   */
  lastDesyncDate?: string;
  /**
   * Last time the port synchronized
   *
   */
  lastSyncDate?: string;
  /**
   */
  profile?: XdslDslamLineProfile;
  /**
   */
  status: XdslDslamPortStatusEnum;
}
/**
 * A message log from the DSLAM
 */
export interface XdslDslamPortLog {
  /**
   */
  date: string;
  /**
   * The last time this message occured
   *
   */
  lastOccurrenceDate: string;
  /**
   */
  message: string;
  /**
   * The number of times this message occured between date and lastOccurrenceDate
   *
   */
  numberOfOccurrences: number;
}
/**
 * Different states of a DSLAM port
 */
export type XdslDslamPortStatusEnum = 'activated' | 'deactivated' | 'outofsync';
/**
 * Informations about the extra IP range during address move
 */
export interface XdslExtraIpRangeMove {
  /**
   * Date of the migration
   *
   */
  date: string;
  /**
   * IP range to migrate
   *
   */
  ipRange: string;
  /**
   * Access where the IP range will be moved to
   *
   */
  moveTo: string;
}
/**
 * Maximum time needed to repair a landline
 */
export type XdslFaultRepairTimeEnum = '4HNO' | '4HO' | 'NORMAL';
/**
 * Gtr of the line.
 */
export type XdslGtrEnum = '4hno' | '4ho' | 'none';
/**
 * Informations about an IP address
 */
export interface XdslIP {
  /**
   */
  dnsList: string[];
  /**
   * The IP address
   *
   */
  ip: string;
  /**
   */
  range: number;
  /**
   * status of the IP
   *
   */
  status: XdslIpStatusEnum;
  /**
   */
  version: CoreTypesIpVersionEnum;
}
/**
 * Detected incident
 */
export interface XdslIncident {
  /**
   */
  comment: string;
  /**
   * Estimated start date
   *
   */
  creationDate: string;
  /**
   * Department list
   *
   */
  departments: string[];
  /**
   * Estimated end date
   *
   */
  endDate?: string;
  /**
   * ID of the incident
   *
   */
  id: number;
  /**
   * NRA list
   *
   */
  nra: string[];
  /**
   * Operator
   *
   */
  operators: XdslOperatorTypeEnum[];
  /**
   * Task ID on travaux.ovh.com
   *
   */
  taskId?: number;
}
/**
 * Status of an IP.
 */
export type XdslIpStatusEnum = 'active' | 'close' | 'toDelete';
/**
 * LAN Configuration of the Modem
 */
export interface XdslLAN {
  /**
   * The IP address of the LAN interface of the modem
   *
   */
  IPAddress: string;
  /**
   * How the LAN interface of the modem is gettig its address
   *
   */
  addressingType: XdslXdslModemConfigAddressingTypeEnum;
  /**
   * Name of the LAN
   *
   */
  lanName: string;
  /**
   * The subnet mask of the LAN interface of the modem
   *
   */
  subnetMask: string;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: number;
}
/**
 * Infos about a Landline at the concentration point
 */
export interface XdslLandlineConcentrationPoint {
  /**
   * Identifier of the head of the cable from the MDF
   *
   */
  lineHead: string;
  /**
   * Identifier of the section at the lineHead
   *
   */
  lineInitialSection: number;
  /**
   * Identifier of the pair at the lineHead's lineInitialSection
   *
   */
  lineInitialSectionPair: number;
}
/**
 * Information about the physical copper line
 */
export interface XdslLine {
  /**
   * Data to identify the line at the concentration point
   *
   */
  concentrationPoint?: XdslLandlineConcentrationPoint;
  /**
   */
  deconsolidation: XdslDeconsolidationEnum;
  /**
   * True if the line is directly wired on the DSLAM
   *
   */
  directDistribution?: boolean;
  /**
   * Distance in meters from the DSLAM
   *
   */
  distance: number;
  /**
   */
  faultRepairTime: XdslFaultRepairTimeEnum;
  /**
   * Detailed information about the sections between the DSLAM and the telephone jack
   *
   */
  lineSectionsLength: XdslLineSectionLength[];
  /**
   * Mitigation of the line in dB
   *
   */
  mitigation: number;
  /**
   * The number of the line
   *
   */
  number: string;
  /**
   * The number used to place the order. Null if the same as the current number.
   *
   */
  originalNumber?: string;
  /**
   * Whether the line number has been ported to OVH, to be used with VoIP service
   *
   */
  portability: boolean;
  /**
   * The download synchronisation on the DSLAM in Kbps
   *
   */
  syncDown?: number;
  /**
   * The upload synchronisation on the DSLAM in Kbps
   *
   */
  syncUp?: number;
}
/**
 * Detailed line tests
 */
export interface XdslLineDiagnostic {
  /**
   */
  lineTest?: XdslLineTestEnum;
  /**
   */
  lineTestTime?: string;
  /**
   */
  number: string;
  /**
   */
  proposedProfileId?: number;
  /**
   */
  sync: boolean;
}
/**
 * 
 */
export interface XdslLineSectionLength {
  /**
   * The diameter of this section in millimeters
   *
   */
  diameter: number;
  /**
   * The length of this section in meters
   *
   */
  length: number;
}
/**
 * Various types of statisctics available for the line.
 */
export type XdslLineStatisticsTypeEnum = 'attenuation:download' | 'attenuation:upload' | 'snr:download' | 'snr:upload' | 'synchronization:download' | 'synchronization:upload';
/**
 * Line tests results
 */
export type XdslLineTestEnum = 'actionPending' | 'customerSideProblem' | 'error' | 'noProblem' | 'ovhSideProblem';
/**
 * Modem
 */
export interface XdslModem {
  /**
   */
  brandName: string;
  /**
   */
  capabilities: XdslModemCapabilities;
  /**
   * IP Address of the DMZ (To modify or delete the DMZ IP on the modem, a re-configuration of your modem has to be made, your configuration will be maintained, but you will lose your connection a few minutes)
   *
   */
  dmzIP?: string;
  /**
   * Level of the FireWall on the modem
   *
   */
  easyFirewallLevel?: XdslXdslModemConfigEasyFirewallLevelEnum;
  /**
   * Whether or not the modem supports IPv6
   *
   */
  ipv6Support: boolean;
  /**
   * Whether or not the modem is in bridge mode. To pass from bridge mode to routed mode, a reset is necessary. If the modem is managedByOvh, the bridge state will be kept after a reset
   *
   */
  isBridged: boolean;
  /**
   * Last time the modem made a CWMP request to the Auto Configuration Server
   *
   */
  lastCwmpRequestDate?: string;
  /**
   */
  macAddress: string;
  /**
   * Whether or not the user can configure his modem via OVH Interface (will lock telnet and local HTTP configuration page)
   *
   */
  managedByOvh: boolean;
  /**
   */
  model: string;
  /**
   * Size of the Maximum Transmission Unit on the modem's interfaces
   *
   */
  mtuSize?: XdslXdslModemConfigMTUSizeEnum;
}
/**
 * Describe the capabilities of the Modem
 */
export interface XdslModemCapabilities {
  /**
   */
  canBeManagedByOvh: boolean;
  /**
   */
  canChangeBridgeMode: boolean;
  /**
   */
  canChangeDHCP: boolean;
  /**
   */
  canChangeDMZ: boolean;
  /**
   */
  canChangeEasyFirewallLevel: boolean;
  /**
   */
  canChangeFirmware: boolean;
  /**
   */
  canChangeLAN: boolean;
  /**
   */
  canChangeManagement: boolean;
  /**
   */
  canChangeMtu: boolean;
  /**
   */
  canChangePortMapping: boolean;
  /**
   */
  canChangeWLAN: boolean;
  /**
   */
  canReboot: boolean;
  /**
   */
  canReconfigureVoip: boolean;
  /**
   */
  canRefreshConnectedDevices: boolean;
  /**
   */
  canReset: boolean;
}
/**
 * Describe general information of a Modem
 */
export interface XdslModemInfo {
  /**
   * Hardware information
   *
   */
  device: XdslDeviceModemInfo;
  /**
   * Modem Connection information
   *
   */
  statistics: XdslStatsModemInfo;
}
/**
 * Defines where and how the notifications will be sent
 */
export interface XdslMonitoringNotification {
  /**
   * Whether or not to allow notifications for generic incidents
   *
   */
  allowIncident: boolean;
  /**
   * The number of seconds the access has to be down to trigger an alert
   *
   */
  downThreshold: number;
  /**
   * The e-mail address, if type is mail
   *
   */
  email?: string;
  /**
   */
  enabled: boolean;
  /**
   * The frenquency to send reminders when the access is still down
   *
   */
  frequency: XdslMonitoringNotificationsFrequencyEnum;
  /**
   */
  id: number;
  /**
   * The phone number, if type is sms
   *
   */
  phone?: string;
  /**
   * The SMS account which will be debited for each sent SMS, if the type is sms
   *
   */
  smsAccount?: string;
  /**
   */
  type: XdslMonitoringNotificationsTypeEnum;
}
/**
 * Operators
 */
export type XdslOperatorTypeEnum = 'collect' | 'kosc' | 'ovh';
/**
 * Scheduled action before the next renewal of the service
 */
export interface XdslPendingAction {
  /**
   */
  action: string;
  /**
   */
  dateTodo: string;
}
/**
 * Port Mappings
 */
export interface XdslPortMapping {
  /**
   * An ip which will access to the defined rule. Default : no restriction applied
   *
   */
  allowedRemoteIp?: string;
  /**
   * Description of the Port Mapping
   *
   */
  description?: string;
  /**
   * The last port of the interval on the External Client that will get the connections
   *
   */
  externalPortEnd?: number;
  /**
   * External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005
   *
   */
  externalPortStart: number;
  /**
   * ID of the port mapping entry
   *
   */
  id: number;
  /**
   * The IP address of the destination of the packets
   *
   */
  internalClient: string;
  /**
   * The port on the Internal Client that will get the connections
   *
   */
  internalPort: number;
  /**
   * Name of the port mapping entry
   *
   */
  name: string;
  /**
   * Protocol of the port mapping (TCP / UDP)
   *
   */
  protocol: XdslXdslModemConfigProtocolTypeEnum;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: number;
}
/**
 * Log entry of an auth attempt to the radius server
 */
export interface XdslRadiusConnectionLog {
  /**
   */
  date: string;
  /**
   */
  login: string;
  /**
   */
  message: string;
  /**
   */
  state: string;
}
/**
 * Details about the resiliation
 */
export interface XdslResiliationFollowUpDetail {
  /**
   * Date when the resiliation will take effect
   *
   */
  dateTodo: string;
  /**
   * If the customer needs to return his modem
   *
   */
  needModemReturn: boolean;
  /**
   * Date when the resiliation was done
   *
   */
  registrationDate: string;
  /**
   * Status of the resiliation
   *
   */
  status: string;
}
/**
 * Reason of a resiliation
 */
export type XdslResiliationReasonEnum = 'addressMove' | 'billingProblems' | 'cessationOfActivity' | 'changeOfTerms' | 'ftth' | 'goToCompetitor' | 'other' | 'technicalProblems';
/**
 * Information about the reason for the resiliation
 */
export interface XdslResiliationSurvey {
  /**
   * Comment about this resiliation
   *
   */
  comment?: string;
  /**
   * Type of reason for the resiliation
   *
   */
  type: XdslResiliationReasonEnum;
}
/**
 * Show the resiliation terms
 */
export interface XdslResiliationTerms {
  /**
   * Price due at resiliationDate
   *
   */
  due: OrderPrice;
  /**
   * Date until which the customer is engaged
   *
   */
  engageDate?: string;
  /**
   * Minumum resiliationDate
   *
   */
  minResiliationDate: string;
  /**
   * Date at which the access will be resiliated
   *
   */
  resiliationDate: string;
  /**
   * List of available resiliation reasons
   *
   */
  resiliationReasons: XdslResiliationReasonEnum[];
}
/**
 * Status of the service
 */
export type XdslServiceStatusEnum = 'disabled' | 'enabled';
/**
 * Periods for statistics.
 */
export type XdslStatisticsPeriodEnum = 'daily' | 'monthly' | 'preview' | 'weekly' | 'yearly';
/**
 * Describe statistics information of a Modem
 */
export interface XdslStatsModemInfo {
  /**
   * Connection uptime
   *
   */
  connectionUptime: number;
  /**
   * Amount of CRC error detected
   *
   */
  crcError: number;
  /**
   * Modem uptime
   *
   */
  deviceUptime: number;
  /**
   * Downstream attenuation
   *
   */
  downstreamAttenuation: number;
  /**
   * Downstream margin
   *
   */
  downstreamMargin: number;
  /**
   * Downstream synchronization
   *
   */
  downstreamSync: number;
  /**
   * Time of last refresh
   *
   */
  lastUpdate: string;
  /**
   * Line modulation used
   *
   */
  modulation: string;
  /**
   * Count from last refresh in seconds
   *
   */
  quarterHourStart: number;
  /**
   * Synchronization uptime
   *
   */
  syncUptime: number;
  /**
   * Upstream attenuation
   *
   */
  upstreamAttenuation: number;
  /**
   * Upstream margin
   *
   */
  upstreamMargin: number;
  /**
   * Upstream synchronization
   *
   */
  upstreamSync: number;
}
/**
 * Describes the current status of a task
 */
export interface XdslTask {
  /**
   */
  function: string;
  /**
   */
  id: number;
  /**
   */
  status: XdslTaskStatusEnum;
  /**
   * Date when the action will start
   *
   */
  todoDate: string;
  /**
   */
  updateDate: string;
}
/**
 * Status of a task.
 */
export type XdslTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'problem' | 'todo';
/**
 * Modem Template
 */
export interface XdslTemplateModem {
  /**
   * List of DHCP for this template
   *
   */
  DHCP: XdslTemplateModemDHCP[];
  /**
   * List of LAN for this template
   *
   */
  LAN: XdslTemplateModemLAN[];
  /**
   * List of WLAN for this template
   *
   */
  WLAN: XdslTemplateModemWLAN[];
  /**
   * Parameters capabilities. Lists what can be applied from this template
   *
   */
  capabilities: string;
  /**
   * Template creation date
   *
   */
  creationDate: string;
  /**
   * IP Address of the DMZ
   *
   */
  dmzIP?: string;
  /**
   * Size of the Maximum Transmission Unit on the modem's interfaces
   *
   */
  mtuSize?: XdslXdslModemConfigMTUSizeEnum;
  /**
   * Name of the Modem Template
   *
   */
  name: string;
  /**
   * Do not apply these parameters from template. You can use parametersCapabilities to know availability
   *
   */
  parametersToIgnore?: XdslTemplateModemParametersToIgnore;
  /**
   * List of PortMapping for this template
   *
   */
  portMapping: XdslTemplateModemPortMapping[];
}
/**
 * A value associated to a timestamp
 */
export interface XdslTimestampAndValue {
  /**
   */
  timestamp: number;
  /**
   */
  value?: number;
}
/**
 * WLAN Configuration of the Modem
 */
export interface XdslWLAN {
  /**
   * Service Set Identifier of the WLAN interface
   *
   */
  SSID: string;
  /**
   * Hide or show the Wifi
   *
   */
  SSIDAdvertisementEnabled: boolean;
  /**
   * Indicate if frequencies 2.4GHz and 5GHz are agregated
   *
   */
  bandSteering: boolean;
  /**
   * Choice of a channel (When chosen, channelMode is set to Manual)
   *
   */
  channel: number;
  /**
   * How the channel is chosen (Auto / Manual)
   *
   */
  channelMode: XdslXdslModemConfigChannelModeEnum;
  /**
   * Wifi state
   *
   */
  enabled: boolean;
  /**
   * Frequency (2.4GHz | 5GHz)
   *
   */
  frequency: XdslXdslModemConfigFrequencyEnum;
  /**
   * Indicate if it is normal access wifi or guest wifi
   *
   */
  guest: boolean;
  /**
   * WPA or WEP key
   *
   */
  securityKey: string;
  /**
   * Security (None | WEP | WPA | WPA2 | WPAandWPA2)
   *
   */
  securityType: XdslXdslModemConfigSecurityTypeEnum;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: number;
  /**
   * Name of the Wifi
   *
   */
  wifiName: string;
}
/**
 * Frequency of WLAN
 */
export type XdslWLANFrequencyEnum = '2.4GHz' | '5GHz';
/**
 * AntiSpam status
 */
export type XdslAntiSpamAntiSpamStatusEnum = 'block' | 'done' | 'new' | 'unblock' | 'warn';
/**
 * List of evidences
 */
export interface XdslAntiSpamEvidencesInfo {
  /**
   * AsyncTask detailed error
   *
   */
  error?: string;
  /**
   * Table with evidences stored on PCS
   *
   */
  result?: XdslAntiSpamEvidencesInfoDetail[];
  /**
   * AsyncTask status
   *
   */
  status: XdslAntiSpamEvidencesInfoStatusEnum;
}
/**
 * detail on evidences stored on PCS
 */
export interface XdslAntiSpamEvidencesInfoDetail {
  /**
   * File date on the PCS
   *
   */
  date: string;
  /**
   * File name on the PCS
   *
   */
  filename: string;
  /**
   * Temporary URL to access file
   *
   */
  url: string;
}
/**
 * Evidences AsyncTask status
 */
export type XdslAntiSpamEvidencesInfoStatusEnum = 'error' | 'ok' | 'pending';
/**
 * Connected Device
 */
export interface XdslConnectedDevice {
  /**
   * The state of this device on the modem
   *
   */
  active: boolean;
  /**
   * How did the device got its IP address
   *
   */
  addressSource: XdslXdslModemConfigConnectedDeviceAddressSourceEnum;
  /**
   * Host name given by the device to the modem
   *
   */
  hostName: string;
  /**
   * The date time of the last update of thoses informations
   *
   */
  informationDate: string;
  /**
   * On which interface is connected the device
   *
   */
  interfaceType: string;
  /**
   * The IP address of the device
   *
   */
  ipAddress: string;
  /**
   * The remaining time in seconds of the DHCP lease of this device (-1 means infinite)
   *
   */
  leaseTimeRemaining: number;
  /**
   * MAC address of the device
   *
   */
  macAddress: string;
}
/**
 * Represents an address
 */
export interface XdslEligibilityAddress {
  /**
   * Name of the building, if any
   *
   */
  building?: string;
  /**
   * Informations about the city
   *
   */
  city: XdslEligibilityCity;
  /**
   * Identifier of the door, if any
   *
   */
  door?: string;
  /**
   * Identifier of the floor, if any
   *
   */
  floor?: string;
  /**
   * Identifier of the historical operator landmark, if any
   *
   */
  logo?: string;
  /**
   * Owner of the line, this information can be restricted
   *
   */
  owner?: string;
  /**
   * Name of the residence, if any
   *
   */
  residence?: string;
  /**
   * Identifier of the stair, if any
   *
   */
  stair?: string;
  /**
   * Informations about the street
   *
   */
  street?: XdslEligibilityStreet;
  /**
   * Number on the street
   *
   */
  streetNumber?: string;
}
/**
 * Details of a Building
 */
export interface XdslEligibilityBuilding {
  /**
   * Building name
   *
   */
  name: string;
  /**
   * Building NRO (Optical main distribution frame)
   *
   */
  nro: string;
  /**
   * Identifier which refer to a building uniquely
   *
   */
  reference: string;
  /**
   * Building type
   *
   */
  type: XdslEligibilityBuildingTypeEnum;
}
/**
 * Type of building
 */
export type XdslEligibilityBuildingTypeEnum = 'BUILDING' | 'HOUSE';
/**
 * Represent a city
 */
export interface XdslEligibilityCity {
  /**
   * INSEE code of the city
   *
   */
  inseeCode: string;
  /**
   * Locality (subset of a city)
   *
   */
  locality?: string;
  /**
   * Name of the city
   *
   */
  name: string;
  /**
   * Zip code of the city
   *
   */
  zipCode: string;
}
/**
 * A message and its code
 */
export interface XdslEligibilityCodeAndMessage {
  /**
   * A code identifying the message
   *
   */
  code: string;
  /**
   * A message
   *
   */
  message: string;
}
/**
 * Eligibility result
 */
export interface XdslEligibilityEligibility {
  /**
   * The line address
   *
   */
  address?: XdslEligibilityAddress;
  /**
   * The line characteristics
   *
   */
  characteristics: XdslEligibilityLineCharacteristics;
  /**
   * The eligibility endpoint type
   *
   */
  endpoint: XdslEligibilityLineEndpointEnum;
  /**
   * The eligibility uuid
   *
   */
  id: string;
  /**
   * The line infos
   *
   */
  infos: XdslEligibilityLineInfos;
  /**
   * The eligible offers list
   *
   */
  offers: XdslEligibilityOffer[];
  /**
   * Portability capabilities
   *
   */
  portability: XdslEligibilityPortability;
}
/**
 * Fiber Eligibility result
 */
export interface XdslEligibilityFiberEligibility {
  /**
   * Eligibility UUID
   *
   */
  id: string;
  /**
   * List of fiber offer
   *
   */
  offers: XdslEligibilityFiberOffer[];
}
/**
 * A fiber offer
 */
export interface XdslEligibilityFiberOffer {
  /**
   * The availibility date if the fiber is planned but not available yet
   *
   */
  availibilityDate?: string;
  /**
   * Estimated or guaranteed download rate in Mbit/s, if applicable
   *
   */
  downloadRate?: number;
  /**
   * Are you eligible to this offer ?
   *
   */
  eligible: boolean;
  /**
   * Allowed GTR
   *
   */
  gtr: XdslGtrEnum[];
  /**
   * Is the rate guaranteed ?
   *
   */
  guaranteed: boolean;
  /**
   * Offer label
   *
   */
  label: string;
  /**
   * Reason of non eligibility, if applicable
   *
   */
  reason?: string;
  /**
   * Technology
   *
   */
  type: XdslDslTypeEnum;
  /**
   * Estimated or guaranteed upload rate in Mbit/s, if applicable
   *
   */
  uploadRate?: number;
}
/**
 * Details of a FiberStreet
 */
export interface XdslEligibilityFiberStreet {
  /**
   * Identifier which refer to a street uniquely
   *
   */
  streetCode: string;
  /**
   * Street name
   *
   */
  streetName: string;
}
/**
 * Status of a landline
 */
export type XdslEligibilityLandlineStatusEnum = 'active' | 'inactive';
/**
 * a line
 */
export interface XdslEligibilityLine {
  /**
   * The line address
   *
   */
  address: XdslEligibilityAddress;
  /**
   * The contact name
   *
   */
  contactName: string;
  /**
   * The line number
   *
   */
  lineNumber: string;
  /**
   * The line status
   *
   */
  lineStatus: XdslEligibilityLandlineStatusEnum;
}
/**
 * The characteristics of a line
 */
export interface XdslEligibilityLineCharacteristics {
  /**
   * Details of line calibration
   *
   */
  calibration: XdslEligibilityLineSectionCalibration[];
  /**
   * Number of free pairs proposed ondesaturation of copper lines
   *
   */
  desaturationFreePairs: number;
  /**
   * Distance to the NRA in meters
   *
   */
  distance: number;
  /**
   * Number of free pairs
   *
   */
  freePairs: number;
  /**
   * The estimated mitigation for ADSL and VDSL technologies
   *
   */
  mitigation: number;
  /**
   * The estimated mitigation for SDSL technology
   *
   */
  mitigationSdsl: number;
  /**
   * The NRA
   *
   */
  nra: string;
}
/**
 * Type of the endpoint for the eligibility
 */
export type XdslEligibilityLineEndpointEnum = 'address' | 'line';
/**
 * The line infos
 */
export interface XdslEligibilityLineInfos {
  /**
   * Weither we are in create neighbor case or not
   *
   */
  createNeighbour: boolean;
  /**
   * The line number, if endpoint is number
   *
   */
  lineNumber?: string;
  /**
   * The line status, if endpoint is number
   *
   */
  lineStatus?: XdslEligibilityLandlineStatusEnum;
  /**
   * Is the number unlisted ?
   *
   */
  unlistedNumber: boolean;
}
/**
 * A line section calibration detail
 */
export interface XdslEligibilityLineSectionCalibration {
  /**
   * The section diameter in millimeters
   *
   */
  diameter: number;
  /**
   * The section length in meters
   *
   */
  length: number;
}
/**
 * Represents a time slot for a meeting
 */
export interface XdslEligibilityMeetingSlot {
  /**
   * The end of the time slot
   *
   */
  endDate: string;
  /**
   * The beginning of the time slot
   *
   */
  startDate: string;
  /**
   * An opaque string that represents an intervention unit
   *
   */
  uiCode: string;
}
/**
 * List of available meeting time slots
 */
export interface XdslEligibilityMeetingSlots {
  /**
   * Whether or not it is possible to book a fake meeting
   *
   */
  canBookFakeMeeting: boolean;
  /**
   * A time slot
   *
   */
  meetingSlots: XdslEligibilityMeetingSlot[];
}
/**
 * An offer
 */
export interface XdslEligibilityOffer {
  /**
   * Is copper lines desaturation needed and available for this offer ?
   *
   */
  desaturation?: boolean;
  /**
   * Estimated or guaranteed download rate in Mbit/s, if applicable
   *
   */
  downloadRate?: number;
  /**
   * Allowed GTR (none, 4ho : 4 work hours, 4hno : 4 unworked hours)
   *
   */
  gtr: XdslGtrEnum[];
  /**
   * Is the rate guaranteed ?
   *
   */
  guaranteed: boolean;
  /**
   * Offer label
   *
   */
  label: string;
  /**
   * Number of pairs to use
   *
   */
  pairs?: number;
  /**
   * Provider, if applicable
   *
   */
  provider?: XdslEligibilityProviderEnum;
  /**
   * DEPRECATED Please use downloadRate instead /DEPRECATED - Estimated or guaranteed rate in Mbit/s, if applicable
   *
   */
  rate?: number;
  /**
   * DSL technology
   *
   */
  type: XdslDslTypeEnum;
  /**
   * Allowed unbundling methods
   *
   */
  unbundling?: XdslDeconsolidationEnum[];
  /**
   * Estimated or guaranteed upload rate in Mbit/s, if applicable
   *
   */
  uploadRate?: number;
}
/**
 * Eligibility of the portability of the line number
 */
export interface XdslEligibilityPortability {
  /**
   * The reason(s) of the negative portability eligibility
   *
   */
  comments: XdslEligibilityCodeAndMessage[];
  /**
   * Whether or not it is possible to port the line number. If false, commentList contains the reason(s)
   *
   */
  eligible: boolean;
  /**
   * Whether or not the portability is possible under condition. If true, warningList contains the reason(s)
   *
   */
  underCondition: boolean;
  /**
   * The special condition(s) of the portability
   *
   */
  warnings: XdslEligibilityCodeAndMessage[];
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
  name: string;
  /**
   * RIVOLI identifier of the street
   *
   */
  rivoliCode: string;
}
/**
 * Task Struct
 */
export interface XdslEmailProTask {
  /**
   * Finished date of the task
   *
   */
  finishDate?: string;
  /**
   * Function of the task
   *
   */
  function: string;
  /**
   * Status of the task
   *
   */
  status: XdslEmailProTaskStatusEnum;
  /**
   * Todo date of the task
   *
   */
  todoDate: string;
}
/**
 * Status of an Email Pro task.
 */
export type XdslEmailProTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Customer answers for line diagnostic
 */
export interface XdslLineDiagnosticAnswers {
  /**
   * bandwidth unit for proof.ovh.net test values
   *
   */
  bandwidthTestUnit?: XdslLineDiagnosticBandwidthTestUnitEnum;
  /**
   * comment will contains all informations needed for intervention and about your access problem
   *
   */
  comment?: string;
  /**
   * customer knows that he can be charged (150 euros HT) if he is responsible for the problem or if tests have not been done correctly ?
   *
   */
  conditionsAccepted?: boolean;
  /**
   * customer's phone number
   *
   */
  contactPhone?: string;
  /**
   * approximative datetime of problem happening
   *
   */
  datetimeOfAppearance?: string;
  /**
   * bandwidth download value on proof.ovh.net test
   *
   */
  downloadBandwidthTest?: number;
  /**
   * afternoon closing informations or time for the site
   *
   */
  endAfternoonHours?: string;
  /**
   * morning closing informations or time for the site
   *
   */
  endMorningHours?: string;
  /**
   * indicate if customer wants to be informed by sms
   *
   */
  followBySms?: boolean;
  /**
   * Has modem kept his synchronization during line port reset ?
   *
   */
  hasModemKeptSynchronization?: boolean;
  /**
   * id of appointment chosen ("possibleValues" contains choices list with id)
   *
   */
  idAppointment?: number;
  /**
   * is non-professional site ?
   *
   */
  individualSite?: boolean;
  /**
   * Is modem synchronized ? (whatever internet connection)
   *
   */
  modemIsSynchronized?: boolean;
  /**
   * modem mac address
   *
   */
  modemMac?: string;
  /**
   * Modem still synchronized ? Please check once again.
   *
   */
  modemStillSynchronized?: boolean;
  /**
   * modem brand and reference
   *
   */
  modemType?: string;
  /**
   * Ovh ticket name or ticket ID, only if a ticket is already opened for this problem
   *
   */
  ovhTicket?: string;
  /**
   * Problem Type on DSL connection
   *
   */
  problemType?: XdslLineDiagnosticProblemTypeEnum;
  /**
   * is access problem solved ?
   *
   */
  resolvedAfterTests?: boolean;
  /**
   * is secure site ?
   *
   */
  secureSite?: boolean;
  /**
   * Has customer several internal connections ? (on the same place)
   *
   */
  severalInternetConnections?: boolean;
  /**
   * days or period where site access is not possible
   *
   */
  siteClosedDays?: string;
  /**
   * digicode for site entrance
   *
   */
  siteDigicode?: string;
  /**
   * site opening hours or informations
   *
   */
  siteOpening?: string;
  /**
   * afternoon opening informations or time for the site
   *
   */
  startAfternoonHours?: string;
  /**
   * morning opening informations or time for the site
   *
   */
  startMorningHours?: string;
  /**
   * bandwidth upload value on proof.ovh.net test
   *
   */
  uploadBandwidthTest?: number;
}
/**
 * bandwidth unit for proof.ovh.net test values
 */
export type XdslLineDiagnosticBandwidthTestUnitEnum = 'Kbps' | 'Mbps';
/**
 * Informations directly get on DSLAM or Modem
 */
export interface XdslLineDiagnosticConnectionInformations {
  /**
   * Amount of CRC error detected
   *
   */
  crcError?: number;
  /**
   * Downstream attenuation
   *
   */
  downstreamAttenuation?: number;
  /**
   * Downstream margin
   *
   */
  downstreamMargin?: number;
  /**
   * Downstream synchronization
   *
   */
  downstreamSync?: number;
  /**
   * Modem interface name
   *
   */
  ifName?: string;
  /**
   * Profile on the DSLAM
   *
   */
  profile?: string;
  /**
   * Upstream attenuation
   *
   */
  upstreamAttenuation?: number;
  /**
   * Upstream margin
   *
   */
  upstreamMargin?: number;
  /**
   * Upstream synchronization
   *
   */
  upstreamSync?: number;
}
/**
 * Customer action to do
 */
export interface XdslLineDiagnosticCustomerActionToDo {
  /**
   * action's description
   *
   */
  description: string;
  /**
   * action's name
   *
   */
  name: XdslLineDiagnosticCustomerActionsEnum;
}
/**
 * Customer possible actions
 */
export type XdslLineDiagnosticCustomerActionsEnum = 'bePreparedToCheckModemSynchronization' | 'changeDslFilterAndPlugInDti' | 'changeExtensionCable' | 'changeProfile' | 'checkConnectionCable' | 'checkConnectionLoginAndParameters' | 'checkFilter' | 'connectModemToOtherPlugs' | 'neutralTest' | 'rebootModem' | 'resetModem' | 'unplugEveryModems' | 'unplugModem';
/**
 * Diagnostic status and informations
 */
export interface XdslLineDiagnosticDiagnostic {
  /**
   * Contains informations about diagnostic (questions, previous answers, actions to do, line details, selt result...)
   *
   */
  data: XdslLineDiagnosticDiagnosticData;
  /**
   * Detected fault type
   *
   */
  faultType: XdslLineDiagnosticFaultTypeEnum;
  /**
   * Diagnostic id
   *
   */
  id: number;
  /**
   * Diagnostic status
   *
   */
  status: XdslLineDiagnosticDiagnosticStatusEnum;
}
/**
 * Diagnostic data and informations
 */
export interface XdslLineDiagnosticDiagnosticData {
  /**
   * List of actions already done by customer
   *
   */
  actionsDone: XdslLineDiagnosticCustomerActionsEnum[];
  /**
   * List of actions that must be done by customer
   *
   */
  actionsToDo: XdslLineDiagnosticCustomerActionToDo[];
  /**
   * Previous customer answers
   *
   */
  answers: XdslLineDiagnosticAnswers;
  /**
   * Diagnostic comment. Can be update during any diagnostic step
   *
   */
  comment?: string;
  /**
   * Diagnostic creation date
   *
   */
  creationDate: string;
  /**
   * End of diagnostic date. Will be null until problem totally identified
   *
   */
  diagnosticDoneDate?: string;
  /**
   * Error message
   *
   */
  error: string;
  /**
   * Last diagnostic update date
   *
   */
  lastUpdate: string;
  /**
   * Informations about line
   *
   */
  lineDetails: XdslLineDiagnosticLineDetails;
  /**
   * Current or last robot action
   *
   */
  robotAction?: XdslLineDiagnosticRobotActionsEnum;
  /**
   * SELT test result
   *
   */
  seltTest: XdslLineDiagnosticSeltResult;
  /**
   * Diagnostic timeout in minutes. Any action restart timeout
   *
   */
  timeout: number;
  /**
   * List of questions that must be answered by customer
   *
   */
  toAnswer: XdslLineDiagnosticQuestion[];
}
/**
 * Diagnostic status possible values
 */
export type XdslLineDiagnosticDiagnosticStatusEnum = 'cancelled' | 'connectionProblem' | 'genericIncidentPending' | 'haveToConnectModemOnTheRightPlug' | 'init' | 'interventionRequested' | 'noBandwidthFault' | 'noProblemAnymore' | 'noSyncFaultDiagnosticRequired' | 'problem' | 'resolvedAfterTests' | 'sleeping' | 'validationRefused' | 'waitingHuman' | 'waitingRobot' | 'waitingValidation';
/**
 * Line diagnostic fault type
 */
export type XdslLineDiagnosticFaultTypeEnum = 'alignment' | 'noSync' | 'syncLossOrLowBandwidth' | 'unknown';
/**
 * Theoretical line capabilities
 */
export interface XdslLineDiagnosticLineCapabilities {
  /**
   * Theoretical Downstream synchronization
   *
   */
  down?: number;
  /**
   * Theoretical line mitigation
   *
   */
  mitigation?: string;
  /**
   * Theoretical ping
   *
   */
  ping?: number;
  /**
   * Theoretical Upstream synchronization
   *
   */
  up?: number;
}
/**
 * Line informations
 */
export interface XdslLineDiagnosticLineDetails {
  /**
   * access name
   *
   */
  accessName: string;
  /**
   * Access IP ping or not
   *
   */
  accessPing?: boolean;
  /**
   * address of the access
   *
   */
  address?: string;
  /**
   * informations directly get on DSLAM or Modem
   *
   */
  connectionInfo?: XdslLineDiagnosticConnectionInformations;
  /**
   * customer phone number for contact
   *
   */
  contactPhone?: string;
  /**
   * custom access description
   *
   */
  description?: string;
  /**
   * DSLAM is synchronized or not
   *
   */
  dslamIsSynchronized?: boolean;
  /**
   * is GTR access or not
   *
   */
  gtr: boolean;
  /**
   * Line length in meters
   *
   */
  length: number;
  /**
   * Theoretical line capabilities
   *
   */
  lineCapabilities?: XdslLineDiagnosticLineCapabilities;
  /**
   * dsl connexion type for the line
   *
   */
  lineType: XdslDslTypeEnum;
  /**
   * NRA name
   *
   */
  nra?: string;
  /**
   * line number
   *
   */
  number: string;
  /**
   * provider for internet connexion
   *
   */
  operator: XdslLineDiagnosticProviderEnum;
  /**
   * cables sections details
   *
   */
  sections?: XdslLineDiagnosticSection[];
}
/**
 * possible value for specific answer
 */
export interface XdslLineDiagnosticPossibleValue {
  /**
   * answer id
   *
   */
  id?: number;
  /**
   * answer choice string
   *
   */
  label?: string;
  /**
   * answer choice value
   *
   */
  value?: string;
}
/**
 * Possible customer questions
 */
export type XdslLineDiagnosticProblemTypeEnum = 'lowBandwidth' | 'syncLoss';
/**
 * The providers for xdsl access
 */
export type XdslLineDiagnosticProviderEnum = 'axione' | 'ft' | 'ftBySfr' | 'kosc' | 'koscDeg' | 'ovh' | 'sfr';
/**
 * Question to customer
 */
export interface XdslLineDiagnosticQuestion {
  /**
   * question description
   *
   */
  defaultValue?: string;
  /**
   * question description
   *
   */
  description: string;
  /**
   * available values for enum
   *
   */
  enumValues?: string[];
  /**
   * question name
   *
   */
  name: XdslLineDiagnosticQuestionsEnum;
  /**
   * list of possible values
   *
   */
  possibleValues?: XdslLineDiagnosticPossibleValue[];
  /**
   * is a required question
   *
   */
  required?: boolean;
  /**
   * answer type
   *
   */
  type: string;
}
/**
 * Possible customer questions
 */
export type XdslLineDiagnosticQuestionsEnum = 'bandwidthTestUnit' | 'comment' | 'conditionsAccepted' | 'contactPhone' | 'datetimeOfAppearance' | 'downloadBandwidthTest' | 'endAfternoonHours' | 'endMorningHours' | 'followBySms' | 'hasModemKeptSynchronization' | 'idAppointment' | 'individualSite' | 'modemIsSynchronized' | 'modemMac' | 'modemStillSynchronized' | 'modemType' | 'ovhTicket' | 'problemType' | 'resolvedAfterTests' | 'secureSite' | 'severalInternetConnections' | 'siteClosedDays' | 'siteDigicode' | 'siteOpening' | 'startAfternoonHours' | 'startMorningHours' | 'uploadBandwidthTest';
/**
 * Diagnostic robot possible actions
 */
export type XdslLineDiagnosticRobotActionsEnum = 'alignmentLockTest' | 'alignmentResetTest' | 'alignmentTestResult' | 'checkCustomerTicket' | 'checkIfAccessPing' | 'checkIfResolvedAfterConnectionTests' | 'checkIfResolvedAfterInstallationCheck' | 'checkIfResolvedAfterTests' | 'checkIfSeveralConnections' | 'checkInstallation' | 'checkProblem' | 'checkSynchronizationWithoutOtherModems' | 'customerPrelocChecks' | 'findProblem' | 'installationCheck' | 'lockUnlock' | 'needToRequestMonitoring' | 'needToRequestOperatorIntervention' | 'needToRequestOvhIntervention' | 'requestMonitoring' | 'requestOperatorIntervention' | 'requestOvhIntervention' | 'seltTest';
/**
 * Cables section details
 */
export interface XdslLineDiagnosticSection {
  /**
   * cables length in meters
   *
   */
  length: number;
  /**
   * cables section in millimeters
   *
   */
  section: number;
}
/**
 * Possible SELT test prelocalizations
 */
export type XdslLineDiagnosticSeltPrelocEnum = 'CUST' | 'DSLAM' | 'LINE' | 'RE';
/**
 * Customer answers for line diagnostic
 */
export interface XdslLineDiagnosticSeltResult {
  /**
   * SELT test running date
   *
   */
  date?: string;
  /**
   * Distance of the problem identified on the line (by SELT test), from NRA to customer
   *
   */
  distance?: number;
  /**
   * Prelocalization of the problem
   *
   */
  preloc?: XdslLineDiagnosticSeltPrelocEnum;
  /**
   * Problem type identified by SELT test
   *
   */
  state?: XdslLineDiagnosticSeltStateEnum;
  /**
   * SELT test status
   *
   */
  status?: XdslLineDiagnosticSeltStatusEnum;
}
/**
 * Possible SELT test states
 */
export type XdslLineDiagnosticSeltStateEnum = 'open' | 'short' | 'synced' | 'unknown';
/**
 * Possible SELT test status
 */
export type XdslLineDiagnosticSeltStatusEnum = 'failed' | 'notAvailable' | 'ok';
/**
 * Frequency between notifications.
 */
export type XdslMonitoringNotificationsFrequencyEnum = '1h' | '5m' | '6h' | 'once';
/**
 * Type of notification.
 */
export type XdslMonitoringNotificationsTypeEnum = 'mail' | 'sms';
/**
 * The duration units
 */
export type XdslOrderFollowupDurationUnitEnum = 'day' | 'hour' | 'minute';
/**
 * A step of the order process
 */
export interface XdslOrderFollowupStep {
  /**
   */
  comments: string[];
  /**
   */
  doneDate?: string;
  /**
   */
  durationUnit: XdslOrderFollowupDurationUnitEnum;
  /**
   */
  expectedDuration: number;
  /**
   */
  name: XdslOrderFollowupStepNameEnum;
  /**
   */
  status: XdslOrderFollowupStepStatusEnum;
}
/**
 * The status of an order step
 */
export type XdslOrderFollowupStepNameEnum = 'accessIsOperational' | 'checkInfrastructure' | 'configureAccessOnOVH' | 'orderPayed' | 'orderReceived' | 'orderTreatment' | 'sendModem' | 'sendOrderToProvider' | 'setupCustomerPremisesEquipment' | 'waitingForProviderInstallReport' | 'waitingForWithdrawalPeriodToBeOver';
/**
 * The status of an order step
 */
export type XdslOrderFollowupStepStatusEnum = 'doing' | 'done' | 'error' | 'todo' | 'waitingCustomer';
/**
 * DHCP Configuration for Modem Template
 */
export interface XdslTemplateModemDHCP {
  /**
   * The default gateway to be given to the clients
   *
   */
  defaultGateway: string;
  /**
   * Name of the DHCP
   *
   */
  dhcpName: string;
  /**
   * Domain name provided to the clients
   *
   */
  domainName: string;
  /**
   * Last address of the pool assigned by the DHCP
   *
   */
  endAddress: string;
  /**
   * Lease time in seconds of client assigned address (-1 means infinite)
   *
   */
  leaseTime: number;
  /**
   * Primary DNS servers to be given to the clients
   *
   */
  primaryDNS: string;
  /**
   * Secondary DNS servers to be given to the clients
   *
   */
  secondaryDNS?: string;
  /**
   * State of the DHCP server of the modem
   *
   */
  serverEnabled: boolean;
  /**
   * First address of the pool assigned by the DHCP
   *
   */
  startAddress: string;
  /**
   * The subnet mask given to the clients
   *
   */
  subnetMask: string;
}
/**
 * LAN Configuration for Modem Template
 */
export interface XdslTemplateModemLAN {
  /**
   * The IP address of the LAN interface of the modem
   *
   */
  IPAddress: string;
  /**
   * How the LAN interface of the modem is getting its address
   *
   */
  addressingType: XdslXdslModemConfigAddressingTypeEnum;
  /**
   * Name of the LAN
   *
   */
  lanName: string;
  /**
   * The subnet mask of the LAN interface of the modem
   *
   */
  subnetMask: string;
}
/**
 * Parameters and values to ignore when apply modem template configuration
 */
export interface XdslTemplateModemParametersToIgnore {
  /**
   * Ignore LAN and DHCP configurations
   *
   */
  LANandDHCP?: boolean;
  /**
   * WLAN names list to ignore. Ignore only listed WLAN
   *
   */
  WLANList?: string[];
  /**
   * Ignore DMZ configuration
   *
   */
  dmzIP?: boolean;
  /**
   * Ignore MTU Size value
   *
   */
  mtuSize?: boolean;
  /**
   * PortMapping names list to ignore. Ignore only listed portMapping
   *
   */
  portMappingList?: string[];
}
/**
 * PortMapping Configuration for Modem Template
 */
export interface XdslTemplateModemPortMapping {
  /**
   * An ip which will access to the defined rule. Default : no restriction applied
   *
   */
  allowedRemoteIp?: string;
  /**
   * Description of the Port Mapping
   *
   */
  description?: string;
  /**
   * The last port of the interval on the External Client that will get the connections
   *
   */
  externalPortEnd?: number;
  /**
   * External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005
   *
   */
  externalPortStart: number;
  /**
   * The IP address of the destination of the packets
   *
   */
  internalClient: string;
  /**
   * The port on the Internal Client that will get the connections
   *
   */
  internalPort: number;
  /**
   * Name of the port mapping entry
   *
   */
  name: string;
  /**
   * Protocol of the port mapping (TCP / UDP)
   *
   */
  protocol: XdslXdslModemConfigProtocolTypeEnum;
}
/**
 * Type of WLAN security protection
 */
export type XdslTemplateModemSecurityTypeEnum = 'None' | 'WPA' | 'WPA2' | 'WPAandWPA2';
/**
 * WLAN Configuration for Modem Template
 */
export interface XdslTemplateModemWLAN {
  /**
   * Service Set Identifier of the WLAN interface
   *
   */
  SSID: string;
  /**
   * Control if Wifi is discoverable or hidden
   *
   */
  SSIDAdvertisementEnabled: boolean;
  /**
   * Indicate if frequencies 2.4GHz and 5GHz are agregated
   *
   */
  bandSteering: boolean;
  /**
   * Channel number (Useless if channelMode is set to Auto)
   *
   */
  channel: number;
  /**
   * How the channel is chosen (Auto / Manual)
   *
   */
  channelMode: XdslXdslModemConfigChannelModeEnum;
  /**
   * Wifi state
   *
   */
  enabled: boolean;
  /**
   * Frequency (2.4GHz | 5GHz)
   *
   */
  frequency: XdslXdslModemConfigFrequencyEnum;
  /**
   * Indicate if it is normal access wifi or guest wifi
   *
   */
  guest: boolean;
  /**
   * Encrypted WLAN passphrase
   *
   */
  securityKey: string;
  /**
   * Security (None | WPA | WPA2 | WPAandWPA2)
   *
   */
  securityType: XdslTemplateModemSecurityTypeEnum;
  /**
   * Wifi Name
   *
   */
  wifiName: string;
}
/**
 * XDSL Email Pro
 */
export interface XdslXdslEmailPro {
  /**
   * Mailbox usage
   *
   */
  currentUsage: ComplexTypeUnitAndValue<number>;
  /**
   * Account display name
   *
   */
  displayName?: string;
  /**
   * Email domain
   *
   */
  domain: string;
  /**
   * Account first name
   *
   */
  firstName?: string;
  /**
   * Account id
   *
   */
  id: number;
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
   * Account login
   *
   */
  login: string;
  /**
   * Time of account's password last update
   *
   */
  passwordLastUpdate?: string;
  /**
   * Default email for this mailbox
   *
   */
  primaryEmailAddress: string;
  /**
   * Account maximum size
   *
   */
  quota: ComplexTypeUnitAndValue<number>;
  /**
   * Account state
   *
   */
  state: EmailProObjectStateEnum;
  /**
   * Pending tasks for this account
   *
   */
  taskPendingId?: number;
}
/**
 * How the modem gets its LAN IP Address
 */
export type XdslXdslModemConfigAddressingTypeEnum = 'DHCP' | 'Static';
/**
 * How the WiFi channel is selected
 */
export type XdslXdslModemConfigChannelModeEnum = 'Auto' | 'Manual';
/**
 * How did the device got its IP Address
 */
export type XdslXdslModemConfigConnectedDeviceAddressSourceEnum = 'DHCP' | 'Static' | 'Unknown';
/**
 * Level of the Firewall ( BlockAll will block all connections, Normal will block all incoming connections except those in PortMapping and let go all outgoing connections , Disabled will disable all the Firewall and let all incoming or outgoing connections pass through )
 */
export type XdslXdslModemConfigEasyFirewallLevelEnum = 'BlockAll' | 'Disabled' | 'Normal';
/**
 * Modem frequency
 */
export type XdslXdslModemConfigFrequencyEnum = '2.4GHz' | '5GHz';
/**
 * Size of the Maximum Transmission Unit on the modem's interfaces
 */
export type XdslXdslModemConfigMTUSizeEnum = 1432 | 1456 | 1492;
/**
 * Type of protocol for the Port Mapping
 */
export type XdslXdslModemConfigProtocolTypeEnum = 'TCP' | 'UDP';
/**
 * Type of WLAN security protection
 */
export type XdslXdslModemConfigSecurityTypeEnum = 'None' | 'WEP' | 'WPA' | 'WPA2' | 'WPAandWPA2';
type PathsXdslGET = '/xdsl' | 
'/xdsl/eligibility/cities' | 
'/xdsl/eligibility/meetings' | 
'/xdsl/eligibility/streets' | 
'/xdsl/eligibility/test' | 
'/xdsl/email/pro' | 
'/xdsl/email/pro/{email}' | 
'/xdsl/incidents' | 
'/xdsl/incidents/{id}' | 
'/xdsl/spare' | 
'/xdsl/spare/brands' | 
'/xdsl/spare/{spare}' | 
'/xdsl/spare/{spare}/compatibleReplacement' | 
'/xdsl/spare/{spare}/serviceInfos' | 
'/xdsl/templateModem' | 
'/xdsl/templateModem/{name}' | 
'/xdsl/{serviceName}' | 
'/xdsl/{serviceName}/addressMove/extraIpRange' | 
'/xdsl/{serviceName}/antiSpams' | 
'/xdsl/{serviceName}/antiSpams/{ip}' | 
'/xdsl/{serviceName}/antiSpams/{ip}/evidences' | 
'/xdsl/{serviceName}/canCancelResiliation' | 
'/xdsl/{serviceName}/diagnostic' | 
'/xdsl/{serviceName}/incident' | 
'/xdsl/{serviceName}/ips' | 
'/xdsl/{serviceName}/ips/{ip}' | 
'/xdsl/{serviceName}/lines' | 
'/xdsl/{serviceName}/lines/{number}' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort/logs' | 
'/xdsl/{serviceName}/lines/{number}/statistics' | 
'/xdsl/{serviceName}/modem' | 
'/xdsl/{serviceName}/modem/availableWLANChannel' | 
'/xdsl/{serviceName}/modem/blocIp' | 
'/xdsl/{serviceName}/modem/callWaiting' | 
'/xdsl/{serviceName}/modem/connectedDevices' | 
'/xdsl/{serviceName}/modem/connectedDevices/{macAddress}' | 
'/xdsl/{serviceName}/modem/contentSharing' | 
'/xdsl/{serviceName}/modem/firmware' | 
'/xdsl/{serviceName}/modem/firmwareAvailable' | 
'/xdsl/{serviceName}/modem/ftp' | 
'/xdsl/{serviceName}/modem/ipsecAlg' | 
'/xdsl/{serviceName}/modem/lan' | 
'/xdsl/{serviceName}/modem/lan/{lanName}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}' | 
'/xdsl/{serviceName}/modem/portMappings' | 
'/xdsl/{serviceName}/modem/portMappings/{name}' | 
'/xdsl/{serviceName}/modem/sipAlg' | 
'/xdsl/{serviceName}/modem/upnp' | 
'/xdsl/{serviceName}/modem/wifi' | 
'/xdsl/{serviceName}/modem/wifi/{wifiName}' | 
'/xdsl/{serviceName}/monitoringNotifications' | 
'/xdsl/{serviceName}/monitoringNotifications/{id}' | 
'/xdsl/{serviceName}/orderFollowup' | 
'/xdsl/{serviceName}/pendingAction' | 
'/xdsl/{serviceName}/radiusConnectionLogs' | 
'/xdsl/{serviceName}/resiliationFollowup' | 
'/xdsl/{serviceName}/resiliationTerms' | 
'/xdsl/{serviceName}/rma' | 
'/xdsl/{serviceName}/rma/{id}' | 
'/xdsl/{serviceName}/serviceInfos' | 
'/xdsl/{serviceName}/statistics' | 
'/xdsl/{serviceName}/tasks' | 
'/xdsl/{serviceName}/tasks/{id}' | 
'/xdsl/{serviceName}/totalDeconsolidationTerms';

type PathsXdslPUT = '/xdsl/email/pro/{email}' | 
'/xdsl/spare/{spare}/serviceInfos' | 
'/xdsl/templateModem/{name}' | 
'/xdsl/{serviceName}' | 
'/xdsl/{serviceName}/modem' | 
'/xdsl/{serviceName}/modem/lan/{lanName}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}' | 
'/xdsl/{serviceName}/modem/portMappings/{name}' | 
'/xdsl/{serviceName}/modem/wifi/{wifiName}' | 
'/xdsl/{serviceName}/monitoringNotifications/{id}' | 
'/xdsl/{serviceName}/rma/{id}' | 
'/xdsl/{serviceName}/serviceInfos';

type PathsXdslPOST = '/xdsl/eligibility/lines/active' | 
'/xdsl/eligibility/lines/inactive' | 
'/xdsl/eligibility/search/buildings' | 
'/xdsl/eligibility/search/cities' | 
'/xdsl/eligibility/search/fiberStreets' | 
'/xdsl/eligibility/search/streetNumbers' | 
'/xdsl/eligibility/test/address' | 
'/xdsl/eligibility/test/fiber/building' | 
'/xdsl/eligibility/test/line' | 
'/xdsl/email/pro/{email}/changePassword' | 
'/xdsl/spare/{spare}/replace' | 
'/xdsl/spare/{spare}/returnMerchandise' | 
'/xdsl/templateModem' | 
'/xdsl/{serviceName}/addressMove/extraIpRangeMove' | 
'/xdsl/{serviceName}/applyTemplateToModem' | 
'/xdsl/{serviceName}/cancelResiliation' | 
'/xdsl/{serviceName}/changeContact' | 
'/xdsl/{serviceName}/diagnostic' | 
'/xdsl/{serviceName}/ips' | 
'/xdsl/{serviceName}/ipv6' | 
'/xdsl/{serviceName}/lines/{number}/diagnostic/cancel' | 
'/xdsl/{serviceName}/lines/{number}/diagnostic/run' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort/reset' | 
'/xdsl/{serviceName}/modem/blocIp' | 
'/xdsl/{serviceName}/modem/callWaiting' | 
'/xdsl/{serviceName}/modem/contentSharing' | 
'/xdsl/{serviceName}/modem/duplicatePortMappingConfig' | 
'/xdsl/{serviceName}/modem/firmware' | 
'/xdsl/{serviceName}/modem/ftp' | 
'/xdsl/{serviceName}/modem/ipsecAlg' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses' | 
'/xdsl/{serviceName}/modem/portMappings' | 
'/xdsl/{serviceName}/modem/reboot' | 
'/xdsl/{serviceName}/modem/reconfigureVoip' | 
'/xdsl/{serviceName}/modem/refreshConnectedDevices' | 
'/xdsl/{serviceName}/modem/reset' | 
'/xdsl/{serviceName}/modem/resetPortMappingConfig' | 
'/xdsl/{serviceName}/modem/retrieveInfo' | 
'/xdsl/{serviceName}/modem/sipAlg' | 
'/xdsl/{serviceName}/modem/upnp' | 
'/xdsl/{serviceName}/monitoringNotifications' | 
'/xdsl/{serviceName}/requestPPPLoginMail' | 
'/xdsl/{serviceName}/requestTotalDeconsolidation' | 
'/xdsl/{serviceName}/resiliate' | 
'/xdsl/{serviceName}/sendOrderToProvider' | 
'/xdsl/{serviceName}/tasks/{id}/archive' | 
'/xdsl/{serviceName}/updateInvalidOrMissingRio';

type PathsXdslDELETE = '/xdsl/email/pro/{email}' | 
'/xdsl/spare/{spare}' | 
'/xdsl/templateModem/{name}' | 
'/xdsl/{serviceName}/ips/{ip}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}' | 
'/xdsl/{serviceName}/modem/portMappings/{name}' | 
'/xdsl/{serviceName}/monitoringNotifications/{id}' | 
'/xdsl/{serviceName}/rma/{id}';

export class ApiXdsl extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the XDSL service
  List available services
  **/
  public get(path: '/xdsl'): Promise<string[]>;
  /**
  Get the cities from a zipCode
  Get the cities from a zipCode
  **/
  public get(path: '/xdsl/eligibility/cities', params: {zipCode: string}): Promise<XdslEligibilityCity[]>;
  /**
  Search for meeting time slot
  Search for meeting time slot
  **/
  public get(path: '/xdsl/eligibility/meetings', params: {eligibilityId: string, offerLabel: string}): Promise<XdslAsyncTask<XdslEligibilityMeetingSlots>>;
  /**
  Get the streets from a city inseeCode and partial street name
  Get the streets from a city inseeCode and partial street name
  **/
  public get(path: '/xdsl/eligibility/streets', params: {inseeCode: string, partialName: string}): Promise<XdslEligibilityStreet[]>;
  /**
  Get an eligibility by its id
  Get an eligibility by its id
  **/
  public get(path: '/xdsl/eligibility/test', params: {id: string}): Promise<XdslEligibilityEligibility>;
  /**
  Operations about the XDSL service
  List available services
  **/
  public get(path: '/xdsl/email/pro'): Promise<string[]>;
  /**
  XDSL Email Pro
  Get this object properties
  **/
  public get(path: '/xdsl/email/pro/{email}', params: {email: string}): Promise<XdslXdslEmailPro>;
  /**
  List the xdsl.Incident objects
  List of incidents
  **/
  public get(path: '/xdsl/incidents', params: {creationDate?: string, endDate?: string}): Promise<number[]>;
  /**
  Detected incident
  Get this object properties
  **/
  public get(path: '/xdsl/incidents/{id}', params: {id: number}): Promise<XdslIncident>;
  /**
  Operations about the XDSL service
  List available services
  **/
  public get(path: '/xdsl/spare'): Promise<string[]>;
  /**
  Get all available spare brands
  Get all available spare brands
  **/
  public get(path: '/xdsl/spare/brands'): Promise<string[]>;
  /**
  Spare properties
  Get this object properties
  **/
  public get(path: '/xdsl/spare/{spare}', params: {spare: string}): Promise<SpareXdslXdslSpare>;
  /**
  compatibleReplacement operations
  Return the list of brand compatible to be replaced
  **/
  public get(path: '/xdsl/spare/{spare}/compatibleReplacement', params: {spare: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/xdsl/spare/{spare}/serviceInfos', params: {spare: string}): Promise<ServicesService>;
  /**
  List the xdsl.TemplateModem objects
  List of TemplateModem
  **/
  public get(path: '/xdsl/templateModem'): Promise<string[]>;
  /**
  Modem Template
  Get this object properties
  **/
  public get(path: '/xdsl/templateModem/{name}', params: {name: string}): Promise<XdslTemplateModem>;
  /**
  XDSL Access
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}', params: {serviceName: string}): Promise<XdslAccess>;
  /**
  extraIpRange operations
  Informations about the extra IP range during address move
  **/
  public get(path: '/xdsl/{serviceName}/addressMove/extraIpRange', params: {serviceName: string}): Promise<XdslExtraIpRangeMove>;
  /**
  List the xdsl.AntiSpam objects
  List antiSpams for this access
  **/
  public get(path: '/xdsl/{serviceName}/antiSpams', params: {serviceName: string}): Promise<string[]>;
  /**
  Spams detected from xdsl access
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/antiSpams/{ip}', params: {serviceName: string, ip: string}): Promise<XdslAntiSpam>;
  /**
  evidences operations
  List of evidences stored on PCS for this ip
  **/
  public get(path: '/xdsl/{serviceName}/antiSpams/{ip}/evidences', params: {serviceName: string, ip: string}): Promise<XdslAntiSpamEvidencesInfo>;
  /**
  canCancelResiliation operations
  Get information about the ongoing resiliation
  **/
  public get(path: '/xdsl/{serviceName}/canCancelResiliation', params: {serviceName: string}): Promise<boolean>;
  /**
  Diagnostic of the access
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/diagnostic', params: {serviceName: string}): Promise<XdslAccessDiagnostic>;
  /**
  Detected incident
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/incident', params: {serviceName: string}): Promise<XdslIncident>;
  /**
  List the xdsl.IP objects
  List of IPs addresses for this access
  **/
  public get(path: '/xdsl/{serviceName}/ips', params: {serviceName: string}): Promise<string[]>;
  /**
  Informations about an IP address
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/ips/{ip}', params: {serviceName: string, ip: string}): Promise<XdslIP>;
  /**
  List the xdsl.Line objects
  The lines of the access
  **/
  public get(path: '/xdsl/{serviceName}/lines', params: {serviceName: string}): Promise<string[]>;
  /**
  Information about the physical copper line
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}', params: {serviceName: string, number: string}): Promise<XdslLine>;
  /**
  Information about the port on the DSLAM
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort', params: {serviceName: string, number: string}): Promise<XdslDslamPort>;
  /**
  availableProfiles operations
  List all availables profiles for this port
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles', params: {serviceName: string, number: string}): Promise<XdslDslamLineProfile[]>;
  /**
  logs operations
  Get the logs emitted by the DSLAM for this port
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/logs', params: {serviceName: string, number: string, limit: number}): Promise<XdslDslamPortLog[]>;
  /**
  statistics operations
  Get various statistics about the line
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}/statistics', params: {serviceName: string, number: string, period: XdslStatisticsPeriodEnum, type: XdslLineStatisticsTypeEnum}): Promise<ComplexTypeUnitAndValues<XdslTimestampAndValue>>;
  /**
  Modem
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem', params: {serviceName: string}): Promise<XdslModem>;
  /**
  availableWLANChannel operations
  List available WLAN channel for this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/availableWLANChannel', params: {serviceName: string, frequency: XdslWLANFrequencyEnum}): Promise<number[]>;
  /**
  blocIp operations
  Get the status of the Bloc IP on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/blocIp', params: {serviceName: string}): Promise<XdslServiceStatusEnum>;
  /**
  callWaiting operations
  Get the status of callWaiting on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/callWaiting', params: {serviceName: string}): Promise<XdslServiceStatusEnum>;
  /**
  List the xdsl.connectedDevice objects
  List of devices connected on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/connectedDevices', params: {serviceName: string}): Promise<string[]>;
  /**
  Connected Device
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/connectedDevices/{macAddress}', params: {serviceName: string, macAddress: string}): Promise<XdslConnectedDevice>;
  /**
  contentSharing operations
  Get the status of contentSharing on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/contentSharing', params: {serviceName: string}): Promise<XdslServiceStatusEnum>;
  /**
  firmware operations
  Get the firmware version installed on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/firmware', params: {serviceName: string}): Promise<string>;
  /**
  firmwareAvailable operations
  List available firmware for this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/firmwareAvailable', params: {serviceName: string}): Promise<string[]>;
  /**
  ftp operations
  Get the status of ftp service on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/ftp', params: {serviceName: string}): Promise<XdslServiceStatusEnum>;
  /**
  ipsecAlg operations
  Get the status of ipsec alg service on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/ipsecAlg', params: {serviceName: string}): Promise<XdslServiceStatusEnum>;
  /**
  List the xdsl.LAN objects
  List of LANs on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan', params: {serviceName: string}): Promise<string[]>;
  /**
  LAN Configuration of the Modem
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}', params: {serviceName: string, lanName: string}): Promise<XdslLAN>;
  /**
  List the xdsl.DHCP objects
  List of DHCP on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp', params: {serviceName: string, lanName: string}): Promise<string[]>;
  /**
  DHCP Configuration of the Modem
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}', params: {serviceName: string, lanName: string, dhcpName: string}): Promise<XdslDHCP>;
  /**
  List the xdsl.DHCPStaticAddress objects
  List of DHCP Static Address of this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses', params: {serviceName: string, lanName: string, dhcpName: string}): Promise<string[]>;
  /**
  DHCP Static Address
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}', params: {serviceName: string, lanName: string, dhcpName: string, MACAddress: string}): Promise<XdslDHCPStaticAddress>;
  /**
  List the xdsl.PortMapping objects
  List of PortMappings on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/portMappings', params: {serviceName: string}): Promise<string[]>;
  /**
  Port Mappings
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/portMappings/{name}', params: {serviceName: string, name: string}): Promise<XdslPortMapping>;
  /**
  sipAlg operations
  Get the status of sip alg service on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/sipAlg', params: {serviceName: string}): Promise<XdslServiceStatusEnum>;
  /**
  upnp operations
  Get the status of the Upnp on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/upnp', params: {serviceName: string}): Promise<XdslServiceStatusEnum>;
  /**
  List the xdsl.WLAN objects
  List of WLANs on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/wifi', params: {serviceName: string}): Promise<string[]>;
  /**
  WLAN Configuration of the Modem
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}', params: {serviceName: string, wifiName: string}): Promise<XdslWLAN>;
  /**
  List the xdsl.MonitoringNotification objects
  List the notifications for this access
  **/
  public get(path: '/xdsl/{serviceName}/monitoringNotifications', params: {serviceName: string}): Promise<number[]>;
  /**
  Defines where and how the notifications will be sent
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/monitoringNotifications/{id}', params: {serviceName: string, id: number}): Promise<XdslMonitoringNotification>;
  /**
  orderFollowup operations
  Get the status of the order
  **/
  public get(path: '/xdsl/{serviceName}/orderFollowup', params: {serviceName: string}): Promise<XdslOrderFollowupStep[]>;
  /**
  Scheduled action before the next renewal of the service
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/pendingAction', params: {serviceName: string}): Promise<XdslPendingAction>;
  /**
  radiusConnectionLogs operations
  List the radius connection logs
  **/
  public get(path: '/xdsl/{serviceName}/radiusConnectionLogs', params: {serviceName: string}): Promise<XdslRadiusConnectionLog[]>;
  /**
  resiliationFollowup operations
  Get information about the ongoing resiliation
  **/
  public get(path: '/xdsl/{serviceName}/resiliationFollowup', params: {serviceName: string}): Promise<XdslResiliationFollowUpDetail>;
  /**
  resiliationTerms operations
  Get resiliation terms
  **/
  public get(path: '/xdsl/{serviceName}/resiliationTerms', params: {serviceName: string, resiliationDate?: string}): Promise<XdslResiliationTerms>;
  /**
  List the telephony.Rma objects
  Return Merchandise Authorisation associated
  **/
  public get(path: '/xdsl/{serviceName}/rma', params: {serviceName: string}): Promise<string[]>;
  /**
  Current Return Merchandise Authorisation
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/rma/{id}', params: {serviceName: string, id: string}): Promise<TelephonyRma>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  statistics operations
  Get various statistics about this access
  **/
  public get(path: '/xdsl/{serviceName}/statistics', params: {serviceName: string, period: XdslStatisticsPeriodEnum, type: XdslAccessStatisticsTypeEnum}): Promise<ComplexTypeUnitAndValues<XdslTimestampAndValue>>;
  /**
  List the xdsl.Task objects
  Tasks scheduled for this access
  **/
  public get(path: '/xdsl/{serviceName}/tasks', params: {serviceName: string, function?: string, status?: XdslTaskStatusEnum}): Promise<number[]>;
  /**
  Describes the current status of a task
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/tasks/{id}', params: {serviceName: string, id: number}): Promise<XdslTask>;
  /**
  totalDeconsolidationTerms operations
  Give the price to requestTotalDeconsolidation on the access
  **/
  public get(path: '/xdsl/{serviceName}/totalDeconsolidationTerms', params: {serviceName: string}): Promise<XdslDeconsolidationTerms>;
  public get(path: PathsXdslGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  XDSL Email Pro
  Alter this object properties
  **/
  public put(path: '/xdsl/email/pro/{email}', params: {email: string, currentUsage?: ComplexTypeUnitAndValue<number>, displayName?: string, domain?: string, firstName?: string, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, login?: string, passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: ComplexTypeUnitAndValue<number>, state?: EmailProObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/xdsl/spare/{spare}/serviceInfos', params: {spare: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: ServiceRenewType, renewalType?: ServiceRenewalTypeEnum, serviceId?: number, status?: ServiceStateEnum}): Promise<void>;
  /**
  Modem Template
  Alter this object properties
  **/
  public put(path: '/xdsl/templateModem/{name}', params: {name: string, DHCP?: XdslTemplateModemDHCP[], LAN?: XdslTemplateModemLAN[], WLAN?: XdslTemplateModemWLAN[], capabilities?: string, creationDate?: string, dmzIP?: string, mtuSize?: XdslXdslModemConfigMTUSizeEnum, parametersToIgnore?: XdslTemplateModemParametersToIgnore, portMapping?: XdslTemplateModemPortMapping[]}): Promise<void>;
  /**
  XDSL Access
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}', params: {serviceName: string, accessName?: string, accessType?: XdslDslTypeEnum, address?: XdslAddressDetail, capabilities?: XdslAccessCapabilities, description?: string, ipv6Enabled?: boolean, lnsRateLimit?: number, monitoring?: boolean, nra?: string, pairsNumber?: number, role?: XdslAccessRoleEnum, status?: XdslAccessStatusEnum}): Promise<void>;
  /**
  Modem
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem', params: {serviceName: string, brandName?: string, capabilities?: XdslModemCapabilities, dmzIP?: string, easyFirewallLevel?: XdslXdslModemConfigEasyFirewallLevelEnum, ipv6Support?: boolean, isBridged?: boolean, lastCwmpRequestDate?: string, macAddress?: string, managedByOvh?: boolean, model?: string, mtuSize?: XdslXdslModemConfigMTUSizeEnum}): Promise<void>;
  /**
  LAN Configuration of the Modem
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/lan/{lanName}', params: {serviceName: string, lanName: string, IPAddress?: string, addressingType?: XdslXdslModemConfigAddressingTypeEnum, subnetMask?: string, taskId?: number}): Promise<void>;
  /**
  DHCP Configuration of the Modem
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}', params: {serviceName: string, lanName: string, dhcpName: string, defaultGateway?: string, domainName?: string, endAddress?: string, leaseTime?: number, primaryDNS?: string, secondaryDNS?: string, serverEnabled?: boolean, startAddress?: string, subnetMask?: string, taskId?: number}): Promise<void>;
  /**
  DHCP Static Address
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}', params: {serviceName: string, lanName: string, dhcpName: string, MACAddress: string, IPAddress?: string, name?: string, taskId?: number}): Promise<void>;
  /**
  Port Mappings
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/portMappings/{name}', params: {serviceName: string, name: string, allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart?: number, id?: number, internalClient?: string, internalPort?: number, protocol?: XdslXdslModemConfigProtocolTypeEnum, taskId?: number}): Promise<void>;
  /**
  WLAN Configuration of the Modem
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}', params: {serviceName: string, wifiName: string, SSID?: string, SSIDAdvertisementEnabled?: boolean, bandSteering?: boolean, channel?: number, channelMode?: XdslXdslModemConfigChannelModeEnum, enabled?: boolean, frequency?: XdslXdslModemConfigFrequencyEnum, guest?: boolean, securityKey?: string, securityType?: XdslXdslModemConfigSecurityTypeEnum, taskId?: number}): Promise<void>;
  /**
  Defines where and how the notifications will be sent
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/monitoringNotifications/{id}', params: {serviceName: string, id: number, allowIncident?: boolean, downThreshold?: number, email?: string, enabled?: boolean, frequency?: XdslMonitoringNotificationsFrequencyEnum, phone?: string, smsAccount?: string, type?: XdslMonitoringNotificationsTypeEnum}): Promise<void>;
  /**
  Current Return Merchandise Authorisation
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/rma/{id}', params: {serviceName: string, id: string, cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, newMerchandise?: string, offerTypeNew?: TelephonyRmaOfferTypeEnum, offerTypeOld?: TelephonyRmaOfferTypeEnum, process?: TelephonyRmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: TelephonyContact, status?: TelephonyRmaStatusEnum, steps?: TelephonyRmaStep[], terminationDatetime?: string, type?: TelephonyRmaTypeEnum}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: ServiceRenewType, renewalType?: ServiceRenewalTypeEnum, serviceId?: number, status?: ServiceStateEnum}): Promise<void>;
  public put(path: PathsXdslPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Get the active lines at given address
  Get the active lines at given address
  **/
  public post(path: '/xdsl/eligibility/lines/active', params: {city: XdslEligibilityCity, contactName: string, street: XdslEligibilityStreet, streetNumber?: string}): Promise<XdslAsyncTaskArray<XdslEligibilityLine>>;
  /**
  Get the inactive lines at given address
  Get the inactive lines at given address
  **/
  public post(path: '/xdsl/eligibility/lines/inactive', params: {city: XdslEligibilityCity, contactName?: string, street: XdslEligibilityStreet, streetNumber?: string}): Promise<XdslAsyncTaskArray<XdslEligibilityLine>>;
  /**
  Get all buildings for a specific address
  Get all buildings for a specific address
  **/
  public post(path: '/xdsl/eligibility/search/buildings', params: {streetCode: string, streetNumber: string}): Promise<XdslAsyncTaskArray<XdslEligibilityBuilding>>;
  /**
  Get all localities linked to a zip code
  Get all localities linked to a zip code
  **/
  public post(path: '/xdsl/eligibility/search/cities', params: {zipCode: string}): Promise<XdslAsyncTaskArray<XdslEligibilityCity>>;
  /**
  Get all street linked to a locality
  Get all street linked to a locality
  **/
  public post(path: '/xdsl/eligibility/search/fiberStreets', params: {inseeCode: string}): Promise<XdslAsyncTaskArray<XdslEligibilityFiberStreet>>;
  /**
  Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
  Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
  **/
  public post(path: '/xdsl/eligibility/search/streetNumbers', params: {streetCode: string}): Promise<XdslAsyncTaskArray<string>>;
  /**
  Do an eligibility for an address, if no line exist
  Do an eligibility for an address, if no line exist
  **/
  public post(path: '/xdsl/eligibility/test/address', params: {address: XdslEligibilityAddress}): Promise<XdslAsyncTask<XdslEligibilityEligibility>>;
  /**
  Perform a fiber eligibility for a building
  Perform a fiber eligibility for a building
  **/
  public post(path: '/xdsl/eligibility/test/fiber/building', params: {building: string}): Promise<XdslAsyncTask<XdslEligibilityFiberEligibility>>;
  /**
  Do an eligibility for a line
  Do an eligibility for a line
  **/
  public post(path: '/xdsl/eligibility/test/line', params: {lineNumber: string, lineStatus: XdslEligibilityLandlineStatusEnum}): Promise<XdslAsyncTask<XdslEligibilityEligibility>>;
  /**
  changePassword operations
  Change the email password
  **/
  public post(path: '/xdsl/email/pro/{email}/changePassword', params: {email: string, password: string}): Promise<XdslEmailProTask>;
  /**
  replace operations
  Replace the modem by its spare
  **/
  public post(path: '/xdsl/spare/{spare}/replace', params: {spare: string, domain: string}): Promise<void>;
  /**
  returnMerchandise operations
  Return the broken equipment in instantRefund
  **/
  public post(path: '/xdsl/spare/{spare}/returnMerchandise', params: {spare: string}): Promise<void>;
  /**
  List the xdsl.TemplateModem objects
  Create new Modem Template from existing modem
  **/
  public post(path: '/xdsl/templateModem', params: {name: string, serviceName: string}): Promise<XdslTemplateModem>;
  /**
  extraIpRangeMove operations
  Initiate the extra IP range migration
  **/
  public post(path: '/xdsl/{serviceName}/addressMove/extraIpRangeMove', params: {serviceName: string}): Promise<XdslTask>;
  /**
  applyTemplateToModem operations
  Apply TemplateModem to existing Modem
  **/
  public post(path: '/xdsl/{serviceName}/applyTemplateToModem', params: {serviceName: string, templateName: string}): Promise<XdslTask>;
  /**
  cancelResiliation operations
  Cancel the ongoing resiliation
  **/
  public post(path: '/xdsl/{serviceName}/cancelResiliation', params: {serviceName: string}): Promise<void>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/xdsl/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
  Diagnostic of the access
  Run diagnostic on the access
  **/
  public post(path: '/xdsl/{serviceName}/diagnostic', params: {serviceName: string}): Promise<XdslTask>;
  /**
  List the xdsl.IP objects
  Order an extra /29 range of IPv4 addresses
  **/
  public post(path: '/xdsl/{serviceName}/ips', params: {serviceName: string}): Promise<XdslTask>;
  /**
  ipv6 operations
  Change the status of the IPv6 for this access
  **/
  public post(path: '/xdsl/{serviceName}/ipv6', params: {serviceName: string, enabled: boolean}): Promise<XdslTask>;
  /**
  cancel operations
  Cancel line diagnostic if possible
  **/
  public post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/cancel', params: {serviceName: string, number: string}): Promise<void>;
  /**
  run operations
  Update and get advanced diagnostic of the line
  **/
  public post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/run', params: {serviceName: string, number: string, actionsDone?: XdslLineDiagnosticCustomerActionsEnum[], answers?: XdslLineDiagnosticAnswers, faultType: XdslLineDiagnosticFaultTypeEnum}): Promise<XdslLineDiagnosticDiagnostic>;
  /**
  changeProfile operations
  Change the profile of the port
  **/
  public post(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile', params: {serviceName: string, number: string, dslamProfileId: number}): Promise<XdslTask>;
  /**
  reset operations
  Reset the port on the DSLAM
  **/
  public post(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/reset', params: {serviceName: string, number: string}): Promise<XdslTask>;
  /**
  blocIp operations
  Change the status of the Bloc IP on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/blocIp', params: {serviceName: string, status: XdslServiceStatusEnum}): Promise<XdslTask>;
  /**
  callWaiting operations
  Change the status of callWaiting on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/callWaiting', params: {serviceName: string, callWaiting: XdslServiceStatusEnum}): Promise<XdslTask>;
  /**
  contentSharing operations
  Change the status of contentSharing on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/contentSharing', params: {serviceName: string, contentSharing: XdslServiceStatusEnum}): Promise<XdslTask>;
  /**
  duplicatePortMappingConfig operations
  Remove all the current port mapping rules and set the same config as the access given in parameters
  **/
  public post(path: '/xdsl/{serviceName}/modem/duplicatePortMappingConfig', params: {serviceName: string, accessName: string}): Promise<void>;
  /**
  firmware operations
  Launch a task to install target firmware on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/firmware', params: {serviceName: string, firmware: string, todoDate?: string}): Promise<XdslTask>;
  /**
  ftp operations
  Change the status of the ftp service on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/ftp', params: {serviceName: string, ftp: XdslServiceStatusEnum}): Promise<XdslTask>;
  /**
  ipsecAlg operations
  Change the status of the ipsec alg service on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/ipsecAlg', params: {serviceName: string, ipsecAlg: XdslServiceStatusEnum}): Promise<XdslTask>;
  /**
  List the xdsl.DHCPStaticAddress objects
  Add a DHCP static lease
  **/
  public post(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses', params: {serviceName: string, lanName: string, dhcpName: string, IPAddress: string, MACAddress: string, name?: string}): Promise<XdslDHCPStaticAddress>;
  /**
  List the xdsl.PortMapping objects
  Add a port mapping
  **/
  public post(path: '/xdsl/{serviceName}/modem/portMappings', params: {serviceName: string, allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart: number, internalClient: string, internalPort: number, name: string, protocol: XdslXdslModemConfigProtocolTypeEnum}): Promise<XdslPortMapping>;
  /**
  reboot operations
  Reboot the modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/reboot', params: {serviceName: string, todoDate?: string}): Promise<XdslTask>;
  /**
  reconfigureVoip operations
  Reconfigure voip line on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/reconfigureVoip', params: {serviceName: string}): Promise<void>;
  /**
  refreshConnectedDevices operations
  Refresh the list of connected devices on the modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/refreshConnectedDevices', params: {serviceName: string}): Promise<XdslTask>;
  /**
  reset operations
  Reset the modem to its default configuration
  **/
  public post(path: '/xdsl/{serviceName}/modem/reset', params: {serviceName: string, resetOvhConfig?: boolean}): Promise<XdslTask>;
  /**
  resetPortMappingConfig operations
  Remove all the current port mapping rules
  **/
  public post(path: '/xdsl/{serviceName}/modem/resetPortMappingConfig', params: {serviceName: string}): Promise<void>;
  /**
  retrieveInfo operations
  get general Modem information
  **/
  public post(path: '/xdsl/{serviceName}/modem/retrieveInfo', params: {serviceName: string}): Promise<XdslAsyncTask<XdslModemInfo>>;
  /**
  sipAlg operations
  Change the status of the sip alg service on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/sipAlg', params: {serviceName: string, sipAlg: XdslServiceStatusEnum}): Promise<XdslTask>;
  /**
  upnp operations
  Change the status of the Upnp on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/upnp', params: {serviceName: string, upnp: XdslServiceStatusEnum}): Promise<XdslTask>;
  /**
  List the xdsl.MonitoringNotification objects
  Add a notification
  **/
  public post(path: '/xdsl/{serviceName}/monitoringNotifications', params: {serviceName: string, allowIncident?: boolean, downThreshold?: number, email?: string, frequency: XdslMonitoringNotificationsFrequencyEnum, phone?: string, smsAccount?: string, type: XdslMonitoringNotificationsTypeEnum}): Promise<XdslMonitoringNotification>;
  /**
  requestPPPLoginMail operations
  Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin
  **/
  public post(path: '/xdsl/{serviceName}/requestPPPLoginMail', params: {serviceName: string}): Promise<void>;
  /**
  requestTotalDeconsolidation operations
  Switch this access to total deconsolidation
  **/
  public post(path: '/xdsl/{serviceName}/requestTotalDeconsolidation', params: {serviceName: string, noPortability?: boolean, rio?: string}): Promise<XdslTask>;
  /**
  resiliate operations
  Resiliate the access
  **/
  public post(path: '/xdsl/{serviceName}/resiliate', params: {serviceName: string, resiliationDate?: string, resiliationSurvey: XdslResiliationSurvey}): Promise<XdslResiliationFollowUpDetail>;
  /**
  sendOrderToProvider operations
  Unlock order in "waitingCustomer" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider
  **/
  public post(path: '/xdsl/{serviceName}/sendOrderToProvider', params: {serviceName: string}): Promise<void>;
  /**
  archive operations
  Delete the task in problem from the results
  **/
  public post(path: '/xdsl/{serviceName}/tasks/{id}/archive', params: {serviceName: string, id: number}): Promise<void>;
  /**
  updateInvalidOrMissingRio operations
  Update RIO, or disable portability, for order in error because of missing or invalid RIO
  **/
  public post(path: '/xdsl/{serviceName}/updateInvalidOrMissingRio', params: {serviceName: string, relaunchWithoutPortability: boolean, rio?: string}): Promise<void>;
  public post(path: PathsXdslPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  XDSL Email Pro
  Delete the email
  **/
  public delete(path: '/xdsl/email/pro/{email}', params: {email: string}): Promise<void>;
  /**
  Spare properties
  Delete the spare as if it was not belonging to OVH anymore
  **/
  public delete(path: '/xdsl/spare/{spare}', params: {spare: string}): Promise<void>;
  /**
  Modem Template
  Delete this Modem Template
  **/
  public delete(path: '/xdsl/templateModem/{name}', params: {name: string}): Promise<void>;
  /**
  Informations about an IP address
  Stop renewing this extra IPv4 option
  **/
  public delete(path: '/xdsl/{serviceName}/ips/{ip}', params: {serviceName: string, ip: string}): Promise<void>;
  /**
  DHCP Static Address
  Delete this port mapping
  **/
  public delete(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}', params: {serviceName: string, lanName: string, dhcpName: string, MACAddress: string}): Promise<XdslTask>;
  /**
  Port Mappings
  Delete this port mapping
  **/
  public delete(path: '/xdsl/{serviceName}/modem/portMappings/{name}', params: {serviceName: string, name: string}): Promise<XdslTask>;
  /**
  Defines where and how the notifications will be sent
  Delete this notification
  **/
  public delete(path: '/xdsl/{serviceName}/monitoringNotifications/{id}', params: {serviceName: string, id: number}): Promise<void>;
  /**
  Current Return Merchandise Authorisation
  Cancel the rma
  **/
  public delete(path: '/xdsl/{serviceName}/rma/{id}', params: {serviceName: string, id: string}): Promise<void>;
  public delete(path: PathsXdslDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiXdsl;

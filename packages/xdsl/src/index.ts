import { ApiCommon } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
}
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
  text?: string;
  /**
   */
  value?: Number;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
/**
 * Spare properties
 */
export interface SpareXdslXdslSpare {
  /**
   * Mac address
   *
   */
  macAddress?: string;
  /**
   * Modem brand model
   *
   */
  brand?: string;
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
   * Typology process of merchandise return
   *
   */
  type?: TelephonyRmaTypeEnum;
  /**
   * Contact information related to the delivery shipping in case of exchange
   *
   */
  shippingContact?: TelephonyContact;
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
   * Creation datetime of the return merchandise authorisation ticket
   *
   */
  creationDatetime?: Date;
  /**
   * Merchandise reference
   *
   */
  equipmentReference?: string;
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
   * Return merchandise authorisation step
   *
   */
  status?: TelephonyRmaStatusEnum;
  /**
   * Offer type of the return merchandise
   *
   */
  offerTypeOld?: TelephonyRmaOfferTypeEnum;
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
  accessType?: XdslDslTypeEnum;
  /**
   */
  pairsNumber?: Number;
  /**
   */
  address?: XdslAddressDetail;
  /**
   */
  capabilities?: XdslAccessCapabilities;
  /**
   */
  role?: XdslAccessRoleEnum;
  /**
   * Rate limit on the LNS in kbps - Only available if canApplyLnsRateLimit capability is set to true - Must be a multiple of 64 - Min value 64 / Max value 100032
   *
   */
  lnsRateLimit?: Number;
  /**
   */
  accessName?: string;
  /**
   */
  description?: string;
  /**
   */
  ipv6Enabled?: boolean;
  /**
   */
  nra?: string;
  /**
   * Whether or not this access is monitored
   *
   */
  monitoring?: boolean;
  /**
   */
  status?: XdslAccessStatusEnum;
}
/**
 * Describe the capabilities of the Access
 */
export interface XdslAccessCapabilities {
  /**
   */
  canResetDslamPort?: boolean;
  /**
   */
  hasDslamPort?: boolean;
  /**
   */
  canApplyLnsRateLimit?: boolean;
  /**
   */
  canChangeDslamProfile?: boolean;
  /**
   */
  canChangeLns?: boolean;
  /**
   */
  canGetRadiusConnectionLogs?: boolean;
}
/**
 * Diagnostic of the access
 */
export interface XdslAccessDiagnostic {
  /**
   * Available tests for this access
   *
   */
  capabilities?: XdslAccessDiagnosticCapabilities;
  /**
   * Is the modem connected ?
   *
   */
  isModemConnected?: boolean;
  /**
   * Datime of the diagnostic
   *
   */
  diagnosticTime?: Date;
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
   * Is the access active on its primary or secondary LNS
   *
   */
  isActiveOnLns?: boolean;
  /**
   * Is there an ongoing genericIncident on the access ?
   *
   */
  incident?: boolean;
  /**
   * Remaining number of diagnostic for this access
   *
   */
  remaining?: Number;
}
/**
 * Describe the capabilities of the access diagnostic
 */
export interface XdslAccessDiagnosticCapabilities {
  /**
   */
  proposedProfileId?: boolean;
  /**
   */
  isModemConnected?: boolean;
  /**
   */
  ping?: boolean;
  /**
   */
  isActiveOnLns?: boolean;
  /**
   */
  incident?: boolean;
  /**
   */
  sync?: boolean;
  /**
   */
  lineTest?: boolean;
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
  lastName?: string;
  /**
   */
  zipCode?: string;
  /**
   */
  door?: string;
  /**
   */
  numberStreet?: string;
  /**
   */
  city?: string;
  /**
   */
  stairs?: string;
  /**
   * Identifier of the street
   *
   */
  rivoliCode?: string;
  /**
   */
  building?: string;
  /**
   */
  firstName?: string;
  /**
   * Identifier of the city
   *
   */
  inseeCode?: string;
  /**
   */
  street?: string;
  /**
   */
  residence?: string;
  /**
   */
  floor?: string;
}
/**
 * Spams detected from xdsl access
 */
export interface XdslAntiSpam {
  /**
   * Detection date
   *
   */
  date?: Date;
  /**
   * Last spam detection date
   *
   */
  lastSpamDetected?: Date;
  /**
   * IP which spam
   *
   */
  ip?: string;
  /**
   * AntiSpam status
   *
   */
  status?: XdslAntiSpamAntiSpamStatusEnum;
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
 * Async task array
 */
export interface XdslAsyncTaskArray<T> {
  /**
   * Result of the call
   *
   */
  result?: T[];
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
 * DHCP Configuration of the Modem
 */
export interface XdslDHCP {
  /**
   * Name of the DHCP
   *
   */
  dhcpName?: string;
  /**
   * Lease time in seconds of client assigned address (-1 means infinite)
   *
   */
  leaseTime?: Number;
  /**
   * Primary DNS servers to be given to the clients
   *
   */
  primaryDNS?: string;
  /**
   * First address of the pool assigned by the DHCP
   *
   */
  startAddress?: string;
  /**
   * Domain name provided to the clients
   *
   */
  domainName?: string;
  /**
   * Secondary DNS servers to be given to the clients
   *
   */
  secondaryDNS?: string;
  /**
   * The subnet mask given to the clients
   *
   */
  subnetMask?: string;
  /**
   * The default gateway to be given to the clients
   *
   */
  defaultGateway?: string;
  /**
   * Last address of the pool assigned by the DHCP
   *
   */
  endAddress?: string;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: Number;
  /**
   * State of the DHCP server of the modem
   *
   */
  serverEnabled?: boolean;
}
/**
 * DHCP Static Address
 */
export interface XdslDHCPStaticAddress {
  /**
   * The MAC address of the device
   *
   */
  MACAddress?: string;
  /**
   * Name of the DHCP Static lease
   *
   */
  name?: string;
  /**
   * The IP address of the device
   *
   */
  IPAddress?: string;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: Number;
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
  engagement?: Number;
  /**
   * Price to pay
   *
   */
  price?: OrderPrice;
  /**
   * New abo price after the deconsolidation
   *
   */
  monthlyPrice?: OrderPrice;
}
/**
 * Describe device informations of a Modem
 */
export interface XdslDeviceModemInfo {
  /**
   * Software Version
   *
   */
  softVersion?: string;
  /**
   * Modem mac address
   *
   */
  macAddress?: string;
  /**
   * Organizational Unique Identifier
   *
   */
  oui?: string;
  /**
   * Modem serial key
   *
   */
  serial?: string;
  /**
   * login used for ppp protocol
   *
   */
  pppLogin?: string;
  /**
   * Modem ip address
   *
   */
  ip?: string;
  /**
   * Time of last information refresh
   *
   */
  lastUpdate?: Date;
  /**
   * Modem type of model
   *
   */
  model?: string;
  /**
   * Modem brand
   *
   */
  brand?: string;
  /**
   * Protocol used for connection
   *
   */
  overEthernet?: string;
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
  isCurrent?: boolean;
  /**
   */
  name?: string;
  /**
   */
  id?: Number;
}
/**
 * Information about the port on the DSLAM
 */
export interface XdslDslamPort {
  /**
   */
  profile?: XdslDslamLineProfile;
  /**
   * Last time the port lost the synchronization
   *
   */
  lastDesyncDate?: Date;
  /**
   * Last time the port synchronized
   *
   */
  lastSyncDate?: Date;
  /**
   */
  status?: XdslDslamPortStatusEnum;
}
/**
 * A message log from the DSLAM
 */
export interface XdslDslamPortLog {
  /**
   */
  date?: Date;
  /**
   * The number of times this message occured between date and lastOccurrenceDate
   *
   */
  numberOfOccurrences?: Number;
  /**
   * The last time this message occured
   *
   */
  lastOccurrenceDate?: Date;
  /**
   */
  message?: string;
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
  date?: Date;
  /**
   * IP range to migrate
   *
   */
  ipRange?: string;
  /**
   * Access where the IP range will be moved to
   *
   */
  moveTo?: string;
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
   * The IP address
   *
   */
  ip?: string;
  /**
   */
  range?: Number;
  /**
   */
  dnsList?: string[];
  /**
   */
  version?: CoreTypesIpVersionEnum;
  /**
   * status of the IP
   *
   */
  status?: XdslIpStatusEnum;
}
/**
 * Detected incident
 */
export interface XdslIncident {
  /**
   * Operator
   *
   */
  operators?: XdslOperatorTypeEnum[];
  /**
   * Estimated end date
   *
   */
  endDate?: Date;
  /**
   */
  comment?: string;
  /**
   * ID of the incident
   *
   */
  id?: Number;
  /**
   * Department list
   *
   */
  departments?: string[];
  /**
   * Estimated start date
   *
   */
  creationDate?: Date;
  /**
   * NRA list
   *
   */
  nra?: string[];
  /**
   * Task ID on travaux.ovh.com
   *
   */
  taskId?: Number;
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
   * How the LAN interface of the modem is gettig its address
   *
   */
  addressingType?: XdslXdslModemConfigAddressingTypeEnum;
  /**
   * The subnet mask of the LAN interface of the modem
   *
   */
  subnetMask?: string;
  /**
   * The IP address of the LAN interface of the modem
   *
   */
  IPAddress?: string;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: Number;
  /**
   * Name of the LAN
   *
   */
  lanName?: string;
}
/**
 * Infos about a Landline at the concentration point
 */
export interface XdslLandlineConcentrationPoint {
  /**
   * Identifier of the pair at the lineHead's lineInitialSection
   *
   */
  lineInitialSectionPair?: Number;
  /**
   * Identifier of the section at the lineHead
   *
   */
  lineInitialSection?: Number;
  /**
   * Identifier of the head of the cable from the MDF
   *
   */
  lineHead?: string;
}
/**
 * Information about the physical copper line
 */
export interface XdslLine {
  /**
   * Whether the line number has been ported to OVH, to be used with VoIP service
   *
   */
  portability?: boolean;
  /**
   * Data to identify the line at the concentration point
   *
   */
  concentrationPoint?: XdslLandlineConcentrationPoint;
  /**
   * The number of the line
   *
   */
  number?: string;
  /**
   * The number used to place the order. Null if the same as the current number.
   *
   */
  originalNumber?: string;
  /**
   * Mitigation of the line in dB
   *
   */
  mitigation?: Number;
  /**
   * Distance in meters from the DSLAM
   *
   */
  distance?: Number;
  /**
   */
  faultRepairTime?: XdslFaultRepairTimeEnum;
  /**
   * True if the line is directly wired on the DSLAM
   *
   */
  directDistribution?: boolean;
  /**
   * Detailed information about the sections between the DSLAM and the telephone jack
   *
   */
  lineSectionsLength?: XdslLineSectionLength[];
  /**
   * The download synchronisation on the DSLAM in Kbps
   *
   */
  syncDown?: Number;
  /**
   */
  deconsolidation?: XdslDeconsolidationEnum;
  /**
   * The upload synchronisation on the DSLAM in Kbps
   *
   */
  syncUp?: Number;
}
/**
 * Detailed line tests
 */
export interface XdslLineDiagnostic {
  /**
   */
  number?: string;
  /**
   */
  proposedProfileId?: Number;
  /**
   */
  sync?: boolean;
  /**
   */
  lineTestTime?: Date;
  /**
   */
  lineTest?: XdslLineTestEnum;
}
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
  brandName?: string;
  /**
   */
  macAddress?: string;
  /**
   * Whether or not the modem is in bridge mode. To pass from bridge mode to routed mode, a reset is necessary. If the modem is managedByOvh, the bridge state will be kept after a reset
   *
   */
  isBridged?: boolean;
  /**
   */
  capabilities?: XdslModemCapabilities;
  /**
   * Last time the modem made a CWMP request to the Auto Configuration Server
   *
   */
  lastCwmpRequestDate?: Date;
  /**
   */
  model?: string;
  /**
   * Whether or not the modem supports IPv6
   *
   */
  ipv6Support?: boolean;
  /**
   * IP Address of the DMZ (To modify or delete the DMZ IP on the modem, a re-configuration of your modem has to be made, your configuration will be maintained, but you will lose your connection a few minutes)
   *
   */
  dmzIP?: string;
  /**
   * Whether or not the user can configure his modem via OVH Interface (will lock telnet and local HTTP configuration page)
   *
   */
  managedByOvh?: boolean;
  /**
   * Size of the Maximum Transmission Unit on the modem's interfaces
   *
   */
  mtuSize?: XdslXdslModemConfigMTUSizeEnum;
  /**
   * Level of the FireWall on the modem
   *
   */
  easyFirewallLevel?: XdslXdslModemConfigEasyFirewallLevelEnum;
}
/**
 * Describe the capabilities of the Modem
 */
export interface XdslModemCapabilities {
  /**
   */
  canChangeBridgeMode?: boolean;
  /**
   */
  canChangeLAN?: boolean;
  /**
   */
  canChangeWLAN?: boolean;
  /**
   */
  canBeManagedByOvh?: boolean;
  /**
   */
  canChangeDHCP?: boolean;
  /**
   */
  canReset?: boolean;
  /**
   */
  canChangeManagement?: boolean;
  /**
   */
  canChangeDMZ?: boolean;
  /**
   */
  canChangeEasyFirewallLevel?: boolean;
  /**
   */
  canRefreshConnectedDevices?: boolean;
  /**
   */
  canChangePortMapping?: boolean;
  /**
   */
  canReboot?: boolean;
  /**
   */
  canChangeMtu?: boolean;
  /**
   */
  canChangeFirmware?: boolean;
}
/**
 * Describe general information of a Modem
 */
export interface XdslModemInfo {
  /**
   * Hardware information
   *
   */
  device?: XdslDeviceModemInfo;
  /**
   * Modem Connection information
   *
   */
  statistics?: XdslStatsModemInfo;
}
/**
 * Defines where and how the notifications will be sent
 */
export interface XdslMonitoringNotification {
  /**
   * The SMS account which will be debited for each sent SMS, if the type is sms
   *
   */
  smsAccount?: string;
  /**
   * The phone number, if type is sms
   *
   */
  phone?: string;
  /**
   * Whether or not to allow notifications for generic incidents
   *
   */
  allowIncident?: boolean;
  /**
   */
  id?: Number;
  /**
   */
  type?: XdslMonitoringNotificationsTypeEnum;
  /**
   */
  enabled?: boolean;
  /**
   * The e-mail address, if type is mail
   *
   */
  email?: string;
  /**
   * The number of seconds the access has to be down to trigger an alert
   *
   */
  downThreshold?: Number;
  /**
   * The frenquency to send reminders when the access is still down
   *
   */
  frequency?: XdslMonitoringNotificationsFrequencyEnum;
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
  action?: string;
  /**
   */
  dateTodo?: Date;
}
/**
 * Port Mappings
 */
export interface XdslPortMapping {
  /**
   * Protocol of the port mapping (TCP / UDP)
   *
   */
  protocol?: XdslXdslModemConfigProtocolTypeEnum;
  /**
   * The port on the Internal Client that will get the connections
   *
   */
  internalPort?: Number;
  /**
   * The last port of the interval on the External Client that will get the connections
   *
   */
  externalPortEnd?: Number;
  /**
   * Name of the port mapping entry
   *
   */
  name?: string;
  /**
   * Description of the Port Mapping
   *
   */
  description?: string;
  /**
   * ID of the port mapping entry
   *
   */
  id?: Number;
  /**
   * An ip which will access to the defined rule. Default : no restriction applied
   *
   */
  allowedRemoteIp?: string;
  /**
   * The IP address of the destination of the packets
   *
   */
  internalClient?: string;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: Number;
  /**
   * External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005
   *
   */
  externalPortStart?: Number;
}
/**
 * Log entry of an auth attempt to the radius server
 */
export interface XdslRadiusConnectionLog {
  /**
   */
  date?: Date;
  /**
   */
  state?: string;
  /**
   */
  message?: string;
  /**
   */
  login?: string;
}
/**
 * Details about the resiliation
 */
export interface XdslResiliationFollowUpDetail {
  /**
   * If the customer needs to return his modem
   *
   */
  needModemReturn?: boolean;
  /**
   * Date when the resiliation was done
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
  type?: XdslResiliationReasonEnum;
}
/**
 * Show the resiliation terms
 */
export interface XdslResiliationTerms {
  /**
   * List of available resiliation reasons
   *
   */
  resiliationReasons?: XdslResiliationReasonEnum[];
  /**
   * Minumum resiliationDate
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
   * Date at which the access will be resiliated
   *
   */
  resiliationDate?: Date;
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
   * Downstream margin
   *
   */
  downstreamMargin?: Number;
  /**
   * Line modulation used
   *
   */
  modulation?: string;
  /**
   * Upstream attenuation
   *
   */
  upstreamAttenuation?: Number;
  /**
   * Connection uptime
   *
   */
  connectionUptime?: Number;
  /**
   * Downstream synchronization
   *
   */
  downstreamSync?: Number;
  /**
   * Synchronization uptime
   *
   */
  syncUptime?: Number;
  /**
   * Downstream attenuation
   *
   */
  downstreamAttenuation?: Number;
  /**
   * Upstream synchronization
   *
   */
  upstreamSync?: Number;
  /**
   * Upstream margin
   *
   */
  upstreamMargin?: Number;
  /**
   * Time of last refresh
   *
   */
  lastUpdate?: Date;
  /**
   * Count from last refresh in seconds
   *
   */
  quarterHourStart?: Number;
  /**
   * Amount of CRC error detected
   *
   */
  crcError?: Number;
  /**
   * Modem uptime
   *
   */
  deviceUptime?: Number;
}
/**
 * Describes the current status of a task
 */
export interface XdslTask {
  /**
   */
  updateDate?: Date;
  /**
   */
  function?: string;
  /**
   * Date when the action will start
   *
   */
  todoDate?: Date;
  /**
   */
  id?: Number;
  /**
   */
  status?: XdslTaskStatusEnum;
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
   * List of PortMapping for this template
   *
   */
  portMapping?: XdslTemplateModemPortMapping[];
  /**
   * Parameters capabilities. Lists what can be applied from this template
   *
   */
  capabilities?: string;
  /**
   * List of LAN for this template
   *
   */
  LAN?: XdslTemplateModemLAN[];
  /**
   * Name of the Modem Template
   *
   */
  name?: string;
  /**
   * List of WLAN for this template
   *
   */
  WLAN?: XdslTemplateModemWLAN[];
  /**
   * IP Address of the DMZ
   *
   */
  dmzIP?: string;
  /**
   * Template creation date
   *
   */
  creationDate?: Date;
  /**
   * Do not apply these parameters from template. You can use parametersCapabilities to know availability
   *
   */
  parametersToIgnore?: XdslTemplateModemParametersToIgnore;
  /**
   * Size of the Maximum Transmission Unit on the modem's interfaces
   *
   */
  mtuSize?: XdslXdslModemConfigMTUSizeEnum;
  /**
   * List of DHCP for this template
   *
   */
  DHCP?: XdslTemplateModemDHCP[];
}
/**
 * A value associated to a timestamp
 */
export interface XdslTimestampAndValue {
  /**
   */
  value?: Number;
  /**
   */
  timestamp?: Number;
}
/**
 * WLAN Configuration of the Modem
 */
export interface XdslWLAN {
  /**
   * Indicate if frequencies 2.4GHz and 5GHz are agregated
   *
   */
  bandSteering?: boolean;
  /**
   * Name of the Wifi
   *
   */
  wifiName?: string;
  /**
   * How the channel is chosen (Auto / Manual)
   *
   */
  channelMode?: XdslXdslModemConfigChannelModeEnum;
  /**
   * Security (None | WEP | WPA | WPA2 | WPAandWPA2)
   *
   */
  securityType?: XdslXdslModemConfigSecurityTypeEnum;
  /**
   * Choice of a channel (When chosen, channelMode is set to Manual)
   *
   */
  channel?: Number;
  /**
   * Hide or show the Wifi
   *
   */
  SSIDAdvertisementEnabled?: boolean;
  /**
   * Indicate if it is normal access wifi or guest wifi
   *
   */
  guest?: boolean;
  /**
   * WPA or WEP key
   *
   */
  securityKey?: string;
  /**
   * Service Set Identifier of the WLAN interface
   *
   */
  SSID?: string;
  /**
   * Wifi state
   *
   */
  enabled?: boolean;
  /**
   * ID of the ongoing todo (NULL if none)
   *
   */
  taskId?: Number;
  /**
   * Frequency (2.4GHz | 5GHz)
   *
   */
  frequency?: XdslXdslModemConfigFrequencyEnum;
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
   * Table with evidences stored on PCS
   *
   */
  result?: XdslAntiSpamEvidencesInfoDetail[];
  /**
   * AsyncTask detailed error
   *
   */
  error?: string;
  /**
   * AsyncTask status
   *
   */
  status?: XdslAntiSpamEvidencesInfoStatusEnum;
}
/**
 * detail on evidences stored on PCS
 */
export interface XdslAntiSpamEvidencesInfoDetail {
  /**
   * File date on the PCS
   *
   */
  date?: Date;
  /**
   * File name on the PCS
   *
   */
  filename?: string;
  /**
   * Temporary URL to access file
   *
   */
  url?: string;
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
   * Host name given by the device to the modem
   *
   */
  hostName?: string;
  /**
   * On which interface is connected the device
   *
   */
  interfaceType?: string;
  /**
   * MAC address of the device
   *
   */
  macAddress?: string;
  /**
   * How did the device got its IP address
   *
   */
  addressSource?: XdslXdslModemConfigConnectedDeviceAddressSourceEnum;
  /**
   * The IP address of the device
   *
   */
  ipAddress?: string;
  /**
   * The state of this device on the modem
   *
   */
  active?: boolean;
  /**
   * The date time of the last update of thoses informations
   *
   */
  informationDate?: Date;
  /**
   * The remaining time in seconds of the DHCP lease of this device (-1 means infinite)
   *
   */
  leaseTimeRemaining?: Number;
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
   * Informations about the city
   *
   */
  city?: XdslEligibilityCity;
  /**
   * Number on the street
   *
   */
  streetNumber?: string;
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
   * Name of the residence, if any
   *
   */
  residence?: string;
  /**
   * Identifier of the floor, if any
   *
   */
  floor?: string;
  /**
   * Name of the building, if any
   *
   */
  building?: string;
}
/**
 * Details of a Building
 */
export interface XdslEligibilityBuilding {
  /**
   * Identifier which refer to a building uniquely
   *
   */
  reference?: string;
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
  type?: XdslEligibilityBuildingTypeEnum;
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
   * Locality (subset of a city)
   *
   */
  locality?: string;
  /**
   * Name of the city
   *
   */
  name?: string;
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
 * Eligibility result
 */
export interface XdslEligibilityEligibility {
  /**
   * Portability capabilities
   *
   */
  portability?: XdslEligibilityPortability;
  /**
   * The eligible offers list
   *
   */
  offers?: XdslEligibilityOffer[];
  /**
   * The line characteristics
   *
   */
  characteristics?: XdslEligibilityLineCharacteristics;
  /**
   * The eligibility endpoint type
   *
   */
  endpoint?: XdslEligibilityLineEndpointEnum;
  /**
   * The line address
   *
   */
  address?: XdslEligibilityAddress;
  /**
   * The eligibility uuid
   *
   */
  id?: string;
  /**
   * The line infos
   *
   */
  infos?: XdslEligibilityLineInfos;
}
/**
 * Fiber Eligibility result
 */
export interface XdslEligibilityFiberEligibility {
  /**
   * List of fiber offer
   *
   */
  offers?: XdslEligibilityFiberOffer[];
  /**
   * Eligibility UUID
   *
   */
  id?: string;
}
/**
 * A fiber offer
 */
export interface XdslEligibilityFiberOffer {
  /**
   * Estimated or guaranteed upload rate in Mbit/s, if applicable
   *
   */
  uploadRate?: Number;
  /**
   * Reason of non eligibility, if applicable
   *
   */
  reason?: string;
  /**
   * Estimated or guaranteed download rate in Mbit/s, if applicable
   *
   */
  downloadRate?: Number;
  /**
   * The availibility date if the fiber is planned but not available yet
   *
   */
  availibilityDate?: Date;
  /**
   * Allowed GTR
   *
   */
  gtr?: XdslGtrEnum[];
  /**
   * Are you eligible to this offer ?
   *
   */
  eligible?: boolean;
  /**
   * Is the rate guaranteed ?
   *
   */
  guaranteed?: boolean;
  /**
   * Offer label
   *
   */
  label?: string;
  /**
   * Technology
   *
   */
  type?: XdslDslTypeEnum;
}
/**
 * Details of a FiberStreet
 */
export interface XdslEligibilityFiberStreet {
  /**
   * Street name
   *
   */
  streetName?: string;
  /**
   * Identifier which refer to a street uniquely
   *
   */
  streetCode?: string;
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
   * The line status
   *
   */
  lineStatus?: XdslEligibilityLandlineStatusEnum;
  /**
   * The line address
   *
   */
  address?: XdslEligibilityAddress;
  /**
   * The contact name
   *
   */
  contactName?: string;
  /**
   * The line number
   *
   */
  lineNumber?: string;
}
/**
 * The characteristics of a line
 */
export interface XdslEligibilityLineCharacteristics {
  /**
   * The estimated mitigation for SDSL technology
   *
   */
  mitigationSdsl?: Number;
  /**
   * The estimated mitigation for ADSL and VDSL technologies
   *
   */
  mitigation?: Number;
  /**
   * Number of free pairs
   *
   */
  freePairs?: Number;
  /**
   * Distance to the NRA in meters
   *
   */
  distance?: Number;
  /**
   * Number of free pairs proposed ondesaturation of copper lines
   *
   */
  desaturationFreePairs?: Number;
  /**
   * The NRA
   *
   */
  nra?: string;
  /**
   * Details of line calibration
   *
   */
  calibration?: XdslEligibilityLineSectionCalibration[];
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
   * The line status, if endpoint is number
   *
   */
  lineStatus?: XdslEligibilityLandlineStatusEnum;
  /**
   * Weither we are in create neighbor case or not
   *
   */
  createNeighbour?: boolean;
  /**
   * Is the number unlisted ?
   *
   */
  unlistedNumber?: boolean;
  /**
   * The line number, if endpoint is number
   *
   */
  lineNumber?: string;
}
/**
 * A line section calibration detail
 */
export interface XdslEligibilityLineSectionCalibration {
  /**
   * The section diameter in millimeters
   *
   */
  diameter?: Number;
  /**
   * The section length in meters
   *
   */
  length?: Number;
}
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
 * An offer
 */
export interface XdslEligibilityOffer {
  /**
   * Estimated or guaranteed upload rate in Mbit/s, if applicable
   *
   */
  uploadRate?: Number;
  /**
   * Is copper lines desaturation needed and available for this offer ?
   *
   */
  desaturation?: boolean;
  /**
   * Estimated or guaranteed download rate in Mbit/s, if applicable
   *
   */
  downloadRate?: Number;
  /**
   * Allowed GTR (none, 4ho : 4 work hours, 4hno : 4 unworked hours)
   *
   */
  gtr?: XdslGtrEnum[];
  /**
   * Allowed unbundling methods
   *
   */
  unbundling?: XdslDeconsolidationEnum[];
  /**
   * Provider, if applicable
   *
   */
  provider?: XdslEligibilityProviderEnum;
  /**
   * DEPRECATED Please use downloadRate instead /DEPRECATED - Estimated or guaranteed rate in Mbit/s, if applicable
   *
   */
  rate?: Number;
  /**
   * Is the rate guaranteed ?
   *
   */
  guaranteed?: boolean;
  /**
   * Offer label
   *
   */
  label?: string;
  /**
   * DSL technology
   *
   */
  type?: XdslDslTypeEnum;
  /**
   * Number of pairs to use
   *
   */
  pairs?: Number;
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
 * Task Struct
 */
export interface XdslEmailProTask {
  /**
   * Function of the task
   *
   */
  function?: string;
  /**
   * Todo date of the task
   *
   */
  todoDate?: Date;
  /**
   * Finished date of the task
   *
   */
  finishDate?: Date;
  /**
   * Status of the task
   *
   */
  status?: XdslEmailProTaskStatusEnum;
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
   * Ovh ticket name or ticket ID, only if a ticket is already opened for this problem
   *
   */
  ovhTicket?: string;
  /**
   * indicate if customer wants to be informed by sms
   *
   */
  followBySms?: boolean;
  /**
   * Has customer several internal connections ? (on the same place)
   *
   */
  severalInternetConnections?: boolean;
  /**
   * bandwidth download value on proof.ovh.net test
   *
   */
  downloadBandwidthTest?: Number;
  /**
   * approximative datetime of problem happening
   *
   */
  datetimeOfAppearance?: Date;
  /**
   * morning closing informations or time for the site
   *
   */
  endMorningHours?: string;
  /**
   * Has modem kept his synchronization during line port reset ?
   *
   */
  hasModemKeptSynchronization?: boolean;
  /**
   * is secure site ?
   *
   */
  secureSite?: boolean;
  /**
   * is access problem solved ?
   *
   */
  resolvedAfterTests?: boolean;
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
   * bandwidth unit for proof.ovh.net test values
   *
   */
  bandwidthTestUnit?: XdslLineDiagnosticBandwidthTestUnitEnum;
  /**
   * digicode for site entrance
   *
   */
  siteDigicode?: string;
  /**
   * id of appointment chosen ("possibleValues" contains choices list with id)
   *
   */
  idAppointment?: Number;
  /**
   * afternoon opening informations or time for the site
   *
   */
  startAfternoonHours?: string;
  /**
   * days or period where site access is not possible
   *
   */
  siteClosedDays?: string;
  /**
   * is non-professional site ?
   *
   */
  individualSite?: boolean;
  /**
   * modem brand and reference
   *
   */
  modemType?: string;
  /**
   * Is modem synchronized ? (whatever internet connection)
   *
   */
  modemIsSynchronized?: boolean;
  /**
   * site opening hours or informations
   *
   */
  siteOpening?: string;
  /**
   * morning opening informations or time for the site
   *
   */
  startMorningHours?: string;
  /**
   * bandwidth upload value on proof.ovh.net test
   *
   */
  uploadBandwidthTest?: Number;
  /**
   * customer knows that he can be charged (150 euros HT) if he is responsible for the problem or if tests have not been done correctly ?
   *
   */
  conditionsAccepted?: boolean;
  /**
   * afternoon closing informations or time for the site
   *
   */
  endAfternoonHours?: string;
  /**
   * comment will contains all informations needed for intervention and about your access problem
   *
   */
  comment?: string;
  /**
   * customer's phone number
   *
   */
  contactPhone?: string;
  /**
   * Problem Type on DSL connection
   *
   */
  problemType?: XdslLineDiagnosticProblemTypeEnum;
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
   * Downstream margin
   *
   */
  downstreamMargin?: Number;
  /**
   * Upstream synchronization
   *
   */
  upstreamSync?: Number;
  /**
   * Upstream margin
   *
   */
  upstreamMargin?: Number;
  /**
   * Upstream attenuation
   *
   */
  upstreamAttenuation?: Number;
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
   * Amount of CRC error detected
   *
   */
  crcError?: Number;
  /**
   * Downstream synchronization
   *
   */
  downstreamSync?: Number;
  /**
   * Downstream attenuation
   *
   */
  downstreamAttenuation?: Number;
}
/**
 * Customer action to do
 */
export interface XdslLineDiagnosticCustomerActionToDo {
  /**
   * action's name
   *
   */
  name?: XdslLineDiagnosticCustomerActionsEnum;
  /**
   * action's description
   *
   */
  description?: string;
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
  data?: XdslLineDiagnosticDiagnosticData;
  /**
   * Detected fault type
   *
   */
  faultType?: XdslLineDiagnosticFaultTypeEnum;
  /**
   * Diagnostic id
   *
   */
  id?: Number;
  /**
   * Diagnostic status
   *
   */
  status?: XdslLineDiagnosticDiagnosticStatusEnum;
}
/**
 * Diagnostic data and informations
 */
export interface XdslLineDiagnosticDiagnosticData {
  /**
   * Informations about line
   *
   */
  lineDetails?: XdslLineDiagnosticLineDetails;
  /**
   * Previous customer answers
   *
   */
  answers?: XdslLineDiagnosticAnswers;
  /**
   * End of diagnostic date. Will be null until problem totally identified
   *
   */
  diagnosticDoneDate?: Date;
  /**
   * Current or last robot action
   *
   */
  robotAction?: XdslLineDiagnosticRobotActionsEnum;
  /**
   * Diagnostic creation date
   *
   */
  creationDate?: Date;
  /**
   * Error message
   *
   */
  error?: string;
  /**
   * Diagnostic timeout in minutes. Any action restart timeout
   *
   */
  timeout?: Number;
  /**
   * List of actions that must be done by customer
   *
   */
  actionsToDo?: XdslLineDiagnosticCustomerActionToDo[];
  /**
   * List of questions that must be answered by customer
   *
   */
  toAnswer?: XdslLineDiagnosticQuestion[];
  /**
   * List of actions already done by customer
   *
   */
  actionsDone?: XdslLineDiagnosticCustomerActionsEnum[];
  /**
   * Last diagnostic update date
   *
   */
  lastUpdate?: Date;
  /**
   * Diagnostic comment. Can be update during any diagnostic step
   *
   */
  comment?: string;
  /**
   * SELT test result
   *
   */
  seltTest?: XdslLineDiagnosticSeltResult;
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
   * Theoretical line mitigation
   *
   */
  mitigation?: string;
  /**
   * Theoretical ping
   *
   */
  ping?: Number;
  /**
   * Theoretical Upstream synchronization
   *
   */
  up?: Number;
  /**
   * Theoretical Downstream synchronization
   *
   */
  down?: Number;
}
/**
 * Line informations
 */
export interface XdslLineDiagnosticLineDetails {
  /**
   * address of the access
   *
   */
  address?: string;
  /**
   * access name
   *
   */
  accessName?: string;
  /**
   * is GTR access or not
   *
   */
  gtr?: boolean;
  /**
   * Line length in meters
   *
   */
  length?: Number;
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
   * Theoretical line capabilities
   *
   */
  lineCapabilities?: XdslLineDiagnosticLineCapabilities;
  /**
   * cables sections details
   *
   */
  sections?: XdslLineDiagnosticSection[];
  /**
   * provider for internet connexion
   *
   */
  operator?: XdslLineDiagnosticProviderEnum;
  /**
   * line number
   *
   */
  number?: string;
  /**
   * dsl connexion type for the line
   *
   */
  lineType?: XdslDslTypeEnum;
  /**
   * Access IP ping or not
   *
   */
  accessPing?: boolean;
  /**
   * NRA name
   *
   */
  nra?: string;
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
}
/**
 * possible value for specific answer
 */
export interface XdslLineDiagnosticPossibleValue {
  /**
   * answer choice string
   *
   */
  label?: string;
  /**
   * answer id
   *
   */
  id?: Number;
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
   * list of possible values
   *
   */
  possibleValues?: XdslLineDiagnosticPossibleValue[];
  /**
   * question description
   *
   */
  defaultValue?: string;
  /**
   * question name
   *
   */
  name?: XdslLineDiagnosticQuestionsEnum;
  /**
   * question description
   *
   */
  description?: string;
  /**
   * answer type
   *
   */
  type?: string;
  /**
   * is a required question
   *
   */
  required?: boolean;
  /**
   * available values for enum
   *
   */
  enumValues?: string[];
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
  length?: Number;
  /**
   * cables section in millimeters
   *
   */
  section?: Number;
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
  date?: Date;
  /**
   * Distance of the problem identified on the line (by SELT test), from NRA to customer
   *
   */
  distance?: Number;
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
  comments?: string[];
  /**
   */
  name?: XdslOrderFollowupStepNameEnum;
  /**
   */
  expectedDuration?: Number;
  /**
   */
  durationUnit?: XdslOrderFollowupDurationUnitEnum;
  /**
   */
  doneDate?: Date;
  /**
   */
  status?: XdslOrderFollowupStepStatusEnum;
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
   * Name of the DHCP
   *
   */
  dhcpName?: string;
  /**
   * Lease time in seconds of client assigned address (-1 means infinite)
   *
   */
  leaseTime?: Number;
  /**
   * Primary DNS servers to be given to the clients
   *
   */
  primaryDNS?: string;
  /**
   * First address of the pool assigned by the DHCP
   *
   */
  startAddress?: string;
  /**
   * Domain name provided to the clients
   *
   */
  domainName?: string;
  /**
   * Secondary DNS servers to be given to the clients
   *
   */
  secondaryDNS?: string;
  /**
   * The subnet mask given to the clients
   *
   */
  subnetMask?: string;
  /**
   * The default gateway to be given to the clients
   *
   */
  defaultGateway?: string;
  /**
   * Last address of the pool assigned by the DHCP
   *
   */
  endAddress?: string;
  /**
   * State of the DHCP server of the modem
   *
   */
  serverEnabled?: boolean;
}
/**
 * LAN Configuration for Modem Template
 */
export interface XdslTemplateModemLAN {
  /**
   * How the LAN interface of the modem is getting its address
   *
   */
  addressingType?: XdslXdslModemConfigAddressingTypeEnum;
  /**
   * The IP address of the LAN interface of the modem
   *
   */
  IPAddress?: string;
  /**
   * The subnet mask of the LAN interface of the modem
   *
   */
  subnetMask?: string;
  /**
   * Name of the LAN
   *
   */
  lanName?: string;
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
   * PortMapping names list to ignore. Ignore only listed portMapping
   *
   */
  portMappingList?: string[];
  /**
   * Ignore MTU Size value
   *
   */
  mtuSize?: boolean;
}
/**
 * PortMapping Configuration for Modem Template
 */
export interface XdslTemplateModemPortMapping {
  /**
   * Protocol of the port mapping (TCP / UDP)
   *
   */
  protocol?: XdslXdslModemConfigProtocolTypeEnum;
  /**
   * The port on the Internal Client that will get the connections
   *
   */
  internalPort?: Number;
  /**
   * The last port of the interval on the External Client that will get the connections
   *
   */
  externalPortEnd?: Number;
  /**
   * Name of the port mapping entry
   *
   */
  name?: string;
  /**
   * Description of the Port Mapping
   *
   */
  description?: string;
  /**
   * An ip which will access to the defined rule. Default : no restriction applied
   *
   */
  allowedRemoteIp?: string;
  /**
   * The IP address of the destination of the packets
   *
   */
  internalClient?: string;
  /**
   * External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005
   *
   */
  externalPortStart?: Number;
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
   * Indicate if frequencies 2.4GHz and 5GHz are agregated
   *
   */
  bandSteering?: boolean;
  /**
   * Wifi Name
   *
   */
  wifiName?: string;
  /**
   * How the channel is chosen (Auto / Manual)
   *
   */
  channelMode?: XdslXdslModemConfigChannelModeEnum;
  /**
   * Security (None | WPA | WPA2 | WPAandWPA2)
   *
   */
  securityType?: XdslTemplateModemSecurityTypeEnum;
  /**
   * Channel number (Useless if channelMode is set to Auto)
   *
   */
  channel?: Number;
  /**
   * Control if Wifi is discoverable or hidden
   *
   */
  SSIDAdvertisementEnabled?: boolean;
  /**
   * Indicate if it is normal access wifi or guest wifi
   *
   */
  guest?: boolean;
  /**
   * Encrypted WLAN passphrase
   *
   */
  securityKey?: string;
  /**
   * Service Set Identifier of the WLAN interface
   *
   */
  SSID?: string;
  /**
   * Wifi state
   *
   */
  enabled?: boolean;
  /**
   * Frequency (2.4GHz | 5GHz)
   *
   */
  frequency?: XdslXdslModemConfigFrequencyEnum;
}
/**
 * XDSL Email Pro
 */
export interface XdslXdslEmailPro {
  /**
   * Account last name
   *
   */
  lastName?: string;
  /**
   * Account initials
   *
   */
  initial?: string;
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
   * Mailbox usage
   *
   */
  currentUsage?: ComplexTypeUnitAndValue<Number>;
  /**
   * Account login
   *
   */
  login?: string;
  /**
   * Pending tasks for this account
   *
   */
  taskPendingId?: Number;
  /**
   * Default email for this mailbox
   *
   */
  primaryEmailAddress?: string;
  /**
   * Account first name
   *
   */
  firstName?: string;
  /**
   * Email domain
   *
   */
  domain?: string;
  /**
   * Account maximum size
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * Last logoff
   *
   */
  lastLogoffDate?: Date;
  /**
   * Account id
   *
   */
  id?: Number;
  /**
   * Account state
   *
   */
  state?: EmailProObjectStateEnum;
  /**
   * Last logon
   *
   */
  lastLogonDate?: Date;
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
type PathsxdslGET = '/xdsl/eligibility/streets' | 
'/xdsl/eligibility/cities' | 
'/xdsl/eligibility/meetings' | 
'/xdsl/eligibility/test' | 
'/xdsl' | 
'/xdsl/templateModem' | 
'/xdsl/templateModem/{name}' | 
'/xdsl/spare/brands' | 
'/xdsl/spare/{spare}' | 
'/xdsl/spare/{spare}/serviceInfos' | 
'/xdsl/spare/{spare}/compatibleReplacement' | 
'/xdsl/spare' | 
'/xdsl/{serviceName}/tasks' | 
'/xdsl/{serviceName}/tasks/{id}' | 
'/xdsl/{serviceName}' | 
'/xdsl/{serviceName}/canCancelResiliation' | 
'/xdsl/{serviceName}/incident' | 
'/xdsl/{serviceName}/totalDeconsolidationTerms' | 
'/xdsl/{serviceName}/monitoringNotifications' | 
'/xdsl/{serviceName}/monitoringNotifications/{id}' | 
'/xdsl/{serviceName}/rma/{id}' | 
'/xdsl/{serviceName}/rma' | 
'/xdsl/{serviceName}/lines/{number}' | 
'/xdsl/{serviceName}/lines/{number}/statistics' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort/logs' | 
'/xdsl/{serviceName}/lines' | 
'/xdsl/{serviceName}/radiusConnectionLogs' | 
'/xdsl/{serviceName}/pendingAction' | 
'/xdsl/{serviceName}/modem' | 
'/xdsl/{serviceName}/modem/wifi/{wifiName}' | 
'/xdsl/{serviceName}/modem/wifi' | 
'/xdsl/{serviceName}/modem/firmware' | 
'/xdsl/{serviceName}/modem/upnp' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}' | 
'/xdsl/{serviceName}/modem/lan' | 
'/xdsl/{serviceName}/modem/connectedDevices/{macAddress}' | 
'/xdsl/{serviceName}/modem/connectedDevices' | 
'/xdsl/{serviceName}/modem/availableWLANChannel' | 
'/xdsl/{serviceName}/modem/sipAlg' | 
'/xdsl/{serviceName}/modem/firmwareAvailable' | 
'/xdsl/{serviceName}/modem/ftp' | 
'/xdsl/{serviceName}/modem/ipsecAlg' | 
'/xdsl/{serviceName}/modem/contentSharing' | 
'/xdsl/{serviceName}/modem/portMappings/{name}' | 
'/xdsl/{serviceName}/modem/portMappings' | 
'/xdsl/{serviceName}/modem/blocIp' | 
'/xdsl/{serviceName}/modem/callWaiting' | 
'/xdsl/{serviceName}/antiSpams/{ip}/evidences' | 
'/xdsl/{serviceName}/antiSpams/{ip}' | 
'/xdsl/{serviceName}/antiSpams' | 
'/xdsl/{serviceName}/resiliationTerms' | 
'/xdsl/{serviceName}/ips' | 
'/xdsl/{serviceName}/ips/{ip}' | 
'/xdsl/{serviceName}/serviceInfos' | 
'/xdsl/{serviceName}/resiliationFollowup' | 
'/xdsl/{serviceName}/diagnostic' | 
'/xdsl/{serviceName}/orderFollowup' | 
'/xdsl/{serviceName}/addressMove/extraIpRange' | 
'/xdsl/{serviceName}/statistics' | 
'/xdsl/email/pro' | 
'/xdsl/email/pro/{email}' | 
'/xdsl/incidents' | 
'/xdsl/incidents/{id}';

type PathsxdslPUT = '/xdsl/templateModem/{name}' | 
'/xdsl/spare/{spare}/serviceInfos' | 
'/xdsl/{serviceName}' | 
'/xdsl/{serviceName}/monitoringNotifications/{id}' | 
'/xdsl/{serviceName}/rma/{id}' | 
'/xdsl/{serviceName}/modem' | 
'/xdsl/{serviceName}/modem/wifi/{wifiName}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}' | 
'/xdsl/{serviceName}/modem/portMappings/{name}' | 
'/xdsl/{serviceName}/serviceInfos' | 
'/xdsl/email/pro/{email}';

type PathsxdslPOST = '/xdsl/eligibility/lines/active' | 
'/xdsl/eligibility/lines/inactive' | 
'/xdsl/eligibility/search/cities' | 
'/xdsl/eligibility/search/fiberStreets' | 
'/xdsl/eligibility/search/buildings' | 
'/xdsl/eligibility/search/streetNumbers' | 
'/xdsl/eligibility/test/address' | 
'/xdsl/eligibility/test/line' | 
'/xdsl/eligibility/test/fiber/building' | 
'/xdsl/templateModem' | 
'/xdsl/spare/{spare}/returnMerchandise' | 
'/xdsl/spare/{spare}/replace' | 
'/xdsl/{serviceName}/resiliate' | 
'/xdsl/{serviceName}/tasks/{id}/archive' | 
'/xdsl/{serviceName}/requestPPPLoginMail' | 
'/xdsl/{serviceName}/cancelResiliation' | 
'/xdsl/{serviceName}/sendOrderToProvider' | 
'/xdsl/{serviceName}/applyTemplateToModem' | 
'/xdsl/{serviceName}/monitoringNotifications' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile' | 
'/xdsl/{serviceName}/lines/{number}/dslamPort/reset' | 
'/xdsl/{serviceName}/lines/{number}/diagnostic/run' | 
'/xdsl/{serviceName}/lines/{number}/diagnostic/cancel' | 
'/xdsl/{serviceName}/ipv6' | 
'/xdsl/{serviceName}/modem/firmware' | 
'/xdsl/{serviceName}/modem/retrieveInfo' | 
'/xdsl/{serviceName}/modem/upnp' | 
'/xdsl/{serviceName}/modem/resetPortMappingConfig' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses' | 
'/xdsl/{serviceName}/modem/sipAlg' | 
'/xdsl/{serviceName}/modem/refreshConnectedDevices' | 
'/xdsl/{serviceName}/modem/reboot' | 
'/xdsl/{serviceName}/modem/ftp' | 
'/xdsl/{serviceName}/modem/reset' | 
'/xdsl/{serviceName}/modem/ipsecAlg' | 
'/xdsl/{serviceName}/modem/contentSharing' | 
'/xdsl/{serviceName}/modem/portMappings' | 
'/xdsl/{serviceName}/modem/blocIp' | 
'/xdsl/{serviceName}/modem/duplicatePortMappingConfig' | 
'/xdsl/{serviceName}/modem/callWaiting' | 
'/xdsl/{serviceName}/updateInvalidOrMissingRio' | 
'/xdsl/{serviceName}/ips' | 
'/xdsl/{serviceName}/requestTotalDeconsolidation' | 
'/xdsl/{serviceName}/diagnostic' | 
'/xdsl/{serviceName}/changeContact' | 
'/xdsl/{serviceName}/addressMove/extraIpRangeMove' | 
'/xdsl/email/pro/{email}/changePassword';

type PathsxdslDELETE = '/xdsl/templateModem/{name}' | 
'/xdsl/spare/{spare}' | 
'/xdsl/{serviceName}/monitoringNotifications/{id}' | 
'/xdsl/{serviceName}/rma/{id}' | 
'/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}' | 
'/xdsl/{serviceName}/modem/portMappings/{name}' | 
'/xdsl/{serviceName}/ips/{ip}' | 
'/xdsl/email/pro/{email}';

class Apixdsl extends ApiCommon {
  /**
  Get the streets from a city inseeCode and partial street name
  Get the streets from a city inseeCode and partial street name
  **/
  public get(path: '/xdsl/eligibility/streets', pathParams: null, queryParams: {partialName?: string, inseeCode?: string}): Promise<XdslEligibilityStreet[]>;
  /**
  Get the cities from a zipCode
  Get the cities from a zipCode
  **/
  public get(path: '/xdsl/eligibility/cities', pathParams: null, queryParams: {zipCode?: string}): Promise<XdslEligibilityCity[]>;
  /**
  Search for meeting time slot
  Search for meeting time slot
  **/
  public get(path: '/xdsl/eligibility/meetings', pathParams: null, queryParams: {offerLabel?: string, eligibilityId?: string}): Promise<XdslAsyncTask<XdslEligibilityMeetingSlots>>;
  /**
  Get an eligibility by its id
  Get an eligibility by its id
  **/
  public get(path: '/xdsl/eligibility/test', pathParams: null, queryParams: {id?: string}): Promise<XdslEligibilityEligibility>;
  /**
  Operations about the XDSL service
  List available services
  **/
  public get(path: '/xdsl', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the xdsl.TemplateModem objects
  List of TemplateModem
  **/
  public get(path: '/xdsl/templateModem', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Modem Template
  Get this object properties
  **/
  public get(path: '/xdsl/templateModem/{name}', pathParams: {name?: string}, queryParams: null): Promise<XdslTemplateModem>;
  /**
  Get all available spare brands
  Get all available spare brands
  **/
  public get(path: '/xdsl/spare/brands', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Spare properties
  Get this object properties
  **/
  public get(path: '/xdsl/spare/{spare}', pathParams: {spare?: string}, queryParams: null): Promise<SpareXdslXdslSpare>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/xdsl/spare/{spare}/serviceInfos', pathParams: {spare?: string}, queryParams: null): Promise<ServicesService>;
  /**
  compatibleReplacement operations
  Return the list of brand compatible to be replaced
  **/
  public get(path: '/xdsl/spare/{spare}/compatibleReplacement', pathParams: {spare?: string}, queryParams: null): Promise<string[]>;
  /**
  Operations about the XDSL service
  List available services
  **/
  public get(path: '/xdsl/spare', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the xdsl.Task objects
  Tasks scheduled for this access
  **/
  public get(path: '/xdsl/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {status?: XdslTaskStatusEnum, function?: string}): Promise<Number[]>;
  /**
  Describes the current status of a task
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/tasks/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<XdslTask>;
  /**
  XDSL Access
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslAccess>;
  /**
  canCancelResiliation operations
  Get information about the ongoing resiliation
  **/
  public get(path: '/xdsl/{serviceName}/canCancelResiliation', pathParams: {serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  Detected incident
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/incident', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslIncident>;
  /**
  totalDeconsolidationTerms operations
  Give the price to requestTotalDeconsolidation on the access
  **/
  public get(path: '/xdsl/{serviceName}/totalDeconsolidationTerms', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslDeconsolidationTerms>;
  /**
  List the xdsl.MonitoringNotification objects
  List the notifications for this access
  **/
  public get(path: '/xdsl/{serviceName}/monitoringNotifications', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Defines where and how the notifications will be sent
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/monitoringNotifications/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<XdslMonitoringNotification>;
  /**
  Current Return Merchandise Authorisation
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/rma/{id}', pathParams: {serviceName?: string, id?: string}, queryParams: null): Promise<TelephonyRma>;
  /**
  List the telephony.Rma objects
  Return Merchandise Authorisation associated
  **/
  public get(path: '/xdsl/{serviceName}/rma', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Information about the physical copper line
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}', pathParams: {serviceName?: string, number?: string}, queryParams: null): Promise<XdslLine>;
  /**
  statistics operations
  Get various statistics about the line
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}/statistics', pathParams: {serviceName?: string, number?: string}, queryParams: {type?: XdslLineStatisticsTypeEnum, period?: XdslStatisticsPeriodEnum}): Promise<ComplexTypeUnitAndValues<XdslTimestampAndValue>>;
  /**
  Information about the port on the DSLAM
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort', pathParams: {serviceName?: string, number?: string}, queryParams: null): Promise<XdslDslamPort>;
  /**
  availableProfiles operations
  List all availables profiles for this port
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles', pathParams: {serviceName?: string, number?: string}, queryParams: null): Promise<XdslDslamLineProfile[]>;
  /**
  logs operations
  Get the logs emitted by the DSLAM for this port
  **/
  public get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/logs', pathParams: {serviceName?: string, number?: string}, queryParams: {limit?: Number}): Promise<XdslDslamPortLog[]>;
  /**
  List the xdsl.Line objects
  The lines of the access
  **/
  public get(path: '/xdsl/{serviceName}/lines', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  radiusConnectionLogs operations
  List the radius connection logs
  **/
  public get(path: '/xdsl/{serviceName}/radiusConnectionLogs', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslRadiusConnectionLog[]>;
  /**
  Scheduled action before the next renewal of the service
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/pendingAction', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslPendingAction>;
  /**
  Modem
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslModem>;
  /**
  WLAN Configuration of the Modem
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}', pathParams: {serviceName?: string, wifiName?: string}, queryParams: null): Promise<XdslWLAN>;
  /**
  List the xdsl.WLAN objects
  List of WLANs on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/wifi', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  firmware operations
  Get the firmware version installed on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/firmware', pathParams: {serviceName?: string}, queryParams: null): Promise<string>;
  /**
  upnp operations
  Get the status of the Upnp on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/upnp', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslServiceStatusEnum>;
  /**
  List the xdsl.DHCP objects
  List of DHCP on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp', pathParams: {serviceName?: string, lanName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the xdsl.DHCPStaticAddress objects
  List of DHCP Static Address of this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses', pathParams: {serviceName?: string, lanName?: string, dhcpName?: string}, queryParams: null): Promise<string[]>;
  /**
  DHCP Static Address
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}', pathParams: {serviceName?: string, lanName?: string, dhcpName?: string, MACAddress?: string}, queryParams: null): Promise<XdslDHCPStaticAddress>;
  /**
  DHCP Configuration of the Modem
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}', pathParams: {serviceName?: string, lanName?: string, dhcpName?: string}, queryParams: null): Promise<XdslDHCP>;
  /**
  LAN Configuration of the Modem
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan/{lanName}', pathParams: {serviceName?: string, lanName?: string}, queryParams: null): Promise<XdslLAN>;
  /**
  List the xdsl.LAN objects
  List of LANs on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/lan', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Connected Device
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/connectedDevices/{macAddress}', pathParams: {serviceName?: string, macAddress?: string}, queryParams: null): Promise<XdslConnectedDevice>;
  /**
  List the xdsl.connectedDevice objects
  List of devices connected on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/connectedDevices', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  availableWLANChannel operations
  List available WLAN channel for this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/availableWLANChannel', pathParams: {serviceName?: string}, queryParams: {frequency?: XdslWLANFrequencyEnum}): Promise<Number[]>;
  /**
  sipAlg operations
  Get the status of sip alg service on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/sipAlg', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslServiceStatusEnum>;
  /**
  firmwareAvailable operations
  List available firmware for this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/firmwareAvailable', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  ftp operations
  Get the status of ftp service on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/ftp', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslServiceStatusEnum>;
  /**
  ipsecAlg operations
  Get the status of ipsec alg service on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/ipsecAlg', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslServiceStatusEnum>;
  /**
  contentSharing operations
  Get the status of contentSharing on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/contentSharing', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslServiceStatusEnum>;
  /**
  Port Mappings
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/modem/portMappings/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<XdslPortMapping>;
  /**
  List the xdsl.PortMapping objects
  List of PortMappings on this modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/portMappings', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  blocIp operations
  Get the status of the Bloc IP on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/blocIp', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslServiceStatusEnum>;
  /**
  callWaiting operations
  Get the status of callWaiting on modem
  **/
  public get(path: '/xdsl/{serviceName}/modem/callWaiting', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslServiceStatusEnum>;
  /**
  evidences operations
  List of evidences stored on PCS for this ip
  **/
  public get(path: '/xdsl/{serviceName}/antiSpams/{ip}/evidences', pathParams: {serviceName?: string, ip?: string}, queryParams: null): Promise<XdslAntiSpamEvidencesInfo>;
  /**
  Spams detected from xdsl access
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/antiSpams/{ip}', pathParams: {serviceName?: string, ip?: string}, queryParams: null): Promise<XdslAntiSpam>;
  /**
  List the xdsl.AntiSpam objects
  List antiSpams for this access
  **/
  public get(path: '/xdsl/{serviceName}/antiSpams', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  resiliationTerms operations
  Get resiliation terms
  **/
  public get(path: '/xdsl/{serviceName}/resiliationTerms', pathParams: {serviceName?: string}, queryParams: {resiliationDate?: Date}): Promise<XdslResiliationTerms>;
  /**
  List the xdsl.IP objects
  List of IPs addresses for this access
  **/
  public get(path: '/xdsl/{serviceName}/ips', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Informations about an IP address
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/ips/{ip}', pathParams: {serviceName?: string, ip?: string}, queryParams: null): Promise<XdslIP>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  resiliationFollowup operations
  Get information about the ongoing resiliation
  **/
  public get(path: '/xdsl/{serviceName}/resiliationFollowup', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslResiliationFollowUpDetail>;
  /**
  Diagnostic of the access
  Get this object properties
  **/
  public get(path: '/xdsl/{serviceName}/diagnostic', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslAccessDiagnostic>;
  /**
  orderFollowup operations
  Get the status of the order
  **/
  public get(path: '/xdsl/{serviceName}/orderFollowup', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslOrderFollowupStep[]>;
  /**
  extraIpRange operations
  Informations about the extra IP range during address move
  **/
  public get(path: '/xdsl/{serviceName}/addressMove/extraIpRange', pathParams: {serviceName?: string}, queryParams: null): Promise<XdslExtraIpRangeMove>;
  /**
  statistics operations
  Get various statistics about this access
  **/
  public get(path: '/xdsl/{serviceName}/statistics', pathParams: {serviceName?: string}, queryParams: {period?: XdslStatisticsPeriodEnum, type?: XdslAccessStatisticsTypeEnum}): Promise<ComplexTypeUnitAndValues<XdslTimestampAndValue>>;
  /**
  Operations about the XDSL service
  List available services
  **/
  public get(path: '/xdsl/email/pro', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  XDSL Email Pro
  Get this object properties
  **/
  public get(path: '/xdsl/email/pro/{email}', pathParams: {email?: string}, queryParams: null): Promise<XdslXdslEmailPro>;
  /**
  List the xdsl.Incident objects
  List of incidents
  **/
  public get(path: '/xdsl/incidents', pathParams: null, queryParams: {endDate?: Date, creationDate?: Date}): Promise<Number[]>;
  /**
  Detected incident
  Get this object properties
  **/
  public get(path: '/xdsl/incidents/{id}', pathParams: {id?: Number}, queryParams: null): Promise<XdslIncident>;
  public get(path: PathsxdslGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Modem Template
  Alter this object properties
  **/
  public put(path: '/xdsl/templateModem/{name}', pathParams: {name?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/xdsl/spare/{spare}/serviceInfos', pathParams: {spare?: string}, bodyParams: null): Promise<void>;
  /**
  XDSL Access
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Defines where and how the notifications will be sent
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/monitoringNotifications/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Current Return Merchandise Authorisation
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/rma/{id}', pathParams: {serviceName?: string, id?: string}, bodyParams: null): Promise<void>;
  /**
  Modem
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  WLAN Configuration of the Modem
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}', pathParams: {serviceName?: string, wifiName?: string}, bodyParams: null): Promise<void>;
  /**
  DHCP Static Address
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}', pathParams: {serviceName?: string, lanName?: string, dhcpName?: string, MACAddress?: string}, bodyParams: null): Promise<void>;
  /**
  DHCP Configuration of the Modem
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}', pathParams: {serviceName?: string, lanName?: string, dhcpName?: string}, bodyParams: null): Promise<void>;
  /**
  LAN Configuration of the Modem
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/lan/{lanName}', pathParams: {serviceName?: string, lanName?: string}, bodyParams: null): Promise<void>;
  /**
  Port Mappings
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/modem/portMappings/{name}', pathParams: {serviceName?: string, name?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/xdsl/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  XDSL Email Pro
  Alter this object properties
  **/
  public put(path: '/xdsl/email/pro/{email}', pathParams: {email?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsxdslPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Get the active lines at given address
  Get the active lines at given address
  **/
  public post(path: '/xdsl/eligibility/lines/active', pathParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<XdslEligibilityLine>>;
  /**
  Get the inactive lines at given address
  Get the inactive lines at given address
  **/
  public post(path: '/xdsl/eligibility/lines/inactive', pathParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<XdslEligibilityLine>>;
  /**
  Get all localities linked to a zip code
  Get all localities linked to a zip code
  **/
  public post(path: '/xdsl/eligibility/search/cities', pathParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<XdslEligibilityCity>>;
  /**
  Get all street linked to a locality
  Get all street linked to a locality
  **/
  public post(path: '/xdsl/eligibility/search/fiberStreets', pathParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<XdslEligibilityFiberStreet>>;
  /**
  Get all buildings for a specific address
  Get all buildings for a specific address
  **/
  public post(path: '/xdsl/eligibility/search/buildings', pathParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<XdslEligibilityBuilding>>;
  /**
  Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
  Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
  **/
  public post(path: '/xdsl/eligibility/search/streetNumbers', pathParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<string>>;
  /**
  Do an eligibility for an address, if no line exist
  Do an eligibility for an address, if no line exist
  **/
  public post(path: '/xdsl/eligibility/test/address', pathParams: null, bodyParams: null): Promise<XdslAsyncTask<XdslEligibilityEligibility>>;
  /**
  Do an eligibility for a line
  Do an eligibility for a line
  **/
  public post(path: '/xdsl/eligibility/test/line', pathParams: null, bodyParams: null): Promise<XdslAsyncTask<XdslEligibilityEligibility>>;
  /**
  Perform a fiber eligibility for a building
  Perform a fiber eligibility for a building
  **/
  public post(path: '/xdsl/eligibility/test/fiber/building', pathParams: null, bodyParams: null): Promise<XdslAsyncTask<XdslEligibilityFiberEligibility>>;
  /**
  List the xdsl.TemplateModem objects
  Create new Modem Template from existing modem
  **/
  public post(path: '/xdsl/templateModem', pathParams: null, bodyParams: null): Promise<XdslTemplateModem>;
  /**
  returnMerchandise operations
  Return the broken equipment in instantRefund
  **/
  public post(path: '/xdsl/spare/{spare}/returnMerchandise', pathParams: {spare?: string}, bodyParams: null): Promise<void>;
  /**
  replace operations
  Replace the modem by its spare
  **/
  public post(path: '/xdsl/spare/{spare}/replace', pathParams: {spare?: string}, bodyParams: null): Promise<void>;
  /**
  resiliate operations
  Resiliate the access
  **/
  public post(path: '/xdsl/{serviceName}/resiliate', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslResiliationFollowUpDetail>;
  /**
  archive operations
  Delete the task in problem from the results
  **/
  public post(path: '/xdsl/{serviceName}/tasks/{id}/archive', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  requestPPPLoginMail operations
  Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin
  **/
  public post(path: '/xdsl/{serviceName}/requestPPPLoginMail', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  cancelResiliation operations
  Cancel the ongoing resiliation
  **/
  public post(path: '/xdsl/{serviceName}/cancelResiliation', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  sendOrderToProvider operations
  Unlock order in "waitingCustomer" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider
  **/
  public post(path: '/xdsl/{serviceName}/sendOrderToProvider', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  applyTemplateToModem operations
  Apply TemplateModem to existing Modem
  **/
  public post(path: '/xdsl/{serviceName}/applyTemplateToModem', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  List the xdsl.MonitoringNotification objects
  Add a notification
  **/
  public post(path: '/xdsl/{serviceName}/monitoringNotifications', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslMonitoringNotification>;
  /**
  changeProfile operations
  Change the profile of the port
  **/
  public post(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile', pathParams: {serviceName?: string, number?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  reset operations
  Reset the port on the DSLAM
  **/
  public post(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/reset', pathParams: {serviceName?: string, number?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  run operations
  Update and get advanced diagnostic of the line
  **/
  public post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/run', pathParams: {serviceName?: string, number?: string}, bodyParams: null): Promise<XdslLineDiagnosticDiagnostic>;
  /**
  cancel operations
  Cancel line diagnostic if possible
  **/
  public post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/cancel', pathParams: {serviceName?: string, number?: string}, bodyParams: null): Promise<void>;
  /**
  ipv6 operations
  Change the status of the IPv6 for this access
  **/
  public post(path: '/xdsl/{serviceName}/ipv6', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  firmware operations
  Launch a task to install target firmware on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/firmware', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  retrieveInfo operations
  get general Modem information
  **/
  public post(path: '/xdsl/{serviceName}/modem/retrieveInfo', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslAsyncTask<XdslModemInfo>>;
  /**
  upnp operations
  Change the status of the Upnp on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/upnp', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  resetPortMappingConfig operations
  Remove all the current port mapping rules
  **/
  public post(path: '/xdsl/{serviceName}/modem/resetPortMappingConfig', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  List the xdsl.DHCPStaticAddress objects
  Add a DHCP static lease
  **/
  public post(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses', pathParams: {serviceName?: string, lanName?: string, dhcpName?: string}, bodyParams: null): Promise<XdslDHCPStaticAddress>;
  /**
  sipAlg operations
  Change the status of the sip alg service on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/sipAlg', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  refreshConnectedDevices operations
  Refresh the list of connected devices on the modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/refreshConnectedDevices', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  reboot operations
  Reboot the modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/reboot', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  ftp operations
  Change the status of the ftp service on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/ftp', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  reset operations
  Reset the modem to its default configuration
  **/
  public post(path: '/xdsl/{serviceName}/modem/reset', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  ipsecAlg operations
  Change the status of the ipsec alg service on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/ipsecAlg', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  contentSharing operations
  Change the status of contentSharing on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/contentSharing', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  List the xdsl.PortMapping objects
  Add a port mapping
  **/
  public post(path: '/xdsl/{serviceName}/modem/portMappings', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslPortMapping>;
  /**
  blocIp operations
  Change the status of the Bloc IP on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/blocIp', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  duplicatePortMappingConfig operations
  Remove all the current port mapping rules and set the same config as the access given in parameters
  **/
  public post(path: '/xdsl/{serviceName}/modem/duplicatePortMappingConfig', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  callWaiting operations
  Change the status of callWaiting on modem
  **/
  public post(path: '/xdsl/{serviceName}/modem/callWaiting', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  updateInvalidOrMissingRio operations
  Update RIO, or disable portability, for order in error because of missing or invalid RIO
  **/
  public post(path: '/xdsl/{serviceName}/updateInvalidOrMissingRio', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  List the xdsl.IP objects
  Order an extra /29 range of IPv4 addresses
  **/
  public post(path: '/xdsl/{serviceName}/ips', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  requestTotalDeconsolidation operations
  Switch this access to total deconsolidation
  **/
  public post(path: '/xdsl/{serviceName}/requestTotalDeconsolidation', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  Diagnostic of the access
  Run diagnostic on the access
  **/
  public post(path: '/xdsl/{serviceName}/diagnostic', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/xdsl/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  extraIpRangeMove operations
  Initiate the extra IP range migration
  **/
  public post(path: '/xdsl/{serviceName}/addressMove/extraIpRangeMove', pathParams: {serviceName?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  changePassword operations
  Change the email password
  **/
  public post(path: '/xdsl/email/pro/{email}/changePassword', pathParams: {email?: string}, bodyParams: null): Promise<XdslEmailProTask>;
  public post(path: PathsxdslPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Modem Template
  Delete this Modem Template
  **/
  public delete(path: '/xdsl/templateModem/{name}', pathParams: {name?: string}, bodyParams: null): Promise<void>;
  /**
  Spare properties
  Delete the spare as if it was not belonging to OVH anymore
  **/
  public delete(path: '/xdsl/spare/{spare}', pathParams: {spare?: string}, bodyParams: null): Promise<void>;
  /**
  Defines where and how the notifications will be sent
  Delete this notification
  **/
  public delete(path: '/xdsl/{serviceName}/monitoringNotifications/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Current Return Merchandise Authorisation
  Cancel the rma
  **/
  public delete(path: '/xdsl/{serviceName}/rma/{id}', pathParams: {serviceName?: string, id?: string}, bodyParams: null): Promise<void>;
  /**
  DHCP Static Address
  Delete this port mapping
  **/
  public delete(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}', pathParams: {serviceName?: string, lanName?: string, dhcpName?: string, MACAddress?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  Port Mappings
  Delete this port mapping
  **/
  public delete(path: '/xdsl/{serviceName}/modem/portMappings/{name}', pathParams: {serviceName?: string, name?: string}, bodyParams: null): Promise<XdslTask>;
  /**
  Informations about an IP address
  Stop renewing this extra IPv4 option
  **/
  public delete(path: '/xdsl/{serviceName}/ips/{ip}', pathParams: {serviceName?: string, ip?: string}, bodyParams: null): Promise<void>;
  /**
  XDSL Email Pro
  Delete the email
  **/
  public delete(path: '/xdsl/email/pro/{email}', pathParams: {email?: string}, bodyParams: null): Promise<void>;
  public delete(path: PathsxdslDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

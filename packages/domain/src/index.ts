import { ApiCommon } from '@ovh-api/common';
/**
 * Dnssec Status
 */
export type DnssecDnssecStatusEnum = 'disableInProgress' | 'disabled' | 'enableInProgress' | 'enabled';
/**
 * Key type
 */
export interface DnssecKey {
  /**
   * Flag of the dnssec key
   *
   */
  flags?: DnssecKeyFlagEnum;
  /**
   * Public key
   *
   */
  publicKey?: string;
  /**
   * Key tag
   *
   */
  tag?: Number;
  /**
   * Algorithm
   *
   */
  algorithm?: DnssecKeyAlgorithmEnum;
}
/**
 * Dnssec Algorithm
                        ###
                        3  : DSA
                        5  : RSASHA1
                        6  : DSA-NSEC3-SHA1
                        7  : RSASHA1-NSEC3-SHA1
                        8  : RSASHA256
                        10 : RSASHA512
                        13 : ECDSAP256SHA256
                        14 : ECDSAP384SHA384
 */
export type DnssecKeyAlgorithmEnum = 10 | 13 | 14 | 3 | 5 | 6 | 7 | 8;
/**
 * Dnssec Key Flag Type
                        ###
                        256 : Zone Signing Key (ZSK)
                        257 : Key  Signing Key (KSK)
 */
export type DnssecKeyFlagEnum = 256 | 257;
/**
 * 
                Generated : The key has been created, but has not yet been used for anything.
                ###
                Published : The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.
                ###
                Ready     : The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.
                ###
                Active    : The key has started to be used to sign RRsets.
                ###
                Retired   : A successor key has become active and this key is no longer being used to generate RRSIGs.
                ###
                Removed   : The key has been removed from the zone.
                ###
                Revoked   : The key is published for a period with the "revoke" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.
 */
export type DnssecKeyStatusEnum = 'active' | 'generated' | 'published' | 'removed' | 'retired' | 'revoked';
/**
 * Contact type fields
 */
export type DomainContactAllTypesEnum = 'admin' | 'all' | 'billing' | 'owner' | 'tech';
/**
 * CurrentNameServer
 */
export interface DomainCurrentNameServer {
  /**
   * toDelete flag of the name server
   *
   */
  toDelete?: boolean;
  /**
   * Ip of the name server
   *
   */
  ip?: string;
  /**
   * Host of the name server
   *
   */
  host?: string;
  /**
   * Id of the name server
   *
   */
  id?: Number;
  /**
   * isUsed flag of the name server
   *
   */
  isUsed?: boolean;
}
/**
 * Domain's DNSSEC Key
 */
export interface DomainDnssecKey {
  /**
   * Flag of the DNSSEC key
   *
   */
  flags?: DnssecKeyFlagEnum;
  /**
   * Public key
   *
   */
  publicKey?: string;
  /**
   * Tag of the DNSSEC key
   *
   */
  tag?: Number;
  /**
   * Id of the DNSSEC key
   *
   */
  id?: Number;
  /**
   * Algorithm number of the DNSSEC key
   *
   */
  algorithm?: DnssecKeyAlgorithmEnum;
  /**
   * Key status of the DNSSEC key
   *
   */
  status?: DnssecKeyStatusEnum;
}
/**
 * Domain name administration
 */
export interface DomainDomain {
  /**
   * Domain's offer
   *
   */
  offer?: DomainOfferEnum;
  /**
   * Transfer lock status
   *
   */
  transferLockStatus?: DomainDomainLockStatusEnum;
  /**
   * Contact Owner (you can edit it via /me/contact/<ID>)
   *
   */
  whoisOwner?: string;
  /**
   * Name servers type
   *
   */
  nameServerType?: DomainDomainNsTypeEnum;
  /**
   * Is whois obfuscation supported by this domain name's registry
   *
   */
  owoSupported?: boolean;
  /**
   * Is DNSSEC implemented for this domain name's tld
   *
   */
  dnssecSupported?: boolean;
  /**
   * Last update date
   *
   */
  lastUpdate?: Date;
  /**
   * Domain name
   *
   */
  domain?: string;
  /**
   * Parent service
   *
   */
  parentService?: DomainParentService;
  /**
   * Does the registry support multi ip glue record
   *
   */
  glueRecordMultiIpSupported?: boolean;
  /**
   * Does the registry support ipv6 glue record
   *
   */
  glueRecordIpv6Supported?: boolean;
}
/**
 * All contact type for a domain
 */
export type DomainDomainContactTypeEnum = 'admin' | 'billing' | 'owner' | 'tech';
/**
 * Domain lock status
 */
export type DomainDomainLockStatusEnum = 'locked' | 'locking' | 'unavailable' | 'unlocked' | 'unlocking';
/**
 * Name server
 */
export interface DomainDomainNs {
  /**
   * Ip
   *
   */
  ip?: string;
  /**
   * Host
   *
   */
  host?: string;
}
/**
 * DNS server state
 */
export type DomainDomainNsStateEnum = 'ko' | 'ok';
/**
 * DNS server status
 */
export interface DomainDomainNsStatus {
  /**
   * Date from which the DNS server is used by the domain
   *
   */
  usedSince?: Date;
  /**
   * Whether or not the DNS server is working
   *
   */
  state?: DomainDomainNsStateEnum;
  /**
   * Whether or not the DNS server is managed by OVH
   *
   */
  type?: DomainDomainNsTypeEnum;
}
/**
 * DomainNS Type
 */
export type DomainDomainNsTypeEnum = 'external' | 'hosted';
/**
 * Glue record
 */
export interface DomainGlueRecord {
  /**
   * Host of the glue record
   *
   */
  host?: string;
  /**
   * Ips of the glue record
   *
   */
  ips?: string[];
}
/**
 * Offer
 */
export type DomainOfferEnum = 'diamond' | 'gold' | 'platinum';
/**
 * Operation status
 */
export type DomainOperationStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Whois optin fields
 */
export type DomainOptinFieldsEnum = 'address' | 'city' | 'country' | 'email' | 'fax' | 'name' | 'organisation' | 'phone' | 'province' | 'zip';
/**
 * Obfuscate whois
 */
export interface DomainOwo {
  /**
   * Obfuscated field
   *
   */
  field?: DomainWhoisObfuscatorFieldsEnum;
}
/**
 * Parent service
 */
export interface DomainParentService {
  /**
   * Name of the parent service
   *
   */
  name?: string;
  /**
   * Type of the parent service
   *
   */
  type?: DomainParentServiceTypeEnum;
}
/**
 * Parent service type enum
 */
export type DomainParentServiceTypeEnum = '/allDom';
/**
 * Description not available
 */
export interface DomainRule {
  /**
   */
  allowedValues?: string[];
  /**
   */
  innerConfigurations?: DomainRule[];
  /**
   */
  description?: string;
  /**
   */
  label?: string;
  /**
   */
  fields?: string[];
  /**
   */
  type?: string;
  /**
   */
  required?: boolean;
}
/**
 * Tasks associated to domain
 */
export interface DomainTask {
  /**
   * Last update date of the task
   *
   */
  lastUpdate?: Date;
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
   * Comment about the task
   *
   */
  comment?: string;
  /**
   * Id of the task
   *
   */
  id?: Number;
  /**
   * Can accelerate the task
   *
   */
  canAccelerate?: boolean;
  /**
   * Creation date of the task
   *
   */
  creationDate?: Date;
  /**
   * Done date of the task
   *
   */
  doneDate?: Date;
  /**
   * Can relaunch the task
   *
   */
  canRelaunch?: boolean;
  /**
   * Status of the task
   *
   */
  status?: DomainOperationStatusEnum;
  /**
   * Can cancel the task
   *
   */
  canCancel?: boolean;
}
/**
 * Representation of a UK Registrar (used for outgoing transfer)
 */
export interface DomainUkRegistrar {
  /**
   * Registrar name
   *
   */
  name?: string;
  /**
   * Registrar tag
   *
   */
  tag?: string;
}
/**
 * Whois obfuscable fields
 */
export type DomainWhoisObfuscatorFieldsEnum = 'address' | 'email' | 'phone';
/**
 * Representation of the obfuscated emails configuration
 */
export interface DomainConfigurationsObfuscatedEmail {
  /**
   * Contact's type associated to the obfuscated email
   *
   */
  type?: DomainContactAllTypesEnum;
  /**
   * Obfuscated email value
   *
   */
  value?: string;
}
/**
 * Representation of the optin configuration
 */
export interface DomainConfigurationsOptin {
  /**
   * Contact's type associated to the optin configuration
   *
   */
  type?: DomainContactAllTypesEnum;
  /**
   * Displayed fields
   *
   */
  fields?: DomainOptinFieldsEnum[];
}
/**
 * Representation of an Inpi additional information for a corporation
 */
export interface DomainDataAfnicCorporationTrademarkContact {
  /**
   * Number of the Inpi declaration
   *
   */
  inpiNumber?: string;
  /**
   * Owner of the trademark
   *
   */
  inpiTrademarkOwner?: string;
  /**
   * Contact ID related to the Inpi additional information
   *
   */
  contactId?: Number;
  /**
   * Corporation Inpi additional information ID
   *
   */
  id?: Number;
}
/**
 * Representation of a Association additional information
 */
export interface DomainDataAssociationContact {
  /**
   * Page number of the publication of the declaration of the association
   *
   */
  publicationPageNumber?: string;
  /**
   * Date of the declaration of the association
   *
   */
  declarationDate?: Date;
  /**
   * Contact ID related to the association contact information
   *
   */
  contactId?: Number;
  /**
   * Association additional information ID
   *
   */
  id?: Number;
  /**
   * Date of the publication of the declaration of the association
   *
   */
  publicationDate?: Date;
  /**
   * Number of the publication of the declaration of the association
   *
   */
  publicationNumber?: string;
}
/**
 * Representation of an .pro Contact Resource
 */
export interface DomainDataProContact {
  /**
   * Authority that certify your profesional status
   *
   */
  authority?: string;
  /**
   * License number given by the authority
   *
   */
  licenseNumber?: string;
  /**
   * Description of your job
   *
   */
  jobDescription?: string;
  /**
   * .pro Contact ID
   *
   */
  id?: Number;
  /**
   * Website of the authority that certify your profesional status
   *
   */
  authorityWebsite?: string;
}
/**
 * Representation of a SMD Resource file
 */
export interface DomainDataSmd {
  /**
   * List of the labels that are protected with that SMD file
   *
   */
  protectedLabels?: DomainDataSmdLabel[];
  /**
   * Date when information about SMD file aren't valid anymore
   *
   */
  notAfter?: Date;
  /**
   * TMCH Internal identifier
   *
   */
  smdId?: string;
  /**
   * SMD file content
   *
   */
  data?: string;
  /**
   * SMD file ID
   *
   */
  id?: Number;
  /**
   * Date before when information about SMD file aren't valid yet
   *
   */
  notBefore?: Date;
}
/**
 * Representation of a protected label
 */
export interface DomainDataSmdLabel {
  /**
   * Trademark associated to the protected label
   *
   */
  trademark?: string;
  /**
   * Label that is protected
   *
   */
  label?: string;
}
/**
 * Address for a claim notice holder
 */
export interface DomainDataClaimNoticeAddress {
  /**
   * Phone number
   *
   */
  voice?: string;
  /**
   * Array of street name
   *
   */
  streets?: string[];
  /**
   * State of province
   *
   */
  stateOrProvince?: string;
  /**
   * City
   *
   */
  city?: string;
  /**
   * Country code
   *
   */
  countryCode?: NichandleCountryEnum;
  /**
   * Postal zip code
   *
   */
  postalCode?: string;
  /**
   * Fax number extension
   *
   */
  faxExtension?: string;
  /**
   * Fax number
   *
   */
  fax?: string;
  /**
   * Phone number extension
   *
   */
  voiceExtension?: string;
}
/**
 * Definition of claim notices applying to a domain name
 */
export interface DomainDataClaimNoticeClaimNotice {
  /**
   * Ending date of claim notice
   *
   */
  endingDate?: string;
  /**
   * Array of claim notice for the domain
   *
   */
  claims?: DomainDataClaimNoticeClaimNoticeDecision[];
  /**
   * Claim notice ID
   *
   */
  id?: string;
  /**
   * Label referring to claim notice
   *
   */
  label?: string;
  /**
   * Type of claim notice
   *
   */
  type?: DomainDataClaimNoticeClaimNoticeTypeEnum;
  /**
   * Beginning date of claim notice
   *
   */
  startingDate?: string;
}
/**
 * Definition of a single claim notice
 */
export interface DomainDataClaimNoticeClaimNoticeDecision {
  /**
   * Classifications where trademark claim notice apply
   *
   */
  classifications?: DomainDataClaimNoticeClassification[];
  /**
   * Trademark contacts
   *
   */
  trademarkContacts?: DomainDataClaimNoticeContact[];
  /**
   * Trademark holders
   *
   */
  trademarkHolders?: DomainDataClaimNoticeContact[];
  /**
   * Mark name implicated in claim notice
   *
   */
  markName?: string;
  /**
   * Name of jurisdiction
   *
   */
  jurisdiction?: string;
  /**
   * Array of court decisions related to claim notice
   *
   */
  courtDecisions?: DomainDataClaimNoticeCourtDecision[];
  /**
   * Jurisdiction country code
   *
   */
  jurisdictionCountryCode?: string;
  /**
   * Goods and services on which apply claim notice
   *
   */
  goodsAndServices?: string;
  /**
   * Trademark UDRP informations
   *
   */
  trademarkUDRP?: DomainDataClaimNoticeUDRP[];
}
/**
 * Type of claim notice
 */
export type DomainDataClaimNoticeClaimNoticeTypeEnum = 'UK' | 'TRADEMARK';
/**
 * Definition of a trademark claim notice classification
 */
export interface DomainDataClaimNoticeClassification {
  /**
   * Code of the classification
   *
   */
  number?: string;
  /**
   * Summary of the classification
   *
   */
  description?: string;
}
/**
 * Contact definition of a claim notice holder
 */
export interface DomainDataClaimNoticeContact {
  /**
   * Address of holder
   *
   */
  address?: DomainDataClaimNoticeAddress;
  /**
   * Name of claim notice holder
   *
   */
  name?: string;
  /**
   * Organisation name
   *
   */
  organisation?: string;
  /**
   * Legitimacy of holder
   *
   */
  entitlement?: string;
  /**
   * Type of contact
   *
   */
  type?: string;
  /**
   * Email address
   *
   */
  email?: string;
}
/**
 * Definition of a court decision
 */
export interface DomainDataClaimNoticeCourtDecision {
  /**
   * Regions where court decision apply
   *
   */
  regions?: string[];
  /**
   * Court name
   *
   */
  courtName?: string;
  /**
   * Reference number of court decision
   *
   */
  referenceNumber?: string;
  /**
   * Country code
   *
   */
  countryCode?: string;
}
/**
 * Definition of a UDRP procedure
 */
export interface DomainDataClaimNoticeUDRP {
  /**
   * Case number
   *
   */
  caseNumber?: string;
  /**
   * UDRP Provider
   *
   */
  udrpProvider?: string;
}
/**
 * Representation of the optin rule
 */
export interface DomainRulesOptin {
  /**
   * Contact's type associated to the optin rule
   *
   */
  type?: DomainContactAllTypesEnum;
  /**
   * Displayed fields
   *
   */
  fields?: DomainOptinFieldsEnum[];
}
/**
 * Manage Dnssec for this zone
 */
export interface DomainZoneDnssec {
  /**
   */
  status?: DnssecDnssecStatusEnum;
}
/**
 * Manage DynHost login
 */
export interface DomainZoneDynHostLogin {
  /**
   * Zone
   *
   */
  zone?: string;
  /**
   * Subdomain that the login will be allowed to update (* to allow all)
   *
   */
  subDomain?: string;
  /**
   * Login
   *
   */
  login?: string;
}
/**
 * DynHost record
 */
export interface DomainZoneDynHostRecord {
  /**
   * Zone of the DynHost record
   *
   */
  zone?: string;
  /**
   * Subdomain of the DynHost record
   *
   */
  subDomain?: string;
  /**
   * Ip address of the DynHost record
   *
   */
  ip?: string;
  /**
   * Id of the DynHost record
   *
   */
  id?: Number;
  /**
   * DynHost record ttl
   *
   */
  ttl?: Number;
}
/**
 * Zone resource records
 */
export interface DomainZoneRecord {
  /**
   * Resource record zone
   *
   */
  zone?: string;
  /**
   * Resource record subdomain
   *
   */
  subDomain?: string;
  /**
   * Id of the zone resource record
   *
   */
  id?: Number;
  /**
   * Resource record Name
   *
   */
  fieldType?: ZoneNamedResolutionFieldTypeEnum;
  /**
   * Resource record ttl
   *
   */
  ttl?: Number;
  /**
   * Resource record target
   *
   */
  target?: string;
}
/**
 * Redirection
 */
export interface DomainZoneRedirection {
  /**
   * Keywords for invisible redirection
   *
   */
  keywords?: string;
  /**
   * Redirection zone
   *
   */
  zone?: string;
  /**
   * subdomain to redirect
   *
   */
  subDomain?: string;
  /**
   * Desciption for invisible redirection
   *
   */
  description?: string;
  /**
   * Id of the redirection
   *
   */
  id?: Number;
  /**
   * Title for invisible redirection
   *
   */
  title?: string;
  /**
   * Redirection type
   *
   */
  type?: ZoneRedirectionTypeEnum;
  /**
   * Target of the redirection
   *
   */
  target?: string;
}
/**
 * Zone Start Of Authority
 */
export interface DomainZoneSoa {
  /**
   * Primary authoritative server
   *
   */
  server?: string;
  /**
   * Non-Existent Domain TTL, if the name server returns a negative response, the remote server should wait the number of seconds set in the nxDomainTtl field before trying again
   *
   */
  nxDomainTtl?: Number;
  /**
   * The serial number is used to indicate which copy of the zone file is the most current. When editing zone files, you must increment the serial number
   *
   */
  serial?: Number;
  /**
   * When a zone transfer fails, a countdown clock begins. When the number of seconds set in the expire field elapses, the nameserver stops answering for that zone file
   *
   */
  expire?: Number;
  /**
   * The refresh value determines the interval in seconds between successful zone transfers of the entire zone file from a nameserver to another.
   *
   */
  refresh?: Number;
  /**
   * Time To Live in seconds
   *
   */
  ttl?: Number;
  /**
   * Email address of the DNS Administrator
   *
   */
  email?: string;
}
/**
 * Tasks associated to a zone
 */
export interface DomainZoneTask {
  /**
   * Function of the task
   *
   */
  function?: string;
  /**
   * Last update date of the task
   *
   */
  lastUpdate?: Date;
  /**
   * Todo date of the task
   *
   */
  todoDate?: Date;
  /**
   * Comment about the task
   *
   */
  comment?: string;
  /**
   * Can accelerate the task
   *
   */
  canAccelerate?: boolean;
  /**
   * Id of the task
   *
   */
  id?: Number;
  /**
   * Creation date of the task
   *
   */
  creationDate?: Date;
  /**
   * Can relaunch the task
   *
   */
  canRelaunch?: boolean;
  /**
   * Done date of the task
   *
   */
  doneDate?: Date;
  /**
   * Can cancel the task
   *
   */
  canCancel?: boolean;
  /**
   * Status of the task
   *
   */
  status?: DomainOperationStatusEnum;
}
/**
 * Zone dns Management
 */
export interface DomainZoneZone {
  /**
   * hasDnsAnycast flag of the DNS zone
   *
   */
  hasDnsAnycast?: boolean;
  /**
   * Is DNSSEC supported by this zone
   *
   */
  dnssecSupported?: boolean;
  /**
   * Last update date of the DNS zone
   *
   */
  lastUpdate?: Date;
  /**
   * Name servers that host the DNS zone
   *
   */
  nameServers?: string[];
}
/**
 * Zone restore point
 */
export interface DomainZoneZoneRestorePoint {
  /**
   * URL to get backup content
   *
   */
  zoneFileUrl?: string;
  /**
   * Date of backup creation
   *
   */
  creationDate?: Date;
}
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
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
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
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
/**
 * Resource record fieldType
 */
export type ZoneNamedResolutionFieldTypeEnum = 'A' | 'AAAA' | 'CAA' | 'CNAME' | 'DKIM' | 'DMARC' | 'LOC' | 'MX' | 'NAPTR' | 'NS' | 'PTR' | 'SPF' | 'SRV' | 'SSHFP' | 'TLSA' | 'TXT';
/**
 * Redirection type enum : visible -> Redirection by http code 302, visiblePermanent -> Redirection by http code 301, invisible -> Redirection by html frame
 */
export type ZoneRedirectionTypeEnum = 'invisible' | 'visible' | 'visiblePermanent';
/**
 * Resource record
 */
export interface ZoneResetRecord {
  /**
   */
  fieldType?: ZoneResettableNamedResolutionFieldTypeEnum;
  /**
   * Resource record target
   *
   */
  target?: string;
}
/**
 * Resource record type
 */
export type ZoneResettableNamedResolutionFieldTypeEnum = 'A' | 'MX';
/**
 * Zone status
 */
export interface ZoneStatus {
  /**
   * Warning list
   *
   */
  warnings?: string[];
  /**
   * True if the zone has successfully been deployed
   *
   */
  isDeployed?: boolean;
  /**
   * Error list
   *
   */
  errors?: string[];
}
type PathsdomainGET = '/domain' | 
'/domain/rules' | 
'/domain/zone' | 
'/domain/zone/{zoneName}' | 
'/domain/zone/{zoneName}/record/{id}' | 
'/domain/zone/{zoneName}/record' | 
'/domain/zone/{zoneName}/history/{creationDate}' | 
'/domain/zone/{zoneName}/history' | 
'/domain/zone/{zoneName}/status' | 
'/domain/zone/{zoneName}/serviceInfos' | 
'/domain/zone/{zoneName}/task' | 
'/domain/zone/{zoneName}/task/{id}' | 
'/domain/zone/{zoneName}/dynHost/record/{id}' | 
'/domain/zone/{zoneName}/dynHost/record' | 
'/domain/zone/{zoneName}/dynHost/login' | 
'/domain/zone/{zoneName}/dynHost/login/{login}' | 
'/domain/zone/{zoneName}/soa' | 
'/domain/zone/{zoneName}/dnssec' | 
'/domain/zone/{zoneName}/redirection/{id}' | 
'/domain/zone/{zoneName}/redirection' | 
'/domain/zone/{zoneName}/export' | 
'/domain/{serviceName}/nameServer' | 
'/domain/{serviceName}/nameServer/{id}' | 
'/domain/{serviceName}/ukRegistrars' | 
'/domain/{serviceName}' | 
'/domain/{serviceName}/dsRecord' | 
'/domain/{serviceName}/dsRecord/{id}' | 
'/domain/{serviceName}/glueRecord/{host}' | 
'/domain/{serviceName}/glueRecord' | 
'/domain/{serviceName}/task' | 
'/domain/{serviceName}/task/{id}' | 
'/domain/{serviceName}/serviceInfos' | 
'/domain/{serviceName}/owo/{field}' | 
'/domain/{serviceName}/owo' | 
'/domain/{serviceName}/configurations/optin' | 
'/domain/{serviceName}/configurations/obfuscatedEmails' | 
'/domain/{serviceName}/rules/emailsObfuscation' | 
'/domain/{serviceName}/rules/optin' | 
'/domain/{serviceName}/authInfo' | 
'/domain/data/smd' | 
'/domain/data/smd/{smdId}' | 
'/domain/data/extension' | 
'/domain/data/proContact/{proContactId}' | 
'/domain/data/proContact' | 
'/domain/data/afnicAssociationInformation' | 
'/domain/data/afnicAssociationInformation/{associationInformationId}' | 
'/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}' | 
'/domain/data/afnicCorporationTrademarkInformation' | 
'/domain/data/claimNotice';

type PathsdomainPUT = '/domain/zone/{zoneName}/record/{id}' | 
'/domain/zone/{zoneName}/serviceInfos' | 
'/domain/zone/{zoneName}/dynHost/record/{id}' | 
'/domain/zone/{zoneName}/dynHost/login/{login}' | 
'/domain/zone/{zoneName}/soa' | 
'/domain/zone/{zoneName}/redirection/{id}' | 
'/domain/{serviceName}' | 
'/domain/{serviceName}/serviceInfos' | 
'/domain/{serviceName}/configurations/optin' | 
'/domain/{serviceName}/configurations/obfuscatedEmails' | 
'/domain/data/smd/{smdId}';

type PathsdomainPOST = '/domain/zone/{zoneName}/record' | 
'/domain/zone/{zoneName}/terminate' | 
'/domain/zone/{zoneName}/history/{creationDate}/restore' | 
'/domain/zone/{zoneName}/changeContact' | 
'/domain/zone/{zoneName}/task/{id}/accelerate' | 
'/domain/zone/{zoneName}/task/{id}/relaunch' | 
'/domain/zone/{zoneName}/task/{id}/cancel' | 
'/domain/zone/{zoneName}/dynHost/record' | 
'/domain/zone/{zoneName}/dynHost/login' | 
'/domain/zone/{zoneName}/dynHost/login/{login}/changePassword' | 
'/domain/zone/{zoneName}/refresh' | 
'/domain/zone/{zoneName}/dnssec' | 
'/domain/zone/{zoneName}/confirmTermination' | 
'/domain/zone/{zoneName}/redirection' | 
'/domain/zone/{zoneName}/import' | 
'/domain/zone/{zoneName}/reset' | 
'/domain/{serviceName}/nameServer' | 
'/domain/{serviceName}/nameServer/{id}/status' | 
'/domain/{serviceName}/dsRecord' | 
'/domain/{serviceName}/activateZone' | 
'/domain/{serviceName}/ukOutgoingTransfer' | 
'/domain/{serviceName}/glueRecord/{host}/update' | 
'/domain/{serviceName}/glueRecord' | 
'/domain/{serviceName}/task/{id}/accelerate' | 
'/domain/{serviceName}/task/{id}/relaunch' | 
'/domain/{serviceName}/task/{id}/cancel' | 
'/domain/{serviceName}/changeContact' | 
'/domain/{serviceName}/owo' | 
'/domain/{serviceName}/email/obfuscated/refresh' | 
'/domain/{serviceName}/configurations/obfuscatedEmails/refresh' | 
'/domain/{serviceName}/nameServers/update' | 
'/domain/data/smd' | 
'/domain/data/proContact' | 
'/domain/data/afnicAssociationInformation' | 
'/domain/data/afnicCorporationTrademarkInformation';

type PathsdomainDELETE = '/domain/zone/{zoneName}/record/{id}' | 
'/domain/zone/{zoneName}/dynHost/record/{id}' | 
'/domain/zone/{zoneName}/dynHost/login/{login}' | 
'/domain/zone/{zoneName}/dnssec' | 
'/domain/zone/{zoneName}/redirection/{id}' | 
'/domain/{serviceName}/nameServer/{id}' | 
'/domain/{serviceName}/glueRecord/{host}' | 
'/domain/{serviceName}/owo/{field}' | 
'/domain/data/smd/{smdId}';

class Apidomain extends ApiCommon {
  /**
  Operations about the DOMAIN service
  List available services
  **/
  public get(path: '/domain', pathParams: null, queryParams: {whoisOwner?: string}): Promise<string[]>;
  /**
  Rules for creating a domain
  List all the rules for a specific cartId/itemId
  **/
  public get(path: '/domain/rules', pathParams: null, queryParams: {cartId?: string, itemId?: Number}): Promise<any>;
  /**
  Operations about the HOSTING service
  List available services
  **/
  public get(path: '/domain/zone', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Zone dns Management
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}', pathParams: {zoneName?: string}, queryParams: null): Promise<DomainZoneZone>;
  /**
  Zone resource records
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/record/{id}', pathParams: {zoneName?: string, id?: Number}, queryParams: null): Promise<DomainZoneRecord>;
  /**
  List the domain.zone.Record objects
  Records of the zone
  **/
  public get(path: '/domain/zone/{zoneName}/record', pathParams: {zoneName?: string}, queryParams: {fieldType?: ZoneNamedResolutionFieldTypeEnum, subDomain?: string}): Promise<Number[]>;
  /**
  Zone restore point
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/history/{creationDate}', pathParams: {zoneName?: string, creationDate?: Date}, queryParams: null): Promise<DomainZoneZoneRestorePoint>;
  /**
  List the domain.zone.ZoneRestorePoint objects
  Zone restore points
  **/
  public get(path: '/domain/zone/{zoneName}/history', pathParams: {zoneName?: string}, queryParams: {'creationDate.to'?: Date, 'creationDate.from'?: Date}): Promise<Date[]>;
  /**
  status operations
  Zone status
  **/
  public get(path: '/domain/zone/{zoneName}/status', pathParams: {zoneName?: string}, queryParams: null): Promise<ZoneStatus>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/serviceInfos', pathParams: {zoneName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the domain.zone.Task objects
  Domain pending tasks
  **/
  public get(path: '/domain/zone/{zoneName}/task', pathParams: {zoneName?: string}, queryParams: {function?: string, status?: DomainOperationStatusEnum}): Promise<Number[]>;
  /**
  Tasks associated to a zone
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/task/{id}', pathParams: {zoneName?: string, id?: Number}, queryParams: null): Promise<DomainZoneTask>;
  /**
  DynHost record
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/dynHost/record/{id}', pathParams: {zoneName?: string, id?: Number}, queryParams: null): Promise<DomainZoneDynHostRecord>;
  /**
  List the domain.zone.DynHostRecord objects
  DynHost' records
  **/
  public get(path: '/domain/zone/{zoneName}/dynHost/record', pathParams: {zoneName?: string}, queryParams: {subDomain?: string}): Promise<Number[]>;
  /**
  List the domain.zone.DynHostLogin objects
  DynHost' logins
  **/
  public get(path: '/domain/zone/{zoneName}/dynHost/login', pathParams: {zoneName?: string}, queryParams: {subDomain?: string, login?: string}): Promise<string[]>;
  /**
  Manage DynHost login
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/dynHost/login/{login}', pathParams: {zoneName?: string, login?: string}, queryParams: null): Promise<DomainZoneDynHostLogin>;
  /**
  Zone Start Of Authority
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/soa', pathParams: {zoneName?: string}, queryParams: null): Promise<DomainZoneSoa>;
  /**
  Manage Dnssec for this zone
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/dnssec', pathParams: {zoneName?: string}, queryParams: null): Promise<DomainZoneDnssec>;
  /**
  Redirection
  Get this object properties
  **/
  public get(path: '/domain/zone/{zoneName}/redirection/{id}', pathParams: {zoneName?: string, id?: Number}, queryParams: null): Promise<DomainZoneRedirection>;
  /**
  List the domain.zone.Redirection objects
  Redirections
  **/
  public get(path: '/domain/zone/{zoneName}/redirection', pathParams: {zoneName?: string}, queryParams: {subDomain?: string}): Promise<Number[]>;
  /**
  export operations
  Export zone
  **/
  public get(path: '/domain/zone/{zoneName}/export', pathParams: {zoneName?: string}, queryParams: null): Promise<string>;
  /**
  List the domain.CurrentNameServer objects
  List of current name servers
  **/
  public get(path: '/domain/{serviceName}/nameServer', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  CurrentNameServer
  Get this object properties
  **/
  public get(path: '/domain/{serviceName}/nameServer/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<DomainCurrentNameServer>;
  /**
  ukRegistrars operations
  Return the list of all .uk registrars
  **/
  public get(path: '/domain/{serviceName}/ukRegistrars', pathParams: {serviceName?: string}, queryParams: null): Promise<DomainUkRegistrar[]>;
  /**
  Domain name administration
  Get this object properties
  **/
  public get(path: '/domain/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DomainDomain>;
  /**
  List the domain.DnssecKey objects
  List of domain's DS Records
  **/
  public get(path: '/domain/{serviceName}/dsRecord', pathParams: {serviceName?: string}, queryParams: {flags?: DnssecKeyFlagEnum, status?: DnssecKeyStatusEnum}): Promise<Number[]>;
  /**
  Domain's DNSSEC Key
  Get this object properties
  **/
  public get(path: '/domain/{serviceName}/dsRecord/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<DomainDnssecKey>;
  /**
  Glue record
  Get this object properties
  **/
  public get(path: '/domain/{serviceName}/glueRecord/{host}', pathParams: {serviceName?: string, host?: string}, queryParams: null): Promise<DomainGlueRecord>;
  /**
  List the domain.GlueRecord objects
  List of glue record
  **/
  public get(path: '/domain/{serviceName}/glueRecord', pathParams: {serviceName?: string}, queryParams: {host?: string}): Promise<string[]>;
  /**
  List the domain.Task objects
  Domain pending tasks
  **/
  public get(path: '/domain/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {function?: string, status?: DomainOperationStatusEnum}): Promise<Number[]>;
  /**
  Tasks associated to domain
  Get this object properties
  **/
  public get(path: '/domain/{serviceName}/task/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<DomainTask>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/domain/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Obfuscate whois
  Get this object properties
  **/
  public get(path: '/domain/{serviceName}/owo/{field}', pathParams: {serviceName?: string, field?: DomainWhoisObfuscatorFieldsEnum}, queryParams: null): Promise<DomainOwo>;
  /**
  List the domain.Owo objects
  List of whois obfuscators
  **/
  public get(path: '/domain/{serviceName}/owo', pathParams: {serviceName?: string}, queryParams: {field?: DomainWhoisObfuscatorFieldsEnum}): Promise<DomainWhoisObfuscatorFieldsEnum[]>;
  /**
  Missing description
  Retrieve optin configuration
  **/
  public get(path: '/domain/{serviceName}/configurations/optin', pathParams: {serviceName?: string}, queryParams: null): Promise<DomainConfigurationsOptin[]>;
  /**
  Missing description
  Retrieve obfuscated emails configuration
  **/
  public get(path: '/domain/{serviceName}/configurations/obfuscatedEmails', pathParams: {serviceName?: string}, queryParams: null): Promise<DomainConfigurationsObfuscatedEmail[]>;
  /**
  Missing description
  Retrieve emails obfuscation rule
  **/
  public get(path: '/domain/{serviceName}/rules/emailsObfuscation', pathParams: {serviceName?: string}, queryParams: null): Promise<DomainContactAllTypesEnum[]>;
  /**
  Missing description
  Retrieve optin rule
  **/
  public get(path: '/domain/{serviceName}/rules/optin', pathParams: {serviceName?: string}, queryParams: null): Promise<DomainRulesOptin[]>;
  /**
  authInfo operations
  Return authInfo code if the domain is unlocked
  **/
  public get(path: '/domain/{serviceName}/authInfo', pathParams: {serviceName?: string}, queryParams: null): Promise<string>;
  /**
  Missing description
  List all your SMD files
  **/
  public get(path: '/domain/data/smd', pathParams: null, queryParams: {'protectedLabels.label'?: string}): Promise<Number[]>;
  /**
  Missing description
  Retrieve information about a SMD file
  **/
  public get(path: '/domain/data/smd/{smdId}', pathParams: {smdId?: Number}, queryParams: null): Promise<DomainDataSmd>;
  /**
  Missing description
  List all the extensions for a specific country
  **/
  public get(path: '/domain/data/extension', pathParams: null, queryParams: {country?: NichandleCountryEnum}): Promise<string[]>;
  /**
  Missing description
  Retrieve information about a Pro Contact
  **/
  public get(path: '/domain/data/proContact/{proContactId}', pathParams: {proContactId?: Number}, queryParams: null): Promise<DomainDataProContact>;
  /**
  Missing description
  Retrieve all your Pro Contact
  **/
  public get(path: '/domain/data/proContact', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Missing description
  Retrieve all association information according to Afnic
  **/
  public get(path: '/domain/data/afnicAssociationInformation', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Missing description
  Retrieve an association information according to Afnic
  **/
  public get(path: '/domain/data/afnicAssociationInformation/{associationInformationId}', pathParams: {associationInformationId?: Number}, queryParams: null): Promise<DomainDataAssociationContact>;
  /**
  Missing description
  Retrieve a corporation trademark information according to Afnic
  **/
  public get(path: '/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}', pathParams: {afnicCorporationTrademarkId?: Number}, queryParams: null): Promise<DomainDataAfnicCorporationTrademarkContact>;
  /**
  Missing description
  Retrieve all corporation trademark information according to Afnic
  **/
  public get(path: '/domain/data/afnicCorporationTrademarkInformation', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Missing description
  Retrieve claim notices associated to a domain
  **/
  public get(path: '/domain/data/claimNotice', pathParams: null, queryParams: {domain?: string}): Promise<DomainDataClaimNoticeClaimNotice>;
  public get(path: PathsdomainGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Zone resource records
  Alter this object properties
  **/
  public put(path: '/domain/zone/{zoneName}/record/{id}', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/domain/zone/{zoneName}/serviceInfos', pathParams: {zoneName?: string}, bodyParams: null): Promise<void>;
  /**
  DynHost record
  Alter this object properties
  **/
  public put(path: '/domain/zone/{zoneName}/dynHost/record/{id}', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Manage DynHost login
  Alter this object properties
  **/
  public put(path: '/domain/zone/{zoneName}/dynHost/login/{login}', pathParams: {zoneName?: string, login?: string}, bodyParams: null): Promise<void>;
  /**
  Zone Start Of Authority
  Alter this object properties
  **/
  public put(path: '/domain/zone/{zoneName}/soa', pathParams: {zoneName?: string}, bodyParams: null): Promise<void>;
  /**
  Redirection
  Alter this object properties
  **/
  public put(path: '/domain/zone/{zoneName}/redirection/{id}', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Domain name administration
  Alter this object properties
  **/
  public put(path: '/domain/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/domain/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Save a new optin configuration
  **/
  public put(path: '/domain/{serviceName}/configurations/optin', pathParams: {serviceName?: string}, bodyParams: null): Promise<DomainConfigurationsOptin[]>;
  /**
  Missing description
  Save a new obfuscated emails configuration
  **/
  public put(path: '/domain/{serviceName}/configurations/obfuscatedEmails', pathParams: {serviceName?: string}, bodyParams: null): Promise<DomainConfigurationsObfuscatedEmail[]>;
  /**
  Missing description
  Modify an existing SMD file
  **/
  public put(path: '/domain/data/smd/{smdId}', pathParams: {smdId?: Number}, bodyParams: null): Promise<DomainDataSmd>;
  public put(path: PathsdomainPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the domain.zone.Record objects
  Create a new DNS record (Don't forget to refresh the zone)
  **/
  public post(path: '/domain/zone/{zoneName}/record', pathParams: {zoneName?: string}, bodyParams: null): Promise<DomainZoneRecord>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/domain/zone/{zoneName}/terminate', pathParams: {zoneName?: string}, bodyParams: null): Promise<string>;
  /**
  restore operations
  Restore the DNS zone
  **/
  public post(path: '/domain/zone/{zoneName}/history/{creationDate}/restore', pathParams: {zoneName?: string, creationDate?: Date}, bodyParams: null): Promise<DomainZoneTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/domain/zone/{zoneName}/changeContact', pathParams: {zoneName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  accelerate operations
  Accelerate the task
  **/
  public post(path: '/domain/zone/{zoneName}/task/{id}/accelerate', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  relaunch operations
  Relaunch the task
  **/
  public post(path: '/domain/zone/{zoneName}/task/{id}/relaunch', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  cancel operations
  Cancel the task
  **/
  public post(path: '/domain/zone/{zoneName}/task/{id}/cancel', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  List the domain.zone.DynHostRecord objects
  Create a new DynHost record (Don't forget to refresh the zone)
  **/
  public post(path: '/domain/zone/{zoneName}/dynHost/record', pathParams: {zoneName?: string}, bodyParams: null): Promise<DomainZoneDynHostRecord>;
  /**
  List the domain.zone.DynHostLogin objects
  Create a new DynHost login
  **/
  public post(path: '/domain/zone/{zoneName}/dynHost/login', pathParams: {zoneName?: string}, bodyParams: null): Promise<DomainZoneDynHostLogin>;
  /**
  changePassword operations
  Change password of the DynHost login
  **/
  public post(path: '/domain/zone/{zoneName}/dynHost/login/{login}/changePassword', pathParams: {zoneName?: string, login?: string}, bodyParams: null): Promise<void>;
  /**
  refresh operations
  Apply zone modification on DNS servers
  **/
  public post(path: '/domain/zone/{zoneName}/refresh', pathParams: {zoneName?: string}, bodyParams: null): Promise<void>;
  /**
  Manage Dnssec for this zone
  Enable Dnssec
  **/
  public post(path: '/domain/zone/{zoneName}/dnssec', pathParams: {zoneName?: string}, bodyParams: null): Promise<void>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/domain/zone/{zoneName}/confirmTermination', pathParams: {zoneName?: string}, bodyParams: null): Promise<string>;
  /**
  List the domain.zone.Redirection objects
  Create a new redirection (Don't forget to refresh the zone)
  **/
  public post(path: '/domain/zone/{zoneName}/redirection', pathParams: {zoneName?: string}, bodyParams: null): Promise<DomainZoneRedirection>;
  /**
  import operations
  Import zone
  **/
  public post(path: '/domain/zone/{zoneName}/import', pathParams: {zoneName?: string}, bodyParams: null): Promise<DomainZoneTask>;
  /**
  reset operations
  Reset the DNS zone
  **/
  public post(path: '/domain/zone/{zoneName}/reset', pathParams: {zoneName?: string}, bodyParams: null): Promise<void>;
  /**
  List the domain.CurrentNameServer objects
  Add new name server
  **/
  public post(path: '/domain/{serviceName}/nameServer', pathParams: {serviceName?: string}, bodyParams: null): Promise<DomainTask>;
  /**
  status operations
  Get name server status
  **/
  public post(path: '/domain/{serviceName}/nameServer/{id}/status', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<DomainDomainNsStatus>;
  /**
  List the domain.DnssecKey objects
  Update DS records
  **/
  public post(path: '/domain/{serviceName}/dsRecord', pathParams: {serviceName?: string}, bodyParams: null): Promise<DomainTask>;
  /**
  activateZone operations
  Activate the DNS zone for this domain
  **/
  public post(path: '/domain/{serviceName}/activateZone', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  ukOutgoingTransfer operations
  Schedule an outgoing transfer task for this domain (.uk only)
  **/
  public post(path: '/domain/{serviceName}/ukOutgoingTransfer', pathParams: {serviceName?: string}, bodyParams: null): Promise<DomainTask>;
  /**
  update operations
  Update the glue record
  **/
  public post(path: '/domain/{serviceName}/glueRecord/{host}/update', pathParams: {serviceName?: string, host?: string}, bodyParams: null): Promise<DomainTask>;
  /**
  List the domain.GlueRecord objects
  Create a glue record
  **/
  public post(path: '/domain/{serviceName}/glueRecord', pathParams: {serviceName?: string}, bodyParams: null): Promise<DomainTask>;
  /**
  accelerate operations
  Accelerate the task
  **/
  public post(path: '/domain/{serviceName}/task/{id}/accelerate', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  relaunch operations
  Relaunch the task
  **/
  public post(path: '/domain/{serviceName}/task/{id}/relaunch', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  cancel operations
  Cancel the task
  **/
  public post(path: '/domain/{serviceName}/task/{id}/cancel', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/domain/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  List the domain.Owo objects
  Add whois obfuscators
  **/
  public post(path: '/domain/{serviceName}/owo', pathParams: {serviceName?: string}, bodyParams: null): Promise<DomainWhoisObfuscatorFieldsEnum[]>;
  /**
  refresh operations
  Regenerate the obfuscated email address
  **/
  public post(path: '/domain/{serviceName}/email/obfuscated/refresh', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Refresh an obfuscated emails configuration
  **/
  public post(path: '/domain/{serviceName}/configurations/obfuscatedEmails/refresh', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  update operations
  Update DNS servers
  **/
  public post(path: '/domain/{serviceName}/nameServers/update', pathParams: {serviceName?: string}, bodyParams: null): Promise<DomainTask>;
  /**
  Missing description
  Post a new SMD file
  **/
  public post(path: '/domain/data/smd', pathParams: null, bodyParams: null): Promise<DomainDataSmd>;
  /**
  Missing description
  Post new information about .pro contact information
  **/
  public post(path: '/domain/data/proContact', pathParams: null, bodyParams: null): Promise<DomainDataProContact>;
  /**
  Missing description
  Post a new association information according to Afnic
  **/
  public post(path: '/domain/data/afnicAssociationInformation', pathParams: null, bodyParams: null): Promise<DomainDataAssociationContact>;
  /**
  Missing description
  Post a new corporation trademark information according to Afnic
  **/
  public post(path: '/domain/data/afnicCorporationTrademarkInformation', pathParams: null, bodyParams: null): Promise<DomainDataAfnicCorporationTrademarkContact>;
  public post(path: PathsdomainPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Zone resource records
  Delete a DNS record (Don't forget to refresh the zone)
  **/
  public delete(path: '/domain/zone/{zoneName}/record/{id}', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  DynHost record
  Delete a DynHost record (Don't forget to refresh the zone)
  **/
  public delete(path: '/domain/zone/{zoneName}/dynHost/record/{id}', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Manage DynHost login
  Delete a DynHost login
  **/
  public delete(path: '/domain/zone/{zoneName}/dynHost/login/{login}', pathParams: {zoneName?: string, login?: string}, bodyParams: null): Promise<void>;
  /**
  Manage Dnssec for this zone
  Disable Dnssec
  **/
  public delete(path: '/domain/zone/{zoneName}/dnssec', pathParams: {zoneName?: string}, bodyParams: null): Promise<void>;
  /**
  Redirection
  Delete a redirection (Don't forget to refresh the zone)
  **/
  public delete(path: '/domain/zone/{zoneName}/redirection/{id}', pathParams: {zoneName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  CurrentNameServer
  Delete a name server
  **/
  public delete(path: '/domain/{serviceName}/nameServer/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<DomainTask>;
  /**
  Glue record
  Delete the glue record
  **/
  public delete(path: '/domain/{serviceName}/glueRecord/{host}', pathParams: {serviceName?: string, host?: string}, bodyParams: null): Promise<DomainTask>;
  /**
  Obfuscate whois
  Delete a whois obfuscator
  **/
  public delete(path: '/domain/{serviceName}/owo/{field}', pathParams: {serviceName?: string, field?: DomainWhoisObfuscatorFieldsEnum}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete a SMD file
  **/
  public delete(path: '/domain/data/smd/{smdId}', pathParams: {smdId?: Number}, bodyParams: null): Promise<void>;
  public delete(path: PathsdomainDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

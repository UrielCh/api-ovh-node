import { ApiCommon } from '@ovh-api/common';
/**
 * Operation status
 */
export type DomainOperationStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Details about an IP block organisation
 */
export interface NichandleIpv4Org {
  /**
   */
  zip?: string;
  /**
   */
  registry?: NichandleIpRegistryEnum;
  /**
   */
  country?: NichandleCountryEnum;
  /**
   */
  firstname?: string;
  /**
   */
  organisationId?: string;
  /**
   */
  address?: string;
  /**
   */
  phone?: string;
  /**
   */
  city?: string;
  /**
   */
  abuse_mailbox?: string;
  /**
   */
  state?: string;
  /**
   */
  lastname?: string;
}
/**
 * Details about an Order
 */
export interface BillingOrder {
  /**
   */
  date?: Date;
  /**
   */
  retractionDate?: Date;
  /**
   */
  password?: string;
  /**
   */
  pdfUrl?: string;
  /**
   */
  orderId?: Number;
  /**
   */
  priceWithTax?: OrderPrice;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  tax?: OrderPrice;
  /**
   */
  url?: string;
  /**
   */
  expirationDate?: Date;
}
/**
 * IP Restriction default rule
 */
export interface NichandleIpRestrictionDefaultRule {
  /**
   * Accept or deny access
   *
   */
  rule?: NichandleAccessRestrictionIpRestrictionRuleEnum;
  /**
   * Send an email if someone try to access
   *
   */
  warning?: boolean;
}
/**
 * Login restrictions on a development version of the Manager
 */
export interface NichandleDeveloperModeRestriction {
  /**
   * Allow login on your account on a development version of the Manager
   *
   */
  enabled?: boolean;
}
/**
 * Filesystems available
 */
export type DedicatedTemplateOsFileSystemEnum = 'btrfs' | 'ext3' | 'ext4' | 'ntfs' | 'reiserfs' | 'swap' | 'ufs' | 'xfs' | 'zfs';
/**
 * Describe secret key
 */
export interface NichandleAccessRestrictionSmsSecret {
  /**
   */
  remainingTry?: Number;
  /**
   */
  id?: Number;
}
/**
 * Available installation templates
 */
export interface DedicatedInstallationTemplateTemplates {
  /**
   * this template  bit format
   *
   */
  bitFormat?: DedicatedServerBitFormatEnum;
  /**
   * Customizable template properties
   *
   */
  customization?: DedicatedTemplateOsProperties;
  /**
   * This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB
   *
   */
  supportsGptLabel?: boolean;
  /**
   * list of all language available for this template
   *
   */
  availableLanguages?: DedicatedTemplateOsLanguageEnum[];
  /**
   * is this distribution deprecated
   *
   */
  deprecated?: boolean;
  /**
   * information about this template
   *
   */
  description?: string;
  /**
   * This distribution supports the microsoft SQL server
   *
   */
  supportsSqlServer?: boolean;
  /**
   * This distribution supports UEFI setup
   *
   */
  supportsUEFI?: DedicatedServerSupportsUEFIEnum;
  /**
   * the distribution this template is based on
   *
   */
  distribution?: string;
  /**
   * list of all filesystems  available for this template
   *
   */
  filesystems?: DedicatedTemplateOsFileSystemEnum[];
  /**
   * This distribution supports Logical Volumes (Linux LVM)
   *
   */
  lvmReady?: boolean;
  /**
   * This distribution supports hardware raid configuration through the OVH API
   *
   */
  hardRaidConfiguration?: boolean;
  /**
   * This distribution supports RTM software
   *
   */
  supportsRTM?: boolean;
  /**
   * the default language of this template
   *
   */
  defaultLanguage?: DedicatedTemplateOsLanguageEnum;
  /**
   * This template name
   *
   */
  templateName?: string;
  /**
   * This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel
   *
   */
  supportsDistributionKernel?: boolean;
  /**
   * Date of last modification of the base image
   *
   */
  lastModification?: Date;
  /**
   * this template family type
   *
   */
  family?: DedicatedTemplateOsTypeEnum;
  /**
   * category of this template (informative only)
   *
   */
  category?: DedicatedTemplateOsUsageEnum;
  /**
   * This distribution is new, and although tested and functional, may still display odd behaviour
   *
   */
  beta?: boolean;
}
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
 * Status of a User
 */
export type NichandleUserStatus = 'OK' | 'DISABLED' | 'PASSWORD_CHANGE_REQUIRED';
/**
 * Operation that happend on a debt
 */
export interface DebtOperation {
  /**
   * Date the operation took place on
   *
   */
  date?: Date;
  /**
   * Amount of the operation
   *
   */
  amount?: OrderPrice;
  /**
   * Order id associated to the deposit
   *
   */
  depositOrderId?: Number;
  /**
   */
  operationId?: Number;
  /**
   * Type of movement this operation represents
   *
   */
  type?: DebtEntryOperationEnum;
  /**
   * Status of the operation
   *
   */
  status?: DebtEntryStatusEnum;
}
/**
 * Send secret code
 */
export interface NichandleAccessRestrictionSmsCode {
  /**
   */
  challenge?: string;
}
/**
 * All possible order status
 */
export type BillingOrderOrderStatusEnum = 'cancelled' | 'cancelling' | 'checking' | 'delivered' | 'delivering' | 'documentsRequested' | 'notPaid' | 'unknown';
/**
 * Billing policies settings
 */
export interface TelephonyBillingSettings {
  /**
   * Renew is done by billing contact instead of billing account
   *
   */
  renewByBillingContact?: boolean;
}
/**
 * A group
 */
export interface NichandleAuthenticationGroup {
  /**
   * Group's role
   *
   */
  role?: NichandleAuthenticationRoleEnum;
  /**
   * True if it is an default group. This kind of group can't be edited or deleted
   *
   */
  defaultGroup?: boolean;
  /**
   * Last update of this group
   *
   */
  lastUpdate?: Date;
  /**
   * Group's name
   *
   */
  name?: string;
  /**
   * Group's description
   *
   */
  description?: string;
  /**
   * Creation date of this group
   *
   */
  creation?: Date;
}
/**
 * Task running a contact change on a service
 */
export interface NichandleContactChangeTask {
  /**
   * Account who asked the contact change
   *
   */
  askingAccount?: string;
  /**
   * Account to change contact to
   *
   */
  toAccount?: string;
  /**
   * Date at which the contact change has been finished
   *
   */
  dateDone?: Date;
  /**
   * Account to change contact from
   *
   */
  fromAccount?: string;
  /**
   * Current state of the request
   *
   */
  state?: NichandleChangeContactTaskStateEnum;
  /**
   * Date at which the request has been made
   *
   */
  dateRequest?: Date;
  /**
   */
  id?: Number;
  /**
   * Contacts to be changed
   *
   */
  contactTypes?: NichandleChangeContactContactTypeEnum[];
  /**
   * The service on which the task runs
   *
   */
  serviceDomain?: string;
}
/**
 * Domain tasks
 */
export interface NichandleDomainTask {
  /**
   * Last update date of the task
   *
   */
  lastUpdate?: Date;
  /**
   * Function of the task
   *
   */
  function?: DomainNicOperationFunctionEnum;
  /**
   * Domain of the task
   *
   */
  domain?: string;
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
 * Describe SOTP secret keys
 */
export interface NichandleAccessRestrictionSOTPSecret {
  /**
   */
  codes?: string[];
}
/**
 * SOTP Two-Factor Authentication
 */
export interface NichandleAccessRestrictionSOTPAccount {
  /**
   * Last used date
   *
   */
  lastUsedDate?: Date;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Number of remaining codes
   *
   */
  remaining?: Number;
  /**
   * Status of this account
   *
   */
  status?: NichandleAccessRestrictionSOTPStatusEnum;
}
/**
 * Status of U2F account
 */
export type NichandleAccessRestrictionU2FStatusEnum = 'disabled' | 'enabled' | 'needCodeValidation';
/**
 * Payment transaction type enum
 */
export type MePaymentMethodTransactionType = 'CREDIT' | 'DEBIT';
/**
 * Hardware RAID defined in this partitioning scheme
 */
export interface DedicatedInstallationTemplateHardwareRaid {
  /**
   * RAID mode
   *
   */
  mode?: DedicatedTemplateOsHardwareRaidEnum;
  /**
   * Disk list
   *
   */
  disks?: string[];
  /**
   * Hardware RAID name
   *
   */
  name?: string;
  /**
   * Specifies the creation order of the hardware RAID
   *
   */
  step?: Number;
}
/**
 * Available contact fields
 */
export type XanderContactFieldEnum = 'address.city' | 'address.country' | 'address.line1' | 'address.line2' | 'address.line3' | 'address.otherDetails' | 'address.province' | 'address.zip' | 'birthCity' | 'birthCountry' | 'birthDay' | 'birthZip' | 'cellPhone' | 'companyNationalIdentificationNumber' | 'email' | 'fax' | 'firstName' | 'gender' | 'language' | 'lastName' | 'legalForm' | 'nationalIdentificationNumber' | 'nationality' | 'organisationName' | 'organisationType' | 'phone' | 'spareEmail' | 'vat';
/**
 * The object the processing of the order leaded to
 */
export interface BillingOrderAssociatedObject {
  /**
   */
  id?: string;
  /**
   */
  type?: BillingOrderAssociatedObjectTypeEnum;
}
/**
 * Sms Two-Factor Authentication
 */
export interface NichandleAccessRestrictionSmsAccount {
  /**
   * Associated phone number
   *
   */
  phoneNumber?: string;
  /**
   * Last used date
   *
   */
  lastUsedDate?: Date;
  /**
   * Description of this phone
   *
   */
  description?: string;
  /**
   * The Id of the restriction
   *
   */
  id?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Status of this account
   *
   */
  status?: NichandleAccessRestrictionSmsStatusEnum;
}
/**
 * Movement sub object
 */
export interface BillingCreditBalanceMovementSubObject {
  /**
   * Sub object name
   *
   */
  name?: string;
  /**
   * Sub object ID
   *
   */
  id?: string;
}
/**
 * List of payment method status enum
 */
export type BillingPaymentMethodStatusEnum = 'BLOCKED' | 'BLOCKED_BY_CUSTOMER' | 'BROKEN' | 'CANCELED' | 'CANCELED_BY_CUSTOMER' | 'CREATED' | 'ERROR' | 'EXPIRED' | 'PAUSED' | 'VALID' | 'VALID_FOR_CREDIT';
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
 * Credentials to interact with the api on behalf of the sub-account
 */
export interface NichandleSubAccountConsumerKey {
  /**
   * The consumer key
   *
   */
  consumerKey?: string;
}
/**
 * Available os bit format
 */
export type DedicatedServerBitFormatEnum = 32 | 64;
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
/**
 * The current state of a contract agreement
 */
export type AgreementsAgreementStateEnum = 'ko' | 'obsolete' | 'ok' | 'todo';
/**
 * VIP Status by Universe
 */
export interface NichandleVipStatus {
  /**
   * Is account VIP for Cloud Universe
   *
   */
  cloud?: boolean;
  /**
   * Is account VIP for Dedicated Universe
   *
   */
  dedicated?: boolean;
  /**
   * Is account VIP for Web Universe
   *
   */
  web?: boolean;
  /**
   * Is account VIP for Telecom Universe
   *
   */
  telecom?: boolean;
}
/**
 * Debt balance of the account
 */
export interface DebtBalance {
  /**
   * Reserved amount awaiting payment
   *
   */
  todoAmount?: OrderPrice;
  /**
   * Amount of debts the account has
   *
   */
  dueAmount?: OrderPrice;
  /**
   * Unmatured amount for deferred payment term
   *
   */
  unmaturedAmount?: OrderPrice;
  /**
   */
  active?: boolean;
  /**
   * Amount currently being processed
   *
   */
  pendingAmount?: OrderPrice;
}
/**
 * Details about a Refund
 */
export interface BillingRefund {
  /**
   */
  date?: Date;
  /**
   */
  pdfUrl?: string;
  /**
   */
  password?: string;
  /**
   */
  orderId?: Number;
  /**
   */
  priceWithTax?: OrderPrice;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  tax?: OrderPrice;
  /**
   */
  originalBillId?: string;
  /**
   */
  refundId?: string;
  /**
   */
  url?: string;
}
/**
 * All data needed to use a payment mean
 */
export interface BillingOrderPaymentMean {
  /**
   */
  fee?: Number;
  /**
   */
  logo?: string;
  /**
   */
  subType?: string;
  /**
   */
  httpMethod?: string;
  /**
   */
  parameters?: BillingOrderPaymentMeanHttpParameter[];
  /**
   */
  url?: string;
  /**
   */
  htmlForm?: string;
}
/**
 * Customer IPXE scripts
 */
export interface NichandleIpxe {
  /**
   * Name of this script
   *
   */
  name?: string;
  /**
   * Content of your IPXE script
   *
   */
  script?: string;
}
/**
 * Ip registries
 */
export type NichandleIpRegistryEnum = 'ARIN' | 'RIPE';
/**
 * Payment method object
 */
export interface MePaymentMethodPaymentMethod {
  /**
   * Payment method type icon
   *
   */
  icon?: MePaymentMethodIcon;
  /**
   * Custom customer description
   *
   */
  description?: string;
  /**
   * Payment method public label
   *
   */
  label?: string;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Associated billing contact ID
   *
   */
  billingContactId?: Number;
  /**
   * Payment method type
   *
   */
  paymentType?: string;
  /**
   * Payment mean ID associated to this payment method
   *
   */
  paymentMeanId?: Number;
  /**
   * Creation date
   *
   */
  default?: boolean;
  /**
   * Payment method sub-type
   *
   */
  paymentSubType?: string;
  /**
   * Payment method ID
   *
   */
  paymentMethodId?: Number;
  /**
   * Last update date
   *
   */
  lastUpdate?: Date;
  /**
   * Payment method status
   *
   */
  status?: MePaymentMethodPaymentMethodStatus;
  /**
   * Expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * Credit balance
 */
export interface BillingCreditBalanceMovement {
  /**
   * Movement amount
   *
   */
  amount?: OrderPrice;
  /**
   * Balance name
   *
   */
  balanceName?: string;
  /**
   * Order ID associated to this credit movement
   *
   */
  orderId?: Number;
  /**
   * Movement last update
   *
   */
  lastUpdate?: Date;
  /**
   * Object source of this credit movement
   *
   */
  sourceObject?: BillingCreditBalanceMovementSubObject;
  /**
   * Movement type
   *
   */
  type?: string;
  /**
   * Movement creation date
   *
   */
  creationDate?: Date;
  /**
   * Movement ID
   *
   */
  movementId?: Number;
  /**
   * Movement expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * State of a debt
 */
export interface DebtDebt {
  /**
   * Date the debt was created on
   *
   */
  date?: Date;
  /**
   * Original amount of the debt
   *
   */
  amount?: OrderPrice;
  /**
   * The order the debt relates to
   *
   */
  orderId?: Number;
  /**
   * Reserved amount awaiting payment
   *
   */
  todoAmount?: OrderPrice;
  /**
   * Amount you still owe for that debt
   *
   */
  dueAmount?: OrderPrice;
  /**
   * Unmatured amount for deferred payment term
   *
   */
  unmaturedAmount?: OrderPrice;
  /**
   * If specified, the debt will not be recovered before that date
   *
   */
  dueDate?: Date;
  /**
   */
  debtId?: Number;
  /**
   * Amount currently being processed
   *
   */
  pendingAmount?: OrderPrice;
}
/**
 * Languages a nichandle can choose
 */
export type NichandleLanguageEnum = 'cs_CZ' | 'de_DE' | 'en_AU' | 'en_CA' | 'en_GB' | 'en_IE' | 'en_US' | 'es_ES' | 'fi_FI' | 'fr_CA' | 'fr_FR' | 'fr_MA' | 'fr_SN' | 'fr_TN' | 'it_IT' | 'lt_LT' | 'nl_NL' | 'pl_PL' | 'pt_PT';
/**
 * Phone protocol
 */
export type TelephonyProtocolEnum = 'mgcp' | 'sip';
/**
 * Retraction reason type
 */
export type BillingOrderRetractionReasonEnum = 'competitor' | 'difficulty' | 'expensive' | 'other' | 'performance' | 'reliability' | 'unused';
/**
 * Representation of a Contact
 */
export interface ContactContact {
  /**
   * Birth date
   *
   */
  birthDay?: Date;
  /**
   * Last name
   *
   */
  lastName?: string;
  /**
   * Address for this contact
   *
   */
  address?: ContactAddress;
  /**
   * Gender
   *
   */
  gender?: NichandleGenderEnum;
  /**
   * VAT number
   *
   */
  vat?: string;
  /**
   * Language
   *
   */
  language?: NichandleLanguageEnum;
  /**
   * Birth city
   *
   */
  birthCity?: string;
  /**
   * National identification number of your company
   *
   */
  companyNationalIdentificationNumber?: string;
  /**
   * Legal form of the contact
   *
   */
  legalForm?: NichandleLegalFormEnum;
  /**
   * Organisation type
   *
   */
  organisationType?: string;
  /**
   * First name
   *
   */
  firstName?: string;
  /**
   * Organisation name
   *
   */
  organisationName?: string;
  /**
   * Nationality
   *
   */
  nationality?: NichandleCountryEnum;
  /**
   * Telephone number
   *
   */
  phone?: string;
  /**
   * Birth Country
   *
   */
  birthCountry?: NichandleCountryEnum;
  /**
   * Spare email address
   *
   */
  spareEmail?: string;
  /**
   * Contact Identifier
   *
   */
  id?: Number;
  /**
   * Fax number
   *
   */
  fax?: string;
  /**
   * Cellphone number
   *
   */
  cellPhone?: string;
  /**
   * Email address
   *
   */
  email?: string;
  /**
   * National identification number of the contact
   *
   */
  nationalIdentificationNumber?: string;
  /**
   * Birth Zipcode
   *
   */
  birthZip?: string;
}
/**
 * Hardware RAID enum
 */
export type DedicatedTemplateOsHardwareRaidEnum = 'raid0' | 'raid1' | 'raid10' | 'raid5' | 'raid50' | 'raid6' | 'raid60';
/**
 * TOTP Two-Factor Authentication
 */
export interface NichandleAccessRestrictionTOTPAccount {
  /**
   * Last used date
   *
   */
  lastUsedDate?: Date;
  /**
   * Description of this TOTP
   *
   */
  description?: string;
  /**
   * The Id of the restriction
   *
   */
  id?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Status of this account
   *
   */
  status?: NichandleAccessRestrictionTOTPStatusEnum;
}
/**
 * Status of TOTP account
 */
export type NichandleAccessRestrictionTOTPStatusEnum = 'disabled' | 'enabled' | 'needCodeValidation' | 'needEmailValidation';
/**
 * Status of your manual domain payment migration
 */
export interface BillingManualDomainPaymentStatus {
  /**
   * Total number of domains that needs to be migrated to manual renew mode
   *
   */
  domainsToMigrate?: Number;
  /**
   * Total number of domains successfully migrated to manual renew mode
   *
   */
  migratedDomains?: Number;
  /**
   */
  status?: BillingBillingTaskStatusEnum;
}
/**
 * Available automatic payment means
 */
export interface BillingAutomaticPaymentMean {
  /**
   * Bank Account
   *
   */
  bankAccount?: boolean;
  /**
   * Credit Card
   *
   */
  creditCard?: boolean;
  /**
   * Paypal account
   *
   */
  paypal?: boolean;
  /**
   * Deferred invoice payment account for authorized customers
   *
   */
  deferredPaymentAccount?: boolean;
}
/**
 * Telephony settings linked to the customer account
 */
export interface TelephonySettings {
  /**
   * Line description policies settings
   *
   */
  lineDescriptionPolicies?: TelephonyLineDescriptionSettings;
  /**
   * Billing policies settings
   *
   */
  billingPolicies?: TelephonyBillingSettings;
}
/**
 * Type of objects an order can be linked to
 */
export type DebtAssociatedObjectTypeEnum = 'Bill' | 'DebtOperation' | 'Deposit' | 'Order' | 'OvhAccountMovement' | 'Refund' | 'Withdrawal';
/**
 * Available payment methods
 */
export interface BillingPaymentMethod {
  /**
   * Public payment method label
   *
   */
  publicLabel?: string;
  /**
   * Is this payment method set as the default one
   *
   */
  default?: boolean;
  /**
   * Payment sub type
   *
   */
  paymentSubType?: BillingPaymentMethodPaymentSubTypeEnum;
  /**
   * Customer personalized description
   *
   */
  description?: string;
  /**
   * Payment method id
   *
   */
  id?: Number;
  /**
   * Creation date of the payment method
   *
   */
  creationDate?: Date;
  /**
   * Billing contact ID
   *
   */
  billingContactId?: Number;
  /**
   * Payment type
   *
   */
  paymentType?: BillingPaymentMethodPaymentTypeEnum;
  /**
   * Payment method status enum
   *
   */
  status?: BillingPaymentMethodStatusEnum;
}
/**
 * U2F Register Request
 */
export interface NichandleAccessRestrictionU2FSignChallenge {
  /**
   */
  request?: NichandleAccessRestrictionU2FSignRequest;
  /**
   */
  applicationId?: string;
}
/**
 * The object linked to this debt entry
 */
export interface DebtEntryAssociatedObject {
  /**
   */
  subId?: string;
  /**
   */
  id?: string;
  /**
   */
  type?: DebtAssociatedObjectTypeEnum;
  /**
   */
  paymentInfo?: DebtAssociatedObjectPaymentInfo;
}
/**
 * OVH subsidiaries
 */
export type NichandleOvhCompanyEnum = 'kimsufi' | 'ovh' | 'soyoustart';
/**
 * Custom domains of your fax services
 */
export interface TelephonyMailDomain2Service {
  /**
   * The custom domain of your fax services
   *
   */
  domain?: string;
  /**
   */
  id?: Number;
}
/**
 * Domain operation argument
 */
export interface NichandleDomainTaskArgument {
  /**
   * Template of the content
   *
   */
  template?: string;
  /**
   * Minimum of the content length that you can send
   *
   */
  minimumSize?: Number;
  /**
   * Maximum of the content length that you can send
   *
   */
  maximumSize?: Number;
  /**
   * List of accepted formats
   *
   */
  acceptedFormats?: DomainDocumentFormatsEnum[];
  /**
   * Description of the argument
   *
   */
  description?: string;
  /**
   * True if the argument is in read only
   *
   */
  readOnly?: boolean;
  /**
   * Type of the argument
   *
   */
  type?: string;
  /**
   * List of impacted field names
   *
   */
  fields?: XanderContactFieldEnum[];
  /**
   * Value of the argument
   *
   */
  value?: string;
  /**
   * Key of the argument
   *
   */
  key?: string;
  /**
   * List of accepted values
   *
   */
  acceptedValues?: string[];
}
/**
 * partition type
 */
export type DedicatedTemplatePartitionTypeEnum = 'logical' | 'lv' | 'primary';
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
 * supports UEFI setup
 */
export type DedicatedServerSupportsUEFIEnum = 'no' | 'only' | 'yes';
/**
 * Contract agreement
 */
export interface AgreementsContractAgreement {
  /**
   * Date the agreed contract was effective
   *
   */
  date?: Date;
  /**
   * Id of the agreed contract
   *
   */
  contractId?: Number;
  /**
   * Id of the contract
   *
   */
  id?: Number;
  /**
   * State of the agreement
   *
   */
  agreed?: AgreementsAgreementStateEnum;
}
/**
 * All the validation you may have to do
 */
export type BillingPaymentMeanValidationType = 'creditAccount' | 'documentToSend' | 'simpleValidation';
/**
 *  Partitions defined in this partitioning scheme
 */
export interface DedicatedInstallationTemplateTemplatePartitions {
  /**
   * size of partition in Mb, 0 => rest of the space
   *
   */
  size?: ComplexTypeUnitAndValue<Number>;
  /**
   * The volume name needed for proxmox distribution
   *
   */
  volumeName?: string;
  /**
   */
  type?: DedicatedTemplatePartitionTypeEnum;
  /**
   * Partition filesytem
   *
   */
  filesystem?: DedicatedTemplateOsFileSystemEnum;
  /**
   * specifies the creation order of the partition on the disk
   *
   */
  order?: Number;
  /**
   * raid partition type
   *
   */
  raid?: DedicatedServerPartitionRaidEnum;
  /**
   * partition mount point
   *
   */
  mountpoint?: string;
}
/**
 * All operations a debt entry can represent
 */
export type DebtEntryOperationEnum = 'CANCEL' | 'CASH_MANUAL' | 'CHECK_MANUAL' | 'CREDITCARD' | 'CREDITCARD_AUTOMATIC' | 'CREDITCARD_MANUAL' | 'CREDIT_ACCOUNT_AUTOMATIC' | 'EDINAR_MANUAL' | 'IDEAL_MANUAL' | 'MULTIBANCO_MANUAL' | 'ORDER' | 'PAYPAL_AUTOMATIC' | 'PAYPAL_MANUAL' | 'PAYU_MANUAL' | 'RECOVERY_TRANSFER_AUTOMATIC' | 'REFUND' | 'REFUND_CHECK' | 'REFUND_CREDITCARD' | 'REFUND_CREDIT_ACCOUNT' | 'REFUND_LOSS' | 'REFUND_PAYPAL' | 'REFUND_PAYU' | 'REFUND_SEPA' | 'REFUND_TRANSFER' | 'REFUND_UNKNOWN' | 'SEPA_AUTOMATIC' | 'TRANSFER_MANUAL' | 'UNPAID_CHECK' | 'UNPAID_CREDITCARD' | 'UNPAID_CREDIT_ACCOUNT' | 'UNPAID_PAYPAL' | 'UNPAID_SEPA' | 'UNPAID_WITHDRAW' | 'WARRANT_MANUAL' | 'WITHDRAW_AUTOMATIC';
/**
 * Details about a voucher account
 */
export interface BillingVoucherMovement {
  /**
   */
  date?: Date;
  /**
   */
  amount?: OrderPrice;
  /**
   */
  balance?: OrderPrice;
  /**
   */
  description?: string;
  /**
   */
  operation?: BillingVoucherAccountOperationEnum;
  /**
   */
  movementId?: Number;
  /**
   */
  order?: Number;
  /**
   */
  previousBalance?: OrderPrice;
}
/**
 * Details about a payment
 */
export interface BillingPayment {
  /**
   */
  paymentIdentifier?: string;
  /**
   */
  paymentDate?: Date;
  /**
   */
  paymentType?: BillingPaymentMeanEnum;
}
/**
 * Pay with payment method parameter
 */
export interface BillingOrderPayWithPaymentMethod {
  /**
   * ID of payment method for pay this order
   *
   */
  id?: Number;
}
/**
 * SEPA bank account info
 */
export interface BillingBankAccount {
  /**
   */
  defaultPaymentMean?: boolean;
  /**
   */
  uniqueReference?: string;
  /**
   */
  ownerName?: string;
  /**
   */
  iban?: string;
  /**
   * Custom description of this account
   *
   */
  description?: string;
  /**
   */
  ownerAddress?: string;
  /**
   */
  state?: BillingBankAccountStateEnum;
  /**
   */
  id?: Number;
  /**
   */
  mandateSignatureDate?: Date;
  /**
   */
  creationDate?: Date;
  /**
   */
  bic?: string;
  /**
   */
  validationDocumentLink?: string;
}
/**
 * Available payment method object
 */
export interface MePaymentMethodAvailablePaymentMethod {
  /**
   * Payment method type is registerable ?
   *
   */
  registerable?: boolean;
  /**
   * Payment method type icon
   *
   */
  icon?: MePaymentMethodIcon;
  /**
   * Payment method type is possible to pay in oneshot mode ?
   *
   */
  oneshot?: boolean;
  /**
   * Payment method type
   *
   */
  paymentType?: string;
}
/**
 * Credit balance
 */
export interface BillingCreditBalance {
  /**
   * Movement expiring soon
   *
   */
  expiring?: BillingCreditBalanceExpiringMovement[];
  /**
   * Balance amount
   *
   */
  amount?: OrderPrice;
  /**
   * Movement already booked on orders
   *
   */
  booked?: BillingCreditBalanceBookedMovement[];
  /**
   * Movement expiring soon
   *
   */
  expiringSummary?: BillingCreditBalanceExpiringMovement[];
  /**
   * Balance name
   *
   */
  balanceName?: string;
  /**
   * Balance last update
   *
   */
  lastUpdate?: Date;
  /**
   * Balance type
   *
   */
  type?: BillingCreditBalanceType;
  /**
   * Balance creation date
   *
   */
  creationDate?: Date;
}
/**
 * Default IP restriction of a VoIP line
 */
export interface TelephonyDefaultIpRestriction {
  /**
   * The IPv4 subnet you want to allow
   *
   */
  subnet?: string;
  /**
   */
  id?: Number;
  /**
   * The protocol you want to restrict (sip/mgcp)
   *
   */
  type?: TelephonyProtocolEnum;
}
/**
 * U2F Two-Factor Authentication
 */
export interface NichandleAccessRestrictionU2FAccount {
  /**
   * Last used date
   *
   */
  lastUsedDate?: Date;
  /**
   * Description of this U2F key
   *
   */
  description?: string;
  /**
   * The Id of the restriction
   *
   */
  id?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Status of this account
   *
   */
  status?: NichandleAccessRestrictionU2FStatusEnum;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Insight access token
 */
export interface InsightAccess {
  /**
   * Token creation date
   *
   */
  createdAt?: Date;
  /**
   * Access token
   *
   */
  access?: string;
  /**
   * Token expiration date
   *
   */
  expireAt?: Date;
}
/**
 * Sub Account
 */
export interface NichandleSubAccount {
  /**
   * This sub-account description
   *
   */
  description?: string;
  /**
   * This sub-account id
   *
   */
  id?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
}
/**
 * A registered payment mean
 */
export interface BillingOrderRegisteredPaymentMean {
  /**
   */
  paymentMean?: BillingReusablePaymentMeanEnum;
}
/**
 * Operation functions
 */
export type DomainNicOperationFunctionEnum = 'ContactControl' | 'DnsAnycastActivate' | 'DnsAnycastDeactivate' | 'DnssecDisable' | 'DnssecEnable' | 'DnssecResigning' | 'DnssecRollKsk' | 'DnssecRollZsk' | 'DomainContactControl' | 'DomainContactUpdate' | 'DomainControl' | 'DomainCreate' | 'DomainDelete' | 'DomainDnsUpdate' | 'DomainDsUpdate' | 'DomainHold' | 'DomainHostCreate' | 'DomainHostDelete' | 'DomainHostUpdate' | 'DomainIncomingTransfer' | 'DomainLock' | 'DomainOutgoingTransfer' | 'DomainRenew' | 'DomainRestore' | 'DomainTrade' | 'ZoneImport';
/**
 * Payment icon
 */
export interface PaymentMethodIcon {
  /**
   * Icon data in base64
   *
   */
  data?: string;
  /**
   * Icon name
   *
   */
  name?: string;
}
/**
 * List of all OVH things you can subscribe to
 */
export interface NichandleSubscription {
  /**
   * Determine whether you are registered or not
   *
   */
  registered?: boolean;
  /**
   * The type of subscription
   *
   */
  type?: string;
}
/**
 * States a nichandle can be in
 */
export type NichandleStateEnum = 'complete' | 'incomplete';
/**
 * Reusable payment mean type
 */
export type BillingReusablePaymentMeanEnum = 'CREDIT_CARD' | 'ENTERPRISE' | 'INTERNAL_TRUSTED_ACCOUNT' | 'PAYPAL' | 'bankAccount' | 'creditCard' | 'fidelityAccount' | 'ovhAccount' | 'paypal';
/**
 * Operations a voucher account movement can represent
 */
export type BillingVoucherAccountOperationEnum = 'cancel-credit' | 'cancel-debit' | 'cancel-pre-debit' | 'credit' | 'debit' | 'pre-credit' | 'pre-debit';
/**
 * SMS notifications
 */
export interface NichandleNichandleSmsNotification {
  /**
   * Last update date
   *
   */
  updateDate?: Date;
  /**
   * The phone number you want to receive notification on
   *
   */
  phoneNumber?: string;
  /**
   * Receive notification for abuse reports
   *
   */
  abuse?: boolean;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Status of your notification
   *
   */
  status?: NichandleNotificationStatusEnum;
}
/**
 * Representation of country and continent from visitor IP
 */
export interface GeolocationContinentCountryLocation {
  /**
   * Continent
   *
   */
  continent?: CoreTypesContinentEnum;
  /**
   * Country iso code
   *
   */
  countryCode?: CoreTypesCountryEnum;
  /**
   * The IP address processed, the user's origin one
   *
   */
  ip?: string;
}
/**
 * Information about a Bill entry
 */
export interface BillingBillDetail {
  /**
   */
  unitPrice?: OrderPrice;
  /**
   */
  quantity?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  domain?: string;
  /**
   */
  description?: string;
  /**
   */
  billDetailId?: string;
  /**
   */
  periodStart?: Date;
  /**
   */
  periodEnd?: Date;
}
/**
 * Details about an OVH account
 */
export interface BillingOvhAccount {
  /**
   */
  balance?: OrderPrice;
  /**
   */
  ovhAccountId?: string;
  /**
   */
  alertThreshold?: Number;
  /**
   */
  lastUpdate?: Date;
  /**
   */
  canBeCredited?: boolean;
  /**
   */
  isActive?: boolean;
  /**
   */
  openDate?: Date;
}
/**
 * List of consumptions recorded in a range
 */
export interface MeConsumptionTransaction {
  /**
   * Begin date
   *
   */
  beginDate?: Date;
  /**
   * End date
   *
   */
  endDate?: Date;
  /**
   * Consumption amount price
   *
   */
  price?: MeConsumptionPrice;
  /**
   * Last update
   *
   */
  lastUpdate?: Date;
  /**
   * List of product plan code consumption
   *
   */
  elements?: MeConsumptionTransactionElement[];
  /**
   * Transaction ID
   *
   */
  id?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Service ID
   *
   */
  serviceId?: Number;
}
/**
 * Payment transaction status enum
 */
export type MePaymentMethodTransactionStatus = 'CANCELED' | 'CANCELING' | 'CONFIRMING' | 'CREATED' | 'ERROR' | 'FAILED' | 'READY' | 'SUCCESS';
/**
 * List of all IP Restrictions
 */
export interface NichandleIpRestriction {
  /**
   * An IP range where we will apply the rule
   *
   */
  ip?: string;
  /**
   * Send an email if someone try to access with this IP address
   *
   */
  warning?: boolean;
  /**
   * Accept or deny IP access
   *
   */
  rule?: NichandleAccessRestrictionIpRestrictionRuleEnum;
  /**
   * The Id of the restriction
   *
   */
  id?: Number;
}
/**
 * Operations a fidelity account movement can represent
 */
export type BillingFidelityAccountOperationEnum = 'bonus' | 'cancel-bonus' | 'cancel-credit' | 'cancel-debit' | 'cancel-pre-debit' | 'credit' | 'debit' | 'pre-credit' | 'pre-debit';
/**
 * Os usage definition
 */
export type DedicatedTemplateOsUsageEnum = 'basic' | 'customer' | 'hosting' | 'other' | 'readyToUse' | 'virtualisation';
/**
 * State of contact change task
 */
export type NichandleChangeContactTaskStateEnum = 'aborted' | 'checkValidity' | 'doing' | 'done' | 'error' | 'expired' | 'refused' | 'todo' | 'validatingByCustomers';
/**
 * Information about a Deposit entry
 */
export interface BillingDepositDetail {
  /**
   */
  unitPrice?: OrderPrice;
  /**
   */
  quantity?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  depositDetailId?: string;
  /**
   */
  domain?: string;
  /**
   */
  description?: string;
}
/**
 * A SAML 2.0 provider
 */
export interface NichandleAuthenticationProvider {
  /**
   * IdP's signing certificate
   *
   */
  idpSigningCertificate?: NichandleAuthenticationCertificate;
  /**
   * Last update of the identity provider
   *
   */
  lastUpdate?: Date;
  /**
   * SAML Group attribute name
   *
   */
  groupAttributeName?: string;
  /**
   * Creation date of the identity provider
   *
   */
  creation?: Date;
  /**
   * IdP's Single Sign On Service Url
   *
   */
  ssoServiceUrl?: string;
}
/**
 * Continents
 */
export type CoreTypesContinentEnum = 'africa' | 'antartica' | 'asia' | 'europe' | 'north-america' | 'oceania' | 'south-america';
/**
 * List of state of an Api Application
 */
export type ApiApplicationStatusEnum = 'active' | 'blocked' | 'inactive' | 'trusted';
/**
 * Plan data from order
 */
export interface BillingItemDetailOrderPlan {
  /**
   * Duration chosen when ordering through /order/cart (ISO 8601)
   *
   */
  duration?: string;
  /**
   * Product from /order/cart
   *
   */
  product?: BillingItemDetailOrderPlanProduct;
  /**
   * Pricing mode used when ordering through /order/cart
   *
   */
  pricingMode?: string;
  /**
   * Plan code used when ordering through /order/cart
   *
   */
  code?: string;
  /**
   * Quantity ordered
   *
   */
  quantity?: Number;
}
/**
 * OVH subsidiaries
 */
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
/**
 * All status a debt entry can be in
 */
export type DebtEntryStatusEnum = 'CANCELLED' | 'DONE' | 'FAILED' | 'PAID' | 'PENDING' | 'TODO';
/**
 * Details about your OVH identifier
 */
export interface NichandleNichandle {
  /**
   */
  country?: NichandleCountryEnum;
  /**
   */
  firstname?: string;
  /**
   */
  legalform?: NichandleLegalFormEnum;
  /**
   */
  city?: string;
  /**
   * Your customer code (a numerical value used for identification when contacting support via phone call)
   *
   */
  customerCode?: string;
  /**
   */
  organisation?: string;
  /**
   */
  language?: NichandleLanguageEnum;
  /**
   */
  companyNationalIdentificationNumber?: string;
  /**
   */
  phoneCountry?: NichandleCountryEnum;
  /**
   */
  spareEmail?: string;
  /**
   */
  corporationType?: string;
  /**
   * Customer currency
   *
   */
  currency?: NichandleCurrency;
  /**
   */
  state?: NichandleStateEnum;
  /**
   */
  fax?: string;
  /**
   */
  ovhSubsidiary?: NichandleOvhSubsidiaryEnum;
  /**
   */
  email?: string;
  /**
   */
  nationalIdentificationNumber?: string;
  /**
   */
  zip?: string;
  /**
   */
  area?: string;
  /**
   */
  ovhCompany?: NichandleOvhCompanyEnum;
  /**
   */
  birthDay?: string;
  /**
   */
  address?: string;
  /**
   */
  sex?: NichandleGenderEnum;
  /**
   */
  vat?: string;
  /**
   */
  birthCity?: string;
  /**
   */
  phone?: string;
  /**
   */
  name?: string;
  /**
   */
  nichandle?: string;
}
/**
 * Payment method status enum
 */
export type MePaymentMethodPaymentMethodStatus = 'CANCELED' | 'CANCELING' | 'CREATED' | 'ERROR' | 'EXPIRED' | 'CREATING' | 'MAINTENANCE' | 'PAUSED' | 'VALID';
/**
 * operation Action
 */
export type DomainOperationActionEnum = 'canCancel' | 'canCorrect' | 'canRelaunch' | 'canReset';
/**
 * Internal customer billing capacities for customer control panel
 */
export interface NichandleBillingCapacities {
  /**
   * Indicates customer's ability to use postal mailing for invoices
   *
   */
  canUsePostalMailForInvoices?: boolean;
  /**
   * Indicates the mandatory nature of having a valid payment method
   *
   */
  requiredPaymentMethod?: NichandleRequiredPaymentMethodEnum;
  /**
   * Indicates if the debt system has been enabled on the customer account
   *
   */
  canUseDebtSystem?: boolean;
}
/**
 * Xdsl Settings
 */
export interface XdslSetting {
  /**
   * Send the modem as soon as possible, do not wait the xdsl line to be active
   *
   */
  resellerFastModemShipping?: boolean;
  /**
   * Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager
   *
   */
  resellerModemBasicConfig?: boolean;
}
/**
 * Type of objects an order can be linked to
 */
export type BillingOrderAssociatedObjectTypeEnum = 'Bill' | 'Deposit' | 'Refund' | 'Withdrawal';
/**
 * Details about a withdrawal
 */
export interface BillingWithdrawal {
  /**
   */
  date?: Date;
  /**
   */
  country?: string;
  /**
   */
  amount?: OrderPrice;
  /**
   */
  password?: string;
  /**
   */
  pdfUrl?: string;
  /**
   */
  withdrawalId?: string;
  /**
   */
  orderId?: Number;
  /**
   */
  url?: string;
}
/**
 * Configuration of order
 */
export interface BillingItemDetailOrderConfiguration {
  /**
   * Label of the configuration
   *
   */
  label?: string;
  /**
   * Value of the configuration
   *
   */
  value?: string;
}
/**
 * Callback URL's to register a new payment method
 */
export interface MePaymentMethodCallbackUrl {
  /**
   * URL when customer cancels the action
   *
   */
  cancel?: string;
  /**
   * URL when payment method registration success
   *
   */
  success?: string;
  /**
   * URL when registration failed
   *
   */
  failure?: string;
  /**
   * URL when payment method is in validation
   *
   */
  pending?: string;
  /**
   * URL when registration encounters an error
   *
   */
  error?: string;
}
/**
 * Indicates the mandatory nature of having a valid payment method
 */
export type NichandleRequiredPaymentMethodEnum = 'mandatoryForAutorenew' | 'mandatoryForPostpaid' | 'notMandatory';
/**
 * Credit balance applied on an Order
 */
export interface BillingCreditBalance {
  /**
   * Amount applied from the balance
   *
   */
  amount?: OrderPrice;
  /**
   * Credit balance name
   *
   */
  balanceName?: string;
}
/**
 * Voucher Status and Information
 */
export interface NichandleVoucherStatus {
  /**
   * Is voucher valid
   *
   */
  validity?: boolean;
}
/**
 * Deferred payment account info
 */
export interface BillingDeferredPaymentAccount {
  /**
   */
  defaultPaymentMean?: boolean;
  /**
   * Custom description of this account
   *
   */
  description?: string;
  /**
   */
  state?: BillingDeferredPaymentAccountStatusEnum;
  /**
   */
  id?: Number;
  /**
   * Deferred account type
   *
   */
  label?: string;
  /**
   */
  creationDate?: Date;
}
/**
 * Campaign type
 */
export type MeConsentCampaignTypeEnum = 'OPTIN' | 'OPTOUT';
/**
 * Order data for this Detail
 */
export interface BillingItemDetailOrder {
  /**
   * Configurations chosen during the order
   *
   */
  configurations?: BillingItemDetailOrderConfiguration[];
  /**
   * The meaning of this order detail
   *
   */
  action?: BillingItemDetailOrderActionEnum;
  /**
   * Plan from /order/cart
   *
   */
  plan?: BillingItemDetailOrderPlan;
}
/**
 * Describe all services impacted by SLA
 */
export interface BillingSlaOperationService {
  /**
   * SLA plan description
   *
   */
  slaPlan?: string;
  /**
   * Service description
   *
   */
  description?: string;
  /**
   * Impacted service name
   *
   */
  serviceName?: string;
  /**
   * SLA plan application
   *
   */
  slaApplication?: string;
}
/**
 * Representation of an Address
 */
export interface ContactAddress {
  /**
   * Zipcode
   *
   */
  zip?: string;
  /**
   * Country
   *
   */
  country?: NichandleCountryEnum;
  /**
   * Province name
   *
   */
  province?: string;
  /**
   * City
   *
   */
  city?: string;
  /**
   * Others details
   *
   */
  otherDetails?: string;
  /**
   * Third line of the address
   *
   */
  line3?: string;
  /**
   * Second line of the address
   *
   */
  line2?: string;
  /**
   * First line of the address
   *
   */
  line1?: string;
}
/**
 * Available payment methods
 */
export interface PaymentMethodAvailablePaymentMethod {
  /**
   * Payment method type is registerable ?
   *
   */
  registerable?: boolean;
  /**
   * Payment method type icon
   *
   */
  icon?: PaymentMethodIcon;
  /**
   * Payment method type is possible to pay in oneshot mode ?
   *
   */
  oneshot?: boolean;
  /**
   * Payment method type
   *
   */
  paymentType?: string;
}
/**
 * Manager preference
 */
export interface NichandleManagerPreference {
  /**
   * This preference value
   *
   */
  value?: string;
  /**
   * This preference key
   *
   */
  key?: string;
}
/**
 * Element of consumption for resource
 */
export interface MeConsumptionTransactionElement {
  /**
   * Family of the offer
   *
   */
  planFamily?: string;
  /**
   * Consumption quantity
   *
   */
  quantity?: Number;
  /**
   * Consumption amount price
   *
   */
  price?: MeConsumptionPrice;
  /**
   * List of consumption details for this planCode
   *
   */
  details?: MeConsumptionTransactionElementDetail[];
  /**
   * Identifier of the offer
   *
   */
  planCode?: string;
}
/**
 * Customer consent decision
 */
export interface MeConsentDecision {
  /**
   * Consent decision value
   *
   */
  value?: boolean;
  /**
   * Consent decision datetime
   *
   */
  timestamp?: Date;
}
/**
 * List of payment sub type enum
 */
export type BillingPaymentMethodPaymentSubTypeEnum = 'AMERICAN_EXPRESS' | 'MASTERCARD' | 'VISA';
/**
 * TODO
 */
export interface BillingOrderPaymentMeans {
  /**
   */
  ideal?: BillingOrderPaymentMean[];
  /**
   */
  ovhAccount?: BillingOrderPaymentMean[];
  /**
   */
  edinar?: BillingOrderPaymentMean[];
  /**
   */
  fidelityPoints?: BillingOrderPaymentMean[];
  /**
   */
  creditCard?: BillingOrderPaymentMean[];
  /**
   */
  paypal?: BillingOrderPaymentMean[];
  /**
   */
  multibanco?: BillingOrderPaymentMean[];
  /**
   */
  promotion?: BillingOrderPaymentMean[];
}
/**
 * List of order actions
 */
export type BillingItemDetailOrderActionEnum = 'consumption' | 'installation' | 'renew' | 'upgrade';
/**
 * Status of the Sms account
 */
export type NichandleAccessRestrictionSmsStatusEnum = 'disabled' | 'enabled' | 'needCodeValidation' | 'needEmailValidation';
/**
 * Legal forms a nichandle can be registered as
 */
export type NichandleLegalFormEnum = 'administration' | 'association' | 'corporation' | 'individual' | 'other' | 'personalcorporation';
/**
 * Describe TOTP secret keys
 */
export interface NichandleAccessRestrictionTOTPSecret {
  /**
   */
  qrcodeHelper?: string;
  /**
   */
  secret?: string;
  /**
   */
  id?: Number;
}
/**
 * List of bank account states
 */
export type BillingBankAccountStateEnum = 'blockedForIncidents' | 'pendingValidation' | 'valid';
/**
 * All states a Credential can be in
 */
export type AuthCredentialStateEnum = 'expired' | 'pendingValidation' | 'refused' | 'validated';
/**
 * Paypal account info
 */
export interface BillingPaypal {
  /**
   */
  defaultPaymentMean?: boolean;
  /**
   */
  agreementId?: string;
  /**
   * Custom description of this account
   *
   */
  description?: string;
  /**
   */
  id?: Number;
  /**
   */
  state?: BillingPaypalStateEnum;
  /**
   */
  creationDate?: Date;
  /**
   */
  email?: string;
}
/**
 * Access rule required for the application
 */
export interface AuthAccessRule {
  /**
   */
  path?: string;
  /**
   */
  method?: AuthMethodEnum;
}
/**
 * Status of your deferred invoice payment account
 */
export type BillingDeferredPaymentAccountStatusEnum = 'valid';
/**
 * Payment method transaction object
 */
export interface MePaymentMethodTransaction {
  /**
   * Transaction amount
   *
   */
  amount?: OrderPrice;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Transaction type
   *
   */
  type?: MePaymentMethodTransactionType;
  /**
   * Transaction ID
   *
   */
  transactionId?: Number;
  /**
   * Transaction status
   *
   */
  status?: MePaymentMethodTransactionStatus;
}
/**
 * All genders a person can choose
 */
export type NichandleGenderEnum = 'female' | 'male';
/**
 * List of payment type enum
 */
export type BillingPaymentMethodPaymentTypeEnum = 'BANK_ACCOUNT' | 'CREDIT_CARD' | 'DEFERRED_PAYMENT_ACCOUNT' | 'ENTERPRISE' | 'INTERNAL_TRUSTED_ACCOUNT' | 'PAYPAL';
/**
 * All HTTP methods available
 */
export type HttpMethodEnum = 'DELETE' | 'GET' | 'POST' | 'PUT';
/**
 * State of you paypal account
 */
export type BillingPaypalStateEnum = 'tooManyFailures' | 'valid';
/**
 * Operations an OVH account movement can represent
 */
export type BillingOvhAccountOperationEnum = 'cancel-credit' | 'cancel-debit' | 'cancel-pre-debit' | 'credit' | 'debit' | 'pre-credit' | 'pre-debit';
/**
 * State of email change task
 */
export type NichandleChangeEmailTaskStateEnum = 'aborted' | 'done' | 'refused' | 'todo';
/**
 * Register validation payload result
 */
export interface MePaymentMethodRegisterValidationResult {
  /**
   * Register new payment method ID
   *
   */
  paymentMethodId?: Number;
  /**
   * Register validation type
   *
   */
  validationType?: MePaymentMethodRegisterValidationType;
  /**
   * Register validation URL
   *
   */
  url?: string;
}
/**
 * Balance of the fidelity account
 */
export interface BillingFidelityAccount {
  /**
   */
  balance?: Number;
  /**
   */
  alertThreshold?: Number;
  /**
   */
  lastUpdate?: Date;
  /**
   */
  canBeCredited?: boolean;
  /**
   */
  openDate?: Date;
}
/**
 * Details about a deposit
 */
export interface BillingDeposit {
  /**
   */
  date?: Date;
  /**
   */
  amount?: OrderPrice;
  /**
   */
  depositId?: string;
  /**
   */
  password?: string;
  /**
   */
  pdfUrl?: string;
  /**
   */
  orderId?: Number;
  /**
   */
  url?: string;
  /**
   */
  paymentInfo?: DebtAssociatedObjectPaymentInfo;
}
/**
 * API Log
 */
export interface ApiLog {
  /**
   * Date of the request
   *
   */
  date?: Date;
  /**
   * HTTP URI of the request
   *
   */
  path?: string;
  /**
   * API Route called
   *
   */
  route?: string;
  /**
   * HTTP Method of the request
   *
   */
  method?: HttpMethodEnum;
  /**
   * Source IP of the request
   *
   */
  ip?: string;
  /**
   */
  logId?: Number;
  /**
   * Account which did the Request
   *
   */
  account?: string;
}
/**
 * Product data from order
 */
export interface BillingItemDetailOrderPlanProduct {
  /**
   * Name of the product used when ordering through /order/cart
   *
   */
  name?: string;
}
/**
 * billing task status
 */
export type BillingBillingTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * Auto renewal information
 */
export interface NichandleNicAutorenewInfos {
  /**
   * give the last renew
   *
   */
  lastRenew?: Date;
  /**
   * Renewal active or not
   *
   */
  active?: boolean;
  /**
   * give the renewal day
   *
   */
  renewDay?: Number;
}
/**
 * Movement already booked on orders
 */
export interface BillingCreditBalanceBookedMovement {
  /**
   * Movement amount
   *
   */
  amount?: OrderPrice;
  /**
   * Order ID
   *
   */
  orderId?: Number;
}
/**
 * Describe SOTP validation status
 */
export interface NichandleAccessRestrictionSOTPValidate {
  /**
   */
  remainingCodes?: Number;
}
/**
 * Information about a Bill entry
 */
export interface BillingOrderDetail {
  /**
   */
  unitPrice?: OrderPrice;
  /**
   */
  quantity?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  domain?: string;
  /**
   */
  description?: string;
  /**
   */
  cancelled?: boolean;
  /**
   */
  orderDetailId?: Number;
}
/**
 * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
 */
export interface NichandleSshKey {
  /**
   * True when this public SSH key is used for rescue mode and reinstallations
   *
   */
  default?: boolean;
  /**
   * Name of this public SSH key
   *
   */
  keyName?: string;
  /**
   * ASCII encoded public SSH key
   *
   */
  key?: string;
}
/**
 * Permission given on the account
 */
export type NichandleAuthenticationRoleEnum = 'REGULAR' | 'ADMIN' | 'UNPRIVILEGED';
/**
 * Customer consent information for a campaign
 */
export interface MeConsentConsent {
  /**
   * Campaign name
   *
   */
  campaign?: string;
  /**
   * Consent decisions history for this campaign
   *
   */
  history?: MeConsentDecision[];
  /**
   * Campaign type
   *
   */
  type?: MeConsentCampaignTypeEnum;
  /**
   * Current consent value
   *
   */
  value?: boolean;
}
/**
 * All HTTP methods available
 */
export type AuthMethodEnum = 'DELETE' | 'GET' | 'POST' | 'PUT';
/**
 * Credit card informations
 */
export interface BillingCreditCard {
  /**
   */
  defaultPaymentMean?: boolean;
  /**
   * True if this credit card has been registered with a successful 3DSecure challenge
   *
   */
  threeDsValidated?: boolean;
  /**
   */
  number?: string;
  /**
   * Custom description of this account
   *
   */
  description?: string;
  /**
   */
  id?: Number;
  /**
   */
  state?: BillingCreditCardStateEnum;
  /**
   */
  type?: string;
  /**
   */
  expirationDate?: Date;
}
/**
 * Information about a Bill entry
 */
export interface BillingRefundDetail {
  /**
   */
  reference?: string;
  /**
   */
  unitPrice?: OrderPrice;
  /**
   */
  quantity?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  domain?: string;
  /**
   */
  refundDetailId?: string;
  /**
   */
  description?: string;
  /**
   */
  refundId?: string;
}
/**
 * Extras informations about a field
 */
export interface ContactFieldInformation {
  /**
   * Name of the field concerned by restrictions
   *
   */
  fieldName?: string;
  /**
   * Indicates if the field can't be edited
   *
   */
  readOnly?: boolean;
  /**
   * Indicates if the field is mandatory when editing
   *
   */
  mandatory?: boolean;
}
/**
 * Partitioning schemes available on this template
 */
export interface DedicatedInstallationTemplateTemplatePartitioningSchemes {
  /**
   * name of this partitioning scheme
   *
   */
  name?: string;
  /**
   * on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)
   *
   */
  priority?: Number;
}
/**
 * Information about a Withdrawal entry
 */
export interface BillingWithdrawalDetail {
  /**
   */
  unitPrice?: OrderPrice;
  /**
   */
  quantity?: string;
  /**
   */
  withdrawalDetailId?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  domain?: string;
  /**
   */
  description?: string;
}
/**
 * Price with currency and amount in micro-cents
 */
export interface MeConsumptionPrice {
  /**
   */
  text?: string;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  value?: Number;
  /**
   */
  valueInUcents?: Number;
}
/**
 * The payment infos linked to this debt entry
 */
export interface DebtAssociatedObjectPaymentInfo {
  /**
   * Public payment mean label
   *
   */
  publicLabel?: string;
  /**
   * Optional customer description
   *
   */
  description?: string;
  /**
   * Payment mean used for this debt operation
   *
   */
  paymentType?: BillingPaymentMeanEnum;
}
/**
 * Line description policies settings
 */
export interface TelephonyLineDescriptionSettings {
  /**
   * Line's description is displayed on bills
   *
   */
  displayOnBill?: boolean;
  /**
   * Line's description is displayed on incoming calls
   *
   */
  displayOnIncomingCall?: boolean;
}
/**
 * State of you credit card
 */
export type BillingCreditCardStateEnum = 'expired' | 'tooManyFailures' | 'valid';
/**
 * A structure describing properties customizables about this dedicated installation template
 */
export interface DedicatedTemplateOsProperties {
  /**
   * Name of the ssh key that should be installed. Password login will be disabled
   *
   */
  sshKeyName?: string;
  /**
   * Indicate the URL where your postinstall customisation script is located
   *
   */
  postInstallationScriptLink?: string;
  /**
   * indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is "loh1Xee7eo OK OK OK UGh8Ang1Gu
   *
   */
  postInstallationScriptReturn?: string;
  /**
   * Set up the server using the provided hostname instead of the default hostname
   *
   */
  customHostname?: string;
  /**
   */
  rating?: Number;
  /**
   * Template change log details
   *
   */
  changeLog?: string;
  /**
   * Use the distribution's native kernel instead of the recommended OVH Kernel
   *
   */
  useDistributionKernel?: boolean;
}
/**
 * Accept or deny IP access
 */
export type NichandleAccessRestrictionIpRestrictionRuleEnum = 'accept' | 'deny';
/**
 * Describe U2F SignRequest
 */
export interface NichandleAccessRestrictionU2FSignRequest {
  /**
   */
  challenge?: string;
  /**
   */
  version?: string;
  /**
   */
  keyHandle?: string;
}
/**
 * Movement expiring soon
 */
export interface BillingCreditBalanceExpiringMovement {
  /**
   * Movement amount
   *
   */
  amount?: OrderPrice;
  /**
   * Movement last update
   *
   */
  lastUpdate?: Date;
  /**
   * Object source of this credit movement
   *
   */
  sourceObject?: BillingCreditBalanceMovementSubObject;
  /**
   * Movement creation date
   *
   */
  creationDate?: Date;
  /**
   * Movement expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * Element of consumption for resource
 */
export interface MeConsumptionTransactionElementDetail {
  /**
   * Unique ID associated to one service element
   *
   */
  unique_id?: string;
  /**
   * Consumption quantity
   *
   */
  quantity?: Number;
  /**
   * Consumption amount price
   *
   */
  price?: MeConsumptionPrice;
}
/**
 * Extensions of a detail
 */
export interface BillingItemDetail {
  /**
   */
  order?: BillingItemDetailOrder;
}
/**
 * Os type
 */
export type DedicatedTemplateOsTypeEnum = 'bsd' | 'linux' | 'solaris' | 'windows';
/**
 * Contract of service
 */
export interface AgreementsContract {
  /**
   * Date the contract was created on
   *
   */
  date?: Date;
  /**
   * URL you can download the contract at
   *
   */
  pdf?: string;
  /**
   * Name of of the contract
   *
   */
  name?: string;
  /**
   * Is this contract currently active or not ?
   *
   */
  active?: boolean;
  /**
   * Full text of the contract
   *
   */
  text?: string;
}
/**
 * Task running an email change on an account
 */
export interface NichandleEmailChangeTask {
  /**
   * End date of that request
   *
   */
  dateDone?: Date;
  /**
   * The email address to change for
   *
   */
  newEmail?: string;
  /**
   * Creation date of that request
   *
   */
  dateRequest?: Date;
  /**
   * Current state of the request
   *
   */
  state?: NichandleChangeEmailTaskStateEnum;
  /**
   */
  id?: Number;
}
/**
 * Register validation type enum
 */
export type MePaymentMethodRegisterValidationType = 'DONE' | 'REDIRECT' | 'IFRAME_VANTIV';
/**
 * Customer currency
 */
export interface NichandleCurrency {
  /**
   * Currency symbol
   *
   */
  symbol?: string;
  /**
   * Currency code
   *
   */
  code?: string;
}
/**
 * One step from an operation
 */
export interface DomainOperationStep {
  /**
   * Description of the step
   *
   */
  description?: string;
  /**
   * Name of the step
   *
   */
  step?: string;
  /**
   * Execution time of the step
   *
   */
  executionDuration?: Number;
}
/**
 * API Credential
 */
export interface ApiCredential {
  /**
   */
  lastUse?: Date;
  /**
   * States whether this credential has been created by yourself or by the OVH support team
   *
   */
  ovhSupport?: boolean;
  /**
   */
  credentialId?: Number;
  /**
   */
  expiration?: Date;
  /**
   */
  rules?: AuthAccessRule[];
  /**
   */
  applicationId?: Number;
  /**
   */
  creation?: Date;
  /**
   */
  status?: AuthCredentialStateEnum;
}
/**
 * Email notification
 */
export interface NichandleEmailNotification {
  /**
   * This email date
   *
   */
  date?: Date;
  /**
   * This email subject
   *
   */
  subject?: string;
  /**
   * This email Id
   *
   */
  id?: Number;
  /**
   * This email body
   *
   */
  body?: string;
}
/**
 * Details about an OVH account
 */
export interface BillingMovement {
  /**
   */
  date?: Date;
  /**
   */
  amount?: OrderPrice;
  /**
   */
  balance?: OrderPrice;
  /**
   */
  description?: string;
  /**
   */
  operation?: BillingOvhAccountOperationEnum;
  /**
   */
  movementId?: Number;
  /**
   */
  order?: Number;
  /**
   */
  previousBalance?: OrderPrice;
}
/**
 * SLA properties
 */
export interface BillingSlaOperation {
  /**
   * Date of the event that led to SLA
   *
   */
  date?: Date;
  /**
   * Date of the end of the SLA
   *
   */
  endDate?: Date;
  /**
   * Sla operation name
   *
   */
  name?: string;
  /**
   * Description of the SLA operation for this incident
   *
   */
  description?: string;
  /**
   * SLA identifier
   *
   */
  id?: Number;
  /**
   * Date of the start of the SLA
   *
   */
  startDate?: Date;
}
/**
 * all language available
 */
export type DedicatedTemplateOsLanguageEnum = 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'nb' | 'nl' | 'no' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tr' | 'tu' | 'uk' | 'zh-Hans-CN' | 'zh-Hans-HK';
/**
 * Details about a Voucher account
 */
export interface BillingVoucherAccount {
  /**
   */
  balance?: OrderPrice;
  /**
   */
  voucherAccountId?: string;
  /**
   */
  lastUpdate?: Date;
  /**
   */
  openDate?: Date;
}
/**
 * A validation required to add a payment mean
 */
export interface BillingPaymentMeanValidation {
  /**
   */
  submitUrl?: string;
  /**
   */
  validationType?: BillingPaymentMeanValidationType;
  /**
   */
  id?: Number;
  /**
   */
  url?: string;
}
/**
 * partition raid type
 */
export type DedicatedServerPartitionRaidEnum = '0' | '1' | '10' | '5' | '6';
/**
 * Details about a fidelity account
 */
export interface BillingFidelityMovement {
  /**
   */
  date?: Date;
  /**
   */
  amount?: Number;
  /**
   */
  balance?: Number;
  /**
   */
  description?: string;
  /**
   */
  operation?: BillingFidelityAccountOperationEnum;
  /**
   */
  movementId?: Number;
  /**
   */
  order?: Number;
  /**
   */
  previousBalance?: Number;
}
/**
 * API Application
 */
export interface ApiApplication {
  /**
   */
  applicationKey?: string;
  /**
   */
  name?: string;
  /**
   */
  description?: string;
  /**
   */
  applicationId?: Number;
  /**
   */
  status?: ApiApplicationStatusEnum;
}
/**
 * Choice for an HTTP multi value parameter
 */
export interface BillingOrderPaymentMeanHttpParameterChoice {
  /**
   */
  name?: string;
  /**
   */
  value?: string;
}
/**
 * Domain operation progress
 */
export interface NichandleDomainTaskProgressBar {
  /**
   * Current step of the operation
   *
   */
  currentStep?: DomainOperationStep;
  /**
   * Action possible on task
   *
   */
  taskActions?: DomainOperationActionEnum[];
  /**
   * The last update date of the task
   *
   */
  lastUpdateDate?: Date;
  /**
   * The estimated end date of the task
   *
   */
  expectedDoneDate?: Date;
  /**
   * all the steps of operation
   *
   */
  followUpSteps?: DomainOperationStep[];
  /**
   * Progress percentage of the task
   *
   */
  progress?: Number;
  /**
   * The status of the task
   *
   */
  taskStatus?: DomainOperationStatusEnum;
}
/**
 * Describe U2F RegistrationRequest
 */
export interface NichandleAccessRestrictionU2FRegistrationRequest {
  /**
   */
  challenge?: string;
  /**
   */
  version?: string;
}
/**
 * X509 Certificate
 */
export interface NichandleAuthenticationCertificate {
  /**
   * Certificate's subject
   *
   */
  subject?: string;
  /**
   * Certificate's expiration
   *
   */
  expiration?: Date;
}
/**
 * U2F Register Request
 */
export interface NichandleAccessRestrictionU2FRegisterChallenge {
  /**
   */
  request?: NichandleAccessRestrictionU2FRegistrationRequest;
  /**
   */
  id?: Number;
  /**
   */
  applicationId?: string;
}
/**
 * List of documents added on your account
 */
export interface NichandleDocumentDocument {
  /**
   * URL used to get document
   *
   */
  getUrl?: string;
  /**
   * Document size (in bytes)
   *
   */
  size?: Number;
  /**
   * URL used to put document
   *
   */
  putUrl?: string;
  /**
   * Document name
   *
   */
  name?: string;
  /**
   * Document validation
   *
   */
  validationDate?: Date;
  /**
   * Document id
   *
   */
  id?: string;
  /**
   * Document creation
   *
   */
  creationDate?: Date;
  /**
   * Document tags
   *
   */
  tags?: ComplexTypeSafeKeyValue<string>[];
  /**
   * Document expiration
   *
   */
  expirationDate?: Date;
}
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * Allowed types of contact who can be changed by change contact task
 */
export type NichandleChangeContactContactTypeEnum = 'contactAdmin' | 'contactBilling' | 'contactTech';
/**
 * Consent campaign
 */
export interface MeConsentCampaign {
  /**
   * Campaign name
   *
   */
  name?: string;
  /**
   * Campaign description
   *
   */
  description?: string;
  /**
   * Campaign type
   *
   */
  type?: MeConsentCampaignTypeEnum;
}
/**
 * Balance type
 */
export type BillingCreditBalanceType = 'PREPAID_ACCOUNT' | 'VOUCHER' | 'DEPOSIT' | 'BONUS';
/**
 * Details about a Bill
 */
export interface BillingBill {
  /**
   */
  date?: Date;
  /**
   */
  pdfUrl?: string;
  /**
   */
  password?: string;
  /**
   */
  orderId?: Number;
  /**
   */
  billId?: string;
  /**
   */
  priceWithTax?: OrderPrice;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  tax?: OrderPrice;
  /**
   */
  url?: string;
}
/**
 * A user
 */
export interface NichandleUser {
  /**
   * When the user changed his password for the last time
   *
   */
  passwordLastUpdate?: Date;
  /**
   * Last update of this user
   *
   */
  lastUpdate?: Date;
  /**
   * User's description
   *
   */
  description?: string;
  /**
   * User's login suffix
   *
   */
  login?: string;
  /**
   * User's email
   *
   */
  email?: string;
  /**
   * Creation date of this user
   *
   */
  creation?: Date;
  /**
   * Current user's status
   *
   */
  status?: NichandleUserStatus;
  /**
   * User's group
   *
   */
  group?: string;
}
/**
 * Status of SOTP account
 */
export type NichandleAccessRestrictionSOTPStatusEnum = 'disabled' | 'enabled' | 'needCodeValidation' | 'needEmailValidation';
/**
 * All payment means you might have use on an OVH order
 */
export type BillingPaymentMeanEnum = 'cash' | 'chargeback' | 'cheque' | 'creditAccount' | 'creditCard' | 'debtAccount' | 'deposit' | 'digitalLaunchPad' | 'edinar' | 'fidelityPoints' | 'free' | 'ideal' | 'incubatorAccount' | 'mandat' | 'multibanco' | 'none' | 'ovhAccount' | 'paymentMandate' | 'paypal' | 'payu' | 'platnosci' | 'refund' | 'transfer' | 'withdrawal';
/**
 * Parameter to give to a payment page
 */
export interface BillingOrderPaymentMeanHttpParameter {
  /**
   */
  name?: string;
  /**
   */
  choice?: BillingOrderPaymentMeanHttpParameterChoice[];
  /**
   */
  value?: string;
}
/**
 * Payment methods
 */
export interface BillingOrderPaymentMethods {
  /**
   * Payment method available on this order
   *
   */
  available?: PaymentMethodAvailablePaymentMethod[];
  /**
   * IDs of registered payment method usable on this order
   *
   */
  registered?: Number[];
}
/**
 * Icon
 */
export interface MePaymentMethodIcon {
  /**
   * Icon in base64
   *
   */
  data?: string;
  /**
   * Icon name
   *
   */
  name?: string;
}
/**
 * Status of your notification
 */
export type NichandleNotificationStatusEnum = 'ok' | 'waitingForValidation';
/**
 * Document file format
 */
export type DomainDocumentFormatsEnum = 'gif' | 'jpeg' | 'jpg' | 'pdf' | 'png';
type PathsmeGET = '/me/billing/invoicesByPostalMail' | 
'/me/mailingList/availableLists' | 
'/me/agreements/{id}' | 
'/me/agreements/{id}/contract' | 
'/me/agreements' | 
'/me/consent' | 
'/me/consent/{campaignName}/decision' | 
'/me/consent/{campaignName}' | 
'/me/installationTemplate' | 
'/me/installationTemplate/{templateName}' | 
'/me/installationTemplate/{templateName}/partitionScheme' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' | 
'/me/api/credential/{credentialId}/application' | 
'/me/api/credential/{credentialId}' | 
'/me/api/credential' | 
'/me/api/application' | 
'/me/api/application/{applicationId}' | 
'/me/api/logs/services' | 
'/me/api/logs/services/{logId}' | 
'/me/api/logs/self' | 
'/me/api/logs/self/{logId}' | 
'/me/certificates' | 
'/me/paymentMean/creditCard/{id}' | 
'/me/paymentMean/creditCard' | 
'/me/paymentMean/paypal' | 
'/me/paymentMean/paypal/{id}' | 
'/me/paymentMean/bankAccount' | 
'/me/paymentMean/bankAccount/{id}' | 
'/me/paymentMean/deferredPaymentAccount' | 
'/me/paymentMean/deferredPaymentAccount/{id}' | 
'/me/autorenew' | 
'/me/fidelityAccount' | 
'/me/fidelityAccount/movements' | 
'/me/fidelityAccount/movements/{movementId}' | 
'/me/identity/user/{user}' | 
'/me/identity/user' | 
'/me/identity/group' | 
'/me/identity/group/{group}' | 
'/me/task/domain/{id}/progressbar' | 
'/me/task/domain/{id}' | 
'/me/task/domain/{id}/argument/{key}' | 
'/me/task/domain/{id}/argument' | 
'/me/task/domain' | 
'/me/task/emailChange/{id}' | 
'/me/task/emailChange' | 
'/me/task/contactChange' | 
'/me/task/contactChange/{id}' | 
'/me/insight' | 
'/me' | 
'/me/payment/transaction/{transactionId}' | 
'/me/payment/transaction' | 
'/me/payment/availableMethods' | 
'/me/payment/method' | 
'/me/payment/method/{paymentMethodId}' | 
'/me/debtAccount' | 
'/me/debtAccount/debt/{debtId}' | 
'/me/debtAccount/debt/{debtId}/operation/{operationId}' | 
'/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject' | 
'/me/debtAccount/debt/{debtId}/operation' | 
'/me/debtAccount/debt' | 
'/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}' | 
'/me/withdrawal/{withdrawalId}/details' | 
'/me/withdrawal/{withdrawalId}/payment' | 
'/me/withdrawal/{withdrawalId}' | 
'/me/withdrawal' | 
'/me/subscription/{subscriptionType}' | 
'/me/subscription' | 
'/me/accessRestriction/ipDefaultRule' | 
'/me/accessRestriction/u2f' | 
'/me/accessRestriction/u2f/{id}' | 
'/me/accessRestriction/sms/{id}' | 
'/me/accessRestriction/sms' | 
'/me/accessRestriction/backupCode' | 
'/me/accessRestriction/developerMode' | 
'/me/accessRestriction/totp/{id}' | 
'/me/accessRestriction/totp' | 
'/me/accessRestriction/ip' | 
'/me/accessRestriction/ip/{id}' | 
'/me/order' | 
'/me/order/{orderId}/bill' | 
'/me/order/{orderId}/status' | 
'/me/order/{orderId}/paymentMeans' | 
'/me/order/{orderId}/associatedObject' | 
'/me/order/{orderId}/debt/operation' | 
'/me/order/{orderId}/debt/operation/{operationId}/associatedObject' | 
'/me/order/{orderId}/debt/operation/{operationId}' | 
'/me/order/{orderId}/debt' | 
'/me/order/{orderId}' | 
'/me/order/{orderId}/availableRegisteredPaymentMean' | 
'/me/order/{orderId}/paymentMethods' | 
'/me/order/{orderId}/details' | 
'/me/order/{orderId}/details/{orderDetailId}/extension' | 
'/me/order/{orderId}/details/{orderDetailId}' | 
'/me/order/{orderId}/payment' | 
'/me/order/{orderId}/refund' | 
'/me/sshKey/{keyName}' | 
'/me/sshKey' | 
'/me/refund' | 
'/me/refund/{refundId}' | 
'/me/refund/{refundId}/payment' | 
'/me/refund/{refundId}/details' | 
'/me/refund/{refundId}/details/{refundDetailId}' | 
'/me/sla/{id}/status' | 
'/me/sla/{id}/canBeApplied' | 
'/me/sla/{id}' | 
'/me/sla/{id}/services' | 
'/me/sla' | 
'/me/document' | 
'/me/document/{id}' | 
'/me/notification/email/history/{id}' | 
'/me/notification/email/history' | 
'/me/bill' | 
'/me/bill/{billId}' | 
'/me/bill/{billId}/details/{billDetailId}' | 
'/me/bill/{billId}/details' | 
'/me/bill/{billId}/debt' | 
'/me/bill/{billId}/debt/operation/{operationId}' | 
'/me/bill/{billId}/debt/operation/{operationId}/associatedObject' | 
'/me/bill/{billId}/debt/operation' | 
'/me/bill/{billId}/payment' | 
'/me/availableAutomaticPaymentMeans' | 
'/me/ipxeScript/{name}' | 
'/me/ipxeScript' | 
'/me/vipStatus' | 
'/me/deposit' | 
'/me/deposit/{depositId}/payment' | 
'/me/deposit/{depositId}/details' | 
'/me/deposit/{depositId}/details/{depositDetailId}' | 
'/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}' | 
'/me/deposit/{depositId}/paidBills/{billId}/details' | 
'/me/deposit/{depositId}/paidBills/{billId}/payment' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt/operation' | 
'/me/deposit/{depositId}/paidBills/{billId}' | 
'/me/deposit/{depositId}/paidBills' | 
'/me/deposit/{depositId}' | 
'/me/ovhAccount' | 
'/me/ovhAccount/{ovhAccountId}' | 
'/me/ovhAccount/{ovhAccountId}/movements' | 
'/me/ovhAccount/{ovhAccountId}/movements/{movementId}' | 
'/me/telephony/defaultIpRestriction' | 
'/me/telephony/defaultIpRestriction/{id}' | 
'/me/telephony/settings' | 
'/me/contact/{contactId}/fields' | 
'/me/contact/{contactId}' | 
'/me/contact' | 
'/me/xdsl/setting' | 
'/me/fax/customDomains' | 
'/me/fax/customDomains/{id}' | 
'/me/credit/balance/{balanceName}/movement/{movementId}' | 
'/me/credit/balance/{balanceName}/movement' | 
'/me/credit/balance/{balanceName}' | 
'/me/credit/balance' | 
'/me/subAccount/{id}' | 
'/me/subAccount' | 
'/me/consumption/usage/history' | 
'/me/consumption/usage/forecast' | 
'/me/consumption/usage/current' | 
'/me/ipOrganisation/{organisationId}' | 
'/me/ipOrganisation';

type PathsmePUT = '/me/consent/{campaignName}/decision' | 
'/me/installationTemplate/{templateName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' | 
'/me/paymentMean/creditCard/{id}' | 
'/me/paymentMean/paypal/{id}' | 
'/me/paymentMean/bankAccount/{id}' | 
'/me/paymentMean/deferredPaymentAccount/{id}' | 
'/me/autorenew' | 
'/me/fidelityAccount' | 
'/me/identity/user/{user}' | 
'/me/identity/group/{group}' | 
'/me/task/domain/{id}/argument/{key}' | 
'/me' | 
'/me/payment/method/{paymentMethodId}' | 
'/me/subscription/{subscriptionType}' | 
'/me/accessRestriction/ipDefaultRule' | 
'/me/accessRestriction/u2f/{id}' | 
'/me/accessRestriction/sms/{id}' | 
'/me/accessRestriction/developerMode' | 
'/me/accessRestriction/totp/{id}' | 
'/me/accessRestriction/ip/{id}' | 
'/me/sshKey/{keyName}' | 
'/me/document/{id}' | 
'/me/ovhAccount/{ovhAccountId}' | 
'/me/contact/{contactId}' | 
'/me/subAccount/{id}' | 
'/me/ipOrganisation/{organisationId}';

type PathsmePOST = '/me/billing/invoicesByPostalMail' | 
'/me/mailingList/subscribe' | 
'/me/agreements/{id}/accept' | 
'/me/installationTemplate' | 
'/me/installationTemplate/{templateName}/checkIntegrity' | 
'/me/installationTemplate/{templateName}/partitionScheme' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' | 
'/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean' | 
'/me/paymentMean/creditCard' | 
'/me/paymentMean/paypal' | 
'/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean' | 
'/me/paymentMean/bankAccount' | 
'/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean' | 
'/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean' | 
'/me/voucher/checkValidity' | 
'/me/autorenew' | 
'/me/fidelityAccount/creditOrder' | 
'/me/identity/user/{user}/enable' | 
'/me/identity/user/{user}/disable' | 
'/me/identity/user' | 
'/me/identity/group' | 
'/me/task/domain/{id}/accelerate' | 
'/me/task/domain/{id}/relaunch' | 
'/me/task/domain/{id}/cancel' | 
'/me/task/emailChange/{id}/accept' | 
'/me/task/emailChange/{id}/refuse' | 
'/me/task/contactChange/{id}/refuse' | 
'/me/task/contactChange/{id}/resendEmail' | 
'/me/task/contactChange/{id}/accept' | 
'/me/payment/method' | 
'/me/payment/method/{paymentMethodId}/finalize' | 
'/me/changeEmail' | 
'/me/debtAccount/pay' | 
'/me/debtAccount/debt/{debtId}/pay' | 
'/me/passwordRecover' | 
'/me/accessRestriction/u2f' | 
'/me/accessRestriction/u2f/{id}/challenge' | 
'/me/accessRestriction/u2f/{id}/validate' | 
'/me/accessRestriction/u2f/{id}/disable' | 
'/me/accessRestriction/u2f/{id}/enable' | 
'/me/accessRestriction/sms/{id}/enable' | 
'/me/accessRestriction/sms/{id}/sendCode' | 
'/me/accessRestriction/sms/{id}/validate' | 
'/me/accessRestriction/sms/{id}/disable' | 
'/me/accessRestriction/sms' | 
'/me/accessRestriction/backupCode/disable' | 
'/me/accessRestriction/backupCode/validate' | 
'/me/accessRestriction/backupCode/enable' | 
'/me/accessRestriction/backupCode' | 
'/me/accessRestriction/totp/{id}/disable' | 
'/me/accessRestriction/totp/{id}/validate' | 
'/me/accessRestriction/totp/{id}/enable' | 
'/me/accessRestriction/totp' | 
'/me/accessRestriction/ip' | 
'/me/order/{orderId}/debt/pay' | 
'/me/order/{orderId}/pay' | 
'/me/order/{orderId}/payWithRegisteredPaymentMean' | 
'/me/order/{orderId}/retraction' | 
'/me/sshKey' | 
'/me/sla/{id}/apply' | 
'/me/document/cors' | 
'/me/document' | 
'/me/bill/{billId}/debt/pay' | 
'/me/ipxeScript' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt/pay' | 
'/me/ovhAccount/{ovhAccountId}/creditOrder' | 
'/me/ovhAccount/{ovhAccountId}/retrieveMoney' | 
'/me/telephony/defaultIpRestriction' | 
'/me/telephony/settings' | 
'/me/contact' | 
'/me/changePassword' | 
'/me/geolocation' | 
'/me/xdsl/setting' | 
'/me/fax/customDomains' | 
'/me/credit/code' | 
'/me/subAccount/{id}/createConsumerKey' | 
'/me/subAccount' | 
'/me/ipOrganisation';

type PathsmeDELETE = '/me/installationTemplate/{templateName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' | 
'/me/api/credential/{credentialId}' | 
'/me/api/application/{applicationId}' | 
'/me/paymentMean/creditCard/{id}' | 
'/me/paymentMean/paypal/{id}' | 
'/me/paymentMean/bankAccount/{id}' | 
'/me/identity/user/{user}' | 
'/me/identity/group/{group}' | 
'/me/payment/method/{paymentMethodId}' | 
'/me/accessRestriction/u2f/{id}' | 
'/me/accessRestriction/sms/{id}' | 
'/me/accessRestriction/backupCode' | 
'/me/accessRestriction/totp/{id}' | 
'/me/accessRestriction/ip/{id}' | 
'/me/sshKey/{keyName}' | 
'/me/document/{id}' | 
'/me/ipxeScript/{name}' | 
'/me/telephony/defaultIpRestriction/{id}' | 
'/me/fax/customDomains/{id}' | 
'/me/ipOrganisation/{organisationId}';

class Apime extends ApiCommon {
  /**
  invoicesByPostalMail operations
  Send invoices through postal mail
  **/
  public get(path: '/me/billing/invoicesByPostalMail', pathParams: null, queryParams: null): Promise<boolean>;
  /**
  availableLists operations
  List of mailing list you can subscribe
  **/
  public get(path: '/me/mailingList/availableLists', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Contract agreement
  Get this object properties
  **/
  public get(path: '/me/agreements/{id}', pathParams: {id?: Number}, queryParams: null): Promise<AgreementsContractAgreement>;
  /**
  Contract of service
  Get this object properties
  **/
  public get(path: '/me/agreements/{id}/contract', pathParams: {id?: Number}, queryParams: null): Promise<AgreementsContract>;
  /**
  List the agreements.ContractAgreement objects
  List of contracts signed between you and OVH
  **/
  public get(path: '/me/agreements', pathParams: null, queryParams: {agreed?: AgreementsAgreementStateEnum, contractId?: Number}): Promise<Number[]>;
  /**
  List all consent campaign available
  List all consent campaign available
  **/
  public get(path: '/me/consent', pathParams: null, queryParams: null): Promise<MeConsentCampaign[]>;
  /**
  Get decision value for a consent campaign
  Get decision value for a consent campaign
  **/
  public get(path: '/me/consent/{campaignName}/decision', pathParams: {campaignName?: string}, queryParams: null): Promise<MeConsentConsent>;
  /**
  Retrieve information about a consent campaign
  Retrieve information about a consent campaign
  **/
  public get(path: '/me/consent/{campaignName}', pathParams: {campaignName?: string}, queryParams: null): Promise<MeConsentCampaign>;
  /**
  List the dedicated.installationTemplate.Templates objects
  Your customized operating system installation templates
  **/
  public get(path: '/me/installationTemplate', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Available installation templates
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}', pathParams: {templateName?: string}, queryParams: null): Promise<DedicatedInstallationTemplateTemplates>;
  /**
  List the dedicated.installationTemplate.templatePartitioningSchemes objects
  Partitioning schemes available on this template
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme', pathParams: {templateName?: string}, queryParams: null): Promise<string[]>;
  /**
  Partitioning schemes available on this template
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', pathParams: {templateName?: string, schemeName?: string}, queryParams: null): Promise<DedicatedInstallationTemplateTemplatePartitioningSchemes>;
  /**
  Hardware RAID defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', pathParams: {templateName?: string, schemeName?: string, name?: string}, queryParams: null): Promise<DedicatedInstallationTemplateHardwareRaid>;
  /**
  List the dedicated.installationTemplate.hardwareRaid objects
  Hardware RAIDs defined in this partitioning scheme
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', pathParams: {templateName?: string, schemeName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the dedicated.installationTemplate.templatePartitions objects
  Partitions defined in this partitioning scheme
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', pathParams: {templateName?: string, schemeName?: string}, queryParams: null): Promise<string[]>;
  /**
   Partitions defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', pathParams: {templateName?: string, schemeName?: string, mountpoint?: string}, queryParams: null): Promise<DedicatedInstallationTemplateTemplatePartitions>;
  /**
  API Application
  Get this object properties
  **/
  public get(path: '/me/api/credential/{credentialId}/application', pathParams: {credentialId?: Number}, queryParams: null): Promise<ApiApplication>;
  /**
  API Credential
  Get this object properties
  **/
  public get(path: '/me/api/credential/{credentialId}', pathParams: {credentialId?: Number}, queryParams: null): Promise<ApiCredential>;
  /**
  List the api.Credential objects
  List of your Api Credentials
  **/
  public get(path: '/me/api/credential', pathParams: null, queryParams: {status?: AuthCredentialStateEnum, applicationId?: Number}): Promise<Number[]>;
  /**
  List the api.Application objects
  List of your Api Application
  **/
  public get(path: '/me/api/application', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  API Application
  Get this object properties
  **/
  public get(path: '/me/api/application/{applicationId}', pathParams: {applicationId?: Number}, queryParams: null): Promise<ApiApplication>;
  /**
  List the api.Log objects
  List of Api calls done on services you have access to
  **/
  public get(path: '/me/api/logs/services', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  API Log
  Get this object properties
  **/
  public get(path: '/me/api/logs/services/{logId}', pathParams: {logId?: Number}, queryParams: null): Promise<ApiLog>;
  /**
  List the api.Log objects
  List of Api calls done with your account
  **/
  public get(path: '/me/api/logs/self', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  API Log
  Get this object properties
  **/
  public get(path: '/me/api/logs/self/{logId}', pathParams: {logId?: Number}, queryParams: null): Promise<ApiLog>;
  /**
  Get all certificates of the account
  Get all certificates of the account
  **/
  public get(path: '/me/certificates', pathParams: null, queryParams: {name?: string}): Promise<string[]>;
  /**
  Credit card informations
  Get this object properties
  **/
  public get(path: '/me/paymentMean/creditCard/{id}', pathParams: {id?: Number}, queryParams: null): Promise<BillingCreditCard>;
  /**
  List the billing.CreditCard objects
  List of credit cards
  **/
  public get(path: '/me/paymentMean/creditCard', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  List the billing.Paypal objects
  List of Paypal accounts usable for payments on this account
  **/
  public get(path: '/me/paymentMean/paypal', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Paypal account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/paypal/{id}', pathParams: {id?: Number}, queryParams: null): Promise<BillingPaypal>;
  /**
  List the billing.BankAccount objects
  List of bank accounts
  **/
  public get(path: '/me/paymentMean/bankAccount', pathParams: null, queryParams: {state?: BillingBankAccountStateEnum}): Promise<Number[]>;
  /**
  SEPA bank account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/bankAccount/{id}', pathParams: {id?: Number}, queryParams: null): Promise<BillingBankAccount>;
  /**
  List the billing.DeferredPaymentAccount objects
  List of authorized deferred payment account for this customer
  **/
  public get(path: '/me/paymentMean/deferredPaymentAccount', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Deferred payment account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/deferredPaymentAccount/{id}', pathParams: {id?: Number}, queryParams: null): Promise<BillingDeferredPaymentAccount>;
  /**
  Auto renewal information
  Get this object properties
  **/
  public get(path: '/me/autorenew', pathParams: null, queryParams: null): Promise<NichandleNicAutorenewInfos>;
  /**
  Balance of the fidelity account
  Get this object properties
  **/
  public get(path: '/me/fidelityAccount', pathParams: null, queryParams: null): Promise<BillingFidelityAccount>;
  /**
  List the billing.FidelityMovement objects
  List of entries of the fidelity account
  **/
  public get(path: '/me/fidelityAccount/movements', pathParams: null, queryParams: {'date.to'?: Date, 'date.from'?: Date}): Promise<Number[]>;
  /**
  Details about a fidelity account
  Get this object properties
  **/
  public get(path: '/me/fidelityAccount/movements/{movementId}', pathParams: {movementId?: Number}, queryParams: null): Promise<BillingFidelityMovement>;
  /**
  A user linked to this account
  Get this object properties
  **/
  public get(path: '/me/identity/user/{user}', pathParams: {user?: string}, queryParams: null): Promise<NichandleUser>;
  /**
  Users linked to this account
  Retrieve all users of this account
  **/
  public get(path: '/me/identity/user', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Groups linked to this account
  Retrieve all groups of this account
  **/
  public get(path: '/me/identity/group', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  A group linked to this account
  Get this object properties
  **/
  public get(path: '/me/identity/group/{group}', pathParams: {group?: string}, queryParams: null): Promise<NichandleAuthenticationGroup>;
  /**
  Domain operation progress
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}/progressbar', pathParams: {id?: Number}, queryParams: null): Promise<NichandleDomainTaskProgressBar>;
  /**
  Domain tasks
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleDomainTask>;
  /**
  Domain operation argument
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}/argument/{key}', pathParams: {id?: Number, key?: string}, queryParams: null): Promise<NichandleDomainTaskArgument>;
  /**
  List the nichandle.DomainTaskArgument objects
  List of arguments
  **/
  public get(path: '/me/task/domain/{id}/argument', pathParams: {id?: Number}, queryParams: null): Promise<string[]>;
  /**
  List the nichandle.DomainTask objects
  List of domain task
  **/
  public get(path: '/me/task/domain', pathParams: null, queryParams: {status?: DomainOperationStatusEnum, function?: DomainNicOperationFunctionEnum, domain?: string}): Promise<Number[]>;
  /**
  Task running an email change on an account
  Get this object properties
  **/
  public get(path: '/me/task/emailChange/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleEmailChangeTask>;
  /**
  List the nichandle.emailChange.Task objects
  List of email change tasks you are involved in
  **/
  public get(path: '/me/task/emailChange', pathParams: null, queryParams: {state?: NichandleChangeEmailTaskStateEnum}): Promise<Number[]>;
  /**
  List the nichandle.contactChange.Task objects
  List of service contact change tasks you are involved in
  **/
  public get(path: '/me/task/contactChange', pathParams: null, queryParams: {toAccount?: string, askingAccount?: string, state?: NichandleChangeContactTaskStateEnum}): Promise<Number[]>;
  /**
  Task running a contact change on a service
  Get this object properties
  **/
  public get(path: '/me/task/contactChange/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleContactChangeTask>;
  /**
  Retrieve your insight access token. This token give you access to all your products metrics (cloud instances, dedicated servers, load balancers, ...)
  Get your insight access token
  **/
  public get(path: '/me/insight', pathParams: null, queryParams: null): Promise<InsightAccess>;
  /**
  Details about your OVH identifier
  Get this object properties
  **/
  public get(path: '/me', pathParams: null, queryParams: null): Promise<NichandleNichandle>;
  /**
  Manage payment method transaction
  Get associated payment method transaction
  **/
  public get(path: '/me/payment/transaction/{transactionId}', pathParams: {transactionId?: Number}, queryParams: null): Promise<MePaymentMethodTransaction>;
  /**
  Retrieve payment method transaction ID list
  Retrieve associated payment method transaction ID list
  **/
  public get(path: '/me/payment/transaction', pathParams: null, queryParams: {paymentMethodId?: Number, status?: MePaymentMethodTransactionStatus}): Promise<Number[]>;
  /**
  Available payment methods
  Retrieve available payment method
  **/
  public get(path: '/me/payment/availableMethods', pathParams: null, queryParams: null): Promise<MePaymentMethodAvailablePaymentMethod[]>;
  /**
  Manage payment method
  Retrieve payment method ID list
  **/
  public get(path: '/me/payment/method', pathParams: null, queryParams: {status?: MePaymentMethodPaymentMethodStatus, paymentType?: string}): Promise<Number[]>;
  /**
  Manage payment method
  Get one payment method
  **/
  public get(path: '/me/payment/method/{paymentMethodId}', pathParams: {paymentMethodId?: Number}, queryParams: null): Promise<MePaymentMethodPaymentMethod>;
  /**
  Debt balance of the account
  Get this object properties
  **/
  public get(path: '/me/debtAccount', pathParams: null, queryParams: null): Promise<DebtBalance>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/debtAccount/debt/{debtId}', pathParams: {debtId?: Number}, queryParams: null): Promise<DebtDebt>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}', pathParams: {debtId?: Number, operationId?: Number}, queryParams: null): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject', pathParams: {debtId?: Number, operationId?: Number}, queryParams: null): Promise<DebtEntryAssociatedObject>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation', pathParams: {debtId?: Number}, queryParams: {depositOrderId?: Number}): Promise<Number[]>;
  /**
  List the debt.Debt objects
  All debts related to your account
  **/
  public get(path: '/me/debtAccount/debt', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Information about a Withdrawal entry
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}', pathParams: {withdrawalId?: string, withdrawalDetailId?: string}, queryParams: null): Promise<BillingWithdrawalDetail>;
  /**
  List the billing.WithdrawalDetail objects
  Give access to all entries of this withdrawal
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/details', pathParams: {withdrawalId?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/payment', pathParams: {withdrawalId?: string}, queryParams: null): Promise<BillingPayment>;
  /**
  Details about a withdrawal
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}', pathParams: {withdrawalId?: string}, queryParams: null): Promise<BillingWithdrawal>;
  /**
  List the billing.Withdrawal objects
  List of all the withdrawals made from your prepaid account
  **/
  public get(path: '/me/withdrawal', pathParams: null, queryParams: {'date.from'?: Date, orderId?: Number, 'date.to'?: Date}): Promise<string[]>;
  /**
  List of all OVH things you can subscribe to
  Get this object properties
  **/
  public get(path: '/me/subscription/{subscriptionType}', pathParams: {subscriptionType?: string}, queryParams: null): Promise<NichandleSubscription>;
  /**
  List the nichandle.Subscription objects
  List of all OVH things you can subscribe to
  **/
  public get(path: '/me/subscription', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  IP Restriction default rule
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/ipDefaultRule', pathParams: null, queryParams: null): Promise<NichandleIpRestrictionDefaultRule>;
  /**
  List the nichandle.accessRestriction.U2FAccount objects
  List of U2F accounts
  **/
  public get(path: '/me/accessRestriction/u2f', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  U2F Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/u2f/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleAccessRestrictionU2FAccount>;
  /**
  Sms Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/sms/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleAccessRestrictionSmsAccount>;
  /**
  List the nichandle.accessRestriction.SmsAccount objects
  List of Sms accounts
  **/
  public get(path: '/me/accessRestriction/sms', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  SOTP Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/backupCode', pathParams: null, queryParams: null): Promise<NichandleAccessRestrictionSOTPAccount>;
  /**
  Login restrictions on a development version of the Manager
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/developerMode', pathParams: null, queryParams: null): Promise<NichandleDeveloperModeRestriction>;
  /**
  TOTP Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/totp/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleAccessRestrictionTOTPAccount>;
  /**
  List the nichandle.accessRestriction.TOTPAccount objects
  List of TOTP accounts
  **/
  public get(path: '/me/accessRestriction/totp', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  List the nichandle.IpRestriction objects
  List of IP restrictions
  **/
  public get(path: '/me/accessRestriction/ip', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  List of all IP Restrictions
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/ip/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleIpRestriction>;
  /**
  List the billing.Order objects
  List of all the orders the logged account has
  **/
  public get(path: '/me/order', pathParams: null, queryParams: {'date.from'?: Date, 'date.to'?: Date}): Promise<Number[]>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/bill', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingBill>;
  /**
  status operations
  Return status of order
  **/
  public get(path: '/me/order/{orderId}/status', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingOrderOrderStatusEnum>;
  /**
  paymentMeans operations
  Return main data about the object the processing of the order generated
  **/
  public get(path: '/me/order/{orderId}/paymentMeans', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingOrderPaymentMeans>;
  /**
  associatedObject operations
  Return main data about the object the processing of the order generated
  **/
  public get(path: '/me/order/{orderId}/associatedObject', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingOrderAssociatedObject>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/order/{orderId}/debt/operation', pathParams: {orderId?: Number}, queryParams: {depositOrderId?: Number}): Promise<Number[]>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/order/{orderId}/debt/operation/{operationId}/associatedObject', pathParams: {orderId?: Number, operationId?: Number}, queryParams: null): Promise<DebtEntryAssociatedObject>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/debt/operation/{operationId}', pathParams: {orderId?: Number, operationId?: Number}, queryParams: null): Promise<DebtOperation>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/debt', pathParams: {orderId?: Number}, queryParams: null): Promise<DebtDebt>;
  /**
  Details about an Order
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingOrder>;
  /**
  availableRegisteredPaymentMean operations
  List of registered payment mean you can use to pay this order
  **/
  public get(path: '/me/order/{orderId}/availableRegisteredPaymentMean', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingOrderRegisteredPaymentMean[]>;
  /**
  paymentMethods operations
  List of registered payment method you can use to pay this order
  **/
  public get(path: '/me/order/{orderId}/paymentMethods', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingOrderPaymentMethods>;
  /**
  List the billing.OrderDetail objects
  Give access to all entries of the order
  **/
  public get(path: '/me/order/{orderId}/details', pathParams: {orderId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Extensions of a detail
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/details/{orderDetailId}/extension', pathParams: {orderId?: Number, orderDetailId?: Number}, queryParams: null): Promise<BillingItemDetail>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/details/{orderDetailId}', pathParams: {orderId?: Number, orderDetailId?: Number}, queryParams: null): Promise<BillingOrderDetail>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/payment', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingPayment>;
  /**
  Details about a Refund
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/refund', pathParams: {orderId?: Number}, queryParams: null): Promise<BillingRefund>;
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Get this object properties
  **/
  public get(path: '/me/sshKey/{keyName}', pathParams: {keyName?: string}, queryParams: null): Promise<NichandleSshKey>;
  /**
  List the nichandle.sshKey objects
  List of your public SSH keys
  **/
  public get(path: '/me/sshKey', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the billing.Refund objects
  List of all the refunds the logged account has
  **/
  public get(path: '/me/refund', pathParams: null, queryParams: {'date.to'?: Date, orderId?: Number, 'date.from'?: Date}): Promise<string[]>;
  /**
  Details about a Refund
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}', pathParams: {refundId?: string}, queryParams: null): Promise<BillingRefund>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}/payment', pathParams: {refundId?: string}, queryParams: null): Promise<BillingPayment>;
  /**
  List the billing.RefundDetail objects
  Give access to all entries of the refund
  **/
  public get(path: '/me/refund/{refundId}/details', pathParams: {refundId?: string}, queryParams: null): Promise<string[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}/details/{refundDetailId}', pathParams: {refundId?: string, refundDetailId?: string}, queryParams: null): Promise<BillingRefundDetail>;
  /**
  status operations
  Get the status request of this SLA
  **/
  public get(path: '/me/sla/{id}/status', pathParams: {id?: Number}, queryParams: null): Promise<string>;
  /**
  canBeApplied operations
  Check whether this SLA can be applied on your services
  **/
  public get(path: '/me/sla/{id}/canBeApplied', pathParams: {id?: Number}, queryParams: null): Promise<boolean>;
  /**
  SLA properties
  Get this object properties
  **/
  public get(path: '/me/sla/{id}', pathParams: {id?: Number}, queryParams: null): Promise<BillingSlaOperation>;
  /**
  services operations
  Get services impacted by this SLA
  **/
  public get(path: '/me/sla/{id}/services', pathParams: {id?: Number}, queryParams: null): Promise<BillingSlaOperationService[]>;
  /**
  List the billing.SlaOperation objects
  List active SLA
  **/
  public get(path: '/me/sla', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  List the nichandle.document.Document objects
  List of documents added in your account
  **/
  public get(path: '/me/document', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List of documents added on your account
  Get this object properties
  **/
  public get(path: '/me/document/{id}', pathParams: {id?: string}, queryParams: null): Promise<NichandleDocumentDocument>;
  /**
  Email notification
  Get this object properties
  **/
  public get(path: '/me/notification/email/history/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleEmailNotification>;
  /**
  List the nichandle.emailNotification objects
  List of all your email notifications
  **/
  public get(path: '/me/notification/email/history', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  List the billing.Bill objects
  List of all the bills the logged account has
  **/
  public get(path: '/me/bill', pathParams: null, queryParams: {'date.from'?: Date, orderId?: Number, 'date.to'?: Date}): Promise<string[]>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}', pathParams: {billId?: string}, queryParams: null): Promise<BillingBill>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/details/{billDetailId}', pathParams: {billId?: string, billDetailId?: string}, queryParams: null): Promise<BillingBillDetail>;
  /**
  List the billing.BillDetail objects
  Give access to all entries of the bill
  **/
  public get(path: '/me/bill/{billId}/details', pathParams: {billId?: string}, queryParams: null): Promise<string[]>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/debt', pathParams: {billId?: string}, queryParams: null): Promise<DebtDebt>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/debt/operation/{operationId}', pathParams: {billId?: string, operationId?: Number}, queryParams: null): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/bill/{billId}/debt/operation/{operationId}/associatedObject', pathParams: {billId?: string, operationId?: Number}, queryParams: null): Promise<DebtEntryAssociatedObject>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/bill/{billId}/debt/operation', pathParams: {billId?: string}, queryParams: {depositOrderId?: Number}): Promise<Number[]>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/payment', pathParams: {billId?: string}, queryParams: null): Promise<BillingPayment>;
  /**
  availableAutomaticPaymentMeans operations
  List available payment methods in this Nic's country
  **/
  public get(path: '/me/availableAutomaticPaymentMeans', pathParams: null, queryParams: null): Promise<BillingAutomaticPaymentMean>;
  /**
  Customer IPXE scripts
  Get this object properties
  **/
  public get(path: '/me/ipxeScript/{name}', pathParams: {name?: string}, queryParams: null): Promise<NichandleIpxe>;
  /**
  List the nichandle.ipxe objects
  List of all your IPXE scripts
  **/
  public get(path: '/me/ipxeScript', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  vipStatus operations
  VIP Status of this account
  **/
  public get(path: '/me/vipStatus', pathParams: null, queryParams: null): Promise<NichandleVipStatus>;
  /**
  List the billing.Deposit objects
  List of all the deposits made to your prepaid account or debt account
  **/
  public get(path: '/me/deposit', pathParams: null, queryParams: {orderId?: Number, 'date.from'?: Date, 'date.to'?: Date}): Promise<string[]>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/payment', pathParams: {depositId?: string}, queryParams: null): Promise<BillingPayment>;
  /**
  List the billing.DepositDetail objects
  Give access to all entries of this deposit
  **/
  public get(path: '/me/deposit/{depositId}/details', pathParams: {depositId?: string}, queryParams: null): Promise<string[]>;
  /**
  Information about a Deposit entry
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/details/{depositDetailId}', pathParams: {depositId?: string, depositDetailId?: string}, queryParams: null): Promise<BillingDepositDetail>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}', pathParams: {depositId?: string, billId?: string, billDetailId?: string}, queryParams: null): Promise<BillingBillDetail>;
  /**
  List the billing.BillDetail objects
  Give access to all entries of the bill
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/details', pathParams: {depositId?: string, billId?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/payment', pathParams: {depositId?: string, billId?: string}, queryParams: null): Promise<BillingPayment>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt', pathParams: {depositId?: string, billId?: string}, queryParams: null): Promise<DebtDebt>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject', pathParams: {depositId?: string, billId?: string, operationId?: Number}, queryParams: null): Promise<DebtEntryAssociatedObject>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}', pathParams: {depositId?: string, billId?: string, operationId?: Number}, queryParams: null): Promise<DebtOperation>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation', pathParams: {depositId?: string, billId?: string}, queryParams: {depositOrderId?: Number}): Promise<Number[]>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}', pathParams: {depositId?: string, billId?: string}, queryParams: null): Promise<BillingBill>;
  /**
  List the billing.Bill objects
  Get invoices paid by this deposit
  **/
  public get(path: '/me/deposit/{depositId}/paidBills', pathParams: {depositId?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a deposit
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}', pathParams: {depositId?: string}, queryParams: null): Promise<BillingDeposit>;
  /**
  List the billing.OvhAccount objects
  List of OVH accounts the logged account has
  **/
  public get(path: '/me/ovhAccount', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about an OVH account
  Get this object properties
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}', pathParams: {ovhAccountId?: string}, queryParams: null): Promise<BillingOvhAccount>;
  /**
  List the billing.Movement objects
  Details about an entry of the OVH account
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}/movements', pathParams: {ovhAccountId?: string}, queryParams: {'date.from'?: Date, 'date.to'?: Date}): Promise<Number[]>;
  /**
  Details about an OVH account
  Get this object properties
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}/movements/{movementId}', pathParams: {ovhAccountId?: string, movementId?: Number}, queryParams: null): Promise<BillingMovement>;
  /**
  List the telephony.DefaultIpRestriction objects
  The default SIP IP restictions for your future VoIP lines
  **/
  public get(path: '/me/telephony/defaultIpRestriction', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Default IP restriction of a VoIP line
  Get this object properties
  **/
  public get(path: '/me/telephony/defaultIpRestriction/{id}', pathParams: {id?: Number}, queryParams: null): Promise<TelephonyDefaultIpRestriction>;
  /**
  settings operations
  Get the telephony settings linked to the customer account
  **/
  public get(path: '/me/telephony/settings', pathParams: null, queryParams: null): Promise<TelephonySettings>;
  /**
  Missing description
  Display mandatory/read-only informations of a contact
  **/
  public get(path: '/me/contact/{contactId}/fields', pathParams: {contactId?: Number}, queryParams: null): Promise<ContactFieldInformation[]>;
  /**
  Missing description
  Retrieve information about a contact
  **/
  public get(path: '/me/contact/{contactId}', pathParams: {contactId?: Number}, queryParams: null): Promise<ContactContact>;
  /**
  Missing description
  Retrieve all contact that you created
  **/
  public get(path: '/me/contact', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  setting operations
  Get xdsl settings linked to the nichandle
  **/
  public get(path: '/me/xdsl/setting', pathParams: null, queryParams: null): Promise<XdslSetting>;
  /**
  List the telephony.MailDomain2Service objects
  Get the fax custom domains linked to the customer account
  **/
  public get(path: '/me/fax/customDomains', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Custom domains of your fax services
  Get this object properties
  **/
  public get(path: '/me/fax/customDomains/{id}', pathParams: {id?: Number}, queryParams: null): Promise<TelephonyMailDomain2Service>;
  /**
  Retrieve a specific movement for a credit balance
  Retrieve a specific movement for a credit balance
  **/
  public get(path: '/me/credit/balance/{balanceName}/movement/{movementId}', pathParams: {balanceName?: string, movementId?: Number}, queryParams: null): Promise<BillingCreditBalanceMovement>;
  /**
  Retrieve movements for a specific balance
  Retrieve movements for a specific balance
  **/
  public get(path: '/me/credit/balance/{balanceName}/movement', pathParams: {balanceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Retrieve a credit balance
  Retrieve a credit balance
  **/
  public get(path: '/me/credit/balance/{balanceName}', pathParams: {balanceName?: string}, queryParams: null): Promise<BillingCreditBalance>;
  /**
  Retrieve credit balance names
  Retrieve credit balance names
  **/
  public get(path: '/me/credit/balance', pathParams: null, queryParams: {type?: BillingCreditBalanceType}): Promise<string[]>;
  /**
  Sub Account
  Get this object properties
  **/
  public get(path: '/me/subAccount/{id}', pathParams: {id?: Number}, queryParams: null): Promise<NichandleSubAccount>;
  /**
  List the nichandle.SubAccount objects
  List of sub-accounts
  **/
  public get(path: '/me/subAccount', pathParams: null, queryParams: null): Promise<Number[]>;
  /**
  Missing description
  Get list of transactions between two dates
  **/
  public get(path: '/me/consumption/usage/history', pathParams: null, queryParams: {beginDate?: Date, endDate?: Date}): Promise<MeConsumptionTransaction[]>;
  /**
  Missing description
  Get forecasted consumptions for all services
  **/
  public get(path: '/me/consumption/usage/forecast', pathParams: null, queryParams: null): Promise<MeConsumptionTransaction[]>;
  /**
  Missing description
  Get on-going consumptions for all services
  **/
  public get(path: '/me/consumption/usage/current', pathParams: null, queryParams: null): Promise<MeConsumptionTransaction[]>;
  /**
  Details about an IP block organisation
  Get this object properties
  **/
  public get(path: '/me/ipOrganisation/{organisationId}', pathParams: {organisationId?: string}, queryParams: null): Promise<NichandleIpv4Org>;
  /**
  List the nichandle.Ipv4Org objects
  List of organisations
  **/
  public get(path: '/me/ipOrganisation', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsmeGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Get decision value for a consent campaign
  Update decision of a consent campaign
  **/
  public put(path: '/me/consent/{campaignName}/decision', pathParams: {campaignName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Available installation templates
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}', pathParams: {templateName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Partitioning schemes available on this template
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', pathParams: {templateName?: string, schemeName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Hardware RAID defined in this partitioning scheme
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', pathParams: {templateName?: string, schemeName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
   Partitions defined in this partitioning scheme
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', pathParams: {templateName?: string, schemeName?: string, mountpoint?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Credit card informations
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/creditCard/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Paypal account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/paypal/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SEPA bank account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/bankAccount/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Deferred payment account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/deferredPaymentAccount/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Auto renewal information
  Alter this object properties
  **/
  public put(path: '/me/autorenew', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Balance of the fidelity account
  Alter this object properties
  **/
  public put(path: '/me/fidelityAccount', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  A user linked to this account
  Alter a user
  **/
  public put(path: '/me/identity/user/{user}', pathParams: {user?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  A group linked to this account
  Alter a group
  **/
  public put(path: '/me/identity/group/{group}', pathParams: {group?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Domain operation argument
  Alter this object properties
  **/
  public put(path: '/me/task/domain/{id}/argument/{key}', pathParams: {id?: Number, key?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about your OVH identifier
  Alter this object properties
  **/
  public put(path: '/me', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Manage payment method
  Edit payment method
  **/
  public put(path: '/me/payment/method/{paymentMethodId}', pathParams: {paymentMethodId?: Number}, queryParams: null, bodyParams: null): Promise<BillingPaymentMethod>;
  /**
  List of all OVH things you can subscribe to
  Alter this object properties
  **/
  public put(path: '/me/subscription/{subscriptionType}', pathParams: {subscriptionType?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  IP Restriction default rule
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/ipDefaultRule', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  U2F Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/u2f/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/sms/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Login restrictions on a development version of the Manager
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/developerMode', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  TOTP Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/totp/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List of all IP Restrictions
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/ip/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Alter this object properties
  **/
  public put(path: '/me/sshKey/{keyName}', pathParams: {keyName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List of documents added on your account
  Alter this object properties
  **/
  public put(path: '/me/document/{id}', pathParams: {id?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about an OVH account
  Alter this object properties
  **/
  public put(path: '/me/ovhAccount/{ovhAccountId}', pathParams: {ovhAccountId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Update an existing contact
  **/
  public put(path: '/me/contact/{contactId}', pathParams: {contactId?: Number}, queryParams: null, bodyParams: null): Promise<ContactContact>;
  /**
  Sub Account
  Alter this object properties
  **/
  public put(path: '/me/subAccount/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about an IP block organisation
  Alter this object properties
  **/
  public put(path: '/me/ipOrganisation/{organisationId}', pathParams: {organisationId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsmePUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  invoicesByPostalMail operations
  Enable or disable invoices by postal mail
  **/
  public post(path: '/me/billing/invoicesByPostalMail', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  subscribe operations
  Subscribe an email to a restricted mailing list
  **/
  public post(path: '/me/mailingList/subscribe', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  accept operations
  Accept this contract
  **/
  public post(path: '/me/agreements/{id}/accept', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the dedicated.installationTemplate.Templates objects
  Create a template
  **/
  public post(path: '/me/installationTemplate', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  checkIntegrity operations
  Check the integrity of this template
  **/
  public post(path: '/me/installationTemplate/{templateName}/checkIntegrity', pathParams: {templateName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the dedicated.installationTemplate.templatePartitioningSchemes objects
  Add a scheme of partition
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme', pathParams: {templateName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the dedicated.installationTemplate.hardwareRaid objects
  Add an hardware RAID in this partitioning scheme
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', pathParams: {templateName?: string, schemeName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the dedicated.installationTemplate.templatePartitions objects
  Add a partition in this partitioning scheme
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', pathParams: {templateName?: string, schemeName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this credit card as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the billing.CreditCard objects
  Add a new credit card
  **/
  public post(path: '/me/paymentMean/creditCard', pathParams: null, queryParams: null, bodyParams: null): Promise<BillingPaymentMeanValidation>;
  /**
  List the billing.Paypal objects
  Enable payment through a new PayPal account
  **/
  public post(path: '/me/paymentMean/paypal', pathParams: null, queryParams: null, bodyParams: null): Promise<BillingPaymentMeanValidation>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the billing.BankAccount objects
  Enable payment through a new account
  **/
  public post(path: '/me/paymentMean/bankAccount', pathParams: null, queryParams: null, bodyParams: null): Promise<BillingPaymentMeanValidation>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this bank account as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  chooseAsDefaultPaymentMean operations
  Allow you to use deferred payment. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  checkValidity operations
  Verify existing voucher
  **/
  public post(path: '/me/voucher/checkValidity', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleVoucherStatus>;
  /**
  Auto renewal information
  Activate auto renew for this nic
  **/
  public post(path: '/me/autorenew', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  creditOrder operations
  Generate an order that can be paid in order to credit the fidelity account
  **/
  public post(path: '/me/fidelityAccount/creditOrder', pathParams: null, queryParams: null, bodyParams: null): Promise<BillingOrder>;
  /**
  A user linked to this account
  Enable this user
  **/
  public post(path: '/me/identity/user/{user}/enable', pathParams: {user?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  A user linked to this account
  Disable this user
  **/
  public post(path: '/me/identity/user/{user}/disable', pathParams: {user?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Users linked to this account
  Create a new user
  **/
  public post(path: '/me/identity/user', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Groups linked to this account
  Create a new group
  **/
  public post(path: '/me/identity/group', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleAuthenticationGroup>;
  /**
  accelerate operations
  Accelerate the task
  **/
  public post(path: '/me/task/domain/{id}/accelerate', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  relaunch operations
  Relaunch the task
  **/
  public post(path: '/me/task/domain/{id}/relaunch', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  cancel operations
  Cancel the task
  **/
  public post(path: '/me/task/domain/{id}/cancel', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  accept operations
  Accept this change request
  **/
  public post(path: '/me/task/emailChange/{id}/accept', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  refuse operations
  Refuse this change request
  **/
  public post(path: '/me/task/emailChange/{id}/refuse', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  refuse operations
  Refuse this change request
  **/
  public post(path: '/me/task/contactChange/{id}/refuse', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  resendEmail operations
  This call will send you a new email, containing a new token
  **/
  public post(path: '/me/task/contactChange/{id}/resendEmail', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  accept operations
  Accept this change request
  **/
  public post(path: '/me/task/contactChange/{id}/accept', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Manage payment method
  Pay an order and register a new payment method if necessary
  **/
  public post(path: '/me/payment/method', pathParams: null, queryParams: null, bodyParams: null): Promise<MePaymentMethodRegisterValidationResult>;
  /**
  Finalize one payment method registration
  Finalize one payment method registration
  **/
  public post(path: '/me/payment/method/{paymentMethodId}/finalize', pathParams: {paymentMethodId?: Number}, queryParams: null, bodyParams: null): Promise<MePaymentMethodPaymentMethod>;
  /**
  changeEmail operations
  Initiate an email change procedure
  **/
  public post(path: '/me/changeEmail', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleEmailChangeTask>;
  /**
  pay operations
  Create an order in order to pay all your due debts
  **/
  public post(path: '/me/debtAccount/pay', pathParams: null, queryParams: null, bodyParams: null): Promise<BillingOrder>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/debtAccount/debt/{debtId}/pay', pathParams: {debtId?: Number}, queryParams: null, bodyParams: null): Promise<BillingOrder>;
  /**
  Request a password recover
  Request a password recover
  **/
  public post(path: '/me/passwordRecover', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the nichandle.accessRestriction.U2FAccount objects
  Add a U2F access restriction
  **/
  public post(path: '/me/accessRestriction/u2f', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleAccessRestrictionU2FRegisterChallenge>;
  /**
  challenge operations
  Get an U2F Challenge
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/challenge', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<NichandleAccessRestrictionU2FSignChallenge>;
  /**
  validate operations
  Validate your U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/validate', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  disable operations
  Disable this U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/disable', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  enable operations
  Enable this U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/enable', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  enable operations
  Enable this SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/enable', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  sendCode operations
  Send a SMS to this account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/sendCode', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<NichandleAccessRestrictionSmsCode>;
  /**
  validate operations
  Validate your SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/validate', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  disable operations
  Disable this SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/disable', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the nichandle.accessRestriction.SmsAccount objects
  Add a SMS access restriction
  **/
  public post(path: '/me/accessRestriction/sms', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleAccessRestrictionSmsSecret>;
  /**
  disable operations
  Disable this SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/disable', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  validate operations
  Validate your SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/validate', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleAccessRestrictionSOTPValidate>;
  /**
  enable operations
  Enable this SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/enable', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SOTP Two-Factor Authentication
  Add a SOTP access restriction
  **/
  public post(path: '/me/accessRestriction/backupCode', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleAccessRestrictionSOTPSecret>;
  /**
  disable operations
  Disable this TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/disable', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  validate operations
  Validate your TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/validate', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  enable operations
  Enable this TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/enable', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the nichandle.accessRestriction.TOTPAccount objects
  Add a TOTP access restriction
  **/
  public post(path: '/me/accessRestriction/totp', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleAccessRestrictionTOTPSecret>;
  /**
  List the nichandle.IpRestriction objects
  Add an IP access restriction
  **/
  public post(path: '/me/accessRestriction/ip', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/order/{orderId}/debt/pay', pathParams: {orderId?: Number}, queryParams: null, bodyParams: null): Promise<BillingOrder>;
  /**
  pay operations
  Pay with a payment method reference
  **/
  public post(path: '/me/order/{orderId}/pay', pathParams: {orderId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  payWithRegisteredPaymentMean operations
  Pay with an already registered payment mean
  **/
  public post(path: '/me/order/{orderId}/payWithRegisteredPaymentMean', pathParams: {orderId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  retraction operations
  Request retraction of order
  **/
  public post(path: '/me/order/{orderId}/retraction', pathParams: {orderId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the nichandle.sshKey objects
  Add a new public SSH key
  **/
  public post(path: '/me/sshKey', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  apply operations
  Ask for SLA application
  **/
  public post(path: '/me/sla/{id}/apply', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Add CORS support on your container
  Add CORS support on your container
  **/
  public post(path: '/me/document/cors', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the nichandle.document.Document objects
  Create new document
  **/
  public post(path: '/me/document', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleDocumentDocument>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/bill/{billId}/debt/pay', pathParams: {billId?: string}, queryParams: null, bodyParams: null): Promise<BillingOrder>;
  /**
  List the nichandle.ipxe objects
  Add an IPXE script
  **/
  public post(path: '/me/ipxeScript', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleIpxe>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/pay', pathParams: {depositId?: string, billId?: string}, queryParams: null, bodyParams: null): Promise<BillingOrder>;
  /**
  creditOrder operations
  Generate an order that can be paid in order to credit the OVH account
  **/
  public post(path: '/me/ovhAccount/{ovhAccountId}/creditOrder', pathParams: {ovhAccountId?: string}, queryParams: null, bodyParams: null): Promise<BillingOrder>;
  /**
  retrieveMoney operations
  Transfer money from ovhAccount to your bank account
  **/
  public post(path: '/me/ovhAccount/{ovhAccountId}/retrieveMoney', pathParams: {ovhAccountId?: string}, queryParams: null, bodyParams: null): Promise<BillingOrder>;
  /**
  List the telephony.DefaultIpRestriction objects
  Create a default IP restriction for your future VoIP lines
  **/
  public post(path: '/me/telephony/defaultIpRestriction', pathParams: null, queryParams: null, bodyParams: null): Promise<TelephonyDefaultIpRestriction>;
  /**
  settings operations
  Change the telephony settings linked to the customer account
  **/
  public post(path: '/me/telephony/settings', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Create a new contact
  **/
  public post(path: '/me/contact', pathParams: null, queryParams: null, bodyParams: null): Promise<ContactContact>;
  /**
  changePassword operations
  Initiate a password change procedure
  **/
  public post(path: '/me/changePassword', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Route for getting visitor's country and continent
  Fetch visitor country & region
  **/
  public post(path: '/me/geolocation', pathParams: null, queryParams: null, bodyParams: null): Promise<GeolocationContinentCountryLocation>;
  /**
  setting operations
  Change xdsl settings linked to the nichandle
  **/
  public post(path: '/me/xdsl/setting', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the telephony.MailDomain2Service objects
  Create a custom domain for your fax services
  **/
  public post(path: '/me/fax/customDomains', pathParams: null, queryParams: null, bodyParams: null): Promise<TelephonyMailDomain2Service>;
  /**
  Validate a code to generate associated credit
  Validate a code to generate associated credit movement
  **/
  public post(path: '/me/credit/code', pathParams: null, queryParams: null, bodyParams: null): Promise<BillingCreditBalanceMovement>;
  /**
  createConsumerKey operations
  Create a consumer key for the current application
  **/
  public post(path: '/me/subAccount/{id}/createConsumerKey', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<NichandleSubAccountConsumerKey>;
  /**
  List the nichandle.SubAccount objects
  Create a new sub-account
  **/
  public post(path: '/me/subAccount', pathParams: null, queryParams: null, bodyParams: null): Promise<Number>;
  /**
  List the nichandle.Ipv4Org objects
  Add an organisation
  **/
  public post(path: '/me/ipOrganisation', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  public post(path: PathsmePOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Available installation templates
  remove this template
  **/
  public delete(path: '/me/installationTemplate/{templateName}', pathParams: {templateName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Partitioning schemes available on this template
  remove this scheme of partition
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', pathParams: {templateName?: string, schemeName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Hardware RAID defined in this partitioning scheme
  Remove this RAID
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', pathParams: {templateName?: string, schemeName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
   Partitions defined in this partitioning scheme
  remove this partition
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', pathParams: {templateName?: string, schemeName?: string, mountpoint?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  API Credential
  Remove this credential
  **/
  public delete(path: '/me/api/credential/{credentialId}', pathParams: {credentialId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  API Application
  Remove this application. It will revoke all credential belonging to this application.
  **/
  public delete(path: '/me/api/application/{applicationId}', pathParams: {applicationId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Credit card informations
  Disable payment through this credit card
  **/
  public delete(path: '/me/paymentMean/creditCard/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Paypal account info
  Disable payment through this PayPal account
  **/
  public delete(path: '/me/paymentMean/paypal/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SEPA bank account info
  Disable payment through this account
  **/
  public delete(path: '/me/paymentMean/bankAccount/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  A user linked to this account
  Delete this object
  **/
  public delete(path: '/me/identity/user/{user}', pathParams: {user?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  A group linked to this account
  Delete this object
  **/
  public delete(path: '/me/identity/group/{group}', pathParams: {group?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Manage payment method
  Cancel one payment method
  **/
  public delete(path: '/me/payment/method/{paymentMethodId}', pathParams: {paymentMethodId?: Number}, queryParams: null, bodyParams: null): Promise<MePaymentMethodPaymentMethod>;
  /**
  U2F Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/u2f/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Sms Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/sms/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  SOTP Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/backupCode', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  /**
  TOTP Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/totp/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List of all IP Restrictions
  Delete this restriction rule
  **/
  public delete(path: '/me/accessRestriction/ip/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Remove this public SSH key
  **/
  public delete(path: '/me/sshKey/{keyName}', pathParams: {keyName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List of documents added on your account
  Delete a document
  **/
  public delete(path: '/me/document/{id}', pathParams: {id?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Customer IPXE scripts
  Remove this IPXE Script
  **/
  public delete(path: '/me/ipxeScript/{name}', pathParams: {name?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Default IP restriction of a VoIP line
  Delete a default IP restriction for your future VoIP lines
  **/
  public delete(path: '/me/telephony/defaultIpRestriction/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Custom domains of your fax services
  Delete a custom domain of your fax services
  **/
  public delete(path: '/me/fax/customDomains/{id}', pathParams: {id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about an IP block organisation
  Delete this organisation
  **/
  public delete(path: '/me/ipOrganisation/{organisationId}', pathParams: {organisationId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathsmeDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

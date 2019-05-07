import { ApiCommon } from '@ovh-api/common';
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
/**
 * Describe all rules for a given field
 */
export interface NichandleCreationRule {
  /**
   * Default value of the field
   *
   */
  defaultValue?: string;
  /**
   * Examples of values for the fields
   *
   */
  examples?: string[];
  /**
   * Name of the field
   *
   */
  fieldName?: string;
  /**
   * List of allowed values for the field
   *
   */
  in?: string[];
  /**
   * Whether the field is mandatory
   *
   */
  mandatory?: boolean;
  /**
   * Prefix of the field value
   *
   */
  prefix?: string;
  /**
   * Regular expression to validate the field value
   *
   */
  regularExpression?: string;
}
/**
 * Describe rules foreach field in order to create a nic
 */
export interface NichandleCreationRules {
  /**
   */
  address?: NichandleCreationRule;
  /**
   */
  area?: NichandleCreationRule;
  /**
   */
  birthCity?: NichandleCreationRule;
  /**
   */
  birthDay?: NichandleCreationRule;
  /**
   */
  city?: NichandleCreationRule;
  /**
   */
  companyNationalIdentificationNumber?: NichandleCreationRule;
  /**
   */
  corporationType?: NichandleCreationRule;
  /**
   */
  country?: NichandleCreationRule;
  /**
   */
  email?: NichandleCreationRule;
  /**
   */
  fax?: NichandleCreationRule;
  /**
   */
  firstname?: NichandleCreationRule;
  /**
   */
  language?: NichandleCreationRule;
  /**
   */
  legalform?: NichandleCreationRule;
  /**
   */
  name?: NichandleCreationRule;
  /**
   */
  nationalIdentificationNumber?: NichandleCreationRule;
  /**
   */
  organisation?: NichandleCreationRule;
  /**
   */
  ovhCompany?: NichandleCreationRule;
  /**
   */
  ovhSubsidiary?: NichandleCreationRule;
  /**
   */
  phone?: NichandleCreationRule;
  /**
   */
  phoneCountry?: NichandleCreationRule;
  /**
   */
  sex?: NichandleCreationRule;
  /**
   */
  spareEmail?: NichandleCreationRule;
  /**
   */
  vat?: NichandleCreationRule;
  /**
   */
  zip?: NichandleCreationRule;
}
/**
 * Action a nichandle can perform on his account.
 */
export type NichandleCreationRulesActionEnum = 'create' | 'update';
/**
 * All genders a person can choose
 */
export type NichandleGenderEnum = 'female' | 'male';
/**
 * Languages a nichandle can choose
 */
export type NichandleLanguageEnum = 'cs_CZ' | 'de_DE' | 'en_AU' | 'en_CA' | 'en_GB' | 'en_IE' | 'en_US' | 'es_ES' | 'fi_FI' | 'fr_CA' | 'fr_FR' | 'fr_MA' | 'fr_SN' | 'fr_TN' | 'it_IT' | 'lt_LT' | 'nl_NL' | 'pl_PL' | 'pt_PT';
/**
 * Legal forms a nichandle can be registered as
 */
export type NichandleLegalFormEnum = 'administration' | 'association' | 'corporation' | 'individual' | 'other' | 'personalcorporation';
/**
 * Newly created OVH identifier and a login token for the API
 */
export interface NichandleNewAccountAndToken {
  /**
   */
  consumerKey?: string;
  /**
   */
  ovhIdentifier?: string;
}
/**
 * OVH subsidiaries
 */
export type NichandleOvhCompanyEnum = 'kimsufi' | 'ovh' | 'soyoustart';
/**
 * OVH subsidiaries
 */
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
/**
 * A contract
 */
export interface OrderContract {
  /**
   */
  content?: string;
  /**
   */
  name?: string;
  /**
   */
  url?: string;
}
type PathsNewAccountGET = '/newAccount/area' | 
'/newAccount/contracts' | 
'/newAccount/corporationType' | 
'/newAccount/countries' | 
'/newAccount/creationRules' | 
'/newAccount/legalform';

type PathsNewAccountPOST = '/newAccount' | 
'/newAccount/rules';

export class ApiNewAccount extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  All available areas for a given country
  All available areas for a given country
  **/
  public get(path: '/newAccount/area', queryParams?: {country?: NichandleCountryEnum}): Promise<string[]>;
  /**
  Returns the contracts that governs the creation of an OVH identifier
  Returns the contracts that governs the creation of an OVH identifier
  **/
  public get(path: '/newAccount/contracts', queryParams?: {company?: NichandleOvhCompanyEnum, subsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderContract[]>;
  /**
  All available corporation types for a given country
  All available corporation types for a given country
  **/
  public get(path: '/newAccount/corporationType', queryParams?: {country?: NichandleCountryEnum}): Promise<string[]>;
  /**
  All available countries for an ovh company and an ovh subsidiary
  All available countries for an ovh company and an ovh subsidiary
  **/
  public get(path: '/newAccount/countries', queryParams?: {ovhCompany?: NichandleOvhCompanyEnum, ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<NichandleCountryEnum[]>;
  /**
  Give all the rules to follow in order to create an OVH identifier
  Give all the rules to follow in order to create an OVH identifier
  **/
  public get(path: '/newAccount/creationRules', queryParams?: {country?: NichandleCountryEnum, legalform?: NichandleLegalFormEnum, ovhCompany?: NichandleOvhCompanyEnum, ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<NichandleCreationRules>;
  /**
  All available legal forms for a given country
  All available legal forms for a given country
  **/
  public get(path: '/newAccount/legalform', queryParams?: {country?: NichandleCountryEnum}): Promise<string[]>;
  public get(path: PathsNewAccountGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Create a new OVH identifier
  Create a new OVH identifier
  **/
  public post(path: '/newAccount'): Promise<NichandleNewAccountAndToken>;
  /**
  Give all the rules to follow in order to create and update an OVH identifier
  Give all the rules to follow in order to create and update an OVH identifier
  **/
  public post(path: '/newAccount/rules'): Promise<NichandleCreationRule[]>;
  public post(path: PathsNewAccountPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
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
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
/**
 * Describe all rules for a given field
 */
export interface NichandleCreationRule {
  /**
   * Name of the field
   *
   */
  fieldName?: string;
  /**
   * Examples of values for the fields
   *
   */
  examples?: string[];
  /**
   * List of allowed values for the field
   *
   */
  in?: string[];
  /**
   * Regular expression to validate the field value
   *
   */
  regularExpression?: string;
  /**
   * Default value of the field
   *
   */
  defaultValue?: string;
  /**
   * Prefix of the field value
   *
   */
  prefix?: string;
  /**
   * Whether the field is mandatory
   *
   */
  mandatory?: boolean;
}
/**
 * Languages a nichandle can choose
 */
export type NichandleLanguageEnum = 'cs_CZ' | 'de_DE' | 'en_AU' | 'en_CA' | 'en_GB' | 'en_IE' | 'en_US' | 'es_ES' | 'fi_FI' | 'fr_CA' | 'fr_FR' | 'fr_MA' | 'fr_SN' | 'fr_TN' | 'it_IT' | 'lt_LT' | 'nl_NL' | 'pl_PL' | 'pt_PT';
/**
 * OVH subsidiaries
 */
export type NichandleOvhCompanyEnum = 'kimsufi' | 'ovh' | 'soyoustart';
/**
 * Describe rules foreach field in order to create a nic
 */
export interface NichandleCreationRules {
  /**
   */
  area?: NichandleCreationRule;
  /**
   */
  zip?: NichandleCreationRule;
  /**
   */
  ovhCompany?: NichandleCreationRule;
  /**
   */
  birthDay?: NichandleCreationRule;
  /**
   */
  country?: NichandleCreationRule;
  /**
   */
  legalform?: NichandleCreationRule;
  /**
   */
  firstname?: NichandleCreationRule;
  /**
   */
  address?: NichandleCreationRule;
  /**
   */
  city?: NichandleCreationRule;
  /**
   */
  sex?: NichandleCreationRule;
  /**
   */
  vat?: NichandleCreationRule;
  /**
   */
  organisation?: NichandleCreationRule;
  /**
   */
  companyNationalIdentificationNumber?: NichandleCreationRule;
  /**
   */
  language?: NichandleCreationRule;
  /**
   */
  birthCity?: NichandleCreationRule;
  /**
   */
  phoneCountry?: NichandleCreationRule;
  /**
   */
  phone?: NichandleCreationRule;
  /**
   */
  name?: NichandleCreationRule;
  /**
   */
  spareEmail?: NichandleCreationRule;
  /**
   */
  corporationType?: NichandleCreationRule;
  /**
   */
  fax?: NichandleCreationRule;
  /**
   */
  email?: NichandleCreationRule;
  /**
   */
  ovhSubsidiary?: NichandleCreationRule;
  /**
   */
  nationalIdentificationNumber?: NichandleCreationRule;
}
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
/**
 * Action a nichandle can perform on his account.
 */
export type NichandleCreationRulesActionEnum = 'create' | 'update';
/**
 * All genders a person can choose
 */
export type NichandleGenderEnum = 'female' | 'male';
/**
 * Legal forms a nichandle can be registered as
 */
export type NichandleLegalFormEnum = 'administration' | 'association' | 'corporation' | 'individual' | 'other' | 'personalcorporation';
type PathsnewAccountGET = '/newAccount/legalform' | 
'/newAccount/creationRules' | 
'/newAccount/area' | 
'/newAccount/contracts' | 
'/newAccount/countries' | 
'/newAccount/corporationType';

type PathsnewAccountPOST = '/newAccount/rules' | 
'/newAccount';

class ApinewAccount extends ApiCommon {
  /**
  All available legal forms for a given country
  All available legal forms for a given country
  **/
  public get(path: '/newAccount/legalform', pathParams: null, queryParams: {country?: NichandleCountryEnum}): Promise<string[]>;
  /**
  Give all the rules to follow in order to create an OVH identifier
  Give all the rules to follow in order to create an OVH identifier
  **/
  public get(path: '/newAccount/creationRules', pathParams: null, queryParams: {country?: NichandleCountryEnum, ovhCompany?: NichandleOvhCompanyEnum, ovhSubsidiary?: NichandleOvhSubsidiaryEnum, legalform?: NichandleLegalFormEnum}): Promise<NichandleCreationRules>;
  /**
  All available areas for a given country
  All available areas for a given country
  **/
  public get(path: '/newAccount/area', pathParams: null, queryParams: {country?: NichandleCountryEnum}): Promise<string[]>;
  /**
  Returns the contracts that governs the creation of an OVH identifier
  Returns the contracts that governs the creation of an OVH identifier
  **/
  public get(path: '/newAccount/contracts', pathParams: null, queryParams: {subsidiary?: NichandleOvhSubsidiaryEnum, company?: NichandleOvhCompanyEnum}): Promise<OrderContract[]>;
  /**
  All available countries for an ovh company and an ovh subsidiary
  All available countries for an ovh company and an ovh subsidiary
  **/
  public get(path: '/newAccount/countries', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum, ovhCompany?: NichandleOvhCompanyEnum}): Promise<NichandleCountryEnum[]>;
  /**
  All available corporation types for a given country
  All available corporation types for a given country
  **/
  public get(path: '/newAccount/corporationType', pathParams: null, queryParams: {country?: NichandleCountryEnum}): Promise<string[]>;
  public get(path: PathsnewAccountGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Give all the rules to follow in order to create and update an OVH identifier
  Give all the rules to follow in order to create and update an OVH identifier
  **/
  public post(path: '/newAccount/rules', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleCreationRule[]>;
  /**
  Create a new OVH identifier
  Create a new OVH identifier
  **/
  public post(path: '/newAccount', pathParams: null, queryParams: null, bodyParams: null): Promise<NichandleNewAccountAndToken>;
  public post(path: PathsnewAccountPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}

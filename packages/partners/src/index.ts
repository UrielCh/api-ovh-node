import { ApiCommon } from '@ovh-api/common';
/**
 * Partner Application
 */
export interface PartnerApplication {
  /**
   * You are eligible for the OVH Services Program Partners (OSPP) with the following tiering level
   *
   */
  tieringLevel?: string;
}
/**
 * Partner company
 */
export interface PartnerCompany {
  /**
   * Company's zipCode
   *
   */
  zipCode?: string;
  /**
   * Company's domain of competence
   *
   */
  expertises?: PartnerExpertisesChoices;
  /**
   * Company's country
   *
   */
  country?: string;
  /**
   * OVH's product the company's solutions relies on
   *
   */
  OVHProductsUsed?: PartnerOVHProductsUsed;
  /**
   * Company's city
   *
   */
  city?: string;
  /**
   * Company's summary
   *
   */
  description?: string;
  /**
   * Estimation of the number of employees
   *
   */
  employeesNumber?: string;
  /**
   * Company's linkedin profile url
   *
   */
  linkedin?: string;
  /**
   * Certifications obtained from other enterprises
   *
   */
  externalCertifications?: PartnerExternalCertifications;
  /**
   * Estimation of the revenue of the company
   *
   */
  revenue?: string;
  /**
   * Company's twitter profile url
   *
   */
  twitter?: string;
  /**
   * Kind of client the company target
   *
   */
  clientKinds?: PartnerClientKinds;
  /**
   * Estimation of the number of accompanied customers in using OVH's solutions
   *
   */
  OVHCustomersAdvised?: string;
  /**
   * Company's logo
   *
   */
  logo?: string;
  /**
   * Company's email
   *
   */
  email?: string;
  /**
   * The commercial name of the company
   *
   */
  commercialName?: string;
  /**
   * In which country the company products of solutions are available
   *
   */
  productCountries?: PartnerProductCountries;
  /**
   * Company's website
   *
   */
  website?: string;
  /**
   * Company's street address
   *
   */
  address?: string;
  /**
   * OVH certification acquired
   *
   */
  OVHCertifications?: PartnerOVHCertifications;
  /**
   * Company's facebook profile url
   *
   */
  facebook?: string;
  /**
   * Estimation of the number of resources knowing OVH product the company has
   *
   */
  OVHKnowledgeResources?: string;
  /**
   * Company's phone number
   *
   */
  phone?: string;
  /**
   * Estimation of the number of expert resources for OVH solutions the company has
   *
   */
  OVHTechnicalExpertResources?: string;
  /**
   * Company's registration number
   *
   */
  registrationNumber?: string;
  /**
   * Company's sector of activity
   *
   */
  activitySectors?: PartnerActivitySectors;
  /**
   * Name of the company
   *
   */
  name?: string;
  /**
   * Estimation of the number of resources that have technical skills on OVH solutions the company has
   *
   */
  OVHTechnicalAdvancedResources?: string;
  /**
   * How did you heard about the OVH's partnership program
   *
   */
  partnerKnowledges?: PartnerPartnerKnowledges;
  /**
   * Registration status
   *
   */
  status?: PartnerCompanyStatusEnum;
}
/**
 * Partner contact
 */
export interface PartnerContact {
  /**
   * Contact's last name
   *
   */
  lastName?: string;
  /**
   * Newsletter subscription choice
   *
   */
  newsletter?: string;
  /**
   * Contact's first name
   *
   */
  firstName?: string;
  /**
   * Contact's twitter url
   *
   */
  twitter?: string;
  /**
   * Contact's function in the company
   *
   */
  role?: string;
  /**
   * Contact's phone number
   *
   */
  phone?: string;
  /**
   * Contact's facebook url
   *
   */
  facebook?: string;
  /**
   * List of nics to associate with this contact
   *
   */
  otherNics?: string[];
  /**
   * Contact's linkedin url
   *
   */
  linkedin?: string;
  /**
   * Contact's email
   *
   */
  email?: string;
}
/**
 * Partner Nic
 */
export interface PartnerNic {
  /**
   * Nic
   *
   */
  nic?: string;
}
/**
 * Possible choices for OVHCertifications
 */
export interface PartnerOVHCertifications {
  /**
   * Technical certification id
   *
   */
  technical?: string;
  /**
   * Business certification id
   *
   */
  business?: string;
  /**
   * Advanced certification id
   *
   */
  advanced?: string;
}
/**
 * Possible choices for OVHCustomersAdvisedEnum
 */
export type PartnerOVHCustomersAdvisedEnum = 'none' | 'one' | 'from2To3' | 'from4To5' | 'moreThan5';
/**
 * Possible choices for OVHProductsUsed
 */
export interface PartnerOVHProductsUsed {
  /**
   * Cloud solutions
   *
   */
  cloud?: PartnerOVHProductsUsedCloud;
  /**
   * WEB solutions
   *
   */
  web?: PartnerOVHProductsUsedWeb;
  /**
   * Telecom solutions
   *
   */
  telecom?: PartnerOVHProductsUsedTelecom;
  /**
   * Mobile Hosting solutions
   *
   */
  mobileHosting?: PartnerOVHProductsUsedMobileHosting;
}
/**
 * Possible options for OVHProductsUsed_cloud
 */
export interface PartnerOVHProductsUsedCloud {
  /**
   * NAS
   *
   */
  nas?: boolean;
  /**
   * Dedicated Serveurs
   *
   */
  dedicated?: boolean;
  /**
   * VPS
   *
   */
  vps?: boolean;
  /**
   * Private Cloud
   *
   */
  privateCloud?: boolean;
  /**
   * vRack / vRack Connect
   *
   */
  vrack?: boolean;
  /**
   * Cloud Desktop Infrastructure
   *
   */
  cloudDesktopInfrastructure?: boolean;
  /**
   * Public Cloud
   *
   */
  publicCloud?: boolean;
  /**
   * Cloud Desktop
   *
   */
  cloudDesktop?: boolean;
  /**
   * Network and security solutions
   *
   */
  networkAndSecurity?: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_mobileHosting
 */
export interface PartnerOVHProductsUsedMobileHosting {
  /**
   * Metrics Data Platforms
   *
   */
  metrics?: boolean;
  /**
   * Logs Data Platforms
   *
   */
  logs?: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_telecom
 */
export interface PartnerOVHProductsUsedTelecom {
  /**
   * OverTheBox
   *
   */
  overTheBox?: boolean;
  /**
   * VoIP
   *
   */
  voip?: boolean;
  /**
   * SMS
   *
   */
  sms?: boolean;
  /**
   * Fax
   *
   */
  fax?: boolean;
  /**
   * ADSL / SDSL
   *
   */
  dsl?: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_web
 */
export interface PartnerOVHProductsUsedWeb {
  /**
   * Domain name
   *
   */
  domainName?: boolean;
  /**
   * Microsoft Sharepoint 2016
   *
   */
  sharepoint?: boolean;
  /**
   * Web Hosting
   *
   */
  webHosting?: boolean;
  /**
   * Microsoft Exchange 2016
   *
   */
  exchange?: boolean;
  /**
   * Microsoft Office 365 (CSP2)
   *
   */
  office?: boolean;
}
/**
 * Possible choices for activitySectors
 */
export interface PartnerActivitySectors {
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * Reseller of IT / Telecom services
   *
   */
  resellerITOrTelecom?: boolean;
  /**
   * Digital Services Companies
   *
   */
  digitalServicesCompanies?: boolean;
  /**
   * Health
   *
   */
  health?: boolean;
  /**
   * Software editor
   *
   */
  softwareEditor?: boolean;
  /**
   * Public Sector / Education
   *
   */
  publicSectorOrEducation?: boolean;
  /**
   * Bank / Insurance / Finance
   *
   */
  bankInsuranceFinance?: boolean;
  /**
   * Communication / Media
   *
   */
  communicationOrMedia?: boolean;
  /**
   * Video games / Online games
   *
   */
  videoGames?: boolean;
  /**
   * Other IT / Telecom professions
   *
   */
  otherITOrTelecom?: boolean;
  /**
   * Web Agency
   *
   */
  webAgency?: boolean;
  /**
   * E-commerce
   *
   */
  ecommerce?: boolean;
  /**
   * Business Services / Individuals
   *
   */
  businessServiceOrIndividuals?: boolean;
  /**
   * Trade / Trading / Distribution
   *
   */
  tradeTradingDistribution?: boolean;
  /**
   * Industry / Transportation / Energy
   *
   */
  industryTransportationEnegy?: boolean;
}
/**
 * Possible choices for clientKinds
 */
export interface PartnerClientKinds {
  /**
   * Medium Business
   *
   */
  mediumBusiness?: boolean;
  /**
   * Public Sector
   *
   */
  publicSector?: boolean;
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * Individual
   *
   */
  individual?: boolean;
  /**
   * Startup
   *
   */
  startup?: boolean;
  /**
   * Associations
   *
   */
  association?: boolean;
  /**
   * Large Group
   *
   */
  largeGroup?: boolean;
}
/**
 * Possible choices for companyStatusEnum
 */
export type PartnerCompanyStatusEnum = 'draft' | 'submitted' | 'validated' | 'rejected';
/**
 * Possible ranges for company employees number
 */
export type PartnerEmployeesNumberEnum = 'from1To10' | 'from11To50' | 'from51To100' | 'from101To500' | 'moreThan500';
/**
 * Possible choices for expertises
 */
export interface PartnerExpertisesChoices {
  /**
   * Outsourcing And Maintenance
   *
   */
  outsourcingAndMaintenance?: PartnerExpertisesChoicesOutsourcingAndMaintenance;
  /**
   * Consulting
   *
   */
  consulting?: PartnerExpertisesChoicesConsulting;
  /**
   * Software And Development
   *
   */
  softwareAndDevelopment?: PartnerExpertisesChoicesSoftwareAndDevelopment;
  /**
   * Installation and integration
   *
   */
  installationAndIntegration?: PartnerExpertisesChoicesInstallationAndIntegration;
}
/**
 * Possible options for consulting expertises
 */
export interface PartnerExpertisesChoicesConsulting {
  /**
   * Audit and Consulting
   *
   */
  auditAndConsulting?: boolean;
  /**
   * Marketing, Commerce and Communication
   *
   */
  marketingCommerceAndCommunication?: boolean;
  /**
   * IT security
   *
   */
  ITSecurity?: boolean;
  /**
   * Infrastructure Architecture
   *
   */
  infrastructureArchitecture?: boolean;
  /**
   * SEO-SEA Search Engine Optimization
   *
   */
  searchEngineOptimization?: boolean;
}
/**
 * Possible options for installation and integration expertises
 */
export interface PartnerExpertisesChoicesInstallationAndIntegration {
  /**
   * Installation and integration of network equipment
   *
   */
  networkEquipment?: boolean;
  /**
   * Installation and integration of telecom equipment and infrastructure
   *
   */
  telecomEquipmentAndInfrastructure?: boolean;
  /**
   * Cloud infrastructure installation and integration
   *
   */
  cloudInfrastructure?: boolean;
  /**
   * Installation and integration of peripherals and mobility solutions
   *
   */
  peripheralsAndMobilitySolutions?: boolean;
}
/**
 * Possible options for outsourcing and maintenance expertises
 */
export interface PartnerExpertisesChoicesOutsourcingAndMaintenance {
  /**
   * Outsourcing
   *
   */
  outsourcing?: boolean;
  /**
   * Computer support
   *
   */
  cmputerSupport?: boolean;
  /**
   * Maintenance of network equipment / servers
   *
   */
  maintenanceOfNetworkEquipment?: boolean;
}
/**
 * Possible options for software and development expertises
 */
export interface PartnerExpertisesChoicesSoftwareAndDevelopment {
  /**
   * Installation and integration of network equipment
   *
   */
  networkEquipment?: boolean;
  /**
   * Software solutions (collaborative solutions, virtual offices)
   *
   */
  softwareSolutions?: boolean;
  /**
   * Maintenance / Application Management
   *
   */
  maintenanceOrApplicationManagement?: boolean;
  /**
   * Advice and expertises
   *
   */
  adviceAndexpertises?: boolean;
}
/**
 * Possible choices for externalCertifications
 */
export interface PartnerExternalCertifications {
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * VMWare
   *
   */
  vmware?: boolean;
  /**
   * Microsoft
   *
   */
  microsoft?: boolean;
  /**
   * AWS
   *
   */
  aws?: boolean;
  /**
   * Intel
   *
   */
  intel?: boolean;
  /**
   * Cisco
   *
   */
  cisco?: boolean;
}
/**
 * Possible ranges for knowledgeResources
 */
export type PartnerKnowledgeResourcesRangeEnum = 'none' | 'from1To3' | 'from4To10' | 'moreThan10';
/**
 * Possible choices for partnerKnowledges
 */
export interface PartnerPartnerKnowledges {
  /**
   * Forum
   *
   */
  forum?: boolean;
  /**
   * OVH website
   *
   */
  website?: boolean;
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * Search engine
   *
   */
  searchEngine?: boolean;
  /**
   * Media
   *
   */
  media?: boolean;
  /**
   * Social Networks
   *
   */
  socialNetwork?: boolean;
  /**
   * Events
   *
   */
  events?: boolean;
}
/**
 * Possible choices for productCountries
 */
export interface PartnerProductCountries {
  /**
   * Spain
   *
   */
  spain?: boolean;
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * Brazil
   *
   */
  brazil?: boolean;
  /**
   * Germany
   *
   */
  germany?: boolean;
  /**
   * Poland
   *
   */
  poland?: boolean;
  /**
   * Portugal
   *
   */
  portugal?: boolean;
  /**
   * Netherlands
   *
   */
  netherlands?: boolean;
  /**
   * Lithuania
   *
   */
  lithuania?: boolean;
  /**
   * Australia
   *
   */
  australia?: boolean;
  /**
   * Senegal
   *
   */
  senegal?: boolean;
  /**
   * Singapore
   *
   */
  singapore?: boolean;
  /**
   * Canada
   *
   */
  canada?: boolean;
  /**
   * UK
   *
   */
  uk?: boolean;
  /**
   * Tunisia
   *
   */
  tunisia?: boolean;
  /**
   * France
   *
   */
  france?: boolean;
  /**
   * Czech republic
   *
   */
  czechRepublic?: boolean;
  /**
   * Morocco
   *
   */
  morocco?: boolean;
  /**
   * Italy
   *
   */
  italy?: boolean;
  /**
   * Finland
   *
   */
  finland?: boolean;
  /**
   * Ireland
   *
   */
  ireland?: boolean;
}
/**
 * Possible ranges for revenue
 */
export type PartnerRevenueRangeEnum = 'lessThan50000Euros' | 'from50000To500000Euros' | 'from500000To5000000Euros' | 'moreThan5000000Euros' | 'IDoNotWishToDiscloseThisInformation';
/**
 * Possible ranges for AdvancedResources
 */
export type PartnerTechnicalAdvancedResourcesRangeEnum = 'none' | 'from1To3' | 'from4To10' | 'moreThan10';
/**
 * Possible ranges for revenue
 */
export type PartnerTechnicalExpertResourcesRangeEnum = 'none' | 'from1To3' | 'from4To10' | 'moreThan10';
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
type PathspartnersGET = '/partners/register/company/{companyId}/contact/{contactId}' | 
'/partners/register/company/{companyId}/contact' | 
'/partners/register/company/{companyId}/application' | 
'/partners/register/company/{companyId}' | 
'/partners/register/company';

type PathspartnersPUT = '/partners/register/company/{companyId}/contact/{contactId}' | 
'/partners/register/company/{companyId}';

type PathspartnersPOST = '/partners/register/company/{companyId}/contact' | 
'/partners/register/company/{companyId}/application' | 
'/partners/register/company';

type PathspartnersDELETE = '/partners/register/company/{companyId}/contact/{contactId}' | 
'/partners/register/company/{companyId}';

class Apipartners extends ApiCommon {
  /**
  Contact.get
  Get information on a created contact
  **/
  public get(path: '/partners/register/company/{companyId}/contact/{contactId}', pathParams: {companyId?: string, contactId?: string}, queryParams: null): Promise<PartnerContact>;
  /**
  Contact.list
  List created contacts
  **/
  public get(path: '/partners/register/company/{companyId}/contact', pathParams: {companyId?: string}, queryParams: null): Promise<string[]>;
  /**
  Application.create
  Compute scoring score without submitting application
  **/
  public get(path: '/partners/register/company/{companyId}/application', pathParams: {companyId?: string}, queryParams: null): Promise<PartnerApplication>;
  /**
  Company.get
  Get information on a created company
  **/
  public get(path: '/partners/register/company/{companyId}', pathParams: {companyId?: string}, queryParams: null): Promise<PartnerCompany>;
  /**
  Company.list
  List created companies
  **/
  public get(path: '/partners/register/company', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathspartnersGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Contact.get
  Update some fields on a created contact
  **/
  public put(path: '/partners/register/company/{companyId}/contact/{contactId}', pathParams: {companyId?: string, contactId?: string}, bodyParams: null): Promise<PartnerContact>;
  /**
  Company.get
  Update some fields on a created company
  **/
  public put(path: '/partners/register/company/{companyId}', pathParams: {companyId?: string}, bodyParams: null): Promise<PartnerCompany>;
  public put(path: PathspartnersPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Contact.list
  Created a new contact for the inscription
  **/
  public post(path: '/partners/register/company/{companyId}/contact', pathParams: {companyId?: string}, bodyParams: null): Promise<PartnerContact>;
  /**
  Application.create
  Submit application information for validation
  **/
  public post(path: '/partners/register/company/{companyId}/application', pathParams: {companyId?: string}, bodyParams: null): Promise<PartnerApplication>;
  /**
  Company.list
  Created a new company for the inscription
  **/
  public post(path: '/partners/register/company', pathParams: null, bodyParams: null): Promise<PartnerCompany>;
  public post(path: PathspartnersPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Contact.get
  Remove a contact
  **/
  public delete(path: '/partners/register/company/{companyId}/contact/{contactId}', pathParams: {companyId?: string, contactId?: string}, bodyParams: null): Promise<string>;
  /**
  Company.get
  Remove a company
  **/
  public delete(path: '/partners/register/company/{companyId}', pathParams: {companyId?: string}, bodyParams: null): Promise<string>;
  public delete(path: PathspartnersDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Partner Application
 */
export interface PartnerApplication {
  /**
   * You are eligible for the OVH Services Program Partners (OSPP) with the following tiering level
   *
   */
  tieringLevel: string;
}
/**
 * Partner company
 */
export interface PartnerCompany {
  /**
   * OVH certification acquired
   *
   */
  OVHCertifications: PartnerOVHCertifications;
  /**
   * Estimation of the number of accompanied customers in using OVH's solutions
   *
   */
  OVHCustomersAdvised: string;
  /**
   * Estimation of the number of resources knowing OVH product the company has
   *
   */
  OVHKnowledgeResources: string;
  /**
   * OVH's product the company's solutions relies on
   *
   */
  OVHProductsUsed: PartnerOVHProductsUsed;
  /**
   * Estimation of the number of resources that have technical skills on OVH solutions the company has
   *
   */
  OVHTechnicalAdvancedResources: string;
  /**
   * Estimation of the number of expert resources for OVH solutions the company has
   *
   */
  OVHTechnicalExpertResources: string;
  /**
   * Company's sector of activity
   *
   */
  activitySectors: PartnerActivitySectors;
  /**
   * Company's street address
   *
   */
  address: string;
  /**
   * Company's city
   *
   */
  city: string;
  /**
   * Kind of client the company target
   *
   */
  clientKinds: PartnerClientKinds;
  /**
   * The commercial name of the company
   *
   */
  commercialName: string;
  /**
   * Company's country
   *
   */
  country: string;
  /**
   * Company's summary
   *
   */
  description: string;
  /**
   * Company's email
   *
   */
  email: string;
  /**
   * Estimation of the number of employees
   *
   */
  employeesNumber: string;
  /**
   * Company's domain of competence
   *
   */
  expertises: PartnerExpertisesChoices;
  /**
   * Certifications obtained from other enterprises
   *
   */
  externalCertifications: PartnerExternalCertifications;
  /**
   * Company's facebook profile url
   *
   */
  facebook: string;
  /**
   * Company's linkedin profile url
   *
   */
  linkedin: string;
  /**
   * Company's logo
   *
   */
  logo: string;
  /**
   * Name of the company
   *
   */
  name: string;
  /**
   * How did you heard about the OVH's partnership program
   *
   */
  partnerKnowledges: PartnerPartnerKnowledges;
  /**
   * Company's phone number
   *
   */
  phone: string;
  /**
   * In which country the company products of solutions are available
   *
   */
  productCountries: PartnerProductCountries;
  /**
   * Company's registration number
   *
   */
  registrationNumber: string;
  /**
   * Estimation of the revenue of the company
   *
   */
  revenue: string;
  /**
   * Registration status
   *
   */
  status: PartnerCompanyStatusEnum;
  /**
   * Company's twitter profile url
   *
   */
  twitter: string;
  /**
   * Company's website
   *
   */
  website: string;
  /**
   * Company's zipCode
   *
   */
  zipCode: string;
}
/**
 * Partner contact
 */
export interface PartnerContact {
  /**
   * Contact's email
   *
   */
  email: string;
  /**
   * Contact's facebook url
   *
   */
  facebook?: string;
  /**
   * Contact's first name
   *
   */
  firstName: string;
  /**
   * Contact's last name
   *
   */
  lastName: string;
  /**
   * Contact's linkedin url
   *
   */
  linkedin?: string;
  /**
   * Newsletter subscription choice
   *
   */
  newsletter: string;
  /**
   * List of nics to associate with this contact
   *
   */
  otherNics: string[];
  /**
   * Contact's phone number
   *
   */
  phone: string;
  /**
   * Contact's function in the company
   *
   */
  role: string;
  /**
   * Contact's twitter url
   *
   */
  twitter?: string;
}
/**
 * Partner Nic
 */
export interface PartnerNic {
  /**
   * Nic
   *
   */
  nic: string;
}
/**
 * Possible choices for OVHCertifications
 */
export interface PartnerOVHCertifications {
  /**
   * Advanced certification id
   *
   */
  advanced?: string;
  /**
   * Business certification id
   *
   */
  business?: string;
  /**
   * Technical certification id
   *
   */
  technical?: string;
}
/**
 * Possible choices for OVHCustomersAdvisedEnum
 */
export type PartnerOVHCustomersAdvisedEnum = 'from2To3' | 'from4To5' | 'moreThan5' | 'none' | 'one';
/**
 * Possible choices for OVHProductsUsed
 */
export interface PartnerOVHProductsUsed {
  /**
   * Cloud solutions
   *
   */
  cloud: PartnerOVHProductsUsedCloud;
  /**
   * Mobile Hosting solutions
   *
   */
  mobileHosting: PartnerOVHProductsUsedMobileHosting;
  /**
   * Telecom solutions
   *
   */
  telecom: PartnerOVHProductsUsedTelecom;
  /**
   * WEB solutions
   *
   */
  web: PartnerOVHProductsUsedWeb;
}
/**
 * Possible options for OVHProductsUsed_cloud
 */
export interface PartnerOVHProductsUsedCloud {
  /**
   * Cloud Desktop
   *
   */
  cloudDesktop: boolean;
  /**
   * Cloud Desktop Infrastructure
   *
   */
  cloudDesktopInfrastructure: boolean;
  /**
   * Dedicated Serveurs
   *
   */
  dedicated: boolean;
  /**
   * NAS
   *
   */
  nas: boolean;
  /**
   * Network and security solutions
   *
   */
  networkAndSecurity: boolean;
  /**
   * Private Cloud
   *
   */
  privateCloud: boolean;
  /**
   * Public Cloud
   *
   */
  publicCloud: boolean;
  /**
   * VPS
   *
   */
  vps: boolean;
  /**
   * vRack / vRack Connect
   *
   */
  vrack: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_mobileHosting
 */
export interface PartnerOVHProductsUsedMobileHosting {
  /**
   * Logs Data Platforms
   *
   */
  logs: boolean;
  /**
   * Metrics Data Platforms
   *
   */
  metrics: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_telecom
 */
export interface PartnerOVHProductsUsedTelecom {
  /**
   * ADSL / SDSL
   *
   */
  dsl: boolean;
  /**
   * Fax
   *
   */
  fax: boolean;
  /**
   * OverTheBox
   *
   */
  overTheBox: boolean;
  /**
   * SMS
   *
   */
  sms: boolean;
  /**
   * VoIP
   *
   */
  voip: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_web
 */
export interface PartnerOVHProductsUsedWeb {
  /**
   * Domain name
   *
   */
  domainName: boolean;
  /**
   * Microsoft Exchange 2016
   *
   */
  exchange: boolean;
  /**
   * Microsoft Office 365 (CSP2)
   *
   */
  office: boolean;
  /**
   * Microsoft Sharepoint 2016
   *
   */
  sharepoint: boolean;
  /**
   * Web Hosting
   *
   */
  webHosting: boolean;
}
/**
 * Possible choices for activitySectors
 */
export interface PartnerActivitySectors {
  /**
   * Bank / Insurance / Finance
   *
   */
  bankInsuranceFinance: boolean;
  /**
   * Business Services / Individuals
   *
   */
  businessServiceOrIndividuals: boolean;
  /**
   * Communication / Media
   *
   */
  communicationOrMedia: boolean;
  /**
   * Digital Services Companies
   *
   */
  digitalServicesCompanies: boolean;
  /**
   * E-commerce
   *
   */
  ecommerce: boolean;
  /**
   * Health
   *
   */
  health: boolean;
  /**
   * Industry / Transportation / Energy
   *
   */
  industryTransportationEnegy: boolean;
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * Other IT / Telecom professions
   *
   */
  otherITOrTelecom: boolean;
  /**
   * Public Sector / Education
   *
   */
  publicSectorOrEducation: boolean;
  /**
   * Reseller of IT / Telecom services
   *
   */
  resellerITOrTelecom: boolean;
  /**
   * Software editor
   *
   */
  softwareEditor: boolean;
  /**
   * Trade / Trading / Distribution
   *
   */
  tradeTradingDistribution: boolean;
  /**
   * Video games / Online games
   *
   */
  videoGames: boolean;
  /**
   * Web Agency
   *
   */
  webAgency: boolean;
}
/**
 * Possible choices for clientKinds
 */
export interface PartnerClientKinds {
  /**
   * Associations
   *
   */
  association: boolean;
  /**
   * Individual
   *
   */
  individual: boolean;
  /**
   * Large Group
   *
   */
  largeGroup: boolean;
  /**
   * Medium Business
   *
   */
  mediumBusiness: boolean;
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * Public Sector
   *
   */
  publicSector: boolean;
  /**
   * Startup
   *
   */
  startup: boolean;
}
/**
 * Possible choices for companyStatusEnum
 */
export type PartnerCompanyStatusEnum = 'draft' | 'rejected' | 'submitted' | 'validated';
/**
 * Possible ranges for company employees number
 */
export type PartnerEmployeesNumberEnum = 'from101To500' | 'from11To50' | 'from1To10' | 'from51To100' | 'moreThan500';
/**
 * Possible choices for expertises
 */
export interface PartnerExpertisesChoices {
  /**
   * Consulting
   *
   */
  consulting: PartnerExpertisesChoicesConsulting;
  /**
   * Installation and integration
   *
   */
  installationAndIntegration: PartnerExpertisesChoicesInstallationAndIntegration;
  /**
   * Outsourcing And Maintenance
   *
   */
  outsourcingAndMaintenance: PartnerExpertisesChoicesOutsourcingAndMaintenance;
  /**
   * Software And Development
   *
   */
  softwareAndDevelopment: PartnerExpertisesChoicesSoftwareAndDevelopment;
}
/**
 * Possible options for consulting expertises
 */
export interface PartnerExpertisesChoicesConsulting {
  /**
   * IT security
   *
   */
  ITSecurity: boolean;
  /**
   * Audit and Consulting
   *
   */
  auditAndConsulting: boolean;
  /**
   * Infrastructure Architecture
   *
   */
  infrastructureArchitecture: boolean;
  /**
   * Marketing, Commerce and Communication
   *
   */
  marketingCommerceAndCommunication: boolean;
  /**
   * SEO-SEA Search Engine Optimization
   *
   */
  searchEngineOptimization: boolean;
}
/**
 * Possible options for installation and integration expertises
 */
export interface PartnerExpertisesChoicesInstallationAndIntegration {
  /**
   * Cloud infrastructure installation and integration
   *
   */
  cloudInfrastructure: boolean;
  /**
   * Installation and integration of network equipment
   *
   */
  networkEquipment: boolean;
  /**
   * Installation and integration of peripherals and mobility solutions
   *
   */
  peripheralsAndMobilitySolutions: boolean;
  /**
   * Installation and integration of telecom equipment and infrastructure
   *
   */
  telecomEquipmentAndInfrastructure: boolean;
}
/**
 * Possible options for outsourcing and maintenance expertises
 */
export interface PartnerExpertisesChoicesOutsourcingAndMaintenance {
  /**
   * Computer support
   *
   */
  cmputerSupport: boolean;
  /**
   * Maintenance of network equipment / servers
   *
   */
  maintenanceOfNetworkEquipment: boolean;
  /**
   * Outsourcing
   *
   */
  outsourcing: boolean;
}
/**
 * Possible options for software and development expertises
 */
export interface PartnerExpertisesChoicesSoftwareAndDevelopment {
  /**
   * Advice and expertises
   *
   */
  adviceAndexpertises: boolean;
  /**
   * Maintenance / Application Management
   *
   */
  maintenanceOrApplicationManagement: boolean;
  /**
   * Installation and integration of network equipment
   *
   */
  networkEquipment: boolean;
  /**
   * Software solutions (collaborative solutions, virtual offices)
   *
   */
  softwareSolutions: boolean;
}
/**
 * Possible choices for externalCertifications
 */
export interface PartnerExternalCertifications {
  /**
   * AWS
   *
   */
  aws: boolean;
  /**
   * Cisco
   *
   */
  cisco: boolean;
  /**
   * Intel
   *
   */
  intel: boolean;
  /**
   * Microsoft
   *
   */
  microsoft: boolean;
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * VMWare
   *
   */
  vmware: boolean;
}
/**
 * Possible ranges for knowledgeResources
 */
export type PartnerKnowledgeResourcesRangeEnum = 'from1To3' | 'from4To10' | 'moreThan10' | 'none';
/**
 * Possible choices for partnerKnowledges
 */
export interface PartnerPartnerKnowledges {
  /**
   * Events
   *
   */
  events: boolean;
  /**
   * Forum
   *
   */
  forum: boolean;
  /**
   * Media
   *
   */
  media: boolean;
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * Search engine
   *
   */
  searchEngine: boolean;
  /**
   * Social Networks
   *
   */
  socialNetwork: boolean;
  /**
   * OVH website
   *
   */
  website: boolean;
}
/**
 * Possible choices for productCountries
 */
export interface PartnerProductCountries {
  /**
   * Australia
   *
   */
  australia: boolean;
  /**
   * Brazil
   *
   */
  brazil: boolean;
  /**
   * Canada
   *
   */
  canada: boolean;
  /**
   * Czech republic
   *
   */
  czechRepublic: boolean;
  /**
   * Finland
   *
   */
  finland: boolean;
  /**
   * France
   *
   */
  france: boolean;
  /**
   * Germany
   *
   */
  germany: boolean;
  /**
   * Ireland
   *
   */
  ireland: boolean;
  /**
   * Italy
   *
   */
  italy: boolean;
  /**
   * Lithuania
   *
   */
  lithuania: boolean;
  /**
   * Morocco
   *
   */
  morocco: boolean;
  /**
   * Netherlands
   *
   */
  netherlands: boolean;
  /**
   * Other (specify)
   *
   */
  other?: string;
  /**
   * Poland
   *
   */
  poland: boolean;
  /**
   * Portugal
   *
   */
  portugal: boolean;
  /**
   * Senegal
   *
   */
  senegal: boolean;
  /**
   * Singapore
   *
   */
  singapore: boolean;
  /**
   * Spain
   *
   */
  spain: boolean;
  /**
   * Tunisia
   *
   */
  tunisia: boolean;
  /**
   * UK
   *
   */
  uk: boolean;
}
/**
 * Possible ranges for revenue
 */
export type PartnerRevenueRangeEnum = 'IDoNotWishToDiscloseThisInformation' | 'from500000To5000000Euros' | 'from50000To500000Euros' | 'lessThan50000Euros' | 'moreThan5000000Euros';
/**
 * Possible ranges for AdvancedResources
 */
export type PartnerTechnicalAdvancedResourcesRangeEnum = 'from1To3' | 'from4To10' | 'moreThan10' | 'none';
/**
 * Possible ranges for revenue
 */
export type PartnerTechnicalExpertResourcesRangeEnum = 'from1To3' | 'from4To10' | 'moreThan10' | 'none';
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
type PathsPartnersGET = '/partners/register/company' | 
'/partners/register/company/{companyId}' | 
'/partners/register/company/{companyId}/application' | 
'/partners/register/company/{companyId}/contact' | 
'/partners/register/company/{companyId}/contact/{contactId}';

type PathsPartnersPUT = '/partners/register/company/{companyId}' | 
'/partners/register/company/{companyId}/contact/{contactId}';

type PathsPartnersPOST = '/partners/register/company' | 
'/partners/register/company/{companyId}/application' | 
'/partners/register/company/{companyId}/contact';

type PathsPartnersDELETE = '/partners/register/company/{companyId}' | 
'/partners/register/company/{companyId}/contact/{contactId}';

export class ApiPartners extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Company.list
  List created companies
  **/
  public get(path: '/partners/register/company'): Promise<string[]>;
  /**
  Company.get
  Get information on a created company
  **/
  public get(path: '/partners/register/company/{companyId}', params: {companyId: string}): Promise<PartnerCompany>;
  /**
  Application.create
  Compute scoring score without submitting application
  **/
  public get(path: '/partners/register/company/{companyId}/application', params: {companyId: string}): Promise<PartnerApplication>;
  /**
  Contact.list
  List created contacts
  **/
  public get(path: '/partners/register/company/{companyId}/contact', params: {companyId: string}): Promise<string[]>;
  /**
  Contact.get
  Get information on a created contact
  **/
  public get(path: '/partners/register/company/{companyId}/contact/{contactId}', params: {companyId: string, contactId: string}): Promise<PartnerContact>;
  public get(path: PathsPartnersGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Company.get
  Update some fields on a created company
  **/
  public put(path: '/partners/register/company/{companyId}', params: {companyId: string}): Promise<PartnerCompany>;
  /**
  Contact.get
  Update some fields on a created contact
  **/
  public put(path: '/partners/register/company/{companyId}/contact/{contactId}', params: {companyId: string, contactId: string}): Promise<PartnerContact>;
  public put(path: PathsPartnersPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Company.list
  Created a new company for the inscription
  **/
  public post(path: '/partners/register/company'): Promise<PartnerCompany>;
  /**
  Application.create
  Submit application information for validation
  **/
  public post(path: '/partners/register/company/{companyId}/application', params: {companyId: string}): Promise<PartnerApplication>;
  /**
  Contact.list
  Created a new contact for the inscription
  **/
  public post(path: '/partners/register/company/{companyId}/contact', params: {companyId: string}): Promise<PartnerContact>;
  public post(path: PathsPartnersPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Company.get
  Remove a company
  **/
  public delete(path: '/partners/register/company/{companyId}', params: {companyId: string}): Promise<string>;
  /**
  Contact.get
  Remove a contact
  **/
  public delete(path: '/partners/register/company/{companyId}/contact/{contactId}', params: {companyId: string, contactId: string}): Promise<string>;
  public delete(path: PathsPartnersDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiPartners;

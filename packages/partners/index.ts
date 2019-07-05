import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace Partner {
    //Partner.Application
    // fullName: Partner.Application.Application
    export interface Application {
        tieringLevel: string;
    }
    //Partner.Company
    // fullName: Partner.Company.Company
    export interface Company {
        OVHCertifications: Partner.OVHCertifications;
        OVHCustomersAdvised: string;
        OVHKnowledgeResources: string;
        OVHProductsUsed: Partner.OVHProductsUsed;
        OVHTechnicalAdvancedResources: string;
        OVHTechnicalExpertResources: string;
        activitySectors: Partner.activitySectors;
        address: string;
        city: string;
        clientKinds: Partner.clientKinds;
        commercialName: string;
        country: string;
        description: string;
        email: string;
        employeesNumber: string;
        expertises: Partner.expertisesChoices;
        externalCertifications: Partner.externalCertifications;
        facebook: string;
        linkedin: string;
        logo: string;
        name: string;
        partnerKnowledges: Partner.partnerKnowledges;
        phone: string;
        productCountries: Partner.productCountries;
        registrationNumber: string;
        revenue: string;
        status: Partner.companyStatusEnum;
        twitter: string;
        website: string;
        zipCode: string;
    }
    //Partner.Contact
    // fullName: Partner.Contact.Contact
    export interface Contact {
        email: string;
        facebook?: string;
        firstName: string;
        lastName: string;
        linkedin?: string;
        newsletter: string;
        otherNics: string[];
        phone: string;
        role: string;
        twitter?: string;
    }
    //Partner.Nic
    // fullName: Partner.Nic.Nic
    export interface Nic {
        nic: string;
    }
    //Partner.OVHCertifications
    // fullName: Partner.OVHCertifications.OVHCertifications
    export interface OVHCertifications {
        advanced?: string;
        business?: string;
        technical?: string;
    }
    //Partner.OVHCustomersAdvisedEnum
    export type OVHCustomersAdvisedEnum = "none" | "one" | "from2To3" | "from4To5" | "moreThan5"
    //Partner.OVHProductsUsed
    // fullName: Partner.OVHProductsUsed.OVHProductsUsed
    export interface OVHProductsUsed {
        cloud: Partner.OVHProductsUsedCloud;
        mobileHosting: Partner.OVHProductsUsedMobileHosting;
        telecom: Partner.OVHProductsUsedTelecom;
        web: Partner.OVHProductsUsedWeb;
    }
    //Partner.OVHProductsUsedCloud
    // fullName: Partner.OVHProductsUsedCloud.OVHProductsUsedCloud
    export interface OVHProductsUsedCloud {
        cloudDesktop: boolean;
        cloudDesktopInfrastructure: boolean;
        dedicated: boolean;
        nas: boolean;
        networkAndSecurity: boolean;
        privateCloud: boolean;
        publicCloud: boolean;
        vps: boolean;
        vrack: boolean;
    }
    //Partner.OVHProductsUsedMobileHosting
    // fullName: Partner.OVHProductsUsedMobileHosting.OVHProductsUsedMobileHosting
    export interface OVHProductsUsedMobileHosting {
        logs: boolean;
        metrics: boolean;
    }
    //Partner.OVHProductsUsedTelecom
    // fullName: Partner.OVHProductsUsedTelecom.OVHProductsUsedTelecom
    export interface OVHProductsUsedTelecom {
        dsl: boolean;
        fax: boolean;
        overTheBox: boolean;
        sms: boolean;
        voip: boolean;
    }
    //Partner.OVHProductsUsedWeb
    // fullName: Partner.OVHProductsUsedWeb.OVHProductsUsedWeb
    export interface OVHProductsUsedWeb {
        domainName: boolean;
        exchange: boolean;
        office: boolean;
        sharepoint: boolean;
        webHosting: boolean;
    }
    //Partner.activitySectors
    // fullName: Partner.activitySectors.activitySectors
    export interface activitySectors {
        bankInsuranceFinance: boolean;
        businessServiceOrIndividuals: boolean;
        communicationOrMedia: boolean;
        digitalServicesCompanies: boolean;
        ecommerce: boolean;
        health: boolean;
        industryTransportationEnegy: boolean;
        other?: string;
        otherITOrTelecom: boolean;
        publicSectorOrEducation: boolean;
        resellerITOrTelecom: boolean;
        softwareEditor: boolean;
        tradeTradingDistribution: boolean;
        videoGames: boolean;
        webAgency: boolean;
    }
    //Partner.clientKinds
    // fullName: Partner.clientKinds.clientKinds
    export interface clientKinds {
        association: boolean;
        individual: boolean;
        largeGroup: boolean;
        mediumBusiness: boolean;
        other?: string;
        publicSector: boolean;
        startup: boolean;
    }
    //Partner.companyStatusEnum
    export type companyStatusEnum = "draft" | "submitted" | "validated" | "rejected"
    //Partner.employeesNumberEnum
    export type employeesNumberEnum = "from1To10" | "from11To50" | "from51To100" | "from101To500" | "moreThan500"
    //Partner.expertisesChoices
    // fullName: Partner.expertisesChoices.expertisesChoices
    export interface expertisesChoices {
        consulting: Partner.expertisesChoicesConsulting;
        installationAndIntegration: Partner.expertisesChoicesInstallationAndIntegration;
        outsourcingAndMaintenance: Partner.expertisesChoicesOutsourcingAndMaintenance;
        softwareAndDevelopment: Partner.expertisesChoicesSoftwareAndDevelopment;
    }
    //Partner.expertisesChoicesConsulting
    // fullName: Partner.expertisesChoicesConsulting.expertisesChoicesConsulting
    export interface expertisesChoicesConsulting {
        ITSecurity: boolean;
        auditAndConsulting: boolean;
        infrastructureArchitecture: boolean;
        marketingCommerceAndCommunication: boolean;
        searchEngineOptimization: boolean;
    }
    //Partner.expertisesChoicesInstallationAndIntegration
    // fullName: Partner.expertisesChoicesInstallationAndIntegration.expertisesChoicesInstallationAndIntegration
    export interface expertisesChoicesInstallationAndIntegration {
        cloudInfrastructure: boolean;
        networkEquipment: boolean;
        peripheralsAndMobilitySolutions: boolean;
        telecomEquipmentAndInfrastructure: boolean;
    }
    //Partner.expertisesChoicesOutsourcingAndMaintenance
    // fullName: Partner.expertisesChoicesOutsourcingAndMaintenance.expertisesChoicesOutsourcingAndMaintenance
    export interface expertisesChoicesOutsourcingAndMaintenance {
        cmputerSupport: boolean;
        maintenanceOfNetworkEquipment: boolean;
        outsourcing: boolean;
    }
    //Partner.expertisesChoicesSoftwareAndDevelopment
    // fullName: Partner.expertisesChoicesSoftwareAndDevelopment.expertisesChoicesSoftwareAndDevelopment
    export interface expertisesChoicesSoftwareAndDevelopment {
        adviceAndexpertises: boolean;
        maintenanceOrApplicationManagement: boolean;
        networkEquipment: boolean;
        softwareSolutions: boolean;
    }
    //Partner.externalCertifications
    // fullName: Partner.externalCertifications.externalCertifications
    export interface externalCertifications {
        aws: boolean;
        cisco: boolean;
        intel: boolean;
        microsoft: boolean;
        other?: string;
        vmware: boolean;
    }
    //Partner.knowledgeResourcesRangeEnum
    export type knowledgeResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10"
    //Partner.partnerKnowledges
    // fullName: Partner.partnerKnowledges.partnerKnowledges
    export interface partnerKnowledges {
        events: boolean;
        forum: boolean;
        media: boolean;
        other?: string;
        searchEngine: boolean;
        socialNetwork: boolean;
        website: boolean;
    }
    //Partner.productCountries
    // fullName: Partner.productCountries.productCountries
    export interface productCountries {
        australia: boolean;
        brazil: boolean;
        canada: boolean;
        czechRepublic: boolean;
        finland: boolean;
        france: boolean;
        germany: boolean;
        ireland: boolean;
        italy: boolean;
        lithuania: boolean;
        morocco: boolean;
        netherlands: boolean;
        other?: string;
        poland: boolean;
        portugal: boolean;
        senegal: boolean;
        singapore: boolean;
        spain: boolean;
        tunisia: boolean;
        uk: boolean;
    }
    //Partner.revenueRangeEnum
    export type revenueRangeEnum = "lessThan50000Euros" | "from50000To500000Euros" | "from500000To5000000Euros" | "moreThan5000000Euros" | "IDoNotWishToDiscloseThisInformation"
    //Partner.technicalAdvancedResourcesRangeEnum
    export type technicalAdvancedResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10"
    //Partner.technicalExpertResourcesRangeEnum
    export type technicalExpertResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10"
}
export namespace nichandle {
    //nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
// Apis harmony
// path /partners
export interface Partners{
    register: {
        company: {
            // GET /partners/register/company
            $get(): Promise<string[]>;
            // POST /partners/register/company
            $post(body?: {activitySectors?: Partner.activitySectors, address: string, city: string, clientKinds?: Partner.clientKinds, commercialName: string, country: nichandle.CountryEnum, description: string, email: string, employeesNumber: Partner.employeesNumberEnum, expertises?: Partner.expertisesChoices, externalCertifications?: Partner.externalCertifications, facebook?: string, linkedin?: string, logo: string, name: string, OVHCertifications?: Partner.OVHCertifications, OVHCustomersAdvised: Partner.OVHCustomersAdvisedEnum, OVHKnowledgeResources: Partner.knowledgeResourcesRangeEnum, OVHProductsUsed?: Partner.OVHProductsUsed, OVHTechnicalAdvancedResources: Partner.technicalAdvancedResourcesRangeEnum, OVHTechnicalExpertResources: Partner.technicalExpertResourcesRangeEnum, partnerKnowledges?: Partner.partnerKnowledges, phone: string, productCountries?: Partner.productCountries, registrationNumber?: string, revenue: Partner.revenueRangeEnum, twitter?: string, website: string, zipCode: string}): Promise<Partner.Company>;
            [keys: string]:{
                // DELETE /partners/register/company/{companyId}
                $delete(): Promise<string>;
                // GET /partners/register/company/{companyId}
                $get(): Promise<Partner.Company>;
                // PUT /partners/register/company/{companyId}
                $put(body?: {activitySectors?: Partner.activitySectors, address?: string, city?: string, clientKinds?: Partner.clientKinds, commercialName?: string, country?: nichandle.CountryEnum, description?: string, effective?: Partner.employeesNumberEnum, email?: string, expertises?: Partner.expertisesChoices, externalCertifications?: Partner.externalCertifications, facebook?: string, linkedin?: string, logo?: string, name?: string, OVHCertifications?: Partner.OVHCertifications, OVHCustomersAdvised?: Partner.OVHCustomersAdvisedEnum, OVHKnowledgeResources?: Partner.knowledgeResourcesRangeEnum, OVHProductsUsed?: Partner.OVHProductsUsed, OVHTechnicalAdvancedResources?: Partner.technicalAdvancedResourcesRangeEnum, OVHTechnicalExpertResources?: Partner.technicalExpertResourcesRangeEnum, partnerKnowledges?: Partner.partnerKnowledges, phone?: string, productCountries?: Partner.productCountries, registrationNumber?: string, revenue?: Partner.revenueRangeEnum, twitter?: string, website?: string, zipCode?: string}): Promise<Partner.Company>;
                application: {
                    // GET /partners/register/company/{companyId}/application
                    $get(): Promise<Partner.Application>;
                    // POST /partners/register/company/{companyId}/application
                    $post(body?: {termsAndConditionsOfServiceAccepted: boolean}): Promise<Partner.Application>;
                }
                contact: {
                    // GET /partners/register/company/{companyId}/contact
                    $get(): Promise<string[]>;
                    // POST /partners/register/company/{companyId}/contact
                    $post(body?: {email: string, facebook?: string, firstName: string, lastName: string, linkedin?: string, newsletter?: boolean, otherNics?: Partner.Nic[], phone: string, role: string, twitter?: string}): Promise<Partner.Contact>;
                    [keys: string]:{
                        // DELETE /partners/register/company/{companyId}/contact/{contactId}
                        $delete(): Promise<string>;
                        // GET /partners/register/company/{companyId}/contact/{contactId}
                        $get(): Promise<Partner.Contact>;
                        // PUT /partners/register/company/{companyId}/contact/{contactId}
                        $put(body?: {email?: string, facebook?: string, firstName?: string, lastName?: string, linkedin?: string, newsletter?: boolean, otherNics?: Partner.Nic[], phone?: string, role?: string, twitter?: string}): Promise<Partner.Contact>;
                    } | any
                }
            } | any
        }
    }
}
// Api
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
   * Company.list
   * List created companies
   */
  public get(path: '/partners/register/company'): Promise<string[]>;
  /**
   * Company.get
   * Get information on a created company
   */
  public get(path: '/partners/register/company/{companyId}', params: {companyId: string}): Promise<Partner.Company>;
  /**
   * Application.create
   * Compute scoring score without submitting application
   */
  public get(path: '/partners/register/company/{companyId}/application', params: {companyId: string}): Promise<Partner.Application>;
  /**
   * Contact.list
   * List created contacts
   */
  public get(path: '/partners/register/company/{companyId}/contact', params: {companyId: string}): Promise<string[]>;
  /**
   * Contact.get
   * Get information on a created contact
   */
  public get(path: '/partners/register/company/{companyId}/contact/{contactId}', params: {companyId: string, contactId: string}): Promise<Partner.Contact>;
  public get(path: PathsPartnersGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Company.get
   * Update some fields on a created company
   */
  public put(path: '/partners/register/company/{companyId}', params: {companyId: string, activitySectors?: Partner.activitySectors, address?: string, city?: string, clientKinds?: Partner.clientKinds, commercialName?: string, country?: nichandle.CountryEnum, description?: string, effective?: Partner.employeesNumberEnum, email?: string, expertises?: Partner.expertisesChoices, externalCertifications?: Partner.externalCertifications, facebook?: string, linkedin?: string, logo?: string, name?: string, OVHCertifications?: Partner.OVHCertifications, OVHCustomersAdvised?: Partner.OVHCustomersAdvisedEnum, OVHKnowledgeResources?: Partner.knowledgeResourcesRangeEnum, OVHProductsUsed?: Partner.OVHProductsUsed, OVHTechnicalAdvancedResources?: Partner.technicalAdvancedResourcesRangeEnum, OVHTechnicalExpertResources?: Partner.technicalExpertResourcesRangeEnum, partnerKnowledges?: Partner.partnerKnowledges, phone?: string, productCountries?: Partner.productCountries, registrationNumber?: string, revenue?: Partner.revenueRangeEnum, twitter?: string, website?: string, zipCode?: string}): Promise<Partner.Company>;
  /**
   * Contact.get
   * Update some fields on a created contact
   */
  public put(path: '/partners/register/company/{companyId}/contact/{contactId}', params: {companyId: string, contactId: string, email?: string, facebook?: string, firstName?: string, lastName?: string, linkedin?: string, newsletter?: boolean, otherNics?: Partner.Nic[], phone?: string, role?: string, twitter?: string}): Promise<Partner.Contact>;
  public put(path: PathsPartnersPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Company.list
   * Created a new company for the inscription
   */
  public post(path: '/partners/register/company', params: {activitySectors?: Partner.activitySectors, address: string, city: string, clientKinds?: Partner.clientKinds, commercialName: string, country: nichandle.CountryEnum, description: string, email: string, employeesNumber: Partner.employeesNumberEnum, expertises?: Partner.expertisesChoices, externalCertifications?: Partner.externalCertifications, facebook?: string, linkedin?: string, logo: string, name: string, OVHCertifications?: Partner.OVHCertifications, OVHCustomersAdvised: Partner.OVHCustomersAdvisedEnum, OVHKnowledgeResources: Partner.knowledgeResourcesRangeEnum, OVHProductsUsed?: Partner.OVHProductsUsed, OVHTechnicalAdvancedResources: Partner.technicalAdvancedResourcesRangeEnum, OVHTechnicalExpertResources: Partner.technicalExpertResourcesRangeEnum, partnerKnowledges?: Partner.partnerKnowledges, phone: string, productCountries?: Partner.productCountries, registrationNumber?: string, revenue: Partner.revenueRangeEnum, twitter?: string, website: string, zipCode: string}): Promise<Partner.Company>;
  /**
   * Application.create
   * Submit application information for validation
   */
  public post(path: '/partners/register/company/{companyId}/application', params: {companyId: string, termsAndConditionsOfServiceAccepted: boolean}): Promise<Partner.Application>;
  /**
   * Contact.list
   * Created a new contact for the inscription
   */
  public post(path: '/partners/register/company/{companyId}/contact', params: {companyId: string, email: string, facebook?: string, firstName: string, lastName: string, linkedin?: string, newsletter?: boolean, otherNics?: Partner.Nic[], phone: string, role: string, twitter?: string}): Promise<Partner.Contact>;
  public post(path: PathsPartnersPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Company.get
   * Remove a company
   */
  public delete(path: '/partners/register/company/{companyId}', params: {companyId: string}): Promise<string>;
  /**
   * Contact.get
   * Remove a contact
   */
  public delete(path: '/partners/register/company/{companyId}/contact/{contactId}', params: {companyId: string, contactId: string}): Promise<string>;
  public delete(path: PathsPartnersDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
export default ApiPartners;

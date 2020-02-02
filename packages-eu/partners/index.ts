import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /partners Models
 * Source: https://eu.api.ovh.com/1.0/partners.json
 */
export namespace Partner {
    /**
     * Partner Application
     * interface fullName: Partner.Application.Application
     */
    export interface Application {
        tieringLevel: string;
    }
    /**
     * Partner company
     * interface fullName: Partner.Company.Company
     */
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
    /**
     * Partner contact
     * interface fullName: Partner.Contact.Contact
     */
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
    /**
     * Partner Nic
     * interface fullName: Partner.Nic.Nic
     */
    export interface Nic {
        nic: string;
    }
    /**
     * Possible choices for OVHCertifications
     * interface fullName: Partner.OVHCertifications.OVHCertifications
     */
    export interface OVHCertifications {
        advanced?: string;
        business?: string;
        technical?: string;
    }
    /**
     * Possible choices for OVHCustomersAdvisedEnum
     * type fullname: Partner.OVHCustomersAdvisedEnum
     */
    export type OVHCustomersAdvisedEnum = "none" | "one" | "from2To3" | "from4To5" | "moreThan5"
    /**
     * Possible choices for OVHProductsUsed
     * interface fullName: Partner.OVHProductsUsed.OVHProductsUsed
     */
    export interface OVHProductsUsed {
        cloud: Partner.OVHProductsUsedCloud;
        mobileHosting: Partner.OVHProductsUsedMobileHosting;
        telecom: Partner.OVHProductsUsedTelecom;
        web: Partner.OVHProductsUsedWeb;
    }
    /**
     * Possible options for OVHProductsUsed_cloud
     * interface fullName: Partner.OVHProductsUsedCloud.OVHProductsUsedCloud
     */
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
    /**
     * Possible ranges for OVHProductsUsed_mobileHosting
     * interface fullName: Partner.OVHProductsUsedMobileHosting.OVHProductsUsedMobileHosting
     */
    export interface OVHProductsUsedMobileHosting {
        logs: boolean;
        metrics: boolean;
    }
    /**
     * Possible ranges for OVHProductsUsed_telecom
     * interface fullName: Partner.OVHProductsUsedTelecom.OVHProductsUsedTelecom
     */
    export interface OVHProductsUsedTelecom {
        dsl: boolean;
        fax: boolean;
        overTheBox: boolean;
        sms: boolean;
        voip: boolean;
    }
    /**
     * Possible ranges for OVHProductsUsed_web
     * interface fullName: Partner.OVHProductsUsedWeb.OVHProductsUsedWeb
     */
    export interface OVHProductsUsedWeb {
        domainName: boolean;
        exchange: boolean;
        office: boolean;
        sharepoint: boolean;
        webHosting: boolean;
    }
    /**
     * Possible choices for activitySectors
     * interface fullName: Partner.activitySectors.activitySectors
     */
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
    /**
     * Possible choices for clientKinds
     * interface fullName: Partner.clientKinds.clientKinds
     */
    export interface clientKinds {
        association: boolean;
        individual: boolean;
        largeGroup: boolean;
        mediumBusiness: boolean;
        other?: string;
        publicSector: boolean;
        startup: boolean;
    }
    /**
     * Possible choices for companyStatusEnum
     * type fullname: Partner.companyStatusEnum
     */
    export type companyStatusEnum = "draft" | "submitted" | "validated" | "rejected"
    /**
     * Possible ranges for company employees number
     * type fullname: Partner.employeesNumberEnum
     */
    export type employeesNumberEnum = "from1To10" | "from11To50" | "from51To100" | "from101To500" | "moreThan500"
    /**
     * Possible choices for expertises
     * interface fullName: Partner.expertisesChoices.expertisesChoices
     */
    export interface expertisesChoices {
        consulting: Partner.expertisesChoicesConsulting;
        installationAndIntegration: Partner.expertisesChoicesInstallationAndIntegration;
        outsourcingAndMaintenance: Partner.expertisesChoicesOutsourcingAndMaintenance;
        softwareAndDevelopment: Partner.expertisesChoicesSoftwareAndDevelopment;
    }
    /**
     * Possible options for consulting expertises
     * interface fullName: Partner.expertisesChoicesConsulting.expertisesChoicesConsulting
     */
    export interface expertisesChoicesConsulting {
        ITSecurity: boolean;
        auditAndConsulting: boolean;
        infrastructureArchitecture: boolean;
        marketingCommerceAndCommunication: boolean;
        searchEngineOptimization: boolean;
    }
    /**
     * Possible options for installation and integration expertises
     * interface fullName: Partner.expertisesChoicesInstallationAndIntegration.expertisesChoicesInstallationAndIntegration
     */
    export interface expertisesChoicesInstallationAndIntegration {
        cloudInfrastructure: boolean;
        networkEquipment: boolean;
        peripheralsAndMobilitySolutions: boolean;
        telecomEquipmentAndInfrastructure: boolean;
    }
    /**
     * Possible options for outsourcing and maintenance expertises
     * interface fullName: Partner.expertisesChoicesOutsourcingAndMaintenance.expertisesChoicesOutsourcingAndMaintenance
     */
    export interface expertisesChoicesOutsourcingAndMaintenance {
        cmputerSupport: boolean;
        maintenanceOfNetworkEquipment: boolean;
        outsourcing: boolean;
    }
    /**
     * Possible options for software and development expertises
     * interface fullName: Partner.expertisesChoicesSoftwareAndDevelopment.expertisesChoicesSoftwareAndDevelopment
     */
    export interface expertisesChoicesSoftwareAndDevelopment {
        adviceAndexpertises: boolean;
        maintenanceOrApplicationManagement: boolean;
        networkEquipment: boolean;
        softwareSolutions: boolean;
    }
    /**
     * Possible choices for externalCertifications
     * interface fullName: Partner.externalCertifications.externalCertifications
     */
    export interface externalCertifications {
        aws: boolean;
        cisco: boolean;
        intel: boolean;
        microsoft: boolean;
        other?: string;
        vmware: boolean;
    }
    /**
     * Possible ranges for knowledgeResources
     * type fullname: Partner.knowledgeResourcesRangeEnum
     */
    export type knowledgeResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10"
    /**
     * Possible choices for partnerKnowledges
     * interface fullName: Partner.partnerKnowledges.partnerKnowledges
     */
    export interface partnerKnowledges {
        events: boolean;
        forum: boolean;
        media: boolean;
        other?: string;
        searchEngine: boolean;
        socialNetwork: boolean;
        website: boolean;
    }
    /**
     * Possible choices for productCountries
     * interface fullName: Partner.productCountries.productCountries
     */
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
    /**
     * Possible ranges for revenue
     * type fullname: Partner.revenueRangeEnum
     */
    export type revenueRangeEnum = "lessThan50000Euros" | "from50000To500000Euros" | "from500000To5000000Euros" | "moreThan5000000Euros" | "IDoNotWishToDiscloseThisInformation"
    /**
     * Possible ranges for AdvancedResources
     * type fullname: Partner.technicalAdvancedResourcesRangeEnum
     */
    export type technicalAdvancedResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10"
    /**
     * Possible ranges for revenue
     * type fullname: Partner.technicalExpertResourcesRangeEnum
     */
    export type technicalExpertResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10"
}
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}

/**
 * END API /partners Models
 */
export function proxyPartners(ovhEngine: OvhRequestable): Partners {
    return buildOvhProxy(ovhEngine, '/partners');
}
export default proxyPartners;
/**
 * Api model for /partners
 */
export interface Partners {
    register: {
        company: {
            /**
             * List created companies
             * GET /partners/register/company
             */
            $get(): Promise<string[]>;
            /**
             * Created a new company for the inscription
             * POST /partners/register/company
             */
            $post(params: { activitySectors?: Partner.activitySectors, address: string, city: string, clientKinds?: Partner.clientKinds, commercialName: string, country: nichandle.CountryEnum, description: string, email: string, employeesNumber: Partner.employeesNumberEnum, expertises?: Partner.expertisesChoices, externalCertifications?: Partner.externalCertifications, facebook?: string, linkedin?: string, logo: string, name: string, OVHCertifications?: Partner.OVHCertifications, OVHCustomersAdvised: Partner.OVHCustomersAdvisedEnum, OVHKnowledgeResources: Partner.knowledgeResourcesRangeEnum, OVHProductsUsed?: Partner.OVHProductsUsed, OVHTechnicalAdvancedResources: Partner.technicalAdvancedResourcesRangeEnum, OVHTechnicalExpertResources: Partner.technicalExpertResourcesRangeEnum, partnerKnowledges?: Partner.partnerKnowledges, phone: string, productCountries?: Partner.productCountries, registrationNumber?: string, revenue: Partner.revenueRangeEnum, twitter?: string, website: string, zipCode: string }): Promise<Partner.Company>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(companyId: string): {
                /**
                 * Remove a company
                 * DELETE /partners/register/company/{companyId}
                 */
                $delete(): Promise<string>;
                /**
                 * Get information on a created company
                 * GET /partners/register/company/{companyId}
                 */
                $get(): Promise<Partner.Company>;
                /**
                 * Update some fields on a created company
                 * PUT /partners/register/company/{companyId}
                 */
                $put(params?: { activitySectors?: Partner.activitySectors, address?: string, city?: string, clientKinds?: Partner.clientKinds, commercialName?: string, country?: nichandle.CountryEnum, description?: string, effective?: Partner.employeesNumberEnum, email?: string, expertises?: Partner.expertisesChoices, externalCertifications?: Partner.externalCertifications, facebook?: string, linkedin?: string, logo?: string, name?: string, OVHCertifications?: Partner.OVHCertifications, OVHCustomersAdvised?: Partner.OVHCustomersAdvisedEnum, OVHKnowledgeResources?: Partner.knowledgeResourcesRangeEnum, OVHProductsUsed?: Partner.OVHProductsUsed, OVHTechnicalAdvancedResources?: Partner.technicalAdvancedResourcesRangeEnum, OVHTechnicalExpertResources?: Partner.technicalExpertResourcesRangeEnum, partnerKnowledges?: Partner.partnerKnowledges, phone?: string, productCountries?: Partner.productCountries, registrationNumber?: string, revenue?: Partner.revenueRangeEnum, twitter?: string, website?: string, zipCode?: string }): Promise<Partner.Company>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                application: {
                    /**
                     * Compute scoring score without submitting application
                     * GET /partners/register/company/{companyId}/application
                     */
                    $get(): Promise<Partner.Application>;
                    /**
                     * Submit application information for validation
                     * POST /partners/register/company/{companyId}/application
                     */
                    $post(params: { termsAndConditionsOfServiceAccepted: boolean }): Promise<Partner.Application>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                contact: {
                    /**
                     * List created contacts
                     * GET /partners/register/company/{companyId}/contact
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Created a new contact for the inscription
                     * POST /partners/register/company/{companyId}/contact
                     */
                    $post(params: { email: string, facebook?: string, firstName: string, lastName: string, linkedin?: string, newsletter?: boolean, otherNics?: Partner.Nic[], phone: string, role: string, twitter?: string }): Promise<Partner.Contact>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(contactId: string): {
                        /**
                         * Remove a contact
                         * DELETE /partners/register/company/{companyId}/contact/{contactId}
                         */
                        $delete(): Promise<string>;
                        /**
                         * Get information on a created contact
                         * GET /partners/register/company/{companyId}/contact/{contactId}
                         */
                        $get(): Promise<Partner.Contact>;
                        /**
                         * Update some fields on a created contact
                         * PUT /partners/register/company/{companyId}/contact/{contactId}
                         */
                        $put(params?: { email?: string, facebook?: string, firstName?: string, lastName?: string, linkedin?: string, newsletter?: boolean, otherNics?: Partner.Nic[], phone?: string, role?: string, twitter?: string }): Promise<Partner.Contact>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
    }
}

import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /partners Models
 */
export declare namespace Partner {
    interface Application {
        tieringLevel: string;
    }
    interface Company {
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
    interface Contact {
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
    interface Nic {
        nic: string;
    }
    interface OVHCertifications {
        advanced?: string;
        business?: string;
        technical?: string;
    }
    type OVHCustomersAdvisedEnum = "none" | "one" | "from2To3" | "from4To5" | "moreThan5";
    interface OVHProductsUsed {
        cloud: Partner.OVHProductsUsedCloud;
        mobileHosting: Partner.OVHProductsUsedMobileHosting;
        telecom: Partner.OVHProductsUsedTelecom;
        web: Partner.OVHProductsUsedWeb;
    }
    interface OVHProductsUsedCloud {
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
    interface OVHProductsUsedMobileHosting {
        logs: boolean;
        metrics: boolean;
    }
    interface OVHProductsUsedTelecom {
        dsl: boolean;
        fax: boolean;
        overTheBox: boolean;
        sms: boolean;
        voip: boolean;
    }
    interface OVHProductsUsedWeb {
        domainName: boolean;
        exchange: boolean;
        office: boolean;
        sharepoint: boolean;
        webHosting: boolean;
    }
    interface activitySectors {
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
    interface clientKinds {
        association: boolean;
        individual: boolean;
        largeGroup: boolean;
        mediumBusiness: boolean;
        other?: string;
        publicSector: boolean;
        startup: boolean;
    }
    type companyStatusEnum = "draft" | "submitted" | "validated" | "rejected";
    type employeesNumberEnum = "from1To10" | "from11To50" | "from51To100" | "from101To500" | "moreThan500";
    interface expertisesChoices {
        consulting: Partner.expertisesChoicesConsulting;
        installationAndIntegration: Partner.expertisesChoicesInstallationAndIntegration;
        outsourcingAndMaintenance: Partner.expertisesChoicesOutsourcingAndMaintenance;
        softwareAndDevelopment: Partner.expertisesChoicesSoftwareAndDevelopment;
    }
    interface expertisesChoicesConsulting {
        ITSecurity: boolean;
        auditAndConsulting: boolean;
        infrastructureArchitecture: boolean;
        marketingCommerceAndCommunication: boolean;
        searchEngineOptimization: boolean;
    }
    interface expertisesChoicesInstallationAndIntegration {
        cloudInfrastructure: boolean;
        networkEquipment: boolean;
        peripheralsAndMobilitySolutions: boolean;
        telecomEquipmentAndInfrastructure: boolean;
    }
    interface expertisesChoicesOutsourcingAndMaintenance {
        cmputerSupport: boolean;
        maintenanceOfNetworkEquipment: boolean;
        outsourcing: boolean;
    }
    interface expertisesChoicesSoftwareAndDevelopment {
        adviceAndexpertises: boolean;
        maintenanceOrApplicationManagement: boolean;
        networkEquipment: boolean;
        softwareSolutions: boolean;
    }
    interface externalCertifications {
        aws: boolean;
        cisco: boolean;
        intel: boolean;
        microsoft: boolean;
        other?: string;
        vmware: boolean;
    }
    type knowledgeResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10";
    interface partnerKnowledges {
        events: boolean;
        forum: boolean;
        media: boolean;
        other?: string;
        searchEngine: boolean;
        socialNetwork: boolean;
        website: boolean;
    }
    interface productCountries {
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
    type revenueRangeEnum = "lessThan50000Euros" | "from50000To500000Euros" | "from500000To5000000Euros" | "moreThan5000000Euros" | "IDoNotWishToDiscloseThisInformation";
    type technicalAdvancedResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10";
    type technicalExpertResourcesRangeEnum = "none" | "from1To3" | "from4To10" | "moreThan10";
}
export declare namespace nichandle {
    type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
}
/**
 * END API /partners Models
 */
export declare function proxyPartners(ovhEngine: OvhRequestable): Partners;
export default proxyPartners;
/**
 * Api Proxy model
 */ export interface Partners {
    register: {
        company: {
            $get(): Promise<string[]>;
            $post(params: {
                activitySectors?: Partner.activitySectors;
                address: string;
                city: string;
                clientKinds?: Partner.clientKinds;
                commercialName: string;
                country: nichandle.CountryEnum;
                description: string;
                email: string;
                employeesNumber: Partner.employeesNumberEnum;
                expertises?: Partner.expertisesChoices;
                externalCertifications?: Partner.externalCertifications;
                facebook?: string;
                linkedin?: string;
                logo: string;
                name: string;
                OVHCertifications?: Partner.OVHCertifications;
                OVHCustomersAdvised: Partner.OVHCustomersAdvisedEnum;
                OVHKnowledgeResources: Partner.knowledgeResourcesRangeEnum;
                OVHProductsUsed?: Partner.OVHProductsUsed;
                OVHTechnicalAdvancedResources: Partner.technicalAdvancedResourcesRangeEnum;
                OVHTechnicalExpertResources: Partner.technicalExpertResourcesRangeEnum;
                partnerKnowledges?: Partner.partnerKnowledges;
                phone: string;
                productCountries?: Partner.productCountries;
                registrationNumber?: string;
                revenue: Partner.revenueRangeEnum;
                twitter?: string;
                website: string;
                zipCode: string;
            }): Promise<Partner.Company>;
            $(companyId: string): {
                $delete(): Promise<string>;
                $get(): Promise<Partner.Company>;
                $put(params?: {
                    activitySectors?: Partner.activitySectors;
                    address?: string;
                    city?: string;
                    clientKinds?: Partner.clientKinds;
                    commercialName?: string;
                    country?: nichandle.CountryEnum;
                    description?: string;
                    effective?: Partner.employeesNumberEnum;
                    email?: string;
                    expertises?: Partner.expertisesChoices;
                    externalCertifications?: Partner.externalCertifications;
                    facebook?: string;
                    linkedin?: string;
                    logo?: string;
                    name?: string;
                    OVHCertifications?: Partner.OVHCertifications;
                    OVHCustomersAdvised?: Partner.OVHCustomersAdvisedEnum;
                    OVHKnowledgeResources?: Partner.knowledgeResourcesRangeEnum;
                    OVHProductsUsed?: Partner.OVHProductsUsed;
                    OVHTechnicalAdvancedResources?: Partner.technicalAdvancedResourcesRangeEnum;
                    OVHTechnicalExpertResources?: Partner.technicalExpertResourcesRangeEnum;
                    partnerKnowledges?: Partner.partnerKnowledges;
                    phone?: string;
                    productCountries?: Partner.productCountries;
                    registrationNumber?: string;
                    revenue?: Partner.revenueRangeEnum;
                    twitter?: string;
                    website?: string;
                    zipCode?: string;
                }): Promise<Partner.Company>;
                application: {
                    $get(): Promise<Partner.Application>;
                    $post(params: {
                        termsAndConditionsOfServiceAccepted: boolean;
                    }): Promise<Partner.Application>;
                };
                contact: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        email: string;
                        facebook?: string;
                        firstName: string;
                        lastName: string;
                        linkedin?: string;
                        newsletter?: boolean;
                        otherNics?: Partner.Nic[];
                        phone: string;
                        role: string;
                        twitter?: string;
                    }): Promise<Partner.Contact>;
                    $(contactId: string): {
                        $delete(): Promise<string>;
                        $get(): Promise<Partner.Contact>;
                        $put(params?: {
                            email?: string;
                            facebook?: string;
                            firstName?: string;
                            lastName?: string;
                            linkedin?: string;
                            newsletter?: boolean;
                            otherNics?: Partner.Nic[];
                            phone?: string;
                            role?: string;
                            twitter?: string;
                        }): Promise<Partner.Contact>;
                    };
                };
            };
        };
    };
    /**
     * Company.list
     * List created companies
     */
    get(path: '/partners/register/company'): () => Promise<string[]>;
    /**
     * Company.get
     * Get information on a created company
     */
    get(path: '/partners/register/company/{companyId}'): (params: {
        companyId: string;
    }) => Promise<Partner.Company>;
    /**
     * Application.create
     * Compute scoring score without submitting application
     */
    get(path: '/partners/register/company/{companyId}/application'): (params: {
        companyId: string;
    }) => Promise<Partner.Application>;
    /**
     * Contact.list
     * List created contacts
     */
    get(path: '/partners/register/company/{companyId}/contact'): (params: {
        companyId: string;
    }) => Promise<string[]>;
    /**
     * Contact.get
     * Get information on a created contact
     */
    get(path: '/partners/register/company/{companyId}/contact/{contactId}'): (params: {
        companyId: string;
        contactId: string;
    }) => Promise<Partner.Contact>;
    /**
     * Company.get
     * Update some fields on a created company
     */
    put(path: '/partners/register/company/{companyId}'): (params: {
        companyId: string;
        activitySectors?: Partner.activitySectors;
        address?: string;
        city?: string;
        clientKinds?: Partner.clientKinds;
        commercialName?: string;
        country?: nichandle.CountryEnum;
        description?: string;
        effective?: Partner.employeesNumberEnum;
        email?: string;
        expertises?: Partner.expertisesChoices;
        externalCertifications?: Partner.externalCertifications;
        facebook?: string;
        linkedin?: string;
        logo?: string;
        name?: string;
        OVHCertifications?: Partner.OVHCertifications;
        OVHCustomersAdvised?: Partner.OVHCustomersAdvisedEnum;
        OVHKnowledgeResources?: Partner.knowledgeResourcesRangeEnum;
        OVHProductsUsed?: Partner.OVHProductsUsed;
        OVHTechnicalAdvancedResources?: Partner.technicalAdvancedResourcesRangeEnum;
        OVHTechnicalExpertResources?: Partner.technicalExpertResourcesRangeEnum;
        partnerKnowledges?: Partner.partnerKnowledges;
        phone?: string;
        productCountries?: Partner.productCountries;
        registrationNumber?: string;
        revenue?: Partner.revenueRangeEnum;
        twitter?: string;
        website?: string;
        zipCode?: string;
    }) => Promise<Partner.Company>;
    /**
     * Contact.get
     * Update some fields on a created contact
     */
    put(path: '/partners/register/company/{companyId}/contact/{contactId}'): (params: {
        companyId: string;
        contactId: string;
        email?: string;
        facebook?: string;
        firstName?: string;
        lastName?: string;
        linkedin?: string;
        newsletter?: boolean;
        otherNics?: Partner.Nic[];
        phone?: string;
        role?: string;
        twitter?: string;
    }) => Promise<Partner.Contact>;
    /**
     * Company.list
     * Created a new company for the inscription
     */
    post(path: '/partners/register/company'): (params: {
        activitySectors?: Partner.activitySectors;
        address: string;
        city: string;
        clientKinds?: Partner.clientKinds;
        commercialName: string;
        country: nichandle.CountryEnum;
        description: string;
        email: string;
        employeesNumber: Partner.employeesNumberEnum;
        expertises?: Partner.expertisesChoices;
        externalCertifications?: Partner.externalCertifications;
        facebook?: string;
        linkedin?: string;
        logo: string;
        name: string;
        OVHCertifications?: Partner.OVHCertifications;
        OVHCustomersAdvised: Partner.OVHCustomersAdvisedEnum;
        OVHKnowledgeResources: Partner.knowledgeResourcesRangeEnum;
        OVHProductsUsed?: Partner.OVHProductsUsed;
        OVHTechnicalAdvancedResources: Partner.technicalAdvancedResourcesRangeEnum;
        OVHTechnicalExpertResources: Partner.technicalExpertResourcesRangeEnum;
        partnerKnowledges?: Partner.partnerKnowledges;
        phone: string;
        productCountries?: Partner.productCountries;
        registrationNumber?: string;
        revenue: Partner.revenueRangeEnum;
        twitter?: string;
        website: string;
        zipCode: string;
    }) => Promise<Partner.Company>;
    /**
     * Application.create
     * Submit application information for validation
     */
    post(path: '/partners/register/company/{companyId}/application'): (params: {
        companyId: string;
        termsAndConditionsOfServiceAccepted: boolean;
    }) => Promise<Partner.Application>;
    /**
     * Contact.list
     * Created a new contact for the inscription
     */
    post(path: '/partners/register/company/{companyId}/contact'): (params: {
        companyId: string;
        email: string;
        facebook?: string;
        firstName: string;
        lastName: string;
        linkedin?: string;
        newsletter?: boolean;
        otherNics?: Partner.Nic[];
        phone: string;
        role: string;
        twitter?: string;
    }) => Promise<Partner.Contact>;
    /**
     * Company.get
     * Remove a company
     */
    delete(path: '/partners/register/company/{companyId}'): (params: {
        companyId: string;
    }) => Promise<string>;
    /**
     * Contact.get
     * Remove a contact
     */
    delete(path: '/partners/register/company/{companyId}/contact/{contactId}'): (params: {
        companyId: string;
        contactId: string;
    }) => Promise<string>;
}

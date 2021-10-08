import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /partner Models
 * Source: https://ca.api.ovh.com/1.0/partner.json
 */
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
export namespace partner2 {
    /**
     * Acceptance status
     * type fullname: partner2.AcceptanceStatusEnum
     */
    export type AcceptanceStatusEnum = "Open" | "Rejected" | "RegisteredQualified" | "AdvancedQualified" | "Registered" | "Advanced" | "AdvancedHandOperated"
    /**
     * Account Entity
     * interface fullName: partner2.Account.Account
     */
    export interface Account {
        city?: string;
        companyTurnover?: number;
        country?: nichandle.CountryEnum;
        name: string;
        numberOfEmployees?: partner2.employeesNumberEnum;
        partnerType?: partner2.partnerTypeEnum;
        yearEstablished?: string;
    }
    /**
     * Area of expertise
     * type fullname: partner2.AreaOfExpertiseEnum
     */
    export type AreaOfExpertiseEnum = "HPC" | "DC" | "PC" | "Orchestration" | "BigData" | "VPS" | "SecurityCertif" | "DomainName" | "EmailMsSolution" | "WH" | "Connectivity" | "VoIP" | "PCIDSS"
    /**
     * Contact Entity
     * interface fullName: partner2.Contact.Contact
     */
    export interface Contact {
        email: string;
        firstName: string;
        jobTitle?: string;
        lastName: string;
        phone: string;
        position: partner2.PositionEnum;
    }
    /**
     * Partner Entity
     * interface fullName: partner2.Partner.Partner
     */
    export interface Partner {
        acceptanceStatus?: partner2.AcceptanceStatusEnum;
        account: partner2.Account;
        areaOfExpertise?: partner2.AreaOfExpertiseEnum[];
        contact: partner2.Contact;
        partnersProgramReason?: string;
        partnership: partner2.PartnerShip;
        salesProjection?: number;
    }
    /**
     * Partner ship evolution
     * interface fullName: partner2.PartnerShip.PartnerShip
     */
    export interface PartnerShip {
        areaOfExpertise?: partner2.AreaOfExpertiseEnum[];
        emailCommunication: boolean;
        partnersProgramReason?: string;
        salesGrowthOpportunities?: string;
        salesProjection: number;
        supportAgreementStatement: boolean;
    }
    /**
     * Job positions
     * type fullname: partner2.PositionEnum
     */
    export type PositionEnum = "ITSysAdmin" | "ITDevops" | "ITOther" | "Marketing" | "Sales" | "Purchasing" | "RD" | "AF" | "HR" | "Production" | "LC" | "Other" | "BusinessOwner" | "PreSales"
    /**
     * employeesNumber
     * type fullname: partner2.employeesNumberEnum
     */
    export type employeesNumberEnum = "1Or2" | "3To5" | "6To9" | "10To19" | "20To49" | "50To99" | "100To199" | "200To249" | "250To499" | "500to999" | "1000to1999" | "2000to4999" | "5000to9999" | "over10000"
    /**
     * partner type
     * type fullname: partner2.partnerTypeEnum
     */
    export type partnerTypeEnum = "valueAddedReseller" | "systemsIntegrator" | "iaasProvider" | "managedServiceProvider" | "softwareEditor" | "strategicConsulting" | "consultingCompany" | "trainingCompany" | "webAgency" | "telecomOperators" | "other"
}

/**
 * END API /partner Models
 */
export function proxyPartner(ovhEngine: OvhRequestable): Partner {
    return buildOvhProxy(ovhEngine, '/partner');
}
export default proxyPartner;
/**
 * Api model for /partner
 */
export interface Partner {
    /**
     * Get partner status
     * GET /partner
     */
    $get(): Promise<partner2.Partner>;
    /**
     * Register as a partner
     * POST /partner
     */
    $post(params: { acceptanceStatus?: partner2.AcceptanceStatusEnum, account: partner2.Account, areaOfExpertise?: partner2.AreaOfExpertiseEnum[], contact: partner2.Contact, partnersProgramReason?: string, partnership?: partner2.PartnerShip, salesProjection?: number }): Promise<void>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
}

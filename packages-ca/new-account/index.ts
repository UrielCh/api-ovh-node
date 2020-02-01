import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /newAccount Models
 * Source: https://ca.api.ovh.com/1.0/newAccount.json
 */
export namespace nichandle {
    // type fullname: nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    // interface fullName: nichandle.CreationRule.CreationRule
    export interface CreationRule {
        defaultValue?: string;
        examples?: string[];
        fieldName?: string;
        in?: string[];
        mandatory: boolean;
        prefix?: string;
        regularExpression?: string;
    }
    // interface fullName: nichandle.CreationRules.CreationRules
    export interface CreationRules {
        address: nichandle.CreationRule;
        area: nichandle.CreationRule;
        birthCity: nichandle.CreationRule;
        birthDay: nichandle.CreationRule;
        city: nichandle.CreationRule;
        companyNationalIdentificationNumber: nichandle.CreationRule;
        corporationType: nichandle.CreationRule;
        country: nichandle.CreationRule;
        email: nichandle.CreationRule;
        fax: nichandle.CreationRule;
        firstname: nichandle.CreationRule;
        italianSDI: nichandle.CreationRule;
        language: nichandle.CreationRule;
        legalform: nichandle.CreationRule;
        name: nichandle.CreationRule;
        nationalIdentificationNumber: nichandle.CreationRule;
        organisation: nichandle.CreationRule;
        ovhCompany: nichandle.CreationRule;
        ovhSubsidiary: nichandle.CreationRule;
        phone: nichandle.CreationRule;
        phoneCountry: nichandle.CreationRule;
        sex: nichandle.CreationRule;
        spareEmail: nichandle.CreationRule;
        vat: nichandle.CreationRule;
        zip: nichandle.CreationRule;
    }
    // type fullname: nichandle.CreationRulesActionEnum
    export type CreationRulesActionEnum = "create" | "update"
    // type fullname: nichandle.GenderEnum
    export type GenderEnum = "female" | "male"
    // type fullname: nichandle.LanguageEnum
    export type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT"
    // type fullname: nichandle.LegalFormEnum
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    // interface fullName: nichandle.NewAccountAndToken.NewAccountAndToken
    export interface NewAccountAndToken {
        consumerKey?: string;
        ovhIdentifier: string;
    }
    // type fullname: nichandle.OvhCompanyEnum
    export type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart"
    // type fullname: nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
}
export namespace order {
    // interface fullName: order.Contract.Contract
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
}

/**
 * END API /newAccount Models
 */
export function proxyNewAccount(ovhEngine: OvhRequestable): NewAccount {
    return buildOvhProxy(ovhEngine, '/newAccount');
}
export default proxyNewAccount;
/**
 * Api Proxy model
 */// Apis harmony
// path /newAccount
export interface NewAccount {
    // POST /newAccount
    $post(params: { address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country: nichandle.CountryEnum, email: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, organisation?: string, ovhCompany: nichandle.OvhCompanyEnum, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, vat?: string, zip?: string }): Promise<nichandle.NewAccountAndToken>;
    area: {
        // GET /newAccount/area
        $get(params: { country: nichandle.CountryEnum }): Promise<string[]>;
    }
    contracts: {
        // GET /newAccount/contracts
        $get(params: { company: nichandle.OvhCompanyEnum, subsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.Contract[]>;
    }
    corporationType: {
        // GET /newAccount/corporationType
        $get(params: { country: nichandle.CountryEnum }): Promise<string[]>;
    }
    countries: {
        // GET /newAccount/countries
        $get(params: { ovhCompany: nichandle.OvhCompanyEnum, ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<nichandle.CountryEnum[]>;
    }
    creationRules: {
        // GET /newAccount/creationRules
        $get(params: { country: nichandle.CountryEnum, legalform: nichandle.LegalFormEnum, ovhCompany: nichandle.OvhCompanyEnum, ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<nichandle.CreationRules>;
    }
    legalform: {
        // GET /newAccount/legalform
        $get(params: { country: nichandle.CountryEnum }): Promise<string[]>;
    }
    rules: {
        // POST /newAccount/rules
        $post(params?: { action?: nichandle.CreationRulesActionEnum, address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: nichandle.CountryEnum, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform?: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, organisation?: string, ovhCompany?: nichandle.OvhCompanyEnum, ovhSubsidiary?: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, vat?: string, zip?: string }): Promise<nichandle.CreationRule[]>;
    }
}

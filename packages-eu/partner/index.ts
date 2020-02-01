import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /partner Models
 * Source: https://eu.api.ovh.com/1.0/partner.json
 */
export namespace nichandle {
    // type fullname: nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
export namespace partner {
    // type fullname: partner.AcceptanceStatusEnum
    export type AcceptanceStatusEnum = "Open" | "Rejected" | "RegisteredQualified" | "AdvancedQualified" | "Registered" | "Advanced" | "AdvancedHandOperated"
    // interface fullName: partner.Account.Account
    export interface Account {
        city: string;
        country: nichandle.CountryEnum;
        name: string;
    }
    // type fullname: partner.AreaOfExpertiseEnum
    export type AreaOfExpertiseEnum = "HPC" | "DC" | "PC" | "Orchestration" | "BigData" | "VPS" | "SecurityCertif" | "DomainName" | "EmailMsSolution" | "WH" | "Connectivity" | "VoIP"
    // interface fullName: partner.Contact.Contact
    export interface Contact {
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        position: partner.PositionEnum;
    }
    // interface fullName: partner.Partner.Partner
    export interface Partner {
        acceptanceStatus: partner.AcceptanceStatusEnum;
        account: partner.Account;
        areaOfExpertise: partner.AreaOfExpertiseEnum[];
        contact: partner.Contact;
        partnersProgramReason: string;
        salesProjection: number;
    }
    // type fullname: partner.PositionEnum
    export type PositionEnum = "ITSysAdmin" | "ITDevops" | "ITOther" | "Marketing" | "Sales" | "Purchasing" | "RD" | "AF" | "HR" | "Production" | "LC" | "Other"
    export namespace form {
        // interface fullName: partner.form.Field.Field
        export interface Field {
            fieldConfig: partner.form.field.Config;
        }
        // interface fullName: partner.form.Schema.Schema
        export interface Schema {
            account: partner.form.schema.Account;
            areaOfExpertise: partner.form.schema.AreaOfExpertise;
            contact: partner.form.schema.Contact;
            partnersProgramReason: partner.form.Field;
            salesProjection: partner.form.Field;
        }
        export namespace field {
            // interface fullName: partner.form.field.Config.Config
            export interface Config {
                label: string;
                section: string;
                type: string;
            }
        }
        export namespace schema {
            // interface fullName: partner.form.schema.Account.Account
            export interface Account {
                city: partner.form.Field;
                country: partner.form.schema.account.Country;
                name: partner.form.Field;
            }
            // interface fullName: partner.form.schema.AreaOfExpertise.AreaOfExpertise
            export interface AreaOfExpertise {
                fieldConfig: partner.form.field.Config;
                options: partner.form.schema.areaOfExpertise.Option[];
            }
            // interface fullName: partner.form.schema.Contact.Contact
            export interface Contact {
                email: partner.form.Field;
                firstName: partner.form.Field;
                lastName: partner.form.Field;
                phone: partner.form.Field;
                position: partner.form.schema.contact.Position;
            }
            export namespace account {
                // interface fullName: partner.form.schema.account.Country.Country
                export interface Country {
                    fieldConfig: partner.form.field.Config;
                    options: partner.form.schema.account.country.Option[];
                }
                export namespace country {
                    // interface fullName: partner.form.schema.account.country.Option.Option
                    export interface Option {
                        text: string;
                        value: nichandle.CountryEnum;
                    }
                }
            }
            export namespace areaOfExpertise {
                // interface fullName: partner.form.schema.areaOfExpertise.Option.Option
                export interface Option {
                    text: string;
                    value: partner.AreaOfExpertiseEnum;
                }
            }
            export namespace contact {
                // interface fullName: partner.form.schema.contact.Position.Position
                export interface Position {
                    fieldConfig: partner.form.field.Config;
                    options: partner.form.schema.contact.position.Option[];
                }
                export namespace position {
                    // interface fullName: partner.form.schema.contact.position.Option.Option
                    export interface Option {
                        text: string;
                        value: partner.PositionEnum;
                    }
                }
            }
        }
    }
}

/**
 * END API /partner Models
 */
export function proxyPartner(ovhEngine: OvhRequestable): Partner {
    return buildOvhProxy(ovhEngine, '/partner');
}
export default proxyPartner;
/**
 * Api Proxy model
 */// Apis harmony
// path /partner
export interface Partner {
    // GET /partner
    $get(): Promise<partner.Partner>;
    // POST /partner
    $post(params: { acceptanceStatus?: partner.AcceptanceStatusEnum, account: partner.Account, areaOfExpertise: partner.AreaOfExpertiseEnum[], contact: partner.Contact, partnersProgramReason: string, salesProjection: number }): Promise<void>;
    form: {
        schema: {
            // GET /partner/form/schema
            $get(): Promise<partner.form.Schema>;
        }
    }
}

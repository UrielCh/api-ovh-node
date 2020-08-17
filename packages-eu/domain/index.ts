import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /domain Models
 * Source: https://eu.api.ovh.com/1.0/domain.json
 */
export namespace dnssec {
    /**
     * Dnssec Status
     * type fullname: dnssec.DnssecStatusEnum
     */
    export type DnssecStatusEnum = "disableInProgress" | "disabled" | "enableInProgress" | "enabled"
    /**
     * Key type
     * interface fullName: dnssec.Key.Key
     */
    export interface Key {
        algorithm: dnssec.KeyAlgorithmEnum;
        flags: dnssec.KeyFlagEnum;
        publicKey: string;
        tag: number;
    }
    /**
     * Dnssec Algorithm
                        ###
                        5  : RSASHA1
                        7  : RSASHA1-NSEC3-SHA1
                        8  : RSASHA256
                        10 : RSASHA512
                        13 : ECDSAP256SHA256
                        14 : ECDSAP384SHA384
     * type fullname: dnssec.KeyAlgorithmEnum
     */
    export type KeyAlgorithmEnum = 10 | 13 | 14 | 5 | 7 | 8
    /**
     * Dnssec Key Flag Type
                        ###
                        256 : Zone Signing Key (ZSK)
                        257 : Key  Signing Key (KSK)
     * type fullname: dnssec.KeyFlagEnum
     */
    export type KeyFlagEnum = 256 | 257
    /**
     * 
                Generated : The key has been created, but has not yet been used for anything.
                ###
                Published : The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.
                ###
                Ready     : The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.
                ###
                Active    : The key has started to be used to sign RRsets.
                ###
                Retired   : A successor key has become active and this key is no longer being used to generate RRSIGs.
                ###
                Removed   : The key has been removed from the zone.
                ###
                Revoked   : The key is published for a period with the "revoke" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.
     * type fullname: dnssec.KeyStatusEnum
     */
    export type KeyStatusEnum = "active" | "generated" | "published" | "removed" | "retired" | "revoked"
}
export namespace domain {
    /**
     * An action to execute on a domain name
     * type fullname: domain.ActionEnum
     */
    export type ActionEnum = "create" | "transfer" | "update" | "trade"
    /**
     * A contact contains the personal data of a user
     * interface fullName: domain.Contact.Contact
     */
    export interface Contact {
        accreditationCountry?: nichandle.CountryEnum;
        accreditationId?: string;
        accreditationOrganism?: string;
        accreditationYear?: number;
        address?: domain.ContactAddress;
        birthCity?: string;
        birthCountry?: nichandle.CountryEnum;
        birthDay?: string;
        birthZip?: string;
        cellPhone?: string;
        companyNationalIdentificationNumber?: string;
        email?: string;
        enterpriseId?: string;
        fax?: string;
        firstName?: string;
        gender?: nichandle.GenderEnum;
        id: number;
        insee?: string;
        language?: nichandle.LanguageEnum;
        lastName?: string;
        legalForm?: nichandle.LegalFormEnum;
        legalFormCategory?: string;
        nationalIdentificationNumber?: string;
        nationality?: nichandle.CountryEnum;
        organisationAccountable?: string;
        organisationFunding?: string;
        organisationFundingOther?: string;
        organisationName?: string;
        organisationRole?: string;
        organisationRoleOther?: string;
        organisationStaffStatus?: string;
        organisationStaffStatusOther?: string;
        organisationType?: string;
        organisationTypeOther?: string;
        phone?: string;
        registrantDocumentType?: string;
        registrantDocumentTypeOther?: string;
        roleInOrganisation?: string;
        vat?: string;
        website?: string;
    }
    /**
     * Missing description
     * interface fullName: domain.ContactAddress.ContactAddress
     */
    export interface ContactAddress {
        city?: string;
        country?: nichandle.CountryEnum;
        line1?: string;
        line2?: string;
        line3?: string;
        otherDetails?: string;
        province?: string;
        zip?: string;
    }
    /**
     * Contact type fields
     * type fullname: domain.ContactAllTypesEnum
     */
    export type ContactAllTypesEnum = "admin" | "all" | "billing" | "owner" | "tech"
    /**
     * CurrentNameServer
     * interface fullName: domain.CurrentNameServer.CurrentNameServer
     */
    export interface CurrentNameServer {
        host: string;
        id: number;
        ip?: string;
        isUsed: boolean;
        toDelete: boolean;
    }
    /**
     * A domain data
     * interface fullName: domain.Data.Data
     */
    export interface Data {
        audience?: string;
        authInfo?: string;
        isFor?: domain.IsForEnum[];
        otherPurpose?: string;
        reason?: string;
        represent?: string;
    }
    /**
     * Domain's DNSSEC Key
     * interface fullName: domain.DnssecKey.DnssecKey
     */
    export interface DnssecKey {
        algorithm: dnssec.KeyAlgorithmEnum;
        flags: dnssec.KeyFlagEnum;
        id: number;
        publicKey: string;
        status: dnssec.KeyStatusEnum;
        tag: number;
    }
    /**
     * Domain name administration
     * interface fullName: domain.Domain.Domain
     */
    export interface Domain {
        dnssecSupported: boolean;
        domain: string;
        glueRecordIpv6Supported: boolean;
        glueRecordMultiIpSupported: boolean;
        lastUpdate: string;
        nameServerType: domain.DomainNsTypeEnum;
        offer: domain.OfferEnum;
        owoSupported: boolean;
        parentService?: domain.ParentService;
        transferLockStatus: domain.DomainLockStatusEnum;
        whoisOwner: string;
    }
    /**
     * All contact type for a domain
     * type fullname: domain.DomainContactTypeEnum
     */
    export type DomainContactTypeEnum = "admin" | "billing" | "owner" | "tech"
    /**
     * Domain lock status
     * type fullname: domain.DomainLockStatusEnum
     */
    export type DomainLockStatusEnum = "locked" | "locking" | "unavailable" | "unlocked" | "unlocking"
    /**
     * Name server
     * interface fullName: domain.DomainNs.DomainNs
     */
    export interface DomainNs {
        host: string;
        ip?: string;
    }
    /**
     * DNS server state
     * type fullname: domain.DomainNsStateEnum
     */
    export type DomainNsStateEnum = "ko" | "ok"
    /**
     * DNS server status
     * interface fullName: domain.DomainNsStatus.DomainNsStatus
     */
    export interface DomainNsStatus {
        state: domain.DomainNsStateEnum;
        type: domain.DomainNsTypeEnum;
        usedSince?: string;
    }
    /**
     * DomainNS Type
     * type fullname: domain.DomainNsTypeEnum
     */
    export type DomainNsTypeEnum = "external" | "hosted"
    /**
     * All options a domain can have
     * type fullname: domain.DomainOptionEnum
     */
    export type DomainOptionEnum = "dnsAnycast"
    /**
     * All states a domain Option can be in
     * type fullname: domain.DomainOptionStateEnum
     */
    export type DomainOptionStateEnum = "released" | "subscribed"
    /**
     * Glue record
     * interface fullName: domain.GlueRecord.GlueRecord
     */
    export interface GlueRecord {
        host: string;
        ips: string[];
    }
    /**
     * Possible purposes of the domain
     * type fullname: domain.IsForEnum
     */
    export type IsForEnum = "campaign_website" | "educational_website" | "information_website" | "transactional_website" | "redirect_page" | "emails" | "other_purpose"
    /**
     * Offer
     * type fullname: domain.OfferEnum
     */
    export type OfferEnum = "diamond" | "gold" | "platinum"
    /**
     * Operation status
     * type fullname: domain.OperationStatusEnum
     */
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    /**
     * Whois optin fields
     * type fullname: domain.OptinFieldsEnum
     */
    export type OptinFieldsEnum = "address" | "city" | "country" | "email" | "fax" | "name" | "organisation" | "phone" | "province" | "zip"
    /**
     * Information about the options of a domain
     * interface fullName: domain.Option.Option
     */
    export interface Option {
        expirationDate: string;
        option: domain.DomainOptionEnum;
        state: domain.DomainOptionStateEnum;
    }
    /**
     * Obfuscate whois
     * interface fullName: domain.Owo.Owo
     */
    export interface Owo {
        field: domain.WhoisObfuscatorFieldsEnum;
    }
    /**
     * Parent service
     * interface fullName: domain.ParentService.ParentService
     */
    export interface ParentService {
        name: string;
        type: domain.ParentServiceTypeEnum;
    }
    /**
     * Parent service type enum
     * type fullname: domain.ParentServiceTypeEnum
     */
    export type ParentServiceTypeEnum = "/allDom"
    /**
     * Description not available
     * interface fullName: domain.Rule.Rule
     */
    export interface Rule {
        allowedValues?: string[];
        description: string;
        fields?: string[];
        innerConfigurations?: domain.Rule[];
        label?: string;
        required?: boolean;
        type: string;
    }
    /**
     * Tasks associated to domain
     * interface fullName: domain.Task.Task
     */
    export interface Task {
        canAccelerate: boolean;
        canCancel: boolean;
        canRelaunch: boolean;
        comment?: string;
        creationDate: string;
        doneDate?: string;
        function: string;
        id: number;
        lastUpdate: string;
        status: domain.OperationStatusEnum;
        todoDate: string;
    }
    /**
     * Representation of a UK Registrar (used for outgoing transfer)
     * interface fullName: domain.UkRegistrar.UkRegistrar
     */
    export interface UkRegistrar {
        name: string;
        tag: string;
    }
    /**
     * Whois obfuscable fields
     * type fullname: domain.WhoisObfuscatorFieldsEnum
     */
    export type WhoisObfuscatorFieldsEnum = "address" | "email" | "phone"
    export namespace configuration {
        export namespace rules {
            /**
             * A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different
             * interface fullName: domain.configuration.rules.Constraint.Constraint
             */
            export interface Constraint {
                conditions?: domain.configuration.rules.Rule;
                contexts?: domain.configuration.rules.ContextEnum[];
                operator?: domain.configuration.rules.OperatorEnum;
                value?: string;
                values?: string[];
            }
            /**
             * Used in rule to tell if rule (or part of the rule) is applicable for a given context
             * type fullname: domain.configuration.rules.ContextEnum
             */
            export type ContextEnum = "update" | "create" | "transfer" | "trade" | "order" | "premium" | "accept_conditions" | "claims" | "reason" | "protected_code"
            /**
             * Operator use in configuration rule to check content of a field
             * type fullname: domain.configuration.rules.OperatorEnum
             */
            export type OperatorEnum = "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "maxlength" | "minlength" | "between" | "contains" | "notcontains" | "empty" | "notempty" | "match" | "shouldbetrue" | "required" | "readonly"
            /**
             * A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different
             * interface fullName: domain.configuration.rules.Rule.Rule
             */
            export interface Rule {
                and?: domain.configuration.rules.Rule[];
                conditions?: domain.configuration.rules.Rule;
                constraints?: domain.configuration.rules.Constraint[];
                contexts?: domain.configuration.rules.ContextEnum[];
                description?: string;
                fields?: domain.configuration.rules.Rule;
                label?: string;
                or?: domain.configuration.rules.Rule[];
                placeholder?: string;
                type?: domain.configuration.rules.TypeEnum;
            }
            /**
             * A rule data contains the fields that must be validated against a rule
             * interface fullName: domain.configuration.rules.RuleData.RuleData
             */
            export interface RuleData {
                adminAccount?: nichandle.Nichandle;
                domain?: domain.Data;
                extras?: domain.configuration.rules.RuleExtraData;
                owner?: domain.Contact;
                techAccount?: nichandle.Nichandle;
            }
            /**
             * The extra data contain additional rule data fields
             * interface fullName: domain.configuration.rules.RuleExtraData.RuleExtraData
             */
            export interface RuleExtraData {
                acceptCondition?: boolean;
                authInfo?: string;
            }
            /**
             * Type of rule configuration
             * type fullname: domain.configuration.rules.TypeEnum
             */
            export type TypeEnum = "string" | "text" | "bool" | "number" | "json" | "contact" | "domain" | "date_ISO8601"
        }
    }
    export namespace configurations {
        /**
         * Representation of the domain custom fields
         * interface fullName: domain.configurations.CustomFields.CustomFields
         */
        export interface CustomFields {
            audience?: string;
            authInfo?: string;
            isFor?: domain.IsForEnum[];
            otherPurpose?: string;
            reason?: string;
            represent?: string;
        }
        /**
         * Representation of the obfuscated emails configuration
         * interface fullName: domain.configurations.ObfuscatedEmails.ObfuscatedEmails
         */
        export interface ObfuscatedEmails {
            type: domain.ContactAllTypesEnum;
            value: string;
        }
        /**
         * Representation of the optin configuration
         * interface fullName: domain.configurations.Optin.Optin
         */
        export interface Optin {
            fields: domain.OptinFieldsEnum[];
            type: domain.ContactAllTypesEnum;
        }
    }
    export namespace data {
        /**
         * Representation of an Inpi additional information for a corporation
         * interface fullName: domain.data.AfnicCorporationTrademarkContact.AfnicCorporationTrademarkContact
         */
        export interface AfnicCorporationTrademarkContact {
            contactId: number;
            id: number;
            inpiNumber: string;
            inpiTrademarkOwner: string;
        }
        /**
         * Representation of a Association additional information
         * interface fullName: domain.data.AssociationContact.AssociationContact
         */
        export interface AssociationContact {
            contactId: number;
            declarationDate: string;
            id: number;
            publicationDate: string;
            publicationNumber: string;
            publicationPageNumber: string;
        }
        /**
         * Representation of an .pro Contact Resource
         * interface fullName: domain.data.ProContact.ProContact
         */
        export interface ProContact {
            authority: string;
            authorityWebsite: string;
            id: number;
            jobDescription: string;
            licenseNumber: string;
        }
        /**
         * Representation of a SMD Resource file
         * interface fullName: domain.data.Smd.Smd
         */
        export interface Smd {
            data: string;
            id: number;
            notAfter?: string;
            notBefore?: string;
            protectedLabels: domain.data.SmdLabel[];
            smdId?: string;
        }
        /**
         * Representation of a protected label
         * interface fullName: domain.data.SmdLabel.SmdLabel
         */
        export interface SmdLabel {
            label: string;
            trademark: string;
        }
        export namespace claimNotice {
            /**
             * Address for a claim notice holder
             * interface fullName: domain.data.claimNotice.Address.Address
             */
            export interface Address {
                city?: string;
                countryCode?: nichandle.CountryEnum;
                fax?: string;
                faxExtension?: string;
                postalCode?: string;
                stateOrProvince?: string;
                streets: string[];
                voice?: string;
                voiceExtension?: string;
            }
            /**
             * Definition of claim notices applying to a domain name
             * interface fullName: domain.data.claimNotice.ClaimNotice.ClaimNotice
             */
            export interface ClaimNotice {
                claims?: domain.data.claimNotice.ClaimNoticeDecision[];
                endingDate: string;
                id: string;
                label: string;
                startingDate?: string;
                type?: domain.data.claimNotice.ClaimNoticeTypeEnum;
            }
            /**
             * Definition of a single claim notice
             * interface fullName: domain.data.claimNotice.ClaimNoticeDecision.ClaimNoticeDecision
             */
            export interface ClaimNoticeDecision {
                classifications: domain.data.claimNotice.Classification[];
                courtDecisions: domain.data.claimNotice.CourtDecision[];
                goodsAndServices: string;
                jurisdiction: string;
                jurisdictionCountryCode: string;
                markName: string;
                trademarkContacts: domain.data.claimNotice.Contact[];
                trademarkHolders: domain.data.claimNotice.Contact[];
                trademarkUDRP: domain.data.claimNotice.UDRP[];
            }
            /**
             * Type of claim notice
             * type fullname: domain.data.claimNotice.ClaimNoticeTypeEnum
             */
            export type ClaimNoticeTypeEnum = "UK" | "TRADEMARK"
            /**
             * Definition of a trademark claim notice classification
             * interface fullName: domain.data.claimNotice.Classification.Classification
             */
            export interface Classification {
                description: string;
                number: string;
            }
            /**
             * Contact definition of a claim notice holder
             * interface fullName: domain.data.claimNotice.Contact.Contact
             */
            export interface Contact {
                address: domain.data.claimNotice.Address;
                email?: string;
                entitlement?: string;
                name?: string;
                organisation?: string;
                type?: string;
            }
            /**
             * Definition of a court decision
             * interface fullName: domain.data.claimNotice.CourtDecision.CourtDecision
             */
            export interface CourtDecision {
                countryCode: string;
                courtName: string;
                referenceNumber: string;
                regions: string[];
            }
            /**
             * Definition of a UDRP procedure
             * interface fullName: domain.data.claimNotice.UDRP.UDRP
             */
            export interface UDRP {
                caseNumber: string;
                udrpProvider: string;
            }
        }
    }
    export namespace rules {
        /**
         * Representation of the optin rule
         * interface fullName: domain.rules.Optin.Optin
         */
        export interface Optin {
            fields: domain.OptinFieldsEnum[];
            type: domain.ContactAllTypesEnum;
        }
    }
    export namespace services {
        export namespace options {
            /**
             * Data of a domain option
             * interface fullName: domain.services.options.Option.Option
             */
            export interface Option {
                serviceName: string;
            }
            /**
             * Representation of the domain options
             * interface fullName: domain.services.options.Options.Options
             */
            export interface Options {
                hosting?: domain.services.options.Option;
                offer?: domain.services.options.Option;
                zone?: domain.services.options.Option;
            }
        }
    }
    export namespace zone {
        /**
         * DNS Anycast service
         * interface fullName: domain.zone.Anycast.Anycast
         */
        export interface Anycast {
            name: string;
        }
        /**
         * Manage Dnssec for this zone
         * interface fullName: domain.zone.Dnssec.Dnssec
         */
        export interface Dnssec {
            status: dnssec.DnssecStatusEnum;
        }
        /**
         * Manage DynHost login
         * interface fullName: domain.zone.DynHostLogin.DynHostLogin
         */
        export interface DynHostLogin {
            login: string;
            subDomain: string;
            zone: string;
        }
        /**
         * DynHost record
         * interface fullName: domain.zone.DynHostRecord.DynHostRecord
         */
        export interface DynHostRecord {
            id: number;
            ip: string;
            subDomain?: string;
            ttl?: number;
            zone: string;
        }
        /**
         * Zone resource records
         * interface fullName: domain.zone.Record.Record
         */
        export interface Record {
            fieldType: zoneNamedResolutionFieldTypeEnum;
            id: number;
            subDomain?: string;
            target: string;
            ttl?: number;
            zone: string;
        }
        /**
         * Redirection
         * interface fullName: domain.zone.Redirection.Redirection
         */
        export interface Redirection {
            description?: string;
            id: number;
            keywords?: string;
            subDomain?: string;
            target: string;
            title?: string;
            type: zoneRedirectionTypeEnum;
            zone: string;
        }
        /**
         * Zone Start Of Authority
         * interface fullName: domain.zone.Soa.Soa
         */
        export interface Soa {
            email: string;
            expire: number;
            nxDomainTtl: number;
            refresh: number;
            serial: number;
            server: string;
            ttl: number;
        }
        /**
         * Tasks associated to a zone
         * interface fullName: domain.zone.Task.Task
         */
        export interface Task {
            canAccelerate: boolean;
            canCancel: boolean;
            canRelaunch: boolean;
            comment?: string;
            creationDate: string;
            doneDate?: string;
            function: string;
            id: number;
            lastUpdate: string;
            status: domain.OperationStatusEnum;
            todoDate: string;
        }
        /**
         * Zone dns Management
         * interface fullName: domain.zone.Zone.Zone
         */
        export interface Zone {
            dnssecSupported: boolean;
            hasDnsAnycast: boolean;
            lastUpdate: string;
            name: string;
            nameServers: string[];
        }
        /**
         * Zone restore point
         * interface fullName: domain.zone.ZoneRestorePoint.ZoneRestorePoint
         */
        export interface ZoneRestorePoint {
            creationDate: string;
            zoneFileUrl: string;
        }
    }
}
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    /**
     * Customer currency
     * interface fullName: nichandle.Currency.Currency
     */
    export interface Currency {
        code: string;
        symbol: string;
    }
    /**
     * All genders a person can choose
     * type fullname: nichandle.GenderEnum
     */
    export type GenderEnum = "female" | "male"
    /**
     * Languages a nichandle can choose
     * type fullname: nichandle.LanguageEnum
     */
    export type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT"
    /**
     * Legal forms a nichandle can be registered as
     * type fullname: nichandle.LegalFormEnum
     */
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    /**
     * Details about your OVH identifier
     * interface fullName: nichandle.Nichandle.Nichandle
     */
    export interface Nichandle {
        address?: string;
        area?: string;
        birthCity?: string;
        birthDay?: string;
        city?: string;
        companyNationalIdentificationNumber?: string;
        corporationType?: string;
        country: nichandle.CountryEnum;
        currency: nichandle.Currency;
        customerCode?: string;
        email: string;
        fax?: string;
        firstname?: string;
        italianSDI?: string;
        language?: nichandle.LanguageEnum;
        legalform: nichandle.LegalFormEnum;
        name?: string;
        nationalIdentificationNumber?: string;
        nichandle: string;
        organisation?: string;
        ovhCompany: nichandle.OvhCompanyEnum;
        ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
        phone?: string;
        phoneCountry?: nichandle.CountryEnum;
        sex?: nichandle.GenderEnum;
        spareEmail?: string;
        state: nichandle.StateEnum;
        vat?: string;
        zip?: string;
    }
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhCompanyEnum
     */
    export type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart"
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN"
    /**
     * States a nichandle can be in
     * type fullname: nichandle.StateEnum
     */
    export type StateEnum = "complete" | "incomplete"
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}
export namespace zone {
    /**
     * Zone capabilities
     * interface fullName: zone.Capabilities.Capabilities
     */
    export interface Capabilities {
        dynHost: boolean;
    }
    /**
     * Resource record fieldType
     * type fullname: zone.NamedResolutionFieldTypeEnum
     */
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
    /**
     * Redirection type enum : visible -> Redirection by http code 302, visiblePermanent -> Redirection by http code 301, invisible -> Redirection by html frame
     * type fullname: zone.RedirectionTypeEnum
     */
    export type RedirectionTypeEnum = "invisible" | "visible" | "visiblePermanent"
    /**
     * Resource record
     * interface fullName: zone.ResetRecord.ResetRecord
     */
    export interface ResetRecord {
        fieldType: zone.ResettableNamedResolutionFieldTypeEnum;
        target: string;
    }
    /**
     * Resource record type
     * type fullname: zone.ResettableNamedResolutionFieldTypeEnum
     */
    export type ResettableNamedResolutionFieldTypeEnum = "A" | "MX"
    /**
     * Zone status
     * interface fullName: zone.Status.Status
     */
    export interface Status {
        errors?: string[];
        isDeployed: boolean;
        warnings?: string[];
    }
}

/**
 * END API /domain Models
 */
export function proxyDomain(ovhEngine: OvhRequestable): Domain {
    return buildOvhProxy(ovhEngine, '/domain');
}
export default proxyDomain;
/**
 * Api model for /domain
 */
export interface Domain {
    /**
     * List available services
     * GET /domain
     */
    $get(params?: { whoisOwner?: string }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    configurationRule: {
        /**
         * Get configuration rule applied for a domain in a given action
         * GET /domain/configurationRule
         */
        $get(params: { action: domain.ActionEnum, domain: string }): Promise<domain.configuration.rules.Rule>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        check: {
            /**
             * Validate a rule data for a specified domain
             * POST /domain/configurationRule/check
             */
            $post(params?: { adminAccount?: nichandle.Nichandle, domain?: domain.Data, extras?: domain.configuration.rules.RuleExtraData, owner?: domain.Contact, techAccount?: nichandle.Nichandle }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    contact: {
        /**
         * List all contacts
         * GET /domain/contact
         */
        $get(): Promise<domain.Contact[]>;
        /**
         * Create a contact
         * POST /domain/contact
         */
        $post(params?: { accreditationCountry?: nichandle.CountryEnum, accreditationId?: string, accreditationOrganism?: string, accreditationYear?: number, address?: domain.ContactAddress, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, enterpriseId?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, id?: number, insee?: string, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, legalFormCategory?: string, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationAccountable?: string, organisationFunding?: string, organisationFundingOther?: string, organisationName?: string, organisationRole?: string, organisationRoleOther?: string, organisationStaffStatus?: string, organisationStaffStatusOther?: string, organisationType?: string, organisationTypeOther?: string, phone?: string, registrantDocumentType?: string, registrantDocumentTypeOther?: string, roleInOrganisation?: string, vat?: string, website?: string }): Promise<domain.Contact>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(contactId: number): {
            /**
             * Get details about a contact
             * GET /domain/contact/{contactId}
             */
            $get(): Promise<domain.Contact>;
            /**
             * Update a contact
             * PUT /domain/contact/{contactId}
             */
            $put(params?: { accreditationCountry?: nichandle.CountryEnum, accreditationId?: string, accreditationOrganism?: string, accreditationYear?: number, address?: domain.ContactAddress, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, enterpriseId?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, id?: number, insee?: string, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, legalFormCategory?: string, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationAccountable?: string, organisationFunding?: string, organisationFundingOther?: string, organisationName?: string, organisationRole?: string, organisationRoleOther?: string, organisationStaffStatus?: string, organisationStaffStatusOther?: string, organisationType?: string, organisationTypeOther?: string, phone?: string, registrantDocumentType?: string, registrantDocumentTypeOther?: string, roleInOrganisation?: string, vat?: string, website?: string }): Promise<domain.Contact>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    data: {
        afnicAssociationInformation: {
            /**
             * Retrieve all association information according to Afnic
             * GET /domain/data/afnicAssociationInformation
             */
            $get(): Promise<number[]>;
            /**
             * Post a new association information according to Afnic
             * POST /domain/data/afnicAssociationInformation
             */
            $post(params: { contactId: number, declarationDate: string, publicationDate: string, publicationNumber: string, publicationPageNumber: string }): Promise<domain.data.AssociationContact>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(associationInformationId: number): {
                /**
                 * Retrieve an association information according to Afnic
                 * GET /domain/data/afnicAssociationInformation/{associationInformationId}
                 */
                $get(): Promise<domain.data.AssociationContact>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        afnicCorporationTrademarkInformation: {
            /**
             * Retrieve all corporation trademark information according to Afnic
             * GET /domain/data/afnicCorporationTrademarkInformation
             */
            $get(): Promise<number[]>;
            /**
             * Post a new corporation trademark information according to Afnic
             * POST /domain/data/afnicCorporationTrademarkInformation
             */
            $post(params: { contactId: number, inpiNumber: string, inpiTrademarkOwner: string }): Promise<domain.data.AfnicCorporationTrademarkContact>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(afnicCorporationTrademarkId: number): {
                /**
                 * Retrieve a corporation trademark information according to Afnic
                 * GET /domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}
                 */
                $get(): Promise<domain.data.AfnicCorporationTrademarkContact>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        claimNotice: {
            /**
             * Retrieve claim notices associated to a domain
             * GET /domain/data/claimNotice
             */
            $get(params: { domain: string }): Promise<domain.data.claimNotice.ClaimNotice>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        extension: {
            /**
             * List all the extensions for a specific country
             * GET /domain/data/extension
             */
            $get(params?: { country?: nichandle.OvhSubsidiaryEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        proContact: {
            /**
             * Retrieve all your Pro Contact
             * GET /domain/data/proContact
             */
            $get(): Promise<number[]>;
            /**
             * Post new information about .pro contact information
             * POST /domain/data/proContact
             */
            $post(params: { authority: string, authorityWebsite: string, contactId?: number, jobDescription: string, licenseNumber: string }): Promise<domain.data.ProContact>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(proContactId: number): {
                /**
                 * Retrieve information about a Pro Contact
                 * GET /domain/data/proContact/{proContactId}
                 */
                $get(): Promise<domain.data.ProContact>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        smd: {
            /**
             * List all your SMD files
             * GET /domain/data/smd
             */
            $get(params?: { protectedLabels_label?: string }): Promise<number[]>;
            /**
             * Post a new SMD file
             * POST /domain/data/smd
             */
            $post(params: { data: string }): Promise<domain.data.Smd>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(smdId: number): {
                /**
                 * Delete a SMD file
                 * DELETE /domain/data/smd/{smdId}
                 */
                $delete(): Promise<void>;
                /**
                 * Retrieve information about a SMD file
                 * GET /domain/data/smd/{smdId}
                 */
                $get(): Promise<domain.data.Smd>;
                /**
                 * Modify an existing SMD file
                 * PUT /domain/data/smd/{smdId}
                 */
                $put(params: { data: string }): Promise<domain.data.Smd>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
    rules: {
        /**
         * List all the rules for a specific cartId/itemId
         * GET /domain/rules
         */
        $get(params: { cartId: string, itemId: number }): Promise<domain.Rule>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    zone: {
        /**
         * List available services
         * GET /domain/zone
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(zoneName: string): {
            /**
             * Get this object properties
             * GET /domain/zone/{zoneName}
             */
            $get(): Promise<domain.zone.Zone>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            capabilities: {
                /**
                 * Zone capabilities
                 * GET /domain/zone/{zoneName}/capabilities
                 */
                $get(): Promise<zone.Capabilities>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /domain/zone/{zoneName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /domain/zone/{zoneName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            dnssec: {
                /**
                 * Disable Dnssec
                 * DELETE /domain/zone/{zoneName}/dnssec
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /domain/zone/{zoneName}/dnssec
                 */
                $get(): Promise<domain.zone.Dnssec>;
                /**
                 * Enable Dnssec
                 * POST /domain/zone/{zoneName}/dnssec
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            dynHost: {
                login: {
                    /**
                     * DynHost' logins
                     * GET /domain/zone/{zoneName}/dynHost/login
                     */
                    $get(params?: { login?: string, subDomain?: string }): Promise<string[]>;
                    /**
                     * Create a new DynHost login
                     * POST /domain/zone/{zoneName}/dynHost/login
                     */
                    $post(params: { loginSuffix: string, password: string, subDomain: string }): Promise<domain.zone.DynHostLogin>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(login: string): {
                        /**
                         * Delete a DynHost login
                         * DELETE /domain/zone/{zoneName}/dynHost/login/{login}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /domain/zone/{zoneName}/dynHost/login/{login}
                         */
                        $get(): Promise<domain.zone.DynHostLogin>;
                        /**
                         * Alter this object properties
                         * PUT /domain/zone/{zoneName}/dynHost/login/{login}
                         */
                        $put(params?: { login?: string, subDomain?: string, zone?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changePassword: {
                            /**
                             * Change password of the DynHost login
                             * POST /domain/zone/{zoneName}/dynHost/login/{login}/changePassword
                             */
                            $post(params: { password: string }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
                record: {
                    /**
                     * DynHost' records
                     * GET /domain/zone/{zoneName}/dynHost/record
                     */
                    $get(params?: { subDomain?: string }): Promise<number[]>;
                    /**
                     * Create a new DynHost record (Don't forget to refresh the zone)
                     * POST /domain/zone/{zoneName}/dynHost/record
                     */
                    $post(params: { ip: string, subDomain?: string }): Promise<domain.zone.DynHostRecord>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete a DynHost record (Don't forget to refresh the zone)
                         * DELETE /domain/zone/{zoneName}/dynHost/record/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /domain/zone/{zoneName}/dynHost/record/{id}
                         */
                        $get(): Promise<domain.zone.DynHostRecord>;
                        /**
                         * Alter this object properties
                         * PUT /domain/zone/{zoneName}/dynHost/record/{id}
                         */
                        $put(params?: { id?: number, ip?: string, subDomain?: string, ttl?: number, zone?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            export: {
                /**
                 * Export zone
                 * GET /domain/zone/{zoneName}/export
                 */
                $get(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            history: {
                /**
                 * Zone restore points
                 * GET /domain/zone/{zoneName}/history
                 */
                $get(params?: { creationDate_from?: string, creationDate_to?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(creationDate: string): {
                    /**
                     * Get this object properties
                     * GET /domain/zone/{zoneName}/history/{creationDate}
                     */
                    $get(): Promise<domain.zone.ZoneRestorePoint>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    restore: {
                        /**
                         * Restore the DNS zone
                         * POST /domain/zone/{zoneName}/history/{creationDate}/restore
                         */
                        $post(): Promise<domain.zone.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            import: {
                /**
                 * Import zone
                 * POST /domain/zone/{zoneName}/import
                 */
                $post(params: { zoneFile: string }): Promise<domain.zone.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            record: {
                /**
                 * Records of the zone
                 * GET /domain/zone/{zoneName}/record
                 */
                $get(params?: { fieldType?: zoneNamedResolutionFieldTypeEnum, subDomain?: string }): Promise<number[]>;
                /**
                 * Create a new DNS record (Don't forget to refresh the zone)
                 * POST /domain/zone/{zoneName}/record
                 */
                $post(params: { fieldType: zoneNamedResolutionFieldTypeEnum, subDomain?: string, target: string, ttl?: number }): Promise<domain.zone.Record>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Delete a DNS record (Don't forget to refresh the zone)
                     * DELETE /domain/zone/{zoneName}/record/{id}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /domain/zone/{zoneName}/record/{id}
                     */
                    $get(): Promise<domain.zone.Record>;
                    /**
                     * Alter this object properties
                     * PUT /domain/zone/{zoneName}/record/{id}
                     */
                    $put(params?: { fieldType?: zoneNamedResolutionFieldTypeEnum, id?: number, subDomain?: string, target?: string, ttl?: number, zone?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            redirection: {
                /**
                 * Redirections
                 * GET /domain/zone/{zoneName}/redirection
                 */
                $get(params?: { subDomain?: string }): Promise<number[]>;
                /**
                 * Create a new redirection (Don't forget to refresh the zone)
                 * POST /domain/zone/{zoneName}/redirection
                 */
                $post(params: { description?: string, keywords?: string, subDomain?: string, target: string, title?: string, type: zoneRedirectionTypeEnum }): Promise<domain.zone.Redirection>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Delete a redirection (Don't forget to refresh the zone)
                     * DELETE /domain/zone/{zoneName}/redirection/{id}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /domain/zone/{zoneName}/redirection/{id}
                     */
                    $get(): Promise<domain.zone.Redirection>;
                    /**
                     * Alter this object properties
                     * PUT /domain/zone/{zoneName}/redirection/{id}
                     */
                    $put(params?: { description?: string, id?: number, keywords?: string, subDomain?: string, target?: string, title?: string, type?: zoneRedirectionTypeEnum, zone?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            refresh: {
                /**
                 * Apply zone modification on DNS servers
                 * POST /domain/zone/{zoneName}/refresh
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            reset: {
                /**
                 * Reset the DNS zone
                 * POST /domain/zone/{zoneName}/reset
                 */
                $post(params?: { DnsRecords?: zone.ResetRecord[], minimized?: boolean }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /domain/zone/{zoneName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /domain/zone/{zoneName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            soa: {
                /**
                 * Get this object properties
                 * GET /domain/zone/{zoneName}/soa
                 */
                $get(): Promise<domain.zone.Soa>;
                /**
                 * Alter this object properties
                 * PUT /domain/zone/{zoneName}/soa
                 */
                $put(params?: { email?: string, expire?: number, nxDomainTtl?: number, refresh?: number, serial?: number, server?: string, ttl?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            status: {
                /**
                 * Zone status
                 * GET /domain/zone/{zoneName}/status
                 */
                $get(): Promise<zone.Status>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * Domain pending tasks
                 * GET /domain/zone/{zoneName}/task
                 */
                $get(params?: { function_?: string, status?: domain.OperationStatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /domain/zone/{zoneName}/task/{id}
                     */
                    $get(): Promise<domain.zone.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    accelerate: {
                        /**
                         * Accelerate the task
                         * POST /domain/zone/{zoneName}/task/{id}/accelerate
                         */
                        $post(): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    cancel: {
                        /**
                         * Cancel the task
                         * POST /domain/zone/{zoneName}/task/{id}/cancel
                         */
                        $post(): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    relaunch: {
                        /**
                         * Relaunch the task
                         * POST /domain/zone/{zoneName}/task/{id}/relaunch
                         */
                        $post(): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /domain/zone/{zoneName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /domain/{serviceName}
         */
        $get(): Promise<domain.Domain>;
        /**
         * Alter this object properties
         * PUT /domain/{serviceName}
         */
        $put(params?: { dnssecSupported?: boolean, domain?: string, glueRecordIpv6Supported?: boolean, glueRecordMultiIpSupported?: boolean, lastUpdate?: string, nameServerType?: domain.DomainNsTypeEnum, offer?: domain.OfferEnum, owoSupported?: boolean, parentService?: domain.ParentService, transferLockStatus?: domain.DomainLockStatusEnum, whoisOwner?: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        activateZone: {
            /**
             * Activate the DNS zone for this domain
             * POST /domain/{serviceName}/activateZone
             */
            $post(params?: { minimized?: boolean }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        authInfo: {
            /**
             * Return authInfo code if the domain is unlocked
             * GET /domain/{serviceName}/authInfo
             */
            $get(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /domain/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        configurations: {
            obfuscatedEmails: {
                /**
                 * Retrieve obfuscated emails configuration
                 * GET /domain/{serviceName}/configurations/obfuscatedEmails
                 */
                $get(): Promise<domain.configurations.ObfuscatedEmails[]>;
                /**
                 * Save a new obfuscated emails configuration
                 * PUT /domain/{serviceName}/configurations/obfuscatedEmails
                 */
                $put(params: { contacts: domain.ContactAllTypesEnum[] }): Promise<domain.configurations.ObfuscatedEmails[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                refresh: {
                    /**
                     * Refresh an obfuscated emails configuration
                     * POST /domain/{serviceName}/configurations/obfuscatedEmails/refresh
                     */
                    $post(params: { contacts: domain.ContactAllTypesEnum[] }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            optin: {
                /**
                 * Retrieve optin configuration
                 * GET /domain/{serviceName}/configurations/optin
                 */
                $get(): Promise<domain.configurations.Optin[]>;
                /**
                 * Save a new optin configuration
                 * PUT /domain/{serviceName}/configurations/optin
                 */
                $put(params: { optin: domain.configurations.Optin[] }): Promise<domain.configurations.Optin[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        dsRecord: {
            /**
             * List of domain's DS Records
             * GET /domain/{serviceName}/dsRecord
             */
            $get(params?: { flags?: dnssec.KeyFlagEnum, status?: dnssec.KeyStatusEnum }): Promise<number[]>;
            /**
             * Update DS records
             * POST /domain/{serviceName}/dsRecord
             */
            $post(params: { keys: dnssec.Key[] }): Promise<domain.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /domain/{serviceName}/dsRecord/{id}
                 */
                $get(): Promise<domain.DnssecKey>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        email: {
            obfuscated: {
                refresh: {
                    /**
                     * Regenerate the obfuscated email address
                     * POST /domain/{serviceName}/email/obfuscated/refresh
                     */
                    $post(params: { contactType: domain.DomainContactTypeEnum[] }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
        }
        glueRecord: {
            /**
             * List of glue record
             * GET /domain/{serviceName}/glueRecord
             */
            $get(params?: { host?: string }): Promise<string[]>;
            /**
             * Create a glue record
             * POST /domain/{serviceName}/glueRecord
             */
            $post(params: { host: string, ips: string[] }): Promise<domain.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(host: string): {
                /**
                 * Delete the glue record
                 * DELETE /domain/{serviceName}/glueRecord/{host}
                 */
                $delete(): Promise<domain.Task>;
                /**
                 * Get this object properties
                 * GET /domain/{serviceName}/glueRecord/{host}
                 */
                $get(): Promise<domain.GlueRecord>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                update: {
                    /**
                     * Update the glue record
                     * POST /domain/{serviceName}/glueRecord/{host}/update
                     */
                    $post(params: { ips: string[] }): Promise<domain.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        nameServer: {
            /**
             * List of current name servers
             * GET /domain/{serviceName}/nameServer
             */
            $get(): Promise<number[]>;
            /**
             * Add new name server
             * POST /domain/{serviceName}/nameServer
             */
            $post(params: { nameServer: domain.DomainNs[] }): Promise<domain.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete a name server
                 * DELETE /domain/{serviceName}/nameServer/{id}
                 */
                $delete(): Promise<domain.Task>;
                /**
                 * Get this object properties
                 * GET /domain/{serviceName}/nameServer/{id}
                 */
                $get(): Promise<domain.CurrentNameServer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                status: {
                    /**
                     * Get name server status
                     * POST /domain/{serviceName}/nameServer/{id}/status
                     */
                    $post(): Promise<domain.DomainNsStatus>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        nameServers: {
            update: {
                /**
                 * Update DNS servers
                 * POST /domain/{serviceName}/nameServers/update
                 */
                $post(params: { nameServers: domain.DomainNs[] }): Promise<domain.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        option: {
            /**
             * List of domain options
             * GET /domain/{serviceName}/option
             */
            $get(): Promise<domain.DomainOptionEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(option: domain.DomainOptionEnum): {
                /**
                 * Release a given option
                 * DELETE /domain/{serviceName}/option/{option}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /domain/{serviceName}/option/{option}
                 */
                $get(): Promise<domain.Option>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        options: {
            /**
             * Retrieve data about the options associated to a domain
             * GET /domain/{serviceName}/options
             */
            $get(): Promise<domain.services.options.Options>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        owo: {
            /**
             * List of whois obfuscators
             * GET /domain/{serviceName}/owo
             */
            $get(params?: { field?: domain.WhoisObfuscatorFieldsEnum }): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            /**
             * Add whois obfuscators
             * POST /domain/{serviceName}/owo
             */
            $post(params: { fields: domain.WhoisObfuscatorFieldsEnum[] }): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(field: domain.WhoisObfuscatorFieldsEnum): {
                /**
                 * Delete a whois obfuscator
                 * DELETE /domain/{serviceName}/owo/{field}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /domain/{serviceName}/owo/{field}
                 */
                $get(): Promise<domain.Owo>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        rules: {
            emailsObfuscation: {
                /**
                 * Retrieve emails obfuscation rule
                 * GET /domain/{serviceName}/rules/emailsObfuscation
                 */
                $get(): Promise<domain.ContactAllTypesEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            optin: {
                /**
                 * Retrieve optin rule
                 * GET /domain/{serviceName}/rules/optin
                 */
                $get(): Promise<domain.rules.Optin[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /domain/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /domain/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        task: {
            /**
             * Domain pending tasks
             * GET /domain/{serviceName}/task
             */
            $get(params?: { function_?: string, status?: domain.OperationStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /domain/{serviceName}/task/{id}
                 */
                $get(): Promise<domain.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                accelerate: {
                    /**
                     * Accelerate the task
                     * POST /domain/{serviceName}/task/{id}/accelerate
                     */
                    $post(): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                cancel: {
                    /**
                     * Cancel the task
                     * POST /domain/{serviceName}/task/{id}/cancel
                     */
                    $post(): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                relaunch: {
                    /**
                     * Relaunch the task
                     * POST /domain/{serviceName}/task/{id}/relaunch
                     */
                    $post(): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        ukOutgoingTransfer: {
            /**
             * Schedule an outgoing transfer task for this domain (.uk only)
             * POST /domain/{serviceName}/ukOutgoingTransfer
             */
            $post(params: { tag: string }): Promise<domain.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        ukRegistrars: {
            /**
             * Return the list of all .uk registrars
             * GET /domain/{serviceName}/ukRegistrars
             */
            $get(): Promise<domain.UkRegistrar[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type zoneNamedResolutionFieldTypeEnum = zone.NamedResolutionFieldTypeEnum;
type zoneRedirectionTypeEnum = zone.RedirectionTypeEnum;

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /domain Models
 * Source: https://eu.api.ovh.com/1.0/domain.json
 */
export namespace dnssec {
    // type fullname: dnssec.DnssecStatusEnum
    export type DnssecStatusEnum = "disableInProgress" | "disabled" | "enableInProgress" | "enabled"
    // interface fullName: dnssec.Key.Key
    export interface Key {
        algorithm: dnssec.KeyAlgorithmEnum;
        flags: dnssec.KeyFlagEnum;
        publicKey: string;
        tag: number;
    }
    // type fullname: dnssec.KeyAlgorithmEnum
    export type KeyAlgorithmEnum = 10 | 13 | 14 | 5 | 7 | 8
    // type fullname: dnssec.KeyFlagEnum
    export type KeyFlagEnum = 256 | 257
    // type fullname: dnssec.KeyStatusEnum
    export type KeyStatusEnum = "active" | "generated" | "published" | "removed" | "retired" | "revoked"
}
export namespace domain {
    // type fullname: domain.ContactAllTypesEnum
    export type ContactAllTypesEnum = "admin" | "all" | "billing" | "owner" | "tech"
    // interface fullName: domain.CurrentNameServer.CurrentNameServer
    export interface CurrentNameServer {
        host: string;
        id: number;
        ip?: string;
        isUsed: boolean;
        toDelete: boolean;
    }
    // interface fullName: domain.DnssecKey.DnssecKey
    export interface DnssecKey {
        algorithm: dnssec.KeyAlgorithmEnum;
        flags: dnssec.KeyFlagEnum;
        id: number;
        publicKey: string;
        status: dnssec.KeyStatusEnum;
        tag: number;
    }
    // interface fullName: domain.Domain.Domain
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
    // type fullname: domain.DomainContactTypeEnum
    export type DomainContactTypeEnum = "admin" | "billing" | "owner" | "tech"
    // type fullname: domain.DomainLockStatusEnum
    export type DomainLockStatusEnum = "locked" | "locking" | "unavailable" | "unlocked" | "unlocking"
    // interface fullName: domain.DomainNs.DomainNs
    export interface DomainNs {
        host: string;
        ip?: string;
    }
    // type fullname: domain.DomainNsStateEnum
    export type DomainNsStateEnum = "ko" | "ok"
    // interface fullName: domain.DomainNsStatus.DomainNsStatus
    export interface DomainNsStatus {
        state: domain.DomainNsStateEnum;
        type: domain.DomainNsTypeEnum;
        usedSince?: string;
    }
    // type fullname: domain.DomainNsTypeEnum
    export type DomainNsTypeEnum = "external" | "hosted"
    // type fullname: domain.DomainOptionEnum
    export type DomainOptionEnum = "dnsAnycast"
    // type fullname: domain.DomainOptionStateEnum
    export type DomainOptionStateEnum = "released" | "subscribed"
    // interface fullName: domain.GlueRecord.GlueRecord
    export interface GlueRecord {
        host: string;
        ips: string[];
    }
    // type fullname: domain.IsForEnum
    export type IsForEnum = "campaign_website" | "educational_website" | "emails" | "information_website" | "other_purpose" | "redirect_page" | "transactional_website"
    // type fullname: domain.OfferEnum
    export type OfferEnum = "diamond" | "gold" | "platinum"
    // type fullname: domain.OperationStatusEnum
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    // type fullname: domain.OptinFieldsEnum
    export type OptinFieldsEnum = "address" | "city" | "country" | "email" | "fax" | "name" | "organisation" | "phone" | "province" | "zip"
    // interface fullName: domain.Option.Option
    export interface Option {
        expirationDate: string;
        option: domain.DomainOptionEnum;
        state: domain.DomainOptionStateEnum;
    }
    // interface fullName: domain.Owo.Owo
    export interface Owo {
        field: domain.WhoisObfuscatorFieldsEnum;
    }
    // interface fullName: domain.ParentService.ParentService
    export interface ParentService {
        name: string;
        type: domain.ParentServiceTypeEnum;
    }
    // type fullname: domain.ParentServiceTypeEnum
    export type ParentServiceTypeEnum = "/allDom"
    // interface fullName: domain.Rule.Rule
    export interface Rule {
        allowedValues?: string[];
        description: string;
        fields?: string[];
        innerConfigurations?: domain.Rule[];
        label?: string;
        required?: boolean;
        type: string;
    }
    // interface fullName: domain.Task.Task
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
    // interface fullName: domain.UkRegistrar.UkRegistrar
    export interface UkRegistrar {
        name: string;
        tag: string;
    }
    // type fullname: domain.WhoisObfuscatorFieldsEnum
    export type WhoisObfuscatorFieldsEnum = "address" | "email" | "phone"
    export namespace configurations {
        // interface fullName: domain.configurations.CustomFields.CustomFields
        export interface CustomFields {
            audience?: string;
            authInfo?: string;
            isFor?: domain.IsForEnum[];
            otherPurpose?: string;
            reason?: string;
            represent?: string;
        }
        // interface fullName: domain.configurations.ObfuscatedEmails.ObfuscatedEmails
        export interface ObfuscatedEmails {
            type: domain.ContactAllTypesEnum;
            value: string;
        }
        // interface fullName: domain.configurations.Optin.Optin
        export interface Optin {
            fields: domain.OptinFieldsEnum[];
            type: domain.ContactAllTypesEnum;
        }
    }
    export namespace data {
        // interface fullName: domain.data.AfnicCorporationTrademarkContact.AfnicCorporationTrademarkContact
        export interface AfnicCorporationTrademarkContact {
            contactId: number;
            id: number;
            inpiNumber: string;
            inpiTrademarkOwner: string;
        }
        // interface fullName: domain.data.AssociationContact.AssociationContact
        export interface AssociationContact {
            contactId: number;
            declarationDate: string;
            id: number;
            publicationDate: string;
            publicationNumber: string;
            publicationPageNumber: string;
        }
        // interface fullName: domain.data.ProContact.ProContact
        export interface ProContact {
            authority: string;
            authorityWebsite: string;
            id: number;
            jobDescription: string;
            licenseNumber: string;
        }
        // interface fullName: domain.data.Smd.Smd
        export interface Smd {
            data: string;
            id: number;
            notAfter?: string;
            notBefore?: string;
            protectedLabels: domain.data.SmdLabel[];
            smdId?: string;
        }
        // interface fullName: domain.data.SmdLabel.SmdLabel
        export interface SmdLabel {
            label: string;
            trademark: string;
        }
        export namespace claimNotice {
            // interface fullName: domain.data.claimNotice.Address.Address
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
            // interface fullName: domain.data.claimNotice.ClaimNotice.ClaimNotice
            export interface ClaimNotice {
                claims?: domain.data.claimNotice.ClaimNoticeDecision[];
                endingDate: string;
                id: string;
                label: string;
                startingDate?: string;
                type?: domain.data.claimNotice.ClaimNoticeTypeEnum;
            }
            // interface fullName: domain.data.claimNotice.ClaimNoticeDecision.ClaimNoticeDecision
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
            // type fullname: domain.data.claimNotice.ClaimNoticeTypeEnum
            export type ClaimNoticeTypeEnum = "UK" | "TRADEMARK"
            // interface fullName: domain.data.claimNotice.Classification.Classification
            export interface Classification {
                description: string;
                number: string;
            }
            // interface fullName: domain.data.claimNotice.Contact.Contact
            export interface Contact {
                address: domain.data.claimNotice.Address;
                email?: string;
                entitlement?: string;
                name?: string;
                organisation?: string;
                type?: string;
            }
            // interface fullName: domain.data.claimNotice.CourtDecision.CourtDecision
            export interface CourtDecision {
                countryCode: string;
                courtName: string;
                referenceNumber: string;
                regions: string[];
            }
            // interface fullName: domain.data.claimNotice.UDRP.UDRP
            export interface UDRP {
                caseNumber: string;
                udrpProvider: string;
            }
        }
    }
    export namespace rules {
        // interface fullName: domain.rules.Optin.Optin
        export interface Optin {
            fields: domain.OptinFieldsEnum[];
            type: domain.ContactAllTypesEnum;
        }
    }
    export namespace zone {
        // interface fullName: domain.zone.Anycast.Anycast
        export interface Anycast {
            name: string;
        }
        // interface fullName: domain.zone.Dnssec.Dnssec
        export interface Dnssec {
            status: dnssec.DnssecStatusEnum;
        }
        // interface fullName: domain.zone.DynHostLogin.DynHostLogin
        export interface DynHostLogin {
            login: string;
            subDomain: string;
            zone: string;
        }
        // interface fullName: domain.zone.DynHostRecord.DynHostRecord
        export interface DynHostRecord {
            id: number;
            ip: string;
            subDomain?: string;
            ttl?: number;
            zone: string;
        }
        // interface fullName: domain.zone.Record.Record
        export interface Record {
            fieldType: zoneNamedResolutionFieldTypeEnum;
            id: number;
            subDomain?: string;
            target: string;
            ttl?: number;
            zone: string;
        }
        // interface fullName: domain.zone.Redirection.Redirection
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
        // interface fullName: domain.zone.Soa.Soa
        export interface Soa {
            email: string;
            expire: number;
            nxDomainTtl: number;
            refresh: number;
            serial: number;
            server: string;
            ttl: number;
        }
        // interface fullName: domain.zone.Task.Task
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
        // interface fullName: domain.zone.Zone.Zone
        export interface Zone {
            dnssecSupported: boolean;
            hasDnsAnycast: boolean;
            lastUpdate: string;
            name: string;
            nameServers: string[];
        }
        // interface fullName: domain.zone.ZoneRestorePoint.ZoneRestorePoint
        export interface ZoneRestorePoint {
            creationDate: string;
            zoneFileUrl: string;
        }
    }
}
export namespace nichandle {
    // type fullname: nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    // interface fullName: services.Service.Service
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
    // type fullname: zone.NamedResolutionFieldTypeEnum
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
    // type fullname: zone.RedirectionTypeEnum
    export type RedirectionTypeEnum = "invisible" | "visible" | "visiblePermanent"
    // interface fullName: zone.ResetRecord.ResetRecord
    export interface ResetRecord {
        fieldType: zone.ResettableNamedResolutionFieldTypeEnum;
        target: string;
    }
    // type fullname: zone.ResettableNamedResolutionFieldTypeEnum
    export type ResettableNamedResolutionFieldTypeEnum = "A" | "MX"
    // interface fullName: zone.Status.Status
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
 * Api Proxy model
 */// Apis harmony
// path /domain
export interface Domain{
    // GET /domain
    $get(params?: {whoisOwner?: string}): Promise<string[]>;
    data: {
        afnicAssociationInformation: {
            // GET /domain/data/afnicAssociationInformation
            $get(): Promise<number[]>;
            // POST /domain/data/afnicAssociationInformation
            $post(params: {contactId: number, declarationDate: string, publicationDate: string, publicationNumber: string, publicationPageNumber: string}): Promise<domain.data.AssociationContact>;
            $(associationInformationId: number): {
                // GET /domain/data/afnicAssociationInformation/{associationInformationId}
                $get(): Promise<domain.data.AssociationContact>;
            };
        }
        afnicCorporationTrademarkInformation: {
            // GET /domain/data/afnicCorporationTrademarkInformation
            $get(): Promise<number[]>;
            // POST /domain/data/afnicCorporationTrademarkInformation
            $post(params: {contactId: number, inpiNumber: string, inpiTrademarkOwner: string}): Promise<domain.data.AfnicCorporationTrademarkContact>;
            $(afnicCorporationTrademarkId: number): {
                // GET /domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}
                $get(): Promise<domain.data.AfnicCorporationTrademarkContact>;
            };
        }
        claimNotice: {
            // GET /domain/data/claimNotice
            $get(params: {domain: string}): Promise<domain.data.claimNotice.ClaimNotice>;
        }
        extension: {
            // GET /domain/data/extension
            $get(params: {country: nichandle.CountryEnum}): Promise<string[]>;
        }
        proContact: {
            // GET /domain/data/proContact
            $get(): Promise<number[]>;
            // POST /domain/data/proContact
            $post(params: {authority: string, authorityWebsite: string, contactId?: number, jobDescription: string, licenseNumber: string}): Promise<domain.data.ProContact>;
            $(proContactId: number): {
                // GET /domain/data/proContact/{proContactId}
                $get(): Promise<domain.data.ProContact>;
            };
        }
        smd: {
            // GET /domain/data/smd
            $get(params?: {protectedLabels_label?: string}): Promise<number[]>;
            // POST /domain/data/smd
            $post(params: {data: string}): Promise<domain.data.Smd>;
            $(smdId: number): {
                // DELETE /domain/data/smd/{smdId}
                $delete(): Promise<void>;
                // GET /domain/data/smd/{smdId}
                $get(): Promise<domain.data.Smd>;
                // PUT /domain/data/smd/{smdId}
                $put(params: {data: string}): Promise<domain.data.Smd>;
            };
        }
    }
    rules: {
        // GET /domain/rules
        $get(params: {cartId: string, itemId: number}): Promise<domain.Rule>;
    }
    zone: {
        // GET /domain/zone
        $get(): Promise<string[]>;
        $(zoneName: string): {
            // GET /domain/zone/{zoneName}
            $get(): Promise<domain.zone.Zone>;
            changeContact: {
                // POST /domain/zone/{zoneName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination: {
                // POST /domain/zone/{zoneName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            dnssec: {
                // DELETE /domain/zone/{zoneName}/dnssec
                $delete(): Promise<void>;
                // GET /domain/zone/{zoneName}/dnssec
                $get(): Promise<domain.zone.Dnssec>;
                // POST /domain/zone/{zoneName}/dnssec
                $post(): Promise<void>;
            }
            dynHost: {
                login: {
                    // GET /domain/zone/{zoneName}/dynHost/login
                    $get(params?: {login?: string, subDomain?: string}): Promise<string[]>;
                    // POST /domain/zone/{zoneName}/dynHost/login
                    $post(params: {loginSuffix: string, password: string, subDomain: string}): Promise<domain.zone.DynHostLogin>;
                    $(login: string): {
                        // DELETE /domain/zone/{zoneName}/dynHost/login/{login}
                        $delete(): Promise<void>;
                        // GET /domain/zone/{zoneName}/dynHost/login/{login}
                        $get(): Promise<domain.zone.DynHostLogin>;
                        // PUT /domain/zone/{zoneName}/dynHost/login/{login}
                        $put(params?: {login?: string, subDomain?: string, zone?: string}): Promise<void>;
                        changePassword: {
                            // POST /domain/zone/{zoneName}/dynHost/login/{login}/changePassword
                            $post(params: {password: string}): Promise<void>;
                        }
                    };
                }
                record: {
                    // GET /domain/zone/{zoneName}/dynHost/record
                    $get(params?: {subDomain?: string}): Promise<number[]>;
                    // POST /domain/zone/{zoneName}/dynHost/record
                    $post(params: {ip: string, subDomain?: string}): Promise<domain.zone.DynHostRecord>;
                    $(id: number): {
                        // DELETE /domain/zone/{zoneName}/dynHost/record/{id}
                        $delete(): Promise<void>;
                        // GET /domain/zone/{zoneName}/dynHost/record/{id}
                        $get(): Promise<domain.zone.DynHostRecord>;
                        // PUT /domain/zone/{zoneName}/dynHost/record/{id}
                        $put(params?: {id?: number, ip?: string, subDomain?: string, ttl?: number, zone?: string}): Promise<void>;
                    };
                }
            }
            export: {
                // GET /domain/zone/{zoneName}/export
                $get(): Promise<string>;
            }
            history: {
                // GET /domain/zone/{zoneName}/history
                $get(params?: {creationDate_from?: string, creationDate_to?: string}): Promise<string[]>;
                $(creationDate: string): {
                    // GET /domain/zone/{zoneName}/history/{creationDate}
                    $get(): Promise<domain.zone.ZoneRestorePoint>;
                    restore: {
                        // POST /domain/zone/{zoneName}/history/{creationDate}/restore
                        $post(): Promise<domain.zone.Task>;
                    }
                };
            }
            import: {
                // POST /domain/zone/{zoneName}/import
                $post(params: {zoneFile: string}): Promise<domain.zone.Task>;
            }
            record: {
                // GET /domain/zone/{zoneName}/record
                $get(params?: {fieldType?: zoneNamedResolutionFieldTypeEnum, subDomain?: string}): Promise<number[]>;
                // POST /domain/zone/{zoneName}/record
                $post(params: {fieldType: zoneNamedResolutionFieldTypeEnum, subDomain?: string, target: string, ttl?: number}): Promise<domain.zone.Record>;
                $(id: number): {
                    // DELETE /domain/zone/{zoneName}/record/{id}
                    $delete(): Promise<void>;
                    // GET /domain/zone/{zoneName}/record/{id}
                    $get(): Promise<domain.zone.Record>;
                    // PUT /domain/zone/{zoneName}/record/{id}
                    $put(params?: {fieldType?: zoneNamedResolutionFieldTypeEnum, id?: number, subDomain?: string, target?: string, ttl?: number, zone?: string}): Promise<void>;
                };
            }
            redirection: {
                // GET /domain/zone/{zoneName}/redirection
                $get(params?: {subDomain?: string}): Promise<number[]>;
                // POST /domain/zone/{zoneName}/redirection
                $post(params: {description?: string, keywords?: string, subDomain?: string, target: string, title?: string, type: zoneRedirectionTypeEnum}): Promise<domain.zone.Redirection>;
                $(id: number): {
                    // DELETE /domain/zone/{zoneName}/redirection/{id}
                    $delete(): Promise<void>;
                    // GET /domain/zone/{zoneName}/redirection/{id}
                    $get(): Promise<domain.zone.Redirection>;
                    // PUT /domain/zone/{zoneName}/redirection/{id}
                    $put(params?: {description?: string, id?: number, keywords?: string, subDomain?: string, target?: string, title?: string, type?: zoneRedirectionTypeEnum, zone?: string}): Promise<void>;
                };
            }
            refresh: {
                // POST /domain/zone/{zoneName}/refresh
                $post(): Promise<void>;
            }
            reset: {
                // POST /domain/zone/{zoneName}/reset
                $post(params?: {DnsRecords?: zone.ResetRecord[], minimized?: boolean}): Promise<void>;
            }
            serviceInfos: {
                // GET /domain/zone/{zoneName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /domain/zone/{zoneName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            soa: {
                // GET /domain/zone/{zoneName}/soa
                $get(): Promise<domain.zone.Soa>;
                // PUT /domain/zone/{zoneName}/soa
                $put(params?: {email?: string, expire?: number, nxDomainTtl?: number, refresh?: number, serial?: number, server?: string, ttl?: number}): Promise<void>;
            }
            status: {
                // GET /domain/zone/{zoneName}/status
                $get(): Promise<zone.Status>;
            }
            task: {
                // GET /domain/zone/{zoneName}/task
                $get(params?: {function_?: string, status?: domain.OperationStatusEnum}): Promise<number[]>;
                $(id: number): {
                    // GET /domain/zone/{zoneName}/task/{id}
                    $get(): Promise<domain.zone.Task>;
                    accelerate: {
                        // POST /domain/zone/{zoneName}/task/{id}/accelerate
                        $post(): Promise<void>;
                    }
                    cancel: {
                        // POST /domain/zone/{zoneName}/task/{id}/cancel
                        $post(): Promise<void>;
                    }
                    relaunch: {
                        // POST /domain/zone/{zoneName}/task/{id}/relaunch
                        $post(): Promise<void>;
                    }
                };
            }
            terminate: {
                // POST /domain/zone/{zoneName}/terminate
                $post(): Promise<string>;
            }
        };
    }
    $(serviceName: string): {
        // GET /domain/{serviceName}
        $get(): Promise<domain.Domain>;
        // PUT /domain/{serviceName}
        $put(params?: {dnssecSupported?: boolean, domain?: string, glueRecordIpv6Supported?: boolean, glueRecordMultiIpSupported?: boolean, lastUpdate?: string, nameServerType?: domain.DomainNsTypeEnum, offer?: domain.OfferEnum, owoSupported?: boolean, parentService?: domain.ParentService, transferLockStatus?: domain.DomainLockStatusEnum, whoisOwner?: string}): Promise<void>;
        activateZone: {
            // POST /domain/{serviceName}/activateZone
            $post(params?: {minimized?: boolean}): Promise<void>;
        }
        authInfo: {
            // GET /domain/{serviceName}/authInfo
            $get(): Promise<string>;
        }
        changeContact: {
            // POST /domain/{serviceName}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        configurations: {
            obfuscatedEmails: {
                // GET /domain/{serviceName}/configurations/obfuscatedEmails
                $get(): Promise<domain.configurations.ObfuscatedEmails[]>;
                // PUT /domain/{serviceName}/configurations/obfuscatedEmails
                $put(params: {contacts: domain.ContactAllTypesEnum[]}): Promise<domain.configurations.ObfuscatedEmails[]>;
                refresh: {
                    // POST /domain/{serviceName}/configurations/obfuscatedEmails/refresh
                    $post(params: {contacts: domain.ContactAllTypesEnum[]}): Promise<void>;
                }
            }
            optin: {
                // GET /domain/{serviceName}/configurations/optin
                $get(): Promise<domain.configurations.Optin[]>;
                // PUT /domain/{serviceName}/configurations/optin
                $put(params: {optin: domain.configurations.Optin[]}): Promise<domain.configurations.Optin[]>;
            }
        }
        dsRecord: {
            // GET /domain/{serviceName}/dsRecord
            $get(params?: {flags?: dnssec.KeyFlagEnum, status?: dnssec.KeyStatusEnum}): Promise<number[]>;
            // POST /domain/{serviceName}/dsRecord
            $post(params: {keys: dnssec.Key[]}): Promise<domain.Task>;
            $(id: number): {
                // GET /domain/{serviceName}/dsRecord/{id}
                $get(): Promise<domain.DnssecKey>;
            };
        }
        email: {
            obfuscated: {
                refresh: {
                    // POST /domain/{serviceName}/email/obfuscated/refresh
                    $post(params: {contactType: domain.DomainContactTypeEnum[]}): Promise<void>;
                }
            }
        }
        glueRecord: {
            // GET /domain/{serviceName}/glueRecord
            $get(params?: {host?: string}): Promise<string[]>;
            // POST /domain/{serviceName}/glueRecord
            $post(params: {host: string, ips: string[]}): Promise<domain.Task>;
            $(host: string): {
                // DELETE /domain/{serviceName}/glueRecord/{host}
                $delete(): Promise<domain.Task>;
                // GET /domain/{serviceName}/glueRecord/{host}
                $get(): Promise<domain.GlueRecord>;
                update: {
                    // POST /domain/{serviceName}/glueRecord/{host}/update
                    $post(params: {ips: string[]}): Promise<domain.Task>;
                }
            };
        }
        nameServer: {
            // GET /domain/{serviceName}/nameServer
            $get(): Promise<number[]>;
            // POST /domain/{serviceName}/nameServer
            $post(params: {nameServer: domain.DomainNs[]}): Promise<domain.Task>;
            $(id: number): {
                // DELETE /domain/{serviceName}/nameServer/{id}
                $delete(): Promise<domain.Task>;
                // GET /domain/{serviceName}/nameServer/{id}
                $get(): Promise<domain.CurrentNameServer>;
                status: {
                    // POST /domain/{serviceName}/nameServer/{id}/status
                    $post(): Promise<domain.DomainNsStatus>;
                }
            };
        }
        nameServers: {
            update: {
                // POST /domain/{serviceName}/nameServers/update
                $post(params: {nameServers: domain.DomainNs[]}): Promise<domain.Task>;
            }
        }
        option: {
            // GET /domain/{serviceName}/option
            $get(): Promise<domain.DomainOptionEnum[]>;
            $(option: domain.DomainOptionEnum): {
                // DELETE /domain/{serviceName}/option/{option}
                $delete(): Promise<void>;
                // GET /domain/{serviceName}/option/{option}
                $get(): Promise<domain.Option>;
            };
        }
        owo: {
            // GET /domain/{serviceName}/owo
            $get(params?: {field?: domain.WhoisObfuscatorFieldsEnum}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            // POST /domain/{serviceName}/owo
            $post(params: {fields: domain.WhoisObfuscatorFieldsEnum[]}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            $(field: domain.WhoisObfuscatorFieldsEnum): {
                // DELETE /domain/{serviceName}/owo/{field}
                $delete(): Promise<void>;
                // GET /domain/{serviceName}/owo/{field}
                $get(): Promise<domain.Owo>;
            };
        }
        rules: {
            emailsObfuscation: {
                // GET /domain/{serviceName}/rules/emailsObfuscation
                $get(): Promise<domain.ContactAllTypesEnum[]>;
            }
            optin: {
                // GET /domain/{serviceName}/rules/optin
                $get(): Promise<domain.rules.Optin[]>;
            }
        }
        serviceInfos: {
            // GET /domain/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /domain/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        task: {
            // GET /domain/{serviceName}/task
            $get(params?: {function_?: string, status?: domain.OperationStatusEnum}): Promise<number[]>;
            $(id: number): {
                // GET /domain/{serviceName}/task/{id}
                $get(): Promise<domain.Task>;
                accelerate: {
                    // POST /domain/{serviceName}/task/{id}/accelerate
                    $post(): Promise<void>;
                }
                cancel: {
                    // POST /domain/{serviceName}/task/{id}/cancel
                    $post(): Promise<void>;
                }
                relaunch: {
                    // POST /domain/{serviceName}/task/{id}/relaunch
                    $post(): Promise<void>;
                }
            };
        }
        ukOutgoingTransfer: {
            // POST /domain/{serviceName}/ukOutgoingTransfer
            $post(params: {tag: string}): Promise<domain.Task>;
        }
        ukRegistrars: {
            // GET /domain/{serviceName}/ukRegistrars
            $get(): Promise<domain.UkRegistrar[]>;
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type zoneNamedResolutionFieldTypeEnum = zone.NamedResolutionFieldTypeEnum;
type zoneRedirectionTypeEnum = zone.RedirectionTypeEnum;

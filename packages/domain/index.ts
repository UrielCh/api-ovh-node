import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace dnssec {
    //dnssec.DnssecStatusEnum
    export type DnssecStatusEnum = "disableInProgress" | "disabled" | "enableInProgress" | "enabled"
    //dnssec.Key
    // fullName: dnssec.Key.Key
    export interface Key {
        algorithm?: OVH.dnssec.KeyAlgorithmEnum;
        flags?: OVH.dnssec.KeyFlagEnum;
        publicKey?: string;
        tag?: number;
    }
    //dnssec.KeyAlgorithmEnum
    export type KeyAlgorithmEnum = 10 | 13 | 14 | 3 | 5 | 6 | 7 | 8
    //dnssec.KeyFlagEnum
    export type KeyFlagEnum = 256 | 257
    //dnssec.KeyStatusEnum
    export type KeyStatusEnum = "active" | "generated" | "published" | "removed" | "retired" | "revoked"
}
export namespace domain {
    //domain.ContactAllTypesEnum
    export type ContactAllTypesEnum = "admin" | "all" | "billing" | "owner" | "tech"
    //domain.CurrentNameServer
    // fullName: domain.CurrentNameServer.CurrentNameServer
    export interface CurrentNameServer {
        host?: string;
        id?: number;
        ip?: string;
        isUsed?: boolean;
        toDelete?: boolean;
    }
    //domain.DnssecKey
    // fullName: domain.DnssecKey.DnssecKey
    export interface DnssecKey {
        algorithm?: OVH.dnssec.KeyAlgorithmEnum;
        flags?: OVH.dnssec.KeyFlagEnum;
        id?: number;
        publicKey?: string;
        status?: OVH.dnssec.KeyStatusEnum;
        tag?: number;
    }
    //domain.Domain
    // fullName: domain.Domain.Domain
    export interface Domain {
        dnssecSupported?: boolean;
        domain?: string;
        glueRecordIpv6Supported?: boolean;
        glueRecordMultiIpSupported?: boolean;
        lastUpdate?: string;
        nameServerType?: OVH.domain.DomainNsTypeEnum;
        offer?: OVH.domain.OfferEnum;
        owoSupported?: boolean;
        parentService?: OVH.domain.ParentService;
        transferLockStatus?: OVH.domain.DomainLockStatusEnum;
        whoisOwner?: string;
    }
    //domain.DomainContactTypeEnum
    export type DomainContactTypeEnum = "admin" | "billing" | "owner" | "tech"
    //domain.DomainLockStatusEnum
    export type DomainLockStatusEnum = "locked" | "locking" | "unavailable" | "unlocked" | "unlocking"
    //domain.DomainNs
    // fullName: domain.DomainNs.DomainNs
    export interface DomainNs {
        host?: string;
        ip?: string;
    }
    //domain.DomainNsStateEnum
    export type DomainNsStateEnum = "ko" | "ok"
    //domain.DomainNsStatus
    // fullName: domain.DomainNsStatus.DomainNsStatus
    export interface DomainNsStatus {
        state?: OVH.domain.DomainNsStateEnum;
        type?: OVH.domain.DomainNsTypeEnum;
        usedSince?: string;
    }
    //domain.DomainNsTypeEnum
    export type DomainNsTypeEnum = "external" | "hosted"
    //domain.DomainOptionEnum
    export type DomainOptionEnum = "dnsAnycast"
    //domain.DomainOptionStateEnum
    export type DomainOptionStateEnum = "released" | "subscribed"
    //domain.GlueRecord
    // fullName: domain.GlueRecord.GlueRecord
    export interface GlueRecord {
        host?: string;
        ips?: string[];
    }
    //domain.OfferEnum
    export type OfferEnum = "diamond" | "gold" | "platinum"
    //domain.OperationStatusEnum
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    //domain.OptinFieldsEnum
    export type OptinFieldsEnum = "address" | "city" | "country" | "email" | "fax" | "name" | "organisation" | "phone" | "province" | "zip"
    //domain.Option
    // fullName: domain.Option.Option
    export interface Option {
        option?: OVH.domain.DomainOptionEnum;
        state?: OVH.domain.DomainOptionStateEnum;
    }
    //domain.Owo
    // fullName: domain.Owo.Owo
    export interface Owo {
        field?: OVH.domain.WhoisObfuscatorFieldsEnum;
    }
    //domain.ParentService
    // fullName: domain.ParentService.ParentService
    export interface ParentService {
        name?: string;
        type?: OVH.domain.ParentServiceTypeEnum;
    }
    //domain.ParentServiceTypeEnum
    export type ParentServiceTypeEnum = "/allDom"
    //domain.Rule
    // fullName: domain.Rule.Rule
    export interface Rule {
        allowedValues?: string[];
        description?: string;
        fields?: string[];
        innerConfigurations?: OVH.domain.Rule[];
        label?: string;
        required?: boolean;
        type?: string;
    }
    //domain.Task
    // fullName: domain.Task.Task
    export interface Task {
        canAccelerate?: boolean;
        canCancel?: boolean;
        canRelaunch?: boolean;
        comment?: string;
        creationDate?: string;
        doneDate?: string;
        function?: string;
        id?: number;
        lastUpdate?: string;
        status?: OVH.domain.OperationStatusEnum;
        todoDate?: string;
    }
    //domain.UkRegistrar
    // fullName: domain.UkRegistrar.UkRegistrar
    export interface UkRegistrar {
        name?: string;
        tag?: string;
    }
    //domain.WhoisObfuscatorFieldsEnum
    export type WhoisObfuscatorFieldsEnum = "address" | "email" | "phone"
    export namespace configurations {
        //domain.configurations.ObfuscatedEmails
        // fullName: domain.configurations.ObfuscatedEmails.ObfuscatedEmails
        export interface ObfuscatedEmails {
            type?: OVH.domain.ContactAllTypesEnum;
            value?: string;
        }
        //domain.configurations.Optin
        // fullName: domain.configurations.Optin.Optin
        export interface Optin {
            fields?: OVH.domain.OptinFieldsEnum[];
            type?: OVH.domain.ContactAllTypesEnum;
        }
    }
    export namespace data {
        //domain.data.AfnicCorporationTrademarkContact
        // fullName: domain.data.AfnicCorporationTrademarkContact.AfnicCorporationTrademarkContact
        export interface AfnicCorporationTrademarkContact {
            contactId?: number;
            id?: number;
            inpiNumber?: string;
            inpiTrademarkOwner?: string;
        }
        //domain.data.AssociationContact
        // fullName: domain.data.AssociationContact.AssociationContact
        export interface AssociationContact {
            contactId?: number;
            declarationDate?: string;
            id?: number;
            publicationDate?: string;
            publicationNumber?: string;
            publicationPageNumber?: string;
        }
        //domain.data.ProContact
        // fullName: domain.data.ProContact.ProContact
        export interface ProContact {
            authority?: string;
            authorityWebsite?: string;
            id?: number;
            jobDescription?: string;
            licenseNumber?: string;
        }
        //domain.data.Smd
        // fullName: domain.data.Smd.Smd
        export interface Smd {
            data?: string;
            id?: number;
            notAfter?: string;
            notBefore?: string;
            protectedLabels?: OVH.domain.data.SmdLabel[];
            smdId?: string;
        }
        //domain.data.SmdLabel
        // fullName: domain.data.SmdLabel.SmdLabel
        export interface SmdLabel {
            label?: string;
            trademark?: string;
        }
        export namespace claimNotice {
            //domain.data.claimNotice.Address
            // fullName: domain.data.claimNotice.Address.Address
            export interface Address {
                city?: string;
                countryCode?: OVH.nichandle.CountryEnum;
                fax?: string;
                faxExtension?: string;
                postalCode?: string;
                stateOrProvince?: string;
                streets?: string[];
                voice?: string;
                voiceExtension?: string;
            }
            //domain.data.claimNotice.ClaimNotice
            // fullName: domain.data.claimNotice.ClaimNotice.ClaimNotice
            export interface ClaimNotice {
                claims?: OVH.domain.data.claimNotice.ClaimNoticeDecision[];
                endingDate?: string;
                id?: string;
                label?: string;
                startingDate?: string;
                type?: OVH.domain.data.claimNotice.ClaimNoticeTypeEnum;
            }
            //domain.data.claimNotice.ClaimNoticeDecision
            // fullName: domain.data.claimNotice.ClaimNoticeDecision.ClaimNoticeDecision
            export interface ClaimNoticeDecision {
                classifications?: OVH.domain.data.claimNotice.Classification[];
                courtDecisions?: OVH.domain.data.claimNotice.CourtDecision[];
                goodsAndServices?: string;
                jurisdiction?: string;
                jurisdictionCountryCode?: string;
                markName?: string;
                trademarkContacts?: OVH.domain.data.claimNotice.Contact[];
                trademarkHolders?: OVH.domain.data.claimNotice.Contact[];
                trademarkUDRP?: OVH.domain.data.claimNotice.UDRP[];
            }
            //domain.data.claimNotice.ClaimNoticeTypeEnum
            export type ClaimNoticeTypeEnum = "UK" | "TRADEMARK"
            //domain.data.claimNotice.Classification
            // fullName: domain.data.claimNotice.Classification.Classification
            export interface Classification {
                description?: string;
                number?: string;
            }
            //domain.data.claimNotice.Contact
            // fullName: domain.data.claimNotice.Contact.Contact
            export interface Contact {
                address?: OVH.domain.data.claimNotice.Address;
                email?: string;
                entitlement?: string;
                name?: string;
                organisation?: string;
                type?: string;
            }
            //domain.data.claimNotice.CourtDecision
            // fullName: domain.data.claimNotice.CourtDecision.CourtDecision
            export interface CourtDecision {
                countryCode?: string;
                courtName?: string;
                referenceNumber?: string;
                regions?: string[];
            }
            //domain.data.claimNotice.UDRP
            // fullName: domain.data.claimNotice.UDRP.UDRP
            export interface UDRP {
                caseNumber?: string;
                udrpProvider?: string;
            }
        }
    }
    export namespace rules {
        //domain.rules.Optin
        // fullName: domain.rules.Optin.Optin
        export interface Optin {
            fields?: OVH.domain.OptinFieldsEnum[];
            type?: OVH.domain.ContactAllTypesEnum;
        }
    }
    export namespace zone {
        //domain.zone.Dnssec
        // fullName: domain.zone.Dnssec.Dnssec
        export interface Dnssec {
            status?: OVH.dnssec.DnssecStatusEnum;
        }
        //domain.zone.DynHostLogin
        // fullName: domain.zone.DynHostLogin.DynHostLogin
        export interface DynHostLogin {
            login?: string;
            subDomain?: string;
            zone?: string;
        }
        //domain.zone.DynHostRecord
        // fullName: domain.zone.DynHostRecord.DynHostRecord
        export interface DynHostRecord {
            id?: number;
            ip?: string;
            subDomain?: string;
            ttl?: number;
            zone?: string;
        }
        //domain.zone.Record
        // fullName: domain.zone.Record.Record
        export interface Record {
            fieldType?: OVH.zone.NamedResolutionFieldTypeEnum;
            id?: number;
            subDomain?: string;
            target?: string;
            ttl?: number;
            zone?: string;
        }
        //domain.zone.Redirection
        // fullName: domain.zone.Redirection.Redirection
        export interface Redirection {
            description?: string;
            id?: number;
            keywords?: string;
            subDomain?: string;
            target?: string;
            title?: string;
            type?: OVH.zone.RedirectionTypeEnum;
            zone?: string;
        }
        //domain.zone.Soa
        // fullName: domain.zone.Soa.Soa
        export interface Soa {
            email?: string;
            expire?: number;
            nxDomainTtl?: number;
            refresh?: number;
            serial?: number;
            server?: string;
            ttl?: number;
        }
        //domain.zone.Task
        // fullName: domain.zone.Task.Task
        export interface Task {
            canAccelerate?: boolean;
            canCancel?: boolean;
            canRelaunch?: boolean;
            comment?: string;
            creationDate?: string;
            doneDate?: string;
            function?: string;
            id?: number;
            lastUpdate?: string;
            status?: OVH.domain.OperationStatusEnum;
            todoDate?: string;
        }
        //domain.zone.Zone
        // fullName: domain.zone.Zone.Zone
        export interface Zone {
            dnssecSupported?: boolean;
            hasDnsAnycast?: boolean;
            lastUpdate?: string;
            name?: string;
            nameServers?: string[];
        }
        //domain.zone.ZoneRestorePoint
        // fullName: domain.zone.ZoneRestorePoint.ZoneRestorePoint
        export interface ZoneRestorePoint {
            creationDate?: string;
            zoneFileUrl?: string;
        }
    }
}
export namespace nichandle {
    //nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
export namespace zone {
    //zone.NamedResolutionFieldTypeEnum
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
    //zone.RedirectionTypeEnum
    export type RedirectionTypeEnum = "invisible" | "visible" | "visiblePermanent"
    //zone.ResetRecord
    // fullName: zone.ResetRecord.ResetRecord
    export interface ResetRecord {
        fieldType?: OVH.zone.ResettableNamedResolutionFieldTypeEnum;
        target?: string;
    }
    //zone.ResettableNamedResolutionFieldTypeEnum
    export type ResettableNamedResolutionFieldTypeEnum = "A" | "MX"
    //zone.Status
    // fullName: zone.Status.Status
    export interface Status {
        errors?: string[];
        isDeployed?: boolean;
        warnings?: string[];
    }
}
// Apis harmony
// path /domain
export interface Domain {
    // GET /domain
    $get(param?: {whoisOwner?: string}): Promise<string[]>;
    data:  {
        afnicAssociationInformation:  {
            // GET /domain/data/afnicAssociationInformation
            $get(): Promise<number[]>;
            // POST /domain/data/afnicAssociationInformation
            $post(body?: {contactId: number, declarationDate: string, publicationDate: string, publicationNumber: string, publicationPageNumber: string}): Promise<domain.data.AssociationContact>;
            [keys: string]: {
                // GET /domain/data/afnicAssociationInformation/{associationInformationId}
                $get(): Promise<domain.data.AssociationContact>;
            } | any
        }
        afnicCorporationTrademarkInformation:  {
            // GET /domain/data/afnicCorporationTrademarkInformation
            $get(): Promise<number[]>;
            // POST /domain/data/afnicCorporationTrademarkInformation
            $post(body?: {contactId: number, inpiNumber: string, inpiTrademarkOwner: string}): Promise<domain.data.AfnicCorporationTrademarkContact>;
            [keys: string]: {
                // GET /domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}
                $get(): Promise<domain.data.AfnicCorporationTrademarkContact>;
            } | any
        }
        claimNotice:  {
            // GET /domain/data/claimNotice
            $get(param?: {domain: string}): Promise<domain.data.claimNotice.ClaimNotice>;
        }
        extension:  {
            // GET /domain/data/extension
            $get(param?: {country: nichandle.CountryEnum}): Promise<string[]>;
        }
        proContact:  {
            // GET /domain/data/proContact
            $get(): Promise<number[]>;
            // POST /domain/data/proContact
            $post(body?: {authority: string, authorityWebsite: string, contactId?: number, jobDescription: string, licenseNumber: string}): Promise<domain.data.ProContact>;
            [keys: string]: {
                // GET /domain/data/proContact/{proContactId}
                $get(): Promise<domain.data.ProContact>;
            } | any
        }
        smd:  {
            // GET /domain/data/smd
            $get(param?: {protectedLabels_label?: string}): Promise<number[]>;
            // POST /domain/data/smd
            $post(body?: {data: string}): Promise<domain.data.Smd>;
            [keys: string]: {
                // DELETE /domain/data/smd/{smdId}
                $delete(): Promise<void>;
                // GET /domain/data/smd/{smdId}
                $get(): Promise<domain.data.Smd>;
                // PUT /domain/data/smd/{smdId}
                $put(body?: {data: string}): Promise<domain.data.Smd>;
            } | any
        }
    }
    rules:  {
        // GET /domain/rules
        $get(param?: {cartId: string, itemId: number}): Promise<domain.Rule>;
    }
    zone:  {
        // GET /domain/zone
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /domain/zone/{zoneName}
            $get(): Promise<domain.zone.Zone>;
            changeContact:  {
                // POST /domain/zone/{zoneName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination:  {
                // POST /domain/zone/{zoneName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            dnssec:  {
                // DELETE /domain/zone/{zoneName}/dnssec
                $delete(): Promise<void>;
                // GET /domain/zone/{zoneName}/dnssec
                $get(): Promise<domain.zone.Dnssec>;
                // POST /domain/zone/{zoneName}/dnssec
                $post(): Promise<void>;
            }
            dynHost:  {
                login:  {
                    // GET /domain/zone/{zoneName}/dynHost/login
                    $get(param?: {login?: string, subDomain?: string}): Promise<string[]>;
                    // POST /domain/zone/{zoneName}/dynHost/login
                    $post(body?: {loginSuffix: string, password: string, subDomain: string}): Promise<domain.zone.DynHostLogin>;
                    [keys: string]: {
                        // DELETE /domain/zone/{zoneName}/dynHost/login/{login}
                        $delete(): Promise<void>;
                        // GET /domain/zone/{zoneName}/dynHost/login/{login}
                        $get(): Promise<domain.zone.DynHostLogin>;
                        // PUT /domain/zone/{zoneName}/dynHost/login/{login}
                        $put(body?: {body: domain.zone.DynHostLogin}): Promise<void>;
                        changePassword:  {
                            // POST /domain/zone/{zoneName}/dynHost/login/{login}/changePassword
                            $post(body?: {password: string}): Promise<void>;
                        }
                    } | any
                }
                record:  {
                    // GET /domain/zone/{zoneName}/dynHost/record
                    $get(param?: {subDomain?: string}): Promise<number[]>;
                    // POST /domain/zone/{zoneName}/dynHost/record
                    $post(body?: {ip: string, subDomain?: string}): Promise<domain.zone.DynHostRecord>;
                    [keys: string]: {
                        // DELETE /domain/zone/{zoneName}/dynHost/record/{id}
                        $delete(): Promise<void>;
                        // GET /domain/zone/{zoneName}/dynHost/record/{id}
                        $get(): Promise<domain.zone.DynHostRecord>;
                        // PUT /domain/zone/{zoneName}/dynHost/record/{id}
                        $put(body?: {body: domain.zone.DynHostRecord}): Promise<void>;
                    } | any
                }
            }
            export:  {
                // GET /domain/zone/{zoneName}/export
                $get(): Promise<string>;
            }
            history:  {
                // GET /domain/zone/{zoneName}/history
                $get(param?: {creationDate_from?: string, creationDate_to?: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /domain/zone/{zoneName}/history/{creationDate}
                    $get(): Promise<domain.zone.ZoneRestorePoint>;
                    restore:  {
                        // POST /domain/zone/{zoneName}/history/{creationDate}/restore
                        $post(): Promise<domain.zone.Task>;
                    }
                } | any
            }
            import:  {
                // POST /domain/zone/{zoneName}/import
                $post(body?: {zoneFile: string}): Promise<domain.zone.Task>;
            }
            record:  {
                // GET /domain/zone/{zoneName}/record
                $get(param?: {fieldType?: zone.NamedResolutionFieldTypeEnum, subDomain?: string}): Promise<number[]>;
                // POST /domain/zone/{zoneName}/record
                $post(body?: {fieldType: zone.NamedResolutionFieldTypeEnum, subDomain?: string, target: string, ttl?: number}): Promise<domain.zone.Record>;
                [keys: string]: {
                    // DELETE /domain/zone/{zoneName}/record/{id}
                    $delete(): Promise<void>;
                    // GET /domain/zone/{zoneName}/record/{id}
                    $get(): Promise<domain.zone.Record>;
                    // PUT /domain/zone/{zoneName}/record/{id}
                    $put(body?: {body: domain.zone.Record}): Promise<void>;
                } | any
            }
            redirection:  {
                // GET /domain/zone/{zoneName}/redirection
                $get(param?: {subDomain?: string}): Promise<number[]>;
                // POST /domain/zone/{zoneName}/redirection
                $post(body?: {description?: string, keywords?: string, subDomain?: string, target: string, title?: string, type: zone.RedirectionTypeEnum}): Promise<domain.zone.Redirection>;
                [keys: string]: {
                    // DELETE /domain/zone/{zoneName}/redirection/{id}
                    $delete(): Promise<void>;
                    // GET /domain/zone/{zoneName}/redirection/{id}
                    $get(): Promise<domain.zone.Redirection>;
                    // PUT /domain/zone/{zoneName}/redirection/{id}
                    $put(body?: {body: domain.zone.Redirection}): Promise<void>;
                } | any
            }
            refresh:  {
                // POST /domain/zone/{zoneName}/refresh
                $post(): Promise<void>;
            }
            reset:  {
                // POST /domain/zone/{zoneName}/reset
                $post(body?: {DnsRecords?: zone.ResetRecord[], minimized?: boolean}): Promise<void>;
            }
            serviceInfos:  {
                // GET /domain/zone/{zoneName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /domain/zone/{zoneName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            soa:  {
                // GET /domain/zone/{zoneName}/soa
                $get(): Promise<domain.zone.Soa>;
                // PUT /domain/zone/{zoneName}/soa
                $put(body?: {body: domain.zone.Soa}): Promise<void>;
            }
            status:  {
                // GET /domain/zone/{zoneName}/status
                $get(): Promise<zone.Status>;
            }
            task:  {
                // GET /domain/zone/{zoneName}/task
                $get(param?: {function_?: string, status?: domain.OperationStatusEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /domain/zone/{zoneName}/task/{id}
                    $get(): Promise<domain.zone.Task>;
                    accelerate:  {
                        // POST /domain/zone/{zoneName}/task/{id}/accelerate
                        $post(): Promise<void>;
                    }
                    cancel:  {
                        // POST /domain/zone/{zoneName}/task/{id}/cancel
                        $post(): Promise<void>;
                    }
                    relaunch:  {
                        // POST /domain/zone/{zoneName}/task/{id}/relaunch
                        $post(): Promise<void>;
                    }
                } | any
            }
            terminate:  {
                // POST /domain/zone/{zoneName}/terminate
                $post(): Promise<string>;
            }
        } | any
    }
    [keys: string]: {
        // GET /domain/{serviceName}
        $get(): Promise<domain.Domain>;
        // PUT /domain/{serviceName}
        $put(body?: {body: domain.Domain}): Promise<void>;
        activateZone:  {
            // POST /domain/{serviceName}/activateZone
            $post(body?: {minimized?: boolean}): Promise<void>;
        }
        authInfo:  {
            // GET /domain/{serviceName}/authInfo
            $get(): Promise<string>;
        }
        changeContact:  {
            // POST /domain/{serviceName}/changeContact
            $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        configurations:  {
            obfuscatedEmails:  {
                // GET /domain/{serviceName}/configurations/obfuscatedEmails
                $get(): Promise<domain.configurations.ObfuscatedEmails[]>;
                // PUT /domain/{serviceName}/configurations/obfuscatedEmails
                $put(body?: {contacts: domain.ContactAllTypesEnum[]}): Promise<domain.configurations.ObfuscatedEmails[]>;
                refresh:  {
                    // POST /domain/{serviceName}/configurations/obfuscatedEmails/refresh
                    $post(body?: {contacts: domain.ContactAllTypesEnum[]}): Promise<void>;
                }
            }
            optin:  {
                // GET /domain/{serviceName}/configurations/optin
                $get(): Promise<domain.configurations.Optin[]>;
                // PUT /domain/{serviceName}/configurations/optin
                $put(body?: {optin: domain.configurations.Optin[]}): Promise<domain.configurations.Optin[]>;
            }
        }
        dsRecord:  {
            // GET /domain/{serviceName}/dsRecord
            $get(param?: {flags?: dnssec.KeyFlagEnum, status?: dnssec.KeyStatusEnum}): Promise<number[]>;
            // POST /domain/{serviceName}/dsRecord
            $post(body?: {keys: dnssec.Key[]}): Promise<domain.Task>;
            [keys: string]: {
                // GET /domain/{serviceName}/dsRecord/{id}
                $get(): Promise<domain.DnssecKey>;
            } | any
        }
        email:  {
            obfuscated:  {
                refresh:  {
                    // POST /domain/{serviceName}/email/obfuscated/refresh
                    $post(body?: {contactType: domain.DomainContactTypeEnum[]}): Promise<void>;
                }
            }
        }
        glueRecord:  {
            // GET /domain/{serviceName}/glueRecord
            $get(param?: {host?: string}): Promise<string[]>;
            // POST /domain/{serviceName}/glueRecord
            $post(body?: {host: string, ips: string[]}): Promise<domain.Task>;
            [keys: string]: {
                // DELETE /domain/{serviceName}/glueRecord/{host}
                $delete(): Promise<domain.Task>;
                // GET /domain/{serviceName}/glueRecord/{host}
                $get(): Promise<domain.GlueRecord>;
                update:  {
                    // POST /domain/{serviceName}/glueRecord/{host}/update
                    $post(body?: {ips: string[]}): Promise<domain.Task>;
                }
            } | any
        }
        nameServer:  {
            // GET /domain/{serviceName}/nameServer
            $get(): Promise<number[]>;
            // POST /domain/{serviceName}/nameServer
            $post(body?: {nameServer: domain.DomainNs[]}): Promise<domain.Task>;
            [keys: string]: {
                // DELETE /domain/{serviceName}/nameServer/{id}
                $delete(): Promise<domain.Task>;
                // GET /domain/{serviceName}/nameServer/{id}
                $get(): Promise<domain.CurrentNameServer>;
                status:  {
                    // POST /domain/{serviceName}/nameServer/{id}/status
                    $post(): Promise<domain.DomainNsStatus>;
                }
            } | any
        }
        nameServers:  {
            update:  {
                // POST /domain/{serviceName}/nameServers/update
                $post(body?: {nameServers: domain.DomainNs[]}): Promise<domain.Task>;
            }
        }
        option:  {
            // GET /domain/{serviceName}/option
            $get(): Promise<domain.DomainOptionEnum[]>;
            [keys: string]: {
                // DELETE /domain/{serviceName}/option/{option}
                $delete(): Promise<void>;
                // GET /domain/{serviceName}/option/{option}
                $get(): Promise<domain.Option>;
            } | any
        }
        owo:  {
            // GET /domain/{serviceName}/owo
            $get(param?: {field?: domain.WhoisObfuscatorFieldsEnum}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            // POST /domain/{serviceName}/owo
            $post(body?: {fields: domain.WhoisObfuscatorFieldsEnum[]}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            [keys: string]: {
                // DELETE /domain/{serviceName}/owo/{field}
                $delete(): Promise<void>;
                // GET /domain/{serviceName}/owo/{field}
                $get(): Promise<domain.Owo>;
            } | any
        }
        rules:  {
            emailsObfuscation:  {
                // GET /domain/{serviceName}/rules/emailsObfuscation
                $get(): Promise<domain.ContactAllTypesEnum[]>;
            }
            optin:  {
                // GET /domain/{serviceName}/rules/optin
                $get(): Promise<domain.rules.Optin[]>;
            }
        }
        serviceInfos:  {
            // GET /domain/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /domain/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
        task:  {
            // GET /domain/{serviceName}/task
            $get(param?: {function_?: string, status?: domain.OperationStatusEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /domain/{serviceName}/task/{id}
                $get(): Promise<domain.Task>;
                accelerate:  {
                    // POST /domain/{serviceName}/task/{id}/accelerate
                    $post(): Promise<void>;
                }
                cancel:  {
                    // POST /domain/{serviceName}/task/{id}/cancel
                    $post(): Promise<void>;
                }
                relaunch:  {
                    // POST /domain/{serviceName}/task/{id}/relaunch
                    $post(): Promise<void>;
                }
            } | any
        }
        ukOutgoingTransfer:  {
            // POST /domain/{serviceName}/ukOutgoingTransfer
            $post(body?: {tag: string}): Promise<domain.Task>;
        }
        ukRegistrars:  {
            // GET /domain/{serviceName}/ukRegistrars
            $get(): Promise<domain.UkRegistrar[]>;
        }
    } | any
}
// Api
type PathsDomainGET = '/domain' |
  '/domain/data/afnicAssociationInformation' |
  '/domain/data/afnicAssociationInformation/{associationInformationId}' |
  '/domain/data/afnicCorporationTrademarkInformation' |
  '/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}' |
  '/domain/data/claimNotice' |
  '/domain/data/extension' |
  '/domain/data/proContact' |
  '/domain/data/proContact/{proContactId}' |
  '/domain/data/smd' |
  '/domain/data/smd/{smdId}' |
  '/domain/rules' |
  '/domain/zone' |
  '/domain/zone/{zoneName}' |
  '/domain/zone/{zoneName}/dnssec' |
  '/domain/zone/{zoneName}/dynHost/login' |
  '/domain/zone/{zoneName}/dynHost/login/{login}' |
  '/domain/zone/{zoneName}/dynHost/record' |
  '/domain/zone/{zoneName}/dynHost/record/{id}' |
  '/domain/zone/{zoneName}/export' |
  '/domain/zone/{zoneName}/history' |
  '/domain/zone/{zoneName}/history/{creationDate}' |
  '/domain/zone/{zoneName}/record' |
  '/domain/zone/{zoneName}/record/{id}' |
  '/domain/zone/{zoneName}/redirection' |
  '/domain/zone/{zoneName}/redirection/{id}' |
  '/domain/zone/{zoneName}/serviceInfos' |
  '/domain/zone/{zoneName}/soa' |
  '/domain/zone/{zoneName}/status' |
  '/domain/zone/{zoneName}/task' |
  '/domain/zone/{zoneName}/task/{id}' |
  '/domain/{serviceName}' |
  '/domain/{serviceName}/authInfo' |
  '/domain/{serviceName}/configurations/obfuscatedEmails' |
  '/domain/{serviceName}/configurations/optin' |
  '/domain/{serviceName}/dsRecord' |
  '/domain/{serviceName}/dsRecord/{id}' |
  '/domain/{serviceName}/glueRecord' |
  '/domain/{serviceName}/glueRecord/{host}' |
  '/domain/{serviceName}/nameServer' |
  '/domain/{serviceName}/nameServer/{id}' |
  '/domain/{serviceName}/option' |
  '/domain/{serviceName}/option/{option}' |
  '/domain/{serviceName}/owo' |
  '/domain/{serviceName}/owo/{field}' |
  '/domain/{serviceName}/rules/emailsObfuscation' |
  '/domain/{serviceName}/rules/optin' |
  '/domain/{serviceName}/serviceInfos' |
  '/domain/{serviceName}/task' |
  '/domain/{serviceName}/task/{id}' |
  '/domain/{serviceName}/ukRegistrars';

type PathsDomainPUT = '/domain/data/smd/{smdId}' |
  '/domain/zone/{zoneName}/dynHost/login/{login}' |
  '/domain/zone/{zoneName}/dynHost/record/{id}' |
  '/domain/zone/{zoneName}/record/{id}' |
  '/domain/zone/{zoneName}/redirection/{id}' |
  '/domain/zone/{zoneName}/serviceInfos' |
  '/domain/zone/{zoneName}/soa' |
  '/domain/{serviceName}' |
  '/domain/{serviceName}/configurations/obfuscatedEmails' |
  '/domain/{serviceName}/configurations/optin' |
  '/domain/{serviceName}/serviceInfos';

type PathsDomainPOST = '/domain/data/afnicAssociationInformation' |
  '/domain/data/afnicCorporationTrademarkInformation' |
  '/domain/data/proContact' |
  '/domain/data/smd' |
  '/domain/zone/{zoneName}/changeContact' |
  '/domain/zone/{zoneName}/confirmTermination' |
  '/domain/zone/{zoneName}/dnssec' |
  '/domain/zone/{zoneName}/dynHost/login' |
  '/domain/zone/{zoneName}/dynHost/login/{login}/changePassword' |
  '/domain/zone/{zoneName}/dynHost/record' |
  '/domain/zone/{zoneName}/history/{creationDate}/restore' |
  '/domain/zone/{zoneName}/import' |
  '/domain/zone/{zoneName}/record' |
  '/domain/zone/{zoneName}/redirection' |
  '/domain/zone/{zoneName}/refresh' |
  '/domain/zone/{zoneName}/reset' |
  '/domain/zone/{zoneName}/task/{id}/accelerate' |
  '/domain/zone/{zoneName}/task/{id}/cancel' |
  '/domain/zone/{zoneName}/task/{id}/relaunch' |
  '/domain/zone/{zoneName}/terminate' |
  '/domain/{serviceName}/activateZone' |
  '/domain/{serviceName}/changeContact' |
  '/domain/{serviceName}/configurations/obfuscatedEmails/refresh' |
  '/domain/{serviceName}/dsRecord' |
  '/domain/{serviceName}/email/obfuscated/refresh' |
  '/domain/{serviceName}/glueRecord' |
  '/domain/{serviceName}/glueRecord/{host}/update' |
  '/domain/{serviceName}/nameServer' |
  '/domain/{serviceName}/nameServer/{id}/status' |
  '/domain/{serviceName}/nameServers/update' |
  '/domain/{serviceName}/owo' |
  '/domain/{serviceName}/task/{id}/accelerate' |
  '/domain/{serviceName}/task/{id}/cancel' |
  '/domain/{serviceName}/task/{id}/relaunch' |
  '/domain/{serviceName}/ukOutgoingTransfer';

type PathsDomainDELETE = '/domain/data/smd/{smdId}' |
  '/domain/zone/{zoneName}/dnssec' |
  '/domain/zone/{zoneName}/dynHost/login/{login}' |
  '/domain/zone/{zoneName}/dynHost/record/{id}' |
  '/domain/zone/{zoneName}/record/{id}' |
  '/domain/zone/{zoneName}/redirection/{id}' |
  '/domain/{serviceName}/glueRecord/{host}' |
  '/domain/{serviceName}/nameServer/{id}' |
  '/domain/{serviceName}/option/{option}' |
  '/domain/{serviceName}/owo/{field}';

export class ApiDomain extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the DOMAIN service
   * List available services
   */
  public get(path: '/domain', params: {whoisOwner?: string}): Promise<string[]>;
  /**
   * Domain name administration
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}', params: {serviceName: string}): Promise<domain.Domain>;
  /**
   * authInfo operations
   * Return authInfo code if the domain is unlocked
   */
  public get(path: '/domain/{serviceName}/authInfo', params: {serviceName: string}): Promise<string>;
  /**
   * Missing description
   * Retrieve obfuscated emails configuration
   */
  public get(path: '/domain/{serviceName}/configurations/obfuscatedEmails', params: {serviceName: string}): Promise<domain.configurations.ObfuscatedEmails[]>;
  /**
   * Missing description
   * Retrieve optin configuration
   */
  public get(path: '/domain/{serviceName}/configurations/optin', params: {serviceName: string}): Promise<domain.configurations.Optin[]>;
  /**
   * List the domain.DnssecKey objects
   * List of domain's DS Records
   */
  public get(path: '/domain/{serviceName}/dsRecord', params: {serviceName: string, flags?: OVH.dnssec.KeyFlagEnum, status?: OVH.dnssec.KeyStatusEnum}): Promise<number[]>;
  /**
   * Domain's DNSSEC Key
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/dsRecord/{id}', params: {id: number, serviceName: string}): Promise<domain.DnssecKey>;
  /**
   * List the domain.GlueRecord objects
   * List of glue record
   */
  public get(path: '/domain/{serviceName}/glueRecord', params: {serviceName: string, host?: string}): Promise<string[]>;
  /**
   * Glue record
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/glueRecord/{host}', params: {host: string, serviceName: string}): Promise<domain.GlueRecord>;
  /**
   * List the domain.CurrentNameServer objects
   * List of current name servers
   */
  public get(path: '/domain/{serviceName}/nameServer', params: {serviceName: string}): Promise<number[]>;
  /**
   * CurrentNameServer
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/nameServer/{id}', params: {id: number, serviceName: string}): Promise<domain.CurrentNameServer>;
  /**
   * List the domain.Option objects
   * List of domain options
   */
  public get(path: '/domain/{serviceName}/option', params: {serviceName: string}): Promise<domain.DomainOptionEnum[]>;
  /**
   * Information about the options of a domain
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/option/{option}', params: {option: OVH.domain.DomainOptionEnum, serviceName: string}): Promise<domain.Option>;
  /**
   * List the domain.Owo objects
   * List of whois obfuscators
   */
  public get(path: '/domain/{serviceName}/owo', params: {serviceName: string, field?: OVH.domain.WhoisObfuscatorFieldsEnum}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
  /**
   * Obfuscate whois
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/owo/{field}', params: {field: OVH.domain.WhoisObfuscatorFieldsEnum, serviceName: string}): Promise<domain.Owo>;
  /**
   * Missing description
   * Retrieve emails obfuscation rule
   */
  public get(path: '/domain/{serviceName}/rules/emailsObfuscation', params: {serviceName: string}): Promise<domain.ContactAllTypesEnum[]>;
  /**
   * Missing description
   * Retrieve optin rule
   */
  public get(path: '/domain/{serviceName}/rules/optin', params: {serviceName: string}): Promise<domain.rules.Optin[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the domain.Task objects
   * Domain pending tasks
   */
  public get(path: '/domain/{serviceName}/task', params: {serviceName: string, function_?: string, status?: OVH.domain.OperationStatusEnum}): Promise<number[]>;
  /**
   * Tasks associated to domain
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/task/{id}', params: {id: number, serviceName: string}): Promise<domain.Task>;
  /**
   * ukRegistrars operations
   * Return the list of all .uk registrars
   */
  public get(path: '/domain/{serviceName}/ukRegistrars', params: {serviceName: string}): Promise<domain.UkRegistrar[]>;
  /**
   * Missing description
   * Retrieve all association information according to Afnic
   */
  public get(path: '/domain/data/afnicAssociationInformation'): Promise<number[]>;
  /**
   * Missing description
   * Retrieve an association information according to Afnic
   */
  public get(path: '/domain/data/afnicAssociationInformation/{associationInformationId}', params: {associationInformationId: number}): Promise<domain.data.AssociationContact>;
  /**
   * Missing description
   * Retrieve all corporation trademark information according to Afnic
   */
  public get(path: '/domain/data/afnicCorporationTrademarkInformation'): Promise<number[]>;
  /**
   * Missing description
   * Retrieve a corporation trademark information according to Afnic
   */
  public get(path: '/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}', params: {afnicCorporationTrademarkId: number}): Promise<domain.data.AfnicCorporationTrademarkContact>;
  /**
   * Missing description
   * Retrieve claim notices associated to a domain
   */
  public get(path: '/domain/data/claimNotice', params: {domain: string}): Promise<domain.data.claimNotice.ClaimNotice>;
  /**
   * Missing description
   * List all the extensions for a specific country
   */
  public get(path: '/domain/data/extension', params: {country: OVH.nichandle.CountryEnum}): Promise<string[]>;
  /**
   * Missing description
   * Retrieve all your Pro Contact
   */
  public get(path: '/domain/data/proContact'): Promise<number[]>;
  /**
   * Missing description
   * Retrieve information about a Pro Contact
   */
  public get(path: '/domain/data/proContact/{proContactId}', params: {proContactId: number}): Promise<domain.data.ProContact>;
  /**
   * Missing description
   * List all your SMD files
   */
  public get(path: '/domain/data/smd', params: {protectedLabels_label?: string}): Promise<number[]>;
  /**
   * Missing description
   * Retrieve information about a SMD file
   */
  public get(path: '/domain/data/smd/{smdId}', params: {smdId: number}): Promise<domain.data.Smd>;
  /**
   * Rules for creating a domain
   * List all the rules for a specific cartId/itemId
   */
  public get(path: '/domain/rules', params: {cartId: string, itemId: number}): Promise<domain.Rule>;
  /**
   * Operations about the HOSTING service
   * List available services
   */
  public get(path: '/domain/zone'): Promise<string[]>;
  /**
   * Zone dns Management
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}', params: {zoneName: string}): Promise<domain.zone.Zone>;
  /**
   * Manage Dnssec for this zone
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/dnssec', params: {zoneName: string}): Promise<domain.zone.Dnssec>;
  /**
   * List the domain.zone.DynHostLogin objects
   * DynHost' logins
   */
  public get(path: '/domain/zone/{zoneName}/dynHost/login', params: {zoneName: string, login?: string, subDomain?: string}): Promise<string[]>;
  /**
   * Manage DynHost login
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/dynHost/login/{login}', params: {login: string, zoneName: string}): Promise<domain.zone.DynHostLogin>;
  /**
   * List the domain.zone.DynHostRecord objects
   * DynHost' records
   */
  public get(path: '/domain/zone/{zoneName}/dynHost/record', params: {zoneName: string, subDomain?: string}): Promise<number[]>;
  /**
   * DynHost record
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/dynHost/record/{id}', params: {id: number, zoneName: string}): Promise<domain.zone.DynHostRecord>;
  /**
   * export operations
   * Export zone
   */
  public get(path: '/domain/zone/{zoneName}/export', params: {zoneName: string}): Promise<string>;
  /**
   * List the domain.zone.ZoneRestorePoint objects
   * Zone restore points
   */
  public get(path: '/domain/zone/{zoneName}/history', params: {zoneName: string, creationDate_from?: string, creationDate_to?: string}): Promise<string[]>;
  /**
   * Zone restore point
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/history/{creationDate}', params: {creationDate: string, zoneName: string}): Promise<domain.zone.ZoneRestorePoint>;
  /**
   * List the domain.zone.Record objects
   * Records of the zone
   */
  public get(path: '/domain/zone/{zoneName}/record', params: {zoneName: string, fieldType?: OVH.zone.NamedResolutionFieldTypeEnum, subDomain?: string}): Promise<number[]>;
  /**
   * Zone resource records
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/record/{id}', params: {id: number, zoneName: string}): Promise<domain.zone.Record>;
  /**
   * List the domain.zone.Redirection objects
   * Redirections
   */
  public get(path: '/domain/zone/{zoneName}/redirection', params: {zoneName: string, subDomain?: string}): Promise<number[]>;
  /**
   * Redirection
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/redirection/{id}', params: {id: number, zoneName: string}): Promise<domain.zone.Redirection>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/serviceInfos', params: {zoneName: string}): Promise<services.Service>;
  /**
   * Zone Start Of Authority
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/soa', params: {zoneName: string}): Promise<domain.zone.Soa>;
  /**
   * status operations
   * Zone status
   */
  public get(path: '/domain/zone/{zoneName}/status', params: {zoneName: string}): Promise<zone.Status>;
  /**
   * List the domain.zone.Task objects
   * Domain pending tasks
   */
  public get(path: '/domain/zone/{zoneName}/task', params: {zoneName: string, function_?: string, status?: OVH.domain.OperationStatusEnum}): Promise<number[]>;
  /**
   * Tasks associated to a zone
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/task/{id}', params: {id: number, zoneName: string}): Promise<domain.zone.Task>;
  public get(path: PathsDomainGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Domain name administration
   * Alter this object properties
   */
  public put(path: '/domain/{serviceName}', params: {serviceName: string, dnssecSupported?: boolean, domain?: string, glueRecordIpv6Supported?: boolean, glueRecordMultiIpSupported?: boolean, lastUpdate?: string, nameServerType?: OVH.domain.DomainNsTypeEnum, offer?: OVH.domain.OfferEnum, owoSupported?: boolean, parentService?: OVH.domain.ParentService, transferLockStatus?: OVH.domain.DomainLockStatusEnum, whoisOwner?: string}): Promise<void>;
  /**
   * Missing description
   * Save a new obfuscated emails configuration
   */
  public put(path: '/domain/{serviceName}/configurations/obfuscatedEmails', params: {serviceName: string, contacts: OVH.domain.ContactAllTypesEnum[]}): Promise<domain.configurations.ObfuscatedEmails[]>;
  /**
   * Missing description
   * Save a new optin configuration
   */
  public put(path: '/domain/{serviceName}/configurations/optin', params: {serviceName: string, optin: OVH.domain.configurations.Optin[]}): Promise<domain.configurations.Optin[]>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/domain/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Missing description
   * Modify an existing SMD file
   */
  public put(path: '/domain/data/smd/{smdId}', params: {smdId: number, data: string}): Promise<domain.data.Smd>;
  /**
   * Manage DynHost login
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/dynHost/login/{login}', params: {login: string, zoneName: string, subDomain?: string, zone?: string}): Promise<void>;
  /**
   * DynHost record
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/dynHost/record/{id}', params: {id: number, zoneName: string, ip?: string, subDomain?: string, ttl?: number, zone?: string}): Promise<void>;
  /**
   * Zone resource records
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/record/{id}', params: {id: number, zoneName: string, fieldType?: OVH.zone.NamedResolutionFieldTypeEnum, subDomain?: string, target?: string, ttl?: number, zone?: string}): Promise<void>;
  /**
   * Redirection
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/redirection/{id}', params: {id: number, zoneName: string, description?: string, keywords?: string, subDomain?: string, target?: string, title?: string, type?: OVH.zone.RedirectionTypeEnum, zone?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/serviceInfos', params: {zoneName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Zone Start Of Authority
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/soa', params: {zoneName: string, email?: string, expire?: number, nxDomainTtl?: number, refresh?: number, serial?: number, server?: string, ttl?: number}): Promise<void>;
  public put(path: PathsDomainPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * activateZone operations
   * Activate the DNS zone for this domain
   */
  public post(path: '/domain/{serviceName}/activateZone', params: {serviceName: string, minimized?: boolean}): Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/domain/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Missing description
   * Refresh an obfuscated emails configuration
   */
  public post(path: '/domain/{serviceName}/configurations/obfuscatedEmails/refresh', params: {serviceName: string, contacts: OVH.domain.ContactAllTypesEnum[]}): Promise<void>;
  /**
   * List the domain.DnssecKey objects
   * Update DS records
   */
  public post(path: '/domain/{serviceName}/dsRecord', params: {serviceName: string, keys: OVH.dnssec.Key[]}): Promise<domain.Task>;
  /**
   * refresh operations
   * Regenerate the obfuscated email address
   */
  public post(path: '/domain/{serviceName}/email/obfuscated/refresh', params: {serviceName: string, contactType: OVH.domain.DomainContactTypeEnum[]}): Promise<void>;
  /**
   * List the domain.GlueRecord objects
   * Create a glue record
   */
  public post(path: '/domain/{serviceName}/glueRecord', params: {serviceName: string, host: string, ips: string[]}): Promise<domain.Task>;
  /**
   * update operations
   * Update the glue record
   */
  public post(path: '/domain/{serviceName}/glueRecord/{host}/update', params: {host: string, serviceName: string, ips: string[]}): Promise<domain.Task>;
  /**
   * List the domain.CurrentNameServer objects
   * Add new name server
   */
  public post(path: '/domain/{serviceName}/nameServer', params: {serviceName: string, nameServer: OVH.domain.DomainNs[]}): Promise<domain.Task>;
  /**
   * status operations
   * Get name server status
   */
  public post(path: '/domain/{serviceName}/nameServer/{id}/status', params: {id: number, serviceName: string}): Promise<domain.DomainNsStatus>;
  /**
   * update operations
   * Update DNS servers
   */
  public post(path: '/domain/{serviceName}/nameServers/update', params: {serviceName: string, nameServers: OVH.domain.DomainNs[]}): Promise<domain.Task>;
  /**
   * List the domain.Owo objects
   * Add whois obfuscators
   */
  public post(path: '/domain/{serviceName}/owo', params: {serviceName: string, fields: OVH.domain.WhoisObfuscatorFieldsEnum[]}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
  /**
   * accelerate operations
   * Accelerate the task
   */
  public post(path: '/domain/{serviceName}/task/{id}/accelerate', params: {id: number, serviceName: string}): Promise<void>;
  /**
   * cancel operations
   * Cancel the task
   */
  public post(path: '/domain/{serviceName}/task/{id}/cancel', params: {id: number, serviceName: string}): Promise<void>;
  /**
   * relaunch operations
   * Relaunch the task
   */
  public post(path: '/domain/{serviceName}/task/{id}/relaunch', params: {id: number, serviceName: string}): Promise<void>;
  /**
   * ukOutgoingTransfer operations
   * Schedule an outgoing transfer task for this domain (.uk only)
   */
  public post(path: '/domain/{serviceName}/ukOutgoingTransfer', params: {serviceName: string, tag: string}): Promise<domain.Task>;
  /**
   * Missing description
   * Post a new association information according to Afnic
   */
  public post(path: '/domain/data/afnicAssociationInformation', params: {contactId: number, declarationDate: string, publicationDate: string, publicationNumber: string, publicationPageNumber: string}): Promise<domain.data.AssociationContact>;
  /**
   * Missing description
   * Post a new corporation trademark information according to Afnic
   */
  public post(path: '/domain/data/afnicCorporationTrademarkInformation', params: {contactId: number, inpiNumber: string, inpiTrademarkOwner: string}): Promise<domain.data.AfnicCorporationTrademarkContact>;
  /**
   * Missing description
   * Post new information about .pro contact information
   */
  public post(path: '/domain/data/proContact', params: {authority: string, authorityWebsite: string, contactId?: number, jobDescription: string, licenseNumber: string}): Promise<domain.data.ProContact>;
  /**
   * Missing description
   * Post a new SMD file
   */
  public post(path: '/domain/data/smd', params: {data: string}): Promise<domain.data.Smd>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/domain/zone/{zoneName}/changeContact', params: {zoneName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/domain/zone/{zoneName}/confirmTermination', params: {zoneName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Manage Dnssec for this zone
   * Enable Dnssec
   */
  public post(path: '/domain/zone/{zoneName}/dnssec', params: {zoneName: string}): Promise<void>;
  /**
   * List the domain.zone.DynHostLogin objects
   * Create a new DynHost login
   */
  public post(path: '/domain/zone/{zoneName}/dynHost/login', params: {zoneName: string, loginSuffix: string, password: string, subDomain: string}): Promise<domain.zone.DynHostLogin>;
  /**
   * changePassword operations
   * Change password of the DynHost login
   */
  public post(path: '/domain/zone/{zoneName}/dynHost/login/{login}/changePassword', params: {login: string, zoneName: string, password: string}): Promise<void>;
  /**
   * List the domain.zone.DynHostRecord objects
   * Create a new DynHost record (Don't forget to refresh the zone)
   */
  public post(path: '/domain/zone/{zoneName}/dynHost/record', params: {zoneName: string, ip: string, subDomain?: string}): Promise<domain.zone.DynHostRecord>;
  /**
   * restore operations
   * Restore the DNS zone
   */
  public post(path: '/domain/zone/{zoneName}/history/{creationDate}/restore', params: {creationDate: string, zoneName: string}): Promise<domain.zone.Task>;
  /**
   * import operations
   * Import zone
   */
  public post(path: '/domain/zone/{zoneName}/import', params: {zoneName: string, zoneFile: string}): Promise<domain.zone.Task>;
  /**
   * List the domain.zone.Record objects
   * Create a new DNS record (Don't forget to refresh the zone)
   */
  public post(path: '/domain/zone/{zoneName}/record', params: {zoneName: string, fieldType: OVH.zone.NamedResolutionFieldTypeEnum, subDomain?: string, target: string, ttl?: number}): Promise<domain.zone.Record>;
  /**
   * List the domain.zone.Redirection objects
   * Create a new redirection (Don't forget to refresh the zone)
   */
  public post(path: '/domain/zone/{zoneName}/redirection', params: {zoneName: string, description?: string, keywords?: string, subDomain?: string, target: string, title?: string, type: OVH.zone.RedirectionTypeEnum}): Promise<domain.zone.Redirection>;
  /**
   * refresh operations
   * Apply zone modification on DNS servers
   */
  public post(path: '/domain/zone/{zoneName}/refresh', params: {zoneName: string}): Promise<void>;
  /**
   * reset operations
   * Reset the DNS zone
   */
  public post(path: '/domain/zone/{zoneName}/reset', params: {zoneName: string, DnsRecords?: OVH.zone.ResetRecord[], minimized?: boolean}): Promise<void>;
  /**
   * accelerate operations
   * Accelerate the task
   */
  public post(path: '/domain/zone/{zoneName}/task/{id}/accelerate', params: {id: number, zoneName: string}): Promise<void>;
  /**
   * cancel operations
   * Cancel the task
   */
  public post(path: '/domain/zone/{zoneName}/task/{id}/cancel', params: {id: number, zoneName: string}): Promise<void>;
  /**
   * relaunch operations
   * Relaunch the task
   */
  public post(path: '/domain/zone/{zoneName}/task/{id}/relaunch', params: {id: number, zoneName: string}): Promise<void>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/domain/zone/{zoneName}/terminate', params: {zoneName: string}): Promise<string>;
  public post(path: PathsDomainPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Glue record
   * Delete the glue record
   */
  public delete(path: '/domain/{serviceName}/glueRecord/{host}', params: {host: string, serviceName: string}): Promise<domain.Task>;
  /**
   * CurrentNameServer
   * Delete a name server
   */
  public delete(path: '/domain/{serviceName}/nameServer/{id}', params: {id: number, serviceName: string}): Promise<domain.Task>;
  /**
   * Information about the options of a domain
   * Release a given option
   */
  public delete(path: '/domain/{serviceName}/option/{option}', params: {option: OVH.domain.DomainOptionEnum, serviceName: string}): Promise<void>;
  /**
   * Obfuscate whois
   * Delete a whois obfuscator
   */
  public delete(path: '/domain/{serviceName}/owo/{field}', params: {field: OVH.domain.WhoisObfuscatorFieldsEnum, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete a SMD file
   */
  public delete(path: '/domain/data/smd/{smdId}', params: {smdId: number}): Promise<void>;
  /**
   * Manage Dnssec for this zone
   * Disable Dnssec
   */
  public delete(path: '/domain/zone/{zoneName}/dnssec', params: {zoneName: string}): Promise<void>;
  /**
   * Manage DynHost login
   * Delete a DynHost login
   */
  public delete(path: '/domain/zone/{zoneName}/dynHost/login/{login}', params: {login: string, zoneName: string}): Promise<void>;
  /**
   * DynHost record
   * Delete a DynHost record (Don't forget to refresh the zone)
   */
  public delete(path: '/domain/zone/{zoneName}/dynHost/record/{id}', params: {id: number, zoneName: string}): Promise<void>;
  /**
   * Zone resource records
   * Delete a DNS record (Don't forget to refresh the zone)
   */
  public delete(path: '/domain/zone/{zoneName}/record/{id}', params: {id: number, zoneName: string}): Promise<void>;
  /**
   * Redirection
   * Delete a redirection (Don't forget to refresh the zone)
   */
  public delete(path: '/domain/zone/{zoneName}/redirection/{id}', params: {id: number, zoneName: string}): Promise<void>;
  public delete(path: PathsDomainDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
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
    GET(param?: {whoisOwner?: string}): Promise<string[]>;
    [keys: string]: {
        // GET /domain/{serviceName}
        GET(): Promise<domain.Domain>;
        // PUT /domain/{serviceName}
        PUT(body?: {body: domain.Domain}): Promise<void>;
        task:  {
            // GET /domain/{serviceName}/task
            GET(param?: {function_?: string, status?: domain.OperationStatusEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /domain/{serviceName}/task/{id}
                GET(): Promise<domain.Task>;
                cancel:  {
                    // POST /domain/{serviceName}/task/{id}/cancel
                    POST(): Promise<void>;
                }
                relaunch:  {
                    // POST /domain/{serviceName}/task/{id}/relaunch
                    POST(): Promise<void>;
                }
                accelerate:  {
                    // POST /domain/{serviceName}/task/{id}/accelerate
                    POST(): Promise<void>;
                }
            } | any
        }
        ukRegistrars:  {
            // GET /domain/{serviceName}/ukRegistrars
            GET(): Promise<domain.UkRegistrar[]>;
        }
        dsRecord:  {
            // GET /domain/{serviceName}/dsRecord
            GET(param?: {status?: dnssec.KeyStatusEnum, flags?: dnssec.KeyFlagEnum}): Promise<number[]>;
            // POST /domain/{serviceName}/dsRecord
            POST(body?: {keys: dnssec.Key[]}): Promise<domain.Task>;
            [keys: string]: {
                // GET /domain/{serviceName}/dsRecord/{id}
                GET(): Promise<domain.DnssecKey>;
            } | any
        }
        configurations:  {
            optin:  {
                // GET /domain/{serviceName}/configurations/optin
                GET(): Promise<domain.configurations.Optin[]>;
                // PUT /domain/{serviceName}/configurations/optin
                PUT(body?: {optin: domain.configurations.Optin[]}): Promise<domain.configurations.Optin[]>;
            }
            obfuscatedEmails:  {
                // GET /domain/{serviceName}/configurations/obfuscatedEmails
                GET(): Promise<domain.configurations.ObfuscatedEmails[]>;
                // PUT /domain/{serviceName}/configurations/obfuscatedEmails
                PUT(body?: {contacts: domain.ContactAllTypesEnum[]}): Promise<domain.configurations.ObfuscatedEmails[]>;
                refresh:  {
                    // POST /domain/{serviceName}/configurations/obfuscatedEmails/refresh
                    POST(body?: {contacts: domain.ContactAllTypesEnum[]}): Promise<void>;
                }
            }
        }
        option:  {
            // GET /domain/{serviceName}/option
            GET(): Promise<domain.DomainOptionEnum[]>;
            [keys: string]: {
                // GET /domain/{serviceName}/option/{option}
                GET(): Promise<domain.Option>;
                // DELETE /domain/{serviceName}/option/{option}
                DELETE(): Promise<void>;
            } | any
        }
        owo:  {
            // GET /domain/{serviceName}/owo
            GET(param?: {field?: domain.WhoisObfuscatorFieldsEnum}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            // POST /domain/{serviceName}/owo
            POST(body?: {fields: domain.WhoisObfuscatorFieldsEnum[]}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            [keys: string]: {
                // GET /domain/{serviceName}/owo/{field}
                GET(): Promise<domain.Owo>;
                // DELETE /domain/{serviceName}/owo/{field}
                DELETE(): Promise<void>;
            } | any
        }
        nameServers:  {
            update:  {
                // POST /domain/{serviceName}/nameServers/update
                POST(body?: {nameServers: domain.DomainNs[]}): Promise<domain.Task>;
            }
        }
        changeContact:  {
            // POST /domain/{serviceName}/changeContact
            POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
        }
        authInfo:  {
            // GET /domain/{serviceName}/authInfo
            GET(): Promise<string>;
        }
        serviceInfos:  {
            // GET /domain/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /domain/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        activateZone:  {
            // POST /domain/{serviceName}/activateZone
            POST(body?: {minimized?: boolean}): Promise<void>;
        }
        email:  {
            obfuscated:  {
                refresh:  {
                    // POST /domain/{serviceName}/email/obfuscated/refresh
                    POST(body?: {contactType: domain.DomainContactTypeEnum[]}): Promise<void>;
                }
            }
        }
        glueRecord:  {
            // GET /domain/{serviceName}/glueRecord
            GET(param?: {host?: string}): Promise<string[]>;
            // POST /domain/{serviceName}/glueRecord
            POST(body?: {ips: string[], host: string}): Promise<domain.Task>;
            [keys: string]: {
                // GET /domain/{serviceName}/glueRecord/{host}
                GET(): Promise<domain.GlueRecord>;
                // DELETE /domain/{serviceName}/glueRecord/{host}
                DELETE(): Promise<domain.Task>;
                update:  {
                    // POST /domain/{serviceName}/glueRecord/{host}/update
                    POST(body?: {ips: string[]}): Promise<domain.Task>;
                }
            } | any
        }
        rules:  {
            emailsObfuscation:  {
                // GET /domain/{serviceName}/rules/emailsObfuscation
                GET(): Promise<domain.ContactAllTypesEnum[]>;
            }
            optin:  {
                // GET /domain/{serviceName}/rules/optin
                GET(): Promise<domain.rules.Optin[]>;
            }
        }
        ukOutgoingTransfer:  {
            // POST /domain/{serviceName}/ukOutgoingTransfer
            POST(body?: {tag: string}): Promise<domain.Task>;
        }
        nameServer:  {
            // GET /domain/{serviceName}/nameServer
            GET(): Promise<number[]>;
            // POST /domain/{serviceName}/nameServer
            POST(body?: {nameServer: domain.DomainNs[]}): Promise<domain.Task>;
            [keys: string]: {
                // GET /domain/{serviceName}/nameServer/{id}
                GET(): Promise<domain.CurrentNameServer>;
                // DELETE /domain/{serviceName}/nameServer/{id}
                DELETE(): Promise<domain.Task>;
                status:  {
                    // POST /domain/{serviceName}/nameServer/{id}/status
                    POST(): Promise<domain.DomainNsStatus>;
                }
            } | any
        }
    } | any
    data:  {
        proContact:  {
            // GET /domain/data/proContact
            GET(): Promise<number[]>;
            // POST /domain/data/proContact
            POST(body?: {jobDescription: string, authority: string, authorityWebsite: string, licenseNumber: string, contactId?: number}): Promise<domain.data.ProContact>;
            [keys: string]: {
                // GET /domain/data/proContact/{proContactId}
                GET(): Promise<domain.data.ProContact>;
            } | any
        }
        extension:  {
            // GET /domain/data/extension
            GET(param?: {country: nichandle.CountryEnum}): Promise<string[]>;
        }
        claimNotice:  {
            // GET /domain/data/claimNotice
            GET(param?: {domain: string}): Promise<domain.data.claimNotice.ClaimNotice>;
        }
        afnicAssociationInformation:  {
            // GET /domain/data/afnicAssociationInformation
            GET(): Promise<number[]>;
            // POST /domain/data/afnicAssociationInformation
            POST(body?: {declarationDate: string, publicationDate: string, publicationNumber: string, publicationPageNumber: string, contactId: number}): Promise<domain.data.AssociationContact>;
            [keys: string]: {
                // GET /domain/data/afnicAssociationInformation/{associationInformationId}
                GET(): Promise<domain.data.AssociationContact>;
            } | any
        }
        smd:  {
            // GET /domain/data/smd
            GET(param?: {protectedLabels_label?: string}): Promise<number[]>;
            // POST /domain/data/smd
            POST(body?: {data: string}): Promise<domain.data.Smd>;
            [keys: string]: {
                // GET /domain/data/smd/{smdId}
                GET(): Promise<domain.data.Smd>;
                // PUT /domain/data/smd/{smdId}
                PUT(body?: {data: string}): Promise<domain.data.Smd>;
                // DELETE /domain/data/smd/{smdId}
                DELETE(): Promise<void>;
            } | any
        }
        afnicCorporationTrademarkInformation:  {
            // GET /domain/data/afnicCorporationTrademarkInformation
            GET(): Promise<number[]>;
            // POST /domain/data/afnicCorporationTrademarkInformation
            POST(body?: {inpiNumber: string, inpiTrademarkOwner: string, contactId: number}): Promise<domain.data.AfnicCorporationTrademarkContact>;
            [keys: string]: {
                // GET /domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}
                GET(): Promise<domain.data.AfnicCorporationTrademarkContact>;
            } | any
        }
    }
    zone:  {
        // GET /domain/zone
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /domain/zone/{zoneName}
            GET(): Promise<domain.zone.Zone>;
            status:  {
                // GET /domain/zone/{zoneName}/status
                GET(): Promise<zone.Status>;
            }
            terminate:  {
                // POST /domain/zone/{zoneName}/terminate
                POST(): Promise<string>;
            }
            refresh:  {
                // POST /domain/zone/{zoneName}/refresh
                POST(): Promise<void>;
            }
            task:  {
                // GET /domain/zone/{zoneName}/task
                GET(param?: {status?: domain.OperationStatusEnum, function_?: string}): Promise<number[]>;
                [keys: string]: {
                    // GET /domain/zone/{zoneName}/task/{id}
                    GET(): Promise<domain.zone.Task>;
                    cancel:  {
                        // POST /domain/zone/{zoneName}/task/{id}/cancel
                        POST(): Promise<void>;
                    }
                    relaunch:  {
                        // POST /domain/zone/{zoneName}/task/{id}/relaunch
                        POST(): Promise<void>;
                    }
                    accelerate:  {
                        // POST /domain/zone/{zoneName}/task/{id}/accelerate
                        POST(): Promise<void>;
                    }
                } | any
            }
            export:  {
                // GET /domain/zone/{zoneName}/export
                GET(): Promise<string>;
            }
            soa:  {
                // GET /domain/zone/{zoneName}/soa
                GET(): Promise<domain.zone.Soa>;
                // PUT /domain/zone/{zoneName}/soa
                PUT(body?: {body: domain.zone.Soa}): Promise<void>;
            }
            redirection:  {
                // GET /domain/zone/{zoneName}/redirection
                GET(param?: {subDomain?: string}): Promise<number[]>;
                // POST /domain/zone/{zoneName}/redirection
                POST(body?: {description?: string, title?: string, subDomain?: string, keywords?: string, type: zone.RedirectionTypeEnum, target: string}): Promise<domain.zone.Redirection>;
                [keys: string]: {
                    // GET /domain/zone/{zoneName}/redirection/{id}
                    GET(): Promise<domain.zone.Redirection>;
                    // PUT /domain/zone/{zoneName}/redirection/{id}
                    PUT(body?: {body: domain.zone.Redirection}): Promise<void>;
                    // DELETE /domain/zone/{zoneName}/redirection/{id}
                    DELETE(): Promise<void>;
                } | any
            }
            dnssec:  {
                // GET /domain/zone/{zoneName}/dnssec
                GET(): Promise<domain.zone.Dnssec>;
                // POST /domain/zone/{zoneName}/dnssec
                POST(): Promise<void>;
                // DELETE /domain/zone/{zoneName}/dnssec
                DELETE(): Promise<void>;
            }
            dynHost:  {
                record:  {
                    // GET /domain/zone/{zoneName}/dynHost/record
                    GET(param?: {subDomain?: string}): Promise<number[]>;
                    // POST /domain/zone/{zoneName}/dynHost/record
                    POST(body?: {ip: string, subDomain?: string}): Promise<domain.zone.DynHostRecord>;
                    [keys: string]: {
                        // GET /domain/zone/{zoneName}/dynHost/record/{id}
                        GET(): Promise<domain.zone.DynHostRecord>;
                        // PUT /domain/zone/{zoneName}/dynHost/record/{id}
                        PUT(body?: {body: domain.zone.DynHostRecord}): Promise<void>;
                        // DELETE /domain/zone/{zoneName}/dynHost/record/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                login:  {
                    // GET /domain/zone/{zoneName}/dynHost/login
                    GET(param?: {subDomain?: string, login?: string}): Promise<string[]>;
                    // POST /domain/zone/{zoneName}/dynHost/login
                    POST(body?: {subDomain: string, password: string, loginSuffix: string}): Promise<domain.zone.DynHostLogin>;
                    [keys: string]: {
                        // GET /domain/zone/{zoneName}/dynHost/login/{login}
                        GET(): Promise<domain.zone.DynHostLogin>;
                        // PUT /domain/zone/{zoneName}/dynHost/login/{login}
                        PUT(body?: {body: domain.zone.DynHostLogin}): Promise<void>;
                        // DELETE /domain/zone/{zoneName}/dynHost/login/{login}
                        DELETE(): Promise<void>;
                        changePassword:  {
                            // POST /domain/zone/{zoneName}/dynHost/login/{login}/changePassword
                            POST(body?: {password: string}): Promise<void>;
                        }
                    } | any
                }
            }
            import:  {
                // POST /domain/zone/{zoneName}/import
                POST(body?: {zoneFile: string}): Promise<domain.zone.Task>;
            }
            reset:  {
                // POST /domain/zone/{zoneName}/reset
                POST(body?: {DnsRecords?: zone.ResetRecord[], minimized?: boolean}): Promise<void>;
            }
            record:  {
                // GET /domain/zone/{zoneName}/record
                GET(param?: {fieldType?: zone.NamedResolutionFieldTypeEnum, subDomain?: string}): Promise<number[]>;
                // POST /domain/zone/{zoneName}/record
                POST(body?: {fieldType: zone.NamedResolutionFieldTypeEnum, ttl?: number, target: string, subDomain?: string}): Promise<domain.zone.Record>;
                [keys: string]: {
                    // GET /domain/zone/{zoneName}/record/{id}
                    GET(): Promise<domain.zone.Record>;
                    // PUT /domain/zone/{zoneName}/record/{id}
                    PUT(body?: {body: domain.zone.Record}): Promise<void>;
                    // DELETE /domain/zone/{zoneName}/record/{id}
                    DELETE(): Promise<void>;
                } | any
            }
            history:  {
                // GET /domain/zone/{zoneName}/history
                GET(param?: {creationDate_from?: string, creationDate_to?: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /domain/zone/{zoneName}/history/{creationDate}
                    GET(): Promise<domain.zone.ZoneRestorePoint>;
                    restore:  {
                        // POST /domain/zone/{zoneName}/history/{creationDate}/restore
                        POST(): Promise<domain.zone.Task>;
                    }
                } | any
            }
            changeContact:  {
                // POST /domain/zone/{zoneName}/changeContact
                POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
            }
            confirmTermination:  {
                // POST /domain/zone/{zoneName}/confirmTermination
                POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
            }
            serviceInfos:  {
                // GET /domain/zone/{zoneName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /domain/zone/{zoneName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
    rules:  {
        // GET /domain/rules
        GET(param?: {cartId: string, itemId: number}): Promise<domain.Rule>;
    }
}
// Api
type PathsDomainGET = '/domain' |
  '/domain/{serviceName}/task/{id}' |
  '/domain/{serviceName}/task' |
  '/domain/{serviceName}/ukRegistrars' |
  '/domain/{serviceName}/dsRecord' |
  '/domain/{serviceName}/dsRecord/{id}' |
  '/domain/{serviceName}/configurations/optin' |
  '/domain/{serviceName}/configurations/obfuscatedEmails' |
  '/domain/{serviceName}/option' |
  '/domain/{serviceName}/option/{option}' |
  '/domain/{serviceName}/owo' |
  '/domain/{serviceName}/owo/{field}' |
  '/domain/{serviceName}' |
  '/domain/{serviceName}/authInfo' |
  '/domain/{serviceName}/serviceInfos' |
  '/domain/{serviceName}/glueRecord/{host}' |
  '/domain/{serviceName}/glueRecord' |
  '/domain/{serviceName}/rules/emailsObfuscation' |
  '/domain/{serviceName}/rules/optin' |
  '/domain/{serviceName}/nameServer/{id}' |
  '/domain/{serviceName}/nameServer' |
  '/domain/data/proContact' |
  '/domain/data/proContact/{proContactId}' |
  '/domain/data/extension' |
  '/domain/data/claimNotice' |
  '/domain/data/afnicAssociationInformation/{associationInformationId}' |
  '/domain/data/afnicAssociationInformation' |
  '/domain/data/smd/{smdId}' |
  '/domain/data/smd' |
  '/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}' |
  '/domain/data/afnicCorporationTrademarkInformation' |
  '/domain/zone' |
  '/domain/zone/{zoneName}/status' |
  '/domain/zone/{zoneName}' |
  '/domain/zone/{zoneName}/task/{id}' |
  '/domain/zone/{zoneName}/task' |
  '/domain/zone/{zoneName}/export' |
  '/domain/zone/{zoneName}/soa' |
  '/domain/zone/{zoneName}/redirection' |
  '/domain/zone/{zoneName}/redirection/{id}' |
  '/domain/zone/{zoneName}/dnssec' |
  '/domain/zone/{zoneName}/dynHost/record/{id}' |
  '/domain/zone/{zoneName}/dynHost/record' |
  '/domain/zone/{zoneName}/dynHost/login' |
  '/domain/zone/{zoneName}/dynHost/login/{login}' |
  '/domain/zone/{zoneName}/record' |
  '/domain/zone/{zoneName}/record/{id}' |
  '/domain/zone/{zoneName}/history' |
  '/domain/zone/{zoneName}/history/{creationDate}' |
  '/domain/zone/{zoneName}/serviceInfos' |
  '/domain/rules';

type PathsDomainPUT = '/domain/{serviceName}/configurations/optin' |
  '/domain/{serviceName}/configurations/obfuscatedEmails' |
  '/domain/{serviceName}' |
  '/domain/{serviceName}/serviceInfos' |
  '/domain/data/smd/{smdId}' |
  '/domain/zone/{zoneName}/soa' |
  '/domain/zone/{zoneName}/redirection/{id}' |
  '/domain/zone/{zoneName}/dynHost/record/{id}' |
  '/domain/zone/{zoneName}/dynHost/login/{login}' |
  '/domain/zone/{zoneName}/record/{id}' |
  '/domain/zone/{zoneName}/serviceInfos';

type PathsDomainPOST = '/domain/{serviceName}/task/{id}/cancel' |
  '/domain/{serviceName}/task/{id}/relaunch' |
  '/domain/{serviceName}/task/{id}/accelerate' |
  '/domain/{serviceName}/dsRecord' |
  '/domain/{serviceName}/configurations/obfuscatedEmails/refresh' |
  '/domain/{serviceName}/owo' |
  '/domain/{serviceName}/nameServers/update' |
  '/domain/{serviceName}/changeContact' |
  '/domain/{serviceName}/activateZone' |
  '/domain/{serviceName}/email/obfuscated/refresh' |
  '/domain/{serviceName}/glueRecord/{host}/update' |
  '/domain/{serviceName}/glueRecord' |
  '/domain/{serviceName}/ukOutgoingTransfer' |
  '/domain/{serviceName}/nameServer/{id}/status' |
  '/domain/{serviceName}/nameServer' |
  '/domain/data/proContact' |
  '/domain/data/afnicAssociationInformation' |
  '/domain/data/smd' |
  '/domain/data/afnicCorporationTrademarkInformation' |
  '/domain/zone/{zoneName}/terminate' |
  '/domain/zone/{zoneName}/refresh' |
  '/domain/zone/{zoneName}/task/{id}/cancel' |
  '/domain/zone/{zoneName}/task/{id}/relaunch' |
  '/domain/zone/{zoneName}/task/{id}/accelerate' |
  '/domain/zone/{zoneName}/redirection' |
  '/domain/zone/{zoneName}/dnssec' |
  '/domain/zone/{zoneName}/dynHost/record' |
  '/domain/zone/{zoneName}/dynHost/login' |
  '/domain/zone/{zoneName}/dynHost/login/{login}/changePassword' |
  '/domain/zone/{zoneName}/import' |
  '/domain/zone/{zoneName}/reset' |
  '/domain/zone/{zoneName}/record' |
  '/domain/zone/{zoneName}/history/{creationDate}/restore' |
  '/domain/zone/{zoneName}/changeContact' |
  '/domain/zone/{zoneName}/confirmTermination';

type PathsDomainDELETE = '/domain/{serviceName}/option/{option}' |
  '/domain/{serviceName}/owo/{field}' |
  '/domain/{serviceName}/glueRecord/{host}' |
  '/domain/{serviceName}/nameServer/{id}' |
  '/domain/data/smd/{smdId}' |
  '/domain/zone/{zoneName}/redirection/{id}' |
  '/domain/zone/{zoneName}/dnssec' |
  '/domain/zone/{zoneName}/dynHost/record/{id}' |
  '/domain/zone/{zoneName}/dynHost/login/{login}' |
  '/domain/zone/{zoneName}/record/{id}';

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
  public get(path: '/domain/{serviceName}/dsRecord/{id}', params: {serviceName: string, id: string}): Promise<domain.DnssecKey>;
  /**
   * List the domain.GlueRecord objects
   * List of glue record
   */
  public get(path: '/domain/{serviceName}/glueRecord', params: {serviceName: string, host?: string}): Promise<string[]>;
  /**
   * Glue record
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/glueRecord/{host}', params: {serviceName: string, host: string}): Promise<domain.GlueRecord>;
  /**
   * List the domain.CurrentNameServer objects
   * List of current name servers
   */
  public get(path: '/domain/{serviceName}/nameServer', params: {serviceName: string}): Promise<number[]>;
  /**
   * CurrentNameServer
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/nameServer/{id}', params: {serviceName: string, id: string}): Promise<domain.CurrentNameServer>;
  /**
   * List the domain.Option objects
   * List of domain options
   */
  public get(path: '/domain/{serviceName}/option', params: {serviceName: string}): Promise<domain.DomainOptionEnum[]>;
  /**
   * Information about the options of a domain
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/option/{option}', params: {serviceName: string, option: string}): Promise<domain.Option>;
  /**
   * List the domain.Owo objects
   * List of whois obfuscators
   */
  public get(path: '/domain/{serviceName}/owo', params: {serviceName: string, field?: OVH.domain.WhoisObfuscatorFieldsEnum}): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
  /**
   * Obfuscate whois
   * Get this object properties
   */
  public get(path: '/domain/{serviceName}/owo/{field}', params: {serviceName: string, field: string}): Promise<domain.Owo>;
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
  public get(path: '/domain/{serviceName}/task/{id}', params: {serviceName: string, id: string}): Promise<domain.Task>;
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
  public get(path: '/domain/data/afnicAssociationInformation/{associationInformationId}', params: {associationInformationId: string}): Promise<domain.data.AssociationContact>;
  /**
   * Missing description
   * Retrieve all corporation trademark information according to Afnic
   */
  public get(path: '/domain/data/afnicCorporationTrademarkInformation'): Promise<number[]>;
  /**
   * Missing description
   * Retrieve a corporation trademark information according to Afnic
   */
  public get(path: '/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}', params: {afnicCorporationTrademarkId: string}): Promise<domain.data.AfnicCorporationTrademarkContact>;
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
  public get(path: '/domain/data/proContact/{proContactId}', params: {proContactId: string}): Promise<domain.data.ProContact>;
  /**
   * Missing description
   * List all your SMD files
   */
  public get(path: '/domain/data/smd', params: {protectedLabels_label?: string}): Promise<number[]>;
  /**
   * Missing description
   * Retrieve information about a SMD file
   */
  public get(path: '/domain/data/smd/{smdId}', params: {smdId: string}): Promise<domain.data.Smd>;
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
  public get(path: '/domain/zone/{zoneName}/dynHost/login/{login}', params: {zoneName: string, login: string}): Promise<domain.zone.DynHostLogin>;
  /**
   * List the domain.zone.DynHostRecord objects
   * DynHost' records
   */
  public get(path: '/domain/zone/{zoneName}/dynHost/record', params: {zoneName: string, subDomain?: string}): Promise<number[]>;
  /**
   * DynHost record
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/dynHost/record/{id}', params: {zoneName: string, id: string}): Promise<domain.zone.DynHostRecord>;
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
  public get(path: '/domain/zone/{zoneName}/history/{creationDate}', params: {zoneName: string, creationDate: string}): Promise<domain.zone.ZoneRestorePoint>;
  /**
   * List the domain.zone.Record objects
   * Records of the zone
   */
  public get(path: '/domain/zone/{zoneName}/record', params: {zoneName: string, fieldType?: OVH.zone.NamedResolutionFieldTypeEnum, subDomain?: string}): Promise<number[]>;
  /**
   * Zone resource records
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/record/{id}', params: {zoneName: string, id: string}): Promise<domain.zone.Record>;
  /**
   * List the domain.zone.Redirection objects
   * Redirections
   */
  public get(path: '/domain/zone/{zoneName}/redirection', params: {zoneName: string, subDomain?: string}): Promise<number[]>;
  /**
   * Redirection
   * Get this object properties
   */
  public get(path: '/domain/zone/{zoneName}/redirection/{id}', params: {zoneName: string, id: string}): Promise<domain.zone.Redirection>;
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
  public get(path: '/domain/zone/{zoneName}/task/{id}', params: {zoneName: string, id: string}): Promise<domain.zone.Task>;
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
  public put(path: '/domain/data/smd/{smdId}', params: {smdId: string, data: string}): Promise<domain.data.Smd>;
  /**
   * Manage DynHost login
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/dynHost/login/{login}', params: {zoneName: string, login: string, subDomain?: string, zone?: string}): Promise<void>;
  /**
   * DynHost record
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/dynHost/record/{id}', params: {zoneName: string, id: string, ip?: string, subDomain?: string, ttl?: number, zone?: string}): Promise<void>;
  /**
   * Zone resource records
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/record/{id}', params: {zoneName: string, id: string, fieldType?: OVH.zone.NamedResolutionFieldTypeEnum, subDomain?: string, target?: string, ttl?: number, zone?: string}): Promise<void>;
  /**
   * Redirection
   * Alter this object properties
   */
  public put(path: '/domain/zone/{zoneName}/redirection/{id}', params: {zoneName: string, id: string, description?: string, keywords?: string, subDomain?: string, target?: string, title?: string, type?: OVH.zone.RedirectionTypeEnum, zone?: string}): Promise<void>;
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
  public post(path: '/domain/{serviceName}/glueRecord/{host}/update', params: {serviceName: string, host: string, ips: string[]}): Promise<domain.Task>;
  /**
   * List the domain.CurrentNameServer objects
   * Add new name server
   */
  public post(path: '/domain/{serviceName}/nameServer', params: {serviceName: string, nameServer: OVH.domain.DomainNs[]}): Promise<domain.Task>;
  /**
   * status operations
   * Get name server status
   */
  public post(path: '/domain/{serviceName}/nameServer/{id}/status', params: {serviceName: string, id: string}): Promise<domain.DomainNsStatus>;
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
  public post(path: '/domain/{serviceName}/task/{id}/accelerate', params: {serviceName: string, id: string}): Promise<void>;
  /**
   * cancel operations
   * Cancel the task
   */
  public post(path: '/domain/{serviceName}/task/{id}/cancel', params: {serviceName: string, id: string}): Promise<void>;
  /**
   * relaunch operations
   * Relaunch the task
   */
  public post(path: '/domain/{serviceName}/task/{id}/relaunch', params: {serviceName: string, id: string}): Promise<void>;
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
  public post(path: '/domain/zone/{zoneName}/dynHost/login/{login}/changePassword', params: {zoneName: string, login: string, password: string}): Promise<void>;
  /**
   * List the domain.zone.DynHostRecord objects
   * Create a new DynHost record (Don't forget to refresh the zone)
   */
  public post(path: '/domain/zone/{zoneName}/dynHost/record', params: {zoneName: string, ip: string, subDomain?: string}): Promise<domain.zone.DynHostRecord>;
  /**
   * restore operations
   * Restore the DNS zone
   */
  public post(path: '/domain/zone/{zoneName}/history/{creationDate}/restore', params: {zoneName: string, creationDate: string}): Promise<domain.zone.Task>;
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
  public post(path: '/domain/zone/{zoneName}/task/{id}/accelerate', params: {zoneName: string, id: string}): Promise<void>;
  /**
   * cancel operations
   * Cancel the task
   */
  public post(path: '/domain/zone/{zoneName}/task/{id}/cancel', params: {zoneName: string, id: string}): Promise<void>;
  /**
   * relaunch operations
   * Relaunch the task
   */
  public post(path: '/domain/zone/{zoneName}/task/{id}/relaunch', params: {zoneName: string, id: string}): Promise<void>;
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
  public delete(path: '/domain/{serviceName}/glueRecord/{host}', params: {serviceName: string, host: string}): Promise<domain.Task>;
  /**
   * CurrentNameServer
   * Delete a name server
   */
  public delete(path: '/domain/{serviceName}/nameServer/{id}', params: {serviceName: string, id: string}): Promise<domain.Task>;
  /**
   * Information about the options of a domain
   * Release a given option
   */
  public delete(path: '/domain/{serviceName}/option/{option}', params: {serviceName: string, option: string}): Promise<void>;
  /**
   * Obfuscate whois
   * Delete a whois obfuscator
   */
  public delete(path: '/domain/{serviceName}/owo/{field}', params: {serviceName: string, field: string}): Promise<void>;
  /**
   * Missing description
   * Delete a SMD file
   */
  public delete(path: '/domain/data/smd/{smdId}', params: {smdId: string}): Promise<void>;
  /**
   * Manage Dnssec for this zone
   * Disable Dnssec
   */
  public delete(path: '/domain/zone/{zoneName}/dnssec', params: {zoneName: string}): Promise<void>;
  /**
   * Manage DynHost login
   * Delete a DynHost login
   */
  public delete(path: '/domain/zone/{zoneName}/dynHost/login/{login}', params: {zoneName: string, login: string}): Promise<void>;
  /**
   * DynHost record
   * Delete a DynHost record (Don't forget to refresh the zone)
   */
  public delete(path: '/domain/zone/{zoneName}/dynHost/record/{id}', params: {zoneName: string, id: string}): Promise<void>;
  /**
   * Zone resource records
   * Delete a DNS record (Don't forget to refresh the zone)
   */
  public delete(path: '/domain/zone/{zoneName}/record/{id}', params: {zoneName: string, id: string}): Promise<void>;
  /**
   * Redirection
   * Delete a redirection (Don't forget to refresh the zone)
   */
  public delete(path: '/domain/zone/{zoneName}/redirection/{id}', params: {zoneName: string, id: string}): Promise<void>;
  public delete(path: PathsDomainDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /domain Models
 */
export declare namespace dnssec {
    type DnssecStatusEnum = "disableInProgress" | "disabled" | "enableInProgress" | "enabled";
    interface Key {
        algorithm: dnssec.KeyAlgorithmEnum;
        flags: dnssec.KeyFlagEnum;
        publicKey: string;
        tag: number;
    }
    type KeyAlgorithmEnum = 10 | 13 | 14 | 5 | 7 | 8;
    type KeyFlagEnum = 256 | 257;
    type KeyStatusEnum = "active" | "generated" | "published" | "removed" | "retired" | "revoked";
}
export declare namespace domain {
    type ContactAllTypesEnum = "admin" | "all" | "billing" | "owner" | "tech";
    interface CurrentNameServer {
        host: string;
        id: number;
        ip?: string;
        isUsed: boolean;
        toDelete: boolean;
    }
    interface DnssecKey {
        algorithm: dnssec.KeyAlgorithmEnum;
        flags: dnssec.KeyFlagEnum;
        id: number;
        publicKey: string;
        status: dnssec.KeyStatusEnum;
        tag: number;
    }
    interface Domain {
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
    type DomainContactTypeEnum = "admin" | "billing" | "owner" | "tech";
    type DomainLockStatusEnum = "locked" | "locking" | "unavailable" | "unlocked" | "unlocking";
    interface DomainNs {
        host: string;
        ip?: string;
    }
    type DomainNsStateEnum = "ko" | "ok";
    interface DomainNsStatus {
        state: domain.DomainNsStateEnum;
        type: domain.DomainNsTypeEnum;
        usedSince?: string;
    }
    type DomainNsTypeEnum = "external" | "hosted";
    type DomainOptionEnum = "dnsAnycast";
    type DomainOptionStateEnum = "released" | "subscribed";
    interface GlueRecord {
        host: string;
        ips: string[];
    }
    type IsForEnum = "campaign_website" | "educational_website" | "emails" | "information_website" | "other_purpose" | "redirect_page" | "transactional_website";
    type OfferEnum = "diamond" | "gold" | "platinum";
    type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo";
    type OptinFieldsEnum = "address" | "city" | "country" | "email" | "fax" | "name" | "organisation" | "phone" | "province" | "zip";
    interface Option {
        expirationDate: string;
        option: domain.DomainOptionEnum;
        state: domain.DomainOptionStateEnum;
    }
    interface Owo {
        field: domain.WhoisObfuscatorFieldsEnum;
    }
    interface ParentService {
        name: string;
        type: domain.ParentServiceTypeEnum;
    }
    type ParentServiceTypeEnum = "/allDom";
    interface Rule {
        allowedValues?: string[];
        description: string;
        fields?: string[];
        innerConfigurations?: domain.Rule[];
        label?: string;
        required?: boolean;
        type: string;
    }
    interface Task {
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
    interface UkRegistrar {
        name: string;
        tag: string;
    }
    type WhoisObfuscatorFieldsEnum = "address" | "email" | "phone";
    namespace configurations {
        interface CustomFields {
            audience?: string;
            authInfo?: string;
            isFor?: domain.IsForEnum[];
            otherPurpose?: string;
            reason?: string;
            represent?: string;
        }
        interface ObfuscatedEmails {
            type: domain.ContactAllTypesEnum;
            value: string;
        }
        interface Optin {
            fields: domain.OptinFieldsEnum[];
            type: domain.ContactAllTypesEnum;
        }
    }
    namespace data {
        interface AfnicCorporationTrademarkContact {
            contactId: number;
            id: number;
            inpiNumber: string;
            inpiTrademarkOwner: string;
        }
        interface AssociationContact {
            contactId: number;
            declarationDate: string;
            id: number;
            publicationDate: string;
            publicationNumber: string;
            publicationPageNumber: string;
        }
        interface ProContact {
            authority: string;
            authorityWebsite: string;
            id: number;
            jobDescription: string;
            licenseNumber: string;
        }
        interface Smd {
            data: string;
            id: number;
            notAfter?: string;
            notBefore?: string;
            protectedLabels: domain.data.SmdLabel[];
            smdId?: string;
        }
        interface SmdLabel {
            label: string;
            trademark: string;
        }
        namespace claimNotice {
            interface Address {
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
            interface ClaimNotice {
                claims?: domain.data.claimNotice.ClaimNoticeDecision[];
                endingDate: string;
                id: string;
                label: string;
                startingDate?: string;
                type?: domain.data.claimNotice.ClaimNoticeTypeEnum;
            }
            interface ClaimNoticeDecision {
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
            type ClaimNoticeTypeEnum = "UK" | "TRADEMARK";
            interface Classification {
                description: string;
                number: string;
            }
            interface Contact {
                address: domain.data.claimNotice.Address;
                email?: string;
                entitlement?: string;
                name?: string;
                organisation?: string;
                type?: string;
            }
            interface CourtDecision {
                countryCode: string;
                courtName: string;
                referenceNumber: string;
                regions: string[];
            }
            interface UDRP {
                caseNumber: string;
                udrpProvider: string;
            }
        }
    }
    namespace rules {
        interface Optin {
            fields: domain.OptinFieldsEnum[];
            type: domain.ContactAllTypesEnum;
        }
    }
    namespace zone {
        interface Dnssec {
            status: dnssec.DnssecStatusEnum;
        }
        interface DynHostLogin {
            login: string;
            subDomain: string;
            zone: string;
        }
        interface DynHostRecord {
            id: number;
            ip: string;
            subDomain?: string;
            ttl?: number;
            zone: string;
        }
        interface Record {
            fieldType: zoneNamedResolutionFieldTypeEnum;
            id: number;
            subDomain?: string;
            target: string;
            ttl?: number;
            zone: string;
        }
        interface Redirection {
            description?: string;
            id: number;
            keywords?: string;
            subDomain?: string;
            target: string;
            title?: string;
            type: zoneRedirectionTypeEnum;
            zone: string;
        }
        interface Soa {
            email: string;
            expire: number;
            nxDomainTtl: number;
            refresh: number;
            serial: number;
            server: string;
            ttl: number;
        }
        interface Task {
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
        interface Zone {
            dnssecSupported: boolean;
            hasDnsAnycast: boolean;
            lastUpdate: string;
            name: string;
            nameServers: string[];
        }
        interface ZoneRestorePoint {
            creationDate: string;
            zoneFileUrl: string;
        }
    }
}
export declare namespace nichandle {
    type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
    type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
}
export declare namespace services {
    interface Service {
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
export declare namespace zone {
    type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT";
    type RedirectionTypeEnum = "invisible" | "visible" | "visiblePermanent";
    interface ResetRecord {
        fieldType: zone.ResettableNamedResolutionFieldTypeEnum;
        target: string;
    }
    type ResettableNamedResolutionFieldTypeEnum = "A" | "MX";
    interface Status {
        errors?: string[];
        isDeployed: boolean;
        warnings?: string[];
    }
}
/**
 * END API /domain Models
 */
export declare function proxyDomain(ovhEngine: OvhRequestable): Domain;
export default proxyDomain;
/**
 * Api Proxy model
 */ export interface Domain {
    $get(params?: {
        whoisOwner?: string;
    }): Promise<string[]>;
    data: {
        afnicAssociationInformation: {
            $get(): Promise<number[]>;
            $post(params: {
                contactId: number;
                declarationDate: string;
                publicationDate: string;
                publicationNumber: string;
                publicationPageNumber: string;
            }): Promise<domain.data.AssociationContact>;
            $(associationInformationId: number): {
                $get(): Promise<domain.data.AssociationContact>;
            };
        };
        afnicCorporationTrademarkInformation: {
            $get(): Promise<number[]>;
            $post(params: {
                contactId: number;
                inpiNumber: string;
                inpiTrademarkOwner: string;
            }): Promise<domain.data.AfnicCorporationTrademarkContact>;
            $(afnicCorporationTrademarkId: number): {
                $get(): Promise<domain.data.AfnicCorporationTrademarkContact>;
            };
        };
        claimNotice: {
            $get(params: {
                domain: string;
            }): Promise<domain.data.claimNotice.ClaimNotice>;
        };
        extension: {
            $get(params: {
                country: nichandle.CountryEnum;
            }): Promise<string[]>;
        };
        proContact: {
            $get(): Promise<number[]>;
            $post(params: {
                authority: string;
                authorityWebsite: string;
                contactId?: number;
                jobDescription: string;
                licenseNumber: string;
            }): Promise<domain.data.ProContact>;
            $(proContactId: number): {
                $get(): Promise<domain.data.ProContact>;
            };
        };
        smd: {
            $get(params?: {
                protectedLabels_label?: string;
            }): Promise<number[]>;
            $post(params: {
                data: string;
            }): Promise<domain.data.Smd>;
            $(smdId: number): {
                $delete(): Promise<void>;
                $get(): Promise<domain.data.Smd>;
                $put(params: {
                    data: string;
                }): Promise<domain.data.Smd>;
            };
        };
    };
    rules: {
        $get(params: {
            cartId: string;
            itemId: number;
        }): Promise<domain.Rule>;
    };
    zone: {
        $get(): Promise<string[]>;
        $(zoneName: string): {
            $get(): Promise<domain.zone.Zone>;
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            dnssec: {
                $delete(): Promise<void>;
                $get(): Promise<domain.zone.Dnssec>;
                $post(): Promise<void>;
            };
            dynHost: {
                login: {
                    $get(params?: {
                        login?: string;
                        subDomain?: string;
                    }): Promise<string[]>;
                    $post(params: {
                        loginSuffix: string;
                        password: string;
                        subDomain: string;
                    }): Promise<domain.zone.DynHostLogin>;
                    $(login: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<domain.zone.DynHostLogin>;
                        $put(params?: {
                            login?: string;
                            subDomain?: string;
                            zone?: string;
                        }): Promise<void>;
                        changePassword: {
                            $post(params: {
                                password: string;
                            }): Promise<void>;
                        };
                    };
                };
                record: {
                    $get(params?: {
                        subDomain?: string;
                    }): Promise<number[]>;
                    $post(params: {
                        ip: string;
                        subDomain?: string;
                    }): Promise<domain.zone.DynHostRecord>;
                    $(id: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<domain.zone.DynHostRecord>;
                        $put(params?: {
                            id?: number;
                            ip?: string;
                            subDomain?: string;
                            ttl?: number;
                            zone?: string;
                        }): Promise<void>;
                    };
                };
            };
            export: {
                $get(): Promise<string>;
            };
            history: {
                $get(params?: {
                    creationDate_from?: string;
                    creationDate_to?: string;
                }): Promise<string[]>;
                $(creationDate: string): {
                    $get(): Promise<domain.zone.ZoneRestorePoint>;
                    restore: {
                        $post(): Promise<domain.zone.Task>;
                    };
                };
            };
            import: {
                $post(params: {
                    zoneFile: string;
                }): Promise<domain.zone.Task>;
            };
            record: {
                $get(params?: {
                    fieldType?: zoneNamedResolutionFieldTypeEnum;
                    subDomain?: string;
                }): Promise<number[]>;
                $post(params: {
                    fieldType: zoneNamedResolutionFieldTypeEnum;
                    subDomain?: string;
                    target: string;
                    ttl?: number;
                }): Promise<domain.zone.Record>;
                $(id: number): {
                    $delete(): Promise<void>;
                    $get(): Promise<domain.zone.Record>;
                    $put(params?: {
                        fieldType?: zoneNamedResolutionFieldTypeEnum;
                        id?: number;
                        subDomain?: string;
                        target?: string;
                        ttl?: number;
                        zone?: string;
                    }): Promise<void>;
                };
            };
            redirection: {
                $get(params?: {
                    subDomain?: string;
                }): Promise<number[]>;
                $post(params: {
                    description?: string;
                    keywords?: string;
                    subDomain?: string;
                    target: string;
                    title?: string;
                    type: zoneRedirectionTypeEnum;
                }): Promise<domain.zone.Redirection>;
                $(id: number): {
                    $delete(): Promise<void>;
                    $get(): Promise<domain.zone.Redirection>;
                    $put(params?: {
                        description?: string;
                        id?: number;
                        keywords?: string;
                        subDomain?: string;
                        target?: string;
                        title?: string;
                        type?: zoneRedirectionTypeEnum;
                        zone?: string;
                    }): Promise<void>;
                };
            };
            refresh: {
                $post(): Promise<void>;
            };
            reset: {
                $post(params?: {
                    DnsRecords?: zone.ResetRecord[];
                    minimized?: boolean;
                }): Promise<void>;
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            soa: {
                $get(): Promise<domain.zone.Soa>;
                $put(params?: {
                    email?: string;
                    expire?: number;
                    nxDomainTtl?: number;
                    refresh?: number;
                    serial?: number;
                    server?: string;
                    ttl?: number;
                }): Promise<void>;
            };
            status: {
                $get(): Promise<zone.Status>;
            };
            task: {
                $get(params?: {
                    function_?: string;
                    status?: domain.OperationStatusEnum;
                }): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<domain.zone.Task>;
                    accelerate: {
                        $post(): Promise<void>;
                    };
                    cancel: {
                        $post(): Promise<void>;
                    };
                    relaunch: {
                        $post(): Promise<void>;
                    };
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
        };
    };
    $(serviceName: string): {
        $get(): Promise<domain.Domain>;
        $put(params?: {
            dnssecSupported?: boolean;
            domain?: string;
            glueRecordIpv6Supported?: boolean;
            glueRecordMultiIpSupported?: boolean;
            lastUpdate?: string;
            nameServerType?: domain.DomainNsTypeEnum;
            offer?: domain.OfferEnum;
            owoSupported?: boolean;
            parentService?: domain.ParentService;
            transferLockStatus?: domain.DomainLockStatusEnum;
            whoisOwner?: string;
        }): Promise<void>;
        activateZone: {
            $post(params?: {
                minimized?: boolean;
            }): Promise<void>;
        };
        authInfo: {
            $get(): Promise<string>;
        };
        changeContact: {
            $post(params?: {
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
            }): Promise<number[]>;
        };
        configurations: {
            obfuscatedEmails: {
                $get(): Promise<domain.configurations.ObfuscatedEmails[]>;
                $put(params: {
                    contacts: domain.ContactAllTypesEnum[];
                }): Promise<domain.configurations.ObfuscatedEmails[]>;
                refresh: {
                    $post(params: {
                        contacts: domain.ContactAllTypesEnum[];
                    }): Promise<void>;
                };
            };
            optin: {
                $get(): Promise<domain.configurations.Optin[]>;
                $put(params: {
                    optin: domain.configurations.Optin[];
                }): Promise<domain.configurations.Optin[]>;
            };
        };
        dsRecord: {
            $get(params?: {
                flags?: dnssec.KeyFlagEnum;
                status?: dnssec.KeyStatusEnum;
            }): Promise<number[]>;
            $post(params: {
                keys: dnssec.Key[];
            }): Promise<domain.Task>;
            $(id: number): {
                $get(): Promise<domain.DnssecKey>;
            };
        };
        email: {
            obfuscated: {
                refresh: {
                    $post(params: {
                        contactType: domain.DomainContactTypeEnum[];
                    }): Promise<void>;
                };
            };
        };
        glueRecord: {
            $get(params?: {
                host?: string;
            }): Promise<string[]>;
            $post(params: {
                host: string;
                ips: string[];
            }): Promise<domain.Task>;
            $(host: string): {
                $delete(): Promise<domain.Task>;
                $get(): Promise<domain.GlueRecord>;
                update: {
                    $post(params: {
                        ips: string[];
                    }): Promise<domain.Task>;
                };
            };
        };
        nameServer: {
            $get(): Promise<number[]>;
            $post(params: {
                nameServer: domain.DomainNs[];
            }): Promise<domain.Task>;
            $(id: number): {
                $delete(): Promise<domain.Task>;
                $get(): Promise<domain.CurrentNameServer>;
                status: {
                    $post(): Promise<domain.DomainNsStatus>;
                };
            };
        };
        nameServers: {
            update: {
                $post(params: {
                    nameServers: domain.DomainNs[];
                }): Promise<domain.Task>;
            };
        };
        option: {
            $get(): Promise<domain.DomainOptionEnum[]>;
            $(option: domain.DomainOptionEnum): {
                $delete(): Promise<void>;
                $get(): Promise<domain.Option>;
            };
        };
        owo: {
            $get(params?: {
                field?: domain.WhoisObfuscatorFieldsEnum;
            }): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            $post(params: {
                fields: domain.WhoisObfuscatorFieldsEnum[];
            }): Promise<domain.WhoisObfuscatorFieldsEnum[]>;
            $(field: domain.WhoisObfuscatorFieldsEnum): {
                $delete(): Promise<void>;
                $get(): Promise<domain.Owo>;
            };
        };
        rules: {
            emailsObfuscation: {
                $get(): Promise<domain.ContactAllTypesEnum[]>;
            };
            optin: {
                $get(): Promise<domain.rules.Optin[]>;
            };
        };
        serviceInfos: {
            $get(): Promise<services.Service>;
            $put(params?: {
                canDeleteAtExpiration?: boolean;
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
                creation?: string;
                domain?: string;
                engagedUpTo?: string;
                expiration?: string;
                possibleRenewPeriod?: number[];
                renew?: service.RenewType;
                renewalType?: service.RenewalTypeEnum;
                serviceId?: number;
                status?: service.StateEnum;
            }): Promise<void>;
        };
        task: {
            $get(params?: {
                function_?: string;
                status?: domain.OperationStatusEnum;
            }): Promise<number[]>;
            $(id: number): {
                $get(): Promise<domain.Task>;
                accelerate: {
                    $post(): Promise<void>;
                };
                cancel: {
                    $post(): Promise<void>;
                };
                relaunch: {
                    $post(): Promise<void>;
                };
            };
        };
        ukOutgoingTransfer: {
            $post(params: {
                tag: string;
            }): Promise<domain.Task>;
        };
        ukRegistrars: {
            $get(): Promise<domain.UkRegistrar[]>;
        };
    };
    /**
     * Operations about the DOMAIN service
     * List available services
     */
    get(path: '/domain'): (params?: {
        whoisOwner?: string;
    }) => Promise<string[]>;
    /**
     * Domain name administration
     * Get this object properties
     */
    get(path: '/domain/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<domain.Domain>;
    /**
     * authInfo operations
     * Return authInfo code if the domain is unlocked
     */
    get(path: '/domain/{serviceName}/authInfo'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Missing description
     * Retrieve obfuscated emails configuration
     */
    get(path: '/domain/{serviceName}/configurations/obfuscatedEmails'): (params: {
        serviceName: string;
    }) => Promise<domain.configurations.ObfuscatedEmails[]>;
    /**
     * Missing description
     * Retrieve optin configuration
     */
    get(path: '/domain/{serviceName}/configurations/optin'): (params: {
        serviceName: string;
    }) => Promise<domain.configurations.Optin[]>;
    /**
     * List the domain.DnssecKey objects
     * List of domain's DS Records
     */
    get(path: '/domain/{serviceName}/dsRecord'): (params: {
        serviceName: string;
        flags?: dnssec.KeyFlagEnum;
        status?: dnssec.KeyStatusEnum;
    }) => Promise<number[]>;
    /**
     * Domain's DNSSEC Key
     * Get this object properties
     */
    get(path: '/domain/{serviceName}/dsRecord/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<domain.DnssecKey>;
    /**
     * List the domain.GlueRecord objects
     * List of glue record
     */
    get(path: '/domain/{serviceName}/glueRecord'): (params: {
        serviceName: string;
        host?: string;
    }) => Promise<string[]>;
    /**
     * Glue record
     * Get this object properties
     */
    get(path: '/domain/{serviceName}/glueRecord/{host}'): (params: {
        host: string;
        serviceName: string;
    }) => Promise<domain.GlueRecord>;
    /**
     * List the domain.CurrentNameServer objects
     * List of current name servers
     */
    get(path: '/domain/{serviceName}/nameServer'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * CurrentNameServer
     * Get this object properties
     */
    get(path: '/domain/{serviceName}/nameServer/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<domain.CurrentNameServer>;
    /**
     * List the domain.Option objects
     * List of domain options
     */
    get(path: '/domain/{serviceName}/option'): (params: {
        serviceName: string;
    }) => Promise<domain.DomainOptionEnum[]>;
    /**
     * Information about the options of a domain
     * Get this object properties
     */
    get(path: '/domain/{serviceName}/option/{option}'): (params: {
        option: domain.DomainOptionEnum;
        serviceName: string;
    }) => Promise<domain.Option>;
    /**
     * List the domain.Owo objects
     * List of whois obfuscators
     */
    get(path: '/domain/{serviceName}/owo'): (params: {
        serviceName: string;
        field?: domain.WhoisObfuscatorFieldsEnum;
    }) => Promise<domain.WhoisObfuscatorFieldsEnum[]>;
    /**
     * Obfuscate whois
     * Get this object properties
     */
    get(path: '/domain/{serviceName}/owo/{field}'): (params: {
        field: domain.WhoisObfuscatorFieldsEnum;
        serviceName: string;
    }) => Promise<domain.Owo>;
    /**
     * Missing description
     * Retrieve emails obfuscation rule
     */
    get(path: '/domain/{serviceName}/rules/emailsObfuscation'): (params: {
        serviceName: string;
    }) => Promise<domain.ContactAllTypesEnum[]>;
    /**
     * Missing description
     * Retrieve optin rule
     */
    get(path: '/domain/{serviceName}/rules/optin'): (params: {
        serviceName: string;
    }) => Promise<domain.rules.Optin[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/domain/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the domain.Task objects
     * Domain pending tasks
     */
    get(path: '/domain/{serviceName}/task'): (params: {
        serviceName: string;
        function_?: string;
        status?: domain.OperationStatusEnum;
    }) => Promise<number[]>;
    /**
     * Tasks associated to domain
     * Get this object properties
     */
    get(path: '/domain/{serviceName}/task/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<domain.Task>;
    /**
     * ukRegistrars operations
     * Return the list of all .uk registrars
     */
    get(path: '/domain/{serviceName}/ukRegistrars'): (params: {
        serviceName: string;
    }) => Promise<domain.UkRegistrar[]>;
    /**
     * Missing description
     * Retrieve all association information according to Afnic
     */
    get(path: '/domain/data/afnicAssociationInformation'): () => Promise<number[]>;
    /**
     * Missing description
     * Retrieve an association information according to Afnic
     */
    get(path: '/domain/data/afnicAssociationInformation/{associationInformationId}'): (params: {
        associationInformationId: number;
    }) => Promise<domain.data.AssociationContact>;
    /**
     * Missing description
     * Retrieve all corporation trademark information according to Afnic
     */
    get(path: '/domain/data/afnicCorporationTrademarkInformation'): () => Promise<number[]>;
    /**
     * Missing description
     * Retrieve a corporation trademark information according to Afnic
     */
    get(path: '/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}'): (params: {
        afnicCorporationTrademarkId: number;
    }) => Promise<domain.data.AfnicCorporationTrademarkContact>;
    /**
     * Missing description
     * Retrieve claim notices associated to a domain
     */
    get(path: '/domain/data/claimNotice'): (params: {
        domain: string;
    }) => Promise<domain.data.claimNotice.ClaimNotice>;
    /**
     * Missing description
     * List all the extensions for a specific country
     */
    get(path: '/domain/data/extension'): (params: {
        country: nichandle.CountryEnum;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Retrieve all your Pro Contact
     */
    get(path: '/domain/data/proContact'): () => Promise<number[]>;
    /**
     * Missing description
     * Retrieve information about a Pro Contact
     */
    get(path: '/domain/data/proContact/{proContactId}'): (params: {
        proContactId: number;
    }) => Promise<domain.data.ProContact>;
    /**
     * Missing description
     * List all your SMD files
     */
    get(path: '/domain/data/smd'): (params?: {
        protectedLabels_label?: string;
    }) => Promise<number[]>;
    /**
     * Missing description
     * Retrieve information about a SMD file
     */
    get(path: '/domain/data/smd/{smdId}'): (params: {
        smdId: number;
    }) => Promise<domain.data.Smd>;
    /**
     * Rules for creating a domain
     * List all the rules for a specific cartId/itemId
     */
    get(path: '/domain/rules'): (params: {
        cartId: string;
        itemId: number;
    }) => Promise<domain.Rule>;
    /**
     * Operations about the DNS service
     * List available services
     */
    get(path: '/domain/zone'): () => Promise<string[]>;
    /**
     * Zone dns Management
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}'): (params: {
        zoneName: string;
    }) => Promise<domain.zone.Zone>;
    /**
     * Manage Dnssec for this zone
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/dnssec'): (params: {
        zoneName: string;
    }) => Promise<domain.zone.Dnssec>;
    /**
     * List the domain.zone.DynHostLogin objects
     * DynHost' logins
     */
    get(path: '/domain/zone/{zoneName}/dynHost/login'): (params: {
        zoneName: string;
        login?: string;
        subDomain?: string;
    }) => Promise<string[]>;
    /**
     * Manage DynHost login
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/dynHost/login/{login}'): (params: {
        login: string;
        zoneName: string;
    }) => Promise<domain.zone.DynHostLogin>;
    /**
     * List the domain.zone.DynHostRecord objects
     * DynHost' records
     */
    get(path: '/domain/zone/{zoneName}/dynHost/record'): (params: {
        zoneName: string;
        subDomain?: string;
    }) => Promise<number[]>;
    /**
     * DynHost record
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/dynHost/record/{id}'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<domain.zone.DynHostRecord>;
    /**
     * export operations
     * Export zone
     */
    get(path: '/domain/zone/{zoneName}/export'): (params: {
        zoneName: string;
    }) => Promise<string>;
    /**
     * List the domain.zone.ZoneRestorePoint objects
     * Zone restore points
     */
    get(path: '/domain/zone/{zoneName}/history'): (params: {
        zoneName: string;
        creationDate_from?: string;
        creationDate_to?: string;
    }) => Promise<string[]>;
    /**
     * Zone restore point
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/history/{creationDate}'): (params: {
        creationDate: string;
        zoneName: string;
    }) => Promise<domain.zone.ZoneRestorePoint>;
    /**
     * List the domain.zone.Record objects
     * Records of the zone
     */
    get(path: '/domain/zone/{zoneName}/record'): (params: {
        zoneName: string;
        fieldType?: zoneNamedResolutionFieldTypeEnum;
        subDomain?: string;
    }) => Promise<number[]>;
    /**
     * Zone resource records
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/record/{id}'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<domain.zone.Record>;
    /**
     * List the domain.zone.Redirection objects
     * Redirections
     */
    get(path: '/domain/zone/{zoneName}/redirection'): (params: {
        zoneName: string;
        subDomain?: string;
    }) => Promise<number[]>;
    /**
     * Redirection
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/redirection/{id}'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<domain.zone.Redirection>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/serviceInfos'): (params: {
        zoneName: string;
    }) => Promise<services.Service>;
    /**
     * Zone Start Of Authority
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/soa'): (params: {
        zoneName: string;
    }) => Promise<domain.zone.Soa>;
    /**
     * status operations
     * Zone status
     */
    get(path: '/domain/zone/{zoneName}/status'): (params: {
        zoneName: string;
    }) => Promise<zone.Status>;
    /**
     * List the domain.zone.Task objects
     * Domain pending tasks
     */
    get(path: '/domain/zone/{zoneName}/task'): (params: {
        zoneName: string;
        function_?: string;
        status?: domain.OperationStatusEnum;
    }) => Promise<number[]>;
    /**
     * Tasks associated to a zone
     * Get this object properties
     */
    get(path: '/domain/zone/{zoneName}/task/{id}'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<domain.zone.Task>;
    /**
     * Domain name administration
     * Alter this object properties
     */
    put(path: '/domain/{serviceName}'): (params: {
        serviceName: string;
        dnssecSupported?: boolean;
        domain?: string;
        glueRecordIpv6Supported?: boolean;
        glueRecordMultiIpSupported?: boolean;
        lastUpdate?: string;
        nameServerType?: domain.DomainNsTypeEnum;
        offer?: domain.OfferEnum;
        owoSupported?: boolean;
        parentService?: domain.ParentService;
        transferLockStatus?: domain.DomainLockStatusEnum;
        whoisOwner?: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Save a new obfuscated emails configuration
     */
    put(path: '/domain/{serviceName}/configurations/obfuscatedEmails'): (params: {
        serviceName: string;
        contacts: domain.ContactAllTypesEnum[];
    }) => Promise<domain.configurations.ObfuscatedEmails[]>;
    /**
     * Missing description
     * Save a new optin configuration
     */
    put(path: '/domain/{serviceName}/configurations/optin'): (params: {
        serviceName: string;
        optin: domain.configurations.Optin[];
    }) => Promise<domain.configurations.Optin[]>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/domain/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Missing description
     * Modify an existing SMD file
     */
    put(path: '/domain/data/smd/{smdId}'): (params: {
        smdId: number;
        data: string;
    }) => Promise<domain.data.Smd>;
    /**
     * Manage DynHost login
     * Alter this object properties
     */
    put(path: '/domain/zone/{zoneName}/dynHost/login/{login}'): (params: {
        login: string;
        zoneName: string;
        subDomain?: string;
        zone?: string;
    }) => Promise<void>;
    /**
     * DynHost record
     * Alter this object properties
     */
    put(path: '/domain/zone/{zoneName}/dynHost/record/{id}'): (params: {
        id: number;
        zoneName: string;
        ip?: string;
        subDomain?: string;
        ttl?: number;
        zone?: string;
    }) => Promise<void>;
    /**
     * Zone resource records
     * Alter this object properties
     */
    put(path: '/domain/zone/{zoneName}/record/{id}'): (params: {
        id: number;
        zoneName: string;
        fieldType?: zoneNamedResolutionFieldTypeEnum;
        subDomain?: string;
        target?: string;
        ttl?: number;
        zone?: string;
    }) => Promise<void>;
    /**
     * Redirection
     * Alter this object properties
     */
    put(path: '/domain/zone/{zoneName}/redirection/{id}'): (params: {
        id: number;
        zoneName: string;
        description?: string;
        keywords?: string;
        subDomain?: string;
        target?: string;
        title?: string;
        type?: zoneRedirectionTypeEnum;
        zone?: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/domain/zone/{zoneName}/serviceInfos'): (params: {
        zoneName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Zone Start Of Authority
     * Alter this object properties
     */
    put(path: '/domain/zone/{zoneName}/soa'): (params: {
        zoneName: string;
        email?: string;
        expire?: number;
        nxDomainTtl?: number;
        refresh?: number;
        serial?: number;
        server?: string;
        ttl?: number;
    }) => Promise<void>;
    /**
     * activateZone operations
     * Activate the DNS zone for this domain
     */
    post(path: '/domain/{serviceName}/activateZone'): (params: {
        serviceName: string;
        minimized?: boolean;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/domain/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Missing description
     * Refresh an obfuscated emails configuration
     */
    post(path: '/domain/{serviceName}/configurations/obfuscatedEmails/refresh'): (params: {
        serviceName: string;
        contacts: domain.ContactAllTypesEnum[];
    }) => Promise<void>;
    /**
     * List the domain.DnssecKey objects
     * Update DS records
     */
    post(path: '/domain/{serviceName}/dsRecord'): (params: {
        serviceName: string;
        keys: dnssec.Key[];
    }) => Promise<domain.Task>;
    /**
     * refresh operations
     * Regenerate the obfuscated email address
     */
    post(path: '/domain/{serviceName}/email/obfuscated/refresh'): (params: {
        serviceName: string;
        contactType: domain.DomainContactTypeEnum[];
    }) => Promise<void>;
    /**
     * List the domain.GlueRecord objects
     * Create a glue record
     */
    post(path: '/domain/{serviceName}/glueRecord'): (params: {
        serviceName: string;
        host: string;
        ips: string[];
    }) => Promise<domain.Task>;
    /**
     * update operations
     * Update the glue record
     */
    post(path: '/domain/{serviceName}/glueRecord/{host}/update'): (params: {
        host: string;
        serviceName: string;
        ips: string[];
    }) => Promise<domain.Task>;
    /**
     * List the domain.CurrentNameServer objects
     * Add new name server
     */
    post(path: '/domain/{serviceName}/nameServer'): (params: {
        serviceName: string;
        nameServer: domain.DomainNs[];
    }) => Promise<domain.Task>;
    /**
     * status operations
     * Get name server status
     */
    post(path: '/domain/{serviceName}/nameServer/{id}/status'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<domain.DomainNsStatus>;
    /**
     * update operations
     * Update DNS servers
     */
    post(path: '/domain/{serviceName}/nameServers/update'): (params: {
        serviceName: string;
        nameServers: domain.DomainNs[];
    }) => Promise<domain.Task>;
    /**
     * List the domain.Owo objects
     * Add whois obfuscators
     */
    post(path: '/domain/{serviceName}/owo'): (params: {
        serviceName: string;
        fields: domain.WhoisObfuscatorFieldsEnum[];
    }) => Promise<domain.WhoisObfuscatorFieldsEnum[]>;
    /**
     * accelerate operations
     * Accelerate the task
     */
    post(path: '/domain/{serviceName}/task/{id}/accelerate'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * cancel operations
     * Cancel the task
     */
    post(path: '/domain/{serviceName}/task/{id}/cancel'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * relaunch operations
     * Relaunch the task
     */
    post(path: '/domain/{serviceName}/task/{id}/relaunch'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * ukOutgoingTransfer operations
     * Schedule an outgoing transfer task for this domain (.uk only)
     */
    post(path: '/domain/{serviceName}/ukOutgoingTransfer'): (params: {
        serviceName: string;
        tag: string;
    }) => Promise<domain.Task>;
    /**
     * Missing description
     * Post a new association information according to Afnic
     */
    post(path: '/domain/data/afnicAssociationInformation'): (params: {
        contactId: number;
        declarationDate: string;
        publicationDate: string;
        publicationNumber: string;
        publicationPageNumber: string;
    }) => Promise<domain.data.AssociationContact>;
    /**
     * Missing description
     * Post a new corporation trademark information according to Afnic
     */
    post(path: '/domain/data/afnicCorporationTrademarkInformation'): (params: {
        contactId: number;
        inpiNumber: string;
        inpiTrademarkOwner: string;
    }) => Promise<domain.data.AfnicCorporationTrademarkContact>;
    /**
     * Missing description
     * Post new information about .pro contact information
     */
    post(path: '/domain/data/proContact'): (params: {
        authority: string;
        authorityWebsite: string;
        contactId?: number;
        jobDescription: string;
        licenseNumber: string;
    }) => Promise<domain.data.ProContact>;
    /**
     * Missing description
     * Post a new SMD file
     */
    post(path: '/domain/data/smd'): (params: {
        data: string;
    }) => Promise<domain.data.Smd>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/domain/zone/{zoneName}/changeContact'): (params: {
        zoneName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/domain/zone/{zoneName}/confirmTermination'): (params: {
        zoneName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * Manage Dnssec for this zone
     * Enable Dnssec
     */
    post(path: '/domain/zone/{zoneName}/dnssec'): (params: {
        zoneName: string;
    }) => Promise<void>;
    /**
     * List the domain.zone.DynHostLogin objects
     * Create a new DynHost login
     */
    post(path: '/domain/zone/{zoneName}/dynHost/login'): (params: {
        zoneName: string;
        loginSuffix: string;
        password: string;
        subDomain: string;
    }) => Promise<domain.zone.DynHostLogin>;
    /**
     * changePassword operations
     * Change password of the DynHost login
     */
    post(path: '/domain/zone/{zoneName}/dynHost/login/{login}/changePassword'): (params: {
        login: string;
        zoneName: string;
        password: string;
    }) => Promise<void>;
    /**
     * List the domain.zone.DynHostRecord objects
     * Create a new DynHost record (Don't forget to refresh the zone)
     */
    post(path: '/domain/zone/{zoneName}/dynHost/record'): (params: {
        zoneName: string;
        ip: string;
        subDomain?: string;
    }) => Promise<domain.zone.DynHostRecord>;
    /**
     * restore operations
     * Restore the DNS zone
     */
    post(path: '/domain/zone/{zoneName}/history/{creationDate}/restore'): (params: {
        creationDate: string;
        zoneName: string;
    }) => Promise<domain.zone.Task>;
    /**
     * import operations
     * Import zone
     */
    post(path: '/domain/zone/{zoneName}/import'): (params: {
        zoneName: string;
        zoneFile: string;
    }) => Promise<domain.zone.Task>;
    /**
     * List the domain.zone.Record objects
     * Create a new DNS record (Don't forget to refresh the zone)
     */
    post(path: '/domain/zone/{zoneName}/record'): (params: {
        zoneName: string;
        fieldType: zoneNamedResolutionFieldTypeEnum;
        subDomain?: string;
        target: string;
        ttl?: number;
    }) => Promise<domain.zone.Record>;
    /**
     * List the domain.zone.Redirection objects
     * Create a new redirection (Don't forget to refresh the zone)
     */
    post(path: '/domain/zone/{zoneName}/redirection'): (params: {
        zoneName: string;
        description?: string;
        keywords?: string;
        subDomain?: string;
        target: string;
        title?: string;
        type: zoneRedirectionTypeEnum;
    }) => Promise<domain.zone.Redirection>;
    /**
     * refresh operations
     * Apply zone modification on DNS servers
     */
    post(path: '/domain/zone/{zoneName}/refresh'): (params: {
        zoneName: string;
    }) => Promise<void>;
    /**
     * reset operations
     * Reset the DNS zone
     */
    post(path: '/domain/zone/{zoneName}/reset'): (params: {
        zoneName: string;
        DnsRecords?: zone.ResetRecord[];
        minimized?: boolean;
    }) => Promise<void>;
    /**
     * accelerate operations
     * Accelerate the task
     */
    post(path: '/domain/zone/{zoneName}/task/{id}/accelerate'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<void>;
    /**
     * cancel operations
     * Cancel the task
     */
    post(path: '/domain/zone/{zoneName}/task/{id}/cancel'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<void>;
    /**
     * relaunch operations
     * Relaunch the task
     */
    post(path: '/domain/zone/{zoneName}/task/{id}/relaunch'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<void>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/domain/zone/{zoneName}/terminate'): (params: {
        zoneName: string;
    }) => Promise<string>;
    /**
     * Glue record
     * Delete the glue record
     */
    delete(path: '/domain/{serviceName}/glueRecord/{host}'): (params: {
        host: string;
        serviceName: string;
    }) => Promise<domain.Task>;
    /**
     * CurrentNameServer
     * Delete a name server
     */
    delete(path: '/domain/{serviceName}/nameServer/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<domain.Task>;
    /**
     * Information about the options of a domain
     * Release a given option
     */
    delete(path: '/domain/{serviceName}/option/{option}'): (params: {
        option: domain.DomainOptionEnum;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Obfuscate whois
     * Delete a whois obfuscator
     */
    delete(path: '/domain/{serviceName}/owo/{field}'): (params: {
        field: domain.WhoisObfuscatorFieldsEnum;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete a SMD file
     */
    delete(path: '/domain/data/smd/{smdId}'): (params: {
        smdId: number;
    }) => Promise<void>;
    /**
     * Manage Dnssec for this zone
     * Disable Dnssec
     */
    delete(path: '/domain/zone/{zoneName}/dnssec'): (params: {
        zoneName: string;
    }) => Promise<void>;
    /**
     * Manage DynHost login
     * Delete a DynHost login
     */
    delete(path: '/domain/zone/{zoneName}/dynHost/login/{login}'): (params: {
        login: string;
        zoneName: string;
    }) => Promise<void>;
    /**
     * DynHost record
     * Delete a DynHost record (Don't forget to refresh the zone)
     */
    delete(path: '/domain/zone/{zoneName}/dynHost/record/{id}'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<void>;
    /**
     * Zone resource records
     * Delete a DNS record (Don't forget to refresh the zone)
     */
    delete(path: '/domain/zone/{zoneName}/record/{id}'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<void>;
    /**
     * Redirection
     * Delete a redirection (Don't forget to refresh the zone)
     */
    delete(path: '/domain/zone/{zoneName}/redirection/{id}'): (params: {
        id: number;
        zoneName: string;
    }) => Promise<void>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type zoneNamedResolutionFieldTypeEnum = zone.NamedResolutionFieldTypeEnum;
declare type zoneRedirectionTypeEnum = zone.RedirectionTypeEnum;

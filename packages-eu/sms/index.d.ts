import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /sms Models
 */
export declare namespace reference {
    type CountryEnum = "all" | "ca" | "cz" | "de" | "en" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "ma" | "nl" | "pl" | "pp" | "pt" | "qc" | "ru" | "sk" | "sn" | "tn" | "we";
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
export declare namespace sms {
    interface Account {
        automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum;
        callBack?: string;
        creditThresholdForAutomaticRecredit: number;
        creditsHoldByQuota: number;
        creditsLeft: number;
        description: string;
        name: string;
        smsResponse: sms.Response;
        status: sms.StatusAccountEnum;
        stopCallBack?: string;
        templates: sms.Templates;
        userQuantityWithQuota: number;
    }
    interface AlertThreshold {
        alertEmail: string;
        alertNumber: string;
        alertThreshold: number;
        support: sms.SupportEnum;
    }
    interface Blacklist {
        dateCreation: string;
        number: string;
    }
    type CharsetEnum = "UTF-8";
    interface ChatAccess {
        creationDate: string;
        id: number;
        url: string;
    }
    type ClassEnum = "flash" | "phoneDisplay" | "sim" | "toolkit";
    type CodingEnum = "7bit" | "8bit";
    type CountryEnum = "ag" | "ai" | "all" | "an" | "ar" | "at" | "au" | "aw" | "ba" | "bb" | "be" | "bg" | "bh" | "bm" | "bo" | "br" | "bz" | "ch" | "cl" | "cn" | "co" | "cr" | "cu" | "cy" | "cz" | "de" | "dk" | "dm" | "dz" | "ec" | "ee" | "eg" | "es" | "fi" | "fr" | "gb" | "gd" | "gp" | "gr" | "gy" | "hk" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "in" | "is" | "it" | "jm" | "jo" | "jp" | "kr" | "kw" | "ky" | "lb" | "lc" | "lt" | "lu" | "lv" | "ma" | "me" | "mq" | "ms" | "mt" | "my" | "nc" | "ng" | "nl" | "no" | "nz" | "pa" | "pe" | "pf" | "ph" | "pk" | "pl" | "pt" | "py" | "re" | "ro" | "rs" | "ru" | "sa" | "se" | "sg" | "si" | "sk" | "sr" | "tc" | "th" | "tn" | "tr" | "tt" | "tw" | "ua" | "uy" | "vc" | "ve" | "vg" | "vn" | "za";
    type DocumentWayTypeEnum = "incoming" | "outgoing";
    type EncodingEnum = "7bits" | "unicode";
    interface Exception {
        countrySuffixe: string;
        messages: string[];
        operators: string;
        restrictionCode: sms.RestrictionCodeEnum;
        substitution?: string;
    }
    interface Hlr {
        country: string;
        countryCode: string;
        network: string;
        operator: string;
        region: string;
    }
    interface HlrLookupNumber {
        datetime: string;
        id: number;
        msisdn: string;
        operatorCode: string;
        ported: boolean;
        reachable: boolean;
        roaming: boolean;
        status: sms.HlrStatuses;
        valid: boolean;
    }
    type HlrStatuses = "doing" | "done" | "error" | "todo";
    interface Incoming {
        creationDatetime: string;
        credits: number;
        id: number;
        message: string;
        sender: string;
        tag: string;
    }
    interface Job {
        creationDatetime: string;
        credits: number;
        deliveryReceipt: number;
        differedDelivery: number;
        id: number;
        message: string;
        messageLength: number;
        numberOfSms: number;
        ptt: number;
        receiver: string;
        sender: string;
    }
    interface JobEstimate {
        characters: number;
        charactersClass: sms.EncodingEnum;
        maxCharactersPerPart: number;
        parts: number;
    }
    interface Outgoing {
        creationDatetime: string;
        credits: number;
        deliveryReceipt: number;
        differedDelivery: number;
        id: number;
        message: string;
        messageLength: number;
        numberOfSms: number;
        ptt: number;
        receiver: string;
        sender: string;
        tag: string;
        tariffCode: string;
    }
    interface PackOffer {
        countryDestination: string;
        giftPrice?: number;
        giftQuantity?: number;
        language: string;
        price: number;
        quantity: number;
        smsQuantity: number;
        totalPrice?: number;
    }
    type PackQuantityAutomaticRecreditEnum = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000;
    type PackQuantityEnum = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000;
    interface Phonebook {
        bookKey: string;
        name: string;
        phoneKey: string;
    }
    interface PhonebookContact {
        group: string;
        homeMobile?: string;
        homePhone?: string;
        id: number;
        name: string;
        surname: string;
        workMobile?: string;
        workPhone?: string;
    }
    type PriorityEnum = "high" | "low" | "medium" | "veryLow";
    interface PttDetails {
        comment: string;
        description: string;
        duration: sms.PttDurationTypeEnum;
    }
    type PttDurationTypeEnum = "indeterminated" | "permanent" | "temporary";
    interface Quota {
        quotaLeft: number;
        quotaStatus: sms.QuotaStatusUserEnum;
    }
    type QuotaStatusUserEnum = "active" | "inactive";
    interface Receiver {
        autoUpdate: boolean;
        canAutoUpdate: boolean;
        datetime: string;
        description: string;
        records: number;
        slotId: number;
    }
    interface ReceiversAsynchronousCleanReport {
        taskId: number;
        totalCreditsRemoved: number;
    }
    type RefererSenderEnum = "custom" | "domain" | "line" | "nic" | "owner" | "virtual";
    interface Response {
        cgiUrl?: string;
        responseType: sms.ResponseTypeEnum;
        text?: string;
        trackingDefaultSmsSender?: string;
        trackingOptions?: sms.ResponseTrackingOptions[];
    }
    type ResponseTrackingMediaEnum = "email" | "sms" | "voice";
    interface ResponseTrackingOptions {
        media: sms.ResponseTrackingMediaEnum;
        sender: string;
        target: string;
    }
    type ResponseTypeEnum = "cgi" | "none" | "text";
    type RestrictionCodeEnum = "ALPHA" | "BAD_DLR" | "BLOCKED" | "CODING" | "DLR" | "FLASHONLY" | "MSISDN";
    interface Sender {
        comment?: string;
        description: string;
        referer: sms.RefererSenderEnum;
        sender: string;
        status: sms.StatusSenderEnum;
        type?: sms.TypeSenderEnum;
        validationMedia?: string;
    }
    interface SenderAvailable {
        referer: sms.SenderRefererEnum;
        sender: string;
    }
    type SenderRefererEnum = "domain" | "nichandle";
    interface SmsSendingReport {
        ids: number[];
        invalidReceivers: string[];
        totalCreditsRemoved: number;
        validReceivers: string[];
    }
    type StatusAccountEnum = "disable" | "enable";
    type StatusSenderEnum = "disable" | "enable" | "refused" | "waitingValidation";
    type SupportEnum = "both" | "mail" | "sms";
    interface Task {
        function: sms.TodoGeneralPublicFunctionsEnum;
        status: telephony.TaskStatusEnum;
        step: sms.TodoGeneralPublicStepsEnum;
        taskId: number;
    }
    interface TemplateControl {
        activity: sms.TypeTemplateEnum;
        comment: string;
        datetime: string;
        description: string;
        message: string;
        name: string;
        status: sms.StatusSenderEnum;
    }
    interface Templates {
        customizedEmailMode: boolean;
        customizedSmsMode: boolean;
        emailBody?: string;
        emailFrom?: string;
        emailSubject?: string;
        smsBody?: string;
    }
    type TodoGeneralPublicFunctionsEnum = "cleanSmsReceivers";
    type TodoGeneralPublicStepsEnum = "checkOrder" | "createHlrs" | "finishing" | "sendMailReport" | "starting" | "waitForHlrs";
    type TypeSenderEnum = "alpha" | "numeric" | "shortcode" | "virtual";
    type TypeTemplateEnum = "alerting" | "authentification" | "transactional";
    interface User {
        alertThresholdInformations: sms.AlertThreshold;
        callBack?: string;
        ipRestrictions: string[];
        login: string;
        password: string;
        quotaInformations: sms.Quota;
        stopCallBack?: string;
    }
    interface VirtualNumber {
        countryCode: sms.VirtualNumberIsoCountryCodeEnum;
        number: string;
    }
    interface VirtualNumberGenericService {
        countryCode: sms.VirtualNumberIsoCountryCodeEnum;
        number: string;
    }
    type VirtualNumberIsoCountryCodeEnum = "be" | "ch" | "de" | "es" | "fr" | "uk";
    interface VirtualNumberJob {
        creationDatetime: string;
        credits: number;
        deliveryReceipt: number;
        differedDelivery: number;
        id: number;
        message: string;
        messageLength: number;
        numberOfSms: number;
        ptt: number;
        receiver: string;
    }
}
export declare namespace telephony {
    type ContactsExportFormatsEnum = "csv";
    interface PcsFile {
        filename: string;
        status: telephony.PcsFileStatusEnum;
        url: string;
        urlExpirationDatetime: string;
    }
    type PcsFileStatusEnum = "doing" | "done" | "error" | "todo";
    interface Task {
        action: string;
        message?: string;
        objectCreated?: string;
        serviceType: string;
        status: telephony.TaskStatusEnum;
        taskId: number;
    }
    type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo";
}
/**
 * END API /sms Models
 */
export declare function proxySms(ovhEngine: OvhRequestable): Sms;
export default proxySms;
/**
 * Api Proxy model
 */ export interface Sms {
    $get(): Promise<string[]>;
    estimate: {
        $post(params: {
            message: string;
            noStopClause: boolean;
            senderType: sms.TypeSenderEnum;
        }): Promise<sms.JobEstimate>;
    };
    ptts: {
        $get(params: {
            ptt: number;
        }): Promise<sms.PttDetails>;
    };
    virtualNumbers: {
        $get(): Promise<string[]>;
        $(number: string): {
            $get(): Promise<sms.VirtualNumberGenericService>;
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
        };
    };
    $(serviceName: string): {
        $get(): Promise<sms.Account>;
        $put(params?: {
            automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum;
            callBack?: string;
            creditThresholdForAutomaticRecredit?: number;
            creditsHoldByQuota?: number;
            creditsLeft?: number;
            description?: string;
            name?: string;
            smsResponse?: sms.Response;
            status?: sms.StatusAccountEnum;
            stopCallBack?: string;
            templates?: sms.Templates;
            userQuantityWithQuota?: number;
        }): Promise<void>;
        blacklists: {
            $get(): Promise<string[]>;
            $(number: string): {
                $delete(): Promise<void>;
                $get(): Promise<sms.Blacklist>;
            };
        };
        document: {
            $get(params: {
                creationDatetime_from?: string;
                creationDatetime_to?: string;
                tag?: string;
                wayType: sms.DocumentWayTypeEnum;
            }): Promise<string>;
        };
        exceptions: {
            $get(params: {
                receiver: string;
            }): Promise<sms.Exception[]>;
        };
        hlr: {
            $get(): Promise<number[]>;
            $post(params?: {
                receivers?: string[];
                receiversDocumentUrl?: string;
            }): Promise<sms.SmsSendingReport>;
            $(id: number): {
                $get(): Promise<sms.HlrLookupNumber>;
                operator: {
                    $get(): Promise<sms.Hlr>;
                };
            };
        };
        incoming: {
            $get(params?: {
                creationDatetime_from?: string;
                creationDatetime_to?: string;
                sender?: string;
                tag?: string;
            }): Promise<number[]>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<sms.Incoming>;
            };
        };
        jobs: {
            $get(): Promise<number[]>;
            $post(params: {
                charset?: sms.CharsetEnum;
                class?: sms.ClassEnum;
                coding?: sms.CodingEnum;
                differedPeriod?: number;
                message: string;
                noStopClause?: boolean;
                priority?: sms.PriorityEnum;
                receivers?: string[];
                receiversDocumentUrl?: string;
                receiversSlotId?: string;
                sender?: string;
                senderForResponse?: boolean;
                tag?: string;
                validityPeriod?: number;
            }): Promise<sms.SmsSendingReport>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<sms.Job>;
            };
        };
        outgoing: {
            $get(params?: {
                creationDatetime_from?: string;
                creationDatetime_to?: string;
                deliveryReceipt?: number;
                differedDelivery?: number;
                ptt?: number;
                receiver?: string;
                sender?: string;
                tag?: string;
            }): Promise<number[]>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<sms.Outgoing>;
                hlr: {
                    $get(): Promise<sms.Hlr>;
                };
            };
        };
        phonebooks: {
            $get(): Promise<string[]>;
            $post(params: {
                name: string;
            }): Promise<string>;
            $(bookKey: string): {
                $delete(): Promise<void>;
                $get(): Promise<sms.Phonebook>;
                $put(params?: {
                    bookKey?: string;
                    name?: string;
                    phoneKey?: string;
                }): Promise<void>;
                export: {
                    $get(params: {
                        format: telephony.ContactsExportFormatsEnum;
                    }): Promise<telephony.PcsFile>;
                };
                import: {
                    $post(params: {
                        documentId: string;
                    }): Promise<telephony.Task>;
                };
                phonebookContact: {
                    $get(): Promise<number[]>;
                    $post(params: {
                        group: string;
                        homeMobile?: string;
                        homePhone?: string;
                        name: string;
                        surname: string;
                        workMobile?: string;
                        workPhone?: string;
                    }): Promise<number>;
                    $(id: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<sms.PhonebookContact>;
                        $put(params?: {
                            group?: string;
                            homeMobile?: string;
                            homePhone?: string;
                            id?: number;
                            name?: string;
                            surname?: string;
                            workMobile?: string;
                            workPhone?: string;
                        }): Promise<void>;
                    };
                };
            };
        };
        receivers: {
            $get(): Promise<number[]>;
            $post(params: {
                autoUpdate: boolean;
                csvUrl?: string;
                description: string;
                documentId?: string;
                slotId: number;
            }): Promise<sms.Receiver>;
            $(slotId: number): {
                $delete(): Promise<void>;
                $get(): Promise<sms.Receiver>;
                $put(params?: {
                    autoUpdate?: boolean;
                    canAutoUpdate?: boolean;
                    datetime?: string;
                    description?: string;
                    records?: number;
                    slotId?: number;
                }): Promise<void>;
                clean: {
                    $post(params: {
                        freemium: boolean;
                        priceOnly: boolean;
                    }): Promise<sms.ReceiversAsynchronousCleanReport>;
                };
                csv: {
                    $get(): Promise<string>;
                };
            };
        };
        seeOffers: {
            $get(params: {
                countryCurrencyPrice: reference.CountryEnum;
                countryDestination: sms.CountryEnum;
                quantity: sms.PackQuantityEnum;
            }): Promise<sms.PackOffer[]>;
        };
        senders: {
            $get(): Promise<string[]>;
            $post(params: {
                description?: string;
                reason?: string;
                sender: string;
            }): Promise<string>;
            $(sender: string): {
                $delete(): Promise<void>;
                $get(): Promise<sms.Sender>;
                $put(params?: {
                    comment?: string;
                    description?: string;
                    referer?: sms.RefererSenderEnum;
                    sender?: string;
                    status?: sms.StatusSenderEnum;
                    type?: sms.TypeSenderEnum;
                    validationMedia?: string;
                }): Promise<void>;
                validate: {
                    $post(params: {
                        code: string;
                    }): Promise<void>;
                };
            };
        };
        sendersAvailableForValidation: {
            $get(params?: {
                referer?: sms.SenderRefererEnum;
            }): Promise<sms.SenderAvailable[]>;
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
                status?: telephony.TaskStatusEnum;
            }): Promise<number[]>;
            $(taskId: number): {
                $get(): Promise<sms.Task>;
            };
        };
        templatesControl: {
            $get(): Promise<string[]>;
            $post(params: {
                activity: sms.TypeTemplateEnum;
                description?: string;
                message: string;
                name: string;
                reason?: string;
            }): Promise<void>;
            $(name: string): {
                $delete(): Promise<void>;
                $get(): Promise<sms.TemplateControl>;
                $put(params?: {
                    activity?: sms.TypeTemplateEnum;
                    comment?: string;
                    datetime?: string;
                    description?: string;
                    message?: string;
                    name?: string;
                    status?: sms.StatusSenderEnum;
                }): Promise<void>;
                relaunchValidation: {
                    $post(params: {
                        description: string;
                        message: string;
                    }): Promise<void>;
                };
            };
        };
        transferCredits: {
            $post(params: {
                credits: number;
                smsAccountTarget: string;
            }): Promise<void>;
        };
        users: {
            $get(): Promise<string[]>;
            $post(params: {
                login: string;
                password: string;
            }): Promise<void>;
            $(login: string): {
                $delete(): Promise<void>;
                $get(): Promise<sms.User>;
                $put(params?: {
                    alertThresholdInformations?: sms.AlertThreshold;
                    callBack?: string;
                    ipRestrictions?: string[];
                    login?: string;
                    password?: string;
                    quotaInformations?: sms.Quota;
                    stopCallBack?: string;
                }): Promise<void>;
                document: {
                    $get(params: {
                        creationDatetime_from?: string;
                        creationDatetime_to?: string;
                        tag?: string;
                        wayType: sms.DocumentWayTypeEnum;
                    }): Promise<string>;
                };
                incoming: {
                    $get(params?: {
                        sender?: string;
                        tag?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<sms.Incoming>;
                    };
                };
                jobs: {
                    $get(): Promise<number[]>;
                    $post(params: {
                        charset?: sms.CharsetEnum;
                        class?: sms.ClassEnum;
                        coding?: sms.CodingEnum;
                        differedPeriod?: number;
                        message: string;
                        noStopClause?: boolean;
                        priority?: sms.PriorityEnum;
                        receivers?: string[];
                        receiversDocumentUrl?: string;
                        receiversSlotId?: string;
                        sender?: string;
                        senderForResponse?: boolean;
                        tag?: string;
                        validityPeriod?: number;
                    }): Promise<sms.SmsSendingReport>;
                    $(id: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<sms.Job>;
                    };
                };
                outgoing: {
                    $get(params?: {
                        deliveryReceipt?: number;
                        differedDelivery?: number;
                        ptt?: number;
                        receiver?: string;
                        sender?: string;
                        tag?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<sms.Outgoing>;
                        hlr: {
                            $get(): Promise<sms.Hlr>;
                        };
                    };
                };
                receivers: {
                    $get(): Promise<number[]>;
                    $post(params: {
                        autoUpdate: boolean;
                        csvUrl?: string;
                        description: string;
                        documentId?: string;
                        slotId: number;
                    }): Promise<sms.Receiver>;
                    $(slotId: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<sms.Receiver>;
                        $put(params?: {
                            autoUpdate?: boolean;
                            canAutoUpdate?: boolean;
                            datetime?: string;
                            description?: string;
                            records?: number;
                            slotId?: number;
                        }): Promise<void>;
                        clean: {
                            $post(params: {
                                freemium: boolean;
                                priceOnly: boolean;
                            }): Promise<sms.ReceiversAsynchronousCleanReport>;
                        };
                        csv: {
                            $get(): Promise<string>;
                        };
                    };
                };
            };
        };
        virtualNumbers: {
            $get(): Promise<string[]>;
            $(number: string): {
                $get(): Promise<sms.VirtualNumber>;
                chatAccess: {
                    $delete(): Promise<void>;
                    $get(): Promise<sms.ChatAccess>;
                    $post(): Promise<sms.ChatAccess>;
                };
                incoming: {
                    $get(params?: {
                        creationDatetime_from?: string;
                        creationDatetime_to?: string;
                        sender?: string;
                        tag?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<sms.Incoming>;
                    };
                };
                jobs: {
                    $get(): Promise<number[]>;
                    $post(params: {
                        charset?: sms.CharsetEnum;
                        class?: sms.ClassEnum;
                        coding?: sms.CodingEnum;
                        differedPeriod?: number;
                        message: string;
                        priority?: sms.PriorityEnum;
                        receivers?: string[];
                        receiversDocumentUrl?: string;
                        receiversSlotId?: string;
                        tag?: string;
                        validityPeriod?: number;
                    }): Promise<sms.SmsSendingReport>;
                    $(id: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<sms.VirtualNumberJob>;
                    };
                };
                outgoing: {
                    $get(params?: {
                        creationDatetime_from?: string;
                        creationDatetime_to?: string;
                        deliveryReceipt?: number;
                        differedDelivery?: number;
                        ptt?: number;
                        receiver?: string;
                        sender?: string;
                        tag?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<sms.Outgoing>;
                        hlr: {
                            $get(): Promise<sms.Hlr>;
                        };
                    };
                };
            };
        };
    };
    /**
     * Operations about the VOIP service
     * List available services
     */
    get(path: '/sms'): () => Promise<string[]>;
    /**
     * SMS details
     * Get this object properties
     */
    get(path: '/sms/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<sms.Account>;
    /**
     * List the sms.Blacklist objects
     * Numbers blacklisted associated to the sms account
     */
    get(path: '/sms/{serviceName}/blacklists'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * SMS blacklist
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/blacklists/{number}'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<sms.Blacklist>;
    /**
     * document operations
     * Get the /me/document id generated
     */
    get(path: '/sms/{serviceName}/document'): (params: {
        serviceName: string;
        creationDatetime_from?: string;
        creationDatetime_to?: string;
        tag?: string;
        wayType: sms.DocumentWayTypeEnum;
    }) => Promise<string>;
    /**
     * exceptions operations
     * Describe filter exceptions in sms sending from a specific receiver.
     */
    get(path: '/sms/{serviceName}/exceptions'): (params: {
        serviceName: string;
        receiver: string;
    }) => Promise<sms.Exception[]>;
    /**
     * List the sms.HlrLookupNumber objects
     * Home Location Register informations. Give informations about a given cellular phone.
     */
    get(path: '/sms/{serviceName}/hlr'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Home Location Register informations. Give informations about a given cellular phone.
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/hlr/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<sms.HlrLookupNumber>;
    /**
     * Sms operator informations
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/hlr/{id}/operator'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<sms.Hlr>;
    /**
     * List the sms.Incoming objects
     * Sms received associated to the sms account
     */
    get(path: '/sms/{serviceName}/incoming'): (params: {
        serviceName: string;
        creationDatetime_from?: string;
        creationDatetime_to?: string;
        sender?: string;
        tag?: string;
    }) => Promise<number[]>;
    /**
     * Sms history of sms incoming received
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/incoming/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<sms.Incoming>;
    /**
     * List the sms.Job objects
     * Sms in pending associated to the sms account
     */
    get(path: '/sms/{serviceName}/jobs'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Sms job
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/jobs/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<sms.Job>;
    /**
     * List the sms.Outgoing objects
     * Sms sent associated to the sms account
     */
    get(path: '/sms/{serviceName}/outgoing'): (params: {
        serviceName: string;
        creationDatetime_from?: string;
        creationDatetime_to?: string;
        deliveryReceipt?: number;
        differedDelivery?: number;
        ptt?: number;
        receiver?: string;
        sender?: string;
        tag?: string;
    }) => Promise<number[]>;
    /**
     * Sms history of sms outgoing sent
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/outgoing/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<sms.Outgoing>;
    /**
     * Sms operator informations
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/outgoing/{id}/hlr'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<sms.Hlr>;
    /**
     * List the sms.Phonebook objects
     * Return phonebooks associated to this account
     */
    get(path: '/sms/{serviceName}/phonebooks'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Phone book
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/phonebooks/{bookKey}'): (params: {
        bookKey: string;
        serviceName: string;
    }) => Promise<sms.Phonebook>;
    /**
     * export operations
     * Export the phonebook's contacts
     */
    get(path: '/sms/{serviceName}/phonebooks/{bookKey}/export'): (params: {
        bookKey: string;
        serviceName: string;
        format: telephony.ContactsExportFormatsEnum;
    }) => Promise<telephony.PcsFile>;
    /**
     * List the sms.PhonebookContact objects
     * Phonebook contacts
     */
    get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact'): (params: {
        bookKey: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Phone book contact
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}'): (params: {
        bookKey: string;
        id: number;
        serviceName: string;
    }) => Promise<sms.PhonebookContact>;
    /**
     * List the sms.Receiver objects
     * Receivers preloaded from text or csv document file
     */
    get(path: '/sms/{serviceName}/receivers'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Sms receivers preloaded
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/receivers/{slotId}'): (params: {
        serviceName: string;
        slotId: number;
    }) => Promise<sms.Receiver>;
    /**
     * csv operations
     * Get the document data container
     */
    get(path: '/sms/{serviceName}/receivers/{slotId}/csv'): (params: {
        serviceName: string;
        slotId: number;
    }) => Promise<string>;
    /**
     * seeOffers operations
     * Describe SMS offers available.
     */
    get(path: '/sms/{serviceName}/seeOffers'): (params: {
        serviceName: string;
        countryCurrencyPrice: reference.CountryEnum;
        countryDestination: sms.CountryEnum;
        quantity: sms.PackQuantityEnum;
    }) => Promise<sms.PackOffer[]>;
    /**
     * List the sms.Sender objects
     * Senders allowed associated to the sms account
     */
    get(path: '/sms/{serviceName}/senders'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * SMS senders
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/senders/{sender}'): (params: {
        sender: string;
        serviceName: string;
    }) => Promise<sms.Sender>;
    /**
     * sendersAvailableForValidation operations
     * The senders that are attached to your personal informations or OVH services and that can be automatically validated
     */
    get(path: '/sms/{serviceName}/sendersAvailableForValidation'): (params: {
        serviceName: string;
        referer?: sms.SenderRefererEnum;
    }) => Promise<sms.SenderAvailable[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the sms.Task objects
     * Operations on a SMS service
     */
    get(path: '/sms/{serviceName}/task'): (params: {
        serviceName: string;
        status?: telephony.TaskStatusEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a SMS service
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<sms.Task>;
    /**
     * List the sms.TemplateControl objects
     * Template pattern filled up for moderation (Needed to send in US country)
     */
    get(path: '/sms/{serviceName}/templatesControl'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Sms template for moderation (Needed to send in US country)
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/templatesControl/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<sms.TemplateControl>;
    /**
     * List the sms.User objects
     * Users associated to the sms account
     */
    get(path: '/sms/{serviceName}/users'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * SMS users
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/users/{login}'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<sms.User>;
    /**
     * document operations
     * Get the /me/document id generated
     */
    get(path: '/sms/{serviceName}/users/{login}/document'): (params: {
        login: string;
        serviceName: string;
        creationDatetime_from?: string;
        creationDatetime_to?: string;
        tag?: string;
        wayType: sms.DocumentWayTypeEnum;
    }) => Promise<string>;
    /**
     * List the sms.Incoming objects
     * Sms received associated to the sms user
     */
    get(path: '/sms/{serviceName}/users/{login}/incoming'): (params: {
        login: string;
        serviceName: string;
        sender?: string;
        tag?: string;
    }) => Promise<number[]>;
    /**
     * Sms history of sms incoming received
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/users/{login}/incoming/{id}'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<sms.Incoming>;
    /**
     * List the sms.Job objects
     * Sms in pending associated to the sms user
     */
    get(path: '/sms/{serviceName}/users/{login}/jobs'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Sms job
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/users/{login}/jobs/{id}'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<sms.Job>;
    /**
     * List the sms.Outgoing objects
     * Sms sent associated to the sms user
     */
    get(path: '/sms/{serviceName}/users/{login}/outgoing'): (params: {
        login: string;
        serviceName: string;
        deliveryReceipt?: number;
        differedDelivery?: number;
        ptt?: number;
        receiver?: string;
        sender?: string;
        tag?: string;
    }) => Promise<number[]>;
    /**
     * Sms history of sms outgoing sent
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<sms.Outgoing>;
    /**
     * Sms operator informations
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}/hlr'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<sms.Hlr>;
    /**
     * List the sms.Receiver objects
     * Receivers preloaded from text or csv document file
     */
    get(path: '/sms/{serviceName}/users/{login}/receivers'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Sms receivers preloaded
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}'): (params: {
        login: string;
        serviceName: string;
        slotId: number;
    }) => Promise<sms.Receiver>;
    /**
     * csv operations
     * Get the document data container
     */
    get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/csv'): (params: {
        login: string;
        serviceName: string;
        slotId: number;
    }) => Promise<string>;
    /**
     * List the sms.VirtualNumber objects
     * Virtual numbers associated to the sms account
     */
    get(path: '/sms/{serviceName}/virtualNumbers'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Virtual numbers
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<sms.VirtualNumber>;
    /**
     * The web access for your virtual number chat application
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<sms.ChatAccess>;
    /**
     * List the sms.Incoming objects
     * Sms received associated to the sms account
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming'): (params: {
        number: string;
        serviceName: string;
        creationDatetime_from?: string;
        creationDatetime_to?: string;
        sender?: string;
        tag?: string;
    }) => Promise<number[]>;
    /**
     * Sms history of sms incoming received
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}'): (params: {
        id: number;
        number: string;
        serviceName: string;
    }) => Promise<sms.Incoming>;
    /**
     * List the sms.VirtualNumberJob objects
     * Sms in pending associated to the sms account
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Sms job
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}'): (params: {
        id: number;
        number: string;
        serviceName: string;
    }) => Promise<sms.VirtualNumberJob>;
    /**
     * List the sms.Outgoing objects
     * Sms sent associated to the sms account
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing'): (params: {
        number: string;
        serviceName: string;
        creationDatetime_from?: string;
        creationDatetime_to?: string;
        deliveryReceipt?: number;
        differedDelivery?: number;
        ptt?: number;
        receiver?: string;
        sender?: string;
        tag?: string;
    }) => Promise<number[]>;
    /**
     * Sms history of sms outgoing sent
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}'): (params: {
        id: number;
        number: string;
        serviceName: string;
    }) => Promise<sms.Outgoing>;
    /**
     * Sms operator informations
     * Get this object properties
     */
    get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr'): (params: {
        id: number;
        number: string;
        serviceName: string;
    }) => Promise<sms.Hlr>;
    /**
     * Get informations about the given ptt code
     * Get informations about the given ptt code
     */
    get(path: '/sms/ptts'): (params: {
        ptt: number;
    }) => Promise<sms.PttDetails>;
    /**
     * Operations about the VOIP service
     * List available services
     */
    get(path: '/sms/virtualNumbers'): () => Promise<string[]>;
    /**
     * Virtual numbers
     * Get this object properties
     */
    get(path: '/sms/virtualNumbers/{number}'): (params: {
        number: string;
    }) => Promise<sms.VirtualNumberGenericService>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/sms/virtualNumbers/{number}/serviceInfos'): (params: {
        number: string;
    }) => Promise<services.Service>;
    /**
     * SMS details
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}'): (params: {
        serviceName: string;
        automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum;
        callBack?: string;
        creditThresholdForAutomaticRecredit?: number;
        creditsHoldByQuota?: number;
        creditsLeft?: number;
        description?: string;
        name?: string;
        smsResponse?: sms.Response;
        status?: sms.StatusAccountEnum;
        stopCallBack?: string;
        templates?: sms.Templates;
        userQuantityWithQuota?: number;
    }) => Promise<void>;
    /**
     * Phone book
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}/phonebooks/{bookKey}'): (params: {
        bookKey: string;
        serviceName: string;
        name?: string;
        phoneKey?: string;
    }) => Promise<void>;
    /**
     * Phone book contact
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}'): (params: {
        bookKey: string;
        id: number;
        serviceName: string;
        group?: string;
        homeMobile?: string;
        homePhone?: string;
        name?: string;
        surname?: string;
        workMobile?: string;
        workPhone?: string;
    }) => Promise<void>;
    /**
     * Sms receivers preloaded
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}/receivers/{slotId}'): (params: {
        serviceName: string;
        slotId: number;
        autoUpdate?: boolean;
        canAutoUpdate?: boolean;
        datetime?: string;
        description?: string;
        records?: number;
    }) => Promise<void>;
    /**
     * SMS senders
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}/senders/{sender}'): (params: {
        sender: string;
        serviceName: string;
        comment?: string;
        description?: string;
        referer?: sms.RefererSenderEnum;
        status?: sms.StatusSenderEnum;
        type?: sms.TypeSenderEnum;
        validationMedia?: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}/serviceInfos'): (params: {
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
     * Sms template for moderation (Needed to send in US country)
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}/templatesControl/{name}'): (params: {
        name: string;
        serviceName: string;
        activity?: sms.TypeTemplateEnum;
        comment?: string;
        datetime?: string;
        description?: string;
        message?: string;
        status?: sms.StatusSenderEnum;
    }) => Promise<void>;
    /**
     * SMS users
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}/users/{login}'): (params: {
        login: string;
        serviceName: string;
        alertThresholdInformations?: sms.AlertThreshold;
        callBack?: string;
        ipRestrictions?: string[];
        password?: string;
        quotaInformations?: sms.Quota;
        stopCallBack?: string;
    }) => Promise<void>;
    /**
     * Sms receivers preloaded
     * Alter this object properties
     */
    put(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}'): (params: {
        login: string;
        serviceName: string;
        slotId: number;
        autoUpdate?: boolean;
        canAutoUpdate?: boolean;
        datetime?: string;
        description?: string;
        records?: number;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/sms/virtualNumbers/{number}/serviceInfos'): (params: {
        number: string;
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
     * List the sms.HlrLookupNumber objects
     * Add one or several sending hlr lookup request
     */
    post(path: '/sms/{serviceName}/hlr'): (params: {
        serviceName: string;
        receivers?: string[];
        receiversDocumentUrl?: string;
    }) => Promise<sms.SmsSendingReport>;
    /**
     * List the sms.Job objects
     * Add one or several sending jobs
     */
    post(path: '/sms/{serviceName}/jobs'): (params: {
        serviceName: string;
        charset?: sms.CharsetEnum;
        class?: sms.ClassEnum;
        coding?: sms.CodingEnum;
        differedPeriod?: number;
        message: string;
        noStopClause?: boolean;
        priority?: sms.PriorityEnum;
        receivers?: string[];
        receiversDocumentUrl?: string;
        receiversSlotId?: string;
        sender?: string;
        senderForResponse?: boolean;
        tag?: string;
        validityPeriod?: number;
    }) => Promise<sms.SmsSendingReport>;
    /**
     * List the sms.Phonebook objects
     * Add a phonebook. Return the bookKey.
     */
    post(path: '/sms/{serviceName}/phonebooks'): (params: {
        serviceName: string;
        name: string;
    }) => Promise<string>;
    /**
     * import operations
     * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
     */
    post(path: '/sms/{serviceName}/phonebooks/{bookKey}/import'): (params: {
        bookKey: string;
        serviceName: string;
        documentId: string;
    }) => Promise<telephony.Task>;
    /**
     * List the sms.PhonebookContact objects
     * Create a phonebook contact. Return identifier of the phonebook contact.
     */
    post(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact'): (params: {
        bookKey: string;
        serviceName: string;
        group: string;
        homeMobile?: string;
        homePhone?: string;
        name: string;
        surname: string;
        workMobile?: string;
        workPhone?: string;
    }) => Promise<number>;
    /**
     * List the sms.Receiver objects
     * Add a new document of csv receivers
     */
    post(path: '/sms/{serviceName}/receivers'): (params: {
        serviceName: string;
        autoUpdate: boolean;
        csvUrl?: string;
        description: string;
        documentId?: string;
        slotId: number;
    }) => Promise<sms.Receiver>;
    /**
     * clean operations
     * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
     */
    post(path: '/sms/{serviceName}/receivers/{slotId}/clean'): (params: {
        serviceName: string;
        slotId: number;
        freemium: boolean;
        priceOnly: boolean;
    }) => Promise<sms.ReceiversAsynchronousCleanReport>;
    /**
     * List the sms.Sender objects
     * Create the sms sender given
     */
    post(path: '/sms/{serviceName}/senders'): (params: {
        serviceName: string;
        description?: string;
        reason?: string;
        sender: string;
    }) => Promise<string>;
    /**
     * validate operations
     * Validate a given sender with an activation code.
     */
    post(path: '/sms/{serviceName}/senders/{sender}/validate'): (params: {
        sender: string;
        serviceName: string;
        code: string;
    }) => Promise<void>;
    /**
     * List the sms.TemplateControl objects
     * Create the sms template control given
     */
    post(path: '/sms/{serviceName}/templatesControl'): (params: {
        serviceName: string;
        activity: sms.TypeTemplateEnum;
        description?: string;
        message: string;
        name: string;
        reason?: string;
    }) => Promise<void>;
    /**
     * relaunchValidation operations
     * Attempt a new validation after moderation refusal
     */
    post(path: '/sms/{serviceName}/templatesControl/{name}/relaunchValidation'): (params: {
        name: string;
        serviceName: string;
        description: string;
        message: string;
    }) => Promise<void>;
    /**
     * transferCredits operations
     * Credit transfer between two sms accounts.
     */
    post(path: '/sms/{serviceName}/transferCredits'): (params: {
        serviceName: string;
        credits: number;
        smsAccountTarget: string;
    }) => Promise<void>;
    /**
     * List the sms.User objects
     * Create a new user for an sms account
     */
    post(path: '/sms/{serviceName}/users'): (params: {
        serviceName: string;
        login: string;
        password: string;
    }) => Promise<void>;
    /**
     * List the sms.Job objects
     * Add one or several sending jobs
     */
    post(path: '/sms/{serviceName}/users/{login}/jobs'): (params: {
        login: string;
        serviceName: string;
        charset?: sms.CharsetEnum;
        class?: sms.ClassEnum;
        coding?: sms.CodingEnum;
        differedPeriod?: number;
        message: string;
        noStopClause?: boolean;
        priority?: sms.PriorityEnum;
        receivers?: string[];
        receiversDocumentUrl?: string;
        receiversSlotId?: string;
        sender?: string;
        senderForResponse?: boolean;
        tag?: string;
        validityPeriod?: number;
    }) => Promise<sms.SmsSendingReport>;
    /**
     * List the sms.Receiver objects
     * Add a new document of csv receivers
     */
    post(path: '/sms/{serviceName}/users/{login}/receivers'): (params: {
        login: string;
        serviceName: string;
        autoUpdate: boolean;
        csvUrl?: string;
        description: string;
        documentId?: string;
        slotId: number;
    }) => Promise<sms.Receiver>;
    /**
     * clean operations
     * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
     */
    post(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/clean'): (params: {
        login: string;
        serviceName: string;
        slotId: number;
        freemium: boolean;
        priceOnly: boolean;
    }) => Promise<sms.ReceiversAsynchronousCleanReport>;
    /**
     * The web access for your virtual number chat application
     * Create a new web access for this ressource
     */
    post(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<sms.ChatAccess>;
    /**
     * List the sms.VirtualNumberJob objects
     * Add one or several sending jobs
     */
    post(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs'): (params: {
        number: string;
        serviceName: string;
        charset?: sms.CharsetEnum;
        class?: sms.ClassEnum;
        coding?: sms.CodingEnum;
        differedPeriod?: number;
        message: string;
        priority?: sms.PriorityEnum;
        receivers?: string[];
        receiversDocumentUrl?: string;
        receiversSlotId?: string;
        tag?: string;
        validityPeriod?: number;
    }) => Promise<sms.SmsSendingReport>;
    /**
     * Get the encoding, length and number of SMS parts of a text message
     * Get the encoding, length and number of SMS parts of a text message
     */
    post(path: '/sms/estimate'): (params: {
        message: string;
        noStopClause: boolean;
        senderType: sms.TypeSenderEnum;
    }) => Promise<sms.JobEstimate>;
    /**
     * SMS blacklist
     * Delete the blacklisted sms number given
     */
    delete(path: '/sms/{serviceName}/blacklists/{number}'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms history of sms incoming received
     * Delete the sms incoming history given
     */
    delete(path: '/sms/{serviceName}/incoming/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms job
     * Delete the sms job given (stop sending)
     */
    delete(path: '/sms/{serviceName}/jobs/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms history of sms outgoing sent
     * Delete the sms outgoing history given
     */
    delete(path: '/sms/{serviceName}/outgoing/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Phone book
     * Delete a phonebook
     */
    delete(path: '/sms/{serviceName}/phonebooks/{bookKey}'): (params: {
        bookKey: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Phone book contact
     * Delete a phonebook contact
     */
    delete(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}'): (params: {
        bookKey: string;
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms receivers preloaded
     * Delete the document from the slot
     */
    delete(path: '/sms/{serviceName}/receivers/{slotId}'): (params: {
        serviceName: string;
        slotId: number;
    }) => Promise<void>;
    /**
     * SMS senders
     * Delete the sms sender given
     */
    delete(path: '/sms/{serviceName}/senders/{sender}'): (params: {
        sender: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms template for moderation (Needed to send in US country)
     * Delete the sms template control
     */
    delete(path: '/sms/{serviceName}/templatesControl/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * SMS users
     * Delete the sms user given
     */
    delete(path: '/sms/{serviceName}/users/{login}'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms history of sms incoming received
     * Delete the sms incoming history given
     */
    delete(path: '/sms/{serviceName}/users/{login}/incoming/{id}'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms job
     * Delete the sms job given (stop sending)
     */
    delete(path: '/sms/{serviceName}/users/{login}/jobs/{id}'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms history of sms outgoing sent
     * Delete the sms outgoing history given
     */
    delete(path: '/sms/{serviceName}/users/{login}/outgoing/{id}'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms receivers preloaded
     * Delete the document from the slot
     */
    delete(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}'): (params: {
        login: string;
        serviceName: string;
        slotId: number;
    }) => Promise<void>;
    /**
     * The web access for your virtual number chat application
     * Delete the given web access
     */
    delete(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms history of sms incoming received
     * Delete the sms incoming history given
     */
    delete(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}'): (params: {
        id: number;
        number: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms job
     * Delete the sms job given (stop sending)
     */
    delete(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}'): (params: {
        id: number;
        number: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Sms history of sms outgoing sent
     * Delete the sms outgoing history given
     */
    delete(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}'): (params: {
        id: number;
        number: string;
        serviceName: string;
    }) => Promise<void>;
}

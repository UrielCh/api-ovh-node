import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace reference {
    //reference.CountryEnum
    export type CountryEnum = "all" | "ca" | "cz" | "de" | "en" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "ma" | "nl" | "pl" | "pp" | "pt" | "qc" | "ru" | "sk" | "sn" | "tn" | "we"
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
export namespace sms {
    //sms.Account
    // fullName: sms.Account.Account
    export interface Account {
        automaticRecreditAmount?: OVH.sms.PackQuantityAutomaticRecreditEnum;
        callBack?: string;
        creditThresholdForAutomaticRecredit?: number;
        creditsHoldByQuota?: number;
        creditsLeft?: number;
        description?: string;
        name?: string;
        smsResponse?: OVH.sms.Response;
        status?: OVH.sms.StatusAccountEnum;
        stopCallBack?: string;
        templates?: OVH.sms.Templates;
        userQuantityWithQuota?: number;
    }
    //sms.AlertThreshold
    // fullName: sms.AlertThreshold.AlertThreshold
    export interface AlertThreshold {
        alertEmail?: string;
        alertNumber?: string;
        alertThreshold?: number;
        support?: OVH.sms.SupportEnum;
    }
    //sms.Blacklist
    // fullName: sms.Blacklist.Blacklist
    export interface Blacklist {
        dateCreation?: string;
        number?: string;
    }
    //sms.CharsetEnum
    export type CharsetEnum = "UTF-8"
    //sms.ChatAccess
    // fullName: sms.ChatAccess.ChatAccess
    export interface ChatAccess {
        creationDate?: string;
        id?: number;
        url?: string;
    }
    //sms.ClassEnum
    export type ClassEnum = "flash" | "phoneDisplay" | "sim" | "toolkit"
    //sms.CodingEnum
    export type CodingEnum = "7bit" | "8bit"
    //sms.CountryEnum
    export type CountryEnum = "ag" | "ai" | "all" | "an" | "ar" | "at" | "au" | "aw" | "ba" | "bb" | "be" | "bg" | "bh" | "bm" | "bo" | "br" | "bz" | "ch" | "cl" | "cn" | "co" | "cr" | "cu" | "cy" | "cz" | "de" | "dk" | "dm" | "dz" | "ec" | "ee" | "eg" | "es" | "fi" | "fr" | "gb" | "gd" | "gp" | "gr" | "gy" | "hk" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "in" | "is" | "it" | "jm" | "jo" | "jp" | "kr" | "kw" | "ky" | "lb" | "lc" | "lt" | "lu" | "lv" | "ma" | "me" | "mq" | "ms" | "mt" | "my" | "nc" | "ng" | "nl" | "no" | "nz" | "pa" | "pe" | "pf" | "ph" | "pk" | "pl" | "pt" | "py" | "re" | "ro" | "rs" | "ru" | "sa" | "se" | "sg" | "si" | "sk" | "sr" | "tc" | "th" | "tn" | "tr" | "tt" | "tw" | "ua" | "uy" | "vc" | "ve" | "vg" | "vn" | "za"
    //sms.DocumentWayTypeEnum
    export type DocumentWayTypeEnum = "incoming" | "outgoing"
    //sms.Exception
    // fullName: sms.Exception.Exception
    export interface Exception {
        countrySuffixe?: string;
        messages?: string[];
        operators?: string;
        restrictionCode?: OVH.sms.RestrictionCodeEnum;
        substitution?: string;
    }
    //sms.Hlr
    // fullName: sms.Hlr.Hlr
    export interface Hlr {
        country?: string;
        countryCode?: string;
        network?: string;
        operator?: string;
        region?: string;
    }
    //sms.HlrLookupNumber
    // fullName: sms.HlrLookupNumber.HlrLookupNumber
    export interface HlrLookupNumber {
        datetime?: string;
        id?: number;
        msisdn?: string;
        operatorCode?: string;
        ported?: boolean;
        reachable?: boolean;
        roaming?: boolean;
        status?: OVH.sms.HlrStatuses;
        valid?: boolean;
    }
    //sms.HlrStatuses
    export type HlrStatuses = "doing" | "done" | "error" | "todo"
    //sms.Incoming
    // fullName: sms.Incoming.Incoming
    export interface Incoming {
        creationDatetime?: string;
        credits?: number;
        id?: number;
        message?: string;
        sender?: string;
        tag?: string;
    }
    //sms.Job
    // fullName: sms.Job.Job
    export interface Job {
        creationDatetime?: string;
        credits?: number;
        deliveryReceipt?: number;
        differedDelivery?: number;
        id?: number;
        message?: string;
        messageLength?: number;
        numberOfSms?: number;
        ptt?: number;
        receiver?: string;
        sender?: string;
    }
    //sms.Outgoing
    // fullName: sms.Outgoing.Outgoing
    export interface Outgoing {
        creationDatetime?: string;
        credits?: number;
        deliveryReceipt?: number;
        differedDelivery?: number;
        id?: number;
        message?: string;
        messageLength?: number;
        numberOfSms?: number;
        ptt?: number;
        receiver?: string;
        sender?: string;
        tag?: string;
        tariffCode?: string;
    }
    //sms.PackOffer
    // fullName: sms.PackOffer.PackOffer
    export interface PackOffer {
        countryDestination?: string;
        giftPrice?: number;
        giftQuantity?: number;
        language?: string;
        price?: number;
        quantity?: number;
        smsQuantity?: number;
        totalPrice?: number;
    }
    //sms.PackQuantityAutomaticRecreditEnum
    export type PackQuantityAutomaticRecreditEnum = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000
    //sms.PackQuantityEnum
    export type PackQuantityEnum = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000
    //sms.Phonebook
    // fullName: sms.Phonebook.Phonebook
    export interface Phonebook {
        bookKey?: string;
        name?: string;
        phoneKey?: string;
    }
    //sms.PhonebookContact
    // fullName: sms.PhonebookContact.PhonebookContact
    export interface PhonebookContact {
        group?: string;
        homeMobile?: string;
        homePhone?: string;
        id?: number;
        name?: string;
        surname?: string;
        workMobile?: string;
        workPhone?: string;
    }
    //sms.PriorityEnum
    export type PriorityEnum = "high" | "low" | "medium" | "veryLow"
    //sms.PttDetails
    // fullName: sms.PttDetails.PttDetails
    export interface PttDetails {
        comment?: string;
        description?: string;
        duration?: OVH.sms.PttDurationTypeEnum;
    }
    //sms.PttDurationTypeEnum
    export type PttDurationTypeEnum = "indeterminated" | "permanent" | "temporary"
    //sms.Quota
    // fullName: sms.Quota.Quota
    export interface Quota {
        quotaLeft?: number;
        quotaStatus?: OVH.sms.QuotaStatusUserEnum;
    }
    //sms.QuotaStatusUserEnum
    export type QuotaStatusUserEnum = "active" | "inactive"
    //sms.Receiver
    // fullName: sms.Receiver.Receiver
    export interface Receiver {
        autoUpdate?: boolean;
        canAutoUpdate?: boolean;
        datetime?: string;
        description?: string;
        records?: number;
        slotId?: number;
    }
    //sms.ReceiversAsynchronousCleanReport
    // fullName: sms.ReceiversAsynchronousCleanReport.ReceiversAsynchronousCleanReport
    export interface ReceiversAsynchronousCleanReport {
        taskId?: number;
        totalCreditsRemoved?: number;
    }
    //sms.RefererSenderEnum
    export type RefererSenderEnum = "custom" | "domain" | "line" | "nic" | "owner" | "virtual"
    //sms.Response
    // fullName: sms.Response.Response
    export interface Response {
        cgiUrl?: string;
        responseType?: OVH.sms.ResponseTypeEnum;
        text?: string;
        trackingDefaultSmsSender?: string;
        trackingOptions?: OVH.sms.ResponseTrackingOptions[];
    }
    //sms.ResponseTrackingMediaEnum
    export type ResponseTrackingMediaEnum = "email" | "sms" | "voice"
    //sms.ResponseTrackingOptions
    // fullName: sms.ResponseTrackingOptions.ResponseTrackingOptions
    export interface ResponseTrackingOptions {
        media?: OVH.sms.ResponseTrackingMediaEnum;
        sender?: string;
        target?: string;
    }
    //sms.ResponseTypeEnum
    export type ResponseTypeEnum = "cgi" | "none" | "text"
    //sms.RestrictionCodeEnum
    export type RestrictionCodeEnum = "ALPHA" | "BAD_DLR" | "BLOCKED" | "CODING" | "DLR" | "FLASHONLY" | "MSISDN"
    //sms.Sender
    // fullName: sms.Sender.Sender
    export interface Sender {
        comment?: string;
        description?: string;
        referer?: OVH.sms.RefererSenderEnum;
        sender?: string;
        status?: OVH.sms.StatusSenderEnum;
        type?: OVH.sms.TypeSenderEnum;
        validationMedia?: string;
    }
    //sms.SenderAvailable
    // fullName: sms.SenderAvailable.SenderAvailable
    export interface SenderAvailable {
        referer?: OVH.sms.SenderRefererEnum;
        sender?: string;
    }
    //sms.SenderRefererEnum
    export type SenderRefererEnum = "domain" | "nichandle"
    //sms.SmsSendingReport
    // fullName: sms.SmsSendingReport.SmsSendingReport
    export interface SmsSendingReport {
        ids?: number[];
        invalidReceivers?: string[];
        totalCreditsRemoved?: number;
        validReceivers?: string[];
    }
    //sms.StatusAccountEnum
    export type StatusAccountEnum = "disable" | "enable"
    //sms.StatusSenderEnum
    export type StatusSenderEnum = "disable" | "enable" | "refused" | "waitingValidation"
    //sms.SupportEnum
    export type SupportEnum = "both" | "mail" | "sms"
    //sms.Task
    // fullName: sms.Task.Task
    export interface Task {
        function?: OVH.sms.TodoGeneralPublicFunctionsEnum;
        status?: OVH.telephony.TaskStatusEnum;
        step?: OVH.sms.TodoGeneralPublicStepsEnum;
        taskId?: number;
    }
    //sms.TemplateControl
    // fullName: sms.TemplateControl.TemplateControl
    export interface TemplateControl {
        activity?: OVH.sms.TypeTemplateEnum;
        comment?: string;
        datetime?: string;
        description?: string;
        message?: string;
        name?: string;
        status?: OVH.sms.StatusSenderEnum;
    }
    //sms.Templates
    // fullName: sms.Templates.Templates
    export interface Templates {
        customizedEmailMode?: boolean;
        customizedSmsMode?: boolean;
        emailBody?: string;
        emailFrom?: string;
        emailSubject?: string;
        smsBody?: string;
    }
    //sms.TodoGeneralPublicFunctionsEnum
    export type TodoGeneralPublicFunctionsEnum = "cleanSmsReceivers"
    //sms.TodoGeneralPublicStepsEnum
    export type TodoGeneralPublicStepsEnum = "checkOrder" | "createHlrs" | "finishing" | "sendMailReport" | "starting" | "waitForHlrs"
    //sms.TypeSenderEnum
    export type TypeSenderEnum = "alpha" | "numeric" | "virtual"
    //sms.TypeTemplateEnum
    export type TypeTemplateEnum = "alerting" | "authentification" | "transactional"
    //sms.User
    // fullName: sms.User.User
    export interface User {
        alertThresholdInformations?: OVH.sms.AlertThreshold;
        callBack?: string;
        ipRestrictions?: string[];
        login?: string;
        password?: string;
        quotaInformations?: OVH.sms.Quota;
        stopCallBack?: string;
    }
    //sms.VirtualNumber
    // fullName: sms.VirtualNumber.VirtualNumber
    export interface VirtualNumber {
        countryCode?: OVH.sms.VirtualNumberIsoCountryCodeEnum;
        number?: string;
    }
    //sms.VirtualNumberGenericService
    // fullName: sms.VirtualNumberGenericService.VirtualNumberGenericService
    export interface VirtualNumberGenericService {
        countryCode?: OVH.sms.VirtualNumberIsoCountryCodeEnum;
        number?: string;
    }
    //sms.VirtualNumberIsoCountryCodeEnum
    export type VirtualNumberIsoCountryCodeEnum = "be" | "ch" | "de" | "es" | "fr" | "uk"
    //sms.VirtualNumberJob
    // fullName: sms.VirtualNumberJob.VirtualNumberJob
    export interface VirtualNumberJob {
        creationDatetime?: string;
        credits?: number;
        deliveryReceipt?: number;
        differedDelivery?: number;
        id?: number;
        message?: string;
        messageLength?: number;
        numberOfSms?: number;
        ptt?: number;
        receiver?: string;
    }
}
export namespace telephony {
    //telephony.ContactsExportFormatsEnum
    export type ContactsExportFormatsEnum = "csv"
    //telephony.PcsFile
    // fullName: telephony.PcsFile.PcsFile
    export interface PcsFile {
        filename?: string;
        status?: OVH.telephony.PcsFileStatusEnum;
        url?: string;
        urlExpirationDatetime?: string;
    }
    //telephony.PcsFileStatusEnum
    export type PcsFileStatusEnum = "doing" | "done" | "error" | "todo"
    //telephony.Task
    // fullName: telephony.Task.Task
    export interface Task {
        action?: string;
        message?: string;
        objectCreated?: string;
        serviceType?: string;
        status?: OVH.telephony.TaskStatusEnum;
        taskId?: number;
    }
    //telephony.TaskStatusEnum
    export type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo"
}
// Apis harmony
// path /sms
export interface Sms {
    // GET /sms
    GET(): Promise<string[]>;
    virtualNumbers:  {
        // GET /sms/virtualNumbers
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /sms/virtualNumbers/{number}
            GET(): Promise<sms.VirtualNumberGenericService>;
            serviceInfos:  {
                // GET /sms/virtualNumbers/{number}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /sms/virtualNumbers/{number}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
    [keys: string]: {
        // GET /sms/{serviceName}
        GET(): Promise<sms.Account>;
        // PUT /sms/{serviceName}
        PUT(body?: {body: sms.Account}): Promise<void>;
        jobs:  {
            // GET /sms/{serviceName}/jobs
            GET(): Promise<number[]>;
            // POST /sms/{serviceName}/jobs
            POST(body?: {receivers?: string[], priority?: sms.PriorityEnum, receiversSlotId?: string, differedPeriod?: number, noStopClause?: boolean, coding?: sms.CodingEnum, charset?: sms.CharsetEnum, receiversDocumentUrl?: string, validityPeriod?: number, tag?: string, class?: sms.ClassEnum, sender?: string, message: string, senderForResponse?: boolean}): Promise<sms.SmsSendingReport>;
            [keys: string]: {
                // GET /sms/{serviceName}/jobs/{id}
                GET(): Promise<sms.Job>;
                // DELETE /sms/{serviceName}/jobs/{id}
                DELETE(): Promise<void>;
            } | any
        }
        receivers:  {
            // GET /sms/{serviceName}/receivers
            GET(): Promise<number[]>;
            // POST /sms/{serviceName}/receivers
            POST(body?: {slotId: number, documentId?: string, csvUrl?: string, autoUpdate: boolean, description: string}): Promise<sms.Receiver>;
            [keys: string]: {
                // GET /sms/{serviceName}/receivers/{slotId}
                GET(): Promise<sms.Receiver>;
                // PUT /sms/{serviceName}/receivers/{slotId}
                PUT(body?: {body: sms.Receiver}): Promise<void>;
                // DELETE /sms/{serviceName}/receivers/{slotId}
                DELETE(): Promise<void>;
                clean:  {
                    // POST /sms/{serviceName}/receivers/{slotId}/clean
                    POST(body?: {freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
                }
                csv:  {
                    // GET /sms/{serviceName}/receivers/{slotId}/csv
                    GET(): Promise<string>;
                }
            } | any
        }
        users:  {
            // GET /sms/{serviceName}/users
            GET(): Promise<string[]>;
            // POST /sms/{serviceName}/users
            POST(body?: {login: string, password: string}): Promise<void>;
            [keys: string]: {
                // GET /sms/{serviceName}/users/{login}
                GET(): Promise<sms.User>;
                // PUT /sms/{serviceName}/users/{login}
                PUT(body?: {body: sms.User}): Promise<void>;
                // DELETE /sms/{serviceName}/users/{login}
                DELETE(): Promise<void>;
                document:  {
                    // GET /sms/{serviceName}/users/{login}/document
                    GET(param?: {creationDatetime_to?: string, wayType: sms.DocumentWayTypeEnum, tag?: string, creationDatetime_from?: string}): Promise<string>;
                }
                incoming:  {
                    // GET /sms/{serviceName}/users/{login}/incoming
                    GET(param?: {tag?: string, sender?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /sms/{serviceName}/users/{login}/incoming/{id}
                        GET(): Promise<sms.Incoming>;
                        // DELETE /sms/{serviceName}/users/{login}/incoming/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                outgoing:  {
                    // GET /sms/{serviceName}/users/{login}/outgoing
                    GET(param?: {sender?: string, differedDelivery?: number, ptt?: number, deliveryReceipt?: number, tag?: string, receiver?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /sms/{serviceName}/users/{login}/outgoing/{id}
                        GET(): Promise<sms.Outgoing>;
                        // DELETE /sms/{serviceName}/users/{login}/outgoing/{id}
                        DELETE(): Promise<void>;
                        hlr:  {
                            // GET /sms/{serviceName}/users/{login}/outgoing/{id}/hlr
                            GET(): Promise<sms.Hlr>;
                        }
                    } | any
                }
                jobs:  {
                    // GET /sms/{serviceName}/users/{login}/jobs
                    GET(): Promise<number[]>;
                    // POST /sms/{serviceName}/users/{login}/jobs
                    POST(body?: {receivers?: string[], priority?: sms.PriorityEnum, receiversSlotId?: string, differedPeriod?: number, noStopClause?: boolean, coding?: sms.CodingEnum, charset?: sms.CharsetEnum, receiversDocumentUrl?: string, validityPeriod?: number, tag?: string, class?: sms.ClassEnum, sender?: string, message: string, senderForResponse?: boolean}): Promise<sms.SmsSendingReport>;
                    [keys: string]: {
                        // GET /sms/{serviceName}/users/{login}/jobs/{id}
                        GET(): Promise<sms.Job>;
                        // DELETE /sms/{serviceName}/users/{login}/jobs/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                receivers:  {
                    // GET /sms/{serviceName}/users/{login}/receivers
                    GET(): Promise<number[]>;
                    // POST /sms/{serviceName}/users/{login}/receivers
                    POST(body?: {slotId: number, documentId?: string, csvUrl?: string, autoUpdate: boolean, description: string}): Promise<sms.Receiver>;
                    [keys: string]: {
                        // GET /sms/{serviceName}/users/{login}/receivers/{slotId}
                        GET(): Promise<sms.Receiver>;
                        // PUT /sms/{serviceName}/users/{login}/receivers/{slotId}
                        PUT(body?: {body: sms.Receiver}): Promise<void>;
                        // DELETE /sms/{serviceName}/users/{login}/receivers/{slotId}
                        DELETE(): Promise<void>;
                        clean:  {
                            // POST /sms/{serviceName}/users/{login}/receivers/{slotId}/clean
                            POST(body?: {freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
                        }
                        csv:  {
                            // GET /sms/{serviceName}/users/{login}/receivers/{slotId}/csv
                            GET(): Promise<string>;
                        }
                    } | any
                }
            } | any
        }
        incoming:  {
            // GET /sms/{serviceName}/incoming
            GET(param?: {creationDatetime_to?: string, tag?: string, creationDatetime_from?: string, sender?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /sms/{serviceName}/incoming/{id}
                GET(): Promise<sms.Incoming>;
                // DELETE /sms/{serviceName}/incoming/{id}
                DELETE(): Promise<void>;
            } | any
        }
        seeOffers:  {
            // GET /sms/{serviceName}/seeOffers
            GET(param?: {countryDestination: sms.CountryEnum, countryCurrencyPrice: reference.CountryEnum, quantity: sms.PackQuantityEnum}): Promise<sms.PackOffer[]>;
        }
        virtualNumbers:  {
            // GET /sms/{serviceName}/virtualNumbers
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /sms/{serviceName}/virtualNumbers/{number}
                GET(): Promise<sms.VirtualNumber>;
                incoming:  {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/incoming
                    GET(param?: {creationDatetime_from?: string, tag?: string, creationDatetime_to?: string, sender?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}
                        GET(): Promise<sms.Incoming>;
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                chatAccess:  {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    GET(): Promise<sms.ChatAccess>;
                    // POST /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    POST(): Promise<sms.ChatAccess>;
                    // DELETE /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    DELETE(): Promise<void>;
                }
                jobs:  {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/jobs
                    GET(): Promise<number[]>;
                    // POST /sms/{serviceName}/virtualNumbers/{number}/jobs
                    POST(body?: {message: string, class?: sms.ClassEnum, tag?: string, validityPeriod?: number, charset?: sms.CharsetEnum, receiversDocumentUrl?: string, coding?: sms.CodingEnum, differedPeriod?: number, receivers?: string[], priority?: sms.PriorityEnum, receiversSlotId?: string}): Promise<sms.SmsSendingReport>;
                    [keys: string]: {
                        // GET /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
                        GET(): Promise<sms.VirtualNumberJob>;
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                outgoing:  {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing
                    GET(param?: {creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, differedDelivery?: number, ptt?: number, tag?: string, receiver?: string, deliveryReceipt?: number}): Promise<number[]>;
                    [keys: string]: {
                        // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}
                        GET(): Promise<sms.Outgoing>;
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}
                        DELETE(): Promise<void>;
                        hlr:  {
                            // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr
                            GET(): Promise<sms.Hlr>;
                        }
                    } | any
                }
            } | any
        }
        serviceInfos:  {
            // GET /sms/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /sms/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        task:  {
            // GET /sms/{serviceName}/task
            GET(param?: {status?: telephony.TaskStatusEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /sms/{serviceName}/task/{taskId}
                GET(): Promise<sms.Task>;
            } | any
        }
        exceptions:  {
            // GET /sms/{serviceName}/exceptions
            GET(param?: {receiver: string}): Promise<sms.Exception[]>;
        }
        senders:  {
            // GET /sms/{serviceName}/senders
            GET(): Promise<string[]>;
            // POST /sms/{serviceName}/senders
            POST(body?: {sender: string, description?: string, reason?: string}): Promise<string>;
            [keys: string]: {
                // GET /sms/{serviceName}/senders/{sender}
                GET(): Promise<sms.Sender>;
                // PUT /sms/{serviceName}/senders/{sender}
                PUT(body?: {body: sms.Sender}): Promise<void>;
                // DELETE /sms/{serviceName}/senders/{sender}
                DELETE(): Promise<void>;
                validate:  {
                    // POST /sms/{serviceName}/senders/{sender}/validate
                    POST(body?: {code: string}): Promise<void>;
                }
            } | any
        }
        sendersAvailableForValidation:  {
            // GET /sms/{serviceName}/sendersAvailableForValidation
            GET(param?: {referer?: sms.SenderRefererEnum}): Promise<sms.SenderAvailable[]>;
        }
        phonebooks:  {
            // GET /sms/{serviceName}/phonebooks
            GET(): Promise<string[]>;
            // POST /sms/{serviceName}/phonebooks
            POST(body?: {name: string}): Promise<string>;
            [keys: string]: {
                // GET /sms/{serviceName}/phonebooks/{bookKey}
                GET(): Promise<sms.Phonebook>;
                // PUT /sms/{serviceName}/phonebooks/{bookKey}
                PUT(body?: {body: sms.Phonebook}): Promise<void>;
                // DELETE /sms/{serviceName}/phonebooks/{bookKey}
                DELETE(): Promise<void>;
                phonebookContact:  {
                    // GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
                    GET(): Promise<number[]>;
                    // POST /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
                    POST(body?: {group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
                    [keys: string]: {
                        // GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        GET(): Promise<sms.PhonebookContact>;
                        // PUT /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        PUT(body?: {body: sms.PhonebookContact}): Promise<void>;
                        // DELETE /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                import:  {
                    // POST /sms/{serviceName}/phonebooks/{bookKey}/import
                    POST(body?: {documentId: string}): Promise<telephony.Task>;
                }
                export:  {
                    // GET /sms/{serviceName}/phonebooks/{bookKey}/export
                    GET(param?: {format: telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
                }
            } | any
        }
        templatesControl:  {
            // GET /sms/{serviceName}/templatesControl
            GET(): Promise<string[]>;
            // POST /sms/{serviceName}/templatesControl
            POST(body?: {activity: sms.TypeTemplateEnum, message: string, description?: string, reason?: string, name: string}): Promise<void>;
            [keys: string]: {
                // GET /sms/{serviceName}/templatesControl/{name}
                GET(): Promise<sms.TemplateControl>;
                // PUT /sms/{serviceName}/templatesControl/{name}
                PUT(body?: {body: sms.TemplateControl}): Promise<void>;
                // DELETE /sms/{serviceName}/templatesControl/{name}
                DELETE(): Promise<void>;
                relaunchValidation:  {
                    // POST /sms/{serviceName}/templatesControl/{name}/relaunchValidation
                    POST(body?: {message: string, description: string}): Promise<void>;
                }
            } | any
        }
        outgoing:  {
            // GET /sms/{serviceName}/outgoing
            GET(param?: {creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, differedDelivery?: number, ptt?: number, receiver?: string, tag?: string, deliveryReceipt?: number}): Promise<number[]>;
            [keys: string]: {
                // GET /sms/{serviceName}/outgoing/{id}
                GET(): Promise<sms.Outgoing>;
                // DELETE /sms/{serviceName}/outgoing/{id}
                DELETE(): Promise<void>;
                hlr:  {
                    // GET /sms/{serviceName}/outgoing/{id}/hlr
                    GET(): Promise<sms.Hlr>;
                }
            } | any
        }
        document:  {
            // GET /sms/{serviceName}/document
            GET(param?: {creationDatetime_to?: string, wayType: sms.DocumentWayTypeEnum, tag?: string, creationDatetime_from?: string}): Promise<string>;
        }
        blacklists:  {
            // GET /sms/{serviceName}/blacklists
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /sms/{serviceName}/blacklists/{number}
                GET(): Promise<sms.Blacklist>;
                // DELETE /sms/{serviceName}/blacklists/{number}
                DELETE(): Promise<void>;
            } | any
        }
        transferCredits:  {
            // POST /sms/{serviceName}/transferCredits
            POST(body?: {smsAccountTarget: string, credits: number}): Promise<void>;
        }
        hlr:  {
            // GET /sms/{serviceName}/hlr
            GET(): Promise<number[]>;
            // POST /sms/{serviceName}/hlr
            POST(body?: {receiversDocumentUrl?: string, receivers?: string[]}): Promise<sms.SmsSendingReport>;
            [keys: string]: {
                // GET /sms/{serviceName}/hlr/{id}
                GET(): Promise<sms.HlrLookupNumber>;
                operator:  {
                    // GET /sms/{serviceName}/hlr/{id}/operator
                    GET(): Promise<sms.Hlr>;
                }
            } | any
        }
    } | any
    ptts:  {
        // GET /sms/ptts
        GET(param?: {ptt: number}): Promise<sms.PttDetails>;
    }
}
// Api
type PathsSmsGET = '/sms/virtualNumbers/{number}/serviceInfos' |
  '/sms/virtualNumbers/{number}' |
  '/sms/virtualNumbers' |
  '/sms/{serviceName}/jobs/{id}' |
  '/sms/{serviceName}/jobs' |
  '/sms/{serviceName}/receivers' |
  '/sms/{serviceName}/receivers/{slotId}/csv' |
  '/sms/{serviceName}/receivers/{slotId}' |
  '/sms/{serviceName}/users' |
  '/sms/{serviceName}/users/{login}/document' |
  '/sms/{serviceName}/users/{login}/incoming' |
  '/sms/{serviceName}/users/{login}/incoming/{id}' |
  '/sms/{serviceName}/users/{login}/outgoing/{id}/hlr' |
  '/sms/{serviceName}/users/{login}/outgoing/{id}' |
  '/sms/{serviceName}/users/{login}/outgoing' |
  '/sms/{serviceName}/users/{login}' |
  '/sms/{serviceName}/users/{login}/jobs' |
  '/sms/{serviceName}/users/{login}/jobs/{id}' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}/csv' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}' |
  '/sms/{serviceName}/users/{login}/receivers' |
  '/sms/{serviceName}/incoming/{id}' |
  '/sms/{serviceName}/incoming' |
  '/sms/{serviceName}/seeOffers' |
  '/sms/{serviceName}/virtualNumbers' |
  '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/incoming' |
  '/sms/{serviceName}/virtualNumbers/{number}/chatAccess' |
  '/sms/{serviceName}/virtualNumbers/{number}' |
  '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/jobs' |
  '/sms/{serviceName}/virtualNumbers/{number}/outgoing' |
  '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr' |
  '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' |
  '/sms/{serviceName}/serviceInfos' |
  '/sms/{serviceName}/task' |
  '/sms/{serviceName}/task/{taskId}' |
  '/sms/{serviceName}/exceptions' |
  '/sms/{serviceName}/senders/{sender}' |
  '/sms/{serviceName}/senders' |
  '/sms/{serviceName}/sendersAvailableForValidation' |
  '/sms/{serviceName}/phonebooks' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' |
  '/sms/{serviceName}/phonebooks/{bookKey}' |
  '/sms/{serviceName}/phonebooks/{bookKey}/export' |
  '/sms/{serviceName}/templatesControl' |
  '/sms/{serviceName}/templatesControl/{name}' |
  '/sms/{serviceName}/outgoing/{id}/hlr' |
  '/sms/{serviceName}/outgoing/{id}' |
  '/sms/{serviceName}/outgoing' |
  '/sms/{serviceName}/document' |
  '/sms/{serviceName}/blacklists' |
  '/sms/{serviceName}/blacklists/{number}' |
  '/sms/{serviceName}/hlr/{id}/operator' |
  '/sms/{serviceName}/hlr/{id}' |
  '/sms/{serviceName}/hlr' |
  '/sms/{serviceName}' |
  '/sms' |
  '/sms/ptts';

type PathsSmsPUT = '/sms/virtualNumbers/{number}/serviceInfos' |
  '/sms/{serviceName}/receivers/{slotId}' |
  '/sms/{serviceName}/users/{login}' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}' |
  '/sms/{serviceName}/serviceInfos' |
  '/sms/{serviceName}/senders/{sender}' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' |
  '/sms/{serviceName}/phonebooks/{bookKey}' |
  '/sms/{serviceName}/templatesControl/{name}' |
  '/sms/{serviceName}';

type PathsSmsPOST = '/sms/{serviceName}/jobs' |
  '/sms/{serviceName}/receivers' |
  '/sms/{serviceName}/receivers/{slotId}/clean' |
  '/sms/{serviceName}/users' |
  '/sms/{serviceName}/users/{login}/jobs' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}/clean' |
  '/sms/{serviceName}/users/{login}/receivers' |
  '/sms/{serviceName}/virtualNumbers/{number}/chatAccess' |
  '/sms/{serviceName}/virtualNumbers/{number}/jobs' |
  '/sms/{serviceName}/senders/{sender}/validate' |
  '/sms/{serviceName}/senders' |
  '/sms/{serviceName}/phonebooks' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' |
  '/sms/{serviceName}/phonebooks/{bookKey}/import' |
  '/sms/{serviceName}/templatesControl' |
  '/sms/{serviceName}/templatesControl/{name}/relaunchValidation' |
  '/sms/{serviceName}/transferCredits' |
  '/sms/{serviceName}/hlr';

type PathsSmsDELETE = '/sms/{serviceName}/jobs/{id}' |
  '/sms/{serviceName}/receivers/{slotId}' |
  '/sms/{serviceName}/users/{login}/incoming/{id}' |
  '/sms/{serviceName}/users/{login}/outgoing/{id}' |
  '/sms/{serviceName}/users/{login}' |
  '/sms/{serviceName}/users/{login}/jobs/{id}' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}' |
  '/sms/{serviceName}/incoming/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/chatAccess' |
  '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' |
  '/sms/{serviceName}/senders/{sender}' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' |
  '/sms/{serviceName}/phonebooks/{bookKey}' |
  '/sms/{serviceName}/templatesControl/{name}' |
  '/sms/{serviceName}/outgoing/{id}' |
  '/sms/{serviceName}/blacklists/{number}';

export class ApiSms extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/sms'): Promise<string[]>;
  /**
   * SMS details
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}', params: {serviceName: string}): Promise<sms.Account>;
  /**
   * List the sms.Blacklist objects
   * Numbers blacklisted associated to the sms account
   */
  public get(path: '/sms/{serviceName}/blacklists', params: {serviceName: string}): Promise<string[]>;
  /**
   * SMS blacklist
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/blacklists/{number}', params: {serviceName: string, number: string}): Promise<sms.Blacklist>;
  /**
   * document operations
   * Get the /me/document id generated
   */
  public get(path: '/sms/{serviceName}/document', params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: OVH.sms.DocumentWayTypeEnum}): Promise<string>;
  /**
   * exceptions operations
   * Describe filter exceptions in sms sending from a specific receiver.
   */
  public get(path: '/sms/{serviceName}/exceptions', params: {serviceName: string, receiver: string}): Promise<sms.Exception[]>;
  /**
   * List the sms.HlrLookupNumber objects
   * Home Location Register informations. Give informations about a given cellular phone.
   */
  public get(path: '/sms/{serviceName}/hlr', params: {serviceName: string}): Promise<number[]>;
  /**
   * Home Location Register informations. Give informations about a given cellular phone.
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/hlr/{id}', params: {serviceName: string, id: string}): Promise<sms.HlrLookupNumber>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/hlr/{id}/operator', params: {serviceName: string, id: string}): Promise<sms.Hlr>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms account
   */
  public get(path: '/sms/{serviceName}/incoming', params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/incoming/{id}', params: {serviceName: string, id: string}): Promise<sms.Incoming>;
  /**
   * List the sms.Job objects
   * Sms in pending associated to the sms account
   */
  public get(path: '/sms/{serviceName}/jobs', params: {serviceName: string}): Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/jobs/{id}', params: {serviceName: string, id: string}): Promise<sms.Job>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms account
   */
  public get(path: '/sms/{serviceName}/outgoing', params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/outgoing/{id}', params: {serviceName: string, id: string}): Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/outgoing/{id}/hlr', params: {serviceName: string, id: string}): Promise<sms.Hlr>;
  /**
   * List the sms.Phonebook objects
   * Return phonebooks associated to this account
   */
  public get(path: '/sms/{serviceName}/phonebooks', params: {serviceName: string}): Promise<string[]>;
  /**
   * Phone book
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}', params: {serviceName: string, bookKey: string}): Promise<sms.Phonebook>;
  /**
   * export operations
   * Export the phonebook's contacts
   */
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/export', params: {serviceName: string, bookKey: string, format: OVH.telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
  /**
   * List the sms.PhonebookContact objects
   * Phonebook contacts
   */
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact', params: {serviceName: string, bookKey: string}): Promise<number[]>;
  /**
   * Phone book contact
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', params: {serviceName: string, bookKey: string, id: string}): Promise<sms.PhonebookContact>;
  /**
   * List the sms.Receiver objects
   * Receivers preloaded from text or csv document file
   */
  public get(path: '/sms/{serviceName}/receivers', params: {serviceName: string}): Promise<number[]>;
  /**
   * Sms receivers preloaded
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/receivers/{slotId}', params: {serviceName: string, slotId: string}): Promise<sms.Receiver>;
  /**
   * csv operations
   * Get the document data container
   */
  public get(path: '/sms/{serviceName}/receivers/{slotId}/csv', params: {serviceName: string, slotId: string}): Promise<string>;
  /**
   * seeOffers operations
   * Describe SMS offers available.
   */
  public get(path: '/sms/{serviceName}/seeOffers', params: {serviceName: string, countryCurrencyPrice: OVH.reference.CountryEnum, countryDestination: OVH.sms.CountryEnum, quantity: OVH.sms.PackQuantityEnum}): Promise<sms.PackOffer[]>;
  /**
   * List the sms.Sender objects
   * Senders allowed associated to the sms account
   */
  public get(path: '/sms/{serviceName}/senders', params: {serviceName: string}): Promise<string[]>;
  /**
   * SMS senders
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/senders/{sender}', params: {serviceName: string, sender: string}): Promise<sms.Sender>;
  /**
   * sendersAvailableForValidation operations
   * The senders that are attached to your personal informations or OVH services and that can be automatically validated
   */
  public get(path: '/sms/{serviceName}/sendersAvailableForValidation', params: {serviceName: string, referer?: OVH.sms.SenderRefererEnum}): Promise<sms.SenderAvailable[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the sms.Task objects
   * Operations on a SMS service
   */
  public get(path: '/sms/{serviceName}/task', params: {serviceName: string, status?: OVH.telephony.TaskStatusEnum}): Promise<number[]>;
  /**
   * Operation on a SMS service
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<sms.Task>;
  /**
   * List the sms.TemplateControl objects
   * Template pattern filled up for moderation (Needed to send in US country)
   */
  public get(path: '/sms/{serviceName}/templatesControl', params: {serviceName: string}): Promise<string[]>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/templatesControl/{name}', params: {serviceName: string, name: string}): Promise<sms.TemplateControl>;
  /**
   * List the sms.User objects
   * Users associated to the sms account
   */
  public get(path: '/sms/{serviceName}/users', params: {serviceName: string}): Promise<string[]>;
  /**
   * SMS users
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}', params: {serviceName: string, login: string}): Promise<sms.User>;
  /**
   * document operations
   * Get the /me/document id generated
   */
  public get(path: '/sms/{serviceName}/users/{login}/document', params: {serviceName: string, login: string, creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: OVH.sms.DocumentWayTypeEnum}): Promise<string>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms user
   */
  public get(path: '/sms/{serviceName}/users/{login}/incoming', params: {serviceName: string, login: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/incoming/{id}', params: {serviceName: string, login: string, id: string}): Promise<sms.Incoming>;
  /**
   * List the sms.Job objects
   * Sms in pending associated to the sms user
   */
  public get(path: '/sms/{serviceName}/users/{login}/jobs', params: {serviceName: string, login: string}): Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/jobs/{id}', params: {serviceName: string, login: string, id: string}): Promise<sms.Job>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms user
   */
  public get(path: '/sms/{serviceName}/users/{login}/outgoing', params: {serviceName: string, login: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}', params: {serviceName: string, login: string, id: string}): Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}/hlr', params: {serviceName: string, login: string, id: string}): Promise<sms.Hlr>;
  /**
   * List the sms.Receiver objects
   * Receivers preloaded from text or csv document file
   */
  public get(path: '/sms/{serviceName}/users/{login}/receivers', params: {serviceName: string, login: string}): Promise<number[]>;
  /**
   * Sms receivers preloaded
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', params: {serviceName: string, login: string, slotId: string}): Promise<sms.Receiver>;
  /**
   * csv operations
   * Get the document data container
   */
  public get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/csv', params: {serviceName: string, login: string, slotId: string}): Promise<string>;
  /**
   * List the sms.VirtualNumber objects
   * Virtual numbers associated to the sms account
   */
  public get(path: '/sms/{serviceName}/virtualNumbers', params: {serviceName: string}): Promise<string[]>;
  /**
   * Virtual numbers
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}', params: {serviceName: string, number: string}): Promise<sms.VirtualNumber>;
  /**
   * The web access for your virtual number chat application
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', params: {serviceName: string, number: string}): Promise<sms.ChatAccess>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms account
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming', params: {serviceName: string, number: string, creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}', params: {serviceName: string, number: string, id: string}): Promise<sms.Incoming>;
  /**
   * List the sms.VirtualNumberJob objects
   * Sms in pending associated to the sms account
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs', params: {serviceName: string, number: string}): Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}', params: {serviceName: string, number: string, id: string}): Promise<sms.VirtualNumberJob>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms account
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing', params: {serviceName: string, number: string, creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}', params: {serviceName: string, number: string, id: string}): Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr', params: {serviceName: string, number: string, id: string}): Promise<sms.Hlr>;
  /**
   * Get informations about the given ptt code
   * Get informations about the given ptt code
   */
  public get(path: '/sms/ptts', params: {ptt: number}): Promise<sms.PttDetails>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/sms/virtualNumbers'): Promise<string[]>;
  /**
   * Virtual numbers
   * Get this object properties
   */
  public get(path: '/sms/virtualNumbers/{number}', params: {number: string}): Promise<sms.VirtualNumberGenericService>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/sms/virtualNumbers/{number}/serviceInfos', params: {number: string}): Promise<services.Service>;
  public get(path: PathsSmsGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * SMS details
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}', params: {serviceName: string, automaticRecreditAmount?: OVH.sms.PackQuantityAutomaticRecreditEnum, callBack?: string, creditThresholdForAutomaticRecredit?: number, creditsHoldByQuota?: number, creditsLeft?: number, description?: string, name?: string, smsResponse?: OVH.sms.Response, status?: OVH.sms.StatusAccountEnum, stopCallBack?: string, templates?: OVH.sms.Templates, userQuantityWithQuota?: number}): Promise<void>;
  /**
   * Phone book
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/phonebooks/{bookKey}', params: {serviceName: string, bookKey: string, name?: string, phoneKey?: string}): Promise<void>;
  /**
   * Phone book contact
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', params: {serviceName: string, bookKey: string, id: string, group?: string, homeMobile?: string, homePhone?: string, name?: string, surname?: string, workMobile?: string, workPhone?: string}): Promise<void>;
  /**
   * Sms receivers preloaded
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/receivers/{slotId}', params: {serviceName: string, slotId: string, autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number}): Promise<void>;
  /**
   * SMS senders
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/senders/{sender}', params: {serviceName: string, sender: string, comment?: string, description?: string, referer?: OVH.sms.RefererSenderEnum, status?: OVH.sms.StatusSenderEnum, type?: OVH.sms.TypeSenderEnum, validationMedia?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/templatesControl/{name}', params: {serviceName: string, name: string, activity?: OVH.sms.TypeTemplateEnum, comment?: string, datetime?: string, description?: string, message?: string, status?: OVH.sms.StatusSenderEnum}): Promise<void>;
  /**
   * SMS users
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/users/{login}', params: {serviceName: string, login: string, alertThresholdInformations?: OVH.sms.AlertThreshold, callBack?: string, ipRestrictions?: string[], password?: string, quotaInformations?: OVH.sms.Quota, stopCallBack?: string}): Promise<void>;
  /**
   * Sms receivers preloaded
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', params: {serviceName: string, login: string, slotId: string, autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/sms/virtualNumbers/{number}/serviceInfos', params: {number: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsSmsPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the sms.HlrLookupNumber objects
   * Add one or several sending hlr lookup request
   */
  public post(path: '/sms/{serviceName}/hlr', params: {serviceName: string, receivers?: string[], receiversDocumentUrl?: string}): Promise<sms.SmsSendingReport>;
  /**
   * List the sms.Job objects
   * Add one or several sending jobs
   */
  public post(path: '/sms/{serviceName}/jobs', params: {serviceName: string, charset?: OVH.sms.CharsetEnum, class?: OVH.sms.ClassEnum, coding?: OVH.sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: OVH.sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
  /**
   * List the sms.Phonebook objects
   * Add a phonebook. Return the bookKey.
   */
  public post(path: '/sms/{serviceName}/phonebooks', params: {serviceName: string, name: string}): Promise<string>;
  /**
   * import operations
   * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
   */
  public post(path: '/sms/{serviceName}/phonebooks/{bookKey}/import', params: {serviceName: string, bookKey: string, documentId: string}): Promise<telephony.Task>;
  /**
   * List the sms.PhonebookContact objects
   * Create a phonebook contact. Return identifier of the phonebook contact.
   */
  public post(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact', params: {serviceName: string, bookKey: string, group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
  /**
   * List the sms.Receiver objects
   * Add a new document of csv receivers
   */
  public post(path: '/sms/{serviceName}/receivers', params: {serviceName: string, autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}): Promise<sms.Receiver>;
  /**
   * clean operations
   * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
   */
  public post(path: '/sms/{serviceName}/receivers/{slotId}/clean', params: {serviceName: string, slotId: string, freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
  /**
   * List the sms.Sender objects
   * Create the sms sender given
   */
  public post(path: '/sms/{serviceName}/senders', params: {serviceName: string, description?: string, reason?: string, sender: string}): Promise<string>;
  /**
   * validate operations
   * Validate a given sender with an activation code.
   */
  public post(path: '/sms/{serviceName}/senders/{sender}/validate', params: {serviceName: string, sender: string, code: string}): Promise<void>;
  /**
   * List the sms.TemplateControl objects
   * Create the sms template control given
   */
  public post(path: '/sms/{serviceName}/templatesControl', params: {serviceName: string, activity: OVH.sms.TypeTemplateEnum, description?: string, message: string, name: string, reason?: string}): Promise<void>;
  /**
   * relaunchValidation operations
   * Attempt a new validation after moderation refusal
   */
  public post(path: '/sms/{serviceName}/templatesControl/{name}/relaunchValidation', params: {serviceName: string, name: string, description: string, message: string}): Promise<void>;
  /**
   * transferCredits operations
   * Credit transfer between two sms accounts.
   */
  public post(path: '/sms/{serviceName}/transferCredits', params: {serviceName: string, credits: number, smsAccountTarget: string}): Promise<void>;
  /**
   * List the sms.User objects
   * Create a new user for an sms account
   */
  public post(path: '/sms/{serviceName}/users', params: {serviceName: string, login: string, password: string}): Promise<void>;
  /**
   * List the sms.Job objects
   * Add one or several sending jobs
   */
  public post(path: '/sms/{serviceName}/users/{login}/jobs', params: {serviceName: string, login: string, charset?: OVH.sms.CharsetEnum, class?: OVH.sms.ClassEnum, coding?: OVH.sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: OVH.sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
  /**
   * List the sms.Receiver objects
   * Add a new document of csv receivers
   */
  public post(path: '/sms/{serviceName}/users/{login}/receivers', params: {serviceName: string, login: string, autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}): Promise<sms.Receiver>;
  /**
   * clean operations
   * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
   */
  public post(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/clean', params: {serviceName: string, login: string, slotId: string, freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
  /**
   * The web access for your virtual number chat application
   * Create a new web access for this ressource
   */
  public post(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', params: {serviceName: string, number: string}): Promise<sms.ChatAccess>;
  /**
   * List the sms.VirtualNumberJob objects
   * Add one or several sending jobs
   */
  public post(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs', params: {serviceName: string, number: string, charset?: OVH.sms.CharsetEnum, class?: OVH.sms.ClassEnum, coding?: OVH.sms.CodingEnum, differedPeriod?: number, message: string, priority?: OVH.sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
  public post(path: PathsSmsPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * SMS blacklist
   * Delete the blacklisted sms number given
   */
  public delete(path: '/sms/{serviceName}/blacklists/{number}', params: {serviceName: string, number: string}): Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  public delete(path: '/sms/{serviceName}/incoming/{id}', params: {serviceName: string, id: string}): Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  public delete(path: '/sms/{serviceName}/jobs/{id}', params: {serviceName: string, id: string}): Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  public delete(path: '/sms/{serviceName}/outgoing/{id}', params: {serviceName: string, id: string}): Promise<void>;
  /**
   * Phone book
   * Delete a phonebook
   */
  public delete(path: '/sms/{serviceName}/phonebooks/{bookKey}', params: {serviceName: string, bookKey: string}): Promise<void>;
  /**
   * Phone book contact
   * Delete a phonebook contact
   */
  public delete(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', params: {serviceName: string, bookKey: string, id: string}): Promise<void>;
  /**
   * Sms receivers preloaded
   * Delete the document from the slot
   */
  public delete(path: '/sms/{serviceName}/receivers/{slotId}', params: {serviceName: string, slotId: string}): Promise<void>;
  /**
   * SMS senders
   * Delete the sms sender given
   */
  public delete(path: '/sms/{serviceName}/senders/{sender}', params: {serviceName: string, sender: string}): Promise<void>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Delete the sms template control
   */
  public delete(path: '/sms/{serviceName}/templatesControl/{name}', params: {serviceName: string, name: string}): Promise<void>;
  /**
   * SMS users
   * Delete the sms user given
   */
  public delete(path: '/sms/{serviceName}/users/{login}', params: {serviceName: string, login: string}): Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  public delete(path: '/sms/{serviceName}/users/{login}/incoming/{id}', params: {serviceName: string, login: string, id: string}): Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  public delete(path: '/sms/{serviceName}/users/{login}/jobs/{id}', params: {serviceName: string, login: string, id: string}): Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  public delete(path: '/sms/{serviceName}/users/{login}/outgoing/{id}', params: {serviceName: string, login: string, id: string}): Promise<void>;
  /**
   * Sms receivers preloaded
   * Delete the document from the slot
   */
  public delete(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', params: {serviceName: string, login: string, slotId: string}): Promise<void>;
  /**
   * The web access for your virtual number chat application
   * Delete the given web access
   */
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', params: {serviceName: string, number: string}): Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}', params: {serviceName: string, number: string, id: string}): Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}', params: {serviceName: string, number: string, id: string}): Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}', params: {serviceName: string, number: string, id: string}): Promise<void>;
  public delete(path: PathsSmsDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
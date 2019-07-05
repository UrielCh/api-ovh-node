import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace reference {
    //reference.CountryEnum
    export type CountryEnum = "all" | "ca" | "cz" | "de" | "en" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "ma" | "nl" | "pl" | "pp" | "pt" | "qc" | "ru" | "sk" | "sn" | "tn" | "we"
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
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
export namespace sms {
    //sms.Account
    // fullName: sms.Account.Account
    export interface Account {
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
    //sms.AlertThreshold
    // fullName: sms.AlertThreshold.AlertThreshold
    export interface AlertThreshold {
        alertEmail: string;
        alertNumber: string;
        alertThreshold: number;
        support: sms.SupportEnum;
    }
    //sms.Blacklist
    // fullName: sms.Blacklist.Blacklist
    export interface Blacklist {
        dateCreation: string;
        number: string;
    }
    //sms.CharsetEnum
    export type CharsetEnum = "UTF-8"
    //sms.ChatAccess
    // fullName: sms.ChatAccess.ChatAccess
    export interface ChatAccess {
        creationDate: string;
        id: number;
        url: string;
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
        countrySuffixe: string;
        messages: string[];
        operators: string;
        restrictionCode: sms.RestrictionCodeEnum;
        substitution?: string;
    }
    //sms.Hlr
    // fullName: sms.Hlr.Hlr
    export interface Hlr {
        country: string;
        countryCode: string;
        network: string;
        operator: string;
        region: string;
    }
    //sms.HlrLookupNumber
    // fullName: sms.HlrLookupNumber.HlrLookupNumber
    export interface HlrLookupNumber {
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
    //sms.HlrStatuses
    export type HlrStatuses = "doing" | "done" | "error" | "todo"
    //sms.Incoming
    // fullName: sms.Incoming.Incoming
    export interface Incoming {
        creationDatetime: string;
        credits: number;
        id: number;
        message: string;
        sender: string;
        tag: string;
    }
    //sms.Job
    // fullName: sms.Job.Job
    export interface Job {
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
    //sms.Outgoing
    // fullName: sms.Outgoing.Outgoing
    export interface Outgoing {
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
    //sms.PackOffer
    // fullName: sms.PackOffer.PackOffer
    export interface PackOffer {
        countryDestination: string;
        giftPrice?: number;
        giftQuantity?: number;
        language: string;
        price: number;
        quantity: number;
        smsQuantity: number;
        totalPrice?: number;
    }
    //sms.PackQuantityAutomaticRecreditEnum
    export type PackQuantityAutomaticRecreditEnum = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000
    //sms.PackQuantityEnum
    export type PackQuantityEnum = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000
    //sms.Phonebook
    // fullName: sms.Phonebook.Phonebook
    export interface Phonebook {
        bookKey: string;
        name: string;
        phoneKey: string;
    }
    //sms.PhonebookContact
    // fullName: sms.PhonebookContact.PhonebookContact
    export interface PhonebookContact {
        group: string;
        homeMobile?: string;
        homePhone?: string;
        id: number;
        name: string;
        surname: string;
        workMobile?: string;
        workPhone?: string;
    }
    //sms.PriorityEnum
    export type PriorityEnum = "high" | "low" | "medium" | "veryLow"
    //sms.PttDetails
    // fullName: sms.PttDetails.PttDetails
    export interface PttDetails {
        comment: string;
        description: string;
        duration: sms.PttDurationTypeEnum;
    }
    //sms.PttDurationTypeEnum
    export type PttDurationTypeEnum = "indeterminated" | "permanent" | "temporary"
    //sms.Quota
    // fullName: sms.Quota.Quota
    export interface Quota {
        quotaLeft: number;
        quotaStatus: sms.QuotaStatusUserEnum;
    }
    //sms.QuotaStatusUserEnum
    export type QuotaStatusUserEnum = "active" | "inactive"
    //sms.Receiver
    // fullName: sms.Receiver.Receiver
    export interface Receiver {
        autoUpdate: boolean;
        canAutoUpdate: boolean;
        datetime: string;
        description: string;
        records: number;
        slotId: number;
    }
    //sms.ReceiversAsynchronousCleanReport
    // fullName: sms.ReceiversAsynchronousCleanReport.ReceiversAsynchronousCleanReport
    export interface ReceiversAsynchronousCleanReport {
        taskId: number;
        totalCreditsRemoved: number;
    }
    //sms.RefererSenderEnum
    export type RefererSenderEnum = "custom" | "domain" | "line" | "nic" | "owner" | "virtual"
    //sms.Response
    // fullName: sms.Response.Response
    export interface Response {
        cgiUrl?: string;
        responseType: sms.ResponseTypeEnum;
        text?: string;
        trackingDefaultSmsSender?: string;
        trackingOptions?: sms.ResponseTrackingOptions[];
    }
    //sms.ResponseTrackingMediaEnum
    export type ResponseTrackingMediaEnum = "email" | "sms" | "voice"
    //sms.ResponseTrackingOptions
    // fullName: sms.ResponseTrackingOptions.ResponseTrackingOptions
    export interface ResponseTrackingOptions {
        media: sms.ResponseTrackingMediaEnum;
        sender: string;
        target: string;
    }
    //sms.ResponseTypeEnum
    export type ResponseTypeEnum = "cgi" | "none" | "text"
    //sms.RestrictionCodeEnum
    export type RestrictionCodeEnum = "ALPHA" | "BAD_DLR" | "BLOCKED" | "CODING" | "DLR" | "FLASHONLY" | "MSISDN"
    //sms.Sender
    // fullName: sms.Sender.Sender
    export interface Sender {
        comment?: string;
        description: string;
        referer: sms.RefererSenderEnum;
        sender: string;
        status: sms.StatusSenderEnum;
        type?: sms.TypeSenderEnum;
        validationMedia?: string;
    }
    //sms.SenderAvailable
    // fullName: sms.SenderAvailable.SenderAvailable
    export interface SenderAvailable {
        referer: sms.SenderRefererEnum;
        sender: string;
    }
    //sms.SenderRefererEnum
    export type SenderRefererEnum = "domain" | "nichandle"
    //sms.SmsSendingReport
    // fullName: sms.SmsSendingReport.SmsSendingReport
    export interface SmsSendingReport {
        ids: number[];
        invalidReceivers: string[];
        totalCreditsRemoved: number;
        validReceivers: string[];
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
        function: sms.TodoGeneralPublicFunctionsEnum;
        status: telephony.TaskStatusEnum;
        step: sms.TodoGeneralPublicStepsEnum;
        taskId: number;
    }
    //sms.TemplateControl
    // fullName: sms.TemplateControl.TemplateControl
    export interface TemplateControl {
        activity: sms.TypeTemplateEnum;
        comment: string;
        datetime: string;
        description: string;
        message: string;
        name: string;
        status: sms.StatusSenderEnum;
    }
    //sms.Templates
    // fullName: sms.Templates.Templates
    export interface Templates {
        customizedEmailMode: boolean;
        customizedSmsMode: boolean;
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
        alertThresholdInformations: sms.AlertThreshold;
        callBack?: string;
        ipRestrictions: string[];
        login: string;
        password: string;
        quotaInformations: sms.Quota;
        stopCallBack?: string;
    }
    //sms.VirtualNumber
    // fullName: sms.VirtualNumber.VirtualNumber
    export interface VirtualNumber {
        countryCode: sms.VirtualNumberIsoCountryCodeEnum;
        number: string;
    }
    //sms.VirtualNumberGenericService
    // fullName: sms.VirtualNumberGenericService.VirtualNumberGenericService
    export interface VirtualNumberGenericService {
        countryCode: sms.VirtualNumberIsoCountryCodeEnum;
        number: string;
    }
    //sms.VirtualNumberIsoCountryCodeEnum
    export type VirtualNumberIsoCountryCodeEnum = "be" | "ch" | "de" | "es" | "fr" | "uk"
    //sms.VirtualNumberJob
    // fullName: sms.VirtualNumberJob.VirtualNumberJob
    export interface VirtualNumberJob {
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
export namespace telephony {
    //telephony.ContactsExportFormatsEnum
    export type ContactsExportFormatsEnum = "csv"
    //telephony.PcsFile
    // fullName: telephony.PcsFile.PcsFile
    export interface PcsFile {
        filename: string;
        status: telephony.PcsFileStatusEnum;
        url: string;
        urlExpirationDatetime: string;
    }
    //telephony.PcsFileStatusEnum
    export type PcsFileStatusEnum = "doing" | "done" | "error" | "todo"
    //telephony.Task
    // fullName: telephony.Task.Task
    export interface Task {
        action: string;
        message?: string;
        objectCreated?: string;
        serviceType: string;
        status: telephony.TaskStatusEnum;
        taskId: number;
    }
    //telephony.TaskStatusEnum
    export type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo"
}
// Apis harmony
// path /sms
export interface Sms{
    // GET /sms
    $get(): Promise<string[]>;
    ptts: {
        // GET /sms/ptts
        $get(param?: {ptt: number}): Promise<sms.PttDetails>;
    }
    virtualNumbers: {
        // GET /sms/virtualNumbers
        $get(): Promise<string[]>;
        [keys: string]:{
            // GET /sms/virtualNumbers/{number}
            $get(): Promise<sms.VirtualNumberGenericService>;
            serviceInfos: {
                // GET /sms/virtualNumbers/{number}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /sms/virtualNumbers/{number}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
    [keys: string]:{
        // GET /sms/{serviceName}
        $get(): Promise<sms.Account>;
        // PUT /sms/{serviceName}
        $put(body?: {body: sms.Account}): Promise<void>;
        blacklists: {
            // GET /sms/{serviceName}/blacklists
            $get(): Promise<string[]>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/blacklists/{number}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/blacklists/{number}
                $get(): Promise<sms.Blacklist>;
            } | any
        }
        document: {
            // GET /sms/{serviceName}/document
            $get(param?: {creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: sms.DocumentWayTypeEnum}): Promise<string>;
        }
        exceptions: {
            // GET /sms/{serviceName}/exceptions
            $get(param?: {receiver: string}): Promise<sms.Exception[]>;
        }
        hlr: {
            // GET /sms/{serviceName}/hlr
            $get(): Promise<number[]>;
            // POST /sms/{serviceName}/hlr
            $post(body?: {receivers?: string[], receiversDocumentUrl?: string}): Promise<sms.SmsSendingReport>;
            [keys: string]:{
                // GET /sms/{serviceName}/hlr/{id}
                $get(): Promise<sms.HlrLookupNumber>;
                operator: {
                    // GET /sms/{serviceName}/hlr/{id}/operator
                    $get(): Promise<sms.Hlr>;
                }
            } | any
        }
        incoming: {
            // GET /sms/{serviceName}/incoming
            $get(param?: {creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}): Promise<number[]>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/incoming/{id}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/incoming/{id}
                $get(): Promise<sms.Incoming>;
            } | any
        }
        jobs: {
            // GET /sms/{serviceName}/jobs
            $get(): Promise<number[]>;
            // POST /sms/{serviceName}/jobs
            $post(body?: {charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/jobs/{id}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/jobs/{id}
                $get(): Promise<sms.Job>;
            } | any
        }
        outgoing: {
            // GET /sms/{serviceName}/outgoing
            $get(param?: {creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/outgoing/{id}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/outgoing/{id}
                $get(): Promise<sms.Outgoing>;
                hlr: {
                    // GET /sms/{serviceName}/outgoing/{id}/hlr
                    $get(): Promise<sms.Hlr>;
                }
            } | any
        }
        phonebooks: {
            // GET /sms/{serviceName}/phonebooks
            $get(): Promise<string[]>;
            // POST /sms/{serviceName}/phonebooks
            $post(body?: {name: string}): Promise<string>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/phonebooks/{bookKey}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/phonebooks/{bookKey}
                $get(): Promise<sms.Phonebook>;
                // PUT /sms/{serviceName}/phonebooks/{bookKey}
                $put(body?: {body: sms.Phonebook}): Promise<void>;
                export: {
                    // GET /sms/{serviceName}/phonebooks/{bookKey}/export
                    $get(param?: {format: telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
                }
                import: {
                    // POST /sms/{serviceName}/phonebooks/{bookKey}/import
                    $post(body?: {documentId: string}): Promise<telephony.Task>;
                }
                phonebookContact: {
                    // GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
                    $get(): Promise<number[]>;
                    // POST /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
                    $post(body?: {group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
                    [keys: string]:{
                        // DELETE /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        $get(): Promise<sms.PhonebookContact>;
                        // PUT /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        $put(body?: {body: sms.PhonebookContact}): Promise<void>;
                    } | any
                }
            } | any
        }
        receivers: {
            // GET /sms/{serviceName}/receivers
            $get(): Promise<number[]>;
            // POST /sms/{serviceName}/receivers
            $post(body?: {autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}): Promise<sms.Receiver>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/receivers/{slotId}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/receivers/{slotId}
                $get(): Promise<sms.Receiver>;
                // PUT /sms/{serviceName}/receivers/{slotId}
                $put(body?: {body: sms.Receiver}): Promise<void>;
                clean: {
                    // POST /sms/{serviceName}/receivers/{slotId}/clean
                    $post(body?: {freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
                }
                csv: {
                    // GET /sms/{serviceName}/receivers/{slotId}/csv
                    $get(): Promise<string>;
                }
            } | any
        }
        seeOffers: {
            // GET /sms/{serviceName}/seeOffers
            $get(param?: {countryCurrencyPrice: reference.CountryEnum, countryDestination: sms.CountryEnum, quantity: sms.PackQuantityEnum}): Promise<sms.PackOffer[]>;
        }
        senders: {
            // GET /sms/{serviceName}/senders
            $get(): Promise<string[]>;
            // POST /sms/{serviceName}/senders
            $post(body?: {description?: string, reason?: string, sender: string}): Promise<string>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/senders/{sender}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/senders/{sender}
                $get(): Promise<sms.Sender>;
                // PUT /sms/{serviceName}/senders/{sender}
                $put(body?: {body: sms.Sender}): Promise<void>;
                validate: {
                    // POST /sms/{serviceName}/senders/{sender}/validate
                    $post(body?: {code: string}): Promise<void>;
                }
            } | any
        }
        sendersAvailableForValidation: {
            // GET /sms/{serviceName}/sendersAvailableForValidation
            $get(param?: {referer?: sms.SenderRefererEnum}): Promise<sms.SenderAvailable[]>;
        }
        serviceInfos: {
            // GET /sms/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /sms/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
        task: {
            // GET /sms/{serviceName}/task
            $get(param?: {status?: telephony.TaskStatusEnum}): Promise<number[]>;
            [keys: string]:{
                // GET /sms/{serviceName}/task/{taskId}
                $get(): Promise<sms.Task>;
            } | any
        }
        templatesControl: {
            // GET /sms/{serviceName}/templatesControl
            $get(): Promise<string[]>;
            // POST /sms/{serviceName}/templatesControl
            $post(body?: {activity: sms.TypeTemplateEnum, description?: string, message: string, name: string, reason?: string}): Promise<void>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/templatesControl/{name}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/templatesControl/{name}
                $get(): Promise<sms.TemplateControl>;
                // PUT /sms/{serviceName}/templatesControl/{name}
                $put(body?: {body: sms.TemplateControl}): Promise<void>;
                relaunchValidation: {
                    // POST /sms/{serviceName}/templatesControl/{name}/relaunchValidation
                    $post(body?: {description: string, message: string}): Promise<void>;
                }
            } | any
        }
        transferCredits: {
            // POST /sms/{serviceName}/transferCredits
            $post(body?: {credits: number, smsAccountTarget: string}): Promise<void>;
        }
        users: {
            // GET /sms/{serviceName}/users
            $get(): Promise<string[]>;
            // POST /sms/{serviceName}/users
            $post(body?: {login: string, password: string}): Promise<void>;
            [keys: string]:{
                // DELETE /sms/{serviceName}/users/{login}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/users/{login}
                $get(): Promise<sms.User>;
                // PUT /sms/{serviceName}/users/{login}
                $put(body?: {body: sms.User}): Promise<void>;
                document: {
                    // GET /sms/{serviceName}/users/{login}/document
                    $get(param?: {creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: sms.DocumentWayTypeEnum}): Promise<string>;
                }
                incoming: {
                    // GET /sms/{serviceName}/users/{login}/incoming
                    $get(param?: {sender?: string, tag?: string}): Promise<number[]>;
                    [keys: string]:{
                        // DELETE /sms/{serviceName}/users/{login}/incoming/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/users/{login}/incoming/{id}
                        $get(): Promise<sms.Incoming>;
                    } | any
                }
                jobs: {
                    // GET /sms/{serviceName}/users/{login}/jobs
                    $get(): Promise<number[]>;
                    // POST /sms/{serviceName}/users/{login}/jobs
                    $post(body?: {charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
                    [keys: string]:{
                        // DELETE /sms/{serviceName}/users/{login}/jobs/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/users/{login}/jobs/{id}
                        $get(): Promise<sms.Job>;
                    } | any
                }
                outgoing: {
                    // GET /sms/{serviceName}/users/{login}/outgoing
                    $get(param?: {deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
                    [keys: string]:{
                        // DELETE /sms/{serviceName}/users/{login}/outgoing/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/users/{login}/outgoing/{id}
                        $get(): Promise<sms.Outgoing>;
                        hlr: {
                            // GET /sms/{serviceName}/users/{login}/outgoing/{id}/hlr
                            $get(): Promise<sms.Hlr>;
                        }
                    } | any
                }
                receivers: {
                    // GET /sms/{serviceName}/users/{login}/receivers
                    $get(): Promise<number[]>;
                    // POST /sms/{serviceName}/users/{login}/receivers
                    $post(body?: {autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}): Promise<sms.Receiver>;
                    [keys: string]:{
                        // DELETE /sms/{serviceName}/users/{login}/receivers/{slotId}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/users/{login}/receivers/{slotId}
                        $get(): Promise<sms.Receiver>;
                        // PUT /sms/{serviceName}/users/{login}/receivers/{slotId}
                        $put(body?: {body: sms.Receiver}): Promise<void>;
                        clean: {
                            // POST /sms/{serviceName}/users/{login}/receivers/{slotId}/clean
                            $post(body?: {freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
                        }
                        csv: {
                            // GET /sms/{serviceName}/users/{login}/receivers/{slotId}/csv
                            $get(): Promise<string>;
                        }
                    } | any
                }
            } | any
        }
        virtualNumbers: {
            // GET /sms/{serviceName}/virtualNumbers
            $get(): Promise<string[]>;
            [keys: string]:{
                // GET /sms/{serviceName}/virtualNumbers/{number}
                $get(): Promise<sms.VirtualNumber>;
                chatAccess: {
                    // DELETE /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    $delete(): Promise<void>;
                    // GET /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    $get(): Promise<sms.ChatAccess>;
                    // POST /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    $post(): Promise<sms.ChatAccess>;
                }
                incoming: {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/incoming
                    $get(param?: {creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}): Promise<number[]>;
                    [keys: string]:{
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}
                        $get(): Promise<sms.Incoming>;
                    } | any
                }
                jobs: {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/jobs
                    $get(): Promise<number[]>;
                    // POST /sms/{serviceName}/virtualNumbers/{number}/jobs
                    $post(body?: {charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
                    [keys: string]:{
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
                        $get(): Promise<sms.VirtualNumberJob>;
                    } | any
                }
                outgoing: {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing
                    $get(param?: {creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
                    [keys: string]:{
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}
                        $get(): Promise<sms.Outgoing>;
                        hlr: {
                            // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr
                            $get(): Promise<sms.Hlr>;
                        }
                    } | any
                }
            } | any
        }
    } | any
}
// Api
type PathsSmsGET = '/sms' |
  '/sms/ptts' |
  '/sms/virtualNumbers' |
  '/sms/virtualNumbers/{number}' |
  '/sms/virtualNumbers/{number}/serviceInfos' |
  '/sms/{serviceName}' |
  '/sms/{serviceName}/blacklists' |
  '/sms/{serviceName}/blacklists/{number}' |
  '/sms/{serviceName}/document' |
  '/sms/{serviceName}/exceptions' |
  '/sms/{serviceName}/hlr' |
  '/sms/{serviceName}/hlr/{id}' |
  '/sms/{serviceName}/hlr/{id}/operator' |
  '/sms/{serviceName}/incoming' |
  '/sms/{serviceName}/incoming/{id}' |
  '/sms/{serviceName}/jobs' |
  '/sms/{serviceName}/jobs/{id}' |
  '/sms/{serviceName}/outgoing' |
  '/sms/{serviceName}/outgoing/{id}' |
  '/sms/{serviceName}/outgoing/{id}/hlr' |
  '/sms/{serviceName}/phonebooks' |
  '/sms/{serviceName}/phonebooks/{bookKey}' |
  '/sms/{serviceName}/phonebooks/{bookKey}/export' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' |
  '/sms/{serviceName}/receivers' |
  '/sms/{serviceName}/receivers/{slotId}' |
  '/sms/{serviceName}/receivers/{slotId}/csv' |
  '/sms/{serviceName}/seeOffers' |
  '/sms/{serviceName}/senders' |
  '/sms/{serviceName}/senders/{sender}' |
  '/sms/{serviceName}/sendersAvailableForValidation' |
  '/sms/{serviceName}/serviceInfos' |
  '/sms/{serviceName}/task' |
  '/sms/{serviceName}/task/{taskId}' |
  '/sms/{serviceName}/templatesControl' |
  '/sms/{serviceName}/templatesControl/{name}' |
  '/sms/{serviceName}/users' |
  '/sms/{serviceName}/users/{login}' |
  '/sms/{serviceName}/users/{login}/document' |
  '/sms/{serviceName}/users/{login}/incoming' |
  '/sms/{serviceName}/users/{login}/incoming/{id}' |
  '/sms/{serviceName}/users/{login}/jobs' |
  '/sms/{serviceName}/users/{login}/jobs/{id}' |
  '/sms/{serviceName}/users/{login}/outgoing' |
  '/sms/{serviceName}/users/{login}/outgoing/{id}' |
  '/sms/{serviceName}/users/{login}/outgoing/{id}/hlr' |
  '/sms/{serviceName}/users/{login}/receivers' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}/csv' |
  '/sms/{serviceName}/virtualNumbers' |
  '/sms/{serviceName}/virtualNumbers/{number}' |
  '/sms/{serviceName}/virtualNumbers/{number}/chatAccess' |
  '/sms/{serviceName}/virtualNumbers/{number}/incoming' |
  '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/jobs' |
  '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/outgoing' |
  '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr';

type PathsSmsPUT = '/sms/virtualNumbers/{number}/serviceInfos' |
  '/sms/{serviceName}' |
  '/sms/{serviceName}/phonebooks/{bookKey}' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' |
  '/sms/{serviceName}/receivers/{slotId}' |
  '/sms/{serviceName}/senders/{sender}' |
  '/sms/{serviceName}/serviceInfos' |
  '/sms/{serviceName}/templatesControl/{name}' |
  '/sms/{serviceName}/users/{login}' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}';

type PathsSmsPOST = '/sms/{serviceName}/hlr' |
  '/sms/{serviceName}/jobs' |
  '/sms/{serviceName}/phonebooks' |
  '/sms/{serviceName}/phonebooks/{bookKey}/import' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' |
  '/sms/{serviceName}/receivers' |
  '/sms/{serviceName}/receivers/{slotId}/clean' |
  '/sms/{serviceName}/senders' |
  '/sms/{serviceName}/senders/{sender}/validate' |
  '/sms/{serviceName}/templatesControl' |
  '/sms/{serviceName}/templatesControl/{name}/relaunchValidation' |
  '/sms/{serviceName}/transferCredits' |
  '/sms/{serviceName}/users' |
  '/sms/{serviceName}/users/{login}/jobs' |
  '/sms/{serviceName}/users/{login}/receivers' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}/clean' |
  '/sms/{serviceName}/virtualNumbers/{number}/chatAccess' |
  '/sms/{serviceName}/virtualNumbers/{number}/jobs';

type PathsSmsDELETE = '/sms/{serviceName}/blacklists/{number}' |
  '/sms/{serviceName}/incoming/{id}' |
  '/sms/{serviceName}/jobs/{id}' |
  '/sms/{serviceName}/outgoing/{id}' |
  '/sms/{serviceName}/phonebooks/{bookKey}' |
  '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' |
  '/sms/{serviceName}/receivers/{slotId}' |
  '/sms/{serviceName}/senders/{sender}' |
  '/sms/{serviceName}/templatesControl/{name}' |
  '/sms/{serviceName}/users/{login}' |
  '/sms/{serviceName}/users/{login}/incoming/{id}' |
  '/sms/{serviceName}/users/{login}/jobs/{id}' |
  '/sms/{serviceName}/users/{login}/outgoing/{id}' |
  '/sms/{serviceName}/users/{login}/receivers/{slotId}' |
  '/sms/{serviceName}/virtualNumbers/{number}/chatAccess' |
  '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' |
  '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}';

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
  public get(path: '/sms/{serviceName}/blacklists/{number}', params: {number: string, serviceName: string}): Promise<sms.Blacklist>;
  /**
   * document operations
   * Get the /me/document id generated
   */
  public get(path: '/sms/{serviceName}/document', params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: sms.DocumentWayTypeEnum}): Promise<string>;
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
  public get(path: '/sms/{serviceName}/hlr/{id}', params: {id: number, serviceName: string}): Promise<sms.HlrLookupNumber>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/hlr/{id}/operator', params: {id: number, serviceName: string}): Promise<sms.Hlr>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms account
   */
  public get(path: '/sms/{serviceName}/incoming', params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/incoming/{id}', params: {id: number, serviceName: string}): Promise<sms.Incoming>;
  /**
   * List the sms.Job objects
   * Sms in pending associated to the sms account
   */
  public get(path: '/sms/{serviceName}/jobs', params: {serviceName: string}): Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/jobs/{id}', params: {id: number, serviceName: string}): Promise<sms.Job>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms account
   */
  public get(path: '/sms/{serviceName}/outgoing', params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/outgoing/{id}', params: {id: number, serviceName: string}): Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/outgoing/{id}/hlr', params: {id: number, serviceName: string}): Promise<sms.Hlr>;
  /**
   * List the sms.Phonebook objects
   * Return phonebooks associated to this account
   */
  public get(path: '/sms/{serviceName}/phonebooks', params: {serviceName: string}): Promise<string[]>;
  /**
   * Phone book
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}', params: {bookKey: string, serviceName: string}): Promise<sms.Phonebook>;
  /**
   * export operations
   * Export the phonebook's contacts
   */
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/export', params: {bookKey: string, serviceName: string, format: telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
  /**
   * List the sms.PhonebookContact objects
   * Phonebook contacts
   */
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact', params: {bookKey: string, serviceName: string}): Promise<number[]>;
  /**
   * Phone book contact
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', params: {bookKey: string, id: number, serviceName: string}): Promise<sms.PhonebookContact>;
  /**
   * List the sms.Receiver objects
   * Receivers preloaded from text or csv document file
   */
  public get(path: '/sms/{serviceName}/receivers', params: {serviceName: string}): Promise<number[]>;
  /**
   * Sms receivers preloaded
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/receivers/{slotId}', params: {serviceName: string, slotId: number}): Promise<sms.Receiver>;
  /**
   * csv operations
   * Get the document data container
   */
  public get(path: '/sms/{serviceName}/receivers/{slotId}/csv', params: {serviceName: string, slotId: number}): Promise<string>;
  /**
   * seeOffers operations
   * Describe SMS offers available.
   */
  public get(path: '/sms/{serviceName}/seeOffers', params: {serviceName: string, countryCurrencyPrice: reference.CountryEnum, countryDestination: sms.CountryEnum, quantity: sms.PackQuantityEnum}): Promise<sms.PackOffer[]>;
  /**
   * List the sms.Sender objects
   * Senders allowed associated to the sms account
   */
  public get(path: '/sms/{serviceName}/senders', params: {serviceName: string}): Promise<string[]>;
  /**
   * SMS senders
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/senders/{sender}', params: {sender: string, serviceName: string}): Promise<sms.Sender>;
  /**
   * sendersAvailableForValidation operations
   * The senders that are attached to your personal informations or OVH services and that can be automatically validated
   */
  public get(path: '/sms/{serviceName}/sendersAvailableForValidation', params: {serviceName: string, referer?: sms.SenderRefererEnum}): Promise<sms.SenderAvailable[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the sms.Task objects
   * Operations on a SMS service
   */
  public get(path: '/sms/{serviceName}/task', params: {serviceName: string, status?: telephony.TaskStatusEnum}): Promise<number[]>;
  /**
   * Operation on a SMS service
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<sms.Task>;
  /**
   * List the sms.TemplateControl objects
   * Template pattern filled up for moderation (Needed to send in US country)
   */
  public get(path: '/sms/{serviceName}/templatesControl', params: {serviceName: string}): Promise<string[]>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/templatesControl/{name}', params: {name: string, serviceName: string}): Promise<sms.TemplateControl>;
  /**
   * List the sms.User objects
   * Users associated to the sms account
   */
  public get(path: '/sms/{serviceName}/users', params: {serviceName: string}): Promise<string[]>;
  /**
   * SMS users
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}', params: {login: string, serviceName: string}): Promise<sms.User>;
  /**
   * document operations
   * Get the /me/document id generated
   */
  public get(path: '/sms/{serviceName}/users/{login}/document', params: {login: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: sms.DocumentWayTypeEnum}): Promise<string>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms user
   */
  public get(path: '/sms/{serviceName}/users/{login}/incoming', params: {login: string, serviceName: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/incoming/{id}', params: {id: number, login: string, serviceName: string}): Promise<sms.Incoming>;
  /**
   * List the sms.Job objects
   * Sms in pending associated to the sms user
   */
  public get(path: '/sms/{serviceName}/users/{login}/jobs', params: {login: string, serviceName: string}): Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/jobs/{id}', params: {id: number, login: string, serviceName: string}): Promise<sms.Job>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms user
   */
  public get(path: '/sms/{serviceName}/users/{login}/outgoing', params: {login: string, serviceName: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}', params: {id: number, login: string, serviceName: string}): Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}/hlr', params: {id: number, login: string, serviceName: string}): Promise<sms.Hlr>;
  /**
   * List the sms.Receiver objects
   * Receivers preloaded from text or csv document file
   */
  public get(path: '/sms/{serviceName}/users/{login}/receivers', params: {login: string, serviceName: string}): Promise<number[]>;
  /**
   * Sms receivers preloaded
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', params: {login: string, serviceName: string, slotId: number}): Promise<sms.Receiver>;
  /**
   * csv operations
   * Get the document data container
   */
  public get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/csv', params: {login: string, serviceName: string, slotId: number}): Promise<string>;
  /**
   * List the sms.VirtualNumber objects
   * Virtual numbers associated to the sms account
   */
  public get(path: '/sms/{serviceName}/virtualNumbers', params: {serviceName: string}): Promise<string[]>;
  /**
   * Virtual numbers
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}', params: {number: string, serviceName: string}): Promise<sms.VirtualNumber>;
  /**
   * The web access for your virtual number chat application
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', params: {number: string, serviceName: string}): Promise<sms.ChatAccess>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms account
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming', params: {number: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}', params: {id: number, number: string, serviceName: string}): Promise<sms.Incoming>;
  /**
   * List the sms.VirtualNumberJob objects
   * Sms in pending associated to the sms account
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs', params: {number: string, serviceName: string}): Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}', params: {id: number, number: string, serviceName: string}): Promise<sms.VirtualNumberJob>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms account
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing', params: {number: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}', params: {id: number, number: string, serviceName: string}): Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr', params: {id: number, number: string, serviceName: string}): Promise<sms.Hlr>;
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
  public put(path: '/sms/{serviceName}', params: {serviceName: string, automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum, callBack?: string, creditThresholdForAutomaticRecredit?: number, creditsHoldByQuota?: number, creditsLeft?: number, description?: string, name?: string, smsResponse?: sms.Response, status?: sms.StatusAccountEnum, stopCallBack?: string, templates?: sms.Templates, userQuantityWithQuota?: number}): Promise<void>;
  /**
   * Phone book
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/phonebooks/{bookKey}', params: {bookKey: string, serviceName: string, name?: string, phoneKey?: string}): Promise<void>;
  /**
   * Phone book contact
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', params: {bookKey: string, id: number, serviceName: string, group?: string, homeMobile?: string, homePhone?: string, name?: string, surname?: string, workMobile?: string, workPhone?: string}): Promise<void>;
  /**
   * Sms receivers preloaded
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/receivers/{slotId}', params: {serviceName: string, slotId: number, autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number}): Promise<void>;
  /**
   * SMS senders
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/senders/{sender}', params: {sender: string, serviceName: string, comment?: string, description?: string, referer?: sms.RefererSenderEnum, status?: sms.StatusSenderEnum, type?: sms.TypeSenderEnum, validationMedia?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/templatesControl/{name}', params: {name: string, serviceName: string, activity?: sms.TypeTemplateEnum, comment?: string, datetime?: string, description?: string, message?: string, status?: sms.StatusSenderEnum}): Promise<void>;
  /**
   * SMS users
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/users/{login}', params: {login: string, serviceName: string, alertThresholdInformations?: sms.AlertThreshold, callBack?: string, ipRestrictions?: string[], password?: string, quotaInformations?: sms.Quota, stopCallBack?: string}): Promise<void>;
  /**
   * Sms receivers preloaded
   * Alter this object properties
   */
  public put(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', params: {login: string, serviceName: string, slotId: number, autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/sms/virtualNumbers/{number}/serviceInfos', params: {number: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
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
  public post(path: '/sms/{serviceName}/jobs', params: {serviceName: string, charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
  /**
   * List the sms.Phonebook objects
   * Add a phonebook. Return the bookKey.
   */
  public post(path: '/sms/{serviceName}/phonebooks', params: {serviceName: string, name: string}): Promise<string>;
  /**
   * import operations
   * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
   */
  public post(path: '/sms/{serviceName}/phonebooks/{bookKey}/import', params: {bookKey: string, serviceName: string, documentId: string}): Promise<telephony.Task>;
  /**
   * List the sms.PhonebookContact objects
   * Create a phonebook contact. Return identifier of the phonebook contact.
   */
  public post(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact', params: {bookKey: string, serviceName: string, group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
  /**
   * List the sms.Receiver objects
   * Add a new document of csv receivers
   */
  public post(path: '/sms/{serviceName}/receivers', params: {serviceName: string, autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}): Promise<sms.Receiver>;
  /**
   * clean operations
   * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
   */
  public post(path: '/sms/{serviceName}/receivers/{slotId}/clean', params: {serviceName: string, slotId: number, freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
  /**
   * List the sms.Sender objects
   * Create the sms sender given
   */
  public post(path: '/sms/{serviceName}/senders', params: {serviceName: string, description?: string, reason?: string, sender: string}): Promise<string>;
  /**
   * validate operations
   * Validate a given sender with an activation code.
   */
  public post(path: '/sms/{serviceName}/senders/{sender}/validate', params: {sender: string, serviceName: string, code: string}): Promise<void>;
  /**
   * List the sms.TemplateControl objects
   * Create the sms template control given
   */
  public post(path: '/sms/{serviceName}/templatesControl', params: {serviceName: string, activity: sms.TypeTemplateEnum, description?: string, message: string, name: string, reason?: string}): Promise<void>;
  /**
   * relaunchValidation operations
   * Attempt a new validation after moderation refusal
   */
  public post(path: '/sms/{serviceName}/templatesControl/{name}/relaunchValidation', params: {name: string, serviceName: string, description: string, message: string}): Promise<void>;
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
  public post(path: '/sms/{serviceName}/users/{login}/jobs', params: {login: string, serviceName: string, charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
  /**
   * List the sms.Receiver objects
   * Add a new document of csv receivers
   */
  public post(path: '/sms/{serviceName}/users/{login}/receivers', params: {login: string, serviceName: string, autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}): Promise<sms.Receiver>;
  /**
   * clean operations
   * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
   */
  public post(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/clean', params: {login: string, serviceName: string, slotId: number, freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
  /**
   * The web access for your virtual number chat application
   * Create a new web access for this ressource
   */
  public post(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', params: {number: string, serviceName: string}): Promise<sms.ChatAccess>;
  /**
   * List the sms.VirtualNumberJob objects
   * Add one or several sending jobs
   */
  public post(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs', params: {number: string, serviceName: string, charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
  public post(path: PathsSmsPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * SMS blacklist
   * Delete the blacklisted sms number given
   */
  public delete(path: '/sms/{serviceName}/blacklists/{number}', params: {number: string, serviceName: string}): Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  public delete(path: '/sms/{serviceName}/incoming/{id}', params: {id: number, serviceName: string}): Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  public delete(path: '/sms/{serviceName}/jobs/{id}', params: {id: number, serviceName: string}): Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  public delete(path: '/sms/{serviceName}/outgoing/{id}', params: {id: number, serviceName: string}): Promise<void>;
  /**
   * Phone book
   * Delete a phonebook
   */
  public delete(path: '/sms/{serviceName}/phonebooks/{bookKey}', params: {bookKey: string, serviceName: string}): Promise<void>;
  /**
   * Phone book contact
   * Delete a phonebook contact
   */
  public delete(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', params: {bookKey: string, id: number, serviceName: string}): Promise<void>;
  /**
   * Sms receivers preloaded
   * Delete the document from the slot
   */
  public delete(path: '/sms/{serviceName}/receivers/{slotId}', params: {serviceName: string, slotId: number}): Promise<void>;
  /**
   * SMS senders
   * Delete the sms sender given
   */
  public delete(path: '/sms/{serviceName}/senders/{sender}', params: {sender: string, serviceName: string}): Promise<void>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Delete the sms template control
   */
  public delete(path: '/sms/{serviceName}/templatesControl/{name}', params: {name: string, serviceName: string}): Promise<void>;
  /**
   * SMS users
   * Delete the sms user given
   */
  public delete(path: '/sms/{serviceName}/users/{login}', params: {login: string, serviceName: string}): Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  public delete(path: '/sms/{serviceName}/users/{login}/incoming/{id}', params: {id: number, login: string, serviceName: string}): Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  public delete(path: '/sms/{serviceName}/users/{login}/jobs/{id}', params: {id: number, login: string, serviceName: string}): Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  public delete(path: '/sms/{serviceName}/users/{login}/outgoing/{id}', params: {id: number, login: string, serviceName: string}): Promise<void>;
  /**
   * Sms receivers preloaded
   * Delete the document from the slot
   */
  public delete(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', params: {login: string, serviceName: string, slotId: number}): Promise<void>;
  /**
   * The web access for your virtual number chat application
   * Delete the given web access
   */
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', params: {number: string, serviceName: string}): Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}', params: {id: number, number: string, serviceName: string}): Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}', params: {id: number, number: string, serviceName: string}): Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}', params: {id: number, number: string, serviceName: string}): Promise<void>;
  public delete(path: PathsSmsDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
export default ApiSms;

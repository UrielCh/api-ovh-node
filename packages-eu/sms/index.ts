import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /sms Models
 * Source: https://eu.api.ovh.com/1.0/sms.json
 */
export namespace order {
    /**
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = " INR" | "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * Price with it's currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace reference {
    /**
     * All country prices accessible from a reference
     * type fullname: reference.CountryEnum
     */
    export type CountryEnum = "all" | "ca" | "cz" | "de" | "en" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "ma" | "nl" | "pl" | "pp" | "pt" | "qc" | "ru" | "sk" | "sn" | "tn" | "we"
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
export namespace sms {
    /**
     * SMS details
     * interface fullName: sms.Account.Account
     */
    export interface Account {
        automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum;
        callBack?: string;
        channel: sms.ChannelEnum;
        creditThresholdForAutomaticRecredit: number;
        creditsHoldByQuota: number;
        creditsLeft: number;
        description: string;
        name: string;
        smpp: boolean;
        smsResponse: sms.Response;
        status: sms.StatusAccountEnum;
        stopCallBack?: string;
        templates: sms.Templates;
        userQuantityWithQuota: number;
    }
    /**
     * A structure describing all information about alert threshold informations
     * interface fullName: sms.AlertThreshold.AlertThreshold
     */
    export interface AlertThreshold {
        alertEmail: string;
        alertNumber: string;
        alertThreshold: number;
        support: sms.SupportEnum;
    }
    /**
     * Smpp allowed IPs
     * interface fullName: sms.AllowedIPs.AllowedIPs
     */
    export interface AllowedIPs {
        action: sms.AllowedIPsActionEnum;
        ips: string[];
    }
    /**
     * Smpp allowed IPs action
     * type fullname: sms.AllowedIPsActionEnum
     */
    export type AllowedIPsActionEnum = "add" | "remove"
    /**
     * Batch of SMS to send
     * interface fullName: sms.Batch.Batch
     */
    export interface Batch {
        accountID: number;
        createdAt: string;
        errors: sms.BatchError[];
        estimatedCredits: number;
        finishedAt?: string;
        from?: string;
        id: string;
        message: string;
        name: string;
        processedRecords: number;
        receivers?: string[];
        sentAt?: string;
        slotID?: string;
        startedAt?: string;
        status: sms.BatchStatusEnum;
        totalRecords: number;
        updatedAt: string;
    }
    /**
     * SMS classes
     * type fullname: sms.BatchClassEnum
     */
    export type BatchClassEnum = "FLASH" | "PHONE" | "SIM"
    /**
     * Batch error details
     * interface fullName: sms.BatchError.BatchError
     */
    export interface BatchError {
        message: string;
        receiver: string;
    }
    /**
     * Params to create a batch
     * interface fullName: sms.BatchParams.BatchParams
     */
    export interface BatchParams {
        class: sms.BatchClassEnum;
        deferred: string;
        from: string;
        message: string;
        name: string;
        noStop: boolean;
        senderForResponse: boolean;
        slotID: string;
        tag: string;
        to: string[];
    }
    /**
     * Batch's statistics
     * interface fullName: sms.BatchStatistics.BatchStatistics
     */
    export interface BatchStatistics {
        credits: number;
        delivered: number;
        estimatedCredits: number;
        failed: number;
        id: string;
        pending: number;
        sent: number;
        stoplisted: number;
    }
    /**
     * Batch statuses
     * type fullname: sms.BatchStatusEnum
     */
    export type BatchStatusEnum = "CANCELED" | "CANCELING" | "COMPLETED" | "FAILED" | "INSERTED" | "INSERTING" | "PENDING" | "TO_CANCEL"
    /**
     * Params to update a batch
     * interface fullName: sms.BatchUpdateParams.BatchUpdateParams
     */
    export interface BatchUpdateParams {
        name: string;
    }
    /**
     * Countries where we sell SMS credits
     * type fullname: sms.BillingCountryEnum
     */
    export type BillingCountryEnum = "es" | "fr" | "gb" | "ie" | "it" | "pl"
    /**
     * SMS blacklist
     * interface fullName: sms.Blacklist.Blacklist
     */
    export interface Blacklist {
        batchID?: string;
        dateCreation: string;
        number: string;
        smsOutgoingID?: number;
    }
    /**
     * In case of smpp the channel can not be "both"
     * type fullname: sms.ChannelEnum
     */
    export type ChannelEnum = "both" | "marketing" | "transactional"
    /**
     * The charset format
     * type fullname: sms.CharsetEnum
     */
    export type CharsetEnum = "UTF-8"
    /**
     * The web access for your virtual number chat application
     * interface fullName: sms.ChatAccess.ChatAccess
     */
    export interface ChatAccess {
        creationDate: string;
        id: number;
        url: string;
    }
    /**
     * The sms class of sms sending job
     * type fullname: sms.ClassEnum
     */
    export type ClassEnum = "flash" | "phoneDisplay" | "sim" | "toolkit"
    /**
     * The sms coding
     * type fullname: sms.CodingEnum
     */
    export type CodingEnum = "7bit" | "8bit"
    /**
     * All country suffixes accessible for sms services and "all" available
     * type fullname: sms.CountryEnum
     */
    export type CountryEnum = "ad" | "ae" | "af" | "ag" | "ai" | "al" | "all" | "am" | "an" | "ao" | "ar" | "at" | "au" | "aw" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bm" | "bn" | "bo" | "br" | "bs" | "bt" | "bw" | "by" | "bz" | "ca" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cu" | "cv" | "cy" | "cz" | "de" | "dk" | "dm" | "dz" | "ec" | "ee" | "eg" | "es" | "et" | "fi" | "fj" | "fk" | "fo" | "fr" | "ga" | "gb" | "gd" | "ge" | "gf" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gt" | "gu" | "gw" | "gy" | "hk" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "in" | "io" | "iq" | "ir" | "is" | "it" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "km" | "kn" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "md" | "me" | "mg" | "mk" | "ml" | "mn" | "mo" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "ng" | "ni" | "nl" | "no" | "np" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "ps" | "pt" | "py" | "qa" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "si" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "st" | "sv" | "sy" | "sz" | "tc" | "td" | "tg" | "th" | "tj" | "tl" | "tm" | "tn" | "to" | "tr" | "tt" | "tw" | "tz" | "ua" | "ug" | "us" | "uy" | "uz" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "ws" | "ye" | "yt" | "za" | "zm" | "zw"
    /**
     * Rates of a given destination
     * interface fullName: sms.DestinationRates.DestinationRates
     */
    export interface DestinationRates {
        country: string;
        countryCode: sms.CountryEnum;
        credit: number;
        price: order.Price;
    }
    /**
     * Way type
     * type fullname: sms.DocumentWayTypeEnum
     */
    export type DocumentWayTypeEnum = "incoming" | "outgoing"
    /**
     * The SMS available characters class
     * type fullname: sms.EncodingEnum
     */
    export type EncodingEnum = "7bits" | "unicode"
    /**
     * Sms reach list
     * interface fullName: sms.Exception.Exception
     */
    export interface Exception {
        countrySuffixe: string;
        messages: string[];
        operators: string;
        restrictionCode: sms.RestrictionCodeEnum;
        substitution?: string;
    }
    /**
     * Sms operator informations
     * interface fullName: sms.Hlr.Hlr
     */
    export interface Hlr {
        country: string;
        countryCode: string;
        network: string;
        operator: string;
        region: string;
    }
    /**
     * Home Location Register informations. Give informations about a given cellular phone.
     * interface fullName: sms.HlrLookupNumber.HlrLookupNumber
     */
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
    /**
     * The sms coding
     * type fullname: sms.HlrStatuses
     */
    export type HlrStatuses = "doing" | "done" | "error" | "todo"
    /**
     * Sms history of sms incoming received
     * interface fullName: sms.Incoming.Incoming
     */
    export interface Incoming {
        creationDatetime: string;
        credits: number;
        id: number;
        message: string;
        sender: string;
        tag: string;
    }
    /**
     * Sms job
     * interface fullName: sms.Job.Job
     */
    export interface Job {
        creationDatetime: string;
        credits: number;
        deliveredAt?: string;
        deliveryReceipt: number;
        differedDelivery: number;
        id: number;
        message: string;
        messageLength: number;
        numberOfSms: number;
        ptt: number;
        receiver: string;
        sender: string;
        sentAt?: string;
    }
    /**
     * A structure describing the encoding, length and number of SMS parts of a text message
     * interface fullName: sms.JobEstimate.JobEstimate
     */
    export interface JobEstimate {
        characters: number;
        charactersClass: sms.EncodingEnum;
        maxCharactersPerPart: number;
        parts: number;
    }
    /**
     * Sent SMS
     * interface fullName: sms.Outgoing.Outgoing
     */
    export interface Outgoing {
        batchID?: string;
        creationDatetime: string;
        credits: number;
        deliveredAt?: string;
        deliveryReceipt: number;
        differedDelivery: number;
        id: number;
        message: string;
        messageID?: string;
        messageLength: number;
        numberOfSms: number;
        ptt: number;
        receiver: string;
        sender: string;
        sentAt?: string;
        tag: string;
        tariffCode: string;
    }
    /**
     * Details about a SMS pack
     * interface fullName: sms.PackDetails.PackDetails
     */
    export interface PackDetails {
        countryCode: sms.CountryEnum;
        credit: number;
        creditPrice: order.Price;
        creditQuantityMax?: number;
        creditQuantityMin: number;
        discountCreditPrice?: order.Price;
        discountPercentage?: number;
        discountSmsPrice?: order.Price;
        smsPrice: order.Price;
        smsQuantityMax?: number;
        smsQuantityMin: number;
    }
    /**
     * A structure describing all information about an sms pack offer
     * interface fullName: sms.PackOffer.PackOffer
     */
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
    /**
     * Pack quantity automatic recredit possibilities
     * type fullname: sms.PackQuantityAutomaticRecreditEnum
     */
    export type PackQuantityAutomaticRecreditEnum = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000
    /**
     * Pack quantity levels
     * type fullname: sms.PackQuantityEnum
     */
    export type PackQuantityEnum = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000
    /**
     * Phone book
     * interface fullName: sms.Phonebook.Phonebook
     */
    export interface Phonebook {
        bookKey: string;
        name: string;
        phoneKey: string;
    }
    /**
     * Phone book contact
     * interface fullName: sms.PhonebookContact.PhonebookContact
     */
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
    /**
     * The priority of an sms sending
     * type fullname: sms.PriorityEnum
     */
    export type PriorityEnum = "high" | "low" | "medium" | "veryLow"
    /**
     * A structure describing ptt details
     * interface fullName: sms.PttDetails.PttDetails
     */
    export interface PttDetails {
        comment: string;
        description: string;
        duration: sms.PttDurationTypeEnum;
    }
    /**
     * All typology of ptt duration
     * type fullname: sms.PttDurationTypeEnum
     */
    export type PttDurationTypeEnum = "indeterminated" | "permanent" | "temporary"
    /**
     * A structure describing all information about quota informations
     * interface fullName: sms.Quota.Quota
     */
    export interface Quota {
        quotaLeft: number;
        quotaStatus: sms.QuotaStatusUserEnum;
    }
    /**
     * Current quota status
     * type fullname: sms.QuotaStatusUserEnum
     */
    export type QuotaStatusUserEnum = "active" | "inactive"
    /**
     * Sms receivers preloaded
     * interface fullName: sms.Receiver.Receiver
     */
    export interface Receiver {
        autoUpdate: boolean;
        canAutoUpdate: boolean;
        datetime: string;
        description: string;
        records: number;
        slotId: number;
    }
    /**
     * A structure giving operation price and asynchronous task ID
     * interface fullName: sms.ReceiversAsynchronousCleanReport.ReceiversAsynchronousCleanReport
     */
    export interface ReceiversAsynchronousCleanReport {
        taskId: number;
        totalCreditsRemoved: number;
    }
    /**
     * All tyoplogy of senders
     * type fullname: sms.RefererSenderEnum
     */
    export type RefererSenderEnum = "custom" | "domain" | "line" | "nic" | "owner" | "virtual"
    /**
     * A structure describing how to manage an sms Response
     * interface fullName: sms.Response.Response
     */
    export interface Response {
        cgiUrl?: string;
        responseType: sms.ResponseTypeEnum;
        text?: string;
        trackingDefaultSmsSender?: string;
        trackingOptions?: sms.ResponseTrackingOptions[];
    }
    /**
     * The tracking media response
     * type fullname: sms.ResponseTrackingMediaEnum
     */
    export type ResponseTrackingMediaEnum = "email" | "sms" | "voice"
    /**
     * The tracking media response
     * interface fullName: sms.ResponseTrackingOptions.ResponseTrackingOptions
     */
    export interface ResponseTrackingOptions {
        media: sms.ResponseTrackingMediaEnum;
        sender: string;
        target: string;
    }
    /**
     * Response type
     * type fullname: sms.ResponseTypeEnum
     */
    export type ResponseTypeEnum = "cgi" | "none" | "text"
    /**
     * Restriction type used by the operator to filter sms.
     * type fullname: sms.RestrictionCodeEnum
     */
    export type RestrictionCodeEnum = "ALPHA" | "BAD_DLR" | "BLOCKED" | "CODING" | "DLR" | "FLASHONLY" | "MSISDN"
    /**
     * SMS senders
     * interface fullName: sms.Sender.Sender
     */
    export interface Sender {
        comment?: string;
        description: string;
        referer: sms.RefererSenderEnum;
        sender: string;
        status: sms.StatusSenderEnum;
        type?: sms.TypeSenderEnum;
        validationMedia?: string;
    }
    /**
     * A structure describing all information about senders available
     * interface fullName: sms.SenderAvailable.SenderAvailable
     */
    export interface SenderAvailable {
        referer: sms.SenderRefererEnum;
        sender: string;
    }
    /**
     * SMS senders' document
     * interface fullName: sms.SenderDocument.SenderDocument
     */
    export interface SenderDocument {
        createdAt: string;
        description?: string;
        documentID: string;
        getUrl: string;
        name: string;
        putUrl?: string;
        size: number;
    }
    /**
     * The referer of the available sender
     * type fullname: sms.SenderRefererEnum
     */
    export type SenderRefererEnum = "domain" | "nichandle"
    /**
     * SMPP settings
     * interface fullName: sms.Settings.Settings
     */
    export interface Settings {
        endpoints: sms.SettingsEndpoints[];
        status: sms.SettingsStatusEnum;
        throughput: number;
        windowing: number;
    }
    /**
     * SMPP Settings Endpoints
     * interface fullName: sms.SettingsEndpoints.SettingsEndpoints
     */
    export interface SettingsEndpoints {
        secured: string;
        unsecured: string;
    }
    /**
     * Smpp Settings Statuses
     * type fullname: sms.SettingsStatusEnum
     */
    export type SettingsStatusEnum = "DELETED" | "ERROR" | "SUCCESS" | "UNKNOWN" | "UPDATING_IP" | "WAITING_IP"
    /**
     * A structure describing all information about quota informations
     * interface fullName: sms.SmsSendingReport.SmsSendingReport
     */
    export interface SmsSendingReport {
        ids: number[];
        invalidReceivers: string[];
        totalCreditsRemoved: number;
        validReceivers: string[];
    }
    /**
     * Account status
     * type fullname: sms.StatusAccountEnum
     */
    export type StatusAccountEnum = "disable" | "enable"
    /**
     * All existing status for a given referer
     * type fullname: sms.StatusSenderEnum
     */
    export type StatusSenderEnum = "disable" | "enable" | "refused" | "waitingValidation"
    /**
     * The media support used to be contacted in case of alert
     * type fullname: sms.SupportEnum
     */
    export type SupportEnum = "both" | "mail" | "sms"
    /**
     * Operation on a SMS service
     * interface fullName: sms.Task.Task
     */
    export interface Task {
        function: sms.TodoGeneralPublicFunctionsEnum;
        status: telephony.TaskStatusEnum;
        step: sms.TodoGeneralPublicStepsEnum;
        taskId: number;
    }
    /**
     * Sms template for moderation (Needed to send in US country)
     * interface fullName: sms.TemplateControl.TemplateControl
     */
    export interface TemplateControl {
        activity: sms.TypeTemplateEnum;
        comment: string;
        datetime: string;
        description: string;
        message: string;
        name: string;
        status: sms.StatusSenderEnum;
    }
    /**
     * A structure describing all information about templates informations
     * interface fullName: sms.Templates.Templates
     */
    export interface Templates {
        customizedEmailMode: boolean;
        customizedSmsMode: boolean;
        emailBody?: string;
        emailFrom?: string;
        emailSubject?: string;
        smsBody?: string;
    }
    /**
     * The task function
     * type fullname: sms.TodoGeneralPublicFunctionsEnum
     */
    export type TodoGeneralPublicFunctionsEnum = "cleanSmsReceivers"
    /**
     * The task step
     * type fullname: sms.TodoGeneralPublicStepsEnum
     */
    export type TodoGeneralPublicStepsEnum = "checkOrder" | "createHlrs" | "finishing" | "sendMailReport" | "starting" | "waitForHlrs"
    /**
     * All existing types for a given sender
     * type fullname: sms.TypeSenderEnum
     */
    export type TypeSenderEnum = "alpha" | "numeric" | "shortcode" | "virtual"
    /**
     * All existing types for a given template
     * type fullname: sms.TypeTemplateEnum
     */
    export type TypeTemplateEnum = "alerting" | "authentification" | "transactional"
    /**
     * SMS users
     * interface fullName: sms.User.User
     */
    export interface User {
        alertThresholdInformations: sms.AlertThreshold;
        callBack?: string;
        ipRestrictions: string[];
        login: string;
        password: string;
        quotaInformations: sms.Quota;
        stopCallBack?: string;
    }
    /**
     * Virtual numbers
     * interface fullName: sms.VirtualNumber.VirtualNumber
     */
    export interface VirtualNumber {
        countryCode: sms.VirtualNumberIsoCountryCodeEnum;
        number: string;
    }
    /**
     * Virtual numbers
     * interface fullName: sms.VirtualNumberGenericService.VirtualNumberGenericService
     */
    export interface VirtualNumberGenericService {
        countryCode: sms.VirtualNumberIsoCountryCodeEnum;
        number: string;
    }
    /**
     * The ISO formated country code of the number
     * type fullname: sms.VirtualNumberIsoCountryCodeEnum
     */
    export type VirtualNumberIsoCountryCodeEnum = "be" | "ch" | "de" | "es" | "fr" | "uk"
    /**
     * Sms job
     * interface fullName: sms.VirtualNumberJob.VirtualNumberJob
     */
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
    /**
     * Export file format
     * type fullname: telephony.ContactsExportFormatsEnum
     */
    export type ContactsExportFormatsEnum = "csv"
    /**
     * Telephony API related file hosted
     * interface fullName: telephony.PcsFile.PcsFile
     */
    export interface PcsFile {
        filename: string;
        status: telephony.PcsFileStatusEnum;
        url: string;
        urlExpirationDatetime: string;
    }
    /**
     * File providing task status
     * type fullname: telephony.PcsFileStatusEnum
     */
    export type PcsFileStatusEnum = "doing" | "done" | "error" | "todo"
    /**
     * Operation on a telephony service
     * interface fullName: telephony.Task.Task
     */
    export interface Task {
        action: string;
        message?: string;
        objectCreated?: string;
        serviceType: string;
        status: telephony.TaskStatusEnum;
        taskId: number;
    }
    /**
     * Task status
     * type fullname: telephony.TaskStatusEnum
     */
    export type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo"
}

/**
 * END API /sms Models
 */
export function proxySms(ovhEngine: OvhRequestable): Sms {
    return buildOvhProxy(ovhEngine, '/sms');
}
export default proxySms;
/**
 * Api model for /sms
 */
export interface Sms {
    /**
     * List available services
     * GET /sms
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    estimate: {
        /**
         * Get the encoding, length and number of SMS parts of a text message
         * POST /sms/estimate
         */
        $post(params: { message: string, noStopClause: boolean, senderType: sms.TypeSenderEnum }): Promise<sms.JobEstimate>;
    }
    ptts: {
        /**
         * Get informations about the given ptt code
         * GET /sms/ptts
         */
        $get(params: { ptt: number }): Promise<sms.PttDetails>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    rates: {
        destinations: {
            /**
             * Get the prices and credits to send a SMS towards given country
             * GET /sms/rates/destinations
             */
            $get(params: { billingCountry?: sms.BillingCountryEnum, country: sms.CountryEnum }): Promise<sms.DestinationRates>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        packs: {
            /**
             * Get the prices and credits of all the SMS packs with informations about the destination country
             * GET /sms/rates/packs
             */
            $get(params: { billingCountry?: sms.BillingCountryEnum, country: sms.CountryEnum }): Promise<sms.PackDetails[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    virtualNumbers: {
        /**
         * List available services
         * GET /sms/virtualNumbers
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(number: string): {
            /**
             * Get this object properties
             * GET /sms/virtualNumbers/{number}
             */
            $get(): Promise<sms.VirtualNumberGenericService>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /sms/virtualNumbers/{number}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /sms/virtualNumbers/{number}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
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
         * GET /sms/{serviceName}
         */
        $get(): Promise<sms.Account>;
        /**
         * Alter this object properties
         * PUT /sms/{serviceName}
         */
        $put(params?: { automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum, callBack?: string, channel?: sms.ChannelEnum, creditThresholdForAutomaticRecredit?: number, creditsHoldByQuota?: number, creditsLeft?: number, description?: string, name?: string, smpp?: boolean, smsResponse?: sms.Response, status?: sms.StatusAccountEnum, stopCallBack?: string, templates?: sms.Templates, userQuantityWithQuota?: number }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        batches: {
            /**
             * Get batches list
             * GET /sms/{serviceName}/batches
             */
            $get(): Promise<sms.Batch[]>;
            /**
             * Create a batch
             * POST /sms/{serviceName}/batches
             */
            $post(params: { class?: sms.BatchClassEnum, deferred?: string, from?: string, message: string, name?: string, noStop?: boolean, senderForResponse?: boolean, slotID?: string, tag?: string, to?: string[] }): Promise<sms.Batch>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: string): {
                /**
                 * Get a batch
                 * GET /sms/{serviceName}/batches/{id}
                 */
                $get(): Promise<sms.Batch>;
                /**
                 * Update a batch
                 * PUT /sms/{serviceName}/batches/{id}
                 */
                $put(params: { name: string }): Promise<sms.Batch>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                cancel: {
                    /**
                     * Cancel a deferred batch (no SMS must have been sent)
                     * POST /sms/{serviceName}/batches/{id}/cancel
                     */
                    $post(): Promise<sms.Batch>;
                }
                statistics: {
                    /**
                     * Batch's statistics
                     * GET /sms/{serviceName}/batches/{id}/statistics
                     */
                    $get(): Promise<sms.BatchStatistics>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        blacklists: {
            /**
             * Numbers blacklisted associated to the sms account
             * GET /sms/{serviceName}/blacklists
             */
            $get(params?: { batchID?: string, smsOutgoingID?: number }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(number: string): {
                /**
                 * Delete the blacklisted sms number given
                 * DELETE /sms/{serviceName}/blacklists/{number}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/blacklists/{number}
                 */
                $get(): Promise<sms.Blacklist>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        document: {
            /**
             * Get the /me/document id generated
             * GET /sms/{serviceName}/document
             */
            $get(params: { batchID?: string, 'creationDatetime.from'?: string, 'creationDatetime.to'?: string, tag?: string, wayType: sms.DocumentWayTypeEnum }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        exceptions: {
            /**
             * Describe filter exceptions in sms sending from a specific receiver.
             * GET /sms/{serviceName}/exceptions
             */
            $get(params: { receiver: string }): Promise<sms.Exception[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        hlr: {
            /**
             * Home Location Register informations. Give informations about a given cellular phone.
             * GET /sms/{serviceName}/hlr
             */
            $get(): Promise<number[]>;
            /**
             * Add one or several sending hlr lookup request
             * POST /sms/{serviceName}/hlr
             */
            $post(params?: { receivers?: string[], receiversDocumentUrl?: string }): Promise<sms.SmsSendingReport>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/hlr/{id}
                 */
                $get(): Promise<sms.HlrLookupNumber>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                operator: {
                    /**
                     * Get this object properties
                     * GET /sms/{serviceName}/hlr/{id}/operator
                     */
                    $get(): Promise<sms.Hlr>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        incoming: {
            /**
             * Sms received associated to the sms account
             * GET /sms/{serviceName}/incoming
             */
            $get(params?: { 'creationDatetime.from'?: string, 'creationDatetime.to'?: string, sender?: string, tag?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete the sms incoming history given
                 * DELETE /sms/{serviceName}/incoming/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/incoming/{id}
                 */
                $get(): Promise<sms.Incoming>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        jobs: {
            /**
             * Sms in pending associated to the sms account
             * GET /sms/{serviceName}/jobs
             */
            $get(): Promise<number[]>;
            /**
             * Add one or several sending jobs
             * POST /sms/{serviceName}/jobs
             */
            $post(params: { charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number }): Promise<sms.SmsSendingReport>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete the sms job given (stop sending)
                 * DELETE /sms/{serviceName}/jobs/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/jobs/{id}
                 */
                $get(): Promise<sms.Job>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        outgoing: {
            /**
             * Get SMS list
             * GET /sms/{serviceName}/outgoing
             */
            $get(params?: { batchID?: string, 'creationDatetime.from'?: string, 'creationDatetime.to'?: string, deliveryReceipt?: number, differedDelivery?: number, messageID?: string, ptt?: number, receiver?: string, sender?: string, tag?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete outgoing SMS from history
                 * DELETE /sms/{serviceName}/outgoing/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get SMS details
                 * GET /sms/{serviceName}/outgoing/{id}
                 */
                $get(): Promise<sms.Outgoing>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                hlr: {
                    /**
                     * Get this object properties
                     * GET /sms/{serviceName}/outgoing/{id}/hlr
                     */
                    $get(): Promise<sms.Hlr>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        phonebooks: {
            /**
             * Return phonebooks associated to this account
             * GET /sms/{serviceName}/phonebooks
             */
            $get(): Promise<string[]>;
            /**
             * Add a phonebook. Return the bookKey.
             * POST /sms/{serviceName}/phonebooks
             */
            $post(params: { name: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(bookKey: string): {
                /**
                 * Delete a phonebook
                 * DELETE /sms/{serviceName}/phonebooks/{bookKey}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/phonebooks/{bookKey}
                 */
                $get(): Promise<sms.Phonebook>;
                /**
                 * Alter this object properties
                 * PUT /sms/{serviceName}/phonebooks/{bookKey}
                 */
                $put(params?: { bookKey?: string, name?: string, phoneKey?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                export: {
                    /**
                     * Export the phonebook's contacts
                     * GET /sms/{serviceName}/phonebooks/{bookKey}/export
                     */
                    $get(params: { format: telephony.ContactsExportFormatsEnum }): Promise<telephony.PcsFile>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                import: {
                    /**
                     * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
                     * POST /sms/{serviceName}/phonebooks/{bookKey}/import
                     */
                    $post(params: { documentId: string }): Promise<telephony.Task>;
                }
                phonebookContact: {
                    /**
                     * Phonebook contacts
                     * GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a phonebook contact. Return identifier of the phonebook contact.
                     * POST /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
                     */
                    $post(params: { group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string }): Promise<number>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete a phonebook contact
                         * DELETE /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                         */
                        $get(): Promise<sms.PhonebookContact>;
                        /**
                         * Alter this object properties
                         * PUT /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                         */
                        $put(params?: { group?: string, homeMobile?: string, homePhone?: string, id?: number, name?: string, surname?: string, workMobile?: string, workPhone?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        receivers: {
            /**
             * Receivers preloaded from text or csv document file
             * GET /sms/{serviceName}/receivers
             */
            $get(): Promise<number[]>;
            /**
             * Add a new document of csv receivers
             * POST /sms/{serviceName}/receivers
             */
            $post(params: { autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number }): Promise<sms.Receiver>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(slotId: number): {
                /**
                 * Delete the document from the slot
                 * DELETE /sms/{serviceName}/receivers/{slotId}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/receivers/{slotId}
                 */
                $get(): Promise<sms.Receiver>;
                /**
                 * Alter this object properties
                 * PUT /sms/{serviceName}/receivers/{slotId}
                 */
                $put(params?: { autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number, slotId?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                clean: {
                    /**
                     * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
                     * POST /sms/{serviceName}/receivers/{slotId}/clean
                     */
                    $post(params: { freemium: boolean, priceOnly: boolean }): Promise<sms.ReceiversAsynchronousCleanReport>;
                }
                csv: {
                    /**
                     * Get the document data container
                     * GET /sms/{serviceName}/receivers/{slotId}/csv
                     */
                    $get(): Promise<string>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        seeOffers: {
            /**
             * Describe SMS offers available.
             * GET /sms/{serviceName}/seeOffers
             */
            $get(params: { countryCurrencyPrice: reference.CountryEnum, countryDestination: sms.CountryEnum, quantity: sms.PackQuantityEnum }): Promise<sms.PackOffer[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        senders: {
            /**
             * Senders allowed associated to the sms account
             * GET /sms/{serviceName}/senders
             */
            $get(): Promise<string[]>;
            /**
             * Create the sms sender given
             * POST /sms/{serviceName}/senders
             */
            $post(params: { description?: string, reason?: string, sender: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(sender: string): {
                /**
                 * Delete the sms sender given
                 * DELETE /sms/{serviceName}/senders/{sender}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/senders/{sender}
                 */
                $get(): Promise<sms.Sender>;
                /**
                 * Alter this object properties
                 * PUT /sms/{serviceName}/senders/{sender}
                 */
                $put(params?: { comment?: string, description?: string, referer?: sms.RefererSenderEnum, sender?: string, status?: sms.StatusSenderEnum, type?: sms.TypeSenderEnum, validationMedia?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                documents: {
                    /**
                     * Documents linked to SMS sender for validation purpose
                     * GET /sms/{serviceName}/senders/{sender}/documents
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new empty document
                     * POST /sms/{serviceName}/senders/{sender}/documents
                     */
                    $post(params: { description?: string, name: string }): Promise<sms.SenderDocument>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(documentID: string): {
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/senders/{sender}/documents/{documentID}
                         */
                        $get(): Promise<sms.SenderDocument>;
                        /**
                         * Alter this object properties
                         * PUT /sms/{serviceName}/senders/{sender}/documents/{documentID}
                         */
                        $put(params?: { createdAt?: string, description?: string, documentID?: string, getUrl?: string, name?: string, putUrl?: string, size?: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                validate: {
                    /**
                     * Validate a given sender with an activation code.
                     * POST /sms/{serviceName}/senders/{sender}/validate
                     */
                    $post(params: { code: string }): Promise<void>;
                }
            };
        }
        sendersAvailableForValidation: {
            /**
             * The senders that are attached to your personal informations or OVH services and that can be automatically validated
             * GET /sms/{serviceName}/sendersAvailableForValidation
             */
            $get(params?: { referer?: sms.SenderRefererEnum }): Promise<sms.SenderAvailable[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /sms/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /sms/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        smpp: {
            allowedIPs: {
                /**
                 * Get SMPP allowed IPs
                 * GET /sms/{serviceName}/smpp/allowedIPs
                 */
                $get(): Promise<string[]>;
                /**
                 * Add or remove allowed IPs
                 * PUT /sms/{serviceName}/smpp/allowedIPs
                 */
                $put(params: { action: sms.AllowedIPsActionEnum, ips: string[] }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            password: {
                /**
                 * Renew SMPP password
                 * POST /sms/{serviceName}/smpp/password
                 */
                $post(): Promise<void>;
            }
            settings: {
                /**
                 * Get SMPP settings
                 * GET /sms/{serviceName}/smpp/settings
                 */
                $get(): Promise<sms.Settings>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        task: {
            /**
             * Operations on a SMS service
             * GET /sms/{serviceName}/task
             */
            $get(params?: { status?: telephony.TaskStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/task/{taskId}
                 */
                $get(): Promise<sms.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        templatesControl: {
            /**
             * Template pattern filled up for moderation (Needed to send in US country)
             * GET /sms/{serviceName}/templatesControl
             */
            $get(): Promise<string[]>;
            /**
             * Create the sms template control given
             * POST /sms/{serviceName}/templatesControl
             */
            $post(params: { activity: sms.TypeTemplateEnum, description?: string, message: string, name: string, reason?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(name: string): {
                /**
                 * Delete the sms template control
                 * DELETE /sms/{serviceName}/templatesControl/{name}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/templatesControl/{name}
                 */
                $get(): Promise<sms.TemplateControl>;
                /**
                 * Alter this object properties
                 * PUT /sms/{serviceName}/templatesControl/{name}
                 */
                $put(params?: { activity?: sms.TypeTemplateEnum, comment?: string, datetime?: string, description?: string, message?: string, name?: string, status?: sms.StatusSenderEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                relaunchValidation: {
                    /**
                     * Attempt a new validation after moderation refusal
                     * POST /sms/{serviceName}/templatesControl/{name}/relaunchValidation
                     */
                    $post(params: { description: string, message: string }): Promise<void>;
                }
            };
        }
        transferCredits: {
            /**
             * Credit transfer between two sms accounts.
             * POST /sms/{serviceName}/transferCredits
             */
            $post(params: { credits: number, smsAccountTarget: string }): Promise<void>;
        }
        users: {
            /**
             * Users associated to the sms account
             * GET /sms/{serviceName}/users
             */
            $get(): Promise<string[]>;
            /**
             * Create a new user for an sms account
             * POST /sms/{serviceName}/users
             */
            $post(params: { login: string, password: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(login: string): {
                /**
                 * Delete the sms user given
                 * DELETE /sms/{serviceName}/users/{login}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/users/{login}
                 */
                $get(): Promise<sms.User>;
                /**
                 * Alter this object properties
                 * PUT /sms/{serviceName}/users/{login}
                 */
                $put(params?: { alertThresholdInformations?: sms.AlertThreshold, callBack?: string, ipRestrictions?: string[], login?: string, password?: string, quotaInformations?: sms.Quota, stopCallBack?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                document: {
                    /**
                     * Get the /me/document id generated
                     * GET /sms/{serviceName}/users/{login}/document
                     */
                    $get(params: { 'creationDatetime.from'?: string, 'creationDatetime.to'?: string, tag?: string, wayType: sms.DocumentWayTypeEnum }): Promise<string>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                incoming: {
                    /**
                     * Sms received associated to the sms user
                     * GET /sms/{serviceName}/users/{login}/incoming
                     */
                    $get(params?: { sender?: string, tag?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the sms incoming history given
                         * DELETE /sms/{serviceName}/users/{login}/incoming/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/users/{login}/incoming/{id}
                         */
                        $get(): Promise<sms.Incoming>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                jobs: {
                    /**
                     * Sms in pending associated to the sms user
                     * GET /sms/{serviceName}/users/{login}/jobs
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Add one or several sending jobs
                     * POST /sms/{serviceName}/users/{login}/jobs
                     */
                    $post(params: { charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number }): Promise<sms.SmsSendingReport>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the sms job given (stop sending)
                         * DELETE /sms/{serviceName}/users/{login}/jobs/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/users/{login}/jobs/{id}
                         */
                        $get(): Promise<sms.Job>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                outgoing: {
                    /**
                     * Sms sent associated to the sms user
                     * GET /sms/{serviceName}/users/{login}/outgoing
                     */
                    $get(params?: { deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the sms outgoing history given
                         * DELETE /sms/{serviceName}/users/{login}/outgoing/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/users/{login}/outgoing/{id}
                         */
                        $get(): Promise<sms.Outgoing>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        hlr: {
                            /**
                             * Get this object properties
                             * GET /sms/{serviceName}/users/{login}/outgoing/{id}/hlr
                             */
                            $get(): Promise<sms.Hlr>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
                receivers: {
                    /**
                     * Receivers preloaded from text or csv document file
                     * GET /sms/{serviceName}/users/{login}/receivers
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Add a new document of csv receivers
                     * POST /sms/{serviceName}/users/{login}/receivers
                     */
                    $post(params: { autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number }): Promise<sms.Receiver>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(slotId: number): {
                        /**
                         * Delete the document from the slot
                         * DELETE /sms/{serviceName}/users/{login}/receivers/{slotId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/users/{login}/receivers/{slotId}
                         */
                        $get(): Promise<sms.Receiver>;
                        /**
                         * Alter this object properties
                         * PUT /sms/{serviceName}/users/{login}/receivers/{slotId}
                         */
                        $put(params?: { autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number, slotId?: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        clean: {
                            /**
                             * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
                             * POST /sms/{serviceName}/users/{login}/receivers/{slotId}/clean
                             */
                            $post(params: { freemium: boolean, priceOnly: boolean }): Promise<sms.ReceiversAsynchronousCleanReport>;
                        }
                        csv: {
                            /**
                             * Get the document data container
                             * GET /sms/{serviceName}/users/{login}/receivers/{slotId}/csv
                             */
                            $get(): Promise<string>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        virtualNumbers: {
            /**
             * Virtual numbers associated to the sms account
             * GET /sms/{serviceName}/virtualNumbers
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(number: string): {
                /**
                 * Get this object properties
                 * GET /sms/{serviceName}/virtualNumbers/{number}
                 */
                $get(): Promise<sms.VirtualNumber>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                chatAccess: {
                    /**
                     * Delete the given web access
                     * DELETE /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                     */
                    $get(): Promise<sms.ChatAccess>;
                    /**
                     * Create a new web access for this ressource
                     * POST /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                     */
                    $post(): Promise<sms.ChatAccess>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                incoming: {
                    /**
                     * Sms received associated to the sms account
                     * GET /sms/{serviceName}/virtualNumbers/{number}/incoming
                     */
                    $get(params?: { 'creationDatetime.from'?: string, 'creationDatetime.to'?: string, sender?: string, tag?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the sms incoming history given
                         * DELETE /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}
                         */
                        $get(): Promise<sms.Incoming>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                jobs: {
                    /**
                     * Sms in pending associated to the sms account
                     * GET /sms/{serviceName}/virtualNumbers/{number}/jobs
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Add one or several sending jobs
                     * POST /sms/{serviceName}/virtualNumbers/{number}/jobs
                     */
                    $post(params: { charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, tag?: string, validityPeriod?: number }): Promise<sms.SmsSendingReport>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the sms job given (stop sending)
                         * DELETE /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
                         */
                        $get(): Promise<sms.VirtualNumberJob>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                outgoing: {
                    /**
                     * Sms sent associated to the sms account
                     * GET /sms/{serviceName}/virtualNumbers/{number}/outgoing
                     */
                    $get(params?: { 'creationDatetime.from'?: string, 'creationDatetime.to'?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the sms outgoing history given
                         * DELETE /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}
                         */
                        $get(): Promise<sms.Outgoing>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        hlr: {
                            /**
                             * Get this object properties
                             * GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr
                             */
                            $get(): Promise<sms.Hlr>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
    };
}

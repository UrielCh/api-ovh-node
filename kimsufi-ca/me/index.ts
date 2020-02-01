import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /me Models
 * Source: https://ca.api.kimsufi.com/1.0/me.json
 */
export namespace agreements {
    // type fullname: agreements.AgreementStateEnum
    export type AgreementStateEnum = "ko" | "obsolete" | "ok" | "todo"
    // interface fullName: agreements.Contract.Contract
    export interface Contract {
        active: boolean;
        date: string;
        name: string;
        pdf: string;
        text: string;
    }
    // interface fullName: agreements.ContractAgreement.ContractAgreement
    export interface ContractAgreement {
        agreed: agreements.AgreementStateEnum;
        contractId: number;
        date: string;
        id: number;
    }
}
export namespace api {
    // interface fullName: api.Application.Application
    export interface Application {
        applicationId: number;
        applicationKey: string;
        description: string;
        name: string;
        status: api.ApplicationStatusEnum;
    }
    // type fullname: api.ApplicationStatusEnum
    export type ApplicationStatusEnum = "active" | "blocked" | "inactive" | "trusted"
    // interface fullName: api.Credential.Credential
    export interface Credential {
        allowedIPs?: string[];
        applicationId: number;
        creation: string;
        credentialId: number;
        expiration?: string;
        lastUse?: string;
        ovhSupport: boolean;
        rules: auth.AccessRule[];
        status: auth.CredentialStateEnum;
    }
}
export namespace auth {
    // interface fullName: auth.AccessRule.AccessRule
    export interface AccessRule {
        method: http.MethodEnum;
        path: string;
    }
    // type fullname: auth.CredentialStateEnum
    export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"
}
export namespace billing {
    // interface fullName: billing.AutomaticPaymentMean.AutomaticPaymentMean
    export interface AutomaticPaymentMean {
        bankAccount: boolean;
        creditCard: boolean;
        deferredPaymentAccount: boolean;
        paypal: boolean;
    }
    // interface fullName: billing.BankAccount.BankAccount
    export interface BankAccount {
        bic: string;
        creationDate: string;
        defaultPaymentMean: boolean;
        description?: string;
        iban: string;
        icon?: billing.paymentMethod.IconData;
        id: number;
        mandateSignatureDate?: string;
        ownerAddress: string;
        ownerName: string;
        state: billing.BankAccountStateEnum;
        uniqueReference: string;
        validationDocumentLink?: string;
    }
    // type fullname: billing.BankAccountStateEnum
    export type BankAccountStateEnum = "blockedForIncidents" | "pendingValidation" | "valid"
    // interface fullName: billing.Bill.Bill
    export interface Bill {
        billId: string;
        date: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        priceWithTax: orderPrice;
        priceWithoutTax: orderPrice;
        tax: orderPrice;
        url: string;
    }
    // interface fullName: billing.BillDetail.BillDetail
    export interface BillDetail {
        billDetailId: string;
        description: string;
        domain: string;
        periodEnd?: string;
        periodStart?: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    // interface fullName: billing.CreditBalance.CreditBalance
    export interface CreditBalance {
        amount: orderPrice;
        balanceName: string;
    }
    // interface fullName: billing.CreditCard.CreditCard
    export interface CreditCard {
        defaultPaymentMean: boolean;
        description?: string;
        expirationDate: string;
        icon?: billing.paymentMethod.IconData;
        id: number;
        number: string;
        state: billing.CreditCardStateEnum;
        threeDsValidated: boolean;
        type: string;
    }
    // type fullname: billing.CreditCardStateEnum
    export type CreditCardStateEnum = "expired" | "tooManyFailures" | "valid"
    // interface fullName: billing.DeferredPaymentAccount.DeferredPaymentAccount
    export interface DeferredPaymentAccount {
        creationDate: string;
        defaultPaymentMean: boolean;
        description?: string;
        icon?: billing.paymentMethod.IconData;
        id: number;
        label?: string;
        state: billing.DeferredPaymentAccountStatusEnum;
    }
    // type fullname: billing.DeferredPaymentAccountStatusEnum
    export type DeferredPaymentAccountStatusEnum = "valid"
    // interface fullName: billing.Deposit.Deposit
    export interface Deposit {
        amount: orderPrice;
        date: string;
        depositId: string;
        orderId: number;
        password: string;
        paymentInfo?: debt.associatedObject.PaymentInfo;
        pdfUrl: string;
        url: string;
    }
    // interface fullName: billing.DepositDetail.DepositDetail
    export interface DepositDetail {
        depositDetailId: string;
        description: string;
        domain: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    // interface fullName: billing.FidelityAccount.FidelityAccount
    export interface FidelityAccount {
        alertThreshold?: number;
        balance: number;
        canBeCredited: boolean;
        lastUpdate: string;
        openDate: string;
    }
    // interface fullName: billing.FidelityMovement.FidelityMovement
    export interface FidelityMovement {
        amount: number;
        balance: number;
        date: string;
        description: string;
        movementId: number;
        operation: billing.fidelityAccount.OperationEnum;
        order: number;
        previousBalance: number;
    }
    // interface fullName: billing.ItemDetail.ItemDetail
    export interface ItemDetail {
        order: billing.ItemDetail.Order;
    }
    export namespace ItemDetail {
        // interface fullName: billing.ItemDetail.Order.Order
        export interface Order {
            action?: billing.ItemDetail.OrderActionEnum;
            configurations: billing.ItemDetail.OrderConfiguration[];
            plan: billing.ItemDetail.OrderPlan;
        }
        // type fullname: billing.ItemDetail.OrderActionEnum
        export type OrderActionEnum = "consumption" | "installation" | "renew" | "upgrade"
        // interface fullName: billing.ItemDetail.OrderConfiguration.OrderConfiguration
        export interface OrderConfiguration {
            label: string;
            value: string;
        }
        // interface fullName: billing.ItemDetail.OrderPlan.OrderPlan
        export interface OrderPlan {
            code?: string;
            duration?: string;
            pricingMode?: string;
            product: billing.ItemDetail.OrderPlanProduct;
            quantity?: number;
        }
        // interface fullName: billing.ItemDetail.OrderPlanProduct.OrderPlanProduct
        export interface OrderPlanProduct {
            name?: string;
        }
    }
    // interface fullName: billing.Movement.Movement
    export interface Movement {
        amount: orderPrice;
        balance: orderPrice;
        date: string;
        description: string;
        movementId: number;
        operation: billing.ovhAccount.OperationEnum;
        order: number;
        previousBalance: orderPrice;
    }
    // interface fullName: billing.Order.Order
    export interface Order {
        date?: string;
        expirationDate?: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        priceWithTax: orderPrice;
        priceWithoutTax: orderPrice;
        retractionDate?: string;
        tax: orderPrice;
        url: string;
    }
    // interface fullName: billing.OrderDetail.OrderDetail
    export interface OrderDetail {
        cancelled: boolean;
        description: string;
        domain: string;
        orderDetailId: number;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    // interface fullName: billing.OvhAccount.OvhAccount
    export interface OvhAccount {
        alertThreshold?: number;
        balance: orderPrice;
        canBeCredited: boolean;
        isActive: boolean;
        lastUpdate: string;
        openDate: string;
        ovhAccountId: string;
    }
    // interface fullName: billing.Payment.Payment
    export interface Payment {
        paymentDate: string;
        paymentIdentifier?: string;
        paymentType: billing.PaymentMeanEnum;
    }
    // type fullname: billing.PaymentMeanEnum
    export type PaymentMeanEnum = "cash" | "chargeback" | "cheque" | "creditAccount" | "creditCard" | "debtAccount" | "deposit" | "digitalLaunchPad" | "edinar" | "fidelityPoints" | "free" | "ideal" | "incubatorAccount" | "mandat" | "multibanco" | "none" | "ovhAccount" | "paymentMandate" | "paypal" | "payu" | "platnosci" | "refund" | "transfer" | "withdrawal"
    // interface fullName: billing.PaymentMeanValidation.PaymentMeanValidation
    export interface PaymentMeanValidation {
        id: number;
        submitUrl?: string;
        url: string;
        validationType: billing.PaymentMeanValidationType;
    }
    // type fullname: billing.PaymentMeanValidationType
    export type PaymentMeanValidationType = "creditAccount" | "documentToSend" | "simpleValidation"
    // interface fullName: billing.PaymentMethod.PaymentMethod
    export interface PaymentMethod {
        billingContactId: number;
        creationDate: string;
        default?: boolean;
        description: string;
        id: number;
        paymentSubType?: billing.paymentMethod.PaymentSubTypeEnum;
        paymentType: billing.paymentMethod.PaymentTypeEnum;
        publicLabel: string;
        status: billing.paymentMethod.StatusEnum;
    }
    // interface fullName: billing.Paypal.Paypal
    export interface Paypal {
        agreementId: string;
        creationDate: string;
        defaultPaymentMean: boolean;
        description?: string;
        email: string;
        icon?: billing.paymentMethod.IconData;
        id: number;
        state: billing.PaypalStateEnum;
    }
    // type fullname: billing.PaypalStateEnum
    export type PaypalStateEnum = "tooManyFailures" | "valid"
    // interface fullName: billing.Refund.Refund
    export interface Refund {
        date: string;
        orderId: number;
        originalBillId?: string;
        password: string;
        pdfUrl: string;
        priceWithTax: orderPrice;
        priceWithoutTax: orderPrice;
        refundId: string;
        tax: orderPrice;
        url: string;
    }
    // type fullname: billing.ReusablePaymentMeanEnum
    export type ReusablePaymentMeanEnum = "CREDIT_CARD" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL" | "bankAccount" | "creditCard" | "fidelityAccount" | "ovhAccount" | "paypal"
    // interface fullName: billing.SlaOperation.SlaOperation
    export interface SlaOperation {
        date: string;
        description: string;
        endDate?: string;
        id: number;
        name: string;
        startDate: string;
    }
    // interface fullName: billing.SlaOperationService.SlaOperationService
    export interface SlaOperationService {
        description: string;
        serviceName: string;
        slaApplication: string;
        slaPlan: string;
    }
    // interface fullName: billing.VoucherAccount.VoucherAccount
    export interface VoucherAccount {
        balance: orderPrice;
        lastUpdate: string;
        openDate: string;
        voucherAccountId: string;
    }
    // interface fullName: billing.VoucherMovement.VoucherMovement
    export interface VoucherMovement {
        amount: orderPrice;
        balance: orderPrice;
        date: string;
        description: string;
        movementId: number;
        operation: billing.voucherAccount.OperationEnum;
        order: number;
        previousBalance: orderPrice;
    }
    // interface fullName: billing.Withdrawal.Withdrawal
    export interface Withdrawal {
        amount: orderPrice;
        country: string;
        date: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        url: string;
        withdrawalId: string;
    }
    // interface fullName: billing.WithdrawalDetail.WithdrawalDetail
    export interface WithdrawalDetail {
        description: string;
        domain: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
        withdrawalDetailId: string;
    }
    export namespace fidelityAccount {
        // type fullname: billing.fidelityAccount.OperationEnum
        export type OperationEnum = "bonus" | "cancel-bonus" | "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
    export namespace order {
        // interface fullName: billing.order.AssociatedObject.AssociatedObject
        export interface AssociatedObject {
            id?: string;
            type?: billing.order.associatedObject.TypeEnum;
        }
        // interface fullName: billing.order.FollowUp.FollowUp
        export interface FollowUp {
            history: billing.order.followUp.History[];
            status: billing.order.followUp.StatusEnum;
            step: billing.order.followUp.StepEnum;
        }
        // type fullname: billing.order.OrderStatusEnum
        export type OrderStatusEnum = "cancelled" | "cancelling" | "checking" | "delivered" | "delivering" | "documentsRequested" | "notPaid" | "unknown"
        // interface fullName: billing.order.PayWithPaymentMethod.PayWithPaymentMethod
        export interface PayWithPaymentMethod {
            id: number;
        }
        // interface fullName: billing.order.PaymentMean.PaymentMean
        export interface PaymentMean {
            fee: number;
            htmlForm?: string;
            httpMethod: string;
            logo?: string;
            parameters: billing.order.paymentMean.HttpParameter[];
            subType?: string;
            url: string;
        }
        // interface fullName: billing.order.PaymentMeans.PaymentMeans
        export interface PaymentMeans {
            creditCard?: billing.order.PaymentMean[];
            edinar?: billing.order.PaymentMean[];
            fidelityPoints?: billing.order.PaymentMean[];
            ideal?: billing.order.PaymentMean[];
            multibanco?: billing.order.PaymentMean[];
            ovhAccount?: billing.order.PaymentMean[];
            paypal?: billing.order.PaymentMean[];
            promotion?: billing.order.PaymentMean[];
        }
        // interface fullName: billing.order.PaymentMethods.PaymentMethods
        export interface PaymentMethods {
            available: payment.method.AvailablePaymentMethod[];
            registered: number[];
        }
        // interface fullName: billing.order.RegisteredPaymentMean.RegisteredPaymentMean
        export interface RegisteredPaymentMean {
            paymentMean: billing.ReusablePaymentMeanEnum;
        }
        // type fullname: billing.order.RetractionReasonEnum
        export type RetractionReasonEnum = "competitor" | "difficulty" | "expensive" | "other" | "performance" | "reliability" | "unused"
        export namespace associatedObject {
            // type fullname: billing.order.associatedObject.TypeEnum
            export type TypeEnum = "Bill" | "Deposit" | "Refund" | "Withdrawal"
        }
        export namespace followUp {
            // interface fullName: billing.order.followUp.History.History
            export interface History {
                date: string;
                description: string;
                label: billing.order.followUp.HistoryStatusEnum;
            }
            // type fullname: billing.order.followUp.HistoryStatusEnum
            export type HistoryStatusEnum = "DELIVERY" | "FRAUD_CHECK" | "FRAUD_DOCS_REQUESTED" | "FRAUD_MANUAL_REVIEW" | "FRAUD_REFUSED" | "INVOICE_IN_PROGRESS" | "INVOICE_SENT" | "ORDER_ACCEPTED" | "ORDER_STARTED" | "PAYMENT_CONFIRMED" | "PAYMENT_INITIATED" | "PAYMENT_RECEIVED" | "REGISTERED_PAYMENT_INITIATED"
            // type fullname: billing.order.followUp.StatusEnum
            export type StatusEnum = "DOING" | "DONE" | "ERROR" | "TODO"
            // type fullname: billing.order.followUp.StepEnum
            export type StepEnum = "AVAILABLE" | "DELIVERING" | "VALIDATED" | "VALIDATING"
        }
        export namespace paymentMean {
            // interface fullName: billing.order.paymentMean.HttpParameter.HttpParameter
            export interface HttpParameter {
                choice?: billing.order.paymentMean.HttpParameterChoice[];
                name: string;
                value?: string;
            }
            // interface fullName: billing.order.paymentMean.HttpParameterChoice.HttpParameterChoice
            export interface HttpParameterChoice {
                name: string;
                value: string;
            }
        }
    }
    export namespace ovhAccount {
        // type fullname: billing.ovhAccount.OperationEnum
        export type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
    export namespace paymentMethod {
        // interface fullName: billing.paymentMethod.IconData.IconData
        export interface IconData {
            data?: string;
            name?: string;
        }
        // type fullname: billing.paymentMethod.PaymentSubTypeEnum
        export type PaymentSubTypeEnum = "AMERICAN_EXPRESS" | "MASTERCARD" | "VISA"
        // type fullname: billing.paymentMethod.PaymentTypeEnum
        export type PaymentTypeEnum = "BANK_ACCOUNT" | "CREDIT_CARD" | "DEFERRED_PAYMENT_ACCOUNT" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL"
        // type fullname: billing.paymentMethod.StatusEnum
        export type StatusEnum = "BLOCKED" | "BLOCKED_BY_CUSTOMER" | "BROKEN" | "CANCELED" | "CANCELED_BY_CUSTOMER" | "CREATED" | "ERROR" | "EXPIRED" | "PAUSED" | "VALID" | "VALID_FOR_CREDIT"
    }
    export namespace voucherAccount {
        // type fullname: billing.voucherAccount.OperationEnum
        export type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
}
export namespace complexType {
    // interface fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace contact {
    // interface fullName: contact.Address.Address
    export interface Address {
        city: string;
        country: nichandle.CountryEnum;
        line1: string;
        line2?: string;
        line3?: string;
        otherDetails?: string;
        province?: string;
        zip: string;
    }
    // interface fullName: contact.Contact.Contact
    export interface Contact {
        address: contact.Address;
        birthCity?: string;
        birthCountry?: nichandle.CountryEnum;
        birthDay?: string;
        birthZip?: string;
        cellPhone?: string;
        companyNationalIdentificationNumber?: string;
        email: string;
        fax?: string;
        firstName: string;
        gender?: nichandle.GenderEnum;
        id: number;
        language: nichandle.LanguageEnum;
        lastName: string;
        legalForm: nichandle.LegalFormEnum;
        nationalIdentificationNumber?: string;
        nationality?: nichandle.CountryEnum;
        organisationName?: string;
        organisationType?: string;
        phone?: string;
        spareEmail?: string;
        vat?: string;
    }
    // interface fullName: contact.FieldInformation.FieldInformation
    export interface FieldInformation {
        fieldName: string;
        mandatory: boolean;
        readOnly: boolean;
    }
}
export namespace coreTypes {
    // type fullname: coreTypes.ContinentEnum
    export type ContinentEnum = "africa" | "antartica" | "asia" | "europe" | "north-america" | "oceania" | "south-america"
    // type fullname: coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace debt {
    // interface fullName: debt.Balance.Balance
    export interface Balance {
        active: boolean;
        dueAmount: orderPrice;
        pendingAmount: orderPrice;
        todoAmount: orderPrice;
        unmaturedAmount: orderPrice;
    }
    // interface fullName: debt.Debt.Debt
    export interface Debt {
        amount: orderPrice;
        date: string;
        debtId: number;
        dueAmount: orderPrice;
        dueDate?: string;
        orderId: number;
        pendingAmount: orderPrice;
        todoAmount: orderPrice;
        unmaturedAmount: orderPrice;
    }
    // interface fullName: debt.Operation.Operation
    export interface Operation {
        amount: orderPrice;
        date: string;
        depositOrderId: number;
        operationId: number;
        status: debt.entry.StatusEnum;
        type?: debt.entry.OperationEnum;
    }
    export namespace associatedObject {
        // interface fullName: debt.associatedObject.PaymentInfo.PaymentInfo
        export interface PaymentInfo {
            description?: string;
            paymentType: billing.PaymentMeanEnum;
            publicLabel?: string;
        }
        // type fullname: debt.associatedObject.TypeEnum
        export type TypeEnum = "Bill" | "DebtOperation" | "Deposit" | "Order" | "OvhAccountMovement" | "Refund" | "Withdrawal"
    }
    export namespace entry {
        // interface fullName: debt.entry.AssociatedObject.AssociatedObject
        export interface AssociatedObject {
            id?: string;
            paymentInfo?: debt.associatedObject.PaymentInfo;
            subId?: string;
            type?: debt.associatedObject.TypeEnum;
        }
        // type fullname: debt.entry.OperationEnum
        export type OperationEnum = "CANCEL" | "CASH_MANUAL" | "CHECK_MANUAL" | "CREDITCARD" | "CREDITCARD_AUTOMATIC" | "CREDITCARD_MANUAL" | "CREDIT_ACCOUNT_AUTOMATIC" | "EDINAR_MANUAL" | "IDEAL_MANUAL" | "MULTIBANCO_MANUAL" | "ORDER" | "PAYPAL_AUTOMATIC" | "PAYPAL_MANUAL" | "PAYU_MANUAL" | "RECOVERY_TRANSFER_AUTOMATIC" | "REFUND" | "REFUND_CHECK" | "REFUND_CREDITCARD" | "REFUND_CREDIT_ACCOUNT" | "REFUND_LOSS" | "REFUND_PAYPAL" | "REFUND_PAYU" | "REFUND_SEPA" | "REFUND_TRANSFER" | "REFUND_UNKNOWN" | "SEPA_AUTOMATIC" | "TRANSFER_MANUAL" | "UNPAID_CHECK" | "UNPAID_CREDITCARD" | "UNPAID_CREDIT_ACCOUNT" | "UNPAID_PAYPAL" | "UNPAID_SEPA" | "UNPAID_WITHDRAW" | "WARRANT_MANUAL" | "WITHDRAW_AUTOMATIC"
        // type fullname: debt.entry.StatusEnum
        export type StatusEnum = "CANCELLED" | "DONE" | "FAILED" | "PAID" | "PENDING" | "TODO"
    }
}
export namespace dedicated {
    // type fullname: dedicated.TemplateOsFileSystemEnum
    export type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs"
    // type fullname: dedicated.TemplateOsHardwareRaidEnum
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
    // type fullname: dedicated.TemplateOsLanguageEnum
    export type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK"
    // interface fullName: dedicated.TemplateOsProperties.TemplateOsProperties
    export interface TemplateOsProperties {
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    // type fullname: dedicated.TemplateOsTypeEnum
    export type TemplateOsTypeEnum = "bsd" | "linux" | "solaris" | "windows"
    // type fullname: dedicated.TemplateOsUsageEnum
    export type TemplateOsUsageEnum = "basic" | "customer" | "hosting" | "other" | "readyToUse" | "virtualisation"
    // type fullname: dedicated.TemplatePartitionTypeEnum
    export type TemplatePartitionTypeEnum = "logical" | "lv" | "primary"
    export namespace installationTemplate {
        // interface fullName: dedicated.installationTemplate.Templates.Templates
        export interface Templates {
            availableLanguages: dedicated.TemplateOsLanguageEnum[];
            beta?: boolean;
            bitFormat: dedicated.server.BitFormatEnum;
            category: dedicated.TemplateOsUsageEnum;
            customization?: dedicated.TemplateOsProperties;
            defaultLanguage: dedicated.TemplateOsLanguageEnum;
            deprecated?: boolean;
            description: string;
            distribution: string;
            family: dedicated.TemplateOsTypeEnum;
            filesystems: dedicated.TemplateOsFileSystemEnum[];
            hardRaidConfiguration?: boolean;
            lastModification?: string;
            lvmReady?: boolean;
            supportsDistributionKernel?: boolean;
            supportsGptLabel?: boolean;
            supportsRTM: boolean;
            supportsSqlServer?: boolean;
            supportsUEFI?: dedicated.server.SupportsUEFIEnum;
            templateName: string;
        }
        // interface fullName: dedicated.installationTemplate.hardwareRaid.hardwareRaid
        export interface hardwareRaid {
            disks: string[];
            mode: dedicated.TemplateOsHardwareRaidEnum;
            name: string;
            step: number;
        }
        // interface fullName: dedicated.installationTemplate.templatePartitioningSchemes.templatePartitioningSchemes
        export interface templatePartitioningSchemes {
            name: string;
            priority: number;
        }
        // interface fullName: dedicated.installationTemplate.templatePartitions.templatePartitions
        export interface templatePartitions {
            filesystem: dedicated.TemplateOsFileSystemEnum;
            mountpoint: string;
            order: number;
            raid?: dedicated.server.PartitionRaidEnum;
            size: complexType.UnitAndValue<number>;
            type: dedicated.TemplatePartitionTypeEnum;
            volumeName?: string;
        }
    }
    export namespace server {
        // type fullname: dedicated.server.BitFormatEnum
        export type BitFormatEnum = 32 | 64
        // type fullname: dedicated.server.PartitionRaidEnum
        export type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6"
        // type fullname: dedicated.server.SupportsUEFIEnum
        export type SupportsUEFIEnum = "no" | "only" | "yes"
    }
}
export namespace domain {
    // type fullname: domain.DocumentFormatsEnum
    export type DocumentFormatsEnum = "gif" | "jpeg" | "jpg" | "pdf" | "png"
    // type fullname: domain.NicOperationFunctionEnum
    export type NicOperationFunctionEnum = "ContactControl" | "DnsAnycastActivate" | "DnsAnycastDeactivate" | "DnssecDisable" | "DnssecEnable" | "DnssecResigning" | "DnssecRollKsk" | "DnssecRollZsk" | "DomainContactControl" | "DomainContactUpdate" | "DomainControl" | "DomainCreate" | "DomainDelete" | "DomainDnsUpdate" | "DomainDsUpdate" | "DomainHold" | "DomainHostCreate" | "DomainHostDelete" | "DomainHostUpdate" | "DomainIncomingTransfer" | "DomainLock" | "DomainOutgoingTransfer" | "DomainRenew" | "DomainRestore" | "DomainTrade" | "ZoneImport"
    // type fullname: domain.OperationActionEnum
    export type OperationActionEnum = "canCancel" | "canCorrect" | "canRelaunch" | "canReset"
    // type fullname: domain.OperationStatusEnum
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    // interface fullName: domain.OperationStep.OperationStep
    export interface OperationStep {
        description: string;
        executionDuration: number;
        step: string;
    }
}
export namespace geolocation {
    // interface fullName: geolocation.ContinentCountryLocation.ContinentCountryLocation
    export interface ContinentCountryLocation {
        continent: coreTypes.ContinentEnum;
        countryCode: coreTypes.CountryEnum;
        ip: string;
    }
}
export namespace http {
    // type fullname: http.MethodEnum
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}
export namespace me {
    export namespace consent {
        // interface fullName: me.consent.Campaign.Campaign
        export interface Campaign {
            description: string;
            name: string;
            type: me.consent.CampaignTypeEnum;
        }
        // type fullname: me.consent.CampaignTypeEnum
        export type CampaignTypeEnum = "OPTIN" | "OPTOUT"
        // interface fullName: me.consent.Consent.Consent
        export interface Consent {
            campaign: string;
            history: me.consent.Decision[];
            type: me.consent.CampaignTypeEnum;
            value: boolean;
        }
        // interface fullName: me.consent.Decision.Decision
        export interface Decision {
            timestamp: string;
            value: boolean;
        }
    }
    export namespace payment {
        export namespace method {
            // interface fullName: me.payment.method.AvailablePaymentMethod.AvailablePaymentMethod
            export interface AvailablePaymentMethod {
                icon: me.payment.method.Icon;
                integration: paymentmethodIntegrationType;
                oneshot: boolean;
                paymentType: string;
                registerable: boolean;
                registerableWithTransaction: boolean;
            }
            // interface fullName: me.payment.method.CallbackUrl.CallbackUrl
            export interface CallbackUrl {
                cancel: string;
                error: string;
                failure: string;
                pending: string;
                success: string;
            }
            // interface fullName: me.payment.method.Icon.Icon
            export interface Icon {
                data?: string;
                name?: string;
            }
            // interface fullName: me.payment.method.PaymentMethod.PaymentMethod
            export interface PaymentMethod {
                billingContactId?: number;
                creationDate: string;
                default: boolean;
                description?: string;
                expirationDate?: string;
                icon: me.payment.method.Icon;
                label?: string;
                lastUpdate: string;
                paymentMeanId?: number;
                paymentMethodId: number;
                paymentSubType?: string;
                paymentType: string;
                status: me.payment.method.PaymentMethod.Status;
            }
            export namespace PaymentMethod {
                // type fullname: me.payment.method.PaymentMethod.Status
                export type Status = "CANCELED" | "CANCELING" | "CREATED" | "ERROR" | "EXPIRED" | "CREATING" | "MAINTENANCE" | "PAUSED" | "VALID"
            }
            export namespace Register {
                // interface fullName: me.payment.method.Register.ValidationResult.ValidationResult
                export interface ValidationResult {
                    formSessionId?: string;
                    merchantId?: string;
                    organizationId?: string;
                    paymentMethodId: number;
                    url?: string;
                    validationType: paymentmethodIntegrationType;
                }
            }
            // interface fullName: me.payment.method.Transaction.Transaction
            export interface Transaction {
                amount: orderPrice;
                creationDate: string;
                status: me.payment.method.Transaction.Status;
                transactionId: number;
                type: me.payment.method.Transaction.Type;
            }
            export namespace Transaction {
                // type fullname: me.payment.method.Transaction.Status
                export type Status = "CANCELED" | "CANCELING" | "CONFIRMING" | "CREATED" | "ERROR" | "FAILED" | "READY" | "SUCCESS"
                // type fullname: me.payment.method.Transaction.Type
                export type Type = "CREDIT" | "DEBIT"
            }
        }
    }
}
export namespace nichandle {
    export namespace Authentication {
        // interface fullName: nichandle.Authentication.Certificate.Certificate
        export interface Certificate {
            expiration: string;
            subject: string;
        }
        // interface fullName: nichandle.Authentication.Group.Group
        export interface Group {
            creation: string;
            defaultGroup: boolean;
            description: string;
            lastUpdate: string;
            name: string;
            role: nichandle.RoleEnum;
        }
        // interface fullName: nichandle.Authentication.Provider.Provider
        export interface Provider {
            creation: string;
            groupAttributeName: string;
            idpSigningCertificate: nichandle.Authentication.Certificate;
            lastUpdate: string;
            ssoServiceUrl: string;
        }
    }
    // type fullname: nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    // interface fullName: nichandle.Currency.Currency
    export interface Currency {
        code: string;
        symbol: string;
    }
    // interface fullName: nichandle.DeveloperModeRestriction.DeveloperModeRestriction
    export interface DeveloperModeRestriction {
        enabled: boolean;
    }
    // interface fullName: nichandle.DomainTask.DomainTask
    export interface DomainTask {
        canAccelerate: boolean;
        canCancel: boolean;
        canRelaunch: boolean;
        comment?: string;
        creationDate: string;
        domain: string;
        doneDate?: string;
        function: domain.NicOperationFunctionEnum;
        id: number;
        lastUpdate: string;
        status: domain.OperationStatusEnum;
        todoDate: string;
    }
    // interface fullName: nichandle.DomainTaskArgument.DomainTaskArgument
    export interface DomainTaskArgument {
        acceptedFormats?: domain.DocumentFormatsEnum[];
        acceptedValues?: string[];
        description?: string;
        fields?: xander.ContactFieldEnum[];
        key: string;
        maximumSize?: number;
        minimumSize?: number;
        readOnly: boolean;
        template?: string;
        type: string;
        value?: string;
    }
    // interface fullName: nichandle.DomainTaskProgressBar.DomainTaskProgressBar
    export interface DomainTaskProgressBar {
        currentStep: domain.OperationStep;
        expectedDoneDate?: string;
        followUpSteps?: domain.OperationStep[];
        lastUpdateDate?: string;
        progress: number;
        taskActions: domain.OperationActionEnum[];
        taskStatus: domain.OperationStatusEnum;
    }
    // type fullname: nichandle.GenderEnum
    export type GenderEnum = "female" | "male"
    // type fullname: nichandle.IpRegistryEnum
    export type IpRegistryEnum = "ARIN" | "RIPE"
    // interface fullName: nichandle.IpRestriction.IpRestriction
    export interface IpRestriction {
        id: number;
        ip: string;
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    // interface fullName: nichandle.IpRestrictionDefaultRule.IpRestrictionDefaultRule
    export interface IpRestrictionDefaultRule {
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    // interface fullName: nichandle.Ipv4Org.Ipv4Org
    export interface Ipv4Org {
        abuse_mailbox: string;
        address: string;
        city: string;
        country: nichandle.CountryEnum;
        firstname: string;
        lastname: string;
        organisationId: string;
        phone: string;
        registry: nichandle.IpRegistryEnum;
        state?: string;
        zip?: string;
    }
    // type fullname: nichandle.LanguageEnum
    export type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT"
    // type fullname: nichandle.LegalFormEnum
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    // interface fullName: nichandle.ManagerPreference.ManagerPreference
    export interface ManagerPreference {
        key: string;
        value: string;
    }
    // interface fullName: nichandle.NicAutorenewInfos.NicAutorenewInfos
    export interface NicAutorenewInfos {
        active: boolean;
        lastRenew?: string;
        renewDay: number;
    }
    // interface fullName: nichandle.Nichandle.Nichandle
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
    // interface fullName: nichandle.NichandleSmsNotification.NichandleSmsNotification
    export interface NichandleSmsNotification {
        abuse: boolean;
        creationDate: string;
        phoneNumber: string;
        status: nichandle.NotificationStatusEnum;
        updateDate?: string;
    }
    // type fullname: nichandle.NotificationStatusEnum
    export type NotificationStatusEnum = "ok" | "waitingForValidation"
    // type fullname: nichandle.OvhCompanyEnum
    export type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart"
    // type fullname: nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
    // type fullname: nichandle.RoleEnum
    export type RoleEnum = "REGULAR" | "ADMIN" | "UNPRIVILEGED"
    // type fullname: nichandle.StateEnum
    export type StateEnum = "complete" | "incomplete"
    // interface fullName: nichandle.SubAccount.SubAccount
    export interface SubAccount {
        creationDate: string;
        description?: string;
        id: number;
    }
    // interface fullName: nichandle.SubAccountConsumerKey.SubAccountConsumerKey
    export interface SubAccountConsumerKey {
        consumerKey: string;
    }
    // interface fullName: nichandle.Subscription.Subscription
    export interface Subscription {
        registered?: boolean;
        type: string;
    }
    // interface fullName: nichandle.User.User
    export interface User {
        creation: string;
        description: string;
        email: string;
        group: string;
        lastUpdate: string;
        login: string;
        passwordLastUpdate: string;
        status: nichandle.UserStatus;
    }
    // type fullname: nichandle.UserStatus
    export type UserStatus = "OK" | "DISABLED" | "PASSWORD_CHANGE_REQUIRED"
    // interface fullName: nichandle.VoucherStatus.VoucherStatus
    export interface VoucherStatus {
        validity: boolean;
    }
    export namespace accessRestriction {
        // type fullname: nichandle.accessRestriction.IpRestrictionRuleEnum
        export type IpRestrictionRuleEnum = "accept" | "deny"
        // interface fullName: nichandle.accessRestriction.SOTPAccount.SOTPAccount
        export interface SOTPAccount {
            creationDate: string;
            lastUsedDate?: string;
            remaining: number;
            status: nichandle.accessRestriction.SOTPStatusEnum;
        }
        // interface fullName: nichandle.accessRestriction.SOTPSecret.SOTPSecret
        export interface SOTPSecret {
            codes: string[];
        }
        // type fullname: nichandle.accessRestriction.SOTPStatusEnum
        export type SOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        // interface fullName: nichandle.accessRestriction.SOTPValidate.SOTPValidate
        export interface SOTPValidate {
            remainingCodes: number;
        }
        // interface fullName: nichandle.accessRestriction.SmsAccount.SmsAccount
        export interface SmsAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            phoneNumber: string;
            status: nichandle.accessRestriction.SmsStatusEnum;
        }
        // interface fullName: nichandle.accessRestriction.SmsCode.SmsCode
        export interface SmsCode {
            challenge: string;
        }
        // interface fullName: nichandle.accessRestriction.SmsSecret.SmsSecret
        export interface SmsSecret {
            id: number;
            remainingTry: number;
        }
        // type fullname: nichandle.accessRestriction.SmsStatusEnum
        export type SmsStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        // interface fullName: nichandle.accessRestriction.TOTPAccount.TOTPAccount
        export interface TOTPAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.TOTPStatusEnum;
        }
        // interface fullName: nichandle.accessRestriction.TOTPSecret.TOTPSecret
        export interface TOTPSecret {
            id: number;
            qrcodeHelper: string;
            secret: string;
        }
        // type fullname: nichandle.accessRestriction.TOTPStatusEnum
        export type TOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        // interface fullName: nichandle.accessRestriction.U2FAccount.U2FAccount
        export interface U2FAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.U2FStatusEnum;
        }
        // interface fullName: nichandle.accessRestriction.U2FRegisterChallenge.U2FRegisterChallenge
        export interface U2FRegisterChallenge {
            applicationId: string;
            id: number;
            request: nichandle.accessRestriction.U2FRegistrationRequest;
        }
        // interface fullName: nichandle.accessRestriction.U2FRegistrationRequest.U2FRegistrationRequest
        export interface U2FRegistrationRequest {
            challenge: string;
            version: string;
        }
        // interface fullName: nichandle.accessRestriction.U2FSignChallenge.U2FSignChallenge
        export interface U2FSignChallenge {
            applicationId: string;
            request: nichandle.accessRestriction.U2FSignRequest;
        }
        // interface fullName: nichandle.accessRestriction.U2FSignRequest.U2FSignRequest
        export interface U2FSignRequest {
            challenge: string;
            keyHandle: string;
            version: string;
        }
        // type fullname: nichandle.accessRestriction.U2FStatusEnum
        export type U2FStatusEnum = "disabled" | "enabled" | "needCodeValidation"
    }
    export namespace changeContact {
        // type fullname: nichandle.changeContact.ContactTypeEnum
        export type ContactTypeEnum = "contactAdmin" | "contactBilling" | "contactTech"
        // type fullname: nichandle.changeContact.TaskStateEnum
        export type TaskStateEnum = "aborted" | "checkValidity" | "doing" | "done" | "error" | "expired" | "refused" | "todo" | "validatingByCustomers"
    }
    export namespace changeEmail {
        // type fullname: nichandle.changeEmail.TaskStateEnum
        export type TaskStateEnum = "aborted" | "done" | "refused" | "todo"
    }
    export namespace contactChange {
        // interface fullName: nichandle.contactChange.Task.Task
        export interface Task {
            askingAccount?: string;
            contactTypes: nichandle.changeContact.ContactTypeEnum[];
            dateDone?: string;
            dateRequest: string;
            fromAccount: string;
            id: number;
            serviceDomain?: string;
            state: nichandle.changeContact.TaskStateEnum;
            toAccount: string;
        }
    }
    export namespace document {
        // interface fullName: nichandle.document.Document.Document
        export interface Document {
            creationDate: string;
            expirationDate?: string;
            getUrl: string;
            id: string;
            name: string;
            putUrl: string;
            size: number;
            tags: complexType.SafeKeyValue<string>[];
            validationDate?: string;
        }
    }
    export namespace emailChange {
        // interface fullName: nichandle.emailChange.Task.Task
        export interface Task {
            dateDone?: string;
            dateRequest: string;
            id: number;
            newEmail: string;
            state: nichandle.changeEmail.TaskStateEnum;
        }
    }
    // interface fullName: nichandle.emailNotification.emailNotification
    export interface emailNotification {
        body: string;
        date: string;
        id: number;
        subject: string;
    }
    // interface fullName: nichandle.ipxe.ipxe
    export interface ipxe {
        name: string;
        script: string;
    }
    // interface fullName: nichandle.sshKey.sshKey
    export interface sshKey {
        default: boolean;
        key: string;
        keyName: string;
    }
}
export namespace order {
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace payment {
    export namespace method {
        // interface fullName: payment.method.AvailablePaymentMethod.AvailablePaymentMethod
        export interface AvailablePaymentMethod {
            icon: payment.method.Icon;
            integration: paymentmethodIntegrationType;
            oneshot: boolean;
            paymentType: string;
            registerable: boolean;
            registerableWithTransaction: boolean;
        }
        // interface fullName: payment.method.Icon.Icon
        export interface Icon {
            data?: string;
            name?: string;
        }
        // type fullname: payment.method.IntegrationType
        export type IntegrationType = "DONE" | "IFRAME_VANTIV" | "IN_CONTEXT" | "REDIRECT"
    }
}
export namespace xander {
    // type fullname: xander.ContactFieldEnum
    export type ContactFieldEnum = "address.city" | "address.country" | "address.line1" | "address.line2" | "address.line3" | "address.otherDetails" | "address.province" | "address.zip" | "birthCity" | "birthCountry" | "birthDay" | "birthZip" | "cellPhone" | "companyNationalIdentificationNumber" | "email" | "fax" | "firstName" | "gender" | "language" | "lastName" | "legalForm" | "nationalIdentificationNumber" | "nationality" | "organisationName" | "organisationType" | "phone" | "spareEmail" | "vat"
}

/**
 * END API /me Models
 */
export function proxyMe(ovhEngine: OvhRequestable): Me {
    return buildOvhProxy(ovhEngine, '/me');
}
export default proxyMe;
/**
 * Api Proxy model
 */// Apis harmony
// path /me
export interface Me {
    // GET /me
    $get(): Promise<nichandle.Nichandle>;
    // PUT /me
    $put(params?: {address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: nichandle.CountryEnum, currency?: nichandle.Currency, customerCode?: string, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform?: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, nichandle?: string, organisation?: string, ovhCompany?: nichandle.OvhCompanyEnum, ovhSubsidiary?: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, state?: nichandle.StateEnum, vat?: string, zip?: string}): Promise<void>;
    accessRestriction: {
        backupCode: {
            // DELETE /me/accessRestriction/backupCode
            $delete(): Promise<void>;
            // GET /me/accessRestriction/backupCode
            $get(): Promise<nichandle.accessRestriction.SOTPAccount>;
            // POST /me/accessRestriction/backupCode
            $post(): Promise<nichandle.accessRestriction.SOTPSecret>;
            disable: {
                // POST /me/accessRestriction/backupCode/disable
                $post(params: {code: string}): Promise<void>;
            }
            enable: {
                // POST /me/accessRestriction/backupCode/enable
                $post(params: {code: string}): Promise<void>;
            }
            validate: {
                // POST /me/accessRestriction/backupCode/validate
                $post(params: {code: string}): Promise<nichandle.accessRestriction.SOTPValidate>;
            }
        }
        developerMode: {
            // GET /me/accessRestriction/developerMode
            $get(): Promise<nichandle.DeveloperModeRestriction>;
            // PUT /me/accessRestriction/developerMode
            $put(params?: {enabled?: boolean}): Promise<void>;
        }
        ip: {
            // GET /me/accessRestriction/ip
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/ip
            $post(params: {ip: string, rule: nichandle.accessRestriction.IpRestrictionRuleEnum, warning: boolean}): Promise<void>;
            $(id: number): {
                // DELETE /me/accessRestriction/ip/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/ip/{id}
                $get(): Promise<nichandle.IpRestriction>;
                // PUT /me/accessRestriction/ip/{id}
                $put(params?: {id?: number, ip?: string, rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}): Promise<void>;
            };
        }
        ipDefaultRule: {
            // GET /me/accessRestriction/ipDefaultRule
            $get(): Promise<nichandle.IpRestrictionDefaultRule>;
            // PUT /me/accessRestriction/ipDefaultRule
            $put(params?: {rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}): Promise<void>;
        }
        sms: {
            // GET /me/accessRestriction/sms
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/sms
            $post(params: {phone: string}): Promise<nichandle.accessRestriction.SmsSecret>;
            $(id: number): {
                // DELETE /me/accessRestriction/sms/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/sms/{id}
                $get(): Promise<nichandle.accessRestriction.SmsAccount>;
                // PUT /me/accessRestriction/sms/{id}
                $put(params?: {creationDate?: string, description?: string, id?: number, lastUsedDate?: string, phoneNumber?: string, status?: nichandle.accessRestriction.SmsStatusEnum}): Promise<void>;
                disable: {
                    // POST /me/accessRestriction/sms/{id}/disable
                    $post(params: {code: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/sms/{id}/enable
                    $post(params: {code: string}): Promise<void>;
                }
                sendCode: {
                    // POST /me/accessRestriction/sms/{id}/sendCode
                    $post(): Promise<nichandle.accessRestriction.SmsCode>;
                }
                validate: {
                    // POST /me/accessRestriction/sms/{id}/validate
                    $post(params: {code: string}): Promise<void>;
                }
            };
        }
        totp: {
            // GET /me/accessRestriction/totp
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/totp
            $post(): Promise<nichandle.accessRestriction.TOTPSecret>;
            $(id: number): {
                // DELETE /me/accessRestriction/totp/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/totp/{id}
                $get(): Promise<nichandle.accessRestriction.TOTPAccount>;
                // PUT /me/accessRestriction/totp/{id}
                $put(params?: {creationDate?: string, description?: string, id?: number, lastUsedDate?: string, status?: nichandle.accessRestriction.TOTPStatusEnum}): Promise<void>;
                disable: {
                    // POST /me/accessRestriction/totp/{id}/disable
                    $post(params: {code: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/totp/{id}/enable
                    $post(params: {code: string}): Promise<void>;
                }
                validate: {
                    // POST /me/accessRestriction/totp/{id}/validate
                    $post(params: {code: string}): Promise<void>;
                }
            };
        }
        u2f: {
            // GET /me/accessRestriction/u2f
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/u2f
            $post(): Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
            $(id: number): {
                // DELETE /me/accessRestriction/u2f/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/u2f/{id}
                $get(): Promise<nichandle.accessRestriction.U2FAccount>;
                // PUT /me/accessRestriction/u2f/{id}
                $put(params?: {creationDate?: string, description?: string, id?: number, lastUsedDate?: string, status?: nichandle.accessRestriction.U2FStatusEnum}): Promise<void>;
                challenge: {
                    // POST /me/accessRestriction/u2f/{id}/challenge
                    $post(): Promise<nichandle.accessRestriction.U2FSignChallenge>;
                }
                disable: {
                    // POST /me/accessRestriction/u2f/{id}/disable
                    $post(params: {clientData: string, signatureData: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/u2f/{id}/enable
                    $post(params: {clientData: string, signatureData: string}): Promise<void>;
                }
                validate: {
                    // POST /me/accessRestriction/u2f/{id}/validate
                    $post(params: {clientData: string, registrationData: string}): Promise<void>;
                }
            };
        }
    }
    agreements: {
        // GET /me/agreements
        $get(params?: {agreed?: agreements.AgreementStateEnum, contractId?: number}): Promise<number[]>;
        $(id: number): {
            // GET /me/agreements/{id}
            $get(): Promise<agreements.ContractAgreement>;
            accept: {
                // POST /me/agreements/{id}/accept
                $post(): Promise<string>;
            }
            contract: {
                // GET /me/agreements/{id}/contract
                $get(): Promise<agreements.Contract>;
            }
        };
    }
    api: {
        application: {
            // GET /me/api/application
            $get(): Promise<number[]>;
            $(applicationId: number): {
                // DELETE /me/api/application/{applicationId}
                $delete(): Promise<void>;
                // GET /me/api/application/{applicationId}
                $get(): Promise<api.Application>;
            };
        }
        credential: {
            // GET /me/api/credential
            $get(params?: {applicationId?: number, status?: auth.CredentialStateEnum}): Promise<number[]>;
            $(credentialId: number): {
                // DELETE /me/api/credential/{credentialId}
                $delete(): Promise<void>;
                // GET /me/api/credential/{credentialId}
                $get(): Promise<api.Credential>;
                // PUT /me/api/credential/{credentialId}
                $put(params?: {allowedIPs?: string[], applicationId?: number, creation?: string, credentialId?: number, expiration?: string, lastUse?: string, ovhSupport?: boolean, rules?: auth.AccessRule[], status?: auth.CredentialStateEnum}): Promise<void>;
                application: {
                    // GET /me/api/credential/{credentialId}/application
                    $get(): Promise<api.Application>;
                }
            };
        }
    }
    autorenew: {
        // GET /me/autorenew
        $get(): Promise<nichandle.NicAutorenewInfos>;
        // POST /me/autorenew
        $post(params: {renewDay: number}): Promise<void>;
        // PUT /me/autorenew
        $put(params?: {active?: boolean, lastRenew?: string, renewDay?: number}): Promise<void>;
    }
    availableAutomaticPaymentMeans: {
        // GET /me/availableAutomaticPaymentMeans
        $get(): Promise<billing.AutomaticPaymentMean>;
    }
    bill: {
        // GET /me/bill
        $get(params?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(billId: string): {
            // GET /me/bill/{billId}
            $get(): Promise<billing.Bill>;
            debt: {
                // GET /me/bill/{billId}/debt
                $get(): Promise<debt.Debt>;
                operation: {
                    // GET /me/bill/{billId}/debt/operation
                    $get(params?: {depositOrderId?: number}): Promise<number[]>;
                    $(operationId: number): {
                        // GET /me/bill/{billId}/debt/operation/{operationId}
                        $get(): Promise<debt.Operation>;
                        associatedObject: {
                            // GET /me/bill/{billId}/debt/operation/{operationId}/associatedObject
                            $get(): Promise<debt.entry.AssociatedObject>;
                        }
                    };
                }
                pay: {
                    // POST /me/bill/{billId}/debt/pay
                    $post(): Promise<billing.Order>;
                }
            }
            details: {
                // GET /me/bill/{billId}/details
                $get(): Promise<string[]>;
                $(billDetailId: string): {
                    // GET /me/bill/{billId}/details/{billDetailId}
                    $get(): Promise<billing.BillDetail>;
                };
            }
            payment: {
                // GET /me/bill/{billId}/payment
                $get(): Promise<billing.Payment>;
            }
        };
    }
    certificates: {
        // GET /me/certificates
        $get(params?: {name?: string}): Promise<string[]>;
    }
    changeEmail: {
        // POST /me/changeEmail
        $post(params: {newEmail: string}): Promise<nichandle.emailChange.Task>;
    }
    changePassword: {
        // POST /me/changePassword
        $post(): Promise<void>;
    }
    consent: {
        // GET /me/consent
        $get(): Promise<me.consent.Campaign[]>;
        $(campaignName: string): {
            // GET /me/consent/{campaignName}
            $get(): Promise<me.consent.Campaign>;
            decision: {
                // GET /me/consent/{campaignName}/decision
                $get(): Promise<me.consent.Consent>;
                // PUT /me/consent/{campaignName}/decision
                $put(params: {value: boolean}): Promise<void>;
            }
        };
    }
    contact: {
        // GET /me/contact
        $get(): Promise<number[]>;
        // POST /me/contact
        $post(params: {address: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email: string, fax?: string, firstName: string, gender?: nichandle.GenderEnum, language: nichandle.LanguageEnum, lastName: string, legalForm: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone: string, vat?: string}): Promise<contact.Contact>;
        $(contactId: number): {
            // GET /me/contact/{contactId}
            $get(): Promise<contact.Contact>;
            // PUT /me/contact/{contactId}
            $put(params?: {address?: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, vat?: string}): Promise<contact.Contact>;
            fields: {
                // GET /me/contact/{contactId}/fields
                $get(): Promise<contact.FieldInformation[]>;
            }
        };
    }
    debtAccount: {
        // GET /me/debtAccount
        $get(): Promise<debt.Balance>;
        debt: {
            // GET /me/debtAccount/debt
            $get(): Promise<number[]>;
            $(debtId: number): {
                // GET /me/debtAccount/debt/{debtId}
                $get(): Promise<debt.Debt>;
                operation: {
                    // GET /me/debtAccount/debt/{debtId}/operation
                    $get(params?: {depositOrderId?: number}): Promise<number[]>;
                    $(operationId: number): {
                        // GET /me/debtAccount/debt/{debtId}/operation/{operationId}
                        $get(): Promise<debt.Operation>;
                        associatedObject: {
                            // GET /me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject
                            $get(): Promise<debt.entry.AssociatedObject>;
                        }
                    };
                }
                pay: {
                    // POST /me/debtAccount/debt/{debtId}/pay
                    $post(): Promise<billing.Order>;
                }
            };
        }
        pay: {
            // POST /me/debtAccount/pay
            $post(): Promise<billing.Order>;
        }
    }
    deposit: {
        // GET /me/deposit
        $get(params?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(depositId: string): {
            // GET /me/deposit/{depositId}
            $get(): Promise<billing.Deposit>;
            details: {
                // GET /me/deposit/{depositId}/details
                $get(): Promise<string[]>;
                $(depositDetailId: string): {
                    // GET /me/deposit/{depositId}/details/{depositDetailId}
                    $get(): Promise<billing.DepositDetail>;
                };
            }
            paidBills: {
                // GET /me/deposit/{depositId}/paidBills
                $get(): Promise<string[]>;
                $(billId: string): {
                    // GET /me/deposit/{depositId}/paidBills/{billId}
                    $get(): Promise<billing.Bill>;
                    debt: {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/debt
                        $get(): Promise<debt.Debt>;
                        operation: {
                            // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation
                            $get(params?: {depositOrderId?: number}): Promise<number[]>;
                            $(operationId: number): {
                                // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}
                                $get(): Promise<debt.Operation>;
                                associatedObject: {
                                    // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject
                                    $get(): Promise<debt.entry.AssociatedObject>;
                                }
                            };
                        }
                        pay: {
                            // POST /me/deposit/{depositId}/paidBills/{billId}/debt/pay
                            $post(): Promise<billing.Order>;
                        }
                    }
                    details: {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/details
                        $get(): Promise<string[]>;
                        $(billDetailId: string): {
                            // GET /me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}
                            $get(): Promise<billing.BillDetail>;
                        };
                    }
                    payment: {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/payment
                        $get(): Promise<billing.Payment>;
                    }
                };
            }
            payment: {
                // GET /me/deposit/{depositId}/payment
                $get(): Promise<billing.Payment>;
            }
        };
    }
    document: {
        // GET /me/document
        $get(): Promise<string[]>;
        // POST /me/document
        $post(params: {name: string, tags?: complexType.SafeKeyValue<string>[]}): Promise<nichandle.document.Document>;
        cors: {
            // POST /me/document/cors
            $post(params: {origin: string}): Promise<void>;
        }
        $(id: string): {
            // DELETE /me/document/{id}
            $delete(): Promise<void>;
            // GET /me/document/{id}
            $get(): Promise<nichandle.document.Document>;
            // PUT /me/document/{id}
            $put(params?: {creationDate?: string, expirationDate?: string, getUrl?: string, id?: string, name?: string, putUrl?: string, size?: number, tags?: complexType.SafeKeyValue<string>[], validationDate?: string}): Promise<void>;
        };
    }
    fidelityAccount: {
        // GET /me/fidelityAccount
        $get(): Promise<billing.FidelityAccount>;
        // PUT /me/fidelityAccount
        $put(params?: {alertThreshold?: number, balance?: number, canBeCredited?: boolean, lastUpdate?: string, openDate?: string}): Promise<void>;
        creditOrder: {
            // POST /me/fidelityAccount/creditOrder
            $post(params: {amount: number}): Promise<billing.Order>;
        }
        movements: {
            // GET /me/fidelityAccount/movements
            $get(params?: {date_from?: string, date_to?: string}): Promise<number[]>;
            $(movementId: number): {
                // GET /me/fidelityAccount/movements/{movementId}
                $get(): Promise<billing.FidelityMovement>;
            };
        }
    }
    geolocation: {
        // POST /me/geolocation
        $post(): Promise<geolocation.ContinentCountryLocation>;
    }
    identity: {
        group: {
            // GET /me/identity/group
            $get(): Promise<string[]>;
            // POST /me/identity/group
            $post(params: {description?: string, name: string, role?: nichandle.RoleEnum}): Promise<nichandle.Authentication.Group>;
            $(group: string): {
                // DELETE /me/identity/group/{group}
                $delete(): Promise<void>;
                // GET /me/identity/group/{group}
                $get(): Promise<nichandle.Authentication.Group>;
                // PUT /me/identity/group/{group}
                $put(params?: {description?: string, role?: nichandle.RoleEnum}): Promise<void>;
            };
        }
        user: {
            // GET /me/identity/user
            $get(): Promise<string[]>;
            // POST /me/identity/user
            $post(params: {description?: string, email: string, group?: string, login: string, password: string}): Promise<void>;
            $(user: string): {
                // DELETE /me/identity/user/{user}
                $delete(): Promise<void>;
                // GET /me/identity/user/{user}
                $get(): Promise<nichandle.User>;
                // PUT /me/identity/user/{user}
                $put(params?: {description?: string, email?: string, group?: string}): Promise<void>;
                disable: {
                    // POST /me/identity/user/{user}/disable
                    $post(): Promise<void>;
                }
                enable: {
                    // POST /me/identity/user/{user}/enable
                    $post(): Promise<void>;
                }
            };
        }
    }
    installationTemplate: {
        // GET /me/installationTemplate
        $get(): Promise<string[]>;
        // POST /me/installationTemplate
        $post(params: {baseTemplateName: string, defaultLanguage: dedicated.TemplateOsLanguageEnum, name: string}): Promise<void>;
        $(templateName: string): {
            // DELETE /me/installationTemplate/{templateName}
            $delete(): Promise<void>;
            // GET /me/installationTemplate/{templateName}
            $get(): Promise<dedicated.installationTemplate.Templates>;
            // PUT /me/installationTemplate/{templateName}
            $put(params?: {availableLanguages?: dedicated.TemplateOsLanguageEnum[], beta?: boolean, bitFormat?: dedicated.server.BitFormatEnum, category?: dedicated.TemplateOsUsageEnum, customization?: dedicated.TemplateOsProperties, defaultLanguage?: dedicated.TemplateOsLanguageEnum, deprecated?: boolean, description?: string, distribution?: string, family?: dedicated.TemplateOsTypeEnum, filesystems?: dedicated.TemplateOsFileSystemEnum[], hardRaidConfiguration?: boolean, lastModification?: string, lvmReady?: boolean, supportsDistributionKernel?: boolean, supportsGptLabel?: boolean, supportsRTM?: boolean, supportsSqlServer?: boolean, supportsUEFI?: dedicated.server.SupportsUEFIEnum, templateName?: string}): Promise<void>;
            checkIntegrity: {
                // POST /me/installationTemplate/{templateName}/checkIntegrity
                $post(): Promise<void>;
            }
            partitionScheme: {
                // GET /me/installationTemplate/{templateName}/partitionScheme
                $get(): Promise<string[]>;
                // POST /me/installationTemplate/{templateName}/partitionScheme
                $post(params: {name: string, priority: number}): Promise<void>;
                $(schemeName: string): {
                    // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $delete(): Promise<void>;
                    // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $put(params?: {name?: string, priority?: number}): Promise<void>;
                    hardwareRaid: {
                        // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $get(): Promise<string[]>;
                        // POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $post(params: {disks: string[], mode: dedicated.TemplateOsHardwareRaidEnum, name: string, step: number}): Promise<void>;
                        $(name: string): {
                            // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $delete(): Promise<void>;
                            // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                            // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $put(params?: {disks?: string[], mode?: dedicated.TemplateOsHardwareRaidEnum, name?: string, step?: number}): Promise<void>;
                        };
                    }
                    partition: {
                        // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $get(): Promise<string[]>;
                        // POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $post(params: {filesystem: dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: number, size: number, step: number, type: dedicated.TemplatePartitionTypeEnum, volumeName?: string}): Promise<void>;
                        $(mountpoint: string): {
                            // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $delete(): Promise<void>;
                            // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                            // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $put(params?: {filesystem?: dedicated.TemplateOsFileSystemEnum, mountpoint?: string, order?: number, raid?: dedicated.server.PartitionRaidEnum, size?: complexType.UnitAndValue<number>, type?: dedicated.TemplatePartitionTypeEnum, volumeName?: string}): Promise<void>;
                        };
                    }
                };
            }
        };
    }
    ipOrganisation: {
        // GET /me/ipOrganisation
        $get(): Promise<string[]>;
        // POST /me/ipOrganisation
        $post(params: {abuse_mailbox: string, address: string, city: string, country: nichandle.CountryEnum, firstname: string, lastname: string, phone: string, registry: nichandle.IpRegistryEnum, state?: string, zip?: string}): Promise<void>;
        $(organisationId: string): {
            // DELETE /me/ipOrganisation/{organisationId}
            $delete(): Promise<void>;
            // GET /me/ipOrganisation/{organisationId}
            $get(): Promise<nichandle.Ipv4Org>;
            // PUT /me/ipOrganisation/{organisationId}
            $put(params?: {abuse_mailbox?: string, address?: string, city?: string, country?: nichandle.CountryEnum, firstname?: string, lastname?: string, organisationId?: string, phone?: string, registry?: nichandle.IpRegistryEnum, state?: string, zip?: string}): Promise<void>;
        };
    }
    ipxeScript: {
        // GET /me/ipxeScript
        $get(): Promise<string[]>;
        // POST /me/ipxeScript
        $post(params: {description: string, name: string, script: string}): Promise<nichandle.ipxe>;
        $(name: string): {
            // DELETE /me/ipxeScript/{name}
            $delete(): Promise<void>;
            // GET /me/ipxeScript/{name}
            $get(): Promise<nichandle.ipxe>;
        };
    }
    mailingList: {
        availableLists: {
            // GET /me/mailingList/availableLists
            $get(): Promise<string[]>;
        }
        subscribe: {
            // POST /me/mailingList/subscribe
            $post(params: {email: string, mailingList: string}): Promise<void>;
        }
    }
    notification: {
        email: {
            history: {
                // GET /me/notification/email/history
                $get(): Promise<number[]>;
                $(id: number): {
                    // GET /me/notification/email/history/{id}
                    $get(): Promise<nichandle.emailNotification>;
                };
            }
        }
    }
    order: {
        // GET /me/order
        $get(params?: {date_from?: string, date_to?: string}): Promise<number[]>;
        $(orderId: number): {
            // GET /me/order/{orderId}
            $get(): Promise<billing.Order>;
            associatedObject: {
                // GET /me/order/{orderId}/associatedObject
                $get(): Promise<billing.order.AssociatedObject>;
            }
            availableRegisteredPaymentMean: {
                // GET /me/order/{orderId}/availableRegisteredPaymentMean
                $get(): Promise<billing.order.RegisteredPaymentMean[]>;
            }
            bill: {
                // GET /me/order/{orderId}/bill
                $get(): Promise<billing.Bill>;
            }
            debt: {
                // GET /me/order/{orderId}/debt
                $get(): Promise<debt.Debt>;
                operation: {
                    // GET /me/order/{orderId}/debt/operation
                    $get(params?: {depositOrderId?: number}): Promise<number[]>;
                    $(operationId: number): {
                        // GET /me/order/{orderId}/debt/operation/{operationId}
                        $get(): Promise<debt.Operation>;
                        associatedObject: {
                            // GET /me/order/{orderId}/debt/operation/{operationId}/associatedObject
                            $get(): Promise<debt.entry.AssociatedObject>;
                        }
                    };
                }
                pay: {
                    // POST /me/order/{orderId}/debt/pay
                    $post(): Promise<billing.Order>;
                }
            }
            details: {
                // GET /me/order/{orderId}/details
                $get(): Promise<number[]>;
                $(orderDetailId: number): {
                    // GET /me/order/{orderId}/details/{orderDetailId}
                    $get(): Promise<billing.OrderDetail>;
                    extension: {
                        // GET /me/order/{orderId}/details/{orderDetailId}/extension
                        $get(): Promise<billing.ItemDetail>;
                    }
                };
            }
            pay: {
                // POST /me/order/{orderId}/pay
                $post(params: {paymentMethod: billing.order.PayWithPaymentMethod}): Promise<void>;
            }
            payWithRegisteredPaymentMean: {
                // POST /me/order/{orderId}/payWithRegisteredPaymentMean
                $post(params: {paymentMean: billing.ReusablePaymentMeanEnum, paymentMeanId?: number}): Promise<void>;
            }
            payment: {
                // GET /me/order/{orderId}/payment
                $get(): Promise<billing.Payment>;
            }
            paymentMeans: {
                // GET /me/order/{orderId}/paymentMeans
                $get(): Promise<billing.order.PaymentMeans>;
            }
            paymentMethods: {
                // GET /me/order/{orderId}/paymentMethods
                $get(): Promise<billing.order.PaymentMethods>;
            }
            refund: {
                // GET /me/order/{orderId}/refund
                $get(): Promise<billing.Refund>;
            }
            retraction: {
                // POST /me/order/{orderId}/retraction
                $post(params: {comment?: string, reason: billing.order.RetractionReasonEnum}): Promise<void>;
            }
            status: {
                // GET /me/order/{orderId}/status
                $get(): Promise<billing.order.OrderStatusEnum>;
            }
        };
    }
    ovhAccount: {
        // GET /me/ovhAccount
        $get(): Promise<string[]>;
        $(ovhAccountId: string): {
            // GET /me/ovhAccount/{ovhAccountId}
            $get(): Promise<billing.OvhAccount>;
            // PUT /me/ovhAccount/{ovhAccountId}
            $put(params?: {alertThreshold?: number, balance?: orderPrice, canBeCredited?: boolean, isActive?: boolean, lastUpdate?: string, openDate?: string, ovhAccountId?: string}): Promise<void>;
            creditOrder: {
                // POST /me/ovhAccount/{ovhAccountId}/creditOrder
                $post(params: {amount: number}): Promise<billing.Order>;
            }
            movements: {
                // GET /me/ovhAccount/{ovhAccountId}/movements
                $get(params?: {date_from?: string, date_to?: string}): Promise<number[]>;
                $(movementId: number): {
                    // GET /me/ovhAccount/{ovhAccountId}/movements/{movementId}
                    $get(): Promise<billing.Movement>;
                };
            }
            retrieveMoney: {
                // POST /me/ovhAccount/{ovhAccountId}/retrieveMoney
                $post(params: {amount: number, bankAccountId: number}): Promise<billing.Order>;
            }
        };
    }
    passwordRecover: {
        // POST /me/passwordRecover
        $post(params: {ovhCompany: nichandle.OvhCompanyEnum, ovhId: string}): Promise<void>;
    }
    payment: {
        availableMethods: {
            // GET /me/payment/availableMethods
            $get(): Promise<me.payment.method.AvailablePaymentMethod[]>;
        }
        method: {
            // GET /me/payment/method
            $get(params?: {paymentType?: string, status?: me.payment.method.PaymentMethod.Status}): Promise<number[]>;
            // POST /me/payment/method
            $post(params: {callbackUrl: me.payment.method.CallbackUrl, default_?: boolean, description?: string, orderId?: number, paymentType: string, register?: boolean}): Promise<me.payment.method.Register.ValidationResult>;
            $(paymentMethodId: number): {
                // DELETE /me/payment/method/{paymentMethodId}
                $delete(): Promise<me.payment.method.PaymentMethod>;
                // GET /me/payment/method/{paymentMethodId}
                $get(): Promise<me.payment.method.PaymentMethod>;
                // PUT /me/payment/method/{paymentMethodId}
                $put(params?: {default_?: boolean, description?: string}): Promise<billing.PaymentMethod>;
                challenge: {
                    // POST /me/payment/method/{paymentMethodId}/challenge
                    $post(params: {challenge: string}): Promise<me.payment.method.PaymentMethod>;
                }
                finalize: {
                    // POST /me/payment/method/{paymentMethodId}/finalize
                    $post(params?: {expirationMonth?: number, expirationYear?: number, formSessionId?: string, registrationId?: string}): Promise<me.payment.method.PaymentMethod>;
                }
            };
        }
        transaction: {
            // GET /me/payment/transaction
            $get(params?: {paymentMethodId?: number, status?: me.payment.method.Transaction.Status}): Promise<number[]>;
            $(transactionId: number): {
                // GET /me/payment/transaction/{transactionId}
                $get(): Promise<me.payment.method.Transaction>;
            };
        }
    }
    paymentMean: {
        bankAccount: {
            // GET /me/paymentMean/bankAccount
            $get(params?: {state?: billing.BankAccountStateEnum}): Promise<number[]>;
            // POST /me/paymentMean/bankAccount
            $post(params: {bic: string, description?: string, iban: string, ownerAddress: string, ownerName: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                // DELETE /me/paymentMean/bankAccount/{id}
                $delete(): Promise<void>;
                // GET /me/paymentMean/bankAccount/{id}
                $get(): Promise<billing.BankAccount>;
                // PUT /me/paymentMean/bankAccount/{id}
                $put(params?: {bic?: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, iban?: string, icon?: billing.paymentMethod.IconData, id?: number, mandateSignatureDate?: string, ownerAddress?: string, ownerName?: string, state?: billing.BankAccountStateEnum, uniqueReference?: string, validationDocumentLink?: string}): Promise<void>;
                challenge: {
                    // POST /me/paymentMean/bankAccount/{id}/challenge
                    $post(params: {challenge: string}): Promise<void>;
                }
                chooseAsDefaultPaymentMean: {
                    // POST /me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            };
        }
        creditCard: {
            // GET /me/paymentMean/creditCard
            $get(): Promise<number[]>;
            // POST /me/paymentMean/creditCard
            $post(params?: {description?: string, returnUrl?: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                // DELETE /me/paymentMean/creditCard/{id}
                $delete(): Promise<void>;
                // GET /me/paymentMean/creditCard/{id}
                $get(): Promise<billing.CreditCard>;
                // PUT /me/paymentMean/creditCard/{id}
                $put(params?: {defaultPaymentMean?: boolean, description?: string, expirationDate?: string, icon?: billing.paymentMethod.IconData, id?: number, number?: string, state?: billing.CreditCardStateEnum, threeDsValidated?: boolean, type?: string}): Promise<void>;
                challenge: {
                    // POST /me/paymentMean/creditCard/{id}/challenge
                    $post(params: {challenge: string}): Promise<void>;
                }
                chooseAsDefaultPaymentMean: {
                    // POST /me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            };
        }
        deferredPaymentAccount: {
            // GET /me/paymentMean/deferredPaymentAccount
            $get(): Promise<number[]>;
            $(id: number): {
                // GET /me/paymentMean/deferredPaymentAccount/{id}
                $get(): Promise<billing.DeferredPaymentAccount>;
                // PUT /me/paymentMean/deferredPaymentAccount/{id}
                $put(params?: {creationDate?: string, defaultPaymentMean?: boolean, description?: string, icon?: billing.paymentMethod.IconData, id?: number, label?: string, state?: billing.DeferredPaymentAccountStatusEnum}): Promise<void>;
                chooseAsDefaultPaymentMean: {
                    // POST /me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            };
        }
        paypal: {
            // GET /me/paymentMean/paypal
            $get(): Promise<number[]>;
            // POST /me/paymentMean/paypal
            $post(params?: {description?: string, returnUrl?: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                // DELETE /me/paymentMean/paypal/{id}
                $delete(): Promise<void>;
                // GET /me/paymentMean/paypal/{id}
                $get(): Promise<billing.Paypal>;
                // PUT /me/paymentMean/paypal/{id}
                $put(params?: {agreementId?: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, email?: string, icon?: billing.paymentMethod.IconData, id?: number, state?: billing.PaypalStateEnum}): Promise<void>;
                challenge: {
                    // POST /me/paymentMean/paypal/{id}/challenge
                    $post(params: {challenge: string}): Promise<void>;
                }
                chooseAsDefaultPaymentMean: {
                    // POST /me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            };
        }
    }
    sla: {
        // GET /me/sla
        $get(): Promise<number[]>;
        $(id: number): {
            // GET /me/sla/{id}
            $get(): Promise<billing.SlaOperation>;
            apply: {
                // POST /me/sla/{id}/apply
                $post(): Promise<void>;
            }
            canBeApplied: {
                // GET /me/sla/{id}/canBeApplied
                $get(): Promise<boolean>;
            }
            services: {
                // GET /me/sla/{id}/services
                $get(): Promise<billing.SlaOperationService[]>;
            }
            status: {
                // GET /me/sla/{id}/status
                $get(): Promise<string>;
            }
        };
    }
    sshKey: {
        // GET /me/sshKey
        $get(): Promise<string[]>;
        // POST /me/sshKey
        $post(params: {key: string, keyName: string}): Promise<void>;
        $(keyName: string): {
            // DELETE /me/sshKey/{keyName}
            $delete(): Promise<void>;
            // GET /me/sshKey/{keyName}
            $get(): Promise<nichandle.sshKey>;
            // PUT /me/sshKey/{keyName}
            $put(params?: {default_?: boolean, key?: string, keyName?: string}): Promise<void>;
        };
    }
    subAccount: {
        // GET /me/subAccount
        $get(): Promise<number[]>;
        // POST /me/subAccount
        $post(params?: {description?: string}): Promise<number>;
        $(id: number): {
            // GET /me/subAccount/{id}
            $get(): Promise<nichandle.SubAccount>;
            // PUT /me/subAccount/{id}
            $put(params?: {creationDate?: string, description?: string, id?: number}): Promise<void>;
            createConsumerKey: {
                // POST /me/subAccount/{id}/createConsumerKey
                $post(): Promise<nichandle.SubAccountConsumerKey>;
            }
        };
    }
    subscription: {
        // GET /me/subscription
        $get(): Promise<string[]>;
        $(subscriptionType: string): {
            // GET /me/subscription/{subscriptionType}
            $get(): Promise<nichandle.Subscription>;
            // PUT /me/subscription/{subscriptionType}
            $put(params?: {registered?: boolean, type?: string}): Promise<void>;
        };
    }
    task: {
        contactChange: {
            // GET /me/task/contactChange
            $get(params?: {askingAccount?: string, state?: nichandle.changeContact.TaskStateEnum, toAccount?: string}): Promise<number[]>;
            $(id: number): {
                // GET /me/task/contactChange/{id}
                $get(): Promise<nichandle.contactChange.Task>;
                accept: {
                    // POST /me/task/contactChange/{id}/accept
                    $post(params: {token: string}): Promise<void>;
                }
                refuse: {
                    // POST /me/task/contactChange/{id}/refuse
                    $post(params: {token: string}): Promise<void>;
                }
                resendEmail: {
                    // POST /me/task/contactChange/{id}/resendEmail
                    $post(): Promise<void>;
                }
            };
        }
        domain: {
            // GET /me/task/domain
            $get(params?: {domain?: string, function_?: domain.NicOperationFunctionEnum, status?: domain.OperationStatusEnum}): Promise<number[]>;
            $(id: number): {
                // GET /me/task/domain/{id}
                $get(): Promise<nichandle.DomainTask>;
                accelerate: {
                    // POST /me/task/domain/{id}/accelerate
                    $post(): Promise<void>;
                }
                argument: {
                    // GET /me/task/domain/{id}/argument
                    $get(): Promise<string[]>;
                    $(key: string): {
                        // GET /me/task/domain/{id}/argument/{key}
                        $get(): Promise<nichandle.DomainTaskArgument>;
                        // PUT /me/task/domain/{id}/argument/{key}
                        $put(params?: {acceptedFormats?: domain.DocumentFormatsEnum[], acceptedValues?: string[], description?: string, fields?: xander.ContactFieldEnum[], key?: string, maximumSize?: number, minimumSize?: number, readOnly?: boolean, template?: string, type?: string, value?: string}): Promise<void>;
                    };
                }
                cancel: {
                    // POST /me/task/domain/{id}/cancel
                    $post(): Promise<void>;
                }
                progressbar: {
                    // GET /me/task/domain/{id}/progressbar
                    $get(): Promise<nichandle.DomainTaskProgressBar>;
                }
                relaunch: {
                    // POST /me/task/domain/{id}/relaunch
                    $post(): Promise<void>;
                }
            };
        }
        emailChange: {
            // GET /me/task/emailChange
            $get(params?: {state?: nichandle.changeEmail.TaskStateEnum}): Promise<number[]>;
            $(id: number): {
                // GET /me/task/emailChange/{id}
                $get(): Promise<nichandle.emailChange.Task>;
                accept: {
                    // POST /me/task/emailChange/{id}/accept
                    $post(params: {token: string}): Promise<void>;
                }
                refuse: {
                    // POST /me/task/emailChange/{id}/refuse
                    $post(params: {token: string}): Promise<void>;
                }
            };
        }
    }
    voucher: {
        checkValidity: {
            // POST /me/voucher/checkValidity
            $post(params: {voucher: string}): Promise<nichandle.VoucherStatus>;
        }
    }
    withdrawal: {
        // GET /me/withdrawal
        $get(params?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(withdrawalId: string): {
            // GET /me/withdrawal/{withdrawalId}
            $get(): Promise<billing.Withdrawal>;
            details: {
                // GET /me/withdrawal/{withdrawalId}/details
                $get(): Promise<string[]>;
                $(withdrawalDetailId: string): {
                    // GET /me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}
                    $get(): Promise<billing.WithdrawalDetail>;
                };
            }
            payment: {
                // GET /me/withdrawal/{withdrawalId}/payment
                $get(): Promise<billing.Payment>;
            }
        };
    }
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type orderPrice = order.Price;
type paymentmethodIntegrationType = payment.method.IntegrationType;

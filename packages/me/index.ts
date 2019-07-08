import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /me Models
 */
export namespace agreements {
    //agreements.AgreementStateEnum
    export type AgreementStateEnum = "ko" | "obsolete" | "ok" | "todo"
    //agreements.Contract
    // fullName: agreements.Contract.Contract
    export interface Contract {
        active: boolean;
        date: string;
        name: string;
        pdf: string;
        text: string;
    }
    //agreements.ContractAgreement
    // fullName: agreements.ContractAgreement.ContractAgreement
    export interface ContractAgreement {
        agreed: agreements.AgreementStateEnum;
        contractId: number;
        date: string;
        id: number;
    }
}
export namespace api {
    //api.Application
    // fullName: api.Application.Application
    export interface Application {
        applicationId: number;
        applicationKey: string;
        description: string;
        name: string;
        status: api.ApplicationStatusEnum;
    }
    //api.ApplicationStatusEnum
    export type ApplicationStatusEnum = "active" | "blocked" | "inactive" | "trusted"
    //api.Credential
    // fullName: api.Credential.Credential
    export interface Credential {
        applicationId: number;
        creation: string;
        credentialId: number;
        expiration?: string;
        lastUse?: string;
        ovhSupport: boolean;
        rules: auth.AccessRule[];
        status: auth.CredentialStateEnum;
    }
    //api.Log
    // fullName: api.Log.Log
    export interface Log {
        account: string;
        date: string;
        ip?: string;
        logId: number;
        method: http.MethodEnum;
        path: string;
        route: string;
    }
}
export namespace auth {
    //auth.AccessRule
    // fullName: auth.AccessRule.AccessRule
    export interface AccessRule {
        method: auth.MethodEnum;
        path: string;
    }
    //auth.CredentialStateEnum
    export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"
    //auth.MethodEnum
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}
export namespace billing {
    //billing.AutomaticPaymentMean
    // fullName: billing.AutomaticPaymentMean.AutomaticPaymentMean
    export interface AutomaticPaymentMean {
        bankAccount: boolean;
        creditCard: boolean;
        deferredPaymentAccount: boolean;
        paypal: boolean;
    }
    //billing.BankAccount
    // fullName: billing.BankAccount.BankAccount
    export interface BankAccount {
        bic: string;
        creationDate: string;
        defaultPaymentMean: boolean;
        description?: string;
        iban: string;
        id: number;
        mandateSignatureDate?: string;
        ownerAddress: string;
        ownerName: string;
        state: billing.BankAccountStateEnum;
        uniqueReference: string;
        validationDocumentLink?: string;
    }
    //billing.BankAccountStateEnum
    export type BankAccountStateEnum = "blockedForIncidents" | "pendingValidation" | "valid"
    //billing.Bill
    // fullName: billing.Bill.Bill
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
    //billing.BillDetail
    // fullName: billing.BillDetail.BillDetail
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
    //billing.BillingTaskStatusEnum
    export type BillingTaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    //billing.CreditBalance
    // fullName: billing.CreditBalance.CreditBalance
    export interface CreditBalance {
        amount: orderPrice;
        balanceName: string;
    }
    //billing.CreditCard
    // fullName: billing.CreditCard.CreditCard
    export interface CreditCard {
        defaultPaymentMean: boolean;
        description?: string;
        expirationDate: string;
        id: number;
        number: string;
        state: billing.CreditCardStateEnum;
        threeDsValidated: boolean;
        type: string;
    }
    //billing.CreditCardStateEnum
    export type CreditCardStateEnum = "expired" | "tooManyFailures" | "valid"
    //billing.DeferredPaymentAccount
    // fullName: billing.DeferredPaymentAccount.DeferredPaymentAccount
    export interface DeferredPaymentAccount {
        creationDate: string;
        defaultPaymentMean: boolean;
        description?: string;
        id: number;
        label?: string;
        state: billing.DeferredPaymentAccountStatusEnum;
    }
    //billing.DeferredPaymentAccountStatusEnum
    export type DeferredPaymentAccountStatusEnum = "valid"
    //billing.Deposit
    // fullName: billing.Deposit.Deposit
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
    //billing.DepositDetail
    // fullName: billing.DepositDetail.DepositDetail
    export interface DepositDetail {
        depositDetailId: string;
        description: string;
        domain: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    //billing.FidelityAccount
    // fullName: billing.FidelityAccount.FidelityAccount
    export interface FidelityAccount {
        alertThreshold?: number;
        balance: number;
        canBeCredited: boolean;
        lastUpdate: string;
        openDate: string;
    }
    //billing.FidelityMovement
    // fullName: billing.FidelityMovement.FidelityMovement
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
    //billing.ItemDetail
    // fullName: billing.ItemDetail.ItemDetail
    export interface ItemDetail {
        order: billing.ItemDetail.Order;
    }
    export namespace ItemDetail {
        //billing.ItemDetail.Order
        // fullName: billing.ItemDetail.Order.Order
        export interface Order {
            action?: billing.ItemDetail.OrderActionEnum;
            configurations: billing.ItemDetail.OrderConfiguration[];
            plan: billing.ItemDetail.OrderPlan;
        }
        //billing.ItemDetail.OrderActionEnum
        export type OrderActionEnum = "consumption" | "installation" | "renew" | "upgrade"
        //billing.ItemDetail.OrderConfiguration
        // fullName: billing.ItemDetail.OrderConfiguration.OrderConfiguration
        export interface OrderConfiguration {
            label: string;
            value: string;
        }
        //billing.ItemDetail.OrderPlan
        // fullName: billing.ItemDetail.OrderPlan.OrderPlan
        export interface OrderPlan {
            code?: string;
            duration?: string;
            pricingMode?: string;
            product: billing.ItemDetail.OrderPlanProduct;
            quantity?: number;
        }
        //billing.ItemDetail.OrderPlanProduct
        // fullName: billing.ItemDetail.OrderPlanProduct.OrderPlanProduct
        export interface OrderPlanProduct {
            name?: string;
        }
    }
    //billing.ManualDomainPaymentStatus
    // fullName: billing.ManualDomainPaymentStatus.ManualDomainPaymentStatus
    export interface ManualDomainPaymentStatus {
        domainsToMigrate?: number;
        migratedDomains?: number;
        status: billing.BillingTaskStatusEnum;
    }
    //billing.Movement
    // fullName: billing.Movement.Movement
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
    //billing.Order
    // fullName: billing.Order.Order
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
    //billing.OrderDetail
    // fullName: billing.OrderDetail.OrderDetail
    export interface OrderDetail {
        cancelled: boolean;
        description: string;
        domain: string;
        orderDetailId: number;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    //billing.OvhAccount
    // fullName: billing.OvhAccount.OvhAccount
    export interface OvhAccount {
        alertThreshold?: number;
        balance: orderPrice;
        canBeCredited: boolean;
        isActive: boolean;
        lastUpdate: string;
        openDate: string;
        ovhAccountId: string;
    }
    //billing.Payment
    // fullName: billing.Payment.Payment
    export interface Payment {
        paymentDate: string;
        paymentIdentifier?: string;
        paymentType: billing.PaymentMeanEnum;
    }
    //billing.PaymentMeanEnum
    export type PaymentMeanEnum = "cash" | "chargeback" | "cheque" | "creditAccount" | "creditCard" | "debtAccount" | "deposit" | "digitalLaunchPad" | "edinar" | "fidelityPoints" | "free" | "ideal" | "incubatorAccount" | "mandat" | "multibanco" | "none" | "ovhAccount" | "paymentMandate" | "paypal" | "payu" | "platnosci" | "refund" | "transfer" | "withdrawal"
    //billing.PaymentMeanValidation
    // fullName: billing.PaymentMeanValidation.PaymentMeanValidation
    export interface PaymentMeanValidation {
        id: number;
        submitUrl?: string;
        url: string;
        validationType: billing.PaymentMeanValidationType;
    }
    //billing.PaymentMeanValidationType
    export type PaymentMeanValidationType = "creditAccount" | "documentToSend" | "simpleValidation"
    //billing.PaymentMethod
    // fullName: billing.PaymentMethod.PaymentMethod
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
    //billing.Paypal
    // fullName: billing.Paypal.Paypal
    export interface Paypal {
        agreementId: string;
        creationDate: string;
        defaultPaymentMean: boolean;
        description?: string;
        email: string;
        id: number;
        state: billing.PaypalStateEnum;
    }
    //billing.PaypalStateEnum
    export type PaypalStateEnum = "tooManyFailures" | "valid"
    //billing.Refund
    // fullName: billing.Refund.Refund
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
    //billing.RefundDetail
    // fullName: billing.RefundDetail.RefundDetail
    export interface RefundDetail {
        description: string;
        domain: string;
        quantity: string;
        reference: string;
        refundDetailId: string;
        refundId: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    //billing.ReusablePaymentMeanEnum
    export type ReusablePaymentMeanEnum = "CREDIT_CARD" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL" | "bankAccount" | "creditCard" | "fidelityAccount" | "ovhAccount" | "paypal"
    //billing.SlaOperation
    // fullName: billing.SlaOperation.SlaOperation
    export interface SlaOperation {
        date: string;
        description: string;
        endDate?: string;
        id: number;
        name: string;
        startDate: string;
    }
    //billing.SlaOperationService
    // fullName: billing.SlaOperationService.SlaOperationService
    export interface SlaOperationService {
        description: string;
        serviceName: string;
        slaApplication: string;
        slaPlan: string;
    }
    //billing.VoucherAccount
    // fullName: billing.VoucherAccount.VoucherAccount
    export interface VoucherAccount {
        balance: orderPrice;
        lastUpdate: string;
        openDate: string;
        voucherAccountId: string;
    }
    //billing.VoucherMovement
    // fullName: billing.VoucherMovement.VoucherMovement
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
    //billing.Withdrawal
    // fullName: billing.Withdrawal.Withdrawal
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
    //billing.WithdrawalDetail
    // fullName: billing.WithdrawalDetail.WithdrawalDetail
    export interface WithdrawalDetail {
        description: string;
        domain: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
        withdrawalDetailId: string;
    }
    export namespace credit {
        //billing.credit.Balance
        // fullName: billing.credit.Balance.Balance
        export interface Balance {
            amount: orderPrice;
            balanceName: string;
            booked: billing.credit.balance.BookedMovement[];
            creationDate: string;
            expiring: billing.credit.balance.ExpiringMovement[];
            expiringSummary: billing.credit.balance.ExpiringMovement[];
            lastUpdate: string;
            type: billing.credit.balance.Type;
        }
        export namespace balance {
            //billing.credit.balance.BookedMovement
            // fullName: billing.credit.balance.BookedMovement.BookedMovement
            export interface BookedMovement {
                amount: orderPrice;
                orderId: number;
            }
            //billing.credit.balance.ExpiringMovement
            // fullName: billing.credit.balance.ExpiringMovement.ExpiringMovement
            export interface ExpiringMovement {
                amount: orderPrice;
                creationDate: string;
                expirationDate: string;
                lastUpdate: string;
                sourceObject: billing.credit.balance.movement.SubObject;
            }
            //billing.credit.balance.Movement
            // fullName: billing.credit.balance.Movement.Movement
            export interface Movement {
                amount: orderPrice;
                balanceName: string;
                creationDate: string;
                expirationDate?: string;
                lastUpdate: string;
                movementId: number;
                orderId?: number;
                sourceObject: billing.credit.balance.movement.SubObject;
                type: string;
            }
            //billing.credit.balance.Type
            export type Type = "PREPAID_ACCOUNT" | "VOUCHER" | "DEPOSIT" | "BONUS"
            export namespace movement {
                //billing.credit.balance.movement.SubObject
                // fullName: billing.credit.balance.movement.SubObject.SubObject
                export interface SubObject {
                    id?: string;
                    name?: string;
                }
            }
        }
    }
    export namespace fidelityAccount {
        //billing.fidelityAccount.OperationEnum
        export type OperationEnum = "bonus" | "cancel-bonus" | "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
    export namespace order {
        //billing.order.AssociatedObject
        // fullName: billing.order.AssociatedObject.AssociatedObject
        export interface AssociatedObject {
            id?: string;
            type?: billing.order.associatedObject.TypeEnum;
        }
        //billing.order.OrderStatusEnum
        export type OrderStatusEnum = "cancelled" | "cancelling" | "checking" | "delivered" | "delivering" | "documentsRequested" | "notPaid" | "unknown"
        //billing.order.PayWithPaymentMethod
        // fullName: billing.order.PayWithPaymentMethod.PayWithPaymentMethod
        export interface PayWithPaymentMethod {
            id: number;
        }
        //billing.order.PaymentMean
        // fullName: billing.order.PaymentMean.PaymentMean
        export interface PaymentMean {
            fee: number;
            htmlForm?: string;
            httpMethod: string;
            logo?: string;
            parameters: billing.order.paymentMean.HttpParameter[];
            subType?: string;
            url: string;
        }
        //billing.order.PaymentMeans
        // fullName: billing.order.PaymentMeans.PaymentMeans
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
        //billing.order.PaymentMethods
        // fullName: billing.order.PaymentMethods.PaymentMethods
        export interface PaymentMethods {
            available: payment.method.AvailablePaymentMethod[];
            registered: number[];
        }
        //billing.order.RegisteredPaymentMean
        // fullName: billing.order.RegisteredPaymentMean.RegisteredPaymentMean
        export interface RegisteredPaymentMean {
            paymentMean: billing.ReusablePaymentMeanEnum;
        }
        //billing.order.RetractionReasonEnum
        export type RetractionReasonEnum = "competitor" | "difficulty" | "expensive" | "other" | "performance" | "reliability" | "unused"
        export namespace associatedObject {
            //billing.order.associatedObject.TypeEnum
            export type TypeEnum = "Bill" | "Deposit" | "Refund" | "Withdrawal"
        }
        export namespace paymentMean {
            //billing.order.paymentMean.HttpParameter
            // fullName: billing.order.paymentMean.HttpParameter.HttpParameter
            export interface HttpParameter {
                choice?: billing.order.paymentMean.HttpParameterChoice[];
                name: string;
                value?: string;
            }
            //billing.order.paymentMean.HttpParameterChoice
            // fullName: billing.order.paymentMean.HttpParameterChoice.HttpParameterChoice
            export interface HttpParameterChoice {
                name: string;
                value: string;
            }
        }
    }
    export namespace ovhAccount {
        //billing.ovhAccount.OperationEnum
        export type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
    export namespace paymentMethod {
        //billing.paymentMethod.PaymentSubTypeEnum
        export type PaymentSubTypeEnum = "AMERICAN_EXPRESS" | "MASTERCARD" | "VISA"
        //billing.paymentMethod.PaymentTypeEnum
        export type PaymentTypeEnum = "BANK_ACCOUNT" | "CREDIT_CARD" | "DEFERRED_PAYMENT_ACCOUNT" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL"
        //billing.paymentMethod.StatusEnum
        export type StatusEnum = "BLOCKED" | "BLOCKED_BY_CUSTOMER" | "BROKEN" | "CANCELED" | "CANCELED_BY_CUSTOMER" | "CREATED" | "ERROR" | "EXPIRED" | "PAUSED" | "VALID" | "VALID_FOR_CREDIT"
    }
    export namespace voucherAccount {
        //billing.voucherAccount.OperationEnum
        export type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
}
export namespace complexType {
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace contact {
    //contact.Address
    // fullName: contact.Address.Address
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
    //contact.Contact
    // fullName: contact.Contact.Contact
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
    //contact.FieldInformation
    // fullName: contact.FieldInformation.FieldInformation
    export interface FieldInformation {
        fieldName: string;
        mandatory: boolean;
        readOnly: boolean;
    }
}
export namespace coreTypes {
    //coreTypes.ContinentEnum
    export type ContinentEnum = "africa" | "antartica" | "asia" | "europe" | "north-america" | "oceania" | "south-america"
    //coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace debt {
    //debt.Balance
    // fullName: debt.Balance.Balance
    export interface Balance {
        active: boolean;
        dueAmount: orderPrice;
        pendingAmount: orderPrice;
        todoAmount: orderPrice;
        unmaturedAmount: orderPrice;
    }
    //debt.Debt
    // fullName: debt.Debt.Debt
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
    //debt.Operation
    // fullName: debt.Operation.Operation
    export interface Operation {
        amount: orderPrice;
        date: string;
        depositOrderId: number;
        operationId: number;
        status: debt.entry.StatusEnum;
        type?: debt.entry.OperationEnum;
    }
    export namespace associatedObject {
        //debt.associatedObject.PaymentInfo
        // fullName: debt.associatedObject.PaymentInfo.PaymentInfo
        export interface PaymentInfo {
            description?: string;
            paymentType: billing.PaymentMeanEnum;
            publicLabel?: string;
        }
        //debt.associatedObject.TypeEnum
        export type TypeEnum = "Bill" | "DebtOperation" | "Deposit" | "Order" | "OvhAccountMovement" | "Refund" | "Withdrawal"
    }
    export namespace entry {
        //debt.entry.AssociatedObject
        // fullName: debt.entry.AssociatedObject.AssociatedObject
        export interface AssociatedObject {
            id?: string;
            paymentInfo?: debt.associatedObject.PaymentInfo;
            subId?: string;
            type?: debt.associatedObject.TypeEnum;
        }
        //debt.entry.OperationEnum
        export type OperationEnum = "CANCEL" | "CASH_MANUAL" | "CHECK_MANUAL" | "CREDITCARD" | "CREDITCARD_AUTOMATIC" | "CREDITCARD_MANUAL" | "CREDIT_ACCOUNT_AUTOMATIC" | "EDINAR_MANUAL" | "IDEAL_MANUAL" | "MULTIBANCO_MANUAL" | "ORDER" | "PAYPAL_AUTOMATIC" | "PAYPAL_MANUAL" | "PAYU_MANUAL" | "RECOVERY_TRANSFER_AUTOMATIC" | "REFUND" | "REFUND_CHECK" | "REFUND_CREDITCARD" | "REFUND_CREDIT_ACCOUNT" | "REFUND_LOSS" | "REFUND_PAYPAL" | "REFUND_PAYU" | "REFUND_SEPA" | "REFUND_TRANSFER" | "REFUND_UNKNOWN" | "SEPA_AUTOMATIC" | "TRANSFER_MANUAL" | "UNPAID_CHECK" | "UNPAID_CREDITCARD" | "UNPAID_CREDIT_ACCOUNT" | "UNPAID_PAYPAL" | "UNPAID_SEPA" | "UNPAID_WITHDRAW" | "WARRANT_MANUAL" | "WITHDRAW_AUTOMATIC"
        //debt.entry.StatusEnum
        export type StatusEnum = "CANCELLED" | "DONE" | "FAILED" | "PAID" | "PENDING" | "TODO"
    }
}
export namespace dedicated {
    //dedicated.TemplateOsFileSystemEnum
    export type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs"
    //dedicated.TemplateOsHardwareRaidEnum
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
    //dedicated.TemplateOsLanguageEnum
    export type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK"
    //dedicated.TemplateOsProperties
    // fullName: dedicated.TemplateOsProperties.TemplateOsProperties
    export interface TemplateOsProperties {
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    //dedicated.TemplateOsTypeEnum
    export type TemplateOsTypeEnum = "bsd" | "linux" | "solaris" | "windows"
    //dedicated.TemplateOsUsageEnum
    export type TemplateOsUsageEnum = "basic" | "customer" | "hosting" | "other" | "readyToUse" | "virtualisation"
    //dedicated.TemplatePartitionTypeEnum
    export type TemplatePartitionTypeEnum = "logical" | "lv" | "primary"
    export namespace installationTemplate {
        //dedicated.installationTemplate.Templates
        // fullName: dedicated.installationTemplate.Templates.Templates
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
        //dedicated.installationTemplate.hardwareRaid
        // fullName: dedicated.installationTemplate.hardwareRaid.hardwareRaid
        export interface hardwareRaid {
            disks: string[];
            mode: dedicated.TemplateOsHardwareRaidEnum;
            name: string;
            step: number;
        }
        //dedicated.installationTemplate.templatePartitioningSchemes
        // fullName: dedicated.installationTemplate.templatePartitioningSchemes.templatePartitioningSchemes
        export interface templatePartitioningSchemes {
            name: string;
            priority: number;
        }
        //dedicated.installationTemplate.templatePartitions
        // fullName: dedicated.installationTemplate.templatePartitions.templatePartitions
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
        //dedicated.server.BitFormatEnum
        export type BitFormatEnum = 32 | 64
        //dedicated.server.PartitionRaidEnum
        export type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6"
        //dedicated.server.SupportsUEFIEnum
        export type SupportsUEFIEnum = "no" | "only" | "yes"
    }
}
export namespace domain {
    //domain.DocumentFormatsEnum
    export type DocumentFormatsEnum = "gif" | "jpeg" | "jpg" | "pdf" | "png"
    //domain.NicOperationFunctionEnum
    export type NicOperationFunctionEnum = "ContactControl" | "DnsAnycastActivate" | "DnsAnycastDeactivate" | "DnssecDisable" | "DnssecEnable" | "DnssecResigning" | "DnssecRollKsk" | "DnssecRollZsk" | "DomainContactControl" | "DomainContactUpdate" | "DomainControl" | "DomainCreate" | "DomainDelete" | "DomainDnsUpdate" | "DomainDsUpdate" | "DomainHold" | "DomainHostCreate" | "DomainHostDelete" | "DomainHostUpdate" | "DomainIncomingTransfer" | "DomainLock" | "DomainOutgoingTransfer" | "DomainRenew" | "DomainRestore" | "DomainTrade" | "ZoneImport"
    //domain.OperationActionEnum
    export type OperationActionEnum = "canCancel" | "canCorrect" | "canRelaunch" | "canReset"
    //domain.OperationStatusEnum
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    //domain.OperationStep
    // fullName: domain.OperationStep.OperationStep
    export interface OperationStep {
        description: string;
        executionDuration: number;
        step: string;
    }
}
export namespace geolocation {
    //geolocation.ContinentCountryLocation
    // fullName: geolocation.ContinentCountryLocation.ContinentCountryLocation
    export interface ContinentCountryLocation {
        continent: coreTypes.ContinentEnum;
        countryCode: coreTypes.CountryEnum;
        ip: string;
    }
}
export namespace http {
    //http.MethodEnum
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}
export namespace insight {
    //insight.Access
    // fullName: insight.Access.Access
    export interface Access {
        access: string;
        createdAt: string;
        expireAt: string;
    }
}
export namespace me {
    export namespace SupportLevel {
        //me.SupportLevel.Level
        // fullName: me.SupportLevel.Level.Level
        export interface Level {
            level: me.SupportLevel.LevelTypeEnum;
        }
        //me.SupportLevel.LevelTypeEnum
        export type LevelTypeEnum = "standard" | "premium" | "premium-accredited" | "business" | "enterprise"
    }
    export namespace consent {
        //me.consent.Campaign
        // fullName: me.consent.Campaign.Campaign
        export interface Campaign {
            description: string;
            name: string;
            type: me.consent.CampaignTypeEnum;
        }
        //me.consent.CampaignTypeEnum
        export type CampaignTypeEnum = "OPTIN" | "OPTOUT"
        //me.consent.Consent
        // fullName: me.consent.Consent.Consent
        export interface Consent {
            campaign: string;
            history: me.consent.Decision[];
            type: me.consent.CampaignTypeEnum;
            value: boolean;
        }
        //me.consent.Decision
        // fullName: me.consent.Decision.Decision
        export interface Decision {
            timestamp: string;
            value: boolean;
        }
    }
    export namespace consumption {
        //me.consumption.Price
        // fullName: me.consumption.Price.Price
        export interface Price {
            currencyCode: order.CurrencyCodeEnum;
            text: string;
            value: number;
            valueInUcents: number;
        }
        //me.consumption.Transaction
        // fullName: me.consumption.Transaction.Transaction
        export interface Transaction {
            beginDate: string;
            creationDate?: string;
            elements: me.consumption.transaction.Element[];
            endDate?: string;
            id?: number;
            lastUpdate?: string;
            price: me.consumption.Price;
            serviceId: number;
        }
        export namespace transaction {
            //me.consumption.transaction.Element
            // fullName: me.consumption.transaction.Element.Element
            export interface Element {
                details: me.consumption.transaction.Element.Detail[];
                planCode: string;
                planFamily: string;
                price: me.consumption.Price;
                quantity: number;
            }
            export namespace Element {
                //me.consumption.transaction.Element.Detail
                // fullName: me.consumption.transaction.Element.Detail.Detail
                export interface Detail {
                    price: me.consumption.Price;
                    quantity: number;
                    unique_id?: string;
                }
            }
        }
    }
    export namespace payment {
        export namespace method {
            //me.payment.method.AvailablePaymentMethod
            // fullName: me.payment.method.AvailablePaymentMethod.AvailablePaymentMethod
            export interface AvailablePaymentMethod {
                icon: me.payment.method.Icon;
                oneshot: boolean;
                paymentType: string;
                registerable: boolean;
            }
            //me.payment.method.CallbackUrl
            // fullName: me.payment.method.CallbackUrl.CallbackUrl
            export interface CallbackUrl {
                cancel: string;
                error: string;
                failure: string;
                pending: string;
                success: string;
            }
            //me.payment.method.Icon
            // fullName: me.payment.method.Icon.Icon
            export interface Icon {
                data?: string;
                name?: string;
            }
            //me.payment.method.PaymentMethod
            // fullName: me.payment.method.PaymentMethod.PaymentMethod
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
                //me.payment.method.PaymentMethod.Status
                export type Status = "CANCELED" | "CANCELING" | "CREATED" | "ERROR" | "EXPIRED" | "CREATING" | "MAINTENANCE" | "PAUSED" | "VALID"
            }
            export namespace Register {
                //me.payment.method.Register.ValidationResult
                // fullName: me.payment.method.Register.ValidationResult.ValidationResult
                export interface ValidationResult {
                    paymentMethodId: number;
                    url?: string;
                    validationType: me.payment.method.Register.ValidationType;
                }
                //me.payment.method.Register.ValidationType
                export type ValidationType = "DONE" | "REDIRECT" | "IFRAME_VANTIV"
            }
            //me.payment.method.Transaction
            // fullName: me.payment.method.Transaction.Transaction
            export interface Transaction {
                amount: orderPrice;
                creationDate: string;
                status: me.payment.method.Transaction.Status;
                transactionId: number;
                type: me.payment.method.Transaction.Type;
            }
            export namespace Transaction {
                //me.payment.method.Transaction.Status
                export type Status = "CANCELED" | "CANCELING" | "CONFIRMING" | "CREATED" | "ERROR" | "FAILED" | "READY" | "SUCCESS"
                //me.payment.method.Transaction.Type
                export type Type = "CREDIT" | "DEBIT"
            }
        }
    }
}
export namespace nichandle {
    export namespace Authentication {
        //nichandle.Authentication.Certificate
        // fullName: nichandle.Authentication.Certificate.Certificate
        export interface Certificate {
            expiration: string;
            subject: string;
        }
        //nichandle.Authentication.Group
        // fullName: nichandle.Authentication.Group.Group
        export interface Group {
            creation: string;
            defaultGroup: boolean;
            description: string;
            lastUpdate: string;
            name: string;
            role: nichandle.RoleEnum;
        }
        //nichandle.Authentication.Provider
        // fullName: nichandle.Authentication.Provider.Provider
        export interface Provider {
            creation: string;
            groupAttributeName: string;
            idpSigningCertificate: nichandle.Authentication.Certificate;
            lastUpdate: string;
            ssoServiceUrl: string;
        }
    }
    //nichandle.BillingCapacities
    // fullName: nichandle.BillingCapacities.BillingCapacities
    export interface BillingCapacities {
        canUseDebtSystem: boolean;
        canUsePostalMailForInvoices: boolean;
        requiredPaymentMethod: nichandle.RequiredPaymentMethodEnum;
    }
    //nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    //nichandle.Currency
    // fullName: nichandle.Currency.Currency
    export interface Currency {
        code: string;
        symbol: string;
    }
    //nichandle.DeveloperModeRestriction
    // fullName: nichandle.DeveloperModeRestriction.DeveloperModeRestriction
    export interface DeveloperModeRestriction {
        enabled: boolean;
    }
    //nichandle.DomainTask
    // fullName: nichandle.DomainTask.DomainTask
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
    //nichandle.DomainTaskArgument
    // fullName: nichandle.DomainTaskArgument.DomainTaskArgument
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
    //nichandle.DomainTaskProgressBar
    // fullName: nichandle.DomainTaskProgressBar.DomainTaskProgressBar
    export interface DomainTaskProgressBar {
        currentStep: domain.OperationStep;
        expectedDoneDate?: string;
        followUpSteps?: domain.OperationStep[];
        lastUpdateDate?: string;
        progress: number;
        taskActions: domain.OperationActionEnum[];
        taskStatus: domain.OperationStatusEnum;
    }
    //nichandle.GenderEnum
    export type GenderEnum = "female" | "male"
    //nichandle.IpRegistryEnum
    export type IpRegistryEnum = "ARIN" | "RIPE"
    //nichandle.IpRestriction
    // fullName: nichandle.IpRestriction.IpRestriction
    export interface IpRestriction {
        id: number;
        ip: string;
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    //nichandle.IpRestrictionDefaultRule
    // fullName: nichandle.IpRestrictionDefaultRule.IpRestrictionDefaultRule
    export interface IpRestrictionDefaultRule {
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    //nichandle.Ipv4Org
    // fullName: nichandle.Ipv4Org.Ipv4Org
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
    //nichandle.LanguageEnum
    export type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT"
    //nichandle.LegalFormEnum
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    //nichandle.ManagerPreference
    // fullName: nichandle.ManagerPreference.ManagerPreference
    export interface ManagerPreference {
        key: string;
        value: string;
    }
    //nichandle.NicAutorenewInfos
    // fullName: nichandle.NicAutorenewInfos.NicAutorenewInfos
    export interface NicAutorenewInfos {
        active: boolean;
        lastRenew?: string;
        renewDay: number;
    }
    //nichandle.Nichandle
    // fullName: nichandle.Nichandle.Nichandle
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
    //nichandle.NichandleSmsNotification
    // fullName: nichandle.NichandleSmsNotification.NichandleSmsNotification
    export interface NichandleSmsNotification {
        abuse: boolean;
        creationDate: string;
        phoneNumber: string;
        status: nichandle.NotificationStatusEnum;
        updateDate?: string;
    }
    //nichandle.NotificationStatusEnum
    export type NotificationStatusEnum = "ok" | "waitingForValidation"
    //nichandle.OvhCompanyEnum
    export type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart"
    //nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
    //nichandle.RequiredPaymentMethodEnum
    export type RequiredPaymentMethodEnum = "mandatoryForAutorenew" | "mandatoryForPostpaid" | "notMandatory"
    //nichandle.RoleEnum
    export type RoleEnum = "REGULAR" | "ADMIN" | "UNPRIVILEGED"
    //nichandle.StateEnum
    export type StateEnum = "complete" | "incomplete"
    //nichandle.SubAccount
    // fullName: nichandle.SubAccount.SubAccount
    export interface SubAccount {
        creationDate: string;
        description?: string;
        id: number;
    }
    //nichandle.SubAccountConsumerKey
    // fullName: nichandle.SubAccountConsumerKey.SubAccountConsumerKey
    export interface SubAccountConsumerKey {
        consumerKey: string;
    }
    //nichandle.Subscription
    // fullName: nichandle.Subscription.Subscription
    export interface Subscription {
        registered?: boolean;
        type: string;
    }
    //nichandle.User
    // fullName: nichandle.User.User
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
    //nichandle.UserStatus
    export type UserStatus = "OK" | "DISABLED" | "PASSWORD_CHANGE_REQUIRED"
    //nichandle.VipStatus
    // fullName: nichandle.VipStatus.VipStatus
    export interface VipStatus {
        cloud: boolean;
        dedicated: boolean;
        telecom: boolean;
        web: boolean;
    }
    //nichandle.VoucherStatus
    // fullName: nichandle.VoucherStatus.VoucherStatus
    export interface VoucherStatus {
        validity: boolean;
    }
    export namespace accessRestriction {
        //nichandle.accessRestriction.IpRestrictionRuleEnum
        export type IpRestrictionRuleEnum = "accept" | "deny"
        //nichandle.accessRestriction.SOTPAccount
        // fullName: nichandle.accessRestriction.SOTPAccount.SOTPAccount
        export interface SOTPAccount {
            creationDate: string;
            lastUsedDate?: string;
            remaining: number;
            status: nichandle.accessRestriction.SOTPStatusEnum;
        }
        //nichandle.accessRestriction.SOTPSecret
        // fullName: nichandle.accessRestriction.SOTPSecret.SOTPSecret
        export interface SOTPSecret {
            codes: string[];
        }
        //nichandle.accessRestriction.SOTPStatusEnum
        export type SOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        //nichandle.accessRestriction.SOTPValidate
        // fullName: nichandle.accessRestriction.SOTPValidate.SOTPValidate
        export interface SOTPValidate {
            remainingCodes: number;
        }
        //nichandle.accessRestriction.SmsAccount
        // fullName: nichandle.accessRestriction.SmsAccount.SmsAccount
        export interface SmsAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            phoneNumber: string;
            status: nichandle.accessRestriction.SmsStatusEnum;
        }
        //nichandle.accessRestriction.SmsCode
        // fullName: nichandle.accessRestriction.SmsCode.SmsCode
        export interface SmsCode {
            challenge: string;
        }
        //nichandle.accessRestriction.SmsSecret
        // fullName: nichandle.accessRestriction.SmsSecret.SmsSecret
        export interface SmsSecret {
            id: number;
            remainingTry: number;
        }
        //nichandle.accessRestriction.SmsStatusEnum
        export type SmsStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        //nichandle.accessRestriction.TOTPAccount
        // fullName: nichandle.accessRestriction.TOTPAccount.TOTPAccount
        export interface TOTPAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.TOTPStatusEnum;
        }
        //nichandle.accessRestriction.TOTPSecret
        // fullName: nichandle.accessRestriction.TOTPSecret.TOTPSecret
        export interface TOTPSecret {
            id: number;
            qrcodeHelper: string;
            secret: string;
        }
        //nichandle.accessRestriction.TOTPStatusEnum
        export type TOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        //nichandle.accessRestriction.U2FAccount
        // fullName: nichandle.accessRestriction.U2FAccount.U2FAccount
        export interface U2FAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.U2FStatusEnum;
        }
        //nichandle.accessRestriction.U2FRegisterChallenge
        // fullName: nichandle.accessRestriction.U2FRegisterChallenge.U2FRegisterChallenge
        export interface U2FRegisterChallenge {
            applicationId: string;
            id: number;
            request: nichandle.accessRestriction.U2FRegistrationRequest;
        }
        //nichandle.accessRestriction.U2FRegistrationRequest
        // fullName: nichandle.accessRestriction.U2FRegistrationRequest.U2FRegistrationRequest
        export interface U2FRegistrationRequest {
            challenge: string;
            version: string;
        }
        //nichandle.accessRestriction.U2FSignChallenge
        // fullName: nichandle.accessRestriction.U2FSignChallenge.U2FSignChallenge
        export interface U2FSignChallenge {
            applicationId: string;
            request: nichandle.accessRestriction.U2FSignRequest;
        }
        //nichandle.accessRestriction.U2FSignRequest
        // fullName: nichandle.accessRestriction.U2FSignRequest.U2FSignRequest
        export interface U2FSignRequest {
            challenge: string;
            keyHandle: string;
            version: string;
        }
        //nichandle.accessRestriction.U2FStatusEnum
        export type U2FStatusEnum = "disabled" | "enabled" | "needCodeValidation"
    }
    export namespace changeContact {
        //nichandle.changeContact.ContactTypeEnum
        export type ContactTypeEnum = "contactAdmin" | "contactBilling" | "contactTech"
        //nichandle.changeContact.TaskStateEnum
        export type TaskStateEnum = "aborted" | "checkValidity" | "doing" | "done" | "error" | "expired" | "refused" | "todo" | "validatingByCustomers"
    }
    export namespace changeEmail {
        //nichandle.changeEmail.TaskStateEnum
        export type TaskStateEnum = "aborted" | "done" | "refused" | "todo"
    }
    export namespace contactChange {
        //nichandle.contactChange.Task
        // fullName: nichandle.contactChange.Task.Task
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
        //nichandle.document.Document
        // fullName: nichandle.document.Document.Document
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
        //nichandle.emailChange.Task
        // fullName: nichandle.emailChange.Task.Task
        export interface Task {
            dateDone?: string;
            dateRequest: string;
            id: number;
            newEmail: string;
            state: nichandle.changeEmail.TaskStateEnum;
        }
    }
    //nichandle.emailNotification
    // fullName: nichandle.emailNotification.emailNotification
    export interface emailNotification {
        body: string;
        date: string;
        id: number;
        subject: string;
    }
    //nichandle.ipxe
    // fullName: nichandle.ipxe.ipxe
    export interface ipxe {
        name: string;
        script: string;
    }
    //nichandle.sshKey
    // fullName: nichandle.sshKey.sshKey
    export interface sshKey {
        default: boolean;
        key: string;
        keyName: string;
    }
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace payment {
    export namespace method {
        //payment.method.AvailablePaymentMethod
        // fullName: payment.method.AvailablePaymentMethod.AvailablePaymentMethod
        export interface AvailablePaymentMethod {
            icon: payment.method.Icon;
            oneshot: boolean;
            paymentType: string;
            registerable: boolean;
        }
        //payment.method.Icon
        // fullName: payment.method.Icon.Icon
        export interface Icon {
            data?: string;
            name?: string;
        }
    }
}
export namespace telephony {
    //telephony.BillingSettings
    // fullName: telephony.BillingSettings.BillingSettings
    export interface BillingSettings {
        renewByBillingContact: boolean;
    }
    //telephony.DefaultIpRestriction
    // fullName: telephony.DefaultIpRestriction.DefaultIpRestriction
    export interface DefaultIpRestriction {
        id: number;
        subnet: string;
        type: telephonyProtocolEnum;
    }
    //telephony.LineDescriptionSettings
    // fullName: telephony.LineDescriptionSettings.LineDescriptionSettings
    export interface LineDescriptionSettings {
        displayOnBill: boolean;
        displayOnIncomingCall: boolean;
    }
    //telephony.MailDomain2Service
    // fullName: telephony.MailDomain2Service.MailDomain2Service
    export interface MailDomain2Service {
        domain: string;
        id: number;
    }
    //telephony.ProtocolEnum
    export type ProtocolEnum = "mgcp" | "sip"
    //telephony.Settings
    // fullName: telephony.Settings.Settings
    export interface Settings {
        billingPolicies: telephony.BillingSettings;
        lineDescriptionPolicies: telephony.LineDescriptionSettings;
    }
}
export namespace xander {
    //xander.ContactFieldEnum
    export type ContactFieldEnum = "address.city" | "address.country" | "address.line1" | "address.line2" | "address.line3" | "address.otherDetails" | "address.province" | "address.zip" | "birthCity" | "birthCountry" | "birthDay" | "birthZip" | "cellPhone" | "companyNationalIdentificationNumber" | "email" | "fax" | "firstName" | "gender" | "language" | "lastName" | "legalForm" | "nationalIdentificationNumber" | "nationality" | "organisationName" | "organisationType" | "phone" | "spareEmail" | "vat"
}
export namespace xdsl {
    //xdsl.Setting
    // fullName: xdsl.Setting.Setting
    export interface Setting {
        resellerFastModemShipping: boolean;
        resellerModemBasicConfig: boolean;
    }
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
export interface Me{
    // GET /me
    $get(): Promise<nichandle.Nichandle>;
    // PUT /me
    $put(body?: {body: nichandle.Nichandle}): Promise<void>;
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
                $post(body?: {code: string}): Promise<void>;
            }
            enable: {
                // POST /me/accessRestriction/backupCode/enable
                $post(body?: {code: string}): Promise<void>;
            }
            validate: {
                // POST /me/accessRestriction/backupCode/validate
                $post(body?: {code: string}): Promise<nichandle.accessRestriction.SOTPValidate>;
            }
        }
        developerMode: {
            // GET /me/accessRestriction/developerMode
            $get(): Promise<nichandle.DeveloperModeRestriction>;
            // PUT /me/accessRestriction/developerMode
            $put(body?: {body: nichandle.DeveloperModeRestriction}): Promise<void>;
        }
        ip: {
            // GET /me/accessRestriction/ip
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/ip
            $post(body?: {ip: string, rule: nichandle.accessRestriction.IpRestrictionRuleEnum, warning: boolean}): Promise<void>;
            $(id: number): {
                // DELETE /me/accessRestriction/ip/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/ip/{id}
                $get(): Promise<nichandle.IpRestriction>;
                // PUT /me/accessRestriction/ip/{id}
                $put(body?: {body: nichandle.IpRestriction}): Promise<void>;
            };
        }
        ipDefaultRule: {
            // GET /me/accessRestriction/ipDefaultRule
            $get(): Promise<nichandle.IpRestrictionDefaultRule>;
            // PUT /me/accessRestriction/ipDefaultRule
            $put(body?: {body: nichandle.IpRestrictionDefaultRule}): Promise<void>;
        }
        sms: {
            // GET /me/accessRestriction/sms
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/sms
            $post(body?: {phone: string}): Promise<nichandle.accessRestriction.SmsSecret>;
            $(id: number): {
                // DELETE /me/accessRestriction/sms/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/sms/{id}
                $get(): Promise<nichandle.accessRestriction.SmsAccount>;
                // PUT /me/accessRestriction/sms/{id}
                $put(body?: {body: nichandle.accessRestriction.SmsAccount}): Promise<void>;
                disable: {
                    // POST /me/accessRestriction/sms/{id}/disable
                    $post(body?: {code: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/sms/{id}/enable
                    $post(body?: {code: string}): Promise<void>;
                }
                sendCode: {
                    // POST /me/accessRestriction/sms/{id}/sendCode
                    $post(): Promise<nichandle.accessRestriction.SmsCode>;
                }
                validate: {
                    // POST /me/accessRestriction/sms/{id}/validate
                    $post(body?: {code: string}): Promise<void>;
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
                $put(body?: {body: nichandle.accessRestriction.TOTPAccount}): Promise<void>;
                disable: {
                    // POST /me/accessRestriction/totp/{id}/disable
                    $post(body?: {code: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/totp/{id}/enable
                    $post(body?: {code: string}): Promise<void>;
                }
                validate: {
                    // POST /me/accessRestriction/totp/{id}/validate
                    $post(body?: {code: string}): Promise<void>;
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
                $put(body?: {body: nichandle.accessRestriction.U2FAccount}): Promise<void>;
                challenge: {
                    // POST /me/accessRestriction/u2f/{id}/challenge
                    $post(): Promise<nichandle.accessRestriction.U2FSignChallenge>;
                }
                disable: {
                    // POST /me/accessRestriction/u2f/{id}/disable
                    $post(body?: {clientData: string, signatureData: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/u2f/{id}/enable
                    $post(body?: {clientData: string, signatureData: string}): Promise<void>;
                }
                validate: {
                    // POST /me/accessRestriction/u2f/{id}/validate
                    $post(body?: {clientData: string, registrationData: string}): Promise<void>;
                }
            };
        }
    }
    agreements: {
        // GET /me/agreements
        $get(param?: {agreed?: agreements.AgreementStateEnum, contractId?: number}): Promise<number[]>;
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
            $get(param?: {applicationId?: number, status?: auth.CredentialStateEnum}): Promise<number[]>;
            $(credentialId: number): {
                // DELETE /me/api/credential/{credentialId}
                $delete(): Promise<void>;
                // GET /me/api/credential/{credentialId}
                $get(): Promise<api.Credential>;
                application: {
                    // GET /me/api/credential/{credentialId}/application
                    $get(): Promise<api.Application>;
                }
            };
        }
        logs: {
            self: {
                // GET /me/api/logs/self
                $get(): Promise<number[]>;
                $(logId: number): {
                    // GET /me/api/logs/self/{logId}
                    $get(): Promise<api.Log>;
                };
            }
            services: {
                // GET /me/api/logs/services
                $get(): Promise<number[]>;
                $(logId: number): {
                    // GET /me/api/logs/services/{logId}
                    $get(): Promise<api.Log>;
                };
            }
        }
    }
    autorenew: {
        // GET /me/autorenew
        $get(): Promise<nichandle.NicAutorenewInfos>;
        // POST /me/autorenew
        $post(body?: {renewDay: number}): Promise<void>;
        // PUT /me/autorenew
        $put(body?: {body: nichandle.NicAutorenewInfos}): Promise<void>;
    }
    availableAutomaticPaymentMeans: {
        // GET /me/availableAutomaticPaymentMeans
        $get(): Promise<billing.AutomaticPaymentMean>;
    }
    bill: {
        // GET /me/bill
        $get(param?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(billId: string): {
            // GET /me/bill/{billId}
            $get(): Promise<billing.Bill>;
            debt: {
                // GET /me/bill/{billId}/debt
                $get(): Promise<debt.Debt>;
                operation: {
                    // GET /me/bill/{billId}/debt/operation
                    $get(param?: {depositOrderId?: number}): Promise<number[]>;
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
    billing: {
        invoicesByPostalMail: {
            // GET /me/billing/invoicesByPostalMail
            $get(): Promise<boolean>;
            // POST /me/billing/invoicesByPostalMail
            $post(body?: {enable: boolean}): Promise<void>;
        }
    }
    certificates: {
        // GET /me/certificates
        $get(param?: {name?: string}): Promise<string[]>;
    }
    changeEmail: {
        // POST /me/changeEmail
        $post(body?: {newEmail: string}): Promise<nichandle.emailChange.Task>;
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
                $put(body?: {value: boolean}): Promise<void>;
            }
        };
    }
    consumption: {
        usage: {
            current: {
                // GET /me/consumption/usage/current
                $get(): Promise<me.consumption.Transaction[]>;
            }
            forecast: {
                // GET /me/consumption/usage/forecast
                $get(): Promise<me.consumption.Transaction[]>;
            }
            history: {
                // GET /me/consumption/usage/history
                $get(param?: {beginDate: string, endDate: string}): Promise<me.consumption.Transaction[]>;
            }
        }
    }
    contact: {
        // GET /me/contact
        $get(): Promise<number[]>;
        // POST /me/contact
        $post(body?: {address: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email: string, fax?: string, firstName: string, gender?: nichandle.GenderEnum, language: nichandle.LanguageEnum, lastName: string, legalForm: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone: string, vat?: string}): Promise<contact.Contact>;
        $(contactId: number): {
            // GET /me/contact/{contactId}
            $get(): Promise<contact.Contact>;
            // PUT /me/contact/{contactId}
            $put(body?: {address?: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, vat?: string}): Promise<contact.Contact>;
            fields: {
                // GET /me/contact/{contactId}/fields
                $get(): Promise<contact.FieldInformation[]>;
            }
        };
    }
    credit: {
        balance: {
            // GET /me/credit/balance
            $get(param?: {type?: billing.credit.balance.Type}): Promise<string[]>;
            $(balanceName: string): {
                // GET /me/credit/balance/{balanceName}
                $get(): Promise<billing.credit.Balance>;
                movement: {
                    // GET /me/credit/balance/{balanceName}/movement
                    $get(): Promise<number[]>;
                    $(movementId: number): {
                        // GET /me/credit/balance/{balanceName}/movement/{movementId}
                        $get(): Promise<billing.credit.balance.Movement>;
                    };
                }
            };
        }
        code: {
            // POST /me/credit/code
            $post(body?: {inputCode: string}): Promise<billing.credit.balance.Movement>;
        }
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
                    $get(param?: {depositOrderId?: number}): Promise<number[]>;
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
        $get(param?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
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
                            $get(param?: {depositOrderId?: number}): Promise<number[]>;
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
        $post(body?: {name: string, tags?: complexType.SafeKeyValue<string>[]}): Promise<nichandle.document.Document>;
        cors: {
            // POST /me/document/cors
            $post(body?: {origin: string}): Promise<void>;
        }
        $(id: string): {
            // DELETE /me/document/{id}
            $delete(): Promise<void>;
            // GET /me/document/{id}
            $get(): Promise<nichandle.document.Document>;
            // PUT /me/document/{id}
            $put(body?: {body: nichandle.document.Document}): Promise<void>;
        };
    }
    fax: {
        customDomains: {
            // GET /me/fax/customDomains
            $get(): Promise<number[]>;
            // POST /me/fax/customDomains
            $post(body?: {domain: string}): Promise<telephony.MailDomain2Service>;
            $(id: number): {
                // DELETE /me/fax/customDomains/{id}
                $delete(): Promise<void>;
                // GET /me/fax/customDomains/{id}
                $get(): Promise<telephony.MailDomain2Service>;
            };
        }
    }
    fidelityAccount: {
        // GET /me/fidelityAccount
        $get(): Promise<billing.FidelityAccount>;
        // PUT /me/fidelityAccount
        $put(body?: {body: billing.FidelityAccount}): Promise<void>;
        creditOrder: {
            // POST /me/fidelityAccount/creditOrder
            $post(body?: {amount: number}): Promise<billing.Order>;
        }
        movements: {
            // GET /me/fidelityAccount/movements
            $get(param?: {date_from?: string, date_to?: string}): Promise<number[]>;
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
            $post(body?: {description?: string, name: string, role?: nichandle.RoleEnum}): Promise<nichandle.Authentication.Group>;
            $(group: string): {
                // DELETE /me/identity/group/{group}
                $delete(): Promise<void>;
                // GET /me/identity/group/{group}
                $get(): Promise<nichandle.Authentication.Group>;
                // PUT /me/identity/group/{group}
                $put(body?: {description?: string, role?: nichandle.RoleEnum}): Promise<void>;
            };
        }
        user: {
            // GET /me/identity/user
            $get(): Promise<string[]>;
            // POST /me/identity/user
            $post(body?: {description?: string, email: string, group?: string, login: string, password: string}): Promise<void>;
            $(user: string): {
                // DELETE /me/identity/user/{user}
                $delete(): Promise<void>;
                // GET /me/identity/user/{user}
                $get(): Promise<nichandle.User>;
                // PUT /me/identity/user/{user}
                $put(body?: {description?: string, email?: string, group?: string}): Promise<void>;
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
    insight: {
        // GET /me/insight
        $get(): Promise<insight.Access>;
    }
    installationTemplate: {
        // GET /me/installationTemplate
        $get(): Promise<string[]>;
        // POST /me/installationTemplate
        $post(body?: {baseTemplateName: string, defaultLanguage: dedicated.TemplateOsLanguageEnum, name: string}): Promise<void>;
        $(templateName: string): {
            // DELETE /me/installationTemplate/{templateName}
            $delete(): Promise<void>;
            // GET /me/installationTemplate/{templateName}
            $get(): Promise<dedicated.installationTemplate.Templates>;
            // PUT /me/installationTemplate/{templateName}
            $put(body?: {body: dedicated.installationTemplate.Templates}): Promise<void>;
            checkIntegrity: {
                // POST /me/installationTemplate/{templateName}/checkIntegrity
                $post(): Promise<void>;
            }
            partitionScheme: {
                // GET /me/installationTemplate/{templateName}/partitionScheme
                $get(): Promise<string[]>;
                // POST /me/installationTemplate/{templateName}/partitionScheme
                $post(body?: {name: string, priority: number}): Promise<void>;
                $(schemeName: string): {
                    // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $delete(): Promise<void>;
                    // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $put(body?: {body: dedicated.installationTemplate.templatePartitioningSchemes}): Promise<void>;
                    hardwareRaid: {
                        // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $get(): Promise<string[]>;
                        // POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $post(body?: {disks: string[], mode: dedicated.TemplateOsHardwareRaidEnum, name: string, step: number}): Promise<void>;
                        $(name: string): {
                            // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $delete(): Promise<void>;
                            // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                            // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $put(body?: {body: dedicated.installationTemplate.hardwareRaid}): Promise<void>;
                        };
                    }
                    partition: {
                        // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $get(): Promise<string[]>;
                        // POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $post(body?: {filesystem: dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: number, size: number, step: number, type: dedicated.TemplatePartitionTypeEnum, volumeName?: string}): Promise<void>;
                        $(mountpoint: string): {
                            // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $delete(): Promise<void>;
                            // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                            // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $put(body?: {body: dedicated.installationTemplate.templatePartitions}): Promise<void>;
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
        $post(body?: {abuse_mailbox: string, address: string, city: string, country: nichandle.CountryEnum, firstname: string, lastname: string, phone: string, registry: nichandle.IpRegistryEnum, state?: string, zip?: string}): Promise<void>;
        $(organisationId: string): {
            // DELETE /me/ipOrganisation/{organisationId}
            $delete(): Promise<void>;
            // GET /me/ipOrganisation/{organisationId}
            $get(): Promise<nichandle.Ipv4Org>;
            // PUT /me/ipOrganisation/{organisationId}
            $put(body?: {body: nichandle.Ipv4Org}): Promise<void>;
        };
    }
    ipxeScript: {
        // GET /me/ipxeScript
        $get(): Promise<string[]>;
        // POST /me/ipxeScript
        $post(body?: {description: string, name: string, script: string}): Promise<nichandle.ipxe>;
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
            $post(body?: {email: string, mailingList: string}): Promise<void>;
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
        $get(param?: {date_from?: string, date_to?: string}): Promise<number[]>;
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
                    $get(param?: {depositOrderId?: number}): Promise<number[]>;
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
                $post(body?: {paymentMethod: billing.order.PayWithPaymentMethod}): Promise<void>;
            }
            payWithRegisteredPaymentMean: {
                // POST /me/order/{orderId}/payWithRegisteredPaymentMean
                $post(body?: {paymentMean: billing.ReusablePaymentMeanEnum, paymentMeanId?: number}): Promise<void>;
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
                $post(body?: {comment?: string, reason: billing.order.RetractionReasonEnum}): Promise<void>;
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
            $put(body?: {body: billing.OvhAccount}): Promise<void>;
            creditOrder: {
                // POST /me/ovhAccount/{ovhAccountId}/creditOrder
                $post(body?: {amount: number}): Promise<billing.Order>;
            }
            movements: {
                // GET /me/ovhAccount/{ovhAccountId}/movements
                $get(param?: {date_from?: string, date_to?: string}): Promise<number[]>;
                $(movementId: number): {
                    // GET /me/ovhAccount/{ovhAccountId}/movements/{movementId}
                    $get(): Promise<billing.Movement>;
                };
            }
            retrieveMoney: {
                // POST /me/ovhAccount/{ovhAccountId}/retrieveMoney
                $post(body?: {amount: number, bankAccountId: number}): Promise<billing.Order>;
            }
        };
    }
    passwordRecover: {
        // POST /me/passwordRecover
        $post(body?: {ovhCompany: nichandle.OvhCompanyEnum, ovhId: string}): Promise<void>;
    }
    payment: {
        availableMethods: {
            // GET /me/payment/availableMethods
            $get(): Promise<me.payment.method.AvailablePaymentMethod[]>;
        }
        method: {
            // GET /me/payment/method
            $get(param?: {paymentType?: string, status?: me.payment.method.PaymentMethod.Status}): Promise<number[]>;
            // POST /me/payment/method
            $post(body?: {callbackUrl: me.payment.method.CallbackUrl, default_?: boolean, description?: string, orderId?: number, paymentType: string, register?: boolean}): Promise<me.payment.method.Register.ValidationResult>;
            $(paymentMethodId: number): {
                // DELETE /me/payment/method/{paymentMethodId}
                $delete(): Promise<me.payment.method.PaymentMethod>;
                // GET /me/payment/method/{paymentMethodId}
                $get(): Promise<me.payment.method.PaymentMethod>;
                // PUT /me/payment/method/{paymentMethodId}
                $put(body?: {default_?: boolean, description?: string}): Promise<billing.PaymentMethod>;
                challenge: {
                    // POST /me/payment/method/{paymentMethodId}/challenge
                    $post(body?: {challenge: string}): Promise<me.payment.method.PaymentMethod>;
                }
                finalize: {
                    // POST /me/payment/method/{paymentMethodId}/finalize
                    $post(body?: {expirationMonth?: number, expirationYear?: number, registrationId?: string}): Promise<me.payment.method.PaymentMethod>;
                }
            };
        }
        transaction: {
            // GET /me/payment/transaction
            $get(param?: {paymentMethodId?: number, status?: me.payment.method.Transaction.Status}): Promise<number[]>;
            $(transactionId: number): {
                // GET /me/payment/transaction/{transactionId}
                $get(): Promise<me.payment.method.Transaction>;
            };
        }
    }
    paymentMean: {
        bankAccount: {
            // GET /me/paymentMean/bankAccount
            $get(param?: {state?: billing.BankAccountStateEnum}): Promise<number[]>;
            // POST /me/paymentMean/bankAccount
            $post(body?: {bic: string, description?: string, iban: string, ownerAddress: string, ownerName: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                // DELETE /me/paymentMean/bankAccount/{id}
                $delete(): Promise<void>;
                // GET /me/paymentMean/bankAccount/{id}
                $get(): Promise<billing.BankAccount>;
                // PUT /me/paymentMean/bankAccount/{id}
                $put(body?: {body: billing.BankAccount}): Promise<void>;
                challenge: {
                    // POST /me/paymentMean/bankAccount/{id}/challenge
                    $post(body?: {challenge: string}): Promise<void>;
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
            $post(body?: {description?: string, returnUrl?: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                // DELETE /me/paymentMean/creditCard/{id}
                $delete(): Promise<void>;
                // GET /me/paymentMean/creditCard/{id}
                $get(): Promise<billing.CreditCard>;
                // PUT /me/paymentMean/creditCard/{id}
                $put(body?: {body: billing.CreditCard}): Promise<void>;
                challenge: {
                    // POST /me/paymentMean/creditCard/{id}/challenge
                    $post(body?: {challenge: string}): Promise<void>;
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
                $put(body?: {body: billing.DeferredPaymentAccount}): Promise<void>;
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
            $post(body?: {description?: string, returnUrl?: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                // DELETE /me/paymentMean/paypal/{id}
                $delete(): Promise<void>;
                // GET /me/paymentMean/paypal/{id}
                $get(): Promise<billing.Paypal>;
                // PUT /me/paymentMean/paypal/{id}
                $put(body?: {body: billing.Paypal}): Promise<void>;
                challenge: {
                    // POST /me/paymentMean/paypal/{id}/challenge
                    $post(body?: {challenge: string}): Promise<void>;
                }
                chooseAsDefaultPaymentMean: {
                    // POST /me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            };
        }
    }
    refund: {
        // GET /me/refund
        $get(param?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(refundId: string): {
            // GET /me/refund/{refundId}
            $get(): Promise<billing.Refund>;
            details: {
                // GET /me/refund/{refundId}/details
                $get(): Promise<string[]>;
                $(refundDetailId: string): {
                    // GET /me/refund/{refundId}/details/{refundDetailId}
                    $get(): Promise<billing.RefundDetail>;
                };
            }
            payment: {
                // GET /me/refund/{refundId}/payment
                $get(): Promise<billing.Payment>;
            }
        };
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
        $post(body?: {key: string, keyName: string}): Promise<void>;
        $(keyName: string): {
            // DELETE /me/sshKey/{keyName}
            $delete(): Promise<void>;
            // GET /me/sshKey/{keyName}
            $get(): Promise<nichandle.sshKey>;
            // PUT /me/sshKey/{keyName}
            $put(body?: {body: nichandle.sshKey}): Promise<void>;
        };
    }
    subAccount: {
        // GET /me/subAccount
        $get(): Promise<number[]>;
        // POST /me/subAccount
        $post(body?: {description?: string}): Promise<number>;
        $(id: number): {
            // GET /me/subAccount/{id}
            $get(): Promise<nichandle.SubAccount>;
            // PUT /me/subAccount/{id}
            $put(body?: {body: nichandle.SubAccount}): Promise<void>;
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
            $put(body?: {body: nichandle.Subscription}): Promise<void>;
        };
    }
    supportLevel: {
        // GET /me/supportLevel
        $get(): Promise<me.SupportLevel.Level>;
    }
    task: {
        contactChange: {
            // GET /me/task/contactChange
            $get(param?: {askingAccount?: string, state?: nichandle.changeContact.TaskStateEnum, toAccount?: string}): Promise<number[]>;
            $(id: number): {
                // GET /me/task/contactChange/{id}
                $get(): Promise<nichandle.contactChange.Task>;
                accept: {
                    // POST /me/task/contactChange/{id}/accept
                    $post(body?: {token: string}): Promise<void>;
                }
                refuse: {
                    // POST /me/task/contactChange/{id}/refuse
                    $post(body?: {token: string}): Promise<void>;
                }
                resendEmail: {
                    // POST /me/task/contactChange/{id}/resendEmail
                    $post(): Promise<void>;
                }
            };
        }
        domain: {
            // GET /me/task/domain
            $get(param?: {domain?: string, function_?: domain.NicOperationFunctionEnum, status?: domain.OperationStatusEnum}): Promise<number[]>;
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
                        $put(body?: {body: nichandle.DomainTaskArgument}): Promise<void>;
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
            $get(param?: {state?: nichandle.changeEmail.TaskStateEnum}): Promise<number[]>;
            $(id: number): {
                // GET /me/task/emailChange/{id}
                $get(): Promise<nichandle.emailChange.Task>;
                accept: {
                    // POST /me/task/emailChange/{id}/accept
                    $post(body?: {token: string}): Promise<void>;
                }
                refuse: {
                    // POST /me/task/emailChange/{id}/refuse
                    $post(body?: {token: string}): Promise<void>;
                }
            };
        }
    }
    telephony: {
        defaultIpRestriction: {
            // GET /me/telephony/defaultIpRestriction
            $get(): Promise<number[]>;
            // POST /me/telephony/defaultIpRestriction
            $post(body?: {subnet: string, type: telephony.ProtocolEnum}): Promise<telephony.DefaultIpRestriction>;
            $(id: number): {
                // DELETE /me/telephony/defaultIpRestriction/{id}
                $delete(): Promise<void>;
                // GET /me/telephony/defaultIpRestriction/{id}
                $get(): Promise<telephony.DefaultIpRestriction>;
            };
        }
        settings: {
            // GET /me/telephony/settings
            $get(): Promise<telephony.Settings>;
            // POST /me/telephony/settings
            $post(body?: {settings: telephony.Settings}): Promise<void>;
        }
    }
    vipStatus: {
        // GET /me/vipStatus
        $get(): Promise<nichandle.VipStatus>;
    }
    voucher: {
        checkValidity: {
            // POST /me/voucher/checkValidity
            $post(body?: {voucher: string}): Promise<nichandle.VoucherStatus>;
        }
    }
    withdrawal: {
        // GET /me/withdrawal
        $get(param?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
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
    xdsl: {
        setting: {
            // GET /me/xdsl/setting
            $get(): Promise<xdsl.Setting>;
            // POST /me/xdsl/setting
            $post(body?: {resellerFastModemShipping?: boolean, resellerModemBasicConfig?: boolean}): Promise<void>;
        }
    }
// Api
  /**
   * Details about your OVH identifier
   * Get this object properties
   */
  get(path: '/me'): () => Promise<nichandle.Nichandle>;
  /**
   * SOTP Two-Factor Authentication
   * Get this object properties
   */
  get(path: '/me/accessRestriction/backupCode'): () => Promise<nichandle.accessRestriction.SOTPAccount>;
  /**
   * Login restrictions on a development version of the Manager
   * Get this object properties
   */
  get(path: '/me/accessRestriction/developerMode'): () => Promise<nichandle.DeveloperModeRestriction>;
  /**
   * List the nichandle.IpRestriction objects
   * List of IP restrictions
   */
  get(path: '/me/accessRestriction/ip'): () => Promise<number[]>;
  /**
   * List of all IP Restrictions
   * Get this object properties
   */
  get(path: '/me/accessRestriction/ip/{id}'): (params: {id: number}) => Promise<nichandle.IpRestriction>;
  /**
   * IP Restriction default rule
   * Get this object properties
   */
  get(path: '/me/accessRestriction/ipDefaultRule'): () => Promise<nichandle.IpRestrictionDefaultRule>;
  /**
   * List the nichandle.accessRestriction.SmsAccount objects
   * List of Sms accounts
   */
  get(path: '/me/accessRestriction/sms'): () => Promise<number[]>;
  /**
   * Sms Two-Factor Authentication
   * Get this object properties
   */
  get(path: '/me/accessRestriction/sms/{id}'): (params: {id: number}) => Promise<nichandle.accessRestriction.SmsAccount>;
  /**
   * List the nichandle.accessRestriction.TOTPAccount objects
   * List of TOTP accounts
   */
  get(path: '/me/accessRestriction/totp'): () => Promise<number[]>;
  /**
   * TOTP Two-Factor Authentication
   * Get this object properties
   */
  get(path: '/me/accessRestriction/totp/{id}'): (params: {id: number}) => Promise<nichandle.accessRestriction.TOTPAccount>;
  /**
   * List the nichandle.accessRestriction.U2FAccount objects
   * List of U2F accounts
   */
  get(path: '/me/accessRestriction/u2f'): () => Promise<number[]>;
  /**
   * U2F Two-Factor Authentication
   * Get this object properties
   */
  get(path: '/me/accessRestriction/u2f/{id}'): (params: {id: number}) => Promise<nichandle.accessRestriction.U2FAccount>;
  /**
   * List the agreements.ContractAgreement objects
   * List of contracts signed between you and OVH
   */
  get(path: '/me/agreements'): (params?: {agreed?: agreements.AgreementStateEnum, contractId?: number}) => Promise<number[]>;
  /**
   * Contract agreement
   * Get this object properties
   */
  get(path: '/me/agreements/{id}'): (params: {id: number}) => Promise<agreements.ContractAgreement>;
  /**
   * Contract of service
   * Get this object properties
   */
  get(path: '/me/agreements/{id}/contract'): (params: {id: number}) => Promise<agreements.Contract>;
  /**
   * List the api.Application objects
   * List of your Api Application
   */
  get(path: '/me/api/application'): () => Promise<number[]>;
  /**
   * API Application
   * Get this object properties
   */
  get(path: '/me/api/application/{applicationId}'): (params: {applicationId: number}) => Promise<api.Application>;
  /**
   * List the api.Credential objects
   * List of your Api Credentials
   */
  get(path: '/me/api/credential'): (params?: {applicationId?: number, status?: auth.CredentialStateEnum}) => Promise<number[]>;
  /**
   * API Credential
   * Get this object properties
   */
  get(path: '/me/api/credential/{credentialId}'): (params: {credentialId: number}) => Promise<api.Credential>;
  /**
   * API Application
   * Get this object properties
   */
  get(path: '/me/api/credential/{credentialId}/application'): (params: {credentialId: number}) => Promise<api.Application>;
  /**
   * List the api.Log objects
   * List of Api calls done with your account
   */
  get(path: '/me/api/logs/self'): () => Promise<number[]>;
  /**
   * API Log
   * Get this object properties
   */
  get(path: '/me/api/logs/self/{logId}'): (params: {logId: number}) => Promise<api.Log>;
  /**
   * List the api.Log objects
   * List of Api calls done on services you have access to
   */
  get(path: '/me/api/logs/services'): () => Promise<number[]>;
  /**
   * API Log
   * Get this object properties
   */
  get(path: '/me/api/logs/services/{logId}'): (params: {logId: number}) => Promise<api.Log>;
  /**
   * Auto renewal information
   * Get this object properties
   */
  get(path: '/me/autorenew'): () => Promise<nichandle.NicAutorenewInfos>;
  /**
   * availableAutomaticPaymentMeans operations
   * List available payment methods in this Nic's country
   */
  get(path: '/me/availableAutomaticPaymentMeans'): () => Promise<billing.AutomaticPaymentMean>;
  /**
   * List the billing.Bill objects
   * List of all the bills the logged account has
   */
  get(path: '/me/bill'): (params?: {date_from?: string, date_to?: string, orderId?: number}) => Promise<string[]>;
  /**
   * Details about a Bill
   * Get this object properties
   */
  get(path: '/me/bill/{billId}'): (params: {billId: string}) => Promise<billing.Bill>;
  /**
   * State of a debt
   * Get this object properties
   */
  get(path: '/me/bill/{billId}/debt'): (params: {billId: string}) => Promise<debt.Debt>;
  /**
   * List the debt.Operation objects
   * All operations related to these debts
   */
  get(path: '/me/bill/{billId}/debt/operation'): (params: {billId: string, depositOrderId?: number}) => Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  get(path: '/me/bill/{billId}/debt/operation/{operationId}'): (params: {billId: string, operationId: number}) => Promise<debt.Operation>;
  /**
   * associatedObject operations
   * Return main data about the object related to this debt operation
   */
  get(path: '/me/bill/{billId}/debt/operation/{operationId}/associatedObject'): (params: {billId: string, operationId: number}) => Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.BillDetail objects
   * Give access to all entries of the bill
   */
  get(path: '/me/bill/{billId}/details'): (params: {billId: string}) => Promise<string[]>;
  /**
   * Information about a Bill entry
   * Get this object properties
   */
  get(path: '/me/bill/{billId}/details/{billDetailId}'): (params: {billDetailId: string, billId: string}) => Promise<billing.BillDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  get(path: '/me/bill/{billId}/payment'): (params: {billId: string}) => Promise<billing.Payment>;
  /**
   * invoicesByPostalMail operations
   * Send invoices through postal mail
   */
  get(path: '/me/billing/invoicesByPostalMail'): () => Promise<boolean>;
  /**
   * Get all certificates of the account
   * Get all certificates of the account
   */
  get(path: '/me/certificates'): (params?: {name?: string}) => Promise<string[]>;
  /**
   * List all consent campaign available
   * List all consent campaign available
   */
  get(path: '/me/consent'): () => Promise<me.consent.Campaign[]>;
  /**
   * Retrieve information about a consent campaign
   * Retrieve information about a consent campaign
   */
  get(path: '/me/consent/{campaignName}'): (params: {campaignName: string}) => Promise<me.consent.Campaign>;
  /**
   * Get decision value for a consent campaign
   * Get decision value for a consent campaign
   */
  get(path: '/me/consent/{campaignName}/decision'): (params: {campaignName: string}) => Promise<me.consent.Consent>;
  /**
   * Missing description
   * Get on-going consumptions for all services
   */
  get(path: '/me/consumption/usage/current'): () => Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Get forecasted consumptions for all services
   */
  get(path: '/me/consumption/usage/forecast'): () => Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Get list of transactions between two dates
   */
  get(path: '/me/consumption/usage/history'): (params: {beginDate: string, endDate: string}) => Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Retrieve all contact that you created
   */
  get(path: '/me/contact'): () => Promise<number[]>;
  /**
   * Missing description
   * Retrieve information about a contact
   */
  get(path: '/me/contact/{contactId}'): (params: {contactId: number}) => Promise<contact.Contact>;
  /**
   * Missing description
   * Display mandatory/read-only informations of a contact
   */
  get(path: '/me/contact/{contactId}/fields'): (params: {contactId: number}) => Promise<contact.FieldInformation[]>;
  /**
   * Retrieve credit balance names
   * Retrieve credit balance names
   */
  get(path: '/me/credit/balance'): (params?: {type?: billing.credit.balance.Type}) => Promise<string[]>;
  /**
   * Retrieve a credit balance
   * Retrieve a credit balance
   */
  get(path: '/me/credit/balance/{balanceName}'): (params: {balanceName: string}) => Promise<billing.credit.Balance>;
  /**
   * Retrieve movements for a specific balance
   * Retrieve movements for a specific balance
   */
  get(path: '/me/credit/balance/{balanceName}/movement'): (params: {balanceName: string}) => Promise<number[]>;
  /**
   * Retrieve a specific movement for a credit balance
   * Retrieve a specific movement for a credit balance
   */
  get(path: '/me/credit/balance/{balanceName}/movement/{movementId}'): (params: {balanceName: string, movementId: number}) => Promise<billing.credit.balance.Movement>;
  /**
   * Debt balance of the account
   * Get this object properties
   */
  get(path: '/me/debtAccount'): () => Promise<debt.Balance>;
  /**
   * List the debt.Debt objects
   * All debts related to your account
   */
  get(path: '/me/debtAccount/debt'): () => Promise<number[]>;
  /**
   * State of a debt
   * Get this object properties
   */
  get(path: '/me/debtAccount/debt/{debtId}'): (params: {debtId: number}) => Promise<debt.Debt>;
  /**
   * List the debt.Operation objects
   * All operations related to these debts
   */
  get(path: '/me/debtAccount/debt/{debtId}/operation'): (params: {debtId: number, depositOrderId?: number}) => Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}'): (params: {debtId: number, operationId: number}) => Promise<debt.Operation>;
  /**
   * associatedObject operations
   * Return main data about the object related to this debt operation
   */
  get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject'): (params: {debtId: number, operationId: number}) => Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.Deposit objects
   * List of all the deposits made to your prepaid account or debt account
   */
  get(path: '/me/deposit'): (params?: {date_from?: string, date_to?: string, orderId?: number}) => Promise<string[]>;
  /**
   * Details about a deposit
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}'): (params: {depositId: string}) => Promise<billing.Deposit>;
  /**
   * List the billing.DepositDetail objects
   * Give access to all entries of this deposit
   */
  get(path: '/me/deposit/{depositId}/details'): (params: {depositId: string}) => Promise<string[]>;
  /**
   * Information about a Deposit entry
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/details/{depositDetailId}'): (params: {depositDetailId: string, depositId: string}) => Promise<billing.DepositDetail>;
  /**
   * List the billing.Bill objects
   * Get invoices paid by this deposit
   */
  get(path: '/me/deposit/{depositId}/paidBills'): (params: {depositId: string}) => Promise<string[]>;
  /**
   * Details about a Bill
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}'): (params: {billId: string, depositId: string}) => Promise<billing.Bill>;
  /**
   * State of a debt
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt'): (params: {billId: string, depositId: string}) => Promise<debt.Debt>;
  /**
   * List the debt.Operation objects
   * All operations related to these debts
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation'): (params: {billId: string, depositId: string, depositOrderId?: number}) => Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}'): (params: {billId: string, depositId: string, operationId: number}) => Promise<debt.Operation>;
  /**
   * associatedObject operations
   * Return main data about the object related to this debt operation
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject'): (params: {billId: string, depositId: string, operationId: number}) => Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.BillDetail objects
   * Give access to all entries of the bill
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/details'): (params: {billId: string, depositId: string}) => Promise<string[]>;
  /**
   * Information about a Bill entry
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}'): (params: {billDetailId: string, billId: string, depositId: string}) => Promise<billing.BillDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/payment'): (params: {billId: string, depositId: string}) => Promise<billing.Payment>;
  /**
   * Details about a payment
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/payment'): (params: {depositId: string}) => Promise<billing.Payment>;
  /**
   * List the nichandle.document.Document objects
   * List of documents added in your account
   */
  get(path: '/me/document'): () => Promise<string[]>;
  /**
   * List of documents added on your account
   * Get this object properties
   */
  get(path: '/me/document/{id}'): (params: {id: string}) => Promise<nichandle.document.Document>;
  /**
   * List the telephony.MailDomain2Service objects
   * Get the fax custom domains linked to the customer account
   */
  get(path: '/me/fax/customDomains'): () => Promise<number[]>;
  /**
   * Custom domains of your fax services
   * Get this object properties
   */
  get(path: '/me/fax/customDomains/{id}'): (params: {id: number}) => Promise<telephony.MailDomain2Service>;
  /**
   * Balance of the fidelity account
   * Get this object properties
   */
  get(path: '/me/fidelityAccount'): () => Promise<billing.FidelityAccount>;
  /**
   * List the billing.FidelityMovement objects
   * List of entries of the fidelity account
   */
  get(path: '/me/fidelityAccount/movements'): (params?: {date_from?: string, date_to?: string}) => Promise<number[]>;
  /**
   * Details about a fidelity account
   * Get this object properties
   */
  get(path: '/me/fidelityAccount/movements/{movementId}'): (params: {movementId: number}) => Promise<billing.FidelityMovement>;
  /**
   * Groups linked to this account
   * Retrieve all groups of this account
   */
  get(path: '/me/identity/group'): () => Promise<string[]>;
  /**
   * A group linked to this account
   * Get this object properties
   */
  get(path: '/me/identity/group/{group}'): (params: {group: string}) => Promise<nichandle.Authentication.Group>;
  /**
   * Users linked to this account
   * Retrieve all users of this account
   */
  get(path: '/me/identity/user'): () => Promise<string[]>;
  /**
   * A user linked to this account
   * Get this object properties
   */
  get(path: '/me/identity/user/{user}'): (params: {user: string}) => Promise<nichandle.User>;
  /**
   * Retrieve your insight access token. This token give you access to all your products metrics (cloud instances, dedicated servers, load balancers, ...)
   * Get your insight access token
   */
  get(path: '/me/insight'): () => Promise<insight.Access>;
  /**
   * List the dedicated.installationTemplate.Templates objects
   * Your customized operating system installation templates
   */
  get(path: '/me/installationTemplate'): () => Promise<string[]>;
  /**
   * Available installation templates
   * Get this object properties
   */
  get(path: '/me/installationTemplate/{templateName}'): (params: {templateName: string}) => Promise<dedicated.installationTemplate.Templates>;
  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects
   * Partitioning schemes available on this template
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme'): (params: {templateName: string}) => Promise<string[]>;
  /**
   * Partitioning schemes available on this template
   * Get this object properties
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
  /**
   * List the dedicated.installationTemplate.hardwareRaid objects
   * Hardware RAIDs defined in this partitioning scheme
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid'): (params: {schemeName: string, templateName: string}) => Promise<string[]>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Get this object properties
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {name: string, schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.hardwareRaid>;
  /**
   * List the dedicated.installationTemplate.templatePartitions objects
   * Partitions defined in this partitioning scheme
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition'): (params: {schemeName: string, templateName: string}) => Promise<string[]>;
  /**
   *  Partitions defined in this partitioning scheme
   * Get this object properties
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {mountpoint: string, schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.templatePartitions>;
  /**
   * List the nichandle.Ipv4Org objects
   * List of organisations
   */
  get(path: '/me/ipOrganisation'): () => Promise<string[]>;
  /**
   * Details about an IP block organisation
   * Get this object properties
   */
  get(path: '/me/ipOrganisation/{organisationId}'): (params: {organisationId: string}) => Promise<nichandle.Ipv4Org>;
  /**
   * List the nichandle.ipxe objects
   * List of all your IPXE scripts
   */
  get(path: '/me/ipxeScript'): () => Promise<string[]>;
  /**
   * Customer IPXE scripts
   * Get this object properties
   */
  get(path: '/me/ipxeScript/{name}'): (params: {name: string}) => Promise<nichandle.ipxe>;
  /**
   * availableLists operations
   * List of mailing list you can subscribe
   */
  get(path: '/me/mailingList/availableLists'): () => Promise<string[]>;
  /**
   * List the nichandle.emailNotification objects
   * List of all your email notifications
   */
  get(path: '/me/notification/email/history'): () => Promise<number[]>;
  /**
   * Email notification
   * Get this object properties
   */
  get(path: '/me/notification/email/history/{id}'): (params: {id: number}) => Promise<nichandle.emailNotification>;
  /**
   * List the billing.Order objects
   * List of all the orders the logged account has
   */
  get(path: '/me/order'): (params?: {date_from?: string, date_to?: string}) => Promise<number[]>;
  /**
   * Details about an Order
   * Get this object properties
   */
  get(path: '/me/order/{orderId}'): (params: {orderId: number}) => Promise<billing.Order>;
  /**
   * associatedObject operations
   * Return main data about the object the processing of the order generated
   */
  get(path: '/me/order/{orderId}/associatedObject'): (params: {orderId: number}) => Promise<billing.order.AssociatedObject>;
  /**
   * availableRegisteredPaymentMean operations
   * List of registered payment mean you can use to pay this order
   */
  get(path: '/me/order/{orderId}/availableRegisteredPaymentMean'): (params: {orderId: number}) => Promise<billing.order.RegisteredPaymentMean[]>;
  /**
   * Details about a Bill
   * Get this object properties
   */
  get(path: '/me/order/{orderId}/bill'): (params: {orderId: number}) => Promise<billing.Bill>;
  /**
   * State of a debt
   * Get this object properties
   */
  get(path: '/me/order/{orderId}/debt'): (params: {orderId: number}) => Promise<debt.Debt>;
  /**
   * List the debt.Operation objects
   * All operations related to these debts
   */
  get(path: '/me/order/{orderId}/debt/operation'): (params: {orderId: number, depositOrderId?: number}) => Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  get(path: '/me/order/{orderId}/debt/operation/{operationId}'): (params: {operationId: number, orderId: number}) => Promise<debt.Operation>;
  /**
   * associatedObject operations
   * Return main data about the object related to this debt operation
   */
  get(path: '/me/order/{orderId}/debt/operation/{operationId}/associatedObject'): (params: {operationId: number, orderId: number}) => Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.OrderDetail objects
   * Give access to all entries of the order
   */
  get(path: '/me/order/{orderId}/details'): (params: {orderId: number}) => Promise<number[]>;
  /**
   * Information about a Bill entry
   * Get this object properties
   */
  get(path: '/me/order/{orderId}/details/{orderDetailId}'): (params: {orderDetailId: number, orderId: number}) => Promise<billing.OrderDetail>;
  /**
   * Extensions of a detail
   * Get this object properties
   */
  get(path: '/me/order/{orderId}/details/{orderDetailId}/extension'): (params: {orderDetailId: number, orderId: number}) => Promise<billing.ItemDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  get(path: '/me/order/{orderId}/payment'): (params: {orderId: number}) => Promise<billing.Payment>;
  /**
   * paymentMeans operations
   * Return main data about the object the processing of the order generated
   */
  get(path: '/me/order/{orderId}/paymentMeans'): (params: {orderId: number}) => Promise<billing.order.PaymentMeans>;
  /**
   * paymentMethods operations
   * List of registered payment method you can use to pay this order
   */
  get(path: '/me/order/{orderId}/paymentMethods'): (params: {orderId: number}) => Promise<billing.order.PaymentMethods>;
  /**
   * Details about a Refund
   * Get this object properties
   */
  get(path: '/me/order/{orderId}/refund'): (params: {orderId: number}) => Promise<billing.Refund>;
  /**
   * status operations
   * Return status of order
   */
  get(path: '/me/order/{orderId}/status'): (params: {orderId: number}) => Promise<billing.order.OrderStatusEnum>;
  /**
   * List the billing.OvhAccount objects
   * List of OVH accounts the logged account has
   */
  get(path: '/me/ovhAccount'): () => Promise<string[]>;
  /**
   * Details about an OVH account
   * Get this object properties
   */
  get(path: '/me/ovhAccount/{ovhAccountId}'): (params: {ovhAccountId: string}) => Promise<billing.OvhAccount>;
  /**
   * List the billing.Movement objects
   * Details about an entry of the OVH account
   */
  get(path: '/me/ovhAccount/{ovhAccountId}/movements'): (params: {ovhAccountId: string, date_from?: string, date_to?: string}) => Promise<number[]>;
  /**
   * Details about an OVH account
   * Get this object properties
   */
  get(path: '/me/ovhAccount/{ovhAccountId}/movements/{movementId}'): (params: {movementId: number, ovhAccountId: string}) => Promise<billing.Movement>;
  /**
   * Available payment methods
   * Retrieve available payment method
   */
  get(path: '/me/payment/availableMethods'): () => Promise<me.payment.method.AvailablePaymentMethod[]>;
  /**
   * Manage payment method
   * Retrieve payment method ID list
   */
  get(path: '/me/payment/method'): (params?: {paymentType?: string, status?: me.payment.method.PaymentMethod.Status}) => Promise<number[]>;
  /**
   * Manage payment method
   * Get one payment method
   */
  get(path: '/me/payment/method/{paymentMethodId}'): (params: {paymentMethodId: number}) => Promise<me.payment.method.PaymentMethod>;
  /**
   * Retrieve payment method transaction ID list
   * Retrieve associated payment method transaction ID list
   */
  get(path: '/me/payment/transaction'): (params?: {paymentMethodId?: number, status?: me.payment.method.Transaction.Status}) => Promise<number[]>;
  /**
   * Manage payment method transaction
   * Get associated payment method transaction
   */
  get(path: '/me/payment/transaction/{transactionId}'): (params: {transactionId: number}) => Promise<me.payment.method.Transaction>;
  /**
   * List the billing.BankAccount objects
   * List of bank accounts
   */
  get(path: '/me/paymentMean/bankAccount'): (params?: {state?: billing.BankAccountStateEnum}) => Promise<number[]>;
  /**
   * SEPA bank account info
   * Get this object properties
   */
  get(path: '/me/paymentMean/bankAccount/{id}'): (params: {id: number}) => Promise<billing.BankAccount>;
  /**
   * List the billing.CreditCard objects
   * List of credit cards
   */
  get(path: '/me/paymentMean/creditCard'): () => Promise<number[]>;
  /**
   * Credit card informations
   * Get this object properties
   */
  get(path: '/me/paymentMean/creditCard/{id}'): (params: {id: number}) => Promise<billing.CreditCard>;
  /**
   * List the billing.DeferredPaymentAccount objects
   * List of authorized deferred payment account for this customer
   */
  get(path: '/me/paymentMean/deferredPaymentAccount'): () => Promise<number[]>;
  /**
   * Deferred payment account info
   * Get this object properties
   */
  get(path: '/me/paymentMean/deferredPaymentAccount/{id}'): (params: {id: number}) => Promise<billing.DeferredPaymentAccount>;
  /**
   * List the billing.Paypal objects
   * List of Paypal accounts usable for payments on this account
   */
  get(path: '/me/paymentMean/paypal'): () => Promise<number[]>;
  /**
   * Paypal account info
   * Get this object properties
   */
  get(path: '/me/paymentMean/paypal/{id}'): (params: {id: number}) => Promise<billing.Paypal>;
  /**
   * List the billing.Refund objects
   * List of all the refunds the logged account has
   */
  get(path: '/me/refund'): (params?: {date_from?: string, date_to?: string, orderId?: number}) => Promise<string[]>;
  /**
   * Details about a Refund
   * Get this object properties
   */
  get(path: '/me/refund/{refundId}'): (params: {refundId: string}) => Promise<billing.Refund>;
  /**
   * List the billing.RefundDetail objects
   * Give access to all entries of the refund
   */
  get(path: '/me/refund/{refundId}/details'): (params: {refundId: string}) => Promise<string[]>;
  /**
   * Information about a Bill entry
   * Get this object properties
   */
  get(path: '/me/refund/{refundId}/details/{refundDetailId}'): (params: {refundDetailId: string, refundId: string}) => Promise<billing.RefundDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  get(path: '/me/refund/{refundId}/payment'): (params: {refundId: string}) => Promise<billing.Payment>;
  /**
   * List the billing.SlaOperation objects
   * List active SLA
   */
  get(path: '/me/sla'): () => Promise<number[]>;
  /**
   * SLA properties
   * Get this object properties
   */
  get(path: '/me/sla/{id}'): (params: {id: number}) => Promise<billing.SlaOperation>;
  /**
   * canBeApplied operations
   * Check whether this SLA can be applied on your services
   */
  get(path: '/me/sla/{id}/canBeApplied'): (params: {id: number}) => Promise<boolean>;
  /**
   * services operations
   * Get services impacted by this SLA
   */
  get(path: '/me/sla/{id}/services'): (params: {id: number}) => Promise<billing.SlaOperationService[]>;
  /**
   * status operations
   * Get the status request of this SLA
   */
  get(path: '/me/sla/{id}/status'): (params: {id: number}) => Promise<string>;
  /**
   * List the nichandle.sshKey objects
   * List of your public SSH keys
   */
  get(path: '/me/sshKey'): () => Promise<string[]>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Get this object properties
   */
  get(path: '/me/sshKey/{keyName}'): (params: {keyName: string}) => Promise<nichandle.sshKey>;
  /**
   * List the nichandle.SubAccount objects
   * List of sub-accounts
   */
  get(path: '/me/subAccount'): () => Promise<number[]>;
  /**
   * Sub Account
   * Get this object properties
   */
  get(path: '/me/subAccount/{id}'): (params: {id: number}) => Promise<nichandle.SubAccount>;
  /**
   * List the nichandle.Subscription objects
   * List of all OVH things you can subscribe to
   */
  get(path: '/me/subscription'): () => Promise<string[]>;
  /**
   * List of all OVH things you can subscribe to
   * Get this object properties
   */
  get(path: '/me/subscription/{subscriptionType}'): (params: {subscriptionType: string}) => Promise<nichandle.Subscription>;
  /**
   * Fetch the support level of the account
   * Fetch the support level of the account
   */
  get(path: '/me/supportLevel'): () => Promise<me.SupportLevel.Level>;
  /**
   * List the nichandle.contactChange.Task objects
   * List of service contact change tasks you are involved in
   */
  get(path: '/me/task/contactChange'): (params?: {askingAccount?: string, state?: nichandle.changeContact.TaskStateEnum, toAccount?: string}) => Promise<number[]>;
  /**
   * Task running a contact change on a service
   * Get this object properties
   */
  get(path: '/me/task/contactChange/{id}'): (params: {id: number}) => Promise<nichandle.contactChange.Task>;
  /**
   * List the nichandle.DomainTask objects
   * List of domain task
   */
  get(path: '/me/task/domain'): (params?: {domain?: string, function_?: domain.NicOperationFunctionEnum, status?: domain.OperationStatusEnum}) => Promise<number[]>;
  /**
   * Domain tasks
   * Get this object properties
   */
  get(path: '/me/task/domain/{id}'): (params: {id: number}) => Promise<nichandle.DomainTask>;
  /**
   * List the nichandle.DomainTaskArgument objects
   * List of arguments
   */
  get(path: '/me/task/domain/{id}/argument'): (params: {id: number}) => Promise<string[]>;
  /**
   * Domain operation argument
   * Get this object properties
   */
  get(path: '/me/task/domain/{id}/argument/{key}'): (params: {id: number, key: string}) => Promise<nichandle.DomainTaskArgument>;
  /**
   * Domain operation progress
   * Get this object properties
   */
  get(path: '/me/task/domain/{id}/progressbar'): (params: {id: number}) => Promise<nichandle.DomainTaskProgressBar>;
  /**
   * List the nichandle.emailChange.Task objects
   * List of email change tasks you are involved in
   */
  get(path: '/me/task/emailChange'): (params?: {state?: nichandle.changeEmail.TaskStateEnum}) => Promise<number[]>;
  /**
   * Task running an email change on an account
   * Get this object properties
   */
  get(path: '/me/task/emailChange/{id}'): (params: {id: number}) => Promise<nichandle.emailChange.Task>;
  /**
   * List the telephony.DefaultIpRestriction objects
   * The default SIP IP restictions for your future VoIP lines
   */
  get(path: '/me/telephony/defaultIpRestriction'): () => Promise<number[]>;
  /**
   * Default IP restriction of a VoIP line
   * Get this object properties
   */
  get(path: '/me/telephony/defaultIpRestriction/{id}'): (params: {id: number}) => Promise<telephony.DefaultIpRestriction>;
  /**
   * settings operations
   * Get the telephony settings linked to the customer account
   */
  get(path: '/me/telephony/settings'): () => Promise<telephony.Settings>;
  /**
   * vipStatus operations
   * VIP Status of this account
   */
  get(path: '/me/vipStatus'): () => Promise<nichandle.VipStatus>;
  /**
   * List the billing.Withdrawal objects
   * List of all the withdrawals made from your prepaid account
   */
  get(path: '/me/withdrawal'): (params?: {date_from?: string, date_to?: string, orderId?: number}) => Promise<string[]>;
  /**
   * Details about a withdrawal
   * Get this object properties
   */
  get(path: '/me/withdrawal/{withdrawalId}'): (params: {withdrawalId: string}) => Promise<billing.Withdrawal>;
  /**
   * List the billing.WithdrawalDetail objects
   * Give access to all entries of this withdrawal
   */
  get(path: '/me/withdrawal/{withdrawalId}/details'): (params: {withdrawalId: string}) => Promise<string[]>;
  /**
   * Information about a Withdrawal entry
   * Get this object properties
   */
  get(path: '/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}'): (params: {withdrawalDetailId: string, withdrawalId: string}) => Promise<billing.WithdrawalDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  get(path: '/me/withdrawal/{withdrawalId}/payment'): (params: {withdrawalId: string}) => Promise<billing.Payment>;
  /**
   * setting operations
   * Get xdsl settings linked to the nichandle
   */
  get(path: '/me/xdsl/setting'): () => Promise<xdsl.Setting>;
  /**
   * Details about your OVH identifier
   * Alter this object properties
   */
  put(path: '/me'): (params?: {address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: nichandle.CountryEnum, currency?: nichandle.Currency, customerCode?: string, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform?: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, nichandle?: string, organisation?: string, ovhCompany?: nichandle.OvhCompanyEnum, ovhSubsidiary?: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, state?: nichandle.StateEnum, vat?: string, zip?: string}) => Promise<void>;
  /**
   * Login restrictions on a development version of the Manager
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/developerMode'): (params?: {enabled?: boolean}) => Promise<void>;
  /**
   * List of all IP Restrictions
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/ip/{id}'): (params: {id: number, ip?: string, rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}) => Promise<void>;
  /**
   * IP Restriction default rule
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/ipDefaultRule'): (params?: {rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}) => Promise<void>;
  /**
   * Sms Two-Factor Authentication
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/sms/{id}'): (params: {id: number, creationDate?: string, description?: string, lastUsedDate?: string, phoneNumber?: string, status?: nichandle.accessRestriction.SmsStatusEnum}) => Promise<void>;
  /**
   * TOTP Two-Factor Authentication
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/totp/{id}'): (params: {id: number, creationDate?: string, description?: string, lastUsedDate?: string, status?: nichandle.accessRestriction.TOTPStatusEnum}) => Promise<void>;
  /**
   * U2F Two-Factor Authentication
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/u2f/{id}'): (params: {id: number, creationDate?: string, description?: string, lastUsedDate?: string, status?: nichandle.accessRestriction.U2FStatusEnum}) => Promise<void>;
  /**
   * Auto renewal information
   * Alter this object properties
   */
  put(path: '/me/autorenew'): (params?: {active?: boolean, lastRenew?: string, renewDay?: number}) => Promise<void>;
  /**
   * Get decision value for a consent campaign
   * Update decision of a consent campaign
   */
  put(path: '/me/consent/{campaignName}/decision'): (params: {campaignName: string, value: boolean}) => Promise<void>;
  /**
   * Missing description
   * Update an existing contact
   */
  put(path: '/me/contact/{contactId}'): (params: {contactId: number, address?: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, vat?: string}) => Promise<contact.Contact>;
  /**
   * List of documents added on your account
   * Alter this object properties
   */
  put(path: '/me/document/{id}'): (params: {id: string, creationDate?: string, expirationDate?: string, getUrl?: string, name?: string, putUrl?: string, size?: number, tags?: complexType.SafeKeyValue<string>[], validationDate?: string}) => Promise<void>;
  /**
   * Balance of the fidelity account
   * Alter this object properties
   */
  put(path: '/me/fidelityAccount'): (params?: {alertThreshold?: number, balance?: number, canBeCredited?: boolean, lastUpdate?: string, openDate?: string}) => Promise<void>;
  /**
   * A group linked to this account
   * Alter a group
   */
  put(path: '/me/identity/group/{group}'): (params: {group: string, description?: string, role?: nichandle.RoleEnum}) => Promise<void>;
  /**
   * A user linked to this account
   * Alter a user
   */
  put(path: '/me/identity/user/{user}'): (params: {user: string, description?: string, email?: string, group?: string}) => Promise<void>;
  /**
   * Available installation templates
   * Alter this object properties
   */
  put(path: '/me/installationTemplate/{templateName}'): (params: {templateName: string, availableLanguages?: dedicated.TemplateOsLanguageEnum[], beta?: boolean, bitFormat?: dedicated.server.BitFormatEnum, category?: dedicated.TemplateOsUsageEnum, customization?: dedicated.TemplateOsProperties, defaultLanguage?: dedicated.TemplateOsLanguageEnum, deprecated?: boolean, description?: string, distribution?: string, family?: dedicated.TemplateOsTypeEnum, filesystems?: dedicated.TemplateOsFileSystemEnum[], hardRaidConfiguration?: boolean, lastModification?: string, lvmReady?: boolean, supportsDistributionKernel?: boolean, supportsGptLabel?: boolean, supportsRTM?: boolean, supportsSqlServer?: boolean, supportsUEFI?: dedicated.server.SupportsUEFIEnum}) => Promise<void>;
  /**
   * Partitioning schemes available on this template
   * Alter this object properties
   */
  put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {schemeName: string, templateName: string, name?: string, priority?: number}) => Promise<void>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Alter this object properties
   */
  put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {name: string, schemeName: string, templateName: string, disks?: string[], mode?: dedicated.TemplateOsHardwareRaidEnum, step?: number}) => Promise<void>;
  /**
   *  Partitions defined in this partitioning scheme
   * Alter this object properties
   */
  put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {mountpoint: string, schemeName: string, templateName: string, filesystem?: dedicated.TemplateOsFileSystemEnum, order?: number, raid?: dedicated.server.PartitionRaidEnum, size?: complexType.UnitAndValue<number>, type?: dedicated.TemplatePartitionTypeEnum, volumeName?: string}) => Promise<void>;
  /**
   * Details about an IP block organisation
   * Alter this object properties
   */
  put(path: '/me/ipOrganisation/{organisationId}'): (params: {organisationId: string, abuse_mailbox?: string, address?: string, city?: string, country?: nichandle.CountryEnum, firstname?: string, lastname?: string, phone?: string, registry?: nichandle.IpRegistryEnum, state?: string, zip?: string}) => Promise<void>;
  /**
   * Details about an OVH account
   * Alter this object properties
   */
  put(path: '/me/ovhAccount/{ovhAccountId}'): (params: {ovhAccountId: string, alertThreshold?: number, balance?: orderPrice, canBeCredited?: boolean, isActive?: boolean, lastUpdate?: string, openDate?: string}) => Promise<void>;
  /**
   * Manage payment method
   * Edit payment method
   */
  put(path: '/me/payment/method/{paymentMethodId}'): (params: {paymentMethodId: number, default_?: boolean, description?: string}) => Promise<billing.PaymentMethod>;
  /**
   * SEPA bank account info
   * Alter this object properties
   */
  put(path: '/me/paymentMean/bankAccount/{id}'): (params: {id: number, bic?: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, iban?: string, mandateSignatureDate?: string, ownerAddress?: string, ownerName?: string, state?: billing.BankAccountStateEnum, uniqueReference?: string, validationDocumentLink?: string}) => Promise<void>;
  /**
   * Credit card informations
   * Alter this object properties
   */
  put(path: '/me/paymentMean/creditCard/{id}'): (params: {id: number, defaultPaymentMean?: boolean, description?: string, expirationDate?: string, number?: string, state?: billing.CreditCardStateEnum, threeDsValidated?: boolean, type?: string}) => Promise<void>;
  /**
   * Deferred payment account info
   * Alter this object properties
   */
  put(path: '/me/paymentMean/deferredPaymentAccount/{id}'): (params: {id: number, creationDate?: string, defaultPaymentMean?: boolean, description?: string, label?: string, state?: billing.DeferredPaymentAccountStatusEnum}) => Promise<void>;
  /**
   * Paypal account info
   * Alter this object properties
   */
  put(path: '/me/paymentMean/paypal/{id}'): (params: {id: number, agreementId?: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, email?: string, state?: billing.PaypalStateEnum}) => Promise<void>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Alter this object properties
   */
  put(path: '/me/sshKey/{keyName}'): (params: {keyName: string, default_?: boolean, key?: string}) => Promise<void>;
  /**
   * Sub Account
   * Alter this object properties
   */
  put(path: '/me/subAccount/{id}'): (params: {id: number, creationDate?: string, description?: string}) => Promise<void>;
  /**
   * List of all OVH things you can subscribe to
   * Alter this object properties
   */
  put(path: '/me/subscription/{subscriptionType}'): (params: {subscriptionType: string, registered?: boolean, type?: string}) => Promise<void>;
  /**
   * Domain operation argument
   * Alter this object properties
   */
  put(path: '/me/task/domain/{id}/argument/{key}'): (params: {id: number, key: string, acceptedFormats?: domain.DocumentFormatsEnum[], acceptedValues?: string[], description?: string, fields?: xander.ContactFieldEnum[], maximumSize?: number, minimumSize?: number, readOnly?: boolean, template?: string, type?: string, value?: string}) => Promise<void>;
  /**
   * SOTP Two-Factor Authentication
   * Add a SOTP access restriction
   */
  post(path: '/me/accessRestriction/backupCode'): () => Promise<nichandle.accessRestriction.SOTPSecret>;
  /**
   * disable operations
   * Disable this SOTP account
   */
  post(path: '/me/accessRestriction/backupCode/disable'): (params: {code: string}) => Promise<void>;
  /**
   * enable operations
   * Enable this SOTP account
   */
  post(path: '/me/accessRestriction/backupCode/enable'): (params: {code: string}) => Promise<void>;
  /**
   * validate operations
   * Validate your SOTP account
   */
  post(path: '/me/accessRestriction/backupCode/validate'): (params: {code: string}) => Promise<nichandle.accessRestriction.SOTPValidate>;
  /**
   * List the nichandle.IpRestriction objects
   * Add an IP access restriction
   */
  post(path: '/me/accessRestriction/ip'): (params: {ip: string, rule: nichandle.accessRestriction.IpRestrictionRuleEnum, warning: boolean}) => Promise<void>;
  /**
   * List the nichandle.accessRestriction.SmsAccount objects
   * Add a SMS access restriction
   */
  post(path: '/me/accessRestriction/sms'): (params: {phone: string}) => Promise<nichandle.accessRestriction.SmsSecret>;
  /**
   * disable operations
   * Disable this SMS account
   */
  post(path: '/me/accessRestriction/sms/{id}/disable'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * enable operations
   * Enable this SMS account
   */
  post(path: '/me/accessRestriction/sms/{id}/enable'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * sendCode operations
   * Send a SMS to this account
   */
  post(path: '/me/accessRestriction/sms/{id}/sendCode'): (params: {id: number}) => Promise<nichandle.accessRestriction.SmsCode>;
  /**
   * validate operations
   * Validate your SMS account
   */
  post(path: '/me/accessRestriction/sms/{id}/validate'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * List the nichandle.accessRestriction.TOTPAccount objects
   * Add a TOTP access restriction
   */
  post(path: '/me/accessRestriction/totp'): () => Promise<nichandle.accessRestriction.TOTPSecret>;
  /**
   * disable operations
   * Disable this TOTP account
   */
  post(path: '/me/accessRestriction/totp/{id}/disable'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * enable operations
   * Enable this TOTP account
   */
  post(path: '/me/accessRestriction/totp/{id}/enable'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * validate operations
   * Validate your TOTP account
   */
  post(path: '/me/accessRestriction/totp/{id}/validate'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * List the nichandle.accessRestriction.U2FAccount objects
   * Add a U2F access restriction
   */
  post(path: '/me/accessRestriction/u2f'): () => Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
  /**
   * challenge operations
   * Get an U2F Challenge
   */
  post(path: '/me/accessRestriction/u2f/{id}/challenge'): (params: {id: number}) => Promise<nichandle.accessRestriction.U2FSignChallenge>;
  /**
   * disable operations
   * Disable this U2F account
   */
  post(path: '/me/accessRestriction/u2f/{id}/disable'): (params: {id: number, clientData: string, signatureData: string}) => Promise<void>;
  /**
   * enable operations
   * Enable this U2F account
   */
  post(path: '/me/accessRestriction/u2f/{id}/enable'): (params: {id: number, clientData: string, signatureData: string}) => Promise<void>;
  /**
   * validate operations
   * Validate your U2F account
   */
  post(path: '/me/accessRestriction/u2f/{id}/validate'): (params: {id: number, clientData: string, registrationData: string}) => Promise<void>;
  /**
   * accept operations
   * Accept this contract
   */
  post(path: '/me/agreements/{id}/accept'): (params: {id: number}) => Promise<string>;
  /**
   * Auto renewal information
   * Activate auto renew for this nic
   */
  post(path: '/me/autorenew'): (params: {renewDay: number}) => Promise<void>;
  /**
   * pay operations
   * Create an order in order to pay this order's debt
   */
  post(path: '/me/bill/{billId}/debt/pay'): (params: {billId: string}) => Promise<billing.Order>;
  /**
   * invoicesByPostalMail operations
   * Enable or disable invoices by postal mail
   */
  post(path: '/me/billing/invoicesByPostalMail'): (params: {enable: boolean}) => Promise<void>;
  /**
   * changeEmail operations
   * Initiate an email change procedure
   */
  post(path: '/me/changeEmail'): (params: {newEmail: string}) => Promise<nichandle.emailChange.Task>;
  /**
   * changePassword operations
   * Initiate a password change procedure
   */
  post(path: '/me/changePassword'): () => Promise<void>;
  /**
   * Missing description
   * Create a new contact
   */
  post(path: '/me/contact'): (params: {address: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email: string, fax?: string, firstName: string, gender?: nichandle.GenderEnum, language: nichandle.LanguageEnum, lastName: string, legalForm: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone: string, vat?: string}) => Promise<contact.Contact>;
  /**
   * Validate a code to generate associated credit
   * Validate a code to generate associated credit movement
   */
  post(path: '/me/credit/code'): (params: {inputCode: string}) => Promise<billing.credit.balance.Movement>;
  /**
   * pay operations
   * Create an order in order to pay this order's debt
   */
  post(path: '/me/debtAccount/debt/{debtId}/pay'): (params: {debtId: number}) => Promise<billing.Order>;
  /**
   * pay operations
   * Create an order in order to pay all your due debts
   */
  post(path: '/me/debtAccount/pay'): () => Promise<billing.Order>;
  /**
   * pay operations
   * Create an order in order to pay this order's debt
   */
  post(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/pay'): (params: {billId: string, depositId: string}) => Promise<billing.Order>;
  /**
   * List the nichandle.document.Document objects
   * Create new document
   */
  post(path: '/me/document'): (params: {name: string, tags?: complexType.SafeKeyValue<string>[]}) => Promise<nichandle.document.Document>;
  /**
   * Add CORS support on your container
   * Add CORS support on your container
   */
  post(path: '/me/document/cors'): (params: {origin: string}) => Promise<void>;
  /**
   * List the telephony.MailDomain2Service objects
   * Create a custom domain for your fax services
   */
  post(path: '/me/fax/customDomains'): (params: {domain: string}) => Promise<telephony.MailDomain2Service>;
  /**
   * creditOrder operations
   * Generate an order that can be paid in order to credit the fidelity account
   */
  post(path: '/me/fidelityAccount/creditOrder'): (params: {amount: number}) => Promise<billing.Order>;
  /**
   * Route for getting visitor's country and continent
   * Fetch visitor country & region
   */
  post(path: '/me/geolocation'): () => Promise<geolocation.ContinentCountryLocation>;
  /**
   * Groups linked to this account
   * Create a new group
   */
  post(path: '/me/identity/group'): (params: {description?: string, name: string, role?: nichandle.RoleEnum}) => Promise<nichandle.Authentication.Group>;
  /**
   * Users linked to this account
   * Create a new user
   */
  post(path: '/me/identity/user'): (params: {description?: string, email: string, group?: string, login: string, password: string}) => Promise<void>;
  /**
   * A user linked to this account
   * Disable this user
   */
  post(path: '/me/identity/user/{user}/disable'): (params: {user: string}) => Promise<void>;
  /**
   * A user linked to this account
   * Enable this user
   */
  post(path: '/me/identity/user/{user}/enable'): (params: {user: string}) => Promise<void>;
  /**
   * List the dedicated.installationTemplate.Templates objects
   * Create a template
   */
  post(path: '/me/installationTemplate'): (params: {baseTemplateName: string, defaultLanguage: dedicated.TemplateOsLanguageEnum, name: string}) => Promise<void>;
  /**
   * checkIntegrity operations
   * Check the integrity of this template
   */
  post(path: '/me/installationTemplate/{templateName}/checkIntegrity'): (params: {templateName: string}) => Promise<void>;
  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects
   * Add a scheme of partition
   */
  post(path: '/me/installationTemplate/{templateName}/partitionScheme'): (params: {templateName: string, name: string, priority: number}) => Promise<void>;
  /**
   * List the dedicated.installationTemplate.hardwareRaid objects
   * Add an hardware RAID in this partitioning scheme
   */
  post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid'): (params: {schemeName: string, templateName: string, disks: string[], mode: dedicated.TemplateOsHardwareRaidEnum, name: string, step: number}) => Promise<void>;
  /**
   * List the dedicated.installationTemplate.templatePartitions objects
   * Add a partition in this partitioning scheme
   */
  post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition'): (params: {schemeName: string, templateName: string, filesystem: dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: number, size: number, step: number, type: dedicated.TemplatePartitionTypeEnum, volumeName?: string}) => Promise<void>;
  /**
   * List the nichandle.Ipv4Org objects
   * Add an organisation
   */
  post(path: '/me/ipOrganisation'): (params: {abuse_mailbox: string, address: string, city: string, country: nichandle.CountryEnum, firstname: string, lastname: string, phone: string, registry: nichandle.IpRegistryEnum, state?: string, zip?: string}) => Promise<void>;
  /**
   * List the nichandle.ipxe objects
   * Add an IPXE script
   */
  post(path: '/me/ipxeScript'): (params: {description: string, name: string, script: string}) => Promise<nichandle.ipxe>;
  /**
   * subscribe operations
   * Subscribe an email to a restricted mailing list
   */
  post(path: '/me/mailingList/subscribe'): (params: {email: string, mailingList: string}) => Promise<void>;
  /**
   * pay operations
   * Create an order in order to pay this order's debt
   */
  post(path: '/me/order/{orderId}/debt/pay'): (params: {orderId: number}) => Promise<billing.Order>;
  /**
   * pay operations
   * Pay with a payment method reference
   */
  post(path: '/me/order/{orderId}/pay'): (params: {orderId: number, paymentMethod: billing.order.PayWithPaymentMethod}) => Promise<void>;
  /**
   * payWithRegisteredPaymentMean operations
   * Pay with an already registered payment mean
   */
  post(path: '/me/order/{orderId}/payWithRegisteredPaymentMean'): (params: {orderId: number, paymentMean: billing.ReusablePaymentMeanEnum, paymentMeanId?: number}) => Promise<void>;
  /**
   * retraction operations
   * Request retraction of order
   */
  post(path: '/me/order/{orderId}/retraction'): (params: {orderId: number, comment?: string, reason: billing.order.RetractionReasonEnum}) => Promise<void>;
  /**
   * creditOrder operations
   * Generate an order that can be paid in order to credit the OVH account
   */
  post(path: '/me/ovhAccount/{ovhAccountId}/creditOrder'): (params: {ovhAccountId: string, amount: number}) => Promise<billing.Order>;
  /**
   * retrieveMoney operations
   * Transfer money from ovhAccount to your bank account
   */
  post(path: '/me/ovhAccount/{ovhAccountId}/retrieveMoney'): (params: {ovhAccountId: string, amount: number, bankAccountId: number}) => Promise<billing.Order>;
  /**
   * Request a password recover
   * Request a password recover
   */
  post(path: '/me/passwordRecover'): (params: {ovhCompany: nichandle.OvhCompanyEnum, ovhId: string}) => Promise<void>;
  /**
   * Manage payment method
   * Pay an order and register a new payment method if necessary
   */
  post(path: '/me/payment/method'): (params: {callbackUrl: me.payment.method.CallbackUrl, default_?: boolean, description?: string, orderId?: number, paymentType: string, register?: boolean}) => Promise<me.payment.method.Register.ValidationResult>;
  /**
   * Challenge your payment method
   * Challenge one payment method
   */
  post(path: '/me/payment/method/{paymentMethodId}/challenge'): (params: {paymentMethodId: number, challenge: string}) => Promise<me.payment.method.PaymentMethod>;
  /**
   * Finalize one payment method registration
   * Finalize one payment method registration
   */
  post(path: '/me/payment/method/{paymentMethodId}/finalize'): (params: {paymentMethodId: number, expirationMonth?: number, expirationYear?: number, registrationId?: string}) => Promise<me.payment.method.PaymentMethod>;
  /**
   * List the billing.BankAccount objects
   * Enable payment through a new account
   */
  post(path: '/me/paymentMean/bankAccount'): (params: {bic: string, description?: string, iban: string, ownerAddress: string, ownerName: string, setDefault?: boolean}) => Promise<billing.PaymentMeanValidation>;
  /**
   * challenge operations
   * Challenge your bank account
   */
  post(path: '/me/paymentMean/bankAccount/{id}/challenge'): (params: {id: number, challenge: string}) => Promise<void>;
  /**
   * chooseAsDefaultPaymentMean operations
   * Choose this bank account as your default payment mean. Will cancel the previous choice.
   */
  post(path: '/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean'): (params: {id: number}) => Promise<void>;
  /**
   * List the billing.CreditCard objects
   * Add a new credit card
   */
  post(path: '/me/paymentMean/creditCard'): (params?: {description?: string, returnUrl?: string, setDefault?: boolean}) => Promise<billing.PaymentMeanValidation>;
  /**
   * challenge operations
   * Challenge your bank account
   */
  post(path: '/me/paymentMean/creditCard/{id}/challenge'): (params: {id: number, challenge: string}) => Promise<void>;
  /**
   * chooseAsDefaultPaymentMean operations
   * Choose this credit card as your default payment mean. Will cancel the previous choice.
   */
  post(path: '/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean'): (params: {id: number}) => Promise<void>;
  /**
   * chooseAsDefaultPaymentMean operations
   * Allow you to use deferred payment. Will cancel the previous choice.
   */
  post(path: '/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean'): (params: {id: number}) => Promise<void>;
  /**
   * List the billing.Paypal objects
   * Enable payment through a new PayPal account
   */
  post(path: '/me/paymentMean/paypal'): (params?: {description?: string, returnUrl?: string, setDefault?: boolean}) => Promise<billing.PaymentMeanValidation>;
  /**
   * challenge operations
   * Challenge your bank account
   */
  post(path: '/me/paymentMean/paypal/{id}/challenge'): (params: {id: number, challenge: string}) => Promise<void>;
  /**
   * chooseAsDefaultPaymentMean operations
   * Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.
   */
  post(path: '/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean'): (params: {id: number}) => Promise<void>;
  /**
   * apply operations
   * Ask for SLA application
   */
  post(path: '/me/sla/{id}/apply'): (params: {id: number}) => Promise<void>;
  /**
   * List the nichandle.sshKey objects
   * Add a new public SSH key
   */
  post(path: '/me/sshKey'): (params: {key: string, keyName: string}) => Promise<void>;
  /**
   * List the nichandle.SubAccount objects
   * Create a new sub-account
   */
  post(path: '/me/subAccount'): (params?: {description?: string}) => Promise<number>;
  /**
   * createConsumerKey operations
   * Create a consumer key for the current application
   */
  post(path: '/me/subAccount/{id}/createConsumerKey'): (params: {id: number}) => Promise<nichandle.SubAccountConsumerKey>;
  /**
   * accept operations
   * Accept this change request
   */
  post(path: '/me/task/contactChange/{id}/accept'): (params: {id: number, token: string}) => Promise<void>;
  /**
   * refuse operations
   * Refuse this change request
   */
  post(path: '/me/task/contactChange/{id}/refuse'): (params: {id: number, token: string}) => Promise<void>;
  /**
   * resendEmail operations
   * This call will send you a new email, containing a new token
   */
  post(path: '/me/task/contactChange/{id}/resendEmail'): (params: {id: number}) => Promise<void>;
  /**
   * accelerate operations
   * Accelerate the task
   */
  post(path: '/me/task/domain/{id}/accelerate'): (params: {id: number}) => Promise<void>;
  /**
   * cancel operations
   * Cancel the task
   */
  post(path: '/me/task/domain/{id}/cancel'): (params: {id: number}) => Promise<void>;
  /**
   * relaunch operations
   * Relaunch the task
   */
  post(path: '/me/task/domain/{id}/relaunch'): (params: {id: number}) => Promise<void>;
  /**
   * accept operations
   * Accept this change request
   */
  post(path: '/me/task/emailChange/{id}/accept'): (params: {id: number, token: string}) => Promise<void>;
  /**
   * refuse operations
   * Refuse this change request
   */
  post(path: '/me/task/emailChange/{id}/refuse'): (params: {id: number, token: string}) => Promise<void>;
  /**
   * List the telephony.DefaultIpRestriction objects
   * Create a default IP restriction for your future VoIP lines
   */
  post(path: '/me/telephony/defaultIpRestriction'): (params: {subnet: string, type: telephonyProtocolEnum}) => Promise<telephony.DefaultIpRestriction>;
  /**
   * settings operations
   * Change the telephony settings linked to the customer account
   */
  post(path: '/me/telephony/settings'): (params: {settings: telephony.Settings}) => Promise<void>;
  /**
   * checkValidity operations
   * Verify existing voucher
   */
  post(path: '/me/voucher/checkValidity'): (params: {voucher: string}) => Promise<nichandle.VoucherStatus>;
  /**
   * setting operations
   * Change xdsl settings linked to the nichandle
   */
  post(path: '/me/xdsl/setting'): (params?: {resellerFastModemShipping?: boolean, resellerModemBasicConfig?: boolean}) => Promise<void>;
  /**
   * SOTP Two-Factor Authentication
   * Delete this Two-Factor
   */
  delete(path: '/me/accessRestriction/backupCode'): () => Promise<void>;
  /**
   * List of all IP Restrictions
   * Delete this restriction rule
   */
  delete(path: '/me/accessRestriction/ip/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * Sms Two-Factor Authentication
   * Delete this Two-Factor
   */
  delete(path: '/me/accessRestriction/sms/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * TOTP Two-Factor Authentication
   * Delete this Two-Factor
   */
  delete(path: '/me/accessRestriction/totp/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * U2F Two-Factor Authentication
   * Delete this Two-Factor
   */
  delete(path: '/me/accessRestriction/u2f/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * API Application
   * Remove this application. It will revoke all credential belonging to this application.
   */
  delete(path: '/me/api/application/{applicationId}'): (params: {applicationId: number}) => Promise<void>;
  /**
   * API Credential
   * Remove this credential
   */
  delete(path: '/me/api/credential/{credentialId}'): (params: {credentialId: number}) => Promise<void>;
  /**
   * List of documents added on your account
   * Delete a document
   */
  delete(path: '/me/document/{id}'): (params: {id: string}) => Promise<void>;
  /**
   * Custom domains of your fax services
   * Delete a custom domain of your fax services
   */
  delete(path: '/me/fax/customDomains/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * A group linked to this account
   * Delete this object
   */
  delete(path: '/me/identity/group/{group}'): (params: {group: string}) => Promise<void>;
  /**
   * A user linked to this account
   * Delete this object
   */
  delete(path: '/me/identity/user/{user}'): (params: {user: string}) => Promise<void>;
  /**
   * Available installation templates
   * remove this template
   */
  delete(path: '/me/installationTemplate/{templateName}'): (params: {templateName: string}) => Promise<void>;
  /**
   * Partitioning schemes available on this template
   * remove this scheme of partition
   */
  delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {schemeName: string, templateName: string}) => Promise<void>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Remove this RAID
   */
  delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {name: string, schemeName: string, templateName: string}) => Promise<void>;
  /**
   *  Partitions defined in this partitioning scheme
   * remove this partition
   */
  delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {mountpoint: string, schemeName: string, templateName: string}) => Promise<void>;
  /**
   * Details about an IP block organisation
   * Delete this organisation
   */
  delete(path: '/me/ipOrganisation/{organisationId}'): (params: {organisationId: string}) => Promise<void>;
  /**
   * Customer IPXE scripts
   * Remove this IPXE Script
   */
  delete(path: '/me/ipxeScript/{name}'): (params: {name: string}) => Promise<void>;
  /**
   * Manage payment method
   * Cancel one payment method
   */
  delete(path: '/me/payment/method/{paymentMethodId}'): (params: {paymentMethodId: number}) => Promise<me.payment.method.PaymentMethod>;
  /**
   * SEPA bank account info
   * Disable payment through this account
   */
  delete(path: '/me/paymentMean/bankAccount/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * Credit card informations
   * Disable payment through this credit card
   */
  delete(path: '/me/paymentMean/creditCard/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * Paypal account info
   * Disable payment through this PayPal account
   */
  delete(path: '/me/paymentMean/paypal/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Remove this public SSH key
   */
  delete(path: '/me/sshKey/{keyName}'): (params: {keyName: string}) => Promise<void>;
  /**
   * Default IP restriction of a VoIP line
   * Delete a default IP restriction for your future VoIP lines
   */
  delete(path: '/me/telephony/defaultIpRestriction/{id}'): (params: {id: number}) => Promise<void>;
}
/**
 * classic Model
 */type orderPrice = order.Price;
type telephonyProtocolEnum = telephony.ProtocolEnum;

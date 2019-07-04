import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace agreements {
    //agreements.AgreementStateEnum
    export type AgreementStateEnum = "ko" | "obsolete" | "ok" | "todo"
    //agreements.Contract
    // fullName: agreements.Contract.Contract
    export interface Contract {
        active?: boolean;
        date?: string;
        name?: string;
        pdf?: string;
        text?: string;
    }
    //agreements.ContractAgreement
    // fullName: agreements.ContractAgreement.ContractAgreement
    export interface ContractAgreement {
        agreed?: OVH.agreements.AgreementStateEnum;
        contractId?: number;
        date?: string;
        id?: number;
    }
}
export namespace api {
    //api.Application
    // fullName: api.Application.Application
    export interface Application {
        applicationId?: number;
        applicationKey?: string;
        description?: string;
        name?: string;
        status?: OVH.api.ApplicationStatusEnum;
    }
    //api.ApplicationStatusEnum
    export type ApplicationStatusEnum = "active" | "blocked" | "inactive" | "trusted"
    //api.Credential
    // fullName: api.Credential.Credential
    export interface Credential {
        applicationId?: number;
        creation?: string;
        credentialId?: number;
        expiration?: string;
        lastUse?: string;
        ovhSupport?: boolean;
        rules?: OVH.auth.AccessRule[];
        status?: OVH.auth.CredentialStateEnum;
    }
    //api.Log
    // fullName: api.Log.Log
    export interface Log {
        account?: string;
        date?: string;
        ip?: string;
        logId?: number;
        method?: OVH.http.MethodEnum;
        path?: string;
        route?: string;
    }
}
export namespace auth {
    //auth.AccessRule
    // fullName: auth.AccessRule.AccessRule
    export interface AccessRule {
        method?: OVH.auth.MethodEnum;
        path?: string;
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
        bankAccount?: boolean;
        creditCard?: boolean;
        deferredPaymentAccount?: boolean;
        paypal?: boolean;
    }
    //billing.BankAccount
    // fullName: billing.BankAccount.BankAccount
    export interface BankAccount {
        bic?: string;
        creationDate?: string;
        defaultPaymentMean?: boolean;
        description?: string;
        iban?: string;
        id?: number;
        mandateSignatureDate?: string;
        ownerAddress?: string;
        ownerName?: string;
        state?: OVH.billing.BankAccountStateEnum;
        uniqueReference?: string;
        validationDocumentLink?: string;
    }
    //billing.BankAccountStateEnum
    export type BankAccountStateEnum = "blockedForIncidents" | "pendingValidation" | "valid"
    //billing.Bill
    // fullName: billing.Bill.Bill
    export interface Bill {
        billId?: string;
        date?: string;
        orderId?: number;
        password?: string;
        pdfUrl?: string;
        priceWithTax?: OVH.order.Price;
        priceWithoutTax?: OVH.order.Price;
        tax?: OVH.order.Price;
        url?: string;
    }
    //billing.BillDetail
    // fullName: billing.BillDetail.BillDetail
    export interface BillDetail {
        billDetailId?: string;
        description?: string;
        domain?: string;
        periodEnd?: string;
        periodStart?: string;
        quantity?: string;
        totalPrice?: OVH.order.Price;
        unitPrice?: OVH.order.Price;
    }
    //billing.BillingTaskStatusEnum
    export type BillingTaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    //billing.CreditBalance
    // fullName: billing.CreditBalance.CreditBalance
    export interface CreditBalance {
        amount?: OVH.order.Price;
        balanceName?: string;
    }
    //billing.CreditCard
    // fullName: billing.CreditCard.CreditCard
    export interface CreditCard {
        defaultPaymentMean?: boolean;
        description?: string;
        expirationDate?: string;
        id?: number;
        number?: string;
        state?: OVH.billing.CreditCardStateEnum;
        threeDsValidated?: boolean;
        type?: string;
    }
    //billing.CreditCardStateEnum
    export type CreditCardStateEnum = "expired" | "tooManyFailures" | "valid"
    //billing.DeferredPaymentAccount
    // fullName: billing.DeferredPaymentAccount.DeferredPaymentAccount
    export interface DeferredPaymentAccount {
        creationDate?: string;
        defaultPaymentMean?: boolean;
        description?: string;
        id?: number;
        label?: string;
        state?: OVH.billing.DeferredPaymentAccountStatusEnum;
    }
    //billing.DeferredPaymentAccountStatusEnum
    export type DeferredPaymentAccountStatusEnum = "valid"
    //billing.Deposit
    // fullName: billing.Deposit.Deposit
    export interface Deposit {
        amount?: OVH.order.Price;
        date?: string;
        depositId?: string;
        orderId?: number;
        password?: string;
        paymentInfo?: OVH.debt.associatedObject.PaymentInfo;
        pdfUrl?: string;
        url?: string;
    }
    //billing.DepositDetail
    // fullName: billing.DepositDetail.DepositDetail
    export interface DepositDetail {
        depositDetailId?: string;
        description?: string;
        domain?: string;
        quantity?: string;
        totalPrice?: OVH.order.Price;
        unitPrice?: OVH.order.Price;
    }
    //billing.FidelityAccount
    // fullName: billing.FidelityAccount.FidelityAccount
    export interface FidelityAccount {
        alertThreshold?: number;
        balance?: number;
        canBeCredited?: boolean;
        lastUpdate?: string;
        openDate?: string;
    }
    //billing.FidelityMovement
    // fullName: billing.FidelityMovement.FidelityMovement
    export interface FidelityMovement {
        amount?: number;
        balance?: number;
        date?: string;
        description?: string;
        movementId?: number;
        operation?: OVH.billing.fidelityAccount.OperationEnum;
        order?: number;
        previousBalance?: number;
    }
    //billing.ItemDetail
    // fullName: billing.ItemDetail.ItemDetail
    export interface ItemDetail {
        order?: OVH.billing.ItemDetail.Order;
    }
    export namespace ItemDetail {
        //billing.ItemDetail.Order
        // fullName: billing.ItemDetail.Order.Order
        export interface Order {
            action?: OVH.billing.ItemDetail.OrderActionEnum;
            configurations?: OVH.billing.ItemDetail.OrderConfiguration[];
            plan?: OVH.billing.ItemDetail.OrderPlan;
        }
        //billing.ItemDetail.OrderActionEnum
        export type OrderActionEnum = "consumption" | "installation" | "renew" | "upgrade"
        //billing.ItemDetail.OrderConfiguration
        // fullName: billing.ItemDetail.OrderConfiguration.OrderConfiguration
        export interface OrderConfiguration {
            label?: string;
            value?: string;
        }
        //billing.ItemDetail.OrderPlan
        // fullName: billing.ItemDetail.OrderPlan.OrderPlan
        export interface OrderPlan {
            code?: string;
            duration?: string;
            pricingMode?: string;
            product?: OVH.billing.ItemDetail.OrderPlanProduct;
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
        status?: OVH.billing.BillingTaskStatusEnum;
    }
    //billing.Movement
    // fullName: billing.Movement.Movement
    export interface Movement {
        amount?: OVH.order.Price;
        balance?: OVH.order.Price;
        date?: string;
        description?: string;
        movementId?: number;
        operation?: OVH.billing.ovhAccount.OperationEnum;
        order?: number;
        previousBalance?: OVH.order.Price;
    }
    //billing.Order
    // fullName: billing.Order.Order
    export interface Order {
        date?: string;
        expirationDate?: string;
        orderId?: number;
        password?: string;
        pdfUrl?: string;
        priceWithTax?: OVH.order.Price;
        priceWithoutTax?: OVH.order.Price;
        retractionDate?: string;
        tax?: OVH.order.Price;
        url?: string;
    }
    //billing.OrderDetail
    // fullName: billing.OrderDetail.OrderDetail
    export interface OrderDetail {
        cancelled?: boolean;
        description?: string;
        domain?: string;
        orderDetailId?: number;
        quantity?: string;
        totalPrice?: OVH.order.Price;
        unitPrice?: OVH.order.Price;
    }
    //billing.OvhAccount
    // fullName: billing.OvhAccount.OvhAccount
    export interface OvhAccount {
        alertThreshold?: number;
        balance?: OVH.order.Price;
        canBeCredited?: boolean;
        isActive?: boolean;
        lastUpdate?: string;
        openDate?: string;
        ovhAccountId?: string;
    }
    //billing.Payment
    // fullName: billing.Payment.Payment
    export interface Payment {
        paymentDate?: string;
        paymentIdentifier?: string;
        paymentType?: OVH.billing.PaymentMeanEnum;
    }
    //billing.PaymentMeanEnum
    export type PaymentMeanEnum = "cash" | "chargeback" | "cheque" | "creditAccount" | "creditCard" | "debtAccount" | "deposit" | "digitalLaunchPad" | "edinar" | "fidelityPoints" | "free" | "ideal" | "incubatorAccount" | "mandat" | "multibanco" | "none" | "ovhAccount" | "paymentMandate" | "paypal" | "payu" | "platnosci" | "refund" | "transfer" | "withdrawal"
    //billing.PaymentMeanValidation
    // fullName: billing.PaymentMeanValidation.PaymentMeanValidation
    export interface PaymentMeanValidation {
        id?: number;
        submitUrl?: string;
        url?: string;
        validationType?: OVH.billing.PaymentMeanValidationType;
    }
    //billing.PaymentMeanValidationType
    export type PaymentMeanValidationType = "creditAccount" | "documentToSend" | "simpleValidation"
    //billing.PaymentMethod
    // fullName: billing.PaymentMethod.PaymentMethod
    export interface PaymentMethod {
        billingContactId?: number;
        creationDate?: string;
        default?: boolean;
        description?: string;
        id?: number;
        paymentSubType?: OVH.billing.paymentMethod.PaymentSubTypeEnum;
        paymentType?: OVH.billing.paymentMethod.PaymentTypeEnum;
        publicLabel?: string;
        status?: OVH.billing.paymentMethod.StatusEnum;
    }
    //billing.Paypal
    // fullName: billing.Paypal.Paypal
    export interface Paypal {
        agreementId?: string;
        creationDate?: string;
        defaultPaymentMean?: boolean;
        description?: string;
        email?: string;
        id?: number;
        state?: OVH.billing.PaypalStateEnum;
    }
    //billing.PaypalStateEnum
    export type PaypalStateEnum = "tooManyFailures" | "valid"
    //billing.Refund
    // fullName: billing.Refund.Refund
    export interface Refund {
        date?: string;
        orderId?: number;
        originalBillId?: string;
        password?: string;
        pdfUrl?: string;
        priceWithTax?: OVH.order.Price;
        priceWithoutTax?: OVH.order.Price;
        refundId?: string;
        tax?: OVH.order.Price;
        url?: string;
    }
    //billing.RefundDetail
    // fullName: billing.RefundDetail.RefundDetail
    export interface RefundDetail {
        description?: string;
        domain?: string;
        quantity?: string;
        reference?: string;
        refundDetailId?: string;
        refundId?: string;
        totalPrice?: OVH.order.Price;
        unitPrice?: OVH.order.Price;
    }
    //billing.ReusablePaymentMeanEnum
    export type ReusablePaymentMeanEnum = "CREDIT_CARD" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL" | "bankAccount" | "creditCard" | "fidelityAccount" | "ovhAccount" | "paypal"
    //billing.SlaOperation
    // fullName: billing.SlaOperation.SlaOperation
    export interface SlaOperation {
        date?: string;
        description?: string;
        endDate?: string;
        id?: number;
        name?: string;
        startDate?: string;
    }
    //billing.SlaOperationService
    // fullName: billing.SlaOperationService.SlaOperationService
    export interface SlaOperationService {
        description?: string;
        serviceName?: string;
        slaApplication?: string;
        slaPlan?: string;
    }
    //billing.VoucherAccount
    // fullName: billing.VoucherAccount.VoucherAccount
    export interface VoucherAccount {
        balance?: OVH.order.Price;
        lastUpdate?: string;
        openDate?: string;
        voucherAccountId?: string;
    }
    //billing.VoucherMovement
    // fullName: billing.VoucherMovement.VoucherMovement
    export interface VoucherMovement {
        amount?: OVH.order.Price;
        balance?: OVH.order.Price;
        date?: string;
        description?: string;
        movementId?: number;
        operation?: OVH.billing.voucherAccount.OperationEnum;
        order?: number;
        previousBalance?: OVH.order.Price;
    }
    //billing.Withdrawal
    // fullName: billing.Withdrawal.Withdrawal
    export interface Withdrawal {
        amount?: OVH.order.Price;
        country?: string;
        date?: string;
        orderId?: number;
        password?: string;
        pdfUrl?: string;
        url?: string;
        withdrawalId?: string;
    }
    //billing.WithdrawalDetail
    // fullName: billing.WithdrawalDetail.WithdrawalDetail
    export interface WithdrawalDetail {
        description?: string;
        domain?: string;
        quantity?: string;
        totalPrice?: OVH.order.Price;
        unitPrice?: OVH.order.Price;
        withdrawalDetailId?: string;
    }
    export namespace credit {
        //billing.credit.Balance
        // fullName: billing.credit.Balance.Balance
        export interface Balance {
            amount?: OVH.order.Price;
            balanceName?: string;
            booked?: OVH.billing.credit.balance.BookedMovement[];
            creationDate?: string;
            expiring?: OVH.billing.credit.balance.ExpiringMovement[];
            expiringSummary?: OVH.billing.credit.balance.ExpiringMovement[];
            lastUpdate?: string;
            type?: OVH.billing.credit.balance.Type;
        }
        export namespace balance {
            //billing.credit.balance.BookedMovement
            // fullName: billing.credit.balance.BookedMovement.BookedMovement
            export interface BookedMovement {
                amount?: OVH.order.Price;
                orderId?: number;
            }
            //billing.credit.balance.ExpiringMovement
            // fullName: billing.credit.balance.ExpiringMovement.ExpiringMovement
            export interface ExpiringMovement {
                amount?: OVH.order.Price;
                creationDate?: string;
                expirationDate?: string;
                lastUpdate?: string;
                sourceObject?: OVH.billing.credit.balance.movement.SubObject;
            }
            //billing.credit.balance.Movement
            // fullName: billing.credit.balance.Movement.Movement
            export interface Movement {
                amount?: OVH.order.Price;
                balanceName?: string;
                creationDate?: string;
                expirationDate?: string;
                lastUpdate?: string;
                movementId?: number;
                orderId?: number;
                sourceObject?: OVH.billing.credit.balance.movement.SubObject;
                type?: string;
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
            type?: OVH.billing.order.associatedObject.TypeEnum;
        }
        //billing.order.OrderStatusEnum
        export type OrderStatusEnum = "cancelled" | "cancelling" | "checking" | "delivered" | "delivering" | "documentsRequested" | "notPaid" | "unknown"
        //billing.order.PayWithPaymentMethod
        // fullName: billing.order.PayWithPaymentMethod.PayWithPaymentMethod
        export interface PayWithPaymentMethod {
            id?: number;
        }
        //billing.order.PaymentMean
        // fullName: billing.order.PaymentMean.PaymentMean
        export interface PaymentMean {
            fee?: number;
            htmlForm?: string;
            httpMethod?: string;
            logo?: string;
            parameters?: OVH.billing.order.paymentMean.HttpParameter[];
            subType?: string;
            url?: string;
        }
        //billing.order.PaymentMeans
        // fullName: billing.order.PaymentMeans.PaymentMeans
        export interface PaymentMeans {
            creditCard?: OVH.billing.order.PaymentMean[];
            edinar?: OVH.billing.order.PaymentMean[];
            fidelityPoints?: OVH.billing.order.PaymentMean[];
            ideal?: OVH.billing.order.PaymentMean[];
            multibanco?: OVH.billing.order.PaymentMean[];
            ovhAccount?: OVH.billing.order.PaymentMean[];
            paypal?: OVH.billing.order.PaymentMean[];
            promotion?: OVH.billing.order.PaymentMean[];
        }
        //billing.order.PaymentMethods
        // fullName: billing.order.PaymentMethods.PaymentMethods
        export interface PaymentMethods {
            available?: OVH.payment.method.AvailablePaymentMethod[];
            registered?: number[];
        }
        //billing.order.RegisteredPaymentMean
        // fullName: billing.order.RegisteredPaymentMean.RegisteredPaymentMean
        export interface RegisteredPaymentMean {
            paymentMean?: OVH.billing.ReusablePaymentMeanEnum;
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
                choice?: OVH.billing.order.paymentMean.HttpParameterChoice[];
                name?: string;
                value?: string;
            }
            //billing.order.paymentMean.HttpParameterChoice
            // fullName: billing.order.paymentMean.HttpParameterChoice.HttpParameterChoice
            export interface HttpParameterChoice {
                name?: string;
                value?: string;
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
        key?: string;
        value?: T;
    }
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace contact {
    //contact.Address
    // fullName: contact.Address.Address
    export interface Address {
        city?: string;
        country?: OVH.nichandle.CountryEnum;
        line1?: string;
        line2?: string;
        line3?: string;
        otherDetails?: string;
        province?: string;
        zip?: string;
    }
    //contact.Contact
    // fullName: contact.Contact.Contact
    export interface Contact {
        address?: OVH.contact.Address;
        birthCity?: string;
        birthCountry?: OVH.nichandle.CountryEnum;
        birthDay?: string;
        birthZip?: string;
        cellPhone?: string;
        companyNationalIdentificationNumber?: string;
        email?: string;
        fax?: string;
        firstName?: string;
        gender?: OVH.nichandle.GenderEnum;
        id?: number;
        language?: OVH.nichandle.LanguageEnum;
        lastName?: string;
        legalForm?: OVH.nichandle.LegalFormEnum;
        nationalIdentificationNumber?: string;
        nationality?: OVH.nichandle.CountryEnum;
        organisationName?: string;
        organisationType?: string;
        phone?: string;
        spareEmail?: string;
        vat?: string;
    }
    //contact.FieldInformation
    // fullName: contact.FieldInformation.FieldInformation
    export interface FieldInformation {
        fieldName?: string;
        mandatory?: boolean;
        readOnly?: boolean;
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
        active?: boolean;
        dueAmount?: OVH.order.Price;
        pendingAmount?: OVH.order.Price;
        todoAmount?: OVH.order.Price;
        unmaturedAmount?: OVH.order.Price;
    }
    //debt.Debt
    // fullName: debt.Debt.Debt
    export interface Debt {
        amount?: OVH.order.Price;
        date?: string;
        debtId?: number;
        dueAmount?: OVH.order.Price;
        dueDate?: string;
        orderId?: number;
        pendingAmount?: OVH.order.Price;
        todoAmount?: OVH.order.Price;
        unmaturedAmount?: OVH.order.Price;
    }
    //debt.Operation
    // fullName: debt.Operation.Operation
    export interface Operation {
        amount?: OVH.order.Price;
        date?: string;
        depositOrderId?: number;
        operationId?: number;
        status?: OVH.debt.entry.StatusEnum;
        type?: OVH.debt.entry.OperationEnum;
    }
    export namespace associatedObject {
        //debt.associatedObject.PaymentInfo
        // fullName: debt.associatedObject.PaymentInfo.PaymentInfo
        export interface PaymentInfo {
            description?: string;
            paymentType?: OVH.billing.PaymentMeanEnum;
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
            paymentInfo?: OVH.debt.associatedObject.PaymentInfo;
            subId?: string;
            type?: OVH.debt.associatedObject.TypeEnum;
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
            availableLanguages?: OVH.dedicated.TemplateOsLanguageEnum[];
            beta?: boolean;
            bitFormat?: OVH.dedicated.server.BitFormatEnum;
            category?: OVH.dedicated.TemplateOsUsageEnum;
            customization?: OVH.dedicated.TemplateOsProperties;
            defaultLanguage?: OVH.dedicated.TemplateOsLanguageEnum;
            deprecated?: boolean;
            description?: string;
            distribution?: string;
            family?: OVH.dedicated.TemplateOsTypeEnum;
            filesystems?: OVH.dedicated.TemplateOsFileSystemEnum[];
            hardRaidConfiguration?: boolean;
            lastModification?: string;
            lvmReady?: boolean;
            supportsDistributionKernel?: boolean;
            supportsGptLabel?: boolean;
            supportsRTM?: boolean;
            supportsSqlServer?: boolean;
            supportsUEFI?: OVH.dedicated.server.SupportsUEFIEnum;
            templateName?: string;
        }
        //dedicated.installationTemplate.hardwareRaid
        // fullName: dedicated.installationTemplate.hardwareRaid.hardwareRaid
        export interface hardwareRaid {
            disks?: string[];
            mode?: OVH.dedicated.TemplateOsHardwareRaidEnum;
            name?: string;
            step?: number;
        }
        //dedicated.installationTemplate.templatePartitioningSchemes
        // fullName: dedicated.installationTemplate.templatePartitioningSchemes.templatePartitioningSchemes
        export interface templatePartitioningSchemes {
            name?: string;
            priority?: number;
        }
        //dedicated.installationTemplate.templatePartitions
        // fullName: dedicated.installationTemplate.templatePartitions.templatePartitions
        export interface templatePartitions {
            filesystem?: OVH.dedicated.TemplateOsFileSystemEnum;
            mountpoint?: string;
            order?: number;
            raid?: OVH.dedicated.server.PartitionRaidEnum;
            size?: OVH.complexType.UnitAndValue<number>;
            type?: OVH.dedicated.TemplatePartitionTypeEnum;
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
        description?: string;
        executionDuration?: number;
        step?: string;
    }
}
export namespace geolocation {
    //geolocation.ContinentCountryLocation
    // fullName: geolocation.ContinentCountryLocation.ContinentCountryLocation
    export interface ContinentCountryLocation {
        continent?: OVH.coreTypes.ContinentEnum;
        countryCode?: OVH.coreTypes.CountryEnum;
        ip?: string;
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
        access?: string;
        createdAt?: string;
        expireAt?: string;
    }
}
export namespace me {
    export namespace SupportLevel {
        //me.SupportLevel.Level
        // fullName: me.SupportLevel.Level.Level
        export interface Level {
            level?: OVH.me.SupportLevel.LevelTypeEnum;
        }
        //me.SupportLevel.LevelTypeEnum
        export type LevelTypeEnum = "standard" | "premium" | "premium-accredited" | "business" | "enterprise"
    }
    export namespace consent {
        //me.consent.Campaign
        // fullName: me.consent.Campaign.Campaign
        export interface Campaign {
            description?: string;
            name?: string;
            type?: OVH.me.consent.CampaignTypeEnum;
        }
        //me.consent.CampaignTypeEnum
        export type CampaignTypeEnum = "OPTIN" | "OPTOUT"
        //me.consent.Consent
        // fullName: me.consent.Consent.Consent
        export interface Consent {
            campaign?: string;
            history?: OVH.me.consent.Decision[];
            type?: OVH.me.consent.CampaignTypeEnum;
            value?: boolean;
        }
        //me.consent.Decision
        // fullName: me.consent.Decision.Decision
        export interface Decision {
            timestamp?: string;
            value?: boolean;
        }
    }
    export namespace consumption {
        //me.consumption.Price
        // fullName: me.consumption.Price.Price
        export interface Price {
            currencyCode?: OVH.order.CurrencyCodeEnum;
            text?: string;
            value?: number;
            valueInUcents?: number;
        }
        //me.consumption.Transaction
        // fullName: me.consumption.Transaction.Transaction
        export interface Transaction {
            beginDate?: string;
            creationDate?: string;
            elements?: OVH.me.consumption.transaction.Element[];
            endDate?: string;
            id?: number;
            lastUpdate?: string;
            price?: OVH.me.consumption.Price;
            serviceId?: number;
        }
        export namespace transaction {
            //me.consumption.transaction.Element
            // fullName: me.consumption.transaction.Element.Element
            export interface Element {
                details?: OVH.me.consumption.transaction.Element.Detail[];
                planCode?: string;
                planFamily?: string;
                price?: OVH.me.consumption.Price;
                quantity?: number;
            }
            export namespace Element {
                //me.consumption.transaction.Element.Detail
                // fullName: me.consumption.transaction.Element.Detail.Detail
                export interface Detail {
                    price?: OVH.me.consumption.Price;
                    quantity?: number;
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
                icon?: OVH.me.payment.method.Icon;
                oneshot?: boolean;
                paymentType?: string;
                registerable?: boolean;
            }
            //me.payment.method.CallbackUrl
            // fullName: me.payment.method.CallbackUrl.CallbackUrl
            export interface CallbackUrl {
                cancel?: string;
                error?: string;
                failure?: string;
                pending?: string;
                success?: string;
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
                creationDate?: string;
                default?: boolean;
                description?: string;
                expirationDate?: string;
                icon?: OVH.me.payment.method.Icon;
                label?: string;
                lastUpdate?: string;
                paymentMeanId?: number;
                paymentMethodId?: number;
                paymentSubType?: string;
                paymentType?: string;
                status?: OVH.me.payment.method.PaymentMethod.Status;
            }
            export namespace PaymentMethod {
                //me.payment.method.PaymentMethod.Status
                export type Status = "CANCELED" | "CANCELING" | "CREATED" | "ERROR" | "EXPIRED" | "CREATING" | "MAINTENANCE" | "PAUSED" | "VALID"
            }
            export namespace Register {
                //me.payment.method.Register.ValidationResult
                // fullName: me.payment.method.Register.ValidationResult.ValidationResult
                export interface ValidationResult {
                    paymentMethodId?: number;
                    url?: string;
                    validationType?: OVH.me.payment.method.Register.ValidationType;
                }
                //me.payment.method.Register.ValidationType
                export type ValidationType = "DONE" | "REDIRECT" | "IFRAME_VANTIV"
            }
            //me.payment.method.Transaction
            // fullName: me.payment.method.Transaction.Transaction
            export interface Transaction {
                amount?: OVH.order.Price;
                creationDate?: string;
                status?: OVH.me.payment.method.Transaction.Status;
                transactionId?: number;
                type?: OVH.me.payment.method.Transaction.Type;
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
            expiration?: string;
            subject?: string;
        }
        //nichandle.Authentication.Group
        // fullName: nichandle.Authentication.Group.Group
        export interface Group {
            creation?: string;
            defaultGroup?: boolean;
            description?: string;
            lastUpdate?: string;
            name?: string;
            role?: OVH.nichandle.RoleEnum;
        }
        //nichandle.Authentication.Provider
        // fullName: nichandle.Authentication.Provider.Provider
        export interface Provider {
            creation?: string;
            groupAttributeName?: string;
            idpSigningCertificate?: OVH.nichandle.Authentication.Certificate;
            lastUpdate?: string;
            ssoServiceUrl?: string;
        }
    }
    //nichandle.BillingCapacities
    // fullName: nichandle.BillingCapacities.BillingCapacities
    export interface BillingCapacities {
        canUseDebtSystem?: boolean;
        canUsePostalMailForInvoices?: boolean;
        requiredPaymentMethod?: OVH.nichandle.RequiredPaymentMethodEnum;
    }
    //nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    //nichandle.Currency
    // fullName: nichandle.Currency.Currency
    export interface Currency {
        code?: string;
        symbol?: string;
    }
    //nichandle.DeveloperModeRestriction
    // fullName: nichandle.DeveloperModeRestriction.DeveloperModeRestriction
    export interface DeveloperModeRestriction {
        enabled?: boolean;
    }
    //nichandle.DomainTask
    // fullName: nichandle.DomainTask.DomainTask
    export interface DomainTask {
        canAccelerate?: boolean;
        canCancel?: boolean;
        canRelaunch?: boolean;
        comment?: string;
        creationDate?: string;
        domain?: string;
        doneDate?: string;
        function?: OVH.domain.NicOperationFunctionEnum;
        id?: number;
        lastUpdate?: string;
        status?: OVH.domain.OperationStatusEnum;
        todoDate?: string;
    }
    //nichandle.DomainTaskArgument
    // fullName: nichandle.DomainTaskArgument.DomainTaskArgument
    export interface DomainTaskArgument {
        acceptedFormats?: OVH.domain.DocumentFormatsEnum[];
        acceptedValues?: string[];
        description?: string;
        fields?: OVH.xander.ContactFieldEnum[];
        key?: string;
        maximumSize?: number;
        minimumSize?: number;
        readOnly?: boolean;
        template?: string;
        type?: string;
        value?: string;
    }
    //nichandle.DomainTaskProgressBar
    // fullName: nichandle.DomainTaskProgressBar.DomainTaskProgressBar
    export interface DomainTaskProgressBar {
        currentStep?: OVH.domain.OperationStep;
        expectedDoneDate?: string;
        followUpSteps?: OVH.domain.OperationStep[];
        lastUpdateDate?: string;
        progress?: number;
        taskActions?: OVH.domain.OperationActionEnum[];
        taskStatus?: OVH.domain.OperationStatusEnum;
    }
    //nichandle.GenderEnum
    export type GenderEnum = "female" | "male"
    //nichandle.IpRegistryEnum
    export type IpRegistryEnum = "ARIN" | "RIPE"
    //nichandle.IpRestriction
    // fullName: nichandle.IpRestriction.IpRestriction
    export interface IpRestriction {
        id?: number;
        ip?: string;
        rule?: OVH.nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning?: boolean;
    }
    //nichandle.IpRestrictionDefaultRule
    // fullName: nichandle.IpRestrictionDefaultRule.IpRestrictionDefaultRule
    export interface IpRestrictionDefaultRule {
        rule?: OVH.nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning?: boolean;
    }
    //nichandle.Ipv4Org
    // fullName: nichandle.Ipv4Org.Ipv4Org
    export interface Ipv4Org {
        abuse_mailbox?: string;
        address?: string;
        city?: string;
        country?: OVH.nichandle.CountryEnum;
        firstname?: string;
        lastname?: string;
        organisationId?: string;
        phone?: string;
        registry?: OVH.nichandle.IpRegistryEnum;
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
        key?: string;
        value?: string;
    }
    //nichandle.NicAutorenewInfos
    // fullName: nichandle.NicAutorenewInfos.NicAutorenewInfos
    export interface NicAutorenewInfos {
        active?: boolean;
        lastRenew?: string;
        renewDay?: number;
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
        country?: OVH.nichandle.CountryEnum;
        currency?: OVH.nichandle.Currency;
        customerCode?: string;
        email?: string;
        fax?: string;
        firstname?: string;
        italianSDI?: string;
        language?: OVH.nichandle.LanguageEnum;
        legalform?: OVH.nichandle.LegalFormEnum;
        name?: string;
        nationalIdentificationNumber?: string;
        nichandle?: string;
        organisation?: string;
        ovhCompany?: OVH.nichandle.OvhCompanyEnum;
        ovhSubsidiary?: OVH.nichandle.OvhSubsidiaryEnum;
        phone?: string;
        phoneCountry?: OVH.nichandle.CountryEnum;
        sex?: OVH.nichandle.GenderEnum;
        spareEmail?: string;
        state?: OVH.nichandle.StateEnum;
        vat?: string;
        zip?: string;
    }
    //nichandle.NichandleSmsNotification
    // fullName: nichandle.NichandleSmsNotification.NichandleSmsNotification
    export interface NichandleSmsNotification {
        abuse?: boolean;
        creationDate?: string;
        phoneNumber?: string;
        status?: OVH.nichandle.NotificationStatusEnum;
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
        creationDate?: string;
        description?: string;
        id?: number;
    }
    //nichandle.SubAccountConsumerKey
    // fullName: nichandle.SubAccountConsumerKey.SubAccountConsumerKey
    export interface SubAccountConsumerKey {
        consumerKey?: string;
    }
    //nichandle.Subscription
    // fullName: nichandle.Subscription.Subscription
    export interface Subscription {
        registered?: boolean;
        type?: string;
    }
    //nichandle.User
    // fullName: nichandle.User.User
    export interface User {
        creation?: string;
        description?: string;
        email?: string;
        group?: string;
        lastUpdate?: string;
        login?: string;
        passwordLastUpdate?: string;
        status?: OVH.nichandle.UserStatus;
    }
    //nichandle.UserStatus
    export type UserStatus = "OK" | "DISABLED" | "PASSWORD_CHANGE_REQUIRED"
    //nichandle.VipStatus
    // fullName: nichandle.VipStatus.VipStatus
    export interface VipStatus {
        cloud?: boolean;
        dedicated?: boolean;
        telecom?: boolean;
        web?: boolean;
    }
    //nichandle.VoucherStatus
    // fullName: nichandle.VoucherStatus.VoucherStatus
    export interface VoucherStatus {
        validity?: boolean;
    }
    export namespace accessRestriction {
        //nichandle.accessRestriction.IpRestrictionRuleEnum
        export type IpRestrictionRuleEnum = "accept" | "deny"
        //nichandle.accessRestriction.SOTPAccount
        // fullName: nichandle.accessRestriction.SOTPAccount.SOTPAccount
        export interface SOTPAccount {
            creationDate?: string;
            lastUsedDate?: string;
            remaining?: number;
            status?: OVH.nichandle.accessRestriction.SOTPStatusEnum;
        }
        //nichandle.accessRestriction.SOTPSecret
        // fullName: nichandle.accessRestriction.SOTPSecret.SOTPSecret
        export interface SOTPSecret {
            codes?: string[];
        }
        //nichandle.accessRestriction.SOTPStatusEnum
        export type SOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        //nichandle.accessRestriction.SOTPValidate
        // fullName: nichandle.accessRestriction.SOTPValidate.SOTPValidate
        export interface SOTPValidate {
            remainingCodes?: number;
        }
        //nichandle.accessRestriction.SmsAccount
        // fullName: nichandle.accessRestriction.SmsAccount.SmsAccount
        export interface SmsAccount {
            creationDate?: string;
            description?: string;
            id?: number;
            lastUsedDate?: string;
            phoneNumber?: string;
            status?: OVH.nichandle.accessRestriction.SmsStatusEnum;
        }
        //nichandle.accessRestriction.SmsCode
        // fullName: nichandle.accessRestriction.SmsCode.SmsCode
        export interface SmsCode {
            challenge?: string;
        }
        //nichandle.accessRestriction.SmsSecret
        // fullName: nichandle.accessRestriction.SmsSecret.SmsSecret
        export interface SmsSecret {
            id?: number;
            remainingTry?: number;
        }
        //nichandle.accessRestriction.SmsStatusEnum
        export type SmsStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        //nichandle.accessRestriction.TOTPAccount
        // fullName: nichandle.accessRestriction.TOTPAccount.TOTPAccount
        export interface TOTPAccount {
            creationDate?: string;
            description?: string;
            id?: number;
            lastUsedDate?: string;
            status?: OVH.nichandle.accessRestriction.TOTPStatusEnum;
        }
        //nichandle.accessRestriction.TOTPSecret
        // fullName: nichandle.accessRestriction.TOTPSecret.TOTPSecret
        export interface TOTPSecret {
            id?: number;
            qrcodeHelper?: string;
            secret?: string;
        }
        //nichandle.accessRestriction.TOTPStatusEnum
        export type TOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        //nichandle.accessRestriction.U2FAccount
        // fullName: nichandle.accessRestriction.U2FAccount.U2FAccount
        export interface U2FAccount {
            creationDate?: string;
            description?: string;
            id?: number;
            lastUsedDate?: string;
            status?: OVH.nichandle.accessRestriction.U2FStatusEnum;
        }
        //nichandle.accessRestriction.U2FRegisterChallenge
        // fullName: nichandle.accessRestriction.U2FRegisterChallenge.U2FRegisterChallenge
        export interface U2FRegisterChallenge {
            applicationId?: string;
            id?: number;
            request?: OVH.nichandle.accessRestriction.U2FRegistrationRequest;
        }
        //nichandle.accessRestriction.U2FRegistrationRequest
        // fullName: nichandle.accessRestriction.U2FRegistrationRequest.U2FRegistrationRequest
        export interface U2FRegistrationRequest {
            challenge?: string;
            version?: string;
        }
        //nichandle.accessRestriction.U2FSignChallenge
        // fullName: nichandle.accessRestriction.U2FSignChallenge.U2FSignChallenge
        export interface U2FSignChallenge {
            applicationId?: string;
            request?: OVH.nichandle.accessRestriction.U2FSignRequest;
        }
        //nichandle.accessRestriction.U2FSignRequest
        // fullName: nichandle.accessRestriction.U2FSignRequest.U2FSignRequest
        export interface U2FSignRequest {
            challenge?: string;
            keyHandle?: string;
            version?: string;
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
            contactTypes?: OVH.nichandle.changeContact.ContactTypeEnum[];
            dateDone?: string;
            dateRequest?: string;
            fromAccount?: string;
            id?: number;
            serviceDomain?: string;
            state?: OVH.nichandle.changeContact.TaskStateEnum;
            toAccount?: string;
        }
    }
    export namespace document {
        //nichandle.document.Document
        // fullName: nichandle.document.Document.Document
        export interface Document {
            creationDate?: string;
            expirationDate?: string;
            getUrl?: string;
            id?: string;
            name?: string;
            putUrl?: string;
            size?: number;
            tags?: OVH.complexType.SafeKeyValue<string>[];
            validationDate?: string;
        }
    }
    export namespace emailChange {
        //nichandle.emailChange.Task
        // fullName: nichandle.emailChange.Task.Task
        export interface Task {
            dateDone?: string;
            dateRequest?: string;
            id?: number;
            newEmail?: string;
            state?: OVH.nichandle.changeEmail.TaskStateEnum;
        }
    }
    //nichandle.emailNotification
    // fullName: nichandle.emailNotification.emailNotification
    export interface emailNotification {
        body?: string;
        date?: string;
        id?: number;
        subject?: string;
    }
    //nichandle.ipxe
    // fullName: nichandle.ipxe.ipxe
    export interface ipxe {
        name?: string;
        script?: string;
    }
    //nichandle.sshKey
    // fullName: nichandle.sshKey.sshKey
    export interface sshKey {
        default?: boolean;
        key?: string;
        keyName?: string;
    }
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
    }
}
export namespace payment {
    export namespace method {
        //payment.method.AvailablePaymentMethod
        // fullName: payment.method.AvailablePaymentMethod.AvailablePaymentMethod
        export interface AvailablePaymentMethod {
            icon?: OVH.payment.method.Icon;
            oneshot?: boolean;
            paymentType?: string;
            registerable?: boolean;
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
        renewByBillingContact?: boolean;
    }
    //telephony.DefaultIpRestriction
    // fullName: telephony.DefaultIpRestriction.DefaultIpRestriction
    export interface DefaultIpRestriction {
        id?: number;
        subnet?: string;
        type?: OVH.telephony.ProtocolEnum;
    }
    //telephony.LineDescriptionSettings
    // fullName: telephony.LineDescriptionSettings.LineDescriptionSettings
    export interface LineDescriptionSettings {
        displayOnBill?: boolean;
        displayOnIncomingCall?: boolean;
    }
    //telephony.MailDomain2Service
    // fullName: telephony.MailDomain2Service.MailDomain2Service
    export interface MailDomain2Service {
        domain?: string;
        id?: number;
    }
    //telephony.ProtocolEnum
    export type ProtocolEnum = "mgcp" | "sip"
    //telephony.Settings
    // fullName: telephony.Settings.Settings
    export interface Settings {
        billingPolicies?: OVH.telephony.BillingSettings;
        lineDescriptionPolicies?: OVH.telephony.LineDescriptionSettings;
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
        resellerFastModemShipping?: boolean;
        resellerModemBasicConfig?: boolean;
    }
}
// Apis harmony
// path /me
export interface Me {
    // GET /me
    $get(): Promise<nichandle.Nichandle>;
    // PUT /me
    $put(body?: {body: nichandle.Nichandle}): Promise<void>;
    accessRestriction:  {
        backupCode:  {
            // GET /me/accessRestriction/backupCode
            $get(): Promise<nichandle.accessRestriction.SOTPAccount>;
            // POST /me/accessRestriction/backupCode
            $post(): Promise<nichandle.accessRestriction.SOTPSecret>;
            // DELETE /me/accessRestriction/backupCode
            $delete(): Promise<void>;
            disable:  {
                // POST /me/accessRestriction/backupCode/disable
                $post(body?: {code: string}): Promise<void>;
            }
            enable:  {
                // POST /me/accessRestriction/backupCode/enable
                $post(body?: {code: string}): Promise<void>;
            }
            validate:  {
                // POST /me/accessRestriction/backupCode/validate
                $post(body?: {code: string}): Promise<nichandle.accessRestriction.SOTPValidate>;
            }
        }
        developerMode:  {
            // GET /me/accessRestriction/developerMode
            $get(): Promise<nichandle.DeveloperModeRestriction>;
            // PUT /me/accessRestriction/developerMode
            $put(body?: {body: nichandle.DeveloperModeRestriction}): Promise<void>;
        }
        ip:  {
            // GET /me/accessRestriction/ip
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/ip
            $post(body?: {ip: string, rule: nichandle.accessRestriction.IpRestrictionRuleEnum, warning: boolean}): Promise<void>;
            [keys: string]: {
                // GET /me/accessRestriction/ip/{id}
                $get(): Promise<nichandle.IpRestriction>;
                // PUT /me/accessRestriction/ip/{id}
                $put(body?: {body: nichandle.IpRestriction}): Promise<void>;
                // DELETE /me/accessRestriction/ip/{id}
                $delete(): Promise<void>;
            } | any
        }
        ipDefaultRule:  {
            // GET /me/accessRestriction/ipDefaultRule
            $get(): Promise<nichandle.IpRestrictionDefaultRule>;
            // PUT /me/accessRestriction/ipDefaultRule
            $put(body?: {body: nichandle.IpRestrictionDefaultRule}): Promise<void>;
        }
        sms:  {
            // GET /me/accessRestriction/sms
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/sms
            $post(body?: {phone: string}): Promise<nichandle.accessRestriction.SmsSecret>;
            [keys: string]: {
                // GET /me/accessRestriction/sms/{id}
                $get(): Promise<nichandle.accessRestriction.SmsAccount>;
                // PUT /me/accessRestriction/sms/{id}
                $put(body?: {body: nichandle.accessRestriction.SmsAccount}): Promise<void>;
                // DELETE /me/accessRestriction/sms/{id}
                $delete(): Promise<void>;
                disable:  {
                    // POST /me/accessRestriction/sms/{id}/disable
                    $post(body?: {code: string}): Promise<void>;
                }
                enable:  {
                    // POST /me/accessRestriction/sms/{id}/enable
                    $post(body?: {code: string}): Promise<void>;
                }
                sendCode:  {
                    // POST /me/accessRestriction/sms/{id}/sendCode
                    $post(): Promise<nichandle.accessRestriction.SmsCode>;
                }
                validate:  {
                    // POST /me/accessRestriction/sms/{id}/validate
                    $post(body?: {code: string}): Promise<void>;
                }
            } | any
        }
        totp:  {
            // GET /me/accessRestriction/totp
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/totp
            $post(): Promise<nichandle.accessRestriction.TOTPSecret>;
            [keys: string]: {
                // GET /me/accessRestriction/totp/{id}
                $get(): Promise<nichandle.accessRestriction.TOTPAccount>;
                // PUT /me/accessRestriction/totp/{id}
                $put(body?: {body: nichandle.accessRestriction.TOTPAccount}): Promise<void>;
                // DELETE /me/accessRestriction/totp/{id}
                $delete(): Promise<void>;
                disable:  {
                    // POST /me/accessRestriction/totp/{id}/disable
                    $post(body?: {code: string}): Promise<void>;
                }
                enable:  {
                    // POST /me/accessRestriction/totp/{id}/enable
                    $post(body?: {code: string}): Promise<void>;
                }
                validate:  {
                    // POST /me/accessRestriction/totp/{id}/validate
                    $post(body?: {code: string}): Promise<void>;
                }
            } | any
        }
        u2f:  {
            // GET /me/accessRestriction/u2f
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/u2f
            $post(): Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
            [keys: string]: {
                // GET /me/accessRestriction/u2f/{id}
                $get(): Promise<nichandle.accessRestriction.U2FAccount>;
                // PUT /me/accessRestriction/u2f/{id}
                $put(body?: {body: nichandle.accessRestriction.U2FAccount}): Promise<void>;
                // DELETE /me/accessRestriction/u2f/{id}
                $delete(): Promise<void>;
                challenge:  {
                    // POST /me/accessRestriction/u2f/{id}/challenge
                    $post(): Promise<nichandle.accessRestriction.U2FSignChallenge>;
                }
                disable:  {
                    // POST /me/accessRestriction/u2f/{id}/disable
                    $post(body?: {clientData: string, signatureData: string}): Promise<void>;
                }
                enable:  {
                    // POST /me/accessRestriction/u2f/{id}/enable
                    $post(body?: {clientData: string, signatureData: string}): Promise<void>;
                }
                validate:  {
                    // POST /me/accessRestriction/u2f/{id}/validate
                    $post(body?: {clientData: string, registrationData: string}): Promise<void>;
                }
            } | any
        }
    }
    agreements:  {
        // GET /me/agreements
        $get(param?: {contractId?: number, agreed?: agreements.AgreementStateEnum}): Promise<number[]>;
        [keys: string]: {
            // GET /me/agreements/{id}
            $get(): Promise<agreements.ContractAgreement>;
            accept:  {
                // POST /me/agreements/{id}/accept
                $post(): Promise<string>;
            }
            contract:  {
                // GET /me/agreements/{id}/contract
                $get(): Promise<agreements.Contract>;
            }
        } | any
    }
    api:  {
        application:  {
            // GET /me/api/application
            $get(): Promise<number[]>;
            [keys: string]: {
                // GET /me/api/application/{applicationId}
                $get(): Promise<api.Application>;
                // DELETE /me/api/application/{applicationId}
                $delete(): Promise<void>;
            } | any
        }
        credential:  {
            // GET /me/api/credential
            $get(param?: {applicationId?: number, status?: auth.CredentialStateEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /me/api/credential/{credentialId}
                $get(): Promise<api.Credential>;
                // DELETE /me/api/credential/{credentialId}
                $delete(): Promise<void>;
                application:  {
                    // GET /me/api/credential/{credentialId}/application
                    $get(): Promise<api.Application>;
                }
            } | any
        }
        logs:  {
            self:  {
                // GET /me/api/logs/self
                $get(): Promise<number[]>;
                [keys: string]: {
                    // GET /me/api/logs/self/{logId}
                    $get(): Promise<api.Log>;
                } | any
            }
            services:  {
                // GET /me/api/logs/services
                $get(): Promise<number[]>;
                [keys: string]: {
                    // GET /me/api/logs/services/{logId}
                    $get(): Promise<api.Log>;
                } | any
            }
        }
    }
    autorenew:  {
        // GET /me/autorenew
        $get(): Promise<nichandle.NicAutorenewInfos>;
        // PUT /me/autorenew
        $put(body?: {body: nichandle.NicAutorenewInfos}): Promise<void>;
        // POST /me/autorenew
        $post(body?: {renewDay: number}): Promise<void>;
    }
    availableAutomaticPaymentMeans:  {
        // GET /me/availableAutomaticPaymentMeans
        $get(): Promise<billing.AutomaticPaymentMean>;
    }
    bill:  {
        // GET /me/bill
        $get(param?: {orderId?: number, date_from?: string, date_to?: string}): Promise<string[]>;
        [keys: string]: {
            // GET /me/bill/{billId}
            $get(): Promise<billing.Bill>;
            debt:  {
                // GET /me/bill/{billId}/debt
                $get(): Promise<debt.Debt>;
                operation:  {
                    // GET /me/bill/{billId}/debt/operation
                    $get(param?: {depositOrderId?: number}): Promise<number[]>;
                    [keys: string]: {
                        // GET /me/bill/{billId}/debt/operation/{operationId}
                        $get(): Promise<debt.Operation>;
                        associatedObject:  {
                            // GET /me/bill/{billId}/debt/operation/{operationId}/associatedObject
                            $get(): Promise<debt.entry.AssociatedObject>;
                        }
                    } | any
                }
                pay:  {
                    // POST /me/bill/{billId}/debt/pay
                    $post(): Promise<billing.Order>;
                }
            }
            details:  {
                // GET /me/bill/{billId}/details
                $get(): Promise<string[]>;
                [keys: string]: {
                    // GET /me/bill/{billId}/details/{billDetailId}
                    $get(): Promise<billing.BillDetail>;
                } | any
            }
            payment:  {
                // GET /me/bill/{billId}/payment
                $get(): Promise<billing.Payment>;
            }
        } | any
    }
    billing:  {
        invoicesByPostalMail:  {
            // GET /me/billing/invoicesByPostalMail
            $get(): Promise<boolean>;
            // POST /me/billing/invoicesByPostalMail
            $post(body?: {enable: boolean}): Promise<void>;
        }
    }
    certificates:  {
        // GET /me/certificates
        $get(param?: {name?: string}): Promise<string[]>;
    }
    changeEmail:  {
        // POST /me/changeEmail
        $post(body?: {newEmail: string}): Promise<nichandle.emailChange.Task>;
    }
    changePassword:  {
        // POST /me/changePassword
        $post(): Promise<void>;
    }
    consent:  {
        // GET /me/consent
        $get(): Promise<me.consent.Campaign[]>;
        [keys: string]: {
            // GET /me/consent/{campaignName}
            $get(): Promise<me.consent.Campaign>;
            decision:  {
                // GET /me/consent/{campaignName}/decision
                $get(): Promise<me.consent.Consent>;
                // PUT /me/consent/{campaignName}/decision
                $put(body?: {value: boolean}): Promise<void>;
            }
        } | any
    }
    consumption:  {
        usage:  {
            current:  {
                // GET /me/consumption/usage/current
                $get(): Promise<me.consumption.Transaction[]>;
            }
            forecast:  {
                // GET /me/consumption/usage/forecast
                $get(): Promise<me.consumption.Transaction[]>;
            }
            history:  {
                // GET /me/consumption/usage/history
                $get(param?: {beginDate: string, endDate: string}): Promise<me.consumption.Transaction[]>;
            }
        }
    }
    contact:  {
        // GET /me/contact
        $get(): Promise<number[]>;
        // POST /me/contact
        $post(body?: {address: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email: string, fax?: string, firstName: string, gender?: nichandle.GenderEnum, language: nichandle.LanguageEnum, lastName: string, legalForm: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone: string, vat?: string}): Promise<contact.Contact>;
        [keys: string]: {
            // GET /me/contact/{contactId}
            $get(): Promise<contact.Contact>;
            // PUT /me/contact/{contactId}
            $put(body?: {address?: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, vat?: string}): Promise<contact.Contact>;
            fields:  {
                // GET /me/contact/{contactId}/fields
                $get(): Promise<contact.FieldInformation[]>;
            }
        } | any
    }
    credit:  {
        balance:  {
            // GET /me/credit/balance
            $get(param?: {type?: billing.credit.balance.Type}): Promise<string[]>;
            [keys: string]: {
                // GET /me/credit/balance/{balanceName}
                $get(): Promise<billing.credit.Balance>;
                movement:  {
                    // GET /me/credit/balance/{balanceName}/movement
                    $get(): Promise<number[]>;
                    [keys: string]: {
                        // GET /me/credit/balance/{balanceName}/movement/{movementId}
                        $get(): Promise<billing.credit.balance.Movement>;
                    } | any
                }
            } | any
        }
        code:  {
            // POST /me/credit/code
            $post(body?: {inputCode: string}): Promise<billing.credit.balance.Movement>;
        }
    }
    debtAccount:  {
        // GET /me/debtAccount
        $get(): Promise<debt.Balance>;
        debt:  {
            // GET /me/debtAccount/debt
            $get(): Promise<number[]>;
            [keys: string]: {
                // GET /me/debtAccount/debt/{debtId}
                $get(): Promise<debt.Debt>;
                operation:  {
                    // GET /me/debtAccount/debt/{debtId}/operation
                    $get(param?: {depositOrderId?: number}): Promise<number[]>;
                    [keys: string]: {
                        // GET /me/debtAccount/debt/{debtId}/operation/{operationId}
                        $get(): Promise<debt.Operation>;
                        associatedObject:  {
                            // GET /me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject
                            $get(): Promise<debt.entry.AssociatedObject>;
                        }
                    } | any
                }
                pay:  {
                    // POST /me/debtAccount/debt/{debtId}/pay
                    $post(): Promise<billing.Order>;
                }
            } | any
        }
        pay:  {
            // POST /me/debtAccount/pay
            $post(): Promise<billing.Order>;
        }
    }
    deposit:  {
        // GET /me/deposit
        $get(param?: {orderId?: number, date_from?: string, date_to?: string}): Promise<string[]>;
        [keys: string]: {
            // GET /me/deposit/{depositId}
            $get(): Promise<billing.Deposit>;
            details:  {
                // GET /me/deposit/{depositId}/details
                $get(): Promise<string[]>;
                [keys: string]: {
                    // GET /me/deposit/{depositId}/details/{depositDetailId}
                    $get(): Promise<billing.DepositDetail>;
                } | any
            }
            paidBills:  {
                // GET /me/deposit/{depositId}/paidBills
                $get(): Promise<string[]>;
                [keys: string]: {
                    // GET /me/deposit/{depositId}/paidBills/{billId}
                    $get(): Promise<billing.Bill>;
                    debt:  {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/debt
                        $get(): Promise<debt.Debt>;
                        operation:  {
                            // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation
                            $get(param?: {depositOrderId?: number}): Promise<number[]>;
                            [keys: string]: {
                                // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}
                                $get(): Promise<debt.Operation>;
                                associatedObject:  {
                                    // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject
                                    $get(): Promise<debt.entry.AssociatedObject>;
                                }
                            } | any
                        }
                        pay:  {
                            // POST /me/deposit/{depositId}/paidBills/{billId}/debt/pay
                            $post(): Promise<billing.Order>;
                        }
                    }
                    details:  {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/details
                        $get(): Promise<string[]>;
                        [keys: string]: {
                            // GET /me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}
                            $get(): Promise<billing.BillDetail>;
                        } | any
                    }
                    payment:  {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/payment
                        $get(): Promise<billing.Payment>;
                    }
                } | any
            }
            payment:  {
                // GET /me/deposit/{depositId}/payment
                $get(): Promise<billing.Payment>;
            }
        } | any
    }
    document:  {
        // GET /me/document
        $get(): Promise<string[]>;
        // POST /me/document
        $post(body?: {name: string, tags?: complexType.SafeKeyValue<string>[]}): Promise<nichandle.document.Document>;
        cors:  {
            // POST /me/document/cors
            $post(body?: {origin: string}): Promise<void>;
        }
        [keys: string]: {
            // GET /me/document/{id}
            $get(): Promise<nichandle.document.Document>;
            // PUT /me/document/{id}
            $put(body?: {body: nichandle.document.Document}): Promise<void>;
            // DELETE /me/document/{id}
            $delete(): Promise<void>;
        } | any
    }
    fax:  {
        customDomains:  {
            // GET /me/fax/customDomains
            $get(): Promise<number[]>;
            // POST /me/fax/customDomains
            $post(body?: {domain: string}): Promise<telephony.MailDomain2Service>;
            [keys: string]: {
                // GET /me/fax/customDomains/{id}
                $get(): Promise<telephony.MailDomain2Service>;
                // DELETE /me/fax/customDomains/{id}
                $delete(): Promise<void>;
            } | any
        }
    }
    fidelityAccount:  {
        // GET /me/fidelityAccount
        $get(): Promise<billing.FidelityAccount>;
        // PUT /me/fidelityAccount
        $put(body?: {body: billing.FidelityAccount}): Promise<void>;
        creditOrder:  {
            // POST /me/fidelityAccount/creditOrder
            $post(body?: {amount: number}): Promise<billing.Order>;
        }
        movements:  {
            // GET /me/fidelityAccount/movements
            $get(param?: {date_to?: string, date_from?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /me/fidelityAccount/movements/{movementId}
                $get(): Promise<billing.FidelityMovement>;
            } | any
        }
    }
    geolocation:  {
        // POST /me/geolocation
        $post(): Promise<geolocation.ContinentCountryLocation>;
    }
    identity:  {
        group:  {
            // GET /me/identity/group
            $get(): Promise<string[]>;
            // POST /me/identity/group
            $post(body?: {description?: string, name: string, role?: nichandle.RoleEnum}): Promise<nichandle.Authentication.Group>;
            [keys: string]: {
                // GET /me/identity/group/{group}
                $get(): Promise<nichandle.Authentication.Group>;
                // DELETE /me/identity/group/{group}
                $delete(): Promise<void>;
                // PUT /me/identity/group/{group}
                $put(body?: {description?: string, role?: nichandle.RoleEnum}): Promise<void>;
            } | any
        }
        user:  {
            // GET /me/identity/user
            $get(): Promise<string[]>;
            // POST /me/identity/user
            $post(body?: {description?: string, email: string, group?: string, login: string, password: string}): Promise<void>;
            [keys: string]: {
                // GET /me/identity/user/{user}
                $get(): Promise<nichandle.User>;
                // DELETE /me/identity/user/{user}
                $delete(): Promise<void>;
                // PUT /me/identity/user/{user}
                $put(body?: {description?: string, email?: string, group?: string}): Promise<void>;
                disable:  {
                    // POST /me/identity/user/{user}/disable
                    $post(): Promise<void>;
                }
                enable:  {
                    // POST /me/identity/user/{user}/enable
                    $post(): Promise<void>;
                }
            } | any
        }
    }
    insight:  {
        // GET /me/insight
        $get(): Promise<insight.Access>;
    }
    installationTemplate:  {
        // GET /me/installationTemplate
        $get(): Promise<string[]>;
        // POST /me/installationTemplate
        $post(body?: {baseTemplateName: string, defaultLanguage: dedicated.TemplateOsLanguageEnum, name: string}): Promise<void>;
        [keys: string]: {
            // GET /me/installationTemplate/{templateName}
            $get(): Promise<dedicated.installationTemplate.Templates>;
            // PUT /me/installationTemplate/{templateName}
            $put(body?: {body: dedicated.installationTemplate.Templates}): Promise<void>;
            // DELETE /me/installationTemplate/{templateName}
            $delete(): Promise<void>;
            checkIntegrity:  {
                // POST /me/installationTemplate/{templateName}/checkIntegrity
                $post(): Promise<void>;
            }
            partitionScheme:  {
                // GET /me/installationTemplate/{templateName}/partitionScheme
                $get(): Promise<string[]>;
                // POST /me/installationTemplate/{templateName}/partitionScheme
                $post(body?: {name: string, priority: number}): Promise<void>;
                [keys: string]: {
                    // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $put(body?: {body: dedicated.installationTemplate.templatePartitioningSchemes}): Promise<void>;
                    // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $delete(): Promise<void>;
                    hardwareRaid:  {
                        // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $get(): Promise<string[]>;
                        // POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $post(body?: {disks: string[], mode: dedicated.TemplateOsHardwareRaidEnum, name: string, step: number}): Promise<void>;
                        [keys: string]: {
                            // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                            // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $put(body?: {body: dedicated.installationTemplate.hardwareRaid}): Promise<void>;
                            // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $delete(): Promise<void>;
                        } | any
                    }
                    partition:  {
                        // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $get(): Promise<string[]>;
                        // POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $post(body?: {filesystem: dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: number, size: number, step: number, type: dedicated.TemplatePartitionTypeEnum, volumeName?: string}): Promise<void>;
                        [keys: string]: {
                            // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                            // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $put(body?: {body: dedicated.installationTemplate.templatePartitions}): Promise<void>;
                            // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $delete(): Promise<void>;
                        } | any
                    }
                } | any
            }
        } | any
    }
    ipOrganisation:  {
        // GET /me/ipOrganisation
        $get(): Promise<string[]>;
        // POST /me/ipOrganisation
        $post(body?: {abuse_mailbox: string, address: string, city: string, country: nichandle.CountryEnum, firstname: string, lastname: string, phone: string, registry: nichandle.IpRegistryEnum, state?: string, zip?: string}): Promise<void>;
        [keys: string]: {
            // GET /me/ipOrganisation/{organisationId}
            $get(): Promise<nichandle.Ipv4Org>;
            // PUT /me/ipOrganisation/{organisationId}
            $put(body?: {body: nichandle.Ipv4Org}): Promise<void>;
            // DELETE /me/ipOrganisation/{organisationId}
            $delete(): Promise<void>;
        } | any
    }
    ipxeScript:  {
        // GET /me/ipxeScript
        $get(): Promise<string[]>;
        // POST /me/ipxeScript
        $post(body?: {description: string, name: string, script: string}): Promise<nichandle.ipxe>;
        [keys: string]: {
            // GET /me/ipxeScript/{name}
            $get(): Promise<nichandle.ipxe>;
            // DELETE /me/ipxeScript/{name}
            $delete(): Promise<void>;
        } | any
    }
    mailingList:  {
        availableLists:  {
            // GET /me/mailingList/availableLists
            $get(): Promise<string[]>;
        }
        subscribe:  {
            // POST /me/mailingList/subscribe
            $post(body?: {email: string, mailingList: string}): Promise<void>;
        }
    }
    notification:  {
        email:  {
            history:  {
                // GET /me/notification/email/history
                $get(): Promise<number[]>;
                [keys: string]: {
                    // GET /me/notification/email/history/{id}
                    $get(): Promise<nichandle.emailNotification>;
                } | any
            }
        }
    }
    order:  {
        // GET /me/order
        $get(param?: {date_from?: string, date_to?: string}): Promise<number[]>;
        [keys: string]: {
            // GET /me/order/{orderId}
            $get(): Promise<billing.Order>;
            associatedObject:  {
                // GET /me/order/{orderId}/associatedObject
                $get(): Promise<billing.order.AssociatedObject>;
            }
            availableRegisteredPaymentMean:  {
                // GET /me/order/{orderId}/availableRegisteredPaymentMean
                $get(): Promise<billing.order.RegisteredPaymentMean[]>;
            }
            bill:  {
                // GET /me/order/{orderId}/bill
                $get(): Promise<billing.Bill>;
            }
            debt:  {
                // GET /me/order/{orderId}/debt
                $get(): Promise<debt.Debt>;
                operation:  {
                    // GET /me/order/{orderId}/debt/operation
                    $get(param?: {depositOrderId?: number}): Promise<number[]>;
                    [keys: string]: {
                        // GET /me/order/{orderId}/debt/operation/{operationId}
                        $get(): Promise<debt.Operation>;
                        associatedObject:  {
                            // GET /me/order/{orderId}/debt/operation/{operationId}/associatedObject
                            $get(): Promise<debt.entry.AssociatedObject>;
                        }
                    } | any
                }
                pay:  {
                    // POST /me/order/{orderId}/debt/pay
                    $post(): Promise<billing.Order>;
                }
            }
            details:  {
                // GET /me/order/{orderId}/details
                $get(): Promise<number[]>;
                [keys: string]: {
                    // GET /me/order/{orderId}/details/{orderDetailId}
                    $get(): Promise<billing.OrderDetail>;
                    extension:  {
                        // GET /me/order/{orderId}/details/{orderDetailId}/extension
                        $get(): Promise<billing.ItemDetail>;
                    }
                } | any
            }
            pay:  {
                // POST /me/order/{orderId}/pay
                $post(body?: {paymentMethod: billing.order.PayWithPaymentMethod}): Promise<void>;
            }
            payWithRegisteredPaymentMean:  {
                // POST /me/order/{orderId}/payWithRegisteredPaymentMean
                $post(body?: {paymentMean: billing.ReusablePaymentMeanEnum, paymentMeanId?: number}): Promise<void>;
            }
            payment:  {
                // GET /me/order/{orderId}/payment
                $get(): Promise<billing.Payment>;
            }
            paymentMeans:  {
                // GET /me/order/{orderId}/paymentMeans
                $get(): Promise<billing.order.PaymentMeans>;
            }
            paymentMethods:  {
                // GET /me/order/{orderId}/paymentMethods
                $get(): Promise<billing.order.PaymentMethods>;
            }
            refund:  {
                // GET /me/order/{orderId}/refund
                $get(): Promise<billing.Refund>;
            }
            retraction:  {
                // POST /me/order/{orderId}/retraction
                $post(body?: {comment?: string, reason: billing.order.RetractionReasonEnum}): Promise<void>;
            }
            status:  {
                // GET /me/order/{orderId}/status
                $get(): Promise<billing.order.OrderStatusEnum>;
            }
        } | any
    }
    ovhAccount:  {
        // GET /me/ovhAccount
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /me/ovhAccount/{ovhAccountId}
            $get(): Promise<billing.OvhAccount>;
            // PUT /me/ovhAccount/{ovhAccountId}
            $put(body?: {body: billing.OvhAccount}): Promise<void>;
            creditOrder:  {
                // POST /me/ovhAccount/{ovhAccountId}/creditOrder
                $post(body?: {amount: number}): Promise<billing.Order>;
            }
            movements:  {
                // GET /me/ovhAccount/{ovhAccountId}/movements
                $get(param?: {date_from?: string, date_to?: string}): Promise<number[]>;
                [keys: string]: {
                    // GET /me/ovhAccount/{ovhAccountId}/movements/{movementId}
                    $get(): Promise<billing.Movement>;
                } | any
            }
            retrieveMoney:  {
                // POST /me/ovhAccount/{ovhAccountId}/retrieveMoney
                $post(body?: {amount: number, bankAccountId: number}): Promise<billing.Order>;
            }
        } | any
    }
    passwordRecover:  {
        // POST /me/passwordRecover
        $post(body?: {ovhCompany: nichandle.OvhCompanyEnum, ovhId: string}): Promise<void>;
    }
    payment:  {
        availableMethods:  {
            // GET /me/payment/availableMethods
            $get(): Promise<me.payment.method.AvailablePaymentMethod[]>;
        }
        method:  {
            // GET /me/payment/method
            $get(param?: {status?: me.payment.method.PaymentMethod.Status, paymentType?: string}): Promise<number[]>;
            // POST /me/payment/method
            $post(body?: {callbackUrl: me.payment.method.CallbackUrl, default_?: boolean, description?: string, orderId?: number, paymentType: string, register?: boolean}): Promise<me.payment.method.Register.ValidationResult>;
            [keys: string]: {
                // GET /me/payment/method/{paymentMethodId}
                $get(): Promise<me.payment.method.PaymentMethod>;
                // PUT /me/payment/method/{paymentMethodId}
                $put(body?: {default_?: boolean, description?: string}): Promise<billing.PaymentMethod>;
                // DELETE /me/payment/method/{paymentMethodId}
                $delete(): Promise<me.payment.method.PaymentMethod>;
                challenge:  {
                    // POST /me/payment/method/{paymentMethodId}/challenge
                    $post(body?: {challenge: string}): Promise<me.payment.method.PaymentMethod>;
                }
                finalize:  {
                    // POST /me/payment/method/{paymentMethodId}/finalize
                    $post(body?: {expirationMonth?: number, expirationYear?: number, registrationId?: string}): Promise<me.payment.method.PaymentMethod>;
                }
            } | any
        }
        transaction:  {
            // GET /me/payment/transaction
            $get(param?: {paymentMethodId?: number, status?: me.payment.method.Transaction.Status}): Promise<number[]>;
            [keys: string]: {
                // GET /me/payment/transaction/{transactionId}
                $get(): Promise<me.payment.method.Transaction>;
            } | any
        }
    }
    paymentMean:  {
        bankAccount:  {
            // GET /me/paymentMean/bankAccount
            $get(param?: {state?: billing.BankAccountStateEnum}): Promise<number[]>;
            // POST /me/paymentMean/bankAccount
            $post(body?: {bic: string, description?: string, iban: string, ownerAddress: string, ownerName: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            [keys: string]: {
                // GET /me/paymentMean/bankAccount/{id}
                $get(): Promise<billing.BankAccount>;
                // PUT /me/paymentMean/bankAccount/{id}
                $put(body?: {body: billing.BankAccount}): Promise<void>;
                // DELETE /me/paymentMean/bankAccount/{id}
                $delete(): Promise<void>;
                challenge:  {
                    // POST /me/paymentMean/bankAccount/{id}/challenge
                    $post(body?: {challenge: string}): Promise<void>;
                }
                chooseAsDefaultPaymentMean:  {
                    // POST /me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            } | any
        }
        creditCard:  {
            // GET /me/paymentMean/creditCard
            $get(): Promise<number[]>;
            // POST /me/paymentMean/creditCard
            $post(body?: {description?: string, returnUrl?: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            [keys: string]: {
                // GET /me/paymentMean/creditCard/{id}
                $get(): Promise<billing.CreditCard>;
                // PUT /me/paymentMean/creditCard/{id}
                $put(body?: {body: billing.CreditCard}): Promise<void>;
                // DELETE /me/paymentMean/creditCard/{id}
                $delete(): Promise<void>;
                challenge:  {
                    // POST /me/paymentMean/creditCard/{id}/challenge
                    $post(body?: {challenge: string}): Promise<void>;
                }
                chooseAsDefaultPaymentMean:  {
                    // POST /me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            } | any
        }
        deferredPaymentAccount:  {
            // GET /me/paymentMean/deferredPaymentAccount
            $get(): Promise<number[]>;
            [keys: string]: {
                // GET /me/paymentMean/deferredPaymentAccount/{id}
                $get(): Promise<billing.DeferredPaymentAccount>;
                // PUT /me/paymentMean/deferredPaymentAccount/{id}
                $put(body?: {body: billing.DeferredPaymentAccount}): Promise<void>;
                chooseAsDefaultPaymentMean:  {
                    // POST /me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            } | any
        }
        paypal:  {
            // GET /me/paymentMean/paypal
            $get(): Promise<number[]>;
            // POST /me/paymentMean/paypal
            $post(body?: {description?: string, returnUrl?: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
            [keys: string]: {
                // GET /me/paymentMean/paypal/{id}
                $get(): Promise<billing.Paypal>;
                // PUT /me/paymentMean/paypal/{id}
                $put(body?: {body: billing.Paypal}): Promise<void>;
                // DELETE /me/paymentMean/paypal/{id}
                $delete(): Promise<void>;
                challenge:  {
                    // POST /me/paymentMean/paypal/{id}/challenge
                    $post(body?: {challenge: string}): Promise<void>;
                }
                chooseAsDefaultPaymentMean:  {
                    // POST /me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean
                    $post(): Promise<void>;
                }
            } | any
        }
    }
    refund:  {
        // GET /me/refund
        $get(param?: {orderId?: number, date_from?: string, date_to?: string}): Promise<string[]>;
        [keys: string]: {
            // GET /me/refund/{refundId}
            $get(): Promise<billing.Refund>;
            details:  {
                // GET /me/refund/{refundId}/details
                $get(): Promise<string[]>;
                [keys: string]: {
                    // GET /me/refund/{refundId}/details/{refundDetailId}
                    $get(): Promise<billing.RefundDetail>;
                } | any
            }
            payment:  {
                // GET /me/refund/{refundId}/payment
                $get(): Promise<billing.Payment>;
            }
        } | any
    }
    sla:  {
        // GET /me/sla
        $get(): Promise<number[]>;
        [keys: string]: {
            // GET /me/sla/{id}
            $get(): Promise<billing.SlaOperation>;
            apply:  {
                // POST /me/sla/{id}/apply
                $post(): Promise<void>;
            }
            canBeApplied:  {
                // GET /me/sla/{id}/canBeApplied
                $get(): Promise<boolean>;
            }
            services:  {
                // GET /me/sla/{id}/services
                $get(): Promise<billing.SlaOperationService[]>;
            }
            status:  {
                // GET /me/sla/{id}/status
                $get(): Promise<string>;
            }
        } | any
    }
    sshKey:  {
        // GET /me/sshKey
        $get(): Promise<string[]>;
        // POST /me/sshKey
        $post(body?: {key: string, keyName: string}): Promise<void>;
        [keys: string]: {
            // GET /me/sshKey/{keyName}
            $get(): Promise<nichandle.sshKey>;
            // PUT /me/sshKey/{keyName}
            $put(body?: {body: nichandle.sshKey}): Promise<void>;
            // DELETE /me/sshKey/{keyName}
            $delete(): Promise<void>;
        } | any
    }
    subAccount:  {
        // GET /me/subAccount
        $get(): Promise<number[]>;
        // POST /me/subAccount
        $post(body?: {description?: string}): Promise<number>;
        [keys: string]: {
            // GET /me/subAccount/{id}
            $get(): Promise<nichandle.SubAccount>;
            // PUT /me/subAccount/{id}
            $put(body?: {body: nichandle.SubAccount}): Promise<void>;
            createConsumerKey:  {
                // POST /me/subAccount/{id}/createConsumerKey
                $post(): Promise<nichandle.SubAccountConsumerKey>;
            }
        } | any
    }
    subscription:  {
        // GET /me/subscription
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /me/subscription/{subscriptionType}
            $get(): Promise<nichandle.Subscription>;
            // PUT /me/subscription/{subscriptionType}
            $put(body?: {body: nichandle.Subscription}): Promise<void>;
        } | any
    }
    supportLevel:  {
        // GET /me/supportLevel
        $get(): Promise<me.SupportLevel.Level>;
    }
    task:  {
        contactChange:  {
            // GET /me/task/contactChange
            $get(param?: {state?: nichandle.changeContact.TaskStateEnum, askingAccount?: string, toAccount?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /me/task/contactChange/{id}
                $get(): Promise<nichandle.contactChange.Task>;
                accept:  {
                    // POST /me/task/contactChange/{id}/accept
                    $post(body?: {token: string}): Promise<void>;
                }
                refuse:  {
                    // POST /me/task/contactChange/{id}/refuse
                    $post(body?: {token: string}): Promise<void>;
                }
                resendEmail:  {
                    // POST /me/task/contactChange/{id}/resendEmail
                    $post(): Promise<void>;
                }
            } | any
        }
        domain:  {
            // GET /me/task/domain
            $get(param?: {function_?: domain.NicOperationFunctionEnum, status?: domain.OperationStatusEnum, domain?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /me/task/domain/{id}
                $get(): Promise<nichandle.DomainTask>;
                accelerate:  {
                    // POST /me/task/domain/{id}/accelerate
                    $post(): Promise<void>;
                }
                argument:  {
                    // GET /me/task/domain/{id}/argument
                    $get(): Promise<string[]>;
                    [keys: string]: {
                        // GET /me/task/domain/{id}/argument/{key}
                        $get(): Promise<nichandle.DomainTaskArgument>;
                        // PUT /me/task/domain/{id}/argument/{key}
                        $put(body?: {body: nichandle.DomainTaskArgument}): Promise<void>;
                    } | any
                }
                cancel:  {
                    // POST /me/task/domain/{id}/cancel
                    $post(): Promise<void>;
                }
                progressbar:  {
                    // GET /me/task/domain/{id}/progressbar
                    $get(): Promise<nichandle.DomainTaskProgressBar>;
                }
                relaunch:  {
                    // POST /me/task/domain/{id}/relaunch
                    $post(): Promise<void>;
                }
            } | any
        }
        emailChange:  {
            // GET /me/task/emailChange
            $get(param?: {state?: nichandle.changeEmail.TaskStateEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /me/task/emailChange/{id}
                $get(): Promise<nichandle.emailChange.Task>;
                accept:  {
                    // POST /me/task/emailChange/{id}/accept
                    $post(body?: {token: string}): Promise<void>;
                }
                refuse:  {
                    // POST /me/task/emailChange/{id}/refuse
                    $post(body?: {token: string}): Promise<void>;
                }
            } | any
        }
    }
    telephony:  {
        defaultIpRestriction:  {
            // GET /me/telephony/defaultIpRestriction
            $get(): Promise<number[]>;
            // POST /me/telephony/defaultIpRestriction
            $post(body?: {subnet: string, type: telephony.ProtocolEnum}): Promise<telephony.DefaultIpRestriction>;
            [keys: string]: {
                // GET /me/telephony/defaultIpRestriction/{id}
                $get(): Promise<telephony.DefaultIpRestriction>;
                // DELETE /me/telephony/defaultIpRestriction/{id}
                $delete(): Promise<void>;
            } | any
        }
        settings:  {
            // POST /me/telephony/settings
            $post(body?: {settings: telephony.Settings}): Promise<void>;
            // GET /me/telephony/settings
            $get(): Promise<telephony.Settings>;
        }
    }
    vipStatus:  {
        // GET /me/vipStatus
        $get(): Promise<nichandle.VipStatus>;
    }
    voucher:  {
        checkValidity:  {
            // POST /me/voucher/checkValidity
            $post(body?: {voucher: string}): Promise<nichandle.VoucherStatus>;
        }
    }
    withdrawal:  {
        // GET /me/withdrawal
        $get(param?: {date_from?: string, orderId?: number, date_to?: string}): Promise<string[]>;
        [keys: string]: {
            // GET /me/withdrawal/{withdrawalId}
            $get(): Promise<billing.Withdrawal>;
            details:  {
                // GET /me/withdrawal/{withdrawalId}/details
                $get(): Promise<string[]>;
                [keys: string]: {
                    // GET /me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}
                    $get(): Promise<billing.WithdrawalDetail>;
                } | any
            }
            payment:  {
                // GET /me/withdrawal/{withdrawalId}/payment
                $get(): Promise<billing.Payment>;
            }
        } | any
    }
    xdsl:  {
        setting:  {
            // GET /me/xdsl/setting
            $get(): Promise<xdsl.Setting>;
            // POST /me/xdsl/setting
            $post(body?: {resellerFastModemShipping?: boolean, resellerModemBasicConfig?: boolean}): Promise<void>;
        }
    }
}
// Api
type PathsMeGET = '/me' |
  '/me/accessRestriction/backupCode' |
  '/me/accessRestriction/developerMode' |
  '/me/accessRestriction/ip' |
  '/me/accessRestriction/ip/{id}' |
  '/me/accessRestriction/ipDefaultRule' |
  '/me/accessRestriction/sms' |
  '/me/accessRestriction/sms/{id}' |
  '/me/accessRestriction/totp' |
  '/me/accessRestriction/totp/{id}' |
  '/me/accessRestriction/u2f' |
  '/me/accessRestriction/u2f/{id}' |
  '/me/agreements' |
  '/me/agreements/{id}' |
  '/me/agreements/{id}/contract' |
  '/me/api/application' |
  '/me/api/application/{applicationId}' |
  '/me/api/credential' |
  '/me/api/credential/{credentialId}' |
  '/me/api/credential/{credentialId}/application' |
  '/me/api/logs/self' |
  '/me/api/logs/self/{logId}' |
  '/me/api/logs/services' |
  '/me/api/logs/services/{logId}' |
  '/me/autorenew' |
  '/me/availableAutomaticPaymentMeans' |
  '/me/bill' |
  '/me/bill/{billId}' |
  '/me/bill/{billId}/debt' |
  '/me/bill/{billId}/debt/operation' |
  '/me/bill/{billId}/debt/operation/{operationId}' |
  '/me/bill/{billId}/debt/operation/{operationId}/associatedObject' |
  '/me/bill/{billId}/details' |
  '/me/bill/{billId}/details/{billDetailId}' |
  '/me/bill/{billId}/payment' |
  '/me/billing/invoicesByPostalMail' |
  '/me/certificates' |
  '/me/consent' |
  '/me/consent/{campaignName}' |
  '/me/consent/{campaignName}/decision' |
  '/me/consumption/usage/current' |
  '/me/consumption/usage/forecast' |
  '/me/consumption/usage/history' |
  '/me/contact' |
  '/me/contact/{contactId}' |
  '/me/contact/{contactId}/fields' |
  '/me/credit/balance' |
  '/me/credit/balance/{balanceName}' |
  '/me/credit/balance/{balanceName}/movement' |
  '/me/credit/balance/{balanceName}/movement/{movementId}' |
  '/me/debtAccount' |
  '/me/debtAccount/debt' |
  '/me/debtAccount/debt/{debtId}' |
  '/me/debtAccount/debt/{debtId}/operation' |
  '/me/debtAccount/debt/{debtId}/operation/{operationId}' |
  '/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject' |
  '/me/deposit' |
  '/me/deposit/{depositId}' |
  '/me/deposit/{depositId}/details' |
  '/me/deposit/{depositId}/details/{depositDetailId}' |
  '/me/deposit/{depositId}/paidBills' |
  '/me/deposit/{depositId}/paidBills/{billId}' |
  '/me/deposit/{depositId}/paidBills/{billId}/debt' |
  '/me/deposit/{depositId}/paidBills/{billId}/debt/operation' |
  '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}' |
  '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject' |
  '/me/deposit/{depositId}/paidBills/{billId}/details' |
  '/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}' |
  '/me/deposit/{depositId}/paidBills/{billId}/payment' |
  '/me/deposit/{depositId}/payment' |
  '/me/document' |
  '/me/document/{id}' |
  '/me/fax/customDomains' |
  '/me/fax/customDomains/{id}' |
  '/me/fidelityAccount' |
  '/me/fidelityAccount/movements' |
  '/me/fidelityAccount/movements/{movementId}' |
  '/me/identity/group' |
  '/me/identity/group/{group}' |
  '/me/identity/user' |
  '/me/identity/user/{user}' |
  '/me/insight' |
  '/me/installationTemplate' |
  '/me/installationTemplate/{templateName}' |
  '/me/installationTemplate/{templateName}/partitionScheme' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' |
  '/me/ipOrganisation' |
  '/me/ipOrganisation/{organisationId}' |
  '/me/ipxeScript' |
  '/me/ipxeScript/{name}' |
  '/me/mailingList/availableLists' |
  '/me/notification/email/history' |
  '/me/notification/email/history/{id}' |
  '/me/order' |
  '/me/order/{orderId}' |
  '/me/order/{orderId}/associatedObject' |
  '/me/order/{orderId}/availableRegisteredPaymentMean' |
  '/me/order/{orderId}/bill' |
  '/me/order/{orderId}/debt' |
  '/me/order/{orderId}/debt/operation' |
  '/me/order/{orderId}/debt/operation/{operationId}' |
  '/me/order/{orderId}/debt/operation/{operationId}/associatedObject' |
  '/me/order/{orderId}/details' |
  '/me/order/{orderId}/details/{orderDetailId}' |
  '/me/order/{orderId}/details/{orderDetailId}/extension' |
  '/me/order/{orderId}/payment' |
  '/me/order/{orderId}/paymentMeans' |
  '/me/order/{orderId}/paymentMethods' |
  '/me/order/{orderId}/refund' |
  '/me/order/{orderId}/status' |
  '/me/ovhAccount' |
  '/me/ovhAccount/{ovhAccountId}' |
  '/me/ovhAccount/{ovhAccountId}/movements' |
  '/me/ovhAccount/{ovhAccountId}/movements/{movementId}' |
  '/me/payment/availableMethods' |
  '/me/payment/method' |
  '/me/payment/method/{paymentMethodId}' |
  '/me/payment/transaction' |
  '/me/payment/transaction/{transactionId}' |
  '/me/paymentMean/bankAccount' |
  '/me/paymentMean/bankAccount/{id}' |
  '/me/paymentMean/creditCard' |
  '/me/paymentMean/creditCard/{id}' |
  '/me/paymentMean/deferredPaymentAccount' |
  '/me/paymentMean/deferredPaymentAccount/{id}' |
  '/me/paymentMean/paypal' |
  '/me/paymentMean/paypal/{id}' |
  '/me/refund' |
  '/me/refund/{refundId}' |
  '/me/refund/{refundId}/details' |
  '/me/refund/{refundId}/details/{refundDetailId}' |
  '/me/refund/{refundId}/payment' |
  '/me/sla' |
  '/me/sla/{id}' |
  '/me/sla/{id}/canBeApplied' |
  '/me/sla/{id}/services' |
  '/me/sla/{id}/status' |
  '/me/sshKey' |
  '/me/sshKey/{keyName}' |
  '/me/subAccount' |
  '/me/subAccount/{id}' |
  '/me/subscription' |
  '/me/subscription/{subscriptionType}' |
  '/me/supportLevel' |
  '/me/task/contactChange' |
  '/me/task/contactChange/{id}' |
  '/me/task/domain' |
  '/me/task/domain/{id}' |
  '/me/task/domain/{id}/argument' |
  '/me/task/domain/{id}/argument/{key}' |
  '/me/task/domain/{id}/progressbar' |
  '/me/task/emailChange' |
  '/me/task/emailChange/{id}' |
  '/me/telephony/defaultIpRestriction' |
  '/me/telephony/defaultIpRestriction/{id}' |
  '/me/telephony/settings' |
  '/me/vipStatus' |
  '/me/withdrawal' |
  '/me/withdrawal/{withdrawalId}' |
  '/me/withdrawal/{withdrawalId}/details' |
  '/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}' |
  '/me/withdrawal/{withdrawalId}/payment' |
  '/me/xdsl/setting';

type PathsMePUT = '/me' |
  '/me/accessRestriction/developerMode' |
  '/me/accessRestriction/ip/{id}' |
  '/me/accessRestriction/ipDefaultRule' |
  '/me/accessRestriction/sms/{id}' |
  '/me/accessRestriction/totp/{id}' |
  '/me/accessRestriction/u2f/{id}' |
  '/me/autorenew' |
  '/me/consent/{campaignName}/decision' |
  '/me/contact/{contactId}' |
  '/me/document/{id}' |
  '/me/fidelityAccount' |
  '/me/identity/group/{group}' |
  '/me/identity/user/{user}' |
  '/me/installationTemplate/{templateName}' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' |
  '/me/ipOrganisation/{organisationId}' |
  '/me/ovhAccount/{ovhAccountId}' |
  '/me/payment/method/{paymentMethodId}' |
  '/me/paymentMean/bankAccount/{id}' |
  '/me/paymentMean/creditCard/{id}' |
  '/me/paymentMean/deferredPaymentAccount/{id}' |
  '/me/paymentMean/paypal/{id}' |
  '/me/sshKey/{keyName}' |
  '/me/subAccount/{id}' |
  '/me/subscription/{subscriptionType}' |
  '/me/task/domain/{id}/argument/{key}';

type PathsMePOST = '/me/accessRestriction/backupCode' |
  '/me/accessRestriction/backupCode/disable' |
  '/me/accessRestriction/backupCode/enable' |
  '/me/accessRestriction/backupCode/validate' |
  '/me/accessRestriction/ip' |
  '/me/accessRestriction/sms' |
  '/me/accessRestriction/sms/{id}/disable' |
  '/me/accessRestriction/sms/{id}/enable' |
  '/me/accessRestriction/sms/{id}/sendCode' |
  '/me/accessRestriction/sms/{id}/validate' |
  '/me/accessRestriction/totp' |
  '/me/accessRestriction/totp/{id}/disable' |
  '/me/accessRestriction/totp/{id}/enable' |
  '/me/accessRestriction/totp/{id}/validate' |
  '/me/accessRestriction/u2f' |
  '/me/accessRestriction/u2f/{id}/challenge' |
  '/me/accessRestriction/u2f/{id}/disable' |
  '/me/accessRestriction/u2f/{id}/enable' |
  '/me/accessRestriction/u2f/{id}/validate' |
  '/me/agreements/{id}/accept' |
  '/me/autorenew' |
  '/me/bill/{billId}/debt/pay' |
  '/me/billing/invoicesByPostalMail' |
  '/me/changeEmail' |
  '/me/changePassword' |
  '/me/contact' |
  '/me/credit/code' |
  '/me/debtAccount/debt/{debtId}/pay' |
  '/me/debtAccount/pay' |
  '/me/deposit/{depositId}/paidBills/{billId}/debt/pay' |
  '/me/document' |
  '/me/document/cors' |
  '/me/fax/customDomains' |
  '/me/fidelityAccount/creditOrder' |
  '/me/geolocation' |
  '/me/identity/group' |
  '/me/identity/user' |
  '/me/identity/user/{user}/disable' |
  '/me/identity/user/{user}/enable' |
  '/me/installationTemplate' |
  '/me/installationTemplate/{templateName}/checkIntegrity' |
  '/me/installationTemplate/{templateName}/partitionScheme' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' |
  '/me/ipOrganisation' |
  '/me/ipxeScript' |
  '/me/mailingList/subscribe' |
  '/me/order/{orderId}/debt/pay' |
  '/me/order/{orderId}/pay' |
  '/me/order/{orderId}/payWithRegisteredPaymentMean' |
  '/me/order/{orderId}/retraction' |
  '/me/ovhAccount/{ovhAccountId}/creditOrder' |
  '/me/ovhAccount/{ovhAccountId}/retrieveMoney' |
  '/me/passwordRecover' |
  '/me/payment/method' |
  '/me/payment/method/{paymentMethodId}/challenge' |
  '/me/payment/method/{paymentMethodId}/finalize' |
  '/me/paymentMean/bankAccount' |
  '/me/paymentMean/bankAccount/{id}/challenge' |
  '/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean' |
  '/me/paymentMean/creditCard' |
  '/me/paymentMean/creditCard/{id}/challenge' |
  '/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean' |
  '/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean' |
  '/me/paymentMean/paypal' |
  '/me/paymentMean/paypal/{id}/challenge' |
  '/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean' |
  '/me/sla/{id}/apply' |
  '/me/sshKey' |
  '/me/subAccount' |
  '/me/subAccount/{id}/createConsumerKey' |
  '/me/task/contactChange/{id}/accept' |
  '/me/task/contactChange/{id}/refuse' |
  '/me/task/contactChange/{id}/resendEmail' |
  '/me/task/domain/{id}/accelerate' |
  '/me/task/domain/{id}/cancel' |
  '/me/task/domain/{id}/relaunch' |
  '/me/task/emailChange/{id}/accept' |
  '/me/task/emailChange/{id}/refuse' |
  '/me/telephony/defaultIpRestriction' |
  '/me/telephony/settings' |
  '/me/voucher/checkValidity' |
  '/me/xdsl/setting';

type PathsMeDELETE = '/me/accessRestriction/backupCode' |
  '/me/accessRestriction/ip/{id}' |
  '/me/accessRestriction/sms/{id}' |
  '/me/accessRestriction/totp/{id}' |
  '/me/accessRestriction/u2f/{id}' |
  '/me/api/application/{applicationId}' |
  '/me/api/credential/{credentialId}' |
  '/me/document/{id}' |
  '/me/fax/customDomains/{id}' |
  '/me/identity/group/{group}' |
  '/me/identity/user/{user}' |
  '/me/installationTemplate/{templateName}' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' |
  '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' |
  '/me/ipOrganisation/{organisationId}' |
  '/me/ipxeScript/{name}' |
  '/me/payment/method/{paymentMethodId}' |
  '/me/paymentMean/bankAccount/{id}' |
  '/me/paymentMean/creditCard/{id}' |
  '/me/paymentMean/paypal/{id}' |
  '/me/sshKey/{keyName}' |
  '/me/telephony/defaultIpRestriction/{id}';

export class ApiMe extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Details about your OVH identifier
   * Get this object properties
   */
  public get(path: '/me'): Promise<nichandle.Nichandle>;
  /**
   * SOTP Two-Factor Authentication
   * Get this object properties
   */
  public get(path: '/me/accessRestriction/backupCode'): Promise<nichandle.accessRestriction.SOTPAccount>;
  /**
   * Login restrictions on a development version of the Manager
   * Get this object properties
   */
  public get(path: '/me/accessRestriction/developerMode'): Promise<nichandle.DeveloperModeRestriction>;
  /**
   * List the nichandle.IpRestriction objects
   * List of IP restrictions
   */
  public get(path: '/me/accessRestriction/ip'): Promise<number[]>;
  /**
   * List of all IP Restrictions
   * Get this object properties
   */
  public get(path: '/me/accessRestriction/ip/{id}', params: {id: string}): Promise<nichandle.IpRestriction>;
  /**
   * IP Restriction default rule
   * Get this object properties
   */
  public get(path: '/me/accessRestriction/ipDefaultRule'): Promise<nichandle.IpRestrictionDefaultRule>;
  /**
   * List the nichandle.accessRestriction.SmsAccount objects
   * List of Sms accounts
   */
  public get(path: '/me/accessRestriction/sms'): Promise<number[]>;
  /**
   * Sms Two-Factor Authentication
   * Get this object properties
   */
  public get(path: '/me/accessRestriction/sms/{id}', params: {id: string}): Promise<nichandle.accessRestriction.SmsAccount>;
  /**
   * List the nichandle.accessRestriction.TOTPAccount objects
   * List of TOTP accounts
   */
  public get(path: '/me/accessRestriction/totp'): Promise<number[]>;
  /**
   * TOTP Two-Factor Authentication
   * Get this object properties
   */
  public get(path: '/me/accessRestriction/totp/{id}', params: {id: string}): Promise<nichandle.accessRestriction.TOTPAccount>;
  /**
   * List the nichandle.accessRestriction.U2FAccount objects
   * List of U2F accounts
   */
  public get(path: '/me/accessRestriction/u2f'): Promise<number[]>;
  /**
   * U2F Two-Factor Authentication
   * Get this object properties
   */
  public get(path: '/me/accessRestriction/u2f/{id}', params: {id: string}): Promise<nichandle.accessRestriction.U2FAccount>;
  /**
   * List the agreements.ContractAgreement objects
   * List of contracts signed between you and OVH
   */
  public get(path: '/me/agreements', params: {agreed?: OVH.agreements.AgreementStateEnum, contractId?: number}): Promise<number[]>;
  /**
   * Contract agreement
   * Get this object properties
   */
  public get(path: '/me/agreements/{id}', params: {id: string}): Promise<agreements.ContractAgreement>;
  /**
   * Contract of service
   * Get this object properties
   */
  public get(path: '/me/agreements/{id}/contract', params: {id: string}): Promise<agreements.Contract>;
  /**
   * List the api.Application objects
   * List of your Api Application
   */
  public get(path: '/me/api/application'): Promise<number[]>;
  /**
   * API Application
   * Get this object properties
   */
  public get(path: '/me/api/application/{applicationId}', params: {applicationId: string}): Promise<api.Application>;
  /**
   * List the api.Credential objects
   * List of your Api Credentials
   */
  public get(path: '/me/api/credential', params: {applicationId?: number, status?: OVH.auth.CredentialStateEnum}): Promise<number[]>;
  /**
   * API Credential
   * Get this object properties
   */
  public get(path: '/me/api/credential/{credentialId}', params: {credentialId: string}): Promise<api.Credential>;
  /**
   * API Application
   * Get this object properties
   */
  public get(path: '/me/api/credential/{credentialId}/application', params: {credentialId: string}): Promise<api.Application>;
  /**
   * List the api.Log objects
   * List of Api calls done with your account
   */
  public get(path: '/me/api/logs/self'): Promise<number[]>;
  /**
   * API Log
   * Get this object properties
   */
  public get(path: '/me/api/logs/self/{logId}', params: {logId: string}): Promise<api.Log>;
  /**
   * List the api.Log objects
   * List of Api calls done on services you have access to
   */
  public get(path: '/me/api/logs/services'): Promise<number[]>;
  /**
   * API Log
   * Get this object properties
   */
  public get(path: '/me/api/logs/services/{logId}', params: {logId: string}): Promise<api.Log>;
  /**
   * Auto renewal information
   * Get this object properties
   */
  public get(path: '/me/autorenew'): Promise<nichandle.NicAutorenewInfos>;
  /**
   * availableAutomaticPaymentMeans operations
   * List available payment methods in this Nic's country
   */
  public get(path: '/me/availableAutomaticPaymentMeans'): Promise<billing.AutomaticPaymentMean>;
  /**
   * List the billing.Bill objects
   * List of all the bills the logged account has
   */
  public get(path: '/me/bill', params: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
  /**
   * Details about a Bill
   * Get this object properties
   */
  public get(path: '/me/bill/{billId}', params: {billId: string}): Promise<billing.Bill>;
  /**
   * State of a debt
   * Get this object properties
   */
  public get(path: '/me/bill/{billId}/debt', params: {billId: string}): Promise<debt.Debt>;
  /**
   * List the debt.Operation objects
   * All operations related to these debts
   */
  public get(path: '/me/bill/{billId}/debt/operation', params: {billId: string, depositOrderId?: number}): Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  public get(path: '/me/bill/{billId}/debt/operation/{operationId}', params: {billId: string, operationId: string}): Promise<debt.Operation>;
  /**
   * associatedObject operations
   * Return main data about the object related to this debt operation
   */
  public get(path: '/me/bill/{billId}/debt/operation/{operationId}/associatedObject', params: {billId: string, operationId: string}): Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.BillDetail objects
   * Give access to all entries of the bill
   */
  public get(path: '/me/bill/{billId}/details', params: {billId: string}): Promise<string[]>;
  /**
   * Information about a Bill entry
   * Get this object properties
   */
  public get(path: '/me/bill/{billId}/details/{billDetailId}', params: {billId: string, billDetailId: string}): Promise<billing.BillDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  public get(path: '/me/bill/{billId}/payment', params: {billId: string}): Promise<billing.Payment>;
  /**
   * invoicesByPostalMail operations
   * Send invoices through postal mail
   */
  public get(path: '/me/billing/invoicesByPostalMail'): Promise<boolean>;
  /**
   * Get all certificates of the account
   * Get all certificates of the account
   */
  public get(path: '/me/certificates', params: {name?: string}): Promise<string[]>;
  /**
   * List all consent campaign available
   * List all consent campaign available
   */
  public get(path: '/me/consent'): Promise<me.consent.Campaign[]>;
  /**
   * Retrieve information about a consent campaign
   * Retrieve information about a consent campaign
   */
  public get(path: '/me/consent/{campaignName}', params: {campaignName: string}): Promise<me.consent.Campaign>;
  /**
   * Get decision value for a consent campaign
   * Get decision value for a consent campaign
   */
  public get(path: '/me/consent/{campaignName}/decision', params: {campaignName: string}): Promise<me.consent.Consent>;
  /**
   * Missing description
   * Get on-going consumptions for all services
   */
  public get(path: '/me/consumption/usage/current'): Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Get forecasted consumptions for all services
   */
  public get(path: '/me/consumption/usage/forecast'): Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Get list of transactions between two dates
   */
  public get(path: '/me/consumption/usage/history', params: {beginDate: string, endDate: string}): Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Retrieve all contact that you created
   */
  public get(path: '/me/contact'): Promise<number[]>;
  /**
   * Missing description
   * Retrieve information about a contact
   */
  public get(path: '/me/contact/{contactId}', params: {contactId: string}): Promise<contact.Contact>;
  /**
   * Missing description
   * Display mandatory/read-only informations of a contact
   */
  public get(path: '/me/contact/{contactId}/fields', params: {contactId: string}): Promise<contact.FieldInformation[]>;
  /**
   * Retrieve credit balance names
   * Retrieve credit balance names
   */
  public get(path: '/me/credit/balance', params: {type?: OVH.billing.credit.balance.Type}): Promise<string[]>;
  /**
   * Retrieve a credit balance
   * Retrieve a credit balance
   */
  public get(path: '/me/credit/balance/{balanceName}', params: {balanceName: string}): Promise<billing.credit.Balance>;
  /**
   * Retrieve movements for a specific balance
   * Retrieve movements for a specific balance
   */
  public get(path: '/me/credit/balance/{balanceName}/movement', params: {balanceName: string}): Promise<number[]>;
  /**
   * Retrieve a specific movement for a credit balance
   * Retrieve a specific movement for a credit balance
   */
  public get(path: '/me/credit/balance/{balanceName}/movement/{movementId}', params: {balanceName: string, movementId: string}): Promise<billing.credit.balance.Movement>;
  /**
   * Debt balance of the account
   * Get this object properties
   */
  public get(path: '/me/debtAccount'): Promise<debt.Balance>;
  /**
   * List the debt.Debt objects
   * All debts related to your account
   */
  public get(path: '/me/debtAccount/debt'): Promise<number[]>;
  /**
   * State of a debt
   * Get this object properties
   */
  public get(path: '/me/debtAccount/debt/{debtId}', params: {debtId: string}): Promise<debt.Debt>;
  /**
   * List the debt.Operation objects
   * All operations related to these debts
   */
  public get(path: '/me/debtAccount/debt/{debtId}/operation', params: {debtId: string, depositOrderId?: number}): Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  public get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}', params: {debtId: string, operationId: string}): Promise<debt.Operation>;
  /**
   * associatedObject operations
   * Return main data about the object related to this debt operation
   */
  public get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject', params: {debtId: string, operationId: string}): Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.Deposit objects
   * List of all the deposits made to your prepaid account or debt account
   */
  public get(path: '/me/deposit', params: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
  /**
   * Details about a deposit
   * Get this object properties
   */
  public get(path: '/me/deposit/{depositId}', params: {depositId: string}): Promise<billing.Deposit>;
  /**
   * List the billing.DepositDetail objects
   * Give access to all entries of this deposit
   */
  public get(path: '/me/deposit/{depositId}/details', params: {depositId: string}): Promise<string[]>;
  /**
   * Information about a Deposit entry
   * Get this object properties
   */
  public get(path: '/me/deposit/{depositId}/details/{depositDetailId}', params: {depositId: string, depositDetailId: string}): Promise<billing.DepositDetail>;
  /**
   * List the billing.Bill objects
   * Get invoices paid by this deposit
   */
  public get(path: '/me/deposit/{depositId}/paidBills', params: {depositId: string}): Promise<string[]>;
  /**
   * Details about a Bill
   * Get this object properties
   */
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}', params: {depositId: string, billId: string}): Promise<billing.Bill>;
  /**
   * State of a debt
   * Get this object properties
   */
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt', params: {depositId: string, billId: string}): Promise<debt.Debt>;
  /**
   * List the debt.Operation objects
   * All operations related to these debts
   */
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation', params: {depositId: string, billId: string, depositOrderId?: number}): Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}', params: {depositId: string, billId: string, operationId: string}): Promise<debt.Operation>;
  /**
   * associatedObject operations
   * Return main data about the object related to this debt operation
   */
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject', params: {depositId: string, billId: string, operationId: string}): Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.BillDetail objects
   * Give access to all entries of the bill
   */
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/details', params: {depositId: string, billId: string}): Promise<string[]>;
  /**
   * Information about a Bill entry
   * Get this object properties
   */
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}', params: {depositId: string, billId: string, billDetailId: string}): Promise<billing.BillDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/payment', params: {depositId: string, billId: string}): Promise<billing.Payment>;
  /**
   * Details about a payment
   * Get this object properties
   */
  public get(path: '/me/deposit/{depositId}/payment', params: {depositId: string}): Promise<billing.Payment>;
  /**
   * List the nichandle.document.Document objects
   * List of documents added in your account
   */
  public get(path: '/me/document'): Promise<string[]>;
  /**
   * List of documents added on your account
   * Get this object properties
   */
  public get(path: '/me/document/{id}', params: {id: string}): Promise<nichandle.document.Document>;
  /**
   * List the telephony.MailDomain2Service objects
   * Get the fax custom domains linked to the customer account
   */
  public get(path: '/me/fax/customDomains'): Promise<number[]>;
  /**
   * Custom domains of your fax services
   * Get this object properties
   */
  public get(path: '/me/fax/customDomains/{id}', params: {id: string}): Promise<telephony.MailDomain2Service>;
  /**
   * Balance of the fidelity account
   * Get this object properties
   */
  public get(path: '/me/fidelityAccount'): Promise<billing.FidelityAccount>;
  /**
   * List the billing.FidelityMovement objects
   * List of entries of the fidelity account
   */
  public get(path: '/me/fidelityAccount/movements', params: {date_from?: string, date_to?: string}): Promise<number[]>;
  /**
   * Details about a fidelity account
   * Get this object properties
   */
  public get(path: '/me/fidelityAccount/movements/{movementId}', params: {movementId: string}): Promise<billing.FidelityMovement>;
  /**
   * Groups linked to this account
   * Retrieve all groups of this account
   */
  public get(path: '/me/identity/group'): Promise<string[]>;
  /**
   * A group linked to this account
   * Get this object properties
   */
  public get(path: '/me/identity/group/{group}', params: {group: string}): Promise<nichandle.Authentication.Group>;
  /**
   * Users linked to this account
   * Retrieve all users of this account
   */
  public get(path: '/me/identity/user'): Promise<string[]>;
  /**
   * A user linked to this account
   * Get this object properties
   */
  public get(path: '/me/identity/user/{user}', params: {user: string}): Promise<nichandle.User>;
  /**
   * Retrieve your insight access token. This token give you access to all your products metrics (cloud instances, dedicated servers, load balancers, ...)
   * Get your insight access token
   */
  public get(path: '/me/insight'): Promise<insight.Access>;
  /**
   * List the dedicated.installationTemplate.Templates objects
   * Your customized operating system installation templates
   */
  public get(path: '/me/installationTemplate'): Promise<string[]>;
  /**
   * Available installation templates
   * Get this object properties
   */
  public get(path: '/me/installationTemplate/{templateName}', params: {templateName: string}): Promise<dedicated.installationTemplate.Templates>;
  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects
   * Partitioning schemes available on this template
   */
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme', params: {templateName: string}): Promise<string[]>;
  /**
   * Partitioning schemes available on this template
   * Get this object properties
   */
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', params: {templateName: string, schemeName: string}): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
  /**
   * List the dedicated.installationTemplate.hardwareRaid objects
   * Hardware RAIDs defined in this partitioning scheme
   */
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', params: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Get this object properties
   */
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', params: {templateName: string, schemeName: string, name: string}): Promise<dedicated.installationTemplate.hardwareRaid>;
  /**
   * List the dedicated.installationTemplate.templatePartitions objects
   * Partitions defined in this partitioning scheme
   */
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', params: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
   *  Partitions defined in this partitioning scheme
   * Get this object properties
   */
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', params: {templateName: string, schemeName: string, mountpoint: string}): Promise<dedicated.installationTemplate.templatePartitions>;
  /**
   * List the nichandle.Ipv4Org objects
   * List of organisations
   */
  public get(path: '/me/ipOrganisation'): Promise<string[]>;
  /**
   * Details about an IP block organisation
   * Get this object properties
   */
  public get(path: '/me/ipOrganisation/{organisationId}', params: {organisationId: string}): Promise<nichandle.Ipv4Org>;
  /**
   * List the nichandle.ipxe objects
   * List of all your IPXE scripts
   */
  public get(path: '/me/ipxeScript'): Promise<string[]>;
  /**
   * Customer IPXE scripts
   * Get this object properties
   */
  public get(path: '/me/ipxeScript/{name}', params: {name: string}): Promise<nichandle.ipxe>;
  /**
   * availableLists operations
   * List of mailing list you can subscribe
   */
  public get(path: '/me/mailingList/availableLists'): Promise<string[]>;
  /**
   * List the nichandle.emailNotification objects
   * List of all your email notifications
   */
  public get(path: '/me/notification/email/history'): Promise<number[]>;
  /**
   * Email notification
   * Get this object properties
   */
  public get(path: '/me/notification/email/history/{id}', params: {id: string}): Promise<nichandle.emailNotification>;
  /**
   * List the billing.Order objects
   * List of all the orders the logged account has
   */
  public get(path: '/me/order', params: {date_from?: string, date_to?: string}): Promise<number[]>;
  /**
   * Details about an Order
   * Get this object properties
   */
  public get(path: '/me/order/{orderId}', params: {orderId: string}): Promise<billing.Order>;
  /**
   * associatedObject operations
   * Return main data about the object the processing of the order generated
   */
  public get(path: '/me/order/{orderId}/associatedObject', params: {orderId: string}): Promise<billing.order.AssociatedObject>;
  /**
   * availableRegisteredPaymentMean operations
   * List of registered payment mean you can use to pay this order
   */
  public get(path: '/me/order/{orderId}/availableRegisteredPaymentMean', params: {orderId: string}): Promise<billing.order.RegisteredPaymentMean[]>;
  /**
   * Details about a Bill
   * Get this object properties
   */
  public get(path: '/me/order/{orderId}/bill', params: {orderId: string}): Promise<billing.Bill>;
  /**
   * State of a debt
   * Get this object properties
   */
  public get(path: '/me/order/{orderId}/debt', params: {orderId: string}): Promise<debt.Debt>;
  /**
   * List the debt.Operation objects
   * All operations related to these debts
   */
  public get(path: '/me/order/{orderId}/debt/operation', params: {orderId: string, depositOrderId?: number}): Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  public get(path: '/me/order/{orderId}/debt/operation/{operationId}', params: {orderId: string, operationId: string}): Promise<debt.Operation>;
  /**
   * associatedObject operations
   * Return main data about the object related to this debt operation
   */
  public get(path: '/me/order/{orderId}/debt/operation/{operationId}/associatedObject', params: {orderId: string, operationId: string}): Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.OrderDetail objects
   * Give access to all entries of the order
   */
  public get(path: '/me/order/{orderId}/details', params: {orderId: string}): Promise<number[]>;
  /**
   * Information about a Bill entry
   * Get this object properties
   */
  public get(path: '/me/order/{orderId}/details/{orderDetailId}', params: {orderId: string, orderDetailId: string}): Promise<billing.OrderDetail>;
  /**
   * Extensions of a detail
   * Get this object properties
   */
  public get(path: '/me/order/{orderId}/details/{orderDetailId}/extension', params: {orderId: string, orderDetailId: string}): Promise<billing.ItemDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  public get(path: '/me/order/{orderId}/payment', params: {orderId: string}): Promise<billing.Payment>;
  /**
   * paymentMeans operations
   * Return main data about the object the processing of the order generated
   */
  public get(path: '/me/order/{orderId}/paymentMeans', params: {orderId: string}): Promise<billing.order.PaymentMeans>;
  /**
   * paymentMethods operations
   * List of registered payment method you can use to pay this order
   */
  public get(path: '/me/order/{orderId}/paymentMethods', params: {orderId: string}): Promise<billing.order.PaymentMethods>;
  /**
   * Details about a Refund
   * Get this object properties
   */
  public get(path: '/me/order/{orderId}/refund', params: {orderId: string}): Promise<billing.Refund>;
  /**
   * status operations
   * Return status of order
   */
  public get(path: '/me/order/{orderId}/status', params: {orderId: string}): Promise<billing.order.OrderStatusEnum>;
  /**
   * List the billing.OvhAccount objects
   * List of OVH accounts the logged account has
   */
  public get(path: '/me/ovhAccount'): Promise<string[]>;
  /**
   * Details about an OVH account
   * Get this object properties
   */
  public get(path: '/me/ovhAccount/{ovhAccountId}', params: {ovhAccountId: string}): Promise<billing.OvhAccount>;
  /**
   * List the billing.Movement objects
   * Details about an entry of the OVH account
   */
  public get(path: '/me/ovhAccount/{ovhAccountId}/movements', params: {ovhAccountId: string, date_from?: string, date_to?: string}): Promise<number[]>;
  /**
   * Details about an OVH account
   * Get this object properties
   */
  public get(path: '/me/ovhAccount/{ovhAccountId}/movements/{movementId}', params: {ovhAccountId: string, movementId: string}): Promise<billing.Movement>;
  /**
   * Available payment methods
   * Retrieve available payment method
   */
  public get(path: '/me/payment/availableMethods'): Promise<me.payment.method.AvailablePaymentMethod[]>;
  /**
   * Manage payment method
   * Retrieve payment method ID list
   */
  public get(path: '/me/payment/method', params: {paymentType?: string, status?: OVH.me.payment.method.PaymentMethod.Status}): Promise<number[]>;
  /**
   * Manage payment method
   * Get one payment method
   */
  public get(path: '/me/payment/method/{paymentMethodId}', params: {paymentMethodId: string}): Promise<me.payment.method.PaymentMethod>;
  /**
   * Retrieve payment method transaction ID list
   * Retrieve associated payment method transaction ID list
   */
  public get(path: '/me/payment/transaction', params: {paymentMethodId?: number, status?: OVH.me.payment.method.Transaction.Status}): Promise<number[]>;
  /**
   * Manage payment method transaction
   * Get associated payment method transaction
   */
  public get(path: '/me/payment/transaction/{transactionId}', params: {transactionId: string}): Promise<me.payment.method.Transaction>;
  /**
   * List the billing.BankAccount objects
   * List of bank accounts
   */
  public get(path: '/me/paymentMean/bankAccount', params: {state?: OVH.billing.BankAccountStateEnum}): Promise<number[]>;
  /**
   * SEPA bank account info
   * Get this object properties
   */
  public get(path: '/me/paymentMean/bankAccount/{id}', params: {id: string}): Promise<billing.BankAccount>;
  /**
   * List the billing.CreditCard objects
   * List of credit cards
   */
  public get(path: '/me/paymentMean/creditCard'): Promise<number[]>;
  /**
   * Credit card informations
   * Get this object properties
   */
  public get(path: '/me/paymentMean/creditCard/{id}', params: {id: string}): Promise<billing.CreditCard>;
  /**
   * List the billing.DeferredPaymentAccount objects
   * List of authorized deferred payment account for this customer
   */
  public get(path: '/me/paymentMean/deferredPaymentAccount'): Promise<number[]>;
  /**
   * Deferred payment account info
   * Get this object properties
   */
  public get(path: '/me/paymentMean/deferredPaymentAccount/{id}', params: {id: string}): Promise<billing.DeferredPaymentAccount>;
  /**
   * List the billing.Paypal objects
   * List of Paypal accounts usable for payments on this account
   */
  public get(path: '/me/paymentMean/paypal'): Promise<number[]>;
  /**
   * Paypal account info
   * Get this object properties
   */
  public get(path: '/me/paymentMean/paypal/{id}', params: {id: string}): Promise<billing.Paypal>;
  /**
   * List the billing.Refund objects
   * List of all the refunds the logged account has
   */
  public get(path: '/me/refund', params: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
  /**
   * Details about a Refund
   * Get this object properties
   */
  public get(path: '/me/refund/{refundId}', params: {refundId: string}): Promise<billing.Refund>;
  /**
   * List the billing.RefundDetail objects
   * Give access to all entries of the refund
   */
  public get(path: '/me/refund/{refundId}/details', params: {refundId: string}): Promise<string[]>;
  /**
   * Information about a Bill entry
   * Get this object properties
   */
  public get(path: '/me/refund/{refundId}/details/{refundDetailId}', params: {refundId: string, refundDetailId: string}): Promise<billing.RefundDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  public get(path: '/me/refund/{refundId}/payment', params: {refundId: string}): Promise<billing.Payment>;
  /**
   * List the billing.SlaOperation objects
   * List active SLA
   */
  public get(path: '/me/sla'): Promise<number[]>;
  /**
   * SLA properties
   * Get this object properties
   */
  public get(path: '/me/sla/{id}', params: {id: string}): Promise<billing.SlaOperation>;
  /**
   * canBeApplied operations
   * Check whether this SLA can be applied on your services
   */
  public get(path: '/me/sla/{id}/canBeApplied', params: {id: string}): Promise<boolean>;
  /**
   * services operations
   * Get services impacted by this SLA
   */
  public get(path: '/me/sla/{id}/services', params: {id: string}): Promise<billing.SlaOperationService[]>;
  /**
   * status operations
   * Get the status request of this SLA
   */
  public get(path: '/me/sla/{id}/status', params: {id: string}): Promise<string>;
  /**
   * List the nichandle.sshKey objects
   * List of your public SSH keys
   */
  public get(path: '/me/sshKey'): Promise<string[]>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Get this object properties
   */
  public get(path: '/me/sshKey/{keyName}', params: {keyName: string}): Promise<nichandle.sshKey>;
  /**
   * List the nichandle.SubAccount objects
   * List of sub-accounts
   */
  public get(path: '/me/subAccount'): Promise<number[]>;
  /**
   * Sub Account
   * Get this object properties
   */
  public get(path: '/me/subAccount/{id}', params: {id: string}): Promise<nichandle.SubAccount>;
  /**
   * List the nichandle.Subscription objects
   * List of all OVH things you can subscribe to
   */
  public get(path: '/me/subscription'): Promise<string[]>;
  /**
   * List of all OVH things you can subscribe to
   * Get this object properties
   */
  public get(path: '/me/subscription/{subscriptionType}', params: {subscriptionType: string}): Promise<nichandle.Subscription>;
  /**
   * Fetch the support level of the account
   * Fetch the support level of the account
   */
  public get(path: '/me/supportLevel'): Promise<me.SupportLevel.Level>;
  /**
   * List the nichandle.contactChange.Task objects
   * List of service contact change tasks you are involved in
   */
  public get(path: '/me/task/contactChange', params: {askingAccount?: string, state?: OVH.nichandle.changeContact.TaskStateEnum, toAccount?: string}): Promise<number[]>;
  /**
   * Task running a contact change on a service
   * Get this object properties
   */
  public get(path: '/me/task/contactChange/{id}', params: {id: string}): Promise<nichandle.contactChange.Task>;
  /**
   * List the nichandle.DomainTask objects
   * List of domain task
   */
  public get(path: '/me/task/domain', params: {domain?: string, function_?: OVH.domain.NicOperationFunctionEnum, status?: OVH.domain.OperationStatusEnum}): Promise<number[]>;
  /**
   * Domain tasks
   * Get this object properties
   */
  public get(path: '/me/task/domain/{id}', params: {id: string}): Promise<nichandle.DomainTask>;
  /**
   * List the nichandle.DomainTaskArgument objects
   * List of arguments
   */
  public get(path: '/me/task/domain/{id}/argument', params: {id: string}): Promise<string[]>;
  /**
   * Domain operation argument
   * Get this object properties
   */
  public get(path: '/me/task/domain/{id}/argument/{key}', params: {id: string, key: string}): Promise<nichandle.DomainTaskArgument>;
  /**
   * Domain operation progress
   * Get this object properties
   */
  public get(path: '/me/task/domain/{id}/progressbar', params: {id: string}): Promise<nichandle.DomainTaskProgressBar>;
  /**
   * List the nichandle.emailChange.Task objects
   * List of email change tasks you are involved in
   */
  public get(path: '/me/task/emailChange', params: {state?: OVH.nichandle.changeEmail.TaskStateEnum}): Promise<number[]>;
  /**
   * Task running an email change on an account
   * Get this object properties
   */
  public get(path: '/me/task/emailChange/{id}', params: {id: string}): Promise<nichandle.emailChange.Task>;
  /**
   * List the telephony.DefaultIpRestriction objects
   * The default SIP IP restictions for your future VoIP lines
   */
  public get(path: '/me/telephony/defaultIpRestriction'): Promise<number[]>;
  /**
   * Default IP restriction of a VoIP line
   * Get this object properties
   */
  public get(path: '/me/telephony/defaultIpRestriction/{id}', params: {id: string}): Promise<telephony.DefaultIpRestriction>;
  /**
   * settings operations
   * Get the telephony settings linked to the customer account
   */
  public get(path: '/me/telephony/settings'): Promise<telephony.Settings>;
  /**
   * vipStatus operations
   * VIP Status of this account
   */
  public get(path: '/me/vipStatus'): Promise<nichandle.VipStatus>;
  /**
   * List the billing.Withdrawal objects
   * List of all the withdrawals made from your prepaid account
   */
  public get(path: '/me/withdrawal', params: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
  /**
   * Details about a withdrawal
   * Get this object properties
   */
  public get(path: '/me/withdrawal/{withdrawalId}', params: {withdrawalId: string}): Promise<billing.Withdrawal>;
  /**
   * List the billing.WithdrawalDetail objects
   * Give access to all entries of this withdrawal
   */
  public get(path: '/me/withdrawal/{withdrawalId}/details', params: {withdrawalId: string}): Promise<string[]>;
  /**
   * Information about a Withdrawal entry
   * Get this object properties
   */
  public get(path: '/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}', params: {withdrawalId: string, withdrawalDetailId: string}): Promise<billing.WithdrawalDetail>;
  /**
   * Details about a payment
   * Get this object properties
   */
  public get(path: '/me/withdrawal/{withdrawalId}/payment', params: {withdrawalId: string}): Promise<billing.Payment>;
  /**
   * setting operations
   * Get xdsl settings linked to the nichandle
   */
  public get(path: '/me/xdsl/setting'): Promise<xdsl.Setting>;
  public get(path: PathsMeGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about your OVH identifier
   * Alter this object properties
   */
  public put(path: '/me', params: {address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: OVH.nichandle.CountryEnum, currency?: OVH.nichandle.Currency, customerCode?: string, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: OVH.nichandle.LanguageEnum, legalform?: OVH.nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, nichandle?: string, organisation?: string, ovhCompany?: OVH.nichandle.OvhCompanyEnum, ovhSubsidiary?: OVH.nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: OVH.nichandle.CountryEnum, sex?: OVH.nichandle.GenderEnum, spareEmail?: string, state?: OVH.nichandle.StateEnum, vat?: string, zip?: string}): Promise<void>;
  /**
   * Login restrictions on a development version of the Manager
   * Alter this object properties
   */
  public put(path: '/me/accessRestriction/developerMode', params: {enabled?: boolean}): Promise<void>;
  /**
   * List of all IP Restrictions
   * Alter this object properties
   */
  public put(path: '/me/accessRestriction/ip/{id}', params: {id: string, ip?: string, rule?: OVH.nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}): Promise<void>;
  /**
   * IP Restriction default rule
   * Alter this object properties
   */
  public put(path: '/me/accessRestriction/ipDefaultRule', params: {rule?: OVH.nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}): Promise<void>;
  /**
   * Sms Two-Factor Authentication
   * Alter this object properties
   */
  public put(path: '/me/accessRestriction/sms/{id}', params: {id: string, creationDate?: string, description?: string, lastUsedDate?: string, phoneNumber?: string, status?: OVH.nichandle.accessRestriction.SmsStatusEnum}): Promise<void>;
  /**
   * TOTP Two-Factor Authentication
   * Alter this object properties
   */
  public put(path: '/me/accessRestriction/totp/{id}', params: {id: string, creationDate?: string, description?: string, lastUsedDate?: string, status?: OVH.nichandle.accessRestriction.TOTPStatusEnum}): Promise<void>;
  /**
   * U2F Two-Factor Authentication
   * Alter this object properties
   */
  public put(path: '/me/accessRestriction/u2f/{id}', params: {id: string, creationDate?: string, description?: string, lastUsedDate?: string, status?: OVH.nichandle.accessRestriction.U2FStatusEnum}): Promise<void>;
  /**
   * Auto renewal information
   * Alter this object properties
   */
  public put(path: '/me/autorenew', params: {active?: boolean, lastRenew?: string, renewDay?: number}): Promise<void>;
  /**
   * Get decision value for a consent campaign
   * Update decision of a consent campaign
   */
  public put(path: '/me/consent/{campaignName}/decision', params: {campaignName: string, value: boolean}): Promise<void>;
  /**
   * Missing description
   * Update an existing contact
   */
  public put(path: '/me/contact/{contactId}', params: {contactId: string, address?: OVH.contact.Address, birthCity?: string, birthCountry?: OVH.nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: OVH.nichandle.GenderEnum, language?: OVH.nichandle.LanguageEnum, lastName?: string, legalForm?: OVH.nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: OVH.nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, vat?: string}): Promise<contact.Contact>;
  /**
   * List of documents added on your account
   * Alter this object properties
   */
  public put(path: '/me/document/{id}', params: {id: string, creationDate?: string, expirationDate?: string, getUrl?: string, name?: string, putUrl?: string, size?: number, tags?: OVH.complexType.SafeKeyValue<string>[], validationDate?: string}): Promise<void>;
  /**
   * Balance of the fidelity account
   * Alter this object properties
   */
  public put(path: '/me/fidelityAccount', params: {alertThreshold?: number, balance?: number, canBeCredited?: boolean, lastUpdate?: string, openDate?: string}): Promise<void>;
  /**
   * A group linked to this account
   * Alter a group
   */
  public put(path: '/me/identity/group/{group}', params: {group: string, description?: string, role?: OVH.nichandle.RoleEnum}): Promise<void>;
  /**
   * A user linked to this account
   * Alter a user
   */
  public put(path: '/me/identity/user/{user}', params: {user: string, description?: string, email?: string, group?: string}): Promise<void>;
  /**
   * Available installation templates
   * Alter this object properties
   */
  public put(path: '/me/installationTemplate/{templateName}', params: {templateName: string, availableLanguages?: OVH.dedicated.TemplateOsLanguageEnum[], beta?: boolean, bitFormat?: OVH.dedicated.server.BitFormatEnum, category?: OVH.dedicated.TemplateOsUsageEnum, customization?: OVH.dedicated.TemplateOsProperties, defaultLanguage?: OVH.dedicated.TemplateOsLanguageEnum, deprecated?: boolean, description?: string, distribution?: string, family?: OVH.dedicated.TemplateOsTypeEnum, filesystems?: OVH.dedicated.TemplateOsFileSystemEnum[], hardRaidConfiguration?: boolean, lastModification?: string, lvmReady?: boolean, supportsDistributionKernel?: boolean, supportsGptLabel?: boolean, supportsRTM?: boolean, supportsSqlServer?: boolean, supportsUEFI?: OVH.dedicated.server.SupportsUEFIEnum}): Promise<void>;
  /**
   * Partitioning schemes available on this template
   * Alter this object properties
   */
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', params: {templateName: string, schemeName: string, name?: string, priority?: number}): Promise<void>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Alter this object properties
   */
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', params: {templateName: string, schemeName: string, name: string, disks?: string[], mode?: OVH.dedicated.TemplateOsHardwareRaidEnum, step?: number}): Promise<void>;
  /**
   *  Partitions defined in this partitioning scheme
   * Alter this object properties
   */
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', params: {templateName: string, schemeName: string, mountpoint: string, filesystem?: OVH.dedicated.TemplateOsFileSystemEnum, order?: number, raid?: OVH.dedicated.server.PartitionRaidEnum, size?: OVH.complexType.UnitAndValue<number>, type?: OVH.dedicated.TemplatePartitionTypeEnum, volumeName?: string}): Promise<void>;
  /**
   * Details about an IP block organisation
   * Alter this object properties
   */
  public put(path: '/me/ipOrganisation/{organisationId}', params: {organisationId: string, abuse_mailbox?: string, address?: string, city?: string, country?: OVH.nichandle.CountryEnum, firstname?: string, lastname?: string, phone?: string, registry?: OVH.nichandle.IpRegistryEnum, state?: string, zip?: string}): Promise<void>;
  /**
   * Details about an OVH account
   * Alter this object properties
   */
  public put(path: '/me/ovhAccount/{ovhAccountId}', params: {ovhAccountId: string, alertThreshold?: number, balance?: OVH.order.Price, canBeCredited?: boolean, isActive?: boolean, lastUpdate?: string, openDate?: string}): Promise<void>;
  /**
   * Manage payment method
   * Edit payment method
   */
  public put(path: '/me/payment/method/{paymentMethodId}', params: {paymentMethodId: string, default_?: boolean, description?: string}): Promise<billing.PaymentMethod>;
  /**
   * SEPA bank account info
   * Alter this object properties
   */
  public put(path: '/me/paymentMean/bankAccount/{id}', params: {id: string, bic?: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, iban?: string, mandateSignatureDate?: string, ownerAddress?: string, ownerName?: string, state?: OVH.billing.BankAccountStateEnum, uniqueReference?: string, validationDocumentLink?: string}): Promise<void>;
  /**
   * Credit card informations
   * Alter this object properties
   */
  public put(path: '/me/paymentMean/creditCard/{id}', params: {id: string, defaultPaymentMean?: boolean, description?: string, expirationDate?: string, number?: string, state?: OVH.billing.CreditCardStateEnum, threeDsValidated?: boolean, type?: string}): Promise<void>;
  /**
   * Deferred payment account info
   * Alter this object properties
   */
  public put(path: '/me/paymentMean/deferredPaymentAccount/{id}', params: {id: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, label?: string, state?: OVH.billing.DeferredPaymentAccountStatusEnum}): Promise<void>;
  /**
   * Paypal account info
   * Alter this object properties
   */
  public put(path: '/me/paymentMean/paypal/{id}', params: {id: string, agreementId?: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, email?: string, state?: OVH.billing.PaypalStateEnum}): Promise<void>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Alter this object properties
   */
  public put(path: '/me/sshKey/{keyName}', params: {keyName: string, default_?: boolean, key?: string}): Promise<void>;
  /**
   * Sub Account
   * Alter this object properties
   */
  public put(path: '/me/subAccount/{id}', params: {id: string, creationDate?: string, description?: string}): Promise<void>;
  /**
   * List of all OVH things you can subscribe to
   * Alter this object properties
   */
  public put(path: '/me/subscription/{subscriptionType}', params: {subscriptionType: string, registered?: boolean, type?: string}): Promise<void>;
  /**
   * Domain operation argument
   * Alter this object properties
   */
  public put(path: '/me/task/domain/{id}/argument/{key}', params: {id: string, key: string, acceptedFormats?: OVH.domain.DocumentFormatsEnum[], acceptedValues?: string[], description?: string, fields?: OVH.xander.ContactFieldEnum[], maximumSize?: number, minimumSize?: number, readOnly?: boolean, template?: string, type?: string, value?: string}): Promise<void>;
  public put(path: PathsMePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * SOTP Two-Factor Authentication
   * Add a SOTP access restriction
   */
  public post(path: '/me/accessRestriction/backupCode'): Promise<nichandle.accessRestriction.SOTPSecret>;
  /**
   * disable operations
   * Disable this SOTP account
   */
  public post(path: '/me/accessRestriction/backupCode/disable', params: {code: string}): Promise<void>;
  /**
   * enable operations
   * Enable this SOTP account
   */
  public post(path: '/me/accessRestriction/backupCode/enable', params: {code: string}): Promise<void>;
  /**
   * validate operations
   * Validate your SOTP account
   */
  public post(path: '/me/accessRestriction/backupCode/validate', params: {code: string}): Promise<nichandle.accessRestriction.SOTPValidate>;
  /**
   * List the nichandle.IpRestriction objects
   * Add an IP access restriction
   */
  public post(path: '/me/accessRestriction/ip', params: {ip: string, rule: OVH.nichandle.accessRestriction.IpRestrictionRuleEnum, warning: boolean}): Promise<void>;
  /**
   * List the nichandle.accessRestriction.SmsAccount objects
   * Add a SMS access restriction
   */
  public post(path: '/me/accessRestriction/sms', params: {phone: string}): Promise<nichandle.accessRestriction.SmsSecret>;
  /**
   * disable operations
   * Disable this SMS account
   */
  public post(path: '/me/accessRestriction/sms/{id}/disable', params: {id: string, code: string}): Promise<void>;
  /**
   * enable operations
   * Enable this SMS account
   */
  public post(path: '/me/accessRestriction/sms/{id}/enable', params: {id: string, code: string}): Promise<void>;
  /**
   * sendCode operations
   * Send a SMS to this account
   */
  public post(path: '/me/accessRestriction/sms/{id}/sendCode', params: {id: string}): Promise<nichandle.accessRestriction.SmsCode>;
  /**
   * validate operations
   * Validate your SMS account
   */
  public post(path: '/me/accessRestriction/sms/{id}/validate', params: {id: string, code: string}): Promise<void>;
  /**
   * List the nichandle.accessRestriction.TOTPAccount objects
   * Add a TOTP access restriction
   */
  public post(path: '/me/accessRestriction/totp'): Promise<nichandle.accessRestriction.TOTPSecret>;
  /**
   * disable operations
   * Disable this TOTP account
   */
  public post(path: '/me/accessRestriction/totp/{id}/disable', params: {id: string, code: string}): Promise<void>;
  /**
   * enable operations
   * Enable this TOTP account
   */
  public post(path: '/me/accessRestriction/totp/{id}/enable', params: {id: string, code: string}): Promise<void>;
  /**
   * validate operations
   * Validate your TOTP account
   */
  public post(path: '/me/accessRestriction/totp/{id}/validate', params: {id: string, code: string}): Promise<void>;
  /**
   * List the nichandle.accessRestriction.U2FAccount objects
   * Add a U2F access restriction
   */
  public post(path: '/me/accessRestriction/u2f'): Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
  /**
   * challenge operations
   * Get an U2F Challenge
   */
  public post(path: '/me/accessRestriction/u2f/{id}/challenge', params: {id: string}): Promise<nichandle.accessRestriction.U2FSignChallenge>;
  /**
   * disable operations
   * Disable this U2F account
   */
  public post(path: '/me/accessRestriction/u2f/{id}/disable', params: {id: string, clientData: string, signatureData: string}): Promise<void>;
  /**
   * enable operations
   * Enable this U2F account
   */
  public post(path: '/me/accessRestriction/u2f/{id}/enable', params: {id: string, clientData: string, signatureData: string}): Promise<void>;
  /**
   * validate operations
   * Validate your U2F account
   */
  public post(path: '/me/accessRestriction/u2f/{id}/validate', params: {id: string, clientData: string, registrationData: string}): Promise<void>;
  /**
   * accept operations
   * Accept this contract
   */
  public post(path: '/me/agreements/{id}/accept', params: {id: string}): Promise<string>;
  /**
   * Auto renewal information
   * Activate auto renew for this nic
   */
  public post(path: '/me/autorenew', params: {renewDay: number}): Promise<void>;
  /**
   * pay operations
   * Create an order in order to pay this order's debt
   */
  public post(path: '/me/bill/{billId}/debt/pay', params: {billId: string}): Promise<billing.Order>;
  /**
   * invoicesByPostalMail operations
   * Enable or disable invoices by postal mail
   */
  public post(path: '/me/billing/invoicesByPostalMail', params: {enable: boolean}): Promise<void>;
  /**
   * changeEmail operations
   * Initiate an email change procedure
   */
  public post(path: '/me/changeEmail', params: {newEmail: string}): Promise<nichandle.emailChange.Task>;
  /**
   * changePassword operations
   * Initiate a password change procedure
   */
  public post(path: '/me/changePassword'): Promise<void>;
  /**
   * Missing description
   * Create a new contact
   */
  public post(path: '/me/contact', params: {address: OVH.contact.Address, birthCity?: string, birthCountry?: OVH.nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email: string, fax?: string, firstName: string, gender?: OVH.nichandle.GenderEnum, language: OVH.nichandle.LanguageEnum, lastName: string, legalForm: OVH.nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: OVH.nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone: string, vat?: string}): Promise<contact.Contact>;
  /**
   * Validate a code to generate associated credit
   * Validate a code to generate associated credit movement
   */
  public post(path: '/me/credit/code', params: {inputCode: string}): Promise<billing.credit.balance.Movement>;
  /**
   * pay operations
   * Create an order in order to pay this order's debt
   */
  public post(path: '/me/debtAccount/debt/{debtId}/pay', params: {debtId: string}): Promise<billing.Order>;
  /**
   * pay operations
   * Create an order in order to pay all your due debts
   */
  public post(path: '/me/debtAccount/pay'): Promise<billing.Order>;
  /**
   * pay operations
   * Create an order in order to pay this order's debt
   */
  public post(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/pay', params: {depositId: string, billId: string}): Promise<billing.Order>;
  /**
   * List the nichandle.document.Document objects
   * Create new document
   */
  public post(path: '/me/document', params: {name: string, tags?: OVH.complexType.SafeKeyValue<string>[]}): Promise<nichandle.document.Document>;
  /**
   * Add CORS support on your container
   * Add CORS support on your container
   */
  public post(path: '/me/document/cors', params: {origin: string}): Promise<void>;
  /**
   * List the telephony.MailDomain2Service objects
   * Create a custom domain for your fax services
   */
  public post(path: '/me/fax/customDomains', params: {domain: string}): Promise<telephony.MailDomain2Service>;
  /**
   * creditOrder operations
   * Generate an order that can be paid in order to credit the fidelity account
   */
  public post(path: '/me/fidelityAccount/creditOrder', params: {amount: number}): Promise<billing.Order>;
  /**
   * Route for getting visitor's country and continent
   * Fetch visitor country & region
   */
  public post(path: '/me/geolocation'): Promise<geolocation.ContinentCountryLocation>;
  /**
   * Groups linked to this account
   * Create a new group
   */
  public post(path: '/me/identity/group', params: {description?: string, name: string, role?: OVH.nichandle.RoleEnum}): Promise<nichandle.Authentication.Group>;
  /**
   * Users linked to this account
   * Create a new user
   */
  public post(path: '/me/identity/user', params: {description?: string, email: string, group?: string, login: string, password: string}): Promise<void>;
  /**
   * A user linked to this account
   * Disable this user
   */
  public post(path: '/me/identity/user/{user}/disable', params: {user: string}): Promise<void>;
  /**
   * A user linked to this account
   * Enable this user
   */
  public post(path: '/me/identity/user/{user}/enable', params: {user: string}): Promise<void>;
  /**
   * List the dedicated.installationTemplate.Templates objects
   * Create a template
   */
  public post(path: '/me/installationTemplate', params: {baseTemplateName: string, defaultLanguage: OVH.dedicated.TemplateOsLanguageEnum, name: string}): Promise<void>;
  /**
   * checkIntegrity operations
   * Check the integrity of this template
   */
  public post(path: '/me/installationTemplate/{templateName}/checkIntegrity', params: {templateName: string}): Promise<void>;
  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects
   * Add a scheme of partition
   */
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme', params: {templateName: string, name: string, priority: number}): Promise<void>;
  /**
   * List the dedicated.installationTemplate.hardwareRaid objects
   * Add an hardware RAID in this partitioning scheme
   */
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', params: {templateName: string, schemeName: string, disks: string[], mode: OVH.dedicated.TemplateOsHardwareRaidEnum, name: string, step: number}): Promise<void>;
  /**
   * List the dedicated.installationTemplate.templatePartitions objects
   * Add a partition in this partitioning scheme
   */
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', params: {templateName: string, schemeName: string, filesystem: OVH.dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: number, size: number, step: number, type: OVH.dedicated.TemplatePartitionTypeEnum, volumeName?: string}): Promise<void>;
  /**
   * List the nichandle.Ipv4Org objects
   * Add an organisation
   */
  public post(path: '/me/ipOrganisation', params: {abuse_mailbox: string, address: string, city: string, country: OVH.nichandle.CountryEnum, firstname: string, lastname: string, phone: string, registry: OVH.nichandle.IpRegistryEnum, state?: string, zip?: string}): Promise<void>;
  /**
   * List the nichandle.ipxe objects
   * Add an IPXE script
   */
  public post(path: '/me/ipxeScript', params: {description: string, name: string, script: string}): Promise<nichandle.ipxe>;
  /**
   * subscribe operations
   * Subscribe an email to a restricted mailing list
   */
  public post(path: '/me/mailingList/subscribe', params: {email: string, mailingList: string}): Promise<void>;
  /**
   * pay operations
   * Create an order in order to pay this order's debt
   */
  public post(path: '/me/order/{orderId}/debt/pay', params: {orderId: string}): Promise<billing.Order>;
  /**
   * pay operations
   * Pay with a payment method reference
   */
  public post(path: '/me/order/{orderId}/pay', params: {orderId: string, paymentMethod: OVH.billing.order.PayWithPaymentMethod}): Promise<void>;
  /**
   * payWithRegisteredPaymentMean operations
   * Pay with an already registered payment mean
   */
  public post(path: '/me/order/{orderId}/payWithRegisteredPaymentMean', params: {orderId: string, paymentMean: OVH.billing.ReusablePaymentMeanEnum, paymentMeanId?: number}): Promise<void>;
  /**
   * retraction operations
   * Request retraction of order
   */
  public post(path: '/me/order/{orderId}/retraction', params: {orderId: string, comment?: string, reason: OVH.billing.order.RetractionReasonEnum}): Promise<void>;
  /**
   * creditOrder operations
   * Generate an order that can be paid in order to credit the OVH account
   */
  public post(path: '/me/ovhAccount/{ovhAccountId}/creditOrder', params: {ovhAccountId: string, amount: number}): Promise<billing.Order>;
  /**
   * retrieveMoney operations
   * Transfer money from ovhAccount to your bank account
   */
  public post(path: '/me/ovhAccount/{ovhAccountId}/retrieveMoney', params: {ovhAccountId: string, amount: number, bankAccountId: number}): Promise<billing.Order>;
  /**
   * Request a password recover
   * Request a password recover
   */
  public post(path: '/me/passwordRecover', params: {ovhCompany: OVH.nichandle.OvhCompanyEnum, ovhId: string}): Promise<void>;
  /**
   * Manage payment method
   * Pay an order and register a new payment method if necessary
   */
  public post(path: '/me/payment/method', params: {callbackUrl: OVH.me.payment.method.CallbackUrl, default_?: boolean, description?: string, orderId?: number, paymentType: string, register?: boolean}): Promise<me.payment.method.Register.ValidationResult>;
  /**
   * Challenge your payment method
   * Challenge one payment method
   */
  public post(path: '/me/payment/method/{paymentMethodId}/challenge', params: {paymentMethodId: string, challenge: string}): Promise<me.payment.method.PaymentMethod>;
  /**
   * Finalize one payment method registration
   * Finalize one payment method registration
   */
  public post(path: '/me/payment/method/{paymentMethodId}/finalize', params: {paymentMethodId: string, expirationMonth?: number, expirationYear?: number, registrationId?: string}): Promise<me.payment.method.PaymentMethod>;
  /**
   * List the billing.BankAccount objects
   * Enable payment through a new account
   */
  public post(path: '/me/paymentMean/bankAccount', params: {bic: string, description?: string, iban: string, ownerAddress: string, ownerName: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
  /**
   * challenge operations
   * Challenge your bank account
   */
  public post(path: '/me/paymentMean/bankAccount/{id}/challenge', params: {id: string, challenge: string}): Promise<void>;
  /**
   * chooseAsDefaultPaymentMean operations
   * Choose this bank account as your default payment mean. Will cancel the previous choice.
   */
  public post(path: '/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean', params: {id: string}): Promise<void>;
  /**
   * List the billing.CreditCard objects
   * Add a new credit card
   */
  public post(path: '/me/paymentMean/creditCard', params: {description?: string, returnUrl?: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
  /**
   * challenge operations
   * Challenge your bank account
   */
  public post(path: '/me/paymentMean/creditCard/{id}/challenge', params: {id: string, challenge: string}): Promise<void>;
  /**
   * chooseAsDefaultPaymentMean operations
   * Choose this credit card as your default payment mean. Will cancel the previous choice.
   */
  public post(path: '/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean', params: {id: string}): Promise<void>;
  /**
   * chooseAsDefaultPaymentMean operations
   * Allow you to use deferred payment. Will cancel the previous choice.
   */
  public post(path: '/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean', params: {id: string}): Promise<void>;
  /**
   * List the billing.Paypal objects
   * Enable payment through a new PayPal account
   */
  public post(path: '/me/paymentMean/paypal', params: {description?: string, returnUrl?: string, setDefault?: boolean}): Promise<billing.PaymentMeanValidation>;
  /**
   * challenge operations
   * Challenge your bank account
   */
  public post(path: '/me/paymentMean/paypal/{id}/challenge', params: {id: string, challenge: string}): Promise<void>;
  /**
   * chooseAsDefaultPaymentMean operations
   * Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.
   */
  public post(path: '/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean', params: {id: string}): Promise<void>;
  /**
   * apply operations
   * Ask for SLA application
   */
  public post(path: '/me/sla/{id}/apply', params: {id: string}): Promise<void>;
  /**
   * List the nichandle.sshKey objects
   * Add a new public SSH key
   */
  public post(path: '/me/sshKey', params: {key: string, keyName: string}): Promise<void>;
  /**
   * List the nichandle.SubAccount objects
   * Create a new sub-account
   */
  public post(path: '/me/subAccount', params: {description?: string}): Promise<number>;
  /**
   * createConsumerKey operations
   * Create a consumer key for the current application
   */
  public post(path: '/me/subAccount/{id}/createConsumerKey', params: {id: string}): Promise<nichandle.SubAccountConsumerKey>;
  /**
   * accept operations
   * Accept this change request
   */
  public post(path: '/me/task/contactChange/{id}/accept', params: {id: string, token: string}): Promise<void>;
  /**
   * refuse operations
   * Refuse this change request
   */
  public post(path: '/me/task/contactChange/{id}/refuse', params: {id: string, token: string}): Promise<void>;
  /**
   * resendEmail operations
   * This call will send you a new email, containing a new token
   */
  public post(path: '/me/task/contactChange/{id}/resendEmail', params: {id: string}): Promise<void>;
  /**
   * accelerate operations
   * Accelerate the task
   */
  public post(path: '/me/task/domain/{id}/accelerate', params: {id: string}): Promise<void>;
  /**
   * cancel operations
   * Cancel the task
   */
  public post(path: '/me/task/domain/{id}/cancel', params: {id: string}): Promise<void>;
  /**
   * relaunch operations
   * Relaunch the task
   */
  public post(path: '/me/task/domain/{id}/relaunch', params: {id: string}): Promise<void>;
  /**
   * accept operations
   * Accept this change request
   */
  public post(path: '/me/task/emailChange/{id}/accept', params: {id: string, token: string}): Promise<void>;
  /**
   * refuse operations
   * Refuse this change request
   */
  public post(path: '/me/task/emailChange/{id}/refuse', params: {id: string, token: string}): Promise<void>;
  /**
   * List the telephony.DefaultIpRestriction objects
   * Create a default IP restriction for your future VoIP lines
   */
  public post(path: '/me/telephony/defaultIpRestriction', params: {subnet: string, type: OVH.telephony.ProtocolEnum}): Promise<telephony.DefaultIpRestriction>;
  /**
   * settings operations
   * Change the telephony settings linked to the customer account
   */
  public post(path: '/me/telephony/settings', params: {settings: OVH.telephony.Settings}): Promise<void>;
  /**
   * checkValidity operations
   * Verify existing voucher
   */
  public post(path: '/me/voucher/checkValidity', params: {voucher: string}): Promise<nichandle.VoucherStatus>;
  /**
   * setting operations
   * Change xdsl settings linked to the nichandle
   */
  public post(path: '/me/xdsl/setting', params: {resellerFastModemShipping?: boolean, resellerModemBasicConfig?: boolean}): Promise<void>;
  public post(path: PathsMePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * SOTP Two-Factor Authentication
   * Delete this Two-Factor
   */
  public delete(path: '/me/accessRestriction/backupCode'): Promise<void>;
  /**
   * List of all IP Restrictions
   * Delete this restriction rule
   */
  public delete(path: '/me/accessRestriction/ip/{id}', params: {id: string}): Promise<void>;
  /**
   * Sms Two-Factor Authentication
   * Delete this Two-Factor
   */
  public delete(path: '/me/accessRestriction/sms/{id}', params: {id: string}): Promise<void>;
  /**
   * TOTP Two-Factor Authentication
   * Delete this Two-Factor
   */
  public delete(path: '/me/accessRestriction/totp/{id}', params: {id: string}): Promise<void>;
  /**
   * U2F Two-Factor Authentication
   * Delete this Two-Factor
   */
  public delete(path: '/me/accessRestriction/u2f/{id}', params: {id: string}): Promise<void>;
  /**
   * API Application
   * Remove this application. It will revoke all credential belonging to this application.
   */
  public delete(path: '/me/api/application/{applicationId}', params: {applicationId: string}): Promise<void>;
  /**
   * API Credential
   * Remove this credential
   */
  public delete(path: '/me/api/credential/{credentialId}', params: {credentialId: string}): Promise<void>;
  /**
   * List of documents added on your account
   * Delete a document
   */
  public delete(path: '/me/document/{id}', params: {id: string}): Promise<void>;
  /**
   * Custom domains of your fax services
   * Delete a custom domain of your fax services
   */
  public delete(path: '/me/fax/customDomains/{id}', params: {id: string}): Promise<void>;
  /**
   * A group linked to this account
   * Delete this object
   */
  public delete(path: '/me/identity/group/{group}', params: {group: string}): Promise<void>;
  /**
   * A user linked to this account
   * Delete this object
   */
  public delete(path: '/me/identity/user/{user}', params: {user: string}): Promise<void>;
  /**
   * Available installation templates
   * remove this template
   */
  public delete(path: '/me/installationTemplate/{templateName}', params: {templateName: string}): Promise<void>;
  /**
   * Partitioning schemes available on this template
   * remove this scheme of partition
   */
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', params: {templateName: string, schemeName: string}): Promise<void>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Remove this RAID
   */
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', params: {templateName: string, schemeName: string, name: string}): Promise<void>;
  /**
   *  Partitions defined in this partitioning scheme
   * remove this partition
   */
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', params: {templateName: string, schemeName: string, mountpoint: string}): Promise<void>;
  /**
   * Details about an IP block organisation
   * Delete this organisation
   */
  public delete(path: '/me/ipOrganisation/{organisationId}', params: {organisationId: string}): Promise<void>;
  /**
   * Customer IPXE scripts
   * Remove this IPXE Script
   */
  public delete(path: '/me/ipxeScript/{name}', params: {name: string}): Promise<void>;
  /**
   * Manage payment method
   * Cancel one payment method
   */
  public delete(path: '/me/payment/method/{paymentMethodId}', params: {paymentMethodId: string}): Promise<me.payment.method.PaymentMethod>;
  /**
   * SEPA bank account info
   * Disable payment through this account
   */
  public delete(path: '/me/paymentMean/bankAccount/{id}', params: {id: string}): Promise<void>;
  /**
   * Credit card informations
   * Disable payment through this credit card
   */
  public delete(path: '/me/paymentMean/creditCard/{id}', params: {id: string}): Promise<void>;
  /**
   * Paypal account info
   * Disable payment through this PayPal account
   */
  public delete(path: '/me/paymentMean/paypal/{id}', params: {id: string}): Promise<void>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Remove this public SSH key
   */
  public delete(path: '/me/sshKey/{keyName}', params: {keyName: string}): Promise<void>;
  /**
   * Default IP restriction of a VoIP line
   * Delete a default IP restriction for your future VoIP lines
   */
  public delete(path: '/me/telephony/defaultIpRestriction/{id}', params: {id: string}): Promise<void>;
  public delete(path: PathsMeDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
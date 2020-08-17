import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /me Models
 * Source: https://api.us.ovhcloud.com/1.0/me.json
 */
export namespace agreements {
    /**
     * The current state of a contract agreement
     * type fullname: agreements.AgreementStateEnum
     */
    export type AgreementStateEnum = "ko" | "obsolete" | "ok" | "todo"
    /**
     * Contract of service
     * interface fullName: agreements.Contract.Contract
     */
    export interface Contract {
        active: boolean;
        date: string;
        name: string;
        pdf: string;
        text: string;
    }
    /**
     * Contract agreement
     * interface fullName: agreements.ContractAgreement.ContractAgreement
     */
    export interface ContractAgreement {
        agreed: agreements.AgreementStateEnum;
        contractId: number;
        date: string;
        id: number;
    }
}
export namespace api {
    /**
     * API Application
     * interface fullName: api.Application.Application
     */
    export interface Application {
        applicationId: number;
        applicationKey: string;
        description: string;
        name: string;
        status: api.ApplicationStatusEnum;
    }
    /**
     * List of state of an Api Application
     * type fullname: api.ApplicationStatusEnum
     */
    export type ApplicationStatusEnum = "active" | "blocked" | "inactive" | "trusted"
    /**
     * API Credential
     * interface fullName: api.Credential.Credential
     */
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
    /**
     * Access rule required for the application
     * interface fullName: auth.AccessRule.AccessRule
     */
    export interface AccessRule {
        method: http.MethodEnum;
        path: string;
    }
    /**
     * All states a Credential can be in
     * type fullname: auth.CredentialStateEnum
     */
    export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"
}
export namespace balance {
    /**
     * Balance of the account
     * interface fullName: balance.CustomerBalance.CustomerBalance
     */
    export interface CustomerBalance {
        active: boolean;
        dueAmount: order.Price;
        pendingAmount: order.Price;
        todoAmount: order.Price;
        unmaturedAmount: order.Price;
    }
    /**
     * State of a balance
     * interface fullName: balance.InvoicingBalance.InvoicingBalance
     */
    export interface InvoicingBalance {
        amount: order.Price;
        date: string;
        debtId: number;
        dueAmount: order.Price;
        dueDate?: string;
        orderId: number;
        pendingAmount: order.Price;
        todoAmount: order.Price;
        unmaturedAmount: order.Price;
    }
    /**
     * Operation that happend on a debt
     * interface fullName: balance.OperationBalance.OperationBalance
     */
    export interface OperationBalance {
        amount: order.Price;
        date: string;
        depositOrderId: number;
        operationId: number;
        status: debt.entry.StatusEnum;
        type?: debt.entry.OperationEnum;
    }
}
export namespace billing {
    /**
     * Available automatic payment means
     * interface fullName: billing.AutomaticPaymentMean.AutomaticPaymentMean
     */
    export interface AutomaticPaymentMean {
        bankAccount: boolean;
        creditCard: boolean;
        deferredPaymentAccount: boolean;
        paypal: boolean;
    }
    /**
     * List of available extension
     * type fullname: billing.DocumentExtensionEnum
     */
    export type DocumentExtensionEnum = "html" | "pdf"
    /**
     * Balance of the fidelity account
     * interface fullName: billing.FidelityAccount.FidelityAccount
     */
    export interface FidelityAccount {
        alertThreshold?: number;
        balance: number;
        canBeCredited: boolean;
        lastUpdate: string;
        openDate: string;
    }
    /**
     * Details about a fidelity account
     * interface fullName: billing.FidelityMovement.FidelityMovement
     */
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
    /**
     * Details about a Bill
     * interface fullName: billing.Invoice.Invoice
     */
    export interface Invoice {
        billId: string;
        date: string;
        htmlUrl: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        priceWithTax: orderPrice;
        priceWithoutTax: orderPrice;
        tax: orderPrice;
        url: string;
    }
    /**
     * Details about a deposit
     * interface fullName: billing.InvoiceDeposit.InvoiceDeposit
     */
    export interface InvoiceDeposit {
        amount: orderPrice;
        date: string;
        depositId: string;
        orderId: number;
        password: string;
        paymentInfo?: billing.paymentMethod.PaymentInfo;
        pdfUrl: string;
        url: string;
    }
    /**
     * Details about a deposit
     * interface fullName: billing.InvoiceDepositRequest.InvoiceDepositRequest
     */
    export interface InvoiceDepositRequest {
        creationDate: string;
        id: number;
        orderIds?: number[];
    }
    /**
     * Information about an invoice entry
     * interface fullName: billing.InvoiceDetail.InvoiceDetail
     */
    export interface InvoiceDetail {
        billDetailId: string;
        description: string;
        domain: string;
        periodEnd?: string;
        periodStart?: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    /**
     * Details about a Refund
     * interface fullName: billing.InvoiceRefund.InvoiceRefund
     */
    export interface InvoiceRefund {
        date: string;
        htmlUrl: string;
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
    /**
     * Information about refund entry
     * interface fullName: billing.InvoiceRefundDetail.InvoiceRefundDetail
     */
    export interface InvoiceRefundDetail {
        description: string;
        domain: string;
        quantity: string;
        refundDetailId: string;
        refundId: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    /**
     * Details about a withdrawal
     * interface fullName: billing.InvoiceWithdrawal.InvoiceWithdrawal
     */
    export interface InvoiceWithdrawal {
        amount: orderPrice;
        country: string;
        date: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        url: string;
        withdrawalId: string;
    }
    /**
     * Extensions of a detail
     * interface fullName: billing.ItemDetail.ItemDetail
     */
    export interface ItemDetail {
        order: billing.ItemDetail.Order;
    }
    export namespace ItemDetail {
        /**
         * Order data for this Detail
         * interface fullName: billing.ItemDetail.Order.Order
         */
        export interface Order {
            action?: billing.ItemDetail.OrderActionEnum;
            configurations: billing.ItemDetail.OrderConfiguration[];
            plan: billing.ItemDetail.OrderPlan;
        }
        /**
         * List of order actions
         * type fullname: billing.ItemDetail.OrderActionEnum
         */
        export type OrderActionEnum = "consumption" | "installation" | "renew" | "upgrade"
        /**
         * Configuration of order
         * interface fullName: billing.ItemDetail.OrderConfiguration.OrderConfiguration
         */
        export interface OrderConfiguration {
            label: string;
            value: string;
        }
        /**
         * Plan data from order
         * interface fullName: billing.ItemDetail.OrderPlan.OrderPlan
         */
        export interface OrderPlan {
            code?: string;
            duration?: string;
            pricingMode?: string;
            product: billing.ItemDetail.OrderPlanProduct;
            quantity?: number;
        }
        /**
         * Product data from order
         * interface fullName: billing.ItemDetail.OrderPlanProduct.OrderPlanProduct
         */
        export interface OrderPlanProduct {
            name?: string;
        }
    }
    /**
     * Details about an Order
     * interface fullName: billing.Order.Order
     */
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
    /**
     * Information about a Bill entry
     * interface fullName: billing.OrderDetail.OrderDetail
     */
    export interface OrderDetail {
        cancelled: boolean;
        description: string;
        domain: string;
        orderDetailId: number;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    /**
     * All payment means you might have use on an OVH order
     * type fullname: billing.PaymentMeanEnum
     */
    export type PaymentMeanEnum = "cash" | "chargeback" | "cheque" | "creditAccount" | "creditCard" | "debtAccount" | "deposit" | "digitalLaunchPad" | "edinar" | "fidelityPoints" | "free" | "ideal" | "incubatorAccount" | "mandat" | "multibanco" | "none" | "ovhAccount" | "paymentMandate" | "paypal" | "payu" | "platnosci" | "refund" | "transfer" | "withdrawal"
    /**
     * A validation required to add a payment mean
     * interface fullName: billing.PaymentMeanValidation.PaymentMeanValidation
     */
    export interface PaymentMeanValidation {
        id: number;
        submitUrl?: string;
        url: string;
        validationType: billing.PaymentMeanValidationType;
    }
    /**
     * All the validation you may have to do
     * type fullname: billing.PaymentMeanValidationType
     */
    export type PaymentMeanValidationType = "creditAccount" | "documentToSend" | "simpleValidation"
    /**
     * Available payment methods
     * interface fullName: billing.PaymentMethod.PaymentMethod
     */
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
    /**
     * Reusable payment mean type
     * type fullname: billing.ReusablePaymentMeanEnum
     */
    export type ReusablePaymentMeanEnum = "CREDIT_CARD" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL" | "bankAccount" | "creditCard" | "fidelityAccount" | "ovhAccount" | "paypal"
    /**
     * SLA properties
     * interface fullName: billing.SlaOperation.SlaOperation
     */
    export interface SlaOperation {
        date: string;
        description: string;
        endDate?: string;
        id: number;
        name: string;
        startDate: string;
    }
    /**
     * Describe all services impacted by SLA
     * interface fullName: billing.SlaOperationService.SlaOperationService
     */
    export interface SlaOperationService {
        description: string;
        serviceName: string;
        slaApplication: string;
        slaPlan: string;
    }
    /**
     * Details about a Voucher account
     * interface fullName: billing.VoucherAccount.VoucherAccount
     */
    export interface VoucherAccount {
        balance: orderPrice;
        lastUpdate: string;
        openDate: string;
        voucherAccountId: string;
    }
    /**
     * Details about a voucher account
     * interface fullName: billing.VoucherMovement.VoucherMovement
     */
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
    export namespace credit {
        /**
         * Credit balance
         * interface fullName: billing.credit.Balance.Balance
         */
        export interface Balance {
            amount: orderPrice;
            balanceDetails: billing.credit.balance.BalanceDetail[];
            balanceName: string;
            booked: billing.credit.balance.BookedMovement[];
            creationDate: string;
            expiring: billing.credit.balance.ExpiringMovement[];
            expiringSummary: billing.credit.balance.ExpiringMovement[];
            lastUpdate: string;
            type: billing.credit.balance.Type;
        }
        export namespace balance {
            /**
             * Part of a balance
             * interface fullName: billing.credit.balance.BalanceDetail.BalanceDetail
             */
            export interface BalanceDetail {
                amount: orderPrice;
                serviceId?: number;
            }
            /**
             * Movement already booked on orders
             * interface fullName: billing.credit.balance.BookedMovement.BookedMovement
             */
            export interface BookedMovement {
                amount: orderPrice;
                orderId: number;
            }
            /**
             * Movement expiring soon
             * interface fullName: billing.credit.balance.ExpiringMovement.ExpiringMovement
             */
            export interface ExpiringMovement {
                amount: orderPrice;
                creationDate: string;
                expirationDate: string;
                lastUpdate: string;
                sourceObject: billing.credit.balance.movement.SubObject;
            }
            /**
             * Credit balance
             * interface fullName: billing.credit.balance.Movement.Movement
             */
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
            /**
             * Balance type
             * type fullname: billing.credit.balance.Type
             */
            export type Type = "PREPAID_ACCOUNT" | "VOUCHER" | "DEPOSIT" | "BONUS"
            export namespace movement {
                /**
                 * Movement sub object
                 * interface fullName: billing.credit.balance.movement.SubObject.SubObject
                 */
                export interface SubObject {
                    id?: string;
                    name?: string;
                }
            }
        }
    }
    export namespace fidelityAccount {
        /**
         * Operations a fidelity account movement can represent
         * type fullname: billing.fidelityAccount.OperationEnum
         */
        export type OperationEnum = "bonus" | "cancel-bonus" | "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
    export namespace order {
        /**
         * The object the processing of the order leaded to
         * interface fullName: billing.order.AssociatedObject.AssociatedObject
         */
        export interface AssociatedObject {
            id?: string;
            type?: billing.order.associatedObject.TypeEnum;
        }
        /**
         * The object containing all capacities about automatic payment methods
         * interface fullName: billing.order.AutomaticPaymentCapacities.AutomaticPaymentCapacities
         */
        export interface AutomaticPaymentCapacities {
            canBePaidAutomatically: boolean;
            paymentMethodId?: number;
        }
        /**
         * Payment method that can be used on an Order
         * interface fullName: billing.order.AvailablePaymentMethod.AvailablePaymentMethod
         */
        export interface AvailablePaymentMethod {
            id: number;
            type: billing.paymentMethod.PaymentTypeEnum;
        }
        /**
         * Follow up history of an order
         * interface fullName: billing.order.FollowUp.FollowUp
         */
        export interface FollowUp {
            history: billing.order.followUp.History[];
            status: billing.order.followUp.StatusEnum;
            step: billing.order.followUp.StepEnum;
        }
        /**
         * The object containing all capacities about a given order
         * interface fullName: billing.order.OrderCapacities.OrderCapacities
         */
        export interface OrderCapacities {
            payment?: billing.order.AutomaticPaymentCapacities;
        }
        /**
         * All possible order status
         * type fullname: billing.order.OrderStatusEnum
         */
        export type OrderStatusEnum = "cancelled" | "cancelling" | "checking" | "delivered" | "delivering" | "documentsRequested" | "notPaid" | "unknown"
        /**
         * Voucher applied on an Order
         * interface fullName: billing.order.OrderVoucher.OrderVoucher
         */
        export interface OrderVoucher {
            amount: orderPrice;
            balanceName: string;
        }
        /**
         * Payment methods
         * interface fullName: billing.order.PaymentMethods.PaymentMethods
         */
        export interface PaymentMethods {
            available: payment.method.AvailablePaymentMethod[];
            registered: number[];
        }
        /**
         * A registered payment mean
         * interface fullName: billing.order.RegisteredPaymentMean.RegisteredPaymentMean
         */
        export interface RegisteredPaymentMean {
            paymentMean: billing.ReusablePaymentMeanEnum;
        }
        /**
         * Retraction reason type
         * type fullname: billing.order.RetractionReasonEnum
         */
        export type RetractionReasonEnum = "competitor" | "difficulty" | "expensive" | "other" | "performance" | "reliability" | "unused"
        export namespace associatedObject {
            /**
             * Type of objects an order can be linked to
             * type fullname: billing.order.associatedObject.TypeEnum
             */
            export type TypeEnum = "Bill" | "Deposit" | "Refund" | "Withdrawal"
        }
        export namespace credit {
            /**
             * Credit balance applied on an Order
             * interface fullName: billing.order.credit.Balance.Balance
             */
            export interface Balance {
                amount: orderPrice;
                balanceName: string;
            }
        }
        export namespace followUp {
            /**
             * Step history of order follow-up
             * interface fullName: billing.order.followUp.History.History
             */
            export interface History {
                date: string;
                description: string;
                label: billing.order.followUp.HistoryStatusEnum;
            }
            /**
             * History label of order follow-up
             * type fullname: billing.order.followUp.HistoryStatusEnum
             */
            export type HistoryStatusEnum = "DELIVERY" | "FRAUD_CHECK" | "FRAUD_DOCS_REQUESTED" | "FRAUD_MANUAL_REVIEW" | "FRAUD_REFUSED" | "INVOICE_IN_PROGRESS" | "INVOICE_SENT" | "ORDER_ACCEPTED" | "ORDER_STARTED" | "PAYMENT_CONFIRMED" | "PAYMENT_INITIATED" | "PAYMENT_RECEIVED" | "REGISTERED_PAYMENT_INITIATED"
            /**
             * Step status of order follow-up
             * type fullname: billing.order.followUp.StatusEnum
             */
            export type StatusEnum = "DOING" | "DONE" | "ERROR" | "TODO"
            /**
             * Status of order follow-up
             * type fullname: billing.order.followUp.StepEnum
             */
            export type StepEnum = "AVAILABLE" | "DELIVERING" | "VALIDATED" | "VALIDATING"
        }
    }
    export namespace paymentMethod {
        /**
         * List of payment type enum possible to create
         * type fullname: billing.paymentMethod.CreatePaymentTypeEnum
         */
        export type CreatePaymentTypeEnum = "BANK_ACCOUNT" | "CREDIT_CARD" | "PAYPAL"
        /**
         * The payment infos linked to this debt entry
         * interface fullName: billing.paymentMethod.PaymentInfo.PaymentInfo
         */
        export interface PaymentInfo {
            description?: string;
            paymentType: billing.paymentMethod.PaymentTypeEnum;
            publicLabel?: string;
        }
        /**
         * List of payment sub type enum
         * type fullname: billing.paymentMethod.PaymentSubTypeEnum
         */
        export type PaymentSubTypeEnum = "AMERICAN_EXPRESS" | "MASTERCARD" | "VISA"
        /**
         * List of payment type enum
         * type fullname: billing.paymentMethod.PaymentTypeEnum
         */
        export type PaymentTypeEnum = "BANK_ACCOUNT" | "CREDIT_CARD" | "DEFERRED_PAYMENT_ACCOUNT" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL"
        /**
         * List of payment method status enum
         * type fullname: billing.paymentMethod.StatusEnum
         */
        export type StatusEnum = "BLOCKED" | "BLOCKED_BY_CUSTOMER" | "BROKEN" | "CANCELED" | "CANCELED_BY_CUSTOMER" | "CREATED" | "ERROR" | "EXPIRED" | "PAUSED" | "VALID" | "VALID_FOR_CREDIT"
    }
    export namespace voucherAccount {
        /**
         * Operations a voucher account movement can represent
         * type fullname: billing.voucherAccount.OperationEnum
         */
        export type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
}
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace contact {
    /**
     * Representation of an Address
     * interface fullName: contact.Address.Address
     */
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
    /**
     * Representation of a Contact
     * interface fullName: contact.Contact.Contact
     */
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
    /**
     * Extras informations about a field
     * interface fullName: contact.FieldInformation.FieldInformation
     */
    export interface FieldInformation {
        fieldName: string;
        mandatory: boolean;
        readOnly: boolean;
    }
}
export namespace coreTypes {
    /**
     * Continents
     * type fullname: coreTypes.ContinentEnum
     */
    export type ContinentEnum = "africa" | "antartica" | "asia" | "europe" | "north-america" | "oceania" | "south-america"
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace debt {
    export namespace associatedObject {
        /**
         * The payment infos linked to this debt entry
         * interface fullName: debt.associatedObject.PaymentInfo.PaymentInfo
         */
        export interface PaymentInfo {
            description?: string;
            paymentType: billing.PaymentMeanEnum;
            publicLabel?: string;
        }
        /**
         * Type of objects an order can be linked to
         * type fullname: debt.associatedObject.TypeEnum
         */
        export type TypeEnum = "Bill" | "DebtOperation" | "Deposit" | "Order" | "OvhAccountMovement" | "Refund" | "Withdrawal"
    }
    export namespace entry {
        /**
         * The object linked to this debt entry
         * interface fullName: debt.entry.AssociatedObject.AssociatedObject
         */
        export interface AssociatedObject {
            id?: string;
            paymentInfo?: debt.associatedObject.PaymentInfo;
            subId?: string;
            type?: debt.associatedObject.TypeEnum;
        }
        /**
         * All operations a debt entry can represent
         * type fullname: debt.entry.OperationEnum
         */
        export type OperationEnum = "CANCEL" | "CASH_MANUAL" | "CHECK_MANUAL" | "CREDITCARD" | "CREDITCARD_AUTOMATIC" | "CREDITCARD_MANUAL" | "CREDIT_ACCOUNT_AUTOMATIC" | "EDINAR_MANUAL" | "IDEAL_MANUAL" | "MULTIBANCO_MANUAL" | "ORDER" | "PAYPAL_AUTOMATIC" | "PAYPAL_MANUAL" | "PAYU_MANUAL" | "RECOVERY_TRANSFER_AUTOMATIC" | "REFUND" | "REFUND_CHECK" | "REFUND_CREDITCARD" | "REFUND_CREDIT_ACCOUNT" | "REFUND_LOSS" | "REFUND_PAYPAL" | "REFUND_PAYU" | "REFUND_SEPA" | "REFUND_TRANSFER" | "REFUND_UNKNOWN" | "SEPA_AUTOMATIC" | "TRANSFER_MANUAL" | "UNPAID_CHECK" | "UNPAID_CREDITCARD" | "UNPAID_CREDIT_ACCOUNT" | "UNPAID_PAYPAL" | "UNPAID_SEPA" | "UNPAID_WITHDRAW" | "WARRANT_MANUAL" | "WITHDRAW_AUTOMATIC"
        /**
         * All status a debt entry can be in
         * type fullname: debt.entry.StatusEnum
         */
        export type StatusEnum = "CANCELLED" | "DONE" | "FAILED" | "PAID" | "PENDING" | "TODO"
    }
}
export namespace dedicated {
    /**
     * Filesystems available
     * type fullname: dedicated.TemplateOsFileSystemEnum
     */
    export type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs"
    /**
     * Hardware RAID enum
     * type fullname: dedicated.TemplateOsHardwareRaidEnum
     */
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
    /**
     * all language available
     * type fullname: dedicated.TemplateOsLanguageEnum
     */
    export type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK"
    /**
     * A structure describing properties customizables about this dedicated installation template
     * interface fullName: dedicated.TemplateOsProperties.TemplateOsProperties
     */
    export interface TemplateOsProperties {
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    /**
     * Os type
     * type fullname: dedicated.TemplateOsTypeEnum
     */
    export type TemplateOsTypeEnum = "bsd" | "linux" | "solaris" | "windows"
    /**
     * Os usage definition
     * type fullname: dedicated.TemplateOsUsageEnum
     */
    export type TemplateOsUsageEnum = "basic" | "customer" | "hosting" | "other" | "readyToUse" | "virtualisation"
    /**
     * partition type
     * type fullname: dedicated.TemplatePartitionTypeEnum
     */
    export type TemplatePartitionTypeEnum = "logical" | "lv" | "primary"
    export namespace installationTemplate {
        /**
         * Available installation templates
         * interface fullName: dedicated.installationTemplate.Templates.Templates
         */
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
        /**
         * Hardware RAID defined in this partitioning scheme
         * interface fullName: dedicated.installationTemplate.hardwareRaid.hardwareRaid
         */
        export interface hardwareRaid {
            disks: string[];
            mode: dedicated.TemplateOsHardwareRaidEnum;
            name: string;
            step: number;
        }
        /**
         * Partitioning schemes available on this template
         * interface fullName: dedicated.installationTemplate.templatePartitioningSchemes.templatePartitioningSchemes
         */
        export interface templatePartitioningSchemes {
            name: string;
            priority: number;
        }
        /**
         *  Partitions defined in this partitioning scheme
         * interface fullName: dedicated.installationTemplate.templatePartitions.templatePartitions
         */
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
        /**
         * Available os bit format
         * type fullname: dedicated.server.BitFormatEnum
         */
        export type BitFormatEnum = 32 | 64
        /**
         * partition raid type
         * type fullname: dedicated.server.PartitionRaidEnum
         */
        export type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6"
        /**
         * supports UEFI setup
         * type fullname: dedicated.server.SupportsUEFIEnum
         */
        export type SupportsUEFIEnum = "no" | "only" | "yes"
    }
}
export namespace geolocation {
    /**
     * Representation of country and continent from visitor IP
     * interface fullName: geolocation.ContinentCountryLocation.ContinentCountryLocation
     */
    export interface ContinentCountryLocation {
        continent: coreTypes.ContinentEnum;
        countryCode: coreTypes.CountryEnum;
        ip: string;
    }
}
export namespace http {
    /**
     * All HTTP methods available
     * type fullname: http.MethodEnum
     */
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}
export namespace me {
    /**
     * Country Migration
     * interface fullName: me.Migration.Migration
     */
    export interface Migration {
        from: nichandle.OvhSubsidiaryEnum;
        id: number;
        status: me.migration.StatusEnum;
        steps?: me.migration.Step[];
        to: nichandle.OvhSubsidiaryEnum;
    }
    export namespace agreements {
        /**
         * State of the agreement
         * type fullname: me.agreements.AgreementStatusEnum
         */
        export type AgreementStatusEnum = "obsolete" | "todo" | "ko" | "ok"
        /**
         * Contract Agreement
         * interface fullName: me.agreements.ContractAgreement.ContractAgreement
         */
        export interface ContractAgreement {
            agreed: me.agreements.AgreementStatusEnum;
            contractId: number;
            date: string;
            id: number;
        }
    }
    export namespace billing {
        export namespace group {
            /**
             * Missing description
             * interface fullName: me.billing.group.BillingGroup.BillingGroup
             */
            export interface BillingGroup {
                contactId?: number;
                creationDate: string;
                groupId: number;
                lastUpdate: string;
                name: string;
                paymentMethodId?: number;
            }
            /**
             * Missing description
             * interface fullName: me.billing.group.Service.Service
             */
            export interface Service {
                groupId: number;
                serviceId: number;
            }
            export namespace service {
                /**
                 * Missing description
                 * interface fullName: me.billing.group.service.Create.Create
                 */
                export interface Create {
                    serviceId: number;
                }
            }
        }
    }
    export namespace consent {
        /**
         * Consent campaign
         * interface fullName: me.consent.Campaign.Campaign
         */
        export interface Campaign {
            description: string;
            name: string;
            type: me.consent.CampaignTypeEnum;
        }
        /**
         * Campaign type
         * type fullname: me.consent.CampaignTypeEnum
         */
        export type CampaignTypeEnum = "OPTIN" | "OPTOUT"
        /**
         * Customer consent information for a campaign
         * interface fullName: me.consent.Consent.Consent
         */
        export interface Consent {
            campaign: string;
            history: me.consent.Decision[];
            type: me.consent.CampaignTypeEnum;
            value: boolean;
        }
        /**
         * Customer consent decision
         * interface fullName: me.consent.Decision.Decision
         */
        export interface Decision {
            timestamp: string;
            value: boolean;
        }
    }
    export namespace consumption {
        /**
         * Price with currency and amount in micro-cents
         * interface fullName: me.consumption.Price.Price
         */
        export interface Price {
            currencyCode: order.CurrencyCodeEnum;
            text: string;
            value: number;
            valueInUcents: number;
        }
        /**
         * List of consumptions recorded in a range
         * interface fullName: me.consumption.Transaction.Transaction
         */
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
            /**
             * Element of consumption for resource
             * interface fullName: me.consumption.transaction.Element.Element
             */
            export interface Element {
                details: me.consumption.transaction.Element.Detail[];
                planCode: string;
                planFamily: string;
                price: me.consumption.Price;
                quantity: number;
            }
            export namespace Element {
                /**
                 * Element of consumption for resource
                 * interface fullName: me.consumption.transaction.Element.Detail.Detail
                 */
                export interface Detail {
                    price: me.consumption.Price;
                    quantity: number;
                    unique_id?: string;
                }
            }
        }
    }
    export namespace credit {
        /**
         * Missing description
         * interface fullName: me.credit.Balance.Balance
         */
        export interface Balance {
            amount: orderPrice;
            balanceDetails: me.credit.balance.BalanceDetails[];
            balanceName: string;
            booked: me.credit.balance.BookedMovement[];
            creationDate: string;
            expiring: me.credit.balance.ExpiringMovement[];
            lastUpdate: string;
            type: me.credit.balance.TypeEnum;
        }
        export namespace balance {
            /**
             * Missing description
             * interface fullName: me.credit.balance.BalanceDetails.BalanceDetails
             */
            export interface BalanceDetails {
                amount: orderPrice;
                balanceSubName?: string;
                expiring: me.credit.balance.ExpiringMovement[];
                serviceId?: number;
            }
            /**
             * Missing description
             * interface fullName: me.credit.balance.BookedMovement.BookedMovement
             */
            export interface BookedMovement {
                amount: orderPrice;
                balanceSubName?: string;
                orderId: number;
            }
            /**
             * Missing description
             * interface fullName: me.credit.balance.ExpiringMovement.ExpiringMovement
             */
            export interface ExpiringMovement {
                amount: orderPrice;
                creationDate: string;
                expirationDate: string;
                lastUpdate: string;
                sourceObject: me.credit.balance.movement.SubObject;
            }
            /**
             * Missing description
             * interface fullName: me.credit.balance.Movement.Movement
             */
            export interface Movement {
                amount: orderPrice;
                balanceName: string;
                creationDate: string;
                expirationDate?: string;
                lastUpdate: string;
                movementId: number;
                orderId?: number;
                sourceObject: me.credit.balance.movement.SubObject;
                type: me.credit.balance.movement.TypeEnum;
            }
            /**
             * Balance type
             * type fullname: me.credit.balance.TypeEnum
             */
            export type TypeEnum = "PREPAID_ACCOUNT" | "VOUCHER" | "DEPOSIT" | "BONUS"
            export namespace movement {
                /**
                 * Missing description
                 * interface fullName: me.credit.balance.movement.SubObject.SubObject
                 */
                export interface SubObject {
                    id: string;
                    name: string;
                }
                /**
                 * Balance movement type
                 * type fullname: me.credit.balance.movement.TypeEnum
                 */
                export type TypeEnum = "BONUS" | "CANCEL" | "EXPIRE" | "GIFT" | "MANUAL" | "ORDER" | "REFUND" | "UNPAID" | "USE" | "VOUCHER"
            }
        }
        export namespace code {
            /**
             * Missing description
             * interface fullName: me.credit.code.Redeem.Redeem
             */
            export interface Redeem {
                inputCode: string;
                serviceId: number;
            }
        }
    }
    export namespace migration {
        /**
         * contract
         * interface fullName: me.migration.Contract.Contract
         */
        export interface Contract {
            active: boolean;
            date: string;
            id: number;
            name: string;
            pdf: string;
            text: string;
        }
        /**
         * Status of the migration
         * type fullname: me.migration.StatusEnum
         */
        export type StatusEnum = "CANCELED" | "CHECKED" | "DOING" | "MIGRATED" | "TO_CHECK" | "TODO"
        /**
         * Country Migration Step
         * interface fullName: me.migration.Step.Step
         */
        export interface Step {
            contracts?: me.migration.step.Contracts;
            debt?: me.migration.step.Debt;
            name: me.migration.step.NameEnum;
            orders?: me.migration.step.Orders;
            status: me.migration.step.StatusEnum;
        }
        export namespace step {
            /**
             * Country Migration step contracts data
             * interface fullName: me.migration.step.Contracts.Contracts
             */
            export interface Contracts {
                agreements: me.agreements.ContractAgreement[];
            }
            /**
             * Country Migration step debt data
             * interface fullName: me.migration.step.Debt.Debt
             */
            export interface Debt {
                balanceAmount?: orderPrice;
                ovhAccountAmount?: orderPrice;
            }
            /**
             * Name of the migration step
             * type fullname: me.migration.step.NameEnum
             */
            export type NameEnum = "ORDERS" | "DEBT" | "NIC" | "CONTRACTS"
            /**
             * Country Migration step orders data
             * interface fullName: me.migration.step.Orders.Orders
             */
            export interface Orders {
                pendingOperations: boolean;
                pendingPromotions: boolean;
                pendingSubscriptions: boolean;
            }
            /**
             * Status of the migration step
             * type fullname: me.migration.step.StatusEnum
             */
            export type StatusEnum = "OK" | "PENDING"
        }
    }
    export namespace payment {
        export namespace method {
            /**
             * Available payment method object
             * interface fullName: me.payment.method.AvailablePaymentMethod.AvailablePaymentMethod
             */
            export interface AvailablePaymentMethod {
                icon: me.payment.method.Icon;
                integration: paymentmethodIntegrationType;
                oneshot: boolean;
                paymentType: string;
                registerable: boolean;
                registerableWithTransaction: boolean;
            }
            /**
             * Callback URL's to register a new payment method
             * interface fullName: me.payment.method.CallbackUrl.CallbackUrl
             */
            export interface CallbackUrl {
                cancel: string;
                error: string;
                failure: string;
                pending: string;
                success: string;
            }
            /**
             * Icon
             * interface fullName: me.payment.method.Icon.Icon
             */
            export interface Icon {
                data?: string;
                name?: string;
            }
            /**
             * Payment method object
             * interface fullName: me.payment.method.PaymentMethod.PaymentMethod
             */
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
                /**
                 * Payment method status enum
                 * type fullname: me.payment.method.PaymentMethod.Status
                 */
                export type Status = "CANCELED" | "CANCELING" | "CREATED" | "ERROR" | "EXPIRED" | "CREATING" | "MAINTENANCE" | "PAUSED" | "VALID"
            }
            export namespace Register {
                /**
                 * Register validation payload result
                 * interface fullName: me.payment.method.Register.ValidationResult.ValidationResult
                 */
                export interface ValidationResult {
                    formSessionId?: string;
                    merchantId?: string;
                    organizationId?: string;
                    paymentMethodId: number;
                    url?: string;
                    validationType: paymentmethodIntegrationType;
                }
            }
            /**
             * Payment method transaction object
             * interface fullName: me.payment.method.Transaction.Transaction
             */
            export interface Transaction {
                amount: orderPrice;
                creationDate: string;
                status: me.payment.method.Transaction.Status;
                transactionId: number;
                type: me.payment.method.Transaction.Type;
            }
            export namespace Transaction {
                /**
                 * Payment transaction status enum
                 * type fullname: me.payment.method.Transaction.Status
                 */
                export type Status = "CANCELED" | "CANCELING" | "CONFIRMING" | "CREATED" | "ERROR" | "FAILED" | "READY" | "SUCCESS"
                /**
                 * Payment transaction type enum
                 * type fullname: me.payment.method.Transaction.Type
                 */
                export type Type = "CREDIT" | "DEBIT"
            }
        }
    }
}
export namespace nichandle {
    export namespace Authentication {
        /**
         * X509 Certificate
         * interface fullName: nichandle.Authentication.Certificate.Certificate
         */
        export interface Certificate {
            expiration: string;
            subject: string;
        }
        /**
         * A group
         * interface fullName: nichandle.Authentication.Group.Group
         */
        export interface Group {
            creation: string;
            defaultGroup: boolean;
            description: string;
            lastUpdate: string;
            name: string;
            role: nichandle.RoleEnum;
        }
        /**
         * A SAML 2.0 provider
         * interface fullName: nichandle.Authentication.Provider.Provider
         */
        export interface Provider {
            creation: string;
            groupAttributeName: string;
            idpSigningCertificate: nichandle.Authentication.Certificate;
            lastUpdate: string;
            ssoServiceUrl: string;
        }
    }
    /**
     * Internal customer billing capacities for customer control panel
     * interface fullName: nichandle.BillingCapacities.BillingCapacities
     */
    export interface BillingCapacities {
        canUseDebtSystem: boolean;
        canUsePostalMailForInvoices: boolean;
        requiredPaymentMethod: nichandle.RequiredPaymentMethodEnum;
    }
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    /**
     * Customer currency
     * interface fullName: nichandle.Currency.Currency
     */
    export interface Currency {
        code: string;
        symbol: string;
    }
    /**
     * Login restrictions on a development version of the Manager
     * interface fullName: nichandle.DeveloperModeRestriction.DeveloperModeRestriction
     */
    export interface DeveloperModeRestriction {
        enabled: boolean;
    }
    /**
     * All genders a person can choose
     * type fullname: nichandle.GenderEnum
     */
    export type GenderEnum = "female" | "male"
    /**
     * Ip registries
     * type fullname: nichandle.IpRegistryEnum
     */
    export type IpRegistryEnum = "ARIN" | "RIPE"
    /**
     * List of all IP Restrictions
     * interface fullName: nichandle.IpRestriction.IpRestriction
     */
    export interface IpRestriction {
        id: number;
        ip: string;
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    /**
     * IP Restriction default rule
     * interface fullName: nichandle.IpRestrictionDefaultRule.IpRestrictionDefaultRule
     */
    export interface IpRestrictionDefaultRule {
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    /**
     * Details about an IP block organisation
     * interface fullName: nichandle.Ipv4Org.Ipv4Org
     */
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
    /**
     * Languages a nichandle can choose
     * type fullname: nichandle.LanguageEnum
     */
    export type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT"
    /**
     * Legal forms a nichandle can be registered as
     * type fullname: nichandle.LegalFormEnum
     */
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    /**
     * Manager preference
     * interface fullName: nichandle.ManagerPreference.ManagerPreference
     */
    export interface ManagerPreference {
        key: string;
        value: string;
    }
    /**
     * Details about your OVH identifier
     * interface fullName: nichandle.Nichandle.Nichandle
     */
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
    /**
     * SMS notifications
     * interface fullName: nichandle.NichandleSmsNotification.NichandleSmsNotification
     */
    export interface NichandleSmsNotification {
        abuse: boolean;
        creationDate: string;
        phoneNumber: string;
        status: nichandle.NotificationStatusEnum;
        updateDate?: string;
    }
    /**
     * Status of your notification
     * type fullname: nichandle.NotificationStatusEnum
     */
    export type NotificationStatusEnum = "ok" | "waitingForValidation"
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhCompanyEnum
     */
    export type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart"
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN" | "ASIA" | "AU" | "CA" | "QC" | "SG" | "WE" | "WS" | "US"
    /**
     * Indicates the mandatory nature of having a valid payment method
     * type fullname: nichandle.RequiredPaymentMethodEnum
     */
    export type RequiredPaymentMethodEnum = "mandatoryForAutorenew" | "mandatoryForPostpaid" | "notMandatory"
    /**
     * Permission given on the account
     * type fullname: nichandle.RoleEnum
     */
    export type RoleEnum = "REGULAR" | "ADMIN" | "UNPRIVILEGED"
    /**
     * States a nichandle can be in
     * type fullname: nichandle.StateEnum
     */
    export type StateEnum = "complete" | "incomplete"
    /**
     * Sub Account
     * interface fullName: nichandle.SubAccount.SubAccount
     */
    export interface SubAccount {
        creationDate: string;
        description?: string;
        id: number;
    }
    /**
     * Credentials to interact with the api on behalf of the sub-account
     * interface fullName: nichandle.SubAccountConsumerKey.SubAccountConsumerKey
     */
    export interface SubAccountConsumerKey {
        consumerKey: string;
    }
    /**
     * A user
     * interface fullName: nichandle.User.User
     */
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
    /**
     * Status of a User
     * type fullname: nichandle.UserStatus
     */
    export type UserStatus = "OK" | "DISABLED" | "PASSWORD_CHANGE_REQUIRED"
    /**
     * VIP Status by Universe
     * interface fullName: nichandle.VipStatus.VipStatus
     */
    export interface VipStatus {
        cloud: boolean;
        dedicated: boolean;
        telecom: boolean;
        web: boolean;
    }
    /**
     * Voucher Status and Information
     * interface fullName: nichandle.VoucherStatus.VoucherStatus
     */
    export interface VoucherStatus {
        validity: boolean;
    }
    export namespace accessRestriction {
        /**
         * Accept or deny IP access
         * type fullname: nichandle.accessRestriction.IpRestrictionRuleEnum
         */
        export type IpRestrictionRuleEnum = "accept" | "deny"
        /**
         * SOTP Two-Factor Authentication
         * interface fullName: nichandle.accessRestriction.SOTPAccount.SOTPAccount
         */
        export interface SOTPAccount {
            creationDate: string;
            lastUsedDate?: string;
            remaining: number;
            status: nichandle.accessRestriction.SOTPStatusEnum;
        }
        /**
         * Describe SOTP secret keys
         * interface fullName: nichandle.accessRestriction.SOTPSecret.SOTPSecret
         */
        export interface SOTPSecret {
            codes: string[];
        }
        /**
         * Status of SOTP account
         * type fullname: nichandle.accessRestriction.SOTPStatusEnum
         */
        export type SOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        /**
         * Describe SOTP validation status
         * interface fullName: nichandle.accessRestriction.SOTPValidate.SOTPValidate
         */
        export interface SOTPValidate {
            remainingCodes: number;
        }
        /**
         * Sms Two-Factor Authentication
         * interface fullName: nichandle.accessRestriction.SmsAccount.SmsAccount
         */
        export interface SmsAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            phoneNumber: string;
            status: nichandle.accessRestriction.SmsStatusEnum;
        }
        /**
         * Send secret code
         * interface fullName: nichandle.accessRestriction.SmsCode.SmsCode
         */
        export interface SmsCode {
            challenge: string;
        }
        /**
         * Describe secret key
         * interface fullName: nichandle.accessRestriction.SmsSecret.SmsSecret
         */
        export interface SmsSecret {
            id: number;
            remainingTry: number;
        }
        /**
         * Status of the Sms account
         * type fullname: nichandle.accessRestriction.SmsStatusEnum
         */
        export type SmsStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        /**
         * TOTP Two-Factor Authentication
         * interface fullName: nichandle.accessRestriction.TOTPAccount.TOTPAccount
         */
        export interface TOTPAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.TOTPStatusEnum;
        }
        /**
         * Describe TOTP secret keys
         * interface fullName: nichandle.accessRestriction.TOTPSecret.TOTPSecret
         */
        export interface TOTPSecret {
            id: number;
            qrcodeHelper: string;
            secret: string;
        }
        /**
         * Status of TOTP account
         * type fullname: nichandle.accessRestriction.TOTPStatusEnum
         */
        export type TOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        /**
         * U2F Two-Factor Authentication
         * interface fullName: nichandle.accessRestriction.U2FAccount.U2FAccount
         */
        export interface U2FAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.U2FStatusEnum;
        }
        /**
         * U2F Register Request
         * interface fullName: nichandle.accessRestriction.U2FRegisterChallenge.U2FRegisterChallenge
         */
        export interface U2FRegisterChallenge {
            applicationId: string;
            id: number;
            request: nichandle.accessRestriction.U2FRegistrationRequest;
        }
        /**
         * Describe U2F RegistrationRequest
         * interface fullName: nichandle.accessRestriction.U2FRegistrationRequest.U2FRegistrationRequest
         */
        export interface U2FRegistrationRequest {
            challenge: string;
            version: string;
        }
        /**
         * U2F Register Request
         * interface fullName: nichandle.accessRestriction.U2FSignChallenge.U2FSignChallenge
         */
        export interface U2FSignChallenge {
            applicationId: string;
            request: nichandle.accessRestriction.U2FSignRequest;
        }
        /**
         * Describe U2F SignRequest
         * interface fullName: nichandle.accessRestriction.U2FSignRequest.U2FSignRequest
         */
        export interface U2FSignRequest {
            challenge: string;
            keyHandle: string;
            version: string;
        }
        /**
         * Status of U2F account
         * type fullname: nichandle.accessRestriction.U2FStatusEnum
         */
        export type U2FStatusEnum = "disabled" | "enabled" | "needCodeValidation"
    }
    export namespace changeEmail {
        /**
         * State of email change task
         * type fullname: nichandle.changeEmail.TaskStateEnum
         */
        export type TaskStateEnum = "aborted" | "done" | "refused" | "todo"
    }
    export namespace emailChange {
        /**
         * Task running an email change on an account
         * interface fullName: nichandle.emailChange.Task.Task
         */
        export interface Task {
            dateDone?: string;
            dateRequest: string;
            id: number;
            newEmail: string;
            state: nichandle.changeEmail.TaskStateEnum;
        }
    }
    /**
     * Customer IPXE scripts
     * interface fullName: nichandle.ipxe.ipxe
     */
    export interface ipxe {
        name: string;
        script: string;
    }
    /**
     * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
     * interface fullName: nichandle.sshKey.sshKey
     */
    export interface sshKey {
        default: boolean;
        key: string;
        keyName: string;
    }
}
export namespace order {
    /**
     * Currency code
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * Price with its currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace payment {
    export namespace method {
        /**
         * Available payment methods
         * interface fullName: payment.method.AvailablePaymentMethod.AvailablePaymentMethod
         */
        export interface AvailablePaymentMethod {
            icon: payment.method.Icon;
            integration: paymentmethodIntegrationType;
            oneshot: boolean;
            paymentType: string;
            registerable: boolean;
            registerableWithTransaction: boolean;
        }
        /**
         * Payment icon
         * interface fullName: payment.method.Icon.Icon
         */
        export interface Icon {
            data?: string;
            name?: string;
        }
        /**
         * Payment method integration type
         * type fullname: payment.method.IntegrationType
         */
        export type IntegrationType = "DONE" | "IFRAME_VANTIV" | "IN_CONTEXT" | "REDIRECT"
    }
}
export namespace service {
    /**
     * Service operation
     * interface fullName: service.Operation.Operation
     */
    export interface Operation {
        id: number;
        quantity: number;
        resource?: service.Resource;
        status: service.OperationStatus;
        type: service.OperationType;
    }
    /**
     * Operation type
     * type fullname: service.OperationStatus
     */
    export type OperationStatus = "todo" | "doing" | "done" | "error" | "cancelled" | "waiting" | "scheduled" | "delayed"
    /**
     * Operation type
     * type fullname: service.OperationType
     */
    export type OperationType = "installation" | "upgrade"
    /**
     * Resource service informations
     * interface fullName: service.Resource.Resource
     */
    export interface Resource {
        displayName: string;
        name?: string;
        state?: service.ResourceStateEnum;
    }
    /**
     * Possible resource states
     * type fullname: service.ResourceStateEnum
     */
    export type ResourceStateEnum = "deleted" | "deleting" | "ok" | "opening" | "suspended" | "suspending" | "toDelete" | "toOpen" | "toSuspend"
}

/**
 * END API /me Models
 */
export function proxyMe(ovhEngine: OvhRequestable): Me {
    return buildOvhProxy(ovhEngine, '/me');
}
export default proxyMe;
/**
 * Api model for /me
 */
export interface Me {
    /**
     * Get this object properties
     * GET /me
     */
    $get(): Promise<nichandle.Nichandle>;
    /**
     * Alter this object properties
     * PUT /me
     */
    $put(params?: { address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: nichandle.CountryEnum, currency?: nichandle.Currency, customerCode?: string, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform?: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, nichandle?: string, organisation?: string, ovhCompany?: nichandle.OvhCompanyEnum, ovhSubsidiary?: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, state?: nichandle.StateEnum, vat?: string, zip?: string }): Promise<void>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    accessRestriction: {
        backupCode: {
            /**
             * Delete this Two-Factor
             * DELETE /me/accessRestriction/backupCode
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /me/accessRestriction/backupCode
             */
            $get(): Promise<nichandle.accessRestriction.SOTPAccount>;
            /**
             * Add a SOTP access restriction
             * POST /me/accessRestriction/backupCode
             */
            $post(): Promise<nichandle.accessRestriction.SOTPSecret>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            disable: {
                /**
                 * Disable this SOTP account
                 * POST /me/accessRestriction/backupCode/disable
                 */
                $post(params: { code: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            enable: {
                /**
                 * Enable this SOTP account
                 * POST /me/accessRestriction/backupCode/enable
                 */
                $post(params: { code: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            validate: {
                /**
                 * Validate your SOTP account
                 * POST /me/accessRestriction/backupCode/validate
                 */
                $post(params: { code: string }): Promise<nichandle.accessRestriction.SOTPValidate>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        developerMode: {
            /**
             * Get this object properties
             * GET /me/accessRestriction/developerMode
             */
            $get(): Promise<nichandle.DeveloperModeRestriction>;
            /**
             * Alter this object properties
             * PUT /me/accessRestriction/developerMode
             */
            $put(params?: { enabled?: boolean }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        ip: {
            /**
             * List of IP restrictions
             * GET /me/accessRestriction/ip
             */
            $get(): Promise<number[]>;
            /**
             * Add an IP access restriction
             * POST /me/accessRestriction/ip
             */
            $post(params: { ip: string, rule: nichandle.accessRestriction.IpRestrictionRuleEnum, warning: boolean }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete this restriction rule
                 * DELETE /me/accessRestriction/ip/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /me/accessRestriction/ip/{id}
                 */
                $get(): Promise<nichandle.IpRestriction>;
                /**
                 * Alter this object properties
                 * PUT /me/accessRestriction/ip/{id}
                 */
                $put(params?: { id?: number, ip?: string, rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        ipDefaultRule: {
            /**
             * Get this object properties
             * GET /me/accessRestriction/ipDefaultRule
             */
            $get(): Promise<nichandle.IpRestrictionDefaultRule>;
            /**
             * Alter this object properties
             * PUT /me/accessRestriction/ipDefaultRule
             */
            $put(params?: { rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        sms: {
            /**
             * List of Sms accounts
             * GET /me/accessRestriction/sms
             */
            $get(): Promise<number[]>;
            /**
             * Add a SMS access restriction
             * POST /me/accessRestriction/sms
             */
            $post(params: { phone: string }): Promise<nichandle.accessRestriction.SmsSecret>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete this Two-Factor
                 * DELETE /me/accessRestriction/sms/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /me/accessRestriction/sms/{id}
                 */
                $get(): Promise<nichandle.accessRestriction.SmsAccount>;
                /**
                 * Alter this object properties
                 * PUT /me/accessRestriction/sms/{id}
                 */
                $put(params?: { creationDate?: string, description?: string, id?: number, lastUsedDate?: string, phoneNumber?: string, status?: nichandle.accessRestriction.SmsStatusEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                disable: {
                    /**
                     * Disable this SMS account
                     * POST /me/accessRestriction/sms/{id}/disable
                     */
                    $post(params: { code: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                enable: {
                    /**
                     * Enable this SMS account
                     * POST /me/accessRestriction/sms/{id}/enable
                     */
                    $post(params: { code: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                sendCode: {
                    /**
                     * Send a SMS to this account
                     * POST /me/accessRestriction/sms/{id}/sendCode
                     */
                    $post(): Promise<nichandle.accessRestriction.SmsCode>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                validate: {
                    /**
                     * Validate your SMS account
                     * POST /me/accessRestriction/sms/{id}/validate
                     */
                    $post(params: { code: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        totp: {
            /**
             * List of TOTP accounts
             * GET /me/accessRestriction/totp
             */
            $get(): Promise<number[]>;
            /**
             * Add a TOTP access restriction
             * POST /me/accessRestriction/totp
             */
            $post(): Promise<nichandle.accessRestriction.TOTPSecret>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete this Two-Factor
                 * DELETE /me/accessRestriction/totp/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /me/accessRestriction/totp/{id}
                 */
                $get(): Promise<nichandle.accessRestriction.TOTPAccount>;
                /**
                 * Alter this object properties
                 * PUT /me/accessRestriction/totp/{id}
                 */
                $put(params?: { creationDate?: string, description?: string, id?: number, lastUsedDate?: string, status?: nichandle.accessRestriction.TOTPStatusEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                disable: {
                    /**
                     * Disable this TOTP account
                     * POST /me/accessRestriction/totp/{id}/disable
                     */
                    $post(params: { code: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                enable: {
                    /**
                     * Enable this TOTP account
                     * POST /me/accessRestriction/totp/{id}/enable
                     */
                    $post(params: { code: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                validate: {
                    /**
                     * Validate your TOTP account
                     * POST /me/accessRestriction/totp/{id}/validate
                     */
                    $post(params: { code: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        u2f: {
            /**
             * List of U2F accounts
             * GET /me/accessRestriction/u2f
             */
            $get(): Promise<number[]>;
            /**
             * Add a U2F access restriction
             * POST /me/accessRestriction/u2f
             */
            $post(): Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete this Two-Factor
                 * DELETE /me/accessRestriction/u2f/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /me/accessRestriction/u2f/{id}
                 */
                $get(): Promise<nichandle.accessRestriction.U2FAccount>;
                /**
                 * Alter this object properties
                 * PUT /me/accessRestriction/u2f/{id}
                 */
                $put(params?: { creationDate?: string, description?: string, id?: number, lastUsedDate?: string, status?: nichandle.accessRestriction.U2FStatusEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                challenge: {
                    /**
                     * Get an U2F Challenge
                     * POST /me/accessRestriction/u2f/{id}/challenge
                     */
                    $post(): Promise<nichandle.accessRestriction.U2FSignChallenge>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                disable: {
                    /**
                     * Disable this U2F account
                     * POST /me/accessRestriction/u2f/{id}/disable
                     */
                    $post(params: { clientData: string, signatureData: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                enable: {
                    /**
                     * Enable this U2F account
                     * POST /me/accessRestriction/u2f/{id}/enable
                     */
                    $post(params: { clientData: string, signatureData: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                validate: {
                    /**
                     * Validate your U2F account
                     * POST /me/accessRestriction/u2f/{id}/validate
                     */
                    $post(params: { clientData: string, registrationData: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
    }
    agreements: {
        /**
         * List of contracts signed between you and OVH
         * GET /me/agreements
         */
        $get(params?: { agreed?: agreements.AgreementStateEnum, contractId?: number }): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(id: number): {
            /**
             * Get this object properties
             * GET /me/agreements/{id}
             */
            $get(): Promise<agreements.ContractAgreement>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            accept: {
                /**
                 * Accept this contract
                 * POST /me/agreements/{id}/accept
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            contract: {
                /**
                 * Get this object properties
                 * GET /me/agreements/{id}/contract
                 */
                $get(): Promise<agreements.Contract>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    api: {
        application: {
            /**
             * List of your Api Application
             * GET /me/api/application
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(applicationId: number): {
                /**
                 * Remove this application. It will revoke all credential belonging to this application.
                 * DELETE /me/api/application/{applicationId}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /me/api/application/{applicationId}
                 */
                $get(): Promise<api.Application>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        credential: {
            /**
             * List of your Api Credentials
             * GET /me/api/credential
             */
            $get(params?: { applicationId?: number, status?: auth.CredentialStateEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(credentialId: number): {
                /**
                 * Remove this credential
                 * DELETE /me/api/credential/{credentialId}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /me/api/credential/{credentialId}
                 */
                $get(): Promise<api.Credential>;
                /**
                 * Alter this object properties
                 * PUT /me/api/credential/{credentialId}
                 */
                $put(params?: { allowedIPs?: string[], applicationId?: number, creation?: string, credentialId?: number, expiration?: string, lastUse?: string, ovhSupport?: boolean, rules?: auth.AccessRule[], status?: auth.CredentialStateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                application: {
                    /**
                     * Get this object properties
                     * GET /me/api/credential/{credentialId}/application
                     */
                    $get(): Promise<api.Application>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
    }
    availableAutomaticPaymentMeans: {
        /**
         * List available payment methods in this Nic's country
         * GET /me/availableAutomaticPaymentMeans
         */
        $get(): Promise<billing.AutomaticPaymentMean>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    bill: {
        /**
         * List of all the bills the logged account has
         * GET /me/bill
         */
        $get(params?: { date_from?: string, date_to?: string, orderId?: number }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(billId: string): {
            /**
             * Get this object properties
             * GET /me/bill/{billId}
             */
            $get(): Promise<billing.Invoice>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            debt: {
                /**
                 * Get this object properties
                 * GET /me/bill/{billId}/debt
                 */
                $get(): Promise<balance.InvoicingBalance>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                operation: {
                    /**
                     * All operations related to these debts
                     * GET /me/bill/{billId}/debt/operation
                     */
                    $get(params?: { depositOrderId?: number }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(operationId: number): {
                        /**
                         * Get this object properties
                         * GET /me/bill/{billId}/debt/operation/{operationId}
                         */
                        $get(): Promise<balance.OperationBalance>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        associatedObject: {
                            /**
                             * Return main data about the object related to this operation
                             * GET /me/bill/{billId}/debt/operation/{operationId}/associatedObject
                             */
                            $get(): Promise<debt.entry.AssociatedObject>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            }
            details: {
                /**
                 * Give access to all entries of the bill
                 * GET /me/bill/{billId}/details
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(billDetailId: string): {
                    /**
                     * Get this object properties
                     * GET /me/bill/{billId}/details/{billDetailId}
                     */
                    $get(): Promise<billing.InvoiceDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            download: {
                /**
                 * Generate download link for the document
                 * GET /me/bill/{billId}/download
                 */
                $get(params?: { extension?: billing.DocumentExtensionEnum }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    billing: {
        group: {
            /**
             * Retrieve all billing groups
             * GET /me/billing/group
             */
            $get(params?: { name?: string, serviceId?: number }): Promise<number[]>;
            /**
             * Create a new billing group
             * POST /me/billing/group
             */
            $post(params?: { contactId?: number, creationDate?: string, groupId?: number, lastUpdate?: string, name?: string, paymentMethodId?: number }): Promise<me.billing.group.BillingGroup>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(groupId: number): {
                /**
                 * Delete a billing group
                 * DELETE /me/billing/group/{groupId}
                 */
                $delete(): Promise<void>;
                /**
                 * Retrieve information about a billing group
                 * GET /me/billing/group/{groupId}
                 */
                $get(): Promise<me.billing.group.BillingGroup>;
                /**
                 * Edit billing group
                 * PUT /me/billing/group/{groupId}
                 */
                $put(params?: { contactId?: number, creationDate?: string, groupId?: number, lastUpdate?: string, name?: string, paymentMethodId?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                service: {
                    /**
                     * Retrieve billing group service ID list
                     * GET /me/billing/group/{groupId}/service
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Associate a service to a billing group
                     * POST /me/billing/group/{groupId}/service
                     */
                    $post(params: { serviceId: number }): Promise<me.billing.group.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(serviceId: number): {
                        /**
                         * Unlink a service from a billing group
                         * DELETE /me/billing/group/{groupId}/service/{serviceId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Retrieve information about a billing group service
                         * GET /me/billing/group/{groupId}/service/{serviceId}
                         */
                        $get(): Promise<me.billing.group.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
    }
    certificates: {
        /**
         * Get all certificates of the account
         * GET /me/certificates
         */
        $get(params?: { name?: string }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    changeEmail: {
        /**
         * Initiate an email change procedure
         * POST /me/changeEmail
         */
        $post(params: { newEmail: string }): Promise<nichandle.emailChange.Task>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    changePassword: {
        /**
         * Initiate a password change procedure
         * POST /me/changePassword
         */
        $post(): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    consent: {
        /**
         * List all consent campaign available
         * GET /me/consent
         */
        $get(): Promise<me.consent.Campaign[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(campaignName: string): {
            /**
             * Retrieve information about a consent campaign
             * GET /me/consent/{campaignName}
             */
            $get(): Promise<me.consent.Campaign>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            decision: {
                /**
                 * Get decision value for a consent campaign
                 * GET /me/consent/{campaignName}/decision
                 */
                $get(): Promise<me.consent.Consent>;
                /**
                 * Update decision of a consent campaign
                 * PUT /me/consent/{campaignName}/decision
                 */
                $put(params: { value: boolean }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    consumption: {
        usage: {
            current: {
                /**
                 * Get on-going consumptions for all services
                 * GET /me/consumption/usage/current
                 */
                $get(): Promise<me.consumption.Transaction[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            forecast: {
                /**
                 * Get forecasted consumptions for all services
                 * GET /me/consumption/usage/forecast
                 */
                $get(): Promise<me.consumption.Transaction[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            history: {
                /**
                 * Get list of transactions between two dates
                 * GET /me/consumption/usage/history
                 */
                $get(params: { beginDate: string, endDate: string }): Promise<me.consumption.Transaction[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
    }
    contact: {
        /**
         * Retrieve all contact that you created
         * GET /me/contact
         */
        $get(): Promise<number[]>;
        /**
         * Create a new contact
         * POST /me/contact
         */
        $post(params: { address: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email: string, fax?: string, firstName: string, gender?: nichandle.GenderEnum, language: nichandle.LanguageEnum, lastName: string, legalForm: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone: string, vat?: string }): Promise<contact.Contact>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(contactId: number): {
            /**
             * Retrieve information about a contact
             * GET /me/contact/{contactId}
             */
            $get(): Promise<contact.Contact>;
            /**
             * Update an existing contact
             * PUT /me/contact/{contactId}
             */
            $put(params?: { address?: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, vat?: string }): Promise<contact.Contact>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            fields: {
                /**
                 * Display mandatory/read-only informations of a contact
                 * GET /me/contact/{contactId}/fields
                 */
                $get(): Promise<contact.FieldInformation[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    credit: {
        balance: {
            /**
             * Retrieve all credit balances
             * GET /me/credit/balance
             */
            $get(params?: { type?: me.credit.balance.TypeEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(balanceName: string): {
                /**
                 * Retrieve a credit balance
                 * GET /me/credit/balance/{balanceName}
                 */
                $get(): Promise<me.credit.Balance>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                movement: {
                    /**
                     * Retrieve movements for a specific balance
                     * GET /me/credit/balance/{balanceName}/movement
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(movementId: number): {
                        /**
                         * Retrieve a specific movement for a credit balance
                         * GET /me/credit/balance/{balanceName}/movement/{movementId}
                         */
                        $get(): Promise<me.credit.balance.Movement>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        code: {
            /**
             * Validate a code to generate associated credit movement
             * POST /me/credit/code
             */
            $post(params: { inputCode: string, serviceId?: number }): Promise<me.credit.balance.Movement>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    debtAccount: {
        /**
         * Get this object properties
         * GET /me/debtAccount
         */
        $get(): Promise<balance.CustomerBalance>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        debt: {
            /**
             * All debts related to your account
             * GET /me/debtAccount/debt
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(debtId: number): {
                /**
                 * Get this object properties
                 * GET /me/debtAccount/debt/{debtId}
                 */
                $get(): Promise<balance.InvoicingBalance>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                operation: {
                    /**
                     * All operations related to these debts
                     * GET /me/debtAccount/debt/{debtId}/operation
                     */
                    $get(params?: { depositOrderId?: number }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(operationId: number): {
                        /**
                         * Get this object properties
                         * GET /me/debtAccount/debt/{debtId}/operation/{operationId}
                         */
                        $get(): Promise<balance.OperationBalance>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        associatedObject: {
                            /**
                             * Return main data about the object related to this operation
                             * GET /me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject
                             */
                            $get(): Promise<debt.entry.AssociatedObject>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        pay: {
            /**
             * Create an order in order to pay selected invoices
             * POST /me/debtAccount/pay
             */
            $post(params?: { orderIds?: number[], paymentMethodId?: number }): Promise<billing.InvoiceDepositRequest>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    deposit: {
        /**
         * List of all the deposits made to your prepaid account or debt account
         * GET /me/deposit
         */
        $get(params?: { date_from?: string, date_to?: string, orderId?: number }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(depositId: string): {
            /**
             * Get this object properties
             * GET /me/deposit/{depositId}
             */
            $get(): Promise<billing.InvoiceDeposit>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            download: {
                /**
                 * Generate download link for the pdf document
                 * GET /me/deposit/{depositId}/download
                 */
                $get(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            paidBills: {
                /**
                 * Get invoices paid by this deposit
                 * GET /me/deposit/{depositId}/paidBills
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(billId: string): {
                    /**
                     * Get this object properties
                     * GET /me/deposit/{depositId}/paidBills/{billId}
                     */
                    $get(): Promise<billing.Invoice>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    debt: {
                        /**
                         * Get this object properties
                         * GET /me/deposit/{depositId}/paidBills/{billId}/debt
                         */
                        $get(): Promise<balance.InvoicingBalance>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        operation: {
                            /**
                             * All operations related to these debts
                             * GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation
                             */
                            $get(params?: { depositOrderId?: number }): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(operationId: number): {
                                /**
                                 * Get this object properties
                                 * GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}
                                 */
                                $get(): Promise<balance.OperationBalance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                associatedObject: {
                                    /**
                                     * Return main data about the object related to this operation
                                     * GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject
                                     */
                                    $get(): Promise<debt.entry.AssociatedObject>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                }
                            };
                        }
                    }
                    details: {
                        /**
                         * Give access to all entries of the bill
                         * GET /me/deposit/{depositId}/paidBills/{billId}/details
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(billDetailId: string): {
                            /**
                             * Get this object properties
                             * GET /me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}
                             */
                            $get(): Promise<billing.InvoiceDetail>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    download: {
                        /**
                         * Generate download link for the document
                         * GET /me/deposit/{depositId}/paidBills/{billId}/download
                         */
                        $get(params?: { extension?: billing.DocumentExtensionEnum }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
        };
    }
    depositRequest: {
        /**
         * List of all the deposit requests made
         * GET /me/depositRequest
         */
        $get(params?: { creationDate_from?: string, creationDate_to?: string }): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(id: number): {
            /**
             * Get this object properties
             * GET /me/depositRequest/{id}
             */
            $get(): Promise<billing.InvoiceDepositRequest>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    fidelityAccount: {
        /**
         * Get this object properties
         * GET /me/fidelityAccount
         */
        $get(): Promise<billing.FidelityAccount>;
        /**
         * Alter this object properties
         * PUT /me/fidelityAccount
         */
        $put(params?: { alertThreshold?: number, balance?: number, canBeCredited?: boolean, lastUpdate?: string, openDate?: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        creditOrder: {
            /**
             * Generate an order that can be paid in order to credit the fidelity account
             * POST /me/fidelityAccount/creditOrder
             */
            $post(params: { amount: number }): Promise<billing.Order>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        movements: {
            /**
             * List of entries of the fidelity account
             * GET /me/fidelityAccount/movements
             */
            $get(params?: { date_from?: string, date_to?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(movementId: number): {
                /**
                 * Get this object properties
                 * GET /me/fidelityAccount/movements/{movementId}
                 */
                $get(): Promise<billing.FidelityMovement>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
    geolocation: {
        /**
         * Fetch visitor country & region
         * POST /me/geolocation
         */
        $post(): Promise<geolocation.ContinentCountryLocation>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    identity: {
        group: {
            /**
             * Retrieve all groups of this account
             * GET /me/identity/group
             */
            $get(): Promise<string[]>;
            /**
             * Create a new group
             * POST /me/identity/group
             */
            $post(params: { description?: string, name: string, role?: nichandle.RoleEnum }): Promise<nichandle.Authentication.Group>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(group: string): {
                /**
                 * Delete this object
                 * DELETE /me/identity/group/{group}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /me/identity/group/{group}
                 */
                $get(): Promise<nichandle.Authentication.Group>;
                /**
                 * Alter a group
                 * PUT /me/identity/group/{group}
                 */
                $put(params?: { description?: string, role?: nichandle.RoleEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        user: {
            /**
             * Retrieve all users of this account
             * GET /me/identity/user
             */
            $get(): Promise<string[]>;
            /**
             * Create a new user
             * POST /me/identity/user
             */
            $post(params: { description?: string, email: string, group?: string, login: string, password: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(user: string): {
                /**
                 * Delete this object
                 * DELETE /me/identity/user/{user}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /me/identity/user/{user}
                 */
                $get(): Promise<nichandle.User>;
                /**
                 * Alter a user
                 * PUT /me/identity/user/{user}
                 */
                $put(params?: { description?: string, email?: string, group?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                disable: {
                    /**
                     * Disable this user
                     * POST /me/identity/user/{user}/disable
                     */
                    $post(): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                enable: {
                    /**
                     * Enable this user
                     * POST /me/identity/user/{user}/enable
                     */
                    $post(): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
    }
    installationTemplate: {
        /**
         * Your customized operating system installation templates
         * GET /me/installationTemplate
         */
        $get(): Promise<string[]>;
        /**
         * Create a template
         * POST /me/installationTemplate
         */
        $post(params: { baseTemplateName: string, defaultLanguage: dedicated.TemplateOsLanguageEnum, name: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(templateName: string): {
            /**
             * remove this template
             * DELETE /me/installationTemplate/{templateName}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /me/installationTemplate/{templateName}
             */
            $get(): Promise<dedicated.installationTemplate.Templates>;
            /**
             * Alter this object properties
             * PUT /me/installationTemplate/{templateName}
             */
            $put(params?: { availableLanguages?: dedicated.TemplateOsLanguageEnum[], beta?: boolean, bitFormat?: dedicated.server.BitFormatEnum, category?: dedicated.TemplateOsUsageEnum, customization?: dedicated.TemplateOsProperties, defaultLanguage?: dedicated.TemplateOsLanguageEnum, deprecated?: boolean, description?: string, distribution?: string, family?: dedicated.TemplateOsTypeEnum, filesystems?: dedicated.TemplateOsFileSystemEnum[], hardRaidConfiguration?: boolean, lastModification?: string, lvmReady?: boolean, supportsDistributionKernel?: boolean, supportsGptLabel?: boolean, supportsRTM?: boolean, supportsSqlServer?: boolean, supportsUEFI?: dedicated.server.SupportsUEFIEnum, templateName?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            checkIntegrity: {
                /**
                 * Check the integrity of this template
                 * POST /me/installationTemplate/{templateName}/checkIntegrity
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            partitionScheme: {
                /**
                 * Partitioning schemes available on this template
                 * GET /me/installationTemplate/{templateName}/partitionScheme
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a scheme of partition
                 * POST /me/installationTemplate/{templateName}/partitionScheme
                 */
                $post(params: { name: string, priority: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(schemeName: string): {
                    /**
                     * remove this scheme of partition
                     * DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                     */
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    /**
                     * Alter this object properties
                     * PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                     */
                    $put(params?: { name?: string, priority?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    hardwareRaid: {
                        /**
                         * Hardware RAIDs defined in this partitioning scheme
                         * GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add an hardware RAID in this partitioning scheme
                         * POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                         */
                        $post(params: { disks: string[], mode: dedicated.TemplateOsHardwareRaidEnum, name: string, step: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(name: string): {
                            /**
                             * Remove this RAID
                             * DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                             */
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                            /**
                             * Alter this object properties
                             * PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                             */
                            $put(params?: { disks?: string[], mode?: dedicated.TemplateOsHardwareRaidEnum, name?: string, step?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    partition: {
                        /**
                         * Partitions defined in this partitioning scheme
                         * GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add a partition in this partitioning scheme
                         * POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                         */
                        $post(params: { filesystem: dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: number, size: number, step: number, type: dedicated.TemplatePartitionTypeEnum, volumeName?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(mountpoint: string): {
                            /**
                             * remove this partition
                             * DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                             */
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                            /**
                             * Alter this object properties
                             * PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                             */
                            $put(params?: { filesystem?: dedicated.TemplateOsFileSystemEnum, mountpoint?: string, order?: number, raid?: dedicated.server.PartitionRaidEnum, size?: complexType.UnitAndValue<number>, type?: dedicated.TemplatePartitionTypeEnum, volumeName?: string }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
        };
    }
    ipOrganisation: {
        /**
         * List of organisations
         * GET /me/ipOrganisation
         */
        $get(): Promise<string[]>;
        /**
         * Add an organisation
         * POST /me/ipOrganisation
         */
        $post(params: { abuse_mailbox: string, address: string, city: string, country: nichandle.CountryEnum, firstname: string, lastname: string, phone: string, registry: nichandle.IpRegistryEnum, state?: string, zip?: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(organisationId: string): {
            /**
             * Delete this organisation
             * DELETE /me/ipOrganisation/{organisationId}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /me/ipOrganisation/{organisationId}
             */
            $get(): Promise<nichandle.Ipv4Org>;
            /**
             * Alter this object properties
             * PUT /me/ipOrganisation/{organisationId}
             */
            $put(params?: { abuse_mailbox?: string, address?: string, city?: string, country?: nichandle.CountryEnum, firstname?: string, lastname?: string, organisationId?: string, phone?: string, registry?: nichandle.IpRegistryEnum, state?: string, zip?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    ipxeScript: {
        /**
         * List of all your IPXE scripts
         * GET /me/ipxeScript
         */
        $get(): Promise<string[]>;
        /**
         * Add an IPXE script
         * POST /me/ipxeScript
         */
        $post(params: { description: string, name: string, script: string }): Promise<nichandle.ipxe>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(name: string): {
            /**
             * Remove this IPXE Script
             * DELETE /me/ipxeScript/{name}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /me/ipxeScript/{name}
             */
            $get(): Promise<nichandle.ipxe>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    order: {
        /**
         * Retrieve order list
         * GET /me/order
         */
        $get(): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(orderId: number): {
            /**
             * Retrieve an order
             * GET /me/order/{orderId}
             */
            $get(): Promise<billing.Order>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            associatedObject: {
                /**
                 * Return data about the object associated to the order
                 * GET /me/order/{orderId}/associatedObject
                 */
                $get(): Promise<billing.order.AssociatedObject>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            availablePaymentMethod: {
                /**
                 * List of payment methods you can use to pay this order
                 * GET /me/order/{orderId}/availablePaymentMethod
                 */
                $get(): Promise<billing.order.AvailablePaymentMethod[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            availableRegisteredPaymentMean: {
                /**
                 * List of registered payment mean you can use to pay this order
                 * GET /me/order/{orderId}/availableRegisteredPaymentMean
                 */
                $get(): Promise<billing.order.RegisteredPaymentMean[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            balance: {
                /**
                 * List credit balances applied on this Order
                 * GET /me/order/{orderId}/balance
                 */
                $get(): Promise<number[]>;
                /**
                 * Use a credit balance on this Order
                 * POST /me/order/{orderId}/balance
                 */
                $post(params: { balanceName: string }): Promise<billing.order.credit.Balance>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(balanceName: string): {
                    /**
                     * Remove a credit balance from this Order
                     * DELETE /me/order/{orderId}/balance/{balanceName}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Retrieve Credit applied on this Order
                     * GET /me/order/{orderId}/balance/{balanceName}
                     */
                    $get(): Promise<billing.order.credit.Balance>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            details: {
                /**
                 * Retrieve details of an order
                 * GET /me/order/{orderId}/details
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(detailId: number): {
                    /**
                     * Retrieve an order detail
                     * GET /me/order/{orderId}/details/{detailId}
                     */
                    $get(): Promise<billing.OrderDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    extension: {
                        /**
                         * Retrieve an order detail extensions
                         * GET /me/order/{orderId}/details/{detailId}/extension
                         */
                        $get(): Promise<billing.ItemDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    operations: {
                        /**
                         * Retrieve a list of operations linked to this order detail
                         * GET /me/order/{orderId}/details/{detailId}/operations
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(operationId: number): {
                            /**
                             * Retrieve a list of operations linked to this order detail
                             * GET /me/order/{orderId}/details/{detailId}/operations/{operationId}
                             */
                            $get(): Promise<service.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            followUp: {
                /**
                 * Return tracking of the order
                 * GET /me/order/{orderId}/followUp
                 */
                $get(): Promise<billing.order.FollowUp[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            pay: {
                /**
                 * Pay this Order
                 * POST /me/order/{orderId}/pay
                 */
                $post(params: { paymentMethod: billing.order.AvailablePaymentMethod }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            payWithRegisteredPaymentMean: {
                /**
                 * Pay with an already registered payment mean
                 * POST /me/order/{orderId}/payWithRegisteredPaymentMean
                 */
                $post(params: { paymentMean: billing.paymentMethod.PaymentTypeEnum, paymentMeanId?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            paymentMethods: {
                /**
                 * List of registered payment method you can use to pay this order
                 * GET /me/order/{orderId}/paymentMethods
                 */
                $get(): Promise<billing.order.PaymentMethods>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            retraction: {
                /**
                 * Request retraction of order
                 * POST /me/order/{orderId}/retraction
                 */
                $post(params: { comment?: string, reason: billing.order.RetractionReasonEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            status: {
                /**
                 * Return status of order
                 * GET /me/order/{orderId}/status
                 */
                $get(): Promise<billing.order.OrderStatusEnum>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            voucher: {
                /**
                 * List vouchers applied on this Order
                 * GET /me/order/{orderId}/voucher
                 */
                $get(): Promise<number[]>;
                /**
                 * Use a Voucher on this Order
                 * POST /me/order/{orderId}/voucher
                 */
                $post(params: { balanceName: string }): Promise<billing.order.OrderVoucher>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(balanceName: string): {
                    /**
                     * Remove Voucher from this Order
                     * DELETE /me/order/{orderId}/voucher/{balanceName}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Retrieve Voucher applied on this Order
                     * GET /me/order/{orderId}/voucher/{balanceName}
                     */
                    $get(): Promise<billing.order.OrderVoucher>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
    passwordRecover: {
        /**
         * Request a password recover
         * POST /me/passwordRecover
         */
        $post(params: { ovhCompany: nichandle.OvhCompanyEnum, ovhId: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    payment: {
        availableMethods: {
            /**
             * Retrieve available payment method
             * GET /me/payment/availableMethods
             */
            $get(): Promise<me.payment.method.AvailablePaymentMethod[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        method: {
            /**
             * Retrieve payment method ID list
             * GET /me/payment/method
             */
            $get(params?: { paymentType?: string, status?: me.payment.method.PaymentMethod.Status }): Promise<number[]>;
            /**
             * Pay an order and register a new payment method if necessary
             * POST /me/payment/method
             */
            $post(params: { callbackUrl: me.payment.method.CallbackUrl, default_?: boolean, description?: string, orderId?: number, paymentType: string, register?: boolean }): Promise<me.payment.method.Register.ValidationResult>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(paymentMethodId: number): {
                /**
                 * Cancel one payment method
                 * DELETE /me/payment/method/{paymentMethodId}
                 */
                $delete(): Promise<me.payment.method.PaymentMethod>;
                /**
                 * Get one payment method
                 * GET /me/payment/method/{paymentMethodId}
                 */
                $get(): Promise<me.payment.method.PaymentMethod>;
                /**
                 * Edit payment method
                 * PUT /me/payment/method/{paymentMethodId}
                 */
                $put(params?: { default_?: boolean, description?: string }): Promise<billing.PaymentMethod>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                challenge: {
                    /**
                     * Challenge one payment method
                     * POST /me/payment/method/{paymentMethodId}/challenge
                     */
                    $post(params: { challenge: string }): Promise<me.payment.method.PaymentMethod>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                finalize: {
                    /**
                     * Finalize one payment method registration
                     * POST /me/payment/method/{paymentMethodId}/finalize
                     */
                    $post(params?: { expirationMonth?: number, expirationYear?: number, formSessionId?: string, registrationId?: string }): Promise<me.payment.method.PaymentMethod>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        transaction: {
            /**
             * Retrieve associated payment method transaction ID list
             * GET /me/payment/transaction
             */
            $get(params?: { paymentMethodId?: number, status?: me.payment.method.Transaction.Status }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(transactionId: number): {
                /**
                 * Get associated payment method transaction
                 * GET /me/payment/transaction/{transactionId}
                 */
                $get(): Promise<me.payment.method.Transaction>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
    paymentMethod: {
        /**
         * Retrieve payment method id list
         * GET /me/paymentMethod
         */
        $get(params?: { paymentType?: billing.paymentMethod.PaymentTypeEnum, status?: billing.paymentMethod.StatusEnum }): Promise<number[]>;
        /**
         * Create payment method
         * POST /me/paymentMethod
         */
        $post(params: { billingContactId?: number, default_?: boolean, description?: string, paymentType: billing.paymentMethod.CreatePaymentTypeEnum, urlCallback?: string }): Promise<billing.PaymentMeanValidation>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(id: number): {
            /**
             * Delete the selected payment mean
             * DELETE /me/paymentMethod/{id}
             */
            $delete(): Promise<void>;
            /**
             * Get one payment method
             * GET /me/paymentMethod/{id}
             */
            $get(): Promise<billing.PaymentMethod>;
            /**
             * Edit payment method
             * PUT /me/paymentMethod/{id}
             */
            $put(params?: { default_?: boolean, description?: string }): Promise<billing.PaymentMethod>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    refund: {
        /**
         * List of all the refunds the logged account has
         * GET /me/refund
         */
        $get(params?: { date_from?: string, date_to?: string, orderId?: number }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(refundId: string): {
            /**
             * Get this object properties
             * GET /me/refund/{refundId}
             */
            $get(): Promise<billing.InvoiceRefund>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            details: {
                /**
                 * Give access to all entries of the refund
                 * GET /me/refund/{refundId}/details
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(refundDetailId: string): {
                    /**
                     * Get this object properties
                     * GET /me/refund/{refundId}/details/{refundDetailId}
                     */
                    $get(): Promise<billing.InvoiceRefundDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            download: {
                /**
                 * Generate download link for the document
                 * GET /me/refund/{refundId}/download
                 */
                $get(params?: { extension?: billing.DocumentExtensionEnum }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    sla: {
        /**
         * List active SLA
         * GET /me/sla
         */
        $get(): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(id: number): {
            /**
             * Get this object properties
             * GET /me/sla/{id}
             */
            $get(): Promise<billing.SlaOperation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            apply: {
                /**
                 * Ask for SLA application
                 * POST /me/sla/{id}/apply
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            canBeApplied: {
                /**
                 * Check whether this SLA can be applied on your services
                 * GET /me/sla/{id}/canBeApplied
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            services: {
                /**
                 * Get services impacted by this SLA
                 * GET /me/sla/{id}/services
                 */
                $get(): Promise<billing.SlaOperationService[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            status: {
                /**
                 * Get the status request of this SLA
                 * GET /me/sla/{id}/status
                 */
                $get(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    sshKey: {
        /**
         * List of your public SSH keys
         * GET /me/sshKey
         */
        $get(): Promise<string[]>;
        /**
         * Add a new public SSH key
         * POST /me/sshKey
         */
        $post(params: { key: string, keyName: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(keyName: string): {
            /**
             * Remove this public SSH key
             * DELETE /me/sshKey/{keyName}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /me/sshKey/{keyName}
             */
            $get(): Promise<nichandle.sshKey>;
            /**
             * Alter this object properties
             * PUT /me/sshKey/{keyName}
             */
            $put(params?: { default_?: boolean, key?: string, keyName?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    subAccount: {
        /**
         * List of sub-accounts
         * GET /me/subAccount
         */
        $get(): Promise<number[]>;
        /**
         * Create a new sub-account
         * POST /me/subAccount
         */
        $post(params?: { description?: string }): Promise<number>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(id: number): {
            /**
             * Get this object properties
             * GET /me/subAccount/{id}
             */
            $get(): Promise<nichandle.SubAccount>;
            /**
             * Alter this object properties
             * PUT /me/subAccount/{id}
             */
            $put(params?: { creationDate?: string, description?: string, id?: number }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            createConsumerKey: {
                /**
                 * Create a consumer key for the current application
                 * POST /me/subAccount/{id}/createConsumerKey
                 */
                $post(): Promise<nichandle.SubAccountConsumerKey>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    task: {
        emailChange: {
            /**
             * List of email change tasks you are involved in
             * GET /me/task/emailChange
             */
            $get(params?: { state?: nichandle.changeEmail.TaskStateEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /me/task/emailChange/{id}
                 */
                $get(): Promise<nichandle.emailChange.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                accept: {
                    /**
                     * Accept this change request
                     * POST /me/task/emailChange/{id}/accept
                     */
                    $post(params: { token: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                refuse: {
                    /**
                     * Refuse this change request
                     * POST /me/task/emailChange/{id}/refuse
                     */
                    $post(params: { token: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
    }
    vipStatus: {
        /**
         * VIP Status of this account
         * GET /me/vipStatus
         */
        $get(): Promise<nichandle.VipStatus>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    voucher: {
        checkValidity: {
            /**
             * Verify existing voucher
             * POST /me/voucher/checkValidity
             */
            $post(params: { voucher: string }): Promise<nichandle.VoucherStatus>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    withdrawal: {
        /**
         * List of all the withdrawals made from your prepaid account
         * GET /me/withdrawal
         */
        $get(params?: { date_from?: string, date_to?: string, orderId?: number }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(withdrawalId: string): {
            /**
             * Get this object properties
             * GET /me/withdrawal/{withdrawalId}
             */
            $get(): Promise<billing.InvoiceWithdrawal>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            download: {
                /**
                 * Generate download link for the pdf document
                 * GET /me/withdrawal/{withdrawalId}/download
                 */
                $get(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type orderPrice = order.Price;
type paymentmethodIntegrationType = payment.method.IntegrationType;

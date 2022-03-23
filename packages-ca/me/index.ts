import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /me Models
 * Source: https://ca.api.ovh.com/1.0/me.json
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
export namespace audit {
    /**
     * An audit Log
     * interface fullName: audit.Log.Log
     */
    export interface Log {
        authDetails?: audit.LogAuthDetails;
        createdAt: string;
        ip?: string;
        loginSuccessDetails?: audit.LogLoginSuccessDetails;
        type: audit.LogTypeEnum;
    }
    /**
     * Authentication details
     * interface fullName: audit.LogAuthDetails.LogAuthDetails
     */
    export interface LogAuthDetails {
        userDetails: audit.LogAuthUserDetails;
    }
    /**
     * Authentication MFA type
     * type fullname: audit.LogAuthMFATypeEnum
     */
    export type LogAuthMFATypeEnum = "BACKUP_CODE" | "MAIL" | "NONE" | "SMS" | "TOTP" | "U2F" | "UNKNOWN"
    /**
     * Authenticated user details
     * interface fullName: audit.LogAuthUserDetails.LogAuthUserDetails
     */
    export interface LogAuthUserDetails {
        type: audit.LogAuthUserTypeEnum;
        user?: string;
    }
    /**
     * Authentication type
     * type fullname: audit.LogAuthUserTypeEnum
     */
    export type LogAuthUserTypeEnum = "ACCOUNT" | "PROVIDER" | "USER"
    /**
     * specific fields for LOGIN_SUCCESS events
     * interface fullName: audit.LogLoginSuccessDetails.LogLoginSuccessDetails
     */
    export interface LogLoginSuccessDetails {
        mfaType?: audit.LogAuthMFATypeEnum;
        userAgent: string;
    }
    /**
     * Audit event type
     * type fullname: audit.LogTypeEnum
     */
    export type LogTypeEnum = "LOGIN_SUCCESS"
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
export namespace billing {
    /**
     * List of available archive types
     * type fullname: billing.ArchiveTypeEnum
     */
    export type ArchiveTypeEnum = "csv" | "zip"
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
     * Details about a Bill
     * interface fullName: billing.Bill.Bill
     */
    export interface Bill {
        billId: string;
        category: billing.CategoryEnum;
        date: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        priceWithTax: orderPrice;
        priceWithoutTax: orderPrice;
        tax: orderPrice;
        url: string;
    }
    /**
     * Information about a Bill entry
     * interface fullName: billing.BillDetail.BillDetail
     */
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
    /**
     * Types of plans
     * type fullname: billing.CategoryEnum
     */
    export type CategoryEnum = "autorenew" | "earlyrenewal" | "purchase" | "purchase-cloud" | "purchase-servers" | "purchase-telecom" | "purchase-web"
    /**
     * Credit balance applied on an Order
     * interface fullName: billing.CreditBalance.CreditBalance
     */
    export interface CreditBalance {
        amount: orderPrice;
        balanceName: string;
    }
    /**
     * Details about a deposit
     * interface fullName: billing.Deposit.Deposit
     */
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
    /**
     * Information about a Deposit entry
     * interface fullName: billing.DepositDetail.DepositDetail
     */
    export interface DepositDetail {
        depositDetailId: string;
        description: string;
        domain: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
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
            type?: billing.ItemDetail.OrderDetailTypeEnum;
        }
        /**
         * List of order actions
         * type fullname: billing.ItemDetail.OrderActionEnum
         */
        export type OrderActionEnum = "consumption" | "detach" | "installation" | "renew" | "revert" | "upgrade"
        /**
         * Configuration of order
         * interface fullName: billing.ItemDetail.OrderConfiguration.OrderConfiguration
         */
        export interface OrderConfiguration {
            label: string;
            value: string;
        }
        /**
         * List of order detail types
         * type fullname: billing.ItemDetail.OrderDetailTypeEnum
         */
        export type OrderDetailTypeEnum = "plan" | "product"
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
     * Details about an OVH account
     * interface fullName: billing.Movement.Movement
     */
    export interface Movement {
        amount: orderPrice;
        balance: orderPrice;
        date: string;
        description: string;
        movementId: number;
        operation: billing.ovhAccount.OperationEnum;
        order: number;
        previousBalance: orderPrice;
        retrievableAmount: orderPrice;
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
        detailType?: orderOrderDetailTypeEnum;
        domain: string;
        orderDetailId: number;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    /**
     * Details about an OVH account
     * interface fullName: billing.OvhAccount.OvhAccount
     */
    export interface OvhAccount {
        alertThreshold?: number;
        balance: orderPrice;
        canBeCredited: boolean;
        isActive: boolean;
        lastUpdate: string;
        openDate: string;
        ovhAccountId: string;
    }
    /**
     * Details about a payment
     * interface fullName: billing.Payment.Payment
     */
    export interface Payment {
        paymentDate: string;
        paymentIdentifier?: string;
        paymentType: billing.PaymentMeanEnum;
    }
    /**
     * All payment means you might have use on an OVH order
     * type fullname: billing.PaymentMeanEnum
     */
    export type PaymentMeanEnum = "cash" | "chargeback" | "cheque" | "creditAccount" | "creditCard" | "debtAccount" | "deposit" | "digitalLaunchPad" | "edinar" | "fidelityPoints" | "free" | "ideal" | "incubatorAccount" | "mandat" | "multibanco" | "none" | "ovhAccount" | "paymentMandate" | "paypal" | "payu" | "platnosci" | "refund" | "transfer" | "withdrawal"
    /**
     * Details about a Refund
     * interface fullName: billing.Refund.Refund
     */
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
    /**
     * Information about a Bill entry
     * interface fullName: billing.RefundDetail.RefundDetail
     */
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
    /**
     * Reusable payment mean type
     * type fullname: billing.ReusablePaymentMeanEnum
     */
    export type ReusablePaymentMeanEnum = "CREDIT_CARD" | "CURRENT_ACCOUNT" | "DEFERRED_PAYMENT_ACCOUNT" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL" | "bankAccount" | "creditCard" | "deferredPaymentAccount" | "fidelityAccount" | "ovhAccount" | "paypal"
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
    /**
     * Details about a withdrawal
     * interface fullName: billing.Withdrawal.Withdrawal
     */
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
    /**
     * Information about a Withdrawal entry
     * interface fullName: billing.WithdrawalDetail.WithdrawalDetail
     */
    export interface WithdrawalDetail {
        description: string;
        domain: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
        withdrawalDetailId: string;
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
                destinationObject?: billing.credit.balance.movement.SubObject;
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
         * All data needed to use a payment mean
         * interface fullName: billing.order.AvailablePaymentMean.AvailablePaymentMean
         */
        export interface AvailablePaymentMean {
            fields?: billing.order.AvailablePaymentMeanField[];
            integration: billing.order.PaymentMeanIntegrationEnum;
            name: string;
            url?: string;
        }
        /**
         * All fields needed for a payment mean integration
         * interface fullName: billing.order.AvailablePaymentMeanField.AvailablePaymentMeanField
         */
        export interface AvailablePaymentMeanField {
            key: string;
            options?: string[];
            type: billing.order.PaymentMeanFieldTypeEnum;
            value?: string;
        }
        /**
         * Detailed consumption's retrieval information
         * interface fullName: billing.order.ConsumptionDetails.ConsumptionDetails
         */
        export interface ConsumptionDetails {
            fileFormat?: consumption.ConsumptionExportFormatsEnum;
            fileURL?: string;
            message?: string;
            taskId: number;
            taskStatus: consumption.ConsumptionExportTaskStatusEnum;
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
         * All possible order status
         * type fullname: billing.order.OrderStatusEnum
         */
        export type OrderStatusEnum = "cancelled" | "cancelling" | "checking" | "delivered" | "delivering" | "documentsRequested" | "notPaid" | "unknown"
        /**
         * Pay with payment method parameter
         * interface fullName: billing.order.PayWithPaymentMethod.PayWithPaymentMethod
         */
        export interface PayWithPaymentMethod {
            id: number;
        }
        /**
         * All data needed to use a payment mean
         * interface fullName: billing.order.PaymentMean.PaymentMean
         */
        export interface PaymentMean {
            fee: number;
            htmlForm?: string;
            httpMethod: string;
            logo?: string;
            parameters: billing.order.paymentMean.HttpParameter[];
            subType?: string;
            url: string;
        }
        /**
         * Field type of a payment mean
         * type fullname: billing.order.PaymentMeanFieldTypeEnum
         */
        export type PaymentMeanFieldTypeEnum = "hidden" | "select" | "text"
        /**
         * Integration payment mean type
         * type fullname: billing.order.PaymentMeanIntegrationEnum
         */
        export type PaymentMeanIntegrationEnum = "GET_FORM" | "POST_FORM" | "REDIRECT"
        /**
         * TODO
         * interface fullName: billing.order.PaymentMeans.PaymentMeans
         */
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
        export namespace paymentMean {
            /**
             * Parameter to give to a payment page
             * interface fullName: billing.order.paymentMean.HttpParameter.HttpParameter
             */
            export interface HttpParameter {
                choice?: billing.order.paymentMean.HttpParameterChoice[];
                name: string;
                value?: string;
            }
            /**
             * Choice for an HTTP multi value parameter
             * interface fullName: billing.order.paymentMean.HttpParameterChoice.HttpParameterChoice
             */
            export interface HttpParameterChoice {
                name: string;
                value: string;
            }
        }
    }
    export namespace ovhAccount {
        /**
         * Operations an OVH account movement can represent
         * type fullname: billing.ovhAccount.OperationEnum
         */
        export type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
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
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValue.SafeKeyValue
     */
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace consumption {
    /**
     * Export file format
     * type fullname: consumption.ConsumptionExportFormatsEnum
     */
    export type ConsumptionExportFormatsEnum = "csv"
    /**
     * Export task status
     * type fullname: consumption.ConsumptionExportTaskStatusEnum
     */
    export type ConsumptionExportTaskStatusEnum = "DOING" | "DONE" | "ERROR" | "TODO"
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
export namespace debt {
    /**
     * Debt balance of the account
     * interface fullName: debt.Balance.Balance
     */
    export interface Balance {
        active: boolean;
        dueAmount: orderPrice;
        pendingAmount: orderPrice;
        todoAmount: orderPrice;
        unmaturedAmount: orderPrice;
    }
    /**
     * State of a debt
     * interface fullName: debt.Debt.Debt
     */
    export interface Debt {
        amount: orderPrice;
        date: string;
        debtId: number;
        dueAmount: orderPrice;
        dueDate?: string;
        orderId: number;
        pendingAmount: orderPrice;
        status: debt.entry.StatusDebtOrderEnum;
        todoAmount: orderPrice;
        unmaturedAmount: orderPrice;
    }
    /**
     * Operation that happend on a debt
     * interface fullName: debt.Operation.Operation
     */
    export interface Operation {
        amount: orderPrice;
        date: string;
        depositOrderId: number;
        operationId: number;
        status: debt.entry.StatusEnum;
        type?: debt.entry.OperationEnum;
    }
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
        export type OperationEnum = "CANCEL" | "CASH_MANUAL" | "CHECK_MANUAL" | "CREDITCARD" | "CREDITCARD_AUTOMATIC" | "CREDITCARD_MANUAL" | "CREDIT_ACCOUNT_AUTOMATIC" | "EDINAR_MANUAL" | "IDEAL_AUTOMATIC" | "IDEAL_MANUAL" | "MULTIBANCO_AUTOMATIC" | "MULTIBANCO_MANUAL" | "ORDER" | "PAYPAL_AUTOMATIC" | "PAYPAL_MANUAL" | "PAYU_AUTOMATIC" | "PAYU_MANUAL" | "RECOVERY_TRANSFER_AUTOMATIC" | "REFUND" | "REFUND_CHECK" | "REFUND_CREDITCARD" | "REFUND_CREDIT_ACCOUNT" | "REFUND_IDEAL" | "REFUND_LOSS" | "REFUND_MULTIBANCO" | "REFUND_PAYPAL" | "REFUND_PAYU" | "REFUND_SEPA" | "REFUND_TRANSFER" | "REFUND_UNKNOWN" | "SEPA_AUTOMATIC" | "TRANSFER_MANUAL" | "UNPAID_CHECK" | "UNPAID_CREDITCARD" | "UNPAID_CREDIT_ACCOUNT" | "UNPAID_IDEAL" | "UNPAID_MULTIBANCO" | "UNPAID_PAYPAL" | "UNPAID_PAYU" | "UNPAID_SEPA" | "UNPAID_WITHDRAW" | "WARRANT_MANUAL" | "WITHDRAW_AUTOMATIC"
        /**
         * All status a debt HistoryOrder entry can be in
         * type fullname: debt.entry.StatusDebtOrderEnum
         */
        export type StatusDebtOrderEnum = "PAID" | "REFUNDED" | "TO_BE_PAID" | "UNMATURED" | "UNPAID"
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
    export type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "fat16" | "ntfs" | "reiserfs" | "swap" | "ufs" | "vmfs5" | "vmfs6" | "vmfsl" | "xfs" | "zfs"
    /**
     * Hardware RAID enum
     * type fullname: dedicated.TemplateOsHardwareRaidEnum
     */
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
    /**
     * A structure describing some interesting facts about an OS template licensing
     * interface fullName: dedicated.TemplateOsInfoLicense.TemplateOsInfoLicense
     */
    export interface TemplateOsInfoLicense {
        os?: dedicated.TemplateOsInfoLicenseItem;
        usage?: dedicated.TemplateOsInfoLicenseItem;
    }
    /**
     * A structure describing some interesting facts about an OS template license item
     * interface fullName: dedicated.TemplateOsInfoLicenseItem.TemplateOsInfoLicenseItem
     */
    export interface TemplateOsInfoLicenseItem {
        name?: dedicated.TemplateOsInfoLicenseItemEnum[];
        url?: string;
    }
    /**
     * Standard license name according to SPDX
     * type fullname: dedicated.TemplateOsInfoLicenseItemEnum
     */
    export type TemplateOsInfoLicenseItemEnum = "0BSD" | "AAL" | "ADSL" | "AFL-1.1" | "AFL-1.2" | "AFL-2.0" | "AFL-2.1" | "AFL-3.0" | "AGPL-1.0-only" | "AGPL-1.0-or-later" | "AGPL-3.0-only" | "AGPL-3.0-or-later" | "AMDPLPA" | "AML" | "AMPAS" | "ANTLR-PD" | "ANTLR-PD-fallback" | "APAFML" | "APL-1.0" | "APSL-1.0" | "APSL-1.1" | "APSL-1.2" | "APSL-2.0" | "Abstyles" | "Adobe-2006" | "Adobe-Glyph" | "Afmparse" | "Aladdin" | "Apache-1.0" | "Apache-1.1" | "Apache-2.0" | "Artistic-1.0" | "Artistic-1.0-Perl" | "Artistic-1.0-cl8" | "Artistic-2.0" | "BSD-1-Clause" | "BSD-2-Clause" | "BSD-2-Clause-Patent" | "BSD-2-Clause-Views" | "BSD-3-Clause" | "BSD-3-Clause-Attribution" | "BSD-3-Clause-Clear" | "BSD-3-Clause-LBNL" | "BSD-3-Clause-Modification" | "BSD-3-Clause-No-Nuclear-License" | "BSD-3-Clause-No-Nuclear-License-2014" | "BSD-3-Clause-No-Nuclear-Warranty" | "BSD-3-Clause-Open-MPI" | "BSD-4-Clause" | "BSD-4-Clause-Shortened" | "BSD-4-Clause-UC" | "BSD-Protection" | "BSD-Source-Code" | "BSL-1.0" | "BUSL-1.1" | "Bahyph" | "Barr" | "Beerware" | "BitTorrent-1.0" | "BitTorrent-1.1" | "BlueOak-1.0.0" | "Borceux" | "C-UDA-1.0" | "CAL-1.0" | "CAL-1.0-Combined-Work-Exception" | "CATOSL-1.1" | "CC-BY-1.0" | "CC-BY-2.0" | "CC-BY-2.5" | "CC-BY-3.0" | "CC-BY-4.0" | "CC-BY-NC-1.0" | "CC-BY-NC-2.0" | "CC-BY-NC-2.5" | "CC-BY-NC-3.0" | "CC-BY-NC-4.0" | "CC-BY-NC-ND-1.0" | "CC-BY-NC-ND-2.0" | "CC-BY-NC-ND-2.5" | "CC-BY-NC-ND-3.0" | "CC-BY-NC-ND-4.0" | "CC-BY-NC-SA-1.0" | "CC-BY-NC-SA-2.0" | "CC-BY-NC-SA-2.5" | "CC-BY-NC-SA-3.0" | "CC-BY-NC-SA-4.0" | "CC-BY-ND-1.0" | "CC-BY-ND-2.0" | "CC-BY-ND-2.5" | "CC-BY-ND-3.0" | "CC-BY-ND-4.0" | "CC-BY-SA-1.0" | "CC-BY-SA-2.0" | "CC-BY-SA-2.5" | "CC-BY-SA-3.0" | "CC-BY-SA-4.0" | "CC-PDDC" | "CC0-1.0" | "CDDL-1.0" | "CDDL-1.1" | "CDLA-Permissive-1.0" | "CDLA-Sharing-1.0" | "CECILL-1.0" | "CECILL-1.1" | "CECILL-2.0" | "CECILL-2.1" | "CECILL-B" | "CECILL-C" | "CERN-OHL-1.1" | "CERN-OHL-1.2" | "CERN-OHL-P-2.0" | "CERN-OHL-S-2.0" | "CERN-OHL-W-2.0" | "CNRI-Jython" | "CNRI-Python" | "CNRI-Python-GPL-Compatible" | "CPAL-1.0" | "CPL-1.0" | "CPOL-1.02" | "CUA-OPL-1.0" | "Caldera" | "ClArtistic" | "Condor-1.1" | "Crossword" | "CrystalStacker" | "Cube" | "D-FSL-1.0" | "DFSG" | "DOC" | "DRL-1.0" | "DSDP" | "Dotseqn" | "ECL-1.0" | "ECL-2.0" | "EFL-1.0" | "EFL-2.0" | "EPICS" | "EPL-1.0" | "EPL-2.0" | "EUDatagrid" | "EUPL-1.0" | "EUPL-1.1" | "EUPL-1.2" | "Entessa" | "ErlPL-1.1" | "Eurosym" | "FSFAP" | "FSFUL" | "FSFULLR" | "FTL" | "Fair" | "Frameworx-1.0" | "FreeBSD-DOC" | "FreeImage" | "GD" | "GFDL-1.1-invariants-only" | "GFDL-1.1-invariants-or-later" | "GFDL-1.1-no-invariants-only" | "GFDL-1.1-no-invariants-or-later" | "GFDL-1.1-only" | "GFDL-1.1-or-later" | "GFDL-1.2-invariants-only" | "GFDL-1.2-invariants-or-later" | "GFDL-1.2-no-invariants-only" | "GFDL-1.2-no-invariants-or-later" | "GFDL-1.2-only" | "GFDL-1.2-or-later" | "GFDL-1.3-invariants-only" | "GFDL-1.3-invariants-or-later" | "GFDL-1.3-no-invariants-only" | "GFDL-1.3-no-invariants-or-later" | "GFDL-1.3-only" | "GFDL-1.3-or-later" | "GL2PS" | "GLWTPL" | "GPL-1.0-only" | "GPL-1.0-or-later" | "GPL-2.0-only" | "GPL-2.0-or-later" | "GPL-3.0-only" | "GPL-3.0-or-later" | "Giftware" | "Glide" | "Glulxe" | "HPND" | "HPND-sell-variant" | "HTMLTIDY" | "HaskellReport" | "Hippocratic-2.1" | "IBM-pibs" | "ICU" | "IJG" | "IPA" | "IPL-1.0" | "ISC" | "ImageMagick" | "Imlib2" | "Info-ZIP" | "Intel" | "Intel-ACPI" | "Interbase-1.0" | "JPNIC" | "JSON" | "JasPer-2.0" | "LAL-1.2" | "LAL-1.3" | "LGPL-2.0-only" | "LGPL-2.0-or-later" | "LGPL-2.1-only" | "LGPL-2.1-or-later" | "LGPL-3.0-only" | "LGPL-3.0-or-later" | "LGPLLR" | "LPL-1.0" | "LPL-1.02" | "LPPL-1.0" | "LPPL-1.1" | "LPPL-1.2" | "LPPL-1.3a" | "LPPL-1.3c" | "Latex2e" | "Leptonica" | "LiLiQ-P-1.1" | "LiLiQ-R-1.1" | "LiLiQ-Rplus-1.1" | "Libpng" | "Linux-OpenIB" | "MIT" | "MIT-0" | "MIT-CMU" | "MIT-Modern-Variant" | "MIT-advertising" | "MIT-enna" | "MIT-feh" | "MIT-open-group" | "MITNFA" | "MPL-1.0" | "MPL-1.1" | "MPL-2.0" | "MPL-2.0-no-copyleft-exception" | "MS-PL" | "MS-RL" | "MTLL" | "MakeIndex" | "MirOS" | "Motosoto" | "MulanPSL-1.0" | "MulanPSL-2.0" | "Multics" | "Mup" | "NAIST-2003" | "NASA-1.3" | "NBPL-1.0" | "NCGL-UK-2.0" | "NCSA" | "NGPL" | "NIST-PD" | "NIST-PD-fallback" | "NLOD-1.0" | "NLPL" | "NOSL" | "NPL-1.0" | "NPL-1.1" | "NPOSL-3.0" | "NRL" | "NTP" | "NTP-0" | "Naumen" | "Net-SNMP" | "NetCDF" | "Newsletr" | "Nokia" | "Noweb" | "O-UDA-1.0" | "OCCT-PL" | "OCLC-2.0" | "ODC-By-1.0" | "ODbL-1.0" | "OFL-1.0" | "OFL-1.0-RFN" | "OFL-1.0-no-RFN" | "OFL-1.1" | "OFL-1.1-RFN" | "OFL-1.1-no-RFN" | "OGC-1.0" | "OGDL-Taiwan-1.0" | "OGL-Canada-2.0" | "OGL-UK-1.0" | "OGL-UK-2.0" | "OGL-UK-3.0" | "OGTSL" | "OLDAP-1.1" | "OLDAP-1.2" | "OLDAP-1.3" | "OLDAP-1.4" | "OLDAP-2.0" | "OLDAP-2.0.1" | "OLDAP-2.1" | "OLDAP-2.2" | "OLDAP-2.2.1" | "OLDAP-2.2.2" | "OLDAP-2.3" | "OLDAP-2.4" | "OLDAP-2.5" | "OLDAP-2.6" | "OLDAP-2.7" | "OLDAP-2.8" | "OML" | "OPL-1.0" | "OSET-PL-2.1" | "OSL-1.0" | "OSL-1.1" | "OSL-2.0" | "OSL-2.1" | "OSL-3.0" | "OpenSSL" | "PDDL-1.0" | "PHP-3.0" | "PHP-3.01" | "PSF-2.0" | "Parity-6.0.0" | "Parity-7.0.0" | "Plexus" | "PolyForm-Noncommercial-1.0.0" | "PolyForm-Small-Business-1.0.0" | "PostgreSQL" | "Python-2.0" | "QPL-1.0" | "Qhull" | "RHeCos-1.1" | "RPL-1.1" | "RPL-1.5" | "RPSL-1.0" | "RSA-MD" | "RSCPL" | "Rdisc" | "Ruby" | "SAX-PD" | "SCEA" | "SGI-B-1.0" | "SGI-B-1.1" | "SGI-B-2.0" | "SHL-0.5" | "SHL-0.51" | "SISSL" | "SISSL-1.2" | "SMLNJ" | "SMPPL" | "SNIA" | "SPL-1.0" | "SSH-OpenSSH" | "SSH-short" | "SSPL-1.0" | "SWL" | "Saxpath" | "Sendmail" | "Sendmail-8.23" | "SimPL-2.0" | "Sleepycat" | "Spencer-86" | "Spencer-94" | "Spencer-99" | "SugarCRM-1.1.3" | "TAPR-OHL-1.0" | "TCL" | "TCP-wrappers" | "TMate" | "TORQUE-1.1" | "TOSL" | "TU-Berlin-1.0" | "TU-Berlin-2.0" | "UCL-1.0" | "UPL-1.0" | "Unicode-DFS-2015" | "Unicode-DFS-2016" | "Unicode-TOU" | "Unlicense" | "VOSTROM" | "VSL-1.0" | "Vim" | "W3C" | "W3C-19980720" | "W3C-20150513" | "WTFPL" | "Watcom-1.0" | "Wsuipa" | "X11" | "XFree86-1.1" | "XSkat" | "Xerox" | "Xnet" | "ZPL-1.1" | "ZPL-2.0" | "ZPL-2.1" | "Zed" | "Zend-2.0" | "Zimbra-1.3" | "Zimbra-1.4" | "Zlib" | "blessing" | "bzip2-1.0.5" | "bzip2-1.0.6" | "copyleft-next-0.3.0" | "copyleft-next-0.3.1" | "curl" | "diffmark" | "dvipdfm" | "eGenix" | "etalab-2.0" | "freeware" | "gSOAP-1.3b" | "gnuplot" | "iMatix" | "libpng-2.0" | "libselinux-1.0" | "libtiff" | "mpich2" | "proprietary" | "psfrag" | "psutils" | "unknown" | "xinetd" | "xpp" | "zlib-acknowledgement"
    /**
     * A structure describing some interesting facts about an OS template project
     * interface fullName: dedicated.TemplateOsInfoProject.TemplateOsInfoProject
     */
    export interface TemplateOsInfoProject {
        os?: dedicated.TemplateOsInfoProjectItem;
        usage?: dedicated.TemplateOsInfoProjectItem;
    }
    /**
     * A structure describing some interesting facts about an OS template project item
     * interface fullName: dedicated.TemplateOsInfoProjectItem.TemplateOsInfoProjectItem
     */
    export interface TemplateOsInfoProjectItem {
        governance?: string[];
        releaseNotes?: string;
        url?: string;
        version?: string;
    }
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
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    /**
     * Os subfamily definition
     * type fullname: dedicated.TemplateOsSubfamilyEnum
     */
    export type TemplateOsSubfamilyEnum = "aos" | "arch" | "centos" | "cloudlinux" | "coreos" | "debian" | "dgx" | "esxi" | "fedora" | "freebsd" | "gentoo" | "hyperv" | "omnios" | "openio" | "openmediavault" | "opensuse" | "ovh" | "pcs" | "power" | "proxmox" | "rhel" | "slackware" | "smartos" | "solusvm" | "suse" | "ubuntu" | "windows-server-core" | "windows-server-desktop-exp" | "xcp" | "xen"
    /**
     * Os type
     * type fullname: dedicated.TemplateOsTypeEnum
     */
    export type TemplateOsTypeEnum = "bsd" | "ibm" | "linux" | "solaris" | "unix" | "windows"
    /**
     * Os usage definition
     * type fullname: dedicated.TemplateOsUsageEnum
     */
    export type TemplateOsUsageEnum = "basic" | "customer" | "database" | "hosting" | "management" | "other" | "readyToUse" | "virtualisation" | "virtualization"
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
            bitFormat: dedicated.server.BitFormatEnum;
            category: dedicated.TemplateOsUsageEnum;
            customization?: dedicated.TemplateOsProperties;
            defaultLanguage: dedicated.TemplateOsLanguageEnum;
            description: string;
            distribution: string;
            endOfInstall: string;
            family: dedicated.TemplateOsTypeEnum;
            filesystems: dedicated.TemplateOsFileSystemEnum[];
            hardRaidConfiguration?: boolean;
            lastModification?: string;
            license?: dedicated.TemplateOsInfoLicense;
            lvmReady?: boolean;
            noPartitioning: boolean;
            project?: dedicated.TemplateOsInfoProject;
            softRaidOnlyMirroring: boolean;
            subfamily: dedicated.TemplateOsSubfamilyEnum;
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
export namespace domain {
    /**
     * Document file format
     * type fullname: domain.DocumentFormatsEnum
     */
    export type DocumentFormatsEnum = "gif" | "jpeg" | "jpg" | "pdf" | "png"
    /**
     * Operation functions
     * type fullname: domain.NicOperationFunctionEnum
     */
    export type NicOperationFunctionEnum = "ContactControl" | "DnsAnycastActivate" | "DnsAnycastDeactivate" | "DnssecDisable" | "DnssecEnable" | "DnssecResigning" | "DnssecRollKsk" | "DnssecRollZsk" | "DomainAfterMarket" | "DomainContactControl" | "DomainContactUpdate" | "DomainControl" | "DomainCreate" | "DomainDelete" | "DomainDnsUpdate" | "DomainDsUpdate" | "DomainEmailRedirectionsCreate" | "DomainEmailRedirectionsDelete" | "DomainHold" | "DomainHostCreate" | "DomainHostDelete" | "DomainHostUpdate" | "DomainIncomingTransfer" | "DomainLock" | "DomainOutgoingTransfer" | "DomainRegistryDelete" | "DomainRenew" | "DomainResourceDelete" | "DomainRestore" | "DomainTrade" | "DomainUnhold" | "DomainUnlock" | "ZoneImport"
    /**
     * operation Action
     * type fullname: domain.OperationActionEnum
     */
    export type OperationActionEnum = "canCancel" | "canCorrect" | "canRelaunch" | "canReset"
    /**
     * Operation status
     * type fullname: domain.OperationStatusEnum
     */
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    /**
     * One step from an operation
     * interface fullName: domain.OperationStep.OperationStep
     */
    export interface OperationStep {
        description: string;
        executionDuration: number;
        step: string;
    }
}
export namespace http {
    /**
     * All HTTP methods available
     * type fullname: http.MethodEnum
     */
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}
export namespace ip {
    /**
     * Possible values for IP campuses' names
     * type fullname: ip.CampusEnum
     */
    export type CampusEnum = "BHS" | "ERI" | "GRA" | "HIL" | "LIM" | "RBX" | "SBG" | "SGP" | "SY2" | "SYD" | "VIN" | "WAW"
}
export namespace me {
    export namespace SupportLevel {
        /**
         * Support level of an account
         * interface fullName: me.SupportLevel.Level.Level
         */
        export interface Level {
            level: me.SupportLevel.LevelTypeEnum;
        }
        /**
         * Type of level
         * type fullname: me.SupportLevel.LevelTypeEnum
         */
        export type LevelTypeEnum = "business" | "enterprise" | "premium" | "premium-accredited" | "standard"
    }
    export namespace abuse {
        /**
         * Get report API response
         * interface fullName: me.abuse.Abuse.Abuse
         */
        export interface Abuse {
            category: me.abuse.AbuseCategoryEnum;
            creationDate: string;
            publicId: string;
            service: string;
            status: me.abuse.AbuseStatusEnum;
        }
        /**
         * The abuse categories
         * type fullname: me.abuse.AbuseCategoryEnum
         */
        export type AbuseCategoryEnum = "Compromised" | "Copyright" | "Illegal" | "Intrusion" | "Malware" | "Network Attack" | "Other" | "Phishing" | "Spam"
        /**
         * The abuse status
         * type fullname: me.abuse.AbuseStatusEnum
         */
        export type AbuseStatusEnum = "Answered" | "Claimed" | "Closed" | "Escalated" | "Open" | "Paused" | "Reopened" | "Updated" | "WaitingAnswer"
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
        export namespace purchaseOrder {
            /**
             * Purchase order creation payload
             * interface fullName: me.billing.purchaseOrder.Creation.Creation
             */
            export interface Creation {
                active?: boolean;
                billingGroupId?: number;
                description?: string;
                endDate?: string;
                reference: string;
                startDate: string;
                type: me.billing.purchaseOrder.PurchaseOrderTypeEnum;
            }
            /**
             * Purchase Order
             * interface fullName: me.billing.purchaseOrder.PurchaseOrder.PurchaseOrder
             */
            export interface PurchaseOrder {
                active?: boolean;
                billingGroupId?: number;
                creationDate: string;
                description?: string;
                endDate?: string;
                id: number;
                lastUpdate: string;
                reference: string;
                startDate: string;
                status: me.billing.purchaseOrder.StatusEnum;
                type: me.billing.purchaseOrder.PurchaseOrderTypeEnum;
            }
            /**
             * Type of a purchase order
             * type fullname: me.billing.purchaseOrder.PurchaseOrderTypeEnum
             */
            export type PurchaseOrderTypeEnum = "PURCHASE_ORDER" | "REFERENCE_ORDER"
            /**
             * Status of the Purchase Order
             * type fullname: me.billing.purchaseOrder.StatusEnum
             */
            export type StatusEnum = "CREATED" | "DELETED"
            /**
             * Purchase order update payload
             * interface fullName: me.billing.purchaseOrder.Update.Update
             */
            export interface Update {
                active?: boolean;
                billingGroupId?: number;
                description?: string;
                endDate?: string;
                reference?: string;
                startDate?: string;
                type?: me.billing.purchaseOrder.PurchaseOrderTypeEnum;
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
    export namespace contact {
        /**
         * Representation of a Contact
         * interface fullName: me.contact.Address.Address
         */
        export interface Address {
            city: string;
            country: nichandle.CountryEnum;
            line1: string;
            line2?: string;
            line3?: string;
            otherDetails?: string;
            province?: string;
            zip?: string;
        }
        /**
         * Contact definition
         * interface fullName: me.contact.Contact.Contact
         */
        export interface Contact {
            address: me.contact.Address;
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
                destinationObject?: me.credit.balance.movement.SubObject;
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
            export type TypeEnum = "BONUS" | "DEPOSIT" | "PREPAID_ACCOUNT" | "VOUCHER"
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
                export type TypeEnum = "BONUS" | "CANCEL" | "CREDIT_NOTE" | "EXPIRE" | "GIFT" | "MANUAL" | "ORDER" | "REFUND" | "UNPAID" | "USE" | "VOUCHER"
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
    export namespace geolocation {
        /**
         * Representation of country and continent from visitor IP
         * interface fullName: me.geolocation.ContinentCountryLocation.ContinentCountryLocation
         */
        export interface ContinentCountryLocation {
            continent?: me.geolocation.ContinentEnum;
            countryCode?: me.geolocation.CountryEnum;
            ip: string;
        }
        /**
         * Continent
         * type fullname: me.geolocation.ContinentEnum
         */
        export type ContinentEnum = "africa" | "antartica" | "asia" | "europe" | "north-america" | "oceania" | "south-america"
        /**
         * Country iso code
         * type fullname: me.geolocation.CountryEnum
         */
        export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    }
    export namespace incident {
        /**
         * Original service that can be migrated
         * interface fullName: me.incident.MigrateServices.MigrateServices
         */
        export interface MigrateServices {
            dryRun: boolean;
            serviceIds: number[];
        }
        /**
         * Order created in order to migrate a service
         * interface fullName: me.incident.Order.Order
         */
        export interface Order {
            order: order.Order;
        }
        /**
         * Commercial gesture applied for the service migration
         * interface fullName: me.incident.PercentagePromotion.PercentagePromotion
         */
        export interface PercentagePromotion {
            duration: string;
            value: number;
        }
        /**
         * Commercial offer a customer can migrate his service to
         * interface fullName: me.incident.ProposedOffer.ProposedOffer
         */
        export interface ProposedOffer {
            configurations: me.incident.ProposedOfferConfiguration[];
            plan: order.cart.GenericProductDefinition;
            pricingMode: string;
            promotion: me.incident.PercentagePromotion;
        }
        /**
         * Config
         * interface fullName: me.incident.ProposedOfferConfiguration.ProposedOfferConfiguration
         */
        export interface ProposedOfferConfiguration {
            name: string;
            value: string;
        }
        /**
         * Service you may migrate to a given offer
         * interface fullName: me.incident.ServiceMigration.ServiceMigration
         */
        export interface ServiceMigration {
            addons: me.incident.ServiceMigration[];
            orderId?: number;
            proposedOffer: me.incident.ProposedOffer;
            serviceToMigrate?: me.incident.ServiceToMigrate;
        }
        /**
         * Original service that can be migrated
         * interface fullName: me.incident.ServiceToMigrate.ServiceToMigrate
         */
        export interface ServiceToMigrate {
            description: string;
            metadata: complexType.SafeKeyValue<string>[];
            route?: string;
            serviceId: number;
            serviceName: string;
        }
    }
    export namespace partnerLevel {
        /**
         * Partner level of an account
         * interface fullName: me.partnerLevel.Level.Level
         */
        export interface Level {
            level: me.partnerLevel.LevelTypeEnum;
            requirement: me.partnerLevel.RequirementLoSEnum;
        }
        /**
         * Type of level
         * type fullname: me.partnerLevel.LevelTypeEnum
         */
        export type LevelTypeEnum = "advanced" | "none" | "standard"
        /**
         * Level of Support required
         * type fullname: me.partnerLevel.RequirementLoSEnum
         */
        export type RequirementLoSEnum = "none" | "premium" | "premium-accredited"
    }
    export namespace payment {
        /**
         * Available payment method object
         * interface fullName: me.payment.AvailablePaymentMethod.AvailablePaymentMethod
         */
        export interface AvailablePaymentMethod {
            formSessionId?: string;
            icon: me.payment.Icon;
            integration: me.payment.IntegrationEnum;
            merchantId?: string;
            oneshot: boolean;
            organizationId?: string;
            paymentSubType?: me.payment.AvailableSubTypeEnum;
            paymentType: string;
            registerable: boolean;
            registerableWithTransaction: boolean;
        }
        /**
         * Payment method available sub-type enum
         * type fullname: me.payment.AvailableSubTypeEnum
         */
        export type AvailableSubTypeEnum = "30_DAYS" | "45_DAYS" | "60_DAYS" | "AMERICAN_EXPRESS" | "AURA" | "CARTE_BANCAIRE" | "CARTE_BLEUE" | "CHORUS" | "DINERS_CLUB" | "DISCOVER" | "JCB" | "MAESTRO" | "MASTERCARD" | "NONE" | "VISA"
        /**
         * Payment method creation sub-type enum
         * type fullname: me.payment.CreationSubTypeEnum
         */
        export type CreationSubTypeEnum = "CHORUS" | "NONE"
        /**
         * Icon
         * interface fullName: me.payment.Icon.Icon
         */
        export interface Icon {
            data?: string;
            name: string;
            url?: string;
        }
        /**
         * Register integration type enum
         * type fullname: me.payment.IntegrationEnum
         */
        export type IntegrationEnum = "COMPONENT" | "IFRAME_VANTIV" | "IN_CONTEXT" | "NONE" | "POST_FORM" | "REDIRECT"
        /**
         * Payment method object
         * interface fullName: me.payment.PaymentMethod.PaymentMethod
         */
        export interface PaymentMethod {
            billingContactId?: number;
            creationDate: string;
            default: boolean;
            description?: string;
            expirationDate?: string;
            formSessionId?: string;
            icon: me.payment.Icon;
            integration?: me.payment.IntegrationEnum;
            label?: string;
            lastUpdate: string;
            merchantId?: string;
            oneclick?: boolean;
            paymentMeanId?: number;
            paymentMethodId: number;
            paymentSubType?: me.payment.AvailableSubTypeEnum;
            paymentType: string;
            status: me.payment.method.StatusEnum;
        }
        /**
         * Transaction object
         * interface fullName: me.payment.Transaction.Transaction
         */
        export interface Transaction {
            amount: orderPrice;
            creationDate: string;
            lastUpdate: string;
            paymentMethodId: number;
            status: me.payment.transaction.StatusEnum;
            transactionId: number;
            type: me.payment.transaction.TypeEnum;
        }
        export namespace method {
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
             * Payment method Challenge
             * interface fullName: me.payment.method.Challenge.Challenge
             */
            export interface Challenge {
                challenge: string;
            }
            /**
             * Payment method creation payload
             * interface fullName: me.payment.method.Creation.Creation
             */
            export interface Creation {
                billingContactId?: number;
                callbackUrl: me.payment.method.CallbackUrl;
                default: boolean;
                description?: string;
                formData?: string;
                orderId?: number;
                paymentSubType?: me.payment.CreationSubTypeEnum;
                paymentType: string;
                register: boolean;
            }
            /**
             * Add details to one payment method challenge
             * interface fullName: me.payment.method.Details.Details
             */
            export interface Details {
                details: string;
                transactionId: number;
            }
            /**
             * Payload to finalize payment method registration
             * interface fullName: me.payment.method.Finalize.Finalize
             */
            export interface Finalize {
                expirationMonth?: number;
                expirationYear?: number;
                formSessionId?: string;
                registrationId?: string;
            }
            /**
             * Payment method status
             * type fullname: me.payment.method.StatusEnum
             */
            export type StatusEnum = "CANCELED" | "CANCELING" | "CREATED" | "CREATING" | "ERROR" | "EXPIRED" | "FAILED" | "MAINTENANCE" | "PAUSED" | "VALID"
            /**
             * Registration response to validate
             * interface fullName: me.payment.method.Validation.Validation
             */
            export interface Validation {
                formSessionId?: string;
                merchantId?: string;
                organizationId?: string;
                paymentMethodId: number;
                transactionId?: number;
                url?: string;
                validationType: me.payment.IntegrationEnum;
            }
        }
        export namespace transaction {
            /**
             * Transaction status
             * type fullname: me.payment.transaction.StatusEnum
             */
            export type StatusEnum = "CANCELED" | "CANCELING" | "CONFIRMING" | "ERROR" | "EXPIRED" | "FAILED" | "READY" | "SUCCESS"
            /**
             * Transaction type
             * type fullname: me.payment.transaction.TypeEnum
             */
            export type TypeEnum = "CREDIT" | "DEBIT"
        }
    }
    export namespace paymentMean {
        /**
         * Credit card informations
         * interface fullName: me.paymentMean.BankAccount.BankAccount
         */
        export interface BankAccount {
            bic: string;
            creationDate: string;
            defaultPaymentMean: boolean;
            description?: string;
            iban: string;
            icon?: me.paymentMean.IconData;
            id: number;
            mandateSignatureDate?: string;
            ownerAddress: string;
            ownerName: string;
            state: me.paymentMean.BankAccountStateEnum;
            uniqueReference: string;
            validationDocumentLink?: string;
        }
        /**
         * Missing description
         * interface fullName: me.paymentMean.BankAccountChallengeCreation.BankAccountChallengeCreation
         */
        export interface BankAccountChallengeCreation {
            challenge: string;
        }
        /**
         * Missing description
         * interface fullName: me.paymentMean.BankAccountCreation.BankAccountCreation
         */
        export interface BankAccountCreation {
            bic: string;
            description?: string;
            iban: string;
            ownerAddress: string;
            ownerName: string;
            setDefault?: boolean;
        }
        /**
         * State of your bank account
         * type fullname: me.paymentMean.BankAccountStateEnum
         */
        export type BankAccountStateEnum = "blockedForIncidents" | "pendingValidation" | "valid"
        /**
         * A validation required to add a payment mean bank account
         * interface fullName: me.paymentMean.BankAccountValidation.BankAccountValidation
         */
        export interface BankAccountValidation {
            id: number;
            submitUrl?: string;
            url: string;
            validationType: me.paymentMean.ValidationTypeEnum;
        }
        /**
         * Credit card informations
         * interface fullName: me.paymentMean.CreditCard.CreditCard
         */
        export interface CreditCard {
            defaultPaymentMean: boolean;
            description?: string;
            expirationDate: string;
            icon?: me.paymentMean.IconData;
            id: number;
            number: string;
            state: me.paymentMean.CreditCardStateEnum;
            threeDsValidated: boolean;
            type: string;
        }
        /**
         * Missing description
         * interface fullName: me.paymentMean.CreditCardChallengeCreation.CreditCardChallengeCreation
         */
        export interface CreditCardChallengeCreation {
            challenge: string;
        }
        /**
         * Missing description
         * interface fullName: me.paymentMean.CreditCardCreation.CreditCardCreation
         */
        export interface CreditCardCreation {
            description?: string;
            returnUrl?: string;
            setDefault?: boolean;
        }
        /**
         * State of your credit card
         * type fullname: me.paymentMean.CreditCardStateEnum
         */
        export type CreditCardStateEnum = "expired" | "tooManyFailures" | "valid"
        /**
         * A validation required to add a payment mean credit card
         * interface fullName: me.paymentMean.CreditCardValidation.CreditCardValidation
         */
        export interface CreditCardValidation {
            id: number;
            submitUrl?: string;
            url: string;
            validationType: me.paymentMean.ValidationTypeEnum;
        }
        /**
         * Deferred account informations
         * interface fullName: me.paymentMean.Deferred.Deferred
         */
        export interface Deferred {
            creationDate: string;
            defaultPaymentMean: boolean;
            description?: string;
            icon?: me.paymentMean.IconData;
            id: number;
            label?: string;
            state: me.paymentMean.DeferredStateEnum;
        }
        /**
         * State of you deferred account
         * type fullname: me.paymentMean.DeferredStateEnum
         */
        export type DeferredStateEnum = "failed" | "valid"
        /**
         * Payment mean type icon
         * interface fullName: me.paymentMean.IconData.IconData
         */
        export interface IconData {
            data?: string;
            name?: string;
            url?: string;
        }
        /**
         * Paypal informations
         * interface fullName: me.paymentMean.Paypal.Paypal
         */
        export interface Paypal {
            agreementId: string;
            creationDate: string;
            defaultPaymentMean: boolean;
            description?: string;
            email: string;
            icon?: me.paymentMean.IconData;
            id: number;
            state: me.paymentMean.PaypalStateEnum;
        }
        /**
         * Missing description
         * interface fullName: me.paymentMean.PaypalChallengeCreation.PaypalChallengeCreation
         */
        export interface PaypalChallengeCreation {
            challenge: string;
        }
        /**
         * Missing description
         * interface fullName: me.paymentMean.PaypalCreation.PaypalCreation
         */
        export interface PaypalCreation {
            description?: string;
            returnUrl?: string;
            setDefault?: boolean;
        }
        /**
         * State of you paypal
         * type fullname: me.paymentMean.PaypalStateEnum
         */
        export type PaypalStateEnum = "failing" | "tooManyFailures" | "valid"
        /**
         * A validation required to add a payment mean paypal
         * interface fullName: me.paymentMean.PaypalValidation.PaypalValidation
         */
        export interface PaypalValidation {
            id: number;
            submitUrl?: string;
            url: string;
            validationType: me.paymentMean.ValidationTypeEnum;
        }
        /**
         * All the validation you may have to do
         * type fullname: me.paymentMean.ValidationTypeEnum
         */
        export type ValidationTypeEnum = "creditAccount" | "documentToSend" | "simpleValidation"
    }
    export namespace tag {
        /**
         * Available tag configuration object for creation
         * interface fullName: me.tag.AvailableTag.AvailableTag
         */
        export interface AvailableTag {
            keys: me.tag.TagKey[];
            name: string;
        }
        /**
         * Tag creation payload
         * interface fullName: me.tag.Creation.Creation
         */
        export interface Creation {
            reason?: string;
            tagName: string;
        }
        /**
         * Tag status
         * type fullname: me.tag.StatusEnum
         */
        export type StatusEnum = "CREATED" | "CREATING" | "DELETED" | "DELETING" | "ERROR" | "MODERATING" | "REFUSED" | "REFUSING" | "REVOCATING" | "WAIT_MODERATION" | "WAIT_REVOCATION"
        /**
         * Tag
         * interface fullName: me.tag.Tag.Tag
         */
        export interface Tag {
            creationDate: string;
            customerCode: string;
            expirationDate?: string;
            extra?: me.tag.TagExtra;
            lastUpdate: string;
            status: me.tag.StatusEnum;
            tag: string;
        }
        /**
         * Tag Extra
         * interface fullName: me.tag.TagExtra.TagExtra
         */
        export interface TagExtra {
            exemption?: string;
        }
        /**
         * Tag configuration key
         * interface fullName: me.tag.TagKey.TagKey
         */
        export interface TagKey {
            enum?: string[];
            key: string;
            maxLength?: number;
            minValue?: number;
            optional: boolean;
            pattern?: string;
            type: me.tag.tagKey.TypeEnum;
        }
        export namespace tagKey {
            /**
             * Tag key type
             * type fullname: me.tag.tagKey.TypeEnum
             */
            export type TypeEnum = "ARRAY" | "DATE" | "ENUM" | "INTEGER" | "TEXT" | "VARCHAR"
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
            idpSigningCertificates: nichandle.Authentication.Certificate[];
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
     * Domain tasks
     * interface fullName: nichandle.DomainTask.DomainTask
     */
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
    /**
     * Domain operation argument
     * interface fullName: nichandle.DomainTaskArgument.DomainTaskArgument
     */
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
    /**
     * Domain operation progress
     * interface fullName: nichandle.DomainTaskProgressBar.DomainTaskProgressBar
     */
    export interface DomainTaskProgressBar {
        currentStep: domain.OperationStep;
        expectedDoneDate?: string;
        followUpSteps?: domain.OperationStep[];
        lastUpdateDate?: string;
        progress: number;
        taskActions: domain.OperationActionEnum[];
        taskStatus: domain.OperationStatusEnum;
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
    export type LanguageEnum = "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "nl_NL" | "pl_PL" | "pt_PT"
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
     * Auto renewal information
     * interface fullName: nichandle.NicAutorenewInfos.NicAutorenewInfos
     */
    export interface NicAutorenewInfos {
        active: boolean;
        lastRenew?: string;
        renewDay: number;
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
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "IN" | "QC" | "SG" | "WE" | "WS"
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
     * List of all OVH things you can subscribe to
     * interface fullName: nichandle.Subscription.Subscription
     */
    export interface Subscription {
        registered?: boolean;
        type: string;
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
    export namespace changeContact {
        /**
         * Allowed types of contact who can be changed by change contact task
         * type fullname: nichandle.changeContact.ContactTypeEnum
         */
        export type ContactTypeEnum = "contactAdmin" | "contactBilling" | "contactTech"
        /**
         * State of contact change task
         * type fullname: nichandle.changeContact.TaskStateEnum
         */
        export type TaskStateEnum = "aborted" | "checkValidity" | "doing" | "done" | "error" | "expired" | "refused" | "todo" | "validatingByCustomers"
    }
    export namespace changeEmail {
        /**
         * State of email change task
         * type fullname: nichandle.changeEmail.TaskStateEnum
         */
        export type TaskStateEnum = "aborted" | "done" | "refused" | "todo"
    }
    export namespace contactChange {
        /**
         * Task running a contact change on a service
         * interface fullName: nichandle.contactChange.Task.Task
         */
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
        /**
         * List of documents added on your account
         * interface fullName: nichandle.document.Document.Document
         */
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
     * Email notification
     * interface fullName: nichandle.emailNotification.emailNotification
     */
    export interface emailNotification {
        body: string;
        date: string;
        id: number;
        subject: string;
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
export namespace oauth2 {
    /**
     * An oAuth2 Client
     * interface fullName: oauth2.client.client
     */
    export interface client {
        callbackUrls: string[];
        clientId: string;
        createdAt: string;
        description: string;
        name: string;
    }
    /**
     * An oAuth2 Client Request
     * interface fullName: oauth2.clientRequest.clientRequest
     */
    export interface clientRequest {
        callbackUrls: string[];
        description: string;
        name: string;
    }
    /**
     * An oAuth2 Client Secret
     * interface fullName: oauth2.clientSecret.clientSecret
     */
    export interface clientSecret {
        clientId: string;
        clientSecret: string;
    }
}
export namespace order {
    /**
     * A contract
     * interface fullName: order.Contract.Contract
     */
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
    /**
     * Currency code
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * An order
     * interface fullName: order.Order.Order
     */
    export interface Order {
        contracts: order.Contract[];
        details: order.OrderDetail[];
        orderId?: number;
        prices: order.OrderPrices;
        url?: string;
    }
    /**
     * Detail of an order
     * interface fullName: order.OrderDetail.OrderDetail
     */
    export interface OrderDetail {
        cartItemID?: number;
        description: string;
        detailType?: orderOrderDetailTypeEnum;
        domain: string;
        originalTotalPrice: orderPrice;
        quantity: number;
        reductionTotalPrice: orderPrice;
        reductions: order.Reduction[];
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    /**
     * Product type of item in order
     * type fullname: order.OrderDetailTypeEnum
     */
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    /**
     * Prices of an order
     * interface fullName: order.OrderPrices.OrderPrices
     */
    export interface OrderPrices {
        originalWithoutTax?: orderPrice;
        reduction?: orderPrice;
        tax: orderPrice;
        withTax: orderPrice;
        withoutTax: orderPrice;
    }
    /**
     * Price with its currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
    /**
     * Order detail reduction
     * interface fullName: order.Reduction.Reduction
     */
    export interface Reduction {
        context: order.ReductionContextEnum;
        price: orderPrice;
        type: order.ReductionTypeEnum;
        value: orderPrice;
    }
    /**
     * Context of the reduction
     * type fullname: order.ReductionContextEnum
     */
    export type ReductionContextEnum = "promotion" | "voucher"
    /**
     * Type of reduction
     * type fullname: order.ReductionTypeEnum
     */
    export type ReductionTypeEnum = "fixed_amount" | "forced_amount" | "percentage"
    export namespace cart {
        /**
         * Representation of a generic product
         * interface fullName: order.cart.GenericProductDefinition.GenericProductDefinition
         */
        export interface GenericProductDefinition {
            planCode: string;
            prices: order.cart.GenericProductPricing[];
            productName: string;
            productType: order.cart.GenericProductTypeEnum;
        }
        /**
         * Representation of a product pricing
         * interface fullName: order.cart.GenericProductPricing.GenericProductPricing
         */
        export interface GenericProductPricing {
            capacities: order.cart.GenericProductPricingCapacitiesEnum[];
            description: string;
            duration: string;
            interval: number;
            maximumQuantity?: number;
            maximumRepeat?: number;
            minimumQuantity: number;
            minimumRepeat: number;
            price: orderPrice;
            priceInUcents: number;
            pricingMode: string;
            pricingType: order.cart.GenericProductPricingTypeEnum;
        }
        /**
         * Capacity of a pricing (type)
         * type fullname: order.cart.GenericProductPricingCapacitiesEnum
         */
        export type GenericProductPricingCapacitiesEnum = "consumption" | "detach" | "downgrade" | "dynamic" | "installation" | "renew" | "upgrade"
        /**
         * Type of a pricing
         * type fullname: order.cart.GenericProductPricingTypeEnum
         */
        export type GenericProductPricingTypeEnum = "consumption" | "purchase" | "rental"
        /**
         * Type of a product
         * type fullname: order.cart.GenericProductTypeEnum
         */
        export type GenericProductTypeEnum = "cloud_service" | "delivery" | "deposit" | "domain" | "saas_license" | "shipping" | "storage"
    }
}
export namespace payment {
    export namespace method {
        /**
         * Available payment methods
         * interface fullName: payment.method.AvailablePaymentMethod.AvailablePaymentMethod
         */
        export interface AvailablePaymentMethod {
            formSessionId?: string;
            icon: payment.method.Icon;
            integration: payment.method.IntegrationType;
            merchantId?: string;
            oneshot: boolean;
            organizationId?: string;
            paymentSubType?: string;
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
            url?: string;
        }
        /**
         * Payment method integration type
         * type fullname: payment.method.IntegrationType
         */
        export type IntegrationType = "COMPONENT" | "DONE" | "IFRAME_VANTIV" | "IN_CONTEXT" | "POST_FORM" | "REDIRECT"
    }
}
export namespace xander {
    /**
     * Available contact fields
     * type fullname: xander.ContactFieldEnum
     */
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
    abuse: {
        /**
         * Retrieve abuse cases list
         * GET /me/abuse
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(id: string): {
            /**
             * Check specific abuse case
             * GET /me/abuse/{id}
             */
            $get(): Promise<me.abuse.Abuse>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
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
            }
            enable: {
                /**
                 * Enable this SOTP account
                 * POST /me/accessRestriction/backupCode/enable
                 */
                $post(params: { code: string }): Promise<void>;
            }
            validate: {
                /**
                 * Validate your SOTP account
                 * POST /me/accessRestriction/backupCode/validate
                 */
                $post(params: { code: string }): Promise<nichandle.accessRestriction.SOTPValidate>;
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
                }
                enable: {
                    /**
                     * Enable this SMS account
                     * POST /me/accessRestriction/sms/{id}/enable
                     */
                    $post(params: { code: string }): Promise<void>;
                }
                sendCode: {
                    /**
                     * Send a SMS to this account
                     * POST /me/accessRestriction/sms/{id}/sendCode
                     */
                    $post(): Promise<nichandle.accessRestriction.SmsCode>;
                }
                validate: {
                    /**
                     * Validate your SMS account
                     * POST /me/accessRestriction/sms/{id}/validate
                     */
                    $post(params: { code: string }): Promise<void>;
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
                }
                enable: {
                    /**
                     * Enable this TOTP account
                     * POST /me/accessRestriction/totp/{id}/enable
                     */
                    $post(params: { code: string }): Promise<void>;
                }
                validate: {
                    /**
                     * Validate your TOTP account
                     * POST /me/accessRestriction/totp/{id}/validate
                     */
                    $post(params: { code: string }): Promise<void>;
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
                }
                disable: {
                    /**
                     * Disable this U2F account
                     * POST /me/accessRestriction/u2f/{id}/disable
                     */
                    $post(params: { clientData: string, signatureData: string }): Promise<void>;
                }
                enable: {
                    /**
                     * Enable this U2F account
                     * POST /me/accessRestriction/u2f/{id}/enable
                     */
                    $post(params: { clientData: string, signatureData: string }): Promise<void>;
                }
                validate: {
                    /**
                     * Validate your U2F account
                     * POST /me/accessRestriction/u2f/{id}/validate
                     */
                    $post(params: { clientData: string, registrationData: string }): Promise<void>;
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
    autorenew: {
        /**
         * Get this object properties
         * GET /me/autorenew
         */
        $get(): Promise<nichandle.NicAutorenewInfos>;
        /**
         * Activate auto renew for this nic
         * POST /me/autorenew
         */
        $post(params: { renewDay: number }): Promise<void>;
        /**
         * Alter this object properties
         * PUT /me/autorenew
         */
        $put(params?: { active?: boolean, lastRenew?: string, renewDay?: number }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
        $get(params?: { category?: billing.CategoryEnum, 'date.from'?: string, 'date.to'?: string, orderId?: number }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        export: {
            /**
             * Exports a bundle of invoices
             * POST /me/bill/export
             */
            $post(params: { archiveType: billing.ArchiveTypeEnum, endDate?: string, ids?: string[], startDate?: string }): Promise<void>;
        }
        $(billId: string): {
            /**
             * Get this object properties
             * GET /me/bill/{billId}
             */
            $get(): Promise<billing.Bill>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            debt: {
                /**
                 * Get this object properties
                 * GET /me/bill/{billId}/debt
                 */
                $get(): Promise<debt.Debt>;
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
                        $get(): Promise<debt.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        associatedObject: {
                            /**
                             * Return main data about the object related to this debt operation
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
                pay: {
                    /**
                     * Create an order in order to pay this order's debt
                     * POST /me/bill/{billId}/debt/pay
                     */
                    $post(): Promise<billing.Order>;
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
                    $get(): Promise<billing.BillDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            payment: {
                /**
                 * Get this object properties
                 * GET /me/bill/{billId}/payment
                 */
                $get(): Promise<billing.Payment>;
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
    }
    changePassword: {
        /**
         * Initiate a password change procedure
         * POST /me/changePassword
         */
        $post(): Promise<void>;
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
         * Retrieve every contact your created
         * GET /me/contact
         */
        $get(): Promise<number[]>;
        /**
         * Create a new contact
         * POST /me/contact
         */
        $post(params?: { address?: me.contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, id?: number, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, spareEmail?: string, vat?: string }): Promise<me.contact.Contact>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(contactId: number): {
            /**
             * Retrieve information about a contact
             * GET /me/contact/{contactId}
             */
            $get(): Promise<me.contact.Contact>;
            /**
             * Update an existing contact
             * PUT /me/contact/{contactId}
             */
            $put(params?: { address?: me.contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, id?: number, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, spareEmail?: string, vat?: string }): Promise<me.contact.Contact>;
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
        }
    }
    debtAccount: {
        /**
         * Get this object properties
         * GET /me/debtAccount
         */
        $get(): Promise<debt.Balance>;
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
                $get(): Promise<debt.Debt>;
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
                        $get(): Promise<debt.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        associatedObject: {
                            /**
                             * Return main data about the object related to this debt operation
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
                pay: {
                    /**
                     * Create an order in order to pay this order's debt
                     * POST /me/debtAccount/debt/{debtId}/pay
                     */
                    $post(): Promise<billing.Order>;
                }
            };
        }
        pay: {
            /**
             * Create an order in order to pay all your due debts
             * POST /me/debtAccount/pay
             */
            $post(): Promise<billing.Order>;
        }
    }
    deposit: {
        /**
         * List of all the deposits made to your prepaid account or debt account
         * GET /me/deposit
         */
        $get(params?: { 'date.from'?: string, 'date.to'?: string, orderId?: number }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(depositId: string): {
            /**
             * Get this object properties
             * GET /me/deposit/{depositId}
             */
            $get(): Promise<billing.Deposit>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            details: {
                /**
                 * Give access to all entries of this deposit
                 * GET /me/deposit/{depositId}/details
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(depositDetailId: string): {
                    /**
                     * Get this object properties
                     * GET /me/deposit/{depositId}/details/{depositDetailId}
                     */
                    $get(): Promise<billing.DepositDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
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
                    $get(): Promise<billing.Bill>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    debt: {
                        /**
                         * Get this object properties
                         * GET /me/deposit/{depositId}/paidBills/{billId}/debt
                         */
                        $get(): Promise<debt.Debt>;
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
                                $get(): Promise<debt.Operation>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                associatedObject: {
                                    /**
                                     * Return main data about the object related to this debt operation
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
                        pay: {
                            /**
                             * Create an order in order to pay this order's debt
                             * POST /me/deposit/{depositId}/paidBills/{billId}/debt/pay
                             */
                            $post(): Promise<billing.Order>;
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
                            $get(): Promise<billing.BillDetail>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    payment: {
                        /**
                         * Get this object properties
                         * GET /me/deposit/{depositId}/paidBills/{billId}/payment
                         */
                        $get(): Promise<billing.Payment>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            payment: {
                /**
                 * Get this object properties
                 * GET /me/deposit/{depositId}/payment
                 */
                $get(): Promise<billing.Payment>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    document: {
        /**
         * List of documents added in your account
         * GET /me/document
         */
        $get(): Promise<string[]>;
        /**
         * Create new document
         * POST /me/document
         */
        $post(params: { name: string, tags?: complexType.SafeKeyValue<string>[] }): Promise<nichandle.document.Document>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        cors: {
            /**
             * Add CORS support on your container
             * POST /me/document/cors
             */
            $post(params: { origin: string }): Promise<void>;
        }
        $(id: string): {
            /**
             * Delete a document
             * DELETE /me/document/{id}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /me/document/{id}
             */
            $get(): Promise<nichandle.document.Document>;
            /**
             * Alter this object properties
             * PUT /me/document/{id}
             */
            $put(params?: { creationDate?: string, expirationDate?: string, getUrl?: string, id?: string, name?: string, putUrl?: string, size?: number, tags?: complexType.SafeKeyValue<string>[], validationDate?: string }): Promise<void>;
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
        }
        movements: {
            /**
             * List of entries of the fidelity account
             * GET /me/fidelityAccount/movements
             */
            $get(params?: { 'date.from'?: string, 'date.to'?: string }): Promise<number[]>;
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
        $post(): Promise<me.geolocation.ContinentCountryLocation>;
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
                }
                enable: {
                    /**
                     * Enable this user
                     * POST /me/identity/user/{user}/enable
                     */
                    $post(): Promise<void>;
                }
            };
        }
    }
    incident: {
        sbg: {
            migrateServices: {
                /**
                 * Get all services you can migrate
                 * GET /me/incident/sbg/migrateServices
                 */
                $get(): Promise<me.incident.ServiceMigration[]>;
                /**
                 * Ask for impacted services migration
                 * POST /me/incident/sbg/migrateServices
                 */
                $post(params?: { dryRun?: boolean, serviceIds?: number[] }): Promise<me.incident.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
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
             * Remove this template
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
            $put(params?: { availableLanguages?: dedicated.TemplateOsLanguageEnum[], bitFormat?: dedicated.server.BitFormatEnum, category?: dedicated.TemplateOsUsageEnum, customization?: dedicated.TemplateOsProperties, defaultLanguage?: dedicated.TemplateOsLanguageEnum, description?: string, distribution?: string, endOfInstall?: string, family?: dedicated.TemplateOsTypeEnum, filesystems?: dedicated.TemplateOsFileSystemEnum[], hardRaidConfiguration?: boolean, lastModification?: string, license?: dedicated.TemplateOsInfoLicense, lvmReady?: boolean, noPartitioning?: boolean, project?: dedicated.TemplateOsInfoProject, softRaidOnlyMirroring?: boolean, subfamily?: dedicated.TemplateOsSubfamilyEnum, supportsDistributionKernel?: boolean, supportsGptLabel?: boolean, supportsRTM?: boolean, supportsSqlServer?: boolean, supportsUEFI?: dedicated.server.SupportsUEFIEnum, templateName?: string }): Promise<void>;
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
                     * Remove this scheme of partition
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
                        $post(params: { filesystem: dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: dedicated.server.PartitionRaidEnum, size: number, step: number, type: dedicated.TemplatePartitionTypeEnum, volumeName?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(mountpoint: string): {
                            /**
                             * Remove this partition
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
             * Alter this object properties
             * PUT /me/ipxeScript/{name}
             */
            $put(params?: { name?: string, script?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    logs: {
        audit: {
            /**
             * Get your audit logs
             * GET /me/logs/audit
             */
            $get(): Promise<audit.Log[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    mailingList: {
        availableLists: {
            /**
             * List of mailing list you can subscribe
             * GET /me/mailingList/availableLists
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        subscribe: {
            /**
             * Subscribe an email to a restricted mailing list
             * POST /me/mailingList/subscribe
             */
            $post(params: { email: string, mailingList: string }): Promise<void>;
        }
    }
    notification: {
        email: {
            history: {
                /**
                 * List of all your email notifications
                 * GET /me/notification/email/history
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /me/notification/email/history/{id}
                     */
                    $get(): Promise<nichandle.emailNotification>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
    }
    order: {
        /**
         * List of all the orders the logged account has
         * GET /me/order
         */
        $get(params?: { 'date.from'?: string, 'date.to'?: string }): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(orderId: number): {
            /**
             * Get this object properties
             * GET /me/order/{orderId}
             */
            $get(): Promise<billing.Order>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            associatedObject: {
                /**
                 * Return main data about the object the processing of the order generated
                 * GET /me/order/{orderId}/associatedObject
                 */
                $get(): Promise<billing.order.AssociatedObject>;
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
                $get(): Promise<string[]>;
                /**
                 * Use a credit balance on this Order
                 * POST /me/order/{orderId}/balance
                 */
                $post(params: { balanceName: string }): Promise<billing.CreditBalance>;
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
                     * Get this object properties
                     * GET /me/order/{orderId}/balance/{balanceName}
                     */
                    $get(): Promise<billing.CreditBalance>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            consumption: {
                details: {
                    /**
                     * Retrieve order's detailed consumption information as a file
                     * GET /me/order/{orderId}/consumption/details
                     */
                    $get(params: { fileFormat: consumption.ConsumptionExportFormatsEnum }): Promise<billing.order.ConsumptionDetails>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            debt: {
                /**
                 * Get this object properties
                 * GET /me/order/{orderId}/debt
                 */
                $get(): Promise<debt.Debt>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                operation: {
                    /**
                     * All operations related to these debts
                     * GET /me/order/{orderId}/debt/operation
                     */
                    $get(params?: { depositOrderId?: number }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(operationId: number): {
                        /**
                         * Get this object properties
                         * GET /me/order/{orderId}/debt/operation/{operationId}
                         */
                        $get(): Promise<debt.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        associatedObject: {
                            /**
                             * Return main data about the object related to this debt operation
                             * GET /me/order/{orderId}/debt/operation/{operationId}/associatedObject
                             */
                            $get(): Promise<debt.entry.AssociatedObject>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
                pay: {
                    /**
                     * Create an order in order to pay this order's debt
                     * POST /me/order/{orderId}/debt/pay
                     */
                    $post(): Promise<billing.Order>;
                }
            }
            details: {
                /**
                 * Give access to all entries of the order
                 * GET /me/order/{orderId}/details
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(orderDetailId: number): {
                    /**
                     * Get this object properties
                     * GET /me/order/{orderId}/details/{orderDetailId}
                     */
                    $get(): Promise<billing.OrderDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    extension: {
                        /**
                         * Get this object properties
                         * GET /me/order/{orderId}/details/{orderDetailId}/extension
                         */
                        $get(): Promise<billing.ItemDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                 * Pay with a payment method reference
                 * POST /me/order/{orderId}/pay
                 */
                $post(params: { paymentMethod: billing.order.PayWithPaymentMethod }): Promise<void>;
            }
            payWithRegisteredPaymentMean: {
                /**
                 * Pay with an already registered payment mean
                 * POST /me/order/{orderId}/payWithRegisteredPaymentMean
                 */
                $post(params: { paymentMean: billing.ReusablePaymentMeanEnum, paymentMeanId?: number }): Promise<void>;
            }
            payment: {
                /**
                 * Get this object properties
                 * GET /me/order/{orderId}/payment
                 */
                $get(): Promise<billing.Payment>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            paymentMeans: {
                /**
                 * Return main data about the object the processing of the order generated
                 * GET /me/order/{orderId}/paymentMeans
                 */
                $get(): Promise<billing.order.PaymentMeans>;
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
        };
    }
    ovhAccount: {
        /**
         * List of OVH accounts the logged account has
         * GET /me/ovhAccount
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(ovhAccountId: string): {
            /**
             * Get this object properties
             * GET /me/ovhAccount/{ovhAccountId}
             */
            $get(): Promise<billing.OvhAccount>;
            /**
             * Alter this object properties
             * PUT /me/ovhAccount/{ovhAccountId}
             */
            $put(params?: { alertThreshold?: number, balance?: orderPrice, canBeCredited?: boolean, isActive?: boolean, lastUpdate?: string, openDate?: string, ovhAccountId?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            creditOrder: {
                /**
                 * Generate an order that can be paid in order to credit the OVH account
                 * POST /me/ovhAccount/{ovhAccountId}/creditOrder
                 */
                $post(params: { amount: number }): Promise<billing.Order>;
            }
            movements: {
                /**
                 * Details about an entry of the OVH account
                 * GET /me/ovhAccount/{ovhAccountId}/movements
                 */
                $get(params?: { 'date.from'?: string, 'date.to'?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(movementId: number): {
                    /**
                     * Get this object properties
                     * GET /me/ovhAccount/{ovhAccountId}/movements/{movementId}
                     */
                    $get(): Promise<billing.Movement>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    requestRefund: {
                        /**
                         * request a refund of this credit note to your original payment method
                         * POST /me/ovhAccount/{ovhAccountId}/movements/{movementId}/requestRefund
                         */
                        $post(params: { amount: number }): Promise<void>;
                    }
                };
            }
            retrieveMoney: {
                /**
                 * Transfer money from ovhAccount to your bank account
                 * POST /me/ovhAccount/{ovhAccountId}/retrieveMoney
                 */
                $post(params: { amount: number, bankAccountId: number }): Promise<billing.Order>;
            }
        };
    }
    partnerLevel: {
        /**
         * Fetch the partner level of the account
         * GET /me/partnerLevel
         */
        $get(): Promise<me.partnerLevel.Level>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    passwordRecover: {
        /**
         * Request a password recover
         * POST /me/passwordRecover
         */
        $post(params: { ovhCompany: nichandle.OvhCompanyEnum, ovhId: string }): Promise<void>;
    }
    payment: {
        availableMethods: {
            /**
             * Retrieve available payment method
             * GET /me/payment/availableMethods
             */
            $get(): Promise<me.payment.AvailablePaymentMethod[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        method: {
            /**
             * Retrieve payment method list
             * GET /me/payment/method
             */
            $get(params?: { default_?: boolean, paymentType?: string, status?: me.payment.method.StatusEnum }): Promise<number[]>;
            /**
             * Register a new payment method
             * POST /me/payment/method
             */
            $post(params: { billingContactId?: number, callbackUrl: me.payment.method.CallbackUrl, default_?: boolean, description?: string, formData?: string, orderId?: number, paymentSubType?: me.payment.CreationSubTypeEnum, paymentType: string, register?: boolean }): Promise<me.payment.method.Validation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(paymentMethodId: number): {
                /**
                 * Delete a payment method
                 * DELETE /me/payment/method/{paymentMethodId}
                 */
                $delete(): Promise<me.payment.PaymentMethod>;
                /**
                 * Retrieve a payment method
                 * GET /me/payment/method/{paymentMethodId}
                 */
                $get(): Promise<me.payment.PaymentMethod>;
                /**
                 * Edit payment method
                 * PUT /me/payment/method/{paymentMethodId}
                 */
                $put(params?: { billingContactId?: number, creationDate?: string, default_?: boolean, description?: string, expirationDate?: string, formSessionId?: string, icon?: me.payment.Icon, integration?: me.payment.IntegrationEnum, label?: string, lastUpdate?: string, merchantId?: string, oneclick?: boolean, paymentMeanId?: number, paymentMethodId?: number, paymentSubType?: me.payment.AvailableSubTypeEnum, paymentType?: string, status?: me.payment.method.StatusEnum }): Promise<me.payment.PaymentMethod>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                challenge: {
                    /**
                     * Challenge your payment method
                     * POST /me/payment/method/{paymentMethodId}/challenge
                     */
                    $post(params: { challenge: string }): Promise<void>;
                }
                details: {
                    /**
                     * Add details to your payment method challenge
                     * POST /me/payment/method/{paymentMethodId}/details
                     */
                    $post(params?: { details?: string, transactionId?: number }): Promise<me.payment.method.Validation>;
                }
                finalize: {
                    /**
                     * Finalize a payment method registration
                     * POST /me/payment/method/{paymentMethodId}/finalize
                     */
                    $post(params?: { expirationMonth?: number, expirationYear?: number, formSessionId?: string, registrationId?: string }): Promise<me.payment.PaymentMethod>;
                }
            };
        }
        transaction: {
            /**
             * Retrieve payment transaction list
             * GET /me/payment/transaction
             */
            $get(params?: { paymentMethodId?: number, status?: me.payment.transaction.StatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(transactionId: number): {
                /**
                 * Retrieve a transaction
                 * GET /me/payment/transaction/{transactionId}
                 */
                $get(): Promise<me.payment.Transaction>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
    paymentMean: {
        bankAccount: {
            /**
             * List of bank accounts
             * GET /me/paymentMean/bankAccount
             */
            $get(params?: { state?: me.paymentMean.BankAccountStateEnum }): Promise<number[]>;
            /**
             * Add a new payment mean bank account
             * POST /me/paymentMean/bankAccount
             */
            $post(params: { bic: string, description?: string, iban: string, ownerAddress: string, ownerName: string, setDefault?: boolean }): Promise<me.paymentMean.BankAccountValidation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Disable payment through this account
                 * DELETE /me/paymentMean/bankAccount/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get bank account properties
                 * GET /me/paymentMean/bankAccount/{id}
                 */
                $get(): Promise<me.paymentMean.BankAccount>;
                /**
                 * Alter this object properties
                 * PUT /me/paymentMean/bankAccount/{id}
                 */
                $put(params?: { bic?: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, iban?: string, icon?: me.paymentMean.IconData, id?: number, mandateSignatureDate?: string, ownerAddress?: string, ownerName?: string, state?: me.paymentMean.BankAccountStateEnum, uniqueReference?: string, validationDocumentLink?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                challenge: {
                    /**
                     * Challenge your bank account
                     * POST /me/paymentMean/bankAccount/{id}/challenge
                     */
                    $post(params: { challenge: string }): Promise<void>;
                }
                chooseAsDefaultPaymentMean: {
                    /**
                     * Choose this bank account as your default payment mean. Will cancel the previous choice.
                     * POST /me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean
                     */
                    $post(): Promise<void>;
                }
            };
        }
        creditCard: {
            /**
             * List of payment mean credit cards
             * GET /me/paymentMean/creditCard
             */
            $get(): Promise<number[]>;
            /**
             * Add a new payment mean credit card
             * POST /me/paymentMean/creditCard
             */
            $post(params?: { description?: string, returnUrl?: string, setDefault?: boolean }): Promise<me.paymentMean.CreditCardValidation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Disable payment through this credit card
                 * DELETE /me/paymentMean/creditCard/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get credit card properties
                 * GET /me/paymentMean/creditCard/{id}
                 */
                $get(): Promise<me.paymentMean.CreditCard>;
                /**
                 * Alter this object properties
                 * PUT /me/paymentMean/creditCard/{id}
                 */
                $put(params?: { defaultPaymentMean?: boolean, description?: string, expirationDate?: string, icon?: me.paymentMean.IconData, id?: number, number?: string, state?: me.paymentMean.CreditCardStateEnum, threeDsValidated?: boolean, type?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                challenge: {
                    /**
                     * Challenge your credit card
                     * POST /me/paymentMean/creditCard/{id}/challenge
                     */
                    $post(params: { challenge: string }): Promise<void>;
                }
                chooseAsDefaultPaymentMean: {
                    /**
                     * Choose this credit card as your default payment mean. Will cancel the previous choice.
                     * POST /me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean
                     */
                    $post(): Promise<void>;
                }
            };
        }
        deferredPaymentAccount: {
            /**
             * List of payment mean deferred accounts
             * GET /me/paymentMean/deferredPaymentAccount
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /me/paymentMean/deferredPaymentAccount/{id}
                 */
                $get(): Promise<me.paymentMean.Deferred>;
                /**
                 * Alter this object properties
                 * PUT /me/paymentMean/deferredPaymentAccount/{id}
                 */
                $put(params?: { creationDate?: string, defaultPaymentMean?: boolean, description?: string, icon?: me.paymentMean.IconData, id?: number, label?: string, state?: me.paymentMean.DeferredStateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                chooseAsDefaultPaymentMean: {
                    /**
                     * Choose this deferred account as your default payment mean. Will cancel the previous choice.
                     * POST /me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean
                     */
                    $post(): Promise<void>;
                }
            };
        }
        paypal: {
            /**
             * List of payment mean paypals
             * GET /me/paymentMean/paypal
             */
            $get(): Promise<number[]>;
            /**
             * Add a new payment mean paypal
             * POST /me/paymentMean/paypal
             */
            $post(params?: { description?: string, returnUrl?: string, setDefault?: boolean }): Promise<me.paymentMean.PaypalValidation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Disable payment through this paypal
                 * DELETE /me/paymentMean/paypal/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get paypal properties
                 * GET /me/paymentMean/paypal/{id}
                 */
                $get(): Promise<me.paymentMean.Paypal>;
                /**
                 * Alter this object properties
                 * PUT /me/paymentMean/paypal/{id}
                 */
                $put(params?: { agreementId?: string, creationDate?: string, defaultPaymentMean?: boolean, description?: string, email?: string, icon?: me.paymentMean.IconData, id?: number, state?: me.paymentMean.PaypalStateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                challenge: {
                    /**
                     * Challenge your paypal
                     * POST /me/paymentMean/paypal/{id}/challenge
                     */
                    $post(params: { challenge: string }): Promise<void>;
                }
                chooseAsDefaultPaymentMean: {
                    /**
                     * Choose this paypal as your default payment mean. Will cancel the previous choice.
                     * POST /me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean
                     */
                    $post(): Promise<void>;
                }
            };
        }
    }
    refund: {
        /**
         * List of all the refunds the logged account has
         * GET /me/refund
         */
        $get(params?: { 'date.from'?: string, 'date.to'?: string, orderId?: number }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        export: {
            /**
             * Exports a bundle of refunds
             * POST /me/refund/export
             */
            $post(params: { archiveType: billing.ArchiveTypeEnum, endDate?: string, ids?: string[], startDate?: string }): Promise<void>;
        }
        $(refundId: string): {
            /**
             * Get this object properties
             * GET /me/refund/{refundId}
             */
            $get(): Promise<billing.Refund>;
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
                    $get(): Promise<billing.RefundDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            payment: {
                /**
                 * Get this object properties
                 * GET /me/refund/{refundId}/payment
                 */
                $get(): Promise<billing.Payment>;
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
            }
        };
    }
    subscription: {
        /**
         * List of all OVH things you can subscribe to
         * GET /me/subscription
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(subscriptionType: string): {
            /**
             * Get this object properties
             * GET /me/subscription/{subscriptionType}
             */
            $get(): Promise<nichandle.Subscription>;
            /**
             * Alter this object properties
             * PUT /me/subscription/{subscriptionType}
             */
            $put(params?: { registered?: boolean, type?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    supportLevel: {
        /**
         * Fetch the support level of the account
         * GET /me/supportLevel
         */
        $get(): Promise<me.SupportLevel.Level>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    tag: {
        /**
         * Retrieve customer tags list
         * GET /me/tag
         */
        $get(): Promise<string[]>;
        /**
         * Activate customer tag
         * POST /me/tag
         */
        $post(params: { reason?: string, tagName: string }): Promise<me.tag.Tag>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        available: {
            /**
             * Retrieve all available tags
             * GET /me/tag/available
             */
            $get(): Promise<me.tag.AvailableTag[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(tag: string): {
            /**
             * Delete a customer tag
             * DELETE /me/tag/{tag}
             */
            $delete(): Promise<me.tag.Tag>;
            /**
             * Retrieve a customer tag
             * GET /me/tag/{tag}
             */
            $get(): Promise<me.tag.Tag>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    task: {
        contactChange: {
            /**
             * List of service contact change tasks you are involved in
             * GET /me/task/contactChange
             */
            $get(params?: { askingAccount?: string, state?: nichandle.changeContact.TaskStateEnum, toAccount?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /me/task/contactChange/{id}
                 */
                $get(): Promise<nichandle.contactChange.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                accept: {
                    /**
                     * Accept this change request
                     * POST /me/task/contactChange/{id}/accept
                     */
                    $post(params: { token: string }): Promise<void>;
                }
                refuse: {
                    /**
                     * Refuse this change request
                     * POST /me/task/contactChange/{id}/refuse
                     */
                    $post(params: { token: string }): Promise<void>;
                }
                resendEmail: {
                    /**
                     * This call will send you a new email, containing a new token
                     * POST /me/task/contactChange/{id}/resendEmail
                     */
                    $post(): Promise<void>;
                }
            };
        }
        domain: {
            /**
             * List of domain task
             * GET /me/task/domain
             */
            $get(params?: { domain?: string, function_?: domain.NicOperationFunctionEnum, status?: domain.OperationStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /me/task/domain/{id}
                 */
                $get(): Promise<nichandle.DomainTask>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                accelerate: {
                    /**
                     * Accelerate the task
                     * POST /me/task/domain/{id}/accelerate
                     */
                    $post(): Promise<void>;
                }
                argument: {
                    /**
                     * List of arguments
                     * GET /me/task/domain/{id}/argument
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(key: string): {
                        /**
                         * Get this object properties
                         * GET /me/task/domain/{id}/argument/{key}
                         */
                        $get(): Promise<nichandle.DomainTaskArgument>;
                        /**
                         * Alter this object properties
                         * PUT /me/task/domain/{id}/argument/{key}
                         */
                        $put(params?: { acceptedFormats?: domain.DocumentFormatsEnum[], acceptedValues?: string[], description?: string, fields?: xander.ContactFieldEnum[], key?: string, maximumSize?: number, minimumSize?: number, readOnly?: boolean, template?: string, type?: string, value?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                cancel: {
                    /**
                     * Cancel the task
                     * POST /me/task/domain/{id}/cancel
                     */
                    $post(): Promise<void>;
                }
                progressbar: {
                    /**
                     * Get this object properties
                     * GET /me/task/domain/{id}/progressbar
                     */
                    $get(): Promise<nichandle.DomainTaskProgressBar>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                relaunch: {
                    /**
                     * Relaunch the task
                     * POST /me/task/domain/{id}/relaunch
                     */
                    $post(): Promise<void>;
                }
            };
        }
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
                }
                refuse: {
                    /**
                     * Refuse this change request
                     * POST /me/task/emailChange/{id}/refuse
                     */
                    $post(params: { token: string }): Promise<void>;
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
        }
    }
    withdrawal: {
        /**
         * List of all the withdrawals made from your prepaid account
         * GET /me/withdrawal
         */
        $get(params?: { 'date.from'?: string, 'date.to'?: string, orderId?: number }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(withdrawalId: string): {
            /**
             * Get this object properties
             * GET /me/withdrawal/{withdrawalId}
             */
            $get(): Promise<billing.Withdrawal>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            details: {
                /**
                 * Give access to all entries of this withdrawal
                 * GET /me/withdrawal/{withdrawalId}/details
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(withdrawalDetailId: string): {
                    /**
                     * Get this object properties
                     * GET /me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}
                     */
                    $get(): Promise<billing.WithdrawalDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            payment: {
                /**
                 * Get this object properties
                 * GET /me/withdrawal/{withdrawalId}/payment
                 */
                $get(): Promise<billing.Payment>;
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
type orderOrderDetailTypeEnum = order.OrderDetailTypeEnum;

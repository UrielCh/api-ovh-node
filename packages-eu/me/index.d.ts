import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /me Models
 */
export declare namespace agreements {
    type AgreementStateEnum = "ko" | "obsolete" | "ok" | "todo";
    interface Contract {
        active: boolean;
        date: string;
        name: string;
        pdf: string;
        text: string;
    }
    interface ContractAgreement {
        agreed: agreements.AgreementStateEnum;
        contractId: number;
        date: string;
        id: number;
    }
}
export declare namespace api {
    interface Application {
        applicationId: number;
        applicationKey: string;
        description: string;
        name: string;
        status: api.ApplicationStatusEnum;
    }
    type ApplicationStatusEnum = "active" | "blocked" | "inactive" | "trusted";
    interface Credential {
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
    interface Log {
        account: string;
        date: string;
        ip?: string;
        logId: number;
        method: http.MethodEnum;
        path: string;
        route: string;
    }
}
export declare namespace auth {
    interface AccessRule {
        method: http.MethodEnum;
        path: string;
    }
    type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated";
}
export declare namespace billing {
    interface AutomaticPaymentMean {
        bankAccount: boolean;
        creditCard: boolean;
        deferredPaymentAccount: boolean;
        paypal: boolean;
    }
    interface BankAccount {
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
    type BankAccountStateEnum = "blockedForIncidents" | "pendingValidation" | "valid";
    interface Bill {
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
    interface BillDetail {
        billDetailId: string;
        description: string;
        domain: string;
        periodEnd?: string;
        periodStart?: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    type BillingTaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo";
    interface CreditBalance {
        amount: orderPrice;
        balanceName: string;
    }
    interface CreditCard {
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
    type CreditCardStateEnum = "expired" | "tooManyFailures" | "valid";
    interface DeferredPaymentAccount {
        creationDate: string;
        defaultPaymentMean: boolean;
        description?: string;
        icon?: billing.paymentMethod.IconData;
        id: number;
        label?: string;
        state: billing.DeferredPaymentAccountStatusEnum;
    }
    type DeferredPaymentAccountStatusEnum = "valid";
    interface Deposit {
        amount: orderPrice;
        date: string;
        depositId: string;
        orderId: number;
        password: string;
        paymentInfo?: debt.associatedObject.PaymentInfo;
        pdfUrl: string;
        url: string;
    }
    interface DepositDetail {
        depositDetailId: string;
        description: string;
        domain: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    interface FidelityAccount {
        alertThreshold?: number;
        balance: number;
        canBeCredited: boolean;
        lastUpdate: string;
        openDate: string;
    }
    interface FidelityMovement {
        amount: number;
        balance: number;
        date: string;
        description: string;
        movementId: number;
        operation: billing.fidelityAccount.OperationEnum;
        order: number;
        previousBalance: number;
    }
    interface ItemDetail {
        order: billing.ItemDetail.Order;
    }
    namespace ItemDetail {
        interface Order {
            action?: billing.ItemDetail.OrderActionEnum;
            configurations: billing.ItemDetail.OrderConfiguration[];
            plan: billing.ItemDetail.OrderPlan;
        }
        type OrderActionEnum = "consumption" | "installation" | "renew" | "upgrade";
        interface OrderConfiguration {
            label: string;
            value: string;
        }
        interface OrderPlan {
            code?: string;
            duration?: string;
            pricingMode?: string;
            product: billing.ItemDetail.OrderPlanProduct;
            quantity?: number;
        }
        interface OrderPlanProduct {
            name?: string;
        }
    }
    interface ManualDomainPaymentStatus {
        domainsToMigrate?: number;
        migratedDomains?: number;
        status: billing.BillingTaskStatusEnum;
    }
    interface Movement {
        amount: orderPrice;
        balance: orderPrice;
        date: string;
        description: string;
        movementId: number;
        operation: billing.ovhAccount.OperationEnum;
        order: number;
        previousBalance: orderPrice;
    }
    interface Order {
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
    interface OrderDetail {
        cancelled: boolean;
        description: string;
        domain: string;
        orderDetailId: number;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    interface OvhAccount {
        alertThreshold?: number;
        balance: orderPrice;
        canBeCredited: boolean;
        isActive: boolean;
        lastUpdate: string;
        openDate: string;
        ovhAccountId: string;
    }
    interface Payment {
        paymentDate: string;
        paymentIdentifier?: string;
        paymentType: billing.PaymentMeanEnum;
    }
    type PaymentMeanEnum = "cash" | "chargeback" | "cheque" | "creditAccount" | "creditCard" | "debtAccount" | "deposit" | "digitalLaunchPad" | "edinar" | "fidelityPoints" | "free" | "ideal" | "incubatorAccount" | "mandat" | "multibanco" | "none" | "ovhAccount" | "paymentMandate" | "paypal" | "payu" | "platnosci" | "refund" | "transfer" | "withdrawal";
    interface PaymentMeanValidation {
        id: number;
        submitUrl?: string;
        url: string;
        validationType: billing.PaymentMeanValidationType;
    }
    type PaymentMeanValidationType = "creditAccount" | "documentToSend" | "simpleValidation";
    interface PaymentMethod {
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
    interface Paypal {
        agreementId: string;
        creationDate: string;
        defaultPaymentMean: boolean;
        description?: string;
        email: string;
        icon?: billing.paymentMethod.IconData;
        id: number;
        state: billing.PaypalStateEnum;
    }
    type PaypalStateEnum = "tooManyFailures" | "valid";
    interface Refund {
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
    interface RefundDetail {
        description: string;
        domain: string;
        quantity: string;
        reference: string;
        refundDetailId: string;
        refundId: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    type ReusablePaymentMeanEnum = "CREDIT_CARD" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL" | "bankAccount" | "creditCard" | "fidelityAccount" | "ovhAccount" | "paypal";
    interface SlaOperation {
        date: string;
        description: string;
        endDate?: string;
        id: number;
        name: string;
        startDate: string;
    }
    interface SlaOperationService {
        description: string;
        serviceName: string;
        slaApplication: string;
        slaPlan: string;
    }
    interface VoucherAccount {
        balance: orderPrice;
        lastUpdate: string;
        openDate: string;
        voucherAccountId: string;
    }
    interface VoucherMovement {
        amount: orderPrice;
        balance: orderPrice;
        date: string;
        description: string;
        movementId: number;
        operation: billing.voucherAccount.OperationEnum;
        order: number;
        previousBalance: orderPrice;
    }
    interface Withdrawal {
        amount: orderPrice;
        country: string;
        date: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        url: string;
        withdrawalId: string;
    }
    interface WithdrawalDetail {
        description: string;
        domain: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
        withdrawalDetailId: string;
    }
    namespace credit {
        interface Balance {
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
        namespace balance {
            interface BalanceDetail {
                amount: orderPrice;
                serviceId?: number;
            }
            interface BookedMovement {
                amount: orderPrice;
                orderId: number;
            }
            interface ExpiringMovement {
                amount: orderPrice;
                creationDate: string;
                expirationDate: string;
                lastUpdate: string;
                sourceObject: billing.credit.balance.movement.SubObject;
            }
            interface Movement {
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
            type Type = "PREPAID_ACCOUNT" | "VOUCHER" | "DEPOSIT" | "BONUS";
            namespace movement {
                interface SubObject {
                    id?: string;
                    name?: string;
                }
            }
        }
    }
    namespace fidelityAccount {
        type OperationEnum = "bonus" | "cancel-bonus" | "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit";
    }
    namespace order {
        interface AssociatedObject {
            id?: string;
            type?: billing.order.associatedObject.TypeEnum;
        }
        interface FollowUp {
            history: billing.order.followUp.History[];
            status: billing.order.followUp.StatusEnum;
            step: billing.order.followUp.StepEnum;
        }
        type OrderStatusEnum = "cancelled" | "cancelling" | "checking" | "delivered" | "delivering" | "documentsRequested" | "notPaid" | "unknown";
        interface PayWithPaymentMethod {
            id: number;
        }
        interface PaymentMean {
            fee: number;
            htmlForm?: string;
            httpMethod: string;
            logo?: string;
            parameters: billing.order.paymentMean.HttpParameter[];
            subType?: string;
            url: string;
        }
        interface PaymentMeans {
            creditCard?: billing.order.PaymentMean[];
            edinar?: billing.order.PaymentMean[];
            fidelityPoints?: billing.order.PaymentMean[];
            ideal?: billing.order.PaymentMean[];
            multibanco?: billing.order.PaymentMean[];
            ovhAccount?: billing.order.PaymentMean[];
            paypal?: billing.order.PaymentMean[];
            promotion?: billing.order.PaymentMean[];
        }
        interface PaymentMethods {
            available: payment.method.AvailablePaymentMethod[];
            registered: number[];
        }
        interface RegisteredPaymentMean {
            paymentMean: billing.ReusablePaymentMeanEnum;
        }
        type RetractionReasonEnum = "competitor" | "difficulty" | "expensive" | "other" | "performance" | "reliability" | "unused";
        namespace associatedObject {
            type TypeEnum = "Bill" | "Deposit" | "Refund" | "Withdrawal";
        }
        namespace followUp {
            interface History {
                date: string;
                description: string;
                label: billing.order.followUp.HistoryStatusEnum;
            }
            type HistoryStatusEnum = "DELIVERY" | "FRAUD_CHECK" | "FRAUD_DOCS_REQUESTED" | "FRAUD_MANUAL_REVIEW" | "FRAUD_REFUSED" | "INVOICE_IN_PROGRESS" | "INVOICE_SENT" | "ORDER_ACCEPTED" | "ORDER_STARTED" | "PAYMENT_CONFIRMED" | "PAYMENT_INITIATED" | "PAYMENT_RECEIVED" | "REGISTERED_PAYMENT_INITIATED";
            type StatusEnum = "DOING" | "DONE" | "ERROR" | "TODO";
            type StepEnum = "AVAILABLE" | "DELIVERING" | "VALIDATED" | "VALIDATING";
        }
        namespace paymentMean {
            interface HttpParameter {
                choice?: billing.order.paymentMean.HttpParameterChoice[];
                name: string;
                value?: string;
            }
            interface HttpParameterChoice {
                name: string;
                value: string;
            }
        }
    }
    namespace ovhAccount {
        type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit";
    }
    namespace paymentMethod {
        interface IconData {
            data?: string;
            name?: string;
        }
        type PaymentSubTypeEnum = "AMERICAN_EXPRESS" | "MASTERCARD" | "VISA";
        type PaymentTypeEnum = "BANK_ACCOUNT" | "CREDIT_CARD" | "DEFERRED_PAYMENT_ACCOUNT" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL";
        type StatusEnum = "BLOCKED" | "BLOCKED_BY_CUSTOMER" | "BROKEN" | "CANCELED" | "CANCELED_BY_CUSTOMER" | "CREATED" | "ERROR" | "EXPIRED" | "PAUSED" | "VALID" | "VALID_FOR_CREDIT";
    }
    namespace voucherAccount {
        type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit";
    }
}
export declare namespace complexType {
    interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace contact {
    interface Address {
        city: string;
        country: nichandle.CountryEnum;
        line1: string;
        line2?: string;
        line3?: string;
        otherDetails?: string;
        province?: string;
        zip: string;
    }
    interface Contact {
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
    interface FieldInformation {
        fieldName: string;
        mandatory: boolean;
        readOnly: boolean;
    }
}
export declare namespace coreTypes {
    type ContinentEnum = "africa" | "antartica" | "asia" | "europe" | "north-america" | "oceania" | "south-america";
    type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw";
}
export declare namespace debt {
    interface Balance {
        active: boolean;
        dueAmount: orderPrice;
        pendingAmount: orderPrice;
        todoAmount: orderPrice;
        unmaturedAmount: orderPrice;
    }
    interface Debt {
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
    interface Operation {
        amount: orderPrice;
        date: string;
        depositOrderId: number;
        operationId: number;
        status: debt.entry.StatusEnum;
        type?: debt.entry.OperationEnum;
    }
    namespace associatedObject {
        interface PaymentInfo {
            description?: string;
            paymentType: billing.PaymentMeanEnum;
            publicLabel?: string;
        }
        type TypeEnum = "Bill" | "DebtOperation" | "Deposit" | "Order" | "OvhAccountMovement" | "Refund" | "Withdrawal";
    }
    namespace entry {
        interface AssociatedObject {
            id?: string;
            paymentInfo?: debt.associatedObject.PaymentInfo;
            subId?: string;
            type?: debt.associatedObject.TypeEnum;
        }
        type OperationEnum = "CANCEL" | "CASH_MANUAL" | "CHECK_MANUAL" | "CREDITCARD" | "CREDITCARD_AUTOMATIC" | "CREDITCARD_MANUAL" | "CREDIT_ACCOUNT_AUTOMATIC" | "EDINAR_MANUAL" | "IDEAL_MANUAL" | "MULTIBANCO_MANUAL" | "ORDER" | "PAYPAL_AUTOMATIC" | "PAYPAL_MANUAL" | "PAYU_MANUAL" | "RECOVERY_TRANSFER_AUTOMATIC" | "REFUND" | "REFUND_CHECK" | "REFUND_CREDITCARD" | "REFUND_CREDIT_ACCOUNT" | "REFUND_LOSS" | "REFUND_PAYPAL" | "REFUND_PAYU" | "REFUND_SEPA" | "REFUND_TRANSFER" | "REFUND_UNKNOWN" | "SEPA_AUTOMATIC" | "TRANSFER_MANUAL" | "UNPAID_CHECK" | "UNPAID_CREDITCARD" | "UNPAID_CREDIT_ACCOUNT" | "UNPAID_PAYPAL" | "UNPAID_SEPA" | "UNPAID_WITHDRAW" | "WARRANT_MANUAL" | "WITHDRAW_AUTOMATIC";
        type StatusEnum = "CANCELLED" | "DONE" | "FAILED" | "PAID" | "PENDING" | "TODO";
    }
}
export declare namespace dedicated {
    type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs";
    type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60";
    type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK";
    interface TemplateOsProperties {
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    type TemplateOsTypeEnum = "bsd" | "linux" | "solaris" | "windows";
    type TemplateOsUsageEnum = "basic" | "customer" | "hosting" | "other" | "readyToUse" | "virtualisation";
    type TemplatePartitionTypeEnum = "logical" | "lv" | "primary";
    namespace installationTemplate {
        interface Templates {
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
        interface hardwareRaid {
            disks: string[];
            mode: dedicated.TemplateOsHardwareRaidEnum;
            name: string;
            step: number;
        }
        interface templatePartitioningSchemes {
            name: string;
            priority: number;
        }
        interface templatePartitions {
            filesystem: dedicated.TemplateOsFileSystemEnum;
            mountpoint: string;
            order: number;
            raid?: dedicated.server.PartitionRaidEnum;
            size: complexType.UnitAndValue<number>;
            type: dedicated.TemplatePartitionTypeEnum;
            volumeName?: string;
        }
    }
    namespace server {
        type BitFormatEnum = 32 | 64;
        type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6";
        type SupportsUEFIEnum = "no" | "only" | "yes";
    }
}
export declare namespace domain {
    type DocumentFormatsEnum = "gif" | "jpeg" | "jpg" | "pdf" | "png";
    type NicOperationFunctionEnum = "ContactControl" | "DnsAnycastActivate" | "DnsAnycastDeactivate" | "DnssecDisable" | "DnssecEnable" | "DnssecResigning" | "DnssecRollKsk" | "DnssecRollZsk" | "DomainContactControl" | "DomainContactUpdate" | "DomainControl" | "DomainCreate" | "DomainDelete" | "DomainDnsUpdate" | "DomainDsUpdate" | "DomainHold" | "DomainHostCreate" | "DomainHostDelete" | "DomainHostUpdate" | "DomainIncomingTransfer" | "DomainLock" | "DomainOutgoingTransfer" | "DomainRenew" | "DomainRestore" | "DomainTrade" | "ZoneImport";
    type OperationActionEnum = "canCancel" | "canCorrect" | "canRelaunch" | "canReset";
    type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo";
    interface OperationStep {
        description: string;
        executionDuration: number;
        step: string;
    }
}
export declare namespace geolocation {
    interface ContinentCountryLocation {
        continent: coreTypes.ContinentEnum;
        countryCode: coreTypes.CountryEnum;
        ip: string;
    }
}
export declare namespace http {
    type MethodEnum = "DELETE" | "GET" | "POST" | "PUT";
}
export declare namespace insight {
    interface Access {
        access: string;
        createdAt: string;
        expireAt: string;
    }
}
export declare namespace me {
    namespace SupportLevel {
        interface Level {
            level: me.SupportLevel.LevelTypeEnum;
        }
        type LevelTypeEnum = "standard" | "premium" | "premium-accredited" | "business" | "enterprise";
    }
    namespace billing {
        namespace group {
            interface BillingGroup {
                contactId?: number;
                creationDate: string;
                groupId: number;
                lastUpdate: string;
                name: string;
                paymentMethodId?: number;
            }
            interface Service {
                groupId: number;
                serviceId: number;
            }
            namespace service {
                interface Create {
                    serviceId: number;
                }
            }
        }
    }
    namespace consent {
        interface Campaign {
            description: string;
            name: string;
            type: me.consent.CampaignTypeEnum;
        }
        type CampaignTypeEnum = "OPTIN" | "OPTOUT";
        interface Consent {
            campaign: string;
            history: me.consent.Decision[];
            type: me.consent.CampaignTypeEnum;
            value: boolean;
        }
        interface Decision {
            timestamp: string;
            value: boolean;
        }
    }
    namespace consumption {
        interface Price {
            currencyCode: order.CurrencyCodeEnum;
            text: string;
            value: number;
            valueInUcents: number;
        }
        interface Transaction {
            beginDate: string;
            creationDate?: string;
            elements: me.consumption.transaction.Element[];
            endDate?: string;
            id?: number;
            lastUpdate?: string;
            price: me.consumption.Price;
            serviceId: number;
        }
        namespace transaction {
            interface Element {
                details: me.consumption.transaction.Element.Detail[];
                planCode: string;
                planFamily: string;
                price: me.consumption.Price;
                quantity: number;
            }
            namespace Element {
                interface Detail {
                    price: me.consumption.Price;
                    quantity: number;
                    unique_id?: string;
                }
            }
        }
    }
    namespace credit {
        interface Balance {
            amount: orderPrice;
            balanceDetails: me.credit.balance.BalanceDetails[];
            balanceName: string;
            booked: me.credit.balance.BookedMovement[];
            creationDate: string;
            expiring: me.credit.balance.ExpiringMovement[];
            lastUpdate: string;
            type: me.credit.balance.TypeEnum;
        }
        namespace balance {
            interface BalanceDetails {
                amount: orderPrice;
                balanceSubName?: string;
                expiring: me.credit.balance.ExpiringMovement[];
                serviceId?: number;
            }
            interface BookedMovement {
                amount: orderPrice;
                balanceSubName?: string;
                orderId: number;
            }
            interface ExpiringMovement {
                amount: orderPrice;
                creationDate: string;
                expirationDate: string;
                lastUpdate: string;
                sourceObject: me.credit.balance.movement.SubObject;
            }
            interface Movement {
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
            type TypeEnum = "PREPAID_ACCOUNT" | "VOUCHER" | "DEPOSIT" | "BONUS";
            namespace movement {
                interface SubObject {
                    id: string;
                    name: string;
                }
                type TypeEnum = "BONUS" | "CANCEL" | "EXPIRE" | "GIFT" | "MANUAL" | "ORDER" | "REFUND" | "UNPAID" | "USE" | "VOUCHER";
            }
        }
        namespace code {
            interface Redeem {
                inputCode: string;
                serviceId: number;
            }
        }
    }
    namespace payment {
        namespace method {
            interface AvailablePaymentMethod {
                icon: me.payment.method.Icon;
                integration: paymentmethodIntegrationType;
                oneshot: boolean;
                paymentType: string;
                registerable: boolean;
                registerableWithTransaction: boolean;
            }
            interface CallbackUrl {
                cancel: string;
                error: string;
                failure: string;
                pending: string;
                success: string;
            }
            interface Icon {
                data?: string;
                name?: string;
            }
            interface PaymentMethod {
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
            namespace PaymentMethod {
                type Status = "CANCELED" | "CANCELING" | "CREATED" | "ERROR" | "EXPIRED" | "CREATING" | "MAINTENANCE" | "PAUSED" | "VALID";
            }
            namespace Register {
                interface ValidationResult {
                    formSessionId?: string;
                    merchantId?: string;
                    organizationId?: string;
                    paymentMethodId: number;
                    url?: string;
                    validationType: paymentmethodIntegrationType;
                }
            }
            interface Transaction {
                amount: orderPrice;
                creationDate: string;
                status: me.payment.method.Transaction.Status;
                transactionId: number;
                type: me.payment.method.Transaction.Type;
            }
            namespace Transaction {
                type Status = "CANCELED" | "CANCELING" | "CONFIRMING" | "CREATED" | "ERROR" | "FAILED" | "READY" | "SUCCESS";
                type Type = "CREDIT" | "DEBIT";
            }
        }
    }
}
export declare namespace nichandle {
    namespace Authentication {
        interface Certificate {
            expiration: string;
            subject: string;
        }
        interface Group {
            creation: string;
            defaultGroup: boolean;
            description: string;
            lastUpdate: string;
            name: string;
            role: nichandle.RoleEnum;
        }
        interface Provider {
            creation: string;
            groupAttributeName: string;
            idpSigningCertificate: nichandle.Authentication.Certificate;
            lastUpdate: string;
            ssoServiceUrl: string;
        }
    }
    interface BillingCapacities {
        canUseDebtSystem: boolean;
        canUsePostalMailForInvoices: boolean;
        requiredPaymentMethod: nichandle.RequiredPaymentMethodEnum;
    }
    type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
    interface Currency {
        code: string;
        symbol: string;
    }
    interface DeveloperModeRestriction {
        enabled: boolean;
    }
    interface DomainTask {
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
    interface DomainTaskArgument {
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
    interface DomainTaskProgressBar {
        currentStep: domain.OperationStep;
        expectedDoneDate?: string;
        followUpSteps?: domain.OperationStep[];
        lastUpdateDate?: string;
        progress: number;
        taskActions: domain.OperationActionEnum[];
        taskStatus: domain.OperationStatusEnum;
    }
    type GenderEnum = "female" | "male";
    type IpRegistryEnum = "ARIN" | "RIPE";
    interface IpRestriction {
        id: number;
        ip: string;
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    interface IpRestrictionDefaultRule {
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    interface Ipv4Org {
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
    type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT";
    type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation";
    interface ManagerPreference {
        key: string;
        value: string;
    }
    interface NicAutorenewInfos {
        active: boolean;
        lastRenew?: string;
        renewDay: number;
    }
    interface Nichandle {
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
    interface NichandleSmsNotification {
        abuse: boolean;
        creationDate: string;
        phoneNumber: string;
        status: nichandle.NotificationStatusEnum;
        updateDate?: string;
    }
    type NotificationStatusEnum = "ok" | "waitingForValidation";
    type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart";
    type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS";
    type RequiredPaymentMethodEnum = "mandatoryForAutorenew" | "mandatoryForPostpaid" | "notMandatory";
    type RoleEnum = "REGULAR" | "ADMIN" | "UNPRIVILEGED";
    type StateEnum = "complete" | "incomplete";
    interface SubAccount {
        creationDate: string;
        description?: string;
        id: number;
    }
    interface SubAccountConsumerKey {
        consumerKey: string;
    }
    interface Subscription {
        registered?: boolean;
        type: string;
    }
    interface User {
        creation: string;
        description: string;
        email: string;
        group: string;
        lastUpdate: string;
        login: string;
        passwordLastUpdate: string;
        status: nichandle.UserStatus;
    }
    type UserStatus = "OK" | "DISABLED" | "PASSWORD_CHANGE_REQUIRED";
    interface VipStatus {
        cloud: boolean;
        dedicated: boolean;
        telecom: boolean;
        web: boolean;
    }
    interface VoucherStatus {
        validity: boolean;
    }
    namespace accessRestriction {
        type IpRestrictionRuleEnum = "accept" | "deny";
        interface SOTPAccount {
            creationDate: string;
            lastUsedDate?: string;
            remaining: number;
            status: nichandle.accessRestriction.SOTPStatusEnum;
        }
        interface SOTPSecret {
            codes: string[];
        }
        type SOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation";
        interface SOTPValidate {
            remainingCodes: number;
        }
        interface SmsAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            phoneNumber: string;
            status: nichandle.accessRestriction.SmsStatusEnum;
        }
        interface SmsCode {
            challenge: string;
        }
        interface SmsSecret {
            id: number;
            remainingTry: number;
        }
        type SmsStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation";
        interface TOTPAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.TOTPStatusEnum;
        }
        interface TOTPSecret {
            id: number;
            qrcodeHelper: string;
            secret: string;
        }
        type TOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation";
        interface U2FAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.U2FStatusEnum;
        }
        interface U2FRegisterChallenge {
            applicationId: string;
            id: number;
            request: nichandle.accessRestriction.U2FRegistrationRequest;
        }
        interface U2FRegistrationRequest {
            challenge: string;
            version: string;
        }
        interface U2FSignChallenge {
            applicationId: string;
            request: nichandle.accessRestriction.U2FSignRequest;
        }
        interface U2FSignRequest {
            challenge: string;
            keyHandle: string;
            version: string;
        }
        type U2FStatusEnum = "disabled" | "enabled" | "needCodeValidation";
    }
    namespace changeContact {
        type ContactTypeEnum = "contactAdmin" | "contactBilling" | "contactTech";
        type TaskStateEnum = "aborted" | "checkValidity" | "doing" | "done" | "error" | "expired" | "refused" | "todo" | "validatingByCustomers";
    }
    namespace changeEmail {
        type TaskStateEnum = "aborted" | "done" | "refused" | "todo";
    }
    namespace contactChange {
        interface Task {
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
    namespace document {
        interface Document {
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
    namespace emailChange {
        interface Task {
            dateDone?: string;
            dateRequest: string;
            id: number;
            newEmail: string;
            state: nichandle.changeEmail.TaskStateEnum;
        }
    }
    interface emailNotification {
        body: string;
        date: string;
        id: number;
        subject: string;
    }
    interface ipxe {
        name: string;
        script: string;
    }
    interface sshKey {
        default: boolean;
        key: string;
        keyName: string;
    }
}
export declare namespace order {
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export declare namespace payment {
    namespace method {
        interface AvailablePaymentMethod {
            icon: payment.method.Icon;
            integration: paymentmethodIntegrationType;
            oneshot: boolean;
            paymentType: string;
            registerable: boolean;
            registerableWithTransaction: boolean;
        }
        interface Icon {
            data?: string;
            name?: string;
        }
        type IntegrationType = "DONE" | "IFRAME_VANTIV" | "IN_CONTEXT" | "REDIRECT";
    }
}
export declare namespace telephony {
    interface BillingSettings {
        renewByBillingContact: boolean;
    }
    interface DefaultIpRestriction {
        id: number;
        subnet: string;
        type: telephony.ProtocolEnum;
    }
    interface LineDescriptionSettings {
        displayOnBill: boolean;
        displayOnIncomingCall: boolean;
    }
    interface MailDomain2Service {
        domain: string;
        id: number;
    }
    type ProtocolEnum = "mgcp" | "sip";
    interface Settings {
        billingPolicies: telephony.BillingSettings;
        lineDescriptionPolicies: telephony.LineDescriptionSettings;
    }
}
export declare namespace xander {
    type ContactFieldEnum = "address.city" | "address.country" | "address.line1" | "address.line2" | "address.line3" | "address.otherDetails" | "address.province" | "address.zip" | "birthCity" | "birthCountry" | "birthDay" | "birthZip" | "cellPhone" | "companyNationalIdentificationNumber" | "email" | "fax" | "firstName" | "gender" | "language" | "lastName" | "legalForm" | "nationalIdentificationNumber" | "nationality" | "organisationName" | "organisationType" | "phone" | "spareEmail" | "vat";
}
export declare namespace xdsl {
    interface Setting {
        resellerFastModemShipping: boolean;
        resellerModemBasicConfig: boolean;
    }
}
/**
 * END API /me Models
 */
export declare function proxyMe(ovhEngine: OvhRequestable): Me;
export default proxyMe;
/**
 * Api Proxy model
 */ export interface Me {
    $get(): Promise<nichandle.Nichandle>;
    $put(params?: {
        address?: string;
        area?: string;
        birthCity?: string;
        birthDay?: string;
        city?: string;
        companyNationalIdentificationNumber?: string;
        corporationType?: string;
        country?: nichandle.CountryEnum;
        currency?: nichandle.Currency;
        customerCode?: string;
        email?: string;
        fax?: string;
        firstname?: string;
        italianSDI?: string;
        language?: nichandle.LanguageEnum;
        legalform?: nichandle.LegalFormEnum;
        name?: string;
        nationalIdentificationNumber?: string;
        nichandle?: string;
        organisation?: string;
        ovhCompany?: nichandle.OvhCompanyEnum;
        ovhSubsidiary?: nichandle.OvhSubsidiaryEnum;
        phone?: string;
        phoneCountry?: nichandle.CountryEnum;
        sex?: nichandle.GenderEnum;
        spareEmail?: string;
        state?: nichandle.StateEnum;
        vat?: string;
        zip?: string;
    }): Promise<void>;
    accessRestriction: {
        backupCode: {
            $delete(): Promise<void>;
            $get(): Promise<nichandle.accessRestriction.SOTPAccount>;
            $post(): Promise<nichandle.accessRestriction.SOTPSecret>;
            disable: {
                $post(params: {
                    code: string;
                }): Promise<void>;
            };
            enable: {
                $post(params: {
                    code: string;
                }): Promise<void>;
            };
            validate: {
                $post(params: {
                    code: string;
                }): Promise<nichandle.accessRestriction.SOTPValidate>;
            };
        };
        developerMode: {
            $get(): Promise<nichandle.DeveloperModeRestriction>;
            $put(params?: {
                enabled?: boolean;
            }): Promise<void>;
        };
        ip: {
            $get(): Promise<number[]>;
            $post(params: {
                ip: string;
                rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
                warning: boolean;
            }): Promise<void>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<nichandle.IpRestriction>;
                $put(params?: {
                    id?: number;
                    ip?: string;
                    rule?: nichandle.accessRestriction.IpRestrictionRuleEnum;
                    warning?: boolean;
                }): Promise<void>;
            };
        };
        ipDefaultRule: {
            $get(): Promise<nichandle.IpRestrictionDefaultRule>;
            $put(params?: {
                rule?: nichandle.accessRestriction.IpRestrictionRuleEnum;
                warning?: boolean;
            }): Promise<void>;
        };
        sms: {
            $get(): Promise<number[]>;
            $post(params: {
                phone: string;
            }): Promise<nichandle.accessRestriction.SmsSecret>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<nichandle.accessRestriction.SmsAccount>;
                $put(params?: {
                    creationDate?: string;
                    description?: string;
                    id?: number;
                    lastUsedDate?: string;
                    phoneNumber?: string;
                    status?: nichandle.accessRestriction.SmsStatusEnum;
                }): Promise<void>;
                disable: {
                    $post(params: {
                        code: string;
                    }): Promise<void>;
                };
                enable: {
                    $post(params: {
                        code: string;
                    }): Promise<void>;
                };
                sendCode: {
                    $post(): Promise<nichandle.accessRestriction.SmsCode>;
                };
                validate: {
                    $post(params: {
                        code: string;
                    }): Promise<void>;
                };
            };
        };
        totp: {
            $get(): Promise<number[]>;
            $post(): Promise<nichandle.accessRestriction.TOTPSecret>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<nichandle.accessRestriction.TOTPAccount>;
                $put(params?: {
                    creationDate?: string;
                    description?: string;
                    id?: number;
                    lastUsedDate?: string;
                    status?: nichandle.accessRestriction.TOTPStatusEnum;
                }): Promise<void>;
                disable: {
                    $post(params: {
                        code: string;
                    }): Promise<void>;
                };
                enable: {
                    $post(params: {
                        code: string;
                    }): Promise<void>;
                };
                validate: {
                    $post(params: {
                        code: string;
                    }): Promise<void>;
                };
            };
        };
        u2f: {
            $get(): Promise<number[]>;
            $post(): Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<nichandle.accessRestriction.U2FAccount>;
                $put(params?: {
                    creationDate?: string;
                    description?: string;
                    id?: number;
                    lastUsedDate?: string;
                    status?: nichandle.accessRestriction.U2FStatusEnum;
                }): Promise<void>;
                challenge: {
                    $post(): Promise<nichandle.accessRestriction.U2FSignChallenge>;
                };
                disable: {
                    $post(params: {
                        clientData: string;
                        signatureData: string;
                    }): Promise<void>;
                };
                enable: {
                    $post(params: {
                        clientData: string;
                        signatureData: string;
                    }): Promise<void>;
                };
                validate: {
                    $post(params: {
                        clientData: string;
                        registrationData: string;
                    }): Promise<void>;
                };
            };
        };
    };
    agreements: {
        $get(params?: {
            agreed?: agreements.AgreementStateEnum;
            contractId?: number;
        }): Promise<number[]>;
        $(id: number): {
            $get(): Promise<agreements.ContractAgreement>;
            accept: {
                $post(): Promise<string>;
            };
            contract: {
                $get(): Promise<agreements.Contract>;
            };
        };
    };
    api: {
        application: {
            $get(): Promise<number[]>;
            $(applicationId: number): {
                $delete(): Promise<void>;
                $get(): Promise<api.Application>;
            };
        };
        credential: {
            $get(params?: {
                applicationId?: number;
                status?: auth.CredentialStateEnum;
            }): Promise<number[]>;
            $(credentialId: number): {
                $delete(): Promise<void>;
                $get(): Promise<api.Credential>;
                application: {
                    $get(): Promise<api.Application>;
                };
            };
        };
        logs: {
            self: {
                $get(): Promise<number[]>;
                $(logId: number): {
                    $get(): Promise<api.Log>;
                };
            };
            services: {
                $get(): Promise<number[]>;
                $(logId: number): {
                    $get(): Promise<api.Log>;
                };
            };
        };
    };
    autorenew: {
        $get(): Promise<nichandle.NicAutorenewInfos>;
        $post(params: {
            renewDay: number;
        }): Promise<void>;
        $put(params?: {
            active?: boolean;
            lastRenew?: string;
            renewDay?: number;
        }): Promise<void>;
    };
    availableAutomaticPaymentMeans: {
        $get(): Promise<billing.AutomaticPaymentMean>;
    };
    bill: {
        $get(params?: {
            date_from?: string;
            date_to?: string;
            orderId?: number;
        }): Promise<string[]>;
        $(billId: string): {
            $get(): Promise<billing.Bill>;
            debt: {
                $get(): Promise<debt.Debt>;
                operation: {
                    $get(params?: {
                        depositOrderId?: number;
                    }): Promise<number[]>;
                    $(operationId: number): {
                        $get(): Promise<debt.Operation>;
                        associatedObject: {
                            $get(): Promise<debt.entry.AssociatedObject>;
                        };
                    };
                };
                pay: {
                    $post(): Promise<billing.Order>;
                };
            };
            details: {
                $get(): Promise<string[]>;
                $(billDetailId: string): {
                    $get(): Promise<billing.BillDetail>;
                };
            };
            payment: {
                $get(): Promise<billing.Payment>;
            };
        };
    };
    billing: {
        group: {
            $get(params?: {
                name?: string;
            }): Promise<number[]>;
            $post(params?: {
                contactId?: number;
                creationDate?: string;
                groupId?: number;
                lastUpdate?: string;
                name?: string;
                paymentMethodId?: number;
            }): Promise<me.billing.group.BillingGroup>;
            $(groupId: number): {
                $delete(): Promise<void>;
                $get(): Promise<me.billing.group.BillingGroup>;
                $put(params?: {
                    contactId?: number;
                    creationDate?: string;
                    groupId?: number;
                    lastUpdate?: string;
                    name?: string;
                    paymentMethodId?: number;
                }): Promise<void>;
                service: {
                    $get(): Promise<number[]>;
                    $post(params: {
                        serviceId: number;
                    }): Promise<me.billing.group.Service>;
                    $(serviceId: number): {
                        $delete(): Promise<void>;
                        $get(): Promise<me.billing.group.Service>;
                    };
                };
            };
        };
        invoicesByPostalMail: {
            $get(): Promise<boolean>;
            $post(params: {
                enable: boolean;
            }): Promise<void>;
        };
    };
    certificates: {
        $get(params?: {
            name?: string;
        }): Promise<string[]>;
    };
    changeEmail: {
        $post(params: {
            newEmail: string;
        }): Promise<nichandle.emailChange.Task>;
    };
    changePassword: {
        $post(): Promise<void>;
    };
    consent: {
        $get(): Promise<me.consent.Campaign[]>;
        $(campaignName: string): {
            $get(): Promise<me.consent.Campaign>;
            decision: {
                $get(): Promise<me.consent.Consent>;
                $put(params: {
                    value: boolean;
                }): Promise<void>;
            };
        };
    };
    consumption: {
        usage: {
            current: {
                $get(): Promise<me.consumption.Transaction[]>;
            };
            forecast: {
                $get(): Promise<me.consumption.Transaction[]>;
            };
            history: {
                $get(params: {
                    beginDate: string;
                    endDate: string;
                }): Promise<me.consumption.Transaction[]>;
            };
        };
    };
    contact: {
        $get(): Promise<number[]>;
        $post(params: {
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
            language: nichandle.LanguageEnum;
            lastName: string;
            legalForm: nichandle.LegalFormEnum;
            nationalIdentificationNumber?: string;
            nationality?: nichandle.CountryEnum;
            organisationName?: string;
            organisationType?: string;
            phone: string;
            vat?: string;
        }): Promise<contact.Contact>;
        $(contactId: number): {
            $get(): Promise<contact.Contact>;
            $put(params?: {
                address?: contact.Address;
                birthCity?: string;
                birthCountry?: nichandle.CountryEnum;
                birthDay?: string;
                birthZip?: string;
                cellPhone?: string;
                companyNationalIdentificationNumber?: string;
                email?: string;
                fax?: string;
                firstName?: string;
                gender?: nichandle.GenderEnum;
                language?: nichandle.LanguageEnum;
                lastName?: string;
                legalForm?: nichandle.LegalFormEnum;
                nationalIdentificationNumber?: string;
                nationality?: nichandle.CountryEnum;
                organisationName?: string;
                organisationType?: string;
                phone?: string;
                vat?: string;
            }): Promise<contact.Contact>;
            fields: {
                $get(): Promise<contact.FieldInformation[]>;
            };
        };
    };
    credit: {
        balance: {
            $get(params?: {
                type?: me.credit.balance.TypeEnum;
            }): Promise<string[]>;
            $(balanceName: string): {
                $get(): Promise<me.credit.Balance>;
                movement: {
                    $get(): Promise<number[]>;
                    $(movementId: number): {
                        $get(): Promise<me.credit.balance.Movement>;
                    };
                };
            };
        };
        code: {
            $post(params: {
                inputCode: string;
                serviceId?: number;
            }): Promise<me.credit.balance.Movement>;
        };
    };
    debtAccount: {
        $get(): Promise<debt.Balance>;
        debt: {
            $get(): Promise<number[]>;
            $(debtId: number): {
                $get(): Promise<debt.Debt>;
                operation: {
                    $get(params?: {
                        depositOrderId?: number;
                    }): Promise<number[]>;
                    $(operationId: number): {
                        $get(): Promise<debt.Operation>;
                        associatedObject: {
                            $get(): Promise<debt.entry.AssociatedObject>;
                        };
                    };
                };
                pay: {
                    $post(): Promise<billing.Order>;
                };
            };
        };
        pay: {
            $post(): Promise<billing.Order>;
        };
    };
    deposit: {
        $get(params?: {
            date_from?: string;
            date_to?: string;
            orderId?: number;
        }): Promise<string[]>;
        $(depositId: string): {
            $get(): Promise<billing.Deposit>;
            details: {
                $get(): Promise<string[]>;
                $(depositDetailId: string): {
                    $get(): Promise<billing.DepositDetail>;
                };
            };
            paidBills: {
                $get(): Promise<string[]>;
                $(billId: string): {
                    $get(): Promise<billing.Bill>;
                    debt: {
                        $get(): Promise<debt.Debt>;
                        operation: {
                            $get(params?: {
                                depositOrderId?: number;
                            }): Promise<number[]>;
                            $(operationId: number): {
                                $get(): Promise<debt.Operation>;
                                associatedObject: {
                                    $get(): Promise<debt.entry.AssociatedObject>;
                                };
                            };
                        };
                        pay: {
                            $post(): Promise<billing.Order>;
                        };
                    };
                    details: {
                        $get(): Promise<string[]>;
                        $(billDetailId: string): {
                            $get(): Promise<billing.BillDetail>;
                        };
                    };
                    payment: {
                        $get(): Promise<billing.Payment>;
                    };
                };
            };
            payment: {
                $get(): Promise<billing.Payment>;
            };
        };
    };
    document: {
        $get(): Promise<string[]>;
        $post(params: {
            name: string;
            tags?: complexType.SafeKeyValue<string>[];
        }): Promise<nichandle.document.Document>;
        cors: {
            $post(params: {
                origin: string;
            }): Promise<void>;
        };
        $(id: string): {
            $delete(): Promise<void>;
            $get(): Promise<nichandle.document.Document>;
            $put(params?: {
                creationDate?: string;
                expirationDate?: string;
                getUrl?: string;
                id?: string;
                name?: string;
                putUrl?: string;
                size?: number;
                tags?: complexType.SafeKeyValue<string>[];
                validationDate?: string;
            }): Promise<void>;
        };
    };
    fax: {
        customDomains: {
            $get(): Promise<number[]>;
            $post(params: {
                domain: string;
            }): Promise<telephony.MailDomain2Service>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<telephony.MailDomain2Service>;
            };
        };
    };
    fidelityAccount: {
        $get(): Promise<billing.FidelityAccount>;
        $put(params?: {
            alertThreshold?: number;
            balance?: number;
            canBeCredited?: boolean;
            lastUpdate?: string;
            openDate?: string;
        }): Promise<void>;
        creditOrder: {
            $post(params: {
                amount: number;
            }): Promise<billing.Order>;
        };
        movements: {
            $get(params?: {
                date_from?: string;
                date_to?: string;
            }): Promise<number[]>;
            $(movementId: number): {
                $get(): Promise<billing.FidelityMovement>;
            };
        };
    };
    geolocation: {
        $post(): Promise<geolocation.ContinentCountryLocation>;
    };
    identity: {
        group: {
            $get(): Promise<string[]>;
            $post(params: {
                description?: string;
                name: string;
                role?: nichandle.RoleEnum;
            }): Promise<nichandle.Authentication.Group>;
            $(group: string): {
                $delete(): Promise<void>;
                $get(): Promise<nichandle.Authentication.Group>;
                $put(params?: {
                    description?: string;
                    role?: nichandle.RoleEnum;
                }): Promise<void>;
            };
        };
        user: {
            $get(): Promise<string[]>;
            $post(params: {
                description?: string;
                email: string;
                group?: string;
                login: string;
                password: string;
            }): Promise<void>;
            $(user: string): {
                $delete(): Promise<void>;
                $get(): Promise<nichandle.User>;
                $put(params?: {
                    description?: string;
                    email?: string;
                    group?: string;
                }): Promise<void>;
                disable: {
                    $post(): Promise<void>;
                };
                enable: {
                    $post(): Promise<void>;
                };
            };
        };
    };
    insight: {
        $get(): Promise<insight.Access>;
    };
    installationTemplate: {
        $get(): Promise<string[]>;
        $post(params: {
            baseTemplateName: string;
            defaultLanguage: dedicated.TemplateOsLanguageEnum;
            name: string;
        }): Promise<void>;
        $(templateName: string): {
            $delete(): Promise<void>;
            $get(): Promise<dedicated.installationTemplate.Templates>;
            $put(params?: {
                availableLanguages?: dedicated.TemplateOsLanguageEnum[];
                beta?: boolean;
                bitFormat?: dedicated.server.BitFormatEnum;
                category?: dedicated.TemplateOsUsageEnum;
                customization?: dedicated.TemplateOsProperties;
                defaultLanguage?: dedicated.TemplateOsLanguageEnum;
                deprecated?: boolean;
                description?: string;
                distribution?: string;
                family?: dedicated.TemplateOsTypeEnum;
                filesystems?: dedicated.TemplateOsFileSystemEnum[];
                hardRaidConfiguration?: boolean;
                lastModification?: string;
                lvmReady?: boolean;
                supportsDistributionKernel?: boolean;
                supportsGptLabel?: boolean;
                supportsRTM?: boolean;
                supportsSqlServer?: boolean;
                supportsUEFI?: dedicated.server.SupportsUEFIEnum;
                templateName?: string;
            }): Promise<void>;
            checkIntegrity: {
                $post(): Promise<void>;
            };
            partitionScheme: {
                $get(): Promise<string[]>;
                $post(params: {
                    name: string;
                    priority: number;
                }): Promise<void>;
                $(schemeName: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    $put(params?: {
                        name?: string;
                        priority?: number;
                    }): Promise<void>;
                    hardwareRaid: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            disks: string[];
                            mode: dedicated.TemplateOsHardwareRaidEnum;
                            name: string;
                            step: number;
                        }): Promise<void>;
                        $(name: string): {
                            $delete(): Promise<void>;
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                            $put(params?: {
                                disks?: string[];
                                mode?: dedicated.TemplateOsHardwareRaidEnum;
                                name?: string;
                                step?: number;
                            }): Promise<void>;
                        };
                    };
                    partition: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            filesystem: dedicated.TemplateOsFileSystemEnum;
                            mountpoint: string;
                            raid?: number;
                            size: number;
                            step: number;
                            type: dedicated.TemplatePartitionTypeEnum;
                            volumeName?: string;
                        }): Promise<void>;
                        $(mountpoint: string): {
                            $delete(): Promise<void>;
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                            $put(params?: {
                                filesystem?: dedicated.TemplateOsFileSystemEnum;
                                mountpoint?: string;
                                order?: number;
                                raid?: dedicated.server.PartitionRaidEnum;
                                size?: complexType.UnitAndValue<number>;
                                type?: dedicated.TemplatePartitionTypeEnum;
                                volumeName?: string;
                            }): Promise<void>;
                        };
                    };
                };
            };
        };
    };
    ipOrganisation: {
        $get(): Promise<string[]>;
        $post(params: {
            abuse_mailbox: string;
            address: string;
            city: string;
            country: nichandle.CountryEnum;
            firstname: string;
            lastname: string;
            phone: string;
            registry: nichandle.IpRegistryEnum;
            state?: string;
            zip?: string;
        }): Promise<void>;
        $(organisationId: string): {
            $delete(): Promise<void>;
            $get(): Promise<nichandle.Ipv4Org>;
            $put(params?: {
                abuse_mailbox?: string;
                address?: string;
                city?: string;
                country?: nichandle.CountryEnum;
                firstname?: string;
                lastname?: string;
                organisationId?: string;
                phone?: string;
                registry?: nichandle.IpRegistryEnum;
                state?: string;
                zip?: string;
            }): Promise<void>;
        };
    };
    ipxeScript: {
        $get(): Promise<string[]>;
        $post(params: {
            description: string;
            name: string;
            script: string;
        }): Promise<nichandle.ipxe>;
        $(name: string): {
            $delete(): Promise<void>;
            $get(): Promise<nichandle.ipxe>;
        };
    };
    mailingList: {
        availableLists: {
            $get(): Promise<string[]>;
        };
        subscribe: {
            $post(params: {
                email: string;
                mailingList: string;
            }): Promise<void>;
        };
    };
    notification: {
        email: {
            history: {
                $get(): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<nichandle.emailNotification>;
                };
            };
        };
    };
    order: {
        $get(params?: {
            date_from?: string;
            date_to?: string;
        }): Promise<number[]>;
        $(orderId: number): {
            $get(): Promise<billing.Order>;
            associatedObject: {
                $get(): Promise<billing.order.AssociatedObject>;
            };
            availableRegisteredPaymentMean: {
                $get(): Promise<billing.order.RegisteredPaymentMean[]>;
            };
            bill: {
                $get(): Promise<billing.Bill>;
            };
            debt: {
                $get(): Promise<debt.Debt>;
                operation: {
                    $get(params?: {
                        depositOrderId?: number;
                    }): Promise<number[]>;
                    $(operationId: number): {
                        $get(): Promise<debt.Operation>;
                        associatedObject: {
                            $get(): Promise<debt.entry.AssociatedObject>;
                        };
                    };
                };
                pay: {
                    $post(): Promise<billing.Order>;
                };
            };
            details: {
                $get(): Promise<number[]>;
                $(orderDetailId: number): {
                    $get(): Promise<billing.OrderDetail>;
                    extension: {
                        $get(): Promise<billing.ItemDetail>;
                    };
                };
            };
            pay: {
                $post(params: {
                    paymentMethod: billing.order.PayWithPaymentMethod;
                }): Promise<void>;
            };
            payWithRegisteredPaymentMean: {
                $post(params: {
                    paymentMean: billing.ReusablePaymentMeanEnum;
                    paymentMeanId?: number;
                }): Promise<void>;
            };
            payment: {
                $get(): Promise<billing.Payment>;
            };
            paymentMeans: {
                $get(): Promise<billing.order.PaymentMeans>;
            };
            paymentMethods: {
                $get(): Promise<billing.order.PaymentMethods>;
            };
            refund: {
                $get(): Promise<billing.Refund>;
            };
            retraction: {
                $post(params: {
                    comment?: string;
                    reason: billing.order.RetractionReasonEnum;
                }): Promise<void>;
            };
            status: {
                $get(): Promise<billing.order.OrderStatusEnum>;
            };
        };
    };
    ovhAccount: {
        $get(): Promise<string[]>;
        $(ovhAccountId: string): {
            $get(): Promise<billing.OvhAccount>;
            $put(params?: {
                alertThreshold?: number;
                balance?: orderPrice;
                canBeCredited?: boolean;
                isActive?: boolean;
                lastUpdate?: string;
                openDate?: string;
                ovhAccountId?: string;
            }): Promise<void>;
            creditOrder: {
                $post(params: {
                    amount: number;
                }): Promise<billing.Order>;
            };
            movements: {
                $get(params?: {
                    date_from?: string;
                    date_to?: string;
                }): Promise<number[]>;
                $(movementId: number): {
                    $get(): Promise<billing.Movement>;
                };
            };
            retrieveMoney: {
                $post(params: {
                    amount: number;
                    bankAccountId: number;
                }): Promise<billing.Order>;
            };
        };
    };
    passwordRecover: {
        $post(params: {
            ovhCompany: nichandle.OvhCompanyEnum;
            ovhId: string;
        }): Promise<void>;
    };
    payment: {
        availableMethods: {
            $get(): Promise<me.payment.method.AvailablePaymentMethod[]>;
        };
        method: {
            $get(params?: {
                paymentType?: string;
                status?: me.payment.method.PaymentMethod.Status;
            }): Promise<number[]>;
            $post(params: {
                callbackUrl: me.payment.method.CallbackUrl;
                default_?: boolean;
                description?: string;
                orderId?: number;
                paymentType: string;
                register?: boolean;
            }): Promise<me.payment.method.Register.ValidationResult>;
            $(paymentMethodId: number): {
                $delete(): Promise<me.payment.method.PaymentMethod>;
                $get(): Promise<me.payment.method.PaymentMethod>;
                $put(params?: {
                    default_?: boolean;
                    description?: string;
                }): Promise<billing.PaymentMethod>;
                challenge: {
                    $post(params: {
                        challenge: string;
                    }): Promise<me.payment.method.PaymentMethod>;
                };
                finalize: {
                    $post(params?: {
                        expirationMonth?: number;
                        expirationYear?: number;
                        formSessionId?: string;
                        registrationId?: string;
                    }): Promise<me.payment.method.PaymentMethod>;
                };
            };
        };
        transaction: {
            $get(params?: {
                paymentMethodId?: number;
                status?: me.payment.method.Transaction.Status;
            }): Promise<number[]>;
            $(transactionId: number): {
                $get(): Promise<me.payment.method.Transaction>;
            };
        };
    };
    paymentMean: {
        bankAccount: {
            $get(params?: {
                state?: billing.BankAccountStateEnum;
            }): Promise<number[]>;
            $post(params: {
                bic: string;
                description?: string;
                iban: string;
                ownerAddress: string;
                ownerName: string;
                setDefault?: boolean;
            }): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<billing.BankAccount>;
                $put(params?: {
                    bic?: string;
                    creationDate?: string;
                    defaultPaymentMean?: boolean;
                    description?: string;
                    iban?: string;
                    icon?: billing.paymentMethod.IconData;
                    id?: number;
                    mandateSignatureDate?: string;
                    ownerAddress?: string;
                    ownerName?: string;
                    state?: billing.BankAccountStateEnum;
                    uniqueReference?: string;
                    validationDocumentLink?: string;
                }): Promise<void>;
                challenge: {
                    $post(params: {
                        challenge: string;
                    }): Promise<void>;
                };
                chooseAsDefaultPaymentMean: {
                    $post(): Promise<void>;
                };
            };
        };
        creditCard: {
            $get(): Promise<number[]>;
            $post(params?: {
                description?: string;
                returnUrl?: string;
                setDefault?: boolean;
            }): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<billing.CreditCard>;
                $put(params?: {
                    defaultPaymentMean?: boolean;
                    description?: string;
                    expirationDate?: string;
                    icon?: billing.paymentMethod.IconData;
                    id?: number;
                    number?: string;
                    state?: billing.CreditCardStateEnum;
                    threeDsValidated?: boolean;
                    type?: string;
                }): Promise<void>;
                challenge: {
                    $post(params: {
                        challenge: string;
                    }): Promise<void>;
                };
                chooseAsDefaultPaymentMean: {
                    $post(): Promise<void>;
                };
            };
        };
        deferredPaymentAccount: {
            $get(): Promise<number[]>;
            $(id: number): {
                $get(): Promise<billing.DeferredPaymentAccount>;
                $put(params?: {
                    creationDate?: string;
                    defaultPaymentMean?: boolean;
                    description?: string;
                    icon?: billing.paymentMethod.IconData;
                    id?: number;
                    label?: string;
                    state?: billing.DeferredPaymentAccountStatusEnum;
                }): Promise<void>;
                chooseAsDefaultPaymentMean: {
                    $post(): Promise<void>;
                };
            };
        };
        paypal: {
            $get(): Promise<number[]>;
            $post(params?: {
                description?: string;
                returnUrl?: string;
                setDefault?: boolean;
            }): Promise<billing.PaymentMeanValidation>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<billing.Paypal>;
                $put(params?: {
                    agreementId?: string;
                    creationDate?: string;
                    defaultPaymentMean?: boolean;
                    description?: string;
                    email?: string;
                    icon?: billing.paymentMethod.IconData;
                    id?: number;
                    state?: billing.PaypalStateEnum;
                }): Promise<void>;
                challenge: {
                    $post(params: {
                        challenge: string;
                    }): Promise<void>;
                };
                chooseAsDefaultPaymentMean: {
                    $post(): Promise<void>;
                };
            };
        };
    };
    refund: {
        $get(params?: {
            date_from?: string;
            date_to?: string;
            orderId?: number;
        }): Promise<string[]>;
        $(refundId: string): {
            $get(): Promise<billing.Refund>;
            details: {
                $get(): Promise<string[]>;
                $(refundDetailId: string): {
                    $get(): Promise<billing.RefundDetail>;
                };
            };
            payment: {
                $get(): Promise<billing.Payment>;
            };
        };
    };
    sla: {
        $get(): Promise<number[]>;
        $(id: number): {
            $get(): Promise<billing.SlaOperation>;
            apply: {
                $post(): Promise<void>;
            };
            canBeApplied: {
                $get(): Promise<boolean>;
            };
            services: {
                $get(): Promise<billing.SlaOperationService[]>;
            };
            status: {
                $get(): Promise<string>;
            };
        };
    };
    sshKey: {
        $get(): Promise<string[]>;
        $post(params: {
            key: string;
            keyName: string;
        }): Promise<void>;
        $(keyName: string): {
            $delete(): Promise<void>;
            $get(): Promise<nichandle.sshKey>;
            $put(params?: {
                default_?: boolean;
                key?: string;
                keyName?: string;
            }): Promise<void>;
        };
    };
    subAccount: {
        $get(): Promise<number[]>;
        $post(params?: {
            description?: string;
        }): Promise<number>;
        $(id: number): {
            $get(): Promise<nichandle.SubAccount>;
            $put(params?: {
                creationDate?: string;
                description?: string;
                id?: number;
            }): Promise<void>;
            createConsumerKey: {
                $post(): Promise<nichandle.SubAccountConsumerKey>;
            };
        };
    };
    subscription: {
        $get(): Promise<string[]>;
        $(subscriptionType: string): {
            $get(): Promise<nichandle.Subscription>;
            $put(params?: {
                registered?: boolean;
                type?: string;
            }): Promise<void>;
        };
    };
    supportLevel: {
        $get(): Promise<me.SupportLevel.Level>;
    };
    task: {
        contactChange: {
            $get(params?: {
                askingAccount?: string;
                state?: nichandle.changeContact.TaskStateEnum;
                toAccount?: string;
            }): Promise<number[]>;
            $(id: number): {
                $get(): Promise<nichandle.contactChange.Task>;
                accept: {
                    $post(params: {
                        token: string;
                    }): Promise<void>;
                };
                refuse: {
                    $post(params: {
                        token: string;
                    }): Promise<void>;
                };
                resendEmail: {
                    $post(): Promise<void>;
                };
            };
        };
        domain: {
            $get(params?: {
                domain?: string;
                function_?: domain.NicOperationFunctionEnum;
                status?: domain.OperationStatusEnum;
            }): Promise<number[]>;
            $(id: number): {
                $get(): Promise<nichandle.DomainTask>;
                accelerate: {
                    $post(): Promise<void>;
                };
                argument: {
                    $get(): Promise<string[]>;
                    $(key: string): {
                        $get(): Promise<nichandle.DomainTaskArgument>;
                        $put(params?: {
                            acceptedFormats?: domain.DocumentFormatsEnum[];
                            acceptedValues?: string[];
                            description?: string;
                            fields?: xander.ContactFieldEnum[];
                            key?: string;
                            maximumSize?: number;
                            minimumSize?: number;
                            readOnly?: boolean;
                            template?: string;
                            type?: string;
                            value?: string;
                        }): Promise<void>;
                    };
                };
                cancel: {
                    $post(): Promise<void>;
                };
                progressbar: {
                    $get(): Promise<nichandle.DomainTaskProgressBar>;
                };
                relaunch: {
                    $post(): Promise<void>;
                };
            };
        };
        emailChange: {
            $get(params?: {
                state?: nichandle.changeEmail.TaskStateEnum;
            }): Promise<number[]>;
            $(id: number): {
                $get(): Promise<nichandle.emailChange.Task>;
                accept: {
                    $post(params: {
                        token: string;
                    }): Promise<void>;
                };
                refuse: {
                    $post(params: {
                        token: string;
                    }): Promise<void>;
                };
            };
        };
    };
    telephony: {
        defaultIpRestriction: {
            $get(): Promise<number[]>;
            $post(params: {
                subnet: string;
                type: telephony.ProtocolEnum;
            }): Promise<telephony.DefaultIpRestriction>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<telephony.DefaultIpRestriction>;
            };
        };
        settings: {
            $get(): Promise<telephony.Settings>;
            $post(params: {
                settings: telephony.Settings;
            }): Promise<void>;
        };
    };
    vipStatus: {
        $get(): Promise<nichandle.VipStatus>;
    };
    voucher: {
        checkValidity: {
            $post(params: {
                voucher: string;
            }): Promise<nichandle.VoucherStatus>;
        };
    };
    withdrawal: {
        $get(params?: {
            date_from?: string;
            date_to?: string;
            orderId?: number;
        }): Promise<string[]>;
        $(withdrawalId: string): {
            $get(): Promise<billing.Withdrawal>;
            details: {
                $get(): Promise<string[]>;
                $(withdrawalDetailId: string): {
                    $get(): Promise<billing.WithdrawalDetail>;
                };
            };
            payment: {
                $get(): Promise<billing.Payment>;
            };
        };
    };
    xdsl: {
        setting: {
            $get(): Promise<xdsl.Setting>;
            $post(params?: {
                resellerFastModemShipping?: boolean;
                resellerModemBasicConfig?: boolean;
            }): Promise<void>;
        };
    };
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
    get(path: '/me/accessRestriction/ip/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.IpRestriction>;
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
    get(path: '/me/accessRestriction/sms/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.accessRestriction.SmsAccount>;
    /**
     * List the nichandle.accessRestriction.TOTPAccount objects
     * List of TOTP accounts
     */
    get(path: '/me/accessRestriction/totp'): () => Promise<number[]>;
    /**
     * TOTP Two-Factor Authentication
     * Get this object properties
     */
    get(path: '/me/accessRestriction/totp/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.accessRestriction.TOTPAccount>;
    /**
     * List the nichandle.accessRestriction.U2FAccount objects
     * List of U2F accounts
     */
    get(path: '/me/accessRestriction/u2f'): () => Promise<number[]>;
    /**
     * U2F Two-Factor Authentication
     * Get this object properties
     */
    get(path: '/me/accessRestriction/u2f/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.accessRestriction.U2FAccount>;
    /**
     * List the agreements.ContractAgreement objects
     * List of contracts signed between you and OVH
     */
    get(path: '/me/agreements'): (params?: {
        agreed?: agreements.AgreementStateEnum;
        contractId?: number;
    }) => Promise<number[]>;
    /**
     * Contract agreement
     * Get this object properties
     */
    get(path: '/me/agreements/{id}'): (params: {
        id: number;
    }) => Promise<agreements.ContractAgreement>;
    /**
     * Contract of service
     * Get this object properties
     */
    get(path: '/me/agreements/{id}/contract'): (params: {
        id: number;
    }) => Promise<agreements.Contract>;
    /**
     * List the api.Application objects
     * List of your Api Application
     */
    get(path: '/me/api/application'): () => Promise<number[]>;
    /**
     * API Application
     * Get this object properties
     */
    get(path: '/me/api/application/{applicationId}'): (params: {
        applicationId: number;
    }) => Promise<api.Application>;
    /**
     * List the api.Credential objects
     * List of your Api Credentials
     */
    get(path: '/me/api/credential'): (params?: {
        applicationId?: number;
        status?: auth.CredentialStateEnum;
    }) => Promise<number[]>;
    /**
     * API Credential
     * Get this object properties
     */
    get(path: '/me/api/credential/{credentialId}'): (params: {
        credentialId: number;
    }) => Promise<api.Credential>;
    /**
     * API Application
     * Get this object properties
     */
    get(path: '/me/api/credential/{credentialId}/application'): (params: {
        credentialId: number;
    }) => Promise<api.Application>;
    /**
     * List the api.Log objects
     * List of Api calls done with your account
     */
    get(path: '/me/api/logs/self'): () => Promise<number[]>;
    /**
     * API Log
     * Get this object properties
     */
    get(path: '/me/api/logs/self/{logId}'): (params: {
        logId: number;
    }) => Promise<api.Log>;
    /**
     * List the api.Log objects
     * List of Api calls done on services you have access to
     */
    get(path: '/me/api/logs/services'): () => Promise<number[]>;
    /**
     * API Log
     * Get this object properties
     */
    get(path: '/me/api/logs/services/{logId}'): (params: {
        logId: number;
    }) => Promise<api.Log>;
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
    get(path: '/me/bill'): (params?: {
        date_from?: string;
        date_to?: string;
        orderId?: number;
    }) => Promise<string[]>;
    /**
     * Details about a Bill
     * Get this object properties
     */
    get(path: '/me/bill/{billId}'): (params: {
        billId: string;
    }) => Promise<billing.Bill>;
    /**
     * State of a debt
     * Get this object properties
     */
    get(path: '/me/bill/{billId}/debt'): (params: {
        billId: string;
    }) => Promise<debt.Debt>;
    /**
     * List the debt.Operation objects
     * All operations related to these debts
     */
    get(path: '/me/bill/{billId}/debt/operation'): (params: {
        billId: string;
        depositOrderId?: number;
    }) => Promise<number[]>;
    /**
     * Operation that happend on a debt
     * Get this object properties
     */
    get(path: '/me/bill/{billId}/debt/operation/{operationId}'): (params: {
        billId: string;
        operationId: number;
    }) => Promise<debt.Operation>;
    /**
     * associatedObject operations
     * Return main data about the object related to this debt operation
     */
    get(path: '/me/bill/{billId}/debt/operation/{operationId}/associatedObject'): (params: {
        billId: string;
        operationId: number;
    }) => Promise<debt.entry.AssociatedObject>;
    /**
     * List the billing.BillDetail objects
     * Give access to all entries of the bill
     */
    get(path: '/me/bill/{billId}/details'): (params: {
        billId: string;
    }) => Promise<string[]>;
    /**
     * Information about a Bill entry
     * Get this object properties
     */
    get(path: '/me/bill/{billId}/details/{billDetailId}'): (params: {
        billDetailId: string;
        billId: string;
    }) => Promise<billing.BillDetail>;
    /**
     * Details about a payment
     * Get this object properties
     */
    get(path: '/me/bill/{billId}/payment'): (params: {
        billId: string;
    }) => Promise<billing.Payment>;
    /**
     * Manage billing groups
     * Retrieve all billing groups
     */
    get(path: '/me/billing/group'): (params?: {
        name?: string;
    }) => Promise<number[]>;
    /**
     * Manage billing groups
     * Retrieve information about a billing group
     */
    get(path: '/me/billing/group/{groupId}'): (params: {
        groupId: number;
    }) => Promise<me.billing.group.BillingGroup>;
    /**
     *
     * Retrieve billing group service ID list
     */
    get(path: '/me/billing/group/{groupId}/service'): (params: {
        groupId: number;
    }) => Promise<number[]>;
    /**
     *
     * Retrieve information about a billing group service
     */
    get(path: '/me/billing/group/{groupId}/service/{serviceId}'): (params: {
        groupId: number;
        serviceId: number;
    }) => Promise<me.billing.group.Service>;
    /**
     * invoicesByPostalMail operations
     * Send invoices through postal mail
     */
    get(path: '/me/billing/invoicesByPostalMail'): () => Promise<boolean>;
    /**
     * Get all certificates of the account
     * Get all certificates of the account
     */
    get(path: '/me/certificates'): (params?: {
        name?: string;
    }) => Promise<string[]>;
    /**
     * List all consent campaign available
     * List all consent campaign available
     */
    get(path: '/me/consent'): () => Promise<me.consent.Campaign[]>;
    /**
     * Retrieve information about a consent campaign
     * Retrieve information about a consent campaign
     */
    get(path: '/me/consent/{campaignName}'): (params: {
        campaignName: string;
    }) => Promise<me.consent.Campaign>;
    /**
     * Get decision value for a consent campaign
     * Get decision value for a consent campaign
     */
    get(path: '/me/consent/{campaignName}/decision'): (params: {
        campaignName: string;
    }) => Promise<me.consent.Consent>;
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
    get(path: '/me/consumption/usage/history'): (params: {
        beginDate: string;
        endDate: string;
    }) => Promise<me.consumption.Transaction[]>;
    /**
     * Missing description
     * Retrieve all contact that you created
     */
    get(path: '/me/contact'): () => Promise<number[]>;
    /**
     * Missing description
     * Retrieve information about a contact
     */
    get(path: '/me/contact/{contactId}'): (params: {
        contactId: number;
    }) => Promise<contact.Contact>;
    /**
     * Missing description
     * Display mandatory/read-only informations of a contact
     */
    get(path: '/me/contact/{contactId}/fields'): (params: {
        contactId: number;
    }) => Promise<contact.FieldInformation[]>;
    /**
     * Manage credit balances
     * Retrieve all credit balances
     */
    get(path: '/me/credit/balance'): (params?: {
        type?: me.credit.balance.TypeEnum;
    }) => Promise<string[]>;
    /**
     * Manage credit balances
     * Retrieve a credit balance
     */
    get(path: '/me/credit/balance/{balanceName}'): (params: {
        balanceName: string;
    }) => Promise<me.credit.Balance>;
    /**
     * Manage credit balance movements
     * Retrieve movements for a specific balance
     */
    get(path: '/me/credit/balance/{balanceName}/movement'): (params: {
        balanceName: string;
    }) => Promise<number[]>;
    /**
     * Manage credit balance movements
     * Retrieve a specific movement for a credit balance
     */
    get(path: '/me/credit/balance/{balanceName}/movement/{movementId}'): (params: {
        balanceName: string;
        movementId: number;
    }) => Promise<me.credit.balance.Movement>;
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
    get(path: '/me/debtAccount/debt/{debtId}'): (params: {
        debtId: number;
    }) => Promise<debt.Debt>;
    /**
     * List the debt.Operation objects
     * All operations related to these debts
     */
    get(path: '/me/debtAccount/debt/{debtId}/operation'): (params: {
        debtId: number;
        depositOrderId?: number;
    }) => Promise<number[]>;
    /**
     * Operation that happend on a debt
     * Get this object properties
     */
    get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}'): (params: {
        debtId: number;
        operationId: number;
    }) => Promise<debt.Operation>;
    /**
     * associatedObject operations
     * Return main data about the object related to this debt operation
     */
    get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject'): (params: {
        debtId: number;
        operationId: number;
    }) => Promise<debt.entry.AssociatedObject>;
    /**
     * List the billing.Deposit objects
     * List of all the deposits made to your prepaid account or debt account
     */
    get(path: '/me/deposit'): (params?: {
        date_from?: string;
        date_to?: string;
        orderId?: number;
    }) => Promise<string[]>;
    /**
     * Details about a deposit
     * Get this object properties
     */
    get(path: '/me/deposit/{depositId}'): (params: {
        depositId: string;
    }) => Promise<billing.Deposit>;
    /**
     * List the billing.DepositDetail objects
     * Give access to all entries of this deposit
     */
    get(path: '/me/deposit/{depositId}/details'): (params: {
        depositId: string;
    }) => Promise<string[]>;
    /**
     * Information about a Deposit entry
     * Get this object properties
     */
    get(path: '/me/deposit/{depositId}/details/{depositDetailId}'): (params: {
        depositDetailId: string;
        depositId: string;
    }) => Promise<billing.DepositDetail>;
    /**
     * List the billing.Bill objects
     * Get invoices paid by this deposit
     */
    get(path: '/me/deposit/{depositId}/paidBills'): (params: {
        depositId: string;
    }) => Promise<string[]>;
    /**
     * Details about a Bill
     * Get this object properties
     */
    get(path: '/me/deposit/{depositId}/paidBills/{billId}'): (params: {
        billId: string;
        depositId: string;
    }) => Promise<billing.Bill>;
    /**
     * State of a debt
     * Get this object properties
     */
    get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt'): (params: {
        billId: string;
        depositId: string;
    }) => Promise<debt.Debt>;
    /**
     * List the debt.Operation objects
     * All operations related to these debts
     */
    get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation'): (params: {
        billId: string;
        depositId: string;
        depositOrderId?: number;
    }) => Promise<number[]>;
    /**
     * Operation that happend on a debt
     * Get this object properties
     */
    get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}'): (params: {
        billId: string;
        depositId: string;
        operationId: number;
    }) => Promise<debt.Operation>;
    /**
     * associatedObject operations
     * Return main data about the object related to this debt operation
     */
    get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject'): (params: {
        billId: string;
        depositId: string;
        operationId: number;
    }) => Promise<debt.entry.AssociatedObject>;
    /**
     * List the billing.BillDetail objects
     * Give access to all entries of the bill
     */
    get(path: '/me/deposit/{depositId}/paidBills/{billId}/details'): (params: {
        billId: string;
        depositId: string;
    }) => Promise<string[]>;
    /**
     * Information about a Bill entry
     * Get this object properties
     */
    get(path: '/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}'): (params: {
        billDetailId: string;
        billId: string;
        depositId: string;
    }) => Promise<billing.BillDetail>;
    /**
     * Details about a payment
     * Get this object properties
     */
    get(path: '/me/deposit/{depositId}/paidBills/{billId}/payment'): (params: {
        billId: string;
        depositId: string;
    }) => Promise<billing.Payment>;
    /**
     * Details about a payment
     * Get this object properties
     */
    get(path: '/me/deposit/{depositId}/payment'): (params: {
        depositId: string;
    }) => Promise<billing.Payment>;
    /**
     * List the nichandle.document.Document objects
     * List of documents added in your account
     */
    get(path: '/me/document'): () => Promise<string[]>;
    /**
     * List of documents added on your account
     * Get this object properties
     */
    get(path: '/me/document/{id}'): (params: {
        id: string;
    }) => Promise<nichandle.document.Document>;
    /**
     * List the telephony.MailDomain2Service objects
     * Get the fax custom domains linked to the customer account
     */
    get(path: '/me/fax/customDomains'): () => Promise<number[]>;
    /**
     * Custom domains of your fax services
     * Get this object properties
     */
    get(path: '/me/fax/customDomains/{id}'): (params: {
        id: number;
    }) => Promise<telephony.MailDomain2Service>;
    /**
     * Balance of the fidelity account
     * Get this object properties
     */
    get(path: '/me/fidelityAccount'): () => Promise<billing.FidelityAccount>;
    /**
     * List the billing.FidelityMovement objects
     * List of entries of the fidelity account
     */
    get(path: '/me/fidelityAccount/movements'): (params?: {
        date_from?: string;
        date_to?: string;
    }) => Promise<number[]>;
    /**
     * Details about a fidelity account
     * Get this object properties
     */
    get(path: '/me/fidelityAccount/movements/{movementId}'): (params: {
        movementId: number;
    }) => Promise<billing.FidelityMovement>;
    /**
     * Groups linked to this account
     * Retrieve all groups of this account
     */
    get(path: '/me/identity/group'): () => Promise<string[]>;
    /**
     * A group linked to this account
     * Get this object properties
     */
    get(path: '/me/identity/group/{group}'): (params: {
        group: string;
    }) => Promise<nichandle.Authentication.Group>;
    /**
     * Users linked to this account
     * Retrieve all users of this account
     */
    get(path: '/me/identity/user'): () => Promise<string[]>;
    /**
     * A user linked to this account
     * Get this object properties
     */
    get(path: '/me/identity/user/{user}'): (params: {
        user: string;
    }) => Promise<nichandle.User>;
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
    get(path: '/me/installationTemplate/{templateName}'): (params: {
        templateName: string;
    }) => Promise<dedicated.installationTemplate.Templates>;
    /**
     * List the dedicated.installationTemplate.templatePartitioningSchemes objects
     * Partitioning schemes available on this template
     */
    get(path: '/me/installationTemplate/{templateName}/partitionScheme'): (params: {
        templateName: string;
    }) => Promise<string[]>;
    /**
     * Partitioning schemes available on this template
     * Get this object properties
     */
    get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {
        schemeName: string;
        templateName: string;
    }) => Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
    /**
     * List the dedicated.installationTemplate.hardwareRaid objects
     * Hardware RAIDs defined in this partitioning scheme
     */
    get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid'): (params: {
        schemeName: string;
        templateName: string;
    }) => Promise<string[]>;
    /**
     * Hardware RAID defined in this partitioning scheme
     * Get this object properties
     */
    get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {
        name: string;
        schemeName: string;
        templateName: string;
    }) => Promise<dedicated.installationTemplate.hardwareRaid>;
    /**
     * List the dedicated.installationTemplate.templatePartitions objects
     * Partitions defined in this partitioning scheme
     */
    get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition'): (params: {
        schemeName: string;
        templateName: string;
    }) => Promise<string[]>;
    /**
     *  Partitions defined in this partitioning scheme
     * Get this object properties
     */
    get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {
        mountpoint: string;
        schemeName: string;
        templateName: string;
    }) => Promise<dedicated.installationTemplate.templatePartitions>;
    /**
     * List the nichandle.Ipv4Org objects
     * List of organisations
     */
    get(path: '/me/ipOrganisation'): () => Promise<string[]>;
    /**
     * Details about an IP block organisation
     * Get this object properties
     */
    get(path: '/me/ipOrganisation/{organisationId}'): (params: {
        organisationId: string;
    }) => Promise<nichandle.Ipv4Org>;
    /**
     * List the nichandle.ipxe objects
     * List of all your IPXE scripts
     */
    get(path: '/me/ipxeScript'): () => Promise<string[]>;
    /**
     * Customer IPXE scripts
     * Get this object properties
     */
    get(path: '/me/ipxeScript/{name}'): (params: {
        name: string;
    }) => Promise<nichandle.ipxe>;
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
    get(path: '/me/notification/email/history/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.emailNotification>;
    /**
     * List the billing.Order objects
     * List of all the orders the logged account has
     */
    get(path: '/me/order'): (params?: {
        date_from?: string;
        date_to?: string;
    }) => Promise<number[]>;
    /**
     * Details about an Order
     * Get this object properties
     */
    get(path: '/me/order/{orderId}'): (params: {
        orderId: number;
    }) => Promise<billing.Order>;
    /**
     * associatedObject operations
     * Return main data about the object the processing of the order generated
     */
    get(path: '/me/order/{orderId}/associatedObject'): (params: {
        orderId: number;
    }) => Promise<billing.order.AssociatedObject>;
    /**
     * availableRegisteredPaymentMean operations
     * List of registered payment mean you can use to pay this order
     */
    get(path: '/me/order/{orderId}/availableRegisteredPaymentMean'): (params: {
        orderId: number;
    }) => Promise<billing.order.RegisteredPaymentMean[]>;
    /**
     * Details about a Bill
     * Get this object properties
     */
    get(path: '/me/order/{orderId}/bill'): (params: {
        orderId: number;
    }) => Promise<billing.Bill>;
    /**
     * State of a debt
     * Get this object properties
     */
    get(path: '/me/order/{orderId}/debt'): (params: {
        orderId: number;
    }) => Promise<debt.Debt>;
    /**
     * List the debt.Operation objects
     * All operations related to these debts
     */
    get(path: '/me/order/{orderId}/debt/operation'): (params: {
        orderId: number;
        depositOrderId?: number;
    }) => Promise<number[]>;
    /**
     * Operation that happend on a debt
     * Get this object properties
     */
    get(path: '/me/order/{orderId}/debt/operation/{operationId}'): (params: {
        operationId: number;
        orderId: number;
    }) => Promise<debt.Operation>;
    /**
     * associatedObject operations
     * Return main data about the object related to this debt operation
     */
    get(path: '/me/order/{orderId}/debt/operation/{operationId}/associatedObject'): (params: {
        operationId: number;
        orderId: number;
    }) => Promise<debt.entry.AssociatedObject>;
    /**
     * List the billing.OrderDetail objects
     * Give access to all entries of the order
     */
    get(path: '/me/order/{orderId}/details'): (params: {
        orderId: number;
    }) => Promise<number[]>;
    /**
     * Information about a Bill entry
     * Get this object properties
     */
    get(path: '/me/order/{orderId}/details/{orderDetailId}'): (params: {
        orderDetailId: number;
        orderId: number;
    }) => Promise<billing.OrderDetail>;
    /**
     * Extensions of a detail
     * Get this object properties
     */
    get(path: '/me/order/{orderId}/details/{orderDetailId}/extension'): (params: {
        orderDetailId: number;
        orderId: number;
    }) => Promise<billing.ItemDetail>;
    /**
     * Details about a payment
     * Get this object properties
     */
    get(path: '/me/order/{orderId}/payment'): (params: {
        orderId: number;
    }) => Promise<billing.Payment>;
    /**
     * paymentMeans operations
     * Return main data about the object the processing of the order generated
     */
    get(path: '/me/order/{orderId}/paymentMeans'): (params: {
        orderId: number;
    }) => Promise<billing.order.PaymentMeans>;
    /**
     * paymentMethods operations
     * List of registered payment method you can use to pay this order
     */
    get(path: '/me/order/{orderId}/paymentMethods'): (params: {
        orderId: number;
    }) => Promise<billing.order.PaymentMethods>;
    /**
     * Details about a Refund
     * Get this object properties
     */
    get(path: '/me/order/{orderId}/refund'): (params: {
        orderId: number;
    }) => Promise<billing.Refund>;
    /**
     * status operations
     * Return status of order
     */
    get(path: '/me/order/{orderId}/status'): (params: {
        orderId: number;
    }) => Promise<billing.order.OrderStatusEnum>;
    /**
     * List the billing.OvhAccount objects
     * List of OVH accounts the logged account has
     */
    get(path: '/me/ovhAccount'): () => Promise<string[]>;
    /**
     * Details about an OVH account
     * Get this object properties
     */
    get(path: '/me/ovhAccount/{ovhAccountId}'): (params: {
        ovhAccountId: string;
    }) => Promise<billing.OvhAccount>;
    /**
     * List the billing.Movement objects
     * Details about an entry of the OVH account
     */
    get(path: '/me/ovhAccount/{ovhAccountId}/movements'): (params: {
        ovhAccountId: string;
        date_from?: string;
        date_to?: string;
    }) => Promise<number[]>;
    /**
     * Details about an OVH account
     * Get this object properties
     */
    get(path: '/me/ovhAccount/{ovhAccountId}/movements/{movementId}'): (params: {
        movementId: number;
        ovhAccountId: string;
    }) => Promise<billing.Movement>;
    /**
     * Available payment methods
     * Retrieve available payment method
     */
    get(path: '/me/payment/availableMethods'): () => Promise<me.payment.method.AvailablePaymentMethod[]>;
    /**
     * Manage payment method
     * Retrieve payment method ID list
     */
    get(path: '/me/payment/method'): (params?: {
        paymentType?: string;
        status?: me.payment.method.PaymentMethod.Status;
    }) => Promise<number[]>;
    /**
     * Manage payment method
     * Get one payment method
     */
    get(path: '/me/payment/method/{paymentMethodId}'): (params: {
        paymentMethodId: number;
    }) => Promise<me.payment.method.PaymentMethod>;
    /**
     * Retrieve payment method transaction ID list
     * Retrieve associated payment method transaction ID list
     */
    get(path: '/me/payment/transaction'): (params?: {
        paymentMethodId?: number;
        status?: me.payment.method.Transaction.Status;
    }) => Promise<number[]>;
    /**
     * Manage payment method transaction
     * Get associated payment method transaction
     */
    get(path: '/me/payment/transaction/{transactionId}'): (params: {
        transactionId: number;
    }) => Promise<me.payment.method.Transaction>;
    /**
     * List the billing.BankAccount objects
     * List of bank accounts
     */
    get(path: '/me/paymentMean/bankAccount'): (params?: {
        state?: billing.BankAccountStateEnum;
    }) => Promise<number[]>;
    /**
     * SEPA bank account info
     * Get this object properties
     */
    get(path: '/me/paymentMean/bankAccount/{id}'): (params: {
        id: number;
    }) => Promise<billing.BankAccount>;
    /**
     * List the billing.CreditCard objects
     * List of credit cards
     */
    get(path: '/me/paymentMean/creditCard'): () => Promise<number[]>;
    /**
     * Credit card informations
     * Get this object properties
     */
    get(path: '/me/paymentMean/creditCard/{id}'): (params: {
        id: number;
    }) => Promise<billing.CreditCard>;
    /**
     * List the billing.DeferredPaymentAccount objects
     * List of authorized deferred payment account for this customer
     */
    get(path: '/me/paymentMean/deferredPaymentAccount'): () => Promise<number[]>;
    /**
     * Deferred payment account info
     * Get this object properties
     */
    get(path: '/me/paymentMean/deferredPaymentAccount/{id}'): (params: {
        id: number;
    }) => Promise<billing.DeferredPaymentAccount>;
    /**
     * List the billing.Paypal objects
     * List of Paypal accounts usable for payments on this account
     */
    get(path: '/me/paymentMean/paypal'): () => Promise<number[]>;
    /**
     * Paypal account info
     * Get this object properties
     */
    get(path: '/me/paymentMean/paypal/{id}'): (params: {
        id: number;
    }) => Promise<billing.Paypal>;
    /**
     * List the billing.Refund objects
     * List of all the refunds the logged account has
     */
    get(path: '/me/refund'): (params?: {
        date_from?: string;
        date_to?: string;
        orderId?: number;
    }) => Promise<string[]>;
    /**
     * Details about a Refund
     * Get this object properties
     */
    get(path: '/me/refund/{refundId}'): (params: {
        refundId: string;
    }) => Promise<billing.Refund>;
    /**
     * List the billing.RefundDetail objects
     * Give access to all entries of the refund
     */
    get(path: '/me/refund/{refundId}/details'): (params: {
        refundId: string;
    }) => Promise<string[]>;
    /**
     * Information about a Bill entry
     * Get this object properties
     */
    get(path: '/me/refund/{refundId}/details/{refundDetailId}'): (params: {
        refundDetailId: string;
        refundId: string;
    }) => Promise<billing.RefundDetail>;
    /**
     * Details about a payment
     * Get this object properties
     */
    get(path: '/me/refund/{refundId}/payment'): (params: {
        refundId: string;
    }) => Promise<billing.Payment>;
    /**
     * List the billing.SlaOperation objects
     * List active SLA
     */
    get(path: '/me/sla'): () => Promise<number[]>;
    /**
     * SLA properties
     * Get this object properties
     */
    get(path: '/me/sla/{id}'): (params: {
        id: number;
    }) => Promise<billing.SlaOperation>;
    /**
     * canBeApplied operations
     * Check whether this SLA can be applied on your services
     */
    get(path: '/me/sla/{id}/canBeApplied'): (params: {
        id: number;
    }) => Promise<boolean>;
    /**
     * services operations
     * Get services impacted by this SLA
     */
    get(path: '/me/sla/{id}/services'): (params: {
        id: number;
    }) => Promise<billing.SlaOperationService[]>;
    /**
     * status operations
     * Get the status request of this SLA
     */
    get(path: '/me/sla/{id}/status'): (params: {
        id: number;
    }) => Promise<string>;
    /**
     * List the nichandle.sshKey objects
     * List of your public SSH keys
     */
    get(path: '/me/sshKey'): () => Promise<string[]>;
    /**
     * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
     * Get this object properties
     */
    get(path: '/me/sshKey/{keyName}'): (params: {
        keyName: string;
    }) => Promise<nichandle.sshKey>;
    /**
     * List the nichandle.SubAccount objects
     * List of sub-accounts
     */
    get(path: '/me/subAccount'): () => Promise<number[]>;
    /**
     * Sub Account
     * Get this object properties
     */
    get(path: '/me/subAccount/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.SubAccount>;
    /**
     * List the nichandle.Subscription objects
     * List of all OVH things you can subscribe to
     */
    get(path: '/me/subscription'): () => Promise<string[]>;
    /**
     * List of all OVH things you can subscribe to
     * Get this object properties
     */
    get(path: '/me/subscription/{subscriptionType}'): (params: {
        subscriptionType: string;
    }) => Promise<nichandle.Subscription>;
    /**
     * Fetch the support level of the account
     * Fetch the support level of the account
     */
    get(path: '/me/supportLevel'): () => Promise<me.SupportLevel.Level>;
    /**
     * List the nichandle.contactChange.Task objects
     * List of service contact change tasks you are involved in
     */
    get(path: '/me/task/contactChange'): (params?: {
        askingAccount?: string;
        state?: nichandle.changeContact.TaskStateEnum;
        toAccount?: string;
    }) => Promise<number[]>;
    /**
     * Task running a contact change on a service
     * Get this object properties
     */
    get(path: '/me/task/contactChange/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.contactChange.Task>;
    /**
     * List the nichandle.DomainTask objects
     * List of domain task
     */
    get(path: '/me/task/domain'): (params?: {
        domain?: string;
        function_?: domain.NicOperationFunctionEnum;
        status?: domain.OperationStatusEnum;
    }) => Promise<number[]>;
    /**
     * Domain tasks
     * Get this object properties
     */
    get(path: '/me/task/domain/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.DomainTask>;
    /**
     * List the nichandle.DomainTaskArgument objects
     * List of arguments
     */
    get(path: '/me/task/domain/{id}/argument'): (params: {
        id: number;
    }) => Promise<string[]>;
    /**
     * Domain operation argument
     * Get this object properties
     */
    get(path: '/me/task/domain/{id}/argument/{key}'): (params: {
        id: number;
        key: string;
    }) => Promise<nichandle.DomainTaskArgument>;
    /**
     * Domain operation progress
     * Get this object properties
     */
    get(path: '/me/task/domain/{id}/progressbar'): (params: {
        id: number;
    }) => Promise<nichandle.DomainTaskProgressBar>;
    /**
     * List the nichandle.emailChange.Task objects
     * List of email change tasks you are involved in
     */
    get(path: '/me/task/emailChange'): (params?: {
        state?: nichandle.changeEmail.TaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Task running an email change on an account
     * Get this object properties
     */
    get(path: '/me/task/emailChange/{id}'): (params: {
        id: number;
    }) => Promise<nichandle.emailChange.Task>;
    /**
     * List the telephony.DefaultIpRestriction objects
     * The default SIP IP restictions for your future VoIP lines
     */
    get(path: '/me/telephony/defaultIpRestriction'): () => Promise<number[]>;
    /**
     * Default IP restriction of a VoIP line
     * Get this object properties
     */
    get(path: '/me/telephony/defaultIpRestriction/{id}'): (params: {
        id: number;
    }) => Promise<telephony.DefaultIpRestriction>;
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
    get(path: '/me/withdrawal'): (params?: {
        date_from?: string;
        date_to?: string;
        orderId?: number;
    }) => Promise<string[]>;
    /**
     * Details about a withdrawal
     * Get this object properties
     */
    get(path: '/me/withdrawal/{withdrawalId}'): (params: {
        withdrawalId: string;
    }) => Promise<billing.Withdrawal>;
    /**
     * List the billing.WithdrawalDetail objects
     * Give access to all entries of this withdrawal
     */
    get(path: '/me/withdrawal/{withdrawalId}/details'): (params: {
        withdrawalId: string;
    }) => Promise<string[]>;
    /**
     * Information about a Withdrawal entry
     * Get this object properties
     */
    get(path: '/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}'): (params: {
        withdrawalDetailId: string;
        withdrawalId: string;
    }) => Promise<billing.WithdrawalDetail>;
    /**
     * Details about a payment
     * Get this object properties
     */
    get(path: '/me/withdrawal/{withdrawalId}/payment'): (params: {
        withdrawalId: string;
    }) => Promise<billing.Payment>;
    /**
     * setting operations
     * Get xdsl settings linked to the nichandle
     */
    get(path: '/me/xdsl/setting'): () => Promise<xdsl.Setting>;
    /**
     * Details about your OVH identifier
     * Alter this object properties
     */
    put(path: '/me'): (params?: {
        address?: string;
        area?: string;
        birthCity?: string;
        birthDay?: string;
        city?: string;
        companyNationalIdentificationNumber?: string;
        corporationType?: string;
        country?: nichandle.CountryEnum;
        currency?: nichandle.Currency;
        customerCode?: string;
        email?: string;
        fax?: string;
        firstname?: string;
        italianSDI?: string;
        language?: nichandle.LanguageEnum;
        legalform?: nichandle.LegalFormEnum;
        name?: string;
        nationalIdentificationNumber?: string;
        nichandle?: string;
        organisation?: string;
        ovhCompany?: nichandle.OvhCompanyEnum;
        ovhSubsidiary?: nichandle.OvhSubsidiaryEnum;
        phone?: string;
        phoneCountry?: nichandle.CountryEnum;
        sex?: nichandle.GenderEnum;
        spareEmail?: string;
        state?: nichandle.StateEnum;
        vat?: string;
        zip?: string;
    }) => Promise<void>;
    /**
     * Login restrictions on a development version of the Manager
     * Alter this object properties
     */
    put(path: '/me/accessRestriction/developerMode'): (params?: {
        enabled?: boolean;
    }) => Promise<void>;
    /**
     * List of all IP Restrictions
     * Alter this object properties
     */
    put(path: '/me/accessRestriction/ip/{id}'): (params: {
        id: number;
        ip?: string;
        rule?: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning?: boolean;
    }) => Promise<void>;
    /**
     * IP Restriction default rule
     * Alter this object properties
     */
    put(path: '/me/accessRestriction/ipDefaultRule'): (params?: {
        rule?: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning?: boolean;
    }) => Promise<void>;
    /**
     * Sms Two-Factor Authentication
     * Alter this object properties
     */
    put(path: '/me/accessRestriction/sms/{id}'): (params: {
        id: number;
        creationDate?: string;
        description?: string;
        lastUsedDate?: string;
        phoneNumber?: string;
        status?: nichandle.accessRestriction.SmsStatusEnum;
    }) => Promise<void>;
    /**
     * TOTP Two-Factor Authentication
     * Alter this object properties
     */
    put(path: '/me/accessRestriction/totp/{id}'): (params: {
        id: number;
        creationDate?: string;
        description?: string;
        lastUsedDate?: string;
        status?: nichandle.accessRestriction.TOTPStatusEnum;
    }) => Promise<void>;
    /**
     * U2F Two-Factor Authentication
     * Alter this object properties
     */
    put(path: '/me/accessRestriction/u2f/{id}'): (params: {
        id: number;
        creationDate?: string;
        description?: string;
        lastUsedDate?: string;
        status?: nichandle.accessRestriction.U2FStatusEnum;
    }) => Promise<void>;
    /**
     * Auto renewal information
     * Alter this object properties
     */
    put(path: '/me/autorenew'): (params?: {
        active?: boolean;
        lastRenew?: string;
        renewDay?: number;
    }) => Promise<void>;
    /**
     * Manage billing groups
     * Edit billing group
     */
    put(path: '/me/billing/group/{groupId}'): (params: {
        groupId: number;
        contactId?: number;
        creationDate?: string;
        lastUpdate?: string;
        name?: string;
        paymentMethodId?: number;
    }) => Promise<void>;
    /**
     * Get decision value for a consent campaign
     * Update decision of a consent campaign
     */
    put(path: '/me/consent/{campaignName}/decision'): (params: {
        campaignName: string;
        value: boolean;
    }) => Promise<void>;
    /**
     * Missing description
     * Update an existing contact
     */
    put(path: '/me/contact/{contactId}'): (params: {
        contactId: number;
        address?: contact.Address;
        birthCity?: string;
        birthCountry?: nichandle.CountryEnum;
        birthDay?: string;
        birthZip?: string;
        cellPhone?: string;
        companyNationalIdentificationNumber?: string;
        email?: string;
        fax?: string;
        firstName?: string;
        gender?: nichandle.GenderEnum;
        language?: nichandle.LanguageEnum;
        lastName?: string;
        legalForm?: nichandle.LegalFormEnum;
        nationalIdentificationNumber?: string;
        nationality?: nichandle.CountryEnum;
        organisationName?: string;
        organisationType?: string;
        phone?: string;
        vat?: string;
    }) => Promise<contact.Contact>;
    /**
     * List of documents added on your account
     * Alter this object properties
     */
    put(path: '/me/document/{id}'): (params: {
        id: string;
        creationDate?: string;
        expirationDate?: string;
        getUrl?: string;
        name?: string;
        putUrl?: string;
        size?: number;
        tags?: complexType.SafeKeyValue<string>[];
        validationDate?: string;
    }) => Promise<void>;
    /**
     * Balance of the fidelity account
     * Alter this object properties
     */
    put(path: '/me/fidelityAccount'): (params?: {
        alertThreshold?: number;
        balance?: number;
        canBeCredited?: boolean;
        lastUpdate?: string;
        openDate?: string;
    }) => Promise<void>;
    /**
     * A group linked to this account
     * Alter a group
     */
    put(path: '/me/identity/group/{group}'): (params: {
        group: string;
        description?: string;
        role?: nichandle.RoleEnum;
    }) => Promise<void>;
    /**
     * A user linked to this account
     * Alter a user
     */
    put(path: '/me/identity/user/{user}'): (params: {
        user: string;
        description?: string;
        email?: string;
        group?: string;
    }) => Promise<void>;
    /**
     * Available installation templates
     * Alter this object properties
     */
    put(path: '/me/installationTemplate/{templateName}'): (params: {
        templateName: string;
        availableLanguages?: dedicated.TemplateOsLanguageEnum[];
        beta?: boolean;
        bitFormat?: dedicated.server.BitFormatEnum;
        category?: dedicated.TemplateOsUsageEnum;
        customization?: dedicated.TemplateOsProperties;
        defaultLanguage?: dedicated.TemplateOsLanguageEnum;
        deprecated?: boolean;
        description?: string;
        distribution?: string;
        family?: dedicated.TemplateOsTypeEnum;
        filesystems?: dedicated.TemplateOsFileSystemEnum[];
        hardRaidConfiguration?: boolean;
        lastModification?: string;
        lvmReady?: boolean;
        supportsDistributionKernel?: boolean;
        supportsGptLabel?: boolean;
        supportsRTM?: boolean;
        supportsSqlServer?: boolean;
        supportsUEFI?: dedicated.server.SupportsUEFIEnum;
    }) => Promise<void>;
    /**
     * Partitioning schemes available on this template
     * Alter this object properties
     */
    put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {
        schemeName: string;
        templateName: string;
        name?: string;
        priority?: number;
    }) => Promise<void>;
    /**
     * Hardware RAID defined in this partitioning scheme
     * Alter this object properties
     */
    put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {
        name: string;
        schemeName: string;
        templateName: string;
        disks?: string[];
        mode?: dedicated.TemplateOsHardwareRaidEnum;
        step?: number;
    }) => Promise<void>;
    /**
     *  Partitions defined in this partitioning scheme
     * Alter this object properties
     */
    put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {
        mountpoint: string;
        schemeName: string;
        templateName: string;
        filesystem?: dedicated.TemplateOsFileSystemEnum;
        order?: number;
        raid?: dedicated.server.PartitionRaidEnum;
        size?: complexType.UnitAndValue<number>;
        type?: dedicated.TemplatePartitionTypeEnum;
        volumeName?: string;
    }) => Promise<void>;
    /**
     * Details about an IP block organisation
     * Alter this object properties
     */
    put(path: '/me/ipOrganisation/{organisationId}'): (params: {
        organisationId: string;
        abuse_mailbox?: string;
        address?: string;
        city?: string;
        country?: nichandle.CountryEnum;
        firstname?: string;
        lastname?: string;
        phone?: string;
        registry?: nichandle.IpRegistryEnum;
        state?: string;
        zip?: string;
    }) => Promise<void>;
    /**
     * Details about an OVH account
     * Alter this object properties
     */
    put(path: '/me/ovhAccount/{ovhAccountId}'): (params: {
        ovhAccountId: string;
        alertThreshold?: number;
        balance?: orderPrice;
        canBeCredited?: boolean;
        isActive?: boolean;
        lastUpdate?: string;
        openDate?: string;
    }) => Promise<void>;
    /**
     * Manage payment method
     * Edit payment method
     */
    put(path: '/me/payment/method/{paymentMethodId}'): (params: {
        paymentMethodId: number;
        default_?: boolean;
        description?: string;
    }) => Promise<billing.PaymentMethod>;
    /**
     * SEPA bank account info
     * Alter this object properties
     */
    put(path: '/me/paymentMean/bankAccount/{id}'): (params: {
        id: number;
        bic?: string;
        creationDate?: string;
        defaultPaymentMean?: boolean;
        description?: string;
        iban?: string;
        icon?: billing.paymentMethod.IconData;
        mandateSignatureDate?: string;
        ownerAddress?: string;
        ownerName?: string;
        state?: billing.BankAccountStateEnum;
        uniqueReference?: string;
        validationDocumentLink?: string;
    }) => Promise<void>;
    /**
     * Credit card informations
     * Alter this object properties
     */
    put(path: '/me/paymentMean/creditCard/{id}'): (params: {
        id: number;
        defaultPaymentMean?: boolean;
        description?: string;
        expirationDate?: string;
        icon?: billing.paymentMethod.IconData;
        number?: string;
        state?: billing.CreditCardStateEnum;
        threeDsValidated?: boolean;
        type?: string;
    }) => Promise<void>;
    /**
     * Deferred payment account info
     * Alter this object properties
     */
    put(path: '/me/paymentMean/deferredPaymentAccount/{id}'): (params: {
        id: number;
        creationDate?: string;
        defaultPaymentMean?: boolean;
        description?: string;
        icon?: billing.paymentMethod.IconData;
        label?: string;
        state?: billing.DeferredPaymentAccountStatusEnum;
    }) => Promise<void>;
    /**
     * Paypal account info
     * Alter this object properties
     */
    put(path: '/me/paymentMean/paypal/{id}'): (params: {
        id: number;
        agreementId?: string;
        creationDate?: string;
        defaultPaymentMean?: boolean;
        description?: string;
        email?: string;
        icon?: billing.paymentMethod.IconData;
        state?: billing.PaypalStateEnum;
    }) => Promise<void>;
    /**
     * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
     * Alter this object properties
     */
    put(path: '/me/sshKey/{keyName}'): (params: {
        keyName: string;
        default_?: boolean;
        key?: string;
    }) => Promise<void>;
    /**
     * Sub Account
     * Alter this object properties
     */
    put(path: '/me/subAccount/{id}'): (params: {
        id: number;
        creationDate?: string;
        description?: string;
    }) => Promise<void>;
    /**
     * List of all OVH things you can subscribe to
     * Alter this object properties
     */
    put(path: '/me/subscription/{subscriptionType}'): (params: {
        subscriptionType: string;
        registered?: boolean;
        type?: string;
    }) => Promise<void>;
    /**
     * Domain operation argument
     * Alter this object properties
     */
    put(path: '/me/task/domain/{id}/argument/{key}'): (params: {
        id: number;
        key: string;
        acceptedFormats?: domain.DocumentFormatsEnum[];
        acceptedValues?: string[];
        description?: string;
        fields?: xander.ContactFieldEnum[];
        maximumSize?: number;
        minimumSize?: number;
        readOnly?: boolean;
        template?: string;
        type?: string;
        value?: string;
    }) => Promise<void>;
    /**
     * SOTP Two-Factor Authentication
     * Add a SOTP access restriction
     */
    post(path: '/me/accessRestriction/backupCode'): () => Promise<nichandle.accessRestriction.SOTPSecret>;
    /**
     * disable operations
     * Disable this SOTP account
     */
    post(path: '/me/accessRestriction/backupCode/disable'): (params: {
        code: string;
    }) => Promise<void>;
    /**
     * enable operations
     * Enable this SOTP account
     */
    post(path: '/me/accessRestriction/backupCode/enable'): (params: {
        code: string;
    }) => Promise<void>;
    /**
     * validate operations
     * Validate your SOTP account
     */
    post(path: '/me/accessRestriction/backupCode/validate'): (params: {
        code: string;
    }) => Promise<nichandle.accessRestriction.SOTPValidate>;
    /**
     * List the nichandle.IpRestriction objects
     * Add an IP access restriction
     */
    post(path: '/me/accessRestriction/ip'): (params: {
        ip: string;
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }) => Promise<void>;
    /**
     * List the nichandle.accessRestriction.SmsAccount objects
     * Add a SMS access restriction
     */
    post(path: '/me/accessRestriction/sms'): (params: {
        phone: string;
    }) => Promise<nichandle.accessRestriction.SmsSecret>;
    /**
     * disable operations
     * Disable this SMS account
     */
    post(path: '/me/accessRestriction/sms/{id}/disable'): (params: {
        id: number;
        code: string;
    }) => Promise<void>;
    /**
     * enable operations
     * Enable this SMS account
     */
    post(path: '/me/accessRestriction/sms/{id}/enable'): (params: {
        id: number;
        code: string;
    }) => Promise<void>;
    /**
     * sendCode operations
     * Send a SMS to this account
     */
    post(path: '/me/accessRestriction/sms/{id}/sendCode'): (params: {
        id: number;
    }) => Promise<nichandle.accessRestriction.SmsCode>;
    /**
     * validate operations
     * Validate your SMS account
     */
    post(path: '/me/accessRestriction/sms/{id}/validate'): (params: {
        id: number;
        code: string;
    }) => Promise<void>;
    /**
     * List the nichandle.accessRestriction.TOTPAccount objects
     * Add a TOTP access restriction
     */
    post(path: '/me/accessRestriction/totp'): () => Promise<nichandle.accessRestriction.TOTPSecret>;
    /**
     * disable operations
     * Disable this TOTP account
     */
    post(path: '/me/accessRestriction/totp/{id}/disable'): (params: {
        id: number;
        code: string;
    }) => Promise<void>;
    /**
     * enable operations
     * Enable this TOTP account
     */
    post(path: '/me/accessRestriction/totp/{id}/enable'): (params: {
        id: number;
        code: string;
    }) => Promise<void>;
    /**
     * validate operations
     * Validate your TOTP account
     */
    post(path: '/me/accessRestriction/totp/{id}/validate'): (params: {
        id: number;
        code: string;
    }) => Promise<void>;
    /**
     * List the nichandle.accessRestriction.U2FAccount objects
     * Add a U2F access restriction
     */
    post(path: '/me/accessRestriction/u2f'): () => Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
    /**
     * challenge operations
     * Get an U2F Challenge
     */
    post(path: '/me/accessRestriction/u2f/{id}/challenge'): (params: {
        id: number;
    }) => Promise<nichandle.accessRestriction.U2FSignChallenge>;
    /**
     * disable operations
     * Disable this U2F account
     */
    post(path: '/me/accessRestriction/u2f/{id}/disable'): (params: {
        id: number;
        clientData: string;
        signatureData: string;
    }) => Promise<void>;
    /**
     * enable operations
     * Enable this U2F account
     */
    post(path: '/me/accessRestriction/u2f/{id}/enable'): (params: {
        id: number;
        clientData: string;
        signatureData: string;
    }) => Promise<void>;
    /**
     * validate operations
     * Validate your U2F account
     */
    post(path: '/me/accessRestriction/u2f/{id}/validate'): (params: {
        id: number;
        clientData: string;
        registrationData: string;
    }) => Promise<void>;
    /**
     * accept operations
     * Accept this contract
     */
    post(path: '/me/agreements/{id}/accept'): (params: {
        id: number;
    }) => Promise<string>;
    /**
     * Auto renewal information
     * Activate auto renew for this nic
     */
    post(path: '/me/autorenew'): (params: {
        renewDay: number;
    }) => Promise<void>;
    /**
     * pay operations
     * Create an order in order to pay this order's debt
     */
    post(path: '/me/bill/{billId}/debt/pay'): (params: {
        billId: string;
    }) => Promise<billing.Order>;
    /**
     * Manage billing groups
     * Create a new billing group
     */
    post(path: '/me/billing/group'): (params?: {
        contactId?: number;
        creationDate?: string;
        groupId?: number;
        lastUpdate?: string;
        name?: string;
        paymentMethodId?: number;
    }) => Promise<me.billing.group.BillingGroup>;
    /**
     *
     * Associate a service to a billing group
     */
    post(path: '/me/billing/group/{groupId}/service'): (params: {
        groupId: number;
        serviceId: number;
    }) => Promise<me.billing.group.Service>;
    /**
     * invoicesByPostalMail operations
     * Enable or disable invoices by postal mail
     */
    post(path: '/me/billing/invoicesByPostalMail'): (params: {
        enable: boolean;
    }) => Promise<void>;
    /**
     * changeEmail operations
     * Initiate an email change procedure
     */
    post(path: '/me/changeEmail'): (params: {
        newEmail: string;
    }) => Promise<nichandle.emailChange.Task>;
    /**
     * changePassword operations
     * Initiate a password change procedure
     */
    post(path: '/me/changePassword'): () => Promise<void>;
    /**
     * Missing description
     * Create a new contact
     */
    post(path: '/me/contact'): (params: {
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
        language: nichandle.LanguageEnum;
        lastName: string;
        legalForm: nichandle.LegalFormEnum;
        nationalIdentificationNumber?: string;
        nationality?: nichandle.CountryEnum;
        organisationName?: string;
        organisationType?: string;
        phone: string;
        vat?: string;
    }) => Promise<contact.Contact>;
    /**
     * Validate a code to generate associated credit movement
     * Validate a code to generate associated credit movement
     */
    post(path: '/me/credit/code'): (params: {
        inputCode: string;
        serviceId?: number;
    }) => Promise<me.credit.balance.Movement>;
    /**
     * pay operations
     * Create an order in order to pay this order's debt
     */
    post(path: '/me/debtAccount/debt/{debtId}/pay'): (params: {
        debtId: number;
    }) => Promise<billing.Order>;
    /**
     * pay operations
     * Create an order in order to pay all your due debts
     */
    post(path: '/me/debtAccount/pay'): () => Promise<billing.Order>;
    /**
     * pay operations
     * Create an order in order to pay this order's debt
     */
    post(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/pay'): (params: {
        billId: string;
        depositId: string;
    }) => Promise<billing.Order>;
    /**
     * List the nichandle.document.Document objects
     * Create new document
     */
    post(path: '/me/document'): (params: {
        name: string;
        tags?: complexType.SafeKeyValue<string>[];
    }) => Promise<nichandle.document.Document>;
    /**
     * Add CORS support on your container
     * Add CORS support on your container
     */
    post(path: '/me/document/cors'): (params: {
        origin: string;
    }) => Promise<void>;
    /**
     * List the telephony.MailDomain2Service objects
     * Create a custom domain for your fax services
     */
    post(path: '/me/fax/customDomains'): (params: {
        domain: string;
    }) => Promise<telephony.MailDomain2Service>;
    /**
     * creditOrder operations
     * Generate an order that can be paid in order to credit the fidelity account
     */
    post(path: '/me/fidelityAccount/creditOrder'): (params: {
        amount: number;
    }) => Promise<billing.Order>;
    /**
     * Route for getting visitor's country and continent
     * Fetch visitor country & region
     */
    post(path: '/me/geolocation'): () => Promise<geolocation.ContinentCountryLocation>;
    /**
     * Groups linked to this account
     * Create a new group
     */
    post(path: '/me/identity/group'): (params: {
        description?: string;
        name: string;
        role?: nichandle.RoleEnum;
    }) => Promise<nichandle.Authentication.Group>;
    /**
     * Users linked to this account
     * Create a new user
     */
    post(path: '/me/identity/user'): (params: {
        description?: string;
        email: string;
        group?: string;
        login: string;
        password: string;
    }) => Promise<void>;
    /**
     * A user linked to this account
     * Disable this user
     */
    post(path: '/me/identity/user/{user}/disable'): (params: {
        user: string;
    }) => Promise<void>;
    /**
     * A user linked to this account
     * Enable this user
     */
    post(path: '/me/identity/user/{user}/enable'): (params: {
        user: string;
    }) => Promise<void>;
    /**
     * List the dedicated.installationTemplate.Templates objects
     * Create a template
     */
    post(path: '/me/installationTemplate'): (params: {
        baseTemplateName: string;
        defaultLanguage: dedicated.TemplateOsLanguageEnum;
        name: string;
    }) => Promise<void>;
    /**
     * checkIntegrity operations
     * Check the integrity of this template
     */
    post(path: '/me/installationTemplate/{templateName}/checkIntegrity'): (params: {
        templateName: string;
    }) => Promise<void>;
    /**
     * List the dedicated.installationTemplate.templatePartitioningSchemes objects
     * Add a scheme of partition
     */
    post(path: '/me/installationTemplate/{templateName}/partitionScheme'): (params: {
        templateName: string;
        name: string;
        priority: number;
    }) => Promise<void>;
    /**
     * List the dedicated.installationTemplate.hardwareRaid objects
     * Add an hardware RAID in this partitioning scheme
     */
    post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid'): (params: {
        schemeName: string;
        templateName: string;
        disks: string[];
        mode: dedicated.TemplateOsHardwareRaidEnum;
        name: string;
        step: number;
    }) => Promise<void>;
    /**
     * List the dedicated.installationTemplate.templatePartitions objects
     * Add a partition in this partitioning scheme
     */
    post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition'): (params: {
        schemeName: string;
        templateName: string;
        filesystem: dedicated.TemplateOsFileSystemEnum;
        mountpoint: string;
        raid?: number;
        size: number;
        step: number;
        type: dedicated.TemplatePartitionTypeEnum;
        volumeName?: string;
    }) => Promise<void>;
    /**
     * List the nichandle.Ipv4Org objects
     * Add an organisation
     */
    post(path: '/me/ipOrganisation'): (params: {
        abuse_mailbox: string;
        address: string;
        city: string;
        country: nichandle.CountryEnum;
        firstname: string;
        lastname: string;
        phone: string;
        registry: nichandle.IpRegistryEnum;
        state?: string;
        zip?: string;
    }) => Promise<void>;
    /**
     * List the nichandle.ipxe objects
     * Add an IPXE script
     */
    post(path: '/me/ipxeScript'): (params: {
        description: string;
        name: string;
        script: string;
    }) => Promise<nichandle.ipxe>;
    /**
     * subscribe operations
     * Subscribe an email to a restricted mailing list
     */
    post(path: '/me/mailingList/subscribe'): (params: {
        email: string;
        mailingList: string;
    }) => Promise<void>;
    /**
     * pay operations
     * Create an order in order to pay this order's debt
     */
    post(path: '/me/order/{orderId}/debt/pay'): (params: {
        orderId: number;
    }) => Promise<billing.Order>;
    /**
     * pay operations
     * Pay with a payment method reference
     */
    post(path: '/me/order/{orderId}/pay'): (params: {
        orderId: number;
        paymentMethod: billing.order.PayWithPaymentMethod;
    }) => Promise<void>;
    /**
     * payWithRegisteredPaymentMean operations
     * Pay with an already registered payment mean
     */
    post(path: '/me/order/{orderId}/payWithRegisteredPaymentMean'): (params: {
        orderId: number;
        paymentMean: billing.ReusablePaymentMeanEnum;
        paymentMeanId?: number;
    }) => Promise<void>;
    /**
     * retraction operations
     * Request retraction of order
     */
    post(path: '/me/order/{orderId}/retraction'): (params: {
        orderId: number;
        comment?: string;
        reason: billing.order.RetractionReasonEnum;
    }) => Promise<void>;
    /**
     * creditOrder operations
     * Generate an order that can be paid in order to credit the OVH account
     */
    post(path: '/me/ovhAccount/{ovhAccountId}/creditOrder'): (params: {
        ovhAccountId: string;
        amount: number;
    }) => Promise<billing.Order>;
    /**
     * retrieveMoney operations
     * Transfer money from ovhAccount to your bank account
     */
    post(path: '/me/ovhAccount/{ovhAccountId}/retrieveMoney'): (params: {
        ovhAccountId: string;
        amount: number;
        bankAccountId: number;
    }) => Promise<billing.Order>;
    /**
     * Request a password recover
     * Request a password recover
     */
    post(path: '/me/passwordRecover'): (params: {
        ovhCompany: nichandle.OvhCompanyEnum;
        ovhId: string;
    }) => Promise<void>;
    /**
     * Manage payment method
     * Pay an order and register a new payment method if necessary
     */
    post(path: '/me/payment/method'): (params: {
        callbackUrl: me.payment.method.CallbackUrl;
        default_?: boolean;
        description?: string;
        orderId?: number;
        paymentType: string;
        register?: boolean;
    }) => Promise<me.payment.method.Register.ValidationResult>;
    /**
     * Challenge your payment method
     * Challenge one payment method
     */
    post(path: '/me/payment/method/{paymentMethodId}/challenge'): (params: {
        paymentMethodId: number;
        challenge: string;
    }) => Promise<me.payment.method.PaymentMethod>;
    /**
     * Finalize one payment method registration
     * Finalize one payment method registration
     */
    post(path: '/me/payment/method/{paymentMethodId}/finalize'): (params: {
        paymentMethodId: number;
        expirationMonth?: number;
        expirationYear?: number;
        formSessionId?: string;
        registrationId?: string;
    }) => Promise<me.payment.method.PaymentMethod>;
    /**
     * List the billing.BankAccount objects
     * Enable payment through a new account
     */
    post(path: '/me/paymentMean/bankAccount'): (params: {
        bic: string;
        description?: string;
        iban: string;
        ownerAddress: string;
        ownerName: string;
        setDefault?: boolean;
    }) => Promise<billing.PaymentMeanValidation>;
    /**
     * challenge operations
     * Challenge your bank account
     */
    post(path: '/me/paymentMean/bankAccount/{id}/challenge'): (params: {
        id: number;
        challenge: string;
    }) => Promise<void>;
    /**
     * chooseAsDefaultPaymentMean operations
     * Choose this bank account as your default payment mean. Will cancel the previous choice.
     */
    post(path: '/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * List the billing.CreditCard objects
     * Add a new credit card
     */
    post(path: '/me/paymentMean/creditCard'): (params?: {
        description?: string;
        returnUrl?: string;
        setDefault?: boolean;
    }) => Promise<billing.PaymentMeanValidation>;
    /**
     * challenge operations
     * Challenge your bank account
     */
    post(path: '/me/paymentMean/creditCard/{id}/challenge'): (params: {
        id: number;
        challenge: string;
    }) => Promise<void>;
    /**
     * chooseAsDefaultPaymentMean operations
     * Choose this credit card as your default payment mean. Will cancel the previous choice.
     */
    post(path: '/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * chooseAsDefaultPaymentMean operations
     * Allow you to use deferred payment. Will cancel the previous choice.
     */
    post(path: '/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * List the billing.Paypal objects
     * Enable payment through a new PayPal account
     */
    post(path: '/me/paymentMean/paypal'): (params?: {
        description?: string;
        returnUrl?: string;
        setDefault?: boolean;
    }) => Promise<billing.PaymentMeanValidation>;
    /**
     * challenge operations
     * Challenge your bank account
     */
    post(path: '/me/paymentMean/paypal/{id}/challenge'): (params: {
        id: number;
        challenge: string;
    }) => Promise<void>;
    /**
     * chooseAsDefaultPaymentMean operations
     * Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.
     */
    post(path: '/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * apply operations
     * Ask for SLA application
     */
    post(path: '/me/sla/{id}/apply'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * List the nichandle.sshKey objects
     * Add a new public SSH key
     */
    post(path: '/me/sshKey'): (params: {
        key: string;
        keyName: string;
    }) => Promise<void>;
    /**
     * List the nichandle.SubAccount objects
     * Create a new sub-account
     */
    post(path: '/me/subAccount'): (params?: {
        description?: string;
    }) => Promise<number>;
    /**
     * createConsumerKey operations
     * Create a consumer key for the current application
     */
    post(path: '/me/subAccount/{id}/createConsumerKey'): (params: {
        id: number;
    }) => Promise<nichandle.SubAccountConsumerKey>;
    /**
     * accept operations
     * Accept this change request
     */
    post(path: '/me/task/contactChange/{id}/accept'): (params: {
        id: number;
        token: string;
    }) => Promise<void>;
    /**
     * refuse operations
     * Refuse this change request
     */
    post(path: '/me/task/contactChange/{id}/refuse'): (params: {
        id: number;
        token: string;
    }) => Promise<void>;
    /**
     * resendEmail operations
     * This call will send you a new email, containing a new token
     */
    post(path: '/me/task/contactChange/{id}/resendEmail'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * accelerate operations
     * Accelerate the task
     */
    post(path: '/me/task/domain/{id}/accelerate'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * cancel operations
     * Cancel the task
     */
    post(path: '/me/task/domain/{id}/cancel'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * relaunch operations
     * Relaunch the task
     */
    post(path: '/me/task/domain/{id}/relaunch'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * accept operations
     * Accept this change request
     */
    post(path: '/me/task/emailChange/{id}/accept'): (params: {
        id: number;
        token: string;
    }) => Promise<void>;
    /**
     * refuse operations
     * Refuse this change request
     */
    post(path: '/me/task/emailChange/{id}/refuse'): (params: {
        id: number;
        token: string;
    }) => Promise<void>;
    /**
     * List the telephony.DefaultIpRestriction objects
     * Create a default IP restriction for your future VoIP lines
     */
    post(path: '/me/telephony/defaultIpRestriction'): (params: {
        subnet: string;
        type: telephony.ProtocolEnum;
    }) => Promise<telephony.DefaultIpRestriction>;
    /**
     * settings operations
     * Change the telephony settings linked to the customer account
     */
    post(path: '/me/telephony/settings'): (params: {
        settings: telephony.Settings;
    }) => Promise<void>;
    /**
     * checkValidity operations
     * Verify existing voucher
     */
    post(path: '/me/voucher/checkValidity'): (params: {
        voucher: string;
    }) => Promise<nichandle.VoucherStatus>;
    /**
     * setting operations
     * Change xdsl settings linked to the nichandle
     */
    post(path: '/me/xdsl/setting'): (params?: {
        resellerFastModemShipping?: boolean;
        resellerModemBasicConfig?: boolean;
    }) => Promise<void>;
    /**
     * SOTP Two-Factor Authentication
     * Delete this Two-Factor
     */
    delete(path: '/me/accessRestriction/backupCode'): () => Promise<void>;
    /**
     * List of all IP Restrictions
     * Delete this restriction rule
     */
    delete(path: '/me/accessRestriction/ip/{id}'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * Sms Two-Factor Authentication
     * Delete this Two-Factor
     */
    delete(path: '/me/accessRestriction/sms/{id}'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * TOTP Two-Factor Authentication
     * Delete this Two-Factor
     */
    delete(path: '/me/accessRestriction/totp/{id}'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * U2F Two-Factor Authentication
     * Delete this Two-Factor
     */
    delete(path: '/me/accessRestriction/u2f/{id}'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * API Application
     * Remove this application. It will revoke all credential belonging to this application.
     */
    delete(path: '/me/api/application/{applicationId}'): (params: {
        applicationId: number;
    }) => Promise<void>;
    /**
     * API Credential
     * Remove this credential
     */
    delete(path: '/me/api/credential/{credentialId}'): (params: {
        credentialId: number;
    }) => Promise<void>;
    /**
     * Manage billing groups
     * Delete a billing group
     */
    delete(path: '/me/billing/group/{groupId}'): (params: {
        groupId: number;
    }) => Promise<void>;
    /**
     *
     * Unlink a service from a billing group
     */
    delete(path: '/me/billing/group/{groupId}/service/{serviceId}'): (params: {
        groupId: number;
        serviceId: number;
    }) => Promise<void>;
    /**
     * List of documents added on your account
     * Delete a document
     */
    delete(path: '/me/document/{id}'): (params: {
        id: string;
    }) => Promise<void>;
    /**
     * Custom domains of your fax services
     * Delete a custom domain of your fax services
     */
    delete(path: '/me/fax/customDomains/{id}'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * A group linked to this account
     * Delete this object
     */
    delete(path: '/me/identity/group/{group}'): (params: {
        group: string;
    }) => Promise<void>;
    /**
     * A user linked to this account
     * Delete this object
     */
    delete(path: '/me/identity/user/{user}'): (params: {
        user: string;
    }) => Promise<void>;
    /**
     * Available installation templates
     * remove this template
     */
    delete(path: '/me/installationTemplate/{templateName}'): (params: {
        templateName: string;
    }) => Promise<void>;
    /**
     * Partitioning schemes available on this template
     * remove this scheme of partition
     */
    delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {
        schemeName: string;
        templateName: string;
    }) => Promise<void>;
    /**
     * Hardware RAID defined in this partitioning scheme
     * Remove this RAID
     */
    delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {
        name: string;
        schemeName: string;
        templateName: string;
    }) => Promise<void>;
    /**
     *  Partitions defined in this partitioning scheme
     * remove this partition
     */
    delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {
        mountpoint: string;
        schemeName: string;
        templateName: string;
    }) => Promise<void>;
    /**
     * Details about an IP block organisation
     * Delete this organisation
     */
    delete(path: '/me/ipOrganisation/{organisationId}'): (params: {
        organisationId: string;
    }) => Promise<void>;
    /**
     * Customer IPXE scripts
     * Remove this IPXE Script
     */
    delete(path: '/me/ipxeScript/{name}'): (params: {
        name: string;
    }) => Promise<void>;
    /**
     * Manage payment method
     * Cancel one payment method
     */
    delete(path: '/me/payment/method/{paymentMethodId}'): (params: {
        paymentMethodId: number;
    }) => Promise<me.payment.method.PaymentMethod>;
    /**
     * SEPA bank account info
     * Disable payment through this account
     */
    delete(path: '/me/paymentMean/bankAccount/{id}'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * Credit card informations
     * Disable payment through this credit card
     */
    delete(path: '/me/paymentMean/creditCard/{id}'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * Paypal account info
     * Disable payment through this PayPal account
     */
    delete(path: '/me/paymentMean/paypal/{id}'): (params: {
        id: number;
    }) => Promise<void>;
    /**
     * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
     * Remove this public SSH key
     */
    delete(path: '/me/sshKey/{keyName}'): (params: {
        keyName: string;
    }) => Promise<void>;
    /**
     * Default IP restriction of a VoIP line
     * Delete a default IP restriction for your future VoIP lines
     */
    delete(path: '/me/telephony/defaultIpRestriction/{id}'): (params: {
        id: number;
    }) => Promise<void>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type orderPrice = order.Price;
declare type paymentmethodIntegrationType = payment.method.IntegrationType;

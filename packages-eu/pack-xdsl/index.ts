import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /pack/xdsl Models
 * Source: https://eu.api.ovh.com/1.0/pack/xdsl.json
 */
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
export namespace connectivity {
    export namespace eligibility {
        /**
         * Details of a Building
         * interface fullName: connectivity.eligibility.Building.Building
         */
        export interface Building {
            name: string;
            nro?: string;
            reference: string;
            stairs?: connectivity.eligibility.BuildingStair[];
            type?: connectivity.eligibility.BuildingTypeEnum;
        }
        /**
         * Stair details of a Building
         * interface fullName: connectivity.eligibility.BuildingStair.BuildingStair
         */
        export interface BuildingStair {
            floors: string[];
            stair: string;
        }
        /**
         * Building type
         * type fullname: connectivity.eligibility.BuildingTypeEnum
         */
        export type BuildingTypeEnum = "BUILDING" | "HOUSE"
        /**
         * Installation type, for fiber only
         * type fullname: connectivity.eligibility.InstallationTypeEnum
         */
        export type InstallationTypeEnum = "activate" | "activate_undefined" | "create" | "multiOtp"
    }
}
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
    }
}
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
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
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "INR" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
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
export namespace pack {
    export namespace xdsl {
        /**
         * Async task
         * interface fullName: pack.xdsl.AsyncTask.AsyncTask
         */
        export interface AsyncTask<T> {
            error?: string;
            result?: T;
            status: pack.xdsl.AsyncTaskStatusEnum;
        }
        /**
         * AsyncTask status
         * type fullname: pack.xdsl.AsyncTaskStatusEnum
         */
        export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
        /**
         * Information about the contact
         * interface fullName: pack.xdsl.ContactInfos.ContactInfos
         */
        export interface ContactInfos {
            address?: string;
            city?: string;
            country: nichandle.CountryEnum;
            email: string;
            firstname?: string;
            name?: string;
            organisation?: string;
            phone?: string;
            phoneCountry?: nichandle.CountryEnum;
            zip?: string;
        }
        /**
         * Domain action
         * type fullname: pack.xdsl.DomainActionEnum
         */
        export type DomainActionEnum = "create" | "trade" | "transfer"
        /**
         * Exchange 2013 service
         * interface fullName: pack.xdsl.ExchangeAccountService.ExchangeAccountService
         */
        export interface ExchangeAccountService {
            domain: string;
            exchangeService: string;
            organizationName: string;
        }
        export namespace HostedEmail {
            /**
             * HostedEmail account
             * interface fullName: pack.xdsl.HostedEmail.Account.Account
             */
            export interface Account {
                antispamEnabled: boolean;
                antivirusEnabled: boolean;
                offer: pack.xdsl.HostedEmail.AccountOfferEnum;
                primaryEmailAddress: string;
                quota: complexType.UnitAndValue<number>;
                size: complexType.UnitAndValue<number>;
            }
            /**
             * Available offers
             * type fullname: pack.xdsl.HostedEmail.AccountOfferEnum
             */
            export type AccountOfferEnum = "individual"
            /**
             * HostedEmail configuration
             * interface fullName: pack.xdsl.HostedEmail.Configuration.Configuration
             */
            export interface Configuration {
                services: pack.xdsl.HostedEmail.ConfigurationService[];
                status: pack.xdsl.HostedEmail.ConfigurationStatusEnum;
                webmailUrl: string;
            }
            /**
             * HostedEmail configuration service
             * interface fullName: pack.xdsl.HostedEmail.ConfigurationService.ConfigurationService
             */
            export interface ConfigurationService {
                host: string;
                ip: string;
                port: number;
                service: pack.xdsl.HostedEmail.ConfigurationServiceEnum;
                smtpAuth?: boolean;
                startTls: boolean;
            }
            /**
             * Available types of service
             * type fullname: pack.xdsl.HostedEmail.ConfigurationServiceEnum
             */
            export type ConfigurationServiceEnum = "imap" | "imaps" | "pop3" | "pop3s" | "smtp" | "smtps" | "submission"
            /**
             * Available configuration statuses
             * type fullname: pack.xdsl.HostedEmail.ConfigurationStatusEnum
             */
            export type ConfigurationStatusEnum = "active" | "suspended"
        }
        /**
         * Hosted email services
         * interface fullName: pack.xdsl.HostedEmailService.HostedEmailService
         */
        export interface HostedEmailService {
            domain: string;
        }
        /**
         * modem type
         * type fullname: pack.xdsl.ModemOptionEnum
         */
        export type ModemOptionEnum = "no" | "recycled" | "yes"
        /**
         * Pack of xDSL services
         * interface fullName: pack.xdsl.PackAdsl.PackAdsl
         */
        export interface PackAdsl {
            capabilities: pack.xdsl.PackCapabilities;
            description?: string;
            offerDescription: string;
            offerPrice: order.Price;
            packName: string;
        }
        /**
         * Pack of xDSL services
         * interface fullName: pack.xdsl.PackAdslWithIAM.PackAdslWithIAM
         */
        export interface PackAdslWithIAM {
            capabilities: pack.xdsl.PackCapabilities;
            description?: string;
            iam?: iam.ResourceMetadata;
            offerDescription: string;
            offerPrice: order.Price;
            packName: string;
        }
        /**
         * Describe the capabilities of this pack
         * interface fullName: pack.xdsl.PackCapabilities.PackCapabilities
         */
        export interface PackCapabilities {
            canMoveAddress: boolean;
            isLegacyOffer: boolean;
            isResellerOffer: boolean;
        }
        /**
         * Information about pack xdsl
         * interface fullName: pack.xdsl.PackDetail.PackDetail
         */
        export interface PackDetail {
            accessname: string;
            description: string;
            number: string;
            packname: string;
            type: xdslDslTypeEnum;
        }
        /**
         * Details about the resiliation
         * interface fullName: pack.xdsl.ResiliationFollowUpDetail.ResiliationFollowUpDetail
         */
        export interface ResiliationFollowUpDetail {
            dateTodo: string;
            needModemReturn: boolean;
            registrationDate: string;
            status: string;
        }
        /**
         * Reason of a resiliation
         * type fullname: pack.xdsl.ResiliationReasonEnum
         */
        export type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "changeOperator" | "eligibilityFtth" | "ftth" | "goToCompetitor" | "other" | "price" | "technicalProblems"
        /**
         * Information about the reason for the resiliation
         * interface fullName: pack.xdsl.ResiliationSurvey.ResiliationSurvey
         */
        export interface ResiliationSurvey {
            comment?: string;
            subsidiary?: string;
            type: pack.xdsl.ResiliationReasonEnum;
        }
        /**
         * Show the resiliation terms
         * interface fullName: pack.xdsl.ResiliationTerms.ResiliationTerms
         */
        export interface ResiliationTerms {
            due: order.Price;
            engageDate?: string;
            minResiliationDate: string;
            resiliationDate: string;
            resiliationReasons: pack.xdsl.ResiliationReasonEnum[];
        }
        /**
         * Service link to the pack
         * interface fullName: pack.xdsl.Service.Service
         */
        export interface Service {
            domain: string;
            id: number;
            type: pack.xdsl.ServiceNameEnum;
        }
        /**
         * Informations about a service
         * interface fullName: pack.xdsl.ServiceInformation.ServiceInformation
         */
        export interface ServiceInformation {
            inCreation: number;
            name: pack.xdsl.ServiceNameEnum;
            total: number;
            used: number;
        }
        /**
         * Service name
         * type fullname: pack.xdsl.ServiceNameEnum
         */
        export type ServiceNameEnum = "domain" | "emailPro" | "exchangeAccount" | "exchangeIndividual" | "exchangeOrganization" | "grt10ho" | "grt20m10ho" | "grt20m4ho" | "grt4ho" | "grt5m10ho" | "grt5m4ho" | "grtAlt" | "grtDsp" | "grtFt" | "grtKosc" | "grtOvh" | "hostedEmail" | "modem" | "overTheBoxHardware" | "overTheBoxService" | "voipAlias" | "voipBillingAccount" | "voipEcoFax" | "voipLine" | "voipTrunk" | "xdslAccess"
        /**
         * Shipping address
         * interface fullName: pack.xdsl.ShippingAddress.ShippingAddress
         */
        export interface ShippingAddress {
            address: string;
            cityName: string;
            countryCode: string;
            firstName: string;
            lastName: string;
            shippingId: string;
            zipCode: string;
        }
        /**
         * Allowed contexts when looking for shipping addresses
         * type fullname: pack.xdsl.ShippingAddressContextEnum
         */
        export type ShippingAddressContextEnum = "migration" | "voipLine"
        /**
         * Describes the current status of a task
         * interface fullName: pack.xdsl.Task.Task
         */
        export interface Task {
            function: string;
            id: number;
            status: pack.xdsl.TaskStatusEnum;
            updateDate: string;
        }
        /**
         * Status of a task.
         * type fullname: pack.xdsl.TaskStatusEnum
         */
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
        /**
         * Terms to unpack services
         * interface fullName: pack.xdsl.UnpackTerms.UnpackTerms
         */
        export interface UnpackTerms {
            isAllowed: boolean;
            price: order.Price;
            renewPeriod: number;
            renewPrice: order.Price;
        }
        /**
         * Hardware for VoIP line
         * interface fullName: pack.xdsl.VoIPHardware.VoIPHardware
         */
        export interface VoIPHardware {
            deposit?: order.Price;
            fees?: order.Price;
            image?: string;
            label: string;
            max?: number;
            name: string;
            needShipping: boolean;
            url?: string;
        }
        /**
         * Represents an order of VoIP lines
         * interface fullName: pack.xdsl.VoIPLineOrder.VoIPLineOrder
         */
        export interface VoIPLineOrder {
            needPayment: boolean;
            orderId: number;
            orderUrl: string;
            taskIds: number[];
        }
        /**
         * VOIP line services
         * interface fullName: pack.xdsl.VoipLineService.VoipLineService
         */
        export interface VoipLineService {
            billingAccount: string;
            domain: string;
        }
        export namespace addressMove {
            /**
             * Address move offer
             * interface fullName: pack.xdsl.addressMove.MoveOffer.MoveOffer
             */
            export interface MoveOffer {
                contracts: order.Contract[];
                customOntAddress: boolean;
                description: string;
                engageMonths?: number;
                engaged: boolean;
                modemOptions?: pack.xdsl.migration.OfferModemOption[];
                modemReferenceToReturn?: string;
                needModem: boolean;
                needNewModem: boolean;
                offerName: string;
                options: pack.xdsl.migration.OfferAvailableOption[];
                prices: pack.xdsl.addressMove.PriceOffer;
                productCodes: string[];
                subServicesToDelete: pack.xdsl.migration.SubServiceToDelete[];
                url: string;
            }
            /**
             * List of available Move address offer
             * interface fullName: pack.xdsl.addressMove.MoveOfferResponse.MoveOfferResponse
             */
            export interface MoveOfferResponse {
                offers: pack.xdsl.addressMove.MoveOffer[];
            }
            /**
             * Price details for an offer
             * interface fullName: pack.xdsl.addressMove.Price.Price
             */
            export interface Price {
                description: string;
                price?: order.Price;
            }
            /**
             * Price details for an offer
             * interface fullName: pack.xdsl.addressMove.PriceOffer.PriceOffer
             */
            export interface PriceOffer {
                creationLineFees: pack.xdsl.addressMove.Price;
                currentOfferPrice: pack.xdsl.addressMove.Price;
                due: pack.xdsl.addressMove.Price;
                firstYearPromo: pack.xdsl.addressMove.Price;
                gtrComfortFees?: pack.xdsl.addressMove.Price;
                installFees: pack.xdsl.addressMove.Price;
                modemRental: pack.xdsl.addressMove.Price;
                price: pack.xdsl.addressMove.Price;
                promotion?: pack.xdsl.migrationAndAddressMove.Promotion;
                providerAI?: pack.xdsl.addressMove.Price;
                providerOrange?: pack.xdsl.addressMove.Price;
            }
        }
        export namespace migration {
            /**
             * Migration offer
             * interface fullName: pack.xdsl.migration.MigrationOffer.MigrationOffer
             */
            export interface MigrationOffer {
                contractList: string[];
                contracts: order.Contract[];
                currentOfferPrice: order.Price;
                customOntAddress: boolean;
                description: string;
                due?: order.Price;
                engageMonths?: number;
                engaged: boolean;
                engagementMonths: number[];
                firstYearPromo?: order.Price;
                gtrComfortFees?: order.Price;
                installFees?: order.Price;
                modemMacToReturn?: string;
                modemOptions?: pack.xdsl.migration.OfferModemOption[];
                modemRental?: order.Price;
                multiOtp: boolean;
                needModem: boolean;
                needNewModem: boolean;
                offerName: string;
                options: pack.xdsl.migration.OfferAvailableOption[];
                price: order.Price;
                promotion?: pack.xdsl.migrationAndAddressMove.Promotion;
                providerAI?: order.Price;
                providerOrange?: order.Price;
                subServicesToDelete: pack.xdsl.migration.SubServiceToDelete[];
                url: string;
            }
            /**
             * List of available Migration offer
             * interface fullName: pack.xdsl.migration.MigrationOfferResponse.MigrationOfferResponse
             */
            export interface MigrationOfferResponse {
                buildings: connectivity.eligibility.Building[];
                offers: pack.xdsl.migration.MigrationOffer[];
            }
            /**
             * Available option for the offer
             * interface fullName: pack.xdsl.migration.OfferAvailableOption.OfferAvailableOption
             */
            export interface OfferAvailableOption {
                duration: number;
                included: number;
                name: string;
                optional: number;
                optionalPrice?: order.Price;
            }
            /**
             * Available modem option for the offer
             * interface fullName: pack.xdsl.migration.OfferModemOption.OfferModemOption
             */
            export interface OfferModemOption {
                name: string;
                price?: order.Price;
            }
            /**
             * Option of Offer
             * interface fullName: pack.xdsl.migration.OfferOption.OfferOption
             */
            export interface OfferOption {
                name: string;
                quantity: number;
            }
            /**
             * Option of Offer
             * interface fullName: pack.xdsl.migration.OfferServiceToDelete.OfferServiceToDelete
             */
            export interface OfferServiceToDelete {
                service: string;
                type: pack.xdsl.ServiceNameEnum;
            }
            /**
             * Option of Offer
             * interface fullName: pack.xdsl.migration.OfferServiceToKeep.OfferServiceToKeep
             */
            export interface OfferServiceToKeep {
                service: string;
                type: pack.xdsl.ServiceNameEnum;
            }
            /**
             * Sub service with unpack terms details
             * interface fullName: pack.xdsl.migration.SubServiceDetails.SubServiceDetails
             */
            export interface SubServiceDetails {
                isAllowed: boolean;
                price: order.Price;
                renewPeriod: number;
                renewPrice: order.Price;
                service: string;
            }
            /**
             * Sub service to delete
             * interface fullName: pack.xdsl.migration.SubServiceToDelete.SubServiceToDelete
             */
            export interface SubServiceToDelete {
                numberToDelete: number;
                services: string[];
                type: pack.xdsl.ServiceNameEnum;
            }
            /**
             * Sub services to delete with unpack terms
             * interface fullName: pack.xdsl.migration.SubServicesDetailsToDelete.SubServicesDetailsToDelete
             */
            export interface SubServicesDetailsToDelete {
                numberToDelete: number;
                services: pack.xdsl.migration.SubServiceDetails[];
                type: pack.xdsl.ServiceNameEnum;
            }
        }
        export namespace migrationAndAddressMove {
            /**
             * Migration or address move offer promotion
             * interface fullName: pack.xdsl.migrationAndAddressMove.Promotion.Promotion
             */
            export interface Promotion {
                endDate?: string;
                id: string;
                installFee?: pack.xdsl.migrationAndAddressMove.PromotionDetails;
                startDate?: string;
                subscription?: pack.xdsl.migrationAndAddressMove.PromotionDetails;
            }
            /**
             * Migration or address move offer promotion details
             * interface fullName: pack.xdsl.migrationAndAddressMove.PromotionDetails.PromotionDetails
             */
            export interface PromotionDetails {
                discount: order.Price;
                duration?: string;
            }
        }
        export namespace promotionCode {
            /**
             * Informations about a promotion code
             * interface fullName: pack.xdsl.promotionCode.Capabilities.Capabilities
             */
            export interface Capabilities {
                amount: order.Price;
                canGenerate: boolean;
                engagement: number;
                reasonCodes: pack.xdsl.promotionCode.ReasonCodes[];
            }
            /**
             * Reasons why the promotion code can not be generated
             * type fullname: pack.xdsl.promotionCode.ReasonCodes
             */
            export type ReasonCodes = "noMoreAvailable" | "offerNotCompatible" | "serviceNotInOkState" | "stillEngaged" | "taskInProgress"
        }
    }
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
export namespace xdsl {
    /**
     * Possible DSL technologies
     * type fullname: xdsl.DslTypeEnum
     */
    export type DslTypeEnum = "adsl" | "ftte" | "ftth" | "sdsl" | "vdsl"
    export namespace eligibility {
        /**
         * Parameters to book a time slot for a meeting
         * interface fullName: xdsl.eligibility.BookMeetingSlot.BookMeetingSlot
         */
        export interface BookMeetingSlot {
            fakeMeeting: boolean;
            meetingSlot?: xdsl.eligibility.MeetingSlot;
            name?: string;
        }
        /**
         * Represents a time slot for a meeting
         * interface fullName: xdsl.eligibility.MeetingSlot.MeetingSlot
         */
        export interface MeetingSlot {
            endDate: string;
            slotId?: string;
            startDate: string;
            uiCode: string;
        }
    }
}

/**
 * END API /pack/xdsl Models
 */
export function proxyPackXdsl(ovhEngine: OvhRequestable): Pack {
    return buildOvhProxy(ovhEngine, '/pack');
}
export default proxyPackXdsl;
/**
 * Api model for /pack/xdsl
 */
export interface Pack {
    xdsl: {
        /**
         * List available services
         * GET /pack/xdsl
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(packName: string): {
            /**
             * Get this object properties
             * GET /pack/xdsl/{packName}
             */
            $get(): Promise<pack.xdsl.PackAdsl>;
            /**
             * Alter this object properties
             * PUT /pack/xdsl/{packName}
             */
            $put(params?: { capabilities?: pack.xdsl.PackCapabilities, description?: string, offerDescription?: string, offerPrice?: order.Price, packName?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            addressMove: {
                moveOffer: {
                    /**
                     * Move the access to another address
                     * POST /pack/xdsl/{packName}/addressMove/moveOffer
                     */
                    $post(params: { acceptContracts: boolean, building?: string, buildingReference?: string, contactPhone?: string, door?: string, eligibilityReference: string, engageMonths?: number, floor?: string, installationType?: connectivity.eligibility.InstallationTypeEnum, keepCurrentNumber: boolean, meeting?: xdsl.eligibility.BookMeetingSlot, modem: pack.xdsl.ModemOptionEnum, mondialRelayId?: number, moveOutDate?: string, nicShipping?: string, offerName: string, ontShippingContact?: string, options?: pack.xdsl.migration.OfferOption[], otp: boolean, otpReference?: string, productCode: string, residence?: string, stair?: string, subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[], subServicesToKeep?: pack.xdsl.migration.OfferServiceToKeep[] }): Promise<pack.xdsl.AsyncTask<number>>;
                }
                offers: {
                    /**
                     * Get the possibilities of address move offers available
                     * POST /pack/xdsl/{packName}/addressMove/offers
                     */
                    $post(params: { eligibilityReference: string }): Promise<pack.xdsl.AsyncTask<pack.xdsl.addressMove.MoveOfferResponse>>;
                }
                servicesToDeleteUnpackTerms: {
                    /**
                     * Calculate services to delete with unpack terms for new offer and options
                     * POST /pack/xdsl/{packName}/addressMove/servicesToDeleteUnpackTerms
                     */
                    $post(params: { eligibilityReference: string, offerName: string, options?: pack.xdsl.migration.OfferOption[] }): Promise<pack.xdsl.migration.SubServicesDetailsToDelete[]>;
                }
            }
            canCancelResiliation: {
                /**
                 * Check if the resiliation can be cancelled
                 * GET /pack/xdsl/{packName}/canCancelResiliation
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            cancelResiliation: {
                /**
                 * Cancel the ongoing resiliation
                 * POST /pack/xdsl/{packName}/cancelResiliation
                 */
                $post(): Promise<void>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /pack/xdsl/{packName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            contactOwner: {
                /**
                 * Get contact infos about the owner
                 * GET /pack/xdsl/{packName}/contactOwner
                 */
                $get(): Promise<pack.xdsl.ContactInfos>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            domain: {
                options: {
                    tlds: {
                        /**
                         * Get the available tlds for domain order
                         * GET /pack/xdsl/{packName}/domain/options/tlds
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                services: {
                    /**
                     * Domain services
                     * GET /pack/xdsl/{packName}/domain/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Activate a domain service
                     * POST /pack/xdsl/{packName}/domain/services
                     */
                    $post(params: { action: pack.xdsl.DomainActionEnum, authInfo?: string, domain: string, tld: string }): Promise<pack.xdsl.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            emailPro: {
                options: {
                    domains: {
                        /**
                         * List the available domains for the Email Pro service
                         * GET /pack/xdsl/{packName}/emailPro/options/domains
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    isEmailAvailable: {
                        /**
                         * Check if the given email address is available for an Email Pro activation
                         * GET /pack/xdsl/{packName}/emailPro/options/isEmailAvailable
                         */
                        $get(params: { email: string }): Promise<boolean>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                services: {
                    /**
                     * List the Email Pro services
                     * GET /pack/xdsl/{packName}/emailPro/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Activate an Email Pro service
                     * POST /pack/xdsl/{packName}/emailPro/services
                     */
                    $post(params: { email: string, password: string }): Promise<pack.xdsl.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            exchangeAccount: {
                services: {
                    /**
                     * Exchange 2013 services
                     * GET /pack/xdsl/{packName}/exchangeAccount/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(domain: string): {
                        /**
                         * Get this object properties
                         * GET /pack/xdsl/{packName}/exchangeAccount/services/{domain}
                         */
                        $get(): Promise<pack.xdsl.ExchangeAccountService>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            exchangeIndividual: {
                options: {
                    domains: {
                        /**
                         * Get the available domains
                         * GET /pack/xdsl/{packName}/exchangeIndividual/options/domains
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    isEmailAvailable: {
                        /**
                         * Check if the email address is available for service creation
                         * GET /pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable
                         */
                        $get(params: { email: string }): Promise<boolean>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
            }
            exchangeOrganization: {
                services: {
                    /**
                     * Exchange 2013 organization services
                     * GET /pack/xdsl/{packName}/exchangeOrganization/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            hostedEmail: {
                options: {
                    domains: {
                        /**
                         * Get the hostedemail available domains
                         * GET /pack/xdsl/{packName}/hostedEmail/options/domains
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                services: {
                    /**
                     * Hosted email services
                     * GET /pack/xdsl/{packName}/hostedEmail/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Activate an hosted email service
                     * POST /pack/xdsl/{packName}/hostedEmail/services
                     */
                    $post(params: { email: string, password: string }): Promise<pack.xdsl.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(domain: string): {
                        /**
                         * Delete hosted email account
                         * DELETE /pack/xdsl/{packName}/hostedEmail/services/{domain}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /pack/xdsl/{packName}/hostedEmail/services/{domain}
                         */
                        $get(): Promise<pack.xdsl.HostedEmailService>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        account: {
                            /**
                             * Get hosted email account informations
                             * GET /pack/xdsl/{packName}/hostedEmail/services/{domain}/account
                             */
                            $get(): Promise<pack.xdsl.HostedEmail.Account>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        changePassword: {
                            /**
                             * Change hosted email account password
                             * POST /pack/xdsl/{packName}/hostedEmail/services/{domain}/changePassword
                             */
                            $post(params: { password: string }): Promise<void>;
                        }
                        configuration: {
                            /**
                             * Get hosted email configuration informations
                             * GET /pack/xdsl/{packName}/hostedEmail/services/{domain}/configuration
                             */
                            $get(): Promise<pack.xdsl.HostedEmail.Configuration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            }
            migration: {
                migrate: {
                    /**
                     * Migrate to the selected offer
                     * POST /pack/xdsl/{packName}/migration/migrate
                     */
                    $post(params: { acceptContracts: boolean, buildingReference?: string, contactPhone?: string, engageMonths?: number, floor?: string, installationType?: connectivity.eligibility.InstallationTypeEnum, meeting?: xdsl.eligibility.BookMeetingSlot, modem: pack.xdsl.ModemOptionEnum, mondialRelayId?: number, nicShipping?: string, offerName: string, ontShippingContact?: string, options?: pack.xdsl.migration.OfferOption[], otp?: boolean, otpReference?: string, productCode?: string, stair?: string, subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[], subServicesToKeep?: pack.xdsl.migration.OfferServiceToKeep[] }): Promise<pack.xdsl.Task>;
                }
                offers: {
                    /**
                     * Get the possibilities of migration offers available
                     * POST /pack/xdsl/{packName}/migration/offers
                     */
                    $post(params?: { buildingReference?: string }): Promise<pack.xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>>;
                }
                servicesToDeleteUnpackTerms: {
                    /**
                     * Calculate services to delete with unpack terms for an offer and options
                     * POST /pack/xdsl/{packName}/migration/servicesToDeleteUnpackTerms
                     */
                    $post(params: { offerName: string, options?: pack.xdsl.migration.OfferOption[] }): Promise<pack.xdsl.migration.SubServicesDetailsToDelete[]>;
                }
            }
            promotionCode: {
                capabilities: {
                    /**
                     * Get informations about the promotion code generation
                     * GET /pack/xdsl/{packName}/promotionCode/capabilities
                     */
                    $get(): Promise<pack.xdsl.promotionCode.Capabilities>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                generate: {
                    /**
                     * Creates a task to generate a new promotion code
                     * POST /pack/xdsl/{packName}/promotionCode/generate
                     */
                    $post(): Promise<pack.xdsl.Task>;
                }
            }
            resiliate: {
                /**
                 * Resiliate the pack
                 * POST /pack/xdsl/{packName}/resiliate
                 */
                $post(params: { resiliationDate?: string, resiliationSurvey: pack.xdsl.ResiliationSurvey, servicesToKeep?: number[] }): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            }
            resiliationFollowUp: {
                /**
                 * Get information about the ongoing resiliation
                 * GET /pack/xdsl/{packName}/resiliationFollowUp
                 */
                $get(): Promise<pack.xdsl.ResiliationFollowUpDetail>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            resiliationTerms: {
                /**
                 * Get resiliation terms
                 * GET /pack/xdsl/{packName}/resiliationTerms
                 */
                $get(params?: { resiliationDate?: string }): Promise<pack.xdsl.ResiliationTerms>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /pack/xdsl/{packName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /pack/xdsl/{packName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            services: {
                /**
                 * Informations about the services included in the pack
                 * GET /pack/xdsl/{packName}/services
                 */
                $get(): Promise<pack.xdsl.ServiceInformation[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            shippingAddresses: {
                /**
                 * Allowed shipping addresses given a context
                 * GET /pack/xdsl/{packName}/shippingAddresses
                 */
                $get(params: { context: pack.xdsl.ShippingAddressContextEnum }): Promise<pack.xdsl.ShippingAddress[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            subServices: {
                /**
                 * List services contained in the pack
                 * GET /pack/xdsl/{packName}/subServices
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domain: string): {
                    /**
                     * Get this object properties
                     * GET /pack/xdsl/{packName}/subServices/{domain}
                     */
                    $get(): Promise<pack.xdsl.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    keepServiceTerms: {
                        /**
                         * Give the condition to unpack service from pack
                         * GET /pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms
                         */
                        $get(): Promise<pack.xdsl.UnpackTerms>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            tasks: {
                /**
                 * Tasks scheduled for this pack
                 * GET /pack/xdsl/{packName}/tasks
                 */
                $get(params?: { function_?: string, status?: pack.xdsl.TaskStatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /pack/xdsl/{packName}/tasks/{id}
                     */
                    $get(): Promise<pack.xdsl.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            voipBillingAccount: {
                services: {
                    /**
                     * VOIP billing accounts
                     * GET /pack/xdsl/{packName}/voipBillingAccount/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            voipEcofax: {
                services: {
                    /**
                     * VOIP ecofax service
                     * GET /pack/xdsl/{packName}/voipEcofax/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Activate a voicefax service
                     * POST /pack/xdsl/{packName}/voipEcofax/services
                     */
                    $post(): Promise<pack.xdsl.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            voipLine: {
                options: {
                    customShippingAddress: {
                        /**
                         * Create a new shippingId to be used for voipLine service creation
                         * POST /pack/xdsl/{packName}/voipLine/options/customShippingAddress
                         */
                        $post(params: { address: string, cityName: string, firstName: string, lastName: string, zipCode: string }): Promise<number>;
                    }
                    hardwares: {
                        /**
                         * Get available hardwares
                         * GET /pack/xdsl/{packName}/voipLine/options/hardwares
                         */
                        $get(): Promise<pack.xdsl.VoIPHardware[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    shippingAddresses: {
                        /**
                         * Get available shipping addresses
                         * GET /pack/xdsl/{packName}/voipLine/options/shippingAddresses
                         */
                        $get(): Promise<pack.xdsl.ShippingAddress[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                services: {
                    /**
                     * VOIP line services
                     * GET /pack/xdsl/{packName}/voipLine/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Activate a voip line service
                     * POST /pack/xdsl/{packName}/voipLine/services
                     */
                    $post(params: { hardwareNames: string[], mondialRelayId?: string, shippingId?: string }): Promise<pack.xdsl.VoIPLineOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(domain: string): {
                        /**
                         * Get this object properties
                         * GET /pack/xdsl/{packName}/voipLine/services/{domain}
                         */
                        $get(): Promise<pack.xdsl.VoipLineService>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            xdslAccess: {
                services: {
                    /**
                     * xDSL access services
                     * GET /pack/xdsl/{packName}/xdslAccess/services
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
        };
    }
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type xdslDslTypeEnum = xdsl.DslTypeEnum;

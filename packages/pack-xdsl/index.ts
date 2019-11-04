import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /pack/xdsl Models
 */
export namespace connectivity {
    export namespace eligibility {
        // interface fullName: connectivity.eligibility.Building.Building
        export interface Building {
            name: string;
            nro?: string;
            reference: string;
            stairs: connectivity.eligibility.BuildingStair[];
            type: connectivity.eligibility.BuildingTypeEnum;
        }
        // interface fullName: connectivity.eligibility.BuildingStair.BuildingStair
        export interface BuildingStair {
            floors: string[];
            stair: string;
        }
        // type fullname: connectivity.eligibility.BuildingTypeEnum
        export type BuildingTypeEnum = "BUILDING" | "HOUSE"
    }
}
export namespace order {
    // interface fullName: order.Contract.Contract
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace pack {
    export namespace xdsl {
        // interface fullName: pack.xdsl.AsyncTask.AsyncTask
        export interface AsyncTask<T> {
            error?: string;
            result?: T;
            status: pack.xdsl.AsyncTaskStatusEnum;
        }
        // type fullname: pack.xdsl.AsyncTaskStatusEnum
        export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
        // type fullname: pack.xdsl.DomainActionEnum
        export type DomainActionEnum = "create" | "trade" | "transfer"
        // interface fullName: pack.xdsl.ExchangeAccountService.ExchangeAccountService
        export interface ExchangeAccountService {
            domain: string;
            exchangeService: string;
            organizationName: string;
        }
        // interface fullName: pack.xdsl.ExchangeLiteService.ExchangeLiteService
        export interface ExchangeLiteService {
            domain: string;
        }
        // interface fullName: pack.xdsl.Hubic.Hubic
        export interface Hubic {
            bytes: number;
            domain: string;
            isUsed: boolean;
            size: string;
            voucher?: string;
        }
        // interface fullName: pack.xdsl.PackAdsl.PackAdsl
        export interface PackAdsl {
            capabilities: pack.xdsl.PackCapabilities;
            description?: string;
            offerDescription: string;
            offerPrice: order.Price;
            packName: string;
        }
        // interface fullName: pack.xdsl.PackCapabilities.PackCapabilities
        export interface PackCapabilities {
            canMoveAddress: boolean;
            isLegacyOffer: boolean;
        }
        // interface fullName: pack.xdsl.PackDetail.PackDetail
        export interface PackDetail {
            accessname: string;
            description: string;
            number: string;
            packname: string;
            type: xdslDslTypeEnum;
        }
        // interface fullName: pack.xdsl.ResiliationFollowUpDetail.ResiliationFollowUpDetail
        export interface ResiliationFollowUpDetail {
            dateTodo: string;
            needModemReturn: boolean;
            registrationDate: string;
            status: string;
        }
        // type fullname: pack.xdsl.ResiliationReasonEnum
        export type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "ftth" | "goToCompetitor" | "other" | "technicalProblems"
        // interface fullName: pack.xdsl.ResiliationSurvey.ResiliationSurvey
        export interface ResiliationSurvey {
            comment?: string;
            type: pack.xdsl.ResiliationReasonEnum;
        }
        // interface fullName: pack.xdsl.ResiliationTerms.ResiliationTerms
        export interface ResiliationTerms {
            due: order.Price;
            engageDate?: string;
            minResiliationDate: string;
            resiliationDate: string;
            resiliationReasons: pack.xdsl.ResiliationReasonEnum[];
        }
        // interface fullName: pack.xdsl.Service.Service
        export interface Service {
            domain: string;
            id: number;
            type: pack.xdsl.ServiceNameEnum;
        }
        // interface fullName: pack.xdsl.ServiceInformation.ServiceInformation
        export interface ServiceInformation {
            inCreation: number;
            name: pack.xdsl.ServiceNameEnum;
            total: number;
            used: number;
        }
        // type fullname: pack.xdsl.ServiceNameEnum
        export type ServiceNameEnum = "domain" | "emailPro" | "exchangeAccount" | "exchangeIndividual" | "exchangeLite" | "exchangeOrganization" | "hostedEmail" | "hubic" | "modem" | "overTheBoxHardware" | "overTheBoxService" | "siteBuilderFull" | "siteBuilderStart" | "voipAlias" | "voipBillingAccount" | "voipEcoFax" | "voipLine" | "xdslAccess"
        // interface fullName: pack.xdsl.ShippingAddress.ShippingAddress
        export interface ShippingAddress {
            address: string;
            cityName: string;
            countryCode: string;
            firstName: string;
            lastName: string;
            shippingId: string;
            zipCode: string;
        }
        // type fullname: pack.xdsl.ShippingAddressContextEnum
        export type ShippingAddressContextEnum = "migration" | "voipLine"
        // interface fullName: pack.xdsl.SiteBuilderDomain.SiteBuilderDomain
        export interface SiteBuilderDomain {
            defaultSubDomain: string;
            domain: string;
        }
        // interface fullName: pack.xdsl.SiteBuilderTemplate.SiteBuilderTemplate
        export interface SiteBuilderTemplate {
            bkId: number;
            id: number;
            name: string;
            previewImg: string;
            reference: string;
            thumbImage: string;
        }
        // interface fullName: pack.xdsl.Task.Task
        export interface Task {
            function: string;
            id: number;
            status: pack.xdsl.TaskStatusEnum;
            updateDate: string;
        }
        // type fullname: pack.xdsl.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
        // interface fullName: pack.xdsl.UnpackTerms.UnpackTerms
        export interface UnpackTerms {
            isAllowed: boolean;
            price: order.Price;
            renewPeriod: number;
            renewPrice: order.Price;
        }
        // interface fullName: pack.xdsl.VoIPHardware.VoIPHardware
        export interface VoIPHardware {
            deposit?: order.Price;
            image?: string;
            label: string;
            max?: number;
            name: string;
            needShipping: boolean;
            url?: string;
        }
        // interface fullName: pack.xdsl.VoIPLineOrder.VoIPLineOrder
        export interface VoIPLineOrder {
            needPayment: boolean;
            orderId: number;
            orderUrl: string;
            taskIds: number[];
        }
        // interface fullName: pack.xdsl.VoipLineService.VoipLineService
        export interface VoipLineService {
            billingAccount: string;
            domain: string;
        }
        export namespace addressMove {
            // interface fullName: pack.xdsl.addressMove.Creation.Creation
            export interface Creation {
                address: xdsleligibilityAddress;
                meeting: xdsleligibilityBookMeetingSlot;
            }
            // interface fullName: pack.xdsl.addressMove.Eligibility.Eligibility
            export interface Eligibility {
                keepCurrentPortability?: xdsleligibilityPortability;
                offers: pack.xdsl.addressMove.Offer[];
            }
            // interface fullName: pack.xdsl.addressMove.Landline.Landline
            export interface Landline {
                lineNumber: string;
                portLineNumber: boolean;
                rio?: string;
                status: xdsleligibilityLandlineStatusEnum;
                unbundling: xdslDeconsolidationEnum;
            }
            // interface fullName: pack.xdsl.addressMove.MoveOffer.MoveOffer
            export interface MoveOffer {
                contracts: order.Contract[];
                description: string;
                engageMonths?: number;
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
            // interface fullName: pack.xdsl.addressMove.MoveOfferResponse.MoveOfferResponse
            export interface MoveOfferResponse {
                offers: pack.xdsl.addressMove.MoveOffer[];
            }
            // interface fullName: pack.xdsl.addressMove.Offer.Offer
            export interface Offer {
                address: xdsleligibilityAddress;
                estimatedDownload: number;
                estimatedUpload: number;
                lineSectionsLength: xdslLineSectionLength[];
                lineStatus: xdsleligibilityLandlineStatusEnum;
                meetingSlots?: xdsleligibilityMeetingSlots;
                nra: string;
                offerCode: string;
                portability: xdsleligibilityPortability;
                price: order.Price;
                provider: xdsleligibilityProviderEnum;
                reseller: boolean;
                syncDownload: number;
                syncUpload: number;
                type: xdslDslTypeEnum;
                unbundling: xdslDeconsolidationEnum;
            }
            // interface fullName: pack.xdsl.addressMove.Price.Price
            export interface Price {
                description: string;
                price?: order.Price;
            }
            // interface fullName: pack.xdsl.addressMove.PriceOffer.PriceOffer
            export interface PriceOffer {
                currentOfferPrice: pack.xdsl.addressMove.Price;
                due: pack.xdsl.addressMove.Price;
                firstYearPromo: pack.xdsl.addressMove.Price;
                installFees: pack.xdsl.addressMove.Price;
                modemRental: pack.xdsl.addressMove.Price;
                price: pack.xdsl.addressMove.Price;
            }
        }
        export namespace migration {
            // interface fullName: pack.xdsl.migration.MigrationOffer.MigrationOffer
            export interface MigrationOffer {
                contractList: string[];
                contracts: order.Contract[];
                currentOfferPrice: order.Price;
                description: string;
                due?: order.Price;
                engageMonths?: number;
                engagementMonths: number[];
                firstYearPromo?: order.Price;
                installFees?: order.Price;
                modemMacToReturn?: string;
                modemRental?: order.Price;
                needModem: boolean;
                needNewModem: boolean;
                offerName: string;
                options: pack.xdsl.migration.OfferAvailableOption[];
                price: order.Price;
                subServicesToDelete: pack.xdsl.migration.SubServiceToDelete[];
                url: string;
            }
            // interface fullName: pack.xdsl.migration.MigrationOfferResponse.MigrationOfferResponse
            export interface MigrationOfferResponse {
                buildings: connectivity.eligibility.Building[];
                offers: pack.xdsl.migration.MigrationOffer[];
            }
            // interface fullName: pack.xdsl.migration.OfferAvailableOption.OfferAvailableOption
            export interface OfferAvailableOption {
                duration: number;
                included: number;
                name: string;
                optional: number;
                optionalPrice?: order.Price;
            }
            // interface fullName: pack.xdsl.migration.OfferOption.OfferOption
            export interface OfferOption {
                name: string;
                quantity: number;
            }
            // interface fullName: pack.xdsl.migration.OfferServiceToDelete.OfferServiceToDelete
            export interface OfferServiceToDelete {
                service: string;
                type: pack.xdsl.ServiceNameEnum;
            }
            // interface fullName: pack.xdsl.migration.SubServiceToDelete.SubServiceToDelete
            export interface SubServiceToDelete {
                numberToDelete: number;
                services: string[];
                type: pack.xdsl.ServiceNameEnum;
            }
        }
        export namespace promotionCode {
            // interface fullName: pack.xdsl.promotionCode.Capabilities.Capabilities
            export interface Capabilities {
                amount: order.Price;
                canGenerate: boolean;
                engagement: number;
                reasonCodes: pack.xdsl.promotionCode.ReasonCodes[];
            }
            // type fullname: pack.xdsl.promotionCode.ReasonCodes
            export type ReasonCodes = "noMoreAvailable" | "offerNotCompatible" | "serviceNotInOkState" | "stillEngaged" | "taskInProgress"
        }
    }
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.Service.Service
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
    // type fullname: xdsl.DeconsolidationEnum
    export type DeconsolidationEnum = "createNeighbour" | "creation" | "creationNeighbour" | "partial" | "total"
    // type fullname: xdsl.DslTypeEnum
    export type DslTypeEnum = "adsl" | "ftth" | "sdsl" | "vdsl"
    // interface fullName: xdsl.LineSectionLength.LineSectionLength
    export interface LineSectionLength {
        diameter: number;
        length: number;
    }
    export namespace eligibility {
        // interface fullName: xdsl.eligibility.Address.Address
        export interface Address {
            building?: string;
            city: xdsl.eligibility.City;
            door?: string;
            floor?: string;
            logo?: string;
            owner?: string;
            residence?: string;
            stair?: string;
            street?: xdsl.eligibility.Street;
            streetNumber?: string;
        }
        // interface fullName: xdsl.eligibility.BookMeetingSlot.BookMeetingSlot
        export interface BookMeetingSlot {
            fakeMeeting: boolean;
            meetingSlot?: xdsl.eligibility.MeetingSlot;
            name: string;
        }
        // interface fullName: xdsl.eligibility.City.City
        export interface City {
            inseeCode: string;
            locality?: string;
            name: string;
            zipCode: string;
        }
        // interface fullName: xdsl.eligibility.CodeAndMessage.CodeAndMessage
        export interface CodeAndMessage {
            code: string;
            message: string;
        }
        // type fullname: xdsl.eligibility.LandlineStatusEnum
        export type LandlineStatusEnum = "active" | "inactive"
        // interface fullName: xdsl.eligibility.MeetingSlot.MeetingSlot
        export interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        // interface fullName: xdsl.eligibility.MeetingSlots.MeetingSlots
        export interface MeetingSlots {
            canBookFakeMeeting: boolean;
            meetingSlots: xdsl.eligibility.MeetingSlot[];
        }
        // interface fullName: xdsl.eligibility.Portability.Portability
        export interface Portability {
            comments: xdsl.eligibility.CodeAndMessage[];
            eligible: boolean;
            underCondition: boolean;
            warnings: xdsl.eligibility.CodeAndMessage[];
        }
        // type fullname: xdsl.eligibility.ProviderEnum
        export type ProviderEnum = "axione" | "ft" | "kosc" | "ovh" | "sfr"
        // interface fullName: xdsl.eligibility.Street.Street
        export interface Street {
            name: string;
            rivoliCode: string;
        }
    }
    export namespace hubic {
        // interface fullName: xdsl.hubic.HubicDetailsResponse.HubicDetailsResponse
        export interface HubicDetailsResponse {
            email: string;
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
 * Api Proxy model
 */// Apis harmony
// path /pack
export interface Pack{
    xdsl: {
        // GET /pack/xdsl
        $get(): Promise<string[]>;
        $(packName: string): {
            // GET /pack/xdsl/{packName}
            $get(): Promise<pack.xdsl.PackAdsl>;
            // PUT /pack/xdsl/{packName}
            $put(params?: {capabilities?: pack.xdsl.PackCapabilities, description?: string, offerDescription?: string, offerPrice?: order.Price, packName?: string}): Promise<void>;
            addressMove: {
                eligibility: {
                    // POST /pack/xdsl/{packName}/addressMove/eligibility
                    $post(params?: {address?: xdsleligibilityAddress, lineNumber?: string}): Promise<pack.xdsl.AsyncTask<pack.xdsl.addressMove.Eligibility>>;
                }
                move: {
                    // POST /pack/xdsl/{packName}/addressMove/move
                    $post(params: {creation?: pack.xdsl.addressMove.Creation, keepCurrentNumber: boolean, landline?: pack.xdsl.addressMove.Landline, moveOutDate?: string, offerCode: string, provider?: xdsleligibilityProviderEnum}): Promise<pack.xdsl.AsyncTask<number>>;
                }
                moveFtth: {
                    // POST /pack/xdsl/{packName}/addressMove/moveFtth
                    $post(params: {buildingReference: string, floor: string, moveOutDate?: string, otp: boolean, otpReference?: string, stair: string}): Promise<pack.xdsl.AsyncTask<number>>;
                }
                moveOffer: {
                    // POST /pack/xdsl/{packName}/addressMove/moveOffer
                    $post(params: {acceptContracts: boolean, buildingReference: string, eligibilityReference: string, engageMonths?: number, floor: string, keepCurrentNumber: boolean, mondialRelayId?: number, moveOutDate?: string, nicShipping?: string, offerName: string, options?: pack.xdsl.migration.OfferOption[], otp: boolean, otpReference?: string, productCode: string, stair: string, subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[]}): Promise<pack.xdsl.AsyncTask<number>>;
                }
                offers: {
                    // POST /pack/xdsl/{packName}/addressMove/offers
                    $post(params: {eligibilityReference: string}): Promise<pack.xdsl.AsyncTask<pack.xdsl.addressMove.MoveOfferResponse>>;
                }
            }
            canCancelResiliation: {
                // GET /pack/xdsl/{packName}/canCancelResiliation
                $get(): Promise<boolean>;
            }
            cancelResiliation: {
                // POST /pack/xdsl/{packName}/cancelResiliation
                $post(): Promise<void>;
            }
            changeContact: {
                // POST /pack/xdsl/{packName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            domain: {
                options: {
                    tlds: {
                        // GET /pack/xdsl/{packName}/domain/options/tlds
                        $get(): Promise<string[]>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/domain/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/domain/services
                    $post(params: {action: pack.xdsl.DomainActionEnum, authInfo?: string, domain: string, tld: string}): Promise<pack.xdsl.Task>;
                }
            }
            emailPro: {
                options: {
                    domains: {
                        // GET /pack/xdsl/{packName}/emailPro/options/domains
                        $get(): Promise<string[]>;
                    }
                    isEmailAvailable: {
                        // GET /pack/xdsl/{packName}/emailPro/options/isEmailAvailable
                        $get(params: {email: string}): Promise<boolean>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/emailPro/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/emailPro/services
                    $post(params: {email: string, password: string}): Promise<pack.xdsl.Task>;
                }
            }
            exchangeAccount: {
                services: {
                    // GET /pack/xdsl/{packName}/exchangeAccount/services
                    $get(): Promise<string[]>;
                    $(domain: string): {
                        // GET /pack/xdsl/{packName}/exchangeAccount/services/{domain}
                        $get(): Promise<pack.xdsl.ExchangeAccountService>;
                    };
                }
            }
            exchangeIndividual: {
                options: {
                    domains: {
                        // GET /pack/xdsl/{packName}/exchangeIndividual/options/domains
                        $get(): Promise<string[]>;
                    }
                    isEmailAvailable: {
                        // GET /pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable
                        $get(params: {email: string}): Promise<boolean>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/exchangeIndividual/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/exchangeIndividual/services
                    $post(params: {email: string, password: string}): Promise<pack.xdsl.Task>;
                }
            }
            exchangeLite: {
                options: {
                    isEmailAvailable: {
                        // GET /pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable
                        $get(params: {email: string}): Promise<boolean>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/exchangeLite/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/exchangeLite/services
                    $post(params: {antispam?: boolean, displayName?: string, email: string, firstName?: string, initials?: string, lastName?: string, password: string}): Promise<pack.xdsl.Task>;
                    $(domain: string): {
                        // GET /pack/xdsl/{packName}/exchangeLite/services/{domain}
                        $get(): Promise<pack.xdsl.ExchangeLiteService>;
                    };
                }
            }
            exchangeOrganization: {
                services: {
                    // GET /pack/xdsl/{packName}/exchangeOrganization/services
                    $get(): Promise<string[]>;
                }
            }
            hostedEmail: {
                options: {
                    domains: {
                        // GET /pack/xdsl/{packName}/hostedEmail/options/domains
                        $get(): Promise<string[]>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/hostedEmail/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/hostedEmail/services
                    $post(params: {email: string, password: string}): Promise<pack.xdsl.Task>;
                }
            }
            hubic: {
                services: {
                    // GET /pack/xdsl/{packName}/hubic/services
                    $get(): Promise<string[]>;
                    $(domain: string): {
                        // GET /pack/xdsl/{packName}/hubic/services/{domain}
                        $get(): Promise<pack.xdsl.Hubic>;
                        details: {
                            // GET /pack/xdsl/{packName}/hubic/services/{domain}/details
                            $get(): Promise<pack.xdsl.AsyncTask<xdsl.hubic.HubicDetailsResponse>>;
                        }
                    };
                }
            }
            migration: {
                migrate: {
                    // POST /pack/xdsl/{packName}/migration/migrate
                    $post(params: {acceptContracts: boolean, buildingReference?: string, engageMonths?: number, floor?: string, mondialRelayId?: number, nicShipping?: string, offerName: string, options?: pack.xdsl.migration.OfferOption[], otp?: boolean, otpReference?: string, stair?: string, subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[]}): Promise<pack.xdsl.Task>;
                }
                offers: {
                    // POST /pack/xdsl/{packName}/migration/offers
                    $post(): Promise<pack.xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>>;
                }
                servicesToDelete: {
                    // POST /pack/xdsl/{packName}/migration/servicesToDelete
                    $post(params: {offerName: string, options?: pack.xdsl.migration.OfferOption[]}): Promise<pack.xdsl.migration.SubServiceToDelete[]>;
                }
            }
            promotionCode: {
                capabilities: {
                    // GET /pack/xdsl/{packName}/promotionCode/capabilities
                    $get(): Promise<pack.xdsl.promotionCode.Capabilities>;
                }
                generate: {
                    // POST /pack/xdsl/{packName}/promotionCode/generate
                    $post(): Promise<pack.xdsl.Task>;
                }
            }
            resiliate: {
                // POST /pack/xdsl/{packName}/resiliate
                $post(params: {resiliationDate?: string, resiliationSurvey: pack.xdsl.ResiliationSurvey, servicesToKeep?: number[]}): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            }
            resiliationFollowUp: {
                // GET /pack/xdsl/{packName}/resiliationFollowUp
                $get(): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            }
            resiliationTerms: {
                // GET /pack/xdsl/{packName}/resiliationTerms
                $get(params?: {resiliationDate?: string}): Promise<pack.xdsl.ResiliationTerms>;
            }
            serviceInfos: {
                // GET /pack/xdsl/{packName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /pack/xdsl/{packName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            services: {
                // GET /pack/xdsl/{packName}/services
                $get(): Promise<pack.xdsl.ServiceInformation[]>;
            }
            shippingAddresses: {
                // GET /pack/xdsl/{packName}/shippingAddresses
                $get(params: {context: pack.xdsl.ShippingAddressContextEnum}): Promise<pack.xdsl.ShippingAddress[]>;
            }
            siteBuilderFull: {
                options: {
                    domains: {
                        // GET /pack/xdsl/{packName}/siteBuilderFull/options/domains
                        $get(): Promise<pack.xdsl.SiteBuilderDomain[]>;
                    }
                    templates: {
                        // GET /pack/xdsl/{packName}/siteBuilderFull/options/templates
                        $get(): Promise<pack.xdsl.SiteBuilderTemplate[]>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/siteBuilderFull/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/siteBuilderFull/services
                    $post(params: {domain: string, subdomain: string, templateId: number}): Promise<pack.xdsl.Task>;
                }
            }
            siteBuilderStart: {
                options: {
                    domains: {
                        // GET /pack/xdsl/{packName}/siteBuilderStart/options/domains
                        $get(): Promise<pack.xdsl.SiteBuilderDomain[]>;
                    }
                    templates: {
                        // GET /pack/xdsl/{packName}/siteBuilderStart/options/templates
                        $get(): Promise<pack.xdsl.SiteBuilderTemplate[]>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/siteBuilderStart/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/siteBuilderStart/services
                    $post(params: {domain: string, subdomain: string, templateId: number}): Promise<pack.xdsl.Task>;
                }
            }
            subServices: {
                // GET /pack/xdsl/{packName}/subServices
                $get(): Promise<string[]>;
                $(domain: string): {
                    // GET /pack/xdsl/{packName}/subServices/{domain}
                    $get(): Promise<pack.xdsl.Service>;
                    keepServiceTerms: {
                        // GET /pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms
                        $get(): Promise<pack.xdsl.UnpackTerms>;
                    }
                };
            }
            tasks: {
                // GET /pack/xdsl/{packName}/tasks
                $get(params?: {function_?: string, status?: pack.xdsl.TaskStatusEnum}): Promise<number[]>;
                $(id: number): {
                    // GET /pack/xdsl/{packName}/tasks/{id}
                    $get(): Promise<pack.xdsl.Task>;
                };
            }
            voipBillingAccount: {
                services: {
                    // GET /pack/xdsl/{packName}/voipBillingAccount/services
                    $get(): Promise<string[]>;
                }
            }
            voipEcofax: {
                services: {
                    // GET /pack/xdsl/{packName}/voipEcofax/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/voipEcofax/services
                    $post(): Promise<pack.xdsl.Task>;
                }
            }
            voipLine: {
                options: {
                    customShippingAddress: {
                        // POST /pack/xdsl/{packName}/voipLine/options/customShippingAddress
                        $post(params: {address: string, cityName: string, firstName: string, lastName: string, zipCode: string}): Promise<number>;
                    }
                    hardwares: {
                        // GET /pack/xdsl/{packName}/voipLine/options/hardwares
                        $get(): Promise<pack.xdsl.VoIPHardware[]>;
                    }
                    shippingAddresses: {
                        // GET /pack/xdsl/{packName}/voipLine/options/shippingAddresses
                        $get(): Promise<pack.xdsl.ShippingAddress[]>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/voipLine/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/voipLine/services
                    $post(params: {hardwareNames: string[], mondialRelayId?: string, shippingId?: string}): Promise<pack.xdsl.VoIPLineOrder>;
                    $(domain: string): {
                        // GET /pack/xdsl/{packName}/voipLine/services/{domain}
                        $get(): Promise<pack.xdsl.VoipLineService>;
                    };
                }
            }
            xdslAccess: {
                services: {
                    // GET /pack/xdsl/{packName}/xdslAccess/services
                    $get(): Promise<string[]>;
                }
            }
        };
    }
// Api
  /**
   * Operations about the PACK service
   * List available services
   */
  get(path: '/pack/xdsl'): () => Promise<string[]>;
  /**
   * Pack of xDSL services
   * Get this object properties
   */
  get(path: '/pack/xdsl/{packName}'): (params: {packName: string}) => Promise<pack.xdsl.PackAdsl>;
  /**
   * canCancelResiliation operations
   * Check if the resiliation can be cancelled
   */
  get(path: '/pack/xdsl/{packName}/canCancelResiliation'): (params: {packName: string}) => Promise<boolean>;
  /**
   * tlds operations
   * Get the available tlds for domain order
   */
  get(path: '/pack/xdsl/{packName}/domain/options/tlds'): (params: {packName: string}) => Promise<string[]>;
  /**
   * List the pack.xdsl.DomainService objects
   * Domain services
   */
  get(path: '/pack/xdsl/{packName}/domain/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * domains operations
   * List the available domains for the Email Pro service
   */
  get(path: '/pack/xdsl/{packName}/emailPro/options/domains'): (params: {packName: string}) => Promise<string[]>;
  /**
   * isEmailAvailable operations
   * Check if the given email address is available for an Email Pro activation
   */
  get(path: '/pack/xdsl/{packName}/emailPro/options/isEmailAvailable'): (params: {packName: string, email: string}) => Promise<boolean>;
  /**
   * List the pack.xdsl.EmailProService objects
   * List the Email Pro services
   */
  get(path: '/pack/xdsl/{packName}/emailPro/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * List the pack.xdsl.ExchangeAccountService objects
   * Exchange 2013 services
   */
  get(path: '/pack/xdsl/{packName}/exchangeAccount/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * Exchange 2013 service
   * Get this object properties
   */
  get(path: '/pack/xdsl/{packName}/exchangeAccount/services/{domain}'): (params: {domain: string, packName: string}) => Promise<pack.xdsl.ExchangeAccountService>;
  /**
   * domains operations
   * Get the available domains
   */
  get(path: '/pack/xdsl/{packName}/exchangeIndividual/options/domains'): (params: {packName: string}) => Promise<string[]>;
  /**
   * isEmailAvailable operations
   * Check if the email address is available for service creation
   */
  get(path: '/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable'): (params: {packName: string, email: string}) => Promise<boolean>;
  /**
   * List the pack.xdsl.ExchangeIndividual objects
   * Exchange services
   */
  get(path: '/pack/xdsl/{packName}/exchangeIndividual/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * isEmailAvailable operations
   * Check if the email address is available for service creation
   */
  get(path: '/pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable'): (params: {packName: string, email: string}) => Promise<boolean>;
  /**
   * List the pack.xdsl.ExchangeLiteService objects
   * Exchange lite services
   */
  get(path: '/pack/xdsl/{packName}/exchangeLite/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * Exchange account service
   * Get this object properties
   */
  get(path: '/pack/xdsl/{packName}/exchangeLite/services/{domain}'): (params: {domain: string, packName: string}) => Promise<pack.xdsl.ExchangeLiteService>;
  /**
   * List the pack.xdsl.ExchangeOrganizationService objects
   * Exchange 2013 organization services
   */
  get(path: '/pack/xdsl/{packName}/exchangeOrganization/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * domains operations
   * Get the hostedemail available domains
   */
  get(path: '/pack/xdsl/{packName}/hostedEmail/options/domains'): (params: {packName: string}) => Promise<string[]>;
  /**
   * List the pack.xdsl.HostedEmailService objects
   * Hosted email services
   */
  get(path: '/pack/xdsl/{packName}/hostedEmail/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * List the pack.xdsl.Hubic objects
   * Hubic perso services
   */
  get(path: '/pack/xdsl/{packName}/hubic/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * Hubic service
   * Get this object properties
   */
  get(path: '/pack/xdsl/{packName}/hubic/services/{domain}'): (params: {domain: string, packName: string}) => Promise<pack.xdsl.Hubic>;
  /**
   * details operations
   * Details associated to a voucher
   */
  get(path: '/pack/xdsl/{packName}/hubic/services/{domain}/details'): (params: {domain: string, packName: string}) => Promise<pack.xdsl.AsyncTask<xdsl.hubic.HubicDetailsResponse>>;
  /**
   * capabilities operations
   * Get informations about the promotion code generation
   */
  get(path: '/pack/xdsl/{packName}/promotionCode/capabilities'): (params: {packName: string}) => Promise<pack.xdsl.promotionCode.Capabilities>;
  /**
   * resiliationFollowUp operations
   * Get information about the ongoing resiliation
   */
  get(path: '/pack/xdsl/{packName}/resiliationFollowUp'): (params: {packName: string}) => Promise<pack.xdsl.ResiliationFollowUpDetail>;
  /**
   * resiliationTerms operations
   * Get resiliation terms
   */
  get(path: '/pack/xdsl/{packName}/resiliationTerms'): (params: {packName: string, resiliationDate?: string}) => Promise<pack.xdsl.ResiliationTerms>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/pack/xdsl/{packName}/serviceInfos'): (params: {packName: string}) => Promise<services.Service>;
  /**
   * services operations
   * Informations about the services included in the pack
   */
  get(path: '/pack/xdsl/{packName}/services'): (params: {packName: string}) => Promise<pack.xdsl.ServiceInformation[]>;
  /**
   * shippingAddresses operations
   * Allowed shipping addresses given a context
   */
  get(path: '/pack/xdsl/{packName}/shippingAddresses'): (params: {packName: string, context: pack.xdsl.ShippingAddressContextEnum}) => Promise<pack.xdsl.ShippingAddress[]>;
  /**
   * domains operations
   * Get the available domains
   */
  get(path: '/pack/xdsl/{packName}/siteBuilderFull/options/domains'): (params: {packName: string}) => Promise<pack.xdsl.SiteBuilderDomain[]>;
  /**
   * templates operations
   * Get the available templates
   */
  get(path: '/pack/xdsl/{packName}/siteBuilderFull/options/templates'): (params: {packName: string}) => Promise<pack.xdsl.SiteBuilderTemplate[]>;
  /**
   * List the pack.xdsl.SiteBuilderFullService objects
   * Sitebuilder full services
   */
  get(path: '/pack/xdsl/{packName}/siteBuilderFull/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * domains operations
   * Get the available domains
   */
  get(path: '/pack/xdsl/{packName}/siteBuilderStart/options/domains'): (params: {packName: string}) => Promise<pack.xdsl.SiteBuilderDomain[]>;
  /**
   * templates operations
   * Get the available templates
   */
  get(path: '/pack/xdsl/{packName}/siteBuilderStart/options/templates'): (params: {packName: string}) => Promise<pack.xdsl.SiteBuilderTemplate[]>;
  /**
   * List the pack.xdsl.SiteBuilderStartService objects
   * Sitebuilder start services
   */
  get(path: '/pack/xdsl/{packName}/siteBuilderStart/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * List the pack.xdsl.Service objects
   * List services contained in the pack
   */
  get(path: '/pack/xdsl/{packName}/subServices'): (params: {packName: string}) => Promise<string[]>;
  /**
   * Service link to the pack
   * Get this object properties
   */
  get(path: '/pack/xdsl/{packName}/subServices/{domain}'): (params: {domain: string, packName: string}) => Promise<pack.xdsl.Service>;
  /**
   * keepServiceTerms operations
   * Give the condition to unpack service from pack
   */
  get(path: '/pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms'): (params: {domain: string, packName: string}) => Promise<pack.xdsl.UnpackTerms>;
  /**
   * List the pack.xdsl.Task objects
   * Tasks scheduled for this pack
   */
  get(path: '/pack/xdsl/{packName}/tasks'): (params: {packName: string, function_?: string, status?: pack.xdsl.TaskStatusEnum}) => Promise<number[]>;
  /**
   * Describes the current status of a task
   * Get this object properties
   */
  get(path: '/pack/xdsl/{packName}/tasks/{id}'): (params: {id: number, packName: string}) => Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.BillingAccountService objects
   * VOIP billing accounts
   */
  get(path: '/pack/xdsl/{packName}/voipBillingAccount/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * List the pack.xdsl.VoipEcoFaxService objects
   * VOIP ecofax service
   */
  get(path: '/pack/xdsl/{packName}/voipEcofax/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * hardwares operations
   * Get available hardwares
   */
  get(path: '/pack/xdsl/{packName}/voipLine/options/hardwares'): (params: {packName: string}) => Promise<pack.xdsl.VoIPHardware[]>;
  /**
   * shippingAddresses operations
   * Get available shipping addresses
   */
  get(path: '/pack/xdsl/{packName}/voipLine/options/shippingAddresses'): (params: {packName: string}) => Promise<pack.xdsl.ShippingAddress[]>;
  /**
   * List the pack.xdsl.VoipLineService objects
   * VOIP line services
   */
  get(path: '/pack/xdsl/{packName}/voipLine/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * VOIP line services
   * Get this object properties
   */
  get(path: '/pack/xdsl/{packName}/voipLine/services/{domain}'): (params: {domain: string, packName: string}) => Promise<pack.xdsl.VoipLineService>;
  /**
   * List the pack.xdsl.XdslAccessService objects
   * xDSL access services
   */
  get(path: '/pack/xdsl/{packName}/xdslAccess/services'): (params: {packName: string}) => Promise<string[]>;
  /**
   * Pack of xDSL services
   * Alter this object properties
   */
  put(path: '/pack/xdsl/{packName}'): (params: {packName: string, capabilities?: pack.xdsl.PackCapabilities, description?: string, offerDescription?: string, offerPrice?: order.Price}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/pack/xdsl/{packName}/serviceInfos'): (params: {packName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * eligibility operations
   * Eligibility to move the access
   */
  post(path: '/pack/xdsl/{packName}/addressMove/eligibility'): (params: {packName: string, address?: xdsleligibilityAddress, lineNumber?: string}) => Promise<pack.xdsl.AsyncTask<pack.xdsl.addressMove.Eligibility>>;
  /**
   * move operations
   * Move the Xdsl access to another address
   */
  post(path: '/pack/xdsl/{packName}/addressMove/move'): (params: {packName: string, creation?: pack.xdsl.addressMove.Creation, keepCurrentNumber: boolean, landline?: pack.xdsl.addressMove.Landline, moveOutDate?: string, offerCode: string, provider?: xdsleligibilityProviderEnum}) => Promise<pack.xdsl.AsyncTask<number>>;
  /**
   * moveFtth operations
   * Move the FTTH access to another address
   */
  post(path: '/pack/xdsl/{packName}/addressMove/moveFtth'): (params: {packName: string, buildingReference: string, floor: string, moveOutDate?: string, otp: boolean, otpReference?: string, stair: string}) => Promise<pack.xdsl.AsyncTask<number>>;
  /**
   * moveOffer operations
   * Move the access to another address
   */
  post(path: '/pack/xdsl/{packName}/addressMove/moveOffer'): (params: {packName: string, acceptContracts: boolean, buildingReference: string, eligibilityReference: string, engageMonths?: number, floor: string, keepCurrentNumber: boolean, mondialRelayId?: number, moveOutDate?: string, nicShipping?: string, offerName: string, options?: pack.xdsl.migration.OfferOption[], otp: boolean, otpReference?: string, productCode: string, stair: string, subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[]}) => Promise<pack.xdsl.AsyncTask<number>>;
  /**
   * offers operations
   * Get the possibilities of address move offers available
   */
  post(path: '/pack/xdsl/{packName}/addressMove/offers'): (params: {packName: string, eligibilityReference: string}) => Promise<pack.xdsl.AsyncTask<pack.xdsl.addressMove.MoveOfferResponse>>;
  /**
   * cancelResiliation operations
   * Cancel the ongoing resiliation
   */
  post(path: '/pack/xdsl/{packName}/cancelResiliation'): (params: {packName: string}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/pack/xdsl/{packName}/changeContact'): (params: {packName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * List the pack.xdsl.DomainService objects
   * Activate a domain service
   */
  post(path: '/pack/xdsl/{packName}/domain/services'): (params: {packName: string, action: pack.xdsl.DomainActionEnum, authInfo?: string, domain: string, tld: string}) => Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.EmailProService objects
   * Activate an Email Pro service
   */
  post(path: '/pack/xdsl/{packName}/emailPro/services'): (params: {packName: string, email: string, password: string}) => Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.ExchangeIndividual objects
   * Activate an exchange service
   */
  post(path: '/pack/xdsl/{packName}/exchangeIndividual/services'): (params: {packName: string, email: string, password: string}) => Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.ExchangeLiteService objects
   * Activate a exchange lite service
   */
  post(path: '/pack/xdsl/{packName}/exchangeLite/services'): (params: {packName: string, antispam?: boolean, displayName?: string, email: string, firstName?: string, initials?: string, lastName?: string, password: string}) => Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.HostedEmailService objects
   * Activate an hosted email service
   */
  post(path: '/pack/xdsl/{packName}/hostedEmail/services'): (params: {packName: string, email: string, password: string}) => Promise<pack.xdsl.Task>;
  /**
   * migrate operations
   * Migrate to the selected offer
   */
  post(path: '/pack/xdsl/{packName}/migration/migrate'): (params: {packName: string, acceptContracts: boolean, buildingReference?: string, engageMonths?: number, floor?: string, mondialRelayId?: number, nicShipping?: string, offerName: string, options?: pack.xdsl.migration.OfferOption[], otp?: boolean, otpReference?: string, stair?: string, subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[]}) => Promise<pack.xdsl.Task>;
  /**
   * offers operations
   * Get the possibilities of migration offers available
   */
  post(path: '/pack/xdsl/{packName}/migration/offers'): (params: {packName: string}) => Promise<pack.xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>>;
  /**
   * servicesToDelete operations
   * Calculate services to delete with new offer and options
   */
  post(path: '/pack/xdsl/{packName}/migration/servicesToDelete'): (params: {packName: string, offerName: string, options?: pack.xdsl.migration.OfferOption[]}) => Promise<pack.xdsl.migration.SubServiceToDelete[]>;
  /**
   * generate operations
   * Creates a task to generate a new promotion code
   */
  post(path: '/pack/xdsl/{packName}/promotionCode/generate'): (params: {packName: string}) => Promise<pack.xdsl.Task>;
  /**
   * resiliate operations
   * Resiliate the pack
   */
  post(path: '/pack/xdsl/{packName}/resiliate'): (params: {packName: string, resiliationDate?: string, resiliationSurvey: pack.xdsl.ResiliationSurvey, servicesToKeep?: number[]}) => Promise<pack.xdsl.ResiliationFollowUpDetail>;
  /**
   * List the pack.xdsl.SiteBuilderFullService objects
   * Activate a sitebuilder full service
   */
  post(path: '/pack/xdsl/{packName}/siteBuilderFull/services'): (params: {packName: string, domain: string, subdomain: string, templateId: number}) => Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.SiteBuilderStartService objects
   * Activate a sitebuilder full service
   */
  post(path: '/pack/xdsl/{packName}/siteBuilderStart/services'): (params: {packName: string, domain: string, subdomain: string, templateId: number}) => Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.VoipEcoFaxService objects
   * Activate a voicefax service
   */
  post(path: '/pack/xdsl/{packName}/voipEcofax/services'): (params: {packName: string}) => Promise<pack.xdsl.Task>;
  /**
   * customShippingAddress operations
   * Create a new shippingId to be used for voipLine service creation
   */
  post(path: '/pack/xdsl/{packName}/voipLine/options/customShippingAddress'): (params: {packName: string, address: string, cityName: string, firstName: string, lastName: string, zipCode: string}) => Promise<number>;
  /**
   * List the pack.xdsl.VoipLineService objects
   * Activate a voip line service
   */
  post(path: '/pack/xdsl/{packName}/voipLine/services'): (params: {packName: string, hardwareNames: string[], mondialRelayId?: string, shippingId?: string}) => Promise<pack.xdsl.VoIPLineOrder>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type xdslDslTypeEnum = xdsl.DslTypeEnum;
type xdsleligibilityAddress = xdsl.eligibility.Address;
type xdsleligibilityBookMeetingSlot = xdsl.eligibility.BookMeetingSlot;
type xdsleligibilityPortability = xdsl.eligibility.Portability;
type xdsleligibilityLandlineStatusEnum = xdsl.eligibility.LandlineStatusEnum;
type xdslDeconsolidationEnum = xdsl.DeconsolidationEnum;
type xdslLineSectionLength = xdsl.LineSectionLength;
type xdsleligibilityMeetingSlots = xdsl.eligibility.MeetingSlots;
type xdsleligibilityProviderEnum = xdsl.eligibility.ProviderEnum;

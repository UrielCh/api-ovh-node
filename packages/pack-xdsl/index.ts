import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /pack/xdsl Models
 */
export namespace connectivity {
    export namespace eligibility {
        //connectivity.eligibility.Building
        // fullName: connectivity.eligibility.Building.Building
        export interface Building {
            name: string;
            nro?: string;
            reference: string;
            stairs: connectivity.eligibility.BuildingStair[];
            type: connectivity.eligibility.BuildingTypeEnum;
        }
        //connectivity.eligibility.BuildingStair
        // fullName: connectivity.eligibility.BuildingStair.BuildingStair
        export interface BuildingStair {
            floors: string[];
            stair: string;
        }
        //connectivity.eligibility.BuildingTypeEnum
        export type BuildingTypeEnum = "BUILDING" | "HOUSE"
    }
}
export namespace order {
    //order.Contract
    // fullName: order.Contract.Contract
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
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
export namespace pack {
    export namespace xdsl {
        //pack.xdsl.AsyncTask
        // fullName: pack.xdsl.AsyncTask.AsyncTask
        export interface AsyncTask<T> {
            error?: string;
            result?: T;
            status: pack.xdsl.AsyncTaskStatusEnum;
        }
        //pack.xdsl.AsyncTaskStatusEnum
        export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
        //pack.xdsl.DomainActionEnum
        export type DomainActionEnum = "create" | "trade" | "transfer"
        //pack.xdsl.ExchangeAccountService
        // fullName: pack.xdsl.ExchangeAccountService.ExchangeAccountService
        export interface ExchangeAccountService {
            domain: string;
            exchangeService: string;
            organizationName: string;
        }
        //pack.xdsl.ExchangeLiteService
        // fullName: pack.xdsl.ExchangeLiteService.ExchangeLiteService
        export interface ExchangeLiteService {
            domain: string;
        }
        //pack.xdsl.Hubic
        // fullName: pack.xdsl.Hubic.Hubic
        export interface Hubic {
            bytes: number;
            domain: string;
            isUsed: boolean;
            size: string;
            voucher?: string;
        }
        //pack.xdsl.PackAdsl
        // fullName: pack.xdsl.PackAdsl.PackAdsl
        export interface PackAdsl {
            capabilities: pack.xdsl.PackCapabilities;
            description?: string;
            offerDescription: string;
            offerPrice: orderPrice;
            packName: string;
        }
        //pack.xdsl.PackCapabilities
        // fullName: pack.xdsl.PackCapabilities.PackCapabilities
        export interface PackCapabilities {
            canMoveAddress: boolean;
            isLegacyOffer: boolean;
        }
        //pack.xdsl.PackDetail
        // fullName: pack.xdsl.PackDetail.PackDetail
        export interface PackDetail {
            accessname: string;
            description: string;
            number: string;
            packname: string;
            type: xdslDslTypeEnum;
        }
        //pack.xdsl.ResiliationFollowUpDetail
        // fullName: pack.xdsl.ResiliationFollowUpDetail.ResiliationFollowUpDetail
        export interface ResiliationFollowUpDetail {
            dateTodo: string;
            needModemReturn: boolean;
            registrationDate: string;
            status: string;
        }
        //pack.xdsl.ResiliationReasonEnum
        export type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "ftth" | "goToCompetitor" | "other" | "technicalProblems"
        //pack.xdsl.ResiliationSurvey
        // fullName: pack.xdsl.ResiliationSurvey.ResiliationSurvey
        export interface ResiliationSurvey {
            comment?: string;
            type: pack.xdsl.ResiliationReasonEnum;
        }
        //pack.xdsl.ResiliationTerms
        // fullName: pack.xdsl.ResiliationTerms.ResiliationTerms
        export interface ResiliationTerms {
            due: orderPrice;
            engageDate?: string;
            minResiliationDate: string;
            resiliationDate: string;
            resiliationReasons: pack.xdsl.ResiliationReasonEnum[];
        }
        //pack.xdsl.Service
        // fullName: pack.xdsl.Service.Service
        export interface Service {
            domain: string;
            id: number;
            type: pack.xdsl.ServiceNameEnum;
        }
        //pack.xdsl.ServiceInformation
        // fullName: pack.xdsl.ServiceInformation.ServiceInformation
        export interface ServiceInformation {
            inCreation: number;
            name: pack.xdsl.ServiceNameEnum;
            total: number;
            used: number;
        }
        //pack.xdsl.ServiceNameEnum
        export type ServiceNameEnum = "domain" | "emailPro" | "exchangeAccount" | "exchangeIndividual" | "exchangeLite" | "exchangeOrganization" | "hostedEmail" | "hubic" | "modem" | "overTheBoxHardware" | "overTheBoxService" | "siteBuilderFull" | "siteBuilderStart" | "voipAlias" | "voipBillingAccount" | "voipEcoFax" | "voipLine" | "xdslAccess"
        //pack.xdsl.ShippingAddress
        // fullName: pack.xdsl.ShippingAddress.ShippingAddress
        export interface ShippingAddress {
            address: string;
            cityName: string;
            countryCode: string;
            firstName: string;
            lastName: string;
            shippingId: string;
            zipCode: string;
        }
        //pack.xdsl.ShippingAddressContextEnum
        export type ShippingAddressContextEnum = "migration" | "voipLine"
        //pack.xdsl.SiteBuilderDomain
        // fullName: pack.xdsl.SiteBuilderDomain.SiteBuilderDomain
        export interface SiteBuilderDomain {
            defaultSubDomain: string;
            domain: string;
        }
        //pack.xdsl.SiteBuilderTemplate
        // fullName: pack.xdsl.SiteBuilderTemplate.SiteBuilderTemplate
        export interface SiteBuilderTemplate {
            bkId: number;
            id: number;
            name: string;
            previewImg: string;
            reference: string;
            thumbImage: string;
        }
        //pack.xdsl.Task
        // fullName: pack.xdsl.Task.Task
        export interface Task {
            function: string;
            id: number;
            status: pack.xdsl.TaskStatusEnum;
            updateDate: string;
        }
        //pack.xdsl.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
        //pack.xdsl.UnpackTerms
        // fullName: pack.xdsl.UnpackTerms.UnpackTerms
        export interface UnpackTerms {
            isAllowed: boolean;
            price: orderPrice;
            renewPeriod: number;
            renewPrice: orderPrice;
        }
        //pack.xdsl.VoIPHardware
        // fullName: pack.xdsl.VoIPHardware.VoIPHardware
        export interface VoIPHardware {
            deposit?: orderPrice;
            image?: string;
            label: string;
            max?: number;
            name: string;
            needShipping: boolean;
            url?: string;
        }
        //pack.xdsl.VoIPLineOrder
        // fullName: pack.xdsl.VoIPLineOrder.VoIPLineOrder
        export interface VoIPLineOrder {
            needPayment: boolean;
            orderId: number;
            orderUrl: string;
            taskIds: number[];
        }
        //pack.xdsl.VoipLineService
        // fullName: pack.xdsl.VoipLineService.VoipLineService
        export interface VoipLineService {
            billingAccount: string;
            domain: string;
        }
        export namespace addressMove {
            //pack.xdsl.addressMove.Creation
            // fullName: pack.xdsl.addressMove.Creation.Creation
            export interface Creation {
                address: xdsleligibilityAddress;
                meeting: xdsleligibilityBookMeetingSlot;
            }
            //pack.xdsl.addressMove.Eligibility
            // fullName: pack.xdsl.addressMove.Eligibility.Eligibility
            export interface Eligibility {
                keepCurrentPortability?: xdsleligibilityPortability;
                offers: pack.xdsl.addressMove.Offer[];
            }
            //pack.xdsl.addressMove.Landline
            // fullName: pack.xdsl.addressMove.Landline.Landline
            export interface Landline {
                lineNumber: string;
                portLineNumber: boolean;
                rio?: string;
                status: xdsleligibilityLandlineStatusEnum;
                unbundling: xdslDeconsolidationEnum;
            }
            //pack.xdsl.addressMove.Offer
            // fullName: pack.xdsl.addressMove.Offer.Offer
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
                price: orderPrice;
                provider: xdsleligibilityProviderEnum;
                reseller: boolean;
                syncDownload: number;
                syncUpload: number;
                type: xdslDslTypeEnum;
                unbundling: xdslDeconsolidationEnum;
            }
        }
        export namespace migration {
            //pack.xdsl.migration.MigrationOffer
            // fullName: pack.xdsl.migration.MigrationOffer.MigrationOffer
            export interface MigrationOffer {
                contractList: string[];
                contracts: order.Contract[];
                currentOfferPrice: orderPrice;
                description: string;
                due?: orderPrice;
                engageMonths?: number;
                engagementMonths: number[];
                firstYearPromo?: orderPrice;
                installFees?: orderPrice;
                modemMacToReturn?: string;
                modemRental?: orderPrice;
                needModem: boolean;
                needNewModem: boolean;
                offerName: string;
                options: pack.xdsl.migration.OfferAvailableOption[];
                price: orderPrice;
                subServicesToDelete: pack.xdsl.migration.SubServiceToDelete[];
                url: string;
            }
            //pack.xdsl.migration.MigrationOfferResponse
            // fullName: pack.xdsl.migration.MigrationOfferResponse.MigrationOfferResponse
            export interface MigrationOfferResponse {
                buildings: connectivity.eligibility.Building[];
                offers: pack.xdsl.migration.MigrationOffer[];
            }
            //pack.xdsl.migration.OfferAvailableOption
            // fullName: pack.xdsl.migration.OfferAvailableOption.OfferAvailableOption
            export interface OfferAvailableOption {
                duration: number;
                included: number;
                name: string;
                optional: number;
                optionalPrice?: orderPrice;
            }
            //pack.xdsl.migration.OfferOption
            // fullName: pack.xdsl.migration.OfferOption.OfferOption
            export interface OfferOption {
                name: string;
                quantity: number;
            }
            //pack.xdsl.migration.OfferServiceToDelete
            // fullName: pack.xdsl.migration.OfferServiceToDelete.OfferServiceToDelete
            export interface OfferServiceToDelete {
                service: string;
                type: pack.xdsl.ServiceNameEnum;
            }
            //pack.xdsl.migration.SubServiceToDelete
            // fullName: pack.xdsl.migration.SubServiceToDelete.SubServiceToDelete
            export interface SubServiceToDelete {
                numberToDelete: number;
                services: string[];
                type: pack.xdsl.ServiceNameEnum;
            }
        }
        export namespace promotionCode {
            //pack.xdsl.promotionCode.Capabilities
            // fullName: pack.xdsl.promotionCode.Capabilities.Capabilities
            export interface Capabilities {
                amount: orderPrice;
                canGenerate: boolean;
                engagement: number;
                reasonCodes: pack.xdsl.promotionCode.ReasonCodes[];
            }
            //pack.xdsl.promotionCode.ReasonCodes
            export type ReasonCodes = "noMoreAvailable" | "offerNotCompatible" | "serviceNotInOkState" | "stillEngaged" | "taskInProgress"
        }
    }
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
export namespace xdsl {
    //xdsl.DeconsolidationEnum
    export type DeconsolidationEnum = "createNeighbour" | "creation" | "creationNeighbour" | "partial" | "total"
    //xdsl.DslTypeEnum
    export type DslTypeEnum = "adsl" | "ftth" | "sdsl" | "vdsl"
    //xdsl.LineSectionLength
    // fullName: xdsl.LineSectionLength.LineSectionLength
    export interface LineSectionLength {
        diameter: number;
        length: number;
    }
    export namespace eligibility {
        //xdsl.eligibility.Address
        // fullName: xdsl.eligibility.Address.Address
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
        //xdsl.eligibility.BookMeetingSlot
        // fullName: xdsl.eligibility.BookMeetingSlot.BookMeetingSlot
        export interface BookMeetingSlot {
            fakeMeeting: boolean;
            meetingSlot?: xdsl.eligibility.MeetingSlot;
            name: string;
        }
        //xdsl.eligibility.City
        // fullName: xdsl.eligibility.City.City
        export interface City {
            inseeCode: string;
            locality?: string;
            name: string;
            zipCode: string;
        }
        //xdsl.eligibility.CodeAndMessage
        // fullName: xdsl.eligibility.CodeAndMessage.CodeAndMessage
        export interface CodeAndMessage {
            code: string;
            message: string;
        }
        //xdsl.eligibility.LandlineStatusEnum
        export type LandlineStatusEnum = "active" | "inactive"
        //xdsl.eligibility.MeetingSlot
        // fullName: xdsl.eligibility.MeetingSlot.MeetingSlot
        export interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        //xdsl.eligibility.MeetingSlots
        // fullName: xdsl.eligibility.MeetingSlots.MeetingSlots
        export interface MeetingSlots {
            canBookFakeMeeting: boolean;
            meetingSlots: xdsl.eligibility.MeetingSlot[];
        }
        //xdsl.eligibility.Portability
        // fullName: xdsl.eligibility.Portability.Portability
        export interface Portability {
            comments: xdsl.eligibility.CodeAndMessage[];
            eligible: boolean;
            underCondition: boolean;
            warnings: xdsl.eligibility.CodeAndMessage[];
        }
        //xdsl.eligibility.ProviderEnum
        export type ProviderEnum = "axione" | "ft" | "kosc" | "ovh" | "sfr"
        //xdsl.eligibility.Street
        // fullName: xdsl.eligibility.Street.Street
        export interface Street {
            name: string;
            rivoliCode: string;
        }
    }
    export namespace hubic {
        //xdsl.hubic.HubicDetailsResponse
        // fullName: xdsl.hubic.HubicDetailsResponse.HubicDetailsResponse
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
            $put(body?: {body: pack.xdsl.PackAdsl}): Promise<void>;
            addressMove: {
                eligibility: {
                    // POST /pack/xdsl/{packName}/addressMove/eligibility
                    $post(body?: {address?: xdsl.eligibility.Address, lineNumber?: string}): Promise<pack.xdsl.AsyncTask<pack.xdsl.addressMove.Eligibility>>;
                }
                move: {
                    // POST /pack/xdsl/{packName}/addressMove/move
                    $post(body?: {creation?: pack.xdsl.addressMove.Creation, keepCurrentNumber: boolean, landline?: pack.xdsl.addressMove.Landline, moveOutDate?: string, offerCode: string, provider?: xdsl.eligibility.ProviderEnum}): Promise<pack.xdsl.AsyncTask<number>>;
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
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
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
                    $post(body?: {action: pack.xdsl.DomainActionEnum, authInfo?: string, domain: string, tld: string}): Promise<pack.xdsl.Task>;
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
                        $get(param?: {email: string}): Promise<boolean>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/emailPro/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/emailPro/services
                    $post(body?: {email: string, password: string}): Promise<pack.xdsl.Task>;
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
                        $get(param?: {email: string}): Promise<boolean>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/exchangeIndividual/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/exchangeIndividual/services
                    $post(body?: {email: string, password: string}): Promise<pack.xdsl.Task>;
                }
            }
            exchangeLite: {
                options: {
                    isEmailAvailable: {
                        // GET /pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable
                        $get(param?: {email: string}): Promise<boolean>;
                    }
                }
                services: {
                    // GET /pack/xdsl/{packName}/exchangeLite/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/exchangeLite/services
                    $post(body?: {antispam?: boolean, displayName?: string, email: string, firstName?: string, initials?: string, lastName?: string, password: string}): Promise<pack.xdsl.Task>;
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
                    $post(body?: {email: string, password: string}): Promise<pack.xdsl.Task>;
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
                    $post(body?: {acceptContracts: boolean, buildingReference?: string, engageMonths?: number, floor?: string, mondialRelayId?: number, nicShipping?: string, offerName: string, options?: pack.xdsl.migration.OfferOption[], otp?: boolean, otpReference?: string, stair?: string, subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[]}): Promise<pack.xdsl.Task>;
                }
                offers: {
                    // POST /pack/xdsl/{packName}/migration/offers
                    $post(): Promise<pack.xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>>;
                }
                servicesToDelete: {
                    // POST /pack/xdsl/{packName}/migration/servicesToDelete
                    $post(body?: {offerName: string, options?: pack.xdsl.migration.OfferOption[]}): Promise<pack.xdsl.migration.SubServiceToDelete[]>;
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
                $post(body?: {resiliationDate?: string, resiliationSurvey: pack.xdsl.ResiliationSurvey, servicesToKeep?: number[]}): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            }
            resiliationFollowUp: {
                // GET /pack/xdsl/{packName}/resiliationFollowUp
                $get(): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            }
            resiliationTerms: {
                // GET /pack/xdsl/{packName}/resiliationTerms
                $get(param?: {resiliationDate?: string}): Promise<pack.xdsl.ResiliationTerms>;
            }
            serviceInfos: {
                // GET /pack/xdsl/{packName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /pack/xdsl/{packName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            services: {
                // GET /pack/xdsl/{packName}/services
                $get(): Promise<pack.xdsl.ServiceInformation[]>;
            }
            shippingAddresses: {
                // GET /pack/xdsl/{packName}/shippingAddresses
                $get(param?: {context: pack.xdsl.ShippingAddressContextEnum}): Promise<pack.xdsl.ShippingAddress[]>;
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
                    $post(body?: {domain: string, subdomain: string, templateId: number}): Promise<pack.xdsl.Task>;
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
                    $post(body?: {domain: string, subdomain: string, templateId: number}): Promise<pack.xdsl.Task>;
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
                $get(param?: {function_?: string, status?: pack.xdsl.TaskStatusEnum}): Promise<number[]>;
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
                        $post(body?: {address: string, cityName: string, firstName: string, lastName: string, zipCode: string}): Promise<number>;
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
                    $post(body?: {hardwareNames: string[], mondialRelayId?: string, shippingId?: string}): Promise<pack.xdsl.VoIPLineOrder>;
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
  put(path: '/pack/xdsl/{packName}'): (params: {packName: string, capabilities?: pack.xdsl.PackCapabilities, description?: string, offerDescription?: string, offerPrice?: orderPrice}) => Promise<void>;
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
   * Move the access to another address
   */
  post(path: '/pack/xdsl/{packName}/addressMove/move'): (params: {packName: string, creation?: pack.xdsl.addressMove.Creation, keepCurrentNumber: boolean, landline?: pack.xdsl.addressMove.Landline, moveOutDate?: string, offerCode: string, provider?: xdsleligibilityProviderEnum}) => Promise<pack.xdsl.AsyncTask<number>>;
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
 * classic Model
 */type orderPrice = order.Price;
type xdslDslTypeEnum = xdsl.DslTypeEnum;
type xdsleligibilityAddress = xdsl.eligibility.Address;
type xdsleligibilityBookMeetingSlot = xdsl.eligibility.BookMeetingSlot;
type xdsleligibilityPortability = xdsl.eligibility.Portability;
type xdsleligibilityLandlineStatusEnum = xdsl.eligibility.LandlineStatusEnum;
type xdslDeconsolidationEnum = xdsl.DeconsolidationEnum;
type xdslLineSectionLength = xdsl.LineSectionLength;
type xdsleligibilityMeetingSlots = xdsl.eligibility.MeetingSlots;
type xdsleligibilityProviderEnum = xdsl.eligibility.ProviderEnum;

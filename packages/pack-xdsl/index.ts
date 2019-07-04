import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace connectivity {
    export namespace eligibility {
        //connectivity.eligibility.Building
        // fullName: connectivity.eligibility.Building.Building
        export interface Building {
            name?: string;
            nro?: string;
            reference?: string;
            stairs?: OVH.connectivity.eligibility.BuildingStair[];
            type?: OVH.connectivity.eligibility.BuildingTypeEnum;
        }
        //connectivity.eligibility.BuildingStair
        // fullName: connectivity.eligibility.BuildingStair.BuildingStair
        export interface BuildingStair {
            floors?: string[];
            stair?: string;
        }
        //connectivity.eligibility.BuildingTypeEnum
        export type BuildingTypeEnum = "BUILDING" | "HOUSE"
    }
}
export namespace order {
    //order.Contract
    // fullName: order.Contract.Contract
    export interface Contract {
        content?: string;
        name?: string;
        url?: string;
    }
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
export namespace pack {
    export namespace xdsl {
        //pack.xdsl.DomainActionEnum
        export type DomainActionEnum = "create" | "trade" | "transfer"
        //pack.xdsl.ExchangeAccountService
        // fullName: pack.xdsl.ExchangeAccountService.ExchangeAccountService
        export interface ExchangeAccountService {
            domain?: string;
            exchangeService?: string;
            organizationName?: string;
        }
        //pack.xdsl.ExchangeLiteService
        // fullName: pack.xdsl.ExchangeLiteService.ExchangeLiteService
        export interface ExchangeLiteService {
            domain?: string;
        }
        //pack.xdsl.Hubic
        // fullName: pack.xdsl.Hubic.Hubic
        export interface Hubic {
            bytes?: number;
            domain?: string;
            isUsed?: boolean;
            size?: string;
            voucher?: string;
        }
        //pack.xdsl.PackAdsl
        // fullName: pack.xdsl.PackAdsl.PackAdsl
        export interface PackAdsl {
            capabilities?: OVH.pack.xdsl.PackCapabilities;
            description?: string;
            offerDescription?: string;
            offerPrice?: OVH.order.Price;
            packName?: string;
        }
        //pack.xdsl.PackCapabilities
        // fullName: pack.xdsl.PackCapabilities.PackCapabilities
        export interface PackCapabilities {
            canMoveAddress?: boolean;
            isLegacyOffer?: boolean;
        }
        //pack.xdsl.PackDetail
        // fullName: pack.xdsl.PackDetail.PackDetail
        export interface PackDetail {
            accessname?: string;
            description?: string;
            number?: string;
            packname?: string;
            type?: OVH.xdsl.DslTypeEnum;
        }
        //pack.xdsl.ResiliationFollowUpDetail
        // fullName: pack.xdsl.ResiliationFollowUpDetail.ResiliationFollowUpDetail
        export interface ResiliationFollowUpDetail {
            dateTodo?: string;
            needModemReturn?: boolean;
            registrationDate?: string;
            status?: string;
        }
        //pack.xdsl.ResiliationReasonEnum
        export type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "ftth" | "goToCompetitor" | "other" | "technicalProblems"
        //pack.xdsl.ResiliationSurvey
        // fullName: pack.xdsl.ResiliationSurvey.ResiliationSurvey
        export interface ResiliationSurvey {
            comment?: string;
            type?: OVH.pack.xdsl.ResiliationReasonEnum;
        }
        //pack.xdsl.ResiliationTerms
        // fullName: pack.xdsl.ResiliationTerms.ResiliationTerms
        export interface ResiliationTerms {
            due?: OVH.order.Price;
            engageDate?: string;
            minResiliationDate?: string;
            resiliationDate?: string;
            resiliationReasons?: OVH.pack.xdsl.ResiliationReasonEnum[];
        }
        //pack.xdsl.Service
        // fullName: pack.xdsl.Service.Service
        export interface Service {
            domain?: string;
            id?: number;
            type?: OVH.pack.xdsl.ServiceNameEnum;
        }
        //pack.xdsl.ServiceInformation
        // fullName: pack.xdsl.ServiceInformation.ServiceInformation
        export interface ServiceInformation {
            inCreation?: number;
            name?: OVH.pack.xdsl.ServiceNameEnum;
            total?: number;
            used?: number;
        }
        //pack.xdsl.ServiceNameEnum
        export type ServiceNameEnum = "domain" | "emailPro" | "exchangeAccount" | "exchangeIndividual" | "exchangeLite" | "exchangeOrganization" | "hostedEmail" | "hubic" | "modem" | "overTheBoxHardware" | "overTheBoxService" | "siteBuilderFull" | "siteBuilderStart" | "voipAlias" | "voipBillingAccount" | "voipEcoFax" | "voipLine" | "xdslAccess"
        //pack.xdsl.ShippingAddress
        // fullName: pack.xdsl.ShippingAddress.ShippingAddress
        export interface ShippingAddress {
            address?: string;
            cityName?: string;
            countryCode?: string;
            firstName?: string;
            lastName?: string;
            shippingId?: string;
            zipCode?: string;
        }
        //pack.xdsl.ShippingAddressContextEnum
        export type ShippingAddressContextEnum = "migration" | "voipLine"
        //pack.xdsl.SiteBuilderDomain
        // fullName: pack.xdsl.SiteBuilderDomain.SiteBuilderDomain
        export interface SiteBuilderDomain {
            defaultSubDomain?: string;
            domain?: string;
        }
        //pack.xdsl.SiteBuilderTemplate
        // fullName: pack.xdsl.SiteBuilderTemplate.SiteBuilderTemplate
        export interface SiteBuilderTemplate {
            bkId?: number;
            id?: number;
            name?: string;
            previewImg?: string;
            reference?: string;
            thumbImage?: string;
        }
        //pack.xdsl.Task
        // fullName: pack.xdsl.Task.Task
        export interface Task {
            function?: string;
            id?: number;
            status?: OVH.pack.xdsl.TaskStatusEnum;
            updateDate?: string;
        }
        //pack.xdsl.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
        //pack.xdsl.UnpackTerms
        // fullName: pack.xdsl.UnpackTerms.UnpackTerms
        export interface UnpackTerms {
            isAllowed?: boolean;
            price?: OVH.order.Price;
            renewPeriod?: number;
            renewPrice?: OVH.order.Price;
        }
        //pack.xdsl.VoIPHardware
        // fullName: pack.xdsl.VoIPHardware.VoIPHardware
        export interface VoIPHardware {
            deposit?: OVH.order.Price;
            image?: string;
            label?: string;
            max?: number;
            name?: string;
            needShipping?: boolean;
            url?: string;
        }
        //pack.xdsl.VoIPLineOrder
        // fullName: pack.xdsl.VoIPLineOrder.VoIPLineOrder
        export interface VoIPLineOrder {
            needPayment?: boolean;
            orderId?: number;
            orderUrl?: string;
            taskIds?: number[];
        }
        //pack.xdsl.VoipLineService
        // fullName: pack.xdsl.VoipLineService.VoipLineService
        export interface VoipLineService {
            billingAccount?: string;
            domain?: string;
        }
        export namespace addressMove {
            //pack.xdsl.addressMove.Creation
            // fullName: pack.xdsl.addressMove.Creation.Creation
            export interface Creation {
                address?: OVH.xdsl.eligibility.Address;
                meeting?: OVH.xdsl.eligibility.BookMeetingSlot;
            }
            //pack.xdsl.addressMove.Eligibility
            // fullName: pack.xdsl.addressMove.Eligibility.Eligibility
            export interface Eligibility {
                keepCurrentPortability?: OVH.xdsl.eligibility.Portability;
                offers?: OVH.pack.xdsl.addressMove.Offer[];
            }
            //pack.xdsl.addressMove.Landline
            // fullName: pack.xdsl.addressMove.Landline.Landline
            export interface Landline {
                lineNumber?: string;
                portLineNumber?: boolean;
                rio?: string;
                status?: OVH.xdsl.eligibility.LandlineStatusEnum;
                unbundling?: OVH.xdsl.DeconsolidationEnum;
            }
            //pack.xdsl.addressMove.Offer
            // fullName: pack.xdsl.addressMove.Offer.Offer
            export interface Offer {
                address?: OVH.xdsl.eligibility.Address;
                estimatedDownload?: number;
                estimatedUpload?: number;
                lineSectionsLength?: OVH.xdsl.LineSectionLength[];
                lineStatus?: OVH.xdsl.eligibility.LandlineStatusEnum;
                meetingSlots?: OVH.xdsl.eligibility.MeetingSlots;
                nra?: string;
                offerCode?: string;
                portability?: OVH.xdsl.eligibility.Portability;
                price?: OVH.order.Price;
                provider?: OVH.xdsl.eligibility.ProviderEnum;
                reseller?: boolean;
                syncDownload?: number;
                syncUpload?: number;
                type?: OVH.xdsl.DslTypeEnum;
                unbundling?: OVH.xdsl.DeconsolidationEnum;
            }
        }
        export namespace migration {
            //pack.xdsl.migration.MigrationOffer
            // fullName: pack.xdsl.migration.MigrationOffer.MigrationOffer
            export interface MigrationOffer {
                contractList?: string[];
                contracts?: OVH.order.Contract[];
                currentOfferPrice?: OVH.order.Price;
                description?: string;
                due?: OVH.order.Price;
                engageMonths?: number;
                engagementMonths?: number[];
                firstYearPromo?: OVH.order.Price;
                installFees?: OVH.order.Price;
                modemMacToReturn?: string;
                modemRental?: OVH.order.Price;
                needModem?: boolean;
                needNewModem?: boolean;
                offerName?: string;
                options?: OVH.pack.xdsl.migration.OfferAvailableOption[];
                price?: OVH.order.Price;
                subServicesToDelete?: OVH.pack.xdsl.migration.SubServiceToDelete[];
                url?: string;
            }
            //pack.xdsl.migration.MigrationOfferResponse
            // fullName: pack.xdsl.migration.MigrationOfferResponse.MigrationOfferResponse
            export interface MigrationOfferResponse {
                buildings?: OVH.connectivity.eligibility.Building[];
                offers?: OVH.pack.xdsl.migration.MigrationOffer[];
            }
            //pack.xdsl.migration.OfferAvailableOption
            // fullName: pack.xdsl.migration.OfferAvailableOption.OfferAvailableOption
            export interface OfferAvailableOption {
                duration?: number;
                included?: number;
                name?: string;
                optional?: number;
                optionalPrice?: OVH.order.Price;
            }
            //pack.xdsl.migration.OfferOption
            // fullName: pack.xdsl.migration.OfferOption.OfferOption
            export interface OfferOption {
                name?: string;
                quantity?: number;
            }
            //pack.xdsl.migration.OfferServiceToDelete
            // fullName: pack.xdsl.migration.OfferServiceToDelete.OfferServiceToDelete
            export interface OfferServiceToDelete {
                service?: string;
                type?: OVH.pack.xdsl.ServiceNameEnum;
            }
            //pack.xdsl.migration.SubServiceToDelete
            // fullName: pack.xdsl.migration.SubServiceToDelete.SubServiceToDelete
            export interface SubServiceToDelete {
                numberToDelete?: number;
                services?: string[];
                type?: OVH.pack.xdsl.ServiceNameEnum;
            }
        }
        export namespace promotionCode {
            //pack.xdsl.promotionCode.Capabilities
            // fullName: pack.xdsl.promotionCode.Capabilities.Capabilities
            export interface Capabilities {
                amount?: OVH.order.Price;
                canGenerate?: boolean;
                engagement?: number;
                reasonCodes?: OVH.pack.xdsl.promotionCode.ReasonCodes[];
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
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
export namespace xdsl {
    //xdsl.AsyncTask
    // fullName: xdsl.AsyncTask.AsyncTask
    export interface AsyncTask<T> {
        error?: string;
        result?: T;
        status?: OVH.xdsl.AsyncTaskStatusEnum;
    }
    //xdsl.AsyncTaskStatusEnum
    export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
    //xdsl.DeconsolidationEnum
    export type DeconsolidationEnum = "createNeighbour" | "creation" | "creationNeighbour" | "partial" | "total"
    //xdsl.DslTypeEnum
    export type DslTypeEnum = "adsl" | "ftth" | "sdsl" | "vdsl"
    //xdsl.LineSectionLength
    // fullName: xdsl.LineSectionLength.LineSectionLength
    export interface LineSectionLength {
        diameter?: number;
        length?: number;
    }
    export namespace eligibility {
        //xdsl.eligibility.Address
        // fullName: xdsl.eligibility.Address.Address
        export interface Address {
            building?: string;
            city?: OVH.xdsl.eligibility.City;
            door?: string;
            floor?: string;
            logo?: string;
            owner?: string;
            residence?: string;
            stair?: string;
            street?: OVH.xdsl.eligibility.Street;
            streetNumber?: string;
        }
        //xdsl.eligibility.BookMeetingSlot
        // fullName: xdsl.eligibility.BookMeetingSlot.BookMeetingSlot
        export interface BookMeetingSlot {
            fakeMeeting?: boolean;
            meetingSlot?: OVH.xdsl.eligibility.MeetingSlot;
            name?: string;
        }
        //xdsl.eligibility.City
        // fullName: xdsl.eligibility.City.City
        export interface City {
            inseeCode?: string;
            locality?: string;
            name?: string;
            zipCode?: string;
        }
        //xdsl.eligibility.CodeAndMessage
        // fullName: xdsl.eligibility.CodeAndMessage.CodeAndMessage
        export interface CodeAndMessage {
            code?: string;
            message?: string;
        }
        //xdsl.eligibility.LandlineStatusEnum
        export type LandlineStatusEnum = "active" | "inactive"
        //xdsl.eligibility.MeetingSlot
        // fullName: xdsl.eligibility.MeetingSlot.MeetingSlot
        export interface MeetingSlot {
            endDate?: string;
            startDate?: string;
            uiCode?: string;
        }
        //xdsl.eligibility.MeetingSlots
        // fullName: xdsl.eligibility.MeetingSlots.MeetingSlots
        export interface MeetingSlots {
            canBookFakeMeeting?: boolean;
            meetingSlots?: OVH.xdsl.eligibility.MeetingSlot[];
        }
        //xdsl.eligibility.Portability
        // fullName: xdsl.eligibility.Portability.Portability
        export interface Portability {
            comments?: OVH.xdsl.eligibility.CodeAndMessage[];
            eligible?: boolean;
            underCondition?: boolean;
            warnings?: OVH.xdsl.eligibility.CodeAndMessage[];
        }
        //xdsl.eligibility.ProviderEnum
        export type ProviderEnum = "axione" | "ft" | "kosc" | "ovh" | "sfr"
        //xdsl.eligibility.Street
        // fullName: xdsl.eligibility.Street.Street
        export interface Street {
            name?: string;
            rivoliCode?: string;
        }
    }
    export namespace hubic {
        //xdsl.hubic.HubicDetailsResponse
        // fullName: xdsl.hubic.HubicDetailsResponse.HubicDetailsResponse
        export interface HubicDetailsResponse {
            email?: string;
        }
    }
}
// Apis harmony
// path /pack
export interface Pack {
    xdsl:  {
        // GET /pack/xdsl
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /pack/xdsl/{packName}
            $get(): Promise<pack.xdsl.PackAdsl>;
            // PUT /pack/xdsl/{packName}
            $put(body?: {body: pack.xdsl.PackAdsl}): Promise<void>;
            addressMove:  {
                eligibility:  {
                    // POST /pack/xdsl/{packName}/addressMove/eligibility
                    $post(body?: {address?: xdsl.eligibility.Address, lineNumber?: string}): Promise<xdsl.AsyncTask<pack.xdsl.addressMove.Eligibility>>;
                }
                move:  {
                    // POST /pack/xdsl/{packName}/addressMove/move
                    $post(body?: {creation?: pack.xdsl.addressMove.Creation, keepCurrentNumber: boolean, landline?: pack.xdsl.addressMove.Landline, moveOutDate?: string, offerCode: string, provider?: xdsl.eligibility.ProviderEnum}): Promise<xdsl.AsyncTask<number>>;
                }
            }
            canCancelResiliation:  {
                // GET /pack/xdsl/{packName}/canCancelResiliation
                $get(): Promise<boolean>;
            }
            cancelResiliation:  {
                // POST /pack/xdsl/{packName}/cancelResiliation
                $post(): Promise<void>;
            }
            changeContact:  {
                // POST /pack/xdsl/{packName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            domain:  {
                options:  {
                    tlds:  {
                        // GET /pack/xdsl/{packName}/domain/options/tlds
                        $get(): Promise<string[]>;
                    }
                }
                services:  {
                    // GET /pack/xdsl/{packName}/domain/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/domain/services
                    $post(body?: {action: pack.xdsl.DomainActionEnum, authInfo?: string, domain: string, tld: string}): Promise<pack.xdsl.Task>;
                }
            }
            emailPro:  {
                options:  {
                    domains:  {
                        // GET /pack/xdsl/{packName}/emailPro/options/domains
                        $get(): Promise<string[]>;
                    }
                    isEmailAvailable:  {
                        // GET /pack/xdsl/{packName}/emailPro/options/isEmailAvailable
                        $get(param?: {email: string}): Promise<boolean>;
                    }
                }
                services:  {
                    // GET /pack/xdsl/{packName}/emailPro/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/emailPro/services
                    $post(body?: {email: string, password: string}): Promise<pack.xdsl.Task>;
                }
            }
            exchangeAccount:  {
                services:  {
                    // GET /pack/xdsl/{packName}/exchangeAccount/services
                    $get(): Promise<string[]>;
                    [keys: string]: {
                        // GET /pack/xdsl/{packName}/exchangeAccount/services/{domain}
                        $get(): Promise<pack.xdsl.ExchangeAccountService>;
                    } | any
                }
            }
            exchangeIndividual:  {
                options:  {
                    domains:  {
                        // GET /pack/xdsl/{packName}/exchangeIndividual/options/domains
                        $get(): Promise<string[]>;
                    }
                    isEmailAvailable:  {
                        // GET /pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable
                        $get(param?: {email: string}): Promise<boolean>;
                    }
                }
                services:  {
                    // GET /pack/xdsl/{packName}/exchangeIndividual/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/exchangeIndividual/services
                    $post(body?: {email: string, password: string}): Promise<pack.xdsl.Task>;
                }
            }
            exchangeLite:  {
                options:  {
                    isEmailAvailable:  {
                        // GET /pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable
                        $get(param?: {email: string}): Promise<boolean>;
                    }
                }
                services:  {
                    // GET /pack/xdsl/{packName}/exchangeLite/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/exchangeLite/services
                    $post(body?: {antispam?: boolean, displayName?: string, email: string, firstName?: string, initials?: string, lastName?: string, password: string}): Promise<pack.xdsl.Task>;
                    [keys: string]: {
                        // GET /pack/xdsl/{packName}/exchangeLite/services/{domain}
                        $get(): Promise<pack.xdsl.ExchangeLiteService>;
                    } | any
                }
            }
            exchangeOrganization:  {
                services:  {
                    // GET /pack/xdsl/{packName}/exchangeOrganization/services
                    $get(): Promise<string[]>;
                }
            }
            hostedEmail:  {
                options:  {
                    domains:  {
                        // GET /pack/xdsl/{packName}/hostedEmail/options/domains
                        $get(): Promise<string[]>;
                    }
                }
                services:  {
                    // GET /pack/xdsl/{packName}/hostedEmail/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/hostedEmail/services
                    $post(body?: {email: string, password: string}): Promise<pack.xdsl.Task>;
                }
            }
            hubic:  {
                services:  {
                    // GET /pack/xdsl/{packName}/hubic/services
                    $get(): Promise<string[]>;
                    [keys: string]: {
                        // GET /pack/xdsl/{packName}/hubic/services/{domain}
                        $get(): Promise<pack.xdsl.Hubic>;
                        details:  {
                            // GET /pack/xdsl/{packName}/hubic/services/{domain}/details
                            $get(): Promise<xdsl.AsyncTask<xdsl.hubic.HubicDetailsResponse>>;
                        }
                    } | any
                }
            }
            migration:  {
                migrate:  {
                    // POST /pack/xdsl/{packName}/migration/migrate
                    $post(body?: {acceptContracts: boolean, buildingReference?: string, engageMonths?: number, floor?: string, mondialRelayId?: number, nicShipping?: string, offerName: string, options?: pack.xdsl.migration.OfferOption[], otp?: boolean, otpReference?: string, stair?: string, subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[]}): Promise<pack.xdsl.Task>;
                }
                offers:  {
                    // POST /pack/xdsl/{packName}/migration/offers
                    $post(): Promise<xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>>;
                }
                servicesToDelete:  {
                    // POST /pack/xdsl/{packName}/migration/servicesToDelete
                    $post(body?: {offerName: string, options?: pack.xdsl.migration.OfferOption[]}): Promise<pack.xdsl.migration.SubServiceToDelete[]>;
                }
            }
            promotionCode:  {
                capabilities:  {
                    // GET /pack/xdsl/{packName}/promotionCode/capabilities
                    $get(): Promise<pack.xdsl.promotionCode.Capabilities>;
                }
                generate:  {
                    // POST /pack/xdsl/{packName}/promotionCode/generate
                    $post(): Promise<pack.xdsl.Task>;
                }
            }
            resiliate:  {
                // POST /pack/xdsl/{packName}/resiliate
                $post(body?: {resiliationDate?: string, resiliationSurvey: pack.xdsl.ResiliationSurvey, servicesToKeep?: number[]}): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            }
            resiliationFollowUp:  {
                // GET /pack/xdsl/{packName}/resiliationFollowUp
                $get(): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            }
            resiliationTerms:  {
                // GET /pack/xdsl/{packName}/resiliationTerms
                $get(param?: {resiliationDate?: string}): Promise<pack.xdsl.ResiliationTerms>;
            }
            serviceInfos:  {
                // GET /pack/xdsl/{packName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /pack/xdsl/{packName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            services:  {
                // GET /pack/xdsl/{packName}/services
                $get(): Promise<pack.xdsl.ServiceInformation[]>;
            }
            shippingAddresses:  {
                // GET /pack/xdsl/{packName}/shippingAddresses
                $get(param?: {context: pack.xdsl.ShippingAddressContextEnum}): Promise<pack.xdsl.ShippingAddress[]>;
            }
            siteBuilderFull:  {
                options:  {
                    domains:  {
                        // GET /pack/xdsl/{packName}/siteBuilderFull/options/domains
                        $get(): Promise<pack.xdsl.SiteBuilderDomain[]>;
                    }
                    templates:  {
                        // GET /pack/xdsl/{packName}/siteBuilderFull/options/templates
                        $get(): Promise<pack.xdsl.SiteBuilderTemplate[]>;
                    }
                }
                services:  {
                    // GET /pack/xdsl/{packName}/siteBuilderFull/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/siteBuilderFull/services
                    $post(body?: {domain: string, subdomain: string, templateId: number}): Promise<pack.xdsl.Task>;
                }
            }
            siteBuilderStart:  {
                options:  {
                    domains:  {
                        // GET /pack/xdsl/{packName}/siteBuilderStart/options/domains
                        $get(): Promise<pack.xdsl.SiteBuilderDomain[]>;
                    }
                    templates:  {
                        // GET /pack/xdsl/{packName}/siteBuilderStart/options/templates
                        $get(): Promise<pack.xdsl.SiteBuilderTemplate[]>;
                    }
                }
                services:  {
                    // GET /pack/xdsl/{packName}/siteBuilderStart/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/siteBuilderStart/services
                    $post(body?: {domain: string, subdomain: string, templateId: number}): Promise<pack.xdsl.Task>;
                }
            }
            subServices:  {
                // GET /pack/xdsl/{packName}/subServices
                $get(): Promise<string[]>;
                [keys: string]: {
                    // GET /pack/xdsl/{packName}/subServices/{domain}
                    $get(): Promise<pack.xdsl.Service>;
                    keepServiceTerms:  {
                        // GET /pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms
                        $get(): Promise<pack.xdsl.UnpackTerms>;
                    }
                } | any
            }
            tasks:  {
                // GET /pack/xdsl/{packName}/tasks
                $get(param?: {function_?: string, status?: pack.xdsl.TaskStatusEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /pack/xdsl/{packName}/tasks/{id}
                    $get(): Promise<pack.xdsl.Task>;
                } | any
            }
            voipBillingAccount:  {
                services:  {
                    // GET /pack/xdsl/{packName}/voipBillingAccount/services
                    $get(): Promise<string[]>;
                }
            }
            voipEcofax:  {
                services:  {
                    // GET /pack/xdsl/{packName}/voipEcofax/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/voipEcofax/services
                    $post(): Promise<pack.xdsl.Task>;
                }
            }
            voipLine:  {
                options:  {
                    customShippingAddress:  {
                        // POST /pack/xdsl/{packName}/voipLine/options/customShippingAddress
                        $post(body?: {address: string, cityName: string, firstName: string, lastName: string, zipCode: string}): Promise<number>;
                    }
                    hardwares:  {
                        // GET /pack/xdsl/{packName}/voipLine/options/hardwares
                        $get(): Promise<pack.xdsl.VoIPHardware[]>;
                    }
                    shippingAddresses:  {
                        // GET /pack/xdsl/{packName}/voipLine/options/shippingAddresses
                        $get(): Promise<pack.xdsl.ShippingAddress[]>;
                    }
                }
                services:  {
                    // GET /pack/xdsl/{packName}/voipLine/services
                    $get(): Promise<string[]>;
                    // POST /pack/xdsl/{packName}/voipLine/services
                    $post(body?: {hardwareNames: string[], mondialRelayId?: string, shippingId?: string}): Promise<pack.xdsl.VoIPLineOrder>;
                    [keys: string]: {
                        // GET /pack/xdsl/{packName}/voipLine/services/{domain}
                        $get(): Promise<pack.xdsl.VoipLineService>;
                    } | any
                }
            }
            xdslAccess:  {
                services:  {
                    // GET /pack/xdsl/{packName}/xdslAccess/services
                    $get(): Promise<string[]>;
                }
            }
        } | any
    }
}
// Api
type PathsPackXdslGET = '/pack/xdsl' |
  '/pack/xdsl/{packName}' |
  '/pack/xdsl/{packName}/canCancelResiliation' |
  '/pack/xdsl/{packName}/domain/options/tlds' |
  '/pack/xdsl/{packName}/domain/services' |
  '/pack/xdsl/{packName}/emailPro/options/domains' |
  '/pack/xdsl/{packName}/emailPro/options/isEmailAvailable' |
  '/pack/xdsl/{packName}/emailPro/services' |
  '/pack/xdsl/{packName}/exchangeAccount/services' |
  '/pack/xdsl/{packName}/exchangeAccount/services/{domain}' |
  '/pack/xdsl/{packName}/exchangeIndividual/options/domains' |
  '/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable' |
  '/pack/xdsl/{packName}/exchangeIndividual/services' |
  '/pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable' |
  '/pack/xdsl/{packName}/exchangeLite/services' |
  '/pack/xdsl/{packName}/exchangeLite/services/{domain}' |
  '/pack/xdsl/{packName}/exchangeOrganization/services' |
  '/pack/xdsl/{packName}/hostedEmail/options/domains' |
  '/pack/xdsl/{packName}/hostedEmail/services' |
  '/pack/xdsl/{packName}/hubic/services' |
  '/pack/xdsl/{packName}/hubic/services/{domain}' |
  '/pack/xdsl/{packName}/hubic/services/{domain}/details' |
  '/pack/xdsl/{packName}/promotionCode/capabilities' |
  '/pack/xdsl/{packName}/resiliationFollowUp' |
  '/pack/xdsl/{packName}/resiliationTerms' |
  '/pack/xdsl/{packName}/serviceInfos' |
  '/pack/xdsl/{packName}/services' |
  '/pack/xdsl/{packName}/shippingAddresses' |
  '/pack/xdsl/{packName}/siteBuilderFull/options/domains' |
  '/pack/xdsl/{packName}/siteBuilderFull/options/templates' |
  '/pack/xdsl/{packName}/siteBuilderFull/services' |
  '/pack/xdsl/{packName}/siteBuilderStart/options/domains' |
  '/pack/xdsl/{packName}/siteBuilderStart/options/templates' |
  '/pack/xdsl/{packName}/siteBuilderStart/services' |
  '/pack/xdsl/{packName}/subServices' |
  '/pack/xdsl/{packName}/subServices/{domain}' |
  '/pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms' |
  '/pack/xdsl/{packName}/tasks' |
  '/pack/xdsl/{packName}/tasks/{id}' |
  '/pack/xdsl/{packName}/voipBillingAccount/services' |
  '/pack/xdsl/{packName}/voipEcofax/services' |
  '/pack/xdsl/{packName}/voipLine/options/hardwares' |
  '/pack/xdsl/{packName}/voipLine/options/shippingAddresses' |
  '/pack/xdsl/{packName}/voipLine/services' |
  '/pack/xdsl/{packName}/voipLine/services/{domain}' |
  '/pack/xdsl/{packName}/xdslAccess/services';

type PathsPackXdslPUT = '/pack/xdsl/{packName}' |
  '/pack/xdsl/{packName}/serviceInfos';

type PathsPackXdslPOST = '/pack/xdsl/{packName}/addressMove/eligibility' |
  '/pack/xdsl/{packName}/addressMove/move' |
  '/pack/xdsl/{packName}/cancelResiliation' |
  '/pack/xdsl/{packName}/changeContact' |
  '/pack/xdsl/{packName}/domain/services' |
  '/pack/xdsl/{packName}/emailPro/services' |
  '/pack/xdsl/{packName}/exchangeIndividual/services' |
  '/pack/xdsl/{packName}/exchangeLite/services' |
  '/pack/xdsl/{packName}/hostedEmail/services' |
  '/pack/xdsl/{packName}/migration/migrate' |
  '/pack/xdsl/{packName}/migration/offers' |
  '/pack/xdsl/{packName}/migration/servicesToDelete' |
  '/pack/xdsl/{packName}/promotionCode/generate' |
  '/pack/xdsl/{packName}/resiliate' |
  '/pack/xdsl/{packName}/siteBuilderFull/services' |
  '/pack/xdsl/{packName}/siteBuilderStart/services' |
  '/pack/xdsl/{packName}/voipEcofax/services' |
  '/pack/xdsl/{packName}/voipLine/options/customShippingAddress' |
  '/pack/xdsl/{packName}/voipLine/services';

export class ApiPackXdsl extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the PACK service
   * List available services
   */
  public get(path: '/pack/xdsl'): Promise<string[]>;
  /**
   * Pack of xDSL services
   * Get this object properties
   */
  public get(path: '/pack/xdsl/{packName}', params: {packName: string}): Promise<pack.xdsl.PackAdsl>;
  /**
   * canCancelResiliation operations
   * Check if the resiliation can be cancelled
   */
  public get(path: '/pack/xdsl/{packName}/canCancelResiliation', params: {packName: string}): Promise<boolean>;
  /**
   * tlds operations
   * Get the available tlds for domain order
   */
  public get(path: '/pack/xdsl/{packName}/domain/options/tlds', params: {packName: string}): Promise<string[]>;
  /**
   * List the pack.xdsl.DomainService objects
   * Domain services
   */
  public get(path: '/pack/xdsl/{packName}/domain/services', params: {packName: string}): Promise<string[]>;
  /**
   * domains operations
   * List the available domains for the Email Pro service
   */
  public get(path: '/pack/xdsl/{packName}/emailPro/options/domains', params: {packName: string}): Promise<string[]>;
  /**
   * isEmailAvailable operations
   * Check if the given email address is available for an Email Pro activation
   */
  public get(path: '/pack/xdsl/{packName}/emailPro/options/isEmailAvailable', params: {packName: string, email: string}): Promise<boolean>;
  /**
   * List the pack.xdsl.EmailProService objects
   * List the Email Pro services
   */
  public get(path: '/pack/xdsl/{packName}/emailPro/services', params: {packName: string}): Promise<string[]>;
  /**
   * List the pack.xdsl.ExchangeAccountService objects
   * Exchange 2013 services
   */
  public get(path: '/pack/xdsl/{packName}/exchangeAccount/services', params: {packName: string}): Promise<string[]>;
  /**
   * Exchange 2013 service
   * Get this object properties
   */
  public get(path: '/pack/xdsl/{packName}/exchangeAccount/services/{domain}', params: {packName: string, domain: string}): Promise<pack.xdsl.ExchangeAccountService>;
  /**
   * domains operations
   * Get the available domains
   */
  public get(path: '/pack/xdsl/{packName}/exchangeIndividual/options/domains', params: {packName: string}): Promise<string[]>;
  /**
   * isEmailAvailable operations
   * Check if the email address is available for service creation
   */
  public get(path: '/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable', params: {packName: string, email: string}): Promise<boolean>;
  /**
   * List the pack.xdsl.ExchangeIndividual objects
   * Exchange services
   */
  public get(path: '/pack/xdsl/{packName}/exchangeIndividual/services', params: {packName: string}): Promise<string[]>;
  /**
   * isEmailAvailable operations
   * Check if the email address is available for service creation
   */
  public get(path: '/pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable', params: {packName: string, email: string}): Promise<boolean>;
  /**
   * List the pack.xdsl.ExchangeLiteService objects
   * Exchange lite services
   */
  public get(path: '/pack/xdsl/{packName}/exchangeLite/services', params: {packName: string}): Promise<string[]>;
  /**
   * Exchange account service
   * Get this object properties
   */
  public get(path: '/pack/xdsl/{packName}/exchangeLite/services/{domain}', params: {packName: string, domain: string}): Promise<pack.xdsl.ExchangeLiteService>;
  /**
   * List the pack.xdsl.ExchangeOrganizationService objects
   * Exchange 2013 organization services
   */
  public get(path: '/pack/xdsl/{packName}/exchangeOrganization/services', params: {packName: string}): Promise<string[]>;
  /**
   * domains operations
   * Get the hostedemail available domains
   */
  public get(path: '/pack/xdsl/{packName}/hostedEmail/options/domains', params: {packName: string}): Promise<string[]>;
  /**
   * List the pack.xdsl.HostedEmailService objects
   * Hosted email services
   */
  public get(path: '/pack/xdsl/{packName}/hostedEmail/services', params: {packName: string}): Promise<string[]>;
  /**
   * List the pack.xdsl.Hubic objects
   * Hubic perso services
   */
  public get(path: '/pack/xdsl/{packName}/hubic/services', params: {packName: string}): Promise<string[]>;
  /**
   * Hubic service
   * Get this object properties
   */
  public get(path: '/pack/xdsl/{packName}/hubic/services/{domain}', params: {packName: string, domain: string}): Promise<pack.xdsl.Hubic>;
  /**
   * details operations
   * Details associated to a voucher
   */
  public get(path: '/pack/xdsl/{packName}/hubic/services/{domain}/details', params: {packName: string, domain: string}): Promise<xdsl.AsyncTask<xdsl.hubic.HubicDetailsResponse>>;
  /**
   * capabilities operations
   * Get informations about the promotion code generation
   */
  public get(path: '/pack/xdsl/{packName}/promotionCode/capabilities', params: {packName: string}): Promise<pack.xdsl.promotionCode.Capabilities>;
  /**
   * resiliationFollowUp operations
   * Get information about the ongoing resiliation
   */
  public get(path: '/pack/xdsl/{packName}/resiliationFollowUp', params: {packName: string}): Promise<pack.xdsl.ResiliationFollowUpDetail>;
  /**
   * resiliationTerms operations
   * Get resiliation terms
   */
  public get(path: '/pack/xdsl/{packName}/resiliationTerms', params: {packName: string, resiliationDate?: string}): Promise<pack.xdsl.ResiliationTerms>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/pack/xdsl/{packName}/serviceInfos', params: {packName: string}): Promise<services.Service>;
  /**
   * services operations
   * Informations about the services included in the pack
   */
  public get(path: '/pack/xdsl/{packName}/services', params: {packName: string}): Promise<pack.xdsl.ServiceInformation[]>;
  /**
   * shippingAddresses operations
   * Allowed shipping addresses given a context
   */
  public get(path: '/pack/xdsl/{packName}/shippingAddresses', params: {packName: string, context: OVH.pack.xdsl.ShippingAddressContextEnum}): Promise<pack.xdsl.ShippingAddress[]>;
  /**
   * domains operations
   * Get the available domains
   */
  public get(path: '/pack/xdsl/{packName}/siteBuilderFull/options/domains', params: {packName: string}): Promise<pack.xdsl.SiteBuilderDomain[]>;
  /**
   * templates operations
   * Get the available templates
   */
  public get(path: '/pack/xdsl/{packName}/siteBuilderFull/options/templates', params: {packName: string}): Promise<pack.xdsl.SiteBuilderTemplate[]>;
  /**
   * List the pack.xdsl.SiteBuilderFullService objects
   * Sitebuilder full services
   */
  public get(path: '/pack/xdsl/{packName}/siteBuilderFull/services', params: {packName: string}): Promise<string[]>;
  /**
   * domains operations
   * Get the available domains
   */
  public get(path: '/pack/xdsl/{packName}/siteBuilderStart/options/domains', params: {packName: string}): Promise<pack.xdsl.SiteBuilderDomain[]>;
  /**
   * templates operations
   * Get the available templates
   */
  public get(path: '/pack/xdsl/{packName}/siteBuilderStart/options/templates', params: {packName: string}): Promise<pack.xdsl.SiteBuilderTemplate[]>;
  /**
   * List the pack.xdsl.SiteBuilderStartService objects
   * Sitebuilder start services
   */
  public get(path: '/pack/xdsl/{packName}/siteBuilderStart/services', params: {packName: string}): Promise<string[]>;
  /**
   * List the pack.xdsl.Service objects
   * List services contained in the pack
   */
  public get(path: '/pack/xdsl/{packName}/subServices', params: {packName: string}): Promise<string[]>;
  /**
   * Service link to the pack
   * Get this object properties
   */
  public get(path: '/pack/xdsl/{packName}/subServices/{domain}', params: {packName: string, domain: string}): Promise<pack.xdsl.Service>;
  /**
   * keepServiceTerms operations
   * Give the condition to unpack service from pack
   */
  public get(path: '/pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms', params: {packName: string, domain: string}): Promise<pack.xdsl.UnpackTerms>;
  /**
   * List the pack.xdsl.Task objects
   * Tasks scheduled for this pack
   */
  public get(path: '/pack/xdsl/{packName}/tasks', params: {packName: string, function_?: string, status?: OVH.pack.xdsl.TaskStatusEnum}): Promise<number[]>;
  /**
   * Describes the current status of a task
   * Get this object properties
   */
  public get(path: '/pack/xdsl/{packName}/tasks/{id}', params: {packName: string, id: string}): Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.BillingAccountService objects
   * VOIP billing accounts
   */
  public get(path: '/pack/xdsl/{packName}/voipBillingAccount/services', params: {packName: string}): Promise<string[]>;
  /**
   * List the pack.xdsl.VoipEcoFaxService objects
   * VOIP ecofax service
   */
  public get(path: '/pack/xdsl/{packName}/voipEcofax/services', params: {packName: string}): Promise<string[]>;
  /**
   * hardwares operations
   * Get available hardwares
   */
  public get(path: '/pack/xdsl/{packName}/voipLine/options/hardwares', params: {packName: string}): Promise<pack.xdsl.VoIPHardware[]>;
  /**
   * shippingAddresses operations
   * Get available shipping addresses
   */
  public get(path: '/pack/xdsl/{packName}/voipLine/options/shippingAddresses', params: {packName: string}): Promise<pack.xdsl.ShippingAddress[]>;
  /**
   * List the pack.xdsl.VoipLineService objects
   * VOIP line services
   */
  public get(path: '/pack/xdsl/{packName}/voipLine/services', params: {packName: string}): Promise<string[]>;
  /**
   * VOIP line services
   * Get this object properties
   */
  public get(path: '/pack/xdsl/{packName}/voipLine/services/{domain}', params: {packName: string, domain: string}): Promise<pack.xdsl.VoipLineService>;
  /**
   * List the pack.xdsl.XdslAccessService objects
   * xDSL access services
   */
  public get(path: '/pack/xdsl/{packName}/xdslAccess/services', params: {packName: string}): Promise<string[]>;
  public get(path: PathsPackXdslGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Pack of xDSL services
   * Alter this object properties
   */
  public put(path: '/pack/xdsl/{packName}', params: {packName: string, capabilities?: OVH.pack.xdsl.PackCapabilities, description?: string, offerDescription?: string, offerPrice?: OVH.order.Price}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/pack/xdsl/{packName}/serviceInfos', params: {packName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsPackXdslPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * eligibility operations
   * Eligibility to move the access
   */
  public post(path: '/pack/xdsl/{packName}/addressMove/eligibility', params: {packName: string, address?: OVH.xdsl.eligibility.Address, lineNumber?: string}): Promise<xdsl.AsyncTask<pack.xdsl.addressMove.Eligibility>>;
  /**
   * move operations
   * Move the access to another address
   */
  public post(path: '/pack/xdsl/{packName}/addressMove/move', params: {packName: string, creation?: OVH.pack.xdsl.addressMove.Creation, keepCurrentNumber: boolean, landline?: OVH.pack.xdsl.addressMove.Landline, moveOutDate?: string, offerCode: string, provider?: OVH.xdsl.eligibility.ProviderEnum}): Promise<xdsl.AsyncTask<number>>;
  /**
   * cancelResiliation operations
   * Cancel the ongoing resiliation
   */
  public post(path: '/pack/xdsl/{packName}/cancelResiliation', params: {packName: string}): Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/pack/xdsl/{packName}/changeContact', params: {packName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * List the pack.xdsl.DomainService objects
   * Activate a domain service
   */
  public post(path: '/pack/xdsl/{packName}/domain/services', params: {packName: string, action: OVH.pack.xdsl.DomainActionEnum, authInfo?: string, domain: string, tld: string}): Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.EmailProService objects
   * Activate an Email Pro service
   */
  public post(path: '/pack/xdsl/{packName}/emailPro/services', params: {packName: string, email: string, password: string}): Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.ExchangeIndividual objects
   * Activate an exchange service
   */
  public post(path: '/pack/xdsl/{packName}/exchangeIndividual/services', params: {packName: string, email: string, password: string}): Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.ExchangeLiteService objects
   * Activate a exchange lite service
   */
  public post(path: '/pack/xdsl/{packName}/exchangeLite/services', params: {packName: string, antispam?: boolean, displayName?: string, email: string, firstName?: string, initials?: string, lastName?: string, password: string}): Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.HostedEmailService objects
   * Activate an hosted email service
   */
  public post(path: '/pack/xdsl/{packName}/hostedEmail/services', params: {packName: string, email: string, password: string}): Promise<pack.xdsl.Task>;
  /**
   * migrate operations
   * Migrate to the selected offer
   */
  public post(path: '/pack/xdsl/{packName}/migration/migrate', params: {packName: string, acceptContracts: boolean, buildingReference?: string, engageMonths?: number, floor?: string, mondialRelayId?: number, nicShipping?: string, offerName: string, options?: OVH.pack.xdsl.migration.OfferOption[], otp?: boolean, otpReference?: string, stair?: string, subServicesToDelete?: OVH.pack.xdsl.migration.OfferServiceToDelete[]}): Promise<pack.xdsl.Task>;
  /**
   * offers operations
   * Get the possibilities of migration offers available
   */
  public post(path: '/pack/xdsl/{packName}/migration/offers', params: {packName: string}): Promise<xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>>;
  /**
   * servicesToDelete operations
   * Calculate services to delete with new offer and options
   */
  public post(path: '/pack/xdsl/{packName}/migration/servicesToDelete', params: {packName: string, offerName: string, options?: OVH.pack.xdsl.migration.OfferOption[]}): Promise<pack.xdsl.migration.SubServiceToDelete[]>;
  /**
   * generate operations
   * Creates a task to generate a new promotion code
   */
  public post(path: '/pack/xdsl/{packName}/promotionCode/generate', params: {packName: string}): Promise<pack.xdsl.Task>;
  /**
   * resiliate operations
   * Resiliate the pack
   */
  public post(path: '/pack/xdsl/{packName}/resiliate', params: {packName: string, resiliationDate?: string, resiliationSurvey: OVH.pack.xdsl.ResiliationSurvey, servicesToKeep?: number[]}): Promise<pack.xdsl.ResiliationFollowUpDetail>;
  /**
   * List the pack.xdsl.SiteBuilderFullService objects
   * Activate a sitebuilder full service
   */
  public post(path: '/pack/xdsl/{packName}/siteBuilderFull/services', params: {packName: string, domain: string, subdomain: string, templateId: number}): Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.SiteBuilderStartService objects
   * Activate a sitebuilder full service
   */
  public post(path: '/pack/xdsl/{packName}/siteBuilderStart/services', params: {packName: string, domain: string, subdomain: string, templateId: number}): Promise<pack.xdsl.Task>;
  /**
   * List the pack.xdsl.VoipEcoFaxService objects
   * Activate a voicefax service
   */
  public post(path: '/pack/xdsl/{packName}/voipEcofax/services', params: {packName: string}): Promise<pack.xdsl.Task>;
  /**
   * customShippingAddress operations
   * Create a new shippingId to be used for voipLine service creation
   */
  public post(path: '/pack/xdsl/{packName}/voipLine/options/customShippingAddress', params: {packName: string, address: string, cityName: string, firstName: string, lastName: string, zipCode: string}): Promise<number>;
  /**
   * List the pack.xdsl.VoipLineService objects
   * Activate a voip line service
   */
  public post(path: '/pack/xdsl/{packName}/voipLine/services', params: {packName: string, hardwareNames: string[], mondialRelayId?: string, shippingId?: string}): Promise<pack.xdsl.VoIPLineOrder>;
  public post(path: PathsPackXdslPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
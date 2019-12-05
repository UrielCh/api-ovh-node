import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /pack/xdsl Models
 */
export declare namespace connectivity {
    namespace eligibility {
        interface Building {
            name: string;
            nro?: string;
            reference: string;
            stairs: connectivity.eligibility.BuildingStair[];
            type: connectivity.eligibility.BuildingTypeEnum;
        }
        interface BuildingStair {
            floors: string[];
            stair: string;
        }
        type BuildingTypeEnum = "BUILDING" | "HOUSE";
    }
}
export declare namespace order {
    interface Contract {
        content: string;
        name: string;
        url: string;
    }
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export declare namespace pack {
    namespace xdsl {
        type DomainActionEnum = "create" | "trade" | "transfer";
        interface ExchangeAccountService {
            domain: string;
            exchangeService: string;
            organizationName: string;
        }
        interface ExchangeLiteService {
            domain: string;
        }
        interface Hubic {
            bytes: number;
            domain: string;
            isUsed: boolean;
            size: string;
            voucher?: string;
        }
        interface PackAdsl {
            capabilities: pack.xdsl.PackCapabilities;
            description?: string;
            offerDescription: string;
            offerPrice: order.Price;
            packName: string;
        }
        interface PackCapabilities {
            canMoveAddress: boolean;
            isLegacyOffer: boolean;
        }
        interface PackDetail {
            accessname: string;
            description: string;
            number: string;
            packname: string;
            type: xdslDslTypeEnum;
        }
        interface ResiliationFollowUpDetail {
            dateTodo: string;
            needModemReturn: boolean;
            registrationDate: string;
            status: string;
        }
        type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "ftth" | "goToCompetitor" | "other" | "technicalProblems";
        interface ResiliationSurvey {
            comment?: string;
            type: pack.xdsl.ResiliationReasonEnum;
        }
        interface ResiliationTerms {
            due: order.Price;
            engageDate?: string;
            minResiliationDate: string;
            resiliationDate: string;
            resiliationReasons: pack.xdsl.ResiliationReasonEnum[];
        }
        interface Service {
            domain: string;
            id: number;
            type: pack.xdsl.ServiceNameEnum;
        }
        interface ServiceInformation {
            inCreation: number;
            name: pack.xdsl.ServiceNameEnum;
            total: number;
            used: number;
        }
        type ServiceNameEnum = "domain" | "emailPro" | "exchangeAccount" | "exchangeIndividual" | "exchangeLite" | "exchangeOrganization" | "hostedEmail" | "hubic" | "modem" | "overTheBoxHardware" | "overTheBoxService" | "siteBuilderFull" | "siteBuilderStart" | "voipAlias" | "voipBillingAccount" | "voipEcoFax" | "voipLine" | "xdslAccess";
        interface ShippingAddress {
            address: string;
            cityName: string;
            countryCode: string;
            firstName: string;
            lastName: string;
            shippingId: string;
            zipCode: string;
        }
        type ShippingAddressContextEnum = "migration" | "voipLine";
        interface SiteBuilderDomain {
            defaultSubDomain: string;
            domain: string;
        }
        interface SiteBuilderTemplate {
            bkId: number;
            id: number;
            name: string;
            previewImg: string;
            reference: string;
            thumbImage: string;
        }
        interface Task {
            function: string;
            id: number;
            status: pack.xdsl.TaskStatusEnum;
            updateDate: string;
        }
        type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo";
        interface UnpackTerms {
            isAllowed: boolean;
            price: order.Price;
            renewPeriod: number;
            renewPrice: order.Price;
        }
        interface VoIPHardware {
            deposit?: order.Price;
            image?: string;
            label: string;
            max?: number;
            name: string;
            needShipping: boolean;
            url?: string;
        }
        interface VoIPLineOrder {
            needPayment: boolean;
            orderId: number;
            orderUrl: string;
            taskIds: number[];
        }
        interface VoipLineService {
            billingAccount: string;
            domain: string;
        }
        namespace addressMove {
            interface Creation {
                address: xdsleligibilityAddress;
                meeting: xdsleligibilityBookMeetingSlot;
            }
            interface Eligibility {
                keepCurrentPortability?: xdsleligibilityPortability;
                offers: pack.xdsl.addressMove.Offer[];
            }
            interface Landline {
                lineNumber: string;
                portLineNumber: boolean;
                rio?: string;
                status: xdsleligibilityLandlineStatusEnum;
                unbundling: xdslDeconsolidationEnum;
            }
            interface MoveOffer {
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
            interface MoveOfferResponse {
                offers: pack.xdsl.addressMove.MoveOffer[];
            }
            interface Offer {
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
            interface Price {
                description: string;
                price?: order.Price;
            }
            interface PriceOffer {
                currentOfferPrice: pack.xdsl.addressMove.Price;
                due: pack.xdsl.addressMove.Price;
                firstYearPromo: pack.xdsl.addressMove.Price;
                installFees: pack.xdsl.addressMove.Price;
                modemRental: pack.xdsl.addressMove.Price;
                price: pack.xdsl.addressMove.Price;
            }
        }
        namespace migration {
            interface MigrationOffer {
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
            interface MigrationOfferResponse {
                buildings: connectivity.eligibility.Building[];
                offers: pack.xdsl.migration.MigrationOffer[];
            }
            interface OfferAvailableOption {
                duration: number;
                included: number;
                name: string;
                optional: number;
                optionalPrice?: order.Price;
            }
            interface OfferOption {
                name: string;
                quantity: number;
            }
            interface OfferServiceToDelete {
                service: string;
                type: pack.xdsl.ServiceNameEnum;
            }
            interface SubServiceToDelete {
                numberToDelete: number;
                services: string[];
                type: pack.xdsl.ServiceNameEnum;
            }
        }
        namespace promotionCode {
            interface Capabilities {
                amount: order.Price;
                canGenerate: boolean;
                engagement: number;
                reasonCodes: pack.xdsl.promotionCode.ReasonCodes[];
            }
            type ReasonCodes = "noMoreAvailable" | "offerNotCompatible" | "serviceNotInOkState" | "stillEngaged" | "taskInProgress";
        }
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
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
export declare namespace xdsl {
    interface AsyncTask<T> {
        error?: string;
        result?: T;
        status: xdsl.AsyncTaskStatusEnum;
    }
    type AsyncTaskStatusEnum = "error" | "ok" | "pending";
    type DeconsolidationEnum = "createNeighbour" | "creation" | "creationNeighbour" | "partial" | "total";
    type DslTypeEnum = "adsl" | "ftth" | "sdsl" | "vdsl";
    interface LineSectionLength {
        diameter: number;
        length: number;
    }
    namespace eligibility {
        interface Address {
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
        interface BookMeetingSlot {
            fakeMeeting: boolean;
            meetingSlot?: xdsl.eligibility.MeetingSlot;
            name: string;
        }
        interface City {
            inseeCode: string;
            locality?: string;
            name: string;
            zipCode: string;
        }
        interface CodeAndMessage {
            code: string;
            message: string;
        }
        type LandlineStatusEnum = "active" | "inactive";
        interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        interface MeetingSlots {
            canBookFakeMeeting: boolean;
            meetingSlots: xdsl.eligibility.MeetingSlot[];
        }
        interface Portability {
            comments: xdsl.eligibility.CodeAndMessage[];
            eligible: boolean;
            underCondition: boolean;
            warnings: xdsl.eligibility.CodeAndMessage[];
        }
        type ProviderEnum = "axione" | "ft" | "kosc" | "ovh" | "sfr";
        interface Street {
            name: string;
            rivoliCode: string;
        }
    }
    namespace hubic {
        interface HubicDetailsResponse {
            email: string;
        }
    }
}
/**
 * END API /pack/xdsl Models
 */
export declare function proxyPackXdsl(ovhEngine: OvhRequestable): Pack;
export default proxyPackXdsl;
/**
 * Api Proxy model
 */ export interface Pack {
    xdsl: {
        $get(): Promise<string[]>;
        $(packName: string): {
            $get(): Promise<pack.xdsl.PackAdsl>;
            $put(params?: {
                capabilities?: pack.xdsl.PackCapabilities;
                description?: string;
                offerDescription?: string;
                offerPrice?: order.Price;
                packName?: string;
            }): Promise<void>;
            addressMove: {
                eligibility: {
                    $post(params?: {
                        address?: xdsleligibilityAddress;
                        lineNumber?: string;
                    }): Promise<xdsl.AsyncTask<pack.xdsl.addressMove.Eligibility>>;
                };
                move: {
                    $post(params: {
                        creation?: pack.xdsl.addressMove.Creation;
                        keepCurrentNumber: boolean;
                        landline?: pack.xdsl.addressMove.Landline;
                        moveOutDate?: string;
                        offerCode: string;
                        provider?: xdsleligibilityProviderEnum;
                    }): Promise<xdsl.AsyncTask<number>>;
                };
                moveFtth: {
                    $post(params: {
                        buildingReference: string;
                        floor: string;
                        moveOutDate?: string;
                        otp: boolean;
                        otpReference?: string;
                        stair: string;
                    }): Promise<xdsl.AsyncTask<number>>;
                };
                moveOffer: {
                    $post(params: {
                        acceptContracts: boolean;
                        buildingReference: string;
                        eligibilityReference: string;
                        engageMonths?: number;
                        floor: string;
                        keepCurrentNumber: boolean;
                        mondialRelayId?: number;
                        moveOutDate?: string;
                        nicShipping?: string;
                        offerName: string;
                        options?: pack.xdsl.migration.OfferOption[];
                        otp: boolean;
                        otpReference?: string;
                        productCode: string;
                        stair: string;
                        subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[];
                    }): Promise<xdsl.AsyncTask<number>>;
                };
                offers: {
                    $post(params: {
                        eligibilityReference: string;
                    }): Promise<xdsl.AsyncTask<pack.xdsl.addressMove.MoveOfferResponse>>;
                };
            };
            canCancelResiliation: {
                $get(): Promise<boolean>;
            };
            cancelResiliation: {
                $post(): Promise<void>;
            };
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            domain: {
                options: {
                    tlds: {
                        $get(): Promise<string[]>;
                    };
                };
                services: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        action: pack.xdsl.DomainActionEnum;
                        authInfo?: string;
                        domain: string;
                        tld: string;
                    }): Promise<pack.xdsl.Task>;
                };
            };
            emailPro: {
                options: {
                    domains: {
                        $get(): Promise<string[]>;
                    };
                    isEmailAvailable: {
                        $get(params: {
                            email: string;
                        }): Promise<boolean>;
                    };
                };
                services: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        email: string;
                        password: string;
                    }): Promise<pack.xdsl.Task>;
                };
            };
            exchangeAccount: {
                services: {
                    $get(): Promise<string[]>;
                    $(domain: string): {
                        $get(): Promise<pack.xdsl.ExchangeAccountService>;
                    };
                };
            };
            exchangeIndividual: {
                options: {
                    domains: {
                        $get(): Promise<string[]>;
                    };
                    isEmailAvailable: {
                        $get(params: {
                            email: string;
                        }): Promise<boolean>;
                    };
                };
                services: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        email: string;
                        password: string;
                    }): Promise<pack.xdsl.Task>;
                };
            };
            exchangeLite: {
                options: {
                    isEmailAvailable: {
                        $get(params: {
                            email: string;
                        }): Promise<boolean>;
                    };
                };
                services: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        antispam?: boolean;
                        displayName?: string;
                        email: string;
                        firstName?: string;
                        initials?: string;
                        lastName?: string;
                        password: string;
                    }): Promise<pack.xdsl.Task>;
                    $(domain: string): {
                        $get(): Promise<pack.xdsl.ExchangeLiteService>;
                    };
                };
            };
            exchangeOrganization: {
                services: {
                    $get(): Promise<string[]>;
                };
            };
            hostedEmail: {
                options: {
                    domains: {
                        $get(): Promise<string[]>;
                    };
                };
                services: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        email: string;
                        password: string;
                    }): Promise<pack.xdsl.Task>;
                };
            };
            hubic: {
                services: {
                    $get(): Promise<string[]>;
                    $(domain: string): {
                        $get(): Promise<pack.xdsl.Hubic>;
                        details: {
                            $get(): Promise<xdsl.AsyncTask<xdsl.hubic.HubicDetailsResponse>>;
                        };
                    };
                };
            };
            migration: {
                migrate: {
                    $post(params: {
                        acceptContracts: boolean;
                        buildingReference?: string;
                        engageMonths?: number;
                        floor?: string;
                        mondialRelayId?: number;
                        nicShipping?: string;
                        offerName: string;
                        options?: pack.xdsl.migration.OfferOption[];
                        otp?: boolean;
                        otpReference?: string;
                        stair?: string;
                        subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[];
                    }): Promise<pack.xdsl.Task>;
                };
                offers: {
                    $post(): Promise<xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>>;
                };
                servicesToDelete: {
                    $post(params: {
                        offerName: string;
                        options?: pack.xdsl.migration.OfferOption[];
                    }): Promise<pack.xdsl.migration.SubServiceToDelete[]>;
                };
            };
            promotionCode: {
                capabilities: {
                    $get(): Promise<pack.xdsl.promotionCode.Capabilities>;
                };
                generate: {
                    $post(): Promise<pack.xdsl.Task>;
                };
            };
            resiliate: {
                $post(params: {
                    resiliationDate?: string;
                    resiliationSurvey: pack.xdsl.ResiliationSurvey;
                    servicesToKeep?: number[];
                }): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            };
            resiliationFollowUp: {
                $get(): Promise<pack.xdsl.ResiliationFollowUpDetail>;
            };
            resiliationTerms: {
                $get(params?: {
                    resiliationDate?: string;
                }): Promise<pack.xdsl.ResiliationTerms>;
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            services: {
                $get(): Promise<pack.xdsl.ServiceInformation[]>;
            };
            shippingAddresses: {
                $get(params: {
                    context: pack.xdsl.ShippingAddressContextEnum;
                }): Promise<pack.xdsl.ShippingAddress[]>;
            };
            siteBuilderFull: {
                options: {
                    domains: {
                        $get(): Promise<pack.xdsl.SiteBuilderDomain[]>;
                    };
                    templates: {
                        $get(): Promise<pack.xdsl.SiteBuilderTemplate[]>;
                    };
                };
                services: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        domain: string;
                        subdomain: string;
                        templateId: number;
                    }): Promise<pack.xdsl.Task>;
                };
            };
            siteBuilderStart: {
                options: {
                    domains: {
                        $get(): Promise<pack.xdsl.SiteBuilderDomain[]>;
                    };
                    templates: {
                        $get(): Promise<pack.xdsl.SiteBuilderTemplate[]>;
                    };
                };
                services: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        domain: string;
                        subdomain: string;
                        templateId: number;
                    }): Promise<pack.xdsl.Task>;
                };
            };
            subServices: {
                $get(): Promise<string[]>;
                $(domain: string): {
                    $get(): Promise<pack.xdsl.Service>;
                    keepServiceTerms: {
                        $get(): Promise<pack.xdsl.UnpackTerms>;
                    };
                };
            };
            tasks: {
                $get(params?: {
                    function_?: string;
                    status?: pack.xdsl.TaskStatusEnum;
                }): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<pack.xdsl.Task>;
                };
            };
            voipBillingAccount: {
                services: {
                    $get(): Promise<string[]>;
                };
            };
            voipEcofax: {
                services: {
                    $get(): Promise<string[]>;
                    $post(): Promise<pack.xdsl.Task>;
                };
            };
            voipLine: {
                options: {
                    customShippingAddress: {
                        $post(params: {
                            address: string;
                            cityName: string;
                            firstName: string;
                            lastName: string;
                            zipCode: string;
                        }): Promise<number>;
                    };
                    hardwares: {
                        $get(): Promise<pack.xdsl.VoIPHardware[]>;
                    };
                    shippingAddresses: {
                        $get(): Promise<pack.xdsl.ShippingAddress[]>;
                    };
                };
                services: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        hardwareNames: string[];
                        mondialRelayId?: string;
                        shippingId?: string;
                    }): Promise<pack.xdsl.VoIPLineOrder>;
                    $(domain: string): {
                        $get(): Promise<pack.xdsl.VoipLineService>;
                    };
                };
            };
            xdslAccess: {
                services: {
                    $get(): Promise<string[]>;
                };
            };
        };
    };
    /**
     * Operations about the PACK service
     * List available services
     */
    get(path: '/pack/xdsl'): () => Promise<string[]>;
    /**
     * Pack of xDSL services
     * Get this object properties
     */
    get(path: '/pack/xdsl/{packName}'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.PackAdsl>;
    /**
     * canCancelResiliation operations
     * Check if the resiliation can be cancelled
     */
    get(path: '/pack/xdsl/{packName}/canCancelResiliation'): (params: {
        packName: string;
    }) => Promise<boolean>;
    /**
     * tlds operations
     * Get the available tlds for domain order
     */
    get(path: '/pack/xdsl/{packName}/domain/options/tlds'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * List the pack.xdsl.DomainService objects
     * Domain services
     */
    get(path: '/pack/xdsl/{packName}/domain/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * domains operations
     * List the available domains for the Email Pro service
     */
    get(path: '/pack/xdsl/{packName}/emailPro/options/domains'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * isEmailAvailable operations
     * Check if the given email address is available for an Email Pro activation
     */
    get(path: '/pack/xdsl/{packName}/emailPro/options/isEmailAvailable'): (params: {
        packName: string;
        email: string;
    }) => Promise<boolean>;
    /**
     * List the pack.xdsl.EmailProService objects
     * List the Email Pro services
     */
    get(path: '/pack/xdsl/{packName}/emailPro/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * List the pack.xdsl.ExchangeAccountService objects
     * Exchange 2013 services
     */
    get(path: '/pack/xdsl/{packName}/exchangeAccount/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * Exchange 2013 service
     * Get this object properties
     */
    get(path: '/pack/xdsl/{packName}/exchangeAccount/services/{domain}'): (params: {
        domain: string;
        packName: string;
    }) => Promise<pack.xdsl.ExchangeAccountService>;
    /**
     * domains operations
     * Get the available domains
     */
    get(path: '/pack/xdsl/{packName}/exchangeIndividual/options/domains'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * isEmailAvailable operations
     * Check if the email address is available for service creation
     */
    get(path: '/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable'): (params: {
        packName: string;
        email: string;
    }) => Promise<boolean>;
    /**
     * List the pack.xdsl.ExchangeIndividual objects
     * Exchange services
     */
    get(path: '/pack/xdsl/{packName}/exchangeIndividual/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * isEmailAvailable operations
     * Check if the email address is available for service creation
     */
    get(path: '/pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable'): (params: {
        packName: string;
        email: string;
    }) => Promise<boolean>;
    /**
     * List the pack.xdsl.ExchangeLiteService objects
     * Exchange lite services
     */
    get(path: '/pack/xdsl/{packName}/exchangeLite/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * Exchange account service
     * Get this object properties
     */
    get(path: '/pack/xdsl/{packName}/exchangeLite/services/{domain}'): (params: {
        domain: string;
        packName: string;
    }) => Promise<pack.xdsl.ExchangeLiteService>;
    /**
     * List the pack.xdsl.ExchangeOrganizationService objects
     * Exchange 2013 organization services
     */
    get(path: '/pack/xdsl/{packName}/exchangeOrganization/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * domains operations
     * Get the hostedemail available domains
     */
    get(path: '/pack/xdsl/{packName}/hostedEmail/options/domains'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * List the pack.xdsl.HostedEmailService objects
     * Hosted email services
     */
    get(path: '/pack/xdsl/{packName}/hostedEmail/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * List the pack.xdsl.Hubic objects
     * Hubic perso services
     */
    get(path: '/pack/xdsl/{packName}/hubic/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * Hubic service
     * Get this object properties
     */
    get(path: '/pack/xdsl/{packName}/hubic/services/{domain}'): (params: {
        domain: string;
        packName: string;
    }) => Promise<pack.xdsl.Hubic>;
    /**
     * details operations
     * Details associated to a voucher
     */
    get(path: '/pack/xdsl/{packName}/hubic/services/{domain}/details'): (params: {
        domain: string;
        packName: string;
    }) => Promise<xdsl.AsyncTask<xdsl.hubic.HubicDetailsResponse>>;
    /**
     * capabilities operations
     * Get informations about the promotion code generation
     */
    get(path: '/pack/xdsl/{packName}/promotionCode/capabilities'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.promotionCode.Capabilities>;
    /**
     * resiliationFollowUp operations
     * Get information about the ongoing resiliation
     */
    get(path: '/pack/xdsl/{packName}/resiliationFollowUp'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.ResiliationFollowUpDetail>;
    /**
     * resiliationTerms operations
     * Get resiliation terms
     */
    get(path: '/pack/xdsl/{packName}/resiliationTerms'): (params: {
        packName: string;
        resiliationDate?: string;
    }) => Promise<pack.xdsl.ResiliationTerms>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/pack/xdsl/{packName}/serviceInfos'): (params: {
        packName: string;
    }) => Promise<services.Service>;
    /**
     * services operations
     * Informations about the services included in the pack
     */
    get(path: '/pack/xdsl/{packName}/services'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.ServiceInformation[]>;
    /**
     * shippingAddresses operations
     * Allowed shipping addresses given a context
     */
    get(path: '/pack/xdsl/{packName}/shippingAddresses'): (params: {
        packName: string;
        context: pack.xdsl.ShippingAddressContextEnum;
    }) => Promise<pack.xdsl.ShippingAddress[]>;
    /**
     * domains operations
     * Get the available domains
     */
    get(path: '/pack/xdsl/{packName}/siteBuilderFull/options/domains'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.SiteBuilderDomain[]>;
    /**
     * templates operations
     * Get the available templates
     */
    get(path: '/pack/xdsl/{packName}/siteBuilderFull/options/templates'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.SiteBuilderTemplate[]>;
    /**
     * List the pack.xdsl.SiteBuilderFullService objects
     * Sitebuilder full services
     */
    get(path: '/pack/xdsl/{packName}/siteBuilderFull/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * domains operations
     * Get the available domains
     */
    get(path: '/pack/xdsl/{packName}/siteBuilderStart/options/domains'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.SiteBuilderDomain[]>;
    /**
     * templates operations
     * Get the available templates
     */
    get(path: '/pack/xdsl/{packName}/siteBuilderStart/options/templates'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.SiteBuilderTemplate[]>;
    /**
     * List the pack.xdsl.SiteBuilderStartService objects
     * Sitebuilder start services
     */
    get(path: '/pack/xdsl/{packName}/siteBuilderStart/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * List the pack.xdsl.Service objects
     * List services contained in the pack
     */
    get(path: '/pack/xdsl/{packName}/subServices'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * Service link to the pack
     * Get this object properties
     */
    get(path: '/pack/xdsl/{packName}/subServices/{domain}'): (params: {
        domain: string;
        packName: string;
    }) => Promise<pack.xdsl.Service>;
    /**
     * keepServiceTerms operations
     * Give the condition to unpack service from pack
     */
    get(path: '/pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms'): (params: {
        domain: string;
        packName: string;
    }) => Promise<pack.xdsl.UnpackTerms>;
    /**
     * List the pack.xdsl.Task objects
     * Tasks scheduled for this pack
     */
    get(path: '/pack/xdsl/{packName}/tasks'): (params: {
        packName: string;
        function_?: string;
        status?: pack.xdsl.TaskStatusEnum;
    }) => Promise<number[]>;
    /**
     * Describes the current status of a task
     * Get this object properties
     */
    get(path: '/pack/xdsl/{packName}/tasks/{id}'): (params: {
        id: number;
        packName: string;
    }) => Promise<pack.xdsl.Task>;
    /**
     * List the pack.xdsl.BillingAccountService objects
     * VOIP billing accounts
     */
    get(path: '/pack/xdsl/{packName}/voipBillingAccount/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * List the pack.xdsl.VoipEcoFaxService objects
     * VOIP ecofax service
     */
    get(path: '/pack/xdsl/{packName}/voipEcofax/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * hardwares operations
     * Get available hardwares
     */
    get(path: '/pack/xdsl/{packName}/voipLine/options/hardwares'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.VoIPHardware[]>;
    /**
     * shippingAddresses operations
     * Get available shipping addresses
     */
    get(path: '/pack/xdsl/{packName}/voipLine/options/shippingAddresses'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.ShippingAddress[]>;
    /**
     * List the pack.xdsl.VoipLineService objects
     * VOIP line services
     */
    get(path: '/pack/xdsl/{packName}/voipLine/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * VOIP line services
     * Get this object properties
     */
    get(path: '/pack/xdsl/{packName}/voipLine/services/{domain}'): (params: {
        domain: string;
        packName: string;
    }) => Promise<pack.xdsl.VoipLineService>;
    /**
     * List the pack.xdsl.XdslAccessService objects
     * xDSL access services
     */
    get(path: '/pack/xdsl/{packName}/xdslAccess/services'): (params: {
        packName: string;
    }) => Promise<string[]>;
    /**
     * Pack of xDSL services
     * Alter this object properties
     */
    put(path: '/pack/xdsl/{packName}'): (params: {
        packName: string;
        capabilities?: pack.xdsl.PackCapabilities;
        description?: string;
        offerDescription?: string;
        offerPrice?: order.Price;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/pack/xdsl/{packName}/serviceInfos'): (params: {
        packName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * eligibility operations
     * Eligibility to move the access
     */
    post(path: '/pack/xdsl/{packName}/addressMove/eligibility'): (params: {
        packName: string;
        address?: xdsleligibilityAddress;
        lineNumber?: string;
    }) => Promise<xdsl.AsyncTask<pack.xdsl.addressMove.Eligibility>>;
    /**
     * move operations
     * Move the Xdsl access to another address
     */
    post(path: '/pack/xdsl/{packName}/addressMove/move'): (params: {
        packName: string;
        creation?: pack.xdsl.addressMove.Creation;
        keepCurrentNumber: boolean;
        landline?: pack.xdsl.addressMove.Landline;
        moveOutDate?: string;
        offerCode: string;
        provider?: xdsleligibilityProviderEnum;
    }) => Promise<xdsl.AsyncTask<number>>;
    /**
     * moveFtth operations
     * Move the FTTH access to another address
     */
    post(path: '/pack/xdsl/{packName}/addressMove/moveFtth'): (params: {
        packName: string;
        buildingReference: string;
        floor: string;
        moveOutDate?: string;
        otp: boolean;
        otpReference?: string;
        stair: string;
    }) => Promise<xdsl.AsyncTask<number>>;
    /**
     * moveOffer operations
     * Move the access to another address
     */
    post(path: '/pack/xdsl/{packName}/addressMove/moveOffer'): (params: {
        packName: string;
        acceptContracts: boolean;
        buildingReference: string;
        eligibilityReference: string;
        engageMonths?: number;
        floor: string;
        keepCurrentNumber: boolean;
        mondialRelayId?: number;
        moveOutDate?: string;
        nicShipping?: string;
        offerName: string;
        options?: pack.xdsl.migration.OfferOption[];
        otp: boolean;
        otpReference?: string;
        productCode: string;
        stair: string;
        subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[];
    }) => Promise<xdsl.AsyncTask<number>>;
    /**
     * offers operations
     * Get the possibilities of address move offers available
     */
    post(path: '/pack/xdsl/{packName}/addressMove/offers'): (params: {
        packName: string;
        eligibilityReference: string;
    }) => Promise<xdsl.AsyncTask<pack.xdsl.addressMove.MoveOfferResponse>>;
    /**
     * cancelResiliation operations
     * Cancel the ongoing resiliation
     */
    post(path: '/pack/xdsl/{packName}/cancelResiliation'): (params: {
        packName: string;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/pack/xdsl/{packName}/changeContact'): (params: {
        packName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * List the pack.xdsl.DomainService objects
     * Activate a domain service
     */
    post(path: '/pack/xdsl/{packName}/domain/services'): (params: {
        packName: string;
        action: pack.xdsl.DomainActionEnum;
        authInfo?: string;
        domain: string;
        tld: string;
    }) => Promise<pack.xdsl.Task>;
    /**
     * List the pack.xdsl.EmailProService objects
     * Activate an Email Pro service
     */
    post(path: '/pack/xdsl/{packName}/emailPro/services'): (params: {
        packName: string;
        email: string;
        password: string;
    }) => Promise<pack.xdsl.Task>;
    /**
     * List the pack.xdsl.ExchangeIndividual objects
     * Activate an exchange service
     */
    post(path: '/pack/xdsl/{packName}/exchangeIndividual/services'): (params: {
        packName: string;
        email: string;
        password: string;
    }) => Promise<pack.xdsl.Task>;
    /**
     * List the pack.xdsl.ExchangeLiteService objects
     * Activate a exchange lite service
     */
    post(path: '/pack/xdsl/{packName}/exchangeLite/services'): (params: {
        packName: string;
        antispam?: boolean;
        displayName?: string;
        email: string;
        firstName?: string;
        initials?: string;
        lastName?: string;
        password: string;
    }) => Promise<pack.xdsl.Task>;
    /**
     * List the pack.xdsl.HostedEmailService objects
     * Activate an hosted email service
     */
    post(path: '/pack/xdsl/{packName}/hostedEmail/services'): (params: {
        packName: string;
        email: string;
        password: string;
    }) => Promise<pack.xdsl.Task>;
    /**
     * migrate operations
     * Migrate to the selected offer
     */
    post(path: '/pack/xdsl/{packName}/migration/migrate'): (params: {
        packName: string;
        acceptContracts: boolean;
        buildingReference?: string;
        engageMonths?: number;
        floor?: string;
        mondialRelayId?: number;
        nicShipping?: string;
        offerName: string;
        options?: pack.xdsl.migration.OfferOption[];
        otp?: boolean;
        otpReference?: string;
        stair?: string;
        subServicesToDelete?: pack.xdsl.migration.OfferServiceToDelete[];
    }) => Promise<pack.xdsl.Task>;
    /**
     * offers operations
     * Get the possibilities of migration offers available
     */
    post(path: '/pack/xdsl/{packName}/migration/offers'): (params: {
        packName: string;
    }) => Promise<xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>>;
    /**
     * servicesToDelete operations
     * Calculate services to delete with new offer and options
     */
    post(path: '/pack/xdsl/{packName}/migration/servicesToDelete'): (params: {
        packName: string;
        offerName: string;
        options?: pack.xdsl.migration.OfferOption[];
    }) => Promise<pack.xdsl.migration.SubServiceToDelete[]>;
    /**
     * generate operations
     * Creates a task to generate a new promotion code
     */
    post(path: '/pack/xdsl/{packName}/promotionCode/generate'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.Task>;
    /**
     * resiliate operations
     * Resiliate the pack
     */
    post(path: '/pack/xdsl/{packName}/resiliate'): (params: {
        packName: string;
        resiliationDate?: string;
        resiliationSurvey: pack.xdsl.ResiliationSurvey;
        servicesToKeep?: number[];
    }) => Promise<pack.xdsl.ResiliationFollowUpDetail>;
    /**
     * List the pack.xdsl.SiteBuilderFullService objects
     * Activate a sitebuilder full service
     */
    post(path: '/pack/xdsl/{packName}/siteBuilderFull/services'): (params: {
        packName: string;
        domain: string;
        subdomain: string;
        templateId: number;
    }) => Promise<pack.xdsl.Task>;
    /**
     * List the pack.xdsl.SiteBuilderStartService objects
     * Activate a sitebuilder full service
     */
    post(path: '/pack/xdsl/{packName}/siteBuilderStart/services'): (params: {
        packName: string;
        domain: string;
        subdomain: string;
        templateId: number;
    }) => Promise<pack.xdsl.Task>;
    /**
     * List the pack.xdsl.VoipEcoFaxService objects
     * Activate a voicefax service
     */
    post(path: '/pack/xdsl/{packName}/voipEcofax/services'): (params: {
        packName: string;
    }) => Promise<pack.xdsl.Task>;
    /**
     * customShippingAddress operations
     * Create a new shippingId to be used for voipLine service creation
     */
    post(path: '/pack/xdsl/{packName}/voipLine/options/customShippingAddress'): (params: {
        packName: string;
        address: string;
        cityName: string;
        firstName: string;
        lastName: string;
        zipCode: string;
    }) => Promise<number>;
    /**
     * List the pack.xdsl.VoipLineService objects
     * Activate a voip line service
     */
    post(path: '/pack/xdsl/{packName}/voipLine/services'): (params: {
        packName: string;
        hardwareNames: string[];
        mondialRelayId?: string;
        shippingId?: string;
    }) => Promise<pack.xdsl.VoIPLineOrder>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type xdslDslTypeEnum = xdsl.DslTypeEnum;
declare type xdsleligibilityAddress = xdsl.eligibility.Address;
declare type xdsleligibilityBookMeetingSlot = xdsl.eligibility.BookMeetingSlot;
declare type xdsleligibilityPortability = xdsl.eligibility.Portability;
declare type xdsleligibilityLandlineStatusEnum = xdsl.eligibility.LandlineStatusEnum;
declare type xdslDeconsolidationEnum = xdsl.DeconsolidationEnum;
declare type xdslLineSectionLength = xdsl.LineSectionLength;
declare type xdsleligibilityMeetingSlots = xdsl.eligibility.MeetingSlots;
declare type xdsleligibilityProviderEnum = xdsl.eligibility.ProviderEnum;

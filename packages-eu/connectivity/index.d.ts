import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /connectivity Models
 * Source: https://eu.api.ovh.com/1.0/connectivity.json
 */
export namespace connectivity {
    /**
     * Operator
     * type fullname: connectivity.OperatorEnum
     */
    export type OperatorEnum = "AXIONE" | "BOUYGUES" | "KOSC" | "ORANGE" | "OVH" | "SFR"
    export namespace eligibility {
        /**
         * Activation type, for copper only
         * type fullname: connectivity.eligibility.ActivationTypeEnum
         */
        export type ActivationTypeEnum = "activate" | "create" | "createNeighbour"
        /**
         * Address
         * interface fullName: connectivity.eligibility.Address.Address
         */
        export interface Address {
            building?: string;
            city: string;
            door?: string;
            floor?: string;
            housingComplex?: string;
            inseeCode: string;
            ownerName?: string;
            stairs?: string;
            streetCode?: string;
            streetName?: string;
            streetNumber?: string;
            zipCode: string;
        }
        /**
         * Details of a Building
         * interface fullName: connectivity.eligibility.Building.Building
         */
        export interface Building {
            name: string;
            nro?: string;
            reference: string;
            stairs?: connectivity.eligibility.BuildingStair[];
            type: connectivity.eligibility.BuildingTypeEnum;
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
         * Represent a city
         * interface fullName: connectivity.eligibility.City.City
         */
        export interface City {
            city: string;
            inseeCode: string;
            locality?: string;
            zipCode: string;
        }
        /**
         * Copper information
         * interface fullName: connectivity.eligibility.CopperInfo.CopperInfo
         */
        export interface CopperInfo {
            availablePairs?: number;
            maxAvailablePairs?: number;
            nra?: string;
            sectionsLengths: connectivity.eligibility.SectionLength[];
            status: connectivity.eligibility.LineStatusEnum;
            underConstruction?: boolean;
            unlistedNumber: boolean;
        }
        /**
         * Eligibility test results
         * interface fullName: connectivity.eligibility.EligibilityTest.EligibilityTest
         */
        export interface EligibilityTest {
            eligibilityReference: string;
            endpoint: connectivity.eligibility.Endpoint;
            offers: connectivity.eligibility.Offer[];
        }
        /**
         * Endpoint information
         * interface fullName: connectivity.eligibility.Endpoint.Endpoint
         */
        export interface Endpoint {
            address?: connectivity.eligibility.Address;
            copperInfo?: connectivity.eligibility.CopperInfo;
            fiberInfo?: connectivity.eligibility.FiberInfo;
            portability?: connectivity.eligibility.Portability;
            reference: string;
            referenceType: connectivity.eligibility.EndpointReferenceTypeEnum;
        }
        /**
         * Endpoint reference type
         * type fullname: connectivity.eligibility.EndpointReferenceTypeEnum
         */
        export type EndpointReferenceTypeEnum = "building" | "lineNumber" | "otp"
        /**
         * Fiber information
         * interface fullName: connectivity.eligibility.FiberInfo.FiberInfo
         */
        export interface FiberInfo {
            buildingName?: string;
            buildingReference: string;
            buildingType: connectivity.eligibility.BuildingTypeEnum;
            nro?: string;
            operatorCode: string;
            operatorName: string;
        }
        /**
         * Installation type, for fiber only
         * type fullname: connectivity.eligibility.InstallationTypeEnum
         */
        export type InstallationTypeEnum = "activate" | "activate_undefined" | "create" | "multiOtp"
        /**
         * Copper line details
         * interface fullName: connectivity.eligibility.Line.Line
         */
        export interface Line {
            address: connectivity.eligibility.Address;
            copperInfo: connectivity.eligibility.CopperInfo;
            lineNumber: string;
        }
        /**
         * Line status
         * type fullname: connectivity.eligibility.LineStatusEnum
         */
        export type LineStatusEnum = "active" | "inactive"
        /**
         * Represents meeting booking options
         * interface fullName: connectivity.eligibility.MeetingCapacities.MeetingCapacities
         */
        export interface MeetingCapacities {
            eRdv: boolean;
            phoneCall: boolean;
        }
        /**
         * Represents a time slot for a meeting
         * interface fullName: connectivity.eligibility.MeetingSlot.MeetingSlot
         */
        export interface MeetingSlot {
            endDate: string;
            slotId?: string;
            startDate: string;
            uiCode?: string;
        }
        /**
         * List of available meeting time slots
         * interface fullName: connectivity.eligibility.Meetings.Meetings
         */
        export interface Meetings {
            canBookFakeMeeting: boolean;
            capacities: connectivity.eligibility.MeetingCapacities;
            meetingSlots: connectivity.eligibility.MeetingSlot[];
        }
        /**
         * Message
         * interface fullName: connectivity.eligibility.Message.Message
         */
        export interface Message {
            availabilityDate?: string;
            code: connectivity.eligibility.MessageCodeEnum;
            message: string;
        }
        /**
         * Message codes
         * type fullname: connectivity.eligibility.MessageCodeEnum
         */
        export type MessageCodeEnum = "2006" | "2011" | "2102" | "2103" | "2104" | "2105" | "3009" | "3011" | "3012" | "3013" | "3014" | "3031" | "3040" | "3041" | "3043" | "3044" | "3045" | "3046" | "3047" | "3048" | "3049" | "ATTENUATION_LIMIT" | "COMPATIBILITY_CHECK" | "COPPER_NOT_AVAILABLE" | "COPPER_NOT_YET_AVAILABLE" | "DELAY_30" | "DELAY_7" | "EXTERNAL_WS_UNREACHABLE" | "FIBER_NOT_AVAILABLE" | "FIBER_NOT_DEPLOYED_IN_BUILDING" | "FIBER_NOT_YET_AVAILABLE" | "FIBER_NOT_YET_DEPLOYED" | "INCOMPATIBLE_LOCAL_LOOP" | "NETWORK_SATURATED" | "OTP_NOT_CONNECTABLE" | "OTP_NOT_MARKETABLE" | "PAIRS_SATURATION" | "PRODUCT_NOT_AVAILABLE" | "PRODUCT_NOT_YET_AVAILABLE" | "TOO_MUCH_ATTENUATION" | "UNCERTAIN_DATA"
        /**
         * Offer
         * interface fullName: connectivity.eligibility.Offer.Offer
         */
        export interface Offer {
            eligibility: connectivity.eligibility.OfferEligibility;
            product: connectivity.eligibility.OfferProduct;
        }
        /**
         * Offer eligibility
         * interface fullName: connectivity.eligibility.OfferEligibility.OfferEligibility
         */
        export interface OfferEligibility {
            activationTypes: connectivity.eligibility.ActivationTypeEnum[];
            eligible: boolean;
            estimatedDownloadRate?: number;
            estimatedUploadRate?: number;
            multiOtp?: boolean;
            reasons: connectivity.eligibility.Message[];
            underConditions: connectivity.eligibility.Message[];
        }
        /**
         * Offer product
         * interface fullName: connectivity.eligibility.OfferProduct.OfferProduct
         */
        export interface OfferProduct {
            code: string;
            downloadRate: number;
            grt: string[];
            guaranteed: boolean;
            name: string;
            operator: connectivity.eligibility.OfferProductProviderEnum;
            pairs?: number;
            provider: connectivity.eligibility.OfferProductProviderEnum;
            type: connectivity.eligibility.OfferProductTypeEnum;
            unbundlingType?: connectivity.eligibility.OfferProductUnbundlingTypeEnum;
            uploadRate: number;
        }
        /**
         * Offer product provider
         * type fullname: connectivity.eligibility.OfferProductProviderEnum
         */
        export type OfferProductProviderEnum = "AI" | "ALTERNATIVE" | "AX" | "AXIONE" | "BOUYGUES" | "COVAGE" | "FI" | "KOSC" | "OR" | "ORANGE" | "OS" | "REFERENCE" | "SFR" | "TF"
        /**
         * Offer product type
         * type fullname: connectivity.eligibility.OfferProductTypeEnum
         */
        export type OfferProductTypeEnum = "ADSL" | "FTTE" | "FTTH" | "SDSL" | "VDSL"
        /**
         * Offer product unbundling type
         * type fullname: connectivity.eligibility.OfferProductUnbundlingTypeEnum
         */
        export type OfferProductUnbundlingTypeEnum = "full" | "partial"
        /**
         * Portability details of the line number
         * interface fullName: connectivity.eligibility.Portability.Portability
         */
        export interface Portability {
            eligibility: connectivity.eligibility.PortabilityEligibility;
            quarantineEndDate?: string;
            type?: connectivity.eligibility.PortabilityTypeEnum;
        }
        /**
         * Portability eligibility
         * interface fullName: connectivity.eligibility.PortabilityEligibility.PortabilityEligibility
         */
        export interface PortabilityEligibility {
            eligible: boolean;
            reasons: connectivity.eligibility.Message[];
            underConditions: connectivity.eligibility.Message[];
        }
        /**
         * Portability type
         * type fullname: connectivity.eligibility.PortabilityTypeEnum
         */
        export type PortabilityTypeEnum = "portin" | "portinback" | "portout" | "subsequent" | "subsquentportin"
        /**
         * Section length of a copper line
         * interface fullName: connectivity.eligibility.SectionLength.SectionLength
         */
        export interface SectionLength {
            diameter: number;
            length: number;
        }
        /**
         * Details of a street
         * interface fullName: connectivity.eligibility.Street.Street
         */
        export interface Street {
            streetCode: string;
            streetName: string;
        }
        /**
         * Details of a street number struct
         * interface fullName: connectivity.eligibility.StreetNumberDetails.StreetNumberDetails
         */
        export interface StreetNumberDetails {
            hexacle?: string;
            number: string;
        }
        export namespace search {
            /**
             * Search cities
             * interface fullName: connectivity.eligibility.search.Cities.Cities
             */
            export interface Cities {
                zipCode: string;
            }
            export namespace buildingDetails {
                /**
                 * Building details
                 * interface fullName: connectivity.eligibility.search.buildingDetails.post.post
                 */
                export interface post {
                    building: string;
                }
            }
            export namespace buildings {
                /**
                 * connectivity.eligibility.search.buildings.post
                 * interface fullName: connectivity.eligibility.search.buildings.post.post
                 */
                export interface post {
                    hexacle: string;
                    streetCode: string;
                    streetNumber: string;
                }
            }
            export namespace buildingsByLine {
                /**
                 * connectivity.eligibility.search.buildingsByLine.post
                 * interface fullName: connectivity.eligibility.search.buildingsByLine.post.post
                 */
                export interface post {
                    lineNumber: string;
                    status: connectivity.eligibility.LineStatusEnum;
                }
            }
            export namespace lines {
                /**
                 * connectivity.eligibility.search.lines.post
                 * interface fullName: connectivity.eligibility.search.lines.post.post
                 */
                export interface post {
                    ownerName: string;
                    streetCode: string;
                    streetNumber: string;
                }
            }
            export namespace meetings {
                /**
                 * connectivity.eligibility.search.meetings.post
                 * interface fullName: connectivity.eligibility.search.meetings.post.post
                 */
                export interface post {
                    eligibilityReference: string;
                    installationType: connectivity.eligibility.InstallationTypeEnum;
                    planCode: string;
                    productCode: string;
                    siteCompanyName: string;
                    type: connectivity.eligibility.OfferProductTypeEnum;
                    unbundlingType: connectivity.eligibility.OfferProductUnbundlingTypeEnum;
                }
            }
            export namespace streetNumbers {
                export namespace details {
                    /**
                     * connectivity.eligibility.search.streetNumbers.details.post
                     * interface fullName: connectivity.eligibility.search.streetNumbers.details.post.post
                     */
                    export interface post {
                        streetCode: string;
                    }
                }
                /**
                 * connectivity.eligibility.search.streetNumbers.post
                 * interface fullName: connectivity.eligibility.search.streetNumbers.post.post
                 */
                export interface post {
                    streetCode: string;
                }
            }
            export namespace streets {
                /**
                 * connectivity.eligibility.search.streets.post
                 * interface fullName: connectivity.eligibility.search.streets.post.post
                 */
                export interface post {
                    inseeCode: string;
                }
            }
        }
        export namespace test {
            export namespace address {
                export namespace partners {
                    /**
                     * connectivity.eligibility.test.address.partners.post
                     * interface fullName: connectivity.eligibility.test.address.partners.post.post
                     */
                    export interface post {
                        streetCode: string;
                        streetNumber: string;
                    }
                }
                /**
                 * connectivity.eligibility.test.address.post
                 * interface fullName: connectivity.eligibility.test.address.post.post
                 */
                export interface post {
                    streetCode: string;
                    streetNumber: string;
                }
            }
            export namespace building {
                /**
                 * connectivity.eligibility.test.building.post
                 * interface fullName: connectivity.eligibility.test.building.post.post
                 */
                export interface post {
                    building: string;
                }
            }
            export namespace line {
                export namespace partners {
                    /**
                     * connectivity.eligibility.test.line.partners.post
                     * interface fullName: connectivity.eligibility.test.line.partners.post.post
                     */
                    export interface post {
                        lineNumber: string;
                        status: connectivity.eligibility.LineStatusEnum;
                        streetCode: string;
                        streetNumber: string;
                    }
                }
                /**
                 * connectivity.eligibility.test.line.post
                 * interface fullName: connectivity.eligibility.test.line.post.post
                 */
                export interface post {
                    lineNumber: string;
                    status: connectivity.eligibility.LineStatusEnum;
                    streetCode: string;
                    streetNumber: string;
                }
            }
            export namespace otp {
                /**
                 * connectivity.eligibility.test.otp.post
                 * interface fullName: connectivity.eligibility.test.otp.post.post
                 */
                export interface post {
                    otp: string;
                }
            }
        }
    }
    export namespace maintenance {
        /**
         * Intervention type
         * type fullname: connectivity.maintenance.InterventionTypeEnum
         */
        export type InterventionTypeEnum = "BACKBONE_MAINTENANCE" | "CARD_SWAP_WITH_IMPACT" | "CLUSTER_AN_ROUTER_MIGRATION" | "CORRECTIVE_MAINTENANCE" | "DSLAM_LINK_UPGRADE_WITHOUT_CARD_SWAP" | "DSLAM_UPGRADE_WITH_IMPACT" | "FIBER_CABLE_LINK_SWAP" | "FIBER_CONNECTION_WITH_IMPACT" | "FIBER_MAINTENANCE" | "FIBER_THIRD_PARTY_WORK_WITH_IMPACT" | "IP_BACKBONE_LINK_MIGRATION_WITH_IMPACT" | "IP_BACKBONE_SWITCH_UPGRADE_WITH_IMPACT" | "IP_MAINTENANCE" | "LEVEL2_DSLAM_MIGRATION" | "LINK_MIGRATION_WITH_DSL_IMPACT" | "LL_THIRD_PARTY_MAINTENANCE_WITH_IMPACT" | "LOOP_AN_ROUTER_MIGRATION" | "LOOP_AN_ROUTER_UPGRADE" | "MAINTENANCE" | "OPTIC_FIBER_WORK_WITH_OUTAGE_DURING_NON_WORKING_HOURS" | "PLANNED_CORRECTIVE_MAINTENANCE" | "SENSITIVE_LOOP_LINK_UPGRADE" | "TRANSMISSION_CORRECTIVE_MAINTENANCE" | "TRANSMISSION_CUSTOMER_TRANSFERT_MIGRATION_WITH_IMPACT" | "TRANSMISSION_FIBRE_MAINTENANCE" | "TRANSMISSION_LINK_COMMISSIONING_PRODUCTION_DECOMMISSIONING_WORK_WITH_IMPACT" | "TRANSMISSION_LINK_TRANSFERT_MIGRATION_WITH_IMPACT" | "TRANSMISSION_MAINTENANCE" | "TRANSMISSION_MOVING_WITH_IMPACT" | "TRANSMISSION_SWITCH_UPGRADE_WITH_IMPACT" | "WITH_IMPACT"
        /**
         * Work Planned operation structure
         * interface fullName: connectivity.maintenance.WorkPlanned.WorkPlanned
         */
        export interface WorkPlanned {
            dateBegin: string;
            dateEnd: string;
            departments?: string[];
            description?: string;
            duration?: string;
            fallback?: boolean;
            fallbackDateBegin?: string;
            fallbackDateEnd?: string;
            id: number;
            impact?: string;
            interventionType: connectivity.maintenance.InterventionTypeEnum;
            nras?: string[];
            operator: connectivity.OperatorEnum;
            technology: string;
            zone?: string;
        }
    }
    export namespace monitoring {
        /**
         * Generic incident structure
         * interface fullName: connectivity.monitoring.GenericIncident.GenericIncident
         */
        export interface GenericIncident {
            comment?: string;
            creationDate: string;
            departments: string[];
            endDate?: string;
            estimatedResolutionDate?: string;
            id: number;
            isNational?: boolean;
            nra: string[];
            operators: connectivity.OperatorEnum[];
            status: connectivity.monitoring.GenericIncidentStatusEnum;
            taskId?: number;
            taskReference?: string;
        }
        /**
         * Generic incident status
         * type fullname: connectivity.monitoring.GenericIncidentStatusEnum
         */
        export type GenericIncidentStatusEnum = "closed" | "detected" | "validated"
    }
}
export namespace xdsl {
    export namespace AsyncTaskArray_connectivity {
        export namespace eligibility {
            /**
             * xdsl.AsyncTaskArray_connectivity.eligibility.Building
             * interface fullName: xdsl.AsyncTaskArray_connectivity.eligibility.Building.Building
             */
            export interface Building {
                error?: string;
                result?: connectivity.eligibility.Building[];
                status: xdsl.AsyncTaskStatusEnum;
            }
            /**
             * xdsl.AsyncTaskArray_connectivity.eligibility.City
             * interface fullName: xdsl.AsyncTaskArray_connectivity.eligibility.City.City
             */
            export interface City {
                error?: string;
                result?: connectivity.eligibility.City[];
                status: xdsl.AsyncTaskStatusEnum;
            }
            /**
             * xdsl.AsyncTaskArray_connectivity.eligibility.Line
             * interface fullName: xdsl.AsyncTaskArray_connectivity.eligibility.Line.Line
             */
            export interface Line {
                error?: string;
                result?: connectivity.eligibility.Line[];
                status: xdsl.AsyncTaskStatusEnum;
            }
            /**
             * xdsl.AsyncTaskArray_connectivity.eligibility.Street
             * interface fullName: xdsl.AsyncTaskArray_connectivity.eligibility.Street.Street
             */
            export interface Street {
                error?: string;
                result?: connectivity.eligibility.Street[];
                status: xdsl.AsyncTaskStatusEnum;
            }
            /**
             * xdsl.AsyncTaskArray_connectivity.eligibility.StreetNumberDetails
             * interface fullName: xdsl.AsyncTaskArray_connectivity.eligibility.StreetNumberDetails.StreetNumberDetails
             */
            export interface StreetNumberDetails {
                error?: string;
                result?: connectivity.eligibility.StreetNumberDetails[];
                status: xdsl.AsyncTaskStatusEnum;
            }
        }
    }
    /**
     * xdsl.AsyncTaskArray_string
     * interface fullName: xdsl.AsyncTaskArray_string.AsyncTaskArray_string
     */
    export interface AsyncTaskArray_string {
        error?: string;
        result?: string[];
        status: xdsl.AsyncTaskStatusEnum;
    }
    /**
     * AsyncTask status
     * type fullname: xdsl.AsyncTaskStatusEnum
     */
    export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
    export namespace AsyncTask_connectivity {
        export namespace eligibility {
            /**
             * xdsl.AsyncTask_connectivity.eligibility.Building
             * interface fullName: xdsl.AsyncTask_connectivity.eligibility.Building.Building
             */
            export interface Building {
                error?: string;
                result?: connectivity.eligibility.Building;
                status: xdsl.AsyncTaskStatusEnum;
            }
            /**
             * xdsl.AsyncTask_connectivity.eligibility.EligibilityTest
             * interface fullName: xdsl.AsyncTask_connectivity.eligibility.EligibilityTest.EligibilityTest
             */
            export interface EligibilityTest {
                error?: string;
                result?: connectivity.eligibility.EligibilityTest;
                status: xdsl.AsyncTaskStatusEnum;
            }
            /**
             * xdsl.AsyncTask_connectivity.eligibility.Meetings
             * interface fullName: xdsl.AsyncTask_connectivity.eligibility.Meetings.Meetings
             */
            export interface Meetings {
                error?: string;
                result: connectivity.eligibility.Meetings;
                status: xdsl.AsyncTaskStatusEnum;
            }
        }
    }
}
/**
 * Api model for /connectivity
 */
export interface Connectivity {
    eligibility: {
        search: {
            buildingDetails: {
                /**
                 * Get the details for a building
                 * POST /connectivity/eligibility/search/buildingDetails
                 */
                $post(params: { building: string }): Promise<xdsl.AsyncTask_connectivity.eligibility.Building>;
            }
            buildings: {
                /**
                 * Get all buildings for a specific address (require at least a couple streetCode/streetNumber or an hexacle)
                 * POST /connectivity/eligibility/search/buildings
                 */
                $post(params?: { hexacle?: string, streetCode?: string, streetNumber?: string }): Promise<xdsl.AsyncTaskArray_connectivity.eligibility.Building>;
            }
            buildingsByLine: {
                /**
                 * Get building references from a given line number
                 * POST /connectivity/eligibility/search/buildingsByLine
                 */
                $post(params: { lineNumber: string, status: connectivity.eligibility.LineStatusEnum }): Promise<xdsl.AsyncTaskArray_connectivity.eligibility.Building>;
            }
            cities: {
                /**
                 * Get all localities linked to a zip code
                 * POST /connectivity/eligibility/search/cities
                 */
                $post(params: { zipCode: string }): Promise<xdsl.AsyncTaskArray_connectivity.eligibility.City>;
            }
            lines: {
                /**
                 * Search for active and inactive lines at an address
                 * POST /connectivity/eligibility/search/lines
                 */
                $post(params: { ownerName?: string, streetCode: string, streetNumber: string }): Promise<xdsl.AsyncTaskArray_connectivity.eligibility.Line>;
            }
            meetings: {
                /**
                 * Search for available copper line creation or fiber installation meeting time slots
                 * POST /connectivity/eligibility/search/meetings
                 */
                $post(params: { eligibilityReference: string, installationType?: connectivity.eligibility.InstallationTypeEnum, planCode?: string, productCode?: string, siteCompanyName?: string, type?: connectivity.eligibility.OfferProductTypeEnum, unbundlingType?: connectivity.eligibility.OfferProductUnbundlingTypeEnum }): Promise<xdsl.AsyncTask_connectivity.eligibility.Meetings>;
            }
            streetNumbers: {
                /**
                 * Get the available street numbers for a given street code (you can get the unique identifier of a street using the method POST /connectivity/eligibility/search/streets)
                 * POST /connectivity/eligibility/search/streetNumbers
                 */
                $post(params: { streetCode: string }): Promise<xdsl.AsyncTaskArray_string>;
                details: {
                    /**
                     * Get the available street numbers and their details for a given street code (you can get the unique identifier of a street you can get using the method POST /connectivity/eligibility/search/streets)
                     * POST /connectivity/eligibility/search/streetNumbers/details
                     */
                    $post(params: { streetCode: string }): Promise<xdsl.AsyncTaskArray_connectivity.eligibility.StreetNumberDetails>;
                }
            }
            streets: {
                /**
                 * Get all street linked to a locality
                 * POST /connectivity/eligibility/search/streets
                 */
                $post(params: { inseeCode: string }): Promise<xdsl.AsyncTaskArray_connectivity.eligibility.Street>;
            }
        }
        test: {
            /**
             * Get an eligibility by its reference
             * GET /connectivity/eligibility/test
             */
            $get(params: { eligibilityReference: string }): Promise<connectivity.eligibility.EligibilityTest>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            address: {
                /**
                 * Do an eligibility for an address, if no line exist
                 * POST /connectivity/eligibility/test/address
                 */
                $post(params: { streetCode: string, streetNumber: string }): Promise<xdsl.AsyncTask_connectivity.eligibility.EligibilityTest>;
                partners: {
                    /**
                     * Do an eligibility for an address, if no line exist. Partners only.
                     * POST /connectivity/eligibility/test/address/partners
                     */
                    $post(params: { streetCode: string, streetNumber: string }): Promise<xdsl.AsyncTask_connectivity.eligibility.EligibilityTest>;
                }
            }
            building: {
                /**
                 * Do an eligibility test on a building, for fiber only
                 * POST /connectivity/eligibility/test/building
                 */
                $post(params: { building: string }): Promise<xdsl.AsyncTask_connectivity.eligibility.EligibilityTest>;
            }
            line: {
                /**
                 * Do an eligibility test on a line number, for copper only
                 * POST /connectivity/eligibility/test/line
                 */
                $post(params: { lineNumber: string, status: connectivity.eligibility.LineStatusEnum, streetCode?: string, streetNumber?: string }): Promise<xdsl.AsyncTask_connectivity.eligibility.EligibilityTest>;
                partners: {
                    /**
                     * Do an eligibility test on a line number, for copper only. Partners only.
                     * POST /connectivity/eligibility/test/line/partners
                     */
                    $post(params: { lineNumber: string, status: connectivity.eligibility.LineStatusEnum, streetCode?: string, streetNumber?: string }): Promise<xdsl.AsyncTask_connectivity.eligibility.EligibilityTest>;
                }
            }
            otp: {
                /**
                 * Do an eligibility test on an OTP (Optical Termination Panel), for fiber only
                 * POST /connectivity/eligibility/test/otp
                 */
                $post(params: { otp: string }): Promise<xdsl.AsyncTask_connectivity.eligibility.EligibilityTest>;
            }
        }
    }
    maintenance: {
        workPlanned: {
            partners: {
                /**
                 * List work planned by operators. For partners only
                 * GET /connectivity/maintenance/workPlanned/partners
                 */
                $get(): Promise<connectivity.maintenance.WorkPlanned[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            public: {
                /**
                 * List work planned by operators
                 * GET /connectivity/maintenance/workPlanned/public
                 */
                $get(params?: { beginDate?: string, endDate?: string }): Promise<connectivity.maintenance.WorkPlanned[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
        }
    }
    monitoring: {
        genericIncident: {
            partners: {
                /**
                 * List detected, validated and recently closed generic incidents. For partners only
                 * GET /connectivity/monitoring/genericIncident/partners
                 */
                $get(params?: { creationDate?: string, endDate?: string, status?: connectivity.monitoring.GenericIncidentStatusEnum }): Promise<connectivity.monitoring.GenericIncident[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            public: {
                /**
                 * List validated and recently closed generic incidents
                 * GET /connectivity/monitoring/genericIncident/public
                 */
                $get(params?: { creationDate?: string, endDate?: string, status?: connectivity.monitoring.GenericIncidentStatusEnum }): Promise<connectivity.monitoring.GenericIncident[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
        }
    }
}

export declare function proxyConnectivity(ovhEngine: OvhRequestable): Connectivity;
export default proxyConnectivity;

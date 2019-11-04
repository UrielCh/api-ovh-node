import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /connectivity Models
 */
export namespace connectivity {
    // type fullname: connectivity.OperatorEnum
    export type OperatorEnum = "OVH" | "KOSC" | "SFR" | "ORANGE" | "AXIONE"
    export namespace eligibility {
        // type fullname: connectivity.eligibility.ActivationTypeEnum
        export type ActivationTypeEnum = "activate" | "create" | "createNeighbour"
        // interface fullName: connectivity.eligibility.Address.Address
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
        // interface fullName: connectivity.eligibility.City.City
        export interface City {
            city: string;
            inseeCode: string;
            locality?: string;
            zipCode: string;
        }
        // interface fullName: connectivity.eligibility.CopperInfo.CopperInfo
        export interface CopperInfo {
            availablePairs?: number;
            maxAvailablePairs?: number;
            nra?: string;
            sectionsLengths: connectivity.eligibility.SectionLength[];
            status: connectivity.eligibility.LineStatusEnum;
            underConstruction?: boolean;
            unlistedNumber: boolean;
        }
        // interface fullName: connectivity.eligibility.EligibilityTest.EligibilityTest
        export interface EligibilityTest {
            eligibilityReference: string;
            endpoint: connectivity.eligibility.Endpoint;
            offers: connectivity.eligibility.Offer[];
        }
        // interface fullName: connectivity.eligibility.Endpoint.Endpoint
        export interface Endpoint {
            address: connectivity.eligibility.Address;
            copperInfo?: connectivity.eligibility.CopperInfo;
            fiberInfo?: connectivity.eligibility.FiberInfo;
            portability?: connectivity.eligibility.Portability;
            reference: string;
            referenceType: connectivity.eligibility.EndpointReferenceTypeEnum;
        }
        // type fullname: connectivity.eligibility.EndpointReferenceTypeEnum
        export type EndpointReferenceTypeEnum = "building" | "lineNumber" | "otp"
        // interface fullName: connectivity.eligibility.FiberInfo.FiberInfo
        export interface FiberInfo {
            buildingName: string;
            buildingReference: string;
            buildingType: connectivity.eligibility.BuildingTypeEnum;
            nro?: string;
            operatorCode: string;
            operatorName: string;
        }
        // interface fullName: connectivity.eligibility.Line.Line
        export interface Line {
            address: connectivity.eligibility.Address;
            copperInfo: connectivity.eligibility.CopperInfo;
            lineNumber: string;
        }
        // type fullname: connectivity.eligibility.LineStatusEnum
        export type LineStatusEnum = "active" | "inactive"
        // interface fullName: connectivity.eligibility.MeetingSlot.MeetingSlot
        export interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        // interface fullName: connectivity.eligibility.Meetings.Meetings
        export interface Meetings {
            canBookFakeMeeting: boolean;
            meetingSlots: connectivity.eligibility.MeetingSlot[];
        }
        // interface fullName: connectivity.eligibility.Message.Message
        export interface Message {
            availabilityDate?: string;
            code: connectivity.eligibility.MessageCodeEnum;
            message: string;
        }
        // type fullname: connectivity.eligibility.MessageCodeEnum
        export type MessageCodeEnum = "2006" | "2011" | "2102" | "2103" | "2104" | "2105" | "3009" | "3011" | "3012" | "3013" | "3014" | "3031" | "3040" | "3041" | "3043" | "3044" | "3045" | "3046" | "3047" | "3048" | "3049" | "ATTENUATION_LIMIT" | "COMPATIBILITY_CHECK" | "COPPER_NOT_AVAILABLE" | "COPPER_NOT_YET_AVAILABLE" | "DELAY_30" | "DELAY_7" | "EXTERNAL_WS_UNREACHABLE" | "FIBER_NOT_AVAILABLE" | "FIBER_NOT_DEPLOYED_IN_BUILDING" | "FIBER_NOT_YET_AVAILABLE" | "FIBER_NOT_YET_DEPLOYED" | "INCOMPATIBLE_LOCAL_LOOP" | "NETWORK_SATURATED" | "OTP_NOT_CONNECTABLE" | "OTP_NOT_MARKETABLE" | "PAIRS_SATURATION" | "PRODUCT_NOT_AVAILABLE" | "PRODUCT_NOT_YET_AVAILABLE" | "TOO_MUCH_ATTENUATION" | "UNCERTAIN_DATA"
        // interface fullName: connectivity.eligibility.Offer.Offer
        export interface Offer {
            eligibility: connectivity.eligibility.OfferEligibility;
            product: connectivity.eligibility.OfferProduct;
        }
        // interface fullName: connectivity.eligibility.OfferEligibility.OfferEligibility
        export interface OfferEligibility {
            activationTypes: connectivity.eligibility.ActivationTypeEnum[];
            eligible: boolean;
            estimatedDownloadRate?: number;
            estimatedUploadRate?: number;
            reasons: connectivity.eligibility.Message[];
            underConditions: connectivity.eligibility.Message[];
        }
        // interface fullName: connectivity.eligibility.OfferProduct.OfferProduct
        export interface OfferProduct {
            code: string;
            downloadRate: number;
            grt: string[];
            guaranteed: boolean;
            name: string;
            pairs?: number;
            provider: connectivity.eligibility.OfferProductProviderEnum;
            type: connectivity.eligibility.OfferProductTypeEnum;
            unbundlingType?: connectivity.eligibility.OfferProductUnbundlingTypeEnum;
            uploadRate: number;
        }
        // type fullname: connectivity.eligibility.OfferProductProviderEnum
        export type OfferProductProviderEnum = "AXIONE" | "KOSC" | "ORANGE" | "SFR"
        // type fullname: connectivity.eligibility.OfferProductTypeEnum
        export type OfferProductTypeEnum = "ADSL" | "FTTH" | "SDSL" | "VDSL"
        // type fullname: connectivity.eligibility.OfferProductUnbundlingTypeEnum
        export type OfferProductUnbundlingTypeEnum = "full" | "partial"
        // interface fullName: connectivity.eligibility.Portability.Portability
        export interface Portability {
            eligibility: connectivity.eligibility.PortabilityEligibility;
            quarantineEndDate?: string;
            type?: connectivity.eligibility.PortabilityTypeEnum;
        }
        // interface fullName: connectivity.eligibility.PortabilityEligibility.PortabilityEligibility
        export interface PortabilityEligibility {
            eligible: boolean;
            reasons: connectivity.eligibility.Message[];
            underConditions: connectivity.eligibility.Message[];
        }
        // type fullname: connectivity.eligibility.PortabilityTypeEnum
        export type PortabilityTypeEnum = "portin" | "portinback" | "portout" | "subsequent" | "subsquentportin"
        // interface fullName: connectivity.eligibility.SectionLength.SectionLength
        export interface SectionLength {
            diameter: number;
            length: number;
        }
        // interface fullName: connectivity.eligibility.Street.Street
        export interface Street {
            streetCode: string;
            streetName: string;
        }
    }
    export namespace maintenance {
        // type fullname: connectivity.maintenance.InterventionTypeEnum
        export type InterventionTypeEnum = "BACKBONE_MAINTENANCE" | "CARD_SWAP_WITH_IMPACT" | "CLUSTER_AN_ROUTER_MIGRATION" | "DSLAM_LINK_UPGRADE_WITHOUT_CARD_SWAP" | "DSLAM_UPGRADE_WITH_IMPACT" | "FIBER_CABLE_LINK_SWAP" | "FIBER_CONNECTION_WITH_IMPACT" | "FIBER_MAINTENANCE" | "FIBER_THIRD_PARTY_WORK_WITH_IMPACT" | "IP_BACKBONE_LINK_MIGRATION_WITH_IMPACT" | "IP_BACKBONE_SWITCH_UPGRADE_WITH_IMPACT" | "IP_MAINTENANCE" | "LEVEL2_DSLAM_MIGRATION" | "LINK_MIGRATION_WITH_DSL_IMPACT" | "LL_THIRD_PARTY_MAINTENANCE_WITH_IMPACT" | "LOOP_AN_ROUTER_MIGRATION" | "LOOP_AN_ROUTER_UPGRADE" | "MAINTENANCE" | "OPTIC_FIBER_WORK_WITH_OUTAGE_DURING_NON_WORKING_HOURS" | "PLANNED_CORRECTIVE_MAINTENANCE" | "SENSITIVE_LOOP_LINK_UPGRADE" | "TRANSMISSION_CORRECTIVE_MAINTENANCE" | "TRANSMISSION_CUSTOMER_TRANSFERT_MIGRATION_WITH_IMPACT" | "TRANSMISSION_FIBRE_MAINTENANCE" | "TRANSMISSION_LINK_COMMISSIONING_PRODUCTION_DECOMMISSIONING_WORK_WITH_IMPACT" | "TRANSMISSION_LINK_TRANSFERT_MIGRATION_WITH_IMPACT" | "TRANSMISSION_MAINTENANCE" | "TRANSMISSION_MOVING_WITH_IMPACT" | "TRANSMISSION_SWITCH_UPGRADE_WITH_IMPACT" | "WITH_IMPACT"
        // interface fullName: connectivity.maintenance.WorkPlanned.WorkPlanned
        export interface WorkPlanned {
            dateBegin: string;
            dateEnd: string;
            id: number;
            interventionType: connectivity.maintenance.InterventionTypeEnum;
            operator: connectivity.OperatorEnum;
            technology: string;
        }
    }
    export namespace monitoring {
        // interface fullName: connectivity.monitoring.GenericIncident.GenericIncident
        export interface GenericIncident {
            comment?: string;
            creationDate: string;
            departments: string[];
            endDate?: string;
            id: number;
            nra: string[];
            operators: connectivity.OperatorEnum[];
            status: connectivity.monitoring.GenericIncidentStatusEnum;
            taskId?: number;
        }
        // type fullname: connectivity.monitoring.GenericIncidentStatusEnum
        export type GenericIncidentStatusEnum = "detected" | "validated" | "closed"
    }
}
export namespace xdsl {
    // interface fullName: xdsl.AsyncTask<T>.AsyncTask
    export interface AsyncTask<T> {
        error?: string;
        result?: T;
        status: xdsl.AsyncTaskStatusEnum;
    }
    // interface fullName: xdsl.AsyncTaskArray<T>.AsyncTaskArray
    export interface AsyncTaskArray<T> {
        error?: string;
        result?: T[];
        status: xdsl.AsyncTaskStatusEnum;
    }
    // type fullname: xdsl.AsyncTaskStatusEnum
    export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
}

/**
 * END API /connectivity Models
 */
export function proxyConnectivity(ovhEngine: OvhRequestable): Connectivity {
    return buildOvhProxy(ovhEngine, '/connectivity');
}
export default proxyConnectivity;
/**
 * Api Proxy model
 */// Apis harmony
// path /connectivity
export interface Connectivity{
    eligibility: {
        search: {
            buildingDetails: {
                // POST /connectivity/eligibility/search/buildingDetails
                $post(params: {building: string}): Promise<xdsl.AsyncTask<connectivity.eligibility.Building>>;
            }
            buildings: {
                // POST /connectivity/eligibility/search/buildings
                $post(params: {streetCode: string, streetNumber: string}): Promise<xdsl.AsyncTaskArray<connectivity.eligibility.Building>>;
            }
            buildingsByLine: {
                // POST /connectivity/eligibility/search/buildingsByLine
                $post(params: {lineNumber: string, status: connectivity.eligibility.LineStatusEnum}): Promise<xdsl.AsyncTaskArray<connectivity.eligibility.Building>>;
            }
            cities: {
                // POST /connectivity/eligibility/search/cities
                $post(params: {zipCode: string}): Promise<xdsl.AsyncTaskArray<connectivity.eligibility.City>>;
            }
            lines: {
                // POST /connectivity/eligibility/search/lines
                $post(params: {ownerName?: string, streetCode: string, streetNumber: string}): Promise<xdsl.AsyncTaskArray<connectivity.eligibility.Line>>;
            }
            meetings: {
                // POST /connectivity/eligibility/search/meetings
                $post(params: {eligibilityReference: string, productCode: string}): Promise<xdsl.AsyncTask<connectivity.eligibility.Meetings>>;
            }
            streetNumbers: {
                // POST /connectivity/eligibility/search/streetNumbers
                $post(params: {streetCode: string}): Promise<xdsl.AsyncTaskArray<string>>;
            }
            streets: {
                // POST /connectivity/eligibility/search/streets
                $post(params: {inseeCode: string}): Promise<xdsl.AsyncTaskArray<connectivity.eligibility.Street>>;
            }
        }
        test: {
            // GET /connectivity/eligibility/test
            $get(params: {eligibilityReference: string}): Promise<connectivity.eligibility.EligibilityTest>;
            address: {
                // POST /connectivity/eligibility/test/address
                $post(params: {streetCode: string, streetNumber: string}): Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
                partners: {
                    // POST /connectivity/eligibility/test/address/partners
                    $post(params: {streetCode: string, streetNumber: string}): Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
                }
            }
            building: {
                // POST /connectivity/eligibility/test/building
                $post(params: {building: string}): Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
            }
            line: {
                // POST /connectivity/eligibility/test/line
                $post(params: {lineNumber: string, status: connectivity.eligibility.LineStatusEnum}): Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
                partners: {
                    // POST /connectivity/eligibility/test/line/partners
                    $post(params: {lineNumber: string, status: connectivity.eligibility.LineStatusEnum}): Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
                }
            }
            otp: {
                // POST /connectivity/eligibility/test/otp
                $post(params: {otp: string}): Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
            }
        }
    }
    maintenance: {
        workPlanned: {
            partners: {
                // GET /connectivity/maintenance/workPlanned/partners
                $get(): Promise<connectivity.maintenance.WorkPlanned[]>;
            }
        }
    }
    monitoring: {
        genericIncident: {
            partners: {
                // GET /connectivity/monitoring/genericIncident/partners
                $get(params?: {creationDate?: string, endDate?: string, status?: connectivity.monitoring.GenericIncidentStatusEnum}): Promise<connectivity.monitoring.GenericIncident[]>;
            }
            public: {
                // GET /connectivity/monitoring/genericIncident/public
                $get(params?: {creationDate?: string, endDate?: string, status?: connectivity.monitoring.GenericIncidentStatusEnum}): Promise<connectivity.monitoring.GenericIncident[]>;
            }
        }
    }
// Api
  /**
   * Get an eligibility by its reference
   * Get an eligibility by its reference
   */
  get(path: '/connectivity/eligibility/test'): (params: {eligibilityReference: string}) => Promise<connectivity.eligibility.EligibilityTest>;
  /**
   * Missing description
   * List work planned by operators. For partners only
   */
  get(path: '/connectivity/maintenance/workPlanned/partners'): () => Promise<connectivity.maintenance.WorkPlanned[]>;
  /**
   * Missing description
   * List detected, validated and recently closed generic incidents. For partners only
   */
  get(path: '/connectivity/monitoring/genericIncident/partners'): (params?: {creationDate?: string, endDate?: string, status?: connectivity.monitoring.GenericIncidentStatusEnum}) => Promise<connectivity.monitoring.GenericIncident[]>;
  /**
   * Missing description
   * List validated and recently closed generic incidents
   */
  get(path: '/connectivity/monitoring/genericIncident/public'): (params?: {creationDate?: string, endDate?: string, status?: connectivity.monitoring.GenericIncidentStatusEnum}) => Promise<connectivity.monitoring.GenericIncident[]>;
  /**
   * Get the details for a building
   * Get the details for a building
   */
  post(path: '/connectivity/eligibility/search/buildingDetails'): (params: {building: string}) => Promise<xdsl.AsyncTask<connectivity.eligibility.Building>>;
  /**
   * Get all buildings for a specific address
   * Get all buildings for a specific address
   */
  post(path: '/connectivity/eligibility/search/buildings'): (params: {streetCode: string, streetNumber: string}) => Promise<xdsl.AsyncTaskArray<connectivity.eligibility.Building>>;
  /**
   * Get building references from a given line number
   * Get building references from a given line number
   */
  post(path: '/connectivity/eligibility/search/buildingsByLine'): (params: {lineNumber: string, status: connectivity.eligibility.LineStatusEnum}) => Promise<xdsl.AsyncTaskArray<connectivity.eligibility.Building>>;
  /**
   * Get all localities linked to a zip code
   * Get all localities linked to a zip code
   */
  post(path: '/connectivity/eligibility/search/cities'): (params: {zipCode: string}) => Promise<xdsl.AsyncTaskArray<connectivity.eligibility.City>>;
  /**
   * Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified
   * Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified
   */
  post(path: '/connectivity/eligibility/search/lines'): (params: {ownerName?: string, streetCode: string, streetNumber: string}) => Promise<xdsl.AsyncTaskArray<connectivity.eligibility.Line>>;
  /**
   * Search for available line creation meeting time slots, for copper only
   * Search for available line creation meeting time slots, for copper only
   */
  post(path: '/connectivity/eligibility/search/meetings'): (params: {eligibilityReference: string, productCode: string}) => Promise<xdsl.AsyncTask<connectivity.eligibility.Meetings>>;
  /**
   * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)
   * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)
   */
  post(path: '/connectivity/eligibility/search/streetNumbers'): (params: {streetCode: string}) => Promise<xdsl.AsyncTaskArray<string>>;
  /**
   * Get all street linked to a locality
   * Get all street linked to a locality
   */
  post(path: '/connectivity/eligibility/search/streets'): (params: {inseeCode: string}) => Promise<xdsl.AsyncTaskArray<connectivity.eligibility.Street>>;
  /**
   * Do an eligibility for an address, if no line exist
   * Do an eligibility for an address, if no line exist
   */
  post(path: '/connectivity/eligibility/test/address'): (params: {streetCode: string, streetNumber: string}) => Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
  /**
   * Do an eligibility for an address, if no line exist. Partners only.
   * Do an eligibility for an address, if no line exist. Partners only.
   */
  post(path: '/connectivity/eligibility/test/address/partners'): (params: {streetCode: string, streetNumber: string}) => Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
  /**
   * Do an eligibility test on a building, for fiber only
   * Do an eligibility test on a building, for fiber only
   */
  post(path: '/connectivity/eligibility/test/building'): (params: {building: string}) => Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
  /**
   * Do an eligibility test on a line number, for copper only
   * Do an eligibility test on a line number, for copper only
   */
  post(path: '/connectivity/eligibility/test/line'): (params: {lineNumber: string, status: connectivity.eligibility.LineStatusEnum}) => Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
  /**
   * Do an eligibility test on a line number, for copper only. Partners only.
   * Do an eligibility test on a line number, for copper only. Partners only.
   */
  post(path: '/connectivity/eligibility/test/line/partners'): (params: {lineNumber: string, status: connectivity.eligibility.LineStatusEnum}) => Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
  /**
   * Do an eligibility test on an OTP (Optical Termination Panel), for fiber only
   * Do an eligibility test on an OTP (Optical Termination Panel), for fiber only
   */
  post(path: '/connectivity/eligibility/test/otp'): (params: {otp: string}) => Promise<xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>>;
}

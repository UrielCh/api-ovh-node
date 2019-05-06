import { ApiCommon } from '@ovh-api/common';
/**
 * Building type
 */
export type ConnectivityEligibilityBuildingTypeEnum = 'BUILDING' | 'HOUSE';
/**
 * Async task array
 */
export interface XdslAsyncTaskArray<T> {
  /**
   * Result of the call
   *
   */
  result?: T[];
  /**
   * Error
   *
   */
  error?: string;
  /**
   * Status of the call
   *
   */
  status?: XdslAsyncTaskStatusEnum;
}
/**
 * AsyncTask status
 */
export type XdslAsyncTaskStatusEnum = 'error' | 'ok' | 'pending';
/**
 * List of available meeting time slots
 */
export interface ConnectivityEligibilityMeetings {
  /**
   * A time slot
   *
   */
  meetingSlots?: ConnectivityEligibilityMeetingSlot[];
  /**
   * Whether or not it is possible to book a fake meeting
   *
   */
  canBookFakeMeeting?: boolean;
}
/**
 * Eligibility test results
 */
export interface ConnectivityEligibilityEligibilityTest {
  /**
   * Offers informations
   *
   */
  offers?: ConnectivityEligibilityOffer[];
  /**
   * Endpoint informations
   *
   */
  endpoint?: ConnectivityEligibilityEndpoint;
  /**
   * Eligibility unique reference
   *
   */
  eligibilityReference?: string;
}
/**
 * Represents a time slot for a meeting
 */
export interface ConnectivityEligibilityMeetingSlot {
  /**
   * End date
   *
   */
  endDate?: Date;
  /**
   * Start date
   *
   */
  startDate?: Date;
  /**
   * An opaque string that represents an intervention unit
   *
   */
  uiCode?: string;
}
/**
 * Details of a Building
 */
export interface ConnectivityEligibilityBuilding {
  /**
   * Identifier which refer to a building uniquely
   *
   */
  reference?: string;
  /**
   * Stairs for this building
   *
   */
  stairs?: ConnectivityEligibilityBuildingStair[];
  /**
   * Building name
   *
   */
  name?: string;
  /**
   * Building NRO (Optical main distribution frame)
   *
   */
  nro?: string;
  /**
   * Building type
   *
   */
  type?: ConnectivityEligibilityBuildingTypeEnum;
}
/**
 * Offer eligibility
 */
export interface ConnectivityEligibilityOfferEligibility {
  /**
   * Activation type list, for copper only
   *
   */
  activationTypes?: ConnectivityEligibilityActivationTypeEnum[];
  /**
   * Reasons when not eligible, if any
   *
   */
  reasons?: ConnectivityEligibilityMessage[];
  /**
   * Warnings to consider when eligible, if any
   *
   */
  underConditions?: ConnectivityEligibilityMessage[];
  /**
   * Is the endpoint eligible to this offer ?
   *
   */
  eligible?: boolean;
  /**
   * Estimated download rate, for copper and non guaranteed offers only
   *
   */
  estimatedDownloadRate?: Number;
  /**
   * Estimated upload rate, for copper and non guaranteed offers only
   *
   */
  estimatedUploadRate?: Number;
}
/**
 * Generic incident structure
 */
export interface ConnectivityMonitoringGenericIncident {
  /**
   * List of impacted operators
   *
   */
  operators?: ConnectivityOperatorEnum[];
  /**
   * End date, the generic incident is resolved and closed
   *
   */
  endDate?: Date;
  /**
   * Optional comment, that contains some informations and updates about the generic incident
   *
   */
  comment?: string;
  /**
   * List of impacted department codes
   *
   */
  departments?: string[];
  /**
   * Generic incident id
   *
   */
  id?: Number;
  /**
   * List of impacted NRA/NRO
   *
   */
  nra?: string[];
  /**
   * Creation date, the generic incident has been detected
   *
   */
  creationDate?: Date;
  /**
   * Task id
   *
   */
  taskId?: Number;
  /**
   * Status (detected: we detected a potential generic incident, validated: the operators or our tech teams have confirmed the generic incident, closed: the generic incident is resolved and closed)
   *
   */
  status?: ConnectivityMonitoringGenericIncidentStatusEnum;
}
/**
 * Address
 */
export interface ConnectivityEligibilityAddress {
  /**
   * Identifier of the door, if any
   *
   */
  door?: string;
  /**
   * ZIP code
   *
   */
  zipCode?: string;
  /**
   * Street name, hidden for unlisted number
   *
   */
  streetName?: string;
  /**
   * INSEE code
   *
   */
  inseeCode?: string;
  /**
   * Owner name, this information can be restricted
   *
   */
  ownerName?: string;
  /**
   * City name
   *
   */
  city?: string;
  /**
   * Street number, usually a number and an indication if applicable (B for bis, T for ter, etc...) and hidden for unlisted number
   *
   */
  streetNumber?: string;
  /**
   * Name of the housing complex, if any
   *
   */
  housingComplex?: string;
  /**
   * Street code, an unique identifier of the street, hidden for unlisted number
   *
   */
  streetCode?: string;
  /**
   * Identifier of the stair, if any
   *
   */
  stairs?: string;
  /**
   * Identifier of the floor, if any
   *
   */
  floor?: string;
  /**
   * Name of the building, if any
   *
   */
  building?: string;
}
/**
 * Details of a street
 */
export interface ConnectivityEligibilityStreet {
  /**
   * Street name
   *
   */
  streetName?: string;
  /**
   * Identifier which refer to a street uniquely
   *
   */
  streetCode?: string;
}
/**
 * Line status
 */
export type ConnectivityEligibilityLineStatusEnum = 'active' | 'inactive';
/**
 * Section length of a copper line
 */
export interface ConnectivityEligibilitySectionLength {
  /**
   * Diameter in millimeters of the copper line section
   *
   */
  diameter?: Number;
  /**
   * Lenght in meters of the copper line section
   *
   */
  length?: Number;
}
/**
 * Stair details of a Building
 */
export interface ConnectivityEligibilityBuildingStair {
  /**
   * Stair identifier, "_NA_" if no identifier is available
   *
   */
  stair?: string;
  /**
   * List of floor indentifier, "_NA_" if no identifier is available
   *
   */
  floors?: string[];
}
/**
 * Portability type
 */
export type ConnectivityEligibilityPortabilityTypeEnum = 'portin' | 'portinback' | 'portout' | 'subsequent' | 'subsquentportin';
/**
 * Message codes
 */
export type ConnectivityEligibilityMessageCodeEnum = '2006' | '2011' | '2102' | '2103' | '2104' | '2105' | '3009' | '3011' | '3012' | '3013' | '3014' | '3031' | '3040' | '3041' | '3043' | '3044' | '3045' | '3046' | '3047' | '3048' | '3049' | 'ATTENUATION_LIMIT' | 'COMPATIBILITY_CHECK' | 'COPPER_NOT_AVAILABLE' | 'COPPER_NOT_YET_AVAILABLE' | 'DELAY_30' | 'DELAY_7' | 'EXTERNAL_WS_UNREACHABLE' | 'FIBER_NOT_AVAILABLE' | 'FIBER_NOT_DEPLOYED_IN_BUILDING' | 'FIBER_NOT_YET_AVAILABLE' | 'FIBER_NOT_YET_DEPLOYED' | 'INCOMPATIBLE_LOCAL_LOOP' | 'NETWORK_SATURATED' | 'OTP_NOT_CONNECTABLE' | 'OTP_NOT_MARKETABLE' | 'PAIRS_SATURATION' | 'PRODUCT_NOT_AVAILABLE' | 'PRODUCT_NOT_YET_AVAILABLE' | 'TOO_MUCH_ATTENUATION' | 'UNCERTAIN_DATA';
/**
 * Endpoint reference type
 */
export type ConnectivityEligibilityEndpointReferenceTypeEnum = 'building' | 'lineNumber' | 'otp';
/**
 * Offer
 */
export interface ConnectivityEligibilityOffer {
  /**
   * Product informations
   *
   */
  product?: ConnectivityEligibilityOfferProduct;
  /**
   * Eligibility result for the offer
   *
   */
  eligibility?: ConnectivityEligibilityOfferEligibility;
}
/**
 * Async task
 */
export interface XdslAsyncTask<T> {
  /**
   * Result of the call
   *
   */
  result?: T;
  /**
   * Error
   *
   */
  error?: string;
  /**
   * Status of the call
   *
   */
  status?: XdslAsyncTaskStatusEnum;
}
/**
 * Represent a city
 */
export interface ConnectivityEligibilityCity {
  /**
   * Zip code of the city
   *
   */
  zipCode?: string;
  /**
   * INSEE code of the city
   *
   */
  inseeCode?: string;
  /**
   * Name of the city
   *
   */
  city?: string;
  /**
   * Locality (subset of a city)
   *
   */
  locality?: string;
}
/**
 * Activation type, for copper only
 */
export type ConnectivityEligibilityActivationTypeEnum = 'activate' | 'create' | 'createNeighbour';
/**
 * Portability eligibility
 */
export interface ConnectivityEligibilityPortabilityEligibility {
  /**
   * Reasons when not eligible, if any
   *
   */
  reasons?: ConnectivityEligibilityMessage[];
  /**
   * Warnings to consider when eligible, if any
   *
   */
  underConditions?: ConnectivityEligibilityMessage[];
  /**
   * Is the portability eligible for this line ?
   *
   */
  eligible?: boolean;
}
/**
 * Offer product
 */
export interface ConnectivityEligibilityOfferProduct {
  /**
   * Upload rate in Mb
   *
   */
  uploadRate?: Number;
  /**
   * Download rate in Mb
   *
   */
  downloadRate?: Number;
  /**
   * Product code, an unique identifier for the product
   *
   */
  code?: string;
  /**
   * Provider
   *
   */
  provider?: ConnectivityEligibilityOfferProductProviderEnum;
  /**
   * Name
   *
   */
  name?: string;
  /**
   * GRT (Guaranteed Restoration Time) available list
   *
   */
  grt?: string[];
  /**
   * Is the rates guaranteed ?
   *
   */
  guaranteed?: boolean;
  /**
   * Type of the product
   *
   */
  type?: ConnectivityEligibilityOfferProductTypeEnum;
  /**
   * Number of copper pairs required, for copper only
   *
   */
  pairs?: Number;
}
/**
 * Generic incident status
 */
export type ConnectivityMonitoringGenericIncidentStatusEnum = 'detected' | 'validated' | 'closed';
/**
 * Message
 */
export interface ConnectivityEligibilityMessage {
  /**
   * Code of the message
   *
   */
  code?: ConnectivityEligibilityMessageCodeEnum;
  /**
   * Availability date of the offer (if code of non eligibility is COPPER_NOT_YET_AVAILABLE, FIBER_NOT_YET_AVAILABLE or PRODUCT_NOT_YET_AVAILABLE)
   *
   */
  availabilityDate?: Date;
  /**
   * Message
   *
   */
  message?: string;
}
/**
 * Offer product provider
 */
export type ConnectivityEligibilityOfferProductProviderEnum = 'AXIONE' | 'KOSC' | 'ORANGE' | 'SFR';
/**
 * Operator
 */
export type ConnectivityOperatorEnum = 'OVH' | 'KOSC' | 'SFR' | 'ORANGE' | 'AXIONE';
/**
 * Endpoint informations
 */
export interface ConnectivityEligibilityEndpoint {
  /**
   * Reference of the endpoint
   *
   */
  reference?: string;
  /**
   * Portability informations, for copper only
   *
   */
  portability?: ConnectivityEligibilityPortability;
  /**
   * Address
   *
   */
  address?: ConnectivityEligibilityAddress;
  /**
   * Copper informations, if any
   *
   */
  copperInfo?: ConnectivityEligibilityCopperInfo;
  /**
   * Reference type
   *
   */
  referenceType?: ConnectivityEligibilityEndpointReferenceTypeEnum;
  /**
   * Fiber informations, if any
   *
   */
  fiberInfo?: ConnectivityEligibilityFiberInfo;
}
/**
 * Portability details of the line number
 */
export interface ConnectivityEligibilityPortability {
  /**
   * Date of the end of quarantine, if any
   *
   */
  quarantineEndDate?: Date;
  /**
   * Eligibility informations
   *
   */
  eligibility?: ConnectivityEligibilityPortabilityEligibility;
  /**
   * Portability type, if a portability is ongoing
   *
   */
  type?: ConnectivityEligibilityPortabilityTypeEnum;
}
/**
 * Offer product type
 */
export type ConnectivityEligibilityOfferProductTypeEnum = 'ADSL' | 'FTTH' | 'SDSL' | 'VDSL';
/**
 * Copper informations
 */
export interface ConnectivityEligibilityCopperInfo {
  /**
   * Is the number unlisted ? ("sur liste rouge" in french)
   *
   */
  unlistedNumber?: boolean;
  /**
   * Number of maximun available pairs using desaturation. This is given only for an eligibility test.
   *
   */
  maxAvailablePairs?: Number;
  /**
   * Number of available pairs. This is given only for an eligibility test.
   *
   */
  availablePairs?: Number;
  /**
   * Is the line under construction ? This is given only for an eligibility test.
   *
   */
  underConstruction?: boolean;
  /**
   * NRA ("Nœud de raccordement abonné" in french) is an identifier of the building where is the Main Distribution Frames for the copper line. This is given only for an eligibility test.
   *
   */
  nra?: string;
  /**
   * Sections lengths of the copper line. This is given only for an eligibility test.
   *
   */
  sectionsLengths?: ConnectivityEligibilitySectionLength[];
  /**
   * Status of the copper line
   *
   */
  status?: ConnectivityEligibilityLineStatusEnum;
}
/**
 * Fiber informations
 */
export interface ConnectivityEligibilityFiberInfo {
  /**
   * Building name
   *
   */
  buildingName?: string;
  /**
   * NRO ("Nœud de raccordement optique" in french) is an identifier of the building where is the Optical Distribution Frame (ODF) of the fiber
   *
   */
  nro?: string;
  /**
   * Building unique identifier
   *
   */
  buildingReference?: string;
  /**
   * Operator code
   *
   */
  operatorCode?: string;
  /**
   * Operator name
   *
   */
  operatorName?: string;
  /**
   * Building type
   *
   */
  buildingType?: ConnectivityEligibilityBuildingTypeEnum;
}
/**
 * Copper line details
 */
export interface ConnectivityEligibilityLine {
  /**
   * Line address
   *
   */
  address?: ConnectivityEligibilityAddress;
  /**
   * Copper informations
   *
   */
  copperInfo?: ConnectivityEligibilityCopperInfo;
  /**
   * Line number
   *
   */
  lineNumber?: string;
}
type PathsconnectivityGET = '/connectivity/eligibility/test' | 
'/connectivity/monitoring/genericIncident/public' | 
'/connectivity/monitoring/genericIncident/partners';

type PathsconnectivityPOST = '/connectivity/eligibility/test/building' | 
'/connectivity/eligibility/test/line' | 
'/connectivity/eligibility/test/line/partners' | 
'/connectivity/eligibility/test/otp' | 
'/connectivity/eligibility/test/address' | 
'/connectivity/eligibility/test/address/partners' | 
'/connectivity/eligibility/search/streetNumbers' | 
'/connectivity/eligibility/search/streets' | 
'/connectivity/eligibility/search/lines' | 
'/connectivity/eligibility/search/buildingDetails' | 
'/connectivity/eligibility/search/buildings' | 
'/connectivity/eligibility/search/buildingsByLine' | 
'/connectivity/eligibility/search/meetings' | 
'/connectivity/eligibility/search/cities';

class Apiconnectivity extends ApiCommon {
  /**
  Get an eligibility by its reference
  Get an eligibility by its reference
  **/
  public get(path: '/connectivity/eligibility/test', pathParams: null, queryParams: {eligibilityReference?: string}): Promise<ConnectivityEligibilityEligibilityTest>;
  /**
  Missing description
  List validated and recently closed generic incidents
  **/
  public get(path: '/connectivity/monitoring/genericIncident/public', pathParams: null, queryParams: {status?: ConnectivityMonitoringGenericIncidentStatusEnum, creationDate?: Date, endDate?: Date}): Promise<ConnectivityMonitoringGenericIncident[]>;
  /**
  Missing description
  List detected, validated and recently closed generic incidents. For partners only
  **/
  public get(path: '/connectivity/monitoring/genericIncident/partners', pathParams: null, queryParams: {status?: ConnectivityMonitoringGenericIncidentStatusEnum, creationDate?: Date, endDate?: Date}): Promise<ConnectivityMonitoringGenericIncident[]>;
  public get(path: PathsconnectivityGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Do an eligibility test on a building, for fiber only
  Do an eligibility test on a building, for fiber only
  **/
  public post(path: '/connectivity/eligibility/test/building', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility test on a line number, for copper only
  Do an eligibility test on a line number, for copper only
  **/
  public post(path: '/connectivity/eligibility/test/line', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility test on a line number, for copper only. Partners only.
  Do an eligibility test on a line number, for copper only. Partners only.
  **/
  public post(path: '/connectivity/eligibility/test/line/partners', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility test on an OTP (Optical Termination Panel), for fiber only
  Do an eligibility test on an OTP (Optical Termination Panel), for fiber only
  **/
  public post(path: '/connectivity/eligibility/test/otp', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility for an address, if no line exist
  Do an eligibility for an address, if no line exist
  **/
  public post(path: '/connectivity/eligibility/test/address', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility for an address, if no line exist. Partners only.
  Do an eligibility for an address, if no line exist. Partners only.
  **/
  public post(path: '/connectivity/eligibility/test/address/partners', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)
  Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)
  **/
  public post(path: '/connectivity/eligibility/search/streetNumbers', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<string>>;
  /**
  Get all street linked to a locality
  Get all street linked to a locality
  **/
  public post(path: '/connectivity/eligibility/search/streets', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<ConnectivityEligibilityStreet>>;
  /**
  Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified
  Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified
  **/
  public post(path: '/connectivity/eligibility/search/lines', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<ConnectivityEligibilityLine>>;
  /**
  Get the details for a building
  Get the details for a building
  **/
  public post(path: '/connectivity/eligibility/search/buildingDetails', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTask<ConnectivityEligibilityBuilding>>;
  /**
  Get all buildings for a specific address
  Get all buildings for a specific address
  **/
  public post(path: '/connectivity/eligibility/search/buildings', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<ConnectivityEligibilityBuilding>>;
  /**
  Get building references from a given line number
  Get building references from a given line number
  **/
  public post(path: '/connectivity/eligibility/search/buildingsByLine', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<ConnectivityEligibilityBuilding>>;
  /**
  Search for available line creation meeting time slots, for copper only
  Search for available line creation meeting time slots, for copper only
  **/
  public post(path: '/connectivity/eligibility/search/meetings', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTask<ConnectivityEligibilityMeetings>>;
  /**
  Get all localities linked to a zip code
  Get all localities linked to a zip code
  **/
  public post(path: '/connectivity/eligibility/search/cities', pathParams: null, queryParams: null, bodyParams: null): Promise<XdslAsyncTaskArray<ConnectivityEligibilityCity>>;
  public post(path: PathsconnectivityPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}

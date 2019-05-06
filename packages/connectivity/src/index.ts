import { ApiCommon } from '@ovh-api/common';
/**
 * Operator
 */
export type ConnectivityOperatorEnum = 'AXIONE' | 'KOSC' | 'ORANGE' | 'OVH' | 'SFR';
/**
 * Activation type, for copper only
 */
export type ConnectivityEligibilityActivationTypeEnum = 'activate' | 'create' | 'createNeighbour';
/**
 * Address
 */
export interface ConnectivityEligibilityAddress {
  /**
   * Name of the building, if any
   *
   */
  building?: string;
  /**
   * City name
   *
   */
  city?: string;
  /**
   * Identifier of the door, if any
   *
   */
  door?: string;
  /**
   * Identifier of the floor, if any
   *
   */
  floor?: string;
  /**
   * Name of the housing complex, if any
   *
   */
  housingComplex?: string;
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
   * Identifier of the stair, if any
   *
   */
  stairs?: string;
  /**
   * Street code, an unique identifier of the street, hidden for unlisted number
   *
   */
  streetCode?: string;
  /**
   * Street name, hidden for unlisted number
   *
   */
  streetName?: string;
  /**
   * Street number, usually a number and an indication if applicable (B for bis, T for ter, etc...) and hidden for unlisted number
   *
   */
  streetNumber?: string;
  /**
   * ZIP code
   *
   */
  zipCode?: string;
}
/**
 * Details of a Building
 */
export interface ConnectivityEligibilityBuilding {
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
   * Building type
   *
   */
  type?: ConnectivityEligibilityBuildingTypeEnum;
}
/**
 * Stair details of a Building
 */
export interface ConnectivityEligibilityBuildingStair {
  /**
   * List of floor indentifier, "_NA_" if no identifier is available
   *
   */
  floors?: string[];
  /**
   * Stair identifier, "_NA_" if no identifier is available
   *
   */
  stair?: string;
}
/**
 * Building type
 */
export type ConnectivityEligibilityBuildingTypeEnum = 'BUILDING' | 'HOUSE';
/**
 * Represent a city
 */
export interface ConnectivityEligibilityCity {
  /**
   * Name of the city
   *
   */
  city?: string;
  /**
   * INSEE code of the city
   *
   */
  inseeCode?: string;
  /**
   * Locality (subset of a city)
   *
   */
  locality?: string;
  /**
   * Zip code of the city
   *
   */
  zipCode?: string;
}
/**
 * Copper informations
 */
export interface ConnectivityEligibilityCopperInfo {
  /**
   * Number of available pairs. This is given only for an eligibility test.
   *
   */
  availablePairs?: Number;
  /**
   * Number of maximun available pairs using desaturation. This is given only for an eligibility test.
   *
   */
  maxAvailablePairs?: Number;
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
  /**
   * Is the line under construction ? This is given only for an eligibility test.
   *
   */
  underConstruction?: boolean;
  /**
   * Is the number unlisted ? ("sur liste rouge" in french)
   *
   */
  unlistedNumber?: boolean;
}
/**
 * Eligibility test results
 */
export interface ConnectivityEligibilityEligibilityTest {
  /**
   * Eligibility unique reference
   *
   */
  eligibilityReference?: string;
  /**
   * Endpoint informations
   *
   */
  endpoint?: ConnectivityEligibilityEndpoint;
  /**
   * Offers informations
   *
   */
  offers?: ConnectivityEligibilityOffer[];
}
/**
 * Endpoint informations
 */
export interface ConnectivityEligibilityEndpoint {
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
   * Fiber informations, if any
   *
   */
  fiberInfo?: ConnectivityEligibilityFiberInfo;
  /**
   * Portability informations, for copper only
   *
   */
  portability?: ConnectivityEligibilityPortability;
  /**
   * Reference of the endpoint
   *
   */
  reference?: string;
  /**
   * Reference type
   *
   */
  referenceType?: ConnectivityEligibilityEndpointReferenceTypeEnum;
}
/**
 * Endpoint reference type
 */
export type ConnectivityEligibilityEndpointReferenceTypeEnum = 'building' | 'lineNumber' | 'otp';
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
   * Building unique identifier
   *
   */
  buildingReference?: string;
  /**
   * Building type
   *
   */
  buildingType?: ConnectivityEligibilityBuildingTypeEnum;
  /**
   * NRO ("Nœud de raccordement optique" in french) is an identifier of the building where is the Optical Distribution Frame (ODF) of the fiber
   *
   */
  nro?: string;
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
/**
 * Line status
 */
export type ConnectivityEligibilityLineStatusEnum = 'active' | 'inactive';
/**
 * Represents a time slot for a meeting
 */
export interface ConnectivityEligibilityMeetingSlot {
  /**
   * End date
   *
   */
  endDate?: string;
  /**
   * Start date
   *
   */
  startDate?: string;
  /**
   * An opaque string that represents an intervention unit
   *
   */
  uiCode?: string;
}
/**
 * List of available meeting time slots
 */
export interface ConnectivityEligibilityMeetings {
  /**
   * Whether or not it is possible to book a fake meeting
   *
   */
  canBookFakeMeeting?: boolean;
  /**
   * A time slot
   *
   */
  meetingSlots?: ConnectivityEligibilityMeetingSlot[];
}
/**
 * Message
 */
export interface ConnectivityEligibilityMessage {
  /**
   * Availability date of the offer (if code of non eligibility is COPPER_NOT_YET_AVAILABLE, FIBER_NOT_YET_AVAILABLE or PRODUCT_NOT_YET_AVAILABLE)
   *
   */
  availabilityDate?: string;
  /**
   * Code of the message
   *
   */
  code?: ConnectivityEligibilityMessageCodeEnum;
  /**
   * Message
   *
   */
  message?: string;
}
/**
 * Message codes
 */
export type ConnectivityEligibilityMessageCodeEnum = '2006' | '2011' | '2102' | '2103' | '2104' | '2105' | '3009' | '3011' | '3012' | '3013' | '3014' | '3031' | '3040' | '3041' | '3043' | '3044' | '3045' | '3046' | '3047' | '3048' | '3049' | 'ATTENUATION_LIMIT' | 'COMPATIBILITY_CHECK' | 'COPPER_NOT_AVAILABLE' | 'COPPER_NOT_YET_AVAILABLE' | 'DELAY_30' | 'DELAY_7' | 'EXTERNAL_WS_UNREACHABLE' | 'FIBER_NOT_AVAILABLE' | 'FIBER_NOT_DEPLOYED_IN_BUILDING' | 'FIBER_NOT_YET_AVAILABLE' | 'FIBER_NOT_YET_DEPLOYED' | 'INCOMPATIBLE_LOCAL_LOOP' | 'NETWORK_SATURATED' | 'OTP_NOT_CONNECTABLE' | 'OTP_NOT_MARKETABLE' | 'PAIRS_SATURATION' | 'PRODUCT_NOT_AVAILABLE' | 'PRODUCT_NOT_YET_AVAILABLE' | 'TOO_MUCH_ATTENUATION' | 'UNCERTAIN_DATA';
/**
 * Offer
 */
export interface ConnectivityEligibilityOffer {
  /**
   * Eligibility result for the offer
   *
   */
  eligibility?: ConnectivityEligibilityOfferEligibility;
  /**
   * Product informations
   *
   */
  product?: ConnectivityEligibilityOfferProduct;
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
}
/**
 * Offer product
 */
export interface ConnectivityEligibilityOfferProduct {
  /**
   * Product code, an unique identifier for the product
   *
   */
  code?: string;
  /**
   * Download rate in Mb
   *
   */
  downloadRate?: Number;
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
   * Name
   *
   */
  name?: string;
  /**
   * Number of copper pairs required, for copper only
   *
   */
  pairs?: Number;
  /**
   * Provider
   *
   */
  provider?: ConnectivityEligibilityOfferProductProviderEnum;
  /**
   * Type of the product
   *
   */
  type?: ConnectivityEligibilityOfferProductTypeEnum;
  /**
   * Upload rate in Mb
   *
   */
  uploadRate?: Number;
}
/**
 * Offer product provider
 */
export type ConnectivityEligibilityOfferProductProviderEnum = 'AXIONE' | 'KOSC' | 'ORANGE' | 'SFR';
/**
 * Offer product type
 */
export type ConnectivityEligibilityOfferProductTypeEnum = 'ADSL' | 'FTTH' | 'SDSL' | 'VDSL';
/**
 * Portability details of the line number
 */
export interface ConnectivityEligibilityPortability {
  /**
   * Eligibility informations
   *
   */
  eligibility?: ConnectivityEligibilityPortabilityEligibility;
  /**
   * Date of the end of quarantine, if any
   *
   */
  quarantineEndDate?: string;
  /**
   * Portability type, if a portability is ongoing
   *
   */
  type?: ConnectivityEligibilityPortabilityTypeEnum;
}
/**
 * Portability eligibility
 */
export interface ConnectivityEligibilityPortabilityEligibility {
  /**
   * Is the portability eligible for this line ?
   *
   */
  eligible?: boolean;
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
}
/**
 * Portability type
 */
export type ConnectivityEligibilityPortabilityTypeEnum = 'portin' | 'portinback' | 'portout' | 'subsequent' | 'subsquentportin';
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
 * Details of a street
 */
export interface ConnectivityEligibilityStreet {
  /**
   * Identifier which refer to a street uniquely
   *
   */
  streetCode?: string;
  /**
   * Street name
   *
   */
  streetName?: string;
}
/**
 * Generic incident structure
 */
export interface ConnectivityMonitoringGenericIncident {
  /**
   * Optional comment, that contains some informations and updates about the generic incident
   *
   */
  comment?: string;
  /**
   * Creation date, the generic incident has been detected
   *
   */
  creationDate?: string;
  /**
   * List of impacted department codes
   *
   */
  departments?: string[];
  /**
   * End date, the generic incident is resolved and closed
   *
   */
  endDate?: string;
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
   * List of impacted operators
   *
   */
  operators?: ConnectivityOperatorEnum[];
  /**
   * Status (detected: we detected a potential generic incident, validated: the operators or our tech teams have confirmed the generic incident, closed: the generic incident is resolved and closed)
   *
   */
  status?: ConnectivityMonitoringGenericIncidentStatusEnum;
  /**
   * Task id
   *
   */
  taskId?: Number;
}
/**
 * Generic incident status
 */
export type ConnectivityMonitoringGenericIncidentStatusEnum = 'closed' | 'detected' | 'validated';
/**
 * Async task
 */
export interface XdslAsyncTask<T> {
  /**
   * Error
   *
   */
  error?: string;
  /**
   * Result of the call
   *
   */
  result?: T;
  /**
   * Status of the call
   *
   */
  status?: XdslAsyncTaskStatusEnum;
}
/**
 * Async task array
 */
export interface XdslAsyncTaskArray<T> {
  /**
   * Error
   *
   */
  error?: string;
  /**
   * Result of the call
   *
   */
  result?: T[];
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
type PathsConnectivityGET = '/connectivity/eligibility/test' | 
'/connectivity/monitoring/genericIncident/partners' | 
'/connectivity/monitoring/genericIncident/public';

type PathsConnectivityPOST = '/connectivity/eligibility/search/buildingDetails' | 
'/connectivity/eligibility/search/buildings' | 
'/connectivity/eligibility/search/buildingsByLine' | 
'/connectivity/eligibility/search/cities' | 
'/connectivity/eligibility/search/lines' | 
'/connectivity/eligibility/search/meetings' | 
'/connectivity/eligibility/search/streetNumbers' | 
'/connectivity/eligibility/search/streets' | 
'/connectivity/eligibility/test/address' | 
'/connectivity/eligibility/test/address/partners' | 
'/connectivity/eligibility/test/building' | 
'/connectivity/eligibility/test/line' | 
'/connectivity/eligibility/test/line/partners' | 
'/connectivity/eligibility/test/otp';

export class ApiConnectivity extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Get an eligibility by its reference
  Get an eligibility by its reference
  **/
  public get(path: '/connectivity/eligibility/test', pathParams: undefined, queryParams: {eligibilityReference?: string}): Promise<ConnectivityEligibilityEligibilityTest>;
  /**
  Missing description
  List detected, validated and recently closed generic incidents. For partners only
  **/
  public get(path: '/connectivity/monitoring/genericIncident/partners', pathParams: undefined, queryParams: {status?: ConnectivityMonitoringGenericIncidentStatusEnum, creationDate?: string, endDate?: string}): Promise<ConnectivityMonitoringGenericIncident[]>;
  /**
  Missing description
  List validated and recently closed generic incidents
  **/
  public get(path: '/connectivity/monitoring/genericIncident/public', pathParams: undefined, queryParams: {status?: ConnectivityMonitoringGenericIncidentStatusEnum, creationDate?: string, endDate?: string}): Promise<ConnectivityMonitoringGenericIncident[]>;
  public get(path: PathsConnectivityGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Get the details for a building
  Get the details for a building
  **/
  public post(path: '/connectivity/eligibility/search/buildingDetails'): Promise<XdslAsyncTask<ConnectivityEligibilityBuilding>>;
  /**
  Get all buildings for a specific address
  Get all buildings for a specific address
  **/
  public post(path: '/connectivity/eligibility/search/buildings'): Promise<XdslAsyncTaskArray<ConnectivityEligibilityBuilding>>;
  /**
  Get building references from a given line number
  Get building references from a given line number
  **/
  public post(path: '/connectivity/eligibility/search/buildingsByLine'): Promise<XdslAsyncTaskArray<ConnectivityEligibilityBuilding>>;
  /**
  Get all localities linked to a zip code
  Get all localities linked to a zip code
  **/
  public post(path: '/connectivity/eligibility/search/cities'): Promise<XdslAsyncTaskArray<ConnectivityEligibilityCity>>;
  /**
  Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified
  Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified
  **/
  public post(path: '/connectivity/eligibility/search/lines'): Promise<XdslAsyncTaskArray<ConnectivityEligibilityLine>>;
  /**
  Search for available line creation meeting time slots, for copper only
  Search for available line creation meeting time slots, for copper only
  **/
  public post(path: '/connectivity/eligibility/search/meetings'): Promise<XdslAsyncTask<ConnectivityEligibilityMeetings>>;
  /**
  Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)
  Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)
  **/
  public post(path: '/connectivity/eligibility/search/streetNumbers'): Promise<XdslAsyncTaskArray<string>>;
  /**
  Get all street linked to a locality
  Get all street linked to a locality
  **/
  public post(path: '/connectivity/eligibility/search/streets'): Promise<XdslAsyncTaskArray<ConnectivityEligibilityStreet>>;
  /**
  Do an eligibility for an address, if no line exist
  Do an eligibility for an address, if no line exist
  **/
  public post(path: '/connectivity/eligibility/test/address'): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility for an address, if no line exist. Partners only.
  Do an eligibility for an address, if no line exist. Partners only.
  **/
  public post(path: '/connectivity/eligibility/test/address/partners'): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility test on a building, for fiber only
  Do an eligibility test on a building, for fiber only
  **/
  public post(path: '/connectivity/eligibility/test/building'): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility test on a line number, for copper only
  Do an eligibility test on a line number, for copper only
  **/
  public post(path: '/connectivity/eligibility/test/line'): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility test on a line number, for copper only. Partners only.
  Do an eligibility test on a line number, for copper only. Partners only.
  **/
  public post(path: '/connectivity/eligibility/test/line/partners'): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  /**
  Do an eligibility test on an OTP (Optical Termination Panel), for fiber only
  Do an eligibility test on an OTP (Optical Termination Panel), for fiber only
  **/
  public post(path: '/connectivity/eligibility/test/otp'): Promise<XdslAsyncTask<ConnectivityEligibilityEligibilityTest>>;
  public post(path: PathsConnectivityPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

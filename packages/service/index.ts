import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  key: string;
  /**
   */
  value: T;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  currencyCode: OrderCurrencyCodeEnum;
  /**
   */
  text: string;
  /**
   */
  value: number;
}
/**
 * Possible billing states
 */
export type ServiceBillingStateEnum = 'expired' | 'ok' | 'pending' | 'unpaid';
/**
 * Plan information
 */
export interface ServicePlan {
  /**
   * Product code
   *
   */
  code?: string;
  /**
   * Product plan information
   *
   */
  product: ServicePlanProduct;
}
/**
 * Renew information
 */
export interface ServiceRenew {
  /**
   * Renew day number
   *
   */
  dayOfMonth?: number;
  /**
   * Interval between each renewal
   *
   */
  interval?: ServiceRenewInterval;
  /**
   * Renewal mode
   *
   */
  mode: ServiceRenewMode;
  /**
   * Possible interval between each renewal
   *
   */
  possibleIntervals?: ServiceRenewInterval[];
  /**
   * Possible renewal mode
   *
   */
  possibleModes: ServiceRenewMode[];
}
/**
 * Resource service informations
 */
export interface ServiceResource {
  /**
   * Custom display name of the service
   *
   */
  displayName: string;
  /**
   * Name of the service
   *
   */
  name?: string;
  /**
   * Resource state
   *
   */
  state?: ServiceResourceStateEnum;
}
/**
 * Possible resource states
 */
export type ServiceResourceStateEnum = 'deleted' | 'deleting' | 'ok' | 'opening' | 'suspended' | 'suspending' | 'toDelete' | 'toOpen' | 'toSuspend';
/**
 * route of this service
 */
export interface ServiceRoute {
  /**
   * Path to use in API
   *
   */
  path?: string;
  /**
   * Path with variables applyed
   *
   */
  url?: string;
  /**
   * Variables to use in the path
   *
   */
  vars: ComplexTypeSafeKeyValue<string>[];
}
/**
 * List of consumptions recorded in a range
 */
export interface ServiceConsumptionTransaction {
  /**
   * Begin date
   *
   */
  beginDate: string;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * List of product plan code consumption
   *
   */
  elements: ServiceConsumptionTransactionElement[];
  /**
   * End date
   *
   */
  endDate?: string;
  /**
   * Transaction ID
   *
   */
  id?: number;
  /**
   * Last update
   *
   */
  lastUpdate?: string;
  /**
   * Consumption amount price
   *
   */
  price: OrderPrice;
  /**
   * Service ID
   *
   */
  serviceId: number;
}
/**
 * Element of consumption for resource
 */
export interface ServiceConsumptionTransactionElement {
  /**
   * List of consumption details for this planCode
   *
   */
  details: ServiceConsumptionTransactionElementDetail[];
  /**
   * Identifier of the offer
   *
   */
  planCode: string;
  /**
   * Consumption amount price
   *
   */
  price: OrderPrice;
  /**
   * Consumption quantity
   *
   */
  quantity: number;
}
/**
 * Element of consumption for resource
 */
export interface ServiceConsumptionTransactionElementDetail {
  /**
   * Consumption quantity
   *
   */
  quantity: number;
  /**
   * Unique ID associated to one service element
   *
   */
  unique_id?: string;
}
/**
 * Product plan information
 */
export interface ServicePlanProduct {
  /**
   * Product name
   *
   */
  name?: string;
}
/**
 * Interval enum information
 */
export type ServiceRenewInterval = 'P1M' | 'P1Y' | 'P2Y' | 'P3M' | 'P3Y' | 'P6M';
/**
 * Mode enum informations
 */
export type ServiceRenewMode = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'deleteAtEndEngagement' | 'deleteAtExpiration' | 'manual' | 'oneShot' | 'option';
/**
 * List possible renews for service
 */
export interface ServiceRenewRenewDescription {
  /**
   * ISO8601 formatted renewal duration
   *
   */
  renewPeriod: string;
  /**
   * List possible strategies
   *
   */
  strategies: ServiceRenewRenewStrategy[];
}
/**
 * Representation of service's renew forecasting
 */
export interface ServiceRenewRenewForecast {
  /**
   * Forecast details
   *
   */
  details: ServiceRenewRenewForecastDetail[];
  /**
   * Prices for renew forecasting
   *
   */
  prices: ServiceRenewRenewForecastPrices;
}
/**
 * Representation of a product renew pricing
 */
export interface ServiceRenewRenewForecastDetail {
  /**
   * Detail description
   *
   */
  description?: string;
  /**
   * Quantity
   *
   */
  quantity: number;
  /**
   * Associated service name
   *
   */
  serviceName: string;
  /**
   * Total price
   *
   */
  totalPrice: OrderPrice;
  /**
   * Price for one unit
   *
   */
  unitPrice: OrderPrice;
}
/**
 * Prices for renew forecasting
 */
export interface ServiceRenewRenewForecastPrices {
  /**
   * Tax
   *
   */
  tax: OrderPrice;
  /**
   * Total price with tax
   *
   */
  withTax: OrderPrice;
  /**
   * Total price without tax
   *
   */
  withoutTax: OrderPrice;
}
/**
 * Details about a renew Order
 */
export interface ServiceRenewRenewOrder {
  /**
   * Creation date of the renew Order
   *
   */
  date?: string;
  /**
   * Expiration date of the renew Order
   *
   */
  expirationDate?: string;
  /**
   * ID of the renew Order
   *
   */
  orderId: number;
  /**
   * Password
   *
   */
  password: string;
  /**
   * Public pdf URL of the generated renew Order
   *
   */
  pdfUrl: string;
  /**
   * Price of the product with tax
   *
   */
  priceWithTax: OrderPrice;
  /**
   * Price of the product without tax
   *
   */
  priceWithoutTax: OrderPrice;
  /**
   * Retraction date
   *
   */
  retractionDate?: string;
  /**
   * Value of the tax
   *
   */
  tax: OrderPrice;
  /**
   * Public URL to display generated renew Order
   *
   */
  url: string;
}
/**
 * Representation of a product renew pricing
 */
export interface ServiceRenewRenewStrategy {
  /**
   * Price of the product
   *
   */
  price: OrderPrice;
  /**
   * Price of the product in micro-centims
   *
   */
  priceInUcents: number;
  /**
   * Services renewed by strategy
   *
   */
  services: number[];
  /**
   * Details of services renewed by strategy
   *
   */
  servicesDetails: ServiceRenewService[];
}
/**
 * Description of a service
 */
export interface ServiceRenewService {
  /**
   * ID of the service
   *
   */
  serviceId: number;
  /**
   * Name of the service
   *
   */
  serviceName: string;
  /**
   * Type of the service
   *
   */
  serviceType: string;
}
/**
 * Details about a Service
 */
export interface ServiceListService {
  /**
   * Creation date
   *
   */
  creationDate: string;
  /**
   * Resource details
   *
   */
  details: ComplexTypeSafeKeyValue<string>[];
  /**
   * Engagement date
   *
   */
  engagementDate?: string;
  /**
   * Expiration date
   *
   */
  expirationDate?: string;
  /**
   * The next billing date
   *
   */
  nextBillingDate?: string;
  /**
   * Plan service description
   *
   */
  plan: ServicePlan;
  /**
   * Quantity
   *
   */
  quantity: number;
  /**
   * Renew service description
   *
   */
  renew?: ServiceRenew;
  /**
   * Resource service description
   *
   */
  resource: ServiceResource;
  /**
   * Route to use in API
   *
   */
  route: ServiceRoute;
  /**
   * Billing state of your service
   *
   */
  state: ServiceBillingStateEnum;
}
type PathsServiceGET = '/service' | 
'/service/{serviceId}' | 
'/service/{serviceId}/renew';

type PathsServicePUT = '/service/{serviceId}';

type PathsServicePOST = '/service/{serviceId}/renew' | 
'/service/{serviceId}/reopen' | 
'/service/{serviceId}/suspend' | 
'/service/{serviceId}/terminate';

export class ApiService extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the services
  List available services
  **/
  public get(path: '/service'): Promise<number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/service/{serviceId}', params: {serviceId: number}): Promise<ServiceListService>;
  /**
  Missing description
  List possible renews for this service
  **/
  public get(path: '/service/{serviceId}/renew', params: {serviceId: string, includeOptions?: boolean}): Promise<ServiceRenewRenewDescription[]>;
  public get(path: PathsServiceGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/service/{serviceId}', params: {serviceId: number, body: ServiceListService}): Promise<void>;
  public put(path: PathsServicePUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Missing description
  Create a renew order
  **/
  public post(path: '/service/{serviceId}/renew', params: {serviceId: string, dryRun?: boolean, duration: string, services: number[]}): Promise<ServiceRenewRenewOrder>;
  /**
  reopen operations
  Reopen a suspended service
  **/
  public post(path: '/service/{serviceId}/reopen', params: {serviceId: number}): Promise<void>;
  /**
  suspend operations
  Suspend the service. The service won't be accessible, but you will still be charged for it
  **/
  public post(path: '/service/{serviceId}/suspend', params: {serviceId: number}): Promise<void>;
  /**
  terminate operations
  Terminates a suspended service
  **/
  public post(path: '/service/{serviceId}/terminate', params: {serviceId: number}): Promise<void>;
  public post(path: PathsServicePOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}
export default ApiService;

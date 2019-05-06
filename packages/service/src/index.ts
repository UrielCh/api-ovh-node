import { ApiCommon } from '@ovh-api/common';
/**
 * Mode enum informations
 */
export type ServiceRenewMode = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'deleteAtEndEngagement' | 'deleteAtExpiration' | 'manual' | 'oneShot' | 'option';
/**
 * Element of consumption for resource
 */
export interface ServiceConsumptionTransactionElement {
  /**
   * Consumption quantity
   *
   */
  quantity?: Number;
  /**
   * Consumption amount price
   *
   */
  price?: OrderPrice;
  /**
   * List of consumption details for this planCode
   *
   */
  details?: ServiceConsumptionTransactionElementDetail[];
  /**
   * Identifier of the offer
   *
   */
  planCode?: string;
}
/**
 * Renew information
 */
export interface ServiceRenew {
  /**
   * Renewal mode
   *
   */
  mode?: ServiceRenewMode;
  /**
   * Renew day number
   *
   */
  dayOfMonth?: Number;
  /**
   * Possible interval between each renewal
   *
   */
  possibleIntervals?: ServiceRenewInterval[];
  /**
   * Interval between each renewal
   *
   */
  interval?: ServiceRenewInterval;
  /**
   * Possible renewal mode
   *
   */
  possibleModes?: ServiceRenewMode[];
}
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
   * Variables to use in the path
   *
   */
  vars?: ComplexTypeSafeKeyValue<string>[];
  /**
   * Path with variables applyed
   *
   */
  url?: string;
}
/**
 * Description of a service
 */
export interface ServiceRenewService {
  /**
   * Type of the service
   *
   */
  serviceType?: string;
  /**
   * ID of the service
   *
   */
  serviceId?: Number;
  /**
   * Name of the service
   *
   */
  serviceName?: string;
}
/**
 * Interval enum information
 */
export type ServiceRenewInterval = 'P1M' | 'P1Y' | 'P2Y' | 'P3M' | 'P3Y' | 'P6M';
/**
 * Details about a renew Order
 */
export interface ServiceRenewRenewOrder {
  /**
   * Creation date of the renew Order
   *
   */
  date?: Date;
  /**
   * Retraction date
   *
   */
  retractionDate?: Date;
  /**
   * Public pdf URL of the generated renew Order
   *
   */
  pdfUrl?: string;
  /**
   * Password
   *
   */
  password?: string;
  /**
   * ID of the renew Order
   *
   */
  orderId?: Number;
  /**
   * Price of the product with tax
   *
   */
  priceWithTax?: OrderPrice;
  /**
   * Price of the product without tax
   *
   */
  priceWithoutTax?: OrderPrice;
  /**
   * Value of the tax
   *
   */
  tax?: OrderPrice;
  /**
   * Public URL to display generated renew Order
   *
   */
  url?: string;
  /**
   * Expiration date of the renew Order
   *
   */
  expirationDate?: Date;
}
/**
 * Prices for renew forecasting
 */
export interface ServiceRenewRenewForecastPrices {
  /**
   * Total price with tax
   *
   */
  withTax?: OrderPrice;
  /**
   * Total price without tax
   *
   */
  withoutTax?: OrderPrice;
  /**
   * Tax
   *
   */
  tax?: OrderPrice;
}
/**
 * Element of consumption for resource
 */
export interface ServiceConsumptionTransactionElementDetail {
  /**
   * Unique ID associated to one service element
   *
   */
  unique_id?: string;
  /**
   * Consumption quantity
   *
   */
  quantity?: Number;
}
/**
 * Plan information
 */
export interface ServicePlan {
  /**
   * Product plan information
   *
   */
  product?: ServicePlanProduct;
  /**
   * Product code
   *
   */
  code?: string;
}
/**
 * Details about a Service
 */
export interface ServiceListService {
  /**
   * The next billing date
   *
   */
  nextBillingDate?: Date;
  /**
   * Quantity
   *
   */
  quantity?: Number;
  /**
   * Route to use in API
   *
   */
  route?: ServiceRoute;
  /**
   * Resource service description
   *
   */
  resource?: ServiceResource;
  /**
   * Engagement date
   *
   */
  engagementDate?: Date;
  /**
   * Resource details
   *
   */
  details?: ComplexTypeSafeKeyValue<string>[];
  /**
   * Renew service description
   *
   */
  renew?: ServiceRenew;
  /**
   * Billing state of your service
   *
   */
  state?: ServiceBillingStateEnum;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Plan service description
   *
   */
  plan?: ServicePlan;
  /**
   * Expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * Possible billing states
 */
export type ServiceBillingStateEnum = 'expired' | 'ok' | 'pending' | 'unpaid';
/**
 * Representation of a product renew pricing
 */
export interface ServiceRenewRenewStrategy {
  /**
   * Price of the product in micro-centims
   *
   */
  priceInUcents?: Number;
  /**
   * Price of the product
   *
   */
  price?: OrderPrice;
  /**
   * Services renewed by strategy
   *
   */
  services?: Number[][];
  /**
   * Details of services renewed by strategy
   *
   */
  servicesDetails?: ServiceRenewService[];
}
/**
 * List possible renews for service
 */
export interface ServiceRenewRenewDescription {
  /**
   * ISO8601 formatted renewal duration
   *
   */
  renewPeriod?: duration:string;
  /**
   * List possible strategies
   *
   */
  strategies?: ServiceRenewRenewStrategy[];
}
/**
 * Representation of a product renew pricing
 */
export interface ServiceRenewRenewForecastDetail {
  /**
   * Price for one unit
   *
   */
  unitPrice?: OrderPrice;
  /**
   * Quantity
   *
   */
  quantity?: Number;
  /**
   * Total price
   *
   */
  totalPrice?: OrderPrice;
  /**
   * Detail description
   *
   */
  description?: string;
  /**
   * Associated service name
   *
   */
  serviceName?: string;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
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
 * Possible resource states
 */
export type ServiceResourceStateEnum = 'deleted' | 'deleting' | 'ok' | 'opening' | 'suspended' | 'suspending' | 'toDelete' | 'toOpen' | 'toSuspend';
/**
 * Representation of service's renew forecasting
 */
export interface ServiceRenewRenewForecast {
  /**
   * Forecast details
   *
   */
  details?: ServiceRenewRenewForecastDetail[];
  /**
   * Prices for renew forecasting
   *
   */
  prices?: ServiceRenewRenewForecastPrices;
}
/**
 * List of consumptions recorded in a range
 */
export interface ServiceConsumptionTransaction {
  /**
   * Begin date
   *
   */
  beginDate?: Date;
  /**
   * End date
   *
   */
  endDate?: Date;
  /**
   * Consumption amount price
   *
   */
  price?: OrderPrice;
  /**
   * List of product plan code consumption
   *
   */
  elements?: ServiceConsumptionTransactionElement[];
  /**
   * Last update
   *
   */
  lastUpdate?: Date;
  /**
   * Transaction ID
   *
   */
  id?: Number;
  /**
   * Service ID
   *
   */
  serviceId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
}
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  text?: string;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  value?: Number;
}
/**
 * Resource service informations
 */
export interface ServiceResource {
  /**
   * Custom display name of the service
   *
   */
  displayName?: string;
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
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  value?: T;
  /**
   */
  key?: string;
}
type PathsserviceGET = '/service/{serviceId}/renew' | 
'/service/{serviceId}' | 
'/service';

type PathsservicePUT = '/service/{serviceId}';

type PathsservicePOST = '/service/{serviceId}/terminate' | 
'/service/{serviceId}/renew' | 
'/service/{serviceId}/reopen' | 
'/service/{serviceId}/suspend';

class Apiservice extends ApiCommon {
  /**
  Missing description
  List possible renews for this service
  **/
  public get(path: '/service/{serviceId}/renew', pathParams: {serviceId?: string}, queryParams: {includeOptions?: boolean}): Promise<ServiceRenewRenewDescription[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/service/{serviceId}', pathParams: {serviceId?: Number}, queryParams: null): Promise<ServiceListService>;
  /**
  Operations about the services
  List available services
  **/
  public get(path: '/service', pathParams: null, queryParams: null): Promise<Number[]>;
  public get(path: PathsserviceGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/service/{serviceId}', pathParams: {serviceId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsservicePUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  terminate operations
  Terminates a suspended service
  **/
  public post(path: '/service/{serviceId}/terminate', pathParams: {serviceId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Create a renew order
  **/
  public post(path: '/service/{serviceId}/renew', pathParams: {serviceId?: string}, queryParams: null, bodyParams: null): Promise<ServiceRenewRenewOrder>;
  /**
  reopen operations
  Reopen a suspended service
  **/
  public post(path: '/service/{serviceId}/reopen', pathParams: {serviceId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  suspend operations
  Suspend the service. The service won't be accessible, but you will still be charged for it
  **/
  public post(path: '/service/{serviceId}/suspend', pathParams: {serviceId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  public post(path: PathsservicePOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}

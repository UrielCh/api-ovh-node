import { ApiCommon } from '@ovh-api/common';
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  key?: string;
  /**
   */
  value?: T;
}
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   * Currency code
   *
   */
  currencyCode?: PriceCurrencyCodeEnum;
  /**
   * Textual representation
   *
   */
  text?: string;
  /**
   * The effective price
   *
   */
  value?: Number;
}
/**
 * Currency code
 */
export type PriceCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Description of an invoice
 */
export interface ServicesBillingInvoice {
  /**
   * Invoice date
   *
   */
  date?: string;
  /**
   * Invoice reference
   *
   */
  id?: string;
  /**
   * Invoice details
   *
   */
  lines?: ServicesBillingInvoiceLine[];
}
/**
 * Description of an invoice line
 */
export interface ServicesBillingInvoiceLine {
  /**
   * Description of item
   *
   */
  description?: string;
  /**
   * End period
   *
   */
  periodEnd?: string;
  /**
   * Start period
   *
   */
  periodStart?: string;
  /**
   * Price without tax
   *
   */
  price?: OrderPrice;
  /**
   * Quantity of item
   *
   */
  quantity?: Number;
  /**
   * Associated service name
   *
   */
  serviceName?: string;
  /**
   * Price with tax
   *
   */
  totalPrice?: OrderPrice;
  /**
   * Type of item
   *
   */
  type?: ServicesBillingInvoiceLineTypeEnum;
}
/**
 * Type of item
 */
export type ServicesBillingInvoiceLineTypeEnum = 'accessory' | 'consumption' | 'creation' | 'deposit' | 'duration' | 'gift' | 'installation' | 'misc' | 'other' | 'outplan' | 'quantity' | 'special' | 'voucher';
/**
 * Description of an Engagement
 */
export interface ServicesBillingEngagementEngagement {
  /**
   * Current engagement period
   *
   */
  currentPeriod?: ServicesBillingEngagementEngagementPeriod;
}
/**
 * Period of Engagement
 */
export interface ServicesBillingEngagementEngagementPeriod {
  /**
   * End of the period
   *
   */
  endDate?: string;
  /**
   * Beginning of the period
   *
   */
  startDate?: string;
}
/**
 * Billing informations of the service
 */
export interface ServicesExpandedBilling {
  /**
   * Expiration date
   *
   */
  expirationDate?: string;
  /**
   * Next billing date
   *
   */
  nextBillingDate?: string;
  /**
   * Service Plan
   *
   */
  plan?: ServicesExpandedPlan;
}
/**
 * Plan of the service
 */
export interface ServicesExpandedPlan {
  /**
   * Plan code
   *
   */
  code?: string;
  /**
   * Invoice Name
   *
   */
  invoiceName?: string;
}
/**
 * Product of the service
 */
export interface ServicesExpandedProduct {
  /**
   * Product description
   *
   */
  description?: string;
  /**
   * Product name
   *
   */
  name?: string;
}
/**
 * Resource of the service
 */
export interface ServicesExpandedResource {
  /**
   * Display name of the resource
   *
   */
  displayName?: string;
  /**
   * Name of the resource
   *
   */
  name?: string;
  /**
   * Product
   *
   */
  product?: ServicesExpandedProduct;
}
/**
 * Route of the service
 */
export interface ServicesExpandedRoute {
  /**
   * Path to use in API
   *
   */
  path?: string;
  /**
   * Path with variables applied
   *
   */
  url?: string;
  /**
   * Variables to use in the path
   *
   */
  vars?: ComplexTypeSafeKeyValue<string>[];
}
/**
 * Description of a service
 */
export interface ServicesExpandedService {
  /**
   * Billing information
   *
   */
  billing?: ServicesExpandedBilling;
  /**
   * Resource
   *
   */
  resource?: ServicesExpandedResource;
  /**
   * Route
   *
   */
  route?: ServicesExpandedRoute;
  /**
   * Service ID
   *
   */
  serviceId: Number;
}
type PathsServicesGET = '/services' | 
'/services/{serviceId}' | 
'/services/{serviceId}/billing/engagement';

export class ApiServices extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Get list of your service details
  null
  **/
  public get(path: '/services', pathParams: undefined, queryParams: {orderBy?: string, routes?: string, sort?: string}): Promise<Number[]>;
  /**
  Get list of your service details
  Get details about a service
  **/
  public get(path: '/services/{serviceId}', pathParams: {serviceId: Number}): Promise<ServicesExpandedService>;
  /**
  Engagement for a given service
  Get engagement details
  **/
  public get(path: '/services/{serviceId}/billing/engagement', pathParams: {serviceId: Number}): Promise<ServicesBillingEngagementEngagement>;
  public get(path: PathsServicesGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
}

import { ApiCommon } from '@ovh-api/common';
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue {
  /**
   */
  value?: T;
  /**
   */
  key?: string;
}
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   * Textual representation
   *
   */
  text?: string;
  /**
   * Currency code
   *
   */
  currencyCode?: PriceCurrencyCodeEnum;
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
  date?: Date;
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
   * Quantity of item
   *
   */
  quantity?: Number;
  /**
   * Price with tax
   *
   */
  totalPrice?: OrderPrice;
  /**
   * Price without tax
   *
   */
  price?: OrderPrice;
  /**
   * Description of item
   *
   */
  description?: string;
  /**
   * Associated service name
   *
   */
  serviceName?: string;
  /**
   * Type of item
   *
   */
  type?: ServicesBillingInvoiceLineTypeEnum;
  /**
   * Start period
   *
   */
  periodStart?: Date;
  /**
   * End period
   *
   */
  periodEnd?: Date;
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
  endDate?: Date;
  /**
   * Beginning of the period
   *
   */
  startDate?: Date;
}
/**
 * Billing informations of the service
 */
export interface ServicesExpandedBilling {
  /**
   * Next billing date
   *
   */
  nextBillingDate?: Date;
  /**
   * Service Plan
   *
   */
  plan?: ServicesExpandedPlan;
  /**
   * Expiration date
   *
   */
  expirationDate?: Date;
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
   * Product name
   *
   */
  name?: string;
  /**
   * Product description
   *
   */
  description?: string;
}
/**
 * Resource of the service
 */
export interface ServicesExpandedResource {
  /**
   * Product
   *
   */
  product?: ServicesExpandedProduct;
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
   * Variables to use in the path
   *
   */
  vars?: ComplexTypeSafeKeyValue<string>[];
  /**
   * Path with variables applied
   *
   */
  url?: string;
}
/**
 * Description of a service
 */
export interface ServicesExpandedService {
  /**
   * Route
   *
   */
  route?: ServicesExpandedRoute;
  /**
   * Resource
   *
   */
  resource?: ServicesExpandedResource;
  /**
   * Service ID
   *
   */
  serviceId: Number;
  /**
   * Billing information
   *
   */
  billing?: ServicesExpandedBilling;
}
type PathsservicesGET = '/services' | 
'/services/{serviceId}' | 
'/services/{serviceId}/billing/engagement';

class Apiservices extends ApiCommon {
  /**
  Get list of your service details
  null
  **/
  public get(path: '/services', pathParams: null, queryParams: {routes?: string, orderBy?: string, sort?: string}): Promise<Number[]>;
  /**
  Get list of your service details
  Get details about a service
  **/
  public get(path: '/services/{serviceId}', pathParams: {serviceId?: Number}, queryParams: null): Promise<ServicesExpandedService>;
  /**
  Engagement for a given service
  Get engagement details
  **/
  public get(path: '/services/{serviceId}/billing/engagement', pathParams: {serviceId?: Number}, queryParams: null): Promise<ServicesBillingEngagementEngagement>;
  public get(path: PathsservicesGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
}

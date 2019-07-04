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
 * Currency code
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Price with its currency and textual representation
 */
export interface OrderPrice {
  /**
   * Currency code
   *
   */
  currencyCode: OrderCurrencyCodeEnum;
  /**
   * Textual representation
   *
   */
  text: string;
  /**
   * The effective price
   *
   */
  value: number;
}
/**
 * Description of an invoice
 */
export interface ServicesBillingInvoice {
  /**
   * Invoice date
   *
   */
  date: string;
  /**
   * Invoice reference
   *
   */
  id: string;
  /**
   * Invoice details
   *
   */
  lines: ServicesBillingInvoiceLine[];
}
/**
 * Description of an invoice line
 */
export interface ServicesBillingInvoiceLine {
  /**
   * Description of item
   *
   */
  description: string;
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
  price: OrderPrice;
  /**
   * Quantity of item
   *
   */
  quantity: number;
  /**
   * Associated service name
   *
   */
  serviceName: string;
  /**
   * Price with tax
   *
   */
  totalPrice: OrderPrice;
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
  currentPeriod: ServicesBillingEngagementEngagementPeriod;
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
  startDate: string;
}
/**
 * Contact change request
 */
export interface ServicesContactsContactChangeRequest {
  /**
   * List of accounts you want to be considered as 'admin' of the service
   *
   */
  admin: string[];
  /**
   * List of accounts you want to be considered as 'billing' contact
   *
   */
  billing: string[];
  /**
   * List of accounts you want to be considered as 'technical' contact
   *
   */
  technical: string[];
}
/**
 * Contact change task
 */
export interface ServicesContactsTask {
  /**
   * Unique identifier of the Task
   *
   */
  id: number;
  /**
   * Computed API route to fetch and manage the Task created
   *
   */
  route: string;
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
  code: string;
  /**
   * Invoice Name
   *
   */
  invoiceName: string;
}
/**
 * Product of the service
 */
export interface ServicesExpandedProduct {
  /**
   * Product description
   *
   */
  description: string;
  /**
   * Product name
   *
   */
  name: string;
}
/**
 * Resource of the service
 */
export interface ServicesExpandedResource {
  /**
   * Display name of the resource
   *
   */
  displayName: string;
  /**
   * Name of the resource
   *
   */
  name: string;
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
  vars: ComplexTypeSafeKeyValue<string>[];
}
/**
 * Description of a service
 */
export interface ServicesExpandedService {
  /**
   * Billing information
   *
   */
  billing: ServicesExpandedBilling;
  /**
   * Resource
   *
   */
  resource: ServicesExpandedResource;
  /**
   * Route
   *
   */
  route?: ServicesExpandedRoute;
  /**
   * Service ID
   *
   */
  serviceId: number;
}
/**
 * Confirm service termination request
 */
export interface ServicesTerminateConfirmServiceTerminationRequest {
  /**
   * Acknowledge potential fees regarding service termination. Fees can be deduced from GET /1.0/services/{serviceId}/terminate/fees
   *
   */
  acknowledgePotentialFees: boolean;
  /**
   * Commentary about your termination request
   *
   */
  comment: string;
  /**
   * What next after your termination request
   *
   */
  futureUse: ServicesTerminateTerminationFutureUseEnum;
  /**
   * Reason of your termination request
   *
   */
  reason: ServicesTerminateTerminationReasonEnum;
  /**
   * The termination token sent by mail to the admin contact
   *
   */
  token: string;
}
/**
 * Termination instructions
 */
export interface ServicesTerminateTerminationAnswer {
  /**
   * Termination instructions to be followed
   *
   */
  message: string;
}
/**
 * Termination fees
 */
export interface ServicesTerminateTerminationFees {
  /**
   * Duration (compliant with RFC3339) used to calculate your termination fees
   *
   */
  durationLeft: string;
  /**
   * Price computed from the duration left
   *
   */
  fees: OrderPrice;
}
/**
 * Future uses you can provide for a service termination
 */
export type ServicesTerminateTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * Reasons you can provide for a service termination
 */
export type ServicesTerminateTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Service termination request
 */
export interface ServicesTerminateTerminationRequest {
  /**
   * Acknowledge potential fees regarding service termination. Fees can be deduced from GET /1.0/services/{serviceId}/terminate/fees
   *
   */
  acknowledgePotentialFees: boolean;
}
type PathsServicesGET = '/services' | 
'/services/{serviceId}' | 
'/services/{serviceId}/billing/engagement';

export class ApiServices extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Get list of your service details
   * List available services
   */
  public get(path: '/services', params: {orderBy?: string, routes?: string, sort?: string}): Promise<number[]>;
  /**
   * Get list of your service details
   * Get details about a service
   */
  public get(path: '/services/{serviceId}', params: {serviceId: number}): Promise<ServicesExpandedService>;
  /**
   * Engagement for a given service
   * Get engagement details
   */
  public get(path: '/services/{serviceId}/billing/engagement', params: {serviceId: number}): Promise<ServicesBillingEngagementEngagement>;
  public get(path: PathsServicesGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params
  );}
}
export default ApiServices;

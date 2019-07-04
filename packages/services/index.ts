import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key?: string;
        value?: T;
    }
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
    }
}
export namespace services {
    export namespace billing {
        //services.billing.Invoice
        // fullName: services.billing.Invoice.Invoice
        export interface Invoice {
            date?: string;
            id?: string;
            lines?: OVH.services.billing.InvoiceLine[];
        }
        //services.billing.InvoiceLine
        // fullName: services.billing.InvoiceLine.InvoiceLine
        export interface InvoiceLine {
            description?: string;
            periodEnd?: string;
            periodStart?: string;
            price?: OVH.order.Price;
            quantity?: number;
            serviceName?: string;
            totalPrice?: OVH.order.Price;
            type?: OVH.services.billing.InvoiceLineTypeEnum;
        }
        //services.billing.InvoiceLineTypeEnum
        export type InvoiceLineTypeEnum = "accessory" | "consumption" | "creation" | "deposit" | "duration" | "gift" | "installation" | "misc" | "other" | "outplan" | "quantity" | "special" | "voucher"
        export namespace engagement {
            //services.billing.engagement.Engagement
            // fullName: services.billing.engagement.Engagement.Engagement
            export interface Engagement {
                currentPeriod?: OVH.services.billing.engagement.EngagementPeriod;
            }
            //services.billing.engagement.EngagementPeriod
            // fullName: services.billing.engagement.EngagementPeriod.EngagementPeriod
            export interface EngagementPeriod {
                endDate?: string;
                startDate?: string;
            }
        }
    }
    export namespace contacts {
        //services.contacts.ContactChangeRequest
        // fullName: services.contacts.ContactChangeRequest.ContactChangeRequest
        export interface ContactChangeRequest {
            admin: string[];
            billing: string[];
            technical: string[];
        }
        //services.contacts.Task
        // fullName: services.contacts.Task.Task
        export interface Task {
            id?: number;
            route?: string;
        }
    }
    export namespace expanded {
        //services.expanded.Billing
        // fullName: services.expanded.Billing.Billing
        export interface Billing {
            expirationDate?: string;
            nextBillingDate?: string;
            plan?: OVH.services.expanded.Plan;
        }
        //services.expanded.Plan
        // fullName: services.expanded.Plan.Plan
        export interface Plan {
            code?: string;
            invoiceName?: string;
        }
        //services.expanded.Product
        // fullName: services.expanded.Product.Product
        export interface Product {
            description?: string;
            name?: string;
        }
        //services.expanded.Resource
        // fullName: services.expanded.Resource.Resource
        export interface Resource {
            displayName?: string;
            name?: string;
            product?: OVH.services.expanded.Product;
        }
        //services.expanded.Route
        // fullName: services.expanded.Route.Route
        export interface Route {
            path?: string;
            url?: string;
            vars?: OVH.complexType.SafeKeyValue<string>[];
        }
        //services.expanded.Service
        // fullName: services.expanded.Service.Service
        export interface Service {
            billing?: OVH.services.expanded.Billing;
            resource?: OVH.services.expanded.Resource;
            route?: OVH.services.expanded.Route;
            serviceId?: number;
        }
    }
    export namespace terminate {
        //services.terminate.ConfirmServiceTerminationRequest
        // fullName: services.terminate.ConfirmServiceTerminationRequest.ConfirmServiceTerminationRequest
        export interface ConfirmServiceTerminationRequest {
            acknowledgePotentialFees: boolean;
            comment: string;
            futureUse: OVH.services.terminate.TerminationFutureUseEnum;
            reason: OVH.services.terminate.TerminationReasonEnum;
            token: string;
        }
        //services.terminate.TerminationAnswer
        // fullName: services.terminate.TerminationAnswer.TerminationAnswer
        export interface TerminationAnswer {
            message?: string;
        }
        //services.terminate.TerminationFees
        // fullName: services.terminate.TerminationFees.TerminationFees
        export interface TerminationFees {
            durationLeft?: string;
            fees?: OVH.order.Price;
        }
        //services.terminate.TerminationFutureUseEnum
        export type TerminationFutureUseEnum = "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "NOT_REPLACING_SERVICE" | "OTHER"
        //services.terminate.TerminationReasonEnum
        export type TerminationReasonEnum = "NOT_NEEDED_ANYMORE" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "NOT_RELIABLE" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_COMPETITOR" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "FEATURES_DONT_SUIT_ME" | "UNSATIFIED_BY_CUSTOMER_SUPPORT" | "NO_ANSWER" | "OTHER"
        //services.terminate.TerminationRequest
        // fullName: services.terminate.TerminationRequest.TerminationRequest
        export interface TerminationRequest {
            acknowledgePotentialFees: boolean;
        }
    }
}
// Apis harmony
// path /services
export interface Services {
    // GET /services
    $get(param?: {orderBy?: string, routes?: string, sort?: string}): Promise<number[]>;
    [keys: string]: {
        // GET /services/{serviceId}
        $get(): Promise<services.expanded.Service>;
        billing:  {
            engagement:  {
                // GET /services/{serviceId}/billing/engagement
                $get(): Promise<services.billing.engagement.Engagement>;
            }
        }
    } | any
}
// Api
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
  public get(path: '/services/{serviceId}', params: {serviceId: string}): Promise<services.expanded.Service>;
  /**
   * Engagement for a given service
   * Get engagement details
   */
  public get(path: '/services/{serviceId}/billing/engagement', params: {serviceId: string}): Promise<services.billing.engagement.Engagement>;
  public get(path: PathsServicesGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
}
}
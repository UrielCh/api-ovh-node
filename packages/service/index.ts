import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /service Models
 */
export namespace complexType {
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace service {
    //service.BillingStateEnum
    export type BillingStateEnum = "expired" | "ok" | "pending" | "unpaid"
    //service.Plan
    // fullName: service.Plan.Plan
    export interface Plan {
        code?: string;
        product: service.plan.Product;
    }
    //service.Renew
    // fullName: service.Renew.Renew
    export interface Renew {
        dayOfMonth?: number;
        interval?: service.renew.Interval;
        mode: service.renew.Mode;
        possibleIntervals?: service.renew.Interval[];
        possibleModes: service.renew.Mode[];
    }
    //service.Resource
    // fullName: service.Resource.Resource
    export interface Resource {
        displayName: string;
        name?: string;
        state?: service.ResourceStateEnum;
    }
    //service.ResourceStateEnum
    export type ResourceStateEnum = "deleted" | "deleting" | "ok" | "opening" | "suspended" | "suspending" | "toDelete" | "toOpen" | "toSuspend"
    //service.Route
    // fullName: service.Route.Route
    export interface Route {
        path?: string;
        url?: string;
        vars: complexType.SafeKeyValue<string>[];
    }
    export namespace consumption {
        //service.consumption.Transaction
        // fullName: service.consumption.Transaction.Transaction
        export interface Transaction {
            beginDate: string;
            creationDate?: string;
            elements: service.consumption.transaction.Element[];
            endDate?: string;
            id?: number;
            lastUpdate?: string;
            price: orderPrice;
            serviceId: number;
        }
        export namespace transaction {
            //service.consumption.transaction.Element
            // fullName: service.consumption.transaction.Element.Element
            export interface Element {
                details: service.consumption.transaction.Element.Detail[];
                planCode: string;
                price: orderPrice;
                quantity: number;
            }
            export namespace Element {
                //service.consumption.transaction.Element.Detail
                // fullName: service.consumption.transaction.Element.Detail.Detail
                export interface Detail {
                    quantity: number;
                    unique_id?: string;
                }
            }
        }
    }
    export namespace plan {
        //service.plan.Product
        // fullName: service.plan.Product.Product
        export interface Product {
            name?: string;
        }
    }
    export namespace renew {
        //service.renew.Interval
        export type Interval = "P1M" | "P1Y" | "P2Y" | "P3M" | "P3Y" | "P6M"
        //service.renew.Mode
        export type Mode = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "deleteAtEndEngagement" | "deleteAtExpiration" | "manual" | "oneShot" | "option"
        //service.renew.RenewDescription
        // fullName: service.renew.RenewDescription.RenewDescription
        export interface RenewDescription {
            renewPeriod: string;
            strategies: service.renew.RenewStrategy[];
        }
        //service.renew.RenewForecast
        // fullName: service.renew.RenewForecast.RenewForecast
        export interface RenewForecast {
            details: service.renew.RenewForecastDetail[];
            prices: service.renew.RenewForecastDetailPrices;
        }
        //service.renew.RenewForecastDetail
        // fullName: service.renew.RenewForecastDetail.RenewForecastDetail
        export interface RenewForecastDetail {
            description?: string;
            quantity: number;
            serviceName: string;
            totalPrice: orderPrice;
            unitPrice: orderPrice;
        }
        //service.renew.RenewForecastDetailPrices
        // fullName: service.renew.RenewForecastDetailPrices.RenewForecastDetailPrices
        export interface RenewForecastDetailPrices {
            tax: orderPrice;
            withTax: orderPrice;
            withoutTax: orderPrice;
        }
        //service.renew.RenewOrder
        // fullName: service.renew.RenewOrder.RenewOrder
        export interface RenewOrder {
            date?: string;
            expirationDate?: string;
            orderId: number;
            password: string;
            pdfUrl: string;
            priceWithTax: orderPrice;
            priceWithoutTax: orderPrice;
            retractionDate?: string;
            tax: orderPrice;
            url: string;
        }
        //service.renew.RenewStrategy
        // fullName: service.renew.RenewStrategy.RenewStrategy
        export interface RenewStrategy {
            price: orderPrice;
            priceInUcents: number;
            services: number[];
            servicesDetails: service.renew.Service[];
        }
        //service.renew.Service
        // fullName: service.renew.Service.Service
        export interface Service {
            serviceId: number;
            serviceName: string;
            serviceType: string;
        }
    }
}
export namespace serviceList {
    //serviceList.Service
    // fullName: serviceList.Service.Service
    export interface Service {
        creationDate: string;
        details: complexType.SafeKeyValue<string>[];
        engagementDate?: string;
        expirationDate?: string;
        nextBillingDate?: string;
        plan: service.Plan;
        quantity: number;
        renew?: service.Renew;
        resource: service.Resource;
        route: service.Route;
        state: service.BillingStateEnum;
    }
}

/**
 * END API /service Models
 */
export function proxyService(ovhEngine: OvhRequestable): Service {
    return buildOvhProxy(ovhEngine, '/service');
}
export default proxyService;
/**
 * Api Proxy model
 */// Apis harmony
// path /service
export interface Service{
    // GET /service
    $get(): Promise<number[]>;
    $(serviceId: number): {
        // GET /service/{serviceId}
        $get(): Promise<serviceList.Service>;
        // PUT /service/{serviceId}
        $put(body?: {creationDate?: string, details?: complexType.SafeKeyValue<string>[], engagementDate?: string, expirationDate?: string, nextBillingDate?: string, plan?: service.Plan, quantity?: number, renew?: service.Renew, resource?: service.Resource, route?: service.Route, state?: service.BillingStateEnum}): Promise<void>;
        renew: {
            // GET /service/{serviceId}/renew
            $get(param?: {includeOptions?: boolean}): Promise<service.renew.RenewDescription[]>;
            // POST /service/{serviceId}/renew
            $post(body?: {dryRun?: boolean, duration: string, services: number[]}): Promise<service.renew.RenewOrder>;
        }
        reopen: {
            // POST /service/{serviceId}/reopen
            $post(): Promise<void>;
        }
        suspend: {
            // POST /service/{serviceId}/suspend
            $post(): Promise<void>;
        }
        terminate: {
            // POST /service/{serviceId}/terminate
            $post(): Promise<void>;
        }
    };
// Api
  /**
   * Operations about the services
   * List available services
   */
  get(path: '/service'): () => Promise<number[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/service/{serviceId}'): (params: {serviceId: number}) => Promise<serviceList.Service>;
  /**
   * Missing description
   * List possible renews for this service
   */
  get(path: '/service/{serviceId}/renew'): (params: {serviceId: string, includeOptions?: boolean}) => Promise<service.renew.RenewDescription[]>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/service/{serviceId}'): (params: {serviceId: number, creationDate?: string, details?: complexType.SafeKeyValue<string>[], engagementDate?: string, expirationDate?: string, nextBillingDate?: string, plan?: service.Plan, quantity?: number, renew?: service.Renew, resource?: service.Resource, route?: service.Route, state?: service.BillingStateEnum}) => Promise<void>;
  /**
   * Missing description
   * Create a renew order
   */
  post(path: '/service/{serviceId}/renew'): (params: {serviceId: string, dryRun?: boolean, duration: string, services: number[]}) => Promise<service.renew.RenewOrder>;
  /**
   * reopen operations
   * Reopen a suspended service
   */
  post(path: '/service/{serviceId}/reopen'): (params: {serviceId: number}) => Promise<void>;
  /**
   * suspend operations
   * Suspend the service. The service won't be accessible, but you will still be charged for it
   */
  post(path: '/service/{serviceId}/suspend'): (params: {serviceId: number}) => Promise<void>;
  /**
   * terminate operations
   * Terminates a suspended service
   */
  post(path: '/service/{serviceId}/terminate'): (params: {serviceId: number}) => Promise<void>;
}
/**
 * classic Model
 */type orderPrice = order.Price;

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
export namespace service {
    //service.BillingStateEnum
    export type BillingStateEnum = "expired" | "ok" | "pending" | "unpaid"
    //service.Plan
    // fullName: service.Plan.Plan
    export interface Plan {
        code?: string;
        product?: OVH.service.plan.Product;
    }
    //service.Renew
    // fullName: service.Renew.Renew
    export interface Renew {
        dayOfMonth?: number;
        interval?: OVH.service.renew.Interval;
        mode?: OVH.service.renew.Mode;
        possibleIntervals?: OVH.service.renew.Interval[];
        possibleModes?: OVH.service.renew.Mode[];
    }
    //service.Resource
    // fullName: service.Resource.Resource
    export interface Resource {
        displayName?: string;
        name?: string;
        state?: OVH.service.ResourceStateEnum;
    }
    //service.ResourceStateEnum
    export type ResourceStateEnum = "deleted" | "deleting" | "ok" | "opening" | "suspended" | "suspending" | "toDelete" | "toOpen" | "toSuspend"
    //service.Route
    // fullName: service.Route.Route
    export interface Route {
        path?: string;
        url?: string;
        vars?: OVH.complexType.SafeKeyValue<string>[];
    }
    export namespace consumption {
        //service.consumption.Transaction
        // fullName: service.consumption.Transaction.Transaction
        export interface Transaction {
            beginDate?: string;
            creationDate?: string;
            elements?: OVH.service.consumption.transaction.Element[];
            endDate?: string;
            id?: number;
            lastUpdate?: string;
            price?: OVH.order.Price;
            serviceId?: number;
        }
        export namespace transaction {
            //service.consumption.transaction.Element
            // fullName: service.consumption.transaction.Element.Element
            export interface Element {
                details?: OVH.service.consumption.transaction.Element.Detail[];
                planCode?: string;
                price?: OVH.order.Price;
                quantity?: number;
            }
            export namespace Element {
                //service.consumption.transaction.Element.Detail
                // fullName: service.consumption.transaction.Element.Detail.Detail
                export interface Detail {
                    quantity?: number;
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
            renewPeriod?: string;
            strategies?: OVH.service.renew.RenewStrategy[];
        }
        //service.renew.RenewForecast
        // fullName: service.renew.RenewForecast.RenewForecast
        export interface RenewForecast {
            details?: OVH.service.renew.RenewForecastDetail[];
            prices?: OVH.service.renew.RenewForecastDetailPrices;
        }
        //service.renew.RenewForecastDetail
        // fullName: service.renew.RenewForecastDetail.RenewForecastDetail
        export interface RenewForecastDetail {
            description?: string;
            quantity?: number;
            serviceName?: string;
            totalPrice?: OVH.order.Price;
            unitPrice?: OVH.order.Price;
        }
        //service.renew.RenewForecastDetailPrices
        // fullName: service.renew.RenewForecastDetailPrices.RenewForecastDetailPrices
        export interface RenewForecastDetailPrices {
            tax?: OVH.order.Price;
            withTax?: OVH.order.Price;
            withoutTax?: OVH.order.Price;
        }
        //service.renew.RenewOrder
        // fullName: service.renew.RenewOrder.RenewOrder
        export interface RenewOrder {
            date?: string;
            expirationDate?: string;
            orderId?: number;
            password?: string;
            pdfUrl?: string;
            priceWithTax?: OVH.order.Price;
            priceWithoutTax?: OVH.order.Price;
            retractionDate?: string;
            tax?: OVH.order.Price;
            url?: string;
        }
        //service.renew.RenewStrategy
        // fullName: service.renew.RenewStrategy.RenewStrategy
        export interface RenewStrategy {
            price?: OVH.order.Price;
            priceInUcents?: number;
            services?: number[];
            servicesDetails?: OVH.service.renew.Service[];
        }
        //service.renew.Service
        // fullName: service.renew.Service.Service
        export interface Service {
            serviceId?: number;
            serviceName?: string;
            serviceType?: string;
        }
    }
}
export namespace serviceList {
    //serviceList.Service
    // fullName: serviceList.Service.Service
    export interface Service {
        creationDate?: string;
        details?: OVH.complexType.SafeKeyValue<string>[];
        engagementDate?: string;
        expirationDate?: string;
        nextBillingDate?: string;
        plan?: OVH.service.Plan;
        quantity?: number;
        renew?: OVH.service.Renew;
        resource?: OVH.service.Resource;
        route?: OVH.service.Route;
        state?: OVH.service.BillingStateEnum;
    }
}
// Apis harmony
// path /service
export interface Service {
    // GET /service
    GET(): Promise<number[]>;
    [keys: string]: {
        // GET /service/{serviceId}
        GET(): Promise<serviceList.Service>;
        // PUT /service/{serviceId}
        PUT(body?: {body: serviceList.Service}): Promise<void>;
        terminate:  {
            // POST /service/{serviceId}/terminate
            POST(): Promise<void>;
        }
        suspend:  {
            // POST /service/{serviceId}/suspend
            POST(): Promise<void>;
        }
        renew:  {
            // GET /service/{serviceId}/renew
            GET(param?: {includeOptions?: boolean}): Promise<service.renew.RenewDescription[]>;
            // POST /service/{serviceId}/renew
            POST(body?: {dryRun?: boolean, duration: string, services: number[]}): Promise<service.renew.RenewOrder>;
        }
        reopen:  {
            // POST /service/{serviceId}/reopen
            POST(): Promise<void>;
        }
    } | any
}
// Api
type PathsServiceGET = '/service' |
  '/service/{serviceId}/renew' |
  '/service/{serviceId}';

type PathsServicePUT = '/service/{serviceId}';

type PathsServicePOST = '/service/{serviceId}/terminate' |
  '/service/{serviceId}/suspend' |
  '/service/{serviceId}/renew' |
  '/service/{serviceId}/reopen';

export class ApiService extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the services
   * List available services
   */
  public get(path: '/service'): Promise<number[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/service/{serviceId}', params: {serviceId: string}): Promise<serviceList.Service>;
  /**
   * Missing description
   * List possible renews for this service
   */
  public get(path: '/service/{serviceId}/renew', params: {serviceId: string, includeOptions?: boolean}): Promise<service.renew.RenewDescription[]>;
  public get(path: PathsServiceGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/service/{serviceId}', params: {serviceId: string, creationDate?: string, details?: OVH.complexType.SafeKeyValue<string>[], engagementDate?: string, expirationDate?: string, nextBillingDate?: string, plan?: OVH.service.Plan, quantity?: number, renew?: OVH.service.Renew, resource?: OVH.service.Resource, route?: OVH.service.Route, state?: OVH.service.BillingStateEnum}): Promise<void>;
  public put(path: PathsServicePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Missing description
   * Create a renew order
   */
  public post(path: '/service/{serviceId}/renew', params: {serviceId: string, dryRun?: boolean, duration: string, services: number[]}): Promise<service.renew.RenewOrder>;
  /**
   * reopen operations
   * Reopen a suspended service
   */
  public post(path: '/service/{serviceId}/reopen', params: {serviceId: string}): Promise<void>;
  /**
   * suspend operations
   * Suspend the service. The service won't be accessible, but you will still be charged for it
   */
  public post(path: '/service/{serviceId}/suspend', params: {serviceId: string}): Promise<void>;
  /**
   * terminate operations
   * Terminates a suspended service
   */
  public post(path: '/service/{serviceId}/terminate', params: {serviceId: string}): Promise<void>;
  public post(path: PathsServicePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
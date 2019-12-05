import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /service Models
 */
export namespace complexType {
    // interface fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export namespace order {
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace service {
    // type fullname: service.BillingStateEnum
    export type BillingStateEnum = "expired" | "ok" | "pending" | "unpaid"
    // interface fullName: service.Plan.Plan
    export interface Plan {
        code?: string;
        product: service.plan.Product;
    }
    // interface fullName: service.Renew.Renew
    export interface Renew {
        dayOfMonth?: number;
        interval?: service.renew.Interval;
        mode: service.renew.Mode;
        possibleIntervals?: service.renew.Interval[];
        possibleModes: service.renew.Mode[];
    }
    // interface fullName: service.Resource.Resource
    export interface Resource {
        displayName: string;
        name?: string;
        state?: service.ResourceStateEnum;
    }
    // type fullname: service.ResourceStateEnum
    export type ResourceStateEnum = "deleted" | "deleting" | "ok" | "opening" | "suspended" | "suspending" | "toDelete" | "toOpen" | "toSuspend"
    // interface fullName: service.Route.Route
    export interface Route {
        path?: string;
        url?: string;
        vars: complexType.SafeKeyValue<string>[];
    }
    export namespace consumption {
        // interface fullName: service.consumption.Transaction.Transaction
        export interface Transaction {
            beginDate: string;
            creationDate?: string;
            elements: service.consumption.transaction.Element[];
            endDate?: string;
            id?: number;
            lastUpdate?: string;
            price: order.Price;
            serviceId: number;
        }
        export namespace transaction {
            // interface fullName: service.consumption.transaction.Element.Element
            export interface Element {
                details: service.consumption.transaction.Element.Detail[];
                planCode: string;
                price: order.Price;
                quantity: number;
            }
            export namespace Element {
                // interface fullName: service.consumption.transaction.Element.Detail.Detail
                export interface Detail {
                    quantity: number;
                    unique_id?: string;
                }
            }
        }
    }
    export namespace plan {
        // interface fullName: service.plan.Product.Product
        export interface Product {
            name?: string;
        }
    }
    export namespace renew {
        // type fullname: service.renew.Interval
        export type Interval = "P1M" | "P1Y" | "P2Y" | "P3M" | "P3Y" | "P6M"
        // type fullname: service.renew.Mode
        export type Mode = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "deleteAtEndEngagement" | "deleteAtExpiration" | "manual" | "oneShot" | "option"
    }
}
export namespace serviceList {
    // interface fullName: serviceList.Service.Service
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
        $put(params?: {creationDate?: string, details?: complexType.SafeKeyValue<string>[], engagementDate?: string, expirationDate?: string, nextBillingDate?: string, plan?: service.Plan, quantity?: number, renew?: service.Renew, resource?: service.Resource, route?: service.Route, state?: service.BillingStateEnum}): Promise<void>;
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
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/service/{serviceId}'): (params: {serviceId: number, creationDate?: string, details?: complexType.SafeKeyValue<string>[], engagementDate?: string, expirationDate?: string, nextBillingDate?: string, plan?: service.Plan, quantity?: number, renew?: service.Renew, resource?: service.Resource, route?: service.Route, state?: service.BillingStateEnum}) => Promise<void>;
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

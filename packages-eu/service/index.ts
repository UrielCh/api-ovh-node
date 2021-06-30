import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /service Models
 * Source: https://eu.api.ovh.com/1.0/service.json
 */
export namespace complexType {
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValue.SafeKeyValue
     */
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export namespace order {
    /**
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * Price with it's currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace service {
    /**
     * Possible billing states
     * type fullname: service.BillingStateEnum
     */
    export type BillingStateEnum = "expired" | "ok" | "pending" | "unpaid"
    /**
     * Plan information
     * interface fullName: service.Plan.Plan
     */
    export interface Plan {
        code?: string;
        product: service.plan.Product;
    }
    /**
     * Renew information
     * interface fullName: service.Renew.Renew
     */
    export interface Renew {
        dayOfMonth?: number;
        interval?: service.renew.Interval;
        mode: service.renew.Mode;
        possibleIntervals?: service.renew.Interval[];
        possibleModes: service.renew.Mode[];
    }
    /**
     * Resource service informations
     * interface fullName: service.Resource.Resource
     */
    export interface Resource {
        displayName: string;
        name?: string;
        state?: service.ResourceStateEnum;
    }
    /**
     * Possible resource states
     * type fullname: service.ResourceStateEnum
     */
    export type ResourceStateEnum = "deleted" | "deleting" | "ok" | "opening" | "suspended" | "suspending" | "toDelete" | "toOpen" | "toSuspend"
    /**
     * route of this service
     * interface fullName: service.Route.Route
     */
    export interface Route {
        path?: string;
        url?: string;
        vars: complexType.SafeKeyValue<string>[];
    }
    export namespace consumption {
        /**
         * List of consumptions recorded in a range
         * interface fullName: service.consumption.Transaction.Transaction
         */
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
            /**
             * Element of consumption for resource
             * interface fullName: service.consumption.transaction.Element.Element
             */
            export interface Element {
                details: service.consumption.transaction.Element.Detail[];
                planCode: string;
                price: order.Price;
                quantity: number;
            }
            export namespace Element {
                /**
                 * Element of consumption for resource
                 * interface fullName: service.consumption.transaction.Element.Detail.Detail
                 */
                export interface Detail {
                    quantity: number;
                    unique_id?: string;
                }
            }
        }
    }
    export namespace plan {
        /**
         * Product plan information
         * interface fullName: service.plan.Product.Product
         */
        export interface Product {
            name?: string;
        }
    }
    export namespace renew {
        /**
         * Interval enum information
         * type fullname: service.renew.Interval
         */
        export type Interval = "P1M" | "P1Y" | "P2Y" | "P3M" | "P3Y" | "P6M"
        /**
         * Mode enum informations
         * type fullname: service.renew.Mode
         */
        export type Mode = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "deleteAtEndEngagement" | "deleteAtExpiration" | "manual" | "oneShot" | "option"
        /**
         * List possible renews for service
         * interface fullName: service.renew.RenewDescription.RenewDescription
         */
        export interface RenewDescription {
            renewPeriod: string;
            strategies: service.renew.RenewStrategy[];
        }
        /**
         * Representation of service's renew forecasting
         * interface fullName: service.renew.RenewForecast.RenewForecast
         */
        export interface RenewForecast {
            details: service.renew.RenewForecastDetail[];
            prices: service.renew.RenewForecastDetailPrices;
        }
        /**
         * Representation of a product renew pricing
         * interface fullName: service.renew.RenewForecastDetail.RenewForecastDetail
         */
        export interface RenewForecastDetail {
            description?: string;
            quantity: number;
            serviceName: string;
            totalPrice: order.Price;
            unitPrice: order.Price;
        }
        /**
         * Prices for renew forecasting
         * interface fullName: service.renew.RenewForecastDetailPrices.RenewForecastDetailPrices
         */
        export interface RenewForecastDetailPrices {
            tax: order.Price;
            withTax: order.Price;
            withoutTax: order.Price;
        }
        /**
         * Details about a renew Order
         * interface fullName: service.renew.RenewOrder.RenewOrder
         */
        export interface RenewOrder {
            date?: string;
            expirationDate?: string;
            orderId: number;
            password: string;
            pdfUrl: string;
            priceWithTax: order.Price;
            priceWithoutTax: order.Price;
            retractionDate?: string;
            tax: order.Price;
            url: string;
        }
        /**
         * Representation of a product renew pricing
         * interface fullName: service.renew.RenewStrategy.RenewStrategy
         */
        export interface RenewStrategy {
            price: order.Price;
            priceInUcents: number;
            services: number[];
            servicesDetails: service.renew.Service[];
        }
        /**
         * Description of a service
         * interface fullName: service.renew.Service.Service
         */
        export interface Service {
            serviceId: number;
            serviceName: string;
            serviceType: string;
        }
    }
}
export namespace serviceList {
    /**
     * Details about a Service
     * interface fullName: serviceList.Service.Service
     */
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
 * Api model for /service
 */
export interface Service {
    /**
     * List available services
     * GET /service
     */
    $get(): Promise<number[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceId: number): {
        /**
         * Get this object properties
         * GET /service/{serviceId}
         */
        $get(): Promise<serviceList.Service>;
        /**
         * Alter this object properties
         * PUT /service/{serviceId}
         */
        $put(params?: { creationDate?: string, details?: complexType.SafeKeyValue<string>[], engagementDate?: string, expirationDate?: string, nextBillingDate?: string, plan?: service.Plan, quantity?: number, renew?: service.Renew, resource?: service.Resource, route?: service.Route, state?: service.BillingStateEnum }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        renew: {
            /**
             * List possible renews for this service
             * GET /service/{serviceId}/renew
             */
            $get(params?: { includeOptions?: boolean }): Promise<service.renew.RenewDescription[]>;
            /**
             * Create a renew order
             * POST /service/{serviceId}/renew
             */
            $post(params: { dryRun?: boolean, duration: string, services: number[] }): Promise<service.renew.RenewOrder>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        reopen: {
            /**
             * Reopen a suspended service
             * POST /service/{serviceId}/reopen
             */
            $post(): Promise<void>;
        }
        suspend: {
            /**
             * Suspend the service. The service won't be accessible, but you will still be charged for it
             * POST /service/{serviceId}/suspend
             */
            $post(): Promise<void>;
        }
        terminate: {
            /**
             * Terminates a suspended service
             * POST /service/{serviceId}/terminate
             */
            $post(): Promise<void>;
        }
    };
}

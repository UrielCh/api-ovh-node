import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /service Models
 */
export declare namespace complexType {
    interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export declare namespace order {
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export declare namespace service {
    type BillingStateEnum = "expired" | "ok" | "pending" | "unpaid";
    interface Plan {
        code?: string;
        product: service.plan.Product;
    }
    interface Renew {
        dayOfMonth?: number;
        interval?: service.renew.Interval;
        mode: service.renew.Mode;
        possibleIntervals?: service.renew.Interval[];
        possibleModes: service.renew.Mode[];
    }
    interface Resource {
        displayName: string;
        name?: string;
        state?: service.ResourceStateEnum;
    }
    type ResourceStateEnum = "deleted" | "deleting" | "ok" | "opening" | "suspended" | "suspending" | "toDelete" | "toOpen" | "toSuspend";
    interface Route {
        path?: string;
        url?: string;
        vars: complexType.SafeKeyValue<string>[];
    }
    namespace consumption {
        interface Transaction {
            beginDate: string;
            creationDate?: string;
            elements: service.consumption.transaction.Element[];
            endDate?: string;
            id?: number;
            lastUpdate?: string;
            price: order.Price;
            serviceId: number;
        }
        namespace transaction {
            interface Element {
                details: service.consumption.transaction.Element.Detail[];
                planCode: string;
                price: order.Price;
                quantity: number;
            }
            namespace Element {
                interface Detail {
                    quantity: number;
                    unique_id?: string;
                }
            }
        }
    }
    namespace plan {
        interface Product {
            name?: string;
        }
    }
    namespace renew {
        type Interval = "P1M" | "P1Y" | "P2Y" | "P3M" | "P3Y" | "P6M";
        type Mode = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "deleteAtEndEngagement" | "deleteAtExpiration" | "manual" | "oneShot" | "option";
        interface RenewDescription {
            renewPeriod: string;
            strategies: service.renew.RenewStrategy[];
        }
        interface RenewForecast {
            details: service.renew.RenewForecastDetail[];
            prices: service.renew.RenewForecastDetailPrices;
        }
        interface RenewForecastDetail {
            description?: string;
            quantity: number;
            serviceName: string;
            totalPrice: order.Price;
            unitPrice: order.Price;
        }
        interface RenewForecastDetailPrices {
            tax: order.Price;
            withTax: order.Price;
            withoutTax: order.Price;
        }
        interface RenewOrder {
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
        interface RenewStrategy {
            price: order.Price;
            priceInUcents: number;
            services: number[];
            servicesDetails: service.renew.Service[];
        }
        interface Service {
            serviceId: number;
            serviceName: string;
            serviceType: string;
        }
    }
}
export declare namespace serviceList {
    interface Service {
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
export declare function proxyService(ovhEngine: OvhRequestable): Service;
export default proxyService;
/**
 * Api Proxy model
 */ export interface Service {
    $get(): Promise<number[]>;
    $(serviceId: number): {
        $get(): Promise<serviceList.Service>;
        $put(params?: {
            creationDate?: string;
            details?: complexType.SafeKeyValue<string>[];
            engagementDate?: string;
            expirationDate?: string;
            nextBillingDate?: string;
            plan?: service.Plan;
            quantity?: number;
            renew?: service.Renew;
            resource?: service.Resource;
            route?: service.Route;
            state?: service.BillingStateEnum;
        }): Promise<void>;
        renew: {
            $get(params?: {
                includeOptions?: boolean;
            }): Promise<service.renew.RenewDescription[]>;
            $post(params: {
                dryRun?: boolean;
                duration: string;
                services: number[];
            }): Promise<service.renew.RenewOrder>;
        };
        reopen: {
            $post(): Promise<void>;
        };
        suspend: {
            $post(): Promise<void>;
        };
        terminate: {
            $post(): Promise<void>;
        };
    };
    /**
     * Operations about the services
     * List available services
     */
    get(path: '/service'): () => Promise<number[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/service/{serviceId}'): (params: {
        serviceId: number;
    }) => Promise<serviceList.Service>;
    /**
     * Missing description
     * List possible renews for this service
     */
    get(path: '/service/{serviceId}/renew'): (params: {
        serviceId: string;
        includeOptions?: boolean;
    }) => Promise<service.renew.RenewDescription[]>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/service/{serviceId}'): (params: {
        serviceId: number;
        creationDate?: string;
        details?: complexType.SafeKeyValue<string>[];
        engagementDate?: string;
        expirationDate?: string;
        nextBillingDate?: string;
        plan?: service.Plan;
        quantity?: number;
        renew?: service.Renew;
        resource?: service.Resource;
        route?: service.Route;
        state?: service.BillingStateEnum;
    }) => Promise<void>;
    /**
     * Missing description
     * Create a renew order
     */
    post(path: '/service/{serviceId}/renew'): (params: {
        serviceId: string;
        dryRun?: boolean;
        duration: string;
        services: number[];
    }) => Promise<service.renew.RenewOrder>;
    /**
     * reopen operations
     * Reopen a suspended service
     */
    post(path: '/service/{serviceId}/reopen'): (params: {
        serviceId: number;
    }) => Promise<void>;
    /**
     * suspend operations
     * Suspend the service. The service won't be accessible, but you will still be charged for it
     */
    post(path: '/service/{serviceId}/suspend'): (params: {
        serviceId: number;
    }) => Promise<void>;
    /**
     * terminate operations
     * Terminates a suspended service
     */
    post(path: '/service/{serviceId}/terminate'): (params: {
        serviceId: number;
    }) => Promise<void>;
}

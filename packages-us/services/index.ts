import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /services Models
 * Source: https://api.us.ovhcloud.com/1.0/services.json
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
export namespace services {
    export namespace billing {
        // interface fullName: services.billing.Invoice.Invoice
        export interface Invoice {
            date: string;
            id: string;
            lines: services.billing.InvoiceLine[];
        }
        // interface fullName: services.billing.InvoiceLine.InvoiceLine
        export interface InvoiceLine {
            description: string;
            periodEnd?: string;
            periodStart?: string;
            price: order.Price;
            quantity: number;
            serviceName: string;
            totalPrice: order.Price;
            type: services.billing.InvoiceLineTypeEnum;
        }
        // type fullname: services.billing.InvoiceLineTypeEnum
        export type InvoiceLineTypeEnum = "accessory" | "consumption" | "creation" | "deposit" | "duration" | "gift" | "installation" | "misc" | "other" | "outplan" | "quantity" | "special" | "voucher"
        export namespace engagement {
            // interface fullName: services.billing.engagement.Engagement.Engagement
            export interface Engagement {
                currentPeriod: services.billing.engagement.EngagementPeriod;
            }
            // interface fullName: services.billing.engagement.EngagementPeriod.EngagementPeriod
            export interface EngagementPeriod {
                endDate?: string;
                startDate: string;
            }
        }
    }
    export namespace expanded {
        // interface fullName: services.expanded.Billing.Billing
        export interface Billing {
            expirationDate?: string;
            nextBillingDate?: string;
            plan?: services.expanded.Plan;
        }
        // interface fullName: services.expanded.Plan.Plan
        export interface Plan {
            code: string;
            invoiceName: string;
        }
        // interface fullName: services.expanded.Product.Product
        export interface Product {
            description: string;
            name: string;
        }
        // interface fullName: services.expanded.Resource.Resource
        export interface Resource {
            displayName: string;
            name: string;
            product?: services.expanded.Product;
        }
        // interface fullName: services.expanded.Route.Route
        export interface Route {
            path?: string;
            url?: string;
            vars: complexType.SafeKeyValue<string>[];
        }
        // interface fullName: services.expanded.Service.Service
        export interface Service {
            billing: services.expanded.Billing;
            resource: services.expanded.Resource;
            route?: services.expanded.Route;
            serviceId: number;
        }
    }
}

/**
 * END API /services Models
 */
export function proxyServices(ovhEngine: OvhRequestable): Services {
    return buildOvhProxy(ovhEngine, '/services');
}
export default proxyServices;
/**
 * Api Proxy model
 */// Apis harmony
// path /services
export interface Services{
    // GET /services
    $get(): Promise<services.expanded.Service[]>;
    $(serviceId: number): {
        // GET /services/{serviceId}
        $get(): Promise<services.expanded.Service>;
        billing: {
            engagement: {
                // GET /services/{serviceId}/billing/engagement
                $get(): Promise<services.billing.engagement.Engagement>;
            }
        }
    };
}

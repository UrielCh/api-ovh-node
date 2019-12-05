import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /services Models
 */
export declare namespace complexType {
    interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export declare namespace order {
    interface Contract {
        content: string;
        name: string;
        url: string;
    }
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Order {
        contracts: order.Contract[];
        details: order.OrderDetail[];
        orderId?: number;
        prices: order.OrderPrices;
        url?: string;
    }
    interface OrderDetail {
        cartItemID?: number;
        description: string;
        detailType?: order.OrderDetailTypeEnum;
        domain: string;
        originalTotalPrice: order.Price;
        quantity: number;
        reductionTotalPrice: order.Price;
        reductions: order.Reduction[];
        totalPrice: order.Price;
        unitPrice: order.Price;
    }
    type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER";
    interface OrderPrices {
        originalWithoutTax?: order.Price;
        reduction?: order.Price;
        tax: order.Price;
        withTax: order.Price;
        withoutTax: order.Price;
    }
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
    interface Reduction {
        context: order.ReductionContextEnum;
        price: order.Price;
        type: order.ReductionTypeEnum;
        value: order.Price;
    }
    type ReductionContextEnum = "promotion" | "voucher";
    type ReductionTypeEnum = "percentage" | "forced_amount" | "fixed_amount";
    namespace cart {
        interface GenericProductDefinition {
            planCode: string;
            prices: order.cart.GenericProductPricing[];
            productName: string;
            productType: order.cart.GenericProductTypeEnum;
        }
        interface GenericProductPricing {
            capacities: order.cart.GenericProductPricingCapacitiesEnum[];
            description: string;
            duration: string;
            interval: number;
            maximumQuantity: number;
            maximumRepeat?: number;
            minimumQuantity: number;
            minimumRepeat: number;
            price: order.Price;
            priceInUcents: number;
            pricingMode: string;
            pricingType: order.cart.GenericProductPricingTypeEnum;
        }
        type GenericProductPricingCapacitiesEnum = "installation" | "renew" | "upgrade" | "downgrade" | "detach";
        type GenericProductPricingTypeEnum = "rental" | "consumption" | "purchase";
        type GenericProductTypeEnum = "delivery" | "deposit" | "shipping" | "cloud_service" | "saas_license" | "storage" | "domain";
    }
}
export declare namespace services {
    namespace billing {
        interface Invoice {
            date: string;
            id: string;
            lines: services.billing.InvoiceLine[];
        }
        interface InvoiceLine {
            description: string;
            periodEnd?: string;
            periodStart?: string;
            price: order.Price;
            quantity: number;
            serviceName: string;
            totalPrice: order.Price;
            type?: services.billing.InvoiceLineTypeEnum;
        }
        type InvoiceLineTypeEnum = "accessory" | "consumption" | "creation" | "deposit" | "duration" | "gift" | "installation" | "misc" | "other" | "outplan" | "quantity" | "special" | "voucher";
        namespace engagement {
            interface Engagement {
                currentPeriod: services.billing.engagement.EngagementPeriod;
            }
            interface EngagementPeriod {
                endDate?: string;
                startDate: string;
            }
        }
    }
    namespace contacts {
        interface ContactChangeRequest {
            admin: string[];
            billing: string[];
            technical: string[];
        }
        interface Task {
            id: number;
            route: string;
        }
    }
    namespace expanded {
        interface Billing {
            expirationDate?: string;
            nextBillingDate?: string;
            plan?: services.expanded.Plan;
        }
        interface Plan {
            code: string;
            invoiceName: string;
        }
        interface Product {
            description: string;
            name: string;
        }
        interface Resource {
            displayName: string;
            name: string;
            product?: services.expanded.Product;
        }
        interface Route {
            path?: string;
            url?: string;
            vars: complexType.SafeKeyValue<string>[];
        }
        interface Service {
            billing: services.expanded.Billing;
            resource: services.expanded.Resource;
            route?: services.expanded.Route;
            serviceId: number;
        }
    }
    namespace form {
        interface Answer {
            question: string;
            value: string;
        }
        interface AnswerAllowedValue {
            key: string;
        }
        type AnswerTypeEnum = "boolean" | "date" | "datetime" | "double" | "enum" | "long" | "string" | "text";
        interface Description {
            name: string;
            questions: services.form.Question[];
        }
        interface Form {
            answers: services.form.Answer[];
        }
        interface Question {
            answers?: services.form.AnswerAllowedValue[];
            mandatory: boolean;
            question: string;
            type: services.form.AnswerTypeEnum;
        }
        interface Response {
            message: string;
        }
    }
    namespace operation {
        interface ExecutionRequest {
            autoPayWithPreferredPaymentMethod: boolean;
            duration: string;
            pricingMode: string;
            quantity: number;
        }
        interface Order {
            order?: order.Order;
        }
    }
    namespace terminate {
        interface ConfirmServiceTerminationRequest {
            acknowledgePotentialFees: boolean;
            token: string;
        }
        interface TerminationAnswer {
            message: string;
        }
        interface TerminationFees {
            durationLeft: string;
            fees: order.Price;
        }
        interface TerminationRequest {
            acknowledgePotentialFees: boolean;
        }
    }
}
/**
 * END API /services Models
 */
export declare function proxyServices(ovhEngine: OvhRequestable): Services;
export default proxyServices;
/**
 * Api Proxy model
 */ export interface Services {
    $get(params?: {
        orderBy?: string;
        routes?: string;
        sort?: string;
    }): Promise<number[]>;
    $(serviceId: number): {
        $get(): Promise<services.expanded.Service>;
        billing: {
            engagement: {
                $get(): Promise<services.billing.engagement.Engagement>;
            };
        };
    };
    /**
     * Get list of your service details
     * List available services
     */
    get(path: '/services'): (params?: {
        orderBy?: string;
        routes?: string;
        sort?: string;
    }) => Promise<number[]>;
    /**
     * Get list of your service details
     * Get details about a service
     */
    get(path: '/services/{serviceId}'): (params: {
        serviceId: number;
    }) => Promise<services.expanded.Service>;
    /**
     * Engagement for a given service
     * Get engagement details
     */
    get(path: '/services/{serviceId}/billing/engagement'): (params: {
        serviceId: number;
    }) => Promise<services.billing.engagement.Engagement>;
}

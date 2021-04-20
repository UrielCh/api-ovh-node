import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /order Models
 * Source: https://ca.api.kimsufi.com/1.0/order.json
 */
export namespace dedicated {
    export namespace server {
        /**
         * distincts support level
         * type fullname: dedicated.server.SupportLevelOrderableEnum
         */
        export type SupportLevelOrderableEnum = "critical" | "fastpath" | "gs"
    }
}
export namespace order {
    /**
     * A contract
     * interface fullName: order.Contract.Contract
     */
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
    /**
     * Currency code
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * An order
     * interface fullName: order.Order.Order
     */
    export interface Order {
        contracts: order.Contract[];
        details: order.OrderDetail[];
        orderId?: number;
        prices: order.OrderPrices;
        url?: string;
    }
    /**
     * Detail of an order
     * interface fullName: order.OrderDetail.OrderDetail
     */
    export interface OrderDetail {
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
    /**
     * Product type of item in order
     * type fullname: order.OrderDetailTypeEnum
     */
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    /**
     * Prices of an order
     * interface fullName: order.OrderPrices.OrderPrices
     */
    export interface OrderPrices {
        originalWithoutTax?: order.Price;
        reduction?: order.Price;
        tax: order.Price;
        withTax: order.Price;
        withoutTax: order.Price;
    }
    /**
     * Price with its currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
    /**
     * Order detail reduction
     * interface fullName: order.Reduction.Reduction
     */
    export interface Reduction {
        context: order.ReductionContextEnum;
        price: order.Price;
        type: order.ReductionTypeEnum;
        value: order.Price;
    }
    /**
     * Context of the reduction
     * type fullname: order.ReductionContextEnum
     */
    export type ReductionContextEnum = "promotion" | "voucher"
    /**
     * Type of reduction
     * type fullname: order.ReductionTypeEnum
     */
    export type ReductionTypeEnum = "percentage" | "forced_amount" | "fixed_amount"
    export namespace cart {
        /**
         * Representation of a generic product
         * interface fullName: order.cart.GenericProductDefinition.GenericProductDefinition
         */
        export interface GenericProductDefinition {
            planCode: string;
            prices: order.cart.GenericProductPricing[];
            productName: string;
            productType: order.cart.GenericProductTypeEnum;
        }
        /**
         * Representation of a product pricing
         * interface fullName: order.cart.GenericProductPricing.GenericProductPricing
         */
        export interface GenericProductPricing {
            capacities: order.cart.GenericProductPricingCapacitiesEnum[];
            description: string;
            duration: string;
            interval: number;
            maximumQuantity?: number;
            maximumRepeat?: number;
            minimumQuantity: number;
            minimumRepeat: number;
            price: order.Price;
            priceInUcents: number;
            pricingMode: string;
            pricingType: order.cart.GenericProductPricingTypeEnum;
        }
        /**
         * Capacity of a pricing (type)
         * type fullname: order.cart.GenericProductPricingCapacitiesEnum
         */
        export type GenericProductPricingCapacitiesEnum = "installation" | "renew" | "upgrade" | "downgrade" | "detach" | "dynamic"
        /**
         * Type of a pricing
         * type fullname: order.cart.GenericProductPricingTypeEnum
         */
        export type GenericProductPricingTypeEnum = "rental" | "consumption" | "purchase"
        /**
         * Type of a product
         * type fullname: order.cart.GenericProductTypeEnum
         */
        export type GenericProductTypeEnum = "delivery" | "deposit" | "shipping" | "cloud_service" | "saas_license" | "storage" | "domain"
    }
}

/**
 * END API /order Models
 */
export function proxyOrder(ovhEngine: OvhRequestable): Order {
    return buildOvhProxy(ovhEngine, '/order');
}
export default proxyOrder;
/**
 * Api model for /order
 */
export interface Order {
    dedicated: {
        server: {
            /**
             * List available services
             * GET /order/dedicated/server
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/dedicated/server/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
}

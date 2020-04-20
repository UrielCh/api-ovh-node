import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /services Models
 * Source: https://eu.api.ovh.com/1.0/services.json
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
            maximumQuantity: number;
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
        export type GenericProductPricingCapacitiesEnum = "installation" | "renew" | "upgrade" | "downgrade" | "detach"
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
export namespace services {
    export namespace billing {
        /**
         * Description of an invoice
         * interface fullName: services.billing.Invoice.Invoice
         */
        export interface Invoice {
            date: string;
            id: string;
            lines: services.billing.InvoiceLine[];
        }
        /**
         * Description of an invoice line
         * interface fullName: services.billing.InvoiceLine.InvoiceLine
         */
        export interface InvoiceLine {
            description: string;
            periodEnd?: string;
            periodStart?: string;
            price: order.Price;
            quantity: number;
            serviceName: string;
            totalPrice: order.Price;
            type?: services.billing.InvoiceLineTypeEnum;
        }
        /**
         * Type of item
         * type fullname: services.billing.InvoiceLineTypeEnum
         */
        export type InvoiceLineTypeEnum = "accessory" | "consumption" | "creation" | "deposit" | "duration" | "gift" | "installation" | "misc" | "other" | "outplan" | "quantity" | "special" | "voucher"
        export namespace engagement {
            /**
             * Description of the rule applied at the end of the Engagement
             * interface fullName: services.billing.engagement.EndRule.EndRule
             */
            export interface EndRule {
                possibleStrategies: services.billing.engagement.EndStrategyEnum[];
                strategy: services.billing.engagement.EndStrategyEnum;
            }
            /**
             * Strategy applicable at the end of the Engagement
             * type fullname: services.billing.engagement.EndStrategyEnum
             */
            export type EndStrategyEnum = "STOP_ENGAGEMENT_FALLBACK_DEFAULT_PRICE" | "REACTIVATE_ENGAGEMENT" | "CANCEL_SERVICE" | "STOP_ENGAGEMENT_KEEP_PRICE"
            /**
             * Description of an Engagement
             * interface fullName: services.billing.engagement.Engagement.Engagement
             */
            export interface Engagement {
                currentPeriod: services.billing.engagement.EngagementPeriod;
                endRule?: services.billing.engagement.EndRule;
            }
            /**
             * Period of Engagement
             * interface fullName: services.billing.engagement.EngagementPeriod.EngagementPeriod
             */
            export interface EngagementPeriod {
                endDate?: string;
                startDate: string;
            }
            /**
             * Update your Engagement end rules
             * interface fullName: services.billing.engagement.UpdateEndRuleRequest.UpdateEndRuleRequest
             */
            export interface UpdateEndRuleRequest {
                strategy: services.billing.engagement.EndStrategyEnum;
            }
        }
    }
    export namespace contacts {
        /**
         * Contact change request
         * interface fullName: services.contacts.ContactChangeRequest.ContactChangeRequest
         */
        export interface ContactChangeRequest {
            admin: string[];
            billing: string[];
            technical: string[];
        }
        /**
         * Contact change task
         * interface fullName: services.contacts.Task.Task
         */
        export interface Task {
            id: number;
            route: string;
        }
    }
    export namespace expanded {
        /**
         * Billing informations of the service
         * interface fullName: services.expanded.Billing.Billing
         */
        export interface Billing {
            expirationDate?: string;
            nextBillingDate?: string;
            plan?: services.expanded.Plan;
        }
        /**
         * Plan of the service
         * interface fullName: services.expanded.Plan.Plan
         */
        export interface Plan {
            code: string;
            invoiceName: string;
        }
        /**
         * Product of the service
         * interface fullName: services.expanded.Product.Product
         */
        export interface Product {
            description: string;
            name: string;
        }
        /**
         * Resource of the service
         * interface fullName: services.expanded.Resource.Resource
         */
        export interface Resource {
            displayName: string;
            name: string;
            product?: services.expanded.Product;
        }
        /**
         * Route of the service
         * interface fullName: services.expanded.Route.Route
         */
        export interface Route {
            path?: string;
            url?: string;
            vars: complexType.SafeKeyValue<string>[];
        }
        /**
         * Description of a service
         * interface fullName: services.expanded.Service.Service
         */
        export interface Service {
            billing: services.expanded.Billing;
            resource: services.expanded.Resource;
            route?: services.expanded.Route;
            serviceId: number;
        }
    }
    export namespace form {
        /**
         * Answer to a form
         * interface fullName: services.form.Answer.Answer
         */
        export interface Answer {
            question: string;
            value: string;
        }
        /**
         * Possible value for an answer to the question
         * interface fullName: services.form.AnswerAllowedValue.AnswerAllowedValue
         */
        export interface AnswerAllowedValue {
            key: string;
        }
        /**
         * Type of the answer
         * type fullname: services.form.AnswerTypeEnum
         */
        export type AnswerTypeEnum = "boolean" | "date" | "datetime" | "double" | "enum" | "long" | "string" | "text"
        /**
         * Description of a form
         * interface fullName: services.form.Description.Description
         */
        export interface Description {
            name: string;
            questions: services.form.Question[];
        }
        /**
         * Input body for posting a form
         * interface fullName: services.form.Form.Form
         */
        export interface Form {
            answers: services.form.Answer[];
        }
        /**
         * Question description for a churn form
         * interface fullName: services.form.Question.Question
         */
        export interface Question {
            answers?: services.form.AnswerAllowedValue[];
            mandatory: boolean;
            question: string;
            type: services.form.AnswerTypeEnum;
        }
        /**
         * Response ack for posting a form
         * interface fullName: services.form.Response.Response
         */
        export interface Response {
            message: string;
        }
    }
    export namespace operation {
        /**
         * Missing description
         * interface fullName: services.operation.ExecutionRequest.ExecutionRequest
         */
        export interface ExecutionRequest {
            autoPayWithPreferredPaymentMethod: boolean;
            duration: string;
            pricingMode: string;
            quantity: number;
        }
        /**
         * Order created by an Operation to modify a Service
         * interface fullName: services.operation.Order.Order
         */
        export interface Order {
            order?: order.Order;
        }
    }
    export namespace terminate {
        /**
         * Confirm service termination request
         * interface fullName: services.terminate.ConfirmServiceTerminationRequest.ConfirmServiceTerminationRequest
         */
        export interface ConfirmServiceTerminationRequest {
            acknowledgePotentialFees: boolean;
            token: string;
        }
        /**
         * Termination instructions
         * interface fullName: services.terminate.TerminationAnswer.TerminationAnswer
         */
        export interface TerminationAnswer {
            message: string;
        }
        /**
         * Termination fees
         * interface fullName: services.terminate.TerminationFees.TerminationFees
         */
        export interface TerminationFees {
            durationLeft: string;
            fees: order.Price;
        }
        /**
         * Service termination request
         * interface fullName: services.terminate.TerminationRequest.TerminationRequest
         */
        export interface TerminationRequest {
            acknowledgePotentialFees: boolean;
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
 * Api model for /services
 */
export interface Services {
    /**
     * List available services
     * GET /services
     */
    $get(params?: { orderBy?: string, routes?: string, sort?: string }): Promise<number[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceId: number): {
        /**
         * Get details about a service
         * GET /services/{serviceId}
         */
        $get(): Promise<services.expanded.Service>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        billing: {
            engagement: {
                /**
                 * Get engagement details
                 * GET /services/{serviceId}/billing/engagement
                 */
                $get(): Promise<services.billing.engagement.Engagement>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        detach: {
            /**
             * List offers this option can be converted to
             * GET /services/{serviceId}/detach
             */
            $get(): Promise<order.cart.GenericProductDefinition[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(planCode: string): {
                /**
                 * View an offer this option can be converted to
                 * GET /services/{serviceId}/detach/{planCode}
                 */
                $get(): Promise<order.cart.GenericProductDefinition>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                execute: {
                    /**
                     * Perform the migration to a standalone offer. May require you to pay an Order
                     * POST /services/{serviceId}/detach/{planCode}/execute
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, duration: string, pricingMode: string, quantity: number }): Promise<services.operation.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                simulate: {
                    /**
                     * Simulate the migration to a standalone offer. It won't generate any Order or issue any changes to your Service
                     * POST /services/{serviceId}/detach/{planCode}/simulate
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, duration: string, pricingMode: string, quantity: number }): Promise<services.operation.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        form: {
            /**
             * List available forms for service
             * GET /services/{serviceId}/form
             */
            $get(): Promise<services.form.Description[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(formName: string): {
                /**
                 * Get specified form description for service
                 * GET /services/{serviceId}/form/{formName}
                 */
                $get(): Promise<services.form.Description>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                answer: {
                    /**
                     * Post answers to the form for your service
                     * POST /services/{serviceId}/form/{formName}/answer
                     */
                    $post(params: { answers: services.form.Answer[] }): Promise<services.form.Response>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
    };
}

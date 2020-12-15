import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /services Models
 * Source: https://api.us.ovhcloud.com/1.0/services.json
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
         * Capacity of a pricing (type)
         * type fullname: order.cart.GenericProductPricingCapacitiesEnum
         */
        export type GenericProductPricingCapacitiesEnum = "installation" | "renew" | "upgrade" | "downgrade" | "detach" | "dynamic"
        /**
         * Type of a pricing
         * type fullname: order.cart.GenericProductPricingTypeEnum
         */
        export type GenericProductPricingTypeEnum = "rental" | "consumption" | "purchase"
    }
}
export namespace services {
    export namespace billing {
        /**
         * Invoice details
         * interface fullName: services.billing.Invoice.Invoice
         */
        export interface Invoice {
            date: string;
            id: string;
            lines: services.billing.InvoiceLine[];
        }
        /**
         * Item details
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
            type: services.billing.InvoiceLineTypeEnum;
        }
        /**
         * Type of line
         * type fullname: services.billing.InvoiceLineTypeEnum
         */
        export type InvoiceLineTypeEnum = "accessory" | "consumption" | "creation" | "deposit" | "duration" | "gift" | "installation" | "misc" | "other" | "outplan" | "quantity" | "special" | "voucher"
        /**
         * Representation of a service pricing
         * interface fullName: services.billing.Pricing.Pricing
         */
        export interface Pricing {
            capacities: order.cart.GenericProductPricingCapacitiesEnum[];
            description: string;
            duration: string;
            engagementConfiguration?: services.billing.Pricing.EngagementConfiguration;
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
        export namespace Pricing {
            /**
             * Configuration of an engagement triggered by a given pricing
             * interface fullName: services.billing.Pricing.EngagementConfiguration.EngagementConfiguration
             */
            export interface EngagementConfiguration {
                defaultEndAction: services.billing.engagement.EndStrategyEnum;
                duration: string;
                type: services.billing.engagement.TypeEnum;
            }
        }
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
             * Ongoing Engagement request on a Service
             * interface fullName: services.billing.engagement.EngagementRequest.EngagementRequest
             */
            export interface EngagementRequest {
                options: services.billing.engagement.EngagementRequestOption[];
                order?: services.operation.Order;
                pricing: services.billing.Pricing;
                requestDate: string;
            }
            /**
             * Parameters needed to create an Engagement
             * interface fullName: services.billing.engagement.EngagementRequestCreation.EngagementRequestCreation
             */
            export interface EngagementRequestCreation {
                pricingMode: string;
            }
            /**
             * Pricing detail for an Ongoing Engagement request on an option Service
             * interface fullName: services.billing.engagement.EngagementRequestOption.EngagementRequestOption
             */
            export interface EngagementRequestOption {
                pricing: services.billing.Pricing;
                serviceId: number;
            }
            /**
             * Engagement's type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic)
             * type fullname: services.billing.engagement.TypeEnum
             */
            export type TypeEnum = "periodic" | "upfront"
        }
    }
    export namespace consumption {
        /**
         * Element's quantity consumed for a given time range
         * interface fullName: services.consumption.Detail.Detail
         */
        export interface Detail {
            beginDate?: string;
            endDate?: string;
            pricingMode: string;
            quantity: number;
        }
        /**
         * Consumption information for a specific offer
         * interface fullName: services.consumption.Element.Element
         */
        export interface Element {
            details: services.consumption.Detail[];
            metadata?: complexType.SafeKeyValue<string>[];
            planCode: string;
            planFamily: string;
            price: order.Price;
            quantity: number;
            uniqueId?: string;
        }
        /**
         * Consumed amount for a given commercial offer's family
         * interface fullName: services.consumption.PricePlanFamily.PricePlanFamily
         */
        export interface PricePlanFamily {
            planFamily: string;
            price: order.Price;
        }
        /**
         * Summary of the consumption of a service
         * interface fullName: services.consumption.Summary.Summary
         */
        export interface Summary {
            beginDate: string;
            endDate: string;
            id?: number;
            orderId?: number;
            price: order.Price;
            priceByPlanFamily: services.consumption.PricePlanFamily[];
            serviceId: number;
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
            pricing?: services.billing.Pricing;
        }
        /**
         * Engagement summary for a Service
         * interface fullName: services.expanded.EngagementSummary.EngagementSummary
         */
        export interface EngagementSummary {
            endDate?: string;
            endRule?: services.billing.engagement.EndRule;
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
            parentServiceId?: number;
            resource: services.expanded.Resource;
            route?: services.expanded.Route;
            serviceId: number;
        }
        /**
         * Technical information of a baremetal service
         * interface fullName: services.expanded.TechnicalDetails.TechnicalDetails
         */
        export interface TechnicalDetails {
            baremetalServers?: services.expanded.technical.BaremetalServer;
        }
        export namespace technical {
            /**
             * Technical information on baremetal service
             * interface fullName: services.expanded.technical.BaremetalServer.BaremetalServer
             */
            export interface BaremetalServer {
                bandwidth?: services.expanded.technical.baremetalServer.Bandwidth;
                memory?: services.expanded.technical.baremetalServer.Memory;
                server?: services.expanded.technical.baremetalServer.Server;
                storage?: services.expanded.technical.baremetalServer.Storage;
                vrack?: services.expanded.technical.baremetalServer.Vrack;
            }
            export namespace baremetalServer {
                /**
                 * Technical information on bandwidth of a baremetal service
                 * interface fullName: services.expanded.technical.baremetalServer.Bandwidth.Bandwidth
                 */
                export interface Bandwidth {
                    burst: number;
                    guaranteed: boolean;
                    level: number;
                    limit: number;
                }
                /**
                 * Technical information on memory of a baremetal service
                 * interface fullName: services.expanded.technical.baremetalServer.Memory.Memory
                 */
                export interface Memory {
                    ecc: boolean;
                    frequency: number;
                    ramType: string;
                    size: number;
                }
                /**
                 * Technical information of a baremetal server service
                 * interface fullName: services.expanded.technical.baremetalServer.Server.Server
                 */
                export interface Server {
                    cpu: services.expanded.technical.baremetalServer.server.Cpu;
                    frame: services.expanded.technical.baremetalServer.server.Frame;
                    range: string;
                }
                /**
                 * Technical information of storage of a baremetal service
                 * interface fullName: services.expanded.technical.baremetalServer.Storage.Storage
                 */
                export interface Storage {
                    disks: services.expanded.technical.baremetalServer.storage.Disk[];
                    raid: string;
                }
                /**
                 * Technical information of vrack of a baremetal service
                 * interface fullName: services.expanded.technical.baremetalServer.Vrack.Vrack
                 */
                export interface Vrack {
                    burst: number;
                    guaranteed: boolean;
                    level: number;
                    limit: number;
                }
                export namespace server {
                    /**
                     * Technical information on cpu of a baremetal server service
                     * interface fullName: services.expanded.technical.baremetalServer.server.Cpu.Cpu
                     */
                    export interface Cpu {
                        boost: number;
                        brand: string;
                        cores: number;
                        frequency: number;
                        model: string;
                        score: number;
                        threads: number;
                    }
                    /**
                     * Technical information on frame of a baremetal server service
                     * interface fullName: services.expanded.technical.baremetalServer.server.Frame.Frame
                     */
                    export interface Frame {
                        model: string;
                        size: string;
                    }
                }
                export namespace storage {
                    /**
                     * Technical information of storage disk of a baremetal service
                     * interface fullName: services.expanded.technical.baremetalServer.storage.Disk.Disk
                     */
                    export interface Disk {
                        capacity: number;
                        interface: string;
                        number: number;
                        specs: string;
                        technology: string;
                        usage?: services.expanded.technical.baremetalServer.storage.Disk.UsageEnum;
                    }
                    export namespace Disk {
                        /**
                         * Type of disk's usage
                         * type fullname: services.expanded.technical.baremetalServer.storage.Disk.UsageEnum
                         */
                        export type UsageEnum = "cache" | "data" | "os"
                    }
                }
            }
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
     * Get list of your service details
     * GET /services
     */
    $get(): Promise<services.expanded.Service[]>;
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
        options: {
            /**
             * Get options of a service
             * GET /services/{serviceId}/options
             */
            $get(): Promise<services.expanded.Service[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}

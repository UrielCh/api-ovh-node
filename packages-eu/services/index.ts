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
             * Order created when flushing the engagement of a service
             * interface fullName: services.billing.engagement.EngagementFlushOrder.EngagementFlushOrder
             */
            export interface EngagementFlushOrder {
                order: order.Order;
            }
            /**
             * Parameters needed to flush the engagement
             * interface fullName: services.billing.engagement.EngagementFlushRequest.EngagementFlushRequest
             */
            export interface EngagementFlushRequest {
                autoPayWithPreferredPaymentMethod: boolean;
                dryRun: boolean;
                terminateSubscription: boolean;
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
                order?: order.Order;
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
            /**
             * Update your Engagement end rules
             * interface fullName: services.billing.engagement.UpdateEndRuleRequest.UpdateEndRuleRequest
             */
            export interface UpdateEndRuleRequest {
                strategy: services.billing.engagement.EndStrategyEnum;
            }
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
            id: number;
            orderId?: number;
            price: order.Price;
            priceByPlanFamily: services.consumption.PricePlanFamily[];
            serviceId: number;
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
            engagement?: services.expanded.EngagementSummary;
            engagementRequest?: services.expanded.EngagementRequestSummary;
            expirationDate?: string;
            group?: services.expanded.Group;
            lifecycle?: services.expanded.Lifecycle;
            nextBillingDate?: string;
            plan?: services.expanded.Plan;
            pricing?: services.billing.Pricing;
            renew?: services.expanded.Renew;
        }
        /**
         * Customer service relative informations
         * interface fullName: services.expanded.Customer.Customer
         */
        export interface Customer {
            contacts: services.expanded.Customer.Contact[];
        }
        export namespace Customer {
            /**
             * Customer contact service relative informations
             * interface fullName: services.expanded.Customer.Contact.Contact
             */
            export interface Contact {
                customerCode: string;
                type: services.expanded.Customer.Contact.TypeEnum;
            }
            export namespace Contact {
                /**
                 * Typology of customer contact
                 * type fullname: services.expanded.Customer.Contact.TypeEnum
                 */
                export type TypeEnum = "administrator" | "billing" | "technical"
            }
        }
        /**
         * Engagement request summary for a Service
         * interface fullName: services.expanded.EngagementRequestSummary.EngagementRequestSummary
         */
        export interface EngagementRequestSummary {
            pricingMode: string;
            requestDate: string;
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
         * Billing group of the service
         * interface fullName: services.expanded.Group.Group
         */
        export interface Group {
            id: number;
        }
        /**
         * Service life cycle
         * interface fullName: services.expanded.Lifecycle.Lifecycle
         */
        export interface Lifecycle {
            capacities: services.expanded.Lifecycle.Capacities;
            current: services.expanded.Lifecycle.Current;
        }
        export namespace Lifecycle {
            /**
             * Life cycle action
             * type fullname: services.expanded.Lifecycle.ActionEnum
             */
            export type ActionEnum = "terminateAtExpirationDate" | "terminateAtEngagementDate" | "terminate" | "earlyRenewal"
            /**
             * Service life cycle options
             * interface fullName: services.expanded.Lifecycle.Capacities.Capacities
             */
            export interface Capacities {
                actions: services.expanded.Lifecycle.ActionEnum[];
            }
            /**
             * Current life cycle configuration
             * interface fullName: services.expanded.Lifecycle.Current.Current
             */
            export interface Current {
                creationDate?: string;
                pendingActions: services.expanded.Lifecycle.ActionEnum[];
                state: services.expanded.Lifecycle.StateEnum;
                terminationDate?: string;
            }
            /**
             * Life cycle service state
             * type fullname: services.expanded.Lifecycle.StateEnum
             */
            export type StateEnum = "active" | "toRenew" | "error" | "unpaid" | "unrenewed" | "rupture" | "terminated"
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
         * Service renew informations
         * interface fullName: services.expanded.Renew.Renew
         */
        export interface Renew {
            capacities: services.expanded.Renew.Capacities;
            current: services.expanded.Renew.Current;
        }
        export namespace Renew {
            /**
             * Service renew capacities
             * interface fullName: services.expanded.Renew.Capacities.Capacities
             */
            export interface Capacities {
                mode: services.expanded.Renew.ModeEnum[];
            }
            /**
             * Current renew configuration
             * interface fullName: services.expanded.Renew.Current.Current
             */
            export interface Current {
                mode?: services.expanded.Renew.ModeEnum;
                nextDate?: string;
            }
            /**
             * Renew mode
             * type fullname: services.expanded.Renew.ModeEnum
             */
            export type ModeEnum = "automatic" | "manual"
        }
        /**
         * Resource of the service
         * interface fullName: services.expanded.Resource.Resource
         */
        export interface Resource {
            displayName: string;
            name: string;
            product?: services.expanded.Product;
            state: services.expanded.Resource.StateEnum;
        }
        export namespace Resource {
            /**
             * Resource state
             * type fullname: services.expanded.Resource.StateEnum
             */
            export type StateEnum = "toActivate" | "active" | "toSuspend" | "suspended" | "toDelete" | "deleted"
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
            customer: services.expanded.Customer;
            parentServiceId?: number;
            resource: services.expanded.Resource;
            route?: services.expanded.Route;
            serviceId: number;
            tags: string[];
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
                gpu?: services.expanded.technical.baremetalServer.Gpu;
                memory?: services.expanded.technical.baremetalServer.Memory;
                server?: services.expanded.technical.baremetalServer.Server;
                storage?: services.expanded.technical.baremetalServer.Storage;
                vrack?: services.expanded.technical.baremetalServer.Vrack;
            }
            export namespace baremetalServer {
                /**
                 * Aggregation information
                 * interface fullName: services.expanded.technical.baremetalServer.Aggregation.Aggregation
                 */
                export interface Aggregation {
                    upTo: number;
                }
                /**
                 * Technical information on bandwidth of a baremetal service
                 * interface fullName: services.expanded.technical.baremetalServer.Bandwidth.Bandwidth
                 */
                export interface Bandwidth {
                    aggregation?: services.expanded.technical.baremetalServer.Aggregation;
                    burst: number;
                    guaranteed: boolean;
                    level: number;
                    limit: number;
                }
                /**
                 * Technical details for a GPU
                 * interface fullName: services.expanded.technical.baremetalServer.Gpu.Gpu
                 */
                export interface Gpu {
                    brand: string;
                    memory: services.expanded.technical.baremetalServer.GpuMemory;
                    model: string;
                    number: number;
                }
                /**
                 * Technical details for a GPU Memory
                 * interface fullName: services.expanded.technical.baremetalServer.GpuMemory.GpuMemory
                 */
                export interface GpuMemory {
                    size: number;
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
                    extensionCard?: services.expanded.technical.baremetalServer.server.ExtensionCard;
                    frame: services.expanded.technical.baremetalServer.server.Frame;
                    network?: services.expanded.technical.baremetalServer.server.Network;
                    range: string;
                    services?: services.expanded.technical.baremetalServer.server.Services;
                    useCase?: string;
                }
                /**
                 * Technical information of storage of a baremetal service
                 * interface fullName: services.expanded.technical.baremetalServer.Storage.Storage
                 */
                export interface Storage {
                    disks: services.expanded.technical.baremetalServer.storage.Disk[];
                    hotSwap: boolean;
                    raid: string;
                    raidDetails?: services.expanded.technical.baremetalServer.storage.Raid;
                }
                /**
                 * Technical information of vrack of a baremetal service
                 * interface fullName: services.expanded.technical.baremetalServer.Vrack.Vrack
                 */
                export interface Vrack {
                    aggregation?: services.expanded.technical.baremetalServer.Aggregation;
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
                        number: number;
                        score: number;
                        threads: number;
                    }
                    /**
                     * Technical details for a server extension card
                     * interface fullName: services.expanded.technical.baremetalServer.server.ExtensionCard.ExtensionCard
                     */
                    export interface ExtensionCard {
                        model: string;
                        size: string;
                    }
                    /**
                     * Technical information on frame of a baremetal server service
                     * interface fullName: services.expanded.technical.baremetalServer.server.Frame.Frame
                     */
                    export interface Frame {
                        dualPowerSupply: boolean;
                        maxNbDisks?: number;
                        model: string;
                        size: string;
                    }
                    /**
                     * Technical details for a server network
                     * interface fullName: services.expanded.technical.baremetalServer.server.Network.Network
                     */
                    export interface Network {
                        capacity: number;
                        interfaces: number;
                    }
                    /**
                     * Technical details for a server services
                     * interface fullName: services.expanded.technical.baremetalServer.server.Services.Services
                     */
                    export interface Services {
                        antiddos: string;
                        includedBackup: number;
                        sla: number;
                    }
                }
                export namespace storage {
                    /**
                     * Technical information of storage disk of a baremetal service
                     * interface fullName: services.expanded.technical.baremetalServer.storage.Disk.Disk
                     */
                    export interface Disk {
                        capacity: number;
                        dwpd?: number;
                        interface: string;
                        latency?: number;
                        number: number;
                        read?: number;
                        specs: string;
                        technology: string;
                        usage?: services.expanded.technical.baremetalServer.storage.Disk.UsageEnum;
                        write?: number;
                    }
                    export namespace Disk {
                        /**
                         * Type of disk's usage
                         * type fullname: services.expanded.technical.baremetalServer.storage.Disk.UsageEnum
                         */
                        export type UsageEnum = "cache" | "data" | "os"
                    }
                    /**
                     * Server raid storage type
                     * interface fullName: services.expanded.technical.baremetalServer.storage.Raid.Raid
                     */
                    export interface Raid {
                        cardModel?: string;
                        cardSize?: string;
                        type: services.expanded.technical.baremetalServer.storage.Raid.TypeEnum;
                    }
                    export namespace Raid {
                        /**
                         * RAID type
                         * type fullname: services.expanded.technical.baremetalServer.storage.Raid.TypeEnum
                         */
                        export type TypeEnum = "none" | "Soft RAID" | "Hard RAID"
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
                available: {
                    /**
                     * List all available engagements a given service can subscribe to
                     * GET /services/{serviceId}/billing/engagement/available
                     */
                    $get(): Promise<services.billing.Pricing[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                endRule: {
                    /**
                     * Change your Engagement end rules
                     * PUT /services/{serviceId}/billing/engagement/endRule
                     */
                    $put(params: { strategy: services.billing.engagement.EndStrategyEnum }): Promise<void>;
                }
                flush: {
                    /**
                     * Flush the engagement of this service
                     * POST /services/{serviceId}/billing/engagement/flush
                     */
                    $post(params?: { autoPayWithPreferredPaymentMethod?: boolean, dryRun?: boolean, terminateSubscription?: boolean }): Promise<services.billing.engagement.EngagementFlushOrder>;
                }
                request: {
                    /**
                     * Delete the ongoing Engagement request on this Service
                     * DELETE /services/{serviceId}/billing/engagement/request
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get the ongoing Engagement request on this Service
                     * GET /services/{serviceId}/billing/engagement/request
                     */
                    $get(): Promise<services.billing.engagement.EngagementRequest>;
                    /**
                     * Request an Engagement on this Service
                     * POST /services/{serviceId}/billing/engagement/request
                     */
                    $post(params: { pricingMode: string }): Promise<services.billing.engagement.EngagementRequest>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
        }
        consumption: {
            /**
             * Get a summary of the ongoing consumption of your service
             * GET /services/{serviceId}/consumption
             */
            $get(): Promise<services.consumption.Summary>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            element: {
                /**
                 * Get each resource consumed by your service
                 * GET /services/{serviceId}/consumption/element
                 */
                $get(params?: { planFamily?: string, uniqueId?: string }): Promise<services.consumption.Element[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            forecast: {
                /**
                 * Get a summary of the forecasted consumption of your service
                 * GET /services/{serviceId}/consumption/forecast
                 */
                $get(): Promise<services.consumption.Summary>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                element: {
                    /**
                     * Get each resource forecasted consumption of your service
                     * GET /services/{serviceId}/consumption/forecast/element
                     */
                    $get(params?: { planFamily?: string, uniqueId?: string }): Promise<services.consumption.Element[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            history: {
                /**
                 * List consumption history of your service
                 * GET /services/{serviceId}/consumption/history
                 */
                $get(params?: { planFamily?: string, uniqueId?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get a summary of the past consumption of your service
                     * GET /services/{serviceId}/consumption/history/{id}
                     */
                    $get(): Promise<services.consumption.Summary>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    element: {
                        /**
                         * Get each resource consumed for the given history
                         * GET /services/{serviceId}/consumption/history/{id}/element
                         */
                        $get(params?: { planFamily?: string, uniqueId?: string }): Promise<services.consumption.Element[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
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
                }
                simulate: {
                    /**
                     * Simulate the migration to a standalone offer. It won't generate any Order or issue any changes to your Service
                     * POST /services/{serviceId}/detach/{planCode}/simulate
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, duration: string, pricingMode: string, quantity: number }): Promise<services.operation.Order>;
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
                }
            };
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
        technicalDetails: {
            /**
             * View the technical details of the service
             * GET /services/{serviceId}/technicalDetails
             */
            $get(): Promise<services.expanded.TechnicalDetails>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        upgrade: {
            /**
             * List offers this option can be converted to
             * GET /services/{serviceId}/upgrade
             */
            $get(): Promise<order.cart.GenericProductDefinition[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(planCode: string): {
                /**
                 * View an offer this option can be converted to
                 * GET /services/{serviceId}/upgrade/{planCode}
                 */
                $get(): Promise<order.cart.GenericProductDefinition>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                execute: {
                    /**
                     * Perform the migration to another offer. May require you to pay an Order
                     * POST /services/{serviceId}/upgrade/{planCode}/execute
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, duration: string, pricingMode: string, quantity: number }): Promise<services.operation.Order>;
                }
                simulate: {
                    /**
                     * Simulate the conversion to another offer. It won't generate any Order or issue any changes to your Service
                     * POST /services/{serviceId}/upgrade/{planCode}/simulate
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, duration: string, pricingMode: string, quantity: number }): Promise<services.operation.Order>;
                }
            };
        }
    };
}

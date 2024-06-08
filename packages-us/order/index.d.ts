import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /order Models
 * Source: https://api.us.ovhcloud.com/1.0/order.json
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
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
}
export namespace order {
    /**
     * Application context of a promotion
     * type fullname: order.ContextTypeEnum
     */
    export type ContextTypeEnum = "discover" | "standard" | "welcome"
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
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "INR" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
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
        priceInUcents?: number;
        text: string;
        value: number;
    }
    /**
     * Order detail reduction
     * interface fullName: order.Reduction.Reduction
     */
    export interface Reduction {
        context: order.ReductionContextEnum;
        description: string;
        price: order.Price;
        reductionDescription: string;
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
    export type ReductionTypeEnum = "fixed_amount" | "forced_amount" | "percentage"
    export namespace cart {
        /**
         * A shopping cart
         * interface fullName: order.cart.Cart.Cart
         */
        export interface Cart {
            cartId: string;
            description: string;
            expire?: string;
            items: number[];
            readOnly: boolean;
        }
        /**
         * Missing description
         * interface fullName: order.cart.Checkout.Checkout
         */
        export interface Checkout {
            autoPayWithPreferredPaymentMethod: boolean;
            waiveRetractationPeriod: boolean;
        }
        /**
         * Representation of a configuration item for personalizing product
         * interface fullName: order.cart.ConfigurationItem.ConfigurationItem
         */
        export interface ConfigurationItem {
            id: number;
            label: string;
            value: string;
        }
        /**
         * Information about a configuration
         * interface fullName: order.cart.ConfigurationRequirements.ConfigurationRequirements
         */
        export interface ConfigurationRequirements {
            fields?: string[];
            label: string;
            required: boolean;
            type: string;
        }
        /**
         * Missing description
         * interface fullName: order.cart.CouponCreation.CouponCreation
         */
        export interface CouponCreation {
            coupon: string;
        }
        /**
         * Missing description
         * interface fullName: order.cart.Creation.Creation
         */
        export interface Creation {
            description: string;
            expire: string;
            ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
        }
        /**
         * Representation of domain name order properties
         * interface fullName: order.cart.DomainSettings.DomainSettings
         */
        export interface DomainSettings {
            domain: string;
        }
        /**
         * Unit corresponding to a duration range
         * type fullname: order.cart.DurationUnitEnum
         */
        export type DurationUnitEnum = "day" | "hour" | "month" | "none"
        /**
         * Missing description
         * interface fullName: order.cart.GenericOptionCreation.GenericOptionCreation
         */
        export interface GenericOptionCreation {
            duration: string;
            itemId: number;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        /**
         * Representation of a generic product option
         * interface fullName: order.cart.GenericOptionDefinition.GenericOptionDefinition
         */
        export interface GenericOptionDefinition {
            exclusive: boolean;
            family: string;
            mandatory: boolean;
            planCode: string;
            prices: order.cart.GenericProductPricing[];
            productName: string;
            productType: order.cart.GenericProductTypeEnum;
        }
        /**
         * Missing description
         * interface fullName: order.cart.GenericProductCreation.GenericProductCreation
         */
        export interface GenericProductCreation {
            duration: string;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
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
        export type GenericProductPricingCapacitiesEnum = "consumption" | "detach" | "downgrade" | "dynamic" | "installation" | "renew" | "upgrade"
        /**
         * Strategy of a Pricing
         * type fullname: order.cart.GenericProductPricingStrategyEnum
         */
        export type GenericProductPricingStrategyEnum = "stairstep" | "tiered" | "volume"
        /**
         * Type of a pricing
         * type fullname: order.cart.GenericProductPricingTypeEnum
         */
        export type GenericProductPricingTypeEnum = "consumption" | "purchase" | "rental"
        /**
         * Type of a product
         * type fullname: order.cart.GenericProductTypeEnum
         */
        export type GenericProductTypeEnum = "cloud_service" | "delivery" | "deposit" | "domain" | "implementation_services" | "saas_license" | "shipping" | "storage"
        /**
         * Representation of a cart item
         * interface fullName: order.cart.Item.Item
         */
        export interface Item {
            cartId: string;
            configurations?: number[];
            duration?: string;
            itemId: number;
            offerId?: string;
            options: number[];
            parentItemId?: number;
            prices: order.cart.Price[];
            productId: string;
            settings: order.cart.ItemSettings;
        }
        /**
         * Missing description
         * interface fullName: order.cart.ItemConfigurationCreation.ItemConfigurationCreation
         */
        export interface ItemConfigurationCreation {
            label: string;
            value: string;
        }
        /**
         * Order item settings
         * interface fullName: order.cart.ItemSettings.ItemSettings
         */
        export interface ItemSettings {
            planCode?: string;
            pricingMode?: string;
            quantity?: number;
        }
        /**
         * Missing description
         * interface fullName: order.cart.ItemUpdate.ItemUpdate
         */
        export interface ItemUpdate {
            duration: string;
            quantity: number;
        }
        /**
         * Price information with label
         * interface fullName: order.cart.Price.Price
         */
        export interface Price {
            label: order.cart.PriceLabelEnum;
            price: order.Price;
            promotions?: order.cart.Promotion[];
        }
        /**
         * Label corresponding to different type of price
         * type fullname: order.cart.PriceLabelEnum
         */
        export type PriceLabelEnum = "DISCOUNT" | "FEE" | "PRICE" | "RENEW" | "TOTAL"
        /**
         * Describes a promotion of a product
         * interface fullName: order.cart.Promotion.Promotion
         */
        export interface Promotion {
            bundleWithPlanCodes: string[];
            endDate?: string;
            name: string;
            price: order.Price;
            startDate: string;
            tags?: string[];
            type: string;
        }
        /**
         * Missing description
         * interface fullName: order.cart.Update.Update
         */
        export interface Update {
            description: string;
            expire: string;
        }
    }
    export namespace catalog {
        /**
         * Describes an Addon
         * interface fullName: order.catalog.AddonItem.AddonItem
         */
        export interface AddonItem {
            addons: order.catalog.AddonOffer[];
            exclusive: boolean;
            family: string;
            mandatory: boolean;
        }
        /**
         * Describes of Addon offer
         * interface fullName: order.catalog.AddonOffer.AddonOffer
         */
        export interface AddonOffer {
            default?: boolean;
            invoiceName: string;
            maximumQuantity?: number;
            minimumQuantity?: number;
            plan: order.catalog.ProductPlan;
        }
        /**
         * Describes a Catalog
         * interface fullName: order.catalog.Catalog.Catalog
         */
        export interface Catalog {
            catalogId: number;
            merchantCode: string;
            plans?: order.catalog.ProductPlan[];
        }
        /**
         * Composition of a configuration
         * interface fullName: order.catalog.ConfigurationItem.ConfigurationItem
         */
        export interface ConfigurationItem {
            defaultValue?: string;
            isCustom: boolean;
            isMandatory: boolean;
            name: string;
            values: string[];
        }
        /**
         * Describe an item that contains multiple plans
         * interface fullName: order.catalog.PlansItem.PlansItem
         */
        export interface PlansItem {
            family: string;
            plans: order.catalog.ProductPlan[];
        }
        /**
         * Describes a pricing
         * interface fullName: order.catalog.Pricing.Pricing
         */
        export interface Pricing {
            capacities: string[];
            commitment: number;
            description: string;
            interval: number;
            intervalUnit: string;
            maximumQuantity?: number;
            maximumRepeat?: number;
            minimumQuantity: number;
            minimumRepeat: number;
            mustBeCompleted: boolean;
            price: order.Price;
            priceCapInUcents?: number;
            priceInUcents: number;
            pricingStrategy: string;
        }
        /**
         * Describe default pricings
         * interface fullName: order.catalog.PricingDefault.PricingDefault
         */
        export interface PricingDefault {
            default: order.catalog.Pricing[];
        }
        /**
         * Describe a Product in the Catalog
         * interface fullName: order.catalog.Product.Product
         */
        export interface Product {
            configurations: order.catalog.ConfigurationItem[];
            description: string;
            internalType: order.cart.GenericProductTypeEnum;
            metadatas?: complexType.SafeKeyValue<string>[];
            name: string;
            subType?: string;
            technicalDetails?: complexType.SafeKeyValue<string>[];
            type?: string;
        }
        /**
         * Describe the details of a commercial offer
         * interface fullName: order.catalog.ProductOfferDetails.ProductOfferDetails
         */
        export interface ProductOfferDetails {
            blobs?: order.catalog.cloud.Blob;
            metadatas?: complexType.SafeKeyValue<string>[];
            pricings: order.catalog.PricingDefault;
            product: order.catalog.Product;
        }
        /**
         * Describes of commercial offer of a product
         * interface fullName: order.catalog.ProductPlan.ProductPlan
         */
        export interface ProductPlan {
            addonsFamily: order.catalog.AddonItem[];
            consumptionBillingStrategy?: string;
            details: order.catalog.ProductOfferDetails;
            familyName?: string;
            invoiceName: string;
            planCode: string;
            prices?: order.catalog.cloud.RegionPrice[];
            pricingType: string;
        }
        export namespace cloud {
            /**
             * Describe extra information of product offer
             * interface fullName: order.catalog.cloud.Blob.Blob
             */
            export interface Blob {
                unit?: order.catalog.cloud.Blob.Unit;
            }
            export namespace Blob {
                /**
                 * Label of the unit
                 * interface fullName: order.catalog.cloud.Blob.Unit.Unit
                 */
                export interface Unit {
                    unit: string;
                }
            }
            /**
             * Describes a region price
             * interface fullName: order.catalog.cloud.RegionPrice.RegionPrice
             */
            export interface RegionPrice {
                price: order.catalog.cloud.RegionPrice.Price;
                region: string;
            }
            export namespace RegionPrice {
                /**
                 * Describes a price
                 * interface fullName: order.catalog.cloud.RegionPrice.Price.Price
                 */
                export interface Price {
                    currencyCode: order.CurrencyCodeEnum;
                    priceInUcents: number;
                    text: string;
                    value: number;
                }
            }
        }
        export namespace dedicated {
            /**
             * Describes a dedicated Catalog
             * interface fullName: order.catalog.dedicated.Catalog.Catalog
             */
            export interface Catalog {
                families: order.catalog.dedicated.Family[];
                metadatas: order.catalog.dedicated.Metadata;
                products: order.catalog.dedicated.Product[];
                techDetails: order.catalog.dedicated.TechDetails[];
            }
            /**
             * Describes a Family
             * interface fullName: order.catalog.dedicated.Family.Family
             */
            export interface Family {
                name: string;
                products: string[];
            }
            /**
             * Describes a Metadata
             * interface fullName: order.catalog.dedicated.Metadata.Metadata
             */
            export interface Metadata {
                catalog: number;
                core: order.catalog.dedicated.Metadata.Capacities;
                currency: order.catalog.dedicated.Metadata.Currency;
                datacenters: string[];
                frequency: order.catalog.dedicated.Metadata.Frequency;
                merchant: nichandle.OvhSubsidiaryEnum;
                price: order.catalog.dedicated.Metadata.Price;
                ram: order.catalog.dedicated.Metadata.Capacities;
                thread: order.catalog.dedicated.Metadata.Capacities;
                timestamp: number;
            }
            export namespace Metadata {
                /**
                 * Describes a Capacity
                 * interface fullName: order.catalog.dedicated.Metadata.Capacities.Capacities
                 */
                export interface Capacities {
                    max: number;
                    min: number;
                }
                /**
                 * Describes a Currency
                 * interface fullName: order.catalog.dedicated.Metadata.Currency.Currency
                 */
                export interface Currency {
                    code: order.CurrencyCodeEnum;
                    description: string;
                    symbol: string;
                }
                /**
                 * Describes a Frequency
                 * interface fullName: order.catalog.dedicated.Metadata.Frequency.Frequency
                 */
                export interface Frequency {
                    max: number;
                    min: number;
                }
                /**
                 * Describes a Price
                 * interface fullName: order.catalog.dedicated.Metadata.Price.Price
                 */
                export interface Price {
                    max: number;
                    min: number;
                }
            }
            /**
             * Describes a product
             * interface fullName: order.catalog.dedicated.Product.Product
             */
            export interface Product {
                addonsFamily: order.catalog.dedicated.Product.AddonFamily[];
                code: string;
                compatibilities?: order.catalog.dedicated.Product.Compatibility[];
                datacenters: string[];
                derivatives?: order.catalog.dedicated.Product.AddonItem[];
                family: string;
                invoiceName: string;
                isChildOf?: string;
                isParentOf?: string[];
                prices: order.catalog.dedicated.Product.Price;
                specifications: order.catalog.dedicated.Product.Specification;
            }
            export namespace Product {
                /**
                 * Describes an addon family
                 * interface fullName: order.catalog.dedicated.Product.AddonFamily.AddonFamily
                 */
                export interface AddonFamily {
                    addons: order.catalog.dedicated.Product.AddonItem[];
                    family: string;
                }
                /**
                 * Describes an addon
                 * interface fullName: order.catalog.dedicated.Product.AddonItem.AddonItem
                 */
                export interface AddonItem {
                    code: string;
                    datacenters?: string[];
                    name: string;
                    options?: string;
                    price: order.Price;
                }
                /**
                 * Describes a Compatibility
                 * interface fullName: order.catalog.dedicated.Product.Compatibility.Compatibility
                 */
                export interface Compatibility {
                    plan: string;
                    restrictions?: order.catalog.dedicated.Product.Compatibility.Restriction[];
                    specificities?: order.catalog.dedicated.TechDetails.Plan.Specificity[];
                }
                export namespace Compatibility {
                    /**
                     * Describes a Restriction
                     * interface fullName: order.catalog.dedicated.Product.Compatibility.Restriction.Restriction
                     */
                    export interface Restriction {
                        name: string;
                        sections: order.catalog.dedicated.Product.Compatibility.Restriction.Section[];
                    }
                    export namespace Restriction {
                        /**
                         * Describes a Section
                         * interface fullName: order.catalog.dedicated.Product.Compatibility.Restriction.Section.Section
                         */
                        export interface Section {
                            comment: string;
                            plans: string[];
                            type: string;
                        }
                    }
                }
                /**
                 * Describes a Prices
                 * interface fullName: order.catalog.dedicated.Product.Price.Price
                 */
                export interface Price {
                    default: order.catalog.dedicated.Product.Price.Default;
                    hardzone?: string;
                    week?: string;
                }
                export namespace Price {
                    /**
                     * Describes a Default price
                     * interface fullName: order.catalog.dedicated.Product.Price.Default.Default
                     */
                    export interface Default {
                        installation?: order.Price;
                        renew?: order.Price;
                    }
                }
                /**
                 * Describes a Specification for a product
                 * interface fullName: order.catalog.dedicated.Product.Specification.Specification
                 */
                export interface Specification {
                    cpu?: order.catalog.dedicated.Product.Specification.CPU;
                    disks?: order.catalog.dedicated.Product.Specification.Disk[];
                    gpu?: order.catalog.dedicated.Product.Specification.GPU;
                    memory?: order.catalog.dedicated.Product.Specification.Memory;
                    network: order.catalog.dedicated.Product.Specification.Network;
                }
                export namespace Specification {
                    /**
                     * Describes a CPU
                     * interface fullName: order.catalog.dedicated.Product.Specification.CPU.CPU
                     */
                    export interface CPU {
                        boost?: number;
                        brand?: string;
                        cores?: number;
                        frequency?: number;
                        model?: string;
                        planCode?: string;
                        threads?: number;
                    }
                    /**
                     * Describes a Disk
                     * interface fullName: order.catalog.dedicated.Product.Specification.Disk.Disk
                     */
                    export interface Disk {
                        number: number;
                        planCode?: string;
                        raid: string;
                        size: number;
                        type: string;
                    }
                    /**
                     * Describes a GPU
                     * interface fullName: order.catalog.dedicated.Product.Specification.GPU.GPU
                     */
                    export interface GPU {
                        model?: string;
                        number?: number;
                        planCode?: string;
                    }
                    /**
                     * Describes a Memory
                     * interface fullName: order.catalog.dedicated.Product.Specification.Memory.Memory
                     */
                    export interface Memory {
                        planCode?: string;
                        size?: number;
                        type?: string;
                    }
                    /**
                     * Describes a Network
                     * interface fullName: order.catalog.dedicated.Product.Specification.Network.Network
                     */
                    export interface Network {
                        failover: number;
                        internal: number;
                        ip: number;
                        outgoing: number;
                        private: number;
                        privateBandwidth: number;
                    }
                }
            }
            /**
             * Describes technical details
             * interface fullName: order.catalog.dedicated.TechDetails.TechDetails
             */
            export interface TechDetails {
                plans: order.catalog.dedicated.TechDetails.Plan[];
                type: string;
            }
            export namespace TechDetails {
                /**
                 * Describes a Plan
                 * interface fullName: order.catalog.dedicated.TechDetails.Plan.Plan
                 */
                export interface Plan {
                    code: string;
                    specificities: order.catalog.dedicated.TechDetails.Plan.Specificity[];
                }
                export namespace Plan {
                    /**
                     * Describes a Specificity for a plan
                     * interface fullName: order.catalog.dedicated.TechDetails.Plan.Specificity.Specificity
                     */
                    export interface Specificity {
                        key: string;
                        value: number;
                    }
                }
            }
        }
        export namespace pcc {
            /**
             * Describe a Dedicated Cloud commercial catalog
             * interface fullName: order.catalog.pcc.Catalog.Catalog
             */
            export interface Catalog {
                active: boolean;
                catalogId: string;
                catalogName: string;
                commercialRanges: order.catalog.pcc.CommercialRange[];
                merchantCode: string;
                plans: order.catalog.ProductPlan[];
            }
            /**
             * Describes the Commercial Range of a Dedicated Cloud
             * interface fullName: order.catalog.pcc.CommercialRange.CommercialRange
             */
            export interface CommercialRange {
                datacenters: order.catalog.pcc.Datacenter[];
                defaultZone: string;
                name: string;
            }
            /**
             * Describes a Dedicated Cloud Datacenter
             * interface fullName: order.catalog.pcc.Datacenter.Datacenter
             */
            export interface Datacenter {
                cityCode: string;
                cityName?: string;
                countryCode: nichandle.CountryEnum;
                defaultHypervisor: string;
                hypervisors: order.catalog.pcc.Hypervisor[];
                mainPlan: string;
                managementFees?: order.catalog.pcc.managementFees;
                orderable: boolean;
                orderableOptions: boolean;
                orderableResources: boolean;
                storagesNoPack: string[];
                zoneFullName: string;
                zoneName: string;
            }
            /**
             * Describes a Dedicated Cloud Host
             * interface fullName: order.catalog.pcc.Host.Host
             */
            export interface Host {
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                specifications: order.catalog.pcc.HostSpecifications;
                storagesPack?: string[];
            }
            /**
             * Describes a Dedicated Cloud Host CPU
             * interface fullName: order.catalog.pcc.HostCpuSpecifications.HostCpuSpecifications
             */
            export interface HostCpuSpecifications {
                cores: number;
                frequency: complexType.UnitAndValue<number>;
                generation: string;
                model: string;
                socket: number;
                threads: number;
            }
            /**
             * Describes a Dedicated Cloud Host Memory
             * interface fullName: order.catalog.pcc.HostMemorySpecifications.HostMemorySpecifications
             */
            export interface HostMemorySpecifications {
                ram: complexType.UnitAndValue<number>;
            }
            /**
             * Describes a Dedicated Cloud Host Network
             * interface fullName: order.catalog.pcc.HostNetworkSpecifications.HostNetworkSpecifications
             */
            export interface HostNetworkSpecifications {
                nics: number;
                speed: complexType.UnitAndValue<number>;
            }
            /**
             * Describes a Dedicated Cloud Host Hardware
             * interface fullName: order.catalog.pcc.HostSpecifications.HostSpecifications
             */
            export interface HostSpecifications {
                cpu: order.catalog.pcc.HostCpuSpecifications;
                memory: order.catalog.pcc.HostMemorySpecifications;
                network: order.catalog.pcc.HostNetworkSpecifications[];
                storage: order.catalog.pcc.HostStorageSpecifications;
            }
            /**
             * Describes a Dedicated Cloud Host Storage
             * interface fullName: order.catalog.pcc.HostStorageSpecifications.HostStorageSpecifications
             */
            export interface HostStorageSpecifications {
                size: order.catalog.pcc.PccUnitAndValue;
                type: string;
            }
            /**
             * Describes a Dedicated Cloud Hypervisor
             * interface fullName: order.catalog.pcc.Hypervisor.Hypervisor
             */
            export interface Hypervisor {
                hosts: order.catalog.pcc.Host[];
                name: string;
                options: order.catalog.pcc.Option[];
                orderable: boolean;
                servicePacks: order.catalog.pcc.ServicePack[];
                shortName: string;
                storages: order.catalog.pcc.Storage[];
                type: string;
            }
            /**
             * Describes a Dedicated Cloud Option
             * interface fullName: order.catalog.pcc.Option.Option
             */
            export interface Option {
                maxInitialQuantity: number;
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                showInOrderFunnel?: boolean;
                type: string;
            }
            /**
             * Describes unit and value for a Private Cloud
             * interface fullName: order.catalog.pcc.PccUnitAndValue.PccUnitAndValue
             */
            export interface PccUnitAndValue {
                unit: string;
                value: number;
            }
            /**
             * Describes a Dedicated Cloud Service Pack
             * interface fullName: order.catalog.pcc.ServicePack.ServicePack
             */
            export interface ServicePack {
                disabledElementForOrderType?: string[];
                name: string;
                options: order.catalog.pcc.ServicePackOption[];
                planCode: string;
                showInOrderFunnel?: boolean;
                upgradableTo: string[];
            }
            /**
             * Describes a Dedicated Cloud service pack option
             * interface fullName: order.catalog.pcc.ServicePackOption.ServicePackOption
             */
            export interface ServicePackOption {
                name: string;
                planCode: string;
                type: string;
            }
            /**
             * Describes a Dedicated Cloud Storage
             * interface fullName: order.catalog.pcc.Storage.Storage
             */
            export interface Storage {
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                specifications: order.catalog.pcc.StorageSpecifications;
            }
            /**
             * Describes a Dedicated Cloud Storage
             * interface fullName: order.catalog.pcc.StorageSpecifications.StorageSpecifications
             */
            export interface StorageSpecifications {
                size: complexType.UnitAndValue<number>;
                type: string;
            }
            /**
             * Describes the management cost of a range of Dedicated Cloud
             * interface fullName: order.catalog.pcc.managementFees.managementFees
             */
            export interface managementFees {
                disabledElementForOrderType?: string[];
                planCode: string;
                upgradableTo: string[];
            }
        }
        export namespace publik {
            /**
             * Describes an Addon family for a Commercial offer
             * interface fullName: order.catalog.publik.AddonFamily.AddonFamily
             */
            export interface AddonFamily {
                addons?: string[];
                default?: string;
                exclusive?: boolean;
                mandatory?: boolean;
                name: string;
            }
            /**
             * Enum values for Billing Strategy
             * type fullname: order.catalog.publik.BillingStrategyEnum
             */
            export type BillingStrategyEnum = "custom" | "diff" | "max" | "max_retain" | "ping" | "sum"
            /**
             * Describes a Catalog inside a Subsidiary
             * interface fullName: order.catalog.publik.Catalog.Catalog
             */
            export interface Catalog {
                addons: order.catalog.publik.Plan[];
                catalogId: number;
                locale: order.catalog.publik.Locale;
                planFamilies: order.catalog.publik.PlanFamily[];
                plans: order.catalog.publik.Plan[];
                products: order.catalog.publik.Product[];
            }
            /**
             * Describes the Configuration for a Commercial offer
             * interface fullName: order.catalog.publik.Configuration.Configuration
             */
            export interface Configuration {
                isCustom: boolean;
                isMandatory: boolean;
                name: string;
                values?: string[];
            }
            /**
             * Describes consumption configuration for a Plan
             * interface fullName: order.catalog.publik.ConsumptionConfiguration.ConsumptionConfiguration
             */
            export interface ConsumptionConfiguration {
                billingStrategy: order.catalog.publik.BillingStrategyEnum;
                pingEndPolicy?: order.catalog.publik.PingEndPolicyEnum;
                prorataUnit: order.catalog.publik.ProrataUnitEnum;
            }
            /**
             * Describes a Dedicated server Catalog inside a Subsidiary
             * interface fullName: order.catalog.publik.DedicatedServerCatalog.DedicatedServerCatalog
             */
            export interface DedicatedServerCatalog {
                addons: order.catalog.publik.Plan[];
                catalogId: number;
                locale: order.catalog.publik.Locale;
                planFamilies: order.catalog.publik.AddonFamily[];
                plans: order.catalog.publik.Plan[];
                products: order.catalog.publik.DedicatedServerProduct[];
            }
            /**
             * Describes a Dedicated Server Product
             * interface fullName: order.catalog.publik.DedicatedServerProduct.DedicatedServerProduct
             */
            export interface DedicatedServerProduct {
                blobs?: order.catalog.publik.ProductBlob;
                configurations: order.catalog.publik.Configuration[];
                description: string;
                name: string;
            }
            /**
             * Describes a Blob for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlob.DedicatedServerProductBlob
             */
            export interface DedicatedServerProductBlob {
                technical?: order.catalog.publik.DedicatedServerProductBlobTechnical;
            }
            /**
             * Describes a Technical Blob for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnical.DedicatedServerProductBlobTechnical
             */
            export interface DedicatedServerProductBlobTechnical {
                bandwidth?: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork;
                cpu?: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU;
                gpu?: order.catalog.publik.DedicatedServerProductBlobTechnicalGPU;
                memory?: order.catalog.publik.DedicatedServerProductBlobTechnicalMemory;
                server?: order.catalog.publik.DedicatedServerProductBlobTechnicalServer;
                storage?: order.catalog.publik.DedicatedServerProductBlobTechnicalStorage;
                vrack?: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork;
            }
            /**
             * Describes a CPU for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU.DedicatedServerProductBlobTechnicalCPU
             */
            export interface DedicatedServerProductBlobTechnicalCPU {
                boost: number;
                brand: string;
                cores: number;
                frequency: number;
                model: string;
                score: number;
                threads: number;
            }
            /**
             * Describes a Disk for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalDisk.DedicatedServerProductBlobTechnicalDisk
             */
            export interface DedicatedServerProductBlobTechnicalDisk {
                capacity: number;
                interface: string;
                number: number;
                specs: string;
                technology: string;
            }
            /**
             * Describes a Frame for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalFrame.DedicatedServerProductBlobTechnicalFrame
             */
            export interface DedicatedServerProductBlobTechnicalFrame {
                model: string;
                size: string;
            }
            /**
             * Describes a GPU for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalGPU.DedicatedServerProductBlobTechnicalGPU
             */
            export interface DedicatedServerProductBlobTechnicalGPU {
                memory: number;
            }
            /**
             * Describes a Memory technical Blob for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalMemory.DedicatedServerProductBlobTechnicalMemory
             */
            export interface DedicatedServerProductBlobTechnicalMemory {
                ecc: boolean;
                frequency: number;
                ramType: string;
                size: number;
            }
            /**
             * Describes a Network technical Blob for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork.DedicatedServerProductBlobTechnicalNetwork
             */
            export interface DedicatedServerProductBlobTechnicalNetwork {
                burst?: number;
                guaranteed: boolean;
                level: number;
                limit?: number;
            }
            /**
             * Describes some technicals informations of a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalServer.DedicatedServerProductBlobTechnicalServer
             */
            export interface DedicatedServerProductBlobTechnicalServer {
                cpu: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU;
                frame: order.catalog.publik.DedicatedServerProductBlobTechnicalFrame;
                range: string;
            }
            /**
             * Describes a Storage technical Blob for a Dedicated Server
             * interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalStorage.DedicatedServerProductBlobTechnicalStorage
             */
            export interface DedicatedServerProductBlobTechnicalStorage {
                disks: order.catalog.publik.DedicatedServerProductBlobTechnicalDisk[];
                raid: string;
            }
            /**
             * Configuration of an engagement triggered by a given pricing
             * interface fullName: order.catalog.publik.EngagementConfiguration.EngagementConfiguration
             */
            export interface EngagementConfiguration {
                defaultEndAction: order.catalog.publik.EngagementConfiguration.EndStrategyEnum;
                duration: string;
                type: order.catalog.publik.EngagementConfiguration.TypeEnum;
            }
            export namespace EngagementConfiguration {
                /**
                 * Strategy applicable at the end of the Engagement
                 * type fullname: order.catalog.publik.EngagementConfiguration.EndStrategyEnum
                 */
                export type EndStrategyEnum = "CANCEL_SERVICE" | "REACTIVATE_ENGAGEMENT" | "STOP_ENGAGEMENT_FALLBACK_DEFAULT_PRICE" | "STOP_ENGAGEMENT_KEEP_PRICE"
                /**
                 * Engagement's type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic)
                 * type fullname: order.catalog.publik.EngagementConfiguration.TypeEnum
                 */
                export type TypeEnum = "periodic" | "upfront"
            }
            /**
             * Describes specifics for a given Subsidiary
             * interface fullName: order.catalog.publik.Locale.Locale
             */
            export interface Locale {
                currencyCode: order.CurrencyCodeEnum;
                subsidiary: nichandle.OvhSubsidiaryEnum;
                taxRate: number;
            }
            /**
             * Enum values for Ping End Policy
             * type fullname: order.catalog.publik.PingEndPolicyEnum
             */
            export type PingEndPolicyEnum = "full" | "prorata"
            /**
             * Describes a Commercial offer inside a Catalog
             * interface fullName: order.catalog.publik.Plan.Plan
             */
            export interface Plan {
                addonFamilies: order.catalog.publik.AddonFamily[];
                blobs?: order.catalog.publik.ProductBlob;
                configurations: order.catalog.publik.Configuration[];
                consumptionConfiguration?: order.catalog.publik.ConsumptionConfiguration;
                family?: string;
                invoiceName: string;
                planCode: string;
                pricingType: order.cart.GenericProductPricingTypeEnum;
                pricings: order.catalog.publik.Pricing[];
                product: string;
            }
            /**
             * Describes a PlanFamily for a Catalog
             * interface fullName: order.catalog.publik.PlanFamily.PlanFamily
             */
            export interface PlanFamily {
                name: string;
            }
            /**
             * Describes a Pricing for a Commercial offer
             * interface fullName: order.catalog.publik.Pricing.Pricing
             */
            export interface Pricing {
                capacities: order.cart.GenericProductPricingCapacitiesEnum[];
                commitment: number;
                description: string;
                engagementConfiguration?: order.catalog.publik.EngagementConfiguration;
                interval: number;
                intervalUnit: order.cart.DurationUnitEnum;
                mode: string;
                mustBeCompleted: boolean;
                phase: number;
                price: number;
                promotions?: order.catalog.publik.Promotion[];
                quantity: order.catalog.publik.PricingMinMax;
                repeat: order.catalog.publik.PricingMinMax;
                strategy: order.cart.GenericProductPricingStrategyEnum;
                tax: number;
                type: order.cart.GenericProductPricingTypeEnum;
            }
            /**
             * Describes minimal and maximal values for a Pricing
             * interface fullName: order.catalog.publik.PricingMinMax.PricingMinMax
             */
            export interface PricingMinMax {
                max?: number;
                min: number;
            }
            /**
             * Describes a Product attached to a Commercial offer
             * interface fullName: order.catalog.publik.Product.Product
             */
            export interface Product {
                blobs?: order.catalog.publik.ProductBlob;
                configurations?: order.catalog.publik.Configuration[];
                description: string;
                name: string;
            }
            /**
             * Describes a Blob
             * interface fullName: order.catalog.publik.ProductBlob.ProductBlob
             */
            export interface ProductBlob {
                commercial?: order.catalog.publik.ProductBlobCommercial;
                marketing?: order.catalog.publik.ProductBlobMarketing;
                meta?: order.catalog.publik.ProductBlobMeta;
                tags?: string[];
                technical?: order.catalog.publik.ProductBlobTechnical;
                value?: string;
            }
            /**
             * Describes a Commercial blob
             * interface fullName: order.catalog.publik.ProductBlobCommercial.ProductBlobCommercial
             */
            export interface ProductBlobCommercial {
                brick?: string;
                brickSubtype?: string;
                connection?: order.catalog.publik.ProductBlobConnection;
                features?: order.catalog.publik.ProductBlobCommercialFeatures[];
                line?: string;
                name?: string;
                price?: order.catalog.publik.ProductBlobCommercialPrice;
                range?: string;
            }
            /**
             * Describes Features for a commercial blob
             * interface fullName: order.catalog.publik.ProductBlobCommercialFeatures.ProductBlobCommercialFeatures
             */
            export interface ProductBlobCommercialFeatures {
                name?: string;
                value?: string;
            }
            /**
             * Describes a Price for a commercial blob
             * interface fullName: order.catalog.publik.ProductBlobCommercialPrice.ProductBlobCommercialPrice
             */
            export interface ProductBlobCommercialPrice {
                display?: order.catalog.publik.ProductBlobCommercialPriceDisplay;
                interval?: string;
                precision?: number;
                unit?: string;
            }
            /**
             * Describes a Display a price
             * interface fullName: order.catalog.publik.ProductBlobCommercialPriceDisplay.ProductBlobCommercialPriceDisplay
             */
            export interface ProductBlobCommercialPriceDisplay {
                value: string;
            }
            /**
             * Describes a Connection for a blob for a Dedicated Server
             * interface fullName: order.catalog.publik.ProductBlobConnection.ProductBlobConnection
             */
            export interface ProductBlobConnection {
                clients: order.catalog.publik.ProductBlobConnectionClients;
                total: number;
            }
            /**
             * Describes Clients for a Connection for a blob for a Dedicated Server
             * interface fullName: order.catalog.publik.ProductBlobConnectionClients.ProductBlobConnectionClients
             */
            export interface ProductBlobConnectionClients {
                concurrency: number;
                number: number;
            }
            /**
             * Describes a Marketing blob
             * interface fullName: order.catalog.publik.ProductBlobMarketing.ProductBlobMarketing
             */
            export interface ProductBlobMarketing {
                content: order.catalog.publik.ProductBlobMarketingContent[];
            }
            /**
             * Describes a Content for a Marketing blob
             * interface fullName: order.catalog.publik.ProductBlobMarketingContent.ProductBlobMarketingContent
             */
            export interface ProductBlobMarketingContent {
                key: string;
                value: string;
            }
            /**
             * Describes a Meta blob
             * interface fullName: order.catalog.publik.ProductBlobMeta.ProductBlobMeta
             */
            export interface ProductBlobMeta {
                configurations: order.catalog.publik.ProductBlobMetaConfigurations[];
            }
            /**
             * Describes a Configuration for a meta blob
             * interface fullName: order.catalog.publik.ProductBlobMetaConfigurations.ProductBlobMetaConfigurations
             */
            export interface ProductBlobMetaConfigurations {
                name: string;
                values: order.catalog.publik.ProductBlobMetaConfigurationsValues[];
            }
            /**
             * Describes a Values configuration for a meta blob
             * interface fullName: order.catalog.publik.ProductBlobMetaConfigurationsValues.ProductBlobMetaConfigurationsValues
             */
            export interface ProductBlobMetaConfigurationsValues {
                blobs: order.catalog.publik.ProductBlob;
                value: string;
            }
            /**
             * Describes a Technical Blob
             * interface fullName: order.catalog.publik.ProductBlobTechnical.ProductBlobTechnical
             */
            export interface ProductBlobTechnical {
                bandwidth?: order.catalog.publik.ProductBlobTechnicalNetwork;
                connection?: order.catalog.publik.ProductBlobConnection;
                connectionPerSeconds?: order.catalog.publik.ProductBlobTechnicalPerSeconds;
                cpu?: order.catalog.publik.ProductBlobTechnicalCPU;
                datacenter?: order.catalog.publik.ProductBlobTechnicalDatacenter;
                ephemeralLocalStorage?: order.catalog.publik.ProductBlobTechnicalEphemeralStorage;
                gpu?: order.catalog.publik.ProductBlobTechnicalGPU;
                license?: order.catalog.publik.ProductBlobTechnicalLicense;
                memory?: order.catalog.publik.ProductBlobTechnicalMemory;
                name?: string;
                nodes?: order.catalog.publik.ProductBlobTechnicalNodes;
                nvme?: order.catalog.publik.ProductBlobTechnicalNvme;
                os?: order.catalog.publik.ProductBlobTechnicalOS;
                provider?: order.catalog.publik.ProductBlobTechnicalProvider;
                requestPerSeconds?: order.catalog.publik.ProductBlobTechnicalPerSeconds;
                server?: order.catalog.publik.ProductBlobTechnicalServer;
                storage?: order.catalog.publik.ProductBlobTechnicalStorage;
                throughput?: order.catalog.publik.ProductBlobTechnicalThroughput;
                virtualization?: order.catalog.publik.ProductBlobTechnicalVirtualization;
                volume?: order.catalog.publik.ProductBlobTechnicalVolume;
                vrack?: order.catalog.publik.ProductBlobTechnicalNetwork;
            }
            /**
             * Describes a CPU for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalCPU.ProductBlobTechnicalCPU
             */
            export interface ProductBlobTechnicalCPU {
                boost?: number;
                brand?: string;
                cores?: number;
                customizable?: boolean;
                frequency?: number;
                maxFrequency?: number;
                model?: string;
                number?: number;
                score?: number;
                threads?: number;
                type?: string;
            }
            /**
             * Describes a Datacenter for a technical Blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalDatacenter.ProductBlobTechnicalDatacenter
             */
            export interface ProductBlobTechnicalDatacenter {
                city?: string;
                country?: string;
                countryCode?: nichandle.OvhSubsidiaryEnum;
                name?: string;
                region?: string;
            }
            /**
             * Describes a Disk for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalDisk.ProductBlobTechnicalDisk
             */
            export interface ProductBlobTechnicalDisk {
                capacity: number;
                interface?: string;
                iops?: number;
                maximumCapacity: number;
                number?: number;
                sizeUnit?: string;
                specs?: string;
                technology?: string;
                usage?: string;
            }
            /**
             * Describes an Ephemeral Storage for technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalEphemeralStorage.ProductBlobTechnicalEphemeralStorage
             */
            export interface ProductBlobTechnicalEphemeralStorage {
                disks?: order.catalog.publik.ProductBlobTechnicalDisk[];
            }
            /**
             * Describes a Frame for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalFrame.ProductBlobTechnicalFrame
             */
            export interface ProductBlobTechnicalFrame {
                dualPowerSupply: boolean;
                model: string;
                size: string;
            }
            /**
             * Describes a GPU for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalGPU.ProductBlobTechnicalGPU
             */
            export interface ProductBlobTechnicalGPU {
                brand?: string;
                memory: order.catalog.publik.ProductBlobTechnicalMemory;
                model?: string;
                number?: number;
                performance?: number;
            }
            /**
             * Describes a License for a technical Blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalLicense.ProductBlobTechnicalLicense
             */
            export interface ProductBlobTechnicalLicense {
                application?: string;
                cores?: order.catalog.publik.ProductBlobTechnicalLicenseCores;
                cpu?: order.catalog.publik.ProductBlobTechnicalCPU;
                distribution?: string;
                edition?: string;
                family?: string;
                feature?: string;
                flavor?: string;
                images?: string[];
                nbOfAccount?: number;
                package?: string;
                version?: string;
            }
            /**
             * Describes license cores for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalLicenseCores.ProductBlobTechnicalLicenseCores
             */
            export interface ProductBlobTechnicalLicenseCores {
                number: number;
                total?: number;
            }
            /**
             * Describes a Memory technical Blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalMemory.ProductBlobTechnicalMemory
             */
            export interface ProductBlobTechnicalMemory {
                customizable?: boolean;
                ecc?: boolean;
                frequency?: number;
                interface?: string;
                ramType?: string;
                size: number;
                sizeUnit?: string;
            }
            /**
             * Describes a Network technical Blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalNetwork.ProductBlobTechnicalNetwork
             */
            export interface ProductBlobTechnicalNetwork {
                burst?: number;
                capacity?: number;
                guaranteed?: boolean;
                interfaces?: number;
                isMax?: boolean;
                level?: number;
                limit?: number;
                max: number;
                maxUnit: string;
                shared?: boolean;
                traffic?: number;
                unit: string;
                unlimited?: boolean;
            }
            /**
             * Describes a Node for technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalNodes.ProductBlobTechnicalNodes
             */
            export interface ProductBlobTechnicalNodes {
                number: number;
            }
            /**
             * Describes a NVME for technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalNvme.ProductBlobTechnicalNvme
             */
            export interface ProductBlobTechnicalNvme {
                disks?: order.catalog.publik.ProductBlobTechnicalDisk[];
            }
            /**
             * Describes an OS for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalOS.ProductBlobTechnicalOS
             */
            export interface ProductBlobTechnicalOS {
                distribution?: string;
                edition?: string;
                family?: string;
                version?: string;
            }
            /**
             * Describes a connection or request per seconds for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalPerSeconds.ProductBlobTechnicalPerSeconds
             */
            export interface ProductBlobTechnicalPerSeconds {
                total: number;
                unit?: string;
            }
            /**
             * Describes a provider for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalProvider.ProductBlobTechnicalProvider
             */
            export interface ProductBlobTechnicalProvider {
                pointsOfPresence: number;
                reference?: boolean;
            }
            /**
             * Describes a Raid for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalRaid.ProductBlobTechnicalRaid
             */
            export interface ProductBlobTechnicalRaid {
                cardModel?: string;
                cardSize?: string;
                type: string;
            }
            /**
             * Describes some technicals information for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalServer.ProductBlobTechnicalServer
             */
            export interface ProductBlobTechnicalServer {
                cpu: order.catalog.publik.ProductBlobTechnicalCPU;
                frame: order.catalog.publik.ProductBlobTechnicalFrame;
                network?: order.catalog.publik.ProductBlobTechnicalNetwork;
                range: string;
                services: order.catalog.publik.ProductBlobTechnicalServices;
            }
            /**
             * Describes some technicals information
             * interface fullName: order.catalog.publik.ProductBlobTechnicalServices.ProductBlobTechnicalServices
             */
            export interface ProductBlobTechnicalServices {
                antiddos: string;
                includedBackup?: number;
                sla: number;
            }
            /**
             * Describes a Storage technical Blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalStorage.ProductBlobTechnicalStorage
             */
            export interface ProductBlobTechnicalStorage {
                disks?: order.catalog.publik.ProductBlobTechnicalDisk[];
                hotSwap?: boolean;
                raid?: string;
                raidDetails?: order.catalog.publik.ProductBlobTechnicalRaid;
            }
            /**
             * Describes a Throughput for a technical blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalThroughput.ProductBlobTechnicalThroughput
             */
            export interface ProductBlobTechnicalThroughput {
                level: number;
            }
            /**
             * Describes a Virtualization for a Technical Blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalVirtualization.ProductBlobTechnicalVirtualization
             */
            export interface ProductBlobTechnicalVirtualization {
                hypervisor?: string;
            }
            /**
             * Describes a Volume for a technichal blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalVolume.ProductBlobTechnicalVolume
             */
            export interface ProductBlobTechnicalVolume {
                capacity: order.catalog.publik.ProductBlobTechnicalVolumeCapacity;
                iops: order.catalog.publik.ProductBlobTechnicalVolumeIops;
            }
            /**
             * Describes a Capacity for a Volume for a technichal blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalVolumeCapacity.ProductBlobTechnicalVolumeCapacity
             */
            export interface ProductBlobTechnicalVolumeCapacity {
                max: number;
            }
            /**
             * Describes a Iops for a Volume for a technichal blob
             * interface fullName: order.catalog.publik.ProductBlobTechnicalVolumeIops.ProductBlobTechnicalVolumeIops
             */
            export interface ProductBlobTechnicalVolumeIops {
                guaranteed: boolean;
                level: number;
                max: number;
                maxUnit: string;
                unit: string;
            }
            /**
             * Describes a Promotion inside a Catalog
             * interface fullName: order.catalog.publik.Promotion.Promotion
             */
            export interface Promotion {
                description: string;
                discount: order.catalog.publik.PromotionDiscountTotal;
                duration?: number;
                endDate?: string;
                isGlobalQuantityLimited: boolean;
                name: string;
                quantity?: number;
                startDate: string;
                total: order.catalog.publik.PromotionDiscountTotal;
                type: order.ReductionTypeEnum;
                value: number;
            }
            /**
             * Describes a Promotion discount or total inside a Catalog
             * interface fullName: order.catalog.publik.PromotionDiscountTotal.PromotionDiscountTotal
             */
            export interface PromotionDiscountTotal {
                tax: number;
                value: number;
            }
            /**
             * Enum values for Prorata Unit
             * type fullname: order.catalog.publik.ProrataUnitEnum
             */
            export type ProrataUnitEnum = "day" | "hour" | "month"
        }
    }
    export namespace upgrade {
        /**
         * Describes an operation
         * interface fullName: order.upgrade.Operation.Operation
         */
        export interface Operation {
            id: number;
            product: order.upgrade.OperationProduct;
            status: order.upgrade.OperationStatusEnum;
            type: order.upgrade.OperationTypeEnum;
        }
        /**
         * Describes a product inside a operation
         * interface fullName: order.upgrade.OperationProduct.OperationProduct
         */
        export interface OperationProduct {
            description: string;
            name: string;
        }
        /**
         * Unit that represent the status of an operation
         * type fullname: order.upgrade.OperationStatusEnum
         */
        export type OperationStatusEnum = "CANCELLED" | "DELAYED" | "DOING" | "DONE" | "ERROR" | "SCHEDULED" | "TODO"
        /**
         * Unit that represent the type of an operation
         * type fullname: order.upgrade.OperationTypeEnum
         */
        export type OperationTypeEnum = "UPGRADE"
        /**
         * Describes an Operation and the associated Order
         * interface fullName: order.upgrade.order_upgrade_OperationAndOrder.order_upgrade_OperationAndOrder
         */
        export interface order_upgrade_OperationAndOrder {
            operation?: order.upgrade.Operation;
            order?: order.Order;
        }
    }
}
/**
 * Api model for /order
 */
export interface Order {
    cart: {
        /**
         * List of your OVH order carts
         * GET /order/cart
         */
        $get(params?: { description?: string }): Promise<string[]>;
        /**
         * Create a new OVH order cart
         * POST /order/cart
         */
        $post(params: { description?: string, expire?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.cart.Cart>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(cartId: string): {
            /**
             * Delete a cart
             * DELETE /order/cart/{cartId}
             */
            $delete(): Promise<void>;
            /**
             * Retrieve information about a specific cart
             * GET /order/cart/{cartId}
             */
            $get(): Promise<order.cart.Cart>;
            /**
             * Modify information about a specific cart
             * PUT /order/cart/{cartId}
             */
            $put(params?: { description?: string, expire?: string }): Promise<order.cart.Cart>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            assign: {
                /**
                 * Assign a shopping cart to an loggedin client
                 * POST /order/cart/{cartId}/assign
                 */
                $post(): Promise<void>;
            }
            baremetalServers: {
                /**
                 * Get information about a baremetal server
                 * GET /order/cart/{cartId}/baremetalServers
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new baremetal server item in your cart
                 * POST /order/cart/{cartId}/baremetalServers
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about baremetal server options
                     * GET /order/cart/{cartId}/baremetalServers/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new baremetal server option in your cart
                     * POST /order/cart/{cartId}/baremetalServers/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            bringYourOwnIp: {
                /**
                 * Get information about bring your own IP addresses offers
                 * GET /order/cart/{cartId}/bringYourOwnIp
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new bring your own IP addresses item in your cart
                 * POST /order/cart/{cartId}/bringYourOwnIp
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            cephaas: {
                /**
                 * Get information about Ceph as a Service offers
                 * GET /order/cart/{cartId}/cephaas
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Ceph as a Service item in your cart
                 * POST /order/cart/{cartId}/cephaas
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            checkout: {
                /**
                 * Get prices and contracts information for your cart
                 * GET /order/cart/{cartId}/checkout
                 */
                $get(): Promise<order.Order>;
                /**
                 * Validate your shopping and create order
                 * POST /order/cart/{cartId}/checkout
                 */
                $post(params?: { autoPayWithPreferredPaymentMethod?: boolean, waiveRetractationPeriod?: boolean }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            cloud: {
                /**
                 * Get information about Public Cloud offers
                 * GET /order/cart/{cartId}/cloud
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Public Cloud item in your cart
                 * POST /order/cart/{cartId}/cloud
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Public Cloud options
                     * GET /order/cart/{cartId}/cloud/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Public Cloud option in your cart
                     * POST /order/cart/{cartId}/cloud/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            coupon: {
                /**
                 * Delete a coupon from cart
                 * DELETE /order/cart/{cartId}/coupon
                 */
                $delete(params: { coupon: string }): Promise<void>;
                /**
                 * Retrieve coupons associated to cart
                 * GET /order/cart/{cartId}/coupon
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a new coupon to cart
                 * POST /order/cart/{cartId}/coupon
                 */
                $post(params: { coupon: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            dedicated: {
                /**
                 * Get information about a dedicated server
                 * GET /order/cart/{cartId}/dedicated
                 */
                $get(params?: { family?: string, planCode?: string }): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new dedicated server item in your cart
                 * POST /order/cart/{cartId}/dedicated
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about dedicated server options
                     * GET /order/cart/{cartId}/dedicated/options
                     */
                    $get(params: { family?: string, planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new dedicated server option in your cart
                     * POST /order/cart/{cartId}/dedicated/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            discover: {
                /**
                 * Get information about Dedicated Discover server offers
                 * GET /order/cart/{cartId}/discover
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Dedicated Discover server item in your cart
                 * POST /order/cart/{cartId}/discover
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Dedicated Discover server options
                     * GET /order/cart/{cartId}/discover/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Dedicated Discover server option in your cart
                     * POST /order/cart/{cartId}/discover/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            eco: {
                /**
                 * Get information about a eco
                 * GET /order/cart/{cartId}/eco
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new eco item in your cart
                 * POST /order/cart/{cartId}/eco
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about the options of a Eco
                     * GET /order/cart/{cartId}/eco/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Eco option in your cart
                     * POST /order/cart/{cartId}/eco/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            ip: {
                /**
                 * Get information about IP addresses offers
                 * GET /order/cart/{cartId}/ip
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new IP addresses item in your cart
                 * POST /order/cart/{cartId}/ip
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about IP addresses options
                     * GET /order/cart/{cartId}/ip/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new IP addresses option in your cart
                     * POST /order/cart/{cartId}/ip/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            ipLoadbalancing: {
                /**
                 * Get information about IP Load-Balancing offers
                 * GET /order/cart/{cartId}/ipLoadbalancing
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new IP Load-Balancing item in your cart
                 * POST /order/cart/{cartId}/ipLoadbalancing
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about IP Load-Balancing options
                     * GET /order/cart/{cartId}/ipLoadbalancing/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new IP Load-Balancing option in your cart
                     * POST /order/cart/{cartId}/ipLoadbalancing/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            item: {
                /**
                 * List all the items of a cart
                 * GET /order/cart/{cartId}/item
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(itemId: number): {
                    /**
                     * Delete an item from a cart
                     * DELETE /order/cart/{cartId}/item/{itemId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Retrieve information about a specific item of a cart
                     * GET /order/cart/{cartId}/item/{itemId}
                     */
                    $get(): Promise<order.cart.Item>;
                    /**
                     * Update some values on a cart item
                     * PUT /order/cart/{cartId}/item/{itemId}
                     */
                    $put(params?: { duration?: string, quantity?: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    configuration: {
                        /**
                         * Retrieve all configuration item of the cart item
                         * GET /order/cart/{cartId}/item/{itemId}/configuration
                         */
                        $get(params?: { label?: string }): Promise<number[]>;
                        /**
                         * Setup configuration item for the product
                         * POST /order/cart/{cartId}/item/{itemId}/configuration
                         */
                        $post(params: { label: string, value: string }): Promise<order.cart.ConfigurationItem>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(configurationId: number): {
                            /**
                             * Delete configuration item
                             * DELETE /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Retrieve configuration item
                             * GET /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
                             */
                            $get(): Promise<order.cart.ConfigurationItem>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    requiredConfiguration: {
                        /**
                         * Retrieve all required configuration item of the cart item
                         * GET /order/cart/{cartId}/item/{itemId}/requiredConfiguration
                         */
                        $get(): Promise<order.cart.ConfigurationRequirements[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            licenseCloudLinux: {
                /**
                 * Get information about CloudLinux licenses offers
                 * GET /order/cart/{cartId}/licenseCloudLinux
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new CloudLinux license item in your cart
                 * POST /order/cart/{cartId}/licenseCloudLinux
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseDirectadmin: {
                /**
                 * Get information about Directadmin licenses offers
                 * GET /order/cart/{cartId}/licenseDirectadmin
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Directadmin license item in your cart
                 * POST /order/cart/{cartId}/licenseDirectadmin
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licensePlesk: {
                /**
                 * Get information about Plesk licenses offers
                 * GET /order/cart/{cartId}/licensePlesk
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Plesk license item in your cart
                 * POST /order/cart/{cartId}/licensePlesk
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Plesk license options
                     * GET /order/cart/{cartId}/licensePlesk/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Plesk license option in your cart
                     * POST /order/cart/{cartId}/licensePlesk/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            licenseSqlServer: {
                /**
                 * Get information about SqlServer licenses offers
                 * GET /order/cart/{cartId}/licenseSqlServer
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new SqlServer license item in your cart
                 * POST /order/cart/{cartId}/licenseSqlServer
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseVirtuozzo: {
                /**
                 * Get information about Virtuozzo licenses offers
                 * GET /order/cart/{cartId}/licenseVirtuozzo
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Virtuozzo license item in your cart
                 * POST /order/cart/{cartId}/licenseVirtuozzo
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Virtuozzo license options
                     * GET /order/cart/{cartId}/licenseVirtuozzo/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Add a new Virtuozzo license option in your cart
                     * POST /order/cart/{cartId}/licenseVirtuozzo/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            licenseWindows: {
                /**
                 * Get information about Windows licenses offers
                 * GET /order/cart/{cartId}/licenseWindows
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Windows license item in your cart
                 * POST /order/cart/{cartId}/licenseWindows
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseWorklight: {
                /**
                 * Get information about Worklight licenses offers
                 * GET /order/cart/{cartId}/licenseWorklight
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Worklight license item in your cart
                 * POST /order/cart/{cartId}/licenseWorklight
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licensecPanel: {
                /**
                 * Get information about cPanel licenses offers
                 * GET /order/cart/{cartId}/licensecPanel
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new cPanel license item in your cart
                 * POST /order/cart/{cartId}/licensecPanel
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            nutanix: {
                /**
                 * Get information about a Nutanix
                 * GET /order/cart/{cartId}/nutanix
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Nutanix item in your cart
                 * POST /order/cart/{cartId}/nutanix
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about the options of a Nutanix
                     * GET /order/cart/{cartId}/nutanix/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Nutanix option in your cart
                     * POST /order/cart/{cartId}/nutanix/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            ovhCloudConnect: {
                /**
                 * Get information about OVHcloud Connect offers
                 * GET /order/cart/{cartId}/ovhCloudConnect
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new OVHcloud Connect item in your cart
                 * POST /order/cart/{cartId}/ovhCloudConnect
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloud: {
                /**
                 * Get information about Hosted Private Cloud offers
                 * GET /order/cart/{cartId}/privateCloud
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Hosted Private Cloud item in your cart
                 * POST /order/cart/{cartId}/privateCloud
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Hosted Private Cloud options
                     * GET /order/cart/{cartId}/privateCloud/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Hosted Private Cloud option in your cart
                     * POST /order/cart/{cartId}/privateCloud/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            sslComodo: {
                /**
                 * Get information about SSL Comodo offers
                 * GET /order/cart/{cartId}/sslComodo
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new SSL Comodo item in your cart
                 * POST /order/cart/{cartId}/sslComodo
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about SSL Comodo options
                     * GET /order/cart/{cartId}/sslComodo/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new SSL Comodo option in your cart
                     * POST /order/cart/{cartId}/sslComodo/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            summary: {
                /**
                 * Get a summary of your current order
                 * GET /order/cart/{cartId}/summary
                 */
                $get(): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            veeamEnterprise: {
                /**
                 * Get information about Veeam Enterprise offers
                 * GET /order/cart/{cartId}/veeamEnterprise
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Veeam Enterprise item in your cart
                 * POST /order/cart/{cartId}/veeamEnterprise
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Veeam Enterprise options
                     * GET /order/cart/{cartId}/veeamEnterprise/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Veeam Enterprise option in your cart
                     * POST /order/cart/{cartId}/veeamEnterprise/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            veeamcc: {
                /**
                 * Get information about Veeam Cloud Connect offers
                 * GET /order/cart/{cartId}/veeamcc
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Veeam Cloud Connect item in your cart
                 * POST /order/cart/{cartId}/veeamcc
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Veeam Cloud Connect options
                     * GET /order/cart/{cartId}/veeamcc/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Veeam Cloud Connect option in your cart
                     * POST /order/cart/{cartId}/veeamcc/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            vps: {
                /**
                 * Get information about VPS offers
                 * GET /order/cart/{cartId}/vps
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new VPS item in your cart
                 * POST /order/cart/{cartId}/vps
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about VPS options
                     * GET /order/cart/{cartId}/vps/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new VPS option in your cart
                     * POST /order/cart/{cartId}/vps/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            vrack: {
                /**
                 * Get information about vRack offers
                 * GET /order/cart/{cartId}/vrack
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new vRack item in your cart
                 * POST /order/cart/{cartId}/vrack
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    cartServiceOption: {
        baremetalServers: {
            /**
             * List available services
             * GET /order/cartServiceOption/baremetalServers
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional baremetal servers offer for your service
                 * GET /order/cartServiceOption/baremetalServers/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional baremetal servers option in your cart
                 * POST /order/cartServiceOption/baremetalServers/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        cloud: {
            /**
             * List available services
             * GET /order/cartServiceOption/cloud
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Cloud offer for your service
                 * GET /order/cartServiceOption/cloud/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Cloud option in your cart
                 * POST /order/cartServiceOption/cloud/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        dedicated: {
            /**
             * List available services
             * GET /order/cartServiceOption/dedicated
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional dedicated offer for your service
                 * GET /order/cartServiceOption/dedicated/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional dedicated option in your cart
                 * POST /order/cartServiceOption/dedicated/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        ipLoadbalancing: {
            /**
             * List available services
             * GET /order/cartServiceOption/ipLoadbalancing
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional IP Load-Balancing offer for your service
                 * GET /order/cartServiceOption/ipLoadbalancing/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional IP Load-Balancing option in your cart
                 * POST /order/cartServiceOption/ipLoadbalancing/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        logs: {
            /**
             * List available services
             * GET /order/cartServiceOption/logs
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Logs offer for your service
                 * GET /order/cartServiceOption/logs/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Logs option in your cart
                 * POST /order/cartServiceOption/logs/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        nutanix: {
            /**
             * List available services
             * GET /order/cartServiceOption/nutanix
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Nutanix offer for your service
                 * GET /order/cartServiceOption/nutanix/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional nutanix option in your cart
                 * POST /order/cartServiceOption/nutanix/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        privateCloud: {
            /**
             * List available services
             * GET /order/cartServiceOption/privateCloud
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Dedicated Cloud offer for your service
                 * GET /order/cartServiceOption/privateCloud/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Dedicated Cloud option in your cart
                 * POST /order/cartServiceOption/privateCloud/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        privateCloudEnterprise: {
            /**
             * List available services
             * GET /order/cartServiceOption/privateCloudEnterprise
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Dedicated Cloud offer for your service
                 * GET /order/cartServiceOption/privateCloudEnterprise/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Dedicated Cloud option in your cart
                 * POST /order/cartServiceOption/privateCloudEnterprise/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        privateCloudReseller: {
            /**
             * List available services
             * GET /order/cartServiceOption/privateCloudReseller
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Dedicated Cloud offer for your service
                 * GET /order/cartServiceOption/privateCloudReseller/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Dedicated Cloud option in your cart
                 * POST /order/cartServiceOption/privateCloudReseller/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        privateCloudResellerEnterprise: {
            /**
             * List available services
             * GET /order/cartServiceOption/privateCloudResellerEnterprise
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Dedicated Cloud Enterprise offer for your service
                 * GET /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Dedicated Cloud Enterprise option in your cart
                 * POST /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        vps: {
            /**
             * List available services
             * GET /order/cartServiceOption/vps
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional VPS offer for your service
                 * GET /order/cartServiceOption/vps/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional VPS option in your cart
                 * POST /order/cartServiceOption/vps/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        webPaaS: {
            /**
             * List available services
             * GET /order/cartServiceOption/webPaaS
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Web PaaS offer for your service
                 * GET /order/cartServiceOption/webPaaS/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Web PaaS option in your cart
                 * POST /order/cartServiceOption/webPaaS/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
    catalog: {
        formatted: {
            /**
             * Retrieve list of catalog name
             * GET /order/catalog/formatted
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            bringYourOwnIp: {
                /**
                 * Retrieve information of bring your own IP addresses catalog
                 * GET /order/catalog/formatted/bringYourOwnIp
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            cloud: {
                /**
                 * Retrieve information of Public Cloud catalog
                 * GET /order/catalog/formatted/cloud
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            dedicated: {
                /**
                 * Retrieve information of dedicated server catalog
                 * GET /order/catalog/formatted/dedicated
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.dedicated.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            discover: {
                /**
                 * Retrieve information of dedicated discover offer server catalog
                 * GET /order/catalog/formatted/discover
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.dedicated.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ip: {
                /**
                 * Retrieve information of IP addresses catalog
                 * GET /order/catalog/formatted/ip
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseCloudLinux: {
                /**
                 * Retrieve information of CloudLinux licenses catalog
                 * GET /order/catalog/formatted/licenseCloudLinux
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseDirectadmin: {
                /**
                 * Retrieve information of Directadmin licenses offers catalog
                 * GET /order/catalog/formatted/licenseDirectadmin
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licensePlesk: {
                /**
                 * Retrieve information of Plesk licenses catalog
                 * GET /order/catalog/formatted/licensePlesk
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseSqlServer: {
                /**
                 * Retrieve information of SqlServer licenses catalog
                 * GET /order/catalog/formatted/licenseSqlServer
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseVirtuozzo: {
                /**
                 * Retrieve information of Virtuozzo licenses catalog
                 * GET /order/catalog/formatted/licenseVirtuozzo
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseWindows: {
                /**
                 * Retrieve information of Windows licenses catalog
                 * GET /order/catalog/formatted/licenseWindows
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licenseWorklight: {
                /**
                 * Retrieve information of Worklight licenses catalog
                 * GET /order/catalog/formatted/licenseWorklight
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licensecPanel: {
                /**
                 * Retrieve information of cPanel licenses catalog
                 * GET /order/catalog/formatted/licensecPanel
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloud: {
                /**
                 * Retrieve information of Dedicated Cloud catalog
                 * GET /order/catalog/formatted/privateCloud
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.pcc.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            vps: {
                /**
                 * Retrieve information of VPS catalog
                 * GET /order/catalog/formatted/vps
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        private: {
            privateCloud: {
                /**
                 * Retrieve information of catalog
                 * GET /order/catalog/private/privateCloud
                 */
                $get(params: { catalogName: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.pcc.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        public: {
            baremetalServers: {
                /**
                 * Retrieve bare-metal servers catalog
                 * GET /order/catalog/public/baremetalServers
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.DedicatedServerCatalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            cloud: {
                /**
                 * Retrieve Public Cloud catalog
                 * GET /order/catalog/public/cloud
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            domain: {
                /**
                 * Retrieve domain catalog
                 * GET /order/catalog/public/domain
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            eco: {
                /**
                 * Retrieve Eco catalog
                 * GET /order/catalog/public/eco
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            emailpro: {
                /**
                 * Retrieve emailpro catalog
                 * GET /order/catalog/public/emailpro
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            exchange: {
                /**
                 * Retrieve exchange catalog
                 * GET /order/catalog/public/exchange
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            licensecPanel: {
                /**
                 * Retrieve License cPanel catalog
                 * GET /order/catalog/public/licensecPanel
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            logs: {
                /**
                 * Retrieve Logs catalog
                 * GET /order/catalog/public/logs
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            nasha: {
                /**
                 * Retrieve nasha catalog
                 * GET /order/catalog/public/nasha
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            netapp: {
                /**
                 * Retrieve Netapp catalog
                 * GET /order/catalog/public/netapp
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            nutanix: {
                /**
                 * Retrieve Nutanix clusters catalog
                 * GET /order/catalog/public/nutanix
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            office365Prepaid: {
                /**
                 * Retrieve office365Prepaid catalog
                 * GET /order/catalog/public/office365Prepaid
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            officePrepaid: {
                /**
                 * Retrieve officePrepaid catalog
                 * GET /order/catalog/public/officePrepaid
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ovhCloudConnect: {
                /**
                 * Retrieve OVH Cloud Connect catalog
                 * GET /order/catalog/public/ovhCloudConnect
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloud: {
                /**
                 * Retrieve Dedicated Cloud catalog
                 * GET /order/catalog/public/privateCloud
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloudEnterprise: {
                /**
                 * Retrieve Private Cloud Enterprise catalog
                 * GET /order/catalog/public/privateCloudEnterprise
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateSQL: {
                /**
                 * Retrieve Private SQL catalog
                 * GET /order/catalog/public/privateSQL
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            telephony: {
                /**
                 * Retrieve Telephony catalog
                 * GET /order/catalog/public/telephony
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            vps: {
                /**
                 * Retrieve VPS catalog
                 * GET /order/catalog/public/vps
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            webPaaS: {
                /**
                 * Retrieve Web PaaS catalog
                 * GET /order/catalog/public/webPaaS
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
    }
    upgrade: {
        baremetalPrivateBandwidth: {
            /**
             * List available services
             * GET /order/upgrade/baremetalPrivateBandwidth
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/baremetalPrivateBandwidth/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        baremetalPublicBandwidth: {
            /**
             * List available services
             * GET /order/upgrade/baremetalPublicBandwidth
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/baremetalPublicBandwidth/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        cephaas: {
            /**
             * List available services
             * GET /order/upgrade/cephaas
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/cephaas/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/cephaas/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/cephaas/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        licensePlesk: {
            /**
             * List available services
             * GET /order/upgrade/licensePlesk
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/licensePlesk/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/licensePlesk/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/licensePlesk/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        licensecPanel: {
            /**
             * List available services
             * GET /order/upgrade/licensecPanel
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/licensecPanel/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/licensecPanel/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/licensecPanel/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        privateCloud: {
            /**
             * List available services
             * GET /order/upgrade/privateCloud
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/privateCloud/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/privateCloud/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/privateCloud/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        privateCloudManagementFee: {
            /**
             * List available services
             * GET /order/upgrade/privateCloudManagementFee
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/privateCloudManagementFee/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        vps: {
            /**
             * List available services
             * GET /order/upgrade/vps
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/vps/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/vps/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/vps/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        vpsAdditionalDisk: {
            /**
             * List available services
             * GET /order/upgrade/vpsAdditionalDisk
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/vpsAdditionalDisk/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
    }
}

export declare function proxyOrder(ovhEngine: OvhRequestable): Order;
export default proxyOrder;

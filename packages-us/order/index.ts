import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /order Models
 * Source: https://api.us.ovhcloud.com/1.0/order.json
 */
export namespace complexType {
    // interface fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace nichandle {
    // type fullname: nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    // type fullname: nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
}
export namespace order {
    // interface fullName: order.Contract.Contract
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Order.Order
    export interface Order {
        contracts: order.Contract[];
        details: order.OrderDetail[];
        orderId?: number;
        prices: order.OrderPrices;
        url?: string;
    }
    // interface fullName: order.OrderDetail.OrderDetail
    export interface OrderDetail {
        description: string;
        detailType?: order.OrderDetailTypeEnum;
        domain: string;
        quantity: number;
        totalPrice: order.Price;
        unitPrice: order.Price;
    }
    // type fullname: order.OrderDetailTypeEnum
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    // interface fullName: order.OrderPrices.OrderPrices
    export interface OrderPrices {
        tax: order.Price;
        withTax: order.Price;
        withoutTax: order.Price;
    }
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
    export namespace cart {
        // interface fullName: order.cart.Cart.Cart
        export interface Cart {
            cartId: string;
            description: string;
            expire?: string;
            items: number[];
            readOnly: boolean;
        }
        // interface fullName: order.cart.ConfigurationItem.ConfigurationItem
        export interface ConfigurationItem {
            id: number;
            label: string;
            value: string;
        }
        // interface fullName: order.cart.ConfigurationRequirements.ConfigurationRequirements
        export interface ConfigurationRequirements {
            fields?: string[];
            label: string;
            required: boolean;
            type: string;
        }
        // interface fullName: order.cart.DomainSettings.DomainSettings
        export interface DomainSettings {
            domain: string;
        }
        // type fullname: order.cart.DurationUnitEnum
        export type DurationUnitEnum = "month" | "day" | "none"
        // interface fullName: order.cart.GenericOptionDefinition.GenericOptionDefinition
        export interface GenericOptionDefinition {
            exclusive: boolean;
            family: string;
            mandatory: boolean;
            planCode: string;
            prices: order.cart.GenericProductPricing[];
            productName: string;
            productType: order.cart.GenericProductTypeEnum;
        }
        // interface fullName: order.cart.GenericProductDefinition.GenericProductDefinition
        export interface GenericProductDefinition {
            planCode: string;
            prices: order.cart.GenericProductPricing[];
            productName: string;
            productType: order.cart.GenericProductTypeEnum;
        }
        // interface fullName: order.cart.GenericProductPricing.GenericProductPricing
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
        // type fullname: order.cart.GenericProductPricingCapacitiesEnum
        export type GenericProductPricingCapacitiesEnum = "installation" | "renew" | "upgrade" | "downgrade" | "detach"
        // type fullname: order.cart.GenericProductPricingStrategyEnum
        export type GenericProductPricingStrategyEnum = "stairstep" | "volume" | "tiered"
        // type fullname: order.cart.GenericProductPricingTypeEnum
        export type GenericProductPricingTypeEnum = "rental" | "consumption" | "purchase"
        // type fullname: order.cart.GenericProductTypeEnum
        export type GenericProductTypeEnum = "delivery" | "deposit" | "shipping" | "cloud_service" | "saas_license" | "storage" | "domain"
        // interface fullName: order.cart.Item.Item
        export interface Item {
            cartId: string;
            configurations?: number[];
            duration?: string;
            itemId: number;
            offerId: string;
            options: number[];
            parentItemId?: number;
            prices: order.cart.Price[];
            productId: string;
            settings: order.cart.DomainSettings;
        }
        // interface fullName: order.cart.Price.Price
        export interface Price {
            label: order.cart.PriceLabelEnum;
            price: order.Price;
        }
        // type fullname: order.cart.PriceLabelEnum
        export type PriceLabelEnum = "PRICE" | "DISCOUNT" | "FEE" | "TOTAL" | "RENEW"
    }
    export namespace catalog {
        // interface fullName: order.catalog.AddonItem.AddonItem
        export interface AddonItem {
            addons: order.catalog.AddonOffer[];
            exclusive: boolean;
            family: string;
            mandatory: boolean;
        }
        // interface fullName: order.catalog.AddonOffer.AddonOffer
        export interface AddonOffer {
            invoiceName: string;
            plan: order.catalog.ProductPlan;
        }
        // interface fullName: order.catalog.Catalog.Catalog
        export interface Catalog {
            catalogId: number;
            merchantCode: string;
            plansFamily: order.catalog.PlansItem[];
        }
        // interface fullName: order.catalog.ConfigurationItem.ConfigurationItem
        export interface ConfigurationItem {
            defaultValue?: string;
            isCustom: boolean;
            isMandatory: boolean;
            name: string;
            values: string[];
        }
        // interface fullName: order.catalog.PlansItem.PlansItem
        export interface PlansItem {
            family: string;
            plans: order.catalog.ProductPlan[];
        }
        // interface fullName: order.catalog.Pricing.Pricing
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
        // interface fullName: order.catalog.PricingDefault.PricingDefault
        export interface PricingDefault {
            default: order.catalog.Pricing[];
        }
        // interface fullName: order.catalog.Product.Product
        export interface Product {
            configurations: order.catalog.ConfigurationItem[];
            description: string;
            name: string;
            technicalDetails?: complexType.SafeKeyValue<string>[];
        }
        // interface fullName: order.catalog.ProductOfferDetails.ProductOfferDetails
        export interface ProductOfferDetails {
            metadatas: complexType.SafeKeyValue<string>[];
            pricings: order.catalog.PricingDefault;
            product: order.catalog.Product;
        }
        // interface fullName: order.catalog.ProductPlan.ProductPlan
        export interface ProductPlan {
            addonsFamily: order.catalog.AddonItem[];
            consumptionBillingStrategy?: string;
            details: order.catalog.ProductOfferDetails;
            invoiceName: string;
            planCode: string;
            pricingType: string;
        }
        export namespace pcc {
            // interface fullName: order.catalog.pcc.Catalog.Catalog
            export interface Catalog {
                catalogId: number;
                catalogName: string;
                commercialRanges: order.catalog.pcc.CommercialRange[];
                merchantCode: string;
                plans: order.catalog.ProductPlan[];
            }
            // interface fullName: order.catalog.pcc.CommercialRange.CommercialRange
            export interface CommercialRange {
                datacenters: order.catalog.pcc.Datacenter[];
                defaultZone: string;
                name: string;
            }
            // interface fullName: order.catalog.pcc.Datacenter.Datacenter
            export interface Datacenter {
                cityCode: string;
                cityName: string;
                countryCode: nichandle.CountryEnum;
                defaultHypervisor: string;
                hypervisors: order.catalog.pcc.Hypervisor[];
                mainPlan: string;
                orderable: boolean;
                orderableOptions: boolean;
                orderableResources: boolean;
                storagesNoPack: string[];
                zoneFullName: string;
                zoneName: string;
            }
            // interface fullName: order.catalog.pcc.Host.Host
            export interface Host {
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                specifications: order.catalog.pcc.HostSpecifications;
                storagesPack: string[];
            }
            // interface fullName: order.catalog.pcc.HostCpuSpecifications.HostCpuSpecifications
            export interface HostCpuSpecifications {
                cores: number;
                frequency: complexType.UnitAndValue<number>;
                generation: string;
                model: string;
                socket: number;
                threads: number;
            }
            // interface fullName: order.catalog.pcc.HostMemorySpecifications.HostMemorySpecifications
            export interface HostMemorySpecifications {
                ram: complexType.UnitAndValue<number>;
            }
            // interface fullName: order.catalog.pcc.HostNetworkSpecifications.HostNetworkSpecifications
            export interface HostNetworkSpecifications {
                nics: number;
                speed: complexType.UnitAndValue<number>;
            }
            // interface fullName: order.catalog.pcc.HostSpecifications.HostSpecifications
            export interface HostSpecifications {
                cpu: order.catalog.pcc.HostCpuSpecifications;
                memory: order.catalog.pcc.HostMemorySpecifications;
                network: order.catalog.pcc.HostNetworkSpecifications[];
            }
            // interface fullName: order.catalog.pcc.Hypervisor.Hypervisor
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
            // interface fullName: order.catalog.pcc.Option.Option
            export interface Option {
                maxInitialQuantity: number;
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                type: string;
            }
            // interface fullName: order.catalog.pcc.ServicePack.ServicePack
            export interface ServicePack {
                name: string;
                options: order.catalog.pcc.ServicePackOption[];
                planCode: string;
                upgradableTo: string[];
            }
            // interface fullName: order.catalog.pcc.ServicePackOption.ServicePackOption
            export interface ServicePackOption {
                name: string;
                planCode: string;
                type: string;
            }
            // interface fullName: order.catalog.pcc.Storage.Storage
            export interface Storage {
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                specifications: order.catalog.pcc.StorageSpecifications;
            }
            // interface fullName: order.catalog.pcc.StorageSpecifications.StorageSpecifications
            export interface StorageSpecifications {
                size: complexType.UnitAndValue<number>;
                type: string;
            }
        }
        export namespace publik {
            // interface fullName: order.catalog.publik.AddonFamily.AddonFamily
            export interface AddonFamily {
                addons: string[];
                default?: string;
                exclusive: boolean;
                mandatory: boolean;
                name: string;
            }
            // interface fullName: order.catalog.publik.Catalog.Catalog
            export interface Catalog {
                addons: order.catalog.publik.Plan[];
                catalogId: number;
                locale: order.catalog.publik.Locale;
                planFamilies: order.catalog.publik.PlanFamily[];
                plans: order.catalog.publik.Plan[];
                products: order.catalog.publik.Product[];
            }
            // interface fullName: order.catalog.publik.Configuration.Configuration
            export interface Configuration {
                isCustom: boolean;
                isMandatory: boolean;
                name: string;
                values: string[];
            }
            // interface fullName: order.catalog.publik.DedicatedServerCatalog.DedicatedServerCatalog
            export interface DedicatedServerCatalog {
                addons: order.catalog.publik.Plan[];
                catalogId: number;
                locale: order.catalog.publik.Locale;
                planFamilies: order.catalog.publik.AddonFamily[];
                plans: order.catalog.publik.Plan[];
                products: order.catalog.publik.DedicatedServerProduct[];
            }
            // interface fullName: order.catalog.publik.DedicatedServerProduct.DedicatedServerProduct
            export interface DedicatedServerProduct {
                blobs?: order.catalog.publik.DedicatedServerProductBlob;
                description: string;
                name: string;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlob.DedicatedServerProductBlob
            export interface DedicatedServerProductBlob {
                technical?: order.catalog.publik.DedicatedServerProductBlobTechnical;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnical.DedicatedServerProductBlobTechnical
            export interface DedicatedServerProductBlobTechnical {
                bandwidth?: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork;
                cpu?: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU;
                gpu?: order.catalog.publik.DedicatedServerProductBlobTechnicalGPU;
                memory?: order.catalog.publik.DedicatedServerProductBlobTechnicalMemory;
                server?: order.catalog.publik.DedicatedServerProductBlobTechnicalServer;
                storage?: order.catalog.publik.DedicatedServerProductBlobTechnicalStorage;
                vrack?: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU.DedicatedServerProductBlobTechnicalCPU
            export interface DedicatedServerProductBlobTechnicalCPU {
                boost: number;
                brand: string;
                cores: number;
                frequency: number;
                model: string;
                score: number;
                threads: number;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalDisk.DedicatedServerProductBlobTechnicalDisk
            export interface DedicatedServerProductBlobTechnicalDisk {
                capacity: number;
                interface: string;
                number: number;
                specs: string;
                technology: string;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalFrame.DedicatedServerProductBlobTechnicalFrame
            export interface DedicatedServerProductBlobTechnicalFrame {
                model: string;
                size: string;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalGPU.DedicatedServerProductBlobTechnicalGPU
            export interface DedicatedServerProductBlobTechnicalGPU {
                memory: number;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalMemory.DedicatedServerProductBlobTechnicalMemory
            export interface DedicatedServerProductBlobTechnicalMemory {
                ecc: boolean;
                frequency: number;
                ramType: string;
                size: number;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork.DedicatedServerProductBlobTechnicalNetwork
            export interface DedicatedServerProductBlobTechnicalNetwork {
                burst?: number;
                guaranteed: boolean;
                level: number;
                limit?: number;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalServer.DedicatedServerProductBlobTechnicalServer
            export interface DedicatedServerProductBlobTechnicalServer {
                cpu: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU;
                frame: order.catalog.publik.DedicatedServerProductBlobTechnicalFrame;
                range: string;
            }
            // interface fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalStorage.DedicatedServerProductBlobTechnicalStorage
            export interface DedicatedServerProductBlobTechnicalStorage {
                disks: order.catalog.publik.DedicatedServerProductBlobTechnicalDisk[];
                raid: string;
            }
            // interface fullName: order.catalog.publik.Locale.Locale
            export interface Locale {
                currencyCode: order.CurrencyCodeEnum;
                subsidiary: nichandle.OvhSubsidiaryEnum;
                taxRate: number;
            }
            // interface fullName: order.catalog.publik.Plan.Plan
            export interface Plan {
                addonFamilies: order.catalog.publik.AddonFamily[];
                configurations: order.catalog.publik.Configuration[];
                family?: string;
                invoiceName: string;
                planCode: string;
                pricingType: order.cart.GenericProductPricingTypeEnum;
                pricings: order.catalog.publik.Pricing[];
                product: string;
            }
            // interface fullName: order.catalog.publik.PlanFamily.PlanFamily
            export interface PlanFamily {
                name: string;
            }
            // interface fullName: order.catalog.publik.Pricing.Pricing
            export interface Pricing {
                capacities: order.cart.GenericProductPricingCapacitiesEnum[];
                commitment: number;
                description: string;
                interval: number;
                intervalUnit: order.cart.DurationUnitEnum;
                mode: string;
                mustBeCompleted: boolean;
                phase: number;
                price: number;
                quantity: order.catalog.publik.PricingMinMax;
                repeat: order.catalog.publik.PricingMinMax;
                strategy: order.cart.GenericProductPricingStrategyEnum;
                tax: number;
                type: order.cart.GenericProductPricingTypeEnum;
            }
            // interface fullName: order.catalog.publik.PricingMinMax.PricingMinMax
            export interface PricingMinMax {
                max?: number;
                min: number;
            }
            // interface fullName: order.catalog.publik.Product.Product
            export interface Product {
                description: string;
                name: string;
            }
        }
    }
    export namespace upgrade {
        // interface fullName: order.upgrade.Operation.Operation
        export interface Operation {
            id: number;
            product: order.upgrade.OperationProduct;
            status: order.upgrade.OperationStatusEnum;
            type: order.upgrade.OperationTypeEnum;
        }
        // interface fullName: order.upgrade.OperationProduct.OperationProduct
        export interface OperationProduct {
            description: string;
            name: string;
        }
        // type fullname: order.upgrade.OperationStatusEnum
        export type OperationStatusEnum = "TODO" | "DOING" | "DONE" | "ERROR" | "DELAYED" | "CANCELLED" | "SCHEDULED"
        // type fullname: order.upgrade.OperationTypeEnum
        export type OperationTypeEnum = "UPGRADE"
        // interface fullName: order.upgrade.order_upgrade_OperationAndOrder.order_upgrade_OperationAndOrder
        export interface order_upgrade_OperationAndOrder {
            operation?: order.upgrade.Operation;
            order?: order.Order;
        }
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
 * Api Proxy model
 */// Apis harmony
// path /order
export interface Order{
    cart: {
        // GET /order/cart
        $get(params?: {description?: string}): Promise<string[]>;
        // POST /order/cart
        $post(params: {description?: string, expire?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.cart.Cart>;
        $(cartId: string): {
            // DELETE /order/cart/{cartId}
            $delete(): Promise<void>;
            // GET /order/cart/{cartId}
            $get(): Promise<order.cart.Cart>;
            // PUT /order/cart/{cartId}
            $put(params?: {description?: string, expire?: string}): Promise<order.cart.Cart>;
            assign: {
                // POST /order/cart/{cartId}/assign
                $post(): Promise<void>;
            }
            checkout: {
                // GET /order/cart/{cartId}/checkout
                $get(): Promise<order.Order>;
                // POST /order/cart/{cartId}/checkout
                $post(params?: {autoPayWithPreferredPaymentMethod?: boolean, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
            }
            cloud: {
                // GET /order/cart/{cartId}/cloud
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cloud
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/cloud/options
                    $get(params: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cloud/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            coupon: {
                // DELETE /order/cart/{cartId}/coupon
                $delete(params: {coupon: string}): Promise<void>;
                // GET /order/cart/{cartId}/coupon
                $get(): Promise<string[]>;
                // POST /order/cart/{cartId}/coupon
                $post(params: {coupon: string}): Promise<string[]>;
            }
            dedicated: {
                // GET /order/cart/{cartId}/dedicated
                $get(params?: {family?: string, planCode?: string}): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicated
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/dedicated/options
                    $get(params: {family?: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicated/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            discover: {
                // GET /order/cart/{cartId}/discover
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/discover
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/discover/options
                    $get(params: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/discover/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            ip: {
                // GET /order/cart/{cartId}/ip
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ip
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/ip/options
                    $get(params: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/ip/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            ipLoadbalancing: {
                // GET /order/cart/{cartId}/ipLoadbalancing
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ipLoadbalancing
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/ipLoadbalancing/options
                    $get(params: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/ipLoadbalancing/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            item: {
                // GET /order/cart/{cartId}/item
                $get(): Promise<number[]>;
                $(itemId: number): {
                    // DELETE /order/cart/{cartId}/item/{itemId}
                    $delete(): Promise<void>;
                    // GET /order/cart/{cartId}/item/{itemId}
                    $get(): Promise<order.cart.Item>;
                    // PUT /order/cart/{cartId}/item/{itemId}
                    $put(params?: {duration?: string, quantity?: number}): Promise<order.cart.Item>;
                    configuration: {
                        // GET /order/cart/{cartId}/item/{itemId}/configuration
                        $get(params?: {label?: string}): Promise<number[]>;
                        // POST /order/cart/{cartId}/item/{itemId}/configuration
                        $post(params: {label: string, value: string}): Promise<order.cart.ConfigurationItem>;
                        $(configurationId: number): {
                            // DELETE /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
                            $delete(): Promise<void>;
                            // GET /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
                            $get(): Promise<order.cart.ConfigurationItem>;
                        };
                    }
                    requiredConfiguration: {
                        // GET /order/cart/{cartId}/item/{itemId}/requiredConfiguration
                        $get(): Promise<order.cart.ConfigurationRequirements[]>;
                    }
                };
            }
            licenseCloudLinux: {
                // GET /order/cart/{cartId}/licenseCloudLinux
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseCloudLinux
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            licenseDirectadmin: {
                // GET /order/cart/{cartId}/licenseDirectadmin
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseDirectadmin
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            licensePlesk: {
                // GET /order/cart/{cartId}/licensePlesk
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licensePlesk
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/licensePlesk/options
                    $get(params: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/licensePlesk/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            licenseSqlServer: {
                // GET /order/cart/{cartId}/licenseSqlServer
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseSqlServer
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            licenseVirtuozzo: {
                // GET /order/cart/{cartId}/licenseVirtuozzo
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseVirtuozzo
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/licenseVirtuozzo/options
                    $get(params: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/licenseVirtuozzo/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            licenseWindows: {
                // GET /order/cart/{cartId}/licenseWindows
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseWindows
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            licenseWorklight: {
                // GET /order/cart/{cartId}/licenseWorklight
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseWorklight
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            licensecPanel: {
                // GET /order/cart/{cartId}/licensecPanel
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licensecPanel
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            ovhCloudConnect: {
                // GET /order/cart/{cartId}/ovhCloudConnect
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ovhCloudConnect
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            sslComodo: {
                // GET /order/cart/{cartId}/sslComodo
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sslComodo
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            summary: {
                // GET /order/cart/{cartId}/summary
                $get(): Promise<order.Order>;
            }
            veeamEnterprise: {
                // GET /order/cart/{cartId}/veeamEnterprise
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/veeamEnterprise
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/veeamEnterprise/options
                    $get(params: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/veeamEnterprise/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            vps: {
                // GET /order/cart/{cartId}/vps
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vps
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/vps/options
                    $get(params: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/vps/options
                    $post(params: {duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
                }
            }
            vrack: {
                // GET /order/cart/{cartId}/vrack
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vrack
                $post(params: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
        };
    }
    cartServiceOption: {
        cloud: {
            // GET /order/cartServiceOption/cloud
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/cloud/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/cloud/{serviceName}
                $post(params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        dedicated: {
            // GET /order/cartServiceOption/dedicated
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/dedicated/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/dedicated/{serviceName}
                $post(params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        ipLoadbalancing: {
            // GET /order/cartServiceOption/ipLoadbalancing
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/ipLoadbalancing/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/ipLoadbalancing/{serviceName}
                $post(params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        privateCloud: {
            // GET /order/cartServiceOption/privateCloud
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloud/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloud/{serviceName}
                $post(params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        privateCloudReseller: {
            // GET /order/cartServiceOption/privateCloudReseller
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloudReseller/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloudReseller/{serviceName}
                $post(params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        privateCloudResellerEnterprise: {
            // GET /order/cartServiceOption/privateCloudResellerEnterprise
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                $post(params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
    }
    catalog: {
        formatted: {
            // GET /order/catalog/formatted
            $get(): Promise<string[]>;
            cloud: {
                // GET /order/catalog/formatted/cloud
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            dedicated: {
                // GET /order/catalog/formatted/dedicated
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            discover: {
                // GET /order/catalog/formatted/discover
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            ip: {
                // GET /order/catalog/formatted/ip
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseCloudLinux: {
                // GET /order/catalog/formatted/licenseCloudLinux
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseDirectadmin: {
                // GET /order/catalog/formatted/licenseDirectadmin
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licensePlesk: {
                // GET /order/catalog/formatted/licensePlesk
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseSqlServer: {
                // GET /order/catalog/formatted/licenseSqlServer
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseVirtuozzo: {
                // GET /order/catalog/formatted/licenseVirtuozzo
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseWindows: {
                // GET /order/catalog/formatted/licenseWindows
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseWorklight: {
                // GET /order/catalog/formatted/licenseWorklight
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licensecPanel: {
                // GET /order/catalog/formatted/licensecPanel
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            vps: {
                // GET /order/catalog/formatted/vps
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
        }
        public: {
            baremetalServers: {
                // GET /order/catalog/public/baremetalServers
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.publik.DedicatedServerCatalog>;
            }
            cloud: {
                // GET /order/catalog/public/cloud
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.publik.Catalog>;
            }
            enterpriseCloudDatabases: {
                // GET /order/catalog/public/enterpriseCloudDatabases
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.publik.Catalog>;
            }
            vps: {
                // GET /order/catalog/public/vps
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.publik.Catalog>;
            }
            webHosting: {
                // GET /order/catalog/public/webHosting
                $get(params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.publik.Catalog>;
            }
        }
    }
    upgrade: {
        licensePlesk: {
            // GET /order/upgrade/licensePlesk
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/licensePlesk/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/licensePlesk/{serviceName}/{planCode}
                    $get(params: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/licensePlesk/{serviceName}/{planCode}
                    $post(params: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        privateCloud: {
            // GET /order/upgrade/privateCloud
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/privateCloud/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/privateCloud/{serviceName}/{planCode}
                    $get(params: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/privateCloud/{serviceName}/{planCode}
                    $post(params: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
    }
// Api
  /**
   * Missing description
   * List of your OVH order carts
   */
  get(path: '/order/cart'): (params?: {description?: string}) => Promise<string[]>;
  /**
   * Missing description
   * Retrieve information about a specific cart
   */
  get(path: '/order/cart/{cartId}'): (params: {cartId: string}) => Promise<order.cart.Cart>;
  /**
   * Missing description
   * Get prices and contracts information for your cart
   */
  get(path: '/order/cart/{cartId}/checkout'): (params: {cartId: string}) => Promise<order.Order>;
  /**
   * Missing description
   * Get informations about Public Cloud offers
   */
  get(path: '/order/cart/{cartId}/cloud'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Public Cloud options
   */
  get(path: '/order/cart/{cartId}/cloud/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Retrieve coupons associated to cart
   */
  get(path: '/order/cart/{cartId}/coupon'): (params: {cartId: string}) => Promise<string[]>;
  /**
   * Missing description
   * Get informations about a dedicated server
   */
  get(path: '/order/cart/{cartId}/dedicated'): (params: {cartId: string, family?: string, planCode?: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about dedicated server options
   */
  get(path: '/order/cart/{cartId}/dedicated/options'): (params: {cartId: string, family?: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Dedicated Discover server offers
   */
  get(path: '/order/cart/{cartId}/discover'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Dedicated Discover server options
   */
  get(path: '/order/cart/{cartId}/discover/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about IP addresses offers
   */
  get(path: '/order/cart/{cartId}/ip'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about IP addresses options
   */
  get(path: '/order/cart/{cartId}/ip/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about IP Load-Balancing offers
   */
  get(path: '/order/cart/{cartId}/ipLoadbalancing'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about IP Load-Balancing options
   */
  get(path: '/order/cart/{cartId}/ipLoadbalancing/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * List all the items of a cart
   */
  get(path: '/order/cart/{cartId}/item'): (params: {cartId: string}) => Promise<number[]>;
  /**
   * Missing description
   * Retrieve information about a specific item of a cart
   */
  get(path: '/order/cart/{cartId}/item/{itemId}'): (params: {cartId: string, itemId: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Retrieve all configuration item of the cart item
   */
  get(path: '/order/cart/{cartId}/item/{itemId}/configuration'): (params: {cartId: string, itemId: number, label?: string}) => Promise<number[]>;
  /**
   * Missing description
   * Retrieve configuration item
   */
  get(path: '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}'): (params: {cartId: string, configurationId: number, itemId: number}) => Promise<order.cart.ConfigurationItem>;
  /**
   * Missing description
   * Retrieve all required configuration item of the cart item
   */
  get(path: '/order/cart/{cartId}/item/{itemId}/requiredConfiguration'): (params: {cartId: string, itemId: number}) => Promise<order.cart.ConfigurationRequirements[]>;
  /**
   * Missing description
   * Get informations about CloudLinux licenses offers
   */
  get(path: '/order/cart/{cartId}/licenseCloudLinux'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about cPanel licenses offers
   */
  get(path: '/order/cart/{cartId}/licensecPanel'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Directadmin licenses offers
   */
  get(path: '/order/cart/{cartId}/licenseDirectadmin'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Plesk licenses offers
   */
  get(path: '/order/cart/{cartId}/licensePlesk'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Plesk license options
   */
  get(path: '/order/cart/{cartId}/licensePlesk/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about SqlServer licenses offers
   */
  get(path: '/order/cart/{cartId}/licenseSqlServer'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Virtuozzo licenses offers
   */
  get(path: '/order/cart/{cartId}/licenseVirtuozzo'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Virtuozzo license options
   */
  get(path: '/order/cart/{cartId}/licenseVirtuozzo/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Windows licenses offers
   */
  get(path: '/order/cart/{cartId}/licenseWindows'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Worklight licenses offers
   */
  get(path: '/order/cart/{cartId}/licenseWorklight'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * List of OVHcloud Connect product
   * Get informations about OVHcloud Connect offers
   */
  get(path: '/order/cart/{cartId}/ovhCloudConnect'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Comodo offers
   */
  get(path: '/order/cart/{cartId}/sslComodo'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get a summary of your current order
   */
  get(path: '/order/cart/{cartId}/summary'): (params: {cartId: string}) => Promise<order.Order>;
  /**
   * Missing description
   * Get informations about Veeam Enterprise offers
   */
  get(path: '/order/cart/{cartId}/veeamEnterprise'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Veeam Enterprise options
   */
  get(path: '/order/cart/{cartId}/veeamEnterprise/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about VPS offers
   */
  get(path: '/order/cart/{cartId}/vps'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about VPS options
   */
  get(path: '/order/cart/{cartId}/vps/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about vRack offers
   */
  get(path: '/order/cart/{cartId}/vrack'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  get(path: '/order/cartServiceOption/cloud'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/cloud/#serviceName#
   * Get informations about additional Cloud offer for your service
   */
  get(path: '/order/cartServiceOption/cloud/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the DEDICATED service
   * List available services
   */
  get(path: '/order/cartServiceOption/dedicated'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/dedicated/#serviceName#
   * Get informations about additional dedicated offer for your service
   */
  get(path: '/order/cartServiceOption/dedicated/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the IPLB service
   * List available services
   */
  get(path: '/order/cartServiceOption/ipLoadbalancing'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#
   * Get informations about additional IP Load-Balancing offer for your service
   */
  get(path: '/order/cartServiceOption/ipLoadbalancing/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PCC service
   * List available services
   */
  get(path: '/order/cartServiceOption/privateCloud'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloud/#serviceName#
   * Get informations about additional Private Cloud offer for your service
   */
  get(path: '/order/cartServiceOption/privateCloud/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PCC service
   * List available services
   */
  get(path: '/order/cartServiceOption/privateCloudReseller'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName#
   * Get informations about additional Private Cloud offer for your service
   */
  get(path: '/order/cartServiceOption/privateCloudReseller/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PCC service
   * List available services
   */
  get(path: '/order/cartServiceOption/privateCloudResellerEnterprise'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#
   * Get informations about additional Private Cloud Enterprise offer for your service
   */
  get(path: '/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Retrieve list of catalog name
   */
  get(path: '/order/catalog/formatted'): () => Promise<string[]>;
  /**
   * Missing description
   * Retrieve information of Public Cloud catalog
   */
  get(path: '/order/catalog/formatted/cloud'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of dedicated server catalog
   */
  get(path: '/order/catalog/formatted/dedicated'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of dedicated discover offer server catalog
   */
  get(path: '/order/catalog/formatted/discover'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of IP addresses catalog
   */
  get(path: '/order/catalog/formatted/ip'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of CloudLinux licenses catalog
   */
  get(path: '/order/catalog/formatted/licenseCloudLinux'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of cPanel licenses catalog
   */
  get(path: '/order/catalog/formatted/licensecPanel'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Directadmin licenses offers catalog
   */
  get(path: '/order/catalog/formatted/licenseDirectadmin'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Plesk licenses catalog
   */
  get(path: '/order/catalog/formatted/licensePlesk'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of SqlServer licenses catalog
   */
  get(path: '/order/catalog/formatted/licenseSqlServer'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Virtuozzo licenses catalog
   */
  get(path: '/order/catalog/formatted/licenseVirtuozzo'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Windows licenses catalog
   */
  get(path: '/order/catalog/formatted/licenseWindows'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Worklight licenses catalog
   */
  get(path: '/order/catalog/formatted/licenseWorklight'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of VPS catalog
   */
  get(path: '/order/catalog/formatted/vps'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve bare-metal servers catalog
   */
  get(path: '/order/catalog/public/baremetalServers'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.publik.DedicatedServerCatalog>;
  /**
   * Missing description
   * Retrieve Public Cloud catalog
   */
  get(path: '/order/catalog/public/cloud'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.publik.Catalog>;
  /**
   * Missing description
   * Retrieve Enterprise Cloud Databases catalog
   */
  get(path: '/order/catalog/public/enterpriseCloudDatabases'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.publik.Catalog>;
  /**
   * Missing description
   * Retrieve VPS catalog
   */
  get(path: '/order/catalog/public/vps'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.publik.Catalog>;
  /**
   * Missing description
   * Retrieve Web Hosting catalog
   */
  get(path: '/order/catalog/public/webHosting'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.publik.Catalog>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/order/upgrade/licensePlesk'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/licensePlesk
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/licensePlesk/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/licensePlesk/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/licensePlesk/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the PCC service
   * List available services
   */
  get(path: '/order/upgrade/privateCloud'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/privateCloud
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/privateCloud/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/privateCloud/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/privateCloud/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Missing description
   * Modify information about a specific cart
   */
  put(path: '/order/cart/{cartId}'): (params: {cartId: string, description?: string, expire?: string}) => Promise<order.cart.Cart>;
  /**
   * Missing description
   * Update some values on a cart item
   */
  put(path: '/order/cart/{cartId}/item/{itemId}'): (params: {cartId: string, itemId: number, duration?: string, quantity?: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Create a new OVH order cart
   */
  post(path: '/order/cart'): (params: {description?: string, expire?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.cart.Cart>;
  /**
   * Missing description
   * Assign a shopping cart to an loggedin client
   */
  post(path: '/order/cart/{cartId}/assign'): (params: {cartId: string}) => Promise<void>;
  /**
   * Missing description
   * Validate your shopping and create order
   */
  post(path: '/order/cart/{cartId}/checkout'): (params: {cartId: string, autoPayWithPreferredPaymentMethod?: boolean, waiveRetractationPeriod?: boolean}) => Promise<order.Order>;
  /**
   * Missing description
   * Post a new Public Cloud item in your cart
   */
  post(path: '/order/cart/{cartId}/cloud'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Public Cloud option in your cart
   */
  post(path: '/order/cart/{cartId}/cloud/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Add a new coupon to cart
   */
  post(path: '/order/cart/{cartId}/coupon'): (params: {cartId: string, coupon: string}) => Promise<string[]>;
  /**
   * Missing description
   * Post a new dedicated server item in your cart
   */
  post(path: '/order/cart/{cartId}/dedicated'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated server option in your cart
   */
  post(path: '/order/cart/{cartId}/dedicated/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Dedicated Discover server item in your cart
   */
  post(path: '/order/cart/{cartId}/discover'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Dedicated Discover server option in your cart
   */
  post(path: '/order/cart/{cartId}/discover/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new IP addresses item in your cart
   */
  post(path: '/order/cart/{cartId}/ip'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new IP addresses option in your cart
   */
  post(path: '/order/cart/{cartId}/ip/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new IP Load-Balancing item in your cart
   */
  post(path: '/order/cart/{cartId}/ipLoadbalancing'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new IP Load-Balancing option in your cart
   */
  post(path: '/order/cart/{cartId}/ipLoadbalancing/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Setup configuration item for the product
   */
  post(path: '/order/cart/{cartId}/item/{itemId}/configuration'): (params: {cartId: string, itemId: number, label: string, value: string}) => Promise<order.cart.ConfigurationItem>;
  /**
   * Missing description
   * Post a new CloudLinux license item in your cart
   */
  post(path: '/order/cart/{cartId}/licenseCloudLinux'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new cPanel license item in your cart
   */
  post(path: '/order/cart/{cartId}/licensecPanel'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Directadmin license item in your cart
   */
  post(path: '/order/cart/{cartId}/licenseDirectadmin'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Plesk license item in your cart
   */
  post(path: '/order/cart/{cartId}/licensePlesk'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Plesk license option in your cart
   */
  post(path: '/order/cart/{cartId}/licensePlesk/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SqlServer license item in your cart
   */
  post(path: '/order/cart/{cartId}/licenseSqlServer'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Virtuozzo license item in your cart
   */
  post(path: '/order/cart/{cartId}/licenseVirtuozzo'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Virtuozzo license option in your cart
   */
  post(path: '/order/cart/{cartId}/licenseVirtuozzo/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Windows license item in your cart
   */
  post(path: '/order/cart/{cartId}/licenseWindows'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Worklight license item in your cart
   */
  post(path: '/order/cart/{cartId}/licenseWorklight'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * List of OVHcloud Connect product
   * Post a new OVHcloud Connect item in your cart
   */
  post(path: '/order/cart/{cartId}/ovhCloudConnect'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Comodo item in your cart
   */
  post(path: '/order/cart/{cartId}/sslComodo'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Veeam Enterprise item in your cart
   */
  post(path: '/order/cart/{cartId}/veeamEnterprise'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Veeam Enterprise option in your cart
   */
  post(path: '/order/cart/{cartId}/veeamEnterprise/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new VPS item in your cart
   */
  post(path: '/order/cart/{cartId}/vps'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new VPS option in your cart
   */
  post(path: '/order/cart/{cartId}/vps/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new vRack item in your cart
   */
  post(path: '/order/cart/{cartId}/vrack'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/cloud/#serviceName#
   * Post an additional Cloud option in your cart
   */
  post(path: '/order/cartServiceOption/cloud/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/dedicated/#serviceName#
   * Post an additional dedicated option in your cart
   */
  post(path: '/order/cartServiceOption/dedicated/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#
   * Post an additional IP Load-Balancing option in your cart
   */
  post(path: '/order/cartServiceOption/ipLoadbalancing/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloud/#serviceName#
   * Post an additional Private Cloud option in your cart
   */
  post(path: '/order/cartServiceOption/privateCloud/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName#
   * Post an additional Private Cloud option in your cart
   */
  post(path: '/order/cartServiceOption/privateCloudReseller/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#
   * Post an additional Private Cloud Enterprise option in your cart
   */
  post(path: '/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/upgrade/licensePlesk/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/licensePlesk/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/privateCloud/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/privateCloud/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Missing description
   * Delete a cart
   */
  delete(path: '/order/cart/{cartId}'): (params: {cartId: string}) => Promise<void>;
  /**
   * Missing description
   * Delete a coupon from cart
   */
  delete(path: '/order/cart/{cartId}/coupon'): (params: {cartId: string}) => Promise<void>;
  /**
   * Missing description
   * Delete an item from a cart
   */
  delete(path: '/order/cart/{cartId}/item/{itemId}'): (params: {cartId: string, itemId: number}) => Promise<void>;
  /**
   * Missing description
   * Delete configuration item
   */
  delete(path: '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}'): (params: {cartId: string, configurationId: number, itemId: number}) => Promise<void>;
}

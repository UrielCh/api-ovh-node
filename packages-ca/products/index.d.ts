import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /products Models
 * Source: https://ca.api.ovh.com/1.0/products.json
 */
export namespace nichandle {
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "IN" | "QC" | "SG" | "WE" | "WS"
}
export namespace order {
    /**
     * Application context of a promotion
     * type fullname: order.ContextTypeEnum
     */
    export type ContextTypeEnum = "discover" | "standard" | "welcome"
    /**
     * Currency code
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "INR" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * Type of reduction
     * type fullname: order.ReductionTypeEnum
     */
    export type ReductionTypeEnum = "fixed_amount" | "forced_amount" | "percentage"
    export namespace cart {
        /**
         * Unit corresponding to a duration range
         * type fullname: order.cart.DurationUnitEnum
         */
        export type DurationUnitEnum = "day" | "hour" | "month" | "none"
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
    }
    export namespace catalog {
        export namespace publik {
            /**
             * Enum values for Billing Strategy
             * type fullname: order.catalog.publik.BillingStrategyEnum
             */
            export type BillingStrategyEnum = "custom" | "diff" | "max" | "max_retain" | "ping" | "sum"
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
             * Enum values for Ping End Policy
             * type fullname: order.catalog.publik.PingEndPolicyEnum
             */
            export type PingEndPolicyEnum = "full" | "prorata"
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
}
export namespace products {
    export namespace catalog {
        /**
         * Describes an Addon family for a Commercial offer
         * interface fullName: products.catalog.AddonFamily.AddonFamily
         */
        export interface AddonFamily {
            addons?: string[];
            default?: string;
            exclusive?: boolean;
            mandatory?: boolean;
            name: string;
        }
        /**
         * Describes an Addon family full for a Commercial offer
         * interface fullName: products.catalog.AddonFamilyFull.AddonFamilyFull
         */
        export interface AddonFamilyFull {
            addons?: products.catalog.PlanFull[];
            default?: string;
            exclusive?: boolean;
            mandatory?: boolean;
            name: string;
        }
        /**
         * Describes a Catalog inside a Subsidiary
         * interface fullName: products.catalog.Catalog.Catalog
         */
        export interface Catalog {
            addons: products.catalog.Plan[];
            catalogId: number;
            locale: products.catalog.Locale;
            planFamilies: products.catalog.PlanFamily[];
            plans: products.catalog.Plan[];
            products: products.catalog.Product[];
        }
        /**
         * Allowed catalog names
         * type fullname: products.catalog.CatalogNameEnum
         */
        export type CatalogNameEnum = "Anthos" | "Baremetal" | "BaremetalEco" | "BaremetalEcoPreProd" | "BaremetalPreProd" | "BringYourOwnIP" | "CDN" | "CloudDB" | "CloudDiskArray" | "DNS" | "DbaasLogs" | "Dedicated" | "Domain" | "EmailPro" | "ExchangeEnterprise" | "ExchangePublic" | "Guestbook" | "IPFailover" | "IPLoadBalancing" | "ISPPublic" | "ISPReseller" | "LicenseCPanel" | "LicenseCloudLinux" | "LicenseDirectAdmin" | "LicensePlesk" | "LicenseSQLServer" | "LicenseWindows" | "NasHA" | "NasHAInternal" | "NasHAPreprod" | "NetApp" | "Nutanix" | "NutanixPreProd" | "NutanixStaging" | "OVHCloudConnect" | "OfficePrepaid" | "PackProfessionalServices" | "PrivateCloud" | "PrivateCloudPreProd" | "PrivateSQL" | "PublicCloud" | "PublicCloudTrustedEU" | "SSLGateway" | "Support" | "Telephony" | "VPS" | "Veeam" | "WebHosting" | "WebPaas"
        /**
         * Describes the Configuration for a Commercial offer
         * interface fullName: products.catalog.Configuration.Configuration
         */
        export interface Configuration {
            defaultValue?: string;
            isCustom: boolean;
            isMandatory: boolean;
            name: string;
            values?: string[];
        }
        /**
         * Describes specifics for a given Subsidiary
         * interface fullName: products.catalog.Locale.Locale
         */
        export interface Locale {
            currencyCode: order.CurrencyCodeEnum;
            subsidiary: nichandle.OvhSubsidiaryEnum;
            taxRate: number;
        }
        /**
         * Describes a Commercial offer inside a Catalog
         * interface fullName: products.catalog.Plan.Plan
         */
        export interface Plan {
            addonFamilies?: products.catalog.AddonFamily[];
            blobs?: products.catalog.ProductBlob;
            configurations?: products.catalog.Configuration[];
            consumptionConfiguration?: order.catalog.publik.ConsumptionConfiguration;
            family?: string;
            invoiceName?: string;
            planCode: string;
            pricingType?: string;
            pricings?: products.catalog.Pricing[];
            product?: string;
        }
        /**
         * Describes a PlanFamily for a Catalog
         * interface fullName: products.catalog.PlanFamily.PlanFamily
         */
        export interface PlanFamily {
            name: string;
        }
        /**
         * Describes a Commercial offer full inside a Catalog
         * interface fullName: products.catalog.PlanFull.PlanFull
         */
        export interface PlanFull {
            addonFamilies: products.catalog.AddonFamilyFull[];
            blobs?: order.catalog.publik.ProductBlob;
            configurations: order.catalog.publik.Configuration[];
            consumptionConfiguration?: order.catalog.publik.ConsumptionConfiguration;
            family?: string;
            invoiceName: string;
            planCode: string;
            pricingType: order.cart.GenericProductPricingTypeEnum;
            pricings: order.catalog.publik.Pricing[];
            product: order.catalog.publik.Product;
        }
        /**
         * Describes a Pricing for a Commercial offer
         * interface fullName: products.catalog.Pricing.Pricing
         */
        export interface Pricing {
            capacities?: string[];
            commitment?: number;
            description?: string;
            engagementConfiguration?: order.catalog.publik.EngagementConfiguration;
            formattedPrice?: string;
            interval?: number;
            intervalUnit?: string;
            mode?: string;
            mustBeCompleted?: boolean;
            phase?: number;
            price?: number;
            promotions?: products.catalog.Promotion[];
            quantity?: products.catalog.PricingMinMax;
            repeat?: products.catalog.PricingMinMax;
            strategy?: string;
            tax?: number;
            type?: string;
        }
        /**
         * Describes minimal and maximal values for a Pricing
         * interface fullName: products.catalog.PricingMinMax.PricingMinMax
         */
        export interface PricingMinMax {
            max?: number;
            min?: number;
        }
        /**
         * Describes a Product attached to a Commercial offer
         * interface fullName: products.catalog.Product.Product
         */
        export interface Product {
            blobs?: products.catalog.ProductBlob;
            configurations?: products.catalog.Configuration[];
            description: string;
            name: string;
        }
        /**
         * Describes a Blob
         * interface fullName: products.catalog.ProductBlob.ProductBlob
         */
        export interface ProductBlob {
            commercial?: products.catalog.ProductBlobCommercial;
            marketing?: products.catalog.ProductBlobMarketing;
            meta?: products.catalog.ProductBlobMeta;
            tags?: string[];
            technical?: products.catalog.ProductBlobTechnical;
            value?: string;
        }
        /**
         * Describes a Commercial blob
         * interface fullName: products.catalog.ProductBlobCommercial.ProductBlobCommercial
         */
        export interface ProductBlobCommercial {
            additionalDescription?: string;
            brick?: string;
            brickSubtype?: string;
            connection?: products.catalog.ProductBlobConnection;
            displayedVcpu?: number[];
            features?: products.catalog.ProductBlobCommercialFeatures[];
            line?: string;
            name?: string;
            packs?: products.catalog.ProductBlobCommercialPacks;
            price?: products.catalog.ProductBlobCommercialPrice;
            range?: string;
            references?: products.catalog.ProductBlobCommercialReferences[];
            sla?: number;
        }
        /**
         * Describes Features for a commercial blob
         * interface fullName: products.catalog.ProductBlobCommercialFeatures.ProductBlobCommercialFeatures
         */
        export interface ProductBlobCommercialFeatures {
            name?: string;
            value?: string;
        }
        /**
         * Describes Packs for a commercial blob
         * interface fullName: products.catalog.ProductBlobCommercialPacks.ProductBlobCommercialPacks
         */
        export interface ProductBlobCommercialPacks {
            brick?: string;
            brickSubtype?: string;
            items?: products.catalog.ProductBlobCommercialPacksItem[];
            line?: string;
            name?: string;
            range?: string;
        }
        /**
         * Describes Item for a commercial blob pack
         * interface fullName: products.catalog.ProductBlobCommercialPacksItem.ProductBlobCommercialPacksItem
         */
        export interface ProductBlobCommercialPacksItem {
            planCode?: string;
            quantity?: number;
        }
        /**
         * Describes a Price for a commercial blob
         * interface fullName: products.catalog.ProductBlobCommercialPrice.ProductBlobCommercialPrice
         */
        export interface ProductBlobCommercialPrice {
            description?: string;
            display?: products.catalog.ProductBlobCommercialPriceDisplay;
            interval?: string;
            precision?: number;
            unit?: string;
        }
        /**
         * Describes a Display of a price
         * interface fullName: products.catalog.ProductBlobCommercialPriceDisplay.ProductBlobCommercialPriceDisplay
         */
        export interface ProductBlobCommercialPriceDisplay {
            unit?: string;
            value: string;
        }
        /**
         * Describes References for a commercial blob
         * interface fullName: products.catalog.ProductBlobCommercialReferences.ProductBlobCommercialReferences
         */
        export interface ProductBlobCommercialReferences {
            datacenter?: string;
            planCode?: string;
        }
        /**
         * Describes a Connection for a blob for a Dedicated Server
         * interface fullName: products.catalog.ProductBlobConnection.ProductBlobConnection
         */
        export interface ProductBlobConnection {
            clients?: order.catalog.publik.ProductBlobConnectionClients;
            total?: number;
            unit?: string;
        }
        /**
         * Describes a Marketing blob
         * interface fullName: products.catalog.ProductBlobMarketing.ProductBlobMarketing
         */
        export interface ProductBlobMarketing {
            content: products.catalog.ProductBlobMarketingContent[];
        }
        /**
         * Describes a Content for a Marketing blob
         * interface fullName: products.catalog.ProductBlobMarketingContent.ProductBlobMarketingContent
         */
        export interface ProductBlobMarketingContent {
            key: string;
            value: string;
        }
        /**
         * Describes a Meta blob
         * interface fullName: products.catalog.ProductBlobMeta.ProductBlobMeta
         */
        export interface ProductBlobMeta {
            configurations: products.catalog.ProductBlobMetaConfigurations[];
        }
        /**
         * Describes a Configuration for a meta blob
         * interface fullName: products.catalog.ProductBlobMetaConfigurations.ProductBlobMetaConfigurations
         */
        export interface ProductBlobMetaConfigurations {
            name: string;
            values: products.catalog.ProductBlobMetaConfigurationsValues[];
        }
        /**
         * Describes a Values configuration for a meta blob
         * interface fullName: products.catalog.ProductBlobMetaConfigurationsValues.ProductBlobMetaConfigurationsValues
         */
        export interface ProductBlobMetaConfigurationsValues {
            blobs: products.catalog.ProductBlob;
            value: string;
        }
        /**
         * Describes a Technical Blob
         * interface fullName: products.catalog.ProductBlobTechnical.ProductBlobTechnical
         */
        export interface ProductBlobTechnical {
            bandwidth?: products.catalog.ProductBlobTechnicalNetwork;
            cluster?: products.catalog.ProductBlobTechnicalCluster;
            connection?: products.catalog.ProductBlobConnection;
            connectionPerSeconds?: products.catalog.ProductBlobConnection;
            cpu?: products.catalog.ProductBlobTechnicalCPU;
            datacenter?: products.catalog.ProductBlobTechnicalDatacenter;
            ephemeralLocalStorage?: products.catalog.ProductBlobTechnicalStorage;
            extensionCard?: products.catalog.ProductBlobTechnicalExtensionCard;
            farm?: products.catalog.ProductBlobTechnicalFarm;
            frame?: products.catalog.ProductBlobTechnicalFrame;
            gpu?: products.catalog.ProductBlobTechnicalGPU;
            license?: products.catalog.ProductBlobTechnicalOS;
            managedNetappCluster?: products.catalog.ProductBlobTechnicalStorage;
            memory?: products.catalog.ProductBlobTechnicalMemory;
            metric?: products.catalog.ProductBlobTechnicalMetric;
            name?: string;
            network?: products.catalog.ProductBlobTechnicalNetwork[];
            nodes?: products.catalog.ProductBlobTechnicalVirtualization;
            nvme?: products.catalog.ProductBlobTechnicalStorage;
            os?: products.catalog.ProductBlobTechnicalOS;
            provider?: products.catalog.ProductBlobTechnicalProvider;
            requestPerSeconds?: products.catalog.ProductBlobConnection;
            server?: products.catalog.ProductBlobTechnicalServer;
            service?: products.catalog.ProductBlobTechnicalServices;
            storage?: products.catalog.ProductBlobTechnicalStorage;
            tags?: string[];
            throughput?: products.catalog.ProductBlobTechnicalNetwork;
            virtualization?: products.catalog.ProductBlobTechnicalVirtualization;
            volume?: products.catalog.ProductBlobTechnicalVolume;
            vrack?: products.catalog.ProductBlobTechnicalNetwork;
        }
        /**
         * Describes an aggregation for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalAggregation.ProductBlobTechnicalAggregation
         */
        export interface ProductBlobTechnicalAggregation {
            upTo?: number;
        }
        /**
         * Describes a CPU for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalCPU.ProductBlobTechnicalCPU
         */
        export interface ProductBlobTechnicalCPU {
            boost?: number;
            brand?: string;
            cache?: number;
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
         * Describes a Cluster for a technical Blob
         * interface fullName: products.catalog.ProductBlobTechnicalCluster.ProductBlobTechnicalCluster
         */
        export interface ProductBlobTechnicalCluster {
            range?: string;
            server?: string;
        }
        /**
         * Describes a Datacenter for a technical Blob
         * interface fullName: products.catalog.ProductBlobTechnicalDatacenter.ProductBlobTechnicalDatacenter
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
         * interface fullName: products.catalog.ProductBlobTechnicalDisk.ProductBlobTechnicalDisk
         */
        export interface ProductBlobTechnicalDisk {
            capacity?: number;
            dwpd?: number;
            interface?: string;
            iops?: number;
            maximumCapacity?: number;
            number?: number;
            sizeUnit?: string;
            specs?: string;
            technology?: string;
            usage?: string;
        }
        /**
         * Describes an extension card for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalExtensionCard.ProductBlobTechnicalExtensionCard
         */
        export interface ProductBlobTechnicalExtensionCard {
            model?: string;
            size?: string;
        }
        /**
         * Describes a Farm for technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalFarm.ProductBlobTechnicalFarm
         */
        export interface ProductBlobTechnicalFarm {
            number?: number;
        }
        /**
         * Describes a Frame for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalFrame.ProductBlobTechnicalFrame
         */
        export interface ProductBlobTechnicalFrame {
            customizable?: boolean;
            dualPowerSupply: boolean;
            maxNbDisks?: number;
            model?: string;
            size?: string;
            slots?: number;
        }
        /**
         * Describes a GPU for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalGPU.ProductBlobTechnicalGPU
         */
        export interface ProductBlobTechnicalGPU {
            brand?: string;
            memory?: products.catalog.ProductBlobTechnicalMemory;
            model?: string;
            number?: number;
            performance?: number;
        }
        /**
         * Describes an interface for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalInterfaces.ProductBlobTechnicalInterfaces
         */
        export interface ProductBlobTechnicalInterfaces {
            interfaces?: products.catalog.ProductBlobTechnicalItemMinMax;
            level?: number;
        }
        /**
         * Describes minimal and maximal values of an item
         * interface fullName: products.catalog.ProductBlobTechnicalItemMinMax.ProductBlobTechnicalItemMinMax
         */
        export interface ProductBlobTechnicalItemMinMax {
            max?: number;
            min: number;
        }
        /**
         * Describes license cores for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalLicenseCores.ProductBlobTechnicalLicenseCores
         */
        export interface ProductBlobTechnicalLicenseCores {
            min?: number;
            number?: number;
            total?: number;
        }
        /**
         * Describes a Memory technical Blob
         * interface fullName: products.catalog.ProductBlobTechnicalMemory.ProductBlobTechnicalMemory
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
         * Describes a Metric for a technical Blob
         * interface fullName: products.catalog.ProductBlobTechnicalMetric.ProductBlobTechnicalMetric
         */
        export interface ProductBlobTechnicalMetric {
            retentionPeriod?: number;
        }
        /**
         * Describes a Network technical Blob
         * interface fullName: products.catalog.ProductBlobTechnicalNetwork.ProductBlobTechnicalNetwork
         */
        export interface ProductBlobTechnicalNetwork {
            aggregation?: products.catalog.ProductBlobTechnicalAggregation;
            assured?: products.catalog.ProductBlobTechnicalInterfaces;
            burst?: number;
            capacity?: number;
            guaranteed?: boolean;
            interfaces?: number;
            isMax?: boolean;
            level?: number;
            limit?: number;
            max?: number;
            maxUnit?: string;
            number?: number;
            shared?: boolean;
            traffic?: number;
            unit?: string;
            unlimited?: boolean;
        }
        /**
         * Describes an OS for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalOS.ProductBlobTechnicalOS
         */
        export interface ProductBlobTechnicalOS {
            application?: string;
            cores?: products.catalog.ProductBlobTechnicalLicenseCores;
            cpu?: products.catalog.ProductBlobTechnicalCPU;
            distribution?: string;
            edition?: string;
            family?: string;
            feature?: string;
            features?: products.catalog.ProductBlobCommercialFeatures[];
            flavor?: string;
            images?: string[];
            nbOfAccount?: number;
            package?: string;
            rack?: products.catalog.ProductBlobTechnicalRack;
            version?: string;
        }
        /**
         * Describes a provider for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalProvider.ProductBlobTechnicalProvider
         */
        export interface ProductBlobTechnicalProvider {
            pointsOfPresence?: number;
            reference?: boolean;
        }
        /**
         * Describes a Rack technical Blob
         * interface fullName: products.catalog.ProductBlobTechnicalRack.ProductBlobTechnicalRack
         */
        export interface ProductBlobTechnicalRack {
            size: number;
        }
        /**
         * Describes a Raid for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalRaid.ProductBlobTechnicalRaid
         */
        export interface ProductBlobTechnicalRaid {
            cardModel?: string;
            cardSize?: string;
            level?: number;
            type?: string;
        }
        /**
         * Describes some technicals information for a technical blob
         * interface fullName: products.catalog.ProductBlobTechnicalServer.ProductBlobTechnicalServer
         */
        export interface ProductBlobTechnicalServer {
            cpu?: products.catalog.ProductBlobTechnicalCPU;
            extensionCard?: products.catalog.ProductBlobTechnicalExtensionCard;
            frame?: products.catalog.ProductBlobTechnicalFrame;
            range?: string;
            services?: products.catalog.ProductBlobTechnicalServices;
        }
        /**
         * Describes some technicals information
         * interface fullName: products.catalog.ProductBlobTechnicalServices.ProductBlobTechnicalServices
         */
        export interface ProductBlobTechnicalServices {
            antiddos?: string;
            includedBackup?: number;
            sla?: number;
        }
        /**
         * Describes a Storage technical Blob
         * interface fullName: products.catalog.ProductBlobTechnicalStorage.ProductBlobTechnicalStorage
         */
        export interface ProductBlobTechnicalStorage {
            disks?: products.catalog.ProductBlobTechnicalDisk[];
            hotSwap?: boolean;
            local?: boolean;
            raid?: string;
            raidDetails?: products.catalog.ProductBlobTechnicalRaid;
            replication?: number;
        }
        /**
         * Describes a Virtualization for a Technical Blob
         * interface fullName: products.catalog.ProductBlobTechnicalVirtualization.ProductBlobTechnicalVirtualization
         */
        export interface ProductBlobTechnicalVirtualization {
            hypervisor?: string;
            number?: number;
            replication?: number;
        }
        /**
         * Describes a Volume for a technichal blob
         * interface fullName: products.catalog.ProductBlobTechnicalVolume.ProductBlobTechnicalVolume
         */
        export interface ProductBlobTechnicalVolume {
            capacity?: products.catalog.ProductBlobTechnicalVolumeCapacity;
            iops?: products.catalog.ProductBlobTechnicalVolumeIops;
        }
        /**
         * Describes a Capacity for a Volume for a technichal blob
         * interface fullName: products.catalog.ProductBlobTechnicalVolumeCapacity.ProductBlobTechnicalVolumeCapacity
         */
        export interface ProductBlobTechnicalVolumeCapacity {
            max?: number;
        }
        /**
         * Describes a Iops for a Volume for a technichal blob
         * interface fullName: products.catalog.ProductBlobTechnicalVolumeIops.ProductBlobTechnicalVolumeIops
         */
        export interface ProductBlobTechnicalVolumeIops {
            guaranteed?: boolean;
            level?: number;
            max?: number;
            maxUnit?: string;
            unit?: string;
        }
        /**
         * Describes a Promotion inside a Catalog
         * interface fullName: products.catalog.Promotion.Promotion
         */
        export interface Promotion {
            context?: order.ContextTypeEnum;
            description?: string;
            discount?: products.catalog.PromotionDiscountTotal;
            duration?: number;
            endDate?: string;
            formattedValue?: string;
            globalQuantity?: number;
            isGlobalQuantityLimited?: boolean;
            minimumDuration?: number;
            name?: string;
            quantity?: number;
            startDate?: string;
            total?: products.catalog.PromotionDiscountTotal;
            type?: order.ReductionTypeEnum;
            value?: number;
        }
        /**
         * Describes a Promotion discount or total inside a Catalog
         * interface fullName: products.catalog.PromotionDiscountTotal.PromotionDiscountTotal
         */
        export interface PromotionDiscountTotal {
            formattedValue?: string;
            tax: number;
            value: number;
        }
    }
    export namespace partners {
        /**
         * Allowed ovh subsidiary for partners
         * type fullname: products.partners.OvhSubsidiaryEnum
         */
        export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "FI" | "FR" | "GB" | "IE" | "IN" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
    }
}
/**
 * Api model for /products
 */
export interface Products {
    catalog: {
        /**
         * Get unified catalog
         * GET /products/catalog
         */
        $get(): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        $(catalogId: number): {
            /**
             * Get unified catalog
             * GET /products/catalog/{catalogId}
             */
            $get(params: { catalogName: products.catalog.CatalogNameEnum, subsidiary: products.partners.OvhSubsidiaryEnum }): Promise<products.catalog.Catalog>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            addons: {
                /**
                 * Get a list of addons from a specific unified catalog
                 * GET /products/catalog/{catalogId}/addons
                 */
                $get(params: { activePromotion?: boolean, blobs?: string, catalogName: products.catalog.CatalogNameEnum, codePlan?: string[], family?: string[], invoiceName?: string[], subsidiary: products.partners.OvhSubsidiaryEnum }): Promise<products.catalog.Plan[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            fullPlans: {
                /**
                 * Get a list of full plans from a specific unified catalog
                 * GET /products/catalog/{catalogId}/fullPlans
                 */
                $get(params: { activePromotion?: boolean, blobs?: string, catalogName: products.catalog.CatalogNameEnum, codePlan?: string[], family?: string[], invoiceName?: string[], subsidiary: products.partners.OvhSubsidiaryEnum }): Promise<products.catalog.PlanFull[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            plans: {
                /**
                 * Get a list of plans from a specific unified catalog
                 * GET /products/catalog/{catalogId}/plans
                 */
                $get(params: { activePromotion?: boolean, blobs?: string, catalogName: products.catalog.CatalogNameEnum, family?: string[], invoiceName?: string[], planCode?: string[], subsidiary: products.partners.OvhSubsidiaryEnum }): Promise<products.catalog.Plan[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            products: {
                /**
                 * Get a list of products from a specific unified catalog
                 * GET /products/catalog/{catalogId}/products
                 */
                $get(params: { blobs?: string, catalogName: products.catalog.CatalogNameEnum, codeProduct?: string[], subsidiary: products.partners.OvhSubsidiaryEnum }): Promise<products.catalog.Product[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
        };
    }
}

export declare function proxyProducts(ovhEngine: OvhRequestable): Products;
export default proxyProducts;

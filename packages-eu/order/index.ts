import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /order Models
 * Source: https://eu.api.ovh.com/1.0/order.json
 */
export namespace cdnanycast {
    /**
     * Available number for cacheRule upgrade
     * type fullname: cdnanycast.OrderCacheRuleEnum
     */
    export type OrderCacheRuleEnum = 100 | 1000
    /**
     * Available number for quota order
     * type fullname: cdnanycast.OrderQuotaEnum
     */
    export type OrderQuotaEnum = 1 | 10 | 100 | 1000
}
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
export namespace dedicated {
    export namespace housing {
        /**
         * Housing bay High Availablility offers
         * type fullname: dedicated.housing.HaRoutingOfferEnum
         */
        export type HaRoutingOfferEnum = "ha2x2" | "ha2x4"
    }
    export namespace server {
        /**
         * Different backup storage capacity in gigabytes
         * type fullname: dedicated.server.BackupStorageCapacityEnum
         */
        export type BackupStorageCapacityEnum = 500 | 1000 | 5000 | 10000
        /**
         *  Different Bandwidth orderable in Mbps
         * type fullname: dedicated.server.BandwidthOrderEnum
         */
        export type BandwidthOrderEnum = 1000 | 2000 | 3000
        /**
         *  Different Bandwidth type orderable
         * type fullname: dedicated.server.BandwidthOrderTypeEnum
         */
        export type BandwidthOrderTypeEnum = "platinum" | "premium" | "ultimate"
        /**
         *  Different vRack Bandwidth orderable in Mbps
         * type fullname: dedicated.server.BandwidthvRackOrderEnum
         */
        export type BandwidthvRackOrderEnum = 1000 | 3000
        /**
         * Firewall model name
         * type fullname: dedicated.server.FirewallModelEnum
         */
        export type FirewallModelEnum = "asa5505" | "asa5510" | "asa5520"
        /**
         * IP block size
         * type fullname: dedicated.server.IpBlockSizeEnum
         */
        export type IpBlockSizeEnum = 1 | 4 | 8 | 16 | 32 | 64 | 128 | 256
        /**
         * Available localization for this static IP
         * type fullname: dedicated.server.IpCountryEnum
         */
        export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "in" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
        /**
         * Available localization for this static IP
         * type fullname: dedicated.server.IpStaticCountryEnum
         */
        export type IpStaticCountryEnum = "be" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "uk"
        /**
         * Orderable IP type
         * type fullname: dedicated.server.IpTypeOrderableEnum
         */
        export type IpTypeOrderableEnum = "failover" | "static" | "unshielded"
        /**
         * Dedicated server orderable features
         * type fullname: dedicated.server.OrderableSysFeatureEnum
         */
        export type OrderableSysFeatureEnum = "backupProtocol" | "monitoring"
        /**
         * distincts support level
         * type fullname: dedicated.server.SupportLevelOrderableEnum
         */
        export type SupportLevelOrderableEnum = "critical" | "fastpath" | "gs"
        /**
         *  traffic orderable 
         * type fullname: dedicated.server.TrafficOrderEnum
         */
        export type TrafficOrderEnum = "100Mbps-Unlimited" | "250Mbps-Unlimited" | "500Mbps-Unlimited"
        /**
         *  Different USB key capacity in gigabytes
         * type fullname: dedicated.server.UsbKeyCapacityEnum
         */
        export type UsbKeyCapacityEnum = 16 | 32 | 64 | 128 | 256
    }
}
export namespace dedicatedCloud {
    /**
     * All available additional bandwidth amounts in Mbps
     * type fullname: dedicatedCloud.AdditionalBandwidthEnum
     */
    export type AdditionalBandwidthEnum = "1500"
    /**
     * All countries in which an Ip Block may be ordered
     * type fullname: dedicatedCloud.IpCountriesEnum
     */
    export type IpCountriesEnum = "be" | "ca" | "ch" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "us"
    /**
     * All orderable IP Block ranges in your Dedicated Cloud
     * type fullname: dedicatedCloud.OrderableIpBlockRangeEnum
     */
    export type OrderableIpBlockRangeEnum = "24" | "25" | "26" | "27" | "28"
    export namespace ressources {
        /**
         * The Dedicated Cloud ressource types that can be upgraded
         * type fullname: dedicatedCloud.ressources.UpgradeRessourceTypeEnum
         */
        export type UpgradeRessourceTypeEnum = "account" | "all" | "filer" | "host"
        /**
         * The available billing type upgrade for Dedicated Cloud ressource
         * type fullname: dedicatedCloud.ressources.UpgradeTypeEnum
         */
        export type UpgradeTypeEnum = "demoToMonthly" | "freeSpareToHourly" | "hourlyToMonthly"
    }
}
export namespace email {
    export namespace domain {
        /**
         * Mx plan offers
         * type fullname: email.domain.OfferEnum
         */
        export type OfferEnum = "100" | "25" | "5" | "FULL"
    }
    export namespace exchange {
        /**
         * Outlook version
         * type fullname: email.exchange.OutlookVersionEnum
         */
        export type OutlookVersionEnum = "mac_x86_2016" | "mac_x86_2019" | "mac_x86_2021" | "windows_x64_2016" | "windows_x64_2019" | "windows_x64_2021" | "windows_x86_2016" | "windows_x86_2019" | "windows_x86_2021"
        /**
         * OVH licence account
         * type fullname: email.exchange.OvhLicenceEnum
         */
        export type OvhLicenceEnum = "basic" | "enterprise" | "standard"
        /**
         * Storage quota options in GB
         * type fullname: email.exchange.accountQuotaEnum
         */
        export type accountQuotaEnum = 50 | 300
    }
}
export namespace freefax {
    /**
     * Available quantity of fax to purchase
     * type fullname: freefax.QuantityEnum
     */
    export type QuantityEnum = 10 | 50 | 100 | 200 | 500 | 1000 | 2000 | 5000 | 10000 | 100000
}
export namespace hosting {
    export namespace web {
        /**
         * Struct which describs an offer
         * interface fullName: hosting.web.Capabilities.Capabilities
         */
        export interface Capabilities {
            attachedDomains: number;
            crontab: boolean;
            databaseEngines: number;
            databases: hosting.web.database.CreationDatabaseCapabilities[];
            disk?: hosting.web.DiskType;
            emails: hosting.web.CreationEmailCapabilities;
            envVars: number;
            extraUsers: number;
            filesBrowser: boolean;
            highlight?: hosting.web.HighLightEnum;
            languages: hosting.web.CronLanguageAvailable;
            moduleOneClick: boolean;
            privateDatabases: hosting.web.database.CreationDatabaseCapabilities[];
            runtimes: number;
            sitesRecommended?: number;
            ssh: boolean;
            traffic?: complexType.UnitAndValue<number>;
        }
        /**
         * Struct which describes mail offer available and his quota
         * interface fullName: hosting.web.CreationEmailCapabilities.CreationEmailCapabilities
         */
        export interface CreationEmailCapabilities {
            available: number;
            quota: complexType.UnitAndValue<number>;
        }
        /**
         * Language available for cron script
         * interface fullName: hosting.web.CronLanguageAvailable.CronLanguageAvailable
         */
        export interface CronLanguageAvailable {
            nodejs: hosting.web.NodejsVersionAvailableEnum[];
            php: hosting.web.PhpVersionAvailableEnum[];
            python: hosting.web.PythonVersionAvailableEnum[];
            ruby: hosting.web.RubyVersionAvailableEnum[];
        }
        /**
         * Disk properties (size and type of disk)
         * interface fullName: hosting.web.DiskType.DiskType
         */
        export interface DiskType {
            type: hosting.web.DiskTypeEnum;
            unit: string;
            value: number;
        }
        /**
         * Disk type available
         * type fullname: hosting.web.DiskTypeEnum
         */
        export type DiskTypeEnum = "HDD" | "SSD"
        /**
         * Highlight tips for offer
         * type fullname: hosting.web.HighLightEnum
         */
        export type HighLightEnum = "best-seller" | "new"
        /**
         * Different NodeJs versions available
         * type fullname: hosting.web.NodejsVersionAvailableEnum
         */
        export type NodejsVersionAvailableEnum = "nodejs-10" | "nodejs-11" | "nodejs-12" | "nodejs-8" | "nodejs-9"
        /**
         * Hosting's offer
         * type fullname: hosting.web.OfferEnum
         */
        export type OfferEnum = "CLOUDWEB_1" | "CLOUDWEB_2" | "CLOUDWEB_3" | "KS" | "PERFORMANCE_1" | "PERFORMANCE_2" | "PERFORMANCE_3" | "PERFORMANCE_4" | "PERSO" | "POWER_BETA_1" | "PRO" | "START" | "hosting-free-100m" | "hosting-performance-1" | "hosting-performance-2" | "hosting-performance-3" | "hosting-performance-4" | "hosting-perso" | "hosting-pro" | "hosting-starter" | "hosting-starter-ovh"
        /**
         * Different PHP versions available
         * type fullname: hosting.web.PhpVersionAvailableEnum
         */
        export type PhpVersionAvailableEnum = "phpfpm-5.6" | "phpfpm-7.0" | "phpfpm-7.1" | "phpfpm-7.2" | "phpfpm-7.3" | "phpfpm-7.4" | "phpfpm-8.0" | "phpfpm-8.1" | "phpfpm-8.2" | "phpfpm-8.3"
        /**
         * Different Python versions available
         * type fullname: hosting.web.PythonVersionAvailableEnum
         */
        export type PythonVersionAvailableEnum = "python-2" | "python-3"
        /**
         * Different Ruby versions available
         * type fullname: hosting.web.RubyVersionAvailableEnum
         */
        export type RubyVersionAvailableEnum = "ruby-2.6"
        export namespace database {
            /**
             * Struct which describs quota and available for a specific type of database
             * interface fullName: hosting.web.database.CreationDatabaseCapabilities.CreationDatabaseCapabilities
             */
            export interface CreationDatabaseCapabilities {
                available: number;
                engines: hosting.web.database.DatabaseTypeEnum[];
                isolation: hosting.web.database.DatabaseIsolationEnum;
                quota: complexType.UnitAndValue<number>;
                type: hosting.web.database.DatabaseCapabilitiesTypeEnum;
            }
            /**
             * Database capabitities type enum
             * type fullname: hosting.web.database.DatabaseCapabilitiesTypeEnum
             */
            export type DatabaseCapabilitiesTypeEnum = "extraSqlPerso" | "local" | "privateDatabase" | "sqlLocal" | "sqlPerso" | "sqlPro"
            /**
             * Database Isolation enum
             * type fullname: hosting.web.database.DatabaseIsolationEnum
             */
            export type DatabaseIsolationEnum = "dedicated" | "local" | "shared"
            /**
             * Database Type enum
             * type fullname: hosting.web.database.DatabaseTypeEnum
             */
            export type DatabaseTypeEnum = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis"
        }
    }
}
export namespace license {
    /**
     * All versions for CloudLinux product
     * type fullname: license.CloudLinuxVersionEnum
     */
    export type CloudLinuxVersionEnum = "SINGLE" | "WITH_CPANEL" | "WITH_PLESK12" | "cloudlinux-license"
    /**
     * Possible values for license type
     * type fullname: license.LicenseTypeEnum
     */
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    /**
     * All antispam available for Plesk products
     * type fullname: license.OrderableAntispamEnum
     */
    export type OrderableAntispamEnum = "SPAM_ASSASSIN"
    /**
     * All antivirus available for Plesk products
     * type fullname: license.OrderableAntivirusEnum
     */
    export type OrderableAntivirusEnum = "DR_WEB" | "KASPERSKY_UNLIMITED_MAILBOXES" | "kaspersky"
    /**
     * All versions available for Cpanel products
     * type fullname: license.OrderableCpanelVersionEnum
     */
    export type OrderableCpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-admin-cloud" | "cpanel-license-plus-cloud" | "cpanel-license-premier-cloud-100-accounts" | "cpanel-license-premier-cloud-1000-accounts" | "cpanel-license-premier-cloud-10000-accounts" | "cpanel-license-premier-cloud-1100-accounts" | "cpanel-license-premier-cloud-1200-accounts" | "cpanel-license-premier-cloud-1300-accounts" | "cpanel-license-premier-cloud-1400-accounts" | "cpanel-license-premier-cloud-150-accounts" | "cpanel-license-premier-cloud-1500-accounts" | "cpanel-license-premier-cloud-1600-accounts" | "cpanel-license-premier-cloud-1700-accounts" | "cpanel-license-premier-cloud-1800-accounts" | "cpanel-license-premier-cloud-1900-accounts" | "cpanel-license-premier-cloud-200-accounts" | "cpanel-license-premier-cloud-2000-accounts" | "cpanel-license-premier-cloud-2100-accounts" | "cpanel-license-premier-cloud-2200-accounts" | "cpanel-license-premier-cloud-2300-accounts" | "cpanel-license-premier-cloud-2400-accounts" | "cpanel-license-premier-cloud-250-accounts" | "cpanel-license-premier-cloud-2500-accounts" | "cpanel-license-premier-cloud-2600-accounts" | "cpanel-license-premier-cloud-2700-accounts" | "cpanel-license-premier-cloud-2800-accounts" | "cpanel-license-premier-cloud-2900-accounts" | "cpanel-license-premier-cloud-300-accounts" | "cpanel-license-premier-cloud-3000-accounts" | "cpanel-license-premier-cloud-3100-accounts" | "cpanel-license-premier-cloud-3200-accounts" | "cpanel-license-premier-cloud-3300-accounts" | "cpanel-license-premier-cloud-3400-accounts" | "cpanel-license-premier-cloud-3500-accounts" | "cpanel-license-premier-cloud-3600-accounts" | "cpanel-license-premier-cloud-3700-accounts" | "cpanel-license-premier-cloud-3800-accounts" | "cpanel-license-premier-cloud-3900-accounts" | "cpanel-license-premier-cloud-400-accounts" | "cpanel-license-premier-cloud-4000-accounts" | "cpanel-license-premier-cloud-4100-accounts" | "cpanel-license-premier-cloud-4200-accounts" | "cpanel-license-premier-cloud-4300-accounts" | "cpanel-license-premier-cloud-4400-accounts" | "cpanel-license-premier-cloud-4500-accounts" | "cpanel-license-premier-cloud-4600-accounts" | "cpanel-license-premier-cloud-4700-accounts" | "cpanel-license-premier-cloud-4800-accounts" | "cpanel-license-premier-cloud-4900-accounts" | "cpanel-license-premier-cloud-500-accounts" | "cpanel-license-premier-cloud-5000-accounts" | "cpanel-license-premier-cloud-5100-accounts" | "cpanel-license-premier-cloud-5200-accounts" | "cpanel-license-premier-cloud-5300-accounts" | "cpanel-license-premier-cloud-5400-accounts" | "cpanel-license-premier-cloud-5500-accounts" | "cpanel-license-premier-cloud-5600-accounts" | "cpanel-license-premier-cloud-5700-accounts" | "cpanel-license-premier-cloud-5800-accounts" | "cpanel-license-premier-cloud-5900-accounts" | "cpanel-license-premier-cloud-600-accounts" | "cpanel-license-premier-cloud-6000-accounts" | "cpanel-license-premier-cloud-6100-accounts" | "cpanel-license-premier-cloud-6200-accounts" | "cpanel-license-premier-cloud-6300-accounts" | "cpanel-license-premier-cloud-6400-accounts" | "cpanel-license-premier-cloud-6500-accounts" | "cpanel-license-premier-cloud-6600-accounts" | "cpanel-license-premier-cloud-6700-accounts" | "cpanel-license-premier-cloud-6800-accounts" | "cpanel-license-premier-cloud-6900-accounts" | "cpanel-license-premier-cloud-700-accounts" | "cpanel-license-premier-cloud-7000-accounts" | "cpanel-license-premier-cloud-7100-accounts" | "cpanel-license-premier-cloud-7200-accounts" | "cpanel-license-premier-cloud-7300-accounts" | "cpanel-license-premier-cloud-7400-accounts" | "cpanel-license-premier-cloud-7500-accounts" | "cpanel-license-premier-cloud-7600-accounts" | "cpanel-license-premier-cloud-7700-accounts" | "cpanel-license-premier-cloud-7800-accounts" | "cpanel-license-premier-cloud-7900-accounts" | "cpanel-license-premier-cloud-800-accounts" | "cpanel-license-premier-cloud-8000-accounts" | "cpanel-license-premier-cloud-8100-accounts" | "cpanel-license-premier-cloud-8200-accounts" | "cpanel-license-premier-cloud-8300-accounts" | "cpanel-license-premier-cloud-8400-accounts" | "cpanel-license-premier-cloud-8500-accounts" | "cpanel-license-premier-cloud-8600-accounts" | "cpanel-license-premier-cloud-8700-accounts" | "cpanel-license-premier-cloud-8800-accounts" | "cpanel-license-premier-cloud-8900-accounts" | "cpanel-license-premier-cloud-900-accounts" | "cpanel-license-premier-cloud-9000-accounts" | "cpanel-license-premier-cloud-9100-accounts" | "cpanel-license-premier-cloud-9200-accounts" | "cpanel-license-premier-cloud-9300-accounts" | "cpanel-license-premier-cloud-9400-accounts" | "cpanel-license-premier-cloud-9500-accounts" | "cpanel-license-premier-cloud-9600-accounts" | "cpanel-license-premier-cloud-9700-accounts" | "cpanel-license-premier-cloud-9800-accounts" | "cpanel-license-premier-cloud-9900-accounts" | "cpanel-license-premier-metal-100-accounts" | "cpanel-license-premier-metal-1000-accounts" | "cpanel-license-premier-metal-10000-accounts" | "cpanel-license-premier-metal-1100-accounts" | "cpanel-license-premier-metal-1200-accounts" | "cpanel-license-premier-metal-1300-accounts" | "cpanel-license-premier-metal-1400-accounts" | "cpanel-license-premier-metal-150-accounts" | "cpanel-license-premier-metal-1500-accounts" | "cpanel-license-premier-metal-1600-accounts" | "cpanel-license-premier-metal-1700-accounts" | "cpanel-license-premier-metal-1800-accounts" | "cpanel-license-premier-metal-1900-accounts" | "cpanel-license-premier-metal-200-accounts" | "cpanel-license-premier-metal-2000-accounts" | "cpanel-license-premier-metal-2100-accounts" | "cpanel-license-premier-metal-2200-accounts" | "cpanel-license-premier-metal-2300-accounts" | "cpanel-license-premier-metal-2400-accounts" | "cpanel-license-premier-metal-250-accounts" | "cpanel-license-premier-metal-2500-accounts" | "cpanel-license-premier-metal-2600-accounts" | "cpanel-license-premier-metal-2700-accounts" | "cpanel-license-premier-metal-2800-accounts" | "cpanel-license-premier-metal-2900-accounts" | "cpanel-license-premier-metal-300-accounts" | "cpanel-license-premier-metal-3000-accounts" | "cpanel-license-premier-metal-3100-accounts" | "cpanel-license-premier-metal-3200-accounts" | "cpanel-license-premier-metal-3300-accounts" | "cpanel-license-premier-metal-3400-accounts" | "cpanel-license-premier-metal-3500-accounts" | "cpanel-license-premier-metal-3600-accounts" | "cpanel-license-premier-metal-3700-accounts" | "cpanel-license-premier-metal-3800-accounts" | "cpanel-license-premier-metal-3900-accounts" | "cpanel-license-premier-metal-400-accounts" | "cpanel-license-premier-metal-4000-accounts" | "cpanel-license-premier-metal-4100-accounts" | "cpanel-license-premier-metal-4200-accounts" | "cpanel-license-premier-metal-4300-accounts" | "cpanel-license-premier-metal-4400-accounts" | "cpanel-license-premier-metal-4500-accounts" | "cpanel-license-premier-metal-4600-accounts" | "cpanel-license-premier-metal-4700-accounts" | "cpanel-license-premier-metal-4800-accounts" | "cpanel-license-premier-metal-4900-accounts" | "cpanel-license-premier-metal-500-accounts" | "cpanel-license-premier-metal-5000-accounts" | "cpanel-license-premier-metal-5100-accounts" | "cpanel-license-premier-metal-5200-accounts" | "cpanel-license-premier-metal-5300-accounts" | "cpanel-license-premier-metal-5400-accounts" | "cpanel-license-premier-metal-5500-accounts" | "cpanel-license-premier-metal-5600-accounts" | "cpanel-license-premier-metal-5700-accounts" | "cpanel-license-premier-metal-5800-accounts" | "cpanel-license-premier-metal-5900-accounts" | "cpanel-license-premier-metal-600-accounts" | "cpanel-license-premier-metal-6000-accounts" | "cpanel-license-premier-metal-6100-accounts" | "cpanel-license-premier-metal-6200-accounts" | "cpanel-license-premier-metal-6300-accounts" | "cpanel-license-premier-metal-6400-accounts" | "cpanel-license-premier-metal-6500-accounts" | "cpanel-license-premier-metal-6600-accounts" | "cpanel-license-premier-metal-6700-accounts" | "cpanel-license-premier-metal-6800-accounts" | "cpanel-license-premier-metal-6900-accounts" | "cpanel-license-premier-metal-700-accounts" | "cpanel-license-premier-metal-7000-accounts" | "cpanel-license-premier-metal-7100-accounts" | "cpanel-license-premier-metal-7200-accounts" | "cpanel-license-premier-metal-7300-accounts" | "cpanel-license-premier-metal-7400-accounts" | "cpanel-license-premier-metal-7500-accounts" | "cpanel-license-premier-metal-7600-accounts" | "cpanel-license-premier-metal-7700-accounts" | "cpanel-license-premier-metal-7800-accounts" | "cpanel-license-premier-metal-7900-accounts" | "cpanel-license-premier-metal-800-accounts" | "cpanel-license-premier-metal-8000-accounts" | "cpanel-license-premier-metal-8100-accounts" | "cpanel-license-premier-metal-8200-accounts" | "cpanel-license-premier-metal-8300-accounts" | "cpanel-license-premier-metal-8400-accounts" | "cpanel-license-premier-metal-8500-accounts" | "cpanel-license-premier-metal-8600-accounts" | "cpanel-license-premier-metal-8700-accounts" | "cpanel-license-premier-metal-8800-accounts" | "cpanel-license-premier-metal-8900-accounts" | "cpanel-license-premier-metal-900-accounts" | "cpanel-license-premier-metal-9000-accounts" | "cpanel-license-premier-metal-9100-accounts" | "cpanel-license-premier-metal-9200-accounts" | "cpanel-license-premier-metal-9300-accounts" | "cpanel-license-premier-metal-9400-accounts" | "cpanel-license-premier-metal-9500-accounts" | "cpanel-license-premier-metal-9600-accounts" | "cpanel-license-premier-metal-9700-accounts" | "cpanel-license-premier-metal-9800-accounts" | "cpanel-license-premier-metal-9900-accounts" | "cpanel-license-pro-cloud" | "cpanel-license-solo-cloud" | "cpanel-license-solo-metal" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps" | "version-admin-cloud" | "version-plus-cloud" | "version-premier-cloud-100" | "version-premier-cloud-1000" | "version-premier-cloud-10000" | "version-premier-cloud-1100" | "version-premier-cloud-1200" | "version-premier-cloud-1300" | "version-premier-cloud-1400" | "version-premier-cloud-150" | "version-premier-cloud-1500" | "version-premier-cloud-1600" | "version-premier-cloud-1700" | "version-premier-cloud-1800" | "version-premier-cloud-1900" | "version-premier-cloud-200" | "version-premier-cloud-2000" | "version-premier-cloud-2100" | "version-premier-cloud-2200" | "version-premier-cloud-2300" | "version-premier-cloud-2400" | "version-premier-cloud-250" | "version-premier-cloud-2500" | "version-premier-cloud-2600" | "version-premier-cloud-2700" | "version-premier-cloud-2800" | "version-premier-cloud-2900" | "version-premier-cloud-300" | "version-premier-cloud-3000" | "version-premier-cloud-3100" | "version-premier-cloud-3200" | "version-premier-cloud-3300" | "version-premier-cloud-3400" | "version-premier-cloud-3500" | "version-premier-cloud-3600" | "version-premier-cloud-3700" | "version-premier-cloud-3800" | "version-premier-cloud-3900" | "version-premier-cloud-400" | "version-premier-cloud-4000" | "version-premier-cloud-4100" | "version-premier-cloud-4200" | "version-premier-cloud-4300" | "version-premier-cloud-4400" | "version-premier-cloud-4500" | "version-premier-cloud-4600" | "version-premier-cloud-4700" | "version-premier-cloud-4800" | "version-premier-cloud-4900" | "version-premier-cloud-500" | "version-premier-cloud-5000" | "version-premier-cloud-5100" | "version-premier-cloud-5200" | "version-premier-cloud-5300" | "version-premier-cloud-5400" | "version-premier-cloud-5500" | "version-premier-cloud-5600" | "version-premier-cloud-5700" | "version-premier-cloud-5800" | "version-premier-cloud-5900" | "version-premier-cloud-600" | "version-premier-cloud-6000" | "version-premier-cloud-6100" | "version-premier-cloud-6200" | "version-premier-cloud-6300" | "version-premier-cloud-6400" | "version-premier-cloud-6500" | "version-premier-cloud-6600" | "version-premier-cloud-6700" | "version-premier-cloud-6800" | "version-premier-cloud-6900" | "version-premier-cloud-700" | "version-premier-cloud-7000" | "version-premier-cloud-7100" | "version-premier-cloud-7200" | "version-premier-cloud-7300" | "version-premier-cloud-7400" | "version-premier-cloud-7500" | "version-premier-cloud-7600" | "version-premier-cloud-7700" | "version-premier-cloud-7800" | "version-premier-cloud-7900" | "version-premier-cloud-800" | "version-premier-cloud-8000" | "version-premier-cloud-8100" | "version-premier-cloud-8200" | "version-premier-cloud-8300" | "version-premier-cloud-8400" | "version-premier-cloud-8500" | "version-premier-cloud-8600" | "version-premier-cloud-8700" | "version-premier-cloud-8800" | "version-premier-cloud-8900" | "version-premier-cloud-900" | "version-premier-cloud-9000" | "version-premier-cloud-9100" | "version-premier-cloud-9200" | "version-premier-cloud-9300" | "version-premier-cloud-9400" | "version-premier-cloud-9500" | "version-premier-cloud-9600" | "version-premier-cloud-9700" | "version-premier-cloud-9800" | "version-premier-cloud-9900" | "version-premier-metal-100" | "version-premier-metal-1000" | "version-premier-metal-10000" | "version-premier-metal-1100" | "version-premier-metal-1200" | "version-premier-metal-1300" | "version-premier-metal-1400" | "version-premier-metal-150" | "version-premier-metal-1500" | "version-premier-metal-1600" | "version-premier-metal-1700" | "version-premier-metal-1800" | "version-premier-metal-1900" | "version-premier-metal-200" | "version-premier-metal-2000" | "version-premier-metal-2100" | "version-premier-metal-2200" | "version-premier-metal-2300" | "version-premier-metal-2400" | "version-premier-metal-250" | "version-premier-metal-2500" | "version-premier-metal-2600" | "version-premier-metal-2700" | "version-premier-metal-2800" | "version-premier-metal-2900" | "version-premier-metal-300" | "version-premier-metal-3000" | "version-premier-metal-3100" | "version-premier-metal-3200" | "version-premier-metal-3300" | "version-premier-metal-3400" | "version-premier-metal-3500" | "version-premier-metal-3600" | "version-premier-metal-3700" | "version-premier-metal-3800" | "version-premier-metal-3900" | "version-premier-metal-400" | "version-premier-metal-4000" | "version-premier-metal-4100" | "version-premier-metal-4200" | "version-premier-metal-4300" | "version-premier-metal-4400" | "version-premier-metal-4500" | "version-premier-metal-4600" | "version-premier-metal-4700" | "version-premier-metal-4800" | "version-premier-metal-4900" | "version-premier-metal-500" | "version-premier-metal-5000" | "version-premier-metal-5100" | "version-premier-metal-5200" | "version-premier-metal-5300" | "version-premier-metal-5400" | "version-premier-metal-5500" | "version-premier-metal-5600" | "version-premier-metal-5700" | "version-premier-metal-5800" | "version-premier-metal-5900" | "version-premier-metal-600" | "version-premier-metal-6000" | "version-premier-metal-6100" | "version-premier-metal-6200" | "version-premier-metal-6300" | "version-premier-metal-6400" | "version-premier-metal-6500" | "version-premier-metal-6600" | "version-premier-metal-6700" | "version-premier-metal-6800" | "version-premier-metal-6900" | "version-premier-metal-700" | "version-premier-metal-7000" | "version-premier-metal-7100" | "version-premier-metal-7200" | "version-premier-metal-7300" | "version-premier-metal-7400" | "version-premier-metal-7500" | "version-premier-metal-7600" | "version-premier-metal-7700" | "version-premier-metal-7800" | "version-premier-metal-7900" | "version-premier-metal-800" | "version-premier-metal-8000" | "version-premier-metal-8100" | "version-premier-metal-8200" | "version-premier-metal-8300" | "version-premier-metal-8400" | "version-premier-metal-8500" | "version-premier-metal-8600" | "version-premier-metal-8700" | "version-premier-metal-8800" | "version-premier-metal-8900" | "version-premier-metal-900" | "version-premier-metal-9000" | "version-premier-metal-9100" | "version-premier-metal-9200" | "version-premier-metal-9300" | "version-premier-metal-9400" | "version-premier-metal-9500" | "version-premier-metal-9600" | "version-premier-metal-9700" | "version-premier-metal-9800" | "version-premier-metal-9900" | "version-pro-cloud" | "version-solo-cloud" | "version-solo-metal"
    /**
     * All versions available for DirectAdmin products
     * type fullname: license.OrderableDirectAdminVersionEnum
     */
    export type OrderableDirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    /**
     * All domain available for Plesk products
     * type fullname: license.OrderablePleskDomainNumberEnum
     */
    export type OrderablePleskDomainNumberEnum = "10" | "100" | "30" | "300" | "hostingsuite" | "unlimited"
    /**
     * All language pack numbers available for Plesk products
     * type fullname: license.OrderablePleskLanguagePackEnum
     */
    export type OrderablePleskLanguagePackEnum = "1" | "1-extra-language-for-plesk12" | "1-extra-language-for-plesk12-for-vps" | "2" | "2-extra-languages-for-plesk12" | "2-extra-languages-for-plesk12-for-vps" | "3" | "3-extra-languages-for-plesk12" | "3-extra-languages-for-plesk12-for-vps" | "4" | "4-extra-languages-for-plesk12" | "4-extra-languages-for-plesk12-for-vps" | "5" | "5-extra-languages-for-plesk12" | "5-extra-languages-for-plesk12-for-vps" | "unlimited" | "unlimited-extra-languages-for-plesk12" | "unlimited-extra-languages-for-plesk12-for-vps"
    /**
     * All quantities of container available for a Virtuozzo license
     * type fullname: license.OrderableVirtuozzoContainerNumberEnum
     */
    export type OrderableVirtuozzoContainerNumberEnum = "2_CPU_001_CONTAINER" | "2_CPU_003_CONTAINER" | "2_CPU_010_CONTAINER" | "2_CPU_030_CONTAINER" | "2_CPU_060_CONTAINER" | "2_CPU_100_CONTAINER"
    /**
     * All versions available for Virtuozzo products
     * type fullname: license.OrderableVirtuozzoVersionEnum
     */
    export type OrderableVirtuozzoVersionEnum = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX" | "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS" | "virtuozzo-4" | "virtuozzo-4-for-windows"
    /**
     * Application set available for Plesk products
     * type fullname: license.PleskApplicationSetEnum
     */
    export type PleskApplicationSetEnum = "applicationpack" | "developerpack" | "power-pack-for-plesk12" | "powerpack"
    /**
     * All versions available for Plesk products
     * type fullname: license.PleskVersionEnum
     */
    export type PleskVersionEnum = "PLESK_10_AND_LATER" | "PLESK_10_AND_LATER_FOR_KVM" | "PLESK_10_AND_LATER_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN" | "PLESK_10_AND_LATER_FOR_XEN" | "PLESK_12_VPS_WEB_ADMIN" | "PLESK_12_VPS_WEB_APP" | "PLESK_12_VPS_WEB_HOST" | "PLESK_12_VPS_WEB_HOST_CLNX" | "PLESK_12_VPS_WEB_PRO" | "PLESK_12_VPS_WEB_PRO_CLNX" | "PLESK_12_WEB_ADMIN" | "PLESK_12_WEB_APP" | "PLESK_12_WEB_HOST" | "PLESK_12_WEB_HOST_CLNX" | "PLESK_12_WEB_PRO" | "PLESK_12_WEB_PRO_CLNX" | "PLESK_75_RELOADED" | "PLESK_80" | "PLESK_80_FOR_VZ" | "PLESK_81_FOR_WIN" | "PLESK_9" | "PLESK_95" | "PLESK_95_FOR_VZ" | "PLESK_95_FOR_WIN" | "PLESK_9_FOR_VZ" | "PLESK_9_FOR_WIN" | "PLESK_ONYX_VPS_WEB_ADMIN" | "PLESK_ONYX_VPS_WEB_APP" | "PLESK_ONYX_VPS_WEB_HOST" | "PLESK_ONYX_VPS_WEB_HOST_CLNX" | "PLESK_ONYX_VPS_WEB_PRO" | "PLESK_ONYX_VPS_WEB_PRO_CLNX" | "PLESK_ONYX_WEB_ADMIN" | "PLESK_ONYX_WEB_APP" | "PLESK_ONYX_WEB_HOST" | "PLESK_ONYX_WEB_HOST_CLNX" | "PLESK_ONYX_WEB_PRO" | "PLESK_ONYX_WEB_PRO_CLNX" | "plesk-12-webadmin" | "plesk-12-webadmin-for-vps" | "plesk-12-webhost" | "plesk-12-webhost-for-vps" | "plesk-12-webpro" | "plesk-12-webpro-for-vps"
    /**
     * All versions for SQL Server product
     * type fullname: license.SqlServerVersionEnum
     */
    export type SqlServerVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_STANDARD_EDITION_4_CPU" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION_4_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_10_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2014_WEB_EDITION_10_CORES" | "SQL_SERVER_2014_WEB_EDITION_12_CORES" | "SQL_SERVER_2014_WEB_EDITION_16_CORES" | "SQL_SERVER_2014_WEB_EDITION_18_CORES" | "SQL_SERVER_2014_WEB_EDITION_20_CORES" | "SQL_SERVER_2014_WEB_EDITION_24_CORES" | "SQL_SERVER_2014_WEB_EDITION_4_CORES" | "SQL_SERVER_2014_WEB_EDITION_6_CORES" | "SQL_SERVER_2014_WEB_EDITION_8_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2016_WEB_EDITION_10_CORES" | "SQL_SERVER_2016_WEB_EDITION_12_CORES" | "SQL_SERVER_2016_WEB_EDITION_14_CORES" | "SQL_SERVER_2016_WEB_EDITION_16_CORES" | "SQL_SERVER_2016_WEB_EDITION_4_CORES" | "SQL_SERVER_2016_WEB_EDITION_6_CORES" | "SQL_SERVER_2016_WEB_EDITION_8_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_22_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_26_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_28_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_30_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2017_WEB_EDITION_10_CORES" | "SQL_SERVER_2017_WEB_EDITION_12_CORES" | "SQL_SERVER_2017_WEB_EDITION_14_CORES" | "SQL_SERVER_2017_WEB_EDITION_16_CORES" | "SQL_SERVER_2017_WEB_EDITION_18_CORES" | "SQL_SERVER_2017_WEB_EDITION_20_CORES" | "SQL_SERVER_2017_WEB_EDITION_22_CORES" | "SQL_SERVER_2017_WEB_EDITION_24_CORES" | "SQL_SERVER_2017_WEB_EDITION_26_CORES" | "SQL_SERVER_2017_WEB_EDITION_28_CORES" | "SQL_SERVER_2017_WEB_EDITION_30_CORES" | "SQL_SERVER_2017_WEB_EDITION_32_CORES" | "SQL_SERVER_2017_WEB_EDITION_4_CORES" | "SQL_SERVER_2017_WEB_EDITION_6_CORES" | "SQL_SERVER_2017_WEB_EDITION_8_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_10_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_128_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_12_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_14_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_16_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_18_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_20_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_22_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_24_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_26_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_28_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_30_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_32_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_34_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_36_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_38_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_40_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_42_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_44_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_46_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_48_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_4_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_50_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_52_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_54_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_56_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_58_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_60_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_62_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_64_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_6_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_8_CORES" | "SQL_SERVER_2019_ENTERPRISE_EDITION_96_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_128_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_22_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_26_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_28_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_30_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_34_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_36_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_38_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_40_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_42_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_44_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_46_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_48_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_50_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_52_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_54_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_56_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_58_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_60_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_62_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_64_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_96_CORES" | "SQL_SERVER_2019_WEB_EDITION_10_CORES" | "SQL_SERVER_2019_WEB_EDITION_128_CORES" | "SQL_SERVER_2019_WEB_EDITION_12_CORES" | "SQL_SERVER_2019_WEB_EDITION_14_CORES" | "SQL_SERVER_2019_WEB_EDITION_16_CORES" | "SQL_SERVER_2019_WEB_EDITION_18_CORES" | "SQL_SERVER_2019_WEB_EDITION_20_CORES" | "SQL_SERVER_2019_WEB_EDITION_22_CORES" | "SQL_SERVER_2019_WEB_EDITION_24_CORES" | "SQL_SERVER_2019_WEB_EDITION_26_CORES" | "SQL_SERVER_2019_WEB_EDITION_28_CORES" | "SQL_SERVER_2019_WEB_EDITION_30_CORES" | "SQL_SERVER_2019_WEB_EDITION_32_CORES" | "SQL_SERVER_2019_WEB_EDITION_34_CORES" | "SQL_SERVER_2019_WEB_EDITION_36_CORES" | "SQL_SERVER_2019_WEB_EDITION_38_CORES" | "SQL_SERVER_2019_WEB_EDITION_40_CORES" | "SQL_SERVER_2019_WEB_EDITION_42_CORES" | "SQL_SERVER_2019_WEB_EDITION_44_CORES" | "SQL_SERVER_2019_WEB_EDITION_46_CORES" | "SQL_SERVER_2019_WEB_EDITION_48_CORES" | "SQL_SERVER_2019_WEB_EDITION_4_CORES" | "SQL_SERVER_2019_WEB_EDITION_50_CORES" | "SQL_SERVER_2019_WEB_EDITION_52_CORES" | "SQL_SERVER_2019_WEB_EDITION_54_CORES" | "SQL_SERVER_2019_WEB_EDITION_56_CORES" | "SQL_SERVER_2019_WEB_EDITION_58_CORES" | "SQL_SERVER_2019_WEB_EDITION_60_CORES" | "SQL_SERVER_2019_WEB_EDITION_62_CORES" | "SQL_SERVER_2019_WEB_EDITION_64_CORES" | "SQL_SERVER_2019_WEB_EDITION_6_CORES" | "SQL_SERVER_2019_WEB_EDITION_8_CORES" | "SQL_SERVER_2019_WEB_EDITION_96_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_10_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_128_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_12_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_14_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_16_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_18_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_20_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_22_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_24_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_26_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_28_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_30_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_32_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_34_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_36_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_38_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_40_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_42_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_44_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_46_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_48_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_4_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_50_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_52_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_54_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_56_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_58_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_60_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_62_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_64_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_6_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_8_CORES" | "SQL_SERVER_2022_ENTERPRISE_EDITION_96_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_128_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_22_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_26_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_28_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_30_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_34_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_36_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_38_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_40_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_42_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_44_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_46_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_48_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_50_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_52_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_54_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_56_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_58_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_60_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_62_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_64_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2022_STANDARD_EDITION_96_CORES" | "SQL_SERVER_2022_WEB_EDITION_10_CORES" | "SQL_SERVER_2022_WEB_EDITION_128_CORES" | "SQL_SERVER_2022_WEB_EDITION_12_CORES" | "SQL_SERVER_2022_WEB_EDITION_14_CORES" | "SQL_SERVER_2022_WEB_EDITION_16_CORES" | "SQL_SERVER_2022_WEB_EDITION_18_CORES" | "SQL_SERVER_2022_WEB_EDITION_20_CORES" | "SQL_SERVER_2022_WEB_EDITION_22_CORES" | "SQL_SERVER_2022_WEB_EDITION_24_CORES" | "SQL_SERVER_2022_WEB_EDITION_26_CORES" | "SQL_SERVER_2022_WEB_EDITION_28_CORES" | "SQL_SERVER_2022_WEB_EDITION_30_CORES" | "SQL_SERVER_2022_WEB_EDITION_32_CORES" | "SQL_SERVER_2022_WEB_EDITION_34_CORES" | "SQL_SERVER_2022_WEB_EDITION_36_CORES" | "SQL_SERVER_2022_WEB_EDITION_38_CORES" | "SQL_SERVER_2022_WEB_EDITION_40_CORES" | "SQL_SERVER_2022_WEB_EDITION_42_CORES" | "SQL_SERVER_2022_WEB_EDITION_44_CORES" | "SQL_SERVER_2022_WEB_EDITION_46_CORES" | "SQL_SERVER_2022_WEB_EDITION_48_CORES" | "SQL_SERVER_2022_WEB_EDITION_4_CORES" | "SQL_SERVER_2022_WEB_EDITION_50_CORES" | "SQL_SERVER_2022_WEB_EDITION_52_CORES" | "SQL_SERVER_2022_WEB_EDITION_54_CORES" | "SQL_SERVER_2022_WEB_EDITION_56_CORES" | "SQL_SERVER_2022_WEB_EDITION_58_CORES" | "SQL_SERVER_2022_WEB_EDITION_60_CORES" | "SQL_SERVER_2022_WEB_EDITION_62_CORES" | "SQL_SERVER_2022_WEB_EDITION_64_CORES" | "SQL_SERVER_2022_WEB_EDITION_6_CORES" | "SQL_SERVER_2022_WEB_EDITION_8_CORES" | "SQL_SERVER_2022_WEB_EDITION_96_CORES" | "sql-server-2008-license-standard-edition-2-cpu" | "sql-server-2008-license-standard-edition-4-cpu" | "sql-server-2008-license-web-edition-2-cpu" | "sql-server-2008-license-web-edition-4-cpu" | "sql-server-2012-license-standard-edition-10-cores" | "sql-server-2012-license-standard-edition-12-cores" | "sql-server-2012-license-standard-edition-16-cores" | "sql-server-2012-license-standard-edition-18-cores" | "sql-server-2012-license-standard-edition-2-cpu" | "sql-server-2012-license-standard-edition-20-cores" | "sql-server-2012-license-standard-edition-24-cores" | "sql-server-2012-license-standard-edition-32-cores" | "sql-server-2012-license-standard-edition-4-cores" | "sql-server-2012-license-standard-edition-6-cores" | "sql-server-2012-license-standard-edition-8-cores" | "sql-server-2012-license-web-edition-10-cores" | "sql-server-2012-license-web-edition-12-cores" | "sql-server-2012-license-web-edition-16-cores" | "sql-server-2012-license-web-edition-18-cores" | "sql-server-2012-license-web-edition-20-cores" | "sql-server-2012-license-web-edition-24-cores" | "sql-server-2012-license-web-edition-32-cores" | "sql-server-2012-license-web-edition-4-cores" | "sql-server-2012-license-web-edition-6-cores" | "sql-server-2012-license-web-edition-8-cores" | "sql-server-2014-license-standard-edition-10-cores" | "sql-server-2014-license-standard-edition-12-cores" | "sql-server-2014-license-standard-edition-16-cores" | "sql-server-2014-license-standard-edition-18-cores" | "sql-server-2014-license-standard-edition-20-cores" | "sql-server-2014-license-standard-edition-24-cores" | "sql-server-2014-license-standard-edition-4-cores" | "sql-server-2014-license-standard-edition-6-cores" | "sql-server-2014-license-standard-edition-8-cores" | "sql-server-2014-license-web-edition-10-cores" | "sql-server-2014-license-web-edition-12-cores" | "sql-server-2014-license-web-edition-16-cores" | "sql-server-2014-license-web-edition-18-cores" | "sql-server-2014-license-web-edition-20-cores" | "sql-server-2014-license-web-edition-24-cores" | "sql-server-2014-license-web-edition-4-cores" | "sql-server-2014-license-web-edition-6-cores" | "sql-server-2014-license-web-edition-8-cores" | "sql-server-2016-license-standard-edition-10-cores" | "sql-server-2016-license-standard-edition-12-cores" | "sql-server-2016-license-standard-edition-14-cores" | "sql-server-2016-license-standard-edition-16-cores" | "sql-server-2016-license-standard-edition-4-cores" | "sql-server-2016-license-standard-edition-6-cores" | "sql-server-2016-license-standard-edition-8-cores" | "sql-server-2016-license-web-edition-10-cores" | "sql-server-2016-license-web-edition-12-cores" | "sql-server-2016-license-web-edition-14-cores" | "sql-server-2016-license-web-edition-16-cores" | "sql-server-2016-license-web-edition-4-cores" | "sql-server-2016-license-web-edition-6-cores" | "sql-server-2016-license-web-edition-8-cores" | "sql-server-2017-license-standard-edition-10-cores" | "sql-server-2017-license-standard-edition-12-cores" | "sql-server-2017-license-standard-edition-14-cores" | "sql-server-2017-license-standard-edition-16-cores" | "sql-server-2017-license-standard-edition-18-cores" | "sql-server-2017-license-standard-edition-20-cores" | "sql-server-2017-license-standard-edition-22-cores" | "sql-server-2017-license-standard-edition-24-cores" | "sql-server-2017-license-standard-edition-26-cores" | "sql-server-2017-license-standard-edition-28-cores" | "sql-server-2017-license-standard-edition-30-cores" | "sql-server-2017-license-standard-edition-32-cores" | "sql-server-2017-license-standard-edition-4-cores" | "sql-server-2017-license-standard-edition-6-cores" | "sql-server-2017-license-standard-edition-8-cores" | "sql-server-2017-license-web-edition-10-cores" | "sql-server-2017-license-web-edition-12-cores" | "sql-server-2017-license-web-edition-14-cores" | "sql-server-2017-license-web-edition-16-cores" | "sql-server-2017-license-web-edition-18-cores" | "sql-server-2017-license-web-edition-20-cores" | "sql-server-2017-license-web-edition-22-cores" | "sql-server-2017-license-web-edition-24-cores" | "sql-server-2017-license-web-edition-26-cores" | "sql-server-2017-license-web-edition-28-cores" | "sql-server-2017-license-web-edition-30-cores" | "sql-server-2017-license-web-edition-32-cores" | "sql-server-2017-license-web-edition-4-cores" | "sql-server-2017-license-web-edition-6-cores" | "sql-server-2017-license-web-edition-8-cores" | "sql-server-2019-license-enterprise-edition-10-cores" | "sql-server-2019-license-enterprise-edition-12-cores" | "sql-server-2019-license-enterprise-edition-128-cores" | "sql-server-2019-license-enterprise-edition-14-cores" | "sql-server-2019-license-enterprise-edition-16-cores" | "sql-server-2019-license-enterprise-edition-18-cores" | "sql-server-2019-license-enterprise-edition-20-cores" | "sql-server-2019-license-enterprise-edition-22-cores" | "sql-server-2019-license-enterprise-edition-24-cores" | "sql-server-2019-license-enterprise-edition-26-cores" | "sql-server-2019-license-enterprise-edition-28-cores" | "sql-server-2019-license-enterprise-edition-30-cores" | "sql-server-2019-license-enterprise-edition-32-cores" | "sql-server-2019-license-enterprise-edition-34-cores" | "sql-server-2019-license-enterprise-edition-36-cores" | "sql-server-2019-license-enterprise-edition-38-cores" | "sql-server-2019-license-enterprise-edition-4-cores" | "sql-server-2019-license-enterprise-edition-40-cores" | "sql-server-2019-license-enterprise-edition-42-cores" | "sql-server-2019-license-enterprise-edition-44-cores" | "sql-server-2019-license-enterprise-edition-46-cores" | "sql-server-2019-license-enterprise-edition-48-cores" | "sql-server-2019-license-enterprise-edition-50-cores" | "sql-server-2019-license-enterprise-edition-52-cores" | "sql-server-2019-license-enterprise-edition-54-cores" | "sql-server-2019-license-enterprise-edition-56-cores" | "sql-server-2019-license-enterprise-edition-58-cores" | "sql-server-2019-license-enterprise-edition-6-cores" | "sql-server-2019-license-enterprise-edition-60-cores" | "sql-server-2019-license-enterprise-edition-62-cores" | "sql-server-2019-license-enterprise-edition-64-cores" | "sql-server-2019-license-enterprise-edition-8-cores" | "sql-server-2019-license-enterprise-edition-96-cores" | "sql-server-2019-license-standard-edition-10-cores" | "sql-server-2019-license-standard-edition-12-cores" | "sql-server-2019-license-standard-edition-128-cores" | "sql-server-2019-license-standard-edition-14-cores" | "sql-server-2019-license-standard-edition-16-cores" | "sql-server-2019-license-standard-edition-18-cores" | "sql-server-2019-license-standard-edition-20-cores" | "sql-server-2019-license-standard-edition-22-cores" | "sql-server-2019-license-standard-edition-24-cores" | "sql-server-2019-license-standard-edition-26-cores" | "sql-server-2019-license-standard-edition-28-cores" | "sql-server-2019-license-standard-edition-30-cores" | "sql-server-2019-license-standard-edition-32-cores" | "sql-server-2019-license-standard-edition-34-cores" | "sql-server-2019-license-standard-edition-36-cores" | "sql-server-2019-license-standard-edition-38-cores" | "sql-server-2019-license-standard-edition-4-cores" | "sql-server-2019-license-standard-edition-40-cores" | "sql-server-2019-license-standard-edition-42-cores" | "sql-server-2019-license-standard-edition-44-cores" | "sql-server-2019-license-standard-edition-46-cores" | "sql-server-2019-license-standard-edition-48-cores" | "sql-server-2019-license-standard-edition-50-cores" | "sql-server-2019-license-standard-edition-52-cores" | "sql-server-2019-license-standard-edition-54-cores" | "sql-server-2019-license-standard-edition-56-cores" | "sql-server-2019-license-standard-edition-58-cores" | "sql-server-2019-license-standard-edition-6-cores" | "sql-server-2019-license-standard-edition-60-cores" | "sql-server-2019-license-standard-edition-62-cores" | "sql-server-2019-license-standard-edition-64-cores" | "sql-server-2019-license-standard-edition-8-cores" | "sql-server-2019-license-standard-edition-96-cores" | "sql-server-2019-license-web-edition-10-cores" | "sql-server-2019-license-web-edition-12-cores" | "sql-server-2019-license-web-edition-128-cores" | "sql-server-2019-license-web-edition-14-cores" | "sql-server-2019-license-web-edition-16-cores" | "sql-server-2019-license-web-edition-18-cores" | "sql-server-2019-license-web-edition-20-cores" | "sql-server-2019-license-web-edition-22-cores" | "sql-server-2019-license-web-edition-24-cores" | "sql-server-2019-license-web-edition-26-cores" | "sql-server-2019-license-web-edition-28-cores" | "sql-server-2019-license-web-edition-30-cores" | "sql-server-2019-license-web-edition-32-cores" | "sql-server-2019-license-web-edition-34-cores" | "sql-server-2019-license-web-edition-36-cores" | "sql-server-2019-license-web-edition-38-cores" | "sql-server-2019-license-web-edition-4-cores" | "sql-server-2019-license-web-edition-40-cores" | "sql-server-2019-license-web-edition-42-cores" | "sql-server-2019-license-web-edition-44-cores" | "sql-server-2019-license-web-edition-46-cores" | "sql-server-2019-license-web-edition-48-cores" | "sql-server-2019-license-web-edition-50-cores" | "sql-server-2019-license-web-edition-52-cores" | "sql-server-2019-license-web-edition-54-cores" | "sql-server-2019-license-web-edition-56-cores" | "sql-server-2019-license-web-edition-58-cores" | "sql-server-2019-license-web-edition-6-cores" | "sql-server-2019-license-web-edition-60-cores" | "sql-server-2019-license-web-edition-62-cores" | "sql-server-2019-license-web-edition-64-cores" | "sql-server-2019-license-web-edition-8-cores" | "sql-server-2019-license-web-edition-96-cores" | "sql-server-2022-license-enterprise-edition-10-cores" | "sql-server-2022-license-enterprise-edition-12-cores" | "sql-server-2022-license-enterprise-edition-128-cores" | "sql-server-2022-license-enterprise-edition-14-cores" | "sql-server-2022-license-enterprise-edition-16-cores" | "sql-server-2022-license-enterprise-edition-18-cores" | "sql-server-2022-license-enterprise-edition-20-cores" | "sql-server-2022-license-enterprise-edition-22-cores" | "sql-server-2022-license-enterprise-edition-24-cores" | "sql-server-2022-license-enterprise-edition-26-cores" | "sql-server-2022-license-enterprise-edition-28-cores" | "sql-server-2022-license-enterprise-edition-30-cores" | "sql-server-2022-license-enterprise-edition-32-cores" | "sql-server-2022-license-enterprise-edition-34-cores" | "sql-server-2022-license-enterprise-edition-36-cores" | "sql-server-2022-license-enterprise-edition-38-cores" | "sql-server-2022-license-enterprise-edition-4-cores" | "sql-server-2022-license-enterprise-edition-40-cores" | "sql-server-2022-license-enterprise-edition-42-cores" | "sql-server-2022-license-enterprise-edition-44-cores" | "sql-server-2022-license-enterprise-edition-46-cores" | "sql-server-2022-license-enterprise-edition-48-cores" | "sql-server-2022-license-enterprise-edition-50-cores" | "sql-server-2022-license-enterprise-edition-52-cores" | "sql-server-2022-license-enterprise-edition-54-cores" | "sql-server-2022-license-enterprise-edition-56-cores" | "sql-server-2022-license-enterprise-edition-58-cores" | "sql-server-2022-license-enterprise-edition-6-cores" | "sql-server-2022-license-enterprise-edition-60-cores" | "sql-server-2022-license-enterprise-edition-62-cores" | "sql-server-2022-license-enterprise-edition-64-cores" | "sql-server-2022-license-enterprise-edition-8-cores" | "sql-server-2022-license-enterprise-edition-96-cores" | "sql-server-2022-license-standard-edition-10-cores" | "sql-server-2022-license-standard-edition-12-cores" | "sql-server-2022-license-standard-edition-128-cores" | "sql-server-2022-license-standard-edition-14-cores" | "sql-server-2022-license-standard-edition-16-cores" | "sql-server-2022-license-standard-edition-18-cores" | "sql-server-2022-license-standard-edition-20-cores" | "sql-server-2022-license-standard-edition-22-cores" | "sql-server-2022-license-standard-edition-24-cores" | "sql-server-2022-license-standard-edition-26-cores" | "sql-server-2022-license-standard-edition-28-cores" | "sql-server-2022-license-standard-edition-30-cores" | "sql-server-2022-license-standard-edition-32-cores" | "sql-server-2022-license-standard-edition-34-cores" | "sql-server-2022-license-standard-edition-36-cores" | "sql-server-2022-license-standard-edition-38-cores" | "sql-server-2022-license-standard-edition-4-cores" | "sql-server-2022-license-standard-edition-40-cores" | "sql-server-2022-license-standard-edition-42-cores" | "sql-server-2022-license-standard-edition-44-cores" | "sql-server-2022-license-standard-edition-46-cores" | "sql-server-2022-license-standard-edition-48-cores" | "sql-server-2022-license-standard-edition-50-cores" | "sql-server-2022-license-standard-edition-52-cores" | "sql-server-2022-license-standard-edition-54-cores" | "sql-server-2022-license-standard-edition-56-cores" | "sql-server-2022-license-standard-edition-58-cores" | "sql-server-2022-license-standard-edition-6-cores" | "sql-server-2022-license-standard-edition-60-cores" | "sql-server-2022-license-standard-edition-62-cores" | "sql-server-2022-license-standard-edition-64-cores" | "sql-server-2022-license-standard-edition-8-cores" | "sql-server-2022-license-standard-edition-96-cores" | "sql-server-2022-license-web-edition-10-cores" | "sql-server-2022-license-web-edition-12-cores" | "sql-server-2022-license-web-edition-128-cores" | "sql-server-2022-license-web-edition-14-cores" | "sql-server-2022-license-web-edition-16-cores" | "sql-server-2022-license-web-edition-18-cores" | "sql-server-2022-license-web-edition-20-cores" | "sql-server-2022-license-web-edition-22-cores" | "sql-server-2022-license-web-edition-24-cores" | "sql-server-2022-license-web-edition-26-cores" | "sql-server-2022-license-web-edition-28-cores" | "sql-server-2022-license-web-edition-30-cores" | "sql-server-2022-license-web-edition-32-cores" | "sql-server-2022-license-web-edition-34-cores" | "sql-server-2022-license-web-edition-36-cores" | "sql-server-2022-license-web-edition-38-cores" | "sql-server-2022-license-web-edition-4-cores" | "sql-server-2022-license-web-edition-40-cores" | "sql-server-2022-license-web-edition-42-cores" | "sql-server-2022-license-web-edition-44-cores" | "sql-server-2022-license-web-edition-46-cores" | "sql-server-2022-license-web-edition-48-cores" | "sql-server-2022-license-web-edition-50-cores" | "sql-server-2022-license-web-edition-52-cores" | "sql-server-2022-license-web-edition-54-cores" | "sql-server-2022-license-web-edition-56-cores" | "sql-server-2022-license-web-edition-58-cores" | "sql-server-2022-license-web-edition-6-cores" | "sql-server-2022-license-web-edition-60-cores" | "sql-server-2022-license-web-edition-62-cores" | "sql-server-2022-license-web-edition-64-cores" | "sql-server-2022-license-web-edition-8-cores" | "sql-server-2022-license-web-edition-96-cores"
    /**
     * All versions for Windows products
     * type fullname: license.WindowsOsVersionEnum
     */
    export type WindowsOsVersionEnum = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2003_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION" | "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION" | "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION" | "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2012_WEB_EDITION" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_128_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_256_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_512_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_96_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_128_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_256_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_512_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_96_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_10_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_128_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_12_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_14_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_16_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_18_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_20_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_22_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_24_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_256_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_26_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_28_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_30_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_32_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_34_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_36_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_38_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_40_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_42_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_44_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_46_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_48_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_50_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_512_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_52_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_54_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_56_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_58_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_60_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_62_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_64_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_8_CORES" | "WINDOWS_SERVER_2022_DATACENTER_EDITION_96_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_10_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_128_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_12_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_14_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_16_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_18_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_20_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_22_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_24_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_256_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_26_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_28_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_30_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_32_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_34_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_36_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_38_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_40_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_42_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_44_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_46_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_48_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_50_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_512_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_52_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_54_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_56_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_58_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_60_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_62_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_64_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_8_CORES" | "WINDOWS_SERVER_2022_STANDARD_EDITION_96_CORES" | "windows-server-2008-license-datacenter-edition-1-cpu" | "windows-server-2008-license-datacenter-edition-2-cpu" | "windows-server-2008-license-datacenter-edition-4-cpu" | "windows-server-2008-license-enterprise-edition-1-cpu" | "windows-server-2008-license-enterprise-edition-2-cpu" | "windows-server-2008-license-enterprise-edition-4-cpu" | "windows-server-2008-license-standard-edition-1-cpu" | "windows-server-2008-license-standard-edition-2-cpu" | "windows-server-2008-license-standard-edition-4-cpu" | "windows-server-2008-license-web-edition-1-cpu" | "windows-server-2008-license-web-edition-2-cpu" | "windows-server-2008-license-web-edition-4-cpu" | "windows-server-2012-license-datacenter-edition-1-cpu" | "windows-server-2012-license-datacenter-edition-2-cpu" | "windows-server-2012-license-datacenter-edition-4-cpu" | "windows-server-2012-license-standard-edition-1-cpu" | "windows-server-2012-license-standard-edition-2-cpu" | "windows-server-2012-license-standard-edition-4-cpu" | "windows-server-2016-license-datacenter-edition-1-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-8-cores" | "windows-server-2016-license-standard-edition-1-cpu-10-cores" | "windows-server-2016-license-standard-edition-1-cpu-12-cores" | "windows-server-2016-license-standard-edition-1-cpu-14-cores" | "windows-server-2016-license-standard-edition-1-cpu-16-cores" | "windows-server-2016-license-standard-edition-1-cpu-18-cores" | "windows-server-2016-license-standard-edition-1-cpu-20-cores" | "windows-server-2016-license-standard-edition-1-cpu-22-cores" | "windows-server-2016-license-standard-edition-1-cpu-24-cores" | "windows-server-2016-license-standard-edition-1-cpu-8-cores" | "windows-server-2016-license-standard-edition-2-cpu-10-cores" | "windows-server-2016-license-standard-edition-2-cpu-12-cores" | "windows-server-2016-license-standard-edition-2-cpu-14-cores" | "windows-server-2016-license-standard-edition-2-cpu-16-cores" | "windows-server-2016-license-standard-edition-2-cpu-18-cores" | "windows-server-2016-license-standard-edition-2-cpu-20-cores" | "windows-server-2016-license-standard-edition-2-cpu-22-cores" | "windows-server-2016-license-standard-edition-2-cpu-24-cores" | "windows-server-2016-license-standard-edition-2-cpu-8-cores" | "windows-server-2016-license-standard-edition-4-cpu-10-cores" | "windows-server-2016-license-standard-edition-4-cpu-12-cores" | "windows-server-2016-license-standard-edition-4-cpu-14-cores" | "windows-server-2016-license-standard-edition-4-cpu-16-cores" | "windows-server-2016-license-standard-edition-4-cpu-18-cores" | "windows-server-2016-license-standard-edition-4-cpu-20-cores" | "windows-server-2016-license-standard-edition-4-cpu-22-cores" | "windows-server-2016-license-standard-edition-4-cpu-24-cores" | "windows-server-2016-license-standard-edition-4-cpu-8-cores" | "windows-server-2019-license-datacenter-edition-10-cores" | "windows-server-2019-license-datacenter-edition-12-cores" | "windows-server-2019-license-datacenter-edition-128-cores" | "windows-server-2019-license-datacenter-edition-14-cores" | "windows-server-2019-license-datacenter-edition-16-cores" | "windows-server-2019-license-datacenter-edition-18-cores" | "windows-server-2019-license-datacenter-edition-20-cores" | "windows-server-2019-license-datacenter-edition-22-cores" | "windows-server-2019-license-datacenter-edition-24-cores" | "windows-server-2019-license-datacenter-edition-256-cores" | "windows-server-2019-license-datacenter-edition-26-cores" | "windows-server-2019-license-datacenter-edition-28-cores" | "windows-server-2019-license-datacenter-edition-30-cores" | "windows-server-2019-license-datacenter-edition-32-cores" | "windows-server-2019-license-datacenter-edition-34-cores" | "windows-server-2019-license-datacenter-edition-36-cores" | "windows-server-2019-license-datacenter-edition-38-cores" | "windows-server-2019-license-datacenter-edition-40-cores" | "windows-server-2019-license-datacenter-edition-42-cores" | "windows-server-2019-license-datacenter-edition-44-cores" | "windows-server-2019-license-datacenter-edition-46-cores" | "windows-server-2019-license-datacenter-edition-48-cores" | "windows-server-2019-license-datacenter-edition-50-cores" | "windows-server-2019-license-datacenter-edition-512-cores" | "windows-server-2019-license-datacenter-edition-52-cores" | "windows-server-2019-license-datacenter-edition-54-cores" | "windows-server-2019-license-datacenter-edition-56-cores" | "windows-server-2019-license-datacenter-edition-58-cores" | "windows-server-2019-license-datacenter-edition-60-cores" | "windows-server-2019-license-datacenter-edition-62-cores" | "windows-server-2019-license-datacenter-edition-64-cores" | "windows-server-2019-license-datacenter-edition-8-cores" | "windows-server-2019-license-datacenter-edition-96-cores" | "windows-server-2019-license-standard-edition-10-cores" | "windows-server-2019-license-standard-edition-12-cores" | "windows-server-2019-license-standard-edition-128-cores" | "windows-server-2019-license-standard-edition-14-cores" | "windows-server-2019-license-standard-edition-16-cores" | "windows-server-2019-license-standard-edition-18-cores" | "windows-server-2019-license-standard-edition-20-cores" | "windows-server-2019-license-standard-edition-22-cores" | "windows-server-2019-license-standard-edition-24-cores" | "windows-server-2019-license-standard-edition-256-cores" | "windows-server-2019-license-standard-edition-26-cores" | "windows-server-2019-license-standard-edition-28-cores" | "windows-server-2019-license-standard-edition-30-cores" | "windows-server-2019-license-standard-edition-32-cores" | "windows-server-2019-license-standard-edition-34-cores" | "windows-server-2019-license-standard-edition-36-cores" | "windows-server-2019-license-standard-edition-38-cores" | "windows-server-2019-license-standard-edition-40-cores" | "windows-server-2019-license-standard-edition-42-cores" | "windows-server-2019-license-standard-edition-44-cores" | "windows-server-2019-license-standard-edition-46-cores" | "windows-server-2019-license-standard-edition-48-cores" | "windows-server-2019-license-standard-edition-50-cores" | "windows-server-2019-license-standard-edition-512-cores" | "windows-server-2019-license-standard-edition-52-cores" | "windows-server-2019-license-standard-edition-54-cores" | "windows-server-2019-license-standard-edition-56-cores" | "windows-server-2019-license-standard-edition-58-cores" | "windows-server-2019-license-standard-edition-60-cores" | "windows-server-2019-license-standard-edition-62-cores" | "windows-server-2019-license-standard-edition-64-cores" | "windows-server-2019-license-standard-edition-8-cores" | "windows-server-2019-license-standard-edition-96-cores" | "windows-server-2022-license-datacenter-edition-10-cores" | "windows-server-2022-license-datacenter-edition-12-cores" | "windows-server-2022-license-datacenter-edition-128-cores" | "windows-server-2022-license-datacenter-edition-14-cores" | "windows-server-2022-license-datacenter-edition-16-cores" | "windows-server-2022-license-datacenter-edition-18-cores" | "windows-server-2022-license-datacenter-edition-20-cores" | "windows-server-2022-license-datacenter-edition-22-cores" | "windows-server-2022-license-datacenter-edition-24-cores" | "windows-server-2022-license-datacenter-edition-256-cores" | "windows-server-2022-license-datacenter-edition-26-cores" | "windows-server-2022-license-datacenter-edition-28-cores" | "windows-server-2022-license-datacenter-edition-30-cores" | "windows-server-2022-license-datacenter-edition-32-cores" | "windows-server-2022-license-datacenter-edition-34-cores" | "windows-server-2022-license-datacenter-edition-36-cores" | "windows-server-2022-license-datacenter-edition-38-cores" | "windows-server-2022-license-datacenter-edition-40-cores" | "windows-server-2022-license-datacenter-edition-42-cores" | "windows-server-2022-license-datacenter-edition-44-cores" | "windows-server-2022-license-datacenter-edition-46-cores" | "windows-server-2022-license-datacenter-edition-48-cores" | "windows-server-2022-license-datacenter-edition-50-cores" | "windows-server-2022-license-datacenter-edition-512-cores" | "windows-server-2022-license-datacenter-edition-52-cores" | "windows-server-2022-license-datacenter-edition-54-cores" | "windows-server-2022-license-datacenter-edition-56-cores" | "windows-server-2022-license-datacenter-edition-58-cores" | "windows-server-2022-license-datacenter-edition-60-cores" | "windows-server-2022-license-datacenter-edition-62-cores" | "windows-server-2022-license-datacenter-edition-64-cores" | "windows-server-2022-license-datacenter-edition-8-cores" | "windows-server-2022-license-datacenter-edition-96-cores" | "windows-server-2022-license-standard-edition-10-cores" | "windows-server-2022-license-standard-edition-12-cores" | "windows-server-2022-license-standard-edition-128-cores" | "windows-server-2022-license-standard-edition-14-cores" | "windows-server-2022-license-standard-edition-16-cores" | "windows-server-2022-license-standard-edition-18-cores" | "windows-server-2022-license-standard-edition-20-cores" | "windows-server-2022-license-standard-edition-22-cores" | "windows-server-2022-license-standard-edition-24-cores" | "windows-server-2022-license-standard-edition-256-cores" | "windows-server-2022-license-standard-edition-26-cores" | "windows-server-2022-license-standard-edition-28-cores" | "windows-server-2022-license-standard-edition-30-cores" | "windows-server-2022-license-standard-edition-32-cores" | "windows-server-2022-license-standard-edition-34-cores" | "windows-server-2022-license-standard-edition-36-cores" | "windows-server-2022-license-standard-edition-38-cores" | "windows-server-2022-license-standard-edition-40-cores" | "windows-server-2022-license-standard-edition-42-cores" | "windows-server-2022-license-standard-edition-44-cores" | "windows-server-2022-license-standard-edition-46-cores" | "windows-server-2022-license-standard-edition-48-cores" | "windows-server-2022-license-standard-edition-50-cores" | "windows-server-2022-license-standard-edition-512-cores" | "windows-server-2022-license-standard-edition-52-cores" | "windows-server-2022-license-standard-edition-54-cores" | "windows-server-2022-license-standard-edition-56-cores" | "windows-server-2022-license-standard-edition-58-cores" | "windows-server-2022-license-standard-edition-60-cores" | "windows-server-2022-license-standard-edition-62-cores" | "windows-server-2022-license-standard-edition-64-cores" | "windows-server-2022-license-standard-edition-8-cores" | "windows-server-2022-license-standard-edition-96-cores"
    /**
     * All SQL Server versions for Windows products
     * type fullname: license.WindowsSqlVersionEnum
     */
    export type WindowsSqlVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION" | "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES"
    /**
     * All versions for WorkLight product
     * type fullname: license.WorkLightVersionEnum
     */
    export type WorkLightVersionEnum = "VERSION-6.1U.1CPU" | "VERSION-6.1U.2CPU" | "VERSION-6.2U.1CPU" | "VERSION-6.2U.2CPU" | "VERSION-6.EVALUATION" | "worklight-license-version-6-1cpu-1u" | "worklight-license-version-6-1cpu-2u" | "worklight-license-version-6-2cpu-1u" | "worklight-license-version-6-2cpu-2u"
}
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    /**
     * Legal forms a nichandle can be registered as
     * type fullname: nichandle.LegalFormEnum
     */
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN"
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
         * Action values for domain product information
         * type fullname: order.cart.DomainActionEnum
         */
        export type DomainActionEnum = "create" | "trade" | "transfer" | "update"
        /**
         * Missing description
         * interface fullName: order.cart.DomainPacksCreation.DomainPacksCreation
         */
        export interface DomainPacksCreation {
            domain: string;
            duration: string;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        /**
         * Specific details about domain packs offer
         * interface fullName: order.cart.DomainPacksDescription.DomainPacksDescription
         */
        export interface DomainPacksDescription {
            domains: order.cart.DomainPacksDescriptionItem[];
        }
        /**
         * Describe the eligibility of each domain in the packs
         * interface fullName: order.cart.DomainPacksDescriptionItem.DomainPacksDescriptionItem
         */
        export interface DomainPacksDescriptionItem {
            available: boolean;
            domain: string;
        }
        /**
         * Information about a Domain Packs offer information
         * interface fullName: order.cart.DomainPacksProductInformation.DomainPacksProductInformation
         */
        export interface DomainPacksProductInformation {
            description: order.cart.DomainPacksDescription;
            planCode: string;
            prices: order.cart.GenericProductPricing[];
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
         * interface fullName: order.cart.GenericDomainCreation.GenericDomainCreation
         */
        export interface GenericDomainCreation {
            domain: string;
            duration?: string;
            offerId?: string;
            planCode?: string;
            pricingMode?: string;
            quantity?: number;
        }
        /**
         * Missing description
         * interface fullName: order.cart.GenericDomainOptionsCreation.GenericDomainOptionsCreation
         */
        export interface GenericDomainOptionsCreation {
            duration: string;
            itemId: number;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
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
         * Information about a product for Order/Cart
         * interface fullName: order.cart.ProductInformation.ProductInformation
         */
        export interface ProductInformation {
            action: order.cart.DomainActionEnum;
            configurations: order.cart.ConfigurationRequirements[];
            deliveryTime: string;
            duration: string[];
            offer?: string;
            offerId?: string;
            orderable: boolean;
            phase: string;
            prices?: order.cart.Price[];
            pricingMode: string;
            productId: string;
            quantityMax: number;
        }
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
        /**
         * Information about a Web Hosting offer information
         * interface fullName: order.cart.WebHostingProductInformation.WebHostingProductInformation
         */
        export interface WebHostingProductInformation {
            description: hosting.web.Capabilities;
            planCode: string;
            prices: order.cart.GenericProductPricing[];
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
        export namespace privateCloud {
            /**
             * Describes capabilities of a Dedicated Cloud type of service
             * interface fullName: order.catalog.privateCloud.Capabilities.Capabilities
             */
            export interface Capabilities {
                hds: boolean;
                hipaa: boolean;
                nsx: boolean;
                pcidss: boolean;
                vrops: boolean;
            }
            /**
             * Describe all capabilities of different types of service
             * interface fullName: order.catalog.privateCloud.CapabilitiesListing.CapabilitiesListing
             */
            export interface CapabilitiesListing {
                '2016v1': order.catalog.privateCloud.Capabilities;
                '2016v2': order.catalog.privateCloud.Capabilities;
                '2016v3': order.catalog.privateCloud.Capabilities;
                '2016v4': order.catalog.privateCloud.Capabilities;
                '2016v5': order.catalog.privateCloud.Capabilities;
                '2016v6': order.catalog.privateCloud.Capabilities;
                '2016v7': order.catalog.privateCloud.Capabilities;
                default: order.catalog.privateCloud.Capabilities;
            }
            /**
             * Describe a Dedicated Cloud commercial catalog
             * interface fullName: order.catalog.privateCloud.Catalog.Catalog
             */
            export interface Catalog {
                catalogId: number;
                catalogName: string;
                defaultHypervisor: string;
                defaultZone: string;
                merchantCode: string;
                options: order.catalog.privateCloud.CapabilitiesListing;
                zones: order.catalog.privateCloud.ZonesListing;
            }
            /**
             * Describe a Dedicated Cloud zone
             * interface fullName: order.catalog.privateCloud.Zone.Zone
             */
            export interface Zone {
                cityName: string;
                country: string;
                defaultHypervisor: string;
                defaultVersion: string;
                internalName: string;
                plans: order.catalog.ProductPlan[];
            }
            /**
             * Zone definitions per datacenters
             * interface fullName: order.catalog.privateCloud.ZonesListing.ZonesListing
             */
            export interface ZonesListing {
                bhs: order.catalog.privateCloud.Zone;
                eri: order.catalog.privateCloud.Zone;
                lim: order.catalog.privateCloud.Zone;
                rbx: order.catalog.privateCloud.Zone;
                sbg: order.catalog.privateCloud.Zone;
                waw: order.catalog.privateCloud.Zone;
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
export namespace overTheBox {
    /**
     * How do you want your shipment shipped
     * type fullname: overTheBox.ShippingMethodEnum
     */
    export type ShippingMethodEnum = "dhl" | "mondialRelay"
}
export namespace sms {
    /**
     * In case of smpp the channel can not be "both"
     * type fullname: sms.ChannelEnum
     */
    export type ChannelEnum = "both" | "marketing" | "transactional"
}
export namespace telephony {
    /**
     * Typology of number
     * type fullname: telephony.LineTypeEnum
     */
    export type LineTypeEnum = "geographic" | "nogeographic"
    /**
     * Number country
     * type fullname: telephony.NumberCountryEnum
     */
    export type NumberCountryEnum = "be" | "ch" | "es" | "fr" | "gb" | "uk"
    /**
     * Number offer
     * type fullname: telephony.NumberOffer
     */
    export type NumberOffer = "alias" | "didsOnly"
    /**
     * Number quantity contained in the pool
     * type fullname: telephony.NumberPoolEnum
     */
    export type NumberPoolEnum = 10 | 50 | 100
    /**
     * Number special typology
     * type fullname: telephony.NumberSpecialTypologyEnum
     */
    export type NumberSpecialTypologyEnum = "fr_access" | "fr_announced" | "fr_conferencing" | "fr_contentsAuto" | "fr_contentsManual" | "fr_games" | "fr_linking" | "fr_m2m" | "fr_relationship"
    /**
     * Available amounts for security deposit crediting
     * type fullname: telephony.SecurityDepositAmountsEnum
     */
    export type SecurityDepositAmountsEnum = 10 | 20 | 30 | 40 | 50 | 100 | 200 | 300 | 400 | 500 | 1000 | 2000 | 3000 | 4000 | 5000 | 10000
    /**
     * Special number country
     * type fullname: telephony.SpecialNumberCountryEnum
     */
    export type SpecialNumberCountryEnum = "fr"
    export namespace portability {
        /**
         * Country of number to port
         * type fullname: telephony.portability.CountriesAvailable
         */
        export type CountriesAvailable = "belgium" | "france" | "switzerland"
        /**
         * Type of number
         * type fullname: telephony.portability.NumberType
         */
        export type NumberType = "landline" | "special"
        /**
         * Type of your service offer
         * type fullname: telephony.portability.OfferType
         */
        export type OfferType = "company" | "individual"
        /**
         * Social reason
         * type fullname: telephony.portability.SocialReason
         */
        export type SocialReason = "corporation" | "individual" | "professional"
        /**
         * Special number category
         * type fullname: telephony.portability.SpecialNumberCategoryEnum
         */
        export type SpecialNumberCategoryEnum = "access" | "announced" | "conferencing" | "contentsAuto" | "contentsManual" | "directory" | "games" | "linking" | "m2m" | "relationship"
    }
}
export namespace veeamCloudConnect {
    /**
     * All orderable Veeam Cloud Connect offers
     * type fullname: veeamCloudConnect.Offer
     */
    export type Offer = "advanced" | "demo" | "starter"
}
export namespace vps {
    /**
     * Domain number the plesk license will be valid for
     * type fullname: vps.PleskLicenseDomainNumberEnum
     */
    export type PleskLicenseDomainNumberEnum = "10" | "100" | "300" | "hostingsuite"
    export namespace additionalDisk {
        /**
         * Size of the additional disk in GB
         * type fullname: vps.additionalDisk.AdditionalDiskSizeEnum
         */
        export type AdditionalDiskSizeEnum = "100" | "200" | "50" | "500"
    }
    export namespace ip {
        /**
         * Geolocation of the IP Address
         * type fullname: vps.ip.GeolocationEnum
         */
        export type GeolocationEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
    }
}
export namespace vrack {
    /**
     * Possible localization for block
     * type fullname: vrack.BlockCountryEnum
     */
    export type BlockCountryEnum = "be" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "uk"
    /**
     * Possible values for block size
     * type fullname: vrack.BlockSizeEnum
     */
    export type BlockSizeEnum = "128" | "16" | "256" | "32" | "4" | "64" | "8"
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
            analytics: {
                /**
                 * Get information about analytics offers
                 * GET /order/cart/{cartId}/analytics
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new analytics item in your cart
                 * POST /order/cart/{cartId}/analytics
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about analytics options
                     * GET /order/cart/{cartId}/analytics/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new analytics addon in your cart
                     * POST /order/cart/{cartId}/analytics/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
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
            cdn: {
                /**
                 * Get information about CDN offers
                 * GET /order/cart/{cartId}/cdn
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new CDN item in your cart
                 * POST /order/cart/{cartId}/cdn
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about CDN options
                     * GET /order/cart/{cartId}/cdn/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new CDN option in your cart
                     * POST /order/cart/{cartId}/cdn/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
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
                options: {
                    /**
                     * Get information about Ceph as a Service options
                     * GET /order/cart/{cartId}/cephaas/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Ceph as a Service option in your cart
                     * POST /order/cart/{cartId}/cephaas/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
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
            cloudDB: {
                /**
                 * Get all cloud db offers available
                 * GET /order/cart/{cartId}/cloudDB
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Add a cloudDB in your cart
                 * POST /order/cart/{cartId}/cloudDB
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            cloudweb: {
                /**
                 * Get information about Cloud Web offers
                 * GET /order/cart/{cartId}/cloudweb
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Cloud Web item in your cart
                 * POST /order/cart/{cartId}/cloudweb
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Cloud Web options
                     * GET /order/cart/{cartId}/cloudweb/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Cloud Web option in your cart
                     * POST /order/cart/{cartId}/cloudweb/options
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
            csp2: {
                /**
                 * Get information about SaaS CSP2 offers
                 * GET /order/cart/{cartId}/csp2
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new SaaS CSP2 offer item in your cart
                 * POST /order/cart/{cartId}/csp2
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about SaaS CSP2 options
                     * GET /order/cart/{cartId}/csp2/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new SaaS CSP2 option in your cart
                     * POST /order/cart/{cartId}/csp2/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            dbaasTimeseries: {
                /**
                 * Get information about a timeseries offer
                 * GET /order/cart/{cartId}/dbaasTimeseries
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new timeseries offer item in your cart
                 * POST /order/cart/{cartId}/dbaasTimeseries
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
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
            dedicatedCloud: {
                /**
                 * Get information about a dedicated server
                 * GET /order/cart/{cartId}/dedicatedCloud
                 */
                $get(params?: { family?: string, planCode?: string }): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new dedicated server item in your cart
                 * POST /order/cart/{cartId}/dedicatedCloud
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about dedicated server options
                     * GET /order/cart/{cartId}/dedicatedCloud/options
                     */
                    $get(params: { family?: string, planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new dedicated server option in your cart
                     * POST /order/cart/{cartId}/dedicatedCloud/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            dedicatedDirectSales: {
                /**
                 * Get information about a dedicated Direct Sales server
                 * GET /order/cart/{cartId}/dedicatedDirectSales
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new dedicated Direct Sales server item in your cart
                 * POST /order/cart/{cartId}/dedicatedDirectSales
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about dedicated Direct Sales server options
                     * GET /order/cart/{cartId}/dedicatedDirectSales/options
                     */
                    $get(): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new dedicated Direct Sales server option in your cart
                     * POST /order/cart/{cartId}/dedicatedDirectSales/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            dedicatedLabs: {
                /**
                 * Get information about a dedicated labs server
                 * GET /order/cart/{cartId}/dedicatedLabs
                 */
                $get(params?: { planCode?: string }): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new dedicated labs server item in your cart
                 * POST /order/cart/{cartId}/dedicatedLabs
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about dedicated labs server options
                     * GET /order/cart/{cartId}/dedicatedLabs/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new dedicated labs server option in your cart
                     * POST /order/cart/{cartId}/dedicatedLabs/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            dedicatedLegacy: {
                /**
                 * Get information about dedicatedLegacy
                 * GET /order/cart/{cartId}/dedicatedLegacy
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new dedicatedLegacy item in your cart
                 * POST /order/cart/{cartId}/dedicatedLegacy
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about the options of Ovh offers
                     * GET /order/cart/{cartId}/dedicatedLegacy/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Ovh option in your cart
                     * POST /order/cart/{cartId}/dedicatedLegacy/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            dedicatedPciVps: {
                /**
                 * Get information about a dedicated server
                 * GET /order/cart/{cartId}/dedicatedPciVps
                 */
                $get(params?: { family?: string, planCode?: string }): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new dedicated server item in your cart
                 * POST /order/cart/{cartId}/dedicatedPciVps
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about dedicated server options
                     * GET /order/cart/{cartId}/dedicatedPciVps/options
                     */
                    $get(params: { family?: string, planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new dedicated server option in your cart
                     * POST /order/cart/{cartId}/dedicatedPciVps/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            dedicatedReseller: {
                /**
                 * Get information about a dedicated server for US Reseller
                 * GET /order/cart/{cartId}/dedicatedReseller
                 */
                $get(params?: { family?: string, planCode?: string }): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new dedicated server item in your cart
                 * POST /order/cart/{cartId}/dedicatedReseller
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about dedicated server options
                     * GET /order/cart/{cartId}/dedicatedReseller/options
                     */
                    $get(params: { family?: string, planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new dedicated server option in your cart
                     * POST /order/cart/{cartId}/dedicatedReseller/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            deskaas: {
                /**
                 * Get information about Desk As A Service offers
                 * GET /order/cart/{cartId}/deskaas
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Desk as a service item in your cart
                 * POST /order/cart/{cartId}/deskaas
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            dns: {
                /**
                 * Get information about DNS zone offer
                 * GET /order/cart/{cartId}/dns
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new DNS zone item in your cart
                 * POST /order/cart/{cartId}/dns
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about DNS options
                     * GET /order/cart/{cartId}/dns/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new DNS option in your cart
                     * POST /order/cart/{cartId}/dns/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            domain: {
                /**
                 * Get information about a domain name
                 * GET /order/cart/{cartId}/domain
                 */
                $get(params: { domain: string }): Promise<order.cart.ProductInformation[]>;
                /**
                 * Post a new domain name in your cart
                 * POST /order/cart/{cartId}/domain
                 */
                $post(params: { domain: string, duration?: string, offerId?: string, planCode?: string, pricingMode?: string, quantity?: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about domain names options
                     * GET /order/cart/{cartId}/domain/options
                     */
                    $get(params: { domain: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new domain name option in your cart
                     * POST /order/cart/{cartId}/domain/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            domainPacks: {
                /**
                 * Get information about Domain packs offers (AllDom)
                 * GET /order/cart/{cartId}/domainPacks
                 */
                $get(params: { domain: string }): Promise<order.cart.DomainPacksProductInformation[]>;
                /**
                 * Post a new Domain Packs item (AllDom) in your cart
                 * POST /order/cart/{cartId}/domainPacks
                 */
                $post(params: { domain: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            domainRestore: {
                /**
                 * Get information about Domain Restore
                 * GET /order/cart/{cartId}/domainRestore
                 */
                $get(params: { domain: string }): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            emailDomain: {
                /**
                 * Get all available packs available with emails packs
                 * GET /order/cart/{cartId}/emailDomain
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Add a 1-domain emails pack in your cart
                 * POST /order/cart/{cartId}/emailDomain
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            emailpro: {
                /**
                 * Get information about EmailPro offers
                 * GET /order/cart/{cartId}/emailpro
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new EmailPro item in your cart
                 * POST /order/cart/{cartId}/emailpro
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about EmailPro options
                     * GET /order/cart/{cartId}/emailpro/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new EmailPro option in your cart
                     * POST /order/cart/{cartId}/emailpro/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            exchange: {
                /**
                 * Get information about Exchange offers
                 * GET /order/cart/{cartId}/exchange
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Exchange item in your cart
                 * POST /order/cart/{cartId}/exchange
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Exchange options
                     * GET /order/cart/{cartId}/exchange/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Exchange option in your cart
                     * POST /order/cart/{cartId}/exchange/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            exchangeEnterprise: {
                /**
                 * Get information about Exchange Enterprise offers
                 * GET /order/cart/{cartId}/exchangeEnterprise
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Exchange Enterprise item in your cart
                 * POST /order/cart/{cartId}/exchangeEnterprise
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Exchange Enterprise options
                     * GET /order/cart/{cartId}/exchangeEnterprise/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Exchange Enterprise option in your cart
                     * POST /order/cart/{cartId}/exchangeEnterprise/options
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
            ipReseller: {
                /**
                 * Get information about IP addresses reseller offers
                 * GET /order/cart/{cartId}/ipReseller
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new IP address reseller item in your cart
                 * POST /order/cart/{cartId}/ipReseller
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ispPublic: {
                /**
                 * Get information about offers
                 * GET /order/cart/{cartId}/ispPublic
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Add a new item in your cart
                 * POST /order/cart/{cartId}/ispPublic
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about options
                     * GET /order/cart/{cartId}/ispPublic/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Add a new option in your cart
                     * POST /order/cart/{cartId}/ispPublic/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            ispReseller: {
                /**
                 * Get information about offers
                 * GET /order/cart/{cartId}/ispReseller
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Add a new item in your cart
                 * POST /order/cart/{cartId}/ispReseller
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about options
                     * GET /order/cart/{cartId}/ispReseller/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new option in your cart
                     * POST /order/cart/{cartId}/ispReseller/options
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
            kubernetes: {
                /**
                 * Get information about Kubernetes offers
                 * GET /order/cart/{cartId}/kubernetes
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Kubernetes item in your cart
                 * POST /order/cart/{cartId}/kubernetes
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Kubernetes options
                     * GET /order/cart/{cartId}/kubernetes/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Kubernetes option in your cart
                     * POST /order/cart/{cartId}/kubernetes/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
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
            logs: {
                /**
                 * Get information about Logs offers
                 * GET /order/cart/{cartId}/logs
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Logs item in your cart
                 * POST /order/cart/{cartId}/logs
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Logs options
                     * GET /order/cart/{cartId}/logs/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Logs option in your cart
                     * POST /order/cart/{cartId}/logs/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            managedServices: {
                /**
                 * Get information about Managed Services offers
                 * GET /order/cart/{cartId}/managedServices
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Managed Services item in your cart
                 * POST /order/cart/{cartId}/managedServices
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Managed Services options
                     * GET /order/cart/{cartId}/managedServices/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Managed Services option in your cart
                     * POST /order/cart/{cartId}/managedServices/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            metrics: {
                /**
                 * Get information about Metrics offers
                 * GET /order/cart/{cartId}/metrics
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Metrics item in your cart
                 * POST /order/cart/{cartId}/metrics
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Metrics options
                     * GET /order/cart/{cartId}/metrics/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Metrics option in your cart
                     * POST /order/cart/{cartId}/metrics/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            microsoft: {
                /**
                 * Get information about Microsoft offers
                 * GET /order/cart/{cartId}/microsoft
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Microsoft offer item in your cart
                 * POST /order/cart/{cartId}/microsoft
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Microsoft options
                     * GET /order/cart/{cartId}/microsoft/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Microsoft option in your cart
                     * POST /order/cart/{cartId}/microsoft/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            nasha: {
                /**
                 * Get information about NAS HA offers
                 * GET /order/cart/{cartId}/nasha
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new NAS HA item in your cart
                 * POST /order/cart/{cartId}/nasha
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about NAS HA options
                     * GET /order/cart/{cartId}/nasha/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new NAS HA option in your cart
                     * POST /order/cart/{cartId}/nasha/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            netapp: {
                /**
                 * Get information about NetApp offers
                 * GET /order/cart/{cartId}/netapp
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new NetApp offer item in your cart
                 * POST /order/cart/{cartId}/netapp
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about NetApp options
                     * GET /order/cart/{cartId}/netapp/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new NetApp option in your cart
                     * POST /order/cart/{cartId}/netapp/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
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
            office365: {
                /**
                 * Get information about Office 365 licenses
                 * GET /order/cart/{cartId}/office365
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Office 365 item in your cart
                 * POST /order/cart/{cartId}/office365
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Office 365 options
                     * GET /order/cart/{cartId}/office365/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Office 365 option in your cart
                     * POST /order/cart/{cartId}/office365/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            office365Prepaid: {
                /**
                 * Get information about Office 365 Prepaid licenses
                 * GET /order/cart/{cartId}/office365Prepaid
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Office 365 Prepaid item in your cart
                 * POST /order/cart/{cartId}/office365Prepaid
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Office 365 Prepaid options
                     * GET /order/cart/{cartId}/office365Prepaid/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Office 365 Prepaid option in your cart
                     * POST /order/cart/{cartId}/office365Prepaid/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            officePrepaid: {
                /**
                 * Get information about a officePrepaid
                 * GET /order/cart/{cartId}/officePrepaid
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new officePrepaid item in your cart
                 * POST /order/cart/{cartId}/officePrepaid
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about officePrepaid options
                     * GET /order/cart/{cartId}/officePrepaid/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new officePrepaid option in your cart
                     * POST /order/cart/{cartId}/officePrepaid/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            otb: {
                /**
                 * Get information about Over The Box offers
                 * GET /order/cart/{cartId}/otb
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Over The Box item in your cart
                 * POST /order/cart/{cartId}/otb
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Over The Box options
                     * GET /order/cart/{cartId}/otb/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Over The Box option in your cart
                     * POST /order/cart/{cartId}/otb/options
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
            paasmon: {
                /**
                 * Get information about PaaS Monitoring offers
                 * GET /order/cart/{cartId}/paasmon
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new PaaS Monitoring item in your cart
                 * POST /order/cart/{cartId}/paasmon
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            packsProfessionalServices: {
                /**
                 * Get information about a packs professional services
                 * GET /order/cart/{cartId}/packsProfessionalServices
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new packs professional services item in your cart
                 * POST /order/cart/{cartId}/packsProfessionalServices
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about packs professional services options
                     * GET /order/cart/{cartId}/packsProfessionalServices/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new packs professional services option in your cart
                     * POST /order/cart/{cartId}/packsProfessionalServices/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            powerHosting: {
                /**
                 * Get information about power hosting offer
                 * GET /order/cart/{cartId}/powerHosting
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new power hosting item in your cart
                 * POST /order/cart/{cartId}/powerHosting
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
            privateCloudCDI: {
                /**
                 * Get information about Private Cloud CDI offers
                 * GET /order/cart/{cartId}/privateCloudCDI
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Private Cloud CDI item in your cart
                 * POST /order/cart/{cartId}/privateCloudCDI
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Private Cloud CDI options
                     * GET /order/cart/{cartId}/privateCloudCDI/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Private Cloud CDI option in your cart
                     * POST /order/cart/{cartId}/privateCloudCDI/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            privateCloudDC: {
                /**
                 * Get information about Private Cloud Dedicated Cloud offers
                 * GET /order/cart/{cartId}/privateCloudDC
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Private Cloud Dedicated Cloud item in your cart
                 * POST /order/cart/{cartId}/privateCloudDC
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Private Cloud Dedicated Cloud options
                     * GET /order/cart/{cartId}/privateCloudDC/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Private Cloud Dedicated Cloud option in your cart
                     * POST /order/cart/{cartId}/privateCloudDC/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            privateCloudEnterprise: {
                /**
                 * Get information about Hosted Private Cloud offers
                 * GET /order/cart/{cartId}/privateCloudEnterprise
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Hosted Private Cloud item in your cart
                 * POST /order/cart/{cartId}/privateCloudEnterprise
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Hosted Private Cloud options
                     * GET /order/cart/{cartId}/privateCloudEnterprise/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Hosted Private Cloud option in your cart
                     * POST /order/cart/{cartId}/privateCloudEnterprise/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            privateCloudReseller: {
                /**
                 * Get information about Private Cloud Reseller offers
                 * GET /order/cart/{cartId}/privateCloudReseller
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Private Cloud Reseller item in your cart
                 * POST /order/cart/{cartId}/privateCloudReseller
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Private Cloud Reseller options
                     * GET /order/cart/{cartId}/privateCloudReseller/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Private Cloud Reseller option in your cart
                     * POST /order/cart/{cartId}/privateCloudReseller/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            privateCloudResellerEnterprise: {
                /**
                 * Get information about Private Cloud Reseller Enterprise offers
                 * GET /order/cart/{cartId}/privateCloudResellerEnterprise
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Private Cloud Reseller Enterprise item in your cart
                 * POST /order/cart/{cartId}/privateCloudResellerEnterprise
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Private Cloud Reseller Enterprise options
                     * GET /order/cart/{cartId}/privateCloudResellerEnterprise/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Private Cloud Reseller Enterprise option in your cart
                     * POST /order/cart/{cartId}/privateCloudResellerEnterprise/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            privateCloudSDDC: {
                /**
                 * Get information about Private Cloud SDDC offers
                 * GET /order/cart/{cartId}/privateCloudSDDC
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Private Cloud SDDC item in your cart
                 * POST /order/cart/{cartId}/privateCloudSDDC
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Private Cloud SDDC options
                     * GET /order/cart/{cartId}/privateCloudSDDC/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Private Cloud SDDC option in your cart
                     * POST /order/cart/{cartId}/privateCloudSDDC/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            privateSQL: {
                /**
                 * Get all privateSQL offers available
                 * GET /order/cart/{cartId}/privateSQL
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Add a privateSQL in your cart
                 * POST /order/cart/{cartId}/privateSQL
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            reseller: {
                /**
                 * Get information about Reseller offers
                 * GET /order/cart/{cartId}/reseller
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Reseller offer item in your cart
                 * POST /order/cart/{cartId}/reseller
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            sharepoint: {
                /**
                 * Get information about Sharepoint offers
                 * GET /order/cart/{cartId}/sharepoint
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Sharepoint offer item in your cart
                 * POST /order/cart/{cartId}/sharepoint
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Sharepoint options
                     * GET /order/cart/{cartId}/sharepoint/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Sharepoint option in your cart
                     * POST /order/cart/{cartId}/sharepoint/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            sms: {
                /**
                 * Get information about SMS offers
                 * GET /order/cart/{cartId}/sms
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new SMS item in your cart
                 * POST /order/cart/{cartId}/sms
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            sslGateway: {
                /**
                 * Get information about SSL Gateway offers
                 * GET /order/cart/{cartId}/sslGateway
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new SSL Gateway item in your cart
                 * POST /order/cart/{cartId}/sslGateway
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about SSL Gateway options
                     * GET /order/cart/{cartId}/sslGateway/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new SSL Gateway option in your cart
                     * POST /order/cart/{cartId}/sslGateway/options
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
            support: {
                /**
                 * Get all support offers available
                 * GET /order/cart/{cartId}/support
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Add a support offer in your cart
                 * POST /order/cart/{cartId}/support
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            telephony: {
                /**
                 * Get information about VoIP offers
                 * GET /order/cart/{cartId}/telephony
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new VoIP item in your cart
                 * POST /order/cart/{cartId}/telephony
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about VoIP options
                     * GET /order/cart/{cartId}/telephony/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new VoIP option in your cart
                     * POST /order/cart/{cartId}/telephony/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            vco: {
                /**
                 * Get informations about OVHcloud Connect offers
                 * GET /order/cart/{cartId}/vco
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new OVHcloud Connect item in your cart
                 * POST /order/cart/{cartId}/vco
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            vdi: {
                /**
                 * Get information about Horizon View offers
                 * GET /order/cart/{cartId}/vdi
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new Horizon View item in your cart
                 * POST /order/cart/{cartId}/vdi
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about Horizon View options
                     * GET /order/cart/{cartId}/vdi/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new Horizon View option in your cart
                     * POST /order/cart/{cartId}/vdi/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
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
            vrackReseller: {
                /**
                 * Get information about vRack offers
                 * GET /order/cart/{cartId}/vrackReseller
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new vRack item in your cart
                 * POST /order/cart/{cartId}/vrackReseller
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            vrackServices: {
                /**
                 * Get information about vRack Services offers
                 * GET /order/cart/{cartId}/vrackServices
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new vRack Services item in your cart
                 * POST /order/cart/{cartId}/vrackServices
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            webHosting: {
                /**
                 * Get information about webHosting offers
                 * GET /order/cart/{cartId}/webHosting
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new webHosting item in your cart
                 * POST /order/cart/{cartId}/webHosting
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about webHosting options
                     * GET /order/cart/{cartId}/webHosting/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new webHosting option in your cart
                     * POST /order/cart/{cartId}/webHosting/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            webPaaS: {
                /**
                 * Get all web PaaS offers available
                 * GET /order/cart/{cartId}/webPaaS
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Add a web PaaS offer in your cart
                 * POST /order/cart/{cartId}/webPaaS
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about webPaaS options
                     * GET /order/cart/{cartId}/webPaaS/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new webPaaS option in your cart
                     * POST /order/cart/{cartId}/webPaaS/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            xdsl: {
                /**
                 * Get information about xdsl offers
                 * GET /order/cart/{cartId}/xdsl
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Post a new xdsl item in your cart
                 * POST /order/cart/{cartId}/xdsl
                 */
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                options: {
                    /**
                     * Get information about xdsl options
                     * GET /order/cart/{cartId}/xdsl/options
                     */
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    /**
                     * Post a new xdsl option in your cart
                     * POST /order/cart/{cartId}/xdsl/options
                     */
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
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
        dns: {
            /**
             * List available services
             * GET /order/cartServiceOption/dns
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Domain offer for your service
                 * GET /order/cartServiceOption/dns/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Domain option in your cart
                 * POST /order/cartServiceOption/dns/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        domain: {
            /**
             * List available services
             * GET /order/cartServiceOption/domain
             */
            $get(params?: { whoisOwner?: string }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Domain offer for your service
                 * GET /order/cartServiceOption/domain/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Domain option in your cart
                 * POST /order/cartServiceOption/domain/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        emailpro: {
            /**
             * List available services
             * GET /order/cartServiceOption/emailpro
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional EmailPro offer for your service
                 * GET /order/cartServiceOption/emailpro/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional EmailPro option in your cart
                 * POST /order/cartServiceOption/emailpro/{serviceName}
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
        microsoft: {
            /**
             * List available services
             * GET /order/cartServiceOption/microsoft
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Microsoft offer for your service
                 * GET /order/cartServiceOption/microsoft/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Microsoft option in your cart
                 * POST /order/cartServiceOption/microsoft/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        microsoftExchange: {
            /**
             * List available services
             * GET /order/cartServiceOption/microsoftExchange
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Microsoft offer for your service
                 * GET /order/cartServiceOption/microsoftExchange/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Microsoft option in your cart
                 * POST /order/cartServiceOption/microsoftExchange/{serviceName}
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
        office365Prepaid: {
            /**
             * List available services
             * GET /order/cartServiceOption/office365Prepaid
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Office offer for your service
                 * GET /order/cartServiceOption/office365Prepaid/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Office option in your cart
                 * POST /order/cartServiceOption/office365Prepaid/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        officePrepaid: {
            /**
             * List available services
             * GET /order/cartServiceOption/officePrepaid
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional officePrepaid offer for your service
                 * GET /order/cartServiceOption/officePrepaid/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional officePrepaid option in your cart
                 * POST /order/cartServiceOption/officePrepaid/{serviceName}
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
        sharepoint: {
            /**
             * List available services
             * GET /order/cartServiceOption/sharepoint
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Sharepoint offer for your service
                 * GET /order/cartServiceOption/sharepoint/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Sharepoint option in your cart
                 * POST /order/cartServiceOption/sharepoint/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        sms: {
            /**
             * List available services
             * GET /order/cartServiceOption/sms
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get information about additional SMS offer for your service
                 * GET /order/cartServiceOption/sms/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional SMS option in your cart
                 * POST /order/cartServiceOption/sms/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        sslGateway: {
            /**
             * List available services
             * GET /order/cartServiceOption/sslGateway
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional SSL Gateway offer for your service
                 * GET /order/cartServiceOption/sslGateway/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional SSL Gateway option in your cart
                 * POST /order/cartServiceOption/sslGateway/{serviceName}
                 */
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        vdi: {
            /**
             * List available services
             * GET /order/cartServiceOption/vdi
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Horizon View offer for your service
                 * GET /order/cartServiceOption/vdi/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Horizon View option in your cart
                 * POST /order/cartServiceOption/vdi/{serviceName}
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
        webHosting: {
            /**
             * List available services
             * GET /order/cartServiceOption/webHosting
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get informations about additional Web Hosting offer for your service
                 * GET /order/cartServiceOption/webHosting/{serviceName}
                 */
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                /**
                 * Post an additional Web Hosting option in your cart
                 * POST /order/cartServiceOption/webHosting/{serviceName}
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
            logs: {
                /**
                 * Retrieve information of Logs Data Platform catalog
                 * GET /order/catalog/formatted/logs
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
            privateCloudCDI: {
                /**
                 * Retrieve information of Dedicated Cloud CDI catalog
                 * GET /order/catalog/formatted/privateCloudCDI
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.privateCloud.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloudDC: {
                /**
                 * Retrieve information of Dedicated Cloud catalog
                 * GET /order/catalog/formatted/privateCloudDC
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.privateCloud.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloudEnterprise: {
                /**
                 * Retrieve information of Hosted Dedicated Cloud Enterprise catalog
                 * GET /order/catalog/formatted/privateCloudEnterprise
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.pcc.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloudReseller: {
                /**
                 * Retrieve information of Dedicated Cloud Reseller catalog
                 * GET /order/catalog/formatted/privateCloudReseller
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.pcc.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloudResellerEnterprise: {
                /**
                 * Retrieve information of Dedicated Cloud Reseller Enterprise catalog
                 * GET /order/catalog/formatted/privateCloudResellerEnterprise
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.pcc.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateCloudSDDC: {
                /**
                 * Retrieve information of Dedicated Cloud SDDC catalog
                 * GET /order/catalog/formatted/privateCloudSDDC
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.privateCloud.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            reseller: {
                /**
                 * Retrieve information of Reseller catalog
                 * GET /order/catalog/formatted/reseller
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
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
            cloudDB: {
                /**
                 * Retrieve Cloud DB catalog
                 * GET /order/catalog/public/cloudDB
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            dns: {
                /**
                 * Retrieve DNS catalog
                 * GET /order/catalog/public/dns
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
            emailDomain: {
                /**
                 * Retrieve Email Domain catalog
                 * GET /order/catalog/public/emailDomain
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
            ipLoadbalancing: {
                /**
                 * Retrieve IP Load Balancing catalog
                 * GET /order/catalog/public/ipLoadbalancing
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
                 * Retrieve Office Prepaid catalog
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
            packsProfessionalServices: {
                /**
                 * Retrieve packs_professional_services catalog
                 * GET /order/catalog/public/packsProfessionalServices
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
            webHosting: {
                /**
                 * Retrieve Web Hosting catalog
                 * GET /order/catalog/public/webHosting
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
    cdn: {
        dedicated: {
            /**
             * List available services
             * GET /order/cdn/dedicated
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/cdn/dedicated/new
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/cdn/dedicated/new/{duration}
                     */
                    $get(): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/cdn/dedicated/new/{duration}
                     */
                    $post(): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/cdn/dedicated/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                backend: {
                    /**
                     * Get allowed durations for 'backend' option
                     * GET /order/cdn/dedicated/{serviceName}/backend
                     */
                    $get(params: { backend: number }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/cdn/dedicated/{serviceName}/backend/{duration}
                         */
                        $get(params: { backend: number }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/cdn/dedicated/{serviceName}/backend/{duration}
                         */
                        $post(params: { backend: number }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                cacheRule: {
                    /**
                     * Get allowed durations for 'cacheRule' option
                     * GET /order/cdn/dedicated/{serviceName}/cacheRule
                     */
                    $get(params: { cacheRule: cdnanycast.OrderCacheRuleEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/cdn/dedicated/{serviceName}/cacheRule/{duration}
                         */
                        $get(params: { cacheRule: cdnanycast.OrderCacheRuleEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/cdn/dedicated/{serviceName}/cacheRule/{duration}
                         */
                        $post(params: { cacheRule: cdnanycast.OrderCacheRuleEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                quota: {
                    /**
                     * Get allowed durations for 'quota' option
                     * GET /order/cdn/dedicated/{serviceName}/quota
                     */
                    $get(params: { quota: cdnanycast.OrderQuotaEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/cdn/dedicated/{serviceName}/quota/{duration}
                         */
                        $get(params: { quota: cdnanycast.OrderQuotaEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/cdn/dedicated/{serviceName}/quota/{duration}
                         */
                        $post(params: { quota: cdnanycast.OrderQuotaEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
    }
    cloud: {
        project: {
            /**
             * List available services
             * GET /order/cloud/project
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/cloud/project/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                credit: {
                    /**
                     * Get prices and contracts information
                     * GET /order/cloud/project/{serviceName}/credit
                     */
                    $get(params: { amount: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/cloud/project/{serviceName}/credit
                     */
                    $post(params: { amount: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
    }
    dedicated: {
        housing: {
            /**
             * List available services
             * GET /order/dedicated/housing
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/dedicated/housing/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                APC: {
                    /**
                     * Get allowed durations for 'APC' option
                     * GET /order/dedicated/housing/{serviceName}/APC
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/housing/{serviceName}/APC/{duration}
                         */
                        $get(): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/housing/{serviceName}/APC/{duration}
                         */
                        $post(): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
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
                backupStorage: {
                    /**
                     * Get allowed durations for 'backupStorage' option
                     * GET /order/dedicated/server/{serviceName}/backupStorage
                     */
                    $get(params: { capacity: dedicated.server.BackupStorageCapacityEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/backupStorage/{duration}
                         */
                        $get(params: { capacity: dedicated.server.BackupStorageCapacityEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/backupStorage/{duration}
                         */
                        $post(params: { capacity: dedicated.server.BackupStorageCapacityEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                bandwidth: {
                    /**
                     * Get allowed durations for 'bandwidth' option
                     * GET /order/dedicated/server/{serviceName}/bandwidth
                     */
                    $get(params: { bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/bandwidth/{duration}
                         */
                        $get(params: { bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/bandwidth/{duration}
                         */
                        $post(params: { bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                bandwidthvRack: {
                    /**
                     * Get allowed durations for 'bandwidthvRack' option
                     * GET /order/dedicated/server/{serviceName}/bandwidthvRack
                     */
                    $get(params: { bandwidth: dedicated.server.BandwidthvRackOrderEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/bandwidthvRack/{duration}
                         */
                        $get(params: { bandwidth: dedicated.server.BandwidthvRackOrderEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/bandwidthvRack/{duration}
                         */
                        $post(params: { bandwidth: dedicated.server.BandwidthvRackOrderEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                feature: {
                    /**
                     * Get allowed durations for 'feature' option
                     * GET /order/dedicated/server/{serviceName}/feature
                     */
                    $get(params: { feature: dedicated.server.OrderableSysFeatureEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/feature/{duration}
                         */
                        $get(params: { feature: dedicated.server.OrderableSysFeatureEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/feature/{duration}
                         */
                        $post(params: { feature: dedicated.server.OrderableSysFeatureEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                firewall: {
                    /**
                     * Get allowed durations for 'firewall' option
                     * GET /order/dedicated/server/{serviceName}/firewall
                     */
                    $get(params: { firewallModel: dedicated.server.FirewallModelEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/firewall/{duration}
                         */
                        $get(params: { firewallModel: dedicated.server.FirewallModelEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/firewall/{duration}
                         */
                        $post(params: { firewallModel: dedicated.server.FirewallModelEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                ipMigration: {
                    /**
                     * Get allowed durations for 'ipMigration' option
                     * GET /order/dedicated/server/{serviceName}/ipMigration
                     */
                    $get(params: { ip: string, token: string }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/ipMigration/{duration}
                         */
                        $get(params: { ip: string, token: string }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/ipMigration/{duration}
                         */
                        $post(params: { ip: string, token: string }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                kvm: {
                    /**
                     * Get allowed durations for 'kvm' option
                     * GET /order/dedicated/server/{serviceName}/kvm
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/kvm/{duration}
                         */
                        $get(): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/kvm/{duration}
                         */
                        $post(): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                kvmExpress: {
                    /**
                     * Get allowed durations for 'kvmExpress' option
                     * GET /order/dedicated/server/{serviceName}/kvmExpress
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/kvmExpress/{duration}
                         */
                        $get(): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/kvmExpress/{duration}
                         */
                        $post(): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                professionalUse: {
                    /**
                     * Get allowed durations for 'professionalUse' option
                     * GET /order/dedicated/server/{serviceName}/professionalUse
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/professionalUse/{duration}
                         */
                        $get(): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/professionalUse/{duration}
                         */
                        $post(): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                traffic: {
                    /**
                     * Get allowed durations for 'traffic' option
                     * GET /order/dedicated/server/{serviceName}/traffic
                     */
                    $get(params: { traffic: dedicated.server.TrafficOrderEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/traffic/{duration}
                         */
                        $get(params: { traffic: dedicated.server.TrafficOrderEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/traffic/{duration}
                         */
                        $post(params: { traffic: dedicated.server.TrafficOrderEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                usbKey: {
                    /**
                     * Get allowed durations for 'usbKey' option
                     * GET /order/dedicated/server/{serviceName}/usbKey
                     */
                    $get(params: { capacity: dedicated.server.UsbKeyCapacityEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/usbKey/{duration}
                         */
                        $get(params: { capacity: dedicated.server.UsbKeyCapacityEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/usbKey/{duration}
                         */
                        $post(params: { capacity: dedicated.server.UsbKeyCapacityEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
    }
    dedicatedCloud: {
        /**
         * List VMware on OVHcloud service options
         * GET /order/dedicatedCloud
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get allowed options
             * GET /order/dedicatedCloud/{serviceName}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            additionalBandwidth: {
                /**
                 * Get allowed durations for 'additionalBandwidth' option
                 * GET /order/dedicatedCloud/{serviceName}/additionalBandwidth
                 */
                $get(params: { bandwidth: dedicatedCloud.AdditionalBandwidthEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                     */
                    $get(params: { bandwidth: dedicatedCloud.AdditionalBandwidthEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                     */
                    $post(params: { bandwidth: dedicatedCloud.AdditionalBandwidthEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            filer: {
                /**
                 * Get allowed durations for 'filer' option
                 * GET /order/dedicatedCloud/{serviceName}/filer
                 */
                $get(params: { datacenterId?: number, name: string, quantity?: number }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/dedicatedCloud/{serviceName}/filer/{duration}
                     */
                    $get(params: { datacenterId?: number, name: string, quantity?: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/dedicatedCloud/{serviceName}/filer/{duration}
                     */
                    $post(params: { datacenterId?: number, name: string, quantity?: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            host: {
                /**
                 * Get allowed durations for 'host' option
                 * GET /order/dedicatedCloud/{serviceName}/host
                 */
                $get(params: { datacenterId: number, name: string, quantity?: number }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/dedicatedCloud/{serviceName}/host/{duration}
                     */
                    $get(params: { datacenterId: number, name: string, quantity?: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/dedicatedCloud/{serviceName}/host/{duration}
                     */
                    $post(params: { datacenterId: number, name: string, quantity?: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            ip: {
                /**
                 * Get allowed durations for 'ip' option
                 * GET /order/dedicatedCloud/{serviceName}/ip
                 */
                $get(params: { country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/dedicatedCloud/{serviceName}/ip/{duration}
                     */
                    $get(params: { country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/dedicatedCloud/{serviceName}/ip/{duration}
                     */
                    $post(params: { country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            spla: {
                /**
                 * Get prices and contracts information
                 * GET /order/dedicatedCloud/{serviceName}/spla
                 */
                $get(): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/dedicatedCloud/{serviceName}/spla
                 */
                $post(): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            upgradeRessource: {
                /**
                 * Get allowed durations for 'upgradeRessource' option
                 * GET /order/dedicatedCloud/{serviceName}/upgradeRessource
                 */
                $get(params: { upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                     */
                    $get(params: { upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                     */
                    $post(params: { upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            vdi: {
                /**
                 * Get prices and contracts information
                 * GET /order/dedicatedCloud/{serviceName}/vdi
                 */
                $get(params: { datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/dedicatedCloud/{serviceName}/vdi
                 */
                $post(params: { datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    domain: {
        zone: {
            /**
             * List available services
             * GET /order/domain/zone
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get prices and contracts information
                 * GET /order/domain/zone/new
                 */
                $get(params: { minimized?: boolean, zoneName: string }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/domain/zone/new
                 */
                $post(params: { minimized?: boolean, zoneName: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            $(zoneName: string): {
                /**
                 * Get allowed options
                 * GET /order/domain/zone/{zoneName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                dnsAnycast: {
                    /**
                     * Get allowed durations for 'dnsAnycast' option
                     * GET /order/domain/zone/{zoneName}/dnsAnycast
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/domain/zone/{zoneName}/dnsAnycast/{duration}
                         */
                        $get(): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/domain/zone/{zoneName}/dnsAnycast/{duration}
                         */
                        $post(): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
    }
    email: {
        domain: {
            /**
             * List available services
             * GET /order/email/domain
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/email/domain/new
                 */
                $get(params: { domain: string, offer: email.domain.OfferEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/email/domain/new/{duration}
                     */
                    $get(params: { domain: string, offer: email.domain.OfferEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/email/domain/new/{duration}
                     */
                    $post(params: { domain: string, offer: email.domain.OfferEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            $(domain: string): {
                /**
                 * Get allowed options
                 * GET /order/email/domain/{domain}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgrade: {
                    /**
                     * Get allowed durations for 'upgrade' option
                     * GET /order/email/domain/{domain}/upgrade
                     */
                    $get(params: { offer: email.domain.OfferEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/email/domain/{domain}/upgrade/{duration}
                         */
                        $get(params: { offer: email.domain.OfferEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/email/domain/{domain}/upgrade/{duration}
                         */
                        $post(params: { offer: email.domain.OfferEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        exchange: {
            /**
             * List available services
             * GET /order/email/exchange
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(organizationName: string | number): {
                service: {
                    /**
                     * List available services
                     * GET /order/email/exchange/{organizationName}/service
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(exchangeService: string): {
                        /**
                         * Get allowed options
                         * GET /order/email/exchange/{organizationName}/service/{exchangeService}
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        account: {
                            /**
                             * Get allowed durations for 'account' option
                             * GET /order/email/exchange/{organizationName}/service/{exchangeService}/account
                             */
                            $get(params: { licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(duration: string): {
                                /**
                                 * Get prices and contracts information
                                 * GET /order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}
                                 */
                                $get(params: { licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum }): Promise<order.Order>;
                                /**
                                 * Create order
                                 * POST /order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}
                                 */
                                $post(params: { licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum }): Promise<order.Order>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        accountUpgrade: {
                            /**
                             * Get allowed durations for 'accountUpgrade' option
                             * GET /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade
                             */
                            $get(params: { newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(duration: string): {
                                /**
                                 * Get prices and contracts information
                                 * GET /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}
                                 */
                                $get(params: { newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string }): Promise<order.Order>;
                                /**
                                 * Create order
                                 * POST /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}
                                 */
                                $post(params: { newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string }): Promise<order.Order>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        diskSpace: {
                            /**
                             * Get prices and contracts information
                             * GET /order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace
                             */
                            $get(): Promise<order.Order>;
                            /**
                             * Create order
                             * POST /order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace
                             */
                            $post(): Promise<order.Order>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        outlook: {
                            /**
                             * Get allowed durations for 'outlook' option
                             * GET /order/email/exchange/{organizationName}/service/{exchangeService}/outlook
                             */
                            $get(params: { licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(duration: string): {
                                /**
                                 * Get prices and contracts information
                                 * GET /order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}
                                 */
                                $get(params: { licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string }): Promise<order.Order>;
                                /**
                                 * Create order
                                 * POST /order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}
                                 */
                                $post(params: { licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string }): Promise<order.Order>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        upgrade: {
                            /**
                             * Get prices and contracts information
                             * GET /order/email/exchange/{organizationName}/service/{exchangeService}/upgrade
                             */
                            $get(): Promise<order.Order>;
                            /**
                             * Create order
                             * POST /order/email/exchange/{organizationName}/service/{exchangeService}/upgrade
                             */
                            $post(): Promise<order.Order>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        pro: {
            /**
             * List available services
             * GET /order/email/pro
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(service: string): {
                /**
                 * Get allowed options
                 * GET /order/email/pro/{service}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                account: {
                    /**
                     * Get allowed durations for 'account' option
                     * GET /order/email/pro/{service}/account
                     */
                    $get(params: { number: number }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/email/pro/{service}/account/{duration}
                         */
                        $get(params: { number: number }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/email/pro/{service}/account/{duration}
                         */
                        $post(params: { number: number }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
    }
    freefax: {
        /**
         * Freefax line accounts
         * GET /order/freefax
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        new: {
            /**
             * Get prices and contracts information
             * GET /order/freefax/new
             */
            $get(params: { quantity: freefax.QuantityEnum }): Promise<order.Order>;
            /**
             * Create order
             * POST /order/freefax/new
             */
            $post(params: { quantity: freefax.QuantityEnum }): Promise<order.Order>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get allowed options
             * GET /order/freefax/{serviceName}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            convertToVoicefax: {
                /**
                 * Get prices and contracts information
                 * GET /order/freefax/{serviceName}/convertToVoicefax
                 */
                $get(params: { billingAccount: string }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/freefax/{serviceName}/convertToVoicefax
                 */
                $post(params: { billingAccount: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    hosting: {
        web: {
            /**
             * List available services
             * GET /order/hosting/web
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/hosting/web/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgrade: {
                    /**
                     * Get allowed durations for 'upgrade' option
                     * GET /order/hosting/web/{serviceName}/upgrade
                     */
                    $get(params: { offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/hosting/web/{serviceName}/upgrade/{duration}
                         */
                        $get(params: { offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/hosting/web/{serviceName}/upgrade/{duration}
                         */
                        $post(params: { offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
    }
    license: {
        cloudLinux: {
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/cloudLinux/new
                 */
                $get(params: { ip: string, version: license.CloudLinuxVersionEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/cloudLinux/new/{duration}
                     */
                    $get(params: { ip: string, version: license.CloudLinuxVersionEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/cloudLinux/new/{duration}
                     */
                    $post(params: { ip: string, version: license.CloudLinuxVersionEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        cpanel: {
            /**
             * List available services
             * GET /order/license/cpanel
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/cpanel/new
                 */
                $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/cpanel/new/{duration}
                     */
                    $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/cpanel/new/{duration}
                     */
                    $post(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/license/cpanel/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgrade: {
                    /**
                     * Get allowed durations for 'upgrade' option
                     * GET /order/license/cpanel/{serviceName}/upgrade
                     */
                    $get(params: { version: license.OrderableCpanelVersionEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/license/cpanel/{serviceName}/upgrade/{duration}
                         */
                        $get(params: { version: license.OrderableCpanelVersionEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/license/cpanel/{serviceName}/upgrade/{duration}
                         */
                        $post(params: { version: license.OrderableCpanelVersionEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        directadmin: {
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/directadmin/new
                 */
                $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/directadmin/new/{duration}
                     */
                    $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/directadmin/new/{duration}
                     */
                    $post(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        office: {
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/office/new
                 */
                $get(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/office/new/{duration}
                     */
                    $get(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/office/new/{duration}
                     */
                    $post(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        plesk: {
            /**
             * List available services
             * GET /order/license/plesk
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/plesk/new
                 */
                $get(params: { antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/plesk/new/{duration}
                     */
                    $get(params: { antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/plesk/new/{duration}
                     */
                    $post(params: { antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/license/plesk/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgrade: {
                    /**
                     * Get allowed durations for 'upgrade' option
                     * GET /order/license/plesk/{serviceName}/upgrade
                     */
                    $get(params?: { antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/license/plesk/{serviceName}/upgrade/{duration}
                         */
                        $get(params?: { antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/license/plesk/{serviceName}/upgrade/{duration}
                         */
                        $post(params?: { antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        sqlserver: {
            /**
             * List available services
             * GET /order/license/sqlserver
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/sqlserver/new
                 */
                $get(params: { ip: string, version: license.SqlServerVersionEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/sqlserver/new/{duration}
                     */
                    $get(params: { ip: string, version: license.SqlServerVersionEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/sqlserver/new/{duration}
                     */
                    $post(params: { ip: string, version: license.SqlServerVersionEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/license/sqlserver/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgrade: {
                    /**
                     * Get allowed durations for 'upgrade' option
                     * GET /order/license/sqlserver/{serviceName}/upgrade
                     */
                    $get(params: { version: license.SqlServerVersionEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/license/sqlserver/{serviceName}/upgrade/{duration}
                         */
                        $get(params: { version: license.SqlServerVersionEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/license/sqlserver/{serviceName}/upgrade/{duration}
                         */
                        $post(params: { version: license.SqlServerVersionEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        virtuozzo: {
            /**
             * List available services
             * GET /order/license/virtuozzo
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/virtuozzo/new
                 */
                $get(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/virtuozzo/new/{duration}
                     */
                    $get(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/virtuozzo/new/{duration}
                     */
                    $post(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/license/virtuozzo/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgrade: {
                    /**
                     * Get allowed durations for 'upgrade' option
                     * GET /order/license/virtuozzo/{serviceName}/upgrade
                     */
                    $get(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                         */
                        $get(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                         */
                        $post(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        windows: {
            /**
             * List available services
             * GET /order/license/windows
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/windows/new
                 */
                $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/windows/new/{duration}
                     */
                    $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/windows/new/{duration}
                     */
                    $post(params: { ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/license/windows/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgrade: {
                    /**
                     * Get allowed durations for 'upgrade' option
                     * GET /order/license/windows/{serviceName}/upgrade
                     */
                    $get(params?: { sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/license/windows/{serviceName}/upgrade/{duration}
                         */
                        $get(params?: { sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/license/windows/{serviceName}/upgrade/{duration}
                         */
                        $post(params?: { sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        worklight: {
            /**
             * List available services
             * GET /order/license/worklight
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/license/worklight/new
                 */
                $get(params: { ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/license/worklight/new/{duration}
                     */
                    $get(params: { ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/license/worklight/new/{duration}
                     */
                    $post(params: { ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/license/worklight/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgrade: {
                    /**
                     * Get allowed durations for 'upgrade' option
                     * GET /order/license/worklight/{serviceName}/upgrade
                     */
                    $get(params: { version: license.WorkLightVersionEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/license/worklight/{serviceName}/upgrade/{duration}
                         */
                        $get(params: { version: license.WorkLightVersionEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/license/worklight/{serviceName}/upgrade/{duration}
                         */
                        $post(params: { version: license.WorkLightVersionEnum }): Promise<order.Order>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
    }
    overTheBox: {
        /**
         * List available services
         * GET /order/overTheBox
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        new: {
            /**
             * Get allowed durations for 'new' option
             * GET /order/overTheBox/new
             */
            $get(params: { deviceId?: string, offer: string, voucher?: string }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(duration: string): {
                /**
                 * Get prices and contracts information
                 * GET /order/overTheBox/new/{duration}
                 */
                $get(params: { deviceId?: string, offer: string, voucher?: string }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/overTheBox/new/{duration}
                 */
                $post(params: { deviceId?: string, offer: string, voucher?: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        $(serviceName: string): {
            /**
             * Get allowed options
             * GET /order/overTheBox/{serviceName}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            migrate: {
                /**
                 * Get prices and contracts information
                 * GET /order/overTheBox/{serviceName}/migrate
                 */
                $get(params: { hardware: boolean, offer: string, shippingContactID?: string, shippingMethod?: overTheBox.ShippingMethodEnum, shippingRelayID?: number }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/overTheBox/{serviceName}/migrate
                 */
                $post(params: { hardware: boolean, offer: string, shippingContactID?: string, shippingMethod?: overTheBox.ShippingMethodEnum, shippingRelayID?: number }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    saas: {
        csp2: {
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/saas/csp2/new
                 */
                $get(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/saas/csp2/new/{duration}
                     */
                    $get(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/saas/csp2/new/{duration}
                     */
                    $post(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
    }
    sms: {
        /**
         * List available services
         * GET /order/sms
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        new: {
            /**
             * Get prices and contracts information
             * GET /order/sms/new
             */
            $get(params: { channel?: sms.ChannelEnum, quantity: number, smpp?: boolean }): Promise<order.Order>;
            /**
             * Create order
             * POST /order/sms/new
             */
            $post(params: { channel?: sms.ChannelEnum, quantity: number, smpp?: boolean }): Promise<order.Order>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get allowed options
             * GET /order/sms/{serviceName}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            credits: {
                /**
                 * Get prices and contracts information
                 * GET /order/sms/{serviceName}/credits
                 */
                $get(params: { quantity: number }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/sms/{serviceName}/credits
                 */
                $post(params: { quantity: number }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    telephony: {
        /**
         * Your telephony billing accounts
         * GET /order/telephony
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        lines: {
            /**
             * Your telephony billing accounts
             * GET /order/telephony/lines
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/telephony/lines/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                addSimultaneousLines: {
                    /**
                     * Get prices and contracts information
                     * GET /order/telephony/lines/{serviceName}/addSimultaneousLines
                     */
                    $get(params: { billingAccount: string, quantity: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/telephony/lines/{serviceName}/addSimultaneousLines
                     */
                    $post(params: { billingAccount: string, quantity: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                hardware: {
                    /**
                     * Get prices and contracts information
                     * GET /order/telephony/lines/{serviceName}/hardware
                     */
                    $get(params: { hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/telephony/lines/{serviceName}/hardware
                     */
                    $post(params: { hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                updateSimultaneousChannels: {
                    /**
                     * Get prices and contracts information
                     * GET /order/telephony/lines/{serviceName}/updateSimultaneousChannels
                     */
                    $get(params: { quantity: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/telephony/lines/{serviceName}/updateSimultaneousChannels
                     */
                    $post(params: { quantity: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        new: {
            /**
             * Get prices and contracts information
             * GET /order/telephony/new
             */
            $get(): Promise<order.Order>;
            /**
             * Create order
             * POST /order/telephony/new
             */
            $post(): Promise<order.Order>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        spare: {
            new: {
                /**
                 * Get prices and contracts information
                 * GET /order/telephony/spare/new
                 */
                $get(params: { brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/telephony/spare/new
                 */
                $post(params: { brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        trunks: {
            /**
             * Your telephony trunks
             * GET /order/telephony/trunks
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get allowed options
                 * GET /order/telephony/trunks/{serviceName}
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                addSimultaneousLines: {
                    /**
                     * Get prices and contracts information
                     * GET /order/telephony/trunks/{serviceName}/addSimultaneousLines
                     */
                    $get(params: { billingAccount: string, quantity: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/telephony/trunks/{serviceName}/addSimultaneousLines
                     */
                    $post(params: { billingAccount: string, quantity: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                hardware: {
                    /**
                     * Get prices and contracts information
                     * GET /order/telephony/trunks/{serviceName}/hardware
                     */
                    $get(params: { hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/telephony/trunks/{serviceName}/hardware
                     */
                    $post(params: { hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                updateSimultaneousChannels: {
                    /**
                     * Get prices and contracts information
                     * GET /order/telephony/trunks/{serviceName}/updateSimultaneousChannels
                     */
                    $get(params: { quantity: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/telephony/trunks/{serviceName}/updateSimultaneousChannels
                     */
                    $post(params: { quantity: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        $(billingAccount: string): {
            /**
             * Get allowed options
             * GET /order/telephony/{billingAccount}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            accessories: {
                /**
                 * Get prices and contracts information
                 * GET /order/telephony/{billingAccount}/accessories
                 */
                $get(params: { accessories: string[], mondialRelayId?: string, retractation: boolean, shippingContactId: number }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/telephony/{billingAccount}/accessories
                 */
                $post(params: { accessories: string[], mondialRelayId?: string, retractation: boolean, shippingContactId: number }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            line: {
                /**
                 * Get prices and contracts information
                 * GET /order/telephony/{billingAccount}/line
                 */
                $get(params: { brand?: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], mondialRelayId?: string, offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: telephony.LineTypeEnum[], zones?: string[] }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/telephony/{billingAccount}/line
                 */
                $post(params: { brand?: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], mondialRelayId?: string, offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: telephony.LineTypeEnum[], zones?: string[] }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            numberGeographic: {
                /**
                 * Get prices and contracts information
                 * GET /order/telephony/{billingAccount}/numberGeographic
                 */
                $get(params: { ape?: string, city: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string, zone: string }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/telephony/{billingAccount}/numberGeographic
                 */
                $post(params: { ape?: string, city: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string, zone: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            numberNogeographic: {
                /**
                 * Get prices and contracts information
                 * GET /order/telephony/{billingAccount}/numberNogeographic
                 */
                $get(params: { ape?: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/telephony/{billingAccount}/numberNogeographic
                 */
                $post(params: { ape?: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            numberSpecial: {
                /**
                 * Get prices and contracts information
                 * GET /order/telephony/{billingAccount}/numberSpecial
                 */
                $get(params: { addressExtra?: string, ape?: string, cedex?: string, city?: string, country: telephony.SpecialNumberCountryEnum, description?: string, displaySearchReverse?: boolean, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, postBox?: string, range: string, retractation: boolean, siret: string, socialNomination: string, specificNumber?: string, streetName?: string, streetNumber?: string, streetNumberExtra?: string, streetType?: string, typology: telephony.NumberSpecialTypologyEnum, urbanDistrict?: string, zip?: string }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/telephony/{billingAccount}/numberSpecial
                 */
                $post(params: { addressExtra?: string, ape?: string, cedex?: string, city?: string, country: telephony.SpecialNumberCountryEnum, description?: string, displaySearchReverse?: boolean, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, postBox?: string, range: string, retractation: boolean, siret: string, socialNomination: string, specificNumber?: string, streetName?: string, streetNumber?: string, streetNumberExtra?: string, streetType?: string, typology: telephony.NumberSpecialTypologyEnum, urbanDistrict?: string, zip?: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            portability: {
                /**
                 * Get prices and contracts information
                 * GET /order/telephony/{billingAccount}/portability
                 */
                $get(params: { building?: string, callNumber: string, city: string, contactName?: string, contactNumber?: string, country: telephony.portability.CountriesAvailable, desireDate?: string, displayUniversalDirectory: boolean, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, firstName?: string, floor?: number, lineToRedirectAliasTo?: string, listNumbers?: string, mobilePhone?: string, name: string, offer: telephony.portability.OfferType, rio?: string, siret?: string, socialReason: telephony.portability.SocialReason, specialNumberCategory?: telephony.portability.SpecialNumberCategoryEnum, stair?: number, streetName: string, streetNumber: number, streetNumberExtra?: string, streetType?: string, type?: telephony.portability.NumberType, zip: string }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/telephony/{billingAccount}/portability
                 */
                $post(params: { building?: string, callNumber: string, city: string, contactName?: string, contactNumber?: string, country: telephony.portability.CountriesAvailable, desireDate?: string, displayUniversalDirectory: boolean, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, firstName?: string, floor?: number, lineToRedirectAliasTo?: string, listNumbers?: string, mobilePhone?: string, name: string, offer: telephony.portability.OfferType, rio?: string, siret?: string, socialReason: telephony.portability.SocialReason, specialNumberCategory?: telephony.portability.SpecialNumberCategoryEnum, stair?: number, streetName: string, streetNumber: number, streetNumberExtra?: string, streetType?: string, type?: telephony.portability.NumberType, zip: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            securityDeposit: {
                /**
                 * Get prices and contracts information
                 * GET /order/telephony/{billingAccount}/securityDeposit
                 */
                $get(params: { amount: telephony.SecurityDepositAmountsEnum }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/telephony/{billingAccount}/securityDeposit
                 */
                $post(params: { amount: telephony.SecurityDepositAmountsEnum }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
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
        cloudDB: {
            /**
             * List available services
             * GET /order/upgrade/cloudDB
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(domain: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/cloudDB/{domain}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/cloudDB/{domain}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/cloudDB/{domain}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        emailDomain: {
            /**
             * List available services
             * GET /order/upgrade/emailDomain
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/emailDomain/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/emailDomain/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/emailDomain/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        ipLoadbalancing: {
            /**
             * List available services
             * GET /order/upgrade/ipLoadbalancing
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/ipLoadbalancing/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/ipLoadbalancing/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/ipLoadbalancing/{serviceName}/{planCode}
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
        logs: {
            /**
             * List available services
             * GET /order/upgrade/logs
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/logs/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/logs/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/logs/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        metrics: {
            /**
             * List available services
             * GET /order/upgrade/metrics
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/metrics/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/metrics/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/metrics/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        microsoftExchange: {
            /**
             * List available services
             * GET /order/upgrade/microsoftExchange
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/microsoftExchange/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/microsoftExchange/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/microsoftExchange/{serviceName}/{planCode}
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
        privateSQL: {
            /**
             * List available services
             * GET /order/upgrade/privateSQL
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(domain: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/privateSQL/{domain}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/privateSQL/{domain}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/privateSQL/{domain}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        sslGateway: {
            /**
             * List available services
             * GET /order/upgrade/sslGateway
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/sslGateway/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/sslGateway/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/sslGateway/{serviceName}/{planCode}
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
        webHosting: {
            /**
             * List available services
             * GET /order/upgrade/webHosting
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/webHosting/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/webHosting/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/webHosting/{serviceName}/{planCode}
                     */
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            };
        }
        webPaaS: {
            /**
             * List available services
             * GET /order/upgrade/webPaaS
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Retrieve available offers to upgrade your service to
                 * GET /order/upgrade/webPaaS/{serviceName}
                 */
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(planCode: string): {
                    /**
                     * Get a provisional order for the selected upgrade of your service
                     * GET /order/upgrade/webPaaS/{serviceName}/{planCode}
                     */
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    /**
                     * Perform the requested upgrade of your service
                     * POST /order/upgrade/webPaaS/{serviceName}/{planCode}
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
    veeamCloudConnect: {
        /**
         * Veeam Cloud Connect order
         * GET /order/veeamCloudConnect
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get allowed options
             * GET /order/veeamCloudConnect/{serviceName}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            upgrade: {
                /**
                 * Get allowed durations for 'upgrade' option
                 * GET /order/veeamCloudConnect/{serviceName}/upgrade
                 */
                $get(params: { offer: veeamCloudConnect.Offer }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                     */
                    $get(params: { offer: veeamCloudConnect.Offer }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                     */
                    $post(params: { offer: veeamCloudConnect.Offer }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
    vps: {
        /**
         * List available services
         * GET /order/vps
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get allowed options
             * GET /order/vps/{serviceName}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            additionalDisk: {
                /**
                 * Get allowed durations for 'additionalDisk' option
                 * GET /order/vps/{serviceName}/additionalDisk
                 */
                $get(params: { additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/additionalDisk/{duration}
                     */
                    $get(params: { additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/additionalDisk/{duration}
                     */
                    $post(params: { additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            automatedBackup: {
                /**
                 * Get allowed durations for 'automatedBackup' option
                 * GET /order/vps/{serviceName}/automatedBackup
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/automatedBackup/{duration}
                     */
                    $get(): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/automatedBackup/{duration}
                     */
                    $post(): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            cpanel: {
                /**
                 * Get allowed durations for 'cpanel' option
                 * GET /order/vps/{serviceName}/cpanel
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/cpanel/{duration}
                     */
                    $get(): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/cpanel/{duration}
                     */
                    $post(): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            ftpbackup: {
                /**
                 * Get allowed durations for 'ftpbackup' option
                 * GET /order/vps/{serviceName}/ftpbackup
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/ftpbackup/{duration}
                     */
                    $get(): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/ftpbackup/{duration}
                     */
                    $post(): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            plesk: {
                /**
                 * Get allowed durations for 'plesk' option
                 * GET /order/vps/{serviceName}/plesk
                 */
                $get(params: { domainNumber: vps.PleskLicenseDomainNumberEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/plesk/{duration}
                     */
                    $get(params: { domainNumber: vps.PleskLicenseDomainNumberEnum }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/plesk/{duration}
                     */
                    $post(params: { domainNumber: vps.PleskLicenseDomainNumberEnum }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            snapshot: {
                /**
                 * Get allowed durations for 'snapshot' option
                 * GET /order/vps/{serviceName}/snapshot
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/snapshot/{duration}
                     */
                    $get(): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/snapshot/{duration}
                     */
                    $post(): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            upgrade: {
                /**
                 * Get allowed durations for 'upgrade' option
                 * GET /order/vps/{serviceName}/upgrade
                 */
                $get(params: { model: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/upgrade/{duration}
                     */
                    $get(params: { model: string }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/upgrade/{duration}
                     */
                    $post(params: { model: string }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            veeam: {
                /**
                 * Get allowed durations for 'veeam' option
                 * GET /order/vps/{serviceName}/veeam
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/veeam/{duration}
                     */
                    $get(): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/veeam/{duration}
                     */
                    $post(): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            windows: {
                /**
                 * Get allowed durations for 'windows' option
                 * GET /order/vps/{serviceName}/windows
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/vps/{serviceName}/windows/{duration}
                     */
                    $get(): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/vps/{serviceName}/windows/{duration}
                     */
                    $post(): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
    vrack: {
        /**
         * List available services
         * GET /order/vrack
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        new: {
            /**
             * Get prices and contracts information
             * GET /order/vrack/new
             */
            $get(params?: { quantity?: number }): Promise<order.Order>;
            /**
             * Create order
             * POST /order/vrack/new
             */
            $post(params?: { quantity?: number }): Promise<order.Order>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get allowed options
             * GET /order/vrack/{serviceName}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    xdsl: {
        spare: {
            new: {
                /**
                 * Get prices and contracts information
                 * GET /order/xdsl/spare/new
                 */
                $get(params: { brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number }): Promise<order.Order>;
                /**
                 * Create order
                 * POST /order/xdsl/spare/new
                 */
                $post(params: { brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
    }
}

import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /order Models
 * Source: https://eu.api.soyoustart.com/1.0/order.json
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
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace dedicated {
    export namespace server {
        /**
         * Different backup storage capacity in gigabytes
         * type fullname: dedicated.server.BackupStorageCapacityEnum
         */
        export type BackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000
        /**
         * Firewall model name
         * type fullname: dedicated.server.FirewallModelEnum
         */
        export type FirewallModelEnum = "asa5505" | "asa5510" | "asa5520"
        /**
         * IP block size
         * type fullname: dedicated.server.IpBlockSizeEnum
         */
        export type IpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8
        /**
         * Available localization for this static IP
         * type fullname: dedicated.server.IpCountryEnum
         */
        export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
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
         *  Different USB key capacity in gigabytes
         * type fullname: dedicated.server.UsbKeyCapacityEnum
         */
        export type UsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64
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
    export type OrderableCpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-admin-cloud-accounts" | "cpanel-license-plus-cloud-accounts" | "cpanel-license-premier-cloud-100-accounts" | "cpanel-license-premier-cloud-1000-accounts" | "cpanel-license-premier-cloud-10000-accounts" | "cpanel-license-premier-cloud-1100-accounts" | "cpanel-license-premier-cloud-1200-accounts" | "cpanel-license-premier-cloud-1300-accounts" | "cpanel-license-premier-cloud-1400-accounts" | "cpanel-license-premier-cloud-150-accounts" | "cpanel-license-premier-cloud-1500-accounts" | "cpanel-license-premier-cloud-1600-accounts" | "cpanel-license-premier-cloud-1700-accounts" | "cpanel-license-premier-cloud-1800-accounts" | "cpanel-license-premier-cloud-1900-accounts" | "cpanel-license-premier-cloud-200-accounts" | "cpanel-license-premier-cloud-2000-accounts" | "cpanel-license-premier-cloud-2100-accounts" | "cpanel-license-premier-cloud-2200-accounts" | "cpanel-license-premier-cloud-2300-accounts" | "cpanel-license-premier-cloud-2400-accounts" | "cpanel-license-premier-cloud-250-accounts" | "cpanel-license-premier-cloud-2500-accounts" | "cpanel-license-premier-cloud-2600-accounts" | "cpanel-license-premier-cloud-2700-accounts" | "cpanel-license-premier-cloud-2800-accounts" | "cpanel-license-premier-cloud-2900-accounts" | "cpanel-license-premier-cloud-300-accounts" | "cpanel-license-premier-cloud-3000-accounts" | "cpanel-license-premier-cloud-3100-accounts" | "cpanel-license-premier-cloud-3200-accounts" | "cpanel-license-premier-cloud-3300-accounts" | "cpanel-license-premier-cloud-3400-accounts" | "cpanel-license-premier-cloud-3500-accounts" | "cpanel-license-premier-cloud-3600-accounts" | "cpanel-license-premier-cloud-3700-accounts" | "cpanel-license-premier-cloud-3800-accounts" | "cpanel-license-premier-cloud-3900-accounts" | "cpanel-license-premier-cloud-400-accounts" | "cpanel-license-premier-cloud-4000-accounts" | "cpanel-license-premier-cloud-4100-accounts" | "cpanel-license-premier-cloud-4200-accounts" | "cpanel-license-premier-cloud-4300-accounts" | "cpanel-license-premier-cloud-4400-accounts" | "cpanel-license-premier-cloud-4500-accounts" | "cpanel-license-premier-cloud-4600-accounts" | "cpanel-license-premier-cloud-4700-accounts" | "cpanel-license-premier-cloud-4800-accounts" | "cpanel-license-premier-cloud-4900-accounts" | "cpanel-license-premier-cloud-500-accounts" | "cpanel-license-premier-cloud-5000-accounts" | "cpanel-license-premier-cloud-5100-accounts" | "cpanel-license-premier-cloud-5200-accounts" | "cpanel-license-premier-cloud-5300-accounts" | "cpanel-license-premier-cloud-5400-accounts" | "cpanel-license-premier-cloud-5500-accounts" | "cpanel-license-premier-cloud-5600-accounts" | "cpanel-license-premier-cloud-5700-accounts" | "cpanel-license-premier-cloud-5800-accounts" | "cpanel-license-premier-cloud-5900-accounts" | "cpanel-license-premier-cloud-600-accounts" | "cpanel-license-premier-cloud-6000-accounts" | "cpanel-license-premier-cloud-6100-accounts" | "cpanel-license-premier-cloud-6200-accounts" | "cpanel-license-premier-cloud-6300-accounts" | "cpanel-license-premier-cloud-6400-accounts" | "cpanel-license-premier-cloud-6500-accounts" | "cpanel-license-premier-cloud-6600-accounts" | "cpanel-license-premier-cloud-6700-accounts" | "cpanel-license-premier-cloud-6800-accounts" | "cpanel-license-premier-cloud-6900-accounts" | "cpanel-license-premier-cloud-700-accounts" | "cpanel-license-premier-cloud-7000-accounts" | "cpanel-license-premier-cloud-7100-accounts" | "cpanel-license-premier-cloud-7200-accounts" | "cpanel-license-premier-cloud-7300-accounts" | "cpanel-license-premier-cloud-7400-accounts" | "cpanel-license-premier-cloud-7500-accounts" | "cpanel-license-premier-cloud-7600-accounts" | "cpanel-license-premier-cloud-7700-accounts" | "cpanel-license-premier-cloud-7800-accounts" | "cpanel-license-premier-cloud-7900-accounts" | "cpanel-license-premier-cloud-800-accounts" | "cpanel-license-premier-cloud-8000-accounts" | "cpanel-license-premier-cloud-8100-accounts" | "cpanel-license-premier-cloud-8200-accounts" | "cpanel-license-premier-cloud-8300-accounts" | "cpanel-license-premier-cloud-8400-accounts" | "cpanel-license-premier-cloud-8500-accounts" | "cpanel-license-premier-cloud-8600-accounts" | "cpanel-license-premier-cloud-8700-accounts" | "cpanel-license-premier-cloud-8800-accounts" | "cpanel-license-premier-cloud-8900-accounts" | "cpanel-license-premier-cloud-900-accounts" | "cpanel-license-premier-cloud-9000-accounts" | "cpanel-license-premier-cloud-9100-accounts" | "cpanel-license-premier-cloud-9200-accounts" | "cpanel-license-premier-cloud-9300-accounts" | "cpanel-license-premier-cloud-9400-accounts" | "cpanel-license-premier-cloud-9500-accounts" | "cpanel-license-premier-cloud-9600-accounts" | "cpanel-license-premier-cloud-9700-accounts" | "cpanel-license-premier-cloud-9800-accounts" | "cpanel-license-premier-cloud-9900-accounts" | "cpanel-license-premier-metal-100-accounts" | "cpanel-license-premier-metal-1000-accounts" | "cpanel-license-premier-metal-10000-accounts" | "cpanel-license-premier-metal-1100-accounts" | "cpanel-license-premier-metal-1200-accounts" | "cpanel-license-premier-metal-1300-accounts" | "cpanel-license-premier-metal-1400-accounts" | "cpanel-license-premier-metal-150-accounts" | "cpanel-license-premier-metal-1500-accounts" | "cpanel-license-premier-metal-1600-accounts" | "cpanel-license-premier-metal-1700-accounts" | "cpanel-license-premier-metal-1800-accounts" | "cpanel-license-premier-metal-1900-accounts" | "cpanel-license-premier-metal-200-accounts" | "cpanel-license-premier-metal-2000-accounts" | "cpanel-license-premier-metal-2100-accounts" | "cpanel-license-premier-metal-2200-accounts" | "cpanel-license-premier-metal-2300-accounts" | "cpanel-license-premier-metal-2400-accounts" | "cpanel-license-premier-metal-250-accounts" | "cpanel-license-premier-metal-2500-accounts" | "cpanel-license-premier-metal-2600-accounts" | "cpanel-license-premier-metal-2700-accounts" | "cpanel-license-premier-metal-2800-accounts" | "cpanel-license-premier-metal-2900-accounts" | "cpanel-license-premier-metal-300-accounts" | "cpanel-license-premier-metal-3000-accounts" | "cpanel-license-premier-metal-3100-accounts" | "cpanel-license-premier-metal-3200-accounts" | "cpanel-license-premier-metal-3300-accounts" | "cpanel-license-premier-metal-3400-accounts" | "cpanel-license-premier-metal-3500-accounts" | "cpanel-license-premier-metal-3600-accounts" | "cpanel-license-premier-metal-3700-accounts" | "cpanel-license-premier-metal-3800-accounts" | "cpanel-license-premier-metal-3900-accounts" | "cpanel-license-premier-metal-400-accounts" | "cpanel-license-premier-metal-4000-accounts" | "cpanel-license-premier-metal-4100-accounts" | "cpanel-license-premier-metal-4200-accounts" | "cpanel-license-premier-metal-4300-accounts" | "cpanel-license-premier-metal-4400-accounts" | "cpanel-license-premier-metal-4500-accounts" | "cpanel-license-premier-metal-4600-accounts" | "cpanel-license-premier-metal-4700-accounts" | "cpanel-license-premier-metal-4800-accounts" | "cpanel-license-premier-metal-4900-accounts" | "cpanel-license-premier-metal-500-accounts" | "cpanel-license-premier-metal-5000-accounts" | "cpanel-license-premier-metal-5100-accounts" | "cpanel-license-premier-metal-5200-accounts" | "cpanel-license-premier-metal-5300-accounts" | "cpanel-license-premier-metal-5400-accounts" | "cpanel-license-premier-metal-5500-accounts" | "cpanel-license-premier-metal-5600-accounts" | "cpanel-license-premier-metal-5700-accounts" | "cpanel-license-premier-metal-5800-accounts" | "cpanel-license-premier-metal-5900-accounts" | "cpanel-license-premier-metal-600-accounts" | "cpanel-license-premier-metal-6000-accounts" | "cpanel-license-premier-metal-6100-accounts" | "cpanel-license-premier-metal-6200-accounts" | "cpanel-license-premier-metal-6300-accounts" | "cpanel-license-premier-metal-6400-accounts" | "cpanel-license-premier-metal-6500-accounts" | "cpanel-license-premier-metal-6600-accounts" | "cpanel-license-premier-metal-6700-accounts" | "cpanel-license-premier-metal-6800-accounts" | "cpanel-license-premier-metal-6900-accounts" | "cpanel-license-premier-metal-700-accounts" | "cpanel-license-premier-metal-7000-accounts" | "cpanel-license-premier-metal-7100-accounts" | "cpanel-license-premier-metal-7200-accounts" | "cpanel-license-premier-metal-7300-accounts" | "cpanel-license-premier-metal-7400-accounts" | "cpanel-license-premier-metal-7500-accounts" | "cpanel-license-premier-metal-7600-accounts" | "cpanel-license-premier-metal-7700-accounts" | "cpanel-license-premier-metal-7800-accounts" | "cpanel-license-premier-metal-7900-accounts" | "cpanel-license-premier-metal-800-accounts" | "cpanel-license-premier-metal-8000-accounts" | "cpanel-license-premier-metal-8100-accounts" | "cpanel-license-premier-metal-8200-accounts" | "cpanel-license-premier-metal-8300-accounts" | "cpanel-license-premier-metal-8400-accounts" | "cpanel-license-premier-metal-8500-accounts" | "cpanel-license-premier-metal-8600-accounts" | "cpanel-license-premier-metal-8700-accounts" | "cpanel-license-premier-metal-8800-accounts" | "cpanel-license-premier-metal-8900-accounts" | "cpanel-license-premier-metal-900-accounts" | "cpanel-license-premier-metal-9000-accounts" | "cpanel-license-premier-metal-9100-accounts" | "cpanel-license-premier-metal-9200-accounts" | "cpanel-license-premier-metal-9300-accounts" | "cpanel-license-premier-metal-9400-accounts" | "cpanel-license-premier-metal-9500-accounts" | "cpanel-license-premier-metal-9600-accounts" | "cpanel-license-premier-metal-9700-accounts" | "cpanel-license-premier-metal-9800-accounts" | "cpanel-license-premier-metal-9900-accounts" | "cpanel-license-pro-cloud-accounts" | "cpanel-license-solo-cloud-accounts" | "cpanel-license-solo-metal-accounts" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps" | "version-admin-cloud" | "version-plus-cloud" | "version-premier-cloud-100" | "version-premier-cloud-1000" | "version-premier-cloud-10000" | "version-premier-cloud-1100" | "version-premier-cloud-1200" | "version-premier-cloud-1300" | "version-premier-cloud-1400" | "version-premier-cloud-150" | "version-premier-cloud-1500" | "version-premier-cloud-1600" | "version-premier-cloud-1700" | "version-premier-cloud-1800" | "version-premier-cloud-1900" | "version-premier-cloud-200" | "version-premier-cloud-2000" | "version-premier-cloud-2100" | "version-premier-cloud-2200" | "version-premier-cloud-2300" | "version-premier-cloud-2400" | "version-premier-cloud-250" | "version-premier-cloud-2500" | "version-premier-cloud-2600" | "version-premier-cloud-2700" | "version-premier-cloud-2800" | "version-premier-cloud-2900" | "version-premier-cloud-300" | "version-premier-cloud-3000" | "version-premier-cloud-3100" | "version-premier-cloud-3200" | "version-premier-cloud-3300" | "version-premier-cloud-3400" | "version-premier-cloud-3500" | "version-premier-cloud-3600" | "version-premier-cloud-3700" | "version-premier-cloud-3800" | "version-premier-cloud-3900" | "version-premier-cloud-400" | "version-premier-cloud-4000" | "version-premier-cloud-4100" | "version-premier-cloud-4200" | "version-premier-cloud-4300" | "version-premier-cloud-4400" | "version-premier-cloud-4500" | "version-premier-cloud-4600" | "version-premier-cloud-4700" | "version-premier-cloud-4800" | "version-premier-cloud-4900" | "version-premier-cloud-500" | "version-premier-cloud-5000" | "version-premier-cloud-5100" | "version-premier-cloud-5200" | "version-premier-cloud-5300" | "version-premier-cloud-5400" | "version-premier-cloud-5500" | "version-premier-cloud-5600" | "version-premier-cloud-5700" | "version-premier-cloud-5800" | "version-premier-cloud-5900" | "version-premier-cloud-600" | "version-premier-cloud-6000" | "version-premier-cloud-6100" | "version-premier-cloud-6200" | "version-premier-cloud-6300" | "version-premier-cloud-6400" | "version-premier-cloud-6500" | "version-premier-cloud-6600" | "version-premier-cloud-6700" | "version-premier-cloud-6800" | "version-premier-cloud-6900" | "version-premier-cloud-700" | "version-premier-cloud-7000" | "version-premier-cloud-7100" | "version-premier-cloud-7200" | "version-premier-cloud-7300" | "version-premier-cloud-7400" | "version-premier-cloud-7500" | "version-premier-cloud-7600" | "version-premier-cloud-7700" | "version-premier-cloud-7800" | "version-premier-cloud-7900" | "version-premier-cloud-800" | "version-premier-cloud-8000" | "version-premier-cloud-8100" | "version-premier-cloud-8200" | "version-premier-cloud-8300" | "version-premier-cloud-8400" | "version-premier-cloud-8500" | "version-premier-cloud-8600" | "version-premier-cloud-8700" | "version-premier-cloud-8800" | "version-premier-cloud-8900" | "version-premier-cloud-900" | "version-premier-cloud-9000" | "version-premier-cloud-9100" | "version-premier-cloud-9200" | "version-premier-cloud-9300" | "version-premier-cloud-9400" | "version-premier-cloud-9500" | "version-premier-cloud-9600" | "version-premier-cloud-9700" | "version-premier-cloud-9800" | "version-premier-cloud-9900" | "version-premier-metal-100" | "version-premier-metal-1000" | "version-premier-metal-10000" | "version-premier-metal-1100" | "version-premier-metal-1200" | "version-premier-metal-1300" | "version-premier-metal-1400" | "version-premier-metal-150" | "version-premier-metal-1500" | "version-premier-metal-1600" | "version-premier-metal-1700" | "version-premier-metal-1800" | "version-premier-metal-1900" | "version-premier-metal-200" | "version-premier-metal-2000" | "version-premier-metal-2100" | "version-premier-metal-2200" | "version-premier-metal-2300" | "version-premier-metal-2400" | "version-premier-metal-250" | "version-premier-metal-2500" | "version-premier-metal-2600" | "version-premier-metal-2700" | "version-premier-metal-2800" | "version-premier-metal-2900" | "version-premier-metal-300" | "version-premier-metal-3000" | "version-premier-metal-3100" | "version-premier-metal-3200" | "version-premier-metal-3300" | "version-premier-metal-3400" | "version-premier-metal-3500" | "version-premier-metal-3600" | "version-premier-metal-3700" | "version-premier-metal-3800" | "version-premier-metal-3900" | "version-premier-metal-400" | "version-premier-metal-4000" | "version-premier-metal-4100" | "version-premier-metal-4200" | "version-premier-metal-4300" | "version-premier-metal-4400" | "version-premier-metal-4500" | "version-premier-metal-4600" | "version-premier-metal-4700" | "version-premier-metal-4800" | "version-premier-metal-4900" | "version-premier-metal-500" | "version-premier-metal-5000" | "version-premier-metal-5100" | "version-premier-metal-5200" | "version-premier-metal-5300" | "version-premier-metal-5400" | "version-premier-metal-5500" | "version-premier-metal-5600" | "version-premier-metal-5700" | "version-premier-metal-5800" | "version-premier-metal-5900" | "version-premier-metal-600" | "version-premier-metal-6000" | "version-premier-metal-6100" | "version-premier-metal-6200" | "version-premier-metal-6300" | "version-premier-metal-6400" | "version-premier-metal-6500" | "version-premier-metal-6600" | "version-premier-metal-6700" | "version-premier-metal-6800" | "version-premier-metal-6900" | "version-premier-metal-700" | "version-premier-metal-7000" | "version-premier-metal-7100" | "version-premier-metal-7200" | "version-premier-metal-7300" | "version-premier-metal-7400" | "version-premier-metal-7500" | "version-premier-metal-7600" | "version-premier-metal-7700" | "version-premier-metal-7800" | "version-premier-metal-7900" | "version-premier-metal-800" | "version-premier-metal-8000" | "version-premier-metal-8100" | "version-premier-metal-8200" | "version-premier-metal-8300" | "version-premier-metal-8400" | "version-premier-metal-8500" | "version-premier-metal-8600" | "version-premier-metal-8700" | "version-premier-metal-8800" | "version-premier-metal-8900" | "version-premier-metal-900" | "version-premier-metal-9000" | "version-premier-metal-9100" | "version-premier-metal-9200" | "version-premier-metal-9300" | "version-premier-metal-9400" | "version-premier-metal-9500" | "version-premier-metal-9600" | "version-premier-metal-9700" | "version-premier-metal-9800" | "version-premier-metal-9900" | "version-pro-cloud" | "version-solo-cloud" | "version-solo-metal"
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
    export type OrderablePleskLanguagePackEnum = "1" | "1-extra-language-for-plesk12" | "2" | "2-extra-languages-for-plesk12" | "3" | "3-extra-languages-for-plesk12" | "4" | "4-extra-languages-for-plesk12" | "5" | "5-extra-languages-for-plesk12" | "unlimited" | "unlimited-extra-languages-for-plesk12"
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
    export type SqlServerVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_STANDARD_EDITION_4_CPU" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION_4_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_10_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2014_WEB_EDITION_10_CORES" | "SQL_SERVER_2014_WEB_EDITION_12_CORES" | "SQL_SERVER_2014_WEB_EDITION_16_CORES" | "SQL_SERVER_2014_WEB_EDITION_18_CORES" | "SQL_SERVER_2014_WEB_EDITION_20_CORES" | "SQL_SERVER_2014_WEB_EDITION_24_CORES" | "SQL_SERVER_2014_WEB_EDITION_4_CORES" | "SQL_SERVER_2014_WEB_EDITION_6_CORES" | "SQL_SERVER_2014_WEB_EDITION_8_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2016_WEB_EDITION_10_CORES" | "SQL_SERVER_2016_WEB_EDITION_12_CORES" | "SQL_SERVER_2016_WEB_EDITION_14_CORES" | "SQL_SERVER_2016_WEB_EDITION_16_CORES" | "SQL_SERVER_2016_WEB_EDITION_4_CORES" | "SQL_SERVER_2016_WEB_EDITION_6_CORES" | "SQL_SERVER_2016_WEB_EDITION_8_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_22_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_26_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_28_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_30_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2017_WEB_EDITION_10_CORES" | "SQL_SERVER_2017_WEB_EDITION_12_CORES" | "SQL_SERVER_2017_WEB_EDITION_14_CORES" | "SQL_SERVER_2017_WEB_EDITION_16_CORES" | "SQL_SERVER_2017_WEB_EDITION_18_CORES" | "SQL_SERVER_2017_WEB_EDITION_20_CORES" | "SQL_SERVER_2017_WEB_EDITION_22_CORES" | "SQL_SERVER_2017_WEB_EDITION_24_CORES" | "SQL_SERVER_2017_WEB_EDITION_26_CORES" | "SQL_SERVER_2017_WEB_EDITION_28_CORES" | "SQL_SERVER_2017_WEB_EDITION_30_CORES" | "SQL_SERVER_2017_WEB_EDITION_32_CORES" | "SQL_SERVER_2017_WEB_EDITION_4_CORES" | "SQL_SERVER_2017_WEB_EDITION_6_CORES" | "SQL_SERVER_2017_WEB_EDITION_8_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_22_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_26_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_28_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_30_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_34_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_36_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_38_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_40_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_42_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_44_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_46_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_48_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_50_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_52_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_54_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_56_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_58_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_60_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_62_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_64_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2019_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2019_WEB_EDITION_10_CORES" | "SQL_SERVER_2019_WEB_EDITION_12_CORES" | "SQL_SERVER_2019_WEB_EDITION_14_CORES" | "SQL_SERVER_2019_WEB_EDITION_16_CORES" | "SQL_SERVER_2019_WEB_EDITION_18_CORES" | "SQL_SERVER_2019_WEB_EDITION_20_CORES" | "SQL_SERVER_2019_WEB_EDITION_22_CORES" | "SQL_SERVER_2019_WEB_EDITION_24_CORES" | "SQL_SERVER_2019_WEB_EDITION_26_CORES" | "SQL_SERVER_2019_WEB_EDITION_28_CORES" | "SQL_SERVER_2019_WEB_EDITION_30_CORES" | "SQL_SERVER_2019_WEB_EDITION_32_CORES" | "SQL_SERVER_2019_WEB_EDITION_34_CORES" | "SQL_SERVER_2019_WEB_EDITION_36_CORES" | "SQL_SERVER_2019_WEB_EDITION_38_CORES" | "SQL_SERVER_2019_WEB_EDITION_40_CORES" | "SQL_SERVER_2019_WEB_EDITION_42_CORES" | "SQL_SERVER_2019_WEB_EDITION_44_CORES" | "SQL_SERVER_2019_WEB_EDITION_46_CORES" | "SQL_SERVER_2019_WEB_EDITION_48_CORES" | "SQL_SERVER_2019_WEB_EDITION_4_CORES" | "SQL_SERVER_2019_WEB_EDITION_50_CORES" | "SQL_SERVER_2019_WEB_EDITION_52_CORES" | "SQL_SERVER_2019_WEB_EDITION_54_CORES" | "SQL_SERVER_2019_WEB_EDITION_56_CORES" | "SQL_SERVER_2019_WEB_EDITION_58_CORES" | "SQL_SERVER_2019_WEB_EDITION_60_CORES" | "SQL_SERVER_2019_WEB_EDITION_62_CORES" | "SQL_SERVER_2019_WEB_EDITION_64_CORES" | "SQL_SERVER_2019_WEB_EDITION_6_CORES" | "SQL_SERVER_2019_WEB_EDITION_8_CORES" | "sql-server-2008-license-standard-edition-2-cpu" | "sql-server-2008-license-standard-edition-4-cpu" | "sql-server-2008-license-web-edition-2-cpu" | "sql-server-2008-license-web-edition-4-cpu" | "sql-server-2012-license-standard-edition-10-cores" | "sql-server-2012-license-standard-edition-12-cores" | "sql-server-2012-license-standard-edition-16-cores" | "sql-server-2012-license-standard-edition-18-cores" | "sql-server-2012-license-standard-edition-2-cpu" | "sql-server-2012-license-standard-edition-20-cores" | "sql-server-2012-license-standard-edition-24-cores" | "sql-server-2012-license-standard-edition-32-cores" | "sql-server-2012-license-standard-edition-4-cores" | "sql-server-2012-license-standard-edition-6-cores" | "sql-server-2012-license-standard-edition-8-cores" | "sql-server-2012-license-web-edition-10-cores" | "sql-server-2012-license-web-edition-12-cores" | "sql-server-2012-license-web-edition-16-cores" | "sql-server-2012-license-web-edition-18-cores" | "sql-server-2012-license-web-edition-20-cores" | "sql-server-2012-license-web-edition-24-cores" | "sql-server-2012-license-web-edition-32-cores" | "sql-server-2012-license-web-edition-4-cores" | "sql-server-2012-license-web-edition-6-cores" | "sql-server-2012-license-web-edition-8-cores" | "sql-server-2014-license-standard-edition-10-cores" | "sql-server-2014-license-standard-edition-12-cores" | "sql-server-2014-license-standard-edition-16-cores" | "sql-server-2014-license-standard-edition-18-cores" | "sql-server-2014-license-standard-edition-20-cores" | "sql-server-2014-license-standard-edition-24-cores" | "sql-server-2014-license-standard-edition-4-cores" | "sql-server-2014-license-standard-edition-6-cores" | "sql-server-2014-license-standard-edition-8-cores" | "sql-server-2014-license-web-edition-10-cores" | "sql-server-2014-license-web-edition-12-cores" | "sql-server-2014-license-web-edition-16-cores" | "sql-server-2014-license-web-edition-18-cores" | "sql-server-2014-license-web-edition-20-cores" | "sql-server-2014-license-web-edition-24-cores" | "sql-server-2014-license-web-edition-4-cores" | "sql-server-2014-license-web-edition-6-cores" | "sql-server-2014-license-web-edition-8-cores" | "sql-server-2016-license-standard-edition-10-cores" | "sql-server-2016-license-standard-edition-12-cores" | "sql-server-2016-license-standard-edition-14-cores" | "sql-server-2016-license-standard-edition-16-cores" | "sql-server-2016-license-standard-edition-4-cores" | "sql-server-2016-license-standard-edition-6-cores" | "sql-server-2016-license-standard-edition-8-cores" | "sql-server-2016-license-web-edition-10-cores" | "sql-server-2016-license-web-edition-12-cores" | "sql-server-2016-license-web-edition-14-cores" | "sql-server-2016-license-web-edition-16-cores" | "sql-server-2016-license-web-edition-4-cores" | "sql-server-2016-license-web-edition-6-cores" | "sql-server-2016-license-web-edition-8-cores" | "sql-server-2017-license-standard-edition-10-cores" | "sql-server-2017-license-standard-edition-12-cores" | "sql-server-2017-license-standard-edition-14-cores" | "sql-server-2017-license-standard-edition-16-cores" | "sql-server-2017-license-standard-edition-18-cores" | "sql-server-2017-license-standard-edition-20-cores" | "sql-server-2017-license-standard-edition-22-cores" | "sql-server-2017-license-standard-edition-24-cores" | "sql-server-2017-license-standard-edition-26-cores" | "sql-server-2017-license-standard-edition-28-cores" | "sql-server-2017-license-standard-edition-30-cores" | "sql-server-2017-license-standard-edition-32-cores" | "sql-server-2017-license-standard-edition-4-cores" | "sql-server-2017-license-standard-edition-6-cores" | "sql-server-2017-license-standard-edition-8-cores" | "sql-server-2017-license-web-edition-10-cores" | "sql-server-2017-license-web-edition-12-cores" | "sql-server-2017-license-web-edition-14-cores" | "sql-server-2017-license-web-edition-16-cores" | "sql-server-2017-license-web-edition-18-cores" | "sql-server-2017-license-web-edition-20-cores" | "sql-server-2017-license-web-edition-22-cores" | "sql-server-2017-license-web-edition-24-cores" | "sql-server-2017-license-web-edition-26-cores" | "sql-server-2017-license-web-edition-28-cores" | "sql-server-2017-license-web-edition-30-cores" | "sql-server-2017-license-web-edition-32-cores" | "sql-server-2017-license-web-edition-4-cores" | "sql-server-2017-license-web-edition-6-cores" | "sql-server-2017-license-web-edition-8-cores" | "sql-server-2019-license-standard-edition-10-cores" | "sql-server-2019-license-standard-edition-12-cores" | "sql-server-2019-license-standard-edition-14-cores" | "sql-server-2019-license-standard-edition-16-cores" | "sql-server-2019-license-standard-edition-18-cores" | "sql-server-2019-license-standard-edition-20-cores" | "sql-server-2019-license-standard-edition-22-cores" | "sql-server-2019-license-standard-edition-24-cores" | "sql-server-2019-license-standard-edition-26-cores" | "sql-server-2019-license-standard-edition-28-cores" | "sql-server-2019-license-standard-edition-30-cores" | "sql-server-2019-license-standard-edition-32-cores" | "sql-server-2019-license-standard-edition-34-cores" | "sql-server-2019-license-standard-edition-36-cores" | "sql-server-2019-license-standard-edition-38-cores" | "sql-server-2019-license-standard-edition-4-cores" | "sql-server-2019-license-standard-edition-40-cores" | "sql-server-2019-license-standard-edition-42-cores" | "sql-server-2019-license-standard-edition-44-cores" | "sql-server-2019-license-standard-edition-46-cores" | "sql-server-2019-license-standard-edition-48-cores" | "sql-server-2019-license-standard-edition-50-cores" | "sql-server-2019-license-standard-edition-52-cores" | "sql-server-2019-license-standard-edition-54-cores" | "sql-server-2019-license-standard-edition-56-cores" | "sql-server-2019-license-standard-edition-58-cores" | "sql-server-2019-license-standard-edition-6-cores" | "sql-server-2019-license-standard-edition-60-cores" | "sql-server-2019-license-standard-edition-62-cores" | "sql-server-2019-license-standard-edition-64-cores" | "sql-server-2019-license-standard-edition-8-cores" | "sql-server-2019-license-web-edition-10-cores" | "sql-server-2019-license-web-edition-12-cores" | "sql-server-2019-license-web-edition-14-cores" | "sql-server-2019-license-web-edition-16-cores" | "sql-server-2019-license-web-edition-18-cores" | "sql-server-2019-license-web-edition-20-cores" | "sql-server-2019-license-web-edition-22-cores" | "sql-server-2019-license-web-edition-24-cores" | "sql-server-2019-license-web-edition-26-cores" | "sql-server-2019-license-web-edition-28-cores" | "sql-server-2019-license-web-edition-30-cores" | "sql-server-2019-license-web-edition-32-cores" | "sql-server-2019-license-web-edition-34-cores" | "sql-server-2019-license-web-edition-36-cores" | "sql-server-2019-license-web-edition-38-cores" | "sql-server-2019-license-web-edition-4-cores" | "sql-server-2019-license-web-edition-40-cores" | "sql-server-2019-license-web-edition-42-cores" | "sql-server-2019-license-web-edition-44-cores" | "sql-server-2019-license-web-edition-46-cores" | "sql-server-2019-license-web-edition-48-cores" | "sql-server-2019-license-web-edition-50-cores" | "sql-server-2019-license-web-edition-52-cores" | "sql-server-2019-license-web-edition-54-cores" | "sql-server-2019-license-web-edition-56-cores" | "sql-server-2019-license-web-edition-58-cores" | "sql-server-2019-license-web-edition-6-cores" | "sql-server-2019-license-web-edition-60-cores" | "sql-server-2019-license-web-edition-62-cores" | "sql-server-2019-license-web-edition-64-cores" | "sql-server-2019-license-web-edition-8-cores"
    /**
     * All versions for Windows products
     * type fullname: license.WindowsOsVersionEnum
     */
    export type WindowsOsVersionEnum = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2003_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION" | "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION" | "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION" | "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2012_WEB_EDITION" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES" | "windows-server-2008-license-datacenter-edition-1-cpu" | "windows-server-2008-license-datacenter-edition-2-cpu" | "windows-server-2008-license-datacenter-edition-4-cpu" | "windows-server-2008-license-enterprise-edition-1-cpu" | "windows-server-2008-license-enterprise-edition-2-cpu" | "windows-server-2008-license-enterprise-edition-4-cpu" | "windows-server-2008-license-standard-edition-1-cpu" | "windows-server-2008-license-standard-edition-2-cpu" | "windows-server-2008-license-standard-edition-4-cpu" | "windows-server-2008-license-web-edition-1-cpu" | "windows-server-2008-license-web-edition-2-cpu" | "windows-server-2008-license-web-edition-4-cpu" | "windows-server-2012-license-datacenter-edition-1-cpu" | "windows-server-2012-license-datacenter-edition-2-cpu" | "windows-server-2012-license-datacenter-edition-4-cpu" | "windows-server-2012-license-standard-edition-1-cpu" | "windows-server-2012-license-standard-edition-2-cpu" | "windows-server-2012-license-standard-edition-4-cpu" | "windows-server-2016-license-datacenter-edition-1-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-8-cores" | "windows-server-2016-license-standard-edition-1-cpu-10-cores" | "windows-server-2016-license-standard-edition-1-cpu-12-cores" | "windows-server-2016-license-standard-edition-1-cpu-14-cores" | "windows-server-2016-license-standard-edition-1-cpu-16-cores" | "windows-server-2016-license-standard-edition-1-cpu-18-cores" | "windows-server-2016-license-standard-edition-1-cpu-20-cores" | "windows-server-2016-license-standard-edition-1-cpu-22-cores" | "windows-server-2016-license-standard-edition-1-cpu-24-cores" | "windows-server-2016-license-standard-edition-1-cpu-8-cores" | "windows-server-2016-license-standard-edition-2-cpu-10-cores" | "windows-server-2016-license-standard-edition-2-cpu-12-cores" | "windows-server-2016-license-standard-edition-2-cpu-14-cores" | "windows-server-2016-license-standard-edition-2-cpu-16-cores" | "windows-server-2016-license-standard-edition-2-cpu-18-cores" | "windows-server-2016-license-standard-edition-2-cpu-20-cores" | "windows-server-2016-license-standard-edition-2-cpu-22-cores" | "windows-server-2016-license-standard-edition-2-cpu-24-cores" | "windows-server-2016-license-standard-edition-2-cpu-8-cores" | "windows-server-2016-license-standard-edition-4-cpu-10-cores" | "windows-server-2016-license-standard-edition-4-cpu-12-cores" | "windows-server-2016-license-standard-edition-4-cpu-14-cores" | "windows-server-2016-license-standard-edition-4-cpu-16-cores" | "windows-server-2016-license-standard-edition-4-cpu-18-cores" | "windows-server-2016-license-standard-edition-4-cpu-20-cores" | "windows-server-2016-license-standard-edition-4-cpu-22-cores" | "windows-server-2016-license-standard-edition-4-cpu-24-cores" | "windows-server-2016-license-standard-edition-4-cpu-8-cores" | "windows-server-2019-license-datacenter-edition-10-cores" | "windows-server-2019-license-datacenter-edition-12-cores" | "windows-server-2019-license-datacenter-edition-14-cores" | "windows-server-2019-license-datacenter-edition-16-cores" | "windows-server-2019-license-datacenter-edition-18-cores" | "windows-server-2019-license-datacenter-edition-20-cores" | "windows-server-2019-license-datacenter-edition-22-cores" | "windows-server-2019-license-datacenter-edition-24-cores" | "windows-server-2019-license-datacenter-edition-26-cores" | "windows-server-2019-license-datacenter-edition-28-cores" | "windows-server-2019-license-datacenter-edition-30-cores" | "windows-server-2019-license-datacenter-edition-32-cores" | "windows-server-2019-license-datacenter-edition-34-cores" | "windows-server-2019-license-datacenter-edition-36-cores" | "windows-server-2019-license-datacenter-edition-38-cores" | "windows-server-2019-license-datacenter-edition-40-cores" | "windows-server-2019-license-datacenter-edition-42-cores" | "windows-server-2019-license-datacenter-edition-44-cores" | "windows-server-2019-license-datacenter-edition-46-cores" | "windows-server-2019-license-datacenter-edition-48-cores" | "windows-server-2019-license-datacenter-edition-50-cores" | "windows-server-2019-license-datacenter-edition-52-cores" | "windows-server-2019-license-datacenter-edition-54-cores" | "windows-server-2019-license-datacenter-edition-56-cores" | "windows-server-2019-license-datacenter-edition-58-cores" | "windows-server-2019-license-datacenter-edition-60-cores" | "windows-server-2019-license-datacenter-edition-62-cores" | "windows-server-2019-license-datacenter-edition-64-cores" | "windows-server-2019-license-datacenter-edition-8-cores" | "windows-server-2019-license-standard-edition-10-cores" | "windows-server-2019-license-standard-edition-12-cores" | "windows-server-2019-license-standard-edition-14-cores" | "windows-server-2019-license-standard-edition-16-cores" | "windows-server-2019-license-standard-edition-18-cores" | "windows-server-2019-license-standard-edition-20-cores" | "windows-server-2019-license-standard-edition-22-cores" | "windows-server-2019-license-standard-edition-24-cores" | "windows-server-2019-license-standard-edition-26-cores" | "windows-server-2019-license-standard-edition-28-cores" | "windows-server-2019-license-standard-edition-30-cores" | "windows-server-2019-license-standard-edition-32-cores" | "windows-server-2019-license-standard-edition-34-cores" | "windows-server-2019-license-standard-edition-36-cores" | "windows-server-2019-license-standard-edition-38-cores" | "windows-server-2019-license-standard-edition-40-cores" | "windows-server-2019-license-standard-edition-42-cores" | "windows-server-2019-license-standard-edition-44-cores" | "windows-server-2019-license-standard-edition-46-cores" | "windows-server-2019-license-standard-edition-48-cores" | "windows-server-2019-license-standard-edition-50-cores" | "windows-server-2019-license-standard-edition-52-cores" | "windows-server-2019-license-standard-edition-54-cores" | "windows-server-2019-license-standard-edition-56-cores" | "windows-server-2019-license-standard-edition-58-cores" | "windows-server-2019-license-standard-edition-60-cores" | "windows-server-2019-license-standard-edition-62-cores" | "windows-server-2019-license-standard-edition-64-cores" | "windows-server-2019-license-standard-edition-8-cores"
    /**
     * All SQL Server versions for Windows products
     * type fullname: license.WindowsSqlVersionEnum
     */
    export type WindowsSqlVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION" | "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES"
}
export namespace nichandle {
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN"
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
    export type ReductionTypeEnum = "fixed_amount" | "forced_amount" | "percentage"
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
        export type GenericProductPricingCapacitiesEnum = "consumption" | "detach" | "downgrade" | "dynamic" | "installation" | "renew" | "upgrade"
        /**
         * Type of a pricing
         * type fullname: order.cart.GenericProductPricingTypeEnum
         */
        export type GenericProductPricingTypeEnum = "consumption" | "purchase" | "rental"
        /**
         * Type of a product
         * type fullname: order.cart.GenericProductTypeEnum
         */
        export type GenericProductTypeEnum = "cloud_service" | "delivery" | "deposit" | "domain" | "saas_license" | "shipping" | "storage"
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
             * Describe extra informations of product offer
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
    }
}
export namespace veeamCloudConnect {
    /**
     * All orderable Veeam Cloud Connect offers
     * type fullname: veeamCloudConnect.Offer
     */
    export type Offer = "advanced" | "demo" | "starter"
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
    cluster: {
        hadoop: {
            new: {
                /**
                 * Get allowed durations for 'new' option
                 * GET /order/cluster/hadoop/new
                 */
                $get(params: { nodeProfile: string, quantity: number }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(duration: string): {
                    /**
                     * Get prices and contracts information
                     * GET /order/cluster/hadoop/new/{duration}
                     */
                    $get(params: { nodeProfile: string, quantity: number }): Promise<order.Order>;
                    /**
                     * Create order
                     * POST /order/cluster/hadoop/new/{duration}
                     */
                    $post(params: { nodeProfile: string, quantity: number }): Promise<order.Order>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
    }
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
                failoverIP: {
                    /**
                     * Get allowed durations for 'failoverIP' option
                     * GET /order/dedicated/server/{serviceName}/failoverIP
                     */
                    $get(params: { country: dedicated.server.IpCountryEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/failoverIP/{duration}
                         */
                        $get(params: { country: dedicated.server.IpCountryEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/failoverIP/{duration}
                         */
                        $post(params: { country: dedicated.server.IpCountryEnum }): Promise<order.Order>;
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
                ip: {
                    /**
                     * Get allowed durations for 'ip' option
                     * GET /order/dedicated/server/{serviceName}/ip
                     */
                    $get(params: { blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/ip/{duration}
                         */
                        $get(params: { blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/ip/{duration}
                         */
                        $post(params: { blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum }): Promise<order.Order>;
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
                staticIP: {
                    /**
                     * Get allowed durations for 'staticIP' option
                     * GET /order/dedicated/server/{serviceName}/staticIP
                     */
                    $get(params: { country: dedicated.server.IpStaticCountryEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(duration: string): {
                        /**
                         * Get prices and contracts information
                         * GET /order/dedicated/server/{serviceName}/staticIP/{duration}
                         */
                        $get(params: { country: dedicated.server.IpStaticCountryEnum }): Promise<order.Order>;
                        /**
                         * Create order
                         * POST /order/dedicated/server/{serviceName}/staticIP/{duration}
                         */
                        $post(params: { country: dedicated.server.IpStaticCountryEnum }): Promise<order.Order>;
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
         * List available services
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
    }
    veeamCloudConnect: {
        /**
         * List available services
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
}

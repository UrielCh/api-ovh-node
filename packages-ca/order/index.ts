import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /order Models
 * Source: https://ca.api.ovh.com/1.0/order.json
 */
export namespace cdnanycast {
    // type fullname: cdnanycast.OrderCacheRuleEnum
    export type OrderCacheRuleEnum = 100 | 1000
    // type fullname: cdnanycast.OrderQuotaEnum
    export type OrderQuotaEnum = 1 | 10 | 100 | 1000
}
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
export namespace coreTypes {
    // type fullname: coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace dedicated {
    // type fullname: dedicated.NasHAOfferEnum
    export type NasHAOfferEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g"
    // type fullname: dedicated.NasHAZoneEnum
    export type NasHAZoneEnum = "bhs" | "rbx" | "sbg"
    export namespace housing {
        // type fullname: dedicated.housing.HaRoutingOfferEnum
        export type HaRoutingOfferEnum = "ha2x2" | "ha2x4"
    }
    export namespace server {
        // type fullname: dedicated.server.BackupStorageCapacityEnum
        export type BackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000
        // type fullname: dedicated.server.BandwidthOrderEnum
        export type BandwidthOrderEnum = 1000 | 2000 | 3000
        // type fullname: dedicated.server.BandwidthOrderTypeEnum
        export type BandwidthOrderTypeEnum = "platinum" | "premium" | "ultimate"
        // type fullname: dedicated.server.BandwidthvRackOrderEnum
        export type BandwidthvRackOrderEnum = 1000 | 3000
        // type fullname: dedicated.server.FirewallModelEnum
        export type FirewallModelEnum = "asa5505" | "asa5510" | "asa5520"
        // type fullname: dedicated.server.IpBlockSizeEnum
        export type IpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8
        // type fullname: dedicated.server.IpCountryEnum
        export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
        // type fullname: dedicated.server.IpStaticCountryEnum
        export type IpStaticCountryEnum = "be" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "uk"
        // type fullname: dedicated.server.IpTypeOrderableEnum
        export type IpTypeOrderableEnum = "failover" | "static" | "unshielded"
        // type fullname: dedicated.server.OrderableSysFeatureEnum
        export type OrderableSysFeatureEnum = "backupProtocol" | "monitoring"
        // type fullname: dedicated.server.SupportLevelOrderableEnum
        export type SupportLevelOrderableEnum = "critical" | "fastpath" | "gs"
        // type fullname: dedicated.server.TrafficOrderEnum
        export type TrafficOrderEnum = "100Mbps-Unlimited" | "250Mbps-Unlimited" | "500Mbps-Unlimited"
        // type fullname: dedicated.server.UsbKeyCapacityEnum
        export type UsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64
    }
}
export namespace dedicatedCloud {
    // type fullname: dedicatedCloud.AdditionalBandwidthEnum
    export type AdditionalBandwidthEnum = "1500"
    // type fullname: dedicatedCloud.IpCountriesEnum
    export type IpCountriesEnum = "be" | "ca" | "ch" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "us"
    // type fullname: dedicatedCloud.OrderableIpBlockRangeEnum
    export type OrderableIpBlockRangeEnum = "24" | "25" | "26" | "27" | "28"
    export namespace ressources {
        // type fullname: dedicatedCloud.ressources.UpgradeRessourceTypeEnum
        export type UpgradeRessourceTypeEnum = "account" | "all" | "filer" | "host"
        // type fullname: dedicatedCloud.ressources.UpgradeTypeEnum
        export type UpgradeTypeEnum = "demoToMonthly" | "freeSpareToHourly" | "hourlyToMonthly"
    }
}
export namespace email {
    export namespace exchange {
        // type fullname: email.exchange.OutlookVersionEnum
        export type OutlookVersionEnum = "mac_x86_2011" | "mac_x86_2016" | "windows_x64_2013" | "windows_x64_2016" | "windows_x86_2013" | "windows_x86_2016"
        // type fullname: email.exchange.OvhLicenceEnum
        export type OvhLicenceEnum = "basic" | "enterprise" | "standard"
        // type fullname: email.exchange.accountQuotaEnum
        export type accountQuotaEnum = 300 | 50
    }
}
export namespace license {
    // type fullname: license.CloudLinuxVersionEnum
    export type CloudLinuxVersionEnum = "SINGLE" | "WITH_CPANEL" | "WITH_PLESK12" | "cloudlinux-license"
    // type fullname: license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    // type fullname: license.OrderableAntispamEnum
    export type OrderableAntispamEnum = "SPAM_ASSASSIN"
    // type fullname: license.OrderableAntivirusEnum
    export type OrderableAntivirusEnum = "DR_WEB" | "KASPERSKY_UNLIMITED_MAILBOXES" | "kaspersky"
    // type fullname: license.OrderableCpanelVersionEnum
    export type OrderableCpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps" | "version-admin-cloud" | "version-premier-cloud-100" | "version-premier-cloud-1000" | "version-premier-cloud-10000" | "version-premier-cloud-1100" | "version-premier-cloud-1200" | "version-premier-cloud-1300" | "version-premier-cloud-1400" | "version-premier-cloud-1500" | "version-premier-cloud-1600" | "version-premier-cloud-1700" | "version-premier-cloud-1800" | "version-premier-cloud-1900" | "version-premier-cloud-200" | "version-premier-cloud-2000" | "version-premier-cloud-2100" | "version-premier-cloud-2200" | "version-premier-cloud-2300" | "version-premier-cloud-2400" | "version-premier-cloud-2500" | "version-premier-cloud-2600" | "version-premier-cloud-2700" | "version-premier-cloud-2800" | "version-premier-cloud-2900" | "version-premier-cloud-300" | "version-premier-cloud-3000" | "version-premier-cloud-3100" | "version-premier-cloud-3200" | "version-premier-cloud-3300" | "version-premier-cloud-3400" | "version-premier-cloud-3500" | "version-premier-cloud-3600" | "version-premier-cloud-3700" | "version-premier-cloud-3800" | "version-premier-cloud-3900" | "version-premier-cloud-400" | "version-premier-cloud-4000" | "version-premier-cloud-4100" | "version-premier-cloud-4200" | "version-premier-cloud-4300" | "version-premier-cloud-4400" | "version-premier-cloud-4500" | "version-premier-cloud-4600" | "version-premier-cloud-4700" | "version-premier-cloud-4800" | "version-premier-cloud-4900" | "version-premier-cloud-500" | "version-premier-cloud-5000" | "version-premier-cloud-5100" | "version-premier-cloud-5200" | "version-premier-cloud-5300" | "version-premier-cloud-5400" | "version-premier-cloud-5500" | "version-premier-cloud-5600" | "version-premier-cloud-5700" | "version-premier-cloud-5800" | "version-premier-cloud-5900" | "version-premier-cloud-600" | "version-premier-cloud-6000" | "version-premier-cloud-6100" | "version-premier-cloud-6200" | "version-premier-cloud-6300" | "version-premier-cloud-6400" | "version-premier-cloud-6500" | "version-premier-cloud-6600" | "version-premier-cloud-6700" | "version-premier-cloud-6800" | "version-premier-cloud-6900" | "version-premier-cloud-700" | "version-premier-cloud-7000" | "version-premier-cloud-7100" | "version-premier-cloud-7200" | "version-premier-cloud-7300" | "version-premier-cloud-7400" | "version-premier-cloud-7500" | "version-premier-cloud-7600" | "version-premier-cloud-7700" | "version-premier-cloud-7800" | "version-premier-cloud-7900" | "version-premier-cloud-800" | "version-premier-cloud-8000" | "version-premier-cloud-8100" | "version-premier-cloud-8200" | "version-premier-cloud-8300" | "version-premier-cloud-8400" | "version-premier-cloud-8500" | "version-premier-cloud-8600" | "version-premier-cloud-8700" | "version-premier-cloud-8800" | "version-premier-cloud-8900" | "version-premier-cloud-900" | "version-premier-cloud-9000" | "version-premier-cloud-9100" | "version-premier-cloud-9200" | "version-premier-cloud-9300" | "version-premier-cloud-9400" | "version-premier-cloud-9500" | "version-premier-cloud-9600" | "version-premier-cloud-9700" | "version-premier-cloud-9800" | "version-premier-cloud-9900" | "version-premier-cloud-solo" | "version-premier-metal-1000" | "version-premier-metal-10000" | "version-premier-metal-1100" | "version-premier-metal-1200" | "version-premier-metal-1300" | "version-premier-metal-1400" | "version-premier-metal-1500" | "version-premier-metal-1600" | "version-premier-metal-1700" | "version-premier-metal-1800" | "version-premier-metal-1900" | "version-premier-metal-2000" | "version-premier-metal-2100" | "version-premier-metal-2200" | "version-premier-metal-2300" | "version-premier-metal-2400" | "version-premier-metal-2500" | "version-premier-metal-2600" | "version-premier-metal-2700" | "version-premier-metal-2800" | "version-premier-metal-2900" | "version-premier-metal-300" | "version-premier-metal-3000" | "version-premier-metal-3100" | "version-premier-metal-3200" | "version-premier-metal-3300" | "version-premier-metal-3400" | "version-premier-metal-3500" | "version-premier-metal-3600" | "version-premier-metal-3700" | "version-premier-metal-3800" | "version-premier-metal-3900" | "version-premier-metal-400" | "version-premier-metal-4000" | "version-premier-metal-4100" | "version-premier-metal-4200" | "version-premier-metal-4300" | "version-premier-metal-4400" | "version-premier-metal-4500" | "version-premier-metal-4600" | "version-premier-metal-4700" | "version-premier-metal-4800" | "version-premier-metal-4900" | "version-premier-metal-500" | "version-premier-metal-5000" | "version-premier-metal-5100" | "version-premier-metal-5200" | "version-premier-metal-5300" | "version-premier-metal-5400" | "version-premier-metal-5500" | "version-premier-metal-5600" | "version-premier-metal-5700" | "version-premier-metal-5800" | "version-premier-metal-5900" | "version-premier-metal-600" | "version-premier-metal-6000" | "version-premier-metal-6100" | "version-premier-metal-6200" | "version-premier-metal-6300" | "version-premier-metal-6400" | "version-premier-metal-6500" | "version-premier-metal-6600" | "version-premier-metal-6700" | "version-premier-metal-6800" | "version-premier-metal-6900" | "version-premier-metal-700" | "version-premier-metal-7000" | "version-premier-metal-7100" | "version-premier-metal-7200" | "version-premier-metal-7300" | "version-premier-metal-7400" | "version-premier-metal-7500" | "version-premier-metal-7600" | "version-premier-metal-7700" | "version-premier-metal-7800" | "version-premier-metal-7900" | "version-premier-metal-800" | "version-premier-metal-8000" | "version-premier-metal-8100" | "version-premier-metal-8200" | "version-premier-metal-8300" | "version-premier-metal-8400" | "version-premier-metal-8500" | "version-premier-metal-8600" | "version-premier-metal-8700" | "version-premier-metal-8800" | "version-premier-metal-8900" | "version-premier-metal-900" | "version-premier-metal-9000" | "version-premier-metal-9100" | "version-premier-metal-9200" | "version-premier-metal-9300" | "version-premier-metal-9400" | "version-premier-metal-9500" | "version-premier-metal-9600" | "version-premier-metal-9700" | "version-premier-metal-9800" | "version-premier-metal-9900" | "version-premier-metal-solo" | "version-pro-cloud"
    // type fullname: license.OrderableDirectAdminVersionEnum
    export type OrderableDirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    // type fullname: license.OrderablePleskDomainNumberEnum
    export type OrderablePleskDomainNumberEnum = "10" | "100" | "30" | "300" | "hostingsuite" | "unlimited"
    // type fullname: license.OrderablePleskLanguagePackEnum
    export type OrderablePleskLanguagePackEnum = "1" | "1-extra-language-for-plesk12" | "2" | "2-extra-languages-for-plesk12" | "3" | "3-extra-languages-for-plesk12" | "4" | "4-extra-languages-for-plesk12" | "5" | "5-extra-languages-for-plesk12" | "unlimited" | "unlimited-extra-languages-for-plesk12"
    // type fullname: license.OrderableVirtuozzoContainerNumberEnum
    export type OrderableVirtuozzoContainerNumberEnum = "2_CPU_001_CONTAINER" | "2_CPU_003_CONTAINER" | "2_CPU_010_CONTAINER" | "2_CPU_030_CONTAINER" | "2_CPU_060_CONTAINER" | "2_CPU_100_CONTAINER"
    // type fullname: license.OrderableVirtuozzoVersionEnum
    export type OrderableVirtuozzoVersionEnum = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX" | "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS" | "virtuozzo-4" | "virtuozzo-4-for-windows"
    // type fullname: license.PleskApplicationSetEnum
    export type PleskApplicationSetEnum = "applicationpack" | "developerpack" | "power-pack-for-plesk12" | "powerpack"
    // type fullname: license.PleskVersionEnum
    export type PleskVersionEnum = "PLESK_10_AND_LATER" | "PLESK_10_AND_LATER_FOR_KVM" | "PLESK_10_AND_LATER_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN" | "PLESK_10_AND_LATER_FOR_XEN" | "PLESK_12_VPS_WEB_ADMIN" | "PLESK_12_VPS_WEB_APP" | "PLESK_12_VPS_WEB_HOST" | "PLESK_12_VPS_WEB_HOST_CLNX" | "PLESK_12_VPS_WEB_PRO" | "PLESK_12_VPS_WEB_PRO_CLNX" | "PLESK_12_WEB_ADMIN" | "PLESK_12_WEB_APP" | "PLESK_12_WEB_HOST" | "PLESK_12_WEB_HOST_CLNX" | "PLESK_12_WEB_PRO" | "PLESK_12_WEB_PRO_CLNX" | "PLESK_75_RELOADED" | "PLESK_80" | "PLESK_80_FOR_VZ" | "PLESK_81_FOR_WIN" | "PLESK_9" | "PLESK_95" | "PLESK_95_FOR_VZ" | "PLESK_95_FOR_WIN" | "PLESK_9_FOR_VZ" | "PLESK_9_FOR_WIN" | "PLESK_ONYX_VPS_WEB_ADMIN" | "PLESK_ONYX_VPS_WEB_APP" | "PLESK_ONYX_VPS_WEB_HOST" | "PLESK_ONYX_VPS_WEB_HOST_CLNX" | "PLESK_ONYX_VPS_WEB_PRO" | "PLESK_ONYX_VPS_WEB_PRO_CLNX" | "PLESK_ONYX_WEB_ADMIN" | "PLESK_ONYX_WEB_APP" | "PLESK_ONYX_WEB_HOST" | "PLESK_ONYX_WEB_HOST_CLNX" | "PLESK_ONYX_WEB_PRO" | "PLESK_ONYX_WEB_PRO_CLNX" | "plesk-12-webadmin-for-vps" | "plesk-12-webhost" | "plesk-12-webhost-for-vps" | "plesk-12-webpro" | "plesk-12-webpro-for-vps"
    // type fullname: license.SqlServerVersionEnum
    export type SqlServerVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_STANDARD_EDITION_4_CPU" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION_4_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_10_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2014_WEB_EDITION_10_CORES" | "SQL_SERVER_2014_WEB_EDITION_12_CORES" | "SQL_SERVER_2014_WEB_EDITION_16_CORES" | "SQL_SERVER_2014_WEB_EDITION_18_CORES" | "SQL_SERVER_2014_WEB_EDITION_20_CORES" | "SQL_SERVER_2014_WEB_EDITION_24_CORES" | "SQL_SERVER_2014_WEB_EDITION_4_CORES" | "SQL_SERVER_2014_WEB_EDITION_6_CORES" | "SQL_SERVER_2014_WEB_EDITION_8_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2016_WEB_EDITION_10_CORES" | "SQL_SERVER_2016_WEB_EDITION_12_CORES" | "SQL_SERVER_2016_WEB_EDITION_14_CORES" | "SQL_SERVER_2016_WEB_EDITION_16_CORES" | "SQL_SERVER_2016_WEB_EDITION_4_CORES" | "SQL_SERVER_2016_WEB_EDITION_6_CORES" | "SQL_SERVER_2016_WEB_EDITION_8_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_22_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_26_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_28_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_30_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2017_WEB_EDITION_10_CORES" | "SQL_SERVER_2017_WEB_EDITION_12_CORES" | "SQL_SERVER_2017_WEB_EDITION_14_CORES" | "SQL_SERVER_2017_WEB_EDITION_16_CORES" | "SQL_SERVER_2017_WEB_EDITION_18_CORES" | "SQL_SERVER_2017_WEB_EDITION_20_CORES" | "SQL_SERVER_2017_WEB_EDITION_22_CORES" | "SQL_SERVER_2017_WEB_EDITION_24_CORES" | "SQL_SERVER_2017_WEB_EDITION_26_CORES" | "SQL_SERVER_2017_WEB_EDITION_28_CORES" | "SQL_SERVER_2017_WEB_EDITION_30_CORES" | "SQL_SERVER_2017_WEB_EDITION_32_CORES" | "SQL_SERVER_2017_WEB_EDITION_4_CORES" | "SQL_SERVER_2017_WEB_EDITION_6_CORES" | "SQL_SERVER_2017_WEB_EDITION_8_CORES" | "sql-server-2008-license-standard-edition-2-cpu" | "sql-server-2008-license-standard-edition-4-cpu" | "sql-server-2008-license-web-edition-2-cpu" | "sql-server-2008-license-web-edition-4-cpu" | "sql-server-2012-license-standard-edition-10-cores" | "sql-server-2012-license-standard-edition-12-cores" | "sql-server-2012-license-standard-edition-16-cores" | "sql-server-2012-license-standard-edition-18-cores" | "sql-server-2012-license-standard-edition-2-cpu" | "sql-server-2012-license-standard-edition-20-cores" | "sql-server-2012-license-standard-edition-24-cores" | "sql-server-2012-license-standard-edition-32-cores" | "sql-server-2012-license-standard-edition-4-cores" | "sql-server-2012-license-standard-edition-6-cores" | "sql-server-2012-license-standard-edition-8-cores" | "sql-server-2012-license-web-edition-10-cores" | "sql-server-2012-license-web-edition-12-cores" | "sql-server-2012-license-web-edition-16-cores" | "sql-server-2012-license-web-edition-18-cores" | "sql-server-2012-license-web-edition-20-cores" | "sql-server-2012-license-web-edition-24-cores" | "sql-server-2012-license-web-edition-32-cores" | "sql-server-2012-license-web-edition-4-cores" | "sql-server-2012-license-web-edition-6-cores" | "sql-server-2012-license-web-edition-8-cores" | "sql-server-2014-license-standard-edition-10-cores" | "sql-server-2014-license-standard-edition-12-cores" | "sql-server-2014-license-standard-edition-16-cores" | "sql-server-2014-license-standard-edition-18-cores" | "sql-server-2014-license-standard-edition-20-cores" | "sql-server-2014-license-standard-edition-24-cores" | "sql-server-2014-license-standard-edition-4-cores" | "sql-server-2014-license-standard-edition-6-cores" | "sql-server-2014-license-standard-edition-8-cores" | "sql-server-2014-license-web-edition-10-cores" | "sql-server-2014-license-web-edition-12-cores" | "sql-server-2014-license-web-edition-16-cores" | "sql-server-2014-license-web-edition-18-cores" | "sql-server-2014-license-web-edition-20-cores" | "sql-server-2014-license-web-edition-24-cores" | "sql-server-2014-license-web-edition-4-cores" | "sql-server-2014-license-web-edition-6-cores" | "sql-server-2014-license-web-edition-8-cores" | "sql-server-2016-license-standard-edition-10-cores" | "sql-server-2016-license-standard-edition-12-cores" | "sql-server-2016-license-standard-edition-14-cores" | "sql-server-2016-license-standard-edition-16-cores" | "sql-server-2016-license-standard-edition-4-cores" | "sql-server-2016-license-standard-edition-6-cores" | "sql-server-2016-license-standard-edition-8-cores" | "sql-server-2016-license-web-edition-10-cores" | "sql-server-2016-license-web-edition-12-cores" | "sql-server-2016-license-web-edition-14-cores" | "sql-server-2016-license-web-edition-16-cores" | "sql-server-2016-license-web-edition-4-cores" | "sql-server-2016-license-web-edition-6-cores" | "sql-server-2016-license-web-edition-8-cores" | "sql-server-2017-license-standard-edition-10-cores" | "sql-server-2017-license-standard-edition-12-cores" | "sql-server-2017-license-standard-edition-14-cores" | "sql-server-2017-license-standard-edition-16-cores" | "sql-server-2017-license-standard-edition-18-cores" | "sql-server-2017-license-standard-edition-20-cores" | "sql-server-2017-license-standard-edition-22-cores" | "sql-server-2017-license-standard-edition-24-cores" | "sql-server-2017-license-standard-edition-26-cores" | "sql-server-2017-license-standard-edition-28-cores" | "sql-server-2017-license-standard-edition-30-cores" | "sql-server-2017-license-standard-edition-32-cores" | "sql-server-2017-license-standard-edition-4-cores" | "sql-server-2017-license-standard-edition-6-cores" | "sql-server-2017-license-standard-edition-8-cores" | "sql-server-2017-license-web-edition-10-cores" | "sql-server-2017-license-web-edition-12-cores" | "sql-server-2017-license-web-edition-14-cores" | "sql-server-2017-license-web-edition-16-cores" | "sql-server-2017-license-web-edition-18-cores" | "sql-server-2017-license-web-edition-20-cores" | "sql-server-2017-license-web-edition-22-cores" | "sql-server-2017-license-web-edition-24-cores" | "sql-server-2017-license-web-edition-26-cores" | "sql-server-2017-license-web-edition-28-cores" | "sql-server-2017-license-web-edition-30-cores" | "sql-server-2017-license-web-edition-32-cores" | "sql-server-2017-license-web-edition-4-cores" | "sql-server-2017-license-web-edition-6-cores" | "sql-server-2017-license-web-edition-8-cores"
    // type fullname: license.WindowsOsVersionEnum
    export type WindowsOsVersionEnum = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2003_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION" | "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION" | "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION" | "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2012_WEB_EDITION" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES" | "windows-server-2008-license-datacenter-edition-1-cpu" | "windows-server-2008-license-datacenter-edition-2-cpu" | "windows-server-2008-license-datacenter-edition-4-cpu" | "windows-server-2008-license-enterprise-edition-1-cpu" | "windows-server-2008-license-enterprise-edition-2-cpu" | "windows-server-2008-license-enterprise-edition-4-cpu" | "windows-server-2008-license-standard-edition-1-cpu" | "windows-server-2008-license-standard-edition-2-cpu" | "windows-server-2008-license-standard-edition-4-cpu" | "windows-server-2008-license-web-edition-1-cpu" | "windows-server-2008-license-web-edition-2-cpu" | "windows-server-2008-license-web-edition-4-cpu" | "windows-server-2012-license-datacenter-edition-1-cpu" | "windows-server-2012-license-datacenter-edition-2-cpu" | "windows-server-2012-license-datacenter-edition-4-cpu" | "windows-server-2012-license-standard-edition-1-cpu" | "windows-server-2012-license-standard-edition-2-cpu" | "windows-server-2012-license-standard-edition-4-cpu" | "windows-server-2016-license-datacenter-edition-1-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-8-cores" | "windows-server-2016-license-standard-edition-1-cpu-10-cores" | "windows-server-2016-license-standard-edition-1-cpu-12-cores" | "windows-server-2016-license-standard-edition-1-cpu-14-cores" | "windows-server-2016-license-standard-edition-1-cpu-16-cores" | "windows-server-2016-license-standard-edition-1-cpu-18-cores" | "windows-server-2016-license-standard-edition-1-cpu-20-cores" | "windows-server-2016-license-standard-edition-1-cpu-22-cores" | "windows-server-2016-license-standard-edition-1-cpu-24-cores" | "windows-server-2016-license-standard-edition-1-cpu-8-cores" | "windows-server-2016-license-standard-edition-2-cpu-10-cores" | "windows-server-2016-license-standard-edition-2-cpu-12-cores" | "windows-server-2016-license-standard-edition-2-cpu-14-cores" | "windows-server-2016-license-standard-edition-2-cpu-16-cores" | "windows-server-2016-license-standard-edition-2-cpu-18-cores" | "windows-server-2016-license-standard-edition-2-cpu-20-cores" | "windows-server-2016-license-standard-edition-2-cpu-22-cores" | "windows-server-2016-license-standard-edition-2-cpu-24-cores" | "windows-server-2016-license-standard-edition-2-cpu-8-cores" | "windows-server-2016-license-standard-edition-4-cpu-10-cores" | "windows-server-2016-license-standard-edition-4-cpu-12-cores" | "windows-server-2016-license-standard-edition-4-cpu-14-cores" | "windows-server-2016-license-standard-edition-4-cpu-16-cores" | "windows-server-2016-license-standard-edition-4-cpu-18-cores" | "windows-server-2016-license-standard-edition-4-cpu-20-cores" | "windows-server-2016-license-standard-edition-4-cpu-22-cores" | "windows-server-2016-license-standard-edition-4-cpu-24-cores" | "windows-server-2016-license-standard-edition-4-cpu-8-cores" | "windows-server-2019-license-datacenter-edition-10-cores" | "windows-server-2019-license-datacenter-edition-12-cores" | "windows-server-2019-license-datacenter-edition-14-cores" | "windows-server-2019-license-datacenter-edition-16-cores" | "windows-server-2019-license-datacenter-edition-18-cores" | "windows-server-2019-license-datacenter-edition-20-cores" | "windows-server-2019-license-datacenter-edition-22-cores" | "windows-server-2019-license-datacenter-edition-24-cores" | "windows-server-2019-license-datacenter-edition-26-cores" | "windows-server-2019-license-datacenter-edition-28-cores" | "windows-server-2019-license-datacenter-edition-30-cores" | "windows-server-2019-license-datacenter-edition-32-cores" | "windows-server-2019-license-datacenter-edition-34-cores" | "windows-server-2019-license-datacenter-edition-36-cores" | "windows-server-2019-license-datacenter-edition-38-cores" | "windows-server-2019-license-datacenter-edition-40-cores" | "windows-server-2019-license-datacenter-edition-42-cores" | "windows-server-2019-license-datacenter-edition-44-cores" | "windows-server-2019-license-datacenter-edition-46-cores" | "windows-server-2019-license-datacenter-edition-48-cores" | "windows-server-2019-license-datacenter-edition-50-cores" | "windows-server-2019-license-datacenter-edition-52-cores" | "windows-server-2019-license-datacenter-edition-54-cores" | "windows-server-2019-license-datacenter-edition-56-cores" | "windows-server-2019-license-datacenter-edition-58-cores" | "windows-server-2019-license-datacenter-edition-60-cores" | "windows-server-2019-license-datacenter-edition-62-cores" | "windows-server-2019-license-datacenter-edition-64-cores" | "windows-server-2019-license-datacenter-edition-8-cores" | "windows-server-2019-license-standard-edition-10-cores" | "windows-server-2019-license-standard-edition-12-cores" | "windows-server-2019-license-standard-edition-14-cores" | "windows-server-2019-license-standard-edition-16-cores" | "windows-server-2019-license-standard-edition-18-cores" | "windows-server-2019-license-standard-edition-20-cores" | "windows-server-2019-license-standard-edition-22-cores" | "windows-server-2019-license-standard-edition-24-cores" | "windows-server-2019-license-standard-edition-26-cores" | "windows-server-2019-license-standard-edition-28-cores" | "windows-server-2019-license-standard-edition-30-cores" | "windows-server-2019-license-standard-edition-32-cores" | "windows-server-2019-license-standard-edition-34-cores" | "windows-server-2019-license-standard-edition-36-cores" | "windows-server-2019-license-standard-edition-38-cores" | "windows-server-2019-license-standard-edition-40-cores" | "windows-server-2019-license-standard-edition-42-cores" | "windows-server-2019-license-standard-edition-44-cores" | "windows-server-2019-license-standard-edition-46-cores" | "windows-server-2019-license-standard-edition-48-cores" | "windows-server-2019-license-standard-edition-50-cores" | "windows-server-2019-license-standard-edition-52-cores" | "windows-server-2019-license-standard-edition-54-cores" | "windows-server-2019-license-standard-edition-56-cores" | "windows-server-2019-license-standard-edition-58-cores" | "windows-server-2019-license-standard-edition-60-cores" | "windows-server-2019-license-standard-edition-62-cores" | "windows-server-2019-license-standard-edition-64-cores" | "windows-server-2019-license-standard-edition-8-cores"
    // type fullname: license.WindowsSqlVersionEnum
    export type WindowsSqlVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION" | "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES"
    // type fullname: license.WorkLightVersionEnum
    export type WorkLightVersionEnum = "VERSION-6.1U.1CPU" | "VERSION-6.1U.2CPU" | "VERSION-6.2U.1CPU" | "VERSION-6.2U.2CPU" | "VERSION-6.EVALUATION" | "worklight-license-version-6-1cpu-1u" | "worklight-license-version-6-1cpu-2u" | "worklight-license-version-6-2cpu-1u" | "worklight-license-version-6-2cpu-2u"
}
export namespace nichandle {
    // type fullname: nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    // type fullname: nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "QC" | "SG" | "WE" | "WS"
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
    // type fullname: order.OrderDetailTypeEnum
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    // interface fullName: order.OrderPrices.OrderPrices
    export interface OrderPrices {
        originalWithoutTax?: order.Price;
        reduction?: order.Price;
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
    // interface fullName: order.Reduction.Reduction
    export interface Reduction {
        context: order.ReductionContextEnum;
        price: order.Price;
        type: order.ReductionTypeEnum;
        value: order.Price;
    }
    // type fullname: order.ReductionContextEnum
    export type ReductionContextEnum = "promotion" | "voucher"
    // type fullname: order.ReductionTypeEnum
    export type ReductionTypeEnum = "percentage" | "forced_amount" | "fixed_amount"
    export namespace cart {
        // interface fullName: order.cart.Cart.Cart
        export interface Cart {
            cartId: string;
            description: string;
            expire?: string;
            items: number[];
            readOnly: boolean;
        }
        // interface fullName: order.cart.Checkout.Checkout
        export interface Checkout {
            autoPayWithPreferredPaymentMethod: boolean;
            waiveRetractationPeriod: boolean;
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
        // interface fullName: order.cart.CouponCreation.CouponCreation
        export interface CouponCreation {
            coupon: string;
        }
        // interface fullName: order.cart.Creation.Creation
        export interface Creation {
            description: string;
            expire: string;
            ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
        }
        // interface fullName: order.cart.DomainSettings.DomainSettings
        export interface DomainSettings {
            domain: string;
        }
        // type fullname: order.cart.DurationUnitEnum
        export type DurationUnitEnum = "month" | "day" | "none"
        // interface fullName: order.cart.GenericDedicatedCreation.GenericDedicatedCreation
        export interface GenericDedicatedCreation {
            duration: string;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        // interface fullName: order.cart.GenericDedicatedOptionsCreation.GenericDedicatedOptionsCreation
        export interface GenericDedicatedOptionsCreation {
            duration: string;
            itemId: number;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        // interface fullName: order.cart.GenericOptionCreation.GenericOptionCreation
        export interface GenericOptionCreation {
            duration: string;
            itemId: number;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
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
        // interface fullName: order.cart.GenericProductCreation.GenericProductCreation
        export interface GenericProductCreation {
            duration: string;
            planCode: string;
            pricingMode: string;
            quantity: number;
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
        // interface fullName: order.cart.ItemConfigurationCreation.ItemConfigurationCreation
        export interface ItemConfigurationCreation {
            label: string;
            value: string;
        }
        // interface fullName: order.cart.ItemUpdate.ItemUpdate
        export interface ItemUpdate {
            duration: string;
            quantity: number;
        }
        // interface fullName: order.cart.Price.Price
        export interface Price {
            label: order.cart.PriceLabelEnum;
            price: order.Price;
        }
        // type fullname: order.cart.PriceLabelEnum
        export type PriceLabelEnum = "PRICE" | "DISCOUNT" | "FEE" | "TOTAL" | "RENEW"
        // interface fullName: order.cart.Update.Update
        export interface Update {
            description: string;
            expire: string;
        }
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
        export namespace privateCloud {
            // interface fullName: order.catalog.privateCloud.Capabilities.Capabilities
            export interface Capabilities {
                hds: boolean;
                hipaa: boolean;
                nsx: boolean;
                pcidss: boolean;
                vrops: boolean;
            }
            // interface fullName: order.catalog.privateCloud.CapabilitiesListing.CapabilitiesListing
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
            // interface fullName: order.catalog.privateCloud.Catalog.Catalog
            export interface Catalog {
                catalogId: number;
                catalogName: string;
                defaultHypervisor: string;
                defaultZone: string;
                merchantCode: string;
                options: order.catalog.privateCloud.CapabilitiesListing;
                zones: order.catalog.privateCloud.ZonesListing;
            }
            // interface fullName: order.catalog.privateCloud.Zone.Zone
            export interface Zone {
                cityName: string;
                country: string;
                defaultHypervisor: string;
                defaultVersion: string;
                internalName: string;
                plans: order.catalog.ProductPlan[];
            }
            // interface fullName: order.catalog.privateCloud.ZonesListing.ZonesListing
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
export namespace veeamCloudConnect {
    // type fullname: veeamCloudConnect.Offer
    export type Offer = "advanced" | "demo" | "starter"
}
export namespace vps {
    // type fullname: vps.PleskLicenseDomainNumberEnum
    export type PleskLicenseDomainNumberEnum = "10" | "100" | "300" | "hostingsuite"
    export namespace additionalDisk {
        // type fullname: vps.additionalDisk.AdditionalDiskSizeEnum
        export type AdditionalDiskSizeEnum = "100" | "200" | "50" | "500"
    }
    export namespace ip {
        // type fullname: vps.ip.GeolocationEnum
        export type GeolocationEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
    }
}
export namespace vrack {
    // type fullname: vrack.BlockCountryEnum
    export type BlockCountryEnum = "be" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "uk"
    // type fullname: vrack.BlockSizeEnum
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
 * Api Proxy model
 */// Apis harmony
// path /order
export interface Order {
    cart: {
        // GET /order/cart
        $get(params?: { description?: string }): Promise<string[]>;
        // POST /order/cart
        $post(params: { description?: string, expire?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.cart.Cart>;
        $(cartId: string): {
            // DELETE /order/cart/{cartId}
            $delete(): Promise<void>;
            // GET /order/cart/{cartId}
            $get(): Promise<order.cart.Cart>;
            // PUT /order/cart/{cartId}
            $put(params?: { description?: string, expire?: string }): Promise<order.cart.Cart>;
            assign: {
                // POST /order/cart/{cartId}/assign
                $post(): Promise<void>;
            }
            baremetalServers: {
                // GET /order/cart/{cartId}/baremetalServers
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/baremetalServers
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/baremetalServers/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/baremetalServers/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            cephaas: {
                // GET /order/cart/{cartId}/cephaas
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cephaas
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/cephaas/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cephaas/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            checkout: {
                // GET /order/cart/{cartId}/checkout
                $get(): Promise<order.Order>;
                // POST /order/cart/{cartId}/checkout
                $post(params?: { autoPayWithPreferredPaymentMethod?: boolean, waiveRetractationPeriod?: boolean }): Promise<order.Order>;
            }
            cloud: {
                // GET /order/cart/{cartId}/cloud
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cloud
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/cloud/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cloud/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            coupon: {
                // DELETE /order/cart/{cartId}/coupon
                $delete(params: { coupon: string }): Promise<void>;
                // GET /order/cart/{cartId}/coupon
                $get(): Promise<string[]>;
                // POST /order/cart/{cartId}/coupon
                $post(params: { coupon: string }): Promise<string[]>;
            }
            dedicated: {
                // GET /order/cart/{cartId}/dedicated
                $get(params?: { family?: string, planCode?: string }): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicated
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/dedicated/options
                    $get(params: { family?: string, planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicated/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            dedicatedDirectSales: {
                // GET /order/cart/{cartId}/dedicatedDirectSales
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicatedDirectSales
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/dedicatedDirectSales/options
                    $get(): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicatedDirectSales/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            dedicatedLabs: {
                // GET /order/cart/{cartId}/dedicatedLabs
                $get(params?: { planCode?: string }): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicatedLabs
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/dedicatedLabs/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicatedLabs/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            dedicatedReseller: {
                // GET /order/cart/{cartId}/dedicatedReseller
                $get(params?: { family?: string, planCode?: string }): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicatedReseller
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/dedicatedReseller/options
                    $get(params: { family?: string, planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicatedReseller/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            deskaas: {
                // GET /order/cart/{cartId}/deskaas
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/deskaas
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            discover: {
                // GET /order/cart/{cartId}/discover
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/discover
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/discover/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/discover/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            enterpriseCloudDatabases: {
                // GET /order/cart/{cartId}/enterpriseCloudDatabases
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/enterpriseCloudDatabases
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/enterpriseCloudDatabases/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/enterpriseCloudDatabases/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            exchange: {
                // GET /order/cart/{cartId}/exchange
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/exchange
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/exchange/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/exchange/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            ip: {
                // GET /order/cart/{cartId}/ip
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ip
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/ip/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/ip/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            ipLoadbalancing: {
                // GET /order/cart/{cartId}/ipLoadbalancing
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ipLoadbalancing
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/ipLoadbalancing/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/ipLoadbalancing/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
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
                    $put(params?: { duration?: string, quantity?: number }): Promise<order.cart.Item>;
                    configuration: {
                        // GET /order/cart/{cartId}/item/{itemId}/configuration
                        $get(params?: { label?: string }): Promise<number[]>;
                        // POST /order/cart/{cartId}/item/{itemId}/configuration
                        $post(params: { label: string, value: string }): Promise<order.cart.ConfigurationItem>;
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
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            licenseDirectadmin: {
                // GET /order/cart/{cartId}/licenseDirectadmin
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseDirectadmin
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            licensePlesk: {
                // GET /order/cart/{cartId}/licensePlesk
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licensePlesk
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/licensePlesk/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/licensePlesk/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            licenseSqlServer: {
                // GET /order/cart/{cartId}/licenseSqlServer
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseSqlServer
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            licenseVirtuozzo: {
                // GET /order/cart/{cartId}/licenseVirtuozzo
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseVirtuozzo
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            licenseWindows: {
                // GET /order/cart/{cartId}/licenseWindows
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseWindows
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            licenseWorklight: {
                // GET /order/cart/{cartId}/licenseWorklight
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseWorklight
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            licensecPanel: {
                // GET /order/cart/{cartId}/licensecPanel
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licensecPanel
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            nasha: {
                // GET /order/cart/{cartId}/nasha
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/nasha
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/nasha/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/nasha/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            office365: {
                // GET /order/cart/{cartId}/office365
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/office365
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/office365/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/office365/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            privateCloud: {
                // GET /order/cart/{cartId}/privateCloud
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloud
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloud/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloud/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            privateCloudCDI: {
                // GET /order/cart/{cartId}/privateCloudCDI
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudCDI
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudCDI/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudCDI/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            privateCloudDC: {
                // GET /order/cart/{cartId}/privateCloudDC
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudDC
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudDC/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudDC/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            privateCloudReseller: {
                // GET /order/cart/{cartId}/privateCloudReseller
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudReseller
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudReseller/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudReseller/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            privateCloudResellerEnterprise: {
                // GET /order/cart/{cartId}/privateCloudResellerEnterprise
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudResellerEnterprise
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudResellerEnterprise/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudResellerEnterprise/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            privateCloudSDDC: {
                // GET /order/cart/{cartId}/privateCloudSDDC
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudSDDC
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudSDDC/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudSDDC/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            sslGateway: {
                // GET /order/cart/{cartId}/sslGateway
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sslGateway
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/sslGateway/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/sslGateway/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            summary: {
                // GET /order/cart/{cartId}/summary
                $get(): Promise<order.Order>;
            }
            support: {
                // GET /order/cart/{cartId}/support
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/support
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            veeamcc: {
                // GET /order/cart/{cartId}/veeamcc
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/veeamcc
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            vps: {
                // GET /order/cart/{cartId}/vps
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vps
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/vps/options
                    $get(params: { planCode: string }): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/vps/options
                    $post(params: { duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
                }
            }
            vrack: {
                // GET /order/cart/{cartId}/vrack
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vrack
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
            vrackReseller: {
                // GET /order/cart/{cartId}/vrackReseller
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vrackReseller
                $post(params: { duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            }
        };
    }
    cartServiceOption: {
        baremetalServers: {
            // GET /order/cartServiceOption/baremetalServers
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/baremetalServers/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/baremetalServers/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        cloud: {
            // GET /order/cartServiceOption/cloud
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/cloud/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/cloud/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        dedicated: {
            // GET /order/cartServiceOption/dedicated
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/dedicated/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/dedicated/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        ipLoadbalancing: {
            // GET /order/cartServiceOption/ipLoadbalancing
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/ipLoadbalancing/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/ipLoadbalancing/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        privateCloud: {
            // GET /order/cartServiceOption/privateCloud
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloud/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloud/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        privateCloudReseller: {
            // GET /order/cartServiceOption/privateCloudReseller
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloudReseller/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloudReseller/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        privateCloudResellerEnterprise: {
            // GET /order/cartServiceOption/privateCloudResellerEnterprise
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        sharepoint: {
            // GET /order/cartServiceOption/sharepoint
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/sharepoint/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/sharepoint/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        sslGateway: {
            // GET /order/cartServiceOption/sslGateway
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/sslGateway/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/sslGateway/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
        vps: {
            // GET /order/cartServiceOption/vps
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/vps/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/vps/{serviceName}
                $post(params: { cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number }): Promise<order.cart.Item>;
            };
        }
    }
    catalog: {
        formatted: {
            // GET /order/catalog/formatted
            $get(): Promise<string[]>;
            cloud: {
                // GET /order/catalog/formatted/cloud
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            dedicated: {
                // GET /order/catalog/formatted/dedicated
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            deskaas: {
                // GET /order/catalog/formatted/deskaas
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            discover: {
                // GET /order/catalog/formatted/discover
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            ip: {
                // GET /order/catalog/formatted/ip
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            licenseCloudLinux: {
                // GET /order/catalog/formatted/licenseCloudLinux
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            licenseDirectadmin: {
                // GET /order/catalog/formatted/licenseDirectadmin
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            licensePlesk: {
                // GET /order/catalog/formatted/licensePlesk
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            licenseSqlServer: {
                // GET /order/catalog/formatted/licenseSqlServer
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            licenseVirtuozzo: {
                // GET /order/catalog/formatted/licenseVirtuozzo
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            licenseWindows: {
                // GET /order/catalog/formatted/licenseWindows
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            licenseWorklight: {
                // GET /order/catalog/formatted/licenseWorklight
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            licensecPanel: {
                // GET /order/catalog/formatted/licensecPanel
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            logs: {
                // GET /order/catalog/formatted/logs
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            privateCloud: {
                // GET /order/catalog/formatted/privateCloud
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.pcc.Catalog>;
            }
            privateCloudCDI: {
                // GET /order/catalog/formatted/privateCloudCDI
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.privateCloud.Catalog>;
            }
            privateCloudDC: {
                // GET /order/catalog/formatted/privateCloudDC
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.privateCloud.Catalog>;
            }
            privateCloudReseller: {
                // GET /order/catalog/formatted/privateCloudReseller
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.pcc.Catalog>;
            }
            privateCloudResellerEnterprise: {
                // GET /order/catalog/formatted/privateCloudResellerEnterprise
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.pcc.Catalog>;
            }
            privateCloudSDDC: {
                // GET /order/catalog/formatted/privateCloudSDDC
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.privateCloud.Catalog>;
            }
            reseller: {
                // GET /order/catalog/formatted/reseller
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
            vps: {
                // GET /order/catalog/formatted/vps
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.Catalog>;
            }
        }
        public: {
            baremetalServers: {
                // GET /order/catalog/public/baremetalServers
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.DedicatedServerCatalog>;
            }
            cloud: {
                // GET /order/catalog/public/cloud
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
            }
            enterpriseCloudDatabases: {
                // GET /order/catalog/public/enterpriseCloudDatabases
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
            }
            privateSQL: {
                // GET /order/catalog/public/privateSQL
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
            }
            webHosting: {
                // GET /order/catalog/public/webHosting
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum }): Promise<order.catalog.publik.Catalog>;
            }
        }
    }
    cdn: {
        dedicated: {
            // GET /order/cdn/dedicated
            $get(): Promise<string[]>;
            new: {
                // GET /order/cdn/dedicated/new
                $get(): Promise<string[]>;
                $(duration: string): {
                    // GET /order/cdn/dedicated/new/{duration}
                    $get(): Promise<order.Order>;
                    // POST /order/cdn/dedicated/new/{duration}
                    $post(): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/cdn/dedicated/{serviceName}
                $get(): Promise<string[]>;
                backend: {
                    // GET /order/cdn/dedicated/{serviceName}/backend
                    $get(params: { backend: number }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/cdn/dedicated/{serviceName}/backend/{duration}
                        $get(params: { backend: number }): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/backend/{duration}
                        $post(params: { backend: number }): Promise<order.Order>;
                    };
                }
                cacheRule: {
                    // GET /order/cdn/dedicated/{serviceName}/cacheRule
                    $get(params: { cacheRule: cdnanycast.OrderCacheRuleEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/cdn/dedicated/{serviceName}/cacheRule/{duration}
                        $get(params: { cacheRule: cdnanycast.OrderCacheRuleEnum }): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/cacheRule/{duration}
                        $post(params: { cacheRule: cdnanycast.OrderCacheRuleEnum }): Promise<order.Order>;
                    };
                }
                quota: {
                    // GET /order/cdn/dedicated/{serviceName}/quota
                    $get(params: { quota: cdnanycast.OrderQuotaEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/cdn/dedicated/{serviceName}/quota/{duration}
                        $get(params: { quota: cdnanycast.OrderQuotaEnum }): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/quota/{duration}
                        $post(params: { quota: cdnanycast.OrderQuotaEnum }): Promise<order.Order>;
                    };
                }
            };
        }
    }
    cloud: {
        project: {
            // GET /order/cloud/project
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cloud/project/{serviceName}
                $get(): Promise<string[]>;
                credit: {
                    // GET /order/cloud/project/{serviceName}/credit
                    $get(params: { amount: number }): Promise<order.Order>;
                    // POST /order/cloud/project/{serviceName}/credit
                    $post(params: { amount: number }): Promise<order.Order>;
                }
                ip: {
                    // GET /order/cloud/project/{serviceName}/ip
                    $get(params: { country?: vps.ip.GeolocationEnum, instanceId: string, quantity: number }): Promise<order.Order>;
                    // POST /order/cloud/project/{serviceName}/ip
                    $post(params: { country?: vps.ip.GeolocationEnum, instanceId: string, quantity: number }): Promise<order.Order>;
                }
            };
        }
    }
    dedicated: {
        housing: {
            // GET /order/dedicated/housing
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/dedicated/housing/{serviceName}
                $get(): Promise<string[]>;
                APC: {
                    // GET /order/dedicated/housing/{serviceName}/APC
                    $get(): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/housing/{serviceName}/APC/{duration}
                        $get(): Promise<order.Order>;
                        // POST /order/dedicated/housing/{serviceName}/APC/{duration}
                        $post(): Promise<order.Order>;
                    };
                }
            };
        }
        nasha: {
            new: {
                // GET /order/dedicated/nasha/new
                $get(params: { datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicated/nasha/new/{duration}
                    $get(params: { datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum }): Promise<order.Order>;
                    // POST /order/dedicated/nasha/new/{duration}
                    $post(params: { datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum }): Promise<order.Order>;
                };
            }
        }
        server: {
            // GET /order/dedicated/server
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/dedicated/server/{serviceName}
                $get(): Promise<string[]>;
                backupStorage: {
                    // GET /order/dedicated/server/{serviceName}/backupStorage
                    $get(params: { capacity: dedicated.server.BackupStorageCapacityEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/backupStorage/{duration}
                        $get(params: { capacity: dedicated.server.BackupStorageCapacityEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/backupStorage/{duration}
                        $post(params: { capacity: dedicated.server.BackupStorageCapacityEnum }): Promise<order.Order>;
                    };
                }
                bandwidth: {
                    // GET /order/dedicated/server/{serviceName}/bandwidth
                    $get(params: { bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/bandwidth/{duration}
                        $get(params: { bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/bandwidth/{duration}
                        $post(params: { bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum }): Promise<order.Order>;
                    };
                }
                bandwidthvRack: {
                    // GET /order/dedicated/server/{serviceName}/bandwidthvRack
                    $get(params: { bandwidth: dedicated.server.BandwidthvRackOrderEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/bandwidthvRack/{duration}
                        $get(params: { bandwidth: dedicated.server.BandwidthvRackOrderEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/bandwidthvRack/{duration}
                        $post(params: { bandwidth: dedicated.server.BandwidthvRackOrderEnum }): Promise<order.Order>;
                    };
                }
                failoverIP: {
                    // GET /order/dedicated/server/{serviceName}/failoverIP
                    $get(params: { country: dedicated.server.IpCountryEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/failoverIP/{duration}
                        $get(params: { country: dedicated.server.IpCountryEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/failoverIP/{duration}
                        $post(params: { country: dedicated.server.IpCountryEnum }): Promise<order.Order>;
                    };
                }
                feature: {
                    // GET /order/dedicated/server/{serviceName}/feature
                    $get(params: { feature: dedicated.server.OrderableSysFeatureEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/feature/{duration}
                        $get(params: { feature: dedicated.server.OrderableSysFeatureEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/feature/{duration}
                        $post(params: { feature: dedicated.server.OrderableSysFeatureEnum }): Promise<order.Order>;
                    };
                }
                firewall: {
                    // GET /order/dedicated/server/{serviceName}/firewall
                    $get(params: { firewallModel: dedicated.server.FirewallModelEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/firewall/{duration}
                        $get(params: { firewallModel: dedicated.server.FirewallModelEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/firewall/{duration}
                        $post(params: { firewallModel: dedicated.server.FirewallModelEnum }): Promise<order.Order>;
                    };
                }
                ip: {
                    // GET /order/dedicated/server/{serviceName}/ip
                    $get(params: { blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/ip/{duration}
                        $get(params: { blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/ip/{duration}
                        $post(params: { blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum }): Promise<order.Order>;
                    };
                }
                ipMigration: {
                    // GET /order/dedicated/server/{serviceName}/ipMigration
                    $get(params: { ip: string, token: string }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/ipMigration/{duration}
                        $get(params: { ip: string, token: string }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/ipMigration/{duration}
                        $post(params: { ip: string, token: string }): Promise<order.Order>;
                    };
                }
                kvm: {
                    // GET /order/dedicated/server/{serviceName}/kvm
                    $get(): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/kvm/{duration}
                        $get(): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/kvm/{duration}
                        $post(): Promise<order.Order>;
                    };
                }
                kvmExpress: {
                    // GET /order/dedicated/server/{serviceName}/kvmExpress
                    $get(): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/kvmExpress/{duration}
                        $get(): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/kvmExpress/{duration}
                        $post(): Promise<order.Order>;
                    };
                }
                professionalUse: {
                    // GET /order/dedicated/server/{serviceName}/professionalUse
                    $get(): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/professionalUse/{duration}
                        $get(): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/professionalUse/{duration}
                        $post(): Promise<order.Order>;
                    };
                }
                staticIP: {
                    // GET /order/dedicated/server/{serviceName}/staticIP
                    $get(params: { country: dedicated.server.IpStaticCountryEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/staticIP/{duration}
                        $get(params: { country: dedicated.server.IpStaticCountryEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/staticIP/{duration}
                        $post(params: { country: dedicated.server.IpStaticCountryEnum }): Promise<order.Order>;
                    };
                }
                traffic: {
                    // GET /order/dedicated/server/{serviceName}/traffic
                    $get(params: { traffic: dedicated.server.TrafficOrderEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/traffic/{duration}
                        $get(params: { traffic: dedicated.server.TrafficOrderEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/traffic/{duration}
                        $post(params: { traffic: dedicated.server.TrafficOrderEnum }): Promise<order.Order>;
                    };
                }
                usbKey: {
                    // GET /order/dedicated/server/{serviceName}/usbKey
                    $get(params: { capacity: dedicated.server.UsbKeyCapacityEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/usbKey/{duration}
                        $get(params: { capacity: dedicated.server.UsbKeyCapacityEnum }): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/usbKey/{duration}
                        $post(params: { capacity: dedicated.server.UsbKeyCapacityEnum }): Promise<order.Order>;
                    };
                }
            };
        }
    }
    dedicatedCloud: {
        // GET /order/dedicatedCloud
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /order/dedicatedCloud/{serviceName}
            $get(): Promise<string[]>;
            additionalBandwidth: {
                // GET /order/dedicatedCloud/{serviceName}/additionalBandwidth
                $get(params: { bandwidth: dedicatedCloud.AdditionalBandwidthEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                    $get(params: { bandwidth: dedicatedCloud.AdditionalBandwidthEnum }): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                    $post(params: { bandwidth: dedicatedCloud.AdditionalBandwidthEnum }): Promise<order.Order>;
                };
            }
            filer: {
                // GET /order/dedicatedCloud/{serviceName}/filer
                $get(params: { datacenterId?: number, name: string, quantity?: number }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/filer/{duration}
                    $get(params: { datacenterId?: number, name: string, quantity?: number }): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/filer/{duration}
                    $post(params: { datacenterId?: number, name: string, quantity?: number }): Promise<order.Order>;
                };
            }
            host: {
                // GET /order/dedicatedCloud/{serviceName}/host
                $get(params: { datacenterId: number, name: string, quantity?: number }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/host/{duration}
                    $get(params: { datacenterId: number, name: string, quantity?: number }): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/host/{duration}
                    $post(params: { datacenterId: number, name: string, quantity?: number }): Promise<order.Order>;
                };
            }
            ip: {
                // GET /order/dedicatedCloud/{serviceName}/ip
                $get(params: { country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/ip/{duration}
                    $get(params: { country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string }): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/ip/{duration}
                    $post(params: { country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string }): Promise<order.Order>;
                };
            }
            spla: {
                // GET /order/dedicatedCloud/{serviceName}/spla
                $get(): Promise<order.Order>;
                // POST /order/dedicatedCloud/{serviceName}/spla
                $post(): Promise<order.Order>;
            }
            upgradeRessource: {
                // GET /order/dedicatedCloud/{serviceName}/upgradeRessource
                $get(params: { upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                    $get(params: { upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum }): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                    $post(params: { upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum }): Promise<order.Order>;
                };
            }
            vdi: {
                // GET /order/dedicatedCloud/{serviceName}/vdi
                $get(params: { datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string }): Promise<order.Order>;
                // POST /order/dedicatedCloud/{serviceName}/vdi
                $post(params: { datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string }): Promise<order.Order>;
            }
        };
    }
    email: {
        exchange: {
            // GET /order/email/exchange
            $get(): Promise<string[]>;
            $(organizationName: string | number): {
                service: {
                    // GET /order/email/exchange/{organizationName}/service
                    $get(): Promise<string[]>;
                    $(exchangeService: string): {
                        // GET /order/email/exchange/{organizationName}/service/{exchangeService}
                        $get(): Promise<string[]>;
                        account: {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/account
                            $get(params: { licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum }): Promise<string[]>;
                            $(duration: string): {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}
                                $get(params: { licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum }): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}
                                $post(params: { licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum }): Promise<order.Order>;
                            };
                        }
                        accountUpgrade: {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade
                            $get(params: { newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string }): Promise<string[]>;
                            $(duration: string): {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}
                                $get(params: { newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string }): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}
                                $post(params: { newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string }): Promise<order.Order>;
                            };
                        }
                        diskSpace: {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace
                            $get(): Promise<order.Order>;
                            // POST /order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace
                            $post(): Promise<order.Order>;
                        }
                        outlook: {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/outlook
                            $get(params: { licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string }): Promise<string[]>;
                            $(duration: string): {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}
                                $get(params: { licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string }): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}
                                $post(params: { licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string }): Promise<order.Order>;
                            };
                        }
                        upgrade: {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/upgrade
                            $get(): Promise<order.Order>;
                            // POST /order/email/exchange/{organizationName}/service/{exchangeService}/upgrade
                            $post(): Promise<order.Order>;
                        }
                    };
                }
            };
        }
    }
    license: {
        cloudLinux: {
            new: {
                // GET /order/license/cloudLinux/new
                $get(params: { ip: string, version: license.CloudLinuxVersionEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/cloudLinux/new/{duration}
                    $get(params: { ip: string, version: license.CloudLinuxVersionEnum }): Promise<order.Order>;
                    // POST /order/license/cloudLinux/new/{duration}
                    $post(params: { ip: string, version: license.CloudLinuxVersionEnum }): Promise<order.Order>;
                };
            }
        }
        cpanel: {
            // GET /order/license/cpanel
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/cpanel/new
                $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/cpanel/new/{duration}
                    $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum }): Promise<order.Order>;
                    // POST /order/license/cpanel/new/{duration}
                    $post(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum }): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/cpanel/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/cpanel/{serviceName}/upgrade
                    $get(params: { version: license.OrderableCpanelVersionEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/cpanel/{serviceName}/upgrade/{duration}
                        $get(params: { version: license.OrderableCpanelVersionEnum }): Promise<order.Order>;
                        // POST /order/license/cpanel/{serviceName}/upgrade/{duration}
                        $post(params: { version: license.OrderableCpanelVersionEnum }): Promise<order.Order>;
                    };
                }
            };
        }
        directadmin: {
            new: {
                // GET /order/license/directadmin/new
                $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/directadmin/new/{duration}
                    $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum }): Promise<order.Order>;
                    // POST /order/license/directadmin/new/{duration}
                    $post(params: { ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum }): Promise<order.Order>;
                };
            }
        }
        office: {
            new: {
                // GET /order/license/office/new
                $get(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/office/new/{duration}
                    $get(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<order.Order>;
                    // POST /order/license/office/new/{duration}
                    $post(params?: { giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number }): Promise<order.Order>;
                };
            }
        }
        plesk: {
            // GET /order/license/plesk
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/plesk/new
                $get(params: { antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/plesk/new/{duration}
                    $get(params: { antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<order.Order>;
                    // POST /order/license/plesk/new/{duration}
                    $post(params: { antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/plesk/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/plesk/{serviceName}/upgrade
                    $get(params?: { antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/plesk/{serviceName}/upgrade/{duration}
                        $get(params?: { antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<order.Order>;
                        // POST /order/license/plesk/{serviceName}/upgrade/{duration}
                        $post(params?: { antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean }): Promise<order.Order>;
                    };
                }
            };
        }
        sqlserver: {
            // GET /order/license/sqlserver
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/sqlserver/new
                $get(params: { ip: string, version: license.SqlServerVersionEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/sqlserver/new/{duration}
                    $get(params: { ip: string, version: license.SqlServerVersionEnum }): Promise<order.Order>;
                    // POST /order/license/sqlserver/new/{duration}
                    $post(params: { ip: string, version: license.SqlServerVersionEnum }): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/sqlserver/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/sqlserver/{serviceName}/upgrade
                    $get(params: { version: license.SqlServerVersionEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/sqlserver/{serviceName}/upgrade/{duration}
                        $get(params: { version: license.SqlServerVersionEnum }): Promise<order.Order>;
                        // POST /order/license/sqlserver/{serviceName}/upgrade/{duration}
                        $post(params: { version: license.SqlServerVersionEnum }): Promise<order.Order>;
                    };
                }
            };
        }
        virtuozzo: {
            // GET /order/license/virtuozzo
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/virtuozzo/new
                $get(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/virtuozzo/new/{duration}
                    $get(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum }): Promise<order.Order>;
                    // POST /order/license/virtuozzo/new/{duration}
                    $post(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum }): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/virtuozzo/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/virtuozzo/{serviceName}/upgrade
                    $get(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                        $get(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum }): Promise<order.Order>;
                        // POST /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                        $post(params: { containerNumber: license.OrderableVirtuozzoContainerNumberEnum }): Promise<order.Order>;
                    };
                }
            };
        }
        windows: {
            // GET /order/license/windows
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/windows/new
                $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/windows/new/{duration}
                    $get(params: { ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum }): Promise<order.Order>;
                    // POST /order/license/windows/new/{duration}
                    $post(params: { ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum }): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/windows/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/windows/{serviceName}/upgrade
                    $get(params?: { sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/windows/{serviceName}/upgrade/{duration}
                        $get(params?: { sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum }): Promise<order.Order>;
                        // POST /order/license/windows/{serviceName}/upgrade/{duration}
                        $post(params?: { sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum }): Promise<order.Order>;
                    };
                }
            };
        }
        worklight: {
            // GET /order/license/worklight
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/worklight/new
                $get(params: { ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/worklight/new/{duration}
                    $get(params: { ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum }): Promise<order.Order>;
                    // POST /order/license/worklight/new/{duration}
                    $post(params: { ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum }): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/worklight/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/worklight/{serviceName}/upgrade
                    $get(params: { version: license.WorkLightVersionEnum }): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/worklight/{serviceName}/upgrade/{duration}
                        $get(params: { version: license.WorkLightVersionEnum }): Promise<order.Order>;
                        // POST /order/license/worklight/{serviceName}/upgrade/{duration}
                        $post(params: { version: license.WorkLightVersionEnum }): Promise<order.Order>;
                    };
                }
            };
        }
    }
    router: {
        new: {
            // GET /order/router/new
            $get(params: { vrack: string }): Promise<string[]>;
            $(duration: string): {
                // GET /order/router/new/{duration}
                $get(params: { vrack: string }): Promise<order.Order>;
                // POST /order/router/new/{duration}
                $post(params: { vrack: string }): Promise<order.Order>;
            };
        }
    }
    upgrade: {
        baremetalPrivateBandwidth: {
            // GET /order/upgrade/baremetalPrivateBandwidth
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/baremetalPrivateBandwidth/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        baremetalPublicBandwidth: {
            // GET /order/upgrade/baremetalPublicBandwidth
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/baremetalPublicBandwidth/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        cephaas: {
            // GET /order/upgrade/cephaas
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/cephaas/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/cephaas/{serviceName}/{planCode}
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/cephaas/{serviceName}/{planCode}
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        ipLoadbalancing: {
            // GET /order/upgrade/ipLoadbalancing
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/ipLoadbalancing/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/ipLoadbalancing/{serviceName}/{planCode}
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/ipLoadbalancing/{serviceName}/{planCode}
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/privateCloud/{serviceName}/{planCode}
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        vps: {
            // GET /order/upgrade/vps
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/vps/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/vps/{serviceName}/{planCode}
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/vps/{serviceName}/{planCode}
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        vpsAdditionalDisk: {
            // GET /order/upgrade/vpsAdditionalDisk
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/vpsAdditionalDisk/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}
                    $get(params: { quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}
                    $post(params: { autoPayWithPreferredPaymentMethod?: boolean, quantity: number }): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
    }
    veeamCloudConnect: {
        // GET /order/veeamCloudConnect
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /order/veeamCloudConnect/{serviceName}
            $get(): Promise<string[]>;
            upgrade: {
                // GET /order/veeamCloudConnect/{serviceName}/upgrade
                $get(params: { offer: veeamCloudConnect.Offer }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                    $get(params: { offer: veeamCloudConnect.Offer }): Promise<order.Order>;
                    // POST /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                    $post(params: { offer: veeamCloudConnect.Offer }): Promise<order.Order>;
                };
            }
        };
    }
    vps: {
        // GET /order/vps
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /order/vps/{serviceName}
            $get(): Promise<string[]>;
            additionalDisk: {
                // GET /order/vps/{serviceName}/additionalDisk
                $get(params: { additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/additionalDisk/{duration}
                    $get(params: { additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum }): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/additionalDisk/{duration}
                    $post(params: { additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum }): Promise<order.Order>;
                };
            }
            automatedBackup: {
                // GET /order/vps/{serviceName}/automatedBackup
                $get(): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/automatedBackup/{duration}
                    $get(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/automatedBackup/{duration}
                    $post(): Promise<order.Order>;
                };
            }
            cpanel: {
                // GET /order/vps/{serviceName}/cpanel
                $get(): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/cpanel/{duration}
                    $get(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/cpanel/{duration}
                    $post(): Promise<order.Order>;
                };
            }
            ftpbackup: {
                // GET /order/vps/{serviceName}/ftpbackup
                $get(): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/ftpbackup/{duration}
                    $get(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/ftpbackup/{duration}
                    $post(): Promise<order.Order>;
                };
            }
            ip: {
                // GET /order/vps/{serviceName}/ip
                $get(params: { country?: vps.ip.GeolocationEnum, number: number }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/ip/{duration}
                    $get(params: { country?: vps.ip.GeolocationEnum, number: number }): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/ip/{duration}
                    $post(params: { country?: vps.ip.GeolocationEnum, number: number }): Promise<order.Order>;
                };
            }
            plesk: {
                // GET /order/vps/{serviceName}/plesk
                $get(params: { domainNumber: vps.PleskLicenseDomainNumberEnum }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/plesk/{duration}
                    $get(params: { domainNumber: vps.PleskLicenseDomainNumberEnum }): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/plesk/{duration}
                    $post(params: { domainNumber: vps.PleskLicenseDomainNumberEnum }): Promise<order.Order>;
                };
            }
            snapshot: {
                // GET /order/vps/{serviceName}/snapshot
                $get(): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/snapshot/{duration}
                    $get(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/snapshot/{duration}
                    $post(): Promise<order.Order>;
                };
            }
            upgrade: {
                // GET /order/vps/{serviceName}/upgrade
                $get(params: { model: string }): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/upgrade/{duration}
                    $get(params: { model: string }): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/upgrade/{duration}
                    $post(params: { model: string }): Promise<order.Order>;
                };
            }
            veeam: {
                // GET /order/vps/{serviceName}/veeam
                $get(): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/veeam/{duration}
                    $get(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/veeam/{duration}
                    $post(): Promise<order.Order>;
                };
            }
            windows: {
                // GET /order/vps/{serviceName}/windows
                $get(): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/windows/{duration}
                    $get(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/windows/{duration}
                    $post(): Promise<order.Order>;
                };
            }
        };
    }
    vrack: {
        // GET /order/vrack
        $get(): Promise<string[]>;
        new: {
            // GET /order/vrack/new
            $get(params?: { quantity?: number }): Promise<order.Order>;
            // POST /order/vrack/new
            $post(params?: { quantity?: number }): Promise<order.Order>;
        }
        $(serviceName: string): {
            // GET /order/vrack/{serviceName}
            $get(): Promise<string[]>;
        };
    }
}

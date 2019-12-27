import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /order Models
 */
export namespace coreTypes {
    // type fullname: coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace dedicated {
    export namespace server {
        // type fullname: dedicated.server.BackupStorageCapacityEnum
        export type BackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000
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
}
export namespace veeamCloudConnect {
    // type fullname: veeamCloudConnect.Offer
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
 * Api Proxy model
 */// Apis harmony
// path /order
export interface Order{
    cluster: {
        hadoop: {
            new: {
                // GET /order/cluster/hadoop/new
                $get(params: {nodeProfile: string, quantity: number}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/cluster/hadoop/new/{duration}
                    $get(params: {nodeProfile: string, quantity: number}): Promise<order.Order>;
                    // POST /order/cluster/hadoop/new/{duration}
                    $post(params: {nodeProfile: string, quantity: number}): Promise<order.Order>;
                };
            }
        }
    }
    dedicated: {
        server: {
            // GET /order/dedicated/server
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/dedicated/server/{serviceName}
                $get(): Promise<string[]>;
                backupStorage: {
                    // GET /order/dedicated/server/{serviceName}/backupStorage
                    $get(params: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/backupStorage/{duration}
                        $get(params: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/backupStorage/{duration}
                        $post(params: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<order.Order>;
                    };
                }
                failoverIP: {
                    // GET /order/dedicated/server/{serviceName}/failoverIP
                    $get(params: {country: dedicated.server.IpCountryEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/failoverIP/{duration}
                        $get(params: {country: dedicated.server.IpCountryEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/failoverIP/{duration}
                        $post(params: {country: dedicated.server.IpCountryEnum}): Promise<order.Order>;
                    };
                }
                feature: {
                    // GET /order/dedicated/server/{serviceName}/feature
                    $get(params: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/feature/{duration}
                        $get(params: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/feature/{duration}
                        $post(params: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<order.Order>;
                    };
                }
                firewall: {
                    // GET /order/dedicated/server/{serviceName}/firewall
                    $get(params: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/firewall/{duration}
                        $get(params: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/firewall/{duration}
                        $post(params: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<order.Order>;
                    };
                }
                ip: {
                    // GET /order/dedicated/server/{serviceName}/ip
                    $get(params: {blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/ip/{duration}
                        $get(params: {blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/ip/{duration}
                        $post(params: {blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}): Promise<order.Order>;
                    };
                }
                ipMigration: {
                    // GET /order/dedicated/server/{serviceName}/ipMigration
                    $get(params: {ip: string, token: string}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/ipMigration/{duration}
                        $get(params: {ip: string, token: string}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/ipMigration/{duration}
                        $post(params: {ip: string, token: string}): Promise<order.Order>;
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
                staticIP: {
                    // GET /order/dedicated/server/{serviceName}/staticIP
                    $get(params: {country: dedicated.server.IpStaticCountryEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/staticIP/{duration}
                        $get(params: {country: dedicated.server.IpStaticCountryEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/staticIP/{duration}
                        $post(params: {country: dedicated.server.IpStaticCountryEnum}): Promise<order.Order>;
                    };
                }
                usbKey: {
                    // GET /order/dedicated/server/{serviceName}/usbKey
                    $get(params: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/usbKey/{duration}
                        $get(params: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/usbKey/{duration}
                        $post(params: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<order.Order>;
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
                $get(params: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                    $get(params: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                    $post(params: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<order.Order>;
                };
            }
            filer: {
                // GET /order/dedicatedCloud/{serviceName}/filer
                $get(params: {datacenterId?: number, name: string, quantity?: number}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/filer/{duration}
                    $get(params: {datacenterId?: number, name: string, quantity?: number}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/filer/{duration}
                    $post(params: {datacenterId?: number, name: string, quantity?: number}): Promise<order.Order>;
                };
            }
            host: {
                // GET /order/dedicatedCloud/{serviceName}/host
                $get(params: {datacenterId: number, name: string, quantity?: number}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/host/{duration}
                    $get(params: {datacenterId: number, name: string, quantity?: number}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/host/{duration}
                    $post(params: {datacenterId: number, name: string, quantity?: number}): Promise<order.Order>;
                };
            }
            ip: {
                // GET /order/dedicatedCloud/{serviceName}/ip
                $get(params: {country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/ip/{duration}
                    $get(params: {country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/ip/{duration}
                    $post(params: {country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<order.Order>;
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
                $get(params: {upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                    $get(params: {upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                    $post(params: {upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<order.Order>;
                };
            }
            vdi: {
                // GET /order/dedicatedCloud/{serviceName}/vdi
                $get(params: {datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string}): Promise<order.Order>;
                // POST /order/dedicatedCloud/{serviceName}/vdi
                $post(params: {datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string}): Promise<order.Order>;
            }
        };
    }
    license: {
        cloudLinux: {
            new: {
                // GET /order/license/cloudLinux/new
                $get(params: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/cloudLinux/new/{duration}
                    $get(params: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<order.Order>;
                    // POST /order/license/cloudLinux/new/{duration}
                    $post(params: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<order.Order>;
                };
            }
        }
        cpanel: {
            // GET /order/license/cpanel
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/cpanel/new
                $get(params: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/cpanel/new/{duration}
                    $get(params: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}): Promise<order.Order>;
                    // POST /order/license/cpanel/new/{duration}
                    $post(params: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/cpanel/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/cpanel/{serviceName}/upgrade
                    $get(params: {version: license.OrderableCpanelVersionEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/cpanel/{serviceName}/upgrade/{duration}
                        $get(params: {version: license.OrderableCpanelVersionEnum}): Promise<order.Order>;
                        // POST /order/license/cpanel/{serviceName}/upgrade/{duration}
                        $post(params: {version: license.OrderableCpanelVersionEnum}): Promise<order.Order>;
                    };
                }
            };
        }
        directadmin: {
            new: {
                // GET /order/license/directadmin/new
                $get(params: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/directadmin/new/{duration}
                    $get(params: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}): Promise<order.Order>;
                    // POST /order/license/directadmin/new/{duration}
                    $post(params: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}): Promise<order.Order>;
                };
            }
        }
        plesk: {
            // GET /order/license/plesk
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/plesk/new
                $get(params: {antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/plesk/new/{duration}
                    $get(params: {antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
                    // POST /order/license/plesk/new/{duration}
                    $post(params: {antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/plesk/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/plesk/{serviceName}/upgrade
                    $get(params?: {antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/plesk/{serviceName}/upgrade/{duration}
                        $get(params?: {antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
                        // POST /order/license/plesk/{serviceName}/upgrade/{duration}
                        $post(params?: {antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
                    };
                }
            };
        }
        sqlserver: {
            // GET /order/license/sqlserver
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/sqlserver/new
                $get(params: {ip: string, version: license.SqlServerVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/sqlserver/new/{duration}
                    $get(params: {ip: string, version: license.SqlServerVersionEnum}): Promise<order.Order>;
                    // POST /order/license/sqlserver/new/{duration}
                    $post(params: {ip: string, version: license.SqlServerVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/sqlserver/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/sqlserver/{serviceName}/upgrade
                    $get(params: {version: license.SqlServerVersionEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/sqlserver/{serviceName}/upgrade/{duration}
                        $get(params: {version: license.SqlServerVersionEnum}): Promise<order.Order>;
                        // POST /order/license/sqlserver/{serviceName}/upgrade/{duration}
                        $post(params: {version: license.SqlServerVersionEnum}): Promise<order.Order>;
                    };
                }
            };
        }
        virtuozzo: {
            // GET /order/license/virtuozzo
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/virtuozzo/new
                $get(params: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/virtuozzo/new/{duration}
                    $get(params: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<order.Order>;
                    // POST /order/license/virtuozzo/new/{duration}
                    $post(params: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/virtuozzo/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/virtuozzo/{serviceName}/upgrade
                    $get(params: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                        $get(params: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<order.Order>;
                        // POST /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                        $post(params: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<order.Order>;
                    };
                }
            };
        }
        windows: {
            // GET /order/license/windows
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/windows/new
                $get(params: {ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/windows/new/{duration}
                    $get(params: {ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}): Promise<order.Order>;
                    // POST /order/license/windows/new/{duration}
                    $post(params: {ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/windows/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/windows/{serviceName}/upgrade
                    $get(params?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/windows/{serviceName}/upgrade/{duration}
                        $get(params?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<order.Order>;
                        // POST /order/license/windows/{serviceName}/upgrade/{duration}
                        $post(params?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<order.Order>;
                    };
                }
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
                $get(params: {offer: veeamCloudConnect.Offer}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                    $get(params: {offer: veeamCloudConnect.Offer}): Promise<order.Order>;
                    // POST /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                    $post(params: {offer: veeamCloudConnect.Offer}): Promise<order.Order>;
                };
            }
        };
    }
// Api
  /**
   * Order a new Hadoop cluster
   * Get allowed durations for 'new' option
   */
  get(path: '/order/cluster/hadoop/new'): (params: {nodeProfile: string, quantity: number}) => Promise<string[]>;
  /**
   * Order a new Hadoop cluster
   * Get prices and contracts information
   */
  get(path: '/order/cluster/hadoop/new/{duration}'): (params: {duration: string, nodeProfile: string, quantity: number}) => Promise<order.Order>;
  /**
   * Operations about the DEDICATED service
   * List available services
   */
  get(path: '/order/dedicated/server'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/dedicated/server/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order a backup storage for this server
   * Get allowed durations for 'backupStorage' option
   */
  get(path: '/order/dedicated/server/{serviceName}/backupStorage'): (params: {serviceName: string, capacity: dedicated.server.BackupStorageCapacityEnum}) => Promise<string[]>;
  /**
   * Order a backup storage for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/backupStorage/{duration}'): (params: {duration: string, serviceName: string, capacity: dedicated.server.BackupStorageCapacityEnum}) => Promise<order.Order>;
  /**
   * Order a failover IP for this server
   * Get allowed durations for 'failoverIP' option
   */
  get(path: '/order/dedicated/server/{serviceName}/failoverIP'): (params: {serviceName: string, country: dedicated.server.IpCountryEnum}) => Promise<string[]>;
  /**
   * Order a failover IP for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/failoverIP/{duration}'): (params: {duration: string, serviceName: string, country: dedicated.server.IpCountryEnum}) => Promise<order.Order>;
  /**
   * Order a feature for this server
   * Get allowed durations for 'feature' option
   */
  get(path: '/order/dedicated/server/{serviceName}/feature'): (params: {serviceName: string, feature: dedicated.server.OrderableSysFeatureEnum}) => Promise<string[]>;
  /**
   * Order a feature for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/feature/{duration}'): (params: {duration: string, serviceName: string, feature: dedicated.server.OrderableSysFeatureEnum}) => Promise<order.Order>;
  /**
   * order a Firewall for this server
   * Get allowed durations for 'firewall' option
   */
  get(path: '/order/dedicated/server/{serviceName}/firewall'): (params: {serviceName: string, firewallModel: dedicated.server.FirewallModelEnum}) => Promise<string[]>;
  /**
   * order a Firewall for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/firewall/{duration}'): (params: {duration: string, serviceName: string, firewallModel: dedicated.server.FirewallModelEnum}) => Promise<order.Order>;
  /**
   * Order IP for this server
   * Get allowed durations for 'ip' option
   */
  get(path: '/order/dedicated/server/{serviceName}/ip'): (params: {serviceName: string, blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}) => Promise<string[]>;
  /**
   * Order IP for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/ip/{duration}'): (params: {duration: string, serviceName: string, blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}) => Promise<order.Order>;
  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
   * Get allowed durations for 'ipMigration' option
   */
  get(path: '/order/dedicated/server/{serviceName}/ipMigration'): (params: {serviceName: string, ip: string, token: string}) => Promise<string[]>;
  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/ipMigration/{duration}'): (params: {duration: string, serviceName: string, ip: string, token: string}) => Promise<order.Order>;
  /**
   * Order a kvmip express for this server
   * Get allowed durations for 'kvmExpress' option
   */
  get(path: '/order/dedicated/server/{serviceName}/kvmExpress'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order a kvmip express for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/kvmExpress/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order a static IP for this server
   * Get allowed durations for 'staticIP' option
   */
  get(path: '/order/dedicated/server/{serviceName}/staticIP'): (params: {serviceName: string, country: dedicated.server.IpStaticCountryEnum}) => Promise<string[]>;
  /**
   * Order a static IP for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/staticIP/{duration}'): (params: {duration: string, serviceName: string, country: dedicated.server.IpStaticCountryEnum}) => Promise<order.Order>;
  /**
   * Order an USB key for this server
   * Get allowed durations for 'usbKey' option
   */
  get(path: '/order/dedicated/server/{serviceName}/usbKey'): (params: {serviceName: string, capacity: dedicated.server.UsbKeyCapacityEnum}) => Promise<string[]>;
  /**
   * Order an USB key for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/usbKey/{duration}'): (params: {duration: string, serviceName: string, capacity: dedicated.server.UsbKeyCapacityEnum}) => Promise<order.Order>;
  /**
   * Operations about the PCC service
   * List available services
   */
  get(path: '/order/dedicatedCloud'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/dedicatedCloud/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order additional bandwidth in your Private Cloud
   * Get allowed durations for 'additionalBandwidth' option
   */
  get(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth'): (params: {serviceName: string, bandwidth: dedicatedCloud.AdditionalBandwidthEnum}) => Promise<string[]>;
  /**
   * Order additional bandwidth in your Private Cloud
   * Get prices and contracts information
   */
  get(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}'): (params: {duration: string, serviceName: string, bandwidth: dedicatedCloud.AdditionalBandwidthEnum}) => Promise<order.Order>;
  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
   * Get allowed durations for 'filer' option
   */
  get(path: '/order/dedicatedCloud/{serviceName}/filer'): (params: {serviceName: string, datacenterId?: number, name: string, quantity?: number}) => Promise<string[]>;
  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
   * Get prices and contracts information
   */
  get(path: '/order/dedicatedCloud/{serviceName}/filer/{duration}'): (params: {duration: string, serviceName: string, datacenterId?: number, name: string, quantity?: number}) => Promise<order.Order>;
  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
   * Get allowed durations for 'host' option
   */
  get(path: '/order/dedicatedCloud/{serviceName}/host'): (params: {serviceName: string, datacenterId: number, name: string, quantity?: number}) => Promise<string[]>;
  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
   * Get prices and contracts information
   */
  get(path: '/order/dedicatedCloud/{serviceName}/host/{duration}'): (params: {duration: string, serviceName: string, datacenterId: number, name: string, quantity?: number}) => Promise<order.Order>;
  /**
   * Order an IP block for your Private Cloud
   * Get allowed durations for 'ip' option
   */
  get(path: '/order/dedicatedCloud/{serviceName}/ip'): (params: {serviceName: string, country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}) => Promise<string[]>;
  /**
   * Order an IP block for your Private Cloud
   * Get prices and contracts information
   */
  get(path: '/order/dedicatedCloud/{serviceName}/ip/{duration}'): (params: {duration: string, serviceName: string, country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}) => Promise<order.Order>;
  /**
   * Enable windows templates (SPLA) in your Private Cloud
   * Get prices and contracts information
   */
  get(path: '/order/dedicatedCloud/{serviceName}/spla'): (params: {serviceName: string}) => Promise<order.Order>;
  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
   * Get allowed durations for 'upgradeRessource' option
   */
  get(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource'): (params: {serviceName: string, upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}) => Promise<string[]>;
  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
   * Get prices and contracts information
   */
  get(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}'): (params: {duration: string, serviceName: string, upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}) => Promise<order.Order>;
  /**
   * Order VDI option in a given Datacenter
   * Get prices and contracts information
   */
  get(path: '/order/dedicatedCloud/{serviceName}/vdi'): (params: {serviceName: string, datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/cloudLinux/new'): (params: {ip: string, version: license.CloudLinuxVersionEnum}) => Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/cloudLinux/new/{duration}'): (params: {duration: string, ip: string, version: license.CloudLinuxVersionEnum}) => Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/order/license/cpanel'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/license/cpanel/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Upgrade this license version
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/license/cpanel/{serviceName}/upgrade'): (params: {serviceName: string, version: license.OrderableCpanelVersionEnum}) => Promise<string[]>;
  /**
   * Upgrade this license version
   * Get prices and contracts information
   */
  get(path: '/order/license/cpanel/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, version: license.OrderableCpanelVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/cpanel/new'): (params: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}) => Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/cpanel/new/{duration}'): (params: {duration: string, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/directadmin/new'): (params: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}) => Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/directadmin/new/{duration}'): (params: {duration: string, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}) => Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/order/license/plesk'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/license/plesk/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/license/plesk/{serviceName}/upgrade'): (params: {serviceName: string, antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/plesk/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/plesk/new'): (params: {antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}) => Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/plesk/new/{duration}'): (params: {duration: string, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}) => Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/order/license/sqlserver'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/license/sqlserver/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/license/sqlserver/{serviceName}/upgrade'): (params: {serviceName: string, version: license.SqlServerVersionEnum}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/sqlserver/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, version: license.SqlServerVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/sqlserver/new'): (params: {ip: string, version: license.SqlServerVersionEnum}) => Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/sqlserver/new/{duration}'): (params: {duration: string, ip: string, version: license.SqlServerVersionEnum}) => Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/order/license/virtuozzo'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/license/virtuozzo/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/license/virtuozzo/{serviceName}/upgrade'): (params: {serviceName: string, containerNumber: license.OrderableVirtuozzoContainerNumberEnum}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/virtuozzo/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, containerNumber: license.OrderableVirtuozzoContainerNumberEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/virtuozzo/new'): (params: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}) => Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/virtuozzo/new/{duration}'): (params: {duration: string, containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}) => Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/order/license/windows'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/license/windows/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/license/windows/{serviceName}/upgrade'): (params: {serviceName: string, sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/windows/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/windows/new'): (params: {ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}) => Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/windows/new/{duration}'): (params: {duration: string, ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}) => Promise<order.Order>;
  /**
   * Operations about the VEEAMCC service
   * List available services
   */
  get(path: '/order/veeamCloudConnect'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/veeamCloudConnect/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order an upgrade upon your Veeam Cloud Connect account
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/veeamCloudConnect/{serviceName}/upgrade'): (params: {serviceName: string, offer: veeamCloudConnect.Offer}) => Promise<string[]>;
  /**
   * Order an upgrade upon your Veeam Cloud Connect account
   * Get prices and contracts information
   */
  get(path: '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, offer: veeamCloudConnect.Offer}) => Promise<order.Order>;
  /**
   * Order a new Hadoop cluster
   * Create order
   */
  post(path: '/order/cluster/hadoop/new/{duration}'): (params: {duration: string, nodeProfile: string, quantity: number}) => Promise<order.Order>;
  /**
   * Order a backup storage for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/backupStorage/{duration}'): (params: {duration: string, serviceName: string, capacity: dedicated.server.BackupStorageCapacityEnum}) => Promise<order.Order>;
  /**
   * Order a failover IP for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/failoverIP/{duration}'): (params: {duration: string, serviceName: string, country: dedicated.server.IpCountryEnum}) => Promise<order.Order>;
  /**
   * Order a feature for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/feature/{duration}'): (params: {duration: string, serviceName: string, feature: dedicated.server.OrderableSysFeatureEnum}) => Promise<order.Order>;
  /**
   * order a Firewall for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/firewall/{duration}'): (params: {duration: string, serviceName: string, firewallModel: dedicated.server.FirewallModelEnum}) => Promise<order.Order>;
  /**
   * Order IP for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/ip/{duration}'): (params: {duration: string, serviceName: string, blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}) => Promise<order.Order>;
  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/ipMigration/{duration}'): (params: {duration: string, serviceName: string, ip: string, token: string}) => Promise<order.Order>;
  /**
   * Order a kvmip express for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/kvmExpress/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order a static IP for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/staticIP/{duration}'): (params: {duration: string, serviceName: string, country: dedicated.server.IpStaticCountryEnum}) => Promise<order.Order>;
  /**
   * Order an USB key for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/usbKey/{duration}'): (params: {duration: string, serviceName: string, capacity: dedicated.server.UsbKeyCapacityEnum}) => Promise<order.Order>;
  /**
   * Order additional bandwidth in your Private Cloud
   * Create order
   */
  post(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}'): (params: {duration: string, serviceName: string, bandwidth: dedicatedCloud.AdditionalBandwidthEnum}) => Promise<order.Order>;
  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
   * Create order
   */
  post(path: '/order/dedicatedCloud/{serviceName}/filer/{duration}'): (params: {duration: string, serviceName: string, datacenterId?: number, name: string, quantity?: number}) => Promise<order.Order>;
  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
   * Create order
   */
  post(path: '/order/dedicatedCloud/{serviceName}/host/{duration}'): (params: {duration: string, serviceName: string, datacenterId: number, name: string, quantity?: number}) => Promise<order.Order>;
  /**
   * Order an IP block for your Private Cloud
   * Create order
   */
  post(path: '/order/dedicatedCloud/{serviceName}/ip/{duration}'): (params: {duration: string, serviceName: string, country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}) => Promise<order.Order>;
  /**
   * Enable windows templates (SPLA) in your Private Cloud
   * Create order
   */
  post(path: '/order/dedicatedCloud/{serviceName}/spla'): (params: {serviceName: string}) => Promise<order.Order>;
  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
   * Create order
   */
  post(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}'): (params: {duration: string, serviceName: string, upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}) => Promise<order.Order>;
  /**
   * Order VDI option in a given Datacenter
   * Create order
   */
  post(path: '/order/dedicatedCloud/{serviceName}/vdi'): (params: {serviceName: string, datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/cloudLinux/new/{duration}'): (params: {duration: string, ip: string, version: license.CloudLinuxVersionEnum}) => Promise<order.Order>;
  /**
   * Upgrade this license version
   * Create order
   */
  post(path: '/order/license/cpanel/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, version: license.OrderableCpanelVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/cpanel/new/{duration}'): (params: {duration: string, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/directadmin/new/{duration}'): (params: {duration: string, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}) => Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  post(path: '/order/license/plesk/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/plesk/new/{duration}'): (params: {duration: string, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}) => Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  post(path: '/order/license/sqlserver/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, version: license.SqlServerVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/sqlserver/new/{duration}'): (params: {duration: string, ip: string, version: license.SqlServerVersionEnum}) => Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  post(path: '/order/license/virtuozzo/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, containerNumber: license.OrderableVirtuozzoContainerNumberEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/virtuozzo/new/{duration}'): (params: {duration: string, containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}) => Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  post(path: '/order/license/windows/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/windows/new/{duration}'): (params: {duration: string, ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}) => Promise<order.Order>;
  /**
   * Order an upgrade upon your Veeam Cloud Connect account
   * Create order
   */
  post(path: '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, offer: veeamCloudConnect.Offer}) => Promise<order.Order>;
}

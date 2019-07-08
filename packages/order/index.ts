import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /order Models
 */
export namespace cdn {
    export namespace webstorage {
        //cdn.webstorage.OrderStorageEnum
        export type OrderStorageEnum = "100GB" | "10TB" | "1TB" | "500GB" | "50TB" | "5TB"
        //cdn.webstorage.OrderTrafficEnum
        export type OrderTrafficEnum = 1 | 10 | 100 | 1000 | 10000
    }
}
export namespace cdnanycast {
    //cdnanycast.OrderCacheRuleEnum
    export type OrderCacheRuleEnum = 100 | 1000
    //cdnanycast.OrderQuotaEnum
    export type OrderQuotaEnum = 1 | 10 | 100 | 1000
}
export namespace complexType {
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace coreTypes {
    //coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace dedicated {
    //dedicated.NasHAOfferEnum
    export type NasHAOfferEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g"
    //dedicated.NasHAZoneEnum
    export type NasHAZoneEnum = "bhs" | "rbx" | "sbg"
    export namespace housing {
        //dedicated.housing.HaRoutingOfferEnum
        export type HaRoutingOfferEnum = "ha2x2" | "ha2x4"
    }
    export namespace server {
        //dedicated.server.BackupStorageCapacityEnum
        export type BackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000
        //dedicated.server.BandwidthOrderEnum
        export type BandwidthOrderEnum = 1000 | 2000 | 3000
        //dedicated.server.BandwidthOrderTypeEnum
        export type BandwidthOrderTypeEnum = "platinum" | "premium" | "ultimate"
        //dedicated.server.BandwidthvRackOrderEnum
        export type BandwidthvRackOrderEnum = 1000 | 3000
        //dedicated.server.FirewallModelEnum
        export type FirewallModelEnum = "asa5505" | "asa5510" | "asa5520"
        //dedicated.server.IpBlockSizeEnum
        export type IpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8
        //dedicated.server.IpCountryEnum
        export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
        //dedicated.server.IpStaticCountryEnum
        export type IpStaticCountryEnum = "be" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "uk"
        //dedicated.server.IpTypeOrderableEnum
        export type IpTypeOrderableEnum = "failover" | "static" | "unshielded"
        //dedicated.server.OrderableSysFeatureEnum
        export type OrderableSysFeatureEnum = "backupProtocol" | "monitoring"
        //dedicated.server.SupportLevelOrderableEnum
        export type SupportLevelOrderableEnum = "critical" | "fastpath" | "gs"
        //dedicated.server.TrafficOrderEnum
        export type TrafficOrderEnum = "100Mbps-Unlimited" | "250Mbps-Unlimited" | "500Mbps-Unlimited"
        //dedicated.server.UsbKeyCapacityEnum
        export type UsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64
    }
}
export namespace dedicatedCloud {
    //dedicatedCloud.AdditionalBandwidthEnum
    export type AdditionalBandwidthEnum = "1500"
    //dedicatedCloud.IpCountriesEnum
    export type IpCountriesEnum = "be" | "ca" | "ch" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "us"
    //dedicatedCloud.OrderableIpBlockRangeEnum
    export type OrderableIpBlockRangeEnum = "24" | "25" | "26" | "27" | "28"
    export namespace ressources {
        //dedicatedCloud.ressources.UpgradeRessourceTypeEnum
        export type UpgradeRessourceTypeEnum = "account" | "all" | "filer" | "host"
        //dedicatedCloud.ressources.UpgradeTypeEnum
        export type UpgradeTypeEnum = "demoToMonthly" | "freeSpareToHourly" | "hourlyToMonthly"
    }
}
export namespace email {
    export namespace domain {
        //email.domain.OfferEnum
        export type OfferEnum = "100" | "25" | "5" | "FULL"
    }
    export namespace exchange {
        //email.exchange.OutlookVersionEnum
        export type OutlookVersionEnum = "mac_x86_2011" | "mac_x86_2016" | "windows_x64_2013" | "windows_x64_2016" | "windows_x86_2013" | "windows_x86_2016"
        //email.exchange.OvhLicenceEnum
        export type OvhLicenceEnum = "basic" | "enterprise" | "standard"
        //email.exchange.accountQuotaEnum
        export type accountQuotaEnum = 300 | 50
    }
}
export namespace freefax {
    //freefax.QuantityEnum
    export type QuantityEnum = 10 | 100 | 1000 | 10000 | 100000 | 200 | 2000 | 50 | 500 | 5000
}
export namespace hosting {
    export namespace PrivateDatabase {
        //hosting.PrivateDatabase.AvailableRamSizeEnum
        export type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512"
        //hosting.PrivateDatabase.DatacenterEnum
        export type DatacenterEnum = "gra1" | "gra2" | "p19"
        //hosting.PrivateDatabase.OfferEnum
        export type OfferEnum = "classic" | "public"
        //hosting.PrivateDatabase.OrderableVersionEnum
        export type OrderableVersionEnum = "mariadb_10.1" | "mariadb_10.2" | "mongodb_3.4" | "mongodb_4.0" | "mysql_5.5" | "mysql_5.6" | "mysql_5.7" | "postgresql_10" | "postgresql_11" | "postgresql_9.4" | "postgresql_9.5" | "postgresql_9.6" | "redis_3.2" | "redis_4.0"
    }
    export namespace web {
        //hosting.web.BandwidthOfferEnum
        export type BandwidthOfferEnum = 10 | 100 | 1000 | 10000 | 20 | 250 | 30 | 40 | 50 | 500
        //hosting.web.Capabilities
        // fullName: hosting.web.Capabilities.Capabilities
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
        //hosting.web.CdnOfferEnum
        export type CdnOfferEnum = "CDN_BUSINESS" | "CDN_BUSINESS_FREE"
        //hosting.web.CreationEmailCapabilities
        // fullName: hosting.web.CreationEmailCapabilities.CreationEmailCapabilities
        export interface CreationEmailCapabilities {
            available: number;
            quota: complexType.UnitAndValue<number>;
        }
        //hosting.web.CronLanguageAvailable
        // fullName: hosting.web.CronLanguageAvailable.CronLanguageAvailable
        export interface CronLanguageAvailable {
            nodejs: hosting.web.NodejsVersionAvailableEnum[];
            php: hosting.web.PhpVersionAvailableEnum[];
            python: hosting.web.PythonVersionAvailableEnum[];
            ruby: hosting.web.RubyVersionAvailableEnum[];
        }
        //hosting.web.DiskType
        // fullName: hosting.web.DiskType.DiskType
        export interface DiskType {
            type: hosting.web.DiskTypeEnum;
            unit: string;
            value: number;
        }
        //hosting.web.DiskTypeEnum
        export type DiskTypeEnum = "HDD" | "SSD"
        //hosting.web.DnsZoneEnum
        export type DnsZoneEnum = "NO_CHANGE" | "RESET_ALL" | "RESET_ONLY_A" | "RESET_ONLY_MX"
        //hosting.web.HighLightEnum
        export type HighLightEnum = "best-seller" | "new"
        //hosting.web.NodejsVersionAvailableEnum
        export type NodejsVersionAvailableEnum = "nodejs-10" | "nodejs-11" | "nodejs-8" | "nodejs-9"
        //hosting.web.OfferEnum
        export type OfferEnum = "CLOUDWEB_1" | "CLOUDWEB_2" | "CLOUDWEB_3" | "KS" | "PERFORMANCE_1" | "PERFORMANCE_2" | "PERFORMANCE_3" | "PERFORMANCE_4" | "PERSO" | "PRO" | "START"
        //hosting.web.PhpVersionAvailableEnum
        export type PhpVersionAvailableEnum = "phpfpm-5.6" | "phpfpm-7.0" | "phpfpm-7.1" | "phpfpm-7.2" | "phpfpm-7.3"
        //hosting.web.PythonVersionAvailableEnum
        export type PythonVersionAvailableEnum = "python-2" | "python-3"
        //hosting.web.RubyVersionAvailableEnum
        export type RubyVersionAvailableEnum = "ruby-2.4" | "ruby-2.5" | "ruby-2.6"
        export namespace database {
            //hosting.web.database.CreationDatabaseCapabilities
            // fullName: hosting.web.database.CreationDatabaseCapabilities.CreationDatabaseCapabilities
            export interface CreationDatabaseCapabilities {
                available: number;
                engines: hosting.web.database.DatabaseTypeEnum[];
                isolation: hosting.web.database.DatabaseIsolationEnum;
                quota: complexType.UnitAndValue<number>;
                type: hosting.web.database.DatabaseCapabilitiesTypeEnum;
            }
            //hosting.web.database.DatabaseCapabilitiesTypeEnum
            export type DatabaseCapabilitiesTypeEnum = "extraSqlPerso" | "local" | "privateDatabase" | "sqlLocal" | "sqlPerso" | "sqlPro"
            //hosting.web.database.DatabaseIsolationEnum
            export type DatabaseIsolationEnum = "dedicated" | "local" | "shared"
            //hosting.web.database.DatabaseTypeEnum
            export type DatabaseTypeEnum = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis"
            //hosting.web.database.SqlPersoOfferEnum
            export type SqlPersoOfferEnum = "SQLPERSO_1_BASES_400_MB" | "SQLPERSO_1_BASES_800_MB" | "SQLPERSO_20_BASES_100_MB" | "SQLPERSO_20_BASES_200_MB" | "SQLPERSO_2_BASES_400_MB" | "SQLPERSO_2_BASES_800_MB" | "SQLPERSO_50_BASES_100_MB" | "SQLPERSO_50_BASES_200_MB" | "SQLPERSO_5_BASES_100_MB" | "SQLPERSO_5_BASES_200_MB" | "SQLPERSO_5_BASES_400_MB" | "SQLPERSO_5_BASES_800_MB"
        }
        export namespace module {
            //hosting.web.module.OrderableNameEnum
            export type OrderableNameEnum = "DRUPAL" | "JOOMLA" | "PRESTASHOP" | "WORDPRESS"
        }
        export namespace order {
            //hosting.web.order.MxPlanEnum
            export type MxPlanEnum = "005" | "025" | "100" | "delete" | "full"
        }
    }
}
export namespace license {
    //license.CloudLinuxVersionEnum
    export type CloudLinuxVersionEnum = "SINGLE" | "WITH_CPANEL" | "WITH_PLESK12" | "cloudlinux-license"
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.OrderableAntispamEnum
    export type OrderableAntispamEnum = "SPAM_ASSASSIN"
    //license.OrderableAntivirusEnum
    export type OrderableAntivirusEnum = "DR_WEB" | "KASPERSKY_UNLIMITED_MAILBOXES" | "kaspersky"
    //license.OrderableCpanelVersionEnum
    export type OrderableCpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps"
    //license.OrderableDirectAdminVersionEnum
    export type OrderableDirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    //license.OrderablePleskDomainNumberEnum
    export type OrderablePleskDomainNumberEnum = "10" | "100" | "30" | "300" | "hostingsuite" | "unlimited"
    //license.OrderablePleskLanguagePackEnum
    export type OrderablePleskLanguagePackEnum = "1" | "1-extra-language-for-plesk12" | "2" | "2-extra-languages-for-plesk12" | "3" | "3-extra-languages-for-plesk12" | "4" | "4-extra-languages-for-plesk12" | "5" | "5-extra-languages-for-plesk12" | "unlimited" | "unlimited-extra-languages-for-plesk12"
    //license.OrderableVirtuozzoContainerNumberEnum
    export type OrderableVirtuozzoContainerNumberEnum = "2_CPU_001_CONTAINER" | "2_CPU_003_CONTAINER" | "2_CPU_010_CONTAINER" | "2_CPU_030_CONTAINER" | "2_CPU_060_CONTAINER" | "2_CPU_100_CONTAINER"
    //license.OrderableVirtuozzoVersionEnum
    export type OrderableVirtuozzoVersionEnum = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX" | "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS" | "virtuozzo-4" | "virtuozzo-4-for-windows"
    //license.PleskApplicationSetEnum
    export type PleskApplicationSetEnum = "applicationpack" | "developerpack" | "power-pack-for-plesk12" | "powerpack"
    //license.PleskVersionEnum
    export type PleskVersionEnum = "PLESK_10_AND_LATER" | "PLESK_10_AND_LATER_FOR_KVM" | "PLESK_10_AND_LATER_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN" | "PLESK_10_AND_LATER_FOR_XEN" | "PLESK_12_VPS_WEB_ADMIN" | "PLESK_12_VPS_WEB_APP" | "PLESK_12_VPS_WEB_HOST" | "PLESK_12_VPS_WEB_HOST_CLNX" | "PLESK_12_VPS_WEB_PRO" | "PLESK_12_VPS_WEB_PRO_CLNX" | "PLESK_12_WEB_ADMIN" | "PLESK_12_WEB_APP" | "PLESK_12_WEB_HOST" | "PLESK_12_WEB_HOST_CLNX" | "PLESK_12_WEB_PRO" | "PLESK_12_WEB_PRO_CLNX" | "PLESK_75_RELOADED" | "PLESK_80" | "PLESK_80_FOR_VZ" | "PLESK_81_FOR_WIN" | "PLESK_9" | "PLESK_95" | "PLESK_95_FOR_VZ" | "PLESK_95_FOR_WIN" | "PLESK_9_FOR_VZ" | "PLESK_9_FOR_WIN" | "PLESK_ONYX_VPS_WEB_ADMIN" | "PLESK_ONYX_VPS_WEB_APP" | "PLESK_ONYX_VPS_WEB_HOST" | "PLESK_ONYX_VPS_WEB_HOST_CLNX" | "PLESK_ONYX_VPS_WEB_PRO" | "PLESK_ONYX_VPS_WEB_PRO_CLNX" | "PLESK_ONYX_WEB_ADMIN" | "PLESK_ONYX_WEB_APP" | "PLESK_ONYX_WEB_HOST" | "PLESK_ONYX_WEB_HOST_CLNX" | "PLESK_ONYX_WEB_PRO" | "PLESK_ONYX_WEB_PRO_CLNX" | "plesk-12-webadmin-for-vps" | "plesk-12-webhost" | "plesk-12-webhost-for-vps" | "plesk-12-webpro" | "plesk-12-webpro-for-vps"
    //license.SqlServerVersionEnum
    export type SqlServerVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_STANDARD_EDITION_4_CPU" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION_4_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_10_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2014_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2014_WEB_EDITION_10_CORES" | "SQL_SERVER_2014_WEB_EDITION_12_CORES" | "SQL_SERVER_2014_WEB_EDITION_16_CORES" | "SQL_SERVER_2014_WEB_EDITION_18_CORES" | "SQL_SERVER_2014_WEB_EDITION_20_CORES" | "SQL_SERVER_2014_WEB_EDITION_24_CORES" | "SQL_SERVER_2014_WEB_EDITION_4_CORES" | "SQL_SERVER_2014_WEB_EDITION_6_CORES" | "SQL_SERVER_2014_WEB_EDITION_8_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2016_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2016_WEB_EDITION_10_CORES" | "SQL_SERVER_2016_WEB_EDITION_12_CORES" | "SQL_SERVER_2016_WEB_EDITION_14_CORES" | "SQL_SERVER_2016_WEB_EDITION_16_CORES" | "SQL_SERVER_2016_WEB_EDITION_4_CORES" | "SQL_SERVER_2016_WEB_EDITION_6_CORES" | "SQL_SERVER_2016_WEB_EDITION_8_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_10_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_14_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_22_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_26_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_28_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_30_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2017_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2017_WEB_EDITION_10_CORES" | "SQL_SERVER_2017_WEB_EDITION_12_CORES" | "SQL_SERVER_2017_WEB_EDITION_14_CORES" | "SQL_SERVER_2017_WEB_EDITION_16_CORES" | "SQL_SERVER_2017_WEB_EDITION_18_CORES" | "SQL_SERVER_2017_WEB_EDITION_20_CORES" | "SQL_SERVER_2017_WEB_EDITION_22_CORES" | "SQL_SERVER_2017_WEB_EDITION_24_CORES" | "SQL_SERVER_2017_WEB_EDITION_26_CORES" | "SQL_SERVER_2017_WEB_EDITION_28_CORES" | "SQL_SERVER_2017_WEB_EDITION_30_CORES" | "SQL_SERVER_2017_WEB_EDITION_32_CORES" | "SQL_SERVER_2017_WEB_EDITION_4_CORES" | "SQL_SERVER_2017_WEB_EDITION_6_CORES" | "SQL_SERVER_2017_WEB_EDITION_8_CORES" | "sql-server-2008-license-standard-edition-2-cpu" | "sql-server-2008-license-standard-edition-4-cpu" | "sql-server-2008-license-web-edition-2-cpu" | "sql-server-2008-license-web-edition-4-cpu" | "sql-server-2012-license-standard-edition-10-cores" | "sql-server-2012-license-standard-edition-12-cores" | "sql-server-2012-license-standard-edition-16-cores" | "sql-server-2012-license-standard-edition-18-cores" | "sql-server-2012-license-standard-edition-2-cpu" | "sql-server-2012-license-standard-edition-20-cores" | "sql-server-2012-license-standard-edition-24-cores" | "sql-server-2012-license-standard-edition-32-cores" | "sql-server-2012-license-standard-edition-4-cores" | "sql-server-2012-license-standard-edition-6-cores" | "sql-server-2012-license-standard-edition-8-cores" | "sql-server-2012-license-web-edition-10-cores" | "sql-server-2012-license-web-edition-12-cores" | "sql-server-2012-license-web-edition-16-cores" | "sql-server-2012-license-web-edition-18-cores" | "sql-server-2012-license-web-edition-20-cores" | "sql-server-2012-license-web-edition-24-cores" | "sql-server-2012-license-web-edition-32-cores" | "sql-server-2012-license-web-edition-4-cores" | "sql-server-2012-license-web-edition-6-cores" | "sql-server-2012-license-web-edition-8-cores" | "sql-server-2014-license-standard-edition-10-cores" | "sql-server-2014-license-standard-edition-12-cores" | "sql-server-2014-license-standard-edition-16-cores" | "sql-server-2014-license-standard-edition-18-cores" | "sql-server-2014-license-standard-edition-20-cores" | "sql-server-2014-license-standard-edition-24-cores" | "sql-server-2014-license-standard-edition-4-cores" | "sql-server-2014-license-standard-edition-6-cores" | "sql-server-2014-license-standard-edition-8-cores" | "sql-server-2014-license-web-edition-10-cores" | "sql-server-2014-license-web-edition-12-cores" | "sql-server-2014-license-web-edition-16-cores" | "sql-server-2014-license-web-edition-18-cores" | "sql-server-2014-license-web-edition-20-cores" | "sql-server-2014-license-web-edition-24-cores" | "sql-server-2014-license-web-edition-4-cores" | "sql-server-2014-license-web-edition-6-cores" | "sql-server-2014-license-web-edition-8-cores" | "sql-server-2016-license-standard-edition-10-cores" | "sql-server-2016-license-standard-edition-12-cores" | "sql-server-2016-license-standard-edition-14-cores" | "sql-server-2016-license-standard-edition-16-cores" | "sql-server-2016-license-standard-edition-4-cores" | "sql-server-2016-license-standard-edition-6-cores" | "sql-server-2016-license-standard-edition-8-cores" | "sql-server-2016-license-web-edition-10-cores" | "sql-server-2016-license-web-edition-12-cores" | "sql-server-2016-license-web-edition-14-cores" | "sql-server-2016-license-web-edition-16-cores" | "sql-server-2016-license-web-edition-4-cores" | "sql-server-2016-license-web-edition-6-cores" | "sql-server-2016-license-web-edition-8-cores" | "sql-server-2017-license-standard-edition-10-cores" | "sql-server-2017-license-standard-edition-12-cores" | "sql-server-2017-license-standard-edition-14-cores" | "sql-server-2017-license-standard-edition-16-cores" | "sql-server-2017-license-standard-edition-18-cores" | "sql-server-2017-license-standard-edition-20-cores" | "sql-server-2017-license-standard-edition-22-cores" | "sql-server-2017-license-standard-edition-24-cores" | "sql-server-2017-license-standard-edition-26-cores" | "sql-server-2017-license-standard-edition-28-cores" | "sql-server-2017-license-standard-edition-30-cores" | "sql-server-2017-license-standard-edition-32-cores" | "sql-server-2017-license-standard-edition-4-cores" | "sql-server-2017-license-standard-edition-6-cores" | "sql-server-2017-license-standard-edition-8-cores" | "sql-server-2017-license-web-edition-10-cores" | "sql-server-2017-license-web-edition-12-cores" | "sql-server-2017-license-web-edition-14-cores" | "sql-server-2017-license-web-edition-16-cores" | "sql-server-2017-license-web-edition-18-cores" | "sql-server-2017-license-web-edition-20-cores" | "sql-server-2017-license-web-edition-22-cores" | "sql-server-2017-license-web-edition-24-cores" | "sql-server-2017-license-web-edition-26-cores" | "sql-server-2017-license-web-edition-28-cores" | "sql-server-2017-license-web-edition-30-cores" | "sql-server-2017-license-web-edition-32-cores" | "sql-server-2017-license-web-edition-4-cores" | "sql-server-2017-license-web-edition-6-cores" | "sql-server-2017-license-web-edition-8-cores"
    //license.WindowsOsVersionEnum
    export type WindowsOsVersionEnum = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2003_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION" | "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION" | "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION" | "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2012_WEB_EDITION" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES" | "windows-server-2008-license-datacenter-edition-1-cpu" | "windows-server-2008-license-datacenter-edition-2-cpu" | "windows-server-2008-license-datacenter-edition-4-cpu" | "windows-server-2008-license-enterprise-edition-1-cpu" | "windows-server-2008-license-enterprise-edition-2-cpu" | "windows-server-2008-license-enterprise-edition-4-cpu" | "windows-server-2008-license-standard-edition-1-cpu" | "windows-server-2008-license-standard-edition-2-cpu" | "windows-server-2008-license-standard-edition-4-cpu" | "windows-server-2008-license-web-edition-1-cpu" | "windows-server-2008-license-web-edition-2-cpu" | "windows-server-2008-license-web-edition-4-cpu" | "windows-server-2012-license-datacenter-edition-1-cpu" | "windows-server-2012-license-datacenter-edition-2-cpu" | "windows-server-2012-license-datacenter-edition-4-cpu" | "windows-server-2012-license-standard-edition-1-cpu" | "windows-server-2012-license-standard-edition-2-cpu" | "windows-server-2012-license-standard-edition-4-cpu" | "windows-server-2016-license-datacenter-edition-1-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-8-cores" | "windows-server-2016-license-standard-edition-1-cpu-10-cores" | "windows-server-2016-license-standard-edition-1-cpu-12-cores" | "windows-server-2016-license-standard-edition-1-cpu-14-cores" | "windows-server-2016-license-standard-edition-1-cpu-16-cores" | "windows-server-2016-license-standard-edition-1-cpu-18-cores" | "windows-server-2016-license-standard-edition-1-cpu-20-cores" | "windows-server-2016-license-standard-edition-1-cpu-22-cores" | "windows-server-2016-license-standard-edition-1-cpu-24-cores" | "windows-server-2016-license-standard-edition-1-cpu-8-cores" | "windows-server-2016-license-standard-edition-2-cpu-10-cores" | "windows-server-2016-license-standard-edition-2-cpu-12-cores" | "windows-server-2016-license-standard-edition-2-cpu-14-cores" | "windows-server-2016-license-standard-edition-2-cpu-16-cores" | "windows-server-2016-license-standard-edition-2-cpu-18-cores" | "windows-server-2016-license-standard-edition-2-cpu-20-cores" | "windows-server-2016-license-standard-edition-2-cpu-22-cores" | "windows-server-2016-license-standard-edition-2-cpu-24-cores" | "windows-server-2016-license-standard-edition-2-cpu-8-cores" | "windows-server-2016-license-standard-edition-4-cpu-10-cores" | "windows-server-2016-license-standard-edition-4-cpu-12-cores" | "windows-server-2016-license-standard-edition-4-cpu-14-cores" | "windows-server-2016-license-standard-edition-4-cpu-16-cores" | "windows-server-2016-license-standard-edition-4-cpu-18-cores" | "windows-server-2016-license-standard-edition-4-cpu-20-cores" | "windows-server-2016-license-standard-edition-4-cpu-22-cores" | "windows-server-2016-license-standard-edition-4-cpu-24-cores" | "windows-server-2016-license-standard-edition-4-cpu-8-cores" | "windows-server-2019-license-datacenter-edition-10-cores" | "windows-server-2019-license-datacenter-edition-12-cores" | "windows-server-2019-license-datacenter-edition-14-cores" | "windows-server-2019-license-datacenter-edition-16-cores" | "windows-server-2019-license-datacenter-edition-18-cores" | "windows-server-2019-license-datacenter-edition-20-cores" | "windows-server-2019-license-datacenter-edition-22-cores" | "windows-server-2019-license-datacenter-edition-24-cores" | "windows-server-2019-license-datacenter-edition-26-cores" | "windows-server-2019-license-datacenter-edition-28-cores" | "windows-server-2019-license-datacenter-edition-30-cores" | "windows-server-2019-license-datacenter-edition-32-cores" | "windows-server-2019-license-datacenter-edition-34-cores" | "windows-server-2019-license-datacenter-edition-36-cores" | "windows-server-2019-license-datacenter-edition-38-cores" | "windows-server-2019-license-datacenter-edition-40-cores" | "windows-server-2019-license-datacenter-edition-42-cores" | "windows-server-2019-license-datacenter-edition-44-cores" | "windows-server-2019-license-datacenter-edition-46-cores" | "windows-server-2019-license-datacenter-edition-48-cores" | "windows-server-2019-license-datacenter-edition-50-cores" | "windows-server-2019-license-datacenter-edition-52-cores" | "windows-server-2019-license-datacenter-edition-54-cores" | "windows-server-2019-license-datacenter-edition-56-cores" | "windows-server-2019-license-datacenter-edition-58-cores" | "windows-server-2019-license-datacenter-edition-60-cores" | "windows-server-2019-license-datacenter-edition-62-cores" | "windows-server-2019-license-datacenter-edition-64-cores" | "windows-server-2019-license-datacenter-edition-8-cores" | "windows-server-2019-license-standard-edition-10-cores" | "windows-server-2019-license-standard-edition-12-cores" | "windows-server-2019-license-standard-edition-14-cores" | "windows-server-2019-license-standard-edition-16-cores" | "windows-server-2019-license-standard-edition-18-cores" | "windows-server-2019-license-standard-edition-20-cores" | "windows-server-2019-license-standard-edition-22-cores" | "windows-server-2019-license-standard-edition-24-cores" | "windows-server-2019-license-standard-edition-26-cores" | "windows-server-2019-license-standard-edition-28-cores" | "windows-server-2019-license-standard-edition-30-cores" | "windows-server-2019-license-standard-edition-32-cores" | "windows-server-2019-license-standard-edition-34-cores" | "windows-server-2019-license-standard-edition-36-cores" | "windows-server-2019-license-standard-edition-38-cores" | "windows-server-2019-license-standard-edition-40-cores" | "windows-server-2019-license-standard-edition-42-cores" | "windows-server-2019-license-standard-edition-44-cores" | "windows-server-2019-license-standard-edition-46-cores" | "windows-server-2019-license-standard-edition-48-cores" | "windows-server-2019-license-standard-edition-50-cores" | "windows-server-2019-license-standard-edition-52-cores" | "windows-server-2019-license-standard-edition-54-cores" | "windows-server-2019-license-standard-edition-56-cores" | "windows-server-2019-license-standard-edition-58-cores" | "windows-server-2019-license-standard-edition-60-cores" | "windows-server-2019-license-standard-edition-62-cores" | "windows-server-2019-license-standard-edition-64-cores" | "windows-server-2019-license-standard-edition-8-cores"
    //license.WindowsSqlVersionEnum
    export type WindowsSqlVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION" | "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES"
    //license.WorkLightVersionEnum
    export type WorkLightVersionEnum = "VERSION-6.1U.1CPU" | "VERSION-6.1U.2CPU" | "VERSION-6.2U.1CPU" | "VERSION-6.2U.2CPU" | "VERSION-6.EVALUATION" | "worklight-license-version-6-1cpu-1u" | "worklight-license-version-6-1cpu-2u" | "worklight-license-version-6-2cpu-1u" | "worklight-license-version-6-2cpu-2u"
}
export namespace nichandle {
    //nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    //nichandle.LegalFormEnum
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    //nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN"
}
export namespace order {
    //order.Contract
    // fullName: order.Contract.Contract
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Order
    // fullName: order.Order.Order
    export interface Order {
        contracts: order.Contract[];
        details: order.OrderDetail[];
        orderId?: number;
        prices: order.OrderPrices;
        url?: string;
    }
    //order.OrderDetail
    // fullName: order.OrderDetail.OrderDetail
    export interface OrderDetail {
        description: string;
        detailType?: order.OrderDetailTypeEnum;
        domain: string;
        quantity: number;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    //order.OrderDetailTypeEnum
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    //order.OrderPrices
    // fullName: order.OrderPrices.OrderPrices
    export interface OrderPrices {
        tax: orderPrice;
        withTax: orderPrice;
        withoutTax: orderPrice;
    }
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
    export namespace cart {
        //order.cart.Cart
        // fullName: order.cart.Cart.Cart
        export interface Cart {
            cartId: string;
            description: string;
            expire?: string;
            items: number[];
            readOnly: boolean;
        }
        //order.cart.Checkout
        // fullName: order.cart.Checkout.Checkout
        export interface Checkout {
            autoPayWithPreferredPaymentMethod: boolean;
            waiveRetractationPeriod: boolean;
        }
        //order.cart.ConfigurationItem
        // fullName: order.cart.ConfigurationItem.ConfigurationItem
        export interface ConfigurationItem {
            id: number;
            label: string;
            value: string;
        }
        //order.cart.ConfigurationRequirements
        // fullName: order.cart.ConfigurationRequirements.ConfigurationRequirements
        export interface ConfigurationRequirements {
            fields?: string[];
            label: string;
            required: boolean;
            type: string;
        }
        //order.cart.CouponCreation
        // fullName: order.cart.CouponCreation.CouponCreation
        export interface CouponCreation {
            coupon: string;
        }
        //order.cart.Creation
        // fullName: order.cart.Creation.Creation
        export interface Creation {
            description: string;
            expire: string;
            ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
        }
        //order.cart.DomainPacksCreation
        // fullName: order.cart.DomainPacksCreation.DomainPacksCreation
        export interface DomainPacksCreation {
            domain: string;
            duration: string;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        //order.cart.DomainPacksDescription
        // fullName: order.cart.DomainPacksDescription.DomainPacksDescription
        export interface DomainPacksDescription {
            domains: order.cart.DomainPacksDescriptionItem[];
        }
        //order.cart.DomainPacksDescriptionItem
        // fullName: order.cart.DomainPacksDescriptionItem.DomainPacksDescriptionItem
        export interface DomainPacksDescriptionItem {
            available: boolean;
            domain: string;
        }
        //order.cart.DomainPacksProductInformation
        // fullName: order.cart.DomainPacksProductInformation.DomainPacksProductInformation
        export interface DomainPacksProductInformation {
            description: order.cart.DomainPacksDescription;
            planCode: string;
            prices: order.cart.GenericProductPricing[];
        }
        //order.cart.DomainSettings
        // fullName: order.cart.DomainSettings.DomainSettings
        export interface DomainSettings {
            domain: string;
        }
        //order.cart.DurationUnitEnum
        export type DurationUnitEnum = "month" | "day" | "none"
        //order.cart.GenericDedicatedCreation
        // fullName: order.cart.GenericDedicatedCreation.GenericDedicatedCreation
        export interface GenericDedicatedCreation {
            duration: string;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        //order.cart.GenericDedicatedOptionsCreation
        // fullName: order.cart.GenericDedicatedOptionsCreation.GenericDedicatedOptionsCreation
        export interface GenericDedicatedOptionsCreation {
            duration: string;
            itemId: number;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        //order.cart.GenericDomainCreation
        // fullName: order.cart.GenericDomainCreation.GenericDomainCreation
        export interface GenericDomainCreation {
            domain: string;
            duration?: string;
            offerId?: string;
            quantity?: number;
        }
        //order.cart.GenericDomainOptionsCreation
        // fullName: order.cart.GenericDomainOptionsCreation.GenericDomainOptionsCreation
        export interface GenericDomainOptionsCreation {
            duration: string;
            itemId: number;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        //order.cart.GenericOptionCreation
        // fullName: order.cart.GenericOptionCreation.GenericOptionCreation
        export interface GenericOptionCreation {
            duration: string;
            itemId: number;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        //order.cart.GenericOptionDefinition
        // fullName: order.cart.GenericOptionDefinition.GenericOptionDefinition
        export interface GenericOptionDefinition {
            exclusive: boolean;
            family: string;
            mandatory: boolean;
            planCode: string;
            prices: order.cart.GenericProductPricing[];
            productName: string;
            productType: order.cart.GenericProductTypeEnum;
        }
        //order.cart.GenericProductCreation
        // fullName: order.cart.GenericProductCreation.GenericProductCreation
        export interface GenericProductCreation {
            duration: string;
            planCode: string;
            pricingMode: string;
            quantity: number;
        }
        //order.cart.GenericProductDefinition
        // fullName: order.cart.GenericProductDefinition.GenericProductDefinition
        export interface GenericProductDefinition {
            planCode: string;
            prices: order.cart.GenericProductPricing[];
            productName: string;
            productType: order.cart.GenericProductTypeEnum;
        }
        //order.cart.GenericProductPricing
        // fullName: order.cart.GenericProductPricing.GenericProductPricing
        export interface GenericProductPricing {
            capacities: order.cart.GenericProductPricingCapacitiesEnum[];
            description: string;
            duration: string;
            interval: number;
            maximumQuantity: number;
            maximumRepeat?: number;
            minimumQuantity: number;
            minimumRepeat: number;
            price: orderPrice;
            priceInUcents: number;
            pricingMode: string;
            pricingType: order.cart.GenericProductPricingTypeEnum;
        }
        //order.cart.GenericProductPricingCapacitiesEnum
        export type GenericProductPricingCapacitiesEnum = "installation" | "renew" | "upgrade" | "downgrade"
        //order.cart.GenericProductPricingStrategyEnum
        export type GenericProductPricingStrategyEnum = "stairstep" | "volume" | "tiered"
        //order.cart.GenericProductPricingTypeEnum
        export type GenericProductPricingTypeEnum = "rental" | "consumption" | "purchase"
        //order.cart.GenericProductTypeEnum
        export type GenericProductTypeEnum = "delivery" | "deposit" | "shipping" | "cloud_service" | "saas_license" | "storage" | "domain"
        //order.cart.Item
        // fullName: order.cart.Item.Item
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
        //order.cart.ItemConfigurationCreation
        // fullName: order.cart.ItemConfigurationCreation.ItemConfigurationCreation
        export interface ItemConfigurationCreation {
            label: string;
            value: string;
        }
        //order.cart.ItemUpdate
        // fullName: order.cart.ItemUpdate.ItemUpdate
        export interface ItemUpdate {
            duration: string;
            quantity: number;
        }
        //order.cart.Price
        // fullName: order.cart.Price.Price
        export interface Price {
            label: order.cart.PriceLabelEnum;
            price: orderPrice;
        }
        //order.cart.PriceLabelEnum
        export type PriceLabelEnum = "PRICE" | "DISCOUNT" | "FEE" | "TOTAL" | "RENEW"
        //order.cart.ProductInformation
        // fullName: order.cart.ProductInformation.ProductInformation
        export interface ProductInformation {
            configurations: order.cart.ConfigurationRequirements[];
            deliveryTime: string;
            duration: string[];
            offer?: string;
            orderable: boolean;
            phase: string;
            prices?: order.cart.Price[];
            pricingMode: string;
            productId: string;
            quantityMax: number;
        }
        //order.cart.Update
        // fullName: order.cart.Update.Update
        export interface Update {
            description: string;
            expire: string;
        }
        //order.cart.WebHostingProductInformation
        // fullName: order.cart.WebHostingProductInformation.WebHostingProductInformation
        export interface WebHostingProductInformation {
            description: hosting.web.Capabilities;
            planCode: string;
            prices: order.cart.GenericProductPricing[];
        }
    }
    export namespace catalog {
        //order.catalog.AddonItem
        // fullName: order.catalog.AddonItem.AddonItem
        export interface AddonItem {
            addons: order.catalog.AddonOffer[];
            exclusive: boolean;
            family: string;
            mandatory: boolean;
        }
        //order.catalog.AddonOffer
        // fullName: order.catalog.AddonOffer.AddonOffer
        export interface AddonOffer {
            invoiceName: string;
            plan: order.catalog.ProductPlan;
        }
        //order.catalog.Catalog
        // fullName: order.catalog.Catalog.Catalog
        export interface Catalog {
            catalogId: number;
            merchantCode: string;
            plansFamily: order.catalog.PlansItem[];
        }
        //order.catalog.ConfigurationItem
        // fullName: order.catalog.ConfigurationItem.ConfigurationItem
        export interface ConfigurationItem {
            defaultValue?: string;
            isCustom: boolean;
            isMandatory: boolean;
            name: string;
            values: string[];
        }
        //order.catalog.PlansItem
        // fullName: order.catalog.PlansItem.PlansItem
        export interface PlansItem {
            family: string;
            plans: order.catalog.ProductPlan[];
        }
        //order.catalog.Pricing
        // fullName: order.catalog.Pricing.Pricing
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
            price: orderPrice;
            priceCapInUcents?: number;
            priceInUcents: number;
            pricingStrategy: string;
        }
        //order.catalog.PricingDefault
        // fullName: order.catalog.PricingDefault.PricingDefault
        export interface PricingDefault {
            default: order.catalog.Pricing[];
        }
        //order.catalog.Product
        // fullName: order.catalog.Product.Product
        export interface Product {
            configurations: order.catalog.ConfigurationItem[];
            description: string;
            name: string;
            technicalDetails?: complexType.SafeKeyValue<string>[];
        }
        //order.catalog.ProductOfferDetails
        // fullName: order.catalog.ProductOfferDetails.ProductOfferDetails
        export interface ProductOfferDetails {
            metadatas: complexType.SafeKeyValue<string>[];
            pricings: order.catalog.PricingDefault;
            product: order.catalog.Product;
        }
        //order.catalog.ProductPlan
        // fullName: order.catalog.ProductPlan.ProductPlan
        export interface ProductPlan {
            addonsFamily: order.catalog.AddonItem[];
            consumptionBillingStrategy?: string;
            details: order.catalog.ProductOfferDetails;
            invoiceName: string;
            planCode: string;
            pricingType: string;
        }
        export namespace pcc {
            //order.catalog.pcc.Catalog
            // fullName: order.catalog.pcc.Catalog.Catalog
            export interface Catalog {
                catalogId: number;
                catalogName: string;
                commercialRanges: order.catalog.pcc.CommercialRange[];
                merchantCode: string;
                plans: order.catalog.ProductPlan[];
            }
            //order.catalog.pcc.CommercialRange
            // fullName: order.catalog.pcc.CommercialRange.CommercialRange
            export interface CommercialRange {
                datacenters: order.catalog.pcc.Datacenter[];
                defaultZone: string;
                name: string;
            }
            //order.catalog.pcc.Datacenter
            // fullName: order.catalog.pcc.Datacenter.Datacenter
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
            //order.catalog.pcc.Host
            // fullName: order.catalog.pcc.Host.Host
            export interface Host {
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                specifications: order.catalog.pcc.HostSpecifications;
                storagesPack: string[];
            }
            //order.catalog.pcc.HostCpuSpecifications
            // fullName: order.catalog.pcc.HostCpuSpecifications.HostCpuSpecifications
            export interface HostCpuSpecifications {
                cores: number;
                frequency: complexType.UnitAndValue<number>;
                generation: string;
                model: string;
                socket: number;
                threads: number;
            }
            //order.catalog.pcc.HostMemorySpecifications
            // fullName: order.catalog.pcc.HostMemorySpecifications.HostMemorySpecifications
            export interface HostMemorySpecifications {
                ram: complexType.UnitAndValue<number>;
            }
            //order.catalog.pcc.HostNetworkSpecifications
            // fullName: order.catalog.pcc.HostNetworkSpecifications.HostNetworkSpecifications
            export interface HostNetworkSpecifications {
                nics: number;
                speed: complexType.UnitAndValue<number>;
            }
            //order.catalog.pcc.HostSpecifications
            // fullName: order.catalog.pcc.HostSpecifications.HostSpecifications
            export interface HostSpecifications {
                cpu: order.catalog.pcc.HostCpuSpecifications;
                memory: order.catalog.pcc.HostMemorySpecifications;
                network: order.catalog.pcc.HostNetworkSpecifications[];
            }
            //order.catalog.pcc.Hypervisor
            // fullName: order.catalog.pcc.Hypervisor.Hypervisor
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
            //order.catalog.pcc.Option
            // fullName: order.catalog.pcc.Option.Option
            export interface Option {
                maxInitialQuantity: number;
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                type: string;
            }
            //order.catalog.pcc.ServicePack
            // fullName: order.catalog.pcc.ServicePack.ServicePack
            export interface ServicePack {
                name: string;
                options: order.catalog.pcc.ServicePackOption[];
                planCode: string;
                upgradableTo: string[];
            }
            //order.catalog.pcc.ServicePackOption
            // fullName: order.catalog.pcc.ServicePackOption.ServicePackOption
            export interface ServicePackOption {
                name: string;
                planCode: string;
                type: string;
            }
            //order.catalog.pcc.Storage
            // fullName: order.catalog.pcc.Storage.Storage
            export interface Storage {
                name: string;
                onInitialOrder: boolean;
                onUpgradeOrder: boolean;
                planCode: string;
                specifications: order.catalog.pcc.StorageSpecifications;
            }
            //order.catalog.pcc.StorageSpecifications
            // fullName: order.catalog.pcc.StorageSpecifications.StorageSpecifications
            export interface StorageSpecifications {
                size: complexType.UnitAndValue<number>;
                type: string;
            }
        }
        export namespace privateCloud {
            //order.catalog.privateCloud.Capabilities
            // fullName: order.catalog.privateCloud.Capabilities.Capabilities
            export interface Capabilities {
                hds: boolean;
                hipaa: boolean;
                nsx: boolean;
                pcidss: boolean;
                vrops: boolean;
            }
            //order.catalog.privateCloud.CapabilitiesListing
            // fullName: order.catalog.privateCloud.CapabilitiesListing.CapabilitiesListing
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
            //order.catalog.privateCloud.Catalog
            // fullName: order.catalog.privateCloud.Catalog.Catalog
            export interface Catalog {
                catalogId: number;
                catalogName: string;
                defaultHypervisor: string;
                defaultZone: string;
                merchantCode: string;
                options: order.catalog.privateCloud.CapabilitiesListing;
                zones: order.catalog.privateCloud.ZonesListing;
            }
            //order.catalog.privateCloud.Zone
            // fullName: order.catalog.privateCloud.Zone.Zone
            export interface Zone {
                cityName: string;
                country: string;
                defaultHypervisor: string;
                defaultVersion: string;
                internalName: string;
                plans: order.catalog.ProductPlan[];
            }
            //order.catalog.privateCloud.ZonesListing
            // fullName: order.catalog.privateCloud.ZonesListing.ZonesListing
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
            //order.catalog.publik.AddonFamily
            // fullName: order.catalog.publik.AddonFamily.AddonFamily
            export interface AddonFamily {
                addons: string[];
                default?: string;
                exclusive: boolean;
                mandatory: boolean;
                name: string;
            }
            //order.catalog.publik.Catalog
            // fullName: order.catalog.publik.Catalog.Catalog
            export interface Catalog {
                addons: order.catalog.publik.Plan[];
                catalogId: number;
                locale: order.catalog.publik.Locale;
                planFamilies: order.catalog.publik.PlanFamily[];
                plans: order.catalog.publik.Plan[];
                products: order.catalog.publik.Product[];
            }
            //order.catalog.publik.Configuration
            // fullName: order.catalog.publik.Configuration.Configuration
            export interface Configuration {
                isCustom: boolean;
                isMandatory: boolean;
                name: string;
                values: string[];
            }
            //order.catalog.publik.DedicatedServerCatalog
            // fullName: order.catalog.publik.DedicatedServerCatalog.DedicatedServerCatalog
            export interface DedicatedServerCatalog {
                addons: order.catalog.publik.Plan[];
                catalogId: number;
                locale: order.catalog.publik.Locale;
                planFamilies: order.catalog.publik.AddonFamily[];
                plans: order.catalog.publik.Plan[];
                products: order.catalog.publik.DedicatedServerProduct[];
            }
            //order.catalog.publik.DedicatedServerProduct
            // fullName: order.catalog.publik.DedicatedServerProduct.DedicatedServerProduct
            export interface DedicatedServerProduct {
                blobs?: order.catalog.publik.DedicatedServerProductBlob;
                description: string;
                name: string;
            }
            //order.catalog.publik.DedicatedServerProductBlob
            // fullName: order.catalog.publik.DedicatedServerProductBlob.DedicatedServerProductBlob
            export interface DedicatedServerProductBlob {
                technical?: order.catalog.publik.DedicatedServerProductBlobTechnical;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnical
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnical.DedicatedServerProductBlobTechnical
            export interface DedicatedServerProductBlobTechnical {
                bandwidth?: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork;
                cpu?: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU;
                gpu?: order.catalog.publik.DedicatedServerProductBlobTechnicalGPU;
                memory?: order.catalog.publik.DedicatedServerProductBlobTechnicalMemory;
                server?: order.catalog.publik.DedicatedServerProductBlobTechnicalServer;
                storage?: order.catalog.publik.DedicatedServerProductBlobTechnicalStorage;
                vrack?: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalCPU
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU.DedicatedServerProductBlobTechnicalCPU
            export interface DedicatedServerProductBlobTechnicalCPU {
                boost: number;
                brand: string;
                cores: number;
                frequency: number;
                model: string;
                score: number;
                threads: number;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalDisk
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalDisk.DedicatedServerProductBlobTechnicalDisk
            export interface DedicatedServerProductBlobTechnicalDisk {
                capacity: number;
                interface: string;
                number: number;
                specs: string;
                technology: string;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalFrame
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalFrame.DedicatedServerProductBlobTechnicalFrame
            export interface DedicatedServerProductBlobTechnicalFrame {
                model: string;
                size: string;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalGPU
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalGPU.DedicatedServerProductBlobTechnicalGPU
            export interface DedicatedServerProductBlobTechnicalGPU {
                memory: number;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalMemory
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalMemory.DedicatedServerProductBlobTechnicalMemory
            export interface DedicatedServerProductBlobTechnicalMemory {
                ecc: boolean;
                frequency: number;
                ramType: string;
                size: number;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork.DedicatedServerProductBlobTechnicalNetwork
            export interface DedicatedServerProductBlobTechnicalNetwork {
                burst?: number;
                guaranteed: boolean;
                level: number;
                limit?: number;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalServer
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalServer.DedicatedServerProductBlobTechnicalServer
            export interface DedicatedServerProductBlobTechnicalServer {
                cpu: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU;
                frame: order.catalog.publik.DedicatedServerProductBlobTechnicalFrame;
                range: string;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalStorage
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalStorage.DedicatedServerProductBlobTechnicalStorage
            export interface DedicatedServerProductBlobTechnicalStorage {
                disks: order.catalog.publik.DedicatedServerProductBlobTechnicalDisk[];
                raid: string;
            }
            //order.catalog.publik.Locale
            // fullName: order.catalog.publik.Locale.Locale
            export interface Locale {
                currencyCode: order.CurrencyCodeEnum;
                subsidiary: nichandle.OvhSubsidiaryEnum;
                taxRate: number;
            }
            //order.catalog.publik.Plan
            // fullName: order.catalog.publik.Plan.Plan
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
            //order.catalog.publik.PlanFamily
            // fullName: order.catalog.publik.PlanFamily.PlanFamily
            export interface PlanFamily {
                name: string;
            }
            //order.catalog.publik.Pricing
            // fullName: order.catalog.publik.Pricing.Pricing
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
            //order.catalog.publik.PricingMinMax
            // fullName: order.catalog.publik.PricingMinMax.PricingMinMax
            export interface PricingMinMax {
                max?: number;
                min: number;
            }
            //order.catalog.publik.Product
            // fullName: order.catalog.publik.Product.Product
            export interface Product {
                description: string;
                name: string;
            }
        }
    }
    export namespace upgrade {
        //order.upgrade.Operation
        // fullName: order.upgrade.Operation.Operation
        export interface Operation {
            id: number;
            product: order.upgrade.OperationProduct;
            status: order.upgrade.OperationStatusEnum;
            type: order.upgrade.OperationTypeEnum;
        }
        //order.upgrade.OperationProduct
        // fullName: order.upgrade.OperationProduct.OperationProduct
        export interface OperationProduct {
            description: string;
            name: string;
        }
        //order.upgrade.OperationStatusEnum
        export type OperationStatusEnum = "TODO" | "DOING" | "DONE" | "ERROR" | "DELAYED" | "CANCELLED" | "SCHEDULED"
        //order.upgrade.OperationTypeEnum
        export type OperationTypeEnum = "UPGRADE"
        //order.upgrade.order_upgrade_OperationAndOrder
        // fullName: order.upgrade.order_upgrade_OperationAndOrder.order_upgrade_OperationAndOrder
        export interface order_upgrade_OperationAndOrder {
            operation?: order.upgrade.Operation;
            order?: order.Order;
        }
    }
}
export namespace overTheBox {
    //overTheBox.ShippingMethodEnum
    export type ShippingMethodEnum = "dhl" | "mondialRelay"
}
export namespace telephony {
    //telephony.LineTypeEnum
    export type LineTypeEnum = "geographic" | "nogeographic"
    //telephony.NumberCountryEnum
    export type NumberCountryEnum = "be" | "ch" | "de" | "es" | "fr" | "gb" | "it" | "uk"
    //telephony.NumberOffer
    export type NumberOffer = "alias" | "didsOnly"
    //telephony.NumberPoolEnum
    export type NumberPoolEnum = 10 | 100 | 50
    //telephony.NumberSpecialTypologyEnum
    export type NumberSpecialTypologyEnum = "be_adults" | "be_content" | "be_games" | "be_general" | "be_relaxing" | "fr_access" | "fr_adults" | "fr_announced" | "fr_conferencing" | "fr_contentsAuto" | "fr_contentsManual" | "fr_games" | "fr_linking" | "fr_m2m" | "fr_relationship"
    //telephony.SecurityDepositAmountsEnum
    export type SecurityDepositAmountsEnum = 10 | 100 | 1000 | 10000 | 20 | 200 | 2000 | 30 | 300 | 3000 | 40 | 400 | 4000 | 50 | 500 | 5000
    export namespace portability {
        //telephony.portability.CountriesAvailable
        export type CountriesAvailable = "belgium" | "france" | "switzerland"
        //telephony.portability.NumberType
        export type NumberType = "landline" | "special"
        //telephony.portability.OfferType
        export type OfferType = "company" | "individual"
        //telephony.portability.SocialReason
        export type SocialReason = "corporation" | "individual" | "professional"
        //telephony.portability.SpecialNumberCategoryEnum
        export type SpecialNumberCategoryEnum = "access" | "adults" | "announced" | "be_adults" | "be_content" | "be_games" | "be_general" | "be_relaxing" | "conferencing" | "contentsAuto" | "contentsManual" | "directory" | "games" | "linking" | "m2m" | "relationship"
    }
}
export namespace veeamCloudConnect {
    //veeamCloudConnect.Offer
    export type Offer = "advanced" | "demo" | "starter"
}
export namespace vps {
    //vps.PleskLicenseDomainNumberEnum
    export type PleskLicenseDomainNumberEnum = "10" | "100" | "300" | "hostingsuite"
    export namespace additionalDisk {
        //vps.additionalDisk.AdditionalDiskSizeEnum
        export type AdditionalDiskSizeEnum = "100" | "200" | "50" | "500"
    }
    export namespace ip {
        //vps.ip.GeolocationEnum
        export type GeolocationEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
    }
}
export namespace vrack {
    //vrack.BlockCountryEnum
    export type BlockCountryEnum = "be" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "uk"
    //vrack.BlockSizeEnum
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
export interface Order{
    cart: {
        // GET /order/cart
        $get(param?: {description?: string}): Promise<string[]>;
        // POST /order/cart
        $post(body?: {body: order.cart.Creation}): Promise<order.cart.Cart>;
        $(cartId: string): {
            // DELETE /order/cart/{cartId}
            $delete(): Promise<void>;
            // GET /order/cart/{cartId}
            $get(): Promise<order.cart.Cart>;
            // PUT /order/cart/{cartId}
            $put(body?: {body: order.cart.Update}): Promise<order.cart.Cart>;
            analytics: {
                // GET /order/cart/{cartId}/analytics
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/analytics
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/analytics/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/analytics/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            assign: {
                // POST /order/cart/{cartId}/assign
                $post(): Promise<void>;
            }
            baremetalServers: {
                // GET /order/cart/{cartId}/baremetalServers
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/baremetalServers
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/baremetalServers/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/baremetalServers/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            cdn: {
                // GET /order/cart/{cartId}/cdn
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cdn
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/cdn/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cdn/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            cephaas: {
                // GET /order/cart/{cartId}/cephaas
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cephaas
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/cephaas/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cephaas/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            checkout: {
                // GET /order/cart/{cartId}/checkout
                $get(): Promise<order.Order>;
                // POST /order/cart/{cartId}/checkout
                $post(body?: {body: order.cart.Checkout}): Promise<order.Order>;
            }
            cloud: {
                // GET /order/cart/{cartId}/cloud
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cloud
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/cloud/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cloud/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            cloudweb: {
                // GET /order/cart/{cartId}/cloudweb
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cloudweb
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/cloudweb/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cloudweb/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            coupon: {
                // DELETE /order/cart/{cartId}/coupon
                $delete(): Promise<void>;
                // GET /order/cart/{cartId}/coupon
                $get(): Promise<string[]>;
                // POST /order/cart/{cartId}/coupon
                $post(body?: {body: order.cart.CouponCreation}): Promise<string[]>;
            }
            csp2: {
                // GET /order/cart/{cartId}/csp2
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/csp2
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/csp2/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/csp2/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            dbaasTimeseries: {
                // GET /order/cart/{cartId}/dbaasTimeseries
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dbaasTimeseries
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            dedicated: {
                // GET /order/cart/{cartId}/dedicated
                $get(param?: {family?: string, planCode?: string}): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicated
                $post(body?: {body: order.cart.GenericDedicatedCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/dedicated/options
                    $get(param?: {family?: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicated/options
                    $post(body?: {body: order.cart.GenericDedicatedOptionsCreation}): Promise<order.cart.Item>;
                }
            }
            dedicatedLabs: {
                // GET /order/cart/{cartId}/dedicatedLabs
                $get(param?: {planCode?: string}): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicatedLabs
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/dedicatedLabs/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicatedLabs/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            dedicatedReseller: {
                // GET /order/cart/{cartId}/dedicatedReseller
                $get(param?: {family?: string, planCode?: string}): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicatedReseller
                $post(body?: {body: order.cart.GenericDedicatedCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/dedicatedReseller/options
                    $get(param?: {family?: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicatedReseller/options
                    $post(body?: {body: order.cart.GenericDedicatedOptionsCreation}): Promise<order.cart.Item>;
                }
            }
            deskaas: {
                // GET /order/cart/{cartId}/deskaas
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/deskaas
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            discover: {
                // GET /order/cart/{cartId}/discover
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/discover
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/discover/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/discover/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            dns: {
                // GET /order/cart/{cartId}/dns
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dns
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            domain: {
                // GET /order/cart/{cartId}/domain
                $get(param?: {domain: string}): Promise<order.cart.ProductInformation[]>;
                // POST /order/cart/{cartId}/domain
                $post(body?: {body: order.cart.GenericDomainCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/domain/options
                    $get(param?: {domain: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/domain/options
                    $post(body?: {body: order.cart.GenericDomainOptionsCreation}): Promise<order.cart.Item>;
                }
            }
            domainPacks: {
                // GET /order/cart/{cartId}/domainPacks
                $get(param?: {domain: string}): Promise<order.cart.DomainPacksProductInformation[]>;
                // POST /order/cart/{cartId}/domainPacks
                $post(body?: {body: order.cart.DomainPacksCreation}): Promise<order.cart.Item>;
            }
            domainRestore: {
                // GET /order/cart/{cartId}/domainRestore
                $get(param?: {domain: string}): Promise<order.cart.GenericProductDefinition[]>;
            }
            domainTransfer: {
                // GET /order/cart/{cartId}/domainTransfer
                $get(param?: {domain: string}): Promise<order.cart.ProductInformation[]>;
                // POST /order/cart/{cartId}/domainTransfer
                $post(body?: {body: order.cart.GenericDomainCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/domainTransfer/options
                    $get(param?: {domain: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/domainTransfer/options
                    $post(body?: {body: order.cart.GenericDomainOptionsCreation}): Promise<order.cart.Item>;
                }
            }
            emailpro: {
                // GET /order/cart/{cartId}/emailpro
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/emailpro
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/emailpro/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/emailpro/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            exchange: {
                // GET /order/cart/{cartId}/exchange
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/exchange
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/exchange/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/exchange/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            exchangeEnterprise: {
                // GET /order/cart/{cartId}/exchangeEnterprise
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/exchangeEnterprise
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/exchangeEnterprise/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/exchangeEnterprise/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            hostingReseller: {
                // GET /order/cart/{cartId}/hostingReseller
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/hostingReseller
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            ip: {
                // GET /order/cart/{cartId}/ip
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ip
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/ip/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/ip/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            ipLoadbalancing: {
                // GET /order/cart/{cartId}/ipLoadbalancing
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ipLoadbalancing
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/ipLoadbalancing/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/ipLoadbalancing/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
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
                    $put(body?: {body: order.cart.ItemUpdate}): Promise<order.cart.Item>;
                    configuration: {
                        // GET /order/cart/{cartId}/item/{itemId}/configuration
                        $get(param?: {label?: string}): Promise<number[]>;
                        // POST /order/cart/{cartId}/item/{itemId}/configuration
                        $post(body?: {body: order.cart.ItemConfigurationCreation}): Promise<order.cart.ConfigurationItem>;
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
            kubernetes: {
                // GET /order/cart/{cartId}/kubernetes
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/kubernetes
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/kubernetes/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/kubernetes/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            licenseCloudLinux: {
                // GET /order/cart/{cartId}/licenseCloudLinux
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseCloudLinux
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licenseDirectadmin: {
                // GET /order/cart/{cartId}/licenseDirectadmin
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseDirectadmin
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licensePlesk: {
                // GET /order/cart/{cartId}/licensePlesk
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licensePlesk
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/licensePlesk/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/licensePlesk/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            licenseSqlServer: {
                // GET /order/cart/{cartId}/licenseSqlServer
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseSqlServer
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licenseVirtuozzo: {
                // GET /order/cart/{cartId}/licenseVirtuozzo
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseVirtuozzo
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licenseWindows: {
                // GET /order/cart/{cartId}/licenseWindows
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseWindows
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licenseWorklight: {
                // GET /order/cart/{cartId}/licenseWorklight
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseWorklight
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licensecPanel: {
                // GET /order/cart/{cartId}/licensecPanel
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licensecPanel
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            logs: {
                // GET /order/cart/{cartId}/logs
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/logs
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/logs/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/logs/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            managedServices: {
                // GET /order/cart/{cartId}/managedServices
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/managedServices
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/managedServices/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/managedServices/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            metrics: {
                // GET /order/cart/{cartId}/metrics
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/metrics
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/metrics/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/metrics/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            microsoft: {
                // GET /order/cart/{cartId}/microsoft
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/microsoft
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/microsoft/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/microsoft/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            nasha: {
                // GET /order/cart/{cartId}/nasha
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/nasha
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/nasha/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/nasha/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            office365: {
                // GET /order/cart/{cartId}/office365
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/office365
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/office365/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/office365/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            office365Prepaid: {
                // GET /order/cart/{cartId}/office365Prepaid
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/office365Prepaid
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/office365Prepaid/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/office365Prepaid/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            otb: {
                // GET /order/cart/{cartId}/otb
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/otb
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/otb/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/otb/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            ovhCloudConnect: {
                // GET /order/cart/{cartId}/ovhCloudConnect
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ovhCloudConnect
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            paasmon: {
                // GET /order/cart/{cartId}/paasmon
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/paasmon
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            privateCloudCDI: {
                // GET /order/cart/{cartId}/privateCloudCDI
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudCDI
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudCDI/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudCDI/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            privateCloudDC: {
                // GET /order/cart/{cartId}/privateCloudDC
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudDC
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudDC/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudDC/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            privateCloudReseller: {
                // GET /order/cart/{cartId}/privateCloudReseller
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudReseller
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudReseller/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudReseller/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            privateCloudResellerEnterprise: {
                // GET /order/cart/{cartId}/privateCloudResellerEnterprise
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudResellerEnterprise
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudResellerEnterprise/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudResellerEnterprise/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            privateCloudSDDC: {
                // GET /order/cart/{cartId}/privateCloudSDDC
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudSDDC
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/privateCloudSDDC/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudSDDC/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            reseller: {
                // GET /order/cart/{cartId}/reseller
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/reseller
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            sharepoint: {
                // GET /order/cart/{cartId}/sharepoint
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sharepoint
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/sharepoint/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/sharepoint/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            sms: {
                // GET /order/cart/{cartId}/sms
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sms
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            sslComodo: {
                // GET /order/cart/{cartId}/sslComodo
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sslComodo
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/sslComodo/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/sslComodo/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            sslGateway: {
                // GET /order/cart/{cartId}/sslGateway
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sslGateway
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/sslGateway/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/sslGateway/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            summary: {
                // GET /order/cart/{cartId}/summary
                $get(): Promise<order.Order>;
            }
            telephony: {
                // GET /order/cart/{cartId}/telephony
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/telephony
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/telephony/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/telephony/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            vco: {
                // GET /order/cart/{cartId}/vco
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vco
                $post(body?: {duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            vdi: {
                // GET /order/cart/{cartId}/vdi
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vdi
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/vdi/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/vdi/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            veeamEnterprise: {
                // GET /order/cart/{cartId}/veeamEnterprise
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/veeamEnterprise
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/veeamEnterprise/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/veeamEnterprise/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            veeamcc: {
                // GET /order/cart/{cartId}/veeamcc
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/veeamcc
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/veeamcc/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/veeamcc/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            vps: {
                // GET /order/cart/{cartId}/vps
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vps
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/vps/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/vps/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            vrack: {
                // GET /order/cart/{cartId}/vrack
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vrack
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            vrackReseller: {
                // GET /order/cart/{cartId}/vrackReseller
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vrackReseller
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            webHosting: {
                // GET /order/cart/{cartId}/webHosting
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/webHosting
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/webHosting/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/webHosting/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            xdsl: {
                // GET /order/cart/{cartId}/xdsl
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/xdsl
                $post(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options: {
                    // GET /order/cart/{cartId}/xdsl/options
                    $get(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/xdsl/options
                    $post(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
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
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        dedicated: {
            // GET /order/cartServiceOption/dedicated
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/dedicated/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/dedicated/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        domain: {
            // GET /order/cartServiceOption/domain
            $get(param?: {whoisOwner?: string}): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/domain/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/domain/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        emailpro: {
            // GET /order/cartServiceOption/emailpro
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/emailpro/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/emailpro/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        ipLoadbalancing: {
            // GET /order/cartServiceOption/ipLoadbalancing
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/ipLoadbalancing/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/ipLoadbalancing/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        logs: {
            // GET /order/cartServiceOption/logs
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/logs/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/logs/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        microsoft: {
            // GET /order/cartServiceOption/microsoft
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/microsoft/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/microsoft/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        microsoftExchange: {
            // GET /order/cartServiceOption/microsoftExchange
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/microsoftExchange/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/microsoftExchange/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        office365Prepaid: {
            // GET /order/cartServiceOption/office365Prepaid
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/office365Prepaid/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/office365Prepaid/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        privateCloud: {
            // GET /order/cartServiceOption/privateCloud
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloud/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloud/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        privateCloudReseller: {
            // GET /order/cartServiceOption/privateCloudReseller
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloudReseller/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloudReseller/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        privateCloudResellerEnterprise: {
            // GET /order/cartServiceOption/privateCloudResellerEnterprise
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        sharepoint: {
            // GET /order/cartServiceOption/sharepoint
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/sharepoint/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/sharepoint/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        sslGateway: {
            // GET /order/cartServiceOption/sslGateway
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/sslGateway/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/sslGateway/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        vdi: {
            // GET /order/cartServiceOption/vdi
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/vdi/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/vdi/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        vps: {
            // GET /order/cartServiceOption/vps
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/vps/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/vps/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
        webHosting: {
            // GET /order/cartServiceOption/webHosting
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cartServiceOption/webHosting/{serviceName}
                $get(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/webHosting/{serviceName}
                $post(body?: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            };
        }
    }
    catalog: {
        formatted: {
            // GET /order/catalog/formatted
            $get(): Promise<string[]>;
            cloud: {
                // GET /order/catalog/formatted/cloud
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            dedicated: {
                // GET /order/catalog/formatted/dedicated
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            deskaas: {
                // GET /order/catalog/formatted/deskaas
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            discover: {
                // GET /order/catalog/formatted/discover
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            ip: {
                // GET /order/catalog/formatted/ip
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseCloudLinux: {
                // GET /order/catalog/formatted/licenseCloudLinux
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseDirectadmin: {
                // GET /order/catalog/formatted/licenseDirectadmin
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licensePlesk: {
                // GET /order/catalog/formatted/licensePlesk
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseSqlServer: {
                // GET /order/catalog/formatted/licenseSqlServer
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseVirtuozzo: {
                // GET /order/catalog/formatted/licenseVirtuozzo
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseWindows: {
                // GET /order/catalog/formatted/licenseWindows
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseWorklight: {
                // GET /order/catalog/formatted/licenseWorklight
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licensecPanel: {
                // GET /order/catalog/formatted/licensecPanel
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            logs: {
                // GET /order/catalog/formatted/logs
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            privateCloudCDI: {
                // GET /order/catalog/formatted/privateCloudCDI
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
            }
            privateCloudDC: {
                // GET /order/catalog/formatted/privateCloudDC
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
            }
            privateCloudReseller: {
                // GET /order/catalog/formatted/privateCloudReseller
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.pcc.Catalog>;
            }
            privateCloudResellerEnterprise: {
                // GET /order/catalog/formatted/privateCloudResellerEnterprise
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.pcc.Catalog>;
            }
            privateCloudSDDC: {
                // GET /order/catalog/formatted/privateCloudSDDC
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
            }
            reseller: {
                // GET /order/catalog/formatted/reseller
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            vps: {
                // GET /order/catalog/formatted/vps
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
        }
        public: {
            baremetalServers: {
                // GET /order/catalog/public/baremetalServers
                $get(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.publik.DedicatedServerCatalog>;
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
                    $get(param?: {backend: number}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/cdn/dedicated/{serviceName}/backend/{duration}
                        $get(param?: {backend: number}): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/backend/{duration}
                        $post(body?: {backend: number}): Promise<order.Order>;
                    };
                }
                cacheRule: {
                    // GET /order/cdn/dedicated/{serviceName}/cacheRule
                    $get(param?: {cacheRule: cdnanycast.OrderCacheRuleEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/cdn/dedicated/{serviceName}/cacheRule/{duration}
                        $get(param?: {cacheRule: cdnanycast.OrderCacheRuleEnum}): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/cacheRule/{duration}
                        $post(body?: {cacheRule: cdnanycast.OrderCacheRuleEnum}): Promise<order.Order>;
                    };
                }
                quota: {
                    // GET /order/cdn/dedicated/{serviceName}/quota
                    $get(param?: {quota: cdnanycast.OrderQuotaEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/cdn/dedicated/{serviceName}/quota/{duration}
                        $get(param?: {quota: cdnanycast.OrderQuotaEnum}): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/quota/{duration}
                        $post(body?: {quota: cdnanycast.OrderQuotaEnum}): Promise<order.Order>;
                    };
                }
            };
        }
        webstorage: {
            // GET /order/cdn/webstorage
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/cdn/webstorage/{serviceName}
                $get(): Promise<string[]>;
                storage: {
                    // GET /order/cdn/webstorage/{serviceName}/storage
                    $get(param?: {storage: cdn.webstorage.OrderStorageEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/cdn/webstorage/{serviceName}/storage/{duration}
                        $get(param?: {storage: cdn.webstorage.OrderStorageEnum}): Promise<order.Order>;
                        // POST /order/cdn/webstorage/{serviceName}/storage/{duration}
                        $post(body?: {storage: cdn.webstorage.OrderStorageEnum}): Promise<order.Order>;
                    };
                }
                traffic: {
                    // GET /order/cdn/webstorage/{serviceName}/traffic
                    $get(param?: {bandwidth: cdn.webstorage.OrderTrafficEnum}): Promise<order.Order>;
                    // POST /order/cdn/webstorage/{serviceName}/traffic
                    $post(body?: {bandwidth: cdn.webstorage.OrderTrafficEnum}): Promise<order.Order>;
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
                    $get(param?: {amount: number}): Promise<order.Order>;
                    // POST /order/cloud/project/{serviceName}/credit
                    $post(body?: {amount: number}): Promise<order.Order>;
                }
                ip: {
                    // GET /order/cloud/project/{serviceName}/ip
                    $get(param?: {country?: vps.ip.GeolocationEnum, instanceId: string, quantity: number}): Promise<order.Order>;
                    // POST /order/cloud/project/{serviceName}/ip
                    $post(body?: {country?: vps.ip.GeolocationEnum, instanceId: string, quantity: number}): Promise<order.Order>;
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
                $get(param?: {datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicated/nasha/new/{duration}
                    $get(param?: {datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}): Promise<order.Order>;
                    // POST /order/dedicated/nasha/new/{duration}
                    $post(body?: {datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}): Promise<order.Order>;
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
                    $get(param?: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/backupStorage/{duration}
                        $get(param?: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/backupStorage/{duration}
                        $post(body?: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<order.Order>;
                    };
                }
                bandwidth: {
                    // GET /order/dedicated/server/{serviceName}/bandwidth
                    $get(param?: {bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/bandwidth/{duration}
                        $get(param?: {bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/bandwidth/{duration}
                        $post(body?: {bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}): Promise<order.Order>;
                    };
                }
                bandwidthvRack: {
                    // GET /order/dedicated/server/{serviceName}/bandwidthvRack
                    $get(param?: {bandwidth: dedicated.server.BandwidthvRackOrderEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/bandwidthvRack/{duration}
                        $get(param?: {bandwidth: dedicated.server.BandwidthvRackOrderEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/bandwidthvRack/{duration}
                        $post(body?: {bandwidth: dedicated.server.BandwidthvRackOrderEnum}): Promise<order.Order>;
                    };
                }
                failoverIP: {
                    // GET /order/dedicated/server/{serviceName}/failoverIP
                    $get(param?: {country: dedicated.server.IpCountryEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/failoverIP/{duration}
                        $get(param?: {country: dedicated.server.IpCountryEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/failoverIP/{duration}
                        $post(body?: {country: dedicated.server.IpCountryEnum}): Promise<order.Order>;
                    };
                }
                feature: {
                    // GET /order/dedicated/server/{serviceName}/feature
                    $get(param?: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/feature/{duration}
                        $get(param?: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/feature/{duration}
                        $post(body?: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<order.Order>;
                    };
                }
                firewall: {
                    // GET /order/dedicated/server/{serviceName}/firewall
                    $get(param?: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/firewall/{duration}
                        $get(param?: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/firewall/{duration}
                        $post(body?: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<order.Order>;
                    };
                }
                ip: {
                    // GET /order/dedicated/server/{serviceName}/ip
                    $get(param?: {blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/ip/{duration}
                        $get(param?: {blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/ip/{duration}
                        $post(body?: {blockSize: dedicated.server.IpBlockSizeEnum, country?: dedicated.server.IpCountryEnum, organisationId?: string, type: dedicated.server.IpTypeOrderableEnum}): Promise<order.Order>;
                    };
                }
                ipMigration: {
                    // GET /order/dedicated/server/{serviceName}/ipMigration
                    $get(param?: {ip: string, token: string}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/ipMigration/{duration}
                        $get(param?: {ip: string, token: string}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/ipMigration/{duration}
                        $post(body?: {ip: string, token: string}): Promise<order.Order>;
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
                    $get(param?: {country: dedicated.server.IpStaticCountryEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/staticIP/{duration}
                        $get(param?: {country: dedicated.server.IpStaticCountryEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/staticIP/{duration}
                        $post(body?: {country: dedicated.server.IpStaticCountryEnum}): Promise<order.Order>;
                    };
                }
                traffic: {
                    // GET /order/dedicated/server/{serviceName}/traffic
                    $get(param?: {traffic: dedicated.server.TrafficOrderEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/traffic/{duration}
                        $get(param?: {traffic: dedicated.server.TrafficOrderEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/traffic/{duration}
                        $post(body?: {traffic: dedicated.server.TrafficOrderEnum}): Promise<order.Order>;
                    };
                }
                usbKey: {
                    // GET /order/dedicated/server/{serviceName}/usbKey
                    $get(param?: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/dedicated/server/{serviceName}/usbKey/{duration}
                        $get(param?: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/usbKey/{duration}
                        $post(body?: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<order.Order>;
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
                $get(param?: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                    $get(param?: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                    $post(body?: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<order.Order>;
                };
            }
            filer: {
                // GET /order/dedicatedCloud/{serviceName}/filer
                $get(param?: {datacenterId?: number, name: string, quantity?: number}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/filer/{duration}
                    $get(param?: {datacenterId?: number, name: string, quantity?: number}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/filer/{duration}
                    $post(body?: {datacenterId?: number, name: string, quantity?: number}): Promise<order.Order>;
                };
            }
            host: {
                // GET /order/dedicatedCloud/{serviceName}/host
                $get(param?: {datacenterId: number, name: string, quantity?: number}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/host/{duration}
                    $get(param?: {datacenterId: number, name: string, quantity?: number}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/host/{duration}
                    $post(body?: {datacenterId: number, name: string, quantity?: number}): Promise<order.Order>;
                };
            }
            ip: {
                // GET /order/dedicatedCloud/{serviceName}/ip
                $get(param?: {country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/ip/{duration}
                    $get(param?: {country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/ip/{duration}
                    $post(body?: {country: dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<order.Order>;
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
                $get(param?: {upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                    $get(param?: {upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                    $post(body?: {upgradedRessourceId?: number, upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<order.Order>;
                };
            }
            vdi: {
                // GET /order/dedicatedCloud/{serviceName}/vdi
                $get(param?: {datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string}): Promise<order.Order>;
                // POST /order/dedicatedCloud/{serviceName}/vdi
                $post(body?: {datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string}): Promise<order.Order>;
            }
        };
    }
    domain: {
        zone: {
            // GET /order/domain/zone
            $get(): Promise<string[]>;
            new: {
                // GET /order/domain/zone/new
                $get(param?: {minimized?: boolean, zoneName: string}): Promise<order.Order>;
                // POST /order/domain/zone/new
                $post(body?: {minimized?: boolean, zoneName: string}): Promise<order.Order>;
            }
            $(zoneName: string): {
                // GET /order/domain/zone/{zoneName}
                $get(): Promise<string[]>;
                dnsAnycast: {
                    // GET /order/domain/zone/{zoneName}/dnsAnycast
                    $get(): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/domain/zone/{zoneName}/dnsAnycast/{duration}
                        $get(): Promise<order.Order>;
                        // POST /order/domain/zone/{zoneName}/dnsAnycast/{duration}
                        $post(): Promise<order.Order>;
                    };
                }
            };
        }
    }
    email: {
        domain: {
            // GET /order/email/domain
            $get(): Promise<string[]>;
            new: {
                // GET /order/email/domain/new
                $get(param?: {domain: string, offer: email.domain.OfferEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/email/domain/new/{duration}
                    $get(param?: {domain: string, offer: email.domain.OfferEnum}): Promise<order.Order>;
                    // POST /order/email/domain/new/{duration}
                    $post(body?: {domain: string, offer: email.domain.OfferEnum}): Promise<order.Order>;
                };
            }
        }
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
                            $get(param?: {licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum}): Promise<string[]>;
                            $(duration: string): {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}
                                $get(param?: {licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum}): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}
                                $post(body?: {licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum}): Promise<order.Order>;
                            };
                        }
                        accountUpgrade: {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade
                            $get(param?: {newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string}): Promise<string[]>;
                            $(duration: string): {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}
                                $get(param?: {newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string}): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}
                                $post(body?: {newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string}): Promise<order.Order>;
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
                            $get(param?: {licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<string[]>;
                            $(duration: string): {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}
                                $get(param?: {licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}
                                $post(body?: {licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<order.Order>;
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
        pro: {
            // GET /order/email/pro
            $get(): Promise<string[]>;
            $(service: string): {
                // GET /order/email/pro/{service}
                $get(): Promise<string[]>;
                account: {
                    // GET /order/email/pro/{service}/account
                    $get(param?: {number: number}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/email/pro/{service}/account/{duration}
                        $get(param?: {number: number}): Promise<order.Order>;
                        // POST /order/email/pro/{service}/account/{duration}
                        $post(body?: {number: number}): Promise<order.Order>;
                    };
                }
            };
        }
    }
    freefax: {
        // GET /order/freefax
        $get(): Promise<string[]>;
        new: {
            // GET /order/freefax/new
            $get(param?: {quantity: freefax.QuantityEnum}): Promise<order.Order>;
            // POST /order/freefax/new
            $post(body?: {quantity: freefax.QuantityEnum}): Promise<order.Order>;
        }
        $(serviceName: string): {
            // GET /order/freefax/{serviceName}
            $get(): Promise<string[]>;
            convertToVoicefax: {
                // GET /order/freefax/{serviceName}/convertToVoicefax
                $get(param?: {billingAccount: string}): Promise<order.Order>;
                // POST /order/freefax/{serviceName}/convertToVoicefax
                $post(body?: {billingAccount: string}): Promise<order.Order>;
            }
        };
    }
    hosting: {
        privateDatabase: {
            // GET /order/hosting/privateDatabase
            $get(): Promise<string[]>;
            new: {
                // GET /order/hosting/privateDatabase/new
                $get(param?: {datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, version: hosting.PrivateDatabase.OrderableVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/hosting/privateDatabase/new/{duration}
                    $get(param?: {datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, version: hosting.PrivateDatabase.OrderableVersionEnum}): Promise<order.Order>;
                    // POST /order/hosting/privateDatabase/new/{duration}
                    $post(body?: {datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, version: hosting.PrivateDatabase.OrderableVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/hosting/privateDatabase/{serviceName}
                $get(): Promise<string[]>;
                ram: {
                    // GET /order/hosting/privateDatabase/{serviceName}/ram
                    $get(param?: {ram: hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/hosting/privateDatabase/{serviceName}/ram/{duration}
                        $get(param?: {ram: hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<order.Order>;
                        // POST /order/hosting/privateDatabase/{serviceName}/ram/{duration}
                        $post(body?: {ram: hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<order.Order>;
                    };
                }
            };
        }
        web: {
            // GET /order/hosting/web
            $get(): Promise<string[]>;
            new: {
                // GET /order/hosting/web/new
                $get(param?: {dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/hosting/web/new/{duration}
                    $get(param?: {dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
                    // POST /order/hosting/web/new/{duration}
                    $post(body?: {dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/hosting/web/{serviceName}
                $get(): Promise<string[]>;
                bandwidth: {
                    // GET /order/hosting/web/{serviceName}/bandwidth
                    $get(param?: {traffic: hosting.web.BandwidthOfferEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/hosting/web/{serviceName}/bandwidth/{duration}
                        $get(param?: {traffic: hosting.web.BandwidthOfferEnum}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/bandwidth/{duration}
                        $post(body?: {traffic: hosting.web.BandwidthOfferEnum}): Promise<order.Order>;
                    };
                }
                cdn: {
                    // GET /order/hosting/web/{serviceName}/cdn
                    $get(param?: {offer: hosting.web.CdnOfferEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/hosting/web/{serviceName}/cdn/{duration}
                        $get(param?: {offer: hosting.web.CdnOfferEnum}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/cdn/{duration}
                        $post(body?: {offer: hosting.web.CdnOfferEnum}): Promise<order.Order>;
                    };
                }
                changeMainDomain: {
                    // GET /order/hosting/web/{serviceName}/changeMainDomain
                    $get(param?: {domain: string, mxplan: hosting.web.order.MxPlanEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/hosting/web/{serviceName}/changeMainDomain/{duration}
                        $get(param?: {domain: string, mxplan: hosting.web.order.MxPlanEnum}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/changeMainDomain/{duration}
                        $post(body?: {domain: string, mxplan: hosting.web.order.MxPlanEnum}): Promise<order.Order>;
                    };
                }
                extraSqlPerso: {
                    // GET /order/hosting/web/{serviceName}/extraSqlPerso
                    $get(param?: {offer: hosting.web.database.SqlPersoOfferEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/hosting/web/{serviceName}/extraSqlPerso/{duration}
                        $get(param?: {offer: hosting.web.database.SqlPersoOfferEnum}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/extraSqlPerso/{duration}
                        $post(body?: {offer: hosting.web.database.SqlPersoOfferEnum}): Promise<order.Order>;
                    };
                }
                ssl: {
                    // GET /order/hosting/web/{serviceName}/ssl
                    $get(): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/hosting/web/{serviceName}/ssl/{duration}
                        $get(): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/ssl/{duration}
                        $post(): Promise<order.Order>;
                    };
                }
                upgrade: {
                    // GET /order/hosting/web/{serviceName}/upgrade
                    $get(param?: {offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/hosting/web/{serviceName}/upgrade/{duration}
                        $get(param?: {offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/upgrade/{duration}
                        $post(body?: {offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
                    };
                }
            };
        }
    }
    hpcspot: {
        new: {
            // GET /order/hpcspot/new
            $get(): Promise<string[]>;
            $(duration: string): {
                // GET /order/hpcspot/new/{duration}
                $get(): Promise<order.Order>;
                // POST /order/hpcspot/new/{duration}
                $post(): Promise<order.Order>;
            };
        }
    }
    license: {
        cloudLinux: {
            new: {
                // GET /order/license/cloudLinux/new
                $get(param?: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/cloudLinux/new/{duration}
                    $get(param?: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<order.Order>;
                    // POST /order/license/cloudLinux/new/{duration}
                    $post(body?: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<order.Order>;
                };
            }
        }
        cpanel: {
            new: {
                // GET /order/license/cpanel/new
                $get(param?: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/cpanel/new/{duration}
                    $get(param?: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}): Promise<order.Order>;
                    // POST /order/license/cpanel/new/{duration}
                    $post(body?: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableCpanelVersionEnum}): Promise<order.Order>;
                };
            }
        }
        directadmin: {
            new: {
                // GET /order/license/directadmin/new
                $get(param?: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/directadmin/new/{duration}
                    $get(param?: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}): Promise<order.Order>;
                    // POST /order/license/directadmin/new/{duration}
                    $post(body?: {ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum}): Promise<order.Order>;
                };
            }
        }
        office: {
            new: {
                // GET /order/license/office/new
                $get(param?: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/office/new/{duration}
                    $get(param?: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<order.Order>;
                    // POST /order/license/office/new/{duration}
                    $post(body?: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<order.Order>;
                };
            }
        }
        plesk: {
            // GET /order/license/plesk
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/plesk/new
                $get(param?: {antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/plesk/new/{duration}
                    $get(param?: {antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
                    // POST /order/license/plesk/new/{duration}
                    $post(body?: {antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: license.LicenseTypeEnum, version: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/plesk/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/plesk/{serviceName}/upgrade
                    $get(param?: {antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/plesk/{serviceName}/upgrade/{duration}
                        $get(param?: {antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
                        // POST /order/license/plesk/{serviceName}/upgrade/{duration}
                        $post(body?: {antispam?: license.OrderableAntispamEnum, antivirus?: license.OrderableAntivirusEnum, applicationSet?: license.PleskApplicationSetEnum, domainNumber?: license.OrderablePleskDomainNumberEnum, languagePackNumber?: license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
                    };
                }
            };
        }
        sqlserver: {
            // GET /order/license/sqlserver
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/sqlserver/new
                $get(param?: {ip: string, version: license.SqlServerVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/sqlserver/new/{duration}
                    $get(param?: {ip: string, version: license.SqlServerVersionEnum}): Promise<order.Order>;
                    // POST /order/license/sqlserver/new/{duration}
                    $post(body?: {ip: string, version: license.SqlServerVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/sqlserver/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/sqlserver/{serviceName}/upgrade
                    $get(param?: {version: license.SqlServerVersionEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/sqlserver/{serviceName}/upgrade/{duration}
                        $get(param?: {version: license.SqlServerVersionEnum}): Promise<order.Order>;
                        // POST /order/license/sqlserver/{serviceName}/upgrade/{duration}
                        $post(body?: {version: license.SqlServerVersionEnum}): Promise<order.Order>;
                    };
                }
            };
        }
        virtuozzo: {
            // GET /order/license/virtuozzo
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/virtuozzo/new
                $get(param?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/virtuozzo/new/{duration}
                    $get(param?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<order.Order>;
                    // POST /order/license/virtuozzo/new/{duration}
                    $post(body?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/virtuozzo/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/virtuozzo/{serviceName}/upgrade
                    $get(param?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                        $get(param?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<order.Order>;
                        // POST /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                        $post(body?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<order.Order>;
                    };
                }
            };
        }
        windows: {
            // GET /order/license/windows
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/windows/new
                $get(param?: {ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/windows/new/{duration}
                    $get(param?: {ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}): Promise<order.Order>;
                    // POST /order/license/windows/new/{duration}
                    $post(body?: {ip: string, serviceType?: license.LicenseTypeEnum, sqlVersion?: license.WindowsSqlVersionEnum, version: license.WindowsOsVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/windows/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/windows/{serviceName}/upgrade
                    $get(param?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/windows/{serviceName}/upgrade/{duration}
                        $get(param?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<order.Order>;
                        // POST /order/license/windows/{serviceName}/upgrade/{duration}
                        $post(body?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<order.Order>;
                    };
                }
            };
        }
        worklight: {
            // GET /order/license/worklight
            $get(): Promise<string[]>;
            new: {
                // GET /order/license/worklight/new
                $get(param?: {ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/license/worklight/new/{duration}
                    $get(param?: {ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum}): Promise<order.Order>;
                    // POST /order/license/worklight/new/{duration}
                    $post(body?: {ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum}): Promise<order.Order>;
                };
            }
            $(serviceName: string): {
                // GET /order/license/worklight/{serviceName}
                $get(): Promise<string[]>;
                upgrade: {
                    // GET /order/license/worklight/{serviceName}/upgrade
                    $get(param?: {version: license.WorkLightVersionEnum}): Promise<string[]>;
                    $(duration: string): {
                        // GET /order/license/worklight/{serviceName}/upgrade/{duration}
                        $get(param?: {version: license.WorkLightVersionEnum}): Promise<order.Order>;
                        // POST /order/license/worklight/{serviceName}/upgrade/{duration}
                        $post(body?: {version: license.WorkLightVersionEnum}): Promise<order.Order>;
                    };
                }
            };
        }
    }
    overTheBox: {
        // GET /order/overTheBox
        $get(): Promise<string[]>;
        new: {
            // GET /order/overTheBox/new
            $get(param?: {deviceId?: string, offer: string, voucher?: string}): Promise<string[]>;
            $(duration: string): {
                // GET /order/overTheBox/new/{duration}
                $get(param?: {deviceId?: string, offer: string, voucher?: string}): Promise<order.Order>;
                // POST /order/overTheBox/new/{duration}
                $post(body?: {deviceId?: string, offer: string, voucher?: string}): Promise<order.Order>;
            };
        }
        $(serviceName: string): {
            // GET /order/overTheBox/{serviceName}
            $get(): Promise<string[]>;
            migrate: {
                // GET /order/overTheBox/{serviceName}/migrate
                $get(param?: {hardware: boolean, offer: string, shippingContactID?: string, shippingMethod?: overTheBox.ShippingMethodEnum, shippingRelayID?: number}): Promise<order.Order>;
                // POST /order/overTheBox/{serviceName}/migrate
                $post(body?: {hardware: boolean, offer: string, shippingContactID?: string, shippingMethod?: overTheBox.ShippingMethodEnum, shippingRelayID?: number}): Promise<order.Order>;
            }
        };
    }
    router: {
        new: {
            // GET /order/router/new
            $get(param?: {vrack: string}): Promise<string[]>;
            $(duration: string): {
                // GET /order/router/new/{duration}
                $get(param?: {vrack: string}): Promise<order.Order>;
                // POST /order/router/new/{duration}
                $post(body?: {vrack: string}): Promise<order.Order>;
            };
        }
    }
    saas: {
        csp2: {
            new: {
                // GET /order/saas/csp2/new
                $get(param?: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/saas/csp2/new/{duration}
                    $get(param?: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<order.Order>;
                    // POST /order/saas/csp2/new/{duration}
                    $post(body?: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<order.Order>;
                };
            }
        }
    }
    sms: {
        // GET /order/sms
        $get(): Promise<string[]>;
        new: {
            // GET /order/sms/new
            $get(param?: {quantity: number}): Promise<order.Order>;
            // POST /order/sms/new
            $post(body?: {quantity: number}): Promise<order.Order>;
        }
        $(serviceName: string): {
            // GET /order/sms/{serviceName}
            $get(): Promise<string[]>;
            credits: {
                // GET /order/sms/{serviceName}/credits
                $get(param?: {quantity: number}): Promise<order.Order>;
                // POST /order/sms/{serviceName}/credits
                $post(body?: {quantity: number}): Promise<order.Order>;
            }
        };
    }
    telephony: {
        // GET /order/telephony
        $get(): Promise<string[]>;
        lines: {
            // GET /order/telephony/lines
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/telephony/lines/{serviceName}
                $get(): Promise<string[]>;
                addSimultaneousLines: {
                    // GET /order/telephony/lines/{serviceName}/addSimultaneousLines
                    $get(param?: {billingAccount: string, quantity: number}): Promise<order.Order>;
                    // POST /order/telephony/lines/{serviceName}/addSimultaneousLines
                    $post(body?: {billingAccount: string, quantity: number}): Promise<order.Order>;
                }
                hardware: {
                    // GET /order/telephony/lines/{serviceName}/hardware
                    $get(param?: {hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}): Promise<order.Order>;
                    // POST /order/telephony/lines/{serviceName}/hardware
                    $post(body?: {hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}): Promise<order.Order>;
                }
                updateSimultaneousChannels: {
                    // GET /order/telephony/lines/{serviceName}/updateSimultaneousChannels
                    $get(param?: {quantity: number}): Promise<order.Order>;
                    // POST /order/telephony/lines/{serviceName}/updateSimultaneousChannels
                    $post(body?: {quantity: number}): Promise<order.Order>;
                }
            };
        }
        new: {
            // GET /order/telephony/new
            $get(): Promise<order.Order>;
            // POST /order/telephony/new
            $post(): Promise<order.Order>;
        }
        spare: {
            new: {
                // GET /order/telephony/spare/new
                $get(param?: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}): Promise<order.Order>;
                // POST /order/telephony/spare/new
                $post(body?: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}): Promise<order.Order>;
            }
        }
        trunks: {
            // GET /order/telephony/trunks
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/telephony/trunks/{serviceName}
                $get(): Promise<string[]>;
                addSimultaneousLines: {
                    // GET /order/telephony/trunks/{serviceName}/addSimultaneousLines
                    $get(param?: {billingAccount: string, quantity: number}): Promise<order.Order>;
                    // POST /order/telephony/trunks/{serviceName}/addSimultaneousLines
                    $post(body?: {billingAccount: string, quantity: number}): Promise<order.Order>;
                }
                hardware: {
                    // GET /order/telephony/trunks/{serviceName}/hardware
                    $get(param?: {hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}): Promise<order.Order>;
                    // POST /order/telephony/trunks/{serviceName}/hardware
                    $post(body?: {hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}): Promise<order.Order>;
                }
                updateSimultaneousChannels: {
                    // GET /order/telephony/trunks/{serviceName}/updateSimultaneousChannels
                    $get(param?: {quantity: number}): Promise<order.Order>;
                    // POST /order/telephony/trunks/{serviceName}/updateSimultaneousChannels
                    $post(body?: {quantity: number}): Promise<order.Order>;
                }
            };
        }
        $(billingAccount: string): {
            // GET /order/telephony/{billingAccount}
            $get(): Promise<string[]>;
            accessories: {
                // GET /order/telephony/{billingAccount}/accessories
                $get(param?: {accessories: string[], mondialRelayId?: string, retractation: boolean, shippingContactId: number}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/accessories
                $post(body?: {accessories: string[], mondialRelayId?: string, retractation: boolean, shippingContactId: number}): Promise<order.Order>;
            }
            line: {
                // GET /order/telephony/{billingAccount}/line
                $get(param?: {brand?: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], mondialRelayId?: string, offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: telephony.LineTypeEnum[], zones?: string[]}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/line
                $post(body?: {brand?: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], mondialRelayId?: string, offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: telephony.LineTypeEnum[], zones?: string[]}): Promise<order.Order>;
            }
            numberGeographic: {
                // GET /order/telephony/{billingAccount}/numberGeographic
                $get(param?: {ape?: string, city: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string, zone: string}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/numberGeographic
                $post(body?: {ape?: string, city: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string, zone: string}): Promise<order.Order>;
            }
            numberNogeographic: {
                // GET /order/telephony/{billingAccount}/numberNogeographic
                $get(param?: {ape?: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/numberNogeographic
                $post(body?: {ape?: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string}): Promise<order.Order>;
            }
            numberSpecial: {
                // GET /order/telephony/{billingAccount}/numberSpecial
                $get(param?: {ape: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, range: string, retractation: boolean, siret: string, socialNomination: string, specificNumber?: string, streetName?: string, streetNumber?: string, typology: telephony.NumberSpecialTypologyEnum, zip?: string}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/numberSpecial
                $post(body?: {ape: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, range: string, retractation: boolean, siret: string, socialNomination: string, specificNumber?: string, streetName?: string, streetNumber?: string, typology: telephony.NumberSpecialTypologyEnum, zip?: string}): Promise<order.Order>;
            }
            portability: {
                // GET /order/telephony/{billingAccount}/portability
                $get(param?: {building?: string, callNumber: string, city: string, contactName?: string, contactNumber?: string, country: telephony.portability.CountriesAvailable, desireDate?: string, displayUniversalDirectory: boolean, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, firstName: string, floor?: number, lineToRedirectAliasTo?: string, listNumbers?: string, mobilePhone?: string, name: string, offer: telephony.portability.OfferType, rio?: string, siret?: string, socialReason: telephony.portability.SocialReason, specialNumberCategory?: telephony.portability.SpecialNumberCategoryEnum, stair?: number, streetName: string, streetNumber: number, streetNumberExtra?: string, streetType?: string, type: telephony.portability.NumberType, zip: string}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/portability
                $post(body?: {building?: string, callNumber: string, city: string, contactName?: string, contactNumber?: string, country: telephony.portability.CountriesAvailable, desireDate?: string, displayUniversalDirectory: boolean, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, firstName: string, floor?: number, lineToRedirectAliasTo?: string, listNumbers?: string, mobilePhone?: string, name: string, offer: telephony.portability.OfferType, rio?: string, siret?: string, socialReason: telephony.portability.SocialReason, specialNumberCategory?: telephony.portability.SpecialNumberCategoryEnum, stair?: number, streetName: string, streetNumber: number, streetNumberExtra?: string, streetType?: string, type: telephony.portability.NumberType, zip: string}): Promise<order.Order>;
            }
            securityDeposit: {
                // GET /order/telephony/{billingAccount}/securityDeposit
                $get(param?: {amount: telephony.SecurityDepositAmountsEnum}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/securityDeposit
                $post(body?: {amount: telephony.SecurityDepositAmountsEnum}): Promise<order.Order>;
            }
        };
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
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/cephaas/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/ipLoadbalancing/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        logs: {
            // GET /order/upgrade/logs
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/logs/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/logs/{serviceName}/{planCode}
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/logs/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        metrics: {
            // GET /order/upgrade/metrics
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/metrics/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/metrics/{serviceName}/{planCode}
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/metrics/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        microsoftExchange: {
            // GET /order/upgrade/microsoftExchange
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/microsoftExchange/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/microsoftExchange/{serviceName}/{planCode}
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/microsoftExchange/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/privateCloud/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                };
            };
        }
        sslGateway: {
            // GET /order/upgrade/sslGateway
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /order/upgrade/sslGateway/{serviceName}
                $get(): Promise<order.cart.GenericProductDefinition[]>;
                $(planCode: string): {
                    // GET /order/upgrade/sslGateway/{serviceName}/{planCode}
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/sslGateway/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
                    $get(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/vps/{serviceName}/{planCode}
                    $post(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
                $get(param?: {offer: veeamCloudConnect.Offer}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                    $get(param?: {offer: veeamCloudConnect.Offer}): Promise<order.Order>;
                    // POST /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                    $post(body?: {offer: veeamCloudConnect.Offer}): Promise<order.Order>;
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
                $get(param?: {additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/additionalDisk/{duration}
                    $get(param?: {additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/additionalDisk/{duration}
                    $post(body?: {additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<order.Order>;
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
                $get(param?: {country?: vps.ip.GeolocationEnum, number: number}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/ip/{duration}
                    $get(param?: {country?: vps.ip.GeolocationEnum, number: number}): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/ip/{duration}
                    $post(body?: {country?: vps.ip.GeolocationEnum, number: number}): Promise<order.Order>;
                };
            }
            plesk: {
                // GET /order/vps/{serviceName}/plesk
                $get(param?: {domainNumber: vps.PleskLicenseDomainNumberEnum}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/plesk/{duration}
                    $get(param?: {domainNumber: vps.PleskLicenseDomainNumberEnum}): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/plesk/{duration}
                    $post(body?: {domainNumber: vps.PleskLicenseDomainNumberEnum}): Promise<order.Order>;
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
                $get(param?: {model: string}): Promise<string[]>;
                $(duration: string): {
                    // GET /order/vps/{serviceName}/upgrade/{duration}
                    $get(param?: {model: string}): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/upgrade/{duration}
                    $post(body?: {model: string}): Promise<order.Order>;
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
            $get(param?: {quantity?: number}): Promise<order.Order>;
            // POST /order/vrack/new
            $post(body?: {quantity?: number}): Promise<order.Order>;
        }
        $(serviceName: string): {
            // GET /order/vrack/{serviceName}
            $get(): Promise<string[]>;
        };
    }
    xdsl: {
        spare: {
            new: {
                // GET /order/xdsl/spare/new
                $get(param?: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}): Promise<order.Order>;
                // POST /order/xdsl/spare/new
                $post(body?: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}): Promise<order.Order>;
            }
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
   * Create a analytics project
   * Get informations about analytics offers
   */
  get(path: '/order/cart/{cartId}/analytics'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * List all addons possible for a analytics project
   * Get informations about analytics options
   */
  get(path: '/order/cart/{cartId}/analytics/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about a baremetal server
   */
  get(path: '/order/cart/{cartId}/baremetalServers'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about baremetal server options
   */
  get(path: '/order/cart/{cartId}/baremetalServers/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about CDN offers
   */
  get(path: '/order/cart/{cartId}/cdn'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about CDN options
   */
  get(path: '/order/cart/{cartId}/cdn/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Ceph as a Service offers
   */
  get(path: '/order/cart/{cartId}/cephaas'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Ceph as a Service options
   */
  get(path: '/order/cart/{cartId}/cephaas/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
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
   * Get informations about Cloud Web offers
   */
  get(path: '/order/cart/{cartId}/cloudweb'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Cloud Web options
   */
  get(path: '/order/cart/{cartId}/cloudweb/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Retrieve coupons associated to cart
   */
  get(path: '/order/cart/{cartId}/coupon'): (params: {cartId: string}) => Promise<string[]>;
  /**
   * Missing description
   * Get informations about SaaS CSP2 offers
   */
  get(path: '/order/cart/{cartId}/csp2'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SaaS CSP2 options
   */
  get(path: '/order/cart/{cartId}/csp2/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about a timeseries offer
   */
  get(path: '/order/cart/{cartId}/dbaasTimeseries'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
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
   * Get informations about a dedicated labs server
   */
  get(path: '/order/cart/{cartId}/dedicatedLabs'): (params: {cartId: string, planCode?: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about dedicated labs server options
   */
  get(path: '/order/cart/{cartId}/dedicatedLabs/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about a dedicated server for US Reseller
   */
  get(path: '/order/cart/{cartId}/dedicatedReseller'): (params: {cartId: string, family?: string, planCode?: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about dedicated server options
   */
  get(path: '/order/cart/{cartId}/dedicatedReseller/options'): (params: {cartId: string, family?: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Desk As A Service offers
   */
  get(path: '/order/cart/{cartId}/deskaas'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
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
   * Get informations about DNS zone offer
   */
  get(path: '/order/cart/{cartId}/dns'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about a domain name
   */
  get(path: '/order/cart/{cartId}/domain'): (params: {cartId: string, domain: string}) => Promise<order.cart.ProductInformation[]>;
  /**
   * Missing description
   * Get informations about domain names options
   */
  get(path: '/order/cart/{cartId}/domain/options'): (params: {cartId: string, domain: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Domain packs offers (AllDom)
   */
  get(path: '/order/cart/{cartId}/domainPacks'): (params: {cartId: string, domain: string}) => Promise<order.cart.DomainPacksProductInformation[]>;
  /**
   * Missing description
   * Get informations about Domain Restore
   */
  get(path: '/order/cart/{cartId}/domainRestore'): (params: {cartId: string, domain: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about a domain name transfer
   */
  get(path: '/order/cart/{cartId}/domainTransfer'): (params: {cartId: string, domain: string}) => Promise<order.cart.ProductInformation[]>;
  /**
   * Missing description
   * Get informations about domain names transfer options
   */
  get(path: '/order/cart/{cartId}/domainTransfer/options'): (params: {cartId: string, domain: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about EmailPro offers
   */
  get(path: '/order/cart/{cartId}/emailpro'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about EmailPro options
   */
  get(path: '/order/cart/{cartId}/emailpro/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Exchange offers
   */
  get(path: '/order/cart/{cartId}/exchange'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Exchange options
   */
  get(path: '/order/cart/{cartId}/exchange/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Exchange Enterprise offers
   */
  get(path: '/order/cart/{cartId}/exchangeEnterprise'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Exchange Enterprise options
   */
  get(path: '/order/cart/{cartId}/exchangeEnterprise/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Hosting Reseller offers
   */
  get(path: '/order/cart/{cartId}/hostingReseller'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
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
   * Get informations about Kubernetes offers
   */
  get(path: '/order/cart/{cartId}/kubernetes'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Kubernetes options
   */
  get(path: '/order/cart/{cartId}/kubernetes/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
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
   * Get informations about Windows licenses offers
   */
  get(path: '/order/cart/{cartId}/licenseWindows'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Worklight licenses offers
   */
  get(path: '/order/cart/{cartId}/licenseWorklight'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Logs offers
   */
  get(path: '/order/cart/{cartId}/logs'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Logs options
   */
  get(path: '/order/cart/{cartId}/logs/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Managed Services offers
   */
  get(path: '/order/cart/{cartId}/managedServices'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Managed Services options
   */
  get(path: '/order/cart/{cartId}/managedServices/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Metrics offers
   */
  get(path: '/order/cart/{cartId}/metrics'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Metrics options
   */
  get(path: '/order/cart/{cartId}/metrics/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Microsoft offers
   */
  get(path: '/order/cart/{cartId}/microsoft'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Microsoft options
   */
  get(path: '/order/cart/{cartId}/microsoft/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about NAS HA offers
   */
  get(path: '/order/cart/{cartId}/nasha'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about NAS HA options
   */
  get(path: '/order/cart/{cartId}/nasha/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Office 365 licenses
   */
  get(path: '/order/cart/{cartId}/office365'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Office 365 options
   */
  get(path: '/order/cart/{cartId}/office365/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Office 365 Prepaid licenses
   */
  get(path: '/order/cart/{cartId}/office365Prepaid'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Office 365 Prepaid options
   */
  get(path: '/order/cart/{cartId}/office365Prepaid/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Over The Box offers
   */
  get(path: '/order/cart/{cartId}/otb'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Over The Box options
   */
  get(path: '/order/cart/{cartId}/otb/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about OVHcloud Connect offers
   */
  get(path: '/order/cart/{cartId}/ovhCloudConnect'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about PaaS Monitoring offers
   */
  get(path: '/order/cart/{cartId}/paasmon'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud CDI offers
   */
  get(path: '/order/cart/{cartId}/privateCloudCDI'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud CDI options
   */
  get(path: '/order/cart/{cartId}/privateCloudCDI/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Dedicated Cloud offers
   */
  get(path: '/order/cart/{cartId}/privateCloudDC'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Dedicated Cloud options
   */
  get(path: '/order/cart/{cartId}/privateCloudDC/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Reseller offers
   */
  get(path: '/order/cart/{cartId}/privateCloudReseller'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Reseller options
   */
  get(path: '/order/cart/{cartId}/privateCloudReseller/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Reseller Enterprise offers
   */
  get(path: '/order/cart/{cartId}/privateCloudResellerEnterprise'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Reseller Enterprise options
   */
  get(path: '/order/cart/{cartId}/privateCloudResellerEnterprise/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud SDDC offers
   */
  get(path: '/order/cart/{cartId}/privateCloudSDDC'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud SDDC options
   */
  get(path: '/order/cart/{cartId}/privateCloudSDDC/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Reseller offers
   */
  get(path: '/order/cart/{cartId}/reseller'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Sharepoint offers
   */
  get(path: '/order/cart/{cartId}/sharepoint'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Sharepoint options
   */
  get(path: '/order/cart/{cartId}/sharepoint/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about SMS offers
   */
  get(path: '/order/cart/{cartId}/sms'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Comodo offers
   */
  get(path: '/order/cart/{cartId}/sslComodo'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Comodo options
   */
  get(path: '/order/cart/{cartId}/sslComodo/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Gateway offers
   */
  get(path: '/order/cart/{cartId}/sslGateway'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Gateway options
   */
  get(path: '/order/cart/{cartId}/sslGateway/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get a summary of your current order
   */
  get(path: '/order/cart/{cartId}/summary'): (params: {cartId: string}) => Promise<order.Order>;
  /**
   * Missing description
   * Get informations about VoIP offers
   */
  get(path: '/order/cart/{cartId}/telephony'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about VoIP options
   */
  get(path: '/order/cart/{cartId}/telephony/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * List of OVHcloud Connect product
   * Get informations about OVHcloud Connect offers
   */
  get(path: '/order/cart/{cartId}/vco'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Horizon View offers
   */
  get(path: '/order/cart/{cartId}/vdi'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Horizon View options
   */
  get(path: '/order/cart/{cartId}/vdi/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Veeam Cloud Connect offers
   */
  get(path: '/order/cart/{cartId}/veeamcc'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Veeam Cloud Connect options
   */
  get(path: '/order/cart/{cartId}/veeamcc/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
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
   * Missing description
   * Get informations about vRack offers
   */
  get(path: '/order/cart/{cartId}/vrackReseller'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about webHosting offers
   */
  get(path: '/order/cart/{cartId}/webHosting'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about webHosting options
   */
  get(path: '/order/cart/{cartId}/webHosting/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * List of xdsl product
   * Get informations about xdsl offers
   */
  get(path: '/order/cart/{cartId}/xdsl'): (params: {cartId: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * List of xdsl addon
   * Get informations about xdsl options
   */
  get(path: '/order/cart/{cartId}/xdsl/options'): (params: {cartId: string, planCode: string}) => Promise<order.cart.GenericOptionDefinition[]>;
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
   * Operations about the DOMAIN service
   * List available services
   */
  get(path: '/order/cartServiceOption/domain'): (params?: {whoisOwner?: string}) => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/domain/#serviceName#
   * Get informations about additional Domain offer for your service
   */
  get(path: '/order/cartServiceOption/domain/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PROEMAIL service
   * List available services
   */
  get(path: '/order/cartServiceOption/emailpro'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/emailpro/#serviceName#
   * Get informations about additional EmailPro offer for your service
   */
  get(path: '/order/cartServiceOption/emailpro/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
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
   * Operations about the DBAAS-LOGS service
   * List available services
   */
  get(path: '/order/cartServiceOption/logs'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/logs/#serviceName#
   * Get informations about additional Logs offer for your service
   */
  get(path: '/order/cartServiceOption/logs/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the MSSERVICES service
   * List available services
   */
  get(path: '/order/cartServiceOption/microsoft'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/microsoft/#serviceName#
   * Get informations about additional Microsoft offer for your service
   */
  get(path: '/order/cartServiceOption/microsoft/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the EXCHANGE service
   * List available services
   */
  get(path: '/order/cartServiceOption/microsoftExchange'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName#
   * Get informations about additional Microsoft offer for your service
   */
  get(path: '/order/cartServiceOption/microsoftExchange/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the OFFICE service
   * List available services
   */
  get(path: '/order/cartServiceOption/office365Prepaid'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/office365/#serviceName#
   * Get informations about additional Office offer for your service
   */
  get(path: '/order/cartServiceOption/office365Prepaid/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
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
   * Operations about the SHAREPOINT service
   * List available services
   */
  get(path: '/order/cartServiceOption/sharepoint'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/sharepoint/#serviceName#
   * Get informations about additional Sharepoint offer for your service
   */
  get(path: '/order/cartServiceOption/sharepoint/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the SSLGATEWAY service
   * List available services
   */
  get(path: '/order/cartServiceOption/sslGateway'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/sslGateway/#serviceName#
   * Get informations about additional SSL Gateway offer for your service
   */
  get(path: '/order/cartServiceOption/sslGateway/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the HORIZONVIEW service
   * List available services
   */
  get(path: '/order/cartServiceOption/vdi'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/vdi/#serviceName#
   * Get informations about additional Horizon View offer for your service
   */
  get(path: '/order/cartServiceOption/vdi/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the VPS service
   * List available services
   */
  get(path: '/order/cartServiceOption/vps'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/vps/#serviceName#
   * Get informations about additional VPS offer for your service
   */
  get(path: '/order/cartServiceOption/vps/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the HOSTING service
   * List available services
   */
  get(path: '/order/cartServiceOption/webHosting'): () => Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/webHosting/#serviceName#
   * Get informations about additional Web Hosting offer for your service
   */
  get(path: '/order/cartServiceOption/webHosting/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericOptionDefinition[]>;
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
   * Retrieve information of Desk as a service catalog
   */
  get(path: '/order/catalog/formatted/deskaas'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
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
   * Retrieve information of Logs Data Platform catalog
   */
  get(path: '/order/catalog/formatted/logs'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud CDI catalog
   */
  get(path: '/order/catalog/formatted/privateCloudCDI'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.privateCloud.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud Dedicated Cloud catalog
   */
  get(path: '/order/catalog/formatted/privateCloudDC'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.privateCloud.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud Reseller catalog
   */
  get(path: '/order/catalog/formatted/privateCloudReseller'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.pcc.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud Reseller Enterprise catalog
   */
  get(path: '/order/catalog/formatted/privateCloudResellerEnterprise'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.pcc.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud SDDC catalog
   */
  get(path: '/order/catalog/formatted/privateCloudSDDC'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.privateCloud.Catalog>;
  /**
   * Missing description
   * Retrieve information of Reseller catalog
   */
  get(path: '/order/catalog/formatted/reseller'): (params: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}) => Promise<order.catalog.Catalog>;
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
   * Operations about the CDNANYCAST service
   * List available services
   */
  get(path: '/order/cdn/dedicated'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/cdn/dedicated/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order Backend Option
   * Get allowed durations for 'backend' option
   */
  get(path: '/order/cdn/dedicated/{serviceName}/backend'): (params: {serviceName: string, backend: number}) => Promise<string[]>;
  /**
   * Order Backend Option
   * Get prices and contracts information
   */
  get(path: '/order/cdn/dedicated/{serviceName}/backend/{duration}'): (params: {duration: string, serviceName: string, backend: number}) => Promise<order.Order>;
  /**
   * Upgrade cacheRule Option
   * Get allowed durations for 'cacheRule' option
   */
  get(path: '/order/cdn/dedicated/{serviceName}/cacheRule'): (params: {serviceName: string, cacheRule: cdnanycast.OrderCacheRuleEnum}) => Promise<string[]>;
  /**
   * Upgrade cacheRule Option
   * Get prices and contracts information
   */
  get(path: '/order/cdn/dedicated/{serviceName}/cacheRule/{duration}'): (params: {duration: string, serviceName: string, cacheRule: cdnanycast.OrderCacheRuleEnum}) => Promise<order.Order>;
  /**
   * Order Quota
   * Get allowed durations for 'quota' option
   */
  get(path: '/order/cdn/dedicated/{serviceName}/quota'): (params: {serviceName: string, quota: cdnanycast.OrderQuotaEnum}) => Promise<string[]>;
  /**
   * Order Quota
   * Get prices and contracts information
   */
  get(path: '/order/cdn/dedicated/{serviceName}/quota/{duration}'): (params: {duration: string, serviceName: string, quota: cdnanycast.OrderQuotaEnum}) => Promise<order.Order>;
  /**
   * Order a New Dedicated CDN Service
   * Get allowed durations for 'new' option
   */
  get(path: '/order/cdn/dedicated/new'): () => Promise<string[]>;
  /**
   * Order a New Dedicated CDN Service
   * Get prices and contracts information
   */
  get(path: '/order/cdn/dedicated/new/{duration}'): (params: {duration: string}) => Promise<order.Order>;
  /**
   * Operations about the CDNSTATIC service
   * List available services
   */
  get(path: '/order/cdn/webstorage'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/cdn/webstorage/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Upgrade Storage Option
   * Get allowed durations for 'storage' option
   */
  get(path: '/order/cdn/webstorage/{serviceName}/storage'): (params: {serviceName: string, storage: cdn.webstorage.OrderStorageEnum}) => Promise<string[]>;
  /**
   * Upgrade Storage Option
   * Get prices and contracts information
   */
  get(path: '/order/cdn/webstorage/{serviceName}/storage/{duration}'): (params: {duration: string, serviceName: string, storage: cdn.webstorage.OrderStorageEnum}) => Promise<order.Order>;
  /**
   * Order Traffic
   * Get prices and contracts information
   */
  get(path: '/order/cdn/webstorage/{serviceName}/traffic'): (params: {serviceName: string, bandwidth: cdn.webstorage.OrderTrafficEnum}) => Promise<order.Order>;
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  get(path: '/order/cloud/project'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/cloud/project/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order credit usable on your Cloud project
   * Get prices and contracts information
   */
  get(path: '/order/cloud/project/{serviceName}/credit'): (params: {serviceName: string, amount: number}) => Promise<order.Order>;
  /**
   * Order failover ip on your Cloud project
   * Get prices and contracts information
   */
  get(path: '/order/cloud/project/{serviceName}/ip'): (params: {serviceName: string, country?: vps.ip.GeolocationEnum, instanceId: string, quantity: number}) => Promise<order.Order>;
  /**
   * Operations about the HOUSING service
   * List available services
   */
  get(path: '/order/dedicated/housing'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/dedicated/housing/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order an APC for this bay
   * Get allowed durations for 'APC' option
   */
  get(path: '/order/dedicated/housing/{serviceName}/APC'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order an APC for this bay
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/housing/{serviceName}/APC/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order a new Nas HA
   * Get allowed durations for 'new' option
   */
  get(path: '/order/dedicated/nasha/new'): (params: {datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}) => Promise<string[]>;
  /**
   * Order a new Nas HA
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/nasha/new/{duration}'): (params: {duration: string, datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}) => Promise<order.Order>;
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
   * Order bandwidth for this server
   * Get allowed durations for 'bandwidth' option
   */
  get(path: '/order/dedicated/server/{serviceName}/bandwidth'): (params: {serviceName: string, bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}) => Promise<string[]>;
  /**
   * Order bandwidth for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/bandwidth/{duration}'): (params: {duration: string, serviceName: string, bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}) => Promise<order.Order>;
  /**
   * Order vRack bandwidth for this server
   * Get allowed durations for 'bandwidthvRack' option
   */
  get(path: '/order/dedicated/server/{serviceName}/bandwidthvRack'): (params: {serviceName: string, bandwidth: dedicated.server.BandwidthvRackOrderEnum}) => Promise<string[]>;
  /**
   * Order vRack bandwidth for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}'): (params: {duration: string, serviceName: string, bandwidth: dedicated.server.BandwidthvRackOrderEnum}) => Promise<order.Order>;
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
   * Order a kvm for this server
   * Get allowed durations for 'kvm' option
   */
  get(path: '/order/dedicated/server/{serviceName}/kvm'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order a kvm for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/kvm/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
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
   * Order professional use option
   * Get allowed durations for 'professionalUse' option
   */
  get(path: '/order/dedicated/server/{serviceName}/professionalUse'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order professional use option
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/professionalUse/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
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
   * Order additionall traffic for this server
   * Get allowed durations for 'traffic' option
   */
  get(path: '/order/dedicated/server/{serviceName}/traffic'): (params: {serviceName: string, traffic: dedicated.server.TrafficOrderEnum}) => Promise<string[]>;
  /**
   * Order additionall traffic for this server
   * Get prices and contracts information
   */
  get(path: '/order/dedicated/server/{serviceName}/traffic/{duration}'): (params: {duration: string, serviceName: string, traffic: dedicated.server.TrafficOrderEnum}) => Promise<order.Order>;
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
   * Operations about the HOSTING service
   * List available services
   */
  get(path: '/order/domain/zone'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/domain/zone/{zoneName}'): (params: {zoneName: string}) => Promise<string[]>;
  /**
   * Order Anycast
   * Get allowed durations for 'dnsAnycast' option
   */
  get(path: '/order/domain/zone/{zoneName}/dnsAnycast'): (params: {zoneName: string}) => Promise<string[]>;
  /**
   * Order Anycast
   * Get prices and contracts information
   */
  get(path: '/order/domain/zone/{zoneName}/dnsAnycast/{duration}'): (params: {duration: string, zoneName: string}) => Promise<order.Order>;
  /**
   * Order a new DNS zone
   * Get prices and contracts information
   */
  get(path: '/order/domain/zone/new'): (params: {minimized?: boolean, zoneName: string}) => Promise<order.Order>;
  /**
   * Operations about the MX service
   * List available services
   */
  get(path: '/order/email/domain'): () => Promise<string[]>;
  /**
   * Order a new mx plan
   * Get allowed durations for 'new' option
   */
  get(path: '/order/email/domain/new'): (params: {domain: string, offer: email.domain.OfferEnum}) => Promise<string[]>;
  /**
   * Order a new mx plan
   * Get prices and contracts information
   */
  get(path: '/order/email/domain/new/{duration}'): (params: {duration: string, domain: string, offer: email.domain.OfferEnum}) => Promise<order.Order>;
  /**
   * Operations about the MSSERVICES service
   * List available services
   */
  get(path: '/order/email/exchange'): () => Promise<string[]>;
  /**
   * Operations about the EXCHANGE service
   * List available services
   */
  get(path: '/order/email/exchange/{organizationName}/service'): (params: {organizationName: string}) => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}'): (params: {exchangeService: string, organizationName: string}) => Promise<string[]>;
  /**
   * Create an order for an exchange account
   * Get allowed durations for 'account' option
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account'): (params: {exchangeService: string, organizationName: string, licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum}) => Promise<string[]>;
  /**
   * Create an order for an exchange account
   * Get prices and contracts information
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}'): (params: {duration: string, exchangeService: string, organizationName: string, licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum}) => Promise<order.Order>;
  /**
   * Create an order to upgrade your hosted account storage
   * Get allowed durations for 'accountUpgrade' option
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade'): (params: {exchangeService: string, organizationName: string, newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string}) => Promise<string[]>;
  /**
   * Create an order to upgrade your hosted account storage
   * Get prices and contracts information
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}'): (params: {duration: string, exchangeService: string, organizationName: string, newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string}) => Promise<order.Order>;
  /**
   * Create an order for a additional 50GB of space (Exchange 2010 reseller only)
   * Get prices and contracts information
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace'): (params: {exchangeService: string, organizationName: string}) => Promise<order.Order>;
  /**
   * Create an order for a outlook licence.
   * Get allowed durations for 'outlook' option
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook'): (params: {exchangeService: string, organizationName: string, licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}) => Promise<string[]>;
  /**
   * Create an order for a outlook licence.
   * Get prices and contracts information
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}'): (params: {duration: string, exchangeService: string, organizationName: string, licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}) => Promise<order.Order>;
  /**
   * Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016)
   * Get prices and contracts information
   */
  get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade'): (params: {exchangeService: string, organizationName: string}) => Promise<order.Order>;
  /**
   * Operations about the PROEMAIL service
   * List available services
   */
  get(path: '/order/email/pro'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/email/pro/{service}'): (params: {service: string}) => Promise<string[]>;
  /**
   * Create an order for a pro account
   * Get allowed durations for 'account' option
   */
  get(path: '/order/email/pro/{service}/account'): (params: {service: string, number: number}) => Promise<string[]>;
  /**
   * Create an order for a pro account
   * Get prices and contracts information
   */
  get(path: '/order/email/pro/{service}/account/{duration}'): (params: {duration: string, service: string, number: number}) => Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/order/freefax'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/freefax/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Convert the freefax service to a /telephony voicefax service
   * Get prices and contracts information
   */
  get(path: '/order/freefax/{serviceName}/convertToVoicefax'): (params: {serviceName: string, billingAccount: string}) => Promise<order.Order>;
  /**
   * Credit freefax account pages
   * Get prices and contracts information
   */
  get(path: '/order/freefax/new'): (params: {quantity: freefax.QuantityEnum}) => Promise<order.Order>;
  /**
   * Operations about the SQLPRIVE service
   * List available services
   */
  get(path: '/order/hosting/privateDatabase'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/hosting/privateDatabase/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Create an order for change ram size on your private database
   * Get allowed durations for 'ram' option
   */
  get(path: '/order/hosting/privateDatabase/{serviceName}/ram'): (params: {serviceName: string, ram: hosting.PrivateDatabase.AvailableRamSizeEnum}) => Promise<string[]>;
  /**
   * Create an order for change ram size on your private database
   * Get prices and contracts information
   */
  get(path: '/order/hosting/privateDatabase/{serviceName}/ram/{duration}'): (params: {duration: string, serviceName: string, ram: hosting.PrivateDatabase.AvailableRamSizeEnum}) => Promise<order.Order>;
  /**
   * Order new private database
   * Get allowed durations for 'new' option
   */
  get(path: '/order/hosting/privateDatabase/new'): (params: {datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, version: hosting.PrivateDatabase.OrderableVersionEnum}) => Promise<string[]>;
  /**
   * Order new private database
   * Get prices and contracts information
   */
  get(path: '/order/hosting/privateDatabase/new/{duration}'): (params: {duration: string, datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, version: hosting.PrivateDatabase.OrderableVersionEnum}) => Promise<order.Order>;
  /**
   * Operations about the HOSTING service
   * List available services
   */
  get(path: '/order/hosting/web'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/hosting/web/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order additional bandwidth
   * Get allowed durations for 'bandwidth' option
   */
  get(path: '/order/hosting/web/{serviceName}/bandwidth'): (params: {serviceName: string, traffic: hosting.web.BandwidthOfferEnum}) => Promise<string[]>;
  /**
   * Order additional bandwidth
   * Get prices and contracts information
   */
  get(path: '/order/hosting/web/{serviceName}/bandwidth/{duration}'): (params: {duration: string, serviceName: string, traffic: hosting.web.BandwidthOfferEnum}) => Promise<order.Order>;
  /**
   * Create an order for cdn option
   * Get allowed durations for 'cdn' option
   */
  get(path: '/order/hosting/web/{serviceName}/cdn'): (params: {serviceName: string, offer: hosting.web.CdnOfferEnum}) => Promise<string[]>;
  /**
   * Create an order for cdn option
   * Get prices and contracts information
   */
  get(path: '/order/hosting/web/{serviceName}/cdn/{duration}'): (params: {duration: string, serviceName: string, offer: hosting.web.CdnOfferEnum}) => Promise<order.Order>;
  /**
   * Create an order for change the hosting main domain
   * Get allowed durations for 'changeMainDomain' option
   */
  get(path: '/order/hosting/web/{serviceName}/changeMainDomain'): (params: {serviceName: string, domain: string, mxplan: hosting.web.order.MxPlanEnum}) => Promise<string[]>;
  /**
   * Create an order for change the hosting main domain
   * Get prices and contracts information
   */
  get(path: '/order/hosting/web/{serviceName}/changeMainDomain/{duration}'): (params: {duration: string, serviceName: string, domain: string, mxplan: hosting.web.order.MxPlanEnum}) => Promise<order.Order>;
  /**
   * Create an order for extra sql perso
   * Get allowed durations for 'extraSqlPerso' option
   */
  get(path: '/order/hosting/web/{serviceName}/extraSqlPerso'): (params: {serviceName: string, offer: hosting.web.database.SqlPersoOfferEnum}) => Promise<string[]>;
  /**
   * Create an order for extra sql perso
   * Get prices and contracts information
   */
  get(path: '/order/hosting/web/{serviceName}/extraSqlPerso/{duration}'): (params: {duration: string, serviceName: string, offer: hosting.web.database.SqlPersoOfferEnum}) => Promise<order.Order>;
  /**
   * Create an order for hosted ssl option
   * Get allowed durations for 'ssl' option
   */
  get(path: '/order/hosting/web/{serviceName}/ssl'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Create an order for hosted ssl option
   * Get prices and contracts information
   */
  get(path: '/order/hosting/web/{serviceName}/ssl/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Create an order for upgrade your hosting account
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/hosting/web/{serviceName}/upgrade'): (params: {serviceName: string, offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}) => Promise<string[]>;
  /**
   * Create an order for upgrade your hosting account
   * Get prices and contracts information
   */
  get(path: '/order/hosting/web/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}) => Promise<order.Order>;
  /**
   * Order a new hosting account
   * Get allowed durations for 'new' option
   */
  get(path: '/order/hosting/web/new'): (params: {dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}) => Promise<string[]>;
  /**
   * Order a new hosting account
   * Get prices and contracts information
   */
  get(path: '/order/hosting/web/new/{duration}'): (params: {duration: string, dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}) => Promise<order.Order>;
  /**
   * Order a HPC Spot Account
   * Get allowed durations for 'new' option
   */
  get(path: '/order/hpcspot/new'): () => Promise<string[]>;
  /**
   * Order a HPC Spot Account
   * Get prices and contracts information
   */
  get(path: '/order/hpcspot/new/{duration}'): (params: {duration: string}) => Promise<order.Order>;
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
   * Create an order for an new office tenant
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/office/new'): (params?: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}) => Promise<string[]>;
  /**
   * Create an order for an new office tenant
   * Get prices and contracts information
   */
  get(path: '/order/license/office/new/{duration}'): (params: {duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}) => Promise<order.Order>;
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
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/order/license/worklight'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/license/worklight/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/license/worklight/{serviceName}/upgrade'): (params: {serviceName: string, version: license.WorkLightVersionEnum}) => Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/worklight/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, version: license.WorkLightVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  get(path: '/order/license/worklight/new'): (params: {ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum}) => Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  get(path: '/order/license/worklight/new/{duration}'): (params: {duration: string, ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum}) => Promise<order.Order>;
  /**
   * Operations about the OVERTHEBOX service
   * List available services
   */
  get(path: '/order/overTheBox'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/overTheBox/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Create an order to upgrade your overTheBox service
   * Get prices and contracts information
   */
  get(path: '/order/overTheBox/{serviceName}/migrate'): (params: {serviceName: string, hardware: boolean, offer: string, shippingContactID?: string, shippingMethod?: overTheBox.ShippingMethodEnum, shippingRelayID?: number}) => Promise<order.Order>;
  /**
   * Subscribe to overTheBox service
   * Get allowed durations for 'new' option
   */
  get(path: '/order/overTheBox/new'): (params: {deviceId?: string, offer: string, voucher?: string}) => Promise<string[]>;
  /**
   * Subscribe to overTheBox service
   * Get prices and contracts information
   */
  get(path: '/order/overTheBox/new/{duration}'): (params: {duration: string, deviceId?: string, offer: string, voucher?: string}) => Promise<order.Order>;
  /**
   * Order router vpn
   * Get allowed durations for 'new' option
   */
  get(path: '/order/router/new'): (params: {vrack: string}) => Promise<string[]>;
  /**
   * Order router vpn
   * Get prices and contracts information
   */
  get(path: '/order/router/new/{duration}'): (params: {duration: string, vrack: string}) => Promise<order.Order>;
  /**
   * Create an order for a new office tenant
   * Get allowed durations for 'new' option
   */
  get(path: '/order/saas/csp2/new'): (params?: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}) => Promise<string[]>;
  /**
   * Create an order for a new office tenant
   * Get prices and contracts information
   */
  get(path: '/order/saas/csp2/new/{duration}'): (params: {duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}) => Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/order/sms'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/sms/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order credits on an existing SMS account
   * Get prices and contracts information
   */
  get(path: '/order/sms/{serviceName}/credits'): (params: {serviceName: string, quantity: number}) => Promise<order.Order>;
  /**
   * Create and credit a new SMS Account
   * Get prices and contracts information
   */
  get(path: '/order/sms/new'): (params: {quantity: number}) => Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/order/telephony'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/telephony/{billingAccount}'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Purchase new accessories
   * Get prices and contracts information
   */
  get(path: '/order/telephony/{billingAccount}/accessories'): (params: {billingAccount: string, accessories: string[], mondialRelayId?: string, retractation: boolean, shippingContactId: number}) => Promise<order.Order>;
  /**
   * Purchase a new line offer
   * Get prices and contracts information
   */
  get(path: '/order/telephony/{billingAccount}/line'): (params: {billingAccount: string, brand?: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], mondialRelayId?: string, offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: telephony.LineTypeEnum[], zones?: string[]}) => Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Get prices and contracts information
   */
  get(path: '/order/telephony/{billingAccount}/numberGeographic'): (params: {billingAccount: string, ape?: string, city: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string, zone: string}) => Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Get prices and contracts information
   */
  get(path: '/order/telephony/{billingAccount}/numberNogeographic'): (params: {billingAccount: string, ape?: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string}) => Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Get prices and contracts information
   */
  get(path: '/order/telephony/{billingAccount}/numberSpecial'): (params: {billingAccount: string, ape: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, range: string, retractation: boolean, siret: string, socialNomination: string, specificNumber?: string, streetName?: string, streetNumber?: string, typology: telephony.NumberSpecialTypologyEnum, zip?: string}) => Promise<order.Order>;
  /**
   * Order a new portability
   * Get prices and contracts information
   */
  get(path: '/order/telephony/{billingAccount}/portability'): (params: {billingAccount: string, building?: string, callNumber: string, city: string, contactName?: string, contactNumber?: string, country: telephony.portability.CountriesAvailable, desireDate?: string, displayUniversalDirectory: boolean, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, firstName: string, floor?: number, lineToRedirectAliasTo?: string, listNumbers?: string, mobilePhone?: string, name: string, offer: telephony.portability.OfferType, rio?: string, siret?: string, socialReason: telephony.portability.SocialReason, specialNumberCategory?: telephony.portability.SpecialNumberCategoryEnum, stair?: number, streetName: string, streetNumber: number, streetNumberExtra?: string, streetType?: string, type: telephony.portability.NumberType, zip: string}) => Promise<order.Order>;
  /**
   * Credit security deposit
   * Get prices and contracts information
   */
  get(path: '/order/telephony/{billingAccount}/securityDeposit'): (params: {billingAccount: string, amount: telephony.SecurityDepositAmountsEnum}) => Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/order/telephony/lines'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/telephony/lines/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Add extra simultaneous lines for a specifical line
   * Get prices and contracts information
   */
  get(path: '/order/telephony/lines/{serviceName}/addSimultaneousLines'): (params: {serviceName: string, billingAccount: string, quantity: number}) => Promise<order.Order>;
  /**
   * Order a phone for this specific line
   * Get prices and contracts information
   */
  get(path: '/order/telephony/lines/{serviceName}/hardware'): (params: {serviceName: string, hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}) => Promise<order.Order>;
  /**
   * Update extra simultaneous channels for a specifical service to the requested amount
   * Get prices and contracts information
   */
  get(path: '/order/telephony/lines/{serviceName}/updateSimultaneousChannels'): (params: {serviceName: string, quantity: number}) => Promise<order.Order>;
  /**
   * Purchase a new billing account
   * Get prices and contracts information
   */
  get(path: '/order/telephony/new'): () => Promise<order.Order>;
  /**
   * Purchase spare phone
   * Get prices and contracts information
   */
  get(path: '/order/telephony/spare/new'): (params: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}) => Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/order/telephony/trunks'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/telephony/trunks/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Add extra simultaneous lines for a specifical line
   * Get prices and contracts information
   */
  get(path: '/order/telephony/trunks/{serviceName}/addSimultaneousLines'): (params: {serviceName: string, billingAccount: string, quantity: number}) => Promise<order.Order>;
  /**
   * Order a phone for this specific line
   * Get prices and contracts information
   */
  get(path: '/order/telephony/trunks/{serviceName}/hardware'): (params: {serviceName: string, hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}) => Promise<order.Order>;
  /**
   * Update extra simultaneous channels for a specifical service to the requested amount
   * Get prices and contracts information
   */
  get(path: '/order/telephony/trunks/{serviceName}/updateSimultaneousChannels'): (params: {serviceName: string, quantity: number}) => Promise<order.Order>;
  /**
   * Operations about the DEDICATED-OPTION service
   * List available services
   */
  get(path: '/order/upgrade/baremetalPrivateBandwidth'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the DEDICATED-OPTION service
   * List available services
   */
  get(path: '/order/upgrade/baremetalPublicBandwidth'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the CEPH service
   * List available services
   */
  get(path: '/order/upgrade/cephaas'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/cephaas
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/cephaas/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/cephaas/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/cephaas/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the IPLB service
   * List available services
   */
  get(path: '/order/upgrade/ipLoadbalancing'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/ipLoadbalancing
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/ipLoadbalancing/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/ipLoadbalancing/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the DBAAS-LOGS service
   * List available services
   */
  get(path: '/order/upgrade/logs'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/logs
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/logs/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/logs/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/logs/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the METRICS service
   * List available services
   */
  get(path: '/order/upgrade/metrics'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/metrics
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/metrics/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/metrics/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/metrics/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the EXCHANGE service
   * List available services
   */
  get(path: '/order/upgrade/microsoftExchange'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/microsoftExchange
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/microsoftExchange/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/microsoftExchange/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/microsoftExchange/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
   * Operations about the SSLGATEWAY service
   * List available services
   */
  get(path: '/order/upgrade/sslGateway'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/sslGateway
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/sslGateway/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/sslGateway/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/sslGateway/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the VPS service
   * List available services
   */
  get(path: '/order/upgrade/vps'): () => Promise<string[]>;
  /**
   * Listing offers /order/upgrade/vps
   * Retrieve available offers to upgrade your service to
   */
  get(path: '/order/upgrade/vps/{serviceName}'): (params: {serviceName: string}) => Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/vps/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  get(path: '/order/upgrade/vps/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
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
   * Operations about the VPS service
   * List available services
   */
  get(path: '/order/vps'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/vps/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order additional disk
   * Get allowed durations for 'additionalDisk' option
   */
  get(path: '/order/vps/{serviceName}/additionalDisk'): (params: {serviceName: string, additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}) => Promise<string[]>;
  /**
   * Order additional disk
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/additionalDisk/{duration}'): (params: {duration: string, serviceName: string, additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}) => Promise<order.Order>;
  /**
   * Order Automated Backup Option (vps Cloud only)
   * Get allowed durations for 'automatedBackup' option
   */
  get(path: '/order/vps/{serviceName}/automatedBackup'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order Automated Backup Option (vps Cloud only)
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/automatedBackup/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Create an order for a cPanel license
   * Get allowed durations for 'cpanel' option
   */
  get(path: '/order/vps/{serviceName}/cpanel'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Create an order for a cPanel license
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/cpanel/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order FtpBackup Option
   * Get allowed durations for 'ftpbackup' option
   */
  get(path: '/order/vps/{serviceName}/ftpbackup'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order FtpBackup Option
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/ftpbackup/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order Additional IP
   * Get allowed durations for 'ip' option
   */
  get(path: '/order/vps/{serviceName}/ip'): (params: {serviceName: string, country?: vps.ip.GeolocationEnum, number: number}) => Promise<string[]>;
  /**
   * Order Additional IP
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/ip/{duration}'): (params: {duration: string, serviceName: string, country?: vps.ip.GeolocationEnum, number: number}) => Promise<order.Order>;
  /**
   * Create an order for a PLESK license
   * Get allowed durations for 'plesk' option
   */
  get(path: '/order/vps/{serviceName}/plesk'): (params: {serviceName: string, domainNumber: vps.PleskLicenseDomainNumberEnum}) => Promise<string[]>;
  /**
   * Create an order for a PLESK license
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/plesk/{duration}'): (params: {duration: string, serviceName: string, domainNumber: vps.PleskLicenseDomainNumberEnum}) => Promise<order.Order>;
  /**
   * Order Snapshot Option
   * Get allowed durations for 'snapshot' option
   */
  get(path: '/order/vps/{serviceName}/snapshot'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order Snapshot Option
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/snapshot/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order Upgrade
   * Get allowed durations for 'upgrade' option
   */
  get(path: '/order/vps/{serviceName}/upgrade'): (params: {serviceName: string, model: string}) => Promise<string[]>;
  /**
   * Order Upgrade
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, model: string}) => Promise<order.Order>;
  /**
   * Order Veeam Option
   * Get allowed durations for 'veeam' option
   */
  get(path: '/order/vps/{serviceName}/veeam'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order Veeam Option
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/veeam/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order Windows Option (2015 only)
   * Get allowed durations for 'windows' option
   */
  get(path: '/order/vps/{serviceName}/windows'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order Windows Option (2015 only)
   * Get prices and contracts information
   */
  get(path: '/order/vps/{serviceName}/windows/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Operations about the VRACK service
   * List available services
   */
  get(path: '/order/vrack'): () => Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  get(path: '/order/vrack/{serviceName}'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Order new vrack
   * Get prices and contracts information
   */
  get(path: '/order/vrack/new'): (params?: {quantity?: number}) => Promise<order.Order>;
  /**
   * Purchase spare modem
   * Get prices and contracts information
   */
  get(path: '/order/xdsl/spare/new'): (params: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}) => Promise<order.Order>;
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
   * Create a analytics project
   * Post a new analytics item in your cart
   */
  post(path: '/order/cart/{cartId}/analytics'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * List all addons possible for a analytics project
   * Post a new analytics addon in your cart
   */
  post(path: '/order/cart/{cartId}/analytics/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Assign a shopping cart to an loggedin client
   */
  post(path: '/order/cart/{cartId}/assign'): (params: {cartId: string}) => Promise<void>;
  /**
   * Missing description
   * Post a new baremetal server item in your cart
   */
  post(path: '/order/cart/{cartId}/baremetalServers'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new baremetal server option in your cart
   */
  post(path: '/order/cart/{cartId}/baremetalServers/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new CDN item in your cart
   */
  post(path: '/order/cart/{cartId}/cdn'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new CDN option in your cart
   */
  post(path: '/order/cart/{cartId}/cdn/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Ceph as a Service item in your cart
   */
  post(path: '/order/cart/{cartId}/cephaas'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Ceph as a Service option in your cart
   */
  post(path: '/order/cart/{cartId}/cephaas/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
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
   * Post a new Cloud Web item in your cart
   */
  post(path: '/order/cart/{cartId}/cloudweb'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Cloud Web option in your cart
   */
  post(path: '/order/cart/{cartId}/cloudweb/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Add a new coupon to cart
   */
  post(path: '/order/cart/{cartId}/coupon'): (params: {cartId: string, coupon: string}) => Promise<string[]>;
  /**
   * Missing description
   * Post a new SaaS CSP2 offer item in your cart
   */
  post(path: '/order/cart/{cartId}/csp2'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SaaS CSP2 option in your cart
   */
  post(path: '/order/cart/{cartId}/csp2/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new timeseries offer item in your cart
   */
  post(path: '/order/cart/{cartId}/dbaasTimeseries'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
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
   * Post a new dedicated labs server item in your cart
   */
  post(path: '/order/cart/{cartId}/dedicatedLabs'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated labs server option in your cart
   */
  post(path: '/order/cart/{cartId}/dedicatedLabs/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated server item in your cart
   */
  post(path: '/order/cart/{cartId}/dedicatedReseller'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated server option in your cart
   */
  post(path: '/order/cart/{cartId}/dedicatedReseller/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Desk as a service item in your cart
   */
  post(path: '/order/cart/{cartId}/deskaas'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
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
   * Post a new DNS zone item in your cart
   */
  post(path: '/order/cart/{cartId}/dns'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new domain in your cart
   */
  post(path: '/order/cart/{cartId}/domain'): (params: {cartId: string, domain: string, duration?: string, offerId?: string, quantity?: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new domain name option in your cart
   */
  post(path: '/order/cart/{cartId}/domain/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Domain Packs item (AllDom) in your cart
   */
  post(path: '/order/cart/{cartId}/domainPacks'): (params: {cartId: string, domain: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new domain tranfer in your cart
   */
  post(path: '/order/cart/{cartId}/domainTransfer'): (params: {cartId: string, domain: string, duration?: string, offerId?: string, quantity?: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new domain name transfer option in your cart
   */
  post(path: '/order/cart/{cartId}/domainTransfer/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new EmailPro item in your cart
   */
  post(path: '/order/cart/{cartId}/emailpro'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new EmailPro option in your cart
   */
  post(path: '/order/cart/{cartId}/emailpro/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Exchange item in your cart
   */
  post(path: '/order/cart/{cartId}/exchange'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Exchange option in your cart
   */
  post(path: '/order/cart/{cartId}/exchange/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Exchange Enterprise item in your cart
   */
  post(path: '/order/cart/{cartId}/exchangeEnterprise'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Exchange Enterprise option in your cart
   */
  post(path: '/order/cart/{cartId}/exchangeEnterprise/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Hosting Reseller item in your cart
   */
  post(path: '/order/cart/{cartId}/hostingReseller'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
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
   * Post a new Kubernetes item in your cart
   */
  post(path: '/order/cart/{cartId}/kubernetes'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Kubernetes option in your cart
   */
  post(path: '/order/cart/{cartId}/kubernetes/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
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
   * Post a new Windows license item in your cart
   */
  post(path: '/order/cart/{cartId}/licenseWindows'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Worklight license item in your cart
   */
  post(path: '/order/cart/{cartId}/licenseWorklight'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Logs item in your cart
   */
  post(path: '/order/cart/{cartId}/logs'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Logs option in your cart
   */
  post(path: '/order/cart/{cartId}/logs/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Managed Services item in your cart
   */
  post(path: '/order/cart/{cartId}/managedServices'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Managed Services option in your cart
   */
  post(path: '/order/cart/{cartId}/managedServices/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Metrics item in your cart
   */
  post(path: '/order/cart/{cartId}/metrics'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Metrics option in your cart
   */
  post(path: '/order/cart/{cartId}/metrics/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Microsoft offer item in your cart
   */
  post(path: '/order/cart/{cartId}/microsoft'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Microsoft option in your cart
   */
  post(path: '/order/cart/{cartId}/microsoft/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new NAS HA item in your cart
   */
  post(path: '/order/cart/{cartId}/nasha'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new NAS HA option in your cart
   */
  post(path: '/order/cart/{cartId}/nasha/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Office 365 item in your cart
   */
  post(path: '/order/cart/{cartId}/office365'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Office 365 option in your cart
   */
  post(path: '/order/cart/{cartId}/office365/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Office 365 Prepaid item in your cart
   */
  post(path: '/order/cart/{cartId}/office365Prepaid'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Office 365 Prepaid option in your cart
   */
  post(path: '/order/cart/{cartId}/office365Prepaid/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Over The Box item in your cart
   */
  post(path: '/order/cart/{cartId}/otb'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Over The Box option in your cart
   */
  post(path: '/order/cart/{cartId}/otb/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new OVHcloud Connect item in your cart
   */
  post(path: '/order/cart/{cartId}/ovhCloudConnect'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new PaaS Monitoring item in your cart
   */
  post(path: '/order/cart/{cartId}/paasmon'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud CDI item in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudCDI'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud CDI option in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudCDI/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Dedicated Cloud item in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudDC'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Dedicated Cloud option in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudDC/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Reseller item in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudReseller'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Reseller option in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudReseller/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Reseller Enterprise item in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudResellerEnterprise'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Reseller Enterprise option in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudResellerEnterprise/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud SDDC item in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudSDDC'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud SDDC option in your cart
   */
  post(path: '/order/cart/{cartId}/privateCloudSDDC/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Reseller offer item in your cart
   */
  post(path: '/order/cart/{cartId}/reseller'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Sharepoint offer item in your cart
   */
  post(path: '/order/cart/{cartId}/sharepoint'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Sharepoint option in your cart
   */
  post(path: '/order/cart/{cartId}/sharepoint/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SMS item in your cart
   */
  post(path: '/order/cart/{cartId}/sms'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Comodo item in your cart
   */
  post(path: '/order/cart/{cartId}/sslComodo'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Comodo option in your cart
   */
  post(path: '/order/cart/{cartId}/sslComodo/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Gateway item in your cart
   */
  post(path: '/order/cart/{cartId}/sslGateway'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Gateway option in your cart
   */
  post(path: '/order/cart/{cartId}/sslGateway/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new VoIP item in your cart
   */
  post(path: '/order/cart/{cartId}/telephony'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new VoIP option in your cart
   */
  post(path: '/order/cart/{cartId}/telephony/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * List of OVHcloud Connect product
   * Post a new OVHcloud Connect item in your cart
   */
  post(path: '/order/cart/{cartId}/vco'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Horizon View item in your cart
   */
  post(path: '/order/cart/{cartId}/vdi'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Horizon View option in your cart
   */
  post(path: '/order/cart/{cartId}/vdi/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Veeam Cloud Connect item in your cart
   */
  post(path: '/order/cart/{cartId}/veeamcc'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Veeam Cloud Connect option in your cart
   */
  post(path: '/order/cart/{cartId}/veeamcc/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
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
   * Missing description
   * Post a new vRack item in your cart
   */
  post(path: '/order/cart/{cartId}/vrackReseller'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new webHosting item in your cart
   */
  post(path: '/order/cart/{cartId}/webHosting'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new webHosting option in your cart
   */
  post(path: '/order/cart/{cartId}/webHosting/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * List of xdsl product
   * Post a new xdsl item in your cart
   */
  post(path: '/order/cart/{cartId}/xdsl'): (params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * List of xdsl addon
   * Post a new xdsl option in your cart
   */
  post(path: '/order/cart/{cartId}/xdsl/options'): (params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
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
   * Listing offers /order/cartServiceOptions/domain/#serviceName#
   * Post an additional Domain option in your cart
   */
  post(path: '/order/cartServiceOption/domain/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/emailpro/#serviceName#
   * Post an additional EmailPro option in your cart
   */
  post(path: '/order/cartServiceOption/emailpro/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#
   * Post an additional IP Load-Balancing option in your cart
   */
  post(path: '/order/cartServiceOption/ipLoadbalancing/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/logs/#serviceName#
   * Post an additional Logs option in your cart
   */
  post(path: '/order/cartServiceOption/logs/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/microsoft/#serviceName#
   * Post an additional Microsoft option in your cart
   */
  post(path: '/order/cartServiceOption/microsoft/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName#
   * Post an additional Microsoft option in your cart
   */
  post(path: '/order/cartServiceOption/microsoftExchange/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/office365/#serviceName#
   * Post an additional Office option in your cart
   */
  post(path: '/order/cartServiceOption/office365Prepaid/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
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
   * Listing offers /order/cartServiceOptions/sharepoint/#serviceName#
   * Post an additional Sharepoint option in your cart
   */
  post(path: '/order/cartServiceOption/sharepoint/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/sslGateway/#serviceName#
   * Post an additional SSL Gateway option in your cart
   */
  post(path: '/order/cartServiceOption/sslGateway/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/vdi/#serviceName#
   * Post an additional Horizon View option in your cart
   */
  post(path: '/order/cartServiceOption/vdi/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/vps/#serviceName#
   * Post an additional VPS option in your cart
   */
  post(path: '/order/cartServiceOption/vps/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/webHosting/#serviceName#
   * Post an additional Web Hosting option in your cart
   */
  post(path: '/order/cartServiceOption/webHosting/{serviceName}'): (params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}) => Promise<order.cart.Item>;
  /**
   * Order Backend Option
   * Create order
   */
  post(path: '/order/cdn/dedicated/{serviceName}/backend/{duration}'): (params: {duration: string, serviceName: string, backend: number}) => Promise<order.Order>;
  /**
   * Upgrade cacheRule Option
   * Create order
   */
  post(path: '/order/cdn/dedicated/{serviceName}/cacheRule/{duration}'): (params: {duration: string, serviceName: string, cacheRule: cdnanycast.OrderCacheRuleEnum}) => Promise<order.Order>;
  /**
   * Order Quota
   * Create order
   */
  post(path: '/order/cdn/dedicated/{serviceName}/quota/{duration}'): (params: {duration: string, serviceName: string, quota: cdnanycast.OrderQuotaEnum}) => Promise<order.Order>;
  /**
   * Order a New Dedicated CDN Service
   * Create order
   */
  post(path: '/order/cdn/dedicated/new/{duration}'): (params: {duration: string}) => Promise<order.Order>;
  /**
   * Upgrade Storage Option
   * Create order
   */
  post(path: '/order/cdn/webstorage/{serviceName}/storage/{duration}'): (params: {duration: string, serviceName: string, storage: cdn.webstorage.OrderStorageEnum}) => Promise<order.Order>;
  /**
   * Order Traffic
   * Create order
   */
  post(path: '/order/cdn/webstorage/{serviceName}/traffic'): (params: {serviceName: string, bandwidth: cdn.webstorage.OrderTrafficEnum}) => Promise<order.Order>;
  /**
   * Order credit usable on your Cloud project
   * Create order
   */
  post(path: '/order/cloud/project/{serviceName}/credit'): (params: {serviceName: string, amount: number}) => Promise<order.Order>;
  /**
   * Order failover ip on your Cloud project
   * Create order
   */
  post(path: '/order/cloud/project/{serviceName}/ip'): (params: {serviceName: string, country?: vps.ip.GeolocationEnum, instanceId: string, quantity: number}) => Promise<order.Order>;
  /**
   * Order an APC for this bay
   * Create order
   */
  post(path: '/order/dedicated/housing/{serviceName}/APC/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order a new Nas HA
   * Create order
   */
  post(path: '/order/dedicated/nasha/new/{duration}'): (params: {duration: string, datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}) => Promise<order.Order>;
  /**
   * Order a backup storage for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/backupStorage/{duration}'): (params: {duration: string, serviceName: string, capacity: dedicated.server.BackupStorageCapacityEnum}) => Promise<order.Order>;
  /**
   * Order bandwidth for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/bandwidth/{duration}'): (params: {duration: string, serviceName: string, bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}) => Promise<order.Order>;
  /**
   * Order vRack bandwidth for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}'): (params: {duration: string, serviceName: string, bandwidth: dedicated.server.BandwidthvRackOrderEnum}) => Promise<order.Order>;
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
   * Order a kvm for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/kvm/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order a kvmip express for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/kvmExpress/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order professional use option
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/professionalUse/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order a static IP for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/staticIP/{duration}'): (params: {duration: string, serviceName: string, country: dedicated.server.IpStaticCountryEnum}) => Promise<order.Order>;
  /**
   * Order additionall traffic for this server
   * Create order
   */
  post(path: '/order/dedicated/server/{serviceName}/traffic/{duration}'): (params: {duration: string, serviceName: string, traffic: dedicated.server.TrafficOrderEnum}) => Promise<order.Order>;
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
   * Order Anycast
   * Create order
   */
  post(path: '/order/domain/zone/{zoneName}/dnsAnycast/{duration}'): (params: {duration: string, zoneName: string}) => Promise<order.Order>;
  /**
   * Order a new DNS zone
   * Create order
   */
  post(path: '/order/domain/zone/new'): (params: {minimized?: boolean, zoneName: string}) => Promise<order.Order>;
  /**
   * Order a new mx plan
   * Create order
   */
  post(path: '/order/email/domain/new/{duration}'): (params: {duration: string, domain: string, offer: email.domain.OfferEnum}) => Promise<order.Order>;
  /**
   * Create an order for an exchange account
   * Create order
   */
  post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}'): (params: {duration: string, exchangeService: string, organizationName: string, licence: email.exchange.OvhLicenceEnum, number: number, storageQuota?: email.exchange.accountQuotaEnum}) => Promise<order.Order>;
  /**
   * Create an order to upgrade your hosted account storage
   * Create order
   */
  post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}'): (params: {duration: string, exchangeService: string, organizationName: string, newQuota: email.exchange.accountQuotaEnum, primaryEmailAddress: string}) => Promise<order.Order>;
  /**
   * Create an order for a additional 50GB of space (Exchange 2010 reseller only)
   * Create order
   */
  post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace'): (params: {exchangeService: string, organizationName: string}) => Promise<order.Order>;
  /**
   * Create an order for a outlook licence.
   * Create order
   */
  post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}'): (params: {duration: string, exchangeService: string, organizationName: string, licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}) => Promise<order.Order>;
  /**
   * Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016)
   * Create order
   */
  post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade'): (params: {exchangeService: string, organizationName: string}) => Promise<order.Order>;
  /**
   * Create an order for a pro account
   * Create order
   */
  post(path: '/order/email/pro/{service}/account/{duration}'): (params: {duration: string, service: string, number: number}) => Promise<order.Order>;
  /**
   * Convert the freefax service to a /telephony voicefax service
   * Create order
   */
  post(path: '/order/freefax/{serviceName}/convertToVoicefax'): (params: {serviceName: string, billingAccount: string}) => Promise<order.Order>;
  /**
   * Credit freefax account pages
   * Create order
   */
  post(path: '/order/freefax/new'): (params: {quantity: freefax.QuantityEnum}) => Promise<order.Order>;
  /**
   * Create an order for change ram size on your private database
   * Create order
   */
  post(path: '/order/hosting/privateDatabase/{serviceName}/ram/{duration}'): (params: {duration: string, serviceName: string, ram: hosting.PrivateDatabase.AvailableRamSizeEnum}) => Promise<order.Order>;
  /**
   * Order new private database
   * Create order
   */
  post(path: '/order/hosting/privateDatabase/new/{duration}'): (params: {duration: string, datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, version: hosting.PrivateDatabase.OrderableVersionEnum}) => Promise<order.Order>;
  /**
   * Order additional bandwidth
   * Create order
   */
  post(path: '/order/hosting/web/{serviceName}/bandwidth/{duration}'): (params: {duration: string, serviceName: string, traffic: hosting.web.BandwidthOfferEnum}) => Promise<order.Order>;
  /**
   * Create an order for cdn option
   * Create order
   */
  post(path: '/order/hosting/web/{serviceName}/cdn/{duration}'): (params: {duration: string, serviceName: string, offer: hosting.web.CdnOfferEnum}) => Promise<order.Order>;
  /**
   * Create an order for change the hosting main domain
   * Create order
   */
  post(path: '/order/hosting/web/{serviceName}/changeMainDomain/{duration}'): (params: {duration: string, serviceName: string, domain: string, mxplan: hosting.web.order.MxPlanEnum}) => Promise<order.Order>;
  /**
   * Create an order for extra sql perso
   * Create order
   */
  post(path: '/order/hosting/web/{serviceName}/extraSqlPerso/{duration}'): (params: {duration: string, serviceName: string, offer: hosting.web.database.SqlPersoOfferEnum}) => Promise<order.Order>;
  /**
   * Create an order for hosted ssl option
   * Create order
   */
  post(path: '/order/hosting/web/{serviceName}/ssl/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Create an order for upgrade your hosting account
   * Create order
   */
  post(path: '/order/hosting/web/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, offer: hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}) => Promise<order.Order>;
  /**
   * Order a new hosting account
   * Create order
   */
  post(path: '/order/hosting/web/new/{duration}'): (params: {duration: string, dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}) => Promise<order.Order>;
  /**
   * Order a HPC Spot Account
   * Create order
   */
  post(path: '/order/hpcspot/new/{duration}'): (params: {duration: string}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/cloudLinux/new/{duration}'): (params: {duration: string, ip: string, version: license.CloudLinuxVersionEnum}) => Promise<order.Order>;
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
   * Create an order for an new office tenant
   * Create order
   */
  post(path: '/order/license/office/new/{duration}'): (params: {duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}) => Promise<order.Order>;
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
   * Upgrade this license with some given options
   * Create order
   */
  post(path: '/order/license/worklight/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, version: license.WorkLightVersionEnum}) => Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  post(path: '/order/license/worklight/new/{duration}'): (params: {duration: string, ip: string, lessThan1000Users: boolean, version: license.WorkLightVersionEnum}) => Promise<order.Order>;
  /**
   * Create an order to upgrade your overTheBox service
   * Create order
   */
  post(path: '/order/overTheBox/{serviceName}/migrate'): (params: {serviceName: string, hardware: boolean, offer: string, shippingContactID?: string, shippingMethod?: overTheBox.ShippingMethodEnum, shippingRelayID?: number}) => Promise<order.Order>;
  /**
   * Subscribe to overTheBox service
   * Create order
   */
  post(path: '/order/overTheBox/new/{duration}'): (params: {duration: string, deviceId?: string, offer: string, voucher?: string}) => Promise<order.Order>;
  /**
   * Order router vpn
   * Create order
   */
  post(path: '/order/router/new/{duration}'): (params: {duration: string, vrack: string}) => Promise<order.Order>;
  /**
   * Create an order for a new office tenant
   * Create order
   */
  post(path: '/order/saas/csp2/new/{duration}'): (params: {duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}) => Promise<order.Order>;
  /**
   * Order credits on an existing SMS account
   * Create order
   */
  post(path: '/order/sms/{serviceName}/credits'): (params: {serviceName: string, quantity: number}) => Promise<order.Order>;
  /**
   * Create and credit a new SMS Account
   * Create order
   */
  post(path: '/order/sms/new'): (params: {quantity: number}) => Promise<order.Order>;
  /**
   * Purchase new accessories
   * Create order
   */
  post(path: '/order/telephony/{billingAccount}/accessories'): (params: {billingAccount: string, accessories: string[], mondialRelayId?: string, retractation: boolean, shippingContactId: number}) => Promise<order.Order>;
  /**
   * Purchase a new line offer
   * Create order
   */
  post(path: '/order/telephony/{billingAccount}/line'): (params: {billingAccount: string, brand?: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], mondialRelayId?: string, offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: telephony.LineTypeEnum[], zones?: string[]}) => Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Create order
   */
  post(path: '/order/telephony/{billingAccount}/numberGeographic'): (params: {billingAccount: string, ape?: string, city: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string, zone: string}) => Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Create order
   */
  post(path: '/order/telephony/{billingAccount}/numberNogeographic'): (params: {billingAccount: string, ape?: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, offer: telephony.NumberOffer, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string}) => Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Create order
   */
  post(path: '/order/telephony/{billingAccount}/numberSpecial'): (params: {billingAccount: string, ape: string, city?: string, country: telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: nichandle.LegalFormEnum, name?: string, organisation?: string, phone?: string, pool?: telephony.NumberPoolEnum, range: string, retractation: boolean, siret: string, socialNomination: string, specificNumber?: string, streetName?: string, streetNumber?: string, typology: telephony.NumberSpecialTypologyEnum, zip?: string}) => Promise<order.Order>;
  /**
   * Order a new portability
   * Create order
   */
  post(path: '/order/telephony/{billingAccount}/portability'): (params: {billingAccount: string, building?: string, callNumber: string, city: string, contactName?: string, contactNumber?: string, country: telephony.portability.CountriesAvailable, desireDate?: string, displayUniversalDirectory: boolean, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, firstName: string, floor?: number, lineToRedirectAliasTo?: string, listNumbers?: string, mobilePhone?: string, name: string, offer: telephony.portability.OfferType, rio?: string, siret?: string, socialReason: telephony.portability.SocialReason, specialNumberCategory?: telephony.portability.SpecialNumberCategoryEnum, stair?: number, streetName: string, streetNumber: number, streetNumberExtra?: string, streetType?: string, type: telephony.portability.NumberType, zip: string}) => Promise<order.Order>;
  /**
   * Credit security deposit
   * Create order
   */
  post(path: '/order/telephony/{billingAccount}/securityDeposit'): (params: {billingAccount: string, amount: telephony.SecurityDepositAmountsEnum}) => Promise<order.Order>;
  /**
   * Add extra simultaneous lines for a specifical line
   * Create order
   */
  post(path: '/order/telephony/lines/{serviceName}/addSimultaneousLines'): (params: {serviceName: string, billingAccount: string, quantity: number}) => Promise<order.Order>;
  /**
   * Order a phone for this specific line
   * Create order
   */
  post(path: '/order/telephony/lines/{serviceName}/hardware'): (params: {serviceName: string, hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}) => Promise<order.Order>;
  /**
   * Update extra simultaneous channels for a specifical service to the requested amount
   * Create order
   */
  post(path: '/order/telephony/lines/{serviceName}/updateSimultaneousChannels'): (params: {serviceName: string, quantity: number}) => Promise<order.Order>;
  /**
   * Purchase a new billing account
   * Create order
   */
  post(path: '/order/telephony/new'): () => Promise<order.Order>;
  /**
   * Purchase spare phone
   * Create order
   */
  post(path: '/order/telephony/spare/new'): (params: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}) => Promise<order.Order>;
  /**
   * Add extra simultaneous lines for a specifical line
   * Create order
   */
  post(path: '/order/telephony/trunks/{serviceName}/addSimultaneousLines'): (params: {serviceName: string, billingAccount: string, quantity: number}) => Promise<order.Order>;
  /**
   * Order a phone for this specific line
   * Create order
   */
  post(path: '/order/telephony/trunks/{serviceName}/hardware'): (params: {serviceName: string, hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}) => Promise<order.Order>;
  /**
   * Update extra simultaneous channels for a specifical service to the requested amount
   * Create order
   */
  post(path: '/order/telephony/trunks/{serviceName}/updateSimultaneousChannels'): (params: {serviceName: string, quantity: number}) => Promise<order.Order>;
  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/cephaas/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/cephaas/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/ipLoadbalancing/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/logs/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/logs/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/metrics/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/metrics/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/microsoftExchange/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/microsoftExchange/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/privateCloud/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/privateCloud/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/sslGateway/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/sslGateway/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/vps/#serviceName#
   * Perform the requested upgrade of your service
   */
  post(path: '/order/upgrade/vps/{serviceName}/{planCode}'): (params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}) => Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Order an upgrade upon your Veeam Cloud Connect account
   * Create order
   */
  post(path: '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, offer: veeamCloudConnect.Offer}) => Promise<order.Order>;
  /**
   * Order additional disk
   * Create order
   */
  post(path: '/order/vps/{serviceName}/additionalDisk/{duration}'): (params: {duration: string, serviceName: string, additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}) => Promise<order.Order>;
  /**
   * Order Automated Backup Option (vps Cloud only)
   * Create order
   */
  post(path: '/order/vps/{serviceName}/automatedBackup/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Create an order for a cPanel license
   * Create order
   */
  post(path: '/order/vps/{serviceName}/cpanel/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order FtpBackup Option
   * Create order
   */
  post(path: '/order/vps/{serviceName}/ftpbackup/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order Additional IP
   * Create order
   */
  post(path: '/order/vps/{serviceName}/ip/{duration}'): (params: {duration: string, serviceName: string, country?: vps.ip.GeolocationEnum, number: number}) => Promise<order.Order>;
  /**
   * Create an order for a PLESK license
   * Create order
   */
  post(path: '/order/vps/{serviceName}/plesk/{duration}'): (params: {duration: string, serviceName: string, domainNumber: vps.PleskLicenseDomainNumberEnum}) => Promise<order.Order>;
  /**
   * Order Snapshot Option
   * Create order
   */
  post(path: '/order/vps/{serviceName}/snapshot/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order Upgrade
   * Create order
   */
  post(path: '/order/vps/{serviceName}/upgrade/{duration}'): (params: {duration: string, serviceName: string, model: string}) => Promise<order.Order>;
  /**
   * Order Veeam Option
   * Create order
   */
  post(path: '/order/vps/{serviceName}/veeam/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order Windows Option (2015 only)
   * Create order
   */
  post(path: '/order/vps/{serviceName}/windows/{duration}'): (params: {duration: string, serviceName: string}) => Promise<order.Order>;
  /**
   * Order new vrack
   * Create order
   */
  post(path: '/order/vrack/new'): (params?: {quantity?: number}) => Promise<order.Order>;
  /**
   * Purchase spare modem
   * Create order
   */
  post(path: '/order/xdsl/spare/new'): (params: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}) => Promise<order.Order>;
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
/**
 * classic Model
 */type orderPrice = order.Price;

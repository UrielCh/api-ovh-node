import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
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
        key?: string;
        value?: T;
    }
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
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
            attachedDomains?: number;
            crontab?: boolean;
            databaseEngines?: number;
            databases?: OVH.hosting.web.database.CreationDatabaseCapabilities[];
            disk?: OVH.hosting.web.DiskType;
            emails?: OVH.hosting.web.CreationEmailCapabilities;
            envVars?: number;
            extraUsers?: number;
            filesBrowser?: boolean;
            highlight?: OVH.hosting.web.HighLightEnum;
            languages?: OVH.hosting.web.CronLanguageAvailable;
            moduleOneClick?: boolean;
            privateDatabases?: OVH.hosting.web.database.CreationDatabaseCapabilities[];
            runtimes?: number;
            sitesRecommended?: number;
            ssh?: boolean;
            traffic?: OVH.complexType.UnitAndValue<number>;
        }
        //hosting.web.CdnOfferEnum
        export type CdnOfferEnum = "CDN_BUSINESS" | "CDN_BUSINESS_FREE"
        //hosting.web.CreationEmailCapabilities
        // fullName: hosting.web.CreationEmailCapabilities.CreationEmailCapabilities
        export interface CreationEmailCapabilities {
            available?: number;
            quota?: OVH.complexType.UnitAndValue<number>;
        }
        //hosting.web.CronLanguageAvailable
        // fullName: hosting.web.CronLanguageAvailable.CronLanguageAvailable
        export interface CronLanguageAvailable {
            nodejs?: OVH.hosting.web.NodejsVersionAvailableEnum[];
            php?: OVH.hosting.web.PhpVersionAvailableEnum[];
            python?: OVH.hosting.web.PythonVersionAvailableEnum[];
            ruby?: OVH.hosting.web.RubyVersionAvailableEnum[];
        }
        //hosting.web.DiskType
        // fullName: hosting.web.DiskType.DiskType
        export interface DiskType {
            type?: OVH.hosting.web.DiskTypeEnum;
            unit?: string;
            value?: number;
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
                available?: number;
                engines?: OVH.hosting.web.database.DatabaseTypeEnum[];
                isolation?: OVH.hosting.web.database.DatabaseIsolationEnum;
                quota?: OVH.complexType.UnitAndValue<number>;
                type?: OVH.hosting.web.database.DatabaseCapabilitiesTypeEnum;
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
        content?: string;
        name?: string;
        url?: string;
    }
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Order
    // fullName: order.Order.Order
    export interface Order {
        contracts?: OVH.order.Contract[];
        details?: OVH.order.OrderDetail[];
        orderId?: number;
        prices?: OVH.order.OrderPrices;
        url?: string;
    }
    //order.OrderDetail
    // fullName: order.OrderDetail.OrderDetail
    export interface OrderDetail {
        description?: string;
        detailType?: OVH.order.OrderDetailTypeEnum;
        domain?: string;
        quantity?: number;
        totalPrice?: OVH.order.Price;
        unitPrice?: OVH.order.Price;
    }
    //order.OrderDetailTypeEnum
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    //order.OrderPrices
    // fullName: order.OrderPrices.OrderPrices
    export interface OrderPrices {
        tax?: OVH.order.Price;
        withTax?: OVH.order.Price;
        withoutTax?: OVH.order.Price;
    }
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
    }
    export namespace cart {
        //order.cart.Cart
        // fullName: order.cart.Cart.Cart
        export interface Cart {
            cartId?: string;
            description?: string;
            expire?: string;
            items?: number[];
            readOnly?: boolean;
        }
        //order.cart.Checkout
        // fullName: order.cart.Checkout.Checkout
        export interface Checkout {
            autoPayWithPreferredPaymentMethod?: boolean;
            waiveRetractationPeriod?: boolean;
        }
        //order.cart.ConfigurationItem
        // fullName: order.cart.ConfigurationItem.ConfigurationItem
        export interface ConfigurationItem {
            id?: number;
            label?: string;
            value?: string;
        }
        //order.cart.ConfigurationRequirements
        // fullName: order.cart.ConfigurationRequirements.ConfigurationRequirements
        export interface ConfigurationRequirements {
            fields?: string[];
            label?: string;
            required?: boolean;
            type?: string;
        }
        //order.cart.CouponCreation
        // fullName: order.cart.CouponCreation.CouponCreation
        export interface CouponCreation {
            coupon: string;
        }
        //order.cart.Creation
        // fullName: order.cart.Creation.Creation
        export interface Creation {
            description?: string;
            expire?: string;
            ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum;
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
            domains?: OVH.order.cart.DomainPacksDescriptionItem[];
        }
        //order.cart.DomainPacksDescriptionItem
        // fullName: order.cart.DomainPacksDescriptionItem.DomainPacksDescriptionItem
        export interface DomainPacksDescriptionItem {
            available?: boolean;
            domain?: string;
        }
        //order.cart.DomainPacksProductInformation
        // fullName: order.cart.DomainPacksProductInformation.DomainPacksProductInformation
        export interface DomainPacksProductInformation {
            description?: OVH.order.cart.DomainPacksDescription;
            planCode?: string;
            prices?: OVH.order.cart.GenericProductPricing[];
        }
        //order.cart.DomainSettings
        // fullName: order.cart.DomainSettings.DomainSettings
        export interface DomainSettings {
            domain?: string;
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
            exclusive?: boolean;
            family?: string;
            mandatory?: boolean;
            planCode?: string;
            prices?: OVH.order.cart.GenericProductPricing[];
            productName?: string;
            productType?: OVH.order.cart.GenericProductTypeEnum;
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
            planCode?: string;
            prices?: OVH.order.cart.GenericProductPricing[];
            productName?: string;
            productType?: OVH.order.cart.GenericProductTypeEnum;
        }
        //order.cart.GenericProductPricing
        // fullName: order.cart.GenericProductPricing.GenericProductPricing
        export interface GenericProductPricing {
            capacities?: OVH.order.cart.GenericProductPricingCapacitiesEnum[];
            description?: string;
            duration?: string;
            interval?: number;
            maximumQuantity?: number;
            maximumRepeat?: number;
            minimumQuantity?: number;
            minimumRepeat?: number;
            price?: OVH.order.Price;
            priceInUcents?: number;
            pricingMode?: string;
            pricingType?: OVH.order.cart.GenericProductPricingTypeEnum;
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
            cartId?: string;
            configurations?: number[];
            duration?: string;
            itemId?: number;
            offerId?: string;
            options?: number[];
            parentItemId?: number;
            prices?: OVH.order.cart.Price[];
            productId?: string;
            settings?: OVH.order.cart.DomainSettings;
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
            duration?: string;
            quantity?: number;
        }
        //order.cart.Price
        // fullName: order.cart.Price.Price
        export interface Price {
            label?: OVH.order.cart.PriceLabelEnum;
            price?: OVH.order.Price;
        }
        //order.cart.PriceLabelEnum
        export type PriceLabelEnum = "PRICE" | "DISCOUNT" | "FEE" | "TOTAL" | "RENEW"
        //order.cart.ProductInformation
        // fullName: order.cart.ProductInformation.ProductInformation
        export interface ProductInformation {
            configurations?: OVH.order.cart.ConfigurationRequirements[];
            deliveryTime?: string;
            duration?: string[];
            offer?: string;
            orderable?: boolean;
            phase?: string;
            prices?: OVH.order.cart.Price[];
            pricingMode?: string;
            productId?: string;
            quantityMax?: number;
        }
        //order.cart.Update
        // fullName: order.cart.Update.Update
        export interface Update {
            description?: string;
            expire?: string;
        }
        //order.cart.WebHostingProductInformation
        // fullName: order.cart.WebHostingProductInformation.WebHostingProductInformation
        export interface WebHostingProductInformation {
            description?: OVH.hosting.web.Capabilities;
            planCode?: string;
            prices?: OVH.order.cart.GenericProductPricing[];
        }
    }
    export namespace catalog {
        //order.catalog.AddonItem
        // fullName: order.catalog.AddonItem.AddonItem
        export interface AddonItem {
            addons?: OVH.order.catalog.AddonOffer[];
            exclusive?: boolean;
            family?: string;
            mandatory?: boolean;
        }
        //order.catalog.AddonOffer
        // fullName: order.catalog.AddonOffer.AddonOffer
        export interface AddonOffer {
            invoiceName?: string;
            plan?: OVH.order.catalog.ProductPlan;
        }
        //order.catalog.Catalog
        // fullName: order.catalog.Catalog.Catalog
        export interface Catalog {
            catalogId?: number;
            merchantCode?: string;
            plansFamily?: OVH.order.catalog.PlansItem[];
        }
        //order.catalog.ConfigurationItem
        // fullName: order.catalog.ConfigurationItem.ConfigurationItem
        export interface ConfigurationItem {
            defaultValue?: string;
            isCustom?: boolean;
            isMandatory?: boolean;
            name?: string;
            values?: string[];
        }
        //order.catalog.PlansItem
        // fullName: order.catalog.PlansItem.PlansItem
        export interface PlansItem {
            family?: string;
            plans?: OVH.order.catalog.ProductPlan[];
        }
        //order.catalog.Pricing
        // fullName: order.catalog.Pricing.Pricing
        export interface Pricing {
            capacities?: string[];
            commitment?: number;
            description?: string;
            interval?: number;
            intervalUnit?: string;
            maximumQuantity?: number;
            maximumRepeat?: number;
            minimumQuantity?: number;
            minimumRepeat?: number;
            mustBeCompleted?: boolean;
            price?: OVH.order.Price;
            priceCapInUcents?: number;
            priceInUcents?: number;
            pricingStrategy?: string;
        }
        //order.catalog.PricingDefault
        // fullName: order.catalog.PricingDefault.PricingDefault
        export interface PricingDefault {
            default?: OVH.order.catalog.Pricing[];
        }
        //order.catalog.Product
        // fullName: order.catalog.Product.Product
        export interface Product {
            configurations?: OVH.order.catalog.ConfigurationItem[];
            description?: string;
            name?: string;
            technicalDetails?: OVH.complexType.SafeKeyValue<string>[];
        }
        //order.catalog.ProductOfferDetails
        // fullName: order.catalog.ProductOfferDetails.ProductOfferDetails
        export interface ProductOfferDetails {
            metadatas?: OVH.complexType.SafeKeyValue<string>[];
            pricings?: OVH.order.catalog.PricingDefault;
            product?: OVH.order.catalog.Product;
        }
        //order.catalog.ProductPlan
        // fullName: order.catalog.ProductPlan.ProductPlan
        export interface ProductPlan {
            addonsFamily?: OVH.order.catalog.AddonItem[];
            consumptionBillingStrategy?: string;
            details?: OVH.order.catalog.ProductOfferDetails;
            invoiceName?: string;
            planCode?: string;
            pricingType?: string;
        }
        export namespace pcc {
            //order.catalog.pcc.Catalog
            // fullName: order.catalog.pcc.Catalog.Catalog
            export interface Catalog {
                catalogId?: number;
                catalogName?: string;
                commercialRanges?: OVH.order.catalog.pcc.CommercialRange[];
                merchantCode?: string;
                plans?: OVH.order.catalog.ProductPlan[];
            }
            //order.catalog.pcc.CommercialRange
            // fullName: order.catalog.pcc.CommercialRange.CommercialRange
            export interface CommercialRange {
                datacenters?: OVH.order.catalog.pcc.Datacenter[];
                defaultZone?: string;
                name?: string;
            }
            //order.catalog.pcc.Datacenter
            // fullName: order.catalog.pcc.Datacenter.Datacenter
            export interface Datacenter {
                cityCode?: string;
                cityName?: string;
                countryCode?: OVH.nichandle.CountryEnum;
                defaultHypervisor?: string;
                hypervisors?: OVH.order.catalog.pcc.Hypervisor[];
                mainPlan?: string;
                orderable?: boolean;
                orderableOptions?: boolean;
                orderableResources?: boolean;
                storagesNoPack?: string[];
                zoneFullName?: string;
                zoneName?: string;
            }
            //order.catalog.pcc.Host
            // fullName: order.catalog.pcc.Host.Host
            export interface Host {
                name?: string;
                onInitialOrder?: boolean;
                onUpgradeOrder?: boolean;
                planCode?: string;
                specifications?: OVH.order.catalog.pcc.HostSpecifications;
                storagesPack?: string[];
            }
            //order.catalog.pcc.HostCpuSpecifications
            // fullName: order.catalog.pcc.HostCpuSpecifications.HostCpuSpecifications
            export interface HostCpuSpecifications {
                cores?: number;
                frequency?: OVH.complexType.UnitAndValue<number>;
                generation?: string;
                model?: string;
                socket?: number;
                threads?: number;
            }
            //order.catalog.pcc.HostMemorySpecifications
            // fullName: order.catalog.pcc.HostMemorySpecifications.HostMemorySpecifications
            export interface HostMemorySpecifications {
                ram?: OVH.complexType.UnitAndValue<number>;
            }
            //order.catalog.pcc.HostNetworkSpecifications
            // fullName: order.catalog.pcc.HostNetworkSpecifications.HostNetworkSpecifications
            export interface HostNetworkSpecifications {
                nics?: number;
                speed?: OVH.complexType.UnitAndValue<number>;
            }
            //order.catalog.pcc.HostSpecifications
            // fullName: order.catalog.pcc.HostSpecifications.HostSpecifications
            export interface HostSpecifications {
                cpu?: OVH.order.catalog.pcc.HostCpuSpecifications;
                memory?: OVH.order.catalog.pcc.HostMemorySpecifications;
                network?: OVH.order.catalog.pcc.HostNetworkSpecifications[];
            }
            //order.catalog.pcc.Hypervisor
            // fullName: order.catalog.pcc.Hypervisor.Hypervisor
            export interface Hypervisor {
                hosts?: OVH.order.catalog.pcc.Host[];
                name?: string;
                options?: OVH.order.catalog.pcc.Option[];
                orderable?: boolean;
                servicePacks?: OVH.order.catalog.pcc.ServicePack[];
                shortName?: string;
                storages?: OVH.order.catalog.pcc.Storage[];
                type?: string;
            }
            //order.catalog.pcc.Option
            // fullName: order.catalog.pcc.Option.Option
            export interface Option {
                maxInitialQuantity?: number;
                name?: string;
                onInitialOrder?: boolean;
                onUpgradeOrder?: boolean;
                planCode?: string;
                type?: string;
            }
            //order.catalog.pcc.ServicePack
            // fullName: order.catalog.pcc.ServicePack.ServicePack
            export interface ServicePack {
                name?: string;
                options?: OVH.order.catalog.pcc.ServicePackOption[];
                planCode?: string;
                upgradableTo?: string[];
            }
            //order.catalog.pcc.ServicePackOption
            // fullName: order.catalog.pcc.ServicePackOption.ServicePackOption
            export interface ServicePackOption {
                name?: string;
                planCode?: string;
                type?: string;
            }
            //order.catalog.pcc.Storage
            // fullName: order.catalog.pcc.Storage.Storage
            export interface Storage {
                name?: string;
                onInitialOrder?: boolean;
                onUpgradeOrder?: boolean;
                planCode?: string;
                specifications?: OVH.order.catalog.pcc.StorageSpecifications;
            }
            //order.catalog.pcc.StorageSpecifications
            // fullName: order.catalog.pcc.StorageSpecifications.StorageSpecifications
            export interface StorageSpecifications {
                size?: OVH.complexType.UnitAndValue<number>;
                type?: string;
            }
        }
        export namespace privateCloud {
            //order.catalog.privateCloud.Capabilities
            // fullName: order.catalog.privateCloud.Capabilities.Capabilities
            export interface Capabilities {
                hds?: boolean;
                hipaa?: boolean;
                nsx?: boolean;
                pcidss?: boolean;
                vrops?: boolean;
            }
            //order.catalog.privateCloud.CapabilitiesListing
            // fullName: order.catalog.privateCloud.CapabilitiesListing.CapabilitiesListing
            export interface CapabilitiesListing {
                '2016v1'?: OVH.order.catalog.privateCloud.Capabilities;
                '2016v2'?: OVH.order.catalog.privateCloud.Capabilities;
                '2016v3'?: OVH.order.catalog.privateCloud.Capabilities;
                '2016v4'?: OVH.order.catalog.privateCloud.Capabilities;
                '2016v5'?: OVH.order.catalog.privateCloud.Capabilities;
                '2016v6'?: OVH.order.catalog.privateCloud.Capabilities;
                '2016v7'?: OVH.order.catalog.privateCloud.Capabilities;
                default?: OVH.order.catalog.privateCloud.Capabilities;
            }
            //order.catalog.privateCloud.Catalog
            // fullName: order.catalog.privateCloud.Catalog.Catalog
            export interface Catalog {
                catalogId?: number;
                catalogName?: string;
                defaultHypervisor?: string;
                defaultZone?: string;
                merchantCode?: string;
                options?: OVH.order.catalog.privateCloud.CapabilitiesListing;
                zones?: OVH.order.catalog.privateCloud.ZonesListing;
            }
            //order.catalog.privateCloud.Zone
            // fullName: order.catalog.privateCloud.Zone.Zone
            export interface Zone {
                cityName?: string;
                country?: string;
                defaultHypervisor?: string;
                defaultVersion?: string;
                internalName?: string;
                plans?: OVH.order.catalog.ProductPlan[];
            }
            //order.catalog.privateCloud.ZonesListing
            // fullName: order.catalog.privateCloud.ZonesListing.ZonesListing
            export interface ZonesListing {
                bhs?: OVH.order.catalog.privateCloud.Zone;
                eri?: OVH.order.catalog.privateCloud.Zone;
                lim?: OVH.order.catalog.privateCloud.Zone;
                rbx?: OVH.order.catalog.privateCloud.Zone;
                sbg?: OVH.order.catalog.privateCloud.Zone;
                waw?: OVH.order.catalog.privateCloud.Zone;
            }
        }
        export namespace publik {
            //order.catalog.publik.AddonFamily
            // fullName: order.catalog.publik.AddonFamily.AddonFamily
            export interface AddonFamily {
                addons?: string[];
                default?: string;
                exclusive?: boolean;
                mandatory?: boolean;
                name?: string;
            }
            //order.catalog.publik.Catalog
            // fullName: order.catalog.publik.Catalog.Catalog
            export interface Catalog {
                addons?: OVH.order.catalog.publik.Plan[];
                catalogId?: number;
                locale?: OVH.order.catalog.publik.Locale;
                planFamilies?: OVH.order.catalog.publik.PlanFamily[];
                plans?: OVH.order.catalog.publik.Plan[];
                products?: OVH.order.catalog.publik.Product[];
            }
            //order.catalog.publik.Configuration
            // fullName: order.catalog.publik.Configuration.Configuration
            export interface Configuration {
                isCustom?: boolean;
                isMandatory?: boolean;
                name?: string;
                values?: string[];
            }
            //order.catalog.publik.DedicatedServerCatalog
            // fullName: order.catalog.publik.DedicatedServerCatalog.DedicatedServerCatalog
            export interface DedicatedServerCatalog {
                addons?: OVH.order.catalog.publik.Plan[];
                catalogId?: number;
                locale?: OVH.order.catalog.publik.Locale;
                planFamilies?: OVH.order.catalog.publik.AddonFamily[];
                plans?: OVH.order.catalog.publik.Plan[];
                products?: OVH.order.catalog.publik.DedicatedServerProduct[];
            }
            //order.catalog.publik.DedicatedServerProduct
            // fullName: order.catalog.publik.DedicatedServerProduct.DedicatedServerProduct
            export interface DedicatedServerProduct {
                blobs?: OVH.order.catalog.publik.DedicatedServerProductBlob;
                description?: string;
                name?: string;
            }
            //order.catalog.publik.DedicatedServerProductBlob
            // fullName: order.catalog.publik.DedicatedServerProductBlob.DedicatedServerProductBlob
            export interface DedicatedServerProductBlob {
                technical?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnical;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnical
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnical.DedicatedServerProductBlobTechnical
            export interface DedicatedServerProductBlobTechnical {
                bandwidth?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork;
                cpu?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalCPU;
                gpu?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalGPU;
                memory?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalMemory;
                server?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalServer;
                storage?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalStorage;
                vrack?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalCPU
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalCPU.DedicatedServerProductBlobTechnicalCPU
            export interface DedicatedServerProductBlobTechnicalCPU {
                boost?: number;
                brand?: string;
                cores?: number;
                frequency?: number;
                model?: string;
                score?: number;
                threads?: number;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalDisk
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalDisk.DedicatedServerProductBlobTechnicalDisk
            export interface DedicatedServerProductBlobTechnicalDisk {
                capacity?: number;
                interface?: string;
                number?: number;
                specs?: string;
                technology?: string;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalFrame
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalFrame.DedicatedServerProductBlobTechnicalFrame
            export interface DedicatedServerProductBlobTechnicalFrame {
                model?: string;
                size?: string;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalGPU
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalGPU.DedicatedServerProductBlobTechnicalGPU
            export interface DedicatedServerProductBlobTechnicalGPU {
                memory?: number;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalMemory
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalMemory.DedicatedServerProductBlobTechnicalMemory
            export interface DedicatedServerProductBlobTechnicalMemory {
                ecc?: boolean;
                frequency?: number;
                ramType?: string;
                size?: number;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalNetwork.DedicatedServerProductBlobTechnicalNetwork
            export interface DedicatedServerProductBlobTechnicalNetwork {
                burst?: number;
                guaranteed?: boolean;
                level?: number;
                limit?: number;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalServer
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalServer.DedicatedServerProductBlobTechnicalServer
            export interface DedicatedServerProductBlobTechnicalServer {
                cpu?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalCPU;
                frame?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalFrame;
                range?: string;
            }
            //order.catalog.publik.DedicatedServerProductBlobTechnicalStorage
            // fullName: order.catalog.publik.DedicatedServerProductBlobTechnicalStorage.DedicatedServerProductBlobTechnicalStorage
            export interface DedicatedServerProductBlobTechnicalStorage {
                disks?: OVH.order.catalog.publik.DedicatedServerProductBlobTechnicalDisk[];
                raid?: string;
            }
            //order.catalog.publik.Locale
            // fullName: order.catalog.publik.Locale.Locale
            export interface Locale {
                currencyCode?: OVH.order.CurrencyCodeEnum;
                subsidiary?: OVH.nichandle.OvhSubsidiaryEnum;
                taxRate?: number;
            }
            //order.catalog.publik.Plan
            // fullName: order.catalog.publik.Plan.Plan
            export interface Plan {
                addonFamilies?: OVH.order.catalog.publik.AddonFamily[];
                configurations?: OVH.order.catalog.publik.Configuration[];
                family?: string;
                invoiceName?: string;
                planCode?: string;
                pricingType?: OVH.order.cart.GenericProductPricingTypeEnum;
                pricings?: OVH.order.catalog.publik.Pricing[];
                product?: string;
            }
            //order.catalog.publik.PlanFamily
            // fullName: order.catalog.publik.PlanFamily.PlanFamily
            export interface PlanFamily {
                name?: string;
            }
            //order.catalog.publik.Pricing
            // fullName: order.catalog.publik.Pricing.Pricing
            export interface Pricing {
                capacities?: OVH.order.cart.GenericProductPricingCapacitiesEnum[];
                commitment?: number;
                description?: string;
                interval?: number;
                intervalUnit?: OVH.order.cart.DurationUnitEnum;
                mode?: string;
                mustBeCompleted?: boolean;
                phase?: number;
                price?: number;
                quantity?: OVH.order.catalog.publik.PricingMinMax;
                repeat?: OVH.order.catalog.publik.PricingMinMax;
                strategy?: OVH.order.cart.GenericProductPricingStrategyEnum;
                tax?: number;
                type?: OVH.order.cart.GenericProductPricingTypeEnum;
            }
            //order.catalog.publik.PricingMinMax
            // fullName: order.catalog.publik.PricingMinMax.PricingMinMax
            export interface PricingMinMax {
                max?: number;
                min?: number;
            }
            //order.catalog.publik.Product
            // fullName: order.catalog.publik.Product.Product
            export interface Product {
                description?: string;
                name?: string;
            }
        }
    }
    export namespace upgrade {
        //order.upgrade.Operation
        // fullName: order.upgrade.Operation.Operation
        export interface Operation {
            id?: number;
            product?: OVH.order.upgrade.OperationProduct;
            status?: OVH.order.upgrade.OperationStatusEnum;
            type?: OVH.order.upgrade.OperationTypeEnum;
        }
        //order.upgrade.OperationProduct
        // fullName: order.upgrade.OperationProduct.OperationProduct
        export interface OperationProduct {
            description?: string;
            name?: string;
        }
        //order.upgrade.OperationStatusEnum
        export type OperationStatusEnum = "TODO" | "DOING" | "DONE" | "ERROR" | "DELAYED" | "CANCELLED" | "SCHEDULED"
        //order.upgrade.OperationTypeEnum
        export type OperationTypeEnum = "UPGRADE"
        //order.upgrade.order_upgrade_OperationAndOrder
        // fullName: order.upgrade.order_upgrade_OperationAndOrder.order_upgrade_OperationAndOrder
        export interface order_upgrade_OperationAndOrder {
            operation?: OVH.order.upgrade.Operation;
            order?: OVH.order.Order;
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
// Apis harmony
// path /order
export interface Order {
    cart:  {
        // GET /order/cart
        GET(param?: {description?: string}): Promise<string[]>;
        // POST /order/cart
        POST(body?: {body: order.cart.Creation}): Promise<order.cart.Cart>;
        [keys: string]: {
            // DELETE /order/cart/{cartId}
            DELETE(): Promise<void>;
            // GET /order/cart/{cartId}
            GET(): Promise<order.cart.Cart>;
            // PUT /order/cart/{cartId}
            PUT(body?: {body: order.cart.Update}): Promise<order.cart.Cart>;
            analytics:  {
                // GET /order/cart/{cartId}/analytics
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/analytics
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/analytics/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/analytics/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            assign:  {
                // POST /order/cart/{cartId}/assign
                POST(): Promise<void>;
            }
            baremetalServers:  {
                // GET /order/cart/{cartId}/baremetalServers
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/baremetalServers
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/baremetalServers/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/baremetalServers/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            cdn:  {
                // GET /order/cart/{cartId}/cdn
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cdn
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/cdn/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cdn/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            cephaas:  {
                // GET /order/cart/{cartId}/cephaas
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cephaas
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/cephaas/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cephaas/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            checkout:  {
                // GET /order/cart/{cartId}/checkout
                GET(): Promise<order.Order>;
                // POST /order/cart/{cartId}/checkout
                POST(body?: {body: order.cart.Checkout}): Promise<order.Order>;
            }
            cloud:  {
                // GET /order/cart/{cartId}/cloud
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cloud
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/cloud/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cloud/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            cloudweb:  {
                // GET /order/cart/{cartId}/cloudweb
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/cloudweb
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/cloudweb/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/cloudweb/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            coupon:  {
                // DELETE /order/cart/{cartId}/coupon
                DELETE(): Promise<void>;
                // GET /order/cart/{cartId}/coupon
                GET(): Promise<string[]>;
                // POST /order/cart/{cartId}/coupon
                POST(body?: {body: order.cart.CouponCreation}): Promise<string[]>;
            }
            csp2:  {
                // GET /order/cart/{cartId}/csp2
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/csp2
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/csp2/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/csp2/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            dbaasTimeseries:  {
                // GET /order/cart/{cartId}/dbaasTimeseries
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dbaasTimeseries
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            dedicated:  {
                // GET /order/cart/{cartId}/dedicated
                GET(param?: {planCode?: string, family?: string}): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicated
                POST(body?: {body: order.cart.GenericDedicatedCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/dedicated/options
                    GET(param?: {planCode: string, family?: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicated/options
                    POST(body?: {body: order.cart.GenericDedicatedOptionsCreation}): Promise<order.cart.Item>;
                }
            }
            dedicatedLabs:  {
                // GET /order/cart/{cartId}/dedicatedLabs
                GET(param?: {planCode?: string}): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicatedLabs
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/dedicatedLabs/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicatedLabs/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            dedicatedReseller:  {
                // GET /order/cart/{cartId}/dedicatedReseller
                GET(param?: {planCode?: string, family?: string}): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dedicatedReseller
                POST(body?: {body: order.cart.GenericDedicatedCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/dedicatedReseller/options
                    GET(param?: {planCode: string, family?: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/dedicatedReseller/options
                    POST(body?: {body: order.cart.GenericDedicatedOptionsCreation}): Promise<order.cart.Item>;
                }
            }
            deskaas:  {
                // GET /order/cart/{cartId}/deskaas
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/deskaas
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            discover:  {
                // GET /order/cart/{cartId}/discover
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/discover
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/discover/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/discover/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            dns:  {
                // GET /order/cart/{cartId}/dns
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/dns
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            domain:  {
                // GET /order/cart/{cartId}/domain
                GET(param?: {domain: string}): Promise<order.cart.ProductInformation[]>;
                // POST /order/cart/{cartId}/domain
                POST(body?: {body: order.cart.GenericDomainCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/domain/options
                    GET(param?: {domain: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/domain/options
                    POST(body?: {body: order.cart.GenericDomainOptionsCreation}): Promise<order.cart.Item>;
                }
            }
            domainPacks:  {
                // GET /order/cart/{cartId}/domainPacks
                GET(param?: {domain: string}): Promise<order.cart.DomainPacksProductInformation[]>;
                // POST /order/cart/{cartId}/domainPacks
                POST(body?: {body: order.cart.DomainPacksCreation}): Promise<order.cart.Item>;
            }
            domainRestore:  {
                // GET /order/cart/{cartId}/domainRestore
                GET(param?: {domain: string}): Promise<order.cart.GenericProductDefinition[]>;
            }
            domainTransfer:  {
                // GET /order/cart/{cartId}/domainTransfer
                GET(param?: {domain: string}): Promise<order.cart.ProductInformation[]>;
                // POST /order/cart/{cartId}/domainTransfer
                POST(body?: {body: order.cart.GenericDomainCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/domainTransfer/options
                    GET(param?: {domain: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/domainTransfer/options
                    POST(body?: {body: order.cart.GenericDomainOptionsCreation}): Promise<order.cart.Item>;
                }
            }
            emailpro:  {
                // GET /order/cart/{cartId}/emailpro
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/emailpro
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/emailpro/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/emailpro/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            exchange:  {
                // GET /order/cart/{cartId}/exchange
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/exchange
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/exchange/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/exchange/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            exchangeEnterprise:  {
                // GET /order/cart/{cartId}/exchangeEnterprise
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/exchangeEnterprise
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/exchangeEnterprise/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/exchangeEnterprise/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            hostingReseller:  {
                // GET /order/cart/{cartId}/hostingReseller
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/hostingReseller
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            ip:  {
                // GET /order/cart/{cartId}/ip
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ip
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/ip/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/ip/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            ipLoadbalancing:  {
                // GET /order/cart/{cartId}/ipLoadbalancing
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ipLoadbalancing
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/ipLoadbalancing/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/ipLoadbalancing/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            item:  {
                // GET /order/cart/{cartId}/item
                GET(): Promise<number[]>;
                [keys: string]: {
                    // DELETE /order/cart/{cartId}/item/{itemId}
                    DELETE(): Promise<void>;
                    // GET /order/cart/{cartId}/item/{itemId}
                    GET(): Promise<order.cart.Item>;
                    // PUT /order/cart/{cartId}/item/{itemId}
                    PUT(body?: {body: order.cart.ItemUpdate}): Promise<order.cart.Item>;
                    configuration:  {
                        // GET /order/cart/{cartId}/item/{itemId}/configuration
                        GET(param?: {label?: string}): Promise<number[]>;
                        // POST /order/cart/{cartId}/item/{itemId}/configuration
                        POST(body?: {body: order.cart.ItemConfigurationCreation}): Promise<order.cart.ConfigurationItem>;
                        [keys: string]: {
                            // DELETE /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
                            DELETE(): Promise<void>;
                            // GET /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
                            GET(): Promise<order.cart.ConfigurationItem>;
                        } | any
                    }
                    requiredConfiguration:  {
                        // GET /order/cart/{cartId}/item/{itemId}/requiredConfiguration
                        GET(): Promise<order.cart.ConfigurationRequirements[]>;
                    }
                } | any
            }
            kubernetes:  {
                // GET /order/cart/{cartId}/kubernetes
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/kubernetes
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/kubernetes/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/kubernetes/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            licenseCloudLinux:  {
                // GET /order/cart/{cartId}/licenseCloudLinux
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseCloudLinux
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licenseDirectadmin:  {
                // GET /order/cart/{cartId}/licenseDirectadmin
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseDirectadmin
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licensePlesk:  {
                // GET /order/cart/{cartId}/licensePlesk
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licensePlesk
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/licensePlesk/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/licensePlesk/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            licenseSqlServer:  {
                // GET /order/cart/{cartId}/licenseSqlServer
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseSqlServer
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licenseVirtuozzo:  {
                // GET /order/cart/{cartId}/licenseVirtuozzo
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseVirtuozzo
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licenseWindows:  {
                // GET /order/cart/{cartId}/licenseWindows
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseWindows
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licenseWorklight:  {
                // GET /order/cart/{cartId}/licenseWorklight
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licenseWorklight
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            licensecPanel:  {
                // GET /order/cart/{cartId}/licensecPanel
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/licensecPanel
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            logs:  {
                // GET /order/cart/{cartId}/logs
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/logs
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/logs/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/logs/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            managedServices:  {
                // GET /order/cart/{cartId}/managedServices
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/managedServices
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/managedServices/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/managedServices/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            metrics:  {
                // GET /order/cart/{cartId}/metrics
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/metrics
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/metrics/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/metrics/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            microsoft:  {
                // GET /order/cart/{cartId}/microsoft
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/microsoft
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/microsoft/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/microsoft/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            nasha:  {
                // GET /order/cart/{cartId}/nasha
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/nasha
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/nasha/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/nasha/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            office365:  {
                // GET /order/cart/{cartId}/office365
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/office365
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/office365/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/office365/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            office365Prepaid:  {
                // GET /order/cart/{cartId}/office365Prepaid
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/office365Prepaid
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/office365Prepaid/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/office365Prepaid/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            otb:  {
                // GET /order/cart/{cartId}/otb
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/otb
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/otb/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/otb/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            ovhCloudConnect:  {
                // GET /order/cart/{cartId}/ovhCloudConnect
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/ovhCloudConnect
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            paasmon:  {
                // GET /order/cart/{cartId}/paasmon
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/paasmon
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            privateCloudCDI:  {
                // GET /order/cart/{cartId}/privateCloudCDI
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudCDI
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/privateCloudCDI/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudCDI/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            privateCloudDC:  {
                // GET /order/cart/{cartId}/privateCloudDC
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudDC
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/privateCloudDC/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudDC/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            privateCloudReseller:  {
                // GET /order/cart/{cartId}/privateCloudReseller
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudReseller
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/privateCloudReseller/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudReseller/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            privateCloudResellerEnterprise:  {
                // GET /order/cart/{cartId}/privateCloudResellerEnterprise
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudResellerEnterprise
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/privateCloudResellerEnterprise/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudResellerEnterprise/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            privateCloudSDDC:  {
                // GET /order/cart/{cartId}/privateCloudSDDC
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/privateCloudSDDC
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/privateCloudSDDC/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/privateCloudSDDC/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            reseller:  {
                // GET /order/cart/{cartId}/reseller
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/reseller
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            sharepoint:  {
                // GET /order/cart/{cartId}/sharepoint
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sharepoint
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/sharepoint/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/sharepoint/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            sms:  {
                // GET /order/cart/{cartId}/sms
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sms
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            sslComodo:  {
                // GET /order/cart/{cartId}/sslComodo
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sslComodo
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/sslComodo/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/sslComodo/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            sslGateway:  {
                // GET /order/cart/{cartId}/sslGateway
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/sslGateway
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/sslGateway/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/sslGateway/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            summary:  {
                // GET /order/cart/{cartId}/summary
                GET(): Promise<order.Order>;
            }
            telephony:  {
                // GET /order/cart/{cartId}/telephony
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/telephony
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/telephony/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/telephony/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            vco:  {
                // GET /order/cart/{cartId}/vco
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vco
                POST(body?: {planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            }
            vdi:  {
                // GET /order/cart/{cartId}/vdi
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vdi
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/vdi/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/vdi/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            veeamEnterprise:  {
                // GET /order/cart/{cartId}/veeamEnterprise
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/veeamEnterprise
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/veeamEnterprise/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/veeamEnterprise/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            veeamcc:  {
                // GET /order/cart/{cartId}/veeamcc
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/veeamcc
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/veeamcc/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/veeamcc/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            vps:  {
                // GET /order/cart/{cartId}/vps
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vps
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/vps/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/vps/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            vrack:  {
                // GET /order/cart/{cartId}/vrack
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vrack
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            vrackReseller:  {
                // GET /order/cart/{cartId}/vrackReseller
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/vrackReseller
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
            }
            webHosting:  {
                // GET /order/cart/{cartId}/webHosting
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/webHosting
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/webHosting/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/webHosting/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
            xdsl:  {
                // GET /order/cart/{cartId}/xdsl
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                // POST /order/cart/{cartId}/xdsl
                POST(body?: {body: order.cart.GenericProductCreation}): Promise<order.cart.Item>;
                options:  {
                    // GET /order/cart/{cartId}/xdsl/options
                    GET(param?: {planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
                    // POST /order/cart/{cartId}/xdsl/options
                    POST(body?: {body: order.cart.GenericOptionCreation}): Promise<order.cart.Item>;
                }
            }
        } | any
    }
    cartServiceOption:  {
        cloud:  {
            // GET /order/cartServiceOption/cloud
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/cloud/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/cloud/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        dedicated:  {
            // GET /order/cartServiceOption/dedicated
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/dedicated/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/dedicated/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        domain:  {
            // GET /order/cartServiceOption/domain
            GET(param?: {whoisOwner?: string}): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/domain/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/domain/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        emailpro:  {
            // GET /order/cartServiceOption/emailpro
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/emailpro/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/emailpro/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        ipLoadbalancing:  {
            // GET /order/cartServiceOption/ipLoadbalancing
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/ipLoadbalancing/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/ipLoadbalancing/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        logs:  {
            // GET /order/cartServiceOption/logs
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/logs/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/logs/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        microsoft:  {
            // GET /order/cartServiceOption/microsoft
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/microsoft/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/microsoft/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        microsoftExchange:  {
            // GET /order/cartServiceOption/microsoftExchange
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/microsoftExchange/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/microsoftExchange/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        office365Prepaid:  {
            // GET /order/cartServiceOption/office365Prepaid
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/office365Prepaid/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/office365Prepaid/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        privateCloud:  {
            // GET /order/cartServiceOption/privateCloud
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/privateCloud/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloud/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        privateCloudReseller:  {
            // GET /order/cartServiceOption/privateCloudReseller
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/privateCloudReseller/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloudReseller/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        privateCloudResellerEnterprise:  {
            // GET /order/cartServiceOption/privateCloudResellerEnterprise
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        sharepoint:  {
            // GET /order/cartServiceOption/sharepoint
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/sharepoint/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/sharepoint/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        sslGateway:  {
            // GET /order/cartServiceOption/sslGateway
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/sslGateway/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/sslGateway/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        vdi:  {
            // GET /order/cartServiceOption/vdi
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/vdi/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/vdi/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        vps:  {
            // GET /order/cartServiceOption/vps
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/vps/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/vps/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
        webHosting:  {
            // GET /order/cartServiceOption/webHosting
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cartServiceOption/webHosting/{serviceName}
                GET(): Promise<order.cart.GenericOptionDefinition[]>;
                // POST /order/cartServiceOption/webHosting/{serviceName}
                POST(body?: {cartId: string, planCode: string, duration: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
            } | any
        }
    }
    catalog:  {
        formatted:  {
            // GET /order/catalog/formatted
            GET(): Promise<string[]>;
            cloud:  {
                // GET /order/catalog/formatted/cloud
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            dedicated:  {
                // GET /order/catalog/formatted/dedicated
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            deskaas:  {
                // GET /order/catalog/formatted/deskaas
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            discover:  {
                // GET /order/catalog/formatted/discover
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            ip:  {
                // GET /order/catalog/formatted/ip
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseCloudLinux:  {
                // GET /order/catalog/formatted/licenseCloudLinux
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseDirectadmin:  {
                // GET /order/catalog/formatted/licenseDirectadmin
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licensePlesk:  {
                // GET /order/catalog/formatted/licensePlesk
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseSqlServer:  {
                // GET /order/catalog/formatted/licenseSqlServer
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseVirtuozzo:  {
                // GET /order/catalog/formatted/licenseVirtuozzo
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseWindows:  {
                // GET /order/catalog/formatted/licenseWindows
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licenseWorklight:  {
                // GET /order/catalog/formatted/licenseWorklight
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            licensecPanel:  {
                // GET /order/catalog/formatted/licensecPanel
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            logs:  {
                // GET /order/catalog/formatted/logs
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            privateCloudCDI:  {
                // GET /order/catalog/formatted/privateCloudCDI
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
            }
            privateCloudDC:  {
                // GET /order/catalog/formatted/privateCloudDC
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
            }
            privateCloudReseller:  {
                // GET /order/catalog/formatted/privateCloudReseller
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.pcc.Catalog>;
            }
            privateCloudResellerEnterprise:  {
                // GET /order/catalog/formatted/privateCloudResellerEnterprise
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.pcc.Catalog>;
            }
            privateCloudSDDC:  {
                // GET /order/catalog/formatted/privateCloudSDDC
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
            }
            reseller:  {
                // GET /order/catalog/formatted/reseller
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
            vps:  {
                // GET /order/catalog/formatted/vps
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
            }
        }
        public:  {
            baremetalServers:  {
                // GET /order/catalog/public/baremetalServers
                GET(param?: {ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.publik.DedicatedServerCatalog>;
            }
        }
    }
    cdn:  {
        dedicated:  {
            // GET /order/cdn/dedicated
            GET(): Promise<string[]>;
            new:  {
                // GET /order/cdn/dedicated/new
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /order/cdn/dedicated/new/{duration}
                    GET(): Promise<order.Order>;
                    // POST /order/cdn/dedicated/new/{duration}
                    POST(): Promise<order.Order>;
                } | any
            }
            [keys: string]: {
                // GET /order/cdn/dedicated/{serviceName}
                GET(): Promise<string[]>;
                backend:  {
                    // GET /order/cdn/dedicated/{serviceName}/backend
                    GET(param?: {backend: number}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/cdn/dedicated/{serviceName}/backend/{duration}
                        GET(param?: {backend: number}): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/backend/{duration}
                        POST(body?: {backend: number}): Promise<order.Order>;
                    } | any
                }
                cacheRule:  {
                    // GET /order/cdn/dedicated/{serviceName}/cacheRule
                    GET(param?: {cacheRule: cdnanycast.OrderCacheRuleEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/cdn/dedicated/{serviceName}/cacheRule/{duration}
                        GET(param?: {cacheRule: cdnanycast.OrderCacheRuleEnum}): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/cacheRule/{duration}
                        POST(body?: {cacheRule: cdnanycast.OrderCacheRuleEnum}): Promise<order.Order>;
                    } | any
                }
                quota:  {
                    // GET /order/cdn/dedicated/{serviceName}/quota
                    GET(param?: {quota: cdnanycast.OrderQuotaEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/cdn/dedicated/{serviceName}/quota/{duration}
                        GET(param?: {quota: cdnanycast.OrderQuotaEnum}): Promise<order.Order>;
                        // POST /order/cdn/dedicated/{serviceName}/quota/{duration}
                        POST(body?: {quota: cdnanycast.OrderQuotaEnum}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
        webstorage:  {
            // GET /order/cdn/webstorage
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cdn/webstorage/{serviceName}
                GET(): Promise<string[]>;
                storage:  {
                    // GET /order/cdn/webstorage/{serviceName}/storage
                    GET(param?: {storage: cdn.webstorage.OrderStorageEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/cdn/webstorage/{serviceName}/storage/{duration}
                        GET(param?: {storage: cdn.webstorage.OrderStorageEnum}): Promise<order.Order>;
                        // POST /order/cdn/webstorage/{serviceName}/storage/{duration}
                        POST(body?: {storage: cdn.webstorage.OrderStorageEnum}): Promise<order.Order>;
                    } | any
                }
                traffic:  {
                    // GET /order/cdn/webstorage/{serviceName}/traffic
                    GET(param?: {bandwidth: cdn.webstorage.OrderTrafficEnum}): Promise<order.Order>;
                    // POST /order/cdn/webstorage/{serviceName}/traffic
                    POST(body?: {bandwidth: cdn.webstorage.OrderTrafficEnum}): Promise<order.Order>;
                }
            } | any
        }
    }
    cloud:  {
        project:  {
            // GET /order/cloud/project
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/cloud/project/{serviceName}
                GET(): Promise<string[]>;
                credit:  {
                    // GET /order/cloud/project/{serviceName}/credit
                    GET(param?: {amount: number}): Promise<order.Order>;
                    // POST /order/cloud/project/{serviceName}/credit
                    POST(body?: {amount: number}): Promise<order.Order>;
                }
                ip:  {
                    // GET /order/cloud/project/{serviceName}/ip
                    GET(param?: {country?: vps.ip.GeolocationEnum, quantity: number, instanceId: string}): Promise<order.Order>;
                    // POST /order/cloud/project/{serviceName}/ip
                    POST(body?: {country?: vps.ip.GeolocationEnum, quantity: number, instanceId: string}): Promise<order.Order>;
                }
            } | any
        }
    }
    dedicated:  {
        housing:  {
            // GET /order/dedicated/housing
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/dedicated/housing/{serviceName}
                GET(): Promise<string[]>;
                APC:  {
                    // GET /order/dedicated/housing/{serviceName}/APC
                    GET(): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/housing/{serviceName}/APC/{duration}
                        GET(): Promise<order.Order>;
                        // POST /order/dedicated/housing/{serviceName}/APC/{duration}
                        POST(): Promise<order.Order>;
                    } | any
                }
            } | any
        }
        nasha:  {
            new:  {
                // GET /order/dedicated/nasha/new
                GET(param?: {datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/dedicated/nasha/new/{duration}
                    GET(param?: {datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}): Promise<order.Order>;
                    // POST /order/dedicated/nasha/new/{duration}
                    POST(body?: {datacenter: dedicated.NasHAZoneEnum, model: dedicated.NasHAOfferEnum}): Promise<order.Order>;
                } | any
            }
        }
        server:  {
            // GET /order/dedicated/server
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/dedicated/server/{serviceName}
                GET(): Promise<string[]>;
                backupStorage:  {
                    // GET /order/dedicated/server/{serviceName}/backupStorage
                    GET(param?: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/backupStorage/{duration}
                        GET(param?: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/backupStorage/{duration}
                        POST(body?: {capacity: dedicated.server.BackupStorageCapacityEnum}): Promise<order.Order>;
                    } | any
                }
                bandwidth:  {
                    // GET /order/dedicated/server/{serviceName}/bandwidth
                    GET(param?: {bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/bandwidth/{duration}
                        GET(param?: {bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/bandwidth/{duration}
                        POST(body?: {bandwidth: dedicated.server.BandwidthOrderEnum, type: dedicated.server.BandwidthOrderTypeEnum}): Promise<order.Order>;
                    } | any
                }
                bandwidthvRack:  {
                    // GET /order/dedicated/server/{serviceName}/bandwidthvRack
                    GET(param?: {bandwidth: dedicated.server.BandwidthvRackOrderEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/bandwidthvRack/{duration}
                        GET(param?: {bandwidth: dedicated.server.BandwidthvRackOrderEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/bandwidthvRack/{duration}
                        POST(body?: {bandwidth: dedicated.server.BandwidthvRackOrderEnum}): Promise<order.Order>;
                    } | any
                }
                failoverIP:  {
                    // GET /order/dedicated/server/{serviceName}/failoverIP
                    GET(param?: {country: dedicated.server.IpCountryEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/failoverIP/{duration}
                        GET(param?: {country: dedicated.server.IpCountryEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/failoverIP/{duration}
                        POST(body?: {country: dedicated.server.IpCountryEnum}): Promise<order.Order>;
                    } | any
                }
                feature:  {
                    // GET /order/dedicated/server/{serviceName}/feature
                    GET(param?: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/feature/{duration}
                        GET(param?: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/feature/{duration}
                        POST(body?: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<order.Order>;
                    } | any
                }
                firewall:  {
                    // GET /order/dedicated/server/{serviceName}/firewall
                    GET(param?: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/firewall/{duration}
                        GET(param?: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/firewall/{duration}
                        POST(body?: {firewallModel: dedicated.server.FirewallModelEnum}): Promise<order.Order>;
                    } | any
                }
                ip:  {
                    // GET /order/dedicated/server/{serviceName}/ip
                    GET(param?: {organisationId?: string, blockSize: dedicated.server.IpBlockSizeEnum, type: dedicated.server.IpTypeOrderableEnum, country?: dedicated.server.IpCountryEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/ip/{duration}
                        GET(param?: {organisationId?: string, blockSize: dedicated.server.IpBlockSizeEnum, type: dedicated.server.IpTypeOrderableEnum, country?: dedicated.server.IpCountryEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/ip/{duration}
                        POST(body?: {organisationId?: string, blockSize: dedicated.server.IpBlockSizeEnum, type: dedicated.server.IpTypeOrderableEnum, country?: dedicated.server.IpCountryEnum}): Promise<order.Order>;
                    } | any
                }
                ipMigration:  {
                    // GET /order/dedicated/server/{serviceName}/ipMigration
                    GET(param?: {token: string, ip: string}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/ipMigration/{duration}
                        GET(param?: {token: string, ip: string}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/ipMigration/{duration}
                        POST(body?: {token: string, ip: string}): Promise<order.Order>;
                    } | any
                }
                kvm:  {
                    // GET /order/dedicated/server/{serviceName}/kvm
                    GET(): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/kvm/{duration}
                        GET(): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/kvm/{duration}
                        POST(): Promise<order.Order>;
                    } | any
                }
                kvmExpress:  {
                    // GET /order/dedicated/server/{serviceName}/kvmExpress
                    GET(): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/kvmExpress/{duration}
                        GET(): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/kvmExpress/{duration}
                        POST(): Promise<order.Order>;
                    } | any
                }
                professionalUse:  {
                    // GET /order/dedicated/server/{serviceName}/professionalUse
                    GET(): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/professionalUse/{duration}
                        GET(): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/professionalUse/{duration}
                        POST(): Promise<order.Order>;
                    } | any
                }
                staticIP:  {
                    // GET /order/dedicated/server/{serviceName}/staticIP
                    GET(param?: {country: dedicated.server.IpStaticCountryEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/staticIP/{duration}
                        GET(param?: {country: dedicated.server.IpStaticCountryEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/staticIP/{duration}
                        POST(body?: {country: dedicated.server.IpStaticCountryEnum}): Promise<order.Order>;
                    } | any
                }
                traffic:  {
                    // GET /order/dedicated/server/{serviceName}/traffic
                    GET(param?: {traffic: dedicated.server.TrafficOrderEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/traffic/{duration}
                        GET(param?: {traffic: dedicated.server.TrafficOrderEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/traffic/{duration}
                        POST(body?: {traffic: dedicated.server.TrafficOrderEnum}): Promise<order.Order>;
                    } | any
                }
                usbKey:  {
                    // GET /order/dedicated/server/{serviceName}/usbKey
                    GET(param?: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/dedicated/server/{serviceName}/usbKey/{duration}
                        GET(param?: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<order.Order>;
                        // POST /order/dedicated/server/{serviceName}/usbKey/{duration}
                        POST(body?: {capacity: dedicated.server.UsbKeyCapacityEnum}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
    }
    dedicatedCloud:  {
        // GET /order/dedicatedCloud
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /order/dedicatedCloud/{serviceName}
            GET(): Promise<string[]>;
            additionalBandwidth:  {
                // GET /order/dedicatedCloud/{serviceName}/additionalBandwidth
                GET(param?: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                    GET(param?: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}
                    POST(body?: {bandwidth: dedicatedCloud.AdditionalBandwidthEnum}): Promise<order.Order>;
                } | any
            }
            filer:  {
                // GET /order/dedicatedCloud/{serviceName}/filer
                GET(param?: {datacenterId?: number, name: string, quantity?: number}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/dedicatedCloud/{serviceName}/filer/{duration}
                    GET(param?: {datacenterId?: number, name: string, quantity?: number}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/filer/{duration}
                    POST(body?: {datacenterId?: number, name: string, quantity?: number}): Promise<order.Order>;
                } | any
            }
            host:  {
                // GET /order/dedicatedCloud/{serviceName}/host
                GET(param?: {name: string, quantity?: number, datacenterId: number}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/dedicatedCloud/{serviceName}/host/{duration}
                    GET(param?: {name: string, quantity?: number, datacenterId: number}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/host/{duration}
                    POST(body?: {name: string, quantity?: number, datacenterId: number}): Promise<order.Order>;
                } | any
            }
            ip:  {
                // GET /order/dedicatedCloud/{serviceName}/ip
                GET(param?: {networkName: string, estimatedClientsNumber: number, size: dedicatedCloud.OrderableIpBlockRangeEnum, description: string, usage: string, country: dedicatedCloud.IpCountriesEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/dedicatedCloud/{serviceName}/ip/{duration}
                    GET(param?: {networkName: string, estimatedClientsNumber: number, size: dedicatedCloud.OrderableIpBlockRangeEnum, description: string, usage: string, country: dedicatedCloud.IpCountriesEnum}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/ip/{duration}
                    POST(body?: {networkName: string, estimatedClientsNumber: number, size: dedicatedCloud.OrderableIpBlockRangeEnum, description: string, usage: string, country: dedicatedCloud.IpCountriesEnum}): Promise<order.Order>;
                } | any
            }
            spla:  {
                // GET /order/dedicatedCloud/{serviceName}/spla
                GET(): Promise<order.Order>;
                // POST /order/dedicatedCloud/{serviceName}/spla
                POST(): Promise<order.Order>;
            }
            upgradeRessource:  {
                // GET /order/dedicatedCloud/{serviceName}/upgradeRessource
                GET(param?: {upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum, upgradedRessourceId?: number}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                    GET(param?: {upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum, upgradedRessourceId?: number}): Promise<order.Order>;
                    // POST /order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}
                    POST(body?: {upgradedRessourceType: dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: dedicatedCloud.ressources.UpgradeTypeEnum, upgradedRessourceId?: number}): Promise<order.Order>;
                } | any
            }
            vdi:  {
                // GET /order/dedicatedCloud/{serviceName}/vdi
                GET(param?: {firstPublicIpAddress: string, secondPublicIpAddress: string, datacenterId: number}): Promise<order.Order>;
                // POST /order/dedicatedCloud/{serviceName}/vdi
                POST(body?: {firstPublicIpAddress: string, secondPublicIpAddress: string, datacenterId: number}): Promise<order.Order>;
            }
        } | any
    }
    domain:  {
        zone:  {
            // GET /order/domain/zone
            GET(): Promise<string[]>;
            new:  {
                // GET /order/domain/zone/new
                GET(param?: {zoneName: string, minimized?: boolean}): Promise<order.Order>;
                // POST /order/domain/zone/new
                POST(body?: {zoneName: string, minimized?: boolean}): Promise<order.Order>;
            }
            [keys: string]: {
                // GET /order/domain/zone/{zoneName}
                GET(): Promise<string[]>;
                dnsAnycast:  {
                    // GET /order/domain/zone/{zoneName}/dnsAnycast
                    GET(): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/domain/zone/{zoneName}/dnsAnycast/{duration}
                        GET(): Promise<order.Order>;
                        // POST /order/domain/zone/{zoneName}/dnsAnycast/{duration}
                        POST(): Promise<order.Order>;
                    } | any
                }
            } | any
        }
    }
    email:  {
        domain:  {
            // GET /order/email/domain
            GET(): Promise<string[]>;
            new:  {
                // GET /order/email/domain/new
                GET(param?: {offer: email.domain.OfferEnum, domain: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/email/domain/new/{duration}
                    GET(param?: {offer: email.domain.OfferEnum, domain: string}): Promise<order.Order>;
                    // POST /order/email/domain/new/{duration}
                    POST(body?: {offer: email.domain.OfferEnum, domain: string}): Promise<order.Order>;
                } | any
            }
        }
        exchange:  {
            // GET /order/email/exchange
            GET(): Promise<string[]>;
            [keys: string]: {
                service:  {
                    // GET /order/email/exchange/{organizationName}/service
                    GET(): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/email/exchange/{organizationName}/service/{exchangeService}
                        GET(): Promise<string[]>;
                        account:  {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/account
                            GET(param?: {licence: email.exchange.OvhLicenceEnum, storageQuota?: email.exchange.accountQuotaEnum, number: number}): Promise<string[]>;
                            [keys: string]: {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}
                                GET(param?: {licence: email.exchange.OvhLicenceEnum, storageQuota?: email.exchange.accountQuotaEnum, number: number}): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}
                                POST(body?: {licence: email.exchange.OvhLicenceEnum, storageQuota?: email.exchange.accountQuotaEnum, number: number}): Promise<order.Order>;
                            } | any
                        }
                        accountUpgrade:  {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade
                            GET(param?: {primaryEmailAddress: string, newQuota: email.exchange.accountQuotaEnum}): Promise<string[]>;
                            [keys: string]: {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}
                                GET(param?: {primaryEmailAddress: string, newQuota: email.exchange.accountQuotaEnum}): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}
                                POST(body?: {primaryEmailAddress: string, newQuota: email.exchange.accountQuotaEnum}): Promise<order.Order>;
                            } | any
                        }
                        diskSpace:  {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace
                            GET(): Promise<order.Order>;
                            // POST /order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace
                            POST(): Promise<order.Order>;
                        }
                        outlook:  {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/outlook
                            GET(param?: {licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<string[]>;
                            [keys: string]: {
                                // GET /order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}
                                GET(param?: {licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<order.Order>;
                                // POST /order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}
                                POST(body?: {licence: email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<order.Order>;
                            } | any
                        }
                        upgrade:  {
                            // GET /order/email/exchange/{organizationName}/service/{exchangeService}/upgrade
                            GET(): Promise<order.Order>;
                            // POST /order/email/exchange/{organizationName}/service/{exchangeService}/upgrade
                            POST(): Promise<order.Order>;
                        }
                    } | any
                }
            } | any
        }
        pro:  {
            // GET /order/email/pro
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/email/pro/{service}
                GET(): Promise<string[]>;
                account:  {
                    // GET /order/email/pro/{service}/account
                    GET(param?: {number: number}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/email/pro/{service}/account/{duration}
                        GET(param?: {number: number}): Promise<order.Order>;
                        // POST /order/email/pro/{service}/account/{duration}
                        POST(body?: {number: number}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
    }
    freefax:  {
        // GET /order/freefax
        GET(): Promise<string[]>;
        new:  {
            // GET /order/freefax/new
            GET(param?: {quantity: freefax.QuantityEnum}): Promise<order.Order>;
            // POST /order/freefax/new
            POST(body?: {quantity: freefax.QuantityEnum}): Promise<order.Order>;
        }
        [keys: string]: {
            // GET /order/freefax/{serviceName}
            GET(): Promise<string[]>;
            convertToVoicefax:  {
                // GET /order/freefax/{serviceName}/convertToVoicefax
                GET(param?: {billingAccount: string}): Promise<order.Order>;
                // POST /order/freefax/{serviceName}/convertToVoicefax
                POST(body?: {billingAccount: string}): Promise<order.Order>;
            }
        } | any
    }
    hosting:  {
        privateDatabase:  {
            // GET /order/hosting/privateDatabase
            GET(): Promise<string[]>;
            new:  {
                // GET /order/hosting/privateDatabase/new
                GET(param?: {version: hosting.PrivateDatabase.OrderableVersionEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/hosting/privateDatabase/new/{duration}
                    GET(param?: {version: hosting.PrivateDatabase.OrderableVersionEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum}): Promise<order.Order>;
                    // POST /order/hosting/privateDatabase/new/{duration}
                    POST(body?: {version: hosting.PrivateDatabase.OrderableVersionEnum, ram: hosting.PrivateDatabase.AvailableRamSizeEnum, datacenter?: hosting.PrivateDatabase.DatacenterEnum, offer?: hosting.PrivateDatabase.OfferEnum}): Promise<order.Order>;
                } | any
            }
            [keys: string]: {
                // GET /order/hosting/privateDatabase/{serviceName}
                GET(): Promise<string[]>;
                ram:  {
                    // GET /order/hosting/privateDatabase/{serviceName}/ram
                    GET(param?: {ram: hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/hosting/privateDatabase/{serviceName}/ram/{duration}
                        GET(param?: {ram: hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<order.Order>;
                        // POST /order/hosting/privateDatabase/{serviceName}/ram/{duration}
                        POST(body?: {ram: hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
        web:  {
            // GET /order/hosting/web
            GET(): Promise<string[]>;
            new:  {
                // GET /order/hosting/web/new
                GET(param?: {waiveRetractationPeriod?: boolean, dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/hosting/web/new/{duration}
                    GET(param?: {waiveRetractationPeriod?: boolean, dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum}): Promise<order.Order>;
                    // POST /order/hosting/web/new/{duration}
                    POST(body?: {waiveRetractationPeriod?: boolean, dnsZone?: hosting.web.DnsZoneEnum, domain: string, module?: hosting.web.module.OrderableNameEnum, offer: hosting.web.OfferEnum}): Promise<order.Order>;
                } | any
            }
            [keys: string]: {
                // GET /order/hosting/web/{serviceName}
                GET(): Promise<string[]>;
                bandwidth:  {
                    // GET /order/hosting/web/{serviceName}/bandwidth
                    GET(param?: {traffic: hosting.web.BandwidthOfferEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/hosting/web/{serviceName}/bandwidth/{duration}
                        GET(param?: {traffic: hosting.web.BandwidthOfferEnum}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/bandwidth/{duration}
                        POST(body?: {traffic: hosting.web.BandwidthOfferEnum}): Promise<order.Order>;
                    } | any
                }
                cdn:  {
                    // GET /order/hosting/web/{serviceName}/cdn
                    GET(param?: {offer: hosting.web.CdnOfferEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/hosting/web/{serviceName}/cdn/{duration}
                        GET(param?: {offer: hosting.web.CdnOfferEnum}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/cdn/{duration}
                        POST(body?: {offer: hosting.web.CdnOfferEnum}): Promise<order.Order>;
                    } | any
                }
                changeMainDomain:  {
                    // GET /order/hosting/web/{serviceName}/changeMainDomain
                    GET(param?: {mxplan: hosting.web.order.MxPlanEnum, domain: string}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/hosting/web/{serviceName}/changeMainDomain/{duration}
                        GET(param?: {mxplan: hosting.web.order.MxPlanEnum, domain: string}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/changeMainDomain/{duration}
                        POST(body?: {mxplan: hosting.web.order.MxPlanEnum, domain: string}): Promise<order.Order>;
                    } | any
                }
                extraSqlPerso:  {
                    // GET /order/hosting/web/{serviceName}/extraSqlPerso
                    GET(param?: {offer: hosting.web.database.SqlPersoOfferEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/hosting/web/{serviceName}/extraSqlPerso/{duration}
                        GET(param?: {offer: hosting.web.database.SqlPersoOfferEnum}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/extraSqlPerso/{duration}
                        POST(body?: {offer: hosting.web.database.SqlPersoOfferEnum}): Promise<order.Order>;
                    } | any
                }
                ssl:  {
                    // GET /order/hosting/web/{serviceName}/ssl
                    GET(): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/hosting/web/{serviceName}/ssl/{duration}
                        GET(): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/ssl/{duration}
                        POST(): Promise<order.Order>;
                    } | any
                }
                upgrade:  {
                    // GET /order/hosting/web/{serviceName}/upgrade
                    GET(param?: {startTime?: string, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/hosting/web/{serviceName}/upgrade/{duration}
                        GET(param?: {startTime?: string, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
                        // POST /order/hosting/web/{serviceName}/upgrade/{duration}
                        POST(body?: {startTime?: string, offer: hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
    }
    hpcspot:  {
        new:  {
            // GET /order/hpcspot/new
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/hpcspot/new/{duration}
                GET(): Promise<order.Order>;
                // POST /order/hpcspot/new/{duration}
                POST(): Promise<order.Order>;
            } | any
        }
    }
    license:  {
        cloudLinux:  {
            new:  {
                // GET /order/license/cloudLinux/new
                GET(param?: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/cloudLinux/new/{duration}
                    GET(param?: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<order.Order>;
                    // POST /order/license/cloudLinux/new/{duration}
                    POST(body?: {ip: string, version: license.CloudLinuxVersionEnum}): Promise<order.Order>;
                } | any
            }
        }
        cpanel:  {
            new:  {
                // GET /order/license/cpanel/new
                GET(param?: {version: license.OrderableCpanelVersionEnum, serviceType?: license.LicenseTypeEnum, ip: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/cpanel/new/{duration}
                    GET(param?: {version: license.OrderableCpanelVersionEnum, serviceType?: license.LicenseTypeEnum, ip: string}): Promise<order.Order>;
                    // POST /order/license/cpanel/new/{duration}
                    POST(body?: {version: license.OrderableCpanelVersionEnum, serviceType?: license.LicenseTypeEnum, ip: string}): Promise<order.Order>;
                } | any
            }
        }
        directadmin:  {
            new:  {
                // GET /order/license/directadmin/new
                GET(param?: {serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum, ip: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/directadmin/new/{duration}
                    GET(param?: {serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum, ip: string}): Promise<order.Order>;
                    // POST /order/license/directadmin/new/{duration}
                    POST(body?: {serviceType?: license.LicenseTypeEnum, version: license.OrderableDirectAdminVersionEnum, ip: string}): Promise<order.Order>;
                } | any
            }
        }
        office:  {
            new:  {
                // GET /order/license/office/new
                GET(param?: {officeBusinessQuantity?: number, officeProPlusQuantity?: number, giftCode?: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/office/new/{duration}
                    GET(param?: {officeBusinessQuantity?: number, officeProPlusQuantity?: number, giftCode?: string}): Promise<order.Order>;
                    // POST /order/license/office/new/{duration}
                    POST(body?: {officeBusinessQuantity?: number, officeProPlusQuantity?: number, giftCode?: string}): Promise<order.Order>;
                } | any
            }
        }
        plesk:  {
            // GET /order/license/plesk
            GET(): Promise<string[]>;
            new:  {
                // GET /order/license/plesk/new
                GET(param?: {powerpack?: boolean, antivirus?: license.OrderableAntivirusEnum, serviceType?: license.LicenseTypeEnum, applicationSet?: license.PleskApplicationSetEnum, ip: string, wordpressToolkit?: boolean, languagePackNumber?: license.OrderablePleskLanguagePackEnum, version: license.PleskVersionEnum, resellerManagement?: boolean, domainNumber?: license.OrderablePleskDomainNumberEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/plesk/new/{duration}
                    GET(param?: {powerpack?: boolean, antivirus?: license.OrderableAntivirusEnum, serviceType?: license.LicenseTypeEnum, applicationSet?: license.PleskApplicationSetEnum, ip: string, wordpressToolkit?: boolean, languagePackNumber?: license.OrderablePleskLanguagePackEnum, version: license.PleskVersionEnum, resellerManagement?: boolean, domainNumber?: license.OrderablePleskDomainNumberEnum}): Promise<order.Order>;
                    // POST /order/license/plesk/new/{duration}
                    POST(body?: {powerpack?: boolean, antivirus?: license.OrderableAntivirusEnum, serviceType?: license.LicenseTypeEnum, applicationSet?: license.PleskApplicationSetEnum, ip: string, wordpressToolkit?: boolean, languagePackNumber?: license.OrderablePleskLanguagePackEnum, version: license.PleskVersionEnum, resellerManagement?: boolean, domainNumber?: license.OrderablePleskDomainNumberEnum}): Promise<order.Order>;
                } | any
            }
            [keys: string]: {
                // GET /order/license/plesk/{serviceName}
                GET(): Promise<string[]>;
                upgrade:  {
                    // GET /order/license/plesk/{serviceName}/upgrade
                    GET(param?: {version?: license.PleskVersionEnum, resellerManagement?: boolean, domainNumber?: license.OrderablePleskDomainNumberEnum, wordpressToolkit?: boolean, languagePackNumber?: license.OrderablePleskLanguagePackEnum, applicationSet?: license.PleskApplicationSetEnum, antispam?: license.OrderableAntispamEnum, powerpack?: boolean, antivirus?: license.OrderableAntivirusEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/license/plesk/{serviceName}/upgrade/{duration}
                        GET(param?: {version?: license.PleskVersionEnum, resellerManagement?: boolean, domainNumber?: license.OrderablePleskDomainNumberEnum, wordpressToolkit?: boolean, languagePackNumber?: license.OrderablePleskLanguagePackEnum, applicationSet?: license.PleskApplicationSetEnum, antispam?: license.OrderableAntispamEnum, powerpack?: boolean, antivirus?: license.OrderableAntivirusEnum}): Promise<order.Order>;
                        // POST /order/license/plesk/{serviceName}/upgrade/{duration}
                        POST(body?: {version?: license.PleskVersionEnum, resellerManagement?: boolean, domainNumber?: license.OrderablePleskDomainNumberEnum, wordpressToolkit?: boolean, languagePackNumber?: license.OrderablePleskLanguagePackEnum, applicationSet?: license.PleskApplicationSetEnum, antispam?: license.OrderableAntispamEnum, powerpack?: boolean, antivirus?: license.OrderableAntivirusEnum}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
        sqlserver:  {
            // GET /order/license/sqlserver
            GET(): Promise<string[]>;
            new:  {
                // GET /order/license/sqlserver/new
                GET(param?: {ip: string, version: license.SqlServerVersionEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/sqlserver/new/{duration}
                    GET(param?: {ip: string, version: license.SqlServerVersionEnum}): Promise<order.Order>;
                    // POST /order/license/sqlserver/new/{duration}
                    POST(body?: {ip: string, version: license.SqlServerVersionEnum}): Promise<order.Order>;
                } | any
            }
            [keys: string]: {
                // GET /order/license/sqlserver/{serviceName}
                GET(): Promise<string[]>;
                upgrade:  {
                    // GET /order/license/sqlserver/{serviceName}/upgrade
                    GET(param?: {version: license.SqlServerVersionEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/license/sqlserver/{serviceName}/upgrade/{duration}
                        GET(param?: {version: license.SqlServerVersionEnum}): Promise<order.Order>;
                        // POST /order/license/sqlserver/{serviceName}/upgrade/{duration}
                        POST(body?: {version: license.SqlServerVersionEnum}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
        virtuozzo:  {
            // GET /order/license/virtuozzo
            GET(): Promise<string[]>;
            new:  {
                // GET /order/license/virtuozzo/new
                GET(param?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/virtuozzo/new/{duration}
                    GET(param?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<order.Order>;
                    // POST /order/license/virtuozzo/new/{duration}
                    POST(body?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: license.LicenseTypeEnum, version: license.OrderableVirtuozzoVersionEnum}): Promise<order.Order>;
                } | any
            }
            [keys: string]: {
                // GET /order/license/virtuozzo/{serviceName}
                GET(): Promise<string[]>;
                upgrade:  {
                    // GET /order/license/virtuozzo/{serviceName}/upgrade
                    GET(param?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                        GET(param?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<order.Order>;
                        // POST /order/license/virtuozzo/{serviceName}/upgrade/{duration}
                        POST(body?: {containerNumber: license.OrderableVirtuozzoContainerNumberEnum}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
        windows:  {
            // GET /order/license/windows
            GET(): Promise<string[]>;
            new:  {
                // GET /order/license/windows/new
                GET(param?: {sqlVersion?: license.WindowsSqlVersionEnum, ip: string, version: license.WindowsOsVersionEnum, serviceType?: license.LicenseTypeEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/windows/new/{duration}
                    GET(param?: {sqlVersion?: license.WindowsSqlVersionEnum, ip: string, version: license.WindowsOsVersionEnum, serviceType?: license.LicenseTypeEnum}): Promise<order.Order>;
                    // POST /order/license/windows/new/{duration}
                    POST(body?: {sqlVersion?: license.WindowsSqlVersionEnum, ip: string, version: license.WindowsOsVersionEnum, serviceType?: license.LicenseTypeEnum}): Promise<order.Order>;
                } | any
            }
            [keys: string]: {
                // GET /order/license/windows/{serviceName}
                GET(): Promise<string[]>;
                upgrade:  {
                    // GET /order/license/windows/{serviceName}/upgrade
                    GET(param?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/license/windows/{serviceName}/upgrade/{duration}
                        GET(param?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<order.Order>;
                        // POST /order/license/windows/{serviceName}/upgrade/{duration}
                        POST(body?: {sqlVersion?: license.WindowsSqlVersionEnum, version?: license.WindowsOsVersionEnum}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
        worklight:  {
            // GET /order/license/worklight
            GET(): Promise<string[]>;
            new:  {
                // GET /order/license/worklight/new
                GET(param?: {lessThan1000Users: boolean, version: license.WorkLightVersionEnum, ip: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/license/worklight/new/{duration}
                    GET(param?: {lessThan1000Users: boolean, version: license.WorkLightVersionEnum, ip: string}): Promise<order.Order>;
                    // POST /order/license/worklight/new/{duration}
                    POST(body?: {lessThan1000Users: boolean, version: license.WorkLightVersionEnum, ip: string}): Promise<order.Order>;
                } | any
            }
            [keys: string]: {
                // GET /order/license/worklight/{serviceName}
                GET(): Promise<string[]>;
                upgrade:  {
                    // GET /order/license/worklight/{serviceName}/upgrade
                    GET(param?: {version: license.WorkLightVersionEnum}): Promise<string[]>;
                    [keys: string]: {
                        // GET /order/license/worklight/{serviceName}/upgrade/{duration}
                        GET(param?: {version: license.WorkLightVersionEnum}): Promise<order.Order>;
                        // POST /order/license/worklight/{serviceName}/upgrade/{duration}
                        POST(body?: {version: license.WorkLightVersionEnum}): Promise<order.Order>;
                    } | any
                }
            } | any
        }
    }
    overTheBox:  {
        // GET /order/overTheBox
        GET(): Promise<string[]>;
        new:  {
            // GET /order/overTheBox/new
            GET(param?: {deviceId?: string, offer: string, voucher?: string}): Promise<string[]>;
            [keys: string]: {
                // GET /order/overTheBox/new/{duration}
                GET(param?: {deviceId?: string, offer: string, voucher?: string}): Promise<order.Order>;
                // POST /order/overTheBox/new/{duration}
                POST(body?: {deviceId?: string, offer: string, voucher?: string}): Promise<order.Order>;
            } | any
        }
        [keys: string]: {
            // GET /order/overTheBox/{serviceName}
            GET(): Promise<string[]>;
            migrate:  {
                // GET /order/overTheBox/{serviceName}/migrate
                GET(param?: {offer: string, shippingRelayID?: number, hardware: boolean, shippingContactID?: string, shippingMethod?: overTheBox.ShippingMethodEnum}): Promise<order.Order>;
                // POST /order/overTheBox/{serviceName}/migrate
                POST(body?: {offer: string, shippingRelayID?: number, hardware: boolean, shippingContactID?: string, shippingMethod?: overTheBox.ShippingMethodEnum}): Promise<order.Order>;
            }
        } | any
    }
    router:  {
        new:  {
            // GET /order/router/new
            GET(param?: {vrack: string}): Promise<string[]>;
            [keys: string]: {
                // GET /order/router/new/{duration}
                GET(param?: {vrack: string}): Promise<order.Order>;
                // POST /order/router/new/{duration}
                POST(body?: {vrack: string}): Promise<order.Order>;
            } | any
        }
    }
    saas:  {
        csp2:  {
            new:  {
                // GET /order/saas/csp2/new
                GET(param?: {officeProPlusQuantity?: number, giftCode?: string, officeBusinessQuantity?: number}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/saas/csp2/new/{duration}
                    GET(param?: {officeProPlusQuantity?: number, giftCode?: string, officeBusinessQuantity?: number}): Promise<order.Order>;
                    // POST /order/saas/csp2/new/{duration}
                    POST(body?: {officeProPlusQuantity?: number, giftCode?: string, officeBusinessQuantity?: number}): Promise<order.Order>;
                } | any
            }
        }
    }
    sms:  {
        // GET /order/sms
        GET(): Promise<string[]>;
        new:  {
            // GET /order/sms/new
            GET(param?: {quantity: number}): Promise<order.Order>;
            // POST /order/sms/new
            POST(body?: {quantity: number}): Promise<order.Order>;
        }
        [keys: string]: {
            // GET /order/sms/{serviceName}
            GET(): Promise<string[]>;
            credits:  {
                // GET /order/sms/{serviceName}/credits
                GET(param?: {quantity: number}): Promise<order.Order>;
                // POST /order/sms/{serviceName}/credits
                POST(body?: {quantity: number}): Promise<order.Order>;
            }
        } | any
    }
    telephony:  {
        // GET /order/telephony
        GET(): Promise<string[]>;
        lines:  {
            // GET /order/telephony/lines
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/telephony/lines/{serviceName}
                GET(): Promise<string[]>;
                addSimultaneousLines:  {
                    // GET /order/telephony/lines/{serviceName}/addSimultaneousLines
                    GET(param?: {quantity: number, billingAccount: string}): Promise<order.Order>;
                    // POST /order/telephony/lines/{serviceName}/addSimultaneousLines
                    POST(body?: {quantity: number, billingAccount: string}): Promise<order.Order>;
                }
                hardware:  {
                    // GET /order/telephony/lines/{serviceName}/hardware
                    GET(param?: {shippingContactId?: string, mondialRelayId?: string, retractation: boolean, hardware: string}): Promise<order.Order>;
                    // POST /order/telephony/lines/{serviceName}/hardware
                    POST(body?: {shippingContactId?: string, mondialRelayId?: string, retractation: boolean, hardware: string}): Promise<order.Order>;
                }
                updateSimultaneousChannels:  {
                    // GET /order/telephony/lines/{serviceName}/updateSimultaneousChannels
                    GET(param?: {quantity: number}): Promise<order.Order>;
                    // POST /order/telephony/lines/{serviceName}/updateSimultaneousChannels
                    POST(body?: {quantity: number}): Promise<order.Order>;
                }
            } | any
        }
        new:  {
            // GET /order/telephony/new
            GET(): Promise<order.Order>;
            // POST /order/telephony/new
            POST(): Promise<order.Order>;
        }
        spare:  {
            new:  {
                // GET /order/telephony/spare/new
                GET(param?: {quantity: number, mondialRelayId?: string, brand: string, shippingContactId: number}): Promise<order.Order>;
                // POST /order/telephony/spare/new
                POST(body?: {quantity: number, mondialRelayId?: string, brand: string, shippingContactId: number}): Promise<order.Order>;
            }
        }
        trunks:  {
            // GET /order/telephony/trunks
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/telephony/trunks/{serviceName}
                GET(): Promise<string[]>;
                addSimultaneousLines:  {
                    // GET /order/telephony/trunks/{serviceName}/addSimultaneousLines
                    GET(param?: {quantity: number, billingAccount: string}): Promise<order.Order>;
                    // POST /order/telephony/trunks/{serviceName}/addSimultaneousLines
                    POST(body?: {quantity: number, billingAccount: string}): Promise<order.Order>;
                }
                hardware:  {
                    // GET /order/telephony/trunks/{serviceName}/hardware
                    GET(param?: {shippingContactId?: string, mondialRelayId?: string, retractation: boolean, hardware: string}): Promise<order.Order>;
                    // POST /order/telephony/trunks/{serviceName}/hardware
                    POST(body?: {shippingContactId?: string, mondialRelayId?: string, retractation: boolean, hardware: string}): Promise<order.Order>;
                }
                updateSimultaneousChannels:  {
                    // GET /order/telephony/trunks/{serviceName}/updateSimultaneousChannels
                    GET(param?: {quantity: number}): Promise<order.Order>;
                    // POST /order/telephony/trunks/{serviceName}/updateSimultaneousChannels
                    POST(body?: {quantity: number}): Promise<order.Order>;
                }
            } | any
        }
        [keys: string]: {
            // GET /order/telephony/{billingAccount}
            GET(): Promise<string[]>;
            accessories:  {
                // GET /order/telephony/{billingAccount}/accessories
                GET(param?: {shippingContactId: number, mondialRelayId?: string, retractation: boolean, accessories: string[]}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/accessories
                POST(body?: {shippingContactId: number, mondialRelayId?: string, retractation: boolean, accessories: string[]}): Promise<order.Order>;
            }
            line:  {
                // GET /order/telephony/{billingAccount}/line
                GET(param?: {displayUniversalDirectories: boolean[], offers: string[], types: telephony.LineTypeEnum[], mondialRelayId?: string, zones?: string[], brand?: string, extraSimultaneousLines: number[], ownerContactIds: number[], retractation: boolean, shippingContactId: number, quantity: number}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/line
                POST(body?: {displayUniversalDirectories: boolean[], offers: string[], types: telephony.LineTypeEnum[], mondialRelayId?: string, zones?: string[], brand?: string, extraSimultaneousLines: number[], ownerContactIds: number[], retractation: boolean, shippingContactId: number, quantity: number}): Promise<order.Order>;
            }
            numberGeographic:  {
                // GET /order/telephony/{billingAccount}/numberGeographic
                GET(param?: {city: string, specificNumber?: string, zip?: string, country: telephony.NumberCountryEnum, retractation: boolean, phone?: string, siret?: string, streetNumber?: string, pool?: telephony.NumberPoolEnum, zone: string, ape?: string, legalform: nichandle.LegalFormEnum, socialNomination?: string, offer: telephony.NumberOffer, streetName?: string, displayUniversalDirectory: boolean, organisation?: string, firstname?: string, email?: string, name?: string}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/numberGeographic
                POST(body?: {city: string, specificNumber?: string, zip?: string, country: telephony.NumberCountryEnum, retractation: boolean, phone?: string, siret?: string, streetNumber?: string, pool?: telephony.NumberPoolEnum, zone: string, ape?: string, legalform: nichandle.LegalFormEnum, socialNomination?: string, offer: telephony.NumberOffer, streetName?: string, displayUniversalDirectory: boolean, organisation?: string, firstname?: string, email?: string, name?: string}): Promise<order.Order>;
            }
            numberNogeographic:  {
                // GET /order/telephony/{billingAccount}/numberNogeographic
                GET(param?: {pool?: telephony.NumberPoolEnum, streetNumber?: string, siret?: string, phone?: string, retractation: boolean, country: telephony.NumberCountryEnum, zip?: string, specificNumber?: string, city?: string, name?: string, email?: string, organisation?: string, firstname?: string, displayUniversalDirectory: boolean, streetName?: string, offer: telephony.NumberOffer, socialNomination?: string, legalform: nichandle.LegalFormEnum, ape?: string}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/numberNogeographic
                POST(body?: {pool?: telephony.NumberPoolEnum, streetNumber?: string, siret?: string, phone?: string, retractation: boolean, country: telephony.NumberCountryEnum, zip?: string, specificNumber?: string, city?: string, name?: string, email?: string, organisation?: string, firstname?: string, displayUniversalDirectory: boolean, streetName?: string, offer: telephony.NumberOffer, socialNomination?: string, legalform: nichandle.LegalFormEnum, ape?: string}): Promise<order.Order>;
            }
            numberSpecial:  {
                // GET /order/telephony/{billingAccount}/numberSpecial
                GET(param?: {country: telephony.NumberCountryEnum, phone?: string, retractation: boolean, specificNumber?: string, typology: telephony.NumberSpecialTypologyEnum, zip?: string, city?: string, siret: string, pool?: telephony.NumberPoolEnum, streetNumber?: string, range: string, socialNomination: string, legalform: nichandle.LegalFormEnum, ape: string, name?: string, firstname?: string, organisation?: string, email?: string, streetName?: string, displayUniversalDirectory: boolean}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/numberSpecial
                POST(body?: {country: telephony.NumberCountryEnum, phone?: string, retractation: boolean, specificNumber?: string, typology: telephony.NumberSpecialTypologyEnum, zip?: string, city?: string, siret: string, pool?: telephony.NumberPoolEnum, streetNumber?: string, range: string, socialNomination: string, legalform: nichandle.LegalFormEnum, ape: string, name?: string, firstname?: string, organisation?: string, email?: string, streetName?: string, displayUniversalDirectory: boolean}): Promise<order.Order>;
            }
            portability:  {
                // GET /order/telephony/{billingAccount}/portability
                GET(param?: {streetType?: string, specialNumberCategory?: telephony.portability.SpecialNumberCategoryEnum, door?: string, contactName?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, streetNumber: number, siret?: string, zip: string, socialReason: telephony.portability.SocialReason, city: string, rio?: string, streetNumberExtra?: string, lineToRedirectAliasTo?: string, country: telephony.portability.CountriesAvailable, desireDate?: string, listNumbers?: string, displayUniversalDirectory: boolean, firstName: string, streetName: string, stair?: number, contactNumber?: string, mobilePhone?: string, offer: telephony.portability.OfferType, name: string, callNumber: string, type: telephony.portability.NumberType, floor?: number, building?: string}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/portability
                POST(body?: {streetType?: string, specialNumberCategory?: telephony.portability.SpecialNumberCategoryEnum, door?: string, contactName?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, streetNumber: number, siret?: string, zip: string, socialReason: telephony.portability.SocialReason, city: string, rio?: string, streetNumberExtra?: string, lineToRedirectAliasTo?: string, country: telephony.portability.CountriesAvailable, desireDate?: string, listNumbers?: string, displayUniversalDirectory: boolean, firstName: string, streetName: string, stair?: number, contactNumber?: string, mobilePhone?: string, offer: telephony.portability.OfferType, name: string, callNumber: string, type: telephony.portability.NumberType, floor?: number, building?: string}): Promise<order.Order>;
            }
            securityDeposit:  {
                // GET /order/telephony/{billingAccount}/securityDeposit
                GET(param?: {amount: telephony.SecurityDepositAmountsEnum}): Promise<order.Order>;
                // POST /order/telephony/{billingAccount}/securityDeposit
                POST(body?: {amount: telephony.SecurityDepositAmountsEnum}): Promise<order.Order>;
            }
        } | any
    }
    upgrade:  {
        baremetalPrivateBandwidth:  {
            // GET /order/upgrade/baremetalPrivateBandwidth
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/baremetalPrivateBandwidth/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        baremetalPublicBandwidth:  {
            // GET /order/upgrade/baremetalPublicBandwidth
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/baremetalPublicBandwidth/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        cephaas:  {
            // GET /order/upgrade/cephaas
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/cephaas/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/cephaas/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/cephaas/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        ipLoadbalancing:  {
            // GET /order/upgrade/ipLoadbalancing
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/ipLoadbalancing/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/ipLoadbalancing/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/ipLoadbalancing/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        logs:  {
            // GET /order/upgrade/logs
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/logs/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/logs/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/logs/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        metrics:  {
            // GET /order/upgrade/metrics
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/metrics/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/metrics/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/metrics/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        microsoftExchange:  {
            // GET /order/upgrade/microsoftExchange
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/microsoftExchange/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/microsoftExchange/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/microsoftExchange/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        privateCloud:  {
            // GET /order/upgrade/privateCloud
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/privateCloud/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/privateCloud/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/privateCloud/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        sslGateway:  {
            // GET /order/upgrade/sslGateway
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/sslGateway/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/sslGateway/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/sslGateway/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
        vps:  {
            // GET /order/upgrade/vps
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /order/upgrade/vps/{serviceName}
                GET(): Promise<order.cart.GenericProductDefinition[]>;
                [keys: string]: {
                    // GET /order/upgrade/vps/{serviceName}/{planCode}
                    GET(param?: {quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                    // POST /order/upgrade/vps/{serviceName}/{planCode}
                    POST(body?: {autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
                } | any
            } | any
        }
    }
    veeamCloudConnect:  {
        // GET /order/veeamCloudConnect
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /order/veeamCloudConnect/{serviceName}
            GET(): Promise<string[]>;
            upgrade:  {
                // GET /order/veeamCloudConnect/{serviceName}/upgrade
                GET(param?: {offer: veeamCloudConnect.Offer}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                    GET(param?: {offer: veeamCloudConnect.Offer}): Promise<order.Order>;
                    // POST /order/veeamCloudConnect/{serviceName}/upgrade/{duration}
                    POST(body?: {offer: veeamCloudConnect.Offer}): Promise<order.Order>;
                } | any
            }
        } | any
    }
    vps:  {
        // GET /order/vps
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /order/vps/{serviceName}
            GET(): Promise<string[]>;
            additionalDisk:  {
                // GET /order/vps/{serviceName}/additionalDisk
                GET(param?: {additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/additionalDisk/{duration}
                    GET(param?: {additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/additionalDisk/{duration}
                    POST(body?: {additionalDiskSize: vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<order.Order>;
                } | any
            }
            automatedBackup:  {
                // GET /order/vps/{serviceName}/automatedBackup
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/automatedBackup/{duration}
                    GET(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/automatedBackup/{duration}
                    POST(): Promise<order.Order>;
                } | any
            }
            cpanel:  {
                // GET /order/vps/{serviceName}/cpanel
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/cpanel/{duration}
                    GET(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/cpanel/{duration}
                    POST(): Promise<order.Order>;
                } | any
            }
            ftpbackup:  {
                // GET /order/vps/{serviceName}/ftpbackup
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/ftpbackup/{duration}
                    GET(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/ftpbackup/{duration}
                    POST(): Promise<order.Order>;
                } | any
            }
            ip:  {
                // GET /order/vps/{serviceName}/ip
                GET(param?: {country?: vps.ip.GeolocationEnum, number: number}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/ip/{duration}
                    GET(param?: {country?: vps.ip.GeolocationEnum, number: number}): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/ip/{duration}
                    POST(body?: {country?: vps.ip.GeolocationEnum, number: number}): Promise<order.Order>;
                } | any
            }
            plesk:  {
                // GET /order/vps/{serviceName}/plesk
                GET(param?: {domainNumber: vps.PleskLicenseDomainNumberEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/plesk/{duration}
                    GET(param?: {domainNumber: vps.PleskLicenseDomainNumberEnum}): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/plesk/{duration}
                    POST(body?: {domainNumber: vps.PleskLicenseDomainNumberEnum}): Promise<order.Order>;
                } | any
            }
            snapshot:  {
                // GET /order/vps/{serviceName}/snapshot
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/snapshot/{duration}
                    GET(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/snapshot/{duration}
                    POST(): Promise<order.Order>;
                } | any
            }
            upgrade:  {
                // GET /order/vps/{serviceName}/upgrade
                GET(param?: {model: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/upgrade/{duration}
                    GET(param?: {model: string}): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/upgrade/{duration}
                    POST(body?: {model: string}): Promise<order.Order>;
                } | any
            }
            veeam:  {
                // GET /order/vps/{serviceName}/veeam
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/veeam/{duration}
                    GET(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/veeam/{duration}
                    POST(): Promise<order.Order>;
                } | any
            }
            windows:  {
                // GET /order/vps/{serviceName}/windows
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /order/vps/{serviceName}/windows/{duration}
                    GET(): Promise<order.Order>;
                    // POST /order/vps/{serviceName}/windows/{duration}
                    POST(): Promise<order.Order>;
                } | any
            }
        } | any
    }
    vrack:  {
        // GET /order/vrack
        GET(): Promise<string[]>;
        new:  {
            // GET /order/vrack/new
            GET(param?: {quantity?: number}): Promise<order.Order>;
            // POST /order/vrack/new
            POST(body?: {quantity?: number}): Promise<order.Order>;
        }
        [keys: string]: {
            // GET /order/vrack/{serviceName}
            GET(): Promise<string[]>;
        } | any
    }
    xdsl:  {
        spare:  {
            new:  {
                // GET /order/xdsl/spare/new
                GET(param?: {quantity: number, shippingContactId: number, brand: string, mondialRelayId?: string}): Promise<order.Order>;
                // POST /order/xdsl/spare/new
                POST(body?: {quantity: number, shippingContactId: number, brand: string, mondialRelayId?: string}): Promise<order.Order>;
            }
        }
    }
}
// Api
type PathsOrderGET = '/order/cart' |
  '/order/cart/{cartId}' |
  '/order/cart/{cartId}/analytics' |
  '/order/cart/{cartId}/analytics/options' |
  '/order/cart/{cartId}/baremetalServers' |
  '/order/cart/{cartId}/baremetalServers/options' |
  '/order/cart/{cartId}/cdn' |
  '/order/cart/{cartId}/cdn/options' |
  '/order/cart/{cartId}/cephaas' |
  '/order/cart/{cartId}/cephaas/options' |
  '/order/cart/{cartId}/checkout' |
  '/order/cart/{cartId}/cloud' |
  '/order/cart/{cartId}/cloud/options' |
  '/order/cart/{cartId}/cloudweb' |
  '/order/cart/{cartId}/cloudweb/options' |
  '/order/cart/{cartId}/coupon' |
  '/order/cart/{cartId}/csp2' |
  '/order/cart/{cartId}/csp2/options' |
  '/order/cart/{cartId}/dbaasTimeseries' |
  '/order/cart/{cartId}/dedicated' |
  '/order/cart/{cartId}/dedicated/options' |
  '/order/cart/{cartId}/dedicatedLabs' |
  '/order/cart/{cartId}/dedicatedLabs/options' |
  '/order/cart/{cartId}/dedicatedReseller' |
  '/order/cart/{cartId}/dedicatedReseller/options' |
  '/order/cart/{cartId}/deskaas' |
  '/order/cart/{cartId}/discover' |
  '/order/cart/{cartId}/discover/options' |
  '/order/cart/{cartId}/dns' |
  '/order/cart/{cartId}/domain' |
  '/order/cart/{cartId}/domain/options' |
  '/order/cart/{cartId}/domainPacks' |
  '/order/cart/{cartId}/domainRestore' |
  '/order/cart/{cartId}/domainTransfer' |
  '/order/cart/{cartId}/domainTransfer/options' |
  '/order/cart/{cartId}/emailpro' |
  '/order/cart/{cartId}/emailpro/options' |
  '/order/cart/{cartId}/exchange' |
  '/order/cart/{cartId}/exchange/options' |
  '/order/cart/{cartId}/exchangeEnterprise' |
  '/order/cart/{cartId}/exchangeEnterprise/options' |
  '/order/cart/{cartId}/hostingReseller' |
  '/order/cart/{cartId}/ip' |
  '/order/cart/{cartId}/ip/options' |
  '/order/cart/{cartId}/ipLoadbalancing' |
  '/order/cart/{cartId}/ipLoadbalancing/options' |
  '/order/cart/{cartId}/item' |
  '/order/cart/{cartId}/item/{itemId}' |
  '/order/cart/{cartId}/item/{itemId}/configuration' |
  '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}' |
  '/order/cart/{cartId}/item/{itemId}/requiredConfiguration' |
  '/order/cart/{cartId}/kubernetes' |
  '/order/cart/{cartId}/kubernetes/options' |
  '/order/cart/{cartId}/licenseCloudLinux' |
  '/order/cart/{cartId}/licenseDirectadmin' |
  '/order/cart/{cartId}/licensePlesk' |
  '/order/cart/{cartId}/licensePlesk/options' |
  '/order/cart/{cartId}/licenseSqlServer' |
  '/order/cart/{cartId}/licenseVirtuozzo' |
  '/order/cart/{cartId}/licenseWindows' |
  '/order/cart/{cartId}/licenseWorklight' |
  '/order/cart/{cartId}/licensecPanel' |
  '/order/cart/{cartId}/logs' |
  '/order/cart/{cartId}/logs/options' |
  '/order/cart/{cartId}/managedServices' |
  '/order/cart/{cartId}/managedServices/options' |
  '/order/cart/{cartId}/metrics' |
  '/order/cart/{cartId}/metrics/options' |
  '/order/cart/{cartId}/microsoft' |
  '/order/cart/{cartId}/microsoft/options' |
  '/order/cart/{cartId}/nasha' |
  '/order/cart/{cartId}/nasha/options' |
  '/order/cart/{cartId}/office365' |
  '/order/cart/{cartId}/office365/options' |
  '/order/cart/{cartId}/office365Prepaid' |
  '/order/cart/{cartId}/office365Prepaid/options' |
  '/order/cart/{cartId}/otb' |
  '/order/cart/{cartId}/otb/options' |
  '/order/cart/{cartId}/ovhCloudConnect' |
  '/order/cart/{cartId}/paasmon' |
  '/order/cart/{cartId}/privateCloudCDI' |
  '/order/cart/{cartId}/privateCloudCDI/options' |
  '/order/cart/{cartId}/privateCloudDC' |
  '/order/cart/{cartId}/privateCloudDC/options' |
  '/order/cart/{cartId}/privateCloudReseller' |
  '/order/cart/{cartId}/privateCloudReseller/options' |
  '/order/cart/{cartId}/privateCloudResellerEnterprise' |
  '/order/cart/{cartId}/privateCloudResellerEnterprise/options' |
  '/order/cart/{cartId}/privateCloudSDDC' |
  '/order/cart/{cartId}/privateCloudSDDC/options' |
  '/order/cart/{cartId}/reseller' |
  '/order/cart/{cartId}/sharepoint' |
  '/order/cart/{cartId}/sharepoint/options' |
  '/order/cart/{cartId}/sms' |
  '/order/cart/{cartId}/sslComodo' |
  '/order/cart/{cartId}/sslComodo/options' |
  '/order/cart/{cartId}/sslGateway' |
  '/order/cart/{cartId}/sslGateway/options' |
  '/order/cart/{cartId}/summary' |
  '/order/cart/{cartId}/telephony' |
  '/order/cart/{cartId}/telephony/options' |
  '/order/cart/{cartId}/vco' |
  '/order/cart/{cartId}/vdi' |
  '/order/cart/{cartId}/vdi/options' |
  '/order/cart/{cartId}/veeamEnterprise' |
  '/order/cart/{cartId}/veeamEnterprise/options' |
  '/order/cart/{cartId}/veeamcc' |
  '/order/cart/{cartId}/veeamcc/options' |
  '/order/cart/{cartId}/vps' |
  '/order/cart/{cartId}/vps/options' |
  '/order/cart/{cartId}/vrack' |
  '/order/cart/{cartId}/vrackReseller' |
  '/order/cart/{cartId}/webHosting' |
  '/order/cart/{cartId}/webHosting/options' |
  '/order/cart/{cartId}/xdsl' |
  '/order/cart/{cartId}/xdsl/options' |
  '/order/cartServiceOption/cloud' |
  '/order/cartServiceOption/cloud/{serviceName}' |
  '/order/cartServiceOption/dedicated' |
  '/order/cartServiceOption/dedicated/{serviceName}' |
  '/order/cartServiceOption/domain' |
  '/order/cartServiceOption/domain/{serviceName}' |
  '/order/cartServiceOption/emailpro' |
  '/order/cartServiceOption/emailpro/{serviceName}' |
  '/order/cartServiceOption/ipLoadbalancing' |
  '/order/cartServiceOption/ipLoadbalancing/{serviceName}' |
  '/order/cartServiceOption/logs' |
  '/order/cartServiceOption/logs/{serviceName}' |
  '/order/cartServiceOption/microsoft' |
  '/order/cartServiceOption/microsoft/{serviceName}' |
  '/order/cartServiceOption/microsoftExchange' |
  '/order/cartServiceOption/microsoftExchange/{serviceName}' |
  '/order/cartServiceOption/office365Prepaid' |
  '/order/cartServiceOption/office365Prepaid/{serviceName}' |
  '/order/cartServiceOption/privateCloud' |
  '/order/cartServiceOption/privateCloud/{serviceName}' |
  '/order/cartServiceOption/privateCloudReseller' |
  '/order/cartServiceOption/privateCloudReseller/{serviceName}' |
  '/order/cartServiceOption/privateCloudResellerEnterprise' |
  '/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}' |
  '/order/cartServiceOption/sharepoint' |
  '/order/cartServiceOption/sharepoint/{serviceName}' |
  '/order/cartServiceOption/sslGateway' |
  '/order/cartServiceOption/sslGateway/{serviceName}' |
  '/order/cartServiceOption/vdi' |
  '/order/cartServiceOption/vdi/{serviceName}' |
  '/order/cartServiceOption/vps' |
  '/order/cartServiceOption/vps/{serviceName}' |
  '/order/cartServiceOption/webHosting' |
  '/order/cartServiceOption/webHosting/{serviceName}' |
  '/order/catalog/formatted' |
  '/order/catalog/formatted/cloud' |
  '/order/catalog/formatted/dedicated' |
  '/order/catalog/formatted/deskaas' |
  '/order/catalog/formatted/discover' |
  '/order/catalog/formatted/ip' |
  '/order/catalog/formatted/licenseCloudLinux' |
  '/order/catalog/formatted/licenseDirectadmin' |
  '/order/catalog/formatted/licensePlesk' |
  '/order/catalog/formatted/licenseSqlServer' |
  '/order/catalog/formatted/licenseVirtuozzo' |
  '/order/catalog/formatted/licenseWindows' |
  '/order/catalog/formatted/licenseWorklight' |
  '/order/catalog/formatted/licensecPanel' |
  '/order/catalog/formatted/logs' |
  '/order/catalog/formatted/privateCloudCDI' |
  '/order/catalog/formatted/privateCloudDC' |
  '/order/catalog/formatted/privateCloudReseller' |
  '/order/catalog/formatted/privateCloudResellerEnterprise' |
  '/order/catalog/formatted/privateCloudSDDC' |
  '/order/catalog/formatted/reseller' |
  '/order/catalog/formatted/vps' |
  '/order/catalog/public/baremetalServers' |
  '/order/cdn/dedicated' |
  '/order/cdn/dedicated/new' |
  '/order/cdn/dedicated/new/{duration}' |
  '/order/cdn/dedicated/{serviceName}' |
  '/order/cdn/dedicated/{serviceName}/backend' |
  '/order/cdn/dedicated/{serviceName}/backend/{duration}' |
  '/order/cdn/dedicated/{serviceName}/cacheRule' |
  '/order/cdn/dedicated/{serviceName}/cacheRule/{duration}' |
  '/order/cdn/dedicated/{serviceName}/quota' |
  '/order/cdn/dedicated/{serviceName}/quota/{duration}' |
  '/order/cdn/webstorage' |
  '/order/cdn/webstorage/{serviceName}' |
  '/order/cdn/webstorage/{serviceName}/storage' |
  '/order/cdn/webstorage/{serviceName}/storage/{duration}' |
  '/order/cdn/webstorage/{serviceName}/traffic' |
  '/order/cloud/project' |
  '/order/cloud/project/{serviceName}' |
  '/order/cloud/project/{serviceName}/credit' |
  '/order/cloud/project/{serviceName}/ip' |
  '/order/dedicated/housing' |
  '/order/dedicated/housing/{serviceName}' |
  '/order/dedicated/housing/{serviceName}/APC' |
  '/order/dedicated/housing/{serviceName}/APC/{duration}' |
  '/order/dedicated/nasha/new' |
  '/order/dedicated/nasha/new/{duration}' |
  '/order/dedicated/server' |
  '/order/dedicated/server/{serviceName}' |
  '/order/dedicated/server/{serviceName}/backupStorage' |
  '/order/dedicated/server/{serviceName}/backupStorage/{duration}' |
  '/order/dedicated/server/{serviceName}/bandwidth' |
  '/order/dedicated/server/{serviceName}/bandwidth/{duration}' |
  '/order/dedicated/server/{serviceName}/bandwidthvRack' |
  '/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}' |
  '/order/dedicated/server/{serviceName}/failoverIP' |
  '/order/dedicated/server/{serviceName}/failoverIP/{duration}' |
  '/order/dedicated/server/{serviceName}/feature' |
  '/order/dedicated/server/{serviceName}/feature/{duration}' |
  '/order/dedicated/server/{serviceName}/firewall' |
  '/order/dedicated/server/{serviceName}/firewall/{duration}' |
  '/order/dedicated/server/{serviceName}/ip' |
  '/order/dedicated/server/{serviceName}/ip/{duration}' |
  '/order/dedicated/server/{serviceName}/ipMigration' |
  '/order/dedicated/server/{serviceName}/ipMigration/{duration}' |
  '/order/dedicated/server/{serviceName}/kvm' |
  '/order/dedicated/server/{serviceName}/kvm/{duration}' |
  '/order/dedicated/server/{serviceName}/kvmExpress' |
  '/order/dedicated/server/{serviceName}/kvmExpress/{duration}' |
  '/order/dedicated/server/{serviceName}/professionalUse' |
  '/order/dedicated/server/{serviceName}/professionalUse/{duration}' |
  '/order/dedicated/server/{serviceName}/staticIP' |
  '/order/dedicated/server/{serviceName}/staticIP/{duration}' |
  '/order/dedicated/server/{serviceName}/traffic' |
  '/order/dedicated/server/{serviceName}/traffic/{duration}' |
  '/order/dedicated/server/{serviceName}/usbKey' |
  '/order/dedicated/server/{serviceName}/usbKey/{duration}' |
  '/order/dedicatedCloud' |
  '/order/dedicatedCloud/{serviceName}' |
  '/order/dedicatedCloud/{serviceName}/additionalBandwidth' |
  '/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}' |
  '/order/dedicatedCloud/{serviceName}/filer' |
  '/order/dedicatedCloud/{serviceName}/filer/{duration}' |
  '/order/dedicatedCloud/{serviceName}/host' |
  '/order/dedicatedCloud/{serviceName}/host/{duration}' |
  '/order/dedicatedCloud/{serviceName}/ip' |
  '/order/dedicatedCloud/{serviceName}/ip/{duration}' |
  '/order/dedicatedCloud/{serviceName}/spla' |
  '/order/dedicatedCloud/{serviceName}/upgradeRessource' |
  '/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}' |
  '/order/dedicatedCloud/{serviceName}/vdi' |
  '/order/domain/zone' |
  '/order/domain/zone/new' |
  '/order/domain/zone/{zoneName}' |
  '/order/domain/zone/{zoneName}/dnsAnycast' |
  '/order/domain/zone/{zoneName}/dnsAnycast/{duration}' |
  '/order/email/domain' |
  '/order/email/domain/new' |
  '/order/email/domain/new/{duration}' |
  '/order/email/exchange' |
  '/order/email/exchange/{organizationName}/service' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/account' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade' |
  '/order/email/pro' |
  '/order/email/pro/{service}' |
  '/order/email/pro/{service}/account' |
  '/order/email/pro/{service}/account/{duration}' |
  '/order/freefax' |
  '/order/freefax/new' |
  '/order/freefax/{serviceName}' |
  '/order/freefax/{serviceName}/convertToVoicefax' |
  '/order/hosting/privateDatabase' |
  '/order/hosting/privateDatabase/new' |
  '/order/hosting/privateDatabase/new/{duration}' |
  '/order/hosting/privateDatabase/{serviceName}' |
  '/order/hosting/privateDatabase/{serviceName}/ram' |
  '/order/hosting/privateDatabase/{serviceName}/ram/{duration}' |
  '/order/hosting/web' |
  '/order/hosting/web/new' |
  '/order/hosting/web/new/{duration}' |
  '/order/hosting/web/{serviceName}' |
  '/order/hosting/web/{serviceName}/bandwidth' |
  '/order/hosting/web/{serviceName}/bandwidth/{duration}' |
  '/order/hosting/web/{serviceName}/cdn' |
  '/order/hosting/web/{serviceName}/cdn/{duration}' |
  '/order/hosting/web/{serviceName}/changeMainDomain' |
  '/order/hosting/web/{serviceName}/changeMainDomain/{duration}' |
  '/order/hosting/web/{serviceName}/extraSqlPerso' |
  '/order/hosting/web/{serviceName}/extraSqlPerso/{duration}' |
  '/order/hosting/web/{serviceName}/ssl' |
  '/order/hosting/web/{serviceName}/ssl/{duration}' |
  '/order/hosting/web/{serviceName}/upgrade' |
  '/order/hosting/web/{serviceName}/upgrade/{duration}' |
  '/order/hpcspot/new' |
  '/order/hpcspot/new/{duration}' |
  '/order/license/cloudLinux/new' |
  '/order/license/cloudLinux/new/{duration}' |
  '/order/license/cpanel/new' |
  '/order/license/cpanel/new/{duration}' |
  '/order/license/directadmin/new' |
  '/order/license/directadmin/new/{duration}' |
  '/order/license/office/new' |
  '/order/license/office/new/{duration}' |
  '/order/license/plesk' |
  '/order/license/plesk/new' |
  '/order/license/plesk/new/{duration}' |
  '/order/license/plesk/{serviceName}' |
  '/order/license/plesk/{serviceName}/upgrade' |
  '/order/license/plesk/{serviceName}/upgrade/{duration}' |
  '/order/license/sqlserver' |
  '/order/license/sqlserver/new' |
  '/order/license/sqlserver/new/{duration}' |
  '/order/license/sqlserver/{serviceName}' |
  '/order/license/sqlserver/{serviceName}/upgrade' |
  '/order/license/sqlserver/{serviceName}/upgrade/{duration}' |
  '/order/license/virtuozzo' |
  '/order/license/virtuozzo/new' |
  '/order/license/virtuozzo/new/{duration}' |
  '/order/license/virtuozzo/{serviceName}' |
  '/order/license/virtuozzo/{serviceName}/upgrade' |
  '/order/license/virtuozzo/{serviceName}/upgrade/{duration}' |
  '/order/license/windows' |
  '/order/license/windows/new' |
  '/order/license/windows/new/{duration}' |
  '/order/license/windows/{serviceName}' |
  '/order/license/windows/{serviceName}/upgrade' |
  '/order/license/windows/{serviceName}/upgrade/{duration}' |
  '/order/license/worklight' |
  '/order/license/worklight/new' |
  '/order/license/worklight/new/{duration}' |
  '/order/license/worklight/{serviceName}' |
  '/order/license/worklight/{serviceName}/upgrade' |
  '/order/license/worklight/{serviceName}/upgrade/{duration}' |
  '/order/overTheBox' |
  '/order/overTheBox/new' |
  '/order/overTheBox/new/{duration}' |
  '/order/overTheBox/{serviceName}' |
  '/order/overTheBox/{serviceName}/migrate' |
  '/order/router/new' |
  '/order/router/new/{duration}' |
  '/order/saas/csp2/new' |
  '/order/saas/csp2/new/{duration}' |
  '/order/sms' |
  '/order/sms/new' |
  '/order/sms/{serviceName}' |
  '/order/sms/{serviceName}/credits' |
  '/order/telephony' |
  '/order/telephony/lines' |
  '/order/telephony/lines/{serviceName}' |
  '/order/telephony/lines/{serviceName}/addSimultaneousLines' |
  '/order/telephony/lines/{serviceName}/hardware' |
  '/order/telephony/lines/{serviceName}/updateSimultaneousChannels' |
  '/order/telephony/new' |
  '/order/telephony/spare/new' |
  '/order/telephony/trunks' |
  '/order/telephony/trunks/{serviceName}' |
  '/order/telephony/trunks/{serviceName}/addSimultaneousLines' |
  '/order/telephony/trunks/{serviceName}/hardware' |
  '/order/telephony/trunks/{serviceName}/updateSimultaneousChannels' |
  '/order/telephony/{billingAccount}' |
  '/order/telephony/{billingAccount}/accessories' |
  '/order/telephony/{billingAccount}/line' |
  '/order/telephony/{billingAccount}/numberGeographic' |
  '/order/telephony/{billingAccount}/numberNogeographic' |
  '/order/telephony/{billingAccount}/numberSpecial' |
  '/order/telephony/{billingAccount}/portability' |
  '/order/telephony/{billingAccount}/securityDeposit' |
  '/order/upgrade/baremetalPrivateBandwidth' |
  '/order/upgrade/baremetalPrivateBandwidth/{serviceName}' |
  '/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}' |
  '/order/upgrade/baremetalPublicBandwidth' |
  '/order/upgrade/baremetalPublicBandwidth/{serviceName}' |
  '/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}' |
  '/order/upgrade/cephaas' |
  '/order/upgrade/cephaas/{serviceName}' |
  '/order/upgrade/cephaas/{serviceName}/{planCode}' |
  '/order/upgrade/ipLoadbalancing' |
  '/order/upgrade/ipLoadbalancing/{serviceName}' |
  '/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}' |
  '/order/upgrade/logs' |
  '/order/upgrade/logs/{serviceName}' |
  '/order/upgrade/logs/{serviceName}/{planCode}' |
  '/order/upgrade/metrics' |
  '/order/upgrade/metrics/{serviceName}' |
  '/order/upgrade/metrics/{serviceName}/{planCode}' |
  '/order/upgrade/microsoftExchange' |
  '/order/upgrade/microsoftExchange/{serviceName}' |
  '/order/upgrade/microsoftExchange/{serviceName}/{planCode}' |
  '/order/upgrade/privateCloud' |
  '/order/upgrade/privateCloud/{serviceName}' |
  '/order/upgrade/privateCloud/{serviceName}/{planCode}' |
  '/order/upgrade/sslGateway' |
  '/order/upgrade/sslGateway/{serviceName}' |
  '/order/upgrade/sslGateway/{serviceName}/{planCode}' |
  '/order/upgrade/vps' |
  '/order/upgrade/vps/{serviceName}' |
  '/order/upgrade/vps/{serviceName}/{planCode}' |
  '/order/veeamCloudConnect' |
  '/order/veeamCloudConnect/{serviceName}' |
  '/order/veeamCloudConnect/{serviceName}/upgrade' |
  '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}' |
  '/order/vps' |
  '/order/vps/{serviceName}' |
  '/order/vps/{serviceName}/additionalDisk' |
  '/order/vps/{serviceName}/additionalDisk/{duration}' |
  '/order/vps/{serviceName}/automatedBackup' |
  '/order/vps/{serviceName}/automatedBackup/{duration}' |
  '/order/vps/{serviceName}/cpanel' |
  '/order/vps/{serviceName}/cpanel/{duration}' |
  '/order/vps/{serviceName}/ftpbackup' |
  '/order/vps/{serviceName}/ftpbackup/{duration}' |
  '/order/vps/{serviceName}/ip' |
  '/order/vps/{serviceName}/ip/{duration}' |
  '/order/vps/{serviceName}/plesk' |
  '/order/vps/{serviceName}/plesk/{duration}' |
  '/order/vps/{serviceName}/snapshot' |
  '/order/vps/{serviceName}/snapshot/{duration}' |
  '/order/vps/{serviceName}/upgrade' |
  '/order/vps/{serviceName}/upgrade/{duration}' |
  '/order/vps/{serviceName}/veeam' |
  '/order/vps/{serviceName}/veeam/{duration}' |
  '/order/vps/{serviceName}/windows' |
  '/order/vps/{serviceName}/windows/{duration}' |
  '/order/vrack' |
  '/order/vrack/new' |
  '/order/vrack/{serviceName}' |
  '/order/xdsl/spare/new';

type PathsOrderPUT = '/order/cart/{cartId}' |
  '/order/cart/{cartId}/item/{itemId}';

type PathsOrderPOST = '/order/cart' |
  '/order/cart/{cartId}/analytics' |
  '/order/cart/{cartId}/analytics/options' |
  '/order/cart/{cartId}/assign' |
  '/order/cart/{cartId}/baremetalServers' |
  '/order/cart/{cartId}/baremetalServers/options' |
  '/order/cart/{cartId}/cdn' |
  '/order/cart/{cartId}/cdn/options' |
  '/order/cart/{cartId}/cephaas' |
  '/order/cart/{cartId}/cephaas/options' |
  '/order/cart/{cartId}/checkout' |
  '/order/cart/{cartId}/cloud' |
  '/order/cart/{cartId}/cloud/options' |
  '/order/cart/{cartId}/cloudweb' |
  '/order/cart/{cartId}/cloudweb/options' |
  '/order/cart/{cartId}/coupon' |
  '/order/cart/{cartId}/csp2' |
  '/order/cart/{cartId}/csp2/options' |
  '/order/cart/{cartId}/dbaasTimeseries' |
  '/order/cart/{cartId}/dedicated' |
  '/order/cart/{cartId}/dedicated/options' |
  '/order/cart/{cartId}/dedicatedLabs' |
  '/order/cart/{cartId}/dedicatedLabs/options' |
  '/order/cart/{cartId}/dedicatedReseller' |
  '/order/cart/{cartId}/dedicatedReseller/options' |
  '/order/cart/{cartId}/deskaas' |
  '/order/cart/{cartId}/discover' |
  '/order/cart/{cartId}/discover/options' |
  '/order/cart/{cartId}/dns' |
  '/order/cart/{cartId}/domain' |
  '/order/cart/{cartId}/domain/options' |
  '/order/cart/{cartId}/domainPacks' |
  '/order/cart/{cartId}/domainTransfer' |
  '/order/cart/{cartId}/domainTransfer/options' |
  '/order/cart/{cartId}/emailpro' |
  '/order/cart/{cartId}/emailpro/options' |
  '/order/cart/{cartId}/exchange' |
  '/order/cart/{cartId}/exchange/options' |
  '/order/cart/{cartId}/exchangeEnterprise' |
  '/order/cart/{cartId}/exchangeEnterprise/options' |
  '/order/cart/{cartId}/hostingReseller' |
  '/order/cart/{cartId}/ip' |
  '/order/cart/{cartId}/ip/options' |
  '/order/cart/{cartId}/ipLoadbalancing' |
  '/order/cart/{cartId}/ipLoadbalancing/options' |
  '/order/cart/{cartId}/item/{itemId}/configuration' |
  '/order/cart/{cartId}/kubernetes' |
  '/order/cart/{cartId}/kubernetes/options' |
  '/order/cart/{cartId}/licenseCloudLinux' |
  '/order/cart/{cartId}/licenseDirectadmin' |
  '/order/cart/{cartId}/licensePlesk' |
  '/order/cart/{cartId}/licensePlesk/options' |
  '/order/cart/{cartId}/licenseSqlServer' |
  '/order/cart/{cartId}/licenseVirtuozzo' |
  '/order/cart/{cartId}/licenseWindows' |
  '/order/cart/{cartId}/licenseWorklight' |
  '/order/cart/{cartId}/licensecPanel' |
  '/order/cart/{cartId}/logs' |
  '/order/cart/{cartId}/logs/options' |
  '/order/cart/{cartId}/managedServices' |
  '/order/cart/{cartId}/managedServices/options' |
  '/order/cart/{cartId}/metrics' |
  '/order/cart/{cartId}/metrics/options' |
  '/order/cart/{cartId}/microsoft' |
  '/order/cart/{cartId}/microsoft/options' |
  '/order/cart/{cartId}/nasha' |
  '/order/cart/{cartId}/nasha/options' |
  '/order/cart/{cartId}/office365' |
  '/order/cart/{cartId}/office365/options' |
  '/order/cart/{cartId}/office365Prepaid' |
  '/order/cart/{cartId}/office365Prepaid/options' |
  '/order/cart/{cartId}/otb' |
  '/order/cart/{cartId}/otb/options' |
  '/order/cart/{cartId}/ovhCloudConnect' |
  '/order/cart/{cartId}/paasmon' |
  '/order/cart/{cartId}/privateCloudCDI' |
  '/order/cart/{cartId}/privateCloudCDI/options' |
  '/order/cart/{cartId}/privateCloudDC' |
  '/order/cart/{cartId}/privateCloudDC/options' |
  '/order/cart/{cartId}/privateCloudReseller' |
  '/order/cart/{cartId}/privateCloudReseller/options' |
  '/order/cart/{cartId}/privateCloudResellerEnterprise' |
  '/order/cart/{cartId}/privateCloudResellerEnterprise/options' |
  '/order/cart/{cartId}/privateCloudSDDC' |
  '/order/cart/{cartId}/privateCloudSDDC/options' |
  '/order/cart/{cartId}/reseller' |
  '/order/cart/{cartId}/sharepoint' |
  '/order/cart/{cartId}/sharepoint/options' |
  '/order/cart/{cartId}/sms' |
  '/order/cart/{cartId}/sslComodo' |
  '/order/cart/{cartId}/sslComodo/options' |
  '/order/cart/{cartId}/sslGateway' |
  '/order/cart/{cartId}/sslGateway/options' |
  '/order/cart/{cartId}/telephony' |
  '/order/cart/{cartId}/telephony/options' |
  '/order/cart/{cartId}/vco' |
  '/order/cart/{cartId}/vdi' |
  '/order/cart/{cartId}/vdi/options' |
  '/order/cart/{cartId}/veeamEnterprise' |
  '/order/cart/{cartId}/veeamEnterprise/options' |
  '/order/cart/{cartId}/veeamcc' |
  '/order/cart/{cartId}/veeamcc/options' |
  '/order/cart/{cartId}/vps' |
  '/order/cart/{cartId}/vps/options' |
  '/order/cart/{cartId}/vrack' |
  '/order/cart/{cartId}/vrackReseller' |
  '/order/cart/{cartId}/webHosting' |
  '/order/cart/{cartId}/webHosting/options' |
  '/order/cart/{cartId}/xdsl' |
  '/order/cart/{cartId}/xdsl/options' |
  '/order/cartServiceOption/cloud/{serviceName}' |
  '/order/cartServiceOption/dedicated/{serviceName}' |
  '/order/cartServiceOption/domain/{serviceName}' |
  '/order/cartServiceOption/emailpro/{serviceName}' |
  '/order/cartServiceOption/ipLoadbalancing/{serviceName}' |
  '/order/cartServiceOption/logs/{serviceName}' |
  '/order/cartServiceOption/microsoft/{serviceName}' |
  '/order/cartServiceOption/microsoftExchange/{serviceName}' |
  '/order/cartServiceOption/office365Prepaid/{serviceName}' |
  '/order/cartServiceOption/privateCloud/{serviceName}' |
  '/order/cartServiceOption/privateCloudReseller/{serviceName}' |
  '/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}' |
  '/order/cartServiceOption/sharepoint/{serviceName}' |
  '/order/cartServiceOption/sslGateway/{serviceName}' |
  '/order/cartServiceOption/vdi/{serviceName}' |
  '/order/cartServiceOption/vps/{serviceName}' |
  '/order/cartServiceOption/webHosting/{serviceName}' |
  '/order/cdn/dedicated/new/{duration}' |
  '/order/cdn/dedicated/{serviceName}/backend/{duration}' |
  '/order/cdn/dedicated/{serviceName}/cacheRule/{duration}' |
  '/order/cdn/dedicated/{serviceName}/quota/{duration}' |
  '/order/cdn/webstorage/{serviceName}/storage/{duration}' |
  '/order/cdn/webstorage/{serviceName}/traffic' |
  '/order/cloud/project/{serviceName}/credit' |
  '/order/cloud/project/{serviceName}/ip' |
  '/order/dedicated/housing/{serviceName}/APC/{duration}' |
  '/order/dedicated/nasha/new/{duration}' |
  '/order/dedicated/server/{serviceName}/backupStorage/{duration}' |
  '/order/dedicated/server/{serviceName}/bandwidth/{duration}' |
  '/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}' |
  '/order/dedicated/server/{serviceName}/failoverIP/{duration}' |
  '/order/dedicated/server/{serviceName}/feature/{duration}' |
  '/order/dedicated/server/{serviceName}/firewall/{duration}' |
  '/order/dedicated/server/{serviceName}/ip/{duration}' |
  '/order/dedicated/server/{serviceName}/ipMigration/{duration}' |
  '/order/dedicated/server/{serviceName}/kvm/{duration}' |
  '/order/dedicated/server/{serviceName}/kvmExpress/{duration}' |
  '/order/dedicated/server/{serviceName}/professionalUse/{duration}' |
  '/order/dedicated/server/{serviceName}/staticIP/{duration}' |
  '/order/dedicated/server/{serviceName}/traffic/{duration}' |
  '/order/dedicated/server/{serviceName}/usbKey/{duration}' |
  '/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}' |
  '/order/dedicatedCloud/{serviceName}/filer/{duration}' |
  '/order/dedicatedCloud/{serviceName}/host/{duration}' |
  '/order/dedicatedCloud/{serviceName}/ip/{duration}' |
  '/order/dedicatedCloud/{serviceName}/spla' |
  '/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}' |
  '/order/dedicatedCloud/{serviceName}/vdi' |
  '/order/domain/zone/new' |
  '/order/domain/zone/{zoneName}/dnsAnycast/{duration}' |
  '/order/email/domain/new/{duration}' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}' |
  '/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade' |
  '/order/email/pro/{service}/account/{duration}' |
  '/order/freefax/new' |
  '/order/freefax/{serviceName}/convertToVoicefax' |
  '/order/hosting/privateDatabase/new/{duration}' |
  '/order/hosting/privateDatabase/{serviceName}/ram/{duration}' |
  '/order/hosting/web/new/{duration}' |
  '/order/hosting/web/{serviceName}/bandwidth/{duration}' |
  '/order/hosting/web/{serviceName}/cdn/{duration}' |
  '/order/hosting/web/{serviceName}/changeMainDomain/{duration}' |
  '/order/hosting/web/{serviceName}/extraSqlPerso/{duration}' |
  '/order/hosting/web/{serviceName}/ssl/{duration}' |
  '/order/hosting/web/{serviceName}/upgrade/{duration}' |
  '/order/hpcspot/new/{duration}' |
  '/order/license/cloudLinux/new/{duration}' |
  '/order/license/cpanel/new/{duration}' |
  '/order/license/directadmin/new/{duration}' |
  '/order/license/office/new/{duration}' |
  '/order/license/plesk/new/{duration}' |
  '/order/license/plesk/{serviceName}/upgrade/{duration}' |
  '/order/license/sqlserver/new/{duration}' |
  '/order/license/sqlserver/{serviceName}/upgrade/{duration}' |
  '/order/license/virtuozzo/new/{duration}' |
  '/order/license/virtuozzo/{serviceName}/upgrade/{duration}' |
  '/order/license/windows/new/{duration}' |
  '/order/license/windows/{serviceName}/upgrade/{duration}' |
  '/order/license/worklight/new/{duration}' |
  '/order/license/worklight/{serviceName}/upgrade/{duration}' |
  '/order/overTheBox/new/{duration}' |
  '/order/overTheBox/{serviceName}/migrate' |
  '/order/router/new/{duration}' |
  '/order/saas/csp2/new/{duration}' |
  '/order/sms/new' |
  '/order/sms/{serviceName}/credits' |
  '/order/telephony/lines/{serviceName}/addSimultaneousLines' |
  '/order/telephony/lines/{serviceName}/hardware' |
  '/order/telephony/lines/{serviceName}/updateSimultaneousChannels' |
  '/order/telephony/new' |
  '/order/telephony/spare/new' |
  '/order/telephony/trunks/{serviceName}/addSimultaneousLines' |
  '/order/telephony/trunks/{serviceName}/hardware' |
  '/order/telephony/trunks/{serviceName}/updateSimultaneousChannels' |
  '/order/telephony/{billingAccount}/accessories' |
  '/order/telephony/{billingAccount}/line' |
  '/order/telephony/{billingAccount}/numberGeographic' |
  '/order/telephony/{billingAccount}/numberNogeographic' |
  '/order/telephony/{billingAccount}/numberSpecial' |
  '/order/telephony/{billingAccount}/portability' |
  '/order/telephony/{billingAccount}/securityDeposit' |
  '/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}' |
  '/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}' |
  '/order/upgrade/cephaas/{serviceName}/{planCode}' |
  '/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}' |
  '/order/upgrade/logs/{serviceName}/{planCode}' |
  '/order/upgrade/metrics/{serviceName}/{planCode}' |
  '/order/upgrade/microsoftExchange/{serviceName}/{planCode}' |
  '/order/upgrade/privateCloud/{serviceName}/{planCode}' |
  '/order/upgrade/sslGateway/{serviceName}/{planCode}' |
  '/order/upgrade/vps/{serviceName}/{planCode}' |
  '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}' |
  '/order/vps/{serviceName}/additionalDisk/{duration}' |
  '/order/vps/{serviceName}/automatedBackup/{duration}' |
  '/order/vps/{serviceName}/cpanel/{duration}' |
  '/order/vps/{serviceName}/ftpbackup/{duration}' |
  '/order/vps/{serviceName}/ip/{duration}' |
  '/order/vps/{serviceName}/plesk/{duration}' |
  '/order/vps/{serviceName}/snapshot/{duration}' |
  '/order/vps/{serviceName}/upgrade/{duration}' |
  '/order/vps/{serviceName}/veeam/{duration}' |
  '/order/vps/{serviceName}/windows/{duration}' |
  '/order/vrack/new' |
  '/order/xdsl/spare/new';

type PathsOrderDELETE = '/order/cart/{cartId}' |
  '/order/cart/{cartId}/coupon' |
  '/order/cart/{cartId}/item/{itemId}' |
  '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}';

export class ApiOrder extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Missing description
   * List of your OVH order carts
   */
  public get(path: '/order/cart', params: {description?: string}): Promise<string[]>;
  /**
   * Missing description
   * Retrieve information about a specific cart
   */
  public get(path: '/order/cart/{cartId}', params: {cartId: string}): Promise<order.cart.Cart>;
  /**
   * Create a analytics project
   * Get informations about analytics offers
   */
  public get(path: '/order/cart/{cartId}/analytics', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * List all addons possible for a analytics project
   * Get informations about analytics options
   */
  public get(path: '/order/cart/{cartId}/analytics/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about a baremetal server
   */
  public get(path: '/order/cart/{cartId}/baremetalServers', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about baremetal server options
   */
  public get(path: '/order/cart/{cartId}/baremetalServers/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about CDN offers
   */
  public get(path: '/order/cart/{cartId}/cdn', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about CDN options
   */
  public get(path: '/order/cart/{cartId}/cdn/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Ceph as a Service offers
   */
  public get(path: '/order/cart/{cartId}/cephaas', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Ceph as a Service options
   */
  public get(path: '/order/cart/{cartId}/cephaas/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get prices and contracts information for your cart
   */
  public get(path: '/order/cart/{cartId}/checkout', params: {cartId: string}): Promise<order.Order>;
  /**
   * Missing description
   * Get informations about Public Cloud offers
   */
  public get(path: '/order/cart/{cartId}/cloud', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Public Cloud options
   */
  public get(path: '/order/cart/{cartId}/cloud/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Cloud Web offers
   */
  public get(path: '/order/cart/{cartId}/cloudweb', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Cloud Web options
   */
  public get(path: '/order/cart/{cartId}/cloudweb/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Retrieve coupons associated to cart
   */
  public get(path: '/order/cart/{cartId}/coupon', params: {cartId: string}): Promise<string[]>;
  /**
   * Missing description
   * Get informations about SaaS CSP2 offers
   */
  public get(path: '/order/cart/{cartId}/csp2', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SaaS CSP2 options
   */
  public get(path: '/order/cart/{cartId}/csp2/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about a timeseries offer
   */
  public get(path: '/order/cart/{cartId}/dbaasTimeseries', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about a dedicated server
   */
  public get(path: '/order/cart/{cartId}/dedicated', params: {cartId: string, family?: string, planCode?: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about dedicated server options
   */
  public get(path: '/order/cart/{cartId}/dedicated/options', params: {cartId: string, family?: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about a dedicated labs server
   */
  public get(path: '/order/cart/{cartId}/dedicatedLabs', params: {cartId: string, planCode?: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about dedicated labs server options
   */
  public get(path: '/order/cart/{cartId}/dedicatedLabs/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about a dedicated server for US Reseller
   */
  public get(path: '/order/cart/{cartId}/dedicatedReseller', params: {cartId: string, family?: string, planCode?: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about dedicated server options
   */
  public get(path: '/order/cart/{cartId}/dedicatedReseller/options', params: {cartId: string, family?: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Desk As A Service offers
   */
  public get(path: '/order/cart/{cartId}/deskaas', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Dedicated Discover server offers
   */
  public get(path: '/order/cart/{cartId}/discover', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Dedicated Discover server options
   */
  public get(path: '/order/cart/{cartId}/discover/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about DNS zone offer
   */
  public get(path: '/order/cart/{cartId}/dns', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about a domain name
   */
  public get(path: '/order/cart/{cartId}/domain', params: {cartId: string, domain: string}): Promise<order.cart.ProductInformation[]>;
  /**
   * Missing description
   * Get informations about domain names options
   */
  public get(path: '/order/cart/{cartId}/domain/options', params: {cartId: string, domain: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Domain packs offers (AllDom)
   */
  public get(path: '/order/cart/{cartId}/domainPacks', params: {cartId: string, domain: string}): Promise<order.cart.DomainPacksProductInformation[]>;
  /**
   * Missing description
   * Get informations about Domain Restore
   */
  public get(path: '/order/cart/{cartId}/domainRestore', params: {cartId: string, domain: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about a domain name transfer
   */
  public get(path: '/order/cart/{cartId}/domainTransfer', params: {cartId: string, domain: string}): Promise<order.cart.ProductInformation[]>;
  /**
   * Missing description
   * Get informations about domain names transfer options
   */
  public get(path: '/order/cart/{cartId}/domainTransfer/options', params: {cartId: string, domain: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about EmailPro offers
   */
  public get(path: '/order/cart/{cartId}/emailpro', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about EmailPro options
   */
  public get(path: '/order/cart/{cartId}/emailpro/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Exchange offers
   */
  public get(path: '/order/cart/{cartId}/exchange', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Exchange options
   */
  public get(path: '/order/cart/{cartId}/exchange/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Exchange Enterprise offers
   */
  public get(path: '/order/cart/{cartId}/exchangeEnterprise', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Exchange Enterprise options
   */
  public get(path: '/order/cart/{cartId}/exchangeEnterprise/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Hosting Reseller offers
   */
  public get(path: '/order/cart/{cartId}/hostingReseller', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about IP addresses offers
   */
  public get(path: '/order/cart/{cartId}/ip', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about IP addresses options
   */
  public get(path: '/order/cart/{cartId}/ip/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about IP Load-Balancing offers
   */
  public get(path: '/order/cart/{cartId}/ipLoadbalancing', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about IP Load-Balancing options
   */
  public get(path: '/order/cart/{cartId}/ipLoadbalancing/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * List all the items of a cart
   */
  public get(path: '/order/cart/{cartId}/item', params: {cartId: string}): Promise<number[]>;
  /**
   * Missing description
   * Retrieve information about a specific item of a cart
   */
  public get(path: '/order/cart/{cartId}/item/{itemId}', params: {cartId: string, itemId: string}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Retrieve all configuration item of the cart item
   */
  public get(path: '/order/cart/{cartId}/item/{itemId}/configuration', params: {cartId: string, itemId: string, label?: string}): Promise<number[]>;
  /**
   * Missing description
   * Retrieve configuration item
   */
  public get(path: '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}', params: {cartId: string, itemId: string, configurationId: string}): Promise<order.cart.ConfigurationItem>;
  /**
   * Missing description
   * Retrieve all required configuration item of the cart item
   */
  public get(path: '/order/cart/{cartId}/item/{itemId}/requiredConfiguration', params: {cartId: string, itemId: string}): Promise<order.cart.ConfigurationRequirements[]>;
  /**
   * Missing description
   * Get informations about Kubernetes offers
   */
  public get(path: '/order/cart/{cartId}/kubernetes', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Kubernetes options
   */
  public get(path: '/order/cart/{cartId}/kubernetes/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about CloudLinux licenses offers
   */
  public get(path: '/order/cart/{cartId}/licenseCloudLinux', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about cPanel licenses offers
   */
  public get(path: '/order/cart/{cartId}/licensecPanel', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Directadmin licenses offers
   */
  public get(path: '/order/cart/{cartId}/licenseDirectadmin', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Plesk licenses offers
   */
  public get(path: '/order/cart/{cartId}/licensePlesk', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Plesk license options
   */
  public get(path: '/order/cart/{cartId}/licensePlesk/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about SqlServer licenses offers
   */
  public get(path: '/order/cart/{cartId}/licenseSqlServer', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Virtuozzo licenses offers
   */
  public get(path: '/order/cart/{cartId}/licenseVirtuozzo', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Windows licenses offers
   */
  public get(path: '/order/cart/{cartId}/licenseWindows', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Worklight licenses offers
   */
  public get(path: '/order/cart/{cartId}/licenseWorklight', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Logs offers
   */
  public get(path: '/order/cart/{cartId}/logs', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Logs options
   */
  public get(path: '/order/cart/{cartId}/logs/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Managed Services offers
   */
  public get(path: '/order/cart/{cartId}/managedServices', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Managed Services options
   */
  public get(path: '/order/cart/{cartId}/managedServices/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Metrics offers
   */
  public get(path: '/order/cart/{cartId}/metrics', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Metrics options
   */
  public get(path: '/order/cart/{cartId}/metrics/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Microsoft offers
   */
  public get(path: '/order/cart/{cartId}/microsoft', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Microsoft options
   */
  public get(path: '/order/cart/{cartId}/microsoft/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about NAS HA offers
   */
  public get(path: '/order/cart/{cartId}/nasha', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about NAS HA options
   */
  public get(path: '/order/cart/{cartId}/nasha/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Office 365 licenses
   */
  public get(path: '/order/cart/{cartId}/office365', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Office 365 options
   */
  public get(path: '/order/cart/{cartId}/office365/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Office 365 Prepaid licenses
   */
  public get(path: '/order/cart/{cartId}/office365Prepaid', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Office 365 Prepaid options
   */
  public get(path: '/order/cart/{cartId}/office365Prepaid/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Over The Box offers
   */
  public get(path: '/order/cart/{cartId}/otb', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Over The Box options
   */
  public get(path: '/order/cart/{cartId}/otb/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about OVHcloud Connect offers
   */
  public get(path: '/order/cart/{cartId}/ovhCloudConnect', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about PaaS Monitoring offers
   */
  public get(path: '/order/cart/{cartId}/paasmon', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud CDI offers
   */
  public get(path: '/order/cart/{cartId}/privateCloudCDI', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud CDI options
   */
  public get(path: '/order/cart/{cartId}/privateCloudCDI/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Dedicated Cloud offers
   */
  public get(path: '/order/cart/{cartId}/privateCloudDC', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Dedicated Cloud options
   */
  public get(path: '/order/cart/{cartId}/privateCloudDC/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Reseller offers
   */
  public get(path: '/order/cart/{cartId}/privateCloudReseller', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Reseller options
   */
  public get(path: '/order/cart/{cartId}/privateCloudReseller/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Reseller Enterprise offers
   */
  public get(path: '/order/cart/{cartId}/privateCloudResellerEnterprise', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud Reseller Enterprise options
   */
  public get(path: '/order/cart/{cartId}/privateCloudResellerEnterprise/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud SDDC offers
   */
  public get(path: '/order/cart/{cartId}/privateCloudSDDC', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Private Cloud SDDC options
   */
  public get(path: '/order/cart/{cartId}/privateCloudSDDC/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Reseller offers
   */
  public get(path: '/order/cart/{cartId}/reseller', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Sharepoint offers
   */
  public get(path: '/order/cart/{cartId}/sharepoint', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Sharepoint options
   */
  public get(path: '/order/cart/{cartId}/sharepoint/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about SMS offers
   */
  public get(path: '/order/cart/{cartId}/sms', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Comodo offers
   */
  public get(path: '/order/cart/{cartId}/sslComodo', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Comodo options
   */
  public get(path: '/order/cart/{cartId}/sslComodo/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Gateway offers
   */
  public get(path: '/order/cart/{cartId}/sslGateway', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about SSL Gateway options
   */
  public get(path: '/order/cart/{cartId}/sslGateway/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get a summary of your current order
   */
  public get(path: '/order/cart/{cartId}/summary', params: {cartId: string}): Promise<order.Order>;
  /**
   * Missing description
   * Get informations about VoIP offers
   */
  public get(path: '/order/cart/{cartId}/telephony', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about VoIP options
   */
  public get(path: '/order/cart/{cartId}/telephony/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * List of OVHcloud Connect product
   * Get informations about OVHcloud Connect offers
   */
  public get(path: '/order/cart/{cartId}/vco', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Horizon View offers
   */
  public get(path: '/order/cart/{cartId}/vdi', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Horizon View options
   */
  public get(path: '/order/cart/{cartId}/vdi/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Veeam Cloud Connect offers
   */
  public get(path: '/order/cart/{cartId}/veeamcc', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Veeam Cloud Connect options
   */
  public get(path: '/order/cart/{cartId}/veeamcc/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about Veeam Enterprise offers
   */
  public get(path: '/order/cart/{cartId}/veeamEnterprise', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about Veeam Enterprise options
   */
  public get(path: '/order/cart/{cartId}/veeamEnterprise/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about VPS offers
   */
  public get(path: '/order/cart/{cartId}/vps', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about VPS options
   */
  public get(path: '/order/cart/{cartId}/vps/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Get informations about vRack offers
   */
  public get(path: '/order/cart/{cartId}/vrack', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about vRack offers
   */
  public get(path: '/order/cart/{cartId}/vrackReseller', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about webHosting offers
   */
  public get(path: '/order/cart/{cartId}/webHosting', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Missing description
   * Get informations about webHosting options
   */
  public get(path: '/order/cart/{cartId}/webHosting/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * List of xdsl product
   * Get informations about xdsl offers
   */
  public get(path: '/order/cart/{cartId}/xdsl', params: {cartId: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * List of xdsl addon
   * Get informations about xdsl options
   */
  public get(path: '/order/cart/{cartId}/xdsl/options', params: {cartId: string, planCode: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  public get(path: '/order/cartServiceOption/cloud'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/cloud/#serviceName#
   * Get informations about additional Cloud offer for your service
   */
  public get(path: '/order/cartServiceOption/cloud/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the DEDICATED service
   * List available services
   */
  public get(path: '/order/cartServiceOption/dedicated'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/dedicated/#serviceName#
   * Get informations about additional dedicated offer for your service
   */
  public get(path: '/order/cartServiceOption/dedicated/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the DOMAIN service
   * List available services
   */
  public get(path: '/order/cartServiceOption/domain', params: {whoisOwner?: string}): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/domain/#serviceName#
   * Get informations about additional Domain offer for your service
   */
  public get(path: '/order/cartServiceOption/domain/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PROEMAIL service
   * List available services
   */
  public get(path: '/order/cartServiceOption/emailpro'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/emailpro/#serviceName#
   * Get informations about additional EmailPro offer for your service
   */
  public get(path: '/order/cartServiceOption/emailpro/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the IPLB service
   * List available services
   */
  public get(path: '/order/cartServiceOption/ipLoadbalancing'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#
   * Get informations about additional IP Load-Balancing offer for your service
   */
  public get(path: '/order/cartServiceOption/ipLoadbalancing/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the DBAAS-LOGS service
   * List available services
   */
  public get(path: '/order/cartServiceOption/logs'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/logs/#serviceName#
   * Get informations about additional Logs offer for your service
   */
  public get(path: '/order/cartServiceOption/logs/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the MSSERVICES service
   * List available services
   */
  public get(path: '/order/cartServiceOption/microsoft'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/microsoft/#serviceName#
   * Get informations about additional Microsoft offer for your service
   */
  public get(path: '/order/cartServiceOption/microsoft/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the EXCHANGE service
   * List available services
   */
  public get(path: '/order/cartServiceOption/microsoftExchange'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName#
   * Get informations about additional Microsoft offer for your service
   */
  public get(path: '/order/cartServiceOption/microsoftExchange/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the OFFICE service
   * List available services
   */
  public get(path: '/order/cartServiceOption/office365Prepaid'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/office365/#serviceName#
   * Get informations about additional Office offer for your service
   */
  public get(path: '/order/cartServiceOption/office365Prepaid/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PCC service
   * List available services
   */
  public get(path: '/order/cartServiceOption/privateCloud'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloud/#serviceName#
   * Get informations about additional Private Cloud offer for your service
   */
  public get(path: '/order/cartServiceOption/privateCloud/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PCC service
   * List available services
   */
  public get(path: '/order/cartServiceOption/privateCloudReseller'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName#
   * Get informations about additional Private Cloud offer for your service
   */
  public get(path: '/order/cartServiceOption/privateCloudReseller/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the PCC service
   * List available services
   */
  public get(path: '/order/cartServiceOption/privateCloudResellerEnterprise'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#
   * Get informations about additional Private Cloud Enterprise offer for your service
   */
  public get(path: '/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the SHAREPOINT service
   * List available services
   */
  public get(path: '/order/cartServiceOption/sharepoint'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/sharepoint/#serviceName#
   * Get informations about additional Sharepoint offer for your service
   */
  public get(path: '/order/cartServiceOption/sharepoint/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the SSLGATEWAY service
   * List available services
   */
  public get(path: '/order/cartServiceOption/sslGateway'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/sslGateway/#serviceName#
   * Get informations about additional SSL Gateway offer for your service
   */
  public get(path: '/order/cartServiceOption/sslGateway/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the HORIZONVIEW service
   * List available services
   */
  public get(path: '/order/cartServiceOption/vdi'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/vdi/#serviceName#
   * Get informations about additional Horizon View offer for your service
   */
  public get(path: '/order/cartServiceOption/vdi/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the VPS service
   * List available services
   */
  public get(path: '/order/cartServiceOption/vps'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/vps/#serviceName#
   * Get informations about additional VPS offer for your service
   */
  public get(path: '/order/cartServiceOption/vps/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Operations about the HOSTING service
   * List available services
   */
  public get(path: '/order/cartServiceOption/webHosting'): Promise<string[]>;
  /**
   * Listing offers /order/cartServiceOptions/webHosting/#serviceName#
   * Get informations about additional Web Hosting offer for your service
   */
  public get(path: '/order/cartServiceOption/webHosting/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericOptionDefinition[]>;
  /**
   * Missing description
   * Retrieve list of catalog name
   */
  public get(path: '/order/catalog/formatted'): Promise<string[]>;
  /**
   * Missing description
   * Retrieve information of Public Cloud catalog
   */
  public get(path: '/order/catalog/formatted/cloud', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of dedicated server catalog
   */
  public get(path: '/order/catalog/formatted/dedicated', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Desk as a service catalog
   */
  public get(path: '/order/catalog/formatted/deskaas', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of dedicated discover offer server catalog
   */
  public get(path: '/order/catalog/formatted/discover', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of IP addresses catalog
   */
  public get(path: '/order/catalog/formatted/ip', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of CloudLinux licenses catalog
   */
  public get(path: '/order/catalog/formatted/licenseCloudLinux', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of cPanel licenses catalog
   */
  public get(path: '/order/catalog/formatted/licensecPanel', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Directadmin licenses offers catalog
   */
  public get(path: '/order/catalog/formatted/licenseDirectadmin', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Plesk licenses catalog
   */
  public get(path: '/order/catalog/formatted/licensePlesk', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of SqlServer licenses catalog
   */
  public get(path: '/order/catalog/formatted/licenseSqlServer', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Virtuozzo licenses catalog
   */
  public get(path: '/order/catalog/formatted/licenseVirtuozzo', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Windows licenses catalog
   */
  public get(path: '/order/catalog/formatted/licenseWindows', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Worklight licenses catalog
   */
  public get(path: '/order/catalog/formatted/licenseWorklight', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Logs Data Platform catalog
   */
  public get(path: '/order/catalog/formatted/logs', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud CDI catalog
   */
  public get(path: '/order/catalog/formatted/privateCloudCDI', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud Dedicated Cloud catalog
   */
  public get(path: '/order/catalog/formatted/privateCloudDC', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud Reseller catalog
   */
  public get(path: '/order/catalog/formatted/privateCloudReseller', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.pcc.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud Reseller Enterprise catalog
   */
  public get(path: '/order/catalog/formatted/privateCloudResellerEnterprise', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.pcc.Catalog>;
  /**
   * Missing description
   * Retrieve information of Private Cloud SDDC catalog
   */
  public get(path: '/order/catalog/formatted/privateCloudSDDC', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.privateCloud.Catalog>;
  /**
   * Missing description
   * Retrieve information of Reseller catalog
   */
  public get(path: '/order/catalog/formatted/reseller', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve information of VPS catalog
   */
  public get(path: '/order/catalog/formatted/vps', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.Catalog>;
  /**
   * Missing description
   * Retrieve bare-metal servers catalog
   */
  public get(path: '/order/catalog/public/baremetalServers', params: {ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.catalog.publik.DedicatedServerCatalog>;
  /**
   * Operations about the CDNANYCAST service
   * List available services
   */
  public get(path: '/order/cdn/dedicated'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/cdn/dedicated/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order Backend Option
   * Get allowed durations for 'backend' option
   */
  public get(path: '/order/cdn/dedicated/{serviceName}/backend', params: {serviceName: string, backend: number}): Promise<string[]>;
  /**
   * Order Backend Option
   * Get prices and contracts information
   */
  public get(path: '/order/cdn/dedicated/{serviceName}/backend/{duration}', params: {serviceName: string, duration: string, backend: number}): Promise<order.Order>;
  /**
   * Upgrade cacheRule Option
   * Get allowed durations for 'cacheRule' option
   */
  public get(path: '/order/cdn/dedicated/{serviceName}/cacheRule', params: {serviceName: string, cacheRule: OVH.cdnanycast.OrderCacheRuleEnum}): Promise<string[]>;
  /**
   * Upgrade cacheRule Option
   * Get prices and contracts information
   */
  public get(path: '/order/cdn/dedicated/{serviceName}/cacheRule/{duration}', params: {serviceName: string, duration: string, cacheRule: OVH.cdnanycast.OrderCacheRuleEnum}): Promise<order.Order>;
  /**
   * Order Quota
   * Get allowed durations for 'quota' option
   */
  public get(path: '/order/cdn/dedicated/{serviceName}/quota', params: {serviceName: string, quota: OVH.cdnanycast.OrderQuotaEnum}): Promise<string[]>;
  /**
   * Order Quota
   * Get prices and contracts information
   */
  public get(path: '/order/cdn/dedicated/{serviceName}/quota/{duration}', params: {serviceName: string, duration: string, quota: OVH.cdnanycast.OrderQuotaEnum}): Promise<order.Order>;
  /**
   * Order a New Dedicated CDN Service
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/cdn/dedicated/new'): Promise<string[]>;
  /**
   * Order a New Dedicated CDN Service
   * Get prices and contracts information
   */
  public get(path: '/order/cdn/dedicated/new/{duration}', params: {duration: string}): Promise<order.Order>;
  /**
   * Operations about the CDNSTATIC service
   * List available services
   */
  public get(path: '/order/cdn/webstorage'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/cdn/webstorage/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Upgrade Storage Option
   * Get allowed durations for 'storage' option
   */
  public get(path: '/order/cdn/webstorage/{serviceName}/storage', params: {serviceName: string, storage: OVH.cdn.webstorage.OrderStorageEnum}): Promise<string[]>;
  /**
   * Upgrade Storage Option
   * Get prices and contracts information
   */
  public get(path: '/order/cdn/webstorage/{serviceName}/storage/{duration}', params: {serviceName: string, duration: string, storage: OVH.cdn.webstorage.OrderStorageEnum}): Promise<order.Order>;
  /**
   * Order Traffic
   * Get prices and contracts information
   */
  public get(path: '/order/cdn/webstorage/{serviceName}/traffic', params: {serviceName: string, bandwidth: OVH.cdn.webstorage.OrderTrafficEnum}): Promise<order.Order>;
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  public get(path: '/order/cloud/project'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/cloud/project/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order credit usable on your Cloud project
   * Get prices and contracts information
   */
  public get(path: '/order/cloud/project/{serviceName}/credit', params: {serviceName: string, amount: number}): Promise<order.Order>;
  /**
   * Order failover ip on your Cloud project
   * Get prices and contracts information
   */
  public get(path: '/order/cloud/project/{serviceName}/ip', params: {serviceName: string, country?: OVH.vps.ip.GeolocationEnum, instanceId: string, quantity: number}): Promise<order.Order>;
  /**
   * Operations about the HOUSING service
   * List available services
   */
  public get(path: '/order/dedicated/housing'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/dedicated/housing/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order an APC for this bay
   * Get allowed durations for 'APC' option
   */
  public get(path: '/order/dedicated/housing/{serviceName}/APC', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order an APC for this bay
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/housing/{serviceName}/APC/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order a new Nas HA
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/dedicated/nasha/new', params: {datacenter: OVH.dedicated.NasHAZoneEnum, model: OVH.dedicated.NasHAOfferEnum}): Promise<string[]>;
  /**
   * Order a new Nas HA
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/nasha/new/{duration}', params: {duration: string, datacenter: OVH.dedicated.NasHAZoneEnum, model: OVH.dedicated.NasHAOfferEnum}): Promise<order.Order>;
  /**
   * Operations about the DEDICATED service
   * List available services
   */
  public get(path: '/order/dedicated/server'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/dedicated/server/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order a backup storage for this server
   * Get allowed durations for 'backupStorage' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/backupStorage', params: {serviceName: string, capacity: OVH.dedicated.server.BackupStorageCapacityEnum}): Promise<string[]>;
  /**
   * Order a backup storage for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/backupStorage/{duration}', params: {serviceName: string, duration: string, capacity: OVH.dedicated.server.BackupStorageCapacityEnum}): Promise<order.Order>;
  /**
   * Order bandwidth for this server
   * Get allowed durations for 'bandwidth' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/bandwidth', params: {serviceName: string, bandwidth: OVH.dedicated.server.BandwidthOrderEnum, type: OVH.dedicated.server.BandwidthOrderTypeEnum}): Promise<string[]>;
  /**
   * Order bandwidth for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/bandwidth/{duration}', params: {serviceName: string, duration: string, bandwidth: OVH.dedicated.server.BandwidthOrderEnum, type: OVH.dedicated.server.BandwidthOrderTypeEnum}): Promise<order.Order>;
  /**
   * Order vRack bandwidth for this server
   * Get allowed durations for 'bandwidthvRack' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/bandwidthvRack', params: {serviceName: string, bandwidth: OVH.dedicated.server.BandwidthvRackOrderEnum}): Promise<string[]>;
  /**
   * Order vRack bandwidth for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}', params: {serviceName: string, duration: string, bandwidth: OVH.dedicated.server.BandwidthvRackOrderEnum}): Promise<order.Order>;
  /**
   * Order a failover IP for this server
   * Get allowed durations for 'failoverIP' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/failoverIP', params: {serviceName: string, country: OVH.dedicated.server.IpCountryEnum}): Promise<string[]>;
  /**
   * Order a failover IP for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/failoverIP/{duration}', params: {serviceName: string, duration: string, country: OVH.dedicated.server.IpCountryEnum}): Promise<order.Order>;
  /**
   * Order a feature for this server
   * Get allowed durations for 'feature' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/feature', params: {serviceName: string, feature: OVH.dedicated.server.OrderableSysFeatureEnum}): Promise<string[]>;
  /**
   * Order a feature for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/feature/{duration}', params: {serviceName: string, duration: string, feature: OVH.dedicated.server.OrderableSysFeatureEnum}): Promise<order.Order>;
  /**
   * order a Firewall for this server
   * Get allowed durations for 'firewall' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/firewall', params: {serviceName: string, firewallModel: OVH.dedicated.server.FirewallModelEnum}): Promise<string[]>;
  /**
   * order a Firewall for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/firewall/{duration}', params: {serviceName: string, duration: string, firewallModel: OVH.dedicated.server.FirewallModelEnum}): Promise<order.Order>;
  /**
   * Order IP for this server
   * Get allowed durations for 'ip' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/ip', params: {serviceName: string, blockSize: OVH.dedicated.server.IpBlockSizeEnum, country?: OVH.dedicated.server.IpCountryEnum, organisationId?: string, type: OVH.dedicated.server.IpTypeOrderableEnum}): Promise<string[]>;
  /**
   * Order IP for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/ip/{duration}', params: {serviceName: string, duration: string, blockSize: OVH.dedicated.server.IpBlockSizeEnum, country?: OVH.dedicated.server.IpCountryEnum, organisationId?: string, type: OVH.dedicated.server.IpTypeOrderableEnum}): Promise<order.Order>;
  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
   * Get allowed durations for 'ipMigration' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/ipMigration', params: {serviceName: string, ip: string, token: string}): Promise<string[]>;
  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/ipMigration/{duration}', params: {serviceName: string, duration: string, ip: string, token: string}): Promise<order.Order>;
  /**
   * Order a kvm for this server
   * Get allowed durations for 'kvm' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/kvm', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order a kvm for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/kvm/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order a kvmip express for this server
   * Get allowed durations for 'kvmExpress' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/kvmExpress', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order a kvmip express for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/kvmExpress/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order professional use option
   * Get allowed durations for 'professionalUse' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/professionalUse', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order professional use option
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/professionalUse/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order a static IP for this server
   * Get allowed durations for 'staticIP' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/staticIP', params: {serviceName: string, country: OVH.dedicated.server.IpStaticCountryEnum}): Promise<string[]>;
  /**
   * Order a static IP for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/staticIP/{duration}', params: {serviceName: string, duration: string, country: OVH.dedicated.server.IpStaticCountryEnum}): Promise<order.Order>;
  /**
   * Order additionall traffic for this server
   * Get allowed durations for 'traffic' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/traffic', params: {serviceName: string, traffic: OVH.dedicated.server.TrafficOrderEnum}): Promise<string[]>;
  /**
   * Order additionall traffic for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/traffic/{duration}', params: {serviceName: string, duration: string, traffic: OVH.dedicated.server.TrafficOrderEnum}): Promise<order.Order>;
  /**
   * Order an USB key for this server
   * Get allowed durations for 'usbKey' option
   */
  public get(path: '/order/dedicated/server/{serviceName}/usbKey', params: {serviceName: string, capacity: OVH.dedicated.server.UsbKeyCapacityEnum}): Promise<string[]>;
  /**
   * Order an USB key for this server
   * Get prices and contracts information
   */
  public get(path: '/order/dedicated/server/{serviceName}/usbKey/{duration}', params: {serviceName: string, duration: string, capacity: OVH.dedicated.server.UsbKeyCapacityEnum}): Promise<order.Order>;
  /**
   * Operations about the PCC service
   * List available services
   */
  public get(path: '/order/dedicatedCloud'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/dedicatedCloud/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order additional bandwidth in your Private Cloud
   * Get allowed durations for 'additionalBandwidth' option
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth', params: {serviceName: string, bandwidth: OVH.dedicatedCloud.AdditionalBandwidthEnum}): Promise<string[]>;
  /**
   * Order additional bandwidth in your Private Cloud
   * Get prices and contracts information
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}', params: {serviceName: string, duration: string, bandwidth: OVH.dedicatedCloud.AdditionalBandwidthEnum}): Promise<order.Order>;
  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
   * Get allowed durations for 'filer' option
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/filer', params: {serviceName: string, datacenterId?: number, name: string, quantity?: number}): Promise<string[]>;
  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
   * Get prices and contracts information
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/filer/{duration}', params: {serviceName: string, duration: string, datacenterId?: number, name: string, quantity?: number}): Promise<order.Order>;
  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
   * Get allowed durations for 'host' option
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/host', params: {serviceName: string, datacenterId: number, name: string, quantity?: number}): Promise<string[]>;
  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
   * Get prices and contracts information
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/host/{duration}', params: {serviceName: string, duration: string, datacenterId: number, name: string, quantity?: number}): Promise<order.Order>;
  /**
   * Order an IP block for your Private Cloud
   * Get allowed durations for 'ip' option
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/ip', params: {serviceName: string, country: OVH.dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: OVH.dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<string[]>;
  /**
   * Order an IP block for your Private Cloud
   * Get prices and contracts information
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/ip/{duration}', params: {serviceName: string, duration: string, country: OVH.dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: OVH.dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<order.Order>;
  /**
   * Enable windows templates (SPLA) in your Private Cloud
   * Get prices and contracts information
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/spla', params: {serviceName: string}): Promise<order.Order>;
  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
   * Get allowed durations for 'upgradeRessource' option
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource', params: {serviceName: string, upgradedRessourceId?: number, upgradedRessourceType: OVH.dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: OVH.dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<string[]>;
  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
   * Get prices and contracts information
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}', params: {serviceName: string, duration: string, upgradedRessourceId?: number, upgradedRessourceType: OVH.dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: OVH.dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<order.Order>;
  /**
   * Order VDI option in a given Datacenter
   * Get prices and contracts information
   */
  public get(path: '/order/dedicatedCloud/{serviceName}/vdi', params: {serviceName: string, datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string}): Promise<order.Order>;
  /**
   * Operations about the HOSTING service
   * List available services
   */
  public get(path: '/order/domain/zone'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/domain/zone/{zoneName}', params: {zoneName: string}): Promise<string[]>;
  /**
   * Order Anycast
   * Get allowed durations for 'dnsAnycast' option
   */
  public get(path: '/order/domain/zone/{zoneName}/dnsAnycast', params: {zoneName: string}): Promise<string[]>;
  /**
   * Order Anycast
   * Get prices and contracts information
   */
  public get(path: '/order/domain/zone/{zoneName}/dnsAnycast/{duration}', params: {zoneName: string, duration: string}): Promise<order.Order>;
  /**
   * Order a new DNS zone
   * Get prices and contracts information
   */
  public get(path: '/order/domain/zone/new', params: {minimized?: boolean, zoneName: string}): Promise<order.Order>;
  /**
   * Operations about the MX service
   * List available services
   */
  public get(path: '/order/email/domain'): Promise<string[]>;
  /**
   * Order a new mx plan
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/email/domain/new', params: {domain: string, offer: OVH.email.domain.OfferEnum}): Promise<string[]>;
  /**
   * Order a new mx plan
   * Get prices and contracts information
   */
  public get(path: '/order/email/domain/new/{duration}', params: {duration: string, domain: string, offer: OVH.email.domain.OfferEnum}): Promise<order.Order>;
  /**
   * Operations about the MSSERVICES service
   * List available services
   */
  public get(path: '/order/email/exchange'): Promise<string[]>;
  /**
   * Operations about the EXCHANGE service
   * List available services
   */
  public get(path: '/order/email/exchange/{organizationName}/service', params: {organizationName: string}): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}', params: {organizationName: string, exchangeService: string}): Promise<string[]>;
  /**
   * Create an order for an exchange account
   * Get allowed durations for 'account' option
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account', params: {organizationName: string, exchangeService: string, licence: OVH.email.exchange.OvhLicenceEnum, number: number, storageQuota?: OVH.email.exchange.accountQuotaEnum}): Promise<string[]>;
  /**
   * Create an order for an exchange account
   * Get prices and contracts information
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}', params: {organizationName: string, exchangeService: string, duration: string, licence: OVH.email.exchange.OvhLicenceEnum, number: number, storageQuota?: OVH.email.exchange.accountQuotaEnum}): Promise<order.Order>;
  /**
   * Create an order to upgrade your hosted account storage
   * Get allowed durations for 'accountUpgrade' option
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade', params: {organizationName: string, exchangeService: string, newQuota: OVH.email.exchange.accountQuotaEnum, primaryEmailAddress: string}): Promise<string[]>;
  /**
   * Create an order to upgrade your hosted account storage
   * Get prices and contracts information
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}', params: {organizationName: string, exchangeService: string, duration: string, newQuota: OVH.email.exchange.accountQuotaEnum, primaryEmailAddress: string}): Promise<order.Order>;
  /**
   * Create an order for a additional 50GB of space (Exchange 2010 reseller only)
   * Get prices and contracts information
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace', params: {organizationName: string, exchangeService: string}): Promise<order.Order>;
  /**
   * Create an order for a outlook licence.
   * Get allowed durations for 'outlook' option
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook', params: {organizationName: string, exchangeService: string, licence: OVH.email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<string[]>;
  /**
   * Create an order for a outlook licence.
   * Get prices and contracts information
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}', params: {organizationName: string, exchangeService: string, duration: string, licence: OVH.email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<order.Order>;
  /**
   * Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016)
   * Get prices and contracts information
   */
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade', params: {organizationName: string, exchangeService: string}): Promise<order.Order>;
  /**
   * Operations about the PROEMAIL service
   * List available services
   */
  public get(path: '/order/email/pro'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/email/pro/{service}', params: {service: string}): Promise<string[]>;
  /**
   * Create an order for a pro account
   * Get allowed durations for 'account' option
   */
  public get(path: '/order/email/pro/{service}/account', params: {service: string, number: number}): Promise<string[]>;
  /**
   * Create an order for a pro account
   * Get prices and contracts information
   */
  public get(path: '/order/email/pro/{service}/account/{duration}', params: {service: string, duration: string, number: number}): Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/order/freefax'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/freefax/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Convert the freefax service to a /telephony voicefax service
   * Get prices and contracts information
   */
  public get(path: '/order/freefax/{serviceName}/convertToVoicefax', params: {serviceName: string, billingAccount: string}): Promise<order.Order>;
  /**
   * Credit freefax account pages
   * Get prices and contracts information
   */
  public get(path: '/order/freefax/new', params: {quantity: OVH.freefax.QuantityEnum}): Promise<order.Order>;
  /**
   * Operations about the SQLPRIVE service
   * List available services
   */
  public get(path: '/order/hosting/privateDatabase'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/hosting/privateDatabase/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Create an order for change ram size on your private database
   * Get allowed durations for 'ram' option
   */
  public get(path: '/order/hosting/privateDatabase/{serviceName}/ram', params: {serviceName: string, ram: OVH.hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<string[]>;
  /**
   * Create an order for change ram size on your private database
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/privateDatabase/{serviceName}/ram/{duration}', params: {serviceName: string, duration: string, ram: OVH.hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<order.Order>;
  /**
   * Order new private database
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/hosting/privateDatabase/new', params: {datacenter?: OVH.hosting.PrivateDatabase.DatacenterEnum, offer?: OVH.hosting.PrivateDatabase.OfferEnum, ram: OVH.hosting.PrivateDatabase.AvailableRamSizeEnum, version: OVH.hosting.PrivateDatabase.OrderableVersionEnum}): Promise<string[]>;
  /**
   * Order new private database
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/privateDatabase/new/{duration}', params: {duration: string, datacenter?: OVH.hosting.PrivateDatabase.DatacenterEnum, offer?: OVH.hosting.PrivateDatabase.OfferEnum, ram: OVH.hosting.PrivateDatabase.AvailableRamSizeEnum, version: OVH.hosting.PrivateDatabase.OrderableVersionEnum}): Promise<order.Order>;
  /**
   * Operations about the HOSTING service
   * List available services
   */
  public get(path: '/order/hosting/web'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/hosting/web/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order additional bandwidth
   * Get allowed durations for 'bandwidth' option
   */
  public get(path: '/order/hosting/web/{serviceName}/bandwidth', params: {serviceName: string, traffic: OVH.hosting.web.BandwidthOfferEnum}): Promise<string[]>;
  /**
   * Order additional bandwidth
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/web/{serviceName}/bandwidth/{duration}', params: {serviceName: string, duration: string, traffic: OVH.hosting.web.BandwidthOfferEnum}): Promise<order.Order>;
  /**
   * Create an order for cdn option
   * Get allowed durations for 'cdn' option
   */
  public get(path: '/order/hosting/web/{serviceName}/cdn', params: {serviceName: string, offer: OVH.hosting.web.CdnOfferEnum}): Promise<string[]>;
  /**
   * Create an order for cdn option
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/web/{serviceName}/cdn/{duration}', params: {serviceName: string, duration: string, offer: OVH.hosting.web.CdnOfferEnum}): Promise<order.Order>;
  /**
   * Create an order for change the hosting main domain
   * Get allowed durations for 'changeMainDomain' option
   */
  public get(path: '/order/hosting/web/{serviceName}/changeMainDomain', params: {serviceName: string, domain: string, mxplan: OVH.hosting.web.order.MxPlanEnum}): Promise<string[]>;
  /**
   * Create an order for change the hosting main domain
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/web/{serviceName}/changeMainDomain/{duration}', params: {serviceName: string, duration: string, domain: string, mxplan: OVH.hosting.web.order.MxPlanEnum}): Promise<order.Order>;
  /**
   * Create an order for extra sql perso
   * Get allowed durations for 'extraSqlPerso' option
   */
  public get(path: '/order/hosting/web/{serviceName}/extraSqlPerso', params: {serviceName: string, offer: OVH.hosting.web.database.SqlPersoOfferEnum}): Promise<string[]>;
  /**
   * Create an order for extra sql perso
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/web/{serviceName}/extraSqlPerso/{duration}', params: {serviceName: string, duration: string, offer: OVH.hosting.web.database.SqlPersoOfferEnum}): Promise<order.Order>;
  /**
   * Create an order for hosted ssl option
   * Get allowed durations for 'ssl' option
   */
  public get(path: '/order/hosting/web/{serviceName}/ssl', params: {serviceName: string}): Promise<string[]>;
  /**
   * Create an order for hosted ssl option
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/web/{serviceName}/ssl/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Create an order for upgrade your hosting account
   * Get allowed durations for 'upgrade' option
   */
  public get(path: '/order/hosting/web/{serviceName}/upgrade', params: {serviceName: string, offer: OVH.hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}): Promise<string[]>;
  /**
   * Create an order for upgrade your hosting account
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/web/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, offer: OVH.hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
  /**
   * Order a new hosting account
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/hosting/web/new', params: {dnsZone?: OVH.hosting.web.DnsZoneEnum, domain: string, module?: OVH.hosting.web.module.OrderableNameEnum, offer: OVH.hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<string[]>;
  /**
   * Order a new hosting account
   * Get prices and contracts information
   */
  public get(path: '/order/hosting/web/new/{duration}', params: {duration: string, dnsZone?: OVH.hosting.web.DnsZoneEnum, domain: string, module?: OVH.hosting.web.module.OrderableNameEnum, offer: OVH.hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
  /**
   * Order a HPC Spot Account
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/hpcspot/new'): Promise<string[]>;
  /**
   * Order a HPC Spot Account
   * Get prices and contracts information
   */
  public get(path: '/order/hpcspot/new/{duration}', params: {duration: string}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/cloudLinux/new', params: {ip: string, version: OVH.license.CloudLinuxVersionEnum}): Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/cloudLinux/new/{duration}', params: {duration: string, ip: string, version: OVH.license.CloudLinuxVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/cpanel/new', params: {ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableCpanelVersionEnum}): Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/cpanel/new/{duration}', params: {duration: string, ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableCpanelVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/directadmin/new', params: {ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableDirectAdminVersionEnum}): Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/directadmin/new/{duration}', params: {duration: string, ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableDirectAdminVersionEnum}): Promise<order.Order>;
  /**
   * Create an order for an new office tenant
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/office/new', params: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<string[]>;
  /**
   * Create an order for an new office tenant
   * Get prices and contracts information
   */
  public get(path: '/order/license/office/new/{duration}', params: {duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/order/license/plesk'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/license/plesk/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  public get(path: '/order/license/plesk/{serviceName}/upgrade', params: {serviceName: string, antispam?: OVH.license.OrderableAntispamEnum, antivirus?: OVH.license.OrderableAntivirusEnum, applicationSet?: OVH.license.PleskApplicationSetEnum, domainNumber?: OVH.license.OrderablePleskDomainNumberEnum, languagePackNumber?: OVH.license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: OVH.license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/plesk/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, antispam?: OVH.license.OrderableAntispamEnum, antivirus?: OVH.license.OrderableAntivirusEnum, applicationSet?: OVH.license.PleskApplicationSetEnum, domainNumber?: OVH.license.OrderablePleskDomainNumberEnum, languagePackNumber?: OVH.license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: OVH.license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/plesk/new', params: {antivirus?: OVH.license.OrderableAntivirusEnum, applicationSet?: OVH.license.PleskApplicationSetEnum, domainNumber?: OVH.license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: OVH.license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/plesk/new/{duration}', params: {duration: string, antivirus?: OVH.license.OrderableAntivirusEnum, applicationSet?: OVH.license.PleskApplicationSetEnum, domainNumber?: OVH.license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: OVH.license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/order/license/sqlserver'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/license/sqlserver/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  public get(path: '/order/license/sqlserver/{serviceName}/upgrade', params: {serviceName: string, version: OVH.license.SqlServerVersionEnum}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/sqlserver/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, version: OVH.license.SqlServerVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/sqlserver/new', params: {ip: string, version: OVH.license.SqlServerVersionEnum}): Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/sqlserver/new/{duration}', params: {duration: string, ip: string, version: OVH.license.SqlServerVersionEnum}): Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/order/license/virtuozzo'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/license/virtuozzo/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  public get(path: '/order/license/virtuozzo/{serviceName}/upgrade', params: {serviceName: string, containerNumber: OVH.license.OrderableVirtuozzoContainerNumberEnum}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/virtuozzo/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, containerNumber: OVH.license.OrderableVirtuozzoContainerNumberEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/virtuozzo/new', params: {containerNumber: OVH.license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableVirtuozzoVersionEnum}): Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/virtuozzo/new/{duration}', params: {duration: string, containerNumber: OVH.license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableVirtuozzoVersionEnum}): Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/order/license/windows'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/license/windows/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  public get(path: '/order/license/windows/{serviceName}/upgrade', params: {serviceName: string, sqlVersion?: OVH.license.WindowsSqlVersionEnum, version?: OVH.license.WindowsOsVersionEnum}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/windows/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, sqlVersion?: OVH.license.WindowsSqlVersionEnum, version?: OVH.license.WindowsOsVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/windows/new', params: {ip: string, serviceType?: OVH.license.LicenseTypeEnum, sqlVersion?: OVH.license.WindowsSqlVersionEnum, version: OVH.license.WindowsOsVersionEnum}): Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/windows/new/{duration}', params: {duration: string, ip: string, serviceType?: OVH.license.LicenseTypeEnum, sqlVersion?: OVH.license.WindowsSqlVersionEnum, version: OVH.license.WindowsOsVersionEnum}): Promise<order.Order>;
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/order/license/worklight'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/license/worklight/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get allowed durations for 'upgrade' option
   */
  public get(path: '/order/license/worklight/{serviceName}/upgrade', params: {serviceName: string, version: OVH.license.WorkLightVersionEnum}): Promise<string[]>;
  /**
   * Upgrade this license with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/worklight/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, version: OVH.license.WorkLightVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/license/worklight/new', params: {ip: string, lessThan1000Users: boolean, version: OVH.license.WorkLightVersionEnum}): Promise<string[]>;
  /**
   * Order a new license on a given Ip with some given options
   * Get prices and contracts information
   */
  public get(path: '/order/license/worklight/new/{duration}', params: {duration: string, ip: string, lessThan1000Users: boolean, version: OVH.license.WorkLightVersionEnum}): Promise<order.Order>;
  /**
   * Operations about the OVERTHEBOX service
   * List available services
   */
  public get(path: '/order/overTheBox'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/overTheBox/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Create an order to upgrade your overTheBox service
   * Get prices and contracts information
   */
  public get(path: '/order/overTheBox/{serviceName}/migrate', params: {serviceName: string, hardware: boolean, offer: string, shippingContactID?: string, shippingMethod?: OVH.overTheBox.ShippingMethodEnum, shippingRelayID?: number}): Promise<order.Order>;
  /**
   * Subscribe to overTheBox service
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/overTheBox/new', params: {deviceId?: string, offer: string, voucher?: string}): Promise<string[]>;
  /**
   * Subscribe to overTheBox service
   * Get prices and contracts information
   */
  public get(path: '/order/overTheBox/new/{duration}', params: {duration: string, deviceId?: string, offer: string, voucher?: string}): Promise<order.Order>;
  /**
   * Order router vpn
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/router/new', params: {vrack: string}): Promise<string[]>;
  /**
   * Order router vpn
   * Get prices and contracts information
   */
  public get(path: '/order/router/new/{duration}', params: {duration: string, vrack: string}): Promise<order.Order>;
  /**
   * Create an order for a new office tenant
   * Get allowed durations for 'new' option
   */
  public get(path: '/order/saas/csp2/new', params: {giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<string[]>;
  /**
   * Create an order for a new office tenant
   * Get prices and contracts information
   */
  public get(path: '/order/saas/csp2/new/{duration}', params: {duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/order/sms'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/sms/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order credits on an existing SMS account
   * Get prices and contracts information
   */
  public get(path: '/order/sms/{serviceName}/credits', params: {serviceName: string, quantity: number}): Promise<order.Order>;
  /**
   * Create and credit a new SMS Account
   * Get prices and contracts information
   */
  public get(path: '/order/sms/new', params: {quantity: number}): Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/order/telephony'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/telephony/{billingAccount}', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Purchase new accessories
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/{billingAccount}/accessories', params: {billingAccount: string, accessories: string[], mondialRelayId?: string, retractation: boolean, shippingContactId: number}): Promise<order.Order>;
  /**
   * Purchase a new line offer
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/{billingAccount}/line', params: {billingAccount: string, brand?: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], mondialRelayId?: string, offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: OVH.telephony.LineTypeEnum[], zones?: string[]}): Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/{billingAccount}/numberGeographic', params: {billingAccount: string, ape?: string, city: string, country: OVH.telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: OVH.nichandle.LegalFormEnum, name?: string, offer: OVH.telephony.NumberOffer, organisation?: string, phone?: string, pool?: OVH.telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string, zone: string}): Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/{billingAccount}/numberNogeographic', params: {billingAccount: string, ape?: string, city?: string, country: OVH.telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: OVH.nichandle.LegalFormEnum, name?: string, offer: OVH.telephony.NumberOffer, organisation?: string, phone?: string, pool?: OVH.telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string}): Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/{billingAccount}/numberSpecial', params: {billingAccount: string, ape: string, city?: string, country: OVH.telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: OVH.nichandle.LegalFormEnum, name?: string, organisation?: string, phone?: string, pool?: OVH.telephony.NumberPoolEnum, range: string, retractation: boolean, siret: string, socialNomination: string, specificNumber?: string, streetName?: string, streetNumber?: string, typology: OVH.telephony.NumberSpecialTypologyEnum, zip?: string}): Promise<order.Order>;
  /**
   * Order a new portability
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/{billingAccount}/portability', params: {billingAccount: string, building?: string, callNumber: string, city: string, contactName?: string, contactNumber?: string, country: OVH.telephony.portability.CountriesAvailable, desireDate?: string, displayUniversalDirectory: boolean, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, firstName: string, floor?: number, lineToRedirectAliasTo?: string, listNumbers?: string, mobilePhone?: string, name: string, offer: OVH.telephony.portability.OfferType, rio?: string, siret?: string, socialReason: OVH.telephony.portability.SocialReason, specialNumberCategory?: OVH.telephony.portability.SpecialNumberCategoryEnum, stair?: number, streetName: string, streetNumber: number, streetNumberExtra?: string, streetType?: string, type: OVH.telephony.portability.NumberType, zip: string}): Promise<order.Order>;
  /**
   * Credit security deposit
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/{billingAccount}/securityDeposit', params: {billingAccount: string, amount: OVH.telephony.SecurityDepositAmountsEnum}): Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/order/telephony/lines'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/telephony/lines/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Add extra simultaneous lines for a specifical line
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/lines/{serviceName}/addSimultaneousLines', params: {serviceName: string, billingAccount: string, quantity: number}): Promise<order.Order>;
  /**
   * Order a phone for this specific line
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/lines/{serviceName}/hardware', params: {serviceName: string, hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}): Promise<order.Order>;
  /**
   * Update extra simultaneous channels for a specifical service to the requested amount
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/lines/{serviceName}/updateSimultaneousChannels', params: {serviceName: string, quantity: number}): Promise<order.Order>;
  /**
   * Purchase a new billing account
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/new'): Promise<order.Order>;
  /**
   * Purchase spare phone
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/spare/new', params: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}): Promise<order.Order>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/order/telephony/trunks'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/telephony/trunks/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Add extra simultaneous lines for a specifical line
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/trunks/{serviceName}/addSimultaneousLines', params: {serviceName: string, billingAccount: string, quantity: number}): Promise<order.Order>;
  /**
   * Order a phone for this specific line
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/trunks/{serviceName}/hardware', params: {serviceName: string, hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}): Promise<order.Order>;
  /**
   * Update extra simultaneous channels for a specifical service to the requested amount
   * Get prices and contracts information
   */
  public get(path: '/order/telephony/trunks/{serviceName}/updateSimultaneousChannels', params: {serviceName: string, quantity: number}): Promise<order.Order>;
  /**
   * Operations about the DEDICATED-OPTION service
   * List available services
   */
  public get(path: '/order/upgrade/baremetalPrivateBandwidth'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the DEDICATED-OPTION service
   * List available services
   */
  public get(path: '/order/upgrade/baremetalPublicBandwidth'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the CEPH service
   * List available services
   */
  public get(path: '/order/upgrade/cephaas'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/cephaas
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/cephaas/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/cephaas/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/cephaas/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the IPLB service
   * List available services
   */
  public get(path: '/order/upgrade/ipLoadbalancing'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/ipLoadbalancing
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/ipLoadbalancing/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/ipLoadbalancing/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the DBAAS-LOGS service
   * List available services
   */
  public get(path: '/order/upgrade/logs'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/logs
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/logs/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/logs/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/logs/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the METRICS service
   * List available services
   */
  public get(path: '/order/upgrade/metrics'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/metrics
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/metrics/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/metrics/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/metrics/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the EXCHANGE service
   * List available services
   */
  public get(path: '/order/upgrade/microsoftExchange'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/microsoftExchange
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/microsoftExchange/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/microsoftExchange/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/microsoftExchange/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the PCC service
   * List available services
   */
  public get(path: '/order/upgrade/privateCloud'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/privateCloud
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/privateCloud/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/privateCloud/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/privateCloud/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the SSLGATEWAY service
   * List available services
   */
  public get(path: '/order/upgrade/sslGateway'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/sslGateway
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/sslGateway/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/sslGateway/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/sslGateway/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the VPS service
   * List available services
   */
  public get(path: '/order/upgrade/vps'): Promise<string[]>;
  /**
   * Listing offers /order/upgrade/vps
   * Retrieve available offers to upgrade your service to
   */
  public get(path: '/order/upgrade/vps/{serviceName}', params: {serviceName: string}): Promise<order.cart.GenericProductDefinition[]>;
  /**
   * Listing offers /order/upgrade/vps/#serviceName#
   * Get a provisional order for the selected upgrade of your service
   */
  public get(path: '/order/upgrade/vps/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Operations about the VEEAMCC service
   * List available services
   */
  public get(path: '/order/veeamCloudConnect'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/veeamCloudConnect/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order an upgrade upon your Veeam Cloud Connect account
   * Get allowed durations for 'upgrade' option
   */
  public get(path: '/order/veeamCloudConnect/{serviceName}/upgrade', params: {serviceName: string, offer: OVH.veeamCloudConnect.Offer}): Promise<string[]>;
  /**
   * Order an upgrade upon your Veeam Cloud Connect account
   * Get prices and contracts information
   */
  public get(path: '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, offer: OVH.veeamCloudConnect.Offer}): Promise<order.Order>;
  /**
   * Operations about the VPS service
   * List available services
   */
  public get(path: '/order/vps'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/vps/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order additional disk
   * Get allowed durations for 'additionalDisk' option
   */
  public get(path: '/order/vps/{serviceName}/additionalDisk', params: {serviceName: string, additionalDiskSize: OVH.vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<string[]>;
  /**
   * Order additional disk
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/additionalDisk/{duration}', params: {serviceName: string, duration: string, additionalDiskSize: OVH.vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<order.Order>;
  /**
   * Order Automated Backup Option (vps Cloud only)
   * Get allowed durations for 'automatedBackup' option
   */
  public get(path: '/order/vps/{serviceName}/automatedBackup', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order Automated Backup Option (vps Cloud only)
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/automatedBackup/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Create an order for a cPanel license
   * Get allowed durations for 'cpanel' option
   */
  public get(path: '/order/vps/{serviceName}/cpanel', params: {serviceName: string}): Promise<string[]>;
  /**
   * Create an order for a cPanel license
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/cpanel/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order FtpBackup Option
   * Get allowed durations for 'ftpbackup' option
   */
  public get(path: '/order/vps/{serviceName}/ftpbackup', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order FtpBackup Option
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/ftpbackup/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order Additional IP
   * Get allowed durations for 'ip' option
   */
  public get(path: '/order/vps/{serviceName}/ip', params: {serviceName: string, country?: OVH.vps.ip.GeolocationEnum, number: number}): Promise<string[]>;
  /**
   * Order Additional IP
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/ip/{duration}', params: {serviceName: string, duration: string, country?: OVH.vps.ip.GeolocationEnum, number: number}): Promise<order.Order>;
  /**
   * Create an order for a PLESK license
   * Get allowed durations for 'plesk' option
   */
  public get(path: '/order/vps/{serviceName}/plesk', params: {serviceName: string, domainNumber: OVH.vps.PleskLicenseDomainNumberEnum}): Promise<string[]>;
  /**
   * Create an order for a PLESK license
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/plesk/{duration}', params: {serviceName: string, duration: string, domainNumber: OVH.vps.PleskLicenseDomainNumberEnum}): Promise<order.Order>;
  /**
   * Order Snapshot Option
   * Get allowed durations for 'snapshot' option
   */
  public get(path: '/order/vps/{serviceName}/snapshot', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order Snapshot Option
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/snapshot/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order Upgrade
   * Get allowed durations for 'upgrade' option
   */
  public get(path: '/order/vps/{serviceName}/upgrade', params: {serviceName: string, model: string}): Promise<string[]>;
  /**
   * Order Upgrade
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, model: string}): Promise<order.Order>;
  /**
   * Order Veeam Option
   * Get allowed durations for 'veeam' option
   */
  public get(path: '/order/vps/{serviceName}/veeam', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order Veeam Option
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/veeam/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order Windows Option (2015 only)
   * Get allowed durations for 'windows' option
   */
  public get(path: '/order/vps/{serviceName}/windows', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order Windows Option (2015 only)
   * Get prices and contracts information
   */
  public get(path: '/order/vps/{serviceName}/windows/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Operations about the VRACK service
   * List available services
   */
  public get(path: '/order/vrack'): Promise<string[]>;
  /**
   * List available options for this service
   * Get allowed options
   */
  public get(path: '/order/vrack/{serviceName}', params: {serviceName: string}): Promise<string[]>;
  /**
   * Order new vrack
   * Get prices and contracts information
   */
  public get(path: '/order/vrack/new', params: {quantity?: number}): Promise<order.Order>;
  /**
   * Purchase spare modem
   * Get prices and contracts information
   */
  public get(path: '/order/xdsl/spare/new', params: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}): Promise<order.Order>;
  public get(path: PathsOrderGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Missing description
   * Modify information about a specific cart
   */
  public put(path: '/order/cart/{cartId}', params: {cartId: string, description?: string, expire?: string}): Promise<order.cart.Cart>;
  /**
   * Missing description
   * Update some values on a cart item
   */
  public put(path: '/order/cart/{cartId}/item/{itemId}', params: {cartId: string, itemId: string, duration?: string, quantity?: number}): Promise<order.cart.Item>;
  public put(path: PathsOrderPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Missing description
   * Create a new OVH order cart
   */
  public post(path: '/order/cart', params: {description?: string, expire?: string, ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.cart.Cart>;
  /**
   * Create a analytics project
   * Post a new analytics item in your cart
   */
  public post(path: '/order/cart/{cartId}/analytics', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * List all addons possible for a analytics project
   * Post a new analytics addon in your cart
   */
  public post(path: '/order/cart/{cartId}/analytics/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Assign a shopping cart to an loggedin client
   */
  public post(path: '/order/cart/{cartId}/assign', params: {cartId: string}): Promise<void>;
  /**
   * Missing description
   * Post a new baremetal server item in your cart
   */
  public post(path: '/order/cart/{cartId}/baremetalServers', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new baremetal server option in your cart
   */
  public post(path: '/order/cart/{cartId}/baremetalServers/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new CDN item in your cart
   */
  public post(path: '/order/cart/{cartId}/cdn', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new CDN option in your cart
   */
  public post(path: '/order/cart/{cartId}/cdn/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Ceph as a Service item in your cart
   */
  public post(path: '/order/cart/{cartId}/cephaas', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Ceph as a Service option in your cart
   */
  public post(path: '/order/cart/{cartId}/cephaas/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Validate your shopping and create order
   */
  public post(path: '/order/cart/{cartId}/checkout', params: {cartId: string, autoPayWithPreferredPaymentMethod?: boolean, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
  /**
   * Missing description
   * Post a new Public Cloud item in your cart
   */
  public post(path: '/order/cart/{cartId}/cloud', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Public Cloud option in your cart
   */
  public post(path: '/order/cart/{cartId}/cloud/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Cloud Web item in your cart
   */
  public post(path: '/order/cart/{cartId}/cloudweb', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Cloud Web option in your cart
   */
  public post(path: '/order/cart/{cartId}/cloudweb/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Add a new coupon to cart
   */
  public post(path: '/order/cart/{cartId}/coupon', params: {cartId: string, coupon: string}): Promise<string[]>;
  /**
   * Missing description
   * Post a new SaaS CSP2 offer item in your cart
   */
  public post(path: '/order/cart/{cartId}/csp2', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SaaS CSP2 option in your cart
   */
  public post(path: '/order/cart/{cartId}/csp2/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new timeseries offer item in your cart
   */
  public post(path: '/order/cart/{cartId}/dbaasTimeseries', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated server item in your cart
   */
  public post(path: '/order/cart/{cartId}/dedicated', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated server option in your cart
   */
  public post(path: '/order/cart/{cartId}/dedicated/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated labs server item in your cart
   */
  public post(path: '/order/cart/{cartId}/dedicatedLabs', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated labs server option in your cart
   */
  public post(path: '/order/cart/{cartId}/dedicatedLabs/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated server item in your cart
   */
  public post(path: '/order/cart/{cartId}/dedicatedReseller', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new dedicated server option in your cart
   */
  public post(path: '/order/cart/{cartId}/dedicatedReseller/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Desk as a service item in your cart
   */
  public post(path: '/order/cart/{cartId}/deskaas', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Dedicated Discover server item in your cart
   */
  public post(path: '/order/cart/{cartId}/discover', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Dedicated Discover server option in your cart
   */
  public post(path: '/order/cart/{cartId}/discover/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new DNS zone item in your cart
   */
  public post(path: '/order/cart/{cartId}/dns', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new domain in your cart
   */
  public post(path: '/order/cart/{cartId}/domain', params: {cartId: string, domain: string, duration?: string, offerId?: string, quantity?: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new domain name option in your cart
   */
  public post(path: '/order/cart/{cartId}/domain/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Domain Packs item (AllDom) in your cart
   */
  public post(path: '/order/cart/{cartId}/domainPacks', params: {cartId: string, domain: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new domain tranfer in your cart
   */
  public post(path: '/order/cart/{cartId}/domainTransfer', params: {cartId: string, domain: string, duration?: string, offerId?: string, quantity?: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new domain name transfer option in your cart
   */
  public post(path: '/order/cart/{cartId}/domainTransfer/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new EmailPro item in your cart
   */
  public post(path: '/order/cart/{cartId}/emailpro', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new EmailPro option in your cart
   */
  public post(path: '/order/cart/{cartId}/emailpro/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Exchange item in your cart
   */
  public post(path: '/order/cart/{cartId}/exchange', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Exchange option in your cart
   */
  public post(path: '/order/cart/{cartId}/exchange/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Exchange Enterprise item in your cart
   */
  public post(path: '/order/cart/{cartId}/exchangeEnterprise', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Exchange Enterprise option in your cart
   */
  public post(path: '/order/cart/{cartId}/exchangeEnterprise/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Hosting Reseller item in your cart
   */
  public post(path: '/order/cart/{cartId}/hostingReseller', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new IP addresses item in your cart
   */
  public post(path: '/order/cart/{cartId}/ip', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new IP addresses option in your cart
   */
  public post(path: '/order/cart/{cartId}/ip/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new IP Load-Balancing item in your cart
   */
  public post(path: '/order/cart/{cartId}/ipLoadbalancing', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new IP Load-Balancing option in your cart
   */
  public post(path: '/order/cart/{cartId}/ipLoadbalancing/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Setup configuration item for the product
   */
  public post(path: '/order/cart/{cartId}/item/{itemId}/configuration', params: {cartId: string, itemId: string, label: string, value: string}): Promise<order.cart.ConfigurationItem>;
  /**
   * Missing description
   * Post a new Kubernetes item in your cart
   */
  public post(path: '/order/cart/{cartId}/kubernetes', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Kubernetes option in your cart
   */
  public post(path: '/order/cart/{cartId}/kubernetes/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new CloudLinux license item in your cart
   */
  public post(path: '/order/cart/{cartId}/licenseCloudLinux', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new cPanel license item in your cart
   */
  public post(path: '/order/cart/{cartId}/licensecPanel', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Directadmin license item in your cart
   */
  public post(path: '/order/cart/{cartId}/licenseDirectadmin', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Plesk license item in your cart
   */
  public post(path: '/order/cart/{cartId}/licensePlesk', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Plesk license option in your cart
   */
  public post(path: '/order/cart/{cartId}/licensePlesk/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SqlServer license item in your cart
   */
  public post(path: '/order/cart/{cartId}/licenseSqlServer', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Virtuozzo license item in your cart
   */
  public post(path: '/order/cart/{cartId}/licenseVirtuozzo', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Windows license item in your cart
   */
  public post(path: '/order/cart/{cartId}/licenseWindows', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Worklight license item in your cart
   */
  public post(path: '/order/cart/{cartId}/licenseWorklight', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Logs item in your cart
   */
  public post(path: '/order/cart/{cartId}/logs', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Logs option in your cart
   */
  public post(path: '/order/cart/{cartId}/logs/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Managed Services item in your cart
   */
  public post(path: '/order/cart/{cartId}/managedServices', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Managed Services option in your cart
   */
  public post(path: '/order/cart/{cartId}/managedServices/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Metrics item in your cart
   */
  public post(path: '/order/cart/{cartId}/metrics', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Metrics option in your cart
   */
  public post(path: '/order/cart/{cartId}/metrics/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Microsoft offer item in your cart
   */
  public post(path: '/order/cart/{cartId}/microsoft', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Microsoft option in your cart
   */
  public post(path: '/order/cart/{cartId}/microsoft/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new NAS HA item in your cart
   */
  public post(path: '/order/cart/{cartId}/nasha', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new NAS HA option in your cart
   */
  public post(path: '/order/cart/{cartId}/nasha/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Office 365 item in your cart
   */
  public post(path: '/order/cart/{cartId}/office365', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Office 365 option in your cart
   */
  public post(path: '/order/cart/{cartId}/office365/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Office 365 Prepaid item in your cart
   */
  public post(path: '/order/cart/{cartId}/office365Prepaid', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Office 365 Prepaid option in your cart
   */
  public post(path: '/order/cart/{cartId}/office365Prepaid/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Over The Box item in your cart
   */
  public post(path: '/order/cart/{cartId}/otb', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Over The Box option in your cart
   */
  public post(path: '/order/cart/{cartId}/otb/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new OVHcloud Connect item in your cart
   */
  public post(path: '/order/cart/{cartId}/ovhCloudConnect', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new PaaS Monitoring item in your cart
   */
  public post(path: '/order/cart/{cartId}/paasmon', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud CDI item in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudCDI', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud CDI option in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudCDI/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Dedicated Cloud item in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudDC', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Dedicated Cloud option in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudDC/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Reseller item in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudReseller', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Reseller option in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudReseller/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Reseller Enterprise item in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudResellerEnterprise', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud Reseller Enterprise option in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudResellerEnterprise/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud SDDC item in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudSDDC', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Private Cloud SDDC option in your cart
   */
  public post(path: '/order/cart/{cartId}/privateCloudSDDC/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Reseller offer item in your cart
   */
  public post(path: '/order/cart/{cartId}/reseller', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Sharepoint offer item in your cart
   */
  public post(path: '/order/cart/{cartId}/sharepoint', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Sharepoint option in your cart
   */
  public post(path: '/order/cart/{cartId}/sharepoint/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SMS item in your cart
   */
  public post(path: '/order/cart/{cartId}/sms', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Comodo item in your cart
   */
  public post(path: '/order/cart/{cartId}/sslComodo', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Comodo option in your cart
   */
  public post(path: '/order/cart/{cartId}/sslComodo/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Gateway item in your cart
   */
  public post(path: '/order/cart/{cartId}/sslGateway', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new SSL Gateway option in your cart
   */
  public post(path: '/order/cart/{cartId}/sslGateway/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new VoIP item in your cart
   */
  public post(path: '/order/cart/{cartId}/telephony', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new VoIP option in your cart
   */
  public post(path: '/order/cart/{cartId}/telephony/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * List of OVHcloud Connect product
   * Post a new OVHcloud Connect item in your cart
   */
  public post(path: '/order/cart/{cartId}/vco', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Horizon View item in your cart
   */
  public post(path: '/order/cart/{cartId}/vdi', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Horizon View option in your cart
   */
  public post(path: '/order/cart/{cartId}/vdi/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Veeam Cloud Connect item in your cart
   */
  public post(path: '/order/cart/{cartId}/veeamcc', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Veeam Cloud Connect option in your cart
   */
  public post(path: '/order/cart/{cartId}/veeamcc/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Veeam Enterprise item in your cart
   */
  public post(path: '/order/cart/{cartId}/veeamEnterprise', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new Veeam Enterprise option in your cart
   */
  public post(path: '/order/cart/{cartId}/veeamEnterprise/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new VPS item in your cart
   */
  public post(path: '/order/cart/{cartId}/vps', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new VPS option in your cart
   */
  public post(path: '/order/cart/{cartId}/vps/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new vRack item in your cart
   */
  public post(path: '/order/cart/{cartId}/vrack', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new vRack item in your cart
   */
  public post(path: '/order/cart/{cartId}/vrackReseller', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new webHosting item in your cart
   */
  public post(path: '/order/cart/{cartId}/webHosting', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Missing description
   * Post a new webHosting option in your cart
   */
  public post(path: '/order/cart/{cartId}/webHosting/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * List of xdsl product
   * Post a new xdsl item in your cart
   */
  public post(path: '/order/cart/{cartId}/xdsl', params: {cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * List of xdsl addon
   * Post a new xdsl option in your cart
   */
  public post(path: '/order/cart/{cartId}/xdsl/options', params: {cartId: string, duration: string, itemId: number, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/cloud/#serviceName#
   * Post an additional Cloud option in your cart
   */
  public post(path: '/order/cartServiceOption/cloud/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/dedicated/#serviceName#
   * Post an additional dedicated option in your cart
   */
  public post(path: '/order/cartServiceOption/dedicated/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/domain/#serviceName#
   * Post an additional Domain option in your cart
   */
  public post(path: '/order/cartServiceOption/domain/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/emailpro/#serviceName#
   * Post an additional EmailPro option in your cart
   */
  public post(path: '/order/cartServiceOption/emailpro/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#
   * Post an additional IP Load-Balancing option in your cart
   */
  public post(path: '/order/cartServiceOption/ipLoadbalancing/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/logs/#serviceName#
   * Post an additional Logs option in your cart
   */
  public post(path: '/order/cartServiceOption/logs/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/microsoft/#serviceName#
   * Post an additional Microsoft option in your cart
   */
  public post(path: '/order/cartServiceOption/microsoft/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName#
   * Post an additional Microsoft option in your cart
   */
  public post(path: '/order/cartServiceOption/microsoftExchange/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/office365/#serviceName#
   * Post an additional Office option in your cart
   */
  public post(path: '/order/cartServiceOption/office365Prepaid/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloud/#serviceName#
   * Post an additional Private Cloud option in your cart
   */
  public post(path: '/order/cartServiceOption/privateCloud/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName#
   * Post an additional Private Cloud option in your cart
   */
  public post(path: '/order/cartServiceOption/privateCloudReseller/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#
   * Post an additional Private Cloud Enterprise option in your cart
   */
  public post(path: '/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/sharepoint/#serviceName#
   * Post an additional Sharepoint option in your cart
   */
  public post(path: '/order/cartServiceOption/sharepoint/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/sslGateway/#serviceName#
   * Post an additional SSL Gateway option in your cart
   */
  public post(path: '/order/cartServiceOption/sslGateway/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/vdi/#serviceName#
   * Post an additional Horizon View option in your cart
   */
  public post(path: '/order/cartServiceOption/vdi/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/vps/#serviceName#
   * Post an additional VPS option in your cart
   */
  public post(path: '/order/cartServiceOption/vps/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Listing offers /order/cartServiceOptions/webHosting/#serviceName#
   * Post an additional Web Hosting option in your cart
   */
  public post(path: '/order/cartServiceOption/webHosting/{serviceName}', params: {serviceName: string, cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number}): Promise<order.cart.Item>;
  /**
   * Order Backend Option
   * Create order
   */
  public post(path: '/order/cdn/dedicated/{serviceName}/backend/{duration}', params: {serviceName: string, duration: string, backend: number}): Promise<order.Order>;
  /**
   * Upgrade cacheRule Option
   * Create order
   */
  public post(path: '/order/cdn/dedicated/{serviceName}/cacheRule/{duration}', params: {serviceName: string, duration: string, cacheRule: OVH.cdnanycast.OrderCacheRuleEnum}): Promise<order.Order>;
  /**
   * Order Quota
   * Create order
   */
  public post(path: '/order/cdn/dedicated/{serviceName}/quota/{duration}', params: {serviceName: string, duration: string, quota: OVH.cdnanycast.OrderQuotaEnum}): Promise<order.Order>;
  /**
   * Order a New Dedicated CDN Service
   * Create order
   */
  public post(path: '/order/cdn/dedicated/new/{duration}', params: {duration: string}): Promise<order.Order>;
  /**
   * Upgrade Storage Option
   * Create order
   */
  public post(path: '/order/cdn/webstorage/{serviceName}/storage/{duration}', params: {serviceName: string, duration: string, storage: OVH.cdn.webstorage.OrderStorageEnum}): Promise<order.Order>;
  /**
   * Order Traffic
   * Create order
   */
  public post(path: '/order/cdn/webstorage/{serviceName}/traffic', params: {serviceName: string, bandwidth: OVH.cdn.webstorage.OrderTrafficEnum}): Promise<order.Order>;
  /**
   * Order credit usable on your Cloud project
   * Create order
   */
  public post(path: '/order/cloud/project/{serviceName}/credit', params: {serviceName: string, amount: number}): Promise<order.Order>;
  /**
   * Order failover ip on your Cloud project
   * Create order
   */
  public post(path: '/order/cloud/project/{serviceName}/ip', params: {serviceName: string, country?: OVH.vps.ip.GeolocationEnum, instanceId: string, quantity: number}): Promise<order.Order>;
  /**
   * Order an APC for this bay
   * Create order
   */
  public post(path: '/order/dedicated/housing/{serviceName}/APC/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order a new Nas HA
   * Create order
   */
  public post(path: '/order/dedicated/nasha/new/{duration}', params: {duration: string, datacenter: OVH.dedicated.NasHAZoneEnum, model: OVH.dedicated.NasHAOfferEnum}): Promise<order.Order>;
  /**
   * Order a backup storage for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/backupStorage/{duration}', params: {serviceName: string, duration: string, capacity: OVH.dedicated.server.BackupStorageCapacityEnum}): Promise<order.Order>;
  /**
   * Order bandwidth for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/bandwidth/{duration}', params: {serviceName: string, duration: string, bandwidth: OVH.dedicated.server.BandwidthOrderEnum, type: OVH.dedicated.server.BandwidthOrderTypeEnum}): Promise<order.Order>;
  /**
   * Order vRack bandwidth for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}', params: {serviceName: string, duration: string, bandwidth: OVH.dedicated.server.BandwidthvRackOrderEnum}): Promise<order.Order>;
  /**
   * Order a failover IP for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/failoverIP/{duration}', params: {serviceName: string, duration: string, country: OVH.dedicated.server.IpCountryEnum}): Promise<order.Order>;
  /**
   * Order a feature for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/feature/{duration}', params: {serviceName: string, duration: string, feature: OVH.dedicated.server.OrderableSysFeatureEnum}): Promise<order.Order>;
  /**
   * order a Firewall for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/firewall/{duration}', params: {serviceName: string, duration: string, firewallModel: OVH.dedicated.server.FirewallModelEnum}): Promise<order.Order>;
  /**
   * Order IP for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/ip/{duration}', params: {serviceName: string, duration: string, blockSize: OVH.dedicated.server.IpBlockSizeEnum, country?: OVH.dedicated.server.IpCountryEnum, organisationId?: string, type: OVH.dedicated.server.IpTypeOrderableEnum}): Promise<order.Order>;
  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/ipMigration/{duration}', params: {serviceName: string, duration: string, ip: string, token: string}): Promise<order.Order>;
  /**
   * Order a kvm for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/kvm/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order a kvmip express for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/kvmExpress/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order professional use option
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/professionalUse/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order a static IP for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/staticIP/{duration}', params: {serviceName: string, duration: string, country: OVH.dedicated.server.IpStaticCountryEnum}): Promise<order.Order>;
  /**
   * Order additionall traffic for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/traffic/{duration}', params: {serviceName: string, duration: string, traffic: OVH.dedicated.server.TrafficOrderEnum}): Promise<order.Order>;
  /**
   * Order an USB key for this server
   * Create order
   */
  public post(path: '/order/dedicated/server/{serviceName}/usbKey/{duration}', params: {serviceName: string, duration: string, capacity: OVH.dedicated.server.UsbKeyCapacityEnum}): Promise<order.Order>;
  /**
   * Order additional bandwidth in your Private Cloud
   * Create order
   */
  public post(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}', params: {serviceName: string, duration: string, bandwidth: OVH.dedicatedCloud.AdditionalBandwidthEnum}): Promise<order.Order>;
  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
   * Create order
   */
  public post(path: '/order/dedicatedCloud/{serviceName}/filer/{duration}', params: {serviceName: string, duration: string, datacenterId?: number, name: string, quantity?: number}): Promise<order.Order>;
  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
   * Create order
   */
  public post(path: '/order/dedicatedCloud/{serviceName}/host/{duration}', params: {serviceName: string, duration: string, datacenterId: number, name: string, quantity?: number}): Promise<order.Order>;
  /**
   * Order an IP block for your Private Cloud
   * Create order
   */
  public post(path: '/order/dedicatedCloud/{serviceName}/ip/{duration}', params: {serviceName: string, duration: string, country: OVH.dedicatedCloud.IpCountriesEnum, description: string, estimatedClientsNumber: number, networkName: string, size: OVH.dedicatedCloud.OrderableIpBlockRangeEnum, usage: string}): Promise<order.Order>;
  /**
   * Enable windows templates (SPLA) in your Private Cloud
   * Create order
   */
  public post(path: '/order/dedicatedCloud/{serviceName}/spla', params: {serviceName: string}): Promise<order.Order>;
  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
   * Create order
   */
  public post(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}', params: {serviceName: string, duration: string, upgradedRessourceId?: number, upgradedRessourceType: OVH.dedicatedCloud.ressources.UpgradeRessourceTypeEnum, upgradeType: OVH.dedicatedCloud.ressources.UpgradeTypeEnum}): Promise<order.Order>;
  /**
   * Order VDI option in a given Datacenter
   * Create order
   */
  public post(path: '/order/dedicatedCloud/{serviceName}/vdi', params: {serviceName: string, datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string}): Promise<order.Order>;
  /**
   * Order Anycast
   * Create order
   */
  public post(path: '/order/domain/zone/{zoneName}/dnsAnycast/{duration}', params: {zoneName: string, duration: string}): Promise<order.Order>;
  /**
   * Order a new DNS zone
   * Create order
   */
  public post(path: '/order/domain/zone/new', params: {minimized?: boolean, zoneName: string}): Promise<order.Order>;
  /**
   * Order a new mx plan
   * Create order
   */
  public post(path: '/order/email/domain/new/{duration}', params: {duration: string, domain: string, offer: OVH.email.domain.OfferEnum}): Promise<order.Order>;
  /**
   * Create an order for an exchange account
   * Create order
   */
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}', params: {organizationName: string, exchangeService: string, duration: string, licence: OVH.email.exchange.OvhLicenceEnum, number: number, storageQuota?: OVH.email.exchange.accountQuotaEnum}): Promise<order.Order>;
  /**
   * Create an order to upgrade your hosted account storage
   * Create order
   */
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}', params: {organizationName: string, exchangeService: string, duration: string, newQuota: OVH.email.exchange.accountQuotaEnum, primaryEmailAddress: string}): Promise<order.Order>;
  /**
   * Create an order for a additional 50GB of space (Exchange 2010 reseller only)
   * Create order
   */
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace', params: {organizationName: string, exchangeService: string}): Promise<order.Order>;
  /**
   * Create an order for a outlook licence.
   * Create order
   */
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}', params: {organizationName: string, exchangeService: string, duration: string, licence: OVH.email.exchange.OutlookVersionEnum, primaryEmailAddress: string}): Promise<order.Order>;
  /**
   * Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016)
   * Create order
   */
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade', params: {organizationName: string, exchangeService: string}): Promise<order.Order>;
  /**
   * Create an order for a pro account
   * Create order
   */
  public post(path: '/order/email/pro/{service}/account/{duration}', params: {service: string, duration: string, number: number}): Promise<order.Order>;
  /**
   * Convert the freefax service to a /telephony voicefax service
   * Create order
   */
  public post(path: '/order/freefax/{serviceName}/convertToVoicefax', params: {serviceName: string, billingAccount: string}): Promise<order.Order>;
  /**
   * Credit freefax account pages
   * Create order
   */
  public post(path: '/order/freefax/new', params: {quantity: OVH.freefax.QuantityEnum}): Promise<order.Order>;
  /**
   * Create an order for change ram size on your private database
   * Create order
   */
  public post(path: '/order/hosting/privateDatabase/{serviceName}/ram/{duration}', params: {serviceName: string, duration: string, ram: OVH.hosting.PrivateDatabase.AvailableRamSizeEnum}): Promise<order.Order>;
  /**
   * Order new private database
   * Create order
   */
  public post(path: '/order/hosting/privateDatabase/new/{duration}', params: {duration: string, datacenter?: OVH.hosting.PrivateDatabase.DatacenterEnum, offer?: OVH.hosting.PrivateDatabase.OfferEnum, ram: OVH.hosting.PrivateDatabase.AvailableRamSizeEnum, version: OVH.hosting.PrivateDatabase.OrderableVersionEnum}): Promise<order.Order>;
  /**
   * Order additional bandwidth
   * Create order
   */
  public post(path: '/order/hosting/web/{serviceName}/bandwidth/{duration}', params: {serviceName: string, duration: string, traffic: OVH.hosting.web.BandwidthOfferEnum}): Promise<order.Order>;
  /**
   * Create an order for cdn option
   * Create order
   */
  public post(path: '/order/hosting/web/{serviceName}/cdn/{duration}', params: {serviceName: string, duration: string, offer: OVH.hosting.web.CdnOfferEnum}): Promise<order.Order>;
  /**
   * Create an order for change the hosting main domain
   * Create order
   */
  public post(path: '/order/hosting/web/{serviceName}/changeMainDomain/{duration}', params: {serviceName: string, duration: string, domain: string, mxplan: OVH.hosting.web.order.MxPlanEnum}): Promise<order.Order>;
  /**
   * Create an order for extra sql perso
   * Create order
   */
  public post(path: '/order/hosting/web/{serviceName}/extraSqlPerso/{duration}', params: {serviceName: string, duration: string, offer: OVH.hosting.web.database.SqlPersoOfferEnum}): Promise<order.Order>;
  /**
   * Create an order for hosted ssl option
   * Create order
   */
  public post(path: '/order/hosting/web/{serviceName}/ssl/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Create an order for upgrade your hosting account
   * Create order
   */
  public post(path: '/order/hosting/web/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, offer: OVH.hosting.web.OfferEnum, startTime?: string, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
  /**
   * Order a new hosting account
   * Create order
   */
  public post(path: '/order/hosting/web/new/{duration}', params: {duration: string, dnsZone?: OVH.hosting.web.DnsZoneEnum, domain: string, module?: OVH.hosting.web.module.OrderableNameEnum, offer: OVH.hosting.web.OfferEnum, waiveRetractationPeriod?: boolean}): Promise<order.Order>;
  /**
   * Order a HPC Spot Account
   * Create order
   */
  public post(path: '/order/hpcspot/new/{duration}', params: {duration: string}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  public post(path: '/order/license/cloudLinux/new/{duration}', params: {duration: string, ip: string, version: OVH.license.CloudLinuxVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  public post(path: '/order/license/cpanel/new/{duration}', params: {duration: string, ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableCpanelVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  public post(path: '/order/license/directadmin/new/{duration}', params: {duration: string, ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableDirectAdminVersionEnum}): Promise<order.Order>;
  /**
   * Create an order for an new office tenant
   * Create order
   */
  public post(path: '/order/license/office/new/{duration}', params: {duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  public post(path: '/order/license/plesk/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, antispam?: OVH.license.OrderableAntispamEnum, antivirus?: OVH.license.OrderableAntivirusEnum, applicationSet?: OVH.license.PleskApplicationSetEnum, domainNumber?: OVH.license.OrderablePleskDomainNumberEnum, languagePackNumber?: OVH.license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, version?: OVH.license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  public post(path: '/order/license/plesk/new/{duration}', params: {duration: string, antivirus?: OVH.license.OrderableAntivirusEnum, applicationSet?: OVH.license.PleskApplicationSetEnum, domainNumber?: OVH.license.OrderablePleskDomainNumberEnum, ip: string, languagePackNumber?: OVH.license.OrderablePleskLanguagePackEnum, powerpack?: boolean, resellerManagement?: boolean, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.PleskVersionEnum, wordpressToolkit?: boolean}): Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  public post(path: '/order/license/sqlserver/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, version: OVH.license.SqlServerVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  public post(path: '/order/license/sqlserver/new/{duration}', params: {duration: string, ip: string, version: OVH.license.SqlServerVersionEnum}): Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  public post(path: '/order/license/virtuozzo/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, containerNumber: OVH.license.OrderableVirtuozzoContainerNumberEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  public post(path: '/order/license/virtuozzo/new/{duration}', params: {duration: string, containerNumber: OVH.license.OrderableVirtuozzoContainerNumberEnum, ip: string, serviceType?: OVH.license.LicenseTypeEnum, version: OVH.license.OrderableVirtuozzoVersionEnum}): Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  public post(path: '/order/license/windows/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, sqlVersion?: OVH.license.WindowsSqlVersionEnum, version?: OVH.license.WindowsOsVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  public post(path: '/order/license/windows/new/{duration}', params: {duration: string, ip: string, serviceType?: OVH.license.LicenseTypeEnum, sqlVersion?: OVH.license.WindowsSqlVersionEnum, version: OVH.license.WindowsOsVersionEnum}): Promise<order.Order>;
  /**
   * Upgrade this license with some given options
   * Create order
   */
  public post(path: '/order/license/worklight/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, version: OVH.license.WorkLightVersionEnum}): Promise<order.Order>;
  /**
   * Order a new license on a given Ip with some given options
   * Create order
   */
  public post(path: '/order/license/worklight/new/{duration}', params: {duration: string, ip: string, lessThan1000Users: boolean, version: OVH.license.WorkLightVersionEnum}): Promise<order.Order>;
  /**
   * Create an order to upgrade your overTheBox service
   * Create order
   */
  public post(path: '/order/overTheBox/{serviceName}/migrate', params: {serviceName: string, hardware: boolean, offer: string, shippingContactID?: string, shippingMethod?: OVH.overTheBox.ShippingMethodEnum, shippingRelayID?: number}): Promise<order.Order>;
  /**
   * Subscribe to overTheBox service
   * Create order
   */
  public post(path: '/order/overTheBox/new/{duration}', params: {duration: string, deviceId?: string, offer: string, voucher?: string}): Promise<order.Order>;
  /**
   * Order router vpn
   * Create order
   */
  public post(path: '/order/router/new/{duration}', params: {duration: string, vrack: string}): Promise<order.Order>;
  /**
   * Create an order for a new office tenant
   * Create order
   */
  public post(path: '/order/saas/csp2/new/{duration}', params: {duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number}): Promise<order.Order>;
  /**
   * Order credits on an existing SMS account
   * Create order
   */
  public post(path: '/order/sms/{serviceName}/credits', params: {serviceName: string, quantity: number}): Promise<order.Order>;
  /**
   * Create and credit a new SMS Account
   * Create order
   */
  public post(path: '/order/sms/new', params: {quantity: number}): Promise<order.Order>;
  /**
   * Purchase new accessories
   * Create order
   */
  public post(path: '/order/telephony/{billingAccount}/accessories', params: {billingAccount: string, accessories: string[], mondialRelayId?: string, retractation: boolean, shippingContactId: number}): Promise<order.Order>;
  /**
   * Purchase a new line offer
   * Create order
   */
  public post(path: '/order/telephony/{billingAccount}/line', params: {billingAccount: string, brand?: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], mondialRelayId?: string, offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: OVH.telephony.LineTypeEnum[], zones?: string[]}): Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Create order
   */
  public post(path: '/order/telephony/{billingAccount}/numberGeographic', params: {billingAccount: string, ape?: string, city: string, country: OVH.telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: OVH.nichandle.LegalFormEnum, name?: string, offer: OVH.telephony.NumberOffer, organisation?: string, phone?: string, pool?: OVH.telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string, zone: string}): Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Create order
   */
  public post(path: '/order/telephony/{billingAccount}/numberNogeographic', params: {billingAccount: string, ape?: string, city?: string, country: OVH.telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: OVH.nichandle.LegalFormEnum, name?: string, offer: OVH.telephony.NumberOffer, organisation?: string, phone?: string, pool?: OVH.telephony.NumberPoolEnum, retractation: boolean, siret?: string, socialNomination?: string, specificNumber?: string, streetName?: string, streetNumber?: string, zip?: string}): Promise<order.Order>;
  /**
   * Purchase a new standard alias number
   * Create order
   */
  public post(path: '/order/telephony/{billingAccount}/numberSpecial', params: {billingAccount: string, ape: string, city?: string, country: OVH.telephony.NumberCountryEnum, displayUniversalDirectory: boolean, email?: string, firstname?: string, legalform: OVH.nichandle.LegalFormEnum, name?: string, organisation?: string, phone?: string, pool?: OVH.telephony.NumberPoolEnum, range: string, retractation: boolean, siret: string, socialNomination: string, specificNumber?: string, streetName?: string, streetNumber?: string, typology: OVH.telephony.NumberSpecialTypologyEnum, zip?: string}): Promise<order.Order>;
  /**
   * Order a new portability
   * Create order
   */
  public post(path: '/order/telephony/{billingAccount}/portability', params: {billingAccount: string, building?: string, callNumber: string, city: string, contactName?: string, contactNumber?: string, country: OVH.telephony.portability.CountriesAvailable, desireDate?: string, displayUniversalDirectory: boolean, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, firstName: string, floor?: number, lineToRedirectAliasTo?: string, listNumbers?: string, mobilePhone?: string, name: string, offer: OVH.telephony.portability.OfferType, rio?: string, siret?: string, socialReason: OVH.telephony.portability.SocialReason, specialNumberCategory?: OVH.telephony.portability.SpecialNumberCategoryEnum, stair?: number, streetName: string, streetNumber: number, streetNumberExtra?: string, streetType?: string, type: OVH.telephony.portability.NumberType, zip: string}): Promise<order.Order>;
  /**
   * Credit security deposit
   * Create order
   */
  public post(path: '/order/telephony/{billingAccount}/securityDeposit', params: {billingAccount: string, amount: OVH.telephony.SecurityDepositAmountsEnum}): Promise<order.Order>;
  /**
   * Add extra simultaneous lines for a specifical line
   * Create order
   */
  public post(path: '/order/telephony/lines/{serviceName}/addSimultaneousLines', params: {serviceName: string, billingAccount: string, quantity: number}): Promise<order.Order>;
  /**
   * Order a phone for this specific line
   * Create order
   */
  public post(path: '/order/telephony/lines/{serviceName}/hardware', params: {serviceName: string, hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}): Promise<order.Order>;
  /**
   * Update extra simultaneous channels for a specifical service to the requested amount
   * Create order
   */
  public post(path: '/order/telephony/lines/{serviceName}/updateSimultaneousChannels', params: {serviceName: string, quantity: number}): Promise<order.Order>;
  /**
   * Purchase a new billing account
   * Create order
   */
  public post(path: '/order/telephony/new'): Promise<order.Order>;
  /**
   * Purchase spare phone
   * Create order
   */
  public post(path: '/order/telephony/spare/new', params: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}): Promise<order.Order>;
  /**
   * Add extra simultaneous lines for a specifical line
   * Create order
   */
  public post(path: '/order/telephony/trunks/{serviceName}/addSimultaneousLines', params: {serviceName: string, billingAccount: string, quantity: number}): Promise<order.Order>;
  /**
   * Order a phone for this specific line
   * Create order
   */
  public post(path: '/order/telephony/trunks/{serviceName}/hardware', params: {serviceName: string, hardware: string, mondialRelayId?: string, retractation: boolean, shippingContactId?: string}): Promise<order.Order>;
  /**
   * Update extra simultaneous channels for a specifical service to the requested amount
   * Create order
   */
  public post(path: '/order/telephony/trunks/{serviceName}/updateSimultaneousChannels', params: {serviceName: string, quantity: number}): Promise<order.Order>;
  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/cephaas/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/cephaas/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/ipLoadbalancing/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/logs/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/logs/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/metrics/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/metrics/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/microsoftExchange/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/microsoftExchange/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/privateCloud/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/privateCloud/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/sslGateway/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/sslGateway/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Listing offers /order/upgrade/vps/#serviceName#
   * Perform the requested upgrade of your service
   */
  public post(path: '/order/upgrade/vps/{serviceName}/{planCode}', params: {planCode: string, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean, quantity: number}): Promise<order.upgrade.order_upgrade_OperationAndOrder>;
  /**
   * Order an upgrade upon your Veeam Cloud Connect account
   * Create order
   */
  public post(path: '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, offer: OVH.veeamCloudConnect.Offer}): Promise<order.Order>;
  /**
   * Order additional disk
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/additionalDisk/{duration}', params: {serviceName: string, duration: string, additionalDiskSize: OVH.vps.additionalDisk.AdditionalDiskSizeEnum}): Promise<order.Order>;
  /**
   * Order Automated Backup Option (vps Cloud only)
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/automatedBackup/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Create an order for a cPanel license
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/cpanel/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order FtpBackup Option
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/ftpbackup/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order Additional IP
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/ip/{duration}', params: {serviceName: string, duration: string, country?: OVH.vps.ip.GeolocationEnum, number: number}): Promise<order.Order>;
  /**
   * Create an order for a PLESK license
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/plesk/{duration}', params: {serviceName: string, duration: string, domainNumber: OVH.vps.PleskLicenseDomainNumberEnum}): Promise<order.Order>;
  /**
   * Order Snapshot Option
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/snapshot/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order Upgrade
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/upgrade/{duration}', params: {serviceName: string, duration: string, model: string}): Promise<order.Order>;
  /**
   * Order Veeam Option
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/veeam/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order Windows Option (2015 only)
   * Create order
   */
  public post(path: '/order/vps/{serviceName}/windows/{duration}', params: {serviceName: string, duration: string}): Promise<order.Order>;
  /**
   * Order new vrack
   * Create order
   */
  public post(path: '/order/vrack/new', params: {quantity?: number}): Promise<order.Order>;
  /**
   * Purchase spare modem
   * Create order
   */
  public post(path: '/order/xdsl/spare/new', params: {brand: string, mondialRelayId?: string, quantity: number, shippingContactId: number}): Promise<order.Order>;
  public post(path: PathsOrderPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Missing description
   * Delete a cart
   */
  public delete(path: '/order/cart/{cartId}', params: {cartId: string}): Promise<void>;
  /**
   * Missing description
   * Delete a coupon from cart
   */
  public delete(path: '/order/cart/{cartId}/coupon', params: {cartId: string}): Promise<void>;
  /**
   * Missing description
   * Delete an item from a cart
   */
  public delete(path: '/order/cart/{cartId}/item/{itemId}', params: {cartId: string, itemId: string}): Promise<void>;
  /**
   * Missing description
   * Delete configuration item
   */
  public delete(path: '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}', params: {configurationId: string, cartId: string, itemId: string}): Promise<void>;
  public delete(path: PathsOrderDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
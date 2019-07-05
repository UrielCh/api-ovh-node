import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.ChartSerie
    // fullName: complexType.ChartSerie.ChartSerie
    export interface ChartSerie<T> {
        serieName?: string;
        unit?: string;
        values?: T[];
    }
    //complexType.ChartTimestampValue
    // fullName: complexType.ChartTimestampValue.ChartTimestampValue
    export interface ChartTimestampValue {
        timestamp?: number;
        value?: number;
    }
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace hosting {
    export namespace PrivateDatabase {
        //hosting.PrivateDatabase.AvailableRamSizeEnum
        export type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512"
        //hosting.PrivateDatabase.OrderableVersionEnum
        export type OrderableVersionEnum = "mariadb_10.1" | "mariadb_10.2" | "mongodb_3.4" | "mongodb_4.0" | "mysql_5.5" | "mysql_5.6" | "mysql_5.7" | "postgresql_10" | "postgresql_11" | "postgresql_9.4" | "postgresql_9.5" | "postgresql_9.6" | "redis_3.2" | "redis_4.0"
    }
    export namespace web {
        //hosting.web.Address
        // fullName: hosting.web.Address.Address
        export interface Address {
            port?: number;
            url?: string;
        }
        //hosting.web.AvailableOfferStruct
        // fullName: hosting.web.AvailableOfferStruct.AvailableOfferStruct
        export interface AvailableOfferStruct {
            offer?: OVH.hosting.web.OfferEnum;
            price?: OVH.order.Price;
        }
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
        //hosting.web.CountriesIp
        // fullName: hosting.web.CountriesIp.CountriesIp
        export interface CountriesIp {
            country?: OVH.hosting.web.CountryEnum;
            ip?: string;
            ipv6?: string;
        }
        //hosting.web.CountryEnum
        export type CountryEnum = "BE" | "CZ" | "DE" | "ES" | "FI" | "FR" | "IE" | "IT" | "LT" | "NL" | "PL" | "PT" | "UK"
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
        //hosting.web.DatacenterEnum
        export type DatacenterEnum = "gra1" | "gra2" | "p19"
        //hosting.web.DiskType
        // fullName: hosting.web.DiskType.DiskType
        export interface DiskType {
            type?: OVH.hosting.web.DiskTypeEnum;
            unit?: string;
            value?: number;
        }
        //hosting.web.DiskTypeEnum
        export type DiskTypeEnum = "HDD" | "SSD"
        //hosting.web.HighLightEnum
        export type HighLightEnum = "best-seller" | "new"
        //hosting.web.ModuleList
        // fullName: hosting.web.ModuleList.ModuleList
        export interface ModuleList {
            active?: boolean;
            adminNameType?: OVH.hosting.web.module.AdminNameTypeEnum;
            author?: string;
            branch?: OVH.hosting.web.module.BranchEnum;
            id?: number;
            keywords?: string[];
            language?: OVH.hosting.web.module.LanguageEnum[];
            languageRequirement?: OVH.complexType.UnitAndValue<string>;
            latest?: boolean;
            name?: string;
            size?: OVH.complexType.UnitAndValue<number>;
            upgradeFrom?: number[];
            version?: string;
        }
        //hosting.web.NodejsVersionAvailableEnum
        export type NodejsVersionAvailableEnum = "nodejs-10" | "nodejs-11" | "nodejs-8" | "nodejs-9"
        //hosting.web.OfferCapabilitiesEnum
        export type OfferCapabilitiesEnum = "1000gp" | "20gp" | "240gp" | "240pack" | "240plan" | "300gp" | "60gp" | "720pack" | "720plan" | "90pack" | "90plan" | "CLOUDWEB_1" | "CLOUDWEB_2" | "CLOUDWEB_3" | "KS" | "PERFORMANCE_1" | "PERFORMANCE_2" | "PERFORMANCE_3" | "PERFORMANCE_4" | "PERSO" | "PRO" | "START" | "business" | "cloudweb1" | "cloudweb2" | "cloudweb3" | "cloudwebbetax1" | "depro2012" | "deprol2012" | "deproxl2012" | "deproxxl2012" | "destart2012" | "destartl2012" | "destartxl2012" | "domainpack" | "itbusiness2012" | "itperso2012" | "itpremium2012" | "kimsufi2015" | "mailpack" | "mailplan" | "mediapack" | "mediaplan" | "ovhpro1To" | "ovhpro2To" | "ovhpro5To" | "paas2014beta" | "perf2014x1" | "perf2014x2" | "perf2014x3" | "perf2014x4" | "perso2010" | "perso2014" | "premium" | "pro2010" | "pro2014" | "start10g" | "start10m" | "start1g" | "start1ges" | "start1m" | "start5g" | "starter" | "xxlpack" | "xxlplan"
        //hosting.web.OfferEnum
        export type OfferEnum = "CLOUDWEB_1" | "CLOUDWEB_2" | "CLOUDWEB_3" | "KS" | "PERFORMANCE_1" | "PERFORMANCE_2" | "PERFORMANCE_3" | "PERFORMANCE_4" | "PERSO" | "PRO" | "START"
        //hosting.web.OperatingSystemEnum
        export type OperatingSystemEnum = "linux"
        //hosting.web.PhpVersion
        // fullName: hosting.web.PhpVersion.PhpVersion
        export interface PhpVersion {
            support?: OVH.hosting.web.PhpVersionStateEnum;
            version?: string;
        }
        //hosting.web.PhpVersionAvailableEnum
        export type PhpVersionAvailableEnum = "phpfpm-5.6" | "phpfpm-7.0" | "phpfpm-7.1" | "phpfpm-7.2" | "phpfpm-7.3"
        //hosting.web.PhpVersionStateEnum
        export type PhpVersionStateEnum = "BETA" | "END_OF_LIFE" | "SECURITY_FIXES" | "SUPPORTED"
        //hosting.web.PythonVersionAvailableEnum
        export type PythonVersionAvailableEnum = "python-2" | "python-3"
        //hosting.web.RequestActionEnum
        export type RequestActionEnum = "CHECK_QUOTA" | "FLUSH_CACHE" | "SCAN_ANTIHACK"
        //hosting.web.ResourceEnum
        export type ResourceEnum = "bestEffort" | "cloud" | "dedicated" | "shared"
        //hosting.web.RubyVersionAvailableEnum
        export type RubyVersionAvailableEnum = "ruby-2.4" | "ruby-2.5" | "ruby-2.6"
        //hosting.web.Service
        // fullName: hosting.web.Service.Service
        export interface Service {
            availableBoostOffer?: OVH.hosting.web.AvailableOfferStruct[];
            boostOffer?: OVH.hosting.web.OfferCapabilitiesEnum;
            cluster?: string;
            clusterIp?: string;
            clusterIpv6?: string;
            countriesIp?: OVH.hosting.web.CountriesIp[];
            datacenter?: OVH.hosting.web.DatacenterEnum;
            displayName?: string;
            filer?: string;
            hasCdn?: boolean;
            hasHostedSsl?: boolean;
            home?: string;
            hostingIp?: string;
            hostingIpv6?: string;
            lastOvhConfigScan?: string;
            offer?: OVH.hosting.web.OfferCapabilitiesEnum;
            operatingSystem?: OVH.hosting.web.OperatingSystemEnum;
            phpVersions?: OVH.hosting.web.PhpVersion[];
            primaryLogin?: string;
            quotaSize?: OVH.complexType.UnitAndValue<number>;
            quotaUsed?: OVH.complexType.UnitAndValue<number>;
            recommendedOffer?: OVH.hosting.web.OfferEnum;
            resourceType?: OVH.hosting.web.ResourceEnum;
            serviceManagementAccess?: OVH.hosting.web.ServiceAccess;
            serviceName?: string;
            state?: OVH.hosting.web.StateEnum;
            token?: string;
            trafficQuotaSize?: OVH.complexType.UnitAndValue<number>;
            trafficQuotaUsed?: OVH.complexType.UnitAndValue<number>;
            updates?: string[];
        }
        //hosting.web.ServiceAccess
        // fullName: hosting.web.ServiceAccess.ServiceAccess
        export interface ServiceAccess {
            ftp?: OVH.hosting.web.Address;
            http?: OVH.hosting.web.Address;
            ssh?: OVH.hosting.web.Address;
        }
        //hosting.web.StateEnum
        export type StateEnum = "active" | "bloqued" | "maintenance"
        //hosting.web.StatisticsPeriodEnum
        export type StatisticsPeriodEnum = "daily" | "monthly" | "weekly" | "yearly"
        //hosting.web.StatisticsTypeEnum
        export type StatisticsTypeEnum = "in.ftpCommands" | "in.httpHits" | "in.httpMeanResponseTime" | "out.tcpConn" | "sys.cpuUsage" | "sys.workerSpawnOverload"
        //hosting.web.attachedDomain
        // fullName: hosting.web.attachedDomain.attachedDomain
        export interface attachedDomain {
            cdn?: OVH.hosting.web.attachedDomain.CdnEnum;
            domain?: string;
            firewall?: OVH.hosting.web.attachedDomain.FirewallEnum;
            ipLocation?: OVH.hosting.web.CountryEnum;
            ownLog?: string;
            path?: string;
            runtimeId?: number;
            ssl?: boolean;
            status?: OVH.hosting.web.attachedDomain.StatusEnum;
            taskId?: number;
        }
        export namespace attachedDomain {
            //hosting.web.attachedDomain.CdnEnum
            export type CdnEnum = "active" | "none"
            //hosting.web.attachedDomain.FirewallEnum
            export type FirewallEnum = "active" | "none"
            //hosting.web.attachedDomain.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
        export namespace backup {
            //hosting.web.backup.TypeEnum
            export type TypeEnum = "daily.1" | "daily.2" | "daily.3" | "weekly.1" | "weekly.2"
        }
        //hosting.web.boostHistory
        // fullName: hosting.web.boostHistory.boostHistory
        export interface boostHistory {
            accountId?: string;
            boostOffer?: OVH.hosting.web.OfferCapabilitiesEnum;
            date?: string;
            offer?: OVH.hosting.web.OfferCapabilitiesEnum;
        }
        //hosting.web.cdn
        // fullName: hosting.web.cdn.cdn
        export interface cdn {
            domain?: string;
            free?: boolean;
            status?: OVH.hosting.web.cdn.StatusEnum;
            taskId?: number;
            type?: string;
            version?: string;
        }
        export namespace cdn {
            //hosting.web.cdn.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "flushing"
        }
        //hosting.web.cron
        // fullName: hosting.web.cron.cron
        export interface cron {
            command?: string;
            description?: string;
            email?: string;
            frequency?: string;
            id?: number;
            language?: OVH.hosting.web.cron.LanguageEnum;
            status?: OVH.hosting.web.cron.StatusEnum;
        }
        export namespace cron {
            //hosting.web.cron.LanguageEnum
            export type LanguageEnum = "node10" | "node11" | "node8" | "node9" | "other" | "php4" | "php5.2" | "php5.3" | "php5.4" | "php5.5" | "php5.6" | "php7.0" | "php7.1" | "php7.2" | "php7.3" | "python2" | "python3" | "ruby2.4" | "ruby2.5" | "ruby2.6"
            //hosting.web.cron.StatusEnum
            export type StatusEnum = "disabled" | "enabled" | "suspended"
        }
        //hosting.web.database
        // fullName: hosting.web.database.database
        export interface database {
            dumps?: number;
            guiURL?: string;
            lastCheck?: string;
            mode?: OVH.hosting.web.database.ModeEnum;
            name?: string;
            port?: number;
            quotaSize?: OVH.complexType.UnitAndValue<number>;
            quotaUsed?: OVH.complexType.UnitAndValue<number>;
            server?: string;
            state?: OVH.hosting.web.database.StateEnum;
            status?: OVH.hosting.web.database.StatusEnum;
            taskId?: number;
            type?: OVH.hosting.web.database.DatabaseTypeEnum;
            user?: string;
            version?: OVH.hosting.web.database.VersionEnum;
            versionSupport?: OVH.hosting.web.database.SupportedVersionEnum;
        }
        export namespace database {
            //hosting.web.database.AvailableVersionStruct
            // fullName: hosting.web.database.AvailableVersionStruct.AvailableVersionStruct
            export interface AvailableVersionStruct {
                default?: OVH.hosting.web.database.VersionEnum;
                list?: OVH.hosting.web.database.VersionEnum[];
            }
            //hosting.web.database.CreationDatabaseCapabilities
            // fullName: hosting.web.database.CreationDatabaseCapabilities.CreationDatabaseCapabilities
            export interface CreationDatabaseCapabilities {
                available?: number;
                engines?: OVH.hosting.web.database.DatabaseTypeEnum[];
                isolation?: OVH.hosting.web.database.DatabaseIsolationEnum;
                quota?: OVH.complexType.UnitAndValue<number>;
                type?: OVH.hosting.web.database.DatabaseCapabilitiesTypeEnum;
            }
            //hosting.web.database.DatabaseCapabilities
            // fullName: hosting.web.database.DatabaseCapabilities.DatabaseCapabilities
            export interface DatabaseCapabilities {
                changePassword?: boolean;
                changeRight?: boolean;
                delete?: boolean;
                dump?: boolean;
                getQuota?: boolean;
                getRight?: boolean;
                guiURL?: string;
                optimize?: boolean;
                restore?: boolean;
            }
            //hosting.web.database.DatabaseCapabilitiesTypeEnum
            export type DatabaseCapabilitiesTypeEnum = "extraSqlPerso" | "local" | "privateDatabase" | "sqlLocal" | "sqlPerso" | "sqlPro"
            //hosting.web.database.DatabaseIsolationEnum
            export type DatabaseIsolationEnum = "dedicated" | "local" | "shared"
            //hosting.web.database.DatabaseTypeEnum
            export type DatabaseTypeEnum = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis"
            //hosting.web.database.ExtraSqlQuotaEnum
            export type ExtraSqlQuotaEnum = 100 | 200 | 25 | 400 | 800
            //hosting.web.database.ModeEnum
            export type ModeEnum = "besteffort" | "classic" | "module"
            //hosting.web.database.RequestActionEnum
            export type RequestActionEnum = "CHECK_QUOTA"
            //hosting.web.database.StateEnum
            export type StateEnum = "close" | "ok" | "readonly"
            //hosting.web.database.StatisticsTypeEnum
            export type StatisticsTypeEnum = "statement" | "statementMeanTime"
            //hosting.web.database.StatusEnum
            export type StatusEnum = "checking" | "created" | "creating" | "deleting" | "dumping" | "importing" | "locked" | "optimizing" | "restoring" | "updating"
            //hosting.web.database.SupportedVersionEnum
            export type SupportedVersionEnum = "beta" | "deprecated" | "stable"
            //hosting.web.database.VersionEnum
            export type VersionEnum = "3.4" | "4.0" | "5.1" | "5.5" | "5.6" | "8.4"
            export namespace dump {
                //hosting.web.database.dump.DateEnum
                export type DateEnum = "daily.1" | "now" | "weekly.1"
                //hosting.web.database.dump.StatusEnum
                export type StatusEnum = "created" | "creating" | "deleting"
            }
        }
        //hosting.web.database_dump
        // fullName: hosting.web.database_dump.database_dump
        export interface database_dump {
            creationDate?: string;
            deletionDate?: string;
            id?: number;
            status?: OVH.hosting.web.database.dump.StatusEnum;
            taskId?: number;
            type?: OVH.hosting.web.database.dump.DateEnum;
            url?: string;
        }
        //hosting.web.dump
        // fullName: hosting.web.dump.dump
        export interface dump {
            creationDate?: string;
            databaseName?: string;
            deletionDate?: string;
            id?: number;
            orphan?: boolean;
            status?: OVH.hosting.web.database.dump.StatusEnum;
            taskId?: number;
            type?: OVH.hosting.web.database.dump.DateEnum;
            url?: string;
        }
        //hosting.web.email
        // fullName: hosting.web.email.email
        export interface email {
            bounce?: number;
            email?: string;
            maxPerDay?: number;
            sent?: number;
            sentToday?: number;
            state?: OVH.hosting.web.mail.StateEnum;
        }
        //hosting.web.envVar
        // fullName: hosting.web.envVar.envVar
        export interface envVar {
            key?: string;
            status?: OVH.hosting.web.envVar.StatusEnum;
            taskId?: number;
            type?: OVH.hosting.web.envVar.TypeEnum;
            value?: string;
        }
        export namespace envVar {
            //hosting.web.envVar.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
            //hosting.web.envVar.TypeEnum
            export type TypeEnum = "integer" | "password" | "string"
        }
        //hosting.web.extrasqlperso
        // fullName: hosting.web.extrasqlperso.extrasqlperso
        export interface extrasqlperso {
            database?: number;
            name?: string;
            size?: OVH.complexType.UnitAndValue<number>;
            status?: string;
            taskId?: number;
        }
        //hosting.web.freedom
        // fullName: hosting.web.freedom.freedom
        export interface freedom {
            domain?: string;
            status?: OVH.hosting.web.freedom.StatusEnum;
            type?: string;
        }
        export namespace freedom {
            //hosting.web.freedom.StatusEnum
            export type StatusEnum = "blockedByCustomer" | "blockedBySystem" | "ok" | "preset"
        }
        export namespace hostedssl {
            //hosting.web.hostedssl.ReportValueEnum
            export type ReportValueEnum = "completed" | "in-progress" | "non-completed" | "non-required" | "not-applicable" | "not-provided"
            //hosting.web.hostedssl.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "importing" | "regenerating"
        }
        //hosting.web.indy
        // fullName: hosting.web.indy.indy
        export interface indy {
            attachedDomains?: string[];
            home?: string;
            login?: string;
            state?: OVH.hosting.web.user.StateEnum;
        }
        export namespace localSeo {
            //hosting.web.localSeo.DirectoriesList
            // fullName: hosting.web.localSeo.DirectoriesList.DirectoriesList
            export interface DirectoriesList {
                navigationSystems?: OVH.hosting.web.localSeo.Directory[];
                searchEngines?: OVH.hosting.web.localSeo.Directory[];
                socialNetworks?: OVH.hosting.web.localSeo.Directory[];
            }
            //hosting.web.localSeo.Directory
            // fullName: hosting.web.localSeo.Directory.Directory
            export interface Directory {
                code?: string;
                displayName?: string;
            }
            //hosting.web.localSeo.EmailAvailability
            // fullName: hosting.web.localSeo.EmailAvailability.EmailAvailability
            export interface EmailAvailability {
                availability?: OVH.hosting.web.localSeo.account.EmailAvailabilityEnum;
                serviceName?: string;
            }
            //hosting.web.localSeo.FieldStatusEnum
            export type FieldStatusEnum = "MATCH" | "MISMATCH" | "MISSING" | "NOT_APPLICABLE" | "PRESENT"
            //hosting.web.localSeo.FlowStatusEnum
            export type FlowStatusEnum = "ALL_INFORMATION_SUBMITTED" | "DONT_REMOVE" | "INACTIVE" | "MANUALLY_DEACTIVATED" | "NEEDS_REVIEW" | "NOT_SUPPORTED" | "NO_ACTION_NEEDED" | "REMOVAL_NEEDED" | "REMOVAL_REVIEW_NEEDED" | "REMOVAL_SUBMITTED" | "REMOVED" | "SUBMISSION_NEEDED" | "WAITING_DIRECTORY_ACTION" | "WAITING_USER_ACTION"
            //hosting.web.localSeo.ListingStatusEnum
            export type ListingStatusEnum = "IN_SYNC" | "NOT_FOUND" | "NOT_IN_SYNC" | "NOT_SUPPORTED" | "NO_ONLINE_LISTING" | "TECHNICAL_PROBLEMS"
            //hosting.web.localSeo.SearchData
            // fullName: hosting.web.localSeo.SearchData.SearchData
            export interface SearchData {
                city?: string;
                country?: string;
                id?: number;
                name?: string;
                province?: string;
                street?: string;
                streetNo?: string;
                token?: string;
                zip?: string;
            }
            //hosting.web.localSeo.VisibilityCheckResponse
            // fullName: hosting.web.localSeo.VisibilityCheckResponse.VisibilityCheckResponse
            export interface VisibilityCheckResponse {
                alreadyManaged?: boolean;
                searchData?: OVH.hosting.web.localSeo.SearchData;
            }
            //hosting.web.localSeo.VisibilityCheckResultResponse
            // fullName: hosting.web.localSeo.VisibilityCheckResultResponse.VisibilityCheckResultResponse
            export interface VisibilityCheckResultResponse {
                city?: string;
                cityStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                country?: string;
                countryStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                dateCreated?: string;
                directoryType?: string;
                email?: string;
                emailStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                flowStatus?: OVH.hosting.web.localSeo.FlowStatusEnum;
                listingId?: string;
                listingUrl?: string;
                name?: string;
                nameStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                phone?: string;
                phoneStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                province?: string;
                provinceStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                street?: string;
                streetAndNo?: string;
                streetAndNoStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                streetNo?: string;
                streetNoStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                streetStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                streetType?: string;
                streetTypeStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                syncStatus?: OVH.hosting.web.localSeo.ListingStatusEnum;
                website?: string;
                websiteStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
                zip?: string;
                zipStatus?: OVH.hosting.web.localSeo.FieldStatusEnum;
            }
            export namespace account {
                //hosting.web.localSeo.account.EmailAvailabilityEnum
                export type EmailAvailabilityEnum = "available" | "merge" | "nic" | "taken"
                //hosting.web.localSeo.account.StatusEnum
                export type StatusEnum = "created" | "creating" | "deleting" | "updating"
            }
            export namespace location {
                //hosting.web.localSeo.location.CountryEnum
                export type CountryEnum = "FR"
                //hosting.web.localSeo.location.OfferEnum
                export type OfferEnum = "normal"
                //hosting.web.localSeo.location.StatusEnum
                export type StatusEnum = "created" | "creating" | "deleting" | "updating"
            }
        }
        //hosting.web.localSeo_account
        // fullName: hosting.web.localSeo_account.localSeo_account
        export interface localSeo_account {
            creationDate?: string;
            email?: string;
            id?: number;
            lastUpdate?: string;
            status?: OVH.hosting.web.localSeo.account.StatusEnum;
            taskId?: number;
        }
        //hosting.web.localSeo_location
        // fullName: hosting.web.localSeo_location.localSeo_location
        export interface localSeo_location {
            accountId?: number;
            address?: string;
            country?: OVH.hosting.web.localSeo.location.CountryEnum;
            creationDate?: string;
            id?: number;
            lastUpdate?: string;
            name?: string;
            offer?: OVH.hosting.web.localSeo.location.OfferEnum;
            status?: OVH.hosting.web.localSeo.location.StatusEnum;
            taskId?: number;
        }
        export namespace mail {
            //hosting.web.mail.ActionEnum
            export type ActionEnum = "BLOCK" | "PURGE" | "UNBLOCK"
            //hosting.web.mail.Bounce
            // fullName: hosting.web.mail.Bounce.Bounce
            export interface Bounce {
                date?: string;
                message?: string;
                to?: string;
            }
            //hosting.web.mail.StateEnum
            export type StateEnum = "bounce" | "force" | "ko" | "ok" | "purging" | "spam"
            //hosting.web.mail.VolumeHistory
            // fullName: hosting.web.mail.VolumeHistory.VolumeHistory
            export interface VolumeHistory {
                date?: string;
                volume?: number;
            }
        }
        //hosting.web.module
        // fullName: hosting.web.module.module
        export interface module {
            adminFolder?: string;
            adminName?: string;
            creationDate?: string;
            dependencies?: OVH.hosting.web.module.DependencyType[];
            id?: number;
            language?: OVH.hosting.web.module.LanguageEnum;
            lastUpdate?: string;
            moduleId?: number;
            path?: string;
            status?: OVH.hosting.web.module.StatusEnum;
            targetUrl?: string;
            taskId?: number;
        }
        export namespace module {
            //hosting.web.module.AdminNameTypeEnum
            export type AdminNameTypeEnum = "email" | "string"
            //hosting.web.module.BranchEnum
            export type BranchEnum = "old" | "stable" | "testing"
            //hosting.web.module.DependencyType
            // fullName: hosting.web.module.DependencyType.DependencyType
            export interface DependencyType {
                name?: string;
                password?: string;
                port?: number;
                prefix?: string;
                server?: string;
                type?: OVH.hosting.web.module.DependencyTypeEnum;
                user?: string;
            }
            //hosting.web.module.DependencyTypeEnum
            export type DependencyTypeEnum = "mysql"
            //hosting.web.module.LanguageEnum
            export type LanguageEnum = "cz" | "de" | "en" | "es" | "fi" | "fr" | "it" | "lt" | "nl" | "pl" | "pt"
            //hosting.web.module.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
        //hosting.web.ovhConfig
        // fullName: hosting.web.ovhConfig.ovhConfig
        export interface ovhConfig {
            container?: string;
            creationDate?: string;
            engineName?: OVH.hosting.web.ovhConfig.EngineNameEnum;
            engineVersion?: OVH.hosting.web.ovhConfig.EngineVersionEnum;
            environment?: OVH.hosting.web.ovhConfig.EnvironmentEnum;
            fileExist?: boolean;
            historical?: boolean;
            httpFirewall?: OVH.hosting.web.ovhConfig.HttpFirewallEnum;
            id?: number;
            path?: string;
            status?: OVH.hosting.web.ovhConfig.StatusEnum;
            taskId?: number;
        }
        export namespace ovhConfig {
            //hosting.web.ovhConfig.AvailableEngineVersionEnum
            export type AvailableEngineVersionEnum = "5.4" | "5.5" | "5.6" | "7.0" | "7.1" | "7.2" | "7.3"
            //hosting.web.ovhConfig.EngineNameEnum
            export type EngineNameEnum = "php" | "phpcgi"
            //hosting.web.ovhConfig.EngineVersionEnum
            export type EngineVersionEnum = "4.4" | "5.0" | "5.1" | "5.2" | "5.3" | "5.4" | "5.5" | "5.6" | "7.0" | "7.1" | "7.2" | "7.3" | "AUTO"
            //hosting.web.ovhConfig.EnvironmentEnum
            export type EnvironmentEnum = "development" | "production"
            //hosting.web.ovhConfig.HttpFirewallEnum
            export type HttpFirewallEnum = "none" | "security"
            //hosting.web.ovhConfig.StatusEnum
            export type StatusEnum = "created" | "rollbacking" | "updating"
        }
        export namespace ovhconfig {
            //hosting.web.ovhconfig.ContainerEnum
            export type ContainerEnum = "jessie.i386" | "legacy" | "stable" | "testing"
        }
        //hosting.web.ownLogs
        // fullName: hosting.web.ownLogs.ownLogs
        export interface ownLogs {
            fqdn?: string;
            id?: number;
            status?: OVH.hosting.web.ownLogs.StatusEnum;
            taskId?: number;
        }
        export namespace ownLogs {
            //hosting.web.ownLogs.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting"
        }
        //hosting.web.runtime
        // fullName: hosting.web.runtime.runtime
        export interface runtime {
            appBootstrap?: string;
            appEnv?: OVH.hosting.web.runtime.EnvEnum;
            creationDate?: string;
            id?: number;
            isDefault?: boolean;
            isDeletable?: boolean;
            lastUpdate?: string;
            name?: string;
            publicDir?: string;
            status?: OVH.hosting.web.runtime.StateEnum;
            taskId?: number;
            type?: OVH.hosting.web.runtime.TypeEnum;
        }
        export namespace runtime {
            //hosting.web.runtime.EnvEnum
            export type EnvEnum = "development" | "production"
            //hosting.web.runtime.StateEnum
            export type StateEnum = "created" | "creating" | "deleting" | "updating"
            //hosting.web.runtime.TypeEnum
            export type TypeEnum = "nodejs-10" | "nodejs-11" | "nodejs-8" | "nodejs-9" | "phpfpm-5.6" | "phpfpm-7.0" | "phpfpm-7.1" | "phpfpm-7.2" | "phpfpm-7.3" | "python-2" | "python-3" | "ruby-2.4" | "ruby-2.5" | "ruby-2.6"
        }
        //hosting.web.ssl
        // fullName: hosting.web.ssl.ssl
        export interface ssl {
            isReportable?: boolean;
            provider?: string;
            regenerable?: boolean;
            status?: OVH.hosting.web.hostedssl.StatusEnum;
            taskId?: number;
            type?: string;
        }
        //hosting.web.ssl_report
        // fullName: hosting.web.ssl_report.ssl_report
        export interface ssl_report {
            certificateSigningRequestStatus?: OVH.hosting.web.hostedssl.ReportValueEnum;
            domainControlValidationStatus?: OVH.hosting.web.hostedssl.ReportValueEnum;
            organizationValidationStatus?: OVH.hosting.web.hostedssl.ReportValueEnum;
            phoneCallApprovalStatus?: OVH.hosting.web.hostedssl.ReportValueEnum;
            providerOrderId?: string;
            termsAndConditionsAcceptanceStatus?: OVH.hosting.web.hostedssl.ReportValueEnum;
            tradeNameVerificationStatus?: OVH.hosting.web.hostedssl.ReportValueEnum;
        }
        //hosting.web.task
        // fullName: hosting.web.task.task
        export interface task {
            doneDate?: string;
            function?: string;
            id?: number;
            lastUpdate?: string;
            objectId?: string;
            objectType?: OVH.hosting.web.task.ObjectTypeEnum;
            startDate?: string;
            status?: OVH.hosting.web.task.StatusEnum;
        }
        export namespace task {
            //hosting.web.task.ObjectTypeEnum
            export type ObjectTypeEnum = "Abuse" | "AttachedDomain" | "BlockedIp" | "Cdn" | "Cron" | "Database" | "Dump" | "EnvVar" | "Filerz" | "Hostedssl" | "Hosting" | "Indy" | "Infra" | "Minor" | "Module" | "Other" | "OvhConfig" | "OvhOrg" | "OwnLogs" | "Runtime" | "Scan" | "Sqlperso" | "User" | "UserLogs" | "Web" | "Webd"
            //hosting.web.task.StatusEnum
            export type StatusEnum = "cancelled" | "doing" | "done" | "error" | "init" | "todo"
        }
        //hosting.web.user
        // fullName: hosting.web.user.user
        export interface user {
            home?: string;
            isPrimaryAccount?: boolean;
            login?: string;
            serviceManagementCredentials?: OVH.hosting.web.user.ServiceCredentials;
            sshState?: OVH.hosting.web.user.SshStateEnum;
            state?: OVH.hosting.web.user.StateEnum;
            status?: OVH.hosting.web.user.StatusEnum;
            taskId?: number;
        }
        export namespace user {
            //hosting.web.user.Credentials
            // fullName: hosting.web.user.Credentials.Credentials
            export interface Credentials {
                port?: number;
                url?: string;
                user?: string;
            }
            //hosting.web.user.ServiceCredentials
            // fullName: hosting.web.user.ServiceCredentials.ServiceCredentials
            export interface ServiceCredentials {
                ftp?: OVH.hosting.web.user.Credentials;
                ssh?: OVH.hosting.web.user.Credentials;
            }
            //hosting.web.user.SshStateEnum
            export type SshStateEnum = "active" | "none" | "sftponly"
            //hosting.web.user.StateEnum
            export type StateEnum = "off" | "rw"
            //hosting.web.user.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
        //hosting.web.userLogs
        // fullName: hosting.web.userLogs.userLogs
        export interface userLogs {
            creationDate?: string;
            description?: string;
            login?: string;
            ownLogsId?: number;
            status?: OVH.hosting.web.userLogs.StatusEnum;
            taskId?: number;
        }
        export namespace userLogs {
            //hosting.web.userLogs.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
    }
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /hosting
export interface Hosting {
    web:  {
        // GET /hosting/web
        $get(): Promise<string[]>;
        attachedDomain:  {
            // GET /hosting/web/attachedDomain
            $get(param?: {domain: string}): Promise<string[]>;
        }
        availableOffer:  {
            // GET /hosting/web/availableOffer
            $get(param?: {domain: string}): Promise<hosting.web.OfferEnum[]>;
        }
        incident:  {
            // GET /hosting/web/incident
            $get(): Promise<string[]>;
        }
        localSeo:  {
            directoriesList:  {
                // GET /hosting/web/localSeo/directoriesList
                $get(param?: {country: hosting.web.localSeo.location.CountryEnum, offer: hosting.web.localSeo.location.OfferEnum}): Promise<hosting.web.localSeo.DirectoriesList>;
            }
            emailAvailability:  {
                // GET /hosting/web/localSeo/emailAvailability
                $get(param?: {email: string}): Promise<hosting.web.localSeo.EmailAvailability>;
            }
            visibilityCheck:  {
                // POST /hosting/web/localSeo/visibilityCheck
                $post(body?: {country: hosting.web.localSeo.location.CountryEnum, name: string, street: string, zip: string}): Promise<hosting.web.localSeo.VisibilityCheckResponse>;
            }
            visibilityCheckResult:  {
                // GET /hosting/web/localSeo/visibilityCheckResult
                $get(param?: {directory: string, id: number, token: string}): Promise<hosting.web.localSeo.VisibilityCheckResultResponse[]>;
            }
        }
        moduleList:  {
            // GET /hosting/web/moduleList
            $get(param?: {active?: boolean, branch?: hosting.web.module.BranchEnum, latest?: boolean}): Promise<number[]>;
            [keys: string]: {
                // GET /hosting/web/moduleList/{id}
                $get(): Promise<hosting.web.ModuleList>;
            } | any
        }
        offerCapabilities:  {
            // GET /hosting/web/offerCapabilities
            $get(param?: {offer: hosting.web.OfferCapabilitiesEnum}): Promise<hosting.web.Capabilities>;
        }
        [keys: string]: {
            // GET /hosting/web/{serviceName}
            $get(): Promise<hosting.web.Service>;
            // PUT /hosting/web/{serviceName}
            $put(body?: {body: hosting.web.Service}): Promise<void>;
            activatePrivateDatabase:  {
                // POST /hosting/web/{serviceName}/activatePrivateDatabase
                $post(body?: {ram: hosting.PrivateDatabase.AvailableRamSizeEnum, version: hosting.PrivateDatabase.OrderableVersionEnum}): Promise<hosting.web.task>;
            }
            attachedDomain:  {
                // GET /hosting/web/{serviceName}/attachedDomain
                $get(param?: {domain?: string, path?: string}): Promise<string[]>;
                // POST /hosting/web/{serviceName}/attachedDomain
                $post(body?: {cdn?: hosting.web.attachedDomain.CdnEnum, domain: string, firewall?: hosting.web.attachedDomain.FirewallEnum, ownLog?: string, path: string, runtimeId?: number, ssl?: boolean}): Promise<hosting.web.task>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/attachedDomain/{domain}
                    $delete(): Promise<hosting.web.task>;
                    // GET /hosting/web/{serviceName}/attachedDomain/{domain}
                    $get(): Promise<hosting.web.attachedDomain>;
                    // PUT /hosting/web/{serviceName}/attachedDomain/{domain}
                    $put(body?: {body: hosting.web.attachedDomain}): Promise<void>;
                    purgeCache:  {
                        // POST /hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache
                        $post(): Promise<hosting.web.task>;
                    }
                    restart:  {
                        // POST /hosting/web/{serviceName}/attachedDomain/{domain}/restart
                        $post(): Promise<hosting.web.task>;
                    }
                } | any
            }
            boostHistory:  {
                // GET /hosting/web/{serviceName}/boostHistory
                $get(param?: {date?: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /hosting/web/{serviceName}/boostHistory/{date}
                    $get(): Promise<hosting.web.boostHistory>;
                } | any
            }
            cdn:  {
                // GET /hosting/web/{serviceName}/cdn
                $get(): Promise<hosting.web.cdn>;
                serviceInfos:  {
                    // GET /hosting/web/{serviceName}/cdn/serviceInfos
                    $get(): Promise<services.Service>;
                }
                serviceInfosUpdate:  {
                    // POST /hosting/web/{serviceName}/cdn/serviceInfosUpdate
                    $post(body?: {renew: service.RenewType}): Promise<void>;
                }
                terminate:  {
                    // POST /hosting/web/{serviceName}/cdn/terminate
                    $post(): Promise<string>;
                }
            }
            changeContact:  {
                // POST /hosting/web/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination:  {
                // POST /hosting/web/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            cron:  {
                // GET /hosting/web/{serviceName}/cron
                $get(param?: {command?: string, description?: string, email?: string, language?: hosting.web.cron.LanguageEnum}): Promise<number[]>;
                // POST /hosting/web/{serviceName}/cron
                $post(body?: {command: string, description?: string, email?: string, frequency: string, language: hosting.web.cron.LanguageEnum, status?: hosting.web.cron.StatusEnum}): Promise<string>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/cron/{id}
                    $delete(): Promise<string>;
                    // GET /hosting/web/{serviceName}/cron/{id}
                    $get(): Promise<hosting.web.cron>;
                    // PUT /hosting/web/{serviceName}/cron/{id}
                    $put(body?: {body: hosting.web.cron}): Promise<void>;
                } | any
            }
            cronAvailableLanguage:  {
                // GET /hosting/web/{serviceName}/cronAvailableLanguage
                $get(): Promise<hosting.web.cron.LanguageEnum[]>;
            }
            database:  {
                // GET /hosting/web/{serviceName}/database
                $get(param?: {mode?: hosting.web.database.ModeEnum, name?: string, server?: string, type?: hosting.web.database.DatabaseTypeEnum, user?: string}): Promise<string[]>;
                // POST /hosting/web/{serviceName}/database
                $post(body?: {capabilitie: hosting.web.database.DatabaseCapabilitiesTypeEnum, password?: string, quota?: hosting.web.database.ExtraSqlQuotaEnum, type: hosting.web.database.DatabaseTypeEnum, user: string, version?: hosting.web.database.VersionEnum}): Promise<hosting.web.task>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/database/{name}
                    $delete(): Promise<hosting.web.task>;
                    // GET /hosting/web/{serviceName}/database/{name}
                    $get(): Promise<hosting.web.database>;
                    capabilities:  {
                        // GET /hosting/web/{serviceName}/database/{name}/capabilities
                        $get(): Promise<hosting.web.database.DatabaseCapabilities>;
                    }
                    changePassword:  {
                        // POST /hosting/web/{serviceName}/database/{name}/changePassword
                        $post(body?: {password: string}): Promise<hosting.web.task>;
                    }
                    dump:  {
                        // GET /hosting/web/{serviceName}/database/{name}/dump
                        $get(param?: {creationDate?: string, deletionDate?: string, type?: hosting.web.database.dump.DateEnum}): Promise<number[]>;
                        // POST /hosting/web/{serviceName}/database/{name}/dump
                        $post(body?: {date: hosting.web.database.dump.DateEnum, sendEmail?: boolean}): Promise<hosting.web.task>;
                        [keys: string]: {
                            // DELETE /hosting/web/{serviceName}/database/{name}/dump/{id}
                            $delete(): Promise<hosting.web.task>;
                            // GET /hosting/web/{serviceName}/database/{name}/dump/{id}
                            $get(): Promise<hosting.web.database_dump>;
                            restore:  {
                                // POST /hosting/web/{serviceName}/database/{name}/dump/{id}/restore
                                $post(): Promise<hosting.web.task>;
                            }
                        } | any
                    }
                    import:  {
                        // POST /hosting/web/{serviceName}/database/{name}/import
                        $post(body?: {documentId: string, flushDatabase?: boolean, sendEmail?: boolean}): Promise<hosting.web.task>;
                    }
                    request:  {
                        // POST /hosting/web/{serviceName}/database/{name}/request
                        $post(body?: {action: hosting.web.database.RequestActionEnum}): Promise<hosting.web.task>;
                    }
                    restore:  {
                        // POST /hosting/web/{serviceName}/database/{name}/restore
                        $post(body?: {date: hosting.web.database.dump.DateEnum, sendEmail?: boolean}): Promise<hosting.web.task>;
                    }
                    statistics:  {
                        // GET /hosting/web/{serviceName}/database/{name}/statistics
                        $get(param?: {period: hosting.web.StatisticsPeriodEnum, type: hosting.web.database.StatisticsTypeEnum}): Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
                    }
                } | any
            }
            databaseAvailableType:  {
                // GET /hosting/web/{serviceName}/databaseAvailableType
                $get(): Promise<hosting.web.database.DatabaseTypeEnum[]>;
            }
            databaseAvailableVersion:  {
                // GET /hosting/web/{serviceName}/databaseAvailableVersion
                $get(param?: {type: hosting.web.database.DatabaseTypeEnum}): Promise<hosting.web.database.AvailableVersionStruct>;
            }
            databaseCreationCapabilities:  {
                // GET /hosting/web/{serviceName}/databaseCreationCapabilities
                $get(): Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
            }
            dump:  {
                // GET /hosting/web/{serviceName}/dump
                $get(param?: {creationDate?: string, databaseName?: string, deletionDate?: string, orphan?: boolean}): Promise<number[]>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/dump/{id}
                    $delete(): Promise<hosting.web.task>;
                    // GET /hosting/web/{serviceName}/dump/{id}
                    $get(): Promise<hosting.web.dump>;
                } | any
            }
            email:  {
                // GET /hosting/web/{serviceName}/email
                $get(): Promise<hosting.web.email>;
                // PUT /hosting/web/{serviceName}/email
                $put(body?: {body: hosting.web.email}): Promise<void>;
                bounces:  {
                    // GET /hosting/web/{serviceName}/email/bounces
                    $get(param?: {limit: number}): Promise<hosting.web.mail.Bounce[]>;
                }
                request:  {
                    // POST /hosting/web/{serviceName}/email/request
                    $post(body?: {action: hosting.web.mail.ActionEnum}): Promise<string>;
                }
                volumes:  {
                    // GET /hosting/web/{serviceName}/email/volumes
                    $get(): Promise<hosting.web.mail.VolumeHistory[]>;
                }
            }
            envVar:  {
                // GET /hosting/web/{serviceName}/envVar
                $get(param?: {type?: hosting.web.envVar.TypeEnum}): Promise<string[]>;
                // POST /hosting/web/{serviceName}/envVar
                $post(body?: {key: string, type: hosting.web.envVar.TypeEnum, value: string}): Promise<hosting.web.task>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/envVar/{key}
                    $delete(): Promise<hosting.web.task>;
                    // GET /hosting/web/{serviceName}/envVar/{key}
                    $get(): Promise<hosting.web.envVar>;
                    // PUT /hosting/web/{serviceName}/envVar/{key}
                    $put(body?: {body: hosting.web.envVar}): Promise<void>;
                } | any
            }
            extraSqlPerso:  {
                // GET /hosting/web/{serviceName}/extraSqlPerso
                $get(): Promise<string[]>;
                [keys: string]: {
                    // GET /hosting/web/{serviceName}/extraSqlPerso/{name}
                    $get(): Promise<hosting.web.extrasqlperso>;
                    databases:  {
                        // GET /hosting/web/{serviceName}/extraSqlPerso/{name}/databases
                        $get(): Promise<string[]>;
                    }
                    serviceInfos:  {
                        // GET /hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos
                        $get(): Promise<services.Service>;
                    }
                    serviceInfosUpdate:  {
                        // POST /hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate
                        $post(body?: {renew: service.RenewType}): Promise<void>;
                    }
                    terminate:  {
                        // POST /hosting/web/{serviceName}/extraSqlPerso/{name}/terminate
                        $post(): Promise<string>;
                    }
                } | any
            }
            freedom:  {
                // GET /hosting/web/{serviceName}/freedom
                $get(param?: {status?: hosting.web.freedom.StatusEnum}): Promise<string[]>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/freedom/{domain}
                    $delete(): Promise<void>;
                    // GET /hosting/web/{serviceName}/freedom/{domain}
                    $get(): Promise<hosting.web.freedom>;
                } | any
            }
            indy:  {
                // GET /hosting/web/{serviceName}/indy
                $get(param?: {login?: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /hosting/web/{serviceName}/indy/{login}
                    $get(): Promise<hosting.web.indy>;
                } | any
            }
            localSeo:  {
                account:  {
                    // GET /hosting/web/{serviceName}/localSeo/account
                    $get(param?: {email?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /hosting/web/{serviceName}/localSeo/account/{id}
                        $get(): Promise<hosting.web.localSeo_account>;
                        login:  {
                            // POST /hosting/web/{serviceName}/localSeo/account/{id}/login
                            $post(): Promise<string>;
                        }
                    } | any
                }
                emailAvailability:  {
                    // GET /hosting/web/{serviceName}/localSeo/emailAvailability
                    $get(param?: {email: string}): Promise<hosting.web.localSeo.EmailAvailability>;
                }
                location:  {
                    // GET /hosting/web/{serviceName}/localSeo/location
                    $get(): Promise<number[]>;
                    [keys: string]: {
                        // GET /hosting/web/{serviceName}/localSeo/location/{id}
                        $get(): Promise<hosting.web.localSeo_location>;
                        serviceInfos:  {
                            // GET /hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos
                            $get(): Promise<services.Service>;
                        }
                        serviceInfosUpdate:  {
                            // POST /hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate
                            $post(body?: {renew: service.RenewType}): Promise<void>;
                        }
                        terminate:  {
                            // POST /hosting/web/{serviceName}/localSeo/location/{id}/terminate
                            $post(): Promise<string>;
                        }
                    } | any
                }
            }
            module:  {
                // GET /hosting/web/{serviceName}/module
                $get(): Promise<number[]>;
                // POST /hosting/web/{serviceName}/module
                $post(body?: {adminName?: string, adminPassword?: string, dependencies?: hosting.web.module.DependencyType[], domain?: string, language?: hosting.web.module.LanguageEnum, moduleId: number, path?: string}): Promise<hosting.web.task>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/module/{id}
                    $delete(): Promise<hosting.web.task>;
                    // GET /hosting/web/{serviceName}/module/{id}
                    $get(): Promise<hosting.web.module>;
                    changePassword:  {
                        // POST /hosting/web/{serviceName}/module/{id}/changePassword
                        $post(): Promise<hosting.web.task>;
                    }
                } | any
            }
            ovhConfig:  {
                // GET /hosting/web/{serviceName}/ovhConfig
                $get(param?: {historical?: boolean, path?: string}): Promise<number[]>;
                [keys: string]: {
                    // GET /hosting/web/{serviceName}/ovhConfig/{id}
                    $get(): Promise<hosting.web.ovhConfig>;
                    changeConfiguration:  {
                        // POST /hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration
                        $post(body?: {container?: hosting.web.ovhconfig.ContainerEnum, engineName?: hosting.web.ovhConfig.EngineNameEnum, engineVersion?: hosting.web.ovhConfig.AvailableEngineVersionEnum, environment?: hosting.web.ovhConfig.EnvironmentEnum, httpFirewall?: hosting.web.ovhConfig.HttpFirewallEnum}): Promise<hosting.web.task>;
                    }
                    rollback:  {
                        // POST /hosting/web/{serviceName}/ovhConfig/{id}/rollback
                        $post(body?: {rollbackId: number}): Promise<hosting.web.task>;
                    }
                } | any
            }
            ovhConfigRefresh:  {
                // POST /hosting/web/{serviceName}/ovhConfigRefresh
                $post(): Promise<hosting.web.task>;
            }
            ownLogs:  {
                // GET /hosting/web/{serviceName}/ownLogs
                $get(): Promise<number[]>;
                [keys: string]: {
                    // GET /hosting/web/{serviceName}/ownLogs/{id}
                    $get(): Promise<hosting.web.ownLogs>;
                    userLogs:  {
                        // GET /hosting/web/{serviceName}/ownLogs/{id}/userLogs
                        $get(param?: {login?: string}): Promise<string[]>;
                        // POST /hosting/web/{serviceName}/ownLogs/{id}/userLogs
                        $post(body?: {description: string, login: string, ownLogsId?: number, password: string}): Promise<string>;
                        [keys: string]: {
                            // DELETE /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}
                            $delete(): Promise<string>;
                            // GET /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}
                            $get(): Promise<hosting.web.userLogs>;
                            // PUT /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}
                            $put(body?: {body: hosting.web.userLogs}): Promise<void>;
                            changePassword:  {
                                // POST /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword
                                $post(body?: {password: string}): Promise<string>;
                            }
                        } | any
                    }
                } | any
            }
            privateDatabaseCreationCapabilities:  {
                // GET /hosting/web/{serviceName}/privateDatabaseCreationCapabilities
                $get(): Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
            }
            privateDatabases:  {
                // GET /hosting/web/{serviceName}/privateDatabases
                $get(): Promise<string[]>;
            }
            request:  {
                // POST /hosting/web/{serviceName}/request
                $post(body?: {action: hosting.web.RequestActionEnum}): Promise<hosting.web.task>;
            }
            requestBoost:  {
                // POST /hosting/web/{serviceName}/requestBoost
                $post(body?: {offer?: hosting.web.OfferEnum}): Promise<hosting.web.task>;
            }
            restoreSnapshot:  {
                // POST /hosting/web/{serviceName}/restoreSnapshot
                $post(body?: {backup: hosting.web.backup.TypeEnum}): Promise<hosting.web.task>;
            }
            runtime:  {
                // GET /hosting/web/{serviceName}/runtime
                $get(param?: {name?: string, type?: hosting.web.runtime.TypeEnum}): Promise<number[]>;
                // POST /hosting/web/{serviceName}/runtime
                $post(body?: {appBootstrap?: string, appEnv?: hosting.web.runtime.EnvEnum, attachedDomains?: string[], isDefault?: boolean, name?: string, publicDir?: string, type?: hosting.web.runtime.TypeEnum}): Promise<hosting.web.task>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/runtime/{id}
                    $delete(): Promise<hosting.web.task>;
                    // GET /hosting/web/{serviceName}/runtime/{id}
                    $get(): Promise<hosting.web.runtime>;
                    // PUT /hosting/web/{serviceName}/runtime/{id}
                    $put(body?: {body: hosting.web.runtime}): Promise<void>;
                    attachedDomains:  {
                        // GET /hosting/web/{serviceName}/runtime/{id}/attachedDomains
                        $get(): Promise<string[]>;
                    }
                } | any
            }
            runtimeAvailableTypes:  {
                // GET /hosting/web/{serviceName}/runtimeAvailableTypes
                $get(param?: {language?: string}): Promise<hosting.web.runtime.TypeEnum[]>;
            }
            serviceInfos:  {
                // GET /hosting/web/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /hosting/web/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            ssl:  {
                // DELETE /hosting/web/{serviceName}/ssl
                $delete(): Promise<hosting.web.ssl>;
                // GET /hosting/web/{serviceName}/ssl
                $get(): Promise<hosting.web.ssl>;
                // POST /hosting/web/{serviceName}/ssl
                $post(body?: {certificate?: string, chain?: string, key?: string}): Promise<hosting.web.ssl>;
                domains:  {
                    // GET /hosting/web/{serviceName}/ssl/domains
                    $get(): Promise<string[]>;
                }
                regenerate:  {
                    // POST /hosting/web/{serviceName}/ssl/regenerate
                    $post(): Promise<hosting.web.ssl>;
                }
                report:  {
                    // GET /hosting/web/{serviceName}/ssl/report
                    $get(): Promise<hosting.web.ssl_report>;
                }
            }
            statistics:  {
                // GET /hosting/web/{serviceName}/statistics
                $get(param?: {period: hosting.web.StatisticsPeriodEnum, type: hosting.web.StatisticsTypeEnum}): Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
            }
            tasks:  {
                // GET /hosting/web/{serviceName}/tasks
                $get(param?: {function_?: string, status?: hosting.web.task.StatusEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /hosting/web/{serviceName}/tasks/{id}
                    $get(): Promise<hosting.web.task>;
                } | any
            }
            terminate:  {
                // POST /hosting/web/{serviceName}/terminate
                $post(): Promise<string>;
            }
            token:  {
                // GET /hosting/web/{serviceName}/token
                $get(): Promise<string>;
            }
            user:  {
                // GET /hosting/web/{serviceName}/user
                $get(param?: {home?: string, login?: string}): Promise<string[]>;
                // POST /hosting/web/{serviceName}/user
                $post(body?: {home: string, login: string, password: string, sshState?: hosting.web.user.SshStateEnum}): Promise<hosting.web.task>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/user/{login}
                    $delete(): Promise<hosting.web.task>;
                    // GET /hosting/web/{serviceName}/user/{login}
                    $get(): Promise<hosting.web.user>;
                    // PUT /hosting/web/{serviceName}/user/{login}
                    $put(body?: {body: hosting.web.user}): Promise<void>;
                    changePassword:  {
                        // POST /hosting/web/{serviceName}/user/{login}/changePassword
                        $post(body?: {password: string}): Promise<hosting.web.task>;
                    }
                } | any
            }
            userLogs:  {
                // GET /hosting/web/{serviceName}/userLogs
                $get(param?: {login?: string}): Promise<string[]>;
                // POST /hosting/web/{serviceName}/userLogs
                $post(body?: {description: string, login: string, ownLogsId?: number, password: string}): Promise<string>;
                [keys: string]: {
                    // DELETE /hosting/web/{serviceName}/userLogs/{login}
                    $delete(): Promise<string>;
                    // GET /hosting/web/{serviceName}/userLogs/{login}
                    $get(): Promise<hosting.web.userLogs>;
                    // PUT /hosting/web/{serviceName}/userLogs/{login}
                    $put(body?: {body: hosting.web.userLogs}): Promise<void>;
                    changePassword:  {
                        // POST /hosting/web/{serviceName}/userLogs/{login}/changePassword
                        $post(body?: {password: string}): Promise<string>;
                    }
                } | any
            }
            userLogsToken:  {
                // GET /hosting/web/{serviceName}/userLogsToken
                $get(param?: {attachedDomain?: string, remoteCheck?: boolean, ttl?: number}): Promise<string>;
            }
        } | any
    }
}
// Api
type PathsHostingWebGET = '/hosting/web' |
  '/hosting/web/attachedDomain' |
  '/hosting/web/availableOffer' |
  '/hosting/web/incident' |
  '/hosting/web/localSeo/directoriesList' |
  '/hosting/web/localSeo/emailAvailability' |
  '/hosting/web/localSeo/visibilityCheckResult' |
  '/hosting/web/moduleList' |
  '/hosting/web/moduleList/{id}' |
  '/hosting/web/offerCapabilities' |
  '/hosting/web/{serviceName}' |
  '/hosting/web/{serviceName}/attachedDomain' |
  '/hosting/web/{serviceName}/attachedDomain/{domain}' |
  '/hosting/web/{serviceName}/boostHistory' |
  '/hosting/web/{serviceName}/boostHistory/{date}' |
  '/hosting/web/{serviceName}/cdn' |
  '/hosting/web/{serviceName}/cdn/serviceInfos' |
  '/hosting/web/{serviceName}/cron' |
  '/hosting/web/{serviceName}/cron/{id}' |
  '/hosting/web/{serviceName}/cronAvailableLanguage' |
  '/hosting/web/{serviceName}/database' |
  '/hosting/web/{serviceName}/database/{name}' |
  '/hosting/web/{serviceName}/database/{name}/capabilities' |
  '/hosting/web/{serviceName}/database/{name}/dump' |
  '/hosting/web/{serviceName}/database/{name}/dump/{id}' |
  '/hosting/web/{serviceName}/database/{name}/statistics' |
  '/hosting/web/{serviceName}/databaseAvailableType' |
  '/hosting/web/{serviceName}/databaseAvailableVersion' |
  '/hosting/web/{serviceName}/databaseCreationCapabilities' |
  '/hosting/web/{serviceName}/dump' |
  '/hosting/web/{serviceName}/dump/{id}' |
  '/hosting/web/{serviceName}/email' |
  '/hosting/web/{serviceName}/email/bounces' |
  '/hosting/web/{serviceName}/email/volumes' |
  '/hosting/web/{serviceName}/envVar' |
  '/hosting/web/{serviceName}/envVar/{key}' |
  '/hosting/web/{serviceName}/extraSqlPerso' |
  '/hosting/web/{serviceName}/extraSqlPerso/{name}' |
  '/hosting/web/{serviceName}/extraSqlPerso/{name}/databases' |
  '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos' |
  '/hosting/web/{serviceName}/freedom' |
  '/hosting/web/{serviceName}/freedom/{domain}' |
  '/hosting/web/{serviceName}/indy' |
  '/hosting/web/{serviceName}/indy/{login}' |
  '/hosting/web/{serviceName}/localSeo/account' |
  '/hosting/web/{serviceName}/localSeo/account/{id}' |
  '/hosting/web/{serviceName}/localSeo/emailAvailability' |
  '/hosting/web/{serviceName}/localSeo/location' |
  '/hosting/web/{serviceName}/localSeo/location/{id}' |
  '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos' |
  '/hosting/web/{serviceName}/module' |
  '/hosting/web/{serviceName}/module/{id}' |
  '/hosting/web/{serviceName}/ovhConfig' |
  '/hosting/web/{serviceName}/ovhConfig/{id}' |
  '/hosting/web/{serviceName}/ownLogs' |
  '/hosting/web/{serviceName}/ownLogs/{id}' |
  '/hosting/web/{serviceName}/ownLogs/{id}/userLogs' |
  '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' |
  '/hosting/web/{serviceName}/privateDatabaseCreationCapabilities' |
  '/hosting/web/{serviceName}/privateDatabases' |
  '/hosting/web/{serviceName}/runtime' |
  '/hosting/web/{serviceName}/runtime/{id}' |
  '/hosting/web/{serviceName}/runtime/{id}/attachedDomains' |
  '/hosting/web/{serviceName}/runtimeAvailableTypes' |
  '/hosting/web/{serviceName}/serviceInfos' |
  '/hosting/web/{serviceName}/ssl' |
  '/hosting/web/{serviceName}/ssl/domains' |
  '/hosting/web/{serviceName}/ssl/report' |
  '/hosting/web/{serviceName}/statistics' |
  '/hosting/web/{serviceName}/tasks' |
  '/hosting/web/{serviceName}/tasks/{id}' |
  '/hosting/web/{serviceName}/token' |
  '/hosting/web/{serviceName}/user' |
  '/hosting/web/{serviceName}/user/{login}' |
  '/hosting/web/{serviceName}/userLogs' |
  '/hosting/web/{serviceName}/userLogs/{login}' |
  '/hosting/web/{serviceName}/userLogsToken';

type PathsHostingWebPUT = '/hosting/web/{serviceName}' |
  '/hosting/web/{serviceName}/attachedDomain/{domain}' |
  '/hosting/web/{serviceName}/cron/{id}' |
  '/hosting/web/{serviceName}/email' |
  '/hosting/web/{serviceName}/envVar/{key}' |
  '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' |
  '/hosting/web/{serviceName}/runtime/{id}' |
  '/hosting/web/{serviceName}/serviceInfos' |
  '/hosting/web/{serviceName}/user/{login}' |
  '/hosting/web/{serviceName}/userLogs/{login}';

type PathsHostingWebPOST = '/hosting/web/localSeo/visibilityCheck' |
  '/hosting/web/{serviceName}/activatePrivateDatabase' |
  '/hosting/web/{serviceName}/attachedDomain' |
  '/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache' |
  '/hosting/web/{serviceName}/attachedDomain/{domain}/restart' |
  '/hosting/web/{serviceName}/cdn/serviceInfosUpdate' |
  '/hosting/web/{serviceName}/cdn/terminate' |
  '/hosting/web/{serviceName}/changeContact' |
  '/hosting/web/{serviceName}/confirmTermination' |
  '/hosting/web/{serviceName}/cron' |
  '/hosting/web/{serviceName}/database' |
  '/hosting/web/{serviceName}/database/{name}/changePassword' |
  '/hosting/web/{serviceName}/database/{name}/dump' |
  '/hosting/web/{serviceName}/database/{name}/dump/{id}/restore' |
  '/hosting/web/{serviceName}/database/{name}/import' |
  '/hosting/web/{serviceName}/database/{name}/request' |
  '/hosting/web/{serviceName}/database/{name}/restore' |
  '/hosting/web/{serviceName}/email/request' |
  '/hosting/web/{serviceName}/envVar' |
  '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate' |
  '/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate' |
  '/hosting/web/{serviceName}/localSeo/account/{id}/login' |
  '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate' |
  '/hosting/web/{serviceName}/localSeo/location/{id}/terminate' |
  '/hosting/web/{serviceName}/module' |
  '/hosting/web/{serviceName}/module/{id}/changePassword' |
  '/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration' |
  '/hosting/web/{serviceName}/ovhConfig/{id}/rollback' |
  '/hosting/web/{serviceName}/ovhConfigRefresh' |
  '/hosting/web/{serviceName}/ownLogs/{id}/userLogs' |
  '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword' |
  '/hosting/web/{serviceName}/request' |
  '/hosting/web/{serviceName}/requestBoost' |
  '/hosting/web/{serviceName}/restoreSnapshot' |
  '/hosting/web/{serviceName}/runtime' |
  '/hosting/web/{serviceName}/ssl' |
  '/hosting/web/{serviceName}/ssl/regenerate' |
  '/hosting/web/{serviceName}/terminate' |
  '/hosting/web/{serviceName}/user' |
  '/hosting/web/{serviceName}/user/{login}/changePassword' |
  '/hosting/web/{serviceName}/userLogs' |
  '/hosting/web/{serviceName}/userLogs/{login}/changePassword';

type PathsHostingWebDELETE = '/hosting/web/{serviceName}/attachedDomain/{domain}' |
  '/hosting/web/{serviceName}/cron/{id}' |
  '/hosting/web/{serviceName}/database/{name}' |
  '/hosting/web/{serviceName}/database/{name}/dump/{id}' |
  '/hosting/web/{serviceName}/dump/{id}' |
  '/hosting/web/{serviceName}/envVar/{key}' |
  '/hosting/web/{serviceName}/freedom/{domain}' |
  '/hosting/web/{serviceName}/module/{id}' |
  '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' |
  '/hosting/web/{serviceName}/runtime/{id}' |
  '/hosting/web/{serviceName}/ssl' |
  '/hosting/web/{serviceName}/user/{login}' |
  '/hosting/web/{serviceName}/userLogs/{login}';

export class ApiHostingWeb extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the HOSTING service
   * List available services
   */
  public get(path: '/hosting/web'): Promise<string[]>;
  /**
   * Web Hosting
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}', params: {serviceName: string}): Promise<hosting.web.Service>;
  /**
   * List the hosting.web.attachedDomain objects
   * Domains or subdomains attached to your hosting
   */
  public get(path: '/hosting/web/{serviceName}/attachedDomain', params: {serviceName: string, domain?: string, path?: string}): Promise<string[]>;
  /**
   * Virtual service
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', params: {domain: string, serviceName: string}): Promise<hosting.web.attachedDomain>;
  /**
   * List the hosting.web.boostHistory objects
   * History of your hosting boost
   */
  public get(path: '/hosting/web/{serviceName}/boostHistory', params: {serviceName: string, date?: string}): Promise<string[]>;
  /**
   * History of your boost requests
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/boostHistory/{date}', params: {date: string, serviceName: string}): Promise<hosting.web.boostHistory>;
  /**
   * CDN service
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/cdn', params: {serviceName: string}): Promise<hosting.web.cdn>;
  /**
   * serviceInfos operations
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/cdn/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the hosting.web.cron objects
   * Crons on your hosting
   */
  public get(path: '/hosting/web/{serviceName}/cron', params: {serviceName: string, command?: string, description?: string, email?: string, language?: OVH.hosting.web.cron.LanguageEnum}): Promise<number[]>;
  /**
   * Hosting crons
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/cron/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.cron>;
  /**
   * cronAvailableLanguage operations
   * List available cron language
   */
  public get(path: '/hosting/web/{serviceName}/cronAvailableLanguage', params: {serviceName: string}): Promise<hosting.web.cron.LanguageEnum[]>;
  /**
   * List the hosting.web.database objects
   * Databases linked to your hosting
   */
  public get(path: '/hosting/web/{serviceName}/database', params: {serviceName: string, mode?: OVH.hosting.web.database.ModeEnum, name?: string, server?: string, type?: OVH.hosting.web.database.DatabaseTypeEnum, user?: string}): Promise<string[]>;
  /**
   * Database
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/database/{name}', params: {name: string, serviceName: string}): Promise<hosting.web.database>;
  /**
   * capabilities operations
   * Get available capabilities for this database
   */
  public get(path: '/hosting/web/{serviceName}/database/{name}/capabilities', params: {name: string, serviceName: string}): Promise<hosting.web.database.DatabaseCapabilities>;
  /**
   * List the hosting.web.database.dump objects
   * Dump available for your databases
   */
  public get(path: '/hosting/web/{serviceName}/database/{name}/dump', params: {name: string, serviceName: string, creationDate?: string, deletionDate?: string, type?: OVH.hosting.web.database.dump.DateEnum}): Promise<number[]>;
  /**
   * Dump
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}', params: {id: number, name: string, serviceName: string}): Promise<hosting.web.database_dump>;
  /**
   * statistics operations
   * Get statistics about this database
   */
  public get(path: '/hosting/web/{serviceName}/database/{name}/statistics', params: {name: string, serviceName: string, period: OVH.hosting.web.StatisticsPeriodEnum, type: OVH.hosting.web.database.StatisticsTypeEnum}): Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
  /**
   * databaseAvailableType operations
   * List available database type
   */
  public get(path: '/hosting/web/{serviceName}/databaseAvailableType', params: {serviceName: string}): Promise<hosting.web.database.DatabaseTypeEnum[]>;
  /**
   * databaseAvailableVersion operations
   * List available database version following a type
   */
  public get(path: '/hosting/web/{serviceName}/databaseAvailableVersion', params: {serviceName: string, type: OVH.hosting.web.database.DatabaseTypeEnum}): Promise<hosting.web.database.AvailableVersionStruct>;
  /**
   * databaseCreationCapabilities operations
   * List available database you can install
   */
  public get(path: '/hosting/web/{serviceName}/databaseCreationCapabilities', params: {serviceName: string}): Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
  /**
   * List the hosting.web.dump objects
   * Dumps linked to your hosting
   */
  public get(path: '/hosting/web/{serviceName}/dump', params: {serviceName: string, creationDate?: string, databaseName?: string, deletionDate?: string, orphan?: boolean}): Promise<number[]>;
  /**
   * Dump
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/dump/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.dump>;
  /**
   * Hosting automated emails
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/email', params: {serviceName: string}): Promise<hosting.web.email>;
  /**
   * bounces operations
   * Request the last bounces
   */
  public get(path: '/hosting/web/{serviceName}/email/bounces', params: {serviceName: string, limit: number}): Promise<hosting.web.mail.Bounce[]>;
  /**
   * volumes operations
   * Request the history volume of email sent
   */
  public get(path: '/hosting/web/{serviceName}/email/volumes', params: {serviceName: string}): Promise<hosting.web.mail.VolumeHistory[]>;
  /**
   * List the hosting.web.envVar objects
   * Environment variables set on your webhosting
   */
  public get(path: '/hosting/web/{serviceName}/envVar', params: {serviceName: string, type?: OVH.hosting.web.envVar.TypeEnum}): Promise<string[]>;
  /**
   * Environment variables set into your webhosting account
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/envVar/{key}', params: {key: string, serviceName: string}): Promise<hosting.web.envVar>;
  /**
   * List the hosting.web.extrasqlperso objects
   * Sqlperso linked to your hosting
   */
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso', params: {serviceName: string}): Promise<string[]>;
  /**
   * Sqlperso service
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}', params: {name: string, serviceName: string}): Promise<hosting.web.extrasqlperso>;
  /**
   * databases operations
   * Get databases linked with this option
   */
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/databases', params: {name: string, serviceName: string}): Promise<string[]>;
  /**
   * serviceInfos operations
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos', params: {name: string, serviceName: string}): Promise<services.Service>;
  /**
   * List the hosting.web.freedom objects
   * Freedom linked to this hosting account
   */
  public get(path: '/hosting/web/{serviceName}/freedom', params: {serviceName: string, status?: OVH.hosting.web.freedom.StatusEnum}): Promise<string[]>;
  /**
   * Freedoms linked to this hosting account
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/freedom/{domain}', params: {domain: string, serviceName: string}): Promise<hosting.web.freedom>;
  /**
   * List the hosting.web.indy objects
   * User of multidomain independent allowed on your hosting
   */
  public get(path: '/hosting/web/{serviceName}/indy', params: {serviceName: string, login?: string}): Promise<string[]>;
  /**
   * Hosting indys
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/indy/{login}', params: {login: string, serviceName: string}): Promise<hosting.web.indy>;
  /**
   * List the hosting.web.localSeo.account objects
   * Local SEO accounts associated to the hosting
   */
  public get(path: '/hosting/web/{serviceName}/localSeo/account', params: {serviceName: string, email?: string}): Promise<number[]>;
  /**
   * Local SEO accounts
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/localSeo/account/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.localSeo_account>;
  /**
   * emailAvailability operations
   * Check email availability for a local SEO order
   */
  public get(path: '/hosting/web/{serviceName}/localSeo/emailAvailability', params: {serviceName: string, email: string}): Promise<hosting.web.localSeo.EmailAvailability>;
  /**
   * List the hosting.web.localSeo.location objects
   * Local SEO locations associated to the hosting
   */
  public get(path: '/hosting/web/{serviceName}/localSeo/location', params: {serviceName: string}): Promise<number[]>;
  /**
   * Local SEO locations
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/localSeo/location/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.localSeo_location>;
  /**
   * serviceInfos operations
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos', params: {id: number, serviceName: string}): Promise<services.Service>;
  /**
   * List the hosting.web.module objects
   * Module installed on your hosting
   */
  public get(path: '/hosting/web/{serviceName}/module', params: {serviceName: string}): Promise<number[]>;
  /**
   * Hosting modules installed
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/module/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.module>;
  /**
   * List the hosting.web.ovhConfig objects
   * Configuration used on your hosting
   */
  public get(path: '/hosting/web/{serviceName}/ovhConfig', params: {serviceName: string, historical?: boolean, path?: string}): Promise<number[]>;
  /**
   * Virtual service
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/ovhConfig/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.ovhConfig>;
  /**
   * List the hosting.web.ownLogs objects
   * Own Logs linked to your hosting
   */
  public get(path: '/hosting/web/{serviceName}/ownLogs', params: {serviceName: string}): Promise<number[]>;
  /**
   * Hosting own logs
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.ownLogs>;
  /**
   * List the hosting.web.userLogs objects
   * User allowed to connect into your logs interface
   */
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs', params: {id: number, serviceName: string, login?: string}): Promise<string[]>;
  /**
   * Hosting users logs
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', params: {id: number, login: string, serviceName: string}): Promise<hosting.web.userLogs>;
  /**
   * privateDatabaseCreationCapabilities operations
   * List available privateDatabase you can install
   */
  public get(path: '/hosting/web/{serviceName}/privateDatabaseCreationCapabilities', params: {serviceName: string}): Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
  /**
   * privateDatabases operations
   * List linked privateDatabases
   */
  public get(path: '/hosting/web/{serviceName}/privateDatabases', params: {serviceName: string}): Promise<string[]>;
  /**
   * List the hosting.web.runtime objects
   * List of runtime configurations to your hosting
   */
  public get(path: '/hosting/web/{serviceName}/runtime', params: {serviceName: string, name?: string, type?: OVH.hosting.web.runtime.TypeEnum}): Promise<number[]>;
  /**
   * The runtime configuration of an attached domain for cloud web offer
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/runtime/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.runtime>;
  /**
   * attachedDomains operations
   * Get the attached domains linked to this runtime configuration
   */
  public get(path: '/hosting/web/{serviceName}/runtime/{id}/attachedDomains', params: {id: number, serviceName: string}): Promise<string[]>;
  /**
   * runtimeAvailableTypes operations
   * List available runtime configurations available backend types
   */
  public get(path: '/hosting/web/{serviceName}/runtimeAvailableTypes', params: {serviceName: string, language?: string}): Promise<hosting.web.runtime.TypeEnum[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Hostedssl
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/ssl', params: {serviceName: string}): Promise<hosting.web.ssl>;
  /**
   * domains operations
   * Get domains linked to this HostedSsl
   */
  public get(path: '/hosting/web/{serviceName}/ssl/domains', params: {serviceName: string}): Promise<string[]>;
  /**
   * Hostedssl Report
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/ssl/report', params: {serviceName: string}): Promise<hosting.web.ssl_report>;
  /**
   * statistics operations
   * Get statistics about this web hosting
   */
  public get(path: '/hosting/web/{serviceName}/statistics', params: {serviceName: string, period: OVH.hosting.web.StatisticsPeriodEnum, type: OVH.hosting.web.StatisticsTypeEnum}): Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
  /**
   * List the hosting.web.task objects
   * Tasks attached to your hosting
   */
  public get(path: '/hosting/web/{serviceName}/tasks', params: {serviceName: string, function_?: string, status?: OVH.hosting.web.task.StatusEnum}): Promise<number[]>;
  /**
   * Tasks
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/tasks/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.task>;
  /**
   * token operations
   * Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )
   */
  public get(path: '/hosting/web/{serviceName}/token', params: {serviceName: string}): Promise<string>;
  /**
   * List the hosting.web.user objects
   * User allowed to connect into your hosting
   */
  public get(path: '/hosting/web/{serviceName}/user', params: {serviceName: string, home?: string, login?: string}): Promise<string[]>;
  /**
   * Hosting users
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/user/{login}', params: {login: string, serviceName: string}): Promise<hosting.web.user>;
  /**
   * List the hosting.web.userLogs objects
   * User allowed to connect into your logs interface
   */
  public get(path: '/hosting/web/{serviceName}/userLogs', params: {serviceName: string, login?: string}): Promise<string[]>;
  /**
   * Hosting users logs
   * Get this object properties
   */
  public get(path: '/hosting/web/{serviceName}/userLogs/{login}', params: {login: string, serviceName: string}): Promise<hosting.web.userLogs>;
  /**
   * userLogsToken operations
   * Get a temporary token to access the your web hosting logs interface
   */
  public get(path: '/hosting/web/{serviceName}/userLogsToken', params: {serviceName: string, attachedDomain?: string, remoteCheck?: boolean, ttl?: number}): Promise<string>;
  /**
   * Find hosting service linked to a domain
   * Find hosting service linked to a domain
   */
  public get(path: '/hosting/web/attachedDomain', params: {domain: string}): Promise<string[]>;
  /**
   * Get available offer
   * Get available offer
   */
  public get(path: '/hosting/web/availableOffer', params: {domain: string}): Promise<hosting.web.OfferEnum[]>;
  /**
   * Get current incident
   * Get current incident
   */
  public get(path: '/hosting/web/incident'): Promise<string[]>;
  /**
   * Get list of directories associated to a local SEO offer and a country
   * Get list of directories associated to a local SEO offer and a country
   */
  public get(path: '/hosting/web/localSeo/directoriesList', params: {country: OVH.hosting.web.localSeo.location.CountryEnum, offer: OVH.hosting.web.localSeo.location.OfferEnum}): Promise<hosting.web.localSeo.DirectoriesList>;
  /**
   * Check email availability for a local SEO order
   * Check email availability for a local SEO order
   */
  public get(path: '/hosting/web/localSeo/emailAvailability', params: {email: string}): Promise<hosting.web.localSeo.EmailAvailability>;
  /**
   * Get the result of a visibility check
   * Get the result of a visibility check
   */
  public get(path: '/hosting/web/localSeo/visibilityCheckResult', params: {directory: string, id: number, token: string}): Promise<hosting.web.localSeo.VisibilityCheckResultResponse[]>;
  /**
   * List the hosting.web.ModuleList objects
   * IDs of all modules available
   */
  public get(path: '/hosting/web/moduleList', params: {active?: boolean, branch?: OVH.hosting.web.module.BranchEnum, latest?: boolean}): Promise<number[]>;
  /**
   * A module specifically packaged by OVH
   * Get this object properties
   */
  public get(path: '/hosting/web/moduleList/{id}', params: {id: number}): Promise<hosting.web.ModuleList>;
  /**
   * Get offer capabilities
   * Get offer capabilities
   */
  public get(path: '/hosting/web/offerCapabilities', params: {offer: OVH.hosting.web.OfferCapabilitiesEnum}): Promise<hosting.web.Capabilities>;
  public get(path: PathsHostingWebGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Web Hosting
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}', params: {serviceName: string, availableBoostOffer?: OVH.hosting.web.AvailableOfferStruct[], boostOffer?: OVH.hosting.web.OfferCapabilitiesEnum, cluster?: string, clusterIp?: string, clusterIpv6?: string, countriesIp?: OVH.hosting.web.CountriesIp[], datacenter?: OVH.hosting.web.DatacenterEnum, displayName?: string, filer?: string, hasCdn?: boolean, hasHostedSsl?: boolean, home?: string, hostingIp?: string, hostingIpv6?: string, lastOvhConfigScan?: string, offer?: OVH.hosting.web.OfferCapabilitiesEnum, operatingSystem?: OVH.hosting.web.OperatingSystemEnum, phpVersions?: OVH.hosting.web.PhpVersion[], primaryLogin?: string, quotaSize?: OVH.complexType.UnitAndValue<number>, quotaUsed?: OVH.complexType.UnitAndValue<number>, recommendedOffer?: OVH.hosting.web.OfferEnum, resourceType?: OVH.hosting.web.ResourceEnum, serviceManagementAccess?: OVH.hosting.web.ServiceAccess, state?: OVH.hosting.web.StateEnum, token?: string, trafficQuotaSize?: OVH.complexType.UnitAndValue<number>, trafficQuotaUsed?: OVH.complexType.UnitAndValue<number>, updates?: string[]}): Promise<void>;
  /**
   * Virtual service
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', params: {domain: string, serviceName: string, cdn?: OVH.hosting.web.attachedDomain.CdnEnum, firewall?: OVH.hosting.web.attachedDomain.FirewallEnum, ipLocation?: OVH.hosting.web.CountryEnum, ownLog?: string, path?: string, runtimeId?: number, ssl?: boolean, status?: OVH.hosting.web.attachedDomain.StatusEnum, taskId?: number}): Promise<void>;
  /**
   * Hosting crons
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/cron/{id}', params: {id: number, serviceName: string, command?: string, description?: string, email?: string, frequency?: string, language?: OVH.hosting.web.cron.LanguageEnum, status?: OVH.hosting.web.cron.StatusEnum}): Promise<void>;
  /**
   * Hosting automated emails
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/email', params: {serviceName: string, bounce?: number, email?: string, maxPerDay?: number, sent?: number, sentToday?: number, state?: OVH.hosting.web.mail.StateEnum}): Promise<void>;
  /**
   * Environment variables set into your webhosting account
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/envVar/{key}', params: {key: string, serviceName: string, status?: OVH.hosting.web.envVar.StatusEnum, taskId?: number, type?: OVH.hosting.web.envVar.TypeEnum, value?: string}): Promise<void>;
  /**
   * Hosting users logs
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', params: {id: number, login: string, serviceName: string, creationDate?: string, description?: string, ownLogsId?: number, status?: OVH.hosting.web.userLogs.StatusEnum, taskId?: number}): Promise<void>;
  /**
   * The runtime configuration of an attached domain for cloud web offer
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/runtime/{id}', params: {id: number, serviceName: string, appBootstrap?: string, appEnv?: OVH.hosting.web.runtime.EnvEnum, creationDate?: string, isDefault?: boolean, isDeletable?: boolean, lastUpdate?: string, name?: string, publicDir?: string, status?: OVH.hosting.web.runtime.StateEnum, taskId?: number, type?: OVH.hosting.web.runtime.TypeEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Hosting users
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/user/{login}', params: {login: string, serviceName: string, home?: string, isPrimaryAccount?: boolean, serviceManagementCredentials?: OVH.hosting.web.user.ServiceCredentials, sshState?: OVH.hosting.web.user.SshStateEnum, state?: OVH.hosting.web.user.StateEnum, status?: OVH.hosting.web.user.StatusEnum, taskId?: number}): Promise<void>;
  /**
   * Hosting users logs
   * Alter this object properties
   */
  public put(path: '/hosting/web/{serviceName}/userLogs/{login}', params: {login: string, serviceName: string, creationDate?: string, description?: string, ownLogsId?: number, status?: OVH.hosting.web.userLogs.StatusEnum, taskId?: number}): Promise<void>;
  public put(path: PathsHostingWebPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * activatePrivateDatabase operations
   * Activate an included private database on your hosting offer
   */
  public post(path: '/hosting/web/{serviceName}/activatePrivateDatabase', params: {serviceName: string, ram: OVH.hosting.PrivateDatabase.AvailableRamSizeEnum, version: OVH.hosting.PrivateDatabase.OrderableVersionEnum}): Promise<hosting.web.task>;
  /**
   * List the hosting.web.attachedDomain objects
   * Link a domain to this hosting
   */
  public post(path: '/hosting/web/{serviceName}/attachedDomain', params: {serviceName: string, cdn?: OVH.hosting.web.attachedDomain.CdnEnum, domain: string, firewall?: OVH.hosting.web.attachedDomain.FirewallEnum, ownLog?: string, path: string, runtimeId?: number, ssl?: boolean}): Promise<hosting.web.task>;
  /**
   * purgeCache operations
   * Purge cache for this attached domain
   */
  public post(path: '/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache', params: {domain: string, serviceName: string}): Promise<hosting.web.task>;
  /**
   * restart operations
   * Restart the virtual host of the attached domain
   */
  public post(path: '/hosting/web/{serviceName}/attachedDomain/{domain}/restart', params: {domain: string, serviceName: string}): Promise<hosting.web.task>;
  /**
   * serviceInfosUpdate operations
   * Alter this object properties
   */
  public post(path: '/hosting/web/{serviceName}/cdn/serviceInfosUpdate', params: {serviceName: string, renew: OVH.service.RenewType}): Promise<void>;
  /**
   * terminate operations
   * Terminate your cdn sub service
   */
  public post(path: '/hosting/web/{serviceName}/cdn/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/hosting/web/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/hosting/web/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * List the hosting.web.cron objects
   * Create new cron
   */
  public post(path: '/hosting/web/{serviceName}/cron', params: {serviceName: string, command: string, description?: string, email?: string, frequency: string, language: OVH.hosting.web.cron.LanguageEnum, status?: OVH.hosting.web.cron.StatusEnum}): Promise<string>;
  /**
   * List the hosting.web.database objects
   * Install new database
   */
  public post(path: '/hosting/web/{serviceName}/database', params: {serviceName: string, capabilitie: OVH.hosting.web.database.DatabaseCapabilitiesTypeEnum, password?: string, quota?: OVH.hosting.web.database.ExtraSqlQuotaEnum, type: OVH.hosting.web.database.DatabaseTypeEnum, user: string, version?: OVH.hosting.web.database.VersionEnum}): Promise<hosting.web.task>;
  /**
   * changePassword operations
   * Request a password change
   */
  public post(path: '/hosting/web/{serviceName}/database/{name}/changePassword', params: {name: string, serviceName: string, password: string}): Promise<hosting.web.task>;
  /**
   * List the hosting.web.database.dump objects
   * Request the dump from your database
   */
  public post(path: '/hosting/web/{serviceName}/database/{name}/dump', params: {name: string, serviceName: string, date: OVH.hosting.web.database.dump.DateEnum, sendEmail?: boolean}): Promise<hosting.web.task>;
  /**
   * restore operations
   * Request the restore from this dump
   */
  public post(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}/restore', params: {id: number, name: string, serviceName: string}): Promise<hosting.web.task>;
  /**
   * import operations
   * Import a dump from an specific file uploaded with /me/documents
   */
  public post(path: '/hosting/web/{serviceName}/database/{name}/import', params: {name: string, serviceName: string, documentId: string, flushDatabase?: boolean, sendEmail?: boolean}): Promise<hosting.web.task>;
  /**
   * request operations
   * Request specific operation for your database
   */
  public post(path: '/hosting/web/{serviceName}/database/{name}/request', params: {name: string, serviceName: string, action: OVH.hosting.web.database.RequestActionEnum}): Promise<hosting.web.task>;
  /**
   * restore operations
   * Request the restore from your database backup
   */
  public post(path: '/hosting/web/{serviceName}/database/{name}/restore', params: {name: string, serviceName: string, date: OVH.hosting.web.database.dump.DateEnum, sendEmail?: boolean}): Promise<hosting.web.task>;
  /**
   * request operations
   * Request specific operation for your email
   */
  public post(path: '/hosting/web/{serviceName}/email/request', params: {serviceName: string, action: OVH.hosting.web.mail.ActionEnum}): Promise<string>;
  /**
   * List the hosting.web.envVar objects
   * Set a variable to this hosting
   */
  public post(path: '/hosting/web/{serviceName}/envVar', params: {serviceName: string, key: string, type: OVH.hosting.web.envVar.TypeEnum, value: string}): Promise<hosting.web.task>;
  /**
   * serviceInfosUpdate operations
   * Alter this object properties
   */
  public post(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate', params: {name: string, serviceName: string, renew: OVH.service.RenewType}): Promise<void>;
  /**
   * terminate operations
   * Terminate your extraSqlPerso sub service
   */
  public post(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate', params: {name: string, serviceName: string}): Promise<string>;
  /**
   * login operations
   * Login this location for SSO
   */
  public post(path: '/hosting/web/{serviceName}/localSeo/account/{id}/login', params: {id: number, serviceName: string}): Promise<string>;
  /**
   * serviceInfosUpdate operations
   * Alter this object properties
   */
  public post(path: '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate', params: {id: number, serviceName: string, renew: OVH.service.RenewType}): Promise<void>;
  /**
   * terminate operations
   * Terminate a local SEO sub service
   */
  public post(path: '/hosting/web/{serviceName}/localSeo/location/{id}/terminate', params: {id: number, serviceName: string}): Promise<string>;
  /**
   * List the hosting.web.module objects
   * Install a new module
   */
  public post(path: '/hosting/web/{serviceName}/module', params: {serviceName: string, adminName?: string, adminPassword?: string, dependencies?: OVH.hosting.web.module.DependencyType[], domain?: string, language?: OVH.hosting.web.module.LanguageEnum, moduleId: number, path?: string}): Promise<hosting.web.task>;
  /**
   * changePassword operations
   * Generate a new admin password for your module
   */
  public post(path: '/hosting/web/{serviceName}/module/{id}/changePassword', params: {id: number, serviceName: string}): Promise<hosting.web.task>;
  /**
   * changeConfiguration operations
   * Apply a new configuration on this path
   */
  public post(path: '/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration', params: {id: number, serviceName: string, container?: OVH.hosting.web.ovhconfig.ContainerEnum, engineName?: OVH.hosting.web.ovhConfig.EngineNameEnum, engineVersion?: OVH.hosting.web.ovhConfig.AvailableEngineVersionEnum, environment?: OVH.hosting.web.ovhConfig.EnvironmentEnum, httpFirewall?: OVH.hosting.web.ovhConfig.HttpFirewallEnum}): Promise<hosting.web.task>;
  /**
   * rollback operations
   * Rollback to an old configuration
   */
  public post(path: '/hosting/web/{serviceName}/ovhConfig/{id}/rollback', params: {id: number, serviceName: string, rollbackId: number}): Promise<hosting.web.task>;
  /**
   * ovhConfigRefresh operations
   * Synchronize the configuration listing with content on your hosting
   */
  public post(path: '/hosting/web/{serviceName}/ovhConfigRefresh', params: {serviceName: string}): Promise<hosting.web.task>;
  /**
   * List the hosting.web.userLogs objects
   * Create new userLogs
   */
  public post(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs', params: {id: number, serviceName: string, description: string, login: string, ownLogsId?: number, password: string}): Promise<string>;
  /**
   * changePassword operations
   * Request a password change
   */
  public post(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword', params: {id: number, login: string, serviceName: string, password: string}): Promise<string>;
  /**
   * request operations
   * Request specific operation for your hosting
   */
  public post(path: '/hosting/web/{serviceName}/request', params: {serviceName: string, action: OVH.hosting.web.RequestActionEnum}): Promise<hosting.web.task>;
  /**
   * requestBoost operations
   * Allows you to boost your offer.
   */
  public post(path: '/hosting/web/{serviceName}/requestBoost', params: {serviceName: string, offer?: OVH.hosting.web.OfferEnum}): Promise<hosting.web.task>;
  /**
   * restoreSnapshot operations
   * Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT
   */
  public post(path: '/hosting/web/{serviceName}/restoreSnapshot', params: {serviceName: string, backup: OVH.hosting.web.backup.TypeEnum}): Promise<hosting.web.task>;
  /**
   * List the hosting.web.runtime objects
   * Request the creation of a new runtime configuration
   */
  public post(path: '/hosting/web/{serviceName}/runtime', params: {serviceName: string, appBootstrap?: string, appEnv?: OVH.hosting.web.runtime.EnvEnum, attachedDomains?: string[], isDefault?: boolean, name?: string, publicDir?: string, type?: OVH.hosting.web.runtime.TypeEnum}): Promise<hosting.web.task>;
  /**
   * Hostedssl
   * Create the free default HostedSsl OR import your proper SSL on your hosting
   */
  public post(path: '/hosting/web/{serviceName}/ssl', params: {serviceName: string, certificate?: string, chain?: string, key?: string}): Promise<hosting.web.ssl>;
  /**
   * regenerate operations
   * Request the regeneration of your HostedSsl
   */
  public post(path: '/hosting/web/{serviceName}/ssl/regenerate', params: {serviceName: string}): Promise<hosting.web.ssl>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/hosting/web/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * List the hosting.web.user objects
   * Create new ftp/ssh user
   */
  public post(path: '/hosting/web/{serviceName}/user', params: {serviceName: string, home: string, login: string, password: string, sshState?: OVH.hosting.web.user.SshStateEnum}): Promise<hosting.web.task>;
  /**
   * changePassword operations
   * Request a password change
   */
  public post(path: '/hosting/web/{serviceName}/user/{login}/changePassword', params: {login: string, serviceName: string, password: string}): Promise<hosting.web.task>;
  /**
   * List the hosting.web.userLogs objects
   * Create new userLogs
   */
  public post(path: '/hosting/web/{serviceName}/userLogs', params: {serviceName: string, description: string, login: string, ownLogsId?: number, password: string}): Promise<string>;
  /**
   * changePassword operations
   * Request a password change
   */
  public post(path: '/hosting/web/{serviceName}/userLogs/{login}/changePassword', params: {login: string, serviceName: string, password: string}): Promise<string>;
  /**
   * Check visibility of a location
   * Check visibility of a location
   */
  public post(path: '/hosting/web/localSeo/visibilityCheck', params: {country: OVH.hosting.web.localSeo.location.CountryEnum, name: string, street: string, zip: string}): Promise<hosting.web.localSeo.VisibilityCheckResponse>;
  public post(path: PathsHostingWebPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Virtual service
   * Unlink domain from hosting
   */
  public delete(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', params: {domain: string, serviceName: string}): Promise<hosting.web.task>;
  /**
   * Hosting crons
   * Delete cron
   */
  public delete(path: '/hosting/web/{serviceName}/cron/{id}', params: {id: number, serviceName: string}): Promise<string>;
  /**
   * Database
   * Delete database
   */
  public delete(path: '/hosting/web/{serviceName}/database/{name}', params: {name: string, serviceName: string}): Promise<hosting.web.task>;
  /**
   * Dump
   * Delete dump before expiration date
   */
  public delete(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}', params: {id: number, name: string, serviceName: string}): Promise<hosting.web.task>;
  /**
   * Dump
   * Delete dump before expiration date
   */
  public delete(path: '/hosting/web/{serviceName}/dump/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.task>;
  /**
   * Environment variables set into your webhosting account
   * Remove variable from hosting
   */
  public delete(path: '/hosting/web/{serviceName}/envVar/{key}', params: {key: string, serviceName: string}): Promise<hosting.web.task>;
  /**
   * Freedoms linked to this hosting account
   * Delete the freedom
   */
  public delete(path: '/hosting/web/{serviceName}/freedom/{domain}', params: {domain: string, serviceName: string}): Promise<void>;
  /**
   * Hosting modules installed
   * Delete a module installed
   */
  public delete(path: '/hosting/web/{serviceName}/module/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.task>;
  /**
   * Hosting users logs
   * Delete the userLogs
   */
  public delete(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', params: {id: number, login: string, serviceName: string}): Promise<string>;
  /**
   * The runtime configuration of an attached domain for cloud web offer
   * Delete a runtime configuration of an hosting
   */
  public delete(path: '/hosting/web/{serviceName}/runtime/{id}', params: {id: number, serviceName: string}): Promise<hosting.web.task>;
  /**
   * Hostedssl
   * Delete the HostedSsl on your hosting
   */
  public delete(path: '/hosting/web/{serviceName}/ssl', params: {serviceName: string}): Promise<hosting.web.ssl>;
  /**
   * Hosting users
   * Delete ftp/ssh user
   */
  public delete(path: '/hosting/web/{serviceName}/user/{login}', params: {login: string, serviceName: string}): Promise<hosting.web.task>;
  /**
   * Hosting users logs
   * Delete the userLogs
   */
  public delete(path: '/hosting/web/{serviceName}/userLogs/{login}', params: {login: string, serviceName: string}): Promise<string>;
  public delete(path: PathsHostingWebDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
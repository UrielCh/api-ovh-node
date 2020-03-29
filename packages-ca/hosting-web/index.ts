import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /hosting/web Models
 * Source: https://ca.api.ovh.com/1.0/hosting/web.json
 */
export namespace complexType {
    /**
     * A value set tagged with its unit and serie name
     * interface fullName: complexType.ChartSerie.ChartSerie
     */
    export interface ChartSerie<T> {
        serieName: string;
        unit: string;
        values: T[];
    }
    /**
     * A timestamp associated to a value
     * interface fullName: complexType.ChartTimestampValue.ChartTimestampValue
     */
    export interface ChartTimestampValue {
        timestamp: number;
        value?: number;
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
export namespace hosting {
    export namespace PrivateDatabase {
        /**
         * Private database available ram sizes
         * type fullname: hosting.PrivateDatabase.AvailableRamSizeEnum
         */
        export type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512"
        /**
         * Private database orderable versions
         * type fullname: hosting.PrivateDatabase.OrderableVersionEnum
         */
        export type OrderableVersionEnum = "mariadb_10.1" | "mariadb_10.2" | "mongodb_3.4" | "mongodb_4.0" | "mysql_5.5" | "mysql_5.6" | "mysql_5.7" | "postgresql_10" | "postgresql_11" | "postgresql_12" | "postgresql_9.4" | "postgresql_9.5" | "postgresql_9.6" | "redis_3.2" | "redis_4.0"
    }
    export namespace web {
        /**
         * Url and port of a service
         * interface fullName: hosting.web.Address.Address
         */
        export interface Address {
            port: number;
            url: string;
        }
        /**
         * Struct which describs an boost offer from a service
         * interface fullName: hosting.web.AvailableOfferStruct.AvailableOfferStruct
         */
        export interface AvailableOfferStruct {
            offer: hosting.web.OfferEnum;
            price: order.Price;
        }
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
         * Available clusterIp by country
         * interface fullName: hosting.web.CountriesIp.CountriesIp
         */
        export interface CountriesIp {
            country: hosting.web.CountryEnum;
            ip: string;
            ipv6?: string;
        }
        /**
         * Available cluster countries
         * type fullname: hosting.web.CountryEnum
         */
        export type CountryEnum = "BE" | "CZ" | "DE" | "ES" | "FI" | "FR" | "IE" | "IT" | "LT" | "NL" | "PL" | "PT" | "UK"
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
         * Available datacenters
         * type fullname: hosting.web.DatacenterEnum
         */
        export type DatacenterEnum = "gra1" | "gra2" | "p19"
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
         * A module specifically packaged by OVH
         * interface fullName: hosting.web.ModuleList.ModuleList
         */
        export interface ModuleList {
            active: boolean;
            adminNameType: hosting.web.module.AdminNameTypeEnum;
            author: string;
            branch: hosting.web.module.BranchEnum;
            id: number;
            keywords: string[];
            language: hosting.web.module.LanguageEnum[];
            languageRequirement: complexType.UnitAndValue<string>;
            latest: boolean;
            name: string;
            size: complexType.UnitAndValue<number>;
            upgradeFrom: number[];
            version: string;
        }
        /**
         * Different NodeJs versions available
         * type fullname: hosting.web.NodejsVersionAvailableEnum
         */
        export type NodejsVersionAvailableEnum = "nodejs-10" | "nodejs-11" | "nodejs-8" | "nodejs-9"
        /**
         * Hosting's offer
         * type fullname: hosting.web.OfferCapabilitiesEnum
         */
        export type OfferCapabilitiesEnum = "1000gp" | "20gp" | "240gp" | "240pack" | "240plan" | "300gp" | "60gp" | "720pack" | "720plan" | "90pack" | "90plan" | "CLOUDWEB_1" | "CLOUDWEB_2" | "CLOUDWEB_3" | "KS" | "PERFORMANCE_1" | "PERFORMANCE_2" | "PERFORMANCE_3" | "PERFORMANCE_4" | "PERSO" | "PRO" | "START" | "business" | "cloudweb1" | "cloudweb2" | "cloudweb3" | "cloudwebbetax1" | "depro2012" | "deprol2012" | "deproxl2012" | "deproxxl2012" | "destart2012" | "destartl2012" | "destartxl2012" | "domainpack" | "itbusiness2012" | "itperso2012" | "itpremium2012" | "kimsufi2015" | "mailpack" | "mailplan" | "mediapack" | "mediaplan" | "ovhpro1To" | "ovhpro2To" | "ovhpro5To" | "paas2014beta" | "perf2014x1" | "perf2014x2" | "perf2014x3" | "perf2014x4" | "perso2010" | "perso2014" | "premium" | "pro2010" | "pro2014" | "start10g" | "start10m" | "start1g" | "start1ges" | "start1m" | "start5g" | "starter" | "xxlpack" | "xxlplan"
        /**
         * Hosting's offer
         * type fullname: hosting.web.OfferEnum
         */
        export type OfferEnum = "CLOUDWEB_1" | "CLOUDWEB_2" | "CLOUDWEB_3" | "KS" | "PERFORMANCE_1" | "PERFORMANCE_2" | "PERFORMANCE_3" | "PERFORMANCE_4" | "PERSO" | "PRO" | "START"
        /**
         * Hosting's OS
         * type fullname: hosting.web.OperatingSystemEnum
         */
        export type OperatingSystemEnum = "linux"
        /**
         * State of available php versions for this account
         * interface fullName: hosting.web.PhpVersion.PhpVersion
         */
        export interface PhpVersion {
            support: hosting.web.PhpVersionStateEnum;
            version: string;
        }
        /**
         * Different PHP versions available
         * type fullname: hosting.web.PhpVersionAvailableEnum
         */
        export type PhpVersionAvailableEnum = "phpfpm-5.6" | "phpfpm-7.0" | "phpfpm-7.1" | "phpfpm-7.2" | "phpfpm-7.3" | "phpfpm-7.4"
        /**
         * Different support of PHP versions
         * type fullname: hosting.web.PhpVersionStateEnum
         */
        export type PhpVersionStateEnum = "BETA" | "END_OF_LIFE" | "SECURITY_FIXES" | "SUPPORTED"
        /**
         * Different Python versions available
         * type fullname: hosting.web.PythonVersionAvailableEnum
         */
        export type PythonVersionAvailableEnum = "python-2" | "python-3"
        /**
         * Types of action you can request for your web hosting
         * type fullname: hosting.web.RequestActionEnum
         */
        export type RequestActionEnum = "CHECK_QUOTA" | "FLUSH_CACHE" | "SCAN_ANTIHACK"
        /**
         * Hosting's type
         * type fullname: hosting.web.ResourceEnum
         */
        export type ResourceEnum = "bestEffort" | "cloud" | "dedicated" | "shared"
        /**
         * Different Ruby versions available
         * type fullname: hosting.web.RubyVersionAvailableEnum
         */
        export type RubyVersionAvailableEnum = "ruby-2.4" | "ruby-2.5" | "ruby-2.6"
        /**
         * Web Hosting
         * interface fullName: hosting.web.Service.Service
         */
        export interface Service {
            availableBoostOffer: hosting.web.AvailableOfferStruct[];
            boostOffer?: hosting.web.OfferCapabilitiesEnum;
            cluster: string;
            clusterIp?: string;
            clusterIpv6?: string;
            countriesIp?: hosting.web.CountriesIp[];
            datacenter: hosting.web.DatacenterEnum;
            displayName?: string;
            filer?: string;
            hasCdn?: boolean;
            hasHostedSsl?: boolean;
            home: string;
            hostingIp?: string;
            hostingIpv6?: string;
            lastOvhConfigScan?: string;
            offer: hosting.web.OfferCapabilitiesEnum;
            operatingSystem: hosting.web.OperatingSystemEnum;
            phpVersions: hosting.web.PhpVersion[];
            primaryLogin: string;
            quotaSize: complexType.UnitAndValue<number>;
            quotaUsed?: complexType.UnitAndValue<number>;
            recommendedOffer?: hosting.web.OfferEnum;
            resourceType: hosting.web.ResourceEnum;
            serviceManagementAccess: hosting.web.ServiceAccess;
            serviceName: string;
            state: hosting.web.StateEnum;
            token?: string;
            trafficQuotaSize?: complexType.UnitAndValue<number>;
            trafficQuotaUsed?: complexType.UnitAndValue<number>;
            updates: string[];
        }
        /**
         * Different url to manage your service
         * interface fullName: hosting.web.ServiceAccess.ServiceAccess
         */
        export interface ServiceAccess {
            ftp: hosting.web.Address;
            http: hosting.web.Address;
            ssh: hosting.web.Address;
        }
        /**
         * Hosting's state
         * type fullname: hosting.web.StateEnum
         */
        export type StateEnum = "active" | "bloqued" | "maintenance"
        /**
         * Available periods for statistics
         * type fullname: hosting.web.StatisticsPeriodEnum
         */
        export type StatisticsPeriodEnum = "daily" | "monthly" | "weekly" | "yearly"
        /**
         * Types of statistics available for the web hosting
         * type fullname: hosting.web.StatisticsTypeEnum
         */
        export type StatisticsTypeEnum = "in.ftpCommands" | "in.httpHits" | "in.httpMeanResponseTime" | "out.tcpConn" | "sys.cpuUsage" | "sys.workerSpawnOverload"
        /**
         * Virtual service
         * interface fullName: hosting.web.attachedDomain.attachedDomain
         */
        export interface attachedDomain {
            cdn: hosting.web.attachedDomain.CdnEnum;
            domain: string;
            firewall: hosting.web.attachedDomain.FirewallEnum;
            ipLocation?: hosting.web.CountryEnum;
            ownLog?: string;
            path: string;
            runtimeId?: number;
            ssl?: boolean;
            status: hosting.web.attachedDomain.StatusEnum;
            taskId?: number;
        }
        export namespace attachedDomain {
            /**
             * Attached domain cdn enum
             * type fullname: hosting.web.attachedDomain.CdnEnum
             */
            export type CdnEnum = "active" | "none"
            /**
             * Attached domain firewall enum
             * type fullname: hosting.web.attachedDomain.FirewallEnum
             */
            export type FirewallEnum = "active" | "none"
            /**
             * AttachedDomain status
             * type fullname: hosting.web.attachedDomain.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
        export namespace backup {
            /**
             * List of backup types
             * type fullname: hosting.web.backup.TypeEnum
             */
            export type TypeEnum = "daily.1" | "daily.2" | "daily.3" | "weekly.1" | "weekly.2"
        }
        /**
         * History of your boost requests
         * interface fullName: hosting.web.boostHistory.boostHistory
         */
        export interface boostHistory {
            accountId: string;
            boostOffer?: hosting.web.OfferCapabilitiesEnum;
            date: string;
            offer: hosting.web.OfferCapabilitiesEnum;
        }
        /**
         * CDN service
         * interface fullName: hosting.web.cdn.cdn
         */
        export interface cdn {
            domain: string;
            free: boolean;
            status: hosting.web.cdn.StatusEnum;
            taskId?: number;
            type: string;
            version: string;
        }
        export namespace cdn {
            /**
             * Cdn status
             * type fullname: hosting.web.cdn.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "flushing"
        }
        /**
         * Hosting crons
         * interface fullName: hosting.web.cron.cron
         */
        export interface cron {
            command: string;
            description?: string;
            email?: string;
            frequency: string;
            id: number;
            language: hosting.web.cron.LanguageEnum;
            state: hosting.web.cron.StateEnum;
            status: hosting.web.cron.StatusEnum;
        }
        export namespace cron {
            /**
             * Cron's language
             * type fullname: hosting.web.cron.LanguageEnum
             */
            export type LanguageEnum = "node10" | "node11" | "node8" | "node9" | "other" | "php4" | "php5.2" | "php5.3" | "php5.4" | "php5.5" | "php5.6" | "php7.0" | "php7.1" | "php7.2" | "php7.3" | "php7.4" | "python2" | "python3" | "ruby2.4" | "ruby2.5" | "ruby2.6"
            /**
             * Cron state
             * type fullname: hosting.web.cron.StateEnum
             */
            export type StateEnum = "created" | "creating" | "deleting" | "updating"
            /**
             * Cron status
             * type fullname: hosting.web.cron.StatusEnum
             */
            export type StatusEnum = "disabled" | "enabled" | "suspended"
        }
        /**
         * Database
         * interface fullName: hosting.web.database.database
         */
        export interface database {
            dumps: number;
            guiURL?: string;
            lastCheck?: string;
            mode: hosting.web.database.ModeEnum;
            name: string;
            port: number;
            quotaSize: complexType.UnitAndValue<number>;
            quotaUsed: complexType.UnitAndValue<number>;
            server?: string;
            state: hosting.web.database.StateEnum;
            status: hosting.web.database.StatusEnum;
            taskId?: number;
            type: hosting.web.database.DatabaseTypeEnum;
            user: string;
            version: hosting.web.database.VersionEnum;
            versionSupport: hosting.web.database.SupportedVersionEnum;
        }
        export namespace database {
            /**
             * Database Available and Default version
             * interface fullName: hosting.web.database.AvailableVersionStruct.AvailableVersionStruct
             */
            export interface AvailableVersionStruct {
                default: hosting.web.database.VersionEnum;
                list: hosting.web.database.VersionEnum[];
            }
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
             * Struct which describe available features for a database
             * interface fullName: hosting.web.database.DatabaseCapabilities.DatabaseCapabilities
             */
            export interface DatabaseCapabilities {
                changePassword: boolean;
                changeRight: boolean;
                delete: boolean;
                dump: boolean;
                getQuota: boolean;
                getRight: boolean;
                guiURL: string;
                optimize: boolean;
                restore: boolean;
            }
            /**
             * Database capabitities type enum
             * type fullname: hosting.web.database.DatabaseCapabilitiesTypeEnum
             */
            export type DatabaseCapabilitiesTypeEnum = "extraSqlPerso" | "local" | "privateDatabase" | "sqlLocal" | "sqlPerso" | "sqlPro"
            /**
             * Database Type enum
             * type fullname: hosting.web.database.DatabaseCreationTypeEnum
             */
            export type DatabaseCreationTypeEnum = "mariadb" | "mysql" | "postgresql" | "redis"
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
            /**
             * ExtraSqlPerso quota enum
             * type fullname: hosting.web.database.ExtraSqlQuotaEnum
             */
            export type ExtraSqlQuotaEnum = 100 | 200 | 25 | 400 | 800
            /**
             * Database mode
             * type fullname: hosting.web.database.ModeEnum
             */
            export type ModeEnum = "besteffort" | "classic" | "module"
            /**
             * Types of action you can request for your database
             * type fullname: hosting.web.database.RequestActionEnum
             */
            export type RequestActionEnum = "CHECK_QUOTA"
            /**
             * Database state
             * type fullname: hosting.web.database.StateEnum
             */
            export type StateEnum = "close" | "ok" | "readonly"
            /**
             * Types of statistics available for the database
             * type fullname: hosting.web.database.StatisticsTypeEnum
             */
            export type StatisticsTypeEnum = "statement" | "statementMeanTime"
            /**
             * Database status
             * type fullname: hosting.web.database.StatusEnum
             */
            export type StatusEnum = "checking" | "created" | "creating" | "deleting" | "dumping" | "importing" | "locked" | "optimizing" | "restoring" | "updating"
            /**
             * Indicates the current support state of your database version
             * type fullname: hosting.web.database.SupportedVersionEnum
             */
            export type SupportedVersionEnum = "beta" | "deprecated" | "stable"
            /**
             * Database Version enum
             * type fullname: hosting.web.database.VersionEnum
             */
            export type VersionEnum = "3.4" | "4.0" | "5.1" | "5.5" | "5.6" | "8.4"
            export namespace dump {
                /**
                 * List of dump types
                 * type fullname: hosting.web.database.dump.DateEnum
                 */
                export type DateEnum = "daily.1" | "now" | "weekly.1"
                /**
                 * Database dump status
                 * type fullname: hosting.web.database.dump.StatusEnum
                 */
                export type StatusEnum = "created" | "creating" | "deleting"
            }
        }
        /**
         * Dump
         * interface fullName: hosting.web.database_dump.database_dump
         */
        export interface database_dump {
            creationDate: string;
            deletionDate: string;
            id: number;
            status: hosting.web.database.dump.StatusEnum;
            taskId?: number;
            type: hosting.web.database.dump.DateEnum;
            url?: string;
        }
        /**
         * Dump
         * interface fullName: hosting.web.dump.dump
         */
        export interface dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            id: number;
            orphan: boolean;
            status: hosting.web.database.dump.StatusEnum;
            taskId?: number;
            type: hosting.web.database.dump.DateEnum;
            url?: string;
        }
        /**
         * Hosting automated emails
         * interface fullName: hosting.web.email.email
         */
        export interface email {
            bounce: number;
            email?: string;
            maxPerDay: number;
            sent: number;
            sentToday: number;
            state: hosting.web.mail.StateEnum;
        }
        /**
         * Mail service linked to webhosting
         * interface fullName: hosting.web.emailoption.emailoption
         */
        export interface emailoption {
            creationDate: string;
            domain: string;
            id: number;
        }
        /**
         * Environment variables set into your webhosting account
         * interface fullName: hosting.web.envVar.envVar
         */
        export interface envVar {
            key: string;
            status: hosting.web.envVar.StatusEnum;
            taskId?: number;
            type: hosting.web.envVar.TypeEnum;
            value: string;
        }
        export namespace envVar {
            /**
             * EnvVar status
             * type fullname: hosting.web.envVar.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
            /**
             * EnvVar type
             * type fullname: hosting.web.envVar.TypeEnum
             */
            export type TypeEnum = "integer" | "password" | "string"
        }
        /**
         * Sqlperso service
         * interface fullName: hosting.web.extrasqlperso.extrasqlperso
         */
        export interface extrasqlperso {
            database: number;
            name: string;
            size: complexType.UnitAndValue<number>;
            status: string;
            taskId?: number;
        }
        /**
         * Freedoms linked to this hosting account
         * interface fullName: hosting.web.freedom.freedom
         */
        export interface freedom {
            domain: string;
            status: hosting.web.freedom.StatusEnum;
            type: string;
        }
        export namespace freedom {
            /**
             * Available status for freedoms
             * type fullname: hosting.web.freedom.StatusEnum
             */
            export type StatusEnum = "blockedByCustomer" | "blockedBySystem" | "ok" | "preset"
        }
        export namespace hostedssl {
            /**
             * Hostedssl report value
             * type fullname: hosting.web.hostedssl.ReportValueEnum
             */
            export type ReportValueEnum = "completed" | "in-progress" | "non-completed" | "non-required" | "not-applicable" | "not-provided"
            /**
             * Hostedssl status
             * type fullname: hosting.web.hostedssl.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "importing" | "regenerating"
        }
        /**
         * Hosting indys
         * interface fullName: hosting.web.indy.indy
         */
        export interface indy {
            attachedDomains: string[];
            home: string;
            login: string;
            state: hosting.web.user.StateEnum;
        }
        export namespace localSeo {
            /**
             * Struct describing a list of directories ordered by type
             * interface fullName: hosting.web.localSeo.DirectoriesList.DirectoriesList
             */
            export interface DirectoriesList {
                navigationSystems: hosting.web.localSeo.Directory[];
                searchEngines: hosting.web.localSeo.Directory[];
                socialNetworks: hosting.web.localSeo.Directory[];
            }
            /**
             * Struct describing a directory
             * interface fullName: hosting.web.localSeo.Directory.Directory
             */
            export interface Directory {
                code: string;
                displayName: string;
            }
            /**
             * Struct describing the availability of an email address for a local SEO order
             * interface fullName: hosting.web.localSeo.EmailAvailability.EmailAvailability
             */
            export interface EmailAvailability {
                availability: hosting.web.localSeo.account.EmailAvailabilityEnum;
                serviceName?: string;
            }
            /**
             * Sync status of a location field
             * type fullname: hosting.web.localSeo.FieldStatusEnum
             */
            export type FieldStatusEnum = "MATCH" | "MISMATCH" | "MISSING" | "NOT_APPLICABLE" | "PRESENT"
            /**
             * Status of a listing
             * type fullname: hosting.web.localSeo.FlowStatusEnum
             */
            export type FlowStatusEnum = "ALL_INFORMATION_SUBMITTED" | "DONT_REMOVE" | "INACTIVE" | "MANUALLY_DEACTIVATED" | "NEEDS_REVIEW" | "NOT_SUPPORTED" | "NO_ACTION_NEEDED" | "REMOVAL_NEEDED" | "REMOVAL_REVIEW_NEEDED" | "REMOVAL_SUBMITTED" | "REMOVED" | "SUBMISSION_NEEDED" | "WAITING_DIRECTORY_ACTION" | "WAITING_USER_ACTION"
            /**
             * Sync status of a listing
             * type fullname: hosting.web.localSeo.ListingStatusEnum
             */
            export type ListingStatusEnum = "IN_SYNC" | "NOT_FOUND" | "NOT_IN_SYNC" | "NOT_SUPPORTED" | "NO_ONLINE_LISTING" | "TECHNICAL_PROBLEMS"
            /**
             * Struct describing a location being checked for visibility
             * interface fullName: hosting.web.localSeo.SearchData.SearchData
             */
            export interface SearchData {
                city: string;
                country: string;
                id: number;
                name: string;
                province?: string;
                street: string;
                streetNo: string;
                token: string;
                zip: string;
            }
            /**
             * Struct describing the response for a visibility check request
             * interface fullName: hosting.web.localSeo.VisibilityCheckResponse.VisibilityCheckResponse
             */
            export interface VisibilityCheckResponse {
                alreadyManaged?: boolean;
                searchData: hosting.web.localSeo.SearchData;
            }
            /**
             * Struct describing a visibility check result
             * interface fullName: hosting.web.localSeo.VisibilityCheckResultResponse.VisibilityCheckResultResponse
             */
            export interface VisibilityCheckResultResponse {
                city?: string;
                cityStatus?: hosting.web.localSeo.FieldStatusEnum;
                country?: string;
                countryStatus?: hosting.web.localSeo.FieldStatusEnum;
                dateCreated?: string;
                directoryType?: string;
                email?: string;
                emailStatus?: hosting.web.localSeo.FieldStatusEnum;
                flowStatus?: hosting.web.localSeo.FlowStatusEnum;
                listingId?: string;
                listingUrl?: string;
                name?: string;
                nameStatus?: hosting.web.localSeo.FieldStatusEnum;
                phone?: string;
                phoneStatus?: hosting.web.localSeo.FieldStatusEnum;
                province?: string;
                provinceStatus?: hosting.web.localSeo.FieldStatusEnum;
                street?: string;
                streetAndNo?: string;
                streetAndNoStatus?: hosting.web.localSeo.FieldStatusEnum;
                streetNo?: string;
                streetNoStatus?: hosting.web.localSeo.FieldStatusEnum;
                streetStatus?: hosting.web.localSeo.FieldStatusEnum;
                streetType?: string;
                streetTypeStatus?: hosting.web.localSeo.FieldStatusEnum;
                syncStatus?: hosting.web.localSeo.ListingStatusEnum;
                website?: string;
                websiteStatus?: hosting.web.localSeo.FieldStatusEnum;
                zip?: string;
                zipStatus?: hosting.web.localSeo.FieldStatusEnum;
            }
            export namespace account {
                /**
                 * Availability of an email address for a local SEO order
                 * type fullname: hosting.web.localSeo.account.EmailAvailabilityEnum
                 */
                export type EmailAvailabilityEnum = "available" | "merge" | "nic" | "taken"
                /**
                 * Account status
                 * type fullname: hosting.web.localSeo.account.StatusEnum
                 */
                export type StatusEnum = "created" | "creating" | "deleting" | "updating"
            }
            export namespace location {
                /**
                 * Location country
                 * type fullname: hosting.web.localSeo.location.CountryEnum
                 */
                export type CountryEnum = "FR"
                /**
                 * Location offer
                 * type fullname: hosting.web.localSeo.location.OfferEnum
                 */
                export type OfferEnum = "normal"
                /**
                 * Location status
                 * type fullname: hosting.web.localSeo.location.StatusEnum
                 */
                export type StatusEnum = "created" | "creating" | "deleting" | "updating"
            }
        }
        /**
         * Local SEO accounts
         * interface fullName: hosting.web.localSeo_account.localSeo_account
         */
        export interface localSeo_account {
            creationDate: string;
            email: string;
            id: number;
            lastUpdate: string;
            status: hosting.web.localSeo.account.StatusEnum;
            taskId?: number;
        }
        /**
         * Local SEO locations
         * interface fullName: hosting.web.localSeo_location.localSeo_location
         */
        export interface localSeo_location {
            accountId?: number;
            address?: string;
            country: hosting.web.localSeo.location.CountryEnum;
            creationDate: string;
            id: number;
            lastUpdate: string;
            name?: string;
            offer: hosting.web.localSeo.location.OfferEnum;
            status: hosting.web.localSeo.location.StatusEnum;
            taskId?: number;
        }
        export namespace mail {
            /**
             * Types of action you can request for your mail
             * type fullname: hosting.web.mail.ActionEnum
             */
            export type ActionEnum = "BLOCK" | "PURGE" | "UNBLOCK"
            /**
             * The volume history type
             * interface fullName: hosting.web.mail.Bounce.Bounce
             */
            export interface Bounce {
                date: string;
                message?: string;
                to?: string;
            }
            /**
             * Mail state enum
             * type fullname: hosting.web.mail.StateEnum
             */
            export type StateEnum = "bounce" | "force" | "ko" | "ok" | "purging" | "spam"
            /**
             * The volume history type
             * interface fullName: hosting.web.mail.VolumeHistory.VolumeHistory
             */
            export interface VolumeHistory {
                date: string;
                volume?: number;
            }
        }
        /**
         * Hosting modules installed
         * interface fullName: hosting.web.module.module
         */
        export interface module {
            adminFolder: string;
            adminName: string;
            creationDate: string;
            dependencies: hosting.web.module.DependencyType[];
            id: number;
            language: hosting.web.module.LanguageEnum;
            lastUpdate: string;
            moduleId: number;
            path: string;
            status: hosting.web.module.StatusEnum;
            targetUrl: string;
            taskId?: number;
        }
        export namespace module {
            /**
             * The type of the admin name
             * type fullname: hosting.web.module.AdminNameTypeEnum
             */
            export type AdminNameTypeEnum = "email" | "string"
            /**
             * Branch enum
             * type fullname: hosting.web.module.BranchEnum
             */
            export type BranchEnum = "old" | "stable" | "testing"
            /**
             * Dependency parameters. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
             * interface fullName: hosting.web.module.DependencyType.DependencyType
             */
            export interface DependencyType {
                name?: string;
                password?: string;
                port?: number;
                prefix?: string;
                server?: string;
                type: hosting.web.module.DependencyTypeEnum;
                user?: string;
            }
            /**
             * The type of the dependency. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
             * type fullname: hosting.web.module.DependencyTypeEnum
             */
            export type DependencyTypeEnum = "mysql"
            /**
             * Install language
             * type fullname: hosting.web.module.LanguageEnum
             */
            export type LanguageEnum = "cz" | "de" | "en" | "es" | "fi" | "fr" | "it" | "lt" | "nl" | "pl" | "pt"
            /**
             * Module status
             * type fullname: hosting.web.module.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
        /**
         * Virtual service
         * interface fullName: hosting.web.ovhConfig.ovhConfig
         */
        export interface ovhConfig {
            container: string;
            creationDate: string;
            engineName: hosting.web.ovhConfig.EngineNameEnum;
            engineVersion: hosting.web.ovhConfig.EngineVersionEnum;
            environment: hosting.web.ovhConfig.EnvironmentEnum;
            fileExist: boolean;
            historical?: boolean;
            httpFirewall: hosting.web.ovhConfig.HttpFirewallEnum;
            id: number;
            path?: string;
            status: hosting.web.ovhConfig.StatusEnum;
            taskId?: number;
        }
        export namespace ovhConfig {
            /**
             * Hosting available configuration version
             * type fullname: hosting.web.ovhConfig.AvailableEngineVersionEnum
             */
            export type AvailableEngineVersionEnum = "5.4" | "5.5" | "5.6" | "7.0" | "7.1" | "7.2" | "7.3"
            /**
             * Hosting configuration engine
             * type fullname: hosting.web.ovhConfig.EngineNameEnum
             */
            export type EngineNameEnum = "php" | "phpcgi"
            /**
             * Hosting configuration version
             * type fullname: hosting.web.ovhConfig.EngineVersionEnum
             */
            export type EngineVersionEnum = "4.4" | "5.0" | "5.1" | "5.2" | "5.3" | "5.4" | "5.5" | "5.6" | "7.0" | "7.1" | "7.2" | "7.3" | "AUTO"
            /**
             * Hosting configuration environment
             * type fullname: hosting.web.ovhConfig.EnvironmentEnum
             */
            export type EnvironmentEnum = "development" | "production"
            /**
             * Hosting configuration firewall
             * type fullname: hosting.web.ovhConfig.HttpFirewallEnum
             */
            export type HttpFirewallEnum = "none" | "security"
            /**
             * Ovhconfig status
             * type fullname: hosting.web.ovhConfig.StatusEnum
             */
            export type StatusEnum = "created" | "rollbacking" | "updating"
        }
        export namespace ovhconfig {
            /**
             * Hosting configuration image to run website
             * type fullname: hosting.web.ovhconfig.ContainerEnum
             */
            export type ContainerEnum = "jessie.i386" | "legacy" | "stable" | "testing"
        }
        /**
         * Hosting own logs
         * interface fullName: hosting.web.ownLogs.ownLogs
         */
        export interface ownLogs {
            fqdn: string;
            id: number;
            status: hosting.web.ownLogs.StatusEnum;
            taskId?: number;
        }
        export namespace ownLogs {
            /**
             * OwnLogs status
             * type fullname: hosting.web.ownLogs.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting"
        }
        /**
         * The runtime configuration of an attached domain for cloud web offer
         * interface fullName: hosting.web.runtime.runtime
         */
        export interface runtime {
            appBootstrap?: string;
            appEnv: hosting.web.runtime.EnvEnum;
            creationDate: string;
            id: number;
            isDefault: boolean;
            isDeletable: boolean;
            lastUpdate: string;
            name?: string;
            publicDir?: string;
            status: hosting.web.runtime.StateEnum;
            taskId?: number;
            type: hosting.web.runtime.TypeEnum;
        }
        export namespace runtime {
            /**
             * Runtime env enum
             * type fullname: hosting.web.runtime.EnvEnum
             */
            export type EnvEnum = "development" | "production"
            /**
             * Runtime state enum
             * type fullname: hosting.web.runtime.StateEnum
             */
            export type StateEnum = "created" | "creating" | "deleting" | "updating"
            /**
             * Runtime backend type enum
             * type fullname: hosting.web.runtime.TypeEnum
             */
            export type TypeEnum = "nodejs-10" | "nodejs-11" | "nodejs-8" | "nodejs-9" | "phpfpm-5.6" | "phpfpm-7.0" | "phpfpm-7.1" | "phpfpm-7.2" | "phpfpm-7.3" | "phpfpm-7.4" | "python-2" | "python-3" | "ruby-2.4" | "ruby-2.5" | "ruby-2.6"
        }
        /**
         * Hostedssl
         * interface fullName: hosting.web.ssl.ssl
         */
        export interface ssl {
            isReportable: boolean;
            provider: string;
            regenerable: boolean;
            status: hosting.web.hostedssl.StatusEnum;
            taskId?: number;
            type: string;
        }
        /**
         * Hostedssl Report
         * interface fullName: hosting.web.ssl_report.ssl_report
         */
        export interface ssl_report {
            certificateSigningRequestStatus: hosting.web.hostedssl.ReportValueEnum;
            domainControlValidationStatus: hosting.web.hostedssl.ReportValueEnum;
            organizationValidationStatus: hosting.web.hostedssl.ReportValueEnum;
            phoneCallApprovalStatus: hosting.web.hostedssl.ReportValueEnum;
            providerOrderId: string;
            termsAndConditionsAcceptanceStatus: hosting.web.hostedssl.ReportValueEnum;
            tradeNameVerificationStatus: hosting.web.hostedssl.ReportValueEnum;
        }
        /**
         * Tasks
         * interface fullName: hosting.web.task.task
         */
        export interface task {
            doneDate?: string;
            function: string;
            id: number;
            lastUpdate?: string;
            objectId?: string;
            objectType?: hosting.web.task.ObjectTypeEnum;
            startDate: string;
            status: hosting.web.task.StatusEnum;
        }
        export namespace task {
            /**
             * Task object type listing
             * type fullname: hosting.web.task.ObjectTypeEnum
             */
            export type ObjectTypeEnum = "Abuse" | "AttachedDomain" | "BlockedIp" | "Cdn" | "Cron" | "Database" | "Dump" | "EnvVar" | "Filerz" | "Hostedssl" | "Hosting" | "Indy" | "Infra" | "Minor" | "Module" | "Other" | "OvhConfig" | "OvhOrg" | "OwnLogs" | "Runtime" | "Scan" | "Sqlperso" | "User" | "UserLogs" | "Web" | "Webd"
            /**
             * Task's status
             * type fullname: hosting.web.task.StatusEnum
             */
            export type StatusEnum = "cancelled" | "doing" | "done" | "error" | "init" | "todo"
        }
        /**
         * Hosting users
         * interface fullName: hosting.web.user.user
         */
        export interface user {
            home: string;
            isPrimaryAccount: boolean;
            login: string;
            serviceManagementCredentials: hosting.web.user.ServiceCredentials;
            sshState: hosting.web.user.SshStateEnum;
            state: hosting.web.user.StateEnum;
            status: hosting.web.user.StatusEnum;
            taskId?: number;
        }
        export namespace user {
            /**
             * User, url and port of a service
             * interface fullName: hosting.web.user.Credentials.Credentials
             */
            export interface Credentials {
                port: number;
                url: string;
                user: string;
            }
            /**
             * Different credentials to manage your service
             * interface fullName: hosting.web.user.ServiceCredentials.ServiceCredentials
             */
            export interface ServiceCredentials {
                ftp: hosting.web.user.Credentials;
                ssh: hosting.web.user.Credentials;
            }
            /**
             * Account's ssh state
             * type fullname: hosting.web.user.SshStateEnum
             */
            export type SshStateEnum = "active" | "none" | "sftponly"
            /**
             * Account's state
             * type fullname: hosting.web.user.StateEnum
             */
            export type StateEnum = "off" | "rw"
            /**
             * User status
             * type fullname: hosting.web.user.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
        /**
         * Hosting users logs
         * interface fullName: hosting.web.userLogs.userLogs
         */
        export interface userLogs {
            creationDate: string;
            description?: string;
            login: string;
            ownLogsId?: number;
            status: hosting.web.userLogs.StatusEnum;
            taskId?: number;
        }
        export namespace userLogs {
            /**
             * UserLogs status
             * type fullname: hosting.web.userLogs.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
    }
}
export namespace order {
    /**
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * Price with it's currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}

/**
 * END API /hosting/web Models
 */
export function proxyHostingWeb(ovhEngine: OvhRequestable): Hosting {
    return buildOvhProxy(ovhEngine, '/hosting');
}
export default proxyHostingWeb;
/**
 * Api model for /hosting/web
 */
export interface Hosting {
    web: {
        /**
         * List available services
         * GET /hosting/web
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        attachedDomain: {
            /**
             * Find hosting service linked to a domain
             * GET /hosting/web/attachedDomain
             */
            $get(params: { domain: string }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        availableOffer: {
            /**
             * Get available offer
             * GET /hosting/web/availableOffer
             */
            $get(params: { domain: string }): Promise<hosting.web.OfferEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        incident: {
            /**
             * Get current incident
             * GET /hosting/web/incident
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        localSeo: {
            directoriesList: {
                /**
                 * Get list of directories associated to a local SEO offer and a country
                 * GET /hosting/web/localSeo/directoriesList
                 */
                $get(params: { country: hosting.web.localSeo.location.CountryEnum, offer: hosting.web.localSeo.location.OfferEnum }): Promise<hosting.web.localSeo.DirectoriesList>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            emailAvailability: {
                /**
                 * Check email availability for a local SEO order
                 * GET /hosting/web/localSeo/emailAvailability
                 */
                $get(params: { email: string }): Promise<hosting.web.localSeo.EmailAvailability>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            visibilityCheck: {
                /**
                 * Check visibility of a location
                 * POST /hosting/web/localSeo/visibilityCheck
                 */
                $post(params: { country: hosting.web.localSeo.location.CountryEnum, name: string, street: string, zip: string }): Promise<hosting.web.localSeo.VisibilityCheckResponse>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            visibilityCheckResult: {
                /**
                 * Get the result of a visibility check
                 * GET /hosting/web/localSeo/visibilityCheckResult
                 */
                $get(params: { directory: string, id: number, token: string }): Promise<hosting.web.localSeo.VisibilityCheckResultResponse[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        moduleList: {
            /**
             * IDs of all modules available
             * GET /hosting/web/moduleList
             */
            $get(params?: { active?: boolean, branch?: hosting.web.module.BranchEnum, latest?: boolean }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /hosting/web/moduleList/{id}
                 */
                $get(): Promise<hosting.web.ModuleList>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        offerCapabilities: {
            /**
             * Get offer capabilities
             * GET /hosting/web/offerCapabilities
             */
            $get(params: { offer: hosting.web.OfferCapabilitiesEnum }): Promise<hosting.web.Capabilities>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /hosting/web/{serviceName}
             */
            $get(): Promise<hosting.web.Service>;
            /**
             * Alter this object properties
             * PUT /hosting/web/{serviceName}
             */
            $put(params?: { availableBoostOffer?: hosting.web.AvailableOfferStruct[], boostOffer?: hosting.web.OfferCapabilitiesEnum, cluster?: string, clusterIp?: string, clusterIpv6?: string, countriesIp?: hosting.web.CountriesIp[], datacenter?: hosting.web.DatacenterEnum, displayName?: string, filer?: string, hasCdn?: boolean, hasHostedSsl?: boolean, home?: string, hostingIp?: string, hostingIpv6?: string, lastOvhConfigScan?: string, offer?: hosting.web.OfferCapabilitiesEnum, operatingSystem?: hosting.web.OperatingSystemEnum, phpVersions?: hosting.web.PhpVersion[], primaryLogin?: string, quotaSize?: complexType.UnitAndValue<number>, quotaUsed?: complexType.UnitAndValue<number>, recommendedOffer?: hosting.web.OfferEnum, resourceType?: hosting.web.ResourceEnum, serviceManagementAccess?: hosting.web.ServiceAccess, serviceName?: string, state?: hosting.web.StateEnum, token?: string, trafficQuotaSize?: complexType.UnitAndValue<number>, trafficQuotaUsed?: complexType.UnitAndValue<number>, updates?: string[] }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            activatePrivateDatabase: {
                /**
                 * Activate an included private database on your hosting offer
                 * POST /hosting/web/{serviceName}/activatePrivateDatabase
                 */
                $post(params: { ram: hosting.PrivateDatabase.AvailableRamSizeEnum, version: hosting.PrivateDatabase.OrderableVersionEnum }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            attachedDomain: {
                /**
                 * Domains or subdomains attached to your hosting
                 * GET /hosting/web/{serviceName}/attachedDomain
                 */
                $get(params?: { domain?: string, path?: string }): Promise<string[]>;
                /**
                 * Link a domain to this hosting
                 * POST /hosting/web/{serviceName}/attachedDomain
                 */
                $post(params: { cdn?: hosting.web.attachedDomain.CdnEnum, domain: string, firewall?: hosting.web.attachedDomain.FirewallEnum, ownLog?: string, path: string, runtimeId?: number, ssl?: boolean }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domain: string): {
                    /**
                     * Unlink domain from hosting
                     * DELETE /hosting/web/{serviceName}/attachedDomain/{domain}
                     */
                    $delete(): Promise<hosting.web.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/attachedDomain/{domain}
                     */
                    $get(): Promise<hosting.web.attachedDomain>;
                    /**
                     * Alter this object properties
                     * PUT /hosting/web/{serviceName}/attachedDomain/{domain}
                     */
                    $put(params?: { cdn?: hosting.web.attachedDomain.CdnEnum, domain?: string, firewall?: hosting.web.attachedDomain.FirewallEnum, ipLocation?: hosting.web.CountryEnum, ownLog?: string, path?: string, runtimeId?: number, ssl?: boolean, status?: hosting.web.attachedDomain.StatusEnum, taskId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    purgeCache: {
                        /**
                         * Purge cache for this attached domain
                         * POST /hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache
                         */
                        $post(): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    restart: {
                        /**
                         * Restart the virtual host of the attached domain
                         * POST /hosting/web/{serviceName}/attachedDomain/{domain}/restart
                         */
                        $post(): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            boostHistory: {
                /**
                 * History of your hosting boost
                 * GET /hosting/web/{serviceName}/boostHistory
                 */
                $get(params?: { date?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(date: string): {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/boostHistory/{date}
                     */
                    $get(): Promise<hosting.web.boostHistory>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            cdn: {
                /**
                 * Get this object properties
                 * GET /hosting/web/{serviceName}/cdn
                 */
                $get(): Promise<hosting.web.cdn>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                serviceInfos: {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/cdn/serviceInfos
                     */
                    $get(): Promise<services.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                serviceInfosUpdate: {
                    /**
                     * Alter this object properties
                     * POST /hosting/web/{serviceName}/cdn/serviceInfosUpdate
                     */
                    $post(params: { renew: service.RenewType }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                terminate: {
                    /**
                     * Terminate your cdn sub service
                     * POST /hosting/web/{serviceName}/cdn/terminate
                     */
                    $post(): Promise<string>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /hosting/web/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            cron: {
                /**
                 * Crons on your hosting
                 * GET /hosting/web/{serviceName}/cron
                 */
                $get(params?: { command?: string, description?: string, email?: string, language?: hosting.web.cron.LanguageEnum }): Promise<number[]>;
                /**
                 * Create new cron
                 * POST /hosting/web/{serviceName}/cron
                 */
                $post(params: { command: string, description?: string, email?: string, frequency: string, language: hosting.web.cron.LanguageEnum, status?: hosting.web.cron.StatusEnum }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Delete cron
                     * DELETE /hosting/web/{serviceName}/cron/{id}
                     */
                    $delete(): Promise<string>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/cron/{id}
                     */
                    $get(): Promise<hosting.web.cron>;
                    /**
                     * Alter this object properties
                     * PUT /hosting/web/{serviceName}/cron/{id}
                     */
                    $put(params?: { command?: string, description?: string, email?: string, frequency?: string, id?: number, language?: hosting.web.cron.LanguageEnum, state?: hosting.web.cron.StateEnum, status?: hosting.web.cron.StatusEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            cronAvailableLanguage: {
                /**
                 * List available cron language
                 * GET /hosting/web/{serviceName}/cronAvailableLanguage
                 */
                $get(): Promise<hosting.web.cron.LanguageEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            database: {
                /**
                 * Databases linked to your hosting
                 * GET /hosting/web/{serviceName}/database
                 */
                $get(params?: { mode?: hosting.web.database.ModeEnum, name?: string, server?: string, type?: hosting.web.database.DatabaseTypeEnum, user?: string }): Promise<string[]>;
                /**
                 * Install new database
                 * POST /hosting/web/{serviceName}/database
                 */
                $post(params: { capabilitie: hosting.web.database.DatabaseCapabilitiesTypeEnum, password?: string, quota?: hosting.web.database.ExtraSqlQuotaEnum, type: hosting.web.database.DatabaseCreationTypeEnum, user: string, version?: hosting.web.database.VersionEnum }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(name: string): {
                    /**
                     * Delete database
                     * DELETE /hosting/web/{serviceName}/database/{name}
                     */
                    $delete(): Promise<hosting.web.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/database/{name}
                     */
                    $get(): Promise<hosting.web.database>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    capabilities: {
                        /**
                         * Get available capabilities for this database
                         * GET /hosting/web/{serviceName}/database/{name}/capabilities
                         */
                        $get(): Promise<hosting.web.database.DatabaseCapabilities>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    changePassword: {
                        /**
                         * Request a password change
                         * POST /hosting/web/{serviceName}/database/{name}/changePassword
                         */
                        $post(params: { password: string }): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    dump: {
                        /**
                         * Dump available for your databases
                         * GET /hosting/web/{serviceName}/database/{name}/dump
                         */
                        $get(params?: { creationDate?: string, deletionDate?: string, type?: hosting.web.database.dump.DateEnum }): Promise<number[]>;
                        /**
                         * Request the dump from your database
                         * POST /hosting/web/{serviceName}/database/{name}/dump
                         */
                        $post(params: { date: hosting.web.database.dump.DateEnum, sendEmail?: boolean }): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Delete dump before expiration date
                             * DELETE /hosting/web/{serviceName}/database/{name}/dump/{id}
                             */
                            $delete(): Promise<hosting.web.task>;
                            /**
                             * Get this object properties
                             * GET /hosting/web/{serviceName}/database/{name}/dump/{id}
                             */
                            $get(): Promise<hosting.web.database_dump>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            restore: {
                                /**
                                 * Request the restore from this dump
                                 * POST /hosting/web/{serviceName}/database/{name}/dump/{id}/restore
                                 */
                                $post(): Promise<hosting.web.task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    import: {
                        /**
                         * Import a dump from an specific file uploaded with /me/documents
                         * POST /hosting/web/{serviceName}/database/{name}/import
                         */
                        $post(params: { documentId: string, flushDatabase?: boolean, sendEmail?: boolean }): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    request: {
                        /**
                         * Request specific operation for your database
                         * POST /hosting/web/{serviceName}/database/{name}/request
                         */
                        $post(params: { action: hosting.web.database.RequestActionEnum }): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    restore: {
                        /**
                         * Request the restore from your database backup
                         * POST /hosting/web/{serviceName}/database/{name}/restore
                         */
                        $post(params: { date: hosting.web.database.dump.DateEnum, sendEmail?: boolean }): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    statistics: {
                        /**
                         * Get statistics about this database
                         * GET /hosting/web/{serviceName}/database/{name}/statistics
                         */
                        $get(params: { period: hosting.web.StatisticsPeriodEnum, type: hosting.web.database.StatisticsTypeEnum }): Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            databaseAvailableType: {
                /**
                 * List available database type
                 * GET /hosting/web/{serviceName}/databaseAvailableType
                 */
                $get(): Promise<hosting.web.database.DatabaseTypeEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            databaseAvailableVersion: {
                /**
                 * List available database version following a type
                 * GET /hosting/web/{serviceName}/databaseAvailableVersion
                 */
                $get(params: { type: hosting.web.database.DatabaseTypeEnum }): Promise<hosting.web.database.AvailableVersionStruct>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            databaseCreationCapabilities: {
                /**
                 * List available database you can install
                 * GET /hosting/web/{serviceName}/databaseCreationCapabilities
                 */
                $get(): Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            dump: {
                /**
                 * Dumps linked to your hosting
                 * GET /hosting/web/{serviceName}/dump
                 */
                $get(params?: { creationDate?: string, databaseName?: string, deletionDate?: string, orphan?: boolean }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Delete dump before expiration date
                     * DELETE /hosting/web/{serviceName}/dump/{id}
                     */
                    $delete(): Promise<hosting.web.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/dump/{id}
                     */
                    $get(): Promise<hosting.web.dump>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            email: {
                /**
                 * Get this object properties
                 * GET /hosting/web/{serviceName}/email
                 */
                $get(): Promise<hosting.web.email>;
                /**
                 * Alter this object properties
                 * PUT /hosting/web/{serviceName}/email
                 */
                $put(params?: { bounce?: number, email?: string, maxPerDay?: number, sent?: number, sentToday?: number, state?: hosting.web.mail.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                bounces: {
                    /**
                     * Request the last bounces
                     * GET /hosting/web/{serviceName}/email/bounces
                     */
                    $get(params: { limit: number }): Promise<hosting.web.mail.Bounce[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                request: {
                    /**
                     * Request specific operation for your email
                     * POST /hosting/web/{serviceName}/email/request
                     */
                    $post(params: { action: hosting.web.mail.ActionEnum }): Promise<string>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                volumes: {
                    /**
                     * Request the history volume of email sent
                     * GET /hosting/web/{serviceName}/email/volumes
                     */
                    $get(): Promise<hosting.web.mail.VolumeHistory[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            emailOption: {
                /**
                 * Mail service linked to webhosting
                 * GET /hosting/web/{serviceName}/emailOption
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/emailOption/{id}
                     */
                    $get(): Promise<hosting.web.emailoption>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    serviceInfos: {
                        /**
                         * Get the service properties
                         * GET /hosting/web/{serviceName}/emailOption/{id}/serviceInfos
                         */
                        $get(): Promise<services.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    terminate: {
                        /**
                         * Terminate your email sub service
                         * POST /hosting/web/{serviceName}/emailOption/{id}/terminate
                         */
                        $post(): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            envVar: {
                /**
                 * Environment variables set on your webhosting
                 * GET /hosting/web/{serviceName}/envVar
                 */
                $get(params?: { type?: hosting.web.envVar.TypeEnum }): Promise<string[]>;
                /**
                 * Set a variable to this hosting
                 * POST /hosting/web/{serviceName}/envVar
                 */
                $post(params: { key: string, type: hosting.web.envVar.TypeEnum, value: string }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(key: string): {
                    /**
                     * Remove variable from hosting
                     * DELETE /hosting/web/{serviceName}/envVar/{key}
                     */
                    $delete(): Promise<hosting.web.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/envVar/{key}
                     */
                    $get(): Promise<hosting.web.envVar>;
                    /**
                     * Alter this object properties
                     * PUT /hosting/web/{serviceName}/envVar/{key}
                     */
                    $put(params?: { key?: string, status?: hosting.web.envVar.StatusEnum, taskId?: number, type?: hosting.web.envVar.TypeEnum, value?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            extraSqlPerso: {
                /**
                 * Sqlperso linked to your hosting
                 * GET /hosting/web/{serviceName}/extraSqlPerso
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(name: string): {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/extraSqlPerso/{name}
                     */
                    $get(): Promise<hosting.web.extrasqlperso>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    databases: {
                        /**
                         * Get databases linked with this option
                         * GET /hosting/web/{serviceName}/extraSqlPerso/{name}/databases
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    serviceInfos: {
                        /**
                         * Get this object properties
                         * GET /hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos
                         */
                        $get(): Promise<services.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    serviceInfosUpdate: {
                        /**
                         * Alter this object properties
                         * POST /hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate
                         */
                        $post(params: { renew: service.RenewType }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    terminate: {
                        /**
                         * Terminate your extraSqlPerso sub service
                         * POST /hosting/web/{serviceName}/extraSqlPerso/{name}/terminate
                         */
                        $post(): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            freedom: {
                /**
                 * Freedom linked to this hosting account
                 * GET /hosting/web/{serviceName}/freedom
                 */
                $get(params?: { status?: hosting.web.freedom.StatusEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domain: string): {
                    /**
                     * Delete the freedom
                     * DELETE /hosting/web/{serviceName}/freedom/{domain}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/freedom/{domain}
                     */
                    $get(): Promise<hosting.web.freedom>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            indy: {
                /**
                 * User of multidomain independent allowed on your hosting
                 * GET /hosting/web/{serviceName}/indy
                 */
                $get(params?: { login?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(login: string): {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/indy/{login}
                     */
                    $get(): Promise<hosting.web.indy>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            localSeo: {
                account: {
                    /**
                     * Local SEO accounts associated to the hosting
                     * GET /hosting/web/{serviceName}/localSeo/account
                     */
                    $get(params?: { email?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /hosting/web/{serviceName}/localSeo/account/{id}
                         */
                        $get(): Promise<hosting.web.localSeo_account>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        login: {
                            /**
                             * Login this location for SSO
                             * POST /hosting/web/{serviceName}/localSeo/account/{id}/login
                             */
                            $post(): Promise<string>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
                emailAvailability: {
                    /**
                     * Check email availability for a local SEO order
                     * GET /hosting/web/{serviceName}/localSeo/emailAvailability
                     */
                    $get(params: { email: string }): Promise<hosting.web.localSeo.EmailAvailability>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                location: {
                    /**
                     * Local SEO locations associated to the hosting
                     * GET /hosting/web/{serviceName}/localSeo/location
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /hosting/web/{serviceName}/localSeo/location/{id}
                         */
                        $get(): Promise<hosting.web.localSeo_location>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        serviceInfos: {
                            /**
                             * Get this object properties
                             * GET /hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos
                             */
                            $get(): Promise<services.Service>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        serviceInfosUpdate: {
                            /**
                             * Alter this object properties
                             * POST /hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate
                             */
                            $post(params: { renew: service.RenewType }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        terminate: {
                            /**
                             * Terminate a local SEO sub service
                             * POST /hosting/web/{serviceName}/localSeo/location/{id}/terminate
                             */
                            $post(): Promise<string>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            }
            module: {
                /**
                 * Module installed on your hosting
                 * GET /hosting/web/{serviceName}/module
                 */
                $get(): Promise<number[]>;
                /**
                 * Install a new module
                 * POST /hosting/web/{serviceName}/module
                 */
                $post(params: { adminName?: string, adminPassword?: string, dependencies?: hosting.web.module.DependencyType[], domain?: string, language?: hosting.web.module.LanguageEnum, moduleId: number, path?: string }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Delete a module installed
                     * DELETE /hosting/web/{serviceName}/module/{id}
                     */
                    $delete(): Promise<hosting.web.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/module/{id}
                     */
                    $get(): Promise<hosting.web.module>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Generate a new admin password for your module
                         * POST /hosting/web/{serviceName}/module/{id}/changePassword
                         */
                        $post(): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            ovhConfig: {
                /**
                 * Configuration used on your hosting
                 * GET /hosting/web/{serviceName}/ovhConfig
                 */
                $get(params?: { historical?: boolean, path?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/ovhConfig/{id}
                     */
                    $get(): Promise<hosting.web.ovhConfig>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changeConfiguration: {
                        /**
                         * Apply a new configuration on this path
                         * POST /hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration
                         */
                        $post(params?: { container?: hosting.web.ovhconfig.ContainerEnum, engineName?: hosting.web.ovhConfig.EngineNameEnum, engineVersion?: hosting.web.ovhConfig.AvailableEngineVersionEnum, environment?: hosting.web.ovhConfig.EnvironmentEnum, httpFirewall?: hosting.web.ovhConfig.HttpFirewallEnum }): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    rollback: {
                        /**
                         * Rollback to an old configuration
                         * POST /hosting/web/{serviceName}/ovhConfig/{id}/rollback
                         */
                        $post(params: { rollbackId: number }): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            ovhConfigRefresh: {
                /**
                 * Synchronize the configuration listing with content on your hosting
                 * POST /hosting/web/{serviceName}/ovhConfigRefresh
                 */
                $post(): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ownLogs: {
                /**
                 * Own Logs linked to your hosting
                 * GET /hosting/web/{serviceName}/ownLogs
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/ownLogs/{id}
                     */
                    $get(): Promise<hosting.web.ownLogs>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    userLogs: {
                        /**
                         * User allowed to connect into your logs interface
                         * GET /hosting/web/{serviceName}/ownLogs/{id}/userLogs
                         */
                        $get(params?: { login?: string }): Promise<string[]>;
                        /**
                         * Create new userLogs
                         * POST /hosting/web/{serviceName}/ownLogs/{id}/userLogs
                         */
                        $post(params: { description: string, login: string, ownLogsId?: number, password: string }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(login: string): {
                            /**
                             * Delete the userLogs
                             * DELETE /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}
                             */
                            $delete(): Promise<string>;
                            /**
                             * Get this object properties
                             * GET /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}
                             */
                            $get(): Promise<hosting.web.userLogs>;
                            /**
                             * Alter this object properties
                             * PUT /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}
                             */
                            $put(params?: { creationDate?: string, description?: string, login?: string, ownLogsId?: number, status?: hosting.web.userLogs.StatusEnum, taskId?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            changePassword: {
                                /**
                                 * Request a password change
                                 * POST /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword
                                 */
                                $post(params: { password: string }): Promise<string>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                };
            }
            privateDatabaseCreationCapabilities: {
                /**
                 * List available privateDatabase you can install
                 * GET /hosting/web/{serviceName}/privateDatabaseCreationCapabilities
                 */
                $get(): Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            privateDatabases: {
                /**
                 * List linked privateDatabases
                 * GET /hosting/web/{serviceName}/privateDatabases
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            request: {
                /**
                 * Request specific operation for your hosting
                 * POST /hosting/web/{serviceName}/request
                 */
                $post(params: { action: hosting.web.RequestActionEnum }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            requestBoost: {
                /**
                 * Allows you to boost your offer.
                 * POST /hosting/web/{serviceName}/requestBoost
                 */
                $post(params?: { offer?: hosting.web.OfferEnum }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            restoreSnapshot: {
                /**
                 * Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT
                 * POST /hosting/web/{serviceName}/restoreSnapshot
                 */
                $post(params: { backup: hosting.web.backup.TypeEnum }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            runtime: {
                /**
                 * List of runtime configurations to your hosting
                 * GET /hosting/web/{serviceName}/runtime
                 */
                $get(params?: { name?: string, type?: hosting.web.runtime.TypeEnum }): Promise<number[]>;
                /**
                 * Request the creation of a new runtime configuration
                 * POST /hosting/web/{serviceName}/runtime
                 */
                $post(params?: { appBootstrap?: string, appEnv?: hosting.web.runtime.EnvEnum, attachedDomains?: string[], isDefault?: boolean, name?: string, publicDir?: string, type?: hosting.web.runtime.TypeEnum }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Delete a runtime configuration of an hosting
                     * DELETE /hosting/web/{serviceName}/runtime/{id}
                     */
                    $delete(): Promise<hosting.web.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/runtime/{id}
                     */
                    $get(): Promise<hosting.web.runtime>;
                    /**
                     * Alter this object properties
                     * PUT /hosting/web/{serviceName}/runtime/{id}
                     */
                    $put(params?: { appBootstrap?: string, appEnv?: hosting.web.runtime.EnvEnum, creationDate?: string, id?: number, isDefault?: boolean, isDeletable?: boolean, lastUpdate?: string, name?: string, publicDir?: string, status?: hosting.web.runtime.StateEnum, taskId?: number, type?: hosting.web.runtime.TypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    attachedDomains: {
                        /**
                         * Get the attached domains linked to this runtime configuration
                         * GET /hosting/web/{serviceName}/runtime/{id}/attachedDomains
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            runtimeAvailableTypes: {
                /**
                 * List available runtime configurations available backend types
                 * GET /hosting/web/{serviceName}/runtimeAvailableTypes
                 */
                $get(params?: { language?: string }): Promise<hosting.web.runtime.TypeEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /hosting/web/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /hosting/web/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ssl: {
                /**
                 * Delete the HostedSsl on your hosting
                 * DELETE /hosting/web/{serviceName}/ssl
                 */
                $delete(): Promise<hosting.web.ssl>;
                /**
                 * Get this object properties
                 * GET /hosting/web/{serviceName}/ssl
                 */
                $get(): Promise<hosting.web.ssl>;
                /**
                 * Create the free default HostedSsl OR import your proper SSL on your hosting
                 * POST /hosting/web/{serviceName}/ssl
                 */
                $post(params?: { certificate?: string, chain?: string, key?: string }): Promise<hosting.web.ssl>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                domains: {
                    /**
                     * Get domains linked to this HostedSsl
                     * GET /hosting/web/{serviceName}/ssl/domains
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                regenerate: {
                    /**
                     * Request the regeneration of your HostedSsl
                     * POST /hosting/web/{serviceName}/ssl/regenerate
                     */
                    $post(): Promise<hosting.web.ssl>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                report: {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/ssl/report
                     */
                    $get(): Promise<hosting.web.ssl_report>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            statistics: {
                /**
                 * Get statistics about this web hosting
                 * GET /hosting/web/{serviceName}/statistics
                 */
                $get(params: { period: hosting.web.StatisticsPeriodEnum, type: hosting.web.StatisticsTypeEnum }): Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            tasks: {
                /**
                 * Tasks attached to your hosting
                 * GET /hosting/web/{serviceName}/tasks
                 */
                $get(params?: { function_?: string, status?: hosting.web.task.StatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/tasks/{id}
                     */
                    $get(): Promise<hosting.web.task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /hosting/web/{serviceName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            token: {
                /**
                 * Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )
                 * GET /hosting/web/{serviceName}/token
                 */
                $get(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            user: {
                /**
                 * User allowed to connect into your hosting
                 * GET /hosting/web/{serviceName}/user
                 */
                $get(params?: { home?: string, login?: string }): Promise<string[]>;
                /**
                 * Create new ftp/ssh user
                 * POST /hosting/web/{serviceName}/user
                 */
                $post(params: { home: string, login: string, password: string, sshState?: hosting.web.user.SshStateEnum }): Promise<hosting.web.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(login: string): {
                    /**
                     * Delete ftp/ssh user
                     * DELETE /hosting/web/{serviceName}/user/{login}
                     */
                    $delete(): Promise<hosting.web.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/user/{login}
                     */
                    $get(): Promise<hosting.web.user>;
                    /**
                     * Alter this object properties
                     * PUT /hosting/web/{serviceName}/user/{login}
                     */
                    $put(params?: { home?: string, isPrimaryAccount?: boolean, login?: string, serviceManagementCredentials?: hosting.web.user.ServiceCredentials, sshState?: hosting.web.user.SshStateEnum, state?: hosting.web.user.StateEnum, status?: hosting.web.user.StatusEnum, taskId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Request a password change
                         * POST /hosting/web/{serviceName}/user/{login}/changePassword
                         */
                        $post(params: { password: string }): Promise<hosting.web.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            userLogs: {
                /**
                 * User allowed to connect into your logs interface
                 * GET /hosting/web/{serviceName}/userLogs
                 */
                $get(params?: { login?: string }): Promise<string[]>;
                /**
                 * Create new userLogs
                 * POST /hosting/web/{serviceName}/userLogs
                 */
                $post(params: { description: string, login: string, ownLogsId?: number, password: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(login: string): {
                    /**
                     * Delete the userLogs
                     * DELETE /hosting/web/{serviceName}/userLogs/{login}
                     */
                    $delete(): Promise<string>;
                    /**
                     * Get this object properties
                     * GET /hosting/web/{serviceName}/userLogs/{login}
                     */
                    $get(): Promise<hosting.web.userLogs>;
                    /**
                     * Alter this object properties
                     * PUT /hosting/web/{serviceName}/userLogs/{login}
                     */
                    $put(params?: { creationDate?: string, description?: string, login?: string, ownLogsId?: number, status?: hosting.web.userLogs.StatusEnum, taskId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Request a password change
                         * POST /hosting/web/{serviceName}/userLogs/{login}/changePassword
                         */
                        $post(params: { password: string }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            userLogsToken: {
                /**
                 * Get a temporary token to access the your web hosting logs interface
                 * GET /hosting/web/{serviceName}/userLogsToken
                 */
                $get(params?: { attachedDomain?: string, remoteCheck?: boolean, ttl?: number }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}

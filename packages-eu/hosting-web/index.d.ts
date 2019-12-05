import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /hosting/web Models
 */
export declare namespace complexType {
    interface ChartSerie<T> {
        serieName: string;
        unit: string;
        values: T[];
    }
    interface ChartTimestampValue {
        timestamp: number;
        value?: number;
    }
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace hosting {
    namespace PrivateDatabase {
        type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512";
        type OrderableVersionEnum = "mariadb_10.1" | "mariadb_10.2" | "mongodb_3.4" | "mongodb_4.0" | "mysql_5.5" | "mysql_5.6" | "mysql_5.7" | "postgresql_10" | "postgresql_11" | "postgresql_9.4" | "postgresql_9.5" | "postgresql_9.6" | "redis_3.2" | "redis_4.0";
    }
    namespace web {
        interface Address {
            port: number;
            url: string;
        }
        interface AvailableOfferStruct {
            offer: hosting.web.OfferEnum;
            price: order.Price;
        }
        interface Capabilities {
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
        interface CountriesIp {
            country: hosting.web.CountryEnum;
            ip: string;
            ipv6?: string;
        }
        type CountryEnum = "BE" | "CZ" | "DE" | "ES" | "FI" | "FR" | "IE" | "IT" | "LT" | "NL" | "PL" | "PT" | "UK";
        interface CreationEmailCapabilities {
            available: number;
            quota: complexType.UnitAndValue<number>;
        }
        interface CronLanguageAvailable {
            nodejs: hosting.web.NodejsVersionAvailableEnum[];
            php: hosting.web.PhpVersionAvailableEnum[];
            python: hosting.web.PythonVersionAvailableEnum[];
            ruby: hosting.web.RubyVersionAvailableEnum[];
        }
        type DatacenterEnum = "gra1" | "gra2" | "p19";
        interface DiskType {
            type: hosting.web.DiskTypeEnum;
            unit: string;
            value: number;
        }
        type DiskTypeEnum = "HDD" | "SSD";
        type HighLightEnum = "best-seller" | "new";
        interface ModuleList {
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
        type NodejsVersionAvailableEnum = "nodejs-10" | "nodejs-11" | "nodejs-8" | "nodejs-9";
        type OfferCapabilitiesEnum = "1000gp" | "20gp" | "240gp" | "240pack" | "240plan" | "300gp" | "60gp" | "720pack" | "720plan" | "90pack" | "90plan" | "CLOUDWEB_1" | "CLOUDWEB_2" | "CLOUDWEB_3" | "KS" | "PERFORMANCE_1" | "PERFORMANCE_2" | "PERFORMANCE_3" | "PERFORMANCE_4" | "PERSO" | "PRO" | "START" | "business" | "cloudweb1" | "cloudweb2" | "cloudweb3" | "cloudwebbetax1" | "depro2012" | "deprol2012" | "deproxl2012" | "deproxxl2012" | "destart2012" | "destartl2012" | "destartxl2012" | "domainpack" | "itbusiness2012" | "itperso2012" | "itpremium2012" | "kimsufi2015" | "mailpack" | "mailplan" | "mediapack" | "mediaplan" | "ovhpro1To" | "ovhpro2To" | "ovhpro5To" | "paas2014beta" | "perf2014x1" | "perf2014x2" | "perf2014x3" | "perf2014x4" | "perso2010" | "perso2014" | "premium" | "pro2010" | "pro2014" | "start10g" | "start10m" | "start1g" | "start1ges" | "start1m" | "start5g" | "starter" | "xxlpack" | "xxlplan";
        type OfferEnum = "CLOUDWEB_1" | "CLOUDWEB_2" | "CLOUDWEB_3" | "KS" | "PERFORMANCE_1" | "PERFORMANCE_2" | "PERFORMANCE_3" | "PERFORMANCE_4" | "PERSO" | "PRO" | "START";
        type OperatingSystemEnum = "linux";
        interface PhpVersion {
            support: hosting.web.PhpVersionStateEnum;
            version: string;
        }
        type PhpVersionAvailableEnum = "phpfpm-5.6" | "phpfpm-7.0" | "phpfpm-7.1" | "phpfpm-7.2" | "phpfpm-7.3";
        type PhpVersionStateEnum = "BETA" | "END_OF_LIFE" | "SECURITY_FIXES" | "SUPPORTED";
        type PythonVersionAvailableEnum = "python-2" | "python-3";
        type RequestActionEnum = "CHECK_QUOTA" | "FLUSH_CACHE" | "SCAN_ANTIHACK";
        type ResourceEnum = "bestEffort" | "cloud" | "dedicated" | "shared";
        type RubyVersionAvailableEnum = "ruby-2.4" | "ruby-2.5" | "ruby-2.6";
        interface Service {
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
        interface ServiceAccess {
            ftp: hosting.web.Address;
            http: hosting.web.Address;
            ssh: hosting.web.Address;
        }
        type StateEnum = "active" | "bloqued" | "maintenance";
        type StatisticsPeriodEnum = "daily" | "monthly" | "weekly" | "yearly";
        type StatisticsTypeEnum = "in.ftpCommands" | "in.httpHits" | "in.httpMeanResponseTime" | "out.tcpConn" | "sys.cpuUsage" | "sys.workerSpawnOverload";
        interface attachedDomain {
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
        namespace attachedDomain {
            type CdnEnum = "active" | "none";
            type FirewallEnum = "active" | "none";
            type StatusEnum = "created" | "creating" | "deleting" | "updating";
        }
        namespace backup {
            type TypeEnum = "daily.1" | "daily.2" | "daily.3" | "weekly.1" | "weekly.2";
        }
        interface boostHistory {
            accountId: string;
            boostOffer?: hosting.web.OfferCapabilitiesEnum;
            date: string;
            offer: hosting.web.OfferCapabilitiesEnum;
        }
        interface cdn {
            domain: string;
            free: boolean;
            status: hosting.web.cdn.StatusEnum;
            taskId?: number;
            type: string;
            version: string;
        }
        namespace cdn {
            type StatusEnum = "created" | "creating" | "deleting" | "flushing";
        }
        interface cron {
            command: string;
            description?: string;
            email?: string;
            frequency: string;
            id: number;
            language: hosting.web.cron.LanguageEnum;
            state: hosting.web.cron.StateEnum;
            status: hosting.web.cron.StatusEnum;
        }
        namespace cron {
            type LanguageEnum = "node10" | "node11" | "node8" | "node9" | "other" | "php4" | "php5.2" | "php5.3" | "php5.4" | "php5.5" | "php5.6" | "php7.0" | "php7.1" | "php7.2" | "php7.3" | "python2" | "python3" | "ruby2.4" | "ruby2.5" | "ruby2.6";
            type StateEnum = "created" | "creating" | "deleting" | "updating";
            type StatusEnum = "disabled" | "enabled" | "suspended";
        }
        interface database {
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
        namespace database {
            interface AvailableVersionStruct {
                default: hosting.web.database.VersionEnum;
                list: hosting.web.database.VersionEnum[];
            }
            interface CreationDatabaseCapabilities {
                available: number;
                engines: hosting.web.database.DatabaseTypeEnum[];
                isolation: hosting.web.database.DatabaseIsolationEnum;
                quota: complexType.UnitAndValue<number>;
                type: hosting.web.database.DatabaseCapabilitiesTypeEnum;
            }
            interface DatabaseCapabilities {
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
            type DatabaseCapabilitiesTypeEnum = "extraSqlPerso" | "local" | "privateDatabase" | "sqlLocal" | "sqlPerso" | "sqlPro";
            type DatabaseCreationTypeEnum = "mariadb" | "mysql" | "postgresql" | "redis";
            type DatabaseIsolationEnum = "dedicated" | "local" | "shared";
            type DatabaseTypeEnum = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis";
            type ExtraSqlQuotaEnum = 100 | 200 | 25 | 400 | 800;
            type ModeEnum = "besteffort" | "classic" | "module";
            type RequestActionEnum = "CHECK_QUOTA";
            type StateEnum = "close" | "ok" | "readonly";
            type StatisticsTypeEnum = "statement" | "statementMeanTime";
            type StatusEnum = "checking" | "created" | "creating" | "deleting" | "dumping" | "importing" | "locked" | "optimizing" | "restoring" | "updating";
            type SupportedVersionEnum = "beta" | "deprecated" | "stable";
            type VersionEnum = "3.4" | "4.0" | "5.1" | "5.5" | "5.6" | "8.4";
            namespace dump {
                type DateEnum = "daily.1" | "now" | "weekly.1";
                type StatusEnum = "created" | "creating" | "deleting";
            }
        }
        interface database_dump {
            creationDate: string;
            deletionDate: string;
            id: number;
            status: hosting.web.database.dump.StatusEnum;
            taskId?: number;
            type: hosting.web.database.dump.DateEnum;
            url?: string;
        }
        interface dump {
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
        interface email {
            bounce: number;
            email?: string;
            maxPerDay: number;
            sent: number;
            sentToday: number;
            state: hosting.web.mail.StateEnum;
        }
        interface emailoption {
            creationDate: string;
            domain: string;
            id: number;
        }
        interface envVar {
            key: string;
            status: hosting.web.envVar.StatusEnum;
            taskId?: number;
            type: hosting.web.envVar.TypeEnum;
            value: string;
        }
        namespace envVar {
            type StatusEnum = "created" | "creating" | "deleting" | "updating";
            type TypeEnum = "integer" | "password" | "string";
        }
        interface extrasqlperso {
            database: number;
            name: string;
            size: complexType.UnitAndValue<number>;
            status: string;
            taskId?: number;
        }
        interface freedom {
            domain: string;
            status: hosting.web.freedom.StatusEnum;
            type: string;
        }
        namespace freedom {
            type StatusEnum = "blockedByCustomer" | "blockedBySystem" | "ok" | "preset";
        }
        namespace hostedssl {
            type ReportValueEnum = "completed" | "in-progress" | "non-completed" | "non-required" | "not-applicable" | "not-provided";
            type StatusEnum = "created" | "creating" | "deleting" | "importing" | "regenerating";
        }
        interface indy {
            attachedDomains: string[];
            home: string;
            login: string;
            state: hosting.web.user.StateEnum;
        }
        namespace localSeo {
            interface DirectoriesList {
                navigationSystems: hosting.web.localSeo.Directory[];
                searchEngines: hosting.web.localSeo.Directory[];
                socialNetworks: hosting.web.localSeo.Directory[];
            }
            interface Directory {
                code: string;
                displayName: string;
            }
            interface EmailAvailability {
                availability: hosting.web.localSeo.account.EmailAvailabilityEnum;
                serviceName?: string;
            }
            type FieldStatusEnum = "MATCH" | "MISMATCH" | "MISSING" | "NOT_APPLICABLE" | "PRESENT";
            type FlowStatusEnum = "ALL_INFORMATION_SUBMITTED" | "DONT_REMOVE" | "INACTIVE" | "MANUALLY_DEACTIVATED" | "NEEDS_REVIEW" | "NOT_SUPPORTED" | "NO_ACTION_NEEDED" | "REMOVAL_NEEDED" | "REMOVAL_REVIEW_NEEDED" | "REMOVAL_SUBMITTED" | "REMOVED" | "SUBMISSION_NEEDED" | "WAITING_DIRECTORY_ACTION" | "WAITING_USER_ACTION";
            type ListingStatusEnum = "IN_SYNC" | "NOT_FOUND" | "NOT_IN_SYNC" | "NOT_SUPPORTED" | "NO_ONLINE_LISTING" | "TECHNICAL_PROBLEMS";
            interface SearchData {
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
            interface VisibilityCheckResponse {
                alreadyManaged?: boolean;
                searchData: hosting.web.localSeo.SearchData;
            }
            interface VisibilityCheckResultResponse {
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
            namespace account {
                type EmailAvailabilityEnum = "available" | "merge" | "nic" | "taken";
                type StatusEnum = "created" | "creating" | "deleting" | "updating";
            }
            namespace location {
                type CountryEnum = "FR";
                type OfferEnum = "normal";
                type StatusEnum = "created" | "creating" | "deleting" | "updating";
            }
        }
        interface localSeo_account {
            creationDate: string;
            email: string;
            id: number;
            lastUpdate: string;
            status: hosting.web.localSeo.account.StatusEnum;
            taskId?: number;
        }
        interface localSeo_location {
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
        namespace mail {
            type ActionEnum = "BLOCK" | "PURGE" | "UNBLOCK";
            interface Bounce {
                date: string;
                message?: string;
                to?: string;
            }
            type StateEnum = "bounce" | "force" | "ko" | "ok" | "purging" | "spam";
            interface VolumeHistory {
                date: string;
                volume?: number;
            }
        }
        interface module {
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
        namespace module {
            type AdminNameTypeEnum = "email" | "string";
            type BranchEnum = "old" | "stable" | "testing";
            interface DependencyType {
                name?: string;
                password?: string;
                port?: number;
                prefix?: string;
                server?: string;
                type: hosting.web.module.DependencyTypeEnum;
                user?: string;
            }
            type DependencyTypeEnum = "mysql";
            type LanguageEnum = "cz" | "de" | "en" | "es" | "fi" | "fr" | "it" | "lt" | "nl" | "pl" | "pt";
            type StatusEnum = "created" | "creating" | "deleting" | "updating";
        }
        interface ovhConfig {
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
        namespace ovhConfig {
            type AvailableEngineVersionEnum = "5.4" | "5.5" | "5.6" | "7.0" | "7.1" | "7.2" | "7.3";
            type EngineNameEnum = "php" | "phpcgi";
            type EngineVersionEnum = "4.4" | "5.0" | "5.1" | "5.2" | "5.3" | "5.4" | "5.5" | "5.6" | "7.0" | "7.1" | "7.2" | "7.3" | "AUTO";
            type EnvironmentEnum = "development" | "production";
            type HttpFirewallEnum = "none" | "security";
            type StatusEnum = "created" | "rollbacking" | "updating";
        }
        namespace ovhconfig {
            type ContainerEnum = "jessie.i386" | "legacy" | "stable" | "testing";
        }
        interface ownLogs {
            fqdn: string;
            id: number;
            status: hosting.web.ownLogs.StatusEnum;
            taskId?: number;
        }
        namespace ownLogs {
            type StatusEnum = "created" | "creating" | "deleting";
        }
        interface runtime {
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
        namespace runtime {
            type EnvEnum = "development" | "production";
            type StateEnum = "created" | "creating" | "deleting" | "updating";
            type TypeEnum = "nodejs-10" | "nodejs-11" | "nodejs-8" | "nodejs-9" | "phpfpm-5.6" | "phpfpm-7.0" | "phpfpm-7.1" | "phpfpm-7.2" | "phpfpm-7.3" | "python-2" | "python-3" | "ruby-2.4" | "ruby-2.5" | "ruby-2.6";
        }
        interface ssl {
            isReportable: boolean;
            provider: string;
            regenerable: boolean;
            status: hosting.web.hostedssl.StatusEnum;
            taskId?: number;
            type: string;
        }
        interface ssl_report {
            certificateSigningRequestStatus: hosting.web.hostedssl.ReportValueEnum;
            domainControlValidationStatus: hosting.web.hostedssl.ReportValueEnum;
            organizationValidationStatus: hosting.web.hostedssl.ReportValueEnum;
            phoneCallApprovalStatus: hosting.web.hostedssl.ReportValueEnum;
            providerOrderId: string;
            termsAndConditionsAcceptanceStatus: hosting.web.hostedssl.ReportValueEnum;
            tradeNameVerificationStatus: hosting.web.hostedssl.ReportValueEnum;
        }
        interface task {
            doneDate?: string;
            function: string;
            id: number;
            lastUpdate?: string;
            objectId?: string;
            objectType?: hosting.web.task.ObjectTypeEnum;
            startDate: string;
            status: hosting.web.task.StatusEnum;
        }
        namespace task {
            type ObjectTypeEnum = "Abuse" | "AttachedDomain" | "BlockedIp" | "Cdn" | "Cron" | "Database" | "Dump" | "EnvVar" | "Filerz" | "Hostedssl" | "Hosting" | "Indy" | "Infra" | "Minor" | "Module" | "Other" | "OvhConfig" | "OvhOrg" | "OwnLogs" | "Runtime" | "Scan" | "Sqlperso" | "User" | "UserLogs" | "Web" | "Webd";
            type StatusEnum = "cancelled" | "doing" | "done" | "error" | "init" | "todo";
        }
        interface user {
            home: string;
            isPrimaryAccount: boolean;
            login: string;
            serviceManagementCredentials: hosting.web.user.ServiceCredentials;
            sshState: hosting.web.user.SshStateEnum;
            state: hosting.web.user.StateEnum;
            status: hosting.web.user.StatusEnum;
            taskId?: number;
        }
        namespace user {
            interface Credentials {
                port: number;
                url: string;
                user: string;
            }
            interface ServiceCredentials {
                ftp: hosting.web.user.Credentials;
                ssh: hosting.web.user.Credentials;
            }
            type SshStateEnum = "active" | "none" | "sftponly";
            type StateEnum = "off" | "rw";
            type StatusEnum = "created" | "creating" | "deleting" | "updating";
        }
        interface userLogs {
            creationDate: string;
            description?: string;
            login: string;
            ownLogsId?: number;
            status: hosting.web.userLogs.StatusEnum;
            taskId?: number;
        }
        namespace userLogs {
            type StatusEnum = "created" | "creating" | "deleting" | "updating";
        }
    }
}
export declare namespace order {
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
    type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
}
export declare namespace services {
    interface Service {
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
export declare function proxyHostingWeb(ovhEngine: OvhRequestable): Hosting;
export default proxyHostingWeb;
/**
 * Api Proxy model
 */ export interface Hosting {
    web: {
        $get(): Promise<string[]>;
        attachedDomain: {
            $get(params: {
                domain: string;
            }): Promise<string[]>;
        };
        availableOffer: {
            $get(params: {
                domain: string;
            }): Promise<hosting.web.OfferEnum[]>;
        };
        incident: {
            $get(): Promise<string[]>;
        };
        localSeo: {
            directoriesList: {
                $get(params: {
                    country: hosting.web.localSeo.location.CountryEnum;
                    offer: hosting.web.localSeo.location.OfferEnum;
                }): Promise<hosting.web.localSeo.DirectoriesList>;
            };
            emailAvailability: {
                $get(params: {
                    email: string;
                }): Promise<hosting.web.localSeo.EmailAvailability>;
            };
            visibilityCheck: {
                $post(params: {
                    country: hosting.web.localSeo.location.CountryEnum;
                    name: string;
                    street: string;
                    zip: string;
                }): Promise<hosting.web.localSeo.VisibilityCheckResponse>;
            };
            visibilityCheckResult: {
                $get(params: {
                    directory: string;
                    id: number;
                    token: string;
                }): Promise<hosting.web.localSeo.VisibilityCheckResultResponse[]>;
            };
        };
        moduleList: {
            $get(params?: {
                active?: boolean;
                branch?: hosting.web.module.BranchEnum;
                latest?: boolean;
            }): Promise<number[]>;
            $(id: number): {
                $get(): Promise<hosting.web.ModuleList>;
            };
        };
        offerCapabilities: {
            $get(params: {
                offer: hosting.web.OfferCapabilitiesEnum;
            }): Promise<hosting.web.Capabilities>;
        };
        $(serviceName: string): {
            $get(): Promise<hosting.web.Service>;
            $put(params?: {
                availableBoostOffer?: hosting.web.AvailableOfferStruct[];
                boostOffer?: hosting.web.OfferCapabilitiesEnum;
                cluster?: string;
                clusterIp?: string;
                clusterIpv6?: string;
                countriesIp?: hosting.web.CountriesIp[];
                datacenter?: hosting.web.DatacenterEnum;
                displayName?: string;
                filer?: string;
                hasCdn?: boolean;
                hasHostedSsl?: boolean;
                home?: string;
                hostingIp?: string;
                hostingIpv6?: string;
                lastOvhConfigScan?: string;
                offer?: hosting.web.OfferCapabilitiesEnum;
                operatingSystem?: hosting.web.OperatingSystemEnum;
                phpVersions?: hosting.web.PhpVersion[];
                primaryLogin?: string;
                quotaSize?: complexType.UnitAndValue<number>;
                quotaUsed?: complexType.UnitAndValue<number>;
                recommendedOffer?: hosting.web.OfferEnum;
                resourceType?: hosting.web.ResourceEnum;
                serviceManagementAccess?: hosting.web.ServiceAccess;
                serviceName?: string;
                state?: hosting.web.StateEnum;
                token?: string;
                trafficQuotaSize?: complexType.UnitAndValue<number>;
                trafficQuotaUsed?: complexType.UnitAndValue<number>;
                updates?: string[];
            }): Promise<void>;
            activatePrivateDatabase: {
                $post(params: {
                    ram: hosting.PrivateDatabase.AvailableRamSizeEnum;
                    version: hosting.PrivateDatabase.OrderableVersionEnum;
                }): Promise<hosting.web.task>;
            };
            attachedDomain: {
                $get(params?: {
                    domain?: string;
                    path?: string;
                }): Promise<string[]>;
                $post(params: {
                    cdn?: hosting.web.attachedDomain.CdnEnum;
                    domain: string;
                    firewall?: hosting.web.attachedDomain.FirewallEnum;
                    ownLog?: string;
                    path: string;
                    runtimeId?: number;
                    ssl?: boolean;
                }): Promise<hosting.web.task>;
                $(domain: string): {
                    $delete(): Promise<hosting.web.task>;
                    $get(): Promise<hosting.web.attachedDomain>;
                    $put(params?: {
                        cdn?: hosting.web.attachedDomain.CdnEnum;
                        domain?: string;
                        firewall?: hosting.web.attachedDomain.FirewallEnum;
                        ipLocation?: hosting.web.CountryEnum;
                        ownLog?: string;
                        path?: string;
                        runtimeId?: number;
                        ssl?: boolean;
                        status?: hosting.web.attachedDomain.StatusEnum;
                        taskId?: number;
                    }): Promise<void>;
                    purgeCache: {
                        $post(): Promise<hosting.web.task>;
                    };
                    restart: {
                        $post(): Promise<hosting.web.task>;
                    };
                };
            };
            boostHistory: {
                $get(params?: {
                    date?: string;
                }): Promise<string[]>;
                $(date: string): {
                    $get(): Promise<hosting.web.boostHistory>;
                };
            };
            cdn: {
                $get(): Promise<hosting.web.cdn>;
                serviceInfos: {
                    $get(): Promise<services.Service>;
                };
                serviceInfosUpdate: {
                    $post(params: {
                        renew: service.RenewType;
                    }): Promise<void>;
                };
                terminate: {
                    $post(): Promise<string>;
                };
            };
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            cron: {
                $get(params?: {
                    command?: string;
                    description?: string;
                    email?: string;
                    language?: hosting.web.cron.LanguageEnum;
                }): Promise<number[]>;
                $post(params: {
                    command: string;
                    description?: string;
                    email?: string;
                    frequency: string;
                    language: hosting.web.cron.LanguageEnum;
                    status?: hosting.web.cron.StatusEnum;
                }): Promise<string>;
                $(id: number): {
                    $delete(): Promise<string>;
                    $get(): Promise<hosting.web.cron>;
                    $put(params?: {
                        command?: string;
                        description?: string;
                        email?: string;
                        frequency?: string;
                        id?: number;
                        language?: hosting.web.cron.LanguageEnum;
                        state?: hosting.web.cron.StateEnum;
                        status?: hosting.web.cron.StatusEnum;
                    }): Promise<void>;
                };
            };
            cronAvailableLanguage: {
                $get(): Promise<hosting.web.cron.LanguageEnum[]>;
            };
            database: {
                $get(params?: {
                    mode?: hosting.web.database.ModeEnum;
                    name?: string;
                    server?: string;
                    type?: hosting.web.database.DatabaseTypeEnum;
                    user?: string;
                }): Promise<string[]>;
                $post(params: {
                    capabilitie: hosting.web.database.DatabaseCapabilitiesTypeEnum;
                    password?: string;
                    quota?: hosting.web.database.ExtraSqlQuotaEnum;
                    type: hosting.web.database.DatabaseCreationTypeEnum;
                    user: string;
                    version?: hosting.web.database.VersionEnum;
                }): Promise<hosting.web.task>;
                $(name: string): {
                    $delete(): Promise<hosting.web.task>;
                    $get(): Promise<hosting.web.database>;
                    capabilities: {
                        $get(): Promise<hosting.web.database.DatabaseCapabilities>;
                    };
                    changePassword: {
                        $post(params: {
                            password: string;
                        }): Promise<hosting.web.task>;
                    };
                    dump: {
                        $get(params?: {
                            creationDate?: string;
                            deletionDate?: string;
                            type?: hosting.web.database.dump.DateEnum;
                        }): Promise<number[]>;
                        $post(params: {
                            date: hosting.web.database.dump.DateEnum;
                            sendEmail?: boolean;
                        }): Promise<hosting.web.task>;
                        $(id: number): {
                            $delete(): Promise<hosting.web.task>;
                            $get(): Promise<hosting.web.database_dump>;
                            restore: {
                                $post(): Promise<hosting.web.task>;
                            };
                        };
                    };
                    import: {
                        $post(params: {
                            documentId: string;
                            flushDatabase?: boolean;
                            sendEmail?: boolean;
                        }): Promise<hosting.web.task>;
                    };
                    request: {
                        $post(params: {
                            action: hosting.web.database.RequestActionEnum;
                        }): Promise<hosting.web.task>;
                    };
                    restore: {
                        $post(params: {
                            date: hosting.web.database.dump.DateEnum;
                            sendEmail?: boolean;
                        }): Promise<hosting.web.task>;
                    };
                    statistics: {
                        $get(params: {
                            period: hosting.web.StatisticsPeriodEnum;
                            type: hosting.web.database.StatisticsTypeEnum;
                        }): Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
                    };
                };
            };
            databaseAvailableType: {
                $get(): Promise<hosting.web.database.DatabaseTypeEnum[]>;
            };
            databaseAvailableVersion: {
                $get(params: {
                    type: hosting.web.database.DatabaseTypeEnum;
                }): Promise<hosting.web.database.AvailableVersionStruct>;
            };
            databaseCreationCapabilities: {
                $get(): Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
            };
            dump: {
                $get(params?: {
                    creationDate?: string;
                    databaseName?: string;
                    deletionDate?: string;
                    orphan?: boolean;
                }): Promise<number[]>;
                $(id: number): {
                    $delete(): Promise<hosting.web.task>;
                    $get(): Promise<hosting.web.dump>;
                };
            };
            email: {
                $get(): Promise<hosting.web.email>;
                $put(params?: {
                    bounce?: number;
                    email?: string;
                    maxPerDay?: number;
                    sent?: number;
                    sentToday?: number;
                    state?: hosting.web.mail.StateEnum;
                }): Promise<void>;
                bounces: {
                    $get(params: {
                        limit: number;
                    }): Promise<hosting.web.mail.Bounce[]>;
                };
                request: {
                    $post(params: {
                        action: hosting.web.mail.ActionEnum;
                    }): Promise<string>;
                };
                volumes: {
                    $get(): Promise<hosting.web.mail.VolumeHistory[]>;
                };
            };
            emailOption: {
                $get(): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<hosting.web.emailoption>;
                    serviceInfos: {
                        $get(): Promise<services.Service>;
                    };
                    terminate: {
                        $post(): Promise<string>;
                    };
                };
            };
            envVar: {
                $get(params?: {
                    type?: hosting.web.envVar.TypeEnum;
                }): Promise<string[]>;
                $post(params: {
                    key: string;
                    type: hosting.web.envVar.TypeEnum;
                    value: string;
                }): Promise<hosting.web.task>;
                $(key: string): {
                    $delete(): Promise<hosting.web.task>;
                    $get(): Promise<hosting.web.envVar>;
                    $put(params?: {
                        key?: string;
                        status?: hosting.web.envVar.StatusEnum;
                        taskId?: number;
                        type?: hosting.web.envVar.TypeEnum;
                        value?: string;
                    }): Promise<void>;
                };
            };
            extraSqlPerso: {
                $get(): Promise<string[]>;
                $(name: string): {
                    $get(): Promise<hosting.web.extrasqlperso>;
                    databases: {
                        $get(): Promise<string[]>;
                    };
                    serviceInfos: {
                        $get(): Promise<services.Service>;
                    };
                    serviceInfosUpdate: {
                        $post(params: {
                            renew: service.RenewType;
                        }): Promise<void>;
                    };
                    terminate: {
                        $post(): Promise<string>;
                    };
                };
            };
            freedom: {
                $get(params?: {
                    status?: hosting.web.freedom.StatusEnum;
                }): Promise<string[]>;
                $(domain: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<hosting.web.freedom>;
                };
            };
            indy: {
                $get(params?: {
                    login?: string;
                }): Promise<string[]>;
                $(login: string): {
                    $get(): Promise<hosting.web.indy>;
                };
            };
            localSeo: {
                account: {
                    $get(params?: {
                        email?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $get(): Promise<hosting.web.localSeo_account>;
                        login: {
                            $post(): Promise<string>;
                        };
                    };
                };
                emailAvailability: {
                    $get(params: {
                        email: string;
                    }): Promise<hosting.web.localSeo.EmailAvailability>;
                };
                location: {
                    $get(): Promise<number[]>;
                    $(id: number): {
                        $get(): Promise<hosting.web.localSeo_location>;
                        serviceInfos: {
                            $get(): Promise<services.Service>;
                        };
                        serviceInfosUpdate: {
                            $post(params: {
                                renew: service.RenewType;
                            }): Promise<void>;
                        };
                        terminate: {
                            $post(): Promise<string>;
                        };
                    };
                };
            };
            module: {
                $get(): Promise<number[]>;
                $post(params: {
                    adminName?: string;
                    adminPassword?: string;
                    dependencies?: hosting.web.module.DependencyType[];
                    domain?: string;
                    language?: hosting.web.module.LanguageEnum;
                    moduleId: number;
                    path?: string;
                }): Promise<hosting.web.task>;
                $(id: number): {
                    $delete(): Promise<hosting.web.task>;
                    $get(): Promise<hosting.web.module>;
                    changePassword: {
                        $post(): Promise<hosting.web.task>;
                    };
                };
            };
            ovhConfig: {
                $get(params?: {
                    historical?: boolean;
                    path?: string;
                }): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<hosting.web.ovhConfig>;
                    changeConfiguration: {
                        $post(params?: {
                            container?: hosting.web.ovhconfig.ContainerEnum;
                            engineName?: hosting.web.ovhConfig.EngineNameEnum;
                            engineVersion?: hosting.web.ovhConfig.AvailableEngineVersionEnum;
                            environment?: hosting.web.ovhConfig.EnvironmentEnum;
                            httpFirewall?: hosting.web.ovhConfig.HttpFirewallEnum;
                        }): Promise<hosting.web.task>;
                    };
                    rollback: {
                        $post(params: {
                            rollbackId: number;
                        }): Promise<hosting.web.task>;
                    };
                };
            };
            ovhConfigRefresh: {
                $post(): Promise<hosting.web.task>;
            };
            ownLogs: {
                $get(): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<hosting.web.ownLogs>;
                    userLogs: {
                        $get(params?: {
                            login?: string;
                        }): Promise<string[]>;
                        $post(params: {
                            description: string;
                            login: string;
                            ownLogsId?: number;
                            password: string;
                        }): Promise<string>;
                        $(login: string): {
                            $delete(): Promise<string>;
                            $get(): Promise<hosting.web.userLogs>;
                            $put(params?: {
                                creationDate?: string;
                                description?: string;
                                login?: string;
                                ownLogsId?: number;
                                status?: hosting.web.userLogs.StatusEnum;
                                taskId?: number;
                            }): Promise<void>;
                            changePassword: {
                                $post(params: {
                                    password: string;
                                }): Promise<string>;
                            };
                        };
                    };
                };
            };
            privateDatabaseCreationCapabilities: {
                $get(): Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
            };
            privateDatabases: {
                $get(): Promise<string[]>;
            };
            request: {
                $post(params: {
                    action: hosting.web.RequestActionEnum;
                }): Promise<hosting.web.task>;
            };
            requestBoost: {
                $post(params?: {
                    offer?: hosting.web.OfferEnum;
                }): Promise<hosting.web.task>;
            };
            restoreSnapshot: {
                $post(params: {
                    backup: hosting.web.backup.TypeEnum;
                }): Promise<hosting.web.task>;
            };
            runtime: {
                $get(params?: {
                    name?: string;
                    type?: hosting.web.runtime.TypeEnum;
                }): Promise<number[]>;
                $post(params?: {
                    appBootstrap?: string;
                    appEnv?: hosting.web.runtime.EnvEnum;
                    attachedDomains?: string[];
                    isDefault?: boolean;
                    name?: string;
                    publicDir?: string;
                    type?: hosting.web.runtime.TypeEnum;
                }): Promise<hosting.web.task>;
                $(id: number): {
                    $delete(): Promise<hosting.web.task>;
                    $get(): Promise<hosting.web.runtime>;
                    $put(params?: {
                        appBootstrap?: string;
                        appEnv?: hosting.web.runtime.EnvEnum;
                        creationDate?: string;
                        id?: number;
                        isDefault?: boolean;
                        isDeletable?: boolean;
                        lastUpdate?: string;
                        name?: string;
                        publicDir?: string;
                        status?: hosting.web.runtime.StateEnum;
                        taskId?: number;
                        type?: hosting.web.runtime.TypeEnum;
                    }): Promise<void>;
                    attachedDomains: {
                        $get(): Promise<string[]>;
                    };
                };
            };
            runtimeAvailableTypes: {
                $get(params?: {
                    language?: string;
                }): Promise<hosting.web.runtime.TypeEnum[]>;
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            ssl: {
                $delete(): Promise<hosting.web.ssl>;
                $get(): Promise<hosting.web.ssl>;
                $post(params?: {
                    certificate?: string;
                    chain?: string;
                    key?: string;
                }): Promise<hosting.web.ssl>;
                domains: {
                    $get(): Promise<string[]>;
                };
                regenerate: {
                    $post(): Promise<hosting.web.ssl>;
                };
                report: {
                    $get(): Promise<hosting.web.ssl_report>;
                };
            };
            statistics: {
                $get(params: {
                    period: hosting.web.StatisticsPeriodEnum;
                    type: hosting.web.StatisticsTypeEnum;
                }): Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
            };
            tasks: {
                $get(params?: {
                    function_?: string;
                    status?: hosting.web.task.StatusEnum;
                }): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<hosting.web.task>;
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
            token: {
                $get(): Promise<string>;
            };
            user: {
                $get(params?: {
                    home?: string;
                    login?: string;
                }): Promise<string[]>;
                $post(params: {
                    home: string;
                    login: string;
                    password: string;
                    sshState?: hosting.web.user.SshStateEnum;
                }): Promise<hosting.web.task>;
                $(login: string): {
                    $delete(): Promise<hosting.web.task>;
                    $get(): Promise<hosting.web.user>;
                    $put(params?: {
                        home?: string;
                        isPrimaryAccount?: boolean;
                        login?: string;
                        serviceManagementCredentials?: hosting.web.user.ServiceCredentials;
                        sshState?: hosting.web.user.SshStateEnum;
                        state?: hosting.web.user.StateEnum;
                        status?: hosting.web.user.StatusEnum;
                        taskId?: number;
                    }): Promise<void>;
                    changePassword: {
                        $post(params: {
                            password: string;
                        }): Promise<hosting.web.task>;
                    };
                };
            };
            userLogs: {
                $get(params?: {
                    login?: string;
                }): Promise<string[]>;
                $post(params: {
                    description: string;
                    login: string;
                    ownLogsId?: number;
                    password: string;
                }): Promise<string>;
                $(login: string): {
                    $delete(): Promise<string>;
                    $get(): Promise<hosting.web.userLogs>;
                    $put(params?: {
                        creationDate?: string;
                        description?: string;
                        login?: string;
                        ownLogsId?: number;
                        status?: hosting.web.userLogs.StatusEnum;
                        taskId?: number;
                    }): Promise<void>;
                    changePassword: {
                        $post(params: {
                            password: string;
                        }): Promise<string>;
                    };
                };
            };
            userLogsToken: {
                $get(params?: {
                    attachedDomain?: string;
                    remoteCheck?: boolean;
                    ttl?: number;
                }): Promise<string>;
            };
        };
    };
    /**
     * Operations about the HOSTING service
     * List available services
     */
    get(path: '/hosting/web'): () => Promise<string[]>;
    /**
     * Web Hosting
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.Service>;
    /**
     * List the hosting.web.attachedDomain objects
     * Domains or subdomains attached to your hosting
     */
    get(path: '/hosting/web/{serviceName}/attachedDomain'): (params: {
        serviceName: string;
        domain?: string;
        path?: string;
    }) => Promise<string[]>;
    /**
     * Virtual service
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/attachedDomain/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<hosting.web.attachedDomain>;
    /**
     * List the hosting.web.boostHistory objects
     * History of your hosting boost
     */
    get(path: '/hosting/web/{serviceName}/boostHistory'): (params: {
        serviceName: string;
        date?: string;
    }) => Promise<string[]>;
    /**
     * History of your boost requests
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/boostHistory/{date}'): (params: {
        date: string;
        serviceName: string;
    }) => Promise<hosting.web.boostHistory>;
    /**
     * CDN service
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/cdn'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.cdn>;
    /**
     * serviceInfos operations
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/cdn/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the hosting.web.cron objects
     * Crons on your hosting
     */
    get(path: '/hosting/web/{serviceName}/cron'): (params: {
        serviceName: string;
        command?: string;
        description?: string;
        email?: string;
        language?: hosting.web.cron.LanguageEnum;
    }) => Promise<number[]>;
    /**
     * Hosting crons
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/cron/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.cron>;
    /**
     * cronAvailableLanguage operations
     * List available cron language
     */
    get(path: '/hosting/web/{serviceName}/cronAvailableLanguage'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.cron.LanguageEnum[]>;
    /**
     * List the hosting.web.database objects
     * Databases linked to your hosting
     */
    get(path: '/hosting/web/{serviceName}/database'): (params: {
        serviceName: string;
        mode?: hosting.web.database.ModeEnum;
        name?: string;
        server?: string;
        type?: hosting.web.database.DatabaseTypeEnum;
        user?: string;
    }) => Promise<string[]>;
    /**
     * Database
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/database/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<hosting.web.database>;
    /**
     * capabilities operations
     * Get available capabilities for this database
     */
    get(path: '/hosting/web/{serviceName}/database/{name}/capabilities'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<hosting.web.database.DatabaseCapabilities>;
    /**
     * List the hosting.web.database.dump objects
     * Dump available for your databases
     */
    get(path: '/hosting/web/{serviceName}/database/{name}/dump'): (params: {
        name: string;
        serviceName: string;
        creationDate?: string;
        deletionDate?: string;
        type?: hosting.web.database.dump.DateEnum;
    }) => Promise<number[]>;
    /**
     * Dump
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}'): (params: {
        id: number;
        name: string;
        serviceName: string;
    }) => Promise<hosting.web.database_dump>;
    /**
     * statistics operations
     * Get statistics about this database
     */
    get(path: '/hosting/web/{serviceName}/database/{name}/statistics'): (params: {
        name: string;
        serviceName: string;
        period: hosting.web.StatisticsPeriodEnum;
        type: hosting.web.database.StatisticsTypeEnum;
    }) => Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
    /**
     * databaseAvailableType operations
     * List available database type
     */
    get(path: '/hosting/web/{serviceName}/databaseAvailableType'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.database.DatabaseTypeEnum[]>;
    /**
     * databaseAvailableVersion operations
     * List available database version following a type
     */
    get(path: '/hosting/web/{serviceName}/databaseAvailableVersion'): (params: {
        serviceName: string;
        type: hosting.web.database.DatabaseTypeEnum;
    }) => Promise<hosting.web.database.AvailableVersionStruct>;
    /**
     * databaseCreationCapabilities operations
     * List available database you can install
     */
    get(path: '/hosting/web/{serviceName}/databaseCreationCapabilities'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
    /**
     * List the hosting.web.dump objects
     * Dumps linked to your hosting
     */
    get(path: '/hosting/web/{serviceName}/dump'): (params: {
        serviceName: string;
        creationDate?: string;
        databaseName?: string;
        deletionDate?: string;
        orphan?: boolean;
    }) => Promise<number[]>;
    /**
     * Dump
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/dump/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.dump>;
    /**
     * Hosting automated emails
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/email'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.email>;
    /**
     * bounces operations
     * Request the last bounces
     */
    get(path: '/hosting/web/{serviceName}/email/bounces'): (params: {
        serviceName: string;
        limit: number;
    }) => Promise<hosting.web.mail.Bounce[]>;
    /**
     * volumes operations
     * Request the history volume of email sent
     */
    get(path: '/hosting/web/{serviceName}/email/volumes'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.mail.VolumeHistory[]>;
    /**
     * List the hosting.web.emailoption objects
     * Mail service linked to webhosting
     */
    get(path: '/hosting/web/{serviceName}/emailOption'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Mail service linked to webhosting
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/emailOption/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.emailoption>;
    /**
     * serviceInfos operations
     * Get the service properties
     */
    get(path: '/hosting/web/{serviceName}/emailOption/{id}/serviceInfos'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the hosting.web.envVar objects
     * Environment variables set on your webhosting
     */
    get(path: '/hosting/web/{serviceName}/envVar'): (params: {
        serviceName: string;
        type?: hosting.web.envVar.TypeEnum;
    }) => Promise<string[]>;
    /**
     * Environment variables set into your webhosting account
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/envVar/{key}'): (params: {
        key: string;
        serviceName: string;
    }) => Promise<hosting.web.envVar>;
    /**
     * List the hosting.web.extrasqlperso objects
     * Sqlperso linked to your hosting
     */
    get(path: '/hosting/web/{serviceName}/extraSqlPerso'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Sqlperso service
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<hosting.web.extrasqlperso>;
    /**
     * databases operations
     * Get databases linked with this option
     */
    get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/databases'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * serviceInfos operations
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the hosting.web.freedom objects
     * Freedom linked to this hosting account
     */
    get(path: '/hosting/web/{serviceName}/freedom'): (params: {
        serviceName: string;
        status?: hosting.web.freedom.StatusEnum;
    }) => Promise<string[]>;
    /**
     * Freedoms linked to this hosting account
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/freedom/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<hosting.web.freedom>;
    /**
     * List the hosting.web.indy objects
     * User of multidomain independent allowed on your hosting
     */
    get(path: '/hosting/web/{serviceName}/indy'): (params: {
        serviceName: string;
        login?: string;
    }) => Promise<string[]>;
    /**
     * Hosting indys
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/indy/{login}'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<hosting.web.indy>;
    /**
     * List the hosting.web.localSeo.account objects
     * Local SEO accounts associated to the hosting
     */
    get(path: '/hosting/web/{serviceName}/localSeo/account'): (params: {
        serviceName: string;
        email?: string;
    }) => Promise<number[]>;
    /**
     * Local SEO accounts
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/localSeo/account/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.localSeo_account>;
    /**
     * emailAvailability operations
     * Check email availability for a local SEO order
     */
    get(path: '/hosting/web/{serviceName}/localSeo/emailAvailability'): (params: {
        serviceName: string;
        email: string;
    }) => Promise<hosting.web.localSeo.EmailAvailability>;
    /**
     * List the hosting.web.localSeo.location objects
     * Local SEO locations associated to the hosting
     */
    get(path: '/hosting/web/{serviceName}/localSeo/location'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Local SEO locations
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/localSeo/location/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.localSeo_location>;
    /**
     * serviceInfos operations
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the hosting.web.module objects
     * Module installed on your hosting
     */
    get(path: '/hosting/web/{serviceName}/module'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Hosting modules installed
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/module/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.module>;
    /**
     * List the hosting.web.ovhConfig objects
     * Configuration used on your hosting
     */
    get(path: '/hosting/web/{serviceName}/ovhConfig'): (params: {
        serviceName: string;
        historical?: boolean;
        path?: string;
    }) => Promise<number[]>;
    /**
     * Virtual service
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/ovhConfig/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.ovhConfig>;
    /**
     * List the hosting.web.ownLogs objects
     * Own Logs linked to your hosting
     */
    get(path: '/hosting/web/{serviceName}/ownLogs'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Hosting own logs
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/ownLogs/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.ownLogs>;
    /**
     * List the hosting.web.userLogs objects
     * User allowed to connect into your logs interface
     */
    get(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs'): (params: {
        id: number;
        serviceName: string;
        login?: string;
    }) => Promise<string[]>;
    /**
     * Hosting users logs
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<hosting.web.userLogs>;
    /**
     * privateDatabaseCreationCapabilities operations
     * List available privateDatabase you can install
     */
    get(path: '/hosting/web/{serviceName}/privateDatabaseCreationCapabilities'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.database.CreationDatabaseCapabilities[]>;
    /**
     * privateDatabases operations
     * List linked privateDatabases
     */
    get(path: '/hosting/web/{serviceName}/privateDatabases'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * List the hosting.web.runtime objects
     * List of runtime configurations to your hosting
     */
    get(path: '/hosting/web/{serviceName}/runtime'): (params: {
        serviceName: string;
        name?: string;
        type?: hosting.web.runtime.TypeEnum;
    }) => Promise<number[]>;
    /**
     * The runtime configuration of an attached domain for cloud web offer
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/runtime/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.runtime>;
    /**
     * attachedDomains operations
     * Get the attached domains linked to this runtime configuration
     */
    get(path: '/hosting/web/{serviceName}/runtime/{id}/attachedDomains'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * runtimeAvailableTypes operations
     * List available runtime configurations available backend types
     */
    get(path: '/hosting/web/{serviceName}/runtimeAvailableTypes'): (params: {
        serviceName: string;
        language?: string;
    }) => Promise<hosting.web.runtime.TypeEnum[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Hostedssl
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/ssl'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.ssl>;
    /**
     * domains operations
     * Get domains linked to this HostedSsl
     */
    get(path: '/hosting/web/{serviceName}/ssl/domains'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Hostedssl Report
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/ssl/report'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.ssl_report>;
    /**
     * statistics operations
     * Get statistics about this web hosting
     */
    get(path: '/hosting/web/{serviceName}/statistics'): (params: {
        serviceName: string;
        period: hosting.web.StatisticsPeriodEnum;
        type: hosting.web.StatisticsTypeEnum;
    }) => Promise<complexType.ChartSerie<complexType.ChartTimestampValue>[]>;
    /**
     * List the hosting.web.task objects
     * Tasks attached to your hosting
     */
    get(path: '/hosting/web/{serviceName}/tasks'): (params: {
        serviceName: string;
        function_?: string;
        status?: hosting.web.task.StatusEnum;
    }) => Promise<number[]>;
    /**
     * Tasks
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/tasks/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * token operations
     * Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )
     */
    get(path: '/hosting/web/{serviceName}/token'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * List the hosting.web.user objects
     * User allowed to connect into your hosting
     */
    get(path: '/hosting/web/{serviceName}/user'): (params: {
        serviceName: string;
        home?: string;
        login?: string;
    }) => Promise<string[]>;
    /**
     * Hosting users
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/user/{login}'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<hosting.web.user>;
    /**
     * List the hosting.web.userLogs objects
     * User allowed to connect into your logs interface
     */
    get(path: '/hosting/web/{serviceName}/userLogs'): (params: {
        serviceName: string;
        login?: string;
    }) => Promise<string[]>;
    /**
     * Hosting users logs
     * Get this object properties
     */
    get(path: '/hosting/web/{serviceName}/userLogs/{login}'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<hosting.web.userLogs>;
    /**
     * userLogsToken operations
     * Get a temporary token to access the your web hosting logs interface
     */
    get(path: '/hosting/web/{serviceName}/userLogsToken'): (params: {
        serviceName: string;
        attachedDomain?: string;
        remoteCheck?: boolean;
        ttl?: number;
    }) => Promise<string>;
    /**
     * Find hosting service linked to a domain
     * Find hosting service linked to a domain
     */
    get(path: '/hosting/web/attachedDomain'): (params: {
        domain: string;
    }) => Promise<string[]>;
    /**
     * Get available offer
     * Get available offer
     */
    get(path: '/hosting/web/availableOffer'): (params: {
        domain: string;
    }) => Promise<hosting.web.OfferEnum[]>;
    /**
     * Get current incident
     * Get current incident
     */
    get(path: '/hosting/web/incident'): () => Promise<string[]>;
    /**
     * Get list of directories associated to a local SEO offer and a country
     * Get list of directories associated to a local SEO offer and a country
     */
    get(path: '/hosting/web/localSeo/directoriesList'): (params: {
        country: hosting.web.localSeo.location.CountryEnum;
        offer: hosting.web.localSeo.location.OfferEnum;
    }) => Promise<hosting.web.localSeo.DirectoriesList>;
    /**
     * Check email availability for a local SEO order
     * Check email availability for a local SEO order
     */
    get(path: '/hosting/web/localSeo/emailAvailability'): (params: {
        email: string;
    }) => Promise<hosting.web.localSeo.EmailAvailability>;
    /**
     * Get the result of a visibility check
     * Get the result of a visibility check
     */
    get(path: '/hosting/web/localSeo/visibilityCheckResult'): (params: {
        directory: string;
        id: number;
        token: string;
    }) => Promise<hosting.web.localSeo.VisibilityCheckResultResponse[]>;
    /**
     * List the hosting.web.ModuleList objects
     * IDs of all modules available
     */
    get(path: '/hosting/web/moduleList'): (params?: {
        active?: boolean;
        branch?: hosting.web.module.BranchEnum;
        latest?: boolean;
    }) => Promise<number[]>;
    /**
     * A module specifically packaged by OVH
     * Get this object properties
     */
    get(path: '/hosting/web/moduleList/{id}'): (params: {
        id: number;
    }) => Promise<hosting.web.ModuleList>;
    /**
     * Get offer capabilities
     * Get offer capabilities
     */
    get(path: '/hosting/web/offerCapabilities'): (params: {
        offer: hosting.web.OfferCapabilitiesEnum;
    }) => Promise<hosting.web.Capabilities>;
    /**
     * Web Hosting
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}'): (params: {
        serviceName: string;
        availableBoostOffer?: hosting.web.AvailableOfferStruct[];
        boostOffer?: hosting.web.OfferCapabilitiesEnum;
        cluster?: string;
        clusterIp?: string;
        clusterIpv6?: string;
        countriesIp?: hosting.web.CountriesIp[];
        datacenter?: hosting.web.DatacenterEnum;
        displayName?: string;
        filer?: string;
        hasCdn?: boolean;
        hasHostedSsl?: boolean;
        home?: string;
        hostingIp?: string;
        hostingIpv6?: string;
        lastOvhConfigScan?: string;
        offer?: hosting.web.OfferCapabilitiesEnum;
        operatingSystem?: hosting.web.OperatingSystemEnum;
        phpVersions?: hosting.web.PhpVersion[];
        primaryLogin?: string;
        quotaSize?: complexType.UnitAndValue<number>;
        quotaUsed?: complexType.UnitAndValue<number>;
        recommendedOffer?: hosting.web.OfferEnum;
        resourceType?: hosting.web.ResourceEnum;
        serviceManagementAccess?: hosting.web.ServiceAccess;
        state?: hosting.web.StateEnum;
        token?: string;
        trafficQuotaSize?: complexType.UnitAndValue<number>;
        trafficQuotaUsed?: complexType.UnitAndValue<number>;
        updates?: string[];
    }) => Promise<void>;
    /**
     * Virtual service
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/attachedDomain/{domain}'): (params: {
        domain: string;
        serviceName: string;
        cdn?: hosting.web.attachedDomain.CdnEnum;
        firewall?: hosting.web.attachedDomain.FirewallEnum;
        ipLocation?: hosting.web.CountryEnum;
        ownLog?: string;
        path?: string;
        runtimeId?: number;
        ssl?: boolean;
        status?: hosting.web.attachedDomain.StatusEnum;
        taskId?: number;
    }) => Promise<void>;
    /**
     * Hosting crons
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/cron/{id}'): (params: {
        id: number;
        serviceName: string;
        command?: string;
        description?: string;
        email?: string;
        frequency?: string;
        language?: hosting.web.cron.LanguageEnum;
        state?: hosting.web.cron.StateEnum;
        status?: hosting.web.cron.StatusEnum;
    }) => Promise<void>;
    /**
     * Hosting automated emails
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/email'): (params: {
        serviceName: string;
        bounce?: number;
        email?: string;
        maxPerDay?: number;
        sent?: number;
        sentToday?: number;
        state?: hosting.web.mail.StateEnum;
    }) => Promise<void>;
    /**
     * Environment variables set into your webhosting account
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/envVar/{key}'): (params: {
        key: string;
        serviceName: string;
        status?: hosting.web.envVar.StatusEnum;
        taskId?: number;
        type?: hosting.web.envVar.TypeEnum;
        value?: string;
    }) => Promise<void>;
    /**
     * Hosting users logs
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}'): (params: {
        id: number;
        login: string;
        serviceName: string;
        creationDate?: string;
        description?: string;
        ownLogsId?: number;
        status?: hosting.web.userLogs.StatusEnum;
        taskId?: number;
    }) => Promise<void>;
    /**
     * The runtime configuration of an attached domain for cloud web offer
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/runtime/{id}'): (params: {
        id: number;
        serviceName: string;
        appBootstrap?: string;
        appEnv?: hosting.web.runtime.EnvEnum;
        creationDate?: string;
        isDefault?: boolean;
        isDeletable?: boolean;
        lastUpdate?: string;
        name?: string;
        publicDir?: string;
        status?: hosting.web.runtime.StateEnum;
        taskId?: number;
        type?: hosting.web.runtime.TypeEnum;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Hosting users
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/user/{login}'): (params: {
        login: string;
        serviceName: string;
        home?: string;
        isPrimaryAccount?: boolean;
        serviceManagementCredentials?: hosting.web.user.ServiceCredentials;
        sshState?: hosting.web.user.SshStateEnum;
        state?: hosting.web.user.StateEnum;
        status?: hosting.web.user.StatusEnum;
        taskId?: number;
    }) => Promise<void>;
    /**
     * Hosting users logs
     * Alter this object properties
     */
    put(path: '/hosting/web/{serviceName}/userLogs/{login}'): (params: {
        login: string;
        serviceName: string;
        creationDate?: string;
        description?: string;
        ownLogsId?: number;
        status?: hosting.web.userLogs.StatusEnum;
        taskId?: number;
    }) => Promise<void>;
    /**
     * activatePrivateDatabase operations
     * Activate an included private database on your hosting offer
     */
    post(path: '/hosting/web/{serviceName}/activatePrivateDatabase'): (params: {
        serviceName: string;
        ram: hosting.PrivateDatabase.AvailableRamSizeEnum;
        version: hosting.PrivateDatabase.OrderableVersionEnum;
    }) => Promise<hosting.web.task>;
    /**
     * List the hosting.web.attachedDomain objects
     * Link a domain to this hosting
     */
    post(path: '/hosting/web/{serviceName}/attachedDomain'): (params: {
        serviceName: string;
        cdn?: hosting.web.attachedDomain.CdnEnum;
        domain: string;
        firewall?: hosting.web.attachedDomain.FirewallEnum;
        ownLog?: string;
        path: string;
        runtimeId?: number;
        ssl?: boolean;
    }) => Promise<hosting.web.task>;
    /**
     * purgeCache operations
     * Purge cache for this attached domain
     */
    post(path: '/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * restart operations
     * Restart the virtual host of the attached domain
     */
    post(path: '/hosting/web/{serviceName}/attachedDomain/{domain}/restart'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * serviceInfosUpdate operations
     * Alter this object properties
     */
    post(path: '/hosting/web/{serviceName}/cdn/serviceInfosUpdate'): (params: {
        serviceName: string;
        renew: service.RenewType;
    }) => Promise<void>;
    /**
     * terminate operations
     * Terminate your cdn sub service
     */
    post(path: '/hosting/web/{serviceName}/cdn/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/hosting/web/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/hosting/web/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * List the hosting.web.cron objects
     * Create new cron
     */
    post(path: '/hosting/web/{serviceName}/cron'): (params: {
        serviceName: string;
        command: string;
        description?: string;
        email?: string;
        frequency: string;
        language: hosting.web.cron.LanguageEnum;
        status?: hosting.web.cron.StatusEnum;
    }) => Promise<string>;
    /**
     * List the hosting.web.database objects
     * Install new database
     */
    post(path: '/hosting/web/{serviceName}/database'): (params: {
        serviceName: string;
        capabilitie: hosting.web.database.DatabaseCapabilitiesTypeEnum;
        password?: string;
        quota?: hosting.web.database.ExtraSqlQuotaEnum;
        type: hosting.web.database.DatabaseCreationTypeEnum;
        user: string;
        version?: hosting.web.database.VersionEnum;
    }) => Promise<hosting.web.task>;
    /**
     * changePassword operations
     * Request a password change
     */
    post(path: '/hosting/web/{serviceName}/database/{name}/changePassword'): (params: {
        name: string;
        serviceName: string;
        password: string;
    }) => Promise<hosting.web.task>;
    /**
     * List the hosting.web.database.dump objects
     * Request the dump from your database
     */
    post(path: '/hosting/web/{serviceName}/database/{name}/dump'): (params: {
        name: string;
        serviceName: string;
        date: hosting.web.database.dump.DateEnum;
        sendEmail?: boolean;
    }) => Promise<hosting.web.task>;
    /**
     * restore operations
     * Request the restore from this dump
     */
    post(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}/restore'): (params: {
        id: number;
        name: string;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * import operations
     * Import a dump from an specific file uploaded with /me/documents
     */
    post(path: '/hosting/web/{serviceName}/database/{name}/import'): (params: {
        name: string;
        serviceName: string;
        documentId: string;
        flushDatabase?: boolean;
        sendEmail?: boolean;
    }) => Promise<hosting.web.task>;
    /**
     * request operations
     * Request specific operation for your database
     */
    post(path: '/hosting/web/{serviceName}/database/{name}/request'): (params: {
        name: string;
        serviceName: string;
        action: hosting.web.database.RequestActionEnum;
    }) => Promise<hosting.web.task>;
    /**
     * restore operations
     * Request the restore from your database backup
     */
    post(path: '/hosting/web/{serviceName}/database/{name}/restore'): (params: {
        name: string;
        serviceName: string;
        date: hosting.web.database.dump.DateEnum;
        sendEmail?: boolean;
    }) => Promise<hosting.web.task>;
    /**
     * request operations
     * Request specific operation for your email
     */
    post(path: '/hosting/web/{serviceName}/email/request'): (params: {
        serviceName: string;
        action: hosting.web.mail.ActionEnum;
    }) => Promise<string>;
    /**
     * terminate operations
     * Terminate your email sub service
     */
    post(path: '/hosting/web/{serviceName}/emailOption/{id}/terminate'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<string>;
    /**
     * List the hosting.web.envVar objects
     * Set a variable to this hosting
     */
    post(path: '/hosting/web/{serviceName}/envVar'): (params: {
        serviceName: string;
        key: string;
        type: hosting.web.envVar.TypeEnum;
        value: string;
    }) => Promise<hosting.web.task>;
    /**
     * serviceInfosUpdate operations
     * Alter this object properties
     */
    post(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate'): (params: {
        name: string;
        serviceName: string;
        renew: service.RenewType;
    }) => Promise<void>;
    /**
     * terminate operations
     * Terminate your extraSqlPerso sub service
     */
    post(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<string>;
    /**
     * login operations
     * Login this location for SSO
     */
    post(path: '/hosting/web/{serviceName}/localSeo/account/{id}/login'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<string>;
    /**
     * serviceInfosUpdate operations
     * Alter this object properties
     */
    post(path: '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate'): (params: {
        id: number;
        serviceName: string;
        renew: service.RenewType;
    }) => Promise<void>;
    /**
     * terminate operations
     * Terminate a local SEO sub service
     */
    post(path: '/hosting/web/{serviceName}/localSeo/location/{id}/terminate'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<string>;
    /**
     * List the hosting.web.module objects
     * Install a new module
     */
    post(path: '/hosting/web/{serviceName}/module'): (params: {
        serviceName: string;
        adminName?: string;
        adminPassword?: string;
        dependencies?: hosting.web.module.DependencyType[];
        domain?: string;
        language?: hosting.web.module.LanguageEnum;
        moduleId: number;
        path?: string;
    }) => Promise<hosting.web.task>;
    /**
     * changePassword operations
     * Generate a new admin password for your module
     */
    post(path: '/hosting/web/{serviceName}/module/{id}/changePassword'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * changeConfiguration operations
     * Apply a new configuration on this path
     */
    post(path: '/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration'): (params: {
        id: number;
        serviceName: string;
        container?: hosting.web.ovhconfig.ContainerEnum;
        engineName?: hosting.web.ovhConfig.EngineNameEnum;
        engineVersion?: hosting.web.ovhConfig.AvailableEngineVersionEnum;
        environment?: hosting.web.ovhConfig.EnvironmentEnum;
        httpFirewall?: hosting.web.ovhConfig.HttpFirewallEnum;
    }) => Promise<hosting.web.task>;
    /**
     * rollback operations
     * Rollback to an old configuration
     */
    post(path: '/hosting/web/{serviceName}/ovhConfig/{id}/rollback'): (params: {
        id: number;
        serviceName: string;
        rollbackId: number;
    }) => Promise<hosting.web.task>;
    /**
     * ovhConfigRefresh operations
     * Synchronize the configuration listing with content on your hosting
     */
    post(path: '/hosting/web/{serviceName}/ovhConfigRefresh'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * List the hosting.web.userLogs objects
     * Create new userLogs
     */
    post(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs'): (params: {
        id: number;
        serviceName: string;
        description: string;
        login: string;
        ownLogsId?: number;
        password: string;
    }) => Promise<string>;
    /**
     * changePassword operations
     * Request a password change
     */
    post(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword'): (params: {
        id: number;
        login: string;
        serviceName: string;
        password: string;
    }) => Promise<string>;
    /**
     * request operations
     * Request specific operation for your hosting
     */
    post(path: '/hosting/web/{serviceName}/request'): (params: {
        serviceName: string;
        action: hosting.web.RequestActionEnum;
    }) => Promise<hosting.web.task>;
    /**
     * requestBoost operations
     * Allows you to boost your offer.
     */
    post(path: '/hosting/web/{serviceName}/requestBoost'): (params: {
        serviceName: string;
        offer?: hosting.web.OfferEnum;
    }) => Promise<hosting.web.task>;
    /**
     * restoreSnapshot operations
     * Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT
     */
    post(path: '/hosting/web/{serviceName}/restoreSnapshot'): (params: {
        serviceName: string;
        backup: hosting.web.backup.TypeEnum;
    }) => Promise<hosting.web.task>;
    /**
     * List the hosting.web.runtime objects
     * Request the creation of a new runtime configuration
     */
    post(path: '/hosting/web/{serviceName}/runtime'): (params: {
        serviceName: string;
        appBootstrap?: string;
        appEnv?: hosting.web.runtime.EnvEnum;
        attachedDomains?: string[];
        isDefault?: boolean;
        name?: string;
        publicDir?: string;
        type?: hosting.web.runtime.TypeEnum;
    }) => Promise<hosting.web.task>;
    /**
     * Hostedssl
     * Create the free default HostedSsl OR import your proper SSL on your hosting
     */
    post(path: '/hosting/web/{serviceName}/ssl'): (params: {
        serviceName: string;
        certificate?: string;
        chain?: string;
        key?: string;
    }) => Promise<hosting.web.ssl>;
    /**
     * regenerate operations
     * Request the regeneration of your HostedSsl
     */
    post(path: '/hosting/web/{serviceName}/ssl/regenerate'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.ssl>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/hosting/web/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * List the hosting.web.user objects
     * Create new ftp/ssh user
     */
    post(path: '/hosting/web/{serviceName}/user'): (params: {
        serviceName: string;
        home: string;
        login: string;
        password: string;
        sshState?: hosting.web.user.SshStateEnum;
    }) => Promise<hosting.web.task>;
    /**
     * changePassword operations
     * Request a password change
     */
    post(path: '/hosting/web/{serviceName}/user/{login}/changePassword'): (params: {
        login: string;
        serviceName: string;
        password: string;
    }) => Promise<hosting.web.task>;
    /**
     * List the hosting.web.userLogs objects
     * Create new userLogs
     */
    post(path: '/hosting/web/{serviceName}/userLogs'): (params: {
        serviceName: string;
        description: string;
        login: string;
        ownLogsId?: number;
        password: string;
    }) => Promise<string>;
    /**
     * changePassword operations
     * Request a password change
     */
    post(path: '/hosting/web/{serviceName}/userLogs/{login}/changePassword'): (params: {
        login: string;
        serviceName: string;
        password: string;
    }) => Promise<string>;
    /**
     * Check visibility of a location
     * Check visibility of a location
     */
    post(path: '/hosting/web/localSeo/visibilityCheck'): (params: {
        country: hosting.web.localSeo.location.CountryEnum;
        name: string;
        street: string;
        zip: string;
    }) => Promise<hosting.web.localSeo.VisibilityCheckResponse>;
    /**
     * Virtual service
     * Unlink domain from hosting
     */
    delete(path: '/hosting/web/{serviceName}/attachedDomain/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * Hosting crons
     * Delete cron
     */
    delete(path: '/hosting/web/{serviceName}/cron/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<string>;
    /**
     * Database
     * Delete database
     */
    delete(path: '/hosting/web/{serviceName}/database/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * Dump
     * Delete dump before expiration date
     */
    delete(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}'): (params: {
        id: number;
        name: string;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * Dump
     * Delete dump before expiration date
     */
    delete(path: '/hosting/web/{serviceName}/dump/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * Environment variables set into your webhosting account
     * Remove variable from hosting
     */
    delete(path: '/hosting/web/{serviceName}/envVar/{key}'): (params: {
        key: string;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * Freedoms linked to this hosting account
     * Delete the freedom
     */
    delete(path: '/hosting/web/{serviceName}/freedom/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Hosting modules installed
     * Delete a module installed
     */
    delete(path: '/hosting/web/{serviceName}/module/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * Hosting users logs
     * Delete the userLogs
     */
    delete(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}'): (params: {
        id: number;
        login: string;
        serviceName: string;
    }) => Promise<string>;
    /**
     * The runtime configuration of an attached domain for cloud web offer
     * Delete a runtime configuration of an hosting
     */
    delete(path: '/hosting/web/{serviceName}/runtime/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * Hostedssl
     * Delete the HostedSsl on your hosting
     */
    delete(path: '/hosting/web/{serviceName}/ssl'): (params: {
        serviceName: string;
    }) => Promise<hosting.web.ssl>;
    /**
     * Hosting users
     * Delete ftp/ssh user
     */
    delete(path: '/hosting/web/{serviceName}/user/{login}'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<hosting.web.task>;
    /**
     * Hosting users logs
     * Delete the userLogs
     */
    delete(path: '/hosting/web/{serviceName}/userLogs/{login}'): (params: {
        login: string;
        serviceName: string;
    }) => Promise<string>;
}

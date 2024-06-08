import { buildOvhProxy } from '@ovh-api/common';
import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /hosting/privateDatabase Models
 * Source: https://ca.api.ovh.com/1.0/hosting/privateDatabase.json
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
         * Description for available order capacities following an offer
         * interface fullName: hosting.PrivateDatabase.AvailableOrderCapacities.AvailableOrderCapacities
         */
        export interface AvailableOrderCapacities {
            datacenter: hosting.PrivateDatabase.DatacenterEnum[];
            offer: hosting.PrivateDatabase.OfferEnum;
            ram: hosting.PrivateDatabase.AvailableRamSizeEnum[];
            version: hosting.PrivateDatabase.AvailableVersionEnum[];
        }
        /**
         * Private database available ram sizes
         * type fullname: hosting.PrivateDatabase.AvailableRamSizeEnum
         */
        export type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512"
        /**
         * Private database available versions
         * type fullname: hosting.PrivateDatabase.AvailableVersionEnum
         */
        export type AvailableVersionEnum = "mariadb_10.11" | "mariadb_10.4" | "mariadb_10.5" | "mariadb_10.6" | "mysql_5.7" | "mysql_8.0" | "postgresql_12" | "postgresql_13" | "postgresql_14" | "postgresql_15" | "redis_6.0" | "redis_7.0"
        /**
         * Private database capability
         * interface fullName: hosting.PrivateDatabase.Capability.Capability
         */
        export interface Capability {
            create: boolean;
            delete: boolean;
            object: string;
            update: boolean;
        }
        export namespace Configuration {
            /**
             * Configuration detail property
             * interface fullName: hosting.PrivateDatabase.Configuration.Detail.Detail
             */
            export interface Detail {
                availableValues: string[];
                defaultValue: string;
                description: string;
                key: string;
                lastUpdate: string;
                type: hosting.PrivateDatabase.Configuration.DetailType;
                unit?: string;
                value: string;
            }
            /**
             * Configuration detail type
             * type fullname: hosting.PrivateDatabase.Configuration.DetailType
             */
            export type DetailType = "boolean" | "number" | "string"
            /**
             * Configuration status
             * type fullname: hosting.PrivateDatabase.Configuration.Status
             */
            export type Status = "applied" | "updating"
        }
        /**
         * CPU throttle informations
         * interface fullName: hosting.PrivateDatabase.CpuThrottle.CpuThrottle
         */
        export interface CpuThrottle {
            endDate?: string;
            startDate: string;
        }
        export namespace Database {
            export namespace Copy {
                /**
                 * Copy status
                 * type fullname: hosting.PrivateDatabase.Database.Copy.Status
                 */
                export type Status = "doing" | "done" | "error" | "todo"
            }
            export namespace Extension {
                /**
                 * Extension status
                 * type fullname: hosting.PrivateDatabase.Database.Extension.Status
                 */
                export type Status = "disabled" | "disabling" | "enabled" | "enabling"
            }
            /**
             * User granted to a database
             * interface fullName: hosting.PrivateDatabase.Database.User.User
             */
            export interface User {
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
                userName: string;
            }
        }
        /**
         * Available datacenters
         * type fullname: hosting.PrivateDatabase.DatacenterEnum
         */
        export type DatacenterEnum = "bhs1" | "gra1" | "gra2" | "gra3" | "p19"
        /**
         * Parameters required to query metrics from OpenTSDB
         * interface fullName: hosting.PrivateDatabase.GraphEndpoint.GraphEndpoint
         */
        export interface GraphEndpoint {
            host: string;
            readToken: string;
            readTokenId: string;
        }
        /**
         * Log subscription resource
         * interface fullName: hosting.PrivateDatabase.LogSubscriptionResource.LogSubscriptionResource
         */
        export interface LogSubscriptionResource {
            name: string;
            type: string;
        }
        /**
         * synchronous operation after subscribing or unsubscribing to a resource logs
         * interface fullName: hosting.PrivateDatabase.LogSubscriptionResponse.LogSubscriptionResponse
         */
        export interface LogSubscriptionResponse {
            operationId: string;
            serviceName: string;
        }
        /**
         * Available offers
         * type fullname: hosting.PrivateDatabase.OfferEnum
         */
        export type OfferEnum = "classic" | "public"
        /**
         * OOM kill informations
         * interface fullName: hosting.PrivateDatabase.Oom.Oom
         */
        export interface Oom {
            date: string;
            sizeReached: number;
        }
        /**
         * Private database state
         * type fullname: hosting.PrivateDatabase.StateEnum
         */
        export type StateEnum = "detached" | "restartPending" | "startPending" | "started" | "stopPending" | "stopped"
        /**
         * Temporary url informations
         * interface fullName: hosting.PrivateDatabase.TemporaryLogsLink.TemporaryLogsLink
         */
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        /**
         * Private database type
         * type fullname: hosting.PrivateDatabase.TypeEnum
         */
        export type TypeEnum = "mariadb" | "mysql" | "postgresql" | "redis"
        export namespace User {
            /**
             * Databases linked to an user
             * interface fullName: hosting.PrivateDatabase.User.Database.Database
             */
            export interface Database {
                databaseName: string;
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
            }
        }
        export namespace WebhostingNetwork {
            /**
             * Webhosting network status
             * type fullname: hosting.PrivateDatabase.WebhostingNetwork.Status
             */
            export type Status = "disabled" | "disabling" | "enabled" | "enabling"
        }
        export namespace Whitelist {
            /**
             * Whitelist status
             * type fullname: hosting.PrivateDatabase.Whitelist.Status
             */
            export type Status = "created" | "creating" | "deleting" | "updating"
        }
        export namespace grant {
            /**
             * Grant on a database for a specific user
             * type fullname: hosting.PrivateDatabase.grant.GrantEnum
             */
            export type GrantEnum = "admin" | "none" | "ro" | "rw"
        }
        export namespace task {
            /**
             * Task's function
             * type fullname: hosting.PrivateDatabase.task.FunctionEnum
             */
            export type FunctionEnum = "abuse" | "changeFtpPassword" | "changeRam" | "changeVersion" | "configuration/update" | "create" | "database/copy" | "database/copyRestore" | "database/create" | "database/delete" | "database/dump" | "database/dump/delete" | "database/extension/create" | "database/extension/delete" | "database/import" | "database/restore" | "database/wizard" | "delete" | "grant/create" | "grant/delete" | "grant/update" | "install" | "overquota/in" | "overquota/out" | "quotaRefresh" | "refresh" | "reopen" | "restart" | "start" | "stop" | "suspend" | "user/changePassword" | "user/create" | "user/delete" | "webhostingNetwork/disable" | "webhostingNetwork/enable" | "whitelist/create" | "whitelist/delete" | "whitelist/update"
            /**
             * Task's status
             * type fullname: hosting.PrivateDatabase.task.StatusEnum
             */
            export type StatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        }
    }
    export namespace privateDatabase {
        /**
         * Private database available ram sizes
         * type fullname: hosting.privateDatabase.AvailableRamSizeEnum
         */
        export type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512"
        /**
         * Private database available version
         * type fullname: hosting.privateDatabase.AvailableVersionEnum
         */
        export type AvailableVersionEnum = "mariadb_10.11" | "mariadb_10.4" | "mariadb_10.5" | "mariadb_10.6" | "mysql_5.7" | "mysql_8.0" | "postgresql_12" | "postgresql_13" | "postgresql_14" | "postgresql_15" | "redis_6.0" | "redis_7.0"
        /**
         * Private database capability
         * interface fullName: hosting.privateDatabase.Capability.Capability
         */
        export interface Capability {
            create: boolean;
            delete: boolean;
            object: string;
            update: boolean;
        }
        /**
         * Payload used to change the FTP password of a Web Cloud Database
         * interface fullName: hosting.privateDatabase.ChangeFtpPasswordPayload.ChangeFtpPasswordPayload
         */
        export interface ChangeFtpPasswordPayload {
            password: string;
        }
        /**
         * Payload used to change the DBMS version of a Web Cloud Database
         * interface fullName: hosting.privateDatabase.ChangeVersionPayload.ChangeVersionPayload
         */
        export interface ChangeVersionPayload {
            version: hosting.privateDatabase.AvailableVersionEnum;
        }
        /**
         * Configuration
         * interface fullName: hosting.privateDatabase.Configuration.Configuration
         */
        export interface Configuration {
            details: hosting.PrivateDatabase.Configuration.Detail[];
            lastUpdate: string;
            status: hosting.PrivateDatabase.Configuration.Status;
            taskId?: string;
        }
        /**
         * CPU throttle informations
         * interface fullName: hosting.privateDatabase.CpuThrottle.CpuThrottle
         */
        export interface CpuThrottle {
            endDate?: string;
            startDate: string;
        }
        /**
         * Databases
         * interface fullName: hosting.privateDatabase.Database.Database
         */
        export interface Database {
            backupTime?: string;
            creationDate: string;
            databaseName: string;
            quotaUsed: complexType.UnitAndValue<number>;
            users: hosting.privateDatabase.Database.User[];
        }
        export namespace Database {
            /**
             * Dumps
             * interface fullName: hosting.privateDatabase.Database.CreateDump.CreateDump
             */
            export interface CreateDump {
                sendEmail: boolean;
            }
            /**
             * Payload used to create a database on a Web Cloud Database
             * interface fullName: hosting.privateDatabase.Database.CreatePayload.CreatePayload
             */
            export interface CreatePayload {
                databaseName: string;
            }
            /**
             * Dumps
             * interface fullName: hosting.privateDatabase.Database.Dump.Dump
             */
            export interface Dump {
                creationDate: string;
                databaseName: string;
                deletionDate: string;
                id: number;
                url: string;
            }
            /**
             * Payload used to import a dump in a database on a Web Cloud Database
             * interface fullName: hosting.privateDatabase.Database.ImportPayload.ImportPayload
             */
            export interface ImportPayload {
                documentId: string;
                flushDatabase: boolean;
                sendEmail: boolean;
            }
            /**
             * Users
             * interface fullName: hosting.privateDatabase.Database.User.User
             */
            export interface User {
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
                userName: string;
            }
        }
        /**
         * Payload used to create user and grant and apply it on a new database on a Web Cloud Database
         * interface fullName: hosting.privateDatabase.DatabaseWizardPayload.DatabaseWizardPayload
         */
        export interface DatabaseWizardPayload {
            databaseName: string;
            grant: hosting.PrivateDatabase.grant.GrantEnum;
            password: string;
            userName: string;
        }
        /**
         * Private database datacenter
         * type fullname: hosting.privateDatabase.DatacenterEnum
         */
        export type DatacenterEnum = "bhs1" | "gra1" | "gra2" | "gra3"
        /**
         * Dumps
         * interface fullName: hosting.privateDatabase.Dump.Dump
         */
        export interface Dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            dumpId: number;
            orphan: boolean;
            url: string;
        }
        export namespace Dump {
            /**
             * Restore a database dump into a Web Cloud Database
             * interface fullName: hosting.privateDatabase.Dump.Restore.Restore
             */
            export interface Restore {
                databaseName: string;
            }
        }
        /**
         * Parameters required to query metrics from OpenTSDB
         * interface fullName: hosting.privateDatabase.GraphEndpoint.GraphEndpoint
         */
        export interface GraphEndpoint {
            host: string;
            readToken: string;
            readTokenId: string;
        }
        /**
         * Private database infrastructure
         * type fullname: hosting.privateDatabase.InfrastructureEnum
         */
        export type InfrastructureEnum = "docker"
        /**
         * Available offers
         * type fullname: hosting.privateDatabase.OfferEnum
         */
        export type OfferEnum = "classic" | "public"
        /**
         * List of privatesql OOM kill
         * interface fullName: hosting.privateDatabase.Oom.Oom
         */
        export interface Oom {
            date: string;
            sizeReached: number;
        }
        /**
         * Web Cloud Database
         * interface fullName: hosting.privateDatabase.Service.Service
         */
        export interface Service {
            capabilities: hosting.privateDatabase.Capability[];
            cpu: number;
            datacenter: hosting.privateDatabase.DatacenterEnum;
            displayName?: string;
            graphEndpoint?: hosting.privateDatabase.GraphEndpoint;
            guiURL?: string;
            hostname: string;
            hostnameFtp?: string;
            infrastructure: hosting.privateDatabase.InfrastructureEnum;
            ip?: string;
            lastCheck: string;
            offer: hosting.privateDatabase.OfferEnum;
            port: number;
            portFtp?: number;
            quotaSize: complexType.UnitAndValue<number>;
            quotaUsed: complexType.UnitAndValue<number>;
            ram: complexType.UnitAndValue<number>;
            server: string;
            serviceName: string;
            state: hosting.privateDatabase.StateEnum;
            tlsCa?: string;
            type: hosting.privateDatabase.TypeEnum;
            version: hosting.privateDatabase.VersionEnum;
            versionLabel: string;
            versionNumber: number;
        }
        /**
         * Web Cloud Database
         * interface fullName: hosting.privateDatabase.ServiceWithIAM.ServiceWithIAM
         */
        export interface ServiceWithIAM {
            capabilities: hosting.privateDatabase.Capability[];
            cpu: number;
            datacenter: hosting.privateDatabase.DatacenterEnum;
            displayName?: string;
            graphEndpoint?: hosting.privateDatabase.GraphEndpoint;
            guiURL?: string;
            hostname: string;
            hostnameFtp?: string;
            iam?: iam.ResourceMetadata;
            infrastructure: hosting.privateDatabase.InfrastructureEnum;
            ip?: string;
            lastCheck: string;
            offer: hosting.privateDatabase.OfferEnum;
            port: number;
            portFtp?: number;
            quotaSize: complexType.UnitAndValue<number>;
            quotaUsed: complexType.UnitAndValue<number>;
            ram: complexType.UnitAndValue<number>;
            server: string;
            serviceName: string;
            state: hosting.privateDatabase.StateEnum;
            tlsCa?: string;
            type: hosting.privateDatabase.TypeEnum;
            version: hosting.privateDatabase.VersionEnum;
            versionLabel: string;
            versionNumber: number;
        }
        /**
         * Private database state
         * type fullname: hosting.privateDatabase.StateEnum
         */
        export type StateEnum = "detached" | "restartPending" | "startPending" | "started" | "stopPending" | "stopped"
        /**
         * Web Cloud Database task
         * interface fullName: hosting.privateDatabase.Task.Task
         */
        export interface Task {
            databaseName?: string;
            doneDate?: string;
            dumpId?: number;
            function: hosting.privateDatabase.task.FunctionEnum;
            id: number;
            lastUpdate?: string;
            startDate: string;
            status: hosting.privateDatabase.task.StatusEnum;
            userName?: string;
        }
        /**
         *  Temporary url information
         * interface fullName: hosting.privateDatabase.TemporaryUrlInformations.TemporaryUrlInformations
         */
        export interface TemporaryUrlInformations {
            expirationDate: string;
            url: string;
        }
        /**
         * Private database type
         * type fullname: hosting.privateDatabase.TypeEnum
         */
        export type TypeEnum = "mariadb" | "mysql" | "postgresql" | "redis"
        /**
         * Users
         * interface fullName: hosting.privateDatabase.User.User
         */
        export interface User {
            creationDate: string;
            databases: hosting.privateDatabase.User.Database[];
            userName: string;
        }
        export namespace User {
            /**
             * Payload used to change the password of a user on a Web Cloud Database
             * interface fullName: hosting.privateDatabase.User.ChangePasswordPayload.ChangePasswordPayload
             */
            export interface ChangePasswordPayload {
                password: string;
            }
            /**
             * Payload used to create a user on a Web Cloud Database
             * interface fullName: hosting.privateDatabase.User.CreatePayload.CreatePayload
             */
            export interface CreatePayload {
                password: string;
                userName: string;
            }
            /**
             * Users
             * interface fullName: hosting.privateDatabase.User.Database.Database
             */
            export interface Database {
                databaseName: string;
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
            }
            /**
             * Grant
             * interface fullName: hosting.privateDatabase.User.Grant.Grant
             */
            export interface Grant {
                creationDate: string;
                databaseName: string;
                grant: hosting.PrivateDatabase.grant.GrantEnum;
            }
            export namespace Grant {
                /**
                 * Grant
                 * interface fullName: hosting.privateDatabase.User.Grant.Create.Create
                 */
                export interface Create {
                    databaseName: string;
                    grant: hosting.PrivateDatabase.grant.GrantEnum;
                }
                /**
                 * Update user grant
                 * interface fullName: hosting.privateDatabase.User.Grant.Update.Update
                 */
                export interface Update {
                    grant: hosting.PrivateDatabase.grant.GrantEnum;
                }
            }
        }
        /**
         * Private database version
         * type fullname: hosting.privateDatabase.VersionEnum
         */
        export type VersionEnum = "mariadb_10.11" | "mariadb_10.4" | "mariadb_10.5" | "mariadb_10.6" | "mysql_5.7" | "mysql_8.0" | "postgresql_12" | "postgresql_13" | "postgresql_14" | "postgresql_15" | "redis_6.0" | "redis_7.0"
        /**
         * Whitelist
         * interface fullName: hosting.privateDatabase.Whitelist.Whitelist
         */
        export interface Whitelist {
            creationDate: string;
            ip: string;
            lastUpdate: string;
            name?: string;
            service: boolean;
            sftp: boolean;
            status: hosting.privateDatabase.whitelist.StatusEnum;
            taskId?: number;
        }
        export namespace Whitelist {
            /**
             * Whitelist
             * interface fullName: hosting.privateDatabase.Whitelist.CreatePayload.CreatePayload
             */
            export interface CreatePayload {
                ip: string;
                name?: string;
                service: boolean;
                sftp: boolean;
            }
        }
        /**
         * Description for available order capacities following an offer
         * interface fullName: hosting.privateDatabase.availableOrderCapacities.availableOrderCapacities
         */
        export interface availableOrderCapacities {
            datacenter: hosting.privateDatabase.DatacenterEnum[];
            offer: hosting.privateDatabase.OfferEnum;
            ram: hosting.privateDatabase.AvailableRamSizeEnum[];
            version: hosting.privateDatabase.AvailableVersionEnum[];
        }
        /**
         * Databases
         * interface fullName: hosting.privateDatabase.database.database
         */
        export interface database {
            backupTime?: string;
            creationDate: string;
            databaseName: string;
            quotaUsed: complexType.UnitAndValue<number>;
            users: hosting.PrivateDatabase.Database.User[];
        }
        /**
         * Copy
         * interface fullName: hosting.privateDatabase.database_copy.database_copy
         */
        export interface database_copy {
            creationDate: string;
            expirationDate?: string;
            id: string;
            lastUpdate: string;
            status: hosting.PrivateDatabase.Database.Copy.Status;
        }
        /**
         * Dump
         * interface fullName: hosting.privateDatabase.database_dump.database_dump
         */
        export interface database_dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            id: number;
            url: string;
        }
        /**
         * Databases extension
         * interface fullName: hosting.privateDatabase.database_extension.database_extension
         */
        export interface database_extension {
            description: string;
            extensionName: string;
            requiredExtensions: string[];
            status: hosting.PrivateDatabase.Database.Extension.Status;
        }
        /**
         * Dump
         * interface fullName: hosting.privateDatabase.dump.dump
         */
        export interface dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            dumpId: number;
            orphan: boolean;
            url: string;
        }
        /**
         * Grants
         * interface fullName: hosting.privateDatabase.grant.grant
         */
        export interface grant {
            creationDate: string;
            databaseName: string;
            grant: hosting.PrivateDatabase.grant.GrantEnum;
        }
        /**
         * Log kind for your instance
         * interface fullName: hosting.privateDatabase.ldpKind.ldpKind
         */
        export interface ldpKind {
            additionalReturnedFields: string[];
            createdAt: string;
            displayName: string;
            kindId: string;
            name: string;
            updatedAt: string;
        }
        /**
         * Log subscription for your instance
         * interface fullName: hosting.privateDatabase.ldpSubscription.ldpSubscription
         */
        export interface ldpSubscription {
            createdAt: string;
            kind: string;
            resource: hosting.PrivateDatabase.LogSubscriptionResource;
            serviceName: string;
            streamId: string;
            subscriptionId: string;
            updatedAt: string;
        }
        /**
         * Tasks
         * interface fullName: hosting.privateDatabase.task.task
         */
        export interface task {
            databaseName?: string;
            doneDate?: string;
            dumpId?: number;
            function: hosting.PrivateDatabase.task.FunctionEnum;
            id: number;
            lastUpdate?: string;
            startDate: string;
            status: hosting.PrivateDatabase.task.StatusEnum;
            userName?: string;
        }
        export namespace task {
            /**
             * Task's dunction
             * type fullname: hosting.privateDatabase.task.FunctionEnum
             */
            export type FunctionEnum = "abuse" | "changeFtpPassword" | "changeRam" | "changeVersion" | "configuration/update" | "create" | "database/copy" | "database/copyRestore" | "database/create" | "database/delete" | "database/dump" | "database/dump/delete" | "database/extension/create" | "database/extension/delete" | "database/import" | "database/restore" | "database/wizard" | "delete" | "grant/create" | "grant/delete" | "grant/update" | "install" | "overquota/in" | "overquota/out" | "quotaRefresh" | "refresh" | "reopen" | "restart" | "start" | "stop" | "suspend" | "user/changePassword" | "user/create" | "user/delete" | "webhostingNetwork/disable" | "webhostingNetwork/enable" | "whitelist/create" | "whitelist/delete" | "whitelist/update"
            /**
             * Task's status
             * type fullname: hosting.privateDatabase.task.StatusEnum
             */
            export type StatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        }
        /**
         * Users
         * interface fullName: hosting.privateDatabase.user.user
         */
        export interface user {
            creationDate: string;
            databases: hosting.PrivateDatabase.User.Database[];
            userName: string;
        }
        /**
         * webhosting Network
         * interface fullName: hosting.privateDatabase.webhostingNetwork.webhostingNetwork
         */
        export interface webhostingNetwork {
            status: hosting.privateDatabase.webhostingNetwork.StatusEnum;
        }
        export namespace webhostingNetwork {
            /**
             * Webhosting network status
             * type fullname: hosting.privateDatabase.webhostingNetwork.StatusEnum
             */
            export type StatusEnum = "disabled" | "disabling" | "enabled" | "enabling"
        }
        /**
         * IP whitelisting for your instance
         * interface fullName: hosting.privateDatabase.whitelist.whitelist
         */
        export interface whitelist {
            creationDate: string;
            ip: string;
            lastUpdate: string;
            name?: string;
            service: boolean;
            sftp: boolean;
            status: hosting.PrivateDatabase.Whitelist.Status;
            taskId?: string;
        }
        export namespace whitelist {
            /**
             * Whitelist status
             * type fullname: hosting.privateDatabase.whitelist.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updating"
        }
    }
}
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
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
 * END API /hosting/privateDatabase Models
 */
export function proxyHostingPrivateDatabase(ovhEngine: OvhRequestable): Hosting {
    return buildOvhProxy(ovhEngine, '/hosting');
}
export default proxyHostingPrivateDatabase;
/**
 * Api model for /hosting/privateDatabase
 */
export interface Hosting {
    privateDatabase: {
        /**
         * List available Web Cloud Databases
         * GET /hosting/privateDatabase
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        availableOrderCapacities: {
            /**
             * Get available order capacities
             * GET /hosting/privateDatabase/availableOrderCapacities
             */
            $get(params: { offer: hosting.privateDatabase.OfferEnum }): Promise<hosting.privateDatabase.availableOrderCapacities>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get a Web Cloud Database properties
             * GET /hosting/privateDatabase/{serviceName}
             */
            $get(): Promise<hosting.privateDatabase.Service>;
            /**
             * Alter a Web Cloud Database properties
             * PUT /hosting/privateDatabase/{serviceName}
             */
            $put(params?: { capabilities?: hosting.privateDatabase.Capability[], cpu?: number, datacenter?: hosting.privateDatabase.DatacenterEnum, displayName?: string, graphEndpoint?: hosting.privateDatabase.GraphEndpoint, guiURL?: string, hostname?: string, hostnameFtp?: string, infrastructure?: hosting.privateDatabase.InfrastructureEnum, ip?: string, lastCheck?: string, offer?: hosting.privateDatabase.OfferEnum, port?: number, portFtp?: number, quotaSize?: complexType.UnitAndValue<number>, quotaUsed?: complexType.UnitAndValue<number>, ram?: complexType.UnitAndValue<number>, server?: string, serviceName?: string, state?: hosting.privateDatabase.StateEnum, tlsCa?: string, type?: hosting.privateDatabase.TypeEnum, version?: hosting.privateDatabase.VersionEnum, versionLabel?: string, versionNumber?: number }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            availableVersions: {
                /**
                 * Get the availables versions for this private database
                 * GET /hosting/privateDatabase/{serviceName}/availableVersions
                 */
                $get(): Promise<hosting.privateDatabase.AvailableVersionEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /hosting/privateDatabase/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            changeFtpPassword: {
                /**
                 * Change FTP password of your Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/changeFtpPassword
                 */
                $post(params: { password: string }): Promise<hosting.privateDatabase.Task>;
            }
            changeVersion: {
                /**
                 * Change DBMS version of your Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/changeVersion
                 */
                $post(params: { version: hosting.privateDatabase.AvailableVersionEnum }): Promise<hosting.privateDatabase.Task>;
            }
            config: {
                /**
                 * Get this object properties
                 * GET /hosting/privateDatabase/{serviceName}/config
                 */
                $get(): Promise<hosting.privateDatabase.Configuration>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                update: {
                    /**
                     * Update the configuration
                     * POST /hosting/privateDatabase/{serviceName}/config/update
                     */
                    $post(params: { parameters: complexType.SafeKeyValue<string>[] }): Promise<hosting.privateDatabase.Configuration>;
                }
            }
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /hosting/privateDatabase/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            cpuThrottle: {
                /**
                 * List of privatesql CPU throttle
                 * GET /hosting/privateDatabase/{serviceName}/cpuThrottle
                 */
                $get(): Promise<hosting.privateDatabase.CpuThrottle[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            database: {
                /**
                 * List databases on a privateDatabase
                 * GET /hosting/privateDatabase/{serviceName}/database
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a new database in a Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/database
                 */
                $post(params: { databaseName: string }): Promise<hosting.privateDatabase.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(databaseName: string): {
                    /**
                     * Delete a database from a Web Cloud Database
                     * DELETE /hosting/privateDatabase/{serviceName}/database/{databaseName}
                     */
                    $delete(): Promise<hosting.privateDatabase.Task>;
                    /**
                     * Get database properties
                     * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}
                     */
                    $get(): Promise<hosting.privateDatabase.Database>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    copy: {
                        /**
                         * Copies available for your databases
                         * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/copy
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create a new copy of your database
                         * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/copy
                         */
                        $post(): Promise<hosting.privateDatabase.database_copy>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: string): {
                            /**
                             * Delete the database copy
                             * DELETE /hosting/privateDatabase/{serviceName}/database/{databaseName}/copy/{id}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/copy/{id}
                             */
                            $get(): Promise<hosting.privateDatabase.database_copy>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    copyRestore: {
                        /**
                         * Request the copy restore in this database
                         * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/copyRestore
                         */
                        $post(params: { copyId: string, flushDatabase?: boolean }): Promise<hosting.privateDatabase.task>;
                    }
                    dump: {
                        /**
                         * Get all database dump from a Web Cloud Database
                         * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Request the dump of this database (an email will be sent with a link available 30 days)
                         * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
                         */
                        $post(params?: { sendEmail?: boolean }): Promise<hosting.privateDatabase.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Delete dump before expiration date
                             * DELETE /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}
                             */
                            $delete(): Promise<hosting.privateDatabase.Task>;
                            /**
                             * Get a database dump from a Web Cloud Database
                             * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}
                             */
                            $get(): Promise<hosting.privateDatabase.Database.Dump>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            restore: {
                                /**
                                 * Request the restore from this dump
                                 * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore
                                 */
                                $post(): Promise<hosting.privateDatabase.Task>;
                            }
                        };
                    }
                    extension: {
                        /**
                         * Extensions linked to your database
                         * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension
                         */
                        $get(params?: { extensionName?: string, status?: hosting.PrivateDatabase.Database.Extension.Status }): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(extensionName: string): {
                            /**
                             * Get this object properties
                             * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}
                             */
                            $get(): Promise<hosting.privateDatabase.database_extension>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            disable: {
                                /**
                                 * Disable an extension from a database
                                 * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable
                                 */
                                $post(): Promise<hosting.privateDatabase.task>;
                            }
                            enable: {
                                /**
                                 * Enable an extension on a database
                                 * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable
                                 */
                                $post(): Promise<hosting.privateDatabase.task>;
                            }
                        };
                    }
                    import: {
                        /**
                         * Import a database into a Web Cloud Database
                         * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/import
                         */
                        $post(params: { documentId: string, flushDatabase?: boolean, sendEmail?: boolean }): Promise<hosting.privateDatabase.Task>;
                    }
                };
            }
            databaseWizard: {
                /**
                 * Create a new database/user and grant it
                 * POST /hosting/privateDatabase/{serviceName}/databaseWizard
                 */
                $post(params: { databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum, password: string, userName: string }): Promise<hosting.privateDatabase.Task>;
            }
            dump: {
                /**
                 * Get all database dump from a Web Cloud Database
                 * GET /hosting/privateDatabase/{serviceName}/dump
                 */
                $get(params?: { databaseName?: string, orphan?: boolean }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(dumpId: number): {
                    /**
                     * Delete a database dump from a Web Cloud Database
                     * DELETE /hosting/privateDatabase/{serviceName}/dump/{dumpId}
                     */
                    $delete(): Promise<hosting.privateDatabase.Task>;
                    /**
                     * Get a database dump from a Web Cloud Database
                     * GET /hosting/privateDatabase/{serviceName}/dump/{dumpId}
                     */
                    $get(): Promise<hosting.privateDatabase.Dump>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    restore: {
                        /**
                         * Restore a database dump into a Web Cloud Database
                         * POST /hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore
                         */
                        $post(params?: { databaseName?: string }): Promise<hosting.privateDatabase.Task>;
                    }
                };
            }
            generateTemporaryLogsLink: {
                /**
                 * Generate a temporary link to access logs for a Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink
                 */
                $post(): Promise<hosting.privateDatabase.TemporaryUrlInformations>;
            }
            oom: {
                /**
                 * List of privatesql OOM kill
                 * GET /hosting/privateDatabase/{serviceName}/oom
                 */
                $get(): Promise<hosting.privateDatabase.Oom[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            quotaRefresh: {
                /**
                 * Refresh the quota of your Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/quotaRefresh
                 */
                $post(): Promise<hosting.privateDatabase.Task>;
            }
            restart: {
                /**
                 * Restart the Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/restart
                 */
                $post(): Promise<hosting.privateDatabase.Task>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /hosting/privateDatabase/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /hosting/privateDatabase/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            start: {
                /**
                 * Start the private database
                 * POST /hosting/privateDatabase/{serviceName}/start
                 */
                $post(): Promise<hosting.privateDatabase.task>;
            }
            stop: {
                /**
                 * Stop the private database
                 * POST /hosting/privateDatabase/{serviceName}/stop
                 */
                $post(): Promise<hosting.privateDatabase.task>;
            }
            tasks: {
                /**
                 * List tasks for a Webcloud Database
                 * GET /hosting/privateDatabase/{serviceName}/tasks
                 */
                $get(params?: { function_?: hosting.privateDatabase.task.FunctionEnum, status?: hosting.privateDatabase.task.StatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get task details
                     * GET /hosting/privateDatabase/{serviceName}/tasks/{id}
                     */
                    $get(): Promise<hosting.privateDatabase.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /hosting/privateDatabase/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
            user: {
                /**
                 * List users on a Web Cloud Database
                 * GET /hosting/privateDatabase/{serviceName}/user
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a user on a Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/user
                 */
                $post(params: { password: string, userName: string }): Promise<hosting.privateDatabase.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(userName: string): {
                    /**
                     * Delete a user on a Web Cloud Database
                     * DELETE /hosting/privateDatabase/{serviceName}/user/{userName}
                     */
                    $delete(): Promise<hosting.privateDatabase.Task>;
                    /**
                     * Get user properties
                     * GET /hosting/privateDatabase/{serviceName}/user/{userName}
                     */
                    $get(): Promise<hosting.privateDatabase.User>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Change the password of a user on a Web Cloud Database
                         * POST /hosting/privateDatabase/{serviceName}/user/{userName}/changePassword
                         */
                        $post(params: { password: string }): Promise<hosting.privateDatabase.Task>;
                    }
                    grant: {
                        /**
                         * Get all information about the grants for a user in a Web Cloud Database
                         * GET /hosting/privateDatabase/{serviceName}/user/{userName}/grant
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add grant on a Web Cloud Database
                         * POST /hosting/privateDatabase/{serviceName}/user/{userName}/grant
                         */
                        $post(params: { databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum }): Promise<hosting.privateDatabase.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(databaseName: string): {
                            /**
                             * Delete a grant from a Web Cloud Database
                             * DELETE /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
                             */
                            $delete(): Promise<hosting.privateDatabase.Task>;
                            /**
                             * Get information about the grants for a user in a Web Cloud Database
                             * GET /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
                             */
                            $get(): Promise<hosting.privateDatabase.User.Grant>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            update: {
                                /**
                                 * Update the permissions of a grant for a user on a Web Cloud Database
                                 * POST /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update
                                 */
                                $post(params: { grant: hosting.PrivateDatabase.grant.GrantEnum }): Promise<hosting.privateDatabase.Task>;
                            }
                        };
                    }
                };
            }
            webhostingNetwork: {
                /**
                 * Delete access from the web hosting network on a Web Cloud Database
                 * DELETE /hosting/privateDatabase/{serviceName}/webhostingNetwork
                 */
                $delete(): Promise<hosting.privateDatabase.Task>;
                /**
                 * Get Webhosting network status
                 * GET /hosting/privateDatabase/{serviceName}/webhostingNetwork
                 */
                $get(): Promise<hosting.privateDatabase.webhostingNetwork>;
                /**
                 * Permit access from the web hosting network on a Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/webhostingNetwork
                 */
                $post(): Promise<hosting.privateDatabase.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            webs: {
                /**
                 * List linked webs
                 * GET /hosting/privateDatabase/{serviceName}/webs
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            whitelist: {
                /**
                 * List whitelists on a Web Cloud Database
                 * GET /hosting/privateDatabase/{serviceName}/whitelist
                 */
                $get(params?: { ip?: string, service?: boolean, sftp?: boolean }): Promise<string[]>;
                /**
                 * Create a new IP whitelist in a Web Cloud Database
                 * POST /hosting/privateDatabase/{serviceName}/whitelist
                 */
                $post(params: { ip: string, name?: string, service?: boolean, sftp?: boolean }): Promise<hosting.privateDatabase.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(ip: string): {
                    /**
                     * Delete an IP whitelist from a Web Cloud Database
                     * DELETE /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                     */
                    $delete(): Promise<hosting.privateDatabase.Task>;
                    /**
                     * Get whitelist properties
                     * GET /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                     */
                    $get(): Promise<hosting.privateDatabase.Whitelist>;
                    /**
                     * Update an IP whitelist in a Web Cloud Database
                     * PUT /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                     */
                    $put(params?: { creationDate?: string, ip?: string, lastUpdate?: string, name?: string, service?: boolean, sftp?: boolean, status?: hosting.privateDatabase.whitelist.StatusEnum, taskId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
}

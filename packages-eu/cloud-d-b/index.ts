import { buildOvhProxy, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /cloudDB Models
 * Source: https://eu.api.ovh.com/1.0/cloudDB.json
 */
export namespace cloudDB {
    /**
     * Dumps
     * interface fullName: cloudDB.Dump.Dump
     */
    export interface Dump {
        creationDate: string;
        databaseName: string;
        expirationDate?: string;
        id: string;
        instanceId: string;
        instanceType: cloudDB.instance.Type;
        name?: string;
        size?: complexType.UnitAndValue<number>;
        status: cloudDB.dump.Status;
        taskId?: string;
        url?: string;
    }
    /**
     * CloudDB Project
     * interface fullName: cloudDB.Service.Service
     */
    export interface Service {
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        quotas: cloudDB.project.Quotas;
        status: cloudDB.project.Status;
        taskId?: string;
    }
    /**
     * Tasks
     * interface fullName: cloudDB.Task.Task
     */
    export interface Task {
        endDate?: string;
        function: string;
        id: string;
        lastUpdate?: string;
        progress: number;
        startDate: string;
        status: cloudDB.task.Status;
    }
    export namespace dump {
        /**
         * Dump status
         * type fullname: cloudDB.dump.Status
         */
        export type Status = "created" | "creating" | "deleting"
    }
    export namespace enterprise {
        export namespace Backup {
            /**
             * Backup status
             * type fullname: cloudDB.enterprise.Backup.StatusEnum
             */
            export type StatusEnum = "archived" | "archiving" | "created" | "creating" | "deleting"
        }
        export namespace Cluster {
            /**
             * Cluster status
             * type fullname: cloudDB.enterprise.Cluster.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "reopening" | "restarting" | "scaling" | "suspended" | "suspending" | "updating"
        }
        export namespace Endpoint {
            /**
             * Endpoint status
             * type fullname: cloudDB.enterprise.Endpoint.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "disabled" | "disabling" | "enabled" | "enabling"
        }
        export namespace Host {
            /**
             * Host status
             * type fullname: cloudDB.enterprise.Host.StatusEnum
             */
            export type StatusEnum = "configured" | "created" | "creating" | "deleting" | "rebooted" | "rebooting" | "reinstalling" | "reopening" | "replacing" | "suspended" | "suspending"
        }
        export namespace LdpMember {
            /**
             * LdpMember status
             * type fullname: cloudDB.enterprise.LdpMember.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
        }
        export namespace Maintenance {
            /**
             * Maintenance status
             * type fullname: cloudDB.enterprise.Maintenance.StatusEnum
             */
            export type StatusEnum = "cancelled" | "done" | "running" | "scheduled"
        }
        export namespace MaintenanceWindow {
            /**
             * Maintenance window status
             * type fullname: cloudDB.enterprise.MaintenanceWindow.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting"
        }
        export namespace Offer {
            export namespace Region {
                /**
                 * Status of an offer in a region
                 * type fullname: cloudDB.enterprise.Offer.Region.StatusEnum
                 */
                export type StatusEnum = "available" | "unavailable"
            }
            /**
             * Offer status
             * type fullname: cloudDB.enterprise.Offer.StatusEnum
             */
            export type StatusEnum = "available" | "planned" | "testing" | "unavailable"
            /**
             * Offer type
             * type fullname: cloudDB.enterprise.Offer.TypeEnum
             */
            export type TypeEnum = "postgresql"
        }
        export namespace Region {
            /**
             * Region status
             * type fullname: cloudDB.enterprise.Region.StatusEnum
             */
            export type StatusEnum = "created"
        }
        export namespace Restore {
            /**
             * Restore status
             * type fullname: cloudDB.enterprise.Restore.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting"
            export namespace User {
                /**
                 * User status
                 * type fullname: cloudDB.enterprise.Restore.User.StatusEnum
                 */
                export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
            }
        }
        export namespace SecurityGroup {
            /**
             * Security group status
             * type fullname: cloudDB.enterprise.SecurityGroup.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
        }
        export namespace SecurityGroupRule {
            /**
             * Security group rule status
             * type fullname: cloudDB.enterprise.SecurityGroupRule.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
        }
        export namespace User {
            /**
             * User status
             * type fullname: cloudDB.enterprise.User.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
        }
    }
    /**
     * Cluster
     * interface fullName: cloudDB.enterprise_Cluster.enterprise_Cluster
     */
    export interface enterprise_Cluster {
        autoBackup: boolean;
        backupSize?: number;
        creationDate: string;
        hostCount?: number;
        id: string;
        lastUpdate: string;
        name: string;
        offerName: string;
        offerType: cloudDB.enterprise.Offer.TypeEnum;
        regionName: string;
        restoredVolumeSize?: number;
        status: cloudDB.enterprise.Cluster.StatusEnum;
        taskId?: string;
        version: string;
    }
    /**
     * Backup
     * interface fullName: cloudDB.enterprise_Cluster_Backup.enterprise_Cluster_Backup
     */
    export interface enterprise_Cluster_Backup {
        clusterId: string;
        creationDate: string;
        effectiveCreationDate?: string;
        id: string;
        internal: boolean;
        lastUpdate: string;
        name: string;
        restoreDuration?: number;
        size?: number;
        status: cloudDB.enterprise.Backup.StatusEnum;
        taskId?: string;
        validationDate?: string;
    }
    /**
     * Endpoints
     * interface fullName: cloudDB.enterprise_Cluster_Endpoint.enterprise_Cluster_Endpoint
     */
    export interface enterprise_Cluster_Endpoint {
        clusterId: string;
        creationDate: string;
        fqdn: string;
        id: string;
        lastUpdate: string;
        name: string;
        port: number;
        status: cloudDB.enterprise.Endpoint.StatusEnum;
        taskId?: string;
    }
    /**
     * Host
     * interface fullName: cloudDB.enterprise_Cluster_Host.enterprise_Cluster_Host
     */
    export interface enterprise_Cluster_Host {
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        status?: cloudDB.enterprise.Host.StatusEnum;
        taskId?: string;
    }
    /**
     * Member
     * interface fullName: cloudDB.enterprise_Cluster_LdpMember.enterprise_Cluster_LdpMember
     */
    export interface enterprise_Cluster_LdpMember {
        creationDate: string;
        id: string;
        lastUpdate: string;
        note?: string;
        status: cloudDB.enterprise.LdpMember.StatusEnum;
        taskId?: string;
        username: string;
    }
    /**
     * Maintenance window
     * interface fullName: cloudDB.enterprise_Cluster_Maintenance.enterprise_Cluster_Maintenance
     */
    export interface enterprise_Cluster_Maintenance {
        clusterId: string;
        creationDate: string;
        duration: number;
        id: string;
        lastUpdate: string;
        scheduledAt: string;
        status: cloudDB.enterprise.Maintenance.StatusEnum;
        taskId?: string;
    }
    /**
     * Maintenance window
     * interface fullName: cloudDB.enterprise_Cluster_MaintenanceWindow.enterprise_Cluster_MaintenanceWindow
     */
    export interface enterprise_Cluster_MaintenanceWindow {
        clusterId: string;
        creationDate: string;
        dayOfWeek: number;
        duration: number;
        id: string;
        lastUpdate: string;
        startTime: string;
        status: cloudDB.enterprise.MaintenanceWindow.StatusEnum;
        taskId?: string;
    }
    /**
     * Restore
     * interface fullName: cloudDB.enterprise_Cluster_Restore.enterprise_Cluster_Restore
     */
    export interface enterprise_Cluster_Restore {
        backupId: string;
        creationDate: string;
        fqdn?: string;
        id: string;
        lastUpdate: string;
        port?: number;
        status: cloudDB.enterprise.Restore.StatusEnum;
        taskId?: string;
        timestamp?: string;
        volumeSize?: number;
    }
    /**
     * User
     * interface fullName: cloudDB.enterprise_Cluster_Restore_User.enterprise_Cluster_Restore_User
     */
    export interface enterprise_Cluster_Restore_User {
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        restoreId: string;
        status: cloudDB.enterprise.Restore.User.StatusEnum;
        taskId?: string;
    }
    /**
     * Security group
     * interface fullName: cloudDB.enterprise_Cluster_SecurityGroup.enterprise_Cluster_SecurityGroup
     */
    export interface enterprise_Cluster_SecurityGroup {
        clusterId: string;
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        rulesCount: number;
        status: cloudDB.enterprise.SecurityGroup.StatusEnum;
        taskId?: string;
    }
    /**
     * Security group rule
     * interface fullName: cloudDB.enterprise_Cluster_SecurityGroup_Rule.enterprise_Cluster_SecurityGroup_Rule
     */
    export interface enterprise_Cluster_SecurityGroup_Rule {
        creationDate: string;
        id: string;
        lastUpdate: string;
        securityGroupId: string;
        source: string;
        status: cloudDB.enterprise.SecurityGroupRule.StatusEnum;
        taskId?: string;
    }
    /**
     * User
     * interface fullName: cloudDB.enterprise_Cluster_User.enterprise_Cluster_User
     */
    export interface enterprise_Cluster_User {
        clusterId: string;
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        status: cloudDB.enterprise.User.StatusEnum;
        taskId?: string;
    }
    /**
     * Offer
     * interface fullName: cloudDB.enterprise_Offer.enterprise_Offer
     */
    export interface enterprise_Offer {
        creationDate: string;
        lastUpdate: string;
        maxHostCount?: number;
        minHostCount: number;
        name: string;
        status: cloudDB.enterprise.Offer.StatusEnum;
    }
    /**
     * Offer capabilities for this region
     * interface fullName: cloudDB.enterprise_Offer_Region.enterprise_Offer_Region
     */
    export interface enterprise_Offer_Region {
        hostLeft?: number;
        offerName: string;
        regionName: string;
        status: cloudDB.enterprise.Offer.Region.StatusEnum;
    }
    /**
     * Region
     * interface fullName: cloudDB.enterprise_Region.enterprise_Region
     */
    export interface enterprise_Region {
        creationDate: string;
        lastUpdate: string;
        maintenanceDayOfWeek: number;
        maintenanceDuration: number;
        maintenanceStartTime: string;
        name: string;
        status: cloudDB.enterprise.Region.StatusEnum;
    }
    export namespace instance {
        /**
         * Instance type accessible
         * type fullname: cloudDB.instance.Type
         */
        export type Type = "standard"
    }
    export namespace project {
        /**
         * Quota limitation for a project
         * interface fullName: cloudDB.project.Quotas.Quotas
         */
        export interface Quotas {
            standard: cloudDB.project.quotas.Standard;
        }
        /**
         * CloudDB project status
         * type fullname: cloudDB.project.Status
         */
        export type Status = "created" | "creating" | "deleting" | "reopening" | "suspended" | "suspending"
        export namespace quotas {
            /**
             * Quota limitation for a standard instance
             * interface fullName: cloudDB.project.quotas.Standard.Standard
             */
            export interface Standard {
                instance: cloudDB.project.quotas.standard.Quota;
            }
            export namespace standard {
                /**
                 * Quota limitation for a standard instance
                 * interface fullName: cloudDB.project.quotas.standard.Quota.Quota
                 */
                export interface Quota {
                    current: number;
                    max: number;
                }
            }
        }
    }
    export namespace standard {
        /**
         * OOM kill informations
         * interface fullName: cloudDB.standard.Oom.Oom
         */
        export interface Oom {
            date: string;
            sizeReached: number;
        }
        /**
         * Temporary url informations
         * interface fullName: cloudDB.standard.TemporaryLogsLink.TemporaryLogsLink
         */
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        export namespace configuration {
            /**
             * Configuration detail property
             * interface fullName: cloudDB.standard.configuration.Detail.Detail
             */
            export interface Detail {
                availableValues: string[];
                defaultValue: string;
                description: string;
                key: string;
                lastUpdate: string;
                type: cloudDB.standard.configuration.detail.Type;
                unit?: string;
                value: string;
            }
            /**
             * Configuration status
             * type fullname: cloudDB.standard.configuration.Status
             */
            export type Status = "applied" | "updating"
            export namespace detail {
                /**
                 * Configuration detail type
                 * type fullname: cloudDB.standard.configuration.detail.Type
                 */
                export type Type = "boolean" | "number" | "string"
            }
        }
        export namespace database {
            /**
             * Database status
             * type fullname: cloudDB.standard.database.Status
             */
            export type Status = "created" | "creating" | "deleting" | "dumping" | "importing" | "restoring"
            /**
             * User granted to a database
             * interface fullName: cloudDB.standard.database.User.User
             */
            export interface User {
                grantId: string;
                grantType: cloudDB.standard.grant.Type;
                userName: string;
            }
            export namespace extension {
                /**
                 * Extension status
                 * type fullname: cloudDB.standard.database.extension.Status
                 */
                export type Status = "disabled" | "disabling" | "enabled" | "enabling"
            }
        }
        export namespace flavor {
            /**
             * Flavor status
             * type fullname: cloudDB.standard.flavor.Status
             */
            export type Status = "available" | "testing" | "unavailable"
        }
        export namespace grant {
            /**
             * Grant status
             * type fullname: cloudDB.standard.grant.Status
             */
            export type Status = "created" | "creating" | "deleting" | "updating"
            /**
             * Grant type
             * type fullname: cloudDB.standard.grant.Type
             */
            export type Type = "admin" | "none" | "ro" | "rw"
        }
        export namespace image {
            /**
             * Image capabilities
             * interface fullName: cloudDB.standard.image.Capabilities.Capabilities
             */
            export interface Capabilities {
                database: cloudDB.standard.image.capabilities.Capability;
                dump: cloudDB.standard.image.capabilities.Capability;
                grant: cloudDB.standard.image.capabilities.Capability;
                user: cloudDB.standard.image.capabilities.Capability;
            }
            /**
             * Image status
             * type fullname: cloudDB.standard.image.Status
             */
            export type Status = "available" | "testing" | "unavailable"
            /**
             * Image type
             * type fullname: cloudDB.standard.image.Type
             */
            export type Type = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis"
            export namespace capabilities {
                /**
                 * Object capability
                 * interface fullName: cloudDB.standard.image.capabilities.Capability.Capability
                 */
                export interface Capability {
                    create: boolean;
                    delete: boolean;
                    update: boolean;
                }
            }
        }
        export namespace instance {
            /**
             * Creation rules
             * interface fullName: cloudDB.standard.instance.CreationRules.CreationRules
             */
            export interface CreationRules {
                databaseName?: cloudDB.standard.instance.creationRules.CreationRule;
                userName?: cloudDB.standard.instance.creationRules.CreationRule;
                userPassword?: cloudDB.standard.instance.creationRules.CreationRule;
            }
            /**
             * Flavor detail property
             * interface fullName: cloudDB.standard.instance.Flavor.Flavor
             */
            export interface Flavor {
                cpu?: number;
                disk?: complexType.UnitAndValue<number>;
                name: string;
                ram?: complexType.UnitAndValue<number>;
            }
            /**
             * Image detail property
             * interface fullName: cloudDB.standard.instance.Image.Image
             */
            export interface Image {
                capabilities: cloudDB.standard.image.Capabilities;
                name: string;
            }
            /**
             * Metrics data
             * interface fullName: cloudDB.standard.instance.MetricsData.MetricsData
             */
            export interface MetricsData {
                endpoint: string;
                readToken: string;
            }
            /**
             * Region detail property
             * interface fullName: cloudDB.standard.instance.Region.Region
             */
            export interface Region {
                name?: string;
                type?: cloudDB.standard.region.Type;
            }
            /**
             * Standard instance status
             * type fullname: cloudDB.standard.instance.Status
             */
            export type Status = "creating" | "deleting" | "reopening" | "restarting" | "running" | "starting" | "stopped" | "stopping" | "suspended" | "suspending" | "updating"
            export namespace creationRules {
                /**
                 * Creation rule
                 * interface fullName: cloudDB.standard.instance.creationRules.CreationRule.CreationRule
                 */
                export interface CreationRule {
                    exclude: string[];
                    max: number;
                    min: number;
                    regex: string;
                }
            }
        }
        export namespace region {
            /**
             * Region status
             * type fullname: cloudDB.standard.region.Status
             */
            export type Status = "available" | "testing" | "unavailable"
            /**
             * Region type
             * type fullname: cloudDB.standard.region.Type
             */
            export type Type = "hosting" | "internal" | "public"
        }
        export namespace user {
            /**
             * Databases linked to an user
             * interface fullName: cloudDB.standard.user.Database.Database
             */
            export interface Database {
                databaseName: string;
                grantId: string;
                grantType: cloudDB.standard.grant.Type;
            }
            /**
             * User status
             * type fullname: cloudDB.standard.user.Status
             */
            export type Status = "created" | "creating" | "deleting" | "updating"
        }
        export namespace whitelist {
            /**
             * Whitelist status
             * type fullname: cloudDB.standard.whitelist.Status
             */
            export type Status = "created" | "creating" | "deleting" | "updating"
        }
    }
    /**
     * Configurations
     * interface fullName: cloudDB.standard_Configuration.standard_Configuration
     */
    export interface standard_Configuration {
        details: cloudDB.standard.configuration.Detail[];
        lastUpdate: string;
        status: cloudDB.standard.configuration.Status;
        taskId?: string;
    }
    /**
     * Databases
     * interface fullName: cloudDB.standard_Database.standard_Database
     */
    export interface standard_Database {
        backupTime?: string;
        creationDate: string;
        dumpCount: number;
        extensions: string[];
        name: string;
        quotaUsed: complexType.UnitAndValue<number>;
        status: cloudDB.standard.database.Status;
        taskId?: string;
        users: cloudDB.standard.database.User[];
    }
    /**
     * Standard flavors
     * interface fullName: cloudDB.standard_Flavor.standard_Flavor
     */
    export interface standard_Flavor {
        cpu?: number;
        disk?: complexType.UnitAndValue<number>;
        name: string;
        ram?: complexType.UnitAndValue<number>;
        status: cloudDB.standard.flavor.Status;
        supportedRegionNames: string[];
    }
    /**
     * Grants
     * interface fullName: cloudDB.standard_Grant.standard_Grant
     */
    export interface standard_Grant {
        creationDate: string;
        databaseName: string;
        id: string;
        lastUpdate: string;
        status: cloudDB.standard.grant.Status;
        taskId?: string;
        type: cloudDB.standard.grant.Type;
        userName: string;
    }
    /**
     * Standard images
     * interface fullName: cloudDB.standard_Image.standard_Image
     */
    export interface standard_Image {
        name: string;
        status: cloudDB.standard.image.Status;
        supportedFlavorNames: string[];
        type: cloudDB.standard.image.Type;
        version: string;
    }
    /**
     * Standard instances
     * interface fullName: cloudDB.standard_Instance.standard_Instance
     */
    export interface standard_Instance {
        accessCommand: string;
        creationDate: string;
        creationRules: cloudDB.standard.instance.CreationRules;
        diskOverquota?: boolean;
        diskUsed: complexType.UnitAndValue<number>;
        endpoint?: string;
        flavor: cloudDB.standard.instance.Flavor;
        id: string;
        image: cloudDB.standard.instance.Image;
        lastUpdate: string;
        metrics?: cloudDB.standard.instance.MetricsData;
        name: string;
        port?: number;
        region: cloudDB.standard.instance.Region;
        status: cloudDB.standard.instance.Status;
        taskId?: string;
    }
    /**
     * Standard regions
     * interface fullName: cloudDB.standard_Region.standard_Region
     */
    export interface standard_Region {
        name: string;
        status: cloudDB.standard.region.Status;
        type: cloudDB.standard.region.Type;
    }
    /**
     * Users
     * interface fullName: cloudDB.standard_User.standard_User
     */
    export interface standard_User {
        creationDate: string;
        databases: cloudDB.standard.user.Database[];
        lastUpdate: string;
        name: string;
        status: cloudDB.standard.user.Status;
        taskId?: string;
    }
    /**
     * IP whitelisting for your instance
     * interface fullName: cloudDB.standard_Whitelist.standard_Whitelist
     */
    export interface standard_Whitelist {
        creationDate: string;
        lastUpdate: string;
        name: string;
        network: string;
        status: cloudDB.standard.whitelist.Status;
        taskId?: string;
    }
    /**
     * Databases extension
     * interface fullName: cloudDB.standard_database_Dump.standard_database_Dump
     */
    export interface standard_database_Dump {
        creationDate: string;
        expirationDate?: string;
        id: string;
        name?: string;
        size?: complexType.UnitAndValue<number>;
        status: cloudDB.dump.Status;
        taskId?: string;
        url?: string;
    }
    /**
     * Databases extension
     * interface fullName: cloudDB.standard_database_Extension.standard_database_Extension
     */
    export interface standard_database_Extension {
        description: string;
        name: string;
        requiredExtensions: string[];
        status: cloudDB.standard.database.extension.Status;
    }
    export namespace task {
        /**
         * Task status
         * type fullname: cloudDB.task.Status
         */
        export type Status = "cancelled" | "doing" | "done" | "error" | "todo"
    }
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
 * END API /cloudDB Models
 */
export function proxyCloudDB(ovhEngine: OvhRequestable): CloudDB {
    return buildOvhProxy(ovhEngine, '/cloudDB');
}
export default proxyCloudDB;
/**
 * Api model for /cloudDB
 */
export interface CloudDB {
    enterprise: {
        cluster: {
            /**
             * List available services
             * GET /cloudDB/enterprise/cluster
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(clusterId: string): {
                /**
                 * Get this object properties
                 * GET /cloudDB/enterprise/cluster/{clusterId}
                 */
                $get(): Promise<cloudDB.enterprise_Cluster>;
                /**
                 * Alter this object properties
                 * PUT /cloudDB/enterprise/cluster/{clusterId}
                 */
                $put(params?: { autoBackup?: boolean, backupSize?: number, creationDate?: string, hostCount?: number, id?: string, lastUpdate?: string, name?: string, offerName?: string, offerType?: cloudDB.enterprise.Offer.TypeEnum, regionName?: string, restoredVolumeSize?: number, status?: cloudDB.enterprise.Cluster.StatusEnum, taskId?: string, version?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                backup: {
                    /**
                     * Backups of this cluster
                     * GET /cloudDB/enterprise/cluster/{clusterId}/backup
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a cluster backup
                     * POST /cloudDB/enterprise/cluster/{clusterId}/backup
                     */
                    $post(params: { clusterId: string, name: string }): Promise<cloudDB.enterprise_Cluster_Backup>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(backupId: string): {
                        /**
                         * Delete a cluster backup
                         * DELETE /cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}
                         */
                        $get(): Promise<cloudDB.enterprise_Cluster_Backup>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                confirmTermination: {
                    /**
                     * Confirm termination of your service
                     * POST /cloudDB/enterprise/cluster/{clusterId}/confirmTermination
                     */
                    $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                endpoint: {
                    /**
                     * Cluster endpoints
                     * GET /cloudDB/enterprise/cluster/{clusterId}/endpoint
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(endpointId: string): {
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/endpoint/{endpointId}
                         */
                        $get(): Promise<cloudDB.enterprise_Cluster_Endpoint>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                host: {
                    /**
                     * Hosts of this cluster
                     * GET /cloudDB/enterprise/cluster/{clusterId}/host
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(hostId: string): {
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/host/{hostId}
                         */
                        $get(): Promise<cloudDB.enterprise_Cluster_Host>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                logs: {
                    /**
                     * Logs access for this cluster
                     * GET /cloudDB/enterprise/cluster/{clusterId}/logs
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Grant access to cluster logs
                     * POST /cloudDB/enterprise/cluster/{clusterId}/logs
                     */
                    $post(params: { note?: string, username: string }): Promise<cloudDB.enterprise_Cluster_LdpMember>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(logsId: string): {
                        /**
                         * Revoke access to cluster's logs
                         * DELETE /cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}
                         */
                        $get(): Promise<cloudDB.enterprise_Cluster_LdpMember>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                maintenance: {
                    /**
                     * Cluster maintenances
                     * GET /cloudDB/enterprise/cluster/{clusterId}/maintenance
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(maintenanceId: string): {
                        /**
                         * Delete the maintenance
                         * DELETE /cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}
                         */
                        $get(): Promise<cloudDB.enterprise_Cluster_Maintenance>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                maintenanceWindow: {
                    /**
                     * Delete the maintenance window
                     * DELETE /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                     */
                    $get(): Promise<cloudDB.enterprise_Cluster_MaintenanceWindow>;
                    /**
                     * Add a maintenance window to this cluster
                     * POST /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                     */
                    $post(params?: { dayOfWeek?: number, duration?: number, startTime?: string }): Promise<cloudDB.enterprise_Cluster_MaintenanceWindow>;
                    /**
                     * Alter this object properties
                     * PUT /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                     */
                    $put(params?: { clusterId?: string, creationDate?: string, dayOfWeek?: number, duration?: number, id?: string, lastUpdate?: string, startTime?: string, status?: cloudDB.enterprise.MaintenanceWindow.StatusEnum, taskId?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                restore: {
                    /**
                     * Restores of this cluster
                     * GET /cloudDB/enterprise/cluster/{clusterId}/restore
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a cluster restore at a given point in time
                     * POST /cloudDB/enterprise/cluster/{clusterId}/restore
                     */
                    $post(params?: { backupId?: string, timestamp?: string }): Promise<cloudDB.enterprise_Cluster_Restore>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(restoreId: string): {
                        /**
                         * Delete a restore
                         * DELETE /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}
                         */
                        $get(): Promise<cloudDB.enterprise_Cluster_Restore>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        user: {
                            /**
                             * Get this object properties
                             * GET /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user
                             */
                            $get(): Promise<cloudDB.enterprise_Cluster_Restore_User>;
                            /**
                             * Create a user on this restored instance
                             * POST /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user
                             */
                            $post(params: { password: string }): Promise<cloudDB.enterprise_Cluster_Restore_User>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        }
                    };
                }
                scale: {
                    /**
                     * Scale a cluster
                     * POST /cloudDB/enterprise/cluster/{clusterId}/scale
                     */
                    $post(params: { count: number }): Promise<cloudDB.enterprise_Cluster>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                securityGroup: {
                    /**
                     * Cluster security groups
                     * GET /cloudDB/enterprise/cluster/{clusterId}/securityGroup
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Add a security group to this cluster
                     * POST /cloudDB/enterprise/cluster/{clusterId}/securityGroup
                     */
                    $post(params: { clusterId: string, name: string }): Promise<cloudDB.enterprise_Cluster_SecurityGroup>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(securityGroupId: string): {
                        /**
                         * Delete a security group from this cluster
                         * DELETE /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}
                         */
                        $get(): Promise<cloudDB.enterprise_Cluster_SecurityGroup>;
                        /**
                         * Alter this object properties
                         * PUT /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}
                         */
                        $put(params?: { clusterId?: string, creationDate?: string, id?: string, lastUpdate?: string, name?: string, rulesCount?: number, status?: cloudDB.enterprise.SecurityGroup.StatusEnum, taskId?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        rule: {
                            /**
                             * Security group rules
                             * GET /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add a rule to this security group
                             * POST /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule
                             */
                            $post(params: { source: string }): Promise<cloudDB.enterprise_Cluster_SecurityGroup_Rule>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                            $(ruleId: string): {
                                /**
                                 * Delete a rule from this security group
                                 * DELETE /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}
                                 */
                                $get(): Promise<cloudDB.enterprise_Cluster_SecurityGroup_Rule>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions): Promise<any>;
                            };
                        }
                    };
                }
                serviceInfos: {
                    /**
                     * Get this object properties
                     * GET /cloudDB/enterprise/cluster/{clusterId}/serviceInfos
                     */
                    $get(): Promise<services.Service>;
                    /**
                     * Alter this object properties
                     * PUT /cloudDB/enterprise/cluster/{clusterId}/serviceInfos
                     */
                    $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                task: {
                    /**
                     * Cluster tasks
                     * GET /cloudDB/enterprise/cluster/{clusterId}/task
                     */
                    $get(params?: { function_?: string, status?: cloudDB.task.Status }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(taskId: string): {
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/task/{taskId}
                         */
                        $get(): Promise<cloudDB.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                terminate: {
                    /**
                     * Terminate your service
                     * POST /cloudDB/enterprise/cluster/{clusterId}/terminate
                     */
                    $post(): Promise<string>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                user: {
                    /**
                     * Get this object properties
                     * GET /cloudDB/enterprise/cluster/{clusterId}/user
                     */
                    $get(): Promise<cloudDB.enterprise_Cluster_User>;
                    /**
                     * Create a user on this cluster
                     * POST /cloudDB/enterprise/cluster/{clusterId}/user
                     */
                    $post(params: { password: string }): Promise<cloudDB.enterprise_Cluster_User>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
            };
        }
        offer: {
            /**
             * Offers with their capabilities
             * GET /cloudDB/enterprise/offer
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(offerName: string): {
                /**
                 * Get this object properties
                 * GET /cloudDB/enterprise/offer/{offerName}
                 */
                $get(): Promise<cloudDB.enterprise_Offer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                region: {
                    /**
                     * Regions of this offer
                     * GET /cloudDB/enterprise/offer/{offerName}/region
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(regionName: string): {
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/offer/{offerName}/region/{regionName}
                         */
                        $get(): Promise<cloudDB.enterprise_Offer_Region>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
            };
        }
        region: {
            /**
             * Regions with their capabilities
             * GET /cloudDB/enterprise/region
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(regionName: string): {
                /**
                 * Get this object properties
                 * GET /cloudDB/enterprise/region/{regionName}
                 */
                $get(): Promise<cloudDB.enterprise_Region>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            };
        }
    }
}

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cloudDB Models
 */
export namespace cloudDB {
    // interface fullName: cloudDB.Dump.Dump
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
    // interface fullName: cloudDB.Service.Service
    export interface Service {
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        quotas: cloudDB.project.Quotas;
        status: cloudDB.project.Status;
        taskId?: string;
    }
    // interface fullName: cloudDB.Task.Task
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
        // type fullname: cloudDB.dump.Status
        export type Status = "created" | "creating" | "deleting"
    }
    export namespace enterprise {
        export namespace Backup {
            // type fullname: cloudDB.enterprise.Backup.StatusEnum
            export type StatusEnum = "archived" | "archiving" | "created" | "creating" | "deleting"
        }
        // interface fullName: cloudDB.enterprise.Cluster.enterprise_Cluster
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
        export namespace Cluster {
            // interface fullName: cloudDB.enterprise.Cluster.Backup.enterprise_Cluster_Backup
            export interface enterprise_Cluster_Backup {
                clusterId: string;
                creationDate: string;
                effectiveCreationDate?: string;
                id: string;
                internal: boolean;
                lastUpdate: string;
                name: string;
                size?: number;
                status: cloudDB.enterprise.Backup.StatusEnum;
                taskId?: string;
            }
            // interface fullName: cloudDB.enterprise.Cluster.Endpoint.enterprise_Cluster_Endpoint
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
            // interface fullName: cloudDB.enterprise.Cluster.Host.enterprise_Cluster_Host
            export interface enterprise_Cluster_Host {
                creationDate: string;
                id: string;
                lastUpdate: string;
                name: string;
                status?: cloudDB.enterprise.Host.StatusEnum;
                taskId?: string;
            }
            // interface fullName: cloudDB.enterprise.Cluster.LdpMember.enterprise_Cluster_LdpMember
            export interface enterprise_Cluster_LdpMember {
                creationDate: string;
                id: string;
                lastUpdate: string;
                note?: string;
                status: cloudDB.enterprise.LdpMember.StatusEnum;
                taskId?: string;
                username: string;
            }
            // interface fullName: cloudDB.enterprise.Cluster.Maintenance.enterprise_Cluster_Maintenance
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
            // interface fullName: cloudDB.enterprise.Cluster.MaintenanceWindow.enterprise_Cluster_MaintenanceWindow
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
            // interface fullName: cloudDB.enterprise.Cluster.Restore.enterprise_Cluster_Restore
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
            export namespace Restore {
                // interface fullName: cloudDB.enterprise.Cluster.Restore.User.enterprise_Cluster_Restore_User
                export interface enterprise_Cluster_Restore_User {
                    creationDate: string;
                    id: string;
                    lastUpdate: string;
                    name: string;
                    restoreId: string;
                    status: cloudDB.enterprise.Restore.User.StatusEnum;
                    taskId?: string;
                }
            }
            // interface fullName: cloudDB.enterprise.Cluster.SecurityGroup.enterprise_Cluster_SecurityGroup
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
            export namespace SecurityGroup {
                // interface fullName: cloudDB.enterprise.Cluster.SecurityGroup.Rule.enterprise_Cluster_SecurityGroup_Rule
                export interface enterprise_Cluster_SecurityGroup_Rule {
                    creationDate: string;
                    id: string;
                    lastUpdate: string;
                    securityGroupId: string;
                    source: string;
                    status: cloudDB.enterprise.SecurityGroupRule.StatusEnum;
                    taskId?: string;
                }
            }
            // type fullname: cloudDB.enterprise.Cluster.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "reopening" | "restarting" | "scaling" | "suspended" | "suspending" | "updating"
            // interface fullName: cloudDB.enterprise.Cluster.User.enterprise_Cluster_User
            export interface enterprise_Cluster_User {
                clusterId: string;
                creationDate: string;
                id: string;
                lastUpdate: string;
                name: string;
                status: cloudDB.enterprise.User.StatusEnum;
                taskId?: string;
            }
        }
        export namespace Endpoint {
            // type fullname: cloudDB.enterprise.Endpoint.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "disabled" | "disabling" | "enabled" | "enabling"
        }
        export namespace Host {
            // type fullname: cloudDB.enterprise.Host.StatusEnum
            export type StatusEnum = "configured" | "created" | "creating" | "deleting" | "rebooted" | "rebooting" | "reinstalling" | "reopening" | "suspended" | "suspending"
        }
        export namespace LdpMember {
            // type fullname: cloudDB.enterprise.LdpMember.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
        }
        export namespace Maintenance {
            // type fullname: cloudDB.enterprise.Maintenance.StatusEnum
            export type StatusEnum = "cancelled" | "done" | "running" | "scheduled"
        }
        export namespace MaintenanceWindow {
            // type fullname: cloudDB.enterprise.MaintenanceWindow.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting"
        }
        // interface fullName: cloudDB.enterprise.Offer.enterprise_Offer
        export interface enterprise_Offer {
            creationDate: string;
            lastUpdate: string;
            maxHostCount?: number;
            minHostCount: number;
            name: string;
            status: cloudDB.enterprise.Offer.StatusEnum;
        }
        export namespace Offer {
            // interface fullName: cloudDB.enterprise.Offer.Region.enterprise_Offer_Region
            export interface enterprise_Offer_Region {
                hostLeft?: number;
                offerName: string;
                regionName: string;
                status: cloudDB.enterprise.Offer.Region.StatusEnum;
            }
            export namespace Region {
                // type fullname: cloudDB.enterprise.Offer.Region.StatusEnum
                export type StatusEnum = "available" | "unavailable"
            }
            // type fullname: cloudDB.enterprise.Offer.StatusEnum
            export type StatusEnum = "available" | "planned" | "testing" | "unavailable"
            // type fullname: cloudDB.enterprise.Offer.TypeEnum
            export type TypeEnum = "postgresql"
        }
        // interface fullName: cloudDB.enterprise.Region.enterprise_Region
        export interface enterprise_Region {
            creationDate: string;
            lastUpdate: string;
            maintenanceDayOfWeek: number;
            maintenanceDuration: number;
            maintenanceStartTime: string;
            name: string;
            status: cloudDB.enterprise.Region.StatusEnum;
        }
        export namespace Region {
            // type fullname: cloudDB.enterprise.Region.StatusEnum
            export type StatusEnum = "created"
        }
        export namespace Restore {
            // type fullname: cloudDB.enterprise.Restore.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting"
            export namespace User {
                // type fullname: cloudDB.enterprise.Restore.User.StatusEnum
                export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
            }
        }
        export namespace SecurityGroup {
            // type fullname: cloudDB.enterprise.SecurityGroup.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
        }
        export namespace SecurityGroupRule {
            // type fullname: cloudDB.enterprise.SecurityGroupRule.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
        }
        export namespace User {
            // type fullname: cloudDB.enterprise.User.StatusEnum
            export type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating"
        }
    }
    export namespace instance {
        // type fullname: cloudDB.instance.Type
        export type Type = "standard"
    }
    export namespace project {
        // interface fullName: cloudDB.project.Quotas.Quotas
        export interface Quotas {
            standard: cloudDB.project.quotas.Standard;
        }
        // type fullname: cloudDB.project.Status
        export type Status = "created" | "creating" | "deleting" | "reopening" | "suspended" | "suspending"
        export namespace quotas {
            // interface fullName: cloudDB.project.quotas.Standard.Standard
            export interface Standard {
                instance: cloudDB.project.quotas.standard.Quota;
            }
            export namespace standard {
                // interface fullName: cloudDB.project.quotas.standard.Quota.Quota
                export interface Quota {
                    current: number;
                    max: number;
                }
            }
        }
    }
    export namespace standard {
        // interface fullName: cloudDB.standard.Configuration.standard_Configuration
        export interface standard_Configuration {
            details: cloudDB.standard.configuration.Detail[];
            lastUpdate: string;
            status: cloudDB.standard.configuration.Status;
            taskId?: string;
        }
        // interface fullName: cloudDB.standard.Database.standard_Database
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
        // interface fullName: cloudDB.standard.Flavor.standard_Flavor
        export interface standard_Flavor {
            cpu?: number;
            disk?: complexType.UnitAndValue<number>;
            name: string;
            ram?: complexType.UnitAndValue<number>;
            status: cloudDB.standard.flavor.Status;
            supportedRegionNames: string[];
        }
        // interface fullName: cloudDB.standard.Grant.standard_Grant
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
        // interface fullName: cloudDB.standard.Image.standard_Image
        export interface standard_Image {
            name: string;
            status: cloudDB.standard.image.Status;
            supportedFlavorNames: string[];
            type: cloudDB.standard.image.Type;
            version: string;
        }
        // interface fullName: cloudDB.standard.Instance.standard_Instance
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
        // interface fullName: cloudDB.standard.Oom.Oom
        export interface Oom {
            date: string;
            sizeReached: number;
        }
        // interface fullName: cloudDB.standard.Region.standard_Region
        export interface standard_Region {
            name: string;
            status: cloudDB.standard.region.Status;
            type: cloudDB.standard.region.Type;
        }
        // interface fullName: cloudDB.standard.TemporaryLogsLink.TemporaryLogsLink
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        // interface fullName: cloudDB.standard.User.standard_User
        export interface standard_User {
            creationDate: string;
            databases: cloudDB.standard.user.Database[];
            lastUpdate: string;
            name: string;
            status: cloudDB.standard.user.Status;
            taskId?: string;
        }
        // interface fullName: cloudDB.standard.Whitelist.standard_Whitelist
        export interface standard_Whitelist {
            creationDate: string;
            lastUpdate: string;
            name: string;
            network: string;
            status: cloudDB.standard.whitelist.Status;
            taskId?: string;
        }
        export namespace configuration {
            // interface fullName: cloudDB.standard.configuration.Detail.Detail
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
            // type fullname: cloudDB.standard.configuration.Status
            export type Status = "applied" | "updating"
            export namespace detail {
                // type fullname: cloudDB.standard.configuration.detail.Type
                export type Type = "boolean" | "number" | "string"
            }
        }
        export namespace database {
            // interface fullName: cloudDB.standard.database.Dump.standard_database_Dump
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
            // interface fullName: cloudDB.standard.database.Extension.standard_database_Extension
            export interface standard_database_Extension {
                description: string;
                name: string;
                requiredExtensions: string[];
                status: cloudDB.standard.database.extension.Status;
            }
            // type fullname: cloudDB.standard.database.Status
            export type Status = "created" | "creating" | "deleting" | "dumping" | "importing" | "restoring"
            // interface fullName: cloudDB.standard.database.User.User
            export interface User {
                grantId: string;
                grantType: cloudDB.standard.grant.Type;
                userName: string;
            }
            export namespace extension {
                // type fullname: cloudDB.standard.database.extension.Status
                export type Status = "disabled" | "disabling" | "enabled" | "enabling"
            }
        }
        export namespace flavor {
            // type fullname: cloudDB.standard.flavor.Status
            export type Status = "available" | "testing" | "unavailable"
        }
        export namespace grant {
            // type fullname: cloudDB.standard.grant.Status
            export type Status = "created" | "creating" | "deleting" | "updating"
            // type fullname: cloudDB.standard.grant.Type
            export type Type = "admin" | "none" | "ro" | "rw"
        }
        export namespace image {
            // interface fullName: cloudDB.standard.image.Capabilities.Capabilities
            export interface Capabilities {
                database: cloudDB.standard.image.capabilities.Capability;
                dump: cloudDB.standard.image.capabilities.Capability;
                grant: cloudDB.standard.image.capabilities.Capability;
                user: cloudDB.standard.image.capabilities.Capability;
            }
            // type fullname: cloudDB.standard.image.Status
            export type Status = "available" | "testing" | "unavailable"
            // type fullname: cloudDB.standard.image.Type
            export type Type = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis"
            export namespace capabilities {
                // interface fullName: cloudDB.standard.image.capabilities.Capability.Capability
                export interface Capability {
                    create: boolean;
                    delete: boolean;
                    update: boolean;
                }
            }
        }
        export namespace instance {
            // interface fullName: cloudDB.standard.instance.CreationRules.CreationRules
            export interface CreationRules {
                databaseName?: cloudDB.standard.instance.creationRules.CreationRule;
                userName?: cloudDB.standard.instance.creationRules.CreationRule;
                userPassword?: cloudDB.standard.instance.creationRules.CreationRule;
            }
            // interface fullName: cloudDB.standard.instance.Flavor.Flavor
            export interface Flavor {
                cpu?: number;
                disk?: complexType.UnitAndValue<number>;
                name: string;
                ram?: complexType.UnitAndValue<number>;
            }
            // interface fullName: cloudDB.standard.instance.Image.Image
            export interface Image {
                capabilities: cloudDB.standard.image.Capabilities;
                name: string;
            }
            // interface fullName: cloudDB.standard.instance.MetricsData.MetricsData
            export interface MetricsData {
                endpoint: string;
                readToken: string;
            }
            // interface fullName: cloudDB.standard.instance.Region.Region
            export interface Region {
                name?: string;
                type?: cloudDB.standard.region.Type;
            }
            // type fullname: cloudDB.standard.instance.Status
            export type Status = "creating" | "deleting" | "reopening" | "restarting" | "running" | "starting" | "stopped" | "stopping" | "suspended" | "suspending" | "updating"
            export namespace creationRules {
                // interface fullName: cloudDB.standard.instance.creationRules.CreationRule.CreationRule
                export interface CreationRule {
                    exclude: string[];
                    max: number;
                    min: number;
                    regex: string;
                }
            }
        }
        export namespace region {
            // type fullname: cloudDB.standard.region.Status
            export type Status = "available" | "testing" | "unavailable"
            // type fullname: cloudDB.standard.region.Type
            export type Type = "hosting" | "internal" | "public"
        }
        export namespace user {
            // interface fullName: cloudDB.standard.user.Database.Database
            export interface Database {
                databaseName: string;
                grantId: string;
                grantType: cloudDB.standard.grant.Type;
            }
            // type fullname: cloudDB.standard.user.Status
            export type Status = "created" | "creating" | "deleting" | "updating"
        }
        export namespace whitelist {
            // type fullname: cloudDB.standard.whitelist.Status
            export type Status = "created" | "creating" | "deleting" | "updating"
        }
    }
    export namespace task {
        // type fullname: cloudDB.task.Status
        export type Status = "cancelled" | "doing" | "done" | "error" | "todo"
    }
}
export namespace complexType {
    // interface fullName: complexType.SafeKeyValue<T>.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    // interface fullName: complexType.UnitAndValue<T>.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    // interface fullName: services.Service.Service
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
 * Api Proxy model
 */// Apis harmony
// path /cloudDB
export interface CloudDB{
    enterprise: {
        cluster: {
            // GET /cloudDB/enterprise/cluster
            $get(): Promise<string[]>;
            $(clusterId: string): {
                // GET /cloudDB/enterprise/cluster/{clusterId}
                $get(): Promise<cloudDB.enterprise.Cluster>;
                // PUT /cloudDB/enterprise/cluster/{clusterId}
                $put(params?: {autoBackup?: boolean, backupSize?: number, creationDate?: string, hostCount?: number, id?: string, lastUpdate?: string, name?: string, offerName?: string, offerType?: cloudDB.enterprise.Offer.TypeEnum, regionName?: string, restoredVolumeSize?: number, status?: cloudDB.enterprise.Cluster.StatusEnum, taskId?: string, version?: string}): Promise<void>;
                backup: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/backup
                    $get(): Promise<string[]>;
                    // POST /cloudDB/enterprise/cluster/{clusterId}/backup
                    $post(params: {clusterId: string, name: string}): Promise<cloudDB.enterprise.Cluster.Backup>;
                    $(backupId: string): {
                        // DELETE /cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}
                        $delete(): Promise<void>;
                        // GET /cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}
                        $get(): Promise<cloudDB.enterprise.Cluster.Backup>;
                    };
                }
                confirmTermination: {
                    // POST /cloudDB/enterprise/cluster/{clusterId}/confirmTermination
                    $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
                }
                endpoint: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/endpoint
                    $get(): Promise<string[]>;
                    $(endpointId: string): {
                        // GET /cloudDB/enterprise/cluster/{clusterId}/endpoint/{endpointId}
                        $get(): Promise<cloudDB.enterprise.Cluster.Endpoint>;
                    };
                }
                host: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/host
                    $get(): Promise<string[]>;
                    $(hostId: string): {
                        // GET /cloudDB/enterprise/cluster/{clusterId}/host/{hostId}
                        $get(): Promise<cloudDB.enterprise.Cluster.Host>;
                    };
                }
                logs: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/logs
                    $get(): Promise<string[]>;
                    // POST /cloudDB/enterprise/cluster/{clusterId}/logs
                    $post(params: {note?: string, username: string}): Promise<cloudDB.enterprise.Cluster.LdpMember>;
                    $(logsId: string): {
                        // DELETE /cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}
                        $delete(): Promise<void>;
                        // GET /cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}
                        $get(): Promise<cloudDB.enterprise.Cluster.LdpMember>;
                    };
                }
                maintenance: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/maintenance
                    $get(): Promise<string[]>;
                    $(maintenanceId: string): {
                        // DELETE /cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}
                        $delete(): Promise<void>;
                        // GET /cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}
                        $get(): Promise<cloudDB.enterprise.Cluster.Maintenance>;
                    };
                }
                maintenanceWindow: {
                    // DELETE /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                    $delete(): Promise<void>;
                    // GET /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                    $get(): Promise<cloudDB.enterprise.Cluster.MaintenanceWindow>;
                    // POST /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                    $post(params?: {dayOfWeek?: number, duration?: number, startTime?: string}): Promise<cloudDB.enterprise.Cluster.MaintenanceWindow>;
                    // PUT /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                    $put(params?: {clusterId?: string, creationDate?: string, dayOfWeek?: number, duration?: number, id?: string, lastUpdate?: string, startTime?: string, status?: cloudDB.enterprise.MaintenanceWindow.StatusEnum, taskId?: string}): Promise<void>;
                }
                restore: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/restore
                    $get(): Promise<string[]>;
                    // POST /cloudDB/enterprise/cluster/{clusterId}/restore
                    $post(params?: {backupId?: string, timestamp?: string}): Promise<cloudDB.enterprise.Cluster.Restore>;
                    $(restoreId: string): {
                        // DELETE /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}
                        $delete(): Promise<void>;
                        // GET /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}
                        $get(): Promise<cloudDB.enterprise.Cluster.Restore>;
                        user: {
                            // GET /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user
                            $get(): Promise<cloudDB.enterprise.Cluster.Restore.User>;
                            // POST /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user
                            $post(params: {password: string}): Promise<cloudDB.enterprise.Cluster.Restore.User>;
                        }
                    };
                }
                scale: {
                    // POST /cloudDB/enterprise/cluster/{clusterId}/scale
                    $post(params: {count: number}): Promise<cloudDB.enterprise.Cluster>;
                }
                securityGroup: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/securityGroup
                    $get(): Promise<string[]>;
                    // POST /cloudDB/enterprise/cluster/{clusterId}/securityGroup
                    $post(params: {clusterId: string, name: string}): Promise<cloudDB.enterprise.Cluster.SecurityGroup>;
                    $(securityGroupId: string): {
                        // DELETE /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}
                        $delete(): Promise<void>;
                        // GET /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}
                        $get(): Promise<cloudDB.enterprise.Cluster.SecurityGroup>;
                        // PUT /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}
                        $put(params?: {clusterId?: string, creationDate?: string, id?: string, lastUpdate?: string, name?: string, rulesCount?: number, status?: cloudDB.enterprise.SecurityGroup.StatusEnum, taskId?: string}): Promise<void>;
                        rule: {
                            // GET /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule
                            $get(): Promise<string[]>;
                            // POST /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule
                            $post(params: {source: string}): Promise<cloudDB.enterprise.Cluster.SecurityGroup.Rule>;
                            $(ruleId: string): {
                                // DELETE /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}
                                $delete(): Promise<void>;
                                // GET /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}
                                $get(): Promise<cloudDB.enterprise.Cluster.SecurityGroup.Rule>;
                            };
                        }
                    };
                }
                serviceInfos: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/serviceInfos
                    $get(): Promise<services.Service>;
                    // PUT /cloudDB/enterprise/cluster/{clusterId}/serviceInfos
                    $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
                }
                task: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/task
                    $get(params?: {function_?: string, status?: cloudDB.task.Status}): Promise<string[]>;
                    $(taskId: string): {
                        // GET /cloudDB/enterprise/cluster/{clusterId}/task/{taskId}
                        $get(): Promise<cloudDB.Task>;
                    };
                }
                terminate: {
                    // POST /cloudDB/enterprise/cluster/{clusterId}/terminate
                    $post(): Promise<string>;
                }
                user: {
                    // GET /cloudDB/enterprise/cluster/{clusterId}/user
                    $get(): Promise<cloudDB.enterprise.Cluster.User>;
                    // POST /cloudDB/enterprise/cluster/{clusterId}/user
                    $post(params: {password: string}): Promise<cloudDB.enterprise.Cluster.User>;
                }
            };
        }
        offer: {
            // GET /cloudDB/enterprise/offer
            $get(): Promise<string[]>;
            $(offerName: string): {
                // GET /cloudDB/enterprise/offer/{offerName}
                $get(): Promise<cloudDB.enterprise.Offer>;
                region: {
                    // GET /cloudDB/enterprise/offer/{offerName}/region
                    $get(): Promise<string[]>;
                    $(regionName: string): {
                        // GET /cloudDB/enterprise/offer/{offerName}/region/{regionName}
                        $get(): Promise<cloudDB.enterprise.Offer.Region>;
                    };
                }
            };
        }
        region: {
            // GET /cloudDB/enterprise/region
            $get(): Promise<string[]>;
            $(regionName: string): {
                // GET /cloudDB/enterprise/region/{regionName}
                $get(): Promise<cloudDB.enterprise.Region>;
            };
        }
    }
// Api
  /**
   * Operations about the CLOUDDB service
   * List available services
   */
  get(path: '/cloudDB/enterprise/cluster'): () => Promise<string[]>;
  /**
   * Cluster
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}'): (params: {clusterId: string}) => Promise<cloudDB.enterprise.Cluster>;
  /**
   * List the cloudDB.enterprise.Cluster.Backup objects
   * Backups of this cluster
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/backup'): (params: {clusterId: string}) => Promise<string[]>;
  /**
   * Backup
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}'): (params: {backupId: string, clusterId: string}) => Promise<cloudDB.enterprise.Cluster.Backup>;
  /**
   * List the cloudDB.enterprise.Cluster.Endpoint objects
   * Cluster endpoints
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/endpoint'): (params: {clusterId: string}) => Promise<string[]>;
  /**
   * Endpoints
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/endpoint/{endpointId}'): (params: {clusterId: string, endpointId: string}) => Promise<cloudDB.enterprise.Cluster.Endpoint>;
  /**
   * List the cloudDB.enterprise.Cluster.Host objects
   * Hosts of this cluster
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/host'): (params: {clusterId: string}) => Promise<string[]>;
  /**
   * Host
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/host/{hostId}'): (params: {clusterId: string, hostId: string}) => Promise<cloudDB.enterprise.Cluster.Host>;
  /**
   * List the cloudDB.enterprise.Cluster.LdpMember objects
   * Logs access for this cluster
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/logs'): (params: {clusterId: string}) => Promise<string[]>;
  /**
   * Member
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}'): (params: {clusterId: string, logsId: string}) => Promise<cloudDB.enterprise.Cluster.LdpMember>;
  /**
   * List the cloudDB.enterprise.Cluster.Maintenance objects
   * Cluster maintenances
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenance'): (params: {clusterId: string}) => Promise<string[]>;
  /**
   * Maintenance window
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}'): (params: {clusterId: string, maintenanceId: string}) => Promise<cloudDB.enterprise.Cluster.Maintenance>;
  /**
   * Maintenance window
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow'): (params: {clusterId: string}) => Promise<cloudDB.enterprise.Cluster.MaintenanceWindow>;
  /**
   * List the cloudDB.enterprise.Cluster.Restore objects
   * Restores of this cluster
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/restore'): (params: {clusterId: string}) => Promise<string[]>;
  /**
   * Restore
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}'): (params: {clusterId: string, restoreId: string}) => Promise<cloudDB.enterprise.Cluster.Restore>;
  /**
   * User
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user'): (params: {clusterId: string, restoreId: string}) => Promise<cloudDB.enterprise.Cluster.Restore.User>;
  /**
   * List the cloudDB.enterprise.Cluster.SecurityGroup objects
   * Cluster security groups
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup'): (params: {clusterId: string}) => Promise<string[]>;
  /**
   * Security group
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}'): (params: {clusterId: string, securityGroupId: string}) => Promise<cloudDB.enterprise.Cluster.SecurityGroup>;
  /**
   * List the cloudDB.enterprise.Cluster.SecurityGroup.Rule objects
   * Security group rules
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule'): (params: {clusterId: string, securityGroupId: string}) => Promise<string[]>;
  /**
   * Security group rule
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}'): (params: {clusterId: string, ruleId: string, securityGroupId: string}) => Promise<cloudDB.enterprise.Cluster.SecurityGroup.Rule>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/serviceInfos'): (params: {clusterId: string}) => Promise<services.Service>;
  /**
   * List the cloudDB.Task objects
   * Cluster tasks
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/task'): (params: {clusterId: string, function_?: string, status?: cloudDB.task.Status}) => Promise<string[]>;
  /**
   * Tasks
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/task/{taskId}'): (params: {clusterId: string, taskId: string}) => Promise<cloudDB.Task>;
  /**
   * User
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/cluster/{clusterId}/user'): (params: {clusterId: string}) => Promise<cloudDB.enterprise.Cluster.User>;
  /**
   * List the cloudDB.enterprise.Offer objects
   * Offers with their capabilities
   */
  get(path: '/cloudDB/enterprise/offer'): () => Promise<string[]>;
  /**
   * Offer
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/offer/{offerName}'): (params: {offerName: string}) => Promise<cloudDB.enterprise.Offer>;
  /**
   * List the cloudDB.enterprise.Offer.Region objects
   * Regions of this offer
   */
  get(path: '/cloudDB/enterprise/offer/{offerName}/region'): (params: {offerName: string}) => Promise<string[]>;
  /**
   * Offer capabilities for this region
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/offer/{offerName}/region/{regionName}'): (params: {offerName: string, regionName: string}) => Promise<cloudDB.enterprise.Offer.Region>;
  /**
   * List the cloudDB.enterprise.Region objects
   * Regions with their capabilities
   */
  get(path: '/cloudDB/enterprise/region'): () => Promise<string[]>;
  /**
   * Region
   * Get this object properties
   */
  get(path: '/cloudDB/enterprise/region/{regionName}'): (params: {regionName: string}) => Promise<cloudDB.enterprise.Region>;
  /**
   * Cluster
   * Alter this object properties
   */
  put(path: '/cloudDB/enterprise/cluster/{clusterId}'): (params: {clusterId: string, autoBackup?: boolean, backupSize?: number, creationDate?: string, hostCount?: number, id?: string, lastUpdate?: string, name?: string, offerName?: string, offerType?: cloudDB.enterprise.Offer.TypeEnum, regionName?: string, restoredVolumeSize?: number, status?: cloudDB.enterprise.Cluster.StatusEnum, taskId?: string, version?: string}) => Promise<void>;
  /**
   * Maintenance window
   * Alter this object properties
   */
  put(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow'): (params: {clusterId: string, creationDate?: string, dayOfWeek?: number, duration?: number, id?: string, lastUpdate?: string, startTime?: string, status?: cloudDB.enterprise.MaintenanceWindow.StatusEnum, taskId?: string}) => Promise<void>;
  /**
   * Security group
   * Alter this object properties
   */
  put(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}'): (params: {clusterId: string, securityGroupId: string, creationDate?: string, id?: string, lastUpdate?: string, name?: string, rulesCount?: number, status?: cloudDB.enterprise.SecurityGroup.StatusEnum, taskId?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/cloudDB/enterprise/cluster/{clusterId}/serviceInfos'): (params: {clusterId: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * List the cloudDB.enterprise.Cluster.Backup objects
   * Create a cluster backup
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/backup'): (params: {clusterId: string, name: string}) => Promise<cloudDB.enterprise.Cluster.Backup>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/confirmTermination'): (params: {clusterId: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * List the cloudDB.enterprise.Cluster.LdpMember objects
   * Grant access to cluster logs
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/logs'): (params: {clusterId: string, note?: string, username: string}) => Promise<cloudDB.enterprise.Cluster.LdpMember>;
  /**
   * Maintenance window
   * Add a maintenance window to this cluster
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow'): (params: {clusterId: string, dayOfWeek?: number, duration?: number, startTime?: string}) => Promise<cloudDB.enterprise.Cluster.MaintenanceWindow>;
  /**
   * List the cloudDB.enterprise.Cluster.Restore objects
   * Create a cluster restore at a given point in time
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/restore'): (params: {clusterId: string, backupId?: string, timestamp?: string}) => Promise<cloudDB.enterprise.Cluster.Restore>;
  /**
   * User
   * Create a user on this restored instance
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user'): (params: {clusterId: string, restoreId: string, password: string}) => Promise<cloudDB.enterprise.Cluster.Restore.User>;
  /**
   * scale operations
   * Scale a cluster
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/scale'): (params: {clusterId: string, count: number}) => Promise<cloudDB.enterprise.Cluster>;
  /**
   * List the cloudDB.enterprise.Cluster.SecurityGroup objects
   * Add a security group to this cluster
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup'): (params: {clusterId: string, name: string}) => Promise<cloudDB.enterprise.Cluster.SecurityGroup>;
  /**
   * List the cloudDB.enterprise.Cluster.SecurityGroup.Rule objects
   * Add a rule to this security group
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule'): (params: {clusterId: string, securityGroupId: string, source: string}) => Promise<cloudDB.enterprise.Cluster.SecurityGroup.Rule>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/terminate'): (params: {clusterId: string}) => Promise<string>;
  /**
   * User
   * Create a user on this cluster
   */
  post(path: '/cloudDB/enterprise/cluster/{clusterId}/user'): (params: {clusterId: string, password: string}) => Promise<cloudDB.enterprise.Cluster.User>;
  /**
   * Backup
   * Delete a cluster backup
   */
  delete(path: '/cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}'): (params: {backupId: string, clusterId: string}) => Promise<void>;
  /**
   * Member
   * Revoke access to cluster's logs
   */
  delete(path: '/cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}'): (params: {clusterId: string, logsId: string}) => Promise<void>;
  /**
   * Maintenance window
   * Delete the maintenance
   */
  delete(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}'): (params: {clusterId: string, maintenanceId: string}) => Promise<void>;
  /**
   * Maintenance window
   * Delete the maintenance window
   */
  delete(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow'): (params: {clusterId: string}) => Promise<void>;
  /**
   * Restore
   * Delete a restore
   */
  delete(path: '/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}'): (params: {clusterId: string, restoreId: string}) => Promise<void>;
  /**
   * Security group
   * Delete a security group from this cluster
   */
  delete(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}'): (params: {clusterId: string, securityGroupId: string}) => Promise<void>;
  /**
   * Security group rule
   * Delete a rule from this security group
   */
  delete(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}'): (params: {clusterId: string, ruleId: string, securityGroupId: string}) => Promise<void>;
}
